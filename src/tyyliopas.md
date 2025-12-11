# Tyyliopas

Tämä on lyhyt koodin tyyliopas Ohjelmointi 1 -kurssille. Tyyliopas perustuu suurelta osin [Microsoftin C#-kielen tyylioppaaseen](https://learn.microsoft.com/fi-fi/dotnet/csharp/fundamentals/coding-style/coding-conventions).

## Yleiset periaatteet

Koodin tulee olla luettavaa ja ylläpidettävää. Ajattele, että joku kun sinä tai joku muu lukee koodiasi kuukauden tai vuoden päästä, hän ymmärtää mitä koodi tekee ilman turhaa päänvaivaa.

Käytä selkeitä ja kuvailevia nimiä muuttujille, metodeille ja luokille. Käytä mieluummin hieman pitkiä nimiä, jotka kertovat tarkoituksensa, kuin lyhyitä ja epäselviä nimiä.

Poista käyttämätön koodi ja kommentit. Pidä koodi siistinä ja järjestyksessä.

Projektikansiossa tulee olla vain tarpeelliset tiedostot. Poista vanhat, käyttämättömät tai väliaikaiset tiedostot.

Käytä Riderin automaattisia C#-kielen koodinmuotoiluasetuksia säännöllisesti (Code <i class="bi bi-chevron-right"></i> Reformat Code...).

## Dokumentointi ja kommentointi

Käytä XML-dokumentointikommentteja julkisissa metodeissa ja luokissa. Dokumentoi metodien parametrit ja paluuarvot.

```csharp
/// <summary>
/// Laskee kahden luvun summan.
/// </summary>
/// <param name="a">Ensimmäinen luku.</param>
/// <param name="b">Toinen luku.</param>
/// <returns>Palauttaa lukujen summan.</returns>
public int LaskeSumma(int a, int b)
{
    return a + b;
}
```

Voit käyttää tavallisia kommentteja selittämään monimutkaista logiikkaa koodissasi, mutta vältä liiallista kommentointia. Koodi pitäisi olla itsestään selittävää.

```csharp
// Väärin: Liian paljon kommentteja ja huonot muuttujien nimet
int x = 10; // Määritellään muuttuja x ja asetetaan sen arvoksi 10
int y = 20; // Määritellään muuttuja y ja asetetaan sen arvoksi 20
int z = 30; // Määritellään muuttuja z ja asetetaan sen arvoksi 30
int s = x + y + z; // Lasketaan x, y ja z yhteen ja tallennetaan tulos s:ään   

// Oikein: Selkeä koodi ilman tarpeettomia kommentteja
double anttiJussinRahat = 0.1;
double denisinRahat = 20;
double saminRahat = 1000.67;
double kokoPotti = anttiJussinRahat + denisinRahat + saminRahat;
```

## Sisennykset ja välilyönnit

Käytä neljän välilyönnin sisennystä koodilohkoissa, älä käytä tabulaattoreita. 

(Pisteet lisätty havainnollistamaan välilyöntien määrää.)

```csharp
if (ehto)
{
....for (int i = 0; i < 10; i++)
....{
........Console.WriteLine(i);
....}
}
```

Avaa ja sulje aaltosulkeet omille riveilleen.

Oikein: 

```csharp
if (ehto)
{
    // koodia
}
```

Väärin:

```csharp
if (ehto) {
    // koodia 
}
```

## Nimeämiskäytännöt

- **Luokat ja metodit**: PascalCase (esim. `Laskin`, `LaskeSumma`, `HäiriönKäsittely` tai `HairionKasittely`). 
- **Muuttujat ja kentät**: camelCase (esim. `laskettavaLuku`, `tulos`)
- **Vakiot**: PascalCase (esim. `const int MaxArvo`, `const double Muunnoskerroin`)
- **Tiedostojen nimet**: PascalCase (esim. `Laskin.cs`, `Ohjelma.cs`)
- **Kansiot**: PascalCase (esim. `Palvelut`, `Mallit`)

## Rivinvaihdot

Jätä yksi, enintään kaksi tyhjää riviä metodien ja luokkien väliin parantamaan luettavuutta.

```csharp
public class Laskin
{ 
    public int LaskeSumma(int a, int b)
    {
        return a + b;
    }

    public int LaskeErotus(int a, int b)
    {
        return a - b;
    }
}
```

Poista ylimääräiset tyhjät rivit koodista. 