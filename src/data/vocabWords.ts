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
  no: {
    bands: [
      { width: 600, words: ["bare", "kommer", "alltid", "måte", "sjanse", "uke", "bror", "blod"] },
      { width: 1200, words: ["flink", "spill", "svart", "ansikt", "soldat", "regler", "bakken", "ende"] },
      { width: 2200, words: ["svak", "prest", "storm", "maskin", "alternativ", "indre", "nevne", "samtaler"] },
      { width: 4000, words: ["samfunn", "uenig", "konkurs", "permanent", "nederlag", "bygg", "effekten", "ministeren"] },
      { width: 7000, words: ["stunder", "jordbær", "lokalt", "vitnemål", "truende", "artilleri", "matematikk", "solstråle"] },
      { width: 13000, words: ["mistenksomme", "munnfull", "mykere", "stivnet", "finale", "hagl", "erobring", "underverden"] },
    ],
    pseudowords: ["fjølstre", "gnørvel", "klonse", "drøvel", "spranke", "vemsel", "brøstig", "tralund", "skvalter", "høvring", "glemnar", "kvistel"],
  },
  da: {
    bands: [
      { width: 600, words: ["aften", "fortælle", "kvinde", "spørgsmål", "gammel", "plads", "ansigt", "land"] },
      { width: 1200, words: ["skole", "pistol", "ødelægge", "flyve", "kontrol", "sten", "tvivl", "tillid"] },
      { width: 2200, words: ["sygdom", "tilbyde", "slik", "tirsdag", "handlinger", "regning", "læber", "vinger"] },
      { width: 4000, words: ["forbryder", "trusler", "stål", "dragt", "netværk", "dødelig", "forskere", "redaktør"] },
      { width: 7000, words: ["erobre", "arvet", "hummer", "dybde", "sagfører", "udsættelse", "indføre", "løsesum"] },
      { width: 13000, words: ["fastlåst", "indgriben", "betændt", "kristent", "juletid", "mærkværdigt", "udlede", "husholdning"] },
    ],
    pseudowords: ["brunsel", "fløske", "kandret", "smurpe", "gridsel", "tavlmer", "skølret", "hentrald", "plivse", "vorske", "gnædel", "traskel"],
  },
  ro: {
    bands: [
      { width: 600, words: ["foarte", "există", "scuze", "dreptate", "ciudat", "important", "nebun", "echipa"] },
      { width: 1200, words: ["foame", "polițist", "stradă", "călătorie", "relație", "restaurant", "lung", "absolut"] },
      { width: 2200, words: ["râs", "oribil", "oferta", "iertare", "adevăr", "incendiu", "glonț", "univers"] },
      { width: 4000, words: ["pasiune", "ceartă", "protejat", "înfricoșător", "pagini", "rugăciune", "concluzie", "vizitator"] },
      { width: 7000, words: ["academie", "șoarece", "diploma", "locuință", "pirați", "obstacole", "pneumonie", "magnet"] },
      { width: 13000, words: ["uraniu", "sondă", "vițel", "motociclist", "superficiale", "vandalism", "reclamație", "promoție"] },
    ],
    pseudowords: ["plurnac", "mărgut", "stronel", "vâlteș", "dropină", "frăncot", "zburic", "lăsturic", "grămiț", "trăncuș", "ploștean", "bârlic"],
  },
  uk: {
    bands: [
      { width: 600, words: ["може", "цього", "хочеш", "таке", "разом", "повинен", "навіщо", "далі"] },
      { width: 1200, words: ["рада", "готова", "грати", "рішення", "набагато", "відповідь", "прийшла", "особливо"] },
      { width: 2200, words: ["малий", "вирішили", "помилка", "розум", "дзвонив", "використовувати", "книжку", "хвилює"] },
      { width: 4000, words: ["повірте", "коїться", "готувати", "фотографії", "хлопчики", "переміг", "важке", "гаманець"] },
      { width: 7000, words: ["вислухай", "жінці", "налякав", "наміри", "злякався", "деталь", "змиритися", "шкірі"] },
      { width: 13000, words: ["розміром", "загального", "повітрям", "заарештують", "купатися", "збігається", "передбачив", "самотніх"] },
    ],
    pseudowords: ["зморта", "вепляк", "крутівень", "блонива", "трепіль", "міркач", "грабушка", "плавіток", "хвильник", "дзвоняк", "ковзень", "стрівок"],
  },
  pl: {
    bands: [
      { width: 600, words: ["dziś", "iść", "zaraz", "przestań", "ręce", "ziemi", "życiu", "wyjść"] },
      { width: 1200, words: ["końca", "rodziców", "wokół", "wypadku", "lekarz", "decyzję", "pomaga", "warto"] },
      { width: 2200, words: ["proces", "kontrolę", "najmniej", "bronić", "większy", "zaproszenie", "śpiewać", "morze"] },
      { width: 4000, words: ["ksiądz", "zdenerwowany", "miastem", "ludzkiej", "powtórz", "schowaj", "szklankę", "dziwnych"] },
      { width: 7000, words: ["przewodniczący", "postępować", "naturę", "muzyką", "pięści", "biblioteka", "benzyny", "farba"] },
      { width: 13000, words: ["niebem", "wzorem", "ładunku", "najbliższego", "przyzwyczajony", "wypłata", "przemocą", "szynka"] },
    ],
    pseudowords: ["gradło", "mżawiec", "kreszta", "plątoń", "strówel", "brzękad", "świodka", "dręśnik", "wałszyn", "czaplun", "gwołek", "skrytań"],
  },
  cs: {
    bands: [
      { width: 600, words: ["pravda", "problém", "matka", "včera", "týden", "kvůli", "jasně", "místě"] },
      { width: 1200, words: ["důležité", "zjistit", "láska", "vysvětlit", "povolení", "nebezpečné", "operace", "naprosto"] },
      { width: 2200, words: ["hotovo", "řešení", "požádat", "hodinky", "přinést", "detaily", "zajímavý", "kabát"] },
      { width: 4000, words: ["existovat", "představa", "použití", "psaní", "zločiny", "miliardy", "smutek", "objevit"] },
      { width: 7000, words: ["praštit", "shoda", "bloky", "církve", "kostýmy", "mimino", "okresu", "okně"] },
      { width: 13000, words: ["objasnit", "okolní", "dynastie", "hostům", "pogratulovat", "rádce", "nesnesitelný", "špionáž"] },
    ],
    pseudowords: ["mratel", "křapot", "hlemín", "třesík", "plašina", "chrudík", "brukně", "žvachot", "klopina", "mrštěna", "skřapel", "mlžinec"],
  },
  sk: {
    bands: [
      { width: 600, words: ["ísť", "ktorý", "vidieť", "celý", "muž", "zajtra", "dvere", "sestra"] },
      { width: 1200, words: ["krv", "zavolať", "dcéra", "dolu", "ťažko", "názor", "dlhý", "množstvo"] },
      { width: 2200, words: ["sotva", "pohár", "peklo", "rozum", "zlodej", "smutný", "kabát", "obľúbený"] },
      { width: 4000, words: ["prejav", "skryť", "súboj", "zákaz", "dym", "cvičenie", "výzva", "vôňa"] },
      { width: 7000, words: ["organizácie", "odpadu", "úprimnosť", "zrada", "prednášku", "tekutiny", "pôsobiť", "vydierať"] },
      { width: 13000, words: ["neočakávam", "kríze", "najmladší", "reputácia", "vydržala", "zhorel", "beznádejne", "diaľnica"] },
    ],
    pseudowords: ["vrablo", "štrumka", "mlavoň", "pozdriť", "blúzaný", "stromáž", "tešina", "dlanivý", "klamút", "svrteň", "prachľa", "nožviť"],
  },
  hr: {
    bands: [
      { width: 600, words: ["zašto", "danas", "žena", "način", "dolazi", "ostati", "između", "obitelji"] },
      { width: 1200, words: ["jučer", "koristi", "dopustiti", "kupiti", "poslati", "žrtva", "pažljivo", "muškarci"] },
      { width: 2200, words: ["piti", "čekaju", "poruke", "posjetiti", "pjesme", "ulaz", "zdravlje", "braka"] },
      { width: 4000, words: ["katastrofa", "hodniku", "visoke", "misao", "zaspati", "časopis", "prisutan", "oklop"] },
      { width: 7000, words: ["ljubazna", "nafte", "izgovoriti", "trenucima", "proslava", "tužni", "ponosno", "knjižnica"] },
      { width: 13000, words: ["naići", "besplatnu", "vježbaš", "privuklo", "prisluškivanje", "hrast", "biljkama", "šarmantni"] },
    ],
    pseudowords: ["krpalin", "zmuglica", "bravotak", "šelivka", "mrazgon", "plivotka", "svedran", "trkanj", "čmoluk", "blagušt", "vretolj", "snjažur"],
  },
  bs: {
    bands: [
      { width: 600, words: ["gdje", "mama", "minuta", "slušaj", "vidjeti", "žene", "puta", "imao"] },
      { width: 1200, words: ["divno", "grada", "zatvor", "izbor", "zaustaviti", "cipele", "brak", "napokon"] },
      { width: 2200, words: ["udarac", "otkriti", "nedavno", "zrak", "prostor", "pitali", "znanja", "plava"] },
      { width: 4000, words: ["crvene", "stručnjak", "pameti", "centra", "obrok", "upozorio", "talenat", "računati"] },
      { width: 7000, words: ["baterija", "sviraš", "zapali", "ministarstva", "žedan", "provjere", "čelika", "kolekcija"] },
      { width: 13000, words: ["održavati", "preživimo", "utrke", "zatvaranja", "prozorima", "kritika", "jedinstvene", "vrijediti"] },
    ],
    pseudowords: ["brastiv", "glomar", "pletoš", "vodanj", "krešina", "mlaznik", "štrabac", "crmolj", "žunjak", "smrkalo", "prtinac", "vladur"],
  },
  bg: {
    bands: [
      { width: 600, words: ["всичко", "човек", "добър", "веднага", "история", "храна", "сърцето", "дъщеря"] },
      { width: 1200, words: ["план", "убийство", "полиция", "обяд", "желание", "стената", "офицер", "бъдещето"] },
      { width: 2200, words: ["крак", "сирене", "рядко", "омъжена", "нервен", "колене", "огромни", "стъпки"] },
      { width: 4000, words: ["победител", "убежище", "партия", "инструмент", "болезнено", "твърд", "началника", "дъщери"] },
      { width: 7000, words: ["привлекателна", "баскетбол", "певица", "аборт", "унижение", "агресия", "пореден", "предоставя"] },
      { width: 13000, words: ["платен", "супергерой", "приключенията", "подземен", "играчката", "противоречие", "отхвърляне", "интелигентно"] },
    ],
    pseudowords: ["гравол", "брондел", "сваклин", "триждав", "мрашко", "зморава", "плентар", "дрюхав", "клюмар", "фрашко", "сторвел", "пляндар"],
  },
  mk: {
    bands: [
      { width: 600, words: ["жена", "помош", "девојка", "страна", "срце", "лесно", "нова", "напред"] },
      { width: 1200, words: ["телефонот", "систем", "баба", "слободен", "кратко", "сопруга", "пијалок", "боја"] },
      { width: 2200, words: ["судбината", "секаде", "музиката", "правда", "извор", "цигари", "масло", "бензин"] },
      { width: 4000, words: ["планина", "зима", "ветрот", "храбро", "музејот", "нежен", "противник", "јаболка"] },
      { width: 7000, words: ["освета", "сојузници", "вртење", "благороден", "слонови", "студентите", "лисја", "посетувам"] },
      { width: 13000, words: ["хирургија", "поразот", "пејачка", "нуклеарка", "испитува", "нечист", "драматични", "тракторот"] },
    ],
    pseudowords: ["брашлица", "мовкан", "летвурка", "грозниче", "плавурка", "ситронка", "девкало", "мраштел", "кловрен", "зимушка", "препник", "трошлав"],
  },
  sl: {
    bands: [
      { width: 600, words: ["tudi", "moram", "doma", "enkrat", "brat", "policija", "mali", "končno"] },
      { width: 1200, words: ["zrak", "truplo", "sreča", "zdravilo", "glavni", "spoznati", "metrov", "policaj"] },
      { width: 2200, words: ["misliti", "vrsta", "neumnost", "nekoliko", "plin", "potrebna", "kapetan", "obrambo"] },
      { width: 4000, words: ["prizor", "vodnik", "rahlo", "reševanje", "običajen", "bolnik", "motnje", "poziv"] },
      { width: 7000, words: ["strašen", "sočutje", "tiha", "pristojnosti", "pogreba", "kopanje", "toploto", "mornarice"] },
      { width: 13000, words: ["psihično", "počitnic", "vozovnica", "ponovni", "čakalnici", "priseljenci", "pripomba", "razločno"] },
    ],
    pseudowords: ["graduš", "brunek", "plaviša", "stevora", "mižek", "klovar", "žaretje", "smoduh", "trevica", "prošten", "vlatek", "čmurka"],
  },
  lv: {
    bands: [
      { width: 600, words: ["laiks", "cilvēks", "teikt", "dzīve", "mājas", "atrast", "satikt", "problēma"] },
      { width: 1200, words: ["mašīnas", "atvainojos", "sāpes", "slepkava", "bikses", "nomirt", "balsi", "pieder"] },
      { width: 2200, words: ["pienākums", "sazināties", "vētra", "muguru", "atklāt", "melis", "līgums", "elle"] },
      { width: 4000, words: ["gļēvulis", "slēpties", "apdrošināšana", "valodas", "zvērs", "ēna", "pretinieks", "kolēģi"] },
      { width: 7000, words: ["piloti", "brīži", "milzīgi", "bandīti", "kaulus", "skandāls", "tradīcijas", "pavasaris"] },
      { width: 13000, words: ["izvēlamies", "tumšajiem", "taisnīgums", "pārkāpšana", "klostera", "klaiņo", "izsoles", "lietošanas"] },
    ],
    pseudowords: ["gruvenis", "salbots", "tērkalis", "plūdaris", "vinteklis", "glumte", "sprandulis", "tirpsma", "brunkālis", "raudzeklis", "mēkulis", "skaldenis"],
  },
  lt: {
    bands: [
      { width: 600, words: ["kur", "gali", "daugiau", "atrodo", "vaikai", "žmones", "rankas", "kokie"] },
      { width: 1200, words: ["tėvo", "kadangi", "moterys", "kraujas", "pavyzdžiui", "dėmesį", "paslaptis", "bėgti"] },
      { width: 2200, words: ["saugi", "eilės", "pėdų", "viešbutį", "didžiausia", "rezultatas", "parduotuvės", "atvirkščiai"] },
      { width: 4000, words: ["nerandu", "išbandyti", "vonios", "spaudos", "reakcija", "kairė", "saugumą", "natūraliai"] },
      { width: 7000, words: ["kelti", "tikslus", "gąsdinti", "procentai", "dalyvaus", "vartoja", "psichologas", "biržos"] },
      { width: 13000, words: ["vaikiškas", "užuominų", "geriausiam", "veiksmą", "prižadėti", "katedros", "periodo", "mokama"] },
    ],
    pseudowords: ["skarvas", "pliumė", "gręstas", "vainukas", "žioblas", "truntis", "maldrė", "kuoplis", "snervas", "grimštas", "pliaušas", "vandulis"],
  },
  fi: {
    bands: [
      { width: 600, words: ["hyvin", "tänään", "poika", "varma", "toinen", "joskus", "huomenna", "sellainen"] },
      { width: 1200, words: ["uudestaan", "ase", "selittää", "ostaa", "aloittaa", "sana", "fiksu", "viikko"] },
      { width: 2200, words: ["siirtää", "näköjään", "matkan", "voitto", "kallis", "kielletty", "pettynyt", "kirjaa"] },
      { width: 4000, words: ["jaksaa", "haju", "suosittelen", "olettaa", "tutkimuksen", "luonto", "nuorten", "koittaa"] },
      { width: 7000, words: ["köysi", "muistella", "hirveästi", "vuosisatoja", "tulkita", "vammat", "yleisesti", "leirillä"] },
      { width: 13000, words: ["toverit", "järjestyksen", "tyydytystä", "vauriot", "purjeet", "neljännes", "neste", "hyytelöä"] },
    ],
    pseudowords: ["hurmas", "salveri", "töppälä", "nuikko", "vällys", "ruosanto", "hivelä", "mökäri", "taulivo", "kenpätä", "murvasto", "pelähys"],
  },
  hu: {
    bands: [
      { width: 600, words: ["lehet", "vannak", "kérlek", "látni", "honnan", "gyönyörű", "kapitány", "keresztül"] },
      { width: 1200, words: ["élni", "kicsi", "dühös", "kíváncsi", "fáradt", "különböző", "véletlen", "ugyanolyan"] },
      { width: 2200, words: ["arany", "eső", "vén", "munkája", "halált", "áruló", "megértette", "fiatalabb"] },
      { width: 4000, words: ["papírt", "titokzatos", "megérdemli", "zaj", "csirkét", "esküvőre", "kedvence", "fiatalon"] },
      { width: 7000, words: ["vérem", "hűvös", "egyenruha", "korona", "természetfeletti", "kétségbeesetten", "átjáró", "fényképezte"] },
      { width: 13000, words: ["iratok", "lova", "barátjuk", "kirabolni", "mutatvány", "változásra", "szeptemberben", "épülni"] },
    ],
    pseudowords: ["vöntöl", "szömpör", "gerészt", "berész", "vandók", "rögönc", "pültöny", "csölörd", "fötörc", "zsörönd", "tampók", "hövedés"],
  },
  et: {
    bands: [
      { width: 600, words: ["midagi", "vaja", "aega", "kord", "poiss", "hiljem", "probleem", "hetkel"] },
      { width: 1200, words: ["nemad", "lähedal", "üleval", "pidu", "igavesti", "üllatus", "korraga", "vajalik"] },
      { width: 2200, words: ["mälu", "noored", "ehitada", "löök", "lugema", "riiki", "taluda", "lilli"] },
      { width: 4000, words: ["pääsema", "võlur", "jalutada", "otsustama", "ajakirjanik", "kaelakee", "koosolekul", "käsikirja"] },
      { width: 7000, words: ["kangelast", "hüüdnimi", "salapärane", "treenida", "punktid", "surelik", "sõrmede", "ähvardada"] },
      { width: 13000, words: ["tuttavat", "garantii", "kontserti", "arreteerima", "võimul", "teaduslikult", "õnnestuma", "silmamuna"] },
    ],
    pseudowords: ["kõlmas", "näveldus", "tuhmik", "räbistama", "lõmmel", "sõpendus", "virtul", "käbrastik", "mölvama", "ladrik", "püheldus", "nõrgis"],
  },
  el: {
    bands: [
      { width: 600, words: ["βράδυ", "καρδιά", "πέντε", "σώμα", "μήνυμα", "πόδια", "ψέματα", "μεγάλη"] },
      { width: 1200, words: ["προσοχή", "φως", "μάθημα", "αλλαγή", "έργο", "σταθμό", "επίπεδο", "απόδειξη"] },
      { width: 2200, words: ["ιδέες", "όχημα", "γράφω", "συναισθήματα", "συγγενείς", "χειροπέδες", "δημοσιογράφος", "μαύρος"] },
      { width: 4000, words: ["εμπορικό", "εσώρουχα", "ιδιωτική", "τόπος", "εκτέλεση", "αποκάλυψη", "εφαρμογή", "ευχές"] },
      { width: 7000, words: ["θετικά", "καρύδια", "πλατφόρμα", "ιερείς", "καπνού", "διαλέγω", "θεατές", "ιππασία"] },
      { width: 13000, words: ["αρχίζοντας", "προγραμματισμένη", "παράξενοι", "πρωθυπουργού", "μοριακή", "νόστιμος", "εθισμός", "ξύλινη"] },
    ],
    pseudowords: ["λάμπορος", "τρεμάδι", "κανθίρα", "μποσέλι", "φραντόλη", "σκλέντος", "γαρπίνα", "πλόντερα", "βεσκάλι", "τορνάδος", "ζηλέφτα", "μυράντος"],
  },
  id: {
    bands: [
      { width: 600, words: ["dari", "baik", "rumah", "selalu", "teman", "kota", "bermain", "menarik"] },
      { width: 1200, words: ["hingga", "berat", "nenek", "peluru", "sihir", "menteri", "usia", "pukulan"] },
      { width: 2200, words: ["pekerja", "murah", "ketat", "peristiwa", "sepupu", "cokelat", "lilin", "urutan"] },
      { width: 4000, words: ["cakap", "bagai", "arus", "mitos", "sulap", "biji", "payung", "limbah"] },
      { width: 7000, words: ["lengah", "cenayang", "bertujuan", "tembakau", "bakso", "membebani", "memukau", "disertai"] },
      { width: 13000, words: ["infanteri", "akte", "nominasi", "mendikte", "silet", "inflasi", "terpandang", "merambat"] },
    ],
    pseudowords: ["gentari", "palunda", "rempila", "dukasan", "melonta", "tarisuk", "kembulan", "pansiru", "gelutan", "ribanca", "sumelat", "kerundal"],
  },
  ms: {
    bands: [
      { width: 600, words: ["saya", "hari", "hidup", "jalan", "takut", "gembira", "cantik", "cerita"] },
      { width: 1200, words: ["melawan", "baju", "menangkap", "hospital", "terlambat", "hujan", "menyanyi", "tandas"] },
      { width: 2200, words: ["kasar", "memasak", "melangkah", "kekurangan", "gaun", "badut", "kurus", "selera"] },
      { width: 4000, words: ["kemanusiaan", "bungkusan", "jijik", "mekanik", "menelan", "jahitan", "menampar", "penyembuhan"] },
      { width: 7000, words: ["seberat", "terjual", "megah", "menyusuri", "nikah", "toksin", "padi", "jurujual"] },
      { width: 13000, words: ["kiranya", "zamrud", "berkomitmen", "meluaskan", "angguk", "teduh", "bambu", "murai"] },
    ],
    pseudowords: ["kemalut", "berasuk", "pelitang", "tengkawa", "rumanggis", "selambuk", "memantir", "kurandap", "bilasun", "tenggaruk", "paduras", "menjelap"],
  },
  is: {
    bands: [
      { width: 600, words: ["ekki", "svo", "upp", "kemur", "undir", "gengur", "horfa", "klukkan"] },
      { width: 1200, words: ["margt", "stelpa", "hata", "lögreglan", "reynir", "nærri", "greinilega", "tré"] },
      { width: 2200, words: ["val", "stoppa", "vanur", "undirbúa", "regla", "játa", "vaknaði", "misskilningur"] },
      { width: 4000, words: ["hvítum", "gamlir", "súrefni", "myndband", "vísindamenn", "eilífð", "villtur", "hneyksli"] },
      { width: 7000, words: ["fundurinn", "vísvitandi", "geðveik", "grátandi", "markmiðið", "lauf", "illmenni", "einkennilega"] },
      { width: 13000, words: ["armbandið", "sjálfstæður", "háskóla", "gullfallegur", "hádegið", "fráleitt", "tónlistarmenn", "dýralæknirinn"] },
    ],
    pseudowords: ["snæfla", "þrundla", "glompur", "kvistla", "melsuður", "vönglur", "dröflur", "skjálma", "flæskur", "gnúfla", "bjarmla", "hrundla"],
  },
  ca: {
    bands: [
      { width: 600, words: ["també", "coses", "veritat", "manera", "noia", "ciutat", "ajuda", "germana"] },
      { width: 1200, words: ["llibre", "llista", "caure", "riu", "advocat", "gossos", "cabells", "embarassada"] },
      { width: 2200, words: ["complir", "defensar", "jurar", "sorprenent", "biblioteca", "subjecte", "malsons", "batalles"] },
      { width: 4000, words: ["retirar", "candidat", "muller", "desordre", "sord", "campana", "mercader", "mongetes"] },
      { width: 7000, words: ["cavalcant", "governa", "redacció", "matrimonis", "reproduir", "favorable", "rajoles", "tallafocs"] },
      { width: 13000, words: ["diàries", "burlar", "tacar", "inclinació", "alarmant", "exercitar", "ressuscitar", "edificar"] },
    ],
    pseudowords: ["trellot", "fanyoll", "grandís", "muntoll", "esverpit", "calbrer", "rondís", "plavetja", "tisorent", "embalcir", "ferrull", "vespoll"],
  },
  gl: {
    bands: [
      { width: 600, words: ["mundo", "cousa", "clase", "filla", "sangue", "pobre", "perder", "pasado"] },
      { width: 1200, words: ["semanas", "educación", "programa", "ladrón", "cabelo", "compañeiros", "ministro", "posibilidade"] },
      { width: 2200, words: ["descanso", "valente", "ledicia", "noiva", "actividade", "igualdade", "taller", "domingos"] },
      { width: 4000, words: ["asemblea", "concentración", "mago", "galletas", "fariña", "esmola", "revistas", "asistencia"] },
      { width: 7000, words: ["debuxar", "sardiñas", "comedias", "temor", "ancestros", "trompeta", "pombas", "distribuír"] },
      { width: 13000, words: ["xefatura", "varrer", "enseada", "váter", "esvaecer", "piollos", "paredón", "altercado"] },
    ],
    pseudowords: ["trelizo", "carmoño", "velpada", "sandroxe", "enfricar", "gulpeira", "mortela", "brincoso", "faldrexo", "neviolo", "rapuxe", "calmoira"],
  },
  sq: {
    bands: [
      { width: 600, words: ["punë", "vajzë", "arsye", "moment", "gjashtë", "diçka", "dikush", "gjithmonë"] },
      { width: 1200, words: ["mrekulli", "prindërit", "qyteti", "pushim", "dhuratë", "femër", "bazë", "kuti"] },
      { width: 2200, words: ["qëllimi", "libri", "hajdut", "mësues", "det", "çanta", "karta", "aftësitë"] },
      { width: 4000, words: ["armiq", "gjërash", "qasje", "ndalim", "zyrat", "pushkën", "kurriz", "botëror"] },
      { width: 7000, words: ["fustani", "shkalla", "imagjinatë", "studenti", "motiv", "tortura", "peshkimit", "miqësisë"] },
      { width: 13000, words: ["lagjja", "mesnata", "praktika", "gjoba", "parulla", "lundrimit", "katastrofës", "përqendrohem"] },
    ],
    pseudowords: ["brendash", "tulpor", "gjashitë", "mirnak", "vlandësh", "ngrapo", "dramik", "pellzor", "truftë", "shqimel", "gjondra", "vrashtim"],
  },
  eu: {
    bands: [
      { width: 600, words: ["barkatu", "beti", "maite", "deitu", "begiratu", "lana", "ezagutu", "galdetu"] },
      { width: 1200, words: ["eduki", "hobea", "hamar", "laguntzen", "itzultzen", "herria", "hurbil", "bihotz"] },
      { width: 2200, words: ["tokia", "mendi", "andre", "ikaslea", "entzuteko", "hobetu", "ohikoa", "irteteko"] },
      { width: 4000, words: ["erresuma", "enpresak", "auzia", "hegaldia", "askatasun", "sufrimendua", "lanbidea", "beroki"] },
      { width: 7000, words: ["liluratu", "armatuta", "arbola", "kontakizuna", "borrokaldia", "sindikatua", "gertakizun", "ezartzeko"] },
      { width: 13000, words: ["jokatuz", "zantzuak", "igogailu", "gatazkan", "inbertsioak", "lehiotik", "urpekontzia", "lehiaketa"] },
    ],
    pseudowords: ["zarketa", "melurtu", "gantzo", "irruska", "betorre", "kaldura", "oztemena", "txulande", "naitoki", "gerronka", "abeltzu", "mardoski"],
  },
  sr: {
    bands: [
      { width: 600, words: ["zašto", "gde", "imam", "gospodine", "danas", "dovoljno", "veliki", "polako"] },
      { width: 1200, words: ["porodica", "krvi", "čekajte", "pričati", "bolnicu", "zadatak", "bolestan", "duboko"] },
      { width: 2200, words: ["centar", "kraljica", "profesor", "ptica", "vetar", "greške", "mleko", "nesreće"] },
      { width: 4000, words: ["ludak", "fakultet", "prevara", "grozan", "lekcija", "požara", "gospođu", "kanala"] },
      { width: 7000, words: ["hirurg", "jeziku", "problemu", "koljena", "rebra", "stabla", "doručka", "narkoman"] },
      { width: 13000, words: ["doživotno", "jedra", "oznaku", "klasični", "zaštićeni", "mesar", "kvadrat", "arogantni"] },
    ],
    pseudowords: ["vrnalo", "šturak", "gmizan", "plovak", "drašnik", "krevoš", "smolnik", "blagura", "trnožak", "švrkan", "klemoš", "zdrupan"],
  },
};

export const VOCAB_LANG_CODES = ['es', 'fr', 'de', 'it', 'pt', 'en', 'ru', 'nl', 'sv', 'tr', 'no', 'da', 'ro', 'uk', 'pl', 'cs', 'sk', 'hr', 'bs', 'bg', 'mk', 'sl', 'lv', 'lt', 'fi', 'hu', 'et', 'el', 'id', 'ms', 'is', 'ca', 'gl', 'sq', 'eu', 'sr'];
