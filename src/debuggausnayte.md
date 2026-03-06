# Debuggausnäyte

Debuggausnäytteessä osoitat, että osaat käyttää debuggeria ongelmatilanteiden
selvittämiseen. Näytteessä testataan muun muassa seuraavien osa-alueiden
hallintaa:

- askeltaminen aliohjelman sisään (step into)
- aliohjelman suorittaminen yhtenä askeleena (step over)
- keskeytyskohdan (breakpoint) asettaminen
- ehdollisen keskeytyskohdan (conditional breakpoint) asettaminen
- arvon muuttaminen debuggerissa
- muuttujan asettaminen watch-seurantaan; watch-arvon seuraaminen

Näyte arvostellaan asteikolla hyväksytty/hylätty.

## Aikataulu ja takarajat

<!-- 
| Tutkinto-opiskelijat                                                                                                                                                                                                                   | Lukiolinjat                                                                     | Avoin yliopisto                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Näyte tulee palauttaa osan 8 takarajaan mennessä. Mahdollisista aikataulujoustoista (esim. sairauden takia) on aina sovittava ohjaajan kanssa. Palauttaminen myöhässä ilman ennalta sovittua joustoa voi johtaa näytteen hylkäämiseen. | Näyte tulee palauttaa valitsemasi opintojaksototeutuksen aikataulun mukaisesti. | Näytteen palauttamiselle ei ole takarajaa, mutta se on hyväksytettävä ohjaajalla. |
--> 

Näyte tulee olla tehtynä ja hyväksyttynä ennen tenttiin osallistumista.
Huomioithan, että näytteen tekeminen ja hyväksyttäminen voi viedä aikaa, joten
aloita ajoissa. Suosittelemme, että teet näytteen viimeistään osan 8 takarajaan
mennessä. 

## Miksi? 

Debuggerin käyttö on osa kurssin osaamistavoitteita. Ohjelman koon kasvaessa testaus- ja debuggaustaidot ovat olennainen osa virheiden etsimisessä ja korjaamisessa. Debuggeri on myös loistava työkalu ohjelman toiminnan ymmärtämiseksi.

## Miten valmistaudun?

 1. Lue [osa 5.1 Debuggaus](./osa5/1-debuggaus.md)
 2. Katso [luennon debuggauksesta ja debuggerin käytöstä (kevät 2023)](https://www.youtube.com/live/2d1ErNVn9sI?feature=share&t=1095) 
 3. Tee [Osan 5 harjoitustehtävä 4](https://tim.jyu.fi/view/kurssit/tie/itkp102/demot/demo5#KeLJyCC2zOjx)
 4. Tee [harjoittelunäyte](#harjoittelunayte) (vapaaehtoinen)

## Näytteen suorittaminen

Voit suorittaa debuggausnäytteen videona itsenäisesti tai ohjauksessa. Voit
suorittaa debuggausnäytteen sinulle sopivana aikana. 

Valitse haluamasi debuggausnäytteen suoritustapa ja seuraa sen mukaiset ohjeet.

### [Palautus videona](#tab/Videona)

1. Lataa ja avaa DebugKoe-projekti

<details collapsed>
<summary>Debuggausnäyteprojektin latausohjeet</summary>

1. Lataa [DebugKoe.zip](https://tim.jyu.fi/files/900302/DebugKoe.zip)
2. Pura lataamasi zip-tiedosto paikkaan, josta löydät sen. Jos suoritat näytteen
   Agoran mikroluokan tietokoneella, käytä kansiota `C:\MyTemp\ohj1\<käyttäjänimi>`.
3. Avaa Rider. *Welcome to JetBrains Rider* -näkymässä klikkaa oikeassa yläkulmassa olevaa *Open* -painiketta.
4. Etsi ja avaa `DebugKoe.sln`-tiedosto Riderissa. Mikäli Rider kysyy, luotatko avattavaan projektiin, valitse *Trust and Open*.
5. Avaa sen jälkeen Riderissa `Program.cs`-tiedosto, josta ohjelmakoodi löytyy.

</details>

2. Lue alla vaatimukset ja ohjeet debuggausnäytteen tekemiselle ja palauttamiselle

<details collapsed>
<summary>Ruutukaappausvideon vaatimukset ja ohjeet</summary>

**Sisällölliset vaatimukset videolle**

   1. Opiskelijan tulee käyttää kurssilla annettua DebugKoe-tehtävää.
   2. Videossa tulee näkyä debuggausnäytteen suorittaminen kokonaisuudessaan ja katkeamattomana. Videota ei saa editoida.
   3. Videolla tulee näkyä sekä ruutukaappauskuva että kuulua opiskelijan puhe selkeällä äänellä. 
   4. Opiskelijan tulee selittää jokainen tekemänsä toiminto perustellen. Selitys tulee olla 
      esimerkiksi: 
      * "Asetan riville 59 ehdollisen keskeytyskohdan, koska..." tai 
      * "Käytän continue-toimintoa, jotta..."

**Näytteen hylkäämisen perusteet**

   1. Videolla ei näy debuggausnäytteen suorittaminen kokonaisuudessaan.
   2. Tehtyjä toimia ei perustella.
   3. Opiskelija ei puhu tai puheesta ei saa selvää.
   4. Video on kohtuuttoman pitkä (luokkaa kymmeniä minuutteja), sisältää pitkiä pohdintoja tai lukuisia yritysten tai
      erehdysten sarjoja. 
   5. Annetut perustelut ovat oleellisesti vääriä tai sisältävät selkeitä virhekäsityksiä. Näytteen toisessa osassa on kiinnitettävä erityistä huomiota siihen, mihin kohtaan ohjelman suoritus keskeytyy ja miksi.
   6. Konsolissa ei lue lopuksi:
```
Tehtävä 1 läpäisty!
Tehtävä 2 läpäisty!

Onnittelut, debug-koe läpäisty! Paina Enteriä poistuaksesi.
```

**Tekniset vaatimukset videolle**

   1. Resoluution tulee olla mielellään vähintään Full HD (1920x1080). Jos näyttösi tarkkuus on hyvin korkea, pienennä sitä. Pääasia on, että tekstistä saa selvää. 
   2. Äänen tulee olla selvästi kuultavissa. Käytä mielellään hyvälaatuista mikrofonia ja puhu lähelle mikrofonia.
   3. Tarkista äänentasot testinauhoituksella. Kytke tarvittaessa kohinansuodatukset tai muut automaattiset äänenparannustoiminnot pois päältä mikäli mahdollista.
   4. Valitse videon laaduksi Korkea, tai vähintään 5 Mbps, jos voit sen valita. 
   5. Hyviä ohjelmia ruutukaappauksen tekemiseen ovat esimerkiksi Screen-Cast-O-Matic (Windows), Open Broadcast Software (Win/Mac/Linux) ja Quicktime (Mac).

**Näytteen hylkäämisen perusteet**

   1. Video on niin epäselvä ettei tekstistä saa selvää. 
   2. Puheraita puuttuu tai siitä ei saa selvää.

**Videon jakelun vaatimukset**

Laita video YouTubeen (suositus) tai Moniviestimeen. YouTubessa voit laittaa videon Unlisted-tilaan, mutta **ei** Private-tilaan. Tarkista esimerkiksi selaimen Incognito-tilassa, että video on todella katsottavissa myös kirjautumattomana käyttäjänä. Emme lataa tiedostoja esim. MediaFirestä tai vastaavista tiedostonjakopalveluista. 

Voit poistaa videon näytteen tarkastamisen jälkeen.

**Näytteen hylkäämisen perusteet**

   1. Videon URL-osoite ei ole TIMissa.
   2. Tarkastaja ei pääse käsiksi videoon.
   3. Video on jossain muualla kuin YouTubessa tai Moniviestimessä.

</details>

3. Tee DebugKoe-projektissa olevat tehtävät ja nauhoita suorituksesi, ks. ohjeet yllä. 

  * Käynnistä ladattu ohjelma Debug-tilassa ja suorita projektissa olevat tehtävät. Tehtävien ohjeet löytyvät `Program.cs` -tiedostosta.
  * Voit yrittää debuggausnäytteen suorittamista niin monta kertaa kuin haluat.

4. Julkaise nauhoitteesi YouTubeen tai Moniviestimeen. Kopioi videon URL-osoite [TIMin Oma eteneminen -sivun](https://tim.jyu.fi/view/kurssit/tie/itkp102/eteneminen#debuggausn%C3%A4yte-opiskelija-t%C3%A4ytt%C3%A4%C3%A4) debuggausnäytteen URL-osoitteen palautuskenttään. Mikäli videosi on YouTubessa, kopioi videon URL-osoite käyttäen Share-painiketta videon alapuolella. 

Debuggausnäytteet tarkistetaan noin kerran viikossa. Saat ilmoituksen, kun työsi on tarkistettu.

***

### [Palautus ohjauksessa](#tab/Ohjauksessa)

Debuggausnäyte suoritetaan lähi- tai etäohjauksen aikana. Debuggausnäyte palautetaan näyttämällä ohjaajalle DebugKoe-ohjelman tuloste debuggausnäytteen läpipääsystä:

```
Tehtävä 1 läpäisty!
Tehtävä 2 läpäisty!

Onnittelut, debug-koe läpäisty! Paina Enteriä poistuaksesi.
```

Ohjaaja voi kysyä perustelemaan ratkaisusi tai näyttämään, miten ratkaisit tehtävät.

**Vaatimukset**

 1. Opiskelijan tulee käyttää kurssilla annettua DebugKoe-tehtävää.
 2. Opiskelijan tulee näyttää ohjaajalle Riderissa oleva tuloste debuggausnäytteen läpipääsystä (ks. malli yllä).
 3. Opiskelijan tulee pystyä perustelemaan ratkaisunsa ohjaajan niin pyydettäessä.

**Näytteen hylkäämisen perusteet**

1. Riderin Console-näkymässä ei näy yllä olevaa läpäisytekstiä.
2. Opiskelija ei pysty perustelemaan ratkaisunsa.
3. Annetut perustelut ovat oleellisesti vääriä tai sisältävät selkeitä virhekäsityksiä. Näytteen toisessa osassa on kiinnitettävä erityistä huomiota siihen, mihin kohtaan ohjelman suoritus keskeytyy ja miksi.

**Debugnäytteen suorittaminen ohjauksessa**

1. Lataa ja avaa DebugKoe-projekti

   <details collapsed>
   <summary>Debuggausnäyteprojektin latausohjeet</summary>
   <br>
   > [!HUOMAUTUS]
   >Jos suoritat näytteen yliopiston mikroluokassa, lataa kaikki tiedostot ja projektit seuraavaan hakemistoon:
   >```
   >C:\MyTemp\ohj1\<käyttäjänimi>
   >```
   >Muualta ei voi ajaa omia ohjelmia.

   1. Lataa [DebugKoe.zip](https://tim.jyu.fi/files/900302/DebugKoe.zip)
   2. Pura lataamasi .zip tiedosto paikkaan, josta löydät sen.
   3. Avaa Rider. *Welcome to JetBrains Rider* -näkymässä klikkaa oikeassa yläkulmassa olevaa *Open* -painiketta.
   4. Etsi ja avaa `DebugKoe.sln`-tiedosto Riderissa. Mikäli Rider kysyy, luotatko avattavaan projektiin, valitse *Trust and Open*.
   5. Avaa sen jälkeen Riderissa `Program.cs`-tiedosto, josta ohjelmakoodi löytyy.
   </details>

2. Tee DebugKoe-projektissa olevat tehtävät **pääteohjauksessa**

    * Mene pääteohjaukseen. Näet ohjausten aikataulut [Tuki ja palaute sivulta](./tuki-ja-palaute.md)
    * Käynnistä ladattu ohjelma Debug-tilassa ja suorita projektissa olevat tehtävät. Tehtävien ohjeet löytyvät `Program.cs` -tiedostosta.
    * Voit yrittää debuggausnäytteen suorittamista niin monta kertaa kuin haluat.
    * Kun saat viestin `debug-koe on läpäisty!` voit siirtyä seuraavaan kohtaan.

3. Kun olet saanut tehtävät tehtyä

   * Pyydä seuraavaksi ohjaajaa tarkistamaan tehtäväsi
   * Valmistaudu perustelemaan ratkaisusi ohjaajalle tarvittaessa

Ohjaaja kuittaa harjoitustyösi paikan päällä.
Saat vielä erillisen kuittauksen debuggausnäytteen hyväksymisestä sähköpostitse.

***

## Harjoittelunäyte {#harjoittelunayte}

Voit harjoitella debuggausnäytettä tekemällä harjoittelunäytteen. 

 1. Lataa [Debugnayte.zip](exercises/debug-harjoittelu/DebugNayte.zip) ja pura
se paikkaan, josta löydät sen.
 2. Etsi ja avaa `DebugNayte.sln`-tiedosto Riderissa. Mikäli Rider kysyy,
    luotatko avattavaan projektiin, valitse Trust and Open.
 3. Avaa sen jälkeen Riderissa `Program.cs`-tiedosto, josta ohjelmakoodi löytyy.
 4. Seuraa `DebugNayte`-luokan dokumentaatiossa olevia ohjeita ja tee siellä
    annetut tehtävät. Kun pyydetään "ohjaajan antamaa lukua", kirjoita mikä luku
    tahansa väliltä 600-1500.

Älä muuta koodia ellei tehtävässä ole niin käsketty. 

Voit pyytää harjoittelunäytteen tekemiseen apua pääteohjauksissa; ks. ajat
etusivulta.
