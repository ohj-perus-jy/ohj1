# Git-versiohallinta

*Ohjeet Ohjelmointi 1 -opintojaksolle*

Tässä dokumentissa kerrotaan miten harjoitustyön suunnitelmaa, lähdekoodia 
sekä muita tiedostoja (mm. kuvat) käsitellään Git-versiohallinnan avulla Ohjelmointi 1 -opintojaksolla.

Ohje on pitkän puoleinen, mutta on tärkeää, että luet sen huolellisesti. Git-versiohallinnan käyttö on olennainen osa ohjelmistokehitystä, ja sen perusteiden ymmärtäminen on tärkeää paitsi tällä opintojaksolla, myös myöhemmissä opinnoissa ja työelämässä.

> [!VAROITUS]
> Jos olet Jyväskylän yliopiston opiskelija, sinun tulee tietää JY-käyttäjätunnuksesi 
> jotta voit käyttää gitlab.jyu.fi-palvelua. Varmista, että tiedät käyttäjätunnuksesi,
> ja kirjoita se muistiin ennen kuin aloitat tämän ohjeen seuraamisen. Tässä
> ohjeessa viitataan toistuvasti käyttäjätunnukseen tunnisteella `kayttajatunnus`.
> Korvaa tämä aina omalla käyttäjätunnuksellasi.

## Ennen kuin aloitat

Asenna [kehitystyökalut ja Git-versiohallinta](tyokalut), ellet ole vielä tehnyt niin.

## Mikä Git on

*Git* on ohjelmisto, jolla voidaan toteuttaa tiedostojen *versiohallintaa*. Ohjelmistotyössä on erityisen tärkeää, että jokainen ohjelmistoon tehty muutos versioidaan selkeästi. Versiohallinnan käyttäminen yhteistyöskentelyyn ja muutosten jäljittämiseen on normi niin teollisessa ohjelmistotuotannossa, vapaan/avoimen lähdekoodin projekteissa kuin myös monien harrastajien henkilökohtaisissa töissä. 

Versiohallinta mahdollistaa myös saman koodin parissa työskentelyn eri tietokoneilta, mikä sopii hyvin tälle kurssille, koska usein tehdään töitä eri tietokoneilta (mikroluokka, kotikone, jne.). Toisaalta versiohallinta toimii myös varmuuskopiona työllesi. Näin koodisi ei häviä, vaikka tietokoneesi hajoaisi.

*Git-varasto* (engl. *repository*) sisältää sekä kooditiedostot että koko projektin muokkaushistorian. GitLab ja GitHub ovat eräitä suosittuja internetissä toimivia palveluita, joissa Git-varastoja voidaan säilyttää. 

Tällä kurssilla emme käytä Dropboxia, muistitikkuja, sähköpostia tai vastaavia palveluita kooditiedostojen jakamiseen, koska ne eivät sovellu todelliseen yhteistyöskentelyyn. Vaikka työskentelisitkin yksin, käytä versiohallintaa ohjaajien työn helpottamiseksi sekä harjoitustyön esittelyn mahdollistamiseksi. 

Voit hyödyntää versiohallintaa opinnoissa muutenkin, esimerkiksi tutkielmien kirjoittamisessa.

## Miten saan Gitin auki?

Git on komentoriviohjelma, eli sitä ei varsinaisesti avata vaan käytetään komentoriviltä. Gitille on tarjolla myös graafisia käyttöliittymiä (ks. [Luku 11. Tapoja käyttää Gitiä](#tapoja-käyttää-gitiä)), jotka käytännössä suorittavat tarvittavia komentorivikomentoja puolestasi. Ohjelmointi 1 -kurssilla harjoittelemme käyttämään Gitiä komentoriviltä nk. *bash*-komentokehotteesta. 

Valitse alta käyttöjärjestelmäsi mukainen käyttötapa.
### [Windows](#tab/asennus-win)
 
1. [Asenna Git-työkalu](tyokalut.md) mikäli et ole vielä tehnyt niin!
2. Paina *Käynnistä*-painikkeen vieressä olevaa *Haku-ikonia*
3. Kirjoita hakupalkkiin *git bash*
4. Valitse löytyvistä tuloksista *Git Bash*

![alt text](images/gitbash-startmenu.png)

Tuloksena pitäisi avautua seuraava bash-komentorivipääte:

![alt text](images/gitbash-avattu.png)

Voit testata, että `git`-työkalu löytyy suorittamalla komento

```bash
git --version
```

Jos komento palauttaa versionumeron, niin git on asennettu oikein.

> [!VAROITUS]
>
> Git Bash -tulkissa liittäminen **ei toimi** tavallisella `Ctrl+V` tai `Cmd+V`-näppäinyhdistelmällä!
> Sen sijaan käytössä on seuraavat pikanäppäimet:
> - Liitä kopioitu teksti bashiin: `Shift+Insert` 
> - Kopioi valittu teksti bashista: `Ctrl+Insert` (Cmd+Insert macOS:ssa)
> 
> Vaihtoehtoisesti voit oikeaklikata päätteen kursorista ja valita *Paste* tai *Copy*.

***

### [macOS](#tab/asennus-macOS)

 1. [Asenna Git-työkalu]() mikäli et ole vielä tehnyt niin!
 2. Avaa *Launchpad*
 3. Kirjoita ylhäällä olevaan hakupalkkiin *Pääte* (tai *Terminal* jos käyttöjärjestelmän kieli on englanti)
 4. Avaa hakutuloksena löytyvä *Pääte* tai *Terminal*-sovellus

![](images/mac-terminal-1.png)

Tuloksena pitäisi avautua seuraava pääteikkuna:

![](images/mac-terminal-2.png)

Voit testata, että `git`-työkalu löytyy suorittamalla komento

```bash
git --version
```

Jos komento palauttaa versionumeron, niin git on asennettu oikein.

***

### [Linux](#tab/asennus-linux)

 1. [Asenna Git-työkalu](/view/%%basedir%%/ohjeet/tyokalut#git) mikäli et ole vielä tehnyt niin!
 2. Käytä jakelun omaa päätettä. Pääte yleensä löytyy sanalla *Terminal* tai *Terminal Emulator*. Tämä usein avaa bash-päätteen, joka on sopiva tämän ohjeen kannalta.

Voit testata, että `git`-työkalu löytyy suorittamalla komento

```bash
git --version
```

Jos komento palauttaa versionumeron, niin git on asennettu oikein.

***

## Muistilista 

 Alla on lyhyt muistilista tyypillisimmistä tällä kurssilla vastaan tulevista tilanteista gitin kanssa. Lue kuitenkin **ensin** tarkemmat kuvaukset tämän dokumentin seuraavista luvuista.

| Tavoite                                                                           | Toimenpide                                                                                                                                                                                                               | Komento                                                                                       | Linkki ohjeeseen |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |------------------- |
| Aloitan harjoitustyön                                                             | Teen **fork**-toiminnolla gitlab.jyu.fi-palvelussa uuden etävaraston.                                                                                                                                                    |                                                                                               | [Hyppää ohjeeseen](#fork)
| Menen koneelle, jossa sisältöä ei vielä ole                                       | Haen GitLabista etävarastoni HTTPS-osoitteen ja kloonaan etävaraston omalle koneelle. Huomaa piste komennon päätteeeksi.                                                                                                 | `git clone [etävaraston osoite] .`                                                            | [Hyppää ohjeeseen](#clone)
| Menen koneelle jossa sisältö jo on                                                | Päivitän etävaraston version koneelle.                                                                                                                                                                                   | `git pull`                                                                                    | [Hyppää ohjeeseen](#pull)
| Muutan tai lisään tiedostoja (esimerkiksi suunnitelmakuva `suunnitelma`-kansioon) | (1) Lisään muuttuneet ja uudet tiedostot *stage*-tilaan, **ja** (2) siirrän *stage*-tilan tiedon lokaaliin varastoon, **ja** (3) "pusken" tekemäni `commit`in etävarastoon. <br /><br />Huomaa kolme erillistä komentoa. | `git add --all`<br /><br />`git commit -m "Muutoksia kuvaava viesti."`<br /><br /> `git push` | [Hyppää ohjeeseen](#add-commit)

Nämä samat ohjeet pätevät myös ryhmätyössä, mutta silloin kannattaa kiinnittää erityistä huomiota siihen, että tekee `pull`, `commit`- ja `push`-toimintoja riittävän usein konfliktien välttämiseksi. 

`git status`-komentoa voi viljellä missä tahansa välissä. Se kertoo paikallisen varaston tilasta, muun muassa mitä tiedostoja on muutettu, poistettu tai lisätty.

## Oman etävaraston luominen GitLab-palveluun{#fork}

> [!HUOMAUTUS]
> 
> Harjoitustyön suunnitelman viemisestä versiohallintaan on myös 
> [videotutoriaali](https://youtu.be/MQJ69rmd1sw). Huomaa, että videolla projektin alku tehdään käyttäen **Visual Studiota**, mutta 
> voit käyttää myös **Rideria**.

Tässä vaiheessa luodaan henkilökohtainen etävarasto (engl. *remote repository*) 
[gitlab.jyu.fi](https://gitlab.jyu.fi)-palveluun. 
Etävarastosta käytetään jatkossa nimitystä `origin`. Kunkin opiskelijan (tai ryhmätyön) etävarasto perustuu valmiiseen pohjaan, josta tehdään kopiohaara, eli GitLab-terminologiassa *fork*. Forkkauksen ansiosta saadaan uuteen git-varastoosi kurssin alkuasetukset.

**Tämä vaihe tehdään kurssilla <u>yhden kerran</u>.** 

 1. (a) Jos sinulla on JY-tunnukset: Kirjaudu gitlab.jyu-palveluun (<https://gitlab.jyu.fi/>) JY-tunnuksilla. 
   (b) Jos sinulla ei ole JY-tunnuksia: Tee tunnukset GitHub-palveluun (<https://github.com>), ja kirjaudu sisään.
 2. (a) JY: Avaa Ohj1-kurssin pohjaprojekti selaimessa:\
   <https://gitlab.jyu.fi/tie/ohj1/2025k/ohj1ht>
   (b) GitHub: Avaa Ohj1-kurssin pohjaprojekti selaimessa:\
   <https://github.com/ITKP102-Ohjelmointi-1/ohj1ht.git>
 3. (a) JY: Valitse oikeasta ylänurkasta `fork`
    (b) GitHub: Vastaavasti.
 4. Valitse omaa tunnustasi vastaava `namespace` (ryhmä).
 5. Valitse näkyvyydeksi `public`. 
 6. Tarkista, että `Project slug` kohdassa lukee `ohj1ht`. Jos muutat tätä, niin tämän ohjeen myöhemmät kohdat eivät toimi oikein. 

Projektisi etävaraston URL-osoite on nyt:

```
https://gitlab.jyu.fi/käyttäjätunnus/ohj1ht.git
```

Tallenna URL-osoite [TIMiin Harjoitustyö -sivulle](). TODO: Linkki.

Näet jatkossa oman etävarastosi URL-osoitteen gitlab.jyu.fi-palvelussa kohdasta
Clone -> Clone with HTTPS. Käytä oman etävarastosi URL-osoitetta tulevissa ohjeissa.

<details closed><summary>✨ Valinnaista lisätietoa: Mikä fork on?</summary>

*Tämä teksti kannattaa lukea, kun ymmärrät, mitä commit, push ja pull tarkoittavat.*

Fork on itsenäinen kopio olemassa olevasta git-varastosta.
Fork säilyttää aikaisemman historian (commitit), ja jatkaa omaa elämäänsä 
irrallaan alkuperäisestä projektista. 
Tähän kopioon (fork-projektiin) tehtävät commitit eivät mene alkuperäiseen projektiin, eivätkä
alkuperäisen projektin commitit tule kopioon. 

Käytännön elämässä fork-projekti tehdään usein tilanteessa, kun kehittäjä haluaa 
syystä tai toisesta erottaa oman työnsä alkuperäisen projektin työstä. Kehittäjä
voi esimerkiksi olla pettynyt projektin suuntaan ja haluaa jatkaa itsenäisesti eteenpäin. 
Yksi esimerkki tästä ovat striimausohjelmistot OBS Studio ja Streamlabs Desktop: 
[OBS Studio](https://github.com/obsproject/obs-studio) on maksuton, vapaan 
lähdekoodin (Gnu GPL v2) projekti. Streamlabs forkkasi OBS-projektin 
vuonna 2014, ja on siitä eteenpäin tuonut omaan forkkiinsa yhä enemmän 
kaupallisia ominaisuuksia, kun taas OBS jatkaa edelleen ilmaisohjelmiston periaatteella. 

Tällä kurssilla forkkaaminen mahdollistaa opiskelijalle helpon tavan perustaa 
oma git-repo GitLabiin, ja toisaalta forkin ansiosta opettaja voi samalla jakaa 
opiskelijoille projektin pohjakoodit (suunnitelmien pohjat jne.) valmiiksi. 

Älä sotke fork-termiä `branch`-termiin. Brancheja käytetään Gitissä 
aivan eri tarkoitukseen, vaikka myös branch usein suomennetaan "haaraksi".

Fork-projektista on viite alkuperäiseen projektiin, siis siihen, josta fork otettiin, 
jotta alkuperäisestä projektista käsin voidaan seurata mitä haaroja siitä on tehty.

Lisätietoa kiinnostuneille: <https://help.github.com/en/github/getting-started-with-github/fork-a-repo>

</details>

## Oikeuksien antaminen muille ryhmäläisille

*Jos teet harjoitustyön yksin, voit ohittaa tämän kohdan.*

Forkin tekijä antaa oikeudet muille ryhmäläisille. Tämä tapahtuu projektin vasemman reunan kohdasta `Members`. Syötä kohtaan `GitLab member or Email address` ryhmän jäsenet yksi kerrallaan. Huom! Jäsenten tulee olla tätä ennen olla kirjautunut gitlab.jyu.fi-palveluun vähintään kerran.

Kaikki ryhmäläiset käyttävät samaa etävaraston osoitetta. Tämä on otettava huomioon alempana olevissa ohjeissa, joissa tällöin näkyy "väärän" henkilön tunnus.

## Omien tietojen (nimi, sähköposti) asettaminen 

**Tämä vaihe tehdään yhden kerran <u>jokaisella</u> tietokoneella jolla 
harjoitustyötä työstetään.** 

Versiohallinta liittää jokaiseen muutokseen tiedot muutoksen tekijän nimestä
ja sähköpostiosoitteesta. Tästä syystä git-ohjelmalle täytyy antaa 
nimi ja sähköposti. 

Aseta omat tietosi git-asiakasohjelmaan seuraavasti.

Mene komentoriville ([miten avaan komentorivin?](#miten-saan-gitin-auki)) ja aseta tietosi antamalla alla olevat komennot:

```bash 
git config --global user.name "Olli Opiskelija"
git config --global user.email "olli.o.opiskelija@student.jyu.fi"
```

Korvaathan esimerkkitiedot omilla tiedoillasi!

Jos ei tulostu virheviestiä, niin komennot ovat onnistuneet.

Lisätietoa kiinnostuneille: [git config](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

## Etävaraston hakeminen omalle tietokoneelle (clone){#clone}

**Tämä vaihe tehdään yhden kerran <u>jokaisella</u> tietokoneella jolla 
harjoitustyötä työstetään.** 

Seuraavaksi haetaan etävarasto omalle paikalliselle tietokoneelle. Tästä
käytetään termiä *kloonaaminen* (engl. *clone*). Kloonattuun paikalliseen 
tietovarastoon tehdyt muutokset voi aikanaan lähettää takaisin 
etävarastoon; tästä kerrotaan lisää [myöhemmässä kohdassa](#push). 

Kloonaus tehdään **tyhjään** hakemistoon.

<details closed><summary>Entä jos hakemisto ei ole tyhjä?</summary>

Mikäli haluat kloonata ei-tyhjään hakemistoon, on tähän ohjeet [Gitin keskustelupalstalla](https://gist.github.com/davisford/5039064),
mutta melkein helpompi on tässä vaiheessa:

 - nimeä olemassa oleva hakemisto uudelleen
 - tee uusi työhakemisto
 - tee sinne clone
 - siirrä sisältö vanhasta hakemistosta
 - poista vanha hakemisto
 - jatka kuten muuten kloonin jälkeen

</details>

**Valitse** alta käyttöjärjestelmästi mukainen käyttötapa.

### [Windows](#tab/clone-windows)

1. Avaa `git bash`, Pääte, tai `cmd`-komentorivi.
1. Tee uusi hakemisto, jonka haluat menevän versionhallintaan (ts. jossa harjoitustyösi
   tulee sijaitsemaan tietokoneella jossa työskentelet). 

   Omalla koneellasi hyvä kansionimi voisi olla esimerkiksi (levykirjain saattaa olla muukin) `C:\Users\Käyttäjä\ohj1\ht`. 
   Agoran mikroluokassa kansio voi olla esimerkiksi `C:\MyTemp\OmaEtunimi\ht`.
   
> [!HUOMAUTUS] 
> Tärkeää: Paina tarkasti mieleen kansion sijainti, sillä tulet tarvitsemaan sitä useita kertoja harkkatyötä tehdessä! 
   
1. Siirry tekemääsi kansioon `cd`-komentoja käyttämällä. Jos käytät Pääte-komentoriviä, komento vaihtamiseen on (vaihda `C:\...` jne kohdalle äsken luomasi kansion polku): 

        cd C:\Users\Käyttäjä\ohj1\ht

   git bash -komentorivillä komento vaihtamiseen on:

        cd /c/Users/Käyttäjä/ohj1/ht

   Voit halutessasi vaihtaa `ht`-sanan paikalle valitsemasi pelin nimen. Hakemiston nimen voi vaihtaa myöhemminkin.
   Kyseinen kansio toimii nyt projektin juurikansiona. Jatkossa kaikki komennot annetaan tässä kansiossa. 

 2. Anna komentoriviltä tässä kansiossa komento. Huomaa välilyönti ja piste lopussa, nekin on annettava.

        git clone https://gitlab.jyu.fi/käyttäjätunnus/ohj1ht.git .

 3. Antamalla komennon 

        ls -la

    näet, että hakemistoon haettiin pohjaprojektin tiedostot `.gitignore`, `README.md` sekä kansio `suunnitelma`. 

     - `.gitignore`-tiedosto sisältää tiedot sellaisista tiedostoista, joita ei 
    oletusarvoisesti viedä versionhallintaan. 
    Näitä ovat muun muassa erilaiset väliaikaistiedostot sekä 
    käännetyt tiedostot. 
     - `README.md` sisältää projektin kuvauksen Markdown-formaatissa. 
     - `suunnitelma`-kansioon laitetaan pelin suunnitelmakuva (tai -kuvat).

*** 

### [macOS ja Linux](#tab/clone-macos-linux)

1. Avaa komentorivi, Pääte tai Terminal.
1. Tee uusi hakemisto, jonka haluat menevän versionhallintaan, ts. jossa harjoitustyösi
   tulee sijaitsemaan. macOS:ssa ja Linuxissa hakemisto järkevintä lienee tehdä hakemisto kotihakemiston alle.
   Alla on esimerkki uuden kansion luontikomennosta. 
   Vaihda `MunKayttaja`-sanan kohdalle todellinen kotihakemistosi nimi.
   Jos et tiedä mikä kotihakemistosi nimi on, kirjoita avattuasi Pääte aivan ensimmäiseksi 
   komento `pwd`, joka tulostaa koko kotihakemistosi polun.

        mkdir /Users/MunKayttaja/ohj1/ht

1. Siirry tekemääsi kansioon `cd`-komentoja käyttämällä esimerkiksi seuraavasti:

        cd /Users/MunKayttaja/ohj1/ht

   Voit halutessasi vaihtaa `ht`-sanan paikalle valitsemasi pelin nimen. Hakemiston
   nimen voi vaihtaa myöhemminkin.

   Kyseinen kansio toimii nyt projektin juurikansiona. 
   Jatkossa kaikki komennot annetaan tässä kansiossa. Paina tarkasti mieleen 
   kansion sijainti, sillä tulet tarvitsemaan sitä useita kertoja harkkatyötä tehdessä! 

1. Anna komentoriviltä tässä kansiossa komento. Huomaa välilyönti ja piste lopussa, nekin on annettava.

       git clone https://gitlab.jyu.fi/käyttäjätunnus/ohj1ht.git .

1. Tarkista `ls -la`-komentoa käyttämällä
että hakemistoon tuli tiedostot `.gitignore`, `README.md` sekä kansio `suunnitelma`. 

     - `.gitignore`-tiedosto sisältää tiedot sellaisista tiedostoista, joita ei 
    oletusarvoisesti viedä versionhallintaan. 
    Näitä ovat muun muassa erilaiset väliaikaistiedostot sekä 
    käännetyt tiedostot. 
     - `README.md` sisältää projektin kuvauksen Markdown-formaatissa. 
     - `suunnitelma`-kansioon laitetaan pelin suunnitelmakuva (tai -kuvat).


***

Lisätietoa: 
Git-ohje: [clone](https://www.git-tower.com/learn/git/commands/git-clone), 
reference: [clone](https://git-scm.com/docs/git-clone)

## Tiedostojen vieminen paikalliseen tietovarastoon (add, commit) {#add-commit}

Kun tiedostoja lisätään, muokataan tai poistetaan, tulee kaikki nämä muutokset lisätä paikalliseen tietovarastoon.

**Tämä vaihe tehdään <u>joka kerta kun olet tehnyt muutoksia</u> koodiin tai muihin tiedostoihin.**

Esimerkki: Suunnitelman kuvan tallentaminen. Tallenna harjoitustyösi suunnitelman sekä luonnoskuvan `suunnitelma`-kansioon. Ole tarkkana, että kuva menee oikeasti juuri tuohon kansioon. Sekä suunnitelmatekstiä varten että kuvaa varten on olemassa esimerkit `suunnitelma`-kansiossa. 

Kuvan pikselikoon tulee olla enintään 1920 x 1080 pikseliä. Kuvan tiedostokoon tulee olla enintään 1 megtavu. 

Avaa Pääte (macOS), Git Bash (Windows) tai muu komentorivi, siirry `cd`-komentoja käyttämällä harkkatyökansioosi ja anna seuraavat kaksi komentoa:

    git add --all 
    git commit -m "kuvaava viesti miksi muutokset on tehty"
    
Ensimmäinen komento lisää kaikki muokatut tiedostot ns. index/stage-alueelle,
ja seuraava komento tekee varsinaisen tietovarastoon tallentamisen.

**On tärkeää**, että aina `add`-komennon jälkeen tarkistat `git status`-komennolla mitä tiedostoja 
tietovarastoon on menossa. Älä lähetä tietovarastoihin suuria tiedostoja.

Mikäli et halua lähettää tietovarastoon kaikkia muutoksia, vaan esimerkiksi
vain yhden tiedoston, laita `--all`-option tilalle haluamasi tiedoston nimi:

    git add TIEDOSTONNIMI   (hakemistoineen, /-viiva hakemistomerkkinä)

Jotkut pitävät parempana luetella kukin lisättävä tiedosto erikseen edellä mainitulla komennolla. Kummassakin tavassa (`all`-vipu, tai kukin tiedosto erikseen) on puolensa.

Huomaa, että `.gitignore`-tiedosto sisältää tiedot sellaisista tiedostoista, joita ei lähtökohtaisesti viedä versiohallintaan. Jos kuitenkin ehdottomasti haluat lisätä tällaisen, esimerkiksi `.jar`-päätteisen tiedoston, niin silloin on käytettävä `-f` -optiota, jolla pakotetaan lisäys. Esimerkiksi:

    git add -f kerho.jar

Toinen vaihtoehto on erikseen sallia vastava `jar` lisäämällä `.gitignore`-tiedostoon
rivin `.jar` perään rivi:

    !kerho.jar

## Tehtyjen muutosten lähettäminen etävarastoon (push) {#push}

Tässä vaiheessa paikalliseen tietovarastoon lähetetyt muutokset 
lähetetään etävarastoon.

**Tämä vaihe tehdään <u>joka kerta kun olet tehnyt muutoksia</u> koodiin tai muihin tiedostoihin.** Älä unohda tehdä tätä työskentelyn päätteeksi. Muutoin tiedot jäävät vain paikalliseen tietovarastoon.

Avaa Pääte (macOS), Git Bash (Windows) tai muu komentorivi. Siirry harjoitustyökansioosi cd-komentoja käyttämällä ja anna sitten komento

    git push

Ensimmäisellä kerralla sinulta kysytään käyttäjätunnusta ja salasanaa.
Valitse kirjautumisikkunassa muodoksi Salasana (Password), **ei** Token.

Anna käyttäjätunnus **lyhyessä muodossa** `käyttäjätunnus` ilman @-merkkiä 
ja loppuosaa. Salasana on se, jota käytät JY-verkossa. 

Mikäli annat salasanan väärin, 
joudut muokkaamaan kirjautumistietojasi, ks. kohta [12](#credentials).

MacOS-käyttäjät huomatkaa, että salasana on KIRJOITETTAVA vaikka sen kohdalla näkyisi
avaimen kuva. Kun salasanaa kirjoitetaan, ei näyttöön tule mitään.  Lopuksi
on painettava enter. Jos tässä tulee virhe, niin gitlab-salasana on poistettava
avainnipusta.

Tarkista tämän jälkeen Gitlab-osoitteestasi, että sieltä löytyy lähettämäsi
tiedostot (alkukurssista ne kuvat).

## Muutosten hakeminen etävarastosta paikalliseen varastoon (pull) {#pull}

Kun sinä tai joku muu on muuttanut tiedostoja ja vienyt muutoksia etävarastoon, niin muutokset tulee hakea omalle koneelle. Yhteistyöskentelyssä on syytä aina työskentelyä aloittaessa antaa `pull`-komento.

Siirry hakemistoon, johon olet kloonannut projektin (ks. [clone](#clone))
ja anna komento: 

    git pull

Tässä kohti voi tulla kysymys siitä, että miten käyttäjä haluaa pull-komennon jatkossa
toimivan. Ohj1-kurssin osalta toimiva vaihtoehto on

    git config pull.rebase false

Lue tästä lisää esimerkiksi [StackOverflowsta](https://stackoverflow.com/questions/62653114/how-to-deal-with-this-git-warning-pulling-without-specifying-how-to-reconcile/62653400#62653400).

## Git ja ryhmätyöskentely

Kun työskennellään ryhmässä esimerkiksi jos teet harjoitustyön parityönä, tulee kiinnittää erityistä huomiota git:in käyttöön, jotta välttyy turhalta työltä. Kun useampi työstää samaa tiedostoa, tulee helposti tilanne, jossa on tehty eri muokkauksia samoille riveille. Tällöin git ei tiedä mitä tehdä ja konfliktit täytyy ratkaista käsin. Tälläistä tilannetta kutsutaan nimellä *Merge conflict* ja se ilmaantuu kun omia muutoksia yrittää puskea tai kun muutoksia koitetaan hakea omalle koneelle.

Alla on esitetty tärkeimmät tavat, joilla vältytään ongelmilta, kun työstetään samaa haaraa ryhmänä.

- Kommunikoikaa selkeästi mitä työstätte ja milloin.
- **Aina** ennen kuin aloittaa koodaamisen, haetaan muutokset etävarastosta `--rebase` lipulla, jonka ansiosta omat muutokset asetetaan paikalliseen varastoon vasta etävarastosta haettujen muutosten jälkeen. 
  ```bash
  git pull --rebase
  ```
- Kun viette (*push*) muutoksia etävarastoon, ilmoittakaa siitä muulle ryhmälle.

<details closed>
<summary>Esimerkki merge conflict -tilanteesta</summary>

Vaikka noudattettaisiin hyviä käytänteitä, niin välillä merge conflict tulee vastaan silti. Tätä ei kuitenkaan kannata pelätä ja se saadaan ratkaistua esimerkiksi Riderissa. Tässä skenaariossa kaksi kehittäjää muokkaa samaa tiedostoa ja molemmat ovat haarassa `main`.

**Kehittäjä A** puskee etävarastoon seuraavan koodin:
```csharp
public override void Begin()
{
    PhysicsObject nelio = new PhysicsObject(100, 100, Shape.Rectangle);
    Add(nelio);
}
```
Tämän jälkeen **Kehittäjä B** luo oman kommitin ja yrittää puskea (*push*) oman koodinsa, jossa luodaan pallo, etävarastoon:
```csharp
public override void Begin()
{
    PhysicsObject pallo = new PhysicsObject(50, 50, Shape.Circle);
    Add(pallo);
}
```
Tämä pusku ei onnistu, sillä **Kehittäjä A** on puskenut oman muutoksensa etävarastoon ja **Kehittäjä B** ei ole hakenut näitä muutoksia itselleen lokaaliin varastoon. Komento `git push` johtaa tämän näköiseen tulosteeseen.
![Epäonnistunut pusku merge conflictissä](./images/merge_conflict_failed_push.png)

**Kehittäjä B** hakee muutokset itselleen komennolla `git pull --rebase`. Tämä komento epäonnistuu kuvassa näkyvällä tulosteella.
![Epäonnistunut hakeminen merge conflictissä](./images/merge_conflict_failed_pull.png)

Jos tämä komento ajettiin Riderin terminaalissa, niin Rider näyttää ylälaidassa varoituksen merge conflictista. Tästä ilmoituksesta voi klikata *Resolve conflicts...* nappia, jolloin avautuu Riderin näkymä konfliktien ratkomiseen.
![Riderin merge conflict varoitus](./images/merge_conflict_rider_notification.png)

#### Konfliktin ratkaiseminen editorissa

Riderin *Merge conflict editor* näkymä näkyy alla olevassa kuvassa. Editorissa on kolme ikkunaa. Vasemmalla puolella on **Kehittäjän B** lokaalit muutokset, eli hänen, joka yritti hakea muutoksia etävarastosta. Oikealla puolella taas näkyy etävarastosta haettu tiedosto. Keskimmäinen ikkuna taas näyttää lopputuloksen.
![Riderin merge conflict editori](./images/merge_conflict_editor.png)

Nyt **Kehittäjän B** tulee päättää, säilytetäänkö lokaalit muutokset vai etävarastosta haetut muutokset. Tämä tapahtuu painamalla muutoksen eli punaisella näkyvän alueen kohdalla ikkunoiden välissä näkyvää nuoli symbolia joko vasemmalta(lokaali) tai oikealta(etävarasto) puolelta. Tämän jälkeen valittu muutos siirtyy keskimmäiseen ikkunaan. Kun kaikki konfliktit on ratkaistu tällä tavoin ja lopputulos(keskimmäinen ikkuna) näyttää oikealta, voidaan painaa alakulmasta *Apply* nappia ja sitten *Apply Changes and Mark Resolved*.

Tehdään tämä vielä muille mahdollisille tiedostoille, joissa on konflikteja. Lopuksi kun yhtään konfliktiä ei ole enää jälellä, painetaan Riderin yläreunasta vihreää nuolikuvaketta *Continue Rebase*. Tämän jälkeen *Merge conflict* on ratkaistu ja **Kehittäjä B** voi jatkaa työskentelyä normaalisti.
</details>

## Huomioitavaa 

### Tiedostojen koko 

Versionhallintajärjestelmä ei sovi suurten tiedostojen tallennukseen. Älä lähetä versiohallintaan esimerkiksi suuria kuva-, musiikki- tai videotiedostoja. Myöskään `bin`, `obj` ja vastaavat kansiot (sis. käännetyt ohjelmat ja muut IDE:n tuottamat käännöksen oheistiedostot) eivät kuulu versiohallintaan. Täydennä tarvittaessa `.gitignore`-tiedostoa.

### Älä laita salaisuuksia versiohallintaan

Älä lisää projektisi commiteihin mitään salaista, kuten salasanoja tai henkilötietoja.
Vaikka poistaisit tiedon seuraavassa commitissa, se jää Gitin projekti-historiaan, 
ja on löydettävissä julkaisun jälkeen. Mikäli kuitenkin lähetit etävarastoon
jotain, jonka haluat poistaa myöhemmin, se onnistuu esimerkiksi [BFG Repo-Cleaner-työkalun avulla](https://rtyley.github.io/bfg-repo-cleaner/).

## Tapoja käyttää Gitiä

Aluksi ehdottomasti suositeltavin tapa on käyttää Gitiä komentoriviltä. On olemassa kuitenkin myös graafisia ympäristöjä Gitin käyttämiseen. Myös IDEissä on nykyään varsin asialliset Git-asiakasohjelmistot (eli käyttöliittymä Git-komentojen käyttämistä varten), joskin jokainen on aina vähän omanlaisensa ja vaatii totuttelua. Kaikkia alla mainittuja työkaluja voit kuitenkin käyttää ristiin. Kannattaa kokeilla eri tapoja. Mikroluokista löytyy ainakin komentorivityökalut, Eclipse sekä TortoiseGit.

 * [SmartGit](https://tim.jyu.fi/view/kurssit/tie/ohj2/tyokalut/git/smartgit)  (Windows, Linux, macOS)
 * [Fork](https://git-fork.com/) (Windows, macOS)
 * [TortoiseGit](https://tortoisegit.org/) (Windows)
 * GitHub Desktop (Windows, macOS)
 * Gitiä voi käyttää myös Windows Subsystem for Linuxin läpi.

## Git termejä 

- **repository**, suom. säilytyspaikka, tietovarasto tai arkisesti "repo" = Paikka jossa versioitava tieto tallennetaan, 
   voi olla paikallinen (`local`) tai etä (`remote`). Periaatteessa samasta projektista voi olla samasta projektista useita säilytyspaikkoja niin paikallisesti kuin etänä.
  `local repository` on käytännössä hakemistossa oleva `.git`-hakemisto.
  Repository koostuu loogisesti commiteista, jotka muodostavat kokoelman projektin
  eri vaiheista.  Näin mihin tahansa commitoituun kohtaan
  voidaan viitata tai tarvittaessa myös palata.
- **fork** = projektista tehty "kopiohaara", joka elää omaa elämäänsä irrallaan alkuperäisestä projektista. Fork ei
           ole Gitin toiminto, mutta useat ulkoiset Git-palvelimet (kuten GitHub ja GitLab) tarjoavat
           tämän toiminnon.
- **origin**  = lyhenne käytettävän etävaraston osoitteelle (`remote repository`). Jos etäsäilytyspaikkoja on useita, tulee näitäkin useita. 
- **project** = jokin selkeä projekti, joka tähtää esimerkiksi jonkin yhden ohjelmatuotteen tekemiseen
- **working directory** (tai **workspace**) = työhakemisto, 
   lokaali työhakemisto (kaikki tiedostot ja versiot löytyvät tämän alla olevasta .git -hakemistosta, jos ne on koneelle haettu (fetch))
- **index** = varastoon seuraavalla commitilla siirrettävien tiedostojen luettelo 
              (versioitavien, *staging area* joissakin lähteissä, koska tiedosto laitetaan "näytille").
              Käytännössä tiedosto `.git/index`.
- **main** = projektin päähaaran oletusnimi, joka pyritään pitämään toimivana koodina. Aikaisemmin päähaaran oletusnimi oli `master`.


Vaativampaan käyttöön ja viimeistään Ohjelmointi 2 -kurssilla tarvittavia termejä:

- `branch` = kehityshaara jossa kehitetään uutta koodia.  Kehityshaaroja voi olla useita. Kun koodi on hyväksi todettu,
             se voidaan yhdistää (`merge`) päähaaraan.
- `tag` = jäädytetty haara (esimerkiksi ohjelman tietty versio), jota ei aktiivisesti kehitetä, mutta johon voi tulla esimerkiksi
         tietoturvapäivityksiä
- `HEAD` = viite aktiivisen haaran "päähän" tietyssä lokaalissa

Kurssilla käytettäviä Git-komentoja:

    git config --global user.name "käyttäjätunnus"
    git config --global user.email "%%useremail%%"    
    git clone https://gitlab.jyu.fi/käyttäjätunnus/ohj1ht.git .
    git status  # tätä komentoa kannattaa käyttää ahkeraan vaikka joka välissä
    git log     # samoin tätä, kunhan opit lukemaan sen sisältöä
    # tee tarvittavia muutoksia
    git add --all
    git commit -m "Vaihe 1, kuvat"
    git push    # kaverin pitää tämän jälkeen tehdä kotona tehdä git pull
    git pull

## Ongelmia? 

Yleisimpiä ongelmia on lueteltu alla.

 {area="vaaraURL" collapse="true" id="v5JVpIErHcLd"}
remote: The project you were looking for could not be found or you don't have permission to view it.


Annoit git clone -komennolle väärän etävaraston URL-osoitteen. Tarkista
etävarastosi osoite gitlab.jyu.fi-palvelussa oman projektisi 
kohdasta Clone -> Clone with HTTPS. Anna tämä osoite git clone -komennon perään. 

Syy, miksi näin kävi, johtuu todennäköisesti siitä, että forkkia tehdessäsi
muutit Project slugia, eli projektin tunnistetta, joka muuttaa etävaraston
URL-osoitetta.

 {area_end="vaaraURL" id="93Hn2pqIU2AT"}

 {area="pushEiOnnistu" collapse="true" id="O95CK3Hj6CQL"}
Push ei onnistu (remote: HTTP Basic: Access denied)

**Ongelma:** Git ei anna viedä mitään etävarastoon (push ei onnistu). Antaa virheilmoituksen:

`remote: HTTP Basic: Access denied`
`fatal: Authentication failed for 'https://gitlab.jyu.fi/NIMI/ohj1ht.git'`

![Push access denied](images/push-access-denied.png)

Huomaa, että virheilmoitus voi näyttää hieman erilaiselta riippuen siitä
käytätkö komentoriviä vai jotain muuta Git-asiakasohjelmaa.

**Syy (vaihtoehto 1):** Etävaraston url-osoitteesta puuttuu lopusta osa `.git`.

**Korjaus:** Anna git bashissa / Päätteessä komento `git remote -v`

Jos fetch- ja push-urlien lopussa **ei ole** `.git`-osaa, käy kopioimassa
GitLab-palvelussa varastosi HTTPS-url-osoite, ks. kuva alla.

![Gitlab clone https](images/gitlab-clone-https.gif)

Anna sitten alla oleva komento, ja **pasteta URL-kohtaan** äsken kopioimasi osoite.

```
git remote set-url URL
```

Kokeile nyt tehdä git push.

**Syy (vaihtoehto 2):** Olet kirjautumisikkunassa kirjoittanut käyttäjätunnuksesi tai salasanasi väärin. 

**Korjaus Windowsilla:** Tarkistetaan käyttäjänimi ja kirjoitetaan salasana uudelleen.

1. Avaa Control panel (ohjauspaneeli). 
2. Valitse 'User accounts' (käyttäjätilit).
3. Valitse 'Manage your credentials' (Tunnistetietojen hallinta).

![Win credman 1](images/win-credman-1.png)

4. Valitse 'Windows credentials' (Windows-tunnistetiedot). 

![Win credman 2](images/win-credman-2.png)

5. Laajentamalla gitin kohtaa, pitäisi päästä muokkaamaan asetettuja käyttäjänimeä ja salasanaa.

**Korjaus Mac:** Sama homma macOS:ssa (??): <https://help.github.com/en/github/using-git/updating-credentials-from-the-osx-keychain>

fatal: destination path ‘.’ already exists and is not an empty directory

`git clone` komennon jälkeen antaa tälläisen:

    fatal: destination path ‘.’ already exists and is not an empty directory.
    
Korjaus: Kun tehdään clone, pitää olla tyhjässä hakemistossa.

'[ht]/' does not have a commit checked out, fatal: adding files failed

Poista *projektin* hakemistosta `.git`-kansio. (Huom. älä poista ylätason hakemistosta.)
Piilotetut kansiot eivät välttämättä näy tiedostonhallinta-ikkunassa (macOS:lla Finder).
Komentorivillä tuon poisto onnistuu esim

```
rm -rf .git
```

You can't push or pull repositories using SSH until you add an SSH key to your profile

Syy: Kloonatessasi etävarastoa olet todennäköisesti valinnut SSH-osoitteen HTTPS-osoitteen sijaan. 

Suositellaan, että otat tässä kohden työstäsi varmuuskopion.

Korjaus, tapa 1: 

 1. Kopioi Gitlab-palvelusta (tai muusta palvelusta) tietovarastosi HTTPS-osoite. 
 2. Avaa komentorivi.
 3. Siirry cd-komentoja käyttäen harjoitustyösi kansioon. 
 4. Anna komentorivillä komento `git remote`. Näyttöön pitäisi tulostua teksti `origin`. Mikäli tulostuu jotain muuta, korvaa seuraavassa kohdassa `origin`-sana sillä, mitä sinulle tulostui. 
 5. Anna komentorivillä alla oleva komento ja **korvaa** `UUSIOSOITE` kohdassa 1 kopioimallasi osoitteella

```
git remote set-url origin UUSIOSOITE
```

Korjaus, tapa 2: Jos tapa 1 ei toimi, voit tehdä uuden clonen uuteen kansioon käyttäen HTTPS-osoitetta, ja
kopioida aikaisempaan kansioon tekemäsi muutokset tähän uuteen kansioon.
Tämän jälkeen pitää tehdä add- ja commit-komennot uudestaan, sen jälkeen push pitäisi onnistua.

Joskus käy niin että Gitissä tulee touhuttua jotakin mikä saa hommat ihan solmuun.
Joihinkin probleemiin vastauksia voi löytyä 
täältä: <https://ohshitgit.com/>. Ko. saitin kielenkäyttö ei ehkä sovi 
perheen pienimmille mutta varsinaiset vinkit voivat pelastaa kiperistä tilanteista.

## Lisätietoa kiinnostuneille

- [Gitin käyttö Ohjelmointi 2 -kurssilla](https://tim.jyu.fi/view/kurssit/tie/ohj2/tyokalut/git/ohj2git)
- [Git reference](https://git-scm.com/docs): Git-yhteisön ylläpitämä dokumentaatio Git-komennoille.
- [A curious tale - from snaphots to git](https://matthew-brett.github.io/curious-git/curious_journey.html) - tämä ja
  sen [jatko-osa](https://matthew-brett.github.io/curious-git/curious_git.html) kannattaa lukea, ne selvittävät hyvin Gitin ideaa.
- [Pro Git book](https://git-scm.com/book/en/v2): Git-yhteisön ylläpitämä Git-kirja. 
- [Git - Tutorial / Lars Vogel](https://www.vogella.com/tutorials/Git/article.html)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [git - the simple guide](https://rogerdudler.github.io/git-guide/)
- [Helsingin yliopiston Git-kurssi](https://tkt-lapio.github.io/git/)
- [ohshitgit - ratkaisuja yleisiin virhetilanteisiin (osittain humoristisia)](https://ohshitgit.com/)
- [git cheatsheet](https://gist.github.com/hofmannsven/6814451)
