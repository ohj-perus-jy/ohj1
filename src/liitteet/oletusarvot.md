# Valinnaiset parametrit ja oletusarvot

Valinnaista lisätietoa osaan [2](../osa2/index.md). Parametrille voi antaa
*oletusarvon*, jolloin argumentin voi jättää kutsussa pois.

## Oletusarvon määrittely

Oletusarvo kirjoitetaan parametrin perään yhtäsuuruusmerkillä. Alla oleva
aliohjelma piirtää lumiukon, jonka koko on oletuksena 100.

```csharp,ignore
public static void PiirraLumiukko(double x, double y, double koko = 100)
{
    // ...
}
```

Aliohjelmaa voi nyt kutsua sekä kahdella että kolmella argumentilla:

```csharp,ignore
PiirraLumiukko(0, 0);        // koko on 100
PiirraLumiukko(200, 0, 50);  // koko on 50
```

## Säännöt

- Oletusarvolliset parametrit tulee olla parametrilistan lopussa. Niiden
  jälkeen ei voi olla pakollisia parametreja.
- Oletusarvon tulee olla vakio, esimerkiksi luku, merkkijono tai `null`.
  Se ei voi olla toisen muuttujan arvo tai aliohjelman kutsu.
- Jos kutsussa annetaan vain osa valinnaisista argumenteista, ne täytetään
  vasemmalta oikealle. Yksittäisen parametrin voi nimetä kutsussa:
  `PiirraLumiukko(0, 0, koko: 50)`.

## Oletusarvot vai kuormittaminen?

Sama lopputulos saadaan myös [kuormittamalla](../osa3/1-parametrit-ja-argumentit.md#kuormittaminen)
aliohjelma, eli kirjoittamalla kaksi samannimistä versiota eri
parametrilistoilla. Oletusarvo on lyhyempi silloin, kun versiot eroavat vain
yhden arvon osalta. Kuormittaminen on parempi, kun versiot tekevät eri asioita
tai ottavat erityyppisiä argumentteja.

Jypelin dokumentaatiossa näet usein molempia: esimerkiksi `PhysicsObject`-luokan
konstruktoreja on useita, ja monilla niistä on oletusarvollisia parametreja.
