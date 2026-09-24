# Moniulotteiset taulukot

Valinnaista lisätietoa lukuihin [5.1 Taulukot](../osa5/1-taulukot.md) ja
[5.2 Taulukot ja silmukat](../osa5/2-taulukot-ja-silmukat.md). Tavallisen
taulukon alkio löytyy yhdellä indeksillä. Kaksiulotteisessa taulukossa
alkioita on riveissä ja sarakkeissa, ja alkioon tarvitaan kaksi indeksiä:
rivi ja sarake.

Kaksiulotteinen taulukko käydään läpi kahdella sisäkkäisellä silmukalla, joten
kertaa tarvittaessa luvun [Toistolauseet](../osa4/1-toistolauseet.md#sisakkaiset-silmukat)
kohta sisäkkäisistä silmukoista. Luvun esimerkeissä rakennetaan
laivanupotuspelin pelilautaa.

## Mihin kaksiulotteista taulukkoa tarvitaan?

* **Lautapelit.** Ristinollan lauta on 3 × 3 ruutua, shakkilauta 8 × 8 ja
  laivanupotuksen lauta tavallisesti 10 × 10. Jokaisen ruudun tila on yksi
  alkio.
* **Pelin kenttä.** Tasohyppelyn tai sokkelopelin kentän voi piirtää
  merkeistä, joissa `#` on seinä ja `*` kerättävä tähti. Ohjelma rakentaa
  kentän merkkien perusteella. Tästä on hyötyä myös harjoitustyössä.
* **Lukujärjestys.** Viisi päivää ja kahdeksan tuntia: rivi on päivä ja
  sarake tunti.
* **Kuvat.** Digikuva on pikselien ruudukko. Full HD -kuvassa on 1080 riviä
  ja 1920 saraketta eli yli kaksi miljoonaa alkiota.

## Kaksiulotteisen taulukon luominen

Kaksiulotteisen taulukon tyypin hakasulkeissa on pilkku. Luotaessa annetaan
rivien ja sarakkeiden määrä tässä järjestyksessä:

```csharp,ignore
int[,] ruudut = new int[3, 4];   // 3 riviä, 4 saraketta, 12 alkiota
```

Alkiot saavat saman oletusarvon kuin yksiulotteisessa taulukossa:
lukutaulukossa `0`, `bool`-taulukossa `false` ja `string`-taulukossa `null`.

Jos alkioiden arvot tiedetään etukäteen, taulukon voi alustaa luettelolla.
Jokainen sisempi aaltosulkupari on yksi rivi:

```csharp,ignore
int[,] ruudut =
{
    { 0, 1, 1, 0 },
    { 0, 0, 0, 0 },
    { 2, 0, 0, 3 }
};
```

Tässä laivanupotuksen laudassa `0` on tyhjä ruutu ja muu luku laivan numero:
laiva 1 on kahden ruudun mittainen, laivat 2 ja 3 yhden ruudun. Taulukko on
muistissa tällainen:

```text
             sarake
             0   1   2   3
           +---+---+---+---+
 rivi  0   | 0 | 1 | 1 | 0 |
           +---+---+---+---+
       1   | 0 | 0 | 0 | 0 |
           +---+---+---+---+
       2   | 2 | 0 | 0 | 3 |
           +---+---+---+---+
```

Ulottuvuuksia voi olla enemmänkin. Esimerkiksi `int[,,] kuutio = new int[4, 4, 4];`
on kolmiulotteinen taulukko, jonka alkioon tarvitaan kolme indeksiä. Tällä
kurssilla kaksi ulottuvuutta riittää.

## Alkioon viittaaminen

Alkioon viitataan kirjoittamalla hakasulkeisiin rivi ja sarake pilkulla
erotettuina. Indeksit alkavat nollasta kuten yksiulotteisessa taulukossa.

```csharp
using System;

public class Laivanupotus
{
    public static void Main()
    {
        int[,] ruudut =
        {
            { 0, 1, 1, 0 },
            { 0, 0, 0, 0 },
            { 2, 0, 0, 3 }
        };

        Console.WriteLine(ruudut[0, 1]);   // rivi 0, sarake 1: tulostaa 1
        Console.WriteLine(ruudut[2, 3]);   // rivi 2, sarake 3: tulostaa 3

        ruudut[1, 2] = 4;                  // uusi laiva rivin 1 sarakkeeseen 2
        Console.WriteLine(ruudut[1, 2]);   // tulostaa 4
    }
}
```

Muista järjestys: **ensin rivi, sitten sarake**. Matematiikassa pisteen
koordinaatit kirjoitetaan toisin päin, (x, y), eli ensin vaakasuunta. Rivi
vastaa pystysuuntaa, ja rivi-indeksi kasvaa *alaspäin*, kun taas matematiikan
ja Jypelin y-koordinaatti kasvaa ylöspäin. Järjestystä voi ajatella kuten
kirjaa: ensin etsitään oikea rivi ja vasta sitten oikea kohta riviltä.

Kokeile: mitä tapahtuu, jos muutat ensimmäisen tulostuksen muotoon
`ruudut[3, 0]`? Taulukossa on vain rivit 0–2, joten ohjelma kaatuu
poikkeukseen `IndexOutOfRangeException` samaan tapaan kuin yksiulotteisessa
taulukossa.

## Taulukon koko: `GetLength`

Yksiulotteisen taulukon pituus saadaan `Length`-ominaisuudesta.
Kaksiulotteisessa taulukossa `Length` kertoo *kaikkien* alkioiden määrän,
joten rivien ja sarakkeiden määrä kysytään metodilla `GetLength`. Sen
argumentti on ulottuvuuden numero: `0` tarkoittaa ensimmäistä indeksiä
(rivit) ja `1` toista (sarakkeet).

```csharp,ignore
int[,] ruudut = new int[3, 4];
Console.WriteLine(ruudut.GetLength(0));   // 3 riviä
Console.WriteLine(ruudut.GetLength(1));   // 4 saraketta
Console.WriteLine(ruudut.Length);         // 12 alkiota
```

## Läpikäynti sisäkkäisillä silmukoilla

Koko taulukko käydään läpi kahdella sisäkkäisellä `for`-silmukalla. Ulompi
silmukka käy läpi rivit ja sisempi kunkin rivin sarakkeet. Alla oleva ohjelma
tulostaa pelilaudan ruudukkona:

```csharp
using System;

public class Laivanupotus
{
    public static void Main()
    {
        int[,] ruudut =
        {
            { 0, 1, 1, 0 },
            { 0, 0, 0, 0 },
            { 2, 0, 0, 3 }
        };

        for (int rivi = 0; rivi < ruudut.GetLength(0); rivi++)
        {
            for (int sarake = 0; sarake < ruudut.GetLength(1); sarake++)
            {
                Console.Write(ruudut[rivi, sarake] + " ");
            }
            Console.WriteLine();   // rivi valmis, seuraava alkaa uudelta riviltä
        }
    }
}
```

```text
0 1 1 0
0 0 0 0
2 0 0 3
```

Sisempi silmukka suoritetaan kokonaan jokaisella ulomman silmukan
kierroksella: ensin rivin 0 kaikki sarakkeet, sitten rivin 1 kaikki sarakkeet
ja niin edelleen. `Console.Write` ei vaihda riviä, joten saman rivin luvut
tulevat peräkkäin, ja rivinvaihto tulostetaan vasta sisemmän silmukan
jälkeen.

Silmukkamuuttujat on tässä nimetty `rivi` ja `sarake` eikä `i` ja `j`. Silloin
lausekkeesta `ruudut[rivi, sarake]` näkee heti, että indeksit ovat oikeassa
järjestyksessä, ja rivin ehtoon kuuluu `GetLength(0)` ja sarakkeen ehtoon
`GetLength(1)`.

Jos indeksejä ei tarvita, `foreach` käy läpi kaikki alkiot riveittäin.
Esimerkiksi tyhjät ruudut lasketaan näin:

```csharp,ignore
int tyhjia = 0;
foreach (int ruutu in ruudut)
{
    if (ruutu == 0) tyhjia++;
}
Console.WriteLine("Tyhjiä ruutuja: " + tyhjia);   // Tyhjiä ruutuja: 8
```

`foreach` ei kerro, millä rivillä tai missä sarakkeessa alkio on, eikä sillä
voi muuttaa alkioita. Silloin tarvitaan `for`-silmukat.

## Kaksiulotteinen taulukko parametrina

Kaksiulotteinen taulukko välitetään aliohjelmalle kuten yksiulotteinenkin;
parametrin tyyppi on `int[,]`. Alla oleva funktio etsii laudalta rivin, jolla
on eniten tilaa uudelle laivalle. Ulompi silmukka käy läpi rivit, ja sisempi
laskee kunkin rivin vapaat ruudut.

```csharp
using System;

public class Laivanupotus
{
    public static void Main()
    {
        int[,] ruudut =
        {
            { 0, 1, 1, 0 },
            { 0, 0, 0, 0 },
            { 2, 0, 0, 3 }
        };
        Console.WriteLine(RiviJollaEnitenVapaata(ruudut));   // tulostaa 1
    }

    /// <summary>
    /// Etsii rivin, jolla on eniten vapaita ruutuja (arvo 0). Jos tällaisia
    /// rivejä on useita, palauttaa niistä ensimmäisen.
    /// </summary>
    /// <param name="ruudut">pelilauta, 0 = vapaa, muu luku = laivan numero</param>
    /// <returns>rivin indeksi tai -1, jos vapaita ruutuja ei ole</returns>
    /// <example>
    /// <pre name="test">
    /// int[,] lauta1 = { {1, 0, 2}, {0, 0, 2}, {3, 3, 3} };
    /// RiviJollaEnitenVapaata(lauta1) === 1;
    /// int[,] lauta2 = { {1, 1, 1}, {2, 2, 2} };
    /// RiviJollaEnitenVapaata(lauta2) === -1;
    /// int[,] lauta3 = { {0, 1}, {0, 2}, {0, 0} };
    /// RiviJollaEnitenVapaata(lauta3) === 2;
    /// </pre>
    /// </example>
    public static int RiviJollaEnitenVapaata(int[,] ruudut)
    {
        int paras = -1;
        int enitenVapaita = 0;
        for (int rivi = 0; rivi < ruudut.GetLength(0); rivi++)
        {
            int vapaita = 0;
            for (int sarake = 0; sarake < ruudut.GetLength(1); sarake++)
            {
                if (ruudut[rivi, sarake] == 0) vapaita++;
            }
            if (vapaita > enitenVapaita)
            {
                paras = rivi;
                enitenVapaita = vapaita;
            }
        }
        return paras;
    }
}
```

Testeissä taulukko luodaan ensin muuttujaan omalla rivillään. Huomaa, että
testilaudat eivät ole neliöitä: `lauta2` on 2 × 3 ja `lauta3` 3 × 2. Jos
funktiossa olisi `GetLength(0)` ja `GetLength(1)` vaihtaneet paikkaa,
neliönmuotoinen lauta ei paljastaisi virhettä, mutta suorakulmainen
paljastaa. Lisää ComTestin ja kaksiulotteisten taulukoiden yhdistämisestä,
myös taulukon palauttavan funktion testaamisesta, on luvun
[Testaaminen ComTestillä](../osa4/4-testaaminen-comtestilla.md#kaksiulotteiset-taulukot)
lopussa.

Kaksiulotteinen taulukko on yksiulotteisen tapaan
[viite](../osa5/1-taulukot.md#taulukko-on-viite). Jos aliohjelma muuttaa
parametrina saamansa taulukon alkioita, muutos näkyy myös kutsujalle.

## Esimerkki: pelikenttä merkkitaulukosta Jypelissä

Pelin kentän voi kirjoittaa `char[,]`-taulukoksi, josta näkee suoraan, miltä
kenttä näyttää. Aliohjelma `LuoKentta` käy taulukon läpi ja luo jokaisen
merkin kohdalle sitä vastaavan olion: `#` on seinä, `P` pelaaja ja `*` tähti.
Välilyönnin kohdalle ei luoda mitään.

```csharp,feature-jypeli
using Jypeli;

public class Kentta : PhysicsGame
{
    const double KOKO = 40;

    public override void Begin()
    {
        char[,] kentta =
        {
            { '#', '#', '#', '#', '#', '#', '#', '#' },
            { '#', 'P', ' ', ' ', ' ', ' ', '*', '#' },
            { '#', ' ', '#', '#', ' ', '#', ' ', '#' },
            { '#', ' ', ' ', '*', ' ', '#', ' ', '#' },
            { '#', '#', '#', '#', '#', '#', '#', '#' }
        };
        LuoKentta(kentta);
        Camera.ZoomToAllObjects();
    }

    public void LuoKentta(char[,] kentta)
    {
        for (int rivi = 0; rivi < kentta.GetLength(0); rivi++)
        {
            for (int sarake = 0; sarake < kentta.GetLength(1); sarake++)
            {
                double x = sarake * KOKO;
                double y = -rivi * KOKO;
                switch (kentta[rivi, sarake])
                {
                    case '#':
                        LuoSeina(x, y);
                        break;
                    case 'P':
                        LuoPelaaja(x, y);
                        break;
                    case '*':
                        LuoTahti(x, y);
                        break;
                }
            }
        }
    }

    public void LuoSeina(double x, double y)
    {
        PhysicsObject seina = PhysicsObject.CreateStaticObject(KOKO, KOKO);
        seina.Position = new Vector(x, y);
        seina.Color = Color.DarkGray;
        Add(seina);
    }

    public void LuoPelaaja(double x, double y)
    {
        PhysicsObject pelaaja = new PhysicsObject(KOKO * 0.8, KOKO * 0.8);
        pelaaja.Shape = Shape.Circle;
        pelaaja.Position = new Vector(x, y);
        pelaaja.Color = Color.Blue;
        Add(pelaaja);
    }

    public void LuoTahti(double x, double y)
    {
        GameObject tahti = new GameObject(KOKO * 0.7, KOKO * 0.7);
        tahti.Shape = Shape.Star;
        tahti.Position = new Vector(x, y);
        tahti.Color = Color.Yellow;
        Add(tahti);
    }
}
```

Olennaista on, miten rivi ja sarake muuttuvat koordinaateiksi. Sarake on
vaakasuunta, joten siitä tulee x. Rivi on pystysuunta, joten siitä tulee y.
Rivi-indeksi kasvaa alaspäin mutta Jypelin y ylöspäin, joten y saa
miinusmerkin. Ilman sitä kenttä piirtyisi ylösalaisin. Lopuksi
`Camera.ZoomToAllObjects()` siirtää kameran niin, että koko kenttä näkyy.

Kentän muuttaminen ei vaadi koodin muuttamista: piirrä taulukkoon uusi
sokkelo, niin peli rakentaa sen. Jypelissä on tätä varten myös valmis
`TileMap`-luokka, joka tekee saman läpikäynnin puolestasi ja osaa lukea
kentän tekstitiedostosta.

## Taulukko taulukoista

Taulukon `int[,]` kaikki rivit ovat yhtä pitkiä. Jos rivien pituus vaihtelee,
käytetään *taulukkoa taulukoista* (engl. *jagged array*): taulukkoa, jonka
jokainen alkio on oma yksiulotteinen taulukkonsa. Tyypissä on kaksi
hakasulkuparia, ja alkioon viitataan kahdella erillisellä indeksillä:
`pisteet[1][3]`.

Alla olevassa esimerkissä on kolmen viikon tehtäväpisteet. Joka viikolla on
eri määrä tehtäviä, joten rivit ovat eripituisia.

```csharp
using System;

public class Viikkopisteet
{
    public static void Main()
    {
        int[][] pisteet =
        {
            new int[] { 1, 1, 0 },
            new int[] { 1, 1, 1, 1, 1 },
            new int[] { 0, 1 }
        };

        for (int viikko = 0; viikko < pisteet.Length; viikko++)
        {
            int summa = 0;
            for (int tehtava = 0; tehtava < pisteet[viikko].Length; tehtava++)
            {
                summa += pisteet[viikko][tehtava];
            }
            Console.WriteLine($"Viikko {viikko + 1}: {summa}/{pisteet[viikko].Length}");
        }
    }
}
```

Nyt `pisteet.Length` on rivien määrä (3), ja `pisteet[viikko]` on
yksittäinen rivi, jonka pituus on `pisteet[viikko].Length`. Siksi sisemmän
silmukan ehto riippuu siitä, millä rivillä ollaan.

Kumpaa kannattaa käyttää? Kun kaikki rivit ovat saman mittaisia, kuten
pelilaudassa, lukujärjestyksessä tai kuvassa, `int[,]` on luontevampi: sen
koko annetaan kerralla, eikä mikään rivi voi jäädä vahingossa lyhyemmäksi.
Kun rivit ovat eripituisia, tarvitaan `int[][]`.

## Tyypillisiä virheitä

**Väärä indeksointitapa.** Monessa muussa kielessä, kuten Javassa, C:ssä ja
Pythonissa, kaksiulotteisen taulukon alkioon viitataan muodossa
`t[rivi][sarake]`. C#:n taulukolle `int[,]` se ei kelpaa,
ja kääntäjä ilmoittaa `CS0022: Wrong number of indices inside []; expected 2`.
Aja alla oleva ohjelma, niin näet virheilmoituksen, ja korjaa se sitten
muotoon `ruudut[1, 0]`.

```csharp
using System;

public class Laivanupotus
{
    public static void Main()
    {
        int[,] ruudut = { { 0, 1 }, { 2, 0 } };
        Console.WriteLine(ruudut[1][0]);
    }
}
```

Sama virhe toisin päin: taulukolle `int[][]` pitää kirjoittaa `t[1][0]`, ei
`t[1, 0]`.

**`Length` silmukan ehtona.** `Length` on kaikkien alkioiden määrä, ei rivien
määrä. Laudassa, jossa on 3 riviä ja 4 saraketta, `Length` on 12, joten alla
oleva silmukka yrittää lukea rivin 3 ja kaatuu poikkeukseen
`IndexOutOfRangeException`. Käytä `GetLength(0)` ja `GetLength(1)`.

```csharp,ignore
for (int rivi = 0; rivi < ruudut.Length; rivi++)   // väärin: Length on 12
```

**Rivit ja sarakkeet sekaisin.** Jos rivin silmukassa on `GetLength(1)` ja
sarakkeen silmukassa `GetLength(0)`, ohjelma toimii neliönmuotoisella
taulukolla mutta kaatuu tai jättää alkioita käsittelemättä suorakulmaisella.
Siksi testeissä kannattaa aina olla myös taulukko, jossa rivejä ja sarakkeita
on eri määrä.

**Eripituiset rivit alustuksessa.** Taulukon `int[,]` jokaisella rivillä
pitää olla yhtä monta alkiota. Jos yhdeltä riviltä puuttuu alkio, kääntäjä
ilmoittaa `CS0847: An array initializer of length '4' is expected`. Jos rivien
todella kuuluu olla eripituisia, käytä taulukkoa `int[][]`.

**x ja y väärin päin Jypelissä.** Jos kirjoitat `x = rivi * KOKO` ja
`y = -sarake * KOKO`, kenttä piirtyy kyljelleen. Jos unohdat miinusmerkin,
kenttä piirtyy ylösalaisin. Muista: sarakkeesta tulee x, rivistä y.

## Yhteenveto

* Kaksiulotteinen taulukko luodaan `new int[rivit, sarakkeet]` tai
  luettelolla, jossa jokainen sisempi aaltosulkupari on rivi.
* Alkioon viitataan `t[rivi, sarake]`: ensin rivi, sitten sarake.
* `GetLength(0)` on rivien ja `GetLength(1)` sarakkeiden määrä; `Length` on
  kaikkien alkioiden määrä.
* Läpikäyntiin tarvitaan kaksi sisäkkäistä silmukkaa: ulompi riveille,
  sisempi sarakkeille.
* Eripituisille riveille käytetään taulukkoa taulukoista, `int[][]`, jonka
  alkioon viitataan `t[rivi][sarake]`.

## Testaa tietosi

Valitse vastaus, niin näet heti, menikö se oikein ja miksi. Pisteitä ei jaeta,
mutta huomaat, mitä asioita kannattaa vielä kerrata.

<visa>

**Totta vai tarua?**

<vaittama vastaus="tarua">
Kun `int[,] t = new int[3, 4];`, niin `t.Length` on rivien määrä eli 3.
<perustelu>
**Tarua.** Kaksiulotteisen taulukon `Length` on kaikkien alkioiden määrä,
tässä 3 · 4 = 12. Rivien määrä saadaan lausekkeella `t.GetLength(0)`.
</perustelu>
</vaittama>

<vaittama vastaus="totta">
Taulukon `int[,]` kaikilla riveillä on yhtä monta alkiota.
<perustelu>
**Totta.** Koko annetaan kerralla, esimerkiksi `new int[3, 4]`, ja
alustuksessa kääntäjä vaatii jokaiselle riville yhtä monta alkiota (`CS0847`).
Eripituisia rivejä varten on taulukko taulukoista, `int[][]`.
</perustelu>
</vaittama>

<vaittama vastaus="totta">
`foreach`-silmukka käy läpi kaksiulotteisen taulukon kaikki alkiot.
<perustelu>
**Totta.** `foreach` käy alkiot läpi riveittäin, ensin rivin 0 kaikki
sarakkeet, sitten rivin 1 ja niin edelleen. Se ei kuitenkaan kerro alkion
riviä ja saraketta, eikä sillä voi muuttaa alkioita.
</perustelu>
</vaittama>

**Monivalinta.** Yksi vaihtoehto on oikein.

<kysymys>
Taulukko on luotu lauseella `int[,] t = new int[3, 5];`. Millä lausekkeella
viitataan oikean alakulman alkioon eli viimeisen rivin viimeiseen alkioon?

- [ ] `t[3, 5]`
- [x] `t[2, 4]`
- [ ] `t[4, 2]`
- [ ] `t[2][4]`

<perustelu>
**b.** Rivejä on 3 ja sarakkeita 5, ja indeksit alkavat nollasta, joten
viimeinen rivi on 2 ja viimeinen sarake 4. Rivi kirjoitetaan ensin. `t[3, 5]`
on taulukon ulkopuolella, ja `t[2][4]` on taulukon `int[][]` merkintätapa,
joka ei käänny taulukolle `int[,]`.
</perustelu>
</kysymys>

<kysymys>
Mitä `t.GetLength(1)` palauttaa, kun `int[,] t = new int[3, 5];`?

- [ ] 3
- [x] 5
- [ ] 15
- [ ] 1

<perustelu>
**b.** Argumentti `1` tarkoittaa toista ulottuvuutta eli sarakkeita, joita on
5. `GetLength(0)` palauttaisi rivien määrän 3, ja `Length` kaikkien alkioiden
määrän 15.
</perustelu>
</kysymys>

</visa>

## Tehtävät

Tehtävät ovat valinnaisia, eikä niitä palauteta TIMiin.

<task>
  <task-title num="M1">Kertotaulu</task-title>
  <handout>

  Luo 10 × 10 -kokoinen `int[,]`-taulukko ja täytä se silmukoilla niin, että
  alkiossa `[rivi, sarake]` on tulo `(rivi + 1) * (sarake + 1)`. Tulosta
  taulukko sitten ruudukkona niin, että sarakkeet ovat tasattuja. Vinkki:
  `$"{luku,4}"` tulostaa luvun neljän merkin levyiseen kenttään.

  </handout>
</task>

<task>
  <task-title num="M2">Rivin ja sarakkeen summa</task-title>
  <handout>

  Kirjoita funktiot `RivinSumma(int[,] taulukko, int rivi)` ja
  `SarakkeenSumma(int[,] taulukko, int sarake)`, jotka palauttavat annetun
  rivin tai sarakkeen alkioiden summan. Kirjoita funktioille ComTest-testit ja
  käytä testeissä ainakin yhtä taulukkoa, joka ei ole neliö.

  </handout>
</task>

<task>
  <task-title num="M3">Ristinollan voittaja</task-title>
  <handout>

  Ristinollan lauta on `char[,]`-taulukko, jossa on merkkejä `'X'`, `'O'` ja
  `' '` (tyhjä). Kirjoita funktio `OnkoVoittanut(char[,] lauta, char merkki)`,
  joka palauttaa `true`, jos annetulla merkillä on täysi rivi, täysi sarake tai
  täysi lävistäjä. Kirjoita funktio niin, että se toimii minkä tahansa
  kokoiselle neliönmuotoiselle laudalle, ja testaa se ComTestillä.

  </handout>
</task>

<task>
  <task-title num="M4">Miinaharava <i class="bi bi-stars"></i></task-title>
  <handout>

  Miinaharavan lauta on `bool[,]`-taulukko, jossa `true` tarkoittaa miinaa.
  Kirjoita funktio `NaapuriMiinat(bool[,] miinat, int rivi, int sarake)`, joka
  palauttaa, montako miinaa ruudun ympärillä olevassa kahdeksassa ruudussa on.
  Huomaa, että reunalla ja nurkassa olevalla ruudulla on vähemmän naapureita:
  funktio ei saa lukea taulukon ulkopuolelta. Testaa ainakin keskellä, reunalla
  ja nurkassa oleva ruutu.

  </handout>
</task>

<task>
  <task-title num="M5">Oma kenttä Jypelissä</task-title>
  <handout>

  Ota pohjaksi yllä oleva [pelikenttäesimerkki](#esimerkki-pelikentta-merkkitaulukosta-jypelissa).
  Piirrä taulukkoon oma, isompi kenttä ja lisää uusi merkki, esimerkiksi `M`
  maalille, sekä sille oma `Luo`-aliohjelma. Tarkista, että kenttä näkyy
  ruudulla samoin päin kuin taulukossa.

  </handout>
</task>
