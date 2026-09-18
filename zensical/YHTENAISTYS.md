# Työkalujen yhtenäistäminen: tilanne

Tavoite: `zensical/`-työkalut (convert.py, puhe.py, assets, overrides, testit)
ovat yksi kopio repossa [kirjatyokalut](https://github.com/ohj-perus-jy/kirjatyokalut),
ja kirjat (ohj1, ohj2, jypelidocs) käyttävät sitä git-submodulena. Tätä
tiedostoa päivitetään jokaisen askeleen yhteydessä; se siirtyy lopuksi
työkalurepoon.

Kopiot: **o1r** = ohj1 `rakenne-2027`, **o1d** = ohj1 `dev` = `main`
(tuotanto), **o2** = ohj2 `dev`, **jy** = jypelidocs `main` (= `dev`).

Merkit: ✔ on, ✘ puuttuu, – ei koske.

## Vaihe 1 — erot umpeen käsin: VALMIS 2026-09-18

| # | Asia | o1r | o1d | o2 | jy |
|---|---|---|---|---|---|
| 1 | Testaa tietosi -visa (`convert_quizzes`, visa.css/js) | ✔ | ✔ | ✔ | ✔ |
| 2 | Oppaiden merkinnät (Kokeile, Ei toimi vielä, Kysymys) | ✔ | ✔ | ✔ | ✔ |
| 3 | Vaiheittainen ohje, animaatiot, puhe.py | ✔ | ✔ | ✔ | ✔ |
| 4 | `convert.py --strict`, `FAILED.add("plantuml")`, pages.yml | ✔ | ✔ | ✔ | ✔ |
| 5 | `svgbob_fit_text`, `svgbob_problems` | ✔ | ✔ | ✔ | ✔ |
| 6 | Valikoiden välkyntä pois (fontmenu, sitemenu, layout) | ✔ | ✔ | ✔ | ✔ |
| 7 | Hakuikkunan tyyli (search.css/js, test_search.py) | ✔ | ✔ | ✔ | ✔ |
| 8 | Sivustovalikon koodi (sitemenu.css/js, header.html) | ✔ | ✔ | ✔ | ✔ |
| 9 | Luvun avausnuoli alas/ylös kaikilla leveyksillä (layout.css) | ✔ | ✔ | ✔ | ✔ |
| 10 | Taulukon teksti leipätekstin kokoiseksi (tables.css) | ✔ | ✔ | ✔ | ✔ |
| 11 | Ajonappi: C#, `feature-`-määre, kuvatuloste (playground.js/css) | ✔ | ✔ | ✔ | ✔ |
| 12 | Kielilistat ja `ICON_MAP` ylijoukoksi, kommentit samoiksi | ✔ | ✔ | ✔ | ✔ |

`diff -rq` kopioiden välillä (2026-09-18) näyttää enää nämä:

- convert.py: `NEST_UNDER`, `NOT_PAGES`, `DROP_SECTIONS`, `PLANTUML_AGENT`
- puhe.py: User-Agent; run.sh: esimerkkisivun nimi kommentissa
- mkdocs.yml: `site_name`, `site_url`, `copyright`, `repo_url`, `extra.sites`
  (ohj2:ssa ei listaa, joten valikkoa ei näy; nimi on linkki etusivulle)
- testit, jotka riippuvat edellisistä: test_convert.py (fixture o2:ssa ja
  jy:ssä), test_book.py, test_sitemenu.py (puuttuu o2:sta)
- ohj2:n `assets/plantuml/` (kirjan sisältöä)
- dokumentit: README, PERUSTELUT, KAYTTOONOTTO, PURKUSUUNNITELMA, tämä tiedosto

o1r ja o1d ovat työkaluiltaan tavulleen samat (ero vain tämä tiedosto).

## Vaiheet 2–3 — tehdään kerran kirjatyokalut-repossa (päätös 2026-09-18)

Repo perustetaan puhtaalla aloituscommitilla o1r:n työkaluista (historia jää
ohj1:een), ja vaiheet tehdään siellä omina committeinaan koekirjalla testaten.

- [ ] aloituscommit: o1r:n `zensical/` ilman kirjan omia tiedostoja
      (`cache/`, mkdocs.yml:n sivustorivit, ohj1:n dokumentit)
- [ ] `kirja.toml` + lataus `tomllib`illa; vakioiden nimet säilyvät
- [ ] puhe.py:n User-Agent asetuksista
- [ ] polut kahtia: työkalut (skriptit, assets, icons, overrides) ja kirja
      (kirja.toml, mkdocs.yml, cache/, docs/, nav.yml)
- [ ] PlantUML-kuvat kirjan puolelle (`cache/plantuml/`), ei työkalujen `assets/`iin
- [ ] mkdocs.yml:n yhteinen osa työkalujen pohjasta generoituun `nav.yml`iin
- [ ] koekirjalle oma mkdocs.yml ja kirja.toml, jolloin test_sitemenu.py ja
      test_convert.py ovat samat kaikille
- [ ] test_book.py: kirjan omat poikkeukset (`KNOWN_BROKEN_IMAGES`) asetuksista
- [ ] run.sh ja setup.sh toimimaan kirjan hakemistosta käsin
- [ ] `SVGBOB_CHAR_WIDTH` 8,4 → 8 (CSS tekee merkistä tasan 8 px), README mukaan
- [ ] `svgbob_problems`: ei varoitusta tarkoituksella piirretystä soikiosta `( -148)`
- [ ] README: yhteinen osa työkaluihin; kirjan oma (tarkistuslistat,
      KAYTTOONOTTO, PURKUSUUNNITELMA) jää kirjaan
- [ ] oma CI: testit koekirjalla joka pushilla

## Vaihe 4 — kirjat submoduleen (`zensical/tyokalut/`)

- [ ] jypelidocs `main` ja `dev`
- [ ] ohj2 `dev`
- [ ] ohj1 `rakenne-2027`
- [ ] ohj1 `dev` + `main` (tuotanto)
- [ ] joka kirjassa: pages.yml `submodules: true` ja uudet polut; devcontainer
      ja run.sh päivittävät submodulen; vanhat kopiot pois

## Avoimet kysymykset

- Merkinnän otsikko "Kokeile käynnistää pelisi" on Jypeli-sanastoa; ohj2:ssa
  outo. Yleisempi oletus vai kirjan oma otsikko `kirja.toml`issa?
- ohj2:n sivustovalikon lista päätetään, kun ohj2:n Zensical menee tuotantoon.

## Havainnot

- Ajonappi: palvelin ajaa Javan ilman `multifile`-kenttää (kokeiltu
  2026-09-18), joten ohj1:n playground.js kävi ohj2:een sellaisenaan.
- Testit kääntävät koekirjan repon omalla mkdocs.yml:llä (`copy_book`), joten
  test_sitemenu.py riippuu kirjan `site_name`sta ja `extra.sites`-listasta.
- ohj2: `svgbob_problems` varoittaa aiheetta sivulla
  `osa6/02-kokoelmien-kasittely-stream-api.md`, jossa `( -148)` on tarkoituksella
  piirretty soikio. Pelkkä varoitus.
- jypelidocsin pages.yml kääntää samalla ajolla sekä `main`in että `dev`in.
  `--strict` kaatoi julkaisun 2026-09-18, koska `dev`in vanha convert.py ei
  tuntenut lippua; korjaantui, kun `dev` pikakelattiin `main`iin. Sama koskee
  submodulen käyttöönottoa: jokaisen haaran, jonka pages.yml kääntää, pitää
  siirtyä samalla kertaa.
- README:n visakohta viittaa tiedostoon `../curriculum/rakenne.md`, jota ei
  ole ohj1:n `dev`/`main`-haaroissa.

## Päiväkirja

| Pvm | Mitä | Commitit |
|---|---|---|
| 2026-09-18 | visa → o2, jy | ohj2 `dev`, jypelidocs `15a656c` |
| 2026-09-18 | merkinnät → o1r, o1d, o2 | ohj1 `e195fd6`, `c5201f6`; ohj2 `e25fc4a` |
| 2026-09-18 | vaiheittainen ohje + puhe.py → o2 | ohj2 `50eb16d` |
| 2026-09-18 | `--strict` → o2, jy | ohj2 `99ebba9`, jypelidocs `cf6edd1` |
| 2026-09-18 | svgbob-korjaukset → o2, jy | ohj2 `ed1c32b`, jypelidocs `520c2a0` |
| 2026-09-18 | haku + välkyntä pois → o1r (poimittu devistä) | ohj1 `0499d89`, `3e4f981` |
| 2026-09-18 | välkyntä pois → o2 (rinnakkainen istunto) | ohj2 `71e2560` |
| 2026-09-18 | sivustovalikon koodi, ajonappi, taulukot, nuoli, kielilistat → o2 | ohj2 `81d2093` |
| 2026-09-18 | visa + svgbob-korjaukset → o1d (tuotanto) | ohj1 `3167de3`, `7d39912` |
| 2026-09-18 | jypelidocsin julkaisu kaatui `--strict`iin, `dev` pikakelattu | jypelidocs `dev` = `520c2a0` |
