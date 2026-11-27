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

- [ ] demo12 (Extra-bonusdemo): tutkimuskyselyn linkki osoittaa kevään 2025
      loppukyselyyn (`…/ohj1/v/2025/kevat/kyselyt/loppukysely`). Päivitä, kun
      uusi loppukysely on tehty.
- [ ] demo8 B4-5 ("Jypeli-sivujen siirtäminen TIMiin") on tehtävänä
      vanhentunut: päätä poisto tai uudelleenkirjoitus. Linkki osoittaa nyt
      jypeli.it.jyu.fi:n juureen.
- [ ] TIM-demojen linkit kirjaan, kun kirjan luvut valmistuvat. Demot
      viittaavat yhä TIM-monisteeseen (`…/itkp102/materiaali/moniste#…`, noin
      130 linkkiä) sekä TIMin ViLLE-, Tauno- ja QA-sivuihin ja
      `jypeli-voimia`-harjoitukseen (demo3 B1), joille ei ole vastinetta
      kirjassa. Vuosikohtaiset esimerkkilinkit: demo3 T6 (gitlab 2022k
      Lumiukko.cs, jätetty ennalleen), demo5 T3 ja demo8 T4-5 (gitlab 2026s,
      vanhenevat esimerkkirepon vaihtuessa). Vanhentuneiden linkkien kartoitus
      käytiin loppuun 2026-11-27 ja `tim-demot-vanhat-linkit.md` poistettiin
      (viimeisin versio commitissa ce08935). Tuoreen tilanteen saa hakemalla
      demot `~/apps/tim-api-py`:llä (`get_document_markdown`, `get_par`,
      `edit_paragraph`).
