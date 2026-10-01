# Ohjelmointi 1 ITKP102, Ohjelmointi 1, 6 opintopistettä

Ohjelmoinnin perusteet C#:lla.

Tässä on suunnitelma sisällön uudistamiseksi keväästä 2027 alkaen. 

Kukin osa on aihekokonaisuus ja tutkinto-opiskelijalle yksi viikko. TIM-demot
numeroidaan osien mukaan (demo1–demo8).

## Rakenne

| Osa                                          | Luku                                                                           | Sisältö                                                                                                | Tila                                           |
| -------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| **1 Ensimmäinen ohjelma**                    | 1.1 Mitä ohjelmointi on?                                                       | algoritmi, ohjelma, kieli, kirjasto, työtapa                                                           | v1 valmis, tehtävät puuttuvat                  |
|                                              | 1.2 Ensimmäinen ohjelma                                                        | lähdekoodi, Hello World, lohkot ja sisennys lyhyesti, kääntäminen ja suorittaminen, virhetyypit        | v1 valmis                                      |
|                                              | 1.3 Laskutoimitukset                                                           | aritmetiikka, kokonaislukujako ja jakojäännös, laskujärjestys, `+` ja teksti, Math; ilman muuttujia    | v1 (siirretty luvusta 2.2), tehtävät alustavia   |
|                                              | 1.4 Ohjelmointiympäristö kuntoon                                               | Rider, hakemistorakenne, solution, projekti                                                            | v1 valmis, tehtävät puuttuvat                  |
|                                              | 1.5 Ensimmäinen graafinen ohjelma                                              | Jypeli-esimerkki, projektimallit, Main, Content                                                        | v1 valmis, tehtävät puuttuvat                  |
| **2 Muuttujat, syöte ja funktiot**           | 2.1 Muuttujat ja tietotyypit                                                   | muuttuja, tyypit, var, vakiot, syöte `Console.ReadLine`                                                | v1 valmis, tehtävät puuttuvat                  |
|                                              | 2.2 Operaattorit ja tyyppimuunnokset                                           | laskeminen muuttujilla, cast, `Parse` ja lukusyöte, vertailu, loogiset, sijoitus                       | v1 valmis, tehtävät puuttuvat                  |
|                                              | 2.3 Lauseet ja lausekkeet                                                      | lause vs. lauseke, kutsu lausekkeena; `a++` ja spesifikaatio `<details>`-lohkona                       | v1 valmis, tehtävät puuttuvat                  |
|                                              | 2.4 Funktiot                                                                   | määrittely, kutsu, parametri, return, paluuarvon tyyppi, kutsusta määrittelyyn, tynkä, CS0161, Jypeli-funktio; kuormittaminen `<details>`-lohkona | v1 (koottu luvuista 2.5, 3.1 ja 3.2), tehtävät alustavia |
|                                              | 2.5 Ohjelman rakenne                                                           | luokka, Main, using, suoritusjärjestys, lohkot, rakennevirheet                                         | v1 valmis                                      |
| **3 Ehdot, aliohjelmat ja Jypeli**           | 3.1 Ehtolauseet                                                                | if, else if, else, loogiset, switch, ehtolause funktiossa (useita returneja, CS0161, totuusarvo suoraan) | v1 valmis (siirretty luvusta 2.3), tehtävät puuttuvat |
|                                              | 3.2 Aliohjelmat ilman paluuarvoa                                               | void, sivuvaikutus, void-kutsu lauseena, laskeva vai tekevä, `return;`, Main ja Begin, Begin osiin     | v1 (koottu luvuista 2.5 ja 3.2), tehtävät alustavia |
|                                              | 3.3 Muuttujien näkyvyys                                                        | paikalliset muuttujat, lohko, parametrit, attribuutit, CS0103                                          | runko                                          |
|                                              | 3.4 Jypeli ja oliot                                                            | olio, new, olioviite lyhyesti, ominaisuudet, metodikutsu, PhysicsGame/Begin, omat aliohjelmat Jypelissä, näppäinkuuntelija | runko                                          |
| **4 Toisto, merkkijonot ja satunnaisuus**    | 4.1 Toistolauseet                                                              | while, do-while, for, sisäkkäiset, break/continue, välitulosten tulostaminen                           | osittain (yhteenveto ja visa puuttuvat)        |
|                                              | 4.2 Merkkijonot                                                                | indeksointi, metodit, muotoilu, Split/Trim, syöte syventäen: TryParse, kulttuuri                       | runko                                          |
|                                              | 4.3 Satunnaisluvut                                                             | Random, RandomGen, arvauspeli                                                                          | runko                                          |
|                                              | 4.4 Kommentointi ja dokumentointi                                              | //, /* */, ///, luokan dokumentointi, tyyliopas                                                        | runko                                          |
| **5 Taulukot ja viitteet**                   | 5.1 Taulukot                                                                   | luonti, indeksointi, pituus, parametrina                                                               | runko                                          |
|                                              | 5.2 Taulukot ja silmukat                                                       | läpikäynti for ja foreach, summa/keskiarvo/suurin, kopiointi, Jypeli                                   | runko                                          |
|                                              | 5.3 Arvotyypit ja viitetyypit                                                  | sijoitus, parametrin välitys, sivuvaikutus, ==, string, null                                           | runko                                          |
|                                              | 5.4 Debuggaus                                                                  | Riderin debuggeri, breakpointit, watch, kutsupino                                                      | valmis                                         |
| **6 Kokoelmat ja tiedostot**                 | 6.1 Listat                                                                     | List<T>, lisäys/poisto, läpikäynti, metodit                                                            | runko                                          |
|                                              | 6.2 Sanakirjat                                                                 | Dictionary, avain–arvo, haku, läpikäynti                                                               | runko                                          |
|                                              | 6.3 Tiedostot ja poikkeukset                                                   | File.ReadAllLines, Split/Parse, kirjoitus, try-catch, poikkeustyypit, finally, milloin                 | runko                                          |
| **7 Rekursio ja testaaminen**                | 7.1 Rekursio                                                                   | lopetusehto, kertoma, kutsupino, Sierpinski                                                            | runko                                          |
|                                              | 7.2 Testaaminen ComTestillä                                                    | testit dokumentaatiokommenteissa, ajaminen, liukuluvut, taulukot ja listat, satunnaisuus               | osittain                                       |
| **8 Kertaus**                                | 8.1 Kertaus ja tenttiin valmistautuminen                                       | käsitteet, virheet, tentti, jatko                                                                      | runko                                          |
| **Liitteet**                                 | Tiedon esittäminen tietokoneessa                                               | binääri, liukuluku, merkistöt                                                                          | valmis                                         |
|                                              | Valinnaiset parametrit ja oletusarvot                                          | oletusarvo, säännöt, oletusarvot vai kuormittaminen                                                    | valmis                                         |
|                                              | Moniulotteiset taulukot                                                        | luonti, indeksointi, GetLength, sisäkkäiset silmukat, parametrina, Jypeli-kenttä, int[][]              | v1 valmis                                      |
|                                              | StringBuilder, Lambda-lausekkeet, Tyyppijärjestelmä, Virheilmoitukset, Sanasto |                                                                                                        | runko                                          |

Jokaisella osalla on `index.md` (osaamistavoitteet, luvut, luennot, tehtävät,
harjoitustyön/debuggausnäytteen vaihe) ja `tehtavat.md` (kokoava lista).

## Päätökset ja perustelut

Rakennetta muutettiin 1.10.2026, kun sitä verrattiin Helsingin yliopiston
Ohjelmoinnin perusteisiin ja Aalto-yliopiston O1-kurssiin. Muutokset on
merkitty päivämäärällä.

- **Laskutoimitukset osassa 1 (1.10.2026).** Luku 1.3 laskee pelkillä
  lukuarvoilla (`Console.WriteLine(7 / 2)`), joten muuttujia ei tarvita.
  Luvusta 2.2 siirtyivät aritmetiikka, kokonaislukujako, laskujärjestys,
  `+` ja teksti sekä `Math`. Lukuun 2.2 jäi se, mikä tarvitsee muuttujia tai
  tyyppejä: tyyppimuunnokset, vertailu, loogiset operaattorit ja sijoitus.
  Osa 2 kevenee, ja osan 1 konsoliohjelma tekee muutakin kuin tulostaa.
- **Syöte osassa 2 (1.10.2026).** `Console.ReadLine` opetetaan luvussa 2.1
  merkkijonolle ja `int.Parse(Console.ReadLine())` luvussa 2.2 valmiina
  kaavana. Ohjelmista tulee heti interaktiivisia. Epäonnistuva `Parse`,
  `TryParse` ja kulttuuriasetukset käsitellään edelleen luvussa 4.2.
- **Osa 2: lausekkeista funktioihin (1.10.2026).** Luvut 2.2–2.4 ovat ketju:
  operaattoreilla rakennetaan lausekkeita, luku 2.3 nimeää ne, ja luku 2.4
  tekee niistä nimettyjä lausekkeita eli funktioita. Rakenneluku on osan
  lopussa kokoavana: silloin luokka, `Main`, lohkot ja suoritusjärjestys on jo
  nähty käytännössä. Lohkot ja sisennys mainitaan jo luvussa 1.2, koska niistä
  kysytään ensimmäisenä.
- **Funktiot ennen `void`-aliohjelmia (1.10.2026).** Ensimmäinen oma
  aliohjelma on luvussa 2.4 funktio, jolla on parametri ja paluuarvo
  (`Nelio(x)`). `void`-aliohjelma tulee luvussa 3.2 erikoistapauksena:
  aliohjelma, joka tekee jotakin eikä anna mitään takaisin. Perustelut:
  opiskelija on kutsunut arvon palauttavia funktioita luvusta 1.3 lähtien
  (`Math.Sqrt`, `Console.ReadLine`, `int.Parse`), ja luku 2.3 nimeää kutsun
  lausekkeeksi, joten oma funktio jatkaa tuttua. Kun ensimmäinen oma
  aliohjelma ei tulosta, tulostamisen ja palauttamisen sekaannusta ei synny,
  eikä sitä tarvitse purkaa jälkikäteen. Palauttavat funktiot ovat valmiiksi
  testattavia osan 7 ComTestiä varten. Parametrit, paluuarvo ja kutsusta
  määrittelyyn -työjärjestys ovat samassa luvussa; parametrit siirrettiin
  9.9.2026 osasta 2 osaan 3, ja nyt ne palasivat funktioiden mukana.
- **Lause ja lauseke yksinkertaisesti (1.10.2026).** Luku 2.3 käyttää kahta
  sääntöä: lause saa jotakin tapahtumaan, ja lausekkeella on arvo. Testi:
  lauseke kelpaa sijoituksen oikealle puolelle. Arvon antava kutsu on lauseke;
  `Console.WriteLine` ja muut `void`-kutsut ovat pelkkiä lauseita.
  Spesifikaation tarkempi luokittelu (siellä `void`-kutsukin on lauseke) ja
  `a++` ovat `<details>`-lohkossa. Luvut 2.4 ja 3.2 nojaavat vain tähän
  jakoon.
- **Ehtolauseet osaan 3 (1.10.2026).** Osa 2 ei saa olla liian raskas, kun
  funktiot tulivat siihen parametreineen. Vertailu ja loogiset operaattorit
  jäivät lukuun 2.2, joten funktio voi palauttaa totuusarvon ilman
  ehtolausetta (`return ika >= 18;`), ja ehto opitaan ensin arvona. Luku 3.1
  opettaa ehtolauseen funktioiden kanssa: useita `return`-lauseita, CS0161 ja
  totuusarvon palauttaminen suoraan. Järjestys 3.1 → 3.2 → 3.3 on myös
  riippuvuusjärjestys: `return;` `void`-aliohjelmassa ja lohkon rajaama
  näkyvyys tarvitsevat `if`-lausetta. Osan 2 ohjelmat eivät vielä haaraudu,
  joten demon 2 tehtävät ovat muotoa lue, laske, tulosta.
- **Osa 3 = ehdot, aliohjelmat ja Jypeli (1.10.2026).** Ehtolauseet,
  `void`-aliohjelmat, näkyvyys ja oliot. Jypeli-luku on laaja, ja
  harjoitustyön suunnittelu alkaa heti sen perään.
- **Lumiukko funktiolla (1.10.2026).** Ensimmäisen viikon Lumiukko-demo voi
  pysyä ennallaan, koska osan 1 esimerkit käyttävät muutenkin rakenteita
  selittämättä. Luvussa 2.4 Lumiukko tehdään funktiolla
  `GameObject LuoPallo(x, y, sade)`, jonka paluuarvon `Begin` lisää peliin.
  Kutsuja voi muuttaa palautettua palloa ennen lisäämistä, ja unohtunut `Add`
  näkyy kuvasta. Luvussa 3.2 `void PiirraLumiukko(x, y)` kokoaa lumiukon ja
  lisää pallot peliin, koska kolmea oliota ei voi palauttaa yhtenä arvona.
- **Olioiden käyttö osassa 3 Jypelin yhteydessä.** Jypeli vaatii olioita
  heti; luku 1.5 käyttää niitä selittämättä, luku 2.4 palauttaa funktiosta
  `GameObject`-arvon kuten minkä tahansa muun arvon, ja luku 3.4 selittää. Luku 3.4
  mainitsee myös, että muuttujaan tallentuu viite olioon eikä olio itse, joten
  kaksi muuttujaa voi viitata samaan olioon. Termit arvotyyppi ja viitetyyppi
  tulevat vasta luvussa 5.3.
- **Sivuvaikutus käsitteenä, ei omana lukunaan (1.10.2026).** Termi esitellään
  luvussa 3.2 `void`-aliohjelman tehtävänä ja erottamaan palauttaminen
  tulostamisesta, ja siihen palataan luvussa 5.3, kun aliohjelma muuttaa
  kutsujan taulukkoa.
- **Attribuutit luvussa 3.3 (1.10.2026).** C#:ssa ei ole globaaleja muuttujia,
  mutta peliluokan attribuutit ovat sama asia luokan sisällä. Konsoliohjelmissa
  niitä ei tarvita (luokkatason `const` riittää). Jypelissä niitä ei voi
  välttää, koska tapahtumankäsittelijät tarvitsevat esimerkiksi pelaajan ja
  pistelaskurin. Sääntö: parametri aina kun voi, attribuutti vain kun
  käsittelijä sitä tarvitsee. Sama vaatimus on harjoitustyön ohjeissa.
- **Satunnaisluvut osassa 4 (1.10.2026).** Harjoitustyö alkaa osassa 4, ja
  pelit tarvitsevat satunnaisuutta alusta asti; osassa 8 luku tuli vasta
  viimeisen palautuksen viikolla. Syötteen ja silmukan kanssa saadaan
  arvauspeli. Satunnaisuutta käyttävän koodin testaaminen on luvussa 7.2.
- **Dokumentointi osassa 4, ComTest osassa 7 (1.10.2026).**
  Dokumentaatiokommentit tarvitaan harjoitustyön vaiheessa 1, joten ne ovat
  osassa 4. Yksikkötestaus on osassa 7 eikä osassa 8, koska osassa 8 ovat
  tentti ja harjoitustyön viimeinen vaihe. Testit ensin -työtapa jää pois.
  Demoissa ei vaadita opiskelijan omia testejä ennen osaa 7. Taulukoiden,
  listojen ja satunnaisuuden testaaminen on koottu lukuun 7.2.
- **Kuormittaminen bonustietona, oletusarvot liitteenä.** Kuormittaminen on
  `<details>`-lohko luvussa 2.4 (ankkuri `#kuormittaminen`), koska sitä ei
  tarvita omissa ohjelmissa mutta se selittää kirjastojen dokumentaatiota.
  Valinnaiset parametrit ja oletusarvot ovat liite.
- **Silmukat osassa 4, taulukot osassa 5.** Silmukat esitellään ennen
  taulukoita, ja osassa 5 ne yhdistetään. `foreach` opetetaan vasta 5.2:ssa,
  koska ilman taulukkoa tai kokoelmaa se on tyhjä käsite.
- **Arvo- ja viitetyypit heti taulukoiden jälkeen (1.10.2026).** Luku siirtyi
  paikasta 6.3 paikkaan 5.3. Taulukko parametrina vaatii viitteen käsitteen
  jo luvussa 5.1, ja listat voidaan osassa 6 esitellä viitetyyppinä kuten
  taulukko.
- **Debuggaus osan 5 viimeisenä lukuna (1.10.2026).** Debuggerista on eniten
  hyötyä silmukoiden ja taulukoiden kanssa, ja luvun 5.3 jälkeen sillä voi
  näyttää, että kaksi muuttujaa viittaa samaan taulukkoon. Välitulosten
  tulostaminen esitellään jo luvussa 4.1 ensimmäisten silmukoiden yhteydessä.
- **Tiedostot ja poikkeukset samassa luvussa 6.3 (1.10.2026).** Tiedostot
  tulevat ensin, ja puuttuva tiedosto motivoi `try`-`catch`-rakenteen. Toinen
  motivoiva tapaus on osasta 2 tuttu `Parse`, joka kaatuu väärään syötteeseen.
  Luku on osassa 6, jotta osa 7 (harjoitustyön vaihe 2) kevenee.
- **Osa 8 on pelkkä kertaus.** Samalla viikolla ovat harjoitustyön vaihe 3 ja
  tentti.
- **Karsittu valinnaiseksi (Liitteet):** lukujen esitys tietokoneessa,
  oletusarvot, moniulotteiset taulukot, StringBuilder, lambda-lausekkeet,
  tyyppijärjestelmän syväosuus. Kokonaan pois: BNF, x86-rekisterit, Jypelin
  ohjaimet ja piirtoalusta omina lukuina (ne kuuluvat harjoitustyön ohjeisiin
  ja Jypelin wikiin). Näppäinkuuntelijan vähimmäisesittely on luvussa 3.4.
- **Tehtävät** lukujen sisällä `<task>`-lohkoina heti harjoiteltavan asian
  perässä, ja kokoava lista `osaN/tehtavat.md`. Tehtävänannot kansiossa
  `src/exercises/<osa>-<luku>-<nro>-<slug>/`.

## Jypeli osien rinnalla

Jypeli kulkee mukana joka osassa (1.10.2026). Vähintään yhdessä luvussa
osaa kohti on Jypelissä-osio (ks. Luvun rakenne), ja esimerkit kasvattavat
samaa peliä osasta toiseen. Peli toimii samalla harjoitustyön mallina.

| Osa | Luku     | Jypelissä                                                                 |
| --- | -------- | ------------------------------------------------------------------------- |
| 1   | 1.5      | ensimmäinen peli: pallo ja kenttä                                         |
| 2   | 2.1, 2.4 | olion koko, väri ja paikka muuttujista; `LuoPallo(x, y, sade)` palauttaa pallon, `Begin` lisää sen |
| 3   | 3.2      | `Begin` osiin; `PiirraLumiukko(x, y)` kokoaa lumiukon                      |
| 3   | 3.3, 3.4 | pelaaja ja pistelaskuri attribuutteina; näppäinkuuntelija                  |
| 4   | 4.1, 4.3 | silmukka luo esteet, `RandomGen` sijoittaa ne                              |
| 5   | 5.2, 5.3 | kenttä merkkijonotaulukosta; kaksi muuttujaa, sama pallo                   |
| 6   | 6.1, 6.3 | lista vihollisista ja niiden poistaminen; ennätykset tiedostosta           |
| 7   | 7.1      | Sierpinskin kolmio                                                        |

## Kurssin muut osasuoritukset osien kohdalla

| Osa | Osasuoritus                           |
| --- | ------------------------------------- |
| 1   | työkalujen asennus, esitietokysely    |
| 4   | harjoitustyön vaihe 1                 |
| 7   | harjoitustyön vaihe 2 (50 %)          |
| 8   | harjoitustyön vaihe 3 (100 %), tentti |
|     | Debuggausnäyte ennen tenttiä          |

## Luennot

Luentosivut numeroidaan entisen tavan mukaisesti (`src/luennot/luentoN.md`).
Tavoite on 2 luentoa osaa kohti.

## Luvun rakenne

Jokainen luku etenee samalla kaavalla:

1. **Esittely** (1–2 kappaletta): mistä on kyse ja miksi se on tärkeää.
2. **"Mihin X:ää tarvitaan?"**: 2–4 sovellusesimerkkiä ilman koodia
   (peli, arkisovellus, tutkimus, kurssin harjoitustyö). Tarkoitus on
   motivoida, ei opettaa.
3. **Perusteet**: alaluvut, joissa jokaisessa on vähintään yksi esimerkki.
   Ajettava (`csharp`) kokonainen ohjelma aina kun mahdollista; katkelmat
   `csharp,ignore`. Esimerkit kasvavat askel kerrallaan.
4. **Jypelissä** (ei joka luvussa; ks. Jypeli osien rinnalla): sama asia
   pelissä. Lyhyt, yhden asian esimerkki, joka jatkaa edellisen osan peliä.
5. **Tyypillisiä virheitä**: kääntäjän virhekoodi, syy ja korjaus; mielellään
   ajettava rikkinäinen esimerkki, jonka lukija korjaa.
6. **Yhteenveto**: 3–5 bullettia.
7. **Testaa tietosi**: 2–3 totta/tarua-väittämää ja 1–2
   monivalintaa (yksi oikein neljästä). Eivät ole tehtäviä eivätkä anna
   pisteitä; tarkoitus on kohdistaa tunnettuihin väärinkäsityksiin. Noin
   puolet väittämistä tosia. Lukija valitsee vastauksen, ja sivu näyttää
   oikean vastauksen ja lyhyen perustelun; valinta jää selaimen muistiin.
   Markup: koko osio `<visa>`-kääreen sisällä, kukin tagi omalla rivillään.
   Väittämä on `<vaittama vastaus="totta|tarua">`, monivalinta `<kysymys>`,
   jonka vaihtoehdot ovat tehtävälistan rivejä: `- [x]` oikea, `- [ ]` väärä
   (pitkä vaihtoehto jatkuu kahdella välilyönnillä sisennettynä). Kysymyksen
   koodilohko tulee ennen vaihtoehtoja. Kummankin lopussa `<perustelu>`.
   Numerot ja kirjaimet a)–d) tulevat sivustolta, joten niitä ei kirjoiteta;
   perustelu alkaa silti oikealla vastauksella (`**Tarua.**`, `**b.**`).
   Toteutus: `zensical/convert.py` (`convert_quizzes`),
   `zensical/assets/js/visa.js` ja `zensical/assets/css/visa.css`.

   ```markdown
   <visa>

   **Totta vai tarua?**

   <vaittama vastaus="tarua">
   Käännösvirhe ilmenee vasta, kun ohjelmaa ajetaan.
   <perustelu>
   **Tarua.** Käännösvirhe estää kääntämisen, joten ohjelmaa ei voi edes ajaa.
   </perustelu>
   </vaittama>

   **Monivalinta.** Yksi vaihtoehto on oikein.

   <kysymys>
   Mitä kääntäjän virheilmoitus `CS1002: ; expected` tarkoittaa?

   - [ ] Ohjelma kaatui puolipisteeseen ajon aikana
   - [x] Jostakin lauseesta puuttuu puolipiste
   - [ ] Ohjelmassa on liikaa puolipisteitä
   - [ ] Puolipiste on kirjoitettu väärällä fontilla

   <perustelu>
   **b.** *Expected* tarkoittaa, että kääntäjä odotti puolipistettä eikä
   löytänyt sitä.
   </perustelu>
   </kysymys>

   </visa>
   ```
8. **Tehtävät**: `<task>`-lohkot.

Sävy: asiallinen mutta rento. Kevyt huumori ja hauskat tosiasiat ovat
tervetulleita, kunhan ne eivät hidasta asiaa. Lisätiedot `<details>`-lohkoihin,
ei leipätekstiin.
