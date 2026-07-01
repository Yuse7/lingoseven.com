// Level-graded book recommendations per language for the reading-level-recommender tool.
// Source: the curated "Best books to learn <language> through reading" posts
// (src/content/blog/en/best-books-to-learn-*-through-reading.md), whose titles were
// web-verified when written. Extracted from those posts, never fabricated. Each book
// carries the CEFR range it suits so the tool can match it to a reader's level.

export type Cefr = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

export interface BookRec {
  title: string;
  author: string; // '' when traditional / anonymous / a category recommendation
  min: Cefr; // lowest CEFR level the book suits
  max: Cefr; // highest CEFR level the book suits (equals min for a single level)
  kind: string; // Graded reader | Classic | Children | Literary | Folk tales | Poetry | Parallel text | Nonfiction
  why: string; // one short sentence on why it works for learners
}

export interface LangBooks {
  code: string;
  intro: string; // one or two honest sentences about reading in this language
  books: BookRec[];
}

export const LEVELS: Cefr[] = ['A1', 'A2', 'B1', 'B2', 'C1'];

export function levelIndex(l: string): number {
  const i = LEVELS.indexOf(l as Cefr);
  return i < 0 ? 0 : i;
}

export function coversLevel(book: BookRec, level: string): boolean {
  return levelIndex(book.min) <= levelIndex(level) && levelIndex(level) <= levelIndex(book.max);
}

export function levelLabel(book: BookRec): string {
  return book.min === book.max ? book.min : `${book.min} to ${book.max}`;
}

export const readingBooks: Record<string, LangBooks> = {
  "en": {
    "code": "en",
    "intro": "English has no single FSI difficulty number because it is the baseline other languages are measured against; its grammar is unusually light (no cases, no gender) and no language has more learner material, from graded readers to parallel-text editions of nearly every classic.",
    "books": [
      {
        "title": "Oxford Bookworms, Penguin Readers, Macmillan Readers",
        "author": "",
        "min": "A1",
        "max": "C1",
        "kind": "Graded reader",
        "why": "The three best graded-reader series, leveled so you climb a clear staircase, most with audio."
      },
      {
        "title": "Short Stories in English for Beginners",
        "author": "Olly Richards",
        "min": "A2",
        "max": "B1",
        "kind": "Graded reader",
        "why": "Controlled to the 1,000 most frequent words, with plot summaries, glossary, and comprehension questions."
      },
      {
        "title": "Charlie and the Chocolate Factory and Matilda",
        "author": "Roald Dahl",
        "min": "A2",
        "max": "B1",
        "kind": "Children",
        "why": "Short sentences, concrete vocabulary, and gripping plots pull you past the occasional unfamiliar word."
      },
      {
        "title": "Charlotte's Web",
        "author": "E.B. White",
        "min": "A2",
        "max": "B1",
        "kind": "Children",
        "why": "A small masterclass in plain, graceful English, simple sentences carried by emotional warmth."
      },
      {
        "title": "Holes",
        "author": "Louis Sachar",
        "min": "B1",
        "max": "B1",
        "kind": "Children",
        "why": "Short, punchy sentences and clean contemporary American English, with a clockwork plot that grips."
      },
      {
        "title": "Of Mice and Men",
        "author": "John Steinbeck",
        "min": "B1",
        "max": "B2",
        "kind": "Classic",
        "why": "Built largely from dialogue and economical description, short enough for a realistic first serious novel."
      },
      {
        "title": "Animal Farm",
        "author": "George Orwell",
        "min": "B1",
        "max": "B2",
        "kind": "Classic",
        "why": "Plain, direct prose in a short, easy-to-follow fable, remarkably readable for its reputation."
      },
      {
        "title": "Never Let Me Go",
        "author": "Kazuo Ishiguro",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Calm, restrained, almost transparent prose that teaches you to read for tone and implication."
      },
      {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "Under two hundred pages of lyrical, precise sentences, a wonderful model of beautiful English."
      },
      {
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "Elegant, ironic, carefully built prose, the closest thing to a course in English style."
      }
    ]
  },
  "de": {
    "code": "de",
    "intro": "German is FSI Category II (about 900 hours), harder mainly for its grammar (cases, gender, verb-final word order), yet it shares hundreds of everyday words with English, so reading is where the kinship pays off fastest.",
    "books": [
      {
        "title": "Dino lernt Deutsch",
        "author": "André Klein",
        "min": "A1",
        "max": "A2",
        "kind": "Graded reader",
        "why": "Simplified sentences and practical vocabulary (ordering food, finding a flat), each chapter glossed."
      },
      {
        "title": "Einfach Deutsch lesen",
        "author": "Angelika Bohn",
        "min": "A1",
        "max": "B2",
        "kind": "Graded reader",
        "why": "Ladders across levels with subtle repetition and adult stories, so you keep one author's style as you climb."
      },
      {
        "title": "Short Stories in German for Beginners",
        "author": "Olly Richards",
        "min": "A2",
        "max": "B1",
        "kind": "Graded reader",
        "why": "Controlled to the 1,000 most frequent words, with a glossary, questions, and an audiobook."
      },
      {
        "title": "Der kleine Prinz",
        "author": "Antoine de Saint-Exupéry",
        "min": "B1",
        "max": "B2",
        "kind": "Classic",
        "why": "Short present-tense sentences carried by emotional weight, with bilingual editions and audio."
      },
      {
        "title": "Emil und die Detektive",
        "author": "Erich Kästner",
        "min": "B1",
        "max": "B2",
        "kind": "Children",
        "why": "Clear, brisk, modern prose and a page-turner plot make it a natural first real novel."
      },
      {
        "title": "Easy-Reader and Graded Classics",
        "author": "",
        "min": "B1",
        "max": "B2",
        "kind": "Graded reader",
        "why": "Language-controlled Leichte Lektüre editions bridge you toward a full classic that feels out of reach."
      },
      {
        "title": "Im Westen nichts Neues",
        "author": "Erich Maria Remarque",
        "min": "B2",
        "max": "C1",
        "kind": "Literary",
        "why": "Direct, unadorned, often short sentences, one of the gentlest landings into serious literature."
      },
      {
        "title": "Die Verwandlung",
        "author": "Franz Kafka",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Precise, clean prose in a short novella you can finish, great practice for verb-final sentences."
      },
      {
        "title": "Demian",
        "author": "Hermann Hesse",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Clear, flowing, introspective German that teaches the vocabulary of thought and feeling."
      }
    ]
  },
  "fr": {
    "code": "fr",
    "intro": "French is FSI Category I (about 750 class hours) and shares thousands of cognates with English, but its non-phonetic spelling (silent letters, liaison) makes many words hard to recognize in speech, so pair reading with audio.",
    "books": [
      {
        "title": "Short Stories in French for Beginners",
        "author": "Olly Richards",
        "min": "A1",
        "max": "A2",
        "kind": "Graded reader",
        "why": "Eight original genre stories with controlled high-frequency vocabulary, glossaries, and comprehension questions."
      },
      {
        "title": "Children's Picture Books and Early Readers",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Children",
        "why": "Everyday vocabulary, short sentences, and pictures that carry the meaning, cheap and unintimidating."
      },
      {
        "title": "Publisher graded readers: Lire en français facile, CLE International, Black Cat",
        "author": "",
        "min": "A1",
        "max": "B1",
        "kind": "Graded reader",
        "why": "CEFR-labelled learner series that let you match your level exactly and step up one notch at a time."
      },
      {
        "title": "Le Petit Prince",
        "author": "Antoine de Saint-Exupéry",
        "min": "B1",
        "max": "B1",
        "kind": "Classic",
        "why": "The single easiest classic in the French canon, simple vocabulary with themes worth holding onto."
      },
      {
        "title": "Le Petit Nicolas",
        "author": "René Goscinny and Jean-Jacques Sempé",
        "min": "B1",
        "max": "B2",
        "kind": "Children",
        "why": "Short, funny, self-contained schoolboy stories full of the everyday, colloquial French you actually want."
      },
      {
        "title": "Bonjour tristesse",
        "author": "Françoise Sagan",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "A short, gripping Riviera novel with clean, classical restraint and contemporary vocabulary."
      },
      {
        "title": "La Parure, La Ficelle",
        "author": "Guy de Maupassant",
        "min": "B2",
        "max": "C1",
        "kind": "Classic",
        "why": "Complete, satisfying stories finishable in one sitting, anchored in concrete, observable detail."
      },
      {
        "title": "L'Étranger",
        "author": "Albert Camus",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Spare, flat prose in short declarative sentences, and it uses the familiar passé composé."
      },
      {
        "title": "Le Comte de Monte-Cristo",
        "author": "Alexandre Dumas",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "Thrilling, plot-driven prose pulls you through hundreds of pages on sheer momentum."
      },
      {
        "title": "Les Misérables",
        "author": "Victor Hugo",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "One of the great novels in any language, its emotional set-pieces are extraordinary."
      },
      {
        "title": "Vol de nuit, Terre des hommes",
        "author": "Antoine de Saint-Exupéry",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Lyrical, image-rich prose about flight and human solidarity, beautifully constructed."
      }
    ]
  },
  "es": {
    "code": "es",
    "intro": "Spanish is an FSI Category I language (roughly 600 to 750 hours), one of the easiest for English speakers, with near-phonetic spelling, endless cognates, and an effectively unlimited supply of reading material.",
    "books": [
      {
        "title": "Pobre Ana",
        "author": "Blaine Ray",
        "min": "A1",
        "max": "A1",
        "kind": "Graded reader",
        "why": "Built on about 300 words with heavy repetition, it lets a nervous beginner finish a whole novel."
      },
      {
        "title": "Fiesta fatal, Piratas del Caribe y el mapa secreto",
        "author": "Mira Canion",
        "min": "A1",
        "max": "A2",
        "kind": "Graded reader",
        "why": "Cognate-heavy novellas (about 140 new words in Fiesta fatal) with real stakes, short enough to finish fast."
      },
      {
        "title": "Spanish Novels",
        "author": "Paco Ardit",
        "min": "A1",
        "max": "C1",
        "kind": "Graded reader",
        "why": "A tightly graded series from A1 to C1, written for adults, so you always know the next readable rung."
      },
      {
        "title": "Short Stories in Spanish for Beginners",
        "author": "Olly Richards",
        "min": "A2",
        "max": "B1",
        "kind": "Graded reader",
        "why": "Eight varied stories engineered to recycle the most common words, with glossaries and comprehension questions."
      },
      {
        "title": "El Principito",
        "author": "Antoine de Saint-Exupéry",
        "min": "A2",
        "max": "B1",
        "kind": "Classic",
        "why": "Short sentences and concrete vocabulary in a beloved story, with abundant parallel and audio editions."
      },
      {
        "title": "Children's and Young-Adult Classics in Translation",
        "author": "",
        "min": "B1",
        "max": "B2",
        "kind": "Children",
        "why": "Knowing the story already lets you spend your energy on the Spanish, not the plot."
      },
      {
        "title": "La sombra del viento",
        "author": "Carlos Ruiz Zafón",
        "min": "B2",
        "max": "C1",
        "kind": "Literary",
        "why": "A propulsive Barcelona mystery pulls you forward so hard you tolerate the unknown words."
      },
      {
        "title": "Cien años de soledad",
        "author": "Gabriel García Márquez",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Luminous prose and unforgettable imagery reward years of effort when read in the original."
      },
      {
        "title": "La casa de los espíritus",
        "author": "Isabel Allende",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Magical-realist richness with more linear storytelling and more navigable sentences than García Márquez."
      },
      {
        "title": "Ficciones",
        "author": "Jorge Luis Borges",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Short, precise, elegant stories you can read in a sitting and reread endlessly."
      }
    ]
  },
  "it": {
    "code": "it",
    "intro": "Italian is FSI Category I (roughly 600 to 750 hours) and almost perfectly phonetic, so reading and listening reinforce each other, with solid graded readers and plenty of accessible classics to climb.",
    "books": [
      {
        "title": "Favole al telefono",
        "author": "Gianni Rodari",
        "min": "A1",
        "max": "A2",
        "kind": "Children",
        "why": "Roughly fifty tales, most a page or two, everyday vocabulary, a whole story in minutes."
      },
      {
        "title": "Italiano facile",
        "author": "",
        "min": "A1",
        "max": "C1",
        "kind": "Graded reader",
        "why": "Alma Edizioni's learner line, so the Italian feels natural, with excellent professional-actor audio."
      },
      {
        "title": "Short Stories in Italian for Beginners",
        "author": "Olly Richards",
        "min": "A2",
        "max": "B1",
        "kind": "Graded reader",
        "why": "Eight self-contained stories on the 1,000 most frequent words, with glossary and audiobook."
      },
      {
        "title": "ELI and Egmont Easy Readers",
        "author": "",
        "min": "A2",
        "max": "B1",
        "kind": "Graded reader",
        "why": "Leveled, simplified versions of well-known works let you read a real author before you could unaided."
      },
      {
        "title": "Io non ho paura",
        "author": "Niccolò Ammaniti",
        "min": "B1",
        "max": "B1",
        "kind": "Literary",
        "why": "A child narrator keeps register and grammar accessible while the tense plot pulls you forward."
      },
      {
        "title": "Le avventure di Pinocchio",
        "author": "Carlo Collodi",
        "min": "B1",
        "max": "B2",
        "kind": "Children",
        "why": "Clean, middle-register Tuscan with short sentences and concrete nouns, in a story you half-know."
      },
      {
        "title": "Il Piccolo Principe",
        "author": "Antoine de Saint-Exupéry",
        "min": "B1",
        "max": "B2",
        "kind": "Classic",
        "why": "Short sentences and a gentle tone with philosophical weight sitting beneath simple words."
      },
      {
        "title": "Marcovaldo",
        "author": "Italo Calvino",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "Twenty short, self-contained, image-driven stories make a manageable on-ramp to a major author."
      },
      {
        "title": "Se questo è un uomo",
        "author": "Primo Levi",
        "min": "B2",
        "max": "C1",
        "kind": "Nonfiction",
        "why": "A chemist's rare clarity and restraint make the prose more accessible than its stature suggests."
      },
      {
        "title": "Il barone rampante, Le città invisibili, Il visconte dimezzato",
        "author": "Italo Calvino",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Famously lucid Italian where the difficulty is in the ideas, not tangled syntax."
      },
      {
        "title": "L'amica geniale",
        "author": "Elena Ferrante",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "A propulsive, emotionally gripping story carries you through long, feeling-mapping sentences."
      }
    ]
  },
  "pt": {
    "code": "pt",
    "intro": "Portuguese is FSI Category I (roughly 600 to 750 hours) with a Latin backbone full of cognates; the one early choice is Brazilian versus European, which matters more for audio than for reading.",
    "books": [
      {
        "title": "O Pequeno Príncipe",
        "author": "Antoine de Saint-Exupéry",
        "min": "A1",
        "max": "A2",
        "kind": "Classic",
        "why": "Because the original French is plain, the Portuguese stays gentle, with a repeating core of words."
      },
      {
        "title": "Graded readers and bilingual collections",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Graded reader",
        "why": "Controlled-vocabulary readers keep the look-up rate low; favor ones with audio and a stated level."
      },
      {
        "title": "Short Stories in Brazilian Portuguese for Beginners",
        "author": "Olly Richards",
        "min": "A2",
        "max": "B1",
        "kind": "Graded reader",
        "why": "Eight high-frequency Brazilian stories with glossary, plot summaries, and native audio."
      },
      {
        "title": "O Alquimista",
        "author": "Paulo Coelho",
        "min": "B1",
        "max": "B1",
        "kind": "Literary",
        "why": "Clean, direct, parable-like prose with short sentences and concrete vocabulary, an ideal first novel."
      },
      {
        "title": "Meu Pé de Laranja Lima",
        "author": "José Mauro de Vasconcelos",
        "min": "B1",
        "max": "B1",
        "kind": "Literary",
        "why": "A childlike register keeps vocabulary accessible, and the genuine emotional pull keeps you reading."
      },
      {
        "title": "Capitães da Areia",
        "author": "Jorge Amado",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "A natural storyteller's propulsive plot and lifelike dialogue carry you into Bahian culture."
      },
      {
        "title": "Dom Casmurro",
        "author": "Machado de Assis",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "A master of irony builds the narrator's self-deception into the sentences themselves."
      },
      {
        "title": "A Hora da Estrela",
        "author": "Clarice Lispector",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "A short entry into Lispector, who bends Brazilian Portuguese into entirely her own shapes."
      },
      {
        "title": "Ensaio sobre a Cegueira",
        "author": "José Saramago",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "A first-rank philosophical novelist whose distinctive voice only the original can convey."
      }
    ]
  },
  "ru": {
    "code": "ru",
    "intro": "Russian is FSI Category IV (roughly 1,100 hours), hard for its six cases and hidden word stress, and you must learn Cyrillic first (a week or two); true graded readers are scarce, so it leans on Olly Richards, the Zlatoust ladder, Chukovsky's verse, and The Little Prince.",
    "books": [
      {
        "title": "Мойдодыр, Тараканище, Телефон, Айболит, Муха-Цокотуха",
        "author": "Korney Chukovsky",
        "min": "A1",
        "max": "A2",
        "kind": "Poetry",
        "why": "Insistent metrical rhyme locks stress patterns into place and teaches Russian prosody."
      },
      {
        "title": "Zlatoust graded readers",
        "author": "",
        "min": "A1",
        "max": "B2",
        "kind": "Graded reader",
        "why": "The closest Russian has to a graded-reader ladder, several editions marking word stress."
      },
      {
        "title": "Short Stories in Russian for Beginners",
        "author": "Olly Richards",
        "min": "A2",
        "max": "B1",
        "kind": "Graded reader",
        "why": "Eight genre stories on the 1,000 most frequent words, glossed with bilingual lists and audio."
      },
      {
        "title": "Маленький принц",
        "author": "Antoine de Saint-Exupéry",
        "min": "B1",
        "max": "B1",
        "kind": "Classic",
        "why": "You already know the story, so you read for language, in Gal's genuinely good Russian."
      },
      {
        "title": "Хамелеон, Толстый и тонкий, Смерть чиновника, Душечка",
        "author": "Anton Chekhov",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "Clean sentences and colloquial dialogue in short, finishable stories where verb aspect clicks."
      },
      {
        "title": "Капитанская дочка, Повести Белкина, Пиковая дама",
        "author": "Alexander Pushkin",
        "min": "B2",
        "max": "C1",
        "kind": "Classic",
        "why": "Clear, economical prose from the writer who invented the modern Russian literary language."
      },
      {
        "title": "Мастер и Маргарита",
        "author": "Mikhail Bulgakov",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Twentieth-century prose close to modern Russian, its supernatural comedy pulling you through."
      },
      {
        "title": "Анна Каренина, Война и мир",
        "author": "Leo Tolstoy",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "The precision of Tolstoy's observation survives translation only partly; start with his shorter works."
      },
      {
        "title": "Преступление и наказание, Братья Карамазовы",
        "author": "Fyodor Dostoevsky",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "The texture of Dostoevsky's anguished syntax survives translation only partly; start with his shorter novels."
      }
    ]
  },
  "sr": {
    "code": "sr",
    "intro": "Serbian is an FSI Category IV language (around 1,100 hours, seven cases) written in two alphabets, Cyrillic and Latin, both of which a literate reader needs. Dedicated graded readers are thin, so the path leans on Mali princ, children's verse, and folk tales, with parallel text carrying the Cyrillic.",
    "books": [
      {
        "title": "Mali princ",
        "author": "Antoine de Saint-Exupéry",
        "min": "A1",
        "max": "A2",
        "kind": "Classic",
        "why": "Familiar narrative removes the comprehension load, freeing you to absorb Serbian sentence-building."
      },
      {
        "title": "Ježeva kućica",
        "author": "Branko Ćopić",
        "min": "A1",
        "max": "A2",
        "kind": "Children",
        "why": "Short, rhythmic, repetitive children's verse whose recurring words and structures stick fast."
      },
      {
        "title": "Children's poems",
        "author": "Jovan Jovanović Zmaj",
        "min": "A1",
        "max": "A2",
        "kind": "Poetry",
        "why": "Tiny rhymed poems you can finish early, with rhyme making stress patterns audible."
      },
      {
        "title": "Srpske narodne pripovetke",
        "author": "Vuk Karadžić",
        "min": "B1",
        "max": "B2",
        "kind": "Folk tales",
        "why": "Repetition, formulaic openings, and a closed cast of words suit an intermediate reader."
      },
      {
        "title": "Autobiografija",
        "author": "Branislav Nušić",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "Warm, ironic mock-memoir in conversational modern Serbian, where comedy pulls you through difficulty."
      },
      {
        "title": "Rani jadi",
        "author": "Danilo Kiš",
        "min": "B2",
        "max": "C1",
        "kind": "Literary",
        "why": "Short child's-eye autobiographical stories, the most approachable door to a major stylist."
      },
      {
        "title": "Na Drini ćuprija",
        "author": "Ivo Andrić",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "Self-contained historical episodes in grave, measured prose, the essential BCS novel to read."
      },
      {
        "title": "Dnevnik o Čarnojeviću",
        "author": "Miloš Crnjanski",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "The slim, lyrical anti-war debut, a shorter way into Serbian modernism's music."
      },
      {
        "title": "Seobe",
        "author": "Miloš Crnjanski",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "A larger historical canvas of displaced Serbs, the reward at the road's end."
      }
    ]
  },
  "nl": {
    "code": "nl",
    "intro": "Dutch sits in the Foreign Service Institute's easiest tier (Category I, roughly 600 to 750 hours), and its heavy vocabulary overlap with English lets you read real sentences unusually early. Graded readers, Annie M.G. Schmidt's children's classics, and accessible modern novels form a clear ladder from A1 to literary fiction.",
    "books": [
      {
        "title": "Short Stories in Dutch for Beginners",
        "author": "Olly Richards",
        "min": "A2",
        "max": "A2",
        "kind": "Graded reader",
        "why": "Eight learner stories with glossaries and controlled, recycled vocabulary that build a beginner's confidence."
      },
      {
        "title": "Jip en Janneke",
        "author": "Annie M.G. Schmidt",
        "min": "A2",
        "max": "A2",
        "kind": "Children",
        "why": "Short, self-contained stories in simple, concrete everyday Dutch, often a learner's first native book finished."
      },
      {
        "title": "Pluk van de Petteflet",
        "author": "Annie M.G. Schmidt",
        "min": "A2",
        "max": "B1",
        "kind": "Children",
        "why": "A continuous story with recurring characters that recycle vocabulary, a natural step up from Jip en Janneke."
      },
      {
        "title": "De kleine prins",
        "author": "Antoine de Saint-Exupéry",
        "min": "A2",
        "max": "B1",
        "kind": "Classic",
        "why": "A familiar fable in short, concrete sentences, an easy entry point into parallel reading."
      },
      {
        "title": "Het Achterhuis",
        "author": "Anne Frank",
        "min": "B1",
        "max": "B2",
        "kind": "Nonfiction",
        "why": "Short diary entries in clear, conversational Dutch about the everyday vocabulary you most want."
      },
      {
        "title": "Het Diner",
        "author": "Herman Koch",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "Clean, contemporary Dutch with short sentences and dialogue, often a learner's first grown-up novel."
      },
      {
        "title": "Oeroeg",
        "author": "Hella S. Haasse",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "A short novella in precise, controlled prose, a realistic literary target for upper-intermediate readers."
      },
      {
        "title": "De Aanslag",
        "author": "Harry Mulisch",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Clear literary prose and a gripping plot make it an approachable entry into serious Dutch literature."
      },
      {
        "title": "Rituelen",
        "author": "Cees Nooteboom",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "The novel that made Nooteboom's name, some of the finest prose in modern Dutch."
      },
      {
        "title": "Het volgende verhaal",
        "author": "Cees Nooteboom",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Short, strange, and luminous, a manageable way into Nooteboom's dense, allusive style."
      }
    ]
  },
  "sv": {
    "code": "sv",
    "intro": "Swedish is an FSI Category I language (about 600 to 750 hours), and its Germanic kinship with English makes written Swedish half-legible from the start. Its standout advantage is the state-supported lättläst tradition of easy-to-read books, which lets you read adult-interest material far earlier than most languages allow.",
    "books": [
      {
        "title": "Lättläst editions and LL-förlaget",
        "author": "",
        "min": "A1",
        "max": "B1",
        "kind": "Graded reader",
        "why": "State-supported easy-to-read books giving adult-interest content at a genuine beginner reading level."
      },
      {
        "title": "Short Stories in Swedish for Beginners",
        "author": "Olly Richards",
        "min": "A2",
        "max": "B1",
        "kind": "Graded reader",
        "why": "Eight genre stories with controlled, recycled vocabulary and glossaries, built to be finished."
      },
      {
        "title": "Den lille prinsen",
        "author": "Antoine de Saint-Exupéry",
        "min": "A2",
        "max": "B1",
        "kind": "Classic",
        "why": "A gentle story you already know, so you decode Swedish instead of juggling plot."
      },
      {
        "title": "Pippi Långstrump",
        "author": "Astrid Lindgren",
        "min": "A2",
        "max": "B1",
        "kind": "Children",
        "why": "Bright, dialogue-heavy Swedish in short chapters, so propulsive you read one more without meaning to."
      },
      {
        "title": "Emil i Lönneberga",
        "author": "Astrid Lindgren",
        "min": "A2",
        "max": "B1",
        "kind": "Children",
        "why": "Everyday, concrete farm-life vocabulary in self-contained episodes you can finish one at a time."
      },
      {
        "title": "Bröderna Lejonhjärta",
        "author": "Astrid Lindgren",
        "min": "B1",
        "max": "B1",
        "kind": "Children",
        "why": "A longer, emotionally serious fantasy that stretches you while keeping Lindgren's clear style."
      },
      {
        "title": "Ronja Rövardotter",
        "author": "Astrid Lindgren",
        "min": "B1",
        "max": "B1",
        "kind": "Children",
        "why": "A robber chief's daughter in a wild, mythic forest, richer description with real weight."
      },
      {
        "title": "Mördare utan ansikte",
        "author": "Henning Mankell",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "Clear, unadorned crime prose and the first Wallander, starting a long series at steady difficulty."
      },
      {
        "title": "Män som hatar kvinnor",
        "author": "Stieg Larsson",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "A compulsively plotted thriller in modern vocabulary that pulls readers above their comfort level."
      },
      {
        "title": "Gösta Berlings saga",
        "author": "Selma Lagerlöf",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "Lagerlöf's romantic, mythic debut in rich, rhythmic prose, a turning point in Swedish literature."
      },
      {
        "title": "Nils Holgerssons underbara resa genom Sverige",
        "author": "Selma Lagerlöf",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "The more approachable Lagerlöf, a tour of Sweden's geography and folklore in rich prose."
      },
      {
        "title": "Röda rummet",
        "author": "August Strindberg",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "Often called the first modern Swedish novel, a sharp satire of Stockholm society."
      },
      {
        "title": "Hemsöborna",
        "author": "August Strindberg",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "A vivid, earthier story set in the Stockholm archipelago, muscular and alive."
      }
    ]
  },
  "no": {
    "code": "no",
    "intro": "Norwegian is an FSI Category I language (roughly 600 to 750 hours) with grammar close to English, a lettlest easy-reader tradition, and a deep bench of children's classics. One decision comes first: read Bokmål before you add Nynorsk.",
    "books": [
      {
        "title": "Lettlest graded readers",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Graded reader",
        "why": "Purpose-built easy-read books with simplified vocabulary and short sentences that let a beginner finish."
      },
      {
        "title": "Karius og Baktus",
        "author": "Thorbjørn Egner",
        "min": "A1",
        "max": "A2",
        "kind": "Children",
        "why": "A short, charming story in clear Bokmål built on repetition and song, read in one sitting."
      },
      {
        "title": "Mormor og de åtte ungene",
        "author": "Anne-Cath. Vestly",
        "min": "A1",
        "max": "A2",
        "kind": "Children",
        "why": "Warm, plain, conversational prose close to real speech, full of everyday domestic vocabulary."
      },
      {
        "title": "Folk og røvere i Kardemomme by",
        "author": "Thorbjørn Egner",
        "min": "A2",
        "max": "A2",
        "kind": "Children",
        "why": "One of Norway's most quoted children's books, clear Bokmål carried by repetition and song."
      },
      {
        "title": "Den lille prinsen",
        "author": "Antoine de Saint-Exupéry",
        "min": "A2",
        "max": "A2",
        "kind": "Classic",
        "why": "A story you already know in simple Bokmål with short chapters, so plot carries the vocabulary."
      },
      {
        "title": "Short Stories in Norwegian for Beginners",
        "author": "Olly Richards",
        "min": "A2",
        "max": "B1",
        "kind": "Graded reader",
        "why": "Eight genre stories built from the thousand most frequent words, with glossaries for dictionary-free reading."
      },
      {
        "title": "Vaffelhjarte",
        "author": "Maria Parr",
        "min": "B1",
        "max": "B1",
        "kind": "Children",
        "why": "Warm, funny childhood stories in Nynorsk, rich enough to teach yet clear at B1."
      },
      {
        "title": "Tonje Glimmerdal",
        "author": "Maria Parr",
        "min": "B1",
        "max": "B1",
        "kind": "Children",
        "why": "An award-winning, warm and emotionally real story, a deliberate, enjoyable introduction to Nynorsk."
      },
      {
        "title": "Flaggermusmannen",
        "author": "Jo Nesbø",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "Propulsive Harry Hole crime in contemporary Bokmål, page-turning momentum that pulls you to B2."
      },
      {
        "title": "Sofies verden",
        "author": "Jostein Gaarder",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "A whole history of philosophy in calm, well-signposted prose, logical and clearly structured."
      },
      {
        "title": "Sult",
        "author": "Knut Hamsun",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "The first modern Norwegian novel, a feverish first-person account, intense and stylistically restless."
      },
      {
        "title": "Min kamp",
        "author": "Karl Ove Knausgård",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Contemporary, approachable present-day Bokmål, where the challenge is stamina and long introspective sentences."
      }
    ]
  },
  "da": {
    "code": "da",
    "intro": "Danish is an FSI Category I language (about 600 to 750 hours) and one of the easiest to read, sharing a Germanic core with English and grading its letlæsning easy readers by transparent lix numbers. The catch is sound: spoken Danish diverges sharply from the page, so read with audio.",
    "books": [
      {
        "title": "Letlæsning easy readers",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Graded reader",
        "why": "Easy readers graded on a transparent lix scale, so you climb one rung at a time."
      },
      {
        "title": "Den lille prins",
        "author": "Antoine de Saint-Exupéry",
        "min": "A2",
        "max": "A2",
        "kind": "Classic",
        "why": "A familiar story in short sentences and concrete vocabulary, a gentle bridge into Danish."
      },
      {
        "title": "Short Stories in Danish for Beginners",
        "author": "Olly Richards",
        "min": "A2",
        "max": "B1",
        "kind": "Graded reader",
        "why": "Eight self-contained genre stories with glossaries and recycled vocabulary, the gentlest on-ramp into Danish prose."
      },
      {
        "title": "Gummi-Tarzan",
        "author": "Ole Lund Kirkegaard",
        "min": "B1",
        "max": "B1",
        "kind": "Children",
        "why": "Contemporary, conversational Danish, plain and funny, the kind of book that hides the studying."
      },
      {
        "title": "Eventyr (fairy tales)",
        "author": "H.C. Andersen",
        "min": "B1",
        "max": "B2",
        "kind": "Classic",
        "why": "Short, famous, self-contained tales that are the cultural bedrock of Danish, read for the culture."
      },
      {
        "title": "Kvinden i buret",
        "author": "Jussi Adler-Olsen",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "Page-turning cold-case crime with clean, functional prose and natural modern Danish dialogue."
      },
      {
        "title": "Frøken Smillas fornemmelse for sne",
        "author": "Peter Høeg",
        "min": "B2",
        "max": "C1",
        "kind": "Literary",
        "why": "A literary thriller with forward pull and richness, your bridge from B2 toward C1."
      },
      {
        "title": "The Copenhagen Trilogy",
        "author": "Tove Ditlevsen",
        "min": "C1",
        "max": "C1",
        "kind": "Nonfiction",
        "why": "Spare, clear, devastating memoir, one of the most approachable serious works in Danish."
      },
      {
        "title": "Syv fantastiske fortællinger",
        "author": "Karen Blixen",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "A master stylist's gothic tales, an education in what literary Danish can do."
      }
    ]
  },
  "ro": {
    "code": "ro",
    "intro": "Romanian is an FSI Category I language (around 600 to 750 hours), and its Latin core opens much of a page for free. Purpose-built graded readers are thin, so it leans on one learner collection, Micul Prinț, and the cognate-rich modern prose of Sebastian and Eliade.",
    "books": [
      {
        "title": "25 Short Stories for Romanian Learners",
        "author": "Alina Vasile",
        "min": "A1",
        "max": "A2",
        "kind": "Graded reader",
        "why": "Controlled vocabulary and short bilingual units remove the two things that make beginners quit."
      },
      {
        "title": "Micul Prinț",
        "author": "Antoine de Saint-Exupéry",
        "min": "A1",
        "max": "A2",
        "kind": "Classic",
        "why": "A familiar story with simple syntax that quietly teaches the suffixed article and present tense."
      },
      {
        "title": "Legende sau basmele românilor",
        "author": "Petre Ispirescu",
        "min": "B1",
        "max": "B2",
        "kind": "Folk tales",
        "why": "Fairy-tale structure repeats in threes, so pattern lets you infer meaning as you read."
      },
      {
        "title": "Amintiri din copilărie",
        "author": "Ion Creangă",
        "min": "B2",
        "max": "B2",
        "kind": "Classic",
        "why": "Vivid, funny, and culturally foundational, with narrative momentum that pulls you through."
      },
      {
        "title": "De două mii de ani",
        "author": "Mihail Sebastian",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "Modern, lucid syntax and rich but accessible vocabulary reward your Romance-language cognate instincts."
      },
      {
        "title": "Maitreyi",
        "author": "Mircea Eliade",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "Modern twentieth-century Romanian with a strong narrative pull, readable at novella length first."
      },
      {
        "title": "Ion",
        "author": "Liviu Rebreanu",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Sober, controlled, modern prose, serious literature without the nineteenth-century folk writers' obstacles."
      },
      {
        "title": "Luceafărul",
        "author": "Mihai Eminescu",
        "min": "C1",
        "max": "C1",
        "kind": "Poetry",
        "why": "The national poet's masterpiece, where you feel Romanian as a literary instrument."
      },
      {
        "title": "Orbitor",
        "author": "Mircea Cărtărescu",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Contemporary Romanian at its most ambitious; if you can read him, you can read anything."
      }
    ]
  },
  "uk": {
    "code": "uk",
    "intro": "Ukrainian is an FSI Category IV language (about 1,100 hours, seven cases, perfective and imperfective verbs) written in its own Cyrillic variant. Graded readers are scarcer than for French or Spanish, so the path leans on bilingual beginner readers, children's classics, Маленький принц, and sentence-level parallel text.",
    "books": [
      {
        "title": "First Ukrainian Reader for Beginners",
        "author": "Olena Dniprova",
        "min": "A1",
        "max": "A2",
        "kind": "Graded reader",
        "why": "Built for beginners, with vocabulary controlled to your level and the translation alongside."
      },
      {
        "title": "55 Bilingual Short Stories to Learn Ukrainian for Beginner",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Graded reader",
        "why": "Each short story pairs with a vocabulary list, grammar notes, and comprehension questions."
      },
      {
        "title": "Children's picture books and early readers",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Children",
        "why": "Written to be understood by people still learning, with short present-tense sentences."
      },
      {
        "title": "Маленький принц",
        "author": "Antoine de Saint-Exupéry",
        "min": "A2",
        "max": "A2",
        "kind": "Classic",
        "why": "Knowing the plot lets you spend all your effort on the language, not the story."
      },
      {
        "title": "Тореадори з Васюківки",
        "author": "Vsevolod Nestaiko",
        "min": "B1",
        "max": "B2",
        "kind": "Children",
        "why": "Real idiomatic Ukrainian in a concrete, funny world whose momentum carries you forward."
      },
      {
        "title": "Death and the Penguin",
        "author": "Andrey Kurkov",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "Short, self-contained chapters and a gripping plot; the Ukrainian translation reads cleanly."
      },
      {
        "title": "Ворошиловград",
        "author": "Serhiy Zhadan",
        "min": "B2",
        "max": "C1",
        "kind": "Literary",
        "why": "Living, contemporary Ukrainian, serious modern fiction to grow into once you are comfortable."
      },
      {
        "title": "Польові дослідження з українського сексу",
        "author": "Oksana Zabuzhko",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "A central text of post-independence culture, and few books reward advanced effort more."
      },
      {
        "title": "Кобзар",
        "author": "Taras Shevchenko",
        "min": "C1",
        "max": "C1",
        "kind": "Poetry",
        "why": "The source of the modern literary language, weaving folk rhythms and spoken vernacular."
      },
      {
        "title": "Захар Беркут",
        "author": "Ivan Franko",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "Franko's historical novel, the more approachable entry into the classical Ukrainian canon."
      },
      {
        "title": "Камінний господар",
        "author": "Lesya Ukrainka",
        "min": "C1",
        "max": "C1",
        "kind": "Poetry",
        "why": "Lesya Ukrainka's verse drama on the Don Juan legend, drawing on European themes."
      }
    ]
  },
  "pl": {
    "code": "pl",
    "intro": "Polish is an FSI Category III language (around 1,100 hours) with seven cases and dense consonant clusters, but reading is where it hurts least, because you only recognize case endings rather than produce them. Graded readers and children's poetry start you off, with parallel text and audio removing the friction.",
    "books": [
      {
        "title": "Czytaj krok po kroku",
        "author": "",
        "min": "A1",
        "max": "A1",
        "kind": "Graded reader",
        "why": "Short stories pitched at A1, native-feeling but controlled, a bridge toward unsupported Polish."
      },
      {
        "title": "First Polish Reader for Students",
        "author": "Wiktor Kopernikus",
        "min": "A1",
        "max": "A2",
        "kind": "Graded reader",
        "why": "A bilingual graded reader marked for A1 and A2, so you check meaning without leaving the page."
      },
      {
        "title": "Kaczka Dziwaczka",
        "author": "Jan Brzechwa",
        "min": "A1",
        "max": "A2",
        "kind": "Poetry",
        "why": "Short, playful children's verse with concrete vocabulary, memorable rhythm, and superb pronunciation practice."
      },
      {
        "title": "Lokomotywa",
        "author": "Julian Tuwim",
        "min": "A1",
        "max": "A2",
        "kind": "Poetry",
        "why": "A children's poem built around the sound of Polish itself, superb read-aloud pronunciation practice."
      },
      {
        "title": "Mały Książę",
        "author": "Antoine de Saint-Exupéry",
        "min": "B1",
        "max": "B1",
        "kind": "Classic",
        "why": "A familiar story where you infer unknown words rather than look them up, cementing vocabulary."
      },
      {
        "title": "Ostatnie życzenie",
        "author": "Andrzej Sapkowski",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "The first Witcher book, self-contained stories with the narrative pull of a world you love."
      },
      {
        "title": "Prawiek i inne czasy",
        "author": "Olga Tokarczuk",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "The most approachable entry into a Nobel laureate, a village saga in short, fable-like chapters."
      },
      {
        "title": "Bieguni",
        "author": "Olga Tokarczuk",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Tokarczuk's fragmentary, demanding Man Booker International winner, for after Prawiek."
      },
      {
        "title": "Solaris",
        "author": "Stanisław Lem",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Hard speculative ideas fused with philosophy and dry wit, though inventive neologisms challenge even natives."
      },
      {
        "title": "Quo Vadis",
        "author": "Henryk Sienkiewicz",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "A canonical historical epic of Nero's Rome, safest of his works in parallel translation."
      }
    ]
  },
  "cs": {
    "code": "cs",
    "intro": "Czech is an FSI Category III language (about 1,100 hours) with seven cases, the rare ř sound, and a split between standard written Czech and colloquial speech. Graded readers and children's classics in clean standard Czech are the honest starting point, read with parallel text and audio.",
    "books": [
      {
        "title": "Czech Step by Step",
        "author": "Lída Holá",
        "min": "A1",
        "max": "A2",
        "kind": "Graded reader",
        "why": "Learner-engineered simplified texts in clean standard Czech, with restricted grammar and high-frequency vocabulary."
      },
      {
        "title": "Povídání o pejskovi a kočičce",
        "author": "Josef Čapek",
        "min": "A2",
        "max": "B1",
        "kind": "Children",
        "why": "Short, concrete sentences in warm standard Czech, charming rather than babyish, ideal to re-read."
      },
      {
        "title": "Dášeňka, čili život štěněte",
        "author": "Karel Čapek",
        "min": "A2",
        "max": "B1",
        "kind": "Children",
        "why": "A short, affectionate puppy book, the actual prose of Karel Čapek at his most accessible."
      },
      {
        "title": "Malý princ",
        "author": "Antoine de Saint-Exupéry",
        "min": "A2",
        "max": "B1",
        "kind": "Classic",
        "why": "A familiar story in clear standard Czech with concrete vocabulary, pairing well with parallel text."
      },
      {
        "title": "Válka s mloky",
        "author": "Karel Čapek",
        "min": "B1",
        "max": "B2",
        "kind": "Classic",
        "why": "Clear, well-built sentences in a collage of short fake documents that keeps you moving."
      },
      {
        "title": "R.U.R.",
        "author": "Karel Čapek",
        "min": "B1",
        "max": "B2",
        "kind": "Classic",
        "why": "Almost all short-line dialogue in standard Czech, idea-driven and short, and it coined robot."
      },
      {
        "title": "Ostře sledované vlaky",
        "author": "Bohumil Hrabal",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "A short, re-readable novella blending humor and tragedy, your first distinctive Czech voice."
      },
      {
        "title": "Osudy dobrého vojáka Švejka",
        "author": "Jaroslav Hašek",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "An anarchic, subversive comic masterpiece and a cornerstone of Czech literature, a real milestone."
      },
      {
        "title": "Nesnesitelná lehkost bytí",
        "author": "Milan Kundera",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Precise, intellectual, essayistic Czech prose where the difficulty is conceptual rather than dialectal."
      }
    ]
  },
  "sk": {
    "code": "sk",
    "intro": "Slovak sits in the FSI's harder tiers (well over a thousand hours), with six cases, dense diacritics, and genuinely scarce graded learner material. Reading leans on children's classics, folk tales, and Malý princ, and you can borrow from the larger Czech shelf, since the two languages are over ninety percent mutually intelligible.",
    "books": [
      {
        "title": "Malý princ",
        "author": "Antoine de Saint-Exupéry",
        "min": "A1",
        "max": "A2",
        "kind": "Classic",
        "why": "Short declarative sentences deliver the case system in small doses, in a story you know."
      },
      {
        "title": "Čin-Čin",
        "author": "Ľudmila Podjavorinská",
        "min": "A1",
        "max": "A2",
        "kind": "Children",
        "why": "Rhymed, rhythmic animal tales whose repetition and recurring endings make the language stick."
      },
      {
        "title": "Danka a Janka",
        "author": "Mária Ďuríčková",
        "min": "A1",
        "max": "A2",
        "kind": "Children",
        "why": "Everyday modern Slovak in short, episodic twin-sister stories with a real sense of completion."
      },
      {
        "title": "Short stories",
        "author": "Martin Kukučín",
        "min": "B1",
        "max": "B2",
        "kind": "Classic",
        "why": "Warm, humorous realist short stories of village life in concrete, easily pictured vocabulary."
      },
      {
        "title": "Slovenské rozprávky",
        "author": "Pavol Dobšinský",
        "min": "B1",
        "max": "B2",
        "kind": "Folk tales",
        "why": "Canonical Slovak folk tales with familiar archetypes, a genuine cultural reward at intermediate level."
      },
      {
        "title": "Hrdinovia",
        "author": "Božena Slančíková-Timrava",
        "min": "B2",
        "max": "B2",
        "kind": "Classic",
        "why": "A sharply ironic look at how the First World War touched an ordinary Slovak village."
      },
      {
        "title": "Pes na ceste",
        "author": "Pavel Vilikovský",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Clear, dangerously precise contemporary prose where the difficulty is thought and irony, not obscurity."
      },
      {
        "title": "Démon súhlasu",
        "author": "Dominik Tatarka",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "A sharp satire laying bare Stalinist thought control, literature with real intellectual and historical heft."
      },
      {
        "title": "Rozum",
        "author": "Rudolf Sloboda",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Raw, introspective, autobiographical prose about a frustrated intellectual, immediate and pulling."
      }
    ]
  },
  "hr": {
    "code": "hr",
    "intro": "Croatian is an FSI Category IV language (seven cases, pervasive verbal aspect), but its clean, fully phonetic Latin alphabet lets you read aloud from day one. Purpose-built graded readers are scarce, so the path leans on Mali princ, native children's classics, and folk tales.",
    "books": [
      {
        "title": "Mali princ",
        "author": "Antoine de Saint-Exupéry",
        "min": "A1",
        "max": "A2",
        "kind": "Classic",
        "why": "Familiar story and gentle vocabulary make it the cleanest introduction to Croatian case endings."
      },
      {
        "title": "Croatian Folk and Fairy Tales",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Folk tales",
        "why": "Repetition, predictable structure, and short self-contained units drill grammar into place."
      },
      {
        "title": "Čudnovate zgode šegrta Hlapića",
        "author": "Ivana Brlić-Mažuranić",
        "min": "A2",
        "max": "B1",
        "kind": "Children",
        "why": "A beloved national children's classic with clear sentences and shared cultural literacy."
      },
      {
        "title": "Priče iz davnine",
        "author": "Ivana Brlić-Mažuranić",
        "min": "B1",
        "max": "B2",
        "kind": "Folk tales",
        "why": "Self-contained Slavic-myth fairy tales, richer and more poetic, with vocabulary recycled across stories."
      },
      {
        "title": "Café Europa",
        "author": "Slavenka Drakulić",
        "min": "B1",
        "max": "B2",
        "kind": "Nonfiction",
        "why": "Clean journalistic essays on everyday post-communist life, an accessible bridge into adult prose."
      },
      {
        "title": "Anđeo u ofsajdu",
        "author": "Zoran Ferić",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "Finishable modern short stories in a distinctive voice that makes you keep reading."
      },
      {
        "title": "Naš čovjek na terenu",
        "author": "Robert Perišić",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "Contemporary setting, fast-moving plot, and present-day idiom you can reuse in conversation."
      },
      {
        "title": "Na Drini ćuprija",
        "author": "Ivo Andrić",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "Magnificent, unhurried Nobel storytelling with relatively classical, accessible syntax for its level."
      },
      {
        "title": "Sarajevski Marlboro",
        "author": "Miljenko Jergović",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Short wartime stories keep units manageable while their emotional power pulls you through."
      },
      {
        "title": "Povratak Filipa Latinovicza",
        "author": "Miroslav Krleža",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "The summit of ambitious Croatian prose, and mastering it is a real milestone."
      }
    ]
  },
  "bs": {
    "code": "bs",
    "intro": "Bosnian is an FSI Category IV language (around 1,100 hours, seven cases, pitch accent), written in a clean phonetic Latin alphabet you can read aloud on day one. Purpose-built graded readers barely exist, so it leans on Mali princ, folk tales, and the shared BCS canon.",
    "books": [
      {
        "title": "Mali princ",
        "author": "Antoine de Saint-Exupéry",
        "min": "A1",
        "max": "A2",
        "kind": "Classic",
        "why": "Familiar plot and short, clean sentences carry the gentle tone over dense grammar."
      },
      {
        "title": "Bosnian folk tales (narodne bajke and priče)",
        "author": "",
        "min": "A2",
        "max": "B1",
        "kind": "Folk tales",
        "why": "Repetitive formulas and predictable arcs in short, culturally authentic units you can finish."
      },
      {
        "title": "Sarajevski Marlboro",
        "author": "Miljenko Jergović",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "Short contemporary stories, the gentlest landing, in everyday language close to spoken Bosnian."
      },
      {
        "title": "Na Drini ćuprija",
        "author": "Ivo Andrić",
        "min": "B2",
        "max": "B2",
        "kind": "Classic",
        "why": "Clear, measured Nobel prose in self-contained chapters, rooted in Bosnian history and place."
      },
      {
        "title": "Derviš i smrt",
        "author": "Meša Selimović",
        "min": "B2",
        "max": "C1",
        "kind": "Literary",
        "why": "The most authentically Bosnian novel, steeped in Ottoman-heritage vocabulary and the Islamic-Bosnian world."
      },
      {
        "title": "Tvrđava",
        "author": "Meša Selimović",
        "min": "B2",
        "max": "C1",
        "kind": "Literary",
        "why": "Slightly more accessible and hopeful than Derviš i smrt, with the same Bosnian texture."
      }
    ]
  },
  "bg": {
    "code": "bg",
    "intro": "Bulgarian is written in Cyrillic and sits in the FSI hard-but-not-hardest tier (around 1,100 hours), but it is the only Slavic language that dropped noun cases, which makes it gentler on beginners. Dedicated graded readers are scarce, so the path leans on Малкият принц, folk tales, and Elin Pelin.",
    "books": [
      {
        "title": "Малкият принц",
        "author": "Antoine de Saint-Exupéry",
        "min": "A1",
        "max": "A2",
        "kind": "Classic",
        "why": "Because you remember the story, attention goes to recognizing letters and matching meaning."
      },
      {
        "title": "Приказен свят",
        "author": "Angel Karaliychev",
        "min": "A1",
        "max": "A2",
        "kind": "Folk tales",
        "why": "Predictable narrative shapes and recurring vocabulary teach the same words several times over."
      },
      {
        "title": "Ян Бибиян",
        "author": "Elin Pelin",
        "min": "A1",
        "max": "A2",
        "kind": "Children",
        "why": "Elin Pelin writes for children without writing down, so language stays natural but not dense."
      },
      {
        "title": "Rhymed children's poems",
        "author": "Ran Bosilek",
        "min": "A1",
        "max": "A2",
        "kind": "Poetry",
        "why": "Rhymed children's poems, wonderful for ear training and pronunciation when read aloud with audio."
      },
      {
        "title": "Village stories",
        "author": "Elin Pelin",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "Short, vivid, emotionally direct stories of village life, admired for their clarity."
      },
      {
        "title": "Старопланински легенди",
        "author": "Yordan Yovkov",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "Celebrated, painterly short stories with universal emotional logic, easy to find in translation."
      },
      {
        "title": "Под игото",
        "author": "Ivan Vazov",
        "min": "B2",
        "max": "C1",
        "kind": "Classic",
        "why": "The Bulgarian national novel, whose conspiracy, romance, and revolution build real reading stamina."
      },
      {
        "title": "Времеубежище",
        "author": "Georgi Gospodinov",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "The 2023 International Booker winner, with an acclaimed English translation for checking understanding."
      },
      {
        "title": "Физика на тъгата",
        "author": "Georgi Gospodinov",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Same author and celebrated translator, with a fragmented structure you can read in pieces."
      }
    ]
  },
  "mk": {
    "code": "mk",
    "intro": "Macedonian is an FSI Category IV language (around 1,100 hours) written in a 31-letter Cyrillic alphabet, but it lost its noun cases, so the grammar is gentler than Russian or Polish. As a small language its graded and bilingual material is thin, so the path leans on Малиот принц and Cepenkov's folk tales.",
    "books": [
      {
        "title": "Малиот принц",
        "author": "Antoine de Saint-Exupéry",
        "min": "A1",
        "max": "A2",
        "kind": "Classic",
        "why": "Short chapters, simple syntax, and a story you half-remember, with parallel editions easy to find."
      },
      {
        "title": "Macedonian folk tales",
        "author": "Marko Cepenkov",
        "min": "A2",
        "max": "B1",
        "kind": "Folk tales",
        "why": "Repetitive formulas and everyday vocabulary drill core grammar; short tales finish in one sitting."
      },
      {
        "title": "Poetry",
        "author": "Blaže Koneski",
        "min": "B1",
        "max": "B2",
        "kind": "Poetry",
        "why": "The clean codified standard from the man who shaped it, in short poems."
      },
      {
        "title": "Бели мугри",
        "author": "Kočo Racin",
        "min": "B1",
        "max": "B2",
        "kind": "Poetry",
        "why": "Folk-influenced rhythm and concrete, earthy imagery make Racin more graspable than most poetry."
      },
      {
        "title": "Село зад седумте јасени",
        "author": "Slavko Janevski",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "The first novel written in Macedonian, grounded in village life and concrete detail."
      },
      {
        "title": "Пиреј",
        "author": "Petre M. Andreevski",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Widely regarded as the masterpiece of modern Macedonian prose, powerful and historically rich."
      },
      {
        "title": "Сестрата на Зигмунд Фројд",
        "author": "Goce Smilevski",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Modern, intellectual, and universal, the easiest title here to pair with a translation."
      }
    ]
  },
  "sl": {
    "code": "sl",
    "intro": "Slovenian is a hard Slavic language (roughly 1,100 hours, six cases, verbal aspect, and the rare dual) written in the familiar Latin alphabet. It has very little learner-graded material, so the path leans on Mali princ, the folk classics, and Cankar, with parallel text carrying the unfamiliar endings.",
    "books": [
      {
        "title": "Mali princ",
        "author": "Antoine de Saint-Exupéry",
        "min": "A1",
        "max": "A2",
        "kind": "Classic",
        "why": "A plot you can lean on, with clean, standard phrasing rather than dialect."
      },
      {
        "title": "Slovenian folk tales",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Folk tales",
        "why": "A rich oral tradition retold in accessible language, with folk-tale repetition and rhythm."
      },
      {
        "title": "Pekarna Mišmaš",
        "author": "Svetlana Makarovič",
        "min": "A1",
        "max": "A2",
        "kind": "Children",
        "why": "Modern, playful everyday children's language in short forms, with memorable invented character names."
      },
      {
        "title": "Martin Krpan",
        "author": "Fran Levstik",
        "min": "A2",
        "max": "B1",
        "kind": "Classic",
        "why": "A national classic every Slovene knows, with folk-tale rhythm and a clear arc."
      },
      {
        "title": "Hlapec Jernej in njegova pravica",
        "author": "Ivan Cankar",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "A tight, powerful novella short enough to finish, in crafted, precise prose."
      },
      {
        "title": "Na klancu",
        "author": "Ivan Cankar",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "A fuller Cankar novel of poverty and family, a step up in density."
      },
      {
        "title": "Sonetni venec",
        "author": "France Prešeren",
        "min": "B2",
        "max": "C1",
        "kind": "Poetry",
        "why": "Even a few sonnets reach Slovenian's cultural heart and sharpen attention to every word."
      },
      {
        "title": "To noč sem jo videl",
        "author": "Drago Jančar",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Modern standard prose and a gripping five-narrator structure, well served in English translation."
      },
      {
        "title": "Nekropola",
        "author": "Boris Pahor",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Extraordinary clarity and moral weight, with a respected translation making parallel reading feasible."
      }
    ]
  },
  "lv": {
    "code": "lv",
    "intro": "Latvian is FSI Category III (around 1,100 hours), a Baltic language with seven cases and almost no cognates, and dedicated graded readers barely exist for under two million speakers. Beginners lean on the four-line dainas folk songs, folk tales, Stāraste picture books, and parallel translations of Mazais princis and later classics.",
    "books": [
      {
        "title": "Dainas",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Poetry",
        "why": "Extremely short four-line songs with concrete, high-frequency words and patterns that recur for natural repetition."
      },
      {
        "title": "Latvian folk tales (tautas pasakas)",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Folk tales",
        "why": "Repetitive structures and recurring formulas, giving real connected narrative at a manageable length."
      },
      {
        "title": "Zīļuks",
        "author": "Margarita Stāraste",
        "min": "A1",
        "max": "A2",
        "kind": "Children",
        "why": "Illustrations carry the meaning while short sentences and concrete subject matter build confidence."
      },
      {
        "title": "Mazais princis",
        "author": "Antoine de Saint-Exupéry",
        "min": "B1",
        "max": "B1",
        "kind": "Classic",
        "why": "A story you already know, in short chapters, the easiest Latvian book to read in parallel."
      },
      {
        "title": "Sprīdītis",
        "author": "Anna Brigadere",
        "min": "B1",
        "max": "B2",
        "kind": "Children",
        "why": "Genuine Latvian drama with a clear quest and mostly dialogue in shorter, natural sentences."
      },
      {
        "title": "Mātes piens",
        "author": "Nora Ikstena",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "Restrained, clear contemporary prose with short chapters and a high-quality translation for parallel reading."
      },
      {
        "title": "Nāves ēnā",
        "author": "Rūdolfs Blaumanis",
        "min": "B2",
        "max": "B2",
        "kind": "Classic",
        "why": "Grounded realism of everyday rural life, in stories short enough to read twice."
      },
      {
        "title": "Uguns un nakts",
        "author": "Rainis",
        "min": "C1",
        "max": "C1",
        "kind": "Poetry",
        "why": "Reworks folklore and the Lāčplēsis legend into a symbolic meditation on freedom and awakening."
      },
      {
        "title": "Zemdegas",
        "author": "Regīna Ezera",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Psychologically intense fiction where interiority and mood carry as much weight as plot."
      }
    ]
  },
  "lt": {
    "code": "lt",
    "intro": "Lithuanian sits in the FSI's higher difficulty bands, with seven cases and a pitch accent, and purpose-built graded readers are genuinely scarce. The path leans on folk tales, children's classics, Mažasis princas (The Little Prince), and parallel reading.",
    "books": [
      {
        "title": "Lietuvių liaudies pasakos",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Folk tales",
        "why": "A small, repeating cast of everyday nouns and simple past-tense narration drills the core forms beginners need."
      },
      {
        "title": "Kelionė į Tandadriką",
        "author": "Vytautė Žilinskaitė",
        "min": "A1",
        "max": "A2",
        "kind": "Children",
        "why": "Clean, modern prose with an imaginative plot whose narrative pull keeps you turning pages."
      },
      {
        "title": "Mažasis princas",
        "author": "Antoine de Saint-Exupéry",
        "min": "A1",
        "max": "A2",
        "kind": "Children",
        "why": "You likely know the story already, so your attention goes to how Lithuanian says it."
      },
      {
        "title": "Marti",
        "author": "Žemaitė",
        "min": "B1",
        "max": "B2",
        "kind": "Classic",
        "why": "Short, self-contained, and emotionally legible, with concrete household vocabulary that is high-frequency."
      },
      {
        "title": "Liūdna pasaka",
        "author": "Jonas Biliūnas",
        "min": "B1",
        "max": "B2",
        "kind": "Classic",
        "why": "Biliūnas writes with clarity and restraint, shorter sentences and a clear emotional through-line."
      },
      {
        "title": "Metai",
        "author": "Kristijonas Donelaitis",
        "min": "C1",
        "max": "C1",
        "kind": "Poetry",
        "why": "The first classic poem in Lithuanian and the cornerstone of the national literary canon."
      },
      {
        "title": "Anykščių šilelis",
        "author": "Antanas Baranauskas",
        "min": "C1",
        "max": "C1",
        "kind": "Poetry",
        "why": "Short, with an immediately graspable central image and musical verse that rewards reading aloud."
      },
      {
        "title": "Dievų miškas",
        "author": "Balys Sruoga",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Essentially contemporary literary Lithuanian, with a gripping narrative and dark, ironic momentum."
      },
      {
        "title": "Silva rerum",
        "author": "Kristina Sabaliauskaitė",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Modern, living Lithuanian by a contemporary master stylist, with the narrative drive of a bestseller."
      }
    ]
  },
  "fi": {
    "code": "fi",
    "intro": "Finnish is FSI Category IV (about 1,100 hours), Uralic with around fifteen cases, but the difficulty is comprehension, not decoding, since spelling is phonetic. It is unusually well served for reading: Finland's certified selkokieli easy readers give beginners full texts at controlled difficulty.",
    "books": [
      {
        "title": "Pikku prinssi",
        "author": "Antoine de Saint-Exupéry",
        "min": "A1",
        "max": "A2",
        "kind": "Classic",
        "why": "A familiar plot and simple original, with a certified Easy Finnish edition for the softest landing."
      },
      {
        "title": "Selkokieli easy readers",
        "author": "",
        "min": "A1",
        "max": "B1",
        "kind": "Graded reader",
        "why": "A whole category of certified plain-language books lets you read complete texts almost immediately."
      },
      {
        "title": "Muumit",
        "author": "Tove Jansson",
        "min": "A2",
        "max": "B1",
        "kind": "Children",
        "why": "Short, warm, episodic stories with concrete vocabulary, hugely available in print and audio."
      },
      {
        "title": "Koiramäki",
        "author": "Mauri Kunnas",
        "min": "A2",
        "max": "B1",
        "kind": "Children",
        "why": "Dense illustrations let you infer meaning and confirm it with concrete, thematically grouped words."
      },
      {
        "title": "Jäniksen vuosi",
        "author": "Arto Paasilinna",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "Plain, propulsive, episodic prose that pulls you forward, and genuinely manageable as a first novel."
      },
      {
        "title": "Tuntematon sotilas",
        "author": "Väinö Linna",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "Unmatched cultural depth and real exposure to the dialect and spoken registers cleaner prose hides."
      },
      {
        "title": "Puhdistus",
        "author": "Sofi Oksanen",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Contemporary literary Finnish and a gripping structure, a strong bridge from B2 into serious fiction."
      },
      {
        "title": "Seitsemän veljestä",
        "author": "Aleksis Kivi",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "The headwater of Finnish-language literature, connecting you to everything written downstream."
      }
    ]
  },
  "hu": {
    "code": "hu",
    "intro": "Hungarian is FSI Category IV (roughly 1,100 hours): Uralic, agglutinative, around eighteen cases and vowel harmony. Dedicated graded readers are scarce, so beginners lean on children's authors like Marék Veronika, the folk tales of Benedek Elek, and A kis herceg, with parallel text close to mandatory.",
    "books": [
      {
        "title": "Boribon",
        "author": "Marék Veronika",
        "min": "A1",
        "max": "A2",
        "kind": "Children",
        "why": "Short declarative sentences and concrete, high-frequency vocabulary, with situations that repeat so you can predict."
      },
      {
        "title": "Ha én felnőtt volnék",
        "author": "Janikovszky Éva",
        "min": "A2",
        "max": "A2",
        "kind": "Children",
        "why": "Conversational, humorous, everyday language, with a premise funny enough that adults reread it."
      },
      {
        "title": "Magyar mese- és mondavilág",
        "author": "Benedek Elek",
        "min": "A2",
        "max": "B1",
        "kind": "Folk tales",
        "why": "Folk tales repeat their phrases and arcs, drilling vocabulary and structure almost painlessly."
      },
      {
        "title": "A kis herceg",
        "author": "Antoine de Saint-Exupéry",
        "min": "A2",
        "max": "B1",
        "kind": "Classic",
        "why": "A story you already know, in short, clean prose that is philosophical without being baroque."
      },
      {
        "title": "Az ajtó",
        "author": "Magda Szabó",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "Psychologically dense yet sentence-by-sentence readable, with a celebrated translation for parallel reading."
      },
      {
        "title": "A gyertyák csonkig égnek",
        "author": "Sándor Márai",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "A single sustained voice you can ride for pages once you tune into Márai's register."
      },
      {
        "title": "Édes Anna",
        "author": "Dezső Kosztolányi",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "A stylist's stylist with compact sentences and social-realist vocabulary grounded in daily life."
      },
      {
        "title": "Sorstalanság",
        "author": "Imre Kertész",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "A deliberately flat, reporting voice that makes individual sentences more parseable than lyrical prose."
      }
    ]
  },
  "et": {
    "code": "et",
    "intro": "Estonian is FSI Category IV, with fourteen cases and vocabulary unlike anything in English, and unlike Finnish it has almost no learner-graded literature. Beginners lean on lihtne keel plain-language texts, Väike prints, and a few unusually accessible children's classics, with parallel translation filling the gap.",
    "books": [
      {
        "title": "lihtne keel plain-language texts",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Graded reader",
        "why": "Authentic, contemporary texts at controlled difficulty, the best staple where graded readers barely exist."
      },
      {
        "title": "Väike prints",
        "author": "Antoine de Saint-Exupéry",
        "min": "A2",
        "max": "B1",
        "kind": "Classic",
        "why": "Short, self-contained chapters and a familiar plot let you read for meaning before vocabulary."
      },
      {
        "title": "Naksitrallid",
        "author": "Eno Raud",
        "min": "B1",
        "max": "B1",
        "kind": "Children",
        "why": "Concrete vocabulary and clear, easy-to-picture situations, with an English translation for parallel support."
      },
      {
        "title": "Kevade",
        "author": "Oskar Luts",
        "min": "B2",
        "max": "B2",
        "kind": "Classic",
        "why": "A warm, funny shortcut into the Estonian cultural mind, its rural school setting grounding the vocabulary."
      },
      {
        "title": "Rehepapp ehk November",
        "author": "Andrus Kivirähk",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "Clean, vivid contemporary prose with a strong pull and delightful dark folklore."
      },
      {
        "title": "Mees, kes teadis ussisõnu",
        "author": "Andrus Kivirähk",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Witty, propulsive, and emotionally powerful, with a clear voice that makes the length manageable."
      },
      {
        "title": "Keisri hull",
        "author": "Jaan Kross",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "A master stylist's most accessible novel, its diary frame and moral puzzle pulling you through."
      },
      {
        "title": "Tõde ja õigus",
        "author": "A. H. Tammsaare",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "The definitive Estonian novel, the fullest portrait of the national character and history."
      }
    ]
  },
  "tr": {
    "code": "tr",
    "intro": "Turkish is FSI Category IV (about 1,100 hours), yet one of the easiest hard languages to start reading: Latin alphabet, near-phonetic spelling, ruthlessly regular grammar. Purpose-built material is decent, from Olly Richards's stories to the Yedi İklim Türkçe series, so the difficulty lives in agglutination, not decoding.",
    "books": [
      {
        "title": "Küçük Prens",
        "author": "Antoine de Saint-Exupéry",
        "min": "A1",
        "max": "A2",
        "kind": "Classic",
        "why": "You likely know the story, so you read for recognition while the grammar reveals itself."
      },
      {
        "title": "Yedi İklim Türkçe",
        "author": "",
        "min": "A1",
        "max": "C1",
        "kind": "Graded reader",
        "why": "Specialists sequence vocabulary and grammar so A1 texts use only structures you have already met."
      },
      {
        "title": "Short Stories in Turkish for Beginners",
        "author": "Olly Richards",
        "min": "A2",
        "max": "B1",
        "kind": "Graded reader",
        "why": "Every chapter brings glossaries, a plot summary, and comprehension questions, so beginners read without drowning."
      },
      {
        "title": "Nasreddin Hoca tales",
        "author": "",
        "min": "B1",
        "max": "B2",
        "kind": "Folk tales",
        "why": "Tiny tales you finish in minutes, with humor that pushes you through the hard sentence."
      },
      {
        "title": "Turkish Stories from Four Decades",
        "author": "Aziz Nesin",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "Everyday offices and neighbors mean everyday vocabulary, and the satire keeps you moving."
      },
      {
        "title": "Kürk Mantolu Madonna",
        "author": "Sabahattin Ali",
        "min": "B2",
        "max": "B2",
        "kind": "Classic",
        "why": "Clear, unshowy prose and a universal love story, with a respected translation for parallel reading."
      },
      {
        "title": "İnce Memed",
        "author": "Yaşar Kemal",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Strong narrative drive and a vivid rural Anatolia that Istanbul-centered books never show."
      },
      {
        "title": "Benim Adım Kırmızı",
        "author": "Orhan Pamuk",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "A world-class Nobel laureate's novel you can finally experience in the original Turkish."
      }
    ]
  },
  "az": {
    "code": "az",
    "intro": "Azerbaijani (Azərbaycan dili) is a Turkic language in the harder tier for English speakers (hundreds of hours), written since 1991 in a near-phonetic Latin alphabet, with no gender but agglutinative grammar, vowel harmony, and verb-final word order. Purpose-built graded readers are scarce, so the path leans on folk tales like Məlik Məmməd, the bite-sized Molla Nəsrəddin anecdotes, Balaca Şahzadə (The Little Prince), and Çingiz Abdullayev's page-turning thrillers.",
    "books": [
      {
        "title": "Azərbaycan nağılları",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Folk tales",
        "why": "Folk tales built from simple, repetitive patterns and a small, recurring core vocabulary."
      },
      {
        "title": "Molla Nəsrəddin lətifələri",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Folk tales",
        "why": "Tiny comic anecdotes, each a complete text of a few sentences, for quick early wins."
      },
      {
        "title": "Balaca Şahzadə",
        "author": "Antoine de Saint-Exupéry",
        "min": "A2",
        "max": "B1",
        "kind": "Children",
        "why": "The Little Prince, its familiar plot freeing your attention for the language itself."
      },
      {
        "title": "Drongo series",
        "author": "Çingiz Abdullayev",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "Çingiz Abdullayev's page-turning spy thrillers, clear prose and momentum that carry you book after book."
      },
      {
        "title": "Poçt qutusu",
        "author": "Cəlil Məmmədquluzadə",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "A canonical 1903 short story famous for its clarity, a real first literary read."
      },
      {
        "title": "Ağ qoç, qara qoç",
        "author": "Anar",
        "min": "B2",
        "max": "C1",
        "kind": "Literary",
        "why": "Anar's contemporary allegorical novella, a satisfying step up from genre fiction toward literary prose."
      },
      {
        "title": "Hacı Qara",
        "author": "Mirzə Fətəli Axundov",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "A lively nineteenth-century comedy, almost all dialogue, skewering greed and pretension."
      },
      {
        "title": "Anamın kitabı",
        "author": "Cəlil Məmmədquluzadə",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "A moving tragicomedy about the mother tongue, its dramatic structure scaffolding the language."
      },
      {
        "title": "Kitabi-Dədə Qorqud",
        "author": "",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "The great Oghuz Turkic epic, archaic and monumental, a destination text read with translation."
      }
    ]
  },
  "el": {
    "code": "el",
    "intro": "Modern Greek sits in the FSI hard tier (about 1,100 hours), with the alphabet a real two to four week prerequisite. Graded material is decent for its size: the Deltos Easy Readers plus Aesop's fables give beginners a genuine on-ramp before Markaris and Kazantzakis.",
    "books": [
      {
        "title": "Greek Easy Readers",
        "author": "",
        "min": "A1",
        "max": "C1",
        "kind": "Graded reader",
        "why": "Original graded stories from Deltos with built-in Greek, English, French, and German glosses control every variable."
      },
      {
        "title": "Μύθοι του Αισώπου",
        "author": "Aesop",
        "min": "A2",
        "max": "B1",
        "kind": "Folk tales",
        "why": "Plots you already know do half the comprehension work, and each fable is short enough to reread."
      },
      {
        "title": "Ο μικρός πρίγκιπας",
        "author": "Antoine de Saint-Exupéry",
        "min": "A2",
        "max": "B1",
        "kind": "Classic",
        "why": "Deceptively simple prose and short chapters, gentle enough for your first non-graded Greek."
      },
      {
        "title": "Τα τρία μικρά λυκάκια",
        "author": "Eugene Trivizas",
        "min": "B1",
        "max": "B2",
        "kind": "Children",
        "why": "A first-rate native author writing living, rhythmic Greek that trains your ear for its music."
      },
      {
        "title": "Inspector Charitos crime novels",
        "author": "Petros Markaris",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "A plot engine pulls you through, recycling high-frequency vocabulary steeped in contemporary Athens."
      },
      {
        "title": "Βίος και Πολιτεία του Αλέξη Ζορμπά",
        "author": "Nikos Kazantzakis",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Rich, muscular, philosophically charged Greek, the summit a serious learner climbs toward."
      },
      {
        "title": "Ιθάκη",
        "author": "Constantine Cavafy",
        "min": "C1",
        "max": "C1",
        "kind": "Poetry",
        "why": "Famously plain language and short poems make Cavafy far more accessible than his stature suggests."
      }
    ]
  },
  "vi": {
    "code": "vi",
    "intro": "Vietnamese is FSI Category IV (about 1,100 hours), yet the difficulty is in the six tones, not the Latin-based chữ Quốc ngữ script you can decode on day one. Graded material is thin, so beginners lean on bilingual children's books, the folk tale Tấm Cám, and children's classics, always read with native audio so the tone marks become audible.",
    "books": [
      {
        "title": "Bilingual children's books",
        "author": "",
        "min": "A1",
        "max": "A1",
        "kind": "Children",
        "why": "Short, illustrated, present-tense stories with English on the page and repetition that drills the tones."
      },
      {
        "title": "Tấm Cám",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Folk tales",
        "why": "Vietnam's Cinderella, whose familiar plot scaffolds comprehension while its narrative past tense recurs."
      },
      {
        "title": "Dế Mèn phiêu lưu ký",
        "author": "Tô Hoài",
        "min": "A2",
        "max": "B1",
        "kind": "Children",
        "why": "The most-translated Vietnamese book, a children's classic with simple sentences in illustrated bilingual editions."
      },
      {
        "title": "Cho tôi xin một vé đi tuổi thơ",
        "author": "Nguyễn Nhật Ánh",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "Warm, episodic childhood vignettes with short chapters and an authoritative English translation for parallel reading."
      },
      {
        "title": "Tôi thấy hoa vàng trên cỏ xanh",
        "author": "Nguyễn Nhật Ánh",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "Short dated chapters and concrete rural vocabulary, with a celebrated film to anchor comprehension."
      },
      {
        "title": "Mắt biếc",
        "author": "Nguyễn Nhật Ánh",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "A bittersweet love story whose longer narrative builds stamina, backed by a hugely popular film."
      },
      {
        "title": "Nỗi buồn chiến tranh",
        "author": "Bảo Ninh",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "The celebrated war novel, mature literary fiction best read beside its acclaimed English version."
      },
      {
        "title": "Cánh đồng bất tận",
        "author": "Nguyễn Ngọc Tư",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "A compact, unflinching Mekong Delta story, serious contemporary literature in a finishable dose."
      },
      {
        "title": "Truyện Kiều",
        "author": "Nguyễn Du",
        "min": "C1",
        "max": "C1",
        "kind": "Poetry",
        "why": "The crown of Vietnamese literature, a 3,254-line classical poem to treat as the destination."
      }
    ]
  },
  "id": {
    "code": "id",
    "intro": "Indonesian is FSI Category III (about 900 hours, the same band as German), and it gives readers a real ladder of material: graded readers, the Si Kancil folk tales, contemporary fiction, then a deep literary canon. The main work is its affixation system, which reading absorbs in context better than any grammar table.",
    "books": [
      {
        "title": "Learn Indonesian with Beginner Stories",
        "author": "",
        "min": "A1",
        "max": "A1",
        "kind": "Graded reader",
        "why": "An A1 interlinear story that prints an English gloss under each word, so you never stall."
      },
      {
        "title": "First Indonesian / Malay Reader for Beginners",
        "author": "Annisa Pranata",
        "min": "A1",
        "max": "A2",
        "kind": "Graded reader",
        "why": "A bilingual graded reader that reuses earlier words and adds only about thirty new ones per chapter."
      },
      {
        "title": "Si Kancil",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Folk tales",
        "why": "Short, simple mouse-deer fables with everyday, physical vocabulary that Indonesians know by heart."
      },
      {
        "title": "Children's picture books",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Children",
        "why": "Well-illustrated storybooks where the pictures carry meaning and the sentences stay short."
      },
      {
        "title": "Mari Membaca, Bahasa Indonesia",
        "author": "Iman Partoredjo",
        "min": "A2",
        "max": "B1",
        "kind": "Graded reader",
        "why": "Graded reading passages around family, school, and community life for beginners moving toward intermediate."
      },
      {
        "title": "Pangeran Kecil",
        "author": "",
        "min": "B1",
        "max": "B2",
        "kind": "Children",
        "why": "The Little Prince in Indonesian, a familiar story that lets you read for language, not plot."
      },
      {
        "title": "Young adult and popular fiction",
        "author": "",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "Modern, dialogue-driven teenlit that bridges graded readers and literary novels in a living register."
      },
      {
        "title": "Laskar Pelangi",
        "author": "Andrea Hirata",
        "min": "B2",
        "max": "C1",
        "kind": "Literary",
        "why": "Hirata's beloved novel of ten poor children chasing school, with an English translation for parallel reading."
      },
      {
        "title": "Bumi Manusia",
        "author": "Pramoedya Ananta Toer",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Pramoedya's canonical colonial-era novel, with Max Lane's English translation making parallel reading possible even here."
      },
      {
        "title": "Cantik Itu Luka",
        "author": "Eka Kurniawan",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Kurniawan's sweeping, history-spanning debut, propulsive and inventive, with a respected English translation alongside."
      },
      {
        "title": "Lelaki Harimau",
        "author": "Eka Kurniawan",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Kurniawan's shorter, more focused novel, a more manageable first taste of literary Indonesian."
      }
    ]
  },
  "ms": {
    "code": "ms",
    "intro": "Malay (Bahasa Melayu) is one of the most accessible languages for English speakers, with no tones, no gender, no verb conjugation, and a Latin script, but purpose-built graded readers are scarce. Readers lean on Sang Kancil folk tales, bilingual children's books, popular fiction, and closely related Indonesian material.",
    "books": [
      {
        "title": "Sang Kancil",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Folk tales",
        "why": "Short mouse-deer trickster tales with concrete vocabulary and repetitive sentences in children's retellings."
      },
      {
        "title": "Adakah Saya Kecil?",
        "author": "Philipp Winterberg",
        "min": "A1",
        "max": "A2",
        "kind": "Children",
        "why": "A bilingual Malay-English picture book with genuinely parallel text and controlled, repetitive vocabulary."
      },
      {
        "title": "First Indonesian / Malay Reader for Beginners",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Graded reader",
        "why": "A bilingual graded reader of short, simple passages with English alongside for support."
      },
      {
        "title": "Ombak Rindu",
        "author": "Fauziah Ashari",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "A hit romance in accessible modern Malay, its familiar genre carrying you forward."
      },
      {
        "title": "Buku FIXI",
        "author": "",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "Contemporary urban crime, horror, and thrillers in the colloquial Malay people speak today."
      },
      {
        "title": "Salina",
        "author": "A. Samad Said",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "A landmark modern novel, poetic but realistic, its short-story intensity more approachable than the epics."
      },
      {
        "title": "Interlok",
        "author": "Abdullah Hussain",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "The intertwined story of Malaysia's Malay, Chinese, and Indian communities in plainer prose."
      },
      {
        "title": "Ranjau Sepanjang Jalan",
        "author": "Shahnon Ahmad",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "A tight, powerful farming tragedy with a respected English translation to read alongside."
      },
      {
        "title": "Melayu",
        "author": "Usman Awang",
        "min": "C1",
        "max": "C1",
        "kind": "Poetry",
        "why": "Emotionally direct, widely anthologised verse from the People's Poet, much of it translated."
      },
      {
        "title": "Hikayat Hang Tuah",
        "author": "",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "The classical Malay epic of the warrior Hang Tuah, gripping but written in archaic language."
      }
    ]
  },
  "is": {
    "code": "is",
    "intro": "Icelandic is an FSI Category IV language with the full Old Norse inflection system (four cases, three genders) and a purist vocabulary, and it has very few purpose-built graded readers. The path leans on familiar children's books, translated crime fiction for parallel reading, and, at the top, the sagas.",
    "books": [
      {
        "title": "Litli prinsinn",
        "author": "Antoine de Saint-Exupéry",
        "min": "A2",
        "max": "A2",
        "kind": "Children",
        "why": "Short sentences and concrete vocabulary in a story you likely already know, the single best on-ramp."
      },
      {
        "title": "Sagan af bláa hnettinum",
        "author": "Andri Snær Magnason",
        "min": "A2",
        "max": "B1",
        "kind": "Children",
        "why": "An award-winning children's story with everyday vocabulary and clean sentences, imaginative enough to engage an adult."
      },
      {
        "title": "Mýrin",
        "author": "Arnaldur Indriðason",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "Clear, propulsive prose and short chapters in the modern, everyday Icelandic you actually want to learn."
      },
      {
        "title": "Þriðja táknið",
        "author": "Yrsa Sigurðardóttir",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "A second crime novel with slightly richer sentences, a natural step up in the same comforting genre."
      },
      {
        "title": "Indjáninn",
        "author": "Jón Gnarr",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "A warm, funny, conversational voice in a child's-eye autobiography grounded in everyday Icelandic life."
      },
      {
        "title": "Sjálfstætt fólk",
        "author": "Halldór Laxness",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Some of the finest prose in the language, a Nobel laureate's epic with a faithful English translation."
      },
      {
        "title": "Njáls saga",
        "author": "",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "Icelandic changed so little that the greatest medieval family saga is genuinely readable today."
      }
    ]
  },
  "af": {
    "code": "af",
    "intro": "Afrikaans is an FSI Category I language (the easiest tier for English speakers), with strikingly simple grammar (no conjugation by person, no gender, no cases) and heavy vocabulary overlap with English and Dutch. Purpose-built graded readers are scarce, but the gentle grammar lets you climb from Die Klein Prinsie and children's classics to real adult fiction fast.",
    "books": [
      {
        "title": "Liewe Heksie",
        "author": "Verna Vels",
        "min": "A1",
        "max": "A2",
        "kind": "Children",
        "why": "Short sentences, everyday vocabulary, and gentle repetition let you absorb how Afrikaans is built."
      },
      {
        "title": "Die Klein Prinsie",
        "author": "Antoine de Saint-Exupéry",
        "min": "A2",
        "max": "A2",
        "kind": "Children",
        "why": "You likely know the story, freeing attention for how Afrikaans says it; short, concrete sentences."
      },
      {
        "title": "Trompie",
        "author": "Topsy Smith",
        "min": "A2",
        "max": "A2",
        "kind": "Children",
        "why": "Fuller than the simplest books, with recurring characters that recycle vocabulary and an adventurous pull."
      },
      {
        "title": "Infanta",
        "author": "Deon Meyer",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "Clean, contemporary, fast-moving Afrikaans, heavy on dialogue, with an English translation for parallel reading."
      },
      {
        "title": "Griet skryf 'n sprokie",
        "author": "Marita van der Vyver",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "Contemporary, intimate first-person writing about everyday life, funny and direct, with self-contained fairy-tale passages."
      },
      {
        "title": "Kringe in 'n bos",
        "author": "Dalene Matthee",
        "min": "B2",
        "max": "C1",
        "kind": "Literary",
        "why": "Vivid, immersive prose with strong narrative pull, and the author's own faithful English translation."
      },
      {
        "title": "Toorberg",
        "author": "Etienne van Heerden",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Afrikaans at full literary power, layering ghosts and the living so names and themes deepen as you go."
      }
    ]
  },
  "ca": {
    "code": "ca",
    "intro": "Catalan sits on the easier end of the Romance languages if you already read Spanish or French, which hand you most of the vocabulary on sight, and its spelling is regular. Beginner textbooks and graded readers are thin, though, so the path leans on folk tales, El petit príncep, children's classics, and parallel reading.",
    "books": [
      {
        "title": "Rondalles",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Folk tales",
        "why": "Short, self-contained tales with repetitive fairy-tale structure and concrete, everyday vocabulary."
      },
      {
        "title": "El petit príncep",
        "author": "Antoine de Saint-Exupéry",
        "min": "A1",
        "max": "A2",
        "kind": "Children",
        "why": "You already know the plot, which frees capacity for the language; everyday vocabulary, short and finishable."
      },
      {
        "title": "El zoo d'en Pitus",
        "author": "Sebastià Sorribas",
        "min": "A2",
        "max": "A2",
        "kind": "Children",
        "why": "Written for young Catalan readers, so the grammar is clean, the vocabulary concrete, and the chapters short."
      },
      {
        "title": "El perquè de tot plegat",
        "author": "Quim Monzó",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "Bite-sized stories you finish in one sitting, in clean, modern, contemporary Catalan."
      },
      {
        "title": "La plaça del Diamant",
        "author": "Mercè Rodoreda",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "Everyday, domestic vocabulary and immense emotional power carry you through the central modern Catalan novel."
      },
      {
        "title": "El quadern gris",
        "author": "Josep Pla",
        "min": "C1",
        "max": "C1",
        "kind": "Nonfiction",
        "why": "Precise, model sentences in short diary entries observing ordinary early-twentieth-century Catalan life."
      },
      {
        "title": "Jo confesso",
        "author": "Jaume Cabré",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Once you adapt to Cabré's voice, hundreds of pages of consistent style do wonders for fluency."
      },
      {
        "title": "Solitud",
        "author": "Víctor Català",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "A compact novel of real psychological depth and atmosphere, with rich descriptive nature vocabulary."
      }
    ]
  },
  "gl": {
    "code": "gl",
    "intro": "Galician gives readers who know Spanish or Portuguese a large head-start (it is a sister language to Portuguese), but the graded readers that exist for bigger languages barely exist, so you read real native books earlier than usual. The path leans on O Principiño (The Little Prince), folk tales, children's and young-adult titles, and parallel text with audio.",
    "books": [
      {
        "title": "O Principiño",
        "author": "Antoine de Saint-Exupéry",
        "min": "A1",
        "max": "A2",
        "kind": "Children",
        "why": "The prose is short, the vocabulary concrete and emotional, and you probably already know the story."
      },
      {
        "title": "Contos populares da provincia de Lugo",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Folk tales",
        "why": "Short, self-contained tales built on familiar folklore logic, in plain spoken Galician that recurs."
      },
      {
        "title": "Escarlatina, a cociñeira defunta",
        "author": "Ledicia Costas",
        "min": "A2",
        "max": "B1",
        "kind": "Children",
        "why": "Clear, contemporary Galician with present-day vocabulary and a fast, darkly funny plot."
      },
      {
        "title": "Memorias dun neno labrego",
        "author": "Xosé Neira Vilas",
        "min": "B1",
        "max": "B1",
        "kind": "Literary",
        "why": "Brief, self-contained chapters in a plain, direct voice, with emotional clarity that carries you through."
      },
      {
        "title": "¿Que me queres, amor?",
        "author": "Manuel Rivas",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "Self-contained short stories in an everyday but poetic register, easy to reread until they click."
      },
      {
        "title": "O lapis do carpinteiro",
        "author": "Manuel Rivas",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "Literary Galician at its most readable, lyrical but not dense, with a plot strong enough to pull you forward."
      },
      {
        "title": "Cantares gallegos",
        "author": "Rosalía de Castro",
        "min": "C1",
        "max": "C1",
        "kind": "Poetry",
        "why": "The foundational poems that revived Galician as a literary language, immensely rewarding to read."
      },
      {
        "title": "Cousas",
        "author": "Castelao",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Short prose pieces each paired with a drawing, accessible in length and rich in irony and tenderness."
      },
      {
        "title": "Merlín e familia",
        "author": "Álvaro Cunqueiro",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Luminous, fantastical prose full of fables and marvels, one of the glories of Galician literature."
      }
    ]
  },
  "kk": {
    "code": "kk",
    "intro": "Kazakh is a Turkic language the FSI places in its harder tiers (roughly Category III to IV), and graded readers barely exist. Beginners lean on Aldar Köse folk tales, the Kazakh Little Prince, and classics that also exist in English for parallel reading.",
    "books": [
      {
        "title": "Алдар Көсе ертегілері (The Tales of Aldar Köse)",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Folk tales",
        "why": "Short trickster tales whose repeating structure recycles everyday vocabulary a beginner meets again and again."
      },
      {
        "title": "Кішкентай ханзада (The Little Prince)",
        "author": "Antoine de Saint-Exupéry",
        "min": "A2",
        "max": "B1",
        "kind": "Children",
        "why": "Short declarative sentences and a story you already know make it the gentlest way into the language."
      },
      {
        "title": "Менің атым Қожа (My Name Is Kozha)",
        "author": "Berdibek Sokpakbayev",
        "min": "B1",
        "max": "B1",
        "kind": "Children",
        "why": "A mischievous schoolboy's plain, funny first-person voice makes this beloved novella far more accessible than its reputation."
      },
      {
        "title": "Абай өлеңдері (The Poems of Abai)",
        "author": "Abai Qunanbaiuly",
        "min": "B2",
        "max": "B2",
        "kind": "Poetry",
        "why": "Short, vivid lyric poems you can reread many times, absorbing the cultural bedrock in small doses."
      },
      {
        "title": "Қара сөздер (The Book of Words)",
        "author": "Abai Qunanbaiuly",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Forty-five self-contained prose meditations you can read one at a time, with a full English translation online."
      },
      {
        "title": "Көшпенділер (The Nomads)",
        "author": "Ilyas Yesenberlin",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "The narrative drive of historical fiction pulls you through, and an English translation makes parallel reading possible."
      },
      {
        "title": "Абай жолы (Abai's Way / The Path of Abai)",
        "author": "Mukhtar Auezov",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "The multi-volume summit of Kazakh prose, an encyclopedic epic of nineteenth-century steppe life."
      }
    ]
  },
  "uz": {
    "code": "uz",
    "intro": "Uzbek sits around the FSI's Category III to IV band, and purpose-built graded readers are scarce. Beginners choose the Latin script and lean on Oʻzbek xalq ertaklari folk tales, Nasriddin Afandi anecdotes, and the Uzbek Little Prince, with parallel English for the classics.",
    "books": [
      {
        "title": "Oʻzbek xalq ertaklari (Uzbek Folk Tales)",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Folk tales",
        "why": "Simple, repetitive sentence patterns and concrete nouns, with bilingual editions to check yourself sentence by sentence."
      },
      {
        "title": "Nasriddin Afandi latifalari (The Anecdotes of Nasriddin Afandi)",
        "author": "",
        "min": "A2",
        "max": "B1",
        "kind": "Folk tales",
        "why": "Tiny one-paragraph anecdotes ending in a clever twist, perfect for building momentum a textbook cannot."
      },
      {
        "title": "Kichkina shahzoda (The Little Prince)",
        "author": "Antoine de Saint-Exupéry",
        "min": "A2",
        "max": "B1",
        "kind": "Children",
        "why": "Familiarity is a powerful crutch: you map the Uzbek onto a plot you already understand."
      },
      {
        "title": "Dunyoning ishlari (The Ways of the World)",
        "author": "Oʻtkir Hoshimov",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "A warm cycle of short interlinked stories about family, with a 2024 English translation for parallel reading."
      },
      {
        "title": "Oʻtkan kunlar (Bygone Days)",
        "author": "Abdulla Qodiriy",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "The first Uzbek novel, a dramatic love story now readable beside Mark Reese's careful English translation."
      },
      {
        "title": "Kecha va kunduz (Night and Day)",
        "author": "Choʻlpon",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "One of the language's most acclaimed stylists, with a recent scholarly English translation supporting parallel reading."
      },
      {
        "title": "Xamsa",
        "author": "Alisher Navoiy",
        "min": "C1",
        "max": "C1",
        "kind": "Poetry",
        "why": "The fifteenth-century founder of Uzbek literature, written in classical Chagatai, a distant summit to admire."
      }
    ]
  },
  "tl": {
    "code": "tl",
    "intro": "Filipino (Tagalog) is FSI Category III (about 1,100 hours), but the grammar carries most of that difficulty while the reading is far friendlier, helped by the Latin alphabet, phonetic spelling, and heavy Spanish and English loanwords. Dedicated graded readers are scarce, so you lean on Adarna House children's books, bilingual editions, folk tales, and Bob Ong's everyday Taglish before the national novels.",
    "books": [
      {
        "title": "Adarna House children's books",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Children",
        "why": "Short, illustrated contemporary Filipino from the country's largest children's publisher, many in bilingual editions."
      },
      {
        "title": "Bilingual and dual-language editions",
        "author": "",
        "min": "A1",
        "max": "B1",
        "kind": "Parallel text",
        "why": "Filipino facing English on the page, the closest thing to a true beginner reader."
      },
      {
        "title": "Mga Kuwento ni Lola Basyang",
        "author": "Severino Reyes",
        "min": "B1",
        "max": "B2",
        "kind": "Folk tales",
        "why": "Short, self-contained Filipino fairy tales with immense cultural payload, best in modern retellings."
      },
      {
        "title": "ABNKKBSNPLAko?!",
        "author": "Bob Ong",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "Bob Ong's funny school memoir in everyday Taglish, the best bridge to spoken Filipino."
      },
      {
        "title": "Bakit Baligtad Magbasa ng Libro ang mga Pilipino?",
        "author": "Bob Ong",
        "min": "B1",
        "max": "B2",
        "kind": "Nonfiction",
        "why": "Short, standalone humorous essays on Filipino life, teaching culture and language at once."
      },
      {
        "title": "Ibong Adarna",
        "author": "",
        "min": "B1",
        "max": "C1",
        "kind": "Classic",
        "why": "The fairy-tale quest every Filipino studies, propulsive in accessible modern prose retellings."
      },
      {
        "title": "Noli Me Tángere",
        "author": "José Rizal",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "The national novel of colonial abuses, dense but navigable in a modern Filipino translation."
      },
      {
        "title": "El Filibusterismo",
        "author": "José Rizal",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "Rizal's darker sequel, a cultural rite of passage read in Filipino translation."
      },
      {
        "title": "Dekada '70",
        "author": "Lualhati Bautista",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "A modern novel written in Filipino, its intimate family frame grounding martial-law history."
      }
    ]
  },
  "mn": {
    "code": "mn",
    "intro": "Mongolian is an FSI Category IV language for English speakers, and graded readers are genuinely scarce. The path leans on folk tales, the Mongolian Little Prince, the founders of modern prose, and the national epic read in parallel with English.",
    "books": [
      {
        "title": "Монгол ардын үлгэр (Mongolian Folk Tales)",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Folk tales",
        "why": "Short, repetitive tales built around concrete steppe life, with English retellings to check your understanding."
      },
      {
        "title": "Бяцхан хунтайж (The Little Prince)",
        "author": "Antoine de Saint-Exupéry",
        "min": "A2",
        "max": "B1",
        "kind": "Children",
        "why": "A gentle, familiar story where the same handful of words recur, so each chapter reinforces the last."
      },
      {
        "title": "Миний нутаг (My Homeland)",
        "author": "D. Natsagdorj",
        "min": "B1",
        "max": "B2",
        "kind": "Poetry",
        "why": "The father of modern Mongolian literature; his short patriotic poem and stories are clear and manageable."
      },
      {
        "title": "Short stories",
        "author": "Sengiin Erdene",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "The pioneer of the modern Mongolian short story, psychologically rich yet short enough to finish."
      },
      {
        "title": "Тунгалаг Тамир (The Clear Tamir)",
        "author": "Ch. Lodoidamba",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "A masterpiece of twentieth-century Mongolian prose following two brothers through revolution, with translations in several languages."
      },
      {
        "title": "Үүрийн туяа (Rays of Dawn)",
        "author": "B. Rinchen",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "A trilogy that deliberately preserves the archaic language and the vanishing pre-revolutionary world, demanding but rewarding."
      },
      {
        "title": "Алтан Овоо (Altan Ovoo / Golden Hill)",
        "author": "G. Mend-Ooyo",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "A contemporary meditation on nomadic culture, translated into English by Simon Wickham-Smith for genuine parallel reading."
      },
      {
        "title": "Монголын нууц товчоо (The Secret History of the Mongols)",
        "author": "",
        "min": "C1",
        "max": "C1",
        "kind": "Classic",
        "why": "The thirteenth-century foundational chronicle of Genghis Khan, a summit best read in parallel with English."
      }
    ]
  },
  "ka": {
    "code": "ka",
    "intro": "Georgian sits in the FSI's harder tiers, a Kartvelian language unrelated to anything you know, written in its own Mkhedruli script. Graded readers are almost nonexistent, so you lean on folk tales, the Georgian Little Prince, and beloved modern authors like Dumbadze, always with a parallel translation.",
    "books": [
      {
        "title": "ქართული ხალხური ზღაპრები (Georgian Folk Tales)",
        "author": "",
        "min": "A2",
        "max": "B1",
        "kind": "Folk tales",
        "why": "Georgia's oldest and most welcoming reading, short tales with familiar fairy-tale logic you can reread."
      },
      {
        "title": "ნაცარქექია (Natsarkekia)",
        "author": "",
        "min": "A2",
        "max": "B1",
        "kind": "Folk tales",
        "why": "The best-loved trickster of Georgian folklore, an ash-raking ne'er-do-well who outwits giants and devils."
      },
      {
        "title": "პატარა უფლისწული (The Little Prince)",
        "author": "Antoine de Saint-Exupéry",
        "min": "A2",
        "max": "B1",
        "kind": "Children",
        "why": "Short, gentle, declarative sentences and a story you likely know, the standard bridge into real Georgian prose."
      },
      {
        "title": "მე ვხედავ მზეს (I See the Sun)",
        "author": "Nodar Dumbadze",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "Warm, lyrical, emotionally legible prose about a village boy, with a 1968 English translation."
      },
      {
        "title": "მე, ბებია, ილიკო და ილარიონი (Granny, Iliko, Illarion, and I)",
        "author": "Nodar Dumbadze",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "Warm, episodic comedy with recurring characters whose banter trains your ear for spoken Georgian."
      },
      {
        "title": "მგზავრობა ყარაბაღში (Journey to Karabakh)",
        "author": "Aka Morchiladze",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "Modern, urban, propulsive Tbilisi Georgian, with a careful English translation for checking yourself."
      },
      {
        "title": "კუკარაჩა (Kukaracha)",
        "author": "Nodar Dumbadze",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Darker, morally complex late Dumbadze, the ideal bridge from his village novels to the demanding canon."
      },
      {
        "title": "ვეფხისტყაოსანი (The Knight in the Panther's Skin)",
        "author": "Shota Rustaveli",
        "min": "C1",
        "max": "C1",
        "kind": "Poetry",
        "why": "Georgia's twelfth-century national epic in verse, the summit, read a few quatrains at a time."
      }
    ]
  },
  "hy": {
    "code": "hy",
    "intro": "Armenian is an FSI Category IV language with seven cases and its own 39-letter alphabet, but the script is phonetic and learnable in a week or two. Graded readers barely exist, so you start with the Little Prince and folk tales, then lean on Tumanyan and other accessible authors with parallel English.",
    "books": [
      {
        "title": "Փոքրիկ իշխանը (The Little Prince)",
        "author": "Antoine de Saint-Exupéry",
        "min": "A2",
        "max": "A2",
        "kind": "Children",
        "why": "Short sentences, concrete vocabulary, and a familiar plot let the new script settle in as you read."
      },
      {
        "title": "Հայ ժողովրդական հեքիաթներ (Armenian Folk Tales)",
        "author": "",
        "min": "A2",
        "max": "B1",
        "kind": "Folk tales",
        "why": "Repetitive, formulaic openings and everyday words (kings, farmers, clever fools) make them the most welcoming reading."
      },
      {
        "title": "Հեքիաթներ (Fairy Tales, including Քաջ Նազար and Սուտասանը)",
        "author": "Hovhannes Tumanyan",
        "min": "B1",
        "max": "B1",
        "kind": "Folk tales",
        "why": "The national poet's clear, musical retellings of folk tales like Brave Nazar, endlessly reread and polished."
      },
      {
        "title": "Գիքոր (Gikor)",
        "author": "Hovhannes Tumanyan",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "A linear, daily-life short story with a powerful emotional arc, a cornerstone of Armenian school reading."
      },
      {
        "title": "Անուշ (Anush)",
        "author": "Hovhannes Tumanyan",
        "min": "B2",
        "max": "B2",
        "kind": "Poetry",
        "why": "A lyrical poem-tragedy of doomed village love that became Armenia's national opera, best read with audio."
      },
      {
        "title": "Աբու Լալա Մահարի (Abu Lala Mahari)",
        "author": "Avetik Isahakyan",
        "min": "C1",
        "max": "C1",
        "kind": "Poetry",
        "why": "A philosophical masterpiece of Armenian lyric poetry, gorgeous and universal, read slowly and aloud."
      },
      {
        "title": "Խենթը (The Fool) or Սամվել (Samvel)",
        "author": "Raffi",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Sweeping, plot-driven nineteenth-century historical novels of Armenian identity; The Fool has an English translation."
      },
      {
        "title": "Գիրք ճանապարհի (Book of the Road)",
        "author": "Yeghishe Charents",
        "min": "C1",
        "max": "C1",
        "kind": "Poetry",
        "why": "The defining modernist poetry collection of twentieth-century Armenia, electric and demanding, the summit to work toward."
      }
    ]
  },
  "sq": {
    "code": "sq",
    "intro": "Albanian is an FSI Category III to IV Indo-European isolate, with case marking, definiteness baked into the noun, and a special admirative mood, and purpose-built graded readers are scarce. Its saving grace is a handful of internationally translated authors, above all Ismail Kadare, so the path leans on Princi i vogël (The Little Prince), folk tales, and parallel reading.",
    "books": [
      {
        "title": "Princi i vogël",
        "author": "Antoine de Saint-Exupéry",
        "min": "A2",
        "max": "B1",
        "kind": "Children",
        "why": "Short sentences, concrete vocabulary, and a plot you already know, so you decode the Albanian."
      },
      {
        "title": "Përralla shqiptare",
        "author": "",
        "min": "A2",
        "max": "B1",
        "kind": "Folk tales",
        "why": "Repetitive framing phrases and recurring verbs make each short tale easier than the last."
      },
      {
        "title": "Gjenerali i ushtrisë së vdekur",
        "author": "Ismail Kadare",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "Clear, propulsive storytelling and an outstanding English translation make this the ideal first Kadare."
      },
      {
        "title": "Kronikë në gur",
        "author": "Ismail Kadare",
        "min": "B2",
        "max": "C1",
        "kind": "Literary",
        "why": "A child's-eye view describes the world in concrete, sensory terms, with a fine English translation."
      },
      {
        "title": "I humburi",
        "author": "Fatos Kongoli",
        "min": "B2",
        "max": "C1",
        "kind": "Literary",
        "why": "Contemporary, less ornate prose in modern standard Albanian, with an English translation for parallel reading."
      },
      {
        "title": "Pallati i ëndrrave",
        "author": "Ismail Kadare",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Kadare at full imaginative strength, a layered, atmospheric allegory with a respected English translation."
      },
      {
        "title": "Prilli i thyer",
        "author": "Ismail Kadare",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "A gripping, accessible novel of blood feud and honor, with an excellent English translation."
      },
      {
        "title": "Bagëti e Bujqësia",
        "author": "Naim Frashëri",
        "min": "C1",
        "max": "C1",
        "kind": "Poetry",
        "why": "The national poet's foundational celebration of homeland and countryside, a text every Albanian knows."
      },
      {
        "title": "Vargjet e lira",
        "author": "Migjeni",
        "min": "C1",
        "max": "C1",
        "kind": "Poetry",
        "why": "A slim, fierce volume of social-realist poetry that opened modern Albanian literature."
      },
      {
        "title": "Eposi i Kreshnikëve",
        "author": "",
        "min": "C1",
        "max": "C1",
        "kind": "Poetry",
        "why": "Heroic oral epic compared to Homer, connecting you to the oldest living layer of Albanian culture."
      }
    ]
  },
  "eu": {
    "code": "eu",
    "intro": "Basque is a language isolate with almost no cognates, an ergative-absolutive case system, and agglutinative grammar, and it has fewer graded readers than the big languages. Its mercies are perfectly phonetic spelling and no grammatical gender, so the path leans on Printze txikia (The Little Prince), Atxaga's children's series, and parallel reading against English translations.",
    "books": [
      {
        "title": "Printze txikia",
        "author": "Antoine de Saint-Exupéry",
        "min": "A2",
        "max": "A2",
        "kind": "Children",
        "why": "A gentle story with short chapters and concrete vocabulary you can read knowing the plot already."
      },
      {
        "title": "Bambulo: Lehen urratsak",
        "author": "Bernardo Atxaga",
        "min": "A2",
        "max": "B1",
        "kind": "Children",
        "why": "Short chapters and illustrations support natural modern Euskara Batua by a top living stylist."
      },
      {
        "title": "Behi euskaldun baten memoriak",
        "author": "Bernardo Atxaga",
        "min": "B1",
        "max": "B1",
        "kind": "Literary",
        "why": "A warm, funny cow's-eye narration between children's and adult fiction, an ideal first real book."
      },
      {
        "title": "Bilbao-New York-Bilbao",
        "author": "Kirmen Uribe",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "Self-contained, essay-like sections and a fine English translation make serious parallel reading easy."
      },
      {
        "title": "Antso Nagusia, baskoien errege handia",
        "author": "Toti Martínez de Lezea",
        "min": "B2",
        "max": "C1",
        "kind": "Literary",
        "why": "Plot-driven historical storytelling with strong pull, recycling its setting vocabulary until it sticks."
      },
      {
        "title": "Obabakoak",
        "author": "Bernardo Atxaga",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "The most celebrated Basque book, interlinked stories you can read one complete piece at a time."
      },
      {
        "title": "Soinujolearen semea",
        "author": "Bernardo Atxaga",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Atxaga's mature masterpiece, a major literary novel with an admired English translation for parallel reading."
      }
    ]
  },
  "sw": {
    "code": "sw",
    "intro": "Swahili sits in the FSI middle band, harder than Spanish but well short of Arabic or Mandarin, with a phonetic Latin script, no tones, and no gender; the real work is its noun-class system. Purpose-built graded readers are scarce, so the path leans on the Abunuwasi folk tales, the Swahili Little Prince, parallel scripture, and Shaaban Robert's allegorical novels, with classical utenzi poetry saved for last.",
    "books": [
      {
        "title": "Graded school readers and parallel scripture",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Graded reader",
        "why": "School primers control and reuse vocabulary; the Bible gives clean verse-by-verse parallel reading."
      },
      {
        "title": "Mwana Mdogo wa Mfalme",
        "author": "Antoine de Saint-Exupéry",
        "min": "A2",
        "max": "B1",
        "kind": "Children",
        "why": "The Little Prince in warm, simple Swahili, a familiar tale that carries you past hard words."
      },
      {
        "title": "Hekaya za Abunuwasi na Hadithi Nyingine",
        "author": "",
        "min": "A2",
        "max": "B1",
        "kind": "Folk tales",
        "why": "Short, self-contained trickster tales in clear language, so you finish a whole story early."
      },
      {
        "title": "Adili na Nduguze",
        "author": "Shaaban Robert",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "Shaaban Robert's elegant allegory with folk-tale rhythm and easy-to-find study notes."
      },
      {
        "title": "Kusadikika",
        "author": "Shaaban Robert",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "A short, tightly built allegory of justice, a second book in his familiar voice."
      },
      {
        "title": "Kufikirika",
        "author": "Shaaban Robert",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "A third short allegory by the same author, deepening comprehension with little new vocabulary."
      },
      {
        "title": "Rosa Mistika",
        "author": "Euphrase Kezilahabi",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "A landmark novel whose 2025 Yale translation makes sentence-by-sentence parallel reading genuinely possible."
      },
      {
        "title": "Kichwamaji",
        "author": "Euphrase Kezilahabi",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "An introspective, philosophical high point of the Swahili novel that pushes comprehension to its limit."
      },
      {
        "title": "Asali Chungu",
        "author": "Said Ahmed Mohamed",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "A Zanzibari novel of greed with the coast's distinct, Arabic-rich Swahili."
      },
      {
        "title": "Maisha Yangu na Baada ya Miaka Hamsini",
        "author": "Shaaban Robert",
        "min": "C1",
        "max": "C1",
        "kind": "Nonfiction",
        "why": "The father of modern Swahili literature turns his moral voice to his own life."
      },
      {
        "title": "Utendi wa Mwana Kupona",
        "author": "Mwana Kupona binti Mshamu",
        "min": "C1",
        "max": "C1",
        "kind": "Poetry",
        "why": "A famous classical utenzi of a mother's counsel, dense archaic verse for the strong reader."
      }
    ]
  },
  "zu": {
    "code": "zu",
    "intro": "Zulu (isiZulu) sits in the FSI Category III to IV tiers, with fifteen-plus noun classes and concord, three clicks, and tone, offset by almost perfectly phonetic spelling. Foreign-learner graded readers barely exist, so the path leans on Callaway's parallel-text folk tales, the isiZulu Bible, Inkosana Encane (The Little Prince), and the great twentieth-century novels and poetry.",
    "books": [
      {
        "title": "Izinganekwane, nensumansumane, nezindaba zabantu",
        "author": "Henry Callaway",
        "min": "A1",
        "max": "A2",
        "kind": "Folk tales",
        "why": "Nineteenth-century folk tales printed with Zulu and English in parallel columns, the patterns recurring."
      },
      {
        "title": "Inkosana Encane",
        "author": "Antoine de Saint-Exupéry",
        "min": "A2",
        "max": "B1",
        "kind": "Children",
        "why": "The Little Prince in isiZulu, concrete vocabulary and a story you can already predict."
      },
      {
        "title": "IBhayibheli Elingcwele",
        "author": "Bible Society of South Africa",
        "min": "A2",
        "max": "B2",
        "kind": "Parallel text",
        "why": "The isiZulu Bible, unbeatable for exact verse-by-verse parallel reading against an English one."
      },
      {
        "title": "Inkinsela yaseMgungundlovu",
        "author": "C.L.S. Nyembezi",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "The most loved isiZulu novel, a sharp con-man satire with study notes online."
      },
      {
        "title": "Insila kaShaka",
        "author": "John Langalibalele Dube",
        "min": "B2",
        "max": "C1",
        "kind": "Classic",
        "why": "The first isiZulu novel, a fast-moving tale of Shaka's court with an English translation."
      },
      {
        "title": "UShaka kaSenzangakhona",
        "author": "R.R.R. Dhlomo",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "Dhlomo's rich historical novel of the great king, where language and history meet."
      },
      {
        "title": "Inkondlo kaZulu",
        "author": "B.W. Vilakazi",
        "min": "C1",
        "max": "C1",
        "kind": "Poetry",
        "why": "The first book of isiZulu poems, the language at its most musical."
      },
      {
        "title": "Amal'ezulu",
        "author": "B.W. Vilakazi",
        "min": "C1",
        "max": "C1",
        "kind": "Poetry",
        "why": "Vilakazi's second collection, a heavier emotional and political capstone to a Zulu reading life."
      }
    ]
  },
  "be": {
    "code": "be",
    "intro": "Belarusian is an East Slavic heritage and revival language where purpose-built graded readers barely exist, though its phonetic \"write as you hear\" spelling is a real advantage. Beginners lean on folk tales like Лёгкі хлеб, the Little Prince, and translated classics for parallel reading, and knowing Russian speeds everything up.",
    "books": [
      {
        "title": "Беларускія народныя казкі (Belarusian Folk Tales)",
        "author": "",
        "min": "A1",
        "max": "A2",
        "kind": "Folk tales",
        "why": "Short sentences, everyday vocabulary, and heavy repetition, with the trickster tale Easy Bread a standard starting point."
      },
      {
        "title": "Маленькі прынц (The Little Prince)",
        "author": "Antoine de Saint-Exupéry",
        "min": "B1",
        "max": "B1",
        "kind": "Children",
        "why": "A genuine published translation whose familiar plot frees you to read for language rather than suspense."
      },
      {
        "title": "Паўлінка (Pawlinka)",
        "author": "Yanka Kupala",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "A lively 1912 folk comedy, almost all dialogue, living colloquial Belarusian and short enough to finish."
      },
      {
        "title": "Дзікае паляванне караля Стаха (King Stakh's Wild Hunt)",
        "author": "Uladzimir Karatkievich",
        "min": "B2",
        "max": "B2",
        "kind": "Literary",
        "why": "A propulsive gothic mystery in a decaying manor, with an English translation for parallel reading."
      },
      {
        "title": "Знак бяды (Sign of Misfortune)",
        "author": "Vasil Bykaŭ",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "A psychologically deep WWII-occupation novella in clear modern prose, with a bilingual English-Belarusian edition."
      },
      {
        "title": "Сотнікаў (Sotnikov / The Ordeal)",
        "author": "Vasil Bykaŭ",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "A stark short novella of courage and betrayal under interrogation, with an English translation for parallel reading."
      },
      {
        "title": "Новая зямля (New Land)",
        "author": "Yakub Kolas",
        "min": "C1",
        "max": "C1",
        "kind": "Poetry",
        "why": "Kolas's epic verse poem, an encyclopedia of pre-revolutionary peasant life and a foundational national text."
      },
      {
        "title": "Вянок (The Wreath)",
        "author": "Maksim Bahdanovich",
        "min": "C1",
        "max": "C1",
        "kind": "Poetry",
        "why": "Bahdanovich's landmark 1913 collection, some of the most refined lyric poetry in the language."
      }
    ]
  },
  "ky": {
    "code": "ky",
    "intro": "Kyrgyz is a Turkic language the FSI places in its harder tiers (roughly Category III to IV), and polished graded readers are scarce. Its rare asset is Chingiz Aitmatov, one of the most translated authors of the twentieth century, so you lean on his novellas, the Kyrgyz Little Prince, and folk tales, all with parallel English.",
    "books": [
      {
        "title": "Кыргыз эл жомоктору (Kyrgyz Folk Tales)",
        "author": "",
        "min": "A2",
        "max": "A2",
        "kind": "Folk tales",
        "why": "Short, repetitive жомок built on stock phrases and clear plots about clever animals and trickster heroes."
      },
      {
        "title": "Кичинекей ханзада (The Little Prince)",
        "author": "Antoine de Saint-Exupéry",
        "min": "A2",
        "max": "B1",
        "kind": "Children",
        "why": "A story you already know, with gentle, concrete, repetitive prose, close to ideal for parallel reading."
      },
      {
        "title": "Жамийла (Jamila)",
        "author": "Chingiz Aitmatov",
        "min": "B1",
        "max": "B1",
        "kind": "Literary",
        "why": "A short, plain-voiced village love story, the best entry into Kyrgyz literature, translated into a hundred languages."
      },
      {
        "title": "Биринчи мугалим (The First Teacher)",
        "author": "Chingiz Aitmatov",
        "min": "B1",
        "max": "B2",
        "kind": "Literary",
        "why": "An intimate, linear novella about a young teacher fighting to open a village school, reliably translated."
      },
      {
        "title": "Ак кеме (The White Ship)",
        "author": "Chingiz Aitmatov",
        "min": "B2",
        "max": "C1",
        "kind": "Literary",
        "why": "Aitmatov at his most lyrical, braiding folklore and a hard adult world, richer and more demanding."
      },
      {
        "title": "Жаныбарым, Гүлсарым (Farewell, Gulsary!)",
        "author": "Chingiz Aitmatov",
        "min": "C1",
        "max": "C1",
        "kind": "Literary",
        "why": "A fuller, more demanding novel of a herdsman and his horse across the Soviet decades."
      },
      {
        "title": "Манас (The Epic of Manas)",
        "author": "",
        "min": "C1",
        "max": "C1",
        "kind": "Poetry",
        "why": "The national epic, reckoned the longest epic poem in the world, sampled in a modernized edition."
      }
    ]
  }
};

export const READING_LANG_CODES: string[] = Object.keys(readingBooks);
