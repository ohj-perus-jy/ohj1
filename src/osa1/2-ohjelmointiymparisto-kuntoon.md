# Ohjelmointiympäristö kuntoon

Ensimmäisten viikkojen tehtävät voi periaatteessa suorittaa verkkoselaimessa,
mutta varsin pian on tarpeen saada oma ohjelmointiin sopiva ympäristö toimimaan
tietokoneella. Sovelluskehittimen (engl. Integrated Development Environment,
IDE) asentaminen omalle tietokoneelle on tärkeä askel kohti itsenäisempää
ohjelmointia. IDE mahdollistaa esimerkiksi seuraavat asiat: 

 * koodin kirjoittaminen
 * koodin kääntäminen ohjelmaksi
 * virheiden ja ongelmien etsiminen koodissa
 * koodin navigointi- ja refaktorointityökaluja, kuten "Etsi koodista",
   kirjoittamisen aikaiset ehdotukset, koodin massamuokkaaminen
 * ohjelman virheiden jäljitys eli *debuggaus*
 * samaan asiakokonaisuuteen liittyvän koodin hallinta ("projektit")
 * versionhallinnan tuki

Lisäksi itse asennettua IDE-ympäristöä on helpompi mukauttaa omien tarpeiden mukaan,
kuten vaihtaa värejä, fontteja ja muita asetuksia. 

Ellet ole vielä asentanut kehitystyökaluja, tee se nyt [Työkalut-sivun](../tyokalut.md)
ohjeiden mukaisesti.

IDE-ympäristöjä on useita eri ohjelmointikielille ja ympäristöille. Ohjelmointi
1 -opintojaksolla käytetään JetBrains Rider-kehitysympäristöä, joka on
erityisesti C#- ja .NET-ajoympäristölle tarkoitettu IDE. Riderilla voi tehdä
niin tekstipohjaisia sovelluksia kuin Jypeli-pelejäkin. 

Vaihtoehtoisesti voit käyttää myös **Visual Studio Code** -editoria (lyhyesti VS
Code), joka on hyvin suosittu tekstieditori, jota voi käyttää myös IDE:nä.

Sivuhuomiona mainittakoon, että kaikenlaiset pilvipalvelut ovat yleistyneet, ja
myös pilvipohjaisia kehitysympäristöjä on olemassa. Kuitenkin edelleen yleinen
käytäntö ohjelmoinnin opiskelussa, kuten myös Ohjelmointi 1 -kurssilla, on
asentaa kehitysympäristö omalle paikalliselle tietokoneelle. Oman
kehitysympäristön käyttö on yleensä nopeampaa, edullisempaa ja joustavampaa kuin
pilvipohjaiset ratkaisut. Myös työelämässä paikalliset kehitysympäristöt ovat
yleensä vallitseva käytäntö.

## Suositeltava hakemistorakenne

Kaikki tämän opintojakson asiat kannattaa tehdä esimerkiksi kansioon nimeltä
`ohj1`. Se, mihin tämä kansio kannattaa sijoittaa tietokoneellasi paikkaan
riippuu käyttöjärjestelmästäsi ja omista mieltymyksistäsi.

Sopivia sijainteja ovat esimerkiksi:

 * Windows: `C:\Users\<käyttäjätunnus>\ohj1` tai `C:\Opiskelu\ohj1`
 * Mac ja Linux: `~/ohj1` 

Korvaa `<käyttäjätunnus>` omalla käyttäjänimelläsi tai vastaavalla tunnisteella.
Omalla koneella sen ei tietenkään tarvitse olla sama kuin yliopiston
käyttäjänimi. 

Agoran tietokoneluokassa käytä kansionimeä: `c:\MyTemp\<käyttäjätunnus>\ohj1`

Kansio voi sijaita jossain muuallakin. **Tärkeintä on, että itse tiedät missä
kansiossa työskentelet, ja että löydät sen helposti myöhemmin.**

Tämän `ohj1`-kansion alle kannattaa luoda kaksi alikansiota: `demot` ja
`harjoitustyo`.

Rakenne näyttäisi nyt tältä. 

```bob
ohj1
 |
 +-demot 
 '-harjoitustyo
```

## Riderin peruskäyttö: solution ja projekti

Rider käyttää ns. *solution-projekti*-rakennetta koodin organisointiin. Projekti
kuuluu aina johonkin *solutioniin*. Yksi solution voi sisältää yhden tai
useampia projekteja. *Projekti* sisältää yhteen ohjelmaan (peliin tai
konsolisovellukseen) liittyvän koodin ja grafiikka- ja musiikkitiedostot.

Esimerkiksi yksi demokerta, esimerkiksi `demo1` voi olla yksi solution, ja se
sisältää useita projekteja (demotehtäviä), kuten `Lumiukko` ja `HelloWorld`.
Useiden projektien lisäämisessä samaan solutioniin on se etu, että silloin voi
pitää samaan demoon liittyvät tehtävät yhtä aikaa näkyvillä ilman että niitä
tarvitsee jatkuvasti avata tai sulkea.

Sivuhuomiona mainittakoon, että solution on [Microsoftin keksimä
nimi](https://learn.microsoft.com/en-us/visualstudio/ide/solutions-and-projects-in-visual-studio?view=vs-2022#solutions)
tällaiselle projekteja koostavalle kapistukselle. Sana ei varsinaisesti tarkoita
mitään.

## Uusi solution

Katsotaan nyt uuden solutionin ja projektin luomista Riderissa. Tämän luvun
aikana tehdään yksi solution (`demo1`) ja siihen kolme projektia: `Lumiukko`,
`HelloWorld` ja `YmpyraPeli`.

Luodaan uusi solution ja siihen projekti edellä luodun kansiorakenteen
alaisuuteen. Tässä esimerkissä luodaan demo1-niminen solution ja siihen
Lumiukko-niminen projekti `demot`-alikansioon. Mikäli haluat lisätä projektin
olemassa olevaan solutioniin, katso luku [Uusi projekti olemassa olevaan
solutioniin](#uusi-projekti-solutioniin).

* Valitse `New Solution`. Mikäli joku vanha solution on jo auki, niin sama
  onnistuu yläpalkista *File* › *New Solution*. ![Uusi solution
  Linuxissa](./images/new_solution_linux.png)
* Valitse vasemmalta Custom templates -listasta `FysiikkaPeli`.
* Anna solutionin nimeksi `demoX`, esimerkiksi `demo1`
* Anna projektin nimi, esimerkiksi `Lumiukko` tai `Teht3Lumiukko` riippuen
  tehtävästä mitä olet tekemässä (Huom **Iso** alkukirjan!). 
* Kirjoita tai selaa poluksi edellisessä kohdassa tekemäsi kansion sijainti. Jos
  olet tekemässä demoja, niin tähän kohtaan tulee esimerkiksi
  `C:\Users\<käyttäjätunnus>\kurssit\ohj1` (Windows) tai
  `~/kurssit/ohj1` (Mac ja Linux).
  
    Yliopiston mikroluokissa projekti tulee tehdä ensin tietokoneen kiintolevylle,
    esim. `C:\MyTemp\<käyttäjätunnus>\...`. Siirrä lopuksi tiedostot muualle
    talteen. 
* Jätä `Put solution and project in the same directory`-boksi tyhjäksi.
* `Framework`-kohtaan `net8.0`
* Klikkaa `Create`.
* Tutki syntynyttä tiedostohierarkiaa esimerkiksi tiedostohallinnassa tai
  Finderissa. Hierarkian pitäisi näyttää suurin piirtein tältä:

```bob
ohj1
 |
 +-demot 
 |  |
 |  '-demo1         <- tämä tehtiin nyt
 |     |-demo1.sln  <- tämä tehtiin nyt  
 |     '-Lumiukko   <- tämä tehtiin nyt 
 |        |
 |        |- bin            
 |        |- obj            
 |        |- Lumiukko.cs    
 |        |- Ohjelma.cs     
 |        '- Lumiukko.csproj
 |
 '-harjoitustyo
```

Lyhyt selitys demo1-kansion sisältämistä tiedostoista ja kansioista:

```
demo1                - kansio joka sisältää demo1-solutionin
  demo1.sln          - solution-tiedosto, jossa luetellaan projektit
  Lumiukko           - kansio, jonka alla Lumiukko-projekti     
    bin              - kansio, jonne tulee ajettavaa koodia
    obj              - kansio, jonne tulee käännettyjä tiedostoja
    Lumiukko.cs      - C#-lähdekooditiedosto, johon tulee lumiukon piirtävä koodi
    Ohjelma.cs       - C#-lähdekooditiedosto, joka sisältää pääohjelman
    Lumiukko.csproj  - projektin asetustiedosto, jossa kerrotaan mitä tiedostoja
                       projektiin liittyy
```

* Klikkaa Solution Explorerissa `Lumiukko.cs`-kooditiedostoa.  Koodissa pitäisi näkyä:

```csharp,ignore
public class Lumiukko : PhysicsGame
{
    public override void Begin()
    {
        // Kirjoita ohjelmakoodisi tähän
        PhoneBackButton.Listen(ConfirmExit, "Lopeta peli");
        Keyboard.Listen(Key.Escape, ButtonState.Pressed, ConfirmExit, "Lopeta peli");
    }
}
```

* Kokeile käynnistää ohjelma `Run/Run 'Lumiukko'`, jolloin pitäisi näkyä uusi ikkuna vaaleansinisellä taustalla. Jos kaikki toimii, sulje ikkuna.
* Pyyhi pois koko se rivi jossa lukee "`Kirjoita ohjelmakoodisi tähän`" ja kirjoita tilalle
    
```csharp,ignore
Level.Background.Color = Color.Black;
PhysicsObject pallo = new PhysicsObject(200, 200, Shape.Circle);
pallo.Color = Color.White;
Add(pallo);
```

* Käynnistä ohjelma uudestaan ja tarkista että ohjelma muuttui.

* Kirjoita luokan dokumentaatiokommentti näppäilemällä **luokan** esittelyrivin (eli`public class...`) yläpuolelle kolme kauttaviivaa
  `///`.  Kirjoita `<summary>`-tagien väliin selvitys luokan toiminnasta (eli että
  piirretään lumiukko)
* Kirjoita vastaavasti `Begin`-metodin dokumentaatiokommentit.

## Uusi projekti olemassa olevaan solutioniin {#uusi-projekti-solutioniin}

Oletetaan, että solution on jo olemassa. 
Lisätään siihen toinen projekti olemassa olevan lisäksi. 
Tässä esimerkissä luodaan uusi ConsoleMain-projekti olemassa olevaan `demo1`-solutioniin. 

- Klikkaa Explorer-paneelissa solutionin `demo1` nimeä hiiren oikealla (Macissa kahdella sormella).
- Valitse *Add* › *New Project*
- Valitse vasemmalta `ConsoleMain`-projektimalli
- Anna nimeksi `HelloWorld`
- Paina `Create`.
- Ensimmäisellä kerralla projekti ajetaan klikkaamalla Explorerissa sen nimeä `HelloWorld`
  hiiren oikealla ja valitse `Run HelloWorld`. Myöhemmillä kerroilla voit
  käynnistää projektin käynnistämällä yläpalkista haluamasi projektin.

```bob
ohj1
 |
 +-demot 
 |  |
 |  '-demo1
 |  |  |
 |  |  |-demo1.sln 
 |  |  |-Lumiukko  
 |  |  |  '- Lumiukko.cs jne.
 |  |  | 
 |  |  |-HelloWorld  <- tämä tehtiin nyt
 |  |  | 
 |  |  '-...         <- vastaavasti voisit tehdä lisää projekteja
 |  |
 |  '-demo2          <- vastaavasti voisit tehdä lisää solutioneja
 |     |
 |     |-Lumiukko2
 |     |-LukujenLaskemista
 |     '-...
 |
 '-harjoitustyo
    |
    '-...
```

## Jypeli-projektit

Jypeli-projektin voi tehdä valitsemalla solutionia tai projektia luodessa `Custom Templates` -kohdasta oikean projektimallin.

- `ConsoleMain` (Konsolisovellukset, joissa on Ohj1 kurssin pohja)
- `Fysiikkapeli` (Fysiikkaa käyttävät pelit ja muut graafiset sovellukset)
- `Tasohyppelypeli` (Esimerkkipeli)
- `Android Fysiikkapeli` (Android-alustaa varten)

## Graafinen sovellus Jypeli-kirjastolla

Jypeli on C#-kielellä kirjoitettu pelimoottori, joka on suunniteltu erityisesti opetuskäyttöön. Jypeli tarjoaa helppokäyttöisen tavan pelien luomiseen, mikä tekee siitä hyvän valinnan tälle kurssille.

Jypelin avulla voi luoda 2D-pelejä, joissa on grafiikkaa ja ääniä. Jypeliin on tarjolla paljon valmiita [ohjeita ja esimerkkejä](https://jypeli.it.jyu.fi), jotka auttavat sinua pääsemään alkuun pelien tekemisessä. 

Tehdään seuraavaksi luvun kolmas projekti: pieni Jypeli-esimerkki, jossa luodaan
ikkuna ja piirretään siihen ympyrä. Projektin nimeksi tulee `YmpyraPeli`.

- Lisää `demo1`-solutioniin uusi projekti samaan tapaan kuin edellä
  [HelloWorld](#uusi-projekti-solutioniin): klikkaa Explorer-paneelissa
  solutionin `demo1` nimeä hiiren oikealla ja valitse *Add* › *New Project*.
- Valitse vasemmalta `Fysiikkapeli`-projektimalli.
- Anna nimeksi `YmpyraPeli`. Rider nimeää projektin mukaan myös kooditiedoston
  (`YmpyraPeli.cs`) ja siinä olevan luokan, joten luokan nimi on sama kuin alla
  olevassa koodissa.
- Paina `Create`.
- Avaa `YmpyraPeli.cs` ja korvaa `Begin`-metodin sisältö alla olevan koodin
  `Begin`-metodin sisällöllä.
- Aja projekti klikkaamalla Explorerissa sen nimeä `YmpyraPeli` hiiren oikealla
  ja valitsemalla `Run 'YmpyraPeli'`.

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

Voit kokeilla peliä myös suoraan tällä sivulla klikkaamalla yllä olevan koodilaatikon oikean yläreunan vihreää "Play"-painiketta. Ikkunaan pitäisi ilmestyä keskelle pieni ympyrä.

Huh! Siinä oli jo aika paljon uutta. Käydään koodi läpi vaiheittain.

Ensimmäinen rivi luo uuden muuttujan nimeltä `ympyra`, joka on tyyppiä `GameObject`. Sen leveydeksi ja korkeudeksi annetaan `50`.
```csharp,ignore
GameObject ympyra = new GameObject(50, 50);
```

Seuraavaksi asetamme `ympyra` muuttujan muodoksi `Shape.Circle` ja sijainniksi asetetaan vektori, joka osoittaa keskipisteeseen `new Vector(0, 0)`.
```csharp,ignore
ympyra.Shape = Shape.Circle; // Asetetaan muodoksi Shape.Circle
ympyra.Position = new Vector(0, 0); // Asetetaan ympyrä keskelle ikkunaa
```

Lopuksi lisäämme `ympyra` muuttujan näkyviin kutsumalla Jypelin `Add` metodia. `ympyra` muuttuja on siis olemassa jo heti ensimmäisen rivin jälkeen, mutta se pitää erikseen vielä lisätä "pelimaailmaan".
```csharp,ignore
Add(ympyra); // Lisätään ympyrä peliin
```

## Pääohjelma Jypeli-projekteissa (Main)

Jypeli-projektissa Main-pääohjelma menee Ohjelma.cs-tiedostoon, joten jos copy-pastetat
koodin, joka sisältää Main-pääohjelman, niin **poista Main-pääohjelma** `Portaat`-luokan (tms. projektisi nimeä vastaava luokka)
sisältä. Projektissa ei saa olla kahta Main-pääohjelmaa.

## TIM-tehtävien tekeminen Riderissa {#tim-tehtavat-riderissa}

Voit tehdä TIMin harjoitustehtäviä Riderissa. Osassa TIM-tehtävistä on kuitenkin piilotettuja osia: tehtävälaatikossa
näkyy vain se kohta, johon vastaus kirjoitetaan, ja muu ohjelma (esimerkiksi
`using`-rivit, luokan esittely ja pääohjelma) on piilossa. Pelkkä näkyvä osa ei
siksi käänny Riderissa sellaisenaan. Tässä ohjeessa kerrotaan, miten tällaiset
tehtävät kannattaa tehdä Riderissa.

Ideana on kopioida tehtävän koko koodi piilotettuine osineen TIMistä Rideriin,
kirjoittaa ja testata vastaus siellä ja kopioida lopuksi valmis koodi takaisin
TIMiin. Koko koodissa kommentit `BYCODEBEGIN` ja `BYCODEEND` kertovat, mikä osa
koodista on TIMissä näkyvää vastausaluetta.

> [!VINKKI]
> Alla kopioidaan ja liitetään koko tiedoston sisältö kerralla. Kaiken saa
> valittua näppäimillä <kbd>Ctrl</kbd> + <kbd>A</kbd>, kopioitua näppäimillä
> <kbd>Ctrl</kbd> + <kbd>C</kbd> ja liitettyä näppäimillä <kbd>Ctrl</kbd> +
> <kbd>V</kbd>. Macissa käytä <kbd>Ctrl</kbd>-näppäimen sijaan
> <kbd>Cmd</kbd>-näppäintä.

### Komentorivitehtävät {#tim-consolemain}

Komentorivitehtävä tehdään `ConsoleMain`-projektissa.

1. **Riderissa:** Tee uusi projekti ja valitse projektimalliksi `ConsoleMain`.
   Katso tarvittaessa ohjeet luvusta [Uusi projekti olemassa olevaan
   solutioniin](#uusi-projekti-solutioniin).
1. **TIMissä:** Klikkaa tehtävän palautuslaatikossa olevaa *Näytä koko koodi*
   -linkkiä ja sen jälkeen *Copy*-linkkiä. Tehtävän koko koodi on nyt
   leikepöydällä.
1. **Riderissa:** Avaa juuri tekemäsi projektin `.cs`-tiedosto, valitse sen koko
   sisältö ja liitä TIMistä kopioimasi koodi tilalle.
1. **Riderissa:** Kirjoita vastauksesi. Jos liitetyssä koodissa on kommentit
   `BYCODEBEGIN` ja `BYCODEEND`, tee vastaus **näiden rivien väliin**.
1. **Riderissa:** Kun ohjelma toimii, valitse taas tiedoston koko sisältö ja
   kopioi se.
1. **TIMissä:** Liitä koodi tehtävän palautuslaatikkoon ja palauta tehtävä tavalliseen tapaan.

Vaiheet näkyvät myös alla olevalla esimerkkivideolla, jossa tehtävän koodi
haetaan TIMistä Rideriin ja viedään takaisin (videossa ei ole ääntä).

<video controls muted preload="metadata" width="800" style="max-width: 100%; height: auto;" src="./images/tim_consolemain_rider.mp4"></video>

### Jypeli-tehtävät {#tim-fysiikkapeli}

TIMin Jypeli-tehtävät käyttävät `Fysiikkapeli`-projektimallia, ellei tehtävässä
toisin mainita. Erona komentorivitehtäviin on, että projektin nimen pitää olla
sama kuin tehtävän koodissa olevan luokan nimi, joten luokan nimi katsotaan
TIMistä ennen projektin luomista.

1. **TIMissä:** Klikkaa tehtävän palautuslaatikossa olevaa *Näytä koko koodi*
   -linkkiä ja katso, mikä on koodissa olevan luokan (`class`) nimi.
1. **Riderissa:** Tee uusi projekti. Valitse projektimalliksi `Fysiikkapeli`
   (ellei toisin ohjeisteta) ja anna projektin nimeksi sama kuin tehtävän luokan
   nimi.
1. **TIMissä:** Klikkaa *Copy*-linkkiä. Tehtävän koko koodi on nyt
   leikepöydällä.
1. **Riderissa:** Avaa se projektin `.cs`-tiedosto, jonka nimi on sama kuin
   projektin nimi, valitse sen koko sisältö ja liitä TIMistä kopioimasi koodi
   tilalle.
1. **Riderissa:** Kirjoita vastauksesi. Jos liitetyssä koodissa on kommentit
   `BYCODEBEGIN` ja `BYCODEEND`, tee vastaus **näiden rivien väliin**.
1. **Riderissa:** Kun peli toimii, valitse taas tiedoston koko sisältö ja
   kopioi se.
1. **TIMissä:** Liitä koodi tehtävän palautuslaatikkoon ja palauta tehtävä tavalliseen tapaan.

> [!VAROITUS]
> Rider luo Jypeli-projektiin automaattisesti myös `Ohjelma.cs`-tiedoston, jossa
> on Main-pääohjelma. **Sitä ei tarvitse eikä pidä muokata**, eikä TIMin koodia
> liitetä sinne.
