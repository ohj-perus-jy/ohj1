# Zensical

Ohjelmointi 1 -materiaalin sivusto rakennetaan **Zensicalilla** (Material for
MkDocsin tekijöiden generaattori). Lähdepuu on `../src`.

Työkalut (`convert.py`, `puhe.py`, tyylit, skriptit, teeman mallit, testit)
ovat git-submodule [`tyokalut/`](https://github.com/ohj-perus-jy/kirjatyokalut),
yhteinen ohj2:n ja Jypeli-ohjeiden kanssa:

- ominaisuudet, käyttö, asetukset, työkalujen muuttaminen ja testit:
  [tyokalut/README.md](tyokalut/README.md)
- ratkaisujen perustelut: [tyokalut/PERUSTELUT.md](tyokalut/PERUSTELUT.md)
- mistä ominaisuudet tulivat ja mitä ohj1 toi ohj2:n koeputkeen (tämän
  tiedoston aiempi sisältö): [tyokalut/TAUSTA.md](tyokalut/TAUSTA.md)
- merkkauksen siirto mdBookin syntaksista Zensicalin omaan (mikä on tehty ja
  mikä jää) ja avoimet kysymykset:
  [tyokalut/YHTENAISTYS.md](tyokalut/YHTENAISTYS.md)

Mitä ohj1:ssä on vielä tekemättä: [../TODO.md](../TODO.md).

## Käynnistys

```bash
./zensical/run.sh              # http://localhost:8001, vahtii ../src:ää
./zensical/run.sh 8003         # eri portti
./zensical/run.sh build        # pelkkä rakennus site/-hakemistoon
./zensical/run.sh test         # testit: koekirja ja tämä kirja
./zensical/run.sh puhe         # ääneenluvun leikkeet (kirja.toml: [puhe]) ja
                               # vaiheittaisen ohjeen äänet; --teksti ei tee ääniä
```

Ääneenluku tarvitsee Azure Speech -avaimen (`AZURE_SPEECH_KEY`,
`AZURE_SPEECH_REGION`). Leikkeet ovat erillisessä repossa
[ohj1-puhe](https://github.com/ohj-perus-jy/ohj1-puhe), jonka `puhe` kloonaa
kansioon `zensical/puhe/` ja johon se pushaa uudet leikkeet; julkaisu hakee
sen samaan kansioon.

Kloonin tai haaran vaihdon jälkeen submodule haetaan komennolla
`git submodule update --init` (`run.sh` tekee sen itse, jos hakemisto on
tyhjä). `git pull` ja `git switch` eivät päivitä submodulea;
`git config submodule.recurse true` korjaa sen tässä kloonissa. `run.sh`
huomauttaa, jos `tyokalut/` on eri versiossa kuin haara odottaa.

**Muokattava puu on `../src`, ei `docs/`.**

## Tämän kirjan omat tiedostot

- `kirja.toml`: kirjan asetukset työkaluille. Tehtävien aloituspohjat eivät
  ole sivuja (`ei_sivuja`).
- `mkdocs.yml`: `site_name`, `site_url`, `copyright`, `repo_url` ja
  sivustovalikon lista (`extra.sites`). Teema, tyylit ja skriptit tulevat
  työkalujen `mkdocs-pohja.yml`:stä generoidun `nav.yml`:n kautta.
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
viedään molempiin samalla työnnöllä (merge-commit, ks.
../CONTRIBUTING.md).
