/* =========================================================================
   INTERNAZIONALIZZAZIONE (IT / FR)
   ========================================================================= */
let LANG = 'it';
const I18N = {
it: {
  brandSubtitle:"Basata sui Dietary Reference Values EFSA",
  btnExportAll:"⇩ Esporta tutto (JSON)", btnPrint:"🖨 Stampa / PDF",
  tab1:"1 · Profilo & fabbisogni", tab2:"2 · Tipi di dieta", tab3:"3 · Guida alle diete",
  tab4:"4 · Database alimenti", tab5:"5 · Ricette", tab6:"6 · Diario giornaliero",
  cardProfileTitle:"Dati della persona",
  fieldSex:"Sesso", optF:"Femmina", optM:"Maschio",
  fieldAge:"Età (anni)", fieldWeight:"Peso (kg)", fieldHeight:"Altezza (cm)",
  fieldLAF:"Livello di attività fisica (LAF)",
  lafOpt1:"1,4 — Sedentario", lafOpt2:"1,6 — Moderatamente attivo", lafOpt3:"1,8 — Attivo", lafOpt4:"2,0 — Molto attivo",
  fieldStatus:"Stato fisiologico",
  statusNone:"Nessuno", statusT1:"Gravidanza — 1° trimestre", statusT2:"Gravidanza — 2° trimestre", statusT3:"Gravidanza — 3° trimestre",
  statusLact1:"Allattamento — 0-6 mesi", statusLact2:"Allattamento — >6 mesi",
  fieldDiet:"Tipo di dieta",
  btnCalcola:"Calcola fabbisogni →",
  lafInfoTitle:"Cosa significa il livello di attività fisica (LAF)",
  lafInfoIntro:"Il LAF stima quanta energia in più, rispetto al riposo, la persona consuma nella giornata tipo. Scegli il livello che descrive meglio la settimana media, non un singolo giorno di allenamento intenso.",
  laf1Name:"1,4 — Sedentario", laf1Desc:"Vita per lo più seduta, poco o nessun movimento strutturato.",
  laf1Ex:"Esempi: lavoro d'ufficio o al computer, lunghi tragitti in auto o mezzi pubblici, nessuno sport regolare o al massimo una breve passeggiata occasionale.",
  laf2Name:"1,6 — Moderatamente attivo", laf2Desc:"Un po' di movimento quotidiano più attività fisica leggera qualche volta a settimana.",
  laf2Ex:"Esempi: camminate regolari, lavoro che alterna momenti seduti e in piedi, 1-3 allenamenti leggeri/moderati a settimana (es. yoga, bici, piscina).",
  laf3Name:"1,8 — Attivo", laf3Desc:"Attività fisica strutturata regolare, più uno stile di vita già dinamico.",
  laf3Ex:"Esempi: 3-5 allenamenti a settimana di intensità moderata-alta (corsa, palestra, sport di squadra), lavori che richiedono di stare spesso in movimento.",
  laf4Name:"2,0 — Molto attivo", laf4Desc:"Livello elevato di attività fisica quotidiana, spesso professionale o sportiva intensa.",
  laf4Ex:"Esempi: allenamenti quotidiani intensi o doppie sedute, atleti in preparazione, lavori fisicamente molto impegnativi (edilizia pesante, agricoltura manuale).",
  resultsTitle:"Carta d'identità nutrizionale",
  nutriBigTitle:"Fabbisogno / giorno", nutriSexAge:"Sesso · età", nutriWeightHeight:"Peso · altezza", nutriLAF:"LAF", nutriDiet:"Dieta",
  nutriEnergia:"Energia", nutriProteine:"Proteine", nutriCarboidrati:"Carboidrati", nutriLipidi:"Lipidi", nutriFibre:"Fibre (AI EFSA)",
  anniSuffix:"anni",
  refNoteProt:"Riferimento EFSA proteine (PRI, indipendente dalla dieta):", refNoteFiber:"Riferimento fibre (AI EFSA):",
  refNoteSalt:"Nessun valore numerico di popolazione EFSA per zuccheri e sale (indicati come \"il più bassi possibile\"); riferimento OMS indicativo: sale &lt; 5 g/giorno.",
  gPerDay:"g/giorno",
  btnPDF:"⇩ PDF", btnTXT:"⇩ TXT",
  dietTabTitle:"Ripartizione macronutrienti per tipo di dieta",
  dietTabHint:"Percentuali di energia giornaliera da proteine (4 kcal/g) · carboidrati (4 kcal/g) · lipidi (9 kcal/g). Personalizzabili e salvate automaticamente per i calcoli del profilo.",
  dietColName:"Tipo di dieta", dietColProt:"Proteine %", dietColCarb:"Carboidrati %", dietColFat:"Lipidi %",
  btnAddDiet:"+ Aggiungi tipo di dieta", btnRemoveDiet:"Rimuovi", promptNewDiet:"Nome del nuovo tipo di dieta:",
  guideTabTitle:"Guida pratica ai tipi di dieta",
  guideTabHint:"Una spiegazione semplice di cosa caratterizza ogni pattern alimentare, quali alimenti privilegiare e quali limitare, e per chi è pensato. Le percentuali di macronutrienti richiamano quelle impostate nella scheda \"Tipi di dieta\" e possono quindi differire se le modifichi lì.",
  guidePreferTitle:"Alimenti da preferire", guideAvoidTitle:"Alimenti da limitare / evitare",
  guideGenericDesc:"Tipo di dieta personalizzato, aggiunto manualmente nella scheda \"Tipi di dieta\". Definisci qui le tue indicazioni pratiche di riferimento.",
  guideGenericItem:"Da definire in base agli obiettivi della persona",
  guideGenericNote:"Ricorda di impostare anche la ripartizione % di proteine/carboidrati/lipidi nella scheda \"Tipi di dieta\".",
  guideTxtHeader:"GUIDA PRATICA AI TIPI DI DIETA", guideTxtPrefer:"Da preferire:", guideTxtAvoid:"Da limitare/evitare:", guideTxtNote:"Nota:",
  foodsTabTitle:"Database alimenti", foodsCountSuffix:"alimenti",
  searchPlaceholder:"Cerca alimento…", allCategories:"Tutte le categorie", allDiets:"Tutte le diete",
  btnNewFood:"+ Nuovo alimento", btnImportTXT:"⇧ Importa TXT",
  importHintPre:"Formato riga per import TXT:", importHintPost:"(valori per 100 g).",
  colFood:"Alimento", colCat:"Categoria", colKcal:"Kcal", colProt:"Prot g", colCarb:"Carb g", colFat:"Lip g", colFiber:"Fibre g", colSalt:"Sale g", colDiets:"Diete",
  modalNewFoodTitle:"Nuovo alimento", modalEditFoodTitle:"Modifica alimento",
  fmLabelName:"Nome", fmLabelCat:"Categoria", fmPlaceholderCat:"es. Verdura",
  fmLabelKcal:"Kcal /100g", fmLabelProt:"Proteine g", fmLabelCarb:"Carboidrati g", fmLabelFat:"Lipidi g", fmLabelFiber:"Fibre g", fmLabelSalt:"Sale g",
  fmLabelCompat:"Compatibile con", fmVegan:"Vegana", fmVeg:"Vegetariana", fmOmni:"Onnivora", fmPaleo:"Paleo", fmAI:"Antinfiammatoria",
  btnSaveFood:"Salva alimento",
  otherCategory:"Altro", importedCategory:"Importato",
  alertFoodName:"Inserisci il nome dell'alimento.", alertImportedSuffix:"alimenti importati.", confirmDeleteFood:"Eliminare questo alimento?",
  recipesTabTitle:"Ricette personalizzate",
  recipesTabHint:"Componi una ricetta con gli alimenti del database: i valori nutrizionali totali e per porzione si calcolano automaticamente.",
  btnNewRecipe:"+ Nuova ricetta", btnExportRecipesJSON:"⇩ JSON ricette", noRecipes:"Nessuna ricetta salvata.",
  servingsSuffix:"porzioni", ingredientsLabel:"Ingredienti", totalRecipeLabel:"Totale ricetta", perServingLabel:"Per porzione", btnDeleteRecipe:"Elimina ricetta",
  modalNewRecipeTitle:"Nuova ricetta", rmLabelName:"Nome ricetta", rmLabelServings:"N. porzioni", rmLabelAddIngredient:"Aggiungi ingrediente",
  rmPlaceholderGrams:"grammi", noIngredients:"Nessun ingrediente aggiunto.", btnSaveRecipe:"Salva ricetta",
  alertRecipeNameIngr:"Inserisci nome e almeno un ingrediente.",
  rmLabelSteps:"Preparazione (un passo per riga)", rmStepsPlaceholder:"1. Scalda l'olio in padella...\n2. Aggiungi...",
  rmLabelImage:"Immagine (opzionale)",
  prepTitle:"Preparazione", nutriValuesTitle:"Valori nutrizionali",
  btnPlay:"Ascolta", btnPause:"Pausa", btnRestart:"Ricomincia",
  alertNoSpeech:"La sintesi vocale non è supportata da questo browser.",
  tab7:"7 · Piano settimanale",
  planTitle:"Piano settimanale dei pasti",
  planHint:"Assegna alimenti o ricette ai pasti della settimana. Per pranzo e cena puoi scegliere anche la portata: antipasto, primo, secondo, contorno, dessert, bevanda.",
  planPrevWeek:"Settimana precedente", planNextWeek:"Settimana successiva",
  modalAddPlanTitle:"Aggiungi al piano",
  courseAntipasto:"Antipasto", coursePrimo:"Primo", courseSecondo:"Secondo", courseContorno:"Contorno", courseDessert:"Dessert", courseBevanda:"Bevanda",
  planDayTotal:"Totale giorno", planNoItems:"—",
  planTxtHeader:"PIANO SETTIMANALE DEI PASTI", planWeekOf:"Settimana del",
  balanceSectionTitle:"Equilibrio nutrizionale", balanceYourDay:"La tua giornata", balanceTargetDiet:"Obiettivo dieta",
  balanceOk:"Equilibrato", balanceOff:"Sbilanciato",
  balanceComputeFirst:"Calcola prima i fabbisogni nella scheda \"Profilo & fabbisogni\" per vedere il confronto con l'obiettivo e la valutazione di equilibrio.",
  balanceMoreProtein:"più proteico del previsto", balanceLessProtein:"meno proteico del previsto",
  balanceMoreCarb:"più ricco di carboidrati del previsto", balanceLessCarb:"più povero di carboidrati del previsto",
  balanceMoreFat:"più ricco di lipidi del previsto", balanceLessFat:"più povero di lipidi del previsto",
  barChartTitle:"Confronto valori vs obiettivo", compositionTitle:"Composizione calorica",
  recipeBalanceVsDiet:"rispetto a", noTargetForRecipe:"Calcola i fabbisogni per confrontare la ricetta con la dieta scelta.",
  diaryTitle:"Diario alimentare del giorno",
  mealColazione:"Colazione", mealPranzo:"Pranzo", mealCena:"Cena", mealSpuntino:"Spuntino",
  noFoodAdded:"Nessun alimento aggiunto.", btnAddFoodDiary:"+ Aggiungi alimento", btnClearDiary:"Svuota giornata", confirmClearDiary:"Svuotare tutta la giornata?",
  diarySummaryTitle:"Totale giornata vs obiettivo",
  diaryNoTargetHint:"Calcola prima i fabbisogni nella scheda \"Profilo & fabbisogni\" per confrontare il diario con un obiettivo personalizzato.",
  rowTotalDay:"Totale giornata", saltNotePre:"Sale assunto:", saltNotePost:"(riferimento indicativo OMS &lt; 5 g/giorno — non è un valore di popolazione EFSA).",
  btnPDFdiary:"⇩ PDF diario", btnTXTdiary:"⇩ TXT diario", btnJSONdiary:"⇩ JSON diario",
  modalAddDiaryTitle:"Aggiungi al diario", mmLabelMeal:"Pasto", mmLabelType:"Tipo", mmOptFood:"Alimento", mmOptRecipe:"Ricetta",
  mmLabelFood:"Alimento", mmLabelGrams:"Quantità (g)", mmLabelRecipe:"Ricetta", mmLabelServings:"N. porzioni", btnAdd:"Aggiungi",
  alertQty:"Inserisci una quantità valida.", alertCreateRecipeFirst:"Crea prima una ricetta nella scheda Ricette.", noRecipeSaved:"Nessuna ricetta salvata",
  footerNote:"Valori energetici e proteici di riferimento (AR/PRI) ricavati dalla tabella EFSA \"Dietary Reference Values for nutrients\" caricata. I target di zucchero/sale seguono le indicazioni generali OMS dove l'EFSA non fissa un valore numerico di popolazione. Questo strumento fornisce indicazioni generali e non sostituisce una valutazione nutrizionale personalizzata.",
  badgeVegan:"Vegana", badgeVeg:"Vegetariana", badgeOmni:"Onnivora", badgePaleo:"Paleo", badgeAI:"Anti-infiamm.",
  pdfHintTitle:"Si aprirà la finestra di stampa: scegli \"Salva come PDF\" tra le stampanti disponibili.",
  closeX:"×"
},
fr: {
  brandSubtitle:"Basée sur les Dietary Reference Values EFSA",
  btnExportAll:"⇩ Tout exporter (JSON)", btnPrint:"🖨 Imprimer / PDF",
  tab1:"1 · Profil & besoins", tab2:"2 · Types de régime", tab3:"3 · Guide des régimes",
  tab4:"4 · Base d'aliments", tab5:"5 · Recettes", tab6:"6 · Journal quotidien",
  cardProfileTitle:"Données de la personne",
  fieldSex:"Sexe", optF:"Femme", optM:"Homme",
  fieldAge:"Âge (ans)", fieldWeight:"Poids (kg)", fieldHeight:"Taille (cm)",
  fieldLAF:"Niveau d'activité physique (NAP)",
  lafOpt1:"1,4 — Sédentaire", lafOpt2:"1,6 — Modérément actif", lafOpt3:"1,8 — Actif", lafOpt4:"2,0 — Très actif",
  fieldStatus:"État physiologique",
  statusNone:"Aucun", statusT1:"Grossesse — 1er trimestre", statusT2:"Grossesse — 2e trimestre", statusT3:"Grossesse — 3e trimestre",
  statusLact1:"Allaitement — 0-6 mois", statusLact2:"Allaitement — >6 mois",
  fieldDiet:"Type de régime",
  btnCalcola:"Calculer les besoins →",
  lafInfoTitle:"Que signifie le niveau d'activité physique (NAP) ?",
  lafInfoIntro:"Le NAP estime l'énergie supplémentaire, par rapport au repos, dépensée dans une journée type. Choisis le niveau qui décrit le mieux la semaine moyenne, pas une seule séance de sport intense.",
  laf1Name:"1,4 — Sédentaire", laf1Desc:"Vie majoritairement assise, peu ou pas de mouvement structuré.",
  laf1Ex:"Exemples : travail de bureau ou sur ordinateur, longs trajets en voiture ou en transports en commun, aucun sport régulier ou tout au plus une courte marche occasionnelle.",
  laf2Name:"1,6 — Modérément actif", laf2Desc:"Un peu de mouvement quotidien, plus une activité physique légère quelques fois par semaine.",
  laf2Ex:"Exemples : marche régulière, travail alternant position assise et debout, 1 à 3 séances légères/modérées par semaine (yoga, vélo, piscine).",
  laf3Name:"1,8 — Actif", laf3Desc:"Activité physique structurée régulière, avec un mode de vie déjà dynamique.",
  laf3Ex:"Exemples : 3 à 5 séances par semaine d'intensité modérée à élevée (course, salle de sport, sports collectifs), métiers qui demandent d'être souvent en mouvement.",
  laf4Name:"2,0 — Très actif", laf4Desc:"Niveau élevé d'activité physique quotidienne, souvent professionnelle ou sportive intense.",
  laf4Ex:"Exemples : entraînements intenses quotidiens ou doubles séances, athlètes en préparation, métiers physiquement très exigeants (BTP, agriculture manuelle).",
  resultsTitle:"Carte d'identité nutritionnelle",
  nutriBigTitle:"Besoin / jour", nutriSexAge:"Sexe · âge", nutriWeightHeight:"Poids · taille", nutriLAF:"NAP", nutriDiet:"Régime",
  nutriEnergia:"Énergie", nutriProteine:"Protéines", nutriCarboidrati:"Glucides", nutriLipidi:"Lipides", nutriFibre:"Fibres (AI EFSA)",
  anniSuffix:"ans",
  refNoteProt:"Référence EFSA protéines (PRI, indépendante du régime) :", refNoteFiber:"Référence fibres (AI EFSA) :",
  refNoteSalt:"Aucune valeur numérique de population EFSA pour les sucres et le sel (indiqués comme devant être \"aussi bas que possible\") ; référence OMS indicative : sel &lt; 5 g/jour.",
  gPerDay:"g/jour",
  btnPDF:"⇩ PDF", btnTXT:"⇩ TXT",
  dietTabTitle:"Répartition des macronutriments par type de régime",
  dietTabHint:"Pourcentages d'énergie journalière issus des protéines (4 kcal/g) · glucides (4 kcal/g) · lipides (9 kcal/g). Personnalisables et enregistrés automatiquement pour les calculs du profil.",
  dietColName:"Type de régime", dietColProt:"Protéines %", dietColCarb:"Glucides %", dietColFat:"Lipides %",
  btnAddDiet:"+ Ajouter un type de régime", btnRemoveDiet:"Supprimer", promptNewDiet:"Nom du nouveau type de régime :",
  guideTabTitle:"Guide pratique des types de régime",
  guideTabHint:"Une explication simple de ce qui caractérise chaque modèle alimentaire, quels aliments privilégier et lesquels limiter, et à qui il s'adresse. Les pourcentages de macronutriments reprennent ceux définis dans l'onglet \"Types de régime\" et peuvent donc différer si tu les modifies là-bas.",
  guidePreferTitle:"Aliments à privilégier", guideAvoidTitle:"Aliments à limiter / éviter",
  guideGenericDesc:"Type de régime personnalisé, ajouté manuellement dans l'onglet \"Types de régime\". Définis ici tes repères pratiques.",
  guideGenericItem:"À définir selon les objectifs de la personne",
  guideGenericNote:"N'oublie pas de définir aussi la répartition % protéines/glucides/lipides dans l'onglet \"Types de régime\".",
  guideTxtHeader:"GUIDE PRATIQUE DES TYPES DE RÉGIME", guideTxtPrefer:"À privilégier :", guideTxtAvoid:"À limiter/éviter :", guideTxtNote:"Note :",
  foodsTabTitle:"Base d'aliments", foodsCountSuffix:"aliments",
  searchPlaceholder:"Rechercher un aliment…", allCategories:"Toutes les catégories", allDiets:"Tous les régimes",
  btnNewFood:"+ Nouvel aliment", btnImportTXT:"⇧ Importer TXT",
  importHintPre:"Format de ligne pour l'import TXT :", importHintPost:"(valeurs pour 100 g).",
  colFood:"Aliment", colCat:"Catégorie", colKcal:"Kcal", colProt:"Prot g", colCarb:"Gluc g", colFat:"Lip g", colFiber:"Fibres g", colSalt:"Sel g", colDiets:"Régimes",
  modalNewFoodTitle:"Nouvel aliment", modalEditFoodTitle:"Modifier l'aliment",
  fmLabelName:"Nom", fmLabelCat:"Catégorie", fmPlaceholderCat:"ex. Légumes",
  fmLabelKcal:"Kcal /100g", fmLabelProt:"Protéines g", fmLabelCarb:"Glucides g", fmLabelFat:"Lipides g", fmLabelFiber:"Fibres g", fmLabelSalt:"Sel g",
  fmLabelCompat:"Compatible avec", fmVegan:"Végane", fmVeg:"Végétarienne", fmOmni:"Omnivore", fmPaleo:"Paléo", fmAI:"Anti-inflammatoire",
  btnSaveFood:"Enregistrer l'aliment",
  otherCategory:"Autre", importedCategory:"Importé",
  alertFoodName:"Indique le nom de l'aliment.", alertImportedSuffix:"aliments importés.", confirmDeleteFood:"Supprimer cet aliment ?",
  recipesTabTitle:"Recettes personnalisées",
  recipesTabHint:"Compose une recette avec les aliments de la base : les valeurs nutritionnelles totales et par portion se calculent automatiquement.",
  btnNewRecipe:"+ Nouvelle recette", btnExportRecipesJSON:"⇩ JSON recettes", noRecipes:"Aucune recette enregistrée.",
  servingsSuffix:"portions", ingredientsLabel:"Ingrédients", totalRecipeLabel:"Total de la recette", perServingLabel:"Par portion", btnDeleteRecipe:"Supprimer la recette",
  modalNewRecipeTitle:"Nouvelle recette", rmLabelName:"Nom de la recette", rmLabelServings:"Nb de portions", rmLabelAddIngredient:"Ajouter un ingrédient",
  rmPlaceholderGrams:"grammes", noIngredients:"Aucun ingrédient ajouté.", btnSaveRecipe:"Enregistrer la recette",
  alertRecipeNameIngr:"Indique un nom et au moins un ingrédient.",
  rmLabelSteps:"Préparation (une étape par ligne)", rmStepsPlaceholder:"1. Fais chauffer l'huile dans la poêle...\n2. Ajoute...",
  rmLabelImage:"Image (facultatif)",
  prepTitle:"Préparation", nutriValuesTitle:"Valeurs nutritionnelles",
  btnPlay:"Écouter", btnPause:"Pause", btnRestart:"Recommencer",
  alertNoSpeech:"La synthèse vocale n'est pas prise en charge par ce navigateur.",
  tab7:"7 · Planning hebdomadaire",
  planTitle:"Planning hebdomadaire des repas",
  planHint:"Attribue des aliments ou des recettes aux repas de la semaine. Pour le déjeuner et le dîner, tu peux aussi choisir le service : entrée, plat principal (primo), accompagnement, plat principal (secondo), dessert, boisson.",
  planPrevWeek:"Semaine précédente", planNextWeek:"Semaine suivante",
  modalAddPlanTitle:"Ajouter au planning",
  courseAntipasto:"Entrée", coursePrimo:"Primo (pâtes/riz)", courseSecondo:"Plat principal", courseContorno:"Accompagnement", courseDessert:"Dessert", courseBevanda:"Boisson",
  planDayTotal:"Total du jour", planNoItems:"—",
  planTxtHeader:"PLANNING HEBDOMADAIRE DES REPAS", planWeekOf:"Semaine du",
  balanceSectionTitle:"Équilibre nutritionnel", balanceYourDay:"Ta journée", balanceTargetDiet:"Objectif du régime",
  balanceOk:"Équilibré", balanceOff:"Déséquilibré",
  balanceComputeFirst:"Calcule d'abord tes besoins dans l'onglet \"Profil & besoins\" pour voir la comparaison avec l'objectif et l'évaluation de l'équilibre.",
  balanceMoreProtein:"plus riche en protéines que prévu", balanceLessProtein:"moins riche en protéines que prévu",
  balanceMoreCarb:"plus riche en glucides que prévu", balanceLessCarb:"plus pauvre en glucides que prévu",
  balanceMoreFat:"plus riche en lipides que prévu", balanceLessFat:"plus pauvre en lipides que prévu",
  barChartTitle:"Comparaison des valeurs vs objectif", compositionTitle:"Composition calorique",
  recipeBalanceVsDiet:"par rapport à", noTargetForRecipe:"Calcule tes besoins pour comparer la recette au régime choisi.",
  diaryTitle:"Journal alimentaire du jour",
  mealColazione:"Petit-déjeuner", mealPranzo:"Déjeuner", mealCena:"Dîner", mealSpuntino:"Collation",
  noFoodAdded:"Aucun aliment ajouté.", btnAddFoodDiary:"+ Ajouter un aliment", btnClearDiary:"Vider la journée", confirmClearDiary:"Vider toute la journée ?",
  diarySummaryTitle:"Total du jour vs objectif",
  diaryNoTargetHint:"Calcule d'abord tes besoins dans l'onglet \"Profil & besoins\" pour comparer le journal à un objectif personnalisé.",
  rowTotalDay:"Total du jour", saltNotePre:"Sel consommé :", saltNotePost:"(référence indicative OMS &lt; 5 g/jour — ce n'est pas une valeur de population EFSA).",
  btnPDFdiary:"⇩ PDF journal", btnTXTdiary:"⇩ TXT journal", btnJSONdiary:"⇩ JSON journal",
  modalAddDiaryTitle:"Ajouter au journal", mmLabelMeal:"Repas", mmLabelType:"Type", mmOptFood:"Aliment", mmOptRecipe:"Recette",
  mmLabelFood:"Aliment", mmLabelGrams:"Quantité (g)", mmLabelRecipe:"Recette", mmLabelServings:"Nb de portions", btnAdd:"Ajouter",
  alertQty:"Indique une quantité valide.", alertCreateRecipeFirst:"Crée d'abord une recette dans l'onglet Recettes.", noRecipeSaved:"Aucune recette enregistrée",
  footerNote:"Les valeurs énergétiques et protéiques de référence (AR/PRI) proviennent du tableau EFSA \"Dietary Reference Values for nutrients\" chargé. Les repères de sucre/sel suivent les indications générales de l'OMS lorsque l'EFSA ne fixe pas de valeur numérique de population. Cet outil fournit des indications générales et ne remplace pas une évaluation nutritionnelle personnalisée.",
  badgeVegan:"Végane", badgeVeg:"Végétarienne", badgeOmni:"Omnivore", badgePaleo:"Paléo", badgeAI:"Anti-inflamm.",
  pdfHintTitle:"La fenêtre d'impression va s'ouvrir : choisis \"Enregistrer au format PDF\" parmi les imprimantes disponibles.",
  closeX:"×"
}
};
function t(key){ return (I18N[LANG] && I18N[LANG][key]!==undefined) ? I18N[LANG][key] : key; }
function applyStaticI18n(){
  document.documentElement.lang = LANG;
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = t(el.getAttribute('data-i18n')); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{ el.placeholder = t(el.getAttribute('data-i18n-placeholder')); });
  document.querySelectorAll('[data-i18n-title]').forEach(el=>{ el.title = t(el.getAttribute('data-i18n-title')); });
  document.title = LANG==='fr' ? "Boussole Nutritionnelle — Zenplicité" : "Bussola Nutrizionale — Zenplicité";
}
function setLang(lang){
  LANG = lang;
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));
  applyStaticI18n();
  populateDietSelect();
  renderDietTable();
  refreshCatFilter();
  renderFoodTable();
  renderRecipes();
  refreshMealsView();
  document.getElementById('diary-date').textContent = new Date().toLocaleDateString(LANG==='fr'?'fr-FR':'it-IT',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  if(currentTargets) renderResults();
  if(typeof renderWeekPlan==='function') renderWeekPlan();
}

/* =========================================================================
   DATI DI RIFERIMENTO EFSA (dal PDF "Dietary Reference Values" caricato)
   ========================================================================= */
// Energia AR in MJ/giorno — adulti per fascia età / sesso / LAF
const ADULT_ENERGY_MJ = {
  M:{ "18-29":{1.4:9.8,1.6:11.2,1.8:12.6,2.0:14.0}, "30-39":{1.4:9.5,1.6:10.8,1.8:12.2,2.0:13.5},
      "40-49":{1.4:9.3,1.6:10.7,1.8:12.0,2.0:13.4}, "50-59":{1.4:9.2,1.6:10.5,1.8:11.9,2.0:13.2},
      "60-69":{1.4:8.4,1.6:9.6,1.8:10.9,2.0:12.1}, "70-79":{1.4:8.3,1.6:9.5,1.8:10.7,2.0:11.9} },
  F:{ "18-29":{1.4:7.9,1.6:9.0,1.8:10.1,2.0:11.2}, "30-39":{1.4:7.6,1.6:8.7,1.8:9.8,2.0:10.8},
      "40-49":{1.4:7.5,1.6:8.6,1.8:9.7,2.0:10.7}, "50-59":{1.4:7.5,1.6:8.5,1.8:9.6,2.0:10.7},
      "60-69":{1.4:6.8,1.6:7.8,1.8:8.8,2.0:9.7}, "70-79":{1.4:6.8,1.6:7.7,1.8:8.7,2.0:9.6} }
};
// Energia AR in MJ/giorno — bambini/adolescenti per età / sesso / LAF disponibile
const CHILD_ENERGY_MJ = {
  M:{1:{1.4:3.3},2:{1.4:4.3},3:{1.4:4.9},4:{1.4:5.3,1.6:6.0,1.8:6.8},5:{1.4:5.6,1.6:6.4,1.8:7.2},
     6:{1.4:5.9,1.6:6.7,1.8:7.6},7:{1.4:6.3,1.6:7.2,1.8:8.1},8:{1.4:6.7,1.6:7.6,1.8:8.6},
     9:{1.4:7.0,1.6:8.1,1.8:9.1},10:{1.6:8.1,1.8:9.1,2.0:10.1},11:{1.6:8.5,1.8:9.6,2.0:10.7},
     12:{1.6:9.1,1.8:10.2,2.0:11.4},13:{1.6:9.8,1.8:11.0,2.0:12.2},14:{1.6:10.5,1.8:11.8,2.0:13.1},
     15:{1.6:11.3,1.8:12.7,2.0:14.1},16:{1.6:11.9,1.8:13.4,2.0:14.9},17:{1.6:12.3,1.8:13.8,2.0:15.4}},
  F:{1:{1.4:3.0},2:{1.4:4.0},3:{1.4:4.6},4:{1.4:4.9,1.6:5.6,1.8:6.3},5:{1.4:5.2,1.6:5.9,1.8:6.7},
     6:{1.4:5.5,1.6:6.3,1.8:7.1},7:{1.4:5.8,1.6:6.7,1.8:7.5},8:{1.4:6.2,1.6:7.1,1.8:7.9},
     9:{1.4:6.6,1.6:7.5,1.8:8.4},10:{1.6:7.6,1.8:8.6,2.0:9.5},11:{1.6:8.0,1.8:9.0,2.0:10.0},
     12:{1.6:8.4,1.8:9.4,2.0:10.5},13:{1.6:8.8,1.8:9.9,2.0:11.0},14:{1.6:9.1,1.8:10.2,2.0:11.4},
     15:{1.6:9.3,1.8:10.5,2.0:11.7},16:{1.6:9.5,1.8:10.6,2.0:11.8},17:{1.6:9.5,1.8:10.7,2.0:11.9}}
};
const PREGNANCY_ADD_MJ = {t1:0.29,t2:1.1,t3:2.1};
const LACTATION_ADD_MJ = {lact1:2.1,lact2:2.1};
const PREGNANCY_PROT_ADD_G = {t1:0.52,t2:7.2,t3:23};
const LACTATION_PROT_ADD_G = {lact1:15,lact2:10};
// PRI proteine g/kg/giorno adulti; bambini per età (media indicativa dalla tabella EFSA)
const PROTEIN_PRI_ADULT = 0.83;
const PROTEIN_PRI_CHILD = {1:1.05,2:0.97,3:0.9,4:0.86,5:0.85,6:0.89,7:0.91,8:0.92,9:0.92,10:0.91,
  11:0.90,12:0.895,13:0.89,14:0.88,15:0.865,16:0.855,17:0.845};
// Fibre AI g/giorno
function fibreAI(age){
  if(age<=3) return 10; if(age<=6) return 14; if(age<=10) return 16; if(age<=14) return 19;
  if(age<=17) return 21; return 25;
}
const MJ_TO_KCAL = 238.845;

function energiaAR_kcal(p){
  let mj;
  const age = p.age;
  if(age>=18){
    let band = age<=29?"18-29":age<=39?"30-39":age<=49?"40-49":age<=59?"50-59":age<=69?"60-69":"70-79";
    mj = ADULT_ENERGY_MJ[p.sex][band][p.laf];
    if(!mj){ // fallback nearest laf
      const lafs=[1.4,1.6,1.8,2.0]; mj = ADULT_ENERGY_MJ[p.sex][band][lafs.reduce((a,b)=>Math.abs(b-p.laf)<Math.abs(a-p.laf)?b:a)];
    }
  } else {
    const a = Math.max(1,Math.min(17,Math.round(age)));
    const table = CHILD_ENERGY_MJ[p.sex][a] || CHILD_ENERGY_MJ[p.sex][a<10?3:10];
    const keys = Object.keys(table).map(Number);
    const nearest = keys.reduce((a,b)=>Math.abs(b-p.laf)<Math.abs(a-p.laf)?b:a);
    mj = table[nearest];
  }
  if(p.status==="t1"||p.status==="t2"||p.status==="t3") mj += PREGNANCY_ADD_MJ[p.status];
  if(p.status==="lact1"||p.status==="lact2") mj += LACTATION_ADD_MJ[p.status];
  return Math.round(mj*MJ_TO_KCAL);
}
function proteinaPRI_g(p){
  let g;
  if(p.age>=18) g = PROTEIN_PRI_ADULT*p.weight;
  else { const a = Math.max(1,Math.min(17,Math.round(p.age))); g = (PROTEIN_PRI_CHILD[a]||0.85)*p.weight; }
  if(p.status==="t1"||p.status==="t2"||p.status==="t3") g += PREGNANCY_PROT_ADD_G[p.status];
  if(p.status==="lact1"||p.status==="lact2") g += LACTATION_PROT_ADD_G[p.status];
  return Math.round(g*10)/10;
}

/* =========================================================================
   STATO APPLICAZIONE
   ========================================================================= */
let DIETS = {
  onnivora: {label:{it:"Onnivora equilibrata",fr:"Omnivore équilibrée"}, protein:20,carbs:50,fat:30},
  vegetariana: {label:{it:"Vegetariana",fr:"Végétarienne"}, protein:18,carbs:52,fat:30},
  vegana: {label:{it:"Vegana",fr:"Végane"}, protein:15,carbs:55,fat:30},
  mediterranea: {label:{it:"Mediterranea",fr:"Méditerranéenne"}, protein:16,carbs:54,fat:30},
  antiinfiammatoria: {label:{it:"Anti-infiammatoria",fr:"Anti-inflammatoire"}, protein:20,carbs:45,fat:35},
  paleo: {label:{it:"Paleo",fr:"Paléo"}, protein:30,carbs:25,fat:45},
  chetogenica: {label:{it:"Chetogenica",fr:"Cétogène"}, protein:20,carbs:10,fat:70}
};
function DLABEL(id){ const d=DIETS[id]; return d ? (d.label[LANG]||d.label.it) : id; }

// Guida pratica: descrizione + alimenti da preferire/limitare + nota, per ciascun tipo di dieta (IT/FR).
const DIET_GUIDE = {
  onnivora: { it:{
    desc: "Include tutti i gruppi alimentari, senza esclusioni sistematiche. L'equilibrio nasce dalla varietà e dalle proporzioni tra i gruppi, non dall'eliminazione di categorie di cibo.",
    prefer: ["Cereali integrali (pasta, riso, pane, farro, avena)","Legumi più volte a settimana","Verdura e frutta abbondanti e di stagione","Proteine variate: pesce, carni bianche, uova, legumi","Grassi buoni: olio EVO, frutta secca","Carne rossa e salumi con moderazione"],
    avoid: ["Carne rossa e processata in eccesso","Cibi ultra-processati e fritture frequenti","Zuccheri semplici e bevande zuccherate","Eccesso di sale aggiunto"],
    note: "È il pattern più flessibile e spesso il punto di partenza per personalizzazioni: adatta alla popolazione generale senza esigenze specifiche."
  }, fr:{
    desc: "Comprend tous les groupes alimentaires, sans exclusion systématique. L'équilibre naît de la variété et des proportions entre les groupes, pas de l'élimination de catégories d'aliments.",
    prefer: ["Céréales complètes (pâtes, riz, pain, épeautre, avoine)","Légumineuses plusieurs fois par semaine","Légumes et fruits abondants et de saison","Protéines variées : poisson, viandes blanches, œufs, légumineuses","Bonnes graisses : huile d'olive, fruits à coque","Viande rouge et charcuterie avec modération"],
    avoid: ["Viande rouge et transformée en excès","Aliments ultra-transformés et fritures fréquentes","Sucres simples et boissons sucrées","Excès de sel ajouté"],
    note: "C'est le modèle le plus flexible, souvent le point de départ pour une personnalisation : adapté à la population générale sans besoins spécifiques."
  }},
  vegetariana: { it:{
    desc: "Esclude carne e pesce, mantenendo uova e latticini (ovo-latto-vegetariana). Le fonti proteiche principali diventano legumi, uova e derivati del latte.",
    prefer: ["Legumi (fonte proteica cardine)","Cereali integrali","Uova","Latticini con moderazione","Tofu, tempeh, seitan","Frutta secca e semi","Verdura e frutta abbondanti"],
    avoid: ["Eccesso di formaggi grassi e stagionati","Dolci e prodotti da forno raffinati","Sostituti della carne molto processati"],
    note: "Attenzione a ferro (abbinare fonti di vitamina C per favorirne l'assorbimento), vitamina B12 e zinco: uova e latticini ne coprono parte del fabbisogno, ma vanno monitorati."
  }, fr:{
    desc: "Exclut la viande et le poisson, tout en conservant les œufs et les produits laitiers (ovo-lacto-végétarienne). Les légumineuses, les œufs et les produits laitiers deviennent les principales sources de protéines.",
    prefer: ["Légumineuses (source protéique clé)","Céréales complètes","Œufs","Produits laitiers avec modération","Tofu, tempeh, seitan","Fruits à coque et graines","Légumes et fruits abondants"],
    avoid: ["Excès de fromages gras et affinés","Pâtisseries et produits raffinés","Substituts de viande très transformés"],
    note: "Attention au fer (associer des sources de vitamine C pour favoriser son absorption), à la vitamine B12 et au zinc : les œufs et les produits laitiers en couvrent une partie, mais il faut les surveiller."
  }},
  vegana: { it:{
    desc: "Esclude ogni prodotto di origine animale: carne, pesce, uova, latticini, miele. Richiede una pianificazione attenta per coprire tutti i nutrienti critici.",
    prefer: ["Legumi in ogni pasto principale","Cereali integrali e pseudocereali (quinoa, grano saraceno)","Tofu, tempeh, seitan","Frutta secca e semi oleosi","Verdura e frutta ad ogni pasto","Bevande vegetali fortificate (calcio, B12)"],
    avoid: ["Prodotti vegani ultra-processati (sostituti industriali)","Eccesso di zuccheri e oli raffinati","Diete vegane troppo monotone o poco variate"],
    note: "Nutrienti da monitorare con attenzione: vitamina B12 (integrazione generalmente necessaria), vitamina D, ferro, calcio, iodio, omega-3 (EPA/DHA da alghe). Da impostare idealmente con supervisione professionale."
  }, fr:{
    desc: "Exclut tout produit d'origine animale : viande, poisson, œufs, produits laitiers, miel. Nécessite une planification attentive pour couvrir tous les nutriments critiques.",
    prefer: ["Légumineuses à chaque repas principal","Céréales complètes et pseudo-céréales (quinoa, sarrasin)","Tofu, tempeh, seitan","Fruits à coque et graines oléagineuses","Légumes et fruits à chaque repas","Boissons végétales enrichies (calcium, B12)"],
    avoid: ["Produits végans ultra-transformés (substituts industriels)","Excès de sucres et d'huiles raffinées","Régimes végans trop monotones ou peu variés"],
    note: "Nutriments à surveiller de près : vitamine B12 (supplémentation généralement nécessaire), vitamine D, fer, calcium, iode, oméga-3 (EPA/DHA d'origine algale). À mettre en place idéalement avec un accompagnement professionnel."
  }},
  mediterranea: { it:{
    desc: "Modello alimentare tradizionale dell'area mediterranea: molti vegetali, cereali integrali, olio EVO come grasso principale, pesce regolare, carne rossa saltuaria.",
    prefer: ["Verdura e frutta ad ogni pasto","Legumi più volte a settimana","Cereali integrali","Olio extravergine d'oliva a crudo","Pesce 2-3 volte a settimana","Frutta secca","Erbe aromatiche e spezie al posto del sale"],
    avoid: ["Carne rossa e salumi frequenti","Dolci e zuccheri aggiunti","Burro e grassi saturi in eccesso"],
    note: "Tra i modelli alimentari più studiati e supportati scientificamente per la prevenzione cardiovascolare e il benessere generale; sostenibile nel lungo periodo."
  }, fr:{
    desc: "Modèle alimentaire traditionnel de la zone méditerranéenne : beaucoup de végétaux, céréales complètes, huile d'olive comme matière grasse principale, poisson régulier, viande rouge occasionnelle.",
    prefer: ["Légumes et fruits à chaque repas","Légumineuses plusieurs fois par semaine","Céréales complètes","Huile d'olive extra vierge crue","Poisson 2-3 fois par semaine","Fruits à coque","Herbes aromatiques et épices à la place du sel"],
    avoid: ["Viande rouge et charcuterie fréquentes","Sucreries et sucres ajoutés","Beurre et graisses saturées en excès"],
    note: "L'un des modèles alimentaires les plus étudiés et soutenus scientifiquement pour la prévention cardiovasculaire et le bien-être général ; durable sur le long terme."
  }},
  antiinfiammatoria: { it:{
    desc: "Non è una dieta rigida ma un pattern alimentare che privilegia alimenti con potenziale azione anti-infiammatoria e limita quelli associati a un'infiammazione di basso grado.",
    prefer: ["Pesce azzurro e grasso (ricco di omega-3)","Verdura a foglia verde e verdura colorata","Frutti di bosco","Frutta secca e semi (chia, lino)","Olio extravergine d'oliva","Spezie come curcuma e zenzero","Pseudocereali (quinoa, grano saraceno, amaranto, teff) e cereali antichi (monococco, farro dicocco, kamut, miglio, avena)"],
    avoid: ["Zuccheri raffinati e dolci industriali","Farine raffinate","Fritture e cibi ultra-processati","Grassi trans","Eccesso di carne rossa e salumi","Alcol"],
    note: "Pensata come supporto nutrizionale in presenza di infiammazione cronica di basso grado: è un complemento, non un sostituto di eventuali terapie mediche."
  }, fr:{
    desc: "Ce n'est pas un régime rigide mais un modèle alimentaire qui privilégie les aliments à potentiel anti-inflammatoire et limite ceux associés à une inflammation chronique de bas grade.",
    prefer: ["Poisson gras (riche en oméga-3)","Légumes à feuilles vertes et légumes colorés","Fruits rouges","Fruits à coque et graines (chia, lin)","Huile d'olive extra vierge","Épices comme le curcuma et le gingembre","Pseudo-céréales (quinoa, sarrasin, amarante, teff) et céréales anciennes (petit épeautre, blé emmer, kamut, millet, avoine)"],
    avoid: ["Sucres raffinés et sucreries industrielles","Farines raffinées","Fritures et aliments ultra-transformés","Graisses trans","Excès de viande rouge et de charcuterie","Alcool"],
    note: "Pensé comme un soutien nutritionnel en cas d'inflammation chronique de bas grade : c'est un complément, pas un substitut à d'éventuels traitements médicaux."
  }},
  paleo: { it:{
    desc: "Si ispira all'alimentazione ancestrale pre-agricola: esclude cereali, legumi, latticini e zuccheri raffinati, privilegiando alimenti 'non trasformati'.",
    prefer: ["Carne e pesce","Uova","Verdura abbondante e varia","Frutta fresca","Frutta secca e semi","Grassi naturali: olio EVO, olio di cocco, avocado"],
    avoid: ["Cereali, anche integrali","Legumi","Latticini","Zucchero raffinato e dolcificanti industriali","Alimenti processati"],
    note: "Dieta piuttosto restrittiva: se non ben bilanciata può esporre a carenze di fibre e calcio (da compensare con abbondanza di verdura). Da valutare caso per caso."
  }, fr:{
    desc: "S'inspire de l'alimentation ancestrale pré-agricole : exclut céréales, légumineuses, produits laitiers et sucres raffinés, en privilégiant les aliments « non transformés ».",
    prefer: ["Viande et poisson","Œufs","Légumes abondants et variés","Fruits frais","Fruits à coque et graines","Graisses naturelles : huile d'olive, huile de coco, avocat"],
    avoid: ["Céréales, même complètes","Légumineuses","Produits laitiers","Sucre raffiné et édulcorants industriels","Aliments transformés"],
    note: "Régime assez restrictif : mal équilibré, il peut exposer à des carences en fibres et en calcium (à compenser par une abondance de légumes). À évaluer au cas par cas."
  }},
  chetogenica: { it:{
    desc: "Fortemente iperlipidica e ipoglucidica: riduce drasticamente i carboidrati per indurre uno stato di chetosi metabolica, con i grassi come fonte energetica principale.",
    prefer: ["Grassi buoni: olio EVO, avocado, frutta secca","Proteine moderate: carne, pesce, uova","Verdura a basso contenuto di carboidrati"],
    avoid: ["Cereali e derivati","Legumi","Frutta zuccherina e tuberi amidacei","Zuccheri in ogni forma"],
    note: "Dieta molto sbilanciata rispetto ai riferimenti EFSA generali (che indicano 45-60% di energia da carboidrati): va considerata solo in contesti specifici, tipicamente sotto stretto controllo medico/nutrizionale, e non per un uso prolungato senza supervisione."
  }, fr:{
    desc: "Fortement hyperlipidique et hypoglucidique : réduit drastiquement les glucides pour induire un état de cétose métabolique, avec les graisses comme source d'énergie principale.",
    prefer: ["Bonnes graisses : huile d'olive, avocat, fruits à coque","Protéines modérées : viande, poisson, œufs","Légumes pauvres en glucides"],
    avoid: ["Céréales et dérivés","Légumineuses","Fruits sucrés et tubercules amylacés","Sucres sous toutes leurs formes"],
    note: "Régime très déséquilibré par rapport aux repères EFSA généraux (qui indiquent 45-60% de l'énergie provenant des glucides) : à envisager uniquement dans des contextes spécifiques, généralement sous contrôle médical/nutritionnel strict, et non pour un usage prolongé sans supervision."
  }}
};
function generateGenericGuide(){
  return { desc:t('guideGenericDesc'), prefer:[t('guideGenericItem')], avoid:[t('guideGenericItem')], note:t('guideGenericNote') };
}
function getDietGuide(id){ return (DIET_GUIDE[id] && DIET_GUIDE[id][LANG]) || generateGenericGuide(); }
function renderDietGuide(){
  const holder = document.getElementById('guida-holder');
  if(!holder) return;
  holder.innerHTML = Object.keys(DIETS).map(id=>{
    const g = getDietGuide(id);
    const r = DIETS[id];
    return `<div class="card guide-card">
      <h3>${DLABEL(id)}</h3>
      <div class="macro-chip-row">
        <span class="macro-chip">${t('nutriProteine')} ${r.protein}%</span>
        <span class="macro-chip">${t('nutriCarboidrati')} ${r.carbs}%</span>
        <span class="macro-chip">${t('nutriLipidi')} ${r.fat}%</span>
      </div>
      <p class="desc">${g.desc}</p>
      <div class="guide-cols">
        <div><h5>${t('guidePreferTitle')}</h5><ul>${g.prefer.map(x=>`<li>${x}</li>`).join('')}</ul></div>
        <div><h5>${t('guideAvoidTitle')}</h5><ul>${g.avoid.map(x=>`<li>${x}</li>`).join('')}</ul></div>
      </div>
      <div class="guide-note">${g.note}</div>
    </div>`;
  }).join('');
}
function downloadTXT_guida(){
  let txt = t('guideTxtHeader')+"\n================================\n\n";
  Object.keys(DIETS).forEach(id=>{
    const g = getDietGuide(id);
    const r = DIETS[id];
    txt += `${DLABEL(id).toUpperCase()}  (${t('nutriProteine')} ${r.protein}% \u00b7 ${t('nutriCarboidrati')} ${r.carbs}% \u00b7 ${t('nutriLipidi')} ${r.fat}%)\n`;
    txt += `${g.desc}\n\n`;
    txt += t('guideTxtPrefer')+"\n" + g.prefer.map(x=>"  - "+x).join("\n") + "\n\n";
    txt += t('guideTxtAvoid')+"\n" + g.avoid.map(x=>"  - "+x).join("\n") + "\n\n";
    txt += t('guideTxtNote')+" " + g.note + "\n\n----------------------------------------\n\n";
  });
  downloadBlob(txt,'Guida_alle_diete.txt','text/plain');
}

// alimento: {id,name,cat,kcal,prot,carb,fat,fiber,salt,tags:{vegan,veg,omni,paleo,ai}}
let FOODS = [];
let RECIPES = [];
let MEALS = {colazione:[],pranzo:[],cena:[],spuntino:[]};
let WEEKPLAN = { weekStart: null, slots: {} };
let currentTargets = null;
let recipeDraft = [];
let recipeDraftImage = null;
let foodIdSeq = 1;

function T(vegan,veg,omni,paleo,ai){return {vegan:!!vegan,veg:!!veg,omni:!!omni,paleo:!!paleo,ai:!!ai};}
function addFood(name_it,name_fr,cat_it,cat_fr,kcal,prot,carb,fat,fiber,salt,tags){
  FOODS.push({id:foodIdSeq++,name_it,name_fr,cat_it,cat_fr,kcal,prot,carb,fat,fiber,salt,tags,custom:false});
}
function FNAME(f){ return f.custom ? f.name_it : (f['name_'+LANG]||f.name_it); }
function FCAT(f){ return f.custom ? f.cat_it : (f['cat_'+LANG]||f.cat_it); }

const RAW_FOODS = [
["Pasta di semola (cruda)","Pâtes de semoule (crues)","Cereali","Céréales",353,12.0,71.0,1.5,3.0,0.01,T(1,1,1,0,0)],
["Pasta integrale (cruda)","Pâtes complètes (crues)","Cereali","Céréales",337,13.0,66.0,2.5,8.0,0.01,T(1,1,1,0,1)],
["Riso bianco (crudo)","Riz blanc (cru)","Cereali","Céréales",332,6.7,80.0,0.6,1.0,0.0,T(1,1,1,0,0)],
["Riso integrale (crudo)","Riz complet (cru)","Cereali","Céréales",337,7.5,77.0,2.7,3.5,0.0,T(1,1,1,0,1)],
["Pane bianco","Pain blanc","Cereali","Céréales",267,8.1,53.0,1.0,2.7,1.4,T(1,1,1,0,0)],
["Pane integrale","Pain complet","Cereali","Céréales",224,9.0,42.0,2.0,7.0,1.3,T(1,1,1,0,1)],
["Farro perlato (crudo)","Épeautre perlé (cru)","Cereali","Céréales",335,13.0,67.0,2.5,8.0,0.02,T(1,1,1,0,1)],
["Quinoa (cruda)","Quinoa (cru)","Pseudocereali","Pseudo-céréales",368,14.1,64.2,6.1,7.0,0.01,T(1,1,1,1,1)],
["Avena in fiocchi","Flocons d\'avoine","Cereali","Céréales",389,16.9,66.3,6.9,10.6,0.01,T(1,1,1,0,1)],
["Orzo perlato (crudo)","Orge perlé (crue)","Cereali","Céréales",350,10.4,73.5,1.2,9.0,0.02,T(1,1,1,0,1)],
["Grano saraceno (crudo)","Sarrasin (cru)","Pseudocereali","Pseudo-céréales",343,13.3,71.5,3.4,10.0,0.0,T(1,1,1,1,1)],
["Amaranto (crudo)","Amarante (crue)","Pseudocereali","Pseudo-céréales",371,13.6,65.2,7.0,6.7,0.02,T(1,1,1,1,1)],
["Teff (crudo)","Teff (cru)","Pseudocereali","Pseudo-céréales",367,13.3,73.0,2.4,8.0,0.01,T(1,1,1,1,1)],
["Monococco / piccolo farro (crudo)","Petit épeautre / engrain (cru)","Cereali","Céréales",340,14.7,65.4,2.5,9.0,0.01,T(1,1,1,0,1)],
["Farro dicocco (crudo)","Blé amidonnier / emmer (cru)","Cereali","Céréales",335,14.6,67.1,2.4,9.0,0.01,T(1,1,1,0,1)],
["Kamut (grano khorasan, crudo)","Kamut (blé de Khorasan, cru)","Cereali","Céréales",337,14.7,70.0,2.2,9.5,0.01,T(1,1,1,0,1)],
["Miglio (crudo)","Millet (cru)","Cereali","Céréales",378,11.0,72.9,4.2,8.5,0.005,T(1,1,1,0,1)],
["Farina di mais (polenta)","Farine de maïs (polenta)","Cereali","Céréales",353,8.5,73.0,3.5,5.0,0.0,T(1,1,1,0,0)],
["Cous cous (crudo)","Couscous (cru)","Cereali","Céréales",376,12.8,72.4,1.1,5.0,0.01,T(1,1,1,0,0)],
["Lenticchie secche (crude)","Lentilles sèches (crues)","Legumi","Légumineuses",353,25.0,52.0,1.0,17.0,0.01,T(1,1,1,0,1)],
["Ceci secchi (crudi)","Pois chiches secs (crus)","Legumi","Légumineuses",364,20.9,54.3,6.0,17.0,0.02,T(1,1,1,0,1)],
["Fagioli borlotti secchi","Haricots borlotti secs","Legumi","Légumineuses",337,23.6,44.0,1.6,17.0,0.01,T(1,1,1,0,1)],
["Fagioli cannellini secchi","Haricots blancs secs","Legumi","Légumineuses",333,23.4,45.0,1.5,17.0,0.01,T(1,1,1,0,1)],
["Piselli secchi","Pois secs","Legumi","Légumineuses",340,24.0,53.0,1.5,16.5,0.02,T(1,1,1,0,1)],
["Soia secca","Soja sec","Legumi","Légumineuses",446,36.0,30.0,20.0,15.0,0.0,T(1,1,1,0,1)],
["Tofu","Tofu","Legumi","Légumineuses",76,8.0,0.7,4.8,0.3,0.01,T(1,1,1,0,1)],
["Tempeh","Tempeh","Legumi","Légumineuses",190,19.0,9.0,11.0,5.0,0.01,T(1,1,1,0,1)],
["Edamame","Edamame","Legumi","Légumineuses",122,11.9,10.0,5.2,5.2,0.0,T(1,1,1,0,1)],
["Petto di pollo","Blanc de poulet","Carne","Viande",165,31.0,0.0,3.6,0.0,0.1,T(0,0,1,1,1)],
["Petto di tacchino","Blanc de dinde","Carne","Viande",157,29.0,0.0,3.0,0.0,0.1,T(0,0,1,1,1)],
["Manzo magro","Bœuf maigre","Carne","Viande",187,26.0,0.0,9.0,0.0,0.1,T(0,0,1,1,0)],
["Vitello","Veau","Carne","Viande",172,25.0,0.0,7.0,0.0,0.1,T(0,0,1,1,0)],
["Lonza di maiale","Filet de porc","Carne","Viande",143,22.0,0.0,5.7,0.0,0.1,T(0,0,1,1,0)],
["Agnello","Agneau","Carne","Viande",294,25.0,0.0,21.0,0.0,0.1,T(0,0,1,1,0)],
["Prosciutto crudo","Jambon cru","Carne","Viande",268,28.0,0.0,17.0,0.0,4.7,T(0,0,1,0,0)],
["Prosciutto cotto","Jambon cuit","Carne","Viande",145,20.0,1.0,7.0,0.0,2.5,T(0,0,1,0,0)],
["Bresaola","Bresaola","Carne","Viande",151,32.0,0.0,2.6,0.0,3.0,T(0,0,1,1,0)],
["Salame","Saucisson","Carne","Viande",380,25.0,1.0,31.0,0.0,3.6,T(0,0,1,0,0)],
["Coniglio","Lapin","Carne","Viande",173,21.0,0.0,9.0,0.0,0.1,T(0,0,1,1,1)],
["Salmone","Saumon","Pesce","Poisson",208,20.0,0.0,13.0,0.0,0.1,T(0,0,1,1,1)],
["Tonno fresco","Thon frais","Pesce","Poisson",144,23.3,0.0,4.9,0.0,0.1,T(0,0,1,1,1)],
["Tonno in scatola sott\'olio (sgocc.)","Thon en conserve à l\'huile (égoutté)","Pesce","Poisson",189,25.0,0.0,10.0,0.0,0.6,T(0,0,1,1,0)],
["Merluzzo / Nasello","Cabillaud / Merlu","Pesce","Poisson",82,17.8,0.0,0.7,0.0,0.2,T(0,0,1,1,1)],
["Orata","Dorade","Pesce","Poisson",121,20.0,0.0,4.5,0.0,0.1,T(0,0,1,1,1)],
["Branzino","Bar (loup de mer)","Pesce","Poisson",97,18.4,0.0,2.5,0.0,0.1,T(0,0,1,1,1)],
["Sgombro","Maquereau","Pesce","Poisson",205,19.0,0.0,14.0,0.0,0.15,T(0,0,1,1,1)],
["Sardine","Sardines","Pesce","Poisson",135,20.0,0.0,5.8,0.0,0.4,T(0,0,1,1,1)],
["Gamberi","Crevettes","Pesce","Poisson",71,17.6,0.9,0.5,0.0,0.4,T(0,0,1,1,1)],
["Polpo","Poulpe","Pesce","Poisson",82,14.9,2.2,1.0,0.0,0.3,T(0,0,1,1,1)],
["Cozze","Moules","Pesce","Poisson",86,11.9,3.7,2.2,0.0,0.6,T(0,0,1,1,1)],
["Uovo intero","Œuf entier","Uova","Œufs",143,12.6,0.7,9.5,0.0,0.35,T(0,1,1,1,1)],
["Albume d\'uovo","Blanc d\'œuf","Uova","Œufs",48,10.9,0.7,0.2,0.0,0.3,T(0,1,1,1,1)],
["Latte intero","Lait entier","Latticini","Produits laitiers",64,3.3,4.9,3.6,0.0,0.1,T(0,1,1,0,0)],
["Latte scremato","Lait écrémé","Latticini","Produits laitiers",36,3.4,5.0,0.2,0.0,0.1,T(0,1,1,0,0)],
["Yogurt bianco intero","Yaourt nature entier","Latticini","Produits laitiers",66,3.5,4.7,3.6,0.0,0.1,T(0,1,1,0,1)],
["Yogurt greco 0%","Yaourt grec 0%","Latticini","Produits laitiers",59,10.0,3.6,0.4,0.0,0.1,T(0,1,1,0,1)],
["Mozzarella","Mozzarella","Latticini","Produits laitiers",253,18.7,0.7,19.5,0.0,0.6,T(0,1,1,0,0)],
["Parmigiano Reggiano","Parmesan","Latticini","Produits laitiers",392,33.0,0.0,28.0,0.0,1.4,T(0,1,1,0,0)],
["Ricotta","Ricotta","Latticini","Produits laitiers",146,8.8,3.5,10.9,0.0,0.15,T(0,1,1,0,0)],
["Feta","Feta","Latticini","Produits laitiers",264,14.2,4.1,21.3,0.0,3.0,T(0,1,1,0,0)],
["Mela","Pomme","Frutta","Fruits",52,0.3,13.8,0.2,2.4,0.0,T(1,1,1,1,1)],
["Banana","Banane","Frutta","Fruits",89,1.1,22.8,0.3,2.6,0.0,T(1,1,1,0,1)],
["Arancia","Orange","Frutta","Fruits",47,0.9,11.8,0.1,2.4,0.0,T(1,1,1,1,1)],
["Pera","Poire","Frutta","Fruits",57,0.4,15.2,0.1,3.1,0.0,T(1,1,1,1,1)],
["Fragole","Fraises","Frutta","Fruits",32,0.7,7.7,0.3,2.0,0.0,T(1,1,1,1,1)],
["Mirtilli","Myrtilles","Frutta","Fruits",57,0.7,14.5,0.3,2.4,0.0,T(1,1,1,1,1)],
["Kiwi","Kiwi","Frutta","Fruits",61,1.1,14.7,0.5,3.0,0.0,T(1,1,1,1,1)],
["Uva","Raisin","Frutta","Fruits",69,0.7,18.1,0.2,0.9,0.0,T(1,1,1,1,1)],
["Ananas","Ananas","Frutta","Fruits",50,0.5,13.1,0.1,1.4,0.0,T(1,1,1,1,1)],
["Avocado","Avocat","Frutta","Fruits",160,2.0,8.5,14.7,6.7,0.01,T(1,1,1,1,1)],
["Limone","Citron","Frutta","Fruits",29,1.1,9.3,0.3,2.8,0.0,T(1,1,1,1,1)],
["Pesca","Pêche","Frutta","Fruits",39,0.9,9.5,0.3,1.5,0.0,T(1,1,1,1,1)],
["Anguria","Pastèque","Frutta","Fruits",30,0.6,7.6,0.2,0.4,0.0,T(1,1,1,1,1)],
["Melone","Melon","Frutta","Fruits",34,0.8,8.2,0.2,0.9,0.0,T(1,1,1,1,1)],
["Fichi","Figues","Frutta","Fruits",74,0.8,19.2,0.3,2.9,0.0,T(1,1,1,1,1)],
["Spinaci","Épinards","Verdura","Légumes",23,2.9,3.6,0.4,2.2,0.1,T(1,1,1,1,1)],
["Broccoli","Brocolis","Verdura","Légumes",34,2.8,6.6,0.4,2.6,0.03,T(1,1,1,1,1)],
["Zucchine","Courgettes","Verdura","Légumes",17,1.2,3.1,0.3,1.0,0.01,T(1,1,1,1,1)],
["Carote","Carottes","Verdura","Légumes",41,0.9,9.6,0.2,2.8,0.07,T(1,1,1,1,1)],
["Pomodori","Tomates","Verdura","Légumes",18,0.9,3.9,0.2,1.2,0.005,T(1,1,1,1,1)],
["Insalata / lattuga","Salade / laitue","Verdura","Légumes",15,1.4,2.9,0.2,1.3,0.03,T(1,1,1,1,1)],
["Peperoni","Poivrons","Verdura","Légumes",31,1.0,6.0,0.3,2.1,0.0,T(1,1,1,1,1)],
["Melanzane","Aubergines","Verdura","Légumes",25,1.0,5.9,0.2,3.0,0.0,T(1,1,1,1,1)],
["Cavolfiore","Chou-fleur","Verdura","Légumes",25,1.9,5.0,0.3,2.0,0.03,T(1,1,1,1,1)],
["Cavolo verza","Chou frisé","Verdura","Légumes",27,1.8,5.8,0.2,2.5,0.03,T(1,1,1,1,1)],
["Cetrioli","Concombres","Verdura","Légumes",15,0.7,3.6,0.1,0.5,0.0,T(1,1,1,1,1)],
["Patate","Pommes de terre","Verdura","Légumes",77,2.0,17.5,0.1,2.1,0.007,T(1,1,1,0,0)],
["Patate dolci","Patates douces","Verdura","Légumes",86,1.6,20.1,0.1,3.0,0.05,T(1,1,1,1,1)],
["Cipolla","Oignon","Verdura","Légumes",40,1.1,9.3,0.1,1.7,0.004,T(1,1,1,1,1)],
["Aglio","Ail","Verdura","Légumes",149,6.4,33.1,0.5,2.1,0.017,T(1,1,1,1,1)],
["Zucca","Courge / potiron","Verdura","Légumes",26,1.0,6.5,0.1,0.5,0.0,T(1,1,1,1,1)],
["Finocchio","Fenouil","Verdura","Légumes",31,1.2,7.3,0.2,3.1,0.06,T(1,1,1,1,1)],
["Asparagi","Asperges","Verdura","Légumes",20,2.2,3.9,0.1,2.1,0.002,T(1,1,1,1,1)],
["Funghi champignon","Champignons de Paris","Verdura","Légumes",22,3.1,3.3,0.3,1.0,0.005,T(1,1,1,1,1)],
["Rucola","Roquette","Verdura","Légumes",25,2.6,3.7,0.7,1.6,0.02,T(1,1,1,1,1)],
["Mandorle","Amandes","Frutta secca","Fruits à coque",579,21.2,21.6,49.9,12.5,0.001,T(1,1,1,1,1)],
["Noci","Noix","Frutta secca","Fruits à coque",654,15.2,13.7,65.2,6.7,0.002,T(1,1,1,1,1)],
["Nocciole","Noisettes","Frutta secca","Fruits à coque",628,15.0,16.7,60.8,9.7,0.0,T(1,1,1,1,1)],
["Pistacchi","Pistaches","Frutta secca","Fruits à coque",560,20.2,27.2,45.3,10.3,0.001,T(1,1,1,1,1)],
["Anacardi","Noix de cajou","Frutta secca","Fruits à coque",553,18.2,30.2,43.9,3.3,0.012,T(1,1,1,1,1)],
["Semi di chia","Graines de chia","Frutta secca","Fruits à coque",486,16.5,42.1,30.7,34.4,0.0,T(1,1,1,1,1)],
["Semi di lino","Graines de lin","Frutta secca","Fruits à coque",534,18.3,28.9,42.2,27.3,0.0,T(1,1,1,1,1)],
["Semi di zucca","Graines de courge","Frutta secca","Fruits à coque",559,30.2,10.7,49.0,6.0,0.018,T(1,1,1,1,1)],
["Olio extravergine d\'oliva","Huile d\'olive extra vierge","Grassi","Matières grasses",899,0.0,0.0,99.9,0.0,0.0,T(1,1,1,1,1)],
["Olio di semi di girasole","Huile de tournesol","Grassi","Matières grasses",899,0.0,0.0,99.9,0.0,0.0,T(1,1,1,1,0)],
["Olio di cocco","Huile de coco","Grassi","Matières grasses",862,0.0,0.0,99.1,0.0,0.0,T(1,1,1,1,1)],
["Burro","Beurre","Grassi","Matières grasses",717,0.9,0.1,81.1,0.0,0.02,T(0,1,1,0,0)],
["Ghee (burro chiarificato)","Ghee (beurre clarifié)","Grassi","Matières grasses",900,0.0,0.0,99.8,0.0,0.0,T(0,1,1,1,0)],
["Zucchero bianco","Sucre blanc","Dolcificanti","Édulcorants",400,0.0,100.0,0.0,0.0,0.0,T(1,1,1,0,0)],
["Miele","Miel","Dolcificanti","Édulcorants",304,0.3,82.4,0.0,0.2,0.01,T(0,1,1,1,0)],
["Sciroppo d\'acero","Sirop d\'érable","Dolcificanti","Édulcorants",260,0.0,67.0,0.0,0.0,0.01,T(1,1,1,0,0)],
["Cioccolato fondente 70%","Chocolat noir 70%","Dolcificanti","Édulcorants",598,7.8,45.9,42.6,10.9,0.02,T(1,1,1,0,1)],
["Bevanda di soia","Boisson au soja","Bevande","Boissons",33,3.3,0.9,1.8,0.4,0.05,T(1,1,1,0,1)],
["Bevanda di mandorla","Boisson à l\'amande","Bevande","Boissons",24,0.4,3.0,1.1,0.4,0.1,T(1,1,1,0,1)],
["Bevanda di avena","Boisson à l\'avoine","Bevande","Boissons",47,1.0,7.0,1.5,0.8,0.1,T(1,1,1,0,1)],
["Caffè (tazzina)","Café (tasse)","Bevande","Boissons",2,0.1,0.0,0.0,0.0,0.0,T(1,1,1,1,1)],
["Tè verde","Thé vert","Bevande","Boissons",1,0.0,0.2,0.0,0.0,0.0,T(1,1,1,1,1)],
["Curcuma in polvere","Curcuma en poudre","Spezie","Épices",354,7.8,64.9,9.9,21.1,0.038,T(1,1,1,1,1)],
["Zenzero fresco","Gingembre frais","Spezie","Épices",80,1.8,17.8,0.8,2.0,0.013,T(1,1,1,1,1)],
["Cannella in polvere","Cannelle en poudre","Spezie","Épices",247,4.0,80.6,1.2,53.1,0.01,T(1,1,1,1,1)],
["Pepe nero","Poivre noir","Spezie","Épices",251,10.4,63.9,3.3,25.3,0.02,T(1,1,1,1,1)],
["Sale marino","Sel marin","Spezie","Épices",0,0,0,0,0,97,T(1,1,1,1,0)],
];
RAW_FOODS.forEach(f=>addFood(...f));

/* =========================================================================
   TABS
   ========================================================================= */
document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-'+btn.dataset.tab).classList.add('active');
  });
});

/* =========================================================================
   TAB 1 — PROFILO
   ========================================================================= */
function populateDietSelect(){
  const sel = document.getElementById('p-diet');
  const prev = sel.value;
  sel.innerHTML = Object.keys(DIETS).map(k=>`<option value="${k}">${DLABEL(k)}</option>`).join('');
  if(prev && DIETS[prev]) sel.value = prev;
}
populateDietSelect();

let lastProfileInputs = null;
function calcolaFabbisogni(){
  lastProfileInputs = {
    sex: document.getElementById('p-sex').value,
    age: parseFloat(document.getElementById('p-age').value)||30,
    weight: parseFloat(document.getElementById('p-weight').value)||65,
    height: parseFloat(document.getElementById('p-height').value)||165,
    laf: parseFloat(document.getElementById('p-laf').value),
    status: document.getElementById('p-status').value,
    dietId: document.getElementById('p-diet').value
  };
  const p = lastProfileInputs;
  const kcal = energiaAR_kcal(p);
  const ratio = DIETS[p.dietId];
  const protG = Math.round(kcal*ratio.protein/100/4);
  const carbG = Math.round(kcal*ratio.carbs/100/4);
  const fatG = Math.round(kcal*ratio.fat/100/9);
  const fiberG = fibreAI(p.age);
  const protPRI = proteinaPRI_g(p);
  currentTargets = {p,kcal,protG,carbG,fatG,fiberG,protPRI,dietId:p.dietId};
  renderResults();
  refreshMealsView();
  renderRecipes();
}
function renderResults(){
  if(!currentTargets) return;
  const {p,kcal,protG,carbG,fatG,fiberG,protPRI} = currentTargets;
  const ratio = DIETS[currentTargets.dietId];
  document.getElementById('risultati-card').style.display='block';
  document.getElementById('nutri-label').innerHTML = `
    <div class="big-title">${t('nutriBigTitle')}</div>
    <div class="row sub"><span>${t('nutriSexAge')}</span><span>${p.sex==='F'?t('optF'):t('optM')} · ${p.age} ${t('anniSuffix')}</span></div>
    <div class="row sub"><span>${t('nutriWeightHeight')}</span><span>${p.weight} kg · ${p.height} cm</span></div>
    <div class="row sub"><span>${t('nutriLAF')}</span><span>${p.laf}</span></div>
    <div class="row sub"><span>${t('nutriDiet')}</span><span>${DLABEL(currentTargets.dietId)}</span></div>
    <div class="kcal-row"><span>${t('nutriEnergia')}</span><span>${kcal} kcal</span></div>
    <div class="row"><span>${t('nutriProteine')}</span><span>${protG} g</span></div>
    <div class="row"><span>${t('nutriCarboidrati')}</span><span>${carbG} g</span></div>
    <div class="row"><span>${t('nutriLipidi')}</span><span>${fatG} g</span></div>
    <div class="row"><span>${t('nutriFibre')}</span><span>${fiberG} g</span></div>
  `;
  const ringsHtml = [
    [t('nutriProteine'),ratio.protein,'#33513E'],[t('nutriCarboidrati'),ratio.carbs,'#B9843F'],[t('nutriLipidi'),ratio.fat,'#93A98E']
  ].map(([lbl,pct,col])=>{
    const r=30,c=2*Math.PI*r,off=c*(1-pct/100);
    return `<div class="ring-item"><svg width="76" height="76" viewBox="0 0 76 76">
      <circle cx="38" cy="38" r="${r}" fill="none" stroke="#EBE6D6" stroke-width="9"/>
      <circle cx="38" cy="38" r="${r}" fill="none" stroke="${col}" stroke-width="9" stroke-dasharray="${c}" stroke-dashoffset="${off}" stroke-linecap="round" transform="rotate(-90 38 38)"/>
      <text x="38" y="43" text-anchor="middle" font-family="IBM Plex Mono" font-size="15" fill="${col}" font-weight="600">${pct}%</text>
    </svg><div class="lbl">${lbl}</div></div>`;
  }).join('');
  document.getElementById('rings-holder').innerHTML = ringsHtml;
  document.getElementById('bar-p').style.width='100%';
  document.getElementById('bar-c').style.width='100%';
  document.getElementById('bar-f').style.width='100%';
  document.getElementById('figs-p').textContent = protG+' g ('+ratio.protein+'%)';
  document.getElementById('figs-c').textContent = carbG+' g ('+ratio.carbs+'%)';
  document.getElementById('figs-f').textContent = fatG+' g ('+ratio.fat+'%)';
  document.getElementById('ref-note').innerHTML = `${t('refNoteProt')} <b>${protPRI} ${t('gPerDay')}</b>. ${t('refNoteFiber')} <b>${fiberG} ${t('gPerDay')}</b>. ${t('refNoteSalt')}`;
}

function downloadTXT_profilo(){
  if(!currentTargets) return;
  const ct = currentTargets;
  const txt = `BUSSOLA NUTRIZIONALE — ${t('nutriBigTitle')}\n`+
`================================================\n`+
`${t('fieldSex')}: ${ct.p.sex}   ${t('fieldAge')}: ${ct.p.age}   ${t('fieldWeight')}: ${ct.p.weight} kg   ${t('fieldHeight')}: ${ct.p.height} cm\n`+
`${t('nutriLAF')}: ${ct.p.laf}   ${t('nutriDiet')}: ${DLABEL(ct.dietId)}\n\n`+
`${t('nutriEnergia')}: ${ct.kcal} kcal/giorno\n`+
`${t('nutriProteine')}: ${ct.protG} g\n${t('nutriCarboidrati')}: ${ct.carbG} g\n${t('nutriLipidi')}: ${ct.fatG} g\n${t('nutriFibre')}: ${ct.fiberG} g\n`+
`${t('refNoteProt')} ${ct.protPRI} ${t('gPerDay')}\n`+
`\nFonte: EFSA Dietary Reference Values (PDF caricato dall'utente).`;
  downloadBlob(txt,'Fabbisogni_nutrizionali.txt','text/plain');
}

/* =========================================================================
   TAB 2 — DIETE
   ========================================================================= */
function renderDietTable(){
  const tbl = document.getElementById('diet-table');
  let html = `<thead><tr><th>${t('dietColName')}</th><th class="num">${t('dietColProt')}</th><th class="num">${t('dietColCarb')}</th><th class="num">${t('dietColFat')}</th><th class="no-print"></th></tr></thead><tbody>`;
  Object.entries(DIETS).forEach(([id,r])=>{
    html += `<tr>
      <td>${DLABEL(id)}</td>
      <td class="num"><input type="number" value="${r.protein}" style="width:64px" onchange="updateDiet('${id}','protein',this.value)"></td>
      <td class="num"><input type="number" value="${r.carbs}" style="width:64px" onchange="updateDiet('${id}','carbs',this.value)"></td>
      <td class="num"><input type="number" value="${r.fat}" style="width:64px" onchange="updateDiet('${id}','fat',this.value)"></td>
      <td class="no-print"><button class="btn btn-danger btn-sm" onclick="removeDiet('${id}')">${t('btnRemoveDiet')}</button></td>
    </tr>`;
  });
  html += '</tbody>';
  tbl.innerHTML = html;
  renderDietGuide();
}
function updateDiet(id,field,val){ DIETS[id][field]=parseFloat(val)||0; renderDietGuide(); renderRecipes(); if(currentTargets && currentTargets.dietId===id){ renderResults(); refreshMealsView(); } }
function removeDiet(id){ delete DIETS[id]; renderDietTable(); populateDietSelect(); }
function addDietType(){
  const name = prompt(t('promptNewDiet'));
  if(!name) return;
  const id = 'custom_'+Date.now();
  DIETS[id] = {label:{it:name,fr:name}, protein:20,carbs:50,fat:30};
  renderDietTable(); populateDietSelect();
}
renderDietTable();

/* =========================================================================
   TAB 3 — ALIMENTI
   ========================================================================= */
function refreshCatFilter(){
  const cats = [...new Set(FOODS.map(f=>FCAT(f)))].sort();
  const prev = document.getElementById('food-cat-filter').value;
  document.getElementById('food-cat-filter').innerHTML = `<option value="">${t('allCategories')}</option>`+cats.map(c=>`<option value="${c}">${c}</option>`).join('');
  if(cats.includes(prev)) document.getElementById('food-cat-filter').value = prev;
}
/* =========================================================================
   VISUALIZZAZIONI — grafico a torta, grafico a barre, stato di equilibrio
   ========================================================================= */
const MACRO_COLORS = { protein:'#33513E', carbs:'#B9843F', fat:'#93A98E' };
function macroPctFromGrams(protG,carbG,fatG){
  const kcal = protG*4 + carbG*4 + fatG*9;
  if(kcal<=0) return {protein:0,carbs:0,fat:0};
  return { protein: protG*4/kcal*100, carbs: carbG*4/kcal*100, fat: fatG*9/kcal*100 };
}
function donutSVG(segments, size, strokeWidth){
  size = size||120; strokeWidth = strokeWidth||18;
  const r = (size-strokeWidth)/2, c = 2*Math.PI*r;
  let offset = 0;
  const arcs = segments.filter(s=>s.pct>0.2).map(seg=>{
    const len = c*Math.min(seg.pct,100)/100;
    const dashoffset = -offset;
    offset += len;
    return `<circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${seg.color}" stroke-width="${strokeWidth}" stroke-dasharray="${len} ${c-len}" stroke-dashoffset="${dashoffset}" stroke-linecap="butt" transform="rotate(-90 ${size/2} ${size/2})"/>`;
  }).join('');
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="#EBE6D6" stroke-width="${strokeWidth}"/>
    ${arcs}
  </svg>`;
}
function donutLegendHTML(segments){
  return `<div class="donut-legend">${segments.map(s=>`<div class="dl-item"><span class="dl-dot" style="background:${s.color}"></span>${s.label} <b>${s.pct.toFixed(0)}%</b></div>`).join('')}</div>`;
}
function macroSegments(pctObj){
  return [
    {label:t('nutriProteine'), pct:pctObj.protein, color:MACRO_COLORS.protein},
    {label:t('nutriCarboidrati'), pct:pctObj.carbs, color:MACRO_COLORS.carbs},
    {label:t('nutriLipidi'), pct:pctObj.fat, color:MACRO_COLORS.fat}
  ];
}
function classifyBalance(actualPct, targetPct, tol){
  tol = tol===undefined?8:tol;
  const diffs = { protein: actualPct.protein-targetPct.protein, carbs: actualPct.carbs-targetPct.carbs, fat: actualPct.fat-targetPct.fat };
  let worstKey='protein', worstVal=0;
  Object.entries(diffs).forEach(([k,v])=>{ if(Math.abs(v)>Math.abs(worstVal)){ worstVal=v; worstKey=k; } });
  const balanced = Math.abs(worstVal)<=tol;
  return { balanced, diffs, worstKey, worstVal };
}
function balanceBadgeHTML(status){
  if(status.balanced) return `<span class="badge green">✓ ${t('balanceOk')}</span>`;
  const dir = status.worstVal>0 ? 'More':'Less';
  const macroCap = {protein:'Protein',carbs:'Carb',fat:'Fat'}[status.worstKey];
  return `<span class="badge badge-warn">⚠ ${t('balanceOff')} — ${t('balance'+dir+macroCap)}</span>`;
}
function barChartSVG(items){
  const barW=24, gap=6, groupGap=28, top=14, chartH=110, leftPad=10;
  const groupW = barW*2+gap+groupGap;
  const maxVal = Math.max(1, ...items.map(i=>Math.max(i.actual,i.target)))*1.15;
  const w = leftPad + items.length*groupW + 10;
  let bars='', labels='';
  items.forEach((it,i)=>{
    const x = leftPad + i*groupW;
    const hA = (it.actual/maxVal)*chartH, hT = (it.target/maxVal)*chartH;
    bars += `<rect x="${x}" y="${top+chartH-hA}" width="${barW}" height="${Math.max(hA,1)}" fill="${MACRO_COLORS.protein}" rx="3"/>`;
    bars += `<rect x="${x+barW+gap}" y="${top+chartH-hT}" width="${barW}" height="${Math.max(hT,1)}" fill="${MACRO_COLORS.carbs}" rx="3"/>`;
    labels += `<text x="${x+barW+gap/2}" y="${top+chartH+16}" text-anchor="middle" font-size="10.5" font-family="Inter" fill="#5B6357">${it.label}</text>`;
  });
  return `<svg viewBox="0 0 ${w} ${top+chartH+24}" width="100%" style="max-width:${w}px" height="${top+chartH+24}">
    <line x1="4" y1="${top+chartH}" x2="${w-4}" y2="${top+chartH}" stroke="#DCD5C2"/>
    ${bars}${labels}
  </svg>`;
}
function barChartLegendHTML(){
  return `<div class="donut-legend"><div class="dl-item"><span class="dl-dot" style="background:${MACRO_COLORS.protein}"></span>${t('balanceYourDay')}</div><div class="dl-item"><span class="dl-dot" style="background:${MACRO_COLORS.carbs}"></span>${t('balanceTargetDiet')}</div></div>`;
}

function dietBadges(tags){
  const map = {vegan:t('badgeVegan'),veg:t('badgeVeg'),omni:t('badgeOmni'),paleo:t('badgePaleo'),ai:t('badgeAI')};
  return Object.entries(map).filter(([k])=>tags[k]).map(([k,l])=>`<span class="badge ${k==='vegan'||k==='ai'?'green':'gray'}">${l}</span>`).join(' ');
}
function renderFoodTable(){
  refreshCatFilter();
  const q = document.getElementById('food-search-input').value.toLowerCase();
  const cat = document.getElementById('food-cat-filter').value;
  const diet = document.getElementById('food-diet-filter').value;
  document.getElementById('food-diet-filter').innerHTML = `<option value="">${t('allDiets')}</option><option value="vegan">${t('badgeVegan')}</option><option value="veg">${t('badgeVeg')}</option><option value="omni">${t('badgeOmni')}</option><option value="paleo">${t('badgePaleo')}</option><option value="ai">${t('fmAI')}</option>`;
  document.getElementById('food-diet-filter').value = diet;
  let list = FOODS.filter(f=> (!q||FNAME(f).toLowerCase().includes(q)) && (!cat||FCAT(f)===cat) && (!diet||f.tags[diet]) );
  document.getElementById('food-count-badge').textContent = FOODS.length+' '+t('foodsCountSuffix');
  document.getElementById('food-tbody').innerHTML = list.map(f=>`
    <tr>
      <td>${FNAME(f)}</td><td>${FCAT(f)}</td>
      <td class="num">${f.kcal}</td><td class="num">${f.prot}</td><td class="num">${f.carb}</td>
      <td class="num">${f.fat}</td><td class="num">${f.fiber}</td><td class="num">${f.salt}</td>
      <td>${dietBadges(f.tags)}</td>
      <td class="no-print"><button class="btn btn-ghost btn-sm" onclick="editFood(${f.id})">✎</button> <button class="btn btn-danger btn-sm" onclick="deleteFood(${f.id})">✕</button></td>
    </tr>`).join('');
}
renderFoodTable();

function openFoodModal(){
  document.getElementById('food-modal-title').textContent=t('modalNewFoodTitle');
  ['fm-id','fm-name','fm-cat','fm-kcal','fm-prot','fm-carb','fm-fat','fm-fiber','fm-salt'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('fm-vegan').checked=false; document.getElementById('fm-veg').checked=false;
  document.getElementById('fm-omni').checked=true; document.getElementById('fm-paleo').checked=false; document.getElementById('fm-ai').checked=false;
  document.getElementById('food-modal-bg').classList.add('active');
}
function editFood(id){
  const f = FOODS.find(x=>x.id===id); if(!f) return;
  document.getElementById('food-modal-title').textContent=t('modalEditFoodTitle');
  document.getElementById('fm-id').value=f.id;
  document.getElementById('fm-name').value=FNAME(f);
  document.getElementById('fm-cat').value=FCAT(f);
  document.getElementById('fm-kcal').value=f.kcal;
  document.getElementById('fm-prot').value=f.prot;
  document.getElementById('fm-carb').value=f.carb;
  document.getElementById('fm-fat').value=f.fat;
  document.getElementById('fm-fiber').value=f.fiber;
  document.getElementById('fm-salt').value=f.salt;
  document.getElementById('fm-vegan').checked=f.tags.vegan;
  document.getElementById('fm-veg').checked=f.tags.veg;
  document.getElementById('fm-omni').checked=f.tags.omni;
  document.getElementById('fm-paleo').checked=f.tags.paleo;
  document.getElementById('fm-ai').checked=f.tags.ai;
  document.getElementById('food-modal-bg').classList.add('active');
}
function deleteFood(id){
  if(!confirm(t('confirmDeleteFood'))) return;
  FOODS = FOODS.filter(f=>f.id!==id); renderFoodTable();
}
function saveFoodModal(){
  const id = document.getElementById('fm-id').value;
  const nameVal = document.getElementById('fm-name').value.trim();
  const catVal = document.getElementById('fm-cat').value.trim()||t('otherCategory');
  const data = {
    name_it: nameVal, name_fr: nameVal, cat_it: catVal, cat_fr: catVal, custom:true,
    kcal: parseFloat(document.getElementById('fm-kcal').value)||0,
    prot: parseFloat(document.getElementById('fm-prot').value)||0,
    carb: parseFloat(document.getElementById('fm-carb').value)||0,
    fat: parseFloat(document.getElementById('fm-fat').value)||0,
    fiber: parseFloat(document.getElementById('fm-fiber').value)||0,
    salt: parseFloat(document.getElementById('fm-salt').value)||0,
    tags: {
      vegan: document.getElementById('fm-vegan').checked,
      veg: document.getElementById('fm-veg').checked,
      omni: document.getElementById('fm-omni').checked,
      paleo: document.getElementById('fm-paleo').checked,
      ai: document.getElementById('fm-ai').checked
    }
  };
  if(!data.name_it){ alert(t('alertFoodName')); return; }
  if(id){ const f = FOODS.find(x=>x.id==id); Object.assign(f,data); }
  else { FOODS.push({id:foodIdSeq++,...data}); }
  closeModal('food-modal-bg'); renderFoodTable();
}
function closeModal(id){ document.getElementById(id).classList.remove('active'); }

function importTXT(evt){
  const file = evt.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = e=>{
    const lines = e.target.result.split('\n').map(l=>l.trim()).filter(Boolean);
    let count=0;
    lines.forEach(line=>{
      const parts = line.split(';').map(p=>p.trim());
      if(parts.length<8) return;
      const [name,cat,kcal,prot,carb,fat,fiber,salt] = parts;
      if(name.toLowerCase()==='nome'||name.toLowerCase()==='nom') return; // skip header row
      FOODS.push({id:foodIdSeq++,name_it:name,name_fr:name,cat_it:cat||t('importedCategory'),cat_fr:cat||t('importedCategory'),custom:true,
        kcal:parseFloat(kcal)||0,prot:parseFloat(prot)||0,
        carb:parseFloat(carb)||0,fat:parseFloat(fat)||0,fiber:parseFloat(fiber)||0,salt:parseFloat(salt)||0,
        tags:T(1,1,1,0,0)});
      count++;
    });
    alert(count+' '+t('alertImportedSuffix'));
    renderFoodTable();
    evt.target.value='';
  };
  reader.readAsText(file);
}
function exportFoodsTXT(){
  let txt = 'nome;categoria;kcal;proteine;carboidrati;lipidi;fibre;sale\n';
  FOODS.forEach(f=>{ txt += `${FNAME(f)};${FCAT(f)};${f.kcal};${f.prot};${f.carb};${f.fat};${f.fiber};${f.salt}\n`; });
  downloadBlob(txt,'database_alimenti.txt','text/plain');
}
function exportFoodsJSON(){ downloadBlob(JSON.stringify(FOODS,null,2),'database_alimenti.json','application/json'); }

/* =========================================================================
   TAB 4 — RICETTE
   ========================================================================= */
function openRecipeModal(){
  recipeDraft = [];
  recipeDraftImage = null;
  document.getElementById('rm-name').value=''; document.getElementById('rm-servings').value=4;
  document.getElementById('rm-steps').value='';
  document.getElementById('rm-image').value='';
  document.getElementById('rm-image-preview').innerHTML='';
  document.getElementById('rm-food-select').innerHTML = FOODS.map(f=>`<option value="${f.id}">${FNAME(f)}</option>`).join('');
  renderRecipeDraft();
  document.getElementById('recipe-modal-bg').classList.add('active');
}
function handleRecipeImageUpload(evt){
  const file = evt.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = e=>{
    recipeDraftImage = e.target.result;
    document.getElementById('rm-image-preview').innerHTML = `<img src="${recipeDraftImage}" alt="">`;
  };
  reader.readAsDataURL(file);
}
function addIngredientToRecipeDraft(){
  const fid = parseInt(document.getElementById('rm-food-select').value);
  const grams = parseFloat(document.getElementById('rm-food-grams').value);
  if(!grams||grams<=0){ alert(t('alertQty')); return; }
  recipeDraft.push({foodId:fid,grams});
  document.getElementById('rm-food-grams').value='';
  renderRecipeDraft();
}
function renderRecipeDraft(){
  document.getElementById('rm-ingredient-list').innerHTML = recipeDraft.map((it,idx)=>{
    const f = FOODS.find(x=>x.id===it.foodId);
    return `<li><span>${f?FNAME(f):'?'}</span><span class="r">${it.grams} g <button class="btn btn-danger btn-sm" onclick="recipeDraft.splice(${idx},1);renderRecipeDraft()">✕</button></span></li>`;
  }).join('') || `<li class="empty-hint">${t('noIngredients')}</li>`;
}
function saveRecipeModal(){
  const name = document.getElementById('rm-name').value.trim();
  const servings = parseFloat(document.getElementById('rm-servings').value)||1;
  const stepsRaw = document.getElementById('rm-steps').value;
  const steps = stepsRaw.split('\n').map(s=>s.trim()).filter(Boolean).map(s=>s.replace(/^\d+[.)]\s*/,''));
  if(!name||recipeDraft.length===0){ alert(t('alertRecipeNameIngr')); return; }
  RECIPES.push({id:'r'+Date.now(),name,servings,items:[...recipeDraft],steps,image:recipeDraftImage});
  closeModal('recipe-modal-bg');
  renderRecipes();
}
function computeRecipeTotals(recipe){
  const tot = {kcal:0,prot:0,carb:0,fat:0,fiber:0,salt:0};
  recipe.items.forEach(it=>{
    const f = FOODS.find(x=>x.id===it.foodId); if(!f) return;
    const factor = it.grams/100;
    tot.kcal += f.kcal*factor; tot.prot += f.prot*factor; tot.carb += f.carb*factor;
    tot.fat += f.fat*factor; tot.fiber += f.fiber*factor; tot.salt += f.salt*factor;
  });
  return tot;
}
function renderRecipes(){
  const holder = document.getElementById('recipes-holder');
  if(RECIPES.length===0){ holder.innerHTML=`<p class="empty-hint">${t('noRecipes')}</p>`; return; }
  holder.innerHTML = RECIPES.map(r=>{
    const tot = computeRecipeTotals(r);
    const per = {}; Object.keys(tot).forEach(k=>per[k]=(tot[k]/r.servings));
    const steps = r.steps||[];
    const isActive = SPEECH.recipeId===r.id;
    const stepsHtml = steps.length ? `
      <div class="prep-block">
        <h5 class="prep-title">${t('prepTitle')}</h5>
        <div class="player-bar no-print">
          <button class="btn btn-accent btn-sm" onclick="playPauseRecipe('${r.id}')" id="play-btn-${r.id}">${isActive && SPEECH.speaking && !SPEECH.paused ? '⏸ '+t('btnPause') : '▶ '+t('btnPlay')}</button>
          <button class="btn btn-ghost btn-sm" onclick="restartRecipe('${r.id}')">⏮ ${t('btnRestart')}</button>
          <span class="player-step" id="player-step-${r.id}">${isActive ? (SPEECH.stepIndex+1) : 1} / ${steps.length}</span>
        </div>
        <ol class="prep-steps" id="prep-steps-${r.id}">${steps.map((s,i)=>`<li class="${isActive && SPEECH.stepIndex===i ? 'current-step':''}" id="prep-step-${r.id}-${i}">${s}</li>`).join('')}</ol>
      </div>` : '';
    const perPct = macroPctFromGrams(per.prot,per.carb,per.fat);
    let balanceHtml;
    if(currentTargets){
      const ratio = DIETS[currentTargets.dietId];
      const targetPct = {protein:ratio.protein, carbs:ratio.carbs, fat:ratio.fat};
      const status = classifyBalance(perPct, targetPct);
      balanceHtml = `<div class="balance-block">
        <h5>${t('compositionTitle')} — ${t('perServingLabel')} ${balanceBadgeHTML(status)}</h5>
        <div class="donut-row">
          <div class="donut-col">${donutSVG(macroSegments(perPct), 96, 15)}<span class="dc-label">${t('recipeBalanceVsDiet')} ${DLABEL(currentTargets.dietId)}</span></div>
          ${donutLegendHTML(macroSegments(perPct))}
        </div>
      </div>`;
    } else {
      balanceHtml = `<div class="balance-block">
        <h5>${t('compositionTitle')} — ${t('perServingLabel')}</h5>
        <div class="donut-row"><div class="donut-col">${donutSVG(macroSegments(perPct), 96, 15)}</div>${donutLegendHTML(macroSegments(perPct))}</div>
        <p class="small" style="margin-top:6px;">${t('noTargetForRecipe')}</p>
      </div>`;
    }
    return `<div class="recipe-card">
      <h4>${r.name} <span class="small">(${r.servings} ${t('servingsSuffix')})</span></h4>
      ${r.image ? `<img class="recipe-photo" src="${r.image}" alt="${r.name}">` : ''}
      <p class="small ingredients-inline">${t('ingredientsLabel')}: ${r.items.map(it=>{const f=FOODS.find(x=>x.id===it.foodId);return (f?FNAME(f):'?')+' '+it.grams+'g';}).join(', ')}</p>
      <div class="ingredients-print">
        <h5>${t('ingredientsLabel')}</h5>
        <ul>${r.items.map(it=>{const f=FOODS.find(x=>x.id===it.foodId);return `<li>${f?FNAME(f):'?'} — ${it.grams} g</li>`;}).join('')}</ul>
      </div>
      ${stepsHtml}
      <h5 class="prep-title" style="margin-top:14px;">${t('nutriValuesTitle')}</h5>
      <table><thead><tr><th></th><th class="num">${t('colKcal')}</th><th class="num">${t('colProt')}</th><th class="num">${t('colCarb')}</th><th class="num">${t('colFat')}</th><th class="num">${t('colFiber')}</th><th class="num">${t('colSalt')}</th></tr></thead>
      <tbody>
        <tr><td>${t('totalRecipeLabel')}</td><td class="num">${tot.kcal.toFixed(0)}</td><td class="num">${tot.prot.toFixed(1)}</td><td class="num">${tot.carb.toFixed(1)}</td><td class="num">${tot.fat.toFixed(1)}</td><td class="num">${tot.fiber.toFixed(1)}</td><td class="num">${tot.salt.toFixed(2)}</td></tr>
        <tr><td>${t('perServingLabel')}</td><td class="num">${per.kcal.toFixed(0)}</td><td class="num">${per.prot.toFixed(1)}</td><td class="num">${per.carb.toFixed(1)}</td><td class="num">${per.fat.toFixed(1)}</td><td class="num">${per.fiber.toFixed(1)}</td><td class="num">${per.salt.toFixed(2)}</td></tr>
      </tbody></table>
      ${balanceHtml}
      <div class="btn-row no-print"><button class="btn btn-danger btn-sm" onclick="deleteRecipe('${r.id}')">${t('btnDeleteRecipe')}</button></div>
    </div>`;
  }).join('');
}
function deleteRecipe(id){ if(SPEECH.recipeId===id) stopSpeech(); RECIPES = RECIPES.filter(r=>r.id!==id); renderRecipes(); }
function exportRecipesJSON(){ downloadBlob(JSON.stringify(RECIPES,null,2),'ricette.json','application/json'); }

/* =========================================================================
   LETTORE VOCALE PREPARAZIONE RICETTE (Web Speech API)
   ========================================================================= */
const SPEECH = { recipeId:null, stepIndex:0, speaking:false, paused:false };
function getRecipeSteps(id){ const r = RECIPES.find(x=>x.id===id); return r ? (r.steps||[]) : []; }
function updatePlayerUI(id){
  const steps = getRecipeSteps(id);
  const btn = document.getElementById('play-btn-'+id);
  if(btn) btn.textContent = (SPEECH.recipeId===id && SPEECH.speaking && !SPEECH.paused) ? ('⏸ '+t('btnPause')) : ('▶ '+t('btnPlay'));
  const stepEl = document.getElementById('player-step-'+id);
  if(stepEl) stepEl.textContent = (SPEECH.recipeId===id ? SPEECH.stepIndex+1 : 1) + ' / ' + steps.length;
  steps.forEach((s,i)=>{
    const li = document.getElementById('prep-step-'+id+'-'+i);
    if(li) li.classList.toggle('current-step', SPEECH.recipeId===id && SPEECH.stepIndex===i);
  });
}
function speakCurrentStep(id){
  const steps = getRecipeSteps(id);
  if(SPEECH.stepIndex>=steps.length){ stopSpeech(); return; }
  const utt = new SpeechSynthesisUtterance(steps[SPEECH.stepIndex]);
  utt.lang = LANG==='fr' ? 'fr-FR' : 'it-IT';
  utt.onend = ()=>{
    if(SPEECH.recipeId!==id || SPEECH.paused) return;
    SPEECH.stepIndex++;
    if(SPEECH.stepIndex<steps.length){ updatePlayerUI(id); speakCurrentStep(id); }
    else { stopSpeech(); }
  };
  window.speechSynthesis.speak(utt);
  SPEECH.speaking = true; SPEECH.paused = false;
  updatePlayerUI(id);
}
function playPauseRecipe(id){
  if(!('speechSynthesis' in window)){ alert(t('alertNoSpeech')); return; }
  if(SPEECH.recipeId!==id){
    window.speechSynthesis.cancel();
    SPEECH.recipeId = id; SPEECH.stepIndex = 0; SPEECH.speaking=false; SPEECH.paused=false;
    speakCurrentStep(id);
    return;
  }
  if(SPEECH.speaking && !SPEECH.paused){
    window.speechSynthesis.pause(); SPEECH.paused = true; updatePlayerUI(id);
  } else if(SPEECH.paused){
    window.speechSynthesis.resume(); SPEECH.paused = false; updatePlayerUI(id);
  } else {
    speakCurrentStep(id);
  }
}
function restartRecipe(id){
  window.speechSynthesis.cancel();
  SPEECH.recipeId = id; SPEECH.stepIndex = 0; SPEECH.speaking=false; SPEECH.paused=false;
  speakCurrentStep(id);
}
function stopSpeech(){
  window.speechSynthesis.cancel();
  const prevId = SPEECH.recipeId;
  SPEECH.recipeId=null; SPEECH.stepIndex=0; SPEECH.speaking=false; SPEECH.paused=false;
  if(prevId) updatePlayerUI(prevId);
}


/* =========================================================================
   TAB 6 — DIARIO
   ========================================================================= */
document.getElementById('diary-date').textContent = new Date().toLocaleDateString('it-IT',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
const MEAL_KEY_I18N = {colazione:'mealColazione',pranzo:'mealPranzo',cena:'mealCena',spuntino:'mealSpuntino'};

function computeMealItemTotals(item){
  if(item.type==='food'){
    const f = FOODS.find(x=>x.id===item.foodId); if(!f) return {kcal:0,prot:0,carb:0,fat:0,fiber:0,salt:0,label:'?'};
    const fac = item.grams/100;
    return {kcal:f.kcal*fac,prot:f.prot*fac,carb:f.carb*fac,fat:f.fat*fac,fiber:f.fiber*fac,salt:f.salt*fac,label:`${FNAME(f)} — ${item.grams} g`};
  } else {
    const r = RECIPES.find(x=>x.id===item.recipeId); if(!r) return {kcal:0,prot:0,carb:0,fat:0,fiber:0,salt:0,label:'?'};
    const tot = computeRecipeTotals(r);
    const fac = item.servings/r.servings;
    return {kcal:tot.kcal*fac,prot:tot.prot*fac,carb:tot.carb*fac,fat:tot.fat*fac,fiber:tot.fiber*fac,salt:tot.salt*fac,label:`${r.name} — ${item.servings} ${t('servingsSuffix')}`};
  }
}
function refreshMealsView(){
  const holder = document.getElementById('meals-holder');
  holder.innerHTML = Object.keys(MEALS).map(mk=>{
    const items = MEALS[mk];
    const rows = items.map((it,idx)=>{
      const it2 = computeMealItemTotals(it);
      return `<li><span>${it2.label}</span><span class="r">${it2.kcal.toFixed(0)} kcal <button class="btn btn-danger btn-sm no-print" onclick="removeMealItem('${mk}',${idx})">✕</button></span></li>`;
    }).join('') || `<li class="empty-hint">${t('noFoodAdded')}</li>`;
    return `<div class="meal-block"><h4>${t(MEAL_KEY_I18N[mk])}</h4><ul class="meal-items">${rows}</ul></div>`;
  }).join('');
  renderDiarySummary();
}
function removeMealItem(mk,idx){ MEALS[mk].splice(idx,1); refreshMealsView(); }
function clearDiary(){ if(!confirm(t('confirmClearDiary'))) return; Object.keys(MEALS).forEach(k=>MEALS[k]=[]); refreshMealsView(); }

function dayTotals(){
  const tot = {kcal:0,prot:0,carb:0,fat:0,fiber:0,salt:0};
  Object.values(MEALS).forEach(items=>items.forEach(it=>{
    const it2 = computeMealItemTotals(it);
    tot.kcal+=it2.kcal; tot.prot+=it2.prot; tot.carb+=it2.carb; tot.fat+=it2.fat; tot.fiber+=it2.fiber; tot.salt+=it2.salt;
  }));
  return tot;
}
function renderDiarySummary(){
  const tot = dayTotals();
  const holder = document.getElementById('diary-summary');
  const actualPct = macroPctFromGrams(tot.prot,tot.carb,tot.fat);
  if(!currentTargets){
    holder.innerHTML = `<p class="empty-hint">${t('diaryNoTargetHint')}</p>
      <table><thead><tr><th></th><th class="num">${t('colKcal')}</th><th class="num">${t('colProt')}</th><th class="num">${t('colCarb')}</th><th class="num">${t('colFat')}</th><th class="num">${t('colFiber')}</th><th class="num">${t('colSalt')}</th></tr></thead>
      <tbody><tr><td>${t('rowTotalDay')}</td><td class="num">${tot.kcal.toFixed(0)}</td><td class="num">${tot.prot.toFixed(1)}</td><td class="num">${tot.carb.toFixed(1)}</td><td class="num">${tot.fat.toFixed(1)}</td><td class="num">${tot.fiber.toFixed(1)}</td><td class="num">${tot.salt.toFixed(2)}</td></tr></tbody></table>
      <div class="balance-block"><h5>${t('compositionTitle')}</h5>
        <div class="donut-row"><div class="donut-col">${donutSVG(macroSegments(actualPct))}</div>${donutLegendHTML(macroSegments(actualPct))}</div>
      </div>
      <p class="small" style="margin-top:10px;">${t('balanceComputeFirst')}</p>`;
    return;
  }
  const tgt = currentTargets;
  function row(label,val,target,unit){
    const pct = target>0?Math.min(140,(val/target)*100):0;
    const over = val>target;
    return `<div class="macro-target-row"><div class="lbl">${label}</div><div class="track"><div class="progress ${over?'over':''}"><div style="width:${Math.min(100,pct)}%"></div></div></div><div class="figs">${val.toFixed(1)} / ${target}${unit}</div></div>`;
  }
  const ratio = DIETS[tgt.dietId];
  const targetPct = {protein:ratio.protein, carbs:ratio.carbs, fat:ratio.fat};
  const status = classifyBalance(actualPct, targetPct);
  const barItems = [
    {label:t('nutriEnergia'), actual:tot.kcal, target:tgt.kcal},
    {label:t('nutriProteine'), actual:tot.prot, target:tgt.protG},
    {label:t('nutriCarboidrati'), actual:tot.carb, target:tgt.carbG},
    {label:t('nutriLipidi'), actual:tot.fat, target:tgt.fatG},
    {label:t('nutriFibre'), actual:tot.fiber, target:tgt.fiberG}
  ];
  holder.innerHTML = row(t('nutriEnergia'),tot.kcal,tgt.kcal,' kcal')+row(t('nutriProteine'),tot.prot,tgt.protG,' g')+row(t('nutriCarboidrati'),tot.carb,tgt.carbG,' g')+row(t('nutriLipidi'),tot.fat,tgt.fatG,' g')+row(t('nutriFibre'),tot.fiber,tgt.fiberG,' g')
    + `<p class="small" style="margin-top:10px;">${t('saltNotePre')} <b>${tot.salt.toFixed(2)} g</b> ${t('saltNotePost')}</p>`
    + `<div class="balance-block">
        <h5>${t('balanceSectionTitle')} ${balanceBadgeHTML(status)}</h5>
        <div class="donut-row">
          <div class="donut-col">${donutSVG(macroSegments(actualPct))}<span class="dc-label">${t('balanceYourDay')}</span></div>
          <div class="donut-col">${donutSVG(macroSegments(targetPct))}<span class="dc-label">${t('balanceTargetDiet')} — ${DLABEL(tgt.dietId)}</span></div>
          ${donutLegendHTML(macroSegments(actualPct))}
        </div>
      </div>
      <div class="balance-block">
        <h5>${t('barChartTitle')}</h5>
        <div class="donut-row">${barChartSVG(barItems)}${barChartLegendHTML()}</div>
      </div>`;
}

function openAddFoodToMeal(){
  document.getElementById('mm-food-select').innerHTML = FOODS.map(f=>`<option value="${f.id}">${FNAME(f)}</option>`).join('');
  document.getElementById('mm-recipe-select').innerHTML = RECIPES.map(r=>`<option value="${r.id}">${r.name}</option>`).join('') || `<option value="">${t('noRecipeSaved')}</option>`;
  document.getElementById('mm-type').value='food'; toggleMealType();
  document.getElementById('meal-modal-bg').classList.add('active');
}
function toggleMealType(){
  const isFood = document.getElementById('mm-type').value==='food';
  document.getElementById('mm-food-field').style.display = isFood?'block':'none';
  document.getElementById('mm-food-grams-field').style.display = isFood?'block':'none';
  document.getElementById('mm-recipe-field').style.display = isFood?'none':'block';
  document.getElementById('mm-recipe-servings-field').style.display = isFood?'none':'block';
}
function confirmAddToMeal(){
  const meal = document.getElementById('mm-meal').value;
  const isFood = document.getElementById('mm-type').value==='food';
  if(isFood){
    const foodId = parseInt(document.getElementById('mm-food-select').value);
    const grams = parseFloat(document.getElementById('mm-grams').value)||0;
    if(grams<=0){ alert(t('alertQty')); return; }
    MEALS[meal].push({type:'food',foodId,grams});
  } else {
    const recipeId = document.getElementById('mm-recipe-select').value;
    if(!recipeId){ alert(t('alertCreateRecipeFirst')); return; }
    const servings = parseFloat(document.getElementById('mm-servings').value)||1;
    MEALS[meal].push({type:'recipe',recipeId,servings});
  }
  closeModal('meal-modal-bg');
  refreshMealsView();
}
function exportDiaryJSON(){ downloadBlob(JSON.stringify({date:new Date().toISOString(),meals:MEALS,totals:dayTotals(),targets:currentTargets},null,2),'diario.json','application/json'); }
function downloadTXT_diario(){
  let txt = `DIARIO ALIMENTARE — ${new Date().toLocaleDateString(LANG==='fr'?'fr-FR':'it-IT')}\n=========================================\n\n`;
  Object.keys(MEALS).forEach(mk=>{
    txt += t(MEAL_KEY_I18N[mk]).toUpperCase()+'\n';
    if(MEALS[mk].length===0) txt+='  (-)\n';
    MEALS[mk].forEach(it=>{ const it2=computeMealItemTotals(it); txt += `  - ${it2.label} — ${it2.kcal.toFixed(0)} kcal, P ${it2.prot.toFixed(1)}g, C ${it2.carb.toFixed(1)}g, L ${it2.fat.toFixed(1)}g\n`; });
    txt += '\n';
  });
  const tot = dayTotals();
  txt += `${t('rowTotalDay').toUpperCase()}: ${tot.kcal.toFixed(0)} kcal, ${t('nutriProteine')} ${tot.prot.toFixed(1)}g, ${t('nutriCarboidrati')} ${tot.carb.toFixed(1)}g, ${t('nutriLipidi')} ${tot.fat.toFixed(1)}g, ${t('nutriFibre')} ${tot.fiber.toFixed(1)}g\n`;
  if(currentTargets){ txt += `${t('diarySummaryTitle')}: ${currentTargets.kcal} kcal, P ${currentTargets.protG}g, C ${currentTargets.carbG}g, L ${currentTargets.fatG}g, ${t('nutriFibre')} ${currentTargets.fiberG}g\n`; }
  downloadBlob(txt,'diario_alimentare.txt','text/plain');
}

/* =========================================================================
   TAB 7 — PIANO SETTIMANALE
   ========================================================================= */
const COURSES = ['antipasto','primo','secondo','contorno','dessert','bevanda'];
const COURSE_I18N = {antipasto:'courseAntipasto',primo:'coursePrimo',secondo:'courseSecondo',contorno:'courseContorno',dessert:'courseDessert',bevanda:'courseBevanda'};
const PLAN_MEALS = ['colazione','spuntino','pranzo','cena'];
let PLAN_CTX = null; // {dayIdx, meal, course}

function isoMonday(d){
  const date = new Date(d);
  const day = date.getDay(); // 0=Sun..6=Sat
  const diff = (day===0 ? -6 : 1-day);
  date.setDate(date.getDate()+diff);
  date.setHours(0,0,0,0);
  return date;
}
function toISODate(d){ return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
if(!WEEKPLAN.weekStart) WEEKPLAN.weekStart = toISODate(isoMonday(new Date()));

function planKey(dayIdx,meal,course){ return dayIdx+'_'+meal+'_'+(course||'none'); }
function getPlanSlot(dayIdx,meal,course){ const k=planKey(dayIdx,meal,course); if(!WEEKPLAN.slots[k]) WEEKPLAN.slots[k]=[]; return WEEKPLAN.slots[k]; }

function shiftWeek(deltaWeeks){
  const d = new Date(WEEKPLAN.weekStart);
  d.setDate(d.getDate()+deltaWeeks*7);
  WEEKPLAN.weekStart = toISODate(isoMonday(d));
  renderWeekPlan();
}

function weekDayDate(dayIdx){
  const d = new Date(WEEKPLAN.weekStart);
  d.setDate(d.getDate()+dayIdx);
  return d;
}

function renderWeekPlan(){
  const locale = LANG==='fr' ? 'fr-FR' : 'it-IT';
  const startD = weekDayDate(0), endD = weekDayDate(6);
  const fmtRange = (d)=>d.toLocaleDateString(locale,{day:'numeric',month:'short'});
  document.getElementById('plan-week-label').textContent = `${t('planWeekOf')} ${fmtRange(startD)} – ${fmtRange(endD)} ${endD.getFullYear()}`;

  let head = `<thead><tr><th></th>`;
  for(let i=0;i<7;i++){
    const d = weekDayDate(i);
    const wd = d.toLocaleDateString(locale,{weekday:'long'});
    const dm = d.toLocaleDateString(locale,{day:'numeric',month:'long'});
    head += `<th class="plan-day-cell">${wd.charAt(0).toUpperCase()+wd.slice(1)}<span class="d">${dm}</span></th>`;
  }
  head += `</tr></thead>`;

  let body = '<tbody>';
  PLAN_MEALS.forEach(meal=>{
    body += `<tr><th>${t(MEAL_KEY_I18N[meal])}</th>`;
    for(let dayIdx=0; dayIdx<7; dayIdx++){
      body += '<td>';
      if(meal==='pranzo'||meal==='cena'){
        const options = COURSES.map(c=>`<option value="${c}">${t(COURSE_I18N[c])}</option>`).join('');
        body += `<div class="plan-course-picker"><select id="plan-course-sel-${dayIdx}-${meal}">${options}</select><button class="plan-add-btn" onclick="openPlanAddFromSelect(${dayIdx},'${meal}')">+</button></div>`;
        let combined = [];
        COURSES.forEach(course=>{ getPlanSlot(dayIdx,meal,course).forEach((it,idx)=>combined.push({course,idx,it})); });
        body += combined.length ? `<ul class="plan-combined-list">${combined.map(ci=>{ const it2=computeMealItemTotals(ci.it); return `<li><span><b>${t(COURSE_I18N[ci.course])}:</b> ${it2.label}</span><button class="plan-rm-btn" onclick="removePlanItem(${dayIdx},'${meal}','${ci.course}',${ci.idx})">✕</button></li>`; }).join('')}</ul>` : `<p class="empty-hint" style="font-size:11.5px;margin:0;">${t('planNoItems')}</p>`;
      } else {
        const slot = getPlanSlot(dayIdx,meal,null);
        body += `<div class="plan-course-picker"><button class="plan-add-btn" onclick="openPlanAdd(${dayIdx},'${meal}',null)">+</button></div>`;
        body += slot.length ? `<ul class="plan-combined-list">${slot.map((it,idx)=>{ const it2=computeMealItemTotals(it); return `<li><span>${it2.label}</span><button class="plan-rm-btn" onclick="removePlanItem(${dayIdx},'${meal}',null,${idx})">✕</button></li>`; }).join('')}</ul>` : `<p class="empty-hint" style="font-size:11.5px;margin:0;">${t('planNoItems')}</p>`;
      }
      body += '</td>';
    }
    body += '</tr>';
  });
  // day total row
  body += `<tr><th>${t('planDayTotal')}</th>`;
  for(let dayIdx=0; dayIdx<7; dayIdx++){
    let kcalSum = 0;
    PLAN_MEALS.forEach(meal=>{
      if(meal==='pranzo'||meal==='cena'){
        COURSES.forEach(course=>{ getPlanSlot(dayIdx,meal,course).forEach(it=>{ kcalSum += computeMealItemTotals(it).kcal; }); });
      } else {
        getPlanSlot(dayIdx,meal,null).forEach(it=>{ kcalSum += computeMealItemTotals(it).kcal; });
      }
    });
    body += `<td class="plan-day-total">${kcalSum.toFixed(0)} kcal</td>`;
  }
  body += `</tr></tbody>`;

  document.getElementById('plan-table').className = 'plan-table';
  document.getElementById('plan-table').innerHTML = head + body;
}

function openPlanAddFromSelect(dayIdx,meal){
  const sel = document.getElementById(`plan-course-sel-${dayIdx}-${meal}`);
  openPlanAdd(dayIdx, meal, sel ? sel.value : COURSES[0]);
}
function openPlanAdd(dayIdx,meal,course){
  PLAN_CTX = {dayIdx,meal,course};
  const d = weekDayDate(dayIdx);
  const locale = LANG==='fr' ? 'fr-FR' : 'it-IT';
  const wd = d.toLocaleDateString(locale,{weekday:'long',day:'numeric',month:'long'});
  document.getElementById('plan-modal-context').textContent = `${wd.charAt(0).toUpperCase()+wd.slice(1)} · ${t(MEAL_KEY_I18N[meal])}${course ? ' · '+t(COURSE_I18N[course]) : ''}`;
  document.getElementById('pm-food-select').innerHTML = FOODS.map(f=>`<option value="${f.id}">${FNAME(f)}</option>`).join('');
  document.getElementById('pm-recipe-select').innerHTML = RECIPES.map(r=>`<option value="${r.id}">${r.name}</option>`).join('') || `<option value="">${t('noRecipeSaved')}</option>`;
  document.getElementById('pm-type').value='food'; togglePlanType();
  document.getElementById('plan-modal-bg').classList.add('active');
}
function togglePlanType(){
  const isFood = document.getElementById('pm-type').value==='food';
  document.getElementById('pm-food-field').style.display = isFood?'block':'none';
  document.getElementById('pm-food-grams-field').style.display = isFood?'block':'none';
  document.getElementById('pm-recipe-field').style.display = isFood?'none':'block';
  document.getElementById('pm-recipe-servings-field').style.display = isFood?'none':'block';
}
function confirmAddToPlan(){
  if(!PLAN_CTX) return;
  const isFood = document.getElementById('pm-type').value==='food';
  const slot = getPlanSlot(PLAN_CTX.dayIdx, PLAN_CTX.meal, PLAN_CTX.course);
  if(isFood){
    const foodId = parseInt(document.getElementById('pm-food-select').value);
    const grams = parseFloat(document.getElementById('pm-grams').value)||0;
    if(grams<=0){ alert(t('alertQty')); return; }
    slot.push({type:'food',foodId,grams});
  } else {
    const recipeId = document.getElementById('pm-recipe-select').value;
    if(!recipeId){ alert(t('alertCreateRecipeFirst')); return; }
    const servings = parseFloat(document.getElementById('pm-servings').value)||1;
    slot.push({type:'recipe',recipeId,servings});
  }
  closeModal('plan-modal-bg');
  renderWeekPlan();
}
function removePlanItem(dayIdx,meal,course,idx){
  getPlanSlot(dayIdx,meal,course).splice(idx,1);
  renderWeekPlan();
}
function downloadTXT_plan(){
  const locale = LANG==='fr' ? 'fr-FR' : 'it-IT';
  let txt = `${t('planTxtHeader')}\n================================\n\n`;
  for(let dayIdx=0; dayIdx<7; dayIdx++){
    const d = weekDayDate(dayIdx);
    const wd = d.toLocaleDateString(locale,{weekday:'long',day:'numeric',month:'long'});
    txt += (wd.charAt(0).toUpperCase()+wd.slice(1))+'\n';
    PLAN_MEALS.forEach(meal=>{
      txt += '  '+t(MEAL_KEY_I18N[meal])+':\n';
      if(meal==='pranzo'||meal==='cena'){
        COURSES.forEach(course=>{
          const slot = getPlanSlot(dayIdx,meal,course);
          if(slot.length){ txt += '    '+t(COURSE_I18N[course])+': '+slot.map(it=>computeMealItemTotals(it).label).join(', ')+'\n'; }
        });
      } else {
        const slot = getPlanSlot(dayIdx,meal,null);
        if(slot.length){ txt += '    '+slot.map(it=>computeMealItemTotals(it).label).join(', ')+'\n'; }
      }
    });
    txt += '\n';
  }
  downloadBlob(txt,'piano_settimanale.txt','text/plain');
}

/* =========================================================================
   EXPORT UTILS
   ========================================================================= */
function downloadBlob(content,filename,type){
  const blob = new Blob([content],{type});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href=url; a.download=filename; a.click();
  URL.revokeObjectURL(url);
}
function exportAllJSON(){
  downloadBlob(JSON.stringify({foods:FOODS,recipes:RECIPES,diets:DIETS,meals:MEALS,weekplan:WEEKPLAN,targets:currentTargets},null,2),'bussola_nutrizionale_export.json','application/json');
}
function downloadPDF(elId,filename){
  // Usa la funzione di stampa nativa del browser (scelta "Salva come PDF" nella finestra di stampa):
  // molto più affidabile di librerie esterne, funziona offline e su qualsiasi dispositivo.
  // Il titolo della pagina diventa il nome file suggerito nella finestra di salvataggio.
  const prevTitle = document.title;
  document.title = filename;
  const restoreTitle = ()=>{ document.title = prevTitle; window.removeEventListener('afterprint', restoreTitle); };
  window.addEventListener('afterprint', restoreTitle);
  setTimeout(restoreTitle, 30000); // rete di sicurezza se 'afterprint' non scatta
  window.print();
}

/* init */
applyStaticI18n();
refreshMealsView();
renderRecipes();
renderWeekPlan();

/* =========================================================================
   PWA — registrazione service worker (installabilità e uso offline)
   ========================================================================= */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
