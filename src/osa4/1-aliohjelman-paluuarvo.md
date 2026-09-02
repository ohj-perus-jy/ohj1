# 🔁 Aliohjelman paluuarvo

Tähän asti aliohjelmamme ovat tehneet jotakin, esimerkiksi tulostaneet tekstiä,
mutta eivät ole antaneet tulosta takaisin kutsujalle. Aliohjelma voi kuitenkin
myös *palauttaa* arvon. Arvon palauttavaa aliohjelmaa kutsutaan tällä
kurssilla *funktioksi*.

## Funktion määrittely

Alla oleva funktio laskee kahden luvun summan ja palauttaa sen. Paluuarvon
tyyppi (`int`) kirjoitetaan `void`-sanan tilalle, ja arvo palautetaan
`return`-lauseella.

```csharp
public static int Summa(int a, int b)
{
    return a + b;
}
```

## Funktion kutsuminen

Funktion kutsu on *lauseke*, jonka arvo on funktion palauttama arvo. Paluuarvon
voi sijoittaa muuttujaan, tulostaa tai käyttää osana laskua.

```csharp
int summa = Summa(3, 5);
Console.WriteLine(summa);            // Tulostaa 8
Console.WriteLine(Summa(1, 2) * 10); // Tulostaa 30
```

## `return` päättää suorituksen

Kun `return`-lause suoritetaan, funktion suoritus päättyy heti ja suoritus
palaa kutsukohtaan. `return`-lauseen jälkeisiä lauseita ei suoriteta.

Jos aliohjelman paluuarvon tyypiksi on määritelty jotain muuta kuin `void`,
aliohjelmassa tulee olla `return`-lause jokaisella suorituspolulla. Alla oleva
koodi aiheuttaa käännösvirheen.

```csharp
public static int Summa(int a, int b)
{
    Console.WriteLine(a + b);
    // Käännösvirhe: "not all code paths return a value"
}
```

## Useita `return`-lauseita

<!-- Vaiheessa B: esimerkki ehtolauseesta, jossa eri haarat palauttavat eri
     arvon (esim. Suurempi(a, b)). Funktio palauttaa aina täsmälleen yhden
     arvon. -->

## Funktio, joka ei tulosta

<!-- Vaiheessa B: laskenta ja tulostus erotetaan toisistaan; funktiota on
     helpompi testata (luku 4.3) ja käyttää uudelleen. -->

## Tehtävät

<!-- Tehtävät lisätään vaiheessa B. -->
