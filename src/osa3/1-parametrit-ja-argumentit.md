# 📨 Parametrit ja argumentit

Aliohjelma voi ottaa vastaan tietoa *parametreina*. Parametrit tekevät
aliohjelmasta yleiskäyttöisen: sama aliohjelma voi tulostaa eri tervehdyksen
tai piirtää eri kokoisen pallon sen mukaan, mitä arvoja sille annetaan.

## Parametrin määrittely

Parametrit luetellaan aliohjelman määrittelyssä sulkeiden sisällä. Jokaiselle
parametrille annetaan tyyppi ja nimi. Alla oleva aliohjelma ottaa vastaan
kaksi kokonaislukua ja tulostaa niiden summan.

```csharp
public static void TulostaSumma(int a, int b)
{
    Console.WriteLine(a + b);
}
```

Aliohjelman sisällä parametreja käytetään kuten muuttujia.

## Argumentit kutsussa

Aliohjelmaa kutsutaan kirjoittamalla aliohjelman nimi ja sulkujen sisään
*argumentit*, eli arvot, jotka haluamme antaa aliohjelmalle.

```csharp
TulostaSumma(3, 5);     // Tulostaa 8
int x = 10;
TulostaSumma(x, x + 1); // Tulostaa 21
```

Argumentteja tulee olla yhtä monta kuin parametreja, ja niiden tyyppien tulee
olla yhteensopivia parametrien tyyppien kanssa. Argumentin arvo kopioidaan
parametriin kutsun alussa.

> [!HUOMAUTUS]
> **Terminologiaa.** Aliohjelman kutsussa annettavia arvoja kutsutaan
> *argumenteiksi*. Argumenttien arvot välitetään aliohjelman *parametreihin*.
> Kirjallisuudessa saatetaan nimittää kumpiakin näistä asioista parametreiksi,
> mutta tässä käytämme edellä mainittuja termejä.

## Useita ja erityyppisiä parametreja

<!-- Vaiheessa B: esimerkki string- ja double-parametreista, parametrien
     järjestys, tyypillinen virhe (väärä määrä tai tyyppi argumentteja) ja
     kääntäjän virheilmoitus. -->

## Parametrit Jypeli-ohjelmassa

<!-- Vaiheessa B: aliohjelma PiirraPallo(double x, double y, double sade),
     jota kutsutaan Begin-metodista useita kertoja. Yhdistää luvun 3.4
     olioihin. -->

<details closed id="kuormittaminen"><summary><i class="bi bi-stars jyu-gold"></i> Valinnaista lisätietoa: Aliohjelman kuormittaminen</summary>

Samannimisiä aliohjelmia voi olla useita, kunhan niiden parametrilistat
eroavat toisistaan. Tätä kutsutaan *kuormittamiseksi* (engl. *overloading*).
Olet jo käyttänyt kuormitettua aliohjelmaa: `Console.WriteLine` hyväksyy
argumentikseen niin kokonaisluvun, merkkijonon kuin liukuluvunkin.

```csharp
public static void TulostaSumma(int a, int b)
{
    Console.WriteLine(a + b);
}

public static void TulostaSumma(double a, double b)
{
    Console.WriteLine(a + b);
}
```

Kääntäjä valitsee kutsuttavan version argumenttien lukumäärän ja tyyppien
perusteella: `TulostaSumma(3, 5)` kutsuu `int`-versiota ja
`TulostaSumma(1.5, 2.5)` `double`-versiota. Pelkkä paluuarvon tyyppi ei riitä
erottamaan versioita toisistaan.

Kuormittamista ei tarvita tällä kurssilla omissa ohjelmissa, mutta sen
tunnistaminen auttaa lukemaan kirjastojen dokumentaatiota, jossa samalla
nimellä on usein monta versiota. Toinen tapa saada sama aliohjelma toimimaan eri
määrällä argumentteja on antaa parametreille oletusarvot; ks. liite
[Valinnaiset parametrit ja oletusarvot](../liitteet/oletusarvot.md).

</details>

## Tehtävät

<!-- Tehtävät lisätään vaiheessa B. -->
