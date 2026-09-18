# <span class="part-icon">🔢</span>Tiedon esittäminen tietokoneessa

Tietokoneen muistiin tallennetaan lukuja kaksijärjestelmässä eli ns. _binäärimuodossa_. Tietokoneen muisti koostuu biteistä, jotka voivat olla joko 0 tai 1. Myös lähdekoodimme tekstin ja kaiken muun tiedon on oltava lopulta bittimuodossa, jotta tietokone pystyy käsittelemään sitä.

Syy, miksi tietokoneet käyttävät juuri binäärimuotoa, piilee tietokoneiden rakenteessa: prosessorit ja muistit on rakennettu kytkimistä, jotka pystyvät luotettavasti erottamaan kaksi tilaa, kuten jännitteisen ja jännitteettömän tilan. Nämä kaksi tilaa voidaan esittää numeroilla 0 ja 1. Vaikka tällainen esitystapa saattaa vaikuttaa yksinkertaiselta tai jopa kömpelöltä, se on erittäin luotettava ja tehokas tapa käsitellä tietoa sähköisissä järjestelmissä.

On hyvä ymmärtää, miten tekstiä, lukuja ja muuta informaatiota esitetään tietokoneessa, jotta voi paremmin hahmottaa ohjelmointia ja tietokoneen toimintaa. Informaation tallennus- ja esitystapa kytkeytyy esimerkiksi ohjelman suorituskykyyn. Myöhemmin opinnoissa tulet törmäämään myös tietoturvaan liittyviin asioihin, joissa tiedon esitystavalla on merkitystä.

## Kokonaislukujen esittäminen binäärimuodossa

Siinä missä kymmenjärjestelmässä (kutsutaan usein myös desimaalijärjestelmäksi) on kymmenen eri numeroa, 0–9, kaksijärjestelmässä on vain kaksi eri numeroa: 0 ja 1. Numeron paikka luvussa määrittää sen arvon: esimerkiksi 345 tarkoittaa $3 \cdot 10^2 + 4 \cdot 10^1 + 5 \cdot 10^0$. Voidaan ajatella, että jokaisella numerolla on paikka, joka kertoo sen painoarvon kymmenen potenssina (alkaen oikealta, ensimmäinen paikka on 0). Esimerkiksi luvun 345 kohdalla numero 5 on paikassa 0, numero 4 paikassa 1 ja numero 3 paikassa 2.

Vastaava idea toimii myös kaksijärjestelmässä. Kaksijärjestelmässä numeron paikka määrittää sen arvon kahden potenssina: esimerkiksi binääriluku `101` tarkoittaa $1 \cdot 2^2 + 0 \cdot 2^1 + 1 \cdot 2^0 = 5$ kymmenjärjestelmässä.

Kun luku halutaan tallentaa tietokoneeseen, on ensiksi sovittava, kuinka monta bittiä luvun esittämiseen käytetään. Käytämme alla olevissa esimerkeissä 8-bittisiä lukuja, jotta luvut pysyvät yksinkertaisina.

Esimerkiksi luku 7 on 8-bittisessä binäärimuodossa `00000111`, koska

$7 = 0 \cdot 2^7 + 0 \cdot 2^6 + 0 \cdot 2^5 + 0 \cdot 2^4 + 0 \cdot 2^3 + 1 \cdot 2^2 + 1 \cdot 2^1 + 1 \cdot 2^0$

Negatiivisten lukujen esittämiseen käytetään yleisesti ns. **kahden komplementin** menetelmää. Siinä luvun vastaluku saadaan kääntämällä ensin luvun kaikki bitit (0 -> 1 ja 1 -> 0) ja lisäämällä sitten tulokseen 1.

Esimerkiksi luku -7 on kahden komplementin esityksessä `11111001`. Se saadaan luvusta 7 seuraavasti:

```
7 = 00000111
// Käännetään bitit
~7 = 11111000
// Lisätään 1
~7 + 1 = 11111001
```

Kahden komplementin esityksessä ylin eli vasemmanpuoleisin bitti kertoo luvun etumerkin: jos se on 1, luku on negatiivinen. 8-bittisellä luvulla voidaan siten esittää 256 eri arvoa eli kokonaisluvut -128:sta 127:ään. Jos laskutoimituksen tulos ylittää lukualueen ylärajan, se "pyörähtää ympäri" lukualueen alkuun: esimerkiksi 127 + 1 antaa 8-bittisenä tuloksen -128.

Käytännössä 8-bittisiä kokonaislukuja käytetään harvemmin; useimmiten käytetään 32-bittisiä (C#:ssa `int`) tai 64-bittisiä (`long`) lukuja. Sama periaate pätee kuitenkin myös niihin: esimerkiksi `int`-tyypin pienin arvo on $-2^{31}$ ja suurin $2^{31} - 1$ eli 2 147 483 647.

## Desimaalilukujen esittäminen binäärimuodossa

Desimaaliluvut (C#:ssa `double` ja `float`) esitetään tietokoneessa _liukulukuina_ IEEE 754 -standardin mukaisesti. Liukuluvut ovat yleensä likiarvoja: vain osa luvuista, kuten 1.0 tai 0.5, voidaan esittää täsmällisesti. Liukuluvuilla on myös _erikoisarvoja_, kuten `NaN` (Not a Number) ja `Infinity` (ääretön).

Esimerkiksi lukua 0.1 ei voida esittää täsmällisesti liukulukuna, koska kaksijärjestelmässä sen esitys on päättymätön, samaan tapaan kuin luvun 1/3 esitys 0.333... kymmenjärjestelmässä. Tästä syystä esimerkiksi lauseke `0.1 + 0.2 == 0.3` on C#:ssa `false`, eikä liukulukuja kannata verrata toisiinsa `==`-operaattorilla.

## Tekstin esittäminen binäärimuodossa

Tekstin esittämiseen tietokoneessa on olemassa erilaisia merkistöjä ja merkistökoodauksia. Yksi niistä on **ASCII** (engl. *American Standard Code for Information Interchange*).

ASCII on sopimus, joka määrittää 128 merkille (mm. englannin aakkoset A–Z ja a–z, numerot 0–9 sekä yleisimmät välimerkit) yksikäsitteisen numeroarvon väliltä 0–127. Tämän numeroarvon avulla merkki voidaan esittää binäärimuodossa, tallentaa tietokoneen muistiin ja myös lukea sieltä. Esimerkiksi kirjain 'A' on ASCII-koodissa 65, 'B' on 66 jne.

ASCII on yhä monien modernien koodausten perusosa. (*Koodauksella* tarkoitetaan tässä yhteydessä merkistön esitystapaa tietokoneessa.) Pelkkä ASCII on kuitenkin rajoittunut: siitä puuttuvat esimerkiksi ä- ja ö-kirjaimet. Nykyisin oletuskoodaus on useimmiten **UTF-8**, joka on Unicode-standardin mukainen koodaus. Unicode kattaa käytännössä kaikki maailman kirjoitusjärjestelmät, ja UTF-8 on täysin taaksepäin yhteensopiva ASCII:n kanssa: ASCII-merkit tallennetaan UTF-8:ssa täsmälleen samoina yhden tavun arvoina, ja muut merkit vievät 2–4 tavua. Ohjelmakoodin kirjoittamisessa käytetään edelleen usein pelkkiä ASCII-merkkejä, vaikkakin Unicode-merkit ovat sallittuja monissa ohjelmointikielissä, myös C#:ssa.

Unicode-merkkejä on huomattavasti enemmän kuin ASCII-merkkejä: standardiin on määritelty yli 150 000 merkkiä, ja tilaa on yli miljoonalle. Unicode-merkin numeroarvoa kutsutaan _koodipisteeksi_, ja se merkitään yleensä kuusitoistajärjestelmän lukuna eli ns. heksadesimaalilukuna, kuten `U+0041` (luku 65 eli kirjain 'A').

## Tehtävät

<!-- Tehtävät lisätään vaiheessa B. -->
