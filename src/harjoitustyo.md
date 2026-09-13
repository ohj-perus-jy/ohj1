# Harjoitustyö

Tällä sivulla kerrotaan [harjoitustyön vaiheistuksesta](#aikataulu) sekä
kuvataan työn [vaatimukset](./harjoitustyo/vaatimukset.md).


Tällä sivulla kuvataan seuraavat asiat: 

<!-- no toc -->
 - [Mikä on harjoitustyö](#mikä-on-harjoitustyö)
 - [Aikataulu](#aikataulu)
 - [Vaiheiden tarkistuslistat](#vaiheiden-tarkistuslistat)
 - [Aihe](#aihe)
   - [Peli](#peli)
   - [Komentoriviohjelma](#komentoriviohjelma)
 - [Vaatimukset](#vaatimukset)
 - [Usein kysytyt kysymykset ja muut vinkit {#ukk}](#usein-kysytyt-kysymykset-ja-muut-vinkit-ukk)

## Mikä on harjoitustyö?

Ohjelmointi 1 -opintojakson harjoitus työ

 - on osa kurssisuoritusta ja arvioidaan asteikolla hyväksytty/hylätty. Harjoitustyö pitää olla hyväksytty ennen kuin kurssista voi saada arvosanan.
 - tehdään yksin tai parityönä. Kolmen hengen ja sitä isompia ryhmiä ei hyväksytä.
 - on Jypeli-työkaluilla tehty
   peli taiC#-kielellä tehty komentoriviohjelma. Muita kieliä tai työkaluja ei hyväksytä.

## Vaiheet ja aikataulu {#aikataulu}

Harjoitustyöhön kuuluu kolme vaihetta: Vaihe 1 (suunnitelma), Vaihe 2 (työ 50 % valmis) ja Vaihe 3 (työ 100 % valmis). Vaiheiden tarkemmat kuvaukset löytyvät alta.

Kukin vaihe palautetaan esittelemällä se ohjaajalle joko etä- tai
lähiohjauksessa. Sähköpostin kautta palauttaminen ilman esittelyä on mahdollista
vain erityisestä syystä. Jos et pääse paikalle ryhmäohjausaikana (ks.
[etusivu](./index.md#tuki-ja-palaute)), sovi ohjausaika sähköpostitse
[ohj1-opet@jyu.onmicrosoft.com](mailto:ohj1-opet@jyu.onmicrosoft.com).

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

## Harjoitustyön vaiheiden tarkistuslistat {#vaiheiden-tarkistuslistat}

### Vaihe 1: Suunnitelma versiohallinnassa

 1. Sinulla tulee olla Git-työkalu asennettuna ([ohje](./tyokalut.md#git)).
 1. Luo oma etävarasto GitLabiin tai GitHubiin. (Katso [kirjalliset ohjeet](./git.md#fork) tai [ohjevideo](https://youtu.be/MQJ69rmd1sw)).
 1. Kopioi ja liitä etävarastosi osoite [Oma eteneminen-sivulle](https://tim.jyu.fi/view/kurssit/tie/itkp102/eteneminen). Etävaraston osoitteen on oltava muotoa `https://github.com/kayttajanimi/ohj1ht.git` tai `https://gitlab.com/kayttajanimi/ohj1ht.git`.
 1. Aseta omat Git-tiedot ([ohje](./git.md#gitconfig)). 
 1. Hae oma etävarastosi omalle tietokoneelle Git-työkalun avulla ([ohje](./git.md#clone)). 
 1. Kirjoita harjoitustyön suunnitelma ladattuun harjoitustyökansioon. Jos teet
    pelin, katso [suunnitelman
    vaatimukset](#suunnitelma) ja
    [esimerkkisuunnitelma](https://gitlab.jyu.fi/tie/ohj1/2025k/ohj1ht/-/blob/main/suunnitelma/suunnitelma.md).
    Komentoriviohjelman tapauksessa suunnitelmaksi riittää aiheen valinta ja
    kuvaus ohjelman toiminnasta.
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
 1. Tarkista, että työ täyttää kaikki [vaaditut osa-alueet](#vaatimukset)
 1. Jos teet harjoitustyön parityönä, tarkista, että tuntikirjanpito on ajan tasalla
 1. Varmista, että työsi lopullinen, <u>toimiva</u> koodi on etävarastossa
    - Katso ohjeet [tiedostojen lisäämiseksi git-varastoon](./git.md#add-commit) ja ohjeet [git-varaston lataamiseksi etävarastoon](./git.md#push)
    - Huomaa, että etävarastossa olevan työn tulee olla toimiva! Voit esimerkiksi kokeilla ladata etävarasto omalle tietokoneelle eri kansioon ja yrittää ajaa solution.
 1. Esittele työ ohjaajalle lähi- tai etäohjauksessa.

Mikäli ohjaaja antaa merkittävän määrän korjauskehotuksia, opiskelijalla on 7 päivää aikaa tehdä korjaukset, jonka jälkeen vaihe tarkastetaan uudelleen.

## Aihe

Voit valita aiheeksi [pelin](#peli) tai
[komentoriviohjelman](#komentoriviohjelma).

Valitsitpa minkä aiheen tahansa, koodin tulee noudattaa [tyylioppaan ohjeita](../tyyliopas.md).

### Peli

Peli on Jypeli-työkaluilla tehty 2D-peli, jossa voi olla mukana fysiikkaa. Voit
käyttää pohjana Jypelin mukana tulevaa Fysiikkapelin tai
Tasohyppelypelin pohjaa. 
[Katso inspiraatiota vanhoista harkkatöistä](https://youtu.be/Coknsg_ClR4). 

Harjoitustyö täytyy olla suunniteltu ja suunnitelman tulee olla ohjaajan hyväksymä.
Suunnitelmat tallennetaan GitLabiin, ks. [vaiheen 1 tarkistuslista](../harjoitustyo.md#vaiheiden-kuvaukset).

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

Pelissä pitää *tapahtua jotakin*, eli ruudulla pitää tapahtua jotain järkevää. Käyttäjän tulee voida osallistua peliin interaktiivisesti esimerkiksi hiiren ja/tai näppäimistön välityksellä.

Työssä on oltava vähintään muutama aliohjelma Jypelin valmiiden aliohjelmien (`Main`, `Begin`) lisäksi.

Muut tarkastettavat osa-alueet on lueteltu alempana kohdassa "Tarkastettavat osa-alueet".

**Jos teet pelin parityönä:** Kumpikin käyttää samaa etävaraston osoitetta. Ks. [Git-ohjeet](../git.md#git-ja-ryhmätyöskentely).

Molempien on annettava kutakuinkin yhtäläinen panos työn ohjelmalliseen toteutukseen. Yksittäisenä varoittavana esimerkkinä mainittakoon parityö, jossa toinen on paneutunut grafiikan tekemiseen ja toinen ohjelmointiin. Tällöin grafiikkaan paneutuneelta osallistujalta voidaan pyytää lisänäyttöjä työn ohjelmalliseen toteutukseen johon parityön toinen osapuoli ei saa osallistua. Lisäksi kummankin tekijän on pystyttävä esittämään riittävän tarkka tuntikirjanpito ja selvitys mitä työajalla on tehty, jotta osaamistavoitteet ohjelmoinnin osalta voidaan todentaa. 

Työn on oltava vaativampi kuin yksin tehdyn työn, ja tässä työmäärä on tärkein mittari. Ohjaajat käyvät työn läpi tarkastustilaisuudessa ryhmäläisten kanssa. Yksittäistä pelin ominaisuutta joka kaikilta paritöiltä vaadittaisiin ei yleisellä tasolla voi antaa. Näiden kriteerien tarkoitus ei ole vaikeuttaa tekemistä vaan ehkäistä ennalta vapaamatkustamista.

### Komentoriviohjelma

Alla on seitsemän aihetta komentoriviohjelmaksi. Jokaisesta aiheesta on kuvattu idea, aineiston muoto, kohdat joissa [tarkastettavat osa-alueet](#vaatimukset) syntyvät luontevasti, sekä laajennus parityölle. Aiheita saa muokata ja yhdistellä, ja oman aiheen voi ehdottaa. Suunnitelma hyväksytetään ohjaajalla aina. 

Useimmille aiheille on valmis pohjaprojekti, jossa ovat valmiina aineisto ja mahdollinen valmis luokka. Pohjat löytyvät [ht-pohjat-varastosta](https://gitlab.jyu.fi/tie/ohj1/ht-pohjat). Esimerkkiaineistot ovat keksittyjä. Tiedostoissa erotin on puolipiste, desimaalierotin piste, ja ensimmäinen rivi on otsikkorivi.

<details closed><summary>Tiedoston lukeminen</summary>

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

`CultureInfo.InvariantCulture` tarvitaan, koska aineistoissa desimaalierotin on piste ja suomenkielinen Windows odottaisi pilkkua. Pohjaprojektin projektitiedostossa (`.csproj`) on seuraava määritys, joka kopioi aineiston ajokansioon, jolloin tiedosto löytyy ajettaessa. Jos lisäät projektiin oman tiedoston, lisää sille samanlainen rivi.

```xml
<ItemGroup>
  <None Update="kulut.csv" CopyToOutputDirectory="PreserveNewest" />
</ItemGroup>
```

Jos tiedostoa ei ole, `File.ReadAllLines` kaataa ohjelman. Tarkista siksi ensin `File.Exists("kulut.csv")`, joka palauttaa `true`, jos tiedosto on olemassa.

</details>

<details closed><summary>Valmiit luokat </summary>

Kun aineiston rivillä on useita tietoja, rivi tallennetaan valmiin luokan olioksi. Luokat ovat `Meno` (Kulutusseuranta), `Tankkaus` (Polttoainepäiväkirja), `Lenkki` (Juoksupäiväkirja) ja `Ehdokas` (Vaalitulos), ja ne ovat valmiina aiheen pohjaprojektissa. Luokkaa käytetään kuten Jypelin valmiita luokkia: olio luodaan `new`-lauseella, ja sen tietoihin viitataan pisteellä. Tietoja ei voi muuttaa olion luomisen jälkeen.

```csharp
List<Meno> menot = new List<Meno>();
// tiedoston lukusilmukassa (ks. yllä)
menot.Add(new Meno(osat[0], luokka, summa, osat[3]));

// myöhemmin
foreach (Meno meno in menot)
{
    Console.WriteLine(meno.Luokka + ": " + meno.Summa);
}
```

ComTest-testeissä olion voi luoda suoraan, esim. `new Meno("2025-09-04", "Ruoka", 23.50, "Kauppa")`.

</details>

<details closed id="kulutusseuranta">
<summary><strong>Aihe 1: Kulutusseuranta</strong> – menot tiedostosta, yhteenveto luokittain ja kuukausittain</summary>

Ohjelma lukee menot tiedostosta ja tulostaa niistä yhteenvedon. Sen jälkeen
ohjelma kysyy silmukassa kuukautta ja tulostaa yhteenvedon kuukauden menoista.
Ohjelma päättyy, kunnes käyttäjä antaa tyhjän rivin.

 - **Aineisto**: `kulut.csv` sisältää 86 menoriviä syys–marraskuulta 2025. Rivit ovat muotoa `2025-09-04;Ruoka;23.50;Kauppa`: päivä, luokka, summa euroina ja kuvaus.
 - **Tietorakenne**: menot listaan `List<Meno>` valmiin luokan `Meno` olioina.
 - **Tulosteet**: asettelu saa poiketa esimerkistä, kunhan samat tiedot näkyvät. Euromäärät tulostetaan kahdella desimaalilla ja yksikkönä `EUR`, koska €-merkki ei näy Windowsin konsolissa ilman lisäasetuksia.

Nauhoitus näyttää, miten ohjelma toimii:

<asciinema src="harjoitustyo/images/kulutusseuranta.cast" rows="21" poster="npt:10.9" controls></asciinema>

 - Luokat tulostetaan aakkosjärjestyksessä. Jos suurimpia menoja on useita, tulostetaan niistä ensimmäinen.
 - Tiedoston otsikkorivi ja rivit, joilla ei ole neljää kenttää, ohitetaan. 
 - Jos tiedostoa ei löydy, ohjelma ilmoittaa siitä ja päättyy. Jos kuukaudella ei ole menoja, ohjelma tulostaa `Ei menoja.`

Laskenta tehdään seuraavissa funktioissa, ja jokaisella on ComTest-testit:

| Funktio                           | Palauttaa                                           | Testattavia erikoistapauksia              |
| --------------------------------- | --------------------------------------------------- | ----------------------------------------- |
| `RivitMenoiksi(rivit)`            | listan tiedoston rivien menoista                    | otsikkorivi, virheellinen rivi            |
| `Yhteensa(menot)`                 | menojen summan                                      | tyhjä lista                               |
| `LuokanSumma(menot, luokka)`      | luokan menojen summan                               | luokka, jossa ei ole menoja               |
| `Luokat(menot)`                   | listan luokista aakkosjärjestyksessä, kunkin kerran | tyhjä lista, sama luokka useasti          |
| `SuurinMeno(menot)`               | suurimman menon, tai `null`, jos menoja ei ole      | tyhjä lista                               |
| `KuukaudenMenot(menot, kuukausi)` | listan kuukauden menoista                           | `2025-1` ei saa palauttaa lokakuun menoja |

#### Laajennus parityölle {#kulutusseuranta-pari}

Ennen yhteenvetoa ohjelma kysyy uusia menoja: päivän, luokan, summan ja kuvauksen. Kysely toistuu, kunnes käyttäjä jättää päivän tyhjäksi. Summan desimaalierotin voi olla piste tai pilkku. Meno hyväksytään, jos päivä on olemassa oleva päivämäärä muodossa vvvv-kk-pp, luokka ei ole tyhjä, summa on positiivinen luku eikä luokassa tai kuvauksessa ole puolipistettä. Hyväksytty meno lisätään listaan ja tiedoston loppuun samassa muodossa kuin aineiston rivit, joten se on mukana myös seuraavalla ajokerralla. Virheellisestä menosta ohjelma ilmoittaa eikä lisää sitä. Päivämäärän voi tarkistaa pilkkomalla tekstin `Substring`-metodilla, ja `DateTime.DaysInMonth(vuosi, kuukausi)` kertoo, montako päivää kuukaudessa on.

<asciinema src="harjoitustyo/images/kulutusseuranta-pari.cast" rows="30" poster="npt:29.9" controls></asciinema>

Tiedoston loppuun tulee rivi `2025-10-31;Ruoka;12.50;Lounas`. Rivin saa lisättyä
lauseella `File.AppendAllText("kulut.csv", rivi + Environment.NewLine);`.
Ohjelma kirjoittaa ajokansiossa (`bin/Debug/net10.0`) olevaan tiedostoon, ei
projektin kansiossa olevaan, joten alkuperäinen aineisto säilyy koskemattomana,
eikä sitä tarvitse puskea versiohallintaan.

Laskennan lisäfunktiot ComTest-testeineen (näitä ei tarvitse tehdä, jos ei tee parityötä):

| Funktio                  | Palauttaa                                                      | Testattavia erikoistapauksia                |
| ------------------------ | -------------------------------------------------------------- | ------------------------------------------- |
| `OnkoPaivamaara(teksti)` | `true`, jos teksti on olemassa oleva päivä muodossa vvvv-kk-pp | `2025-02-29`, `2025-9-4`                    |
| `TekstiSummaksi(teksti)` | summan, tai 0, jos luku ei ole positiivinen                    | `12.50` ja `12,50`, `-5`                    |
| `MenoRiviksi(meno)`      | menon tiedoston rivinä, esim. `2025-09-04;Ruoka;23.50;Kauppa`  | tyhjä kuvaus, pyöristys kahteen desimaaliin |

</details>

<details closed id="polttoainepaivakirja">
<summary><strong>Aihe 2: Polttoainepäiväkirja</strong> – tankkaukset tiedostosta, kulutus ja kilometrikustannus</summary>

Ohjelma lukee auton tankkaukset tiedostosta ja tulostaa kulutuksen jokaiselta tankkausväliltä, keskikulutuksen, kilometrikustannuksen ja kalleimman tankkauksen. Sen jälkeen ohjelma kysyy matkan pituutta ja arvioi, paljonko matkaan kuluu polttoainetta ja rahaa, kunnes käyttäjä antaa tyhjän rivin.

 - **Aineisto**: `tankkaukset.csv` sisältää 14 tankkausta maalis–elokuulta 2025. Rivit ovat muotoa `2025-03-12;154867;45.19;81.75`: päivä, mittarilukema kilometreinä, litrat ja hinta euroina. Auto on tankattu joka kerta täyteen.
 - **Tietorakenne**: tankkaukset listaan `List<Tankkaus>` valmiin luokan `Tankkaus` olioina.
 - **Tulosteet**: asettelu saa poiketa esimerkistä, kunhan samat tiedot näkyvät. Litrat, kulutus ja euromäärät tulostetaan kahdella desimaalilla ja kilometrikustannus kolmella.

Nauhoitus näyttää, miten ohjelma toimii:

<asciinema src="harjoitustyo/images/polttoainepaivakirja.cast" rows="25" poster="npt:6.3" controls></asciinema>

 - Tankkausvälin kulutus on välin lopussa tankatut litrat jaettuna välillä ajetuilla kilometreillä kertaa 100. Rivin päivä on välin lopun tankkauspäivä, joten ensimmäiselle tankkaukselle ei tule riviä.
 - Keskikulutus lasketaan kaikista tankkauksista ensimmäistä lukuun ottamatta: litrat yhteensä jaettuna ajetuilla kilometreillä (viimeinen mittarilukema miinus ensimmäinen) kertaa 100. Ensimmäisen tankkauksen polttoaine on ajettu ennen seurannan alkua. Kilometrikustannus lasketaan samoin hinnoista.
 - Matkaan kuluu matka kertaa keskikulutus jaettuna 100:lla litraa, ja hinta on matka kertaa kilometrikustannus. Jos matka ei ole positiivinen, ohjelma ilmoittaa siitä.
 - Tiedoston otsikkorivi ohitetaan, samoin rivit, joilla ei ole neljää kenttää. Jos tiedostoa ei löydy, ohjelma ilmoittaa siitä ja päättyy.

Laskenta tehdään seuraavissa funktioissa, ja jokaisella on ComTest-testit:

| Funktio                        | Palauttaa                                                  | Testattavia erikoistapauksia   |
| ------------------------------ | ---------------------------------------------------------- | ------------------------------ |
| `RivitTankkauksiksi(rivit)`    | listan tiedoston rivien tankkauksista                      | otsikkorivi, virheellinen rivi |
| `Kulutus(km, litrat)`          | kulutuksen l/100 km, tai 0, jos kilometrejä ei ole         | 0 km                           |
| `AjetutKm(tankkaukset)`        | ajetut kilometrit ensimmäisestä tankkauksesta viimeiseen   | tyhjä lista                    |
| `Keskikulutus(tankkaukset)`    | keskikulutuksen l/100 km                                   | yksi tankkaus                  |
| `KustannusPerKm(tankkaukset)`  | polttoaineen hinnan euroina kilometriä kohti               | tyhjä lista                    |
| `KalleinTankkaus(tankkaukset)` | kalleimman tankkauksen, tai `null`, jos tankkauksia ei ole | tyhjä lista                    |

#### Laajennus parityölle {#polttoainepaivakirja-pari}

Ennen yhteenvetoa ohjelma kysyy uusia tankkauksia: päivän, mittarilukeman, litrat ja hinnan. Kysely toistuu, kunnes käyttäjä jättää päivän tyhjäksi. Desimaalierotin voi olla piste tai pilkku. Tankkaus hyväksytään, jos päivä on olemassa oleva päivämäärä muodossa vvvv-kk-pp, mittarilukema on suurempi kuin edellisen tankkauksen ja litrat ja hinta ovat positiivisia lukuja. Hyväksytty tankkaus lisätään listaan ja tiedoston loppuun samassa muodossa kuin aineiston rivit, kuten [Kulutusseurannassa](#kulutusseuranta-pari). Virheellisestä tankkauksesta ohjelma ilmoittaa eikä lisää sitä. Päivämäärän voi tarkistaa pilkkomalla tekstin `Substring`-metodilla, ja `DateTime.DaysInMonth(vuosi, kuukausi)` kertoo, montako päivää kuukaudessa on.

<asciinema src="harjoitustyo/images/polttoainepaivakirja-pari.cast" rows="35" poster="npt:29.3" controls></asciinema>

Laskennan lisäfunktiot ComTest-testeineen (näitä ei tarvitse tehdä, jos ei tee parityötä):

| Funktio                        | Palauttaa                                                           | Testattavia erikoistapauksia       |
| ------------------------------ | ------------------------------------------------------------------- | ---------------------------------- |
| `OnkoPaivamaara(teksti)`       | `true`, jos teksti on olemassa oleva päivä muodossa vvvv-kk-pp      | `2025-02-29`, `2025-9-4`           |
| `TekstiLuvuksi(teksti)`        | luvun, tai 0, jos luku ei ole positiivinen                          | `36.50` ja `36,50`, `-5`           |
| `ViimeinenLukema(tankkaukset)` | viimeisen tankkauksen mittarilukeman, tai 0, jos tankkauksia ei ole | tyhjä lista                        |
| `TankkausRiviksi(tankkaus)`    | tankkauksen tiedoston rivinä, esim. `2025-09-02;162410;36.50;64.20` | pyöristys kahteen desimaaliin      |

</details>

<details closed id="tekstitilastot">
<summary><strong>Aihe 3: Tekstitilastot</strong> – sanat ja lauseet tekstitiedostosta</summary>

Ohjelma lukee tekstitiedoston ja tulostaa sanojen ja lauseiden määrän, sanan keskipituuden sekä pisimmän ja yleisimmän sanan. Sen jälkeen ohjelma kysyy sanaa ja kertoo, montako kertaa se esiintyy tekstissä, kunnes käyttäjä antaa tyhjän rivin.

 - **Aineisto**: `nayteteksti.txt` on 105 sanan suomenkielinen teksti. Valmiin ohjelman voi ajaa myös pitkälle tekstille, esim. Aleksis Kiven teoksille [Project Gutenbergista](https://www.gutenberg.org/ebooks/search/?query=aleksis+kivi).
 - **Tietorakenne**: tekstin sanat listaan `List<string>`. Valmista luokkaa ei tarvita.
 - **Tulosteet**: asettelu saa poiketa esimerkistä, kunhan samat tiedot näkyvät. Keskipituus tulostetaan kahdella desimaalilla.

Nauhoitus näyttää, miten ohjelma toimii:

<asciinema src="harjoitustyo/images/tekstitilastot.cast" rows="14" poster="npt:13.1" controls></asciinema>

 - Sanat erotetaan välilyöntien ja rivinvaihtojen kohdalta. Sanan alusta ja lopusta poistetaan välimerkit `. , ; : ! ? " ( ) -`, ja sana muutetaan pieniksi kirjaimiksi. Pelkistä välimerkeistä koostuva osa, kuten yksinäinen viiva, ei ole sana.
 - Lauseiden määrä on lauseen päättävien merkkien `. ! ?` määrä.
 - Jos pisimpiä tai yleisimpiä sanoja on useita, tulostetaan niistä tekstissä ensimmäinen.
 - Kysytty sana siivotaan samoin, joten `Ohjelma` löytää sanan `ohjelma`. Taivutusmuotoja ei yhdistetä: `ohjelma` ja `ohjelmaksi` ovat eri sanoja.
 - Jos tiedostoa ei löydy, ohjelma ilmoittaa siitä ja päättyy.

Laskenta tehdään seuraavissa funktioissa, ja jokaisella on ComTest-testit:

| Funktio                       | Palauttaa                                       | Testattavia erikoistapauksia                |
| ----------------------------- | ----------------------------------------------- | ------------------------------------------- |
| `Siivoa(sana)`                | sanan ilman välimerkkejä pienillä kirjaimilla   | `Ohjelmointi.`, `(peli,`, pelkät välimerkit |
| `Sanat(teksti)`               | listan tekstin sanoista siivottuina             | rivinvaihto, yksinäinen viiva, tyhjä teksti |
| `LauseidenMaara(teksti)`      | lauseen päättävien merkkien määrän              | teksti ilman loppumerkkiä                   |
| `PisinSana(sanat)`            | pisimmän sanan, tai tyhjän, jos sanoja ei ole   | kaksi yhtä pitkää                           |
| `KeskimaarainenPituus(sanat)` | sanojen keskipituuden merkkeinä                 | tyhjä lista                                 |
| `Esiintymat(sanat, sana)`     | sanan esiintymien määrän                        | sana, jota ei ole                           |
| `YleisinSana(sanat)`          | yleisimmän sanan, tai tyhjän, jos sanoja ei ole | tasapeli, tyhjä lista                       |

#### Laajennus parityölle {#tekstitilastot-pari}

Yleisin sana on yleensä *ja* tai *on*, joka ei kerro tekstin sisällöstä mitään. Parityössä ohjelma tulostaa tilastojen jälkeen myös yleisimmän sanan, kun hukkasanat ohitetaan, sekä sanojen pituusjakauman pylväinä. Hukkasanat ovat ohjelmassa vakiotaulukossa: *ja, on, ei, se, sen, voi, kun, tai, että, niin*. Pituusjakaumassa on rivi jokaiselle pituudelle yhdestä pisimmän sanan pituuteen, myös pituuksille, joita ei esiinny. Pylväs on rivi `#`-merkkejä, jonka saa lausekkeella `new string('#', leveys)`. Leveys on määrä kertaa 40 jaettuna suurimmalla määrällä, jolloin suurin pylväs on 40 merkkiä leveä. Nollaa suurempi määrä saa kuitenkin vähintään yhden merkin.

<asciinema src="harjoitustyo/images/tekstitilastot-pari.cast" rows="29" poster="npt:7.0" controls></asciinema>

Laajennuksen tuloste tekstinä:

```text
Yleisin sana hukkasanat ohittaen: jokainen (2 kertaa)
Sanojen pituusjakauma:
   1 |  0
   2 | ###################### 9
   3 | #################### 8
   4 | ###################### 9
   5 | ######################################## 16
   6 | ##################################### 15
...
  16 |  0
  17 | ## 1
```

Laskennan lisäfunktiot ComTest-testeineen (näitä ei tarvitse tehdä, jos ei tee parityötä):

| Funktio                   | Palauttaa                                                  | Testattavia erikoistapauksia              |
| ------------------------- | ---------------------------------------------------------- | ----------------------------------------- |
| `IlmanHukkasanoja(sanat)` | listan sanoista ilman hukkasanoja                          | pelkkiä hukkasanoja                       |
| `PituusJakauma(sanat)`    | taulukon, jonka alkiossa i on i-kirjaimisten sanojen määrä | tyhjä lista                               |
| `Suurin(luvut)`           | taulukon suurimman luvun, tai 0, jos taulukko on tyhjä     | tyhjä taulukko                            |
| `Pylvas(maara, suurin)`   | pylvään `#`-merkkeinä                                      | määrä 0, pieni määrä suhteessa suurimpaan |

</details>

<details closed id="saadata">
<summary><strong>Aihe 4: Säädata</strong> – päivittäiset lämpötilat, keskiarvot ja ääripäät</summary>

Ohjelma lukee päivittäiset lämpötilat tiedostosta ja tulostaa havaintojen
määrän, keskilämpötilan, kylmimmän ja lämpimimmän päivän, pisimmän hellejakson
ja ensimmäisen pakkaspäivän. Sen jälkeen ohjelma kysyy silmukassa kuukautta ja tulostaa
kuukauden keskilämpötilan, kunnes käyttäjä antaa tyhjän rivin.

 - **Aineisto**: `lampotilat.csv` sisältää 92 päivän lämpötilat 1.8.–31.10.2025. Rivit ovat muotoa `2025-08-03;28.3`: päivä ja lämpötila celsiusasteina. Oikeaa dataa saa [Ilmatieteen laitoksen havaintojen latauspalvelusta](https://www.ilmatieteenlaitos.fi/havaintojen-lataus).
 - **Tietorakenne**: päivät taulukkoon `string[]` ja lämpötilat taulukkoon `double[]` samaan järjestykseen. Valmista luokkaa ei tarvita. Jos virheelliset rivit ohitetaan, rivit kannattaa lukea ensin listoihin ja muuttaa listat sitten taulukoiksi metodilla `ToArray()`.
 - **Tulosteet**: asettelu saa poiketa esimerkistä, kunhan samat tiedot näkyvät. Lämpötilat tulostetaan yhdellä desimaalilla. Suomenkielinen Windows näyttää negatiivisen luvun miinusmerkin konsolissa kysymysmerkkinä, ellei ohjelman alussa aseteta `Console.OutputEncoding = System.Text.Encoding.UTF8;`. Pohjaprojektissa rivi on valmiina.

Nauhoitus näyttää, miten ohjelma toimii:

<asciinema src="harjoitustyo/images/saadata.cast" rows="14" poster="npt:10.5" controls></asciinema>

 - Hellejakso on jakso peräkkäisiä päiviä, joina lämpötila on yli 25,0 °C. Pakkaspäivä on päivä, jona lämpötila on alle 0,0 °C. Rajat ovat ohjelmassa vakioina.
 - Jaksot lasketaan tiedoston peräkkäisistä riveistä, joten päivien oletetaan olevan aikajärjestyksessä.
 - Jos kylmimpiä tai lämpimimpiä päiviä on useita, tulostetaan niistä ensimmäinen. Jos pakkaspäiviä ei ole, ohjelma kertoo sen.
 - Tiedoston otsikkorivi ohitetaan, samoin rivit, joilla ei ole kahta kenttää. Jos tiedostoa ei löydy, ohjelma ilmoittaa siitä ja päättyy.

Laskenta tehdään seuraavissa funktioissa, ja jokaisella on ComTest-testit:

| Funktio                                             | Palauttaa                                                                | Testattavia erikoistapauksia                           |
| --------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------ |
| `Keskiarvo(luvut)`                                  | lukujen keskiarvon, tai 0, jos lukuja ei ole                             | negatiiviset luvut, tyhjä taulukko                     |
| `PienimmanIndeksi(luvut)`                           | pienimmän luvun indeksin, tai -1, jos lukuja ei ole                      | kaksi yhtä pientä, tyhjä taulukko                      |
| `SuurimmanIndeksi(luvut)`                           | suurimman luvun indeksin, tai -1, jos lukuja ei ole                      | kaksi yhtä suurta, tyhjä taulukko                      |
| `PisinJakso(luvut, raja)`                           | pisimmän rajaa suurempien peräkkäisten lukujen jakson pituuden           | jakso lopussa, luku täsmälleen rajalla, tyhjä taulukko |
| `EnsimmainenAlle(luvut, raja)`                      | ensimmäisen rajaa pienemmän luvun indeksin, tai -1, jos sellaista ei ole | luku täsmälleen rajalla                                |
| `KuukaudenLampotilat(paivat, lampotilat, kuukausi)` | taulukon kuukauden lämpötiloista                                         | `2025-1` ei saa palauttaa lokakuun lämpötiloja         |

#### Laajennus parityölle {#saadata-pari}

Ennen tilastoja ohjelma kysyy uusia havaintoja: päivän ja lämpötilan. Kysely toistuu, kunnes käyttäjä jättää päivän tyhjäksi. Desimaalierotin voi olla piste tai pilkku. Havainto hyväksytään, jos päivä on olemassa oleva päivämäärä muodossa vvvv-kk-pp ja myöhempi kuin edellisen havainnon päivä. Muodossa vvvv-kk-pp olevia päiviä voi verrata merkkijonoina, koska niiden aakkosjärjestys on sama kuin aikajärjestys. Hyväksytty havainto lisätään listoihin ja tiedoston loppuun samassa muodossa kuin aineiston rivit, kuten [Kulutusseurannassa](#kulutusseuranta-pari). Virheellisestä havainnosta ohjelma ilmoittaa eikä lisää sitä. Päivämäärän voi tarkistaa pilkkomalla tekstin `Substring`-metodilla, ja `DateTime.DaysInMonth(vuosi, kuukausi)` kertoo, montako päivää kuukaudessa on.

<asciinema src="harjoitustyo/images/saadata-pari.cast" rows="19" poster="npt:20.9" controls></asciinema>

Tiedoston loppuun tulee rivi `2025-11-01;-2.5`. Laskennan lisäfunktiot
ComTest-testeineen (näitä ei tarvitse tehdä, jos ei tee parityötä):

| Funktio                             | Palauttaa                                                      | Testattavia erikoistapauksia               |
| ----------------------------------- | -------------------------------------------------------------- | ------------------------------------------ |
| `OnkoPaivamaara(teksti)`            | `true`, jos teksti on olemassa oleva päivä muodossa vvvv-kk-pp | `2025-02-29`, `2025-11-1`                  |
| `OnkoMyohempi(paiva, edellinen)`    | `true`, jos päivä on edellistä myöhempi                        | sama päivä, aiempi päivä                   |
| `HavaintoRiviksi(paiva, lampotila)` | havainnon tiedoston rivinä, esim. `2025-11-01;-2.5`            | kokonaisluku, pyöristys yhteen desimaaliin |

</details>

<details closed id="juoksupaivakirja">
<summary><strong>Aihe 5: Juoksupäiväkirja</strong> – lenkkien vauhdit ja kuukausittaiset yhteenvedot</summary>

Ohjelma lukee juoksulenkit tiedostosta ja tulostaa lenkkien määrän, yhteismatkan, pisimmän lenkin ja parhaan vauhdin. Sen jälkeen ohjelma kysyy silmukassa kuukautta ja tulostaa kuukauden lenkit vauhteineen sekä saman yhteenvedon kuukauden lenkeistä, kunnes käyttäjä antaa tyhjän rivin.

 - **Aineisto**: `juoksut.csv` sisältää 24 lenkkiä syys–marraskuulta 2025. Rivit ovat muotoa `2025-09-06;10.0;59:15`: päivä, matka kilometreinä ja aika. Aika on muodossa `mm:ss` tai yli tunnin lenkeillä `h:mm:ss`.
 - **Tietorakenne**: lenkit listaan `List<Lenkki>` valmiin luokan `Lenkki` olioina. Luokka pitää ajan tekstinä samassa muodossa kuin tiedostossa, joten laskemista varten aika muutetaan sekunneiksi funktiolla `AikaSekunneiksi`.
 - **Tulosteet**: asettelu saa poiketa esimerkistä, kunhan samat tiedot näkyvät. Matkat tulostetaan yhdellä desimaalilla ja vauhdit muodossa `m:ss min/km`.

Nauhoitus näyttää, miten ohjelma toimii:

<asciinema src="harjoitustyo/images/juoksupaivakirja.cast" rows="23" poster="npt:8.5" controls></asciinema>

 - Vauhti on lenkin aika sekunteina jaettuna matkalla, pyöristettynä lähimpään sekuntiin, ja se tulostetaan funktiolla `SekunnitAjaksi`. Esimerkiksi 10,0 km ajassa 53:38 on 3218 sekuntia, joten vauhti on 322 sekuntia kilometrillä eli 5:22 min/km.
 - Jos pisimpiä lenkkejä tai parhaita vauhteja on useita, tulostetaan niistä ensimmäinen.
 - Tiedoston otsikkorivi ja rivit, joilla ei ole kolmea kenttää, ohitetaan. Jos tiedostoa ei löydy, ohjelma ilmoittaa siitä ja päättyy. Jos kuukaudella ei ole lenkkejä, ohjelma tulostaa `Ei lenkkejä.`

Laskenta tehdään seuraavissa funktioissa, ja jokaisella on ComTest-testit:

| Funktio                             | Palauttaa                                                                 | Testattavia erikoistapauksia                |
| ----------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------- |
| `RivitLenkeiksi(rivit)`             | listan tiedoston rivien lenkeistä                                         | otsikkorivi, virheellinen rivi              |
| `AikaSekunneiksi(aika)`             | ajan sekunteina, esim. `59:15` → 3555                                     | `mm:ss` ja `h:mm:ss`, etunolla `05:03`      |
| `SekunnitAjaksi(sekunnit)`          | ajan tekstinä, alle tunnin muodossa `m:ss`, muuten `h:mm:ss`              | `5:03`, tasan tunti `1:00:00`               |
| `Vauhti(lenkki)`                    | vauhdin sekunteina kilometriä kohti, tai 0, jos matka ei ole positiivinen | pyöristys, matka 0                          |
| `Yhteensa(lenkit)`                  | lenkkien yhteismatkan                                                     | tyhjä lista                                 |
| `PisinLenkki(lenkit)`               | pisimmän lenkin, tai `null`, jos lenkkejä ei ole                          | tyhjä lista, kaksi yhtä pitkää              |
| `NopeinLenkki(lenkit)`              | lenkin, jonka vauhti on paras, tai `null`, jos lenkkejä ei ole            | tyhjä lista, kaksi yhtä nopeaa              |
| `KuukaudenLenkit(lenkit, kuukausi)` | listan kuukauden lenkeistä                                                | `2025-1` ei saa palauttaa lokakuun lenkkejä |

#### Laajennus parityölle {#juoksupaivakirja-pari}

Ennen yhteenvetoa ohjelma kysyy uusia lenkkejä: päivän, matkan ja ajan. Kysely toistuu, kunnes käyttäjä jättää päivän tyhjäksi. Matkan desimaalierotin voi olla piste tai pilkku. Lenkki hyväksytään, jos päivä on olemassa oleva päivämäärä muodossa vvvv-kk-pp, matka on positiivinen luku ja aika on nollaa suurempi ja muodossa `mm:ss` tai `h:mm:ss`, jossa sekunnit ja `h:mm:ss`-muodossa myös minuutit ovat kaksinumeroisia ja alle 60. Aika tallennetaan samaan muotoon kuin aineistossa muuttamalla se sekunneiksi ja takaisin, joten esim. `75:00` tallentuu muotoon `1:15:00`. Hyväksytty lenkki lisätään listaan ja tiedoston loppuun samassa muodossa kuin aineiston rivit, kuten [Kulutusseurannassa](#kulutusseuranta-pari). Virheellisestä lenkistä ohjelma ilmoittaa eikä lisää sitä. Päivämäärän voi tarkistaa pilkkomalla tekstin `Substring`-metodilla, ja `DateTime.DaysInMonth(vuosi, kuukausi)` kertoo, montako päivää kuukaudessa on.

<asciinema src="harjoitustyo/images/juoksupaivakirja-pari.cast" rows="24" poster="npt:18.3" controls></asciinema>

Tiedoston loppuun tulee rivi `2025-11-08;10.5;52:30`. Laskennan lisäfunktiot
ComTest-testeineen (näitä ei tarvitse tehdä, jos ei tee parityötä):

| Funktio                  | Palauttaa                                                                 | Testattavia erikoistapauksia |
| ------------------------ | ------------------------------------------------------------------------- | ---------------------------- |
| `OnkoPaivamaara(teksti)` | `true`, jos teksti on olemassa oleva päivä muodossa vvvv-kk-pp            | `2025-02-29`, `2025-11-8`    |
| `OnkoAika(teksti)`       | `true`, jos teksti on nollaa suurempi aika muodossa `mm:ss` tai `h:mm:ss` | `5:3`, `1:75:00`, `0:00`     |
| `TekstiMatkaksi(teksti)` | matkan, tai 0, jos luku ei ole positiivinen                               | `10.5` ja `10,5`, `-5`       |
| `LenkkiRiviksi(lenkki)`  | lenkin tiedoston rivinä, esim. `2025-11-08;10.5;52:30`                    | pyöristys yhteen desimaaliin |

</details>

<details closed id="viitenumerot">
<summary><strong>Aihe 6: Viitenumerogeneraattori ja tarkistaja</strong> – viitenumeroiden tarkistus ja muodostus</summary>

Ohjelma lukee viitenumerot tiedostosta, tarkistaa ne ja tulostaa kelvollisten
määrän sekä virheelliset viitenumerot. Sen jälkeen ohjelma kysyy silmukassa
viitenumeron runkoa ja tulostaa siitä valmiin viitenumeron, kunnes käyttäjä
antaa tyhjän rivin. Runko on viitenumeron alkuosa eli kaikki muut numerot kuin
viimeinen, joka on tarkistenumero: viitenumeron `12344` runko on `1234`.
Laskuttaja valitsee rungon itse, esimerkiksi asiakas- tai laskunumeron
perusteella, ja rungon perään lisätään siitä laskettu tarkistenumero.

 - **Aineisto**: `viitteet.txt` sisältää 16 viitenumeroa, joista osa on virheellisiä. Rivillä on yksi viitenumero. Osa on kirjoitettu laskujen tapaan viiden numeron ryhmissä, esim. `2 02509 00011`. Viitenumerot ovat keksittyjä.
 - **Tietorakenne**: viitenumerot listaan `List<string>`. Valmista luokkaa ei tarvita.
 - **Tulosteet**: asettelu saa poiketa esimerkistä, kunhan samat tiedot näkyvät.

Nauhoitus näyttää, miten ohjelma toimii:

<asciinema src="harjoitustyo/images/viitenumerot.cast" rows="22" poster="npt:5.9" controls></asciinema>

 - Viitenumerossa on 4–20 numeroa: ensin runko ja lopuksi yksinumeroinen tarkistenumero. Tarkistenumero lasketaan rungon numeroista: ne kerrotaan oikealta vasemmalle kertoimilla 7, 3, 1, 7, 3, 1 ja niin edelleen, tulot lasketaan yhteen, ja tarkistenumero on se luku, jolla summa täydentyy seuraavaan kymmeneen. Rungosta `1234` summa on 4·7 + 3·3 + 2·1 + 1·7 = 46, joten tarkistenumero on 4 ja viitenumero `12344`. Jos summa on tasan jaollinen kymmenellä, tarkistenumero on 0.
 - Välilyönnit eivät kuulu viitenumeroon, vaan ne poistetaan ennen tarkistusta. Muut merkit kuin numerot tekevät viitenumerosta virheellisen.
 - Aineistossa on myös viitenumeroita, joiden tarkistenumero on oikein mutta jotka ovat silti virheellisiä, koska ne ovat liian lyhyitä tai liian pitkiä.
 - Viitenumeron runko saa olla 3–19 numeroa, jolloin valmiissa viitenumerossa on 4–20 numeroa. Muusta syötteestä ohjelma ilmoittaa.
 - Tiedoston otsikkorivi ja tyhjät rivit ohitetaan. Jos tiedostoa ei löydy, ohjelma ilmoittaa siitä ja päättyy.

Laskenta tehdään seuraavissa funktioissa, ja jokaisella on ComTest-testit:

| Funktio                    | Palauttaa                                                        | Testattavia erikoistapauksia                          |
| -------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------- |
| `Siivoa(viite)`            | viitenumeron ilman välilyöntejä                                  | ryhmitelty `2 02509 00011`, pelkkiä välilyöntejä      |
| `RivitViitteiksi(rivit)`   | listan tiedoston viitenumeroista siivottuina                     | otsikkorivi, tyhjä rivi                               |
| `Tarkistenumero(runko)`    | rungon tarkistenumeron                                           | `1234`, `55` (summa jaollinen kymmenellä), kirjaimia  |
| `OnkoViitenumero(arvo)`    | `true`, jos arvo on kelvollinen viitenumero                      | liian lyhyt `550`, liian pitkä, väärä tarkiste `12346` |
| `Kelvolliset(viitteet)`    | listan kelvollisista viitenumeroista                             | tyhjä lista, pelkkiä virheellisiä                     |
| `Muodosta(runko)`          | rungosta valmiin viitenumeron, tai tyhjän, jos runko ei kelpaa   | liian lyhyt runko, kirjaimia rungossa                 |

#### Laajennus parityölle {#viitenumerot-pari}

Parityössä ohjelma käsittelee myös kansainvälistä RF-viitettä (ISO 11649),
jollaista käytetään ulkomaille maksettaessa: se on kotimainen viitenumero,
jonka eteen on lisätty `RF` ja kaksinumeroinen tarkisteluku, esim. `12344` →
`RF0812344`. Tarkisteluku lasketaan lisäämällä viitenumeron perään `RF00`,
korvaamalla kirjaimet numeroilla (`A` = 10, `B` = 11, ..., `Z` = 35) ja
vähentämällä saadun luvun jakojäännös 97:llä luvusta 98. RF-viite kelpaa, jos
sen neljä ensimmäistä merkkiä siirretään loppuun ja numeroiksi muutetun luvun
jakojäännös 97:llä on 1. Pisimmistä viitenumeroista luku ei mahdu `long`-tyyppiin, johon
mahtuu 19-numeroinen luku, joten jakojäännös lasketaan numero kerrallaan: jakojäännös
alkaa nollasta, ja jokaisella numerolla lasketaan
`jaannos = (jaannos * 10 + numero) % 97`. Ohjelma tulostaa muodostamansa
viitenumeron myös RF-muodossa, kertoo RF-viitteestä, kelpaako se, ja tallentaa
muodostetut viitenumerot tiedoston loppuun, kuten
[Kulutusseurannassa](#kulutusseuranta-pari).

<asciinema src="harjoitustyo/images/viitenumerot-pari.cast" rows="24" poster="npt:6.7" controls></asciinema>

Laskennan lisäfunktiot ComTest-testeineen (näitä ei tarvitse tehdä, jos ei tee parityötä):

| Funktio                        | Palauttaa                                                      | Testattavia erikoistapauksia                     |
| ------------------------------ | -------------------------------------------------------------- | ------------------------------------------------ |
| `Numeroiksi(teksti)`           | numerosarjan, jossa kirjaimet on korvattu numeroilla           | pienet kirjaimet, muu merkki kuin kirjain tai numero |
| `Jakojaannos(numerot, jakaja)` | numerosarjan jakojäännöksen                                    | numerosarja, joka ei mahdu `long`-tyyppiin       |
| `RfViite(viite)`               | viitenumeron RF-muodossa, esim. `12344` → `RF0812344`          | tarkisteluku alle 10 (etunolla), virheellinen viitenumero |
| `OnkoRfViite(arvo)`            | `true`, jos arvo on kelvollinen RF-viite                       | väärä tarkisteluku, viite ilman `RF`-alkua       |

</details>

<details closed id="vaalitulos">
<summary><strong>Aihe 7: Vaalitulos d'Hondtin menetelmällä</strong> – äänistä puolueiden paikkajakoon</summary>

Ohjelma lukee vaalipiirin äänet ehdokkaittain tiedostosta ja tulostaa puolueiden yhteisäänet. Sen jälkeen ohjelma kysyy silmukassa paikkojen määrää ja tulostaa valitut ehdokkaat vertailulukuineen sekä puolueiden paikkamäärät, kunnes käyttäjä antaa tyhjän rivin. Paikat jaetaan [d'Hondtin menetelmällä](https://fi.wikipedia.org/wiki/D%27Hondtin_menetelm%C3%A4), jota käytetään Suomen eduskuntavaaleissa: puolueen eniten ääniä saanut ehdokas saa vertailuluvukseen puolueen koko äänimäärän, toinen puolet siitä, kolmas kolmasosan ja niin edelleen. Paikat menevät suurimmille vertailuluvuille.

 - **Aineisto**: `aanet.csv` sisältää viiden puolueen 18 ehdokkaan äänet. Rivit ovat muotoa `Aurinkopuolue;Sara Salo;1451`: puolue, ehdokas ja äänimäärä. Puolueet ja ehdokkaat ovat keksittyjä.
 - **Tietorakenne**: ehdokkaat listaan `List<Ehdokas>` valmiin luokan `Ehdokas` olioina ja vertailuluvut taulukkoon `double[]` samaan järjestykseen kuin ehdokkaat.
 - **Tulosteet**: asettelu saa poiketa esimerkistä, kunhan samat tiedot näkyvät. Vertailuluvut tulostetaan kahdella desimaalilla.

Nauhoitus näyttää, miten ohjelma toimii:

<asciinema src="harjoitustyo/images/vaalitulos.cast" rows="26" poster="npt:10.7" controls></asciinema>

 - Ehdokkaan sija on järjestysnumero puolueen ehdokkaiden joukossa äänimäärän mukaan: eniten ääniä saanut on sijalla 1. Vertailuluku on puolueen äänet jaettuna sijalla. Jos puolueen ehdokkailla on yhtä monta ääntä, tiedostossa ensin oleva saa paremman sijan. Oikeissa vaaleissa järjestys arvottaisiin.
 - Valitut ehdokkaat tulostetaan vertailuluvun mukaan suurimmasta alkaen. Jos vertailuluvut ovat yhtä suuret, tiedostossa ensin oleva ehdokas valitaan ensin.
 - Puolueet tulostetaan siinä järjestyksessä kuin ne ovat tiedostossa.
 - Paikkoja pitää olla vähintään yksi ja enintään yhtä monta kuin ehdokkaita. Muusta paikkamäärästä ohjelma ilmoittaa.
 - Tiedoston otsikkorivi ohitetaan, samoin rivit, joilla ei ole kolmea kenttää. Jos tiedostoa ei löydy, ohjelma ilmoittaa siitä ja päättyy.

Laskenta tehdään seuraavissa funktioissa, ja jokaisella on ComTest-testit:

| Funktio                               | Palauttaa                                                                      | Testattavia erikoistapauksia                               |
| ------------------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| `RivitEhdokkaiksi(rivit)`             | listan tiedoston rivien ehdokkaista                                            | otsikkorivi, virheellinen rivi                             |
| `Puolueet(ehdokkaat)`                 | listan puolueista tiedoston järjestyksessä, kunkin kerran                      | tyhjä lista, sama puolue useasti                           |
| `PuolueenAanet(ehdokkaat, puolue)`    | puolueen ehdokkaiden äänten summan                                             | puolue, jolla ei ole ehdokkaita                            |
| `Sija(ehdokkaat, indeksi)`            | ehdokkaan sijan puolueensa ehdokkaista äänten mukaan, eniten ääniä saaneella 1 | puolueen ainoa ehdokas, yhtä monta ääntä                   |
| `Vertailuluvut(ehdokkaat)`            | taulukon ehdokkaiden vertailuluvuista samassa järjestyksessä                   | vertailuluku, joka ei ole kokonaisluku, tyhjä lista        |
| `ValitseEhdokkaat(ehdokkaat, paikat)` | listan valituista ehdokkaista vertailuluvun mukaan suurimmasta alkaen          | tasapeli vertailuluvussa, paikkoja enemmän kuin ehdokkaita |
| `PuolueenPaikat(valitut, puolue)`     | puolueen valittujen ehdokkaiden määrän                                         | puolue, joka ei saa paikkoja                               |

#### Laajennus parityölle {#vaalitulos-pari}

Parityössä ohjelma ottaa paikkajaossa huomioon vaaliliitot. Vaaliliiton puolueet ovat paikkajaossa yksi ryhmä: liiton kaikki ehdokkaat järjestetään yhdessä äänimäärän mukaan, ja vertailuluku on liiton puolueiden yhteisäänet jaettuna ehdokkaan sijalla liitossa. Puolue, joka ei ole liitossa, on oma ryhmänsä. Ryhmää kutsutaan sen ensimmäisen puolueen nimellä.

Liitot luetaan tiedostosta `liitot.csv`, jonka rivillä on yhden liiton puolueet, esim. `Kotiseutuliitto;Rauhanpuolue`, ja tallennetaan listaan `List<string[]>`, jonka alkio on yhden liiton puolueiden taulukko. Otsikkorivi ohitetaan, samoin rivit, joilla on alle kaksi puoluetta. Muuten tiedoston oletetaan olevan kunnossa: sen puolueet ovat aineistossa, eikä sama puolue ole kahdessa liitossa. Jos tiedostoa ei löydy, paikat jaetaan ilman liittoja. Ohjelma tulostaa liitot puolueiden yhteisäänten jälkeen, ja valitut ehdokkaat ja puolueiden paikkamäärät lasketaan liitot huomioiden.

<asciinema src="harjoitustyo/images/vaalitulos-pari.cast" rows="28" poster="npt:7.7" controls></asciinema>

Aineiston liitto muuttaa tulosta: kolmella paikalla Rauhanpuolue saa paikan Tulevaisuusliikkeen sijaan, ja seitsemällä paikalla liiton puolueet saavat yhteensä kaksi paikkaa kuten ilman liittoakin, mutta molemmat menevät Rauhanpuolueelle.

Laskennan lisäfunktiot ComTest-testeineen (näitä ei tarvitse tehdä, jos ei tee parityötä). Perusversion `Sija`, `Vertailuluvut` ja `ValitseEhdokkaat` voi toteuttaa kutsumalla lisäfunktioita tyhjällä liittolistalla, jolloin samaa laskentaa ei kirjoiteta kahdesti.

| Funktio                                       | Palauttaa                                                                 | Testattavia erikoistapauksia                            |
| --------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------- |
| `RivitLiitoiksi(rivit)`                       | listan liitoista, kunkin liiton puolueet taulukkona                       | otsikkorivi, rivi, jolla on yksi puolue                 |
| `Ryhma(puolue, liitot)`                       | liiton ensimmäisen puolueen, tai puolueen itsensä, jos se ei ole liitossa | liiton toinen puolue, puolue, joka ei ole liitossa      |
| `Sija(ehdokkaat, indeksi, liitot)`            | ehdokkaan sijan ryhmänsä ehdokkaista äänten mukaan                        | liiton eri puolueiden ehdokkaat                         |
| `Vertailuluvut(ehdokkaat, liitot)`            | taulukon ehdokkaiden vertailuluvuista liitot huomioiden                   | tyhjä liittolista antaa perusversion luvut              |
| `ValitseEhdokkaat(ehdokkaat, paikat, liitot)` | listan valituista ehdokkaista liitot huomioiden                           | liitto saa paikan, jota kumpikaan puolue ei saisi yksin |

</details>

## Vaatimukset

Alla on tarkastettavien osa-alueiden lista, jonka ohjaajat tulevat tarkastamaan harjoitustyön esittelemisen yhteydessä.

 1. **Koodin tyyli** on [kurssin tyylioppaan mukaista](../tyyliopas.md).
 
 2. **Näkyvyys**: Aliohjelmien ja attribuuttien näkyvyys tulee olla määritelty
(`public`, `private`). Julkisia staattisia (`public static`) muuttujia ei saa olla. 
 3. **Ei turhia attribuutteja**. 

    Jos joitain koko peliluokkaan näkyviä arvoja tarvitaan, pyritään käyttämään vakioita (`const`). Kuvat, äänet, animaatiot ja muut raskaat resurssit on kuitenkin hyvä pitää attribuutteina, jolloin ne ladataan vain kerran pelin aikana. Esim. kuvien olioviitteet voi kiinnittää muuttumattomaksi `static readonly` määreellä.

 4. **Toimii**: Ohjelma toimii, ei kaadu ja päättyy asiallisesti. 

    Pelissä pitää tapahtua jotakin järkevää, johon käyttäjä voi osallistua
    interaktiivisesti. Pelissä pitää myös olla tavoite, haaste tai tarina.
    Komentoriviohjelman tulee toteuttaa kuvauksen mukainen toiminta. 

 5. **Ei toistoa**, joka olisi voitu tehdä silmukoilla tai aliohjelmilla. 

    Myöskään aliohjelmien välillä ei saa olla toistoa: esimerkiksi `LuoVihu1` ja `LuoVihu2`, joissa olisi lähes sama koodi kahteen kertaan.

 6. **Taulukko**: Käytetään taulukkoa tai listaa. 
 
    Tietorakenteella täytyy olla jokin tarkoitus siten, että sinne tallennetaan useita arvoja, joita todella käytetään pelissä. Tietorakenteen käytön tulee parantaa koodin laatua ja helpottaa koodin lukemista, kirjoittamista tai edelleenkehittämistä. Keinotekoisia tai vailla käyttötarkoitusta olevia tietorakenteita ei hyväksytä. [Esimerkkejä.](../harjoitustyo.md#taulukko-silmukka-funktio) 

 7. **Silmukka**: Ainakin yksi silmukka. 
 
    Silmukalla täytyy olla jokin tarkoitus siten, että rakenteen avulla luetaan ja/tai käsitellään tietoa. Ei riitä että lisätään "tähtiä taivaalle silmukassa 10 kpl." Silmukalla tulee olla merkitys, joka parantaa koodin laatua ja helpottaa koodin lukemista, kirjoittamista tai edelleenkehittämistä. [Esimerkkejä.](../harjoitustyo.md#taulukko-silmukka-funktio)

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

      Funktio ottaa vastaan parametrin tai parametreja, käsittelee parametrina saatua tietoa, ja palauttaa arvon annetun syötteen perusteella. Funktion täytyy prosessoida tietoa jotenkin; funktiolla täytyy olla jokin todellinen tarkoitus ohjelman kokonaisuuden kannalta. Tyypillisesti funktiossa voi hyödyntää silmukkaa tai taulukkoa/listaa. [Esimerkkejä.](../harjoitustyo.md#taulukko-silmukka-funktio) 
 12. **Ei virheitä eikä varoituksia** Riderin oikeassa yläkulmassa. Muista asentaa [kurssin Rider-asetukset](../tyokalut.md#jetbrains-rider) 
 13. Ei-pelien tapauksessa osoitettu myös taito testata aliohjelmia.

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

**Kyllä.** Yllä kohdassa [Komentoriviohjelma](#komentoriviohjelma) on seitsemän valmista aihe-ehdotusta esimerkkiaineistoineen. Muita vaihtoehtoja ovat esimerkiksi:

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
