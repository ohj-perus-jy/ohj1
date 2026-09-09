# 🕹️ Jypeli ja oliot

> [!HUOMAUTUS]
> Tämä luku on kesken: runko on valmis, teksti kirjoitetaan rakenneuudistuksen
> vaiheessa B.

Luvussa [Ensimmäinen graafinen ohjelma](../osa1/4-ensimmainen-graafinen-ohjelma.md)
luotiin peliolio ja lisättiin se peliin. Tässä luvussa selitetään, mitä
silloin oikeastaan tapahtui: mikä on olio, miten olio luodaan, miten sen
ominaisuuksia muutetaan ja miten sen metodeja kutsutaan. Samalla opitaan
kirjoittamaan omia aliohjelmia Jypeli-peliin.

## Mikä on olio?

<!-- Olio = tietoa + toimintoja. Luokka on olion "piirustus", olio on luokasta
     luotu yksilö. PhysicsObject-luokasta voi luoda monta palloa. -->

## Olion luominen `new`-operaattorilla

<!-- `PhysicsObject pallo = new PhysicsObject(50, 50);` Konstruktorin
     argumentit. Muuttuja viittaa olioon. -->

## Ominaisuudet

<!-- `pallo.X`, `pallo.Y`, `pallo.Color`, `pallo.Shape`. Lukeminen ja
     asettaminen. -->

## Metodin kutsuminen

<!-- `Add(pallo)`, `pallo.Hit(...)`, `Level.Background.Color`. Metodi vs.
     aliohjelma: metodia kutsutaan olion kautta. -->

## Pelin rakenne: `PhysicsGame` ja `Begin`

<!-- Luokka perii PhysicsGamen. Begin suoritetaan pelin alkaessa; vastaa
     konsoliohjelman Mainia. Koordinaatisto ja Vector. -->

## Omat aliohjelmat Jypeli-pelissä

<!-- Jypelissä aliohjelmat kirjoitetaan ilman `static`-sanaa (`public void
     PiirraPallo(...)`). Miksi: aliohjelma kuuluu peli-oliolle. Kutsuminen
     Beginistä. -->

## Dokumentaation lukeminen

<!-- Jypelin wiki ja koodidokumentaatio: miten löydät, mitä ominaisuuksia ja
     metodeja PhysicsObjectilla on. -->

## Tehtävät

<!-- Tehtävät lisätään vaiheessa B. -->
