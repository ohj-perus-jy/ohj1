Tee `Demo1`-solutioniin Fysiikkapeli-projekti `Maisema`, joka piirtää
maiseman. Suunnittele ensin: kirjoita `Begin`-aliohjelman alkuun kommentteina
vaiheittainen ohje siitä, mitä olioita piirrät ja missä järjestyksessä.
Myöhemmin lisätty olio piirtyy aiemman päälle.

Maisemassa pitää olla ainakin:

* **Taivas.** Vaihda taustaväri.
* **Maa.** Vihreä suorakulmio, joka on yhtä leveä kuin ikkuna ja peittää sen
  alimman neljänneksen. Ikkunan leveys ja korkeus ovat `Screen.Width` ja
  `Screen.Height`. Laske suorakulmion koko ja sijainti näistä
  laskutoimituksilla, älä kirjoita valmiita lukuja.
* **Aurinko.** Keltainen ympyrä, halkaisija 120, ikkunan oikeassa yläkulmassa
  niin, että se koskettaa kumpaakin reunaa. Käytä `Screen.Right`- ja
  `Screen.Top`-ominaisuuksia ja muista, että sijainti on olion keskipiste.
* **Kaksi omaa lisäystä**, esimerkiksi talo, puu tai kuu. Ainakin toinen
  seisoo maan päällä: sen alareuna on maan yläreunan kohdalla. Laske
  sijainti, älä kokeile.

Vihje: maan yläreuna on korkeudella `Screen.Bottom + Screen.Height / 4`.
Jos maa näyttää leijuvan tai uppoavan, tarkista, että käytit suorakulmion
*puolta* korkeutta keskipisteen laskemisessa.
