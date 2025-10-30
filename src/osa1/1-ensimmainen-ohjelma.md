# <span class="part-icon">👨🏻‍💻</span> Ensimmäinen ohjelma

## Lähdekoodin kirjoittaminen

Tietokoneohjelma on joukko ohjeita, jotka tietokone suorittaa. Ohjelmoija kirjoittaa nämä ohjeet käyttäen ohjelmointikieltä, kuten C#. Tätä kirjoitettua koodia kutsutaan *lähdekoodiksi*. 

Olemme kirjoittaneet sinulle valmiiksi pienen C#-ohjelman, joka tulostaa tekstin "Heippa, maailma!" näytölle. Voit klikata koodilohkon oikeassa reunassa olevaa *Run* -painiketta ajaaksesi ohjelman. Ohjelman pitäisi näyttää teksti `Heippa, maailma!`.

```csharp
Console.WriteLine("Heippa, maailma!");
```

Tämä on ehkäpä yksinkertaisin mahdollinen esimerkki, mutta silti se on täysin toimivan tietokoneohjelman lähdekoodi (joskaan ohjelma ei ole maailman mielenkiintoisin)! Lupaamme, että opit pian kirjoittamaan monimutkaisempia ohjelmia itse -- mutta aloitetaan pienestä.

> [!TODO]
> Selitys mitä tuo koodi tarkoittaa

Lähdekoodia voi periaatteessa kirjoittaa millä tahansa *tekstieditorilla*, eli ohjelmalla, jolla voi kirjoittaa ja muokata pelkkää tekstiä ilman erityisiä muotoiluja tai tyylejä. Olet ehkä jo käyttänytkin tekstieditoria, kuten Muistio (Notepad) Windowsissa tai TextEdit macOS:ssä. Tässä "pelkkä teksti" tarkoittaa, että teksti todella tallennetaan tietokoneen muistiin sellaisenaan; esimerkiksi Word-asiakirjaan tallentuu tosiasiassa aina paljon muutakin tietoa, kuten fontti- ja asettelutietoja.

Lähdekoodi tallennetaan tiedostoon, joka C#-kielen tapauksessa päättyy yleensä `.cs` -tiedostopäätteeseen, kuten `Ohjelma.cs`. Tällöin käyttöjärjestelmä tunnistaa tiedoston C#-lähdekooditiedostoksi. 

> [!TODO]
> Pitäisiköhän tässä välissä selittää miten editori avataan, miten tiedosto luodaan ja miten se tallennetaan?

## Kääntäminen ja ajaminen

Kun ohjelmoija on kirjoittanut lähdekoodin, se täytyy muuntaa sellaiseen muotoon, että tietokone voi suorittaa sen. C#-kielen kohdalla tätä muodonmuutosta kutsutaan *kääntämiseksi* (engl. *compilation*), ja useiden vaiheiden seurauksena syntyy niin sanottu konekielinen ohjelma, joka voidaan käynnistää tietokoneella. Kääntäminen tapahtuu *kääntäjällä* (engl. *compiler*), joka on erityinen ohjelma, joka lukee lähdekoodin ja tuottaa siitä suoritettavan ohjelman.

Tämä käännetty ohjelma voidaan sitten *ajaa* (engl. *run*), eli käynnistää tietokoneella. Tämä kääntäminen-ajo-prosessi voidaan tehdä komentoriviltä seuraavasti. Alla on kaksi komentoa, jotka syötetään komentoriville siinä kansiossa, missä projekti on tehty. 

```bash
dotnet build
dotnet run
```

Ohjelma on käännettävä aina koodin muuttamisen jälkeen, jotta muutokset tulevat voimaan.

Sovelluskehittimessä (esim. Rider) kääntäminen tapahtuu klikkaamalla *Run* tai *Debug*. Noiden painikkeiden painamiseurauksena tapahtuu sekä kääntäminen että ajaminen. 

> [!LISÄTIETOA]
> Osa ohjelmointikielistä on käännettäviä, kuten C#, Java ja C++, kun taas osa on *tulkattavia*, kuten Python ja JavaScript. Tulkatuissa kielissä lähdekoodia suoritetaan ilman erillistä käännösvaihetta. Käännetyt kielet ovat olleet perinteisesti nopeampia, mutta nykyaikaiset tulkit ovat hyvin optimoituja, joten ero on kaventunut. Käytännön sovelluksissa valinta käännetyn ja tulkatun kielen välillä voi toki erityisissä tilanteissa (kuten aikakriittiset tai resurssirajoitteiset sovellukset) riippua suorituskyvystä, mutta usein valinta riippuu myös muista tekijöistä, kuten ekosysteemistä (esimerkiksi saatavilla olevat kirjastot) ja kehittäjäyhteisöstä. 

## Käännösvirheet

Ohjelma ei käänny, jos se sisältää käännöksen estäviä virheitä, kuten syntaksivirheitä. Tällöin kääntäminen ei onnistu eikä ohjelmaa voi ajaa. Virheet on korjattava ennen uutta kääntämistä. Huomaa, että kääntäjä ei havaitse muita virheitä, kuten loogisia virheitä, joskin nykyaikaiset IDE:t auttavat niiden havaitsemisessa.

> [!TODO]
> Esimerkki

## 📝 Tehtävät

[Tee TIMissä tehtävät 1 ja 2.]