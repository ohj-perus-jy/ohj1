# 🧭 Mitä ohjelmointi on?

Ohjelmointi on ohjeiden kirjoittamista tietokoneelle. Tietokone on äärimmäisen
nopea ja äärimmäisen tunnollinen: se tekee täsmälleen sen, mitä sille sanotaan,
miljoonia kertoja sekunnissa -- eikä koskaan sitä, mitä *tarkoitettiin*.
Ohjelmoijan työ on sanoa asiat niin täsmällisesti, ettei näiden kahden välillä
ole eroa.

Tässä luvussa ei vielä kirjoiteta koodia. Sen sijaan katsotaan, mitä
ohjelmoiminen on, mitä sillä saa aikaan ja millaisia välineitä ohjelmoija
käyttää. Ensimmäinen oikea C#-ohjelma kirjoitetaan luvussa
[Ensimmäinen ohjelma](./2-ensimmainen-ohjelma.md).

## Mihin ohjelmointia tarvitaan?

Ohjelmia on kaikkialla, myös siellä, missä niitä ei huomaa.

* **Puhelimen herätyskello.** Joku on kirjoittanut ohjeen: *jos kello on 7.15
  ja herätys on päällä ja tänään ei ole viikonloppu, soita ääntä, kunnes
  käyttäjä painaa nappia.* Ohje on lyhyt, mutta jokainen sana on tarkkaan
  harkittu: yksi puuttuva ehto, ja herätys soi lauantaiaamuna.
* **Peli.** Kun pelihahmo hyppää, ohjelma laskee kymmeniä kertoja sekunnissa,
  missä hahmo on, osuuko se lattiaan ja pitääkö sen pysähtyä. Tämän kurssin
  lopussa olet tehnyt itse pienen pelin, jossa tapahtuu juuri näin.
* **Tutkimus.** Biologi on mitannut 40 000 solun koon. Kuvaajan tekeminen
  jokaisesta koeasetelmasta erikseen taulukkolaskennalla veisi viikon; ohjelma
  tekee sen minuutissa ja samalla tavalla joka kerta.
* **Arjen automaatio.** Kansiossa on 500 lomakuvaa nimillä `IMG_4711.jpg`.
  Kymmenen rivin ohjelma nimeää ne uudelleen päivämäärän mukaan sillä aikaa,
  kun haet kahvia.

Yhteistä näille on, että ihminen on keksinyt *ohjeen* ja tietokone toistaa sitä
väsymättä. Ohjelmointi on siis ennen kaikkea ongelmanratkaisua. Ohjelmointikieli
on vain se tapa, jolla ratkaisu kirjoitetaan muistiin.

## Algoritmi eli ohje

*Algoritmi* on täsmällinen, vaiheittainen ohje jonkin tehtävän suorittamiseen.
Resepti on algoritmi. Reittiohje on algoritmi. Huonekalun kokoamisohje on
algoritmi (joskin toisinaan melko tulkinnanvarainen sellainen).

Kokeillaan: kirjoita ohje kahvin keittämiseen niin tarkasti, että sitä voisi
noudattaa henkilö, joka ei ole koskaan nähnyt kahvinkeitintä.

```text
1. Ota kahvinkeittimen vesisäiliö irti.
2. Täytä säiliö kylmällä vedellä neljän kupin merkkiin asti.
3. Laita säiliö takaisin paikalleen.
4. Laita suodatinpussi suodatinsuppiloon.
5. Mittaa suodatinpussiin neljä mittalusikallista kahvia.
6. Paina virtakytkintä.
7. Odota, kunnes keitin lopettaa porisemisen.
```

Huomaa muutama asia. Vaiheet suoritetaan *järjestyksessä*: jos virtakytkintä
painaa ennen veden lisäämistä, tulos on huono. Jokainen vaihe on niin pieni,
ettei sitä tarvitse selittää. Ja ohjeessa on silti aukkoja: mitä jos kahvi on
loppu? Mitä jos säiliössä on jo vettä? Ihminen paikkaa aukot itse. Tietokone ei
paikkaa mitään.

Ohjelmoinnissa algoritmit rakentuvat kolmesta perusrakenteesta, ja opit ne
kaikki tämän kurssin aikana:

* **Peräkkäisyys**: vaiheet suoritetaan yksi kerrallaan, järjestyksessä,
  kuten yllä.
* **Valinta**: *jos* kahvi on loppu, *niin* mene kauppaan, *muuten* jatka.
  Tähän tutustutaan luvussa [Ehtolauseet](../osa2/5-ehtolauseet.md).
* **Toisto**: *toista* "lisää mittalusikallinen kahvia", *kunnes* lusikallisia
  on neljä. Tähän tutustutaan luvussa
  [Toistolauseet](../osa4/4-toistolauseet.md).

Kun osaat nämä kolme ja opit pilkkomaan ison tehtävän pieniin osiin, osaat
ohjelmoida. Loppu on yksityiskohtia. Tosin yksityiskohtia on aika paljon.

## Ohjelma ja ohjelmointikieli

Tietokoneen sydän on *prosessori*, joka ymmärtää vain *konekieltä*: jonoja
ykkösiä ja nollia, joista kukin ryhmä tarkoittaa jotakin hyvin pientä
toimenpidettä, kuten "laske kaksi lukua yhteen" tai "siirry ohjeeseen numero
4711". Konekielinen ohjelma voisi näyttää suunnilleen tältä:

```text
10111000 00000001 00000000 00000000 00000000
10111011 00000010 00000000 00000000 00000000
00000001 11011000
```

Tämä ei ole kovin kutsuvaa luettavaa, eikä kukaan kirjoita ohjelmia näin
(enää). Sen sijaan käytetään *ohjelmointikieltä*, joka on suunniteltu ihmisen
kirjoitettavaksi ja luettavaksi. Sama asia C#-kielellä:

```csharp,ignore
int summa = 1 + 2;
```

Tuo ykkösten ja nollien jono ei ole siis satunnaista bittipuuroa, vaan (erään
prosessoriarkkitehtuurilla varustetun) tietokoneen näkökulmasta juuri se
komentojen sarja, joka laskee yhteen luvut 1 ja 2 ja tallentaa tuloksen
muistiin. Meidän kannaltamme ohjelmointikielellä ilmaistu komento on tietenkin
paljon helpompi ymmärtää ja tarvittaessa myös muuttaa. 

Ohjelmointikielellä kirjoitettua tekstiä kutsutaan *lähdekoodiksi*. Jotta
prosessori voisi suorittaa sen, lähdekoodi täytyy *kääntää* konekielelle.
Kääntämisen tekee ohjelma nimeltä *kääntäjä*. Kääntäjä on kuin pikkutarkka
äidinkielenopettaja: se ei päästä läpi yhtäkään puuttuvaa puolipistettä, mutta
kertoo aina täsmälleen, millä rivillä vika on. Tähän tutustutaan käytännössä
luvussa [Ensimmäinen ohjelma](./2-ensimmainen-ohjelma.md).

Ohjelmointikieliä on satoja. Tällä kurssilla käytetään **C#**-kieltä (lausutaan
"c sharp"), joka on Microsoftin kehittämä ja laajasti käytetty kieli. Sillä
tehdään esimerkiksi verkkopalveluita, Windows-sovelluksia ja pelejä: moni
Unity-pelimoottorilla tehty peli on kirjoitettu C#:lla. C#-ohjelmat tarvitsevat
toimiakseen *.NET*-ympäristön, joka sisältää kääntäjän ja suuren joukon valmista
koodia.

<details closed><summary><i class="bi bi-stars jyu-gold"></i> Valinnaista lisätietoa: Muita ohjelmointikieliä</summary>

Kun osaat yhden kielen, seuraavan oppiminen on paljon helpompaa: perusrakenteet
ovat samat, vain kirjoitusasu vaihtuu. Muutamia kieliä, joihin todennäköisesti
törmäät:

* **Java** muistuttaa C#:a hyvin paljon. Ohjelmointi 2 -kurssin jälkeen
  Java-koodi näyttää tutulta.
* **Python** on suosittu data-analyysissä ja tekoälyssä. Se on syntaksiltaan
  kevyempi, mutta ei pakota kertomaan muuttujien tyyppejä, mikä tekee isojen
  ohjelmien virheistä hankalampia löytää.
* **JavaScript** pyörii jokaisessa verkkoselaimessa; sillä tehdään
  verkkosivujen toiminnallisuus.
* **C** ja **C++** ovat lähempänä konetta. Niillä kirjoitetaan
  käyttöjärjestelmiä, pelimoottoreita ja kaikkea, missä nopeus on kaikki
  kaikessa.

</details>

## Kirjasto

Kukaan ei kirjoita ohjelmaa tyhjästä. Tekstin tulostaminen näytölle,
tiedoston lukeminen, neliöjuuren laskeminen: nämä on ohjelmoitu jo kerran, ja
se koodi on koottu *kirjastoiksi*, joita jokainen ohjelma voi käyttää.
Kirjasto on siis valmista koodia, jota kutsutaan omasta ohjelmasta.

.NET-ympäristön mukana tulee valtava kirjasto. Tällä kurssilla käytetään lisäksi
**Jypeli**-kirjastoa, joka on Jyväskylän yliopistossa kehitetty pelimoottori.
Jypeli hoitaa ikkunan avaamisen, piirtämisen, fysiikan ja näppäimistön
lukemisen, jotta sinä voit keskittyä siihen, mitä pelissä tapahtuu.
Ensimmäinen Jypeli-ohjelma tehdään luvussa
[Ensimmäinen graafinen ohjelma](./4-ensimmainen-graafinen-ohjelma.md).

## Ohjelmoijan työtapa

Ohjelmointi ei ole sitä, että kirjoitetaan ohjelma valmiiksi ja painetaan
nappia. Se on kehä, jota kierretään monta kertaa:

```bob
  .-----------.      .----------.      .-------.
  | Kirjoita  |----->|  Käännä  |----->|  Aja  |
  '-----------'      '----------'      '-------'
        ^                 |                |
        |  käännösvirhe   |   väärä tulos  |
        '-----------------'----------------'
```

Virheet eivät ole merkki siitä, että jokin meni pieleen. Ne ovat työtapa.
Kokenutkin ohjelmoija näkee virheilmoituksia kymmeniä kertoja päivässä. Ero
aloittelijaan on siinä, että hän lukee ilmoituksen rauhassa ja tietää, mistä
etsiä. Tällä kurssilla opit saman.

Kaksi neuvoa, jotka säästävät hermoja:

* **Etene pienin askelin.** Kirjoita muutama rivi, käännä, aja. Jos jokin
  menee rikki, tiedät, että vika on niissä muutamassa rivissä.
* **Lue virheilmoitus.** Se ei ole moite vaan vihje. Siinä lukee rivinumero
  ja usein suoraan se, mitä puuttuu.

Kurssin käytännöt (tehtävät, harjoitustyö, tentti) on kuvattu sivulla
[Suorittaminen](../suorittaminen.md), ja koodin kirjoitusasun ohjeet
[Tyylioppaassa](../tyyliopas.md). Näihin kannattaa tutustua jo nyt.

## Yhteenveto

* Algoritmi on täsmällinen vaiheittainen ohje. Ohjelma on tietokoneelle
  kirjoitettu algoritmi.
* Ohjelmointikieli (tällä kurssilla C#) on ihmisen luettavaksi tarkoitettu
  tapa kirjoittaa ohjelma; kääntäjä muuntaa sen konekielelle.
* Kirjasto on valmista koodia, jota oma ohjelma käyttää. Jypeli on
  pelikirjasto.
* Ohjelmointi on kirjoittamisen, kääntämisen, ajamisen ja korjaamisen kehä.

## 🤔 Testaa tietosi

Päätä vastaus ensin ja avaa se vasta sitten. Pisteitä ei jaeta, mutta hämärät
kohdat paljastuvat.

<visa>

**Totta vai tarua?**

<details data-vastaus="tarua"><summary>1. Algoritmi ja tietokoneohjelma ovat sama asia.</summary>

**Tarua.** Algoritmi on mikä tahansa täsmällinen, vaiheittainen ohje, vaikka
kahvinkeitto-ohje paperilla. Ohjelma on algoritmi, joka on kirjoitettu
ohjelmointikielellä tietokoneen suoritettavaksi.

</details>

<details data-vastaus="tarua"><summary>2. Tietokoneen prosessori suorittaa C#-lähdekoodia sellaisenaan.</summary>

**Tarua.** Prosessori ymmärtää vain konekieltä. Kääntäjä muuntaa lähdekoodin
siihen muotoon, ja vasta käännetty ohjelma voidaan ajaa.

</details>

<details data-vastaus="totta"><summary>3. Jypeli on kirjasto: valmista koodia, jota oma ohjelma käyttää.</summary>

**Totta.** Ikkuna, piirtäminen ja fysiikka tulevat Jypelistä valmiina. Itse
kirjoitat vain sen osan, joka tekee pelistä juuri sinun pelisi.

</details>

**Monivalinta.** Yksi vaihtoehto on oikein.

**4.** Mikä seuraavista on kääntäjän tehtävä?

a) Korjata lähdekoodin kirjoitusvirheet automaattisesti\
b) Muuntaa lähdekoodi konekieleksi\
c) Avata ikkuna ja piirtää siihen pallo\
d) Keksiä algoritmi ohjelmoijan puolesta

<details data-vastaus="b"><summary>Näytä vastaus</summary>

**b.** Kääntäjä muuntaa lähdekoodin konekieleksi. Virheitä se ei korjaa, vaan
huomauttaa niistä äidinkielenopettajan tarkkuudella. Ikkunan ja pallon hoitaa
kirjasto, ja algoritmin keksiminen on ohjelmoijan hommaa.

</details>

**5.** Kahvinkeitto-ohjeessa lukee: "Lisää mittalusikallinen kahvia, kunnes
lusikallisia on neljä." Mikä ohjelmoinnin perusrakenne tämä on?

a) Peräkkäisyys\
b) Valinta\
c) Toisto\
d) Kääntäminen

<details data-vastaus="c"><summary>Näytä vastaus</summary>

**c.** Sana *kunnes* paljastaa toiston: samaa vaihetta toistetaan, kunnes ehto
täyttyy. Peräkkäisyys olisi vaiheita järjestyksessä ja valinta
*jos–niin–muuten*-rakenne. Kääntäminen ei ole algoritmin rakenne lainkaan.

</details>

</visa>

## Tehtävät

<!-- Vaiheessa B: T-tehtävä "Kirjoita algoritmi" (ohje arkiaskareeseen, esim.
     voileivän tekeminen, vähintään 8 vaihetta) ja lyhyt monivalinta
     käsitteistä (algoritmi, lähdekoodi, kääntäjä, kirjasto). -->
