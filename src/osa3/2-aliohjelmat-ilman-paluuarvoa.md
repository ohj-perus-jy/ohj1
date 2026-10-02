# Aliohjelmat ilman paluuarvoa

[Funktiot](../osa2/4-funktiot.md) laskevat: ne saavat arvoja
ja antavat tuloksen takaisin. Kaikki tehtävät eivät kuitenkaan ole laskemista.
Ohjelman pitää myös tulostaa, piirtää ja lisätä olioita peliin. Sellainen
aliohjelma *tekee* jotakin eikä anna mitään takaisin. Paluuarvon tyypin
paikalle kirjoitetaan silloin `void` eli "tyhjä". Olet nähnyt sanan alusta
asti: `public static void Main()`.

## Mihin aliohjelmia tarvitaan?

Kuvittele, että selität ystävälle, miten luoksesi tullaan kylään. Et sano:
"Nosta oikea jalka, siirrä sitä eteenpäin, laske se alas, nosta vasen
jalka..." Sanot: "Kävele bussipysäkille, ota bussi 12, jää pois torilla."
Jokainen ohje on nimi kokonaiselle toimintosarjalle, jonka kumpikin tuntee.
Mikään ohjeista ei anna vastausta, vaan jokainen saa jotakin tapahtumaan.
Juuri sellaisia ovat aliohjelmat, joilla ei ole paluuarvoa.

* **Ohjelma jaetaan osiin.** Pelin `Begin` voi olla kolmesataa riviä
  sekaisin kentän piirtämistä, pelaajan luomista ja näppäinten asettamista.
  Tai se voi olla kolme riviä: `LuoKentta();`, `LuoPelaaja();` ja
  `AsetaOhjaimet();`. Jälkimmäisestä näkee yhdellä silmäyksellä, mitä ohjelma
  tekee, ja kun kenttä on rikki, tiedät, mistä vika löytyy.
* **Sama tulostus tai piirto tehdään monta kertaa.** Otsikko kehyksineen
  tulostetaan ohjelman kolmessa kohdassa, tai peliin tulee viisi lumiukkoa.
  Aliohjelmana kumpikin on joka kerta yksi rivi.
* **Muutos tehdään yhteen paikkaan.** Kun kehyksen viivat halutaan vaihtaa
  tähdiksi, muutos tehdään aliohjelmaan, ja se näkyy kaikkialla, missä
  aliohjelmaa kutsutaan.

## `void`-aliohjelma

Tehdään ohjelma, joka tulostaa pistetaulun kehyksineen. Ensin niin kuin se
tehtäisiin ilman aliohjelmia:

```csharp
using System;

public class Pistetaulu
{
    public static void Main()
    {
        Console.WriteLine("=======================");
        Console.WriteLine("=======================");
        Console.WriteLine("Maija: 120 pistettä");
        Console.WriteLine("=======================");
        Console.WriteLine("=======================");
        Console.WriteLine("Pekka: 95 pistettä");
        Console.WriteLine("=======================");
        Console.WriteLine("=======================");
    }
}
```

Toimii, mutta viivaa tulostava rivi esiintyy kuusi kertaa. Jos kehys halutaan
vaihtaa vaikka tähdiksi, muutos tehdään kuuteen kohtaan. Kootaan viivan
tulostaminen aliohjelmaksi:

```csharp
using System;

public class Pistetaulu
{
    public static void Main()
    {
        TulostaViiva();
        TulostaViiva();
        Console.WriteLine("Maija: 120 pistettä");
        TulostaViiva();
        TulostaViiva();
        Console.WriteLine("Pekka: 95 pistettä");
        TulostaViiva();
        TulostaViiva();
    }

    public static void TulostaViiva()
    {
        Console.WriteLine("=======================");
    }
}
```

Ohjelma tulostaa täsmälleen saman kuin edellinen. Esittelyrivi on funktioista
tuttu kahta kohtaa lukuun ottamatta:

* `void` paluuarvon tyypin paikalla tarkoittaa, että aliohjelma ei anna mitään
  takaisin.
* Sulut ovat tyhjät, koska aliohjelma ei tarvitse tietoa. Sulut kirjoitetaan
  silti aina.

Rungossa ei ole `return`-lausetta. Kun rungon viimeinen lause on suoritettu,
suoritus palaa kutsujalle.

Funktio ja `void`-aliohjelma rinnakkain:

|                   | Funktio                              | `void`-aliohjelma                        |
| ----------------- | ------------------------------------ | ---------------------------------------- |
| Tehtävä           | laskee arvon                         | tekee jotakin: tulostaa, piirtää, lisää  |
| Paluuarvon tyyppi | `double`, `string`, `bool`...        | `void`                                   |
| `return`          | pakollinen, arvon kanssa             | ei tarvita                               |
| Kutsu             | lauseke: `double ala = Nelio(3);`    | lause: `TulostaViiva();`                 |
| Nimi              | mitä saadaan: `Keskiarvo`            | mitä tehdään: `TulostaViiva`             |

Se, mitä `void`-aliohjelma saa aikaan, on *sivuvaikutus* (engl. *side
effect*): aliohjelma muuttaa jotakin itsensä ulkopuolella, esimerkiksi
tulostaa ruudulle tai lisää peliin olion. Funktion tulos kulkee kutsujalle
paluuarvona. `void`-aliohjelman tulos näkyy ruudulla tai pelissä, mutta
kutsuja ei saa sitä käyttöönsä. Sivuvaikutuksiin palataan [arvo- ja
viitetyyppien](../osa5/3-arvotyypit-ja-viitetyypit.md) yhteydessä, kun
aliohjelma muuttaa kutsujan taulukkoa.

`void`-aliohjelma *tekee* jotakin, joten sen nimi alkaa yleensä verbillä:
`TulostaViiva`, `LuoPelaaja`, `PiirraTausta`. Substantiivi kuten `Viiva`
jättää lukijan arvailemaan, tulostetaanko viiva, piirretäänkö se vai
lasketaanko sen pituus.

## Mitä kutsussa tapahtuu?

Kutsu toimii kuten funktiolla: suoritus hyppää aliohjelman rungon
ensimmäiseen lauseeseen ja palaa, kun runko on suoritettu. Ero on paluussa.
Kutsun paikalle ei tule arvoa, vaan suoritus jatkuu kutsua seuraavasta
lauseesta. Alla otsikon tulostus kokoaa kaksi viivaa yhdeksi kutsuksi:

```csharp
using System;

public class Pistetaulu
{
    public static void Main()
    {
        TulostaKehys();
        Console.WriteLine("Maija: 120 pistettä");
        TulostaKehys();
        Console.WriteLine("Pekka: 95 pistettä");
        TulostaKehys();
    }

    public static void TulostaKehys()
    {
        TulostaViiva();
        TulostaViiva();
    }

    public static void TulostaViiva()
    {
        Console.WriteLine("=======================");
    }
}
```

Suoritus kulkee näin: `Main` kutsuu `TulostaKehys`-aliohjelmaa, joka kutsuu
`TulostaViiva`-aliohjelmaa kahdesti, ja vasta sitten suoritus palaa
`Main`-aliohjelman toiselle riville.

```bob
  "Main()"         "TulostaKehys()"     "TulostaViiva()"
     |
     +---- kutsu ------->+
     |                   +---- kutsu ------->+
     |                   |                   | "======"
     |                   +<---- paluu -------+
     |                   |
     |                   +---- kutsu ------->+
     |                   |                   | "======"
     |                   +<---- paluu -------+
     +<---- paluu -------+
     |
     | "Maija: 120 pistettä"
     |
     v
```

## Parametrit

`void`-aliohjelma voi saada parametreja samalla tavalla kuin funktio. Annetaan
viivalle merkki ja pituus ja tehdään pisterivin tulostamisesta oma
aliohjelmansa:

```csharp
using System;

public class Pistetaulu
{
    public static void Main()
    {
        TulostaViiva('=', 23);
        TulostaPisteet("Maija", 120);
        TulostaPisteet("Pekka", 95);
        TulostaViiva('*', 23);
    }

    public static void TulostaViiva(char merkki, int pituus)
    {
        Console.WriteLine(new string(merkki, pituus));
    }

    public static void TulostaPisteet(string nimi, int pisteet)
    {
        Console.WriteLine($"{nimi}: {pisteet} pistettä");
    }
}
```

Lauseke `new string(merkki, pituus)` tekee merkkijonon, jossa `merkki`
toistuu `pituus` kertaa.

Esittelyrivin voi lukea kutsusta kuten funktioilla
([Kutsusta määrittelyyn](../osa2/4-funktiot.md#kutsusta-määrittelyyn)). Ero on
ensimmäisessä kohdassa: kun kutsun tulosta ei sijoiteta mihinkään eikä käytetä
lausekkeessa, aliohjelma on `void`.

```text
                   TulostaPisteet(  "Maija"  ,    120     );
                                       ↓           ↓
public static void TulostaPisteet(string nimi, int pisteet)
```

Työjärjestys on sama kuin funktioilla: kutsu, esittelyrivi, tynkä, runko.
`void`-aliohjelman tynkä on helpompi, koska tyhjä runko `{ }` riittää:
aliohjelma ei lupaa palauttaa mitään.

## `void`-kutsu ei ole lauseke

[Lausekkeiden](../osa2/3-lauseet-ja-lausekkeet.md#kutsu-lausekkeena)
testi toimii tässäkin: lausekkeella on arvo, ja sen voi kirjoittaa sijoituksen
oikealle puolelle. `void`-aliohjelman kutsulla ei ole arvoa, joten se ei ole
lauseke. Se kelpaa vain omaksi lauseekseen.

```csharp,ignore
TulostaViiva('=', 23);              // oikein: kutsu omana lauseenaan
int x = TulostaViiva('=', 23);      // CS0029: Cannot implicitly convert type 'void' to 'int'
```

Kääntäjän viesti kertoo saman asian omalla tavallaan: `void`-kutsusta ei saa
`int`-arvoa, koska siitä ei saa mitään arvoa.

## Laskeva vai tekevä?

Palauttaminen ja tulostaminen menevät helposti sekaisin, koska pienessä
ohjelmassa kummastakin seuraa sama asia: luku näkyy ruudulla. Ne ovat silti
eri asioita. Vertaa kahta tapaa laskea ympyrän pinta-ala:

```csharp,ignore
public static void TulostaYmpyranAla(double sade)
{
    Console.WriteLine(Math.PI * sade * sade);
}

public static double YmpyranAla(double sade)
{
    return Math.PI * sade * sade;
}
```

Ensimmäinen näyttää tuloksen käyttäjälle, ja sen jälkeen tulos on poissa.
Ohjelma itse ei saa sitä käyttöönsä. Toinen antaa tuloksen *kutsujalle*, joka
päättää, mitä sillä tehdään:

```csharp,ignore
double ala = YmpyranAla(4.2);                            // talteen muuttujaan
double tilavuus = YmpyranAla(4.2) * 10;                  // osaksi laskua
Console.WriteLine($"Pohjan ala on {YmpyranAla(4.2)}");   // tai tulostukseen, halutussa muodossa
```

`TulostaYmpyranAla`-aliohjelmalla näistä onnistuu vain viimeinen, ja sekin
vain yhdessä muodossa. Sääntö on siksi tämä: kun aliohjelma laskee jotakin,
tee siitä funktio. Kun aliohjelma tulostaa tai piirtää, tee siitä
`void`-aliohjelma. Jos tarvitaan molempia, tee kaksi aliohjelmaa, joista
`void`-aliohjelma tulostaa funktion tuloksen:

```csharp,ignore
public static void TulostaYmpyranAla(double sade)
{
    Console.WriteLine($"Ympyrän ala on {YmpyranAla(sade)}");
}
```

## `return` `void`-aliohjelmassa

`void`-aliohjelmassa ei tarvita `return`-lausetta, mutta lauseella `return;`
ilman arvoa aliohjelman voi lopettaa kesken. Suoritus palaa silloin heti
kutsujalle. Alla aliohjelma ei tulosta laskua, jos laskutettavaa ei ole:

```csharp,ignore
public static void TulostaLasku(double summa)
{
    if (summa == 0)
    {
        Console.WriteLine("Ei laskutettavaa.");
        return;                        // suoritus palaa kutsujalle tähän
    }
    Console.WriteLine($"Maksettavaa: {summa} euroa");
}
```

Arvoa `void`-aliohjelma ei voi palauttaa: `return 5;` antaa virheen (ks.
Tyypillisiä virheitä alla).

## Miksi `Main` ja `Begin` ovat `void`?

Paluuarvo annetaan kutsujalle. Kuka sitten kutsuu `Main`-aliohjelmaa? Ei mikään
oma aliohjelmasi, vaan .NET-ympäristö, kun ohjelma käynnistetään.
`Begin`-aliohjelmaa kutsuu Jypeli, kun peli alkaa. Kumpikaan ei odota
vastausta, joten molemmat ovat `void`. Sama koskee Jypelin [näppäinten
käsittelijöitä](./4-jypeli-ja-oliot.md): Jypeli kutsuu niitä, kun näppäintä
painetaan, eikä tee paluuarvolla mitään.

## Aliohjelmat Jypelissä

Aiemmin tehdyssä [lumiukossa](../osa2/4-funktiot.md#funktiot-jypelissä)
`Begin` lisäsi jokaisen pallon itse. Kun lumiukkoja on useita, `Begin` täyttyy
`Add`-riveistä. Kootaan lumiukon piirtäminen `void`-aliohjelmaksi.
`PiirraLumiukko` saa parametreina alimman pallon keskipisteen ja laskee siitä
muiden pallojen paikat. Pallot koskettavat toisiaan, kun keskipisteiden väli
on säteiden summa.

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
        Add(LuoPallo(x, y, 100));
        Add(LuoPallo(x, y + 100 + 50, 50));
        Add(LuoPallo(x, y + 100 + 2 * 50 + 30, 30));
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

Esimerkki kokoaa edellä opitun pieneen tilaan:

* `Begin` kutsuu `PiirraLumiukko`-aliohjelmaa, joka kutsuu
  `LuoPallo`-funktiota kolmesti. Jokainen uusi lumiukko on
  `Begin`-aliohjelmassa **yksi rivi**.
* `LuoPallo` on funktio, koska se luo pallon ja antaa sen takaisin.
  `PiirraLumiukko` on `void`, koska sen tehtävä on lisätä pallot peliin.
  Lumiukkoa se ei voisi palauttaa yhtenä arvona, koska lumiukko on kolme
  oliota.
* Argumentit ovat lausekkeita: `y + 100 + 50` lasketaan ensin, ja tulos
  sijoitetaan `LuoPallo`-funktion parametriin `y`.
* Kummallakin aliohjelmalla on oma `x` ja oma `y`. Ne ovat eri muuttujia,
  vaikka nimi on sama: `LuoPallo`-funktion `y` saa kolmella kutsulla kolme eri
  arvoa, eikä `PiirraLumiukko`-aliohjelman `y` muutu miksikään.

Isommassa pelissä `Begin` kannattaa kirjoittaa samaan tapaan
sisällysluetteloksi: `LuoKentta();`, `LuoPelaaja();`, `AsetaOhjaimet();`.
Näin harjoitustyön `Begin` kannattaa kirjoittaa alusta asti.

## Tyypillisiä virheitä

**`void`-kutsun tulos sijoitetaan muuttujaan.** `int x = TulostaViiva('=',
23);` antaa virheen `CS0029: Cannot implicitly convert type 'void' to 'int'`.
Jos tarvitset aliohjelmasta arvon, tee siitä funktio.

**`return` arvon kanssa.** `void`-aliohjelmassa rivi `return 5;` antaa virheen
`CS0127: Since 'Pistetaulu.TulostaViiva()' returns void, a return keyword must
not be followed by an object expression`. Joko poista arvo (`return;`) tai
muuta aliohjelma funktioksi.

**Sulut unohtuvat kutsusta.** Pelkkä `TulostaViiva;` ei ole kutsu, vaan
aliohjelman nimi ilman mitään tekemistä. Kääntäjä ilmoittaa `CS0201: Only
assignment, call, increment, decrement, await, and new object expressions can
be used as a statement`. Klikkaa Play nähdäksesi virheilmoituksen ja lisää
sitten sulut.

```csharp
using System;

public class Virhe
{
    public static void Main()
    {
        TulostaViiva;
    }

    public static void TulostaViiva()
    {
        Console.WriteLine("=======================");
    }
}
```

**Puolipiste määrittelyn perässä.** Rivi `public static void TulostaViiva();`
näyttää kutsulta ja määrittelyltä yhtä aikaa, ja kääntäjä ilmoittaa `CS0501:
'TulostaViiva()' must declare a body`. Määrittelyn perään tulevat aaltosulut,
ei puolipiste.

**Aliohjelma on määritelty, mutta mitään ei tapahdu.** Tämä ei ole
käännösvirhe, mikä tekee siitä salakavalan. Aliohjelman runko suoritetaan vain,
jos aliohjelmaa kutsutaan. Tarkista, että kutsu on olemassa.

**Laskeva aliohjelma tulostaa.** Ei sekään ole käännösvirhe, mutta tulos jää
ohjelman ulottumattomiin. Ks. [Laskeva vai tekevä?](#laskeva-vai-tekevä)

## Yhteenveto

* `void`-aliohjelma tekee jotakin eikä anna mitään takaisin. Sen vaikutus,
  esimerkiksi tulostus tai olion lisääminen peliin, on sivuvaikutus.
* Määrittely: `public static void Nimi(parametrit) { ... }`.
  `return`-lausetta ei tarvita; `return;` lopettaa aliohjelman kesken.
* `void`-kutsu ei ole lauseke: sitä ei voi sijoittaa muuttujaan eikä käyttää
  laskussa.
* Laskeminen funktioon, tulostaminen ja piirtäminen `void`-aliohjelmaan.
* `Main`, `Begin` ja Jypelin näppäinten käsittelijät ovat `void`, koska niiden
  kutsuja ei odota paluuarvoa.

## Testaa tietosi

Valitse vastaus, niin näet heti, menikö se oikein ja miksi. Pisteitä ei jaeta,
mutta huomaat, mitä asioita kannattaa vielä kerrata.

<visa>

**Totta vai tarua?**

<vaittama vastaus="tarua">
`void`-aliohjelman kutsun voi sijoittaa muuttujaan.
<perustelu>
**Tarua.** `void`-aliohjelma ei anna arvoa, joten sijoitettavaa ei ole.
Kääntäjä ilmoittaa esimerkiksi `CS0029: Cannot implicitly convert type 'void'
to 'int'`.
</perustelu>
</vaittama>

<vaittama vastaus="totta">
Tulostaminen ruudulle on sivuvaikutus.
<perustelu>
**Totta.** Aliohjelma muuttaa jotakin itsensä ulkopuolella, tässä ruudun
sisältöä. Kutsuja ei saa tulostettua tekstiä käyttöönsä, toisin kuin
paluuarvon.
</perustelu>
</vaittama>

<vaittama vastaus="tarua">
`void`-aliohjelmassa ei saa olla `return`-lausetta.
<perustelu>
**Tarua.** `return;` ilman arvoa on sallittu, ja se lopettaa aliohjelman
kesken. Arvon kanssa (`return 5;`) se ei käänny.
</perustelu>
</vaittama>

**Monivalinta.** Yksi vaihtoehto on oikein.

<kysymys>
Mitä seuraava ohjelma tulostaa?

```csharp,ignore
public static void Main()
{
    Console.WriteLine("A");
    Tervehdi();
    Console.WriteLine("C");
}

public static void Tervehdi()
{
    Console.WriteLine("B");
}
```

- [ ] `A`, `C`, `B`
- [x] `A`, `B`, `C`
- [ ] `B`, `A`, `C`
- [ ] `A`, `C`

<perustelu>
**b.** Kun suoritus saapuu kutsuun `Tervehdi();`, se hyppää aliohjelmaan,
tulostaa `B` ja palaa kutsun jälkeiselle riville tulostamaan `C`. Sillä ei
ole väliä, että `Tervehdi` on kirjoitettu tiedostoon viimeiseksi.
</perustelu>
</kysymys>

<kysymys>
Mikä seuraavista kannattaa kirjoittaa funktioksi eikä `void`-aliohjelmaksi?

- [ ] Aliohjelma, joka tulostaa pistetaulun otsikon
- [x] Aliohjelma, joka laskee tuotteen alennetun hinnan
- [ ] Aliohjelma, joka lisää peliin viisi vihollista
- [ ] Aliohjelma, joka piirtää kentän reunat

<perustelu>
**b.** Alennettu hinta on arvo, jota kutsuja tarvitsee: sen voi tulostaa,
laskea yhteen muiden hintojen kanssa tai verrata budjettiin. Muut vaihtoehdot
tekevät jotakin eli tulostavat, lisäävät tai piirtävät.
</perustelu>
</kysymys>

</visa>

## Tehtävät

<!-- TIM-palautuslinkit lisätään, kun tehtävät on viety TIMiin.
     Vaiheessa B lisäksi: "Lumiukko konsoliin" (TulostaPallo-aliohjelma
     kolmesti) ja "Jaa Begin osiin" (Jypeli: AsetaTausta, LuoPelaaja,
     LuoMaali). -->

<task>
  <task-title num="3.1">Lisää lumiukkoja <points>1 p.</points></task-title>
  <handout>

  {{#include ../tehtavat/3-1-lisaa-lumiukkoja/handout.md}}

  </handout>
</task>

<task>
  <task-title num="3.2">Tulostavasta palauttavaksi <points>1 p.</points></task-title>
  <handout>

  {{#include ../tehtavat/3-2-tulostavasta-palauttavaksi/handout.md}}

  </handout>
</task>
