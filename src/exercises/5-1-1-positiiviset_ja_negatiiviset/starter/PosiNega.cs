using System;
using System.Collections.Generic;
using System.Net.Http.Headers;


public class PositiivisetJaNegatiiviset
{
    // NORUNBEGIN
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
    // NORUNEND

    // BYCODEBEGIN

    // BYCODEEND
}
