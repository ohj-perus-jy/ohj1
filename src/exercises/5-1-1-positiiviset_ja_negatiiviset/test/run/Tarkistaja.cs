using System.Collections.Generic;

using System;
using System.Linq;
using System.IO;
using System.Reflection;

public class Tarkistaja
{
    /// <summary>
    /// Näytetäänkö tulokset opiskelijalle.
    /// </summary>
    private readonly static bool naytaTulokset = true;

    public static void Main()
    {
        // Path to the student's code file

        const string Testattava = "PosiNega";
        const string Tiedosto = "PositiivisetJaNegatiiviset.cs";
        const string ParametrinTyyppi = "int[]";
        const string PaluuarvonTyyppi = "void";

        Testaaja testaaja = new(Tiedosto, Testattava, ParametrinTyyppi, PaluuarvonTyyppi);
        //string? virhe = Testaaja.TutkiKoodi("PositiivisetJaNegatiiviset.cs");
        var stVirheet = testaaja.TutkiKoodi();
        if (stVirheet != null)
        {
            Console.WriteLine(stVirheet);
            return;
        }
        List<ArviointikohdeTuloste<int[]>> arviointikohteet = Arviointikohteet.PosiNega;

        // Console.WriteLine($"{TutkittavanNimi} tulostaa:");

        (double pisteet, string virheet) = testaaja.Testaa<int[]>(arviointikohteet);

        if (naytaTulokset)
        {

            if (pisteet < arviointikohteet.Sum(x => x.Pistemaara))
            {
                string osittain = pisteet > 0 ? "osittain " : "";
                string s = $"Funktion {Testattava} ratkaisusi on {osittain}väärin.";
                Console.WriteLine(s);
                Console.WriteLine("Löydetyt virheet:");
                Console.WriteLine(virheet);
                //Console.WriteLine("Pisteet: " + Math.Floor(pisteet));
            }
            else
            {
                Console.WriteLine("Ratkaisusi on oikein!");
                //Console.WriteLine("Pisteet: " + Math.Floor(pisteet));
            }
        }
        string randomStr = "RANDOMCHECK";
        Console.Write(randomStr);
        Console.Write(pisteet);
        Console.WriteLine();
        Console.WriteLine("Tallennettu.");
    }
}