# JYU — Ohjelmointi 1 oppimateriaali

[![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

## Alustus

Materiaali on toteutettu **mdBookilla**. Suositeltu tapa on käyttää mukana
olevaa DevContaineria. Se käyttää valmista GHCR-kuvaa
`ghcr.io/ohj-perus-jy/ohj-mdbook-tooling:devcontainer-latest`, jossa mdBook ja
tarvittavat laajennokset ovat valmiiksi asennettuina.

Jos et halua käyttää DevContaineria (esimerkiksi nopeita muokkauksia tai et
halua ladata isoa DevContainer-kuvaa), voit sen sijaan käyttää pelkästään
mdBook-työkalun ja sen laajennokset sisältävää Docker-kuvaa
`ghcr.io/ohj-perus-jy/ohj-mdbook-tooling:runner-latest` (ks. [Kehittäminen](#kehittäminen)).

## Kehittäminen

Käynnistä kehityspalvelin projektin juuresta:

```bash
bash ./start.sh
```

Tämä avaa materiaalin selaimeesi (oletuksena localhost:3000) ja päivittää näkymän
automaattisesti, kun tallennat muutoksia.

Vaihtoehtoisesti voit käyttää pelkkää mdBook-työkalukuvaa ilman DevContaineria.
Esimerkiksi materiaalin koko rakentaminen yhdellä komennolla:

```bash
docker run --rm -v .:/workspace \
  ghcr.io/ohj-perus-jy/ohj-mdbook-tooling:runner-latest \
  build
```

tai materiaalin avaaminen paikallisesti:

```bash
docker run --rm -it -v .:/workspace -p 3000:3000 \
  ghcr.io/ohj-perus-jy/ohj-mdbook-tooling:runner-latest \
  serve --hostname 0.0.0.0 --port 3000
```

### mdBook-työkalukuvan päivittäminen

DevContainer käyttää valmista GHCR-kuvaa
`ghcr.io/ohj-perus-jy/ohj-mdbook-tooling:devcontainer-latest`. Jos mdBook-työkaluja
tai esikäsittelijöitä pitää päivittää, tee muutokset repossa
`ohj-perus-jy/ohj-mdbook-tooling` ja pushaa ne `main`-haaraan. `:devcontainer-latest`
on liikkuva tagi: jo käynnissä oleva DevContainer ei päivity automaattisesti.
Päivitetty kuva otetaan käyttöön esimerkiksi komennolla:

```bash
docker pull ghcr.io/ohj-perus-jy/ohj-mdbook-tooling:devcontainer-latest
```

tai VS Codessa komennolla `Dev Containers: Rebuild and Reopen in Container`.

- [mdBook-ohjeet](https://rust-lang.github.io/mdBook/index.html)

## Pikaohje kirjoittamiseen

#### Tehtävälohko

````md
<task>
  <task-title>Tehtävä T1*: Tulostaminen <points>1 p.</points> </task-title>
  <handout>

  {{#include ../exercises/1-1-1-tulostaminen/handout.md}}

  </handout>
  <task-link><a href="https://tim.jyu.fi/view/kurssit/tie/itkp102/demot/demo1#tehtava_tulostaminen_header">Tee tehtävä TIMissa</a></task-link>
</task>
````

### Koodin korostukset

Käytä merkintöjä `// HIGHLIGHT_COLOR_BEGIN` ja `// HIGHLIGHT_COLOR_END`, jossa COLOR on jokin seuraavista: `GREEN`, `YELLOW`, `RED`, `BLUE`.

````
```csharp
void Lumiukko()
{
    PhysicsObject pallo = new PhysicsObject(10, 10);
    // HIGHLIGHT_GREEN_BEGIN
    Add(pallo);
    // HIGHLIGHT_GREEN_END
}
```
```` 

## License

Ohjelmointi 1 oppimateriaali © 2025 by Denis Zhidkikh, Sami Sarsa, Antti-Jussi Lakanen is licensed under
[Creative Commons Attribution-ShareAlike 4.0 International][cc-by-sa].

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg