# 💾 Muuttujat ja tietotyypit

Muuttujat ovat ohjelmassa käytettäviä arvoja, joiden arvo voi muuttua ohjelman suorituksen aikana. Niinpä voidaan sanoa, että ohjelman tila koostuu muuttujissa olevista arvoista. Jos muuttujan arvo muuttuu (esimerkiksi käyttäjän vuorovaikutuksen seurauksena), muuttuu ohjelman tila. 

C#-kielessä jokaiselle muuttujalle on määriteltävä nimi ja tyyppi ennen käyttöä. Muuttujan tyyppi määrittää tarkasti, millaisia arvoja siihen voi tallentaa. Jos ohjelmoija yrittää tallentaa muuttujaan väärän tyyppisen arvon, kääntäminen epäonnistuu. Valittua tyyppiä ei voi muuttaa ohjelman suorituksen aikana; muuttujan tyyppi säilyy samana koko muuttujan elinkaaren ajan. 

Määritellään seuraavassa esimerkissä kolme muuttujaa ja sijoitetaan kuhunkin niihin sopiva arvo.

```csharp
int luku = 5; // luku-muuttujaan voi tallentaa kokonaislukuja
string nimi = "Maija"; // nimi-muuttujaan voi tallentaa merkkijonoja
bool onkoTosi = true; // onkoTosi-muuttujaan voi tallentaa totuusarvoja
```

Ensimmäinen muuttuja nimeltä `luku` on tyypiltään `int`, eli kokonaisluku. Muita kokonaislukuja voisivat olla esimerkiksi `-10`, `0` ja `67`.

Toinen muuttuja nimeltä `nimi` on tyypiltään `string`, eli merkkijono. Merkkijono voi sisältää esimerkiksi kirjaimia, numeroita ja erikoismerkkejä. Esimerkkejä merkkijonoista ovat `"Hei!"`, `"12345"` ja `"Ohjelmointi on kivaa."`. Huomaa, että merkkijonot kirjoitetaan lainausmerkkien sisälle.

Kolmas muuttuja nimeltä `onkoTosi` on tyypiltään `bool`, eli totuusarvo. Totuusarvo voi olla joko `true` (tosi) tai `false` (epätosi). Esimerkkejä totuusarvoista ovat esimerkiksi `5 > 3` (joka on tosi) ja `2 == 4` (joka on epätosi).

## Perustietotyypit

Yllä olevassa esimerkissä käytetyt `int`, `string` ja `bool` ovat C#-kielen perustietotyyppejä (engl. *primitive data types*). Alla on lueteltu C#:n perustietotyypit ja niiden tärkeimmät ominaisuudet:

Lukutyypit:

| Tietotyyppi | Kuvaus                           | Arvoalue                                                    | Esimerkkejä arvoista       |
| ----------- | -------------------------------- | ----------------------------------------------------------- | -------------------------- |
| `int`       | Kokonaisluku                     | -2 147 483 648 &ndash; 2 147 483 647                        | `-10`, `0`, `67`           |
| `double`    | Liukuluku (tarkka desimaaliluku) | n. -1.79 * 10<sup>308</sup> &ndash; 1.79 * 10<sup>308</sup> | `3.14`, `-0.001`, `2.0`    |
| `float`     | Liukuluku (vähemmän tarkka)      | n. -3.40 * 10<sup>38</sup> &ndash; 3.40 * 10<sup>38</sup>   | `3.14f`, `-0.001f`, `2.0f` |


Muut tietotyypit:


| Tietotyyppi | Kuvaus                          | Esimerkkejä arvoista          |
| `string`    | Merkkijono                      |  | `"Hei!"`, `"12345"`           |
| `bool`      | Totuusarvo                      | `true`, `false`               |
| `char`      | Yksittäinen merkki              | `'a'`, `'1'`, `'#'`           |



> [!LISATIETO]
> ✨ Valinnaista lisätietoa: C#-kielessä on mahdollista merkitä muuttujan tyypin kohdalle sana `var`, jolloin kääntäjä päättelee tyypin automaattisesti arvon perusteella. Esimerkiksi `var luku = 5;` määrittelee `luku`-muuttujan tyypiksi `int`, koska arvo `5` on kokonaisluku. Muuttujan tyyppi on kuitenkin edelleen kiinteä, eikä sitä voi muuttaa myöhemmin. Tämä on kätevä ominaisuus, mutta tässä kurssissa keskitymme selkeyden vuoksi eksplisiittiseen tyyppimääritykseen.

## Vakiot

Vakio on muuttuja, jonka arvo vakioidaan käännöksessä, eikä arvoa voi muuttaa ohjelman suorituksen aikana. Vakio määritellään `const`-avainsanalla. 

```csharp
const int MONTAKO_VIHUA = 10; // all caps -tyyli
const string TervehdysSana = "Hei"; // PascalCase-tyyli
```

Vain sellainen tietotyyppi, jonka arvo voidaan laskea käännösaikana, voidaan määritellä vakioksi. Esimerkiksi oliotietotyypit (esim. `int[]`) ovat niin kutsuttuja viitetyyppejä (engl. *reference types*), eikä niitä voida määritellä `const`-avainsanalla. On olemassa muuttumattomia oliotietotyyppejä (esimerkiksi `ImmutableArray`), mutta emme käsittele niitä tällä kurssilla, joskin `string`-tyyppi tekee tähän poikkeuksen.

✨ Valinnaista lisätietoa: Oliot, joiden arvot määräytyvät vasta ajon aikana, voidaan määritellä `readonly`-avainsanalla. Tällöin muuttujan arvo voidaan asettaa vain kerran. Tämä vastaa kutakuinkin yllä mainittujen perustietotyyppien `const`-avainsanaa. 

