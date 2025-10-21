# Osa 4

Katso luennot 7 ja 8

Tässä osassa...

 * toistorakenteet
 * merkkijonot

## ➿ Toistorakenteet

**Toistorakenteilla** voidaan toistaa jonkin lauseen tai lauseiden suoritusta niin kauan kuin jokin ehto on voimassa. Toistorakenteita ovat `while`, `do-while`, `for`, ja `foreach`.

Tulostetaan luvut 1-10 käyttäen `while`-silmukkaa ja `for`-silmukkaa.

```csharp
int i = 1;
while (i <= 10)
{
    Console.WriteLine(i);
    i++;
}
```

```csharp
for (int i = 1; i <= 10; i++)
{
    Console.WriteLine(i);
}
```

For- ja while-silmukoilla voidaan periaatteessa tehdä ihan samat asiat. Tavallista on kuitenkin, että for-silmukkaa käytetään, kun tiedetään, kuinka monta kierrosta silmukkaa halutaan suorittaa. While-silmukkaa käytetään, kun silmukan suorituskertojen määrä ei ole tiedossa etukäteen.

For-silmukkaan kuuluu osat alustus (yllä `int i = 1`), toistoehto (`i <= 10`), päivitys (`i++`) ja runko-osa (aaltosulkeiden rajaama osa). Mikä tahansa näistä osista voi olla tyhjä, mutta puolipisteet on silti kirjoitettava. While-silmukassa on vain toistoehto ja runko-osa. Alustuksesta ja päivityksestä on huolehdittava itse. 

**Foreach**-silmukkaa käytetään erityisesti kokoelmien, kuten listojen ja [sanakirjojen](#-sanakirja) kanssa. Foreach-silmukkaa käytetään erityisesti tilanteissa, kun halutaan käydä läpi kaikki taulukon tai kokoelman alkiot. Myöhemmillä kursseilla käydään myös läpi abstrakteja tietorakenteita, joissa foreach-silmukka on kätevä tai jopa ainoa tapa käydä läpi tietorakenteen alkiot.

```csharp
int[] luvut = { 7, 3, 1, -5, 9};
foreach (int luku in luvut)
{
    Console.WriteLine(luku);
}
```

Huomaa erityisesti, että foreach-silmukassa ei ole erikseen alustus- ja päivityslauseita. Foreach-silmukka soveltuu hyvin tilanteisiin, joissa taulukon tai kokoelman alkiot halutaan käydä läpi ilman, että niiden indeksejä tarvitaan. Foreach-silmukkaa ei voi käyttää, jos taulukon tai kokoelman alkioita halutaan muuttaa.

Silmukoita voi kirjoittaa myös sisäkkäin.

```csharp
for (int i = 1; i < 5; i++)
{
    for (int j = 2; j < 8; j++)
    {
        // Tulostetaan kaikki mahdolliset
        // i:n ja j:n muodostamien parien arvot
        Console.WriteLine($"{i}, {j}");
    }
}
```

Tarvittaessa `break`-lauseella voidaan lopettaa silmukka ja siirtyä silmukan jälkeiseen koodiin. Toisaalta `continue`-lauseella voidaan tarvittaessa päättää yksi silmukan kierros.

```csharp
// Tulostetaan luvut 1, 2, 3, 4, 6, 7. Luku 5 jätetään välistä,
// ja luvun 8 kohdalla silmukka lopetetaan.
for (int i = 1; i <= 10; i++)
{
    if (i == 5)
    {
        continue; // Siirrytään seuraavaan kierrokseen
    }
    if (i == 8)
    {
        break; // Lopetetaan silmukan suoritus
    }
    Console.WriteLine(i);
}
```


## Merkkijonot

`String`

## Tehtävät

Tee TIMissä (linkki)