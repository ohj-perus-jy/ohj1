using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

/// <summary>
/// Lasketaan taulukosta summa.
/// </summary>
public class TaulukonSummaYli
{
    /// <summary>
    /// Luodaan taulukko ja kutsutaan aliohjelmaa.
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
    /// <param name="luvut"></param>
    /// <param name="raja"></param>
    /// <returns></returns>
    /// <example>
    /// <pre name="test">
    ///  int[] luvut = {3,5,1};
    ///  SummaYli(luvut,0) === 9;
    ///  SummaYli(luvut,1) === 8;
    ///  SummaYli(luvut,3) === 5;
    ///  SummaYli(luvut,5) === 0;
    /// </pre>
    /// </example>
    //BYCODEBEGIN

    //BYCODEEND
}