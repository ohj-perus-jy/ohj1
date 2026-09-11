# TODO: Zensical ohj1:ssä

`zensical/` on kopio ohj2:n `zensical/`-hakemistosta (ohj2 `dev`, commit
`164510d`, 2026-09-11) ohj2:n `zensical/KAYTTOONOTTO.md`:n vaiheen 7
mukaisesti. `main` on yhä mdBook; Zensical elää `dev`-haarassa. Tähän on
kirjattu se, mikä ohj1:ssä ei toimi tai on tekemättä, vaikka ohj2:ssa
toimii, sekä kopioon tehdyt ohj1-kohtaiset muutokset.

Tila 2026-09-11: `./zensical/run.sh build` kääntyy (18 varoitusta, kaikki
aineiston omia rikkinäisiä linkkejä, ks. kohta 3), `./zensical/run.sh test`
menee läpi: 209 passed, 3 skipped (ohitukset ovat ominaisuuksia, joita ohj1
ei käytä, ks. kohta 8).

## Ei toimi tai tekemättä ohj1:ssä, toimii ohj2:ssa

1. **Julkaisu Pagesiin (`/dev/`).** `.github/workflows/pages.yml` on
   ohj2:n kaksoisjulkaisu (mdBook `main`ista juureen, Zensical `dev`:stä
   `/dev/`:iin), mutta se on vasta `dev`-haarassa. Kuten ohj2:n
   KAYTTOONOTTO.md vaihe 2 sanoo, tiedoston on oltava sama `main`issa ja
   `dev`:ssä, ja se on vietävä **ensin `main`iin** (muuten `main`-push ajaa
   vanhan työnkulun ja pyyhkii `/dev/`:n). Lisäksi GitHubissa: Settings →
   Environments → `github-pages` → Deployment branches → lisää `dev`.
   Ohj1:n sivusto on `ohj-perus-jy.github.io/ohj1/` (ei omaa domainia);
   Zensicalin polut ovat suhteellisia, joten alipolku `/ohj1/dev/` ei
   haittaa, mutta sitä ei ole vielä todennettu.
2. **`origin/dev` on jo olemassa** ja on eri asia: vanha sisältöhaara
   (2026-04-10, commitit "Task colors" ja "Part 1 improvements"; `main` on
   61 committia sen edellä). Uusi `dev` on tehty paikallisesti `main`in
   päälle eikä sitä ole pushattu. Ennen pushia on päätettävä, korvataanko
   vanha `origin/dev` (force push) vai nimetäänkö toinen uudelleen.
3. **Aineiston rikkinäiset linkit** (ohj2 korjasi omansa `main`iin PR:llä
   #118; ohj1:ssä korjaamatta). Kaikki ovat rikki myös mdBookin
   käännöksessä (tarkistettu `mdbook build`in tulosteesta), joten korjaus
   kuuluu `src`:ään ja `main`iin, ei `zensical/`-hakemistoon. Testit
   ohittavat ne toistaiseksi (`tests/test_book.py`: `KNOWN_DEAD_ANCHORS`,
   `KNOWN_BROKEN_IMAGES`).
   - Ankkurit, joita ei ole: `tyokalut.md` `#rider-settings` (3 kpl),
     `git.md` `#credentials`, `harjoitustyo.md` `#muukuinpeli` ja
     `#miten-saan-taulukon-...-idprt6kcamnzha` (3 kpl),
     `harjoitustyo.md` → `osa1/2-ohjelmointiymparisto-kuntoon.md#konfigurointi-ja-laajennokset`,
     `harjoitustyo.md` → `git.md#tehtyjen-muutosten-lahettaminen-etavarastoon-push`
     ja `#muutosten-hakeminen-etavarastosta-paikalliseen-varastoon-pull`
     (otsikoilla on omat tunnukset `{#push}`, `{#pull}`),
     `exercises/1-8-1-bonus_editorin_kayttaminen/` `#todo_lisaa_kuva` ja
     `#lisaa_osoite`, `osa4/osa4.md` `#-sanakirja`.
   - Sivut, joita ei ole: `debuggausnayte.md` → `tuki-ja-palaute.md`,
     `osa1/1-ensimmainen-ohjelma.md` → `../tyokalut/tyokalut.md`,
     `osa2/1-ohjelman-rakenne.md` → `../osa3/1-aliohjelmat.md`,
     `osa4/index.md` → `osa4/comtest.md` (pitäisi olla `comtest.md`).
   - Kuvat, joita ei ole: `tyokalut.md` `/images/506961/rider-install-comtest.gif`
     ja `/images/876452/image.png` (absoluuttinen polku, tiedostoja ei ole
     `src`:ssä).
   - Käänteinen linkkisyntaksi `harjoitustyo.md`:ssä:
     `(./index.md#tuki-ja-palaute)[etusivu]` näkyy tekstinä.
4. **Ajonapin kuvatuloste (Jypeli) on todentamatta.** ohj1:n mdBook-skripti
   (`theme/playground_ext.js`) lähettää ` ```csharp,feature-jypeli `-lohkon
   kielenä `csharp-jypeli` ja näyttää tulosteen `@@@DATA_URI_BEGIN@@@`-kuvat
   `<img>`-elementteinä. Sama on toteutettu `zensical/assets/js/playground.js`:ään,
   mutta sitä ei ole ajettu oikeaa suorituspalvelinta vasten
   (`lakane.it.jyu.fi/executor`), eikä testeissä ole C#-lohkoa (kohta 8).
   Kuvalle ei ole omaa tyyliä (`img.jyu-result-image`).
5. **JYU-paletti ja ACE-editori** on ohj2:ssakin siirretty myöhemmäksi
   (README kohdat 18 ja 20). ohj1:ssä ei ole yhtään `editable`-lohkoa,
   joten ACE ei ole ohj1:lle kysymys lainkaan.
6. **`> [!LISATIETO]`-alertti** (yksi, `src`:ssä) ei ole ohj2:n listalla;
   lisätty `convert.py`:n `ALERT_KINDS`-tauluun tyyppinä `info`, otsikko
   "Lisätieto". mdBookin `theme/alerts-style.css` ei tunne tunnusta, joten
   värille ei ole esikuvaa: tarkista ulkoasu tai vaihda tunnus `src`:ssä.
7. **KaTeX**: `book.toml` lataa `mdbook-katex`in, mutta `src`:ssä ei ole
   yhtään kaavaa (`$$`, `\\(`). Ei tehty mitään; jos kaavoja tulee,
   Zensicaliin tarvitaan `pymdownx.arithmatex` + KaTeX (README kohta 21).
8. **Testikirja (`zensical/tests/book`) on Java.** Selaintestit ajavat
   koekirjaa Java-aidoilla, joten ohj1:n C#-erityispiirteet (piilorivit
   `csharp`-aidassa, `feature-jypeli`, kuvatuloste) eivät ole testien
   piirissä. Oikean aineiston testit (`tests/test_book.py`) ohittavat nyt
   kolme ohj2:n ominaisuutta, joita ohj1 ei käytä: korostusmerkinnät
   (`HIGHLIGHT_*`), vaatimuslohkot (`ht-reqs`) ja asciinema-nauhoitukset.
9. **Lychee-linkintarkistus** (`.github/workflows/links.yml`,
   `.lycheeignore`) ja `cs-refresh.yml` ovat ohj2:n `main`issa, eivät osa
   `zensical/`-hakemistoa; ei kopioitu.
10. **`.devcontainer/devcontainer.json`**: vain portti 8001 lisätty. Kuvan
    vaihto `python:3.11-bookworm`-vakiokuvaan kuuluu vasta vaihtoon
    (KAYTTOONOTTO.md vaihe 6). Nykyisessä kuvassa `python3`:sta puuttuu
    `ensurepip`, joten `setup.sh` asentaa `python3-venv`in aptilla (vaatii
    sudon, toimi devcontainerissa).
11. **`README.md`, `CONTRIBUTING.md`**-maininnat Zensicalista puuttuvat
    (ohj2:ssakin vasta vaihdon yhteydessä).

## Havaittu molemmissa (ei ohj1-kohtaista, mutta ohj1:ssä näkyvämpi)

- **Sisäkkäiset listat litistyvät.** Python-Markdown vaatii alakohdalle
  4 välilyönnin sisennyksen; CommonMark (mdBook) hyväksyy 2–3. ohj1:n
  luentosivut (` * ` ja `   * `) ja `harjoitustyo.md` menettävät
  sisäkkäisyyden (esim. `luennot/luento4.md`, `luento15.md`); ohj2:ssa sama
  koskee mm. `osa5/jemma.md`:ää ja `osa8/04-useita-nakymia.md`:ää. Kaksi
  vaihtoehtoa: sisennys 4:ään `src`:ssä (toimii mdBookissakin) tai
  `mdx_truly_sane_lists`-laajennus `mkdocs.yml`:n `markdown_extensions`-listaan
  (Zensical 0.0.60 lukee listan; ei kokeiltu).

## Ohj1-kohtaiset muutokset ohj2:n kopioon

Yleiskäyttöiset kohdat kannattaa viedä myös ohj2:een (KAYTTOONOTTO.md:
"korjaukset viedään käsin molempiin").

- `zensical/mkdocs.yml`: `site_name`, `copyright` (tekijät READMEn License-
  kohdasta), `repo_url`.
- `zensical/convert.py`:
  - `HIDELINE_LANGUAGES` ja `HIGHLIGHT_LANGUAGES`: `csharp` mukaan (java ja
    javascript jäävät koekirjan takia).
  - `ALERT_KINDS`: `lisatieto`. `ICON_MAP`: `bi-arrow-left-circle`,
    `bi-arrow-right-circle` (glyfit `icons/material/`). `PLANTUML_AGENT`.
  - `SUMMARY_LINK_RE` hyväksyy `*`-luettelomerkin, ja `build_nav` laskee
    tason sisennyspinosta (ohj1: 1, 3 ja 4 välilyöntiä) eikä jakamalla
    kahdella; etulinkki on aina ylin taso. *Yleiskäyttöinen.*
  - Uusi `convert_moved_links`: linkit NEST_UNDER-siirrettyihin sivuihin
    (`index.md` ja `suorittaminen.md` → `tentti.md`) ja siirretyn sivun omat
    suhteelliset linkit. ohj2:ssa kukaan ei linkitä `tentti.md`:hen, joten
    siellä puute ei näkynyt. *Yleiskäyttöinen.*
  - Uusi `dedent_headings`: 1–3 välilyönnillä sisennetty otsikko (CommonMark
    sallii, Python-Markdown ei; ohj1: `osa5/1-debuggaus.md`,
    `luennot/luento16.md`). Vaihtoehto: poista välilyönnit `src`:ssä.
    *Yleiskäyttöinen.*
- `zensical/assets/js/playground.js`: `csharp` kieliin, `feature-*`-määre
  kielen perään, kuvatuloste (kohta 4).
- `zensical/tests/test_convert.py`: testit yllä oleville.
  `zensical/tests/test_book.py`: `*`-luettelomerkki, `source_uses`-ohitukset,
  ohj1:n `KNOWN_BROKEN_IMAGES` ja `KNOWN_DEAD_ANCHORS`.
- `zensical/README.md`: ohj1-johdanto; muu teksti ja luvut ovat ohj2:n.
  `PERUSTELUT.md`, `PURKUSUUNNITELMA.md`, `KAYTTOONOTTO.md` sellaisenaan.
- `zensical/cache/svgbob/`: ohj1:n kolme bob-kaaviota (svgbob_cli 0.7.6);
  ohj2:n kaaviot ja `assets/plantuml/` jätetty pois. `svgbob_cli`
  asennettiin `cargo install svgbob_cli@0.7.6`.
- `.gitignore`: `zensical/`-rivit. `.devcontainer/devcontainer.json`:
  portti 8001. `.github/workflows/pages.yml`: ohj2:n versio (kohta 1).
