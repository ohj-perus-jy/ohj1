# 🧰 Ohjelmointiympäristö kuntoon

Ensimmäisten viikkojen tehtävät voi periaatteessa tehdä verkkoselaimessa, mutta
varsin pian on aika ottaa käyttöön oikea työkalu: *sovelluskehitin* eli IDE
(engl. *Integrated Development Environment*). Tässä luvussa otetaan Rider
käyttöön, sovitaan kansiorakenteesta, jotta tiedostot löytyvät vielä
marraskuussakin, ja luodaan ensimmäinen solution ja projekti.

Ellet ole vielä asentanut kehitystyökaluja, tee se nyt
[Työkalut-sivun](../tyokalut.md) ohjeiden mukaisesti. Tämä luku olettaa, että
.NET, Rider ja Jypeli ovat asennettuina.

## Mihin IDE:tä tarvitaan?

Lähdekoodi on pelkkää tekstiä, joten sen voisi kirjoittaa Muistiolla. Voisi.
Samaan tapaan kuin gradun voisi kirjoittaa kirjoituskoneella. IDE on
ohjelmoijan tekstinkäsittelyohjelma, ja sen puuttumisen huomaa nopeasti:

* **Punainen alleviivaus.** Kun kirjoitat `Console.WriteLine("Moi")` ilman
  puolipistettä, Rider alleviivaa rivin jo ennen kuin ehdit painaa Run.
  Muistio ei huomaa mitään, ja virhe selviää vasta kääntäjän
  virheilmoituksesta.
* **Täydennys.** Kirjoitat `Cons`, painat sarkainta (painike Caps Lockin
  yläpuolella), ja Rider kirjoittaa loput. Kun kirjoitat `Console.`, Rider
  näyttää mitä `Console`-luokalla voi tehdä, joten aliohjelmien nimiä ei
  tarvitse muistaa ulkoa.
* **Yksi nappi.** Kääntäminen ja ajaminen on yksi painallus. Komentoriviltä
  sama olisi kaksi komentoa oikeassa kansiossa.
* **Debuggeri.** Kun ohjelma tekee jotakin outoa, debuggerilla sen voi
  pysäyttää kesken kaiken ja katsoa muuttujien arvot. Tähän palataan osassa 5,
  ja siitä on kurssilla jopa oma [näyttönsä](../debuggausnayte.md).
* **Projektit ja versionhallinta.** IDE pitää yhden ohjelman tiedostot koossa
  ja keskustelee Gitin kanssa, jota tarvitaan harjoitustyössä.

Lisäksi itse asennettua IDE:tä voi mukauttaa: vaihtaa värit, fontit ja
näppäinkomennot mieleisikseen. Tämä on ohjelmoijille tärkeä harrastus, josta
käydään loputtomia keskusteluja.

### Rider, VS Code ja pilvi

IDE-ympäristöjä on useita. Tällä kurssilla käytetään **JetBrains Rideriä**,
joka on tehty erityisesti C#- ja .NET-kehitykseen. Riderilla voi tehdä niin
tekstipohjaisia sovelluksia kuin Jypeli-pelejäkin, ja kurssin ohjeet ja
ohjaukset perustuvat siihen.

Vaihtoehtoisesti voit käyttää **Visual Studio Code** -editoria (VS Code), joka
on hyvin suosittu, kevyt tekstieditori ja laajennoksilla lähes IDE. Jos
valitset sen, varaudu siihen, että ohjaaja ei välttämättä tunne sen kaikkia
valikoita.

Pilvipohjaisia kehitysympäristöjä on myös olemassa, ja ne yleistyvät.
Ohjelmoinnin opiskelussa, kuten tälläkin kurssilla, kehitysympäristö
asennetaan kuitenkin edelleen omalle tietokoneelle: se on nopeampi, ilmainen
ja toimii junassakin. Työelämässä paikallinen kehitysympäristö on yhä
vallitseva käytäntö.

## Suositeltava hakemistorakenne

Ohjelmointikurssilla syntyy kymmeniä projekteja, ja jokainen niistä on kansio,
jossa on alikansioita. Jos ne luo sinne, minne Rider sattuu ehdottamaan, kahden
kuukauden päästä etsit harjoitustyötäsi kansiosta `RiderProjects/ConsoleApp7`.
Sovitaan siis rakenne heti alussa.

Tämän kurssin tiedostojesi kotipesä on kansio nimeltä `ohj1`.

Sopivia sijainteja `ohj1`-kansiolle ovat esimerkiksi:

 * Windows: `C:\Users\<käyttäjätunnus>\kurssit\ohj1` tai `C:\Opiskelu\ohj1`
 * Mac ja Linux: `~/kurssit/ohj1` (tai `/Users/<käyttäjätunnus>/kurssit/ohj1`)
 * Yliopiston mikroluokassa: `C:\MyTemp\<käyttäjätunnus>\ohj1`

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
> [Versiohallinta ja Git](../git.md).

## Solution ja projekti

Rider järjestää koodin *solutioneihin* ja *projekteihin*. *Projekti* sisältää
yhden ohjelman (pelin tai konsolisovelluksen) koodin sekä sen kuvat ja äänet.
*Solution* on kokoelma projekteja, jotka halutaan pitää auki yhtä aikaa.
Projekti kuuluu aina johonkin solutioniin, vaikka se olisi solutionin ainoa.

Tällä kurssilla luonteva jako on: yksi demokerta on yksi solution, ja sen
jokainen tehtävä on oma projektinsa. Solution `demo1` sisältää siis projektit
`Lumiukko`, `HelloWorld` ja niin edelleen. Näin saman demon tehtävät ovat yhtä
aikaa näkyvillä ilman jatkuvaa avaamista ja sulkemista.

```bob
 demo1 (solution)
  |
  +-- Lumiukko   (projekti)
  +-- HelloWorld (projekti)
  '-- ...
```

Sivuhuomiona mainittakoon, että "solution" on [Microsoftin keksimä
nimi](https://learn.microsoft.com/en-us/visualstudio/ide/solutions-and-projects-in-visual-studio?view=vs-2022#solutions)
tällaiselle projekteja koostavalle kapistukselle. Sana ei varsinaisesti
tarkoita mitään, eikä sitä kannata yrittää suomentaa.

## Uusi solution

Luodaan solution `demo1` ja siihen projekti `Lumiukko` kansioon `ohj1/demot`.
Jos solution on jo olemassa ja haluat lisätä siihen projektin, katso kohta
[Uusi projekti olemassa olevaan solutioniin](#uusi-projekti-solutioniin).

1. Valitse Riderin aloitusikkunasta `New Solution`. Jos jokin solution on jo
   auki, sama löytyy valikosta File <i class="bi bi-chevron-right"></i> New Solution.
   ![Uusi solution Linuxissa](./images/new_solution_linux.png)
2. Valitse vasemmalta *Custom Templates* -listasta `FysiikkaPeli`. Jos listaa
   ei näy, Jypeli-projektimalleja ei ole asennettu; katso
   [Työkalut-sivun Jypeli-kohta](../tyokalut.md#jypeli).
3. Anna solutionin nimeksi `demo1`.
4. Anna projektin nimeksi `Lumiukko`. Projektin nimi alkaa **isolla
   kirjaimella**, koska siitä tulee myös luokan nimi. Tehtävissä nimi voi olla
   myös esimerkiksi `Teht3Lumiukko`.
5. Kirjoita tai selaa poluksi `demot`-kansion sijainti, esimerkiksi
   `C:\Users\<käyttäjätunnus>\kurssit\ohj1\demot` (Windows) tai
   `~/kurssit/ohj1/demot` (Mac ja Linux). Yliopiston mikroluokissa projekti
   tehdään ensin kiintolevylle kansioon `C:\MyTemp\<käyttäjätunnus>\...` ja
   siirretään lopuksi talteen.
6. Jätä `Put solution and project in the same directory` -valinta tyhjäksi.
   Muuten solution- ja projektitiedostot sekoittuvat samaan kansioon, ja
   toisen projektin lisääminen myöhemmin on sotkuista.
7. Valitse `Framework`-kohtaan `net8.0`.
8. Klikkaa `Create`.

Ensimmäisellä kerralla Rider lataa Jypeli-kirjaston ja muut tarvittavat paketit
verkosta, mikä voi kestää hetken. Siihen tarvitaan verkkoyhteys.

### Mitä syntyi?

Tutki syntynyttä kansiorakennetta tiedostohallinnassa tai Finderissa. Sen
pitäisi näyttää suunnilleen tältä:

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

Lyhyt selitys `demo1`-kansion sisällöstä:

```text
demo1                - kansio, joka sisältää demo1-solutionin
  demo1.sln          - solution-tiedosto, jossa luetellaan projektit
  Lumiukko           - kansio, jonka alla Lumiukko-projekti
    bin              - kansio, jonne tulee ajettavaa koodia
    obj              - kansio, jonne tulee käännettyjä tiedostoja
    Lumiukko.cs      - C#-lähdekooditiedosto, johon tulee lumiukon piirtävä koodi
    Ohjelma.cs       - C#-lähdekooditiedosto, joka sisältää pääohjelman
    Lumiukko.csproj  - projektin asetustiedosto, jossa kerrotaan, mitä
                       tiedostoja projektiin liittyy
```

Kansioita `bin` ja `obj` ei koskaan tarvitse avata, muokata eikä palauttaa.
Kääntäjä tekee ne, ja ne voi huoletta poistaa; ne syntyvät uudestaan
seuraavalla ajokerralla. Oma koodisi on tiedostossa `Lumiukko.cs`.

### Ensimmäinen ajo

Klikkaa Explorer-paneelissa `Lumiukko.cs`-tiedostoa. Koodissa pitäisi näkyä:

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

Kaksi viimeistä riviä ovat valmista koodia, jolla peli sulkeutuu
Esc-näppäimestä. Niihin ei tarvitse koskea.

Käynnistä ohjelma valitsemalla Run <i class="bi bi-chevron-right"></i> Run
'Lumiukko' tai painamalla yläpalkin vihreää kolmiota. Näytölle pitäisi avautua
ikkuna vaaleansinisellä taustalla. Ikkuna on tyhjä, ja se on tässä vaiheessa
täysin oikein. Sulje ikkuna.

Pyyhi pois rivi `// Kirjoita ohjelmakoodisi tähän` ja kirjoita tilalle:

```csharp,ignore
Level.Background.Color = Color.Black;
PhysicsObject pallo = new PhysicsObject(200, 200, Shape.Circle);
pallo.Color = Color.White;
Add(pallo);
```

Käynnistä ohjelma uudestaan. Nyt mustalla taustalla pitäisi olla iso valkoinen
pallo: lumiukon ensimmäinen kolmannes. Loput lumiukosta tehdään tehtävissä.

Huomasitko täydennyksen? Kun kirjoitit `Level.`, Rider tarjosi listan siitä,
mitä pisteen jälkeen voi kirjoittaa. Tämä on IDE:n parhaita puolia, ja sitä
kannattaa käyttää tietoisesti silloinkin, kun et ole varma, miten jokin asia
kirjoitetaan.

Lisää vielä *dokumentaatiokommentit*: kirjoita luokan esittelyrivin
(`public class Lumiukko...`) yläpuolelle kolme kauttaviivaa `///`, jolloin
Rider luo `<summary>`-rungon. Kirjoita tagien väliin, mitä ohjelma tekee. Tee
sama `Begin`-aliohjelmalle. Dokumentaatiokommentit ovat kurssilla pakollisia,
ja niistä kerrotaan tarkemmin luvussa [Kommentointi ja
dokumentointi](../osa3/4-kommentointi-ja-dokumentointi.md).

```csharp,ignore
/// <summary>
/// Piirtää lumiukon mustalle taustalle.
/// </summary>
public class Lumiukko : PhysicsGame
{
    /// <summary>
    /// Luo pelin sisällön: taustan ja lumiukon pallot.
    /// </summary>
    public override void Begin()
    {
        // ...
    }
}
```

## Uusi projekti olemassa olevaan solutioniin {#uusi-projekti-solutioniin}

Oletetaan, että solution `demo1` on jo olemassa ja demon seuraava tehtävä on
konsoliohjelma. Lisätään siihen toinen projekti.

1. Klikkaa Explorer-paneelissa solutionin nimeä `demo1` hiiren oikealla
   painikkeella (Macissa kahdella sormella).
2. Valitse Add <i class="bi bi-chevron-right"></i> New Project.
3. Valitse vasemmalta `ConsoleMain`-projektimalli.
4. Anna nimeksi `HelloWorld` ja paina `Create`.
5. Aja projekti ensimmäisellä kerralla klikkaamalla Explorerissa sen nimeä
   hiiren oikealla ja valitsemalla Run 'HelloWorld'. Sen jälkeen projektin
   voi valita yläpalkin pudotusvalikosta vihreän kolmion vierestä.

Yläpalkin valikko kertoo, *mikä* projekti käynnistyy, kun painat Run. Jos
muutit koodia yhdessä projektissa, mutta mikään ei näytä muuttuvan, tarkista
ensin, ettet aja toista projektia. Tämä on niin yleistä, että sitä voi pitää
kurssin epävirallisena perinteenä.

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

## Riderin tärkeimmät toiminnot

Näillä pärjää pitkälle. Näppäinyhdistelmät ovat Riderin oletusasetusten
mukaiset.

| Toiminto          | Windows ja Linux                                | macOS                                      | Mitä tekee                                                    |
| ----------------- | ----------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------- |
| Aja ohjelma       | <kbd>Shift</kbd> + <kbd>F10</kbd>               | <kbd>⌃</kbd> + <kbd>R</kbd>                | Kääntää ja ajaa valitun projektin.                            |
| Täydennys         | <kbd>Ctrl</kbd> + <kbd>Space</kbd>              | <kbd>⌃</kbd> + <kbd>Space</kbd>            | Näyttää, mitä tähän kohtaan voi kirjoittaa.                   |
| Siisti muotoilu   | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>L</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>L</kbd> | Reformat Code: korjaa sisennykset. Tee aina ennen palautusta. |
| Nimeä uudelleen   | <kbd>Shift</kbd> + <kbd>F6</kbd>                | <kbd>Shift</kbd> + <kbd>F6</kbd>           | Muuttaa nimen kaikkialla kerralla.                            |
| Kommentoi rivi    | <kbd>Ctrl</kbd> + <kbd>/</kbd>                  | <kbd>⌘</kbd> + <kbd>/</kbd>                | Lisää tai poistaa `//` rivin alusta.                          |
| Etsi mitä tahansa | <kbd>Shift</kbd> <kbd>Shift</kbd>               | <kbd>Shift</kbd> <kbd>Shift</kbd>          | Tiedostot, asetukset, toiminnot.                              |

Virheet näkyvät koodissa punaisena alleviivauksena ja ikkunan alareunan
*Problems*-välilehdellä (vanhemmissa versioissa *Errors*). Editorin oikeassa
yläkulmassa oleva pieni merkki kertoo tiedoston tilan: vihreä väkänen
tarkoittaa, ettei virheitä eikä varoituksia ole. Harjoitustyössä siihen
tähdätään.

Kurssilla käytetään Riderin koodin muotoiluasetuksia, jotka on kuvattu
[Työkalut-sivulla](../tyokalut.md#rider-settings). Riderin tekoälyavustin
kytketään pois päältä [kurssin ohjeen](../tyokalut.md#rider-ai) mukaisesti;
tekoälyn käytöstä kurssilla kerrotaan sivulla
[Suorittaminen](../suorittaminen.md#eettiset-ohjeet).

## Tyypillisiä ongelmia

**Ikkuna ei aukea, vaan konsoliin tulee pitkä punainen virheilmoitus.** Lue
ilmoituksen ensimmäinen rivi; usein siinä lukee tiedoston nimi ja
rivinumero. Jos ilmoitus mainitsee paketin, jota ei löydy (*package* tai
*restore*), Jypeliä ei ole vielä ladattu: tarkista verkkoyhteys ja käännä
uudelleen valitsemalla Build <i class="bi bi-chevron-right"></i> Rebuild
Solution.

**Muutokset eivät näy.** Ajat luultavasti toista projektia. Katso yläpalkin
pudotusvalikko.

**Projekti on väärässä kansiossa.** Ei hätää: sulje Rider ja siirrä koko
solution-kansio (esimerkiksi `demo1`) oikeaan paikkaan tiedostohallinnassa.
Avaa sitten `.sln`-tiedosto Riderissä uudesta paikasta.

**Ohjelmassa on kaksi `Main`-pääohjelmaa.** Jypeli-projektissa `Main` on
tiedostossa `Ohjelma.cs`. Jos kopioit esimerkin, jossa on oma `Main`, poista
toinen. Tästä kerrotaan luvussa [Ensimmäinen graafinen
ohjelma](./4-ensimmainen-graafinen-ohjelma.md#pääohjelma-jypeli-projekteissa-main).

Lisää ongelmatilanteita ja niiden ratkaisuja on koottu
[Työkalut-sivulle](../tyokalut.md#ongelmatilanteita-ja-niiden-ratkaisuja).

## Jypeli-projektit

Jypeli-projektimallit, Jypeli-projektin pääohjelma ja sisällön (kuvat, äänet)
tuominen projektiin on kuvattu luvussa [Ensimmäinen graafinen
ohjelma](./4-ensimmainen-graafinen-ohjelma.md).

## Yhteenveto

* IDE tekee kirjoittamisesta, kääntämisestä, ajamisesta ja virheiden
  löytämisestä yhden työkalun homman. Kurssilla käytetään Rideriä.
* Pidä kaikki kurssin työt kansiossa `ohj1`, jossa on alikansiot `demot` ja
  `harjoitustyo`.
* Projekti on yksi ohjelma; solution kokoaa projektit. Demo = solution,
  tehtävä = projekti.
* Uusi solution: New Solution, projektimalli, nimet isolla alkukirjaimella,
  polku `demot`-kansioon, `net8.0`, Create.
* Run ajaa yläpalkissa valitun projektin. Reformat Code ennen palautusta.

## 🤔 Testaa tietosi

Päätä vastaus ensin ja avaa se vasta sitten. Pisteitä ei jaeta, mutta hämärät
kohdat paljastuvat.

<visa>

**Totta vai tarua?**

<details data-vastaus="totta"><summary>1. Solution voi sisältää monta projektia, ja jokainen projekti on oma ohjelmansa.</summary>

**Totta.** Kurssilla demo on solution ja jokainen tehtävä on projekti sen
sisällä. Solution on siis kansio ohjelmille, ei itse ohjelma.

</details>

<details data-vastaus="tarua"><summary>2. <em>Run</em>-painike ajaa aina sen tiedoston, joka on auki editorissa.</summary>

**Tarua.** *Run* ajaa yläpalkin pudotusvalikossa valitun projektin. Jos
muutokset "eivät näy", tarkista ensin, että valittuna on oikea projekti. Tämä
on kurssin epävirallinen perinne, johon jokainen osallistuu ainakin kerran.

</details>

<details data-vastaus="tarua"><summary>3. Projektin voi turvallisesti pitää OneDrive- tai Dropbox-kansiossa, koska silloin se on aina varmuuskopioitu.</summary>

**Tarua.** Pilvisynkronointi lukitsee tiedostoja kesken kääntämisen ja
aiheuttaa satunnaisia, vaikeasti selitettäviä virheitä. Pidä projektit
tavallisessa kansiossa ja hoida varmuuskopiointi [Gitillä](../git.md).

</details>

**Monivalinta.** Yksi vaihtoehto on oikein.

**4.** Missä kurssin demotehtävien solutionit kannattaa ohjeen mukaan pitää?

a) Työpöydällä, jotta ne löytää helposti\
b) Kansiossa `ohj1/demot`\
c) Riderin asennuskansiossa\
d) Kansiossa `bin`

<details data-vastaus="b"><summary>Näytä vastaus</summary>

**b.** Kurssin työt kootaan `ohj1`-kansioon, jossa on alikansiot `demot` ja
`harjoitustyo`. `bin`-kansio on kääntäjän tuotoksia varten, ja sen voi
huoletta poistaa. Omaa koodia sinne ei koskaan tallenneta.

</details>

**5.** Kääntäjä ilmoittaa, että ohjelmassa on kaksi `Main`-pääohjelmaa. Mikä on
todennäköisin syy?

a) Tiedosto on tallennettu kahdesti\
b) Samassa projektissa on kaksi tiedostoa, joissa kummassakin on `Main`\
c) Rider on vanhentunut\
d) Solutionissa on kaksi projektia

<details data-vastaus="b"><summary>Näytä vastaus</summary>

**b.** Projektissa saa olla vain yksi aloituspiste. Tyypillisesti uusi tehtävä
on vahingossa luotu vanhan projektin sisään erillisen projektin sijaan. Kaksi
projektia samassa solutionissa on sen sijaan täysin normaalia, ja juuri niin
demot rakennetaan.

</details>

</visa>

## Tehtävät

<!-- Vaiheessa B: T-tehtävä "Ympäristö kuntoon" (palauta kuvakaappaus
     Riderista, jossa demo1-solution ja Lumiukko-projekti ajettuna) ja bonus
     "Tekstieditorin käyttäminen" (exercises/1-8-1-bonus_editorin_kayttaminen). -->
