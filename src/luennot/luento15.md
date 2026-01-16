
# 15. luento: C#-kielen tyyppijärjestelmästä 
 
 * **Lue:** [8.3 Oliotietotyyppien ja alkeistietotyyppien ero](https://tim.jyu.fihttps://tim.jyu.fi/view/kurssit/tie/itkp102/materiaali/moniste#WbRwxc1yrw0v)
 * **Bonustietoa**: (Erään laskutavan mukaan) x86-64 arkkitehtuurille käännetty ohjelma voi käyttää [noin 600 erilaista reksiteriä](https://blog.yossarian.net/2020/11/30/How-many-registers-does-an-x86-64-cpu-have)
   * Rekisterit jaetaan eri kategorioihin niiden käyttötavan mukaan ([esimerkki x86-64 arkkitehtuurin rekistereistä kategorioittain](https://sandpile.org/)
   * Osa on ns. alirekisterejä, eli ne ovat osa isompaa rekisteriä
   * Suuri osa on myös sellaisia, jotka ohjaavat prosessorin toimintaa
   * Tavallinen x86-64 -arkkitehtuurille käännetty tietokoneohjelma käyttää lasketaan lopuksi noin 20-40 [yleisrekisteriä ja niiden alirekistereitä](https://sandpile.org/x86/gpr.htm), liukulukurekistereitä ja nykyään jotain vektorirekistereitä
   * Oikeasti fyysisellä CPU-piirillä olevien rekisterien määrä on hyvinkin mallikohtainen
   * Asiaa sekoittaa sekin, että x86-64 arkkitehtuurille on olemassa kaksi päätoteutusta, joilla on pieniä yksityiskohtaeroja: Intel x86-64 ja AMD64

## Syksy 2025

 * 📺 Katso tallenne ([YouTube](https://youtu.be/-foKfrDMp9s), [Moniviestin](https://moniviestin.jyu.fi/fi/ohjelmat/itkp102-ohjelmointi-1-syksy-2025/luento-15))
 * [📊 Kalvot (lyhennetty)](https://gitlab.jyu.fi/tie/ohj1/2025s/esimerkit/-/tree/main/Luento15/Luento15-mini.pdf), [📊 Kalvot (täydet)](https://gitlab.jyu.fi/tie/ohj1/2025s/esimerkit/-/tree/main/Luento15/Luento15.pdf)
 * [🧾 Koodit](https://gitlab.jyu.fi/tie/ohj1/2025s/esimerkit/-/tree/main/Luento15)
