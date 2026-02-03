# ➕ Operaattorit

Ohjelmointikielissä *operaattorit* ovat erityisiä symboleja tai avainsanoja, jotka suorittavat tiettyjä operaatioita arvojen tai muuttujien välillä. Operaattoreita käytetään lausekkeissa, jotka muodostavat ohjelman logiikan ja toiminnallisuuden.

## Aritmeettiset operaattorit


Aritmeettisia operaattoreita käytetään matemaattisten laskutoimitusten suorittamiseen. 

   - `+` yhteenlasku
   - `-` vähennys
   - `*` kertolasku
   - `/` jakolasku
   - `%` jäännös

Esimerkkejä:

```csharp
int a = 10;
int b = 3;
int summa = a + b;        // summa on 13
int erotus = a - b;      // erotus on 7
int tulo = a * b;        // tulo on 30
int osamaara = a / b;    // osamaara on 3
int jaannos = a % b;     // jaannos on 1
```

## Vertailu- ja loogiset operaattorit

Vertailuoperaattoreita käytetään arvojen vertaamiseen ja ne tuottavat totuusarvon (true tai false) perustuen vertailun tulokseen.

   - `==` on yhtä suuri kuin
   - `!=` ei ole yhtä suuri kuin
   - `<` pienempi kuin
   - `>` suurempi kuin
   - `<=` pienempi tai yhtä suuri kuin
   - `>=` suurempi tai yhtä suuri kuin

Esimerkkejä:

```csharp
int x = 5;
int y = 10;
bool onkoYhtasuuri = x == y;  // false
bool onkoEri = x != y;        // true
bool onkoPienempi = x < y;    // true
bool onkoSuurempi = x > y;    // false
```

## Loogiset operaattorit

Loogisia operaattoreita käytetään totuusarvojen käsittelyyn

   - `&&` JA, on tosi, jos kumpikin arvoista on tosi
   - `||` TAI, on tosi, jos ainakin toinen arvoista on tosi
   - `!` EI, kääntää totuusarvon (tosi -> epätosi, epätosi -> tosi)

Esimerkkejä:

```csharp
int a = 5;
int b = 3;
bool totuus1 = a > b;   // true
bool totuus2 = b == 67;  // false
bool tulos1 = totuus1 && totuus2;  // false
bool tulos2 = totuus1 || totuus2;  // true
bool tulos3 = !totuus1;      // false
```

## Sijoitusoperaattorit

Näitä käytetään arvojen asettamiseen muuttujille.

 - `=`  sijoitus
 - `+=` lisää ja sijoita
 - `-=` vähennä ja sijoita
 - `*=` kerro ja sijoita
 - `/=` jaa ja sijoita
 - `%=` jäännös ja sijoita 
 - `++` lisää yhdellä
 - `--` vähennä yhdellä

Lisäys- ja vähennysoperaattorit `++` ja `--` voidaan kirjoittaa joko ennen tai jälkeen muuttujan nimen. Jos operaattori on ennen muuttujaa (esim. `++x`), sitä kutsutaan etuliitteeksi (engl. *prefix*), ja jos se on muuttujan jälkeen (esim. `x++`), sitä kutsutaan jälkiliitteeksi (engl. *postfix*). Ero näiden välillä tulee esiin erityisesti, kun operaattoria käytetään osana suurempaa lauseketta.

Esimerkkejä:

```csharp
int luku = 10;     // luku on nyt 10
luku += 5;        // luku on nyt 15 (10 + 5)
luku -= 3;        // luku on nyt 12 (15 - 3)
luku *= 2;        // luku on nyt 24 (12 * 2)
luku /= 4;        // luku on nyt 6 (24 / 4)
luku %= 4;        // luku on nyt 2 (6 % 4)

luku++;           // luku on nyt 3
System.Console.WriteLine(luku); // tulostaa 3
System.Console.WriteLine(luku++); // tulostaa 3, sitten luku on nyt 4
System.Console.WriteLine(++luku); // luku on nyt 5, sitten tulostaa 5
```

