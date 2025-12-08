# Debuggausnäyte

Debuggauksen kuvaus ja ohjeet. Lomakkeet edelleen TIMissä.

Debuggausnäytteessä osoitat, että osaat käyttää debuggeria ongelmatilanteiden 
selvittämiseen. Näytteessä testataan muun muassa seuraavien osa-alueiden hallintaa:

- askeltaminen aliohjelman sisään (step into)
- aliohjelman suorittaminen yhtenä askeleena (step over)
- keskeytyskohdan asettaminen
- ehdollisen keskeytyskohdan asettaminen
- arvon muuttaminen debuggerissa
- muuttujan asettaminen watch-seurantaan; watch-arvon seuraaminen

Näyte arvostellaan asteikolla hyväksytty/hylätty.


## Aikataulu ja takarajat

| Tutkinto-opiskelijat                                                                                                                                                                                                                      | Lukiolinjat                                                                     | Avoin yliopisto                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Näyte tulee palauttaa osan 8 takarajaan mennessä. Mahdollisista aikataulujoustoista (esim. sairauden takia) on aina sovittava ohjaajan kanssa. Palauttaminen myöhässä ilman ennalta sovittua joustoa voi johtaa näytteen hylkäämiseen. | Näyte tulee palauttaa valitsemasi opintojaksototeutuksen aikataulun mukaisesti. | Näytteen palauttamiselle ei ole takarajaa, mutta se on hyväksytettävä ohjaajalla. |


## Miksi? 

Debuggerin käyttö on osa kurssin osaamistavoitteita. Ohjelman koon kasvaessa 
testaus- ja debuggaustaidot ovat olennainen osa virheiden etsimisessä ja korjaamisessa. 
Debuggeri on myös loistava työkalu ohjelman toiminnan 
ymmärtämiseksi.

## Miten valmistaudun?

 1. Lue [monisteesta luku 10.2. Debuggaus](/view/%%basedir%%/materiaali/moniste#debuggaus), 
 2. Lue [monisteen täydennyssivu debuggauksesta](/view/kurssit/tie/ohj1/materiaali/debuggaus).
 3. Katso [luennon debuggauksesta ja debuggerin käytöstä (kevät 2023)](https://www.youtube.com/live/2d1ErNVn9sI?feature=share&t=1095) 
 4. Harjoittele debuggausta [Harjoitusnäytteellä](/view/%%basedir%%/ohjeet/debuggausnayte-harjoittelu)

## Näytteen suorittaminen {id="E9EINrM42gDm"}

#- {visible="%%not (instance_type in all_instance_types) or ((False|isview) and ('ohj1-devs'|belongs))%%" id="molHB5ZtI2KT"}
:::Warning
Et ole ilmoittautunut millekään opintojakson toteutukselle.
Debuggausnäytteen voivat suorittaa vain opintojaksolle ilmoittautuneet opiskelijat.

Katso lisätietoja opintojaksolle ilmoittautumisesta [opintojakson kotisivulla](/view/%%basedir%%/koti).
:::

Voit suorittaa debuggausnäytteen [videona itsenäisesti](#video) tai [ohjauksessa](#ohjaus).

Voit suorittaa debuggausnäytteen sinulle sopivana aikana. Debuggausnäytteen
suorittamiselle ei ole takarajaa.

Valitse haluamasi debuggausnäytteen suoritustapa ja seuraa sen mukaiset ohjeet.

## Palautus videolla {#video}

#- {id="uLcWVpfaiByN"}
*Merkitse jokainen vaihe valmiiksi ruksimalla.*

#- {defaultplugin="cbfield" .steps-list id="G9T1kQyycJ2p"}
- {#dv1 saveSingleAnswer: true#} Lue alla vaatimukset ja ohjeet debuggausnäytteen tekemiselle ja palauttamiselle

#- {area="debug-ohje-frame" .area-frame id="cb3Ad66j2EOq"}

#- {area="debug-video-ohje" .small-area collapse="true" id="oKpEqRGzfY7K"}
Ruutukaappausvideon vaatimukset ja ohjeet  (**avaa klikkaamalla**)

``` {id="d02nXdKi5qrO" atom="true"}
#### Sisällölliset vaatimukset videolle

 1. Opiskelijan tulee käyttää kurssilla annettua DebugKoe-tehtävää.
 2. Videossa tulee näkyä debuggausnäytteen suorittaminen kokonaisuudessaan ja katkeamattomana. Videoa ei saa editoida.
 3. Videolla tulee näkyä sekä ruutukaappauskuva että opiskelijan puhe selkeällä äänellä. 
 4. Opiskelijan tulee selittää jokainen tekemänsä toiminto perustellen. Selitys tulee olla 
    esimerkiksi: 
    * "Asetan riville 59 ehdollisen keskeytyskohdan, koska..." tai 
    * "Käytän continue-toimintoa, jotta..." 

Näytteen hylkäämisen perusteet:

 1. Videolla ei näy debuggausnäytteen suorittaminen kokonaisuudessaan.
 2. Tehtyjä toimia ei perustella.
 3. Opiskelija ei puhu tai puheesta ei saa selvää.
 4. Annetut perustelut ovat oleellisesti vääriä tai sisältävät selkeitä virhekäsityksiä.
    Näytteen toisessa osassa on kiinnitettävä erityistä huomiota siihen, mihin kohtaan 
    ohjelman suoritus keskeytyy ja miksi.

#### Tekniset vaatimukset videolle

 1. Resoluution tulee olla mielellään vähintään Full HD (1920x1080). Jos näyttösi tarkkuus on hyvin korkea, pienennä sitä. Pääasia on, että tekstistä saa selvää. 
 2. Äänen tulee olla selvästi kuultavissa. Käytä mielellään hyvälaatuista mikrofonia ja puhu lähelle mikrofonia.
 3. Tarkista äänentasot testinauhoituksella. Kytke tarvittaessa kohinansuodatukset tai muut automaattiset äänenparannustoiminnot pois päältä mikäli mahdollista.
 4. Valitse videon laaduksi Korkea, tai vähintään 5 Mbps, jos voit sen valita. 
 5. Hyviä ohjelmia ruutukaappauksen tekemiseen ovat esimerkiksi Screen-Cast-O-Matic (Windows), Open Broadcast Software (Win/Mac/Linux) ja Quicktime (Mac).

Näytteen hylkäämisen perusteet:

 1. Video on niin epäselvä ettei tekstistä saa selvää. 
 2. Puheraita puuttuu tai siitä ei saa selvää.

#### Videon jakelun vaatimukset

Laita video YouTubeen (suositus) tai Moniviestimeen. YouTubessa 
voit laittaa videon Unlisted-tilaan, mutta **ei** Private-tilaan. 
Tarkista esimerkiksi selaimen Incognito-tilassa, että video on todella 
katsottavissa myös kirjautumattomana käyttäjänä. Emme lataa tiedostoja esim. 
MediaFirestä tai vastaavista tiedostonjakopalveluista. 

Kopioi videon URL-osoite tämän sivun palautuskenttään. Mikäli videosi
on YouTubessa, kopioi videon URL käyttäen Share-painiketta videon alapuolella.

Voit poistaa videon näytteen tarkastamisen jälkeen.

Näytteen hylkäämisen perusteet:

 1. Videon URL-osoite ei ole TIMissa.
 2. Tarkastaja ei pääse käsiksi videoon.
 3. Video on jossain muualla kuin YouTubessa tai Moniviestimessä.
```

#- {area_end="debug-video-ohje" id="LvWaZxsPF6Tx"}

#- {area_end="debug-ohje-frame" id="3Rc0m9DvNJvK"}

#- {id="05gqiDbBuSCL"}
\

#- {defaultplugin="cbfield" .steps-list id="bbj66gXSMvuw"}
- {#dv2 saveSingleAnswer: true#} Lataa ja avaa DebugKoe-projekti

#- {area="debug-koe-lataus-frame" .area-frame id="rOT7Szm85oZM"}

#- {area="debug-koe-lataus" collapse="true" .small-area id="G3ZIcNJ7h2L5"}
Debuggausnäyteprojektin latausohjeet (**avaa klikkaamalla**)

```` {id="bMpxPE0L2Ysy" atom="true"}
:::Warning
Jos suoritat näytteen yliopiston mikroluokassa, 
lataa kaikki tiedostot ja projektit seuraavaan hakemistoon:

```
C:\MyTemp\ohj1\%%username%%
```

Muualta ei voi ajaa omia ohjelmia.
:::


1. **Lataa [DebugKoe.zip](/files/900302/DebugKoe.zip) **

2. Pura lataamasi .zip tiedosto paikkaan, josta löydät sen.

3. Avaa Rider. *Welcome to JetBrains Rider* -näkymässä klikkaa oikeassa yläkulmassa olevaa *Open* -painiketta.

    ![Valitse *Open*](/images/900236/image.png)

4. Etsi ja avaa `DebugKoe.sln`-tiedosto Riderissa. Mikäli Rider kysyy, luotatko avattavaan projektiin, valitse *Trust and Open*.

5. Avaa sen jälkeen Riderissa `Program.cs`-tiedosto, josta ohjelmakoodi löytyy.
````

#- {area_end="debug-koe-lataus" id="pbOpuqXXunjO"}

#- {area_end="debug-koe-lataus-frame" id="1vGOD8x53GUc"}

#- {id="SFGDhJ7tzEhk"}
\

#- {defaultplugin="cbfield" .steps-list id="uWCfYHnDYsMH"}
- {#dv3 saveSingleAnswer: true#} Tee DebugKoe-projektissa olevat tehtävät ja nauhoita suorituksesi

    * Käynnistä ladattu ohjelma Debug-tilassa ja suorita projektissa
    olevat tehtävät. Tehtävien ohjeet löytyvät `Program.cs` -tiedostosta.
    * Voit yrittää debuggausnäytteen suorittamista niin monta kertaa kuin haluat.

#- {id="SonlCQ5wtOrr"}
\

#- {defaultplugin="cbfield" .steps-list id="S7kHWdFcRNxE"}
- {#dv4 saveSingleAnswer: true#} Julkaise nauhoitteesi YouTubeen tai Moniviestimeen ja liitä
   julkinen URL-osoite alla olevaan laatikkoon.
   - {#debug_url:textfield 
      inputstem: "Debuggausnäyttevideon osoite"
      saveSingleAnswer: true
      cols: 20
      validinput: '^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$'
      errormessage: "Osoitteen on oltava muotoa https://youtu.be/OSOITE TAI https://moniviestin.jyu.fi/OSOITE"
    #}

#- {id="ba4draLANBU2"}
Debuggausnäytteet tarkistetaan noin kerran viikossa. 
Saat ilmoituksen, kun työsi on tarkistettu.

#- {area_end="valitse-tapa-video" id="p23bcbezcTt6"}


## Palautus ohjauksessa {#ohjaus}

#- {id="nJmOYbiGAmku"}
*Merkitse jokainen vaihe valmiiksi ruksimalla.*

#- {defaultplugin="cbfield" .steps-list id="SHs8P3N71LJU"}
- {#do1 saveSingleAnswer: true#} Lue alla vaatimukset ja ohjeet debuggausnäytteen tekemiselle

#- {area="debug-ohje-ohjaus-frame" .area-frame id="h0BUON5ujNaA"}

#- {area="debug-ohjaus-ohje" .small-area collapse="true" id="oi5HXNe6YY1U"}
Ruutukaappausvideon vaatimukset ja ohjeet  (**avaa klikkaamalla**)

``` {id="U2Uts3EE8tNH" atom="true"}
Debuggausnäyte suoritetaan lähi- tai etäohjauksen aikana.
Debuggausnäyte palautetaan näyttämällä ohjaajalle DebugKoe-ohjelman 
tuloste debuggausnäytteen läpipääsystä:

~~~
Tehtävä 1 läpäisty!
Tehtävä 2 läpäisty!

Onnittelut, debug-koe läpäisty! Paina Enteriä poistuaksesi.
~~~

Ohjaaja voi kysyä perustelemaan ratkaisusi tai näyttämään, miten
ratkaisit tehtävät.

#### Vaatimukset

 1. Opiskelijan tulee käyttää kurssilla annettua DebugKoe-tehtävää.
 2. Opiskelijan tulee näyttää ohjaajalle Riderissa oleva tuloste debuggausnäytteen läpipääsystä (ks. malli yllä).
 3. Opiskelijan tulee pystyä perustelemaan ratkaisunsa ohjaajan niin pyydettäessä.

Näytteen hylkäämisen perusteet:

 1. Riderin Console-näkymässä ei näy yllä olevaa läpäisytekstiä.
 2. Opiskelija ei pysty perustelemaan ratkaisunsa.
 4. Annetut perustelut ovat oleellisesti vääriä tai sisältävät selkeitä virhekäsityksiä.
    Näytteen toisessa osassa on kiinnitettävä erityistä huomiota siihen, mihin kohtaan 
    ohjelman suoritus keskeytyy ja miksi.
```

- {#do2 saveSingleAnswer: true#} Lataa ja avaa DebugKoe-projekti

Debuggausnäyteprojektin latausohjeet (**avaa klikkaamalla**)

- {#do3 saveSingleAnswer: true#} Tee DebugKoe-projektissa olevat tehtävät **pääteohjauksessa**

    * Mene pääteohjaukseen. Näet ohjausten aikataulut [kurssin kotisivulla](/view/%%basedir%%/koti#tukikanavat)
    * Käynnistä ladattu ohjelma Debug-tilassa ja suorita projektissa
    olevat tehtävät. Tehtävien ohjeet löytyvät `Program.cs` -tiedostosta.
    * Voit yrittää debuggausnäytteen suorittamista niin monta kertaa kuin haluat.
    * Kun saat viestin `debug-koe on läpäisty!`, ruksi alla oleva kohta.


- {#do4 saveSingleAnswer: true#} Kuittaa tämä, kun olet saanut tehtävät tehtyä

   * Pyydä seuraavaksi ohjaajaa tarkistamaan tehtäväsi
   * Valmistaudu perustelemaan ratkaisusi ohjaajalle tarvittaessa
   * Ruksi yllä oleva kohta viimeistään, kun saat tehtävät näytettyä ohjaajalle

#- {id="66a6e30NYJ5b"}
Ohjaaja kuittaa harjoitustyösi paikan päällä.
Saat vielä erillisen kuittauksen debuggausnäytteen hyväksymisestä sähköpostitse.


-- vvv -- tämä siirtynee TIMiin Oma Eteneminen -sivulle ?? -- vvv --
### Näytteen kuittaaminen (opettaja) {id="dqscuHAHIusK"}

#- {id="vy0aXDyOzjRI"}
**Pikaohje**

1. Klikkaa **Kuittaus** sarakkeen alapuolella olevaa tekstikenttää ja kirjoita sinne `=`
   - Tämä näyttää kaikki opiskelijat, jotka ovat tehneet debuggausnäytteen, mutta eivät vielä saaneet kuittausta.
   - Tarvittaessa voi myös suodattaa opiskelijan nimen mukaan *User's name* sarakkeen hakukentällä.
   - Jos opiskelijaa ei löydy, joko hän ei palauttanut videota (jos palautus on videolla) tai hän ei ole kuitannut tehtävää tehdyksi ("Kuittaa tämä, kun olet saanut tehtävät tehtyä" -ruksi).
2. Tarkista opiskelijan näyte. Voit katsoa vaatimukset tämän ohjeen alta.
   - Jos tarkistat pääteohjauksessa näytettyä debuggausnäytettä, voit kysyä
     opiskelijalta, miten hän tehtävät ratkaisi (esim. mikä keskeytyskohta oli laitettu minnekin ja miksi).
     Pääpointti on, että tehtävän koodia ei ole muokattu, ja tehtävän ratkaisemiseksi
     on käytetty vain debuggeria.
3. Jos näyte täyttää vaatimukset, klikkaa opiskelijan nimen vieressä olevaa
   ruksia ja sitten paina taulukon alapuolella olevaa *Kuittaa näyte valituille* -painiketta.
   - Voit kuitata näytteen useammalle opiskelijalle samaan aikaan ruksimalla kaikki
     kuitattavat suoritukset.

-- ^^^ -- tämä siirtynee TIMiin ?? -- ^^^ --

## Vinkkejä {id="x3qWDbTMvCiW"}

#- {id="zzKe7yrOn9aW"}
Muistathan debugnäytteitä tehdessäsi ajaa ohjelman debug-tilassa klikkaamalla F5 
tai Debug-painiketta.

Debugatessa kannattaa pyrkiä selvittämään, mikä koodissa tai muuttujien arvoissa näyttää oudolta.
Esimerkiksi, jos johonkin aliohjelmaan siirrytään useita kertoja yhden sijaan,
voi kutsuja olla tullut liikaa.