// Baked IPA examples per language fetched from the Lingo7 NLP service; used to SSR the IPA tool.
// Source: workflow generation + independent verification pass. Real data only.

export interface IpaExample {
  word: string;
  ipa: string;
}

export const ipaExamples: Record<string, IpaExample[]> = {
  "af": [
    {
      "word": "ja",
      "ipa": "jɑː"
    },
    {
      "word": "nee",
      "ipa": "neː"
    },
    {
      "word": "dankie",
      "ipa": "daŋki"
    },
    {
      "word": "asseblief",
      "ipa": "asəblif"
    },
    {
      "word": "huis",
      "ipa": "ɦœys"
    },
    {
      "word": "water",
      "ipa": "vɑːtər"
    },
    {
      "word": "hond",
      "ipa": "ɦɔnt"
    },
    {
      "word": "kat",
      "ipa": "kat"
    },
    {
      "word": "boom",
      "ipa": "bʊə̯m"
    },
    {
      "word": "son",
      "ipa": "sɔn"
    },
    {
      "word": "brood",
      "ipa": "brʊə̯t"
    },
    {
      "word": "kind",
      "ipa": "kənt"
    }
  ],
  "az": [
    {
      "word": "su",
      "ipa": "su"
    },
    {
      "word": "ev",
      "ipa": "ev"
    },
    {
      "word": "ana",
      "ipa": "ɑnɑ"
    },
    {
      "word": "ata",
      "ipa": "ɑtɑ"
    },
    {
      "word": "bir",
      "ipa": "bir"
    },
    {
      "word": "dost",
      "ipa": "dost"
    },
    {
      "word": "əl",
      "ipa": "æl"
    },
    {
      "word": "baş",
      "ipa": "bɑʃ"
    },
    {
      "word": "gün",
      "ipa": "ɟyn"
    },
    {
      "word": "dil",
      "ipa": "dil"
    },
    {
      "word": "göz",
      "ipa": "ɟœz"
    },
    {
      "word": "kitab",
      "ipa": "citɑb"
    }
  ],
  "be": [
    {
      "word": "прывітанне",
      "ipa": "prɨvʲitanʲːe"
    },
    {
      "word": "дзякуй",
      "ipa": "dzʲakuj"
    },
    {
      "word": "вада",
      "ipa": "vada"
    },
    {
      "word": "дом",
      "ipa": "dom"
    },
    {
      "word": "кніга",
      "ipa": "knʲiɣa"
    },
    {
      "word": "сябар",
      "ipa": "sʲabar"
    },
    {
      "word": "раніца",
      "ipa": "ranʲitsa"
    },
    {
      "word": "свет",
      "ipa": "svʲet"
    },
    {
      "word": "сям'я",
      "ipa": "sʲamja"
    },
    {
      "word": "добры",
      "ipa": "dobrɨ"
    },
    {
      "word": "шчаслівы",
      "ipa": "ʃtʃaslʲivɨ"
    },
    {
      "word": "людзі",
      "ipa": "lʲudzʲi"
    }
  ],
  "bg": [
    {
      "word": "здравей",
      "ipa": "zdrɐˈvɛj"
    },
    {
      "word": "благодаря",
      "ipa": "bɫɐɡodɐˈrʲa"
    },
    {
      "word": "вода",
      "ipa": "voˈda"
    },
    {
      "word": "хляб",
      "ipa": "xlʲap"
    },
    {
      "word": "къща",
      "ipa": "ˈkɤʃtɐ"
    },
    {
      "word": "котка",
      "ipa": "ˈkɔtkɐ"
    },
    {
      "word": "куче",
      "ipa": "ˈkutʃɛ"
    },
    {
      "word": "слънце",
      "ipa": "ˈsɫɤntsɛ"
    },
    {
      "word": "добър",
      "ipa": "doˈbɤr"
    },
    {
      "word": "приятел",
      "ipa": "priˈjatɛɫ"
    },
    {
      "word": "учител",
      "ipa": "uˈtʃitɛɫ"
    },
    {
      "word": "любов",
      "ipa": "lʲuˈbɔf"
    }
  ],
  "bs": [
    {
      "word": "hvala",
      "ipa": "xvala"
    },
    {
      "word": "voda",
      "ipa": "voda"
    },
    {
      "word": "kuća",
      "ipa": "kutɕa"
    },
    {
      "word": "dobar",
      "ipa": "dobar"
    },
    {
      "word": "hljeb",
      "ipa": "xʎeb"
    },
    {
      "word": "prijatelj",
      "ipa": "prijateʎ"
    },
    {
      "word": "sunce",
      "ipa": "suntse"
    },
    {
      "word": "ljubav",
      "ipa": "ʎubav"
    },
    {
      "word": "dijete",
      "ipa": "dijete"
    },
    {
      "word": "grad",
      "ipa": "ɡrad"
    },
    {
      "word": "srce",
      "ipa": "sr̩tse"
    },
    {
      "word": "žena",
      "ipa": "ʒena"
    }
  ],
  "ca": [
    {
      "word": "gat",
      "ipa": "ɡat"
    },
    {
      "word": "casa",
      "ipa": "kazə"
    },
    {
      "word": "aigua",
      "ipa": "ajɣwə"
    },
    {
      "word": "llibre",
      "ipa": "ʎiβɾə"
    },
    {
      "word": "amic",
      "ipa": "əmik"
    },
    {
      "word": "gràcies",
      "ipa": "ɡɾasiəs"
    },
    {
      "word": "temps",
      "ipa": "tems"
    },
    {
      "word": "món",
      "ipa": "mon"
    },
    {
      "word": "família",
      "ipa": "fəmiliə"
    },
    {
      "word": "bo",
      "ipa": "bɔ"
    },
    {
      "word": "amor",
      "ipa": "əmo"
    },
    {
      "word": "platja",
      "ipa": "pladʒə"
    }
  ],
  "cs": [
    {
      "word": "dům",
      "ipa": "duːm"
    },
    {
      "word": "voda",
      "ipa": "voda"
    },
    {
      "word": "chléb",
      "ipa": "xlɛːp"
    },
    {
      "word": "pes",
      "ipa": "pɛs"
    },
    {
      "word": "kočka",
      "ipa": "kotʃka"
    },
    {
      "word": "člověk",
      "ipa": "tʃlovjɛk"
    },
    {
      "word": "ahoj",
      "ipa": "aɦoj"
    },
    {
      "word": "děkuji",
      "ipa": "ɟɛkuji"
    },
    {
      "word": "prosím",
      "ipa": "prosiːm"
    },
    {
      "word": "dobrý",
      "ipa": "dobriː"
    },
    {
      "word": "řeka",
      "ipa": "r̝ɛka"
    },
    {
      "word": "škola",
      "ipa": "ʃkola"
    }
  ],
  "da": [
    {
      "word": "hus",
      "ipa": "huˀs"
    },
    {
      "word": "hund",
      "ipa": "hunˀ"
    },
    {
      "word": "kat",
      "ipa": "kad"
    },
    {
      "word": "vand",
      "ipa": "vanˀ"
    },
    {
      "word": "mand",
      "ipa": "manˀ"
    },
    {
      "word": "kvinde",
      "ipa": "kvenə"
    },
    {
      "word": "hej",
      "ipa": "hɑj"
    },
    {
      "word": "ja",
      "ipa": "ja"
    },
    {
      "word": "tak",
      "ipa": "tɑɡ"
    },
    {
      "word": "nat",
      "ipa": "nad"
    },
    {
      "word": "dag",
      "ipa": "dæˀ"
    },
    {
      "word": "sol",
      "ipa": "soːˀl"
    }
  ],
  "el": [
    {
      "word": "γεια",
      "ipa": "ʝa"
    },
    {
      "word": "σπίτι",
      "ipa": "ˈspiti"
    },
    {
      "word": "νερό",
      "ipa": "neˈro"
    },
    {
      "word": "ψωμί",
      "ipa": "psoˈmi"
    },
    {
      "word": "καλημέρα",
      "ipa": "kaliˈmera"
    },
    {
      "word": "ευχαριστώ",
      "ipa": "efxariˈsto"
    },
    {
      "word": "ναι",
      "ipa": "ne"
    },
    {
      "word": "όχι",
      "ipa": "ˈoçi"
    },
    {
      "word": "αγάπη",
      "ipa": "aˈɣapi"
    },
    {
      "word": "φίλος",
      "ipa": "ˈfilos"
    },
    {
      "word": "καλησπέρα",
      "ipa": "kaliˈspera"
    },
    {
      "word": "θάλασσα",
      "ipa": "ˈθalasa"
    }
  ],
  "et": [
    {
      "word": "tere",
      "ipa": "tere"
    },
    {
      "word": "jah",
      "ipa": "jɑh"
    },
    {
      "word": "ei",
      "ipa": "ei"
    },
    {
      "word": "aitäh",
      "ipa": "ɑitæh"
    },
    {
      "word": "vesi",
      "ipa": "vesi"
    },
    {
      "word": "maja",
      "ipa": "mɑjɑ"
    },
    {
      "word": "koer",
      "ipa": "koer"
    },
    {
      "word": "kass",
      "ipa": "kɑsː"
    },
    {
      "word": "raamat",
      "ipa": "rɑːmɑt"
    },
    {
      "word": "sõber",
      "ipa": "sɤber"
    },
    {
      "word": "armastus",
      "ipa": "ɑrmɑstus"
    },
    {
      "word": "päike",
      "ipa": "pæike"
    }
  ],
  "eu": [
    {
      "word": "bai",
      "ipa": "bai"
    },
    {
      "word": "ez",
      "ipa": "es̻"
    },
    {
      "word": "etxe",
      "ipa": "etʃe"
    },
    {
      "word": "ur",
      "ipa": "uɾ"
    },
    {
      "word": "sagar",
      "ipa": "s̺aɡar"
    },
    {
      "word": "lagun",
      "ipa": "laɡun"
    },
    {
      "word": "eguzki",
      "ipa": "eɡus̻ki"
    },
    {
      "word": "ilargi",
      "ipa": "ilarɡi"
    },
    {
      "word": "gizon",
      "ipa": "ɡis̻on"
    },
    {
      "word": "ogi",
      "ipa": "oɡi"
    },
    {
      "word": "esne",
      "ipa": "es̺ne"
    },
    {
      "word": "mendi",
      "ipa": "mendi"
    }
  ],
  "fi": [
    {
      "word": "talo",
      "ipa": "tɑlo"
    },
    {
      "word": "vesi",
      "ipa": "ʋesi"
    },
    {
      "word": "kissa",
      "ipa": "kisːɑ"
    },
    {
      "word": "koira",
      "ipa": "koirɑ"
    },
    {
      "word": "kiitos",
      "ipa": "kiːtos"
    },
    {
      "word": "hyvä",
      "ipa": "hyʋæ"
    },
    {
      "word": "kyllä",
      "ipa": "kylːæ"
    },
    {
      "word": "ei",
      "ipa": "ei"
    },
    {
      "word": "nainen",
      "ipa": "nɑinen"
    },
    {
      "word": "mies",
      "ipa": "mies"
    },
    {
      "word": "kirja",
      "ipa": "kirjɑ"
    },
    {
      "word": "leipä",
      "ipa": "leipæ"
    }
  ],
  "gl": [
    {
      "word": "casa",
      "ipa": "kasa"
    },
    {
      "word": "auga",
      "ipa": "awɡa"
    },
    {
      "word": "pan",
      "ipa": "paŋ"
    },
    {
      "word": "can",
      "ipa": "kaŋ"
    },
    {
      "word": "amigo",
      "ipa": "amiɡo"
    },
    {
      "word": "libro",
      "ipa": "libɾo"
    },
    {
      "word": "lingua",
      "ipa": "liŋɡwa"
    },
    {
      "word": "leite",
      "ipa": "lejte"
    },
    {
      "word": "terra",
      "ipa": "tɛra"
    },
    {
      "word": "praia",
      "ipa": "pɾaja"
    },
    {
      "word": "vida",
      "ipa": "bida"
    },
    {
      "word": "mar",
      "ipa": "maɾ"
    }
  ],
  "hr": [
    {
      "word": "da",
      "ipa": "da"
    },
    {
      "word": "ne",
      "ipa": "ne"
    },
    {
      "word": "hvala",
      "ipa": "xʋala"
    },
    {
      "word": "molim",
      "ipa": "molim"
    },
    {
      "word": "kuća",
      "ipa": "kutɕa"
    },
    {
      "word": "voda",
      "ipa": "ʋoda"
    },
    {
      "word": "kruh",
      "ipa": "krux"
    },
    {
      "word": "ljubav",
      "ipa": "ʎubaʋ"
    },
    {
      "word": "prijatelj",
      "ipa": "prijateʎ"
    },
    {
      "word": "sunce",
      "ipa": "suntse"
    },
    {
      "word": "srce",
      "ipa": "sr̩tse"
    },
    {
      "word": "škola",
      "ipa": "ʃkola"
    }
  ],
  "hu": [
    {
      "word": "igen",
      "ipa": "ˈiɡɛn"
    },
    {
      "word": "nem",
      "ipa": "nɛm"
    },
    {
      "word": "köszönöm",
      "ipa": "ˈkøsønøm"
    },
    {
      "word": "kutya",
      "ipa": "ˈkucɒ"
    },
    {
      "word": "macska",
      "ipa": "ˈmɒtʃkɒ"
    },
    {
      "word": "víz",
      "ipa": "viːz"
    },
    {
      "word": "ház",
      "ipa": "haːz"
    },
    {
      "word": "kenyér",
      "ipa": "ˈkɛɲeːr"
    },
    {
      "word": "szia",
      "ipa": "ˈsiɒ"
    },
    {
      "word": "jó",
      "ipa": "joː"
    },
    {
      "word": "asztal",
      "ipa": "ˈɒstɒl"
    },
    {
      "word": "könyv",
      "ipa": "køɲv"
    }
  ],
  "hy": [
    {
      "word": "բարև",
      "ipa": "bɑɾev"
    },
    {
      "word": "ջուր",
      "ipa": "dʒuɾ"
    },
    {
      "word": "հաց",
      "ipa": "hɑtsʰ"
    },
    {
      "word": "շուն",
      "ipa": "ʃun"
    },
    {
      "word": "կատու",
      "ipa": "kɑtu"
    },
    {
      "word": "տուն",
      "ipa": "tun"
    },
    {
      "word": "արև",
      "ipa": "ɑɾev"
    },
    {
      "word": "մայր",
      "ipa": "mɑjɾ"
    },
    {
      "word": "հայր",
      "ipa": "hɑjɾ"
    },
    {
      "word": "գիրք",
      "ipa": "ɡiɾkʰ"
    },
    {
      "word": "ծառ",
      "ipa": "tsɑr"
    },
    {
      "word": "լավ",
      "ipa": "lɑv"
    }
  ],
  "id": [
    {
      "word": "rumah",
      "ipa": "rumah"
    },
    {
      "word": "makan",
      "ipa": "makan"
    },
    {
      "word": "minum",
      "ipa": "minum"
    },
    {
      "word": "buku",
      "ipa": "buku"
    },
    {
      "word": "orang",
      "ipa": "oraŋ"
    },
    {
      "word": "kucing",
      "ipa": "kutʃiŋ"
    },
    {
      "word": "anjing",
      "ipa": "andʒiŋ"
    },
    {
      "word": "sekolah",
      "ipa": "səkolah"
    },
    {
      "word": "jalan",
      "ipa": "dʒalan"
    },
    {
      "word": "besar",
      "ipa": "bəsar"
    },
    {
      "word": "kecil",
      "ipa": "kətʃil"
    },
    {
      "word": "nama",
      "ipa": "nama"
    }
  ],
  "is": [
    {
      "word": "já",
      "ipa": "jauː"
    },
    {
      "word": "nei",
      "ipa": "neiː"
    },
    {
      "word": "takk",
      "ipa": "tʰahk"
    },
    {
      "word": "hús",
      "ipa": "huːs"
    },
    {
      "word": "dagur",
      "ipa": "taːɣʏr"
    },
    {
      "word": "kona",
      "ipa": "kʰɔːna"
    },
    {
      "word": "maður",
      "ipa": "maːðʏr"
    },
    {
      "word": "hundur",
      "ipa": "hʏntʏr"
    },
    {
      "word": "köttur",
      "ipa": "kʰœhtʏr"
    },
    {
      "word": "bók",
      "ipa": "pouːk"
    },
    {
      "word": "vatn",
      "ipa": "vahtn̥"
    },
    {
      "word": "brauð",
      "ipa": "prœyːð"
    }
  ],
  "ka": [
    {
      "word": "გამარჯობა",
      "ipa": "ɡamardʒoba"
    },
    {
      "word": "დიახ",
      "ipa": "diaχ"
    },
    {
      "word": "არა",
      "ipa": "ara"
    },
    {
      "word": "მადლობა",
      "ipa": "madloba"
    },
    {
      "word": "კაცი",
      "ipa": "kʼatsʰi"
    },
    {
      "word": "წყალი",
      "ipa": "tsʼqʼali"
    },
    {
      "word": "პური",
      "ipa": "pʼuri"
    },
    {
      "word": "სახლი",
      "ipa": "saχli"
    },
    {
      "word": "ქალაქი",
      "ipa": "kʰalakʰi"
    },
    {
      "word": "დედა",
      "ipa": "deda"
    },
    {
      "word": "მამა",
      "ipa": "mama"
    },
    {
      "word": "ძაღლი",
      "ipa": "dzaʁli"
    }
  ],
  "kk": [
    {
      "word": "сәлем",
      "ipa": "sælem"
    },
    {
      "word": "рахмет",
      "ipa": "rɑχmet"
    },
    {
      "word": "су",
      "ipa": "sʊw"
    },
    {
      "word": "үй",
      "ipa": "ʉj"
    },
    {
      "word": "дос",
      "ipa": "dos"
    },
    {
      "word": "таң",
      "ipa": "tɑɴ"
    },
    {
      "word": "әлем",
      "ipa": "ælem"
    },
    {
      "word": "отбасы",
      "ipa": "otbɑsə"
    },
    {
      "word": "жақсы",
      "ipa": "ʒɑqsə"
    },
    {
      "word": "жүрек",
      "ipa": "ʒʉrek"
    },
    {
      "word": "ертең",
      "ipa": "erteŋ"
    },
    {
      "word": "ана",
      "ipa": "ɑnɑ"
    }
  ],
  "ky": [
    {
      "word": "суу",
      "ipa": "suː"
    },
    {
      "word": "нан",
      "ipa": "nɑn"
    },
    {
      "word": "китеп",
      "ipa": "kitep"
    },
    {
      "word": "үй",
      "ipa": "yj"
    },
    {
      "word": "ата",
      "ipa": "ɑtɑ"
    },
    {
      "word": "эне",
      "ipa": "ene"
    },
    {
      "word": "бала",
      "ipa": "bɑlɑ"
    },
    {
      "word": "жол",
      "ipa": "dʒol"
    },
    {
      "word": "күн",
      "ipa": "kyn"
    },
    {
      "word": "ай",
      "ipa": "ɑj"
    },
    {
      "word": "дос",
      "ipa": "dos"
    },
    {
      "word": "мектеп",
      "ipa": "mektep"
    }
  ],
  "lt": [
    {
      "word": "labas",
      "ipa": "ˈɫɑːbɐs"
    },
    {
      "word": "ačiū",
      "ipa": "ˈaːtʃuː"
    },
    {
      "word": "taip",
      "ipa": "tɐɪp"
    },
    {
      "word": "ne",
      "ipa": "nʲɛ"
    },
    {
      "word": "vanduo",
      "ipa": "vɐnˈduɔ"
    },
    {
      "word": "duona",
      "ipa": "ˈduɔnɐ"
    },
    {
      "word": "namas",
      "ipa": "ˈnɑːmɐs"
    },
    {
      "word": "draugas",
      "ipa": "ˈdrɒʊɡɐs"
    },
    {
      "word": "saulė",
      "ipa": "ˈsɑulʲeː"
    },
    {
      "word": "diena",
      "ipa": "dʲiəˈnɐ"
    },
    {
      "word": "knyga",
      "ipa": "kʲnʲiːˈɡɐ"
    },
    {
      "word": "šuo",
      "ipa": "ʃuɔ"
    }
  ],
  "lv": [
    {
      "word": "māja",
      "ipa": "ˈmaːja"
    },
    {
      "word": "ūdens",
      "ipa": "ˈuːdens"
    },
    {
      "word": "maize",
      "ipa": "ˈmaize"
    },
    {
      "word": "saule",
      "ipa": "ˈsaule"
    },
    {
      "word": "zeme",
      "ipa": "ˈzeme"
    },
    {
      "word": "galva",
      "ipa": "ˈɡalva"
    },
    {
      "word": "grāmata",
      "ipa": "ˈɡraːmata"
    },
    {
      "word": "cilvēks",
      "ipa": "ˈtsilveːks"
    },
    {
      "word": "laime",
      "ipa": "ˈlaime"
    },
    {
      "word": "bērns",
      "ipa": "ˈbeːrns"
    },
    {
      "word": "suns",
      "ipa": "ˈsuns"
    },
    {
      "word": "kaķis",
      "ipa": "ˈkacis"
    }
  ],
  "mk": [
    {
      "word": "здраво",
      "ipa": "zdravɔ"
    },
    {
      "word": "ден",
      "ipa": "dɛn"
    },
    {
      "word": "вода",
      "ipa": "vɔda"
    },
    {
      "word": "леб",
      "ipa": "lɛb"
    },
    {
      "word": "куќа",
      "ipa": "kuca"
    },
    {
      "word": "книга",
      "ipa": "kniɡa"
    },
    {
      "word": "добро",
      "ipa": "dɔbrɔ"
    },
    {
      "word": "благодарам",
      "ipa": "blaɡɔdaram"
    },
    {
      "word": "мајка",
      "ipa": "majka"
    },
    {
      "word": "татко",
      "ipa": "tatkɔ"
    },
    {
      "word": "коњ",
      "ipa": "kɔɲ"
    },
    {
      "word": "дете",
      "ipa": "dɛtɛ"
    }
  ],
  "mn": [
    {
      "word": "сайн",
      "ipa": "sæːŋ"
    },
    {
      "word": "ус",
      "ipa": "ʊs"
    },
    {
      "word": "гал",
      "ipa": "ɢaɬ"
    },
    {
      "word": "гэр",
      "ipa": "ɡer"
    },
    {
      "word": "гар",
      "ipa": "ɢar"
    },
    {
      "word": "ах",
      "ipa": "aχ"
    },
    {
      "word": "эх",
      "ipa": "ex"
    },
    {
      "word": "ам",
      "ipa": "am"
    },
    {
      "word": "сүү",
      "ipa": "suː"
    },
    {
      "word": "хүн",
      "ipa": "xuŋ"
    },
    {
      "word": "ном",
      "ipa": "nɔm"
    },
    {
      "word": "нохой",
      "ipa": "nɔχɔj"
    }
  ],
  "ms": [
    {
      "word": "saya",
      "ipa": "saja"
    },
    {
      "word": "terima kasih",
      "ipa": "tərima kasih"
    },
    {
      "word": "maaf",
      "ipa": "maʔaf"
    },
    {
      "word": "tidak",
      "ipa": "tidaʔ"
    },
    {
      "word": "makan",
      "ipa": "makan"
    },
    {
      "word": "minum",
      "ipa": "minum"
    },
    {
      "word": "rumah",
      "ipa": "rumah"
    },
    {
      "word": "besar",
      "ipa": "bəsar"
    },
    {
      "word": "kecil",
      "ipa": "kətʃil"
    },
    {
      "word": "buku",
      "ipa": "buku"
    },
    {
      "word": "nama",
      "ipa": "nama"
    },
    {
      "word": "orang",
      "ipa": "oraŋ"
    }
  ],
  "nl": [
    {
      "word": "huis",
      "ipa": "ɦœys"
    },
    {
      "word": "water",
      "ipa": "ʋaːtər"
    },
    {
      "word": "hond",
      "ipa": "ɦɔnt"
    },
    {
      "word": "kat",
      "ipa": "kɑt"
    },
    {
      "word": "boek",
      "ipa": "buk"
    },
    {
      "word": "brood",
      "ipa": "broːt"
    },
    {
      "word": "school",
      "ipa": "sxoːl"
    },
    {
      "word": "vriend",
      "ipa": "vrint"
    },
    {
      "word": "tijd",
      "ipa": "tɛit"
    },
    {
      "word": "dag",
      "ipa": "dɑx"
    },
    {
      "word": "mens",
      "ipa": "mɛns"
    },
    {
      "word": "straat",
      "ipa": "straːt"
    }
  ],
  "no": [
    {
      "word": "hei",
      "ipa": "hæɪ"
    },
    {
      "word": "vann",
      "ipa": "ʋɑnː"
    },
    {
      "word": "hus",
      "ipa": "hʉːs"
    },
    {
      "word": "bok",
      "ipa": "buːk"
    },
    {
      "word": "morgen",
      "ipa": "mɔrɡən"
    },
    {
      "word": "takk",
      "ipa": "tɑkː"
    },
    {
      "word": "kaffe",
      "ipa": "kɑfːə"
    },
    {
      "word": "glad",
      "ipa": "ɡlɑː"
    },
    {
      "word": "katt",
      "ipa": "kɑtː"
    },
    {
      "word": "dag",
      "ipa": "dɑːɡ"
    },
    {
      "word": "barn",
      "ipa": "bɑːɳ"
    },
    {
      "word": "god",
      "ipa": "ɡuː"
    }
  ],
  "pl": [
    {
      "word": "dom",
      "ipa": "dɔm"
    },
    {
      "word": "woda",
      "ipa": "vɔda"
    },
    {
      "word": "książka",
      "ipa": "kɕɔ̃ʂka"
    },
    {
      "word": "przyjaciel",
      "ipa": "pʂɨjatɕɛl"
    },
    {
      "word": "dziękuję",
      "ipa": "dʑɛŋkujɛ"
    },
    {
      "word": "czas",
      "ipa": "tʂas"
    },
    {
      "word": "świat",
      "ipa": "ɕfjat"
    },
    {
      "word": "rodzina",
      "ipa": "rɔdʑina"
    },
    {
      "word": "dobry",
      "ipa": "dɔbrɨ"
    },
    {
      "word": "miłość",
      "ipa": "miwɔɕtɕ"
    },
    {
      "word": "kot",
      "ipa": "kɔt"
    },
    {
      "word": "słońce",
      "ipa": "swɔɲtsɛ"
    }
  ],
  "ro": [
    {
      "word": "casă",
      "ipa": "kasə"
    },
    {
      "word": "apă",
      "ipa": "apə"
    },
    {
      "word": "carte",
      "ipa": "karte"
    },
    {
      "word": "prieten",
      "ipa": "prieten"
    },
    {
      "word": "mulțumesc",
      "ipa": "multsumesk"
    },
    {
      "word": "timp",
      "ipa": "timp"
    },
    {
      "word": "lume",
      "ipa": "lume"
    },
    {
      "word": "familie",
      "ipa": "familie"
    },
    {
      "word": "bun",
      "ipa": "bun"
    },
    {
      "word": "pisică",
      "ipa": "pisikə"
    },
    {
      "word": "iubire",
      "ipa": "jubire"
    },
    {
      "word": "mâncare",
      "ipa": "mɨnkare"
    }
  ],
  "sk": [
    {
      "word": "dom",
      "ipa": "dɔm"
    },
    {
      "word": "voda",
      "ipa": "vɔda"
    },
    {
      "word": "mačka",
      "ipa": "matʃka"
    },
    {
      "word": "pes",
      "ipa": "pɛs"
    },
    {
      "word": "deň",
      "ipa": "ɟɛɲ"
    },
    {
      "word": "noc",
      "ipa": "nɔts"
    },
    {
      "word": "hlava",
      "ipa": "ɦlava"
    },
    {
      "word": "ruka",
      "ipa": "ruka"
    },
    {
      "word": "oko",
      "ipa": "ɔkɔ"
    },
    {
      "word": "les",
      "ipa": "lɛs"
    },
    {
      "word": "kvet",
      "ipa": "kvɛt"
    },
    {
      "word": "strom",
      "ipa": "strɔm"
    }
  ],
  "sl": [
    {
      "word": "voda",
      "ipa": "ʋoːda"
    },
    {
      "word": "hvala",
      "ipa": "xʋaːla"
    },
    {
      "word": "dan",
      "ipa": "daːn"
    },
    {
      "word": "hiša",
      "ipa": "xiːʃa"
    },
    {
      "word": "kruh",
      "ipa": "kruːx"
    },
    {
      "word": "mleko",
      "ipa": "mleːkɔ"
    },
    {
      "word": "otrok",
      "ipa": "ɔtrɔk"
    },
    {
      "word": "prijatelj",
      "ipa": "prijaːtəl"
    },
    {
      "word": "knjiga",
      "ipa": "knjiːɡa"
    },
    {
      "word": "mačka",
      "ipa": "maːtʃka"
    },
    {
      "word": "dober",
      "ipa": "doːbər"
    },
    {
      "word": "jezik",
      "ipa": "jeːzik"
    }
  ],
  "sq": [
    {
      "word": "mirë",
      "ipa": "miɾə"
    },
    {
      "word": "ujë",
      "ipa": "ujə"
    },
    {
      "word": "bukë",
      "ipa": "bukə"
    },
    {
      "word": "shtëpi",
      "ipa": "ʃtəpi"
    },
    {
      "word": "ditë",
      "ipa": "ditə"
    },
    {
      "word": "natë",
      "ipa": "natə"
    },
    {
      "word": "njeri",
      "ipa": "ɲɛɾi"
    },
    {
      "word": "dashuri",
      "ipa": "daʃuɾi"
    },
    {
      "word": "shkollë",
      "ipa": "ʃkɔɫə"
    },
    {
      "word": "faleminderit",
      "ipa": "falɛmindɛɾit"
    },
    {
      "word": "po",
      "ipa": "pɔ"
    },
    {
      "word": "jo",
      "ipa": "jɔ"
    }
  ],
  "sr": [
    {
      "word": "kuća",
      "ipa": "kut͡ɕa"
    },
    {
      "word": "voda",
      "ipa": "ʋoda"
    },
    {
      "word": "hleb",
      "ipa": "xleb"
    },
    {
      "word": "mačka",
      "ipa": "mat͡ʃka"
    },
    {
      "word": "pas",
      "ipa": "pas"
    },
    {
      "word": "sunce",
      "ipa": "sunt͡se"
    },
    {
      "word": "voleti",
      "ipa": "ʋoleti"
    },
    {
      "word": "čovek",
      "ipa": "t͡ʃoʋek"
    },
    {
      "word": "dete",
      "ipa": "dete"
    },
    {
      "word": "reč",
      "ipa": "ret͡ʃ"
    },
    {
      "word": "drvo",
      "ipa": "dr̩ʋo"
    },
    {
      "word": "srce",
      "ipa": "sr̩t͡se"
    }
  ],
  "sv": [
    {
      "word": "hej",
      "ipa": "hɛj"
    },
    {
      "word": "tack",
      "ipa": "takː"
    },
    {
      "word": "ja",
      "ipa": "jɑː"
    },
    {
      "word": "nej",
      "ipa": "nɛj"
    },
    {
      "word": "vatten",
      "ipa": "vatːɛn"
    },
    {
      "word": "bröd",
      "ipa": "brøːd"
    },
    {
      "word": "hus",
      "ipa": "hʉːs"
    },
    {
      "word": "hund",
      "ipa": "hɵnd"
    },
    {
      "word": "katt",
      "ipa": "katː"
    },
    {
      "word": "bok",
      "ipa": "buːk"
    },
    {
      "word": "skola",
      "ipa": "skuːla"
    },
    {
      "word": "flicka",
      "ipa": "flɪkːa"
    }
  ],
  "sw": [
    {
      "word": "jambo",
      "ipa": "ˈdʒambɔ"
    },
    {
      "word": "asante",
      "ipa": "aˈsantɛ"
    },
    {
      "word": "karibu",
      "ipa": "kaˈribu"
    },
    {
      "word": "rafiki",
      "ipa": "raˈfiki"
    },
    {
      "word": "maji",
      "ipa": "ˈmadʒi"
    },
    {
      "word": "chakula",
      "ipa": "tʃaˈkula"
    },
    {
      "word": "nyumba",
      "ipa": "ˈɲumba"
    },
    {
      "word": "samaki",
      "ipa": "saˈmaki"
    },
    {
      "word": "kitabu",
      "ipa": "kiˈtabu"
    },
    {
      "word": "safari",
      "ipa": "saˈfari"
    },
    {
      "word": "jua",
      "ipa": "ˈdʒua"
    },
    {
      "word": "habari",
      "ipa": "haˈbari"
    }
  ],
  "tl": [
    {
      "word": "salamat",
      "ipa": "saˈlamat"
    },
    {
      "word": "oo",
      "ipa": "ˈʔoʔo"
    },
    {
      "word": "hindi",
      "ipa": "hinˈdiʔ"
    },
    {
      "word": "mahal",
      "ipa": "maˈhal"
    },
    {
      "word": "bahay",
      "ipa": "ˈbahaj"
    },
    {
      "word": "tubig",
      "ipa": "ˈtubiɡ"
    },
    {
      "word": "kain",
      "ipa": "ˈkaʔin"
    },
    {
      "word": "araw",
      "ipa": "ˈʔaɾaw"
    },
    {
      "word": "gabi",
      "ipa": "ɡaˈbi"
    },
    {
      "word": "pusa",
      "ipa": "ˈpusaʔ"
    },
    {
      "word": "aso",
      "ipa": "ˈʔaso"
    },
    {
      "word": "tao",
      "ipa": "ˈtaʔo"
    }
  ],
  "tr": [
    {
      "word": "su",
      "ipa": "su"
    },
    {
      "word": "ev",
      "ipa": "ev"
    },
    {
      "word": "kitap",
      "ipa": "kitap"
    },
    {
      "word": "ekmek",
      "ipa": "ekmek"
    },
    {
      "word": "kedi",
      "ipa": "kedi"
    },
    {
      "word": "köpek",
      "ipa": "kœpek"
    },
    {
      "word": "güzel",
      "ipa": "ɡyzel"
    },
    {
      "word": "hızlı",
      "ipa": "hɯzlɯ"
    },
    {
      "word": "çocuk",
      "ipa": "tʃodʒuk"
    },
    {
      "word": "teşekkürler",
      "ipa": "teʃekkyɾleɾ"
    },
    {
      "word": "merhaba",
      "ipa": "meɾhaba"
    },
    {
      "word": "dağ",
      "ipa": "daː"
    }
  ],
  "uk": [
    {
      "word": "привіт",
      "ipa": "prɪʋit"
    },
    {
      "word": "дякую",
      "ipa": "dʲakuju"
    },
    {
      "word": "будинок",
      "ipa": "budɪnɔk"
    },
    {
      "word": "вода",
      "ipa": "wɔda"
    },
    {
      "word": "хліб",
      "ipa": "xlʲib"
    },
    {
      "word": "книга",
      "ipa": "knɪɦa"
    },
    {
      "word": "школа",
      "ipa": "ʃkɔɫa"
    },
    {
      "word": "сонце",
      "ipa": "sɔntsɛ"
    },
    {
      "word": "любов",
      "ipa": "lʲubɔu̯"
    },
    {
      "word": "життя",
      "ipa": "ʒɪtʲːa"
    },
    {
      "word": "друг",
      "ipa": "druɦ"
    },
    {
      "word": "дитина",
      "ipa": "dɪtɪna"
    }
  ],
  "uz": [
    {
      "word": "salom",
      "ipa": "salɒm"
    },
    {
      "word": "suv",
      "ipa": "suv"
    },
    {
      "word": "uy",
      "ipa": "uj"
    },
    {
      "word": "non",
      "ipa": "nɒn"
    },
    {
      "word": "kun",
      "ipa": "kun"
    },
    {
      "word": "rahmat",
      "ipa": "rahmat"
    },
    {
      "word": "dunyo",
      "ipa": "dunjɒ"
    },
    {
      "word": "yaxshi",
      "ipa": "jaχʃi"
    },
    {
      "word": "ona",
      "ipa": "ɒna"
    },
    {
      "word": "ota",
      "ipa": "ɒta"
    },
    {
      "word": "kitob",
      "ipa": "kitɒb"
    },
    {
      "word": "bola",
      "ipa": "bɒla"
    }
  ],
  "vi": [
    {
      "word": "nhà",
      "ipa": "ɲaː˨˩"
    },
    {
      "word": "nước",
      "ipa": "nɨək˧˦"
    },
    {
      "word": "người",
      "ipa": "ŋɨəj˨˩"
    },
    {
      "word": "có",
      "ipa": "kɔ˧˦"
    },
    {
      "word": "không",
      "ipa": "xəwŋ˧˧"
    },
    {
      "word": "một",
      "ipa": "mot˧˨ʔ"
    },
    {
      "word": "hai",
      "ipa": "haːj˧˧"
    },
    {
      "word": "ăn",
      "ipa": "ʔan˧˧"
    },
    {
      "word": "yêu",
      "ipa": "ʔiəw˧˧"
    },
    {
      "word": "đẹp",
      "ipa": "ɗɛp˧˨ʔ"
    },
    {
      "word": "tốt",
      "ipa": "tot˧˦"
    },
    {
      "word": "mèo",
      "ipa": "mɛw˨˩"
    }
  ],
  "zu": [
    {
      "word": "sawubona",
      "ipa": "sawuɓona"
    },
    {
      "word": "yebo",
      "ipa": "jeɓo"
    },
    {
      "word": "cha",
      "ipa": "ǀʰa"
    },
    {
      "word": "ngiyabonga",
      "ipa": "ŋɡijaɓoŋɡa"
    },
    {
      "word": "ubaba",
      "ipa": "uɓaɓa"
    },
    {
      "word": "umama",
      "ipa": "umama"
    },
    {
      "word": "ikhaya",
      "ipa": "ikʰaja"
    },
    {
      "word": "amanzi",
      "ipa": "amanzi"
    },
    {
      "word": "ilanga",
      "ipa": "ilaŋɡa"
    },
    {
      "word": "inja",
      "ipa": "iɲdʒa"
    },
    {
      "word": "inkosi",
      "ipa": "iŋkosi"
    },
    {
      "word": "ubuntu",
      "ipa": "uɓuntu"
    }
  ],
  "en": [
    {
      "word": "hello",
      "ipa": "həloʊ"
    },
    {
      "word": "water",
      "ipa": "wɔːɾɚ"
    },
    {
      "word": "house",
      "ipa": "haʊs"
    },
    {
      "word": "book",
      "ipa": "bʊk"
    },
    {
      "word": "friend",
      "ipa": "fɹɛnd"
    },
    {
      "word": "morning",
      "ipa": "mɔːɹnɪŋ"
    },
    {
      "word": "thank",
      "ipa": "θæŋk"
    },
    {
      "word": "world",
      "ipa": "wɜːld"
    },
    {
      "word": "family",
      "ipa": "fæmɪli"
    },
    {
      "word": "coffee",
      "ipa": "kɔfi"
    },
    {
      "word": "happy",
      "ipa": "hæpi"
    },
    {
      "word": "people",
      "ipa": "piːpəl"
    }
  ],
  "es": [
    {
      "word": "gato",
      "ipa": "ɡato"
    },
    {
      "word": "casa",
      "ipa": "kasa"
    },
    {
      "word": "agua",
      "ipa": "aɣwa"
    },
    {
      "word": "libro",
      "ipa": "liβɾo"
    },
    {
      "word": "amigo",
      "ipa": "amiɣo"
    },
    {
      "word": "gracias",
      "ipa": "ɡɾaθjas"
    },
    {
      "word": "tiempo",
      "ipa": "tjempo"
    },
    {
      "word": "mundo",
      "ipa": "mundo"
    },
    {
      "word": "familia",
      "ipa": "familja"
    },
    {
      "word": "bueno",
      "ipa": "bweno"
    },
    {
      "word": "corazón",
      "ipa": "koɾaθon"
    },
    {
      "word": "mañana",
      "ipa": "maɲana"
    }
  ],
  "fr": [
    {
      "word": "chat",
      "ipa": "ʃa"
    },
    {
      "word": "maison",
      "ipa": "mɛzɔ̃"
    },
    {
      "word": "eau",
      "ipa": "o"
    },
    {
      "word": "livre",
      "ipa": "livʁ"
    },
    {
      "word": "ami",
      "ipa": "ami"
    },
    {
      "word": "merci",
      "ipa": "mɛʁsi"
    },
    {
      "word": "temps",
      "ipa": "tɑ̃"
    },
    {
      "word": "monde",
      "ipa": "mɔ̃d"
    },
    {
      "word": "famille",
      "ipa": "famij"
    },
    {
      "word": "bonjour",
      "ipa": "bɔ̃ʒuʁ"
    },
    {
      "word": "amour",
      "ipa": "amuʁ"
    },
    {
      "word": "café",
      "ipa": "kafe"
    }
  ],
  "de": [
    {
      "word": "Haus",
      "ipa": "haʊs"
    },
    {
      "word": "Wasser",
      "ipa": "vasɜ"
    },
    {
      "word": "Buch",
      "ipa": "buːx"
    },
    {
      "word": "Freund",
      "ipa": "frɔønt"
    },
    {
      "word": "danke",
      "ipa": "daŋkə"
    },
    {
      "word": "Zeit",
      "ipa": "tsaɪt"
    },
    {
      "word": "Welt",
      "ipa": "vɛlt"
    },
    {
      "word": "Familie",
      "ipa": "famiːlɪə"
    },
    {
      "word": "gut",
      "ipa": "ɡuːt"
    },
    {
      "word": "Liebe",
      "ipa": "liːbə"
    },
    {
      "word": "morgen",
      "ipa": "mɔɾɡən"
    },
    {
      "word": "schön",
      "ipa": "ʃøːn"
    }
  ],
  "it": [
    {
      "word": "gatto",
      "ipa": "ɡatːo"
    },
    {
      "word": "casa",
      "ipa": "kaza"
    },
    {
      "word": "acqua",
      "ipa": "akːwa"
    },
    {
      "word": "libro",
      "ipa": "libro"
    },
    {
      "word": "amico",
      "ipa": "amiko"
    },
    {
      "word": "grazie",
      "ipa": "ɡratsje"
    },
    {
      "word": "tempo",
      "ipa": "tɛmpo"
    },
    {
      "word": "mondo",
      "ipa": "mondo"
    },
    {
      "word": "famiglia",
      "ipa": "famiʎa"
    },
    {
      "word": "buono",
      "ipa": "bʊɔno"
    },
    {
      "word": "amore",
      "ipa": "amore"
    },
    {
      "word": "bello",
      "ipa": "bɛllo"
    }
  ],
  "pt": [
    {
      "word": "gato",
      "ipa": "ɡatʊ"
    },
    {
      "word": "casa",
      "ipa": "kazɐ"
    },
    {
      "word": "água",
      "ipa": "aɡwɐ"
    },
    {
      "word": "livro",
      "ipa": "livɹʊ"
    },
    {
      "word": "amigo",
      "ipa": "ɐmiɡʊ"
    },
    {
      "word": "obrigado",
      "ipa": "ɔbɹiɡadʊ"
    },
    {
      "word": "tempo",
      "ipa": "teɪmpʊ"
    },
    {
      "word": "mundo",
      "ipa": "mũŋdʊ"
    },
    {
      "word": "família",
      "ipa": "fɐmiljɐ"
    },
    {
      "word": "bom",
      "ipa": "boŋ"
    },
    {
      "word": "amor",
      "ipa": "ɐmoɹ"
    },
    {
      "word": "coração",
      "ipa": "kuɾɐsɐ̃ʊ̃"
    }
  ],
  "ru": [
    {
      "word": "дом",
      "ipa": "dom"
    },
    {
      "word": "вода",
      "ipa": "vʌdɑ"
    },
    {
      "word": "книга",
      "ipa": "knʲiɡa"
    },
    {
      "word": "друг",
      "ipa": "druk"
    },
    {
      "word": "спасибо",
      "ipa": "spasʲibʌ"
    },
    {
      "word": "время",
      "ipa": "vrʲemʲʌ"
    },
    {
      "word": "мир",
      "ipa": "mʲir"
    },
    {
      "word": "семья",
      "ipa": "sʲimʲjja"
    },
    {
      "word": "хорошо",
      "ipa": "xʌrʌʃo"
    },
    {
      "word": "любовь",
      "ipa": "ɭʲu\"bof"
    },
    {
      "word": "кошка",
      "ipa": "koʃka"
    },
    {
      "word": "солнце",
      "ipa": "soɭntsy"
    }
  ]
};

export const IPA_LANGS: string[] = Object.keys(ipaExamples);
