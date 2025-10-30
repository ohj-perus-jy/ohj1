# Suorittaminen

Suorituksen voi saada kahdella tavalla, ja arvosana määräytyy valitun tavan mukaan. Näet suoritustapojen vaatimukset alta klikkaamalla.

> [!TODO]
> Korjaa linkit!

| Suoritustapa 1 | Suoritustapa 2 |
| - | - |
| teet ja palautat kaikki pakolliset harjoitustehtävät (ns. "tähtitehtävät") | teet ja palautat kaikki pakolliset harjoitustehtävät (ns. "tähtitehtävät") |
| keräät yhteensä vähintään 27 pistettä harjoitustehtävistä | keräät vähintään 5 pistettä **jokaiselta** harjoitustehtäväviikolta |
| suoritat [debuggausnäytteen]() hyväksytysti | suoritat [debuggausnäytteen]() hyväksytysti |
| suoritat [harjoitustyön]() hyväksytysti | suoritat [harjoitustyön]() hyväksytysti |
| osallistut [tenttiin]() | ei tenttiä |
| Arvosana välillä 1-5 | Arvosana 1 |

Arvosana määräytyy tenttipisteistä, joita voi korottaa harjoitustehtävistä saatavilla [hyvityspisteillä](/view/%%basedir%%/ohjeet/demot#hyvitykset-tenttiin).

> [!VAROITUS]
> Suoritustapa 2 ei sovellu välttämättä sinulle, jos tavoitteenasi on hakea opiskelupaikkaa [avoimen väylän](https://www.jyu.fi/fi/tule-opiskelemaan/kandidaatti-ja-maisteriohjelmat/avoimen-vayla-jyvaskylan-yliopistoon/avoimen-vayla-tieto-ja-ohjelmistotekniikan-opintoihin) kautta.
> Tarkista huolellisesti hakukohteesi valintaperusteet.

Näet keräämäsi viikkotehtävien pisteet ja muut osasuoritusten edistymiset [Eteneminen]()-sivulla.

Kaikkien suoritusten tekemisessä on noudatettava [akateemista
rehellisyyttä]().

Mikäli sairauden tai muun hyvän syyn vuoksi et pysty tekemään jotain osasuoritusta, ilmoita siitä heti opettajalle.

## Harjoitustehtävät

Kunkin osan päätteeksi on mainittu siihen osaan liittyvät harjoitustehtävät. Harjoitustehtävien tekemiseen saa apua pääteohjauksissa; ks. ajat etusivulta. Harjoitustehtävät ovat erinomainen mahdollisuus oppia asioita omakohtaisesti. Tehtävät ovat automaattisesti arvosteltuja ellei toisin mainita. 

- `T`- eli *ydintehtävät* sisältävät osaamistavoitteiden kannalta keskeiset asiat,
- `V`- eli *visuaaliset tehtävät* ovat kertausta ja harjoittelua visualisoinneilla ja simulaattoreilla,
- `B`- eli *bonustehtävät* ovat lisätehtäviä, jotka vaativat hieman enemmän vaivaa,
- `G`- eli *gurutehtävät* ovat edistyneitä lisätehtäviä, jotka ylittävät osaamistavoitteet ja saattavat vaatia itsenäistä lisäopiskelua.

*Jokaisesta valmiiksi tehdystä tehtävästä saa yhden pisteen*, ellei erikseen
toisin mainita. Näet maksimipistemäärän aina tehtävän yhteydessä.

*Muista tarkistaa, että viimeisin saamasi pistemäärä on oikein.* 
Tehtävien vastausten lukumäärää ei ole rajoitettu. Pisteet lasketaan aina
viimeisimmän tallennuksen tai ajon mukaan.

Tehtävien aikataulurajoitukset ja mallivastauskäytänteet vaihtelevat opiskelijaryhmittäin seuraavasti:

<table>
  <thead>
    <tr>
      <th></th>
      <th>JY tutkinto-opiskelijat</th>
      <th>Lukiolinjalaiset</th>
      <th>Avoin yliopisto</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Tehtävien deadline</td>
      <td>Vastuuopettajan määrittämät. Näkyy TIMissä kunkin tehtävän kohdalla.</td>
      <td>Oman opettajasi määrittämät. Näkyy TIMissä kunkin tehtävän kohdalla.</td>
      <td>Ei deadlineja -- vain opiskeluoikeutesi rajoittama.</td>
      </tr>
    <tr>
      <td>Mallivastaukset</td>
        <td colspan="2">Mallivastaus avataan deadlinen jälkeen. Mallivastauksen saa auki kunkin tehtävän kohdalla Näytä mallivastaus -painikkeella.</td>
        <td>Tehtävän mallivastauksen saa auki käyttämällä Näytä mallivastaus -painiketta.
        <br /><br />
        <strong>Mallivastauksen avaaminen lukitsee tehtävän</strong>, eikä avaamisen jälkeen annettuja vastauksia enää lasketa.        
        </td>
        </tr>
    </tbody>
</table>

Mallivastauksia voivat katsoa vain opintojaksolle ilmoittautuneet opiskelijat.

> [!TODO]
> Pitäisikö palautustilaisuuksista sanoa tässä kohden jotain?
> Vanhaa tekstiä...: Demoihin osallistuminen on suositeltavaa, mutta ei pakollista. 
> Demoista tehdään tallenteet, jotka voi katsoa jälkikäteen. 
> Palautustilaisuuksien aikataulu näkyy opintojakson [etusivulla]().

Ohjelmatehtävät tehdään Riderissa tai suoraan TIMissä. Heti kun Rideria opitaan käyttämään, kannattaa ohjelmatehtävät pääsääntöisesti tehdä ko. työkalulla. Tehtävien vastaukset palautetaan aina TIM-järjestelmään.

## Hyvitykset tenttiin {id="4TdyTQIm9Cap"}

Tekemällä harjoitustehtäviä kerrytät hyvityspisteitä tenttiin seuraavasti:

| min. hyväksiluettuja tehtäväpisteitä | Hyvityspisteitä |
| -: | - |
{% for pros in range(demo_min_percentage, 100, ((90-demo_min_percentage)/(max_demo_hyvitys - 1))|int)%}
|%%(pros/100*demo_expected_mean_points*demos_count)|round(0, "ceil")%% | %%loop.index%% 
{% endfor %}

Kultakin harjoitustehtäväkerralta hyväksiluetaan **enintään %%demo_max_points_cap%% pistettä**.
Toisin sanoin, vaikka saisit joltain harjoitustehtäväkerralla
kerättyä lisätehtävillä enemmänkin pisteitä, hyväksiluetaan siitä vain %%demo_max_points_cap%% pistettä.

Hyvityspisteet lasketaan suoraan tenttipisteisiin ennen tenttiarvosanan laskemista.
Hyvityspisteet pätevät kaikkiin opintojakson tenttikertoihin.

<details closed><summary>Lisätietoja hyvityspisterajoista kiinnostuneille</summary>

Hyvityspisteiden laskennassa harjoitustehtäväkerroista tehdään seuraavat oletukset:

- Harjoitustehtäväkertoja ($N_{\text{d}}$) on yhteensä $%%demos_count%%$
- Yhdessä harjoitustehtäväkerrassa *ydintehtävistä* keskimääräinen pistemäärä ($\hat{p}_{\text{d}}$) on $%%demo_expected_mean_points%%$ pistettä
- Suurimman hyvityspistemäärän ($H_{\text{max}} = %%max_demo_hyvitys%%$) saa keräämällä $90 \%$ kaikista ydintehtävien pisteistä pyöristettynä ylöspäin lähimpään kokonaislukuun
- Pienimmän hyvityspistemäärän ($H_{\text{min}} = 1$) saa keräämällä $%%demo_min_percentage%% \%$ kaikista ydintehtävien pisteistä pyöristettynä ylöspäin lähimpään kokonaislukuun
- Hyvityspisteitä voidaan antaa vain kokonaisina pisteinä

Huomioita:

- Ajan myötä joihinkin harjoitustehtäväkertoihin on lisätty enemmän kuin $%%demo_expected_mean_points%%$ ydintehtävää, mutta tämä luku on valittu "tarpeeksi hyväksi" arvioksi yksittäisen kerran työmäärästä.
- Lisäksi todellisuudessa harjoitustehtäväkerrassa on muitakin tehtävätyyppejä, josta saa pisteitä. Niitä ei tässä mallissa oteta huomioon.

Tämän perusteella kaikkien ydintehtävien pisteiden summa on keskimäärin $N_{\text{d}} \cdot \hat{p}_{\text{d}} = %%demos_count * demo_expected_mean_points%%$ pistettä.
Tällöin hyvityspisteiden saamiseksi tarvitaan vähintään $\left\lceil \frac{ %%demo_min_percentage%% }{100} \cdot N_{\text{d}} \cdot \hat{p}_{\text{d}} \right\rceil = %%(demo_min_percentage/100*demo_expected_mean_points*demos_count)|round(0, "ceil")%%$ pistettä.

Koska hyvityspisteitä annetaan vain kokonaisina pisteitä, seuraava "hyvityspistetaso" saavutetaan aina $\dfrac{90 \% - %%demo_min_percentage%% \%}{H_{\text{max}} - H_{\text{min}}} = %%(100-demo_min_percentage)/max_demo_hyvitys%% \%$ välein.

Näin ollen hyvityspistemäärää $H \in \{1,\ldots,%%max_demo_hyvitys%%\}$ varten tarvitaan vähintään

$$\left\lceil \dfrac{ %%demo_min_percentage - (100-demo_min_percentage)/max_demo_hyvitys%% + H \cdot %%(100-demo_min_percentage)/max_demo_hyvitys%% }{100} \cdot N_{\text{d}} \cdot \hat{p}_{\text{d}} \right\rceil$$ pistettä.

Yllä oleva taulukko lasketaan tämän kaavan avulla.

</details>

## Tehtävien muutos- ja päivityskäytänteet

Opintojaksolla ei ole erillisiä "vuosiversioita", vaan samat materiaalit ovat käytettävissä kaikissa toteutuksissa.
Opintojakson materiaaleja ja harjoitustehtäviä päivitetään 1–2 kertaa
vuodessa.

Useimmiten päivitykset ovat pieniä, kuten kirjastojen versiopäivityksiä ja tekstien
selkeyden parannuksia. Ajoittain voidaan kuitenkin tehdä myös suurempia muutoksia,
esimerkiksi poistaa tehtäviä tai lisätä uusia.

Muutoksista huolimatta kaikki jo kerätyt harjoitustehtäväpisteet pysyvät voimassa, ja
opintojakson suorittamista voi jatkaa normaalisti päivityksistä välittämättä. Myös
opintojakson suoritusehdot pysyvät samoina muutoksista riippumatta.

## Akateeminen rehellisyys

Tänne juttua.