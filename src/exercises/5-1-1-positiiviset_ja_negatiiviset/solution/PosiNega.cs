using System;

/// <summary>
/// Harjoitellaan taulukoiden ja silmukoiden käyttöä.
/// </summary>
public class PositiivisetJaNegatiiviset
{
    public static void Main()
    {
        // Esimerkki 1: 
        // Taulukossa on kaksi positiivista lukua (2, 7) ja yksi negatiivinen
        // luku (-35), joten positiivisia lukuja on enemmän kuin negatiivisia.
        PosiNega([2, -35, 7, 0]); // Komentoriville tulostuu "Positiivisia!"

        // Esimerkki 2:
        // Ennen lukua 0 ei ole mitään lukuja, joten negatiivisia ja positiivisa
        // on ikään kuin yhtä monta.
        PosiNega([0]); // Komentoriville tulostuu "Yhtä monta!"

        // Esimerkki 3:
        // Vain ennen lukua 0 olevat luvut otetaan laskuihin mukaan.
        // Tässä negatiivisia on kaksi kappaletta, positiivisia nolla.
        PosiNega([-3, -10, 0, 5, 1, 3, 10]); // Komentoriville tulostuu "Negatiivisia!"
    }


    // BYCODEBEGIN
    /// <summary>
    /// Tulostaa tekstin "Positiivisia!", "Negatiivisia!" tai "Yhtä monta!"
    /// sen perusteella, kuinka monta negatiivisia ja positiivisia lukuja taulukossa on.
    /// </summary>
    /// <param name="luvut">Luvut, jotka tutkitaan.</param>
    public static void PosiNega(int[] luvut)
    {
        int positiivisia = 0;

        for (var i = 0; i < luvut.Length; i++)
        {
            int luku = luvut[i];
            if (luku > 0) positiivisia++;
            if (luku < 0) positiivisia--;
            if (luku == 0) break;
        }

        // Tässä voi käyttää myös foreach-silmukkaa, koska indeksimuuttujaa i ei tarvita muuhun kuin luvun
        // hakemiseen taulukosta:
        // foreach (int luku in luvut)
        // {
        //     if (luku > 0) positiivisia++;
        //     if (luku < 0) positiivisia--;
        //     if (luku == 0) break;
        // }

        if (positiivisia > 0) Console.WriteLine("Positiivisia!");
        else if (positiivisia < 0) Console.WriteLine("Negatiivisia!");
        else Console.WriteLine("Yhtä monta!");
    }
    // BYCODEEND
}