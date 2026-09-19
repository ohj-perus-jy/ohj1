/* Kohtaukset sivulle osa4/4-testaaminen-comtestilla.md. Piirtoavut (ui) ja animaation merkinnät
 * (data-type, data-show, data-hide, data-wait, data-ring, data-order):
 * zensical/tyokalut/assets/js/walkthrough.js.
 *
 * Riderin editori on yksinkertaistettu piirros. Ehdotuslistan rivi
 * "comt – ComTest: DocTest" on ComTest-lisäosan kuvakaappauksesta
 * (comt-ehdotus.png). */

(window.jyuWalkScenes ??= []).push((ui) => {
  const com = (text) => `<span class="jw-c-com">${ui.esc(text)}</span>`;
  const key = (text) => `<span class="jw-c-key">${text}</span>`;

  /* Rivinumerot laskurilla: piilossa oleva rivi ei kasvata numeroa, joten
   * pohjan alla olevat rivit numeroituvat uudelleen, kun pohja ilmestyy. */
  const STYLE = "<style>.jw-lines{counter-reset:jw-ln}"
    + ".jw-lines .jw-ln::before{counter-increment:jw-ln;content:counter(jw-ln)}</style>";
  const row = (html, attrs = "") =>
    `<div style="display:flex"${attrs}><span class="jw-ln"></span><span>${html}</span></div>`;

  /* .jw-code on white-space: pre, joten rivien väliin ei saa jäädä
   * rivinvaihtoja: osat liitetään yhteen ilman välejä. */
  const popupRow = (name, what, selected) =>
    `<div style="display:flex;gap:8px;padding:2px 8px;border-radius:4px;${selected
      ? "background:#2e436e;color:#dfe1e5" : "color:#9da0a8"}">`
    + `<span style="color:#b189f5">$</span><span>${name}</span>`
    + `<span style="margin-left:auto;color:#9da0a8">${what}</span></div>`;

  const popup = '<div data-show data-order="2" data-wait="1200" style="position:absolute;z-index:3;'
    + "top:22px;left:74px;width:430px;padding:4px;border:1px solid #43454a;border-radius:6px;"
    + 'background:#2b2d30;box-shadow:0 8px 24px rgb(0 0 0 / 50%);font-size:12px">'
    + popupRow("comt", "ComTest: DocTest", true) + popupRow("ctor", "Constructor", false) + "</div>";

  const enter = '<span class="jw-btn" data-show data-order="3" data-wait="900" '
    + 'style="position:absolute;z-index:3;top:20px;left:520px;font-size:12px">Enter ⏎</span>';

  /* Tekstikursori: ensin tyhjällä rivillä, sitten kirjoituksen perässä. */
  const caret = '<span class="jw-caret" style="width:2px;height:14px"></span>';

  /* Rivi, jolle comt kirjoitetaan; Enterin jälkeen sen tilalla on pohjan
   * ensimmäinen rivi. Ensin sulkeutuu ehdotuslista (3.5), sitten comt (3.6). */
  const typed = '<div style="position:relative"><span class="jw-ln"></span><span>    '
    + '<span data-hide="3.6"><span data-type="160" data-order="1" data-wait="500">comt</span>'
    + `<span data-show data-order="0" data-wait="900">${caret}</span></span>`
    + `<span class="jw-collapse" data-show data-order="4" data-wait="300">${com("/// <example>")}</span></span>`
    + `<span data-hide="3.5">${popup}${enter}</span></div>`;

  const template = '<div class="jw-collapse" data-show data-order="4" style="display:block">'
    + row(`    ${com('/// <pre name="test">')}`)
    + row(`    ${com("/// ")}${caret}`, " data-ring")
    + row(`    ${com("/// </pre>")}`)
    + row(`    ${com("/// </example>")}`)
    + "</div>";

  return {
    /* comt + Enter: dokumentaatiokommentin loppuun tulee testipohja. */
    "comt-pohja": () => ui.window({
      title: "Laskut – Laskut.cs",
      look: "dark",
      body: `${STYLE}<div style="display:flex;flex:1;flex-direction:column;min-height:0">`
        + '<div class="jw-tabs"><span>Laskut.cs</span></div><div class="jw-code jw-lines">'
        + [
          `${key("public class")} Laskut`,
          "{",
          `    ${com("/// <summary>")}`,
          `    ${com("/// Laskee kahden kokonaisluvun summan.")}`,
          `    ${com("/// </summary>")}`,
          `    ${com('/// <param name="a">ensimmäinen luku</param>')}`,
          `    ${com('/// <param name="b">toinen luku</param>')}`,
          `    ${com("/// <returns>lukujen summa</returns>")}`,
        ].map((line) => row(line)).join("")
        + typed + template
        + [
          `    ${key("public static int")} Summa(${key("int")} a, ${key("int")} b)`,
          "    {",
          `        ${key("return")} 0;`,
          "    }",
          "}",
        ].map((line) => row(line)).join("")
        + "</div></div>",
    }),
  };
});
