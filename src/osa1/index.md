# Osa 1: Ensimmäinen ohjelma

Ohjelmointi on ohjeiden kirjoittamista tietokoneelle. Ensimmäinen oma
ohjelma syntyy jo muutamasta rivistä. Aluksi kirjoitetaan C#-ohjelma, joka
tulostaa tekstiä ja laskutoimitusten tuloksia, sitten asennetaan
kehitysympäristö ja tehdään ensimmäinen graafinen ohjelma Jypeli-kirjastolla.

> [!Osaamistavoitteet]
> Tämän osan jälkeen
>
> * osaat selittää omin sanoin, mitä algoritmi, ohjelma ja ohjelmointikieli ovat
> * osaat kirjoittaa, kääntää ja suorittaa tekstiä tulostavan C#-ohjelman
> * osaat laskea ohjelmassa aritmeettisilla operaattoreilla ja tiedät, miten
>   kokonaislukujen jako eroaa liukulukujen jaosta
> * osaat asentaa kehitysympäristön ja luoda siihen uuden solutionin ja projektin
> * osaat tehdä yksinkertaisen graafisen ohjelman Jypeli-kirjastolla

## Luennot

Luennot tukevat tekstiä. Katso ne ennen lukemista tai sen rinnalla.

* [Luento 1: Johdatus, mitä ohjelmointi on?](../luennot/luento1.md)
* [Luento 2: Kehitysympäristö, graafinen C#-ohjelma](../luennot/luento2.md)

## Käsitteet

Tässä osassa esitellään seuraavat käsitteet. Käsitteen linkki vie
kohtaan, jossa siitä puhutaan ensimmäisen kerran. Koko kirjan käsitteet
ovat [sanastossa](../sanasto.md).

| Käsite | Englanniksi | Selitys |
| ------ | ----------- | ------- |
| [algoritmi](./1-mita-ohjelmointi-on.md#algoritmi-eli-ohje) | *algorithm* | täsmällinen, vaiheittainen ohje tehtävän suorittamiseen |
| [aliohjelma](./2-ensimmainen-ohjelma.md#ensimmäisen-ohjelman-lähdekoodi) | *subroutine* | nimetty joukko ohjeita, jotka suoritetaan, kun aliohjelmaa kutsutaan |
| [kirjasto](./1-mita-ohjelmointi-on.md#kirjasto) | *library* | valmista koodia, jota oma ohjelma voi käyttää |
| [kokonaislukujako](./3-laskutoimitukset.md#kokonaislukujako-ja-jakojäännös) | *integer division* | kokonaislukujen jakolasku, jossa desimaaliosa katkaistaan pois |
| [kommentti](./3-laskutoimitukset.md#aritmeettiset-operaattorit) | *comment* | kääntäjän ohittama, ihmiselle tarkoitettu teksti koodissa |
| [konekieli](./1-mita-ohjelmointi-on.md#ohjelma-ja-ohjelmointikieli) | *machine code* | prosessorin ymmärtämät, ykkösistä ja nollista koostuvat käskyt |
| [konsoli](./2-ensimmainen-ohjelma.md#miksi-tekstiä-tulostava-ohjelma) | *console* | pelkkää tekstiä näyttävä ikkuna, johon konsoliohjelma tulostaa ja jossa käyttäjä kirjoittaa |
| [konsoliohjelma](./2-ensimmainen-ohjelma.md#miksi-tekstiä-tulostava-ohjelma) | *console application* | tekstipohjainen ohjelma ilman painikkeita, valikoita ja kuvia |
| [käännösvirhe](./2-ensimmainen-ohjelma.md#käännösvirheet) | *compilation error* | virhe, joka estää lähdekoodin kääntämisen |
| [kääntäjä](./1-mita-ohjelmointi-on.md#ohjelma-ja-ohjelmointikieli) | *compiler* | ohjelma, joka kääntää lähdekoodin konekielelle |
| [kääntäminen](./1-mita-ohjelmointi-on.md#ohjelma-ja-ohjelmointikieli) | *compiling* | lähdekoodin muuntaminen konekieliseksi, suoritettavaksi ohjelmaksi |
| [lause](./2-ensimmainen-ohjelma.md#ensimmäisen-ohjelman-lähdekoodi) | *statement* | ohjelman pienin suoritettava yksikkö, käsky tietokoneelle |
| [liukuluku](./3-laskutoimitukset.md#kokonaislukujako-ja-jakojäännös) | *floating-point number* | desimaaliluvun esitysmuoto tietokoneessa, esimerkiksi `3.14` |
| [lohko](./2-ensimmainen-ohjelma.md#ensimmäisen-ohjelman-lähdekoodi) | *block* | aaltosulkujen `{ }` rajaama alue koodissa |
| [luokka](./2-ensimmainen-ohjelma.md#ensimmäisen-ohjelman-lähdekoodi) | *class* | kokonaisuus, jonka sisään C#:ssa kirjoitetaan kaikki koodi |
| [lähdekoodi](./1-mita-ohjelmointi-on.md#ohjelma-ja-ohjelmointikieli) | *source code* | ohjelmointikielellä kirjoitettu ohjelman teksti |
| [merkkijono](./3-laskutoimitukset.md#plus-merkki-ja-teksti) | *string* | lainausmerkkien sisään kirjoitettu teksti |
| [ohjelmointikieli](./1-mita-ohjelmointi-on.md#ohjelma-ja-ohjelmointikieli) | *programming language* | ihmisen kirjoitettavaksi ja luettavaksi suunniteltu kieli ohjelmien kirjoittamiseen |
| [operaattori](./3-laskutoimitukset.md#aritmeettiset-operaattorit) | *operator* | merkki, joka tekee arvoille jotakin, esimerkiksi laskutoimituksen |
| [projekti](./4-ohjelmointiymparisto-kuntoon.md#solution-ja-projekti) | *project* | yhden ohjelman koodi ja siihen liittyvät tiedostot |
| [solution](./4-ohjelmointiymparisto-kuntoon.md#solution-ja-projekti) | *solution* | kokoelma projekteja, jotka pidetään auki yhtä aikaa |
| [sovelluskehitin](./2-ensimmainen-ohjelma.md#miten-lähdekoodia-kirjoitetaan) | *integrated development environment, IDE* | ohjelmointia helpottavilla toiminnoilla varustettu tekstieditori |
| [suorituksenaikainen virhe](./2-ensimmainen-ohjelma.md#käännösvirheet) | *runtime error* | virhe, joka ilmenee vasta ohjelmaa ajettaessa |
