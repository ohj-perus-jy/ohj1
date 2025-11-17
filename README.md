# JYU — Ohjelmointi 1 oppimateriaali

[![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

## Alustus

- Asenna Rust ja Cargo (esim. rustup) TAI käytä mukana olevaa DevContaineria
- Aja ´update-mdbook.sh´ asentaakseen tarvittavat laajennokset

## Kehittäminen

```bash
mdbook serve --hostname 0.0.0.0 --port 3000 --open
```

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



## License

Ohjelmointi 1 oppimateriaali © 2025 by Denis Zhidkikh, Sami Sarsa, Antti-Jussi Lakanen is licensed under
[Creative Commons Attribution-ShareAlike 4.0 International][cc-by-sa].

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg