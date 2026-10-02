# Osa 3: Ehdot, aliohjelmat ja Jypeli

Ehtolauseen avulla ohjelma tekee eri asioita eri tilanteissa. Aliohjelmilla,
jotka eivät palauta arvoa, pitkä ohjelma jaetaan nimettyihin paloihin, ja
muuttujan näkyvyys ratkaisee, missä kohdassa ohjelmaa muuttujaa voi käyttää.
Lopuksi Jypeli-pelin oliot saavat selityksensä.

> [!Osaamistavoitteet]
> Tämän osan jälkeen
>
> * osaat kirjoittaa ehtolauseita ja funktioita, jotka palauttavat eri arvon
>   eri tilanteissa
> * osaat kirjoittaa aliohjelman, joka ei palauta arvoa, ja tiedät, milloin
>   aliohjelmasta tehdään funktio ja milloin ei
> * tiedät, missä muuttuja näkyy ja milloin sitä ei enää ole
> * osaat luoda ja käyttää olioita Jypeli-pelissä

## Luennot

Luentojen numerointi on kevään 2026 toteutuksen mukainen. Uuden toteutuksen
luennot päivitetään tähän.

* [Luento 4: Aliohjelmat](../luennot/luento4.md)
* [Luento 5: Aliohjelman paluuarvo](../luennot/luento5.md)
* [Luento 7: Muuttujien näkyvyys](../luennot/luento7.md)

## Käsitteet

| Käsite | Englanniksi | Selitys |
| ------ | ----------- | ------- |
| [attribuutti](./3-muuttujien-nakyvyys.md) | *field* | luokan muuttuja, joka näkyy luokan kaikissa aliohjelmissa |
| [ehto](./1-ehtolauseet.md) | *condition* | totuusarvoinen lauseke, jonka perusteella ehtolause tekee valinnan |
| [ehtolause](./1-ehtolauseet.md) | *conditional statement* | lause, joka suorittaa koodin vain, jos ehto on tosi |
| [näkyvyysalue](./3-muuttujien-nakyvyys.md) | *scope* | ohjelman alue, jossa muuttuja on olemassa ja käytettävissä |
| [olio](./4-jypeli-ja-oliot.md) | *object* | luokasta luotu yksilö, jolla on tietoa ja toimintoja |
| [ominaisuus](./4-jypeli-ja-oliot.md) | *property* | olion tieto, jota luetaan tai muutetaan pisteellä, esimerkiksi `pallo.Color` |
| [paikallinen muuttuja](./3-muuttujien-nakyvyys.md) | *local variable* | aliohjelman tai lohkon sisällä määritelty muuttuja, joka näkyy vain siellä |
| [sivuvaikutus](./2-aliohjelmat-ilman-paluuarvoa.md) | *side effect* | aliohjelman vaikutus itsensä ulkopuolelle, esimerkiksi tulostus ruudulle |
| [`switch`-lause](./1-ehtolauseet.md) | *switch statement* | rakenne, joka vertaa yhtä arvoa moneen kiinteään vaihtoehtoon |
| [viite](./4-jypeli-ja-oliot.md) | *reference* | muuttujan sisältö, joka osoittaa olioon; olio itse ei ole muuttujassa |
| [`void`-aliohjelma](./2-aliohjelmat-ilman-paluuarvoa.md) | *void method* | aliohjelma, joka tekee jotakin eikä palauta arvoa |
