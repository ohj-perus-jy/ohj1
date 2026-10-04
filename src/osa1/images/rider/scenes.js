/* Kohtaukset sivulle osa1/4-ohjelmointiymparisto-kuntoon.md. Piirtoavut (ui)
 * ja animaation merkinnät (data-type, data-show, data-click, data-hide,
 * data-wait, data-order): zensical/tyokalut/assets/js/walkthrough.js.
 *
 * Riderin New Solution on yksinkertaistettu piirros samasta kuvakaappauksesta
 * (2026-09) kuin harjoitustyön ohjeen kohtaus rider-uusi
 * (images/git-ht-ohje/scenes.js). Jos Riderin näkymä muuttuu, päivitä
 * molemmat. */

(window.jyuWalkScenes ??= []).push((ui) => ({
  /* New Solution: ConsoleMain (1), solutionin nimi (2), jonka Rider kopioi
   * projektin nimeksi, projektin nimi (3), kansio (4), Create (5). Hiiri
   * klikkaa jokaista kenttää ennen kuin siihen kirjoitetaan. Jokainen kohta,
   * johon ohjeessa tehdään valinta, saa keltaisen kehyksen heti valittaessa,
   * myös tyhjäksi jäävä Put solution and project in the same directory ja
   * Target framework. Kehys sammuu, kun seuraava valinta alkaa, joten niitä on
   * näkyvissä yksi kerrallaan. Mallilistasta näkyvät ryhmien otsikot, mutta
   * mallit vain Custom Templates -ryhmästä; muiden ryhmien tilalla on kolme
   * pistettä. Kirjoitus on oletusta hitaampi, ja jokaisen valinnan jälkeen on
   * tauko, jotta katsoja ehtii nähdä, mitä tapahtui. */
  "uusi-solution": () => {
    const TYPE = 120;
    const PAUSE = 1400;

    /* Keltainen kehys kuin data-ringissä, mutta se syttyy kohdassa order eikä
     * vasta lopussa, ja sammuu kohdassa hide. Kentässä kehys on kentän sisarus eikä
     * lapsi, koska .jw-input leikkaa sisältönsä (overflow: hidden). */
    const STYLE = "<style>.jw-canvas .jw-now{position:absolute;inset:-4px;z-index:4;padding:0;"
      + "border:3px solid var(--jw-mark);border-radius:6px;box-shadow:0 0 0 4px var(--jw-mark-soft);"
      + "pointer-events:none}</style>";
    const ring = (order, hide, wait = PAUSE) => `<span class="jw-now" data-show data-order="${order}"`
      + ` data-hide="${hide}"${wait ? ` data-wait="${wait}"` : ""}></span>`;
    const ringed = (html, order, hide, wait, width = "fit-content") =>
      `<div style="position:relative;width:${width}">${html}${ring(order, hide, wait)}</div>`;

    const section = (name) =>
      `<small style="margin:10px 6px 2px;font-size:11px;letter-spacing:normal;text-transform:none">${name}</small>`;
    const more = '<span style="color:#8c8f96">…</span>';
    const row = (label, value) => `<div class="jw-form-row"><span>${label}</span>${value}</div>`;
    return ui.window({
      title: "New Solution",
      look: "dark",
      body: `${STYLE}<div style="display:flex;flex:1;flex-direction:column;min-height:0">
        <div class="jw-ide">
          <div class="jw-ide-list" style="gap:0;padding:0;overflow:hidden">
            <div class="jw-input" style="margin:8px;color:#8c8f96">⌕ Search</div>
            <div style="display:flex;flex:1;flex-direction:column;gap:1px;min-height:0;padding:0 8px 8px;overflow:hidden">
              ${section(".NET")}${more}
              ${section("Game Development")}${more}
              ${section("Other")}${more}
              ${section("Custom Templates")}<span>Android Fysiikkapeli</span>
              <span style="position:relative" data-click data-on="jw-sel" data-order="1">ConsoleMain${ring(1.1, 2)}</span><span>Fysiikkapeli</span><span>Peruspeli</span><span>Tasohyppelypeli</span>
              <span style="margin-top:auto;color:#548af7">Manage Templates...</span>
            </div>
          </div>
          <div class="jw-form" style="gap:10px">
            ${row("Solution name:", `<div style="display:flex;align-items:center;gap:14px">
              ${ringed(`<div class="jw-input" style="width:230px" data-click data-order="2">
                <span data-type="${TYPE}" data-order="2.2">Demo1</span></div>`, 2.1, 3, 0)}
              <span style="color:#8c8f96">format <span style="color:#548af7">.sln ▾</span></span></div>`)}
            ${row("Project name:", ringed(`<div class="jw-input" style="width:230px" data-click data-order="3">
              <span data-show data-order="2.3" data-hide="3.2" data-wait="${PAUSE}">Demo1</span><span data-type="${TYPE}" data-order="3.3" data-wait="${PAUSE}">HelloWorld</span></div>`, 3.1, 4, 0))}
            ${row("Solution directory:", ringed(`<div class="jw-input" style="display:flex" data-click data-order="4">
              <span data-type="${TYPE}" data-order="4.2" data-wait="${PAUSE}">C:\\Users\\olli\\ohj1\\demot</span><span style="margin-left:auto;color:#8c8f96">▭</span></div>`, 4.1, 4.5, 0, "auto"))}
            <div class="jw-hint" style="margin:-6px 0 0 170px">The project will be created in ...\\Demo1\\HelloWorld</div>
            <div style="margin-left:170px">
              <div class="jw-check" style="position:relative;width:fit-content"><i></i><div>Put solution and project in the same directory</div>${ring(4.5, 4.6)}</div>
              <div class="jw-check"><i></i><div>Create Git repository</div></div>
            </div>
            ${row("Target framework:", ringed('<div class="jw-input" style="display:flex;width:100px">net10.0<span style="margin-left:auto">▾</span></div>', 4.6, 5))}
            ${row("Language:", "<span>C#</span>")}
            ${row("Type:", "<span>ConsoleMain</span>")}
            <div style="display:flex;align-items:center;gap:8px;margin-top:6px;font-size:12px">› Template description<span style="flex:1;border-top:1px solid #3c3f44"></span></div>
          </div>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:8px;padding:10px 16px;border-top:1px solid #3c3f44">
          <span class="jw-btn jw-btn--primary" data-click data-order="5">Create</span><span class="jw-btn">Cancel</span></div>
      </div>`,
    });
  },
}));
