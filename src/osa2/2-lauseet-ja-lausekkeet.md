# 🛝 Lauseet ja lausekkeet

Ohjelma koostuu *lauseista*, ja lauseet sisältävät *lausekkeita*. Ero kuulostaa
saivartelulta, mutta se selittää suuren osan siitä, mitä kääntäjä hyväksyy ja
mitä ei, ja mitä sen virheilmoitukset tarkoittavat.

## Mihin erottelua tarvitaan?

Ajatellaan reseptiä. "Sekoita" on käsky: se saa jotakin tapahtumaan. "2 dl
jauhoja" ei ole käsky vaan määrä, jonka voi mitata ja käyttää käskyssä:
"lisää 2 dl jauhoja". Ohjelmoinnissa käsky on *lause* ja määrä on *lauseke*.

Erottelu tulee vastaan jatkuvasti:

* Kun kääntäjä ilmoittaa `CS0201: Only assignment, call, increment, decrement,
  await, and new object expressions can be used as a statement`, se sanoo:
  "kirjoitit lausekkeen paikkaan, johon kuuluu lause". Esimerkiksi rivi
  `a + 1;` on laskutoimitus, jonka tulosta ei käytetä mihinkään.
* Kun mietit, voiko tulostuskäskyn sisään kirjoittaa laskun
  (`Console.WriteLine(2 + 3)`), vastaus on kyllä: tulostuskäsky odottaa
  lauseketta, ja `2 + 3` on lauseke.
* Kun osassa 4 kirjoitat funktion, joka palauttaa arvon, sen kutsu on lauseke,
  ja sitä voi käyttää kaikkialla, missä arvoa tarvitaan.

## Lause

*Lause* (engl. *statement*) on ohjelman pienin suoritettava yksikkö: sen
seurauksena *tapahtuu jotakin*. Lauseita suoritetaan yksi kerrallaan ylhäältä
alas, ja useimmat niistä päättyvät puolipisteeseen.

```csharp,ignore
int ika = 20;                              // muuttujan määrittely ja sijoitus
ika = ika + 1;                             // sijoituslause
Console.WriteLine("Hyvää syntymäpäivää!"); // aliohjelmakutsu
```

Myös ehtolause (`if`) ja toistolause (`while`, `for`) ovat lauseita. Ne eivät
pääty puolipisteeseen vaan sisältävät aaltosulkujen rajaaman lohkon, jossa on
lisää lauseita. Niihin tutustutaan luvussa [Ehtolauseet](./5-ehtolauseet.md) ja
osassa 4.

## Lauseke

*Lauseke* (engl. *expression*) on asia, jolla on *arvo*. Kun ohjelma suorittaa
lausekkeen, se laskee eli *evaluoi* tämän arvon. Yksinkertaisin lauseke on
pelkkä arvo, kuten `3` tai `"Moi"`. Lausekkeita voi yhdistää operaattoreilla
isommiksi lausekkeiksi.

| Lauseke | Arvo | Tyyppi |
| --- | --- | --- |
| `3` | 3 | `int` |
| `2 + 3` | 5 | `int` |
| `2 + 3 * 4` | 14 | `int` |
| `"Moi" + "!"` | `"Moi!"` | `string` |
| `5 > 3` | `true` | `bool` |
| `ika` | muuttujan `ika` arvo | muuttujan tyyppi |
| `ika + 1` | yhtä suurempi kuin `ika` | `int` |

Jokaisella lausekkeella on arvon lisäksi *tyyppi*, joka kertoo, millainen arvo
on kyseessä. Tyyppeihin tutustutaan seuraavassa luvussa
[Muuttujat ja tietotyypit](./3-muuttujat-ja-tietotyypit.md).

## Lauseke lauseen sisällä

Lauseke ei yksin tee mitään; se pitää käyttää jossakin lauseessa. Tyypillisesti
lausekkeen arvo joko sijoitetaan muuttujaan tai annetaan aliohjelmalle.

Alla olevan ohjelman jokaisella rivillä on sekä lause että lauseke. Aja ohjelma
ja katso, mitä se tulostaa.

```csharp
using System;

public class Lausekkeet
{
    public static void Main()
    {
        // Lause: määritellään muuttuja a.
        // Lauseke: 3 (hyvin yksinkertainen sellainen).
        int a = 3;

        // Lause: muuttuja b saa lausekkeen a + 5 arvon, eli 8.
        int b = a + 5;

        // Lause: tulostetaan. Lauseke: a * b, jonka arvo on 24.
        Console.WriteLine(a * b);

        // Lauseke voi olla myös pelkkä muuttuja tai teksti.
        Console.WriteLine(b);
        Console.WriteLine("Valmis!");
    }
}
```

Lauseke voi olla myös aliohjelmakutsu, joka palauttaa arvon. Alla
`Math.Max(3, 7)` on lauseke, jonka arvo on 7. Omia arvon palauttavia
aliohjelmia opitaan kirjoittamaan luvussa [Aliohjelman
paluuarvo](../osa4/1-aliohjelman-paluuarvo.md).

```csharp,ignore
int suurempi = Math.Max(3, 7); // Sijoituslause, jossa lauseke on kutsu
Console.WriteLine(suurempi);   // Tulostaa 7
```

## Lauseke, joka on myös lause

Joissakin tapauksissa sama koodinpätkä on sekä lause että lauseke. Tavallisin
esimerkki on `a++`, joka kasvattaa muuttujan `a` arvoa yhdellä. Se saa jotakin
tapahtumaan (lause), mutta sillä on myös arvo (lauseke).

```csharp,ignore
int a = 3;
a++;                   // Lauseena: a on nyt 4.
int b = a++;           // Lausekkeena: b saa arvon 4, ja a on sen jälkeen 5.
```

Jälkimmäinen rivi on laillista C#:a, mutta sitä kannattaa välttää: lukija
joutuu pysähtymään miettimään, kumpi arvo `b`:hen päätyi. Operaattoreista ja
`++`:n kahdesta muodosta kerrotaan lisää luvussa
[Operaattorit ja laskutoimitukset](./4-operaattorit.md).

Tässä esitetty jako lausekkeisiin ja lauseisiin on yksinkertaistus. Se, mihin
"lokeroon" jokin koodinpätkä kuuluu, vaihtelee ohjelmointikielen mukaan.
Ohjelmointikielen spesifikaatio määrittelee sen, mitkä koodinpätkät ovat
lauseita, mitkä lausekkeita, ja mitkä jotakin muuta. Jos asia kiinnostaa
enemmän, voit tutustua [📖 C#-kielen
spesifikaatioon](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/statements).

## Yhteenveto

* Lause saa jotakin tapahtumaan ja päättyy yleensä puolipisteeseen.
* Lausekkeella on arvo ja tyyppi. Lausekkeita ovat arvot, muuttujat,
  laskutoimitukset ja arvon palauttavat kutsut.
* Lauseke käytetään aina jossakin lauseessa: sijoitetaan muuttujaan tai
  annetaan aliohjelmalle.

## 🤔 Testaa tietosi

Päätä vastaus ensin ja avaa se vasta sitten. Pisteitä ei jaeta, mutta hämärät
kohdat paljastuvat.

<visa>

**Totta vai tarua?**

<details data-vastaus="totta"><summary>1. Jokaisella lausekkeella on arvo ja tyyppi.</summary>

**Totta.** `3 + 4` on `int`-tyyppinen lauseke, jonka arvo on 7, ja `"Moi"` on
`string`-lauseke. Juuri siksi lausekkeen voi sijoittaa muuttujaan tai antaa
aliohjelmalle.

</details>

<details data-vastaus="tarua"><summary>2. <code>Console.WriteLine("Moi");</code> on lauseke.</summary>

**Tarua.** Se on lause: se saa jotakin tapahtumaan eikä tuota arvoa. Sen
sisällä oleva `"Moi"` on lauseke.

</details>

<details data-vastaus="totta"><summary>3. Sama koodinpätkä voi olla sekä lauseke että lause.</summary>

**Totta.** `a++` on lauseke, koska sillä on arvo, ja puolipisteellä
päätettynä `a++;` on myös lause.

</details>

**Monivalinta.** Yksi vaihtoehto on oikein.

**4.** Mikä seuraavista **ei** ole lauseke?

a) `5 * 2`\
b) `pisteet`\
c) `int pisteet = 10;`\
d) `Math.Max(3, 7)`

<details data-vastaus="c"><summary>Näytä vastaus</summary>

**c.** Muuttujan määrittely on lause. Muut ovat lausekkeita, joilla on arvo:
10, muuttujan `pisteet` arvo ja 7.

</details>

**5.** Mitä kääntäjä sanoo rivistä `3 + 4;`?

a) Ei mitään, rivi tulostaa 7\
b) Se on virhe, koska pelkkä laskutoimitus ei kelpaa lauseeksi\
c) Ei mitään, tulos 7 tallennetaan muistiin myöhempää käyttöä varten\
d) Ei mitään, rivi kääntyy ja tekee hiljaa ei mitään

<details data-vastaus="b"><summary>Näytä vastaus</summary>

**b.** Lauseke tarvitsee lauseen, jossa sitä käytetään: sijoituksen, kutsun
tai vastaavan. Kääntäjä ilmoittaa `CS0201: Only assignment, call, increment,
decrement, await, and new object expressions can be used as a statement`.

</details>

</visa>

## Tehtävät

<!-- Vaiheessa B: "Lause vai lauseke?" -luokittelutehtävä ja pieni ohjelma,
     jossa korjataan CS0201-virhe. -->
