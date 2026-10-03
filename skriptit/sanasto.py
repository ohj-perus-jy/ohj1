"""Kokoaa src/sanasto.md osien index.md-tiedostojen Käsitteet-taulukoista.

Ajo: python3 skriptit/sanasto.py. Rivi kelpaa, kun se on muotoa
| [käsite](./aliosa.md) | *englanniksi* | selitys |. Sama käsite kahdessa
osassa ilmoitetaan ja vain ensimmäinen otetaan. Skripti järjestää myös
osien taulukot suomen aakkosjärjestykseen.
"""
import re, pathlib
src = pathlib.Path(__file__).resolve().parent.parent / "src"
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
    if "\n".join(lines) + "\n" != text:
        index.write_text("\n".join(lines) + "\n")
        print("järjestetty:", index.relative_to(src))
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
(src / "sanasto.md").write_text("\n".join(out) + "\n")
print(len(seen), "käsitettä")
