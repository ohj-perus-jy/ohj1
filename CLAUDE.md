@zensical/tyokalut/CLAUDE.md

# Ohjelmointi 1

Tietojenkäsittelytieteen Ohjelmointi 1 -kurssin materiaalit ja harjoitukset.
Materiaali on `src/`:ssä.

## Kirjan rakenne

- Jokainen osa on hakemistossa `src/osaN/`:
  - `index.md`: 2–3 virkkeen esittelykappale, `> [!Osaamistavoitteet]`-
    laatikko, luennot ja Käsitteet-taulukko.
  - 3–4 aliosaa (poikkeuksellisesti enemmän), tiedostot `1-nimi.md`,
    `2-nimi.md`, … Aliosan lopussa ovat otsikot `## Testaa tietosi`
    (visa) ja sen jälkeen `## Tehtävät`.
  - `tehtavat.md`: osan kaikki tehtävät taulukkona (tehtävä, aliosa,
    pisteet, palautuslinkki).
- Jokaisessa osassa on 15 tehtävää, jotka jaetaan aliosille,
  esimerkiksi 4 + 4 + 4 + 3. Numerointi juoksee osan läpi (1.1–1.15)
  aliosasta riippumatta. Tehtäviä on kahta lajia: tavallisia ja
  bonustehtäviä. Bonustehtävät kuuluvat samaan 15 tehtävän sarjaan, ja niiden
  kortin otsikkoon tulee merkki `<i class="bi bi-stars"></i>`, josta
  työkalut tekevät Bonus-liuskan:
  `<task-title num="1.14">Nimi <i class="bi bi-stars"></i><points>1 p.</points></task-title>`.
  Koko osan asioita yhdistävä tehtävä tulee viimeisen aliosan loppuun.
- Tehtävänanto on tiedostossa
  `src/tehtavat/<osa>-<tehtävä>-<nimi>/handout.md`, esim.
  `src/tehtavat/1-1-ymparisto-kuntoon/handout.md`. Aliosa sisällyttää sen
  tehtäväkortin `<handout>`-osaan
  (`{{#include ../tehtavat/1-1-ymparisto-kuntoon/handout.md}}`), joten
  tehtävänannon teksti on yhdessä paikassa. Tehtävän otsikko ja pisteet ovat
  sekä kortissa että `tehtavat.md`:n taulukossa. Include liittää tekstin
  sivuun sellaisenaan, joten handoutin linkit kirjoitetaan aliosan sivulta
  katsottuina (`../tyokalut.md`).
- Uusi käsite lisätään osan Käsitteet-taulukkoon (sarakkeet Käsite,
  Englanniksi, Selitys). Rivi on muotoa
  `| [käsite](./1-nimi.md) | *englanniksi* | selitys |`, ja linkki vie
  aliosaan, jossa käsite esitellään. `src/sanasto.md` kootaan taulukoista
  komennolla `python3 skriptit/sanasto.py`, ei käsin. Skripti järjestää
  myös osien taulukot suomen aakkosjärjestykseen.
- Uuden tekstin on sovittava kirjan kokonaisuuteen ja tyyliin. Käsite
  esitellään ennen kuin sitä käytetään; tarkista aiemmista osista ja
  aliosista, onko se jo esitelty.

## Kirjoitusasu

- Kieli on suomi. Englanninkielinen termi kerran suluissa ja kursiivilla,
  kun käsite esitellään: muuttuja (engl. *variable*).
- Vakiintuneet termit: TODO
- Älä toista sanoja "osa" ja "aliosa" tarpeettomasti äläkä viittaa turhaan
  eteen- tai taaksepäin. Lukija näkee rakenteen navigaatiosta ja otsikoista,
  joten tekstin ei tarvitse kertoa, missä osassa tai aliosassa ollaan:
  "Tässä aliosassa opit tulostamaan" → "Opit tulostamaan".
