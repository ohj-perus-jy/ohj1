## T3*. Mitä ohjelma tulostaa? <span class="taskPoints">(1 p.)</span>

**Lue ensin monisteesta:**  [Muuttujan arvon
muuttaminen]() TODO: Linkki

Vastaa kysymyksiin 3.1&ndash;3.3. 

**Arviointi:** Pisteitä saa oikeista vastauksista. Yhteenlaskettu maksimipistemäärä on 1 p. 
Kysymyskohtaiset pisteet näkyvät kysymysten yhteydessä.

``` {#tehtava_mita_numeroa_tulostaa_k1 plugin="csPlugin"}
%%DEMO_TASK_BASE%%

modelAnswer:
  %%MODEL_ANSWER_BASE%%
  answer: |!!
%%VIDEO_PLACEHOLDER%%

~~~csharp
public static void Main()
{
    int a = 2; // Määritetään muuttuja a ja sijoitetaan siihen arvo 2
    int b = a; // Määritetään muuttuja b ja sijoitetaan siihen muuttujan a arvo -> 2 (huom: tietokone tekee kopion luvusta 2)
    b++;       // Kasvatetaan muuttujan b arvoa yhdellä -> b on nyt 3
    System.Console.WriteLine(a); // Tulostaa 2
    System.Console.WriteLine(b); // Tulostaa 3
}
~~~

Tulostus on siten

~~~
2
3
~~~

type: text
stem: |!!
md:

**Kysymys 3.1**. Mitä alla oleva pääohjelma tulostaa? Kirjoita vastaus alla olevaan
tehtävälaatikkoon. **(0,3 p.)**

~~~csharp
public static void Main()
{
    int a = 2;
    int b = a;
    b++;
    System.Console.WriteLine(a);
    System.Console.WriteLine(b);
}
~~~

!!
pointsRule: 
  maxPoints: 0.3 p
  code: 0.3
  expectCode: ^\s*2\s*$\n^\s*3\s*$
button: Tallenna
rows: 1
placeholder: "Kirjoita tulostus tähän"
```
Kokeile nyt kirjoittaa yllä oleva koodi kohtaan *Tehtävän 3 tarkistuslaatikko*
(löytyy tämän tehtävän lopussa). Luokka (`public class` jne.) täytyy itse 
täydentää pääohjelman ympärille.

``` {#tehtava_mita_numeroa_tulostaa_k2 plugin="csPlugin"}
%%DEMO_TASK_BASE%%

modelAnswer:
  %%MODEL_ANSWER_BASE%%
  answer: |!!
%%VIDEO_PLACEHOLDER%%

~~~csharp
public static void Main()
{
    int a = 6; // Määritetään muuttuja a ja sijoitetaan siihen arvo 6
    int b = a; // Määritetään muuttuja b ja sijoitetaan siihen muuttujan a arvo -> 6 (huom: tietokone tekee kopion luvusta 6)
    b++;       // Kasvatetaan muuttujan b arvoa yhdellä -> b on nyt 7
    System.Console.WriteLine(a); // Tulostaa 6
    System.Console.WriteLine(b); // Tulostaa 7
    a = b;  // Sijoitetaan muuttujaan a muuttujan b arvo -> 7
    a = 15; // Sijoitetaan muuttujaan a arvo 15
}
~~~

Muuttujan `b` arvo ohjelman suorituksen lopussa on siis edelleen `7`.
!!

type: text
stem: |!!
md: 
**Kysymys 3.2**. Muutetaan ohjelma seuraavasti:

~~~csharp
public static void Main()
{
    int a = 6;
    int b = a;
    b++;
    System.Console.WriteLine(a);
    System.Console.WriteLine(b);
    a = b;
    a = 15;
}
~~~

Paljonko on `b`:n arvo ohjelman suorituksen lopussa? **(0,3 p.)**
!!
pointsRule: 
  maxPoints: 0.3
  code: 0.3
  expectCode: ^\s*7\s*$
button: Tallenna
rows: 1
placeholder: "Kirjoita muuttujan arvo tähän"
```
Kokeile nyt kirjoittaa yllä oleva koodi kohtaan *Tehtävän 3 tarkistuslaatikko*
(löytyy tämän tehtävän lopussa). Luokka (`public class` jne.) täytyy itse 
täydentää pääohjelman ympärille.

``` {#tehtava_mita_numeroa_tulostaa_k3 plugin="csPlugin"}
%%DEMO_TASK_BASE%%

modelAnswer:
  %%MODEL_ANSWER_BASE%%
  answer: |!!
%%VIDEO_PLACEHOLDER%%

~~~csharp
public static void Main()
{
    int a = 10; // Määritetään muuttuja a ja sijoitetaan siihen arvo 10
    int b = a; // Määritetään muuttuja b ja sijoitetaan siihen muuttujan a arvo -> 10 (huom: tietokone tekee kopion luvusta 10)
    b++;       // Kasvatetaan muuttujan b arvoa yhdellä -> b on nyt 11
    System.Console.WriteLine(a); // Tulostaa 10
    System.Console.WriteLine(b); // Tulostaa 11
    a = b;  // Sijoitetaan muuttujaan a muuttujan b arvo -> 11
    a = 15; // Sijoitetaan muuttujaan a arvo 15
    double c = b + a;  // Määritetään muuttuja c ja sijoitetaan siihen lausekkeen `b + a` arvo -> 11 + 15 = 26 
    System.Console.Write("Summa on ");  // Tulostaa "Summa on " ilman rivinvaihtoa
    System.Console.WriteLine(c);  // Tulostaa "26.0" (huom. desimaaliosa, koska c on tyyppiä double)
}
~~~

Ohjelma siis tulostaa

~~~
10
11
Summa on 26.0
~~~
!!

type: text
stem: |!!
md:
**Kysymys 3.3.** Muutetaan ohjelma seuraavasti:

~~~csharp
public static void Main()
{
    int a = 10;
    int b = a;
    b++;
    System.Console.WriteLine(a);
    System.Console.WriteLine(b);
    a = b;
    a = 15;
    double c = b + a;
    System.Console.Write("Summa on ");
    System.Console.WriteLine(c);
}
~~~

Mitä tulostuu? **(0,4 p.)**
!!
pointsRule:
  maxPoints: 0.4
  code: 0.4
  expectCode: \s*10\s*$\n^\s*11\s*$\n^Summa\s*on\s*26.*
button: Tallenna
rows: 2
placeholder: "Kirjoita vastaus tähän"
```

``` {#tehtava_mita_numeroa_tulostaa_kokeilu plugin="csPlugin"}
type:cs
stem: |!!
md:
**Tehtävän 3 tarkistuslaatikko**

Tarkista vastauksesi kirjoittamalla koodi alla olevaan ikkunaan (muista laittaa myös `public class` määrittely) ja klikkaa
`aja`.
!!
byCode: |1
 
```
