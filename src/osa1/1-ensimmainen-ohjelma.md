# <span class="part-icon">👨🏻‍💻</span> Ensimmäinen ohjelma

## Lähdekoodin kirjoittaminen

Tietokoneohjelma on joukko ohjeita, jotka tietokone suorittaa. Ohjelmoija kirjoittaa nämä ohjeet käyttäen ohjelmointikieltä, kuten C#. Tätä kirjoitettua koodia kutsutaan *lähdekoodiksi*. 

Olemme kirjoittaneet sinulle valmiiksi pienen C#-ohjelman, joka tulostaa tekstin "Heippa, maailma!" näytölle. Voit klikata koodilohkon oikeassa reunassa olevaa *Run* -painiketta ajaaksesi ohjelman. Ohjelman pitäisi näyttää teksti `Heippa, maailma!`.

```csharp
Console.WriteLine("Heippa, maailma!");
```

Tämä on ehkäpä yksinkertaisin mahdollinen esimerkki, mutta silti se on täysin toimiva tietokoneohjelma (joskaan ei maailman mielenkiintoisin)! Lupaamme, että opit pian kirjoittamaan monimutkaisempia ohjelmia itse -- mutta aloitetaan pienestä.

Lähdekoodia voi kirjoittaa millä tahansa tekstieditorilla. Tekstieditori on ohjelma, jolla voi kirjoittaa ja muokata pelkkää tekstiä ilman erityisiä muotoiluja tai tyylejä. Olet ehkä käyttänyt tekstieditoria, kuten Muistio (Notepad) Windowsissa tai TextEdit macOS:ssä.  

Lähdekoodi tallennetaan tekstitiedostoon, joka yleensä päättyy `.cs` -tiedostopäätteeseen C#:ssa.

## Kääntäminen ja ajaminen

Kääntäminen tarkoittaa ohjelmoijan kirjoittaman ohjelmakoodin muuttamista tietokoneelle suoritettavaksi ohjelmaksi, konekielelle. Sovelluskehittimessä (esim. Rider) kääntäminen tapahtuu klikkaamalla *Run* tai *Debug*. Tarkasti ottaen noiden painikkeiden painaminen aiheuttaa kaksi asiaa: kääntämisen ja ohjelman käynnistämisen ("ajaminen"). Ohjelmaa voidaan kääntää ja ajaa myös komentoriviltä, esimerkiksi seuraavasti:

```bash
dotnet build
dotnet run
```

Ohjelma on käännettävä aina koodin muuttamisen jälkeen, jotta muutokset tulevat voimaan.

## Käännösvirheet

Ohjelma ei käänny, jos se sisältää käännöksen estäviä virheitä, kuten syntaksivirheitä. Tällöin kääntäminen ei onnistu eikä ohjelmaa voi ajaa. Virheet on korjattava ennen uutta kääntämistä. Huomaa, että kääntäjä ei havaitse muita virheitä, kuten loogisia virheitä, joskin nykyaikaiset IDE:t auttavat niiden havaitsemisessa.

> [!TODO]
> Esimerkki

## 📝 Tehtävät

[Tee TIMissä tehtävät 1 ja 2.]