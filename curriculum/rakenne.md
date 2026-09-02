# Ohjelmointi 1 – oppimateriaalin rakenne (8 osaa)

Tämä on `ensimmainen-suunnitelma.md`:n pohjalta 2.9.2026 tehty tarkennettu
rakenne. mdBook on jatkossa kurssin ainoa lukumateriaali; TIM-monistetta ei
siirretä, vaan teksti kirjoitetaan uusiksi. Osa on aihekokonaisuus ja
tutkinto-opiskelijalle yksi viikko. TIM-demot numeroidaan osien mukaan
(demo1–demo8).

## Päätökset ja perustelut

- **Ehtolauseet osassa 2, aliohjelmat osassa 3.** Osa 2 vastaa yleistä
  "ensimmäinen ohjelmointiviikko" -kokonaisuutta (tulostus, muuttujat,
  laskenta, ehdot). Ehdot heti mahdollistavat mielekkäät ohjelmat ennen
  aliohjelmia, ja osan 3 aliohjelmaesimerkit voivat sisältää ehtoja.
- **Olioiden käyttö osassa 3 Jypelin yhteydessä.** Jypeli vaatii olioita
  heti; luku 1.4 käyttää niitä selittämättä, luku 3.5 selittää. Arvo- vs.
  viitetyyppi vasta osassa 6, kun taulukot ja listat on nähty.
- **Paluuarvo ja testaaminen samassa osassa (4).** ComTest testaa funktioita,
  joten se seuraa paluuarvoa välittömästi. Dokumentaatiokommentit (3.4)
  opetetaan ennen sitä.
- **Silmukat osassa 4, taulukot osassa 5.** Silmukat esitellään ennen
  taulukoita, ja osassa 5 ne yhdistetään. Debuggaus opetetaan silmukoiden ja
  taulukoiden kanssa, koska silloin debuggerista on eniten hyötyä.
- **Karsittu valinnaiseksi (Liitteet):** lukujen esitys tietokoneessa,
  moniulotteiset taulukot, StringBuilder, lambda-lausekkeet,
  tyyppijärjestelmän syväosuus. Kokonaan pois: BNF, x86-rekisterit,
  attribuutit, Jypelin ohjaimet ja piirtoalusta omina lukuina (ne kuuluvat
  harjoitustyön ohjeisiin ja Jypelin wikiin).
- **Tehtävät** lukujen sisällä `<task>`-lohkoina heti harjoiteltavan asian
  perässä, ja kokoava lista `osaN/tehtavat.md`. Tehtävänannot kansiossa
  `src/exercises/<osa>-<luku>-<nro>-<slug>/`.

## Rakenne

| Osa | Luku | Sisältö | Tila |
| --- | ---- | ------- | ---- |
| **1 Ensimmäinen ohjelma** | 1.1 Mitä ohjelmointi on? | algoritmi, ohjelma, kieli, kirjasto, työtapa | valmis, tehtävät puuttuvat |
| | 1.2 Ensimmäinen ohjelma | lähdekoodi, Hello World, kääntäminen ja suorittaminen, virhetyypit | valmis |
| | 1.3 Ohjelmointiympäristö kuntoon | Rider, hakemistorakenne, solution, projekti | valmis, tehtävät puuttuvat |
| | 1.4 Ensimmäinen graafinen ohjelma | Jypeli-esimerkki, projektimallit, Main, Content | valmis, tehtävät puuttuvat |
| **2 Muuttujat, laskenta ja päätökset** | 2.1 Ohjelman rakenne | luokka, Main, using, suoritusjärjestys, lohkot, rakennevirheet | valmis |
| | 2.2 Lauseet ja lausekkeet | lause vs. lauseke | valmis, tehtävät puuttuvat |
| | 2.3 Muuttujat ja tietotyypit | muuttuja, tyypit, var, vakiot | valmis, tehtävät puuttuvat |
| | 2.4 Operaattorit ja laskutoimitukset | aritmetiikka, kokonaislukujako, laskujärjestys, tyyppimuunnokset, vertailu, loogiset, sijoitus, Math | valmis, tehtävät puuttuvat |
| | 2.5 Ehtolauseet | if, else if, else, vertailu, loogiset, switch | valmis, tehtävät puuttuvat |
| **3 Aliohjelmat ja Jypeli** | 3.1 Aliohjelmat | määrittely, kutsu, void, terminologia | valmis |
| | 3.2 Parametrit ja argumentit | parametri, argumentti, useita parametreja, Jypeli-esimerkki | osittain |
| | 3.3 Muuttujien näkyvyys | paikalliset muuttujat, lohko, parametrit, CS0103 | runko |
| | 3.4 Kommentointi ja dokumentointi | //, /* */, ///, luokan dokumentointi, tyyliopas | runko |
| | 3.5 Jypeli ja oliot | olio, new, ominaisuudet, metodikutsu, PhysicsGame/Begin, omat aliohjelmat Jypelissä | runko |
| **4 Funktiot, testaaminen ja toisto** | 4.1 Aliohjelman paluuarvo | return, kutsu lausekkeena, CS0161, useita returneja | osittain |
| | 4.2 Aliohjelman kuormittaminen | kuormitus, valinta, oletusarvot | runko |
| | 4.3 Testaaminen ComTestillä | testit dokumentaatiokommenteissa, ajaminen, testit ensin, liukuluvut | osittain |
| | 4.4 Toistolauseet | while, do-while, for, foreach, sisäkkäiset, break/continue | valmis |
| | 4.5 Merkkijonot | indeksointi, metodit, muotoilu, Split/Trim, Parse | runko |
| **5 Taulukot ja debuggaus** | 5.1 Taulukot | luonti, indeksointi, pituus, viite, parametrina | runko |
| | 5.2 Taulukot ja silmukat | läpikäynti, summa/keskiarvo/suurin, kopiointi, testaus, Jypeli | runko |
| | 5.3 Debuggaus | Riderin debuggeri, breakpointit, watch, kutsupino | valmis |
| **6 Kokoelmat** | 6.1 Listat | List<T>, lisäys/poisto, läpikäynti, metodit, testaus | runko |
| | 6.2 Sanakirjat | Dictionary, avain–arvo, haku, läpikäynti | runko |
| | 6.3 Arvotyypit ja viitetyypit | sijoitus, parametrin välitys, ==, string, null | runko |
| **7 Rekursio ja poikkeukset** | 7.1 Rekursio | lopetusehto, kertoma, kutsupino, Sierpinski | runko |
| | 7.2 Poikkeukset | virheilmoitus, try-catch, tyypit, finally, milloin | runko |
| **8 Tiedon lukeminen ja kertaus** | 8.1 Tiedostojen lukeminen ja kirjoittaminen | File.ReadAllLines, Split/Parse, kirjoitus, poikkeukset | runko |
| | 8.2 Satunnaisluvut | Random, RandomGen, testaus | runko |
| | 8.3 Kertaus ja tenttiin valmistautuminen | käsitteet, virheet, tentti, jatko | runko |
| **Liitteet** | Tiedon esittäminen tietokoneessa | binääri, liukuluku, merkistöt | valmis |
| | Moniulotteiset taulukot, StringBuilder, Lambda-lausekkeet, Tyyppijärjestelmä, Virheilmoitukset, Sanasto | | runko |

Jokaisella osalla on `index.md` (osaamistavoitteet, luvut, luennot, tehtävät,
harjoitustyön/debuggausnäytteen vaihe) ja `tehtavat.md` (kokoava lista).

## Kurssin muut osasuoritukset osien kohdalla

| Osa | Osasuoritus |
| --- | ----------- |
| 1 | työkalujen asennus, esitietokysely |
| 4 | harjoitustyön vaihe 1 (suunnitelma versiohallinnassa) |
| 5 | debuggausnäyte |
| 7 | harjoitustyön vaihe 2 (50 %) |
| 8 | harjoitustyön vaihe 3 (100 %), tentti |

## Luennot

Luentosivut (`src/luennot/luentoN.md`) on säilytetty kevään 2026
numeroinnilla ja linkitetty osiin aiheen mukaan (`src/luennot/index.md`).
Uuden toteutuksen luentosuunnitelma tehdään erikseen; tavoite on 2 luentoa
osaa kohti.

## Seuraavat askeleet (vaihe B)

1. Osat 1–2: täydennä 1.1, laajenna 2.3–2.5 (tyyppimuunnokset, suoritusjärjestys,
   totuustaulut), kirjoita tehtävät `<task>`-lohkoina.
2. Osa 3: kirjoita 3.2–3.5.
3. Osa 4: kirjoita 4.1–4.3 loppuun, 4.5.
4. Osat 5–8 ja liitteet.
5. TIM: demot 1–8 uuden jaon mukaan; tehtävien TIM-linkit lukuihin.

## Luvun rakenne (sovittu 2.9.2026)

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
5. **Yhteenveto**: 3–5 luotia.
6. **Testaa tietosi** (sovittu 2.9.2026): 2–3 totta/tarua-väittämää ja 1–2
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
tervetulleita (esim. pankkiirin pyöristys, Gangnam Style ja `int`-yläraja),
kunhan ne eivät hidasta asiaa. Lisätiedot `<details>`-lohkoihin, ei
leipätekstiin.
