# Ohjelman perusrakenne

## 🛝 Lauseiden suorittaminen

Lauseet ovat ohjelman perusyksiköitä, jotka suoritetaan yksi kerrallaan. Lause voi olla esimerkiksi muuttujan määrittely, aliohjelman kutsu, ehto- tai toistolause.

Lauseella voi olla käyttäjälle näkyviä vaikutuksia, kuten ruudulla näkyvä tulostus tai kappaleen lisääminen pelikentälle.

```csharp
Console.WriteLine("Hello, World!"); // Tulostaa näytölle tekstiä
PhysicsObject pallo = new PhysicsObject(10, 10); // Luo uuden fysiikkaolion
Add(pallo); // Lisää olion pelikentälle
```

Lauseella voi olla myös "näkymätön" vaikutus, kuten muuttujan tilan muuttuminen. Näkymättömät vaikutukset ovat paljon yleisempiä kuin ohjelman käyttöliittymässä käyttäjälle näkyvät vaikutukset. Ohjelmassa saattaa tapahtua paljon logiikkaa taustalla, ja käyttäjälle näytetään tästä logiikasta yleensä vain pieni osa.

```csharp
int a = 3; // Muuttaa muuttujan a arvoa
a++; // Lisää muuttujan a arvoa yhdellä
```

## 🟰 Lause ja lauseke

Lauseen (engl. *statement*) seurauksena _tapahtuu jotakin_, kun taas lauseke (engl. expression) on asia, jonka arvo voidaan laskea.

Lauseilla ohjataan ohjelman suoritusta. Lause voi sisältää lausekkeen (tai lausekkeita), mutta sen päätehtävä on suorittaa jokin toiminto (esim. muuttujan määrittely, arvon asettaminen, silmukan käynnistäminen tai ehtolauseen tarkistaminen).

Lausekkeilla tuotetaan arvoja. Lauseke voi sisältää esimerkiksi matemaattisia laskutoimituksia, muuttujia, funktiokutsuja tai niiden yhdistelmiä. Näiden tavoitteena on tuottaa ohjelmaan jokin arvo, joka voidaan toimittaa ohjelmassa eteenpäin jatkojalostettavaksi.

```csharp
// Lause, joka määrittelee muuttujan a. 
// Luku 3 on lauseke -- toki hyvin yksinkertainen sellainen.
int a = 3;     
// Lause, joka lisää muuttujan a arvoa yhdellä
a++;
// Lause, jossa b saa lausekkeen a + 5 arvon, eli 9.
int b = a + 5; 

// if-lause
if (a > 5) // lauseke a > 5
{
  // ...
}
```

Lauseke voi olla myös aliohjelmakutsu, joka palauttaa arvon. Alla Keskiarvo-aliohjelman kutsu on esimerkki lausekkeesta, kuten myös tulostuslause.

```csharp
int a; 
a = Keskiarvo(3, 5); // Sijoituslause, jossa a saa
                     // Keskiarvo-aliohjelman paluuarvon
Console.WriteLine($"Muuttujan a arvo on {a}");
```

Kuten mainittiin, lauseet voivat sisältää lausekkeita. Lausekkeet eivät yleensä sisällä lauseita, mutta tähänkin on hassuja poikkeuksia.

```csharp
int a = 3;
int b = 5;
if (a++ < b) // a++ < b sisältää sekä lausekkeen että lauseen
{
   // ...
}
```

Tässä esitetty jako lausekkeisiin ja lauseisiin on yksinkertaistus. Se, mihin "lokeroon" jokin koodinpätkä kuuluu, vaihtelee ohjelmointikielen mukaan. Ohjelmointikielen spesifikaatio määrittelee sen, mitkä koodinpätkät ovat lauseita, mitkä lausekkeita, ja mitkä jotakin muuta. Jos asia kiinnostaa enemmän, voit tutustua [📖 C#-kielen spesifikaatioon](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/statements).

## 📢 Huomautus: Kaikille asioille ei voi antaa nimeä

Ohjelmissa on aina muitakin rakenneosasia kuin lauseet ja lausekkeet. C#-kielen tapauksessa tällaisia ovat esimerkiksi `using`-direktiivit, aliohjelmien ja luokkien määrittelyrivit ("deklaraatiot"), erinäiset sulut ja kommentit. Nämä rivit liittyvät ohjelman rakenteeseen, ja niillä on oma merkityksensä kokonaisuuden kannalta, mutta niille on hankala antaa yhtä ja oikeaa nimeä.

Vaikka olisi kiva antaa kaikille ohjelmakoodissa oleville riveille tai koodin palasille jokin kategorinen nimi, joka kuvailisi mikä rivin tarkoitus on, se on monesti hankalaa tai mahdotonta. Jotkin rivit ovat yksinkertaisia ja ne on helppo selittää (vaikkapa `int a = 3;`). Toiset rivit taas ovat niin monimutkaisia tai käyttötarkoituksesta riippuvia, että niille ei voi antaa yksiselitteistä nimeä. Joskus koodin eri osien merkitys selviää usein vain lukemalla ja muokkaamalla koodia (ja tietysti lukemalla kielen spesifikaatiota) ja kokeilemalla itse. 

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

## Tehtävät 2.1--2.3

Tee TIMissä (linkki)