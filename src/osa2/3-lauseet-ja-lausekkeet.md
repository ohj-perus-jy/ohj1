# Lauseet ja lausekkeet

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
* Kun seuraavassa luvussa kirjoitat oman funktion, sen kutsu on lauseke, ja
  sitä voi käyttää kaikkialla, missä arvoa tarvitaan.

## Lause

*Lause* (engl. *statement*) on ohjelman pienin suoritettava yksikkö: sen
seurauksena *tapahtuu jotakin*. Lauseita suoritetaan yksi kerrallaan ylhäältä
alas, ja useimmat niistä päättyvät puolipisteeseen.

```csharp,ignore
int ika = 20;                              // muuttujan määrittely ja sijoitus
ika = ika + 1;                             // sijoituslause
Console.WriteLine("Hyvää syntymäpäivää!"); // aliohjelmakutsu
```

Myöhemmin vastaan tulee lauseita, jotka eivät pääty puolipisteeseen:
ehtolause (`if`, luku [Ehtolauseet](../osa3/1-ehtolauseet.md)) ja
toistolauseet (`while`, `for`, osa 4). Niissä on aaltosulkujen rajaama lohko,
jonka sisällä on lisää lauseita.

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
on kyseessä. Tyypit esiteltiin luvussa
[Muuttujat ja tietotyypit](./1-muuttujat-ja-tietotyypit.md).

Lausekkeen tunnistaa helposti: jos koodinpätkän voi kirjoittaa sijoituksen
oikealle puolelle, esimerkiksi `int x = ...;`, se on lauseke.

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

## Kutsu lausekkeena

Kutsu on lauseke, jos se antaa arvon. Useimmat jo tutuista kutsuista antavat:

| Kutsu                | Arvo                         | Tyyppi   |
| -------------------- | ---------------------------- | -------- |
| `Math.Max(3, 7)`     | 7                            | `int`    |
| `Math.Sqrt(16)`      | 4                            | `double` |
| `int.Parse("42")`    | 42                           | `int`    |
| `Console.ReadLine()` | käyttäjän kirjoittama rivi   | `string` |

Siksi kutsun voi sijoittaa muuttujaan tai antaa toiselle kutsulle:

```csharp,ignore
int suurempi = Math.Max(3, 7);             // sijoituslause, jossa lauseke on kutsu
int ika = int.Parse(Console.ReadLine());   // kutsu toisen kutsun argumenttina
```

`Console.WriteLine("Moi")` on erilainen. Se tulostaa tekstin mutta ei anna
arvoa, joten se ei ole lauseke vaan pelkkä lause. Sama testi kuin edellä
paljastaa eron: `int x = Math.Max(3, 7);` kääntyy, mutta
`int x = Console.WriteLine("Moi");` ei käänny.

Seuraavassa luvussa kirjoitat [omia funktioita](./4-funktiot.md), joiden kutsu
on lauseke samalla tavalla kuin `Math.Max`-kutsu.

<details closed><summary><i class="bi bi-stars jyu-gold"></i> Valinnaista lisätietoa: lauseke, joka on myös lause</summary>

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
`++`:n kahdesta muodosta kerrottiin luvussa
[Operaattorit ja tyyppimuunnokset](./2-operaattorit.md).

Tässä luvussa esitetty jako lausekkeisiin ja lauseisiin on yksinkertaistus.
Se, mihin "lokeroon" jokin koodinpätkä kuuluu, vaihtelee ohjelmointikielen
mukaan, ja tarkat säännöt ovat kielen spesifikaatiossa. Esimerkiksi
C#-spesifikaatio sanoo lausekkeeksi myös `Console.WriteLine`-kutsun, jolla ei
ole arvoa. Tämän kurssin ohjelmiin riittää yksinkertainen jako: lauseke on
koodia, jolla on arvo. Jos asia kiinnostaa enemmän, voit tutustua [📖 C#-kielen
spesifikaatioon](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/statements).

</details>

## Yhteenveto

* Lause saa jotakin tapahtumaan ja päättyy yleensä puolipisteeseen.
* Lausekkeella on arvo ja tyyppi. Lausekkeita ovat arvot, muuttujat,
  laskutoimitukset ja arvon antavat kutsut, kuten `Math.Max(3, 7)`.
* Testi: jos koodinpätkän voi kirjoittaa sijoituksen oikealle puolelle, se on
  lauseke.
* Lauseke käytetään aina jossakin lauseessa: sijoitetaan muuttujaan tai
  annetaan aliohjelmalle.

## Testaa tietosi

Valitse vastaus, niin näet heti, menikö se oikein ja miksi. Pisteitä ei jaeta,
mutta huomaat, mitä asioita kannattaa vielä kerrata.

<visa>

**Totta vai tarua?**

<vaittama vastaus="totta">
Jokaisella lausekkeella on arvo ja tyyppi.
<perustelu>
**Totta.** `3 + 4` on `int`-tyyppinen lauseke, jonka arvo on 7, ja `"Moi"` on
`string`-lauseke. Juuri siksi lausekkeen voi sijoittaa muuttujaan tai antaa
aliohjelmalle.
</perustelu>
</vaittama>

<vaittama vastaus="tarua">
`Console.WriteLine("Moi");` on lauseke.
<perustelu>
**Tarua.** Se on lause: se saa jotakin tapahtumaan eikä tuota arvoa. Sen
sisällä oleva `"Moi"` on lauseke.
</perustelu>
</vaittama>

<vaittama vastaus="totta">
`Console.ReadLine()` on lauseke.
<perustelu>
**Totta.** Kutsu antaa arvon, käyttäjän kirjoittaman rivin, joten sen voi
sijoittaa muuttujaan: `string nimi = Console.ReadLine();`.
</perustelu>
</vaittama>

**Monivalinta.** Yksi vaihtoehto on oikein.

<kysymys>
Mikä seuraavista **ei** ole lauseke?

- [ ] `5 * 2`
- [ ] `pisteet`
- [x] `int pisteet = 10;`
- [ ] `Math.Max(3, 7)`

<perustelu>
**c.** Muuttujan määrittely on lause. Muut ovat lausekkeita, joilla on arvo:
10, muuttujan `pisteet` arvo ja 7.
</perustelu>
</kysymys>

<kysymys>
Mitä kääntäjä sanoo rivistä `3 + 4;`?

- [ ] Ei mitään, rivi tulostaa 7
- [x] Se on virhe, koska pelkkä laskutoimitus ei kelpaa lauseeksi
- [ ] Ei mitään, tulos 7 tallennetaan muistiin myöhempää käyttöä varten
- [ ] Ei mitään, rivi kääntyy ja tekee hiljaa ei mitään

<perustelu>
**b.** Lauseke tarvitsee lauseen, jossa sitä käytetään: sijoituksen, kutsun
tai vastaavan. Kääntäjä ilmoittaa `CS0201: Only assignment, call, increment,
decrement, await, and new object expressions can be used as a statement`.
</perustelu>
</kysymys>

</visa>

## Tehtävät

<!-- Vaiheessa B: "Lause vai lauseke?" -luokittelutehtävä ja pieni ohjelma,
     jossa korjataan CS0201-virhe. -->
