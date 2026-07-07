// Store screenshot slides + localized captions.
//
// Used by src/pages/shot.astro to render store-listing screenshots from the
// real in-app demo widgets (reader / audio) and styled mock screens
// (brand / library / import). Captions are keyed by the UI (listing) language so
// the marketing headline is in the user's own language. A caption may be
// overridden per request via ?caption=&sub= query params.
//
// Adding a language: extend CAPTIONS below. Missing languages fall back to `en`.
// {target} in a caption is replaced with the target language name in the UI
// language (e.g. ru + de -> "немецкий"). Avoid putting {target} in
// grammatically inflected slots; the per-request override covers bespoke wording.

import { languageNames } from './languageNames';

export type WidgetId = 'reader' | 'audio' | 'brand' | 'library' | 'import' | 'word1' | 'word2';

export interface SlideDef {
  /** slug used in the output filename */
  id: string;
  /** which screen to render */
  widget: WidgetId;
}

/** The default set of slides generated per language pair, in store order. */
export const SLIDES: SlideDef[] = [
  { id: 'reader', widget: 'reader' },
  { id: 'audio', widget: 'audio' },
  { id: 'brand', widget: 'brand' },
  { id: 'library', widget: 'library' },
  { id: 'import', widget: 'import' },
  { id: 'word1', widget: 'word1' },
  { id: 'word2', widget: 'word2' },
];

export interface Caption {
  title: string;
  sub?: string;
}

type CaptionSet = Record<string /* slide id */, Caption>;

export const CAPTIONS: Record<string /* uiLang */, CaptionSet> = {
  en: {
    reader: { title: 'Parallel reading', sub: 'Tap a word to highlight its translation' },
    audio: { title: 'Listen and read', sub: 'Words highlight as they are spoken' },
    brand: { title: '49 languages to learn', sub: 'English, Spanish, German, French, Italian, Portuguese, Turkish, Polish, Dutch, Swedish and more' },
    library: { title: 'A whole library to read', sub: 'Bestsellers, classics, short stories and more' },
    import: { title: 'Upload your own book', sub: 'EPUB, PDF or DOCX: read anything with translation' },
    word1: { title: '10+ ways to review', sub: 'Cards with pictures, audio, multiple choice and typing' },
    word2: { title: 'Spaced repetition', sub: 'Words come back right before you forget them' },
  },
  ru: {
    reader: { title: 'Параллельное чтение', sub: 'Нажатие на слово подсвечивает перевод' },
    audio: { title: 'Аудио от носителя', sub: 'Каждое слово подсвечивается синхронно с озвучкой' },
    brand: { title: '49 языков для изучения', sub: 'Английский, испанский, немецкий, французский, итальянский, португальский, турецкий, польский, нидерландский, шведский и другие' },
    library: { title: 'Целая библиотека для чтения', sub: 'Бестселлеры, классика, рассказы и не только' },
    import: { title: 'Загрузите свою книгу', sub: 'EPUB, PDF или DOCX: читайте что угодно с переводом' },
    word1: { title: 'Более 10 видов упражнений', sub: 'Карточки с картинками, аудио, выбором и вводом слов' },
    word2: { title: 'Интервальное повторение слов', sub: 'Слова возвращаются точно перед тем, как забудутся' },
  },
  uk: {
    reader: { title: 'Паралельне читання', sub: 'Дотик до слова підсвічує переклад' },
    audio: { title: 'Аудіо від носія', sub: 'Кожне слово підсвічується синхронно з озвученням' },
    brand: { title: '49 мов для вивчення', sub: 'Англійська, іспанська, німецька, французька, італійська, португальська, турецька, польська, нідерландська, шведська та інші' },
    library: { title: 'Ціла бібліотека для читання', sub: 'Бестселери, класика, оповідання та інше' },
    import: { title: 'Завантажте свою книгу', sub: 'EPUB, PDF або DOCX: читайте будь-що з перекладом' },
    word1: { title: 'Понад 10 видів вправ', sub: 'Картки з картинками, аудіо, вибором та введенням слів' },
    word2: { title: 'Інтервальне повторення слів', sub: 'Слова повертаються саме перед тим, як забудуться' },
  },
  de: {
    reader: { title: 'Paralleles Lesen', sub: 'Tippen Sie ein Wort an, um die Übersetzung zu sehen' },
    audio: { title: 'Audio von Muttersprachlern', sub: 'Jedes Wort wird synchron zur Vertonung hervorgehoben' },
    brand: { title: '49 Sprachen zum Lernen', sub: 'Englisch, Spanisch, Deutsch, Französisch, Italienisch, Portugiesisch, Türkisch, Polnisch, Niederländisch, Schwedisch und mehr' },
    library: { title: 'Eine ganze Bibliothek zum Lesen', sub: 'Bestseller, Klassiker, Kurzgeschichten und mehr' },
    import: { title: 'Laden Sie Ihr eigenes Buch hoch', sub: 'EPUB, PDF oder DOCX: alles mit Übersetzung lesen' },
    word1: { title: 'Mehr als 10 Übungsarten', sub: 'Karten mit Bildern, Audio, Auswahl und Worteingabe' },
    word2: { title: 'Verteiltes Wiederholen', sub: 'Wörter kehren genau dann zurück, bevor Sie sie vergessen' },
  },
  es: {
    reader: { title: 'Lectura paralela', sub: 'Toque una palabra para ver su traducción' },
    audio: { title: 'Audio de hablantes nativos', sub: 'Cada palabra se resalta en sincronía con la voz' },
    brand: { title: '49 idiomas para aprender', sub: 'Inglés, español, alemán, francés, italiano, portugués, turco, polaco, neerlandés, sueco y más' },
    library: { title: 'Toda una biblioteca para leer', sub: 'Superventas, clásicos, relatos y más' },
    import: { title: 'Suba su propio libro', sub: 'EPUB, PDF o DOCX: lea lo que quiera con traducción' },
    word1: { title: 'Más de 10 tipos de ejercicios', sub: 'Tarjetas con imágenes, audio, opciones y escritura de palabras' },
    word2: { title: 'Repaso espaciado', sub: 'Las palabras regresan justo antes de que las olvide' },
  },
  fr: {
    reader: { title: 'Lecture parallèle', sub: 'Touchez un mot pour afficher sa traduction' },
    audio: { title: 'Audio de locuteurs natifs', sub: 'Chaque mot est surligné en synchronie avec la voix' },
    brand: { title: '49 langues à apprendre', sub: 'Anglais, espagnol, allemand, français, italien, portugais, turc, polonais, néerlandais, suédois et plus' },
    library: { title: 'Toute une bibliothèque à lire', sub: 'Best-sellers, classiques, nouvelles et plus' },
    import: { title: 'Importez votre propre livre', sub: 'EPUB, PDF ou DOCX : lisez tout avec traduction' },
    word1: { title: 'Plus de 10 types d’exercices', sub: 'Cartes avec images, audio, choix et saisie des mots' },
    word2: { title: 'Répétition espacée', sub: 'Les mots reviennent juste avant que vous les oubliiez' },
  },
  pt: {
    reader: { title: 'Leitura paralela', sub: 'Toque numa palavra para ver a tradução' },
    audio: { title: 'Áudio de falantes nativos', sub: 'Cada palavra é destacada em sincronia com a voz' },
    brand: { title: '49 idiomas para aprender', sub: 'Inglês, espanhol, alemão, francês, italiano, português, turco, polaco, neerlandês, sueco e mais' },
    library: { title: 'Uma biblioteca inteira para ler', sub: 'Best-sellers, clássicos, contos e muito mais' },
    import: { title: 'Carregue o seu próprio livro', sub: 'EPUB, PDF ou DOCX: leia tudo com tradução' },
    word1: { title: 'Mais de 10 tipos de exercícios', sub: 'Cartões com imagens, áudio, escolha e introdução de palavras' },
    word2: { title: 'Repetição espaçada', sub: 'As palavras voltam mesmo antes de as esquecer' },
  },
  it: {
    reader: { title: 'Lettura parallela', sub: 'Tocchi una parola per vederne la traduzione' },
    audio: { title: 'Audio di madrelingua', sub: 'Ogni parola viene evidenziata in sincronia con la voce' },
    brand: { title: '49 lingue da imparare', sub: 'Inglese, spagnolo, tedesco, francese, italiano, portoghese, turco, polacco, olandese, svedese e altre' },
    library: { title: "Un'intera biblioteca da leggere", sub: 'Bestseller, classici, racconti e altro' },
    import: { title: 'Carichi il suo libro', sub: 'EPUB, PDF o DOCX: legga tutto con la traduzione' },
    word1: { title: 'Oltre 10 tipi di esercizi', sub: 'Carte con immagini, audio, scelta e digitazione delle parole' },
    word2: { title: 'Ripetizione dilazionata', sub: 'Le parole tornano proprio prima che le dimentichi' },
  },
  hr: {
    reader: { title: 'Paralelno čitanje', sub: 'Dodirnite riječ da biste vidjeli prijevod' },
    audio: { title: 'Audio izvornih govornika', sub: 'Svaka se riječ ističe usklađeno s izgovorom' },
    brand: { title: '49 jezika za učenje', sub: 'Engleski, španjolski, njemački, francuski, talijanski, portugalski, turski, poljski, nizozemski, švedski i drugi' },
    library: { title: 'Cijela knjižnica za čitanje', sub: 'Bestseleri, klasici, kratke priče i još više' },
    import: { title: 'Učitajte vlastitu knjigu', sub: 'EPUB, PDF ili DOCX: čitajte bilo što s prijevodom' },
    word1: { title: 'Više od 10 vrsta vježbi', sub: 'Kartice sa slikama, zvukom, izborom i unosom riječi' },
    word2: { title: 'Vremenski raspoređeno ponavljanje', sub: 'Riječi se vraćaju točno prije nego što ih zaboravite' },
  },
  pl: {
    reader: { title: 'Czytanie równoległe', sub: 'Dotknij słowa, aby zobaczyć tłumaczenie' },
    audio: { title: 'Słuchaj podczas czytania', sub: 'Ucz się naturalnie z lektorem native' },
    brand: { title: 'Podnieś swój {target}, czytając ulubione książki' },
    library: { title: 'Cała biblioteka do czytania', sub: 'Bestsellery, klasyka, opowiadania i więcej' },
    import: { title: 'Wgraj własną książkę', sub: 'EPUB, PDF lub DOCX: czytaj wszystko z tłumaczeniem' },
  },
  tr: {
    reader: { title: 'Paralel okuma', sub: 'Çevirisini görmek için bir kelimeye dokunun' },
    audio: { title: 'Okurken dinleyin', sub: 'Ana dil seslendirmesiyle doğal şekilde öğrenin' },
    brand: { title: 'En sevdiğiniz kitaplarla {target} dilinizi geliştirin' },
    library: { title: 'Okumak için koca bir kütüphane', sub: 'Çok satanlar, klasikler, öyküler ve daha fazlası' },
    import: { title: 'Kendi kitabınızı yükleyin', sub: 'EPUB, PDF veya DOCX: her şeyi çeviriyle okuyun' },
  },
};

function targetName(uiLang: string, targetLang: string): string {
  return (
    languageNames[uiLang]?.[targetLang] ||
    languageNames.en?.[targetLang] ||
    targetLang
  );
}

/** Resolve the localized caption for a slide, with {target} substituted. */
export function captionFor(uiLang: string, slideId: string, targetLang: string): Caption {
  const set = CAPTIONS[uiLang] || CAPTIONS.en;
  const base = set[slideId] || CAPTIONS.en[slideId] || { title: '' };
  const name = targetName(uiLang, targetLang);
  return {
    title: base.title.replace('{target}', name),
    sub: base.sub?.replace('{target}', name),
  };
}
