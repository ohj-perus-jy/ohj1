# Kääntäminen komentorivillä

Valinnaista lisätietoa lukuun [1.2 Ensimmäinen
ohjelma](../osa1/2-ensimmainen-ohjelma.md). Kurssilla ohjelmat käännetään ja
ajetaan Riderin *Run*- ja *Debug*-painikkeilla, mutta Rider ei tee mitään
taikuutta: se kutsuu taustalla samoja .NET-ympäristön työkaluja, joita voit
käyttää itse komentoriviltä.

## Mitä tarvitaan?

Tarvitset .NET-ympäristön, jonka asennusohje on
[Työkalut](../tyokalut.md)-sivulla. Jos komentorivi ei ole ennestään tuttu, lue
ensin samalta sivulta [Pikakurssi komentorivin
käyttöön](../tyokalut.md#pikakurssi-komentorivin-käyttöön).

## Kääntäminen ja ajaminen

Avaa komentorivi ja siirry `cd`-komennolla siihen kansioon, jossa projektin
`.csproj`-tiedosto on. Anna sitten jompikumpi alla olevista komennoista.

```bash
dotnet build   # kääntää projektin
dotnet run     # kääntää tarvittaessa ja ajaa ohjelman
```

`dotnet build` pelkästään kääntää ohjelman. Jos lähdekoodissa on
[käännösvirheitä](../osa1/2-ensimmainen-ohjelma.md#käännösvirheet), ne
tulostuvat komentoriville samanlaisina kuin Riderin *Build*-ikkunaan.

`dotnet run` tarkistaa ensin, onko lähdekoodi muuttunut edellisen käännöksen
jälkeen, kääntää ohjelman tarvittaessa uudelleen ja käynnistää sen. Tavallisesti
riittää siis pelkkä `dotnet run`.

## Minne käännetty ohjelma menee?

Kääntäjä kirjoittaa tuloksen projektikansion alikansioon `bin`, esimerkiksi
`bin/Debug/net8.0/`. Riderin *Run* tuottaa tiedostot samaan paikkaan. Kansion
`bin` (ja sen vieressä olevan `obj`-kansion) voi poistaa huoletta, sillä ne
syntyvät seuraavalla käännöksellä uudelleen.
