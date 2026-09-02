# 💾 Muuttujat ja tietotyypit

Ohjelman on muistettava asioita: pelaajan pisteet, käyttäjän nimi, kuinka monta
kertaa nappia on painettu. Muistamiseen käytetään *muuttujia*. Muuttuja on
nimetty paikka, johon tallennetaan yksi arvo ja josta arvo voidaan myöhemmin
lukea tai jossa sitä voidaan muuttaa.

## Mihin muuttujia tarvitaan?

Melkein kaikki, mitä ohjelma tekee, perustuu johonkin, mitä se muistaa.

* **Pelin pistelaskuri.** Kun pelaaja kerää kolikon, pisteet kasvavat. Jotta
  ohjelma voi kasvattaa pisteitä, sen on tiedettävä, paljonko niitä oli ennen
  kolikkoa. Se tieto on muuttujassa `pisteet`.
* **Verkkokaupan ostoskori.** Jokainen lisätty tuote kasvattaa loppusummaa.
  Loppusumma on muuttuja, jota päivitetään; tuotteen hinta on toinen.
* **Lämpötilan muunnos.** Käyttäjä antaa lämpötilan fahrenheitasteina, ohjelma
  tallentaa sen muuttujaan, laskee celsiusasteet toiseen muuttujaan ja
  tulostaa tuloksen.

Ilman muuttujia ohjelma pystyisi vain tulostamaan valmiiksi kirjoitettua
tekstiä, kuten [ensimmäinen ohjelmamme](../osa1/2-ensimmainen-ohjelma.md).
Muuttujien myötä ohjelma saa *tilan*: se on eri tilanteessa sen mukaan, mitä
arvoja muuttujissa on. Kun muuttujan arvo muuttuu, ohjelman tila muuttuu.

## Muuttujan määrittely

C#-kielessä jokaiselle muuttujalle on kerrottava *tyyppi* ja *nimi* ennen
käyttöä. Tyyppi määrittää tarkasti, millaisia arvoja muuttujaan voi tallentaa.
Määrittelyn yhteydessä muuttujalle annetaan yleensä heti myös arvo
yhtäsuuruusmerkillä `=`.

```csharp,ignore
int pisteet = 0;          // pisteet-muuttujaan voi tallentaa kokonaislukuja
string nimi = "Maija";    // nimi-muuttujaan voi tallentaa merkkijonoja
bool peliOhi = false;     // peliOhi-muuttujaan voi tallentaa totuusarvoja
```

Muuttujaa voi ajatella laatikkona, jonka kylkeen on kirjoitettu nimi ja jonka
sisällä on arvo. Laatikon muoto eli tyyppi kertoo, mitä siihen mahtuu:
kokonaislukulaatikkoon ei mahdu tekstiä.

```bob
  pisteet        nimi           peliOhi
 .-------.     .---------.     .-------.
 |   0   |     | "Maija" |     | false |
 '-------'     '---------'     '-------'
   int          string          bool
```

Ensimmäinen muuttuja nimeltä `pisteet` on tyypiltään `int`, eli kokonaisluku.
Muita kokonaislukuja voisivat olla esimerkiksi `-10`, `0` ja `67`.

Toinen muuttuja nimeltä `nimi` on tyypiltään `string`, eli merkkijono.
Merkkijono voi sisältää esimerkiksi kirjaimia, numeroita ja erikoismerkkejä.
Esimerkkejä merkkijonoista ovat `"Hei!"`, `"12345"` ja `"Ohjelmointi on
kivaa."`. Huomaa, että merkkijonot kirjoitetaan lainausmerkkien sisälle:
`12345` on luku, `"12345"` on viiden merkin mittainen teksti.

Kolmas muuttuja nimeltä `peliOhi` on tyypiltään `bool`, eli totuusarvo.
Totuusarvo voi olla joko `true` (tosi) tai `false` (epätosi). Totuusarvoja
syntyy esimerkiksi vertailuista: `5 > 3` on `true` ja `2 == 4` on `false`.

Muuttujan tyyppi säilyy samana koko muuttujan elinkaaren ajan. Jos ohjelmoija
yrittää tallentaa muuttujaan väärän tyyppisen arvon, kääntäminen epäonnistuu.

## Arvon sijoittaminen ja muuttaminen

Muuttujan arvoa muutetaan *sijoituslauseella*. Sijoituksen kohde on aina
vasemmalla, ja oikealla on lauseke, jonka arvo lasketaan ja tallennetaan.

```csharp
using System;

public class Pistelasku
{
    public static void Main()
    {
        int pisteet = 0;
        Console.WriteLine(pisteet);   // 0

        pisteet = 10;                 // sijoitetaan uusi arvo
        Console.WriteLine(pisteet);   // 10

        pisteet = pisteet + 5;        // lasketaan vanhasta arvosta uusi
        Console.WriteLine(pisteet);   // 15
    }
}
```

Rivi `pisteet = pisteet + 5;` näyttää matemaatikosta virheelliseltä, mutta
ohjelmoinnissa `=` ei tarkoita "on yhtä suuri kuin" vaan "laske oikea puoli ja
tallenna tulos vasemmalle". Ensin lasketaan `pisteet + 5` muuttujan nykyisellä
arvolla (10 + 5 = 15), ja sitten tulos tallennetaan muuttujaan `pisteet`.

Muuttujan arvo muuttuu *vain* silloin, kun siihen sijoitetaan. Tämä kuulostaa
itsestään selvältä, mutta aiheuttaa yllätyksiä:

```csharp
using System;

public class Kopio
{
    public static void Main()
    {
        int a = 5;
        int b = a;             // b saa a:n arvon 5. b on oma laatikkonsa.
        a = 100;               // a muuttuu...
        Console.WriteLine(b);  // ...mutta b on edelleen 5
    }
}
```

Sijoitus `b = a` kopioi arvon; se ei sido muuttujia toisiinsa. Kun `a`
myöhemmin muuttuu, `b` ei tiedä siitä mitään.

Muuttujaa ei voi käyttää ennen kuin sillä on arvo. Jos kirjoitat `int x;` ja
yrität tulostaa `x`:n, kääntäjä ilmoittaa `CS0165: Use of unassigned local
variable 'x'`. Anna siis arvo heti määrittelyn yhteydessä, ellei ole hyvää
syytä olla antamatta.

## Perustietotyypit

Yllä käytetyt `int`, `string` ja `bool` ovat C#-kielen perustietotyyppejä.
Alla on lueteltu tällä kurssilla tarvittavat tyypit ja niiden tärkeimmät
ominaisuudet.

Lukutyypit:

| Tietotyyppi | Kuvaus                      | Arvoalue                                                   | Esimerkkejä arvoista       |
| ----------- | --------------------------- | ---------------------------------------------------------- | -------------------------- |
| `int`       | Kokonaisluku                | -2 147 483 648 &ndash; 2 147 483 647                       | `-10`, `0`, `67`           |
| `double`    | Liukuluku (desimaaliluku)   | n. ±1.79 · 10<sup>308</sup>, noin 15 merkitsevää numeroa   | `3.14`, `-0.001`, `2.0`    |
| `float`     | Liukuluku (vähemmän tarkka) | n. ±3.40 · 10<sup>38</sup>, noin 7 merkitsevää numeroa     | `3.14f`, `-0.001f`, `2.0f` |

Muut tietotyypit:

| Tietotyyppi | Kuvaus             | Esimerkkejä arvoista      |
| ----------- | ------------------ | ------------------------- |
| `string`    | Merkkijono         | `"Hei!"`, `"12345"`, `""` |
| `bool`      | Totuusarvo         | `true`, `false`           |
| `char`      | Yksittäinen merkki | `'a'`, `'1'`, `'#'`       |

Muutama huomio:

* **Desimaalierotin on piste**, ei pilkku: `3.14`. Pilkku tarkoittaa C#:ssa
  jotakin aivan muuta, ja `3,14` aiheuttaa käännösvirheen.
* **`double` on kurssin oletusliukuluku.** `float`-tyyppiä tarvitaan lähinnä
  Jypelissä, ja sen arvon perään kirjoitetaan `f`. Jos et tiedä, kumpaa
  käyttää, käytä `double`-tyyppiä.
* **`char` kirjoitetaan puolilainausmerkein**, `string` lainausmerkein:
  `'a'` on yksi merkki, `"a"` on yhden merkin mittainen merkkijono.
* **`int` ei riitä kaikkeen.** Maailman väkiluku (yli 8 miljardia) ei mahdu
  `int`-muuttujaan. Silloin käytetään `long`-tyyppiä, jonka arvoalue on noin
  ±9,2 · 10<sup>18</sup>.

<details closed><summary><i class="bi bi-stars jyu-gold"></i> Valinnaista lisätietoa: Miksi kokonaisluvulla on yläraja?</summary>

Tietokoneen muistissa `int`-muuttujalle on varattu 32 bittiä, eli 32 ykköstä
tai nollaa. Niillä voi esittää 2<sup>32</sup> eli noin 4,3 miljardia eri arvoa,
jotka on jaettu tasan negatiivisten ja positiivisten lukujen kesken. Jos
`int`-muuttujan arvo ylittää ylärajan, se "pyörähtää ympäri" negatiiviseksi
ilman virheilmoitusta.

Tämä ei ole pelkkä teoria: vuonna 2014 YouTube joutui vaihtamaan
katselukertalaskurinsa tyyppiä, kun *Gangnam Style* -videon katselukerrat
lähestyivät lukua 2 147 483 647. Tarkemmin lukujen esittämisestä kerrotaan
liitteessä [Tiedon esittäminen
tietokoneessa](../liitteet/tiedon-esittaminen-tietokoneella.md).

</details>

## Muuttujan nimeäminen

Muuttujan nimi kertoo lukijalle, mitä muuttuja sisältää. Hyvä nimi säästää
kommentin: `int pelaajanPisteet` ei kaipaa selitystä, `int p` kaipaa.

C#-kielen säännöt nimille:

* Nimi koostuu kirjaimista, numeroista ja alaviivasta, eikä se voi alkaa
  numerolla. `pisteet2` kelpaa, `2pisteet` ei.
* Isot ja pienet kirjaimet ovat eri merkkejä: `pisteet` ja `Pisteet` ovat
  kaksi eri muuttujaa. Tämä on tehokas tapa aiheuttaa itselleen hämmennystä.
* Kielen *avainsanoja*, kuten `int`, `class` tai `public`, ei voi käyttää
  niminä.

Kurssin käytännöt on kuvattu [Tyylioppaassa](../tyyliopas.md). Tärkeimmät:

* Muuttujat nimetään *camelCase*-tyylillä: ensimmäinen sana pienellä, seuraavat
  sanat isolla alkukirjaimella ja ilman välejä: `pisteet`, `pelaajanNimi`,
  `keskiarvoTalvella`.
* Nimessä ei käytetä ääkkösiä, vaikka C# sallisi ne: `paivamaara`, ei
  `päivämäärä`. Näin koodi toimii varmasti kaikkien työkalujen kanssa.
* Nimi kuvaa sisältöä. Yhden kirjaimen nimet (`i`, `x`) ovat hyväksyttäviä
  vain lyhytikäisille apumuuttujille, kuten silmukkalaskureille.

Huonon nimeämisen seuraukset näkee viimeistään kuukauden päästä:

```csharp,ignore
double a = 72.5;
double b = 1.80;
double c = a / (b * b);   // Mikä tämä nyt olikaan?
```

```csharp,ignore
double paino = 72.5;
double pituus = 1.80;
double painoindeksi = paino / (pituus * pituus);
```

## Muuttujan tulostaminen

Muuttujan arvon voi tulostaa sellaisenaan tai osana tekstiä. Tekstin ja
muuttujien yhdistämiseen kätevin tapa on *interpoloitu merkkijono*: kirjoita
lainausmerkkien eteen `$`, jolloin aaltosulkujen sisään voi kirjoittaa
muuttujan tai muun lausekkeen.

```csharp
using System;

public class Tervehdys
{
    public static void Main()
    {
        string nimi = "Maija";
        int ika = 20;

        Console.WriteLine(nimi);
        Console.WriteLine("Hei, " + nimi + "!");                // yhdistäminen +-merkillä
        Console.WriteLine($"Hei, {nimi}! Olet {ika} vuotta.");   // interpolointi
        Console.WriteLine($"Ensi vuonna olet {ika + 1}.");       // lauseke aaltosuluissa
    }
}
```

## Vakiot

Joskus arvo ei saa muuttua ohjelman suorituksen aikana: valon nopeus, pelin
kentän leveys, arvonlisäveroprosentti. Tällainen arvo kannattaa määritellä
*vakioksi* `const`-avainsanalla. Kääntäjä estää vakion arvon muuttamisen, ja
lukija näkee heti, että kyse on kiinteästä arvosta.

```csharp,ignore
const int KENTAN_LEVEYS = 800;      // all caps -tyyli
const double Alv = 0.255;           // PascalCase-tyyli
```

Vakio on parempi kuin "taikaluku" keskellä koodia: jos kentän leveys esiintyy
ohjelmassa kymmenessä kohdassa lukuna `800`, sen muuttaminen on kymmenen kohdan
työ, ja yksi unohtuu varmasti. Jos se on vakiossa, muutos tehdään yhteen
paikkaan.

Vakioksi voi määritellä vain sellaisen arvon, joka on tiedossa jo
käännösaikana, käytännössä lukuja, merkkijonoja ja totuusarvoja.

<details closed><summary><i class="bi bi-stars jyu-gold"></i> Valinnaista lisätietoa: <code>var</code> ja <code>readonly</code></summary>

C#-kielessä on mahdollista merkitä muuttujan tyypin kohdalle sana `var`,
jolloin kääntäjä päättelee tyypin automaattisesti arvon perusteella.
Esimerkiksi `var luku = 5;` määrittelee `luku`-muuttujan tyypiksi `int`, koska
arvo `5` on kokonaisluku. Muuttujan tyyppi on kuitenkin edelleen kiinteä, eikä
sitä voi muuttaa myöhemmin. Tämä on kätevä ominaisuus, mutta tällä kurssilla
keskitymme selkeyden vuoksi eksplisiittiseen tyyppimääritykseen.

Oliot, joiden arvot määräytyvät vasta ajon aikana, voidaan määritellä
`readonly`-avainsanalla. Tällöin muuttujan arvo voidaan asettaa vain kerran.
Tämä vastaa kutakuinkin perustietotyyppien `const`-avainsanaa.

</details>

## Tyypillisiä virheitä

**Väärän tyyppinen arvo.** Kokonaislukumuuttujaan ei voi sijoittaa
desimaalilukua. Kääntäjä ilmoittaa `CS0266: Cannot implicitly convert type
'double' to 'int'`. Klikkaa Play nähdäksesi virheilmoituksen ja korjaa sitten
muuttujan tyyppi.

```csharp
using System;

public class Virhe
{
    public static void Main()
    {
        int lampotila = 21.5;
        Console.WriteLine(lampotila);
    }
}
```

Tekstin sijoittaminen lukumuuttujaan antaa vastaavan ilmoituksen `CS0029:
Cannot implicitly convert type 'string' to 'int'`. Jos teksti on luku, se
pitää ensin muuntaa; siitä kerrotaan seuraavassa luvussa.

**Sama nimi kahdesti.** Muuttujan voi määritellä samassa lohkossa vain kerran.
Toinen `int pisteet = ...` -rivi antaa virheen `CS0128: A local variable named
'pisteet' is already defined in this scope`. Jos haluat muuttaa arvoa, jätä
tyyppi pois: `pisteet = 20;`.

**Käyttö ennen määrittelyä.** Muuttuja on olemassa vasta määrittelyrivin
jälkeen. Jos sitä käytetään aiemmin, kääntäjä ilmoittaa `CS0103: The name
'pisteet' does not exist in the current context`. Sama ilmoitus tulee, jos nimi
on kirjoitettu eri tavalla kuin määrittelyssä (`Pisteet` vs. `pisteet`).

## Yhteenveto

* Muuttuja on nimetty paikka yhdelle arvolle. Sillä on tyyppi, joka ei muutu.
* Määrittely: `tyyppi nimi = arvo;`. Sijoitus: `nimi = lauseke;`.
* Sijoitus kopioi arvon. Muuttujan arvo muuttuu vain sijoittamalla.
* Kurssin perustyypit: `int`, `double`, `string`, `bool`, `char`.
* Nimeä muuttujat kuvaavasti camelCase-tyylillä. Kiinteät arvot vakioiksi
  `const`-avainsanalla.

## 🤔 Testaa tietosi

Päätä vastaus ensin ja avaa se vasta sitten. Pisteitä ei jaeta, mutta hämärät
kohdat paljastuvat.

<visa>

**Totta vai tarua?**

<details data-vastaus="tarua"><summary>1. Muuttujan tyypin voi vaihtaa kesken ohjelman sijoittamalla siihen erityyppisen arvon.</summary>

**Tarua.** Tyyppi lukitaan määrittelyssä. `int`-muuttujaan ei voi sijoittaa
merkkijonoa, ja kääntäjä ilmoittaa siitä virheellä CS0029.

</details>

<details data-vastaus="totta"><summary>2. Sijoitus <code>b = a;</code> kopioi <code>a</code>:n arvon, joten <code>a</code>:n muuttaminen myöhemmin ei vaikuta <code>b</code>:hen.</summary>

**Totta.** Perustietotyyppien muuttujat ovat toisistaan riippumattomia
laatikoita. Sijoitus kopioi arvon, ei yhdistä laatikoita.

</details>

<details data-vastaus="tarua"><summary>3. <code>'a'</code> ja <code>"a"</code> ovat C#:ssa sama asia.</summary>

**Tarua.** `'a'` on `char` eli yksi merkki, `"a"` on `string` eli yhden
merkin pituinen merkkijono. Tyypit ovat eri, eikä toista voi sijoittaa toisen
paikalle.

</details>

**Monivalinta.** Yksi vaihtoehto on oikein.

**4.** Mikä seuraavista on kelvollinen ja tyyliohjeen mukainen muuttujan nimi?

a) `Painoindeksi`\
b) `paino_indeksi`\
c) `painoindeksi`\
d) `2paino`

<details data-vastaus="c"><summary>Näytä vastaus</summary>

**c.** Muuttujat nimetään camelCase-tyylillä pienellä alkukirjaimella. Iso
alkukirjain on varattu luokille ja aliohjelmille, alaviiva ei kuulu kurssin
tyyliin, ja numerolla alkava nimi ei edes käänny.

</details>

**5.** Mitä seuraava koodi tulostaa?

```csharp,ignore
int pisteet = 42;
Console.WriteLine($"Pisteitä: {pisteet}");
```

a) `Pisteitä: {pisteet}`\
b) `Pisteitä: 42`\
c) `Pisteitä: pisteet`\
d) Käännösvirheen, koska merkkijonossa on aaltosulkuja

<details data-vastaus="b"><summary>Näytä vastaus</summary>

**b.** Dollarimerkki merkkijonon edessä tekee siitä interpoloidun:
aaltosulkujen sisällä oleva lauseke korvataan arvollaan. Ilman `$`-merkkiä
tulostuisi vaihtoehto a.

</details>

</visa>

## Tehtävät

<!-- Vaiheessa B: T-tehtävät "Määrittele muuttujat"
     (exercises/2-3-1-mita_tulostaa), "Mitä ohjelma tulostaa?" (sijoitusten
     jäljitys), "Painoindeksi". -->
