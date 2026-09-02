# 🧩 Aliohjelmat

Aliohjelmat ovat ohjelman osia, jotka suorittavat tietyn tehtävän. Aliohjelmat
helpottavat ohjelman rakentamista pienistä palasista sekä ohjelman ylläpitoa.
Aliohjelmat mahdollistavat koodin uudelleenkäytön, sillä aliohjelma voidaan
määritellä kerran ja käyttää (eli *kutsua*) sitä useita kertoja.

Olet jo käyttänyt aliohjelmia: `Main` on aliohjelma, ja `Console.WriteLine` on
valmis aliohjelma, jota olet kutsunut. Tässä luvussa opit kirjoittamaan omia
aliohjelmia.

## Aliohjelman määrittely

Ennen aliohjelman käyttöä se tulee määritellä. Määrittelyssä kerrotaan
aliohjelman nimi, mahdolliset parametrit, paluuarvon tyyppi sekä julkisuus.
Nämä tiedot kertovat, miten (ja mistä) aliohjelmaa voidaan käyttää.

Alla on esimerkki aliohjelman määrittelystä:

```csharp
public static void OmaAliohjelma()
{
    Console.WriteLine("Tämä on aliohjelma!");
}
```

- `public` tarkoittaa, että aliohjelma on julkinen ja sitä voidaan kutsua mistä
  tahansa ohjelman osasta.
- `static` tarkoittaa, että aliohjelma kuuluu luokalle eikä oliolle.
  `static`-avainsanaa käsitellään tarkemmin Ohjelmointi 2 -kurssilla.
- `void` tarkoittaa, että aliohjelma ei palauta arvoa. Jos aliohjelma
  palauttaisi arvon, `void`-sanan tilalla olisi jokin muu tietotyyppi, kuten
  `int`, `string` tai `bool`. Paluuarvoihin palataan luvussa
  [Aliohjelman paluuarvo](../osa4/1-aliohjelman-paluuarvo.md).
- `OmaAliohjelma` on aliohjelman nimi.
- Sulkeiden `()` sisällä olisi mahdolliset parametrit, joita aliohjelma ottaa
  vastaan. Tässä esimerkissä aliohjelma ei ota parametreja. Parametreihin
  tutustutaan luvussa [Parametrit ja argumentit](./2-parametrit-ja-argumentit.md).

## Aliohjelman kutsuminen

Voimme nyt kutsua aliohjelmaa ohjelman muista osista:

```csharp
public static void Main()
{
    OmaAliohjelma(); // Kutsuu aliohjelmaa ja suorittaa sen. Tulostaa: Tämä on aliohjelma!
    OmaAliohjelma(); // Sama aliohjelma voidaan suorittaa uudelleen
}
```

Kun aliohjelmaa kutsutaan, ohjelman suoritus siirtyy aliohjelman sisälle.
Kun aliohjelman viimeinen lause on suoritettu, suoritus palaa kutsun jälkeiseen
lauseeseen. Suoritusjärjestystä on havainnollistettu luvussa
[Ohjelman rakenne](../osa2/1-ohjelman-rakenne.md#suoritusjärjestys).

## `void`-aliohjelma ja `return`

Jos aliohjelma määritetään `void`-tyyppiseksi, se ei palauta arvoa, eikä siinä
tarvita `return`-lausetta.

```csharp
public static void Tervehdys()
{
    Console.WriteLine("Moikka!");
}
```

`return;`-lauseella `void`-aliohjelman suorituksen voi kuitenkin lopettaa
kesken, jolloin suoritus palaa heti kutsujalle.

> [!HUOMAUTUS]
> **Terminologiaa.** Tällä kurssilla *aliohjelma* on yleisnimi kaikille
> ohjelman nimetyille osille. Arvon palauttavaa aliohjelmaa kutsutaan
> *funktioksi*, ja olioon liittyvää aliohjelmaa *metodiksi*. Kirjallisuudessa
> sanoja käytetään ristiin, joten älä hämmenny, jos kohtaat eri nimityksiä.

## Tehtävät

<!-- Tehtävät lisätään vaiheessa B. -->
