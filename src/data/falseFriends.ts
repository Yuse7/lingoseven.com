// False friends: words that look or sound like an English word but mean something else. Verified pairs.
// Source: workflow generation + independent verification pass. Real data only.

export interface FalseFriend {
  word: string;
  pos: string;
  looksLike: string;
  meaning: string;
  tip: string;
}

export const falseFriends: Record<string, FalseFriend[]> = {
  "es": [
    {
      "word": "embarazada",
      "pos": "adj",
      "looksLike": "embarrassed",
      "meaning": "pregnant",
      "tip": "To say embarrassed in Spanish, use avergonzado."
    },
    {
      "word": "éxito",
      "pos": "noun",
      "looksLike": "exit",
      "meaning": "success",
      "tip": "An exit sign reads salida; éxito is a hit or triumph."
    },
    {
      "word": "carpeta",
      "pos": "noun",
      "looksLike": "carpet",
      "meaning": "folder",
      "tip": "A floor carpet is una alfombra."
    },
    {
      "word": "ropa",
      "pos": "noun",
      "looksLike": "rope",
      "meaning": "clothes",
      "tip": "A rope is una cuerda."
    },
    {
      "word": "sopa",
      "pos": "noun",
      "looksLike": "soap",
      "meaning": "soup",
      "tip": "Soap for washing is jabón."
    },
    {
      "word": "constipado",
      "pos": "adj",
      "looksLike": "constipated",
      "meaning": "having a cold",
      "tip": "Estar constipado means to have a head cold; constipated is estreñido."
    },
    {
      "word": "librería",
      "pos": "noun",
      "looksLike": "library",
      "meaning": "bookshop",
      "tip": "A lending library is una biblioteca."
    },
    {
      "word": "sensible",
      "pos": "adj",
      "looksLike": "sensible",
      "meaning": "sensitive",
      "tip": "Level-headed sensible is sensato."
    },
    {
      "word": "realizar",
      "pos": "verb",
      "looksLike": "realize",
      "meaning": "to carry out",
      "tip": "To realize as in grasp is darse cuenta."
    },
    {
      "word": "fábrica",
      "pos": "noun",
      "looksLike": "fabric",
      "meaning": "factory",
      "tip": "Cloth fabric is tela or tejido."
    },
    {
      "word": "pariente",
      "pos": "noun",
      "looksLike": "parent",
      "meaning": "relative",
      "tip": "Your mother or father is un padre or una madre."
    },
    {
      "word": "largo",
      "pos": "adj",
      "looksLike": "large",
      "meaning": "long",
      "tip": "Large in size is grande."
    },
    {
      "word": "once",
      "pos": "num",
      "looksLike": "once",
      "meaning": "eleven",
      "tip": "A single time, once, is una vez."
    },
    {
      "word": "recordar",
      "pos": "verb",
      "looksLike": "record",
      "meaning": "to remember",
      "tip": "To record audio is grabar."
    },
    {
      "word": "actual",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "current",
      "tip": "Actual as in real is verdadero or real."
    },
    {
      "word": "asistir",
      "pos": "verb",
      "looksLike": "assist",
      "meaning": "to attend",
      "tip": "Asistir a clase means to attend class; to assist is ayudar."
    },
    {
      "word": "molestar",
      "pos": "verb",
      "looksLike": "molest",
      "meaning": "to bother",
      "tip": "It simply means to annoy or disturb, nothing sexual."
    },
    {
      "word": "lujuria",
      "pos": "noun",
      "looksLike": "luxury",
      "meaning": "lust",
      "tip": "Luxury goods are lujo."
    }
  ],
  "fr": [
    {
      "word": "actuellement",
      "pos": "adv",
      "looksLike": "actually",
      "meaning": "currently",
      "tip": "For actually, say en fait or en réalité."
    },
    {
      "word": "librairie",
      "pos": "noun",
      "looksLike": "library",
      "meaning": "bookshop",
      "tip": "A lending library is une bibliothèque."
    },
    {
      "word": "attendre",
      "pos": "verb",
      "looksLike": "attend",
      "meaning": "to wait for",
      "tip": "To attend an event is assister à."
    },
    {
      "word": "assister",
      "pos": "verb",
      "looksLike": "assist",
      "meaning": "to attend",
      "tip": "To assist someone is aider."
    },
    {
      "word": "blesser",
      "pos": "verb",
      "looksLike": "bless",
      "meaning": "to wound",
      "tip": "To bless is bénir."
    },
    {
      "word": "rester",
      "pos": "verb",
      "looksLike": "rest",
      "meaning": "to stay",
      "tip": "To rest is se reposer."
    },
    {
      "word": "sensible",
      "pos": "adj",
      "looksLike": "sensible",
      "meaning": "sensitive",
      "tip": "Level-headed sensible is raisonnable or sensé."
    },
    {
      "word": "journée",
      "pos": "noun",
      "looksLike": "journey",
      "meaning": "day",
      "tip": "A journey is un voyage."
    },
    {
      "word": "monnaie",
      "pos": "noun",
      "looksLike": "money",
      "meaning": "change (coins)",
      "tip": "Money in general is argent; monnaie is coins or change."
    },
    {
      "word": "coin",
      "pos": "noun",
      "looksLike": "coin",
      "meaning": "corner",
      "tip": "A coin you spend is une pièce."
    },
    {
      "word": "pain",
      "pos": "noun",
      "looksLike": "pain",
      "meaning": "bread",
      "tip": "Physical pain is la douleur."
    },
    {
      "word": "chair",
      "pos": "noun",
      "looksLike": "chair",
      "meaning": "flesh",
      "tip": "A chair to sit on is une chaise."
    },
    {
      "word": "location",
      "pos": "noun",
      "looksLike": "location",
      "meaning": "rental",
      "tip": "A place or spot is un lieu or un emplacement."
    },
    {
      "word": "prune",
      "pos": "noun",
      "looksLike": "prune",
      "meaning": "plum",
      "tip": "A dried prune is un pruneau."
    },
    {
      "word": "raisin",
      "pos": "noun",
      "looksLike": "raisin",
      "meaning": "grape",
      "tip": "A dried raisin is un raisin sec."
    },
    {
      "word": "préservatif",
      "pos": "noun",
      "looksLike": "preservative",
      "meaning": "condom",
      "tip": "A food preservative is un conservateur."
    },
    {
      "word": "déception",
      "pos": "noun",
      "looksLike": "deception",
      "meaning": "disappointment",
      "tip": "Deception as in trickery is une tromperie."
    },
    {
      "word": "lecture",
      "pos": "noun",
      "looksLike": "lecture",
      "meaning": "reading",
      "tip": "A lecture or talk is une conférence."
    }
  ],
  "de": [
    {
      "word": "Gift",
      "pos": "noun",
      "looksLike": "gift",
      "meaning": "poison",
      "tip": "A present is ein Geschenk."
    },
    {
      "word": "Rat",
      "pos": "noun",
      "looksLike": "rat",
      "meaning": "advice",
      "tip": "The animal rat is die Ratte."
    },
    {
      "word": "bekommen",
      "pos": "verb",
      "looksLike": "become",
      "meaning": "to get",
      "tip": "To become is werden."
    },
    {
      "word": "also",
      "pos": "adv",
      "looksLike": "also",
      "meaning": "so, therefore",
      "tip": "Also meaning too is auch."
    },
    {
      "word": "Chef",
      "pos": "noun",
      "looksLike": "chef",
      "meaning": "boss",
      "tip": "A kitchen chef is ein Koch."
    },
    {
      "word": "Handy",
      "pos": "noun",
      "looksLike": "handy",
      "meaning": "cell phone",
      "tip": "Handy is the everyday German word for a mobile phone."
    },
    {
      "word": "brav",
      "pos": "adj",
      "looksLike": "brave",
      "meaning": "well-behaved",
      "tip": "Brave as in courageous is mutig or tapfer."
    },
    {
      "word": "Rock",
      "pos": "noun",
      "looksLike": "rock",
      "meaning": "skirt",
      "tip": "A rock or stone is ein Stein."
    },
    {
      "word": "See",
      "pos": "noun",
      "looksLike": "see",
      "meaning": "lake",
      "tip": "Der See is a lake; die See is the sea."
    },
    {
      "word": "bald",
      "pos": "adv",
      "looksLike": "bald",
      "meaning": "soon",
      "tip": "Bald as in hairless is kahl or glatzköpfig."
    },
    {
      "word": "Kind",
      "pos": "noun",
      "looksLike": "kind",
      "meaning": "child",
      "tip": "Kind as in type is Art; kind as in nice is nett."
    },
    {
      "word": "Mist",
      "pos": "noun",
      "looksLike": "mist",
      "meaning": "manure",
      "tip": "Weather mist is Nebel; Mist also works as a mild darn."
    },
    {
      "word": "Fabrik",
      "pos": "noun",
      "looksLike": "fabric",
      "meaning": "factory",
      "tip": "Cloth fabric is Stoff."
    },
    {
      "word": "hell",
      "pos": "adj",
      "looksLike": "hell",
      "meaning": "bright",
      "tip": "The place hell is die Hölle."
    },
    {
      "word": "Boot",
      "pos": "noun",
      "looksLike": "boot",
      "meaning": "boat",
      "tip": "A boot on your foot is ein Stiefel."
    },
    {
      "word": "fast",
      "pos": "adv",
      "looksLike": "fast",
      "meaning": "almost",
      "tip": "Fast as in quick is schnell."
    },
    {
      "word": "Wand",
      "pos": "noun",
      "looksLike": "wand",
      "meaning": "wall",
      "tip": "A magic wand is ein Zauberstab."
    },
    {
      "word": "eventuell",
      "pos": "adv",
      "looksLike": "eventually",
      "meaning": "possibly",
      "tip": "Eventually as in finally is schließlich."
    }
  ],
  "it": [
    {
      "word": "camera",
      "pos": "noun",
      "looksLike": "camera",
      "meaning": "room",
      "tip": "A photo camera is una macchina fotografica."
    },
    {
      "word": "caldo",
      "pos": "adj",
      "looksLike": "cold",
      "meaning": "hot",
      "tip": "Cold is freddo, the opposite of caldo."
    },
    {
      "word": "morbido",
      "pos": "adj",
      "looksLike": "morbid",
      "meaning": "soft",
      "tip": "Morbid or gruesome is morboso."
    },
    {
      "word": "parente",
      "pos": "noun",
      "looksLike": "parent",
      "meaning": "relative",
      "tip": "A mother or father is un genitore."
    },
    {
      "word": "libreria",
      "pos": "noun",
      "looksLike": "library",
      "meaning": "bookshop",
      "tip": "A lending library is una biblioteca."
    },
    {
      "word": "estate",
      "pos": "noun",
      "looksLike": "estate",
      "meaning": "summer",
      "tip": "An estate or property is una proprietà."
    },
    {
      "word": "rumore",
      "pos": "noun",
      "looksLike": "rumor",
      "meaning": "noise",
      "tip": "A rumor is una voce or una diceria."
    },
    {
      "word": "sensibile",
      "pos": "adj",
      "looksLike": "sensible",
      "meaning": "sensitive",
      "tip": "Level-headed sensible is sensato."
    },
    {
      "word": "attualmente",
      "pos": "adv",
      "looksLike": "actually",
      "meaning": "currently",
      "tip": "For actually, say in realtà."
    },
    {
      "word": "pretendere",
      "pos": "verb",
      "looksLike": "pretend",
      "meaning": "to demand, expect",
      "tip": "To pretend or fake is fingere."
    },
    {
      "word": "educato",
      "pos": "adj",
      "looksLike": "educated",
      "meaning": "polite",
      "tip": "Educated as in schooled is istruito or colto."
    },
    {
      "word": "fattoria",
      "pos": "noun",
      "looksLike": "factory",
      "meaning": "farm",
      "tip": "A factory is una fabbrica."
    },
    {
      "word": "magazzino",
      "pos": "noun",
      "looksLike": "magazine",
      "meaning": "warehouse",
      "tip": "A magazine you read is una rivista."
    },
    {
      "word": "fame",
      "pos": "noun",
      "looksLike": "fame",
      "meaning": "hunger",
      "tip": "Fame or renown is la fama."
    },
    {
      "word": "firma",
      "pos": "noun",
      "looksLike": "firm",
      "meaning": "signature",
      "tip": "A firm or company is un'azienda or una ditta."
    },
    {
      "word": "lettura",
      "pos": "noun",
      "looksLike": "lecture",
      "meaning": "reading",
      "tip": "A lecture or talk is una conferenza."
    },
    {
      "word": "vacanza",
      "pos": "noun",
      "looksLike": "vacancy",
      "meaning": "holiday",
      "tip": "A job vacancy is un posto vacante."
    },
    {
      "word": "annoiato",
      "pos": "adj",
      "looksLike": "annoyed",
      "meaning": "bored",
      "tip": "Annoyed as in irritated is infastidito."
    }
  ],
  "pt": [
    {
      "word": "puxar",
      "pos": "verb",
      "looksLike": "push",
      "meaning": "to pull",
      "tip": "To push is empurrar; doors marked puxe mean pull."
    },
    {
      "word": "pretender",
      "pos": "verb",
      "looksLike": "pretend",
      "meaning": "to intend",
      "tip": "To pretend or fake is fingir."
    },
    {
      "word": "parente",
      "pos": "noun",
      "looksLike": "parent",
      "meaning": "relative",
      "tip": "A mother or father is pai or mãe."
    },
    {
      "word": "livraria",
      "pos": "noun",
      "looksLike": "library",
      "meaning": "bookshop",
      "tip": "A lending library is uma biblioteca."
    },
    {
      "word": "sensível",
      "pos": "adj",
      "looksLike": "sensible",
      "meaning": "sensitive",
      "tip": "Level-headed sensible is sensato."
    },
    {
      "word": "atualmente",
      "pos": "adv",
      "looksLike": "actually",
      "meaning": "currently",
      "tip": "For actually, say na verdade."
    },
    {
      "word": "esquisito",
      "pos": "adj",
      "looksLike": "exquisite",
      "meaning": "strange, weird",
      "tip": "Exquisite or refined is requintado."
    },
    {
      "word": "pasta",
      "pos": "noun",
      "looksLike": "pasta",
      "meaning": "folder",
      "tip": "The food pasta is massa."
    },
    {
      "word": "data",
      "pos": "noun",
      "looksLike": "data",
      "meaning": "date (calendar)",
      "tip": "Data or figures are dados."
    },
    {
      "word": "costume",
      "pos": "noun",
      "looksLike": "costume",
      "meaning": "custom, habit",
      "tip": "A costume you wear is uma fantasia."
    },
    {
      "word": "legenda",
      "pos": "noun",
      "looksLike": "legend",
      "meaning": "subtitle",
      "tip": "A legend or myth is uma lenda."
    },
    {
      "word": "lanche",
      "pos": "noun",
      "looksLike": "lunch",
      "meaning": "snack",
      "tip": "Lunch is almoço; lanche is a snack."
    },
    {
      "word": "assistir",
      "pos": "verb",
      "looksLike": "assist",
      "meaning": "to watch",
      "tip": "Assistir a um filme means to watch a film; to assist is ajudar."
    },
    {
      "word": "balcão",
      "pos": "noun",
      "looksLike": "balcony",
      "meaning": "counter",
      "tip": "A balcony is uma varanda or sacada."
    },
    {
      "word": "jornal",
      "pos": "noun",
      "looksLike": "journal",
      "meaning": "newspaper",
      "tip": "A personal journal is um diário."
    },
    {
      "word": "novela",
      "pos": "noun",
      "looksLike": "novel",
      "meaning": "soap opera",
      "tip": "A novel you read is um romance."
    },
    {
      "word": "compromisso",
      "pos": "noun",
      "looksLike": "compromise",
      "meaning": "appointment",
      "tip": "A compromise or deal is um acordo."
    },
    {
      "word": "fábrica",
      "pos": "noun",
      "looksLike": "fabric",
      "meaning": "factory",
      "tip": "Cloth fabric is tecido."
    }
  ],
  "ru": [
    {
      "word": "магазин",
      "pos": "noun",
      "looksLike": "magazine",
      "meaning": "shop, store",
      "tip": "A magazine you read is журнал."
    },
    {
      "word": "фамилия",
      "pos": "noun",
      "looksLike": "family",
      "meaning": "surname",
      "tip": "Your family is семья."
    },
    {
      "word": "симпатичный",
      "pos": "adj",
      "looksLike": "sympathetic",
      "meaning": "good-looking, cute",
      "tip": "Sympathetic as in caring is сочувствующий."
    },
    {
      "word": "аккуратный",
      "pos": "adj",
      "looksLike": "accurate",
      "meaning": "neat, tidy",
      "tip": "Accurate as in precise is точный."
    },
    {
      "word": "кабинет",
      "pos": "noun",
      "looksLike": "cabinet",
      "meaning": "office, study",
      "tip": "A cabinet or cupboard is шкаф."
    },
    {
      "word": "артист",
      "pos": "noun",
      "looksLike": "artist",
      "meaning": "performer, actor",
      "tip": "A painter or visual artist is художник."
    },
    {
      "word": "интеллигентный",
      "pos": "adj",
      "looksLike": "intelligent",
      "meaning": "cultured, refined",
      "tip": "Intelligent as in smart is умный."
    },
    {
      "word": "фабрика",
      "pos": "noun",
      "looksLike": "fabric",
      "meaning": "factory",
      "tip": "Cloth fabric is ткань."
    },
    {
      "word": "проспект",
      "pos": "noun",
      "looksLike": "prospect",
      "meaning": "avenue",
      "tip": "A prospect or outlook is перспектива."
    },
    {
      "word": "репетиция",
      "pos": "noun",
      "looksLike": "repetition",
      "meaning": "rehearsal",
      "tip": "Repetition as in repeating is повторение."
    },
    {
      "word": "лунатик",
      "pos": "noun",
      "looksLike": "lunatic",
      "meaning": "sleepwalker",
      "tip": "A lunatic or madman is сумасшедший."
    },
    {
      "word": "батон",
      "pos": "noun",
      "looksLike": "baton",
      "meaning": "loaf of bread",
      "tip": "A conductor's baton is дирижёрская палочка."
    },
    {
      "word": "бриллиант",
      "pos": "noun",
      "looksLike": "brilliant",
      "meaning": "diamond",
      "tip": "Brilliant as in great is блестящий."
    },
    {
      "word": "стул",
      "pos": "noun",
      "looksLike": "stool",
      "meaning": "chair",
      "tip": "A low stool is табурет."
    },
    {
      "word": "авантюра",
      "pos": "noun",
      "looksLike": "adventure",
      "meaning": "risky venture",
      "tip": "An adventure is приключение."
    },
    {
      "word": "трансляция",
      "pos": "noun",
      "looksLike": "translation",
      "meaning": "broadcast",
      "tip": "Translation of text is перевод."
    },
    {
      "word": "эффектный",
      "pos": "adj",
      "looksLike": "effective",
      "meaning": "striking, impressive",
      "tip": "Effective as in it works is эффективный."
    },
    {
      "word": "декада",
      "pos": "noun",
      "looksLike": "decade",
      "meaning": "ten-day period",
      "tip": "A decade of ten years is десятилетие."
    }
  ]
};

export const FALSE_FRIENDS_LANGS: string[] = Object.keys(falseFriends);
