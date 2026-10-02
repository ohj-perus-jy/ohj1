# Osa 1: Ensimmäinen ohjelma

Ohjelmointi on ohjeiden kirjoittamista tietokoneelle, ja ensimmäinen oma
ohjelma syntyy jo muutamasta rivistä. Aluksi kirjoitetaan tekstiä tulostava
C#-ohjelma ja lasketaan sillä, sitten asennetaan kehitysympäristö ja tehdään
ensimmäinen graafinen ohjelma Jypeli-kirjastolla.

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

| Käsite | Englanniksi | Selitys |
| ------ | ----------- | ------- |
| [algoritmi](./1-mita-ohjelmointi-on.md) | *algorithm* | täsmällinen, vaiheittainen ohje tehtävän suorittamiseen |
| [aliohjelma](./2-ensimmainen-ohjelma.md) | *subroutine* | nimetty joukko ohjeita, jotka suoritetaan, kun aliohjelmaa kutsutaan |
| [jakojäännös](./3-laskutoimitukset.md) | *remainder* | jakolaskusta yli jäävä osa, operaattori `%` |
| [kirjasto](./1-mita-ohjelmointi-on.md) | *library* | valmista koodia, jota oma ohjelma voi käyttää |
| [kokonaislukujako](./3-laskutoimitukset.md) | *integer division* | kokonaislukujen jakolasku, jossa desimaaliosa katkaistaan pois |
| [kommentti](./3-laskutoimitukset.md) | *comment* | kääntäjän ohittama, ihmiselle tarkoitettu teksti koodissa |
| [konekieli](./1-mita-ohjelmointi-on.md) | *machine code* | prosessorin ymmärtämät, ykkösistä ja nollista koostuvat käskyt |
| [käännösvirhe](./2-ensimmainen-ohjelma.md) | *compilation error* | virhe, joka estää lähdekoodin kääntämisen |
| [kääntäjä](./1-mita-ohjelmointi-on.md) | *compiler* | ohjelma, joka kääntää lähdekoodin konekielelle |
| [kääntäminen](./1-mita-ohjelmointi-on.md) | *compiling* | lähdekoodin muuntaminen konekieliseksi, suoritettavaksi ohjelmaksi |
| [lause](./2-ensimmainen-ohjelma.md) | *statement* | ohjelman pienin suoritettava yksikkö, käsky tietokoneelle |
| [liukuluku](./3-laskutoimitukset.md) | *floating-point number* | desimaaliluku, jonka tarkkuus on rajallinen |
| [lohko](./2-ensimmainen-ohjelma.md) | *block* | aaltosulkujen `{ }` rajaama alue koodissa |
| [luokka](./2-ensimmainen-ohjelma.md) | *class* | kokonaisuus, jonka sisään C#:ssa kirjoitetaan kaikki koodi |
| [lähdekoodi](./1-mita-ohjelmointi-on.md) | *source code* | ohjelmointikielellä kirjoitettu ohjelman teksti |
| [merkkijono](./3-laskutoimitukset.md) | *string* | lainausmerkkien sisään kirjoitettu teksti |
| [ohjelmointikieli](./1-mita-ohjelmointi-on.md) | *programming language* | ihmisen kirjoitettavaksi ja luettavaksi suunniteltu kieli ohjelmien kirjoittamiseen |
| [operaattori](./3-laskutoimitukset.md) | *operator* | merkki, joka tekee arvoille jotakin, esimerkiksi laskutoimituksen |
| [pelimoottori](./5-ensimmainen-graafinen-ohjelma.md) | *game engine* | kirjasto, joka hoitaa pelin piirtämisen, fysiikan ja ohjauksen |
| [projekti](./4-ohjelmointiymparisto-kuntoon.md) | *project* | yhden ohjelman koodi ja siihen liittyvät tiedostot |
| [solution](./4-ohjelmointiymparisto-kuntoon.md) | *solution* | kokoelma projekteja, jotka pidetään auki yhtä aikaa |
| [sovelluskehitin](./2-ensimmainen-ohjelma.md) | *integrated development environment, IDE* | ohjelmointia helpottavilla toiminnoilla varustettu tekstieditori |
| [suorituksenaikainen virhe](./2-ensimmainen-ohjelma.md) | *runtime error* | virhe, joka ilmenee vasta ohjelmaa ajettaessa |
