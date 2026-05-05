export interface LanguageFact {
  /** ISO 639-1 code */
  code: string;
  /** Total speakers in millions (L1 + L2, Ethnologue 2024) */
  speakers: number;
  /** Language family (Glottolog classification) */
  family: string;
  /** Writing system(s) used */
  writingSystem: string;
  /** FSI difficulty category for English speakers (I-IV, IV being hardest) */
  fsiCategory: 'I' | 'II' | 'III' | 'IV';
  /** Approximate FSI study hours to professional proficiency */
  fsiHours: number;
  /** 1-2 sentence: why learn this language (unique value proposition for readers) */
  whyLearn: string;
  /** 1-2 sentence: what makes this language linguistically interesting/unique */
  whatMakesUnique: string;
  /** 3-5 extra FAQ questions+answers specific to this language (for SEO enrichment) */
  faq: Array<{ question: string; answer: string }>;
}

export const languageFacts: Record<string, LanguageFact> = {
  en: {
    code: 'en',
    speakers: 1500,
    family: 'Indo-European',
    writingSystem: 'Latin',
    fsiCategory: 'I',
    fsiHours: 0,
    whyLearn: 'English is the global lingua franca, providing access to the largest body of scientific, business, and entertainment content in any language.',
    whatMakesUnique: 'English has one of the largest vocabularies of any language, drawing from Germanic, Romance, and many other sources, and relies heavily on word order rather than inflection for grammar.',
    faq: [
      {
        question: 'How many people speak English worldwide?',
        answer: 'Approximately 1.5 billion people speak English as a first or second language, making it the most widely spoken language globally. It serves as an official language in over 60 countries.',
      },
      {
        question: 'Why does English spelling seem so irregular?',
        answer: 'English spelling reflects centuries of borrowing from French, Latin, Greek, and Norse, each bringing its own spelling conventions. The Great Vowel Shift further disconnected pronunciation from spelling. Reading extensively in English helps internalize these patterns naturally.',
      },
      {
        question: 'What makes English grammar easier than other languages?',
        answer: 'English has no grammatical gender, minimal verb conjugation, and no case system for nouns. Word order (subject-verb-object) carries most grammatical meaning, making basic sentence construction relatively straightforward.',
      },
    ],
  },

  de: {
    code: 'de',
    speakers: 135,
    family: 'Indo-European',
    writingSystem: 'Latin',
    fsiCategory: 'II',
    fsiHours: 900,
    whyLearn: 'German unlocks access to the largest economy in Europe and a rich literary tradition from Goethe to Kafka, plus major scientific and philosophical texts in the original language.',
    whatMakesUnique: 'German is famous for its compound nouns that can grow to virtually unlimited length, three grammatical genders, and a verb-second word order that sends verbs to the end in subordinate clauses.',
    faq: [
      {
        question: 'Is German hard to learn for English speakers?',
        answer: 'German is rated FSI Category II, requiring about 900 hours of study. While its grammar is more complex than Romance languages due to cases and gender, English and German share thousands of cognates. Reading German texts with parallel translations accelerates vocabulary acquisition significantly.',
      },
      {
        question: 'How long does it take to learn German?',
        answer: 'The FSI estimates 36 weeks (900 hours) of intensive study for professional proficiency. However, basic reading comprehension can be achieved much sooner due to shared Germanic vocabulary with English. Consistent reading practice shortens this timeline considerably.',
      },
      {
        question: 'What is the best way to learn German grammar?',
        answer: 'Immersive reading combined with grammar study is highly effective. German has four cases (nominative, accusative, dative, genitive) and three genders that are best internalized through repeated exposure in context rather than rote memorization.',
      },
      {
        question: 'Is German useful for career opportunities?',
        answer: 'Germany has the fourth-largest GDP globally and is the economic powerhouse of the EU. German proficiency opens doors in engineering, automotive, finance, and scientific research. Many multinational companies headquartered in Germany value bilingual employees.',
      },
    ],
  },

  fr: {
    code: 'fr',
    speakers: 321,
    family: 'Indo-European',
    writingSystem: 'Latin',
    fsiCategory: 'I',
    fsiHours: 750,
    whyLearn: 'French opens doors to literature from Hugo to Camus, is spoken on five continents, and remains a key language in diplomacy, gastronomy, fashion, and international organizations.',
    whatMakesUnique: 'French features extensive liaison and elision that connect words in speech, nasal vowels absent in most European languages, and a literary tradition that has shaped global culture for centuries.',
    faq: [
      {
        question: 'Is French easy to learn for English speakers?',
        answer: 'French is FSI Category I, one of the easiest languages for English speakers at 750 hours to proficiency. Up to 45% of English vocabulary has French or Latin origins, making reading comprehension accessible early. The main challenges are pronunciation and verb conjugation.',
      },
      {
        question: 'How many countries speak French?',
        answer: 'French is an official language in 29 countries across five continents, including France, Canada, Belgium, Switzerland, and numerous African nations. It is the fifth most-spoken language globally with over 321 million speakers.',
      },
      {
        question: 'Why is French pronunciation difficult?',
        answer: 'French has nasal vowels, silent consonants, and extensive liaison between words that differ greatly from English phonology. However, French spelling is more regular than English once you learn the rules. Reading French aloud helps train these unfamiliar sounds.',
      },
      {
        question: 'Is French useful for international careers?',
        answer: 'French is an official language of the UN, EU, NATO, and the International Olympic Committee. It is crucial for careers in diplomacy, international development, luxury goods, and culinary arts. Africa\'s growing economies are also increasing demand for French speakers.',
      },
    ],
  },

  es: {
    code: 'es',
    speakers: 559,
    family: 'Indo-European',
    writingSystem: 'Latin',
    fsiCategory: 'I',
    fsiHours: 750,
    whyLearn: 'Spanish connects you with over half a billion speakers across 20 countries, from the literary works of Garcia Marquez to business opportunities throughout Latin America and Spain.',
    whatMakesUnique: 'Spanish has remarkably consistent phonetic spelling, a subjunctive mood used extensively in everyday speech, and inverted punctuation marks that signal questions and exclamations before they begin.',
    faq: [
      {
        question: 'How long does it take to learn Spanish?',
        answer: 'The FSI estimates 750 hours (24-30 weeks) for English speakers to reach professional proficiency. Spanish is Category I, the easiest tier. Regular reading practice can help you reach conversational fluency even faster due to transparent spelling and many English cognates.',
      },
      {
        question: 'Is Spanish or French easier to learn?',
        answer: 'Both are FSI Category I, but Spanish pronunciation is more straightforward since it is almost perfectly phonetic. French has more complex pronunciation rules. However, French vocabulary may be slightly more familiar to English speakers due to the Norman influence on English.',
      },
      {
        question: 'What are the differences between Spanish dialects?',
        answer: 'Major differences exist between Castilian (Spain) and Latin American Spanish in pronunciation, vocabulary, and grammar. Latin American Spanish generally does not use the "vosotros" form and has different consonant sounds. Reading literature from various Spanish-speaking countries exposes you to these variations naturally.',
      },
      {
        question: 'Why is Spanish useful to learn?',
        answer: 'Spanish is the world\'s fourth most-spoken language with 559 million speakers. It is the second most-spoken native language after Mandarin. Knowing Spanish opens career opportunities across the Americas, Spain, and in the growing US Hispanic market.',
      },
    ],
  },

  it: {
    code: 'it',
    speakers: 85,
    family: 'Indo-European',
    writingSystem: 'Latin',
    fsiCategory: 'I',
    fsiHours: 750,
    whyLearn: 'Italian grants access to one of the world\'s richest cultural heritages in art, music, opera, cuisine, and fashion, plus the works of Dante, Petrarch, and Eco in their original language.',
    whatMakesUnique: 'Italian retains the closest resemblance to Latin among major Romance languages, features musical intonation with geminate consonants, and has a rich system of diminutives and augmentatives that add expressive nuance.',
    faq: [
      {
        question: 'Is Italian easy to learn?',
        answer: 'Italian is FSI Category I, requiring approximately 750 hours for proficiency. Its phonetic spelling system makes reading straightforward once you learn a few rules. For English speakers, the large shared Latin vocabulary provides a strong foundation from day one.',
      },
      {
        question: 'How similar are Italian and Spanish?',
        answer: 'Italian and Spanish share about 82% lexical similarity and very similar grammar structures. A Spanish speaker can often understand written Italian with minimal study. Learning one significantly accelerates learning the other, and reading in both languages reinforces this mutual intelligibility.',
      },
      {
        question: 'Is Italian useful outside of Italy?',
        answer: 'Beyond Italy, Italian is spoken in Switzerland, San Marino, and Vatican City. It is essential for careers in fashion, design, food industry, classical music, and art history. Italian is also the fourth most-studied language in the world.',
      },
      {
        question: 'What is the hardest part of learning Italian?',
        answer: 'The subjunctive mood, complex pronoun placement, and grammatical gender are common challenges. However, Italian pronunciation is very regular and spelling is nearly phonetic. Extensive reading helps internalize grammar patterns naturally through repeated exposure.',
      },
    ],
  },

  pt: {
    code: 'pt',
    speakers: 264,
    family: 'Indo-European',
    writingSystem: 'Latin',
    fsiCategory: 'I',
    fsiHours: 750,
    whyLearn: 'Portuguese connects you with Brazil\'s massive economy and cultural output, plus Portugal, Mozambique, and Angola, offering access to rich literary traditions from Saramago to Machado de Assis.',
    whatMakesUnique: 'Portuguese features nasal vowels and diphthongs, a personal infinitive unique among Romance languages, and the future subjunctive tense that has been lost in Spanish and French.',
    faq: [
      {
        question: 'Is Portuguese hard to learn?',
        answer: 'Portuguese is FSI Category I, taking about 750 hours for English speakers. Its grammar is similar to Spanish, and shared Latin vocabulary aids comprehension. The main challenge is pronunciation, especially nasal sounds and vowel reduction in European Portuguese.',
      },
      {
        question: 'What is the difference between Brazilian and European Portuguese?',
        answer: 'Brazilian Portuguese has more open vowels, simpler pronoun placement, and different vocabulary for everyday items. European Portuguese has more reduced vowels and sounds more similar to Slavic languages to untrained ears. Reading both varieties helps you understand the spectrum of the language.',
      },
      {
        question: 'Should I learn Brazilian or European Portuguese?',
        answer: 'Brazil has 215 million speakers versus Portugal\'s 10 million, and produces more media content. However, European Portuguese speakers generally understand Brazilian Portuguese easily. Choose based on your goals: Brazil for business and pop culture, Portugal for European opportunities.',
      },
      {
        question: 'How similar are Portuguese and Spanish?',
        answer: 'They share about 89% lexical similarity. Spanish speakers can often read Portuguese with minimal effort, though listening comprehension is harder due to Portuguese phonology. Reading Portuguese texts is an excellent way to leverage existing Spanish knowledge.',
      },
    ],
  },

  ru: {
    code: 'ru',
    speakers: 255,
    family: 'Indo-European',
    writingSystem: 'Cyrillic',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Russian provides access to one of the world\'s great literary traditions from Tolstoy to Dostoevsky, is a key language in space science and diplomacy, and is widely understood across former Soviet states.',
    whatMakesUnique: 'Russian uses a rich case system with six cases, a verbal aspect system that distinguishes completed from ongoing actions, flexible word order for emphasis, and lacks articles entirely.',
    faq: [
      {
        question: 'How hard is Russian to learn for English speakers?',
        answer: 'Russian is FSI Category III, requiring about 1100 hours of study. The Cyrillic alphabet can be learned in a few days, but the case system, verb aspects, and unpredictable stress patterns present ongoing challenges. Reading Russian literature with parallel translations builds comprehension effectively.',
      },
      {
        question: 'How long does it take to learn the Russian alphabet?',
        answer: 'Most learners master Cyrillic reading in 1-2 weeks. The alphabet has 33 letters, many of which resemble Latin or Greek letters. Once you can read Cyrillic, you unlock access to a vast body of Russian literature and can begin building vocabulary through reading.',
      },
      {
        question: 'Is Russian grammar very complex?',
        answer: 'Russian has six grammatical cases, three genders, two verb aspects, and verbs of motion with directional prefixes. However, it has no articles and relatively simple tense system (past, present, future). Extensive reading helps internalize case endings through pattern recognition.',
      },
      {
        question: 'Where is Russian spoken besides Russia?',
        answer: 'Russian is widely spoken in Belarus, Kazakhstan, Kyrgyzstan, and as a second language across Central Asia, the Baltics, and Eastern Europe. It serves as a lingua franca for over 250 million people and remains important in science, literature, and international diplomacy.',
      },
    ],
  },

  sr: {
    code: 'sr',
    speakers: 12,
    family: 'Indo-European',
    writingSystem: 'Cyrillic, Latin',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Serbian opens the door to understanding all South Slavic languages and provides access to a rich literary tradition, from medieval manuscripts to modern prose, along with cultural connections across the Balkans.',
    whatMakesUnique: 'Serbian is one of the few languages that officially uses two alphabets (Cyrillic and Latin) interchangeably, has a pitch accent system distinguishing word meanings, and follows a nearly perfect phonemic spelling principle.',
    faq: [
      {
        question: 'Is Serbian the same as Croatian and Bosnian?',
        answer: 'Serbian, Croatian, and Bosnian are mutually intelligible and were historically considered one language (Serbo-Croatian). The main differences are vocabulary choices, script preference (Serbian uses both Cyrillic and Latin, Croatian uses only Latin), and minor grammatical preferences.',
      },
      {
        question: 'Does Serbian use Cyrillic or Latin alphabet?',
        answer: 'Serbian officially uses both alphabets interchangeably. Cyrillic is the constitutional script and used in official documents, while Latin is common in everyday life, media, and digital communication. Learning both is straightforward since the correspondence is one-to-one.',
      },
      {
        question: 'How hard is Serbian to learn?',
        answer: 'Serbian is FSI Category III, requiring about 1100 hours. It has seven cases, complex verb conjugation, and a pitch accent system. However, its phonemic spelling means words are pronounced exactly as written, making reading practice highly effective for building pronunciation skills.',
      },
    ],
  },

  nl: {
    code: 'nl',
    speakers: 30,
    family: 'Indo-European',
    writingSystem: 'Latin',
    fsiCategory: 'I',
    fsiHours: 750,
    whyLearn: 'Dutch is the closest major language to English, making it an ideal gateway to learning other Germanic languages, while providing access to Dutch and Flemish literature, art history, and business in the Benelux region.',
    whatMakesUnique: 'Dutch occupies a unique position between English and German, features diminutives used extensively in daily speech, has a productive system of compound words, and uses the distinctive guttural "g" sound.',
    faq: [
      {
        question: 'Is Dutch easy to learn for English speakers?',
        answer: 'Dutch is FSI Category I, one of the easiest languages for English speakers at about 750 hours to proficiency. It shares extensive vocabulary with English and has simpler grammar than German (no case system). Reading Dutch texts reveals many recognizable words immediately.',
      },
      {
        question: 'How similar are Dutch and German?',
        answer: 'Dutch and German share about 75% lexical similarity and similar grammar structures, though Dutch has simplified its case system. A Dutch speaker can often understand written German and vice versa. Learning Dutch provides an excellent foundation for later German study.',
      },
      {
        question: 'Is Dutch useful to learn?',
        answer: 'The Netherlands has one of Europe\'s strongest economies with major companies like Shell, Philips, and ASML. Dutch is also spoken in Belgium (Flanders) and Suriname. Knowledge of Dutch opens doors in international trade, engineering, and EU institutions.',
      },
    ],
  },

  sv: {
    code: 'sv',
    speakers: 13,
    family: 'Indo-European',
    writingSystem: 'Latin',
    fsiCategory: 'I',
    fsiHours: 750,
    whyLearn: 'Swedish provides access to Scandinavian literature from Strindberg to Stieg Larsson, is mutually intelligible with Norwegian and Danish, and opens doors to Sweden\'s innovative tech and design sectors.',
    whatMakesUnique: 'Swedish features a pitch accent system that distinguishes word meanings through tone, uses a postfixed definite article attached to nouns, and has maintained two grammatical genders (common and neuter).',
    faq: [
      {
        question: 'Is Swedish easy to learn?',
        answer: 'Swedish is FSI Category I, requiring about 750 hours for English speakers. It has relatively simple grammar with no case system, predictable word order, and many English cognates. Reading Swedish crime novels (a beloved genre) is an enjoyable way to build fluency.',
      },
      {
        question: 'Can Swedish speakers understand Norwegian and Danish?',
        answer: 'Yes, there is high mutual intelligibility among Scandinavian languages, especially in writing. Swedish and Norwegian are very close, while Danish pronunciation diverges more. Learning Swedish effectively gives you reading access to all three Scandinavian languages.',
      },
      {
        question: 'What is the Swedish pitch accent?',
        answer: 'Swedish has two tonal word accents (acute and grave) that can distinguish otherwise identical words, like "anden" meaning either "the duck" or "the spirit." This musical quality gives Swedish its characteristic melodic sound. Reading with audio helps train this tonal awareness.',
      },
    ],
  },

  no: {
    code: 'no',
    speakers: 5.4,
    family: 'Indo-European',
    writingSystem: 'Latin',
    fsiCategory: 'I',
    fsiHours: 750,
    whyLearn: 'Norwegian is one of the easiest languages for English speakers, provides mutual intelligibility with Swedish and Danish, and opens access to Norway\'s rich literary scene including Ibsen, Hamsun, and Nordic noir.',
    whatMakesUnique: 'Norwegian has two official written standards (Bokmal and Nynorsk), a pitch accent system, and extremely regular grammar with no verb conjugation for person or number, making it one of the most approachable Germanic languages.',
    faq: [
      {
        question: 'Is Norwegian the easiest language to learn?',
        answer: 'Norwegian is consistently ranked among the easiest languages for English speakers (FSI Category I, ~750 hours). Its grammar is extremely simple with no verb conjugation by person, no case system, and highly regular patterns. Reading Norwegian is accessible from early stages due to many shared words with English.',
      },
      {
        question: 'What is the difference between Bokmal and Nynorsk?',
        answer: 'Bokmal ("book language") evolved from Danish influence and is used by about 85% of Norwegians. Nynorsk ("new Norwegian") was constructed from rural dialects to create a more authentically Norwegian standard. Most learners study Bokmal, which has more available reading material.',
      },
      {
        question: 'Can I understand Swedish and Danish if I learn Norwegian?',
        answer: 'Norwegian is often considered the "bridge" Scandinavian language. Norwegian speakers typically understand both Swedish and Danish reasonably well in writing and speech. Learning Norwegian effectively gives you passive comprehension of approximately 20 million additional speakers.',
      },
    ],
  },

  da: {
    code: 'da',
    speakers: 6,
    family: 'Indo-European',
    writingSystem: 'Latin',
    fsiCategory: 'I',
    fsiHours: 750,
    whyLearn: 'Danish provides access to the works of Hans Christian Andersen and Kierkegaard in the original, connects you to Denmark\'s world-leading design and sustainability culture, and enables understanding of Swedish and Norwegian.',
    whatMakesUnique: 'Danish features the unique stod (glottal stop) that distinguishes words, has undergone dramatic vowel weakening that makes it sound very different from its written form, and uses a vigesimal (base-20) counting system.',
    faq: [
      {
        question: 'Is Danish hard to pronounce?',
        answer: 'Danish pronunciation is notably challenging even for other Scandinavians due to vowel reduction, the stod (glottal stop), and soft consonants. However, Danish grammar is very simple and the written language is accessible for English speakers. Reading Danish is considerably easier than understanding spoken Danish.',
      },
      {
        question: 'How different is Danish from Norwegian and Swedish?',
        answer: 'Written Danish and Norwegian Bokmal are very similar (Bokmal historically derives from Danish). Spoken Danish diverges significantly due to consonant weakening and vowel shifts. Swedish differs more in vocabulary but retains clearer pronunciation. Reading Danish texts transfers well to reading Norwegian.',
      },
      {
        question: 'Why learn Danish specifically?',
        answer: 'Denmark consistently ranks among the world\'s happiest and most innovative countries. Danish opens doors in design, clean energy, shipping (Maersk), pharmaceuticals (Novo Nordisk), and the famous Danish concept of hygge. It also provides reading access to Norwegian Bokmal.',
      },
    ],
  },

  ro: {
    code: 'ro',
    speakers: 26,
    family: 'Indo-European',
    writingSystem: 'Latin',
    fsiCategory: 'I',
    fsiHours: 750,
    whyLearn: 'Romanian is the only Romance language in Eastern Europe, offering a unique bridge between Latin and Slavic cultures, with a growing tech industry and rich folk traditions preserved in literature.',
    whatMakesUnique: 'Romanian preserves Latin grammatical features lost in other Romance languages, including three genders (masculine, feminine, neuter), a case system, and a postfixed definite article unique among Romance languages.',
    faq: [
      {
        question: 'Is Romanian a Romance language?',
        answer: 'Yes, Romanian is a Romance language descended from Vulgar Latin, sharing about 77% lexical similarity with Italian. Despite geographic isolation from other Romance languages and heavy Slavic influence in vocabulary, its core grammar and basic vocabulary remain clearly Latin in origin.',
      },
      {
        question: 'How hard is Romanian to learn?',
        answer: 'Romanian is FSI Category I (about 750 hours), making it one of the easier languages for English speakers. Its phonetic spelling, familiar Romance vocabulary, and Latin grammar base all help. Reading Romanian reveals many recognizable words from French, Italian, and Latin.',
      },
      {
        question: 'How similar is Romanian to Italian?',
        answer: 'Romanian and Italian share about 77% lexical similarity, and basic sentences are often mutually comprehensible. However, Romanian has absorbed significant Slavic vocabulary and retains a case system that Italian lost. Reading Romanian is an excellent way to leverage existing Romance language knowledge.',
      },
    ],
  },

  uk: {
    code: 'uk',
    speakers: 41,
    family: 'Indo-European',
    writingSystem: 'Cyrillic',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Ukrainian opens access to a vibrant and growing literary scene, connects you to Europe\'s largest country by area, and provides a bridge to understanding other Slavic languages including Polish and Russian.',
    whatMakesUnique: 'Ukrainian is known for its melodic sound due to frequent vowel alternations, has seven cases including a vocative used in address, and features a uniquely expressive system of diminutives and augmentatives.',
    faq: [
      {
        question: 'How different is Ukrainian from Russian?',
        answer: 'Ukrainian and Russian share about 62% lexical similarity, comparable to Spanish and Portuguese. They use different Cyrillic letter inventories, have different phonological systems, and diverge significantly in vocabulary. Ukrainian is closer to Polish and Slovak in many respects. Reading both reveals their distinct characters.',
      },
      {
        question: 'Is Ukrainian hard to learn?',
        answer: 'Ukrainian is FSI Category III (about 1100 hours). The Cyrillic alphabet is mastered quickly, but the seven-case system, verb aspects, and vocabulary distinct from other languages you might know present challenges. Regular reading with translations helps internalize grammar patterns naturally.',
      },
      {
        question: 'Is it worth learning Ukrainian?',
        answer: 'Ukraine has over 41 million speakers and a thriving cultural scene in literature, music, and tech. Interest in Ukrainian has surged globally. Learning it also provides a foundation for understanding Polish, Czech, and other Slavic languages through shared vocabulary and grammar.',
      },
    ],
  },

  pl: {
    code: 'pl',
    speakers: 45,
    family: 'Indo-European',
    writingSystem: 'Latin',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Polish connects you with 45 million speakers and a Nobel Prize-winning literary tradition including Szymborska, Milosz, and Tokarczuk, plus a major European economy and the largest Slavic language using Latin script.',
    whatMakesUnique: 'Polish has seven grammatical cases, complex consonant clusters that challenge learners (like szcz), a rich system of word derivation through prefixes and suffixes, and grammatical gender that extends to past-tense verbs.',
    faq: [
      {
        question: 'Is Polish one of the hardest languages to learn?',
        answer: 'Polish is FSI Category III (1100 hours) and is considered challenging due to its seven cases, complex consonant clusters, and irregular grammar. However, it uses the Latin alphabet and has relatively regular spelling rules. Extensive reading helps learners internalize the case system through pattern exposure.',
      },
      {
        question: 'How is Polish pronunciation?',
        answer: 'Polish features consonant clusters like "szcz" and nasal vowels that are unfamiliar to English speakers. However, stress is regular (almost always on the penultimate syllable) and spelling is consistent once you learn the letter combinations. Reading aloud is an effective pronunciation practice method.',
      },
      {
        question: 'What other languages does Polish help you learn?',
        answer: 'Polish provides strong foundations for Czech, Slovak, and Ukrainian due to shared Slavic vocabulary and grammar. Polish and Czech share about 76% lexical similarity. Learning Polish through reading also builds skills transferable to other case-based languages like German or Russian.',
      },
      {
        question: 'Is Polish useful for work in Europe?',
        answer: 'Poland has the EU\'s fifth-largest economy and a growing tech sector. Polish communities exist throughout the UK, Germany, and the US. Knowledge of Polish is valuable in manufacturing, IT outsourcing, and EU institutions where Polish representation is significant.',
      },
    ],
  },

  cs: {
    code: 'cs',
    speakers: 14,
    family: 'Indo-European',
    writingSystem: 'Latin',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Czech opens the door to Kafka, Kundera, and Capek in the original, connects you to Central European culture and history, and provides a strong foundation for understanding Slovak, Polish, and other Slavic languages.',
    whatMakesUnique: 'Czech features the unique consonant r-hacek (r with caron) that functions as both a consonant and a vowel, has seven cases with complex declension patterns, and can form sentences without vowels like "Strc prst skrz krk."',
    faq: [
      {
        question: 'How hard is Czech to learn?',
        answer: 'Czech is FSI Category III (about 1100 hours). Its seven cases, complex declension tables, and consonant clusters present challenges. However, Czech spelling is highly phonetic thanks to diacritical marks, and regular reading practice helps internalize the case system through natural exposure.',
      },
      {
        question: 'How similar are Czech and Slovak?',
        answer: 'Czech and Slovak are mutually intelligible, sharing about 86% lexical similarity. Speakers of both languages can generally understand each other without translation. Learning Czech gives you effective passive understanding of Slovak, nearly doubling your potential audience for reading material.',
      },
      {
        question: 'Why learn Czech?',
        answer: 'The Czech Republic has a strong economy, rich literary tradition (Kafka, Kundera, Hasek), and vibrant cultural scene. Prague is a major European hub for tech and tourism. Czech also serves as an excellent gateway to other Slavic languages due to its central position in the language family.',
      },
    ],
  },

  sk: {
    code: 'sk',
    speakers: 7,
    family: 'Indo-European',
    writingSystem: 'Latin',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Slovak provides near-complete mutual intelligibility with Czech, serves as a bridge language among West Slavic languages, and connects you to Slovakia\'s growing economy and central position in European history.',
    whatMakesUnique: 'Slovak is often called the most musical Slavic language due to its rhythmic rule (the "rhythmic law") that prevents consecutive long syllables, has three genders across six cases, and uses a melodic speech pattern.',
    faq: [
      {
        question: 'Is Slovak the same as Czech?',
        answer: 'Slovak and Czech are closely related with about 86% lexical similarity and high mutual intelligibility, but they are distinct languages with different phonological rules, vocabulary, and grammar details. Slovak is considered slightly more regular in its grammar than Czech.',
      },
      {
        question: 'How hard is Slovak to learn?',
        answer: 'Slovak is FSI Category III (about 1100 hours). It has six cases, three genders, and complex verb conjugation. However, its spelling is perfectly phonetic and its grammar is more regular than Czech or Polish. Reading Slovak texts with translations is an effective way to build comprehension.',
      },
      {
        question: 'Which Slavic language is easiest to learn?',
        answer: 'Slovak is sometimes considered a "central" Slavic language, partially intelligible with Czech, Polish, and even some South Slavic languages. Some linguists suggest learning Slovak provides broader comprehension across the Slavic family. Its regular grammar and phonetic spelling also make it relatively approachable.',
      },
    ],
  },

  hr: {
    code: 'hr',
    speakers: 5.5,
    family: 'Indo-European',
    writingSystem: 'Latin',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Croatian connects you to the Adriatic coast, Central European culture, and a literary tradition shared across the former Yugoslav space, while providing mutual intelligibility with Serbian and Bosnian.',
    whatMakesUnique: 'Croatian has a pitch accent system with rising and falling tones on short and long vowels, uses only the Latin alphabet (unlike Serbian which uses both), and features strict phonemic spelling where each letter represents exactly one sound.',
    faq: [
      {
        question: 'Is Croatian the same as Serbian?',
        answer: 'Croatian and Serbian are mutually intelligible and share the same grammar structure. The main differences are vocabulary preferences, Croatian\'s exclusive use of Latin script (Serbian uses both), and some pronunciation patterns. Speakers communicate without difficulty across these varieties.',
      },
      {
        question: 'How hard is Croatian to learn?',
        answer: 'Croatian is FSI Category III (about 1100 hours). It has seven cases, complex verb aspects, and a pitch accent system. However, its spelling is perfectly phonetic, meaning words are always pronounced as written. This makes reading practice particularly effective for building pronunciation skills.',
      },
      {
        question: 'Is Croatian useful to learn for travel?',
        answer: 'Croatian is understood throughout Croatia, Bosnia, Serbia, and Montenegro, covering a combined population of over 20 million. Croatia is one of Europe\'s top tourist destinations. Knowing Croatian enhances travel experiences along the Dalmatian coast and enables deeper cultural connections.',
      },
    ],
  },

  bs: {
    code: 'bs',
    speakers: 2.5,
    family: 'Indo-European',
    writingSystem: 'Latin',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Bosnian provides immediate access to communication across Bosnia, Serbia, Croatia, and Montenegro, while connecting you to a unique literary tradition that bridges European and Ottoman cultural influences.',
    whatMakesUnique: 'Bosnian uniquely preserves more Turkish and Arabic loanwords than Croatian or Serbian due to centuries of Ottoman rule, uses both Latin and Cyrillic scripts officially, and maintains the ijekavian pronunciation that gives it a distinctive melodic quality.',
    faq: [
      {
        question: 'What is the difference between Bosnian, Croatian, and Serbian?',
        answer: 'These three are mutually intelligible varieties of what was historically Serbo-Croatian. Bosnian retains more Ottoman-era Turkish and Arabic loanwords, uses both scripts, and employs ijekavian pronunciation. The differences are primarily in vocabulary and cultural context rather than grammar.',
      },
      {
        question: 'Is Bosnian hard to learn?',
        answer: 'Bosnian is FSI Category III (about 1100 hours). Like other South Slavic languages, it has cases and verb aspects. Its phonemic spelling makes reading straightforward since pronunciation follows writing exactly. Learning Bosnian gives you access to Serbian and Croatian speakers as well.',
      },
      {
        question: 'Why learn Bosnian specifically?',
        answer: 'Bosnian reflects a unique cultural crossroads of Orthodox, Catholic, and Islamic traditions in Europe. Its literature explores these multicultural themes. Learning Bosnian also provides practical communication across four countries and understanding of an important European cultural intersection.',
      },
    ],
  },

  bg: {
    code: 'bg',
    speakers: 8,
    family: 'Indo-European',
    writingSystem: 'Cyrillic',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Bulgarian offers a gateway to the oldest literary Slavic tradition (Old Church Slavonic originated here), connects you to a EU member state with growing tourism, and is the only Slavic language without cases.',
    whatMakesUnique: 'Bulgarian is unique among Slavic languages in having completely lost its case system, developed a postfixed definite article (like Romanian and Scandinavian languages), and retained a complex verb system with evidential mood indicating reported speech.',
    faq: [
      {
        question: 'Does Bulgarian have cases like other Slavic languages?',
        answer: 'No, Bulgarian is the only Slavic language to have completely eliminated its case system. This makes it significantly easier grammatically than Russian, Polish, or Czech. Instead of cases, Bulgarian uses prepositions and word order, similar to English. This makes reading Bulgarian more approachable for English speakers.',
      },
      {
        question: 'How hard is Bulgarian to learn?',
        answer: 'Bulgarian is FSI Category III (about 1100 hours). While it uses Cyrillic and has complex verb forms, the absence of cases removes a major obstacle present in other Slavic languages. Regular reading practice helps with the verb system and vocabulary acquisition.',
      },
      {
        question: 'Is Bulgarian similar to Russian?',
        answer: 'Bulgarian and Russian share about 74% lexical similarity and both use Cyrillic, but their grammars differ significantly. Bulgarian has no cases but has definite articles and a more complex verb tense system. Russian knowledge provides vocabulary overlap but the grammatical structures require separate learning.',
      },
    ],
  },

  mk: {
    code: 'mk',
    speakers: 3.5,
    family: 'Indo-European',
    writingSystem: 'Cyrillic',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Macedonian connects you to the crossroads of Balkan cultures with a unique literary tradition, provides mutual intelligibility with Bulgarian, and offers insight into the historical development of Slavic languages.',
    whatMakesUnique: 'Macedonian shares Bulgarian\'s loss of cases and postfixed definite article (with three degrees of definiteness: this/that/yonder), has a simplified verb system compared to Bulgarian, and preserves archaic Slavic features lost elsewhere.',
    faq: [
      {
        question: 'How similar is Macedonian to Bulgarian?',
        answer: 'Macedonian and Bulgarian are very closely related with high mutual intelligibility, sharing the loss of cases, postfixed articles, and similar vocabulary. The main differences are in phonology and some vocabulary. A Bulgarian reader can generally understand Macedonian texts with minimal difficulty.',
      },
      {
        question: 'Is Macedonian hard to learn?',
        answer: 'Macedonian is FSI Category III (about 1100 hours). However, like Bulgarian, it lacks the case system that makes other Slavic languages difficult. Its verb system is simpler than Bulgarian\'s, and spelling is phonetic. Reading Macedonian is relatively straightforward once you learn Cyrillic.',
      },
      {
        question: 'What is unique about Macedonian grammar?',
        answer: 'Macedonian has a three-way definite article system distinguishing proximity (this one here/that one there/that one over there), lost among all other European languages. It also has no cases, uses a simplified verb system, and has regular stress patterns. These features make reading somewhat more predictable.',
      },
    ],
  },

  sl: {
    code: 'sl',
    speakers: 2.5,
    family: 'Indo-European',
    writingSystem: 'Latin',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Slovenian is the key to understanding one of Europe\'s most beautiful and diverse small countries, preserves rare grammatical features lost in other Slavic languages, and bridges South and West Slavic language groups.',
    whatMakesUnique: 'Slovenian is one of the few languages worldwide to preserve the dual grammatical number (separate forms for exactly two items), has 46 distinct dialects for just 2.5 million speakers, and uses a tonal accent in some dialects.',
    faq: [
      {
        question: 'Is Slovenian similar to Croatian or Serbian?',
        answer: 'While all are South Slavic, Slovenian is less mutually intelligible with Serbian/Croatian than they are with each other. Slovenian has preserved the dual number, has different case endings, and distinct vocabulary. Reading Slovenian requires separate study even for Serbian/Croatian speakers.',
      },
      {
        question: 'What is the dual number in Slovenian?',
        answer: 'Slovenian distinguishes singular (one), dual (exactly two), and plural (three or more) in nouns, adjectives, pronouns, and verbs. This rare feature exists in very few modern languages. It adds complexity but also precision, and becomes natural through reading exposure.',
      },
      {
        question: 'Is Slovenian worth learning?',
        answer: 'Slovenia has one of the highest GDP per capita in Central Europe, a thriving literary culture (Ljubljana was UNESCO City of Literature), and stunning natural diversity. For linguists, Slovenian\'s preserved dual number and extreme dialectal variation make it fascinating to study through reading.',
      },
    ],
  },

  lv: {
    code: 'lv',
    speakers: 1.7,
    family: 'Indo-European',
    writingSystem: 'Latin',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Latvian is one of only two surviving Baltic languages, preserving ancient Indo-European features, and connects you to Latvia\'s unique culture that blends Northern European and Baltic traditions.',
    whatMakesUnique: 'Latvian preserves archaic Indo-European features including a complex pitch accent system with three tones, seven grammatical cases, and dative constructions where the experiencer is not the subject, offering linguists a window into Proto-Indo-European.',
    faq: [
      {
        question: 'How is Latvian related to Lithuanian?',
        answer: 'Latvian and Lithuanian are the only two surviving Baltic languages, forming their own branch of Indo-European. They share about 50% lexical similarity but are not mutually intelligible. Latvian has undergone more innovation while Lithuanian preserves more archaic features.',
      },
      {
        question: 'Is Latvian hard to learn?',
        answer: 'Latvian is FSI Category III (about 1100 hours). It has seven cases, complex verb conjugation, and a pitch accent system. However, its spelling is largely phonetic with diacritical marks indicating long vowels and palatalization, making reading practice a reliable way to build pronunciation.',
      },
      {
        question: 'Why learn Latvian?',
        answer: 'Latvia is an EU and NATO member with a growing tech sector and unique Baltic culture. Latvian provides insight into ancient Indo-European language structures. Its rich folk song tradition (dainas) comprises over 1.2 million texts, offering vast reading material for language learners.',
      },
    ],
  },

  lt: {
    code: 'lt',
    speakers: 3,
    family: 'Indo-European',
    writingSystem: 'Latin',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Lithuanian is often called the most archaic living Indo-European language, preserving features from thousands of years ago, while connecting you to Lithuania\'s vibrant literary scene and growing Baltic economy.',
    whatMakesUnique: 'Lithuanian preserves remarkably archaic Indo-European features including seven cases, a free pitch accent, and vocabulary closely resembling Sanskrit and Latin, making it invaluable for historical linguistics and understanding language evolution.',
    faq: [
      {
        question: 'Why is Lithuanian considered the most archaic Indo-European language?',
        answer: 'Lithuanian retains features from Proto-Indo-European that most other languages lost millennia ago, including archaic noun declensions, a free pitch accent, and vocabulary remarkably similar to Sanskrit. A famous example: Lithuanian "vyras" (man) corresponds to Sanskrit "viras" and Latin "vir."',
      },
      {
        question: 'How hard is Lithuanian to learn?',
        answer: 'Lithuanian is FSI Category III (about 1100 hours). It has seven cases, complex verb conjugation, a pitch accent, and many irregular forms. However, reading Lithuanian is aided by its phonetic spelling system. Consistent reading practice helps internalize the complex morphological patterns.',
      },
      {
        question: 'Is Lithuanian similar to Latvian?',
        answer: 'Lithuanian and Latvian are both Baltic languages but not mutually intelligible, sharing about 50% lexical similarity. Lithuanian is more conservative and preserves older forms. Learning one provides some vocabulary overlap with the other but requires separate dedicated study for fluency.',
      },
    ],
  },

  fi: {
    code: 'fi',
    speakers: 5.8,
    family: 'Uralic',
    writingSystem: 'Latin',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Finnish opens access to the Kalevala epic and modern Finnish literature (including Tove Jansson\'s Moomins in the original), connects you to one of the world\'s most innovative education systems, and reveals a completely different way of structuring language.',
    whatMakesUnique: 'Finnish is an agglutinative language with 15 grammatical cases, builds meaning through extensive suffixing (one word can equal an entire English sentence), has vowel harmony, no grammatical gender, no articles, and no prepositions (using postpositions instead).',
    faq: [
      {
        question: 'Is Finnish one of the hardest languages to learn?',
        answer: 'Finnish is FSI Category III (about 1100 hours) and is challenging due to 15 cases, agglutination, and vocabulary unrelated to Indo-European languages. However, Finnish spelling is perfectly phonetic, grammar is extremely regular with few exceptions, and there is no grammatical gender. Reading Finnish builds pattern recognition for its logical suffixing system.',
      },
      {
        question: 'Is Finnish related to any major languages?',
        answer: 'Finnish belongs to the Uralic family, related to Estonian (very close, partially mutually intelligible) and distantly to Hungarian. It has no connection to neighboring Swedish, Russian, or other Indo-European languages. This means vocabulary must be learned from scratch, making reading practice essential.',
      },
      {
        question: 'How does Finnish grammar work?',
        answer: 'Finnish builds words by stacking suffixes: "talossanikin" means "in my house too" (talo + ssa + ni + kin). It has 15 cases but very regular patterns. There are no articles, no grammatical gender, and no prepositions. Once you understand the logic, reading Finnish becomes a satisfying puzzle of decoding suffixes.',
      },
      {
        question: 'Why learn Finnish?',
        answer: 'Finland consistently ranks highest in education, happiness, and innovation. Finnish opens doors to the Nordic tech sector (Nokia, Linux was created by a Finn), unique Scandinavian culture, and a rich literary tradition. The Finnish concept of "sisu" (resilience) is embedded throughout its literature.',
      },
    ],
  },

  hu: {
    code: 'hu',
    speakers: 13,
    family: 'Uralic',
    writingSystem: 'Latin',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Hungarian unlocks a unique literary tradition from Petofi to Nobel laureate Imre Kertesz, connects you to Central European culture, and challenges your mind with a language structure unlike anything in the Indo-European world.',
    whatMakesUnique: 'Hungarian is agglutinative with 18 grammatical cases, uses extensive vowel harmony, has definite and indefinite verb conjugations, expresses possession through suffixes rather than separate words, and builds complex meanings through systematic prefixing and suffixing.',
    faq: [
      {
        question: 'Is Hungarian really one of the hardest languages?',
        answer: 'Hungarian is FSI Category III (about 1100 hours) and is challenging due to 18 cases, vowel harmony, and vocabulary unrelated to surrounding languages. However, its grammar is extremely logical and regular, with almost no exceptions. Reading Hungarian systematically builds understanding of its agglutinative patterns.',
      },
      {
        question: 'Is Hungarian related to Finnish?',
        answer: 'Both belong to the Uralic language family, but they diverged roughly 4,500 years ago and are not mutually intelligible. They share structural features like agglutination and vowel harmony, but basic vocabulary is almost entirely different. The relationship is comparable to English and Persian within Indo-European.',
      },
      {
        question: 'How does Hungarian word order work?',
        answer: 'Hungarian has flexible word order, but the position before the verb is the focus position, carrying emphasis. The basic neutral order is subject-verb-object, but speakers freely rearrange for emphasis. This topic-focus structure makes Hungarian prose particularly expressive. Reading Hungarian literature reveals how authors exploit this flexibility.',
      },
      {
        question: 'Why learn Hungarian?',
        answer: 'Hungary has a rich cultural heritage in music (Liszt, Bartok), mathematics, science, and literature. Budapest is a growing European tech hub. Hungarian knowledge also opens doors to understanding unique Finno-Ugric language structures and Central European history and politics.',
      },
    ],
  },

  et: {
    code: 'et',
    speakers: 1.1,
    family: 'Uralic',
    writingSystem: 'Latin',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Estonian connects you to one of the world\'s most digitally advanced societies (e-residency, digital governance), a cousin language to Finnish, and a unique literary tradition in a country that gained independence through a "Singing Revolution."',
    whatMakesUnique: 'Estonian has 14 grammatical cases, three degrees of consonant and vowel length (short, long, overlong) that distinguish meaning, no grammatical gender or future tense, and has borrowed extensively from German, Russian, and Finnish.',
    faq: [
      {
        question: 'How similar is Estonian to Finnish?',
        answer: 'Estonian and Finnish share about 50% lexical similarity and similar agglutinative grammar. Speakers can partially understand each other with effort, especially in writing. Estonian has been more influenced by German and has lost vowel harmony present in Finnish. Reading Estonian provides a foundation for understanding Finnish.',
      },
      {
        question: 'Is Estonian hard to learn?',
        answer: 'Estonian is FSI Category III (about 1100 hours). Its 14 cases, three-way length distinction, and consonant gradation are challenging. However, Estonian has no grammatical gender, no articles, and fairly regular grammar. Its phonetic spelling makes reading practice an effective learning strategy.',
      },
      {
        question: 'Why learn Estonian?',
        answer: 'Estonia is the world\'s most digitally advanced society, pioneering e-governance and digital nomad visas. Tallinn has a thriving tech startup scene. Estonian language knowledge opens doors in Baltic business and gives insight into Uralic language structures shared with Finnish and Hungarian.',
      },
    ],
  },

  tr: {
    code: 'tr',
    speakers: 88,
    family: 'Turkic',
    writingSystem: 'Latin',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Turkish provides access to a rich literary tradition from Orhan Pamuk to Nazim Hikmet, connects you to 88 million speakers bridging Europe and Asia, and serves as a gateway to other Turkic languages spoken across Central Asia.',
    whatMakesUnique: 'Turkish is agglutinative with strict vowel harmony, perfectly regular grammar with almost no exceptions, subject-object-verb word order, and the ability to express complex ideas in single words through systematic suffixing.',
    faq: [
      {
        question: 'Is Turkish hard to learn for English speakers?',
        answer: 'Turkish is FSI Category III (about 1100 hours). While its agglutinative grammar and vowel harmony are unfamiliar, Turkish is extremely regular with virtually no exceptions. Spelling is perfectly phonetic since the 1928 alphabet reform. Reading Turkish systematically builds understanding of its logical suffix patterns.',
      },
      {
        question: 'Does learning Turkish help with other Turkic languages?',
        answer: 'Yes, Turkish provides a strong foundation for Azerbaijani (very high mutual intelligibility), Uzbek, Kazakh, Kyrgyz, and Turkmen. These languages share core vocabulary, vowel harmony, and agglutinative structure. Reading Turkish builds skills directly transferable to the entire Turkic language family of 200+ million speakers.',
      },
      {
        question: 'What makes Turkish grammar special?',
        answer: 'Turkish grammar is almost perfectly regular: learn one pattern and it applies consistently. Words are built by adding suffixes in a fixed order following vowel harmony rules. There is no grammatical gender, no irregular verbs (except "to be"), and no articles. This regularity makes reading comprehension predictable once you master the suffix system.',
      },
      {
        question: 'Is Turkish useful for careers?',
        answer: 'Turkey has the world\'s 17th largest economy with major industries in manufacturing, tourism, and construction. Turkish is also strategically important for diplomacy and intelligence. The growing Turkish tech sector and diaspora communities make Turkish valuable for international business.',
      },
    ],
  },

  az: {
    code: 'az',
    speakers: 23,
    family: 'Turkic',
    writingSystem: 'Latin',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Azerbaijani connects you to the resource-rich Caucasus region, is highly mutually intelligible with Turkish (opening access to 100+ million speakers), and provides a gateway to the broader Turkic language world.',
    whatMakesUnique: 'Azerbaijani bridges Persian and Turkic linguistic traditions, maintaining Turkic agglutinative grammar and vowel harmony while incorporating significant Persian and Arabic vocabulary, and transitioned from Arabic to Latin to Cyrillic and back to Latin script within a century.',
    faq: [
      {
        question: 'How similar is Azerbaijani to Turkish?',
        answer: 'Azerbaijani and Turkish are highly mutually intelligible, especially in writing. They share the same grammar structure, vowel harmony system, and much core vocabulary. The main differences are in some sound shifts and vocabulary. A Turkish reader can generally understand Azerbaijani texts with minimal difficulty.',
      },
      {
        question: 'Is Azerbaijani hard to learn?',
        answer: 'Azerbaijani is FSI Category III (about 1100 hours). Like Turkish, it has agglutinative grammar with vowel harmony and is extremely regular. Its Latin-based alphabet (adopted in 1991) is phonetic. If you know Turkish, Azerbaijani can be learned much faster through reading practice.',
      },
      {
        question: 'Why learn Azerbaijani?',
        answer: 'Azerbaijan is a strategic country in the energy sector, bridging Europe and Central Asia. Azerbaijani knowledge opens doors in oil and gas, diplomacy, and regional business. It also provides mutual intelligibility with Turkish and a stepping stone to other Turkic languages.',
      },
    ],
  },

  el: {
    code: 'el',
    speakers: 13.5,
    family: 'Indo-European',
    writingSystem: 'Greek',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Greek provides direct access to one of humanity\'s oldest literary traditions from Homer to Kazantzakis, deepens understanding of English vocabulary (which borrows extensively from Greek), and connects you to modern Greece and Cyprus.',
    whatMakesUnique: 'Greek has the longest documented history of any Indo-European language (3,400+ years of continuous written records), uses its own unique alphabet that gave rise to Latin and Cyrillic, and maintains a distinctive aspect-based verb system.',
    faq: [
      {
        question: 'How different is modern Greek from ancient Greek?',
        answer: 'Modern Greek has simplified significantly: it lost the dative case, dual number, optative mood, and infinitive. Pronunciation changed dramatically (many vowels merged). However, core vocabulary remains recognizable, and learning modern Greek helps you access simplified ancient texts. Reading modern Greek literature naturally builds vocabulary bridges to the classical language.',
      },
      {
        question: 'Is the Greek alphabet hard to learn?',
        answer: 'The Greek alphabet has 24 letters and can be learned in a few days. Many letters are already familiar from mathematics and science (alpha, beta, pi, sigma). Once you master the alphabet, Greek spelling is largely phonetic and consistent, making reading practice straightforward.',
      },
      {
        question: 'Is Greek useful to learn?',
        answer: 'Beyond Greece and Cyprus, Greek is valuable for understanding English vocabulary (60% of English academic words have Greek roots), studying philosophy, theology, and medicine in original sources, and for EU career opportunities. Tourism and shipping industries also value Greek speakers.',
      },
      {
        question: 'How hard is modern Greek?',
        answer: 'Greek is FSI Category III (about 1100 hours). Challenges include the alphabet, verb conjugation, and grammatical gender. However, once you learn the alphabet, spelling is regular and thousands of English words have Greek roots you will recognize. Reading Greek texts with parallel translations leverages this existing vocabulary knowledge.',
      },
    ],
  },

  vi: {
    code: 'vi',
    speakers: 85,
    family: 'Austroasiatic',
    writingSystem: 'Latin',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Vietnamese connects you with 85 million speakers, a rapidly growing Southeast Asian economy, a rich literary tradition, and a vibrant culture that blends Chinese, French, and indigenous influences.',
    whatMakesUnique: 'Vietnamese is a tonal language with six tones that distinguish word meanings, uses the Latin alphabet (unique among major Southeast Asian languages), has an isolating grammar with no inflection, and classifies nouns using an extensive system of classifiers.',
    faq: [
      {
        question: 'Is Vietnamese hard to learn?',
        answer: 'Vietnamese is FSI Category III (about 1100 hours). The six tones are the biggest challenge for English speakers, as mispronouncing a tone changes meaning entirely. However, Vietnamese grammar is very simple with no conjugation, no gender, no cases, and no plural forms. Reading Vietnamese builds vocabulary while the Latin script makes it accessible.',
      },
      {
        question: 'Does Vietnamese use the Latin alphabet?',
        answer: 'Yes, Vietnamese uses a modified Latin alphabet with additional diacritical marks for tones and vowel modifications. This system (Quoc ngu) was developed by Portuguese missionaries in the 17th century and officially adopted in the early 20th century. It makes Vietnamese the most readable Southeast Asian language for Westerners.',
      },
      {
        question: 'Is Vietnamese a tonal language?',
        answer: 'Yes, Vietnamese has six distinct tones: level, rising, falling, broken (dipping-rising), heavy (low falling), and asking (falling-rising). Each syllable carries a tone that is part of its meaning. Reading Vietnamese with audio helps train tonal recognition, as tone marks in writing indicate which tone to use.',
      },
      {
        question: 'Is Vietnamese useful for business?',
        answer: 'Vietnam has one of the fastest-growing economies in Southeast Asia, with major manufacturing, technology, and service sectors. Many multinational companies operate there. Vietnamese language skills are increasingly valuable for business in the ASEAN region.',
      },
    ],
  },

  id: {
    code: 'id',
    speakers: 199,
    family: 'Austronesian',
    writingSystem: 'Latin',
    fsiCategory: 'II',
    fsiHours: 900,
    whyLearn: 'Indonesian (Bahasa Indonesia) connects you with nearly 200 million speakers in the world\'s fourth most populous country, one of the largest economies in Southeast Asia, with a growing tech sector and vast cultural diversity.',
    whatMakesUnique: 'Indonesian was deliberately designed as a simple lingua franca: it has no tones, no grammatical gender, no verb conjugation, no tenses, and uses a straightforward affixation system to derive words from roots.',
    faq: [
      {
        question: 'Is Indonesian easy to learn?',
        answer: 'Indonesian is FSI Category II (about 900 hours) and is often cited as one of the easiest Asian languages for English speakers. It has no tones, no verb conjugation, no grammatical gender, and uses the Latin alphabet. Reading Indonesian texts is accessible from early stages due to simple grammar and phonetic spelling.',
      },
      {
        question: 'Is Indonesian the same as Malay?',
        answer: 'Indonesian and Malay are standardized varieties of the same language (Malay), with about 80% mutual intelligibility. They differ in some vocabulary, spelling conventions, and loanword sources (Indonesian borrows more from Dutch and Javanese, Malaysian from English and Arabic). Reading one provides strong access to the other.',
      },
      {
        question: 'How many people speak Indonesian?',
        answer: 'About 199 million people speak Indonesian as a first or second language, making it one of the most widely spoken languages globally. It serves as the national lingua franca of Indonesia, which has over 700 indigenous languages. Its simplicity was intentionally designed to unite this diverse nation.',
      },
      {
        question: 'Why learn Indonesian?',
        answer: 'Indonesia is the world\'s fourth most populous country with a rapidly growing digital economy. Indonesian is useful for business in Southeast Asia, travel across the archipelago, and accessing a rich literary tradition. Its relative simplicity makes it rewarding to learn quickly through reading.',
      },
    ],
  },

  ms: {
    code: 'ms',
    speakers: 77,
    family: 'Austronesian',
    writingSystem: 'Latin',
    fsiCategory: 'II',
    fsiHours: 900,
    whyLearn: 'Malay connects you with speakers across Malaysia, Singapore, Brunei, and parts of Thailand, provides mutual intelligibility with Indonesian (combined 270+ million speakers), and opens doors to Southeast Asian business and culture.',
    whatMakesUnique: 'Malay features reduplication to form plurals and emphasis (like "orang-orang" for "people"), uses a logical affixation system to build vocabulary from roots, and has borrowed extensively from Sanskrit, Arabic, Portuguese, Dutch, and English.',
    faq: [
      {
        question: 'Is Malay the same as Indonesian?',
        answer: 'Malay and Indonesian are varieties of the same language with about 80% mutual intelligibility. Malaysian Malay retains more English loanwords while Indonesian uses more Dutch-influenced terms. Grammar and core vocabulary are essentially identical. Learning either gives you access to both.',
      },
      {
        question: 'Is Malay easy to learn?',
        answer: 'Malay is FSI Category II (about 900 hours) and is among the easiest Asian languages for English speakers. It has no tones, no conjugation, no grammatical gender, uses the Latin alphabet, and has simple grammar. Reading Malay is accessible early due to many English loanwords and phonetic spelling.',
      },
      {
        question: 'Why learn Malay?',
        answer: 'Malaysia has a strong economy in electronics, oil, and palm oil, and is a major business hub in Southeast Asia. Malay is also spoken in Singapore, Brunei, and southern Thailand. Combined with Indonesian mutual intelligibility, Malay gives access to communication with over 270 million people.',
      },
    ],
  },

  is: {
    code: 'is',
    speakers: 0.37,
    family: 'Indo-European',
    writingSystem: 'Latin',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Icelandic provides direct access to the medieval Norse sagas in their original language, preserves Old Norse grammar nearly unchanged for 1,000 years, and connects you to Iceland\'s extraordinary literary culture (the most books published per capita globally).',
    whatMakesUnique: 'Icelandic has changed so little since the 13th century that modern speakers can read medieval sagas with minimal difficulty, maintains four cases, three genders, complex verb conjugation, and creates all new vocabulary from native roots rather than borrowing foreign words.',
    faq: [
      {
        question: 'Is Icelandic the hardest Scandinavian language?',
        answer: 'Yes, Icelandic is significantly harder than other Scandinavian languages (FSI Category III vs Category I). It preserves Old Norse grammar with four cases, three genders, and complex conjugation that Swedish, Norwegian, and Danish have simplified. However, reading Icelandic sagas in the original is a unique and rewarding experience.',
      },
      {
        question: 'Can Icelandic speakers read Old Norse?',
        answer: 'Largely yes. Icelandic has changed so little in 1,000 years that modern speakers can read medieval sagas and eddas with relative ease. This makes learning Icelandic uniquely rewarding for literature enthusiasts, as it opens access to the entire corpus of Norse mythology and medieval Scandinavian literature.',
      },
      {
        question: 'How does Icelandic create new words?',
        answer: 'Icelandic actively creates neologisms from native roots rather than borrowing from English or other languages. "Computer" is "tolva" (number-prophetess), "telephone" is "simi" (thread). This linguistic purism means learners build vocabulary through understanding word-formation patterns rather than recognizing international words.',
      },
    ],
  },

  af: {
    code: 'af',
    speakers: 7.2,
    family: 'Indo-European',
    writingSystem: 'Latin',
    fsiCategory: 'I',
    fsiHours: 750,
    whyLearn: 'Afrikaans is considered one of the easiest languages for English speakers to learn, offers access to a unique South African literary tradition, and provides partial intelligibility with Dutch and Flemish.',
    whatMakesUnique: 'Afrikaans evolved from Dutch in just 300 years, shedding grammatical gender, most verb conjugation, and case systems to become one of the most analytically simplified Germanic languages, while developing a double negative construction similar to French.',
    faq: [
      {
        question: 'Is Afrikaans the easiest language for English speakers?',
        answer: 'Afrikaans is often cited as one of the very easiest languages for English speakers (FSI Category I, about 750 hours). It has no grammatical gender, almost no verb conjugation (only a few forms), and shares extensive vocabulary with English and Dutch. Reading Afrikaans is immediately accessible for English speakers.',
      },
      {
        question: 'How similar is Afrikaans to Dutch?',
        answer: 'Afrikaans evolved from Dutch and the two languages share about 90% lexical similarity. Written Afrikaans is largely understandable to Dutch speakers. Afrikaans has much simpler grammar (no cases, minimal conjugation). Learning Afrikaans provides significant reading access to Dutch and vice versa.',
      },
      {
        question: 'Where is Afrikaans spoken?',
        answer: 'Afrikaans is spoken primarily in South Africa (about 7 million native speakers) and Namibia. It developed from 17th-century Dutch colonists but has been enriched by Malay, Portuguese, and indigenous African languages. It is one of South Africa\'s 11 official languages.',
      },
    ],
  },

  ca: {
    code: 'ca',
    speakers: 10,
    family: 'Indo-European',
    writingSystem: 'Latin',
    fsiCategory: 'I',
    fsiHours: 750,
    whyLearn: 'Catalan connects you to Barcelona and Catalonia\'s vibrant culture, a rich medieval literary tradition, and provides a bridge between French and Spanish that accelerates learning of both.',
    whatMakesUnique: 'Catalan occupies a unique position between French and Spanish linguistically, preserves some archaic features lost in both, has a rich medieval troubadour literature predating most European vernacular traditions, and features phonological contrasts like the "dark l" found in English but not other Romance languages.',
    faq: [
      {
        question: 'Is Catalan a dialect of Spanish?',
        answer: 'No, Catalan is a distinct Romance language more closely related to Occitan (southern France) than to Spanish. It developed independently from Vulgar Latin and has its own grammar, vocabulary, and phonology. It is an official language in Catalonia, Valencia, the Balearic Islands, and Andorra.',
      },
      {
        question: 'Is Catalan easy to learn if you know Spanish or French?',
        answer: 'Yes, Catalan is FSI Category I (about 750 hours) and is significantly easier if you already know Spanish or French, as it shares features with both. It has about 85% lexical similarity with Spanish. Reading Catalan texts leverages existing Romance language knowledge effectively.',
      },
      {
        question: 'How many people speak Catalan?',
        answer: 'About 10 million people speak Catalan, primarily in Catalonia, Valencia, the Balearic Islands, Andorra, and parts of southern France. It is one of the most widely spoken minority languages in Europe and has a thriving literary and media scene.',
      },
    ],
  },

  gl: {
    code: 'gl',
    speakers: 2.4,
    family: 'Indo-European',
    writingSystem: 'Latin',
    fsiCategory: 'I',
    fsiHours: 750,
    whyLearn: 'Galician provides a bridge between Spanish and Portuguese, access to a unique Celtic-influenced literary tradition in northwestern Spain, and the medieval troubadour poetry that influenced all of Iberian literature.',
    whatMakesUnique: 'Galician and Portuguese were the same language until the 14th century (Galician-Portuguese), making Galician a living window into medieval Iberian literature. It maintains phonological features between Spanish and Portuguese and preserves Celtic substrate vocabulary unique in Romance languages.',
    faq: [
      {
        question: 'Is Galician a dialect of Spanish or Portuguese?',
        answer: 'Galician is a distinct language closely related to Portuguese (they share a common ancestor, Galician-Portuguese). It has about 85% lexical similarity with Portuguese and 85% with Spanish. It occupies a unique position between the two and is an official language of the autonomous community of Galicia in Spain.',
      },
      {
        question: 'Is Galician easy to learn?',
        answer: 'Galician is FSI Category I (about 750 hours) for English speakers and extremely accessible for anyone who knows Spanish or Portuguese. Reading Galician is an excellent way to bridge these two major languages and access medieval Iberian literary texts in their original form.',
      },
      {
        question: 'Where is Galician spoken?',
        answer: 'Galician is spoken by about 2.4 million people in Galicia, northwestern Spain. It has co-official status alongside Spanish. The language has a growing literary scene and strong cultural identity tied to Celtic heritage, seafaring traditions, and the Camino de Santiago pilgrimage route.',
      },
    ],
  },

  kk: {
    code: 'kk',
    speakers: 13,
    family: 'Turkic',
    writingSystem: 'Cyrillic, Latin',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Kazakh connects you with Central Asia\'s largest economy, provides access to a rich oral literary tradition of the Kazakh steppe, and opens doors to understanding the broader Turkic language world.',
    whatMakesUnique: 'Kazakh has nine vowels (including front rounded vowels rare in Turkic languages), strict vowel harmony, and is currently transitioning from Cyrillic to Latin script. Its agglutinative grammar is highly regular with systematic suffixation.',
    faq: [
      {
        question: 'Is Kazakh similar to Turkish?',
        answer: 'Kazakh and Turkish are both Turkic languages sharing agglutinative grammar and vowel harmony. However, they belong to different branches (Kipchak vs Oghuz) and have limited mutual intelligibility without study. Knowing Turkish helps with grammar but Kazakh has different vocabulary and sounds. Reading Kazakh builds on Turkic grammar knowledge.',
      },
      {
        question: 'What script does Kazakh use?',
        answer: 'Kazakh officially uses Cyrillic in Kazakhstan but is transitioning to a Latin-based alphabet (target: 2031). In China, Kazakh speakers use Arabic script. This transition means learners today benefit from knowing both Cyrillic and the emerging Latin standard.',
      },
      {
        question: 'Why learn Kazakh?',
        answer: 'Kazakhstan is Central Asia\'s largest economy with major oil, gas, and mineral resources. It is a key player in the Belt and Road Initiative and has a growing tech sector. Kazakh language knowledge is valuable for energy sector careers, diplomacy, and Central Asian business.',
      },
    ],
  },

  uz: {
    code: 'uz',
    speakers: 34,
    family: 'Turkic',
    writingSystem: 'Latin',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Uzbek connects you with Central Asia\'s most populous country, the historic Silk Road cities of Samarkand and Bukhara, and a literary tradition that includes Alisher Navoi, often called the Chaucer of Turkic literature.',
    whatMakesUnique: 'Uzbek is unusual among Turkic languages in having lost vowel harmony due to Persian influence, has six vowels, and blends Turkic agglutinative grammar with significant Persian and Arabic vocabulary from centuries of cultural exchange on the Silk Road.',
    faq: [
      {
        question: 'Is Uzbek similar to Turkish?',
        answer: 'Uzbek and Turkish are both Turkic languages with similar agglutinative grammar, but they belong to different branches (Karluk vs Oghuz). Uzbek has lost vowel harmony and absorbed more Persian vocabulary. Mutual intelligibility is limited, but Turkish speakers find Uzbek grammar familiar. Reading skills in one transfer partially to the other.',
      },
      {
        question: 'What script does Uzbek use?',
        answer: 'Uzbek officially uses a Latin-based alphabet since 1993, replacing the Soviet-era Cyrillic. In practice, Cyrillic is still widely used in daily life. In neighboring Afghanistan, Uzbek speakers use Arabic script. Learning the Latin script version is the standard for new learners.',
      },
      {
        question: 'Why learn Uzbek?',
        answer: 'Uzbekistan has 34 million speakers (Central Asia\'s largest population), a growing economy, and immense historical significance as the heart of the Silk Road. Uzbek opens doors to tourism, archaeology, regional diplomacy, and understanding Central Asian culture and history.',
      },
    ],
  },

  tl: {
    code: 'tl',
    speakers: 82,
    family: 'Austronesian',
    writingSystem: 'Latin',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Filipino connects you with over 80 million speakers in the Philippines, one of the largest English-speaking countries in Asia, and a rapidly growing BPO and tech sector with strong cultural ties to the US.',
    whatMakesUnique: 'Filipino uses a focus/voice system where verbs change form to indicate whether the actor, object, location, or instrument is the topic of the sentence, creating a unique perspective-shifting grammar system unlike European languages.',
    faq: [
      {
        question: 'Is Filipino the same as Tagalog?',
        answer: 'Filipino is the national language of the Philippines, based on Tagalog with additions from other Philippine languages, Spanish, and English. In practice, Filipino and Tagalog are mutually intelligible and nearly identical. The distinction is primarily political rather than linguistic.',
      },
      {
        question: 'Is Filipino hard to learn?',
        answer: 'Filipino is FSI Category III (about 1100 hours). Its focus/voice system is conceptually challenging for English speakers, but it has no tones, simple phonology, and uses the Latin alphabet. The extensive English and Spanish loanwords in Filipino make reading immediately rewarding with many recognizable words.',
      },
      {
        question: 'Why learn Filipino?',
        answer: 'The Philippines has over 110 million people and a large global diaspora. Filipino is useful for business process outsourcing, travel across the archipelago, and cultural connection. While many Filipinos speak English, knowing Filipino deepens cultural understanding and opens doors that English alone cannot.',
      },
    ],
  },

  mn: {
    code: 'mn',
    speakers: 5.7,
    family: 'Mongolic',
    writingSystem: 'Cyrillic',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Mongolian opens a window into the nomadic cultural heritage of Central Asia, the history of the Mongol Empire, and a unique literary tradition spanning from "The Secret History of the Mongols" to modern Mongolian literature.',
    whatMakesUnique: 'Mongolian uses vowel harmony, agglutinative morphology, and a complex system of converbs (verbal forms linking clauses without subordination). It traditionally uses a vertical script written top-to-bottom, though Cyrillic is standard in Mongolia today.',
    faq: [
      {
        question: 'Is Mongolian hard to learn?',
        answer: 'Mongolian is FSI Category III (about 1100 hours). Its agglutinative grammar, vowel harmony, and unfamiliar vocabulary make it challenging. However, Mongolian uses Cyrillic in Mongolia (learnable in days), has regular grammar, and no tones. Reading Mongolian builds vocabulary systematically through its logical suffix patterns.',
      },
      {
        question: 'What script does Mongolian use?',
        answer: 'In Mongolia, Cyrillic is the standard script used in all official contexts and education. The traditional vertical Mongolian script is used in Inner Mongolia (China) and is being gradually reintroduced in Mongolia. Most learning materials and modern literature use Cyrillic.',
      },
      {
        question: 'Is Mongolian related to Turkish or Chinese?',
        answer: 'Mongolian is not closely related to either. It belongs to the Mongolic language family. Some linguists propose a controversial broader Altaic grouping with Turkic languages, but this is not widely accepted. Mongolian shares structural features (agglutination, vowel harmony) with Turkic languages but vocabulary differs substantially.',
      },
    ],
  },

  ka: {
    code: 'ka',
    speakers: 3.7,
    family: 'Kartvelian',
    writingSystem: 'Georgian (Mkhedruli)',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Georgian connects you to one of the world\'s oldest civilizations with its own unique alphabet, a UNESCO-recognized wine culture dating back 8,000 years, and a rich literary tradition including the medieval epic "The Knight in the Panther\'s Skin."',
    whatMakesUnique: 'Georgian has its own unique alphabet unrelated to any other writing system, can cluster up to eight consonants together, uses a polypersonal verb system where one verb can reference subject, direct object, and indirect object simultaneously, and belongs to the small Kartvelian language family with no proven external relatives.',
    faq: [
      {
        question: 'Is Georgian hard to learn?',
        answer: 'Georgian is FSI Category III (about 1100 hours). The unique alphabet (33 letters) can be learned in a week, but the polypersonal verb system, consonant clusters, and ergative case alignment present significant challenges. Reading Georgian is rewarding once you master the beautiful Mkhedruli script.',
      },
      {
        question: 'Is Georgian related to any other language?',
        answer: 'Georgian belongs to the Kartvelian family along with Mingrelian, Svan, and Laz, spoken only in the Caucasus region. It has no proven relationship to any other language family in the world, making it a "language isolate family." This uniqueness makes studying Georgian linguistically fascinating.',
      },
      {
        question: 'How old is the Georgian alphabet?',
        answer: 'The Georgian alphabet dates to the 5th century AD, making it one of the oldest alphabets still in active use. The current form (Mkhedruli) has been used since the 11th century. Each of its 33 letters represents exactly one sound, making reading phonetically straightforward once the script is learned.',
      },
    ],
  },

  hy: {
    code: 'hy',
    speakers: 6.7,
    family: 'Indo-European',
    writingSystem: 'Armenian',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Armenian provides access to one of the world\'s oldest Christian literary traditions (dating to the 5th century), connects you with a global diaspora of 6+ million, and reveals a unique Indo-European language with its own ancient alphabet.',
    whatMakesUnique: 'Armenian forms its own independent branch of Indo-European with no close relatives, uses a unique 38-letter alphabet created in 405 AD, has evolved dramatically from Classical Armenian (still used in liturgy), and features unusual phonological contrasts including ejective consonants.',
    faq: [
      {
        question: 'Is Armenian hard to learn?',
        answer: 'Armenian is FSI Category III (about 1100 hours). The unique alphabet takes 1-2 weeks to master, and the grammar has complex verb conjugation and two literary standards (Eastern and Western). However, as an Indo-European language, some vocabulary is distantly recognizable. Reading Armenian builds familiarity with its regular spelling system.',
      },
      {
        question: 'Are Eastern and Western Armenian very different?',
        answer: 'Eastern Armenian (spoken in Armenia and Iran) and Western Armenian (diaspora) differ in consonant pronunciation, some grammar, and vocabulary. They are partially mutually intelligible with effort. Written forms are closer than spoken. Most modern literature and media from Armenia uses Eastern Armenian.',
      },
      {
        question: 'Is the Armenian alphabet hard to learn?',
        answer: 'The Armenian alphabet has 38 letters (39 in reformed spelling), each representing one sound. It was created by Mesrop Mashtots in 405 AD specifically for the Armenian language. Most learners master it in 1-2 weeks. Once learned, Armenian spelling is very regular, making reading practice efficient.',
      },
    ],
  },

  sq: {
    code: 'sq',
    speakers: 7.5,
    family: 'Indo-European',
    writingSystem: 'Latin',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Albanian forms its own unique branch of Indo-European languages, connects you to Albania, Kosovo, and North Macedonia, and provides insight into ancient Balkan languages that predate Greek and Latin influence in the region.',
    whatMakesUnique: 'Albanian is the sole surviving member of its own Indo-European branch (no close relatives), preserves features potentially linked to ancient Illyrian, has two main dialects (Gheg and Tosk) with significant differences, and features a complex verb system with multiple moods including an admirative mood expressing surprise.',
    faq: [
      {
        question: 'Is Albanian related to any other language?',
        answer: 'Albanian forms its own independent branch of Indo-European, with no close living relatives. It may descend from ancient Illyrian or Thracian, though this is debated. Despite heavy borrowing from Latin, Greek, Turkish, and Slavic languages, its core grammar and basic vocabulary are uniquely Albanian.',
      },
      {
        question: 'Is Albanian hard to learn?',
        answer: 'Albanian is FSI Category III (about 1100 hours). It has complex verb morphology, definite and indefinite noun declensions, and postposed definite articles. However, it uses the Latin alphabet and has relatively regular spelling. Reading Albanian is made easier by many Italian and English loanwords in modern usage.',
      },
      {
        question: 'Where is Albanian spoken?',
        answer: 'Albanian is spoken by about 7.5 million people in Albania, Kosovo, North Macedonia, Montenegro, and by diaspora communities in Italy, Greece, and worldwide. It has two main dialects: Gheg (northern) and Tosk (southern), with the standard language based on Tosk.',
      },
    ],
  },

  eu: {
    code: 'eu',
    speakers: 1.1,
    family: 'Language isolate',
    writingSystem: 'Latin',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Basque is Europe\'s only surviving pre-Indo-European language, offering a unique window into the continent\'s linguistic past, with a vibrant literary and cultural scene in the Basque Country spanning Spain and France.',
    whatMakesUnique: 'Basque is a language isolate with no known relatives, predating all Indo-European languages in Europe. It uses ergative-absolutive case alignment (rare in European languages), agglutinative verb forms that encode subject, object, and indirect object, and has survived surrounded by Romance languages for millennia.',
    faq: [
      {
        question: 'Why is Basque so unique?',
        answer: 'Basque is the only surviving pre-Indo-European language in Western Europe, predating the arrival of Celtic, Latin, and Germanic languages by thousands of years. It has no proven relationship to any other language family on Earth. This makes it invaluable for understanding European prehistory and linguistic diversity.',
      },
      {
        question: 'Is Basque very hard to learn?',
        answer: 'Basque is FSI Category III (about 1100 hours) and is considered challenging because its vocabulary and grammar are unrelated to any familiar language. Its ergative case system and polypersonal verbs are conceptually different from European norms. However, it uses the Latin alphabet and has regular spelling. Reading Basque literature is a unique intellectual challenge.',
      },
      {
        question: 'How many people speak Basque?',
        answer: 'About 1.1 million people speak Basque, primarily in the Basque Country spanning northern Spain and southwestern France. The language has experienced a strong revival since the 1960s through education (ikastolas) and media. A growing body of modern literature makes reading materials increasingly available.',
      },
    ],
  },

  sw: {
    code: 'sw',
    speakers: 100,
    family: 'Niger-Congo',
    writingSystem: 'Latin',
    fsiCategory: 'II',
    fsiHours: 900,
    whyLearn: 'Swahili is Africa\'s most widely spoken language, serving as a lingua franca across East Africa with over 100 million speakers, and provides access to a rich literary tradition including Nobel Prize-worthy works from Ngugi wa Thiong\'o\'s circle.',
    whatMakesUnique: 'Swahili uses a noun class system with up to 18 classes (instead of masculine/feminine gender), features extensive agglutination in verbs that encode tense, subject, object, and mood in a single word, and blends Bantu grammar with significant Arabic vocabulary.',
    faq: [
      {
        question: 'Is Swahili easy to learn?',
        answer: 'Swahili is FSI Category II (about 900 hours), making it one of the easier African languages for English speakers. It has no tones (unlike most Bantu languages), uses the Latin alphabet, and has regular pronunciation. The noun class system is the main challenge. Reading Swahili builds familiarity with its logical class agreement patterns.',
      },
      {
        question: 'Where is Swahili spoken?',
        answer: 'Swahili is an official or national language in Tanzania, Kenya, Uganda, Rwanda, and the DRC. It serves as a lingua franca across East and Central Africa for over 100 million speakers. It is also an official language of the African Union. Its reach continues to expand as a pan-African lingua franca.',
      },
      {
        question: 'Is Swahili useful to learn?',
        answer: 'Swahili opens doors across East Africa, one of the world\'s fastest-growing economic regions. It is valuable for careers in international development, conservation, diplomacy, and business in Africa. As Africa\'s most spoken native language by number of countries, it has enormous practical utility for travel and work.',
      },
      {
        question: 'What makes Swahili different from other African languages?',
        answer: 'Swahili is distinctive among Bantu languages for lacking tones and having heavy Arabic, Persian, and Portuguese lexical influence due to centuries of Indian Ocean trade. Its noun class system (instead of gender) and agglutinative verbs are typical of Bantu languages but unfamiliar to European language learners.',
      },
    ],
  },

  zu: {
    code: 'zu',
    speakers: 27,
    family: 'Niger-Congo',
    writingSystem: 'Latin',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Zulu is South Africa\'s most widely spoken language with 27 million speakers, connects you to Zulu culture and history, and provides a foundation for understanding other Nguni languages like Xhosa and Ndebele.',
    whatMakesUnique: 'Zulu features click consonants (three types borrowed from Khoisan languages), a complex noun class system with 15 classes, agglutinative verb morphology, and a tonal system where pitch distinguishes meaning.',
    faq: [
      {
        question: 'Does Zulu have click sounds?',
        answer: 'Yes, Zulu has three click consonants (dental, alveolar, and lateral) borrowed from neighboring Khoisan languages. Each can be voiced, aspirated, or nasalized, creating nine click sounds total. While challenging, clicks follow regular patterns. Reading Zulu text shows clicks marked by c, q, and x, helping learners associate sounds with symbols.',
      },
      {
        question: 'Is Zulu hard to learn?',
        answer: 'Zulu is FSI Category III (about 1100 hours). Challenges include click consonants, a tonal system, the noun class system, and agglutinative morphology. However, Zulu uses the Latin alphabet, has regular spelling, and consistent grammar patterns. Reading Zulu builds familiarity with its logical noun class agreement system.',
      },
      {
        question: 'How useful is Zulu in South Africa?',
        answer: 'Zulu is the most spoken home language in South Africa with about 27 million speakers. Understanding Zulu also gives partial access to Xhosa, Ndebele, and Swazi (all Nguni languages). For anyone working in South Africa, knowing Zulu demonstrates cultural respect and opens doors beyond English-speaking circles.',
      },
    ],
  },

  be: {
    code: 'be',
    speakers: 5.1,
    family: 'Indo-European',
    writingSystem: 'Cyrillic',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Belarusian connects you to a rich literary tradition from Yakub Kolas to Svetlana Alexievich, provides a bridge between Russian, Ukrainian, and Polish, and supports cultural preservation of a language under pressure.',
    whatMakesUnique: 'Belarusian features dzekanie and tsekanie (softening of d/t before front vowels), "akanie" (unstressed o pronounced as a), a Latin-script variant (Lacinka), and occupies a linguistic middle ground between Russian, Ukrainian, and Polish.',
    faq: [
      {
        question: 'How different is Belarusian from Russian?',
        answer: 'Belarusian and Russian share about 75% lexical similarity but have distinct phonology, vocabulary, and some grammar differences. Belarusian has akanie (like Russian) but also dzekanie/tsekanie absent in Russian. It shares more vocabulary with Ukrainian and Polish than Russian does. Reading Belarusian reveals these distinctive features clearly.',
      },
      {
        question: 'Is Belarusian hard to learn?',
        answer: 'Belarusian is FSI Category III (about 1100 hours). It has a case system, verb aspects, and Cyrillic script similar to Russian and Ukrainian. For speakers of either language, Belarusian is significantly easier. Its phonetic spelling rule ("write as you speak") makes reading straightforward once you know the sound system.',
      },
      {
        question: 'Why learn Belarusian?',
        answer: 'Belarusian carries deep cultural significance as a language of national identity and literary expression. Learning it supports preservation of a language with a rich folk tradition and modern literature. It also bridges Russian, Ukrainian, and Polish, deepening understanding of the East Slavic linguistic landscape.',
      },
    ],
  },

  ky: {
    code: 'ky',
    speakers: 4.5,
    family: 'Turkic',
    writingSystem: 'Cyrillic',
    fsiCategory: 'III',
    fsiHours: 1100,
    whyLearn: 'Kyrgyz provides access to the Epic of Manas (one of the world\'s longest oral epics), connects you to Central Asian nomadic culture, and opens doors to understanding the broader Turkic language family.',
    whatMakesUnique: 'Kyrgyz preserves a strong oral literary tradition centered on the Epic of Manas (500,000+ lines), uses strict vowel harmony with 14 vowel phonemes, and maintains a rich system of verbal suffixes that can express evidentiality and speaker attitude.',
    faq: [
      {
        question: 'Is Kyrgyz similar to Turkish or Kazakh?',
        answer: 'Kyrgyz is most closely related to Kazakh (both are Kipchak Turkic languages) with significant mutual intelligibility. It shares grammar structure with Turkish but different branch-specific vocabulary. Knowing any Turkic language provides a strong foundation. Reading Kyrgyz builds on shared Turkic grammar patterns.',
      },
      {
        question: 'What script does Kyrgyz use?',
        answer: 'Kyrgyz uses a modified Cyrillic alphabet with 36 letters, including special characters for Turkic vowels. Unlike Kazakh and Uzbek, Kyrgyzstan has not announced plans to switch to Latin script. Learning the Kyrgyz Cyrillic alphabet is straightforward if you know Russian Cyrillic.',
      },
      {
        question: 'Why learn Kyrgyz?',
        answer: 'Kyrgyzstan is a strategic Central Asian country with growing tourism, particularly adventure tourism in the Tien Shan mountains. The Epic of Manas is a UNESCO Masterpiece of Intangible Heritage. Kyrgyz knowledge opens doors to Central Asian diplomacy, development work, and understanding nomadic Turkic culture.',
      },
    ],
  },
};

export function getLanguageFact(code: string): LanguageFact | undefined {
  return languageFacts[code];
}
