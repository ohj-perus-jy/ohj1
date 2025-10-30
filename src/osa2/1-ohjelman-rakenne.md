# <span class="part-icon">🏗️</span> Ohjelman rakenne

C#-kieli on [*olioperusteinen ohjelmointikieli*](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/introduction), mikä tarkoittaa, että kaikki koodi kirjoitetaan luokkien sisälle. Jokaisessa ohjelmassa täytyy tavallisesti olla vähintään yksi luokka. Luokassa tulee olla `Main`-aliohjelma, joka toimii ohjelman aloituspisteenä -- siksi sitä kutsutaan myös *pääohjelmaksi*. Ohjelma suoritetaan järjestyksessä, lause kerrallaan ylhäältä alaspäin `Main`-aliohjelmasta alkaen. Luokka voi sisältää muitakin aliohjelmia. Pääohjelma voi kutsua aliohjelmia, jotka voivat kutsua taas muita aliohjelmia jne. Ohjelman suoritus päättyy, kun pääohjelma on suoritettu loppuun.

Puhumme aliohjelmista osassa [3.1 Aliohjelmat](../osa3/1-aliohjelmat.md); tässä osassa keskitymme kuitenkin ohjelman rakenteeseen kokonaisuutena.

Alla oleva sovellus koostuu yhdestä luokasta, joka sisältää pääohjelman ja yhden aliohjelman (`Tervehdys`), siis yhteensä kaksi aliohjelmaa. Käytäntö on, että yksi tiedosto sisältää yhden luokan, ja että luokan nimi on sama kuin tiedoston nimi.

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


> [!LISATIETO]  
> ✨ Valinnaista lisätietoa: C#:ssa (alkaen versiosta 9) voi 
> kirjoittaa ohjelman, jossa ei ole luokkaa eikä pääohjelmaa. Tällöin aivan
> vasemmalle (vähiten sisennetyt rivit) kirjoitetut lauseet muodostavat niin
> sanotut *top-level statements* -koodin. Kääntäjä muodostaa tämän koodin
> perusteella luokan ja ohjelman aloituspisteen. Näin on periaatteessa
> mahdollista kirjoittaa "Hello world"-ohjelma yksinkertaisesti:
> 
> ```csharp
> System.Console.WriteLine("Hello, World!");
> ```
> 
> Top-level statements -ohjelmat voivat olla käteviä pikkuohjelmissa ja skripteissä. Isommissa ohjelmissa on usein kuitenkin välttämätöntä kirjoittaa ohjelma luokan ja pääohjelman ympärille.
> 

