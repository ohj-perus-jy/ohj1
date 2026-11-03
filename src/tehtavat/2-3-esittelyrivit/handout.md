Alla olevassa ohjelmassa on valmiina pääohjelma, joka kutsuu viittä aliohjelmaa.
Aliohjelmia ei vielä ole, joten ohjelma ei käänny.

```csharp
using System;

public class Esittelyrivit
{
    public static void Main()
    {
        string tervehdys = Tervehdys("Maija");
        int ika = IkaEnsiVuonna(21);
        double keskiarvo = Keskiarvo(7.5, 9);
        bool aikuinen = OnkoTaysiIkainen(17);
        string reunus = Reunus('#', 20);

        Console.WriteLine(tervehdys);
        Console.WriteLine($"Pekka on ensi vuonna {ika}-vuotias.");
        Console.WriteLine(keskiarvo);
        Console.WriteLine(aikuinen);
        Console.WriteLine(reunus);
    }
}
```

1. Kirjoita jokaiselle aliohjelmalle esittelyrivi kutsun perusteella ja tee
   funktioista tyngät, jotka palauttavat jonkin oikean tyyppisen arvon
   (esimerkiksi `return 0;`). Käännä ohjelma. Älä jatka, ennen kuin ohjelma
   kääntyy.
2. Kirjoita aliohjelmien rungot niin, että ohjelma tulostaa

~~~
Hei, Maija!
Pekka on ensi vuonna 22-vuotias.
8.25
False
####################
~~~

Älä muuta pääohjelmaa. Aliohjelmissa ei saa olla `Console.WriteLine`-kutsuja.
Anna parametreille nimet, joista näkee, mitä ne tarkoittavat. Mieti
erityisesti, minkä tyyppisiä `Keskiarvo`-funktion parametrien pitää olla, jotta
aliohjelmaa voi kutsua myös argumenteilla `(8, 9.5)`.

Vihje: `new string('#', 20)` tekee merkkijonon, jossa merkki `#` toistuu 20
kertaa.
