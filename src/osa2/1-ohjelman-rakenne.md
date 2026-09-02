# 🏗️ Ohjelman rakenne

Tässä luvussa tarkastelemme ohjelmaa kokonaisuutena: mistä osista se koostuu ja
missä järjestyksessä osat suoritetaan. Yritämme siis hahmottaa ohjelmaa
*top-down*-tavalla; katselemme ensin ohjelman rakennetta kokonaisuutena ja sitten tarkastelemme yksittäisiä osia.
Niinpä vaikka emme vielä ole tutkineet
aliohjelmia, emmekä oikein tiedä mitä se tarkoittaa, käytämme aliohjelman käsitettä, jotta
voimme erottaa ohjelman osat toisistaan. Aliohjelmien sisältöön, parametreihin
ja paluuarvoihin pureudumme tarkemmin osassa 3, luvussa
[Aliohjelmat](../osa3/1-aliohjelmat.md).

## Miksi rakenteesta pitää välittää?

Luvun [Ensimmäinen ohjelma](../osa1/2-ensimmainen-ohjelma.md) esimerkissä oli
seitsemän riviä, joista vain yksi teki jotakin. Loput kuusi olivat rakennetta:
luokka, pääohjelma ja aaltosulut. Aloittelijasta se tuntuu turhalta
kehystykseltä, mutta rakenteella on kaksi tehtävää.

Ensinnäkin kääntäjä tarvitsee sitä. Kääntäjä ei arvaa, mistä ohjelman suoritus
alkaa tai mihin kokonaisuuteen jokin rivi kuuluu; se pitää kertoa aina samalla
tavalla. Toiseksi ihminen tarvitsee sitä. Oikeat ohjelmat ovat isoja: Jypeli
koostuu sadoista tiedostoista, ja tavallisessa yrityssovelluksessa on
satojatuhansia rivejä. Kukaan ei hallitse sellaista yhtenä pötkönä. Sen sijaan
koodi jaetaan luokkiin ja aliohjelmiin, jotka nimetään sen mukaan, mitä ne
tekevät, jolloin lukija löytää etsimänsä lukematta kaikkea.

Sama periaate on tuttu muualtakin: kirja jaetaan lukuihin ja kappaleisiin, ja
kirje alkaa vastaanottajan osoitteella, vaikka itse asia olisi yksi rivi. Tässä
luvussa opitaan C#-ohjelman "osoitekenttä" niin hyvin, ettei sitä tarvitse enää
ajatella.

## Yksinkertaisen ohjelman osat

C#-kieli on [*olioperusteinen ohjelmointikieli*](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/introduction), mikä tarkoittaa muun muassa sitä, että kaikki koodi kirjoitetaan luokkien sisälle. Jokaisessa ohjelmassa täytyy siis tavallisesti olla vähintään yksi luokka.

Yhdessä luokassa tulee lisäksi olla `Main`-aliohjelma, joka toimii ohjelman aloituspisteenä -- siksi sitä kutsutaan myös *pääohjelmaksi*. Ohjelma suoritetaan järjestyksessä, lause kerrallaan ylhäältä alaspäin `Main`-aliohjelmasta alkaen. Luokka voi sisältää muitakin aliohjelmia: pääohjelma voi kutsua aliohjelmia, jotka voivat kutsua taas muita aliohjelmia jne. Ohjelman suoritus päättyy, kun pääohjelma on suoritettu loppuun.

Alla oleva sovellus koostuu yhdestä luokasta, joka sisältää pääohjelman (`Main`) ja yhden aliohjelman (`Tervehdys`), siis yhteensä kaksi aliohjelmaa. Voit ajaa ohjelman klikkaamalla koodilohkon oikeassa yläkulmassa olevaa Play-painiketta.

```csharp
using System;

public class Sovellus
{
    public static void Main()
    {
        // Ohjelman suoritus alkaa Main-aliohjelmasta.
        // Tässä kutsutaan Tervehdys-aliohjelmaa kaksi kertaa.
        Tervehdys();
        Tervehdys();
    }

    public static void Tervehdys()
    {
        Console.WriteLine("Tervehdys!");
    }
}
```

Ohjelman rakennetta voi havainnollistaa seuraavasti. Uloimpana on tiedosto, sen sisällä luokka, ja luokan sisällä aliohjelmat.

```bob
 Sovellus.cs                     <- tiedosto
 |
 '-- class Sovellus              <- luokka
      |
      +-- Main()                 <- aloituspiste
      |
      '-- Tervehdys()            <- muu aliohjelma
```

Käydään osat läpi yksi kerrallaan.

### Luokka

```csharp,ignore
public class Sovellus
{
    // luokan sisältö
}
```

Rivi `public class Sovellus` määrittelee uuden *luokan* (engl. *class*) nimeltä `Sovellus`. Luokkaa voi ajatella säiliönä, joka kokoaa yhteen toisiinsa liittyvää tietoa ja toiminnallisuutta. Tällä kurssilla luokka on aluksi lähinnä kehys, jonka sisään aliohjelmat kirjoitetaan. Luokkien varsinaiseen ideaan -- olioiden mallintamiseen -- palataan kurssin lopussa ja Ohjelmointi 2 -kurssilla.

Määre `public` kertoo, että luokkaa saa käyttää muualtakin kuin omasta tiedostostaan. Jos määrettä ei kirjoita, luokan näkyvyys on rajoitetumpi. Tällä kurssilla kirjoitamme `public`-määreen aina näkyviin sekä luokille että aliohjelmille.

Luokan nimi kirjoitetaan *PascalCase*-tyylillä, eli jokaisen sanan alkukirjain on iso eikä sanojen välissä käytetä välilyöntejä tai alaviivoja: `Sovellus`, `Lumiukko`, `PankkiTili`. Nimeämiskäytännöistä kerrotaan tarkemmin [Tyylioppaassa](../tyyliopas.md).

### Yksi tiedosto, yksi luokka

Käytäntö on, että yksi tiedosto sisältää yhden luokan ja että luokan nimi on sama kuin tiedoston nimi. Luokka `Sovellus` kirjoitetaan siis tiedostoon `Sovellus.cs`.

Kääntäjä ei pakota tähän -- ohjelma kääntyy, vaikka luokan ja tiedoston nimet eroaisivat -- mutta käytännöstä poikkeaminen tekee koodin lukemisesta hankalaa. Kun luokkia on kymmeniä, on korvaamattoman arvokasta tietää, mistä tiedostosta mikäkin luokka löytyy.

> [!VINKKI]
> Jos vaihdat luokan nimen Riderissä, tee se uudelleennimeämistoiminnolla
> (vie kursori luokan nimen päälle ja paina <kbd>Shift</kbd> + <kbd>F6</kbd>).
> Tällöin myös tiedoston nimi ja kaikki viittaukset luokkaan päivittyvät kerralla.

### Pääohjelma `Main`

```csharp,ignore
public static void Main()
{
    // pääohjelman lauseet
}
```

`Main` on ohjelman *aloituspiste* (engl. *entry point*). Kun käyttöjärjestelmä käynnistää ohjelman, suoritus alkaa aina `Main`-aliohjelman ensimmäisestä lauseesta -- riippumatta siitä, missä kohtaa tiedostoa `Main` sattuu sijaitsemaan. Nimen `Main` on oltava juuri tämä, ja se kirjoitetaan isolla alkukirjaimella.

`Main` kirjoitetaan täsmälleen samalla tavalla kuin mikä tahansa muukin aliohjelma; erikoista siinä on vain nimi ja rooli aloituspisteenä. Mitä määreet `public`, `static` ja `void` tarkoittavat, käsitellään luvussa [Aliohjelmat](../osa3/1-aliohjelmat.md).

Ohjelmassa saa olla vain yksi aloituspiste. Jos ohjelmassa on useita luokkia, `Main` kirjoitetaan vain yhteen niistä.

<details closed><summary><i class="bi bi-stars jyu-gold"></i> Valinnaista lisätietoa: <code>Main</code>-aliohjelman muut muodot</summary>

`Main`-aliohjelmasta on olemassa useita sallittuja muotoja. Yleisin vaihtoehto tällä kurssilla käytetylle on

```csharp,ignore
public static void Main(string[] args)
```

jossa `args`-taulukko sisältää ne *komentoriviparametrit*, jotka ohjelmalle annettiin käynnistettäessä. Jos ohjelma käynnistetään komennolla `dotnet run kissa koira`, taulukko `args` sisältää merkkijonot `"kissa"` ja `"koira"`. Taulukoista puhutaan lisää myöhemmissä osissa.

`Main` voi myös palauttaa kokonaisluvun (`static int Main()`), jolloin paluuarvo kertoo käyttöjärjestelmälle, päättyikö ohjelma onnistuneesti (`0`) vai virheeseen (jokin muu luku). Tätä hyödynnetään esimerkiksi silloin, kun ohjelma on osa suurempaa komentorivityökalujen ketjua.

</details>

### `using`-lause ja nimiavaruudet

```csharp,ignore
using System;
```

Valmiit luokat on koottu *nimiavaruuksiin* (engl. *namespace*), jotka ovat ikään kuin kansioita luokille. Esimerkiksi tulostamiseen käytettävä `Console`-luokka sijaitsee `System`-nimiavaruudessa. Nimiavaruuksien ansiosta samanniminen luokka voi esiintyä useassa eri paikassa ilman sekaannuksia.

Tiedoston alussa oleva `using System;` kertoo kääntäjälle, että `System`-nimiavaruuden luokkiin saa viitata pelkällä nimellä:

```csharp,ignore
using System;

// ...
Console.WriteLine("Tervehdys!");
```

Ilman `using`-lausetta nimiavaruus on kirjoitettava joka kerta näkyviin:

```csharp,ignore
// Ei using-lausetta
System.Console.WriteLine("Tervehdys!");
```

Molemmat tavat toimivat, mutta `using`-lause säästää kirjoitusvaivaa ja tekee koodista luettavampaa. `using`-lauseet kirjoitetaan tiedoston alkuun, ennen luokan määrittelyä. Jypeliä käyttävissä ohjelmissa tarvitaan vastaavasti `using Jypeli;`.

> [!HUOMAUTUS]
> Rider lisää tarvittavat `using`-lauseet yleensä automaattisesti, kun alat kirjoittaa
> luokan nimeä ja valitset ehdotuksen listasta. Jos näet virheilmoituksen
> *"The name 'Console' does not exist in the current context"*, tiedostosta puuttuu
> lähes varmasti `using System;`.

## Suoritusjärjestys

Ohjelman lauseet suoritetaan yksi kerrallaan siinä järjestyksessä, jossa ne on kirjoitettu. Kun vastaan tulee aliohjelmakutsu, suoritus siirtyy kutsuttuun aliohjelmaan. Kun aliohjelma on suoritettu loppuun, suoritus jatkuu kutsukohdan seuraavasta lauseesta.

```csharp
using System;

public class Sovellus
{
    public static void Main()
    {
        Console.WriteLine("1. Ohjelma alkaa");
        Tervehdys();
        Console.WriteLine("3. Ohjelma loppuu");
    }

    public static void Tervehdys()
    {
        Console.WriteLine("2. Tervehdys!");
    }
}
```

Ohjelma tulostaa:

```text
1. Ohjelma alkaa
2. Tervehdys!
3. Ohjelma loppuu
```

Suorituksen kulku näyttää tältä:

```bob
   Main()                    Tervehdys()
     |
     | 1. "Ohjelma alkaa"
     |
     +------ kutsu --------->+
     |                       | 2. "Tervehdys!"
     |<----- paluu ----------+
     |
     | 3. "Ohjelma loppuu"
     |
     v
```

Huomaa, että teksti `"2. Tervehdys!"` tulostuu keskimmäisenä, vaikka `Console.WriteLine`-lause on kirjoitettu tiedostossa vasta viimeisenä. Ohjelman *kirjoitusjärjestys* ja *suoritusjärjestys* ovat siis kaksi eri asiaa.

> [!TÄRKEÄÄ]
> Aliohjelmien määrittelyjärjestyksellä luokan sisällä ei ole väliä. `Tervehdys`-aliohjelman
> voi kirjoittaa yhtä hyvin ennen `Main`-aliohjelmaa kuin sen jälkeenkin -- ohjelma toimii
> täsmälleen samalla tavalla. Merkitystä on vain sillä, missä järjestyksessä aliohjelmia
> *kutsutaan*.

Kutsuttu aliohjelma voi vuorostaan kutsua toista aliohjelmaa, jolloin kutsut ketjuuntuvat. Suoritus palaa aina takaisin siihen kohtaan, josta kutsu tehtiin. Kun `Main`-aliohjelman viimeinen lause on suoritettu, koko ohjelma päättyy. Aliohjelmien kutsumiseen palataan tarkemmin luvussa [Aliohjelmat](../osa3/1-aliohjelmat.md).

## Lohkot ja sisennykset

Aaltosulut `{` ja `}` rajaavat *lohkon* (engl. *block*). Lohko kertoo, mihin luokan tai aliohjelman sisältö alkaa ja mihin se päättyy. Jokaista avaavaa aaltosulkua kohti on oltava täsmälleen yksi sulkeva aaltosulku.

Lohkot menevät sisäkkäin: aliohjelman lohko on luokan lohkon sisällä. Sisäkkäisyys osoitetaan *sisentämällä*, eli siirtämällä koodia oikealle neljän välilyönnin verran jokaista tasoa kohti.

```csharp,ignore
public class Sovellus            // taso 0
{
    public static void Main()    // taso 1
    {
        Tervehdys();             // taso 2
    }
}
```

Kääntäjä ei välitä sisennyksistä lainkaan -- ohjelma kääntyisi, vaikka kaikki kirjoitettaisiin yhdelle riville. Sisennys on ihmistä varten: sen avulla lohkojen rakenteen näkee yhdellä silmäyksellä. Sisentämätön koodi on lähes lukukelvotonta, joten sisennyksistä kannattaa pitää huolta alusta asti.

> [!VINKKI]
> Riderissä koko tiedoston sisennykset saa siistittyä kerralla valitsemalla
> Code <i class="bi bi-chevron-right"></i> Reformat Code. Tee tämä tottumuksesta
> aina ennen tehtävän palauttamista.

## Yhteenveto: ohjelman runko

Lähes jokainen tällä kurssilla kirjoitettava komentoriviohjelma noudattaa seuraavaa runkoa.

```csharp,ignore
using System;                        // 1. Käyttöön otettavat nimiavaruudet

public class Sovellus                // 2. Luokka (= tiedoston nimi)
{
    public static void Main()        // 3. Pääohjelma, aloituspiste
    {
        // 4. Ohjelman lauseet, suoritetaan ylhäältä alas
    }

    public static void Apuri()       // 5. Mahdolliset muut aliohjelmat
    {
        // ...
    }
}
```

Kun kirjoitat uutta ohjelmaa, kannattaa aloittaa juuri tästä rungosta ja täydentää se vasta sitten sisällöllä.

## Tyypillisiä rakennevirheitä

Suuri osa aloittelijan käännösvirheistä johtuu siitä, että jokin rakenteen osa puuttuu tai on väärässä paikassa. Alla on yleisimmät.

**Lauseita luokan ulkopuolella.** Kaikkien lauseiden on oltava aliohjelman sisällä, ja aliohjelmien luokan sisällä.

```csharp,ignore
public class Sovellus
{
}

Console.WriteLine("Tervehdys!");  // CS0116: lause luokan ulkopuolella
```

**Puuttuva pääohjelma.** Jos ohjelmasta ei löydy `Main`-aliohjelmaa, kääntäjä ei tiedä, mistä suoritus alkaisi. Virheilmoitus on `CS5001: Program does not contain a static 'Main' method suitable for an entry point`. Tarkista tällöin myös nimen kirjoitusasu: `main` tai `MAIN` eivät kelpaa.

**Epätasapainossa olevat aaltosulut.** Jokaista `{`-merkkiä kohti tarvitaan yksi `}`-merkki. Puuttuvasta sulkevasta sulusta seuraa virhe `CS1513: } expected`. Klikkaa alla olevaa Play-painiketta nähdäksesi virheilmoituksen, ja korjaa sitten ohjelma lisäämällä puuttuva merkki.

```csharp
using System;

public class Sovellus
{
    public static void Main()
    {
        Console.WriteLine("Tervehdys!");
}
```

**Aliohjelma toisen aliohjelman sisällä.** Aliohjelmat kirjoitetaan luokan sisään, mutta *toistensa* rinnalle -- ei sisäkkäin.

```csharp,ignore
public class Sovellus
{
    public static void Main()
    {
        public static void Tervehdys()   // Väärin: aliohjelma Main-aliohjelman sisällä
        {
        }
    }
}
```

<details closed><summary><i class="bi bi-stars jyu-gold"></i> Valinnaista lisätietoa: "luokaton" ohjelma</summary>

C#:ssa (alkaen versiosta 9) voi kirjoittaa ohjelman, jossa ei ole luokkaa eikä pääohjelmaa. Tällöin aivan vasemmalle (vähiten sisennetyt rivit) kirjoitetut lauseet muodostavat niin sanotut *top-level statements* -koodin. Kääntäjä muodostaa tämän koodin perusteella luokan ja ohjelman aloituspisteen taustalla ilman, että ohjelmoijan tarvitsee sitä erikseen määritellä. Näin on periaatteessa mahdollista kirjoittaa "Hello world"-ohjelma yksinkertaisesti:

```csharp
System.Console.WriteLine("Hello, World!");
```

Top-level statements -ohjelmat voivat olla käteviä pikkuohjelmissa ja skripteissä. Isommissa ohjelmissa on usein kuitenkin välttämätöntä kirjoittaa ohjelma luokan ja pääohjelman ympärille. Jos ohjelmassa tarvitaan useita luokkia, täytyy myös pääohjelma määritellä ja sen täytyy olla luokan sisällä. Periaatteessa tällä kurssilla voisimme kirjoittaa lähes kaikki esimerkit top-level statements -muodossa, mutta koska isommissa ohjelmissa joudumme joka tapauksessa käyttämään luokkia ja pääohjelmaa, keskitymme tällä kurssilla perinteiseen luokka- ja pääohjelmarakenteeseen.

</details>

## 🤔 Testaa tietosi

Päätä vastaus ensin ja avaa se vasta sitten. Pisteitä ei jaeta, mutta hämärät
kohdat paljastuvat.

<visa>

**Totta vai tarua?**

<details data-vastaus="tarua"><summary>1. Ohjelman suoritus alkaa tiedoston ensimmäiseltä riviltä.</summary>

**Tarua.** Suoritus alkaa aina `Main`-aliohjelman ensimmäisestä lauseesta
riippumatta siitä, missä kohtaa tiedostoa `Main` on. `using`-rivit ja luokan
otsikko ovat kääntäjälle tarkoitettua tietoa, eivät suoritettavia lauseita.

</details>

<details data-vastaus="totta"><summary>2. Sisennys ei vaikuta siihen, miten C#-ohjelma suoritetaan.</summary>

**Totta.** Lohkot määräävät aaltosulut, eivät sisennykset. Sisennys on ihmistä
varten, ja juuri siksi se on tyyliohjeessa pakollinen. *Reformat Code* hoitaa
sen puolestasi.

</details>

<details data-vastaus="tarua"><summary>3. Aliohjelman voi kirjoittaa toisen aliohjelman sisään.</summary>

**Tarua.** Aliohjelmat kirjoitetaan luokan sisään toistensa rinnalle.
Sisäkkäin kirjoitettu `public static void` -aliohjelma on käännösvirhe.

</details>

**Monivalinta.** Yksi vaihtoehto on oikein.

**4.** Mitä rivi `using System;` tekee?

a) Käynnistää ohjelman\
b) Sallii `System`-nimiavaruuden luokkiin viittaamisen pelkällä nimellä, esimerkiksi `Console`\
c) Lataa .NET-ympäristön koneelle\
d) Tulostaa tekstin `System`

<details data-vastaus="b"><summary>Näytä vastaus</summary>

**b.** Ilman sitä pitäisi kirjoittaa `System.Console.WriteLine`. Rider lisää
`using`-rivit yleensä automaattisesti, kun alat kirjoittaa luokan nimeä.

</details>

**5.** Kääntäjä ilmoittaa `CS5001: Program does not contain a static 'Main'
method suitable for an entry point`. Mikä seuraavista on todennäköisin syy?

a) Pääohjelma on nimetty `main` pienellä alkukirjaimella\
b) Ohjelmassa on liikaa `using`-rivejä\
c) Luokan nimi ei ole `Sovellus`\
d) Tiedostossa on liian monta kommenttia

<details data-vastaus="a"><summary>Näytä vastaus</summary>

**a.** Aloituspisteen nimen on oltava täsmälleen `Main`. Luokan nimi saa olla
mikä tahansa, eivätkä `using`-rivit tai kommentit vaikuta asiaan.

</details>

</visa>
