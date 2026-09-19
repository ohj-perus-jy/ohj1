# Testaaminen ComTestillä

ComTest on Jyväskylän yliopistossa kehitetty yksikkötestaustyökalu, jolla
pieniä koodinpätkiä, kuten funktioita, voidaan testata erikseen muusta
ohjelmakoodista. Testissä kutsutaan testattavaa funktiota erilaisilla
syötteillä ja tarkistetaan, että se palauttaa odotetut arvot. Kun testit on
kerran kirjoitettu, ne voi ajaa uudelleen aina koodia muutettuaan ja nähdä
heti, toimiiko funktio edelleen.

ComTest on Riderin lisäosa. Jos et ole vielä asentanut sitä, tee se ensin
[Työkalut-sivun ohjeilla](../tyokalut.md#comtest).

## Testit dokumentaatiokommenteissa

ComTest-testit kirjoitetaan testattavan funktion
[dokumentaatiokommenttiin](./3-kommentointi-ja-dokumentointi.md) `<example>`-
ja `<pre name="test">`-tagien sisään. Alla on testit `Summa`-funktiolle, joka
laskee kahden kokonaisluvun summan:

```csharp,ignore
/// <summary>
/// Laskee kahden kokonaisluvun summan.
/// </summary>
/// <param name="a">ensimmäinen luku</param>
/// <param name="b">toinen luku</param>
/// <returns>lukujen summa</returns>
/// <example>
/// <pre name="test">
/// Summa(2, 3) === 5;
/// Summa(-1, 1) === 0;
/// Summa(0, 0) === 0;
/// </pre>
/// </example>
public static int Summa(int a, int b)
{
    return a + b;
}
```

Jokainen `===`-rivi on yksi tarkistus: vasemmalla puolella on funktion kutsu ja
oikealla puolella arvo, joka kutsun pitää palauttaa. Testit ovat samalla
funktion käyttöesimerkkejä: lukija näkee niistä suoraan, mitä funktio milläkin
syötteellä palauttaa.

Kommentit eivät itsessään ole ajettavaa koodia. ComTest lukee ne ja tekee
niiden perusteella varsinaiset testit ohjelmasi rinnalle omaan testiprojektiinsa.

Tageja ei tarvitse kirjoittaa käsin. Lisää dokumentaatiokommentin alle uusi
tyhjä rivi, kirjoita sille `comt` ja varmista, että ehdotuslistassa on
valittuna *comt &ndash; ComTest: DocTest*. Paina <kbd>Enter</kbd>, niin
kommentin loppuun ilmestyy valmis pohja, jonka keskelle testit kirjoitetaan:

<animation scenes="images/comtest/scenes.js" scene="comt-pohja">

![Animaatio, jossa näytetään testialueen kirjoittaminen dokumentaatiokommenttiin](images/comtest/comt-ehdotus.png)

```csharp,ignore
/// <example>
/// <pre name="test">
///
/// </pre>
/// </example>
```

</animation>

## Testien ajaminen Riderissä

Testien ajamiseen tarvitaan Riderin *Tests*-valikosta kaksi komentoa:

- *ComTest: Generate Tests from Solution* tekee kommenteissa olevista
  ComTest-testeistä varsinaisen testikoodin tai päivittää sen, jos testit ovat
  muuttuneet. Ensimmäisellä kerralla ComTest luo ohjelmasi rinnalle
  testiprojektin, joten tässä voi mennä hetki. Tuloksia tämä ei vielä näytä.
- *Run All Tests from Solution* ajaa testikoodin ja näyttää tulokset Riderin
  alareunassa *Unit Tests* -ikkunassa.

Kun olet lisännyt tai muuttanut testejä, valitse siis ensin *Generate Tests* ja
sitten *Run All Tests*. Jos ajat pelkän *Run All Tests* -komennon, Rider ajaa
vanhat testit eikä huomaa kommentteihin tekemiäsi muutoksia. Kun olet muuttanut
vain funktion toteutusta, pelkkä *Run All Tests* riittää.

Vihreä merkki ja teksti *Passed* tarkoittavat, että kaikki tarkistukset menivät
läpi. Punainen *Failed* tarkoittaa, että jokin kutsu palautti muuta kuin
testissä odotettiin. Klikkaa epäonnistunutta testiä, niin näet, mitä arvoa
odotettiin ja mitä funktio palautti, esimerkiksi `Expected: 5` ja
`But was: 0`.

## Testit ensin: tynkä, testit, toteutus

Testit kannattaa kirjoittaa *ennen* kuin funktio on valmis. Silloin joudut
miettimään etukäteen, mitä funktion pitää palauttaa, ja näet testeistä, milloin
toteutus on valmis. Tehdään `Summa` tällä tavalla.

1. Kirjoita funktiosta ensin tynkä, joka kääntyy mutta palauttaa vielä väärän
    arvon. Lisää se luokan sisään, pääohjelman ulkopuolelle:

    ```csharp,ignore
    public static int Summa(int a, int b)
    {
        return 0;
    }
    ```

2. Siirrä kursori funktion yläpuolelle tyhjälle riville ja kirjoita `///`.
    Rider luo dokumentaatiokommentin rungon. Täydennä siihen, mitä funktio
    tekee, mitä parametrit tarkoittavat ja mitä funktio palauttaa.

3. Lisää kommentin loppuun testipohja kirjoittamalla `comt` ja painamalla
    <kbd>Enter</kbd>. Kirjoita testit `<pre name="test">`- ja `</pre>`-rivien
    väliin:

    ```csharp,ignore
    /// Summa(2, 3) === 5;
    /// Summa(-1, 1) === 0;
    /// Summa(0, 0) === 0;
    ```

    Valitse testeihin erilaisia tapauksia: tavallisia arvoja, negatiivisia
    lukuja ja rajatapauksia, kuten nolla.

4. Tee kommenteista testikoodi valitsemalla *Tests* › *ComTest: Generate Tests
    from Solution* ja aja sitten testit valitsemalla *Tests* › *Run All Tests
    from Solution*. Nyt tuloksen pitää olla punainen *Failed*, koska tynkä
    palauttaa aina nollan.

5. Korjaa funktion toteutus:

    ```csharp,ignore
    return a + b;
    ```

6. Aja testit uudelleen valitsemalla *Run All Tests from Solution*. Testejä ei
    tarvitse generoida uudelleen, koska muutit vain toteutusta etkä testejä.
    Nyt *Unit Tests* -ikkunassa pitäisi näkyä vihreä merkki ja teksti *Passed*.

Punainen tulos ensimmäisellä ajokerralla on hyvä merkki: se kertoo, että testit
todella tarkistavat jotain. Jos testit menisivät läpi jo tyngällä, ne eivät
huomaisi virheellistäkään toteutusta.

## Mitä ComTestillä testataan?

ComTest sopii parhaiten funktioille, jotka saavat syötteensä parametreina ja
*palauttavat* tuloksen. Aliohjelmia, jotka lukevat näppäimistöltä
(`Console.ReadLine`) tai tulostavat näytölle (`Console.WriteLine`), ei tällä
opintojaksolla testata. Tämäkin on hyvä syy kirjoittaa laskenta omaksi
funktiokseen ja pitää tulostaminen pääohjelmassa.

ComTest-lisäosan lähdekoodi on JYU:n GitLabissa:
<https://gitlab.jyu.fi/tie/tools/comtest.intellij>.

## Liukulukujen testaaminen

Desimaalilukuja (`double`) ei voi verrata täsmälleen, koska tietokone esittää ne
likiarvoina: esimerkiksi `0.1 + 0.2` ei ole tarkalleen `0.3`. Käytä siksi
merkintää `~~~`, joka tarkoittaa "lähes yhtä suuri":

```csharp,ignore
/// <example>
/// <pre name="test">
/// Keskiarvo(1.0, 2.0) ~~~ 1.5;
/// Keskiarvo(0.1, 0.2) ~~~ 0.15;
/// Keskiarvo(-1.0, 1.0) ~~~ 0.0;
/// </pre>
/// </example>
public static double Keskiarvo(double a, double b)
{
    return (a + b) / 2;
}
```

Oletuksena luvut saavat erota toisistaan enintään 0,000001. Jos karkeampi
tarkkuus riittää, sen voi vaihtaa `#TOLERANCE`-rivillä ennen testejä:

```csharp,ignore
/// <pre name="test">
/// #TOLERANCE=0.01
/// Keskiarvo(1.0, 2.01) ~~~ 1.5;
/// </pre>
```

## Esimerkkejä erilaisista testeistä

Testirivit ovat ComTestin merkintöjä ja tavallista C#-koodia sekaisin: voit
esimerkiksi luoda muuttujan yhdellä rivillä ja tarkistaa sen arvon seuraavalla.
Siksi rivit päätetään puolipisteeseen kuten muukin C#-koodi.

### Merkkijonot

Merkkijonoa verrataan `===`-merkinnällä kuten kokonaislukujakin. Muista testata myös
rajatapaukset, kuten tyhjä ja yhden merkin mittainen merkkijono:

```csharp,ignore
/// <summary>
/// Palauttaa merkkijonon alkupuoliskon.
/// </summary>
/// <param name="jono">merkkijono, josta puolikas otetaan</param>
/// <returns>merkkijonon alkupuolisko</returns>
/// <example>
/// <pre name="test">
/// Puolikas("") === "";
/// Puolikas("Abba") === "Ab";
/// Puolikas("Hiiri") === "Hi";
/// Puolikas("A") === "";
/// </pre>
/// </example>
public static string Puolikas(string jono)
{
    return jono.Substring(0, jono.Length / 2);
}
```

### Taulukot ja listat

Taulukoihin tutustutaan vasta seuraavassa osassa, mutta niiden testaaminen on
koottu tähän samaan paikkaan. Taulukkoa voi verrata suoraan toiseen taulukkoon
ja listaa toiseen listaan:

```csharp,ignore
/// <summary>
/// Palauttaa taulukon, jossa on luvut 0, 1, ..., n-1.
/// </summary>
/// <param name="n">lukujen määrä</param>
/// <returns>taulukko luvuista</returns>
/// <example>
/// <pre name="test">
/// Luvut(0) === new int[0];
/// Luvut(1) === new int[]{0};
/// Luvut(3) === new int[]{0, 1, 2};
/// </pre>
/// </example>
public static int[] Luvut(int n)
{
    int[] tulos = new int[n];
    for (int i = 0; i < n; i++) tulos[i] = i;
    return tulos;
}
```

Lista verrataan samalla tavalla. Jos `Luvut` palauttaisi taulukon sijasta
listan (`List<int>`), testirivi olisi `Luvut(3) === new List<int>{0, 1, 2};`.

Lyhyemmin saman voi kirjoittaa merkinnällä `=J=`, joka yhdistää vasemman puolen
alkiot merkkijonoksi pilkulla ja välilyönnillä eroteltuina:

```csharp,ignore
/// Luvut(3) =J= "0, 1, 2";
```

Desimaalilukuja sisältävät taulukot ja listat kannattaa verrata suoraan eikä
`=J=`-merkinnällä, koska merkkijonossa desimaalierotin riippuu koneen
kieliasetuksista (suomessa pilkku, englannissa piste).

### Aliohjelma, joka muuttaa parametriaan

Jos aliohjelma ei palauta mitään vaan muuttaa parametrina saamaansa taulukkoa,
testissä kutsutaan ensin aliohjelmaa ja tarkistetaan sitten taulukon sisältö:

```csharp,ignore
/// <summary>
/// Vaihtaa taulukon keskimmäisen sanan.
/// </summary>
/// <param name="sanat">taulukko, jonka sana vaihdetaan</param>
/// <param name="uusi">uusi keskimmäinen sana</param>
/// <example>
/// <pre name="test">
/// string[] sanat = {"kissa", "koira", "kotka", "norsu"};
/// VaihdaKeskimmainen(sanat, "hiiri");
/// sanat =J= "kissa, hiiri, kotka, norsu";
///
/// sanat = new string[]{"kissa"};
/// VaihdaKeskimmainen(sanat, "kettu");
/// sanat =J= "kettu";
///
/// sanat = new string[]{};
/// VaihdaKeskimmainen(sanat, "kettu");
/// sanat.Length === 0;
/// </pre>
/// </example>
public static void VaihdaKeskimmainen(string[] sanat, string uusi)
{
    if (sanat.Length == 0) return;
    int keski = (sanat.Length - 1) / 2;
    sanat[keski] = uusi;
}
```

### Monta tapausta taulukkona

Kun samaa kutsua testataan monilla arvoilla, testit voi kirjoittaa taulukoksi.
Ensin kirjoitetaan testin malli, jossa vaihtuvat kohdat ovat `$`-alkuisia nimiä,
ja tyhjän rivin jälkeen taulukko, jonka jokaisesta rivistä tulee yksi testi:

```csharp,ignore
/// <pre name="test">
/// Puolikas($jono) === $tulos;
///
///   $jono   | $tulos
///  ------------------
///   ""      | ""
///   "Abba"  | "Ab"
///   "Hiiri" | "Hi"
///   "A"     | ""
/// </pre>
```

Otsikkorivillä `|`-merkin ja sarakkeen nimen välissä pitää olla vähintään yksi
välilyönti.

## Tehtävät

<!-- Tehtävät lisätään vaiheessa B. -->
