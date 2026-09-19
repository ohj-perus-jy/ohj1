# Aliohjelman paluuarvo

Tähän asti aliohjelmamme ovat tehneet jotakin, esimerkiksi tulostaneet tekstiä,
mutta eivät ole antaneet tulosta takaisin kutsujalle. Aliohjelma voi kuitenkin
myös *palauttaa* arvon. Arvon palauttavaa aliohjelmaa voidaan kutsua myös *funktioksi*.

## Aliohjelman paluuarvon määrittely

Alla oleva aliohjelma laskee kahden luvun summan ja palauttaa sen. Paluuarvon
tyyppi (`int`) kirjoitetaan `void`-sanan tilalle, ja arvo palautetaan
`return`-lauseella.

```csharp,ignore
public static int Summa(int a, int b)
{
    return a + b;
}
```

## Aliohjelman kutsuminen

Arvon palauttavan aliohjelman kutsu on *lauseke*, jonka arvo on aliohjelman palauttama arvo. Paluuarvon
voi sijoittaa muuttujaan, tulostaa tai käyttää osana laskua.

```csharp,ignore
int summa = Summa(3, 5); // Summa(3, 5) palauttaa arvon 8, joka sijoitetaan muuttujaan summa
Console.WriteLine(summa);            // Tulostaa 8
Console.WriteLine(Summa(1, 2) * 10); // Tulostaa 30
```

## `return` päättää suorituksen

Kun `return`-lause suoritetaan, aliohjelman suoritus päättyy heti ja suoritus
palaa kutsukohtaan. `return`-lauseen jälkeisiä lauseita ei suoriteta.

Jos aliohjelman paluuarvon tyypiksi on määritelty jotain muuta kuin `void`,
aliohjelmassa tulee olla `return`-lause jokaisella suorituspolulla. Alla oleva
koodi aiheuttaa käännösvirheen.

```csharp,ignore
public static int Summa(int a, int b)
{
    Console.WriteLine(a + b);
    // Käännösvirhe: "not all code paths return a value"
}
```

## Kutsusta määrittelyyn: paluuarvon tyyppi

Luvussa [Parametrit ja argumentit](./1-parametrit-ja-argumentit.md#kutsusta-määrittelyyn)
esittelyrivi luettiin kutsusta. Sama toimii paluuarvolle. Katso, mihin kutsun
tulos menee:

```csharp,ignore
TulostaPisteet("Maija", 120);                  // tulosta ei oteta talteen
string rivi = MuotoilePisteet("Maija", 120);   // tulos sijoitetaan string-muuttujaan
```

Ensimmäisessä kutsussa vasemmalla puolella ei ole mitään, joten aliohjelma on
`void`. Toisessa tulos sijoitetaan `string`-muuttujaan, joten aliohjelman pitää
palauttaa `string`. Paluuarvon tyyppi luetaan siis sijoituksen *kohteesta*.

```text
string rivi = MuotoilePisteet(  "Maija"  ,    120     );
   ↓                               ↓           ↓
public static string MuotoilePisteet(string nimi, int pisteet)
```

Työjärjestys on sama kuin ennenkin: kutsu, esittelyrivi, tynkä, runko. Yksi
asia muuttuu. Funktion tyngäksi ei kelpaa tyhjä runko, koska esittelyrivillä
luvataan palauttaa `string`, ja kääntäjä pitää lupauksesta kiinni: `CS0161:
not all code paths return a value`. Tynkä palauttaa siksi *jonkin* oikean
tyyppisen arvon, vaikka arvo olisi vielä väärä:

```csharp,ignore
public static string MuotoilePisteet(string nimi, int pisteet)
{
    return "";      // tynkä: kääntyy, mutta ei tee vielä oikeaa asiaa
}
```

Lukuja palauttavassa funktiossa tynkä on tavallisesti `return 0;` ja
totuusarvoja palauttavassa `return false;`.

Tynkä on tarkistuspiste. Kun ohjelma kääntyy tyngän kanssa, tiedät, että kutsu
ja esittelyrivi sopivat yhteen, ja voit keskittyä runkoon. Sama ajatus pätee
ohjelmointiin yleisemminkin: tee pieni muutos, käännä ja aja, ja jatka vasta
sitten. Kymmenen rivin jälkeen virhe löytyy kymmeneltä riviltä. Sadan rivin
jälkeen sitä etsitään sadalta.

Lopuksi tynkä korvataan oikealla toteutuksella:

```csharp
using System;

public class Pistetaulu
{
    public static void Main()
    {
        string rivi = MuotoilePisteet("Maija", 120);
        Console.WriteLine(rivi);
        Console.WriteLine(MuotoilePisteet("Pekka", 95));
    }

    public static string MuotoilePisteet(string nimi, int pisteet)
    {
        return $"{nimi}: {pisteet} pistettä";
    }
}
```

## Useita `return`-lauseita

<!-- Vaiheessa B: esimerkki ehtolauseesta, jossa eri haarat palauttavat eri
     arvon (esim. Suurempi(a, b)). Funktio palauttaa aina täsmälleen yhden
     arvon. -->

## Funktio, joka ei tulosta

Palauttaminen ja tulostaminen menevät helposti sekaisin, koska pienessä
ohjelmassa kummastakin seuraa sama asia: luku näkyy ruudulla. Ne ovat silti
eri asioita. Vertaa kahta tapaa laskea ympyrän pinta-ala.

```csharp,ignore
public static void TulostaYmpyranAla(double sade)
{
    Console.WriteLine(Math.PI * sade * sade);
}

public static double YmpyranAla(double sade)
{
    return Math.PI * sade * sade;
}
```

Ensimmäinen näyttää tuloksen käyttäjälle, ja sen jälkeen tulos on poissa.
Ohjelma itse ei saa sitä käyttöönsä. Toinen antaa tuloksen *kutsujalle*, joka
päättää, mitä sillä tehdään:

```csharp,ignore
double ala = YmpyranAla(4.2);                            // talteen muuttujaan
double tilavuus = YmpyranAla(4.2) * 10;                  // osaksi laskua
Console.WriteLine($"Pohjan ala on {YmpyranAla(4.2)}");   // tai tulostukseen, halutussa muodossa
```

`TulostaYmpyranAla`-aliohjelmalla näistä onnistuu vain viimeinen, ja sekin vain
yhdessä muodossa. Siksi laskeva aliohjelma kirjoitetaan funktioksi, joka *ei
tulosta mitään*. Tulostaminen jätetään kutsujalle, tavallisesti pääohjelmalle.
Palauttavaa funktiota on myös helppo testata: testi kutsuu funktiota ja vertaa
paluuarvoa odotettuun (ks. [Testaaminen
ComTestillä](../osa4/4-testaaminen-comtestilla.md)). Ruudulle tulostettua
tekstiä testi ei näe.

Sama koskee muitakin sivuvaikutuksia. Se, että aliohjelma tulostaa jotakin tai
lisää peliin olion, ei ole palauttamista. Aliohjelma palauttaa arvon vain
`return`-lauseella.

## Tehtävät

<!-- Numerointi tarkentuu, kun osan muut tehtävät tehdään. TIM-palautuslinkit
     lisätään, kun tehtävät on viety TIMiin. Vaiheessa B lisäksi
     tehtävä usean return-lauseen funktiosta. -->

<task>
  <task-title num="T3">Tulostavasta palauttavaksi <points>1 p.</points></task-title>
  <handout>

  {{#include ../exercises/3-2-1-tulostavasta_palauttavaksi/handout.md}}

  </handout>
</task>
