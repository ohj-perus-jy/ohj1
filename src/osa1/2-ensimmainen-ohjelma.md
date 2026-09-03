# <span class="part-icon">👨🏻‍💻</span> Ensimmäinen ohjelma

Tässä luvussa kirjoitetaan, käännetään ja ajetaan ensimmäinen C#-ohjelma.
Ohjelma tulostaa yhden rivin tekstiä, mutta siinä on jo kaikki samat osat kuin
tuhansien rivien ohjelmissa: lähdekoodi, kääntäjä ja suoritettava ohjelma.

## Miksi tekstiä tulostava ohjelma?

Ensimmäisenä ohjelmana on tapana kirjoittaa "Hello, World!" -tervehdys. Tapa on
peräisin 1970-luvulta C-kielen oppikirjasta, ja sitä on noudatettu siitä
lähtien lähes jokaisessa ohjelmointikielessä. Syy on käytännöllinen: ohjelma on
niin pieni, että jos se ei toimi, vika on työkaluissa eikä koodissa. Kun se
toimii, tiedät, että kääntäjä, ajoympäristö ja editori ovat kunnossa.

Tekstipohjaiset eli *konsoliohjelmat* eivät myöskään ole pelkkä
harjoitusväline. Moni oikea ohjelma toimii täsmälleen näin:

* **Komentorivityökalut.** Versionhallintaohjelma `git`, jota käytät tällä
  kurssilla harjoitustyössä, on konsoliohjelma: se lukee komennon ja tulostaa
  vastauksen.
* **Palvelinohjelmat.** Verkkosivun taustalla pyörivä ohjelma ei näytä
  ikkunaa kenellekään. Se lukee pyyntöjä ja kirjoittaa lokia tekstinä.
* **Skriptit.** Sadan tiedoston uudelleennimeäminen tai mittausdatan siivous
  tehdään usein pienellä konsoliohjelmalla, jonka koko käyttöliittymä on
  muutama tulostettu rivi.

Konsoliohjelmissa on lisäksi se etu, että ohjelman toiminnan näkee suoraan
tulosteesta. Siksi suuri osa tämän kurssin esimerkeistä on konsoliohjelmia,
vaikka harjoitustyö tehdäänkin graafisena Jypeli-pelinä.

## Lähdekoodin kirjoittaminen

Tietokoneohjelma on joukko ohjeita, jotka tietokone suorittaa. Ohjelmoija
kirjoittaa nämä ohjeet käyttäen ohjelmointikieltä, kuten C#. Tätä kirjoitettua
koodia kutsutaan *lähdekoodiksi*. 

Olemme kirjoittaneet sinulle valmiiksi pienen C#-ohjelman, joka tulostaa tekstin
"Heippa, maailma!" näytölle. Voit klikata koodilohkon oikeassa reunassa olevaa
Play-napin muotoista painiketta ajaaksesi ohjelman. Ohjelman pitäisi näyttää
teksti `Heippa, maailma!`.

```csharp,
public class Ohjelma
{
    public static void Main()
    {
      System.Console.WriteLine("Heippa, maailma!");
    }
}
```

Tämä on ehkäpä yksinkertaisin mahdollinen esimerkki, mutta silti se on täysin
toimivan tietokoneohjelman lähdekoodi (joskaan ohjelma ei ole maailman
mielenkiintoisin)! Lupaamme, että opit pian kirjoittamaan monimutkaisempia
ohjelmia itse -- mutta aloitetaan pienestä.

Käydään läpi, mitä ohjelma tekee rivi riviltä:

```csharp,noplayground
public class Ohjelma
```

Tämä rivi määrittelee uuden *luokan* (engl. *class*) nimeltä `Ohjelma`.
C#-kielessä kaikki koodi kirjoitetaan luokkien sisälle. Luokka on kuin säiliö,
joka voi sisältää tietoa ja toiminnallisuutta.

```csharp,noplayground
{
```

Tämä aaltosulku `{` kertoo, mistä luokan varsinainen sisältö alkaa. Kaikki, mitä
luokan sisällä tehdään, kirjoitetaan tämän ja vastaavan sulkevan aaltosulun `}`
väliin.

```csharp,noplayground
    public static void Main()
```

Tämä rivi määrittelee *aliohjelman* nimeltä `Main`. Tutustumme aliohjelmiin tarkemmin [osassa 3](../osa3/1-aliohjelmat.md), mutta lyhyesti: 
aliohjelma on joukko ohjeita, jotka suoritetaan, kun aliohjelmaa kutsutaan. `Main`-aliohjelma on erityinen, koska se on ohjelman aloituspiste -- tietokone alkaa suorittaa ohjelmaa juuri tästä aliohjelmasta.

```csharp,noplayground
    {
```

Vastaavasti kuin luokan kohdalla, tämä aaltosulku kertoo, mistä aliohjelman
sisältö alkaa. Kaikki aliohjelman sisällä tehtävä kirjoitetaan tämän ja
vastaavan sulkevan aaltosulun `}` väliin.

```csharp,noplayground
        System.Console.WriteLine("Heippa, maailma!");
```

Tämä rivi on itse asiassa se, joka tekee työn: se tulostaa tekstin "Heippa, maailma!" näytölle. `System.Console.WriteLine` on C#-kielen sisäänrakennettu toiminto, joka hoitaa tekstin tulostamisen konsoli-ikkunaan. Viesti, joka halutaan tulostaa, kirjoitetaan lainausmerkkien sisälle.

Rivi päättyy puolipisteeseen `;`, joka tarkoittaa, että kyseinen *lause* (engl. *statement*) on loppu. C#-kielessä lauseet päättyvät tyypillisesti puolipisteeseen. Käymme lauseita tarkemmin läpi luvussa [Lauseet ja lausekkeet](../osa2/2-lauseet-ja-lausekkeet.md), mutta tässä riittää tietää, että lausetta voi ajatella kuin käskynä tai ohjeena tietokoneelle. 

```csharp,noplayground
    }
}
```

Meillä on enää jäljellä kaksi sulkevaa aaltosulkua. Kuten jo mainitsimme, ne kertovat mihin aliohjelma, ja sitten luokka, päättyvät. 

## Mitä lähdekoodille oikeastaan tapahtuu?

Kun olet kirjoittanut lähdekoodin, se täytyy muuntaa sellaiseen muotoon, että
tietokone voi suorittaa sen. C#-kielen kohdalla tätä muodonmuutosta kutsutaan
*kääntämiseksi* (engl. *compilation*), ja useiden vaiheiden seurauksena syntyy
niin sanottu konekielinen ohjelma, joka voidaan käynnistää tietokoneella.
Kääntäminen tapahtuu *kääntäjällä* (engl. *compiler*), joka on erityinen
ohjelma, joka lukee lähdekoodin ja tuottaa siitä suoritettavan ohjelman.
Esimerkiksi Rider-sovelluskehitysympäristössä on sisäänrakennettuna toiminnot
kääntämistä varten. 

Käännetty ohjelma voidaan sitten *ajaa* (engl. *run*), eli käynnistää
tietokoneella. C#-kielessä kääntämiseen ja ajamiseen tarvitaan .NET-ympäristö,
joka sisältää tarvittavat työkalut -- asennusohjeen löydät
[Työkalut](../tyokalut.md)-kohdasta. .NET-ympäristön asentamisen
jälkeen kääntäminen-ajaminen&ndash;prosessi voidaan tehdä komentoriviltä
seuraavasti. Alla on kaksi komentoa, jotka syötetään komentoriville siinä
kansiossa, missä projekti on tehty. 

```bash
dotnet build   # kääntää projektin
dotnet run     # kääntää tarvittaessa ja ajaa ohjelman
```

Ohjelma on käännettävä aina koodin muuttamisen jälkeen, jotta muutokset tulevat voimaan.

Sovelluskehittimessä (esim. Rider) kääntäminen tapahtuu klikkaamalla *Run* tai *Debug*. Noiden painikkeiden painamiseurauksena tapahtuu sekä kääntäminen että ajaminen. 

## Miten lähdekoodia kirjoitetaan?

Lähdekoodia voi periaatteessa kirjoittaa millä tahansa *tekstieditorilla*, eli
ohjelmalla, jolla voi kirjoittaa ja muokata pelkkää tekstiä ilman erityisiä
muotoiluja tai tyylejä. Olet ehkä jo käyttänytkin tekstieditoria, kuten Muistio
(Notepad) Windowsissa tai TextEdit macOS:ssä. Tässä "pelkkä teksti" tarkoittaa,
että teksti todella tallennetaan tietokoneen muistiin sellaisenaan; esimerkiksi
Word-asiakirjaan tallentuu tosiasiassa aina paljon muutakin tietoa, kuten
fontti- ja asettelutietoja.

Lähdekoodi tallennetaan tiedostoon, joka C#-kielen tapauksessa päättyy yleensä
`.cs` -tiedostopäätteeseen, kuten `Ohjelma.cs`. Tällöin käyttöjärjestelmä
tunnistaa tiedoston C#-lähdekooditiedostoksi. 

<details closed><summary><i class="bi bi-stars jyu-gold"></i> Valinnaista lisätietoa: Käännettävä vai tulkattava kieli?</summary>

Monet kielet C#, Java ja C++, ovat *käännettäviä*, kun taas osa, kuten Python ja
JavaScript ovat *tulkattavia*. Tulkatuissa kielissä lähdekoodia suoritetaan
ilman erillistä käännösvaihetta. Tällöin lähdekoodia ajetaan lause lauseelta
tulkin (engl. *interpreter*) avulla. Käännetyt kielet ovat olleet perinteisesti
nopeampia, koska käännösvaiheessa voidaan tehdä optimointeja, joita tulkki ei
pysty tekemään reaaliajassa. 

Nykyaikaiset tulkit ovat kuitenkin pystyneet kuromaan tätä eroa jossain määrin
kiinni. Jos käännetyn ja tulkatun kielen välillä täytyy valita, voi valinta toki
toki erityisissä tilanteissa (kuten aikakriittisissä tai resurssirajoitteisissa
sovelluksissa) riippua suorituskyvystä, mutta usein valinta riippuu myös muista
tekijöistä, kuten ekosysteemistä (esimerkiksi saatavilla olevat kirjastot) ja
kehittäjäyhteisöstä. 

</details>

## Käännösvirheet

Ohjelma ei toimi, jos siinä on virheitä. Virheet luokitellaan yleensä kahteen
kategoriaan: käännösaikaisiin virheisiin (engl. *compilation errors*) ja
suorituksen aikaisiin virheisiin (engl. *runtime errors*). 

Käännösvirheet havaitaan siinä vaiheessa, kun ohjelma käännetään lähdekoodista
suoritettavaksi ohjelmaksi. Ohjelma ei käänny, jos se sisältää käännöksen
estäviä virheitä, kuten syntaksivirheitä. Tällöin kääntäminen ei onnistu eikä
ohjelmaa voi ajaa. Virheet on korjattava ennen uutta kääntämistä. Käännösvirheet
näkyvät kääntäjän antamina virheilmoituksina. Esimerkiksi
Rider-sovelluskehittimessä virheet näkyvät alareunassa olevassa
*Errors*-välilehdessä.

Alla olevassa ohjelmassa on virhe. Klikkaa Play-painiketta nähdäksesi virheilmoitukset.

```csharp
public class Ohjelma
{
    public static void Main()
    {
      System.Console.WriteLine("Heippa, maailma!"
    }
}
```

Kääntäjä kertoo, että rivillä 5 sarakkeessa 50 on virhe, jonka syynä on puuttuva
sulku `)`. Kääntäjä kertoo, että ohjelmassa on toinenkin virhe: riviltä 5
puuttuu myös puolipiste `;`. Käännösvirheeseen tulostuu aina paitsi rivi- ja
sarakenumero, myös C#:n virhekoodi (tässä `CS1026` ja `CS1002`), ja lyhyt kuvaus
virheestä. Korjaa nämä virheet yllä olevassa koodausikkunassa lisäämällä
puuttuvat merkit, että saat virheilmoitukset katoamaan, ja ohjelma käännettyä
onnistuneesti.

Suorituksenaikaiset virheet puolestaan ilmenevät vasta ohjelman ajon aikana, jos
ohjelma kohtaa tilanteen, jota se ei osaa käsitellä. Esimerkiksi jakaminen
nollalla on virhe, joka ilmenee (vasta) ohjelman suorituksen aikana. Jos ohjelma
yrittää suorittaa tällaisen operaation, ohjelma kaatuu suorituksen aikana.

```csharp
public class Ohjelma
{
    public static void Main()
    {
      int a = 10;
      int b = 0;
      int c = a / b;
      System.Console.WriteLine("Tulos: " + c);
    }
}
```

## Yhteenveto

* Lähdekoodi on tekstiä, joka tallennetaan `.cs`-tiedostoon.
* Kääntäjä muuntaa lähdekoodin suoritettavaksi ohjelmaksi. Riderissä *Run*
  tekee sekä kääntämisen että ajamisen.
* Käännösvirhe estää ohjelman kääntymisen ja kertoo rivin ja syyn.
  Suorituksenaikainen virhe ilmenee vasta ajettaessa.
* `Console.WriteLine` tulostaa rivin tekstiä.

## 🤔 Testaa tietosi

Päätä vastaus ensin ja avaa se vasta sitten. Pisteitä ei jaeta, mutta hämärät
kohdat paljastuvat.

<visa>

**Totta vai tarua?**

<details data-vastaus="tarua"><summary>1. Lähdekoodin voi kirjoittaa Wordilla ja tallentaa <code>.docx</code>-tiedostona, kunhan teksti on oikein.</summary>

**Tarua.** Word-tiedostoon tallentuu tekstin lisäksi fontti- ja
asettelutietoa, jota kääntäjä ei ymmärrä. Lähdekoodi on pelkkää tekstiä
`.cs`-tiedostossa, ja sen kirjoittamiseen käytetään tekstieditoria tai Rideriä.

</details>

<details data-vastaus="totta"><summary>2. Jos muutat lähdekoodia, muutokset näkyvät ajettavassa ohjelmassa vasta uuden kääntämisen jälkeen.</summary>

**Totta.** Ajettava ohjelma on käännöksen tulos, eikä se tiedä lähdekoodin
muutoksista mitään. Riderin *Run* kääntää tarvittaessa uudelleen
automaattisesti, joten asiaa ei arjessa huomaa.

</details>

<details data-vastaus="tarua"><summary>3. Käännösvirhe ilmenee vasta, kun ohjelmaa ajetaan.</summary>

**Tarua.** Käännösvirhe estää kääntämisen, joten ohjelmaa ei voi edes ajaa.
Vasta ajettaessa ilmenevät virheet ovat suorituksenaikaisia virheitä, kuten
jakaminen nollalla.

</details>

**Monivalinta.** Yksi vaihtoehto on oikein.

**4.** Mitä kääntäjän virheilmoitus `CS1002: ; expected` tarkoittaa?

a) Ohjelma kaatui puolipisteeseen ajon aikana\
b) Jostakin lauseesta puuttuu puolipiste\
c) Ohjelmassa on liikaa puolipisteitä\
d) Puolipiste on kirjoitettu väärällä fontilla

<details data-vastaus="b"><summary>Näytä vastaus</summary>

**b.** *Expected* tarkoittaa, että kääntäjä odotti puolipistettä eikä
löytänyt sitä. Rivi- ja sarakenumero kertovat, mistä katsoa. Ohjelma ei ole
ajossa, koska se ei kääntynyt.

</details>

**5.** Mikä seuraavista tulostaa rivin `Moi!` ja kääntyy virheettä?

a) `Console.WriteLine(Moi!);`\
b) `Console.WriteLine("Moi!")`\
c) `Console.WriteLine("Moi!");`\
d) `console.writeline("Moi!");`

<details data-vastaus="c"><summary>Näytä vastaus</summary>

**c.** Vaihtoehdosta a puuttuvat lainausmerkit, b:stä puolipiste, ja d:ssä
isot ja pienet kirjaimet ovat väärin. C# erottaa `Console`n ja `console`n
toisistaan, eikä jälkimmäistä ole olemassa.

</details>

</visa>

## 📝 Tehtävät

<task>
  <task-title>Tehtävä T1*: Tulostaminen <points>1 p.</points> </task-title>
  <handout>

  {{#include ../exercises/1-2-1-tulostaminen/handout.md}}

  </handout>
  <task-link><a href="https://tim.jyu.fi/view/kurssit/tie/itkp102/demot/demo1#tehtava_tulostaminen_header">Tee tehtävä  TIMissä</a></task-link>
</task>

<task>
  <task-title>Tehtävä T2*: Ensimmäinen oma ohjelma <points>1 p.</points> </task-title>
  <handout>

  {{#include ../exercises/1-2-2-oma_ohjelma/handout.md}}

  </handout>
  <task-link><a href="https://tim.jyu.fi/view/kurssit/tie/itkp102/demot/demo1#tehtava_oma_ohjelma_header">Tee tehtävä TIMissä</a></task-link>
</task>