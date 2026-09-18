# Työkalujen yhtenäistäminen: tilanne

Tavoite: `zensical/`-työkalut (convert.py, puhe.py, assets, overrides, testit)
ovat yksi kopio repossa [kirjatyokalut](https://github.com/ohj-perus-jy/kirjatyokalut),
ja kirjat (ohj1, ohj2, jypelidocs) käyttävät sitä git-submodulena. Tätä
tiedostoa päivitetään jokaisen askeleen yhteydessä; se siirtyy lopuksi
työkalurepoon.

Kopiot: **o1r** = ohj1 `rakenne-2027`, **o1d** = ohj1 `dev` = `main`
(tuotanto), **o2** = ohj2 `dev`, **jy** = jypelidocs `main`.

Merkit: ✔ on, ✘ puuttuu, – ei koske.

## Vaihe 1 — erot umpeen käsin

| # | Asia | o1r | o1d | o2 | jy |
|---|---|---|---|---|---|
| 1 | Testaa tietosi -visa (`convert_quizzes`, visa.css/js) | ✔ | ✘ | ✔ | ✔ |
| 2 | Oppaiden merkinnät (Kokeile, Ei toimi vielä, Kysymys) | ✔ | ✔ | ✔ | ✔ |
| 3 | Vaiheittainen ohje, animaatiot, puhe.py | ✔ | ✔ | ✔ | ✔ |
| 4 | `convert.py --strict`, `FAILED.add("plantuml")`, pages.yml | ✔ | ✔ | ✔ | ✔ |
| 5 | `svgbob_fit_text`, `svgbob_problems` | ✔ | ✘ | ✔ | ✔ |
| 6 | Valikoiden välkyntä pois (fontmenu, sitemenu, layout) | ✔ | ✔ | ✔ | ✔ |
| 7 | Hakuikkunan tyyli (search.css/js, test_search.py) | ✔ | ✔ | ✔ | ✔ |
| 8 | Sivustovalikko (sitemenu.css/js, header.html, `extra.sites`) | ✔ | ✔ | ✘ | ✔ |
| 9 | Luvun avausnuoli alas/ylös kaikilla leveyksillä (layout.css) | ✔ | ✔ | ✘ | ✔ |
| 10 | Taulukon teksti leipätekstin kokoiseksi (tables.css) | ✔ | ✔ | ✘ | ✔ |
| 11 | Ajonappi: C#, `feature-`-määre, kuvatuloste (playground.js/css) | ✔ | ✔ | ✘ | ✔ |
| 12 | Kielilistat ja `ICON_MAP` ylijoukoksi, kommentit samoiksi | ✔ | ✔ | ✘ | ✔ |
| 13 | `SVGBOB_CHAR_WIDTH` 8,4 → 8 (CSS tekee merkistä 8 px) | ✘ | – | – | – |

Vaiheen lopussa `diff -r` kopioiden välillä näyttää vain asetukset
(`NEST_UNDER`, `NOT_PAGES`, `DROP_SECTIONS`, `PLANTUML_AGENT`, puhe.py:n
User-Agent), mkdocs.yml:n sivustokohtaiset rivit ja dokumentit.

## Vaihe 2 — asetukset `kirja.toml`iin

- [ ] `kirja.toml` + lataus `tomllib`illa; vakioiden nimet säilyvät
- [ ] puhe.py:n User-Agent asetuksista
- [ ] sama convert.py, puhe.py ja tests/ joka kopiossa (tavulleen)

## Vaihe 3 — työkalut ja kirja eri hakemistoihin

- [ ] polut kahtia: `TOOL` (skriptit, assets, icons, overrides) ja `BOOK`
      (kirja.toml, mkdocs.yml, cache/, docs/, nav.yml)
- [ ] ohj2:n PlantUML-kuvat pois `assets/plantuml/`:sta kirjan puolelle
- [ ] mkdocs.yml:n yhteinen osa työkalujen pohjasta generoituun `nav.yml`iin
- [ ] README, PERUSTELUT, KAYTTOONOTTO: yhteinen osa työkaluihin, kirjan oma jää

## Vaihe 4 — kirjatyokalut-repo ja submodule

- [ ] repo täyteen (historia ohj1:n `zensical/`-hakemistosta), oma CI testeille
- [ ] jypelidocs `main` submoduleen
- [ ] ohj2 `dev` submoduleen
- [ ] ohj1 `rakenne-2027`, `dev`, `main` submoduleen
- [ ] pages.yml: `submodules: true`; devcontainer ja run.sh: submodulen päivitys

## Avoimet kysymykset

- Merkinnän otsikko "Kokeile käynnistää pelisi" on Jypeli-sanastoa; ohj2:ssa
  outo. Yleisempi oletus vai kirjan oma otsikko `kirja.toml`issa?
- Sivustovalikko ohj2:een (rivi 8): mitkä sivustot listaan?

## Havainnot

- Tilanne 2026-09-18 illalla: jy:n convert.py eroaa o1r:stä enää kolmen
  asetusvakion verran, ja o1r:n `assets/` on sama kuin jy:n.
- Ajonappi: palvelin ajaa Javan ilman `multifile`-kenttää (kokeiltu
  2026-09-18), joten ohj1:n playground.js käy ohj2:een sellaisenaan.
- Testit kääntävät koekirjan repon omalla mkdocs.yml:llä (`copy_book`), joten
  test_sitemenu.py riippuu kirjan `site_name`sta ja `extra.sites`-listasta ja
  on jy:ssä eri kuin ohj1:ssä. Vaiheessa 3 koekirjalle oma mkdocs.yml.
- ohj2: `svgbob_problems` varoittaa aiheetta sivulla
  `osa6/02-kokoelmien-kasittely-stream-api.md`, jossa `( -148)` on tarkoituksella
  piirretty soikio. Pelkkä varoitus; ehto kaipaa tarkennusta.
- ohj2:n PlantUML-kuvat ovat työkalujen `assets/plantuml/`:ssa; muissa kirjoissa
  kaavioita ei ole. Siirto kirjan puolelle vaiheessa 3.

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
