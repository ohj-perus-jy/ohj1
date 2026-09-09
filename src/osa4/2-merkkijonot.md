# 🔤 Merkkijonot

> [!HUOMAUTUS]
> Tämä luku on kesken: runko on valmis, teksti kirjoitetaan rakenneuudistuksen
> vaiheessa B.

Merkkijono (`string`) on jono merkkejä. Tässä luvussa opitaan käsittelemään
merkkijonoja valmiilla metodeilla, pilkkomaan niitä osiin ja muuntamaan
merkkijonoja luvuiksi ja takaisin.

## Merkkijono on kuin taulukko merkkejä

<!-- Indeksointi `s[0]`, `Length`, `char`. Tyhjä merkkijono ja null. -->

## Hyödyllisiä metodeja

<!-- ToUpper, ToLower, Substring, IndexOf, Contains, Replace, StartsWith.
     Metodit palauttavat uuden jonon: string on muuttumaton. -->

## Merkkijonojen yhdistäminen ja muotoilu

<!-- `+`, interpolointi `$"..."`, desimaalien muotoilu `{x:0.00}`,
     String.Format. Aritmeettinen + vs. merkkijono-+. -->

## Pilkkominen: `Split` ja `Trim`

<!-- Esimerkki: "1, 2, 3" -> osat -> luvut. -->

## Merkkijonosta luvuksi ja takaisin

Luvussa [Operaattorit ja laskutoimitukset](../osa2/2-operaattorit.md#tyyppimuunnokset)
tyyppimuunnokset esiteltiin lyhyesti. Tässä syvennetään sitä, mitä
`int.Parse` ja `double.Parse` oikeastaan tekevät ja mitä tapahtuu, kun
muunnos ei onnistu.

### Käyttäjän syöte on aina merkkijono

Käyttäjän kirjoittama syöte on aina merkkijono, vaikka se näyttäisi luvulta.
`Console.ReadLine` lukee käyttäjän kirjoittaman rivin, ja `int.Parse` muuntaa
sen luvuksi.

```csharp,ignore
Console.Write("Anna ikäsi: ");
string syote = Console.ReadLine();      // esim. "20"
int ika = int.Parse(syote);             // 20
Console.WriteLine($"Ensi vuonna olet {ika + 1}.");
```

Kokeile tätä Riderissä; selaimen koodilaatikko ei osaa kysyä syötettä.

### Kun teksti ei ole luku

<!-- Vaiheessa B: `int.Parse("abc")` heittää FormatExceptionin ja ohjelma
     kaatuu. Virheilmoituksen lukeminen. `int.TryParse` palauttaa `bool`-arvon
     ja tuloksen `out`-parametrissa; esimerkki syötteen tarkistamisesta
     silmukassa. Poikkeuksen käsittelyyn palataan luvussa 7.2. -->

### Desimaalipilkku vai piste?

<!-- Vaiheessa B: `double.Parse("3,5")` vs. `double.Parse("3.5")` riippuu
     koneen kulttuuriasetuksista. `CultureInfo.InvariantCulture` ja
     `Replace(',', '.')`. Sama koskee `ToString`-muotoilua. -->

### Luvusta merkkijonoksi

<!-- Vaiheessa B: `ToString()`, `ToString("0.00")`, interpolointi `$"{x:0.00}"`.
     Implisiittinen muunnos `+`-operaattorissa: `"Ikä: " + ika`. -->

## Valinnaista lisätietoa

* [Muokattavat merkkijonot: StringBuilder](../liitteet/stringbuilder.md)

## Tehtävät

<!-- Tehtävät lisätään vaiheessa B. -->
