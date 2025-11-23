# 🛝 Lauseet ja lausekkeet

Lauseet ja lausekkeet ovat eräitä ohjelman perusyksiköitä. 
Lauseen (engl. *statement*) seurauksena _tapahtuu jotakin_, kun taas lauseke (engl. expression) on asia, jonka arvo voidaan laskea.

Lause voi olla esimerkiksi muuttujan määrittely, aliohjelman kutsu, ehto- tai toistolause, ja näitä suoritetaan yksi kerrallaan. Lauseilla ohjataan ohjelman suoritusta. Lause voi sisältää lausekkeen (tai lausekkeita), mutta sen päätehtävä on suorittaa jokin toiminto (esim. muuttujan määrittely, arvon asettaminen, silmukan käynnistäminen tai ehtolauseen tarkistaminen).

Lausekkeilla tuotetaan arvoja. Lauseke voi sisältää esimerkiksi matemaattisia laskutoimituksia, muuttujia, funktiokutsuja tai niiden yhdistelmiä. Näiden tavoitteena on tuottaa ohjelmaan jokin arvo, joka voidaan toimittaa ohjelmassa eteenpäin jatkojalostettavaksi. 

```csharp
// Lause, joka määrittelee muuttujan a. 
// Luku 3 on lauseke -- toki hyvin yksinkertainen sellainen.
int a = 3;     
// Lause, joka lisää muuttujan a arvoa yhdellä
a++;
// Lause, jossa b saa lausekkeen a + 5 arvon, eli 9.
int b = a + 5; 

// if-lause
if (a > 5) // lauseke a > 5
{
  // ...
}
```

Lauseke voi olla myös aliohjelmakutsu, joka palauttaa arvon. Alla Keskiarvo-aliohjelman kutsu on esimerkki lausekkeesta, kuten myös tulostuslause.

```csharp
int a; 
a = Keskiarvo(3, 5); // Sijoituslause, jossa a saa
                     // Keskiarvo-aliohjelman paluuarvon
Console.WriteLine($"Muuttujan a arvo on {a}");
```

Kuten mainittiin, lauseet voivat sisältää lausekkeita. Lausekkeet eivät yleensä sisällä lauseita, mutta tähänkin on hassuja poikkeuksia.

```csharp
int a = 3;
int b = 5;
if (a++ < b) // a++ < b sisältää sekä lausekkeen että lauseen
{
   // ...
}
```

Tässä esitetty jako lausekkeisiin ja lauseisiin on yksinkertaistus. Se, mihin "lokeroon" jokin koodinpätkä kuuluu, vaihtelee ohjelmointikielen mukaan. Ohjelmointikielen spesifikaatio määrittelee sen, mitkä koodinpätkät ovat lauseita, mitkä lausekkeita, ja mitkä jotakin muuta. Jos asia kiinnostaa enemmän, voit tutustua [📖 C#-kielen spesifikaatioon](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/statements).

