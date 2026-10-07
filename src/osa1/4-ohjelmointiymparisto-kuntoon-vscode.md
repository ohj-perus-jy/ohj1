# Ohjelmointiympäristö kuntoon

Ensimmäisten viikkojen tehtävät voi periaatteessa tehdä verkkoselaimessa, mutta
varsin pian on aika ottaa käyttöön oikea työkalu: *sovelluskehitin* eli IDE
(engl. *Integrated Development Environment*). Otamme nyt Visual Studio Coden
käyttöön, katsotaan projekteille sopiva kansiorakenne, jotta tiedostot löytyvät
vielä marraskuussakin, ja luodaan ensimmäinen demokansio ja siihen ensimmäinen
ohjelma. Ohjelma on sama Hello World, joka aiemmin ajettiin selaimessa, mutta
nyt se ajetaan omalla koneella.

Ellet ole vielä asentanut kehitystyökaluja, [tee se nyt](../tyokalut-vscode.md).
Jatkossa oletetaan, että .NET, VS Code, C# Dev Kit ja Jypeli ovat
asennettuina.

## Mihin IDE:tä tarvitaan?

Lähdekoodi on pelkkää tekstiä, joten sen teknisesti ottaen voisi kirjoittaa
Muistiolla. Tämä olisi kuitenkin yhtä miellyttävää kuin gradun kirjoittaminen
kirjoituskoneella. IDE on ohjelmoijan tekstinkäsittelyohjelma:

* **Punainen alleviivaus.** Kun kirjoitat `Console.WriteLine("Moi")` ilman
  puolipistettä, VS Code alleviivaa rivin jo ennen kuin ehdit painaa Run.
  Muistio ei huomaa mitään, ja virhe selviää vasta kääntäjän
  virheilmoituksesta.
* **Täydennys.** Kirjoitat `Cons`, painat sarkainta (painike Caps Lockin
  yläpuolella), ja VS Code kirjoittaa loput. Kun kirjoitat `Console.`, VS Code
  näyttää mitä `Console`-luokalla voi tehdä, joten aliohjelmien nimiä ei
  tarvitse muistaa ulkoa.
* **Yksi nappi.** Kääntäminen ja ajaminen on yksi klikkaus.
* **Debuggeri.** Kun ohjelma tekee jotakin outoa, debuggerilla sen voi
  pysäyttää kesken kaiken ja katsoa muuttujien arvot. Tähän palataan osassa 5,
  ja siitä on kurssilla jopa oma [näyttönsä](../debuggausnayte.md).
* **Projektit ja versionhallinta.** IDE pitää yhden ohjelman tiedostot koossa
  ja keskustelee Gitin kanssa, jota tarvitaan harjoitustyössä.

Lisäksi itse asennettua IDE:tä voi mukauttaa: vaihtaa värit, fontit ja
näppäinkomennot mieleisikseen. Tämä on itse asiassa monille ohjelmoijille tärkeä
harrastus, josta käydään loputtomia keskusteluja.

### VS Code, Rider ja pilvi

IDE-ympäristöjä on useita. Tällä kurssilla käytetään **Visual Studio Codea**
(VS Code), joka on hyvin suosittu ja kevyt editori. C#-tuki tulee siihen
*C# Dev Kit* -laajennuksesta, jonka kanssa VS Code on käytännössä IDE. Sillä
voi tehdä niin tekstipohjaisia sovelluksia kuin Jypeli-pelejäkin, ja kurssin
ohjeet ja ohjaukset perustuvat siihen.

Vaihtoehtoisesti voit käyttää **JetBrains Rideriä**, joka on tehty erityisesti
C#- ja .NET-kehitykseen. Jos valitset sen, varaudu siihen, että ohjaaja ei
välttämättä tunne sen kaikkia valikoita.

Pilvipohjaisia kehitysympäristöjä on myös olemassa, ja ne yleistyvät.
Esimerkiksi TIM on tällainen "pilvessä" pyörivä ympäristö.
Ohjelmoinnin opiskelussa, kuten tälläkin kurssilla, kehitysympäristö
asennetaan kuitenkin edelleen omalle tietokoneelle: se on nopeampi, ilmainen
ja toimii junassakin. Työelämässä paikallinen kehitysympäristö on yhä
vallitseva käytäntö.

## Suositeltava hakemistorakenne

Ohjelmointikurssilla syntyy kymmeniä ohjelmia, ja jokainen Jypeli-peli on
lisäksi kansio, jossa on alikansioita. Jos ne luo sinne, minne VS Code sattuu
ehdottamaan, kahden kuukauden päästä etsit harjoitustyötäsi Lataukset-kansiosta.
Sovitaan siis rakenne heti alussa.

Tämän kurssin tiedostojesi kotipesä on kansio nimeltä `ohj1`.

Sopivia sijainteja `ohj1`-kansiolle ovat esimerkiksi:

 * Windows: `C:\Users\<käyttäjätunnus>\ohj1` tai `C:\Opiskelu\ohj1`
 * Mac ja Linux: `~/ohj1` (tai `/Users/<käyttäjätunnus>/ohj1`)
 * Agoran tietokoneluokassa: `C:\MyTemp\<käyttäjätunnus>\ohj1`

Korvaa `<käyttäjätunnus>` omalla käyttäjänimelläsi. Omalla koneella sen ei
tarvitse olla sama kuin yliopiston tunnus. Kansio voi sijaita muuallakin.
**Tärkeintä on, että itse tiedät, missä kansiossa työskentelet, ja että löydät
sen helposti myöhemmin.**

Tee heti tuohon kansioon kaksi alikansiota: `demot` ja
`harjoitustyo`. Rakenne näyttäisi sitten kutakuinkin tältä:

```bob
ohj1
 |
 +-demot 
 '-harjoitustyo
```

> [!VAROITUS]
> Vältä projektien sijoittamista pilvisynkronoituun kansioon (OneDrive,
> Dropbox, iCloud), jos voit. Synkronointi ja kääntäjä kirjoittavat samoja
> tiedostoja yhtä aikaa, ja tuloksena on satunnaisia, vaikeasti selitettäviä
> virheitä. Varmuuskopio hoituu paremmin Gitillä, josta kerrotaan sivulla
> [Versiohallinta ja Git](../git/index.md).

## Demokansio ja kaksi erilaista ohjelmaa

VS Code työskentelee aina yhdessä kansiossa kerrallaan. Tällä kurssilla
luonteva jako on: yksi demokerta on yksi kansio, joka avataan VS Codessa, ja
sen jokainen tehtävä on oma ohjelmansa kansion sisällä. Kansio `Demo1`
sisältää siis ohjelmat `HelloWorld`, `Lampotila` ja niin edelleen. Näin saman
demon tehtävät ovat yhtä aikaa näkyvillä ilman jatkuvaa avaamista ja
sulkemista.

Kurssilla tehdään kahdenlaisia ohjelmia, ja niitä käsitellään demokansiossa
eri tavalla.

|            | Konsoliohjelma                      | Jypeli-peli                                       |
|------------|-------------------------------------|---------------------------------------------------|
| Mikä       | tulostaa tekstiä ja lukee näppäimistöltä | graafinen peli                               |
| Tiedostot  | yksi `.cs`-tiedosto                 | oma kansio: `.csproj`, `.cs`-tiedostot ja `Content` |
| Sijainti   | suoraan demokansiossa               | demokansion alikansiossa                          |

Molemmat ajetaan editorin **▷**-painikkeella. Demokansio näyttää
pääpiirteissään tältä:

```bob
ohj1
 |
 +-demot 
 |  |
 |  '-Demo1             <- "avaa tämä kansio VS Codessa"
 |     |-Lumiukko.slnx  <- "solution-tiedosto, VS Code tekee sen itse"
 |     |-HelloWorld.cs  <- "konsoliohjelma"
 |     |-Lampotila.cs   <- "konsoliohjelma"
 |     '-Lumiukko       <- "Jypeli-peli"
 |        |
 |        |- Lumiukko.csproj
 |        |- Lumiukko.cs
 |        |- Ohjelma.cs
 |        '- Content    <- "pelin kuvat ja äänet"
 |
 '-harjoitustyo
```

Pelin kansiota kutsutaan *projektiksi*: se sisältää yhden ohjelman koodin
sekä sen kuvat ja äänet. Demokansion *solution*-tiedosto on luettelo kansion
projekteista, ja VS Code tekee ja päivittää sen itse, kun luot pelejä.
Sivuhuomiona mainittakoon, että "solution" on [Microsoftin keksimä
nimi](https://learn.microsoft.com/en-us/visualstudio/ide/solutions-and-projects-in-visual-studio?view=vs-2022#solutions)
tällaiselle projekteja koostavalle kapistukselle. Sana ei varsinaisesti
tarkoita mitään, eikä sitä kannata yrittää suomentaa.

### Neljä sääntöä

1. **Avaa VS Codessa yksi demokansio kerrallaan**: *File* › *Open Folder…* ja
   valitse esimerkiksi `Demo1`. Älä avaa koko `ohj1`-kansiota äläkä
   yksittäisen pelin kansiota.
2. **Konsoliohjelma on yksi `.cs`-tiedosto demokansiossa**, ja sen
   ensimmäinen rivi on `#!/usr/bin/env dotnet`. Rivi kertoo VS Codelle, että
   tiedosto on itsenäinen ohjelma. Ilman sitä VS Code näyttää vain osan
   virheistä.
3. **Jokainen Jypeli-peli on omassa alikansiossaan.** Luo peli VS Codella
   (ohje alla), jolloin VS Code lisää sen demokansion solution-tiedostoon.
   Demokansiossa saa olla vain yksi solution-tiedosto (`.slnx` tai `.sln`).
4. **Älä laita konsoliohjelmaa Jypeli-pelin kansioon** (äläkä luo peliä suoraan
   demokansioon). Peli kääntää kaikki kansionsa `.cs`-tiedostot, joten
   ylimääräinen ohjelma rikkoo sen (virhe `CS9314` tai `CS0017`).

## Ensimmäinen konsoliohjelma

Tehdään nyt demokansio `Demo1` ja siihen ensimmäinen ohjelma `HelloWorld`,
joka on konsoliohjelma. Samaan kansioon lisätään myöhemmin muita ohjelmia,
muun muassa ensimmäinen Jypeli-peli.

1. Tee `demot`-kansioon alikansio `Demo1` tiedostohallinnassa tai Finderissa.
2. Avaa kansio VS Codessa: *File* › *Open Folder…* ja valitse `Demo1`. Kun VS
   Code kysyy, luotatko kansion tekijöihin (*Do you trust the authors of the
   files in this folder?*), valitse *Yes, I trust the authors*.
3. Luo demokansion juureen (ei pelin kansioon) uusi tiedosto `HelloWorld.cs`:
   napsauta *Explorer*-näkymässä (vasen reuna) kansion nimeä hiiren oikealla
   painikkeella ja valitse *New File…*. Tiedoston nimi alkaa **isolla
   kirjaimella**, koska se on myös luokan nimi. Tehtävissä nimi voi olla myös
   esimerkiksi `Teht3Lampotila.cs`.
4. Kirjoita ohjelma:

   ```csharp
   #!/usr/bin/env dotnet

   public class HelloWorld
   {
       public static void Main()
       {
           System.Console.WriteLine("Heippa, maailma!");
       }
   }
   ```

   Kirjoita ensimmäinen rivi täsmälleen tuollaisena (sama kaikissa
   käyttöjärjestelmissä). Muu koodi on sama kuin aiemmin selaimessa ajettu.

### Ensimmäinen ajo

Pidä `HelloWorld.cs` auki editorissa ja paina oikean yläkulman
**▷**-painiketta. Ikkunan alareunaan avautuu *Terminal*-paneeli, jossa pitäisi
lopuksi lukea `Heippa, maailma!`. Ohjelma on sama kuin aiemmin selaimessa
ajettu, mutta nyt kääntäjä ja suoritus ovat omalla koneellasi. Jos ohjelma
kysyy jotain, kirjoita vastaus samaan paneeliin.

Ensimmäinen ajo kestää selvästi pidempään kuin seuraavat, koska ohjelma pitää
ensin kääntää. Odota rauhassa, vaikka paneeli näyttäisi hetken tyhjältä.

Huomasitko täydennyksen? Kun kirjoitit `Console.`, VS Code tarjosi listan
siitä, mitä pisteen jälkeen voi kirjoittaa. Tämä on IDE:n parhaita puolia, ja
sitä kannattaa käyttää tietoisesti silloinkin, kun et ole varma, miten jokin
asia kirjoitetaan.

Huomaa, että jos valitset **▷**-painikkeen vieressä olevasta valikosta *Debug
project associated with this file*, tuloste menee *Debug Console*
-välilehdelle. Debug-tilaa käytetään debuggaamiseen, johon tutustumme osassa
5, mutta tavalliseen ajamiseen käytetään *Run*-tilaa.

Jos ohjelmasi lukee näppäimistöltä (`Console.ReadLine()`), saat luultavasti
keltaisen varoituksen:

```text
warning CS8600: Converting null literal or possible null value to non-nullable type.
```

Varoitus ei ole virhe: ohjelma kääntyy ja toimii.

<details><summary>Lisätietoa: konsoliohjelman ajaminen päätteestä</summary>

Ohjelman voi ajaa myös ilman **▷**-painiketta. Avaa pääte (*Terminal* › *New
Terminal*). Pääte aukeaa demokansioon. Anna komento:

```text
dotnet run HelloWorld.cs
```

Näin tekee myös **▷**-painike taustalla. Komentoa tarvitaan lähinnä silloin,
kun haluat ajaa ohjelman ilman VS Codea.

</details>

### Mitä syntyi?

Tutki syntynyttä kansiorakennetta tiedostohallinnassa tai Finderissa. Sen
pitäisi näyttää suunnilleen tältä:

```bob
ohj1
 |
 +-demot 
 |  |
 |  '-Demo1             <- "tämä tehtiin nyt"
 |     |
 |     '-HelloWorld.cs  <- "tämä tehtiin nyt"
 |
 '-harjoitustyo
```

Konsoliohjelmasta ei synny muuta kuin yksi tiedosto. .NET kääntää sen
taustalla omaan välimuistikansioonsa, jota ei koskaan tarvitse avata, muokata
eikä palauttaa. Oma koodisi on tiedostossa `HelloWorld.cs`.

## Jypeli-peli

Jypeli-peli ei ole yksi tiedosto vaan *projekti*: kansio, jossa on
koodin lisäksi projektitiedosto `.csproj` sekä pelin kuvat ja äänet. Syy on
se, että kääntäjä tarvitsee lähdekoodin lisäksi tietoja, joita koodissa
itsessään ei ole:

* **Mitkä tiedostot kuuluvat ohjelmaan?** Konsoliohjelmassa kooditiedostoja on
  yksi, mutta isossa ohjelmassa niitä on satoja. Projekti kokoaa ne yhdeksi
  ohjelmaksi.
* **Mitä kirjastoja ohjelma käyttää?** HelloWorld pärjää .NETin omalla
  kirjastolla, mutta Jypeli ei kuulu .NETiin, vaan se ladataan verkosta.
  Projektitiedostoon kirjoitetaan, mitä kirjastoa ja mitä sen versiota
  tarvitaan, ja VS Code hakee sen itse.
* **Mitkä kuvat ja äänet kuuluvat peliin?** Ne ovat pelin `Content`-kansiossa,
  ja projektitiedosto kertoo, että ne kopioidaan ohjelman mukaan.

Rakenne voi tuntua raskaalta pienelle pelille, mutta samalla tavalla on
järjestetty myös työelämän ohjelmat, joissa projekteja voi olla kymmeniä ja
kirjastoja satoja. Kun rakenne tulee tutuksi pienillä ohjelmilla, isommassa ei
tarvitse opetella mitään uutta.

### Uuden pelin luominen

1. Avaa demokansio VS Codessa.
2. Avaa komentopaletti (*View* › *Command Palette…* tai **Ctrl+Shift+P**,
   macOS: **Cmd+Shift+P**), kirjoita `new project` ja valitse
   **.NET: New Project...**
3. Valitse pohja, esimerkiksi **Fysiikkapeli**. Jos luettelossa ei näy
   Jypeli-pohjia, niitä ei ole asennettu: katso
   [Työkalut-sivun Jypeli-kohta](../tyokalut-vscode.md#jypeli).
4. Anna pelille nimi, esimerkiksi `Lumiukko`.
5. Valitse sijainniksi **Default directory**. Peli tulee avatun demokansion
   alle, esimerkiksi `Demo1/Lumiukko`.
6. Jos VS Code kysyy solution-tiedoston muotoa, valitse **.slnx** (myös
   *.sln* toimii). Kysymys tulee vain demon ensimmäisen pelin kohdalla, ja
   tiedosto saa sen pelin nimen, esimerkiksi `Lumiukko.slnx`. Nimellä ei ole
   merkitystä: tiedosto on luettelo demon kaikista peleistä.
7. Valitse **Create project**.

### Pelin ajaminen

Avaa jokin pelin `.cs`-tiedostoista, esimerkiksi `Lumiukko.cs`, ja paina
**▷**-painiketta. Peli-ikkuna aukeaa.

<details><summary>Lisätietoa: pelin ajaminen päätteestä</summary>

Anna demokansiossa avatussa päätteessä (*Terminal* › *New Terminal*) komento

```text
dotnet run --project Lumiukko
```

Konsoliohjelmasta poiketen peli ajetaan projektin eli kansion nimellä, ei
tiedoston.

</details>

### Kuvat ja äänet

Laita kuvat ja äänet pelin `Content`-kansioon, esimerkiksi
`Lumiukko/Content/norsu.png`. Koodissa ne ladataan ilman kansion nimeä:

```csharp
Image norsunKuva = LoadImage("norsu.png");
SoundEffect maaliAani = LoadSoundEffect("maali.wav");
```

## Uuden demon aloittaminen

Tee `demot`-kansioon uusi kansio, esimerkiksi `Demo2`, avaa se VS Codessa ja
jatka yllä olevien ohjeiden mukaan. Solution-tiedoston VS Code luo itse, kun
teet demon ensimmäisen pelin.

```bob
ohj1
 |
 +-demot 
 |  |
 |  |-Demo1
 |  |  |-Lumiukko.slnx
 |  |  |-HelloWorld.cs
 |  |  |-Lampotila.cs
 |  |  '-Lumiukko
 |  |
 |  '-Demo2  <- "vastaavasti voisit tehdä lisää demokansioita"
 |     |-Noppa.cs
 |     '-...
 |
 '-harjoitustyo
    |
    '-...
```

## Tyypillisiä ongelmia

Yleisimmät oireet:

- **Jypeli-pelin koodissa on punaista**, vaikka peli toimii: VS Code ei ole
  ladannut peliprojektia. Tarkista, että auki on demokansio.
- **VS Code ei näytä konsoliohjelman virheitä**, mutta ajaessa ne tulevat
  esiin: tarkista tiedoston ensimmäinen rivi (sääntö 2).
- **Peli ei käänny** (`CS9314` tai `CS0017`): konsoliohjelma on pelin
  kansiossa (sääntö 4).
- **Konsoliohjelma ei reagoi päätteeseen kirjoitettuun**: käynnistit sen
  Debug-vaihtoehdolla. Pysäytä ja käynnistä **▷**-painikkeella.

### Jypeli-pelin koodissa on punaista

Esimerkiksi `The type or namespace name 'Jypeli' could not be found`, vaikka
peli käynnistyy. VS Code ei ole ladannut peliprojektia. Näin käy
esimerkiksi, jos kopioit pelikansion demokansioon käyttöjärjestelmän
tiedostonhallinnalla tai loit pelin päätteessä komennolla `dotnet new`.
Kokeile näitä järjestyksessä:

1. Tarkista, että VS Codessa on auki demokansio. Sen nimi näkyy
   *Explorer*-näkymän ylimpänä.
2. Jos VS Code kysyy *Project '...' is not part of this solution*, valitse
   **Add Project to Solution**.
3. Avaa komentopaletti (*View* › *Command Palette…* tai **Ctrl+Shift+P**,
   macOS: **Cmd+Shift+P**) ja valitse **Developer: Reload Window**.
4. Jos punaista on yhä: napsauta *C# Project Details* -näkymässä solutionia
   hiiren oikealla painikkeella, valitse
   *Solution File Management* › *Add Existing Project...* ja valitse pelin
   `.csproj`-tiedosto.

### VS Code kysyy avattaessa, mikä solution avataan

Demokansiossa on kaksi solution-tiedostoa (`.sln` ja `.slnx`), esimerkiksi
kopioinnin jäljiltä. Poista toinen. Demokansiossa saa olla vain yksi
solution-tiedosto.

### VS Code ei näytä konsoliohjelman virheitä, mutta ajaessa ne tulevat esiin

Tarkista, että tiedoston ensimmäinen rivi on täsmälleen `#!/usr/bin/env dotnet`.

### Konsoliohjelma ei reagoi päätteeseen kirjoitettuun, tai tuloste näkyy *Debug Console* -välilehdellä

Käynnistit ohjelman Debug-vaihtoehdolla. Pysäytä ohjelma (punainen neliö
ylhäällä) ja käynnistä se **▷**-painikkeella.

### Peli ei käänny: `CS9314` tai `CS0017`

Virhe on joko `error CS9314: '#!' directives can be only used in scripts or
file-based programs` tai `error CS0017: Program has more than one entry point
defined`. Konsoliohjelman `.cs`-tiedosto on Jypeli-pelin kansiossa, tai peli
on luotu suoraan demokansioon. Siirrä konsoliohjelma demokansioon ja peli omaan
alikansioonsa.

### Peli kaatuu heti, ja virheilmoituksessa lukee `Tiedostoa ... ei löydy`

Tarkista, että tiedosto on pelin `Content`-kansiossa ja että nimi on kirjoitettu
oikein. Jos peli on tehty Tasohyppelypeli-pohjasta, sen `.csproj` kopioi vain
pohjan omat kuvat. Korvaa `.csproj`-tiedoston `<None Update="Content\...">`-rivit
tällä, niin kaikki `Content`-kansion tiedostot kopioituvat:

```xml
<ItemGroup>
    <Content Include="Content/*.*">
        <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
    </Content>
</ItemGroup>
```

Esimerkkiharjoitustyön `Tasohyppelypeli.csproj` on jo muutettu näin.

<details><summary>Lisätietoa: päätekomentojen ongelmia</summary>

**`dotnet run Tiedosto.cs` ajaa pelin tai antaa virheen `CS9314` tai
`CS0017`.** Ajoit komennon pelin kansiossa. Jos kansiossa on
`.csproj`-tiedosto, `dotnet run` ajaa aina sen projektin. Siirry demokansioon
(`cd ..`) ja aja komento uudestaan.

**`Couldn't find a project to run. Ensure a project exists in ..., or pass the
path to the project using --project`.** Annoit pelkän `dotnet run`-komennon
demokansiossa. Kerro, mikä ohjelma ajetaan: `dotnet run HelloWorld.cs` tai
`dotnet run --project Lumiukko`.

</details>
