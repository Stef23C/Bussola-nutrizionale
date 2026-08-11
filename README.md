# Bussola Nutrizionale — Zenplicité

Applicazione web (**PWA — Progressive Web App**) per calcolare i fabbisogni nutrizionali personalizzati e gestire diete, database alimenti, ricette, diario alimentare e pianificazione settimanale dei pasti. Installabile su computer, telefono e tablet direttamente dal browser, funziona anche offline dopo la prima apertura.

## Struttura del progetto

```
├── index.html          la pagina dell'app
├── styles.css           tutti gli stili
├── app.js                tutta la logica dell'applicazione
├── manifest.json    descrizione dell'app per l'installazione (PWA)
├── sw.js                  service worker: abilita l'uso offline e l'installazione
├── favicon.ico
├── icons/                 icone dell'app in varie dimensioni (per favicon e installazione)
│   ├── favicon-16.png
│   ├── favicon-32.png
│   ├── icon-192.png
│   ├── icon-512.png
│   └── apple-touch-icon.png
└── assets/
    └── logo.png         il tuo logo Zenplicité, mostrato accanto al nome dell'app
```

Nessuna build, nessuna dipendenza da installare: sono solo file statici.

## Funzionalità dell'app

- **Profilo & fabbisogni** — energia, proteine, carboidrati, lipidi e fibre in base a sesso, età, peso, altezza, livello di attività fisica (con spiegazione dei 4 livelli LAF) e stato fisiologico, secondo i valori EFSA (*Dietary Reference Values*).
- **Tipi di dieta** personalizzabili (Onnivora, Vegetariana, Vegana, Mediterranea, Anti-infiammatoria, Paleo, Chetogenica, +personalizzate) e **Guida alle diete**.
- **Database alimenti** (oltre 100 voci, incluso pseudocereali) filtrabile, editabile, importabile/esportabile.
- **Ricette** con preparazione, lettore vocale (play/pausa/ripresa), e grafico di equilibrio nutrizionale.
- **Diario giornaliero** con grafici a torta/barre e badge "Equilibrato / Sbilanciato".
- **Piano settimanale** dei pasti con portate (antipasto, primo, secondo, contorno, dessert, bevanda).
- Bilingue **IT/FR**, esportazione PDF/TXT/JSON, stampa.

## Come usarla in locale

Apri semplicemente `index.html` in un browser moderno (Chrome, Firefox, Edge, Safari). Alcune funzioni PWA (installazione, uso offline) richiedono che i file siano serviti da un server web, anche locale — vedi sotto.

Per testare in locale con un piccolo server (facoltativo):
```
python3 -m http.server 8080
```
poi apri `http://localhost:8080` nel browser.

## Come pubblicarla online con GitHub Pages (gratis)

1. Crea un nuovo repository su GitHub (es. `bussola-nutrizionale`).
2. Carica **tutti i file e le cartelle di questo pacchetto** così come sono (mantieni la struttura: `icons/` e `assets/` restano sottocartelle) — puoi trascinarli nella pagina "Add file → Upload files" di GitHub, oppure usare Git da terminale:
   ```
   cd bussola-nutrizionale
   git init
   git add -A
   git commit -m "Prima versione"
   git branch -M main
   git remote add origin https://github.com/<tuo-utente>/<nome-repository>.git
   git push -u origin main
   ```
3. Su GitHub vai su **Settings → Pages**, in **Source** scegli il branch `main` e la cartella `/ (root)`, salva.
4. Dopo qualche minuto l'app è online su `https://<tuo-utente>.github.io/<nome-repository>/`.

## Installazione come app (su tutti i dispositivi)

Una volta che l'app è online (serve HTTPS, che GitHub Pages fornisce automaticamente):

- **Computer (Chrome/Edge)**: apri il link, clicca l'icona di installazione nella barra degli indirizzi (o menu → "Installa app").
- **Android (Chrome)**: apri il link, il browser propone "Aggiungi a schermata Home" / "Installa app".
- **iPhone/iPad (Safari)**: apri il link, tocca "Condividi" → "Aggiungi a Home".

L'icona che vedrai è quella "a bussola" nelle tonalità verde/ocra dell'app (nella cartella `icons/`), diversa dal tuo logo Zenplicité che invece resta visibile nell'intestazione dell'app stessa.

## Fonti scientifiche

I valori di riferimento per energia, proteine e fibre sono tratti dalla tabella **EFSA — Dietary Reference Values for nutrients**. I riferimenti per zuccheri e sale seguono le indicazioni generali dell'OMS, non fissate numericamente dall'EFSA a livello di popolazione.

## Nota

Questo strumento fornisce indicazioni nutrizionali generali e non sostituisce una valutazione professionale personalizzata. I dati inseriti restano nel browser della persona che usa l'app (nessun invio a un server) — usa l'esportazione JSON per conservarli.
