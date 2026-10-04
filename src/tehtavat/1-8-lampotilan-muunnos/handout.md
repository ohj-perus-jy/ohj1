Fahrenheitasteet muunnetaan celsiusasteiksi kaavalla

~~~
C = (F - 32) · 5 / 9
~~~

Alla olevan ohjelman pitäisi tulostaa, paljonko 100 °F on celsiusasteina.
Oikea vastaus on noin 37.8, mutta ohjelma tulostaa jotakin aivan muuta.

```csharp
using System;

public class Lampotila
{
    public static void Main()
    {
        Console.WriteLine((100 - 32) * (5 / 9));
    }
}
```

Korjaa ohjelma niin, että se tulostaa oikean tuloksen, ja lisää siihen toinen
rivi, joka tulostaa, paljonko 451 °F on celsiusasteina.

Vihje: aja ohjelma ensin sellaisenaan ja mieti, mitä sulkeissa oleva `5 / 9`
tuottaa.
