# ➿ Toistolauseet

**Toistolauseilla** (eli *silmukoilla*) voidaan toistaa jonkin lauseen tai
lauseiden suoritusta niin kauan kuin jokin ehto on voimassa. Toistolauseita
ovat `while`, `do-while`, `for` ja `foreach`.

## `while`-silmukka

Tulostetaan luvut 1–10 käyttäen `while`-silmukkaa.

```csharp
int i = 1;
while (i <= 10)
{
    Console.WriteLine(i);
    i++;
}
```

`while`-silmukassa on vain toistoehto ja runko-osa. Alustuksesta (`int i = 1`)
ja päivityksestä (`i++`) on huolehdittava itse. Jos päivitys unohtuu, silmukka
ei pääty koskaan.

## `do-while`-silmukka

`do-while`-silmukka tarkistaa ehdon vasta kierroksen lopussa, joten runko
suoritetaan aina vähintään kerran. Se sopii esimerkiksi syötteen kysymiseen,
kunnes syöte kelpaa.

```csharp
int luku;
do
{
    Console.Write("Anna positiivinen luku: ");
    luku = int.Parse(Console.ReadLine());
} while (luku <= 0);
```

## `for`-silmukka

Sama tulostus `for`-silmukalla:

```csharp
for (int i = 1; i <= 10; i++)
{
    Console.WriteLine(i);
}
```

`for`- ja `while`-silmukoilla voidaan periaatteessa tehdä ihan samat asiat.
Tavallista on kuitenkin, että `for`-silmukkaa käytetään, kun tiedetään, kuinka
monta kierrosta silmukkaa halutaan suorittaa. `while`-silmukkaa käytetään, kun
silmukan suorituskertojen määrä ei ole tiedossa etukäteen.

`for`-silmukkaan kuuluu osat alustus (yllä `int i = 1`), toistoehto
(`i <= 10`), päivitys (`i++`) ja runko-osa (aaltosulkeiden rajaama osa). Mikä
tahansa näistä osista voi olla tyhjä, mutta puolipisteet on silti
kirjoitettava.

## `foreach`-silmukka

`foreach`-silmukkaa käytetään, kun halutaan käydä läpi kaikki taulukon tai
kokoelman alkiot. Taulukoihin tutustutaan osassa 5 ja kokoelmiin, kuten
[listoihin](../osa6/1-listat.md) ja [sanakirjoihin](../osa6/2-sanakirjat.md),
osassa 6.

```csharp
int[] luvut = { 7, 3, 1, -5, 9 };
foreach (int luku in luvut)
{
    Console.WriteLine(luku);
}
```

Huomaa erityisesti, että `foreach`-silmukassa ei ole erikseen alustus- ja
päivityslauseita. `foreach`-silmukka soveltuu hyvin tilanteisiin, joissa
taulukon tai kokoelman alkiot halutaan käydä läpi ilman, että niiden indeksejä
tarvitaan. `foreach`-silmukkaa ei voi käyttää, jos taulukon tai kokoelman
alkioita halutaan muuttaa.

## Sisäkkäiset silmukat

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

## `break` ja `continue`

Tarvittaessa `break`-lauseella voidaan lopettaa silmukka ja siirtyä silmukan
jälkeiseen koodiin. Toisaalta `continue`-lauseella voidaan tarvittaessa päättää
yksi silmukan kierros.

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

## Tehtävät

<!-- Tehtävät lisätään vaiheessa B. -->
