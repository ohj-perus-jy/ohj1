# Satunnaisluvut

> [!HUOMAUTUS]
> Tämä luku on kesken: runko on valmis, teksti kirjoitetaan rakenneuudistuksen
> vaiheessa B.

Pelit ja simulaatiot tarvitsevat satunnaisuutta: nopanheitto, vihollisen
paikka, arvattava luku. Tässä luvussa opitaan arpomaan lukuja
`Random`-luokalla ja Jypelin `RandomGen`-luokalla.

## Mihin satunnaisuutta tarvitaan?

<!-- Pelit (esteiden paikat, nopat), simulaatiot, testidatan tuottaminen.
     Harjoitustyössä satunnaisuutta tarvitaan lähes aina. -->

## `Random`-olio

<!-- `Random arpoja = new Random();` Olio luodaan `new`-operaattorilla kuten
     Jypelin oliot luvussa 3.4. Yksi olio riittää koko ohjelmalle. -->

## Kokonaisluvun ja liukuluvun arpominen

<!-- `arpoja.Next(1, 7)`: alaraja mukana, yläraja ei. `NextDouble()`.
     Esimerkki: nopanheitto silmukassa. -->

## Esimerkki: arvaa luku

<!-- Yhdistää syötteen (2.2), ehtolauseen (3.1), silmukan (4.1) ja
     satunnaisluvun: ohjelma arpoo luvun 1–100, käyttäjä arvaa, ohjelma
     vastaa "liian suuri" tai "liian pieni", kunnes arvaus osuu. -->

## Jypelissä: `RandomGen`

<!-- `RandomGen.NextDouble(Level.Left, Level.Right)`, `RandomGen.NextColor()`,
     `RandomGen.NextInt`. Jatkaa luvun 4.1 peliä: silmukan luomat esteet
     sijoitetaan satunnaisiin paikkoihin. -->

## Tehtävät

<!-- Tehtävät lisätään vaiheessa B. Satunnaisuutta käyttävän koodin
     testaaminen (siemenluku) on luvussa 7.2. -->
