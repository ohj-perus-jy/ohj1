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
- [ ] `.github/workflows/pages.yml` `main`iin (PR tai suoraan), sitten
      `main` → `dev`. Tiedoston on oltava sama molemmissa: `main`-push ajaa
      `main`in version, ja vanha versio pyyhkisi `/dev/`:n.
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
- [ ] Todenna `main`-pushin jälkeen, että `/dev/` säilyy.

## Vaihe 2 — Aineiston korjaukset `main`iin

Kaikki alla olevat ovat rikki myös mdBookissa (tarkistettu `mdbook build`in
tulosteesta 2026-09-11), joten korjaus kuuluu `src`:ään ja `main`iin omana
PR:nä (ohj2: PR #118), sitten `main` → `dev`.

- [ ] Ankkurit, joita ei ole:
  - [ ] `tyokalut.md`: `#rider-settings` (3 linkkiä)
  - [ ] `git.md`: `#credentials`
  - [ ] `harjoitustyo.md`: `#muukuinpeli`
  - [ ] `harjoitustyo.md`: `#miten-saan-taulukon-...-idprt6kcamnzha` (3 linkkiä)
  - [ ] `harjoitustyo.md` → `osa1/2-ohjelmointiymparisto-kuntoon.md#konfigurointi-ja-laajennokset`
  - [ ] `harjoitustyo.md` → `git.md#tehtyjen-muutosten-lahettaminen-etavarastoon-push`
        ja `#muutosten-hakeminen-etavarastosta-paikalliseen-varastoon-pull`
        (otsikoilla on omat tunnukset `{#push}` ja `{#pull}`)
  - [ ] `exercises/1-8-1-bonus_editorin_kayttaminen/`: `#todo_lisaa_kuva`,
        `#lisaa_osoite`
  - [ ] `osa4/osa4.md`: `#-sanakirja`
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
      `zensical/tests/test_book.py`:stä (`KNOWN_DEAD_ANCHORS`,
      `KNOWN_BROKEN_IMAGES`).

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
