// Data for the "which language should I learn" quiz tool.
// Per-language attributes used to score fit: learner goals, world regions, writing
// script, difficulty (1 = easiest for English speakers, 3 = hardest we support,
// mirroring FSI tiers), total speakers in millions, and a one-line factual blurb.
// Sourced from backend languages.config.json + languageFacts.ts. Real data only.

export interface QuizLang {
  code: string;
  /** World regions where the language is widely spoken. */
  regions: string[];
  /** Common reasons learners pick it (travel, business, culture, academia, heritage). */
  goals: string[];
  /** Writing system: Latin, Cyrillic, Greek, Georgian, Armenian. */
  script: string;
  /** 1 = easiest for English speakers, 2 = medium, 3 = hardest we support. */
  difficulty: number;
  /** Total speakers (L1 + L2) in millions. */
  speakersM: number;
  /** One factual sentence on why the language is worth reading. */
  blurb: string;
}

export const quizLangs: Record<string, QuizLang> = {
  "en": {
    "code": "en",
    "regions": [
      "Europe",
      "North America",
      "Oceania"
    ],
    "goals": [
      "business",
      "travel",
      "academia",
      "culture"
    ],
    "script": "Latin",
    "difficulty": 1,
    "speakersM": 1500,
    "blurb": "English is the global lingua franca and the most useful second language for work, study, and travel worldwide."
  },
  "de": {
    "code": "de",
    "regions": [
      "Europe"
    ],
    "goals": [
      "business",
      "culture",
      "academia"
    ],
    "script": "Latin",
    "difficulty": 2,
    "speakersM": 135,
    "blurb": "German is the most widely spoken native language in the European Union and the language of its largest economy."
  },
  "fr": {
    "code": "fr",
    "regions": [
      "Europe",
      "Africa",
      "North America"
    ],
    "goals": [
      "travel",
      "business",
      "culture"
    ],
    "script": "Latin",
    "difficulty": 1,
    "speakersM": 321,
    "blurb": "French is an official language in 29 countries across five continents and a key language of diplomacy and culture."
  },
  "es": {
    "code": "es",
    "regions": [
      "Europe",
      "Latin America"
    ],
    "goals": [
      "travel",
      "business",
      "culture",
      "heritage"
    ],
    "script": "Latin",
    "difficulty": 1,
    "speakersM": 559,
    "blurb": "Spanish reaches over half a billion speakers across Spain and Latin America with famously consistent, phonetic spelling."
  },
  "it": {
    "code": "it",
    "regions": [
      "Europe"
    ],
    "goals": [
      "culture",
      "travel",
      "heritage"
    ],
    "script": "Latin",
    "difficulty": 1,
    "speakersM": 85,
    "blurb": "Italian carries one of the world's richest heritages in art, music, opera, and cuisine."
  },
  "pt": {
    "code": "pt",
    "regions": [
      "Europe",
      "Latin America",
      "Africa"
    ],
    "goals": [
      "business",
      "travel",
      "culture"
    ],
    "script": "Latin",
    "difficulty": 1,
    "speakersM": 264,
    "blurb": "Portuguese connects you with Brazil's massive economy plus Portugal and Portuguese-speaking Africa."
  },
  "ru": {
    "code": "ru",
    "regions": [
      "Europe",
      "Asia"
    ],
    "goals": [
      "culture",
      "academia",
      "business"
    ],
    "script": "Cyrillic",
    "difficulty": 3,
    "speakersM": 255,
    "blurb": "Russian opens one of the world's great literary traditions and is widely understood across the former Soviet states."
  },
  "sr": {
    "code": "sr",
    "regions": [
      "Europe"
    ],
    "goals": [
      "culture",
      "travel",
      "heritage"
    ],
    "script": "Cyrillic",
    "difficulty": 3,
    "speakersM": 12,
    "blurb": "Serbian is mutually intelligible with Croatian and Bosnian and officially uses both Cyrillic and Latin scripts."
  },
  "nl": {
    "code": "nl",
    "regions": [
      "Europe"
    ],
    "goals": [
      "business",
      "travel",
      "culture"
    ],
    "script": "Latin",
    "difficulty": 1,
    "speakersM": 30,
    "blurb": "Dutch is the closest major language to English and an easy first step into the Germanic family."
  },
  "sv": {
    "code": "sv",
    "regions": [
      "Europe"
    ],
    "goals": [
      "culture",
      "travel",
      "business"
    ],
    "script": "Latin",
    "difficulty": 1,
    "speakersM": 13,
    "blurb": "Swedish gives reading access to all three mainland Scandinavian languages plus Sweden's design and tech scene."
  },
  "no": {
    "code": "no",
    "regions": [
      "Europe"
    ],
    "goals": [
      "culture",
      "travel"
    ],
    "script": "Latin",
    "difficulty": 1,
    "speakersM": 5.4,
    "blurb": "Norwegian is one of the easiest languages for English speakers and the bridge between Swedish and Danish."
  },
  "da": {
    "code": "da",
    "regions": [
      "Europe"
    ],
    "goals": [
      "culture",
      "travel",
      "business"
    ],
    "script": "Latin",
    "difficulty": 1,
    "speakersM": 6,
    "blurb": "Danish opens Andersen and Kierkegaard in the original plus Denmark's design and sustainability culture."
  },
  "ro": {
    "code": "ro",
    "regions": [
      "Europe"
    ],
    "goals": [
      "travel",
      "culture",
      "business"
    ],
    "script": "Latin",
    "difficulty": 1,
    "speakersM": 26,
    "blurb": "Romanian is the only Romance language in Eastern Europe, a Latin island among Slavic neighbors."
  },
  "uk": {
    "code": "uk",
    "regions": [
      "Europe"
    ],
    "goals": [
      "culture",
      "heritage",
      "travel"
    ],
    "script": "Cyrillic",
    "difficulty": 3,
    "speakersM": 41,
    "blurb": "Ukrainian connects you to Europe's largest country by area and a vibrant, growing literary scene."
  },
  "pl": {
    "code": "pl",
    "regions": [
      "Europe"
    ],
    "goals": [
      "business",
      "culture",
      "heritage"
    ],
    "script": "Latin",
    "difficulty": 3,
    "speakersM": 45,
    "blurb": "Polish is the largest Slavic language written in Latin script and home to a Nobel-winning literary tradition."
  },
  "cs": {
    "code": "cs",
    "regions": [
      "Europe"
    ],
    "goals": [
      "culture",
      "travel",
      "heritage"
    ],
    "script": "Latin",
    "difficulty": 3,
    "speakersM": 14,
    "blurb": "Czech opens Kafka, Kundera, and Capek in the original and gives passive access to Slovak."
  },
  "sk": {
    "code": "sk",
    "regions": [
      "Europe"
    ],
    "goals": [
      "culture",
      "travel",
      "heritage"
    ],
    "script": "Latin",
    "difficulty": 3,
    "speakersM": 7,
    "blurb": "Slovak sits at the center of the Slavic languages with near-complete mutual intelligibility with Czech."
  },
  "hr": {
    "code": "hr",
    "regions": [
      "Europe"
    ],
    "goals": [
      "travel",
      "culture",
      "heritage"
    ],
    "script": "Latin",
    "difficulty": 3,
    "speakersM": 5.5,
    "blurb": "Croatian covers the Adriatic coast and is mutually intelligible with Serbian and Bosnian."
  },
  "bs": {
    "code": "bs",
    "regions": [
      "Europe"
    ],
    "goals": [
      "culture",
      "heritage",
      "travel"
    ],
    "script": "Latin",
    "difficulty": 3,
    "speakersM": 2.5,
    "blurb": "Bosnian bridges European and Ottoman influences and communicates across four Balkan countries."
  },
  "bg": {
    "code": "bg",
    "regions": [
      "Europe"
    ],
    "goals": [
      "culture",
      "travel",
      "heritage"
    ],
    "script": "Cyrillic",
    "difficulty": 3,
    "speakersM": 8,
    "blurb": "Bulgarian is the only Slavic language with no cases and the birthplace of the Cyrillic literary tradition."
  },
  "mk": {
    "code": "mk",
    "regions": [
      "Europe"
    ],
    "goals": [
      "culture",
      "heritage",
      "travel"
    ],
    "script": "Cyrillic",
    "difficulty": 3,
    "speakersM": 3.5,
    "blurb": "Macedonian drops the Slavic case system and is mutually intelligible with Bulgarian."
  },
  "sl": {
    "code": "sl",
    "regions": [
      "Europe"
    ],
    "goals": [
      "culture",
      "travel",
      "heritage"
    ],
    "script": "Latin",
    "difficulty": 3,
    "speakersM": 2.5,
    "blurb": "Slovenian is one of the few languages that keeps a dual grammatical number for exactly two things."
  },
  "lv": {
    "code": "lv",
    "regions": [
      "Europe"
    ],
    "goals": [
      "culture",
      "heritage",
      "academia"
    ],
    "script": "Latin",
    "difficulty": 3,
    "speakersM": 1.7,
    "blurb": "Latvian is one of only two surviving Baltic languages, preserving ancient Indo-European features."
  },
  "lt": {
    "code": "lt",
    "regions": [
      "Europe"
    ],
    "goals": [
      "culture",
      "heritage",
      "academia"
    ],
    "script": "Latin",
    "difficulty": 3,
    "speakersM": 3,
    "blurb": "Lithuanian is often called the most archaic living Indo-European language, close to Sanskrit and Latin."
  },
  "fi": {
    "code": "fi",
    "regions": [
      "Europe"
    ],
    "goals": [
      "culture",
      "academia"
    ],
    "script": "Latin",
    "difficulty": 3,
    "speakersM": 5.8,
    "blurb": "Finnish is a logical, agglutinative Uralic language with 15 cases and no grammatical gender."
  },
  "hu": {
    "code": "hu",
    "regions": [
      "Europe"
    ],
    "goals": [
      "culture",
      "academia",
      "heritage"
    ],
    "script": "Latin",
    "difficulty": 3,
    "speakersM": 13,
    "blurb": "Hungarian is a Uralic outlier in Central Europe with 18 cases and famously logical grammar."
  },
  "et": {
    "code": "et",
    "regions": [
      "Europe"
    ],
    "goals": [
      "academia",
      "business",
      "culture"
    ],
    "script": "Latin",
    "difficulty": 3,
    "speakersM": 1.1,
    "blurb": "Estonian is the language of the world's most digital society and a close cousin of Finnish."
  },
  "tr": {
    "code": "tr",
    "regions": [
      "Europe",
      "Middle East"
    ],
    "goals": [
      "travel",
      "business",
      "culture"
    ],
    "script": "Latin",
    "difficulty": 3,
    "speakersM": 88,
    "blurb": "Turkish is a highly regular, agglutinative language that bridges Europe and Asia and opens the wider Turkic family."
  },
  "az": {
    "code": "az",
    "regions": [
      "Asia",
      "Middle East"
    ],
    "goals": [
      "business",
      "travel",
      "culture"
    ],
    "script": "Latin",
    "difficulty": 3,
    "speakersM": 23,
    "blurb": "Azerbaijani is highly mutually intelligible with Turkish and opens the resource-rich Caucasus."
  },
  "el": {
    "code": "el",
    "regions": [
      "Europe"
    ],
    "goals": [
      "culture",
      "academia",
      "travel"
    ],
    "script": "Greek",
    "difficulty": 3,
    "speakersM": 13.5,
    "blurb": "Greek has the longest documented history of any Indo-European language and underpins English academic vocabulary."
  },
  "vi": {
    "code": "vi",
    "regions": [
      "Asia"
    ],
    "goals": [
      "business",
      "travel",
      "heritage"
    ],
    "script": "Latin",
    "difficulty": 3,
    "speakersM": 85,
    "blurb": "Vietnamese is a fast-growing Southeast Asian language and the only major one in the region written in Latin script."
  },
  "id": {
    "code": "id",
    "regions": [
      "Asia"
    ],
    "goals": [
      "business",
      "travel",
      "culture"
    ],
    "script": "Latin",
    "difficulty": 2,
    "speakersM": 199,
    "blurb": "Indonesian was designed as a simple lingua franca, with no tones, genders, or verb conjugation."
  },
  "ms": {
    "code": "ms",
    "regions": [
      "Asia"
    ],
    "goals": [
      "business",
      "travel",
      "culture"
    ],
    "script": "Latin",
    "difficulty": 2,
    "speakersM": 77,
    "blurb": "Malay is a simple, tone-free language spoken across Malaysia, Singapore, and Brunei."
  },
  "is": {
    "code": "is",
    "regions": [
      "Europe"
    ],
    "goals": [
      "culture",
      "heritage",
      "academia"
    ],
    "script": "Latin",
    "difficulty": 3,
    "speakersM": 0.37,
    "blurb": "Icelandic has barely changed in 1,000 years, letting readers open the medieval Norse sagas in the original."
  },
  "af": {
    "code": "af",
    "regions": [
      "Africa"
    ],
    "goals": [
      "travel",
      "culture",
      "heritage"
    ],
    "script": "Latin",
    "difficulty": 1,
    "speakersM": 7.2,
    "blurb": "Afrikaans is one of the easiest languages for English speakers, a simplified offshoot of Dutch."
  },
  "ca": {
    "code": "ca",
    "regions": [
      "Europe"
    ],
    "goals": [
      "culture",
      "travel",
      "heritage"
    ],
    "script": "Latin",
    "difficulty": 1,
    "speakersM": 10,
    "blurb": "Catalan is Barcelona's own Romance language and a bridge between Spanish and French."
  },
  "gl": {
    "code": "gl",
    "regions": [
      "Europe"
    ],
    "goals": [
      "culture",
      "heritage",
      "travel"
    ],
    "script": "Latin",
    "difficulty": 1,
    "speakersM": 2.4,
    "blurb": "Galician shares a medieval ancestor with Portuguese and bridges Spanish and Portuguese."
  },
  "kk": {
    "code": "kk",
    "regions": [
      "Asia"
    ],
    "goals": [
      "business",
      "travel",
      "heritage"
    ],
    "script": "Cyrillic",
    "difficulty": 3,
    "speakersM": 13,
    "blurb": "Kazakh is the language of Central Asia's largest economy, currently moving from Cyrillic to Latin script."
  },
  "uz": {
    "code": "uz",
    "regions": [
      "Asia"
    ],
    "goals": [
      "travel",
      "business",
      "heritage"
    ],
    "script": "Latin",
    "difficulty": 3,
    "speakersM": 34,
    "blurb": "Uzbek is Central Asia's most spoken language and the heart of the historic Silk Road."
  },
  "tl": {
    "code": "tl",
    "regions": [
      "Asia"
    ],
    "goals": [
      "business",
      "travel",
      "heritage"
    ],
    "script": "Latin",
    "difficulty": 3,
    "speakersM": 82,
    "blurb": "Filipino connects you with the Philippines and a focus system that shifts the sentence's viewpoint."
  },
  "mn": {
    "code": "mn",
    "regions": [
      "Asia"
    ],
    "goals": [
      "culture",
      "heritage",
      "travel"
    ],
    "script": "Cyrillic",
    "difficulty": 3,
    "speakersM": 5.7,
    "blurb": "Mongolian carries the nomadic heritage of the steppe and the history of the Mongol Empire."
  },
  "ka": {
    "code": "ka",
    "regions": [
      "Asia"
    ],
    "goals": [
      "culture",
      "heritage",
      "travel"
    ],
    "script": "Georgian",
    "difficulty": 3,
    "speakersM": 3.7,
    "blurb": "Georgian has its own unique alphabet and an 8,000-year wine culture in the Caucasus."
  },
  "hy": {
    "code": "hy",
    "regions": [
      "Asia",
      "Middle East"
    ],
    "goals": [
      "culture",
      "heritage",
      "academia"
    ],
    "script": "Armenian",
    "difficulty": 3,
    "speakersM": 6.7,
    "blurb": "Armenian is its own branch of Indo-European with a unique alphabet from 405 AD and a large global diaspora."
  },
  "sq": {
    "code": "sq",
    "regions": [
      "Europe"
    ],
    "goals": [
      "culture",
      "heritage",
      "travel"
    ],
    "script": "Latin",
    "difficulty": 3,
    "speakersM": 7.5,
    "blurb": "Albanian is the sole survivor of its own Indo-European branch, spoken across the western Balkans."
  },
  "eu": {
    "code": "eu",
    "regions": [
      "Europe"
    ],
    "goals": [
      "culture",
      "heritage",
      "academia"
    ],
    "script": "Latin",
    "difficulty": 3,
    "speakersM": 1.1,
    "blurb": "Basque is Europe's only surviving pre-Indo-European language, unrelated to any other on Earth."
  },
  "sw": {
    "code": "sw",
    "regions": [
      "Africa"
    ],
    "goals": [
      "travel",
      "business",
      "culture"
    ],
    "script": "Latin",
    "difficulty": 2,
    "speakersM": 100,
    "blurb": "Swahili is Africa's most widely spoken language and a tone-free lingua franca across East Africa."
  },
  "zu": {
    "code": "zu",
    "regions": [
      "Africa"
    ],
    "goals": [
      "culture",
      "heritage",
      "travel"
    ],
    "script": "Latin",
    "difficulty": 3,
    "speakersM": 27,
    "blurb": "Zulu is South Africa's most spoken home language, known for its click consonants."
  },
  "be": {
    "code": "be",
    "regions": [
      "Europe"
    ],
    "goals": [
      "culture",
      "heritage",
      "academia"
    ],
    "script": "Cyrillic",
    "difficulty": 3,
    "speakersM": 5.1,
    "blurb": "Belarusian sits between Russian, Ukrainian, and Polish and carries a rich literary tradition under pressure."
  },
  "ky": {
    "code": "ky",
    "regions": [
      "Asia"
    ],
    "goals": [
      "travel",
      "culture",
      "heritage"
    ],
    "script": "Cyrillic",
    "difficulty": 3,
    "speakersM": 4.5,
    "blurb": "Kyrgyz preserves the Epic of Manas, one of the world's longest oral epics, in Central Asia."
  }
};

export const QUIZ_LANG_CODES: string[] = Object.keys(quizLangs);
