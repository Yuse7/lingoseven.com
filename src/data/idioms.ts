// Common idioms per language with a literal gloss, real meaning and an example sentence.
// Source: workflow generation + independent verification pass. Real data only.

export interface Idiom {
  idiom: string;
  literal: string;
  meaning: string;
  example: string;
}

export const idioms: Record<string, Idiom[]> = {
  "en": [
    {
      "idiom": "spill the beans",
      "literal": "spill the beans",
      "meaning": "to reveal a secret",
      "example": "Come on, spill the beans, what did she say?"
    },
    {
      "idiom": "break the ice",
      "literal": "break the ice",
      "meaning": "to ease tension at the start of a social situation",
      "example": "He told a joke to break the ice at the meeting."
    },
    {
      "idiom": "kick the bucket",
      "literal": "kick the bucket",
      "meaning": "to die",
      "example": "I want to see Rome before I kick the bucket."
    },
    {
      "idiom": "piece of cake",
      "literal": "piece of cake",
      "meaning": "something very easy",
      "example": "The exam was a piece of cake."
    },
    {
      "idiom": "under the weather",
      "literal": "under the weather",
      "meaning": "feeling ill",
      "example": "She's a bit under the weather today, so she stayed home."
    },
    {
      "idiom": "cost an arm and a leg",
      "literal": "cost an arm and a leg",
      "meaning": "to be very expensive",
      "example": "That new phone costs an arm and a leg."
    },
    {
      "idiom": "hit the sack",
      "literal": "hit the sack",
      "meaning": "to go to bed",
      "example": "I'm exhausted, I'm going to hit the sack."
    },
    {
      "idiom": "once in a blue moon",
      "literal": "once in a blue moon",
      "meaning": "very rarely",
      "example": "We only see each other once in a blue moon."
    },
    {
      "idiom": "bite the bullet",
      "literal": "bite the bullet",
      "meaning": "to force yourself to do something unpleasant",
      "example": "I decided to bite the bullet and finally go to the dentist."
    },
    {
      "idiom": "hit the nail on the head",
      "literal": "hit the nail on the head",
      "meaning": "to describe something exactly right",
      "example": "You hit the nail on the head with that answer."
    },
    {
      "idiom": "the ball is in your court",
      "literal": "the ball is in your court",
      "meaning": "it is your turn to decide or act",
      "example": "I've done all I can, now the ball is in your court."
    },
    {
      "idiom": "burn the midnight oil",
      "literal": "burn the midnight oil",
      "meaning": "to work late into the night",
      "example": "She burned the midnight oil to finish the report."
    },
    {
      "idiom": "cut corners",
      "literal": "cut corners",
      "meaning": "to do something cheaply or carelessly",
      "example": "Don't cut corners when it comes to safety."
    },
    {
      "idiom": "the last straw",
      "literal": "the last straw",
      "meaning": "the final problem that makes a situation unbearable",
      "example": "His rude comment was the last straw."
    },
    {
      "idiom": "on cloud nine",
      "literal": "on cloud nine",
      "meaning": "extremely happy",
      "example": "She was on cloud nine after getting the job."
    },
    {
      "idiom": "let the cat out of the bag",
      "literal": "let the cat out of the bag",
      "meaning": "to reveal a secret by accident",
      "example": "He let the cat out of the bag about the surprise party."
    }
  ],
  "es": [
    {
      "idiom": "ponerse las pilas",
      "literal": "to put in one's batteries",
      "meaning": "to get one's act together",
      "example": "Tienes que ponerte las pilas si quieres aprobar."
    },
    {
      "idiom": "estar en las nubes",
      "literal": "to be in the clouds",
      "meaning": "to be daydreaming or distracted",
      "example": "No me escuchas, siempre estás en las nubes."
    },
    {
      "idiom": "costar un ojo de la cara",
      "literal": "to cost an eye of the face",
      "meaning": "to be very expensive",
      "example": "El coche nuevo me costó un ojo de la cara."
    },
    {
      "idiom": "meter la pata",
      "literal": "to put in the paw",
      "meaning": "to make an embarrassing mistake",
      "example": "Metí la pata al olvidar su cumpleaños."
    },
    {
      "idiom": "tomar el pelo",
      "literal": "to take the hair",
      "meaning": "to tease someone or pull their leg",
      "example": "¿Me estás tomando el pelo?"
    },
    {
      "idiom": "dar en el clavo",
      "literal": "to hit on the nail",
      "meaning": "to get something exactly right",
      "example": "Diste en el clavo con esa idea."
    },
    {
      "idiom": "estar como una cabra",
      "literal": "to be like a goat",
      "meaning": "to be crazy",
      "example": "Ese chico está como una cabra."
    },
    {
      "idiom": "no tener pelos en la lengua",
      "literal": "to not have hairs on the tongue",
      "meaning": "to speak frankly, without holding back",
      "example": "Ella no tiene pelos en la lengua y dice lo que piensa."
    },
    {
      "idiom": "ser pan comido",
      "literal": "to be eaten bread",
      "meaning": "to be very easy",
      "example": "El examen fue pan comido."
    },
    {
      "idiom": "tirar la toalla",
      "literal": "to throw the towel",
      "meaning": "to give up",
      "example": "No tires la toalla, ya casi lo consigues."
    },
    {
      "idiom": "estar hecho polvo",
      "literal": "to be made dust",
      "meaning": "to be exhausted",
      "example": "Después del trabajo estoy hecho polvo."
    },
    {
      "idiom": "quedarse de piedra",
      "literal": "to be left of stone",
      "meaning": "to be stunned or shocked",
      "example": "Me quedé de piedra al oír la noticia."
    },
    {
      "idiom": "echar una mano",
      "literal": "to throw a hand",
      "meaning": "to lend a hand, to help",
      "example": "¿Me echas una mano con las maletas?"
    },
    {
      "idiom": "buscarle tres pies al gato",
      "literal": "to look for three feet on the cat",
      "meaning": "to overcomplicate something",
      "example": "No le busques tres pies al gato, es muy sencillo."
    },
    {
      "idiom": "hablar por los codos",
      "literal": "to talk through the elbows",
      "meaning": "to talk too much",
      "example": "Mi vecina habla por los codos."
    }
  ],
  "fr": [
    {
      "idiom": "coûter les yeux de la tête",
      "literal": "to cost the eyes of the head",
      "meaning": "to be very expensive",
      "example": "Cette montre coûte les yeux de la tête."
    },
    {
      "idiom": "avoir le cafard",
      "literal": "to have the cockroach",
      "meaning": "to feel down or gloomy",
      "example": "Depuis qu'il est parti, elle a le cafard."
    },
    {
      "idiom": "poser un lapin",
      "literal": "to put down a rabbit",
      "meaning": "to stand someone up",
      "example": "Il m'a posé un lapin hier soir."
    },
    {
      "idiom": "avoir un chat dans la gorge",
      "literal": "to have a cat in the throat",
      "meaning": "to have a frog in one's throat",
      "example": "Excuse-moi, j'ai un chat dans la gorge."
    },
    {
      "idiom": "tomber dans les pommes",
      "literal": "to fall in the apples",
      "meaning": "to faint",
      "example": "Elle est tombée dans les pommes en voyant le sang."
    },
    {
      "idiom": "donner sa langue au chat",
      "literal": "to give one's tongue to the cat",
      "meaning": "to give up trying to guess",
      "example": "Je ne trouve pas la réponse, je donne ma langue au chat."
    },
    {
      "idiom": "mettre son grain de sel",
      "literal": "to put in one's grain of salt",
      "meaning": "to give an unwanted opinion",
      "example": "Il faut toujours qu'il mette son grain de sel."
    },
    {
      "idiom": "il pleut des cordes",
      "literal": "it is raining ropes",
      "meaning": "it is raining heavily",
      "example": "Prends un parapluie, il pleut des cordes."
    },
    {
      "idiom": "avoir le coup de foudre",
      "literal": "to have the lightning strike",
      "meaning": "to fall in love at first sight",
      "example": "Ils ont eu le coup de foudre au premier regard."
    },
    {
      "idiom": "en faire tout un fromage",
      "literal": "to make a whole cheese out of it",
      "meaning": "to make a big deal out of nothing",
      "example": "Ce n'est pas grave, n'en fais pas tout un fromage."
    },
    {
      "idiom": "casser les pieds",
      "literal": "to break someone's feet",
      "meaning": "to annoy someone",
      "example": "Arrête de me casser les pieds avec tes questions."
    },
    {
      "idiom": "avoir d'autres chats à fouetter",
      "literal": "to have other cats to whip",
      "meaning": "to have more important things to deal with",
      "example": "Je n'ai pas le temps, j'ai d'autres chats à fouetter."
    },
    {
      "idiom": "mettre la charrue avant les bœufs",
      "literal": "to put the plough before the oxen",
      "meaning": "to do things in the wrong order",
      "example": "Ne mets pas la charrue avant les bœufs, finis d'abord tes études."
    },
    {
      "idiom": "être dans la lune",
      "literal": "to be in the moon",
      "meaning": "to be daydreaming",
      "example": "Tu n'écoutes pas, tu es encore dans la lune."
    },
    {
      "idiom": "appeler un chat un chat",
      "literal": "to call a cat a cat",
      "meaning": "to call things by their real name, to speak plainly",
      "example": "Soyons honnêtes, appelons un chat un chat."
    }
  ],
  "de": [
    {
      "idiom": "die Daumen drücken",
      "literal": "to press the thumbs",
      "meaning": "to keep one's fingers crossed for someone",
      "example": "Ich drücke dir für die Prüfung die Daumen."
    },
    {
      "idiom": "Tomaten auf den Augen haben",
      "literal": "to have tomatoes on one's eyes",
      "meaning": "to fail to see something obvious",
      "example": "Hast du Tomaten auf den Augen? Der Schlüssel liegt direkt vor dir."
    },
    {
      "idiom": "die Katze im Sack kaufen",
      "literal": "to buy the cat in the sack",
      "meaning": "to buy something without checking it first",
      "example": "Probier es erst aus, kauf nicht die Katze im Sack."
    },
    {
      "idiom": "Schwein haben",
      "literal": "to have pig",
      "meaning": "to be lucky",
      "example": "Da hast du aber Schwein gehabt!"
    },
    {
      "idiom": "das ist mir Wurst",
      "literal": "that is sausage to me",
      "meaning": "I don't care",
      "example": "Ob wir heute oder morgen gehen, das ist mir Wurst."
    },
    {
      "idiom": "die Nase voll haben",
      "literal": "to have the nose full",
      "meaning": "to be fed up with something",
      "example": "Ich habe die Nase voll von diesem Chaos."
    },
    {
      "idiom": "nur Bahnhof verstehen",
      "literal": "to understand only train station",
      "meaning": "to not understand anything",
      "example": "Bei diesem Vortrag habe ich nur Bahnhof verstanden."
    },
    {
      "idiom": "die Kirche im Dorf lassen",
      "literal": "to leave the church in the village",
      "meaning": "to not exaggerate, to keep things in proportion",
      "example": "Jetzt lass mal die Kirche im Dorf, so schlimm war es nicht."
    },
    {
      "idiom": "ins Fettnäpfchen treten",
      "literal": "to step into the little grease bowl",
      "meaning": "to say the wrong thing and cause offence",
      "example": "Mit dieser Bemerkung bin ich ganz schön ins Fettnäpfchen getreten."
    },
    {
      "idiom": "Hals- und Beinbruch",
      "literal": "neck and leg break",
      "meaning": "good luck (like break a leg)",
      "example": "Morgen ist dein großer Auftritt, Hals- und Beinbruch!"
    },
    {
      "idiom": "die Flinte ins Korn werfen",
      "literal": "to throw the rifle into the grain",
      "meaning": "to give up",
      "example": "Gib nicht auf, wirf jetzt nicht die Flinte ins Korn."
    },
    {
      "idiom": "aus einer Mücke einen Elefanten machen",
      "literal": "to make an elephant out of a mosquito",
      "meaning": "to make a mountain out of a molehill",
      "example": "Reg dich nicht auf, du machst aus einer Mücke einen Elefanten."
    },
    {
      "idiom": "auf dem Holzweg sein",
      "literal": "to be on the wooden path",
      "meaning": "to be mistaken, on the wrong track",
      "example": "Wenn du das denkst, bist du auf dem Holzweg."
    },
    {
      "idiom": "die Beine in die Hand nehmen",
      "literal": "to take the legs in the hand",
      "meaning": "to hurry, to run as fast as possible",
      "example": "Wir müssen die Beine in die Hand nehmen, sonst verpassen wir den Zug."
    },
    {
      "idiom": "ins Gras beißen",
      "literal": "to bite into the grass",
      "meaning": "to die",
      "example": "Im Film muss der Bösewicht am Ende ins Gras beißen."
    }
  ],
  "it": [
    {
      "idiom": "in bocca al lupo",
      "literal": "in the mouth of the wolf",
      "meaning": "good luck",
      "example": "Domani hai l'esame? In bocca al lupo!"
    },
    {
      "idiom": "avere le mani in pasta",
      "literal": "to have one's hands in the dough",
      "meaning": "to be involved in something, to have influence",
      "example": "Lui ha le mani in pasta in molti affari."
    },
    {
      "idiom": "prendere due piccioni con una fava",
      "literal": "to catch two pigeons with one broad bean",
      "meaning": "to kill two birds with one stone",
      "example": "Andando in centro ho preso due piccioni con una fava."
    },
    {
      "idiom": "essere al verde",
      "literal": "to be at the green",
      "meaning": "to be broke, out of money",
      "example": "Non posso uscire stasera, sono al verde."
    },
    {
      "idiom": "avere la botte piena e la moglie ubriaca",
      "literal": "to have the barrel full and the wife drunk",
      "meaning": "to want to have it both ways",
      "example": "Non puoi avere la botte piena e la moglie ubriaca."
    },
    {
      "idiom": "costare un occhio della testa",
      "literal": "to cost an eye of the head",
      "meaning": "to be very expensive",
      "example": "Quella borsa costa un occhio della testa."
    },
    {
      "idiom": "tagliare la corda",
      "literal": "to cut the rope",
      "meaning": "to slip away, to escape",
      "example": "Appena ha potuto, ha tagliato la corda."
    },
    {
      "idiom": "avere un diavolo per capello",
      "literal": "to have a devil for each hair",
      "meaning": "to be furious",
      "example": "Non parlarle adesso, ha un diavolo per capello."
    },
    {
      "idiom": "acqua in bocca",
      "literal": "water in the mouth",
      "meaning": "keep it secret, don't tell anyone",
      "example": "Ti dico un segreto, ma acqua in bocca!"
    },
    {
      "idiom": "fare orecchie da mercante",
      "literal": "to make merchant's ears",
      "meaning": "to turn a deaf ear, to pretend not to hear",
      "example": "Gli ho chiesto aiuto ma ha fatto orecchie da mercante."
    },
    {
      "idiom": "essere una schiappa",
      "literal": "to be a wood chip",
      "meaning": "to be hopeless or very bad at something",
      "example": "A calcio sono proprio una schiappa."
    },
    {
      "idiom": "toccare ferro",
      "literal": "to touch iron",
      "meaning": "to knock on wood for luck",
      "example": "Speriamo che vada tutto bene, tocca ferro."
    },
    {
      "idiom": "cadere dalle nuvole",
      "literal": "to fall from the clouds",
      "meaning": "to be completely taken by surprise",
      "example": "Quando l'ho saputo sono caduto dalle nuvole."
    },
    {
      "idiom": "non tutte le ciambelle riescono col buco",
      "literal": "not all doughnuts come out with a hole",
      "meaning": "things don't always turn out as planned",
      "example": "È andata male, ma non tutte le ciambelle riescono col buco."
    },
    {
      "idiom": "piove sul bagnato",
      "literal": "it rains on the wet ground",
      "meaning": "good or bad luck keeps coming to those who already have plenty",
      "example": "Ha vinto di nuovo alla lotteria, piove sul bagnato."
    }
  ],
  "pt": [
    {
      "idiom": "engolir sapos",
      "literal": "to swallow frogs",
      "meaning": "to put up with unpleasant things without complaining",
      "example": "No trabalho, às vezes é preciso engolir sapos."
    },
    {
      "idiom": "pagar o pato",
      "literal": "to pay for the duck",
      "meaning": "to take the blame for something",
      "example": "No final, quem pagou o pato fui eu."
    },
    {
      "idiom": "custar os olhos da cara",
      "literal": "to cost the eyes of the face",
      "meaning": "to be very expensive",
      "example": "Esse celular custa os olhos da cara."
    },
    {
      "idiom": "ficar de olho",
      "literal": "to stay with an eye",
      "meaning": "to keep an eye on, to watch closely",
      "example": "Fica de olho nas crianças, por favor."
    },
    {
      "idiom": "descascar o abacaxi",
      "literal": "to peel the pineapple",
      "meaning": "to sort out a difficult problem",
      "example": "Sobrou para mim descascar esse abacaxi."
    },
    {
      "idiom": "tirar o cavalinho da chuva",
      "literal": "to take the little horse out of the rain",
      "meaning": "to give up on an expectation, to forget it",
      "example": "Se você acha que vou ajudar, pode tirar o cavalinho da chuva."
    },
    {
      "idiom": "não ter papas na língua",
      "literal": "to not have pap on the tongue",
      "meaning": "to speak frankly, without mincing words",
      "example": "Ela não tem papas na língua, fala o que pensa."
    },
    {
      "idiom": "fazer tempestade em copo d'água",
      "literal": "to make a storm in a glass of water",
      "meaning": "to make a big deal out of nothing",
      "example": "Calma, você está fazendo tempestade em copo d'água."
    },
    {
      "idiom": "dar com a língua nos dentes",
      "literal": "to hit one's teeth with the tongue",
      "meaning": "to let a secret slip",
      "example": "Não conte a ele, ele sempre dá com a língua nos dentes."
    },
    {
      "idiom": "pisar em ovos",
      "literal": "to step on eggs",
      "meaning": "to handle something very carefully",
      "example": "Com esse assunto delicado, é melhor pisar em ovos."
    },
    {
      "idiom": "quebrar um galho",
      "literal": "to break a branch",
      "meaning": "to do someone a favour, to improvise a solution",
      "example": "Você pode quebrar um galho e me emprestar dez reais?"
    },
    {
      "idiom": "encher linguiça",
      "literal": "to stuff sausage",
      "meaning": "to pad something out with filler, to waste time",
      "example": "Para de encher linguiça e vai direto ao ponto."
    },
    {
      "idiom": "chover a cântaros",
      "literal": "to rain in pitchers",
      "meaning": "to rain very heavily",
      "example": "Leva o guarda-chuva, está chovendo a cântaros."
    },
    {
      "idiom": "meter os pés pelas mãos",
      "literal": "to put one's feet through one's hands",
      "meaning": "to get muddled and mess things up",
      "example": "Fiquei nervoso e meti os pés pelas mãos na entrevista."
    },
    {
      "idiom": "ficar a ver navios",
      "literal": "to be left watching ships",
      "meaning": "to be left empty-handed and disappointed",
      "example": "Esperava o aumento, mas fiquei a ver navios."
    }
  ],
  "ru": [
    {
      "idiom": "бить баклуши",
      "literal": "to beat wooden blocks",
      "meaning": "to loaf around, to idle",
      "example": "Хватит бить баклуши, пора работать."
    },
    {
      "idiom": "водить за нос",
      "literal": "to lead by the nose",
      "meaning": "to deceive or string someone along",
      "example": "Он давно водит тебя за нос."
    },
    {
      "idiom": "зарубить на носу",
      "literal": "to notch it on one's nose",
      "meaning": "to remember something firmly",
      "example": "Заруби себе на носу: больше так не делай."
    },
    {
      "idiom": "делать из мухи слона",
      "literal": "to make an elephant out of a fly",
      "meaning": "to make a mountain out of a molehill",
      "example": "Не преувеличивай, ты делаешь из мухи слона."
    },
    {
      "idiom": "как две капли воды",
      "literal": "like two drops of water",
      "meaning": "as alike as two peas in a pod",
      "example": "Сёстры похожи как две капли воды."
    },
    {
      "idiom": "кот наплакал",
      "literal": "the cat cried that much",
      "meaning": "very little, almost none",
      "example": "Денег осталось кот наплакал."
    },
    {
      "idiom": "вешать лапшу на уши",
      "literal": "to hang noodles on someone's ears",
      "meaning": "to feed someone lies",
      "example": "Не вешай мне лапшу на уши, я знаю правду."
    },
    {
      "idiom": "остаться с носом",
      "literal": "to be left with the nose",
      "meaning": "to be left with nothing, to be outwitted",
      "example": "Он всех обманул, а сам остался с носом."
    },
    {
      "idiom": "лить как из ведра",
      "literal": "to pour as if from a bucket",
      "meaning": "to rain very heavily",
      "example": "Возьми зонт, дождь льёт как из ведра."
    },
    {
      "idiom": "тянуть кота за хвост",
      "literal": "to pull the cat by the tail",
      "meaning": "to drag something out, to stall",
      "example": "Не тяни кота за хвост, говори прямо."
    },
    {
      "idiom": "не в своей тарелке",
      "literal": "not in one's own plate",
      "meaning": "to feel out of place or uneasy",
      "example": "На той вечеринке я чувствовал себя не в своей тарелке."
    },
    {
      "idiom": "спустя рукава",
      "literal": "with the sleeves let down",
      "meaning": "carelessly, sloppily",
      "example": "Он работает спустя рукава."
    },
    {
      "idiom": "брать себя в руки",
      "literal": "to take oneself in one's hands",
      "meaning": "to pull oneself together",
      "example": "Возьми себя в руки и успокойся."
    },
    {
      "idiom": "ни пуха ни пера",
      "literal": "neither fluff nor feather",
      "meaning": "good luck (said before a hard test)",
      "example": "Завтра экзамен? Ни пуха ни пера!"
    },
    {
      "idiom": "когда рак на горе свистнет",
      "literal": "when the crayfish whistles on the mountain",
      "meaning": "never, when pigs fly",
      "example": "Он вернёт долг, когда рак на горе свистнет."
    },
    {
      "idiom": "держать язык за зубами",
      "literal": "to keep one's tongue behind one's teeth",
      "meaning": "to keep quiet, to keep a secret",
      "example": "Умей держать язык за зубами."
    }
  ]
};

export const IDIOM_LANGS: string[] = Object.keys(idioms);
