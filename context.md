# MyCER — Project Context (Redizajn: /obuka-za-dispecere/)

> **Obim posla:** redizajn JEDNE stranice — `https://my-cer.com/obuka-za-dispecere/`.
> **Copy, raspored sekcija i sadržaj ostaju IDENTIČNI.** Menja se samo vizuelni jezik
> (tipografija, spacing, komponente, boje u okviru postojeće palete, animacije).
> Copy se eventualno dira tek NAKON što je redizajn gotov.

---

## Business
- Name: **MyCER** (Google Business: *MyCER consulting* / "My CER consulting agency" u logotipu)
- Trade / industry: Online edukacija — kurs za dispečera kamiona u SAD (US truck dispatching)
- Location: **Šabac, Srbija** — Ulica Vlade Jovanovića 14, 15000 Šabac (zvanična adresa sa LinkedIn-a; Google Business Profile aktivan, `cid=8270211665291418348`)
- Service area: Srbija + region (Balkan); polaznici rade remote za US firme
- Phone (RS): +381 61 2020 087
- Phone (US): +1 307 312 0012
- Email: support@my-cer.com
- Radno vreme podrške: 09:00–15:00 CEST (GMT+1)
- Website: https://my-cer.com — target stranica: `/obuka-za-dispecere/`
- Konsultacije (Calendly): https://calendly.com/mycer-consulting/mycer-besplatne-konsultacije
- Osnovano: **2013.** (13 godina u poslu) · 2–10 zaposlenih · Privately Held
- Predavač / autor: **Mihailo Djura Popov** — 10 god. korporativnog iskustva (srednji i top menadžment), učesnik u osnivanju 3 transportne firme u SAD

## Services (proizvodi na ovoj stranici)
- **Najkompletniji Online Kurs Za Dispečera Kamiona u USA** — glavni proizvod (€495 redovno)
  - 12 poglavlja, 70 video lekcija, 10 testova, 1100+ min videa
  - PDF / XLS / audio download, prvo poglavlje besplatno, besplatan test kompatibilnosti
  - Sertifikat (min. 85% na testovima), 6 meseci pristupa, 30 dana povrat novca
  - Mogućnost kupovine iz 5 delova (bez popusta/bonusa u tom slučaju)
- **Add-on / Bonus kurs: Veštine Pregovaranja** — `/vestine-pregovaranja/` (vrednost €249)
- **Add-on / Bonus kurs: 100 Fraza Na Engleskom Jeziku** — `/sto-fraza/` (vrednost €249)
- **eBook "Kako Postati Nezavisni Dispečer"** — 20 poglavlja, 100 strana (€99)
- **Primer rada dispečera uživo** — 5 sati video materijala (besplatno uz paket)
- **Mentor planovi 1/2/3** — `/kategorija-proizvoda/mentor-plan/` (vrednost €500)

## Brand — paleta i tipografija

### Boje (izvučene iz CSS-a + Firecrawl branding analize)
| Uloga | Hex | Napomena |
|---|---|---|
| **Primary / akcenat** | `#FFB606` | MyCER žuto-narandžasta. Dominantna — CTA dugmad, naslovi-akcenti, ikonice |
| Primary alt (hover/gradijent) | `#FBA919` | Tamnija varijanta iste žute |
| **Dark base** | `#1A2E3B` | Tamno plavo-siva, pozadine sekcija |
| Dark deep | `#0E1216` | Skoro crna, hero overlay / footer |
| Text / crna | `#212121` / `#000000` | |
| Muted / siva | `#B8B8B8` | Sekundarni tekst |
| Light surface | `#F4F4F4` / `#EBEBEB` | Svetle pozadine sekcija |
| Bela | `#FFFFFF` | |
| Link plava (legacy) | `#1863DC` / `#1F67E7` | Postojeći sistem; **preporuka: izbaciti u redizajnu**, konfliktuje sa žuto/crno identitetom |

**Efektivna paleta za redizajn:** žuta `#FFB606` + crna/tamna `#1A2E3B`/`#0E1216` + bela + siva.
Klasičan trucking/logistics high-contrast identitet.

### Tipografija
- Heading: **Montserrat** (postojeći) — H1 49px, H2 28px na desktopu
- Body: **Roboto** — 18px
- Border radius u sistemu: 5–6px (inputi), 0px (primarno dugme), 27px (sekundarno)

### Logo
- `images/logo/mycer-logo-light-bg.png` — CRNI logo za bele/svetle pozadine (3049×827, transparentan PNG)
- `images/logo/mycer-logo-dark-bg.png` — BELI logo za tamne pozadine (transparentan PNG)
- Logo mark: kvadrat podeljen na 4 polja sa "repom" govornog oblačića (speech bubble) + wordmark "My **CER** / consulting agency"
- Oba su **već PNG sa transparentnom pozadinom**, visoke rezolucije — ne treba konverzija.

---

## Raspored sekcija (redosled se NE menja)

1. **Header / nav** — logo levo; Početna · Kursevi (dropdown: Kurs za dispečera / Veštine pregovaranja / 100 Fraza) · Blog; WhatsApp + Viber + telefon `+381 61 2020 087`; ikonica naloga; korpa
2. **HERO** — tamna truck fotografija, overlay. Levo: `NAJKOMPLETNIJI ONLINE KURS ZA DISPEČERA KAMIONA U USA` (žuti akcenat na "KURS ZA DISPEČERA"). Podnaslov: `PRIJAVI SE ODMAH / i pogledaj prvo poglavlje besplatno` + disclaimer. Desno: registracioni panel "ZAPOČNI BESPLATNO" (Ime, Prezime, Telefon, Email adresa, Lozinka + dugme `REGISTRUJ SE`) + link "Već imaš nalog? Uloguj se"
3. **PROBLEM / AGITACIJA** — `ZA SAMO MESEC DANA NAUČI SVE O POSLU` → "Činjenica da se nalaziš na ovoj stranici..." → 3 bloka: ŽELIŠ VIŠE / VEROVATNO SI VEĆ ISTRAŽIVAO NEKE OPCIJE / REALNOST JE DA ŽELIŠ NEŠTO
4. **VIDEO** — `OTKRIJ PRILIKU KOJA TI OMOGUĆAVA KVALITETNU I STABILNU ZARADU` + `👇 POGLEDAJ VIDEO 👇` → Vimeo embed
5. **BENEFITI** — `ŽELIŠ LI ZARADU U VISINI IT ZAJEDNICE?` / `POGLEDAJ BENEFITE KOJE NAŠ KURS NUDI` → 8 kartica: Odlična zarada · Lako do posla (87%) · Deficitarno zanimanje · Sopstveni tempo · 6 meseci · od A do Š · Korporativno iskustvo · Radi odakle želiš
6. **INDUSTRIJA (brojači)** — 4 animirana countera: 1M+ vozača · 8M+ zaposlenih · $790mlrd promet · 40.000 mesečni deficit vozača
7. **O PREDAVAČU** — 3 pasusa o Mihailu Djuri Popovu + duotone portret
8. **ISKUSTVA POLAZNIKA** — `Iskustva polaznika obuke za dispečere My-Cer` → grid 3×2 sa 6 Vimeo video testimonijala → CTA `pogledaj i ostale` → `/iskustva-polaznika/`
9. **ŠTA DOBIJAŠ (enciklopedija)** — `Predstavljamo vam najveću enciklopediju dispečerskog znanja...` + mockup paketa + lista `NAJKOMPLETNIJI KURS` (11 stavki)
10. **BONUSI 01–06** — Veštine Pregovaranja · 100 Fraza · eBook · Primer rada uživo · Audio/PDF/XLS · Sertifikat
11. **ADD-ON PROMO** — `POGLEDAJ SADRŽAJ BONUS KURSEVA` → 2 klikabilne kartice (100 Fraza → `/sto-fraza/`, Veštine Pregovaranja → `/vestine-pregovaranja/`)
12. **KURIKULUM** — `ŠTA ĆEŠ NAUČITI` → akordeon, 10 poglavlja + 50 lekcija + testovi + FINAL TEST (pun spisak u `source-scrape-obuka-za-dispecere.md`)
13. **GOOGLE REVIEWS** — naslov `Šta Kažu Neki Od Ljudi BEZ PRETHODNOG DISPEČERSKOG ISKUSTVA...` → Google widget: MyCER consulting, **5.0 / 55 reviews**, "powered by Google" + karusel recenzija
14. **PONUDA + COUNTDOWN** — `Dolaziš u Pravom Trenutku... Specijalna Ponuda Je Upravo Otključana` → mockup paketa + value stack (€2238 → €495 → kod `USA20` = -20%) + countdown timer (Dana/Sati/Minuta)
15. **PHONE TESTIMONIALS** — marquee / karusel sa 4 mockup telefona (WhatsApp screenshotovi razgovora sa polaznicima), petlja 1-2-3-4-1-2-3-4
16. **POREĐENJE** — `JOŠ UVEK RAZMIŠLJAŠ?` → 2 kolone: prosečna plata na Balkanu €700 (6 minusa) vs. početna plata dispečera €1.000 (6 plusa)
17. **FAQ** — `NAJČEŠĆA PITANJA`, 7 pitanja (akordeon)
18. **PONOVLJENA PONUDA** — `Mapiraj Svoj Put Do Uspeha. Iskoristi Specijalnu Ponudu.` → isti value stack + countdown
19. **GARANCIJA** — badge + `Povrat Novca Za 30 dana!` + objašnjenje
20. **FINALNI CTA** — `ZAPOČNI BESPLATNO` forma (ista kao hero) + `DA LI SI SPREMAN DA ULOŽIŠ U SEBE ZA BOLJE SUTRA?` + dugme `ZAKAŽI BESPLATNE KONSULTACIJE` (Calendly)
21. **FOOTER** — PODRŠKA (email, 2 telefona, radno vreme) · KORISNIČKI SERVIS (4 pravna linka) · BLOG (Polaznici o nama / Novosti / Naš tim) · ZAPRATITE NAS (FB, IG, X, YouTube) · payment badges (Maestro, MC, DinaCard, Visa, Amex, Intesa, SecureCode, Visa Secure)

---

## Video assets — Vimeo

### Glavni video (sekcija "POGLEDAJ VIDEO")
| Naslov | Vimeo ID | Link | Embed |
|---|---|---|---|
| Zbog čega MyCER KURS ZA DISPEČERA kamiona u USA | `863725527` | https://vimeo.com/863725527 | `https://player.vimeo.com/video/863725527` |

### Testimonijali (sekcija "Iskustva polaznika") — redosled kao na sajtu
| # | Ime | Trajanje | Link (sa hash-om) | Embed |
|---|---|---|---|---|
| 1 | Majda | 0:42 | https://vimeo.com/700456815/c35dc68ea7 | `https://player.vimeo.com/video/700456815?h=c35dc68ea7` |
| 2 | Kristina Topalović | 0:31 | https://vimeo.com/674100289/499c10d63b | `https://player.vimeo.com/video/674100289?h=499c10d63b` |
| 3 | Ognjen Trejgut | 0:26 | https://vimeo.com/687054971/05774b8821 | `https://player.vimeo.com/video/687054971?h=05774b8821` |
| 4 | Natalia Colombia | 0:52 | https://vimeo.com/790888248/38027fe12b | `https://player.vimeo.com/video/790888248?h=38027fe12b` |
| 5 | Nemanja Suzić | 0:45 | https://vimeo.com/759215878/2897a5a82a | `https://player.vimeo.com/video/759215878?h=2897a5a82a` |
| 6 | Aleksandar Ristovski | 0:23 | https://vimeo.com/736500092/f2c321ce5a | `https://player.vimeo.com/video/736500092?h=f2c321ce5a` |

> Vimeo kanal: https://vimeo.com/user164736130 (MyCER)
> Videi 1–6 su **unlisted** — obavezno koristiti `?h=<hash>` u embed URL-u, inače neće da se učita.
> Preporuka za redizajn: lazy-load facade (statični thumbnail + play dugme → učitaj iframe na klik). Trenutno se svih 7 iframe-ova učitava odmah, što je glavni razlog sporog učitavanja.

## Google reviews
- Profil: **MyCER consulting** — **5.0 ★ / 55 recenzija**
- Place ID: `ChIJk20MZePKW0cR7Jr8LrGxxXI`
- CID: `8270211665291418348`
- Profil link: https://maps.google.com/?cid=8270211665291418348
- "Ostavi recenziju" link: https://search.google.com/local/writereview?placeid=ChIJk20MZePKW0cR7Jr8LrGxxXI
- 8 recenzija je izvučeno u `google-reviews.md` (pun tekst). ⚠️ **Jedna od njih (Stefani Skorić) je negativna/mešovita** — na sajtu se trenutno prikazuje PRVA u karuselu. Videti napomenu u `google-reviews.md`.

## Images (preuzeto)
```
images/
├── logo/
│   ├── mycer-logo-light-bg.png      crni logo (za bele pozadine) 3049×827 PNG transp.
│   └── mycer-logo-dark-bg.png       beli logo (za tamne pozadine) PNG transp.
├── addons/
│   ├── 100-fraza-na-engleskom.png   thumbnail add-ona → /sto-fraza/
│   └── vestine-pregovaranja.png     thumbnail add-ona → /vestine-pregovaranja/
├── testimonials-phone/
│   ├── phone-1.png  phone-2.png  phone-3.png  phone-4.png
│   └── (WhatsApp screenshot mockupi u okviru telefona, ~1191×2424, PNG transp.)
├── video-thumbs/                    Vimeo posteri, 1600px širine, JPG
│   ├── 00-glavni-video-zasto-mycer.jpg
│   ├── 01-majda.jpg                 04-natalia-colombia.jpg
│   ├── 02-kristina-topalovic.jpg    05-nemanja-suzic.jpg
│   └── 03-ognjen-trejgut.jpg        06-aleksandar-ristovski.jpg
├── brand/
│   ├── ponuda-paket-mockup.png      veliki mockup celog paketa (koristi se 3×)
│   ├── mihailo-duotone.jpg          duotone portret predavača
│   ├── garancija-30-dana.png        badge za garanciju
│   ├── og-obuka-za-dispecere.jpg    OG / social share slika
│   └── google-business-place.jpg    slika Google Business lokacije (mala, 10KB)
└── reference/
    └── branding.json                Firecrawl branding izveštaj (boje, fontovi, komponente)
```

**Nedostaje / user to provide:**
- Hero pozadinska fotografija u punoj rezoluciji (trenutno je CSS background, nije u uploads folderu)
- Payment badge ikonice (ms/mc/dina/visa/amex/intesa) — nisu preuzete, trivijalno je ponovo ih skinuti ili zameniti SVG-ovima
- Fotografije tima / predavača van duotone portreta

## Social Proof
- Google: **5.0 ★, 55 recenzija** (MyCER consulting)
- **87% polaznika danas radi ovaj posao** (ključna brojka, koristi se u hero-benefitima i u OG opisu)
- 6 video testimonijala polaznika + 4 WhatsApp screenshot testimonijala
- Sertifikat "prepoznat širom industrije"
- **13 godina u poslu (osnovano 2013)** — trenutno se NE koristi na sajtu, a jak je signal
- Instagram 3.493 pratilaca · LinkedIn 654 pratilaca
- Key differentiator (njihovim rečima): *"Najkompletniji online kurs za dispečera kamiona u USA"* / *"najveća enciklopedija dispečerskog znanja koju je moguće pronaći na internetu"*

## Target Audience
Ljudi na Balkanu (18–40) nezadovoljni trenutnim poslom/platom, koji traže remote posao sa zaradom iznad lokalnog proseka. **Bez prethodnog dispečerskog, poslovnog ili prodajnog iskustva.** Potreban samo kompjuter, internet i engleski na A2 nivou. Sekundarno: vozači i ljudi već u transportu koji prelaze u dispatch.

## Tone
Direktan, motivacioni, "ti" obraćanje, direct-response / info-product prodajni ton. Puno velikih slova u naslovima, urgentnost (countdown, "ponuda neće trajati zauvek"), value-stack logika.

---

## Site-Specific Rules (redizajn)

**MORA da ostane:**
- Ceo copy, redosled sekcija i sadržaj — identično (vidi `source-scrape-obuka-za-dispecere.md`)
- Telefon u headeru + WhatsApp i Viber ikonice
- Registraciona forma u hero-u i u finalnom CTA (ista polja)
- Countdown timer, promo kod `USA20`, value stack sa €2238 / €495
- Google reviews widget (5.0 / 55)
- Payment badges i 4 pravna linka u footeru (zakonska obaveza za RS e-commerce)
- Cookie consent banner
- Calendly dugme za besplatne konsultacije

**Redizajn — prilike (bez diranja copy-ja):**
- Svesti paletu na žuto `#FFB606` + tamno `#1A2E3B`/`#0E1216` + bela/siva; izbaciti plavu `#1863DC`
- Ujednačiti border-radius (trenutno 0 / 5 / 6 / 27px u istom sistemu)
- Vimeo lazy-load facade umesto 7 iframe-ova odmah
- Jedinstvena tipografska skala (trenutno Montserrat + Roboto mešano, veličine nedosledne)
- Stranica je 19.979px visoka na 1440px — sekcije imaju neujednačen vertikalni ritam

**Ne diraj:**
- Copy (dogovoreno: tek posle redizajna)
- Cene i tvrdnje o zaradi (pravno osetljivo — "ne garantujemo zaposlenje" je već u FAQ #6)

---

## Social nalozi

### Instagram — [@mycer1](https://www.instagram.com/mycer1/)
- **309 postova · 3.493 pratilaca · 5 praćenja** · kategorija: Product/service
- Bio (verbatim):
  ```
  MyCER
  Najkompletnji online kurs za dispečera kamiona
  🗣 70 video lekcija
  🗒 10 opširnih testova
  ⏳ 6 meseci pristup
  📆 30 dana povrat novca
  📞 +381612020087
  ```
- Link u biju: `www.my-cer.com` (+ još 1 link)
- Story highlights: `💻PDF vodič💻` · `#DISPATCHESH` · `Learn dispatch` · `News` · `Students` · `Google reviews`
- **Zaključak:** nema novih brend assets-a niti copy-ja koji već nemamo. Jedino upotrebljivo za redizajn:
  - brojka **3.493 pratilaca** kao dodatni social proof (opciono, samo ako se doda social traka u footer)
  - potvrda da je isti value-stack copy (70 lekcija / 10 testova / 6 meseci / 30 dana) konzistentan i van sajta
  - postoji **PDF vodič** kao lead magnet na IG-u koji **nije prisutan na sajtu** — potencijalni dodatak, ali van obima ovog redizajna

### LinkedIn — [/company/mycer/](https://www.linkedin.com/company/mycer/) ✅
Ispalo je **najkorisnije od sva tri** — daje zvanične firmografske podatke kojih nema na sajtu.

| Polje | Vrednost |
|---|---|
| Naziv | MyCER |
| Tagline | *online kursevi iz oblasti logistike i transporta* |
| Industrija | Business Consulting and Services |
| **Osnovano** | **2013.** → 13 godina u poslu (2026) |
| Veličina | 2–10 zaposlenih · 7 associated members |
| Tip | Privately Held |
| Pratilaca | 654 |
| Specialties | sales, marketing, logistics, consulting |
| **Sedište / adresa** | **Ulica Vlade Jovanovića 14, 15000 Šabac, Centralna Srbija** |
| Telefon | +381612020087 |
| Website | https://my-cer.com |

**Novi polaznici sa imenima (iz LinkedIn postova)** — potencijalni izvor dodatnih testimonijala ako zatreba:
Jovan · Đorđe · Dejan Cvetinović (2 godine u industriji) · Ognjen (našao posao pre kraja obuke) · Filip · Majda

> ⚠️ **Nekonzistentnosti uočene između sajta i LinkedIn-a** (samo evidencija — copy se ne dira u ovoj fazi):
> - **87%** polaznika radi posao (sajt, IG, većina LI postova) vs. **86%** u jednom LinkedIn postu
> - LinkedIn *About* reklamira **„72 sata pristup besplatnom sadržaju / 4 besplatne lekcije"**, dok sajt nudi **„prvo poglavlje besplatno"** — dve različite ponude za isti besplatni ulaz
> - LinkedIn postovi pominju **„mentorska podrška 6 meseci nakon završetka"**, dok sajt kaže **6 meseci pristupa platformi** + zasebno naplativi Mentor planovi
> - **Godina osnivanja 2013. se nigde ne pominje na sajtu** — 13 godina iskustva je jak, neiskorišćen social proof
> - IG bio sadrži `15000` — to je poštanski broj Šapca, ne brojka iz value stack-a

---

## Otvorena pitanja
- [x] ~~Instagram~~ — skrejpovan, vidi gore; bez novih assets-a
- [x] ~~LinkedIn~~ — pročitan; dao adresu, godinu osnivanja i veličinu firme
- [ ] Odluka o negativnoj Google recenziji (vidi `google-reviews.md`)
- [ ] Hero pozadinska fotografija u punoj rezoluciji
- [ ] Da li redizajn ide kao WordPress/Elementor tema ili standalone build?

---

## Redizajn — status (2026-09-21)

**Isporučeno:** `redesign/index.html` + `redesign/styles.css` + `redesign/app.js` (statični HTML/CSS/JS, bez frameworka, ~108 KB).

Dizajn jezik preuzet iz Framer template-a **Tradelab** (teardown: `TEARDOWN-tradelab.md`).
Paleta, copy i raspored sekcija — **nepromenjeni**.

### Preslikano iz Tradelaba
rail grid linije · announcement marquee · sticky nav sa pulse indikatorom · dugme sa dva blurovana
radial-gradient bloba koji se pomeraju na hover · CSS-mask ikone · noise overlay (SVG feTurbulence) ·
scroll reveal (spring 79/30 ≈ `cubic-bezier(.16,1,.3,1)`) · inset card glow · hover lighting na karticama ·
mask fade na slikama · sticky FAQ kolona · plus→minus akordeon · tick badge lista · pricing kartica sa
gradijentom i uglovnim sjajem · marquee · giant footer wordmark · Lenis smooth scroll (jsDelivr).

### Token mapiranje (Tradelab → MyCER)
`#ce4901 → #FFB606` · `#f86d22 → #FBA919` · `#0b0b0b → #0E1216` ·
`#292929/#414141 → #1E2A33/#2A3B47` · `#b4b4b4 → #B8B8B8` · panel `#1A2E3B`

### Tipografija
Sora (naslovi) + Inter (body) — kao u template-u. Povratak na brend font je jedna linija:
`--font-display: "Montserrat"` u `:root`.

### Novi logo fajlovi
`images/logo/mycer-logo-white.png` (beli wordmark, 3049×827) i `mycer-mark-white.png` (beli znak, 512×512) —
generisani iz originala jer sa sajta postoje samo crne verzije. Stari fajlovi preimenovani u
`mycer-logo-black.png` / `mycer-mark-black.png`.

### Placeholderi / šta treba dopuniti
- Hero pozadina je CSS radial-gradient (nema originalne fotke u punoj rezoluciji)
- Avatari u social proof bloku koriste kadrove iz video thumbnailova
- Payment badges su tekstualni (`<b>Maestro</b>` itd.) — zameniti originalnim logotipima
- Ikone benefita su generičke line ikone — zameniti brend ikonama ako postoje
- Newsletter forma u footeru i registraciona forma nisu povezane sa backendom

### Lokalni preview
```
python -m http.server 5178
# → http://localhost:5178/redesign/index.html
```
