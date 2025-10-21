# Osa 2

Katso luennot 3 ja 4

Tämän osan aiheita ovat: 

 * muuttujat ja tietotyypit
 * lausekkeet ja lauseet
 * ohjelman rakenne ja suoritusjärjestys
 * aliohjelmat
 * kommentointi ja dokumentointi

## 📦 Muuttujat ja tietotyypit

## 🛝 Lausekkeet ja lauseet

Lauseet ovat ohjelman perusyksiköitä, jotka suoritetaan yksi kerrallaan. Lause voi olla esimerkiksi muuttujan määrittely, aliohjelman kutsu, ehto- tai toistolause.


## 🏗️ Ohjelman rakenne ja suoritusjärjestys

C#-kielessä tulee tavallisesti olla vähintään yksi luokka. Luokassa tulee olla `Main`-aliohjelma, joka toimii ohjelman aloituspisteenä -- siksi sitä kutsutaan myös *pääohjelmaksi*. Ohjelma suoritetaan järjestyksessä, lause kerrallaan ylhäältä alaspäin `Main`-aliohjelmasta alkaen. Luokka voi sisältää muitakin aliohjelmia. Pääohjelma voi kutsua aliohjelmia, jotka voivat kutsua taas muita aliohjelmia jne. Ohjelman suoritus päättyy, kun pääohjelma on suoritettu loppuun.

Käytäntö on, että yksi tiedosto sisältää yhden luokan, ja että luokan nimi on sama kuin tiedoston nimi.

Alla oleva sovellus koostuu yhdestä luokasta, joka sisältää pääohjelman ja yhden aliohjelman (`Tervehdys`), siis yhteensä kaksi aliohjelmaa.

```csharp
using System;

public class Sovellus
{
  public static void Main()
  {
    // Ohjelman suoritus alkaa Main-aliohjelmasta
    // Tässä kutsutaan Tervehdys-aliohjelmaa kaksi kertaa
    Tervehdys();
    Tervehdys();
  }

  public static void Tervehdys()
  {
     Console.WriteLine("Tervehdys!");
  }
}
```

✨ Valinnaista lisätietoa: C#:ssa (alkaen versiosta 9) voi kirjoittaa ohjelman, jossa ei ole luokkaa eikä pääohjelmaa. Tällöin aivan vasemmalle (vähiten sisennetyt rivit) kirjoitetut lauseet muodostavat niin sanotut *top-level statements* -koodin. Kääntäjä muodostaa tämän koodin perusteella luokan ja ohjelman aloituspisteen. Näin on periaatteessa mahdollista kirjoittaa "Hello world"-ohjelma yksinkertaisesti:

```csharp
System.Console.WriteLine("Hello, World!");
```

Top-level statements -ohjelmat voivat olla käteviä pikkuohjelmissa ja skripteissä. Isommissa ohjelmissa on usein kuitenkin välttämätöntä kirjoittaa ohjelma luokan ja pääohjelman ympärille.




## 🧩 Aliohjelmat

Aliohjelmat ovat ohjelman osia, jotka suorittavat tietyn tehtävän. Aliohjelmat helpottavat ohjelman rakentamista pienistä palasista, sekä ohjelman ylläpitoa. Aliohjelmat mahdollistavat koodin uudelleenkäytön, sillä aliohjelma voidaan määritellä kerran ja käyttää (eli *kutsua*) sitä useita kertoja.

**Määrittely.** Ennen aliohjelman käyttöä se tulee määritellä. Määrittelyssä kerrotaan aliohjelman nimi, mahdolliset parametrit, paluuarvon tyyppi sekä julkisuus. Nämä tiedot kertovat, miten (ja mistä) aliohjelmaa voidaan käyttää.

Alla on esimerkki aliohjelman määrittelystä:

```csharp
public static void OmaAliohjelma()
{
    Console.WriteLine("Tämä on aliohjelma!");
}
```

- `public` tarkoittaa, että aliohjelma on julkinen ja sitä voidaan kutsua mistä tahansa ohjelman osasta.
- `static` tarkoittaa, että aliohjelma kuuluu luokalle eikä oliolle. `static`-avainsanaa käsitellään tarkemmin Ohjelmointi 2 -kurssilla.
- `void` tarkoittaa, että aliohjelma ei palauta arvoa. Jos aliohjelma palauttaisi arvon, `void`-sanan tilalla olisi jokin muu tietotyyppi, kuten `int`, `string` tai `bool`.
- `OmaAliohjelma` on aliohjelman nimi.
- Sulkeiden `()` sisällä olisi mahdolliset parametrit, joita aliohjelma ottaa vastaan. Tässä esimerkissä aliohjelma ei ota parametreja.

Voimme nyt kutsua aliohjelmaa ohjelman muista osista:

```csharp
public static void Main()
{
    OmaAliohjelma(); // Kutsuu aliohjelmaa ja suorittaa sen. Tulostaa: Tämä on aliohjelma!
}
```

Katsotaan vielä tarkemmin parametreja, paluuarvoa ja aliohjelman kutsumista.

**Parametrit ja paluuarvo.** Aliohjelma voi ottaa vastaan tietoa parametreina, ja se voi palauttaa arvon. Alla oleva aliohjelma laskee kahden luvun summan ja palauttaa sen. Aliohjelma ottaa vastaan kaksi parametria ja palauttaa näiden parametrien arvojen summan.

```csharp
public static int Summa(int a, int b)
{
    return a + b;
}
```

**Kutsuminen.** Aliohjelmaa kutsutaan kirjoittamalla aliohjelman nimi ja sulkujen sisään argumentit, joita haluamme antaa aliohjelmalle.

```csharp 
int summa = Summa(3, 5);
Console.WriteLine(summa); // Tulostaa 8
```

{: .terminologia }
Aliohjelman kutsussa annettavia arvoja kutsutaan *argumenteiksi*. Argumenttien arvot välitetään aliohjelman *parametreihin*. Kirjallisuudessa saatetaan nimittää kumpiakin näistä asioista parametreiksi, mutta tässä käytämme edellä mainittuja termejä.

Jos aliohjelma määritetään `void`-tyyppiseksi, se ei palauta arvoa, ts. siinä ei ole `return`-lauseita.

```csharp
public static void Tervehdys()
{
    Console.WriteLine("Moikka!");
}
```

Jos aliohjelman paluuarvon tyypiksi on määritelty jotain muuta kuin `void`, aliohjelmassa tulee olla vähintään yksi `return`-lause. Alla oleva koodi aiheuttaisi käännösvirheen.

```csharp
public static int Summa(int a, int b)
{
    Console.WriteLine(a + b);
    // Käännösvirhe: "not all code paths return a value"
}
```


## Kommentointi ja dokumentointi

Kommentointi

## Tehtävät


Tässä on lueteltu kaikki tähän osaan kuuluvat tehtävät.

Tee TIMissä... Linkki...
