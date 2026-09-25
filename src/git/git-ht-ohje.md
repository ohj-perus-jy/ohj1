# Harjoitustyön pohja vaiheittain

Tällä sivulla viedään harjoitustyön pohja versiohallintaan alusta loppuun: teet
kurssin pohjaprojektista oman kopion GitLabiin, haet sen koneellesi, kirjoitat
suunnitelman, lähetät sen takaisin GitLabiin ja lisäät lopuksi koodipohjan.
Kuva näyttää, mitä ruudulla tapahtuu, ja teksti kertoo, mitä sinun pitää tehdä.

Komentojen taustat on selitetty sivulla [Versiohallinta ja Git](index.md). 

Ohjeessa käytetään JY:n GitLabia (gitlab.jyu.fi). Jos sinulla ei ole
JY-tunnuksia, tee oma etävarasto GitHubiin, ks. [Oman etävaraston
luominen](index.md#fork).

<walkthrough scenes="../images/git-ht-ohje/scenes.js" audio="../images/git-ht-ohje/puhe">

## Oma etävarasto

<step scene="kirjaudu">

### Kirjaudu GitLabiin

Avaa Jyväskylän yliopiston GitLab-palvelu (<https://gitlab.jyu.fi>) ja kirjaudu **JYUNET**-välilehdellä
JY-käyttäjätunnuksellasi ja salasanallasi.

</step>

<step scene="pohjaprojekti">

### Avaa kurssin pohjaprojekti

Kirjoita osoiteriville kurssin pohjaprojektin osoite. 

```text
https://gitlab.jyu.fi/tie/ohj1/ohj1ht
```

Paina oikeasta yläkulmasta **Fork**. Fork tekee pohjasta sinulle oman kopion,
jossa on valmiina kurssin alkuasetukset.


</step>

<step scene="fork-nimiavaruus">

### Valitse kopiolle oma nimesi

Fork-lomakkeen **Project URL** -kohdassa valitaan, kenen alle kopio tulee.
Avaa pudotusvalikko ja valitse siitä oma nimesi.

> [!VAROITUS]
> Älä muuta **Project slug** -kohtaa. Sen pitää olla `ohj1ht`, muuten
> etävarastosi osoite ei ole sama kuin tämän ohjeen esimerkeissä.

</step>

<step scene="fork-nakyvyys">

### Kuvaus, julkinen näkyvyys ja fork

Kirjoita projektille lyhyt kuvaus. Valitse näkyvyydeksi **Public**, jotta
ohjaaja näkee työsi. Paina lopuksi **Fork project**.

</step>

<step scene="kopioi-osoite">

### Kopioi etävarastosi osoite

Oma kopiosi on nyt valmis. Avaa **Code**-valikko ja kopioi **Clone with HTTPS**
-kohdan osoite. Tarvitset sitä kloonauksessa ja TIMissä.

> [!HUOMAUTUS]
> Valitse HTTPS-osoite, älä SSH-osoitetta. SSH-osoitteella push ei onnistu
> ilman SSH-avainta.

</step>

## Kloonaus

<step scene="avaa-windows">

### Windows: avaa Git Bash

(macOS:ssä voit ohittaa tämän vaiheen.)


Paina tehtäväpalkin **Haku**-kenttää, kirjoita `git bash` ja valitse
hakutuloksista **Git Bash**. Avautuu komentorivi, jolla annetaan tämän ohjeen
komennot.

Jos Git Bashia ei löydy, asenna ensin [Git](../tyokalut.md#git). 
</step>

<step scene="avaa-macos">

### macOS: avaa Pääte

(Windowsissa voit ohittaa tämän vaiheen.)

Avaa Dockista **Launchpad**, kirjoita hakukenttään `Pääte` (englanninkielisessä
järjestelmässä `Terminal`) ja avaa **Pääte**. Linuxissa käytä jakelusi omaa
päätettä, ks. [Miten saan Gitin auki](index.md#miten-saan-gitin-auki).


</step>

<step scene="git-config">

### Kerro Gitille nimesi

Anna Git Bashissa (macOS: Päätteessä) nimesi ja sähköpostiosoitteesi. Git
liittää ne jokaiseen tekemääsi muutokseen.

```bash
git config --global user.name "Olli Opiskelija"
git config --global user.email "olli.o.opiskelija@student.jyu.fi"
```

Tämä tehdään kerran jokaisella tietokoneella, jolla teet harjoitustyötä.

</step>

<step scene="kansio">

### Tee harjoitustyölle kansio

Tee kansio, jossa harjoitustyösi on tällä koneella, ja siirry sinne. Jatkossa
kaikki git-komennot annetaan tässä kansiossa.

> [!HUOMAUTUS] 
> Jos olet jo aiemmin tehnyt kurssia varten `ohj1`-kansion (tai
> muun itse nimeämäsi kansion) muualle, siirry ensin sinne `cd`-komennolla ja
> tee harjoitustyön kansio vasta sitten. Git Bashissa Windowsin polku
> kirjoitetaan kauttaviivoin, esimerkiksi `C:\Opiskelu\ohj1` on
> `/c/Opiskelu/ohj1` (macOS: esimerkiksi `~/kurssit/ohj1`):
>
> ```bash
> cd /c/Opiskelu/ohj1
> mkdir -p harjoitustyo
> cd harjoitustyo
> ```

Muuten tee kansio kotikansiosi alle:

```bash
mkdir -p ohj1/harjoitustyo
cd ohj1/harjoitustyo
```

Git Bash aukeaa kotikansioosi (`~`), joten kansio tulee esimerkiksi polkuun
`C:\Users\olli\ohj1\harjoitustyo`. Paina sijainti mieleen: tarvitset sitä koko
harjoitustyön ajan.

</step>

<step scene="clone">

### Kloonaa etävarasto koneellesi

Kirjoita `git clone`, välilyönti ja liitä kopioimasi osoite. Loppuun tulee
vielä välilyönti ja piste: piste tarkoittaa ”tähän kansioon”.

```bash
git clone https://gitlab.jyu.fi/kayttajatunnus/ohj1ht.git .
```

> [!VINKKI]
> Git Bashissa liittäminen on <kbd>Shift</kbd> + <kbd>Insert</kbd>, ei
> <kbd>Ctrl</kbd> + <kbd>V</kbd>.

</step>

<step scene="ls">

### Katso, mitä kansioon tuli

Komento `ls -la` listaa kansion sisällön piilotiedostoineen.

```bash
ls -la
```

- `.git/` on paikallinen varasto: koko muutoshistoria on siellä.
- `suunnitelma/` on kansio suunnitelmalle ja sen kuville.
- `check.sh` tarkistaa, ettei kansion juureen ole eksynyt sinne kuulumattomia
  tiedostoja.
- `.gitignore` luettelee tiedostot, joita ei viedä versiohallintaan.

</step>

## Suunnitelma

<step scene="kuva">

### Siirrä kuva suunnitelma-kansioon

Siirrä tiedostonhallinnassa suunnitelmasi kuva (tai kuvat) kansioon
`ohj1/harjoitustyo/suunnitelma`. Avaa kuva tuplaklikkaamalla ja varmista, että
se on oikea.

Kuva saa olla enintään 1920 × 1080 pikseliä ja mieluiten alle 1 Mt.

</step>

<step scene="avaa-md-windows">

### Windows: avaa suunnitelma.md

(macOS:ssä voit ohittaa tämän vaiheen.)

Tuplaklikkaa tiedostonhallinnassa `suunnitelma.md`-tiedostoa. Windows ei
tunnista .md-tiedostoja valmiiksi, joten se kysyy, millä tiedosto avataan:
valitse **Muistio** ja paina **OK**. Jos koneellasi on jo Markdown-tiedostoille
editori, esimerkiksi Rider tai Visual Studio Code, tiedosto aukeaa suoraan
siinä, ja sekin käy.

> [!HUOMAUTUS]
> Uusi Muistio voi näyttää tiedoston muotoiltuna, jolloin `#`-merkit ja
> linkkien merkinnät eivät näy. Vaihda silloin näkymäksi Markdown-lähdekoodi
> (Näytä-valikosta tai ikkunan oikeasta alakulmasta), jotta näet merkinnät ja
> voit kirjoittaa niitä.

</step>

<step scene="avaa-md-macos">

### macOS: avaa suunnitelma.md

(Windowsissa voit ohittaa tämän vaiheen.)

Tuplaklikkaa Finderissa `suunnitelma.md`-tiedostoa. Se aukeaa TextEditissä.

> [!VAROITUS]
> Ota TextEditissä pois **Muokkaa › Korvaukset › Älykkäät lainausmerkit**
> ennen kirjoittamista. Muuten TextEdit muuttaa lainausmerkit kaareviksi
> (“ ”), eikä kuvalinkki toimi.

</step>

<step scene="suunnitelma">

### Kirjoita suunnitelma

Täytä tiedot ja poista kaikki suluissa olevat ohjetekstit. Mitä suunnitelmassa
pitää olla, kerrotaan [suunnitelman vaatimuksissa](../harjoitustyo.md#suunnitelma).
Tallenna tiedosto: <kbd>Ctrl</kbd> + <kbd>S</kbd> (macOS: <kbd>Cmd</kbd> +
<kbd>S</kbd>).

</step>

<step scene="kuvalinkki">

### Linkitä kuva oikein

Kuvalinkissä on kolme osaa: hakasulkeisiin kuvaileva teksti, kaarisulkeisiin
ensin tiedoston nimi ja sen perään lainausmerkeissä otsikko.

```markdown
![Hahmotelma pelistä](hahmotelma.png "Hahmotelma")
```

> [!VAROITUS]
> Tiedoston nimen pitää täsmätä kirjain kirjaimelta, myös isot ja pienet
> kirjaimet. Muuten GitLab ei näytä kuvaa.

</step>

## Tiedostot GitLabiin

<step scene="add-status">

### Muutosten vieminen paikalliseen varastoon 1 / 2 

`git add --all` merkitsee kaikki muutokset mukaan seuraavaan committiin.
Tarkista heti perään `git status`-komennolla, että mukana on vain se, mitä
pitääkin.

```bash
git add --all
git status
```

</step>

<step scene="commit">

### Muutosten vieminen paikalliseen varastoon 2 / 2

Commit tallentaa muutokset paikalliseen varastoon. Kirjoita lainausmerkkeihin
viesti, josta näkee, mitä muutit.

```bash
git commit -m "Suunnitelma ja hahmotelmakuva"
```

</step>

<step scene="token-asetukset">

### Avaa GitLabin asetukset

GitLabin etävarastoon ei voi lähettää muutoksia ilman tunnistautumista. Jotta
GitLab tietää, kuka olet, pitää luoda *pääsytunnus* (engl. *personal access token*).
Se tehdään GitLabin asetuksissa, jotka löytyvät oikeasta yläkulmasta oman kuvakkeesi alta **Preferences**.

</step>

<step scene="token-uusi">

### Avaa Personal access tokens -sivu

Valitse vasemmasta valikosta **Access › Personal access tokens**. Avaa
**Generate token** -valikko ja valitse **Legacy token**.

</step>

<step scene="token-luonti">

### Anna tunnukselle nimi ja oikeudet

Anna tunnukselle nimi, josta tunnistat koneen, esimerkiksi `ohj1-kotikone`.
Vaihda **Expiration date** -kohtaan päivä noin vuoden päähän: oletuksena
tunnus vanhenee jo kuukauden kuluttua. Valitse oikeuksista **read_repository**
ja **write_repository**, vieritä lomakkeen loppuun ja paina **Generate token**.

</step>

<step scene="token-kopioi">

### Kopioi pääsytunnus

GitLab näyttää tunnuksen vain tämän kerran. Kopioi se leikepöydälle ja pidä
sivu auki, kunnes push on seuraavassa vaiheessa onnistunut. 

Tunnusta ei tarvitse tallentaa minnekään: Windowsissa ja macOS:ssä Git muistaa
sen tällä koneella ensimmäisen pushin jälkeen (joka tehdään kohta). Jos teet
harjoitustyötä myös toisella koneella (tai suljet vahingossa sivun kopioimatta
pääsykoodia), joudut luomaan sille oma tunnus samalla tavalla. Jos kone katoaa,
poista sen tunnus GitLabin tunnuslistasta (**Revoke**); muiden koneiden
tunnukset toimivat edelleen.

> [!VAROITUS]
> Pääsytunnus on kuin salasana. Älä kirjoita sitä tekstitiedostoon,
> suunnitelmaan, koodiin tai viestiin.

</step>

<step scene="push">

### Lähetä muutokset etävarastoon

`git push` lähettää commitit GitLabiin. Ilman sitä muutokset ovat vain omalla
koneellasi.

```bash
git push
```

Ensimmäisellä kerralla Git kysyy tunnuksia.

- **Windows**: Git Credential Manager avaa kirjautumisikkunan. Valitse
  **Token** ja kirjoita käyttäjätunnuksesi. Pääsytunnusta ei kirjoiteta vaan
  liitetään: napsauta **Personal access token** -kenttää hiiren oikealla
  painikkeella ja valitse **Paste** (tai paina <kbd>Ctrl</kbd> + <kbd>V</kbd>).
  Kenttään tulee pelkkiä pisteitä. Windows muistaa tunnuksen, eikä sitä kysytä
  uudelleen.
- **macOS**: kirjautumisikkunaa ei ole, eikä tunnuksen ja salasanan välillä
  valita. Pääte kysyy ensin `Username`, johon kirjoitat käyttäjätunnuksesi, ja
  sitten `Password`, johon liität äsken tekemäsi pääsytunnuksen (<kbd>Cmd</kbd> +
  <kbd>V</kbd> ja <kbd>Enter</kbd>). Liitetty tunnus ei näy ruudulla. macOS
  tallentaa sen avainnippuun, eikä sitä kysytä uudelleen.
- **Linux**: kuten macOS:ssä, mutta Git kysyy tunnukset jokaisella pushilla,
  ellei tunnusten tallennusta ole otettu käyttöön.

> [!HUOMAUTUS]
> Kun pääsytunnus vanhenee vuoden päästä, push antaa virheen *Access denied*.
> Luo silloin uusi tunnus ja vaihda se vanhan tilalle, ks. [Push ei
> onnistu](index.md#credentials).

</step>

<step scene="gitlab-tulos">

### Tarkista tulos GitLabista

Avaa etävarastosi selaimessa ja siellä `suunnitelma`-kansio. Commitin viesti
ja kuva näkyvät listassa. Avaa vielä `suunnitelma.md` ja katso, että kuva
näkyy.

</step>

## Koodipohja

<step scene="rider-uusi">

### Tee koodipohja Riderissa

Valitse Riderissa **New Solution** ja vasemmalta **Custom Templates**
-kohdasta **Fysiikkapeli**.

- **Solution name**: pelisi nimi ilman ääkkösiä, esimerkiksi
  `PertinSeikkailut`
- **Project name**: sama nimi
- **Solution directory**: kloonattu harjoitustyökansio, eli juuri se kansio,
  jonka äsken kloonasit GitLabista, esimerkiksi
  `C:\Users\olli\ohj1\harjoitustyo`

Valitse **Put solution and project in the same directory**. Harjoitustyössä
on vain yksi projekti, joten solution ja projekti tulevat yhteen kansioon
`harjoitustyo/PertinSeikkailut`; Rider näyttää sen kentän alla. Demoissa
ruutu jätetään tyhjäksi, koska samaan solutioniin tulee monta projektia, ks.
[Uusi solution](../osa1/2-ohjelmointiymparisto-kuntoon.md#uusi-solution).

Jätä **Create Git repository** valitsematta: harjoitustyökansio on jo
Git-varasto, eikä sen sisään saa syntyä toista. Paina lopuksi **Create**.

</step>

<step scene="rider-aja">

### Kokeile, että pohja käynnistyy

Aja ohjelma yläpalkin vihreästä ▶-napista. Vaaleansininen ikkuna tarkoittaa,
että pohja toimii. Sulje ikkuna.

</step>

<step scene="check">

### Tarkista kansiorakenne

Aja pohjan tarkistusskripti Git Bashissa harjoitustyökansiossa.

```bash
bash check.sh
```

Juureen saa jäädä vain `.gitignore`, `README.md` ja `check.sh`. Jos skripti
löytää juuresta muita tiedostoja, esimerkiksi `.sln`-tiedoston, siirrä ne
omaan kansioonsa ennen committia.

</step>

<step scene="koodi-status">

### Lisää koodipohja ja tarkista tilanne

Sama komentojen sarja kuin suunnitelmalle. Käännöksen tulokset (`bin`- ja
`obj`-kansiot) jäävät pois `.gitignore`-tiedoston ansiosta. Katso, että `git
status` ei näytä `bin`- tai `obj`-kansioita. Jos näyttää, joku edeltävä vaihe on
mennyt pieleen, ja pitää tehdä uudestaan.

```bash
git add --all
git status
```

</step>

<step scene="koodi-push">

### Vie koodipohja versiohallintaan

Kun listassa on vain koodipohjan tiedostot, tallenna ne commitiin ja lähetä
GitLabiin.

```bash
git commit -m "Harjoitustyön koodipohja"
git push
```

</step>

## Osoite TIMiin

<step scene="tim">

### Tallenna osoite Oma eteneminen -sivulle

Liitä etävarastosi HTTPS-osoite TIMin [Oma eteneminen
-sivulle](https://tim.jyu.fi/view/kurssit/tie/itkp102/eteneminen) ja tallenna.
Ohjaaja löytää työsi tästä osoitteesta.

```text
https://gitlab.jyu.fi/kayttajatunnus/ohj1ht.git
```

Seuraavaksi esittelet suunnitelman ohjaajalle, ks. [harjoitustyön vaihe
1](../harjoitustyo.md#vaihe-1-suunnitelma-versiohallinnassa).

</step>

</walkthrough>
