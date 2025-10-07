## ↔️ Ehtolauseet

**Ehtolauseet** ovat rakenteita, jotka suorittavat tiettyjä lauseita vain, jos jokin ehto on voimassa. Ehtolauseella voidaan ikään kuin hypätä sellaisen koodin yli, jota ei ole tarpeellista suorittaa. 

Ehtolauseita ovat `if` sekä `switch-case`. `if`-ehtolause voidaan tarvittaessa jakaa useampaan osaan `else if` ja `else`-osilla. Rakennetta voidaan havainnollistaa seuraavalla kuvalla.

<img src="/ohj1/assets/images/ehtolause.png" width="180" />

Koodissa tämä näyttäisi suurin piirtein seuraavalta. 

```csharp
if (EHTO)
{
    // Suoritetaan, jos ehto on voimassa
}
```

Yllä olevassa esimerkissä `EHTO`-sanan kohdalle kirjoitetaan jokin totuusarvon tuottava lauseke. 

Totuusarvoja voidaan tuottaa esimerkiksi _vertailuoperaattoreilla_. Alla muutama esimerkki 

```
==   on yhtä kuin
!=   on eri kuin
<    on pienempi kuin
>    on suurempi kuin
<=   on pienempi tai yhtä suuri kuin
>=   on suurempi tai yhtä suuri kuin
```

Vertailuoperaattori vertailee kahta arvoa ja tuottaa true- tai false-arvon. 

```csharp
int a = 5;
int b = 3;
if (a > b)
{
    Console.WriteLine("a on suurempi kuin b");
}
```

Ehtolauseita voidaan ketjuttaa tarvittaessa. 

<img src="/assets/images/ehtolause2.svg" width="400">

Yllä oleva kuva koodina olisi suurin piirtein seuraavanlaista.

```csharp
if (EHTO1)
{
    // Suoritetaan, jos ehto1 on voimassa
    // LAUSE
}
else if (EHTO2)
{
    // Suoritetaan, jos ehto2 on voimassa
    // ...
}
else 
{
    // Suoritetaan, jos mikään ehto ei ole voimassa
    // ...
}
```

Vertailuja voidaan yhdistellä loogisilla operaattoreilla, kuten `&&` (ja), `||` (tai) ja `!` (ei).

```csharp
int luku = 5;
if (luku > 0 && luku < 10)
{
    Console.WriteLine("Luku on välillä 0-10");
}
```

## Switch-case

**Switch-case**-rakenne on myös ehtolauserakenne. Sen avulla voidaan vertailla muuttujan arvoa `if-else`-lauseiden tavoin, mutta joissain tilanteissa hieman vähemmällä kirjoittamisella.

```csharp
int luku = 47;
switch (luku)
{
   case < 50:
      Console.WriteLine("Luku on pienempi kuin 50");
      break;
   case > 50:
      Console.WriteLine("Luku on suurempi kuin 50");
      break;
   default:
      Console.WriteLine("Luku on 50");
      break;
}
```

## Tehtävät 2.4--2.7

Tee TIMissä (linkki)