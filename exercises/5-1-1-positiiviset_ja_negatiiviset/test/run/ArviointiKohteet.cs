using System;
using System.Collections.Generic;

public record ArviointikohdeTuloste<T1>(T1 Syote, string Tuloste, string Virhe, double Pistemaara)
{
    public string SyoteJonona(T1 syote)
    {
        if (syote is int[] ints) return string.Join(", ", values: ints ?? Array.Empty<int>());
#pragma warning disable CS8602 // Dereference of a possibly null reference.
        return syote.ToString();
#pragma warning restore CS8602 // Dereference of a possibly null reference.
    }
}

public static class Arviointikohteet
{
    public static List<ArviointikohdeTuloste<int[]>> PosiNega =
    [
        new(Syote: [1, 5, -1, 0, -2], Tuloste: "Positiivisia!", Virhe:"Jos ennen nollaa on enemmän positiivisia, pitäisi tulostaa Positiivisia!" ,Pistemaara: 1),
        new(Syote: [-1, -2], Tuloste: "Negatiivisia!", Virhe: "Pitäisi tulostaa Negatiivisia!, kun taulukko sisältää vain negatiivisia lukuja.", Pistemaara: 1),
        new(Syote: [0, -1, -2], Tuloste: "Yhtä monta!", Virhe: "Pitäisi tulostaa Yhtä monta!, kun ennen nollaa ei ole yhtään lukua.", Pistemaara: 1),
        new(Syote: [], Tuloste: "Yhtä monta!", Virhe: "Tyhjällä taulukolla pitäisi tulostaa Yhtä monta!", Pistemaara: 1),
    ];
}