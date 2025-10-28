# <span class="part-icon">🔢</span>Tiedon esittäminen tietokoneessa

Tietokoneen muistiin tallennetaan lukuja kaksijärjestelmässä eli ns. _binäärimuodossa_. Tietokoneen muisti koostuu biteistä, jotka voivat olla joko 0 tai 1. Myös lähdekoodimme teksti ja kaikki tieto on oltava lopulta bittimuodossa, jotta tietokone pystyy käsittelemään sitä.

Syy, miksi tietokoneet käyttävät juuri binäärimuotoa piilee tietokoneiden rakenteessa: prosessorit ja muistit on rakennettu kytkimistä, jotka pystyvät luotettavasti erottamaan kaksi tilaa, kuten jännitteisen ja jännitteettömän tilan, jotka voidaan esittää binääriluvuilla 0 ja 1. Vaikka tällainen esitystapa saattaa vaikuttaa yksinkertaiselta tai jopa kömpelöltä, se on erittäin luotettava ja tehokas tapa käsitellä tietoa sähköisissä järjestelmissä.

On hyvä ymmärtää, miten tekstiä, lukuja ja muuta informaatiota esitetään tietokoneessa, jotta voi paremmin hahmottaa ohjelmointia ja tietokoneen toimintaa. Informaation tallennus- ja esitystapa kytkeytyy esimerkiksi ohjelman suorituskykyyn. Myöhemmin opinnoissa tulet törmäämään myös tietoturvaan liittyviin asioihin, joissa tiedon esitystavalla on merkitystä.

## Kokonaislukujen esittäminen binäärimuodossa

Siinä missä kymmenjärjestelmässä (kutsutaan usein myös desimaalijärjestelmäksi) on kymmenen eri numeroa, 0-9, kaksijärjestelmässä on vain kaksi eri numeroa: 0 ja 1. Luvun paikka määrittää sen arvon: esimerkiksi 345 tarkoittaa 3 \* 10² + 4 \* 10¹ + 5 \* 10⁰. Voidaan ajatella, että jokaisella luvulla on paikka, joka kertoo sen arvon potenssina kymmenelle (alkaen oikealta, ensimmäinen paikka on 0). Esimerkiksi luvun 345 kohdalla luku 5 on paikassa 0, luku 4 paikassa 1 ja luku 3 paikassa 2. 

Vastaava idea toimii myös kaksijärjestelmässä. Kaksijärjestelmässä luvun paikka määrittää sen arvon kahden potenssina: esimerkiksi binääriluku `101` tarkoittaa 1*2² + 0*2¹ + 1*2⁰ = 5 kymmenjärjestelmässä. 

Kun luku halutaan tallentaa tietokoneeseen, on ensiksi on sovittava kuinka monta bittiä on käytetään luvun esittämiseen. Käytämme alla olevissa esimerkeissä 8-bittisiä lukuja, jotta luvut pysyvät yksinkertaisina.

Esimerkiksi luku 7 on 8-bittisessä binäärimuodossa `00000111`, koska

```7 = 0*2^7 + 0*2^6 + 0*2^5 + 0*2^4 + 0*2^3 + 1*2^2 + 1*2^1 + 1*2^0```

Negatiivisten lukujen esittämiseen käytetään yleisesti nk. **kahden komplementin** menetelmää. Kahden komplementin menetelmässä negatiivinen luku saadaan kääntämällä ensin luvun kaikki bitit (0 -> 1 ja 1 -> 0) ja lisäämällä sitten tulokseen 1.

Negatiivinen luku -7 voidaan esittää kahden komplementin avulla lukuna `11111001`. Luku saadaan seuraavasti:

```
7 = 00000111
// Käänteisluku
~7 = 11111000
// Lisätään 1
~7 + 1 = 11111001
```

Tosiasiassa 8-bittisiä lukuja käytetään harvoin, ja useimmiten käytetään 32-bittisiä (C#:ssa `int`) tai 64-bittisiä (`long`) lukuja. Vastaava ajatus pätee kuitenkin myös näihin suurempibittisiin lukuihin.

## Desimaalilukujen esittäminen binäärimuodossa

Desimaaliluvut esitetään tietokoneessa _liukulukuna_ IEEE 754 -standardin mukaisesti. Liukuluvut voivat olla myös _erikoisarvoja_, kuten `NaN` (Not a Number) ja `Infinity`. Liukuluvut ovat likiarvoja, vaikkakin käytännössä jotkin niistä ovat tarkkoja arvoja (kuten luku 1.0).

Esimerkiksi lukua 0.1 ei voida esittää täsmällisesti liukulukuna, koska kaksiarvoisessa järjestelmässä 0.1 on äärettömän pitkä desimaaliluku.

## Tekstin esittäminen binäärimuodossa

Tekstin esittämiseen tietokoneessa on olemassa erilaisia merkistöjä ja merkistökoodauksia. Yksi niistä on **ASCII** (engl. *American Standard Code for Information Interchange*).

ASCII on sopimus, joka määrittää 128 merkille (mm. aakkoset a-z ja numerot 0-9) yksikäsitteisen numeroarvon väliltä 0-127. Tämän numeroarvon avulla merkki voidaan esittää binäärimuodossa, tallentaa tietokoneen muistiin ja myös lukea sieltä. Esimerkiksi kirjain 'A' on ASCII-koodissa 65, 'B' on 66 jne.

ASCII-koodi on yhä kaikkien modernien koodausten perusosa. (*Koodauksella* tarkoitetaan tässä yhteydessä merkistön esitystapaa tietokoneessa.) Pelkkä ASCII on kuitenkin sinänsä rajoittunut. Nykyisin oletuskoodaus on useimmiten UTF-8 (Unicode-standardi), joka on taaksepäin täysin yhteensopiva ASCII:n kanssa, joka sisältää käytännössä kaikki maailman kirjoitusjärjestelmät. Ohjelmakoodin kirjoittamisessa käytetään edelleen usein 7-bittisiä ASCII-merkkejä, vaikkakin Unicode-merkit ovat sallittuja monissa ohjelmointikielissä. 

Unicode-merkkien määrä on valtava verrattuna ASCII-koodiin: niitä on yli miljoona. Unicode-merkit esitetään yleensä 16-järjestelmän lukuna, eli ns. heksadesimaalina, kuten `U+0041` (luku 65, eli kirjain 'A').

## Tehtävät

