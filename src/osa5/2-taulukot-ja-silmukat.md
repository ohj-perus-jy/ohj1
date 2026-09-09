# 🔄 Taulukot ja silmukat

> [!HUOMAUTUS]
> Tämä luku on kesken: runko on valmis, teksti kirjoitetaan rakenneuudistuksen
> vaiheessa B.

Taulukko ja silmukka kulkevat käsi kädessä: silmukalla käydään taulukon alkiot läpi yksi kerrallaan. Tässä luvussa kirjoitetaan taulukkoa käsitteleviä funktioita ja testataan ne ComTestillä.

## Taulukon läpikäynti `for`-silmukalla

## Läpikäynti `foreach`-silmukalla

`foreach`-silmukkaa käytetään, kun halutaan käydä läpi kaikki taulukon tai
kokoelman alkiot. Kokoelmiin, kuten [listoihin](../osa6/1-listat.md) ja
[sanakirjoihin](../osa6/2-sanakirjat.md), tutustutaan osassa 6.

```csharp
int[] luvut = { 7, 3, 1, -5, 9 };
foreach (int luku in luvut)
{
    Console.WriteLine(luku);
}
```

Huomaa erityisesti, että `foreach`-silmukassa ei ole erikseen alustus- ja
päivityslauseita, eikä indeksimuuttujaa. `foreach`-silmukka soveltuu hyvin
tilanteisiin, joissa taulukon tai kokoelman alkiot halutaan käydä läpi ilman,
että niiden indeksejä tarvitaan. `foreach`-silmukkaa ei voi käyttää, jos
taulukon tai kokoelman alkioita halutaan muuttaa; silloin tarvitaan
`for`-silmukka ja indeksi.

## Esimerkki: summa ja keskiarvo

## Esimerkki: suurimman alkion etsiminen

## Taulukon täyttäminen ja kopioiminen

## Taulukkofunktioiden testaaminen ComTestillä

## Esimerkki: pallot taulukkoon Jypelissä

## Tehtävät

<!-- Tehtävät lisätään vaiheessa B. -->
