# Muuttujien näkyvyys

> [!HUOMAUTUS]
> Tämä luku on kesken: runko on valmis, teksti kirjoitetaan rakenneuudistuksen
> vaiheessa B.

Tässä luvussa selvitetään, missä osassa ohjelmaa muuttuja on olemassa ja
käytettävissä. Asia tulee vastaan heti, kun ohjelmassa on useita aliohjelmia.

## Paikalliset muuttujat

<!-- Aliohjelman sisällä määritelty muuttuja on olemassa vain siinä
     aliohjelmassa. Sama nimi eri aliohjelmissa tarkoittaa eri muuttujaa. -->

## Lohko rajaa näkyvyyden

<!-- Aaltosulkeiden sisällä (if, silmukka) määritelty muuttuja ei näy lohkon
     ulkopuolella. Muuttujaa ei voi määritellä uudelleen sisemmässä lohkossa. -->

## Parametrit ovat paikallisia muuttujia

<!-- Parametrin muuttaminen ei muuta kutsujan muuttujaa (arvotyypeillä).
     Viitetyypit käsitellään luvussa 5.3. -->

## Attribuutit

Vaikka tällä kurssilla ei käsitellä olio-ohjelmointia, Jypeli-ohjelmissa
käytämme luokan attribuutteja. Attribuutit ovat muuttujia, jotka määritellään
luokan sisällä, mutta aliohjelmien ulkopuolella. Attribuutit ovat olemassa koko
luokan elinkaaren ajan, ja ne näkyvät kaikissa luokan aliohjelmissa. 

<!-- Vaiheessa B:
     - Näkyvyyden kolme tasoa: lohko, aliohjelma, luokka. Attribuutti on
       C#:n vastine muiden kielten globaalille muuttujalle, mutta vain luokan
       sisällä.
     - Miksi Jypelissä: tapahtumankäsittelijät (törmäys, näppäin, ajastin)
       kutsutaan pelin puolesta, joten niille ei voi välittää omia
       parametreja. Esimerkki: `private PhysicsObject pelaaja;` ja
       `private IntMeter pisteet;`, joita käsittelijä käyttää.
     - Sääntö: parametri aina kun voi, attribuutti vain kun käsittelijä sitä
       tarvitsee. Kiinteät arvot luokkatason vakioiksi (`const`). Sama
       vaatimus on harjoitustyön ohjeissa (../harjoitustyo.md, "Ei turhia
       peliluokan attribuutteja").
     - Konsoliohjelmissa attribuutteja ei tällä kurssilla tarvita.
     - Miksi välttää: aliohjelma, joka lukee tai muuttaa attribuuttia, ei
       enää nojaa vain parametreihinsa (vrt. sivuvaikutus, luku 3.2), ja
       virheen syytä on vaikeampi paikantaa. -->

## Virhe: muuttujaa ei ole olemassa nykyisessä kontekstissa

<!-- CS0103. Tyypillinen syy: muuttuja määritelty toisessa aliohjelmassa tai
     lohkossa. Ratkaisu: välitä tieto parametrina tai paluuarvona. -->

## Tehtävät

<!-- Tehtävät lisätään vaiheessa B. -->
