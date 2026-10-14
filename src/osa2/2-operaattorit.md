# Operaattorit ja tyyppimuunnokset

*Operaattorit* ovat merkkejä, jotka tekevät jotakin arvoille: laskevat yhteen,
vertaavat, yhdistävät. Tähän asti on [laskettu](../osa1/3-laskutoimitukset.md)
valmiiksi kirjoitetuilla luvuilla. Nyt lasketaan muuttujilla, ja silloin
muuttujan tyyppi ratkaisee, mitä operaattori tekee. Lisäksi opitaan
muuntamaan arvo tyypistä toiseen ja lukemaan luku käyttäjältä.

## Mihin operaattoreita tarvitaan?

* **Pelin pistelaskuri.** "Lisää pisteisiin kymmenen" on niin yleinen
  toimenpide, että sille on oma lyhennysmerkintänsä `pisteet += 10`.
* **Käyttäjän syöte.** Käyttäjän kirjoittama ikä on tekstiä, ja tekstin
  kanssa `+` liittää eikä laske: `"20" + 1` on `"201"`. Ennen laskemista
  teksti on muunnettava luvuksi.
* **Polttoaineen keskikulutus.** Tankatut litrat jaetaan ajetuilla kilometreillä
  ja kerrotaan sadalla. Jos litrat ja kilometrit ovat kokonaislukumuuttujissa,
  jakolasku katkaisee desimaalit, ja tarvitaan tyyppimuunnos, jotta lopputulos
  on oikein.
* **Ehdot.** "Onko pelaajalla tarpeeksi rahaa?" on vertailu `raha >= hinta`,
  jonka tulos on totuusarvo. Näitä tarvitaan, jotta ohjelma voi tehdä päätöksiä,
  esimerkiksi antaa pelaajan ostaa tai ei.

## Laskeminen muuttujilla

Muuttujilla voi laskea aivan kuten
luvuilla. Laskussa muuttuja edustaa arvoaan. 

Useissa alla olevissa esimerkeissä on piilotettu sellaista koodia, joka ei ole
esimerkin kannalta oleellista. Saat koko koodin näkyville klikkaamalla
koodilaatikon yläreunassa olevaa silmän kuvaa.

<!-- muista: myös copyhint,runhint mahdollisia -->
```csharp,eyehint
//-using System;
//-
//-public class Laskuja
//-{
//-    public static void Main()
//-    {
        int a = 10;
        int b = 3;
        Console.WriteLine(a + b);   // 13
        Console.WriteLine(a - b);   // 7
        Console.WriteLine(a * b);   // 30
        Console.WriteLine(a / b);   // 3  (!)
        Console.WriteLine(a % b);   // 1
//-    }
//-}
```

Käytettäessä muuttujia on huomioitava kokonaisluvuilla
jakaminen [samaan
tapaan kuin](../osa1/3-laskutoimitukset.md#kokonaislukujako-ja-jakojäännös) pelkillä luvuilla laskettaessa. Kun jaettava ja jakaja ovat molemmat
tyyppiä `int`, myös tulos on `int` ja desimaaliosa katkaistaan pois. Muuttujilla
virhe on vielä kavalampi kuin luvuilla, koska rivistä `a / b` ei näe tyyppejä.
Ne on katsottava muuttujien määrittelystä. 

Jos ainakin toinen osapuoli on `double`, tulos on `double` ja desimaalit
säilyvät.

```csharp
//-using System;
//-
//-public class Liukuluvut
//-{
//-    public static void Main()
//-    {
        double x = 10;
        int y = 3;
        Console.WriteLine(x / y);        // 3.3333333333333335
        Console.WriteLine(y / 2);        // 1
        Console.WriteLine(y / 2.0);      // 1.5
//-    }
//-}
```

Kokonaisluvun jakaminen nollalla kaataa ohjelman
(`DivideByZeroException`). Liukuluvun jakaminen nollalla ei kaada: jos `x` on
`double`, `x / 0` on `∞` (`Infinity`), mikä on matemaattisesti kyseenalaista
mutta käytännössä kätevää.

### Sama operaattori, eri tyypit

Edellä nähtiin, että `/` tekee eri asian `int`- ja `double`-arvoille. Sama
pätee yleisemminkin: operaattorin merkitys riippuu siitä, minkä tyyppisiä
arvoja sen ympärillä on. Kääntäjä katsoo tyypit ja valitsee niiden perusteella,
mitä operaattori tekee.

Selvin esimerkki on `+`. Lukujen välissä se laskee yhteen, mutta merkkijonojen
välissä se liittää tekstit peräkkäin, kuten
[aiemmassa tervehdysesimerkissä](1-muuttujat-ja-tietotyypit.md#muuttujan-tulostaminen).
Jos vain toinen osapuoli on merkkijono, toinen muutetaan ensin tekstiksi.
Siksi `"Summa: " + a + b` liittää luvut tekstin perään eikä laske niitä yhteen.
Sulkeilla laskujärjestykseen voidaan vaikuttaa, ja interpoloitu merkkijono
välttää koko ongelman. Huomaa edelleen, että `+` "lasketaan
auki" vasemmalta oikealle. Kokeile esimerkkejä alla.

```csharp,editable
int a = 1;
int b = 2;
Console.WriteLine("Summa: " + a + b); 
Console.WriteLine("Summa: " + (a + b)); 
Console.WriteLine(a + b + " onpi summa."); 
Console.WriteLine($"Summa: {a + b}"); 
```

<details closed id="operaattorin-kuormittaminen"><summary><i class="jyu-star"></i> Valinnaista lisätietoa: Operaattorit omille tyypeille</summary>

Operaattorien merkitykset eivät rajoitu kieleen sisäänrakennettuihin
tyyppeihin. Kun ohjelmoija tekee oman tyypin, hän voi samalla määritellä, mitä
`+`, `*`, `==` ja useimmat muut operaattorit tekevät sen arvoille. Tätä
kutsutaan *operaattorin kuormittamiseksi* (engl. *operator overloading*).

Olet jo käyttänyt tyyppiä, jolle näin on tehty. Jypelin `Vector` on lukupari
(x, y), ja Jypelin tekijät ovat määritelleet sille yhteen- ja vähennyslaskun
sekä kertomisen ja jakamisen luvulla:

```csharp,ignore
Vector a = new Vector(100, 0);
Vector b = new Vector(0, 50);
Vector summa = a + b;     // (100, 50): x:t ja y:t lasketaan erikseen yhteen
Vector tupla = a * 2;     // (200, 0)
```

Pelin fysiikka, jossa pallon paikkaan lisätään sen nopeus jokaisella
ruudunpäivityksellä, on juuri tällaista vektorien yhteenlaskua.

Kuormitettu operaattori on pohjimmiltaan aliohjelma, jonka nimenä on
operaattorin merkki. Jypelin lähdekoodissa vektorien yhteenlasku näyttää
suunnilleen tältä:

```csharp,ignore
public static Vector operator +(Vector a, Vector b)
{
    return new Vector(a.X + b.X, a.Y + b.Y);
}
```

Kun kääntäjä näkee lausekkeen `a + b` ja molemmat ovat vektoreita, se kutsuu
tätä aliohjelmaa. Idea on sama kuin
[funktion kuormittamisessa](./4-funktiot.md#kuormittaminen):
samalla nimellä on monta versiota, ja kääntäjä valitsee niistä oikean tyyppien
perusteella.

Rajansa silti on. Valmiiden tyyppien operaattoreita ei voi muuttaa, joten
`1 + 1` on aina `2`. Kaikkia operaattoreita ei myöskään voi kuormittaa:
esimerkiksi sijoitusta `=` ei voi. Omia operaattoreita ei tällä kurssilla
kirjoiteta, mutta valmiita tulee vastaan esimerkiksi Jypelin vektoreilla
laskettaessa.

</details>

## Arvon muuttaminen toiseen tyyppiin

Laskuissa törmää jatkuvasti tilanteeseen, jossa arvo on väärän tyyppinen:
käyttäjän kirjoittama teksti pitäisi muuttaa luvuksi, kokonaisluku jakaa
tarkasti tai liukuluku tallentaa kokonaislukuna. Arvon muuttamista tyypistä toiseen sanotaan tyyppimuunnokseksi (engl. type conversion). C#:ssa se tapahtuu neljällä tavalla:

* Merkkijono muunnetaan luvuksi lukutyypin omalla `Parse`-aliohjelmalla,
  esimerkiksi `int.Parse()`. 
* Luvun (ja minkä tahansa muunkin arvon) voi muuntaa merkkijonoksi `.ToString()`-aliohjelmalla.
* Lukutyyppien välillä osa muunnoksista tapahtuu automaattisesti ilman erillistä
  toimintoa.
* Osa lukutyyppien välisistä muunnoksista on pyydettävä erikseen. Silloin
  puhutaan *eksplisiittisestä* muunnoksesta.

### Merkkijono luvuksi ja toisin päin

Merkkijono ja luku ovat eri asioita, vaikka ne näyttäisivät samalta.
Esimerkiksi `"42" + 1` on `"421"`, ei `43`. Merkkijonon kanssa `+`
[liittää eikä laske](#sama-operaattori-eri-tyypit).

Merkkijonon muuntamiseen luvuksi on jokaiselle lukutyypille oma
`Parse`-aliohjelma. Kokonaisluvuksi (`int`) muunnetaan `int.Parse`-aliohjelmalla.
Liukuluvuksi (`double`) muunnetaan `double.Parse`-aliohjelmalla.

Toiseen suuntaan muuntamiseen on kaksi tapaa. Luvusta saa merkkijonon
kirjoittamalla luvun perään `.ToString()`. Saman tuloksen saa myös
interpoloimalla: `$"{luku}"`.

```csharp
//-using System;
//-
//-public class Muunnokset
//-{
//-    public static void Main()
//-    {
        // Merkkijono luvuksi
        string ikaTekstina = "20";
        int ika = int.Parse(ikaTekstina);
        Console.WriteLine(ika + 1);            // 21

        // Luku merkkijonoksi
        int vuosi = 2026;
        string vuosiTekstina = vuosi.ToString();
        string toinenTapa = $"{vuosi}";
        Console.WriteLine(vuosiTekstina + 1);  // 20261
        Console.WriteLine(toinenTapa + 1);     // 20261
//-    }
//-}
```

### Luvun lukeminen käyttäjältä

Muunnosta tarvitaan heti, kun ohjelma kysyy käyttäjältä luvun. Kuten
[syötteen lukemisessa](./1-muuttujat-ja-tietotyypit.md#syötteen-lukeminen-käyttäjältä)
nähtiin, `Console.ReadLine` antaa käyttäjän kirjoittaman rivin aina
merkkijonona. Rivi on siis muunnettava luvuksi. Aliohjelma valitaan sen
mukaan, minkä tyyppiseen muuttujaan luku tallennetaan. Kokonaisluku
muunnetaan `int.Parse`-aliohjelmalla. Liukuluku muunnetaan
`double.Parse`-aliohjelmalla.

```csharp,ignore
Console.Write("Anna ikäsi: ");
string syote = Console.ReadLine();      // esim. "20"
int ika = int.Parse(syote);             // 20
Console.WriteLine($"Ensi vuonna olet {ika + 1}.");
```

Lukeminen ja muuntaminen kirjoitetaan tavallisesti yhdelle riville, jolloin
välimuuttujaa ei tarvita:

```csharp,ignore
Console.Write("Anna ikäsi: ");
int ika = int.Parse(Console.ReadLine());

Console.Write("Anna matka kilometreinä: ");
double matka = double.Parse(Console.ReadLine());
```

Kokeile tätä Riderissä; selaimen koodilaatikko ei osaa kysyä syötettä.

Jos käyttäjä kirjoittaa jotakin, mikä ei ole luku (vaikkapa `kaksikymmentä`),
`int.Parse` ei pysty muuntamaan tekstiä ja ohjelma kaatuu virheeseen
`FormatException`. Toistaiseksi luotamme siihen, että käyttäjä kirjoittaa
luvun. Syötteen tarkistaminen opitaan [merkkijonojen](../osa4/2-merkkijonot.md)
yhteydessä, ja samalla selviää, miksi desimaaliluku on joillakin koneilla
kirjoitettava pilkulla ja toisilla pisteellä.

### Automaattinen muunnos

`int` muuttuu `double`-tyypiksi automaattisesti, koska mitään ei voi kadota:
jokainen `int`-tyyppinen arvo voidaan esittää myös liukulukuna. Tällaista
automaattista muunnosta sanotaan *implisiittiseksi* (engl. *implicit
conversion*). Sama tapahtui jo edellä: `double x = 10;` tallentaa muuttujaan
liukuluvun, ja lausekkeessa `y / 2.0` kokonaisluku `y` muuttuu liukuluvuksi
ennen jakolaskua.

```csharp
//-using System;
//-
//-public class Automaattinen
//-{
//-    public static void Main()
//-    {
        int kokonaisia = 7;
        double liukuluku = kokonaisia;     // int muuttuu double-tyypiksi
        Console.WriteLine(liukuluku / 2);  // 3.5
//-    }
//-}
```

Automaattinen muunnos tapahtuu vain silloin, kun tietoa ei voi kadota.
Kurssin perustyypeistä näin on kahdessa tilanteessa:

* lukutyypistä laajempaan lukutyyppiin, esimerkiksi `int` → `long` tai
  `int` → `double`
* harvemmin tarvittuna merkistä lukuun: `int koodi = 'A';` tallentaa
  muuttujaan merkin numerokoodin `65`

`string`- ja `bool`-tyyppien kanssa automaattisia muunnoksia ei ole. Esimerkiksi
`string s = 5;` ei käänny. Lauseke `"Summa: " + 5` toimii, mutta siinä ei ole
kyse automaattisesta muunnoksesta, vaan `+`-operaattori itse
[tekee luvusta tekstiä](#sama-operaattori-eri-tyypit) ja liittää sen perään.

### Eksplisiittinen muunnos

Toiseen suuntaan muunnos ei tapahdu automaattisesti. Kun `double`
muutetaan `int`-tyypiksi, desimaalit katoavat, eli tietoa voi hävitä. Siksi
kääntäjä ei tee muunnosta omin päin, vaan vaatii ohjelmoijaa pyytämään sitä
erikseen. Tällaista muunnosta sanotaan *eksplisiittiseksi muunnokseksi*
(engl. *explicit conversion* tai *cast*). Kirjoittamalla muunnoksen näkyviin
ohjelmoija ilmaisee tietävänsä, että tietoa voi kadota.

Eksplisiittinen muunnos tehdään kirjoittamalla kohdetyyppi sulkeisiin
muunnettavan lausekkeen eteen. 

```csharp
//-using System;
//-
//-public class Katkaisu
//-{
//-    public static void Main()
//-    {
        double hinta = 3.7;
        int katkaistu = (int)hinta;                    // 3
        Console.WriteLine($"{katkaistu}");
//-    }
//-}
```

Ilman muunnosta ohjelma ei käänny: rivi `int katkaistu = hinta;` antaa
virheilmoituksen.

Huomaa, että muunnos *katkaisee* desimaalit eikä pyöristä, joten `(int)3.7` on `3`.
Pyöristämiseen on
[`Math`-luokan](../osa1/3-laskutoimitukset.md#valmiita-laskutoimituksia-math)
`Math.Round`. Sen tulos on edelleen `double`, joten se muunnetaan vielä
`int`-tyypiksi.

```csharp
//-using System;
//-
//-public class Pyoristys
//-{
//-    public static void Main()
//-    {
        double hinta = 3.7;
        int pyoristetty = (int)Math.Round(hinta);      // 4
        Console.WriteLine($"{pyoristetty}");
//-    }
//-}
```

Mainittakoon, että `Math.Round` on siitä mielenkiintoinen, että se pyöristää
puolikkaat oletuksena lähimpään *parilliseen* lukuun (ns. "pankkiirin
pyöristys"). Koulussa opitun pyöristyksen saa kirjoittamalla `Math.Round(2.5,
MidpointRounding.AwayFromZero)`. Tämä on yksi niistä asioista, jotka on hyvä
tietää, jotta ei epäile omaa järkeään. Yksityiskohtia on liitteessä [Tiedon
esittäminen tietokoneessa](../liitteet/tiedon-esittaminen-tietokoneella.md) ja
[`Math.Round`-dokumentaatiossa](https://learn.microsoft.com/en-us/dotnet/api/system.math.round?view=net-10.0)).

Eksplisiittinen muunnos on mahdollinen vain harvojen tyyppien välillä, nimittäin
niiden, joille kieleen on määritelty muunnos. Kurssin perustyypeistä näitä
ovat:

* lukutyypit (`int`, `long`, `double` ja muut) keskenään
* kokonaisluku merkiksi: numerokoodi muuttuu sitä vastaavaksi merkiksi
  (merkistä kokonaisluvuksi muunnos tapahtuu automaattisesti)

Muiden perustyyppien välillä eksplisiittistä muunnosta ei ole. Esimerkiksi
merkkijonoa ei voi muuntaa luvuksi eikä totuusarvoa luvuksi sulkeisiin
kirjoitetulla tyypillä, vaan kääntäjä hylkää tällaiset yritykset.

```csharp,ignore
char merkki = (char)66;         // 'B'
int koodi = 'A';                // 65, muunnos on automaattinen
double d = (double)"1234.5";    // käännösvirhe
string s = (string)42;          // käännösvirhe
int i = (int)true;              // käännösvirhe
```

Siksi tekstin ja luvun välinen muunnos tehdään
[toisella tavalla](#merkkijono-luvuksi-ja-toisin-päin).

### Tarkka jakolasku kokonaislukumuuttujilla

Joskus eksplisiittinen muunnos on syytä kirjoittaa, vaikka muunnos
tapahtuisi automaattisestikin. Siitä on hyötyä, kun jaettava ja jakaja ovat
molemmat `int`-muuttujissa: kun toinen niistä muunnetaan `double`-tyypiksi,
toinenkin muuttuu implisiittisesti, ja jakolasku tehdään liukulukuina.

```csharp
//-using System;
//-
//-public class Keskiarvo
//-{
//-    public static void Main()
//-    {
        int summa = 17;
        int maara = 4;
        Console.WriteLine(summa / maara);            // 4
        Console.WriteLine((double)summa / maara);    // 4.25
        Console.WriteLine((double)(summa / maara));  // 4  -- liian myöhään!
//-    }
//-}
```

Viimeinen rivi on tyypillinen sudenkuoppa: jakolasku on ehditty tehdä
kokonaisluvuilla ennen kuin tulos muunnetaan.

## Vertailuoperaattorit

Vertailuoperaattoreita käytetään arvojen vertaamiseen. Ne tuottavat
totuusarvon (`true` tai `false`) perustuen vertailun tulokseen.

   - `==` on yhtä suuri kuin
   - `!=` ei ole yhtä suuri kuin
   - `<` pienempi kuin
   - `>` suurempi kuin
   - `<=` pienempi tai yhtä suuri kuin
   - `>=` suurempi tai yhtä suuri kuin

```csharp
using System;

public class Vertailuja
{
    public static void Main()
    {
        int x = 5;
        int y = 10;
        bool onkoYhtasuuri = x == y;  // false
        bool onkoEri = x != y;        // true
        bool onkoPienempi = x < y;    // true
        bool onkoSuurempi = x > y;    // false
        Console.WriteLine($"{onkoYhtasuuri} {onkoEri} {onkoPienempi} {onkoSuurempi}");
    }
}
```

> [!VAROITUS]
> Yhtäsuuruutta verrataan kahdella yhtäsuuruusmerkillä `==`. Yksi merkki `=`
> on sijoitus. Kääntäjä huomaa sekaannuksen useimmiten, mutta ei aina.

Kahden liukuluvun vertaaminen `==`-operaattorilla on huono ajatus, koska
[liukuluvut ovat likiarvoja](../osa1/3-laskutoimitukset.md#liukuluvuilla-laskeminen):
`0.1 + 0.2 == 0.3` on C#:ssa `false`. Liukulukuja kannattaa verrata
tarkistamalla, onko niiden erotus riittävän pieni. Lisää aiheesta kerrotaan
liitteessä
[Tiedon esittäminen tietokoneessa](../liitteet/tiedon-esittaminen-tietokoneella.md).

## Loogiset operaattorit

Loogisia operaattoreita käytetään totuusarvojen yhdistämiseen.

   - `&&` JA: tosi, jos *kumpikin* arvo on tosi
   - `||` TAI: tosi, jos *ainakin toinen* arvo on tosi
   - `!` EI: kääntää totuusarvon (tosi → epätosi, epätosi → tosi)

```csharp
using System;

public class Loogiset
{
    public static void Main()
    {
        int ika = 20;
        bool onkoOpiskelija = true;

        bool taysiIkainen = ika >= 18;                        // true
        bool saaAlennuksen = onkoOpiskelija || ika >= 65;     // true
        bool saaAjaaAutoa = taysiIkainen && ika < 100;        // true
        bool eiOpiskelija = !onkoOpiskelija;                  // false

        Console.WriteLine($"{taysiIkainen} {saaAlennuksen} {saaAjaaAutoa} {eiOpiskelija}");
    }
}
```

Loogisten operaattoreiden totuustaulut ja käyttö ehdoissa käsitellään
tarkemmin [ehtolauseiden](../osa3/1-ehtolauseet.md) yhteydessä.

## Sijoitusoperaattorit

Sijoitusoperaattoreilla asetetaan muuttujille arvoja. Koska "lisää muuttujaan
jotakin" on niin yleinen toimenpide, sille on lyhennysmerkinnät.

 - `=`  sijoitus
 - `+=` lisää ja sijoita
 - `-=` vähennä ja sijoita
 - `*=` kerro ja sijoita
 - `/=` jaa ja sijoita
 - `%=` jakojäännös ja sijoita
 - `++` lisää yhdellä
 - `--` vähennä yhdellä

```csharp
using System;

public class Sijoitukset
{
    public static void Main()
    {
        int luku = 10;     // luku on nyt 10
        luku += 5;         // luku on nyt 15 (sama kuin luku = luku + 5)
        luku -= 3;         // luku on nyt 12
        luku *= 2;         // luku on nyt 24
        luku /= 4;         // luku on nyt 6
        luku %= 4;         // luku on nyt 2
        luku++;            // luku on nyt 3
        luku--;            // luku on nyt 2
        Console.WriteLine(luku);
    }
}
```

Lisäys- ja vähennysoperaattorit `++` ja `--` voidaan kirjoittaa joko ennen tai
jälkeen muuttujan nimen. Jos operaattori on ennen muuttujaa (esim. `++x`), sitä
kutsutaan etuliitteeksi (engl. *prefix*), ja jos se on muuttujan jälkeen (esim.
`x++`), sitä kutsutaan jälkiliitteeksi (engl. *postfix*). Omana lauseenaan
niillä ei ole eroa. Ero tulee esiin, kun operaattoria käytetään osana suurempaa
lauseketta: jälkiliite antaa vanhan arvon, etuliite uuden.

```csharp
using System;

public class PlusPlus
{
    public static void Main()
    {
        int luku = 3;
        Console.WriteLine(luku++); // tulostaa 3, sitten luku on 4
        Console.WriteLine(++luku); // luku on ensin 5, sitten tulostaa 5
        Console.WriteLine(luku);   // 5
    }
}
```

Tällä kurssilla `++` ja `--` kirjoitetaan omalle rivilleen, jolloin eroa ei
tarvitse muistaa.

## Yhteenveto

* Laskussa muuttuja edustaa arvoaan; kahden `int`-arvon jako on
  kokonaislukujako.
* Operaattorin merkitys riippuu tyypeistä: `+` laskee luvut yhteen mutta
  liittää merkkijonot peräkkäin.
* `(double)x` ja `(int)x` muuntavat tyyppiä; `int.Parse` muuntaa merkkijonon
  luvuksi.
* Luku luetaan käyttäjältä kaavalla `int.Parse(Console.ReadLine())`.
* Vertailut tuottavat `bool`-arvon; `&&`, `||` ja `!` yhdistävät niitä.
* `+=` ja `++` lyhentävät tavallisimmat sijoitukset.

## Testaa tietosi

Valitse vastaus, niin näet heti, menikö se oikein ja miksi. Pisteitä ei jaeta,
mutta huomaat, mitä asioita kannattaa vielä kerrata.

<visa>

**Totta vai tarua?**

<vaittama vastaus="totta">
Lause `luku += 5;` tekee saman kuin `luku = luku + 5;`.
<perustelu>
**Totta.** `+=` on lyhennysmerkintä: se laskee muuttujan nykyiseen arvoon
oikean puolen ja sijoittaa tuloksen takaisin samaan muuttujaan.
</perustelu>
</vaittama>

<vaittama vastaus="tarua">
Jos käyttäjä kirjoittaa `20`, `Console.ReadLine()` palauttaa kokonaisluvun 20.
<perustelu>
**Tarua.** `Console.ReadLine` palauttaa aina merkkijonon, tässä `"20"`. Luvuksi
se muuttuu vasta `int.Parse`-kutsulla.
</perustelu>
</vaittama>

<vaittama vastaus="tarua">
`Math.Round(2.5)` antaa tuloksen 3.
<perustelu>
**Tarua**, vaikka koulussa opetettiin toisin. C# pyöristää tasan puolikkaat
lähimpään parilliseen, joten tulos on 2. `Math.Round(3.5)` on puolestaan 4.
Kokeile vaikka.
</perustelu>
</vaittama>

**Monivalinta.** Yksi vaihtoehto on oikein.

<kysymys>
Mitä lauseke `(double)(7 / 2)` tuottaa?

- [ ] `3.5`
- [x] `3.0`
- [ ] `3`
- [ ] Käännösvirheen

<perustelu>
**b.** Sulkujen sisällä oleva jako lasketaan ensin kokonaislukuina, joten
tulos on 3, ja vasta se muunnetaan liukuluvuksi 3.0. Jos haluat 3.5, muunna
ennen jakoa: `(double)7 / 2`.
</perustelu>
</kysymys>

<kysymys>
Muuttujassa `a` on 5. Mikä on lausekkeen `a == 5 && a != 5` arvo?

- [ ] `true`
- [x] `false`
- [ ] `5`
- [ ] Käännösvirhe

<perustelu>
**b.** `a == 5` on tosi ja `a != 5` epätosi, ja `&&` vaatii molemmat tosiksi.
Lauseke on itse asiassa epätosi `a`:n arvosta riippumatta, ja Rider saattaa
jopa huomauttaa siitä.
</perustelu>
</kysymys>

</visa>

## Tehtävät

<!-- Vaiheessa B: "Polttoaineenkulutus" (syöte ja tyyppimuunnos), "Keskiarvo"
     (cast ennen jakoa), "Ikä ensi vuonna" (int.Parse(Console.ReadLine())).
     Literaaleilla laskevat tehtävät ovat aliosassa 1.3. -->
