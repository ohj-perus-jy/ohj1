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

1. Aja ohjelma. Mitä se tulostaa, ja miksi?
2. Korjaa ohjelma niin, että se tulostaa oikean tuloksen.
3. Lisää ohjelmaan rivi, joka tulostaa, paljonko 451 °F on celsiusasteina.
