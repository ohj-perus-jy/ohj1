# <span class="part-icon">🛠️</span> Ohjelmointiympäristö kuntoon

Ensimmäisten viikkojen tehtävät voi periaatteessa suorittaa verkkoselaimessa, mutta varsin pian on tarpeen saada oma ohjelmointiympäristö toimimaan tietokoneella. 

Oman tietokoneen käyttöönottaminen ohjelmointia varten on tärkeä askel kohti itsenäisempää ohjelmointia. Se mahdollistaa esimerkiksi koodin kirjoittamisen, tallentamisen ja suorittamisen ilman internet-yhteyttä. Lisäksi omaa ympäristöä on helpompi mukauttaa omien tarpeiden mukaan, kuten vaihtaa värejä, fontteja ja muita asetuksia. Myöhemmin opit käyttämään versionhallintaa sekä debuggausta, jotka vaativat ohjelmointiympäristön omalla tietokoneellasi. 

## Rider

Tällä opintojaksolla käytämme **JetBrains Rider** -ohjelmointiympäristöä. Rider on monipuolinen IDE (engl. *Integrated Development Environment*). Se tarjoaa tehokkaita työkaluja koodin kirjoittamiseen, virheiden etsimiseen ja projektien hallintaan. 

Riderilla voi tehdä niin tekstipohjaisia sovelluksia kuin Jypeli-pelejäkin. 

## Graafinen sovellus Jypeli-kirjastolla

Jypeli on C#-kielellä kirjoitettu pelimoottori, joka on suunniteltu erityisesti opetuskäyttöön. Jypeli tarjoaa helppokäyttöisen tavan pelien luomiseen, mikä tekee siitä hyvän valinnan tälle kurssille.

Jypeli-kirjaston avulla voit luoda 2D-pelejä, joissa on grafiikkaa ja ääniä. Jypeliin on tarjolla paljon valmiita [ohjeita ja esimerkkejä]() **TODO: Linkki**, jotka auttavat sinua pääsemään alkuun pelien tekemisessä.

> [!TODO]
> Lisää Jypeli-esimerkki

```csharp
//-public class Lumiukko {
    public override void Begin()
    {
        PhysicsObject pallo = new PhysicsObject(50, 50);
    }
//-}
```

## Visual Studio Code

Vaihtoehtoisesti voit käyttää myös **Visual Studio Code** -editoria (lyhyesti VS Code), joka on hyvin suosittu tekstieditori, jota voi käyttää myös IDE:nä. VS Coden asennusohjeet löytyvät myöskin [Työkalut-sivulta]() **TODO: Linkki**


## Tehtävät

Asenna Rider ja Jypeli omalle tietokoneellesi [Työkalut-sivulla]() **TODO: Linkki** olevia ohjeita noudattaen. 