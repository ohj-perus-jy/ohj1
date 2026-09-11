# Harjoitustyö

Tällä sivulla kerrotaan [harjoitustyön aikataulusta](#aikataulu), kuvataan [harjoitustyön vaiheet](#vaiheiden-kuvaukset), kerrotaan [harjoitustyöstä tarkistettavat asiat](#vaatimukset) ja ehdotetaan [aiheita muuhun kuin peliin](#aiheita).

## Mikä on harjoitustyö

Ohjelmointi 1 -opintojakson harjoitus työ

 - on osa kurssisuoritusta ja arvioidaan asteikolla hyväksytty/hylätty. Harjoitustyö pitää olla hyväksytty ennen kuin kurssista voi saada arvosanan.
 - tehdään yksin tai parityönä. Mikäli luontaista paria ei löydy, ei sitä kannata ehkä etsiäkään väkisin. Kolmen hengen ja sitä isompia ryhmiä ei hyväksytä.
 - sisältää keskimääräisesti *opiskelijaa kohti* noin 27 tuntia työtä. Parityönä tehtävän työn määrä on siis laskennallisesti 54 tuntia. Katso tarkat vaatimukset paritöille alla.
 - voi olla [Jypeli-työkaluilla](https://tim.jyu.fi/view/kurssit/jypeli/wiki) tehty peli, mutta voi olla [jokin muukin C#-kielellä tehty komentoriviohjelma](#muukuinpeli). Katso [valmiit aihe-ehdotukset](#aiheita). Muita kieliä ei hyväksytä.

## Vaiheet ja aikataulu {#aikataulu}

Harjoitustyöhön kuuluu kolme vaihetta: Vaihe 1 (suunnitelma), Vaihe 2 (työ 50 % valmis) ja Vaihe 3 (työ 100 % valmis). Vaiheiden tarkemmat kuvaukset löytyvät alta.

Harjoitustyön vaiheet palautetaan esittelemällä ne ohjaajalle joko etä- tai
lähiohjauksessa. Sähköpostin kautta palauttaminen ilman esittelyä on mahdollista
vain erityisestä syystä. Jos et pääse paikalle ryhmäohjausaikana (ks.
[etusivu](./index.md#tuki-ja-palaute)), sovi ohjausaika sähköpostitse
[ohj1-opet@jyu.onmicrosoft.com](mailto:ohj1-opet@jyu.onmicrosoft.com).

## Aikataulu ja takarajat

<!--
| Tutkinto-opiskelijat                                                                                                                                       | Lukiolinjat                                                                       | Avoin yliopisto                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Jokainen vaihe tulee palauttaa **ennen asetettua takarajaa**. Mahdollisista aikataulujoustoista (esim. sairauden takia) on aina sovittava ohjaajan kanssa. | Vaiheet tulee palauttaa valitsemasi opintojaksototeutuksen aikataulun mukaisesti. | Vaiheiden palauttamiselle ei ole kiinteitä takarajoja, mutta vaiheet on hyväksytettävä ohjaajalla. Kun vaihe on valmis, laita harjoitustyön vaihe ajoissa versionhallintaan ja käy esittelemässä työtä ohjaajalle pääteohjaustilaisuuksissa. |
-->

<table>
   <thead>
   <tr>
      <th colspan="2">Tutkinto-opiskelijat</th>
   </tr>
   </thead>
   <tr>
   <td>Yleistä</td>
   <td>Jokainen vaihe tulee palauttaa <strong>ennen asetettua takarajaa</strong>.
   Työn vaiheiden palauttaminen myöhässä ilman ennalta sovittua joustoa voi johtaa harjoitustyön hylkäämiseen. Päätöksen tekevät opintojakson vastuuopettajat tapauskohtaisesti.</td>
   </tr>
   <tr>
   <td>Vaihe 1: Suunnitelma</td>
   <td>Ennen osan 5 harjoitustehtävien takarajaa</td>
   </tr>
   <tr>
   <td>Vaihe 2: Työ 50 % valmis</td>
   <td>Ennen osan 8 harjoitustehtävien takarajaa</td>
   </tr>
   <tr>
   <td>Vaihe 3: Työ 100 % valmis</td>
   <td>Ennen kuin menet tenttiin</td>
   </tr>   
   <thead>
   <tr>
      <th colspan="2">Lukiolinjat</th>
   </tr>
   </thead>
   <tr><td>Yleistä</td>
   <td>Jokainen vaihe tulee palauttaa <strong>ennen asetettua takarajaa</strong>. Lukiosi opettaja voi päättää aikataulupoikkeamista.</td>
   </tr>
   <tr>
   <td>Vaihe 1: Suunnitelma</td>
   <td>Ennen osan 5 harjoitustehtävien takarajaa</td>
   </tr>
   <tr>
   <td>Vaihe 2: Työ 50 % valmis</td>
   <td>Ennen osan 8 harjoitustehtävien takarajaa</td>   
   </tr>
   <tr>
   <td>Vaihe 3: Työ 100 % valmis</td>
   <td>Ennen kuin menet tenttiin</td>
   </tr>
   <thead>
   <tr>
      <th colspan="2">Avoin yliopisto</th>

   </tr>
   </thead>
   <tr>
   <td>Yleistä</td>
   <td>Ei kiinteitä takarajoja, mutta jokainen vaihe hyväksytettävä ohjaajalla etä- tai lähiohjauksessa</td>
   </tr>
</table>

## Harjoitustyön vaiheiden kuvaukset ja tarkistuslistat {#vaiheiden-kuvaukset}

### Vaihe 1: Suunnitelma versiohallinnassa

 1. Sinulla tulee olla Git-työkalu asennettuna ([ohje](./tyokalut.md#git)).
 1. Luo oma etävarasto GitLabiin tai GitHubiin. (Katso [kirjalliset ohjeet](./git.md#fork) tai [ohjevideo](https://youtu.be/MQJ69rmd1sw)).
 1. Kopioi ja liitä etävarastosi osoite [Oma eteneminen-sivulle](https://tim.jyu.fi/view/kurssit/tie/itkp102/eteneminen). Etävaraston osoitteen on oltava muotoa `https://github.com/kayttajanimi/ohj1ht.git` tai `https://gitlab.com/kayttajanimi/ohj1ht.git`.
 1. Aseta omat Git-tiedot ([ohje](./git.md#gitconfig)). 
 1. Hae oma etävarastosi omalle tietokoneelle Git-työkalun avulla ([ohje](./git.md#clone)). 
 1. Kirjoita harjoitustyön suunnitelma ladattuun harjoitustyökansioon. Katso [suunnitelman vaatimukset alla](./harjoitustyo.md#suunnitelma) ja katso [esimerkkisuunnitelma](https://gitlab.jyu.fi/tie/ohj1/2025k/ohj1ht/-/blob/main/suunnitelma/suunnitelma.md).
 1. Lataa suunnitelmasi ja kuvasi etävarastoon ([add-commit](./git.md#add-commit) ja [push](./git.md#push)). 
 1. Esittele suunnitelma ohjaajalle lähi- tai etäohjauksessa.

### Vaihe 2: Työ 50 % valmis

 1. Tee työsi eteenpäin suunnitelman mukaan. 
    - Ellet tehnyt tätä jo vaiheessa 1: Luo ohjelmakoodia varten [uusi
      solution](./osa1/2-ohjelmointiymparisto-kuntoon.md#uusi-solution).
      Varmista, että solution on tallennettu nimenomaan siihen kansioon, joka on
      ladattu etävarastostasi paikalliseksi git-varastoksi.
 1. Varmista, että työsi koodi on ajan tasalla etävarastossa.
    - Katso ohjeet [tiedostojen lisäämiseksi git-varastoon (add-commit)](./git.md#add-commit) ja ohjeet [git-varaston lataamiseksi etävarastoon (push)](./git.md#push).
 1. Esittele suunnitelma ohjaajalle lähi- tai etäohjauksessa.

Jos tämä vaihe on pahasti kesken, tarkastaja palauttaa työn opiskelijalle ja antaa 7 päivää aikaa tehdä korjaukset, jonka jälkeen vaihe tarkastetaan uudelleen.

### Vaihe 3: Työ 100 % valmis

 1. **Tutkinto-opiskelijat ja lukiolinjat**: **Näytettävä ohjaajalle ennen kuin
    menet tenttiin**
 1. Tarkista, että työ täyttää kaikki [vaaditut osa-alueet](#htosat)
 1. Jos teet harjoitustyön parityönä, tarkista, että tuntikirjanpito on ajan tasalla
 1. Varmista, että työsi lopullinen, <u>toimiva</u> koodi on etävarastossa
    - Katso ohjeet [tiedostojen lisäämiseksi git-varastoon](./git.md#add-commit) ja ohjeet [git-varaston lataamiseksi etävarastoon](./git.md#push)
    - Huomaa, että etävarastossa olevan työn tulee olla toimiva! Voit esimerkiksi kokeilla ladata etävarasto omalle tietokoneelle eri kansioon ja yrittää ajaa solution.
 1. Esittele työ ohjaajalle lähi- tai etäohjauksessa.

Mikäli ohjaaja antaa merkittävän määrän korjauskehotuksia, opiskelijalla on 7 päivää aikaa tehdä korjaukset, jonka jälkeen vaihe tarkastetaan uudelleen.

***

## Vaatimukset {#vaatimukset}

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

### Toiminnallisuus

Pelissä pitää *tapahtua jotakin*, eli ruudulla pitää tapahtua jotain järkevää. Käyttäjän tulee voida osallistua peliin interaktiivisesti esimerkiksi hiiren ja/tai näppäimistön välityksellä.

### Koodi

Työssä on oltava vähintään muutama aliohjelma Jypelin valmiiden aliohjelmien (`Main`, `Begin`) lisäksi.

Muut tarkastettavat osa-alueet on lueteltu alempana kohdassa "Tarkastettavat osa-alueet".

## Paritöistä

Kaikki ryhmäläiset käyttävät samaa etävaraston osoitetta. Ks. [Git-ohjeet](./git.md#git-ja-ryhmätyöskentely).

Molempien on annettava kutakuinkin yhtäläinen panos työn ohjelmalliseen toteutukseen. Yksittäisenä varoittavana esimerkkinä mainittakoon parityö, jossa toinen on paneutunut grafiikan tekemiseen ja toinen ohjelmointiin. Tällöin grafiikkaan paneutuneelta osallistujalta voidaan pyytää lisänäyttöjä työn ohjelmalliseen toteutukseen johon parityön toinen osapuoli ei saa osallistua. Lisäksi kummankin tekijän on pystyttävä esittämään riittävän tarkka tuntikirjanpito ja selvitys mitä työajalla on tehty, jotta osaamistavoitteet ohjelmoinnin osalta voidaan todentaa. 

Työn on oltava vaativampi kuin yksin tehdyn työn, ja tässä työmäärä on tärkein mittari. Ohjaajat käyvät työn läpi tarkastustilaisuudessa ryhmäläisten kanssa. Yksittäistä pelin ominaisuutta joka kaikilta paritöiltä vaadittaisiin ei yleisellä tasolla voi antaa. Näiden kriteerien tarkoitus ei ole vaikeuttaa tekemistä vaan ehkäistä ennalta vapaamatkustamista.

## Tarkastettavat osa-alueet {#htosat}

Alla on tarkastettavien osa-alueiden lista, jonka ohjaajat tulevat tarkastamaan harjoitustyön esittelemisen yhteydessä.

 1. **Koodin tyyli** on [kurssin tyylioppaan mukaista](tyyliopas.md).
 
 2. **Näkyvyys**: Aliohjelmien ja attribuuttien näkyvyys tulee olla määritelty
(`public`, `private`). Julkisia staattisia (`public static`) muuttujia ei saa olla. 
 3. **Ei turhia peliluokan attribuutteja**. 

    Jos joitain koko peliluokkaan näkyviä arvoja tarvitaan, pyritään käyttämään vakioita (`const`). Kuvat, äänet, animaatiot ja muut raskaat resurssit on kuitenkin hyvä pitää attribuutteina, jolloin ne ladataan vain kerran pelin aikana. Esim. kuvien olioviitteet voi kiinnittää muuttumattomaksi `static readonly` määreellä.

 4. **Toimii**: Ohjelma toimii, ei kaadu ja päättyy asiallisesti. 

    Pelissä pitää tapahtua jotakin järkevää, johon käyttäjä voi osallistua interaktiivisesti. Pelissä pitää myös olla tavoite, haaste tai tarina.

 5. **Ei toistoa**, joka olisi voitu tehdä silmukoilla tai aliohjelmilla. 

    Myöskään aliohjelmien välillä ei saa olla toistoa: esimerkiksi `LuoVihu1` ja `LuoVihu2`, joissa olisi lähes sama koodi kahteen kertaan.

 6. **Taulukko**: Käytetään taulukkoa tai listaa. 
 
    Tietorakenteella täytyy olla jokin tarkoitus siten, että sinne tallennetaan useita arvoja, joita todella käytetään pelissä. Tietorakenteen käytön tulee parantaa koodin laatua ja helpottaa koodin lukemista, kirjoittamista tai edelleenkehittämistä. Keinotekoisia tai vailla käyttötarkoitusta olevia tietorakenteita ei hyväksytä. [Esimerkkejä.](#taulukko-silmukka-funktio) 

 7. **Silmukka**: Ainakin yksi silmukka. 
 
    Silmukalla täytyy olla jokin tarkoitus siten, että rakenteen avulla luetaan ja/tai käsitellään tietoa. Ei riitä että lisätään "tähtiä taivaalle silmukassa 10 kpl." Silmukalla tulee olla merkitys, joka parantaa koodin laatua ja helpottaa koodin lukemista, kirjoittamista tai edelleenkehittämistä. [Esimerkkejä.](#taulukko-silmukka-funktio)

 8. **Ei turhia literaaleja**: Kiinteiden lukuarvojen tai muiden sellaisten arvojen käyttö, jotka heikentävät koodin ylläpidettävyyttä, on kielletty.

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

      Funktio ottaa vastaan parametrin tai parametreja, käsittelee parametrina saatua tietoa, ja palauttaa arvon annetun syötteen perusteella. Funktion täytyy prosessoida tietoa jotenkin; funktiolla täytyy olla jokin todellinen tarkoitus ohjelman kokonaisuuden kannalta. Tyypillisesti funktiossa voi hyödyntää silmukkaa tai taulukkoa/listaa. [Esimerkkejä.](#taulukko-silmukka-funktio) 
 12. **Ei virheitä eikä varoituksia** Riderin oikeassa yläkulmassa. Muista asentaa [kurssin Rider-asetukset](./tyokalut.md#jetbrains-rider) 
 13. Ei-pelien tapauksessa osoitettu myös taito testata aliohjelmia.

## Aiheita muuhun kuin peliin {#aiheita}

Harjoitustyön ei tarvitse olla peli. Alla on kahdeksan aihetta komentoriviohjelmaksi. Jokaisesta on kuvattu idea, aineiston muoto, kohdat joissa [tarkastettavat osa-alueet](#htosat) syntyvät luontevasti, sekä laajennus parityölle. Aiheita saa muokata ja yhdistellä, ja oman aiheen voi ehdottaa. Suunnitelma hyväksytetään ohjaajalla aina.

Ei-pelissä vaatimukset tulkitaan näin:

 - **Interaktiivisuus**: ohjelma reagoi käyttäjän syötteeseen. Helpoin tapa on valikko, joka pyörii silmukassa, kunnes käyttäjä lopettaa. Ohjelma voi myös lukea syötteensä komentoriviargumenteista (`Main`-aliohjelman `args`-taulukko) ja tulostaa tuloksen.
 - **Tavoite, haaste tai tarina**: ohjelmalla on selkeä käyttötarkoitus, ja se tuottaa käyttäjälle hyödyllisen tuloksen.
 - **Testit**: laskenta tehdään funktioissa, jotka saavat syötteen parametrina ja palauttavat tuloksen. Ne testataan [ComTestillä](./osa4/comtest.md). Konsolitulostusta ja tiedoston lukemista ei tarvitse testata.

Esimerkkiaineistot ovat keksittyjä. Tiedostoissa erotin on puolipiste, desimaalierotin piste, ja ensimmäinen rivi on otsikkorivi.

### Tiedoston lukeminen

Tiedoston lukemista ei käsitellä kurssimateriaalissa, mutta seuraava pätkä riittää kaikkiin tämän sivun aiheisiin. `File.ReadAllLines` lukee tiedoston rivit merkkijonotaulukkoon, ja `Split` pilkkoo rivin kenttiin.

```csharp
using System.Globalization;
using System.IO;

// ...

string[] rivit = File.ReadAllLines("kulut.csv");
for (int i = 1; i < rivit.Length; i++) // rivi 0 on otsikkorivi
{
    string[] osat = rivit[i].Split(';');
    string luokka = osat[1];
    double summa = double.Parse(osat[2], CultureInfo.InvariantCulture);
    // ...
}
```

`CultureInfo.InvariantCulture` tarvitaan, koska aineistoissa desimaalierotin on piste ja suomenkielinen Windows odottaisi pilkkua. Kopioi aineisto projektin kansioon ja lisää projektitiedostoon (`.csproj`) seuraava, jolloin tiedosto löytyy ajettaessa:

```xml
<ItemGroup>
  <None Update="kulut.csv" CopyToOutputDirectory="PreserveNewest" />
</ItemGroup>
```

### Kulutusseuranta

Ohjelma pitää kirjaa menoista. Käyttäjä lisää valikosta menon (päivä, luokka, summa, kuvaus) tai lukee menot tiedostosta. Ohjelma laskee luokkakohtaiset summat, suurimman yksittäisen menon ja kuukauden kokonaismenot sekä tulostaa yhteenvedon.

 - **Aineisto**: [kulut.csv](harjoitustyo-aineistot/kulut.csv), rivit muotoa `2025-09-04;Ruoka;23.50;Kauppa`.
 - **Vaatimukset**: menot listaan (oma luokka `Meno` tai rinnakkaiset listat); silmukka laskee summat; funktiot esim. `LuokanSumma(menot, luokka)`, `SuurinMeno(menot)` ja `KuukaudenSumma(menot, "2025-09")`. Funktiot ovat testattavissa ilman tiedostoa.
 - **Laajennus parityölle**: luokkakohtaiset budjettirajat ja varoitus ylityksestä, kuukausien vertailu ja menojen tallennus takaisin tiedostoon.

### Polttoainepäiväkirja

Ohjelma laskee auton polttoaineenkulutuksen tankkauksista. Kulutus kahden tankkauksen välillä on litrat jaettuna ajetuilla kilometreillä kertaa sata. Ohjelma näyttää keskikulutuksen, kilometrikustannuksen, kalleimman tankkauksen ja kulutuksen kehityksen. Käyttäjä lisää tankkauksen tai pyytää yhteenvedon.

 - **Aineisto**: [tankkaukset.csv](harjoitustyo-aineistot/tankkaukset.csv), rivit muotoa `2025-03-12;154867;45.19;81.75` (päivä, mittarilukema, litrat, hinta euroina).
 - **Vaatimukset**: tankkaukset listaan; silmukka käy läpi peräkkäiset tankkausparit; funktiot `Kulutus(km, litrat)`, `Keskikulutus(tankkaukset)` ja `KustannusPerKm(tankkaukset)`. Ensimmäiselle tankkaukselle ei voi laskea kulutusta, mikä on hyvä testattava erikoistapaus.
 - **Laajennus parityölle**: useampi auto samassa tiedostossa, litrahinnan vaihtelun analyysi ja konsolipylväskaavio kulutuksen kehityksestä.

### Tekstitilastot

Ohjelma lukee tekstitiedoston ja laskee siitä tilastoja: sanojen ja lauseiden määrä, yleisimmät sanat, pisin sana, keskimääräinen sanan pituus ja kirjainten esiintymistiheydet. Käyttäjä valitsee tiedoston ja tilaston valikosta.

 - **Aineisto**: [nayteteksti.txt](harjoitustyo-aineistot/nayteteksti.txt) kehityksen ajaksi. Lopulliseen ajoon sopii klassikkoteos, esim. Aleksis Kiven teokset [Project Gutenbergista](https://www.gutenberg.org/ebooks/search/?query=aleksis+kivi).
 - **Vaatimukset**: sanat taulukkoon (`Split`) ja kirjainmäärät taulukkoon, jossa on yksi alkio kutakin aakkosta kohti; silmukka; funktiot `PisinSana(sanat)`, `YleisinSana(sanat)` ja `KirjainMaarat(teksti)`. Välimerkkien poisto ja pieniksi kirjaimiksi muuttaminen kannattaa tehdä omassa funktiossa `Siivoa(sana)`, jota on helppo testata.
 - **Laajennus parityölle**: kahden tekstin vertailu, hukkasanalista (ja, on, ei, ...) jonka sanat ohitetaan, sekä sanojen pituusjakauma konsolihistogrammina.

### Säädata

Ohjelma lukee päivittäiset lämpötilat ja laskee kuukausikeskiarvot, kylmimmän ja lämpimimmän päivän, pisimmän hellejakson (peräkkäiset päivät, joina lämpötila ylittää rajan) ja ensimmäisen pakkaspäivän. Käyttäjä antaa rajat ja valitsee tarkasteltavan kuukauden.

 - **Aineisto**: [lampotilat.csv](harjoitustyo-aineistot/lampotilat.csv), rivit muotoa `2025-08-03;28.3`, ajalta 1.8.–31.10.2025. Oikeaa dataa saa [Ilmatieteen laitoksen havaintojen latauspalvelusta](https://www.ilmatieteenlaitos.fi/havaintojen-lataus).
 - **Vaatimukset**: lämpötilat `double`-taulukkoon ja päivämäärät omaan taulukkoon; silmukka; funktiot `Keskiarvo(lampotilat)`, `PisinJakso(lampotilat, raja)` ja `EnsimmainenAlle(lampotilat, raja)`. Jaksofunktio on hyvä testikohde: tyhjä taulukko, ei yhtään päivää yli rajan, jakso taulukon lopussa.
 - **Laajennus parityölle**: kahden vuoden vertailu, liukuva keskiarvo ja kuukausikeskiarvot konsolipylväskaaviona.

### Juoksupäiväkirja

Ohjelma lukee juoksulenkit (päivä, matka, aika) ja laskee jokaiselle lenkille vauhdin minuutteina kilometriä kohti, viikoittaiset ja kuukausittaiset kilometrit, pisimmän lenkin ja parhaan vauhdin. Käyttäjä lisää lenkin tai pyytää yhteenvedon.

 - **Aineisto**: [juoksut.csv](harjoitustyo-aineistot/juoksut.csv), rivit muotoa `2025-09-06;10.0;59:15`. Aika on muodossa `mm:ss` tai yli tunnin lenkeillä `h:mm:ss`.
 - **Vaatimukset**: lenkit listaan; silmukka; funktiot `AikaSekunneiksi("59:15")`, `SekunnitAjaksi(3555)`, `Vauhti(matka, sekunnit)` ja `Yhteensa(lenkit)`. Ajan jäsentäminen on erinomainen ComTest-kohde, koska siinä on monta muotoa ja erikoistapausta.
 - **Laajennus parityölle**: useampi juoksija ja heidän vertailunsa, viikkotavoite ja sen seuranta sekä tavoiteajan laskuri ("millä vauhdilla 10 km alle 50 minuutin").

### Vaalitulos d'Hondtin menetelmällä

Ohjelma lukee vaalipiirin äänet ehdokkaittain, laskee puolueiden yhteisäänet ja jakaa paikat [d'Hondtin menetelmällä](https://fi.wikipedia.org/wiki/D%27Hondtin_menetelm%C3%A4), jota käytetään Suomen eduskuntavaaleissa: puolueen eniten ääniä saanut ehdokas saa vertailuluvukseen puolueen koko äänimäärän, toinen puolet siitä, kolmas kolmasosan ja niin edelleen. Paikat menevät suurimmille vertailuluvuille. Käyttäjä antaa paikkamäärän ja näkee valitut ehdokkaat.

 - **Aineisto**: [aanet.csv](harjoitustyo-aineistot/aanet.csv), rivit muotoa `Aurinkopuolue;Sara Salo;1451`. Puolueet ja ehdokkaat ovat keksittyjä.
 - **Vaatimukset**: ehdokkaat listaan; silmukka; funktiot `PuolueenAanet(ehdokkaat, puolue)`, `Vertailuluku(puolueenAanet, sija)` ja `ValitseEhdokkaat(ehdokkaat, paikat)`; ehdokkaiden järjestäminen äänimäärän mukaan. Pienet käsin laskettavat esimerkit sopivat testeiksi.
 - **Laajennus parityölle**: Sainte-Laguën menetelmä vertailuun, äänikynnys, vaaliliitot ja tuloksen tallennus tiedostoon.

### Tarkistesummat

Ohjelma tarkistaa henkilötunnuksen, IBAN-tilinumeron ja laskun viitenumeron oikeellisuuden ja osaa laskea puuttuvan tarkisteen. Käyttäjä syöttää tunnuksen tai antaa tiedoston, ja ohjelma kertoo, onko tunnus oikein ja mikä siinä on vialla. Menetelmät: henkilötunnuksessa syntymäajan ja yksilönumeron muodostama luku jaetaan 31:llä ja jakojäännös haetaan merkkitaulukosta `0123456789ABCDEFHJKLMNPRSTUVWXY`. Viitenumerossa numerot kerrotaan oikealta lukien painoilla 7, 3 ja 1, ja tarkiste täydentää summan seuraavaan täyteen kymmeneen. IBANissa neljä ensimmäistä merkkiä siirretään loppuun, kirjaimet muutetaan luvuiksi (A=10, ..., Z=35) ja tuloksen jakojäännös 97:llä on 1. Luku on liian suuri `long`-tyypille, joten jakojäännös lasketaan silmukassa pala kerrallaan.

 - **Aineisto**: [tarkisteet.txt](harjoitustyo-aineistot/tarkisteet.txt), rivit muotoa `hetu;010190-901R`, mukana myös virheellisiä tunnuksia. Henkilötunnukset ovat keksittyjä: yksilönumerot 900–999 on varattu testikäyttöön.
 - **Vaatimukset**: tarkistemerkit ja painot taulukoihin; silmukka; funktiot `HetuOk(hetu)`, `ViiteTarkiste(pohja)` ja `IbanOk(iban)`. Aihe on luonnostaan testattava: jokaiselle funktiolle löytyy oikeita ja vääriä syötteitä.
 - **Laajennus parityölle**: ISBN- ja EAN-koodit, koko tiedoston tarkistus ja virheraportti sekä arvaus siitä, mikä merkki on todennäköisimmin näppäilty väärin.

### Salakirjoitustyökalu

Ohjelma salaa ja purkaa tekstiä Caesarin menetelmällä (kirjaimia siirretään aakkostossa), Vigenèren menetelmällä (siirto vaihtelee avainsanan mukaan) ja ROT13:lla. Lisäksi ohjelma murtaa Caesar-salauksen ilman avainta: kokeillaan kaikki siirrot ja valitaan se, jolla tekstin yleisimmät kirjaimet vastaavat parhaiten suomen yleisimpiä kirjaimia (a, i, t, n, e). Käyttäjä valitsee toiminnon valikosta ja antaa tekstin tai tiedoston.

 - **Aineisto**: [viesti.txt](harjoitustyo-aineistot/viesti.txt) on Caesarilla salattu suomenkielinen viesti. Aakkosto on `abcdefghijklmnopqrstuvwxyzåäö`; välimerkit ja isot kirjaimet säilyvät.
 - **Vaatimukset**: aakkosto merkkijonona ja kirjainmäärät taulukkona; silmukka; funktiot `Salaa(teksti, siirto)`, `Pura(teksti, siirto)`, `KirjainMaarat(teksti)` ja `ArvaaSiirto(teksti)`. Testeiksi sopii esim. `Pura(Salaa("moi", 3), 3) === "moi"` ja aakkoston ympäri kiertävät tapaukset.
 - **Laajennus parityölle**: Vigenèren murtaminen (avaimen pituuden arvaus), tiedostojen salaus ja purku sekä morsetus.

## Usein kysytyt kysymykset ja muut vinkit {#ukk}

<details closed>
<summary>Millaisia pelejä voi harjoitustyöksi tehdä?</summary>

***

Jos et keksi, minkä tyylisen pelin haluaisit tehdä, katso, millaisia pelejä on tehty edellisissä toteutuksissa:

- [Ohj1 Kevät 16 pelejä](https://youtu.be/-qBQ5CmF5ps)
- [Ohj1 Kevät 22 pelejä](https://youtu.be/Coknsg_ClR4)

Muista että voit tehdä muutakin kuin pelin!
</details>

<details closed id="taulukko-silmukka-funktio">
<summary>Miten saan taulukon, silmukan tai funktion peliini?</summary>

***

Kun tallennat pelin olioita tai tapahtumia listaan / taulukkoon, voit käsitellä niitä yhdellä silmukalla ja paketoida logiikan omaan funktioon. Näin syntyy sekä selkeää että tehokasta koodia.

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

Mikäli omassa pelissä ei ole taulukkoa/listaa, silmukkaa tai funktiota, pitää ohjaajalle esittää itse tehdyn (ts. työ on tehty omatoimisesti ilman merkittävää apua ohjaajalta tai muilta opiskelijoilta) demotehtävän vastaus, missä em. asioiden osaaminen on näytetty.  Tästä voi laittaa vaikka kommentin omaan harjoitustyöhön tyyliin:

```csharp
// TODO: taulukko, ks: https://tim.jyu.fi/answers/kurssit/tie/ohj1/%%vuosik%%/demot/demo7?answerNumber=1&task=matriisiensumma&user=anlakane
```

Linkin saa otettua demotehtävän vierellä olevasta pienestä Link-linkistä klikkaamalla sitä hiiren oikealla painikkeella, ja kopioimalla linkin osoite.
</details>

<details closed id="muukuinpeli">
<summary>Voinko tehdä jotain muuta kuin peli?</summary>

***

**Kyllä.** Tällä sivulla on [kahdeksan valmista aihe-ehdotusta esimerkkiaineistoineen](#aiheita). Muita vaihtoehtoja ovat esimerkiksi:

 * [Janat-haaste](https://tim.jyu.fi/view/kurssit/tie/ohj1/harjoitustyo/janat)
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

Inspiraatiota voi hakea vaikkapa Pong-pelistä tai Läpsylinnusta. 

 - [Pong-peli](https://trac.cc.jyu.fi/projects/npo/wiki/Pong/Vaihe1)
 - [Läpsylintu](https://trac.cc.jyu.fi/projects/npo/wiki/Lapsylintu)

</details>

<details closed>
<summary>Miten voisin työskennellä parin kanssa samanaikaisesti?</summary>

***

Lähtökohtaisesti on kolme tapaa, joita tällä opintojaksolla suositellaan:

- Kunkin tekee muutoksia omalla koneella ja lataa ne samaan etävarastoon
- Pariohjelmointi
- Koodieditorin jakaminen verkossa (Google Docs -tyylinen samanaikainen muokkaus)

**Eri koneet, sama etävarasto**:

Yleisin tapa yhdessä ohjelmointiin on, että kumpikin lataa saman etävaraston omalle tietokoneelle, tekee omia muutoksia ja lataa ne takaisin samaan etävarastoon. Niin kauan kuin muutoksia ei tehdä päällekkäin (eli kummatkin muokkaatte samaa koodiriviä) tai päällekkäiset muutokset ovat tarpeeksi yksinkertaisia, `git`-työkalu osaa yhdistää kahden eri tekijän muutokset yhteen. Tässä tärkeintä on, että muutokset lähetetään etävarastoon ([`git push`](./git.md#push)) ja ladataan ([`git pull`](./git.md#pull)) sieltä mahdollisimman usein. Tapauksissa, jossa `git`-työkalu ei pysty yhdistämään kahden henkilön muutoksia, syntyy ns. *konflikti*, joka pitää ratkaista itse. Git-konfliktien ratkaiseminen on tämän opintojakson ulkopuolella; ongelmatilanteissa ota yhteyttä siis ohjaajaan. Lyhyt kuvaus tästä löytyy [Git ja ryhmätyöskentely](./git.md#git-ja-ryhmätyöskentely) osiosta.

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
    Jos posti ei tule perille, tarkista account.jyu.fi <i class="bi bi-chevron-right"></i> sähköpostiasetukset.
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
Valitse yläpalkista *Tools*<i class="bi bi-chevron-right"></i>*Enable Code With Me* ja lopuksi *Enable and restart*

**Session aloitus**

1. Yksi ryhmänjäsen käynnistää *Code With Me* session oikealta ylhäältä löytyvästä kuvakkeesta. (henkilön kuva plus merkillä)

2. Valitse sopivat oikeudet. *Edit files* sopivin mikäli koodataan yhdessä. Tämän jälkeen valitse *Start Session*

3. Lähetä liittymislinkki kaikille koodisessioon osallistuville. Linkin saat jälleen oikealta ylhäältä *Code With Me* valikosta.

**Sessioon Liittyminen**

1. Mene linkkiin, jonka session aloittaja jakoi ja paina *Join Session*. Mikäli mitään ei tapahdu, asenna sivun ohjeiden mukaan *Toolbox App*.

2. Odota, että session aloittaja hyväksyy liittymispyynnön.
</details>
