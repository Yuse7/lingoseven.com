// Localized UI strings for the static screenshot mock screens (library / import).
// These render the in-app chrome in the UI (listing) language, like the real app
// — e.g. the en-ru pair shows the catalog in Russian.
//
// Used both server-side (English baseline) and in each mock's client script,
// which re-localizes from the URL `ui` param. Missing languages fall back to en.
// Book cover ids + page counts are language-independent; only title/author change.

export interface MockSection {
  title: string;
  sub: string; // optional sub-line (may be empty)
  ids: string[]; // cover ids, language-independent
}

export interface MockUi {
  libTitle: string;
  search: string;
  upload: string; // big "Upload your own book" CTA
  tabs: string[]; // 2 — Catalog / All books
  sections: MockSection[]; // horizontally-scrolling catalog shelves
  audio: string;
  pagesWord: string;
  nav: string[]; // 5
  impTitle: string;
  impDrop: string;
  impYou: string;
  impChoose: string;
  impFeats: string[]; // 3
  review: {
    title: string;
    due: string; // "{n} ..."
    prompt: string;
    again: string;
    good: string;
    easy: string;
    typesLabel: string; // "10+ exercise types"
    types: string[]; // exercise mode chips
    choosePrompt: string; // "Choose the translation" (word2 / multiple-choice)
  };
}

const MOCK_UI: Record<string, MockUi> = {
  en: {
    libTitle: 'Catalog',
    search: 'Search books',
    upload: 'Upload your own book',
    tabs: ['Catalog', 'All books'],
    sections: [
      { title: 'World bestsellers', sub: '⚡ short summaries with audio', ids: ['summary_5', 'summary_11', 'summary_12', 'summary_10', 'summary_8', 'summary_3'] },
      { title: 'Short stories', sub: '', ids: ['classic_2', 'classic_26', 'classic_3', 'classic_5', 'classic_7', 'classic_9'] },
      { title: 'Golden collection', sub: '\u{1F451} TOP-200', ids: ['classic_1', 'classic_4', 'classic_6', 'classic_8', 'classic_10', 'classic_12'] },
    ],
    audio: 'Audio',
    pagesWord: 'pages',
    nav: ['Library', 'Favorites', 'Read', 'My words', 'Collections'],
    impTitle: 'Add your book',
    impDrop: 'Drag & drop or browse',
    impYou: 'Your book',
    impChoose: 'Choose file',
    impFeats: [
      'Any format: EPUB, PDF, DOCX, TXT',
      'Parallel translation into 70+ languages',
      'Listen with word-by-word audio',
    ],
    review: {
      title: 'Word review',
      due: '{n} cards to review',
      prompt: 'Do you remember the translation?',
      again: 'Again',
      good: 'Good',
      easy: 'Easy',
      typesLabel: '10+ exercise types',
      types: ['Flashcards', 'Multiple choice', 'Typing', 'Listening', 'Word pairs', 'Sentences'],
      choosePrompt: 'Choose the translation',
    },
  },
  ru: {
    libTitle: 'Каталог',
    search: 'Поиск книг',
    upload: 'Загрузить свою книгу',
    tabs: ['Каталог', 'Все книги'],
    sections: [
      { title: 'Мировые бестселлеры', sub: '⚡ в кратком изложении с аудио', ids: ['summary_5', 'summary_11', 'summary_12', 'summary_10', 'summary_8', 'summary_3'] },
      { title: 'Короткие рассказы', sub: '', ids: ['classic_2', 'classic_26', 'classic_3', 'classic_5', 'classic_7', 'classic_9'] },
      { title: 'Золотой фонд', sub: '\u{1F451} ТОП-200', ids: ['classic_1', 'classic_4', 'classic_6', 'classic_8', 'classic_10', 'classic_12'] },
    ],
    audio: 'Аудио',
    pagesWord: 'стр.',
    nav: ['Библиотека', 'Избранное', 'Читать', 'Мои слова', 'Коллекции'],
    impTitle: 'Своя книга',
    impDrop: 'Перетащите или выберите файл',
    impYou: 'Ваша книга',
    impChoose: 'Выбрать файл',
    impFeats: [
      'Любой формат: EPUB, PDF, DOCX, TXT',
      'Параллельный перевод на 70+ языков',
      'Озвучка по словам при прослушивании',
    ],
    review: {
      title: 'Повторение слов',
      due: '{n} карточек на повторение',
      prompt: 'Помните перевод?',
      again: 'Снова',
      good: 'Помню',
      easy: 'Легко',
      typesLabel: '10+ видов упражнений',
      types: ['Карточки', 'Выбор ответа', 'Ввод слова', 'На слух', 'Пары слов', 'Предложения'],
      choosePrompt: 'Выберите перевод',
    },
  },
  uk: {
    libTitle: 'Каталог',
    search: 'Пошук книг',
    upload: 'Завантажте свою книгу',
    tabs: ['Каталог', 'Усі книги'],
    sections: [
      { title: 'Світові бестселери', sub: '⚡ у короткому викладі з аудіо', ids: ['summary_5', 'summary_11', 'summary_12', 'summary_10', 'summary_8', 'summary_3'] },
      { title: 'Короткі оповідання', sub: '', ids: ['classic_2', 'classic_26', 'classic_3', 'classic_5', 'classic_7', 'classic_9'] },
      { title: 'Золотий фонд', sub: '\u{1F451} ТОП-200', ids: ['classic_1', 'classic_4', 'classic_6', 'classic_8', 'classic_10', 'classic_12'] },
    ],
    audio: 'Аудіо',
    pagesWord: 'стор.',
    nav: ['Бібліотека', 'Обране', 'Читати', 'Мої слова', 'Колекції'],
    impTitle: 'Власна книга',
    impDrop: 'Перетягніть або виберіть файл',
    impYou: 'Ваша книга',
    impChoose: 'Вибрати файл',
    impFeats: [
      'Будь-який формат: EPUB, PDF, DOCX, TXT',
      'Паралельний переклад на 70+ мов',
      'Озвучення за словами під час прослуховування',
    ],
    review: {
      title: 'Повторення слів',
      due: '{n} карток на повторення',
      prompt: 'Пригадуєте переклад?',
      again: 'Знову',
      good: 'Знаю',
      easy: 'Легко',
      typesLabel: '10+ видів вправ',
      types: ['Картки', 'Вибір', 'Введення', 'На слух', 'Пари слів', 'Речення'],
      choosePrompt: 'Виберіть переклад',
    },
  },
  de: {
    libTitle: 'Katalog',
    search: 'Bücher suchen',
    upload: 'Eigenes Buch hochladen',
    tabs: ['Katalog', 'Alle Bücher'],
    sections: [
      { title: 'Weltbestseller', sub: '⚡ als Kurzfassung mit Audio', ids: ['summary_5', 'summary_11', 'summary_12', 'summary_10', 'summary_8', 'summary_3'] },
      { title: 'Kurzgeschichten', sub: '', ids: ['classic_2', 'classic_26', 'classic_3', 'classic_5', 'classic_7', 'classic_9'] },
      { title: 'Goldene Sammlung', sub: '\u{1F451} TOP-200', ids: ['classic_1', 'classic_4', 'classic_6', 'classic_8', 'classic_10', 'classic_12'] },
    ],
    audio: 'Audio',
    pagesWord: 'S.',
    nav: ['Bibliothek', 'Favoriten', 'Lesen', 'Meine Wörter', 'Sammlungen'],
    impTitle: 'Eigenes Buch',
    impDrop: 'Datei hierher ziehen oder auswählen',
    impYou: 'Ihr Buch',
    impChoose: 'Datei wählen',
    impFeats: [
      'Jedes Format: EPUB, PDF, DOCX, TXT',
      'Parallelübersetzung in über 70 Sprachen',
      'Wort-für-Wort-Audio beim Hören',
    ],
    review: {
      title: 'Wörter wiederholen',
      due: '{n} Karten zu wiederholen',
      prompt: 'Erinnern Sie sich an die Übersetzung?',
      again: 'Nochmal',
      good: 'Gewusst',
      easy: 'Leicht',
      typesLabel: '10+ Übungsarten',
      types: ['Karten', 'Auswahl', 'Eingabe', 'Hören', 'Wortpaare', 'Sätze'],
      choosePrompt: 'Wählen Sie die Übersetzung',
    },
  },
  es: {
    libTitle: 'Catálogo',
    search: 'Buscar libros',
    upload: 'Suba su propio libro',
    tabs: ['Catálogo', 'Todos los libros'],
    sections: [
      { title: 'Superventas mundiales', sub: '⚡ en resumen con audio', ids: ['summary_5', 'summary_11', 'summary_12', 'summary_10', 'summary_8', 'summary_3'] },
      { title: 'Relatos cortos', sub: '', ids: ['classic_2', 'classic_26', 'classic_3', 'classic_5', 'classic_7', 'classic_9'] },
      { title: 'Colección dorada', sub: '\u{1F451} TOP-200', ids: ['classic_1', 'classic_4', 'classic_6', 'classic_8', 'classic_10', 'classic_12'] },
    ],
    audio: 'Audio',
    pagesWord: 'pág.',
    nav: ['Biblioteca', 'Favoritos', 'Leer', 'Mis palabras', 'Colecciones'],
    impTitle: 'Su libro',
    impDrop: 'Arrastre o elija un archivo',
    impYou: 'Su libro',
    impChoose: 'Elegir archivo',
    impFeats: [
      'Cualquier formato: EPUB, PDF, DOCX, TXT',
      'Traducción paralela a más de 70 idiomas',
      'Audio palabra por palabra al escuchar',
    ],
    review: {
      title: 'Repaso de palabras',
      due: '{n} tarjetas por repasar',
      prompt: '¿Recuerda la traducción?',
      again: 'Otra vez',
      good: 'La sé',
      easy: 'Fácil',
      typesLabel: '10+ tipos de ejercicios',
      types: ['Tarjetas', 'Opciones', 'Escritura', 'De oído', 'Parejas', 'Frases'],
      choosePrompt: 'Elija la traducción',
    },
  },
  fr: {
    libTitle: 'Catalogue',
    search: 'Rechercher des livres',
    upload: 'Importez votre livre',
    tabs: ['Catalogue', 'Tous les livres'],
    sections: [
      { title: 'Best-sellers mondiaux', sub: '⚡ en version condensée avec audio', ids: ['summary_5', 'summary_11', 'summary_12', 'summary_10', 'summary_8', 'summary_3'] },
      { title: 'Nouvelles courtes', sub: '', ids: ['classic_2', 'classic_26', 'classic_3', 'classic_5', 'classic_7', 'classic_9'] },
      { title: 'Collection en or', sub: '\u{1F451} TOP 200', ids: ['classic_1', 'classic_4', 'classic_6', 'classic_8', 'classic_10', 'classic_12'] },
    ],
    audio: 'Audio',
    pagesWord: 'p.',
    nav: ['Bibliothèque', 'Favoris', 'Lire', 'Mes mots', 'Collections'],
    impTitle: 'Votre livre',
    impDrop: 'Glissez ou choisissez un fichier',
    impYou: 'Votre livre',
    impChoose: 'Choisir un fichier',
    impFeats: [
      'Tout format : EPUB, PDF, DOCX, TXT',
      'Traduction parallèle en plus de 70 langues',
      'Audio mot à mot à l’écoute',
    ],
    review: {
      title: 'Révision des mots',
      due: '{n} cartes à réviser',
      prompt: 'Vous souvenez-vous de la traduction ?',
      again: 'Encore',
      good: 'Je sais',
      easy: 'Facile',
      typesLabel: '10+ types d’exercices',
      types: ['Cartes', 'Choix', 'Saisie', 'À l’oreille', 'Paires', 'Phrases'],
      choosePrompt: 'Choisissez la traduction',
    },
  },
  pt: {
    libTitle: 'Catálogo',
    search: 'Procurar livros',
    upload: 'Carregue o seu livro',
    tabs: ['Catálogo', 'Todos os livros'],
    sections: [
      { title: 'Best-sellers mundiais', sub: '⚡ em resumo com áudio', ids: ['summary_5', 'summary_11', 'summary_12', 'summary_10', 'summary_8', 'summary_3'] },
      { title: 'Contos curtos', sub: '', ids: ['classic_2', 'classic_26', 'classic_3', 'classic_5', 'classic_7', 'classic_9'] },
      { title: 'Coleção de ouro', sub: '\u{1F451} TOP 200', ids: ['classic_1', 'classic_4', 'classic_6', 'classic_8', 'classic_10', 'classic_12'] },
    ],
    audio: 'Áudio',
    pagesWord: 'pág.',
    nav: ['Biblioteca', 'Favoritos', 'Ler', 'As minhas palavras', 'Coleções'],
    impTitle: 'O seu livro',
    impDrop: 'Arraste ou escolha um ficheiro',
    impYou: 'O seu livro',
    impChoose: 'Escolher ficheiro',
    impFeats: [
      'Qualquer formato: EPUB, PDF, DOCX, TXT',
      'Tradução paralela para mais de 70 idiomas',
      'Áudio palavra a palavra ao ouvir',
    ],
    review: {
      title: 'Revisão de palavras',
      due: '{n} cartões para rever',
      prompt: 'Lembra-se da tradução?',
      again: 'De novo',
      good: 'Eu sei',
      easy: 'Fácil',
      typesLabel: '10+ tipos de exercícios',
      types: ['Cartões', 'Escolha', 'Escrita', 'De ouvido', 'Pares', 'Frases'],
      choosePrompt: 'Escolha a tradução',
    },
  },
  it: {
    libTitle: 'Catalogo',
    search: 'Cerca libri',
    upload: 'Carichi il suo libro',
    tabs: ['Catalogo', 'Tutti i libri'],
    sections: [
      { title: 'Bestseller mondiali', sub: '⚡ in sintesi con audio', ids: ['summary_5', 'summary_11', 'summary_12', 'summary_10', 'summary_8', 'summary_3'] },
      { title: 'Racconti brevi', sub: '', ids: ['classic_2', 'classic_26', 'classic_3', 'classic_5', 'classic_7', 'classic_9'] },
      { title: 'Collezione d’oro', sub: '\u{1F451} TOP 200', ids: ['classic_1', 'classic_4', 'classic_6', 'classic_8', 'classic_10', 'classic_12'] },
    ],
    audio: 'Audio',
    pagesWord: 'pag.',
    nav: ['Biblioteca', 'Preferiti', 'Leggi', 'Le mie parole', 'Raccolte'],
    impTitle: 'Il suo libro',
    impDrop: 'Trascini o scelga un file',
    impYou: 'Il suo libro',
    impChoose: 'Scegli file',
    impFeats: [
      'Qualsiasi formato: EPUB, PDF, DOCX, TXT',
      'Traduzione parallela in oltre 70 lingue',
      'Audio parola per parola all’ascolto',
    ],
    review: {
      title: 'Ripasso delle parole',
      due: '{n} carte da ripassare',
      prompt: 'Ricorda la traduzione?',
      again: 'Ancora',
      good: 'La so',
      easy: 'Facile',
      typesLabel: '10+ tipi di esercizi',
      types: ['Carte', 'Scelta', 'Digitazione', 'All’ascolto', 'Coppie', 'Frasi'],
      choosePrompt: 'Scelga la traduzione',
    },
  },
  hr: {
    libTitle: 'Katalog',
    search: 'Pretraži knjige',
    upload: 'Učitajte vlastitu knjigu',
    tabs: ['Katalog', 'Sve knjige'],
    sections: [
      { title: 'Svjetski bestseleri', sub: '⚡ u sažetku s audiom', ids: ['summary_5', 'summary_11', 'summary_12', 'summary_10', 'summary_8', 'summary_3'] },
      { title: 'Kratke priče', sub: '', ids: ['classic_2', 'classic_26', 'classic_3', 'classic_5', 'classic_7', 'classic_9'] },
      { title: 'Zlatna zbirka', sub: '\u{1F451} TOP 200', ids: ['classic_1', 'classic_4', 'classic_6', 'classic_8', 'classic_10', 'classic_12'] },
    ],
    audio: 'Audio',
    pagesWord: 'str.',
    nav: ['Knjižnica', 'Favoriti', 'Čitaj', 'Moje riječi', 'Zbirke'],
    impTitle: 'Vlastita knjiga',
    impDrop: 'Povucite ili odaberite datoteku',
    impYou: 'Vaša knjiga',
    impChoose: 'Odaberi datoteku',
    impFeats: [
      'Bilo koji format: EPUB, PDF, DOCX, TXT',
      'Paralelni prijevod na više od 70 jezika',
      'Audio riječ po riječ tijekom slušanja',
    ],
    review: {
      title: 'Ponavljanje riječi',
      due: '{n} kartica za ponavljanje',
      prompt: 'Sjećate li se prijevoda?',
      again: 'Ponovno',
      good: 'Znam',
      easy: 'Lako',
      typesLabel: '10+ vrsta vježbi',
      types: ['Kartice', 'Izbor', 'Unos', 'Slušanje', 'Parovi', 'Rečenice'],
      choosePrompt: 'Odaberite prijevod',
    },
  },
};

export function mockUi(uiLang: string): MockUi {
  return MOCK_UI[uiLang] || MOCK_UI.en;
}

// Sample flashcard for the word-review slide. The word + example are in the
// target language; the translation is in the UI language. Seeded for the common
// pairs (en/de target × en/ru ui); falls back to the English sample / gloss.
interface ReviewWord { word: string; example: string }
const REVIEW_WORD: Record<string, ReviewWord> = {
  en: { word: 'scientist', example: 'He wrote this book not for scientists.' },
  de: { word: 'Wissenschaftler', example: 'Er schrieb dieses Buch nicht für Wissenschaftler.' },
};
const REVIEW_TRANS: Record<string, Record<string, string>> = {
  en: { ru: 'учёный', en: 'scientist', de: 'Wissenschaftler', uk: 'вчений', es: 'científico', fr: 'scientifique', pt: 'cientista', it: 'scienziato', hr: 'znanstvenik' },
  de: { ru: 'учёный', en: 'scientist', de: 'Wissenschaftler', uk: 'вчений', es: 'científico', fr: 'scientifique', pt: 'cientista', it: 'scienziato', hr: 'znanstvenik' },
};
const REVIEW_EX_TRANS: Record<string, Record<string, string>> = {
  en: { ru: 'Он написал эту книгу не для учёных.', en: 'He wrote this book not for scientists.', uk: 'Він написав цю книгу не для вчених.', es: 'No escribió este libro para científicos.', fr: 'Il n’a pas écrit ce livre pour les scientifiques.', pt: 'Não escreveu este livro para cientistas.', it: 'Non ha scritto questo libro per gli scienziati.', hr: 'Ovu knjigu nije napisao za znanstvenike.' },
  de: { ru: 'Он написал эту книгу не для учёных.', en: 'He wrote this book not for scientists.', uk: 'Він написав цю книгу не для вчених.', es: 'No escribió este libro para científicos.', fr: 'Il n’a pas écrit ce livre pour les scientifiques.', pt: 'Não escreveu este livro para cientistas.', it: 'Non ha scritto questo libro per gli scienziati.', hr: 'Ovu knjigu nije napisao za znanstvenike.' },
};

export interface ReviewCard {
  word: string;
  example: string;
  translation: string;
  exampleTrans: string;
  /** Illustration for the word ("choose image" exercise). May 404 for some
   *  words — the screen hides the image gracefully if it fails to load. */
  image: string;
}

/** Word illustration URL (same S3 bucket the app uses: word_images/<word>.webp).
 *  Keyed by the English headword so it resolves for any target language. */
function wordImageUrl(enWord: string): string {
  return `https://lingo7.s3.eu-central-1.amazonaws.com/word_images/${encodeURIComponent(enWord.toLowerCase())}.webp`;
}

// Wrong-answer options for the multiple-choice card (word2), in the UI language.
// Same plausible "professions" set as the seeded "scientist" word.
const CHOICE_DISTRACTORS: Record<string, string[]> = {
  en: ['writer', 'artist', 'doctor'],
  ru: ['писатель', 'художник', 'врач'],
  de: ['Schriftsteller', 'Künstler', 'Arzt'],
  uk: ['письменник', 'художник', 'лікар'],
  es: ['escritor', 'artista', 'médico'],
  fr: ['écrivain', 'artiste', 'médecin'],
  pt: ['escritor', 'artista', 'médico'],
  it: ['scrittore', 'artista', 'medico'],
  hr: ['pisac', 'umjetnik', 'liječnik'],
};

export interface ChoiceOption {
  text: string;
  correct: boolean;
}
export interface ChoiceCard {
  word: string;
  prompt: string;
  options: ChoiceOption[];
}

/** Sample multiple-choice card (word2): the prompt word is in the target
 *  language, the options are translations in the UI language. The correct
 *  option sits at index 1; the rest are plausible distractors. */
export function reviewChoice(targetLang: string, uiLang: string): ChoiceCard {
  const w = REVIEW_WORD[targetLang] || REVIEW_WORD.en;
  const trSet = REVIEW_TRANS[targetLang] || REVIEW_TRANS.en;
  const correct = trSet[uiLang] || trSet.en;
  const dist = CHOICE_DISTRACTORS[uiLang] || CHOICE_DISTRACTORS.en;
  return {
    word: w.word,
    prompt: mockUi(uiLang).review.choosePrompt,
    options: [
      { text: dist[0], correct: false },
      { text: correct, correct: true },
      { text: dist[1], correct: false },
      { text: dist[2], correct: false },
    ],
  };
}

export function reviewCard(targetLang: string, uiLang: string): ReviewCard {
  const w = REVIEW_WORD[targetLang] || REVIEW_WORD.en;
  const trSet = REVIEW_TRANS[targetLang] || REVIEW_TRANS.en;
  const exSet = REVIEW_EX_TRANS[targetLang] || REVIEW_EX_TRANS.en;
  // Images are stored under the English headword; REVIEW_TRANS[..].en gives it.
  const enWord = (REVIEW_TRANS[targetLang] || REVIEW_TRANS.en).en;
  return {
    word: w.word,
    example: w.example,
    translation: trSet[uiLang] || trSet.en,
    exampleTrans: exSet[uiLang] || exSet.en,
    image: wordImageUrl(enWord),
  };
}
