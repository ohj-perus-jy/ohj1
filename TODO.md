# TODO

Siirto mdBookista Zensicaliin on tehty: tuotannossa 2026-09-15, mdBook
poistettu 2026-09-18. Vaiheet ja päätökset ovat gitin historiassa
(`git log -p -- TODO.md`). Haarat ja työtavat: [CONTRIBUTING.md](CONTRIBUTING.md).
Merkkauksen siirto mdBookin syntaksista Zensicalin omaan ja työkalujen avoimet
asiat: `zensical/tyokalut/YHTENAISTYS.md`.

## Kehitysympäristö

- [ ] `ohj-mdbook-tooling` arkistoon (*Settings* › *Archive*), kun
      containerapps ei enää käytä sitä (`git grep mdbook-tooling --
      .devcontainer .github` tyhjä). Ohj1 ja ohj2 vaihtoivat 2026-10-01
      jypelidocsin malliin: `python:3.11-bookworm` ja Rust-feature. GHCR-paketteja ei poisteta: vanhat
      commitit viittaavat tageihin `:devcontainer-latest` ja `:runner-latest`.

## Merkkaus

- [ ] Lähde Zensicalin merkintätapaan YHTENAISTYS.md:n taulukon mukaan.
      Ei odota mitään; tehty on siirrot (`NEST_UNDER`) 2026-09-21.

## Linkit

- [ ] TIM-demojen vanhentuneet linkit: `tim-demot-vanhat-linkit.md`. Auki
      ryhmät D (16 riviä) ja F (15). Ryhmä E (Jypeli, 11 + 2 taulukosta
      puuttunutta) korjattu 2026-10-25 jypeli.it.jyu.fi:hin; demo8 B4-5
      ("Jypeli-sivujen siirtäminen TIMiin") on tehtävänä vanhentunut, päätä
      poisto tai uudelleenkirjoitus. `comtest-examples`-linkit korjattu
      2026-10-25 kirjan ComTest-sivulle (2D-taulukot) tai poistettu (THROWS);
      demo6 T4:n liukulukulinkki on julkisessa kommentissa, ei dokumentissa. Ryhmästä C
      korjattiin 2026-10-25 tim-api:lla koodauskäytänteet, tekstieditori ja
      tentti; jäljellä ViLLE (8), Tauno (3), QA (2) ja jypeli-voimia (1), joille
      ei ole vastinetta kirjassa — jätetään toistaiseksi. Ryhmää A (moniste)
      ei korjata. Muokkaus: `~/apps/tim-api-py` (`get_par`, `edit_paragraph`).
