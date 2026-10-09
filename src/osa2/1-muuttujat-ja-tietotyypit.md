# Muuttujat ja tietotyypit

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
Aloitetaan yhdestä muuttujasta, johon tallennetaan pelin pisteet.

```csharp,ignore
int pisteet = 7;
```

Rivi tekee kaksi asiaa. Ensin se *määrittelee* muuttujan: `int` on tyyppi ja
tarkoittaa kokonaislukua, ja `pisteet` on muuttujan nimi. Tämän jälkeen
ohjelmalla on muistissaan paikka nimeltä `pisteet`, johon mahtuu yksi
kokonaisluku. Sitten `= 7` *sijoittaa* paikkaan arvon `7`. Puolipiste päättää
rivin, kuten tulostuskäskynkin. Muistipaikan sisältö näyttää nyt tältä:

| Nimi      | Tyyppi | Mitä voi sisältää | Arvo |
| --------- | ------ | ----------------- | ---- |
| `pisteet` | `int`  | kokonaisluku      | `7`  |

Muuttujat määritellään aina samalla kaavalla: tyyppi, nimi, yhtäsuuruusmerkki ja
arvo. Lisätään pelaajan nimi ja tieto siitä, onko peli ohi.

```csharp,ignore
int pisteet = 7;
// HIGHLIGHT_GREEN_BEGIN
string nimi = "Maija";
bool peliOhi = false;
// HIGHLIGHT_GREEN_END
```

Muuttuja `nimi` on tyypiltään `string`, mikä tarkoittaa merkkijonoa. Merkkijono
on ohjelmoinnissa tapa tallentaa tekstiä, kuten kirjaimia, numeroita ja
erikoismerkkejä. Esimerkkejä merkkijonoista ovat `"Hei!"`, `"12345"` ja
`"Ohjelmointi on kivaa."`. Huomaa, että merkkijonot kirjoitetaan lainausmerkkien
sisälle: `12345` on luku, `"12345"` on viiden merkin mittainen teksti.

Muuttuja `peliOhi` on tyypiltään `bool`, eli totuusarvo. Totuusarvo voi olla
joko `true` (tosi) tai `false` (epätosi). Totuusarvoja syntyy esimerkiksi
vertailuista: `5 > 3` on `true` ja `2 == 4` on `false` -- palaamme vertailuihin
hieman myöhemmin. 

Nyt ohjelmamme sisältää kolme muuttujaa: 

| Nimi      | Tyyppi   | Mitä voi sisältää | Arvo      |
| --------- | -------- | ----------------- | --------- |
| `pisteet` | `int`    | kokonaisluku      | `0`       |
| `nimi`    | `string` | merkkijono        | `"Maija"` |
| `peliOhi` | `bool`   | totuusarvo        | `false`   |

## Arvon sijoittaminen ja muuttaminen

Muuttujan arvoa voi muuttaa ohjelman suorituksen aikana. Jos esimerkiksi pelaaja
kerää kolikon, nimi vaihtuu tai peli päättyy, ohjelmassa voidaan sijoittaa uusi arvo muuttujaan:

```csharp,ignore
pisteet = 8;
nimi = "Matti";
peliOhi = true;
```

Muuttujan arvon muuttamista kutsutaan *sijoituslauseeksi*. Yksi yleisimmistä
tavoista tehdä sijoituslause on käyttää yhtäsuuruusmerkkiä `=`. Sijoituksen
kohde on aina vasemmalla (tässä `pisteet`, `nimi` tai `peliOhi`), ja oikealla on
muuttujaan tallennettava (eli "sijoitettava") arvo. 

Toisin kuin muuttujan arvo, sen tyyppi säilyy samana koko muuttujan elinkaaren ajan. Jos
ohjelmoija yrittää tallentaa muuttujaan väärän tyyppisen arvon, kääntäminen
epäonnistuu. Alla jokaiseen kolmeen muuttujaan yritetään väärän tyyppinen arvo. Klikkaa Play nähdäksesi, mitä kääntäjä sanoo.

```csharp,editable
using System;

public class VaaratTyypit
{
    public static void Main()
    {
        int pisteet = 0;
        string nimi = "Maija";
        bool peliOhi = false;

        pisteet = "100";       // merkkijono, vaikka pisteet on int
        nimi = 42;             // kokonaisluku, vaikka nimi on string
        peliOhi = 1;           // kokonaisluku, vaikka peliOhi on bool

        Console.WriteLine(pisteet);
    }
}
```

Kääntäjä ilmoittaa jokaisesta rivistä erikseen; esimerkiksi: 

```text
error CS0029: Cannot implicitly convert type 'string' to 'int'
```

Ilmoitus kertoo, minkä tyyppinen arvo oli tarjolla (tässä `string`) ja minkä
tyyppiseen muuttujaan (tässä `int`) se ei käynyt. Tämä johtuu, että
ensimmäisellä rivillä `"100"` on lainausmerkeissä, eikä ohjelma muuta sitä
automaattisesti luvuksi. Koska ohjelma ei käänny, yhtäkään sen riviä ei
suoriteta.

Voit muokata yllä olevaa koodia: kokeile muokata esimerkiksi `pisteet = 2.5;`
tai `peliOhi = "true";`. Korjaa lopuksi koodi niin, että ohjelma kääntyy.

Tehdään toinen ohjelma.

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

Rivi `pisteet = pisteet + 5;` näyttää matemaattisesti virheelliseltä, mutta
ohjelmoinnissa `=` ei tarkoita "on yhtä suuri kuin" vaan "laske oikea puoli ja
tallenna tulos vasemmalle". Ensin lasketaan `pisteet + 5` muuttujan nykyisellä
arvolla (10 + 5 = 15), ja sitten tulos tallennetaan muuttujaan `pisteet`.
Muista: Yhtäsuuruusmerkillä sijoitetaan oikean puolen arvo vasemmalla olevaan muuttujaan.

Muuttujan arvo muuttuu *vain* silloin, kun siihen sijoitetaan. Tämä kuulostaa
itsestään selvältä, mutta aiheuttaa yllätyksiä:

```csharp
using System;

public class Kopio
{
    public static void Main()
    {
        int a = 5;
        int b = a;             // b saa a:n arvon 5. b on oma muuttujansa.
        a = 100;               // a muuttuu...
        Console.WriteLine(b);  // ...mutta b on edelleen 5
    }
}
```

Sijoitus `b = a` kopioi arvon; se ei sido muuttujia toisiinsa. Kun `a`
myöhemmin muuttuu, `b` ei tiedä siitä mitään. Rivi `a = 100;` muuttaa vain
`a`:n arvon:

| Nimi | Tyyppi | Arvo ennen | Arvo jälkeen |
| ---- | ------ | ---------- | ------------ |
| `a`  | `int`  | `5`        | `100`        |
| `b`  | `int`  | `5`        | `5`          |

## Muuttujan käyttö ennen määrittelyä

Muuttujaa ei voi käyttää ennen kuin sillä on arvo. Jos kirjoitat `int x;` ja
yrität tulostaa `x`:n, kääntäjä ilmoittaa 

```
CS0165: Use of unassigned local variable 'x'. 
```

Yleensä arvo on syytä heti määrittelyn yhteydessä. Joskus kuitenkin arvo saadaan
myöhemmin, esimerkiksi käyttäjän syötteenä. Tällöin muuttuja voidaan
määritellään ilman arvoa.

## Perustietotyypit

Yllä käytetyt `int`, `string` ja `bool` ovat C#-kielen mukana tulevia valmiita
tietotyyppejä. C#:n mukana tulee [yhteensä 19 tyyppiä](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types), joista kurssilla käytetään vain muutamaa. Alla on
lueteltu tällä kurssilla tarvittavat tyypit ja niiden tärkeimmät ominaisuudet.

Lukutyypit:

| Tietotyyppi | Kuvaus                      | Arvoalue                                                   | Esimerkkejä arvoista       |
| ----------- | --------------------------- | ---------------------------------------------------------- | -------------------------- |
| `int`       | Kokonaisluku                | -2 147 483 648 &ndash; 2 147 483 647                       | `-10`, `0`, `67`           |
| `long`      | Pitkä kokonaisluku          | n. ±9,2 · 10<sup>18</sup>                                  | `-10000000000`, `0`, `42`  |
| `double`    | Liukuluku (desimaaliluku)   | n. ±1.79 · 10<sup>308</sup>, noin 15 merkitsevää numeroa   | `3.14`, `-0.001`, `2.0`    |

Nimitys "liukuluku" tulee siitä, että luvun tarkkuus "liukuu" sen mukaan, kuinka
suuri luku on. Mitä lähempänä nollaa luku on, sitä enemmän desimaaleja mahtuu
mukaan; mitä suurempi luku on, sitä vähemmän desimaaleja mahtuu mukaan.

<details closed><summary><i class="jyu-star"></i> Valinnaista lisätietoa: Miksi nimitys "liukuluku"?</summary>

Merkitsevien numeroiden määrä on kiinteä: `double`-tyyppisillä tyypeillä
desimaaliosan tarkkuus on noin 15–17 merkitsevää numeroa. C#:ssa on toinenkin
liukulukutyyppi, `float`, jonka desimaaliosan tarkkuus on noin 6-9 merkitsevää
numeroa. Esimerkiksi `double`-arvoilla luvun 2<sup>53</sup> ≈ 9 ×
10<sup>15</sup> yläpuolella edes kaikki kokonaisluvut eivät ole enää
esitettävissä. Liukuluvut ovat suurelta osin epätarkkoja, ja epätarkkuus kasvaa,
kun lukuja lasketaan yhteen tai vähennetään toisistaan.

</details>

Muut tietotyypit:

| Tietotyyppi | Kuvaus             | Esimerkkejä arvoista      |
| ----------- | ------------------ | ------------------------- |
| `string`    | Merkkijono         | `"Hei!"`, `"12345"`, `""` |
| `bool`      | Totuusarvo         | `true`, `false`           |
| `char`      | Yksittäinen merkki | `'a'`, `'1'`, `'#'`       |

Muutama huomio:

* **Desimaalierotin on piste**, ei pilkku: `3.14`. Pilkku tarkoittaa C#:ssa
  jotakin aivan muuta, ja `3,14` aiheuttaa käännösvirheen.
* **`double` on kurssin oletusliukuluku.** Saatat törmätä `float`-tyyppiin
  jos selaat esimerkiksi Jypelin lähdekoodia, mutta kurssilla käytetään vain
  `double`-tyyppiä koska se on tarkempi ja helpompi käyttää. 
* **`char` kirjoitetaan heittomerkkien sisään**, `string` lainausmerkein:
  `'a'` on yksi merkki, `"a"` on yhden merkin mittainen merkkijono.
* **`int` ei riitä kaikkeen.** Maailman väkiluku (yli 8 miljardia) ei mahdu
  `int`-muuttujaan. Silloin käytetään `long`-tyyppiä, jonka arvoalue on noin
  ±9,2 · 10<sup>18</sup>.

<details closed><summary><i class="jyu-star"></i> Valinnaista lisätietoa: Miksi kokonaisluvulla on yläraja?</summary>

Tietokoneen muistissa `int`-muuttujalle on varattu 32 bittiä, eli 32 ykköstä
tai nollaa. Niillä voi esittää 2<sup>32</sup> eli noin 4,3 miljardia eri arvoa,
jotka on jaettu tasan negatiivisten ja positiivisten lukujen kesken. Jos
`int`-muuttujan arvo ylittää ylärajan, se "pyörähtää ympäri" negatiiviseksi
ilman virheilmoitusta.

Tämä ei ole pelkkä teoria: vuonna 2014 YouTube [joutui
vaihtamaan](https://www.pbs.org/newshour/arts/gangnam-style-music-video-exceeds-youtubes-view-limit
"PBS News: 'Gangnam Style' proved to be swan song for YouTube's view limit")
katselukertalaskurinsa tyyppiä, kun *Gangnam Style* -videon katselukerrat
lähestyivät lukua 2 147 483 647. Tarkemmin lukujen esittämisestä kerrotaan
liitteessä [Tiedon esittäminen
tietokoneessa](../liitteet/tiedon-esittaminen-tietokoneella.md).

</details>

## Muuttujan nimeäminen

Muuttujan nimi kertoo lukijalle, mitä muuttuja sisältää. Nimen on syytä
kommunikoida riittävällä tarkkuudella se, mitä muuttuja sisältää: 
`int pelaajanPisteet` ei kaipaa selitystä, `int p` kaipaa.

C#-kielen säännöt nimille:

* Nimi koostuu kirjaimista, numeroista ja alaviivasta, eikä se voi alkaa
  numerolla. `pisteet2` kelpaa, `2pisteet` ei.
* Isot ja pienet kirjaimet ovat eri merkkejä: `pisteet` ja `Pisteet` ovat
  kaksi eri muuttujaa. Tämä on tehokas tapa aiheuttaa itselleen hämmennystä.
* C#-kielen *avainsanoja* (engl. *keyword*) ei voi käyttää niminä. Avainsana on
  sana, jolla on kielessä kiinteä merkitys, kuten `int`, `class` tai `public`.

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
double a = 42.5;
double b = 600;
double c = a / b * 100;   // Mikä tämä nyt olikaan?
```

```csharp,ignore
double litrat = 42.5;
double kilometrit = 600;
double kulutus = litrat / kilometrit * 100;
```

## Muuttujan tulostaminen

Muuttujan arvon voi tulostaa sellaisenaan tai osana tekstiä. Tekstin ja
muuttujien yhdistämiseen on kaksi tapaa: 

 * **`+`-merkki**, jolloin tekstit ja muuttujat "lisätään" peräkkäin,
   esimerkiksi `"Hei, " + nimi + "!"`.
 * **interpolointi**, esimeriksi `$"Hei, {nimi}!"`. Tässä aaltosulkujen sisään
   voi kirjoittaa muuttujan nimen tai muun lausekkeen, jonka arvo sijoitetaan
   tekstiin. Huomaa alkuun laitettava `$`-merkki. 
   
Ohessa on ajettava esimerkki.

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
        Console.WriteLine($"Hei, {nimi}! Olet {ika} vuotta.");  // interpolointi
        Console.WriteLine($"Ensi vuonna olet {ika + 1}.");      // lauseke aaltosuluissa
    }
}
```

## Syötteen lukeminen käyttäjältä

Tähän asti muuttujien arvot on kirjoitettu lähdekoodiin. Ohjelmasta tulee
kiinnostavampi, kun arvon antaa käyttäjä. `Console.ReadLine` pysäyttää
ohjelman odottamaan, kunnes käyttäjä kirjoittaa rivin tekstiä ja painaa
Enter-näppäintä. Kirjoitettu rivi tallennetaan muuttujaan.

```csharp,ignore
Console.Write("Mikä on nimesi? ");
string nimi = Console.ReadLine();
Console.WriteLine($"Hei, {nimi}!");
```

Ohjelman ajo näyttää tältä, kun käyttäjä kirjoittaa nimekseen Maija:

```text
Mikä on nimesi? Maija
Hei, Maija!
```

Kokeile tätä Riderissä; selaimen koodilaatikko ei osaa kysyä syötettä.

Kaksi huomiota:

* **`Console.Write` ei vaihda riviä.** Se toimii kuten `Console.WriteLine`,
  mutta jättää kohdistimen tulostetun tekstin perään. Siksi käyttäjän vastaus
  tulee samalle riville kysymyksen kanssa.
* **Syöte on aina merkkijono.** Vaikka käyttäjä kirjoittaisi `20`,
  `Console.ReadLine` antaa tekstin `"20"`, ei lukua. Luvuksi se pitää
  [muuntaa erikseen](./2-operaattorit.md#luvun-lukeminen-käyttäjältä).

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

<details closed><summary><i class="jyu-star"></i> Valinnaista lisätietoa: <code>var</code> ja <code>readonly</code></summary>

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
pitää ensin [muuntaa](./2-operaattorit.md#merkkijonosta-luvuksi).

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
* Määrittely: `tyyppi nimi = arvo;`. Sijoitus `nimi = lauseke;` kopioi arvon,
  ja muuttujan arvo muuttuu vain sijoittamalla.
* Kurssin perustyypit: `int`, `double`, `string`, `bool`, `char`.
* `Console.ReadLine` lukee käyttäjän kirjoittaman rivin merkkijonona.
* Nimeä muuttujat kuvaavasti camelCase-tyylillä. Kiinteät arvot vakioiksi
  `const`-avainsanalla.

## Testaa tietosi

Valitse vastaus, niin näet heti, menikö se oikein ja miksi. Pisteitä ei jaeta,
mutta huomaat, mitä asioita kannattaa vielä kerrata.

<visa>

**Totta vai tarua?**

<vaittama vastaus="tarua">
Muuttujan tyypin voi vaihtaa kesken ohjelman sijoittamalla siihen erityyppisen
arvon.
<perustelu>
**Tarua.** Tyyppi lukitaan määrittelyssä. `int`-muuttujaan ei voi sijoittaa
merkkijonoa, ja kääntäjä ilmoittaa siitä virheellä CS0029.
</perustelu>
</vaittama>

<vaittama vastaus="totta">
Sijoitus `b = a;` kopioi `a`:n arvon, joten `a`:n muuttaminen myöhemmin ei
vaikuta `b`:hen.
<perustelu>
**Totta.** Perustietotyyppien muuttujat ovat toisistaan riippumattomia.
Sijoitus kopioi arvon, ei yhdistä muuttujia.
</perustelu>
</vaittama>

<vaittama vastaus="tarua">
`'a'` ja `"a"` ovat C#:ssa sama asia.
<perustelu>
**Tarua.** `'a'` on `char` eli yksi merkki, `"a"` on `string` eli yhden
merkin pituinen merkkijono. Tyypit ovat eri, eikä toista voi sijoittaa toisen
paikalle.
</perustelu>
</vaittama>

**Monivalinta.** Yksi vaihtoehto on oikein.

<kysymys>
Mikä seuraavista on kelvollinen ja tyyliohjeen mukainen muuttujan nimi?

- [ ] `Kulutus`
- [ ] `polttoaineen_kulutus`
- [x] `kulutus`
- [ ] `100kmKulutus`

<perustelu>
**c.** Muuttujat nimetään camelCase-tyylillä pienellä alkukirjaimella. Iso
alkukirjain on varattu luokille ja aliohjelmille, alaviiva ei kuulu kurssin
tyyliin, ja numerolla alkava nimi ei edes käänny.
</perustelu>
</kysymys>

<kysymys>
Mitä seuraava koodi tulostaa?

```csharp,ignore
int pisteet = 42;
Console.WriteLine($"Pisteitä: {pisteet}");
```

- [ ] `Pisteitä: {pisteet}`
- [x] `Pisteitä: 42`
- [ ] `Pisteitä: pisteet`
- [ ] Käännösvirheen, koska merkkijonossa on aaltosulkuja

<perustelu>
**b.** Dollarimerkki merkkijonon edessä tekee siitä interpoloidun:
aaltosulkujen sisällä oleva lauseke korvataan arvollaan. Ilman `$`-merkkiä
tulostuisi vaihtoehto a.
</perustelu>
</kysymys>

</visa>

## Tehtävät

<!-- Vaiheessa B lisäksi: "Mitä ohjelma tulostaa?" (sijoitusten jäljitys) ja
     "Polttoaineenkulutus". -->

<task>
  <task-title num="2.1">Määrittele muuttujat <points>1 p.</points></task-title>
  <handout>

  {{#include ../tehtavat/2-1-maarittele-muuttujat/handout.md}}

  </handout>
</task>
