Alla oleva ohjelma laskee kahden luvun keskiarvon ja tulostaa sen.

```csharp
using System;

public class Keskiarvot
{
    public static void Main()
    {
        LaskeKeskiarvo(7.5, 9);
        LaskeKeskiarvo(2, 3);
    }

    public static void LaskeKeskiarvo(double a, double b)
    {
        Console.WriteLine((a + b) / 2);
    }
}
```

1. Muuta aliohjelma funktioksi `Keskiarvo`, joka *palauttaa* keskiarvon eikä
   tulosta mitään. Muuta pääohjelmaa niin, että ohjelma tulostaa saman kuin
   ennenkin.
2. Laske ja tulosta pääohjelmassa neljän luvun `7.5`, `9`, `2` ja `3` keskiarvo
   käyttämällä *vain* `Keskiarvo`-funktiota, ilman omia jako- tai
   yhteenlaskuja. Vihje: funktion kutsu kelpaa argumentiksi.
3. Olisiko kohta 2 onnistunut alkuperäisellä `LaskeKeskiarvo`-aliohjelmalla?
   Perustele yhdellä virkkeellä.
