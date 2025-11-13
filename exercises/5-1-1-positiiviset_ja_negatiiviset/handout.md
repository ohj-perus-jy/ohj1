Tee aliohjelma `PosiNega`. Aliohjelma ottaa parametrina kokonaislukutaulukon. 
Aliohjelma lukee taulukkoa niin pitkästi kunnes vastaan tulee luku 0 tai taulukko päättyy. 
Sitten funktio **tulostaa** (huomaa tarkka sanamuoto ja huutomerkki) joko

 (a) "Positiivisia!", jos lukujoukossa oli enemmän positiivisia lukuja kuin negatiivisia, 
 (b) "Negatiivisia!", jos lukujoukossa oli enemmän negatiivisia kuin positiivisia, tai
 (c) "Yhtä monta!", jos positiivisten ja negatiivisten lukujen määrät olivat samat.
  
Huomaa, että emme vertaa lukujen summaa, vaan pelkästään positiivisten ja
negatiivisten lukujen lukumääriä.

Aliohjelma ei palauta mitään, joten sen palautustyyppi on `void`. 

Alla vielä esimerkkejä aliohjelman toiminnasta:

```csharp
// Esimerkki 1: 
// Taulukossa on kaksi positiivista lukua (2, 7) ja yksi negatiivinen
// luku (-35), joten positiivisia lukuja on enemmän kuin negatiivisia.
PosiNega([2, -35, 7, 0]); // Komentoriville tulostuu "Positiivisia!"

// Esimerkki 2:
// Ennen lukua 0 ei ole mitään lukuja, joten negatiivisia ja positiivisa
// on ikään kuin yhtä monta.
PosiNega([0]); // Komentoriville tulostuu "Yhtä monta!"

// Esimerkki 3:
// Vain ennen lukua 0 olevat luvut otetaan laskuihin mukaan.
// Tässä negatiivisia on kaksi kappaletta, positiivisia nolla.
PosiNega([-3, -10, 0, 5, 1, 3, 10]); // Komentoriville tulostuu "Negatiivisia!"
```

Aliohjelman pitää kuitenkin toimia myös muilla kuin esimerkeissä esitetyillä taulukoilla.
