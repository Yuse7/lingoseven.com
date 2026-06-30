// Per-language vocabulary notes for the vocabulary-size-estimator pages. Two parts:
//  - `blurb`: a short, hand-written, vocabulary-focused paragraph (cognates with
//    English, false friends, morphology) — unique per language so the pages are
//    not near-duplicates of each other.
//  - `coverage`: real frequency coverage computed from the same source as the test
//    (hermitdave/FrequencyWords, OpenSubtitles 2018): the % of running text covered
//    by the N most common word forms. Lower numbers for inflected/agglutinative
//    languages (ru, tr) are expected — one root spreads across many forms.

export interface VocabFact {
  blurb: string;
  coverage: { top1000: number; top2000: number; top5000: number };
}

export const vocabFacts: Record<string, VocabFact> = {
  es: {
    blurb:
      'Spanish shares thousands of Latin-rooted cognates with English — nación/nation, familia/family — so an English speaker starts with a sizeable passive vocabulary. The catch is false friends like embarazada (pregnant, not embarrassed) and éxito (success, not exit). Spelling maps closely to sound, so a word you have read is a word you can say.',
    coverage: { top1000: 77, top2000: 83, top5000: 89 },
  },
  fr: {
    blurb:
      'After 1066, French handed English roughly a quarter of its vocabulary, so French reading is full of familiar words — gouvernement, possible, nation. False friends still trip learners up: librairie is a bookshop, not a library, and actuellement means currently. Silent letters mean the written word often hides how it sounds.',
    coverage: { top1000: 81, top2000: 86, top5000: 92 },
  },
  de: {
    blurb:
      'German and English are Germanic cousins, so the core vocabulary rhymes: Haus/house, Wasser/water, gut/good. German’s famous compound nouns (Handschuh, literally hand-shoe, means glove) let many long words decode from smaller pieces you already know. The main extra load is learning each noun’s gender along with the word.',
    coverage: { top1000: 80, top2000: 85, top5000: 91 },
  },
  it: {
    blurb:
      'Italian wears its Latin roots openly, with cognates an English reader recognises on sight — possibile, nazione, famiglia. Spelling is almost perfectly phonetic, so a word read is a word you can pronounce. Watch false friends such as camera (room) and parente (relative, not parent).',
    coverage: { top1000: 76, top2000: 83, top5000: 90 },
  },
  pt: {
    blurb:
      'Portuguese is a Romance language packed with Latin cognates familiar from English and Spanish alike. Its distinctive nasal vowels and contractions take some adjusting to in print. Beware false friends like puxar (to pull, not push), and note the spelling differences between European and Brazilian usage.',
    coverage: { top1000: 77, top2000: 83, top5000: 90 },
  },
  en: {
    blurb:
      'English has one of the largest vocabularies of any language, layering a Germanic core (house, water, eat) with Romance and Latin or Greek borrowings (residence, aquatic, consume). That often gives several words for one idea at different registers, which is why English vocabulary keeps growing well past the basics. Spelling is irregular because each layer kept its own conventions.',
    coverage: { top1000: 84, top2000: 89, top5000: 94 },
  },
  ru: {
    blurb:
      'Russian shares few obvious cognates with English, so most words are genuinely new — though international loanwords (телефон, компьютер) give occasional footholds, and Cyrillic is quickly learned. The real work is inflection: one root appears in many case and verb-aspect forms, which is why a fixed number of words covers less running text than in English.',
    coverage: { top1000: 70, top2000: 77, top5000: 85 },
  },
  nl: {
    blurb:
      'Dutch sits between English and German, and it shows in the vocabulary: water, boek, huis, drinken. English speakers often recognise Dutch words on the page before ever studying them. Like German, Dutch builds compounds, so longer words frequently break down into parts you already know.',
    coverage: { top1000: 83, top2000: 88, top5000: 93 },
  },
  sv: {
    blurb:
      'Swedish is a Germanic language with a generous share of English cognates — hus, vatten, bok, fisk — and a refreshingly simple grammar. English and Swedish also share many modern loanwords. Compounds are common, so vocabulary often grows by combining familiar roots rather than memorising wholly new words.',
    coverage: { top1000: 81, top2000: 86, top5000: 92 },
  },
  tr: {
    blurb:
      'Turkish is agglutinative: suffixes stack onto a root to build meanings that English needs whole phrases for, so a single word can carry a sentence. That also means one root appears in dozens of forms, which is why a given number of distinct words covers less text than in English. Cognates with English are rare, but loanwords from French and Arabic (otobüs, telefon) offer a few footholds.',
    coverage: { top1000: 62, top2000: 70, top5000: 80 },
  },
};
