## Kaksi erilaista ohjelmaa

Kurssilla tehdään kahdenlaisia ohjelmia, ja niitä käsitellään eri tavalla.

|            | Konsoliohjelma                      | Jypeli-peli                                       |
|------------|-------------------------------------|---------------------------------------------------|
| Mikä       | tulostaa tekstiä ja lukee näppäimistöltä | graafinen peli                               |
| Tiedostot  | yksi `.cs`-tiedosto                 | oma kansio: `.csproj`, `.cs`-tiedostot ja `Content` |
| Sijainti   | suoraan osa-kansiossa               | osa-kansion alikansiossa                          |
| Päätteestä | `dotnet run HelloWorld.cs`          | `dotnet run --project Lumiukko`                   |

Molemmat ajetaan editorin **▷**-painikkeella. Osa-kansio näyttää
pääpiirteissään tältä:

```text
Osa1/                  <- avaa tämä kansio VS Codessa
├── Lumiukko.slnx      <- solution-tiedosto: luettelo osan peleistä. VS Code tekee ja päivittää sen itse.
├── HelloWorld.cs      <- konsoliohjelma
├── Mina.cs            <- konsoliohjelma
└── Lumiukko/          <- Jypeli-peli
    ├── Lumiukko.csproj
    ├── Lumiukko.cs
    ├── Ohjelma.cs
    └── Content/       <- pelin kuvat ja äänet
```

## Neljä sääntöä

1. **Avaa VS Codessa yksi osa-kansio kerrallaan**: *File → Open Folder…* ja
   valitse esimerkiksi `Osa1`. Älä avaa koko kurssikansiota äläkä yksittäisen
   pelin kansiota.
2. **Konsoliohjelma on yksi `.cs`-tiedosto osa-kansiossa**, ja sen
   ensimmäinen rivi on `#!/usr/bin/env dotnet`. Rivi kertoo VS Codelle, että
   tiedosto on itsenäinen ohjelma. Ilman sitä VS Code näyttää vain osan
   virheistä.
3. **Jokainen Jypeli-peli on omassa alikansiossaan.** Luo peli VS Codella
   (ohje alla), jolloin VS Code lisää sen osan solution-tiedostoon.
   Osa-kansiossa saa olla vain yksi solution-tiedosto (`.slnx` tai `.sln`).
4. **Älä laita konsoliohjelmaa Jypeli-pelin kansioon** (äläkä luo peliä suoraan
   osa-kansioon). Peli kääntää kaikki kansionsa `.cs`-tiedostot, joten
   ylimääräinen ohjelma rikkoo sen (virhe `CS9314` tai `CS0017`).

## Konsoliohjelma

1. Luo osa-kansion juureen (ei pelin kansioon) uusi tiedosto, esimerkiksi
   `HelloWorld.cs`: napsauta *Explorer*-näkymässä (vasen reuna) kansion nimeä
   hiiren oikealla painikkeella ja valitse *New File…*.
2. Kirjoita ohjelma:

   ```csharp
   #!/usr/bin/env dotnet

   public class HelloWorld
   {
       public static void Main()
       {
           System.Console.WriteLine("Hello world!");
       }
   }
   ```

   Kirjoita ensimmäinen rivi täsmälleen tuollaisena (sama kaikissa
   käyttöjärjestelmissä).

3. Aja ohjelma: pidä tiedosto auki editorissa ja paina **▷**-painiketta.
   Ohjelma käynnistyy päätteeseen. Jos ohjelma kysyy jotain, kirjoita vastaus
   samaan päätteeseen.

Ensimmäinen ajo kestää selvästi pidempään kuin seuraavat, koska ohjelma pitää
ensin kääntää. Odota rauhassa, vaikka pääte näyttäisi hetken tyhjältä.

Huomaa, että jos valitset **▷**-painikkeen vieressä olevasta valikosta *Debug project
associated with this file*, tuloste menee *Debug Console*
-välilehdelle. Debug-tilaa käytetään debuggaamiseen, johon tutustumme osassa X, mutta tavalliseen ajamiseen käytetään *Run*-tilaa.

**Päätteestä:** avaa pääte (*Terminal → New Terminal*). Pääte aukeaa
osa-kansioon. Anna komento:

```text
dotnet run HelloWorld.cs
```

Jos ohjelmasi lukee näppäimistöltä (`Console.ReadLine()`), saat luultavasti
keltaisen varoituksen:

```text
warning CS8600: Converting null literal or possible null value to non-nullable type.
```

Varoitus ei ole virhe: ohjelma kääntyy ja toimii.

## Jypeli-peli

### Uuden pelin luominen

1. Avaa osa-kansio VS Codessa.
2. Avaa komentopaletti (*View → Command Palette…* tai **Ctrl+Shift+P**,
   macOS: **Cmd+Shift+P**), kirjoita `new project` ja valitse
   **.NET: New Project...**
3. Valitse pohja, esimerkiksi **Fysiikkapeli**. Jos luettelossa ei näy
   Jypeli-pohjia, niitä ei ole asennettu: katso kurssin asennusohje.
4. Anna pelille nimi, esimerkiksi `Lumiukko`.
5. Valitse sijainniksi **Default directory**. Peli tulee avatun osa-kansion
   alle, esimerkiksi `Osa1/Lumiukko`.
6. Jos VS Code kysyy solution-tiedoston muotoa, valitse **.slnx** (myös
   *.sln* toimii). Kysymys tulee vain osan ensimmäisen pelin kohdalla, ja
   tiedosto saa sen pelin nimen, esimerkiksi `Lumiukko.slnx`. Nimellä ei ole
   merkitystä: tiedosto on luettelo osan kaikista peleistä.
7. Valitse **Create project**.

### Pelin ajaminen

Avaa jokin pelin `.cs`-tiedostoista, esimerkiksi `Lumiukko.cs`, ja paina
**▷**-painiketta. Peli-ikkuna aukeaa.

**Päätteestä:** anna osa-kansiossa avatussa päätteessä komento

```text
dotnet run --project Lumiukko
```

### Kuvat ja äänet

Laita kuvat ja äänet pelin `Content`-kansioon, esimerkiksi
`Lumiukko/Content/norsu.png`. Koodissa ne ladataan ilman kansion nimeä:

```csharp
Image norsunKuva = LoadImage("norsu.png");
SoundEffect maaliAani = LoadSoundEffect("maali.wav");
```

## Uuden osan aloittaminen

Tee kurssikansioosi uusi kansio, esimerkiksi `Osa3`, avaa se VS Codessa ja
jatka yllä olevien ohjeiden mukaan. Solution-tiedoston VS Code luo itse, kun
teet osan ensimmäisen pelin.

## Ongelmia?

Yleisimmät oireet:

- **Jypeli-pelin koodissa on punaista**, vaikka peli toimii: VS Code ei ole
  ladannut peliprojektia. Tarkista, että auki on osa-kansio.
- **VS Code ei näytä konsoliohjelman virheitä**, mutta ajaessa ne tulevat
  esiin: tarkista tiedoston ensimmäinen rivi (sääntö 2).
- **Peli ei käänny** (`CS9314` tai `CS0017`): konsoliohjelma on pelin
  kansiossa (sääntö 4).
- **Konsoliohjelma ei reagoi päätteeseen kirjoitettuun**: käynnistit sen
  Debug-vaihtoehdolla. Pysäytä ja käynnistä **▷**-painikkeella.

## Jypeli-pelin koodissa on punaista

Esimerkiksi `The type or namespace name 'Jypeli' could not be found`, vaikka
`dotnet run --project` toimii. VS Code ei ole ladannut peliprojektia. Näin käy
esimerkiksi, jos kopioit pelikansion osa-kansioon käyttöjärjestelmän
tiedostonhallinnalla tai loit pelin päätteessä komennolla `dotnet new`.
Kokeile näitä järjestyksessä:

1. Tarkista, että VS Codessa on auki osa-kansio. Sen nimi näkyy
   *Explorer*-näkymän ylimpänä.
2. Jos VS Code kysyy *Project '...' is not part of this solution*, valitse
   **Add Project to Solution**.
3. Avaa komentopaletti (*View → Command Palette…* tai **Ctrl+Shift+P**,
   macOS: **Cmd+Shift+P**) ja valitse **Developer: Reload Window**.
4. Jos punaista on yhä: napsauta *C# Project Details* -näkymässä solutionia
   hiiren oikealla painikkeella, valitse
   *Solution File Management → Add Existing Project...* ja valitse pelin
   `.csproj`-tiedosto.

## VS Code kysyy avattaessa, mikä solution avataan

Osa-kansiossa on kaksi solution-tiedostoa (`.sln` ja `.slnx`), esimerkiksi
kopioinnin jäljiltä. Poista toinen. Osa-kansiossa saa olla vain yksi
solution-tiedosto.

## VS Code ei näytä konsoliohjelman virheitä, mutta ajaessa ne tulevat esiin

Tarkista, että tiedoston ensimmäinen rivi on täsmälleen `#!/usr/bin/env dotnet`.

## Konsoliohjelma ei reagoi päätteeseen kirjoitettuun, tai tuloste näkyy *Debug Console* -välilehdellä

Käynnistit ohjelman Debug-vaihtoehdolla. Pysäytä ohjelma (punainen neliö
ylhäällä) ja käynnistä se **▷**-painikkeella.

## Peli ei käänny: `CS9314` tai `CS0017`

Virhe on joko `error CS9314: '#!' directives can be only used in scripts or
file-based programs` tai `error CS0017: Program has more than one entry point
defined`. Konsoliohjelman `.cs`-tiedosto on Jypeli-pelin kansiossa, tai peli
on luotu suoraan osa-kansioon. Siirrä konsoliohjelma osa-kansioon ja peli omaan
alikansioonsa.

## `dotnet run Tiedosto.cs` ajaa pelin tai antaa virheen `CS9314` tai `CS0017`

Ajoit komennon pelin kansiossa. Jos kansiossa on `.csproj`-tiedosto,
`dotnet run` ajaa aina sen projektin. Siirry osa-kansioon (`cd ..`) ja aja
komento uudestaan.

## `Couldn't find a project to run. Ensure a project exists in ..., or pass the path to the project using --project`

Annoit pelkän `dotnet run`-komennon osa-kansiossa. Kerro, mikä ohjelma ajetaan:
`dotnet run HelloWorld.cs` tai `dotnet run --project Lumiukko`.

## Peli kaatuu heti, ja virheilmoituksessa lukee `Tiedostoa ... ei löydy`

Tarkista, että tiedosto on pelin `Content`-kansiossa ja että nimi on kirjoitettu
oikein. Jos peli on tehty Tasohyppelypeli-pohjasta, sen `.csproj` kopioi vain
pohjan omat kuvat. Korvaa `.csproj`-tiedoston `<None Update="Content\...">`-rivit
tällä, niin kaikki `Content`-kansion tiedostot kopioituvat:

```xml
<ItemGroup>
    <Content Include="Content/*.*">
        <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
    </Content>
</ItemGroup>
```

Esimerkkiharjoitustyön `Tasohyppelypeli.csproj` on jo muutettu näin.
