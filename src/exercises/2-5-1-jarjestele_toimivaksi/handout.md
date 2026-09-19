Alla olevan ohjelman rivit ovat menneet sekaisin. Järjestä rivit niin, että
ohjelma kääntyy ja tulostaa

~~~
Pistetaulu
==========
Maija: 120 pistettä
~~~

Älä lisää, poista äläkä muuta rivejä, vaihda vain niiden järjestystä. Laita
pääohjelma `Main` ennen aliohjelmaa `TulostaOtsikko`.

```csharp
        Console.WriteLine("==========");
    public static void TulostaOtsikko()
}
        TulostaOtsikko();
    {
public class Jarjestys
        Console.WriteLine("Pistetaulu");
    }
using System;
    public static void Main()
{
    }
        Console.WriteLine("Maija: 120 pistettä");
    {
```

Mieti lopuksi: tulostaisiko ohjelma saman, jos `TulostaOtsikko` olisi
tiedostossa ennen `Main`-aliohjelmaa? Entä jos kutsu `TulostaOtsikko();`
siirrettäisiin `Main`-aliohjelman viimeiseksi riviksi?
