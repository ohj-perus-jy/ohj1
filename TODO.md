# TODO

Siirto mdBookista Zensicaliin on tehty: tuotannossa 2026-09-15, mdBook
poistettu 2026-09-18. Vaiheet ja päätökset ovat gitin historiassa
(`git log -p -- TODO.md`). Haarat ja työtavat: [CONTRIBUTING.md](CONTRIBUTING.md).
Merkkauksen siirto mdBookin syntaksista Zensicalin omaan ja työkalujen avoimet
asiat: `zensical/tyokalut/YHTENAISTYS.md`.

## Aineisto

- [ ] `debuggausnayte.md`, *Palautus videona*: numeroitu lista katkeaa, koska
      `<details>`-lohkot ovat rivin alussa kohtien 1 ja 2 jälkeen. Zensical
      numeroi 1, 1, 1, 2. Korjaus: lohkot kohtiensa alle neljän välilyönnin
      sisennyksellä, kuten *Palautus ohjauksessa* -välilehdellä (r. 161).
- [ ] `src/exercises/1-8-1-bonus_editorin_kayttaminen/handout.md:9`:
      `https://ohjelmointi1.it.jyu.fi/harjoitustyo.html` antaa 404:n, oikea on
      `…/harjoitustyo/`. Osoite on tehtävän tekstiä (koodilohkossa, joten
      lychee ei näe sitä). Tarkista TIMin pohjatiedosto ja mallivastaus samalla.

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
      ryhmät C–F (noin 65 riviä) ja `comtest-examples` (6). Ryhmää A
      (moniste) ei korjata.
- [ ] Linkkitarkistus on punainen `main`issa 2026-09-25 alkaen:
      `luennot/luento10.md` (r. 8), Moniviestin-tallenne 404. Ajastettu
      TIM-ajo: demo3 ja demo4 → `materiaali/aliohjelmienKirjoittaminen` 404.
