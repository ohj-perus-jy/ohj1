Toteuta funktio `SummaYli(taulukko, raja)`, joka ottaa
parametrina `int`-tyyppisen kokonaislukutaulukon sekä raja-arvon, ja palauttaa summan niistä luvuista,
jotka ylittävät raja-arvon. 

Esimerkki aliohjelman toiminnasta:

```csharp
public static void Main()
{
  int[] luvut = { 12, 3, 5, 9, 7, 1, 4, 9 };
  int summa = SummaYli(luvut, 4);
  Console.WriteLine("Yli 4 olevien lukujen summa on: " + summa);
}
```

Yllä olevan pääohjelman ajamisen seurauksena komentoriviin tulostuisi:

```
Yli 4 olevien lukujen summa on: 42
```

Huomaa, että tämä funktio ei saa tulostaa mitään.
