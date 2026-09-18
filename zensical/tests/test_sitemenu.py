"""Sivustovalikko kurssin nimen vieressä koekirjalla, selaimessa.

Lista on mallissa (mkdocs.yml: extra.sites), mutta avaaminen, sulkeminen ja
näppäimistö syntyvät vasta selaimessa.
"""

import pytest

JYPELI = "https://ohj-perus-jy.github.io/jypelidocs/"


@pytest.fixture(scope="module")
def base_url(book, serve):
    return serve(book.site)


def open_page(browser, url, **options):
    """Avaa sivun ja kerää skriptivirheet. -> (sivu, virheet)."""
    page = browser.new_page(**options)
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    page.goto(url, wait_until="load")
    return page, errors


def items(page) -> list[dict]:
    return page.evaluate(
        """[...document.querySelectorAll('.jyu-sites__item')].map(a => ({
            name: a.textContent.trim(),
            href: a.href,
            current: a.hasAttribute('aria-current'),
        }))""")


def test_the_menu_lists_this_site_and_jypeli(browser, base_url):
    """Oma sivusto on merkitty ja vie omalle etusivulle (ei tuotanto-osoitteeseen,
    jotta /dev/ ja localhost pysyvät itsessään); Jypeli vie ulos. Alasivulla
    oman sivuston linkki on sama kuin kurssin nimen."""
    page, errors = open_page(browser, f"{base_url}/osa1/")
    assert page.is_hidden(".jyu-sites__list")
    assert page.get_attribute(".jyu-sites__button", "aria-expanded") == "false"
    home = page.evaluate("document.querySelector('.jyu-sites .md-ellipsis a').href")
    assert home == f"{base_url}/"
    assert items(page) == [
        {"name": "Ohjelmointi 1", "href": home, "current": True},
        {"name": "Jypeli-ohjeet", "href": JYPELI, "current": False},
    ]
    assert errors == []


def test_the_button_opens_and_an_outside_click_closes(browser, base_url):
    page, errors = open_page(browser, base_url)
    page.click(".jyu-sites__button")
    assert page.is_visible(".jyu-sites__list")
    assert page.get_attribute(".jyu-sites__button", "aria-expanded") == "true"
    # Lista ei saa leikkautua nimen ellipsikseen: kohta on oikeasti osuttavissa.
    page.hover(".jyu-sites__item >> nth=1")
    assert page.evaluate(
        "document.querySelector('.jyu-sites__item:hover') !== null")

    page.click(".md-content")
    assert page.is_hidden(".jyu-sites__list")
    assert page.get_attribute(".jyu-sites__button", "aria-expanded") == "false"

    page.click(".jyu-sites__button")
    page.click(".jyu-sites__button")
    assert page.is_hidden(".jyu-sites__list")
    assert errors == []


def test_the_menu_works_from_the_keyboard(browser, base_url):
    """Nuoli alas avaa ja kohdistaa ensimmäiseen, nuolet kiertävät, Esc sulkee
    ja palauttaa kohdistuksen; kohdistuksen poistuminen sulkee."""
    page, errors = open_page(browser, base_url)
    focused = "document.activeElement.textContent.trim()"
    page.focus(".jyu-sites__button")
    page.keyboard.press("ArrowDown")
    assert page.is_visible(".jyu-sites__list")
    assert page.evaluate(focused) == "Ohjelmointi 1"
    page.keyboard.press("ArrowDown")
    assert page.evaluate(focused) == "Jypeli-ohjeet"
    page.keyboard.press("ArrowDown")
    assert page.evaluate(focused) == "Ohjelmointi 1"
    page.keyboard.press("Escape")
    assert page.is_hidden(".jyu-sites__list")
    assert page.evaluate("document.activeElement.id") == "jyu-sites-button"

    page.keyboard.press("Enter")
    assert page.is_visible(".jyu-sites__list")
    page.keyboard.press("Tab")
    page.keyboard.press("Tab")
    page.keyboard.press("Tab")
    assert page.is_hidden(".jyu-sites__list")
    assert errors == []


def test_choosing_jypeli_leaves_the_site(browser, base_url):
    """Kohta on tavallinen linkki: sama välilehti, ei skriptiä välissä."""
    page, errors = open_page(browser, base_url)
    page.route(JYPELI + "**", lambda route: route.fulfill(
        status=200, content_type="text/html", body="<title>Jypeli</title>"))
    page.click(".jyu-sites__button")
    page.click(".jyu-sites__item >> nth=1")
    page.wait_for_url(JYPELI)
    assert page.title() == "Jypeli"
    assert errors == []


def test_the_menu_fits_a_phone(browser, base_url):
    """Painike mahtuu nimen viereen eikä lista tuo vaakavieritystä."""
    page, errors = open_page(
        browser, base_url, viewport={"width": 390, "height": 800})
    page.click(".jyu-sites__button")
    box = page.evaluate(
        """(() => {
            const r = document.querySelector('.jyu-sites__list').getBoundingClientRect();
            return {left: r.left, right: r.right};
        })()""")
    assert 0 <= box["left"] and box["right"] <= 390
    assert not page.evaluate("document.documentElement.scrollWidth > innerWidth")
    assert errors == []
