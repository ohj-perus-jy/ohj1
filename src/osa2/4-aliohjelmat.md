# Aliohjelmat

*Aliohjelma* on ohjelman osa, jolla on nimi. Aliohjelma voi 

 * ottaa vastaan tietoa eli *parametreja*,
 * tehdä laskutoimituksia ja muita toimenpiteitä, ja 
 * se voi antaa takaisin eli *palauttaa* arvon. 

Aliohjelmia voidaan käyttää eli *kutsua* useita kertoja, jolloin samalla
koodilla voidaan tehdä sama asia monessa kohdassa ohjelmaa. 

Alla on esimerkkejä muutamista aliohjelmista, joita olet jo käyttänyt.

| Nimi | Ottaa vastaan | Esimerkki kutsusta | Antaa takaisin |
| ------ | ------------- | --------------------- | ------------------------------------- |
| `Math.Sqrt` | yhden luvun | `Math.Sqrt(16)` | `4` |
| `Math.Max` | kaksi lukua | `Math.Max(3, 8)` | `8` |
| `int.Parse` | merkkijonon | `int.Parse("42")` | `int`-luvun `42` |
| `Console.ReadLine` | ei mitään | `Console.ReadLine()` | käyttäjän kirjoittaman rivin |

Kerrataan vielä lyhyesti, miten näitä valmiita aliohjelmia käytetään koodissa.
Voit ajaa tämän koodin itse omalla koneellasi.

```csharp,ignore
//-using System;
//-
//-public class Esimerkki
//-{
//-    public static void Main()
//-    {
        // kutsutaan ReadLine, joka palauttaa merkkijonon
        string rivi = Console.ReadLine();      

        // kutsutaan Parse, joka palauttaa kokonaisluvun 
        int luku = int.Parse(rivi);            

        // kutsutaan Sqrt, joka palauttaa liukuluvun
        double neliöjuuri = Math.Sqrt(luku);   
        
        // kutsutaan WriteLine, joka tulostaa arvon ja ei palauta mitään
        Console.WriteLine("Annoit luvun " + luku + " neliöjuuri on " + neliöjuuri);
//-    }
//-}
```

## Oma aliohjelma

Kirjoitetaan nyt oma aliohjelma. Sovitaan aluksi, että haluamme tehdä aliohjelman,
joka muuntaa minuutit sekunneiksi: esimerkiksi 1.5 minuuttia on 90 sekuntia ja
0.25 minuuttia on 15 sekuntia. Asia lähtee liikkeelle niin, että päätämme
aluksi, millaista tietoa aliohjelma tarvitsee (minuuttien
määrän) ja mitä se antaa takaisin (sekuntien määrän). Sitten kirjoitetaan kutsu:

```csharp
using System;

public class Ajat
{
    public static void Main()
    {
        double sekunteina = MinuutitSekunneiksi(1.5);
        Console.WriteLine(sekunteina);
    }
}
```

Kääntäjä antaa virheen, koska se ei tiedä, mitä `MinuutitSekunneiksi`-kutsun
kohdalla pitäisi tehdä. Tämä on loogista, koska sellaista aliohjelmaa ei ole
vielä olemassa tässä ohjelmassa. Määritellä nyt aliohjelma,
joka tekee juuri tuon asian. 

```csharp
using System;

public class Ajat
{
    public static void Main()
    {
        double sekunteina = MinuutitSekunneiksi(1.5);
        Console.WriteLine(sekunteina);
    }

    // HIGHLIGHT_GREEN_BEGIN
    public static double MinuutitSekunneiksi(double minuutit)
    {
        double sekunnit = minuutit * 60;
        return sekunnit;
    }
    // HIGHLIGHT_GREEN_END
}
```

Käydään koodi läpi osa kerrallaan:

* `public` tarkoittaa, että aliohjelma on julkinen ja sitä voidaan kutsua mistä
  tahansa ohjelman osasta. Tällä kurssilla käytännössä kaikki aliohjelmat ovat julkisia.
* `static` tarkoittaa, että aliohjelma kuuluu luokalle eikä oliolle.
  Konsoliohjelmissa se kirjoitetaan aina; Jypelissä se jätetään pois, kuten
  alempana nähdään.
* `double` on *paluuarvon tyyppi*: aliohjelma antaa takaisin `double`-luvun.
* `MinuutitSekunneiksi` on aliohjelman nimi. Nimi valitaan itse.
* `(double minuutit)`: Sulkujen sisään kirjoitetaan *parametrit*, eli muuttujat,
  jotka saavat arvonsa kutsussa. 
* Aaltosulkujen `{ }` väliin kirjoitetaan aliohjelman *runko*. `return`-lause
  palauttaa arvon aliohjelmasta sinne, mistä sitä kutsuttiin. Tätä
  arvoa sanotaan *paluuarvoksi*.

Määrittelyn ensimmäistä riviä sanotaan *esittelyriviksi* (engl. *header*).
Siitä näkee kaiken, mitä kutsuja tarvitsee: aliohjelman nimen, sen tarvitsemat
tiedot ja sen, minkä tyyppisen arvon aliohjelma antaa takaisin.

Kutsutaan aliohjelmaamme vielä pari kertaa:

```csharp
//-using System;
//-
//-public class Ajat
//-{
//-    public static void Main()
//-    {
        Console.WriteLine(MinuutitSekunneiksi(0.25));               // 15
        Console.WriteLine(MinuutitSekunneiksi(2) + MinuutitSekunneiksi(0.5));  // 150
//-    }
//-
//-    public static double MinuutitSekunneiksi(double minuutit)
//-    {
//-        double sekunnit = minuutit * 60;
//-        return sekunnit;
//-    }
//-}
```

Tässä huomataan, että aliohjelmaa voi kutsua useita kertoja eri arvoilla. Kutsun
arvo on aina aliohjelman paluuarvo, joten sen voi sijoittaa muuttujaan, tulostaa
ruudulle tai käyttää osana lauseketta.

!!! note "Terminologiaa: argumentti ja parametri"

    Kutsussa annettavia arvoja kutsutaan *argumenteiksi*.
    Argumenttien arvot välitetään aliohjelman *parametreihin*. Kirjallisuudessa
    saatetaan kuitenkin nimittää kumpiakin parametreiksi (*todellinen* ja *muodollinen*
    parametri).

!!! note "Terminologiaa: aliohjelma, funktio ja metodi"

    Tällä kurssilla käytämme pääasiassa termiä *aliohjelma*, mutta kirjallisuudessa käytetään myös sanoja *funktio* ja *metodi*.
    Näitä käytetään varsin usein toistensa synonyymeinä, 
    joten älä hämmenny, jos kohtaat eri nimityksiä.
    Englanninkielisissä lähteissä C#-aliohjelmia sanotaan lähes aina
    metodeiksi (*method*).

Kolme sääntöä, jotka kannattaa painaa mieleen heti:

* **Aliohjelmat kirjoitetaan luokan sisään, `Main`-aliohjelman rinnalle.** Ei
  siis `Main`-aliohjelman sisään eikä luokan ulkopuolelle.
  Määrittelyjärjestyksellä ei ole väliä: `MinuutitSekunneiksi` voi olla ennen
  `Main`-aliohjelmaa tai sen jälkeen.
* **Aliohjelman runko suoritetaan vasta, kun aliohjelmaa kutsutaan.** Pelkkä määrittely ei vielä tee mitään. 
* **Tyypit kuuluvat määrittelyyn, arvot kutsuun.** Kutsussa ei toisteta sanoja
  `public static double`, eikä argumentin eteen kirjoiteta tyyppiä: pelkkä
  `MinuutitSekunneiksi(2)` riittää.

Aliohjelman kutsu on lauseke: sen arvo on paluuarvo. Siksi kutsua voi käyttää
kaikkialla, missä arvoa tarvitaan. 

Myös `Main` on rakenteeltaan samanlainen. Sen paluuarvon tyypin paikalla lukee
`void`, joka tarkoittaa, että `Main` ei anna takaisin mitään. Samanlainen on
`Console.WriteLine`: se ei anna mitään takaisin, vaan
tulostaa. Tällaisiin aliohjelmiin palataan, kun käsitellään [aliohjelmia ilman
paluuarvoa](../osa3/2-aliohjelmat-ilman-paluuarvoa.md).

## Mitä kutsussa tapahtuu?

Katsotaan, miten kone suorittaa seuraavan rivin:

```csharp,ignore
double aika = MinuutitSekunneiksi(2) + 30;
```

<walkthrough scenes="images/aliohjelmakutsu/scenes.js">

<step scene="argumentti">

### Argumentin arvo lasketaan

Ensin lasketaan, mikä arvo sulkujen sisällä on. Tässä se on valmiiksi `2`.

</step>

<step scene="siirtyminen">

### Suoritus siirtyy aliohjelmaan

Parametri `minuutit` saa argumentin arvon. On kuin aliohjelman rungon alkuun
olisi kirjoitettu `double minuutit = 2;`.

</step>

<step scene="runko">

### Runko suoritetaan

Aliohjelma laskee `sekunnit`-muuttujaan arvon `120` ja palauttaa sen
`return`-lauseella. Suoritus palaa kutsukohtaan.

</step>

<step scene="paluuarvo">

### Kutsun paikalle tulee paluuarvo

Rivistä tulee `double aika = 120 + 30;`, ja `aika` saa arvon 150. Aliohjelman
omat muuttujat `minuutit` ja `sekunnit` katoavat samalla.

</step>

</walkthrough>

Sama tiivistettynä yhteen kuvaan:

```bob
  "Main()"                              "MinuutitSekunneiksi(double minuutit)"
     |
     | "double aika = MinuutitSekunneiksi(2) + 30;"
     |
     +------ "kutsu, minuutit = 2" ------->+
     |                                     | "double sekunnit = minuutit * 60;"
     |                                     | "return sekunnit;"
     |<----- "paluu, arvo 120" ------------+
     |
     | "double aika = 120 + 30;"
     |
     v
```

Viimeinen vaihe on koko asian ydin: kun aliohjelma on suoritettu, kutsu korvautuu
paluuarvolla, aivan kuin kutsun paikalla olisi alun perin lukenut `120`.

Kutsun alussa tapahtuu sijoitus *parametri = argumentti*. Siitä seuraa
kaksi asiaa, jotka kannattaa huomata heti.

**Argumentti voi olla mikä tahansa lauseke**. Sijoituksen oikealle puolelle
kelpaa luku, muuttuja, lasku tai toisen aliohjelman kutsu, joten ne kaikki
kelpaavat myös argumentiksi. Lausekkeen arvo lasketaan *ensin*, ja vasta valmis
arvo sijoitetaan parametriin.

```csharp,ignore
double kesto = 4;
Console.WriteLine(MinuutitSekunneiksi(kesto));               // minuutit = 4, tulostaa 240
Console.WriteLine(MinuutitSekunneiksi(kesto + 1));           // minuutit = 5, tulostaa 300
Console.WriteLine(MinuutitSekunneiksi(Math.Max(kesto, 10))); // ensin Math.Max on 10, sitten minuutit = 10: 600
```

**Parametrin nimi on aliohjelman oma asia.** Yllä kutsujan muuttuja on `kesto`,
mutta aliohjelmassa sama arvo tunnetaan nimellä `minuutit`. Nimien ei tarvitse olla
samat, eikä aliohjelma edes tiedä, minkä nimisestä muuttujasta arvo tuli tai
tuliko se muuttujasta lainkaan. Parametriin kopioidaan pelkkä arvo. Parametri
on aliohjelman oma muuttuja, joka syntyy kutsussa ja katoaa, kun aliohjelma päättyy.
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

Aliohjelma voi palauttaa minkä tahansa tyyppisen arvon. Paluuarvon tyyppi
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

Uutta aliohjelmaa ei kannata aloittaa määrittelystä vaan *kutsusta*. Kirjoita
ensin rivi, jolla haluaisit aliohjelmaa käyttää, ikään kuin aliohjelma olisi jo
olemassa. Esittelyrivin voi sen jälkeen lukea kutsusta lähes mekaanisesti.

Halutaan muotoilla pistetaulun rivejä. Mukavin kutsu olisi tällainen:

```csharp,ignore
string rivi = MuotoilePisteet("Maija", 120);
```

Käydään kutsu läpi vasemmalta oikealle:

| Kutsusta näkyy                               | Esittelyriville                  |
| -------------------------------------------- | -------------------------------- |
| tulos sijoitetaan `string`-muuttujaan        | paluuarvon tyyppi `string`       |
| aliohjelman nimi on `MuotoilePisteet`           | `MuotoilePisteet`                |
| argumentteja on kaksi                        | kaksi parametria                 |
| 1. argumentti `"Maija"` on merkkijono        | `string` + itse keksitty nimi    |
| 2. argumentti `120` on kokonaisluku          | `int` + itse keksitty nimi       |

Alkuun tulevat tutut `public static`. Kutsussa on pelkkiä arvoja, joten
parametrien nimet pitää keksiä itse: mitä `"Maija"` ja `120` aliohjelman
kannalta tarkoittavat?

```text
string rivi = MuotoilePisteet(  "Maija"  ,    120     );
   ↓                               ↓           ↓
public static string MuotoilePisteet(string nimi, int pisteet)
```

Työjärjestys on aina sama:

1. **Kirjoita kutsu.** Mieti, mitä tietoja aliohjelma tarvitsee ja mitä se antaa
   takaisin.
2. **Kirjoita esittelyrivi** kutsun perusteella.
3. **Tee tynkä ja käännä.** *Tynkä* on aliohjelma, jonka runko palauttaa jonkin
   oikean tyyppisen arvon, vaikka arvo olisi vielä väärä. Ohjelma kääntyy,
   vaikka aliohjelma ei vielä tee oikeaa asiaa. Jos ei käänny, vika on kutsussa
   tai esittelyrivissä, ja se on helppo löytää, kun muuta uutta koodia ei vielä
   ole.
4. **Kirjoita runko.** Tässä vaiheessa unohda, mistä aliohjelmaa kutsutaan.
   Käytössäsi ovat parametrit, eikä muuta tarvita.

```csharp,ignore
public static string MuotoilePisteet(string nimi, int pisteet)
{
    return "";      // tynkä: kääntyy, mutta ei tee vielä oikeaa asiaa
}
```

Tynkä ei voi olla tyhjä runko `{ }`, koska esittelyrivillä luvataan palauttaa
`string`, ja kääntäjä pitää lupauksesta kiinni: `CS0161: not all code paths
return a value`. Lukuja palauttavassa aliohjelmassa tynkä on tavallisesti
`return 0;` ja totuusarvoja palauttavassa `return false;`.

Tynkä on tarkistuspiste. Kun ohjelma kääntyy tyngän kanssa, tiedät, että kutsu
ja esittelyrivi sopivat yhteen, ja voit keskittyä runkoon. Sama ajatus pätee
ohjelmointiin yleisemminkin: tee pieni muutos, käännä ja aja, ja jatka vasta
sitten. Kymmenen rivin jälkeen virhe löytyy kymmeneltä riviltä. Sadan rivin
jälkeen sitä etsitään sadalta.

Osassa 4 työjärjestykseen lisätään dokumentointi ja osassa 7 testit, ks.
[Testaaminen ComTestillä](../osa7/2-testaaminen-comtestilla.md#ensimmäinen-testi-vaihe-vaiheelta).

## Mihin aliohjelmia tarvitaan?

Taskulaskimen √-näppäin toimii kuin aliohjelma. Kun painat sitä, et mieti, miten
neliöjuuri lasketaan. Riittää, että tiedät, mitä näppäin tekee. Omat aliohjelmat
toimivat samoin: kun aliohjelma on kerran kirjoitettu, sitä käytetään nimellä,
eikä sen sisältöä tarvitse enää ajatella.

* **Sama lasku tarvitaan monta kertaa.** Polttoaineenkulutus lasketaan
  jakamalla litrat kilometreillä ja kertomalla sadalla. Jos ohjelma laskee sen
  kymmenelle autolle, kaava on kymmenessä kohdassa. Copy-paste toimii mainiosti, kunnes huomaat kaavassa
  virheen ja korjaat sen kymmeneen kohtaan. Löydät niistä hyvällä tuurilla
  yhdeksän.
* **Nimi kertoo, mitä lasketaan.** `litrat / kilometrit * 100` vaatii lukijalta
  pysähtymisen ja hetken verran ajattelemista. `Kulutus(litrat, kilometrit)` ei
  vaadi. 
* **Ohjelma jakautuu osiin.** `Main` lukee syötteen, kutsuu aliohjelmia ja
  tulostaa tulokset. Jokainen aliohjelma hoitaa yksittäisen asian. Kun ohjelma on
  jaettu osiin, sitä on helpompi ymmärtää ja muokata.
* **Pienen palan voi testata erikseen.** Aliohjelmasta on helppo tarkistaa, antaako
  se oikean vastauksen: `MinuutitSekunneiksi(2)` pitää olla 120, ja `Kulutus(5, 50)` pitää olla 10. Osassa 7 tarkistus annetaan koneen tehtäväksi: aliohjelmalle kirjoitetaan
  [testit](../osa7/2-testaaminen-comtestilla.md), jotka ajetaan napin
  painalluksella.

Hyvä aliohjelma on *itsenäinen*: se laskee tuloksensa pelkästään sille
annetuista arvoista. Silloin se toimii samalla tavalla riippumatta siitä,
mistä sitä kutsutaan, ja samaa aliohjelmaa voi käyttää muuallakin kuin siinä
kohdassa, jota varten se alun perin tehtiin.

## Aliohjelma laskee, `Main` tulostaa

Alla oleva ohjelma kysyy käyttäjältä tankatut litrat ja ajetut kilometrit
ja laskee polttoaineenkulutuksen. Katso, mikä osa tekee mitäkin.

```csharp,ignore
using System;

public class Matkalaskuri
{
    public static void Main()
    {
        Console.Write("Tankatut litrat: ");
        double litrat = double.Parse(Console.ReadLine());
        Console.Write("Ajetut kilometrit: ");
        double kilometrit = double.Parse(Console.ReadLine());

        double kulutus = Kulutus(litrat, kilometrit);
        Console.WriteLine($"Kulutus on {kulutus} l/100 km");
    }

    public static double Kulutus(double litrat, double kilometrit)
    {
        return litrat / kilometrit * 100;
    }
}
```

`Kulutus` ei lue eikä tulosta mitään. Se saa arvot parametreina ja antaa
tuloksen paluuarvona. Syötteen lukeminen ja tulostaminen jäävät
`Main`-aliohjelmalle. Tästä on kaksi hyötyä:

* **Tuloksen voi käyttää mihin tahansa.** Kutsuja voi tulostaa sen, verrata
  sitä rajaan tai laskea monen auton keskiarvon. Jos aliohjelma tulostaisi
  tuloksen itse, ohjelma ei saisi sitä käyttöönsä.
* **Aliohjelman voi testata.** Testi kutsuu aliohjelmaa ja vertaa paluuarvoa
  odotettuun. Ruudulle tulostettua tekstiä testi ei näe.

Kirjoita siis laskeva aliohjelma niin, ettei siinä ole `Console.WriteLine`- eikä
`Console.ReadLine`-kutsuja.

## Aliohjelman nimeäminen

Aliohjelmat nimetään *PascalCase*-tyylillä eli **isolla** alkukirjaimella, ja
jokainen sana alkaa isolla: `MuotoilePisteet`, ei `muotoilePisteet`. Näin
nimestä näkee heti, onko kyseessä muuttuja vai aliohjelma. Ääkkösiä ei käytetä,
kuten ei muuttujissakaan: `Nelio`, ei `Neliö`. Katso tarkemmin
[Tyyliopas](../tyyliopas.md#nimeämiskäytännöt).

Nimi kertoo, mitä aliohjelma antaa takaisin (`Keskiarvo`, `Kulutus`) tai mitä
se tekee arvoilleen (`MuotoilePisteet`, `LaskeAlennus`). Totuusarvon
palauttava aliohjelma nimetään kysymykseksi: `OnkoTaysiIkainen`, `OnkoParillinen`.
Silloin kutsu luetaan luontevasti: `bool aikuinen = OnkoTaysiIkainen(ika);`.

## Aliohjelmat Jypelissä

[Ensimmäisessä graafisessa ohjelmassa](../osa1/5-ensimmainen-graafinen-ohjelma.md)
jokainen olio luotiin usealla rivillä. Lumiukossa on kolme palloa, ja niiden
rivit ovat lähes samat. Kirjoitetaan pallon luominen aliohjelmaksi, joka
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

`LuoPallo` on aliohjelma siinä missä `MinuutitSekunneiksi`: se saa parametreina paikan ja säteen
ja palauttaa arvon. Arvo on vain luvun sijaan `GameObject`, sama tyyppi kuin
aiemmissa Jypeli-esimerkeissä. Mikä olio tarkalleen on, selitetään
[myöhemmin](../osa3/4-jypeli-ja-oliot.md).

Kutsun `LuoPallo(0, -200, 100)` arvo on siis pallo, ja `Add` lisää sen peliin.
Koska aliohjelma palauttaa pallon eikä lisää sitä itse, kutsuja voi vielä muuttaa
sitä: lumiukon pää on keltainen, vaikka `LuoPallo` tekee valkoisia palloja.

Kaksi eroa konsoliohjelmaan:

* Aliohjelman edestä puuttuu `static`. Jypelissä aliohjelmat käyttävät yleensä
  pelin omia asioita, kuten `Add`-metodia ja `Level`-ominaisuutta, ja siksi ne
  kirjoitetaan ilman `static`-sanaa. Syy selitetään
  [olioiden](../osa3/4-jypeli-ja-oliot.md) yhteydessä; toistaiseksi riittää
  muistaa sääntö: konsolissa `public static`, Jypelissä `public`.
* `Begin`-aliohjelmassa on sana `override`. Se kertoo, että Jypelillä on oma
  `Begin`, jonka tilalle tämä kirjoitetaan. Omissa aliohjelmissa sitä ei
  käytetä.

## Tyypillisiä virheitä

**Paluuarvo jää käyttämättä.** Rivi `Nelio(5);` kääntyy, mutta mitään ei näy:
aliohjelma laskee arvon 25, eikä kukaan ota sitä vastaan. Paluuarvo pitää
sijoittaa muuttujaan, tulostaa tai käyttää laskussa. Jypelissä sama virhe näkyy
kuvasta: pelkkä `LuoPallo(0, 30, 30);` luo pallon, mutta koska sitä ei lisätä
peliin, lumiukolta puuttuu pää.

**`return` puuttuu.** Alla aliohjelma laskee tuloksen muuttujaan mutta ei palauta
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
aliohjelma ottaa vastaan, ei sitä, mitä tietoa sille jollakin kerralla annetaan.

**Parametrilta puuttuu tyyppi.** Muuttujia voi määritellä samalla rivillä
useita (`double a, b;`), mutta parametreja ei: jokaiselle kirjoitetaan oma
tyyppi, vaikka se olisi sama. `Keskiarvo(double a, b)` ei käänny,
`Keskiarvo(double a, double b)` kääntyy.

**Aliohjelma `Main`-aliohjelman sisällä.** Aliohjelmat ovat luokan sisällä
rinnakkain, eivät sisäkkäin. Jos `public static double Nelio(double x)` on
kirjoitettu `Main`-aliohjelman aaltosulkujen väliin, kääntäjä ilmoittaa
`CS0106: The modifier 'public' is not valid for this item`. Ilmoitus kuulostaa
oudolta, mutta syy on sijainti: siirrä aliohjelma `Main`-aliohjelman sulkevan
aaltosulun jälkeen. Kääntäjä puhuu sanasta `public`, koska C# sallii
aliohjelman sisään niin sanotun paikallisen funktion, jolla ei saa olla
`public`-sanaa. Tällä kurssilla paikallisia funktioita ei käytetä.

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
kunnolla [olioiden](../osa3/4-jypeli-ja-oliot.md) yhteydessä, liitteessä
[Mitä `static` tarkoittaa?](../liitteet/static.md) ja laajemmin Ohjelmointi 2
-kurssilla.

</details>

<details closed id="kuormittaminen"><summary><i class="jyu-star"></i> Valinnaista lisätietoa: Aliohjelman kuormittaminen</summary>

Samannimisiä aliohjelmia voi olla useita, kunhan niiden parametrilistat
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
nimellä on usein monta versiota. Toinen tapa saada sama aliohjelma toimimaan eri
määrällä argumentteja on antaa parametreille oletusarvot. Argumentit voi myös
nimetä kutsussa, jolloin niiden järjestyksen saa valita itse. Kummastakin
kerrotaan liitteessä [Valinnaiset parametrit ja
oletusarvot](../liitteet/oletusarvot.md).

</details>

## Yhteenveto

* Aliohjelma saa arvoja parametreina ja antaa tuloksen takaisin
  `return`-lauseella. Aliohjelman kutsu on lauseke, jonka arvo on paluuarvo.
* Määrittely: `public static Tyyppi Nimi(Tyyppi parametri) { return ...; }`.
  Kutsu: `Nimi(argumentti)`. Määrittely ei suorita mitään; vasta kutsu
  suorittaa.
* Kutsun alussa argumentit sijoitetaan parametreihin järjestyksessä:
  *parametri = argumentti*. `int` kelpaa `double`-parametrille, toisin päin ei.
* Uusi aliohjelma syntyy järjestyksessä kutsu, esittelyrivi, kääntyvä tynkä,
  runko.
* Aliohjelma laskee; syötteen lukeminen ja tulostaminen jäävät `Main`-aliohjelmalle.
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
**Tarua.** Parametriin kopioidaan pelkkä arvo. Kutsut `MinuutitSekunneiksi(kesto)` ja
`MinuutitSekunneiksi(4)` ovat aliohjelmalle samanlaisia, ja kummassakin parametrin nimi on
`minuutit`.
</perustelu>
</vaittama>

<vaittama vastaus="tarua">
Aliohjelman tyngäksi riittää esittelyrivi ja tyhjä runko `{ }`.
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
**b.** Parametri `luku` saa arvon 2, ja aliohjelma palauttaa 6. Kutsun paikalle
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
     Vaiheessa B lisäksi: "Polttoaineenkulutus" (syöte Mainissa, laskenta
     aliohjelmassa) ja "Lumiukko aliohjelmalla" (Jypeli: LuoPallo palauttaa
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
