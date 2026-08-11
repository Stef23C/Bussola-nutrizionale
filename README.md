# Bussola Nutrizionale — Zenplicité

Applicazione web (un unico file HTML, nessun server richiesto) per calcolare i fabbisogni nutrizionali personalizzati e gestire diete, database alimenti, ricette, diario alimentare e pianificazione settimanale dei pasti.

## Funzionalità

- **Profilo & fabbisogni** — calcolo di energia, proteine, carboidrati, lipidi e fibre in base a sesso, età, peso, altezza, livello di attività fisica (con spiegazione dei 4 livelli LAF) e stato fisiologico (gravidanza/allattamento), basato sui valori AR/PRI/AI della tabella EFSA *Dietary Reference Values*.
- **Tipi di dieta** — ripartizioni percentuali di macronutrienti personalizzabili per Onnivora, Vegetariana, Vegana, Mediterranea, Anti-infiammatoria, Paleo, Chetogenica (+ diete personalizzate).
- **Guida alle diete** — spiegazione pratica di ciascun tipo di dieta: alimenti da preferire/limitare e note.
- **Database alimenti** — oltre 100 alimenti (inclusi gli pseudocereali: quinoa, grano saraceno, amaranto, teff) con valori nutrizionali per 100 g, filtrabili per categoria/dieta, editabili, importabili/esportabili in TXT e JSON.
- **Ricette** — composizione da alimenti del database, calcolo automatico dei valori nutrizionali totali e per porzione, passi di preparazione con **lettore vocale** (play/pausa/ripresa) e grafico di composizione calorica con indicatore di equilibrio rispetto alla dieta scelta.
- **Diario giornaliero** — registrazione dei pasti con confronto rispetto agli obiettivi, grafici a torta e a barre, badge "Equilibrato / Sbilanciato".
- **Piano settimanale** — pianificazione dei pasti (colazione, spuntino, pranzo, cena) con portate (antipasto, primo, secondo, contorno, dessert, bevanda) per ciascun giorno della settimana.
- **Bilingue IT/FR** — interfaccia, diete e database alimenti completamente tradotti.
- Esportazione **PDF, TXT, JSON** e stampa per ogni sezione.

Tutto funziona **interamente nel browser**: nessun dato viene inviato a un server. I dati restano in memoria per la sessione corrente — usa l'esportazione JSON per conservarli.

## Come usarla

### In locale
Scarica il repository e apri semplicemente `index.html` in un browser moderno (Chrome, Firefox, Edge, Safari). Non serve installare nulla.

### Online con GitHub Pages (gratuito)

Lo ZIP che scarichi contiene già un repository Git inizializzato con il primo commit pronto (branch `main`). Ti basta:

1. Estrai lo ZIP e apri un terminale nella cartella `repo`.
2. Crea un nuovo repository vuoto su GitHub (senza README, senza .gitignore — sono già inclusi), es. `bussola-nutrizionale`.
3. Collega ed esegui il push:
   ```
   git remote add origin https://github.com/<tuo-utente>/<nome-repository>.git
   git push -u origin main
   ```
4. Nel repository su GitHub vai su **Settings → Pages**, in **Source** seleziona il branch `main` e la cartella `/ (root)`, poi salva.
5. Dopo qualche minuto l'app sarà online all'indirizzo `https://<tuo-utente>.github.io/<nome-repository>/`.

In alternativa, se preferisci non usare il terminale, puoi creare il repository su GitHub e trascinare/caricare `index.html` e `README.md` direttamente dall'interfaccia web di GitHub ("Add file → Upload files"), poi seguire i punti 4-5.

## Fonti scientifiche

I valori di riferimento per energia, proteine e fibre sono tratti dalla tabella **EFSA — Dietary Reference Values for nutrients** (Autorità Europea per la Sicurezza Alimentare). I riferimenti per zuccheri e sale, non fissati numericamente dall'EFSA a livello di popolazione, seguono le indicazioni generali dell'OMS.

## Nota

Questo strumento fornisce indicazioni nutrizionali generali e non sostituisce una valutazione professionale personalizzata.

## Repository pubblico o privato?

Contenendo il tuo logo e il nome del cabinet, se non vuoi che sia visibile a chiunque ti consiglio di creare il repository come **privato** (disponibile anche nei piani GitHub gratuiti). GitHub Pages funziona anche da repository privato se hai un account GitHub Pro/Team/Enterprise; con l'account gratuito, per pubblicare online con Pages il repository deve essere pubblico.

