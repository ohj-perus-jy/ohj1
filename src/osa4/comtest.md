# Aliohjelmien yksikkötestaus ComTest-työkalulla

ComTest on Java-kielinen yksikkötestauskehys, joka mahdollistaa pienten
koodinpätkien, kuten aliohjelmien, testaamisen erikseen muusta ohjelmakoodista.
ComTestin avulla voidaan määritellä testitapauksia, joissa kutsutaan testattavaa aliohjelmaa
erilaisilla syötteillä, ja tarkistetaan, että aliohjelma palauttaa odotetut
arvot.

ComTest-testit kirjoitetaan dokumentaatiokommenteiksi testattavan aliohjelman
lähdekoodiin. Testitapaukset ympäröidään `<example>`- ja `<pre name="test">`-tageilla.
Alla esimerkki, jossa määritellään testitapaukset `Summa`-aliohjelmalle, joka
laskee kahden kokonaisluvun summan.

```csharp
/// <summary>
/// Laskee kahden kokonaisluvun summan.
/// </summary>
/// <example>
/// <pre name="test">
/// Summa(2, 3) === 5
/// Summa(-1, 1) === 0
/// Summa(0, 0) === 0
/// </pre>
/// </example>
public int Summa(int a, int b)
{
    return a + b;
}
```