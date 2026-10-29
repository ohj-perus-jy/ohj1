# Mitä `static` tarkoittaa?

Kurssin konsoliohjelmissa jokaisen
aliohjelman edessä lukee `public static`, mutta Jypeli-peleissä pelkkä
`public`. Sääntö riittää kurssin suorittamiseen, mutta moni varmasti haluaa tietää,
mistä siinä on kyse.

Sana `static` on olio-ohjelmoinnin käsite, ja se tarkoittaa eri kielissä
hieman eri asioita. C#-kielessä siitä kannattaa muistaa kaksi pääasiaa:

1. Staattinen (engl. *static*) jäsen eli attribuutti tai aliohjelma kuuluu
   *luokalle itselleen*, ei millekään luokasta luodulle oliolle.
2. Staattinen attribuutti on olemassa vain *yhtenä kappaleena*, joka on
   yhteinen kaikille luokan olioille.

Teksti olettaa, että tunnet [muuttujat](../osa2/1-muuttujat-ja-tietotyypit.md),
[aliohjelmat](../osa3/2-aliohjelmat-ilman-paluuarvoa.md),
[attribuutit](../osa3/3-muuttujien-nakyvyys.md#attribuutit) ja olion luomisen
`new`-operaattorilla.

## Luokan jäsen vai olion jäsen?

Luokka määrittelee olion rakenteen, ja olio on tuon rakenteen mukaan tehty yksilö.
Luokassa määritellyt attribuutit ja aliohjelmat ovat *jäseniä* (engl.
*member*). Jäsen voi kuulua joko oliolle tai luokalle:

* **Olion jäsen** on jokaisella oliolla omansa. Kun `PhysicsObject`-luokasta
  luodaan kolme palloa, jokaisella on oma `X`-ominaisuutensa, ja `Hit`-metodia
  kutsutaan tietyn pallon kautta: `pallo.Hit(impulssi)`. Ilman oliota ei ole
  mitään, mitä kutsua.
* **Staattinen jäsen** kuuluu luokalle. Se on olemassa yhtenä kappaleena, ja
  sitä käytetään luokan nimellä: `Math.Sqrt(2)`, `Math.PI`. Mitään
  "Math-oliota" ei luoda eikä voi luodakaan.

Olet käyttänyt staattisia jäseniä ensimmäisestä ohjelmasta lähtien:
`Console.WriteLine`, `Math.Max`, `int.Parse`, `Math.PI` ja Jypelin
`RandomGen.NextInt` ja `Color.Red` ovat kaikki staattisia. Olion jäseniä ovat
esimerkiksi `pallo.Color` ja `pallo.X`, jotka kuuluvat `pallo` -oliolle ja pelin `Add`-metodi, joka kuuluu
pelioliolle.

<details closed><summary><i class="jyu-star"></i> Valinnaista lisätietoa: Staattinen luokka</summary>

Myös koko luokka voi olla staattinen: `public static class Math`. Tällaisesta
luokasta ei voi luoda olioita, ja sen kaikkien jäsenten on oltava staattisia.
`Math` on pelkkä kokoelma laskufunktioita, joille oliota ei tarvita, joten se
on luonteva staattinen luokka. Myös oma konsoliohjelmasi voisi olla staattinen
luokka, mutta kurssilla sitä ei kirjoiteta.

</details>

## Staattinen aliohjelma

Staattista aliohjelmaa kutsutaan luokan nimellä. Jos kutsu tehdään saman
luokan sisältä, luokan nimen voi jättää pois, kuten kurssin konsoliohjelmissa
on tehty koko ajan. Tyypillistä staattiselle aliohjelmalle on, että se saa
kaiken tarvitsemansa tiedon parametreina.

```csharp
using System;

public class Laskut
{
    public static int Summa(int a, int b)
    {
        return a + b;
    }
}

public class Ohjelma
{
    public static void Main()
    {
        int yht = Laskut.Summa(23, 42);   // kutsu luokan nimellä
        Console.WriteLine(yht);
    }
}
```

Staattista aliohjelmaa *ei* voi kutsua olion kautta, koska se ei kuulu
oliolle. Seuraava ohjelma ei käänny:

```csharp,ignore
public class Ohjelma
{
    public static void Main()
    {
        Laskut laskut = new Laskut();
        Console.WriteLine(laskut.Summa(23, 42));   // virhe
    }
}
```

```text
error CS0176: Member 'Laskut.Summa(int, int)' cannot be accessed with
an instance reference; qualify it with a type name instead
```

Kääntäjä neuvoo korjauksen: käytä olion nimen sijaan luokan nimeä.

## Staattisesta aliohjelmasta ei pääse olion jäseniin

Olion metodi voi käyttää vapaasti sekä olion omia attribuutteja että luokan
staattisia jäseniä. Toiseen suuntaan tämä ei toimi: staattinen aliohjelma ei
voi käyttää olion attribuutteja eikä kutsua olion metodeja, koska sillä ei ole
mitään oliota, jonka jäseniin viitata. Olioita voi olla nolla tai tuhat, eikä
kääntäjä voi tietää, minkä niistä tarkoitat.

```csharp,ignore
public class Laskuri
{
    private int lukema;   // olion attribuutti, ei staattinen

    public static void Kasvata()
    {
        lukema++;   // virhe
    }
}
```

```text
error CS0120: An object reference is required for the non-static field,
method, or property 'Laskuri.lukema'
```

Tämä on `static`-sanaan liittyvistä virheistä selvästi yleisin. Se tulee
aina, kun staattinen aliohjelma yrittää käyttää jotakin, mikä ei ole
staattista. Jatkossa nähdään, että korjaus on eri konsoliohjelmassa ja
Jypeli-pelissä.

## Miksi konsoliohjelmassa kaikki on staattista?

Kun ohjelma käynnistyy, yhtään oliota ei ole vielä luotu. Siksi `Main`-aliohjelman
on oltava staattinen: suoritusympäristö kutsuu sitä luokan nimellä ilman
oliota. Edellisen kohdan säännön mukaan staattinen `Main` voi kutsua suoraan
vain staattisia aliohjelmia, ja ne puolestaan vain staattisia, joten koko
konsoliohjelma on staattinen. Kurssin konsoliohjelmat eivät luo olioita omasta
luokastaan, joten muuta vaihtoehtoa ei oikeastaan ole.

Jos `static` unohtuu aliohjelman edestä, kääntäjä antaa virheen `CS0120`:

```csharp,ignore
public class Ohjelma
{
    public static void Main()
    {
        Tervehdi();   // virhe CS0120
    }

    public void Tervehdi()   // static puuttuu
    {
        Console.WriteLine("Hei!");
    }
}
```

Konsoliohjelmassa korjaus on aina sama: lisää `static` aliohjelman eteen.

## Miksi Jypeli-pelissä `static` jätetään pois?

Jypeli-peli on olio. Ohjelman käynnistyessä pelin pääohjelma luo peliluokastasi
olion ja käynnistää sen, ja vasta tämä olio kutsuu `Begin`-aliohjelmaasi.
`Begin` on siis peliolion metodi, samoin `Add`, `Level`, `Keyboard` ja kaikki
muu, mitä `PhysicsGame`-luokalta peritään, sekä omat attribuuttisi, kuten
`pelaaja`. Niitä voi käyttää vain olion metodista, joten pelin aliohjelmat
kirjoitetaan ilman `static`-sanaa.

Jos `static` lisätään Jypeli-aliohjelmaan, tuloksena on tuttu virhe:

```csharp,ignore
public override void Begin()
{
    LuoPallo(0, 0);
}

public static void LuoPallo(double x, double y)   // static on tässä väärin
{
    PhysicsObject pallo = new PhysicsObject(40, 40);
    pallo.Position = new Vector(x, y);
    Add(pallo);   // virhe CS0120: Add on peliolion metodi
}
```

Jypelissä korjaus on päinvastainen kuin konsoliohjelmassa: poista `static`
aliohjelman edestä. Älä sen sijaan "korjaa" virhettä tekemällä attribuuteista
staattisia, sillä silloin ongelma vain siirtyy, kuten seuraavaksi nähdään.

Jypeli-pelissäkin aliohjelma voi olla staattinen, jos se laskee tuloksensa
pelkistä parametreistaan eikä käytä pelin jäseniä. Tällaisen aliohjelman voi
testata ComTestillä samalla tavalla kuin konsoliohjelman funktion käynnistämättä
peliä.

```csharp,ignore
/// <summary>
/// Laskee kahden pisteen välisen etäisyyden.
/// </summary>
public static double Etaisyys(Vector a, Vector b)
{
    return (a - b).Magnitude;
}
```

## Staattinen attribuutti

Tavallinen attribuutti on jokaisella oliolla omansa. `Laskuri`-luokan
jokaisella oliolla on oma `lukema`, ja yhden laskurin kasvattaminen ei vaikuta
toiseen:

```csharp
using System;

public class Laskuri
{
    private int lukema = 0;   // jokaisella oliolla oma

    public int Kasvata()
    {
        lukema++;
        return lukema;
    }
}

public class Ohjelma
{
    public static void Main()
    {
        Laskuri a = new Laskuri();
        Laskuri b = new Laskuri();
        Console.WriteLine(a.Kasvata());   // 1
        Console.WriteLine(a.Kasvata());   // 2
        Console.WriteLine(b.Kasvata());   // 1
    }
}
```

Kun attribuutti merkitään staattiseksi, sitä on vain yksi kappale, ja kaikki
oliot kasvattavat samaa lukemaa. Ainoa muutos ohjelmassa on sana `static`,
mutta tuloste on nyt 1, 2, 3:

```csharp
using System;

public class Laskuri
{
    private static int lukema = 0;   // yksi yhteinen kappale

    public int Kasvata()
    {
        lukema++;
        return lukema;
    }
}

public class Ohjelma
{
    public static void Main()
    {
        Laskuri a = new Laskuri();
        Laskuri b = new Laskuri();
        Console.WriteLine(a.Kasvata());   // 1
        Console.WriteLine(a.Kasvata());   // 2
        Console.WriteLine(b.Kasvata());   // 3
    }
}
```

Muistissa ero näyttää tältä. Vasemmalla lukema on olion sisällä, oikealla
luokan yhteisessä osassa, johon oliot vain viittaavat:

```text
Tavallinen attribuutti            Staattinen attribuutti

a ──► Laskuri                     Laskuri-luokka
      lukema: 2                       lukema: 3

b ──► Laskuri                     a ──► Laskuri   (ei omaa lukemaa)
      lukema: 1                   b ──► Laskuri   (ei omaa lukemaa)
```

Staattinen attribuutti on käytännössä globaali muuttuja: mikä tahansa luokan
olio voi muuttaa sitä milloin vain, ja virheen sattuessa on vaikea selvittää,
kuka arvoa muutti ja milloin. Siksi staattisia attribuutteja käytetään vain
harvoissa erikoistilanteissa, ja harjoitustyössä julkiset staattiset muuttujat
on [kielletty](../harjoitustyo.md#htosat).

Hyväksyttävä käyttötapa on arvo, joka on tarkoitettu vakioksi mutta jota
`const` ei pysty ilmaisemaan: `const` kelpaa vain luvuille, merkkijonoille ja
totuusarvoille. Taulukko tai olio merkitään silloin `static readonly`, jolloin
se luodaan kerran ja sitä käytetään kuin vakiota:

```csharp,ignore
private static readonly string[] KUUKAUDET =
    { "tammi", "helmi", "maalis", "huhti", "touko", "kesä",
      "heinä", "elo", "syys", "loka", "marras", "joulu" };
```

Jypeli-pelissä samalla tavalla kannattaa ladata kuvat ja äänet: ne ladataan
kerran ja jaetaan kaikkien olioiden kesken.

```csharp,ignore
private static readonly Image pelaajanKuva = LoadImage("pelaaja");
```

`const`-vakio on itse asiassa aina staattinen, vaikka sanaa `static` ei
kirjoiteta. Siksi `Math.PI` toimii ilman oliota ja omaan vakioosi pääsee
käsiksi myös staattisesta aliohjelmasta.

## Milloin staattinen jäsen on olemassa?

Olion attribuuteille varataan muisti, kun olio luodaan `new`-operaattorilla,
ja ne katoavat olion mukana. Staattisille attribuuteille muisti varataan
kerran, kun luokkaa käytetään ensimmäisen kerran, siis jo ennen yhtäkään
oliota, ja ne säilyvät ohjelman loppuun asti. Siksi staattinen aliohjelma voi
käyttää staattisia attribuutteja, vaikka olioita ei olisi vielä luotu.

## Yhteenveto

| Tilanne | Kirjoita |
|---|---|
| Konsoliohjelman aliohjelma | `public static` |
| Jypeli-pelin aliohjelma, joka käyttää pelin jäseniä (`Add`, `Level`, attribuutit) | `public` |
| Jypeli-pelin aliohjelma, joka laskee vain parametreistaan | `public static` |
| Attribuutti | ilman `static`-sanaa |
| Vakio, jota `const` ei voi ilmaista (taulukko, kuva) | `private static readonly` |

Virhe `CS0120` kertoo, että staattinen aliohjelma yrittää käyttää olion
jäsentä. Konsoliohjelmassa lisää `static` aliohjelman eteen, Jypelissä poista
se.
