# Mitä ohjelmointi on?

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
* **Arjen automaatio.** Kansiossa on 500 lomakuvaa, joiden nimet ovat muotoa `IMG_4711.jpg`.
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
loppu? Mitä jos säiliössä on jo vettä? Ihminen paikkaa tietenkin aukot itse,
mutta tietokone ei
paikkaa mitään.

Ohjelmoinnissa algoritmien suorittaminen rakentuu kolmesta perusrakenteesta,
ja opit ne kaikki tämän kurssin aikana:

* **Peräkkäisyys**: vaiheet suoritetaan yksi kerrallaan, järjestyksessä,
  kuten yllä.
* **Valinta**: *jos* kahvi on loppu, *niin* mene kauppaan, *muuten* jatka.
  Tähän tutustutaan luvussa [Ehtolauseet](../osa2/3-ehtolauseet.md).
* **Toisto**: *toista* "lisää mittalusikallinen kahvia", *kunnes* lusikallisia
  on neljä. Tähän tutustutaan luvussa
  [Toistolauseet](../osa4/1-toistolauseet.md). Toiston voi toteuttaa
  viittaamalla itseensä, jolloin puhutaan
  [rekursiosta](../osa7/1-rekursio.md).

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

Tuo ykkösten ja nollien jono ei ole siis satunnaista bittipuuroa, vaan erään tietokoneen näkökulmasta juuri se
komentojen sarja, joka laskee yhteen luvut 1 ja 2 ja tallentaa tuloksen
muistiin. Meidän kannaltamme ohjelmointikielellä ilmaistu komento on tietenkin
paljon helpompi ymmärtää ja tarvittaessa myös muuttaa.

<details closed><summary><i class="bi bi-stars jyu-gold"></i> Valinnaista lisätietoa: Mitä konekielinen ohjelma tarkoittaa?</summary>

Esimerkki on tavallisen PC-prosessorin (x86) konekieltä. Jokainen kahdeksan
bitin ryhmä on yksi *tavu*, ja ohjelmassa on kolme käskyä, yksi kullakin
rivillä. Käskyt käsittelevät
[*rekistereitä*](https://fi.wikipedia.org/wiki/Rekisteri_%28tietokonetekniikka%29
"Wikipedia: Rekisteri (tietokonetekniikka)"), jotka ovat prosessorin sisäisiä,
hyvin nopeita muistipaikkoja. Tässä käytetään rekistereitä nimeltä `eax` ja
`ebx`.

* **Rivi 1.** Ensimmäinen tavu `10111000` on käskyn koodi: "sijoita
  rekisteriin `eax` luku, joka tulee seuraavaksi". Seuraavat neljä tavua ovat
  tuo luku eli 1. Luvulle on varattu 32 bittiä, ja vähiten merkitsevä tavu
  kirjoitetaan ensin. Siksi ykkönen on heti käskyn koodin jälkeen ja loput
  tavut ovat nollia.
* **Rivi 2.** Sama uudelleen, mutta käskyn koodi `10111011` tarkoittaa
  rekisteriä `ebx`, ja sijoitettava luku on 2 (binäärilukuna `00000010`).
* **Rivi 3.** Tavu `00000001` on yhteenlaskukäsky, ja `11011000` kertoo, mitkä
  rekisterit lasketaan yhteen: "lisää rekisterin `ebx` arvo rekisteriin
  `eax`". Tämän jälkeen rekisterissä `eax` on luku 3.

Käytännössä konekieli kirjoitetaan *assembly-kielellä* (suomeksi myös *symbolinen konekieli*), jossa jokaisella
käskyllä on lyhyt nimi. Sama ohjelma assemblyllä:

```text
mov eax, 1
mov ebx, 2
add eax, ebx
```

Assembly vastaa konekieltä käsky käskyltä, joten se on edelleen sidottu yhteen
prosessorityyppiin. Esimerkiksi puhelimen ARM-prosessorissa samat kolme
toimenpidettä kirjoitettaisiin aivan eri bittijonoilla. Tämä on yksi syy
käyttää niin kutsuttua korkean tason ohjelmointikieltä: rivi `int summa = 1 + 2;` on sama kaikilla
koneilla, ja kääntäjä huolehtii siitä, millaista konekieltä kullekin
prosessorille tuotetaan.

</details>

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
  | Kirjoita  |----->|  "Käännä"|----->|  Aja  |
  '-----------'      '----------'      '-------'
        ^                 |                |
        |  "käännösvirhe" |  "väärä tulos" |
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

## Yhteenveto

* Algoritmi on täsmällinen vaiheittainen ohje. Ohjelma on tietokoneelle
  kirjoitettu algoritmi.
* Ohjelmointikieli (tällä kurssilla C#) on ihmisen luettavaksi tarkoitettu
  tapa kirjoittaa ohjelma; kääntäjä muuntaa sen konekielelle.
* Kirjasto on valmista koodia, jota oma ohjelma käyttää. Jypeli on
  pelikirjasto.
* Ohjelmointi on kirjoittamisen, kääntämisen, ajamisen ja korjaamisen kehä.

## Testaa tietosi

Valitse vastaus, niin näet heti, menikö se oikein ja miksi. Pisteitä ei jaeta,
mutta huomaat, mitä asioita kannattaa vielä kerrata.

<visa>

**Totta vai tarua?**

<vaittama vastaus="tarua">
Algoritmi ja tietokoneohjelma ovat sama asia.
<perustelu>
**Tarua.** Algoritmi on mikä tahansa täsmällinen, vaiheittainen ohje, vaikka
kahvinkeitto-ohje paperilla. Ohjelma on algoritmi, joka on kirjoitettu
ohjelmointikielellä tietokoneen suoritettavaksi.
</perustelu>
</vaittama>

<vaittama vastaus="tarua">
Tietokoneen prosessori suorittaa C#-lähdekoodia sellaisenaan.
<perustelu>
**Tarua.** Prosessori ymmärtää vain konekieltä. Kääntäjä muuntaa lähdekoodin
siihen muotoon, ja vasta käännetty ohjelma voidaan ajaa.
</perustelu>
</vaittama>

<vaittama vastaus="totta">
Jypeli on kirjasto: valmista koodia, jota oma ohjelma käyttää.
<perustelu>
**Totta.** Ikkuna, piirtäminen ja fysiikka tulevat Jypelistä valmiina. Itse
kirjoitat vain sen osan, joka tekee pelistä juuri sinun pelisi.
</perustelu>
</vaittama>

**Monivalinta.** Yksi vaihtoehto on oikein.

<kysymys>
Mikä seuraavista on kääntäjän tehtävä?

- [ ] Korjata lähdekoodin kirjoitusvirheet automaattisesti
- [x] Muuntaa lähdekoodi konekieleksi
- [ ] Avata ikkuna ja piirtää siihen pallo
- [ ] Keksiä algoritmi ohjelmoijan puolesta

<perustelu>
**b.** Kääntäjä muuntaa lähdekoodin konekieleksi. Virheitä se ei korjaa, vaan
huomauttaa niistä äidinkielenopettajan tarkkuudella. Ikkunan ja pallon hoitaa
kirjasto, ja algoritmin keksiminen on ohjelmoijan hommaa.
</perustelu>
</kysymys>

<kysymys>
Kahvinkeitto-ohjeessa lukee: "Lisää mittalusikallinen kahvia, kunnes
lusikallisia on neljä." Mikä ohjelmoinnin perusrakenne tämä on?

- [ ] Peräkkäisyys
- [ ] Valinta
- [x] Toisto
- [ ] Kääntäminen

<perustelu>
**c.** Sana *kunnes* paljastaa toiston: samaa vaihetta toistetaan, kunnes ehto
täyttyy. Toistossakin on siis ehto, mutta se ratkaisee vain, palataanko vaiheen
alkuun. Valinnassa ehto valitsee kahden eri haaran väliltä, eikä mitään
toisteta. Peräkkäisyys olisi vaiheita järjestyksessä. Kääntäminen ei ole
algoritmin rakenne lainkaan.
</perustelu>
</kysymys>

</visa>

## Tehtävät

<!-- Vaiheessa B: T-tehtävä "Kirjoita algoritmi" (ohje arkiaskareeseen, esim.
     voileivän tekeminen, vähintään 8 vaihetta) ja lyhyt monivalinta
     käsitteistä (algoritmi, lähdekoodi, kääntäjä, kirjasto). -->
