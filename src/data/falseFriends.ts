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
  "af": [
    {
      "word": "aktueel",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "current, topical, up to date",
      "tip": "For actual or real in Afrikaans, say werklik or eintlik; aktueel means current."
    },
    {
      "word": "eventueel",
      "pos": "adj",
      "looksLike": "eventually",
      "meaning": "possible, potential, if applicable",
      "tip": "For eventually in Afrikaans, say uiteindelik; eventueel means possibly."
    },
    {
      "word": "gif",
      "pos": "noun",
      "looksLike": "gift",
      "meaning": "poison",
      "tip": "For a gift (present) in Afrikaans, say geskenk; gif is poison."
    },
    {
      "word": "slim",
      "pos": "adj",
      "looksLike": "slim",
      "meaning": "clever, smart",
      "tip": "For slim (thin) in Afrikaans, say maer or skraal; slim means clever."
    },
    {
      "word": "ramp",
      "pos": "noun",
      "looksLike": "ramp",
      "meaning": "disaster, catastrophe",
      "tip": "For a ramp (sloped surface) in Afrikaans, say oprit; ramp means disaster."
    },
    {
      "word": "brood",
      "pos": "noun",
      "looksLike": "brood",
      "meaning": "bread",
      "tip": "Brood is a loaf of bread here, nothing to do with a brood of chicks or brooding."
    },
    {
      "word": "pad",
      "pos": "noun",
      "looksLike": "pad",
      "meaning": "road, path",
      "tip": "For a soft pad in Afrikaans, say kussing; pad means road."
    },
    {
      "word": "stem",
      "pos": "noun",
      "looksLike": "stem",
      "meaning": "voice, or a vote",
      "tip": "For a plant's stem in Afrikaans, say stingel; stem means voice."
    },
    {
      "word": "arm",
      "pos": "adj",
      "looksLike": "arm",
      "meaning": "poor",
      "tip": "As an adjective arm means poor; the noun arm still means the body part too."
    },
    {
      "word": "fabriek",
      "pos": "noun",
      "looksLike": "fabric",
      "meaning": "factory",
      "tip": "For fabric (cloth) in Afrikaans, say stof; fabriek is a factory."
    },
    {
      "word": "bank",
      "pos": "noun",
      "looksLike": "bank",
      "meaning": "couch, sofa (or a bench)",
      "tip": "Sit op die bank means sit on the couch, though bank can also mean a financial bank."
    },
    {
      "word": "as",
      "pos": "conj",
      "looksLike": "as",
      "meaning": "than (in comparisons), or if",
      "tip": "Groter as jy means bigger than you; as does not form the as...as construction."
    },
    {
      "word": "see",
      "pos": "noun",
      "looksLike": "see",
      "meaning": "sea, ocean",
      "tip": "For to see (the verb) in Afrikaans, use sien; see is the noun sea."
    },
    {
      "word": "wet",
      "pos": "noun",
      "looksLike": "wet",
      "meaning": "law",
      "tip": "For wet (damp) in Afrikaans, say nat; wet means law."
    },
    {
      "word": "glad",
      "pos": "adj",
      "looksLike": "glad",
      "meaning": "smooth, slippery",
      "tip": "For glad (happy) in Afrikaans, say bly; glad means slippery."
    },
    {
      "word": "branding",
      "pos": "noun",
      "looksLike": "branding",
      "meaning": "surf, the breaking waves along a shore",
      "tip": "For branding (marketing) in Afrikaans, say handelsmerk or brandmerk."
    },
    {
      "word": "wins",
      "pos": "noun",
      "looksLike": "wins",
      "meaning": "profit, gain",
      "tip": "For wins (victories) in Afrikaans, say oorwinnings; wins means profit."
    }
  ],
  "az": [
    {
      "word": "mağaza",
      "pos": "noun",
      "looksLike": "magazine",
      "meaning": "a shop, a store",
      "tip": "To say magazine (periodical) in Azerbaijani, use jurnal."
    },
    {
      "word": "aktual",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "current, topical, relevant right now",
      "tip": "To say actual (real, not imagined) in Azerbaijani, use həqiqi."
    },
    {
      "word": "familiya",
      "pos": "noun",
      "looksLike": "family",
      "meaning": "surname, last name",
      "tip": "To say family (relatives, household) in Azerbaijani, use ailə."
    },
    {
      "word": "prospekt",
      "pos": "noun",
      "looksLike": "prospect",
      "meaning": "an avenue, a wide boulevard",
      "tip": "To say prospect (a possibility or chance) in Azerbaijani, use perspektiv."
    },
    {
      "word": "brilyant",
      "pos": "noun",
      "looksLike": "brilliant",
      "meaning": "a cut diamond (the gemstone)",
      "tip": "To say brilliant (excellent, very bright) in Azerbaijani, use əla or parlaq."
    },
    {
      "word": "kostyum",
      "pos": "noun",
      "looksLike": "costume",
      "meaning": "a business suit (jacket and trousers or a skirt)",
      "tip": "To say costume (a fancy dress outfit) in Azerbaijani, use maskarad geyimi."
    },
    {
      "word": "tort",
      "pos": "noun",
      "looksLike": "tort",
      "meaning": "a cake (a sweet layered dessert)",
      "tip": "To say tort (a civil wrong in law) in Azerbaijani, lawyers use delikt."
    },
    {
      "word": "prezervativ",
      "pos": "noun",
      "looksLike": "preservative",
      "meaning": "a condom",
      "tip": "To say preservative (a food additive) in Azerbaijani, use qoruyucu."
    },
    {
      "word": "repetisiya",
      "pos": "noun",
      "looksLike": "repetition",
      "meaning": "a rehearsal, a practice run before a performance",
      "tip": "To say repetition (repeating something) in Azerbaijani, use təkrar."
    },
    {
      "word": "dekada",
      "pos": "noun",
      "looksLike": "decade",
      "meaning": "a period of ten days, not ten years",
      "tip": "To say decade (ten years) in Azerbaijani, use onillik."
    },
    {
      "word": "gimnaziya",
      "pos": "noun",
      "looksLike": "gymnasium",
      "meaning": "an academic secondary school",
      "tip": "To say gymnasium (a place to exercise) in Azerbaijani, use idman zalı."
    },
    {
      "word": "simpatiya",
      "pos": "noun",
      "looksLike": "sympathy",
      "meaning": "liking, fondness, or attraction toward someone",
      "tip": "To say sympathy (compassion for someone's suffering) in Azerbaijani, use həmdərdlik."
    },
    {
      "word": "aksiya",
      "pos": "noun",
      "looksLike": "action",
      "meaning": "a promotional sale or discount campaign, or a protest demonstration",
      "tip": "To say action (the act of doing something) in Azerbaijani, use hərəkət."
    },
    {
      "word": "moda",
      "pos": "noun",
      "looksLike": "mode",
      "meaning": "fashion, style, trend",
      "tip": "To say mode (a way of doing something) in Azerbaijani, use rejim."
    }
  ],
  "be": [
    {
      "word": "магазін",
      "pos": "noun",
      "looksLike": "magazine",
      "meaning": "a shop, a store",
      "tip": "To say magazine (the publication) in Belarusian, use часопіс."
    },
    {
      "word": "артыст",
      "pos": "noun",
      "looksLike": "artist",
      "meaning": "a performer, an actor (stage, film or circus performer)",
      "tip": "To say (visual) artist in Belarusian, use мастак."
    },
    {
      "word": "фабрыка",
      "pos": "noun",
      "looksLike": "fabric",
      "meaning": "a factory",
      "tip": "To say fabric (cloth) in Belarusian, use тканіна."
    },
    {
      "word": "батон",
      "pos": "noun",
      "looksLike": "baton",
      "meaning": "a loaf of white bread",
      "tip": "To say baton (a stick or wand) in Belarusian, use палка."
    },
    {
      "word": "балон",
      "pos": "noun",
      "looksLike": "balloon",
      "meaning": "a gas cylinder, a canister",
      "tip": "To say (toy) balloon in Belarusian, use паветраны шарык."
    },
    {
      "word": "вельвет",
      "pos": "noun",
      "looksLike": "velvet",
      "meaning": "corduroy (ribbed cotton fabric)",
      "tip": "To say velvet (smooth fabric) in Belarusian, use аксаміт."
    },
    {
      "word": "прэзерватыў",
      "pos": "noun",
      "looksLike": "preservative",
      "meaning": "a condom",
      "tip": "To say preservative (food additive) in Belarusian, use кансервант."
    },
    {
      "word": "дэкада",
      "pos": "noun",
      "looksLike": "decade",
      "meaning": "a ten day period",
      "tip": "To say decade (ten years) in Belarusian, use дзесяцігоддзе."
    },
    {
      "word": "акуратны",
      "pos": "adj",
      "looksLike": "accurate",
      "meaning": "neat, tidy",
      "tip": "To say accurate (precise) in Belarusian, use дакладны."
    },
    {
      "word": "актуальны",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "relevant, topical, pressing",
      "tip": "To say actual (real) in Belarusian, use сапраўдны."
    },
    {
      "word": "сімпатычны",
      "pos": "adj",
      "looksLike": "sympathetic",
      "meaning": "nice looking, likeable",
      "tip": "To say sympathetic (compassionate) in Belarusian, use спагадлівы."
    },
    {
      "word": "геніяльны",
      "pos": "adj",
      "looksLike": "genial",
      "meaning": "brilliant, of genius",
      "tip": "To say genial (friendly) in Belarusian, use прыязны."
    },
    {
      "word": "сервіз",
      "pos": "noun",
      "looksLike": "service",
      "meaning": "a matching set of dishes",
      "tip": "To say service (a favor or serving someone) in Belarusian, use паслуга."
    },
    {
      "word": "рэпетыцыя",
      "pos": "noun",
      "looksLike": "repetition",
      "meaning": "a rehearsal",
      "tip": "To say repetition in Belarusian, use паўтарэнне."
    },
    {
      "word": "фокус",
      "pos": "noun",
      "looksLike": "focus",
      "meaning": "a magic trick",
      "tip": "To say focus (concentration) in Belarusian, use засяроджанасць."
    },
    {
      "word": "аспірант",
      "pos": "noun",
      "looksLike": "aspirant",
      "meaning": "a PhD or postgraduate research student",
      "tip": "To say aspirant (an ambitious candidate) in Belarusian, use прэтэндэнт."
    },
    {
      "word": "дэталь",
      "pos": "noun",
      "looksLike": "detail",
      "meaning": "a machine part, a component",
      "tip": "To say detail (a small fact) in Belarusian, use падрабязнасць."
    }
  ],
  "bg": [
    {
      "word": "магазин",
      "pos": "noun",
      "looksLike": "magazine",
      "meaning": "a shop or store",
      "tip": "Magazine (the publication) is списание in Bulgarian."
    },
    {
      "word": "фамилия",
      "pos": "noun",
      "looksLike": "family",
      "meaning": "a surname or last name",
      "tip": "Family (the household) is семейство in Bulgarian."
    },
    {
      "word": "симпатичен",
      "pos": "adj",
      "looksLike": "sympathetic",
      "meaning": "nice, cute, or likable in appearance or manner",
      "tip": "Sympathetic (compassionate) is съчувстващ in Bulgarian."
    },
    {
      "word": "симпатия",
      "pos": "noun",
      "looksLike": "sympathy",
      "meaning": "a liking or fondness toward someone",
      "tip": "Sympathy (compassion for someone's trouble) is съчувствие in Bulgarian."
    },
    {
      "word": "актуален",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "current, topical, or up to date",
      "tip": "Actual (real) is истински or действителен in Bulgarian."
    },
    {
      "word": "евентуален",
      "pos": "adj",
      "looksLike": "eventual",
      "meaning": "possible or hypothetical, something that might happen",
      "tip": "Eventual (final, at the end) is краен or окончателен in Bulgarian."
    },
    {
      "word": "фабрика",
      "pos": "noun",
      "looksLike": "fabric",
      "meaning": "a factory",
      "tip": "Fabric (cloth) is плат or текстил in Bulgarian."
    },
    {
      "word": "лист",
      "pos": "noun",
      "looksLike": "list",
      "meaning": "a leaf, or a sheet of paper",
      "tip": "A list of items is списък in Bulgarian."
    },
    {
      "word": "костюм",
      "pos": "noun",
      "looksLike": "costume",
      "meaning": "a suit, such as a business suit",
      "tip": "For a costume (fancy dress), say карнавален костюм; костюм alone means a suit."
    },
    {
      "word": "гимназия",
      "pos": "noun",
      "looksLike": "gymnasium",
      "meaning": "a high school (secondary school)",
      "tip": "A gymnasium for exercise is фитнес зала or спортна зала."
    },
    {
      "word": "шеф",
      "pos": "noun",
      "looksLike": "chef",
      "meaning": "a boss or head of an organization",
      "tip": "A professional cook is готвач in Bulgarian."
    },
    {
      "word": "артист",
      "pos": "noun",
      "looksLike": "artist",
      "meaning": "an actor or performer (stage or screen)",
      "tip": "A visual artist, like a painter, is художник in Bulgarian."
    },
    {
      "word": "адвокат",
      "pos": "noun",
      "looksLike": "advocate",
      "meaning": "a lawyer or attorney",
      "tip": "To advocate for a cause is застъпвам се in Bulgarian."
    },
    {
      "word": "патрон",
      "pos": "noun",
      "looksLike": "patron",
      "meaning": "a cartridge, for a gun or a printer",
      "tip": "A patron or sponsor is покровител or спонсор in Bulgarian."
    },
    {
      "word": "презерватив",
      "pos": "noun",
      "looksLike": "preservative",
      "meaning": "a condom",
      "tip": "A food preservative is консервант in Bulgarian."
    },
    {
      "word": "конкурент",
      "pos": "noun",
      "looksLike": "concurrent",
      "meaning": "a competitor or rival",
      "tip": "Concurrent (happening at the same time) is едновременен in Bulgarian."
    },
    {
      "word": "пансион",
      "pos": "noun",
      "looksLike": "pension",
      "meaning": "a boarding school, or full board (all meals) at a hotel",
      "tip": "A retirement pension is пенсия in Bulgarian."
    }
  ],
  "bs": [
    {
      "word": "fabrika",
      "pos": "noun",
      "looksLike": "fabric",
      "meaning": "factory",
      "tip": "Fabric in Bosnian is tkanina."
    },
    {
      "word": "eventualno",
      "pos": "adv",
      "looksLike": "eventually",
      "meaning": "possibly, potentially, if needed",
      "tip": "Eventually in Bosnian is na kraju or konačno."
    },
    {
      "word": "simpatičan",
      "pos": "adj",
      "looksLike": "sympathetic",
      "meaning": "nice, likeable, cute (describing a person)",
      "tip": "Sympathetic in Bosnian is saosjećajan."
    },
    {
      "word": "simpatija",
      "pos": "noun",
      "looksLike": "sympathy",
      "meaning": "a crush, a romantic liking for someone",
      "tip": "Sympathy (compassion) in Bosnian is saosjećanje."
    },
    {
      "word": "akademik",
      "pos": "noun",
      "looksLike": "academic",
      "meaning": "a member of an Academy of Sciences and Arts (an academician)",
      "tip": "A general scholar or professor in Bosnian is naučnik or profesor."
    },
    {
      "word": "prezervativ",
      "pos": "noun",
      "looksLike": "preservative",
      "meaning": "condom",
      "tip": "Preservative (food additive) in Bosnian is konzervans."
    },
    {
      "word": "advokat",
      "pos": "noun",
      "looksLike": "advocate",
      "meaning": "a lawyer, an attorney",
      "tip": "To advocate for a cause in Bosnian is zagovarati."
    },
    {
      "word": "magacin",
      "pos": "noun",
      "looksLike": "magazine",
      "meaning": "a warehouse, a storage facility",
      "tip": "Magazine (the publication) in Bosnian is časopis."
    },
    {
      "word": "aktuelan",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "current, topical, relevant right now",
      "tip": "Actual (real) in Bosnian is stvaran."
    },
    {
      "word": "kabinet",
      "pos": "noun",
      "looksLike": "cabinet",
      "meaning": "a study room or specialist office",
      "tip": "A furniture cabinet in Bosnian is ormar."
    },
    {
      "word": "gimnazija",
      "pos": "noun",
      "looksLike": "gymnasium",
      "meaning": "an academic secondary school (high school)",
      "tip": "Gymnasium (for exercise) in Bosnian is teretana."
    },
    {
      "word": "novela",
      "pos": "noun",
      "looksLike": "novel",
      "meaning": "a novella, a short prose work",
      "tip": "Novel (full length book) in Bosnian is roman."
    },
    {
      "word": "kondicija",
      "pos": "noun",
      "looksLike": "condition",
      "meaning": "physical fitness, being in good shape",
      "tip": "Condition in general in Bosnian is stanje."
    },
    {
      "word": "provizija",
      "pos": "noun",
      "looksLike": "provision",
      "meaning": "a commission, a broker's fee",
      "tip": "Provision (supply) in Bosnian is snabdijevanje."
    },
    {
      "word": "realizirati",
      "pos": "verb",
      "looksLike": "realize",
      "meaning": "to carry out or implement a plan",
      "tip": "To realize, meaning understand, in Bosnian is shvatiti."
    }
  ],
  "ca": [
    {
      "word": "embarassada",
      "pos": "adj",
      "looksLike": "embarrassed",
      "meaning": "pregnant",
      "tip": "To say embarrassed in Catalan, use avergonyit."
    },
    {
      "word": "constipat",
      "pos": "adj",
      "looksLike": "constipated",
      "meaning": "having a cold",
      "tip": "To say constipated in Catalan, use restret."
    },
    {
      "word": "fàbrica",
      "pos": "noun",
      "looksLike": "fabric",
      "meaning": "factory",
      "tip": "To say fabric in Catalan, use teixit or tela."
    },
    {
      "word": "llibreria",
      "pos": "noun",
      "looksLike": "library",
      "meaning": "bookshop",
      "tip": "To say library in Catalan, use biblioteca."
    },
    {
      "word": "carpeta",
      "pos": "noun",
      "looksLike": "carpet",
      "meaning": "folder (for papers)",
      "tip": "To say carpet in Catalan, use catifa."
    },
    {
      "word": "molestar",
      "pos": "verb",
      "looksLike": "molest",
      "meaning": "to bother, to annoy",
      "tip": "To say molest in Catalan, use abusar sexualment."
    },
    {
      "word": "simpàtic",
      "pos": "adj",
      "looksLike": "sympathetic",
      "meaning": "nice, friendly",
      "tip": "To say sympathetic in Catalan, use comprensiu."
    },
    {
      "word": "actual",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "current, present day",
      "tip": "To say actual (real) in Catalan, use real or efectiu."
    },
    {
      "word": "actualment",
      "pos": "adv",
      "looksLike": "actually",
      "meaning": "currently, nowadays",
      "tip": "To say actually in Catalan, use de fet."
    },
    {
      "word": "sensible",
      "pos": "adj",
      "looksLike": "sensible",
      "meaning": "sensitive",
      "tip": "To say sensible in Catalan, use sensat or assenyat."
    },
    {
      "word": "èxit",
      "pos": "noun",
      "looksLike": "exit",
      "meaning": "success",
      "tip": "To say exit in Catalan, use sortida."
    },
    {
      "word": "recordar",
      "pos": "verb",
      "looksLike": "record",
      "meaning": "to remember",
      "tip": "To say record in Catalan, use gravar or enregistrar."
    },
    {
      "word": "assistir",
      "pos": "verb",
      "looksLike": "assist",
      "meaning": "to attend (an event)",
      "tip": "To say assist (help) in Catalan, use ajudar."
    },
    {
      "word": "realitzar",
      "pos": "verb",
      "looksLike": "realize",
      "meaning": "to carry out, to achieve",
      "tip": "To say realize in Catalan, use adonar-se."
    },
    {
      "word": "pretendre",
      "pos": "verb",
      "looksLike": "pretend",
      "meaning": "to claim, to intend, to try",
      "tip": "To say pretend in Catalan, use fingir."
    },
    {
      "word": "decepció",
      "pos": "noun",
      "looksLike": "deception",
      "meaning": "disappointment",
      "tip": "To say deception in Catalan, use engany."
    },
    {
      "word": "col·legi",
      "pos": "noun",
      "looksLike": "college",
      "meaning": "school",
      "tip": "To say college (university) in Catalan, use facultat or universitat."
    },
    {
      "word": "compromís",
      "pos": "noun",
      "looksLike": "compromise",
      "meaning": "commitment, pledge",
      "tip": "To say compromise in Catalan, use cedir or arribar a un acord."
    }
  ],
  "cs": [
    {
      "word": "aktuální",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "current, up to date, topical",
      "tip": "To say actual (real) in Czech, use skutečný or opravdový."
    },
    {
      "word": "eventuálně",
      "pos": "adv",
      "looksLike": "eventually",
      "meaning": "possibly, if need be",
      "tip": "To say eventually in Czech, use nakonec."
    },
    {
      "word": "sympatický",
      "pos": "adj",
      "looksLike": "sympathetic",
      "meaning": "nice, likeable, pleasant (about a person)",
      "tip": "To say sympathetic (compassionate) in Czech, use soucitný."
    },
    {
      "word": "gymnázium",
      "pos": "noun",
      "looksLike": "gymnasium",
      "meaning": "an academic secondary school leading to the maturita exam, not a place to exercise",
      "tip": "To say gym (for workouts) in Czech, use posilovna or tělocvična."
    },
    {
      "word": "host",
      "pos": "noun",
      "looksLike": "host",
      "meaning": "a guest, visitor, or restaurant customer",
      "tip": "To say host (one who receives guests) in Czech, use hostitel."
    },
    {
      "word": "plot",
      "pos": "noun",
      "looksLike": "plot",
      "meaning": "a fence",
      "tip": "To say plot (of a story) in Czech, use zápletka or děj."
    },
    {
      "word": "prezervativ",
      "pos": "noun",
      "looksLike": "preservative",
      "meaning": "a condom",
      "tip": "To say preservative (food additive) in Czech, use konzervant."
    },
    {
      "word": "maturita",
      "pos": "noun",
      "looksLike": "maturity",
      "meaning": "the final school leaving exam at the end of secondary school",
      "tip": "To say maturity (being grown up) in Czech, use zralost or dospělost."
    },
    {
      "word": "realizovat",
      "pos": "verb",
      "looksLike": "realize",
      "meaning": "to carry out or implement a plan or project",
      "tip": "To say realize (become aware of) in Czech, use uvědomit si."
    },
    {
      "word": "kontrolovat",
      "pos": "verb",
      "looksLike": "control",
      "meaning": "to check, inspect, or verify",
      "tip": "To say control (direct or govern) in Czech, use ovládat or řídit."
    },
    {
      "word": "dres",
      "pos": "noun",
      "looksLike": "dress",
      "meaning": "a sports jersey or team uniform",
      "tip": "To say dress (clothing) in Czech, use šaty."
    },
    {
      "word": "šéf",
      "pos": "noun",
      "looksLike": "chef",
      "meaning": "a boss or manager",
      "tip": "To say chef (a professional cook) in Czech, use kuchař."
    },
    {
      "word": "trafika",
      "pos": "noun",
      "looksLike": "traffic",
      "meaning": "a small kiosk selling cigarettes, newspapers, and tickets",
      "tip": "To say traffic (vehicles on a road) in Czech, use doprava or provoz."
    },
    {
      "word": "smoking",
      "pos": "noun",
      "looksLike": "smoking",
      "meaning": "a tuxedo or dinner jacket",
      "tip": "To say smoking (inhaling cigarette smoke) in Czech, use kouření."
    },
    {
      "word": "stopovat",
      "pos": "verb",
      "looksLike": "stop",
      "meaning": "to hitchhike",
      "tip": "To say stop in Czech, use zastavit."
    },
    {
      "word": "novela",
      "pos": "noun",
      "looksLike": "novel",
      "meaning": "an amendment to a law",
      "tip": "To say novel (a book) in Czech, use román."
    },
    {
      "word": "akcie",
      "pos": "noun",
      "looksLike": "action",
      "meaning": "a share or stock in a company",
      "tip": "To say action (an act or deed) in Czech, use akce or čin."
    },
    {
      "word": "most",
      "pos": "noun",
      "looksLike": "most",
      "meaning": "a bridge",
      "tip": "To say most (the greatest amount) in Czech, use většina or nejvíce."
    }
  ],
  "da": [
    {
      "word": "gift",
      "pos": "noun/adj",
      "looksLike": "gift",
      "meaning": "poison; also means married (as an adjective)",
      "tip": "To say gift (a present) in Danish, use en gave."
    },
    {
      "word": "fart",
      "pos": "noun",
      "looksLike": "fart",
      "meaning": "speed",
      "tip": "Fart just means speed in Danish (fartgrænse = speed limit); the bodily sense is prut."
    },
    {
      "word": "slut",
      "pos": "adj",
      "looksLike": "slut",
      "meaning": "over, finished, the end",
      "tip": "Danish slut simply means the end (udsalget er slut = the sale is over); it carries no rude sense at all."
    },
    {
      "word": "mad",
      "pos": "noun",
      "looksLike": "mad",
      "meaning": "food",
      "tip": "To say mad (angry) in Danish, use vred; for mad (crazy), use skør or gal."
    },
    {
      "word": "bad",
      "pos": "noun",
      "looksLike": "bad",
      "meaning": "a bath, or a swim",
      "tip": "To say bad (poor quality) in Danish, use dårlig."
    },
    {
      "word": "kind",
      "pos": "noun",
      "looksLike": "kind",
      "meaning": "cheek (the part of the face)",
      "tip": "To say kind (nice) in Danish, use venlig or sød."
    },
    {
      "word": "sky",
      "pos": "noun",
      "looksLike": "sky",
      "meaning": "a cloud",
      "tip": "To say sky (the sky itself) in Danish, use himmel."
    },
    {
      "word": "barn",
      "pos": "noun",
      "looksLike": "barn",
      "meaning": "a child",
      "tip": "To say barn (farm building) in Danish, use lade or stald."
    },
    {
      "word": "dog",
      "pos": "adv",
      "looksLike": "dog",
      "meaning": "however, yet, still",
      "tip": "To say dog (the animal) in Danish, use hund."
    },
    {
      "word": "pig",
      "pos": "noun",
      "looksLike": "pig",
      "meaning": "a spike, thorn, or stud",
      "tip": "To say pig (the animal) in Danish, use gris or so."
    },
    {
      "word": "hug",
      "pos": "noun",
      "looksLike": "hug",
      "meaning": "a blow, strike, or chop (with a weapon or axe)",
      "tip": "To say hug (embrace) in Danish, use et kram."
    },
    {
      "word": "fire",
      "pos": "adj",
      "looksLike": "fire",
      "meaning": "four (the number)",
      "tip": "To say fire (flames) in Danish, use en brand or ild."
    },
    {
      "word": "time",
      "pos": "noun",
      "looksLike": "time",
      "meaning": "an hour (also a class or lesson period)",
      "tip": "To say time (in general) in Danish, use tid."
    },
    {
      "word": "god",
      "pos": "adj",
      "looksLike": "god",
      "meaning": "good",
      "tip": "To say God (the deity) in Danish, use Gud."
    },
    {
      "word": "chef",
      "pos": "noun",
      "looksLike": "chef",
      "meaning": "a boss, manager",
      "tip": "To say chef (a cook) in Danish, use kok."
    },
    {
      "word": "advokat",
      "pos": "noun",
      "looksLike": "advocate",
      "meaning": "a lawyer, attorney",
      "tip": "To say advocate (supporter of a cause) in Danish, use fortaler."
    },
    {
      "word": "grine",
      "pos": "verb",
      "looksLike": "grin",
      "meaning": "to laugh",
      "tip": "To say grin (smile broadly) in Danish, use smile."
    },
    {
      "word": "prægnant",
      "pos": "adj",
      "looksLike": "pregnant",
      "meaning": "concise, succinct, to the point",
      "tip": "To say pregnant in Danish, use gravid."
    }
  ],
  "el": [
    {
      "word": "ιδιωτικός",
      "pos": "adj",
      "looksLike": "idiotic",
      "meaning": "private, not state run or public",
      "tip": "To say idiotic in Greek, use ηλίθιος."
    },
    {
      "word": "γυμνάσιο",
      "pos": "noun",
      "looksLike": "gymnasium",
      "meaning": "a secondary school (roughly ages 12 to 15)",
      "tip": "To say gymnasium (a place to exercise) in Greek, use γυμναστήριο."
    },
    {
      "word": "εμπάθεια",
      "pos": "noun",
      "looksLike": "empathy",
      "meaning": "hostility, malice, spite",
      "tip": "To say empathy in Greek, use ενσυναίσθηση."
    },
    {
      "word": "συμπάθεια",
      "pos": "noun",
      "looksLike": "sympathy",
      "meaning": "fondness, liking for someone",
      "tip": "To say sympathy (compassion for someone's suffering) in Greek, use συμπόνια."
    },
    {
      "word": "απολογία",
      "pos": "noun",
      "looksLike": "apology",
      "meaning": "a legal defense, a formal justification of oneself against a charge",
      "tip": "To say sorry or apologize in Greek, say ζητώ συγγνώμη."
    },
    {
      "word": "παθητικός",
      "pos": "adj",
      "looksLike": "pathetic",
      "meaning": "passive",
      "tip": "To say pathetic (pitiful) in Greek, use αξιολύπητος."
    },
    {
      "word": "σχήμα",
      "pos": "noun",
      "looksLike": "scheme",
      "meaning": "a shape",
      "tip": "To say scheme (a plan) in Greek, use σχέδιο."
    },
    {
      "word": "τακτικός",
      "pos": "adj",
      "looksLike": "tactical",
      "meaning": "tidy, orderly, regular",
      "tip": "To say tactical (strategically planned) in Greek, use στρατηγικός."
    },
    {
      "word": "κόσμος",
      "pos": "noun",
      "looksLike": "cosmos",
      "meaning": "the world; people, a crowd",
      "tip": "To say cosmos (the universe) in Greek, use σύμπαν."
    },
    {
      "word": "αγωνία",
      "pos": "noun",
      "looksLike": "agony",
      "meaning": "anxiety, suspense",
      "tip": "To say agony (intense pain) in Greek, use οδύνη."
    },
    {
      "word": "λογιστικός",
      "pos": "adj",
      "looksLike": "logistics",
      "meaning": "related to accounting, bookkeeping",
      "tip": "To say logistics in Greek, use εφοδιαστική."
    },
    {
      "word": "κοστούμι",
      "pos": "noun",
      "looksLike": "costume",
      "meaning": "a suit (formal menswear)",
      "tip": "To say costume (an outfit for a show or disguise) in Greek, use στολή."
    },
    {
      "word": "τράπεζα",
      "pos": "noun",
      "looksLike": "trapeze",
      "meaning": "a bank",
      "tip": "Τράπεζα always means bank in everyday Greek, never the circus swing."
    },
    {
      "word": "πνευματικός",
      "pos": "adj",
      "looksLike": "pneumatic",
      "meaning": "spiritual, intellectual",
      "tip": "Πνευματικός almost always means spiritual or intellectual in Greek, not air powered."
    },
    {
      "word": "παθολόγος",
      "pos": "noun",
      "looksLike": "pathologist",
      "meaning": "a doctor of internal medicine, a general physician",
      "tip": "To say pathologist (who examines diseased tissue) in Greek, use παθολογοανατόμος."
    },
    {
      "word": "συκοφάντης",
      "pos": "noun",
      "looksLike": "sycophant",
      "meaning": "a slanderer, one who makes false accusations",
      "tip": "To say sycophant (a flatterer) in Greek, use κόλακας."
    },
    {
      "word": "κατηγορώ",
      "pos": "verb",
      "looksLike": "categorize",
      "meaning": "to accuse",
      "tip": "To say categorize in Greek, use κατηγοριοποιώ."
    },
    {
      "word": "τυπικός",
      "pos": "adj",
      "looksLike": "typical",
      "meaning": "formal, nominal, procedural (in name only)",
      "tip": "To say typical (usual, representative) in Greek, use χαρακτηριστικός."
    }
  ],
  "et": [
    {
      "word": "hall",
      "pos": "adj",
      "looksLike": "hall",
      "meaning": "grey (the color)",
      "tip": "For an English hall (room/building), say saal, not hall."
    },
    {
      "word": "must",
      "pos": "adj",
      "looksLike": "must",
      "meaning": "black (the color)",
      "tip": "For English must (have to), say pean/peab; must in Estonian is a color."
    },
    {
      "word": "loss",
      "pos": "noun",
      "looksLike": "loss",
      "meaning": "castle, palace",
      "tip": "For English loss (losing something), say kaotus."
    },
    {
      "word": "hunt",
      "pos": "noun",
      "looksLike": "hunt",
      "meaning": "wolf",
      "tip": "For English hunt (to chase prey), say jahtima."
    },
    {
      "word": "pink",
      "pos": "noun",
      "looksLike": "pink",
      "meaning": "bench (a seat)",
      "tip": "For English pink (the color), say roosa."
    },
    {
      "word": "male",
      "pos": "noun",
      "looksLike": "male",
      "meaning": "chess (the board game)",
      "tip": "For English male (a man), say mees."
    },
    {
      "word": "kink",
      "pos": "noun",
      "looksLike": "kink",
      "meaning": "gift, present",
      "tip": "For English kink (a twist or quirk), say veidrus."
    },
    {
      "word": "tuba",
      "pos": "noun",
      "looksLike": "tuba",
      "meaning": "room (in a house or building)",
      "tip": "For the musical instrument tuba, Estonian also says tuuba."
    },
    {
      "word": "lust",
      "pos": "noun",
      "looksLike": "lust",
      "meaning": "joy, fun, delight (innocent, not sexual)",
      "tip": "For English lust (strong sexual desire), say iha."
    },
    {
      "word": "hind",
      "pos": "noun",
      "looksLike": "hind",
      "meaning": "price",
      "tip": "For English hind (rear, or a female deer), say tagumine."
    },
    {
      "word": "fond",
      "pos": "noun",
      "looksLike": "fond",
      "meaning": "fund (a pool of money)",
      "tip": "For English fond (affectionate), say kiindunud."
    },
    {
      "word": "kale",
      "pos": "adj",
      "looksLike": "kale",
      "meaning": "cold, harsh, callous (of weather or manner)",
      "tip": "For the vegetable kale, say lehtkapsas."
    },
    {
      "word": "tee",
      "pos": "noun",
      "looksLike": "tea",
      "meaning": "road, way, path",
      "tip": "Tee also means the drink tea in Estonian, but its main sense is road/way."
    },
    {
      "word": "suits",
      "pos": "noun",
      "looksLike": "suits",
      "meaning": "smoke",
      "tip": "For English suits (plural of suit), say ülikonnad."
    },
    {
      "word": "smoking",
      "pos": "noun",
      "looksLike": "smoking",
      "meaning": "tuxedo, dinner jacket",
      "tip": "For the verb smoking, say suitsetamine."
    },
    {
      "word": "sõber",
      "pos": "noun",
      "looksLike": "sober",
      "meaning": "friend",
      "tip": "For English sober (not drunk), say kaine."
    },
    {
      "word": "kool",
      "pos": "noun",
      "looksLike": "cool",
      "meaning": "school",
      "tip": "For English cool, say jahe or lahe; kool is where you study."
    },
    {
      "word": "laud",
      "pos": "noun",
      "looksLike": "loud",
      "meaning": "table",
      "tip": "For English loud (noisy), say vali; laud is what you eat dinner on."
    }
  ],
  "eu": [
    {
      "word": "bat",
      "pos": "adj",
      "looksLike": "bat",
      "meaning": "one (the number); also functions as the indefinite article a/an, as in lagun bat (a friend)",
      "tip": "To say bat (the animal) in Basque, use saguzar."
    },
    {
      "word": "kale",
      "pos": "noun",
      "looksLike": "kale",
      "meaning": "street, as in Kale Nagusia (Main Street)",
      "tip": "To say kale (the vegetable) in Basque, use aza kizkur (curly cabbage)."
    },
    {
      "word": "polit",
      "pos": "adj",
      "looksLike": "polite",
      "meaning": "pretty, nice, cute",
      "tip": "To say polite in Basque, use adeitsu."
    },
    {
      "word": "bake",
      "pos": "noun",
      "looksLike": "bake",
      "meaning": "peace",
      "tip": "To say bake (cook in the oven) in Basque, use labean erre."
    },
    {
      "word": "gai",
      "pos": "noun",
      "looksLike": "guy",
      "meaning": "topic, theme, subject matter, or material",
      "tip": "To say guy (man) in Basque, use mutil or gizon."
    },
    {
      "word": "handi",
      "pos": "adj",
      "looksLike": "handy",
      "meaning": "big, large",
      "tip": "To say handy (useful) in Basque, use erabilgarri."
    },
    {
      "word": "behar",
      "pos": "noun",
      "looksLike": "bear",
      "meaning": "need, necessity (behar izan means to need)",
      "tip": "To say bear (the animal) in Basque, use hartz."
    },
    {
      "word": "lore",
      "pos": "noun",
      "looksLike": "lore",
      "meaning": "flower, as in the film title Loreak (Flowers)",
      "tip": "To say lore (legends, traditional tales) in Basque, use elezahar."
    },
    {
      "word": "gauza",
      "pos": "noun",
      "looksLike": "gauze",
      "meaning": "thing (a generic, everyday noun)",
      "tip": "To say gauze (the fabric) in Basque, use gasa."
    },
    {
      "word": "sail",
      "pos": "noun",
      "looksLike": "sail",
      "meaning": "field, plot of land, series, or department, as in Kultura Saila (Culture Department)",
      "tip": "To say sail (on a boat) in Basque, use bela."
    },
    {
      "word": "beste",
      "pos": "adj",
      "looksLike": "best",
      "meaning": "other, another",
      "tip": "To say best in Basque, use onena."
    },
    {
      "word": "lagun",
      "pos": "noun",
      "looksLike": "lagoon",
      "meaning": "friend, companion",
      "tip": "To say lagoon in Basque, use aintzira."
    },
    {
      "word": "berri",
      "pos": "adj",
      "looksLike": "berry",
      "meaning": "new",
      "tip": "To say berry in Basque, use fruitu gorriak (red berries)."
    }
  ],
  "fi": [
    {
      "word": "on",
      "pos": "verb",
      "looksLike": "on",
      "meaning": "is",
      "tip": "To say the preposition 'on' in Finnish, use päällä, not on."
    },
    {
      "word": "me",
      "pos": "pron",
      "looksLike": "me",
      "meaning": "we",
      "tip": "To say 'me' (object form of I) in Finnish, use minut, not me."
    },
    {
      "word": "he",
      "pos": "pron",
      "looksLike": "he",
      "meaning": "they",
      "tip": "To say 'he' in Finnish, use hän, not he."
    },
    {
      "word": "into",
      "pos": "noun",
      "looksLike": "into",
      "meaning": "enthusiasm, eagerness",
      "tip": "To say the preposition 'into' in Finnish, use sisään, not into."
    },
    {
      "word": "no",
      "pos": "interj",
      "looksLike": "no",
      "meaning": "well, so (a filler word, not a negation)",
      "tip": "To say 'no' in Finnish, use ei, not no."
    },
    {
      "word": "tie",
      "pos": "noun",
      "looksLike": "tie",
      "meaning": "road, street, way",
      "tip": "To say 'necktie' in Finnish, use solmio, not tie."
    },
    {
      "word": "home",
      "pos": "noun",
      "looksLike": "home",
      "meaning": "mold, mildew (fungus growth)",
      "tip": "To say 'home' in Finnish, use koti, not home."
    },
    {
      "word": "kissa",
      "pos": "noun",
      "looksLike": "kiss",
      "meaning": "cat",
      "tip": "To say 'kiss' in Finnish, use suukko, not kissa."
    },
    {
      "word": "housut",
      "pos": "noun",
      "looksLike": "house",
      "meaning": "trousers, pants",
      "tip": "To say 'house' in Finnish, use talo, not housut."
    },
    {
      "word": "hissi",
      "pos": "noun",
      "looksLike": "hiss",
      "meaning": "elevator, lift",
      "tip": "For a hissing sound in Finnish, use sihinä, not hissi."
    },
    {
      "word": "hai",
      "pos": "noun",
      "looksLike": "hi",
      "meaning": "shark",
      "tip": "To greet someone in Finnish, say hei, not hai."
    },
    {
      "word": "kaniini",
      "pos": "noun",
      "looksLike": "canine",
      "meaning": "rabbit",
      "tip": "For 'canine' (dog related) in Finnish, use koiran-, not kaniini."
    },
    {
      "word": "silikoni",
      "pos": "noun",
      "looksLike": "silicon",
      "meaning": "silicone (the flexible polymer)",
      "tip": "To say 'silicon' (the chemical element) in Finnish, use pii, not silikoni."
    },
    {
      "word": "biljoona",
      "pos": "noun",
      "looksLike": "billion",
      "meaning": "trillion (a million million)",
      "tip": "To say 'billion' in Finnish, use miljardi, not biljoona."
    },
    {
      "word": "novelli",
      "pos": "noun",
      "looksLike": "novel",
      "meaning": "short story",
      "tip": "To say 'novel' (a full length book) in Finnish, use romaani, not novelli."
    },
    {
      "word": "angiina",
      "pos": "noun",
      "looksLike": "angina",
      "meaning": "tonsillitis (a throat infection)",
      "tip": "To say 'angina' (chest pain) in Finnish, use angina pectoris, not angiina."
    },
    {
      "word": "motoristi",
      "pos": "noun",
      "looksLike": "motorist",
      "meaning": "motorcyclist",
      "tip": "To say 'motorist' (car driver) in Finnish, use autoilija, not motoristi."
    },
    {
      "word": "tiili",
      "pos": "noun",
      "looksLike": "tile",
      "meaning": "brick",
      "tip": "To say 'tile' in Finnish, use laatta, not tiili."
    }
  ],
  "gl": [
    {
      "word": "embarazada",
      "pos": "adj",
      "looksLike": "embarrassed",
      "meaning": "pregnant",
      "tip": "To say embarrassed in Galician, use avergoñado (avergoñada for a woman)."
    },
    {
      "word": "billón",
      "pos": "noun",
      "looksLike": "billion",
      "meaning": "a trillion (a million million, 1,000,000,000,000)",
      "tip": "To say billion (1,000,000,000) in Galician, use mil millóns."
    },
    {
      "word": "carpeta",
      "pos": "noun",
      "looksLike": "carpet",
      "meaning": "a folder for papers or computer files",
      "tip": "To say carpet in Galician, use alfombra."
    },
    {
      "word": "parente",
      "pos": "noun",
      "looksLike": "parent",
      "meaning": "a relative, any family member",
      "tip": "To say parents in Galician, use pais (nai is mother, pai is father)."
    },
    {
      "word": "sensible",
      "pos": "adj",
      "looksLike": "sensible",
      "meaning": "sensitive, easily affected or hurt",
      "tip": "To say sensible, showing good judgment, in Galician, use sensato."
    },
    {
      "word": "actual",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "current, present day",
      "tip": "To say actual, meaning real, in Galician, use real or verdadeiro."
    },
    {
      "word": "molestar",
      "pos": "verb",
      "looksLike": "molest",
      "meaning": "to bother or annoy",
      "tip": "Molestar has no sexual meaning in Galician, it just means to bother or annoy someone."
    },
    {
      "word": "constipado",
      "pos": "noun",
      "looksLike": "constipated",
      "meaning": "a cold, a respiratory illness with a stuffy nose",
      "tip": "To say constipated in the digestive sense, use estrinxido, not constipado."
    },
    {
      "word": "colexio",
      "pos": "noun",
      "looksLike": "college",
      "meaning": "a primary or secondary school",
      "tip": "To say college or university in Galician, use universidade."
    },
    {
      "word": "compromiso",
      "pos": "noun",
      "looksLike": "compromise",
      "meaning": "a commitment or obligation",
      "tip": "To say compromise, a mutual agreement, in Galician, use acordo."
    },
    {
      "word": "discusión",
      "pos": "noun",
      "looksLike": "discussion",
      "meaning": "an argument or quarrel",
      "tip": "To say a calm discussion in Galician, use conversa or debate."
    },
    {
      "word": "fábrica",
      "pos": "noun",
      "looksLike": "fabric",
      "meaning": "a factory",
      "tip": "To say fabric or cloth in Galician, use tecido or tea."
    },
    {
      "word": "lectura",
      "pos": "noun",
      "looksLike": "lecture",
      "meaning": "reading, the act of reading",
      "tip": "To say lecture, a talk given to an audience, in Galician, use conferencia."
    },
    {
      "word": "recordar",
      "pos": "verb",
      "looksLike": "record",
      "meaning": "to remember",
      "tip": "To say record, as in document something, in Galician, use gravar."
    },
    {
      "word": "suceso",
      "pos": "noun",
      "looksLike": "success",
      "meaning": "an event or incident",
      "tip": "To say success in Galician, use éxito."
    },
    {
      "word": "largo",
      "pos": "adj",
      "looksLike": "large",
      "meaning": "wide, broad",
      "tip": "To say large or big in Galician, use grande; long is longo."
    },
    {
      "word": "eventualmente",
      "pos": "adv",
      "looksLike": "eventually",
      "meaning": "possibly, occasionally, depending on circumstances",
      "tip": "To say eventually, in the end, in Galician, use finalmente."
    },
    {
      "word": "pretender",
      "pos": "verb",
      "looksLike": "pretend",
      "meaning": "to intend, to aspire to something",
      "tip": "To say pretend, fake, in Galician, use finxir."
    }
  ],
  "hr": [
    {
      "word": "eventualno",
      "pos": "adv",
      "looksLike": "eventually",
      "meaning": "possibly, if circumstances allow (not eventually)",
      "tip": "To say eventually in Croatian, use na kraju or konačno."
    },
    {
      "word": "aktualan",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "current, topical, relevant right now",
      "tip": "To say actual (real) in Croatian, use stvaran or pravi."
    },
    {
      "word": "šef",
      "pos": "noun",
      "looksLike": "chef",
      "meaning": "boss, manager, head of a department",
      "tip": "To say chef (cook) in Croatian, use kuhar."
    },
    {
      "word": "gimnazija",
      "pos": "noun",
      "looksLike": "gymnasium",
      "meaning": "an academic-track secondary school (grammar school)",
      "tip": "To say gymnasium (for exercise) in Croatian, use teretana."
    },
    {
      "word": "ambulanta",
      "pos": "noun",
      "looksLike": "ambulance",
      "meaning": "a doctor's clinic or outpatient surgery",
      "tip": "To say ambulance (the vehicle) in Croatian, use hitna pomoć."
    },
    {
      "word": "recept",
      "pos": "noun",
      "looksLike": "receipt",
      "meaning": "a cooking recipe, or a medical prescription",
      "tip": "To say receipt (proof of purchase) in Croatian, use račun."
    },
    {
      "word": "bilijun",
      "pos": "noun",
      "looksLike": "billion",
      "meaning": "a trillion (10^12)",
      "tip": "To say billion (10^9) in Croatian, use milijarda."
    },
    {
      "word": "prezervativ",
      "pos": "noun",
      "looksLike": "preservative",
      "meaning": "a condom",
      "tip": "To say preservative (food additive) in Croatian, use konzervans."
    },
    {
      "word": "senzibilan",
      "pos": "adj",
      "looksLike": "sensible",
      "meaning": "emotionally sensitive, easily affected",
      "tip": "To say sensible (reasonable) in Croatian, use razuman."
    },
    {
      "word": "preparirati",
      "pos": "verb",
      "looksLike": "to prepare",
      "meaning": "to preserve or taxidermy a specimen",
      "tip": "To say to prepare (a meal, for an exam) in Croatian, use pripremiti."
    },
    {
      "word": "simpatičan",
      "pos": "adj",
      "looksLike": "sympathetic",
      "meaning": "nice, likeable, charming",
      "tip": "To say sympathetic (compassionate) in Croatian, use suosjećajan."
    },
    {
      "word": "genijalan",
      "pos": "adj",
      "looksLike": "genial",
      "meaning": "brilliant, showing genius",
      "tip": "To say genial (friendly, warm) in Croatian, use srdačan."
    },
    {
      "word": "novela",
      "pos": "noun",
      "looksLike": "novel",
      "meaning": "a novella, a short story",
      "tip": "To say novel (the book) in Croatian, use roman."
    },
    {
      "word": "banda",
      "pos": "noun",
      "looksLike": "band",
      "meaning": "a criminal gang",
      "tip": "To say band (music group) in Croatian, use bend."
    },
    {
      "word": "akademik",
      "pos": "noun",
      "looksLike": "academic",
      "meaning": "a member of the national Academy of Sciences (an academician)",
      "tip": "To say academic (adjective) in Croatian, use akademski."
    }
  ],
  "hu": [
    {
      "word": "aktuális",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "current, topical, up to date (relevant right now), not real or genuine",
      "tip": "To say actual (real) in Hungarian, use valódi or tényleges."
    },
    {
      "word": "szimpatikus",
      "pos": "adj",
      "looksLike": "sympathetic",
      "meaning": "likeable, nice, appealing (a person you warm to)",
      "tip": "To say sympathetic (compassionate, understanding) in Hungarian, use együttérző."
    },
    {
      "word": "novella",
      "pos": "noun",
      "looksLike": "novel",
      "meaning": "a short story (a short work of prose fiction)",
      "tip": "To say novel (a full length book) in Hungarian, use regény."
    },
    {
      "word": "gimnázium",
      "pos": "noun",
      "looksLike": "gymnasium",
      "meaning": "an academic secondary school, not a place for exercise",
      "tip": "To say gymnasium (for working out) in Hungarian, use edzőterem or tornaterem."
    },
    {
      "word": "prezervatív",
      "pos": "noun",
      "looksLike": "preservative",
      "meaning": "a condom",
      "tip": "To say preservative (a food additive) in Hungarian, use tartósítószer."
    },
    {
      "word": "villa",
      "pos": "noun",
      "looksLike": "villa",
      "meaning": "a fork (the eating utensil)",
      "tip": "In Hungarian, villa most often means a table fork; it can also mean a luxury house, but context makes clear which one."
    },
    {
      "word": "kocsi",
      "pos": "noun",
      "looksLike": "coach",
      "meaning": "a car, automobile (also a carriage or train car); this Hungarian word is actually the historical source of the English word coach",
      "tip": "For a coach (long distance bus) in Hungarian, use távolsági busz; for a sports coach, use edző."
    },
    {
      "word": "farmer",
      "pos": "noun",
      "looksLike": "farmer",
      "meaning": "jeans, denim trousers",
      "tip": "To say farmer (someone who farms) in Hungarian, use gazda or földműves."
    },
    {
      "word": "impregnál",
      "pos": "verb",
      "looksLike": "impregnate",
      "meaning": "to waterproof or treat a material such as fabric or shoes to resist water",
      "tip": "To say impregnate (make pregnant) in Hungarian, use teherbe ejt."
    },
    {
      "word": "keksz",
      "pos": "noun",
      "looksLike": "cakes",
      "meaning": "a biscuit, cookie, or cracker",
      "tip": "To say cake in Hungarian, use torta or sütemény."
    },
    {
      "word": "mappa",
      "pos": "noun",
      "looksLike": "map",
      "meaning": "a folder, for paper documents or computer files",
      "tip": "To say map (of a place) in Hungarian, use térkép."
    },
    {
      "word": "paszta",
      "pos": "noun",
      "looksLike": "pasta",
      "meaning": "a paste, a thick smooth substance such as tomato paste or toothpaste",
      "tip": "To say pasta (the Italian noodle dish) in Hungarian, use tészta."
    },
    {
      "word": "lektor",
      "pos": "noun",
      "looksLike": "lecture",
      "meaning": "an editor, proofreader, or manuscript reviewer",
      "tip": "To say lecture (a talk) in Hungarian, use előadás."
    },
    {
      "word": "masszív",
      "pos": "adj",
      "looksLike": "massive",
      "meaning": "sturdy, solid, robustly built, not necessarily huge",
      "tip": "To say massive (huge) in Hungarian, use hatalmas or óriási."
    },
    {
      "word": "szmoking",
      "pos": "noun",
      "looksLike": "smoking",
      "meaning": "a tuxedo, a dinner jacket",
      "tip": "To say smoking (the act of smoking) in Hungarian, use dohányzás."
    },
    {
      "word": "must",
      "pos": "noun",
      "looksLike": "must",
      "meaning": "unfermented grape juice, used in winemaking",
      "tip": "To say must (as in obligation, have to) in Hungarian, use kell."
    },
    {
      "word": "part",
      "pos": "noun",
      "looksLike": "part",
      "meaning": "a shore, riverbank, or coast",
      "tip": "To say part (a portion) in Hungarian, use rész."
    },
    {
      "word": "gumi",
      "pos": "noun",
      "looksLike": "gum",
      "meaning": "rubber (the material), a tire, or an eraser",
      "tip": "To say chewing gum in Hungarian, use rágógumi."
    }
  ],
  "hy": [
    {
      "word": "մագազին",
      "pos": "noun",
      "looksLike": "magazine",
      "meaning": "a shop, a store",
      "tip": "A printed magazine is ամսագիր in Armenian; մագազին only means a shop."
    },
    {
      "word": "անեկդոտ",
      "pos": "noun",
      "looksLike": "anecdote",
      "meaning": "a joke, a funny story",
      "tip": "A true short story (an anecdote) is պատմություն in Armenian; անեկդոտ means a joke."
    },
    {
      "word": "կաբինետ",
      "pos": "noun",
      "looksLike": "cabinet",
      "meaning": "an office or study room",
      "tip": "A cabinet (the furniture) is պահարան in Armenian; կաբինետ is just a room."
    },
    {
      "word": "կոստյում",
      "pos": "noun",
      "looksLike": "costume",
      "meaning": "a business suit",
      "tip": "A costume (fancy dress) is տարազ in Armenian; կոստյում means a business suit."
    },
    {
      "word": "րոպե",
      "pos": "noun",
      "looksLike": "rope",
      "meaning": "a minute (unit of time)",
      "tip": "Rope (the cord) is պարան in Armenian; րոպե always means a minute."
    },
    {
      "word": "համ",
      "pos": "noun",
      "looksLike": "ham",
      "meaning": "taste, flavor",
      "tip": "Ham (the meat) is խոզի միս (pork) in Armenian; համ just means taste or flavor."
    },
    {
      "word": "պատ",
      "pos": "noun",
      "looksLike": "pat",
      "meaning": "a wall",
      "tip": "To pat (tap gently) is շոյել in Armenian; պատ only means a wall."
    },
    {
      "word": "կրակ",
      "pos": "noun",
      "looksLike": "crack",
      "meaning": "fire, flame",
      "tip": "A crack (a split) is ճեղք in Armenian; կրակ means fire, as in կրակել, to shoot."
    },
    {
      "word": "տոն",
      "pos": "noun",
      "looksLike": "ton",
      "meaning": "a holiday, a feast day",
      "tip": "A ton (the weight) is տոննա in Armenian; տոն means a holiday, like Ամանոր, New Year."
    },
    {
      "word": "պար",
      "pos": "noun",
      "looksLike": "par",
      "meaning": "a dance",
      "tip": "Par (the golf or standard term) has no single Armenian match; պար always means a dance."
    }
  ],
  "id": [
    {
      "word": "map",
      "pos": "noun",
      "looksLike": "map",
      "meaning": "a folder for papers or documents",
      "tip": "A geographic map is 'peta' in Indonesian, not map."
    },
    {
      "word": "kopi",
      "pos": "noun",
      "looksLike": "copy",
      "meaning": "coffee (the drink)",
      "tip": "A copy or duplicate is 'salinan' or 'fotokopi' in Indonesian, not kopi."
    },
    {
      "word": "kolor",
      "pos": "noun",
      "looksLike": "color",
      "meaning": "men's underpants, boxer shorts",
      "tip": "Color (hue) is 'warna' in Indonesian, not kolor."
    },
    {
      "word": "artis",
      "pos": "noun",
      "looksLike": "artist",
      "meaning": "a celebrity or entertainer (actor, singer, TV personality)",
      "tip": "A painter or visual artist is 'pelukis' or 'seniman' in Indonesian, not artis."
    },
    {
      "word": "aktual",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "current, topical, up to date",
      "tip": "For actual or real, Indonesian uses 'sebenarnya' or 'nyata', not aktual."
    },
    {
      "word": "simpatik",
      "pos": "adj",
      "looksLike": "sympathetic",
      "meaning": "nice, likeable, charming",
      "tip": "To say someone is sympathetic and feels compassion, use 'bersimpati'; simpatik just means likeable."
    },
    {
      "word": "dosen",
      "pos": "noun",
      "looksLike": "dozen",
      "meaning": "a university lecturer or professor",
      "tip": "A dozen (twelve items) is 'lusin' in Indonesian, not dosen."
    },
    {
      "word": "kecap",
      "pos": "noun",
      "looksLike": "ketchup",
      "meaning": "soy sauce",
      "tip": "Tomato ketchup is 'saus tomat'; kecap means soy sauce and is actually the historical root of the English word ketchup."
    },
    {
      "word": "kaki",
      "pos": "noun",
      "looksLike": "khaki",
      "meaning": "a foot or leg",
      "tip": "The khaki color or fabric is a separate loanword in Indonesian, also spelled khaki."
    },
    {
      "word": "gang",
      "pos": "noun",
      "looksLike": "gang",
      "meaning": "a narrow street or alley",
      "tip": "A criminal gang is 'geng' in Indonesian, a different word from gang."
    },
    {
      "word": "air",
      "pos": "noun",
      "looksLike": "air",
      "meaning": "water",
      "tip": "The air you breathe is 'udara' in Indonesian, not air."
    },
    {
      "word": "ons",
      "pos": "noun",
      "looksLike": "ounce",
      "meaning": "100 grams",
      "tip": "An imperial ounce is about 28 grams, a very different amount, so don't mix them up when shopping."
    },
    {
      "word": "polis",
      "pos": "noun",
      "looksLike": "police",
      "meaning": "an insurance policy",
      "tip": "The police force is 'polisi' in Indonesian, a different word from polis."
    },
    {
      "word": "polisi",
      "pos": "noun",
      "looksLike": "policy",
      "meaning": "the police",
      "tip": "An insurance or company policy is 'polis' in Indonesian, a different word from polisi."
    },
    {
      "word": "pabrik",
      "pos": "noun",
      "looksLike": "fabric",
      "meaning": "a factory",
      "tip": "Cloth or fabric is 'kain' in Indonesian, not pabrik."
    },
    {
      "word": "pulsa",
      "pos": "noun",
      "looksLike": "pulse",
      "meaning": "prepaid mobile phone credit",
      "tip": "A heartbeat pulse is 'denyut nadi' in Indonesian, not pulsa."
    },
    {
      "word": "solar",
      "pos": "noun",
      "looksLike": "solar",
      "meaning": "diesel fuel",
      "tip": "Solar power or energy is 'tenaga surya'; solar alone at a gas station means diesel."
    },
    {
      "word": "gratifikasi",
      "pos": "noun",
      "looksLike": "gratification",
      "meaning": "a bribe or illicit gift to a public official (legal term)",
      "tip": "The feeling of pleasure or satisfaction is 'kepuasan' in Indonesian, not gratifikasi."
    }
  ],
  "is": [
    {
      "word": "gift",
      "pos": "adj",
      "looksLike": "gift",
      "meaning": "married",
      "tip": "To say gift (present) in Icelandic, use gjöf."
    },
    {
      "word": "barn",
      "pos": "noun",
      "looksLike": "barn",
      "meaning": "child",
      "tip": "To say barn (farm building) in Icelandic, use hlaða."
    },
    {
      "word": "kind",
      "pos": "noun",
      "looksLike": "kind",
      "meaning": "sheep",
      "tip": "To say kind (nice) in Icelandic, use vingjarnlegur."
    },
    {
      "word": "klósett",
      "pos": "noun",
      "looksLike": "closet",
      "meaning": "toilet, restroom",
      "tip": "To say closet (wardrobe) in Icelandic, use skápur."
    },
    {
      "word": "turn",
      "pos": "noun",
      "looksLike": "turn",
      "meaning": "tower",
      "tip": "To say turn (rotate) in Icelandic, use snúa."
    },
    {
      "word": "skin",
      "pos": "noun",
      "looksLike": "skin",
      "meaning": "shine, glow (as in sólskin, sunshine)",
      "tip": "To say skin (on your body) in Icelandic, use húð."
    },
    {
      "word": "frændi",
      "pos": "noun",
      "looksLike": "friend",
      "meaning": "uncle, male cousin",
      "tip": "To say friend in Icelandic, use vinur."
    },
    {
      "word": "sofa",
      "pos": "verb",
      "looksLike": "sofa",
      "meaning": "to sleep",
      "tip": "To say sofa (the couch) in Icelandic, use sófi."
    },
    {
      "word": "rúm",
      "pos": "noun",
      "looksLike": "room",
      "meaning": "bed",
      "tip": "To say room (in a building) in Icelandic, use herbergi."
    },
    {
      "word": "ský",
      "pos": "noun",
      "looksLike": "sky",
      "meaning": "cloud",
      "tip": "To say sky in Icelandic, use himinn."
    },
    {
      "word": "skyrta",
      "pos": "noun",
      "looksLike": "skirt",
      "meaning": "shirt",
      "tip": "To say skirt in Icelandic, use pils."
    },
    {
      "word": "mold",
      "pos": "noun",
      "looksLike": "mold",
      "meaning": "earth, soil",
      "tip": "To say mold (fungus) in Icelandic, use mygla."
    },
    {
      "word": "húsbóndi",
      "pos": "noun",
      "looksLike": "husband",
      "meaning": "master of the house, head of household",
      "tip": "To say husband in everyday Icelandic, use eiginmaður."
    },
    {
      "word": "svampur",
      "pos": "noun",
      "looksLike": "swamp",
      "meaning": "sponge",
      "tip": "To say swamp in Icelandic, use mýri."
    },
    {
      "word": "töff",
      "pos": "adj",
      "looksLike": "tough",
      "meaning": "cool, stylish, fashionable",
      "tip": "To say tough (hard to break) in Icelandic, use harður."
    },
    {
      "word": "klikka",
      "pos": "verb",
      "looksLike": "click",
      "meaning": "to fail, malfunction, go wrong",
      "tip": "To say click (a mouse or link) in Icelandic, use smella."
    },
    {
      "word": "vinka",
      "pos": "verb",
      "looksLike": "wink",
      "meaning": "to wave (with the hand)",
      "tip": "To say wink in Icelandic, use blikka."
    }
  ],
  "ka": [
    {
      "word": "მიტინგი",
      "pos": "noun",
      "looksLike": "meeting",
      "meaning": "a political rally or protest demonstration, not an ordinary business or work meeting",
      "tip": "To say meeting (a work meeting) in Georgian, use შეხვედრა (shekhvedra)."
    },
    {
      "word": "აქტუალური",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "relevant, topical, currently important, not real or true",
      "tip": "To say actual (real) in Georgian, use რეალური (realuri) or ნამდვილი (namdvili)."
    },
    {
      "word": "სიმპათიური",
      "pos": "adj",
      "looksLike": "sympathetic",
      "meaning": "nice looking, likeable, cute or charming, not compassionate",
      "tip": "To say sympathetic (compassionate) in Georgian, use თანამგრძნობი (tanamgrdznobi)."
    },
    {
      "word": "პრეზერვატივი",
      "pos": "noun",
      "looksLike": "preservative",
      "meaning": "a condom, not a food additive that prevents spoilage",
      "tip": "To say preservative (food additive) in Georgian, use კონსერვანტი (konservanti)."
    },
    {
      "word": "ანეგდოტი",
      "pos": "noun",
      "looksLike": "anecdote",
      "meaning": "a joke or funny story, not a true short personal account of an event",
      "tip": "To say anecdote (a true short story) in Georgian, use ისტორია (istoria) or შემთხვევა (shemtkhveva)."
    },
    {
      "word": "ფაბრიკა",
      "pos": "noun",
      "looksLike": "fabric",
      "meaning": "a factory, not cloth or textile material",
      "tip": "To say fabric (cloth) in Georgian, use ქსოვილი (ksovili)."
    },
    {
      "word": "ბალონი",
      "pos": "noun",
      "looksLike": "balloon",
      "meaning": "a gas cylinder or canister (also colloquially a car tire), not a rubber party balloon",
      "tip": "To say balloon (party balloon) in Georgian, use ბუშტი (bushti)."
    },
    {
      "word": "ბლანკი",
      "pos": "noun",
      "looksLike": "blank",
      "meaning": "an official printed form to fill in, not empty space",
      "tip": "To say blank (empty) in Georgian, use ცარიელი (tsarieli)."
    },
    {
      "word": "კაბინეტი",
      "pos": "noun",
      "looksLike": "cabinet",
      "meaning": "an office or study room, such as a doctor's consulting room, not a piece of storage furniture",
      "tip": "To say cabinet (furniture) in Georgian, use კარადა (karada) or შკაფი (shkapi)."
    },
    {
      "word": "ნოველა",
      "pos": "noun",
      "looksLike": "novel",
      "meaning": "a short story or novella, not a full length book",
      "tip": "To say novel (a full length book) in Georgian, use რომანი (romani)."
    },
    {
      "word": "სპექტაკლი",
      "pos": "noun",
      "looksLike": "spectacle",
      "meaning": "a theatre play or stage performance, not an impressive public show in general",
      "tip": "To say spectacle (an impressive show) in Georgian, use სანახაობა (sanakhaoba)."
    },
    {
      "word": "ინტელიგენტი",
      "pos": "noun",
      "looksLike": "intelligent",
      "meaning": "a member of the educated professional class, an educated and cultured person, not simply someone smart",
      "tip": "To say intelligent (smart) in Georgian, use ჭკვიანი (chkviani)."
    }
  ],
  "kk": [
    {
      "word": "магазин",
      "pos": "noun",
      "looksLike": "magazine",
      "meaning": "a shop, a store",
      "tip": "It means a shop; a magazine (periodical) is журнал in Kazakh."
    },
    {
      "word": "костюм",
      "pos": "noun",
      "looksLike": "costume",
      "meaning": "a suit (formal jacket and trousers)",
      "tip": "It means a business suit, not a fancy dress costume."
    },
    {
      "word": "кабинет",
      "pos": "noun",
      "looksLike": "cabinet",
      "meaning": "an office, a private room",
      "tip": "It means a room (like a doctor's office), not a piece of furniture."
    },
    {
      "word": "фамилия",
      "pos": "noun",
      "looksLike": "family",
      "meaning": "surname, last name",
      "tip": "It means surname; отбасы is the Kazakh word for family."
    },
    {
      "word": "батон",
      "pos": "noun",
      "looksLike": "baton",
      "meaning": "a loaf of white bread",
      "tip": "It means a loaf of bread, not a stick or rod."
    },
    {
      "word": "мен",
      "pos": "noun",
      "looksLike": "men",
      "meaning": "I, me",
      "tip": "It means I; ерлер is the Kazakh word for men."
    },
    {
      "word": "ит",
      "pos": "noun",
      "looksLike": "it",
      "meaning": "dog",
      "tip": "It means dog; the pronoun it is ол in Kazakh."
    },
    {
      "word": "бар",
      "pos": "adj",
      "looksLike": "bar",
      "meaning": "there is, exists, available",
      "tip": "It's an existential word for there is/have, not a pub or a metal rod."
    },
    {
      "word": "бас",
      "pos": "noun",
      "looksLike": "bus",
      "meaning": "head (the body part)",
      "tip": "It means head; a bus is автобус in Kazakh."
    },
    {
      "word": "шай",
      "pos": "noun",
      "looksLike": "shy",
      "meaning": "tea",
      "tip": "It means tea; shy or timid is ұялшақ in Kazakh."
    },
    {
      "word": "май",
      "pos": "noun",
      "looksLike": "may",
      "meaning": "fat, oil, butter",
      "tip": "It means cooking fat or oil; the month May is Мамыр in Kazakh."
    },
    {
      "word": "тон",
      "pos": "noun",
      "looksLike": "ton",
      "meaning": "a sheepskin coat, fur coat",
      "tip": "It means a fur coat; the weight unit ton is тонна."
    },
    {
      "word": "мал",
      "pos": "noun",
      "looksLike": "mall",
      "meaning": "livestock, cattle",
      "tip": "It means farm animals, not a shopping center."
    },
    {
      "word": "ас",
      "pos": "noun",
      "looksLike": "as",
      "meaning": "food, a meal",
      "tip": "It's a noun for food, not the conjunction as."
    },
    {
      "word": "тіл",
      "pos": "noun",
      "looksLike": "till",
      "meaning": "tongue, language",
      "tip": "It means tongue or language, not until or a cash register."
    }
  ],
  "ky": [
    {
      "word": "ит",
      "pos": "noun",
      "looksLike": "it",
      "meaning": "dog",
      "tip": "The pronoun it in Kyrgyz is ал; ит just means the animal, dog."
    },
    {
      "word": "ат",
      "pos": "noun",
      "looksLike": "at",
      "meaning": "horse",
      "tip": "The preposition at has no single-word match in Kyrgyz (place is marked by a case ending); ат just means horse."
    },
    {
      "word": "кат",
      "pos": "noun",
      "looksLike": "cat",
      "meaning": "a written letter, note, or document",
      "tip": "Cat, the animal, is мышык in Kyrgyz; кат is a letter you write."
    },
    {
      "word": "жок",
      "pos": "particle",
      "looksLike": "joke",
      "meaning": "no, there isn't, doesn't exist",
      "tip": "Joke is тамаша in Kyrgyz; жок is just the everyday word for no."
    },
    {
      "word": "бел",
      "pos": "noun",
      "looksLike": "bell",
      "meaning": "waist, lower back",
      "tip": "Bell is коңгуроо in Kyrgyz; бел is your waist."
    },
    {
      "word": "тоо",
      "pos": "noun",
      "looksLike": "too",
      "meaning": "mountain",
      "tip": "Also, too is the particle да in Kyrgyz; тоо just means mountain."
    },
    {
      "word": "той",
      "pos": "noun",
      "looksLike": "toy",
      "meaning": "feast, wedding celebration",
      "tip": "A child's toy is оюнчук in Kyrgyz; той is a wedding feast."
    },
    {
      "word": "бай",
      "pos": "adj",
      "looksLike": "buy",
      "meaning": "rich, wealthy",
      "tip": "To buy is сатып алуу in Kyrgyz; бай just means rich."
    },
    {
      "word": "тон",
      "pos": "noun",
      "looksLike": "ton",
      "meaning": "fur coat, sheepskin coat",
      "tip": "The weight unit ton is тонна in Kyrgyz; тон is just a coat."
    },
    {
      "word": "терс",
      "pos": "adj",
      "looksLike": "terse",
      "meaning": "wrong, negative, backwards",
      "tip": "Terse means brief in speech in English; терс means wrong or negative in Kyrgyz, an unrelated sense."
    },
    {
      "word": "мал",
      "pos": "noun",
      "looksLike": "mall",
      "meaning": "livestock, cattle",
      "tip": "A shopping mall is соода борбору in Kyrgyz; мал is farm livestock."
    },
    {
      "word": "жаз",
      "pos": "noun",
      "looksLike": "jazz",
      "meaning": "spring, the season",
      "tip": "The music genre is spelled джаз in Kyrgyz, with an extra д; жаз means spring."
    },
    {
      "word": "тил",
      "pos": "noun",
      "looksLike": "till",
      "meaning": "language, tongue",
      "tip": "Until, till is чейин in Kyrgyz; тил means language or the tongue."
    },
    {
      "word": "фамилия",
      "pos": "noun",
      "looksLike": "family",
      "meaning": "surname, last name",
      "tip": "Family is үй-бүлө in Kyrgyz; фамилия is just your surname."
    },
    {
      "word": "магазин",
      "pos": "noun",
      "looksLike": "magazine",
      "meaning": "shop, store",
      "tip": "Magazine, the periodical, is журнал in Kyrgyz; магазин is a shop."
    },
    {
      "word": "презерватив",
      "pos": "noun",
      "looksLike": "preservative",
      "meaning": "condom",
      "tip": "A food preservative is unrelated; презерватив in Kyrgyz means condom."
    },
    {
      "word": "батон",
      "pos": "noun",
      "looksLike": "baton",
      "meaning": "a long loaf of white bread",
      "tip": "A relay or conductor's baton is таяк in Kyrgyz; батон is just a bread loaf."
    },
    {
      "word": "торт",
      "pos": "noun",
      "looksLike": "tort",
      "meaning": "cake",
      "tip": "A legal tort is unrelated; торт in Kyrgyz is simply a cake."
    }
  ],
  "lt": [
    {
      "word": "prezervatyvas",
      "pos": "noun",
      "looksLike": "preservative",
      "meaning": "a condom",
      "tip": "To say preservative (food additive) in Lithuanian, use konservantas."
    },
    {
      "word": "fabrikas",
      "pos": "noun",
      "looksLike": "fabric",
      "meaning": "a factory",
      "tip": "To say fabric (cloth) in Lithuanian, use audinys."
    },
    {
      "word": "receptas",
      "pos": "noun",
      "looksLike": "receipt",
      "meaning": "a recipe, or a medical prescription",
      "tip": "To say receipt (proof of purchase) in Lithuanian, use kvitas or čekis."
    },
    {
      "word": "aktualus",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "relevant, topical, currently important",
      "tip": "To say actual (real) in Lithuanian, use tikras."
    },
    {
      "word": "genialus",
      "pos": "adj",
      "looksLike": "genial",
      "meaning": "brilliant, of genius, ingenious",
      "tip": "To say genial (friendly, warm) in Lithuanian, use malonus or draugiškas."
    },
    {
      "word": "kabinetas",
      "pos": "noun",
      "looksLike": "cabinet",
      "meaning": "an office or study room",
      "tip": "To say cabinet (furniture) in Lithuanian, use spinta."
    },
    {
      "word": "akcija",
      "pos": "noun",
      "looksLike": "action",
      "meaning": "a sale or promotion, or a company share (stock)",
      "tip": "To say action in Lithuanian, use veiksmas."
    },
    {
      "word": "gimnazija",
      "pos": "noun",
      "looksLike": "gymnasium",
      "meaning": "a secondary (high) school",
      "tip": "To say gym (exercise place) in Lithuanian, use sporto salė."
    },
    {
      "word": "batonas",
      "pos": "noun",
      "looksLike": "baton",
      "meaning": "a loaf of white bread",
      "tip": "To say baton (stick) in Lithuanian, use lazda."
    },
    {
      "word": "simpatiškas",
      "pos": "adj",
      "looksLike": "sympathetic",
      "meaning": "likeable, nice looking, charming",
      "tip": "To say sympathetic (compassionate) in Lithuanian, use užjaučiantis."
    },
    {
      "word": "magistras",
      "pos": "noun",
      "looksLike": "magistrate",
      "meaning": "a holder of a Master's degree",
      "tip": "To say magistrate (judge) in Lithuanian, use teisėjas."
    },
    {
      "word": "artistas",
      "pos": "noun",
      "looksLike": "artist",
      "meaning": "a stage performer or actor",
      "tip": "To say artist (painter) in Lithuanian, use dailininkas."
    },
    {
      "word": "šefas",
      "pos": "noun",
      "looksLike": "chef",
      "meaning": "a boss, head of an organization",
      "tip": "To say chef (cook) in Lithuanian, use virėjas."
    },
    {
      "word": "redakcija",
      "pos": "noun",
      "looksLike": "redaction",
      "meaning": "an editorial office or staff of a publication",
      "tip": "To say redaction (censoring text) in Lithuanian, use cenzūra."
    },
    {
      "word": "portfelis",
      "pos": "noun",
      "looksLike": "portfolio",
      "meaning": "a briefcase or bag for carrying documents",
      "tip": "To say investment portfolio in Lithuanian, use investicijų portfelis."
    },
    {
      "word": "fiksuoti",
      "pos": "verb",
      "looksLike": "fix",
      "meaning": "to record, note down, document",
      "tip": "To say fix (repair) in Lithuanian, use taisyti or remontuoti."
    }
  ],
  "lv": [
    {
      "word": "aktuāls",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "current, topical, relevant, up to date",
      "tip": "To say actual in Latvian, use īstens or faktisks."
    },
    {
      "word": "eventuāli",
      "pos": "adv",
      "looksLike": "eventually",
      "meaning": "possibly, potentially, if need be",
      "tip": "To say eventually in Latvian, use galu galā or beigu beigās."
    },
    {
      "word": "simpātisks",
      "pos": "adj",
      "looksLike": "sympathetic",
      "meaning": "nice, likable, pleasant (usually about a person's looks or manner)",
      "tip": "To say sympathetic in Latvian, use līdzjūtīgs."
    },
    {
      "word": "patētisks",
      "pos": "adj",
      "looksLike": "pathetic",
      "meaning": "passionate, emotionally stirring, full of pathos",
      "tip": "To say pathetic (pitiful) in Latvian, use nožēlojams."
    },
    {
      "word": "prezervatīvs",
      "pos": "noun",
      "looksLike": "preservative",
      "meaning": "condom",
      "tip": "To say preservative (food additive) in Latvian, use konservants."
    },
    {
      "word": "parole",
      "pos": "noun",
      "looksLike": "parole",
      "meaning": "password",
      "tip": "To say parole (early release from prison) in Latvian, use nosacīta pirmstermiņa atbrīvošana."
    },
    {
      "word": "ģimnāzija",
      "pos": "noun",
      "looksLike": "gymnasium",
      "meaning": "a secondary (grammar) school",
      "tip": "To say gymnasium (a place to exercise) in Latvian, use sporta zāle."
    },
    {
      "word": "kabinets",
      "pos": "noun",
      "looksLike": "cabinet",
      "meaning": "an office or study, a room (also the Cabinet of Ministers)",
      "tip": "To say cabinet (a piece of furniture) in Latvian, use skapis."
    },
    {
      "word": "kotlete",
      "pos": "noun",
      "looksLike": "cutlet",
      "meaning": "a fried patty of ground or chopped meat",
      "tip": "To say cutlet (a slice of meat) in Latvian, use karbonāde."
    },
    {
      "word": "kostīms",
      "pos": "noun",
      "looksLike": "costume",
      "meaning": "a formal suit (matching jacket with trousers or a skirt)",
      "tip": "To say costume (fancy dress) in Latvian, use karnevāla tērps."
    },
    {
      "word": "dekāde",
      "pos": "noun",
      "looksLike": "decade",
      "meaning": "a period of ten days",
      "tip": "To say decade (ten years) in Latvian, use gadu desmits."
    },
    {
      "word": "kompromitēt",
      "pos": "verb",
      "looksLike": "compromise",
      "meaning": "to discredit or expose someone, damaging their reputation",
      "tip": "To say compromise (settle by mutual concession) in Latvian, use panākt kompromisu."
    },
    {
      "word": "kuriozs",
      "pos": "noun",
      "looksLike": "curious",
      "meaning": "an odd, funny incident, a curiosity",
      "tip": "To say curious (inquisitive) in Latvian, use zinātkārs."
    },
    {
      "word": "kase",
      "pos": "noun",
      "looksLike": "case",
      "meaning": "a cash desk, till, or ticket office",
      "tip": "To say case (an instance) in Latvian, use gadījums."
    }
  ],
  "mk": [
    {
      "word": "презерватив",
      "pos": "noun",
      "looksLike": "preservative",
      "meaning": "condom",
      "tip": "To say preservative (for food) in Macedonian, use конзерванс."
    },
    {
      "word": "симпатичен",
      "pos": "adj",
      "looksLike": "sympathetic",
      "meaning": "nice, likeable, cute (pleasant in manner or looks)",
      "tip": "To say sympathetic (feeling compassion) in Macedonian, use сочувствителен."
    },
    {
      "word": "гимназија",
      "pos": "noun",
      "looksLike": "gymnasium",
      "meaning": "an academic high school (secondary school)",
      "tip": "To say gymnasium (place to work out) in Macedonian, use теретана."
    },
    {
      "word": "клозет",
      "pos": "noun",
      "looksLike": "closet",
      "meaning": "toilet, restroom",
      "tip": "To say closet (storage cupboard) in Macedonian, use плакар."
    },
    {
      "word": "фабрика",
      "pos": "noun",
      "looksLike": "fabric",
      "meaning": "factory",
      "tip": "To say fabric (cloth) in Macedonian, use ткаенина."
    },
    {
      "word": "актуелен",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "current, topical, up to date",
      "tip": "To say actual (real, existing) in Macedonian, use вистински."
    },
    {
      "word": "евентуално",
      "pos": "adv",
      "looksLike": "eventually",
      "meaning": "possibly, perhaps",
      "tip": "To say eventually (in the end, after some time) in Macedonian, use на крајот or конечно."
    },
    {
      "word": "генијален",
      "pos": "adj",
      "looksLike": "genial",
      "meaning": "brilliant, ingenious, of genius",
      "tip": "To say genial (friendly, warm) in Macedonian, use љубезен."
    },
    {
      "word": "лист",
      "pos": "noun",
      "looksLike": "list",
      "meaning": "a leaf (of a plant) or a sheet of paper",
      "tip": "To say list (of items) in Macedonian, use листа or список."
    },
    {
      "word": "магацин",
      "pos": "noun",
      "looksLike": "magazine",
      "meaning": "warehouse, storeroom",
      "tip": "To say magazine (periodical) in Macedonian, use списание."
    },
    {
      "word": "пансион",
      "pos": "noun",
      "looksLike": "pension",
      "meaning": "a guesthouse or small boarding house",
      "tip": "To say pension (retirement income) in Macedonian, use пензија."
    },
    {
      "word": "фамилијарен",
      "pos": "adj",
      "looksLike": "familiar",
      "meaning": "informal, close, intimate (familylike)",
      "tip": "To say familiar (well known, recognized) in Macedonian, use познат."
    },
    {
      "word": "конкурс",
      "pos": "noun",
      "looksLike": "concourse",
      "meaning": "a competition or contest (for a job, prize, or school place)",
      "tip": "To say concourse (large open hall) in Macedonian, use хол or сала."
    },
    {
      "word": "ревизија",
      "pos": "noun",
      "looksLike": "revision",
      "meaning": "an audit (formal financial or official review)",
      "tip": "To say revision (editing a draft) in Macedonian, use преработка."
    },
    {
      "word": "мода",
      "pos": "noun",
      "looksLike": "mode",
      "meaning": "fashion, a style trend",
      "tip": "To say mode (manner, method, or device setting) in Macedonian, use режим or начин."
    }
  ],
  "mn": [
    {
      "word": "муу",
      "pos": "adj",
      "looksLike": "moo",
      "meaning": "bad",
      "tip": "Muu means bad (opposite of сайн, good); it has nothing to do with a cow's moo."
    },
    {
      "word": "тоо",
      "pos": "noun",
      "looksLike": "too",
      "meaning": "number, count",
      "tip": "To say too (also) in Mongolian, use бас; тоо only refers to numbers."
    },
    {
      "word": "бар",
      "pos": "noun",
      "looksLike": "bar",
      "meaning": "tiger (as in Бар жил, Year of the Tiger)",
      "tip": "Unrelated to a drinking bar, which is understood from context or called цэнгээний газар."
    },
    {
      "word": "сум",
      "pos": "noun",
      "looksLike": "sum",
      "meaning": "arrow, bullet (also: a rural district)",
      "tip": "To say sum (a total) in Mongolian, use нийлбэр."
    },
    {
      "word": "гал",
      "pos": "noun",
      "looksLike": "gal",
      "meaning": "fire",
      "tip": "To say gal (girl) in Mongolian, use охин."
    },
    {
      "word": "толь",
      "pos": "noun",
      "looksLike": "toll",
      "meaning": "mirror",
      "tip": "To say toll (a fee) in Mongolian, use хураамж."
    },
    {
      "word": "гэр",
      "pos": "noun",
      "looksLike": "gear",
      "meaning": "home, traditional yurt",
      "tip": "To say gear (equipment) in Mongolian, use хэрэгсэл."
    },
    {
      "word": "ус",
      "pos": "noun",
      "looksLike": "us",
      "meaning": "water",
      "tip": "To say us (the pronoun) in Mongolian, use бид."
    },
    {
      "word": "гоо",
      "pos": "noun",
      "looksLike": "goo",
      "meaning": "beauty, loveliness (as in гоо сайхан)",
      "tip": "To say goo (a sticky substance) in Mongolian, describe it as наалдамхай (sticky)."
    },
    {
      "word": "од",
      "pos": "noun",
      "looksLike": "odd",
      "meaning": "star",
      "tip": "To say odd (strange, or a number not divisible by two) in Mongolian, use хачин or сондгой."
    },
    {
      "word": "ид",
      "pos": "verb",
      "looksLike": "id",
      "meaning": "Eat! (imperative command, bare stem of идэх)",
      "tip": "To say ID (identification) in Mongolian, use иргэний үнэмлэх."
    }
  ],
  "ms": [
    {
      "word": "air",
      "pos": "noun",
      "looksLike": "air",
      "meaning": "water",
      "tip": "To say air (the gas you breathe) in Malay, use udara."
    },
    {
      "word": "beg",
      "pos": "noun",
      "looksLike": "beg",
      "meaning": "bag (for carrying things)",
      "tip": "To say beg, meaning to plead, in Malay, use merayu or memohon."
    },
    {
      "word": "jumpa",
      "pos": "verb",
      "looksLike": "jump",
      "meaning": "to meet, to see someone (as in jumpa lagi, see you again)",
      "tip": "To say jump in Malay, use lompat."
    },
    {
      "word": "bomba",
      "pos": "noun",
      "looksLike": "bomb",
      "meaning": "fire brigade, firefighters (from Portuguese bombeiro)",
      "tip": "The Malay word for an explosive bomb is bom, not bomba."
    },
    {
      "word": "kicap",
      "pos": "noun",
      "looksLike": "ketchup",
      "meaning": "soy sauce",
      "tip": "Tomato ketchup in Malay is kicap tomato or sos tomato."
    },
    {
      "word": "comel",
      "pos": "adj",
      "looksLike": "comely",
      "meaning": "cute, adorable (of a baby, pet, or small thing)",
      "tip": "For comely, meaning an attractive adult, use cantik or menarik."
    },
    {
      "word": "berat",
      "pos": "adj",
      "looksLike": "beret",
      "meaning": "heavy",
      "tip": "The hat is topi beret in Malay; berat just means heavy."
    },
    {
      "word": "bakar",
      "pos": "verb",
      "looksLike": "baker",
      "meaning": "to burn, roast, or grill",
      "tip": "A baker who makes bread is tukang roti in Malay."
    },
    {
      "word": "loji",
      "pos": "noun",
      "looksLike": "lodge",
      "meaning": "an industrial plant or factory (e.g. a power plant)",
      "tip": "For a lodge or cabin in Malay, use pondok."
    },
    {
      "word": "fitnah",
      "pos": "noun",
      "looksLike": "fitness",
      "meaning": "slander, defamation, a false accusation",
      "tip": "Physical fitness in Malay is kecergasan."
    },
    {
      "word": "kolam",
      "pos": "noun",
      "looksLike": "column",
      "meaning": "a pond or pool",
      "tip": "A column, meaning a pillar or a line of text, is tiang or lajur in Malay."
    }
  ],
  "nl": [
    {
      "word": "kind",
      "pos": "noun",
      "looksLike": "kind",
      "meaning": "child",
      "tip": "For kind (nice), Dutch says aardig or vriendelijk."
    },
    {
      "word": "wet",
      "pos": "noun",
      "looksLike": "wet",
      "meaning": "law",
      "tip": "For wet (moist), Dutch says nat."
    },
    {
      "word": "bad",
      "pos": "noun",
      "looksLike": "bad",
      "meaning": "bath",
      "tip": "For bad (not good), Dutch says slecht."
    },
    {
      "word": "slim",
      "pos": "adj",
      "looksLike": "slim",
      "meaning": "smart, clever, intelligent",
      "tip": "For slim (thin), Dutch says slank or dun."
    },
    {
      "word": "ramp",
      "pos": "noun",
      "looksLike": "ramp",
      "meaning": "disaster, catastrophe",
      "tip": "For a ramp (slope), Dutch says helling."
    },
    {
      "word": "brutaal",
      "pos": "adj",
      "looksLike": "brutal",
      "meaning": "cheeky, insolent, rude",
      "tip": "For brutal (violent), Dutch says wreed or bruut."
    },
    {
      "word": "braaf",
      "pos": "adj",
      "looksLike": "brave",
      "meaning": "well-behaved, obedient (of a child or pet)",
      "tip": "For brave (courageous), Dutch says moedig or dapper."
    },
    {
      "word": "stout",
      "pos": "adj",
      "looksLike": "stout",
      "meaning": "naughty, badly behaved",
      "tip": "For stout (sturdy), Dutch says stevig."
    },
    {
      "word": "glad",
      "pos": "adj",
      "looksLike": "glad",
      "meaning": "slippery, smooth",
      "tip": "For glad (happy), Dutch says blij."
    },
    {
      "word": "raar",
      "pos": "adj",
      "looksLike": "rare",
      "meaning": "strange, weird, odd",
      "tip": "For rare (uncommon), Dutch says zeldzaam."
    },
    {
      "word": "trap",
      "pos": "noun",
      "looksLike": "trap",
      "meaning": "stairs, staircase",
      "tip": "For a trap (snare), Dutch says val."
    },
    {
      "word": "bang",
      "pos": "adj",
      "looksLike": "bang",
      "meaning": "afraid, scared",
      "tip": "For a bang (loud noise), Dutch says knal."
    },
    {
      "word": "mening",
      "pos": "noun",
      "looksLike": "meaning",
      "meaning": "opinion",
      "tip": "For meaning (of a word), Dutch says betekenis."
    },
    {
      "word": "biljoen",
      "pos": "noun",
      "looksLike": "billion",
      "meaning": "trillion (10^12)",
      "tip": "Dutch billion is miljard; biljoen is one step higher."
    },
    {
      "word": "file",
      "pos": "noun",
      "looksLike": "file",
      "meaning": "a traffic jam",
      "tip": "For a file (documents), Dutch says dossier or bestand."
    },
    {
      "word": "pet",
      "pos": "noun",
      "looksLike": "pet",
      "meaning": "a cap, baseball cap",
      "tip": "For a pet (animal), Dutch says huisdier."
    },
    {
      "word": "willen",
      "pos": "verb",
      "looksLike": "will",
      "meaning": "to want (to do something)",
      "tip": "For future will, Dutch uses zullen (ik zal gaan, I will go)."
    },
    {
      "word": "actueel",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "current, up to date, topical",
      "tip": "For actual (real), Dutch says werkelijk or feitelijk."
    }
  ],
  "no": [
    {
      "word": "gift",
      "pos": "adj",
      "looksLike": "gift",
      "meaning": "married (as a noun it also means poison)",
      "tip": "To say gift (a present) in Norwegian, use gave."
    },
    {
      "word": "fart",
      "pos": "noun",
      "looksLike": "fart",
      "meaning": "speed",
      "tip": "To say fart (breaking wind) in Norwegian, use promp or fjert."
    },
    {
      "word": "hell",
      "pos": "noun",
      "looksLike": "hell",
      "meaning": "luck, good fortune",
      "tip": "To say hell (the underworld) in Norwegian, use helvete."
    },
    {
      "word": "barn",
      "pos": "noun",
      "looksLike": "barn",
      "meaning": "child",
      "tip": "To say barn (farm building) in Norwegian, use låve."
    },
    {
      "word": "anger",
      "pos": "noun",
      "looksLike": "anger",
      "meaning": "regret, remorse",
      "tip": "To say anger (the emotion) in Norwegian, use sinne."
    },
    {
      "word": "ansvar",
      "pos": "noun",
      "looksLike": "answer",
      "meaning": "responsibility",
      "tip": "To say answer in Norwegian, use svar."
    },
    {
      "word": "bevare",
      "pos": "verb",
      "looksLike": "beware",
      "meaning": "to preserve, keep safe",
      "tip": "To say beware (be cautious) in Norwegian, use vokt deg."
    },
    {
      "word": "aktuell",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "current, topical, relevant",
      "tip": "To say actual (real) in Norwegian, use faktisk or virkelig."
    },
    {
      "word": "eventuelt",
      "pos": "adv",
      "looksLike": "eventually",
      "meaning": "possibly, if need be",
      "tip": "To say eventually (in time) in Norwegian, use til slutt or omsider."
    },
    {
      "word": "sympatisk",
      "pos": "adj",
      "looksLike": "sympathetic",
      "meaning": "nice, likeable",
      "tip": "To say sympathetic (compassionate) in Norwegian, use medfølende."
    },
    {
      "word": "genial",
      "pos": "adj",
      "looksLike": "genial",
      "meaning": "brilliant, ingenious",
      "tip": "To say genial (friendly, warm) in Norwegian, use vennlig or hjertelig."
    },
    {
      "word": "lykkelig",
      "pos": "adj",
      "looksLike": "lucky",
      "meaning": "happy",
      "tip": "To say lucky in Norwegian, use heldig."
    },
    {
      "word": "novelle",
      "pos": "noun",
      "looksLike": "novel",
      "meaning": "short story",
      "tip": "To say novel (a full length book) in Norwegian, use roman."
    },
    {
      "word": "korn",
      "pos": "noun",
      "looksLike": "corn",
      "meaning": "grain, cereal crop",
      "tip": "To say corn (maize) in Norwegian, use mais."
    },
    {
      "word": "blankett",
      "pos": "noun",
      "looksLike": "blanket",
      "meaning": "an official form (to fill in)",
      "tip": "To say blanket (bed cover) in Norwegian, use teppe."
    },
    {
      "word": "oversikt",
      "pos": "noun",
      "looksLike": "oversight",
      "meaning": "overview, summary",
      "tip": "To say oversight (a mistake) in Norwegian, use forglemmelse."
    },
    {
      "word": "rente",
      "pos": "noun",
      "looksLike": "rent",
      "meaning": "interest (on money, e.g. a bank rate)",
      "tip": "To say rent (for housing) in Norwegian, use leie."
    },
    {
      "word": "mobbe",
      "pos": "verb",
      "looksLike": "mob",
      "meaning": "to bully",
      "tip": "To say mob (a crowd) in Norwegian, use folkemengde."
    }
  ],
  "pl": [
    {
      "word": "aktualny",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "current, up to date",
      "tip": "To say actual/real in Polish, use rzeczywisty or faktyczny."
    },
    {
      "word": "ewentualnie",
      "pos": "adv",
      "looksLike": "eventually",
      "meaning": "possibly, alternatively, if need be",
      "tip": "To say eventually in Polish, use w końcu or ostatecznie."
    },
    {
      "word": "pensja",
      "pos": "noun",
      "looksLike": "pension",
      "meaning": "salary, monthly wages",
      "tip": "To say pension (retirement income) in Polish, use emerytura."
    },
    {
      "word": "lektura",
      "pos": "noun",
      "looksLike": "lecture",
      "meaning": "required reading, assigned reading material (especially at school)",
      "tip": "To say lecture (a talk) in Polish, use wykład."
    },
    {
      "word": "fabryka",
      "pos": "noun",
      "looksLike": "fabric",
      "meaning": "factory, manufacturing plant",
      "tip": "To say fabric (cloth) in Polish, use tkanina."
    },
    {
      "word": "dres",
      "pos": "noun",
      "looksLike": "dress",
      "meaning": "tracksuit, sweatsuit",
      "tip": "To say dress (the garment) in Polish, use sukienka."
    },
    {
      "word": "dywan",
      "pos": "noun",
      "looksLike": "divan",
      "meaning": "carpet, rug",
      "tip": "To say divan (a couch/sofa) in Polish, use sofa or kanapa."
    },
    {
      "word": "transparent",
      "pos": "noun",
      "looksLike": "transparent",
      "meaning": "banner, placard (carried at a march or rally)",
      "tip": "To say transparent (see through) in Polish, use przezroczysty."
    },
    {
      "word": "ordynarny",
      "pos": "adj",
      "looksLike": "ordinary",
      "meaning": "vulgar, crude, rude",
      "tip": "To say ordinary (usual, plain) in Polish, use zwyczajny or zwykły."
    },
    {
      "word": "pupil",
      "pos": "noun",
      "looksLike": "pupil",
      "meaning": "a pet (a cherished animal)",
      "tip": "To say pupil (a school student) in Polish, use uczeń."
    },
    {
      "word": "ekspedient",
      "pos": "noun",
      "looksLike": "expedient",
      "meaning": "shop assistant, sales clerk",
      "tip": "To say expedient (convenient, practical) in Polish, use korzystny or dogodny."
    },
    {
      "word": "klozet",
      "pos": "noun",
      "looksLike": "closet",
      "meaning": "toilet, restroom",
      "tip": "To say closet (a storage cupboard) in Polish, use szafa."
    },
    {
      "word": "prezerwatywa",
      "pos": "noun",
      "looksLike": "preservative",
      "meaning": "condom",
      "tip": "To say preservative (a food additive) in Polish, use konserwant."
    },
    {
      "word": "akademik",
      "pos": "noun",
      "looksLike": "academic",
      "meaning": "student dormitory, halls of residence",
      "tip": "To say academic (adj) in Polish, use akademicki."
    },
    {
      "word": "egzemplarz",
      "pos": "noun",
      "looksLike": "example",
      "meaning": "a copy (of a book or document)",
      "tip": "To say example in Polish, use przykład."
    },
    {
      "word": "frekwencja",
      "pos": "noun",
      "looksLike": "frequency",
      "meaning": "attendance, turnout",
      "tip": "To say frequency in Polish, use częstotliwość."
    },
    {
      "word": "paragon",
      "pos": "noun",
      "looksLike": "paragon",
      "meaning": "a shop receipt",
      "tip": "To say paragon (a model of excellence) in Polish, use wzór or ideał."
    },
    {
      "word": "stadium",
      "pos": "noun",
      "looksLike": "stadium",
      "meaning": "a stage or phase (of a disease or process)",
      "tip": "To say stadium (sports arena) in Polish, use stadion."
    }
  ],
  "ro": [
    {
      "word": "actual",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "current, present day (not real or genuine)",
      "tip": "For actual (real), say real or efectiv in Romanian."
    },
    {
      "word": "eventual",
      "pos": "adj",
      "looksLike": "eventual",
      "meaning": "possible, potential (as adverb: possibly, if need be)",
      "tip": "For eventually (in the end), say în cele din urmă in Romanian."
    },
    {
      "word": "librărie",
      "pos": "noun",
      "looksLike": "library",
      "meaning": "bookstore, bookshop",
      "tip": "Library is bibliotecă in Romanian."
    },
    {
      "word": "fabrică",
      "pos": "noun",
      "looksLike": "fabric",
      "meaning": "factory",
      "tip": "Fabric (cloth) is material or țesătură in Romanian."
    },
    {
      "word": "sensibil",
      "pos": "adj",
      "looksLike": "sensible",
      "meaning": "sensitive, easily affected physically or emotionally",
      "tip": "For sensible (reasonable), say rezonabil or cu judecată."
    },
    {
      "word": "simpatic",
      "pos": "adj",
      "looksLike": "sympathetic",
      "meaning": "nice, likeable, friendly",
      "tip": "For sympathetic (compassionate), say compătimitor."
    },
    {
      "word": "prezervativ",
      "pos": "noun",
      "looksLike": "preservative",
      "meaning": "condom",
      "tip": "Preservative (food additive) is conservant in Romanian."
    },
    {
      "word": "cameră",
      "pos": "noun",
      "looksLike": "camera",
      "meaning": "room, as in a house or hotel",
      "tip": "Camera (the photo device) is aparat foto in Romanian."
    },
    {
      "word": "magazin",
      "pos": "noun",
      "looksLike": "magazine",
      "meaning": "shop, store",
      "tip": "Magazine (the publication) is revistă in Romanian."
    },
    {
      "word": "a pretinde",
      "pos": "verb",
      "looksLike": "pretend",
      "meaning": "to claim, assert, or demand",
      "tip": "For pretend (make believe), say a se preface or a se face că."
    },
    {
      "word": "injurie",
      "pos": "noun",
      "looksLike": "injury",
      "meaning": "insult, verbal abuse",
      "tip": "Injury (physical harm) is rănire or vătămare in Romanian."
    },
    {
      "word": "a asista",
      "pos": "verb",
      "looksLike": "assist",
      "meaning": "to attend, be present at, witness",
      "tip": "For assist (help), say a ajuta in Romanian."
    },
    {
      "word": "fastidios",
      "pos": "adj",
      "looksLike": "fastidious",
      "meaning": "tedious, boring, tiresome",
      "tip": "For fastidious (fussy about detail), say meticulos or pretențios."
    },
    {
      "word": "gimnaziu",
      "pos": "noun",
      "looksLike": "gymnasium",
      "meaning": "lower secondary school, roughly grades 5 to 8",
      "tip": "Gymnasium (a sports hall) is sală de sport in Romanian."
    },
    {
      "word": "chef",
      "pos": "noun",
      "looksLike": "chef",
      "meaning": "mood or urge to do something, also a party",
      "tip": "Chef (head cook) is bucătar șef in Romanian."
    },
    {
      "word": "decadă",
      "pos": "noun",
      "looksLike": "decade",
      "meaning": "a period of ten consecutive days",
      "tip": "For decade (ten years), say deceniu in Romanian."
    },
    {
      "word": "a suporta",
      "pos": "verb",
      "looksLike": "support",
      "meaning": "to bear, endure, tolerate",
      "tip": "For support (to back or hold up), say a sprijini or a susține."
    },
    {
      "word": "roman",
      "pos": "noun",
      "looksLike": "Roman",
      "meaning": "a novel, a work of long fiction",
      "tip": "A roman is a novel; the ancient Romans are romanii in Romanian."
    }
  ],
  "sk": [
    {
      "word": "gymnázium",
      "pos": "noun",
      "looksLike": "gymnasium",
      "meaning": "an academic secondary school (grammar school), not a place for sports",
      "tip": "A workout gym is telocvičňa or posilňovňa in Slovak."
    },
    {
      "word": "aktuálny",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "current, up to date, topical",
      "tip": "Real/actual (not imaginary) is skutočný in Slovak."
    },
    {
      "word": "eventuálne",
      "pos": "adv",
      "looksLike": "eventually",
      "meaning": "possibly, potentially, if need be",
      "tip": "Eventually (in the end) is nakoniec in Slovak."
    },
    {
      "word": "sympatický",
      "pos": "adj",
      "looksLike": "sympathetic",
      "meaning": "nice, likeable, pleasant (about a person)",
      "tip": "Sympathetic (compassionate) is súcitný in Slovak."
    },
    {
      "word": "list",
      "pos": "noun",
      "looksLike": "list",
      "meaning": "a letter (mail) or a leaf (of a plant)",
      "tip": "A list of items is zoznam in Slovak."
    },
    {
      "word": "plot",
      "pos": "noun",
      "looksLike": "plot",
      "meaning": "a fence",
      "tip": "A story's plot is dej or zápletka in Slovak."
    },
    {
      "word": "šéf",
      "pos": "noun",
      "looksLike": "chef",
      "meaning": "boss, manager, head of an organization",
      "tip": "A cook is kuchár (head cook is šéfkuchár) in Slovak."
    },
    {
      "word": "fabrika",
      "pos": "noun",
      "looksLike": "fabric",
      "meaning": "a factory",
      "tip": "Fabric (cloth) is látka in Slovak."
    },
    {
      "word": "prezervatív",
      "pos": "noun",
      "looksLike": "preservative",
      "meaning": "a condom",
      "tip": "A food preservative is konzervačná látka in Slovak."
    },
    {
      "word": "kaucia",
      "pos": "noun",
      "looksLike": "caution",
      "meaning": "bail, or a security deposit",
      "tip": "Caution (carefulness) is opatrnosť in Slovak."
    },
    {
      "word": "novela",
      "pos": "noun",
      "looksLike": "novel",
      "meaning": "an amendment to a law",
      "tip": "A novel (the book) is román in Slovak."
    },
    {
      "word": "evidencia",
      "pos": "noun",
      "looksLike": "evidence",
      "meaning": "a register or record keeping system",
      "tip": "Evidence (proof) is dôkaz in Slovak."
    },
    {
      "word": "prospekt",
      "pos": "noun",
      "looksLike": "prospect",
      "meaning": "a promotional brochure or leaflet",
      "tip": "A prospect (possibility) is vyhliadka or perspektíva in Slovak."
    },
    {
      "word": "realizovať",
      "pos": "verb",
      "looksLike": "realize",
      "meaning": "to carry out, implement, or execute a plan",
      "tip": "To realize (mentally grasp) something is uvedomiť si in Slovak."
    },
    {
      "word": "kontrolovať",
      "pos": "verb",
      "looksLike": "control",
      "meaning": "to check, inspect, or verify",
      "tip": "To control (have power over) is ovládať in Slovak."
    },
    {
      "word": "promócia",
      "pos": "noun",
      "looksLike": "promotion",
      "meaning": "a university graduation ceremony",
      "tip": "A job promotion is povýšenie in Slovak."
    },
    {
      "word": "legitimácia",
      "pos": "noun",
      "looksLike": "legitimacy",
      "meaning": "an ID card or membership card",
      "tip": "Legitimacy (lawfulness) is legitímnosť or oprávnenosť in Slovak."
    }
  ],
  "sl": [
    {
      "word": "ambulanta",
      "pos": "noun",
      "looksLike": "ambulance",
      "meaning": "an outpatient clinic, a doctor's surgery",
      "tip": "To say ambulance (the vehicle) in Slovenian, use rešilni avto."
    },
    {
      "word": "angina",
      "pos": "noun",
      "looksLike": "angina",
      "meaning": "tonsillitis, a sore throat",
      "tip": "Slovenian angina usually means a sore throat, not chest pain; the heart condition is angina pektoris."
    },
    {
      "word": "recept",
      "pos": "noun",
      "looksLike": "receipt",
      "meaning": "a prescription, or a cooking recipe",
      "tip": "To say receipt (proof of payment) in Slovenian, use račun."
    },
    {
      "word": "trezor",
      "pos": "noun",
      "looksLike": "treasure",
      "meaning": "a safe, a bank vault",
      "tip": "To say treasure in Slovenian, use zaklad."
    },
    {
      "word": "simpatičen",
      "pos": "adj",
      "looksLike": "sympathetic",
      "meaning": "nice, likeable, charming",
      "tip": "To say sympathetic (compassionate) in Slovenian, use sočuten."
    },
    {
      "word": "gimnazija",
      "pos": "noun",
      "looksLike": "gymnasium",
      "meaning": "an academic secondary school preparing students for university",
      "tip": "To say gym (for exercise) in Slovenian, use telovadnica or fitnes."
    },
    {
      "word": "aktualen",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "current, topical, up to date",
      "tip": "To say actual (real, not fictional) in Slovenian, use dejanski."
    },
    {
      "word": "bilijon",
      "pos": "noun",
      "looksLike": "billion",
      "meaning": "a trillion (10^12), since Slovenian uses the long number scale",
      "tip": "To say billion (10^9) in Slovenian, use milijarda."
    },
    {
      "word": "akcija",
      "pos": "noun",
      "looksLike": "action",
      "meaning": "a sale, a special offer",
      "tip": "On shop signs, na akciji means 'on sale', not an action scene."
    },
    {
      "word": "stripar",
      "pos": "noun",
      "looksLike": "stripper",
      "meaning": "a comic book artist, a cartoonist",
      "tip": "It comes from strip (comic strip); nothing to do with striptease."
    },
    {
      "word": "hazarder",
      "pos": "noun",
      "looksLike": "hazard",
      "meaning": "a gambler",
      "tip": "To say hazard (danger) in Slovenian, use nevarnost."
    },
    {
      "word": "eventualno",
      "pos": "adv",
      "looksLike": "eventually",
      "meaning": "possibly, potentially, if need be",
      "tip": "To say eventually (in the end, after some time) in Slovenian, use sčasoma or na koncu."
    },
    {
      "word": "bencin",
      "pos": "noun",
      "looksLike": "benzene",
      "meaning": "gasoline, petrol",
      "tip": "The chemical benzene is a different word in Slovenian, benzen."
    },
    {
      "word": "fantazija",
      "pos": "noun",
      "looksLike": "fantasy",
      "meaning": "imagination",
      "tip": "Fantazija leans toward imagination as a mental faculty, not a wishful daydream or the fantasy genre."
    },
    {
      "word": "flipper",
      "pos": "noun",
      "looksLike": "flipper",
      "meaning": "a pinball machine",
      "tip": "To say flipper (a swim fin) in Slovenian, use plavutka."
    },
    {
      "word": "inštalacija",
      "pos": "noun",
      "looksLike": "installation",
      "meaning": "wiring, plumbing",
      "tip": "In a flat listing, inštalacije means the wiring and plumbing, not an art installation."
    },
    {
      "word": "kabinet",
      "pos": "noun",
      "looksLike": "cabinet",
      "meaning": "a small room, a study or home office",
      "tip": "To say cabinet (storage furniture) in Slovenian, use omarica."
    }
  ],
  "sq": [
    {
      "word": "librari",
      "pos": "noun",
      "looksLike": "library",
      "meaning": "bookshop, bookstore (a shop that sells books)",
      "tip": "To say library in Albanian, use bibliotekë."
    },
    {
      "word": "fabrikë",
      "pos": "noun",
      "looksLike": "fabric",
      "meaning": "factory",
      "tip": "To say fabric (cloth) in Albanian, use pëlhurë."
    },
    {
      "word": "simpatik",
      "pos": "adj",
      "looksLike": "sympathetic",
      "meaning": "nice, likeable, charming",
      "tip": "To say sympathetic (feeling compassion) in Albanian, use i/e dhembshur."
    },
    {
      "word": "aktual",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "current, present day, topical",
      "tip": "To say actual (real) in Albanian, use i/e vërtetë."
    },
    {
      "word": "magazinë",
      "pos": "noun",
      "looksLike": "magazine",
      "meaning": "shop, department store, warehouse",
      "tip": "To say magazine (periodical) in Albanian, use revistë."
    },
    {
      "word": "prezervativ",
      "pos": "noun",
      "looksLike": "preservative",
      "meaning": "condom",
      "tip": "To say preservative (food additive) in Albanian, use konservues."
    },
    {
      "word": "gjimnaz",
      "pos": "noun",
      "looksLike": "gymnasium",
      "meaning": "secondary school, high school",
      "tip": "To say gym/gymnasium (for exercise) in Albanian, use palestër or sallë sportive."
    },
    {
      "word": "patetik",
      "pos": "adj",
      "looksLike": "pathetic",
      "meaning": "full of pathos, emotionally moving, impassioned",
      "tip": "To say pathetic (pitifully poor) in Albanian, use i mjerë."
    },
    {
      "word": "novelë",
      "pos": "noun",
      "looksLike": "novel",
      "meaning": "novella, a prose work shorter than a full novel",
      "tip": "To say novel (a full length book) in Albanian, use roman."
    },
    {
      "word": "eventualisht",
      "pos": "adv",
      "looksLike": "eventually",
      "meaning": "possibly, if the case arises",
      "tip": "To say eventually (in the end) in Albanian, use më në fund or përfundimisht."
    },
    {
      "word": "konkurrent",
      "pos": "noun",
      "looksLike": "concurrent",
      "meaning": "competitor, rival",
      "tip": "To say concurrent (simultaneous) in Albanian, use i njëkohshëm."
    }
  ],
  "sr": [
    {
      "word": "eventualno",
      "pos": "adv",
      "looksLike": "eventually",
      "meaning": "possibly, potentially, if needed (not \"in the end\")",
      "tip": "To say eventually in Serbian, use na kraju or konačno."
    },
    {
      "word": "fabrika",
      "pos": "noun",
      "looksLike": "fabric",
      "meaning": "factory",
      "tip": "To say fabric (cloth, textile) in Serbian, use tkanina."
    },
    {
      "word": "simpatičan",
      "pos": "adj",
      "looksLike": "sympathetic",
      "meaning": "nice, likeable, charming, cute",
      "tip": "To say sympathetic (compassionate) in Serbian, use saosećajan."
    },
    {
      "word": "gimnazija",
      "pos": "noun",
      "looksLike": "gymnasium",
      "meaning": "an academic track secondary school (grammar school), not a place to exercise",
      "tip": "To say gymnasium (place for exercise) in Serbian, use teretana."
    },
    {
      "word": "aktuelan",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "current, topical, up to date",
      "tip": "To say actual (real, genuine) in Serbian, use stvaran or pravi."
    },
    {
      "word": "prezervativ",
      "pos": "noun",
      "looksLike": "preservative",
      "meaning": "condom",
      "tip": "To say preservative (food additive) in Serbian, use konzervans."
    },
    {
      "word": "recept",
      "pos": "noun",
      "looksLike": "receipt",
      "meaning": "a medical prescription, or a cooking recipe",
      "tip": "To say receipt (proof of payment) in Serbian, use račun."
    },
    {
      "word": "šef",
      "pos": "noun",
      "looksLike": "chef",
      "meaning": "boss, head of a department or office",
      "tip": "To say chef (professional cook) in Serbian, use kuvar."
    },
    {
      "word": "paradajz",
      "pos": "noun",
      "looksLike": "paradise",
      "meaning": "tomato",
      "tip": "To say paradise in Serbian, use raj."
    },
    {
      "word": "klozet",
      "pos": "noun",
      "looksLike": "closet",
      "meaning": "toilet, restroom",
      "tip": "To say closet (storage room, wardrobe) in Serbian, use orman or ostava."
    },
    {
      "word": "akademik",
      "pos": "noun",
      "looksLike": "academic",
      "meaning": "an academician, an elected member of the Academy of Sciences and Arts, not a general scholar",
      "tip": "To say academic (a university scholar) in Serbian, use profesor."
    },
    {
      "word": "advokat",
      "pos": "noun",
      "looksLike": "advocate",
      "meaning": "lawyer, attorney",
      "tip": "To say advocate (supporter of a cause) in Serbian, use zagovornik."
    },
    {
      "word": "apartman",
      "pos": "noun",
      "looksLike": "apartment",
      "meaning": "a furnished holiday or vacation rental suite",
      "tip": "To say apartment (an everyday home or flat) in Serbian, use stan."
    },
    {
      "word": "genijalan",
      "pos": "adj",
      "looksLike": "genial",
      "meaning": "brilliant, ingenious, of genius",
      "tip": "To say genial (warm, friendly) in Serbian, use srdačan."
    },
    {
      "word": "vest",
      "pos": "noun",
      "looksLike": "vest",
      "meaning": "a piece of news, a news report",
      "tip": "To say vest (sleeveless garment) in Serbian, use prsluk."
    },
    {
      "word": "bilion",
      "pos": "noun",
      "looksLike": "billion",
      "meaning": "trillion, not billion (Serbian traditionally follows the long numbering scale)",
      "tip": "To say billion (10^9) in Serbian, use milijarda."
    },
    {
      "word": "pasta",
      "pos": "noun",
      "looksLike": "pasta",
      "meaning": "a paste, most often toothpaste (pasta za zube)",
      "tip": "To say pasta (Italian noodles) in Serbian, use testenina."
    },
    {
      "word": "fond",
      "pos": "noun",
      "looksLike": "fond",
      "meaning": "a fund, a sum of money set aside for a purpose (e.g. pension fund)",
      "tip": "To say fond (of), meaning affectionate, in Serbian use naklonjen."
    }
  ],
  "sv": [
    {
      "word": "bra",
      "pos": "adj",
      "looksLike": "bra",
      "meaning": "good, well",
      "tip": "To say bra (the undergarment) in Swedish, use behå."
    },
    {
      "word": "glass",
      "pos": "noun",
      "looksLike": "glass",
      "meaning": "ice cream",
      "tip": "To say glass (the material) in Swedish, use glas, with just one s."
    },
    {
      "word": "gift",
      "pos": "noun",
      "looksLike": "gift",
      "meaning": "poison, venom (as an adjective, gift means married)",
      "tip": "To say gift (a present) in Swedish, use present or gåva."
    },
    {
      "word": "rock",
      "pos": "noun",
      "looksLike": "rock",
      "meaning": "coat, overcoat",
      "tip": "To say rock (a stone) in Swedish, use sten."
    },
    {
      "word": "kind",
      "pos": "noun",
      "looksLike": "kind",
      "meaning": "cheek",
      "tip": "To say kind (nice) in Swedish, use snäll."
    },
    {
      "word": "full",
      "pos": "adj",
      "looksLike": "full",
      "meaning": "drunk",
      "tip": "To say full (after a meal) in Swedish, use mätt."
    },
    {
      "word": "fart",
      "pos": "noun",
      "looksLike": "fart",
      "meaning": "speed",
      "tip": "A fartkontroll road sign just means a speed check, nothing rude."
    },
    {
      "word": "slut",
      "pos": "noun",
      "looksLike": "slut",
      "meaning": "the end, finished, sold out",
      "tip": "A rea slut sign in a shop just means the sale has ended."
    },
    {
      "word": "kock",
      "pos": "noun",
      "looksLike": "cock",
      "meaning": "chef, cook",
      "tip": "To say cock (the bird) in Swedish, use tupp."
    },
    {
      "word": "puss",
      "pos": "noun",
      "looksLike": "puss",
      "meaning": "kiss",
      "tip": "To say puss (the cat) in Swedish, use katt."
    },
    {
      "word": "prick",
      "pos": "noun",
      "looksLike": "prick",
      "meaning": "dot, spot, point",
      "tip": "Prickig just means spotted or polka dot, nothing vulgar."
    },
    {
      "word": "semester",
      "pos": "noun",
      "looksLike": "semester",
      "meaning": "vacation, paid leave from work",
      "tip": "To say semester (a school term) in Swedish, use termin."
    },
    {
      "word": "novell",
      "pos": "noun",
      "looksLike": "novel",
      "meaning": "short story",
      "tip": "To say novel (a full length book) in Swedish, use roman."
    },
    {
      "word": "eventuellt",
      "pos": "adv",
      "looksLike": "eventually",
      "meaning": "possibly, potentially",
      "tip": "To say eventually in Swedish, use till slut or så småningom."
    },
    {
      "word": "aktuell",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "current, topical, relevant right now",
      "tip": "To say actual in Swedish, use faktisk."
    },
    {
      "word": "sympatisk",
      "pos": "adj",
      "looksLike": "sympathetic",
      "meaning": "likeable, pleasant, nice (describing a person)",
      "tip": "To say sympathetic (compassionate) in Swedish, use medkännande."
    },
    {
      "word": "fabrik",
      "pos": "noun",
      "looksLike": "fabric",
      "meaning": "factory",
      "tip": "To say fabric (cloth) in Swedish, use tyg."
    },
    {
      "word": "barn",
      "pos": "noun",
      "looksLike": "barn",
      "meaning": "child",
      "tip": "To say barn (the farm building) in Swedish, use lada."
    }
  ],
  "sw": [
    {
      "word": "nazi",
      "pos": "noun",
      "looksLike": "Nazi",
      "meaning": "coconut",
      "tip": "For the WWII movement, Swahili says Wanazi (capitalized); nazi alone just means coconut."
    },
    {
      "word": "safari",
      "pos": "noun",
      "looksLike": "safari",
      "meaning": "a trip or journey of any kind (a bus ride, an errand, a business trip), not specifically a wildlife tour",
      "tip": "To specify a wildlife viewing tour, add words like ya kutazama wanyama pori; safari alone just means any trip."
    },
    {
      "word": "hoteli",
      "pos": "noun",
      "looksLike": "hotel",
      "meaning": "in everyday East African usage, a small local eatery or restaurant, not necessarily a place to sleep",
      "tip": "For overnight lodging, ask for hoteli ya kulala or a lodji, not just hoteli."
    },
    {
      "word": "pole",
      "pos": "adv",
      "looksLike": "pole",
      "meaning": "sorry, an expression of sympathy for someone's misfortune (not an apology for wrongdoing); doubled as pole pole, it means slowly, gently",
      "tip": "For a physical pole or stick, use nguzo or fimbo; pole alone means sorry, or slowly when doubled."
    },
    {
      "word": "stima",
      "pos": "noun",
      "looksLike": "steam",
      "meaning": "a ship or steamer; in everyday Kenyan and Ugandan Swahili, also electricity or the power supply",
      "tip": "For steam, the water vapor, use mvuke; stima means ship or electricity."
    },
    {
      "word": "posho",
      "pos": "noun",
      "looksLike": "portion",
      "meaning": "maize meal or flour, the staple used to cook ugali, or a food ration",
      "tip": "For a portion, a share or serving of something, use sehemu or fungu; posho means maize meal."
    },
    {
      "word": "salamu",
      "pos": "noun",
      "looksLike": "salami",
      "meaning": "greetings, regards",
      "tip": "The cured sausage is also salami in Swahili, a separate borrowed word; salamu alone just means greetings."
    },
    {
      "word": "choo",
      "pos": "noun",
      "looksLike": "choo-choo",
      "meaning": "toilet, latrine",
      "tip": "For a train, say treni or gari la moshi; choo just means toilet."
    }
  ],
  "tl": [
    {
      "word": "abogado",
      "pos": "noun",
      "looksLike": "avocado",
      "meaning": "lawyer, attorney",
      "tip": "To say avocado (the fruit) in Filipino, use abokado."
    },
    {
      "word": "Linggo",
      "pos": "noun",
      "looksLike": "lingo",
      "meaning": "Sunday, or a week",
      "tip": "To say lingo (slang, jargon) in Filipino, use salitang balbal."
    },
    {
      "word": "salvage",
      "pos": "verb",
      "looksLike": "salvage",
      "meaning": "to kill someone extrajudicially, to summarily execute",
      "tip": "To say salvage (to rescue) in Filipino, use sagipin."
    },
    {
      "word": "gimik",
      "pos": "noun",
      "looksLike": "gimmick",
      "meaning": "a night out or hangout with friends",
      "tip": "To say gimmick (a promotional trick) in Filipino, use pakulo."
    },
    {
      "word": "blowout",
      "pos": "noun",
      "looksLike": "blowout",
      "meaning": "treating friends or coworkers to food, often to celebrate a birthday",
      "tip": "To say a tire blowout in Filipino, use sumabog na gulong."
    },
    {
      "word": "brownout",
      "pos": "noun",
      "looksLike": "brownout",
      "meaning": "a complete power outage, what US English calls a blackout",
      "tip": "In US English a full outage is a blackout, not a brownout."
    },
    {
      "word": "viand",
      "pos": "noun",
      "looksLike": "viand",
      "meaning": "the ulam, the meat or vegetable dish eaten with rice",
      "tip": "To say food in general in Filipino, use pagkain, not viand."
    },
    {
      "word": "abusado",
      "pos": "adj",
      "looksLike": "abused",
      "meaning": "presumptuous, exploitative, someone who takes advantage or oversteps boundaries",
      "tip": "To say abused (mistreated) in Filipino, use inabuso."
    },
    {
      "word": "disgrasya",
      "pos": "noun",
      "looksLike": "disgrace",
      "meaning": "an accident or mishap",
      "tip": "To say disgrace (shame) in Filipino, use kahihiyan."
    },
    {
      "word": "torpe",
      "pos": "adj",
      "looksLike": "torpid",
      "meaning": "too shy to express romantic feelings",
      "tip": "To say torpid (sluggish) in Filipino, use makupad."
    },
    {
      "word": "delikadesa",
      "pos": "noun",
      "looksLike": "delicacy",
      "meaning": "a sense of propriety or tact that keeps someone from acting improperly",
      "tip": "To say delicacy (fine food) in Filipino, use masarap na putahe."
    },
    {
      "word": "reklamo",
      "pos": "noun",
      "looksLike": "reclaim",
      "meaning": "a complaint",
      "tip": "To say reclaim (get something back) in Filipino, use bawiin."
    },
    {
      "word": "utility",
      "pos": "noun",
      "looksLike": "utility",
      "meaning": "a janitor or general maintenance or errand worker in an office",
      "tip": "To say a utility bill in Filipino, use bayarin sa kuryente o tubig."
    },
    {
      "word": "chancing",
      "pos": "noun",
      "looksLike": "chancing",
      "meaning": "opportunistically groping someone in a crowd",
      "tip": "To say take a chance in Filipino, use subukan."
    }
  ],
  "tr": [
    {
      "word": "aktüel",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "current, topical, up to date (not real or genuine)",
      "tip": "For actual (real), Turkish uses gerçek."
    },
    {
      "word": "sempatik",
      "pos": "adj",
      "looksLike": "sympathetic",
      "meaning": "likeable, nice, charming (a pleasant personality)",
      "tip": "For sympathetic (feeling compassion), Turkish uses anlayışlı."
    },
    {
      "word": "fabrika",
      "pos": "noun",
      "looksLike": "fabric",
      "meaning": "factory",
      "tip": "For fabric (cloth), Turkish uses kumaş."
    },
    {
      "word": "apartman",
      "pos": "noun",
      "looksLike": "apartment",
      "meaning": "an apartment building, the whole block, not a single unit",
      "tip": "For apartment (one flat), Turkish uses daire."
    },
    {
      "word": "tost",
      "pos": "noun",
      "looksLike": "toast",
      "meaning": "a grilled, pressed sandwich (a toastie), usually with cheese",
      "tip": "For toast (toasted bread), Turkish uses kızarmış ekmek."
    },
    {
      "word": "prezervatif",
      "pos": "noun",
      "looksLike": "preservative",
      "meaning": "condom",
      "tip": "For preservative (a food additive), Turkish uses koruyucu."
    },
    {
      "word": "kolej",
      "pos": "noun",
      "looksLike": "college",
      "meaning": "a private school, usually K-12, not a higher education institution",
      "tip": "For college or university, Turkish uses üniversite."
    },
    {
      "word": "patron",
      "pos": "noun",
      "looksLike": "patron",
      "meaning": "boss, employer",
      "tip": "For patron (a customer or supporter), Turkish uses müşteri or destekçi."
    },
    {
      "word": "tente",
      "pos": "noun",
      "looksLike": "tent",
      "meaning": "an awning, a fixed fabric cover over a window or terrace",
      "tip": "For tent (a camping shelter), Turkish uses çadır."
    },
    {
      "word": "petrol",
      "pos": "noun",
      "looksLike": "petrol",
      "meaning": "crude oil, petroleum, the raw unrefined substance",
      "tip": "For petrol as car fuel, Turkish uses benzin."
    },
    {
      "word": "spiker",
      "pos": "noun",
      "looksLike": "speaker",
      "meaning": "a TV or radio announcer, a newsreader",
      "tip": "For loudspeaker, Turkish uses hoparlör; for a person who is speaking, use konuşmacı."
    },
    {
      "word": "brüt",
      "pos": "adj",
      "looksLike": "brute",
      "meaning": "gross, a total amount before deductions, like gross salary",
      "tip": "For brute (a savage person), Turkish uses vahşi."
    },
    {
      "word": "reçete",
      "pos": "noun",
      "looksLike": "receipt",
      "meaning": "a medical prescription",
      "tip": "For receipt (proof of purchase), Turkish uses fiş or makbuz."
    },
    {
      "word": "gardiyan",
      "pos": "noun",
      "looksLike": "guardian",
      "meaning": "a prison guard",
      "tip": "For guardian (a protector or legal guardian), Turkish uses koruyucu or vasi."
    },
    {
      "word": "kar",
      "pos": "noun",
      "looksLike": "car",
      "meaning": "snow",
      "tip": "For car (the vehicle), Turkish uses araba."
    },
    {
      "word": "can",
      "pos": "noun",
      "looksLike": "can",
      "meaning": "soul, life, or a term of endearment (dear, darling)",
      "tip": "For the verb can (be able to), Turkish uses the suffix -ebilmek, as in yapabilirim (I can do it)."
    },
    {
      "word": "top",
      "pos": "noun",
      "looksLike": "top",
      "meaning": "a ball, as in football, or a cannon",
      "tip": "For top (the highest part), Turkish uses üst or tepe."
    }
  ],
  "uk": [
    {
      "word": "магазин",
      "pos": "noun",
      "looksLike": "magazine",
      "meaning": "a shop or store",
      "tip": "To say magazine (the publication) in Ukrainian, use журнал."
    },
    {
      "word": "актуальний",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "current, relevant, up to date",
      "tip": "To say actual in Ukrainian, use справжній."
    },
    {
      "word": "інсульт",
      "pos": "noun",
      "looksLike": "insult",
      "meaning": "a stroke (a medical, cerebrovascular event)",
      "tip": "To say insult in Ukrainian, use образа."
    },
    {
      "word": "інтелігентний",
      "pos": "adj",
      "looksLike": "intelligent",
      "meaning": "cultured, well mannered, refined",
      "tip": "To say intelligent in Ukrainian, use розумний."
    },
    {
      "word": "батон",
      "pos": "noun",
      "looksLike": "baton",
      "meaning": "a loaf of white bread",
      "tip": "To say baton (a stick) in Ukrainian, use паличка."
    },
    {
      "word": "фабрика",
      "pos": "noun",
      "looksLike": "fabric",
      "meaning": "a factory",
      "tip": "To say fabric (cloth) in Ukrainian, use тканина."
    },
    {
      "word": "презерватив",
      "pos": "noun",
      "looksLike": "preservative",
      "meaning": "a condom",
      "tip": "To say preservative (food additive) in Ukrainian, use консервант."
    },
    {
      "word": "рецепт",
      "pos": "noun",
      "looksLike": "receipt",
      "meaning": "a cooking recipe or a medical prescription",
      "tip": "To say receipt (proof of purchase) in Ukrainian, use чек."
    },
    {
      "word": "дата",
      "pos": "noun",
      "looksLike": "data",
      "meaning": "a calendar date",
      "tip": "To say data in Ukrainian, use дані."
    },
    {
      "word": "акуратний",
      "pos": "adj",
      "looksLike": "accurate",
      "meaning": "neat, tidy, careful",
      "tip": "To say accurate in Ukrainian, use точний."
    },
    {
      "word": "фамілія",
      "pos": "noun",
      "looksLike": "family",
      "meaning": "a surname, last name",
      "tip": "To say family in Ukrainian, use сім'я or родина."
    },
    {
      "word": "симпатичний",
      "pos": "adj",
      "looksLike": "sympathetic",
      "meaning": "cute, nice looking, likeable",
      "tip": "To say sympathetic in Ukrainian, use співчутливий."
    },
    {
      "word": "кабінет",
      "pos": "noun",
      "looksLike": "cabinet",
      "meaning": "an office or study room",
      "tip": "To say cabinet (a piece of furniture) in Ukrainian, use шафа."
    },
    {
      "word": "геніальний",
      "pos": "adj",
      "looksLike": "genial",
      "meaning": "brilliant, of genius, ingenious",
      "tip": "To say genial in Ukrainian, use приязний."
    },
    {
      "word": "лист",
      "pos": "noun",
      "looksLike": "list",
      "meaning": "a letter (mail) or a leaf",
      "tip": "To say list in Ukrainian, use список."
    },
    {
      "word": "смокінг",
      "pos": "noun",
      "looksLike": "smoking",
      "meaning": "a tuxedo, dinner jacket",
      "tip": "To say smoking in Ukrainian, use куріння."
    },
    {
      "word": "патрон",
      "pos": "noun",
      "looksLike": "patron",
      "meaning": "a cartridge (ammunition) or a light bulb socket",
      "tip": "To say patron (customer or sponsor) in Ukrainian, use покровитель or клієнт."
    },
    {
      "word": "декада",
      "pos": "noun",
      "looksLike": "decade",
      "meaning": "a period of ten days",
      "tip": "To say decade (ten years) in Ukrainian, use десятиліття."
    }
  ],
  "uz": [
    {
      "word": "magazin",
      "pos": "noun",
      "looksLike": "magazine",
      "meaning": "a shop, a store",
      "tip": "To say magazine (periodical) in Uzbek, use jurnal."
    },
    {
      "word": "familiya",
      "pos": "noun",
      "looksLike": "family",
      "meaning": "surname, family name",
      "tip": "To say family (household) in Uzbek, use oila."
    },
    {
      "word": "gap",
      "pos": "noun",
      "looksLike": "gap",
      "meaning": "talk, word, speech; the point or matter being discussed",
      "tip": "To say gap (a space or hole) in Uzbek, use oraliq or tirqish."
    },
    {
      "word": "list",
      "pos": "noun",
      "looksLike": "list",
      "meaning": "a sheet (of paper)",
      "tip": "To say list (of items) in Uzbek, use ro'yxat."
    },
    {
      "word": "kabinet",
      "pos": "noun",
      "looksLike": "cabinet",
      "meaning": "an office or study room, e.g. a doctor's or director's room",
      "tip": "To say cabinet (a cupboard) in Uzbek, use shkaf."
    },
    {
      "word": "prospekt",
      "pos": "noun",
      "looksLike": "prospect",
      "meaning": "a wide avenue or boulevard (also a promotional brochure/catalog)",
      "tip": "To say prospect (a chance, possibility) in Uzbek, use istiqbol."
    },
    {
      "word": "portfel",
      "pos": "noun",
      "looksLike": "portfolio",
      "meaning": "a briefcase",
      "tip": "To say portfolio (a body of work) in Uzbek, use ishlar to'plami."
    },
    {
      "word": "stul",
      "pos": "noun",
      "looksLike": "stool",
      "meaning": "a chair with a backrest",
      "tip": "To say stool (a backless seat) in Uzbek, use taburetka."
    },
    {
      "word": "tort",
      "pos": "noun",
      "looksLike": "tort",
      "meaning": "a cake",
      "tip": "To say tort (a civil legal wrong) in Uzbek, use huquqbuzarlik."
    },
    {
      "word": "prezervativ",
      "pos": "noun",
      "looksLike": "preservative",
      "meaning": "a condom",
      "tip": "To say preservative (food additive) in Uzbek, use konservant."
    },
    {
      "word": "gastronom",
      "pos": "noun",
      "looksLike": "gastronome",
      "meaning": "a grocery store",
      "tip": "To say gastronome (a food lover) in Uzbek, use gurman."
    },
    {
      "word": "ballon",
      "pos": "noun",
      "looksLike": "balloon",
      "meaning": "a vehicle tire, or a gas cylinder",
      "tip": "To say balloon (a toy/party balloon) in Uzbek, use sharik."
    },
    {
      "word": "aktual",
      "pos": "adj",
      "looksLike": "actual",
      "meaning": "urgent, topical, currently relevant",
      "tip": "To say actual (real) in Uzbek, use haqiqiy."
    },
    {
      "word": "reviziya",
      "pos": "noun",
      "looksLike": "revision",
      "meaning": "an audit, an inspection",
      "tip": "To say revision (editing a text) in Uzbek, use tahrir or qayta ko'rib chiqish."
    }
  ],
  "vi": [
    {
      "word": "pin",
      "pos": "noun",
      "looksLike": "pin",
      "meaning": "battery",
      "tip": "A sharp metal pin (or hairpin) is kim or ghim in Vietnamese; pin only means battery."
    },
    {
      "word": "gôm",
      "pos": "noun",
      "looksLike": "gum",
      "meaning": "a pencil eraser (common in southern Vietnamese; from French gomme)",
      "tip": "Chewing gum is kẹo cao su in Vietnamese; gôm is just an eraser."
    },
    {
      "word": "boa",
      "pos": "noun",
      "looksLike": "boa",
      "meaning": "a tip, gratuity (tiền boa), from French pourboire",
      "tip": "A boa constrictor is trăn in Vietnamese; boa here just means a service tip."
    },
    {
      "word": "mít tinh",
      "pos": "noun",
      "looksLike": "meeting",
      "meaning": "a public rally or mass demonstration, not an ordinary meeting",
      "tip": "An everyday work or business meeting is cuộc họp; mít tinh is specifically a rally."
    },
    {
      "word": "ni lông",
      "pos": "noun",
      "looksLike": "nylon",
      "meaning": "plastic in general, especially a thin plastic bag or sheet (túi ni lông)",
      "tip": "The synthetic fabric nylon is specified as vải nylon; ni lông alone usually just means plastic."
    },
    {
      "word": "cúp",
      "pos": "verb",
      "looksLike": "cup",
      "meaning": "to cut off or skip, as in cúp điện (power outage) or cúp học (skip class); from French couper",
      "tip": "A drinking cup is cốc or ly in Vietnamese; this cúp means to cut off, not a vessel."
    },
    {
      "word": "ma",
      "pos": "noun",
      "looksLike": "ma",
      "meaning": "a ghost or spirit",
      "tip": "Mom in Vietnamese is má or mẹ (rising tone); flat-tone ma instead means ghost."
    },
    {
      "word": "in",
      "pos": "verb",
      "looksLike": "in",
      "meaning": "to print",
      "tip": "The preposition in (location) is trong in Vietnamese; in means to print."
    }
  ],
  "zu": [
    {
      "word": "into",
      "pos": "noun",
      "looksLike": "into",
      "meaning": "a thing, an object",
      "tip": "It's the noun for 'a thing' (class 9, plural izinto), not the preposition; movement into a place uses the locative instead, e.g. endlini (into the house)."
    },
    {
      "word": "phansi",
      "pos": "adv",
      "looksLike": "pansy",
      "meaning": "down, below, on the ground",
      "tip": "Means 'down' or 'below', as in the protest chant 'Phansi ngobandlululo!', nothing to do with the flower."
    },
    {
      "word": "amanga",
      "pos": "noun",
      "looksLike": "mango",
      "meaning": "lies, falsehoods",
      "tip": "Means 'lies' (ukhuluma amanga means he is lying), unrelated to the fruit."
    },
    {
      "word": "isela",
      "pos": "noun",
      "looksLike": "seller",
      "meaning": "a thief",
      "tip": "Means 'a thief' (plural amasela), not someone who sells; a seller is umthengisi."
    },
    {
      "word": "bhuti",
      "pos": "noun",
      "looksLike": "booty",
      "meaning": "brother, or a respectful, friendly term for a man",
      "tip": "A polite way to say 'brother' or address a man, not buttocks or stolen treasure."
    },
    {
      "word": "casula",
      "pos": "verb",
      "looksLike": "casual",
      "meaning": "to annoy, provoke, or irritate someone",
      "tip": "Means 'to annoy or provoke', not relaxed or informal."
    },
    {
      "word": "hhayi",
      "pos": "adv",
      "looksLike": "hi",
      "meaning": "no, not",
      "tip": "Means 'no' (hhayi bo means no way), so say sawubona for the greeting hi."
    },
    {
      "word": "irobhothi",
      "pos": "noun",
      "looksLike": "robot",
      "meaning": "a traffic light (its everyday South African meaning)",
      "tip": "On the street it almost always means a traffic light (irobhothi elibomvu is a red light), not a sci-fi machine."
    }
  ],
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
