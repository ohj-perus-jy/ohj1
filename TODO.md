# TODO: Zensical ohj1:ssä

`zensical/` on kopio ohj2:n `zensical/`-hakemistosta (ohj2 `dev`, commit
`164510d`, 2026-09-11) ohj2:n `zensical/KAYTTOONOTTO.md`:n vaiheen 7
mukaisesti. `main` on mdBook, Zensical elää `dev`-haarassa. Mitä kopioon on
muutettu ohj1:tä varten: `zensical/README.md`, kohta "Ohj1-kohtaiset
muutokset". Tila 2026-09-11: `./zensical/run.sh build` kääntyy,
`./zensical/run.sh test` menee läpi (209 passed, 3 skipped).

## Vaihe 1 — `dev`-haara ja julkaisu `/dev/`:iin

- [x] `dev`-haara `main`in päälle, `zensical/` kopioitu ohj2:sta (2026-09-11).
- [x] GitHub: Settings → Environments → `github-pages` → Deployment branches:
      `dev` lisätty (2026-09-11).
- [x] `dev` pushattu originiin; vanha, eri sisältöinen `origin/dev`
      (2026-04-10) korvattu (2026-09-11).
- [x] `.github/workflows/pages.yml` `main`iin (cherry-pick `15a640f`,
      mukana `.gitignore` ja portti 8001 kuten ohj2:n vaihe 0), sitten
      `main` → `dev` (`b9d4582`). Tiedosto on sama molemmissa (2026-09-11).
- [x] Todenna `dev`-pushin ajo: neljä jobia vihreitä, myös
      `mdbook-dev-check` (ajo 34589621298, 2026-09-11).
- [x] Todenna `ohjelmointi1.it.jyu.fi/dev/` (sivusto on omassa domainissaan
      kuten ohj2, `ohj-perus-jy.github.io/ohj1/` ohjaa sinne): tyylit ja
      skriptit latautuvat, `tentti/` ja `tulosta/` vastaavat 200, juuri on
      yhä mdBook (2026-09-11).
- [x] Ajonappi tulostaa `/dev/`:ssä. Ensimmäinen yritys aikakatkaistui:
      suorituspalvelimen C#-polku ei siedä kenttää `multifile: false`, jota
      ohj2:n skripti lähetti aina (Java sietää). Korjattu: kenttä lähtee
      vain monitiedostolohkoille (2026-09-11).
- [x] Todenna `main`-pushin jälkeen, että `/dev/` säilyy: ajo 34590494841
      vihreä (`mdbook`, `zensical`, `deploy`; `mdbook-dev-check` ohitetaan
      `main`issa), juuri on mdBook ja `/dev/` vastaa 200 (2026-09-11).

## Vaihe 2 — Aineiston korjaukset `main`iin

Alla olevat ovat rikki myös mdBookissa (tarkistettu `mdbook build`in
tulosteesta 2026-09-11), paitsi sivut, joita mdBook ei julkaise lainkaan
(`osa4/osa4.md` on kommentoitu pois SUMMARY:stä, `exercises/1-8-1-…` ei ole
sisällytetty mihinkään). Korjaus kuuluu `src`:ään ja `main`iin, sitten
`main` → `dev`.

- [x] Ankkurit, joita ei ole: `af8c653` suoraan `main`iin, `main` → `dev`
      (`06b6001`, 2026-09-11). mdBookissa rikkinäisiä 11 → 0, Zensicalissa varoituksia
      14 → 1 (`pohja.md`, alla).
  - [x] `tyokalut.md`: `#rider-settings` (3 linkkiä): otsikosta oli tullut
        `<details>` (`db3bf52`); `id` lohkoon
  - [x] `git.md`: `#credentials`: `id` lohkoon "Push ei onnistu"
  - [x] `harjoitustyo.md`: `#muukuinpeli`: `id` UKK-lohkoon
  - [x] `harjoitustyo.md`: `#miten-saan-taulukon-...-idprt6kcamnzha` (3 linkkiä):
        `#taulukko-silmukka-funktio`
  - [x] `harjoitustyo.md` → `osa1/2-ohjelmointiymparisto-kuntoon.md#konfigurointi-ja-laajennokset`:
        osio siirtyi (`9a763f0`), nyt `tyokalut.md#jetbrains-rider`
  - [x] `harjoitustyo.md` → `git.md#tehtyjen-muutosten-lahettaminen-etavarastoon-push`
        ja `#muutosten-hakeminen-etavarastosta-paikalliseen-varastoon-pull`:
        nyt `#push` ja `#pull`
  - [x] `exercises/1-8-1-bonus_editorin_kayttaminen/handout.md`:
        `#todo_lisaa_kuva` tekstiksi
  - [x] `osa4/osa4.md`: `#-sanakirja`: osiota ei ole, linkki pois
- [ ] `exercises/1-8-1-…/starter/pohja.md`: `#lisaa_osoite` on tehtävän
      paikkamerkki, jonka opiskelija korvaa, joten `src`:hen ei kosketa.
      Zensical tekee jokaisesta `.md`:stä sivun, mdBook vain SUMMARY:n
      luvuista: jätä `exercises/*/starter/` pois Zensicalin käännöksestä
      (`dev`, `zensical/`).
- [x] `.gitignore`: `book` osui myös koekirjaan `zensical/tests/book`, joka
      ei siksi ollut gitissä, ja `run.sh test` kaatui puhtaassa checkoutissa.
      `book` → `/book` kuten ohj2:ssa (`2c05e5a`), mukana `af8c653`:ssa;
      koekirja palautettu ohj2:n `164510d`:stä `dev`iin (2026-09-11).
- [ ] Sivut, joita ei ole:
  - [ ] `debuggausnayte.md` → `tuki-ja-palaute.md`
  - [ ] `osa1/1-ensimmainen-ohjelma.md` → `../tyokalut/tyokalut.md`
  - [ ] `osa2/1-ohjelman-rakenne.md` → `../osa3/1-aliohjelmat.md`
  - [ ] `osa4/index.md` → `osa4/comtest.md` (pitäisi olla `comtest.md`)
- [ ] Kuvat, joita ei ole (`tyokalut.md`, absoluuttinen polku):
  - [ ] `/images/506961/rider-install-comtest.gif`
  - [ ] `/images/876452/image.png`
- [ ] `harjoitustyo.md`: käänteinen linkkisyntaksi
      `(./index.md#tuki-ja-palaute)[etusivu]` näkyy tekstinä.
- [ ] Sisäkkäiset listat: Python-Markdown vaatii alakohdalle 4 välilyöntiä,
      mdBook hyväksyy 2–3, joten `luennot/*.md` ja `harjoitustyo.md`
      litistyvät Zensicalissa. Joko sisennys 4:ään `src`:ssä (toimii
      mdBookissakin) tai `mdx_truly_sane_lists` `mkdocs.yml`:n
      `markdown_extensions`-listaan (ei kokeiltu). Sama puute ohj2:ssa.
- [ ] Sisennetyt otsikot (` ## …`) pois `osa5/1-debuggaus.md`:stä ja
      `luennot/luento16.md`:stä. `convert.py`:n `dedent_headings` hoitaa
      ne jo, joten tämä on vain siisteyttä.
- [ ] `> [!LISATIETO]` (yksi esiintymä): tarkista ulkoasu (`info`-tyyppi,
      ei esikuvaa mdBookin CSS:ssä) tai vaihda tunnus `src`:ssä.
- [ ] Kun korjattu: poista vastaavat poikkeukset
      `zensical/tests/test_book.py`:stä. `KNOWN_DEAD_ANCHORS` poistettu
      (2026-09-11); `KNOWN_BROKEN_IMAGES` odottaa kuvia.

## Vaihe 3 — C#-ominaisuuksien todennus

Testikirja (`zensical/tests/book`) on Java, joten ohj1:n C#-erityispiirteet
eivät ole testien piirissä.

- [x] Ajonappi oikeaa suorituspalvelinta vasten: tavallinen ` ```csharp `
      (2026-09-11, ks. vaihe 1).
- [ ] Sama ` ```csharp,feature-jypeli `-lohkolle (kieleksi lähtee
      `csharp-jypeli`).
- [ ] Jypelin kuvatuloste (`@@@DATA_URI_BEGIN@@@`) näkyy `<img>`-elementtinä;
      anna sille tyyli (`img.jyu-result-image`, `assets/css/playground.css`).
- [ ] Lisää koekirjaan C#-lohko (piilorivit `//-`, `ignore`, `feature-jypeli`)
      ja testit `test_playground.py`:hyn.

## Vaihe 4 — `dev` pysyy mergettävänä (säännöt, kuten ohj2:n vaihe 3)

- [ ] `main` → `dev` vähintään viikoittain ja aina ennen isompaa työtä.
      Ei rebasea, `dev` on julkaistu.
- [ ] Zensicalin työ pysyy `zensical/`-hakemistossa.
- [ ] `src/`:hen vain muutoksia, jotka toimivat myös mdBookissa; ne ensin
      `main`iin.
- [ ] mdBookin tiedostoihin ei kosketa `dev`:ssä (`book.toml`, `theme/`,
      `highlight/`, `mermaid/`, `start.sh`); `pages.yml` vain `main`in kautta.
- [ ] Yleiskäyttöiset `convert.py`-korjaukset viedään käsin myös ohj2:een
      (lista `zensical/README.md`:ssä).

## Vaihe 5 — Vaihto ja purku (ohj2:n KAYTTOONOTTO.md vaiheet 5–6)

Portti: `git merge-tree --write-tree origin/main origin/dev` → 0,
`mdbook-dev-check` vihreä, `run.sh test` läpi, juuri ja `/dev/` toimivat.

- [ ] PR `dev` → `main`; `pages.yml`: Zensical `main`ista juureen, mdBook-job pois.
- [ ] Vanhat `.html`-osoitteet menevät rikki (TIMin linkit, kirjanmerkit):
      päätä kuten ohj2:ssa.
- [ ] Poista mdBook: `book.toml`, `theme/`, `highlight/`, `mermaid/`,
      `start.sh`, `.vscode/tasks.json`:n ja `launch.json`:n mdBook-kohdat,
      devcontainerin nimi "Ohj1 mdBook" ja portti 3000.
- [ ] Devcontainer-kuva → `mcr.microsoft.com/devcontainers/python:3.11-bookworm`,
      `postCreateCommand`iin `zensical/setup.sh`. Nykyisessä kuvassa
      `python3`:sta puuttuu `ensurepip`, `setup.sh` asentaa sen aptilla.
- [ ] `README.md`, `CONTRIBUTING.md`: mdBook-maininnat pois, Zensical tilalle.
- [ ] KaTeX: `src`:ssä ei ole kaavoja, joten `mdbook-katex` jää pois ilman
      korvaajaa; jos kaavoja tulee, `pymdownx.arithmatex` + KaTeX.
- [ ] Harkitse ohj2:n `links.yml` (lychee) ja `.lycheeignore` kopiointia.
- [ ] Purku PURKUSUUNNITELMA.md:n järjestyksessä, sitten
      `grep -r mdbook-tooling .github .devcontainer` tyhjä ja
      `ohj-mdbook-tooling` arkistoon.
