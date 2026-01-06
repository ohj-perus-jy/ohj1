# <span class="part-icon">👨🏻‍💻</span> Ensimmäinen ohjelma

## Lähdekoodin kirjoittaminen

Tietokoneohjelma on joukko ohjeita, jotka tietokone suorittaa. Ohjelmoija
kirjoittaa nämä ohjeet käyttäen ohjelmointikieltä, kuten C#. Tätä kirjoitettua
koodia kutsutaan *lähdekoodiksi*. 

Olemme kirjoittaneet sinulle valmiiksi pienen C#-ohjelman, joka tulostaa tekstin
"Heippa, maailma!" näytölle. Voit klikata koodilohkon oikeassa reunassa olevaa
Play-napin muotoista painiketta ajaaksesi ohjelman. Ohjelman pitäisi näyttää
teksti `Heippa, maailma!`.

```csharp
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

```csharp
public class Ohjelma
```

Tämä rivi määrittelee uuden *luokan* (engl. *class*) nimeltä `Ohjelma`.
C#-kielessä kaikki koodi kirjoitetaan luokkien sisälle. Luokka on kuin säiliö,
joka voi sisältää tietoa ja toiminnallisuutta.

```csharp
{
```

Tämä aaltosulku `{` kertoo, mistä luokan varsinainen sisältö alkaa. Kaikki, mitä
luokan sisällä tehdään, kirjoitetaan tämän ja vastaavan sulkevan aaltosulun `}`
väliin.

```csharp
    public static void Main()
```

Tämä rivi määrittelee *aliohjelman* imeltä `Main`. Tutustumme aliohjelmiin tarkemmin osassa 3, mutta lyhyesti: 
aliohjelma on joukko ohjeita, jotka suoritetaan, kun aliohjelmaa kutsutaan. `Main`-aliohjelma on erityinen, koska se on ohjelman aloituspiste -- tietokone alkaa suorittaa ohjelmaa juuri tästä aliohjelmasta.

```csharp
    {
```

Vastaavasti kuin luokan kohdalla, tämä aaltosulku kertoo, mistä aliohjelman
sisältö alkaa. Kaikki aliohjelman sisällä tehtävä kirjoitetaan tämän ja
vastaavan sulkevan aaltosulun `}` väliin.

```csharp
        System.Console.WriteLine("Heippa, maailma!");
```

Tämä rivi on itse asiassa se, joka tekee työn: se tulostaa tekstin "Heippa, maailma!" näytölle. `System.Console.WriteLine` on C#-kielen sisäänrakennettu toiminto, joka hoitaa tekstin tulostamisen konsoli-ikkunaan. Viesti, joka halutaan tulostaa, kirjoitetaan lainausmerkkien sisälle.

Rivi päättyy puolipisteeseen `;`, joka tarkoittaa, että kyseinen *lause* (engl. *statement*) on loppu. C#-kielessä lauseet päättyvät tyypillisesti puolipisteeseen. Käymme lauseita tarkemmin läpi osassa 2.2, mutta tässä riittää tietää, että lausetta voi ajatella kuin käskynä tai ohjeena tietokoneelle. 

```csharp
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
[Työkalut](../tyokalut/tyokalut.md)-kohdasta. .NET-ympäristön asentamisen
jälkeen kääntäminen-ajaminen&ndash;prosessi voidaan tehdä komentoriviltä
seuraavasti. Alla on kaksi komentoa, jotka syötetään komentoriville siinä
kansiossa, missä projekti on tehty. 

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

<details closed><summary>✨ Valinnaista lisätietoa: Käännettävä vai tulkattava kieli?</summary>

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

## 📝 Tehtävät

<task>
  <task-title>Tehtävä T1*: Tulostaminen <points>1 p.</points> </task-title>
  <handout>

  {{#include ../exercises/1-1-1-tulostaminen/handout.md}}

  </handout>
  <task-link><a href="https://tim.jyu.fi/view/kurssit/tie/itkp102/demot/demo1#tehtava_tulostaminen_header">Tee tehtävä  TIMissä</a></task-link>
</task>

<task>
  <task-title>Tehtävä T2*: Ensimmäinen oma ohjelma <points>1 p.</points> </task-title>
  <handout>

  {{#include ../exercises/1-1-2-oma_ohjelma/handout.md}}

  </handout>
  <task-link><a href="https://tim.jyu.fi/view/kurssit/tie/itkp102/demot/demo1#tehtava_oma_ohjelma_header">Tee tehtävä TIMissä</a></task-link>
</task>