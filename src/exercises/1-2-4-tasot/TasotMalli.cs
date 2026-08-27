using Jypeli;

/// @author henri
/// @version 04.12.2025
/// <summary>
/// Malliratkaisu demoon 1-2-4 portaat 
/// </summary>
public class TasotMalli : PhysicsGame
{
    private const double NOPEUS = 200;
    private const double HYPPYNOPEUS = 750;
    private const int RUUDUN_KOKO = 40;

    private byte pisteet;

    private PlatformCharacter pelaaja1;
    private PhysicsObject maali;

    private Image pelaajanKuva = LoadImage("norsu.png");
    private Image tahtiKuva = LoadImage("tahti.png");

    private SoundEffect maaliAani = LoadSoundEffect("maali.wav");

    public override void Begin()
    {
        Gravity = new Vector(0, -1000);

        LuoKentta();
        //Lisää tähän kutsuja aliohjelmaan LuoTaso, jotta pääset pelihahmolla hyppimään maaliin
        LuoTaso(-300, -180);
        LuoTaso(-200, -120);
        LuoTaso(-100, -60);
        LuoTaso(0, 0);
        LuoTaso(100, 60);
        LuoTaso(200, 120);
        LisaaNappaimet();

        Camera.Follow(pelaaja1);
        Camera.ZoomFactor = 1.2;
        Camera.StayInLevel = true;
        
        MasterVolume = 0.5;
    }
    
    /// <summary>
    /// Aliohjelma lisää kenttään tason (PhysicsObject.CreateStaticObject), jonka leveys on 50
    /// ja korkeus 30. Tason keskipiste on (x, y).
    /// </summary>
    /// <param name="x">Tason keskipisteen x-koordinaatti</param>
    /// <param name="y">Tason keskipisteen y-koordinaatti</param>
    private void LuoTaso(double x, double y)
    {
        //Täydennä
	PhysicsObject taso = PhysicsObject.CreateStaticObject(50, 30);
        taso.X = x;
        taso.Y = y;
        taso.Color = Color.Green;
        Add(taso);
    }
    //Kaikki tästä eteenpäin on tehtäväpohjaa
    private void LuoKentta()
    {
        TileMap kentta = TileMap.FromLevelAsset("kentta1.txt");
        kentta.SetTileMethod('#', LisaaMaa);
        kentta.SetTileMethod('*', LisaaTahti);
        kentta.SetTileMethod('N', LisaaPelaaja);
        kentta.SetTileMethod('M', LisaaMaali);
        kentta.Execute(RUUDUN_KOKO, RUUDUN_KOKO);
        Level.CreateBorders();
        Level.Background.CreateGradient(Color.White, Color.SkyBlue);
    }

    private void LisaaMaa(Vector paikka, double leveys, double korkeus)
    {
        PhysicsObject taso = PhysicsObject.CreateStaticObject(leveys, korkeus);
        taso.Position = paikka;
        taso.Color = Color.Green;
        Add(taso);
    }

    private void LisaaTahti(Vector paikka, double leveys, double korkeus)
    {
        PhysicsObject tahti = PhysicsObject.CreateStaticObject(leveys, korkeus);
        tahti.IgnoresCollisionResponse = true;
        tahti.Position = paikka;
        tahti.Image = tahtiKuva;
        tahti.Tag = "tahti";
        Add(tahti);
    }

    private void LisaaPelaaja(Vector paikka, double leveys, double korkeus)
    {
        pelaaja1 = new PlatformCharacter(leveys, korkeus);
        pelaaja1.Position = paikka;
        pelaaja1.Mass = 4.0;
        pelaaja1.Image = pelaajanKuva;
        AddCollisionHandler(pelaaja1, "tahti", TormaaTahteen);
        AddCollisionHandler(pelaaja1, "maali", Lopetus);
        Add(pelaaja1);
    }

    private void LisaaNappaimet()
    {
        Keyboard.Listen(Key.F1, ButtonState.Pressed, ShowControlHelp, "Näytä ohjeet");
        Keyboard.Listen(Key.Escape, ButtonState.Pressed, ConfirmExit, "Lopeta peli");

        Keyboard.Listen(Key.Left, ButtonState.Down, Liikuta, "Liikkuu vasemmalle", pelaaja1, -NOPEUS);
        Keyboard.Listen(Key.Right, ButtonState.Down, Liikuta, "Liikkuu vasemmalle", pelaaja1, NOPEUS);
        Keyboard.Listen(Key.Up, ButtonState.Pressed, Hyppaa, "Pelaaja hyppää", pelaaja1, HYPPYNOPEUS);

        ControllerOne.Listen(Button.Back, ButtonState.Pressed, Exit, "Poistu pelistä");

        ControllerOne.Listen(Button.DPadLeft, ButtonState.Down, Liikuta, "Pelaaja liikkuu vasemmalle", pelaaja1, -NOPEUS);
        ControllerOne.Listen(Button.DPadRight, ButtonState.Down, Liikuta, "Pelaaja liikkuu oikealle", pelaaja1, NOPEUS);
        ControllerOne.Listen(Button.A, ButtonState.Pressed, Hyppaa, "Pelaaja hyppää", pelaaja1, HYPPYNOPEUS);

        PhoneBackButton.Listen(ConfirmExit, "Lopeta peli");
    }

    private void Liikuta(PlatformCharacter hahmo, double nopeus)
    {
        hahmo.Walk(nopeus);
    }

    private void Hyppaa(PlatformCharacter hahmo, double nopeus)
    {
        hahmo.Jump(nopeus);
    }

    private void TormaaTahteen(PhysicsObject hahmo, PhysicsObject tahti)
    {
        maaliAani.Play();
        pisteet++;
        MessageDisplay.Add("Keräsit tähden!");
        tahti.Destroy();
    }

    private void LisaaMaali(Vector paikka, double leveys, double korkeus)
    {
        maali = PhysicsObject.CreateStaticObject(leveys, korkeus);
        maali.IgnoresCollisionResponse = true;
        maali.Position = paikka;
        maali.Image = tahtiKuva;
        maali.Tag = "maali";
        Add(maali);
    }

    private void Lopetus(PhysicsObject hahmo, PhysicsObject tahti)
    {
        maaliAani.Play();
        pisteet++;
        MessageDisplay.Add("Pääsit maaliin!");
        tahti.Destroy();
        MultiSelectWindow loppuvalikko = new MultiSelectWindow("Voitit pelin! Tähtiä kerätty: " + pisteet + "/8", "Uusi peli", "Sulje peli");
        loppuvalikko.AddItemHandler(0, AloitaAlusta);
        loppuvalikko.AddItemHandler(1, Exit);
        Add(loppuvalikko);
    }

    private void AloitaAlusta()
    {
        ClearAll();
        pisteet = 0;
        Begin();
    }
}

