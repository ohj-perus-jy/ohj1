# Aliohjelmat

Ohjelmat kasvavat nopeasti. Pieni peli, jossa on pelaaja, muutama vihollinen
ja pistelaskuri, on helposti satoja rivejä, eikä kukaan pysty pitämään satoja
rivejä päässään kerralla. Siksi ohjelma jaetaan *aliohjelmiin*: nimettyihin
palasiin, joista jokainen tekee yhden asian. Aliohjelma kirjoitetaan kerran,
ja sen jälkeen sitä voi käyttää eli *kutsua* niin monta kertaa kuin haluaa.

Olet jo käyttänyt aliohjelmia, vaikka et ehkä ajatellut asiaa: `Main` on
aliohjelma ja Jypelin `Begin` on aliohjelma. Myös `Console.WriteLine` on valmis
aliohjelma, jota olet kutsunut. Tässä luvussa opit, mitä kutsussa oikeastaan
tapahtuu, ja kirjoitat ensimmäiset omat aliohjelmasi.

## Mihin aliohjelmia tarvitaan?

Kuvittele, että selität ystävälle, miten hänen luokseen tullaan kylään.
Et sano: "Nosta oikea jalka, siirrä sitä eteenpäin, laske se alas, nosta
vasen jalka..." Sanot: "Kävele bussipysäkille, ota bussi 12, jää pois
torilla." Jokainen ohje on nimi kokonaiselle toimintosarjalle, jonka kumpikin
tuntee. *Kävele* on aliohjelma, ja niin on myös *ota bussi 12*. Ihmiset
ajattelevat aliohjelmilla luonnostaan. Ohjelmoinnissa ne pitää vain kirjoittaa
näkyviin.

Ohjelmissa aliohjelmia tarvitaan neljästä syystä.

* **Sama asia tehdään monta kertaa.** Pelissä luodaan kymmenen vihollista,
  ja jokainen tarvitsee saman viiden rivin luontikoodin. Tulostetaan otsikko
  kehyksineen ohjelman kolmessa kohdassa. Copy-paste toimii mainiosti, kunnes
  huomaat koodissa virheen ja korjaat sen kymmeneen kohtaan. Löydät niistä
  hyvällä tuurilla yhdeksän.
* **Ohjelma pitää jakaa osiin.** Pelin `Begin` voi olla kolmesataa riviä
  sekaisin kentän piirtämistä, pelaajan luomista ja näppäinten asettamista.
  Tai se voi olla kolme riviä: `LuoKentta();`, `LuoPelaaja();` ja
  `AsetaOhjaimet();`. Jälkimmäisestä näkee yhdellä silmäyksellä, mitä ohjelma
  tekee, ja kun kenttä on rikki, tiedät, mistä vika löytyy.
* **Nimi kertoo, mitä koodi tekee.** Kymmenen riviä laskentaa vaatii lukijalta
  pysähtymisen. Kutsu `LaskePintaAla()` ei vaadi. Hyvin nimetty aliohjelma
  on kuin hyvin nimetty muuttuja: se säästää kommentin ja lukijan hermot.
* **Pienen palan voi testata erikseen.** Kolmensadan rivin `Begin`-aliohjelmasta
  on vaikea sanoa, toimiiko se. Kymmenen rivin aliohjelmasta sen näkee
  kokeilemalla. Osassa 4 kokeilu annetaan koneen tehtäväksi: aliohjelmalle
  kirjoitetaan [testit](../osa4/4-testaaminen-comtestilla.md), jotka ajetaan
  napin painalluksella.

Hyvä aliohjelma on *itsenäinen*: se tekee tehtävänsä samalla tavalla
riippumatta siitä, mistä sitä kutsutaan. Kun kirjoitat aliohjelman runkoa,
älä mieti kutsujaa. Silloin samaa aliohjelmaa voi käyttää muuallakin kuin
siinä kohdassa, jota varten se alun perin tehtiin.

Ilman aliohjelmia ohjelma on yksi pitkä lauseiden jono, joka suoritetaan
alusta loppuun. Aliohjelmien myötä ohjelma saa *rakenteen*: pieniä osia, joilla
on nimi ja tehtävä, ja pääohjelma, joka kokoaa osat yhteen.

## Aliohjelman kutsuminen

Aloitetaan käyttämisestä, koska sitä olet jo tehnyt. Aliohjelman *kutsu* koostuu
aliohjelman nimestä ja suluista. Sulkujen sisään kirjoitetaan tiedot, joita
aliohjelma tarvitsee tehtäväänsä.

```csharp,ignore
Console.WriteLine("Hei!");     // WriteLine tarvitsee tulostettavan tekstin
double juuri = Math.Sqrt(16);  // Sqrt tarvitsee luvun ja antaa takaisin sen neliöjuuren
int suurempi = Math.Max(3, 8); // Max tarvitsee kaksi lukua ja antaa takaisin suuremman
```

Kutsuessa kannattaa ajatella aliohjelmaa laatikkona, jonka sisältöä ei tarvitse
tuntea. Riittää tietää kaksi asiaa:

1. **Mitä tietoa aliohjelma tarvitsee?** Tiedot annetaan sulkujen sisällä
   kutsussa. Niitä sanotaan *argumenteiksi*. `Console.WriteLine` tarvitsee
   tulostettavan tekstin, `Math.Sqrt` (antaa luvun neliöjuuren) tarvitsee luvun,
   `Math.Max` (antaa suuremman kahdesta luvusta) tarvitsee kaksi lukua.
2. **Antaako aliohjelma jotakin takaisin?** Jos antaa, tulosta sanotaan
   *paluuarvoksi*, ja kutsua voi käyttää kuten mitä tahansa arvoa: sijoittaa
   muuttujaan, tulostaa tai käyttää laskussa. `Math.Sqrt(16)` antaa takaisin
   luvun `4`. `Console.WriteLine` ei anna takaisin mitään; se tulostaa ja
   siinä kaikki.

```bob
        argumentti                              paluuarvo
                        .-------------------.
   16  ---------------->|     Math.Sqrt     |----------------> 4.0
                        '-------------------'

                       .--------------------.
 "Hei!" -------------->| Console.WriteLine  |   ei paluuarvoa,
                       '--------------------'   teksti näkyy ruudulla

                       .--------------------.
3    8  -------------->|      Math.Max      |----------------> 8
                       '--------------------'

```

Sama asia taulukkona muutamasta tutusta aliohjelmasta:

| Kutsu                        | Tarvitsee            | Antaa takaisin                   |
| ---------------------------- | -------------------- | -------------------------------- |
| `Console.WriteLine("Hei!")`  | tekstin              | ei mitään                        |
| `Math.Sqrt(16)`              | luvun                | `double`-luvun `4`               |
| `Math.Max(3, 8)`             | kaksi lukua          | suuremman niistä, `8`            |
| `int.Parse("42")`            | merkkijonon          | `int`-luvun `42`                 |
| `Main()`                     | ei mitään            | ei mitään                        |

Kahviautomaatti on samanlainen laatikko: laitat sisään kolikon ja painat
nappia, saat kahvin. Sinun ei tarvitse tietää, miten automaatti jauhaa pavut.
Postilaatikko taas on kuin `Console.WriteLine`: laitat kirjeen sisään, eikä
mitään tule takaisin, mutta jotakin tapahtuu.

Alla oleva ohjelma kutsuu pelkkiä valmiita aliohjelmia. Huomaa, että `Math.Max`-
kutsun tulos menee suoraan `Console.WriteLine`-kutsun argumentiksi: paluuarvo
on arvo siinä missä muuttujakin.

```csharp
using System;

public class Kutsuja
{
    public static void Main()
    {
        double sivu = Math.Sqrt(144);        // paluuarvo talteen muuttujaan
        Console.WriteLine(sivu);             // 12

        Console.WriteLine(Math.Max(3, 8));   // paluuarvo suoraan argumentiksi: 8

        Console.WriteLine("Valmis.");        // ei paluuarvoa, ei muuttujaa
    }
}
```

Tässä luvussa kirjoitetut omat aliohjelmat eivät vielä tarvitse tietoa eivätkä
anna mitään takaisin. Ne ovat siis `Main`-aliohjelman kaltaisia: nimi ja
tyhjät sulut. Parametrit ja paluuarvot saavat omat lukunsa osassa 3:
[Parametrit ja argumentit](../osa3/1-parametrit-ja-argumentit.md) ja
[Aliohjelman paluuarvo](../osa3/2-aliohjelman-paluuarvo.md).

## Oman aliohjelman määrittely

Tehdään ohjelma, joka tulostaa kaksi otsikkoa kehyksineen. Ensin niin kuin se
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

Ohjelma tulostaa täsmälleen saman kuin edellinen. Uutta on `Main`-aliohjelman
*alapuolelle* kirjoitettu `TulostaViiva`, joka on rakenteeltaan aivan kuin
`Main` itse. Käydään määrittely läpi osa kerrallaan:

```csharp,ignore
public static void TulostaViiva()
{
    Console.WriteLine("=======================");
}
```

* `public` tarkoittaa, että aliohjelma on julkinen ja sitä voidaan kutsua
  mistä tahansa ohjelman osasta. Tällä kurssilla kaikki aliohjelmat ovat
  julkisia.
* `static` tarkoittaa, että aliohjelma kuuluu luokalle eikä oliolle.
  Konsoliohjelmissa se kirjoitetaan aina; Jypelissä se jätetään pois, kuten
  alempana nähdään. Tarkempi selitys tulee Ohjelmointi 2 -kurssilla.
* `void` tarkoittaa, että aliohjelma ei anna mitään takaisin. Jos aliohjelma
  palauttaisi arvon, tässä kohdassa lukisi arvon tyyppi, kuten `int` tai
  `string`.
* `TulostaViiva` on aliohjelman nimi. Nimi valitaan itse.
* Sulkujen `()` sisään tulisivat tiedot, joita aliohjelma tarvitsee. Tämä
  aliohjelma ei tarvitse mitään, joten sulut ovat tyhjät. Sulut kirjoitetaan
  silti aina.
* Aaltosulkujen `{ }` väliin kirjoitetaan aliohjelman *runko* eli lauseet,
  jotka suoritetaan, kun aliohjelmaa kutsutaan.

Kolme sääntöä, jotka kannattaa painaa mieleen heti:

* **Aliohjelma kirjoitetaan luokan sisään, `Main`-aliohjelman rinnalle.** Ei
  `Main`-aliohjelman sisään eikä luokan ulkopuolelle. Määrittelyjärjestyksellä
  ei ole väliä: `TulostaViiva` voi olla ennen `Main`-aliohjelmaa tai sen
  jälkeen.
* **Määrittely ei suorita mitään.** Aliohjelman runko suoritetaan vasta, kun
  aliohjelmaa kutsutaan. Jos aliohjelman määrittelee mutta unohtaa kutsua,
  mitään ei tapahdu, eikä kääntäjä valita. Se on täysin tyytyväinen.
* **Kutsu on nimi ja sulut, määrittely on paljon muutakin.** Kutsussa ei
  toisteta sanoja `public static void`: pelkkä `TulostaViiva();` riittää.

## Mitä kutsussa tapahtuu?

Kun suoritus saapuu riville `TulostaViiva();`, se hyppää aliohjelman rungon
ensimmäiseen lauseeseen. Kun rungon viimeinen lause on suoritettu, suoritus
*palaa* takaisin ja jatkuu kutsua seuraavasta rivistä. Aliohjelma voi kutsua
toista aliohjelmaa, jolloin paluu tapahtuu aina siihen kohtaan, josta kutsu
tehtiin. Alla otsikon tulostus kokoaa kaksi viivaa yhdeksi kutsuksi:

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

Ohjelman *kirjoitusjärjestys* ja *suoritusjärjestys* ovat siis eri asioita:
`TulostaViiva` on tiedostossa viimeisenä, mutta suoritetaan ensimmäisenä.
Suoritusjärjestykseen palataan luvussa [Ohjelman
rakenne](./6-ohjelman-rakenne.md#suoritusjärjestys).

## Aliohjelman nimeäminen

Aliohjelma *tekee* jotakin, joten sen nimi on yleensä verbi tai alkaa verbillä:
`TulostaViiva`, `LuoPelaaja`, `LaskePainoindeksi`, `PiirraTausta`.
Substantiivi kuten `Viiva` jättää lukijan arvailemaan, tulostetaanko viiva,
piirretäänkö se vai lasketaanko sen pituus.

Kurssin käytännöt ovat samat kuin muuttujille, yhtä poikkeusta lukuun
ottamatta: aliohjelmat nimetään *PascalCase*-tyylillä eli **isolla**
alkukirjaimella, ja jokainen sana alkaa isolla: `TulostaViiva`, ei
`tulostaViiva`. Näin nimestä näkee heti, onko kyseessä muuttuja vai
aliohjelma. Ääkkösiä ei käytetä, kuten ei muuttujissakaan: `PiirraTausta`, ei
`PiirräTausta`. Katso tarkemmin [Tyyliopas](../tyyliopas.md#nimeämiskäytännöt).

## Aliohjelmat Jypelissä

Pelissä aliohjelmien hyöty näkyy heti. Osan 1 [aurinko ja
talo](../osa1/4-ensimmainen-graafinen-ohjelma.md#ensimmäinen-jypeli-ohjelma)
-esimerkki mahtui vielä yhteen `Begin`-aliohjelmaan, mutta jo muutaman olion
jälkeen `Begin` on seinä koodia. Jaetaan se osiin:

```csharp,feature-jypeli
using Jypeli;

public class Maisema : PhysicsGame
{
    public override void Begin()
    {
        AsetaTausta();
        LuoAurinko();
        LuoTalo();
    }

    public void AsetaTausta()
    {
        Level.Background.Color = Color.Black;
    }

    public void LuoAurinko()
    {
        GameObject aurinko = new GameObject(120, 120);
        aurinko.Shape = Shape.Circle;
        aurinko.Color = Color.Yellow;
        aurinko.Position = new Vector(-150, 100);
        Add(aurinko);
    }

    public void LuoTalo()
    {
        GameObject talo = new GameObject(200, 150);
        talo.Shape = Shape.Rectangle;
        talo.Color = Color.Brown;
        talo.Position = new Vector(150, -100);
        Add(talo);
    }
}
```

Ruudulla näkyy täsmälleen sama kuin ennenkin, mutta `Begin` on nyt
sisällysluettelo: kolme riviä kertoo, mitä pelin alussa tapahtuu. Kun aurinko
on väärän värinen, vika on `LuoAurinko`-aliohjelmassa eikä missään muualla.
Näin harjoitustyön `Begin` kannattaa kirjoittaa alusta asti.

Kaksi eroa konsoliohjelmaan:

* Aliohjelmien edestä puuttuu `static`. Jypelissä aliohjelmat käyttävät pelin
  omia asioita, kuten `Add`-metodia ja `Level`-ominaisuutta, ja siksi ne
  kirjoitetaan ilman `static`-sanaa. Syy selitetään luvussa [Jypeli ja
  oliot](../osa3/4-jypeli-ja-oliot.md); toistaiseksi riittää muistaa
  sääntö: konsolissa `public static void`, Jypelissä `public void`.
* `Begin`-aliohjelmassa on sana `override`. Se kertoo, että Jypelillä on oma
  `Begin`, jonka tilalle tämä kirjoitetaan. Omissa aliohjelmissa sitä ei
  käytetä.

Huomasitko, että `LuoAurinko` ja `LuoTalo` ovat melkein sama koodi? Ne eroavat
vain koossa, muodossa, värissä ja paikassa. Olisi kätevää kirjoittaa yksi
`LuoOlio`-aliohjelma ja kertoa kutsussa, millainen olio halutaan. Juuri sitä
varten ovat parametrit, ja niihin päästään osan 3 alussa.

## `void`-aliohjelma ja `return`

Kaikki tämän luvun aliohjelmat ovat `void`-tyyppisiä: ne eivät anna mitään
takaisin, joten niissä ei tarvita `return`-lausetta. Suoritus palaa
kutsujalle, kun rungon viimeinen lause on suoritettu.

`return;`-lauseella `void`-aliohjelman suorituksen voi kuitenkin lopettaa
kesken, jolloin suoritus palaa heti kutsujalle. Alla aliohjelma ei tulosta
laskua, jos siitä ei ole kyse:

```csharp,ignore
public static void TulostaLasku()
{
    int summa = 0;
    if (summa == 0)
    {
        Console.WriteLine("Ei laskutettavaa.");
        return;                        // suoritus palaa kutsujalle tähän
    }
    Console.WriteLine($"Maksettavaa: {summa} euroa");   // ei suoriteta
}
```

Tarve `return`-lauseelle tulee vastaan vasta, kun aliohjelma alkaa palauttaa
arvoja. Sitä käsitellään luvussa [Aliohjelman
paluuarvo](../osa3/2-aliohjelman-paluuarvo.md).

> [!HUOMAUTUS]
> **Terminologiaa.** Tällä kurssilla *aliohjelma* on yleisnimi kaikille
> ohjelman nimetyille osille. Arvon palauttavaa aliohjelmaa kutsutaan
> *funktioksi*, ja olioon liittyvää aliohjelmaa *metodiksi*. Kirjallisuudessa
> sanoja käytetään ristiin, joten älä hämmenny, jos kohtaat eri nimityksiä.
> Englanninkielisissä lähteissä C#-aliohjelmia sanotaan lähes aina metodeiksi
> (*method*).

<details closed><summary><i class="bi bi-stars jyu-gold"></i> Valinnaista lisätietoa: Miksi <code>public</code> ja <code>static</code> pitää kirjoittaa?</summary>

Jos `public` jätetään pois, aliohjelma on C#-kielessä oletuksena *yksityinen*
(`private`), eli sitä voi kutsua vain saman luokan sisältä. Tällä kurssilla
ohjelmat ovat enimmäkseen yhden luokan kokoisia, joten `private` toimisi
usein aivan hyvin. `public` kirjoitetaan silti aina, koska kurssin
testityökalu ComTest ja myöhemmät monen luokan ohjelmat tarvitsevat sitä.

`static` erottaa kaksi eri asiaa: aliohjelman, joka kuuluu *luokalle*, ja
aliohjelman, joka kuuluu luokasta luodulle *oliolle*. `Math.Sqrt` on
staattinen: sitä kutsutaan luokan nimellä, eikä mitään "Math-oliota" tarvitse
luoda. Jypeli-pelin `LuoAurinko` sen sijaan kuuluu pelioliolle, jolla on
oma kenttä, tausta ja olioiden lista; siksi siitä puuttuu `static`. Ero
avataan kunnolla luvussa [Jypeli ja oliot](../osa3/4-jypeli-ja-oliot.md) ja
laajemmin Ohjelmointi 2 -kurssilla.

</details>

## Tyypillisiä virheitä

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

**Aliohjelma `Main`-aliohjelman sisällä.** Aliohjelmat ovat luokan sisällä
rinnakkain, eivät sisäkkäin. Jos `public static void TulostaViiva()` on
kirjoitettu `Main`-aliohjelman aaltosulkujen väliin, kääntäjä ilmoittaa
`CS0106: The modifier 'public' is not valid for this item`. Ilmoitus
kuulostaa oudolta, mutta syy on sijainti: siirrä aliohjelma `Main`-aliohjelman
sulkevan aaltosulun jälkeen. Kääntäjä puhuu sanasta `public`, koska C# sallii
aliohjelman sisään niin sanotun paikallisen funktion, jolla ei saa olla
`public`-sanaa. Tällä kurssilla paikallisia funktioita ei käytetä.

**Nimi eri tavalla kuin määrittelyssä.** `tulostaViiva();` tai
`TulostaViva();` antaa virheen `CS0103: The name 'tulostaViiva' does not exist
in the current context`. Isot ja pienet kirjaimet ovat eri merkkejä
aliohjelmissakin.

**Puolipiste määrittelyn perässä.** Rivi `public static void TulostaViiva();`
näyttää kutsulta ja määrittelyltä yhtä aikaa, ja kääntäjä ilmoittaa
`CS0501: 'TulostaViiva()' must declare a body`. Määrittelyn perään tulevat
aaltosulut, ei puolipiste.

**Aliohjelma on määritelty, mutta mitään ei tapahdu.** Tämä ei ole
käännösvirhe, mikä tekee siitä salakavalan. Aliohjelman runko suoritetaan
vain, jos aliohjelmaa kutsutaan. Tarkista, että `Main`-aliohjelmassa on kutsu.

## Yhteenveto

* Aliohjelma on nimetty pala ohjelmaa, joka tekee yhden asian. Se kirjoitetaan
  kerran ja kutsutaan tarvittaessa monta kertaa.
* Kutsuessa riittää tietää, mitä tietoa aliohjelma tarvitsee (argumentit
  sulkujen sisällä) ja antaako se jotakin takaisin (paluuarvo).
* Määrittely: `public static void Nimi() { ... }`. Kutsu: `Nimi();`.
  Määrittely ei suorita mitään; vasta kutsu suorittaa.
* Aliohjelma kirjoitetaan luokan sisään `Main`-aliohjelman rinnalle.
  Määrittelyjärjestyksellä ei ole väliä, kutsujärjestyksellä on.
* Nimi on PascalCase-tyylinen verbi: `TulostaViiva`, `LuoPelaaja`.
* Konsolissa `public static void`, Jypelissä `public void`.

## Testaa tietosi

Valitse vastaus, niin näet heti, menikö se oikein ja miksi. Pisteitä ei jaeta,
mutta huomaat, mitä asioita kannattaa vielä kerrata.

<visa>

**Totta vai tarua?**

<vaittama vastaus="tarua">
Aliohjelma suoritetaan heti, kun se on määritelty.
<perustelu>
**Tarua.** Määrittely vain kertoo, mitä aliohjelma tekee. Runko suoritetaan
vasta, kun aliohjelmaa kutsutaan. Aliohjelma, jota ei koskaan kutsuta, ei
tee koskaan mitään.
</perustelu>
</vaittama>

<vaittama vastaus="tarua">
Aliohjelma pitää määritellä tiedostossa ennen kohtaa, jossa sitä kutsutaan.
<perustelu>
**Tarua.** Luokan sisällä aliohjelmien järjestyksellä ei ole väliä.
`TulostaViiva` voi olla `Main`-aliohjelman jälkeen, vaikka `Main` kutsuu
sitä. Muuttujat ovat eri juttu: ne pitää määritellä ennen käyttöä.
</perustelu>
</vaittama>

<vaittama vastaus="totta">
Kutsu `Math.Sqrt(25)` on arvo, jonka voi sijoittaa muuttujaan.
<perustelu>
**Totta.** `Math.Sqrt` palauttaa arvon, joten kutsua voi käyttää kuten mitä
tahansa lauseketta: `double juuri = Math.Sqrt(25);` tallentaa muuttujaan
luvun `5`. `Console.WriteLine`-kutsua ei voi sijoittaa muuttujaan, koska se
ei palauta mitään.
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
Mikä seuraavista on oikein kirjoitettu ja tyyliohjeen mukainen
aliohjelman määrittely konsoliohjelmassa?

- [ ] `public static void tulostaViiva() { ... }`
- [ ] `public static void TulostaViiva { ... }`
- [x] `public static void TulostaViiva() { ... }`
- [ ] `TulostaViiva();`

<perustelu>
**c.** Aliohjelman nimi alkaa isolla kirjaimella (a on muuttujatyyliä), ja
nimen perään tulevat sulut myös silloin, kun aliohjelma ei tarvitse mitään
tietoa (b:stä ne puuttuvat). Vaihtoehto d on kutsu, ei määrittely.
</perustelu>
</kysymys>

</visa>

## Tehtävät

<!-- Numerointi tarkentuu, kun osan muut tehtävät tehdään. TIM-palautuslinkit
     lisätään, kun tehtävät on viety TIMiin.
     Vaiheessa B lisäksi: "Lumiukko konsoliin" (TulostaPallo-aliohjelma
     kolmesti) ja "Jaa Begin osiin" (Jypeli: AsetaTausta, LuoPelaaja,
     LuoMaali). -->

<task>
  <task-title num="T1">Järjestele toimivaksi <points>1 p.</points></task-title>
  <handout>

  {{#include ../exercises/2-5-1-jarjestele_toimivaksi/handout.md}}

  </handout>
</task>
