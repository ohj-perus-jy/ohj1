# ✅ Testaaminen ComTestillä

ComTest on Jyväskylän yliopistossa kehitetty yksikkötestaustyökalu, joka
mahdollistaa pienten koodinpätkien, kuten funktioiden, testaamisen erikseen
muusta ohjelmakoodista. ComTestin avulla voidaan määritellä testitapauksia,
joissa kutsutaan testattavaa funktiota erilaisilla syötteillä, ja
tarkistetaan, että funktio palauttaa odotetut arvot.

Asenna ComTest [Työkalut-sivun](../tyokalut.md#comtest) ohjeiden mukaan.

## Testit dokumentaatiokommenteissa

ComTest-testit kirjoitetaan
[dokumentaatiokommenteiksi](../osa3/4-kommentointi-ja-dokumentointi.md)
testattavan funktion lähdekoodiin. Testitapaukset ympäröidään `<example>`- ja
`<pre name="test">`-tageilla. Alla esimerkki, jossa määritellään testitapaukset
`Summa`-funktiolle, joka laskee kahden kokonaisluvun summan.

```csharp
/// <summary>
/// Laskee kahden kokonaisluvun summan.
/// </summary>
/// <param name="a">ensimmäinen luku</param>
/// <param name="b">toinen luku</param>
/// <returns>lukujen summa</returns>
/// <example>
/// <pre name="test">
/// Summa(2, 3) === 5
/// Summa(-1, 1) === 0
/// Summa(0, 0) === 0
/// </pre>
/// </example>
public static int Summa(int a, int b)
{
    return a + b;
}
```

Jokainen `===`-rivi on yksi testi: vasemmalla puolella on funktion kutsu ja
oikealla puolella arvo, joka kutsun tulee palauttaa.

## Testien ajaminen Riderissä

<!-- Vaiheessa B: ComTest-valikko, testien tulosten lukeminen, epäonnistuneen
     testin tulkinta. Kuvat. -->

## Testit ensin: tynkä, testit, toteutus

<!-- Vaiheessa B: työtapa, jossa kirjoitetaan ensin dokumentaatio ja testit,
     sitten toteutus. -->

## Liukulukujen testaaminen

<!-- Vaiheessa B: `~~~` ja toleranssi. -->

## Tehtävät

<!-- Tehtävät lisätään vaiheessa B. -->
