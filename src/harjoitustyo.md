# Harjoitustyö

Harkkatyön kuvaus. Lomakkeet edelleen TIMissä

Harjoitustyö

 - on osa kurssisuoritusta ja arvioidaan asteikolla hyväksytty/hylätty.
   Harjoitustyö pitää olla hyväksytty ennen kuin kurssista voi saada
   arvosanan.
 - tehdään yksin tai parityönä. Mikäli luontaista paria ei löydy, ei sitä kannata ehkä etsiäkään
   väkisin. Kolmen hengen ja sitä isompia ryhmiä ei hyväksytä.
 - sisältää keskimääräisesti *opiskelijaa kohti* noin 27 tuntia työtä.
   Parityönä tehtävän työn määrä on siis laskennallisesti 54 tuntia. Katso tarkat vaatimukset paritöille alla.
 - voi olla [Jypeli-työkaluilla](https://tim.jyu.fi/view/kurssit/jypeli/wiki) tehty peli, 
   mutta voi olla [jokin muukin C#-kielellä tehty komentoriviohjelma](#muukuinpeli).
   Muita kieliä ei hyväksytä.

## Vaiheet ja aikataulu

Harjoitustyöhön kuuluu kolme vaihetta: Vaihe 1 (suunnitelma), Vaihe 2 (työ 50 % valmis) ja Vaihe 3 (työ 100 % valmis). Vaiheiden tarkemmat kuvaukset löytyvät alta. 

Harjoitustyön vaiheet palautetaan esittelemällä ne ohjaajalle. Voit esittää harjoitustyösi [ohjauksessa](./tuki-ja-palaute.md) tai sopimalla erillinen ohjausaika sähköpostitse [ohj1-opet@tim.jyu.fi](mailto:ohj1-opet@tim.jyu.fi).

## Aikataulu ja takarajat

| Tutkinto-opiskelijat                                                                                                                                                                                                                                                                                                                     | Lukiolinjat                                                                       | Avoin yliopisto                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Jokainen vaihe tulee palauttaa **ennen asetettua takarajaa**. Mahdollisista aikataulujoustoista (esim. sairauden takia) on aina sovittava ohjaajan kanssa. Työn vaiheiden palauttaminen myöhässä ilman ennalta sovittua joustoa voi johtaa harjoitustyön hylkäämiseen. Päätöksen tekevät opintojakson vastuuopettajat tapauskohtaisesti. | Vaiheet tulee palauttaa valitsemasi opintojaksototeutuksen aikataulun mukaisesti. | Vaiheiden palauttamiselle ei ole kiinteitä takarajoja, mutta vaiheet on hyväksytettävä ohjaajalla. Kun vaihe on valmis, laita harjoitustyön vaihe ajoissa versionhallintaan ja käy esittelemässä työtä ohjaajalle pääteohjaustilaisuuksissa. |

## Harjoitustyön vaiheiden kuvaukset ja tarkistuslistat

### Vaihe 1: Suunnitelma versiohallinnassa

 1. **Tutkinto-opiskelijat ja lukiolinjat**: Suunnitelma on näytettävä ohjaajalle ennen osan 5 harjoitustehtävien takarajaa.

 2. Luo oma etävarasto GitLabiin tai GitHubiin. Katso [kirjalliset ohjeet](./tyokalut/git.md#oman-etävaraston-luominen-gitlab-palveluun) tai [ohjevideo](https://youtu.be/MQJ69rmd1sw)

 3. Kopioi ja liitä etävarastosi osoite [Oma eteneminen]() <!--TODO Päivitä url--> -sivulle. Etävaraston osoitteen on oltava muotoa *https://github.com/nimi/ohj1ht.git* TAI *https://gitlab.com/nimi/ohj1ht.git*. TODO: Linkki.
 
 4. Hae etävarasto omalle tietokoneelle Git-työkalun avulla. Sinulla tulee olla Git-työkalu asennettuna, katso [työkaluohjeet](./tyokalut.md#git). Katso git-ohjeet [omien tietojen asettamiseksi](./tyokalut/git.md#omien-tietojen-nimi-sähköposti-asettaminen) ja [etävaraston lataamiseksi omalle tietokoneelle](./tyokalut/git.md#etävaraston-hakeminen-omalle-tietokoneelle-clone). 

 5. Kirjoita harjoitustyön suunnitelma ladattuun harjoitustyökansioon. Katso [suunnitelman vaatimukset alla](./harjoitustyo.md#suunnitelma). Katso [esimerkkisuunnitelma](https://gitlab.jyu.fi/tie/ohj1/2025k/ohj1ht/-/blob/main/suunnitelma/suunnitelma.md).
 
 6. Lataa suunnitelmasi ja kuvasi etävarastoon. Katso ohjeet [tiedostojen lisäämiseksi git-varastoon](./tyokalut/git.md#tiedostojen-vieminen-paikalliseen-tietovarastoon-add-commit) ja ohjeet [git-varaston lataamiseksi etävarastoon](./tyokalut/git.md#tehtyjen-muutosten-lähettäminen-etävarastoon-push). 

 7. Esittele suunnitelma ohjaajalle lähi- tai etäohjauksessa.

### Vaihe 2: Työ 50 % valmis

 1. **Tutkinto-opiskelijat ja lukiolinjat**: Harjoitustyön tilanne on näytettävä ohjaajalle ennen osan 8 harjoitustehtävien takarajaa.

 2. Tee työsi eteenpäin suunnitelman mukaan. 
    - Luo ohjelmakoodia varten [uusi solution](./osa1/2-ohjelmointiymparisto-kuntoon.md#uusi-solution). 
    - Aseta *Solution directory*-kohtaan sama polku kuin 1. vaiheen Git-varastolla. Esim. `C:\kurssit\ohj1\ht`.
    - Pidä mielessä suunnitelmasi sekä harjoitustyön [vaatimukset](#vaatimukset). 
    - Jos teet harjoitustyön parityönä, muista tehdä tarkaa tuntikirjanpito

 3. Varmista, että työsi koodi on ajan tasalla etävarastossa.
    - Katso ohjeet [tiedostojen lisäämiseksi git-varastoon (add-commit)](./tyokalut/git.md#tiedostojen-vieminen-paikalliseen-tietovarastoon-add-commit) ja ohjeet [git-varaston lataamiseksi etävarastoon (push)](./tyokalut/git.md#tehtyjen-muutosten-lähettäminen-etävarastoon-push).
    - Muista pitää etävarasto ajan tasalla mahdollisimman usein!

 4. Esittele suunnitelma ohjaajalle lähi- tai etäohjauksessa.

Jos tämä vaihe on pahasti kesken, tarkastaja palauttaa työn opiskelijalle ja antaa 7 päivää aikaa tehdä korjaukset, jonka jälkeen vaihe tarkastetaan uudelleen.


### Vaihe 3: Työ 100 % valmis

 1. **Tutkinto-opiskelijat ja lukiolinjat**: **Näytettävä ohjaajalle ensimmäisen tentin mennessä** 


- Tarkista, että työ täyttää kaikki vaaditut osa-alueet
  - Näet kaikki tarkastettavat osa-alueet [vaatimuksista kohdasta "Tarkastettavat osa-alueet"](#htosat)
  - Jos teet harjoitustyön parityönä, tarkista, että tuntikirjanpito on ajan tasalla

- Varmista, että työsi lopullinen koodi on etävarastossa
   - Katso ohjeet [tiedostojen lisäämiseksi git-varastoon](./tyokalut/git.md#tiedostojen-vieminen-paikalliseen-tietovarastoon-add-commit) ja ohjeet [git-varaston lataamiseksi etävarastoon](./tyokalut/git.md#tehtyjen-muutosten-lähettäminen-etävarastoon-push)
   - Huomaa, että etävarastossa olevan työn tulee olla toimiva! Voit esimerkiksi kokeilla ladata etävarasto omalle tietokoneelle eri kansioon ja yrittää ajaa solution.

- Esittele suunnitelma ohjaajalle lähi- tai etäohjauksessa.

Mikäli ohjaaja antaa merkittävän määrän korjauskehotuksia, opiskelijalla on 7 päivää aikaa tehdä korjaukset, jonka jälkeen vaihe tarkastetaan uudelleen.

***

## Vaatimukset

### Suunnitelma

Harjoitustyö täytyy olla suunniteltu ja suunnitelman tulee olla ohjaajan hyväksymä.
Suunnitelmat tallennetaan GitLabiin, ks. yläpuolelta vaiheen 1 tarkistuslista.

Suunnitelmassa pitää olla ainakin seuraavat asiat (soveltaen ei-peliharjoitustyöhön):

  1. Tekijöiden nimet
  2. Pelin nimi
  3. Harjoitustyön osoite gitissä
  3. Pelaajien lukumäärä (1-4) 
  4. Pelin taustatarina tai kuvaus pelin teemasta
  5. Pelin idea ja tavoitteet
  6. Hahmotelma pelistä (kuva tai kuvia paperilla käsin tai tietokoneella piirrettynä)
  7. Jonkinlainen kuvaus siitä, miten peli etenee
  8. Pelissä olevat oliot, niiden toiminnot ja missä suhteessa ne ovat toisiinsa
  9. Toteutuksen suunnitelma: mitä tekisin ja missä järjestyksessä? Millä aikataululla?

Voit katsoa vinkkejä seuraavista esimerkkisuunitelmista:

 * [Hirsipuu](https://tim.jyu.fi/view/kurssit/tie/ohj1/v/2017/syksy/ht/vesal)  (peli)
 * [AngryLego](https://tim.jyu.fi/view/kurssit/tie/ohj1/v/2017/syksy/ht/vesalangry) (peli)
 * [Työaikaraportti](https://tim.jyu.fi/view/kurssit/tie/ohj1/v/2017/syksy/ht/tyoaikaraportti) (ei-peli), 
   katso myös [tutoriaali työaikaraporttiin](https://tim.jyu.fi/view/kurssit/tie/ohj1/harjoitustyo/tyoaikaraportti-tutorial)

### Toiminnallisuus

Pelissä pitää *tapahtua jotakin*, eli ruudulla pitää tapahtua jotain 
järkevää. Käyttäjän tulee voida osallistua peliin interaktiivisesti 
esimerkiksi hiiren ja/tai näppäimistön välityksellä.

### Koodi

Työssä on oltava vähintään muutama aliohjelma Jypelin 
valmiiden aliohjelmien (`Main`, `Begin`) lisäksi.

Muut tarkastettavat osa-alueet on lueteltu alempana kohdassa "Tarkastettavat osa-alueet".


### Paritöistä

Kaikki ryhmäläiset käyttävät samaa etävaraston osoitetta. Ks. [Git-ohjeet](./tyokalut/git.md#git-ja-ryhmätyöskentely).

#### Parityöt, työnjako

Molempien on annettava kutakuinkin yhtäläinen panos työn ohjelmalliseen toteutukseen. Yksittäisenä varoittavana esimerkkinä mainittakoon parityö, jossa toinen on paneutunut grafiikan tekemiseen ja toinen ohjelmointiin. Tällöin grafiikkaan paneutuneelta osallistujalta voidaan pyytää lisänäyttöjä työn ohjelmalliseen toteutukseen johon parityön toinen osapuoli ei saa osallistua. Lisäksi kummankin tekijän on pystyttävä esittämään riittävän tarkka tuntikirjanpito ja selvitys mitä työajalla on tehty, jotta osaamistavoitteet ohjelmoinnin osalta voidaan todentaa. 

#### Parityöt, työn vaativuus

Työn on oltava vaativampi kuin yksin tehdyn työn, ja tässä työmäärä on tärkein mittari. Ohjaajat käyvät työn läpi tarkastustilaisuudessa ryhmäläisten kanssa. Yksittäistä pelin ominaisuutta joka kaikilta paritöiltä vaadittaisiin ei yleisellä tasolla voi antaa. Näiden kriteerien tarkoitus ei ole vaikeuttaa tekemistä vaan ehkäistä ennalta vapaamatkustamista.


### Tarkastettavat osa-alueet

Alla on tarkastettavien osa-alueiden lista, jonka ohjaajat tulevat tarkastamaan harjoitustyön esittelemisen yhteydessä.

 1. **Nimeäminen** on johdonmukaista ja noudattaa [kurssin koodauskäytänteitä]().
 
 2. **Näkyvyys**: Aliohjelmien ja attribuuttien näkyvyys tulee olla määritelty
(`public`, `private`). Julkisia staattisia (`public static`) muuttujia ei saa olla. 
 3. **Ei turhia peliluokan attribuutteja**. 

    Jos joitain koko peliluokkaan näkyviä arvoja tarvitaan, pyritään käyttämään vakioita (`const`). Kuvat, äänet, animaatiot ja muut raskaat resurssit on kuitenkin hyvä pitää attribuutteina, jolloin ne ladataan vain kerran pelin aikana. Esim. kuvien olioviitteet voi kiinnittää muuttumattomaksi `static readonly` määreellä.

 4. **Toimii**: Ohjelma toimii, ei kaadu ja päättyy asiallisesti. 

    Pelissä pitää tapahtua jotakin järkevää, johon käyttäjä voi osallistua interaktiivisesti. Pelissä pitää myös olla tavoite, haaste tai tarina.

 5. **Ei toistoa**, joka olisi voitu tehdä silmukoilla tai aliohjelmilla. 

    Myöskään aliohjelmien välillä ei saa olla toistoa: esimerkiksi `LuoVihu1` ja `LuoVihu2`, joissa olisi lähes sama koodi kahteen kertaan.

 6. **Taulukko**: Käytetään taulukkoa tai listaa. 
 
    Tietorakenteella täytyy olla jokin
    tarkoitus siten, että sinne 
    tallennetaan useita arvoja, joita todella käytetään 
    pelissä. Tietorakenteen käytön tulee parantaa koodin laatua ja 
    helpottaa koodin lukemista, kirjoittamista tai edelleenkehittämistä. 
    Keinotekoisia tai vailla käyttötarkoitusta olevia tietorakenteita ei hyväksytä.
    [Esimerkkejä.](#miten-saan-taulukon-silmukan-tai-funktion-peliini-taulukko-silmukka-funktio-areaqa-taulukko-silmukka-collapsetrue-idprt6kcamnzha) 

 7. **Silmukka**: Ainakin yksi silmukka. 
 
    Silmukalla täytyy olla jokin tarkoitus siten, että rakenteen avulla luetaan ja/tai käsitellään tietoa. Ei riitä että lisätään "tähtiä taivaalle silmukassa 10 kpl." Silmukalla tulee olla merkitys, joka parantaa koodin laatua ja helpottaa koodin lukemista, kirjoittamista tai edelleenkehittämistä. [Esimerkkejä.](#miten-saan-taulukon-silmukan-tai-funktion-peliini-taulukko-silmukka-funktio-areaqa-taulukko-silmukka-collapsetrue-idprt6kcamnzha)

 8. **Ei turhia literaaleja**: Kiinteiden lukuarvojen tai muiden sellaisten arvojen
käyttö, jotka heikentävät koodin ylläpidettävyyttä, on kielletty.

      Et siis saa tehdä koodia kuten 
      ```csharp
      if (y < 18)
      ```
   
      jossa 18 on hyvin todennäköisesti turha literaali. Sen tilalle tulee laittaa muuttuja tai vakio, kuten
      ```csharp
      int pisteraja = 18
      ``` 
      Vakiot ilmaistaan `const`-määreellä. 
 9. **`}` + 2 tyhjää**: Aliohjelmien loppusulun `}` jälkeen tasan kaksi tyhjää riviä.
 10. **Dokumentaatio**: Luokat, aliohjelmat ja attribuutit tulee dokumentoida.

      Dokumenteissa kuvataan muun muassa sitä, *mitä* aliohjelmat tekevät, ei miten ne sen tekevät. Luokan alussa tulee olla tekijän nimi ja versio (`@author`, `@version`). Myös attribuutit dokumentoidaan `summary`-tagein. 
11. **Funktio**: Pelissä on funktio.

      Funktio ottaa vastaan parametrin tai parametreja, käsittelee parametrina saatua tietoa, ja palauttaa arvon annetun syötteen perusteella. Funktion täytyy prosessoida tietoa jotenkin; funktiolla täytyy olla jokin todellinen tarkoitus ohjelman kokonaisuuden kannalta. Tyypillisesti funktiossa voi hyödyntää silmukkaa tai taulukkoa/listaa. [Esimerkkejä.](#miten-saan-taulukon-silmukan-tai-funktion-peliini-taulukko-silmukka-funktio-areaqa-taulukko-silmukka-collapsetrue-idprt6kcamnzha) 
 12. **Ei virheitä eikä varoituksia** Riderin oikeassa yläkulmassa. Muista asentaa [kurssin Rider-asetukset](./osa1/2-ohjelmointiymparisto-kuntoon.md#konfigurointi-ja-laajennokset) 
 13. Ei-pelien tapauksessa osoitettu myös taito testata aliohjelmia.


## Usein kysytyt kysymykset ja muut vinkit

<details closed>
<summary>Millaisia pelejä voi harjoitustyöksi tehdä?</summary>

***

Jos et keksi, minkä tyylisen pelin haluaisit tehdä, 
katso, millaisia pelejä on tehty edellisissä toteutuksissa:

- [Ohj1 Kevät 16 pelejä](https://youtu.be/-qBQ5CmF5ps)
- [Ohj1 Kevät 22 pelejä](https://youtu.be/Coknsg_ClR4)

Muista että voit tehdä muutakin kuin pelin!
</details>

<details closed>
<summary>Miten saan taulukon, silmukan tai funktion peliini?</summary>

***

Kun tallennat pelin olioita tai tapahtumia listaan / taulukkoon, 
voit käsitellä niitä yhdellä silmukalla ja paketoida logiikan omaan funktioon. 
Näin syntyy sekä selkeää että tehokasta koodia.

**Mitä pelidataa kannattaa kerätä?** Tässä esimerkkejä. 

 * Pelaajan syötteet: painetut näppäimet, kosketukset
 * Pelimaailman tila: viholliset, kerättävät, esteet
 * Tapahtumat: törmäysten tagit, pistemäärät, aikaleimat, ratakierrokset

Tallenna tiedot listaan sitä mukaa kun ne (olio, tapahtuma...) syntyvät.

**Millainen funktio voisi olla?** Tässä esimerkkejä. Huomaa, että nämä ovat enemmän ideoita siitä, millaiset
funktiot voisivat olla pelissä hyödyllisiä.  

 * Laske aikojen keskiarvo
 * Etsi minimi, maksimi tai eniten kerätty esine
 * Yhdistele dataa (esim. kaksinpelissä pallon hallinta-aika)
 * Erityisesti ei-peleissä jokin muu tiedonkäsittely, johon liittyy
   sisään menevä aineisto ja siitä tehty laskennallinen tulos

Pidä laskentalogiikka omassa funktiossa, jotta peliluokka pysyy selkeänä.

**Milloin dataa käsitellään?** Tässä esimerkkejä. 

 * Kenttä vaihtuu
 * Aikaraja ylittyy
 * Peli alkaa alusta


**Hyödynnä tulokset pelissä** Tässä esimerkkejä.

 * Näytä pelaajalle (pisteet, tilastot, top-ajat)
 * Käynnistä uusi vaikeustaso, jos keskimääräinen kierrosaika laskee
 * Palkitse pelaaja, kun kerättyjen esineiden määrä ylittää rajan

>Jypelin kirjaston ohjeissa on koodiesimerkkejä, joissa käytetään silmukkaa tai taulukkoa. Nämä eivät sellaisenaan riitä, vaan työssä tulee olla oman ajatustyön tulos.

Mikäli omassa pelissä ei ole taulukkoa/listaa, silmukkaa tai funktiota, pitää
ohjaajalle esittää itse tehdyn (ts. työ on tehty omatoimisesti ilman merkittävää apua ohjaajalta tai muilta opiskelijoilta) demotehtävän vastaus, missä 
em. asioiden osaaminen on näytetty.  Tästä voi laittaa vaikka
kommentin omaan harjoitustyöhön tyyliin:

```csharp
// TODO: taulukko, ks: https://tim.jyu.fi/answers/kurssit/tie/ohj1/%%vuosik%%/demot/demo7?answerNumber=1&task=matriisiensumma&user=vesal
```

Linkin saa otettua demotehtävän vierellä olevasta pienestä Link-linkistä klikkaamalla sitä hiiren oikealla painikkeella, ja kopioimalla linkin osoite.
</details>

<details closed>
<summary>Voinko tehdä jotain muuta kuin peli?</summary>

***

**Kyllä, vaihtoehtoja ovat esimerkiksi:**

 * [Janat-haaste](ht/janat)
 * [työaikaraportti](https://tim.jyu.fi/view/kurssit/tie/ohj1/harjoitustyo/tyoaikaraportti-tutorial )
 * [Tuulet netistä](https://tim.jyu.fi/view/kurssit/tie/ohj1/v/2022/syksy/ht/vesalsaa)

**Muita vaihtoehtoja:** 

 * Yksi esimerkki voisi olla vaikkapa lukea tiedostosta suomenkielinen teksti ja lasketaan mitä vokaalia on eniten.
 * Tai työ voi olla tietyn WWW-sivun lukeminen ja sieltä tiettyjen tietojen käsittely yksinkertaiseen muotoon. 
 * Esimerkiksi joltakin sääsivulta päivän tuuliarvojen maksimi ja keskiarvo.

Monet [Advent of code -tapahtuman](https://adventofcode.com/) tehtävät voivat hyvinkin soveltua harjoitustyön aiheeksi -- tosin loppupään tehtävät ovat jo hyvin vaikeita. 
Inspraatiota voi hakea myös vaikkapa täältä [http://nifty.stanford.edu/](http://nifty.stanford.edu/). Katso tuolta CS1-tasoiset tehtävät, niiden pitäisi (suurelta osin) olla tämän kurssin osaamistavoitteiden mukaisia. Näissäkin tapauksissa suunnitelma tulee kuitenkin hyväksyttää ohjaajalla. 

Ei-pelien tapauksessa ohjelmaan tehdyt testattavissa olevat aliohjelmat
tulee testata.
</details>

<details closed>
<summary>Mistä aloitan pelin koodaamisen?</summary>

***

 - Aloita vaikka pistämällä kentälle jotakin olioita
 - [MontaPalloa.cs](https://trac.cc.jyu.fi/projects/ohj1/browser/esimerkit/2016s/luennot/luento10/MontaPalloa/MontaPalloa/MontaPalloa.cs)
 - Jos peli on tasohyppelymäinen, luo uusi projekti kohdasta Jypeli -> Tasohyppely
 - Katso [sisällön tuominen peliin ](./osa1/2-ohjelmointiymparisto-kuntoon.md#sisällön-tuominen-jypeli-projektiin-content-kansio). Kuvat toimii jos:
      1. piirretty/haettu tarvittavat kuvat, muista tekijänoikeus
      2. tehty projektiin Content-niminen kansio ja kopioitu kuvat sinne
      3. klikattu hiiren oikealla kutakin kuvaa (tai valittu monta) ja Properties
      ja sieltä valittu "Copy if newer"

Esimerkkejä:
 - [LumiukkoTaulukolla.cs](https://trac.cc.jyu.fi/projects/ohj1/browser/esimerkit/2016s/luennot/luento12/LumiukkoTaulukolla/LumiukkoTaulukolla/LumiukkoTaulukolla.cs)
 - [Pong-peli](https://trac.cc.jyu.fi/projects/npo/wiki/Pong/Vaihe1)
 - [Läpsylintu](https://trac.cc.jyu.fi/projects/npo/wiki/Lapsylintu)
 - [AngryLego.cs](https://trac.cc.jyu.fi/projects/ohj1/browser/esimerkit/2016s/luennot/live13/AngryLego/AngryLego/AngryLego.cs)

Ei-pelin tekijöille: 
    - [Työaikaraportit](https://tim.jyu.fi/view/kurssit/tie/ohj1/harjoitustyo/tyoaikaraportti-tutorial)
    - [Kuvaaja.cs](https://gitlab.jyu.fi/tie/ohj1/2022s/esimerkit/-/blob/main/demopohjat/demo7/Kuvaaja/Kuvaaja.cs)
    - [HaeTuulet versiohistoria](https://gitlab.jyu.fi/vesal/ohj1htsaa/-/commits/main/saa)
</details>

<details closed>
<summary>Miten voisin työskennellä parin kanssa samanaikaisesti?</summary>

***

Lähtökohtaisesti on kolme tapaa, joita tällä opintojaksolla suositellaan:

- Kunkin tekee muutoksia omalla koneella ja lataa ne samaan etävarastoon
- Pariohjelmointi
- Koodieditorin jakaminen verkossa (Google Docs -tyylinen samanaikainen muokkaus)

**Eri koneet, sama etävarasto**:

Yleisin tapa yhdessä ohjelmointiin on, että kumpikin lataa saman etävaraston
omalle tietokoneelle, tekee omia muutoksia ja lataa ne takaisin samaan etävarastoon.
Niin kauan kuin muutoksia ei tehdä päällekkäin (eli kummatkin muokkaatte samaa koodiriviä)
tai päällekkäiset muutokset ovat tarpeeksi yksinkertaisia, `git`-työkalu osaa yhdistää
kahden eri tekijän muutokset yhteen.
Tässä tärkeintä on, että muutokset lähetetään etävarastoon ([`git push`](./tyokalut/git.md#tehtyjen-muutosten-lähettäminen-etävarastoon-push)) ja ladataan ([`git pull`](./tyokalut/git.md#muutosten-hakeminen-etävarastosta-paikalliseen-varastoon-pull)) sieltä
mahdollisimman usein. Tapauksissa, jossa `git`-työkalu ei pysty yhdistämään kahden henkilön muutoksia, syntyy ns. *konflikti*, joka pitää ratkaista itse. Git-konfliktien ratkaiseminen on tämän opintojakson ulkopuolella; ongelmatilanteissa ota yhteyttä siis ohjaajaan. Lyhyt kuvaus tästä löytyy [Git ja ryhmätyöskentely](./tyokalut/git.md#git-ja-ryhmätyöskentely) osiosta.

**Pariohjelmointi**:

Toinen tapa työskennellä yhdessä on pariohjelmointi (engl. [*pair programming*](https://en.wikipedia.org/wiki/Pair_programming)). Siinä kumpikin pari työskentelee saman tietokoneen äärellä: yksi parista ohjelmoi ja toinen seuraa tai ohjaa. Ajatus on, että rooleja vaihdetaan usein -- vaihto voi tapahtua jopa "lennosta". Koska muutokset tehdään samalla tietokoneella, koodin lataaminen etävarastoon menee samalla tavalla kuin jos tekisi harjoitustyötä yksin. Pariohjelmoinnin tapauksessa tulee kuitenkin pitää tarkasti tuntikirjanpitoa, sillä kunkin parin työpanosta ei näe suoraan git-versiohistoriasta. Pariohjelmointi lisäksi toimii parhaiten lähitapaamisissa, sillä "vuoron vaihtaminen" etänä on yleensä hankalaa.

**Työskentely samanaikaisesti verkossa**:

Jos työtä halutaan työstää yhtä aikaa samassa editorissa, helpoin tapa on käyttää Riderin Code With Me -ominaisuutta. Ominaisuuden avulla koodieditorista tulee Google Docs -tapainen alue, jossa kaksi tai useampaa henkilöä voi muokata koodia samanaikaisesti eri koneella. Muutokset tallentuvat yhdelle tietokoneelle, josta ne on helppoa ladata etävarastoon ilman konflikteja. Ominaisuus on Riderissa betakokeilussa. Valitettavasti non-commercial-lisenssillä (oletus tällä kurssilla) session enimmäisaika on 30 minuuttia. Jos anot opiskelijalisenssiä (ks. seuraava ohje), saat (ilmeisesti) rajattoman käyttöajan.

</details>

<details closed>
<summary>Opiskelijalisenssin anominen Rideriin</summary>

***

Voit anoa itsellesi maksuttoman opiskelijalisenssin käyttäen <u>student.jyu.fi</u>-sähköpostiosoitetta.
Noudata huolellisesti alla olevia ohjeita. 
 			
 1. Varmista, että `student.jyu.fi`-osoitteesi toimii. 
    Kannattaa lähettää itselleen testiposti jostain ulkopuolisesta osoitteesta
    (esim. Gmail tai Hotmail) ja katsoa tuleeko posti itselle perille.
    Ota varmuuden vuoksi mahdollinen edelleenohjaus pois päältä.
    Huomioi, että edelleenohjauksen deaktivoitumisessa on viivettä.
    Jos posti ei tule perille, tarkista account.jyu.fi -> sähköpostiasetukset.
    Selvitä tarvittaessa Digipalveluiden (help.jyu.fi) kanssa missä vika on. 

    **<u>Et voi edetä tässä ohjeessa, jos opiskelijasähköpostisi ei toimi</u>.**			
 2. Siirry osoitteeseen [https://www.jetbrains.com/community/education/#students](https://www.jetbrains.com/community/education/#students) 
 3. Klikkaa *Apply now*.			
 4. Täytä tiedot *Apply with: University email address* -lomakkeessa, ole tarkkana 
 että annat student.jyu.fi-loppuisen opiskelijasähköpostiosoitteen. Hyväksy mahdolliset käyttöehdot. 
 Klikkaa *Apply for free products*.			
 5. Avaa yliopiston sähköpostisi, noudata JetBrainsin lähettämän vahvistusviestin
 ohjeita ja vahvista lisenssi.
 **<u>Jos viesti ei tulekaan, älä lähetä lomaketta useita kertoja "varmuuden vuoksi". Siitä on vain ja ainoastaan haittaa.</u>**
 6. JetBrains pyytää linkittämään lisenssin JetBrains-tiliin. 
 Tilin voinee luoda M365/Microsoft-tilin kautta valitsemalla *Sign in with Microsoft* ja yhdistämällä suoraan			
 yliopiston sähköpostiin.			
 			
Lisenssi on voimassa vuoden, jonka jälkeen sen voi uusia.
 			

Jos teet yrityksiä väärällä sähköpostiosoitteella (esim. muulla kuin tuo pitkä student-muoto), niin			
JetBrains lisää osoitteesi mustalle listalle, ja sen jälkeen osoitteen avaamista pitää pyytää lomakkeella:
 			
- <https://rider-support.jetbrains.com/hc/en-us/requests/new>

**Code With Me käyttöönotto:**
Valitse yläpalkista *Tools* -> *Enable Code With Me* ja lopuksi *Enable and restart*

**Session aloitus**

1. Yksi ryhmänjäsen käynnistää *Code With Me* session oikealta ylhäältä löytyvästä kuvakkeesta. (henkilön kuva plus merkillä)

2. Valitse sopivat oikeudet. *Edit files* sopivin mikäli koodataan yhdessä. Tämän jälkeen valitse *Start Session*

3. Lähetä liittymislinkki kaikille koodisessioon osallistuville. Linkin saat jälleen oikealta ylhäältä *Code With Me* valikosta.

**Sessioon Liittyminen**

1. Mene linkkiin, jonka session aloittaja jakoi ja paina *Join Session*. Mikäli mitään ei tapahdu, asenna sivun ohjeiden mukaan *Toolbox App*.

2. Odota, että session aloittaja hyväksyy liittymispyynnön.
</details>
