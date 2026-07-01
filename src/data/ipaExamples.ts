// Baked IPA examples per language fetched from the Lingo7 NLP service; used to SSR the IPA tool.
// Source: workflow generation + independent verification pass. Real data only.

export interface IpaExample {
  word: string;
  ipa: string;
}

export const ipaExamples: Record<string, IpaExample[]> = {
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
