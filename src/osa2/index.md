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

Päivitetään lähempänä toteutusta.

## Käsitteet

Tässä osassa esitellään seuraavat käsitteet. Käsitteen linkki vie
kohtaan, jossa siitä puhutaan ensimmäisen kerran. Koko kirjan käsitteet
ovat [sanastossa](../sanasto.md).

| Käsite | Englanniksi | Selitys |
| ------ | ----------- | ------- |
| [argumentti](./4-funktiot.md#kutsu-mitä-sisään-mitä-ulos) | *argument* | kutsussa aliohjelmalle annettava arvo |
| [esittelyrivi](./4-funktiot.md#oma-funktio) | *header* | aliohjelman määrittelyn ensimmäinen rivi: paluuarvon tyyppi, nimi ja parametrit |
| [funktio](./4-funktiot.md) | *function* | aliohjelma, joka palauttaa arvon |
| [kuormittaminen](./4-funktiot.md#kuormittaminen) | *overloading* | samannimiset aliohjelmat, joiden parametrilistat eroavat toisistaan |
| [lauseke](./3-lauseet-ja-lausekkeet.md#lauseke) | *expression* | koodin osa, jolla on arvo ja tyyppi |
| [looginen operaattori](./2-operaattorit.md#loogiset-operaattorit) | *logical operator* | operaattori, joka yhdistää totuusarvoja (JA, TAI, EI) |
| [metodi](./4-funktiot.md#tyypillisiä-virheitä) | *method* | olioon liittyvä aliohjelma |
| [muuttuja](./1-muuttujat-ja-tietotyypit.md) | *variable* | nimetty paikka, johon tallennetaan yksi arvo |
| [nimiavaruus](./5-ohjelman-rakenne.md#using-lause-ja-nimiavaruudet) | *namespace* | luokkien ryhmä, ikään kuin kansio luokille |
| [paluuarvo](./4-funktiot.md#kutsu-mitä-sisään-mitä-ulos) | *return value* | arvo, jonka funktio antaa `return`-lauseella takaisin kutsujalle |
| [parametri](./4-funktiot.md#oma-funktio) | *parameter* | aliohjelman muuttuja, joka saa arvonsa kutsun argumentista |
| [pääohjelma](./5-ohjelman-rakenne.md#yksinkertaisen-ohjelman-osat) | *main method* | `Main`-aliohjelma, josta ohjelman suoritus alkaa |
| [sijoituslause](./1-muuttujat-ja-tietotyypit.md#arvon-sijoittaminen-ja-muuttaminen) | *assignment statement* | lause, joka tallentaa lausekkeen arvon muuttujaan |
| [tietotyyppi](./1-muuttujat-ja-tietotyypit.md#muuttujan-määrittely) | *data type* | määrittää, millaisia arvoja muuttujaan voi tallentaa |
| [totuusarvo](./1-muuttujat-ja-tietotyypit.md#muuttujan-määrittely) | *boolean* | arvo `true` (tosi) tai `false` (epätosi), tyyppi `bool` |
| [tynkä](./4-funktiot.md#kutsusta-määrittelyyn) | *stub* | keskeneräinen mutta kääntyvä funktio, joka palauttaa jonkin oikean tyyppisen arvon |
| [tyyppimuunnos](./2-operaattorit.md#tyyppimuunnokset) | *cast* | arvon muuntaminen tyypistä toiseen, esimerkiksi `(double)x` |
| [vakio](./1-muuttujat-ja-tietotyypit.md#vakiot) | *constant* | `const`-avainsanalla määritelty arvo, joka ei voi muuttua |
| [vertailuoperaattori](./2-operaattorit.md#vertailuoperaattorit) | *comparison operator* | operaattori, joka vertaa kahta arvoa ja tuottaa totuusarvon |
