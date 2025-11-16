using System;


public class TaulukonSummaYli
{
    /// <summary>
    /// Kutsut ja tulostukset.
    /// </summary>
    public static void Main()
    {
        int[] luvut = { 12, 3, 5, 9, 7, 1, 4, 9 };

        int summa = SummaYli(luvut, 4);
        Console.WriteLine("Yli 4 olevien lukujen summa on: " + summa);
    }


    /// <summary>
    /// Lasketaan niiden lukujen summa, jotka ylittävät valitun rajan
    /// </summary>
    /// <param name="luvut">Tutkittava taulukko.</param>
    /// <param name="raja">Tullakseen lasketuksi
    /// summaan on alkion oltava suurempaa kuin
    /// tämä luku.</param>
    /// <returns>Summa.</returns>
    /// <example>
    /// <pre name="test">
    /// int[] luvut = {3, 5, 1};
    /// SummaYli(luvut, 1) === 8;
    /// SummaYli(luvut, 3) === 5;
    /// SummaYli(luvut, 5) === 0;
    /// </pre>
    /// </example>
    // BYCODEBEGIN
    public static int SummaYli(int[] luvut, int raja)
    {
        int summa = 0;
        int i = 0;
        while (i < luvut.Length)
        {
            if (luvut[i] > raja)
            {
                summa += luvut[i];
            }
            i++;
        }
        return summa;
    }
    // BYCODEEND
}