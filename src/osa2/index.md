# Osa 2: Muuttujat, syöte ja funktiot

Ohjelma, joka laskee aina samoilla luvuilla, on hyödyllinen vain kerran.
Muuttujiin tallennetaan arvoja, joita voi lukea käyttäjältä ja muuttaa
ohjelman aikana, ja operaattoreilla niistä lasketaan uusia arvoja. Toistuva
laskutoimitus nimetään funktioksi, jota voi kutsua yhä uudelleen eri
arvoilla.

> [!Osaamistavoitteet]
> Tämän osan jälkeen
>
> * osaat määritellä muuttujia, valita niille sopivan tietotyypin ja sijoittaa
>   niihin arvoja
> * osaat lukea käyttäjältä tekstiä ja lukuja
> * tiedät, miten tietotyyppi vaikuttaa laskun tulokseen, ja osaat muuntaa
>   arvon tyypistä toiseen
> * osaat muodostaa totuusarvoisia lausekkeita vertailu- ja loogisilla
>   operaattoreilla
> * erotat lauseen ja lausekkeen toisistaan
> * osaat kirjoittaa funktion, joka saa tietoa parametreina ja palauttaa arvon,
>   ja käyttää sen kutsua lausekkeessa
> * tunnistat ohjelman osat (luokka, `Main`, lauseet, lohkot) ja tiedät, missä
>   järjestyksessä ne suoritetaan

## Luennot

Luentojen numerointi on kevään 2026 toteutuksen mukainen. Uuden toteutuksen
luennot päivitetään tähän.

* [Luento 3: Muuttujat](../luennot/luento3.md)
* [Luento 4: Aliohjelmat](../luennot/luento4.md)
* [Luento 5: Muuttujat, operaattorit, aliohjelman paluuarvo](../luennot/luento5.md)
* [Luento 6: Aliohjelman kuormittaminen, ehtolauseet](../luennot/luento6.md)
* [Luento 11: Tyyppimuunnokset, kertaus operaattoreista](../luennot/luento11.md)

## Käsitteet

| Käsite | Englanniksi | Selitys |
| ------ | ----------- | ------- |
| [argumentti](./4-funktiot.md) | *argument* | kutsussa aliohjelmalle annettava arvo |
| [esittelyrivi](./4-funktiot.md) | *method header* | aliohjelman määrittelyn ensimmäinen rivi: paluuarvon tyyppi, nimi ja parametrit |
| [funktio](./4-funktiot.md) | *function* | aliohjelma, joka palauttaa arvon |
| [kuormittaminen](./4-funktiot.md) | *overloading* | samannimiset aliohjelmat, joiden parametrilistat eroavat toisistaan |
| [lauseke](./3-lauseet-ja-lausekkeet.md) | *expression* | koodin osa, jolla on arvo ja tyyppi |
| [looginen operaattori](./2-operaattorit.md) | *logical operator* | operaattori, joka yhdistää totuusarvoja (JA, TAI, EI) |
| [metodi](./4-funktiot.md) | *method* | olioon liittyvä aliohjelma |
| [muuttuja](./1-muuttujat-ja-tietotyypit.md) | *variable* | nimetty paikka, johon tallennetaan yksi arvo |
| [nimiavaruus](./5-ohjelman-rakenne.md) | *namespace* | luokkien ryhmä, ikään kuin kansio luokille |
| [paluuarvo](./4-funktiot.md) | *return value* | arvo, jonka funktio antaa `return`-lauseella takaisin kutsujalle |
| [parametri](./4-funktiot.md) | *parameter* | aliohjelman muuttuja, joka saa arvonsa kutsun argumentista |
| [pääohjelma](./5-ohjelman-rakenne.md) | *main method* | `Main`-aliohjelma, josta ohjelman suoritus alkaa |
| [sijoituslause](./1-muuttujat-ja-tietotyypit.md) | *assignment statement* | lause, joka tallentaa lausekkeen arvon muuttujaan |
| [tietotyyppi](./1-muuttujat-ja-tietotyypit.md) | *data type* | määrittää, millaisia arvoja muuttujaan voi tallentaa |
| [totuusarvo](./1-muuttujat-ja-tietotyypit.md) | *boolean* | arvo `true` (tosi) tai `false` (epätosi), tyyppi `bool` |
| [tynkä](./4-funktiot.md) | *stub* | keskeneräinen mutta kääntyvä funktio, joka palauttaa jonkin oikean tyyppisen arvon |
| [tyyppimuunnos](./2-operaattorit.md) | *cast* | arvon muuntaminen tyypistä toiseen, esimerkiksi `(double)x` |
| [vakio](./1-muuttujat-ja-tietotyypit.md) | *constant* | `const`-avainsanalla määritelty arvo, joka ei voi muuttua |
| [vertailuoperaattori](./2-operaattorit.md) | *comparison operator* | operaattori, joka vertaa kahta arvoa ja tuottaa totuusarvon |
