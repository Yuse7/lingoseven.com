// Per-language vocabulary notes for the vocabulary-size-estimator pages. Two parts:
//  - `blurb`: a short, hand-written, vocabulary-focused paragraph (cognates with
//    English, false friends, morphology), unique per language so the pages are
//    not near-duplicates of each other.
//  - `coverage`: real frequency coverage computed from the same source as the test
//    (hermitdave/FrequencyWords OpenSubtitles 2018, or the Leipzig Corpora Collection
//    for languages absent from FrequencyWords): the % of running text covered by the
//    N most common word forms. Lower numbers for inflected/agglutinative languages
//    (ru, tr, and most of the Turkic, Kartvelian and Bantu additions) are expected,
//    because one root spreads across many forms.

export interface VocabFact {
  blurb: string;
  coverage: { top1000: number; top2000: number; top5000: number };
}

export const vocabFacts: Record<string, VocabFact> = {
  es: {
    blurb:
      'Spanish shares thousands of Latin-rooted cognates with English, nación/nation, familia/family, so an English speaker starts with a sizeable passive vocabulary. The catch is false friends like embarazada (pregnant, not embarrassed) and éxito (success, not exit). Spelling maps closely to sound, so a word you have read is a word you can say.',
    coverage: { top1000: 77, top2000: 83, top5000: 89 },
  },
  fr: {
    blurb:
      'After 1066, French handed English roughly a quarter of its vocabulary, so French reading is full of familiar words, gouvernement, possible, nation. False friends still trip learners up: librairie is a bookshop, not a library, and actuellement means currently. Silent letters mean the written word often hides how it sounds.',
    coverage: { top1000: 81, top2000: 86, top5000: 92 },
  },
  de: {
    blurb:
      'German and English are Germanic cousins, so the core vocabulary rhymes: Haus/house, Wasser/water, gut/good. German’s famous compound nouns (Handschuh, literally hand-shoe, means glove) let many long words decode from smaller pieces you already know. The main extra load is learning each noun’s gender along with the word.',
    coverage: { top1000: 80, top2000: 85, top5000: 91 },
  },
  it: {
    blurb:
      'Italian wears its Latin roots openly, with cognates an English reader recognises on sight, possibile, nazione, famiglia. Spelling is almost perfectly phonetic, so a word read is a word you can pronounce. Watch false friends such as camera (room) and parente (relative, not parent).',
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
      'Russian shares few obvious cognates with English, so most words are genuinely new, though international loanwords (телефон, компьютер) give occasional footholds, and Cyrillic is quickly learned. The real work is inflection: one root appears in many case and verb-aspect forms, which is why a fixed number of words covers less running text than in English.',
    coverage: { top1000: 70, top2000: 77, top5000: 85 },
  },
  nl: {
    blurb:
      'Dutch sits between English and German, and it shows in the vocabulary: water, boek, huis, drinken. English speakers often recognise Dutch words on the page before ever studying them. Like German, Dutch builds compounds, so longer words frequently break down into parts you already know.',
    coverage: { top1000: 83, top2000: 88, top5000: 93 },
  },
  sv: {
    blurb:
      'Swedish is a Germanic language with a generous share of English cognates, hus, vatten, bok, fisk, and a refreshingly simple grammar. English and Swedish also share many modern loanwords. Compounds are common, so vocabulary often grows by combining familiar roots rather than memorising wholly new words.',
    coverage: { top1000: 81, top2000: 86, top5000: 92 },
  },
  tr: {
    blurb:
      'Turkish is agglutinative: suffixes stack onto a root to build meanings that English needs whole phrases for, so a single word can carry a sentence. That also means one root appears in dozens of forms, which is why a given number of distinct words covers less text than in English. Cognates with English are rare, but loanwords from French and Arabic (otobüs, telefon) offer a few footholds.',
    coverage: { top1000: 62, top2000: 70, top5000: 80 },
  },
  no: {
    blurb:
      "Norwegian and English are both Germanic languages, so learners meet many transparent cognates and shared loanwords such as hus (house), bok (book), and sommer (summer), alongside everyday English borrowings. A defining feature of Norwegian morphology is the suffixed definite article, where the marker attaches to the end of the noun (en bok becomes boka, the book), and adjectives and the three genders agree with the noun. Beware false friends: the common adverb gift can mean both married and poison depending on context, so surface similarity to English is not always a safe guide.",
    coverage: { top1000: 82, top2000: 87, top5000: 92 },
  },
  da: {
    blurb:
      "Danish shares a large core vocabulary with English through their common Germanic roots, so learners will recognize many cognates such as 'hus' (house), 'arm', 'finger', and 'land', alongside numerous Latin and French loanwords. A notable feature is that nouns carry their definite article as a suffix rather than a separate word, so 'a book' is 'en bog' but 'the book' is 'bogen', and compound nouns are written as single long words. Watch for false friends: the Danish word 'gift' means both 'married' and 'poison', and 'tid' means 'time' rather than 'tide'.",
    coverage: { top1000: 82, top2000: 87, top5000: 92 },
  },
  ro: {
    blurb:
      "Romanian is a Romance language whose core vocabulary descends from Latin, so English speakers will spot many shared Latinate cognates such as 'important', 'universitate', and 'restaurant'. Unlike its sister languages, Romanian also absorbed a significant layer of Slavic loanwords, including everyday words like 'prieten' (friend) and 'iubi' (to love). Watch for false friends: 'magazin' means a shop or store, not a magazine, and 'prost' means stupid or foolish.",
    coverage: { top1000: 75, top2000: 81, top5000: 88 },
  },
  uk: {
    blurb:
      "Ukrainian is an East Slavic language, closely related to Belarusian and Russian and more distantly to Polish and other West Slavic tongues, with which it shares many cognates and the letters і, ї, є, and ґ that set its alphabet apart. Its vocabulary blends inherited Slavic roots with loanwords from Polish, German, Turkic languages, and, more recently, English. Like other Slavic languages, it is highly inflected: nouns and adjectives decline across seven cases and three genders, and verbs are marked for aspect, so learners must track endings rather than rely on word order.",
    coverage: { top1000: 66, top2000: 73, top5000: 81 },
  },
  pl: {
    blurb:
      "Polish vocabulary is built largely on a West Slavic core shared with Czech and Slovak, layered with Latin loanwords that arrived through the Church and scholarship (for example szkoła from Latin schola) and many German borrowings absorbed during centuries of trade (such as handel and ratusz). Learners must contend with rich inflection: nouns take seven cases and verbs distinguish perfective and imperfective aspect, so a single dictionary word appears in many forms. Watch for false friends like sympatyczny, which means 'likeable' or 'nice' rather than 'sympathetic'.",
    coverage: { top1000: 68, top2000: 75, top5000: 83 },
  },
  cs: {
    blurb:
      "Most Czech vocabulary descends from common Slavic roots, so a learner who knows another Slavic language will recognize many core words, though pronunciation and the famous letter ř are distinctively Czech. Centuries of contact with German and Latin left numerous loanwords, especially for everyday objects and technical concepts. Czech is heavily inflected, with nouns and adjectives declining across seven cases and verbs marking aspect, and learners should watch for false friends such as 'host', which means 'guest' rather than the English sense.",
    coverage: { top1000: 71, top2000: 77, top5000: 85 },
  },
  sk: {
    blurb:
      "Slovak is a West Slavic language, so much of its core vocabulary shares roots with Czech, Polish, and other Slavic tongues, and Slovak and Czech speakers can largely understand each other. Centuries of contact left many loanwords from German, Hungarian, and Latin in everyday speech. Learners should watch for false friends across Slavic languages: the Slovak word čerstvý means fresh, while its Russian cognate means stale.",
    coverage: { top1000: 72, top2000: 78, top5000: 86 },
  },
  hr: {
    blurb:
      "Croatian is a South Slavic language whose core vocabulary shares roots with neighbors like Serbian, Slovenian, and Bosnian, while centuries of contact left loanwords from German, Italian, Turkish, and Latin, and increasingly English. Learners must master a rich inflectional system, with seven cases and three genders that reshape nouns, adjectives, and pronouns, plus verbal aspect pairs. Watch for false friends such as vrijedan, which means diligent or valuable.",
    coverage: { top1000: 72, top2000: 78, top5000: 86 },
  },
  bs: {
    blurb:
      "Bosnian is a South Slavic language whose core vocabulary closely overlaps with Croatian and Serbian, so a learner who knows one gains a strong head start in the others. What most distinguishes it is the large layer of Turkish and Arabic loanwords absorbed during Ottoman rule, such as komšija (neighbor), čaršija (the old market quarter), and sahat (hour/clock). Beware false friends: vatra means fire, not water.",
    coverage: { top1000: 72, top2000: 78, top5000: 85 },
  },
  bg: {
    blurb:
      "Bulgarian is a South Slavic language, so much of its core vocabulary is shared with Russian, Serbian, and other Slavic tongues, which gives learners a helpful base of recognizable roots. Unusually for a Slavic language, Bulgarian has lost the noun case system, relying instead on prepositions and a postposed definite article, while keeping an exceptionally rich verb system with many tenses. Centuries of contact have layered in numerous Turkish, Greek, and later Russian loanwords.",
    coverage: { top1000: 74, top2000: 80, top5000: 87 },
  },
  mk: {
    blurb:
      "Macedonian is a South Slavic language, so its core vocabulary shares roots with neighboring Slavic languages and is especially close to Bulgarian, with which it is mutually intelligible to a large degree. Learners will also encounter many loanwords from Turkish and Greek, reflecting centuries of contact in the Balkans, alongside the inherited Slavic word stock. Recognizing these shared roots and borrowings can make it easier to build vocabulary and read everyday texts.",
    coverage: { top1000: 75, top2000: 81, top5000: 88 },
  },
  sl: {
    blurb:
      "Slovenian is a South Slavic language, so its core vocabulary shares roots with Croatian, Serbian, and other Slavic tongues, which helps learners who already know one Slavic language. One of its most distinctive features is the dual number, a grammatical form for exactly two people or things that has largely disappeared from other modern Slavic languages. Centuries of contact also left many loanwords, with German borrowings common in everyday speech and Italian influence noticeable in the west.",
    coverage: { top1000: 72, top2000: 79, top5000: 86 },
  },
  lv: {
    blurb:
      "Latvian is a Baltic language and, alongside Lithuanian, preserves features of one of the most archaic surviving branches of the Indo-European family, which makes its roots valuable for learners interested in older word forms. Over the centuries it absorbed many loanwords from Middle Low German and from neighbouring Slavic languages, layered over the native Baltic core. Learners should expect rich inflection: nouns shift through several cases and verbs change endings for person and tense, so the same root often appears in many forms.",
    coverage: { top1000: 67, top2000: 73, top5000: 82 },
  },
  lt: {
    blurb:
      "Lithuanian is a Baltic language famed for its conservatism, preserving many archaic features of Proto-Indo-European that have been lost in most other living languages, which is why learners often encounter words closely resembling ancient Sanskrit, Latin, or Greek forms. Its vocabulary is heavily inflected, with nouns declining for seven cases and verbs marking person, number, and tense, so a single root can surface in many shapes. Alongside its inherited Baltic core, the lexicon also includes older loanwords from Slavic and Germanic neighbors.",
    coverage: { top1000: 66, top2000: 72, top5000: 81 },
  },
  fi: {
    blurb:
      "Finnish is a Finno-Ugric language, not Indo-European, so learners coming from English will find very few familiar cognates and must memorize most vocabulary from scratch. It is highly agglutinative, building words by stacking suffixes and using many grammatical cases, so a single noun can take dozens of inflected forms. One helpful bridge is the large layer of Swedish loanwords absorbed over centuries of shared history, which supply some of the more recognizable words.",
    coverage: { top1000: 65, top2000: 73, top5000: 82 },
  },
  hu: {
    blurb:
      "Hungarian belongs to the Finno-Ugric branch of the Uralic family, not the Indo-European family, so it shares very few cognates with English and most everyday words must be learned from scratch. It is highly agglutinative: grammatical relationships are expressed by stacking suffixes onto word stems, and the language uses many cases and possessive endings rather than separate prepositions. Over the centuries it has also absorbed loanwords from German, Slavic languages, and Turkic, though these remain a minority within a largely distinctive native vocabulary.",
    coverage: { top1000: 69, top2000: 76, top5000: 84 },
  },
  et: {
    blurb:
      "Estonian is a Finno-Ugric language, closely related to Finnish rather than to the Indo-European languages, so learners will find very few cognates with English to lean on. It has an extensive case system, with grammatical endings marking relationships that English expresses through prepositions and word order. Centuries of contact left a substantial layer of German loanwords in the everyday vocabulary, which can offer occasional footholds for speakers familiar with Germanic languages.",
    coverage: { top1000: 73, top2000: 80, top5000: 87 },
  },
  el: {
    blurb:
      "Greek vocabulary is uniquely rewarding for learners because Greek roots underlie a large share of English scientific and academic terms, so words like analysis, telephone, biology, and democracy reveal recognisable cognates once you learn the Greek originals. The language is written in its own alphabet and is richly inflected, with nouns, adjectives, and articles changing form for gender, number, and case, and verbs marked for person, tense, voice, and aspect. Mastering these inflectional patterns and the alphabet early gives learners the tools to decode both everyday Modern Greek and the classical roots embedded throughout English.",
    coverage: { top1000: 75, top2000: 81, top5000: 88 },
  },
  id: {
    blurb:
      "Indonesian is an Austronesian language written in the Latin alphabet, which makes its spelling approachable for learners since words are read largely as they are written. Verbs are not conjugated and there is no grammatical tense; instead, time is shown through context and adverbs, while meaning is built up through a rich system of prefixes, suffixes, and circumfixes attached to root words. Its vocabulary also reflects centuries of contact, incorporating loanwords from Sanskrit, Arabic, Dutch, and English alongside the native Malay base.",
    coverage: { top1000: 77, top2000: 84, top5000: 91 },
  },
  ms: {
    blurb:
      "Malay is an Austronesian language written in the Latin alphabet, and it is so close to Indonesian that the two are largely mutually intelligible. Verbs are not conjugated and there is no grammatical tense; meaning is instead built through a productive system of prefixes and suffixes attached to root words. Its vocabulary layers Arabic, Sanskrit, Portuguese, and English loanwords over a native Malay core.",
    coverage: { top1000: 79, top2000: 85, top5000: 92 },
  },
  is: {
    blurb:
      "Icelandic is a North Germanic language famous for its conservatism, having changed little since the medieval sagas, so learners often prefer native coinings (like tölva for computer) over international loanwords. It still uses the old letters þ (thorn) and ð (eth), representing the unvoiced and voiced th sounds. Its grammar is heavily inflected, with nouns, adjectives, and pronouns changing form across four cases, two numbers, and three grammatical genders.",
    coverage: { top1000: 76, top2000: 82, top5000: 89 },
  },
  ca: {
    blurb:
      "Catalan is a Romance language spoken in Catalonia, Valencia, and the Balearic Islands, sitting linguistically between Spanish and French, so learners of either will recognise many Latin-rooted cognates. It has its own distinct everyday vocabulary, however (noi and noia for boy and girl, mica for a little bit), and spelling features such as the middle dot in l·l. Watch for false friends like embarassada, which means pregnant, not embarrassed.",
    coverage: { top1000: 79, top2000: 85, top5000: 91 },
  },
  gl: {
    blurb:
      "Galician is a Romance language spoken in northwest Spain, in the region of Galicia, and is very closely related to Portuguese, with which it shares a common medieval origin. Much of its vocabulary descends directly from Latin, so learners will recognize many cognates with Spanish, Portuguese, and other Romance languages. Distinctive Galician spellings such as the letters ñ and x, along with words like ledicia (joy) or enseada (cove), help set it apart from its neighbors.",
    coverage: { top1000: 72, top2000: 79, top5000: 87 },
  },
  sq: {
    blurb:
      "Albanian forms its own isolated branch of Indo-European, so learners encounter few obvious cognates with widely studied languages such as English, French, or German, and most of its core vocabulary must be learned from scratch. Over its long history the language absorbed substantial layers of loanwords from Latin, Turkish, Greek, and Slavic, and these borrowings still surface throughout everyday speech. Spotting such borrowed layers can offer learners occasional footholds, even though the native Albanian core remains highly distinctive.",
    coverage: { top1000: 77, top2000: 83, top5000: 89 },
  },
  eu: {
    blurb:
      "Basque (Euskara) is a language isolate, meaning it has no proven relationship to any other language in the world, so learners will find almost no cognates with English or the Romance languages and must memorize most vocabulary from scratch. It is highly agglutinative, building words by stacking suffixes, and it marks grammatical relationships through many noun cases rather than prepositions. Over its long history Basque has absorbed numerous loanwords from Latin and Spanish, which provide some of the few recognizable forms a beginner will encounter.",
    coverage: { top1000: 69, top2000: 77, top5000: 86 },
  },
  sr: {
    blurb:
      "Serbian is a South Slavic language, mutually intelligible with Croatian, Bosnian, and Montenegrin, so learning one opens the others. It is unusual in being fully digraphic, written in both the Cyrillic and Latin alphabets, with a strict one-letter-per-sound spelling. Centuries of Ottoman and Austro-Hungarian contact left many Turkish and German loanwords alongside the inherited Slavic core.",
    coverage: { top1000: 71, top2000: 78, top5000: 85 },
  },
  af: {
    blurb:
      "Afrikaans grew out of Dutch, so its Germanic core lines up neatly with English: water, hand, boek (book), vis (fish), warm, huis (house). Its grammar is strikingly regular, with no noun gender, no case endings, and one unchanging verb form for every subject (ek is, jy is, hy is), so a single root turns up in far fewer shapes than in German or Russian. That regularity is offset by heavy compounding, where words like jaarverslag (annual report) and selfverdediging (self-defence) are assembled from smaller pieces, which spreads running text across many long one-off forms and keeps top-list coverage moderate. Watch a few false friends: kind is a child, bad is a bath, and rok is a dress or skirt.",
    coverage: { top1000: 68, top2000: 75, top5000: 84 },
  },
  az: {
    blurb:
      "Azerbaijani is a Turkic language written in a Latin alphabet since 1991, so the script is familiar to English readers apart from the extra letters ə, ç, ğ, ı, ö, ş, and ü. Plenty of international vocabulary lines up with English once you read past the spelling, since words like universitet (university), problem, konsert (concert), format, risk, and diplomatiya arrived through Russian or French. Watch for short false friends where the letters match but the meaning does not: il means year, at means horse, son means last or end, and bal means honey. The grammar is agglutinative with vowel harmony, so a single root spawns dozens of case, possessive, and tense forms, which spreads the counts thin and holds top-1000 coverage below what you see in languages that inflect less.",
    coverage: { top1000: 49, top2000: 59, top5000: 72 },
  },
  be: {
    blurb:
      "Belarusian shares a broad layer of Greek and Latin internationalisms with English, so an English reader can already decode праблема (problem), бюджэт (budget), офіс (office) and дылема (dilemma). Outright false friends are rare, though магазін is a shop rather than a magazine, and дыван means a carpet, not a divan. Because the grammar is heavily inflected, with six cases plus gender and verb aspect, one dictionary word surfaces as many different forms, which is why the thousand most common forms still cover under half of running text. Belarusian is also written in two orthographies, so a common word like сёння 'today' also appears spelled сёньня.",
    coverage: { top1000: 45, top2000: 55, top5000: 67 },
  },
  hy: {
    blurb:
      "Armenian sits on its own branch of Indo-European, so almost none of its everyday words resemble English; the shared vocabulary you can recognize is mostly modern international borrowings written in Armenian letters, like տեխնոլոգիա (technology), ինֆեկցիա (infection), բալետ (ballet), and դոլար (dollar). These loanwords keep their meanings and often reached Armenian through Russian, so they are dependable rather than false friends, but the core of the language has to be learned from the ground up. Grammar multiplies the word count: nouns take seven cases across singular and plural and verbs spread over many endings, so one dictionary word surfaces as many separate forms (գնել, գնում, գնաց). That inflection is why the most frequent 1000 words cover a smaller share of running text than they would in English, and why the count keeps climbing well past the beginner core.",
    coverage: { top1000: 44, top2000: 53, top5000: 65 },
  },
  ka: {
    blurb:
      "Georgian belongs to the Kartvelian family and uses its own Mkhedruli alphabet, so it shares no script and almost no inherited vocabulary with English, and true cognates are rare. The words an English speaker can recognize are modern internationalisms borrowed mostly through Russian, such as პრობლემა (problema, problem), სისტემა (sistema, system) and უნივერსიტეტი (universiteti, university), though shifted spelling and stress make them easy to miss. The language is heavily inflected, with seven noun cases and verbs that agree with both subject and object, so a single root surfaces in many forms and frequency is spread thinly across them. That thin spread is why the top 1000 words here cover only about 38 percent of running text, lower than in languages that inflect less.",
    coverage: { top1000: 38, top2000: 48, top5000: 60 },
  },
  kk: {
    blurb:
      "Kazakh is a Turkic language written in Cyrillic here, so an English speaker starts by learning a new alphabet before any word looks familiar. Shared vocabulary is thin and mostly arrives through Russian: international terms like университет, музыка, and театр are recognizable, while сағат (clock, hour) and кітап (book) come from Arabic rather than English. The bigger hurdle is agglutination, because one root such as кітап stacks endings for plural, possession, and case (кітаптарымыздың), so each written form is comparatively rare and coverage climbs slowly. That morphology, plus vowel harmony that reshapes every suffix, is why the top 1000 forms cover less text here than in a language like English.",
    coverage: { top1000: 44, top2000: 53, top5000: 65 },
  },
  ky: {
    blurb:
      "Kyrgyz is a Turkic language written in Cyrillic, so an English speaker begins with almost no free cognates and also has to learn a new alphabet plus three extra vowel letters (ң, ө, ү). The most transparent shared vocabulary arrives through Russian: internationalisms like партия (party), миллион (million), and интернет keep their familiar meanings, but they sit next to older Arabic and Persian loans such as пайыз (percent) and арыз (petition) that give an English reader no clue. A couple of false friends trip people up: бар is not a drinking spot but means there is or the command go, and ким means who, not the name Kim. Kyrgyz is strongly agglutinative with tight vowel harmony, so a single root takes long suffix chains for case, possession, number, and tense, and the coverage numbers stay moderate because each inflected form counts as its own token, spreading frequency across many endings instead of piling it onto a few base words.",
    coverage: { top1000: 51, top2000: 61, top5000: 73 },
  },
  mn: {
    blurb:
      "Mongolian gives an English speaker very few free cognates. Most modern loanwords arrived through Russian rather than English (доллар for dollar, банк, компьютер, телевиз), and native roots look nothing like their English equivalents. The language is agglutinative with strict vowel harmony, so one root shows up in many suffixed forms for case, number, and possession, which spreads frequency across many surface words and keeps rank-based coverage lower than in English. It is written in Cyrillic, adding two vowels, ө and ү, that Russian does not use.",
    coverage: { top1000: 50, top2000: 60, top5000: 73 },
  },
  sw: {
    blurb:
      "Swahili is written in the Latin alphabet and spelled the way it sounds, so an English reader can pronounce a new word on sight. Centuries of contact left a layer of Arabic vocabulary (kitabu for book, hesabu for arithmetic) and a newer layer borrowed from English that is easy to spot: benki (bank), baiskeli (bicycle), polisi (police), kompyuta (computer). The word safari is a false friend, in Swahili it means any journey, not a wildlife tour. Most of the grammar lives in prefixes: nouns carry class markers (m-/wa-, ki-/vi-) and a verb stacks subject, tense, and object onto the root (ninakupenda means I love you), so one root spreads across dozens of forms and a fixed word count covers less running text than it would in English.",
    coverage: { top1000: 62, top2000: 71, top5000: 80 },
  },
  tl: {
    blurb:
      "Tagalog gives an English reader an unusual head start, because centuries of Spanish contact left thousands of borrowings (kwento 'story', pader 'wall', mesa 'table'), and a modern English layer surfaces as Taglish, where speakers switch between the two languages in the same sentence. A few false friends still catch people out: libre means free of charge rather than a library, baso is a drinking glass (from Spanish vaso, not a base), and bata means a child. The main hurdle is morphology, since verbs build meaning through prefixes, infixes, and reduplication, so the root kain 'eat' turns into kumain (ate), kinain (eaten), and kakain (will eat). That scatters one word across many forms, though a handful of very frequent particles like ang, ng, and sa keep the top 1000 forms covering roughly three fifths of running text.",
    coverage: { top1000: 59, top2000: 67, top5000: 77 },
  },
  uz: {
    blurb:
      "Uzbek is a Turkic language written today in a Latin alphabet, and for an English reader most of its everyday words are genuinely new, since the Turkic core (suv water, til language, bilan with) shares almost no cognates with English. The footholds are international loanwords that arrived through Russian, so gazeta (newspaper), aeroport, and impressionizm are recognisable, and Arabic and Persian religious or cultural terms add another familiar layer. Uzbek is agglutinative: one root takes stacked suffixes for case, possession, and tense (maktab a school, maktabda in a school, maktabimizda in our school), so a fixed count of word forms covers less running text than in English, which keeps the coverage figures low. Note the letters oʻ and gʻ (as in boʻlgan and togʻ), written with a turned comma, mark distinct vowels and a consonant rather than punctuation.",
    coverage: { top1000: 45, top2000: 55, top5000: 67 },
  },
  vi: {
    blurb:
      "Vietnamese uses the Latin alphabet, so the letters look familiar, but their values differ (d sounds like English z or y, đ is the English d, and ph is f), which trips up reading more than the vocabulary does. Cognates with English are few and recent, mostly food and tech loans that often arrived through French, such as cà phê (coffee), bia (beer), ga (station, from gare), and ti vi (TV). Words that resemble English ones are usually unrelated: tin means news or to trust, con means child or acts as a classifier for animals, and ban means a committee. Because the language is isolating, words never inflect (no plurals, tenses, or conjugation) and each one is a single syllable, so a small set of frequent forms covers most text, with the top 1000 cleaned words accounting for about 90 percent here.",
    coverage: { top1000: 90, top2000: 96, top5000: 99 },
  },
  zu: {
    blurb:
      "Zulu (isiZulu) uses the Latin alphabet, so the letters look familiar, but almost none of the core vocabulary is cognate with English. The clearest overlap is a layer of reshaped loanwords that take a class prefix and open syllables, such as imoto (car), isikole (school), ibhange (bank), and amaphoyisa (police); once you strip the prefix and the extra vowels, the source word shows through. Watch a few false friends that are pure coincidence: into means thing, lapho means there, and yena means he or she. Zulu is strongly agglutinative, with noun classes and stacked subject, tense, and object markers, so one root yields dozens of written forms, which is why the most common 1000 words cover only about 39 percent of ordinary text, much lower than the same count would reach in English.",
    coverage: { top1000: 39, top2000: 47, top5000: 58 },
  },
};
