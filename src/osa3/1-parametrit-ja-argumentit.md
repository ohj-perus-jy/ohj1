# Parametrit ja argumentit

Luvun [Aliohjelmat](../osa2/5-aliohjelmat.md) `TulostaViiva` tulostaa aina
täsmälleen saman viivan, ja `LuoAurinko` ja `LuoTalo` olivat melkein samaa
koodia kahteen kertaan. Aliohjelmasta tulee paljon hyödyllisempi, kun sille voi
kutsussa kertoa, *millainen* viiva tai *mihin kohtaan* pallo halutaan.
Tätä varten ovat *parametrit*: niiden avulla aliohjelma ottaa vastaan tietoa.
Sama aliohjelma voi tulostaa eri pituisen viivan tai piirtää eri kokoisen
pallon sen mukaan, mitä arvoja sille annetaan.

## Parametrin määrittely

Parametrit luetellaan aliohjelman määrittelyssä sulkeiden sisällä. Jokaiselle
parametrille annetaan tyyppi ja nimi, aivan kuten muuttujalle. Annetaan
`TulostaViiva`-aliohjelmalle parametri, joka kertoo viivan pituuden:

```csharp
using System;

public class Pistetaulu
{
    public static void Main()
    {
        TulostaViiva(23);
        Console.WriteLine("Maija: 120 pistettä");
        TulostaViiva(10);
    }

    public static void TulostaViiva(int pituus)
    {
        Console.WriteLine(new string('=', pituus));
    }
}
```

Aliohjelman sisällä parametria käytetään kuten muuttujaa. Lauseke
`new string('=', pituus)` tekee merkkijonon, jossa merkki `=` toistuu
`pituus` kertaa. Ensimmäinen kutsu tulostaa 23 merkin viivan ja toinen 10
merkin viivan, vaikka aliohjelma on kirjoitettu vain kerran.

Määrittelyn ensimmäistä riviä, tässä `public static void TulostaViiva(int
pituus)`, sanotaan aliohjelman *esittelyriviksi* (engl. *header*).
Esittelyrivistä näkee kaiken, mitä kutsuja tarvitsee: aliohjelman nimen, sen
tarvitsemat tiedot ja sen, antaako se jotakin takaisin.

## Argumentit kutsussa

Aliohjelmaa kutsutaan kirjoittamalla aliohjelman nimi ja sulkujen sisään
*argumentit*, eli arvot, jotka haluamme antaa aliohjelmalle.

> [!HUOMAUTUS]
> **Terminologiaa.** Aliohjelman kutsussa annettavia arvoja kutsutaan
> *argumenteiksi*. Argumenttien arvot välitetään aliohjelman *parametreihin*.
> Kirjallisuudessa saatetaan nimittää kumpiakin näistä asioista parametreiksi
> (*todellinen* ja *muodollinen* parametri), mutta tässä käytämme edellä
> mainittuja termejä.

Kutsussa tapahtuu sijoitus. Kun suoritus saapuu riville `TulostaViiva(23);`,
aliohjelmalle luodaan muuttuja `pituus`, ja argumentin arvo kopioidaan siihen.
Aivan kuin aliohjelman rungon alkuun olisi kirjoitettu

```csharp,ignore
int pituus = 23;
```

Vasta sitten suoritetaan rungon lauseet. Seuraavalla kutsulla `TulostaViiva(10);`
sama tapahtuu uudestaan, nyt arvolla `10`. Parametri on siis aliohjelman oma
muuttuja, joka syntyy kutsussa ja katoaa, kun aliohjelma päättyy. Tähän
palataan luvussa [Muuttujien näkyvyys](./3-muuttujien-nakyvyys.md).

Sijoitusmallista seuraa kaksi asiaa, jotka kannattaa huomata heti.

**Argumentti voi olla mikä tahansa lauseke.** Sijoituksen oikealle puolelle
kelpaa luku, muuttuja, lasku tai toisen aliohjelman kutsu, joten ne kaikki
kelpaavat myös argumentiksi. Lausekkeen arvo lasketaan *ensin*, ja vasta
valmis arvo sijoitetaan parametriin.

```csharp,ignore
int leveys = 30;
TulostaViiva(leveys);              // pituus = 30
TulostaViiva(leveys / 2 + 1);      // pituus = 16
TulostaViiva(Math.Max(leveys, 40)); // pituus = 40
```

**Parametrin nimi on aliohjelman oma asia.** Yllä kutsujan muuttuja on
`leveys`, mutta aliohjelmassa sama arvo tunnetaan nimellä `pituus`. Nimien ei
tarvitse olla samat, eikä aliohjelma edes tiedä, minkä nimisestä muuttujasta
arvo tuli, tai tuliko se muuttujasta lainkaan. Parametriin kopioidaan pelkkä
arvo. Parametri nimetään sen mukaan, mitä arvo *aliohjelman kannalta*
tarkoittaa, samoilla säännöillä kuin muutkin muuttujat.

## Useita ja erityyppisiä parametreja

Parametreja voi olla useita, ja ne voivat olla keskenään eri tyyppiä. Ne
erotetaan pilkulla sekä määrittelyssä että kutsussa. Annetaan viivalle
pituuden lisäksi merkki, jolla se piirretään:

```csharp
using System;

public class Pistetaulu
{
    public static void Main()
    {
        TulostaViiva('=', 23);
        Console.WriteLine("Maija: 120 pistettä");
        TulostaViiva('*', 23);
    }

    public static void TulostaViiva(char merkki, int pituus)
    {
        Console.WriteLine(new string(merkki, pituus));
    }
}
```

Argumentit sijoitetaan parametreihin *järjestyksessä*: ensimmäinen argumentti
ensimmäiseen parametriin, toinen toiseen. Nimillä ei ole tässä mitään
merkitystä, vain paikalla.

```bob
  kutsu          "TulostaViiva(    '*'  ,       23  );"
                                   |            |
                                   v            v
  "määrittely"   "TulostaViiva(char merkki, int pituus)"

  kutsun alussa  "char merkki = '*';"
                 "int pituus = 23;"
```

Tästä seuraa kaksi sääntöä:

* **Argumentteja on yhtä monta kuin parametreja.** Kutsu `TulostaViiva('*');`
  ei käänny, koska `pituus` jäisi ilman arvoa.
* **Jokaisen argumentin pitää kelvata sijoitettavaksi vastaavaan parametriin.**
  Testi on helppo: jos sijoitus `int pituus = ...;` kääntyisi, kelpaa arvo myös
  argumentiksi. Kutsu `TulostaViiva(23, '*');` ei käänny, koska lukua `23` ei
  voi sijoittaa `char`-muuttujaan.

Tyyppien ei silti tarvitse olla täsmälleen samat. Kokonaisluvun voi sijoittaa
`double`-muuttujaan, joten `int`-argumentti kelpaa `double`-parametrille.
Toiseen suuntaan sijoitus ei onnistu, koska desimaalit katoaisivat.

```csharp,ignore
public static void TulostaHinta(string tuote, double hinta)
{
    Console.WriteLine($"{tuote}: {hinta} euroa");
}
```

```csharp,ignore
TulostaHinta("Kahvi", 2.5);   // double hinta = 2.5;
TulostaHinta("Pulla", 3);     // double hinta = 3;   käy, int sopii doubleen
TulostaViiva('=', 23.5);      // int pituus = 23.5;  ei käänny
```

Siksi koordinaatit ja muut mitat kannattaa määritellä `double`-tyyppisiksi:
silloin aliohjelmaa voi kutsua sekä kokonais- että desimaaliluvuilla.

## Kutsusta määrittelyyn

Uutta aliohjelmaa ei kannata aloittaa määrittelystä, vaan *kutsusta*. Kirjoita
ensin rivi, jolla haluaisit aliohjelmaa käyttää, ikään kuin se olisi jo
olemassa. Esittelyrivin voi sen jälkeen lukea kutsusta lähes mekaanisesti.

Halutaan tulostaa pistetaulun rivejä. Mukavin kutsu olisi tällainen:

```csharp,ignore
TulostaPisteet("Maija", 120);
```

Käydään kutsu läpi vasemmalta oikealle:

| Kutsusta näkyy                               | Esittelyriville                  |
| -------------------------------------------- | -------------------------------- |
| kutsun tulosta ei sijoiteta mihinkään        | `void`                           |
| aliohjelman nimi on `TulostaPisteet`         | `TulostaPisteet`                 |
| argumentteja on kaksi                        | kaksi parametria                 |
| 1. argumentti `"Maija"` on merkkijono        | `string` + itse keksitty nimi    |
| 2. argumentti `120` on kokonaisluku          | `int` + itse keksitty nimi       |

Alkuun tulevat tutut `public static`. Kutsussa on pelkkiä arvoja, joten
parametrien nimet pitää keksiä itse: mitä `"Maija"` ja `120` aliohjelman
kannalta tarkoittavat?

```text
                   TulostaPisteet(  "Maija"  ,    120     );
                                       ↓           ↓
public static void TulostaPisteet(string nimi, int pisteet)
```

Työjärjestys on aina sama:

1. **Kirjoita kutsu.** Mieti, mitä tietoja aliohjelma tarvitsee tehtäväänsä.
2. **Kirjoita esittelyrivi** kutsun perusteella.
3. **Tee tynkä ja käännä.** *Tynkä* on aliohjelma, jossa on esittelyrivi ja
   tyhjä runko `{ }`. Se ei tee vielä mitään, mutta ohjelma kääntyy. Jos ei
   käänny, vika on kutsussa tai esittelyrivissä, ja se on helppo löytää, kun
   muuta uutta koodia ei vielä ole.
4. **Kirjoita runko.** Tässä vaiheessa unohda, mistä aliohjelmaa kutsutaan.
   Käytössäsi ovat parametrit, eikä muuta tarvita.

```csharp
using System;

public class Pistetaulu
{
    public static void Main()
    {
        TulostaPisteet("Maija", 120);
        TulostaPisteet("Pekka", 95);
    }

    public static void TulostaPisteet(string nimi, int pisteet)
    {
        Console.WriteLine($"{nimi}: {pisteet} pistettä");
    }
}
```

Kohta 4 on tärkeämpi kuin miltä näyttää. Aliohjelma, joka nojaa vain
parametreihinsa, toimii mistä tahansa kutsuttuna: tänään `Main`-aliohjelmasta,
ensi viikolla toisesta ohjelmasta. Kun aliohjelma palauttaa arvon, samaan
työjärjestykseen tulee mukaan paluuarvon tyyppi, ks. [Aliohjelman
paluuarvo](./2-aliohjelman-paluuarvo.md#kutsusta-määrittelyyn-paluuarvon-tyyppi). Osassa 4 väliin
lisätään vielä dokumentointi ja testit, ks. [Testaaminen
ComTestillä](../osa4/4-testaaminen-comtestilla.md#ensimmäinen-testi-vaihe-vaiheelta).

## Parametrit Jypeli-ohjelmassa

Luvun 2.5 lopussa `LuoAurinko` ja `LuoTalo` erosivat toisistaan vain
muutaman arvon verran. Parametreilla sama koodi kirjoitetaan kerran. Alla
`LuoPallo` saa pallon keskipisteen ja säteen parametreina:

```csharp,ignore
public void LuoPallo(double x, double y, double sade)
{
    GameObject pallo = new GameObject(2 * sade, 2 * sade);
    pallo.Shape = Shape.Circle;
    pallo.Color = Color.White;
    pallo.Position = new Vector(x, y);
    Add(pallo);
}
```

Lumiukko on kolme palloa päällekkäin, siis kolme kutsua. Koska lumiukkojakin
halutaan useita, tehdään siitäkin aliohjelma. `PiirraLumiukko` saa
parametreina alimman pallon keskipisteen ja laskee siitä muiden pallojen
paikat. Pallot koskettavat toisiaan, kun keskipisteiden väli on säteiden summa.

```csharp,feature-jypeli
using Jypeli;

public class Lumiukot : PhysicsGame
{
    public override void Begin()
    {
        Level.Background.Color = Color.Black;

        PiirraLumiukko(-200, -100);
        PiirraLumiukko(100, -50.5);
    }

    public void PiirraLumiukko(double x, double y)
    {
        LuoPallo(x, y, 100);
        LuoPallo(x, y + 100 + 50, 50);
        LuoPallo(x, y + 100 + 2 * 50 + 30, 30);
    }

    public void LuoPallo(double x, double y, double sade)
    {
        GameObject pallo = new GameObject(2 * sade, 2 * sade);
        pallo.Shape = Shape.Circle;
        pallo.Color = Color.White;
        pallo.Position = new Vector(x, y);
        Add(pallo);
    }
}
```

Tässä näkyy koko luvun asia pienessä tilassa:

* `Begin` kutsuu `PiirraLumiukko`-aliohjelmaa, joka kutsuu `LuoPallo`-aliohjelmaa
  kolmesti. Jokainen uusi lumiukko on `Begin`-aliohjelmassa **yksi rivi**.
* Argumentit ovat lausekkeita: `y + 100 + 50` lasketaan ensin, ja tulos
  sijoitetaan `LuoPallo`-aliohjelman parametriin `y`.
* Kummallakin aliohjelmalla on oma `x` ja oma `y`. Ne ovat eri muuttujia, vaikka
  nimi on sama: `LuoPallo`-aliohjelman `y` saa kolmella kutsulla kolme eri arvoa,
  eikä `PiirraLumiukko`-aliohjelman `y` muutu miksikään.
* Kutsussa `PiirraLumiukko(-200, -100)` argumentit ovat kokonaislukuja ja
  parametrit `double`-tyyppisiä. Sijoitus onnistuu, joten kutsu kelpaa.

<details closed id="kuormittaminen"><summary><i class="bi bi-stars jyu-gold"></i> Valinnaista lisätietoa: Aliohjelman kuormittaminen</summary>

Samannimisiä aliohjelmia voi olla useita, kunhan niiden parametrilistat
eroavat toisistaan. Tätä kutsutaan *kuormittamiseksi* (engl. *overloading*).
Olet jo käyttänyt kuormitettua aliohjelmaa: `Console.WriteLine` hyväksyy
argumentikseen niin kokonaisluvun, merkkijonon kuin liukuluvunkin.

```csharp,ignore
public static void TulostaSumma(int a, int b)
{
    Console.WriteLine(a + b);
}

public static void TulostaSumma(double a, double b)
{
    Console.WriteLine(a + b);
}
```

Kääntäjä valitsee kutsuttavan version argumenttien lukumäärän ja tyyppien
perusteella: `TulostaSumma(3, 5)` kutsuu `int`-versiota ja
`TulostaSumma(1.5, 2.5)` `double`-versiota. Pelkkä paluuarvon tyyppi ei riitä
erottamaan versioita toisistaan.

Kuormittamista ei tarvita tällä kurssilla omissa ohjelmissa, mutta sen
tunnistaminen auttaa lukemaan kirjastojen dokumentaatiota, jossa samalla
nimellä on usein monta versiota. Toinen tapa saada sama aliohjelma toimimaan eri
määrällä argumentteja on antaa parametreille oletusarvot. Argumentit voi myös
nimetä kutsussa, jolloin niiden järjestyksen saa valita itse. Kummastakin
kerrotaan liitteessä [Valinnaiset parametrit ja
oletusarvot](../liitteet/oletusarvot.md).

</details>

## Tyypillisiä virheitä

Esimerkeissä on aliohjelma `TulostaViiva(char merkki, int pituus)`.

**Argumentteja on väärä määrä.** Kutsu `TulostaViiva('=');` antaa virheen
`CS7036: There is no argument given that corresponds to the required parameter
'pituus'`. Jos argumentteja on liikaa, virhe on `CS1501: No overload for
method 'TulostaViiva' takes 3 arguments`.

**Argumentit ovat väärässä järjestyksessä tai väärää tyyppiä.** Kääntäjä kertoo
virheilmoituksessa, monesko argumentti ei kelpaa ja miksi. Klikkaa Play
nähdäksesi ilmoituksen `CS1503: Argument 1: cannot convert from 'int' to
'char'` ja korjaa sitten kutsu.

```csharp
using System;

public class Virhe
{
    public static void Main()
    {
        TulostaViiva(23, '=');
    }

    public static void TulostaViiva(char merkki, int pituus)
    {
        Console.WriteLine(new string(merkki, pituus));
    }
}
```

Saman virheen saa, jos merkin tilalle kirjoittaa merkkijonon: `"="` on
`string`, `'='` on `char`.

**Tyypit on kirjoitettu kutsuun.** Tyypit kuuluvat määrittelyyn, arvot kutsuun.
`TulostaViiva(char '=', int 23);` antaa virheen `CS1525: Invalid expression
term 'char'`.

**Arvot on kirjoitettu määrittelyyn.** Sama sekaannus toisin päin:
`public static void TulostaViiva(char '=', int 23)` antaa virheen `CS1001:
Identifier expected`, koska `'='` ja `23` eivät ole muuttujan nimiä.
Määrittelyssä kerrotaan, *millaista* tietoa aliohjelma ottaa vastaan, ei sitä,
mitä tietoa sille jollakin kerralla annetaan.

**Parametrilta puuttuu tyyppi.** Muuttujia voi määritellä samalla rivillä
useita (`int a, b;`), mutta parametreja ei: jokaiselle kirjoitetaan oma tyyppi,
vaikka se olisi sama. `TulostaSumma(int a, b)` ei käänny, `TulostaSumma(int a,
int b)` kääntyy.

**Nimet eivät kerro mitään.** `TulostaViiva(char a, int b)` kääntyy ja toimii,
mutta kutsuja joutuu lukemaan rungon selvittääkseen, kumpi on kumpi. Parametrien
nimet ovat aliohjelman käyttöohje.

## Yhteenveto

* Parametri on aliohjelman muuttuja, joka saa arvonsa kutsusta. Määrittelyssä
  jokaisella parametrilla on tyyppi ja nimi.
* Argumentti on kutsussa annettu arvo. Kutsun alussa tapahtuu sijoitus
  *parametri = argumentti*, järjestyksessä vasemmalta oikealle.
* Argumentti voi olla mikä tahansa lauseke, kunhan sen arvon voi sijoittaa
  parametriin. `int` kelpaa `double`-parametrille, toisin päin ei.
* Parametrin nimi on aliohjelman oma, eikä sen tarvitse olla sama kuin kutsujan
  muuttujan nimi.
* Uusi aliohjelma syntyy järjestyksessä kutsu, esittelyrivi, kääntyvä tynkä,
  runko.

## Tehtävät

<!-- Numerointi tarkentuu, kun osan muut tehtävät tehdään. TIM-palautuslinkit
     lisätään, kun tehtävät on viety TIMiin. -->

<task>
  <task-title num="T1">Kirjoita esittelyrivit <points>1 p.</points></task-title>
  <handout>

  {{#include ../exercises/3-1-1-esittelyrivit/handout.md}}

  </handout>
</task>

<task>
  <task-title num="T2">Lisää lumiukkoja <points>1 p.</points></task-title>
  <handout>

  {{#include ../exercises/3-1-2-lisaa_lumiukkoja/handout.md}}

  </handout>
</task>
