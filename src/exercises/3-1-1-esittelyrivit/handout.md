Alla olevassa ohjelmassa on valmiina pääohjelma, joka kutsuu neljää
aliohjelmaa. Aliohjelmia ei vielä ole, joten ohjelma ei käänny.

```csharp
using System;

public class Esittelyrivit
{
    public static void Main()
    {
        TulostaTervehdys("Maija");
        TulostaIka("Pekka", 21);
        TulostaReunus('#', 20);
        TulostaKeskiarvo(7.5, 9);
    }
}
```

1. Kirjoita jokaiselle aliohjelmalle esittelyrivi kutsun perusteella ja tee
   aliohjelmista tyngät, joissa on tyhjä runko. Käännä ohjelma. Älä jatka,
   ennen kuin ohjelma kääntyy.
2. Kirjoita aliohjelmien rungot niin, että ohjelma tulostaa

~~~
Hei, Maija!
Pekka on 21-vuotias.
####################
8.25
~~~

Älä muuta pääohjelmaa. Anna parametreille nimet, joista näkee, mitä ne
tarkoittavat. Mieti erityisesti, minkä tyyppisiä `TulostaKeskiarvo`-aliohjelman
parametrien pitää olla, jotta aliohjelmaa voi kutsua myös argumenteilla
`(8, 9.5)`.
