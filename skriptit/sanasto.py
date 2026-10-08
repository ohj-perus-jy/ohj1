"""Kokoaa src/sanasto.md osien index.md-tiedostojen Käsitteet-taulukoista.

Ajo: python3 skriptit/sanasto.py. Rivi kelpaa, kun se on muotoa
| [käsite](./aliosa.md) | *englanniksi* | selitys |. Sama käsite kahdessa
osassa ilmoitetaan ja vain ensimmäinen otetaan. Skripti järjestää myös
osien taulukot suomen aakkosjärjestykseen.

--check ei kirjoita mitään vaan kaatuu, jos jokin tiedosto ei vastaa
skriptin tulosta (pages.yml ajaa tämän ennen julkaisua).
"""
import re, pathlib, sys
src = pathlib.Path(__file__).resolve().parent.parent / "src"
check = "--check" in sys.argv[1:]
stale = []
def save(path, text):
    """Kirjoittaa muuttuneen tiedoston; --check vain kirjaa sen."""
    if path.exists() and path.read_text() == text:
        return
    if check:
        stale.append(str(path.relative_to(src)))
    else:
        path.write_text(text)
        print("päivitetty:", path.relative_to(src))
row = re.compile(r"^\| \[(?P<term>[^\]]+)\]\(\./(?P<href>[^)]+)\) \| (?P<en>[^|]+) \| (?P<desc>.+) \|$")
order = "abcdefghijklmnopqrstuvwxyzåäö"
def key(r):
    t = r[0].replace("`", "").replace(".", "").lower()
    return [order.index(c) if c in order else -1 for c in t if c.isalnum()]
rows = []
for n in range(1, 11):
    index = src / f"osa{n}/index.md"
    if not index.exists():
        continue
    text = index.read_text()
    lines = text.splitlines()
    at = [i for i, line in enumerate(lines) if row.match(line)]
    for i, line in zip(at, sorted((lines[i] for i in at), key=lambda l: key([row.match(l)["term"]]))):
        lines[i] = line
    save(index, "\n".join(lines) + "\n")
    for i in at:
        m = row.match(lines[i])
        rows.append((m["term"], m["en"].strip(), m["desc"].strip(), f"./osa{n}/{m['href']}", n))
rows.sort(key=key)
seen = {}
out = ["# Sanasto", "",
       "Kirjan käsitteet aakkosjärjestyksessä. Osa-sarakkeen linkki vie",
       "aliosaan, jossa käsite esitellään. Sama käsitteiden luettelo on",
       "kunkin osan etusivulla.", "",
       "| Käsite | Englanniksi | Selitys | Osa |", "| --- | --- | --- | --- |"]
for term, en, desc, href, n in rows:
    if term in seen:
        print("tupla:", term, seen[term], n)
        continue
    seen[term] = n
    out.append(f"| {term} | {en} | {desc} | [{n}]({href}) |")
save(src / "sanasto.md", "\n".join(out) + "\n")
print(len(seen), "käsitettä")
if stale:
    sys.exit(f"vanhentunut: {', '.join(stale)}; aja python3 skriptit/sanasto.py")
