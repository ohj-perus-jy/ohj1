# Tehtävien lisääminen

## Tehtäväkansion perusrakenne

Tehtävät laitetaan `exercises` -kansion alle omin kansiona. 
Yksittäisen tehtävän tiedostot ja kansiot:

```
exercises/
└── <chnum>-<partnum>-<order>-<task_id>
    ├── exercise-details.yml
    ├── handout.md
    ├── starter
    │   └── Tehtava.cs
    ├── solution
    │   └── Tehtava.cs
    └── test
        └── <testitiedostoja>
```

Muuttujat ja niiden selitykset

- `<chnum>`: Osan numero, johon tehtävä kuuluu
- `<partnum>`: Alaosan numero, johon tehtävä kuuluu
- `<order>`: Tehtävän suhteellinen järjestys alaosan sisällä
- `<task_id>`: Uniikki tehtävän tunnus

Esimerkiksi `5-1-1-positiiviset_ja_negatiiviset`.

`<task_id>` ei saa sisältää välilyöntejä eikä muita erikoismerkkejä. 

## Tehtävän rakenteen määrittely: `exercise-details.yml`

Jokaisessa tehtävässä on oltava `exercise-details.yml` -tiedosto.

Alla esimerkki tiedostosta ja kaikista tuetuista attribuuteista:

**Koodaustehtävä**

```yml
# PAKOLLINEN
# Tehtävän tyyppi. Sallitut arvot ovat TIMin plugintyypit sekä seuraavat aliakset: 
#   - code = csPlugin
#   - quiz = qst
exerciseType: code

# PAKOLLINEN
# Koodaustehtävän tarkistin
# Sallitut arvot ovat samat kuin csPluginin type-asetus
# Yleisimpiä arvoja:
#   - csharp - C# konsolitehtävä
#   - java   - Java konsolitehtävä
#   - jypeli - C# Jypeli-tehtävä
type: csharp

# Tehtävän nimi, jota näytetään opiskelijoille
title: "Määrittele muuttujat" 

# Kuinka monta pistettä tehtävästä voi saada
points: 1

# Miten tehtävä arvostellaan ja miten pisteitä lasketaan
# Jos ei ole annettu, käytetään alla olevia oletusarvoja
grading:
  # Voiko opiskelija asettaa ja muokata pisteet itse
  selfGrading: false
  # Luetaanko pisteet ohjelman tulosteesta
  # Jos true, tehtävän tulosteesta etsitään pisteet regexilla "RANDOMCHECK: (.*)\n"
  # Ohjelmasta saatu pistemäärä skaalataan automaattisesti points-kentässä olevaan pistemäärään
  readFromProgram: false
  # Kuinka monta pistettä annetaan, jos opiskelijan ohjelman ajon tuloste täsmää
  # test/expected_output.txt -dokumentin sisällön kanssa
  # Sallitut arvot
  #   - Mikä tahansa luku - annetaan luvun verran pisteitä
  #   - 'auto' - 1 jos expected_output.txt -tiedosto on olemassa, muutoin 0
  expectedOutput: auto


# Näytetäänkö "Näytä koko koodi" -painikkeella piilotettu koodi aina
viewCollapsedCode: false
```

**Monivalintatehtäväsarja**

**TODO**


## Alkukoodi ja mallivastaus

Opiskelijalle näkyvät alkukoodit laitetaan kansioon `starter`.
Vastaavasti mallivastaus laitetaan kansioon `solution`.

Hyödyllisiä huomioita:

- Jos kansioissa on useita tiedostoja, lisätään ne kaikki mukaan alkukoodiin ja mallivastauksiin.
- Jos tehtävässä on oma arvostelukoodi (`test/run`-kansio), testauskoodi liitetään mukaan alkukoodin mukaan
  Silloin voi olla tarve arvostelukoodin pääohjelma käyttäjän ohjelman sijaan. Tällaisissa tapauksissa alkukoodin pääohjelma voi
  lisätä `NORUNBEGIN`/`NORUNEND` -lohkoon, jolloin koodi näytetään käyttäjälle mutta ei sisällytetä mukaan ajoon.
  Esimerkiksi:

  ```csharp
  public class Ohjelma
  {
        // NORUNBEGIN
        public static void Main()
        {
            Console.WriteLine(Summa(1, 2));
        }
        // NORUNEND

        // BYCODEBEGIN
        // Toteuta Summa-aliohjelma tähän
        // BYCODEEND
  }
  ```

  Tällöin Aja-painiketta painaessa palvelimella ajetaan seuraava koodi:

  ```csharp
  public class Ohjelma
  {
        // Toteuta Summa-aliohjelma tähän
  }
  ```

  Tämän avulla testaajakoodi voi määrittää oman Main-aliohjelman, jota voidaan ajaa.

