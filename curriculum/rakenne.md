# Ohjelmointi 1 – oppimateriaalin rakenne (8 osaa)

Tämä on `ensimmainen-suunnitelma.md`:n pohjalta 2.9.2026 tehty tarkennettu
rakenne, jota on tasapainotettu 9.9.2026 (osat 2–4, foreach, tiedostot,
tyyppimuunnokset). mdBook on jatkossa kurssin ainoa lukumateriaali; TIM-monistetta ei
siirretä, vaan teksti kirjoitetaan uusiksi. Osa on aihekokonaisuus ja
tutkinto-opiskelijalle yksi viikko. TIM-demot numeroidaan osien mukaan
(demo1–demo8).

## Päätökset ja perustelut

- **Osa 2 alkaa muuttujista ja laskemisesta.** Opiskelija pääsee heti
  tekemään jotakin. Ehtolauseet ja aliohjelmat (ilman parametreja ja
  paluuarvoa) ovat samassa osassa, ja vasta niiden jälkeen tulevat lauseet ja
  lausekkeet sekä ohjelman rakenne. Rakenneluku on osan lopussa kokoavana: silloin luokka, `Main`,
  lohkot ja suoritusjärjestys on jo nähty käytännössä. Lohkot ja sisennys
  mainitaan jo luvussa 1.2, koska niistä kysytään ensimmäisenä.
- **Osa 3 = funktiot ja Jypeli.** Parametrit, paluuarvo, näkyvyys ja oliot.
  Parametrit siirrettiin osasta 2 tänne 9.9.2026, jotta osa 2 kevenee ja
  aliohjelman koko käsitteistö (parametri, paluuarvo, näkyvyys) tulee yhdessä
  osassa. Jypeli-luku on laaja, ja harjoitustyön suunnittelu alkaa heti sen
  perään.
- **Olioiden käyttö osassa 3 Jypelin yhteydessä.** Jypeli vaatii olioita
  heti; luku 1.4 käyttää niitä selittämättä, luku 3.4 selittää. Arvo- vs.
  viitetyyppi vasta osassa 6, kun taulukot ja listat on nähty.
- **Paluuarvo osassa 3, dokumentointi ja ComTest osassa 4.** Osa 4
  alkaa silmukoilla ja merkkijonoilla (9.9.2026: järjestys vaihdettu), ja
  dokumentaatiokommentit tulevat vasta niiden jälkeen, välittömästi ennen
  ComTestiä, joka tarvitsee ne. Näin osan 4 kuorma kevenee: aiemmin siinä
  olivat paluuarvo, kuormitus, ComTest, silmukat ja merkkijonot sekä
  harjoitustyön aloitus.
- **Kuormittaminen bonustietona, oletusarvot liitteenä.** Kuormittaminen on
  `<details>`-lohko luvussa 3.1 (ankkuri `#kuormittaminen`), koska sitä ei
  tarvita omissa ohjelmissa mutta se selittää kirjastojen dokumentaatiota.
  Valinnaiset parametrit ja oletusarvot ovat liite.
- **Silmukat osassa 4, taulukot osassa 5.** Silmukat esitellään ennen
  taulukoita, ja osassa 5 ne yhdistetään. `foreach` opetetaan vasta 5.2:ssa,
  koska ilman taulukkoa tai kokoelmaa se on tyhjä käsite. Debuggaus opetetaan
  silmukoiden ja taulukoiden kanssa, koska silloin debuggerista on eniten
  hyötyä.
- **Tyyppimuunnokset lyhyesti 2.2:ssa, syventäen 4.2:ssa.** Osassa 2 riittää
  cast (`int`/`double`) ja maininta `Parse`/`ToString`-parista. Syötteen
  lukeminen, epäonnistuva `Parse`, `TryParse` ja kulttuuriasetukset
  käsitellään merkkijonojen yhteydessä.
- **Tiedostot osassa 7 heti poikkeusten perään.** Tiedoston lukeminen on
  luontevin syy käsitellä poikkeuksia. Osa 8 jää kevyeksi (satunnaisluvut,
  kertaus), koska samalla viikolla ovat harjoitustyön vaihe 3 ja tentti.
- **Karsittu valinnaiseksi (Liitteet):** lukujen esitys tietokoneessa,
  oletusarvot, moniulotteiset taulukot, StringBuilder, lambda-lausekkeet,
  tyyppijärjestelmän syväosuus. Kokonaan pois: BNF, x86-rekisterit,
  attribuutit, Jypelin ohjaimet ja piirtoalusta omina lukuina (ne kuuluvat
  harjoitustyön ohjeisiin ja Jypelin wikiin).
- **Tehtävät** lukujen sisällä `<task>`-lohkoina heti harjoiteltavan asian
  perässä, ja kokoava lista `osaN/tehtavat.md`. Tehtävänannot kansiossa
  `src/exercises/<osa>-<luku>-<nro>-<slug>/`.

## Rakenne

| Osa                                        | Luku                                                                                                    | Sisältö                                                                                           | Tila                       |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------- |
| **1 Ensimmäinen ohjelma**                  | 1.1 Mitä ohjelmointi on?                                                                                | algoritmi, ohjelma, kieli, kirjasto, työtapa                                                      | valmis, tehtävät puuttuvat |
|                                            | 1.2 Ensimmäinen ohjelma                                                                                 | lähdekoodi, Hello World, lohkot ja sisennys lyhyesti, kääntäminen ja suorittaminen, virhetyypit   | valmis                     |
|                                            | 1.3 Ohjelmointiympäristö kuntoon                                                                        | Rider, hakemistorakenne, solution, projekti                                                       | valmis, tehtävät puuttuvat |
|                                            | 1.4 Ensimmäinen graafinen ohjelma                                                                       | Jypeli-esimerkki, projektimallit, Main, Content                                                   | valmis, tehtävät puuttuvat |
| **2 Muuttujat, ehdot ja aliohjelmat**      | 2.1 Muuttujat ja tietotyypit                                                                            | muuttuja, tyypit, var, vakiot                                                                     | valmis, tehtävät puuttuvat |
|                                            | 2.2 Operaattorit ja laskutoimitukset                                                                    | aritmetiikka, kokonaislukujako, laskujärjestys, cast lyhyesti, vertailu, loogiset, sijoitus, Math | valmis, tehtävät puuttuvat |
|                                            | 2.3 Ehtolauseet                                                                                         | if, else if, else, vertailu, loogiset, switch                                                     | valmis, tehtävät puuttuvat |
|                                            | 2.4 Aliohjelmat                                                                                         | määrittely, kutsu, void, terminologia                                                             | osittain (yhteenveto ja visa puuttuvat) |
|                                            | 2.5 Lauseet ja lausekkeet                                                                               | lause vs. lauseke                                                                                 | valmis, tehtävät puuttuvat |
|                                            | 2.6 Ohjelman rakenne                                                                                    | luokka, Main, using, suoritusjärjestys, lohkot, rakennevirheet                                    | valmis                     |
| **3 Funktiot ja Jypeli**                   | 3.1 Parametrit ja argumentit                                                                            | parametri, argumentti, useita parametreja, Jypeli-esimerkki; kuormittaminen `<details>`-lohkona   | osittain                   |
|                                            | 3.2 Aliohjelman paluuarvo                                                                               | return, kutsu lausekkeena, CS0161, useita returneja                                               | osittain                   |
|                                            | 3.3 Muuttujien näkyvyys                                                                                 | paikalliset muuttujat, lohko, parametrit, CS0103                                                  | runko                      |
|                                            | 3.4 Jypeli ja oliot                                                                                     | olio, new, ominaisuudet, metodikutsu, PhysicsGame/Begin, omat aliohjelmat Jypelissä               | runko                      |
| **4 Toisto, merkkijonot ja testaaminen**   | 4.1 Toistolauseet                                                                                       | while, do-while, for, sisäkkäiset, break/continue                                                 | osittain (yhteenveto ja visa puuttuvat) |
|                                            | 4.2 Merkkijonot                                                                                         | indeksointi, metodit, muotoilu, Split/Trim, syöte ja Parse syventäen, TryParse, kulttuuri         | runko                      |
|                                            | 4.3 Kommentointi ja dokumentointi                                                                       | //, /* */, ///, luokan dokumentointi, tyyliopas                                                   | runko                      |
|                                            | 4.4 Testaaminen ComTestillä                                                                             | testit dokumentaatiokommenteissa, ajaminen, testit ensin, liukuluvut                              | osittain                   |
| **5 Taulukot ja debuggaus**                | 5.1 Taulukot                                                                                            | luonti, indeksointi, pituus, viite, parametrina                                                   | runko                      |
|                                            | 5.2 Taulukot ja silmukat                                                                                | läpikäynti for ja foreach, summa/keskiarvo/suurin, kopiointi, testaus, Jypeli                     | runko                      |
|                                            | 5.3 Debuggaus                                                                                           | Riderin debuggeri, breakpointit, watch, kutsupino                                                 | valmis                     |
| **6 Kokoelmat**                            | 6.1 Listat                                                                                              | List<T>, lisäys/poisto, läpikäynti, metodit, testaus                                              | runko                      |
|                                            | 6.2 Sanakirjat                                                                                          | Dictionary, avain–arvo, haku, läpikäynti                                                          | runko                      |
|                                            | 6.3 Arvotyypit ja viitetyypit                                                                           | sijoitus, parametrin välitys, ==, string, null                                                    | runko                      |
| **7 Rekursio, poikkeukset ja tiedostot**   | 7.1 Rekursio                                                                                            | lopetusehto, kertoma, kutsupino, Sierpinski                                                       | runko                      |
|                                            | 7.2 Poikkeukset                                                                                         | virheilmoitus, try-catch, tyypit, finally, milloin                                                | runko                      |
|                                            | 7.3 Tiedostojen lukeminen ja kirjoittaminen                                                             | File.ReadAllLines, Split/Parse, kirjoitus, poikkeukset                                            | runko                      |
| **8 Satunnaisluvut ja kertaus**            | 8.1 Satunnaisluvut                                                                                      | Random, RandomGen, testaus                                                                        | runko                      |
|                                            | 8.2 Kertaus ja tenttiin valmistautuminen                                                                | käsitteet, virheet, tentti, jatko                                                                 | runko                      |
| **Liitteet**                               | Tiedon esittäminen tietokoneessa                                                                        | binääri, liukuluku, merkistöt                                                                     | valmis                     |
|                                            | Valinnaiset parametrit ja oletusarvot                                                                   | oletusarvo, säännöt, oletusarvot vai kuormittaminen                                               | valmis                     |
|                                            | Moniulotteiset taulukot, StringBuilder, Lambda-lausekkeet, Tyyppijärjestelmä, Virheilmoitukset, Sanasto |                                                                                                   | runko                      |

Jokaisella osalla on `index.md` (osaamistavoitteet, luvut, luennot, tehtävät,
harjoitustyön/debuggausnäytteen vaihe) ja `tehtavat.md` (kokoava lista).

## Kurssin muut osasuoritukset osien kohdalla

| Osa | Osasuoritus                                           |
| --- | ----------------------------------------------------- |
| 1   | työkalujen asennus, esitietokysely                    |
| 4   | harjoitustyön vaihe 1 (suunnitelma versiohallinnassa) |
| 5   | debuggausnäyte                                        |
| 7   | harjoitustyön vaihe 2 (50 %)                          |
| 8   | harjoitustyön vaihe 3 (100 %), tentti                 |

## Luennot

Luentosivut (`src/luennot/luentoN.md`) on säilytetty kevään 2026
numeroinnilla ja linkitetty osiin aiheen mukaan (`src/luennot/index.md`).
Uuden toteutuksen luentosuunnitelma tehdään erikseen; tavoite on 2 luentoa
osaa kohti.

## Seuraavat askeleet (vaihe B)

1. Osat 1–2: täydennä 1.1, laajenna 2.1–2.3 (suoritusjärjestys,
   totuustaulut), täydennä 2.4 (yhteenveto, visa), kirjoita tehtävät
   `<task>`-lohkoina.
2. Osa 3: kirjoita 3.1–3.2 loppuun, 3.3–3.4.
3. Osa 4: täydennä 4.1 (yhteenveto, visa), kirjoita 4.2–4.3, 4.4 loppuun.
4. Osat 5–8 ja liitteet.
5. TIM: demot 1–8 uuden jaon mukaan; tehtävien TIM-linkit lukuihin.

## Luvun rakenne

Jokainen luku etenee samalla kaavalla:

1. **Esittely** (1–2 kappaletta): mistä on kyse ja miksi se on tärkeää.
2. **"Mihin X:ää tarvitaan?"**: 2–4 sovellusesimerkkiä ilman koodia
   (peli, arkisovellus, tutkimus, kurssin harjoitustyö). Tarkoitus on
   motivoida, ei opettaa.
3. **Perusteet**: alaluvut, joissa jokaisessa on vähintään yksi esimerkki.
   Ajettava (`csharp`) kokonainen ohjelma aina kun mahdollista; katkelmat
   `csharp,ignore`. Esimerkit kasvavat askel kerrallaan.
4. **Tyypillisiä virheitä**: kääntäjän virhekoodi, syy ja korjaus; mielellään
   ajettava rikkinäinen esimerkki, jonka lukija korjaa.
5. **Yhteenveto**: 3–5 bullettia.
6. **Testaa tietosi**: 2–3 totta/tarua-väittämää ja 1–2
   monivalintaa (yksi oikein neljästä). Eivät ole tehtäviä eivätkä anna
   pisteitä; tarkoitus on kohdistaa tunnettuihin väärinkäsityksiin. Noin
   puolet väittämistä tosia. Vastaus ja lyhyt selitys `<details>`-lohkossa.
   Markup: koko osio `<visa>`-kääreen sisällä, jokaisessa
   `<details data-vastaus="totta|tarua|a–d">`; väittämä on `<summary>`-rivi,
   monivalinnassa kysymys ja vaihtoehdot a)–d) markdownina (rivinvaihto
   `\`-merkillä) ja `<summary>Näytä vastaus</summary>`. Tyylit
   `theme/visa.css`. `<visa>`-kääre ja `data-vastaus` mahdollistavat
   myöhemmin JS-interaktiivisuuden ilman lukujen muokkaamista.
7. **Tehtävät**: `<task>`-lohkot.

Sävy: asiallinen mutta rento. Kevyt huumori ja hauskat tosiasiat ovat
tervetulleita, kunhan ne eivät hidasta asiaa. Lisätiedot `<details>`-lohkoihin,
ei leipätekstiin.
