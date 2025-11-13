public class MitaTulostaa
{
    public static void Main()
    {
        // BYCODEBEGIN
        int x = 1; // Eräs vastaus
        int y = 0; // Eräs vastaus
        // BYCODEEND
        int z = 1;
        int tulos = y + x * ((2 - z) / x + y);
        System.Console.WriteLine(tulos);
    }
}