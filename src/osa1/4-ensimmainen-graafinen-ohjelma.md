# 🎮 Ensimmäinen graafinen ohjelma

Konsoliohjelmat ovat hyvä tapa oppia, mutta tunnustetaan: tekstiä tulostava
ohjelma ei ole se, minkä takia useimmat haluavat oppia ohjelmoimaan. Tässä
luvussa tehdään ensimmäinen graafinen ohjelma *Jypeli*-kirjastolla: avataan
ikkuna ja piirretään siihen jotakin. Samalla nähdään, mitä *kirjaston*
käyttäminen käytännössä tarkoittaa.

Luvussa käytetään olioita (`new`, ominaisuudet, `Add`) selittämättä niitä
vielä tarkasti. Olioihin palataan kunnolla luvussa [Jypeli ja
oliot](../osa3/5-jypeli-ja-oliot.md). Nyt riittää, että saat jotakin näkyviin
ja uskallat muuttaa sitä.

## Miksi pelikirjasto?

Ajattele, mitä kaikkea vaaditaan, jotta näytöllä liikkuu pallo: on avattava
ikkuna, piirrettävä pallo pikseli kerrallaan, pyyhittävä se pois ja
piirrettävä uuteen paikkaan kuusikymmentä kertaa sekunnissa, luettava
näppäimistöä ja laskettava, osuuko pallo seinään. Jokainen näistä on
itsessään viikkojen työ, eikä yksikään niistä ole *sinun* pelisi idea.

*Pelimoottori* on kirjasto, joka on tehnyt tämän kaiken valmiiksi. Jypeli on
Jyväskylän yliopistossa kehitetty, C#-kielellä kirjoitettu pelimoottori, joka
on suunniteltu erityisesti opetuskäyttöön. Sillä tehdään esimerkiksi:

* **Fysiikkapelejä**, joissa esineet putoavat, pomppivat ja törmäilevät ilman
  että törmäyksiä lasketaan itse. Linkopeli, jossa ammutaan esineitä kohti
  rakennelmia, on klassinen harjoitustyön aihe.
* **Tasohyppelyitä**, joissa hahmo juoksee ja hyppii kentässä, jonka voi
  piirtää tekstitiedostoon merkeillä `#` ja `*`.
* **Pong-, Breakout- ja Asteroids-tyylisiä klassikoita**, jotka mahtuvat
  muutamaan sataan riviin.

Tämän kurssin [harjoitustyö](../harjoitustyo.md) on Jypeli-peli. Jypeliin on
tarjolla paljon valmiita ohjeita ja esimerkkejä, jotka auttavat sinua pääsemään
alkuun pelien tekemisessä:

* [Jypelin ohjeet (wiki)](https://tim.jyu.fi/view/kurssit/jypeli/wiki)
* [Jypelin koodidokumentaatio](http://kurssit.it.jyu.fi/npo/material/latest/documentation/html/)

## Ensimmäinen Jypeli-ohjelma

Tehdään pieni Jypeli-esimerkki, jossa luodaan ikkuna ja piirretään siihen
ympyrä.

> [!HUOMAUTUS]
> Jos haluat kokeilla tätä koodia itse, sinulla tulee olla kehitystyökalut
> asennettuna; ohjeet löytyvät [Työkalut-sivulta](../tyokalut.md#jetbrains-rider).
> Luo uusi Fysiikkapeli-projekti Riderissa ja korvaa `Begin`-metodin sisältö
> alla olevalla koodilla. Suorita sitten peli painamalla vihreää
> "Play"-painiketta ikkunan yläreunassa.

```csharp,feature-jypeli
using Jypeli;
public class YmpyraPeli : PhysicsGame
{
    public override void Begin()
    {
        GameObject ympyra = new GameObject(50, 50);
        ympyra.Shape = Shape.Circle; 
        ympyra.Position = new Vector(0, 0); // Asetetaan ympyrä keskelle ikkunaa
        Add(ympyra); // Lisätään ympyrä peliin
    }
}
```

Voit käynnistää pelin yllä klikkaamalla oikean yläreunan vihreää
"Play"-painiketta. Ikkunaan pitäisi ilmestyä keskelle pieni ympyrä.

Huh! Siinä oli jo aika paljon uutta. Käydään koodi läpi vaiheittain.

Ensimmäinen rivi ottaa Jypeli-kirjaston käyttöön. Ilman sitä kääntäjä ei
tietäisi, mitä `GameObject` tai `Shape` tarkoittavat.

```csharp,ignore
using Jypeli;
```

Luokka määritellään samoin kuin konsoliohjelmassa, mutta perään on lisätty
`: PhysicsGame`. Se tarkoittaa, että luokkamme *on* Jypelin fysiikkapeli ja saa
käyttöönsä kaiken, mitä Jypeli osaa. `Begin` on aliohjelma, jonka Jypeli
suorittaa, kun peli käynnistyy; se vastaa konsoliohjelman `Main`-aliohjelmaa.
(Jypeli-projektissa `Main` on erillisessä `Ohjelma.cs`-tiedostossa, ja sen
ainoa tehtävä on käynnistää peli.)

```csharp,ignore
public class YmpyraPeli : PhysicsGame
{
    public override void Begin()
```

`Begin`-aliohjelman ensimmäinen rivi luo uuden muuttujan nimeltä `ympyra`, joka
on tyyppiä `GameObject`. Sen leveydeksi ja korkeudeksi annetaan `50`.

```csharp,ignore
GameObject ympyra = new GameObject(50, 50);
```

Seuraavaksi asetamme `ympyra`-muuttujan muodoksi `Shape.Circle` ja sijainniksi
vektorin, joka osoittaa keskipisteeseen `new Vector(0, 0)`.

```csharp,ignore
ympyra.Shape = Shape.Circle; // Asetetaan muodoksi Shape.Circle
ympyra.Position = new Vector(0, 0); // Asetetaan ympyrä keskelle ikkunaa
```

Lopuksi lisäämme `ympyra`-muuttujan näkyviin kutsumalla Jypelin `Add`-metodia.
`ympyra`-muuttuja on siis olemassa jo heti ensimmäisen rivin jälkeen, mutta se
pitää erikseen vielä lisätä "pelimaailmaan". Unohtunut `Add` on aloittelijan
yleisin syy siihen, että ikkuna on tyhjä ja kääntäjä täysin tyytyväinen.

```csharp,ignore
Add(ympyra); // Lisätään ympyrä peliin
```

## Koordinaatisto

Jypelin koordinaatisto on samanlainen kuin matematiikan tunnilla: origo
`(0, 0)` on ikkunan keskellä, x kasvaa oikealle ja y kasvaa *ylöspäin*. Moni
muu grafiikkakirjasto laskee y:n ylhäältä alas, joten tämä on hyvä painaa
mieleen.

```bob
                    y
                    ^
     (-150, 100)    |
          o         |
                    |
  ------------------+------------------> x
                    | (0, 0)
                    |
                    |          o (150, -100)
                    |
```

Ikkunan reunojen koordinaatit saa Jypeliltä ominaisuuksista `Screen.Left`,
`Screen.Right`, `Screen.Top` ja `Screen.Bottom`, joten esineen voi sijoittaa
reunaan tietämättä ikkunan kokoa.

## Kokeile itse

Muokkaa yllä olevaa esimerkkiä ja aja se uudelleen jokaisen muutoksen jälkeen.
Pienet kokeilut ovat nopein tapa oppia, mitä kirjasto osaa.

1. Vaihda ympyrän kooksi `200, 200`.
2. Vaihda muodoksi `Shape.Rectangle`, `Shape.Triangle` tai `Shape.Star`.
3. Lisää rivi `ympyra.Color = Color.Red;` ennen `Add`-riviä.
4. Siirrä ympyrä oikeaan yläkulmaan: `new Vector(300, 200)`.
5. Lisää toinen olio kopioimalla neljä riviä ja vaihtamalla muuttujan nimeksi
   `nelio`.

Alla on valmis esimerkki, jossa on kaksi oliota ja tumma tausta.

```csharp,feature-jypeli
using Jypeli;
public class AurinkoJaTalo : PhysicsGame
{
    public override void Begin()
    {
        Level.Background.Color = Color.Black;

        GameObject aurinko = new GameObject(120, 120);
        aurinko.Shape = Shape.Circle;
        aurinko.Color = Color.Yellow;
        aurinko.Position = new Vector(-150, 100);
        Add(aurinko);

        GameObject talo = new GameObject(200, 150);
        talo.Shape = Shape.Rectangle;
        talo.Color = Color.Brown;
        talo.Position = new Vector(150, -100);
        Add(talo);
    }
}
```

Huomaa, että jokaisella oliolla on oma muuttujansa (`aurinko`, `talo`) ja
jokainen pitää erikseen lisätä peliin `Add`-kutsulla. Ohjelma suoritetaan
ylhäältä alas, joten myöhemmin lisätty olio piirtyy aiemman päälle.

## Jypeli-projektit

Jypeli-projektin voi tehdä valitsemalla solutionia tai projektia luodessa
`Custom Templates` -kohdasta oikean projektimallin.

- `ConsoleMain` (Konsolisovellukset, joissa on Ohj1 kurssin pohja)
- `Fysiikkapeli` (Fysiikkaa käyttävät pelit ja muut graafiset sovellukset)
- `Tasohyppelypeli` (Esimerkkipeli)
- `Android Fysiikkapeli` (Android-alustaa varten)

Solutionin ja projektin luominen on kuvattu luvussa [Ohjelmointiympäristö
kuntoon](./3-ohjelmointiymparisto-kuntoon.md#uusi-solution).

## Pääohjelma Jypeli-projekteissa (Main)

Jypeli-projektissa Main-pääohjelma menee Ohjelma.cs-tiedostoon, joten jos
copy-pastetat koodin, joka sisältää Main-pääohjelman, niin **poista
Main-pääohjelma** `Portaat`-luokan (tms. projektisi nimeä vastaava luokka)
sisältä. Projektissa ei saa olla kahta Main-pääohjelmaa.

## Sisällön tuominen Jypeli-projektiin (Content-kansio)

Kuvat ja äänet lisätään peliprojektin Content-kansioon, joka näkyy editorin
tiedostolistauksessa.

Content-kansion voi luoda klikkaamalla hiiren oikealla projektia <i class="bi bi-chevron-right"></i> *Add* <i class="bi bi-chevron-right"></i> *Directory*

![Sisällön lisääminen](./images/new_content_directory.jpg)

 1. Lisää tiedosto klikkaamalla kansiota hiiren oikealla napilla <i class="bi bi-chevron-right"></i> *Add* <i class="bi bi-chevron-right"></i> *Add Existing Item*
 1. Valitse tiedosto(t) jonka haluat lisätä ja paina ok.
 1. Valitse Copy.
 1. Klikkaa tuomaasi tiedostoa Content-kansiossa hiiren oikealla ja valitse Properties
 1. Vaihda *Copy to output directory* -kohtaan "Copy if newer"

## Yhteenveto

* Jypeli on pelikirjasto: ikkuna, piirtäminen, fysiikka ja ohjaimet ovat
  valmiina.
* Jypeli-peli on luokka, joka perii `PhysicsGame`-luokan. `Begin` suoritetaan
  pelin alkaessa.
* Peliolio luodaan `new`-sanalla, sen ominaisuuksia (muoto, väri, sijainti)
  asetetaan pisteellä, ja se lisätään peliin `Add`-kutsulla.
* Origo on ikkunan keskellä ja y kasvaa ylöspäin.

## 🤔 Testaa tietosi

Päätä vastaus ensin ja avaa se vasta sitten. Pisteitä ei jaeta, mutta hämärät
kohdat paljastuvat.

<visa>

**Totta vai tarua?**

<details data-vastaus="tarua"><summary>1. Jypelissä origo <code>(0, 0)</code> on ikkunan vasemmassa yläkulmassa.</summary>

**Tarua.** Origo on ikkunan keskellä, ja y kasvaa ylöspäin kuten
matematiikassa. Monessa muussa grafiikkakirjastossa asia on toisin, joten
sekaannus on ymmärrettävä.

</details>

<details data-vastaus="totta"><summary>2. <code>Begin</code>-aliohjelma suoritetaan kerran, kun peli käynnistyy.</summary>

**Totta.** Siihen kirjoitetaan pelin alkutilanne: taustaväri, oliot ja niiden
lisääminen peliin.

</details>

<details data-vastaus="tarua"><summary>3. Kun olio on luotu <code>new</code>-sanalla, se näkyy ruudulla heti.</summary>

**Tarua.** Luotu olio on vain muistissa, kunnes se lisätään peliin
`Add`-kutsulla. Unohtunut `Add` on yleisin syy tyhjään ruutuun.

</details>

**Monivalinta.** Yksi vaihtoehto on oikein.

**4.** Mikä rivi saa pallon näkymään pelissä?

a) `pallo.Color = Color.White;`\
b) `Add(pallo);`\
c) `new PhysicsObject(200, 200, Shape.Circle);`\
d) `Level.Background.Color = Color.Black;`

<details data-vastaus="b"><summary>Näytä vastaus</summary>

**b.** Vaihtoehto c luo olion muistiin, mutta ei lisää sitä peliin. a asettaa
pallon värin ja d taustan värin. Ilman `Add`-kutsua kumpikaan ei näy missään.

</details>

**5.** Olion sijainniksi asetetaan x = 0 ja y = `Screen.Top`. Missä olio näkyy?

a) Ikkunan keskellä\
b) Ikkunan yläreunassa keskellä\
c) Ikkunan alareunassa keskellä\
d) Ikkunan oikeassa reunassa

<details data-vastaus="b"><summary>Näytä vastaus</summary>

**b.** x = 0 on vaakasuunnassa keskellä, ja `Screen.Top` on yläreunan
y-koordinaatti. Koska y kasvaa ylöspäin, yläreuna on positiivisella puolella.
Puolet oliosta jää tosin reunan taakse piiloon, sillä sijainti tarkoittaa olion
keskipistettä.

</details>

</visa>

## Tehtävät

<!-- Vaiheessa B: T-tehtävä "Oma kuvio" (vähintään kolme eri muotoista ja
     väristä oliota) ja "Lumiukko" (kolme palloa päällekkäin). -->
