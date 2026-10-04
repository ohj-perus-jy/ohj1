# Laskutoimitukset

[Ensimmäinen ohjelmamme](./2-ensimmainen-ohjelma.md) tulosti valmiiksi
kirjoitettua tekstiä. Nyt ohjelma pannaan laskemaan: tulostettavaksi
annetaan lasku, ja tietokone laskee sen. Samalla huomataan, että tietokone
laskee hieman eri tavalla kuin peruskoulussa opetettiin. Se ei ole rikki. Se
vain noudattaa sääntöjä pilkuntarkasti.

## Mihin laskentaa tarvitaan?

Kaikki, mitä ruudulla tapahtuu, pelihahmon sijainnista ostoskorin
loppusummaan, syntyy pohjimmiltaan laskutoimituksista. Siksi laskeminen on
ensimmäisiä asioita, joita tietokoneelle opetetaan. Muutama esimerkki:

* **Ostoskorin loppusumma.** Tuotteiden hinnat lasketaan yhteen, alennus
  vähennetään prosentteina ja arvonlisävero lisätään. Kolme laskumerkkiä ja
  yksi sulkupari.
* **Keskiarvo.** Viikon lämpötilojen summa jaetaan päivien määrällä. Jos
  jakolaskun tekee kokonaisluvuilla, desimaalit katoavat, ja juuri se on
  laskutoimitusten tärkein opetus.
* **Pelin fysiikka.** Jokaisella ruudunpäivityksellä pallon paikkaan lisätään
  sen nopeus, ja nopeuteen lisätään painovoima. Peli on käytännössä
  yhteenlaskua kuusikymmentä kertaa sekunnissa.

## Aritmeettiset operaattorit

Laskumerkkejä kutsutaan ohjelmoinnissa *operaattoreiksi*. Aritmeettisilla
operaattoreilla tehdään matemaattisia laskutoimituksia.

   - `+` yhteenlasku
   - `-` vähennyslasku
   - `*` kertolasku
   - `/` jakolasku
   - `%` jakojäännös

Kun `Console.WriteLine`-kutsun sulkeisiin kirjoitetaan lasku ilman
lainausmerkkejä, ohjelma laskee sen ja tulostaa tuloksen.

```csharp,editable
using System;

public class Laskuja
{
    public static void Main()
    {
        Console.WriteLine(10 + 3);   // 13
        Console.WriteLine(10 - 3);   // 7
        Console.WriteLine(10 * 3);   // 30
        Console.WriteLine(10 / 3);   // 3  (!)
        Console.WriteLine(10 % 3);   // 1
    }
}
```

Esimerkissä on kaksi uutta asiaa, jotka eivät liity laskemiseen:

* Rivi `using System;` ohjelman alussa lyhentää kirjoittamista: sen ansiosta
  `System.Console.WriteLine` voidaan kirjoittaa muodossa `Console.WriteLine`.
  Tarkemmin tästä kerrotaan
  [ohjelman rakenteen](../osa2/5-ohjelman-rakenne.md) yhteydessä.
* Merkkien `//` jälkeinen teksti on *kommentti*. Kääntäjä ohittaa sen, joten
  kommentti on tarkoitettu vain ihmiselle. Tämän kirjan esimerkeissä kommentti
  kertoo usein, mitä rivi tulostaa.

Neljäs tulostusrivi ansaitsee huomion: `10 / 3` on `3`, ei `3.333…`.

## Kokonaislukujako ja jakojäännös

C# erottaa toisistaan *kokonaisluvut* (`7`, `-2`, `754`) ja *liukuluvut* eli
desimaaliluvut (`7.0`, `3.14`). Luku on kokonaisluku, jos siinä ei ole
desimaalipistettä.

Kun jaettava ja jakaja ovat molemmat kokonaislukuja, myös tulos on
kokonaisluku: desimaaliosa katkaistaan pois. `7 / 2` on `3`, ja `1 / 2` on `0`.
Tämä on yksi aloittelijan yleisimmistä laskuvirheistä. Se on kavala, koska
kääntäjä ei huomauta mitään. Ohjelma laskee täsmälleen kielen sääntöjen
mukaan, ja väärin menee ohjelmoijan oletus. Rider osaa joissakin tilanteissa
varoittaa (*Possible loss of fraction*), mutta ei aina.

*Jakojäännösoperaattori* `%` antaa sen, mitä kokonaislukujaossa jää yli.
`7 % 2` on `1`, koska 7 = 2 · 3 + 1. Jakojäännös on yllättävän hyödyllinen:

```csharp
using System;

public class Jakojaannos
{
    public static void Main()
    {
        // 754 sekuntia minuutteina ja sekunteina
        Console.WriteLine(754 / 60);   // 12 (täydet minuutit)
        Console.WriteLine(754 % 60);   // 34 (yli jäävät sekunnit)

        // Parillinen vai pariton?
        Console.WriteLine(17 % 2);     // 1 -> pariton (parillisella tulos on 0)
    }
}
```

## Liukuluvuilla laskeminen

Jos ainakin toinen laskun osapuolista on liukuluku, tulos on liukuluku ja
desimaalit säilyvät. Desimaalierotin on piste, ei pilkku.

```csharp
using System;

public class Liukuluvut
{
    public static void Main()
    {
        Console.WriteLine(10 / 3);       // 3
        Console.WriteLine(10.0 / 3);     // 3.3333333333333335
        Console.WriteLine(10 / 3.0);     // 3.3333333333333335
        Console.WriteLine(0.1 + 0.2);    // 0.30000000000000004
    }
}
```

Tulosten viimeiset numerot eivät ole kirjoitusvirheitä, vaan liukulukujen
epätarkkuutta: tietokone ei pysty esittämään kaikkia desimaalilukuja tarkasti.
Lisää aiheesta kerrotaan liitteessä
[Tiedon esittäminen tietokoneessa](../liitteet/tiedon-esittaminen-tietokoneella.md).

## Laskujärjestys

C#:ssa laskutoimitusten järjestys seuraa matematiikasta tuttua järjestystä:
kerto- ja jakolasku sekä jakojäännös lasketaan ennen yhteen- ja
vähennyslaskua, ja samanarvoiset laskutoimitukset vasemmalta oikealle.
Sulkeilla järjestystä voi muuttaa.

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

Kun et ole varma järjestyksestä, käytä sulkeita.

## Plus-merkki ja teksti

Lainausmerkit ratkaisevat, onko kyse luvusta vai tekstistä: `5` on luku, `"5"`
on tekstiä. Lainausmerkeissä olevaa tekstiä kutsutaan *merkkijonoksi*.

Sama `+`-merkki tekee eri asioita sen mukaan, mitä sen molemmilla puolilla
on. Lukujen välissä se laskee yhteen, mutta merkkijonojen välissä se liittää
tekstit peräkkäin. Jos vain toinen osapuoli on merkkijono, toinen muutetaan
ensin tekstiksi.

```csharp
using System;

public class PlusMerkki
{
    public static void Main()
    {
        Console.WriteLine(2 + 3);                 // 5
        Console.WriteLine("2" + "3");             // 23
        Console.WriteLine("Summa: " + 2 + 3);     // Summa: 23  (!)
        Console.WriteLine("Summa: " + (2 + 3));   // Summa: 5
    }
}
```

Kolmas rivi yllättää. Lasku etenee vasemmalta oikealle, joten ensin
`"Summa: " + 2` yhdistetään merkkijonoksi `"Summa: 2"`, ja sen perään liitetään
vielä `3`. Sulkeet korjaavat asian.

Kaikkia operaattoreita ei ole määritelty tekstille. Merkkijonoille ei ole
kertolaskua, joten `"abc" * 2` ei käänny: `CS0019: Operator '*' cannot be
applied to operands of type 'string' and 'int'`.

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

`Math.Sqrt` ja `Math.Pow` antavat tulokseksi aina liukuluvun, vaikka sulkeisiin
kirjoitetut luvut olisivat kokonaislukuja.

## Tyypillisiä virheitä

**Kokonaislukujako vahingossa.** Alla olevan ohjelman pitäisi laskea, kuinka
monta prosenttia 45 on 60:stä. Aja ohjelma ja korjaa se niin, että tulos on
75.

```csharp,editable
using System;

public class Prosentti
{
    public static void Main()
    {
        Console.WriteLine(45 / 60 * 100);
    }
}
```

Lasku etenee vasemmalta oikealle: `45 / 60` on kokonaislukujakona `0`, ja
`0 * 100` on `0`. Korjaukseksi riittää tehdä yhdestä luvusta liukuluku
(`45.0 / 60 * 100`) tai kertoa ennen jakamista (`45 * 100 / 60`).

**Lasku lainausmerkeissä.** `Console.WriteLine("2 + 3")` tulostaa tekstin
`2 + 3`, ei lukua 5. Lainausmerkkien sisällä oleva teksti tulostetaan
sellaisenaan, eikä sitä lasketa.

**Pilkku desimaalierottimena.** `3,14` ei ole C#:ssa desimaaliluku, vaan kaksi
pilkulla erotettua lukua. Kirjoita `3.14`.

## Yhteenveto

* `+ - * / %` laskevat. Kun lasku kirjoitetaan `Console.WriteLine`-kutsun
  sulkeisiin ilman lainausmerkkejä, ohjelma tulostaa laskun tuloksen.
* Kahden kokonaisluvun jako on kokonaislukujako: `7 / 2` on `3`. Jakojäännöksen
  antaa `%`.
* Jos toinen luvuista on liukuluku (`7.0 / 2`), desimaalit säilyvät.
* Laskujärjestys on sama kuin matematiikassa; sulkeet ratkaisevat epäselvät
  tapaukset.
* `+` laskee luvut yhteen mutta liittää merkkijonot peräkkäin.

## Testaa tietosi

Valitse vastaus, niin näet heti, menikö se oikein ja miksi. Pisteitä ei jaeta,
mutta huomaat, mitä asioita kannattaa vielä kerrata.

<visa>

**Totta vai tarua?**

<vaittama vastaus="tarua">
Lasku `7 / 2` antaa tuloksen 3.5.
<perustelu>
**Tarua.** Kun molemmat luvut ovat kokonaislukuja, C# tekee kokonaislukujaon
ja tulos on 3. Jos haluat 3.5, tee toisesta luvusta liukuluku: `7 / 2.0`.
</perustelu>
</vaittama>

<vaittama vastaus="totta">
`17 % 5` on 2.
<perustelu>
**Totta.** Jakojäännös kertoo, mitä jää yli: 17 = 3 · 5 + 2. Samalla
operaattorilla selviää esimerkiksi parillisuus: parillisella luvulla
jakojäännös kahdella jaettaessa on 0.
</perustelu>
</vaittama>

<vaittama vastaus="tarua">
`"Tulos: " + 1 + 2` tuottaa merkkijonon `"Tulos: 3"`.
<perustelu>
**Tarua.** Lasku etenee vasemmalta oikealle: ensin syntyy `"Tulos: 1"`,
ja sen perään liitetään `2`, joten tulos on `"Tulos: 12"`. Sulkeilla
`"Tulos: " + (1 + 2)` saadaan `"Tulos: 3"`.
</perustelu>
</vaittama>

**Monivalinta.** Yksi vaihtoehto on oikein.

<kysymys>
Mitä `Console.WriteLine(2 + 3 * 4);` tulostaa?

- [ ] `20`
- [x] `14`
- [ ] `2 + 3 * 4`
- [ ] `234`

<perustelu>
**b.** Kertolasku lasketaan ennen yhteenlaskua: 3 · 4 = 12 ja 2 + 12 = 14.
Tuloksen 20 saisi sulkeilla `(2 + 3) * 4`. Vaihtoehto c tulostuisi, jos lasku
olisi lainausmerkeissä.
</perustelu>
</kysymys>

<kysymys>
Mikä seuraavista laskuista antaa tuloksen 2.5?

- [ ] `5 / 2`
- [x] `5 / 2.0`
- [ ] `5 % 2`
- [ ] `"5" + "2"`

<perustelu>
**b.** Kun toinen luvuista on liukuluku, desimaalit säilyvät. `5 / 2` on
kokonaislukujakona 2, `5 % 2` on jakojäännös 1, ja `"5" + "2"` liittää tekstit
merkkijonoksi `"52"`.
</perustelu>
</kysymys>

</visa>

## Tehtävät

<!-- TIM-palautuslinkit lisätään, kun tehtävät on viety TIMiin. -->

<task>
  <task-title num="1.6">Mitä lasku tuottaa? <points>1 p.</points></task-title>
  <handout>

  {{#include ../tehtavat/1-6-mita-lasku-tuottaa/handout.md}}

  </handout>
</task>

<task>
  <task-title num="1.7">Sekunnit tunneiksi <points>1 p.</points></task-title>
  <handout>

  {{#include ../tehtavat/1-7-sekunnit-tunneiksi/handout.md}}

  </handout>
</task>

<task>
  <task-title num="1.8">Lämpötilan muunnos <points>1 p.</points></task-title>
  <handout>

  {{#include ../tehtavat/1-8-lampotilan-muunnos/handout.md}}

  </handout>
</task>

<task>
  <task-title num="1.9">Kaksi pientä vai yksi iso? <i class="bi bi-stars"></i><points>1 p.</points></task-title>
  <handout>

  {{#include ../tehtavat/1-9-pizzavertailu/handout.md}}

  </handout>
</task>
