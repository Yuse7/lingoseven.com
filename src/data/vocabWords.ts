// AUTO-GENERATED vocabulary test data. Source: hermitdave/FrequencyWords (OpenSubtitles 2018),
// sampled into 6 frequency bands per language, curated to remove proper nouns / foreign words,
// plus 12 verified non-existent pseudowords per language (guessing-correction items).
// Band widths are the count of distinct cleaned words in each frequency-rank span; the sum (28000)
// is the upper bound of the vocabulary-size estimate. See docs/marketing/seo-lingoseven.md.

export interface VocabBand {
  /** Number of word families this sample band represents (for extrapolation). */
  width: number;
  /** 8 real words sampled from this frequency band. */
  words: string[];
}

export interface VocabLangData {
  bands: VocabBand[];
  /** Non-existent but plausible words; checking these signals guessing. */
  pseudowords: string[];
}

export const vocabWords: Record<string, VocabLangData> = {
  es: {
    bands: [
      { width: 600, words: ["también", "saber", "nombre", "dentro", "venir", "poder", "guerra", "teléfono"] },
      { width: 1200, words: ["asunto", "servicio", "ejército", "partido", "bolsa", "sonido", "autobús", "cantar"] },
      { width: 2200, words: ["impresionante", "genio", "firma", "entrenamiento", "habilidad", "instrucciones", "ejercicio", "influencia"] },
      { width: 4000, words: ["complejo", "asociación", "carbón", "levantarse", "ingresos", "manada", "melodía", "eterna"] },
      { width: 7000, words: ["capilla", "consecuencia", "aparición", "orientación", "rapidez", "biológico", "proveedor", "terrenos"] },
      { width: 13000, words: ["quicio", "hocico", "debidamente", "larvas", "raqueta", "cojines", "tejón", "tecla"] },
    ],
    pseudowords: ["trasco", "fontil", "garnoso", "plendar", "calumbre", "rendizo", "brenoso", "talduro", "lomarro", "fresquil", "pandeco", "sorniza"],
  },
  fr: {
    bands: [
      { width: 600, words: ["besoin", "beaucoup", "trouver", "nouveau", "chercher", "journée", "attendre", "sujet"] },
      { width: 1200, words: ["ordre", "libre", "espèce", "décision", "lycée", "rôle", "partager", "conscience"] },
      { width: 2200, words: ["avancer", "réputation", "nombreux", "gratuit", "éléments", "chirurgien", "italien", "vierge"] },
      { width: 4000, words: ["potentiel", "circulation", "sagesse", "fréquence", "planche", "éternel", "philosophie", "phénomène"] },
      { width: 7000, words: ["cliché", "décennies", "grammes", "pingouin", "hypnose", "ruche", "abondance", "démocratique"] },
      { width: 13000, words: ["apogée", "fromages", "conquêtes", "arsenic", "dépistage", "lacet", "documentation", "sablier"] },
    ],
    pseudowords: ["fralure", "mornette", "plouquet", "ravisson", "crisule", "bouchade", "vernisard", "galetin", "murvette", "droquel", "tarveau", "sponille"],
  },
  de: {
    bands: [
      { width: 600, words: ["wieder", "Vater", "nehmen", "echt", "Augen", "ehrlich", "Tage", "bleibt"] },
      { width: 1200, words: ["kaufen", "Person", "behalten", "neu", "antworten", "Erfahrung", "Angriff", "Ohren"] },
      { width: 2200, words: ["Schwert", "Knie", "raten", "Aussage", "scharf", "Uniform", "Pfarrer", "Versicherung"] },
      { width: 4000, words: ["gemütlich", "Trauer", "zurückgehen", "Momente", "bewachen", "binden", "Konzentration", "Vollmond"] },
      { width: 7000, words: ["gelangweilt", "vernünftige", "erweitern", "liebevoll", "Migräne", "zornig", "Blüten", "Melone"] },
      { width: 13000, words: ["widerspricht", "Insekt", "Lebenswerk", "duzen", "andauern", "Horoskop", "Gemeinden", "Pathologie"] },
    ],
    pseudowords: ["Glomber", "Schrunke", "Brastel", "Knüffel", "Wendling", "Grambel", "Plimsel", "Schnörben", "Flarbe", "Stördung", "trauselig", "wuckern"],
  },
  it: {
    bands: [
      { width: 600, words: ["altro", "trovato", "stare", "tesoro", "morto", "mano", "migliore", "sorella"] },
      { width: 1200, words: ["paese", "lungo", "chiedere", "pagare", "rimanere", "chiave", "conoscere", "giudice"] },
      { width: 2200, words: ["ispettore", "cancro", "sposa", "rendere", "risultato", "teatro", "tavola", "università"] },
      { width: 4000, words: ["pubblicità", "compreso", "confermare", "commedia", "probabilità", "ballerina", "occidentale", "caserma"] },
      { width: 7000, words: ["riflettuto", "ereditato", "granchio", "condannati", "cespugli", "rilassato", "maligno", "navigatore"] },
      { width: 13000, words: ["intensamente", "puramente", "ipocrisia", "cruciverba", "ghiacciolo", "surrogato", "fenice", "nicotina"] },
    ],
    pseudowords: ["fralo", "mendare", "sporite", "calvento", "trastina", "gimboso", "plendere", "voraco", "frenisco", "latuvo", "sberanto", "mucciare"],
  },
  pt: {
    bands: [
      { width: 600, words: ["cabeça", "gente", "enquanto", "arma", "perto", "médico", "prisão", "sentido"] },
      { width: 1200, words: ["apanhar", "vítima", "alma", "carne", "conselho", "estrela", "peixe", "jornal"] },
      { width: 2200, words: ["árvores", "provável", "sessão", "noivo", "engano", "imaginação", "bateria", "manteiga"] },
      { width: 4000, words: ["termo", "guiar", "piso", "ausência", "colina", "consultório", "tímido", "cavalaria"] },
      { width: 7000, words: ["blusa", "balões", "propaganda", "surpreender", "injustiça", "gelatina", "cenoura", "colheres"] },
      { width: 13000, words: ["visíveis", "dardo", "humildes", "psíquico", "implorou", "queijos", "erradicar", "acariciar"] },
    ],
    pseudowords: ["trasilho", "calmoreza", "fendoso", "larguvel", "pinorte", "brenzila", "mafueco", "sornela", "treginho", "palvura", "gornisa", "dervalho"],
  },
  en: {
    bands: [
      { width: 600, words: ["here", "make", "course", "ask", "bring", "story", "street", "captain"] },
      { width: 1200, words: ["learn", "table", "cover", "difference", "monster", "criminal", "condition", "funeral"] },
      { width: 2200, words: ["bread", "map", "appear", "empire", "unique", "argument", "necklace", "multiple"] },
      { width: 4000, words: ["needle", "clerk", "bachelor", "wooden", "topic", "origin", "documentary", "battlefield"] },
      { width: 7000, words: ["conductor", "cradle", "morale", "imprisonment", "premature", "sensitivity", "scarce", "listener"] },
      { width: 13000, words: ["firearm", "scripture", "devastation", "grudges", "magnetism", "longevity", "compliance", "installations"] },
    ],
    pseudowords: ["crembic", "flantor", "dwistle", "plovish", "snurgle", "trabbin", "glimmet", "quomber", "vendrop", "skellop", "marnith", "frellop"],
  },
  ru: {
    bands: [
      { width: 600, words: ["день", "человек", "город", "лицо", "идти", "понять", "между", "ночью"] },
      { width: 1200, words: ["новости", "адвокат", "платье", "вода", "часы", "окно", "расследование", "восемь"] },
      { width: 2200, words: ["воздух", "штаны", "шериф", "умный", "начинать", "движение", "служба", "лгать"] },
      { width: 4000, words: ["лидер", "кузен", "предмет", "режим", "избегать", "одеяло", "слушание", "обедать"] },
      { width: 7000, words: ["техника", "запасы", "луч", "нервный", "уютно", "приглашать", "упрямый", "авторы"] },
      { width: 13000, words: ["вскрыть", "задеть", "круиз", "груза", "уколы", "пачка", "тараканы", "знамя"] },
    ],
    pseudowords: ["гломать", "шивенка", "плунда", "тарелон", "мостюга", "велюшка", "краздон", "фишталь", "нурбель", "скавица", "дрепон", "лощарка"],
  },
  nl: {
    bands: [
      { width: 600, words: ["idee", "bang", "rustig", "kans", "brengen", "plek", "land", "veranderen"] },
      { width: 1200, words: ["licht", "schip", "feest", "trekken", "regel", "stoel", "monster", "medische"] },
      { width: 2200, words: ["buik", "koffer", "vrolijk", "kaas", "douche", "spannend", "verzekering", "gevolg"] },
      { width: 4000, words: ["verhouding", "aanvaarden", "uitgeven", "belangen", "overleg", "groenten", "belangstelling", "plaatsvinden"] },
      { width: 7000, words: ["laf", "wachters", "huisgenoot", "schuilen", "onderbreking", "opslagruimte", "verdwalen", "spoedgeval"] },
      { width: 13000, words: ["beeldmateriaal", "blindedarm", "tasten", "uitgegleden", "stilleggen", "misser", "dineetje", "toestond"] },
    ],
    pseudowords: ["blonter", "kwesel", "draboel", "vinkter", "smodel", "plemig", "vorpel", "snolder", "breuvel", "wemberd", "splonk", "gruintel"],
  },
  sv: {
    bands: [
      { width: 600, words: ["vara", "mycket", "veta", "fråga", "familj", "äta", "känna", "mat"] },
      { width: 1200, words: ["berättar", "förlora", "lycklig", "dröm", "säkerhet", "framtiden", "besök", "springer"] },
      { width: 2200, words: ["nöje", "krossa", "mjölk", "öron", "vikt", "grav", "studera", "slump"] },
      { width: 4000, words: ["graven", "siffrorna", "grupper", "bekymrad", "genomföra", "skakade", "övervakning", "förbjuder"] },
      { width: 7000, words: ["underverk", "medvetandet", "iskall", "förvarar", "skarp", "läder", "överföring", "styrelse"] },
      { width: 13000, words: ["mjukvara", "näsor", "elefanterna", "flygresan", "polsk", "bygge", "förlossning", "fakturan"] },
    ],
    pseudowords: ["frumsa", "glytta", "snöved", "krammel", "plurig", "tjånka", "vräska", "böndal", "skrumla", "flänster", "gnurra", "hövsel"],
  },
  tr: {
    bands: [
      { width: 600, words: ["güzel", "başka", "harika", "dakika", "özel", "akşam", "olay", "yakın"] },
      { width: 1200, words: ["güvenlik", "baş", "ikinci", "kral", "yıldız", "gemi", "kurtarmak", "sor"] },
      { width: 2200, words: ["cuma", "iddia", "toplantı", "değişiklik", "yetenekli", "panik", "tarihi", "kullanarak"] },
      { width: 4000, words: ["olumlu", "ihbar", "hap", "hüküm", "yepyeni", "eşsiz", "buzlu", "durdurun"] },
      { width: 7000, words: ["balina", "hevesli", "sınırsız", "rehber", "araçlar", "laflar", "bozma", "verilir"] },
      { width: 13000, words: ["kaygan", "şehit", "kimileri", "küller", "özetle", "koyabilir", "düşünsem", "davranmış"] },
    ],
    pseudowords: ["talgın", "sömek", "buratuk", "kelinti", "naşor", "tirgen", "öbelek", "çamduk", "yelmik", "gözünek", "somarık", "düventi"],
  },
};

export const VOCAB_LANG_CODES = ['es', 'fr', 'de', 'it', 'pt', 'en', 'ru', 'nl', 'sv', 'tr'];
