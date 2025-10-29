# Suorittaminen

Suoritus arvioidaan asteikolla 1-5. Suorituksen voi saada kahdella tavalla, ja arvosana määräytyy valitun tavan mukaan. Näet suoritustapojen vaatimukset alta klikkaamalla.

**Tapa 1**: Harjoitustehtävät ja tentti

Tavassa 1 hyväksytty suoritus edellyttää, että

> [!TODO]
> Korjaa linkit!

- teet ja palautat kaikki pakolliset harjoitustehtävät (ns. "tähtitehtävät"),
- keräät vähintään 27 pistettä harjoitustehtävistä,
- suoritat [debuggausnäytteen]() hyväksytysti,
- suoritat [harjoitustyön]() hyväksytysti,
- osallistut [tenttiin]().

Arvosana määräytyy tenttipisteistä, joita voi korottaa harjoitustehtävistä saatavilla [hyvityspisteillä](/view/%%basedir%%/ohjeet/demot#hyvitykset-tenttiin).

**Tapa 2**: Aktiivinen harjoitustehtävien tekeminen ilman tenttiä

:::Warning
Suoritustapa 2 ei sovellu välttämättä sinulle, 
jos tavoitteenasi on hakea opiskelupaikkaa [avoimen väylän](https://www.jyu.fi/fi/tule-opiskelemaan/kandidaatti-ja-maisteriohjelmat/avoimen-vayla-jyvaskylan-yliopistoon/avoimen-vayla-tieto-ja-ohjelmistotekniikan-opintoihin) kautta.
Tarkista huolellisesti hakukohteesi valintaperusteet.
:::

Tavassa 2 hyväksytty suoritus edellyttää, että

- teet ja palautat kaikki pakolliset harjoitustehtävät (ns. "tähtitehtävät"),
- keräät vähintään 5 pistettä jokaiselta harjoitustehtäväviikolta,
- suoritat debuggausnäytteen hyväksytysti,
- suoritat harjoitustyön hyväksytysti.

Suorituksen arvosanaksi tulee tällöin 1.

Näet pisteesi ja vaatimusten edistymistä [Eteneminen](/view/%%basedir%%/eteneminen)-sivulla.

## Harjoitustehtävät

Harjoitustehtävät ovat viikoittaisia tehtäviä, jotka tehdään kotona tai pääteohjauksissa. Harjoitustehtävät ovat erinomainen mahdollisuus oppia asioita omakohtaisesti. 

- `T`- eli *ydintehtävät* sisältävät osaamistavoitteiden kannalta keskeiset asiat,
- `V`- eli *visuaaliset tehtävät* ovat kertausta ja harjoittelua visualisoinneilla ja simulaattoreilla,
- `B`- eli *bonustehtävät* ovat lisätehtäviä, jotka vaativat hieman enemmän vaivaa,
- `G`- eli *gurutehtävät* ovat edistyneitä lisätehtäviä, jotka ylittävät osaamistavoitteet ja saattavat vaatia itsenäistä lisäopiskelua.

*Jokaisesta valmiiksi tehdystä tehtävästä saa yhden pisteen* ellei erikseen
toisin mainita. Näet maksimipistemäärän aina tehtävän yhteydessä.

*Muista tarkistaa, että viimeisin saamasi pistemäärä on oikein.* 
Tehtävien vastausten lukumäärää ei ole rajoitettu. Pisteet lasketaan aina
viimeisimmän tallennuksen tai ajon mukaan.

Tehtävät ovat automaattisesti arvosteltuja ellei toisin mainita. Lue tehtäväkohtaiset ohjeet huolellisesti.

<table>
  <thead>
    <tr>
      <th></th>
      <th>Tutkinto-opiskelijat</th>
      <th>Lukiolinjalaiset</th>
      <th>Avoin yliopisto</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Tehtävien deadlinet</td>
      <td>Vastuuopettajan määrittämät. Näkyy TIMissä kunkin tehtävän kohdalla.</td>
      <td>Oman opettajasi ilmoittamat. Näkyy TIMissä kunkin tehtävän kohdalla.</td>
      <td>Ei deadlineja -- vain opiskeluoikeutesi rajoittama.</td>
      </tr>
    <tr>
      <td>Mallivastaukset</td>
        <td colspan="2">Mallivastaus avataan deadlinen jälkeen.</td>
        <td>Tehtävän mallivastauksen saa auki käyttämällä Näytä mallivastaus -painiketta. <strong>Mallivastauksen avaaminen lukitsee tehtävän</strong>, eikä avaamisen jälkeen annettuja vastauksia enää lasketa.</td>
        </tr>
    </tbody>
</table>

Vanha teksti: 

```
{% if demo_deadlines or (False|isview) %}
Harjoitustehtäviä voi palauttaa ennen niille asetettua takarajaa. Näet jokaisen harjoitustehtäväkerran takarajan opintojakson [etusivulla](/view/%%basedir%%/koti). Takarajan jälkeen tehdyt vastaukset ei lasketa kokonaisetenemiseen.
{% endif %}

Tehtävistä on tarjolla mallivastauksia TIM-järjestelmässä.

{% if not demo_model_answers.enabled or (False|isview) %}
Mallivastauksia voivat katsoa vain opintojaksolle ilmoittautuneet
opiskelijat.
{% endif %}

{% if demo_model_answers.follows_deadlines or (False|isview) %}
Mallivastaukset avataan näkyviin harjoitustehtävän palautustakarajan jälkeen.
Mallivastauksesta löytyy koko koodi sekä mahdollisesti videopätkä, jossa
opettaja käy mallivastauksen ja vaihtoehtoisia vastauksia läpi.

Huomaa, että ratkaisuun ei yleensä ole olemassa yhtä ainoaa oikeaa vaihtoehtoa.
On hyödyllistä tutkia useita erilaisia ratkaisuja. 
**Suosittelemme, että tutustut aina mallivastauksiin.**

{% if instance_type == "tutkinto" or (False|isview) %}
Opintojaksolla lisäksi järjestetään 
joka viikko harjoitustehtävien palautustilaisuuksia eli
*demonstraatioita* (lyhyemmin *demoja*).
Demoissa tarkoitus on käydä läpi opiskelijoiden 
tekemiä vastauksia siten, että kuhunkin
tehtävään valitaan sattumanvaraisesti jonkin 
opiskelijan vastaus. 
Demoihin osallistuminen on suositeltavaa, mutta ei pakollista. 
Demoista tehdään
tallenteet, jotka voi katsoa jälkikäteen. 

Palautustilaisuuksien aikataulu näkyy opintojakson [etusivulla](/view/%%basedir%%/koti).
{% endif %}
{% else %}
Mallivastaukset ovat katsottavissa suoraan palautuslaatikossa käyttäen 
*Näytä mallivastaus* -painiketta.
Huomaa, että mallivastauksen avaaminen lukitsee tehtävän siten, että
avaamisen jälkeen tehtyjä vastauksia ei lasketa kokonaisetenemiseen.
{% endif %}
```

Ohjelmatehtävät tehdään Riderissa tai suoraan TIMissä. Heti kun Rideria opitaan käyttämään, kannattaa ohjelmatehtävät pääsääntöisesti tehdä ko. työkalulla. Tehtävien vastaukset palautetaan aina TIM-järjestelmään.

## Tehtävistä ja pisteistä {id="fbako59tqTQG"}




## Pakollisuus {id="COxDtSiZfx3N"}

#- {id="CojJiIEd1TmD"}
Kaikille yhteiset vaatimukset suoritusmerkinnän saamiseksi ovat:

- Kaikki tähtimerkillä (`*`) merkityt tehtävät (eli ns. *tähtitehtävät*) on tehtävä ja palautettava TIMiin.

Lisäksi seuraavat vaatimukset riippuvat tavoiteletusta [suoritustavasta](/view/%%basedir%%/koti#suorittaminen-ja-arviointi)
seuraavasti:

- **Suoritustapa 1**: Kaikista harjoitustehtävistä täytyy kerätä yhteensä vähintään %%(demo_min_percentage/100*demo_expected_mean_points*demos_count)|round(0, 'ceil')%% pistettä.
- **Suoritustapa 2**: Jokaisesta harjoitustehtäväkerrasta tulee kerätä vähintään %%demo_completion_threshold%% pistettä.

Näet kummankin suoritustavan vaatimusten täyttymistä [Eteneminen-sivulla](/view/%%basedir%%/eteneminen).

Mikäli sairauden tai muun hyvän syyn vuoksi et pysty tekemään jollakin kerralla pakollisia tehtäviä, ilmoita siitä heti opettajalle.

#- {id="35qQnrhMo6Fs"}

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

#- {area="hyvitys-lisainfo" collapse="true" id="9kUEUl0D3DQL"}

*Lisätietoja hyvityspisterajoista kiinnostuneille*

#- {id="r6gzz60xhpnv"}
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

#- {area_end="hyvitys-lisainfo" id="kD93swK5CGvv"}

## Tehtävien muutos- ja päivityskäytänteet {id="fRXVmIZpjDp0"}

Opintojaksolla ei ole erillisiä "vuosiversioita", vaan samat materiaalit ovat käytettävissä kaikissa toteutuksissa.
Opintojakson materiaaleja ja harjoitustehtäviä päivitetään 1–2 kertaa
vuodessa.

Useimmiten päivitykset ovat pieniä, kuten kirjastojen versiopäivityksiä ja tekstien
selkeyden parannuksia. Ajoittain voidaan kuitenkin tehdä myös suurempia muutoksia,
esimerkiksi poistaa tehtäviä tai lisätä uusia.

Muutoksista huolimatta kaikki jo kerätyt harjoitustehtäväpisteet pysyvät voimassa, ja
opintojakson suorittamista voi jatkaa normaalisti päivityksistä välittämättä. Myös
opintojakson suoritusehdot pysyvät samoina muutoksista riippumatta.

## Akateeminen rehellisyys {id="pvS7erMCfCBv"}

Kaikkien suoritusten tekemisessä on noudatettava [akateemista
rehellisyyttä](/view/%%basedir%%/ohjeet/akateeminen-rehellisyys).
