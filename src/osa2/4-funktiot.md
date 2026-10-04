# Funktiot

Olet kutsunut funktioita jo monta kertaa. `Math.Sqrt(16)` antaa luvun 4,
`Math.Max(3, 8)` antaa suuremman luvuista, `int.Parse("42")` antaa merkkijonoa
vastaavan kokonaisluvun ja `Console.ReadLine()` antaa käyttäjän kirjoittaman
rivin. Kaikki toimivat samalla tavalla: funktiolle annetaan jotakin, ja se
antaa takaisin arvon. Nyt kirjoitat omia funktioita.

Idea on tuttu matematiikasta. Funktio f(x) = x² ottaa luvun ja antaa sen
neliön: f(3) = 9. C#:ssa sama funktio näyttää tältä:

```csharp,ignore
public static double Nelio(double x)
{
    return x * x;
}
```

Funktio on nimetty [lauseke](./3-lauseet-ja-lausekkeet.md), jossa on aukko.
Aukko täytetään kutsussa: `Nelio(3)` on lauseke, jonka arvo on 9.

## Mihin funktioita tarvitaan?

Taskulaskimen √-näppäin on funktio. Kun painat sitä, et mieti, miten
neliöjuuri lasketaan. Riittää, että tiedät, mitä näppäin tekee. Omat funktiot
toimivat samoin: kun funktio on kerran kirjoitettu, sitä käytetään nimellä,
eikä sen sisältöä tarvitse enää ajatella.

* **Sama lasku tarvitaan monta kertaa.** Painoindeksi lasketaan jakamalla paino
  pituuden neliöllä. Jos ohjelma laskee sen kymmenelle henkilölle, kaava on
  kymmenessä kohdassa. Copy-paste toimii mainiosti, kunnes huomaat kaavassa
  virheen ja korjaat sen kymmeneen kohtaan. Löydät niistä hyvällä tuurilla
  yhdeksän.
* **Nimi kertoo, mitä lasketaan.** `paino / (pituus * pituus)` vaatii
  lukijalta pysähtymisen. `Painoindeksi(paino, pituus)` ei vaadi. Hyvin
  nimetty funktio on kuin hyvin nimetty muuttuja: se säästää kommentin ja
  lukijan hermot.
* **Ohjelma jakautuu osiin.** `Main` lukee syötteen, kutsuu funktioita ja
  tulostaa tulokset. Jokainen funktio hoitaa yhden laskun. Kun tulos on väärä,
  tiedät, mistä vikaa etsiä.
* **Pienen palan voi testata erikseen.** Funktiosta on helppo tarkistaa,
  antaako se oikean vastauksen: `Nelio(3)` pitää olla 9. Osassa 7 tarkistus
  annetaan koneen tehtäväksi: funktiolle kirjoitetaan
  [testit](../osa7/2-testaaminen-comtestilla.md), jotka ajetaan napin
  painalluksella.

Hyvä funktio on *itsenäinen*: se laskee tuloksensa pelkästään sille
annetuista arvoista. Silloin se toimii samalla tavalla riippumatta siitä,
mistä sitä kutsutaan, ja samaa funktiota voi käyttää muuallakin kuin siinä
kohdassa, jota varten se alun perin tehtiin.

## Kutsu: mitä sisään, mitä ulos

Aloitetaan käyttämisestä, koska sitä olet jo tehnyt. Funktion *kutsu*
koostuu funktion nimestä ja suluista. Sulkujen sisään kirjoitetaan arvot,
joita funktio tarvitsee. Niitä sanotaan *argumenteiksi*. Arvoa, jonka funktio
antaa takaisin, sanotaan *paluuarvoksi*.

```bob
        argumentti                              paluuarvo
                        .-------------------.
   16  ---------------->|     Math.Sqrt     |----------------> 4.0
                        '-------------------'

                        .-------------------.
3    8  --------------->|      Math.Max     |----------------> 8
                        '-------------------'
```

Kutsuessa funktiota kannattaa ajatella laatikkona, jonka sisältöä ei tarvitse
tuntea. Riittää tietää, mitä laatikkoon pannaan ja mitä sieltä tulee ulos.

| Kutsu                 | Tarvitsee     | Antaa takaisin                        |
| --------------------- | ------------- | ------------------------------------- |
| `Math.Sqrt(16)`       | luvun         | `double`-luvun `4`                    |
| `Math.Max(3, 8)`      | kaksi lukua   | suuremman niistä, `8`                 |
| `int.Parse("42")`     | merkkijonon   | `int`-luvun `42`                      |
| `Console.ReadLine()`  | ei mitään     | käyttäjän kirjoittaman rivin          |

Viimeinen rivi näyttää, että funktio voi toimia ilman argumenttejakin. Sulut
kirjoitetaan silti.

Funktion kutsu on lauseke: sillä on arvo. Siksi kutsua voi käyttää
kaikkialla, missä arvoa tarvitaan.

```csharp
using System;

public class Kutsuja
{
    public static void Main()
    {
        double sivu = Math.Sqrt(144);           // paluuarvo talteen muuttujaan
        Console.WriteLine(sivu);                // 12
        Console.WriteLine(Math.Max(3, 8));      // paluuarvo suoraan argumentiksi: 8
        Console.WriteLine(Math.Sqrt(16) + 1);   // paluuarvo osana laskua: 5
    }
}
```

`Console.WriteLine` on poikkeus: se ei anna mitään takaisin, vaan tulostaa.
Tällaisiin aliohjelmiin palataan [myöhemmin](../osa3/2-aliohjelmat-ilman-paluuarvoa.md).

## Oma funktio

Kirjoitetaan nyt oma funktio. Alla `Nelio` laskee luvun neliön, ja `Main`
kutsuu sitä neljästi.

```csharp
using System;

public class Neliot
{
    public static void Main()
    {
        double ala = Nelio(3);
        Console.WriteLine(ala);                    // 9
        Console.WriteLine(Nelio(1.5));             // 2.25
        Console.WriteLine(Nelio(2) + Nelio(3));    // 13
    }

    public static double Nelio(double x)
    {
        return x * x;
    }
}
```

Funktio kirjoitetaan `Main`-aliohjelman *alapuolelle*, ja se on rakenteeltaan
aivan kuin `Main` itse. Käydään määrittely läpi osa kerrallaan:

```csharp,ignore
public static double Nelio(double x)
{
    return x * x;
}
```

* `public` tarkoittaa, että funktio on julkinen ja sitä voidaan kutsua mistä
  tahansa ohjelman osasta. Tällä kurssilla kaikki funktiot ovat julkisia.
* `static` tarkoittaa, että funktio kuuluu luokalle eikä oliolle.
  Konsoliohjelmissa se kirjoitetaan aina; Jypelissä se jätetään pois, kuten
  alempana nähdään.
* `double` on *paluuarvon tyyppi*: funktio antaa takaisin `double`-luvun.
* `Nelio` on funktion nimi. Nimi valitaan itse.
* `(double x)` on *parametri*: muuttuja, joka saa arvonsa kutsusta.
  Parametrille annetaan tyyppi ja nimi samoin kuin muuttujalle.
* Aaltosulkujen `{ }` väliin kirjoitetaan funktion *runko*. `return`-lause
  laskee lausekkeen `x * x` arvon ja antaa sen kutsujalle.

Määrittelyn ensimmäistä riviä sanotaan *esittelyriviksi* (engl. *header*).
Siitä näkee kaiken, mitä kutsuja tarvitsee: funktion nimen, sen tarvitsemat
tiedot ja sen, minkä tyyppisen arvon funktio antaa takaisin.

Kolme sääntöä, jotka kannattaa painaa mieleen heti:

* **Funktio kirjoitetaan luokan sisään, `Main`-aliohjelman rinnalle.** Ei
  `Main`-aliohjelman sisään eikä luokan ulkopuolelle. Määrittelyjärjestyksellä
  ei ole väliä: `Nelio` voi olla ennen `Main`-aliohjelmaa tai sen jälkeen.
* **Määrittely ei suorita mitään.** Funktion runko suoritetaan vasta, kun
  funktiota kutsutaan.
* **Tyypit kuuluvat määrittelyyn, arvot kutsuun.** Kutsussa ei toisteta sanoja
  `public static double`, eikä argumentin eteen kirjoiteta tyyppiä: pelkkä
  `Nelio(3)` riittää.

Myös `Main` on rakenteeltaan samanlainen. Sen paluuarvon tyypin paikalla lukee
`void`, joka tarkoittaa, että `Main` ei anna takaisin mitään. Siihen palataan,
kun käsitellään [aliohjelmia ilman
paluuarvoa](../osa3/2-aliohjelmat-ilman-paluuarvoa.md).

## Mitä kutsussa tapahtuu?

Katsotaan, miten kone suorittaa rivin

```csharp,ignore
double ala = Nelio(3) + 1;
```

1. Argumentin arvo lasketaan. Tässä se on valmiiksi `3`.
2. Suoritus siirtyy funktioon, ja parametri saa argumentin arvon. On kuin
   funktion rungon alkuun olisi kirjoitettu `double x = 3;`.
3. Runko suoritetaan. `return x * x;` laskee arvon `9`, ja suoritus palaa
   kutsukohtaan.
4. Kutsun paikalle tulee paluuarvo. Rivistä tulee `double ala = 9 + 1;`, ja
   `ala` saa arvon 10.

```bob
  "Main()"                        "Nelio(double x)"
     |
     | "double ala = Nelio(3) + 1;"
     |
     +------ "kutsu, x = 3" ------->+
     |                              | "return x * x;"
     |<----- "paluu, arvo 9" -------+
     |
     | "double ala = 9 + 1;"
     |
     v
```

Kohta 4 on koko asian ydin: kun funktio on suoritettu, kutsu korvautuu
paluuarvolla, aivan kuin kutsun paikalla olisi alun perin lukenut `9`.

> [!HUOMAUTUS]
> **Terminologiaa.** Kutsussa annettavia arvoja kutsutaan *argumenteiksi*.
> Argumenttien arvot välitetään funktion *parametreihin*. Kirjallisuudessa
> saatetaan nimittää kumpiakin parametreiksi (*todellinen* ja *muodollinen*
> parametri), mutta tässä käytämme edellä mainittuja termejä.

Kutsun alussa tapahtuu siis sijoitus *parametri = argumentti*. Siitä seuraa
kaksi asiaa, jotka kannattaa huomata heti.

**Argumentti voi olla mikä tahansa lauseke.** Sijoituksen oikealle puolelle
kelpaa luku, muuttuja, lasku tai toisen funktion kutsu, joten ne kaikki
kelpaavat myös argumentiksi. Lausekkeen arvo lasketaan *ensin*, ja vasta
valmis arvo sijoitetaan parametriin.

```csharp,ignore
double sivu = 4;
Console.WriteLine(Nelio(sivu));         // x = 4, tulostaa 16
Console.WriteLine(Nelio(sivu + 1));     // x = 5, tulostaa 25
Console.WriteLine(Nelio(Nelio(2)));     // ensin Nelio(2) on 4, sitten x = 4: 16
```

**Parametrin nimi on funktion oma asia.** Yllä kutsujan muuttuja on `sivu`,
mutta funktiossa sama arvo tunnetaan nimellä `x`. Nimien ei tarvitse olla
samat, eikä funktio edes tiedä, minkä nimisestä muuttujasta arvo tuli tai
tuliko se muuttujasta lainkaan. Parametriin kopioidaan pelkkä arvo. Parametri
on funktion oma muuttuja, joka syntyy kutsussa ja katoaa, kun funktio päättyy.
Tähän palataan [muuttujien näkyvyyden](../osa3/3-muuttujien-nakyvyys.md)
yhteydessä.

## Useita parametreja

Parametreja voi olla useita. Ne erotetaan pilkulla sekä määrittelyssä että
kutsussa. Alla `Keskiarvo` saa kaksi lukua ja palauttaa niiden keskiarvon:

```csharp
using System;

public class Keskiarvot
{
    public static void Main()
    {
        Console.WriteLine(Keskiarvo(7.5, 9));   // 8.25
        Console.WriteLine(Keskiarvo(7, 8));     // 7.5
    }

    public static double Keskiarvo(double a, double b)
    {
        return (a + b) / 2;
    }
}
```

Argumentit sijoitetaan parametreihin *järjestyksessä*: ensimmäinen argumentti
ensimmäiseen parametriin, toinen toiseen. Nimillä ei ole tässä mitään
merkitystä, vain paikalla.

```bob
  kutsu          "Keskiarvo(   7.5   ,      9   )"
                                |           |
                                v           v
  "määrittely"   "Keskiarvo(double a, double b)"

  kutsun alussa  "double a = 7.5;"
                 "double b = 9;"
```

Tästä seuraa kaksi sääntöä:

* **Argumentteja on yhtä monta kuin parametreja.** Kutsu `Keskiarvo(7.5)` ei
  käänny, koska `b` jäisi ilman arvoa.
* **Jokaisen argumentin pitää kelvata sijoitettavaksi vastaavaan
  parametriin.** Testi on helppo: jos sijoitus `double a = ...;` kääntyisi,
  arvo kelpaa myös argumentiksi.

Tyyppien ei silti tarvitse olla täsmälleen samat. Kokonaisluvun voi sijoittaa
`double`-muuttujaan, joten kutsu `Keskiarvo(7, 8)` toimii. Toiseen suuntaan
sijoitus ei onnistu, koska desimaalit katoaisivat: `int`-parametrille ei voi
antaa argumenttia `7.5`. Siksi luvut, joissa voi olla desimaaleja, kuten mitat
ja koordinaatit, kannattaa määritellä `double`-tyyppisiksi.

## Paluuarvon tyyppi

Funktio voi palauttaa minkä tahansa tyyppisen arvon. Paluuarvon tyyppi
kirjoitetaan esittelyriville nimen eteen, ja `return`-lauseen lausekkeen on
oltava sitä tyyppiä.

```csharp
using System;

public class Tyypit
{
    public static void Main()
    {
        Console.WriteLine(MuotoilePisteet("Maija", 120));   // Maija: 120 pistettä
        Console.WriteLine(OnkoTaysiIkainen(17));            // False
    }

    public static string MuotoilePisteet(string nimi, int pisteet)
    {
        return $"{nimi}: {pisteet} pistettä";
    }

    public static bool OnkoTaysiIkainen(int ika)
    {
        return ika >= 18;
    }
}
```

`MuotoilePisteet` saa kaksi erityyppistä parametria ja palauttaa merkkijonon.
`OnkoTaysiIkainen` palauttaa totuusarvon. Sen runko on yksi vertailu, koska
`ika >= 18` on jo itsessään lauseke, jonka arvo on `true` tai `false`
([Vertailuoperaattorit](./2-operaattorit.md#vertailuoperaattorit)).

## Kutsusta määrittelyyn

Uutta funktiota ei kannata aloittaa määrittelystä vaan *kutsusta*. Kirjoita
ensin rivi, jolla haluaisit funktiota käyttää, ikään kuin funktio olisi jo
olemassa. Esittelyrivin voi sen jälkeen lukea kutsusta lähes mekaanisesti.

Halutaan muotoilla pistetaulun rivejä. Mukavin kutsu olisi tällainen:

```csharp,ignore
string rivi = MuotoilePisteet("Maija", 120);
```

Käydään kutsu läpi vasemmalta oikealle:

| Kutsusta näkyy                               | Esittelyriville                  |
| -------------------------------------------- | -------------------------------- |
| tulos sijoitetaan `string`-muuttujaan        | paluuarvon tyyppi `string`       |
| funktion nimi on `MuotoilePisteet`           | `MuotoilePisteet`                |
| argumentteja on kaksi                        | kaksi parametria                 |
| 1. argumentti `"Maija"` on merkkijono        | `string` + itse keksitty nimi    |
| 2. argumentti `120` on kokonaisluku          | `int` + itse keksitty nimi       |

Alkuun tulevat tutut `public static`. Kutsussa on pelkkiä arvoja, joten
parametrien nimet pitää keksiä itse: mitä `"Maija"` ja `120` funktion
kannalta tarkoittavat?

```text
string rivi = MuotoilePisteet(  "Maija"  ,    120     );
   ↓                               ↓           ↓
public static string MuotoilePisteet(string nimi, int pisteet)
```

Työjärjestys on aina sama:

1. **Kirjoita kutsu.** Mieti, mitä tietoja funktio tarvitsee ja mitä se antaa
   takaisin.
2. **Kirjoita esittelyrivi** kutsun perusteella.
3. **Tee tynkä ja käännä.** *Tynkä* on funktio, jonka runko palauttaa jonkin
   oikean tyyppisen arvon, vaikka arvo olisi vielä väärä. Ohjelma kääntyy,
   vaikka funktio ei vielä tee oikeaa asiaa. Jos ei käänny, vika on kutsussa
   tai esittelyrivissä, ja se on helppo löytää, kun muuta uutta koodia ei vielä
   ole.
4. **Kirjoita runko.** Tässä vaiheessa unohda, mistä funktiota kutsutaan.
   Käytössäsi ovat parametrit, eikä muuta tarvita.

```csharp,ignore
public static string MuotoilePisteet(string nimi, int pisteet)
{
    return "";      // tynkä: kääntyy, mutta ei tee vielä oikeaa asiaa
}
```

Tynkä ei voi olla tyhjä runko `{ }`, koska esittelyrivillä luvataan palauttaa
`string`, ja kääntäjä pitää lupauksesta kiinni: `CS0161: not all code paths
return a value`. Lukuja palauttavassa funktiossa tynkä on tavallisesti
`return 0;` ja totuusarvoja palauttavassa `return false;`.

Tynkä on tarkistuspiste. Kun ohjelma kääntyy tyngän kanssa, tiedät, että kutsu
ja esittelyrivi sopivat yhteen, ja voit keskittyä runkoon. Sama ajatus pätee
ohjelmointiin yleisemminkin: tee pieni muutos, käännä ja aja, ja jatka vasta
sitten. Kymmenen rivin jälkeen virhe löytyy kymmeneltä riviltä. Sadan rivin
jälkeen sitä etsitään sadalta.

Osassa 4 työjärjestykseen lisätään dokumentointi ja osassa 7 testit, ks.
[Testaaminen ComTestillä](../osa7/2-testaaminen-comtestilla.md#ensimmäinen-testi-vaihe-vaiheelta).

## Funktio laskee, `Main` tulostaa

Alla oleva ohjelma kysyy käyttäjältä painon ja pituuden ja laskee
painoindeksin. Katso, mikä osa tekee mitäkin.

```csharp,ignore
using System;

public class Terveys
{
    public static void Main()
    {
        Console.Write("Paino (kg): ");
        double paino = double.Parse(Console.ReadLine());
        Console.Write("Pituus (m): ");
        double pituus = double.Parse(Console.ReadLine());

        double indeksi = Painoindeksi(paino, pituus);
        Console.WriteLine($"Painoindeksisi on {indeksi}");
    }

    public static double Painoindeksi(double paino, double pituus)
    {
        return paino / (pituus * pituus);
    }
}
```

`Painoindeksi` ei lue eikä tulosta mitään. Se saa arvot parametreina ja antaa
tuloksen paluuarvona. Syötteen lukeminen ja tulostaminen jäävät
`Main`-aliohjelmalle. Tästä on kaksi hyötyä:

* **Tuloksen voi käyttää mihin tahansa.** Kutsuja voi tulostaa sen, verrata
  sitä rajaan tai laskea monen henkilön keskiarvon. Jos funktio tulostaisi
  tuloksen itse, ohjelma ei saisi sitä käyttöönsä.
* **Funktion voi testata.** Testi kutsuu funktiota ja vertaa paluuarvoa
  odotettuun. Ruudulle tulostettua tekstiä testi ei näe.

Kirjoita siis laskeva funktio niin, ettei siinä ole `Console.WriteLine`- eikä
`Console.ReadLine`-kutsuja.

## Funktion nimeäminen

Funktiot nimetään *PascalCase*-tyylillä eli **isolla** alkukirjaimella, ja
jokainen sana alkaa isolla: `MuotoilePisteet`, ei `muotoilePisteet`. Näin
nimestä näkee heti, onko kyseessä muuttuja vai funktio. Ääkkösiä ei käytetä,
kuten ei muuttujissakaan: `Nelio`, ei `Neliö`. Katso tarkemmin
[Tyyliopas](../tyyliopas.md#nimeämiskäytännöt).

Nimi kertoo, mitä funktio antaa takaisin (`Keskiarvo`, `Painoindeksi`) tai mitä
se tekee arvoilleen (`MuotoilePisteet`, `LaskeAlennus`). Totuusarvon
palauttava funktio nimetään kysymykseksi: `OnkoTaysiIkainen`, `OnkoParillinen`.
Silloin kutsu luetaan luontevasti: `bool aikuinen = OnkoTaysiIkainen(ika);`.

## Funktiot Jypelissä

[Ensimmäisessä graafisessa ohjelmassa](../osa1/5-ensimmainen-graafinen-ohjelma.md)
jokainen olio luotiin usealla rivillä. Lumiukossa on kolme palloa, ja niiden
rivit ovat lähes samat. Kirjoitetaan pallon luominen funktioksi, joka
palauttaa valmiin pallon:

```csharp,feature-jypeli
using Jypeli;

public class Lumiukko : PhysicsGame
{
    public override void Begin()
    {
        Level.Background.Color = Color.Black;

        Add(LuoPallo(0, -200, 100));
        Add(LuoPallo(0, -50, 50));

        GameObject paa = LuoPallo(0, 30, 30);
        paa.Color = Color.Yellow;
        Add(paa);
    }

    public GameObject LuoPallo(double x, double y, double sade)
    {
        GameObject pallo = new GameObject(2 * sade, 2 * sade);
        pallo.Shape = Shape.Circle;
        pallo.Color = Color.White;
        pallo.Position = new Vector(x, y);
        return pallo;
    }
}
```

`LuoPallo` on funktio siinä missä `Nelio`: se saa parametreina paikan ja säteen
ja palauttaa arvon. Arvo on vain luvun sijaan `GameObject`, sama tyyppi kuin
aiemmissa Jypeli-esimerkeissä. Mikä olio tarkalleen on, selitetään
[myöhemmin](../osa3/4-jypeli-ja-oliot.md).

Kutsun `LuoPallo(0, -200, 100)` arvo on siis pallo, ja `Add` lisää sen peliin.
Koska funktio palauttaa pallon eikä lisää sitä itse, kutsuja voi vielä muuttaa
sitä: lumiukon pää on keltainen, vaikka `LuoPallo` tekee valkoisia palloja.

Kaksi eroa konsoliohjelmaan:

* Funktion edestä puuttuu `static`. Jypelissä aliohjelmat käyttävät yleensä
  pelin omia asioita, kuten `Add`-metodia ja `Level`-ominaisuutta, ja siksi ne
  kirjoitetaan ilman `static`-sanaa. Syy selitetään
  [olioiden](../osa3/4-jypeli-ja-oliot.md) yhteydessä; toistaiseksi riittää
  muistaa sääntö: konsolissa `public static`, Jypelissä `public`.
* `Begin`-aliohjelmassa on sana `override`. Se kertoo, että Jypelillä on oma
  `Begin`, jonka tilalle tämä kirjoitetaan. Omissa funktioissa sitä ei
  käytetä.

## Tyypillisiä virheitä

**Paluuarvo jää käyttämättä.** Rivi `Nelio(5);` kääntyy, mutta mitään ei näy:
funktio laskee arvon 25, eikä kukaan ota sitä vastaan. Paluuarvo pitää
sijoittaa muuttujaan, tulostaa tai käyttää laskussa. Jypelissä sama virhe näkyy
kuvasta: pelkkä `LuoPallo(0, 30, 30);` luo pallon, mutta koska sitä ei lisätä
peliin, lumiukolta puuttuu pää.

**`return` puuttuu.** Alla funktio laskee tuloksen muuttujaan mutta ei palauta
sitä. Kääntäjä ilmoittaa `CS0161: 'Virhe.Nelio(double)': not all code paths
return a value`. Klikkaa Play nähdäksesi virheilmoituksen ja lisää sitten
puuttuva rivi.

```csharp
using System;

public class Virhe
{
    public static void Main()
    {
        Console.WriteLine(Nelio(5));
    }

    public static double Nelio(double x)
    {
        double tulos = x * x;
    }
}
```

**Paluuarvo on väärää tyyppiä.** `return`-lauseen lausekkeen pitää sopia
paluuarvon tyyppiin samoin kuin sijoituksessa. Jos esittelyrivillä lukee `int`
ja runko on `return (a + b) / 2.0;`, kääntäjä ilmoittaa `CS0266: Cannot
implicitly convert type 'double' to 'int'`. Korjaa paluuarvon tyypiksi
`double`.

**Argumentteja on väärä määrä tai ne ovat väärässä järjestyksessä.** Kutsu
`Keskiarvo(7.5)` antaa virheen `CS7036: There is no argument given that
corresponds to the required parameter 'b'`. Kutsu `MuotoilePisteet(120,
"Maija")` antaa virheen `CS1503: Argument 1: cannot convert from 'int' to
'string'`. Kääntäjä kertoo, monesko argumentti ei kelpaa ja miksi.

**Tyypit on kirjoitettu kutsuun.** `Nelio(double 3)` antaa virheen `CS1525:
Invalid expression term 'double'`. Sama sekaannus toisin päin:
`public static double Nelio(double 3)` antaa virheen `CS1001: Identifier
expected`, koska `3` ei ole muuttujan nimi. Määrittelyssä kerrotaan, *millaista* tietoa
funktio ottaa vastaan, ei sitä, mitä tietoa sille jollakin kerralla annetaan.

**Parametrilta puuttuu tyyppi.** Muuttujia voi määritellä samalla rivillä
useita (`double a, b;`), mutta parametreja ei: jokaiselle kirjoitetaan oma
tyyppi, vaikka se olisi sama. `Keskiarvo(double a, b)` ei käänny,
`Keskiarvo(double a, double b)` kääntyy.

**Funktio `Main`-aliohjelman sisällä.** Funktiot ovat luokan sisällä
rinnakkain, eivät sisäkkäin. Jos `public static double Nelio(double x)` on
kirjoitettu `Main`-aliohjelman aaltosulkujen väliin, kääntäjä ilmoittaa
`CS0106: The modifier 'public' is not valid for this item`. Ilmoitus kuulostaa
oudolta, mutta syy on sijainti: siirrä funktio `Main`-aliohjelman sulkevan
aaltosulun jälkeen. Kääntäjä puhuu sanasta `public`, koska C# sallii
aliohjelman sisään niin sanotun paikallisen funktion, jolla ei saa olla
`public`-sanaa. Tällä kurssilla paikallisia funktioita ei käytetä.

> [!HUOMAUTUS]
> **Terminologiaa.** Tällä kurssilla *aliohjelma* on yleisnimi kaikille
> ohjelman nimetyille osille. Arvon palauttavaa aliohjelmaa kutsutaan
> *funktioksi*, ja olioon liittyvää aliohjelmaa *metodiksi*. Kirjallisuudessa
> sanoja käytetään ristiin, joten älä hämmenny, jos kohtaat eri nimityksiä.
> Englanninkielisissä lähteissä C#-aliohjelmia sanotaan lähes aina metodeiksi
> (*method*).

<details closed><summary><i class="jyu-star"></i> Valinnaista lisätietoa: Miksi <code>public</code> ja <code>static</code> pitää kirjoittaa?</summary>

Jos `public` jätetään pois, aliohjelma on C#-kielessä oletuksena *yksityinen*
(`private`), eli sitä voi kutsua vain saman luokan sisältä. Tällä kurssilla
ohjelmat ovat enimmäkseen yhden luokan kokoisia, joten `private` toimisi
usein aivan hyvin. `public` kirjoitetaan silti aina, koska kurssin
testityökalu ComTest ja myöhemmät monen luokan ohjelmat tarvitsevat sitä.

`static` erottaa kaksi eri asiaa: aliohjelman, joka kuuluu *luokalle*, ja
aliohjelman, joka kuuluu luokasta luodulle *oliolle*. `Math.Sqrt` on
staattinen: sitä kutsutaan luokan nimellä, eikä mitään "Math-oliota" tarvitse
luoda. Jypeli-pelin `LuoPallo` sen sijaan kuuluu pelioliolle, jolla on oma
kenttä, tausta ja olioiden lista; siksi siitä puuttuu `static`. Ero avataan
kunnolla [olioiden](../osa3/4-jypeli-ja-oliot.md) yhteydessä ja laajemmin
Ohjelmointi 2 -kurssilla.

</details>

<details closed id="kuormittaminen"><summary><i class="jyu-star"></i> Valinnaista lisätietoa: Funktion kuormittaminen</summary>

Samannimisiä funktioita voi olla useita, kunhan niiden parametrilistat
eroavat toisistaan. Tätä kutsutaan *kuormittamiseksi* (engl. *overloading*).
Olet jo käyttänyt kuormitettuja aliohjelmia: `Math.Max` hyväksyy sekä
kokonaisluvut että liukuluvut, ja `Console.WriteLine` hyväksyy argumentikseen
niin kokonaisluvun, merkkijonon kuin liukuluvunkin.

```csharp,ignore
public static double Keskiarvo(double a, double b)
{
    return (a + b) / 2;
}

public static double Keskiarvo(double a, double b, double c)
{
    return (a + b + c) / 3;
}
```

Kääntäjä valitsee kutsuttavan version argumenttien lukumäärän ja tyyppien
perusteella: `Keskiarvo(7, 8)` kutsuu ensimmäistä ja `Keskiarvo(7, 8, 9)`
toista versiota. Pelkkä paluuarvon tyyppi ei riitä erottamaan versioita
toisistaan.

Kuormittamista ei tarvita tällä kurssilla omissa ohjelmissa, mutta sen
tunnistaminen auttaa lukemaan kirjastojen dokumentaatiota, jossa samalla
nimellä on usein monta versiota. Toinen tapa saada sama funktio toimimaan eri
määrällä argumentteja on antaa parametreille oletusarvot. Argumentit voi myös
nimetä kutsussa, jolloin niiden järjestyksen saa valita itse. Kummastakin
kerrotaan liitteessä [Valinnaiset parametrit ja
oletusarvot](../liitteet/oletusarvot.md).

</details>

## Yhteenveto

* Funktio saa arvoja parametreina ja antaa tuloksen takaisin
  `return`-lauseella. Funktion kutsu on lauseke, jonka arvo on paluuarvo.
* Määrittely: `public static Tyyppi Nimi(Tyyppi parametri) { return ...; }`.
  Kutsu: `Nimi(argumentti)`. Määrittely ei suorita mitään; vasta kutsu
  suorittaa.
* Kutsun alussa argumentit sijoitetaan parametreihin järjestyksessä:
  *parametri = argumentti*. `int` kelpaa `double`-parametrille, toisin päin ei.
* Uusi funktio syntyy järjestyksessä kutsu, esittelyrivi, kääntyvä tynkä,
  runko.
* Funktio laskee; syötteen lukeminen ja tulostaminen jäävät `Main`-aliohjelmalle.
* Konsolissa `public static`, Jypelissä `public`.

## Testaa tietosi

Valitse vastaus, niin näet heti, menikö se oikein ja miksi. Pisteitä ei jaeta,
mutta huomaat, mitä asioita kannattaa vielä kerrata.

<visa>

**Totta vai tarua?**

<vaittama vastaus="totta">
Kutsun `Nelio(4)` voi antaa toisen kutsun argumentiksi, esimerkiksi
`Math.Sqrt(Nelio(4))`.
<perustelu>
**Totta.** Kutsu on lauseke, jonka arvo on paluuarvo, tässä 16. Sitä voi
käyttää kaikkialla, missä arvoa tarvitaan, joten `Math.Sqrt(Nelio(4))` on
sama kuin `Math.Sqrt(16)`.
</perustelu>
</vaittama>

<vaittama vastaus="tarua">
Parametrin nimen pitää olla sama kuin kutsussa käytetyn muuttujan nimi.
<perustelu>
**Tarua.** Parametriin kopioidaan pelkkä arvo. Kutsut `Nelio(sivu)` ja
`Nelio(4)` ovat funktiolle samanlaisia, ja kummassakin parametrin nimi on `x`.
</perustelu>
</vaittama>

<vaittama vastaus="tarua">
Funktion tyngäksi riittää esittelyrivi ja tyhjä runko `{ }`.
<perustelu>
**Tarua.** Esittelyrivi lupaa palauttaa arvon, joten tyhjä runko antaa virheen
`CS0161`. Tynkä palauttaa jonkin oikean tyyppisen arvon, esimerkiksi
`return 0;`.
</perustelu>
</vaittama>

**Monivalinta.** Yksi vaihtoehto on oikein.

<kysymys>
Mitä seuraava ohjelma tulostaa?

```csharp,ignore
public static void Main()
{
    int a = 2;
    Console.WriteLine(Kolminkertainen(a) + a);
}

public static int Kolminkertainen(int luku)
{
    return 3 * luku;
}
```

- [ ] `6`
- [x] `8`
- [ ] `12`
- [ ] `2`

<perustelu>
**b.** Parametri `luku` saa arvon 2, ja funktio palauttaa 6. Kutsun paikalle
tulee 6, joten tulostettava lauseke on `6 + 2` eli 8.
</perustelu>
</kysymys>

<kysymys>
Pääohjelmassa on kutsu `bool parillinen = OnkoParillinen(7);`. Mikä
esittelyrivi sopii siihen?

- [ ] `public static int OnkoParillinen(bool luku)`
- [x] `public static bool OnkoParillinen(int luku)`
- [ ] `public static bool OnkoParillinen(7)`
- [ ] `public static void OnkoParillinen(int luku)`

<perustelu>
**b.** Paluuarvo sijoitetaan `bool`-muuttujaan, joten paluuarvon tyyppi on
`bool`. Argumentti `7` on kokonaisluku, joten parametri on `int`. Vaihtoehdon
c parametrilla ei ole tyyppiä eikä nimeä, ja d:n `void` ei anna mitään, mitä
sijoittaa.
</perustelu>
</kysymys>

</visa>

## Tehtävät

<!-- TIM-palautuslinkit lisätään, kun tehtävät on viety TIMiin.
     Vaiheessa B lisäksi: "Painoindeksi" (syöte Mainissa, laskenta
     funktiossa) ja "Lumiukko funktiolla" (Jypeli: LuoPallo palauttaa
     pallon, Begin lisää sen). -->

<task>
  <task-title num="2.2">Järjestele toimivaksi <points>1 p.</points></task-title>
  <handout>

  {{#include ../tehtavat/2-2-jarjestele-toimivaksi/handout.md}}

  </handout>
</task>

<task>
  <task-title num="2.3">Kirjoita esittelyrivit <points>1 p.</points></task-title>
  <handout>

  {{#include ../tehtavat/2-3-esittelyrivit/handout.md}}

  </handout>
</task>
