# Zensical

Ohjelmointi 1 -materiaalin sivusto rakennetaan **Zensicalilla** (Material for
MkDocsin tekijöiden generaattori). Lähdepuu on `../src`.

Työkalut (`convert.py`, `puhe.py`, tyylit, skriptit, teeman mallit, testit)
ovat git-submodule [`tyokalut/`](https://github.com/ohj-perus-jy/kirjatyokalut),
yhteinen ohj2:n ja Jypeli-ohjeiden kanssa:

- käyttö, asetukset, työkalujen muuttaminen ja testit:
  [tyokalut/README.md](tyokalut/README.md)
- ratkaisujen perustelut: [tyokalut/PERUSTELUT.md](tyokalut/PERUSTELUT.md)
- mitä ominaisuuksia on ja mitä ohj1 toi ohj2:n koeputkeen (tämän tiedoston
  aiempi sisältö): [tyokalut/TAUSTA.md](tyokalut/TAUSTA.md)
- työkalujen yhtenäistämisen tilanne: [tyokalut/YHTENAISTYS.md](tyokalut/YHTENAISTYS.md)

Mitä ohj1:ssä on vielä tekemättä: [../TODO.md](../TODO.md).
[KAYTTOONOTTO.md](KAYTTOONOTTO.md) ja [PURKUSUUNNITELMA.md](PURKUSUUNNITELMA.md)
ovat ohj2:n alkuperäiset: työjärjestys tuotantoon ja se, mitä `convert.py`:stä
poistuu, kun mdBook puretaan. Niiden viittaukset README:n tarkistuslistaan ja
PERUSTELUT.md:hen tarkoittavat nyt työkalujen TAUSTA.md:tä ja PERUSTELUT.md:tä.

## Käynnistys

```bash
./zensical/run.sh              # http://localhost:8001, vahtii ../src:ää
./zensical/run.sh 8003         # eri portti
./zensical/run.sh build        # pelkkä rakennus site/-hakemistoon
./zensical/run.sh test         # testit: koekirja ja tämä kirja
./zensical/run.sh puhe ../src/git-ht-ohje.md   # vaiheittaisen ohjeen äänet
```

Kloonin tai haaran vaihdon jälkeen submodule haetaan komennolla
`git submodule update --init` (`run.sh` tekee sen itse, jos hakemisto on
tyhjä). `git pull` ja `git switch` eivät päivitä submodulea;
`git config submodule.recurse true` korjaa sen tässä kloonissa. `run.sh`
huomauttaa, jos `tyokalut/` on eri versiossa kuin haara odottaa.

**Muokattava puu on `../src`, ei `docs/`.**

## Tämän kirjan omat tiedostot

- `kirja.toml`: kirjan asetukset työkaluille. Tenttiohjeet siirretään
  Tentti-sivun ja Git-HT-ohje Git-sivun alle (`[siirrot]`), etusivulta
  poistetaan mdBookin käyttöliittymää kuvaava osio (`[poistettavat_osiot]`),
  eivätkä tehtävien aloituspohjat ole sivuja (`ei_sivuja`).
- `mkdocs.yml`: `site_name`, `copyright`, `repo_url` ja sivustovalikon lista
  (`extra.sites`). Teema, tyylit ja skriptit tulevat työkalujen
  `mkdocs-pohja.yml`:stä generoidun `nav.yml`:n kautta.
- `cache/svgbob/`: kirjan bob-kaaviot (svgbob_cli 0.7.6,
  `cargo install svgbob_cli@0.7.6`). Kuvat ovat versionhallinnassa, koska
  julkaisu ei asenna svgbobia: uusi tai muutettu kaavio piirretään
  paikallisesti (`./zensical/run.sh build`) ja syntynyt tiedosto committoidaan.
  Julkaisun `convert.py --strict` kaatuu, jos kuva puuttuu.
- `run.sh`: kääre, joka kutsuu `tyokalut/run.sh`:ta.

## Työkalujen päivittäminen

```bash
git -C zensical/tyokalut pull origin main
git add zensical/tyokalut && git commit -m "Työkalut: ..."
```

Jokainen haara kiinnittää oman työkaluversionsa. `.github/workflows/pages.yml`
kääntää samalla ajolla `main`in ja `dev`in, joten rakennetta koskeva muutos
viedään molempiin samalla työnnöllä (merge-commit, ks. ../TODO.md).
