# <span class="part-icon">🛠️</span> Ohjelmointiympäristö kuntoon

> [!VAROITUS]
> Jos olet Jyväskylän yliopiston opiskelija, varmista, että tiedät käyttäjätunnuksesi, ja kirjoita se muistiin ennen kuin aloitat tämän ohjeen seuraamisen. Tässä ohjeessa viitataan toistuvasti käyttäjätunnukseen tunnisteella `<käyttäjätunnus>`. Korvaa tämä aina omalla käyttäjätunnuksellasi.

Ensimmäisten viikkojen tehtävät voi periaatteessa suorittaa verkkoselaimessa,
mutta varsin pian on tarpeen saada oma ohjelmointiympäristö toimimaan
tietokoneella. 

Oman tietokoneen käyttöönottaminen ohjelmointia varten on tärkeä askel kohti
itsenäisempää ohjelmointia. Se mahdollistaa esimerkiksi koodin kirjoittamisen,
tallentamisen ja suorittamisen ilman internet-yhteyttä. Lisäksi omaa ympäristöä
on helpompi mukauttaa omien tarpeiden mukaan, kuten vaihtaa värejä, fontteja ja
muita asetuksia. Myöhemmin opit käyttämään versionhallintaa sekä debuggausta,
jotka vaativat ohjelmointiympäristön omalla tietokoneellasi. 

Ellet ole vielä asentanut kehitystyökaluja, tee se ensin [Työkalut-sivun](../tyokalut.md)
ohjeiden mukaisesti.

## Rider

Ohjelman koon kasvaessa kannattaa ottaa käyttöön sovelluskehitin eli IDE
(Integrated Development Environment). IDE on ohjelma, joka yhdistää yhteen
paikkaan kaikki ohjelmien kehittämiseen tarvittavia ominaisuuksia, kuten:

 * koodin kirjoittaminen
 * koodin kääntäminen ohjelmaksi
 * virheiden ja ongelmien etsiminen koodissa
 * koodin navigointi- ja refaktorointityökaluja (esim. "Etsi koodista", kirjoittamisen aikaiset ehdotukset, koodin massamuokkaaminen)
 * ohjelman virheiden jäljitys eli debuggaus
 * samaan asiakokonaisuuteen liittyvän koodin hallinta ("projektit")
 * versionhallinnan tuki (esim. Git)

IDE-ympäristöjä on useita eri ohjelmointikielille ja ympäristöille. Ohjelmointi
1 -opintojaksolla käytetään JetBrains-yhtiön tekemää Rider-kehitysympäristöä,
joka on erityisesti C# ja .NET-ajoympäristölle tarkoitettu IDE. Riderilla voi
tehdä niin tekstipohjaisia sovelluksia kuin Jypeli-pelejäkin. 

Riderin asennusohjeet löytyvät [Työkalut-sivulta.](../tyokalut.md#jetbrains-rider) 

Sivuhuomiona mainittakoon, että kaikenlaiset pilvipalvelut ovat yleistyneet, ja
myös pilvipohjaisia kehitysympäristöjä on olemassa. Kuitenkin edelleen yleinen
käytäntö ohjelmoinnin opiskelussa, kuten myös Ohjelmointi 1 -kurssilla, on
asentaa kehitysympäristö omalle paikalliselle tietokoneelle. Oman
kehitysympäristön käyttö on yleensä nopeampaa, edullisempaa ja joustavampaa kuin
pilvipohjaiset ratkaisut. Myös työelämässä paikalliset kehitysympäristöt ovat
yleensä vallitseva käytäntö.

## Visual Studio Code

Vaihtoehtoisesti voit käyttää myös **Visual Studio Code** -editoria (lyhyesti VS
Code), joka on hyvin suosittu tekstieditori, jota voi käyttää myös IDE:nä. VS
Coden asennusohjeet löytyvät myöskin
[Työkalut-sivulta](../tyokalut.md#tekstieditori).

## Suositeltava hakemistorakenne

Kaikki tämän opintojakson asiat kannattaa tehdä esimerkiksi kansioon nimeltä
`ohj1`. Tämä kansio kannattaa sijoittaa tietokoneellasi paikkaan joka riippuu
hieman käyttöjärjestelmästäsi ja omista mieltymyksistäsi.

Omassa tietokoneessa sopivia sijainteja ovat esimerkiksi:

 * Windows: `C:\Users\<käyttäjätunnus>\kurssit\ohj1` tai `C:\Opiskelu\ohj1`
 * Mac ja Linux: `~/kurssit/ohj1` 

Mikroluokan koneessa: `c:\MyTemp\<käyttäjätunnus>\ohj1`

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

Katsotaan nyt uuden solutionin ja projektin luomista Riderissa.

Luodaan uusi solution ja siihen projekti edellä luodun kansiorakenteen
alaisuuteen. Tässä esimerkissä luodaan demo1-niminen solution ja siihen
Lumiukko-niminen projekti `demot`-alikansioon. Mikäli haluat lisätä projektin
olemassa olevaan solutioniin, katso luku [Uusi projekti olemassa olevaan
solutioniin](#uusi-projekti-solutioniin).

* Valitse `New Solution`. Mikäli joku vanha solution on jo auki, niin sama
  onnistuu yläpalkista  File -> New Solution`. ![Uusi solution
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
- Valitse `Add -> New Project`
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

## Pääohjelma Jypeli-projekteissa (Main)

Jypeli-projektissa Main-pääohjelma menee Ohjelma.cs-tiedostoon, joten jos copy-pastetat
koodin, joka sisältää Main-pääohjelman, niin **poista Main-pääohjelma** `Portaat`-luokan (tms. projektisi nimeä vastaava luokka)
sisältä. Projektissa ei saa olla kahta Main-pääohjelmaa.


## Sisällön tuominen Jypeli-projektiin (Content-kansio)

Kuvat ja äänet lisätään peliprojektin Content-kansioon, joka näkyy editorin tiedostolistauksessa.

Content-kansion voi luoda klikkaamalla hiiren oikealla projektia &rarr; *Add* &rarr; *Directory*

![Sisällön lisääminen](./images/new_content_directory.jpg)

 1. Lisää tiedosto klikkaamalla kansiota hiiren oikealla napilla &rarr; *Add* &rarr; *Add Existing Item*
 1. Valitse tiedosto(t) jonka haluat lisätä ja paina ok.
 1. Valitse Copy.
 1. Klikkaa tuomaasi tiedostoa Content-kansiossa hiiren oikealla ja valitse Properties
 1. Vaihda *Copy to output directory* -kohtaan "Copy if newer"

## Graafinen sovellus Jypeli-kirjastolla

Jypeli on C#-kielellä kirjoitettu pelimoottori, joka on suunniteltu erityisesti opetuskäyttöön. Jypeli tarjoaa helppokäyttöisen tavan pelien luomiseen, mikä tekee siitä hyvän valinnan tälle kurssille.

Jypelin avulla voi luoda 2D-pelejä, joissa on grafiikkaa ja ääniä. Jypeliin on tarjolla paljon valmiita [ohjeita ja esimerkkejä]() <!--TODO-->**TODO: Linkki**, jotka auttavat sinua pääsemään alkuun pelien tekemisessä. 

Tehdään seuraavaksi pieni Jypeli-esimerkki, jossa luodaan ikkuna ja piirretään siihen ympyrä.

> [!HUOMAUTUS]
> Jos haluat kokeilla tätä koodia itse, sinulla tulee olla kehitystyökalut asennettuna; ohjeet löytyvät [Työkalut-sivulta](../tyokalut.md#jetbrains-rider). 
> Luo uusi Fysiikkapeli-projekti Riderissa ja korvaa `Begin`-metodin sisältö yllä olevalla koodilla. Suorita sitten peli painamalla vihreää "Play"-painiketta ikkunan yläreunassa.

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

Voit käynnistää pelin yllä klikkaamalla oikean yläreunan vihreää "Play"-painiketta. Ikkunaan pitäisi ilmestyä keskelle pieni ympyrä.

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