# ➕ Operaattorit ja laskutoimitukset

*Operaattorit* ovat merkkejä, jotka tekevät jotakin arvoille: laskevat yhteen,
vertaavat, yhdistävät. Tässä luvussa opitaan laskemaan C#:lla ja samalla
huomataan, että tietokone laskee hieman eri tavalla kuin peruskoulussa
opetettiin. Se ei ole rikki. Se vain noudattaa sääntöjä pilkuntarkasti.

## Mihin laskentaa tarvitaan?

* **Ostoskorin loppusumma.** Tuotteiden hinnat lasketaan yhteen, alennus
  vähennetään prosentteina ja arvonlisävero lisätään. Kolme operaattoria ja
  yksi sulkupari.
* **Painoindeksi.** Paino jaetaan pituuden neliöllä. Jos jakolaskun tekee
  kokonaisluvuilla, tulos on aina 0, ja se on tämän luvun tärkein opetus.
* **Pelin fysiikka.** Jokaisella ruudunpäivityksellä pallon paikkaan lisätään
  sen nopeus, ja nopeuteen lisätään painovoima. Peli on käytännössä
  yhteenlaskua kuusikymmentä kertaa sekunnissa.
* **Ehdot.** "Onko pelaajalla tarpeeksi rahaa?" on vertailu `raha >= hinta`,
  jonka tulos on totuusarvo. Seuraavan luvun ehtolauseet rakentuvat näiden
  vertailujen varaan.

## Aritmeettiset operaattorit

Aritmeettisia operaattoreita käytetään matemaattisten laskutoimitusten
suorittamiseen.

   - `+` yhteenlasku
   - `-` vähennyslasku
   - `*` kertolasku
   - `/` jakolasku
   - `%` jakojäännös

```csharp
using System;

public class Laskuja
{
    public static void Main()
    {
        int a = 10;
        int b = 3;
        Console.WriteLine(a + b);   // 13
        Console.WriteLine(a - b);   // 7
        Console.WriteLine(a * b);   // 30
        Console.WriteLine(a / b);   // 3  (!)
        Console.WriteLine(a % b);   // 1
    }
}
```

Neljäs tulostusrivi ansaitsee huomion: `10 / 3` on `3`, ei `3.333…`.

### Kokonaislukujako ja jakojäännös

Kun jaettava ja jakaja ovat molemmat kokonaislukuja (`int`), myös tulos on
kokonaisluku: desimaaliosa katkaistaan pois. `7 / 2` on `3`, ja `1 / 2` on `0`.
Tämä on yleisin aloittelijan laskuvirhe, ja se on kavala, koska kääntäjä ei
huomauta mitään. Ohjelma vain laskee väärin.

Katkaistu osa ei kuitenkaan katoa: *jakojäännösoperaattori* `%` antaa sen,
mitä jakolaskusta jää yli. `7 % 2` on `1`, koska 7 = 2 · 3 + 1. Jakojäännös on
yllättävän hyödyllinen:

```csharp
using System;

public class Jakojaannos
{
    public static void Main()
    {
        int sekunnit = 754;
        Console.WriteLine($"{sekunnit / 60} min {sekunnit % 60} s"); // 12 min 34 s

        int luku = 17;
        Console.WriteLine(luku % 2);   // 1 -> luku on pariton (parillisella tulos on 0)
    }
}
```

### Liukulukulaskenta

Jos ainakin toinen laskun osapuolista on liukuluku (`double`), tulos on
liukuluku ja desimaalit säilyvät.

```csharp
using System;

public class Liukuluvut
{
    public static void Main()
    {
        double x = 10;
        int y = 3;
        Console.WriteLine(x / y);        // 3.3333333333333335
        Console.WriteLine(10.0 / 3);     // 3.3333333333333335
        Console.WriteLine(10 / 3);       // 3
        Console.WriteLine(10 / 3.0);     // 3.3333333333333335
    }
}
```

Tuloksen viimeinen numero `5` ei ole kirjoitusvirhe. Liukuluvut ovat
likiarvoja: tietokone esittää luvut kaksijärjestelmässä, jossa monia
desimaalilukuja ei voi esittää tarkasti, aivan kuten 1/3:a ei voi kirjoittaa
tarkasti kymmenjärjestelmässä. Tavallisessa laskennassa tällä ei ole väliä,
mutta kahden liukuluvun vertaaminen `==`-operaattorilla on huono ajatus:
`0.1 + 0.2 == 0.3` on C#:ssa `false`. Lisää aiheesta kerrotaan liitteessä
[Tiedon esittäminen tietokoneessa](../liitteet/tiedon-esittaminen-tietokoneella.md).

Kokonaisluvun jakaminen nollalla kaataa ohjelman
(`DivideByZeroException`). Liukuluvun jakaminen nollalla ei kaada: `1.0 / 0`
on `∞` (`Infinity`), mikä on matemaattisesti kyseenalaista mutta käytännössä
kätevää.

## Laskujärjestys

Operaattoreilla on sama laskujärjestys kuin matematiikassa: kerto- ja
jakolasku sekä jakojäännös lasketaan ennen yhteen- ja vähennyslaskua, ja
samanarvoiset operaattorit vasemmalta oikealle. Sulkeilla järjestystä voi
muuttaa.

```csharp
using System;

public class Laskujarjestys
{
    public static void Main()
    {
        Console.WriteLine(2 + 3 * 4);     // 14
        Console.WriteLine((2 + 3) * 4);   // 20
        Console.WriteLine(10 - 4 - 3);    // 3  (vasemmalta oikealle: (10 - 4) - 3)
        Console.WriteLine(7 + 10 / 3);    // 10 (10 / 3 on 3)
    }
}
```

Kun et ole varma järjestyksestä, käytä sulkeita. Ne eivät maksa mitään, ja
lukija kiittää.

## Tyyppimuunnokset

Laskuissa törmää jatkuvasti tilanteeseen, jossa arvo on väärän tyyppinen:
kokonaisluku pitäisi jakaa tarkasti, liukuluku tallentaa kokonaislukuna tai
käyttäjän kirjoittama teksti muuttaa luvuksi.

### Kokonaisluvusta liukuluvuksi

`int` muuttuu `double`-tyypiksi automaattisesti, koska mitään ei voi kadota.
Siksi `10 / 3.0` lasketaan liukulukuina. Jos molemmat luvut ovat muuttujissa,
toinen niistä *muunnetaan* kirjoittamalla kohdetyyppi sulkeisiin sen eteen.
Tätä sanotaan *tyyppimuunnokseksi* (engl. *cast*).

```csharp
using System;

public class Keskiarvo
{
    public static void Main()
    {
        int summa = 17;
        int maara = 4;
        Console.WriteLine(summa / maara);            // 4
        Console.WriteLine((double)summa / maara);    // 4.25
        Console.WriteLine((double)(summa / maara));  // 4  -- liian myöhään!
    }
}
```

Viimeinen rivi on tyypillinen sudenkuoppa: jakolasku on ehditty tehdä
kokonaisluvuilla ennen kuin tulos muunnetaan.

### Liukuluvusta kokonaisluvuksi

Toiseen suuntaan muunnos ei tapahdu automaattisesti, koska desimaalit
katoavat. Muunnos on kirjoitettava näkyviin, ja se *katkaisee* desimaalit, ei
pyöristä. Pyöristämiseen on `Math.Round`.

```csharp
using System;

public class Katkaisu
{
    public static void Main()
    {
        double hinta = 3.7;
        int katkaistu = (int)hinta;                    // 3
        int pyoristetty = (int)Math.Round(hinta);      // 4
        Console.WriteLine($"{katkaistu} {pyoristetty}");
    }
}
```

<details closed><summary><i class="bi bi-stars jyu-gold"></i> Valinnaista lisätietoa: Pankkiirin pyöristys</summary>

`Math.Round(2.5)` on `2`, ja `Math.Round(3.5)` on `4`. C# pyöristää puolikkaat
oletuksena lähimpään *parilliseen* lukuun ("pankkiirin pyöristys"), jotta
suuressa joukossa pyöristyksiä virheet kumoavat toisensa. Koulussa opitun
pyöristyksen saa kirjoittamalla `Math.Round(2.5, MidpointRounding.AwayFromZero)`.
Tämä on yksi niistä asioista, jotka on hyvä tietää, jotta ei epäile omaa
järkeään.

</details>

### Merkkijonosta luvuksi

Käyttäjän kirjoittama syöte on aina merkkijono, vaikka se näyttäisi luvulta.
`"42"` ja `42` ovat eri asioita: `"42" + 1` on `"421"`. Merkkijono muunnetaan
luvuksi `int.Parse`- tai `double.Parse`-aliohjelmalla.

```csharp,ignore
Console.Write("Anna ikäsi: ");
string syote = Console.ReadLine();      // esim. "20"
int ika = int.Parse(syote);             // 20
Console.WriteLine($"Ensi vuonna olet {ika + 1}.");
```

`Console.ReadLine` lukee käyttäjän kirjoittaman rivin. Kokeile tätä Riderissä;
selaimen koodilaatikko ei osaa kysyä syötettä. Jos käyttäjä kirjoittaa jotakin,
mikä ei ole luku, `int.Parse` heittää poikkeuksen ja ohjelma kaatuu. Tähän
palataan luvuissa [Merkkijonot](../osa4/5-merkkijonot.md) ja
[Poikkeukset](../osa7/2-poikkeukset.md).

Toiseen suuntaan muunnos on helppo: interpoloitu merkkijono `$"{ika}"` tai
`ika.ToString()` tekee luvusta tekstin.

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
tarkemmin luvussa [Ehtolauseet](./5-ehtolauseet.md).

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

## Valmiita laskutoimituksia: `Math`

Neliöjuuri, potenssi, itseisarvo ja muut tavalliset funktiot löytyvät
`Math`-luokasta. Muutama esimerkki:

```csharp
using System;

public class MathEsimerkit
{
    public static void Main()
    {
        Console.WriteLine(Math.Sqrt(16));      // 4
        Console.WriteLine(Math.Pow(2, 10));    // 1024
        Console.WriteLine(Math.Abs(-7));       // 7
        Console.WriteLine(Math.Max(3, 8));     // 8
        Console.WriteLine(Math.PI);            // 3.141592653589793
    }
}
```

`Math.Sqrt` ja `Math.Pow` palauttavat aina `double`-arvon, vaikka argumentit
olisivat kokonaislukuja.

## Yhteenveto

* `+ - * / %` laskevat; kahden `int`-arvon jako on kokonaislukujako.
* Laskujärjestys on sama kuin matematiikassa; sulkeet ratkaisevat epäselvät
  tapaukset.
* `(double)x` ja `(int)x` muuntavat tyyppiä; `int.Parse` muuntaa merkkijonon
  luvuksi.
* Vertailut tuottavat `bool`-arvon; `&&`, `||` ja `!` yhdistävät niitä.
* `+=` ja `++` lyhentävät tavallisimmat sijoitukset.

## 🤔 Testaa tietosi

Päätä vastaus ensin ja avaa se vasta sitten. Pisteitä ei jaeta, mutta hämärät
kohdat paljastuvat.

<visa>

**Totta vai tarua?**

<details data-vastaus="tarua"><summary>1. Lauseke <code>7 / 2</code> antaa tuloksen 3.5.</summary>

**Tarua.** Kun molemmat luvut ovat kokonaislukuja, C# tekee kokonaislukujaon
ja tulos on 3. Jos haluat 3.5, tee toisesta luvusta liukuluku: `7 / 2.0`.

</details>

<details data-vastaus="totta"><summary>2. <code>17 % 5</code> on 2.</summary>

**Totta.** Jakojäännös kertoo, mitä jää yli: 17 = 3 · 5 + 2. Samalla
operaattorilla selviää esimerkiksi parillisuus: `luku % 2 == 0`.

</details>

<details data-vastaus="tarua"><summary>3. <code>Math.Round(2.5)</code> antaa tuloksen 3.</summary>

**Tarua**, vaikka koulussa opetettiin toisin. C# pyöristää tasan puolikkaat
lähimpään parilliseen, joten tulos on 2. `Math.Round(3.5)` on puolestaan 4.
Kokeile vaikka.

</details>

**Monivalinta.** Yksi vaihtoehto on oikein.

**4.** Mitä lauseke `(double)(7 / 2)` tuottaa?

a) `3.5`\
b) `3.0`\
c) `3`\
d) Käännösvirheen

<details data-vastaus="b"><summary>Näytä vastaus</summary>

**b.** Sulkujen sisällä oleva jako lasketaan ensin kokonaislukuina, joten
tulos on 3, ja vasta se muunnetaan liukuluvuksi 3.0. Jos haluat 3.5, muunna
ennen jakoa: `(double)7 / 2`.

</details>

**5.** Muuttujassa `a` on 5. Mikä on lausekkeen `a == 5 && a != 5` arvo?

a) `true`\
b) `false`\
c) `5`\
d) Käännösvirhe

<details data-vastaus="b"><summary>Näytä vastaus</summary>

**b.** `a == 5` on tosi ja `a != 5` epätosi, ja `&&` vaatii molemmat tosiksi.
Lauseke on itse asiassa epätosi `a`:n arvosta riippumatta, ja Rider saattaa
jopa huomauttaa siitä.

</details>

</visa>

## Tehtävät

<!-- Vaiheessa B: "Mitä lauseke tuottaa?" (kokonaislukujako, laskujärjestys),
     "Sekunnit tunneiksi", "Painoindeksi" (tyyppimuunnos), "Lämpötilan muunnos". -->
