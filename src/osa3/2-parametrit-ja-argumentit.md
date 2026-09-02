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
     jota kutsutaan Begin-metodista useita kertoja. Yhdistää luvun 3.5
     olioihin. -->

## Tehtävät

<!-- Tehtävät lisätään vaiheessa B. -->
