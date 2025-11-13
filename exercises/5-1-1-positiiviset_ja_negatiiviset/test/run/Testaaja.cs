#pragma warning disable CS1701
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;

public class Testaaja
{
    private readonly string _tutkittavanNimi;
    // private static readonly Random r = new();
    private readonly string _parametrinTyyppi;
    private readonly string _paluuArvonTyyppi;
    private readonly string _opiskelijanKoodi;

    public Testaaja(string kooditiedosto, string tutkittavanNimi, string parametrinTyyppi, string paluuArvonTyyppi)
    {
        if (!File.Exists(kooditiedosto))
        {
            throw new IOException("File not found: " + kooditiedosto);
        }

        _opiskelijanKoodi = File.ReadAllText(kooditiedosto);
        _tutkittavanNimi = tutkittavanNimi;
        _parametrinTyyppi = parametrinTyyppi;
        _paluuArvonTyyppi = paluuArvonTyyppi;
    }

    public string TutkiKoodi()
    {
        var syntaxTree = CSharpSyntaxTree.ParseText(_opiskelijanKoodi);
        var root = syntaxTree.GetRoot();

        var methodDeclarations = root.DescendantNodes().OfType<MethodDeclarationSyntax>();
        var classDeclarations = root.DescendantNodes().OfType<ClassDeclarationSyntax>();
        string luokanNimi = classDeclarations.First().Identifier.Text;

        var funktionNimiOikein = false;
        var silmukkaaKaytetty = false;
        var parametriOikein = false;
        var onkoStaattinen = false;
        var onkoJulkinen = false;
        var paluuarvonTyyppi = "";

        foreach (var method in methodDeclarations)
        {
            var methodName = method.Identifier.Text;

            // Tutkitaan vain halutun niminen funktio
            if (funktionNimiOikein == false && methodName == _tutkittavanNimi)
                funktionNimiOikein = true;
            else continue;

            // Tutkitaan että oikean niminen funktio on löytynyt
            if (methodName == _tutkittavanNimi)
            {
                funktionNimiOikein = true;
            }

            // Tutkitaan että metodi on staattinen
            onkoStaattinen = method.Modifiers.Any(SyntaxKind.StaticKeyword);

            // Tutkitaan että metodi on julkinen
            onkoJulkinen = method.Modifiers.Any(SyntaxKind.PublicKeyword);

            // Tutkitaan että funktiolla on täsmälleen yksi parametri,
            // jonka tyyppi on int[]
            var parametrienMaaraOikein = method.ParameterList.Parameters.Count == 1;
            if (parametrienMaaraOikein)
            {
                var parametri = method.ParameterList.Parameters.First();
                if (parametri.Type != null) parametriOikein = parametri.Type.ToString() == _parametrinTyyppi;
            }

            // Otetaan paluuarvon tyyppi talteen
            paluuarvonTyyppi = method.ReturnType.ToString();

            // Onko silmukkaa käytetty
            silmukkaaKaytetty = method.DescendantNodes()
                .OfType<StatementSyntax>()
                .Any(stmt =>
                    stmt is ForStatementSyntax or WhileStatementSyntax or DoStatementSyntax or ForEachStatementSyntax);
        }

        (bool virhe, string virheilmoitus)[] virheetJaVirheilmoitukset =
        [
            (!funktionNimiOikein, "Funktion nimi väärin tai funktio puuttuu kokonaan.\nPisteet: 0"),
            (!onkoStaattinen, "Funktio ei ole staattinen.\nKäytä static-avainsanaa.\nPisteet: 0"),
            (!onkoJulkinen, "Funktio ei ole julkinen.\nKäytä public-avainsanaa.\nPisteet: 0"),
            (!parametriOikein,
                "Funktiolla tulisi olla täsmälleen yksi parametri, jonka tyyppi on int[].\nMuita parametreja ei saa olla.\nPisteet: 0"),
            (paluuarvonTyyppi != _paluuArvonTyyppi,
                $"Kirjoittamasi paluuarvon tyyppi ({paluuarvonTyyppi}) on väärin.\nPisteet: 0"),
            (!silmukkaaKaytetty, "Piti käyttää silmukkaa, mutta et käyttänyt.\nPisteet: 0"),
        ];

        foreach (var (virhe, virheilmoitus) in virheetJaVirheilmoitukset)
        {
            if (!virhe) continue;
            // Console.WriteLine(virheilmoitus);
            return virheilmoitus;
        }

#pragma warning disable CS8603 // Possible null reference return.
        return null;
#pragma warning restore CS8603 // Possible null reference return.
    }

    public (double pistemaara, string virheet) Testaa<T1>(List<ArviointikohdeTuloste<T1>> arviointikohteet)
    {
        double pisteet = 0.0;
        string virheet = "";

        foreach (var arviointikohde in arviointikohteet)
        {
            try
            {
                //string testattavaTuloste = testattava.Invoke(arviointikohde.Syote);
                string testattavaTuloste =
                    CheckAndInvoke<T1>(_opiskelijanKoodi, _tutkittavanNimi, arviointikohde.Syote);
                string oikeaTuloste = arviointikohde.Tuloste;
                var testi =
                    // if (testattavaTuloste is int[]) testi = String.Join(",", testattavaTuloste) == String.Join(",", oikeaTuloste);
                    testattavaTuloste.Trim() == oikeaTuloste.Trim();
                if (testi) pisteet += arviointikohde.Pistemaara;
                else
                {
                    virheet += $" * {arviointikohde.Virhe} \n";
                    virheet +=
                        $" * Esimerkiksi syötteillä " +
                        $"\"{arviointikohde.SyoteJonona(arviointikohde.Syote)}\" pitäisi palauttaa " +
                        $"\"{arviointikohde.Tuloste.Trim()}\". Sinun funktiosi palauttaa " +
                        $"\"{testattavaTuloste.Trim()}\".\n";
                    return (pisteet, virheet);
                }
            }
            catch (TargetInvocationException tie)
            {
                virheet += $" * {arviointikohde.Virhe} Ohjelmasi kaatuu nyt virheeseen: {tie.InnerException?.Message} \n";
                return (pisteet, virheet);
            }
            catch (Exception)
            {
                virheet += $" * {arviointikohde.Virhe} \n";
                return (pisteet, virheet);
            }
        }

        return (pisteet, virheet);
    }


    /// <summary>
    /// Check whether method exists and invoke it.
    /// </summary>
    /// <param name="code">Code</param>
    /// <param name="methodName">Method to be invoked</param>
    /// <param name="argument">Argument to the method</param>
    private static string CheckAndInvoke<T>(string code, string methodName, T argument)
    {
        var syntaxTree = CSharpSyntaxTree.ParseText(code);
        var root = syntaxTree.GetRoot();

        // Find the method declaration
        var methodDeclaration = root.DescendantNodes()
            .OfType<MethodDeclarationSyntax>()
            .FirstOrDefault(method => method.Identifier.Text == methodName);

        if (methodDeclaration == null) return "Method not found in the provided code.";
        var compiledAssembly = Compile<T>(root);
        return InvokeMethod(compiledAssembly, methodName, argument);
    }

    /// <summary>
    /// Invoke the method and capture the output.
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="compiledAssembly"></param>
    /// <param name="methodName"></param>
    /// <param name="argument"></param>
    /// <param name="inputString"></param>
    /// <returns></returns>
    /// <exception cref="InvalidOperationException"></exception>
    private static string InvokeMethod<T>(Assembly compiledAssembly, string methodName, T argument)
    {
        // Find the class and method
        var type = compiledAssembly.GetTypes().FirstOrDefault() ??
                   throw new InvalidOperationException("No classes found in the compiled assembly.");
        var method = type.GetMethod(methodName, BindingFlags.Static | BindingFlags.Public) ??
                     throw new InvalidOperationException("Method not found in compiled assembly.");

        // Redirect Console output to capture printed messages
        var originalConsoleOut = Console.Out;
        using var stringWriter = new StringWriter();
        Console.SetOut(stringWriter);

        // Invoke the Print method
        try
        {
            // Retrieve and print the output for manipulation, then restore the original Console.Out and print the output
            method.Invoke(null, [argument]);
            
            var output = stringWriter.ToString();
            Console.WriteLine(output);
            
            // We don't want to print the output here, because it would 
            // print the output of all the test cases to the console.
            // Console.WriteLine(output);
            return output;
        }
        finally
        {
            Console.SetOut(originalConsoleOut);
        }
    }

    /// <summary>
    /// Compile the modified code and return the assembly. 
    /// If the compilation fails, print the diagnostics and return null.
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="root">Root node of the code</param>
    /// <returns>Compiled assembly</returns>
    private static Assembly Compile<T>(SyntaxNode root)
    {
        // The modified code for debugging
        var newSyntaxTree = CSharpSyntaxTree.Create((CSharpSyntaxNode)root);
        // For debugging:
        // Console.WriteLine(newSyntaxTree.ToString());

        var compilation = CSharpCompilation.Create("StudentCode",
            [newSyntaxTree],
            [
                MetadataReference.CreateFromFile(typeof(object).Assembly.Location),
                MetadataReference.CreateFromFile(Assembly.Load("System").Location),
                MetadataReference.CreateFromFile(Assembly.Load("System.Runtime").Location),
                MetadataReference.CreateFromFile(Assembly.Load("System.Console").Location),
                MetadataReference.CreateFromFile(Assembly.Load("System.Linq").Location),
                MetadataReference.CreateFromFile(Assembly.Load("netstandard").Location),
                MetadataReference.CreateFromFile(Assembly.Load("Microsoft.CSharp").Location),
                MetadataReference.CreateFromFile(Assembly.Load("Microsoft.Win32.Primitives").Location),
                MetadataReference.CreateFromFile(Assembly.Load("Microsoft.Win32.Registry").Location),
            ],
            new CSharpCompilationOptions(OutputKind.DynamicallyLinkedLibrary));

        using var ms = new MemoryStream();
        var result = compilation.Emit(ms);

        if (!result.Success)
        {
            Console.WriteLine("Compilation failed:");
            foreach (var diagnostic in result.Diagnostics)
            {
                Console.WriteLine(diagnostic.ToString());
            }

            return null;
        }

        ms.Seek(0, SeekOrigin.Begin);
        var assembly = Assembly.Load(ms.ToArray());
        return assembly;
    }
}