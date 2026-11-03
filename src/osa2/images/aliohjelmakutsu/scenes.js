/* Kohtaukset sivulle osa2/4-aliohjelmat.md, kohta "Mitä kutsussa tapahtuu?":
 * aliohjelmakutsun vaiheet editori-ikkunassa. Piirtoavut (ui) ja animaation
 * merkinnät (data-show, data-hide, data-wait, data-ring, data-order):
 * zensical/tyokalut/assets/js/walkthrough.js.
 *
 * Jokainen vaihe on oma kohtaus, joka alkaa edellisen vaiheen lopputilasta
 * (ilman merkintöjä piirretyt osat) ja animoi vain oman vaiheensa tapahtumat.
 * Suorituksessa oleva rivi on sininen rivin tausta, muuttujien arvot näkyvät
 * rivin perässä kuten debuggerin rivinäytössä, ja hyppy riviltä toiselle on
 * nuoli rivinumeroiden vasemmalla puolella. Rivinumerot ovat samat kuin sivun
 * koodiesimerkissä (using System; on rivi 1). */

(window.jyuWalkScenes ??= []).push((ui) => {
  const key = (text) => `<span class="jw-c-key">${text}</span>`;
  const num = (text) => `<span class="kutsu-luku">${text}</span>`;

  /* .jw-code on white-space: pre, joten rivien väliin ei saa jäädä
   * rivinvaihtoja. Rivillä on oma asemointijuuri, jotta suoritusrivin tausta
   * (z-index -1) jää tekstin alle mutta koodialueen taustan päälle.
   * Nuolikaista on koodialueen vasemman reunan 26 px (padding-left). Kirjasin
   * on editoria (13 px) isompi, koska näyttämö skaalataan palstaan; 15 px:llä
   * rivin 11 arvolappu leikkautuisi ikkunan reunaan. */
  const STYLE = "<style>"
    + ".kutsu-koodi{position:relative;padding-left:26px;font-size:14px}"
    + ".kutsu-koodi>div{position:relative;z-index:0}"
    + ".kutsu-rivi{position:absolute;inset:0 0 0 -26px;z-index:-1;background:rgb(53 116 240 / 26%)}"
    + ".kutsu-luku{color:#2aacb8}"
    + ".kutsu-arvo{margin-left:18px;padding:0 7px;border-radius:4px;"
    + "background:rgb(240 180 41 / 14%);color:#f0b429;font-style:italic}"
    + ".kutsu-arvo.kutsu-paluu,.kutsu-tulos{background:rgb(106 171 115 / 18%);color:#6aab73}"
    + ".kutsu-tulos{padding:0 5px;border-radius:4px}"
    + ".kutsu-kohde{position:relative}"
    + ".kutsu-kehys{position:absolute;inset:-5px;z-index:4;box-sizing:content-box;"
    + "border:3px solid var(--jw-mark);border-radius:6px;box-shadow:0 0 0 5px var(--jw-mark-soft);"
    + "pointer-events:none}"
    + ".kutsu-nuoli{position:absolute;top:0;left:0;width:26px;height:100%;overflow:visible;pointer-events:none}"
    + ".jw-reveal .kutsu-viiva{stroke-dasharray:100;stroke-dashoffset:100;animation:kutsu-piirto .6s ease-out forwards}"
    + ".jw-reveal .kutsu-karki{opacity:0;animation:kutsu-ilmesty .2s .5s ease-out forwards}"
    + "@keyframes kutsu-piirto{to{stroke-dashoffset:0}}"
    + "@keyframes kutsu-ilmesty{to{opacity:1}}"
    + "</style>";

  const attr = (attrs) => (attrs ? ` ${attrs}` : "");

  /* Suorituksessa olevan rivin tausta. attrs: animaation merkinnät, tyhjä
   * näkyy heti. */
  const current = (attrs = "") => `<span class="kutsu-rivi"${attr(attrs)}></span>`;

  /* Muuttujan arvo rivin perässä; paluu: paluuarvon väri. */
  const value = (text, attrs = "", paluu = false) =>
    `<span class="kutsu-arvo${paluu ? " kutsu-paluu" : ""}"${attr(attrs)}>${text}</span>`;

  /* Rivin keskikohta koodialueen koordinaateissa: padding 8 px, rivi 14 px × 1,6. */
  const y = (line) => 8 + 22.4 * (line - 0.5);

  /* Nuoli riviltä toiselle nuolikaistalla: viiva kaartaa vasemmalle ja kärki
   * osoittaa kohderivin numeroa. */
  const arrow = (from, to, color, attrs = "") => {
    const y1 = y(from);
    const y2 = y(to);
    return `<svg class="kutsu-nuoli"${attr(attrs)} aria-hidden="true">`
      + `<path class="kutsu-viiva" pathLength="100" d="M 25 ${y1} C 4 ${y1}, 4 ${y2}, 17 ${y2}"`
      + ` fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>`
      + `<path class="kutsu-karki" d="M 16 ${y2 - 5} L 25 ${y2} L 16 ${y2 + 5} Z" fill="${color}"/>`
      + "</svg>";
  };

  const CALL_COLOR = "#f0b429";
  const RETURN_COLOR = "#6aab73";

  /* Koodi. marks: rivinumero -> HTML rivin alkuun (suoritusrivin tausta);
   * values: rivinumero -> HTML rivin loppuun (arvot); call: kutsun HTML
   * rivillä 7; arrows: nuolien HTML. */
  const code = ({ marks = {}, values = {}, call, arrows = "" }) => {
    const lines = [
      `${key("using")} System;`,
      "",
      `${key("public class")} Ajat`,
      "{",
      `    ${key("public static void")} Main()`,
      "    {",
      `        ${key("double")} aika = ${call} + ${num(30)};`,
      "        Console.WriteLine(aika);",
      "    }",
      "",
      `    ${key("public static double")} MinuutitSekunneiksi(${key("double")} minuutit)`,
      "    {",
      `        ${key("double")} sekunnit = minuutit * ${num(60)};`,
      `        ${key("return")} sekunnit;`,
      "    }",
      "}",
    ];
    const rows = lines.map((html, i) => {
      const n = i + 1;
      return `<div>${marks[n] ?? ""}<span class="jw-ln">${n}</span>`
        + `<span>${html}${values[n] ?? ""}</span></div>`;
    }).join("");
    return ui.window({
      title: "Ajat – Ajat.cs",
      look: "dark",
      body: `${STYLE}<div class="jw-tabs"><span>Ajat.cs</span></div>`
        + `<div class="jw-code kutsu-koodi">${rows}${arrows}</div>`,
    });
  };

  const CALL = `MinuutitSekunneiksi(${num(2)})`;

  return {
    /* 1. Argumentin arvo lasketaan: suoritus on kutsurivillä. Ensin
     * argumentti saa kehyksen, ja vasta sitten sen arvo tulee rivin perään.
     * Kehys on kohtauksen oma .jw-ringin näköinen laatikko, koska data-ring
     * piirtyisi vasta animaation lopussa eli arvolapun jälkeen. */
    argumentti: () => code({
      call: `MinuutitSekunneiksi(<span class="kutsu-kohde">`
        + `<span class="kutsu-kehys" data-show data-wait="700"></span>${num(2)}</span>)`,
      marks: { 7: current() },
      values: { 7: value("argumentti = 2", 'data-show data-wait="300"') },
    }),

    /* 2. Suoritus siirtyy aliohjelmaan: nuoli kutsulta esittelyriville,
     * suoritusrivi vaihtuu ja parametri saa arvon. */
    siirtyminen: () => code({
      call: CALL,
      marks: {
        7: current('data-hide="2"'),
        11: current('data-show data-order="2" data-wait="300"'),
      },
      values: {
        7: value("argumentti = 2"),
        11: value("minuutit = 2", 'data-show data-order="3" data-ring'),
      },
      arrows: arrow(7, 11, CALL_COLOR, 'data-show data-order="1" data-wait="500"'),
    }),

    /* 3. Runko suoritetaan: rivit 13 ja 14 vuorollaan, sekunnit saa arvon,
     * return palauttaa sen ja suoritus palaa kutsuriville. */
    runko: () => code({
      call: CALL,
      marks: {
        13: current('data-show data-order="1" data-hide="3" data-wait="500"'),
        14: current('data-show data-order="3" data-hide="6" data-wait="400"'),
        7: current('data-show data-order="6"'),
      },
      values: {
        11: value("minuutit = 2"),
        13: value("sekunnit = 120", 'data-show data-order="2" data-wait="700"'),
        14: value("palauttaa 120", 'data-show data-order="4" data-wait="700"', true),
      },
      arrows: arrow(14, 7, RETURN_COLOR, 'data-show data-order="5" data-wait="400"'),
    }),

    /* 4. Kutsun paikalle tulee paluuarvo: ensin aliohjelman muuttujat ja
     * paluunuoli katoavat, sitten kutsu korvautuu luvulla 120 ja aika saa
     * arvonsa. Piilotuksilla ei ole data-waitia, mutta jokainen vie 300 ms,
     * joten neljä piilotusta on riittävä tauko ennen kutsun korvautumista. */
    paluuarvo: () => code({
      call: `<span data-hide="2">${CALL}</span>`
        + '<span class="jw-collapse kutsu-tulos" data-show data-order="2" data-wait="900">120</span>',
      marks: { 7: current() },
      values: {
        7: value("aika = 150", 'data-show data-order="3" data-ring'),
        11: value("minuutit = 2", 'data-hide="1"'),
        13: value("sekunnit = 120", 'data-hide="1"'),
        14: value("palauttaa 120", 'data-hide="1"', true),
      },
      arrows: arrow(14, 7, RETURN_COLOR, 'data-hide="1"'),
    }),
  };
});
