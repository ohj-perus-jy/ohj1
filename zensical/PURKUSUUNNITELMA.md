# Purkusuunnitelma: mitä `convert.py`:stä voi poistaa

Lähdepuu `../src` on yhä mdBookin syntaksia, ja `convert.py` kääntää sen joka
ajolla Zensicalille. Sivulla lukee `> [!VINKKI]`, kunnes joku kirjoittaa sen
uusiksi. Lähdettä saa muokata vapaasti, mutta se on tehtävä erikseen, eikä
joka kohdassa kannata. Tämä tiedosto vastaa yhteen kysymykseen: mitkä
`convert.py`:n vaiheista voi poistaa heti, mitkä vasta lähdettä muokkaamalla
ja mitkä eivät koskaan.

Työkalut ovat kirjoille yhteiset (submodule `tyokalut/`), joten muunnoksen voi
poistaa `convert.py`:stä vasta, kun se on ajettu jokaisen kirjan lähteeseen.

Käyttöohjeet ovat [tyokalut/README.md](tyokalut/README.md):ssä, tehtyjen
ratkaisujen perustelut [PERUSTELUT.md](tyokalut/PERUSTELUT.md):ssä.
Kohtanumerot viittaavat [TAUSTA.md](tyokalut/TAUSTA.md):n tarkistuslistaan.
Vaiheet 1–5 ovat `convert.py`:n `main`in järjestys: kopiointi (`sync_docs`),
sivukohtaiset muunnokset, assetit, navigaatio ja tulostussivu, jäänteiden
siivous. Esiintymäluvut ovat ohj2:n lähteestä (10.9.2026).

**Tämä on päättelyä nykyisestä koodista, ei mitattua eikä kokeiltua.**
Toisin kuin PERUSTELUT.md, jossa jokaisen kohdan takana on todennus, tässä ei
ole vielä ajettu mitään. Luvut ovat mitattuja, päätelmät eivät.

## Taustaksi: vaihtoehdot A, B ja C

Alla viitataan kahdesti PERUSTELUT.md:n vaihtoehtoihin. Tässä ne lyhyesti,
jotta sitä lukua ei tarvitse etsiä.

`zensical serve` seuraa `docs/`-hakemistoa, jonka `convert.py` kirjoittaa, ei
lähdepuuta `../src`. Kolme tapaa saada kesken kirjoittamista tehty muutos
näkymään selaimessa:

**A. Lähde pysyy nykyisenä, `convert.py` jää ja sen ympärillä on vahti.**
`run.sh` käynnistää `convert.py --watch`:n palvelimen rinnalle, ja tallennus
riittää. **Tämä on nykytila.** Koko kierros tallennuksesta selaimen
päivittymiseen on 2,3 s.

**B. Käännetään kerran ja `docs/` committoidaan uudeksi lähdepuuksi.**
Muunnoksia ei silloin ole lainkaan. Hylätty, koska hinta on kohtuuton juuri
laskettavissa merkinnöissä: kirjoittaisit käsin
`` ```{ .java data-hidden="1 3" data-hl-green="2" } `` ja laskisit rivinumerot
itse — ja numeroisit ne uudelleen joka kerta kun lisäät rivin lohkon alkuun.
Merkintä `// HIGHLIGHT_GREEN_BEGIN` on olemassa juuri siksi, ettei numeroita
tarvitse kirjoittaa.

**C. Sivukohtaiset muunnokset siirretään Python-Markdown-laajennukseksi.**
Merkinnät käännettäisiin silloin sivua renderöitäessä eikä ennalta: ei
erillistä komentoa, ei `docs/`-kopiota, ja `serve` seuraisi suoraan lähdettä.
Kirjoittaja kirjoittaa edelleen `// HIGHLIGHT_GREEN_BEGIN`, ja rivinumerot
lasketaan joka renderöinnillä uudelleen — eli C säilyttää sen, minkä B menettää.

### Miten C tehtäisiin

Tie on tarkistettu Zensicalin koodista. **Yleistä plugin-rajapintaa ei ole:**
`config.py` tuntee vain kovakoodatun listan MkDocs-liitännäisiä, eikä MkDocsin
`hooks:`-avainta tueta lainkaan. Mutta `markdown_extensions` menee sellaisenaan
Python-Markdownille (`zensical/markdown/render.py`), joten oma laajennus
latautuu nimellä:

```yaml
markdown_extensions:
  - ohj2.highlights
```

Laajennuksen on oltava `.venv`:stä importattavissa. Muunnokset olisivat
esikäsittelijöitä (`Preprocessor`), koska ne katsovat raakoja rivejä ennen
jäsennystä — samaa työtä kuin `mark_highlights` ja `hide_lines` tekevät nyt.

Nopeus ei ole syy tehdä C:tä (A:n kierros on 2,3 s). Ainoa syy on
`docs_dir: src`, joka säilyttäisi sivujen sisäiset linkit, kuvapolut,
`edit_uri`:n ja Gitin historian koskemattomina. Alla oleva luku *Seuraus*
näyttää, että kohdan 1 jälkeen C on paljon halvempi kuin nyt.

## 1. Poistuu heti

Nämä eivät ole syntaksin kääntämistä vaan kiertoteitä mdBookin rajoitteiden
ympäri. Rajoitteita ei enää ole, joten ne puretaan suoraan lähteessä.

**`NEST_UNDER`** — `kirja.toml`:n `[siirrot]`. `SUMMARY.md` ei salli
etulinkkien sisäkkäisyyttä, Zensical sallii. Siirrä `tenttiohjeet.md`
`tentti/`-hakemistoon lähteessä, ja mukana lähtevät `nest_moves`, `sync_docs`:n siirtologiikka **ja**
`build_extra`:n koko `edit_source`-polkukartta — jälkimmäinen on olemassa vain
siksi, että siirretyn sivun muokkauslinkki löytäisi takaisin.

**`build_nav`** — koko navigaatio. `SUMMARY.md` poistetaan, ja `nav.yml`
kirjoitetaan käsin ja otetaan versionhallintaan.

Yksi asia ei poistu tämän mukana: **lukujen numerointi** (kohta 10). Numerot
eivät ole lähteessä, vaan `build_nav` laskee ne sijainnista, eikä Materialissa
ole vastinetta. Joko numerot kirjoitetaan `nav.yml`:n otsikoihin käsin ja
ylläpidetään käsin, tai `nav.yml` pysyy numeroimattomana järjestyslistana ja
12 riviä koodia laskee ne. Tämä on ainoa kohta, jossa käsin kirjoitettu
navigaatio on aidosti huonompi kuin generoitu.

## 2. Poistuu kertaluontoisella lähteen uudelleenkirjoituksella

Nämä yhdeksän ovat puhdasta syntaksin kääntämistä: yhdestä merkinnästä
toiseen, ilman että mitään lasketaan. Ne voi ajaa lähteeseen kerran ja
committoida — se on **vaihtoehto B** rajattuna vain niihin
kohtiin, joissa se ei maksa mitään.

| Kohta | Muunnos               | Esiintymiä              | Lähteeseen kirjoitettaisiin           |
| ----- | --------------------- | ----------------------- | ------------------------------------- |
| 4     | `convert_fences`      | 392 aitaa               | `{ .java .ignore }`                   |
| 7     | `convert_alerts`      | 75 lohkoa               | `!!! tip "Vinkki"`                    |
| 8     | `convert_details`     | 143 tagia + 6 summarya  | `<details markdown="1">`              |
| 13    | `convert_anchors`     | 6 linkkiä + 1 otsikko   | `#kaytto` ja `## Otsikko {#tunnus}`   |
| —     | `drop_breaks`         | 10 riviä                | ei mitään, rivit vain pois            |
| 25    | `convert_divs`        | 9 tagia                 | `<div class="ht-reqs" markdown="1">`  |
| 17    | `convert_icons`       | 58 nuolta, 22 kuvaketta | `›` ja `:material-menu:`              |
| 17    | `convert_bonus_marks` | 30 merkkiä              | ks. alla                              |
| 23    | `convert_tabs`        | 9 joukkoa               | `=== "Windows"`                       |

Kolme tarkennusta:

**`convert_fences` ei poistu kokonaan, vaan halkeaa.** Attribuuttien
kääntäminen (`java,ignore` → `{ .java .ignore }`) on kertatyötä, mutta saman
funktion sisällä laskettavat piilorivit (142 lohkoa, `hide_lines`) ja
korostukset (79 lohkoa, `mark_highlights`) eivät ole — ne kuuluvat kohtaan 3.

**`convert_anchors` ajetaan lähteeseen kuten muutkin:** kuusi linkkiä
riisuttuun muotoon (`#käyttö` → `#kaytto`) ja yksi välilyönti otsikon tunnuksen
eteen (`{#tunnus}`). Zensical riisuu ääkköset otsikon tunnuksesta itse
(`id="ensimmainen-javafx-sovellus"`), joten ankkurit ovat samat kuin nykyisessä
`docs/`:ssä, joka kääntyy varoituksetta.

**Ikonilyhenne toimii ilman konfiguraatiota.** Zensicalin emoji-indeksi
(`zensical/extensions/emoji.py`, `_load_twemoji_index`) indeksoi jokaisen SVG:n
teeman `templates/.icons/`-hakemistosta nimellä `:material-menu:`, eli
`ICON_MAP`:n arvot ovat suoraan kirjoitettavissa lähteeseen ja koko `icons/`-
hakemisto sekä sitä vahtiva testi jäävät pois. Bonusmerkki on poikkeus: se ei
ole teeman ikoni vaan oma polku, joten se vaatii joko inline-SVG:n lähteeseen
tai `custom_icons`-hakemiston ja `attr_list`-luokan kullan säilyttämiseksi.

## 3. Jää

### Merkinnät, joissa lähteen syntaksi on parempi kuin kohde

Näissä uudelleenkirjoitus olisi tappio, koska merkintä on olemassa juuri siksi,
ettei kirjoittajan tarvitse laskea:

- **`hide_lines` (142 lohkoa) ja `mark_highlights` (79 lohkoa)** — muuten
  kirjoittaisit `data-hidden="1 3"` käsin ja numeroisit rivit uudelleen joka
  kerta kun lisäät rivin lohkon alkuun. Tämä on se argumentti, jolla
  vaihtoehto B kokonaisuudessaan hylättiin.
- **`convert_files`** — 73 lohkoa, 194 tiedostoa. `// FILE:` on yksi rivi;
  välilehtijoukko on kehys jokaisen tiedoston ympärillä.
- **`convert_tasks`** — 169 korttia. Sama asia isommassa mittakaavassa.
- **`convert_includes`** — 190 makroa. Ainoa neljästä, jolle on valmis
  vastine: `pymdownx.snippets` (`--8<--`) ei ole Zensicalin oletuslistalla,
  mutta `markdown_extensions` menee sellaisenaan Python-Markdownille. Tämä
  kannattaa tarkistaa erikseen — rivivalinnat (`take_lines`) on katettava.

### Kirjan tason työ, jota Zensical ei tee

- **`build_print_page`** (kohta 24) — tulostussivua ei ole olemassa ilman
  tätä, eikä MkDocsin tulostusliitännäisiä voi ottaa avuksi.
- **`convert_plantuml` (21 kaaviota), `convert_svgbob` (12) ja
  `prune_diagrams`** — piirtäminen ei ole teeman ominaisuus.
- **Vaihe 3 (assetit)** niin kauan kuin ne ovat `docs_dir`:n ulkopuolella.

## Seuraus: vaihtoehto C:n hinta romahtaa

Vaiheet **1 ja 5** — kopiointi ja jäänteiden poisto — eivät poistu millään
yllä olevalla. Ne kuolevat vain, jos `docs_dir: src`, mikä on TAUSTA.md:n
jäljellä oleva avoin kysymys, ja se taas edellyttää että jäljelle jäävät
sivukohtaiset muunnokset siirtyvät renderöintiin Python-Markdown-laajennuksena
(**vaihtoehto C**).

Tässä on koko juttu. PERUSTELUT.md toteaa vaihtoehto C:stä, ettei kaikkea voi
siirtää, ja luettelee neljä kirjan tason estettä: navigaatio, tulostussivun
runko, PlantUML-kuvien haku ja `NEST_UNDER`-siirrot. Kohdan 1 jälkeen tuosta
listasta jää jäljelle **yksi ja puoli**:

- Navigaatio poistuu kohdan 1 mukana.
- `NEST_UNDER` poistuu kohdan 1 mukana.
- PlantUML ei ollutkaan kirjan tason työtä: `convert_plantuml` ja
  `convert_svgbob` ottavat parametrikseen yhden sivun tekstin. Vain
  `prune_diagrams` on koko puun asia, ja se on kertaluontoinen siivous.
- Tulostussivun runko jää. Se tarvitsee koko `nav`-lohkon.

Eli vaihtoehto C ei tarkoita kohdan 1 jälkeen enää sitä, että käännösaskel
jäisi puolitiehen. Se tarkoittaa laajennusta plus muutamaa kymmentä riviä,
jotka ajetaan vain rakenteen muuttuessa — ei jokaisen tallennuksen jälkeen.
Silloin vahtia (`--watch`) ei tarvita, koska `zensical serve` seuraa suoraan
lähdepuuta.

## Vaiheiden kohtalo yhtenä taulukkona

| Vaihe                              | Kohtalo                                                           |
| ---------------------------------- | ----------------------------------------------------------------- |
| 1. `sync_docs`                     | vasta `docs_dir: src`:n myötä, joka edellyttää vaihtoehto C:tä    |
| 2. sivun 13 muunnosta              | 8 uudelleenkirjoituksella, 5 jää (ks. yllä)                       |
| 3. assetit                         | jää, ellei niitä siirretä `docs_dir`:n sisään                     |
| 4. `build_nav`                     | poistuu heti                                                      |
| 4. `build_extra` `edit_source`     | poistuu heti (`NEST_UNDER`:n mukana)                              |
| 4. `build_extra` `tab_labels`      | poistuu välilehtien uudelleenkirjoituksen mukana                  |
| 4. `build_print_page`              | jää                                                               |
| 5. jäänteiden poisto               | vaiheen 1 mukana                                                  |
| 5. `prune_diagrams`                | jää                                                               |
| vahti (`--watch`)                  | vaiheen 1 mukana: ilman `docs/`-kopiota ei ole mitään vahdittavaa |

## Järjestys

Kohta 1 ensin: se on pieni, ja se poistaa kolme asiaa kolmesta eri tiedostosta
kerralla. Kohta 2 sen jälkeen yhtenä committina per muunnos, jotta lähteen
diff pysyy luettavana. Vasta sitten kannattaa punnita vaihtoehto C, koska
vasta silloin tietää, kuinka pieni jäljelle jäävä joukko oikeasti on.

Ja jos vaihtoehto C jää tekemättä, mikään yllä olevasta ei mene hukkaan:
`convert.py` on silloin kolmanneksen lyhyempi ja tekee vain sitä, mitä Zensical
ei osaa.
