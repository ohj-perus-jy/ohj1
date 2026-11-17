/* Kohtaukset sivulle git-ht-ohje.md. Näkymän ja piirtoavut (ui) tekee
 * zensical/assets/js/walkthrough.js; sen alussa on animaation merkinnät
 * (data-type, data-show, data-click, data-hide, data-ring, data-order).
 *
 * Terminaalin tulosteet on ajettu oikealla gitillä (2.54) pty:ssä kurssin
 * pohjaprojektin (tie/ohj1/2025k/ohj1ht) kopiota vasten: etäosoite ohjattiin
 * insteadOf-asetuksella paikalliseen varastoon, ja koodipohja on
 * `dotnet new Fysiikkapeli` (Jypeli.Templates 1.12.0) ja `dotnet new sln`
 * samaan kansioon kuten Riderin Put solution and project in the same
 * directory. Riderin .idea-tiedostot ovat oletus. ls -la on Git Bashin muodossa: koot CRLF-rivinvaihdoin, ryhmä
 * 197121, kansion perässä / ja skriptin perässä * (Git Bashin ls -F).
 * GitLabin, Git Credential Managerin, Riderin ja TIMin näkymät ovat
 * yksinkertaistettuja piirroksia. */

(window.jyuWalkScenes ??= []).push((ui) => {
  const HT = "~/ohj1/harjoitustyo";
  const REMOTE = "https://gitlab.jyu.fi/kayttajatunnus/ohj1ht.git";
  const TEMPLATE = "https://gitlab.jyu.fi/tie/ohj1/ohj1ht";

  const session = [
    { cwd: "~", cmd: 'git config --global user.name "Olli Opiskelija"' },
    { cwd: "~", cmd: 'git config --global user.email "olli.o.opiskelija@student.jyu.fi"' },
    { cwd: "~", cmd: "mkdir -p ohj1/harjoitustyo" },
    { cwd: "~", cmd: "cd ohj1/harjoitustyo" },
    {
      cwd: HT, cmd: `git clone ${REMOTE} .`, out: [
        "Cloning into '.'...",
        "remote: Enumerating objects: 27, done.",
        "remote: Counting objects: 100% (27/27), done.",
        "remote: Compressing objects: 100% (19/19), done.",
        "remote: Total 27 (delta 8), reused 27 (delta 8), pack-reused 0 (from 0)",
        "Receiving objects: 100% (27/27), 16.16 KiB | 16.16 MiB/s, done.",
        "Resolving deltas: 100% (8/8), done.",
      ],
    },
    {
      cwd: HT, branch: "main", cmd: "ls -la", out: [
        "total 12",
        "drwxr-xr-x 1 olli 197121    0 Sep 13 12:24 ./",
        "drwxr-xr-x 1 olli 197121    0 Sep 13 12:24 ../",
        "drwxr-xr-x 1 olli 197121    0 Sep 13 12:24 .git/",
        "-rw-r--r-- 1 olli 197121 6351 Sep 13 12:24 .gitignore",
        "-rw-r--r-- 1 olli 197121 1187 Sep 13 12:24 README.md",
        "-rwxr-xr-x 1 olli 197121 2211 Sep 13 12:24 check.sh*",
        "drwxr-xr-x 1 olli 197121    0 Sep 13 12:24 suunnitelma/",
      ],
    },
    { cwd: HT, branch: "main", cmd: "git add --all" },
    {
      cwd: HT, branch: "main", cmd: "git status", out: [
        "On branch main",
        "Your branch is up to date with 'origin/main'.",
        "",
        "Changes to be committed:",
        '  (use "git restore --staged <file>..." to unstage)',
        ["green", "\tnew file:   suunnitelma/hahmotelma.png"],
        ["green", "\tmodified:   suunnitelma/suunnitelma.md"],
      ],
    },
    {
      cwd: HT, branch: "main", cmd: 'git commit -m "Suunnitelma ja hahmotelmakuva"', out: [
        "[main ef666e3] Suunnitelma ja hahmotelmakuva",
        " 2 files changed, 9 insertions(+), 10 deletions(-)",
        " create mode 100644 suunnitelma/hahmotelma.png",
      ],
    },
    {
      cwd: HT, branch: "main", cmd: "git push", out: [
        "Enumerating objects: 8, done.",
        "Counting objects: 100% (8/8), done.",
        "Delta compression using up to 16 threads",
        "Compressing objects: 100% (5/5), done.",
        "Writing objects: 100% (5/5), 403.18 KiB | 22.40 MiB/s, done.",
        "Total 5 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)",
        `To ${REMOTE}`,
        "   118a068..ef666e3  main -> main",
      ],
    },
    {
      cwd: HT, branch: "main", cmd: "bash check.sh", out: [
        "✅ Root directory is clean. / Kansio on siisti. :)",
      ],
    },
    { cwd: HT, branch: "main", cmd: "git add --all" },
    {
      cwd: HT, branch: "main", cmd: "git status", out: [
        "On branch main",
        "Your branch is up to date with 'origin/main'.",
        "",
        "Changes to be committed:",
        '  (use "git restore --staged <file>..." to unstage)',
        ["green", "\tnew file:   PertinSeikkailut/.idea/.idea.PertinSeikkailut/.idea/.gitignore"],
        ["green", "\tnew file:   PertinSeikkailut/.idea/.idea.PertinSeikkailut/.idea/indexLayout.xml"],
        ["green", "\tnew file:   PertinSeikkailut/.idea/.idea.PertinSeikkailut/.idea/vcs.xml"],
        ["green", "\tnew file:   PertinSeikkailut/Content/norsu.png"],
        ["green", "\tnew file:   PertinSeikkailut/Content/tahti.png"],
        ["green", "\tnew file:   PertinSeikkailut/Ohjelma.cs"],
        ["green", "\tnew file:   PertinSeikkailut/PertinSeikkailut.cs"],
        ["green", "\tnew file:   PertinSeikkailut/PertinSeikkailut.csproj"],
        ["green", "\tnew file:   PertinSeikkailut/PertinSeikkailut.sln"],
      ],
    },
    {
      cwd: HT, branch: "main", cmd: 'git commit -m "Harjoitustyön koodipohja"', out: [
        "[main 51e0ac0] Harjoitustyön koodipohja",
        " 9 files changed, 99 insertions(+)",
        " create mode 100644 PertinSeikkailut/.idea/.idea.PertinSeikkailut/.idea/.gitignore",
        " create mode 100644 PertinSeikkailut/.idea/.idea.PertinSeikkailut/.idea/indexLayout.xml",
        " create mode 100644 PertinSeikkailut/.idea/.idea.PertinSeikkailut/.idea/vcs.xml",
        " create mode 100644 PertinSeikkailut/Content/norsu.png",
        " create mode 100644 PertinSeikkailut/Content/tahti.png",
        " create mode 100644 PertinSeikkailut/Ohjelma.cs",
        " create mode 100644 PertinSeikkailut/PertinSeikkailut.cs",
        " create mode 100644 PertinSeikkailut/PertinSeikkailut.csproj",
        " create mode 100644 PertinSeikkailut/PertinSeikkailut.sln",
      ],
    },
    {
      cwd: HT, branch: "main", cmd: "git push", out: [
        "Enumerating objects: 15, done.",
        "Counting objects: 100% (15/15), done.",
        "Delta compression using up to 16 threads",
        "Compressing objects: 100% (11/11), done.",
        "Writing objects: 100% (14/14), 16.46 KiB | 8.23 MiB/s, done.",
        "Total 14 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)",
        `To ${REMOTE}`,
        "   ef666e3..51e0ac0  main -> main",
      ],
    },
  ];

  /* Pohjaprojektin juuren tiedostot ja viimeisimmät commitit (git log). */
  const TEMPLATE_FILES = [
    ["suunnitelma/", "Update suunnitelma.md", "4 years ago"],
    [".gitignore", "Ensimmäinen commit.", "4 years ago"],
    ["check.sh", "Skripti kansiorakenteen tarkistamiseksi", "1 year ago"],
    ["README.md", "README uusiksi", "1 year ago"],
  ];

  const projectTitle = ({ fork = "", code = "" } = {}) =>
    '<div class="jw-gl-title"><span class="jw-gl-avatar">O</span><h4>ohj1ht</h4>'
    + `<span class="jw-btn">☆ Star</span><span class="jw-btn" ${fork}>⑂ Fork</span>`
    + `<span class="jw-btn jw-btn--primary" ${code}>Code ▾</span></div>`;

  /* Fork-lomake kahdessa vaiheessa: ensin nimiavaruus pudotusvalikosta,
   * sitten kuvaus, näkyvyys ja nappi. Valikko: kenttä auki (1), valikko
   * näkyviin (2), oma nimi (3), nimi kenttään ja valikko pois (4). */
  const forkForm = (second) => ui.gitlab({
    title: "Fork project · GitLab",
    url: `${TEMPLATE}/-/forks/new`,
    crumb: "tie / ohj1 / ohj1ht / Fork project",
    body: `<div class="jw-gl-title"><h4>Fork project</h4></div>
      <div class="jw-field"><label>Project name</label><div class="jw-input">ohj1ht</div></div>
      <div class="jw-row">
        <div class="jw-field" style="flex:1"><label>Project URL</label>
          <div class="jw-row" style="gap:0">
            <div class="jw-input" style="border-radius:4px 0 0 4px;background:#f6f6f8">https://gitlab.jyu.fi/</div>
            <div class="jw-input" style="flex:1;display:flex;border-left:0;border-radius:0 4px 4px 0"${second ? "" : ' data-click data-order="1"'}>
              ${second ? "" : '<span style="color:#89888d" data-hide="4">Select a namespace</span>'}
              <span${second ? "" : ' data-show data-order="4"'}>Olli Opiskelija</span>
              <span style="margin-left:auto;color:#737278">▾</span></div>
          </div></div>
        <div class="jw-field" style="width:170px"><label>Project slug</label><div class="jw-input"${second ? "" : " data-ring"}>ohj1ht</div></div>
      </div>
      ${second ? "" : `<div class="jw-popover" style="left:178px;top:184px;width:300px" data-show data-order="2" data-hide="4">
        <div class="jw-input" style="margin-bottom:8px;color:#89888d">Search</div>
        <div class="jw-label" style="color:#737278">Users</div>
        <div style="padding:5px 8px;border-radius:4px;background:#ececf4" data-click data-order="3"><b>Olli Opiskelija</b> <span style="color:#737278">kayttajatunnus</span></div>
      </div>`}
      <div class="jw-field"><label>Project description (optional)</label>
        <div class="jw-input"${second ? " data-type" : ""}>${second ? "Harjoitustyö Ohjelmointi 1 -kurssilla" : ""}</div></div>
      <div class="jw-field jw-radio-group"><label>Visibility level</label>
        <div class="jw-radio jw-on jw-default"><i></i><div>Private</div></div>
        <div class="jw-radio"><i></i><div>Internal</div></div>
        <div class="jw-radio"${second ? ' data-click data-on="jw-on"' : ""}><i></i><div>Public <small style="display:inline">· The project can be accessed without any authentication.</small></div></div>
      </div>
      <span class="jw-btn jw-btn--primary"${second ? " data-click" : ""}>Fork project</span> <span class="jw-btn">Cancel</span>`,
  });

  /* Käyttäjän asetusten Personal access tokens -sivu. Valikon attribuutit:
   * access = Access-rivi, submenu = sen alavalikko (valmiiksi auki),
   * pat = Personal access tokens -rivi (valmiiksi valittu). */
  const tokenPage = (body, {
    access = "", submenu = "", pat = 'class="jw-sel"',
    crumb = "User settings / Access / Personal access tokens",
  } = {}) => ui.gitlab({
    title: "Personal access tokens · User settings · GitLab",
    url: "https://gitlab.jyu.fi/-/user_settings/personal_access_tokens",
    heading: "User settings",
    side: ["Profile", "Account", "Applications", `<span ${access}>Access</span>`,
      `<span class="jw-collapse" style="display:flex;flex-direction:column;gap:5px;padding-left:12px" ${submenu}>`
        + `<span ${pat}>Personal access tokens</span><span>SSH keys</span></span>`,
      "Emails", "Password", "Notifications", "Preferences"],
    crumb,
    body,
  });

  const codeRows = (lines, first) => lines.map((line, i) =>
    `<div><span class="jw-ln">${first + i}</span><span>${line}</span></div>`).join("");

  return {
    kirjaudu: () => ui.browser({
      title: "Sign in · GitLab",
      url: "https://gitlab.jyu.fi/",
      body: `<div style="display:grid;grid-template-columns:1fr 290px;gap:36px;padding:48px 50px">
        <div><div style="font-size:26px;font-weight:600;line-height:1.2;margin-bottom:8px">GitLab – University of Jyväskylä</div>
          <div style="color:#555">Open source software to collaborate on code</div></div>
        <div style="border:1px solid #dcdcde;border-radius:6px;padding:14px">
          <div class="jw-segments" style="margin-top:0"><span class="jw-sel">JYUNET</span><span>Standard</span></div>
          <div class="jw-field"><label>JYUNET Username</label><div class="jw-input" data-type>kayttajatunnus</div></div>
          <div class="jw-field"><label>Password</label><div class="jw-input" data-type>••••••••••••</div></div>
          <div class="jw-btn jw-btn--primary" style="display:flex;justify-content:center;padding:7px" data-click>Sign in</div>
        </div></div>`,
    }),

    pohjaprojekti: () => ui.gitlab({
      title: "tie / ohj1 / ohj1ht · GitLab",
      url: TEMPLATE,
      typeUrl: true,
      crumb: "tie / ohj1 / ohj1ht",
      body: projectTitle({ fork: 'data-click data-order="2"' })
        + '<p style="margin:0 0 10px;color:#444">Pohja Ohjelmointi 1 -kurssin harjoitustöiden Git-varastoille.</p>'
        + `<div data-show data-order="1">${ui.files(TEMPLATE_FILES)}</div>`,
    }),

    "fork-nimiavaruus": () => forkForm(false),

    "fork-nakyvyys": () => forkForm(true),

    "kopioi-osoite": () => ui.gitlab({
      title: "Olli Opiskelija / ohj1ht · GitLab",
      url: "https://gitlab.jyu.fi/kayttajatunnus/ohj1ht",
      crumb: "Olli Opiskelija / ohj1ht",
      body: '<div class="jw-alert-ok">The project was successfully forked.</div>'
        + projectTitle({ code: "data-click" })
        + '<p style="margin:0 0 10px;color:#444">Harjoitustyö Ohjelmointi 1 -kurssilla · Forked from tie / ohj1 / ohj1ht</p>'
        + ui.files(TEMPLATE_FILES)
        + `<div class="jw-popover" style="right:22px;top:118px;width:350px" data-show>
            <div class="jw-label" style="color:#777">Clone with SSH</div>
            <div class="jw-row" style="margin-bottom:10px"><div class="jw-input jw-input--mono" style="flex:1;color:#999">git@gitlab.jyu.fi:kayttajatunnus/ohj1ht.git</div><span class="jw-btn">⧉</span></div>
            <div class="jw-label">Clone with HTTPS</div>
            <div class="jw-row"><div class="jw-input jw-input--mono" style="flex:1" data-ring>${REMOTE}</div><span class="jw-btn" data-click>⧉</span></div>
          </div>`,
    }),

    /* Windows 11, tumma teema: tehtäväpalkin haku (1), hakupaneeli (2),
     * "git bash" (3), tulokset (4), Git Bash (5), paneeli pois ja ikkuna auki
     * (6). Hakupaneeli on kuvakaappauksen src/images/gitbash-startmenu.png
     * mukainen suomennettuna (walkthrough.css: .jw-w11). Sama kohtaus on
     * animaationa myös sivuilla git.md ja tyokalut.md (<animation>). */
    "avaa-windows": () => {
      const icon = (size, paths) => `<svg viewBox="0 0 16 16" width="${size}" height="${size}" fill="none"`
        + ' stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"'
        + ` aria-hidden="true">${paths}</svg>`;
      const magnifier = (size) => icon(size, '<circle cx="6.5" cy="6.5" r="4.5"/><path d="m10 10 4 4"/>');
      const pin = '<path d="M9.8 2 14 6.2l-2.4.9-2.8 2.8.3 2.6-1 1-4.6-4.6 1-1 2.6.3 2.8-2.8zM5.8 10.2 2 14"/>';
      /* Git for Windowsin kuvake: neljä pyöristettyä neliötä vinossa ja
       * niiden päällä haarautuva viiva kolmella solmulla. */
      const gitLogo = (size) => `<svg viewBox="0 0 44 44" width="${size}" height="${size}" aria-hidden="true">`
        + '<g transform="rotate(45 22 22)">'
        + '<rect x="6.45" y="6.45" width="14.55" height="14.55" rx="3" fill="#f47a7a"/>'
        + '<rect x="23" y="6.45" width="14.55" height="14.55" rx="3" fill="#7ccf5c"/>'
        + '<rect x="23" y="23" width="14.55" height="14.55" rx="3" fill="#fbdc7a"/>'
        + '<rect x="6.45" y="23" width="14.55" height="14.55" rx="3" fill="#78acf5"/></g>'
        + '<g fill="#262626" stroke="#262626" stroke-width="1.7">'
        + '<path d="M13.8 8.2 22.6 12.4 21.4 31.5M22.6 12.4l8.7 9.8" fill="none"/>'
        + '<circle cx="22.6" cy="12.4" r="2.6"/><circle cx="31.3" cy="22.2" r="2.6"/>'
        + '<circle cx="21.4" cy="31.5" r="2.6"/></g></svg>';
      const chips = ["Kaikki", "Sovellukset", "Tiedostot", "Verkko", "Asetukset", "Kansiot"];
      const suggestions = ["download", "commands", "windows", "windows 11"];
      const actions = [
        ['<path d="M9.5 2.5h4v4M13.5 2.5 8 8M12 9.5v3a1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3"/>', "Avaa"],
        ['<rect x="2" y="2.5" width="9" height="8" rx="1"/><path d="M11.5 8.5 14 9.4v2.1c0 1.5-1 2.5-2.5 3-1.5-.5-2.5-1.5-2.5-3V9.4z" fill="currentColor"/>',
          "Suorita järjestelmänvalvojana"],
        ['<path d="M2 4.5a1 1 0 0 1 1-1h3.2l1.5 1.5H13a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>', "Avaa tiedoston sijainti"],
        [pin, "Kiinnitä aloitusvalikkoon"],
        [pin, "Kiinnitä tehtäväpalkkiin"],
        ['<path d="M2.5 4h11M6 4V2.5h4V4M4 4l.7 9a1 1 0 0 0 1 .9h4.6a1 1 0 0 0 1-.9L12 4M6.8 6.5v5M9.2 6.5v5"/>', "Poista asennus"],
      ];

      return `<div class="jw-w11">
        <div class="jw-w11-taskbar">
          <span class="jw-w11-start"><b><i></i><i></i><i></i><i></i></b></span>
          <span class="jw-w11-search" data-click data-order="1">${magnifier(14)}Haku</span>
          <span class="jw-w11-run"><i style="width:22px;height:17px;border-radius:2px 2px 3px 3px;background:linear-gradient(#ffd66b,#eeaa22)"></i></span>
          <span class="jw-w11-run"><i style="width:22px;height:22px;border-radius:50%;background:conic-gradient(from 200deg,#1b8fe0,#39c3f2,#52d37e,#1b8fe0)"></i></span>
          <span><i style="width:18px;height:22px;border-radius:3px;background:linear-gradient(#6cc0ff,#2b7fd8)"></i></span>
          <span><i style="display:grid;place-items:center;width:22px;height:18px;border-radius:3px;background:#333;box-shadow:inset 0 0 0 1px #5a5a5a;color:#ddd;font:9px/1 var(--jw-mono)">&gt;_</i></span>
          <span class="jw-w11-run" data-show data-order="6">${gitLogo(24)}</span>
        </div>
        <div class="jw-w11-panel" data-show data-order="2" data-hide="6">
          <div class="jw-w11-query">${magnifier(15)}<span data-type data-order="3">git bash</span></div>
          <div class="jw-w11-chips"><span class="jw-w11-back">←</span>${chips.map((chip, i) =>
            `<span${i ? "" : ' class="jw-w11-on"'}>${chip}</span>`).join("")}<span class="jw-w11-back">▶</span></div>
          <div class="jw-w11-results" data-show data-order="4">
            <div>
              <div class="jw-w11-heading">Paras vastine</div>
              <div class="jw-w11-best" data-click data-order="5">${gitLogo(26)}<div>Git Bash<small>Sovellus</small></div></div>
              <div class="jw-w11-heading">Hae verkosta</div>
              <div class="jw-w11-row">${magnifier(12)}<span>git bash <small>– Näytä lisää hakutuloksia</small></span>›</div>
              ${suggestions.map((rest) =>
                `<div class="jw-w11-row">${magnifier(12)}<span>git bash <b>${rest}</b></span>›</div>`).join("")}
            </div>
            <div class="jw-w11-card">
              ${gitLogo(52)}<b>Git Bash</b><small>Sovellus</small>
              <div class="jw-w11-actions">${actions.map(([paths, label]) =>
                `<div>${icon(14, paths)}${label}</div>`).join("")}</div>
            </div>
          </div>
        </div>
        <div class="jw-win jw-win--terminal" style="top:40px;left:100px;width:600px;height:360px" data-show data-order="6">
          <div class="jw-titlebar"><span class="jw-dots"><i></i><i></i><i></i></span><span class="jw-title">MINGW64:/c/Users/olli</span></div>
          <div class="jw-terminal" style="justify-content:flex-start" data-ring>
            <div><span class="jw-t-green">olli@kannettava</span> <span class="jw-t-magenta">MINGW64</span> <span class="jw-t-yellow">~</span></div>
            <div>$ <span class="jw-caret"></span></div>
          </div>
        </div>
      </div>`;
    },

    /* macOS: Dockin Launchpad (1), Launchpad (2), "Pääte" (3), tulos (4),
     * Pääte (5), Launchpad pois ja ikkuna auki (6). */
    "avaa-macos": () => `
      <div style="position:absolute;inset:0;background:linear-gradient(160deg,#4b2f86,#b9528c 55%,#f39a6b)"></div>
      <div style="position:absolute;left:0;right:0;top:0;height:24px;display:flex;align-items:center;gap:16px;padding:0 14px;background:rgb(255 255 255 / 40%);color:#111;font-size:12px">
        <b>Finder</b><span>Arkisto</span><span>Muokkaa</span><span>Näytä</span><span>Siirry</span><span>Ikkuna</span><span>Ohjeet</span>
      </div>
      <div style="position:absolute;bottom:8px;left:50%;display:flex;gap:10px;padding:8px 12px;border-radius:16px;background:rgb(255 255 255 / 35%);transform:translateX(-50%)">
        <span style="width:40px;height:40px;border-radius:10px;background:linear-gradient(#6ec6ff,#1e7de0)"></span>
        <span style="display:grid;grid-template-columns:repeat(3,1fr);gap:3px;width:40px;height:40px;padding:7px;border-radius:10px;background:#e9e9ee" data-click data-order="1"><i style="border-radius:2px;background:#8e8e93"></i><i style="border-radius:2px;background:#8e8e93"></i><i style="border-radius:2px;background:#8e8e93"></i><i style="border-radius:2px;background:#8e8e93"></i><i style="border-radius:2px;background:#8e8e93"></i><i style="border-radius:2px;background:#8e8e93"></i><i style="border-radius:2px;background:#8e8e93"></i><i style="border-radius:2px;background:#8e8e93"></i><i style="border-radius:2px;background:#8e8e93"></i></span>
        <span style="width:40px;height:40px;border-radius:10px;background:radial-gradient(circle,#fff 30%,#1f8fff 32%)"></span>
        <span style="width:40px;height:40px;border-radius:10px;background:#8e8e93"></span>
      </div>
      <div style="position:absolute;inset:0;background:rgb(30 20 50 / 72%);color:#fff" data-show data-order="2" data-hide="6">
        <div style="width:240px;margin:48px auto 0;padding:5px 12px;border-radius:8px;background:rgb(255 255 255 / 18%);font-size:13px">⌕&nbsp; <span data-type data-order="3">Pääte</span></div>
        <div style="width:90px;margin:70px auto 0;text-align:center" data-show data-order="4">
          <div style="display:grid;place-items:center;width:72px;height:72px;margin:0 auto 8px;border-radius:16px;background:#1d1d1f;box-shadow:0 0 0 1px #555;font:600 22px var(--jw-mono)" data-click data-order="5">&gt;_</div>
          <div style="font-size:13px">Pääte</div>
        </div>
      </div>
      <div class="jw-win" style="top:60px;left:130px;width:540px;height:320px" data-show data-order="6">
        <div class="jw-titlebar" style="justify-content:center;background:#e8e8e8"><span class="jw-dots" style="position:absolute;left:10px"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i></span><span class="jw-title">olli — -zsh — 80×24</span></div>
        <div class="jw-terminal" style="justify-content:flex-start;color:#111" data-ring>
          <div>Last login: Sun Sep 13 12:20:14 on console</div>
          <div>olli@MacBook-Air ~ % <span class="jw-caret" style="background:#111"></span></div>
        </div>
      </div>`,

    "git-config": () => ui.gitBash({ session, from: 0, to: 2 }),

    kansio: () => ui.gitBash({ session, from: 2, to: 4 }),

    clone: () => ui.gitBash({ session, from: 4, to: 5 }),

    ls: () => ui.gitBash({ session, from: 5, to: 6 }),

    kuva: () => ui.explorer({
      title: "suunnitelma",
      path: "olli › ohj1 › harjoitustyo › suunnitelma",
      rows: [
        ["esimerkkikuva.png", "PNG-kuva", "10 kt"],
        ["hahmotelma.png", "PNG-kuva", "403 kt", 'class="jw-new" data-show data-ring'],
        ["README.md", "MD-tiedosto", "1 kt"],
        ["suunnitelma.md", "MD-tiedosto", "2 kt"],
      ],
    }),

    /* Suunnitelman avaaminen koneella, jolla ei ole Markdown-editoria.
     * Molemmissa sama pohjan suunnitelma.md (ohj1ht) sellaisenaan. */
    ...(() => {
      const plan = [
        "# Harjoitustyön suunnitelma",
        "",
        "(Täydennä oman pelisi tiedot tähän tiedostoon muokkaamalla",
        "tiedostoa tekstieditorissa. Käytä [Markdown-syntaksia](https://about.gitlab.com/handbook/markdown-guide/).",
        "Poista sitten *kaikki* suluilla merkityt ohjetekstit.)",
        "",
        "## Tietoja",
        "",
        "Tekijä: (Etunimi Sukunimi)",
        "",
        "Työ git-varaston osoite: <https://gitlab.jyu.fi/anlakane/ohj1ht> (*Korvaa* tämä osoite oman git-varastosi osoitteella)",
        "",
        "Pelin nimi: (Nimi)",
        "",
        "Pelialusta: Windows/macOS/Linux (Valitse alusta)",
      ].map((line) => ui.esc(line));
      const dots = '<span class="jw-dots" style="position:absolute;left:10px"><i style="background:#ff5f57"></i>'
        + '<i style="background:#febc2e"></i><i style="background:#28c840"></i></span>';

      return {
        /* Tuplaklikkaus (1), valintaikkuna (2), Muistio (3), OK (4),
         * valintaikkuna pois ja Muistio auki (5). */
        "avaa-md-windows": () => ui.explorer({
          title: "suunnitelma",
          path: "olli › ohj1 › harjoitustyo › suunnitelma",
          rows: [
            ["esimerkkikuva.png", "PNG-kuva", "10 kt"],
            ["hahmotelma.png", "PNG-kuva", "403 kt"],
            ["README.md", "MD-tiedosto", "1 kt"],
            ["suunnitelma.md", "MD-tiedosto", "2 kt", 'data-click data-on="jw-new" data-order="1"'],
          ],
        }) + `
          <div class="jw-dialog" style="top:80px" data-show data-order="2" data-hide="5">
            <div class="jw-dialog-body">
              <h5>Miten haluat avata tämän .md-tiedoston?</h5>
              <div class="jw-label" style="margin:12px 0 4px;color:#555">Ehdotetut sovellukset</div>
              <div style="display:flex;align-items:center;gap:10px;padding:8px;border-radius:4px" data-click data-on="jw-new" data-order="3">
                <span style="width:24px;height:24px;border-radius:5px;background:linear-gradient(#5eb4ff,#1a73d9)"></span>Muistio</div>
              <div style="display:flex;align-items:center;gap:10px;padding:8px;color:#555">
                <span style="width:24px;height:24px;border-radius:5px;background:#d6d6d6"></span>Etsi sovellus Microsoft Storesta</div>
              <div class="jw-check jw-on" style="margin:12px 0"><i></i><div>Käytä aina tätä sovellusta .md-tiedostojen avaamiseen</div></div>
              <div style="text-align:right"><span class="jw-btn jw-btn--primary" data-click data-order="4">OK</span></div>
            </div></div>
          <div data-show data-order="5">${ui.notepad({ title: "suunnitelma.md - Muistio", tab: "suunnitelma.md", lines: plan })}</div>`,

        /* Tuplaklikkaus (1), TextEdit auki (2), Muokkaa (3), valikko (4),
         * Korvaukset (5), alivalikko (6), Älykkäät lainausmerkit pois (7),
         * valikot kiinni (8). */
        "avaa-md-macos": () => `
          <div style="position:absolute;inset:0;background:linear-gradient(160deg,#4b2f86,#b9528c 55%,#f39a6b)"></div>
          <div class="jw-win" style="top:44px;left:36px;width:470px;height:290px">
            <div class="jw-titlebar" style="justify-content:center;background:#ececec">${dots}<span class="jw-title">suunnitelma</span></div>
            <div style="display:grid;flex:1;grid-template-columns:130px 1fr;min-height:0">
              <div class="jw-ex-side" style="background:#f2f2f4"><b style="color:#888;font-size:11px">Suosikit</b>
                <span>Viimeaikaiset</span><span>Ohjelmat</span><span>Työpöytä</span><span>Dokumentit</span><span>Lataukset</span></div>
              <div class="jw-ex-list">
                <div><span>Nimi</span><span>Muokattu</span><span>Koko</span></div>
                <div><span><i class="jw-icon jw-icon--img"></i>esimerkkikuva.png</span><span>Tänään</span><span>10 kt</span></div>
                <div><span><i class="jw-icon jw-icon--img"></i>hahmotelma.png</span><span>Tänään</span><span>403 kt</span></div>
                <div><span><i class="jw-icon"></i>README.md</span><span>Tänään</span><span>1 kt</span></div>
                <div data-click data-on="jw-new" data-order="1"><span><i class="jw-icon"></i>suunnitelma.md</span><span>Tänään</span><span>2 kt</span></div>
              </div></div></div>
          <div class="jw-win" style="top:64px;left:220px;width:560px;height:410px" data-show data-order="2">
            <div class="jw-titlebar" style="justify-content:center;background:#ececec">${dots}<span class="jw-title">suunnitelma.md</span></div>
            <div class="jw-np-text">${plan.map((line) => `<div>${line || " "}</div>`).join("")}</div>
          </div>
          <div style="position:absolute;top:0;right:0;left:0;display:flex;align-items:center;gap:16px;height:24px;padding:0 14px;background:rgb(255 255 255 / 55%);color:#111;font-size:12px">
            <b>TextEdit</b><span>Arkisto</span><span style="padding:1px 6px;border-radius:4px" data-click data-order="3">Muokkaa</span>
            <span>Muoto</span><span>Näytä</span><span>Ikkuna</span><span>Ohjeet</span>
          </div>
          <div class="jw-menu" style="top:24px;left:136px;width:230px" data-show data-order="4" data-hide="8">
            <div>Kumoa</div><div>Tee uudelleen</div><hr>
            <div>Leikkaa</div><div>Kopioi</div><div>Sijoita</div><div>Valitse kaikki</div><hr>
            <div>Etsi<span class="jw-sub">›</span></div>
            <div>Oikeinkirjoitus ja kielioppi<span class="jw-sub">›</span></div>
            <div data-click data-on="jw-hover" data-order="5">Korvaukset<span class="jw-sub">›</span></div>
            <div>Puhe<span class="jw-sub">›</span></div>
          </div>
          <div class="jw-menu" style="top:226px;left:362px;width:250px" data-show data-order="6" data-hide="8">
            <div>Näytä korvaukset</div><hr>
            <div><span class="jw-mark">✓</span>Älykäs kopiointi ja sijoitus</div>
            <div data-click data-on="jw-unchecked" data-order="7"><span class="jw-mark">✓</span>Älykkäät lainausmerkit</div>
            <div><span class="jw-mark">✓</span>Älykkäät viivat</div>
            <div><span class="jw-mark">✓</span>Älykkäät linkit</div>
            <div><span class="jw-mark">✓</span>Tekstin korvaus</div>
          </div>`,
      };
    })(),

    suunnitelma: () => ui.notepad({
      title: "suunnitelma.md - Muistio",
      tab: "suunnitelma.md",
      lines: [
        "# Harjoitustyön suunnitelma",
        "",
        "## Tietoja",
        "",
        'Tekijä: <span data-type>Olli Opiskelija</span>',
        "",
        'Työ git-varaston osoite: <span data-type>&lt;https://gitlab.jyu.fi/kayttajatunnus/ohj1ht&gt;</span>',
        "",
        'Pelin nimi: <span data-type>Pertin seikkailut</span>',
        "",
        'Pelialusta: <span data-type>Windows</span>',
        "",
        'Pelaajien lukumäärä: <span data-type>1</span>',
        "",
        "## Pelin tarina",
        "",
        "Pertti on joutunut outoon maailmaan, jossa hänen täytyy",
      ],
    }),

    kuvalinkki: () => ui.notepad({
      title: "suunnitelma.md - Muistio",
      tab: "suunnitelma.md",
      status: ["Rivi 28, sarake 51", "100 %", "Windows (CRLF)", "UTF-8"],
      lines: [
        "## Pelin idea ja tavoitteet",
        "",
        "Kerää kaikki tähdet ennen kuin aika loppuu.",
        "",
        "## Hahmotelma pelistä",
        "",
        '<span data-type data-ring>![Hahmotelma pelistä](hahmotelma.png "Hahmotelma")</span>',
        '<span class="jw-np-note" data-show>  ^                   ^               ^</span>',
        '<span class="jw-np-note" data-show>  kuvaileva teksti    tiedoston nimi  otsikko</span>',
        "",
        "## Toteutuksen suunnitelma",
        "",
        "Helmikuu",
        "",
        "- Pertti liikkuu nuolinäppäimillä",
      ],
    }),

    "add-status": () => ui.gitBash({ session, from: 6, to: 8 }),

    commit: () => ui.gitBash({ session, from: 8, to: 9 }),

    /* Oma kuvake (1), valikko (2), Preferences (3). */
    "token-asetukset": () => ui.gitlab({
      title: "Olli Opiskelija / ohj1ht · GitLab",
      url: "https://gitlab.jyu.fi/kayttajatunnus/ohj1ht",
      crumb: "Olli Opiskelija / ohj1ht",
      body: '<span class="jw-gl-avatar" style="position:absolute;top:8px;right:18px;width:28px;height:28px;border-radius:50%" data-click data-order="1">O</span>'
        + projectTitle()
        + ui.files(TEMPLATE_FILES)
        + `<div class="jw-popover" style="top:42px;right:18px;width:220px;padding:6px" data-show data-order="2">
            <div style="padding:6px 8px;border-bottom:1px solid #ececef"><b>Olli Opiskelija</b><div style="color:#737278">@kayttajatunnus</div></div>
            <div style="padding:6px 8px">Set status</div>
            <div style="padding:6px 8px">Edit profile</div>
            <div style="padding:6px 8px;border-radius:4px" data-click data-on="jw-new" data-order="3" data-ring>Preferences</div>
            <div style="padding:6px 8px;border-top:1px solid #ececef">Sign out</div>
          </div>`,
    }),

    /* Access (1), alavalikko auki (2), Personal access tokens (3), sivu
     * vaihtuu (4), Generate token (5), valikko (6), Legacy token (7). */
    "token-uusi": () => tokenPage(
      `<div class="jw-gl-title" data-hide="4"><h4>Preferences</h4></div>
      <div data-show data-order="4">
        <div class="jw-gl-title"><h4>Personal access tokens</h4><span class="jw-btn jw-btn--primary" data-click data-order="5">Generate token ▾</span></div>
        <div class="jw-gl-files">
          <div><span>Token name</span><span>Scopes</span><span>Expires</span></div>
          <div style="display:block;color:#737278">This user has no active personal access tokens.</div>
        </div>
        <div class="jw-popover" style="top:76px;right:22px;width:220px;padding:6px" data-show data-order="6">
          <div style="padding:6px 8px">Fine-grained token</div>
          <div style="padding:6px 8px;border-radius:4px" data-click data-on="jw-new" data-order="7" data-ring>Legacy token</div>
        </div>
      </div>`,
      {
        access: 'data-click data-order="1"',
        submenu: 'data-show data-order="2"',
        pat: 'data-click data-on="jw-sel" data-order="3"',
        crumb: "User settings",
      }),

    /* Generate legacy token -lomake (gitlab.jyu.fi 2026-09). Lomake on
     * ikkunaa pidempi: nimi (1), vanhenemispäivä (2; oletus on kuukausi),
     * vieritys oikeuksiin (3), read_repository (4), write_repository (5),
     * vieritys loppuun (6), Generate token (7). Vieritys kahdella
     * sisäkkäisellä data-scrollilla, koska kumpikin siirtää kerran. */
    "token-luonti": () => {
      const scopes = [
        ["read_user", "Grants read-only access to your profile through the /user API endpoint, which includes username, public email, and full name. Also grants access to read-only API endpoints under /users."],
        ["read_repository", "Grants read-only access to repositories on private projects using Git-over-HTTP or the Repository Files API.", 'data-click data-on="jw-on" data-order="4"'],
        ["read_virtual_registry", "Grants read-only access to container images through the dependency proxy in private projects."],
        ["read_api", "Grants read access to the API, including all groups and projects, the container registry, and the package registry."],
        ["self_rotate", "Grants permission for token to rotate itself."],
        ["write_repository", "Grants read-write access to repositories on private projects using Git-over-HTTP (not using the API).", 'data-click data-on="jw-on" data-order="5"'],
        ["write_virtual_registry", "Grants read, write, and delete access to container images through the dependency proxy in private projects."],
        ["api", "Grants complete read/write access to the API, including all groups and projects, the container registry, the dependency proxy, and the package registry."],
        ["ai_features", "Grants access to GitLab Duo related API endpoints."],
        ["create_runner", "Grants create access to the runners."],
        ["manage_runner", "Grants access to manage the runners."],
        ["k8s_proxy", "Grants permission to perform Kubernetes API calls using the agent for Kubernetes."],
      ];
      /* Murupolku vierittyy sivun mukana, joten se on vieritettävän
       * sisällön alussa eikä tokenPagen kiinteänä rivinä. */
      return tokenPage(`<div data-scroll="215" data-order="3"><div data-scroll="280" data-order="6">
        <div class="jw-gl-crumb">User settings / Access / Personal access tokens</div>
        <div class="jw-gl-title"><h4>Generate legacy token</h4></div>
        <p style="margin:-4px 0 10px;color:#555;font-size:12px">Legacy personal access tokens are scoped to all groups and projects with broad permissions to resources.</p>
        <div class="jw-field" style="width:60%"><label>Token name</label><div class="jw-input" data-type data-order="1">ohj1-kotikone</div></div>
        <div class="jw-field"><label>Description <span style="font-weight:400">(optional)</span></label><div class="jw-input" style="height:44px"></div></div>
        <div class="jw-field" style="width:170px"><label>Expiration date</label>
          <div class="jw-input" style="display:flex" data-click data-order="2"><span data-hide="2">2026-10-13</span><span data-type data-order="2">2027-09-13</span><span style="margin-left:auto;color:#737278">▦</span></div></div>
        <div class="jw-label" style="margin-bottom:0">Select scopes</div>
        <div style="margin-bottom:6px;color:#555;font-size:12px">Scopes set the permission levels granted to the token. <span style="color:#1f75cb">Learn more.</span></div>
        <div class="jw-scopes">${scopes.map(([name, text, extra = ""]) =>
          `<div class="jw-check" ${extra}><i></i><div>${name}<small>${text}</small></div></div>`).join("")}</div>
        <div style="margin-top:10px"><span class="jw-btn jw-btn--primary" data-click data-order="7">Generate token</span> <span class="jw-btn">Cancel</span></div>
      </div></div>`, { crumb: "" });
    },

    "token-kopioi": () => tokenPage(
      `<div class="jw-alert-ok">Your new personal access token has been created.</div>
      <div class="jw-gl-title"><h4>Personal access tokens</h4><span class="jw-btn jw-btn--primary">Generate token ▾</span></div>
      <div style="border:1px solid #dcdcde;border-radius:6px;padding:12px 14px;margin-bottom:12px">
        <div class="jw-label">Your new personal access token</div>
        <div class="jw-row"><div class="jw-input jw-input--mono" style="flex:1" data-ring>glpat-••••••••••••••••••••</div><span class="jw-btn">◉</span><span class="jw-btn" data-click>⧉</span></div>
        <div class="jw-hint">Make sure you save it - you won't be able to access it again.</div>
      </div>
      <div class="jw-gl-files">
        <div><span>Token name</span><span>Scopes</span><span>Expires</span></div>
        <div><span>ohj1-kotikone</span><span>read_repository, write_repository</span><span>in 1 year</span></div>
      </div>`),

    /* Kirjautumisikkuna tulee komennon ja tulosteen väliin: komento 0,
     * ikkuna 0.1, käyttäjätunnus 0.2, oikea klikkaus tunnuskenttään 0.3,
     * valikko 0.4, Paste 0.5, valikko pois 0.55, pisteet kerralla 0.6,
     * Sign in 0.7, ikkuna pois 0.8, tuloste 0.9 (gitBashin order).
     * Valikko on ikkunan vieressä eikä sen sisällä, koska ikkuna rajaa
     * sisältönsä (overflow: hidden); kentän keskikohta on (400, 330). */
    push: () => ui.gitBash({ session, from: 9, to: 10, order: 0 })
      + `<div class="jw-dialog" data-show data-order="0.1" data-hide="0.8">
        <div class="jw-titlebar"><span class="jw-title">Git Credential Manager</span></div>
        <div class="jw-dialog-body">
          <h5>GitLab</h5>
          <div style="color:#555;font-size:12px">Sign in to https://gitlab.jyu.fi/</div>
          <div class="jw-segments"><span class="jw-sel">Token</span><span>Password</span></div>
          <div class="jw-field"><label>Username</label><div class="jw-input" data-type data-order="0.2">kayttajatunnus</div></div>
          <div class="jw-field"><label>Personal access token</label><div class="jw-input" data-click data-order="0.3"><span data-show data-order="0.6">••••••••••••••••••••••••••</span></div></div>
          <div class="jw-btn jw-btn--primary" style="display:flex;justify-content:center;padding:6px" data-click data-order="0.7">Sign in</div>
        </div></div>
      <div class="jw-menu" style="top:332px;left:402px;width:140px" data-show data-order="0.4" data-hide="0.55">
        <div style="color:#a0a0a6">Cut</div>
        <div style="color:#a0a0a6">Copy</div>
        <div data-click data-on="jw-hover" data-order="0.5">Paste</div>
      </div>`,

    "gitlab-tulos": () => ui.gitlab({
      title: "suunnitelma · Olli Opiskelija / ohj1ht · GitLab",
      url: "https://gitlab.jyu.fi/kayttajatunnus/ohj1ht/-/tree/main/suunnitelma",
      crumb: "Olli Opiskelija / ohj1ht / suunnitelma",
      body: `<div class="jw-gl-files" style="margin-bottom:12px">
          <div style="display:flex;justify-content:space-between;background:#fff;font-weight:400" data-ring>
            <span><b>Suunnitelma ja hahmotelmakuva</b><br><span style="color:#737278">Olli Opiskelija authored just now</span></span>
            <span style="font-family:var(--jw-mono);color:#737278">ef666e3</span></div></div>`
        + `<div data-show>${ui.files([
          ["README.md", "Ensimmäinen commit.", "4 years ago"],
          ["esimerkkikuva.png", "Ensimmäinen commit.", "4 years ago"],
          ["hahmotelma.png", "Suunnitelma ja hahmotelmakuva", "just now"],
          ["suunnitelma.md", "Suunnitelma ja hahmotelmakuva", "just now"],
        ])}</div>`,
    }),

    /* New Solution (Rider, käyttäjän kuvakaappaus 2026-09): Fysiikkapeli (1),
     * solutionin nimi (2) ja sen perään sama projektin nimi, kansio (3),
     * solution ja projekti samaan kansioon (4), Create (5). Mallilista on
     * vieritetty loppuun kuten kuvassa, joten sen alku jää piiloon. */
    "rider-uusi": () => {
      const section = (name) =>
        `<small style="margin:10px 6px 2px;font-size:11px;letter-spacing:normal;text-transform:none">${name}</small>`;
      const row = (label, value) => `<div class="jw-form-row"><span>${label}</span>${value}</div>`;
      return ui.window({
        title: "New Solution",
        look: "dark",
        body: `<div style="display:flex;flex:1;flex-direction:column;min-height:0">
          <div class="jw-ide">
            <div class="jw-ide-list" style="gap:0;padding:0;overflow:hidden">
              <div class="jw-input" style="margin:8px;color:#8c8f96">⌕ Search</div>
              <div style="display:flex;flex:1;flex-direction:column;justify-content:flex-end;gap:1px;min-height:0;padding:0 8px 8px;overflow:hidden">
                <span>AI Extensions</span><span>Services</span><span>Unit Test</span>
                ${section("Game Development")}<span>CMake</span><span>Godot</span>
                ${section("Other")}<span>Native C++</span><span>Aspire</span><span>Azure Functions</span>
                <span>Database</span><span>MAUI</span><span>Roslyn</span>
                ${section("Custom Templates")}<span>Android Fysiikkapeli</span><span>ConsoleMain</span>
                <span data-click data-on="jw-sel" data-order="1">Fysiikkapeli</span><span>Peruspeli</span><span>Tasohyppelypeli</span>
                <span style="color:#548af7">Manage Templates...</span>
              </div>
            </div>
            <div class="jw-form" style="gap:10px">
              ${row("Solution name:", `<div style="display:flex;align-items:center;gap:14px">
                <div class="jw-input" style="width:230px" data-type data-order="2">PertinSeikkailut</div>
                <span style="color:#8c8f96">format <span style="color:#548af7">.sln ▾</span></span></div>`)}
              ${row("Project name:", '<div class="jw-input" style="width:230px"><span data-show data-order="2">PertinSeikkailut</span></div>')}
              ${row("Solution directory:", `<div class="jw-input" style="display:flex">
                <span data-type data-order="3">C:\\Users\\olli\\ohj1\\harjoitustyo</span><span style="margin-left:auto;color:#8c8f96">▭</span></div>`)}
              <div class="jw-hint" style="margin:-6px 0 0 170px">The project will be created in ...\\PertinSeikkailut</div>
              <div style="margin-left:170px">
                <div class="jw-check" style="width:fit-content" data-click data-on="jw-on" data-order="4" data-ring><i></i><div>Put solution and project in the same directory</div></div>
                <div class="jw-check"><i></i><div>Create Git repository</div></div>
              </div>
              ${row("Target framework:", '<div class="jw-input" style="display:flex;width:100px">net10.0<span style="margin-left:auto">▾</span></div>')}
              ${row("Language:", "<span>C#</span>")}
              ${row("Type:", "<span>Fysiikkapeli</span>")}
              <div style="display:flex;align-items:center;gap:8px;margin-top:6px;font-size:12px">› Template description<span style="flex:1;border-top:1px solid #3c3f44"></span></div>
            </div>
          </div>
          <div style="display:flex;justify-content:flex-end;gap:8px;padding:10px 16px;border-top:1px solid #3c3f44">
            <span class="jw-btn jw-btn--primary" data-click data-order="5">Create</span><span class="jw-btn">Cancel</span></div>
        </div>`,
      });
    },

    /* Koodisarake minmax(0, 1fr): muuten pitkät koodirivit leventävät
     * saraketta, ja ajonappi valuu ikkunan oikean reunan yli. */
    "rider-aja": () => ui.window({
      title: "PertinSeikkailut – PertinSeikkailut.cs",
      look: "dark",
      body: `<div class="jw-ide" style="grid-template-columns:230px minmax(0,1fr)">
        <div class="jw-ide-list"><small>Solution</small><span>▾ PertinSeikkailut · 1 project</span>
          <span style="padding-left:20px">▾ PertinSeikkailut</span><span style="padding-left:36px">▸ Content</span>
          <span style="padding-left:36px">Ohjelma.cs</span><span style="padding-left:36px" class="jw-sel">PertinSeikkailut.cs</span></div>
        <div style="display:flex;flex-direction:column;min-height:0">
          <div style="display:flex;align-items:center;justify-content:flex-end;gap:8px;padding:5px 12px;background:#26282b;font-size:12px">
            <span>PertinSeikkailut ▾</span>
            <span class="jw-btn" style="color:#5fb865;font-size:14px" data-click data-ring>▶</span></div>
          <div class="jw-code">${codeRows([
            '<span class="jw-c-com">/// @author olli</span>',
            '<span class="jw-c-com">/// @version 13.09.2026</span>',
            '<span class="jw-c-com">/// &lt;summary&gt;</span>',
            '<span class="jw-c-com">/// </span>',
            '<span class="jw-c-com">/// &lt;/summary&gt;</span>',
            '<span class="jw-c-key">public class</span> PertinSeikkailut : PhysicsGame',
            "{",
            '    <span class="jw-c-key">public override void</span> Begin()',
            "    {",
            '        <span class="jw-c-com">// Kirjoita ohjelmakoodisi tähän</span>',
            "",
            '        PhoneBackButton.Listen(ConfirmExit, <span class="jw-c-str">"Lopeta peli"</span>);',
            '        Keyboard.Listen(Key.Escape, ButtonState.Pressed, ConfirmExit, <span class="jw-c-str">"Lopeta peli"</span>);',
            "    }",
            "}",
          ], 8)}</div></div></div>
        <div class="jw-game" data-show><div class="jw-titlebar">PertinSeikkailut</div><div></div></div>`,
    }),

    check: () => ui.gitBash({ session, from: 10, to: 11 }),

    "koodi-status": () => ui.gitBash({ session, from: 11, to: 13 }),

    "koodi-push": () => ui.gitBash({ session, from: 13, to: 15 }),

    tim: () => ui.browser({
      title: "Oma eteneminen – TIM",
      url: "https://tim.jyu.fi/view/kurssit/tie/itkp102/eteneminen",
      body: `<div class="jw-tim">
        <div class="jw-tim-nav"><span>Koti</span><span>Luennot</span><span>Demot</span><span>Harjoitustyö</span><b>Oma eteneminen</b></div>
        <h4>Oma eteneminen</h4>
        <div class="jw-label" style="font-size:14px;margin:6px 0">Harjoitustyö</div>
        <table class="jw-tim-table">
          <tr><td>Git-etävaraston URL-osoite</td><td><div class="jw-input jw-input--mono" data-type data-ring>${REMOTE}</div></td></tr>
          <tr><td>Vaihe 1: suunnitelma</td><td style="color:#777">Ei vielä hyväksytty</td></tr>
          <tr><td>Vaihe 2: työ 50 % valmis</td><td style="color:#777">–</td></tr>
        </table>
        <p style="margin-top:12px"><span class="jw-btn jw-btn--primary" data-click>Tallenna</span></p>
      </div>`,
    }),
  };
});
