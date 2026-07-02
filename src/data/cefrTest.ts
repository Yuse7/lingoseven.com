// CEFR level-test question banks, one per language.
//
// Each bank is 30 multiple-choice items, 5 at each CEFR level (A1-C2), split
// roughly evenly between grammar and vocabulary. `answer` is the 0-based index
// of the correct option. Items were written by native-level language models and
// pass structural validation (level/skill balance, four options with one correct
// key, varied answer indices, diacritics intact). The seven launch languages
// (en, es, fr, de, it, pt, ru) additionally passed independent blind verification:
// a second model re-solved every item without the key and mismatches/ambiguous
// items were adjudicated by hand. The remaining languages are pending that pass.
//
// To add a language: add a code to CEFR_LANG_CODES, ensure it has a URL slug in
// languageSlugs.ts, and add its 30-item bank below.

export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface CefrQuestion {
  level: CefrLevel;
  skill: 'grammar' | 'vocab';
  text: string;
  options: string[];
  answer: number;
}

export const CEFR_LEVELS: CefrLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export const CEFR_LANG_CODES: string[] = ["en","de","fr","es","it","pt","ru","sr","nl","sv","no","da","ro","uk","pl","cs","sk","hr","bs","bg","sl","lv","lt","fi","hu","et","el","vi","id","ms","af","gl","kk","uz","tl","mn","ka","sq","sw","zu","be","ky","ca","eu","is","mk","tr","az","hy"];

export const cefrTest: Record<string, CefrQuestion[]> = {
  "az": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Mən müəllim___.",
      "options": [
        "sən",
        "ik",
        "əm",
        "dir"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Sən hər gün məktəbə ___.",
      "options": [
        "gedirəm",
        "gedirsən",
        "gedir",
        "gedirik"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Bu mənim ___dır.",
      "options": [
        "kitabın",
        "kitabı",
        "kitablar",
        "kitabım"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Səhər yeməyi zamanı çay və ya ___ içirik.",
      "options": [
        "stul",
        "qəhvə",
        "kitab",
        "maşın"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Atamın qardaşına ___ deyirik.",
      "options": [
        "əmi",
        "xala",
        "bacı",
        "nənə"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Mən dünən kinoya ___.",
      "options": [
        "gedirəm",
        "gedəcəyəm",
        "gedirsən",
        "getdim"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Uşaqlar bağça___ oynayır.",
      "options": [
        "dan",
        "nın",
        "da",
        "ya"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Qışda hava çox ___ olur.",
      "options": [
        "yaşıl",
        "soyuq",
        "şirin",
        "isti"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Bazar günündən sonra gələn gün ___ adlanır.",
      "options": [
        "Çərşənbə",
        "Şənbə",
        "Bazar ertəsi",
        "Cümə"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Ac olanda insan ___ istəyir.",
      "options": [
        "yatmaq",
        "oxumaq",
        "qaçmaq",
        "yemək"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Əgər vaxtım ___, sənə kömək edərəm.",
      "options": [
        "olsa",
        "olar",
        "idi",
        "olub"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Bu ev 1990-cı ildə ___.",
      "options": [
        "tikdi",
        "tikəcək",
        "tikildi",
        "tikilir"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Sağlamlığını qorumaq üçün mütəmadi olaraq ___ etmək lazımdır.",
      "options": [
        "xəyanət",
        "nifrət",
        "kədər",
        "idman"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "'Məmnun' sözünə ən yaxın məna daşıyan söz hansıdır?",
      "options": [
        "razı",
        "narahat",
        "qəzəbli",
        "yorğun"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Deyilənlərə görə, o, imtahanı uğurla ___.",
      "options": [
        "verir",
        "verib",
        "versin",
        "verəydi"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "O, xəstə olmasına ___, işə getdi.",
      "options": [
        "görə",
        "kimi",
        "baxmayaraq",
        "üçün"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "O, çətinliklərin öhdəsindən ___ gəldi.",
      "options": [
        "uğurla",
        "təsadüfən",
        "yorğun",
        "səhvən"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Şirkətin illik hesabatı ___ təhlil edildi.",
      "options": [
        "şirin",
        "yumşaq",
        "səsli",
        "ətraflı"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "'Nadir' sözünün antonimi hansıdır?",
      "options": [
        "qəribə",
        "adi",
        "təzə",
        "uzaq"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Hava soyuduqca insanlar daha isti ___.",
      "options": [
        "geyinsinlər",
        "geyinmişdilər",
        "geyinirlər",
        "geyinəcəklərdi"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Əgər vaxtında xəbərdar etsəydin, bu problem ___.",
      "options": [
        "yaranmayacaq",
        "yaranmazdı",
        "yaranmır",
        "yaransın"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Elmi tədqiqatların nəticələri jurnalda ___ olundu.",
      "options": [
        "satış",
        "sükut",
        "əyləncə",
        "dərc"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "'Səmərəli' sözü ən çox hansı mənada işlədilir?",
      "options": [
        "gözəl və zərif",
        "qorxulu və təhlükəli",
        "faydalı və nəticəli",
        "qədim və tarixi"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "O, heç nə ___ danışmağa davam etdi.",
      "options": [
        "olmayacaqdı",
        "olmamışcasına",
        "olmasın",
        "olmuşdursa"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Bəziləri bu fikirlə razılaşdığı ___, digərləri ona qəti şəkildə etiraz edir.",
      "options": [
        "halda",
        "zaman",
        "qədər",
        "kimi"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Uzun sürən danışıqlardan sonra tərəflər nəhayət bir ___ əldə etdilər.",
      "options": [
        "təsadüf",
        "münaqişə",
        "konsensus",
        "ehtiyat"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Onun çıxışı dinləyicilər arasında böyük ___ doğurdu.",
      "options": [
        "təsəlli",
        "ehtiyat",
        "sərfəlilik",
        "əks-səda"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "'Ürəyi düşmək' ifadəsi nə deməkdir?",
      "options": [
        "çox sevinmək",
        "çox qorxmaq",
        "çox yorulmaq",
        "çox acmaq"
      ],
      "answer": 1
    }
  ],
  "hy": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Ես ուսանող ___։",
      "options": [
        "եմ",
        "ես",
        "է",
        "ենք"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Մենք Երևանից ___։",
      "options": [
        "եմ",
        "ես",
        "ենք",
        "է"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Ես երկու ___ ունեմ։",
      "options": [
        "գրքեր",
        "գիրք",
        "գրքի",
        "գրքից"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Երկինքը ___ է։",
      "options": [
        "կարմիր",
        "դեղին",
        "կանաչ",
        "կապույտ"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Մեկ գումարած մեկ հավասար է ___։",
      "options": [
        "երկու",
        "երեք",
        "չորս",
        "հինգ"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Երեկ ես ֆիլմ ___։",
      "options": [
        "նայում եմ",
        "կնայեմ",
        "նայեցի",
        "նայեցիր"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Ես ապրում եմ ___։",
      "options": [
        "Երևան",
        "Երևանում",
        "Երևանից",
        "Երևանով"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Հոր քույրը կոչվում է ___։",
      "options": [
        "մորաքույր",
        "հորեղբայր",
        "քեռի",
        "հորաքույր"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Ուրբաթից հետո գալիս է ___։",
      "options": [
        "շաբաթ",
        "կիրակի",
        "երկուշաբթի",
        "չորեքշաբթի"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Ձմռանը մարդիկ հագնում են տաք ___։",
      "options": [
        "սանդալ",
        "շորտ",
        "վերարկու",
        "լողազգեստ"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Ես այդ գիրքն արդեն ___։",
      "options": [
        "կարդում եմ",
        "կարդացել եմ",
        "կկարդամ",
        "կարդում էի"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Մենք պետք է վաղը առավոտյան ___։",
      "options": [
        "գանք",
        "գամ",
        "գաս",
        "գա"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Փիղն ավելի մեծ է, ___ կատուն։",
      "options": [
        "որքան",
        "ինչպես",
        "բայց",
        "քան"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Բժիշկն աշխատում է ___։",
      "options": [
        "դպրոցում",
        "գրադարանում",
        "հիվանդանոցում",
        "խանութում"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "«Ուրախ» բառի հականիշը ___ է։",
      "options": [
        "տխուր",
        "մեծ",
        "արագ",
        "խելացի"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Այս վեպը հայտնի գրողի կողմից ___։",
      "options": [
        "գրել է",
        "գրում է",
        "կգրի",
        "գրվել է"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Փողոցով ___, ես մի հին ընկերոջ հանդիպեցի։",
      "options": [
        "քայլել",
        "քայլելիս",
        "քայլելով",
        "քայլեցի"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Նա որոշեց մրցույթին ___։",
      "options": [
        "հրաժարվել",
        "հաղթել",
        "մասնակցել",
        "պարտվել"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "«Դժվար» բառի հոմանիշը ___ է։",
      "options": [
        "հեշտ",
        "բարդ",
        "արագ",
        "գեղեցիկ"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Օդի աղտոտումը վնասում է մարդկանց ___։",
      "options": [
        "տրամադրությանը",
        "հագուստին",
        "կրթությանը",
        "առողջությանը"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Ուսուցիչն ամեն օր աշակերտներին նոր բառեր ___։",
      "options": [
        "սովորեցնում է",
        "սովորում է",
        "սովորեցվում է",
        "սովորեցրեց"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Եթե ես ժամանակ ունենայի, ես քեզ ___։",
      "options": [
        "օգնում եմ",
        "կօգնեմ",
        "կօգնեի",
        "օգնեցի"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Նա շուտ արթնացավ, որպեսզի ___։",
      "options": [
        "ուշանա",
        "չուշանա",
        "ուշանում է",
        "ուշացավ"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Այս խնդրի լուծման համար ձեր մասնակցությունը խիստ ___ է։",
      "options": [
        "հետաքրքիր",
        "հանգիստ",
        "հեռավոր",
        "անհրաժեշտ"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Նրա ելույթը մեծ ___ թողեց ունկնդիրների վրա։",
      "options": [
        "տպավորություն",
        "քաշ",
        "հասցե",
        "գին"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Երբ ես տուն հասա, նա արդեն ___։",
      "options": [
        "գնում էր",
        "գնացել էր",
        "գնաց",
        "կգնար"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Դա այն գիրքն է, ___ հեղինակին ես անձամբ ճանաչում եմ։",
      "options": [
        "որը",
        "որին",
        "որի",
        "ինչի"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Երկու երկրների միջև հարաբերությունների ջերմացումը նպաստեց առևտրի ___։",
      "options": [
        "անկմանը",
        "հասցեին",
        "գույնին",
        "աճին"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Երկու ընկերությունները ստորագրեցին առևտրային ___։",
      "options": [
        "պայմանագիր",
        "հայտարարություն",
        "հարցազրույց",
        "բողոք"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Գիտնականների վերջին հայտնագործությունն ունեցավ ___ ազդեցություն գիտության զարգացման վրա։",
      "options": [
        "թեթև",
        "նշանակալից",
        "կարճ",
        "էժան"
      ],
      "answer": 1
    }
  ],
  "ca": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Ella ___ professora.",
      "options": [
        "és",
        "són",
        "sóc",
        "ets"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "___ llibre és sobre la taula.",
      "options": [
        "La",
        "El",
        "Els",
        "Les"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Jo ___ vint anys.",
      "options": [
        "tens",
        "té",
        "tinc",
        "tenim"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Quin dia ve després de dilluns?",
      "options": [
        "Dijous",
        "Diumenge",
        "Dissabte",
        "Dimarts"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "De quin color és el cel quan fa sol?",
      "options": [
        "Blau",
        "Verd",
        "Vermell",
        "Groc"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Ahir jo ___ al cinema.",
      "options": [
        "vas anar",
        "vaig anar",
        "va anar",
        "anava"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Aquestes claus són ___ veí.",
      "options": [
        "de la",
        "dels",
        "del",
        "de"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "El germà del meu pare és el meu ___.",
      "options": [
        "cosí",
        "nebot",
        "avi",
        "oncle"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "L'antònim de 'gran' és ___.",
      "options": [
        "petit",
        "alt",
        "llarg",
        "ample"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Ahir, avui i ___ són paraules que indiquen quan passa alguna cosa.",
      "options": [
        "abans",
        "demà",
        "després",
        "sempre"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Vull que tu ___ aviat.",
      "options": [
        "véns",
        "vindràs",
        "vinguis",
        "vindries"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Aquesta és la casa ___ vaig néixer.",
      "options": [
        "que",
        "qui",
        "quan",
        "on"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Vols aquest llibre? Sí, ___ vull.",
      "options": [
        "el",
        "la",
        "els",
        "les"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Un sinònim de 'content' és ___.",
      "options": [
        "trist",
        "feliç",
        "cansat",
        "enfadat"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Quan algú explica moltes mentides, diem que és una persona ___.",
      "options": [
        "sincera",
        "generosa",
        "mentidera",
        "valenta"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Si ___ més temps, viatjaria per tot el món.",
      "options": [
        "tinc",
        "tindré",
        "he tingut",
        "tingués"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Aquest vi ___ molt en aquesta regió.",
      "options": [
        "es produeix",
        "produeix",
        "es produeixen",
        "han produït"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Un sinònim formal de 'començar' és ___.",
      "options": [
        "acabar",
        "iniciar",
        "continuar",
        "aturar"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "La paraula 'malenconia' es refereix a un sentiment de ___.",
      "options": [
        "alegria",
        "por",
        "tristesa",
        "ràbia"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Si un text és molt difícil d'entendre, diem que és ___.",
      "options": [
        "senzill",
        "clar",
        "breu",
        "complex"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Aquesta és l'empresa per a ___ he treballat deu anys.",
      "options": [
        "la qual",
        "el qual",
        "que",
        "qui"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Per molt que ___, no canviaré d'opinió.",
      "options": [
        "insisteixes",
        "insisteixis",
        "insistiràs",
        "insistiries"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Vaig donar les claus al meu veí; ___ vaig donar en persona.",
      "options": [
        "li les",
        "els hi",
        "les hi",
        "la hi"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Una persona que actua sense pensar en les conseqüències és ___.",
      "options": [
        "prudent",
        "reflexiva",
        "cautelosa",
        "imprudent"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "L'expressió 'tirar la tovallola' significa ___.",
      "options": [
        "rendir-se",
        "començar de nou",
        "celebrar una victòria",
        "netejar la casa"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Parlava com si ho ___ tot, però en realitat no sabia res.",
      "options": [
        "sap",
        "sabés",
        "sabrà",
        "hauria sabut"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "El professor va exigir que els alumnes ___ a l'hora.",
      "options": [
        "arribaven",
        "arriben",
        "arribessin",
        "arribaran"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "En un registre formal o literari, la paraula 'llur' vol dir ___.",
      "options": [
        "el meu / la meva",
        "el teu / la teva",
        "el nostre / la nostra",
        "el seu / la seva (d'ells)"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Si diem que algú 'xerra pels descosits', volem dir que ___.",
      "options": [
        "parla molt",
        "no diu res",
        "parla baix",
        "s'enfada fàcilment"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Un adjectiu culte que significa 'molt antic' és ___.",
      "options": [
        "modern",
        "vetust",
        "recent",
        "jove"
      ],
      "answer": 1
    }
  ],
  "eu": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Ni Edurne ___.",
      "options": [
        "zara",
        "da",
        "naiz",
        "gara"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "___ mahai gainean dago.",
      "options": [
        "Liburua",
        "Liburu",
        "Liburuak",
        "Liburuari"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Haiek ikasleak ___.",
      "options": [
        "da",
        "gara",
        "zarete",
        "dira"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Elurra ___ da.",
      "options": [
        "beltza",
        "zuria",
        "gorria",
        "horia"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Bi gehi bi berdin ___ dira.",
      "options": [
        "lau",
        "hiru",
        "bost",
        "sei"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Ni orain etxean ___.",
      "options": [
        "naiz",
        "dago",
        "gaude",
        "nago"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Nik auto bat ___.",
      "options": [
        "naiz",
        "dut",
        "da",
        "dira"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Nire amaren ama ___ da.",
      "options": [
        "aitona",
        "izeba",
        "amona",
        "osaba"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Igandearen aurreko eguna ___ da.",
      "options": [
        "larunbata",
        "astelehena",
        "ostirala",
        "asteartea"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Goizetan askotan ___ edaten dut.",
      "options": [
        "gatza",
        "mahaia",
        "ogia",
        "kafea"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Duela hamar urte, ni oso gaztea ___.",
      "options": [
        "naiz",
        "nintzen",
        "zen",
        "ginen"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Nire etxea zure etxea ___ handiagoa da.",
      "options": [
        "baino",
        "bezala",
        "arte",
        "gabe"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Atzo liburu bat irakurri ___.",
      "options": [
        "dut",
        "nintzen",
        "nuen",
        "naiz"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Kontzertuan musika ederra entzuteko, ___ ondo erabili behar ditugu.",
      "options": [
        "begiak",
        "eskuak",
        "oinak",
        "belarriak"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Hortzak minduta, ___ batengana joango naiz.",
      "options": [
        "irakasle",
        "dentista",
        "sukaldari",
        "idazle"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Bihar euria egiten ___, etxean geldituko naiz.",
      "options": [
        "badu",
        "du",
        "zuen",
        "dute"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Everest munduko mendirik ___ da.",
      "options": [
        "garaiagoa",
        "garaia",
        "garaiena",
        "txikiena"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Azterketa gainditu ondoren, oso ___ nengoen.",
      "options": [
        "triste",
        "nekatuta",
        "haserre",
        "pozik"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Gasteiz Euskadiko ___ da.",
      "options": [
        "herria",
        "hiriburua",
        "mendia",
        "ibaia"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Bizitzan, askotan, ___ garrantzitsuak hartu behar ditugu.",
      "options": [
        "erabaki",
        "galdera",
        "erantzun",
        "arazo"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Dendara joan naiz ogia ___.",
      "options": [
        "erosten",
        "erosi",
        "erosteko",
        "erosiko"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Jon atzo iritsi ___ da, baina inork ez du ikusi.",
      "options": [
        "beti",
        "inoiz",
        "gutxi",
        "omen"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Hodeiak ikusita, bihar euria egin ___.",
      "options": [
        "du",
        "dezake",
        "zuen",
        "genuen"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "___ negua hotza dela Euskal Herrian.",
      "options": [
        "Esan gabe doa",
        "Eskerrik asko",
        "Barkatu baina",
        "Zorionak zuri"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Klima aldaketak ___ gero eta gehiago kaltetzen du.",
      "options": [
        "jantzia",
        "kirola",
        "ingurumena",
        "musika"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Urtero, Eguberrietan, nire lagunari opari bat ___.",
      "options": [
        "ematen dut",
        "ematen naiz",
        "ematen zait",
        "ematen diot"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Hodei beltzak ikusita, uste dut bihar euria egingo ___.",
      "options": [
        "dela",
        "duela",
        "da",
        "du"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Ekaitzaren ondoren, ___.",
      "options": [
        "barealdia",
        "ekaitza",
        "hotza",
        "egarria"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Askok uste dute erraza dela; niri, ___, oso zaila iruditzen zait.",
      "options": [
        "edonon",
        "noizbait",
        "ordea",
        "inondik"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Euskaraz mintzatzen den edonori ___ deitzen zaio, jatorria edonon izanda ere.",
      "options": [
        "euskotar",
        "atzerritar",
        "erdaldun",
        "euskaldun"
      ],
      "answer": 3
    }
  ],
  "is": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Ég ___ frá Íslandi.",
      "options": [
        "ert",
        "erum",
        "er",
        "eruð"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "___ heiti Anna.",
      "options": [
        "Ég",
        "Þú",
        "Hann",
        "Við"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Ég ___ ekki íslensku.",
      "options": [
        "talar",
        "tölum",
        "talið",
        "tala"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Þegar ég hitti einhvern segi ég „___“.",
      "options": [
        "Bless",
        "Halló",
        "Takk",
        "Já"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Snjór er ___.",
      "options": [
        "hvítur",
        "svartur",
        "grænn",
        "gulur"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Þetta er ___ minn.",
      "options": [
        "bíll",
        "bílnum",
        "bílsins",
        "bíllinn"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Í gær ___ við í bíó.",
      "options": [
        "förum",
        "fórum",
        "fer",
        "fórst"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Á veturna er oft ___ á Íslandi.",
      "options": [
        "heitt",
        "blautt",
        "kalt",
        "þurrt"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Ég borða ___ á morgnana.",
      "options": [
        "morgunmat",
        "kvöldmat",
        "hádegismat",
        "nesti"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Í búðinni kaupi ég ___ og mjólk.",
      "options": [
        "skó",
        "bók",
        "stól",
        "brauð"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Ég kem ___ Íslandi.",
      "options": [
        "til",
        "frá",
        "í",
        "með"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Reykjavík er ___ en Akureyri.",
      "options": [
        "stór",
        "stærstur",
        "stærri",
        "stærst"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Jón elskar konuna ___.",
      "options": [
        "sína",
        "hans",
        "hennar",
        "þeirra"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Á flugvellinum þarf maður að sýna ___.",
      "options": [
        "matseðil",
        "kvittun",
        "dagatal",
        "vegabréf"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Hann er atvinnulaus, hann er að leita að ___.",
      "options": [
        "mat",
        "vinnu",
        "húsi",
        "bíl"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Ef ég ___ ríkur, myndi ég ferðast um allan heiminn.",
      "options": [
        "er",
        "var",
        "væri",
        "verð"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Bókin ___ ég keypti í gær er mjög góð.",
      "options": [
        "sem",
        "sem hana",
        "hver",
        "hvað"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Samheiti orðsins „fallegur“ er ___.",
      "options": [
        "ljótur",
        "fagur",
        "leiðinlegur",
        "hræðilegur"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Orðatiltækið „að taka til hendinni“ þýðir að ___.",
      "options": [
        "sofna",
        "borða mikið",
        "hætta að vinna",
        "byrja að vinna af krafti"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Andheiti orðsins „gleði“ er ___.",
      "options": [
        "hamingja",
        "ást",
        "sorg",
        "von"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Hann sagði að hún ___ veik heima.",
      "options": [
        "væri",
        "er",
        "var",
        "sé"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "___ langar að læra íslensku.",
      "options": [
        "Ég",
        "Mig",
        "Mér",
        "Mín"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Þótt hann ___ þreyttur, hélt hann áfram að vinna.",
      "options": [
        "er",
        "var",
        "sé",
        "væri"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Orðið „álykta“ þýðir að ___.",
      "options": [
        "spyrja spurningu",
        "gefa skipun",
        "draga rökrétta niðurstöðu af einhverju",
        "syngja lag"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Orðið „skarpgáfaður“ lýsir einhverjum sem er mjög ___.",
      "options": [
        "greindur",
        "latur",
        "hávær",
        "feiminn"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Ég sakna ___ mjög mikið.",
      "options": [
        "hana",
        "hennar",
        "henni",
        "hún"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Lengi ___ Ísland!",
      "options": [
        "lifir",
        "lifði",
        "lifað",
        "lifi"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Orðatiltækið „að leggja árar í bát“ merkir að ___.",
      "options": [
        "gefast upp",
        "byrja nýtt verkefni",
        "fara í siglingu",
        "verða reiður"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Orðatiltækið „að slá tvær flugur í einu höggi“ merkir að ___.",
      "options": [
        "drepa skordýr",
        "missa af tækifæri",
        "leysa tvö verkefni með einni aðgerð",
        "gera mistök tvisvar"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Orðið „feigð“ merkir ___.",
      "options": [
        "mikla gleði",
        "nálægð dauðans",
        "ríkidæmi",
        "langlífi"
      ],
      "answer": 1
    }
  ],
  "mk": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Јас ___ од Германија.",
      "options": [
        "си",
        "е",
        "сум",
        "сте"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Едно дете, две ___.",
      "options": [
        "деца",
        "дете",
        "детиња",
        "детеа"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Тој сака ___ пие вода.",
      "options": [
        "дека",
        "ако",
        "што",
        "да"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Спротивното на 'голем' е ___.",
      "options": [
        "долг",
        "мал",
        "висок",
        "тежок"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Бројот по 'девет' е ___.",
      "options": [
        "десет",
        "осум",
        "единаесет",
        "седум"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Вчера јас ___ во кино.",
      "options": [
        "сум",
        "ќе бидам",
        "бев",
        "бидам"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Утре ние ___ на море.",
      "options": [
        "одиме",
        "ќе одиме",
        "отидовме",
        "одевме"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Денот по среда е ___.",
      "options": [
        "вторник",
        "петок",
        "понеделник",
        "четврток"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Кога врне дожд, носиме ___.",
      "options": [
        "чадор",
        "очила",
        "ракавици",
        "шал"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Место за купување леб и млеко е ___.",
      "options": [
        "болница",
        "училиште",
        "продавница",
        "библиотека"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Минатата година тие ___ во Охрид.",
      "options": [
        "патуваат",
        "патуваа",
        "ќе патуваат",
        "патувале"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Ако имав пари, ___ нова кола.",
      "options": [
        "купувам",
        "купив",
        "ќе купувам",
        "ќе купев"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Секој ден таа ___ кафе наутро.",
      "options": [
        "пие",
        "испие",
        "пиеше",
        "ќе испие"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Лекарот работи во ___.",
      "options": [
        "училиште",
        "банка",
        "болница",
        "пошта"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Личност која учи ученици во училиште се вика ___.",
      "options": [
        "ученик",
        "наставник",
        "директор",
        "родител"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Писмото ___ вчера.",
      "options": [
        "беше напишано",
        "напиша",
        "ќе напише",
        "пишува"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Жената ___ живее до мене е лекарка.",
      "options": [
        "кој",
        "кое",
        "кои",
        "која"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Личност која никогаш не се откажува и упорно ја продолжува работата се опишува како ___.",
      "options": [
        "мрзлива",
        "упорна",
        "срамежлива",
        "невнимателна"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Уметничко дело што се игра во театар со актери се вика ___.",
      "options": [
        "роман",
        "песна",
        "претстава",
        "слика"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Човек кој пишува книги се вика ___.",
      "options": [
        "писател",
        "читател",
        "издавач",
        "уредник"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Него ___ видов вчера на пазар.",
      "options": [
        "му",
        "си",
        "се",
        "го"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "___ е блиску до училиштето.",
      "options": [
        "Стара куќата",
        "Старата куќа",
        "Куќата стара",
        "Старо куќата"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Никој ___ дојде на забавата.",
      "options": [
        "да",
        "ќе",
        "не",
        "би"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Чувството на разбирање и споделување на туѓа болка се нарекува ___.",
      "options": [
        "емпатија",
        "љубомора",
        "гордост",
        "рамнодушност"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Спротивното на 'великодушен' е ___.",
      "options": [
        "храбар",
        "трпелив",
        "искрен",
        "себичен"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "___ тој дојде на состанокот, ниту се јави.",
      "options": [
        "Или",
        "Ниту",
        "Ако",
        "Бидејќи"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Судија кој одлучува без да фаворизира ниту една страна се смета за ___.",
      "options": [
        "нервозен",
        "нерешителен",
        "непристрасен",
        "невнимателен"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Збор со спротивно значење на друг збор се вика ___.",
      "options": [
        "синоним",
        "хомоним",
        "акроним",
        "антоним"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Официјален документ со кој некому му се дава овластување се вика ___.",
      "options": [
        "потврда",
        "полномошно",
        "фактура",
        "покана"
      ],
      "answer": 1
    }
  ],
  "tr": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Ben ___.",
      "options": [
        "öğretmensin",
        "öğretmeniz",
        "öğretmenim",
        "öğretmensiniz"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Bu ___ çok pahalı.",
      "options": [
        "elmalar",
        "elmaler",
        "elmaları",
        "elmalara"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Bu benim ___.",
      "options": [
        "evin",
        "evi",
        "eviniz",
        "evim"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Gökyüzü ___.",
      "options": [
        "tatlıdır",
        "mavidir",
        "hızlıdır",
        "uzundur"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Bu çanta ağır değil, ___.",
      "options": [
        "hafif",
        "tatlı",
        "yüksek",
        "ucuz"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Dün akşam sinemaya ___.",
      "options": [
        "gideceğim",
        "gidiyorum",
        "gittim",
        "giderim"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Yarın ___ gideceğim.",
      "options": [
        "okulda",
        "okula",
        "okuldan",
        "okulu"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Annemin annesi benim ___.",
      "options": [
        "teyzemdir",
        "halamdır",
        "yengemdir",
        "anneannemdir"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Sabah kalkınca önce dişlerimi ___.",
      "options": [
        "fırçalarım",
        "yıkarım",
        "keserim",
        "tararım"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Restoranda yemekten önce garson bize bir ___ verdi.",
      "options": [
        "fatura",
        "bahşiş",
        "menü",
        "tarif"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Param ___, yeni bir araba alırdım.",
      "options": [
        "olursa",
        "olsa",
        "olduysa",
        "olacaksa"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Yarın sınavım var, bu yüzden erken ___.",
      "options": [
        "yatarım",
        "yattım",
        "yatıyordum",
        "yatmalıyım"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Duyduğuma göre, geçen yıl İstanbul'a ___.",
      "options": [
        "taşınmışlar",
        "taşındılar",
        "taşınacaklar",
        "taşınıyorlar"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Uçağı kaçırmamak için sabah erken ___ çıktık.",
      "options": [
        "eve",
        "işe",
        "yola",
        "okula"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Bu ürün çok kaliteli ama fiyatı da o kadar ___.",
      "options": [
        "büyük",
        "yüksek",
        "uzun",
        "geniş"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Bu roman elli yıl önce yazıldı ve daha sonra birçok dile ___.",
      "options": [
        "çevirdi",
        "çevirtti",
        "çevrilmişti",
        "çevrildi"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Dün ___ film gerçekten çok etkileyiciydi.",
      "options": [
        "izlediğim",
        "izleyeceğim",
        "izlediğimde",
        "izlerken"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Hükümetin aldığı yeni ekonomik ___ halk tarafından tepkiyle karşılandı.",
      "options": [
        "hediye",
        "şaka",
        "karar",
        "mektup"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Bu konuda kesin bir ___ varmadan önce daha fazla araştırma yapmalıyız.",
      "options": [
        "cevaba",
        "sonuca",
        "soruya",
        "fikre"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Şirket, artan maliyetler ___ bazı çalışanlarını işten çıkarmak zorunda kaldı.",
      "options": [
        "nedeniyle",
        "gibi",
        "sayesinde",
        "kadar"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Onun bu kadar erken ___ hepimizi şaşırttı.",
      "options": [
        "gelmek",
        "gelmesi",
        "geldiği",
        "geleceği"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Işıklar kapalı, demek ki onlar çoktan eve ___.",
      "options": [
        "gidiyor olmalılar",
        "gitmeliler",
        "gitmiş olsalar",
        "gitmiş olmalılar"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Zaman ___ bu şehri daha çok seviyorum.",
      "options": [
        "geçince",
        "geçtiğinde",
        "geçtikçe",
        "geçerken"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Yazar, romanında toplumsal sorunları ustaca ___.",
      "options": [
        "ele almış",
        "tutmuş",
        "almış",
        "kaldırmış"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Bilim insanları, deney sürecinde hücrelerin davranışlarını dikkatle ___.",
      "options": [
        "seyrettiler",
        "baktılar",
        "tahmin ettiler",
        "gözlemlediler"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Bu şehre ___ iki yıl oldu.",
      "options": [
        "taşınınca",
        "taşınalı",
        "taşınmadan",
        "taşınırken"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Çocuk, hiçbir şey ___ oyununa devam etti.",
      "options": [
        "olmadığı için",
        "olmasa da",
        "olmamışçasına",
        "olmayınca"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Uzmanlar, piyasadaki belirsizlik nedeniyle yatırımcılara ___ davranmalarını tavsiye ediyor.",
      "options": [
        "temkinli",
        "cesur",
        "meraklı",
        "sabırsız"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Yıllardır süren bu tartışmaya nihayet ___ nokta kondu.",
      "options": [
        "bitiş",
        "final",
        "durak",
        "son"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Mahkeme, sunulan yeni deliller ___ dosyayı yeniden incelemeye karar verdi.",
      "options": [
        "gölgesinde",
        "ışığında",
        "altında",
        "yanında"
      ],
      "answer": 1
    }
  ],
  "en": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "She ___ a teacher at our school.",
      "options": [
        "is",
        "are",
        "am",
        "be"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "I have two ___ in my bag.",
      "options": [
        "book",
        "books",
        "bookes",
        "booking"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Every morning he ___ a cup of coffee.",
      "options": [
        "drink",
        "drinking",
        "drinks",
        "to drink"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "My brother is ten years ___.",
      "options": [
        "new",
        "tall",
        "big",
        "old"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "I'm thirsty. Can I have a glass of ___?",
      "options": [
        "water",
        "bread",
        "paper",
        "wood"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Yesterday we ___ to the cinema.",
      "options": [
        "go",
        "goes",
        "going",
        "went"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "This box is ___ than that one.",
      "options": [
        "heavy",
        "heavier",
        "heaviest",
        "more heavy"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "What time do you usually ___ up in the morning?",
      "options": [
        "sleep",
        "dream",
        "wake",
        "rest"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "It's raining, so take an ___ with you.",
      "options": [
        "umbrella",
        "apple",
        "engine",
        "orange"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "The opposite of 'expensive' is ___.",
      "options": [
        "costly",
        "pricey",
        "dear",
        "cheap"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "We ___ lived here since 2015.",
      "options": [
        "are",
        "have",
        "has",
        "were"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "If it rains tomorrow, we ___ at home.",
      "options": [
        "stay",
        "stayed",
        "will stay",
        "would stay"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "The man ___ lives next door is a doctor.",
      "options": [
        "who",
        "which",
        "whose",
        "whom"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "The instructions were so ___ that nobody could understand them.",
      "options": [
        "clear",
        "simple",
        "obvious",
        "confusing"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "I'll ___ it up in the dictionary.",
      "options": [
        "see",
        "look",
        "watch",
        "find"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "The bridge ___ in 1890 by a famous engineer.",
      "options": [
        "built",
        "was built",
        "is built",
        "had been building"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "If she had studied harder, she ___ the exam.",
      "options": [
        "would pass",
        "passed",
        "had passed",
        "would have passed"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "She's very good ___ solving problems under pressure.",
      "options": [
        "at",
        "in",
        "on",
        "for"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "The new manager was determined to ___ the company's outdated procedures.",
      "options": [
        "overlook",
        "overcome",
        "overhaul",
        "overtake"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "He stayed calm and ___ even when everyone else panicked.",
      "options": [
        "confused",
        "frantic",
        "composed",
        "anxious"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Not only ___ late, but he also forgot the tickets.",
      "options": [
        "he was",
        "was he",
        "did he",
        "he did"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "___ I known about the traffic, I would have left earlier.",
      "options": [
        "If",
        "Should",
        "Had",
        "Were"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "___ I really need right now is a good night's sleep.",
      "options": [
        "That",
        "Which",
        "It",
        "What"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Her argument was so ___ that even her critics were persuaded.",
      "options": [
        "compelling",
        "tedious",
        "feeble",
        "dubious"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "After the scandal, the minister had no choice but to ___ from his position.",
      "options": [
        "step up",
        "step down",
        "step in",
        "step out"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "No sooner had we sat down ___ the phone rang.",
      "options": [
        "than",
        "then",
        "when",
        "that"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Were it not ___ your help, we would have failed.",
      "options": [
        "of",
        "to",
        "by",
        "for"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Which word means 'to formally give up a throne or high office'?",
      "options": [
        "abrogate",
        "abscond",
        "abdicate",
        "abstain"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Don't count your ___ before they hatch.",
      "options": [
        "eggs",
        "chickens",
        "birds",
        "hens"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "His ___ remarks at the funeral were entirely inappropriate for such a solemn occasion.",
      "options": [
        "solemn",
        "earnest",
        "grave",
        "flippant"
      ],
      "answer": 3
    }
  ],
  "de": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "___ Sonne scheint heute.",
      "options": [
        "die",
        "der",
        "das",
        "den"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Ich ___ Student.",
      "options": [
        "bist",
        "bin",
        "ist",
        "sind"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Ich habe ___ Bruder.",
      "options": [
        "ein",
        "eine",
        "einen",
        "einem"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Ich trinke morgens gern eine Tasse ___.",
      "options": [
        "Brot",
        "Stuhl",
        "Auto",
        "Kaffee"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Meine Mutter und mein Vater sind meine ___.",
      "options": [
        "Eltern",
        "Kinder",
        "Geschwister",
        "Großeltern"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Gestern ___ ich einen Film gesehen.",
      "options": [
        "bin",
        "habe",
        "wird",
        "sind"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Wir ___ am Wochenende ins Kino gehen.",
      "options": [
        "kann",
        "kannst",
        "können",
        "könnt"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Ich kaufe Brot und Milch im ___.",
      "options": [
        "Supermarkt",
        "Krankenhaus",
        "Bahnhof",
        "Schwimmbad"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Mir ist kalt. Kannst du bitte das Fenster ___?",
      "options": [
        "öffnen",
        "putzen",
        "streichen",
        "schließen"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Nach dem Essen muss ich das Geschirr ___.",
      "options": [
        "kochen",
        "backen",
        "spülen",
        "schneiden"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Wenn ich Zeit hätte, ___ ich dir helfen.",
      "options": [
        "werde",
        "würde",
        "wurde",
        "wäre"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Das ist das Auto ___ Mannes.",
      "options": [
        "dem",
        "der",
        "den",
        "des"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Ich habe einen ___ Hund.",
      "options": [
        "große",
        "großer",
        "großen",
        "großes"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Ich muss eine wichtige Entscheidung ___.",
      "options": [
        "machen",
        "treffen",
        "nehmen",
        "geben"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Bei diesem schlechten Wetter sollten wir den Ausflug ___.",
      "options": [
        "besuchen",
        "verlieren",
        "verbringen",
        "verschieben"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Das neue Museum ___ nächstes Jahr eröffnet.",
      "options": [
        "ist",
        "hat",
        "wird",
        "war"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Trotz des ___ Wetters gingen wir spazieren.",
      "options": [
        "schlechtem",
        "schlechten",
        "schlechtes",
        "schlechte"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Die Regierung hat strenge Maßnahmen ___, um die Krise zu bewältigen.",
      "options": [
        "genommen",
        "gemacht",
        "gefangen",
        "ergriffen"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Nach langer Diskussion kamen wir endlich zu einem ___.",
      "options": [
        "Vorschlag",
        "Kompromiss",
        "Gespräch",
        "Vortrag"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Der Politiker wurde wegen Korruption scharf ___.",
      "options": [
        "kritisiert",
        "gelobt",
        "gefeiert",
        "beglückwünscht"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Das von der Kommission ___ Gutachten wurde veröffentlicht.",
      "options": [
        "erstellende",
        "erstellte",
        "erstellt",
        "erstellen"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Wenn ich das gewusst hätte, ___ ich anders gehandelt.",
      "options": [
        "würde",
        "wäre",
        "hatte",
        "hätte"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Angesichts ___ Gefahr bewahrte er die Ruhe.",
      "options": [
        "die",
        "der",
        "dem",
        "den"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Mit seiner unüberlegten Bemerkung hat er das Problem nur noch ___.",
      "options": [
        "gelindert",
        "geschlichtet",
        "behoben",
        "verschärft"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Bei der schwierigen Verhandlung musste er viel Fingerspitzengefühl ___.",
      "options": [
        "beweisen",
        "gewinnen",
        "treffen",
        "halten"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Er war sich ___ Tragweite seiner Entscheidung nicht bewusst.",
      "options": [
        "der",
        "die",
        "dem",
        "den"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Das Projekt hätte längst abgeschlossen werden ___.",
      "options": [
        "gemusst",
        "müssen",
        "müsste",
        "müssten"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Seine ___ Ausdrucksweise verriet seine vornehme Herkunft.",
      "options": [
        "gewöhnliche",
        "gewagte",
        "gewählte",
        "gewohnte"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Mit dieser unklugen Bemerkung hat er sich ins eigene ___ geschnitten.",
      "options": [
        "Bein",
        "Herz",
        "Auge",
        "Fleisch"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Sein Verhalten war nicht nur unhöflich, sondern geradezu ___.",
      "options": [
        "unverschämt",
        "unauffällig",
        "unscheinbar",
        "unentschlossen"
      ],
      "answer": 0
    }
  ],
  "fr": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Voici ___ pomme rouge sur la table.",
      "options": [
        "une",
        "un",
        "des",
        "le"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Nous ___ contents de te voir aujourd'hui.",
      "options": [
        "avons",
        "sommes",
        "êtes",
        "sont"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Le week-end, elle ___ au tennis avec son frère.",
      "options": [
        "joues",
        "jouez",
        "joue",
        "jouer"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Le matin, je bois un ___ bien chaud.",
      "options": [
        "chien",
        "livre",
        "sac",
        "café"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Pour écrire une lettre, j'utilise un ___.",
      "options": [
        "stylo",
        "verre",
        "lit",
        "gâteau"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Demain, je ___ visiter le musée du quartier.",
      "options": [
        "vas",
        "vais",
        "allons",
        "suis"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Elle est ___ à Paris la semaine dernière.",
      "options": [
        "allé",
        "aller",
        "allée",
        "allez"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Il fait froid dehors, mets ton ___.",
      "options": [
        "maillot",
        "short",
        "sandales",
        "manteau"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Quand je suis malade, je prends rendez-vous avec le ___.",
      "options": [
        "médecin",
        "boulanger",
        "facteur",
        "coiffeur"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Pour acheter du pain frais, je vais à la ___.",
      "options": [
        "pharmacie",
        "boulangerie",
        "librairie",
        "piscine"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Il faut que tu ___ tes devoirs avant de sortir.",
      "options": [
        "fais",
        "fait",
        "fasses",
        "feras"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "À la piscine, j'___ vais tous les jours.",
      "options": [
        "en",
        "le",
        "la",
        "y"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Ces fleurs ? Je les ai ___ ce matin au marché.",
      "options": [
        "achetées",
        "acheté",
        "achetés",
        "achetée"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Je suis fatigué, ___ je vais me coucher tôt ce soir.",
      "options": [
        "pourtant",
        "c'est pourquoi",
        "malgré",
        "bien que"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Après une longue réflexion, il a ___ une décision importante.",
      "options": [
        "fait",
        "donné",
        "pris",
        "mis"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Si elle avait révisé, elle ___ son examen la semaine dernière.",
      "options": [
        "réussirait",
        "avait réussi",
        "aurait réussir",
        "aurait réussi"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Bien qu'il ___ très riche, il vit de façon très simple.",
      "options": [
        "soit",
        "est",
        "était",
        "sera"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Après l'accident, il a fait preuve d'un grand ___.",
      "options": [
        "embouteillage",
        "sang-froid",
        "vacarme",
        "gaspillage"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Le directeur a décidé de ___ la réunion à la semaine prochaine.",
      "options": [
        "rapporter",
        "supporter",
        "reporter",
        "transporter"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Ce projet me tient vraiment à ___.",
      "options": [
        "tête",
        "main",
        "pied",
        "cœur"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Je suis ravi que tu ___ venir à la fête hier.",
      "options": [
        "aies pu",
        "as pu",
        "avais pu",
        "puisses"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Il m'a dit qu'il ___ le lendemain sans faute.",
      "options": [
        "viendra",
        "viendrait",
        "vient",
        "soit venu"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "C'est une situation à ___ je ne m'attendais pas du tout.",
      "options": [
        "lequel",
        "qui",
        "laquelle",
        "dont"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Cette décision risque de ___ une situation déjà très tendue.",
      "options": [
        "apaiser",
        "clarifier",
        "résoudre",
        "envenimer"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Elle a ___ ses responsabilités avec beaucoup de sérieux.",
      "options": [
        "assumé",
        "supposé",
        "résumé",
        "consumé"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "___ qu'il en soit, nous devons agir sans attendre.",
      "options": [
        "Quoique",
        "Quoi",
        "Quel",
        "Quelque"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Elle s'est ___ les cheveux juste avant de partir.",
      "options": [
        "lavée",
        "lavés",
        "lavé",
        "laver"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Son discours, truffé de ___, a fini par lasser l'auditoire.",
      "options": [
        "prouesses",
        "trouvailles",
        "mérites",
        "truismes"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Il a défendu son projet ___ et contre tous.",
      "options": [
        "envers",
        "contre",
        "malgré",
        "devant"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Cette remarque acerbe était teintée d'une ___ à peine voilée.",
      "options": [
        "allégresse",
        "acrimonie",
        "mansuétude",
        "quiétude"
      ],
      "answer": 1
    }
  ],
  "es": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "___ niños juegan en el parque por la tarde.",
      "options": [
        "Los",
        "Las",
        "El",
        "La"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Yo ___ profesora de matemáticas.",
      "options": [
        "eres",
        "soy",
        "es",
        "son"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Nosotros ___ español en clase todos los días.",
      "options": [
        "hablan",
        "hablas",
        "hablamos",
        "hablo"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Por la mañana bebo un vaso de ___.",
      "options": [
        "silla",
        "zapato",
        "papel",
        "leche"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Para escribir una carta necesito un ___.",
      "options": [
        "bolígrafo",
        "tenedor",
        "zapato",
        "plato"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "María es más alta ___ su hermana pequeña.",
      "options": [
        "como",
        "que",
        "de",
        "más"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "El año pasado mis padres ___ una casa en el campo.",
      "options": [
        "compran",
        "comprarán",
        "compraron",
        "comprar"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Si quieres comprar pan fresco, ve a la ___.",
      "options": [
        "panadería",
        "ferretería",
        "biblioteca",
        "peluquería"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Hace mucho calor; voy a abrir la ___ para que entre aire.",
      "options": [
        "pared",
        "alfombra",
        "ventana",
        "silla"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Después de correr la maratón, Pedro estaba completamente ___.",
      "options": [
        "rápido",
        "cansado",
        "alto",
        "vacío"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Quiero que ___ a la fiesta conmigo esta noche.",
      "options": [
        "vienes",
        "vendrás",
        "venir",
        "vengas"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Cuando ___ a casa esta noche, te llamaré.",
      "options": [
        "llegue",
        "llego",
        "llegaré",
        "llegaría"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "¿Le diste el regalo a Ana? Sí, ___ di ayer.",
      "options": [
        "le lo",
        "lo le",
        "se lo",
        "se la"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Estudié muy poco; ___, conseguí aprobar el examen.",
      "options": [
        "por lo tanto",
        "además",
        "por eso",
        "sin embargo"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Antes de actuar, tienes que ___ una decisión importante.",
      "options": [
        "hacer",
        "tomar",
        "coger",
        "poner"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Si ___ más tiempo libre, viajaría por todo el mundo.",
      "options": [
        "tengo",
        "tendría",
        "tendré",
        "tuviera"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Insistió ___ que lo acompañáramos a la reunión.",
      "options": [
        "de",
        "en",
        "a",
        "con"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Su argumento era tan ___ que nadie pudo rebatirlo.",
      "options": [
        "débil",
        "vacío",
        "sólido",
        "falso"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Tras años de esfuerzo, el proyecto por fin dio sus ___.",
      "options": [
        "frutos",
        "flores",
        "hojas",
        "ramas"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Debido a la crisis, la empresa tuvo que ___ a media plantilla.",
      "options": [
        "contratar",
        "ascender",
        "formar",
        "despedir"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Si me lo ___ antes, te habría ayudado sin dudarlo.",
      "options": [
        "habías dicho",
        "dijeras",
        "has dicho",
        "hubieras dicho"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "De haberlo ___ antes, habría actuado de otra manera.",
      "options": [
        "sabido",
        "saber",
        "sabiendo",
        "sé"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Me trató con frialdad, como si no me ___ de nada.",
      "options": [
        "conoce",
        "conozca",
        "conociera",
        "conocería"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "El gobierno aprobó nuevas medidas para ___ los efectos de la crisis.",
      "options": [
        "agravar",
        "paliar",
        "ignorar",
        "provocar"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "El director hizo ___ en la importancia de la puntualidad.",
      "options": [
        "caso",
        "mención",
        "frente",
        "hincapié"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "No es que no me ___ salir, es que estoy completamente agotado.",
      "options": [
        "apetece",
        "apetezca",
        "apetecería",
        "apetecía"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Ojalá me ___ caso cuando te lo advertí en su momento.",
      "options": [
        "hubieras hecho",
        "habrías hecho",
        "hayas hecho",
        "hicieras"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Decidieron olvidar las viejas disputas y hacer borrón y cuenta ___.",
      "options": [
        "vieja",
        "limpia",
        "nueva",
        "clara"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Es una persona muy ___: jamás gasta más de lo estrictamente necesario.",
      "options": [
        "derrochadora",
        "generosa",
        "austera",
        "presumida"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Deja de irte por las ___ y dime de una vez qué ha pasado.",
      "options": [
        "nubes",
        "hojas",
        "raíces",
        "ramas"
      ],
      "answer": 3
    }
  ],
  "it": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "___ studente è sempre puntuale.",
      "options": [
        "Il",
        "La",
        "Lo",
        "Le"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Tu ___ molto gentile con tutti.",
      "options": [
        "sono",
        "sei",
        "è",
        "siete"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Noi ___ due gatti neri.",
      "options": [
        "ho",
        "hai",
        "hanno",
        "abbiamo"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Ho sete, vorrei un bicchiere d'___.",
      "options": [
        "acqua",
        "pane",
        "sole",
        "sedia"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Mio padre e mia madre sono i miei ___.",
      "options": [
        "fratelli",
        "genitori",
        "figli",
        "nonni"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Stamattina ___ il treno delle otto.",
      "options": [
        "ho perso",
        "perdo",
        "perderò",
        "perdere"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Marco è più alto ___ Luca.",
      "options": [
        "che",
        "come",
        "più",
        "di"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Per comprare il pane vado ___.",
      "options": [
        "dal medico",
        "in banca",
        "dal panettiere",
        "alla stazione"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Fa molto freddo, esco con il ___.",
      "options": [
        "cappotto",
        "gelato",
        "ventilatore",
        "costume"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Ho mal di denti, domani vado dal ___.",
      "options": [
        "cuoco",
        "postino",
        "giardiniere",
        "dentista"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Voglio che tu ___ sempre la verità.",
      "options": [
        "dici",
        "dica",
        "dire",
        "dirai"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "I biglietti del concerto ___ ho già comprati ieri.",
      "options": [
        "le",
        "gli",
        "li",
        "lo"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Non sono uscito ___ pioveva a dirotto.",
      "options": [
        "perché",
        "perciò",
        "affinché",
        "nonostante"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Alla fine ho ___ una decisione difficile.",
      "options": [
        "fatto",
        "dato",
        "preso",
        "messo"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Il film era così noioso che mi sono ___.",
      "options": [
        "svegliato",
        "alzato",
        "divertito",
        "addormentato"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Se ___ più tempo libero, viaggerei molto di più.",
      "options": [
        "avrei",
        "avessi",
        "ho",
        "avrò"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Solo dopo mi sono accorto ___ aver sbagliato strada.",
      "options": [
        "di",
        "a",
        "da",
        "per"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Dopo otto ore di cammino in montagna, ero ___ e non riuscivo più a muovermi.",
      "options": [
        "euforico",
        "entusiasta",
        "esausto",
        "sereno"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "A causa della crisi, l'azienda ha dovuto ___ molti dipendenti.",
      "options": [
        "assumere",
        "promuovere",
        "formare",
        "licenziare"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Le sue parole erano piene di ___: diceva una cosa e ne pensava un'altra.",
      "options": [
        "ipocrisia",
        "sincerità",
        "entusiasmo",
        "modestia"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "___ studiato tutta la notte, era troppo stanco per affrontare l'esame.",
      "options": [
        "Essendo",
        "Avuto",
        "Avendo",
        "Stando"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Benché ___ già molto tardi, decise di uscire lo stesso.",
      "options": [
        "era",
        "fosse",
        "è",
        "sia"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "La nuova legge va ___ entro la fine dell'anno.",
      "options": [
        "approvare",
        "ad approvare",
        "approvando",
        "approvata"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Non drammatizzare: stai facendo una tempesta in un ___ d'acqua.",
      "options": [
        "bicchiere",
        "mare",
        "fiume",
        "lago"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Il suo ragionamento era così ___ che nessuno riuscì a seguirlo.",
      "options": [
        "limpido",
        "conciso",
        "contorto",
        "schietto"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Senza occhiali non ___ vedo proprio nulla.",
      "options": [
        "ce",
        "ci",
        "mi",
        "ne"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "___ tu avessi bisogno di qualcosa, non esitare a chiamarmi.",
      "options": [
        "Qualora",
        "Sebbene",
        "Affinché",
        "Purché"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Quella vecchia lite ormai è acqua ___: non vale più la pena parlarne.",
      "options": [
        "corrente",
        "cheta",
        "passata",
        "alta"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Con i suoi modi ___, riuscì a conquistare la simpatia anche dei più diffidenti.",
      "options": [
        "arcigno",
        "scontroso",
        "ostile",
        "affabile"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "I giornali hanno ___ la notizia per giorni, esagerandone ogni minimo dettaglio.",
      "options": [
        "accennato",
        "enfatizzato",
        "sussurrato",
        "taciuto"
      ],
      "answer": 1
    }
  ],
  "pt": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Nós ___ estudantes de português.",
      "options": [
        "somos",
        "sou",
        "são",
        "é"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Todo dia eu ___ ao trabalho de carro.",
      "options": [
        "vai",
        "vou",
        "vamos",
        "vão"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "___ casas são muito bonitas.",
      "options": [
        "A",
        "O",
        "As",
        "Um"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Minha irmã tem dois filhos: um menino e uma ___.",
      "options": [
        "rapaz",
        "garoto",
        "homem",
        "menina"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Está muito calor, então vou beber um copo de ___ gelada.",
      "options": [
        "água",
        "pão",
        "fogo",
        "papel"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Ontem nós ___ ao cinema.",
      "options": [
        "vamos",
        "fomos",
        "iremos",
        "foram"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Este livro é ___ interessante do que o outro.",
      "options": [
        "tão",
        "muito",
        "mais",
        "melhor"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Preciso comprar pão na ___.",
      "options": [
        "farmácia",
        "biblioteca",
        "escola",
        "padaria"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Está chovendo muito, então não esqueça o ___.",
      "options": [
        "guarda-chuva",
        "chinelo",
        "ventilador",
        "óculos de sol"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "No verão, gosto de ir à ___ para nadar no mar.",
      "options": [
        "montanha",
        "praia",
        "floresta",
        "cidade"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Espero que você ___ bem na prova amanhã.",
      "options": [
        "vai",
        "vão",
        "vá",
        "foi"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Talvez ele ___ atrasado para a reunião.",
      "options": [
        "está",
        "é",
        "seja",
        "esteja"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Quando eu ___ tempo, ligo para você.",
      "options": [
        "tiver",
        "tenho",
        "tinha",
        "terei"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Ele não estudou, ___ foi reprovado no exame.",
      "options": [
        "porém",
        "por isso",
        "embora",
        "caso"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Preciso ___ uma decisão importante hoje.",
      "options": [
        "fazer",
        "dar",
        "tomar",
        "pegar"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Se eu ___ mais dinheiro, viajaria pelo mundo.",
      "options": [
        "tinha",
        "tenha",
        "teria",
        "tivesse"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Ela não se lembra ___ nome dele.",
      "options": [
        "do",
        "o",
        "no",
        "ao"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "As provas apresentadas foram ___ para absolver o réu.",
      "options": [
        "triviais",
        "cruciais",
        "supérfluas",
        "irrelevantes"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "O governo prometeu ___ medidas para conter a inflação.",
      "options": [
        "adiar",
        "ignorar",
        "adotar",
        "admirar"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Para aumentar o lucro, a empresa decidiu ___ gastos supérfluos.",
      "options": [
        "gerar",
        "acumular",
        "expandir",
        "cortar"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Caso ___ alguma dúvida, não hesite em perguntar.",
      "options": [
        "haja",
        "há",
        "havia",
        "haver"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "___ terminado o relatório, ele saiu para almoçar.",
      "options": [
        "Ter",
        "Tendo",
        "Tido",
        "Tenho"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Quando você ___ o documento na mesa, avise-me.",
      "options": [
        "ver",
        "vier",
        "vir",
        "visse"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Seu argumento é ___; não há como refutá-lo.",
      "options": [
        "refutável",
        "discutível",
        "frágil",
        "irrefutável"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Ele ficou ___ ao saber da notícia trágica.",
      "options": [
        "consternado",
        "eufórico",
        "alegre",
        "radiante"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Não há nada que se ___ à beleza daquela paisagem.",
      "options": [
        "compara",
        "compare",
        "comparava",
        "comparasse"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Por mais que se ___, ele não conseguiu convencê-los.",
      "options": [
        "esforçava",
        "esforçou",
        "esforçasse",
        "esforce"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Sua prosa é tão ___ que poucos compreendem o sentido.",
      "options": [
        "límpida",
        "acessível",
        "transparente",
        "hermética"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Ele não tem papas na ___ quando precisa criticar alguém.",
      "options": [
        "língua",
        "boca",
        "garganta",
        "cabeça"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "O discurso dele foi pura ___: muitas palavras e nenhuma ideia.",
      "options": [
        "eloquência",
        "verborragia",
        "concisão",
        "objetividade"
      ],
      "answer": 1
    }
  ],
  "ru": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Это ___ книга.",
      "options": [
        "мой",
        "моя",
        "моё",
        "мои"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Я хорошо ___ по-русски.",
      "options": [
        "говорю",
        "говоришь",
        "говорит",
        "говорят"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Каждый вечер Маша читает эту интересную ___ .",
      "options": [
        "книга",
        "книги",
        "книгу",
        "книге"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Меня ___ Анна, я из Москвы.",
      "options": [
        "говорят",
        "зовут",
        "знают",
        "любят"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Я хочу ___ . Дай мне, пожалуйста, воды.",
      "options": [
        "есть",
        "спать",
        "пить",
        "читать"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Вчера Иван ___ интересный фильм по телевизору.",
      "options": [
        "смотрел",
        "смотрела",
        "смотрело",
        "смотрели"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "У меня нет старшей ___ .",
      "options": [
        "сестра",
        "сестре",
        "сестры",
        "сестру"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Каждое утро я ___ зубы и принимаю душ.",
      "options": [
        "мою",
        "чищу",
        "стираю",
        "убираю"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Чтобы поехать в Москву, мне нужно ___ билет на поезд.",
      "options": [
        "продать",
        "заплатить",
        "стоить",
        "купить"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "После целого дня работы он очень ___ и хотел спать.",
      "options": [
        "устал",
        "отдохнул",
        "проснулся",
        "выспался"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Мой старший брат работает ___ в большой компании.",
      "options": [
        "инженер",
        "инженера",
        "инженером",
        "инженере"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Обычно я ___ домой около шести и сразу готовлю ужин.",
      "options": [
        "прихожу",
        "приду",
        "пришёл",
        "приходил"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Каждый день он ___ на работу на автобусе.",
      "options": [
        "идёт",
        "ходит",
        "едет",
        "ездит"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Я взял с собой зонт, ___ на улице шёл сильный дождь.",
      "options": [
        "потому что",
        "поэтому",
        "хотя",
        "чтобы"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Прежде чем действовать, нам нужно ___ важное решение.",
      "options": [
        "взять",
        "принять",
        "сделать",
        "дать"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Машина медленно ___ к дому и остановилась у ворот.",
      "options": [
        "отъехала",
        "подъехала",
        "переехала",
        "въехала"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Если бы я знал об этом заранее, я обязательно ___ тебе.",
      "options": [
        "помог бы",
        "помогу",
        "помогал",
        "помогать"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Молодые учёные ___ важное научное открытие.",
      "options": [
        "нашли",
        "открыли",
        "изобрели",
        "сделали"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Родители должны ___ больше внимания воспитанию своих детей.",
      "options": [
        "обращать",
        "отдавать",
        "уделять",
        "давать"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Его доводы звучали логично, но меня они совсем не ___ .",
      "options": [
        "доказали",
        "убедили",
        "объяснили",
        "уверили"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "___ домой после работы, он вдруг вспомнил о важной встрече.",
      "options": [
        "Возвращаться",
        "Возвращаясь",
        "Возвращался",
        "Возвратив"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Молодой учёный подвергся ___ со стороны коллег.",
      "options": [
        "резкой критики",
        "резкую критику",
        "резкой критике",
        "резкой критикой"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Опытный водитель никогда не станет пренебрегать ___ дорожного движения.",
      "options": [
        "правилами",
        "правила",
        "правил",
        "правилам"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Его блестящая речь произвела на слушателей сильное ___ .",
      "options": [
        "влияние",
        "ощущение",
        "воздействие",
        "впечатление"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "После операции больной медленно, но верно пошёл на ___ .",
      "options": [
        "улучшение",
        "поправку",
        "выздоровление",
        "исправление"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Это было не что ___, как обыкновенное недоразумение.",
      "options": [
        "другое",
        "иное",
        "иначе",
        "иными"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "За свой подвиг он удостоился самой высокой ___ .",
      "options": [
        "награду",
        "наградой",
        "награде",
        "награды"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Он относится к своим обязанностям спустя ___ , и начальник им недоволен.",
      "options": [
        "рукава",
        "руки",
        "пальцы",
        "рукавов"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Этот экзамен дался ему с большим ___ : он готовился несколько месяцев.",
      "options": [
        "усилием",
        "напряжением",
        "трудом",
        "старанием"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Журналист задал политику весьма ___ вопрос, на который было трудно ответить.",
      "options": [
        "лёгкий",
        "простой",
        "добрый",
        "каверзный"
      ],
      "answer": 3
    }
  ],
  "sr": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Ja ___ student.",
      "options": [
        "sam",
        "si",
        "je",
        "smo"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "On ___ kafu svako jutro.",
      "options": [
        "pijem",
        "piješ",
        "pije",
        "piju"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Živim ___ Beogradu već pet godina.",
      "options": [
        "iz",
        "u",
        "na",
        "do"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Otac moje majke je moj ___.",
      "options": [
        "brat",
        "sin",
        "stric",
        "deda"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Kada sam umoran, idem da ___.",
      "options": [
        "spavam",
        "trčim",
        "pevam",
        "kuvam"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Juče sam ___ u bioskop sa drugom.",
      "options": [
        "idem",
        "išao",
        "ići",
        "idi"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Danas je napolju ___ nego juče.",
      "options": [
        "toplo",
        "topli",
        "najtoplije",
        "toplije"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Svako jutro kupujem svež hleb u ___.",
      "options": [
        "pekari",
        "apoteci",
        "banci",
        "pošti"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Posle jela moram da ___ zube.",
      "options": [
        "obučem",
        "otvorim",
        "operem",
        "zatvorim"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Ponesi kišobran jer napolju ___ kiša.",
      "options": [
        "sija",
        "pada",
        "duva",
        "grmi"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Došao je na put potpuno bez ___.",
      "options": [
        "novac",
        "novcu",
        "novca",
        "novcem"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Ova haljina ___ zaista lepo stoji.",
      "options": [
        "joj",
        "je",
        "ju",
        "nju"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Nisam izašao napolje ___ je padala jaka kiša.",
      "options": [
        "ali",
        "ili",
        "kao",
        "jer"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Profesore, smem li da ___ jedno pitanje?",
      "options": [
        "pitam",
        "postavim",
        "kažem",
        "tražim"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Njegova objašnjenja bila su ___, pa niko ništa nije razumeo.",
      "options": [
        "jasna",
        "korisna",
        "nejasna",
        "zanimljiva"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Naš konačni uspeh zavisi ___ truda svih nas.",
      "options": [
        "od",
        "na",
        "o",
        "za"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Da imam vremena, ja ___ ti rado pomogao.",
      "options": [
        "bi",
        "bismo",
        "biste",
        "bih"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Vlada je najavila nove mere da bi ___ inflaciju.",
      "options": [
        "povećala",
        "suzbila",
        "proslavila",
        "izmislila"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "On je veoma ___ čovek; nikada ne troši novac bez potrebe.",
      "options": [
        "darežljiv",
        "rasipan",
        "štedljiv",
        "lenj"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Molim vas da ___ pažnju na sledeće detalje ugovora.",
      "options": [
        "date",
        "uzmete",
        "platite",
        "obratite"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "To je onaj čovek ___ sam slučajno video juče.",
      "options": [
        "koji",
        "kome",
        "kojim",
        "koga"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Juče ___ ispričao jednu zaista zanimljivu priču.",
      "options": [
        "mi je",
        "je mi",
        "mi sam",
        "sam mi"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Videla sam tri mlada ___ ispred škole.",
      "options": [
        "ljudi",
        "čoveka",
        "čoveku",
        "čovek"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Posle samo jednog razgovora, ___ sam utisak da je veoma sposoban.",
      "options": [
        "napravio",
        "uzeo",
        "stekao",
        "dao"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Bio je poznat po svojoj ___: nikada nikoga nije slagao.",
      "options": [
        "lukavosti",
        "tvrdoglavosti",
        "radoznalosti",
        "iskrenosti"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Kada to ču, on samo nemo ___ glavom i ode.",
      "options": [
        "odmahne",
        "odmahnu",
        "odmahnuo",
        "odmahivati"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "To je onaj pisac ___ romane svi obožavaju.",
      "options": [
        "čije",
        "čiji",
        "čijih",
        "čijim"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Nakon mnogo godina truda, konačno je ___ plodove svog rada.",
      "options": [
        "pokupio",
        "posejao",
        "ubrao",
        "oborio"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Njegov ___ osmeh odavao je da nešto prikriva.",
      "options": [
        "iskren",
        "srdačan",
        "blistav",
        "podmukao"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Ne preteruj toliko, opet praviš od ___ slona.",
      "options": [
        "mrava",
        "muve",
        "miša",
        "mačke"
      ],
      "answer": 1
    }
  ],
  "nl": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Hij ___ elke dag naar zijn werk.",
      "options": [
        "ga",
        "gaat",
        "gaan",
        "gegaan"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "In de winter is het koud, maar in de zomer is het lekker ___.",
      "options": [
        "nat",
        "donker",
        "warm",
        "koud"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Wij wonen in een klein dorp. ___ dorp is heel rustig.",
      "options": [
        "Het",
        "De",
        "Een",
        "Aan"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "De zoon van mijn broer is mijn ___.",
      "options": [
        "oom",
        "opa",
        "nicht",
        "neef"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Ik heb drie ___ in mijn tas.",
      "options": [
        "boek",
        "boeke",
        "boeken",
        "boeks"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Wij ___ gisteren naar de bioscoop geweest.",
      "options": [
        "zijn",
        "hebben",
        "gaan",
        "worden"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Ik heb honger. Ik ga een broodje ___.",
      "options": [
        "drinken",
        "slapen",
        "lopen",
        "eten"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Mijn broer is twee jaar ___ dan ik.",
      "options": [
        "oud",
        "ouder",
        "oudst",
        "oudere"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Kun je het licht ___? Het is donker in de kamer.",
      "options": [
        "uitdoen",
        "wassen",
        "aandoen",
        "sluiten"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Hij zegt dat hij morgen heel vroeg ___.",
      "options": [
        "opstaat",
        "staat op",
        "opstaan",
        "staat"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Ik ga naar de bibliotheek ___ een boek te lenen.",
      "options": [
        "want",
        "omdat",
        "zodat",
        "om"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Hij heeft een belangrijke ___ genomen: hij gaat verhuizen.",
      "options": [
        "mening",
        "beslissing",
        "gedachte",
        "afspraak"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Het huis ___ wij vorig jaar gekocht hebben, is heel oud.",
      "options": [
        "die",
        "wie",
        "dat",
        "wat"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "De docent probeerde de moeilijke regel duidelijk uit te ___.",
      "options": [
        "leggen",
        "spreken",
        "drukken",
        "zoeken"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Toen ik klein was, ___ ik elke zomer bij mijn oma.",
      "options": [
        "logeer",
        "logeerde",
        "heb gelogeerd",
        "logeren"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Ik twijfel nog ___ zijn eerlijkheid.",
      "options": [
        "op",
        "over",
        "aan",
        "voor"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "De wandeling was lang en zwaar; aan het eind waren we volledig ___.",
      "options": [
        "uitgeput",
        "verveeld",
        "teleurgesteld",
        "opgewonden"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Ik heb de hele dag thuis moeten ___ omdat ik op de monteur wachtte.",
      "options": [
        "gebleven",
        "bleef",
        "blijf",
        "blijven"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Zijn argument was zo ___ dat niemand het kon weerleggen.",
      "options": [
        "twijfelachtig",
        "overtuigend",
        "oppervlakkig",
        "verwarrend"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "___ hard hij ook werkte, hij kreeg het project niet op tijd af.",
      "options": [
        "Zo",
        "Als",
        "Wat",
        "Hoe"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Na maanden onderhandelen bereikten de partijen eindelijk een ___.",
      "options": [
        "compromis",
        "conflict",
        "misverstand",
        "verbod"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Niemand had ___ gerekend dat de situatie zo snel zou verslechteren.",
      "options": [
        "eraan",
        "ermee",
        "erop",
        "erover"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "De minister gaf een ___ antwoord en vermeed elke duidelijke uitspraak.",
      "options": [
        "eerlijk",
        "ontwijkend",
        "helder",
        "uitvoerig"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Had ik dat geweten, ___ ik nooit gekomen.",
      "options": [
        "had",
        "zou",
        "ben",
        "was"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Je moet zijn verhalen met een korreltje ___ nemen.",
      "options": [
        "peper",
        "suiker",
        "zout",
        "meel"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Ondanks zijn rijkdom bleef hij ___ en keek hij op niemand neer.",
      "options": [
        "arrogant",
        "bescheiden",
        "hautain",
        "verwaand"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Je kunt betalen ___ met contant geld, hetzij met een kaart.",
      "options": [
        "ofwel",
        "zowel",
        "noch",
        "hetzij"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "De recensent prees de ___ stijl van de schrijver, vol verfijning en elegantie.",
      "options": [
        "gepolijste",
        "stuntelige",
        "banale",
        "schrale"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Ik zou meegaan, ___ het niet dat ik morgen heel vroeg moet werken.",
      "options": [
        "was",
        "is",
        "ware",
        "had"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Met zijn ___ humor wist hij zelfs de meest gespannen situaties te ontwapenen.",
      "options": [
        "flauwe",
        "gevatte",
        "bittere",
        "grove"
      ],
      "answer": 1
    }
  ],
  "sv": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Jag har ___ hund.",
      "options": [
        "en",
        "ett",
        "den",
        "det"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Hon ___ lärare.",
      "options": [
        "har",
        "är",
        "gör",
        "heter"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Jag har två ___.",
      "options": [
        "bok",
        "boken",
        "böcker",
        "bokar"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Motsatsen till ordet stor är ___.",
      "options": [
        "lång",
        "tung",
        "gammal",
        "liten"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Min mammas mamma är min ___.",
      "options": [
        "moster",
        "mormor",
        "faster",
        "syster"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Igår ___ jag till skolan.",
      "options": [
        "går",
        "gick",
        "gå",
        "gått"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "På morgonen ___ kaffe.",
      "options": [
        "jag dricker",
        "drickar jag",
        "dricker jag",
        "jag dricka"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Min bror är ___ än jag.",
      "options": [
        "lång",
        "långa",
        "längst",
        "längre"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Det regnar, ta med dig ett ___.",
      "options": [
        "paraply",
        "glas",
        "bord",
        "fönster"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Hon ___ tänderna varje morgon.",
      "options": [
        "tvättar",
        "klipper",
        "borstar",
        "målar"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Mannen ___ bor här är min granne.",
      "options": [
        "som",
        "vad",
        "vilken",
        "den"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Eftersom hon ___ tid, tog hon en taxi.",
      "options": [
        "hade inte",
        "inte hade",
        "inte ha",
        "har inte"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Vi väntade ___ bussen kom.",
      "options": [
        "eftersom",
        "fastän",
        "tills",
        "om"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Tåget var ___ så vi missade flyget.",
      "options": [
        "tidigt",
        "snabbt",
        "billigt",
        "försenat"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Kan du ___ ett foto på oss?",
      "options": [
        "göra",
        "sätta",
        "lägga",
        "ta"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Vi måste ___ resan till nästa månad.",
      "options": [
        "skjuta upp",
        "skjuta av",
        "skjuta ner",
        "skjuta ut"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Hon är intresserad ___ konst.",
      "options": [
        "för",
        "av",
        "på",
        "i"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Han bad mig ___ hjälp.",
      "options": [
        "för",
        "på",
        "om",
        "efter"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Trots att förslaget var bra ___ han det.",
      "options": [
        "avvisade",
        "godkände",
        "tillät",
        "föreslog"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Förhandlingarna ___ i flera timmar innan de nådde en överenskommelse.",
      "options": [
        "hände",
        "skedde",
        "blev",
        "pågick"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Författaren, ___ böcker jag verkligen älskar, kommer till stan.",
      "options": [
        "vars",
        "vilkens",
        "vems",
        "som"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Jag såg honom ___ över gatan i morse.",
      "options": [
        "att gå",
        "gå",
        "går",
        "gått"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Hennes argument var så ___ att ingen kunde säga emot.",
      "options": [
        "förvirrande",
        "överdrivna",
        "övertygande",
        "obegripliga"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Att vara förälder är ingen ___ på rosor.",
      "options": [
        "bädd",
        "promenad",
        "väg",
        "dans"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Hans ___ kommentar fick hela rummet att skratta.",
      "options": [
        "fyndiga",
        "tröttsamma",
        "likgiltiga",
        "tråkiga"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Mötet blev inställt, ___ gjorde att alla blev besvikna.",
      "options": [
        "som",
        "vilket",
        "vad",
        "det"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Han ___ boken på bordet och gick.",
      "options": [
        "låg",
        "ligger",
        "lade",
        "legat"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Det var droppen som fick ___ att rinna över.",
      "options": [
        "glaset",
        "koppen",
        "skålen",
        "bägaren"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Hon har verkligen ___ för detaljer.",
      "options": [
        "öga",
        "hand",
        "öra",
        "ben"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Politikern gav ett ___ svar som inte sa någonting konkret.",
      "options": [
        "svindlande",
        "svallande",
        "svärmande",
        "svävande"
      ],
      "answer": 3
    }
  ],
  "no": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Jeg har ___ hund.",
      "options": [
        "en",
        "et",
        "ei",
        "å"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Jeg ___ fra Norge.",
      "options": [
        "har",
        "er",
        "gjør",
        "kan"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Om morgenen drikker jeg ___.",
      "options": [
        "stol",
        "bil",
        "kaffe",
        "sko"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Min mor og min ___ er foreldrene mine.",
      "options": [
        "bror",
        "søster",
        "sønn",
        "far"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Katten sitter ___ stolen.",
      "options": [
        "på",
        "av",
        "til",
        "for"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "I går ___ jeg på kino.",
      "options": [
        "går",
        "gikk",
        "gå",
        "gått"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Min bror er ___ enn meg.",
      "options": [
        "høy",
        "høyt",
        "høyere",
        "høyest"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Det regner, så jeg tar med ___.",
      "options": [
        "paraply",
        "sykkel",
        "avis",
        "nøkkel"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "På kafeen bestilte vi te og ___.",
      "options": [
        "skog",
        "regn",
        "gulv",
        "kake"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Jeg er trøtt, jeg vil ___.",
      "options": [
        "løpe",
        "danse",
        "sove",
        "synge"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Jeg har ___ ferdig boka.",
      "options": [
        "lest",
        "lese",
        "leser",
        "leste"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Han skyndte ___ for ikke å komme for sent.",
      "options": [
        "seg",
        "ham",
        "sin",
        "han"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Jeg ble hjemme ___ jeg var syk.",
      "options": [
        "derfor",
        "men",
        "som",
        "fordi"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Han måtte ___ en avgjørelse.",
      "options": [
        "gjøre",
        "ta",
        "lage",
        "sette"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Filmen var så ___ at jeg sovnet.",
      "options": [
        "spennende",
        "morsom",
        "kjedelig",
        "interessant"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Hun er flink ___ å tegne.",
      "options": [
        "til",
        "på",
        "i",
        "med"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Du må ikke gi ___ selv om det er vanskelig.",
      "options": [
        "av",
        "opp",
        "ut",
        "fra"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Politiet gjorde en grufull ___ i kjelleren.",
      "options": [
        "oppfinnelse",
        "oppfatning",
        "oppdagelse",
        "oppførsel"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Prisene har ___ kraftig, så alt er dyrere nå.",
      "options": [
        "sunket",
        "falt",
        "senket",
        "steget"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Det var en ___ kommentar som såret henne dypt.",
      "options": [
        "oppløftende",
        "nedsettende",
        "oppmuntrende",
        "velmenende"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Resultatet vitner ___ hardt arbeid.",
      "options": [
        "om",
        "på",
        "for",
        "til"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Han er ___ rik og berømt.",
      "options": [
        "enten",
        "både",
        "verken",
        "hverken"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "___ jeg var liten, bodde vi i Bergen.",
      "options": [
        "Når",
        "Hvis",
        "Da",
        "Som"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Han tok beskjeden med knusende ___.",
      "options": [
        "stillhet",
        "fred",
        "hvile",
        "ro"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Forklaringen hans var temmelig ___; ingen forsto hva han mente.",
      "options": [
        "innlysende",
        "åpenbar",
        "tydelig",
        "innfløkt"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Det er urettferdig å skjære alle over én ___.",
      "options": [
        "børste",
        "kam",
        "kost",
        "saks"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Da alarmen gikk, tok tyven beina ___ nakken.",
      "options": [
        "i",
        "over",
        "på",
        "under"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Etter ulykken følte han en dyp ___ over det han hadde gjort.",
      "options": [
        "sinne",
        "glede",
        "undring",
        "anger"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Jo mer jeg leser, ___ mindre forstår jeg.",
      "options": [
        "desto",
        "så",
        "den",
        "det"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Han oppførte seg som om ingenting ___ hendt.",
      "options": [
        "har",
        "har hatt",
        "ville",
        "hadde"
      ],
      "answer": 3
    }
  ],
  "da": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Jeg har ___ hund.",
      "options": [
        "en",
        "et",
        "den",
        "det"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Hun ___ glad i dag.",
      "options": [
        "var",
        "er",
        "være",
        "været"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Bogen ligger ___ bordet.",
      "options": [
        "i",
        "til",
        "på",
        "af"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Jeg drikker ___ om morgenen.",
      "options": [
        "sko",
        "bil",
        "stol",
        "kaffe"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Man har sko på ___.",
      "options": [
        "fødderne",
        "hænderne",
        "hovedet",
        "maven"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "I går ___ jeg i biografen.",
      "options": [
        "går",
        "gik",
        "gå",
        "gået"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Min bror er ___ end mig.",
      "options": [
        "gammel",
        "ældst",
        "ældre",
        "mere gammel"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Jeg køber brød hos ___.",
      "options": [
        "bageren",
        "slagteren",
        "lægen",
        "frisøren"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Vi ligger på ___ og soler os ved havet.",
      "options": [
        "marken",
        "stranden",
        "gaden",
        "taget"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Jeg har ondt i ___ og kan ikke tygge maden.",
      "options": [
        "ørerne",
        "knæene",
        "tænderne",
        "albuen"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Jeg har ___ i Danmark i tre år.",
      "options": [
        "bor",
        "boede",
        "boet",
        "bo"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Jeg tog en paraply med, ___ det regnede.",
      "options": [
        "men",
        "fordi",
        "eller",
        "hvis"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Du ___ ikke ryge her; det er forbudt.",
      "options": [
        "kan",
        "vil",
        "må",
        "skal"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Jeg er nødt til at ___ en tid hos lægen.",
      "options": [
        "betale",
        "bestille",
        "bestå",
        "beholde"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Vejret var dårligt, så kampen blev ___.",
      "options": [
        "afleveret",
        "aftalt",
        "afspillet",
        "aflyst"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Hun er meget interesseret ___ kunst.",
      "options": [
        "i",
        "på",
        "for",
        "af"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "De beskyldte ham ___ at have stjålet pengene.",
      "options": [
        "for",
        "om",
        "af",
        "med"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Mødet blev ___ til næste uge på grund af sygdom.",
      "options": [
        "udsolgt",
        "udtalt",
        "udført",
        "udskudt"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Hans forklaring var temmelig ___; ingen forstod den helt.",
      "options": [
        "indlysende",
        "enkel",
        "tydelig",
        "indviklet"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Regeringen vil ___ skatten for at få flere indtægter.",
      "options": [
        "hæve",
        "sænke",
        "slukke",
        "tænde"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Du skal ___ bogen på bordet, ikke smide den.",
      "options": [
        "ligge",
        "lægge",
        "ligger",
        "lagde"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Jeg ved ikke, ___ han kommer i aften.",
      "options": [
        "hvis",
        "at",
        "når",
        "om"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Hvis jeg havde vidst det, ___ jeg have hjulpet dig.",
      "options": [
        "ville",
        "vil",
        "var",
        "havde"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Politikeren forsøgte at ___ de svære spørgsmål ved at tale udenom.",
      "options": [
        "undvære",
        "undre",
        "undgå",
        "undgælde"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Hans historie lød ___; jeg tror ikke, han talte sandt.",
      "options": [
        "troværdig",
        "indlysende",
        "oprigtig",
        "utroværdig"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Virksomheden lægger vægt på ___ kvalitet som bæredygtighed.",
      "options": [
        "både",
        "hverken",
        "såvel",
        "enten"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Han kan ikke lave en kop kaffe, ___ en hel middag.",
      "options": [
        "fordi",
        "endsige",
        "selvom",
        "ligesom"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Han slog to fluer med ét ___.",
      "options": [
        "slag",
        "skud",
        "greb",
        "smæk"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Ministerens udtalelse vakte stor ___ i pressen.",
      "options": [
        "opsyn",
        "opsigt",
        "opslag",
        "opgør"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Den ___ tone i brevet afslørede hans foragt.",
      "options": [
        "venlige",
        "muntre",
        "hånlige",
        "ligefremme"
      ],
      "answer": 2
    }
  ],
  "ro": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Eu ___ student la universitate.",
      "options": [
        "sunt",
        "ești",
        "este",
        "suntem"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Văd un copil. ___ se joacă în parc.",
      "options": [
        "Copila",
        "Copilul",
        "Copiii",
        "Copil"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Mergem ___ școală în fiecare zi.",
      "options": [
        "pe",
        "sub",
        "la",
        "din"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Mama și tata sunt ___ mei.",
      "options": [
        "frații",
        "copiii",
        "bunicii",
        "părinții"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Dimineața beau o ___ de cafea.",
      "options": [
        "masă",
        "carte",
        "ceașcă",
        "ușă"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Aseară ___ o carte interesantă.",
      "options": [
        "citesc",
        "am citit",
        "voi citi",
        "să citesc"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Maria este ___ înaltă decât sora ei.",
      "options": [
        "foarte",
        "prea",
        "mai",
        "cel"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Afară plouă, așa că iau o ___.",
      "options": [
        "pernă",
        "furculiță",
        "oglindă",
        "umbrelă"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Mi-am ___ un palton nou pentru iarnă.",
      "options": [
        "cumpărat",
        "mâncat",
        "băut",
        "dormit"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Nu pot să ridic valiza, este foarte ___.",
      "options": [
        "ușoară",
        "goală",
        "grea",
        "mică"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Este important ca tu să ___ adevărul.",
      "options": [
        "spui",
        "spune",
        "spunând",
        "spus"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Îmi place această carte. ___ citesc în fiecare seară.",
      "options": [
        "Îi",
        "O",
        "Le",
        "Își"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Am întârziat la birou ___ s-a stricat mașina.",
      "options": [
        "pentru",
        "ca să",
        "deși",
        "pentru că"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "A trebuit să ___ o decizie importantă.",
      "options": [
        "fac",
        "iau",
        "prind",
        "pun"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Era atât de ___ încât a adormit imediat ce a pus capul pe pernă.",
      "options": [
        "obosit",
        "vesel",
        "curios",
        "harnic"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Depinde ___ tine dacă mergem sau nu.",
      "options": [
        "de",
        "pe",
        "la",
        "cu"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Dacă aș avea timp, ___ la munte în weekend.",
      "options": [
        "merg",
        "am mers",
        "aș merge",
        "voi merge"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Deși a muncit mult, proiectul a fost un ___ total.",
      "options": [
        "succes",
        "eșec",
        "început",
        "efort"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Vremea nefavorabilă ne-a ___ să anulăm excursia.",
      "options": [
        "permis",
        "rugat",
        "lăsat",
        "determinat"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "El are un ___ ascuțit pentru afaceri și observă mereu oportunitățile.",
      "options": [
        "gând",
        "cuvânt",
        "pas",
        "simț"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Profesorul ___ carte am citit-o este celebru.",
      "options": [
        "al cărui",
        "a cărui",
        "a cărei",
        "ale căror"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Dacă aș fi știut, ___ altfel.",
      "options": [
        "aș fi procedat",
        "aș proceda",
        "am procedat",
        "procedasem"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Cartea ___ ai recomandat-o mi-a plăcut mult.",
      "options": [
        "care",
        "pe care",
        "pe ce",
        "căreia"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "A făcut o remarcă ___, care a stârnit râsul tuturor.",
      "options": [
        "materială",
        "corporală",
        "spirituală",
        "minerală"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "În loc să rezolve problema, autoritățile au ___ luarea unei decizii luni de zile.",
      "options": [
        "grăbit",
        "rezolvat",
        "simplificat",
        "tergiversat"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "___ de mult s-ar strădui, tot nu va reuși fără ajutor.",
      "options": [
        "Oricât",
        "Oricum",
        "Oricine",
        "Oricând"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Se poartă ca și cum nimic nu ___ fi întâmplat.",
      "options": [
        "s-a",
        "s-ar",
        "se",
        "va"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Când a auzit prețul, a rămas cu gura ___.",
      "options": [
        "închisă",
        "plină",
        "căscată",
        "strâmbă"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Jurnalistul a fost lăudat pentru stilul său ___, lipsit de orice exagerare.",
      "options": [
        "fastuos",
        "pompos",
        "exaltat",
        "sobru"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Argumentația lui, deși ___, ascundea o logică impecabilă în spatele aparentei dezordini.",
      "options": [
        "alambicată",
        "limpede",
        "simplistă",
        "concisă"
      ],
      "answer": 0
    }
  ],
  "uk": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Я ___ українською кожен день.",
      "options": [
        "розмовляєш",
        "розмовляють",
        "розмовляю",
        "розмовляє"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "На сніданок я їм смачну ___.",
      "options": [
        "стіл",
        "кашу",
        "вікно",
        "ручку"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Він читає цікаву ___.",
      "options": [
        "книгу",
        "книга",
        "книзі",
        "книги"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Моя ___ готує смачну вечерю.",
      "options": [
        "стіна",
        "дорога",
        "зима",
        "мама"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Кіт сидить ___ столом.",
      "options": [
        "на",
        "під",
        "у",
        "до"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Вчора вона ___ новий фільм.",
      "options": [
        "подивилася",
        "подивився",
        "подивилися",
        "подивлюся"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Ми чекаємо ___ на зупинці.",
      "options": [
        "хліб",
        "сон",
        "автобус",
        "ліс"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "У мене немає ___ на це.",
      "options": [
        "час",
        "часом",
        "часі",
        "часу"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Він відчинив двері й ___ до кімнати.",
      "options": [
        "зʼїв",
        "увійшов",
        "заспівав",
        "купив"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Мій брат ___ за мене.",
      "options": [
        "високий",
        "найвищий",
        "вищий",
        "висота"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Я вчора зателефонував ___, щоб привітати його.",
      "options": [
        "друг",
        "друга",
        "другом",
        "другові"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Він ___ важливе рішення після довгих роздумів.",
      "options": [
        "прийняв",
        "зробив",
        "зловив",
        "виграв"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Зазвичай я ___ каву о восьмій ранку.",
      "options": [
        "випʼю",
        "пʼю",
        "випив",
        "пив би"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Я хотів піти на прогулянку, ___ почався дощ.",
      "options": [
        "щоб",
        "тому",
        "але",
        "ніби"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Діти щодня ___ до школи.",
      "options": [
        "ходять",
        "ідуть",
        "підуть",
        "ходити"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "___ додому, він зустрів давнього друга.",
      "options": [
        "Ідучи",
        "Іти",
        "Ішов",
        "Підемо"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Вона пишається своїми ___.",
      "options": [
        "досягнення",
        "досягнень",
        "досягненням",
        "досягненнями"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Щоб досягти успіху, треба ___ чимало зусиль.",
      "options": [
        "покласти",
        "докласти",
        "скласти",
        "розкласти"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Після аварії дорогу повністю ___ для руху.",
      "options": [
        "відкрили",
        "прикрасили",
        "перекрили",
        "помили"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Ця тема дуже ___, про неї важко говорити спокійно.",
      "options": [
        "солодка",
        "швидка",
        "голосна",
        "делікатна"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Закон, ___ парламентом торік, нарешті набув чинності.",
      "options": [
        "ухвалений",
        "ухваливши",
        "ухвалити",
        "ухвалюючи"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Я ніколи не ___ таких гарних краєвидів, як у горах.",
      "options": [
        "побачив",
        "бачив",
        "бачу",
        "побачу"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Замість того щоб працювати, він цілий день ___ байдики.",
      "options": [
        "грав",
        "кидав",
        "бив",
        "ламав"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Письменник славився ___ стилем, насиченим метафорами.",
      "options": [
        "вишуканим",
        "дешевим",
        "голодним",
        "мокрим"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Ця проблема потребує ___ розгляду на найвищому рівні.",
      "options": [
        "смачного",
        "гучного",
        "солоного",
        "ретельного"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Грошей у нас залишилося, як ___ наплакав.",
      "options": [
        "собака",
        "кіт",
        "слон",
        "птах"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Його ___ зауваження викликало сміх, хоч і було доволі ущипливим.",
      "options": [
        "вологе",
        "деревʼяне",
        "дотепне",
        "кисле"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "На зустріч прийшла двадцять одна ___.",
      "options": [
        "людина",
        "людей",
        "люди",
        "людину"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Унаслідок битви армія зазнала важких ___.",
      "options": [
        "втрати",
        "втратам",
        "втратами",
        "втрат"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Його поведінка межувала із ___: він не визнавав жодних правил.",
      "options": [
        "ніжністю",
        "зухвалістю",
        "втомою",
        "радістю"
      ],
      "answer": 1
    }
  ],
  "pl": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Ja ___ z Polski.",
      "options": [
        "jestem",
        "jest",
        "jesteś",
        "są"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "To jest ___ kot.",
      "options": [
        "moja",
        "mój",
        "moje",
        "moi"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Mam czarnego ___.",
      "options": [
        "pies",
        "psie",
        "psa",
        "psy"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Mój brat i moja ___ to moje rodzeństwo.",
      "options": [
        "matka",
        "córka",
        "żona",
        "siostra"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Na śniadanie jem ___ z masłem.",
      "options": [
        "chleb",
        "mleko",
        "herbatę",
        "wodę"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Wczoraj ___ do kina.",
      "options": [
        "idę",
        "poszedłem",
        "pójdę",
        "chodzę"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Interesuję się polską ___.",
      "options": [
        "muzyka",
        "muzykę",
        "muzyki",
        "muzyką"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "W sklepie ___ chleb i mleko.",
      "options": [
        "sprzedaję",
        "płacę",
        "kupuję",
        "liczę"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Jestem głodny, chcę coś ___.",
      "options": [
        "zjeść",
        "wypić",
        "kupić",
        "zrobić"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Lato jest ciepłą porą roku, a ___ zimną.",
      "options": [
        "wiosna",
        "zima",
        "jesień",
        "poranek"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Codziennie pomagam ___ w kuchni.",
      "options": [
        "mama",
        "mamę",
        "mamą",
        "mamie"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "W ciągu jednego wieczoru ___ całą książkę.",
      "options": [
        "czytałem",
        "przeczytałem",
        "czytam",
        "przeczytam"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Długo rozmawialiśmy o nowym ___.",
      "options": [
        "film",
        "filmu",
        "filmie",
        "filmem"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Muszę ___ pieniądze, bo chcę kupić samochód.",
      "options": [
        "oszczędzać",
        "wydawać",
        "pożyczać",
        "liczyć"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "On zawsze mówi prawdę, jest bardzo ___.",
      "options": [
        "leniwy",
        "nieśmiały",
        "uczciwy",
        "hojny"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Gdybym ___ więcej czasu, nauczyłbym się polskiego.",
      "options": [
        "mam",
        "będę miał",
        "mieć",
        "miał"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Dzieci często boją się ___.",
      "options": [
        "ciemność",
        "ciemności",
        "ciemnością",
        "ciemnościom"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Jego argumenty były tak ___, że wszyscy się zgodzili.",
      "options": [
        "przekonujące",
        "nudne",
        "fałszywe",
        "niejasne"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Zarząd musi ___ ważną decyzję do końca tygodnia.",
      "options": [
        "zrobić",
        "wziąć",
        "podjąć",
        "dać"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Nie znoszę, kiedy ktoś mi ___ w połowie zdania.",
      "options": [
        "pomaga",
        "przerywa",
        "odpowiada",
        "dziękuje"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "___ wszystkie dokumenty, dyrektor wyszedł z biura.",
      "options": [
        "Podpisując",
        "Podpisał",
        "Podpisuje",
        "Podpisawszy"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Gdyby nie twoja pomoc, nie ___ tego egzaminu.",
      "options": [
        "zdałbym",
        "zdam",
        "zdawałbym",
        "zdałem"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Na peronie czekało pięciu ___.",
      "options": [
        "mężczyźni",
        "mężczyzn",
        "mężczyzny",
        "mężczyznów"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Naucz się ___ język za zębami.",
      "options": [
        "chować",
        "zamykać",
        "trzymać",
        "wkładać"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "To bardzo ___ sytuacja, naprawdę nie wiem, co zrobić.",
      "options": [
        "wygodna",
        "oczywista",
        "radosna",
        "kłopotliwa"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Większość studentów ___ na wykład o czasie.",
      "options": [
        "przyszła",
        "przyszli",
        "przyszło",
        "przyszły"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Szef nalegał, żebym ___ na zebranie wcześniej.",
      "options": [
        "przyjdę",
        "przyszedłem",
        "przyszedł",
        "przyjść"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Ten egzamin to dla mnie bułka z ___.",
      "options": [
        "serem",
        "masłem",
        "chlebem",
        "dżemem"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Jego ___ uwaga pod adresem kolegi uraziła wszystkich.",
      "options": [
        "uprzejma",
        "pochlebna",
        "serdeczna",
        "uszczypliwa"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "___ twojej pomocy udało nam się wygrać konkurs.",
      "options": [
        "Przez",
        "Z powodu",
        "Dzięki",
        "Wskutek"
      ],
      "answer": 2
    }
  ],
  "cs": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "My ___ doma.",
      "options": [
        "jsme",
        "jsem",
        "jsi",
        "jste"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "To je ___ kniha.",
      "options": [
        "nový",
        "nová",
        "nové",
        "noví"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Vidím ___ na ulici.",
      "options": [
        "psa",
        "pes",
        "psem",
        "psovi"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Sníh je ___.",
      "options": [
        "černý",
        "zelený",
        "modrý",
        "bílý"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Matka mé matky je moje ___.",
      "options": [
        "teta",
        "sestra",
        "babička",
        "dcera"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Včera jsem ___ do kina.",
      "options": [
        "jdu",
        "šel",
        "půjdu",
        "jít"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Dej tu knihu ___.",
      "options": [
        "mamince",
        "maminka",
        "maminku",
        "maminky"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Potřebuji koupit chléb, jdu do ___.",
      "options": [
        "obchodu",
        "školy",
        "nemocnice",
        "knihovny"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Bolí mě hlava, vezmu si ___.",
      "options": [
        "mýdlo",
        "chléb",
        "klíč",
        "prášek"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Když je tma, rozsvítím ___.",
      "options": [
        "okno",
        "dveře",
        "světlo",
        "stůl"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Píšu dopis ___.",
      "options": [
        "pero",
        "pera",
        "peru",
        "perem"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Sotva jsem otevřel dveře, pes ___ ven.",
      "options": [
        "vyběhl",
        "vybíhal",
        "běhal",
        "vybíhá"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Spěchám, ___ nezmeškal vlak.",
      "options": [
        "protože",
        "abych",
        "kdybych",
        "jakmile"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Na otázku jsem nedokázal ___.",
      "options": [
        "odpovědět",
        "zeptat",
        "mluvit",
        "říct"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Byla to velmi ___ kniha, nemohl jsem ji odložit.",
      "options": [
        "nudná",
        "napínavá",
        "prázdná",
        "tichá"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Moje sestra se bojí ___.",
      "options": [
        "tma",
        "tmu",
        "tmy",
        "tmou"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Já ___ ti rád pomohl, ale dnes nemám čas.",
      "options": [
        "bych",
        "bys",
        "by",
        "bychom"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Jeho argumenty byly slabé a naprosto ___, takže ho nikdo nepodpořil.",
      "options": [
        "přesvědčivé",
        "nepřesvědčivé",
        "srozumitelné",
        "logické"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Po dlouhé nemoci se konečně začal ___.",
      "options": [
        "zhoršovat",
        "unavovat",
        "nakazit",
        "zotavovat"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Musíme najít ___ řešení, které vyhovuje oběma stranám.",
      "options": [
        "zbytečné",
        "dočasné",
        "kompromisní",
        "náhodné"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Je to klidný člověk a vyhýbá se ___.",
      "options": [
        "konflikty",
        "konfliktů",
        "konfliktům",
        "konfliktech"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Mluví o tom, jako by tomu ___.",
      "options": [
        "rozumí",
        "rozuměl",
        "rozumět",
        "bude rozumět"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Většina ___ s tím návrhem souhlasila.",
      "options": [
        "lidé",
        "lidem",
        "lidí",
        "lidmi"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Tento problém je třeba řešit ___, ne polovičatě.",
      "options": [
        "povrchně",
        "zbytečně",
        "náhodně",
        "důkladně"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Svůj nesouhlas vyjádřil velmi ___ slovy.",
      "options": [
        "sladkými",
        "tichými",
        "prázdnými",
        "ostrými"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Po dlouhém jednání nakonec nedosáhli ___.",
      "options": [
        "shodu",
        "shody",
        "shodě",
        "shodou"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Děvčata si spokojeně ___ na zahradě.",
      "options": [
        "hrála",
        "hráli",
        "hrály",
        "hrál"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Po letech celá ta aféra nakonec vyšla ___.",
      "options": [
        "naprázdno",
        "nazmar",
        "najevo",
        "navíc"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Jeho ___ poznámky na adresu kolegů všechny urazily.",
      "options": [
        "laskavé",
        "věcné",
        "nudné",
        "jízlivé"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Tento výraz je v běžné mluvě poněkud ___ a hodí se spíše do literatury.",
      "options": [
        "hovorový",
        "vulgární",
        "nespisovný",
        "knižní"
      ],
      "answer": 3
    }
  ],
  "sk": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "My ___ doma.",
      "options": [
        "som",
        "ste",
        "sme",
        "je"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Vidím ___.",
      "options": [
        "muž",
        "mužom",
        "mužovi",
        "muža"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Kniha je ___ stole.",
      "options": [
        "do",
        "na",
        "z",
        "pod"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Ráno ___ kávu.",
      "options": [
        "spím",
        "pijem",
        "čítam",
        "bežím"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Mamin manžel je môj ___.",
      "options": [
        "otec",
        "syn",
        "brat",
        "strýko"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Včera som ___ do kina.",
      "options": [
        "išiel",
        "idem",
        "pôjdem",
        "ísť"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Dnes je ___ ako včera.",
      "options": [
        "teplo",
        "najteplejšie",
        "teplejšie",
        "teplý"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Bol som hladný, tak som si v obchode ___ chlieb.",
      "options": [
        "predal",
        "uvaril",
        "prečítal",
        "kúpil"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Keď som chorý, idem k ___.",
      "options": [
        "učiteľovi",
        "lekárovi",
        "kuchárovi",
        "vodičovi"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Tento film nie je dlhý, je ___.",
      "options": [
        "veľký",
        "nový",
        "krátky",
        "ťažký"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Konečne som ___ tú dlhú knihu.",
      "options": [
        "prečítal",
        "čítal",
        "čítam",
        "prečítam"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Rád sa rozprávam so svojimi ___.",
      "options": [
        "priatelia",
        "priateľov",
        "priateľom",
        "priateľmi"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Zostal doma, ___ bol chorý.",
      "options": [
        "ale",
        "pretože",
        "alebo",
        "aby"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Vlak mal ___ a prišiel neskoro.",
      "options": [
        "cestovanie",
        "parkovanie",
        "meškanie",
        "stretnutie"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Toto slovo nepoznám, musím si ho nájsť v ___.",
      "options": [
        "kalendári",
        "zošite",
        "časopise",
        "slovníku"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Na tvojom mieste by som to ___ inak.",
      "options": [
        "urobím",
        "urobil",
        "robím",
        "urobiť"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Malé deti sa často boja ___.",
      "options": [
        "tma",
        "tmu",
        "tmy",
        "tmou"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Jeho argumenty boli veľmi ___, nikto nemal námietky.",
      "options": [
        "presvedčivé",
        "zvedavé",
        "nudné",
        "lacné"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Táto téma je veľmi ___, radšej sa jej vyhnime.",
      "options": [
        "výhodná",
        "zrozumiteľná",
        "dobrovoľná",
        "chúlostivá"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Podarilo sa nám ___ všetky prekážky.",
      "options": [
        "predať",
        "prečítať",
        "prekonať",
        "prepísať"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Čím dlhšie čakal, ___ bol nervóznejší.",
      "options": [
        "tým",
        "tak",
        "potom",
        "veľmi"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Vo voľnom čase sa venuje ___.",
      "options": [
        "maľovanie",
        "maľovania",
        "maľovaním",
        "maľovaniu"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Celé popoludnie ___ list, ale nedokončil ho.",
      "options": [
        "písal",
        "napísal",
        "popísal",
        "spísal"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Jeho vysvetlenie bolo ___, vôbec som mu nerozumel.",
      "options": [
        "výstižné",
        "zrejmé",
        "mätúce",
        "stručné"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Tú prácu zvládol ___ rukou.",
      "options": [
        "pravou",
        "ľavou",
        "plnou",
        "holou"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "___ som mal viac času, bol by som ti pomohol.",
      "options": [
        "Keď",
        "Ak",
        "Keby",
        "Kým"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Prosím ťa, prestaň ___!",
      "options": [
        "zakričať",
        "vykríknuť",
        "skríknuť",
        "kričať"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Po prehre bol úplne ___, takmer sa rozplakal.",
      "options": [
        "nadšený",
        "skľúčený",
        "ľahostajný",
        "výrečný"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Bol hladný ako ___.",
      "options": [
        "vlk",
        "pes",
        "medveď",
        "lev"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Jeho štýl písania je veľmi ___, používa zastarané slová.",
      "options": [
        "moderný",
        "hovorový",
        "vecný",
        "archaický"
      ],
      "answer": 3
    }
  ],
  "hr": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Ja ___ student.",
      "options": [
        "sam",
        "si",
        "je",
        "su"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Ona čita ___.",
      "options": [
        "knjiga",
        "knjige",
        "knjigu",
        "knjigom"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Mi ___ hrvatski.",
      "options": [
        "govorim",
        "govorimo",
        "govoriš",
        "govori"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Moja majka i moj otac su moji ___.",
      "options": [
        "prijatelji",
        "susjedi",
        "učitelji",
        "roditelji"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Ujutro pijem ___ i jedem kruh.",
      "options": [
        "kavu",
        "stolicu",
        "knjigu",
        "košulju"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Jučer sam ___ film.",
      "options": [
        "gledati",
        "gledam",
        "gledan",
        "gledao"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Ja ___ sutra posjetiti baku.",
      "options": [
        "ćeš",
        "ću",
        "će",
        "ćemo"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Zimi je hladno, a ___ je toplo.",
      "options": [
        "jučer",
        "ovdje",
        "ljeti",
        "brzo"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Idem u ___ kupiti kruh i mlijeko.",
      "options": [
        "trgovinu",
        "bolnicu",
        "knjižnicu",
        "učionicu"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Jako me boli ___ kad jedem slatkiše.",
      "options": [
        "prst",
        "zub",
        "koljeno",
        "lakat"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Knjiga je na ___.",
      "options": [
        "stol",
        "stola",
        "stolom",
        "stolu"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Dao sam knjigu ___.",
      "options": [
        "prijatelj",
        "prijatelja",
        "prijatelju",
        "prijateljem"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Počeo sam ___ hrvatski prošle godine.",
      "options": [
        "učiti",
        "naučiti",
        "učim",
        "naučim"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Nisam došao na zabavu ___ sam bio bolestan.",
      "options": [
        "ali",
        "jer",
        "ili",
        "nego"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Uvijek pokušavam ___ svoja obećanja.",
      "options": [
        "čuvati",
        "spremiti",
        "nositi",
        "održati"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Da imam vremena, pomogao ___ ti.",
      "options": [
        "bih",
        "bi",
        "bismo",
        "biste"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Iako je odrastao, još se uvijek boji ___.",
      "options": [
        "mrak",
        "mraku",
        "mraka",
        "mrakom"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Njegov govor bio je vrlo ___ i sve nas je dirnuo.",
      "options": [
        "dosadan",
        "dirljiv",
        "glasan",
        "dugačak"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Ova tema je vrlo ___; teško je o njoj raspravljati bez emocija.",
      "options": [
        "vidljiva",
        "čitljiva",
        "vodljiva",
        "osjetljiva"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Njegovi argumenti bili su vrlo ___ pa smo ga poslušali.",
      "options": [
        "uvjerljivi",
        "sumnjivi",
        "dosadni",
        "glasni"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Dvojica ___ stigla su na vrijeme.",
      "options": [
        "muškarci",
        "muškarcima",
        "muškaraca",
        "muškarcem"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Čovjek s ___ sam razgovarao bio je ljubazan.",
      "options": [
        "koji",
        "kojim",
        "kojeg",
        "kojem"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "___ na posao, obično kupujem novine na kiosku.",
      "options": [
        "Otišavši",
        "Otići",
        "Išao",
        "Idući"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Nakon dugog razmišljanja, došao je do ___ da je pogriješio.",
      "options": [
        "zaključka",
        "zaglavlja",
        "zalogaja",
        "zaključavanja"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Taj je problem samo ___ ledenog brijega.",
      "options": [
        "kraj",
        "dno",
        "vrh",
        "rub"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Hoćeš li poći ___ mnom?",
      "options": [
        "s",
        "sa",
        "za",
        "po"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Što više čitam, ___ razumijem.",
      "options": [
        "što više",
        "više to",
        "to više",
        "tako više"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Njegov ___ prema kolegama bio je očit; nikoga nije poštovao.",
      "options": [
        "ponos",
        "strah",
        "umor",
        "prezir"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Njegov je rukopis bio gotovo ___; jedva sam pročitao poruku.",
      "options": [
        "neumoran",
        "nečitak",
        "nepristran",
        "neizbježan"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Vuk dlaku mijenja, ali ___ nikada.",
      "options": [
        "boju",
        "glas",
        "ćud",
        "kuću"
      ],
      "answer": 2
    }
  ],
  "bs": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Ja ___ student.",
      "options": [
        "sam",
        "si",
        "je",
        "su"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Imam jednu ___.",
      "options": [
        "sestra",
        "sestru",
        "sestre",
        "sestri"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Ovo je ___ kuća.",
      "options": [
        "veliki",
        "velik",
        "velika",
        "veliko"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Ujutro pijem ___.",
      "options": [
        "stolicu",
        "vodu",
        "olovku",
        "košulju"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Moja majka i moj otac su moji ___.",
      "options": [
        "prijatelji",
        "susjedi",
        "učenici",
        "roditelji"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Sinoć smo ___ novi film.",
      "options": [
        "gledali",
        "gledao",
        "gledala",
        "gledalo"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Ljeto je ___ od zime.",
      "options": [
        "toplo",
        "topliji",
        "toplije",
        "najtoplije"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Kupujem hljeb u ___.",
      "options": [
        "pekari",
        "apoteci",
        "banci",
        "pošti"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Kada sam bolestan, idem kod ___.",
      "options": [
        "učitelja",
        "ljekara",
        "vozača",
        "majstora"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Soba je prljava, moram je ___.",
      "options": [
        "otvoriti",
        "zatvoriti",
        "kupiti",
        "očistiti"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Dao sam knjigu ___.",
      "options": [
        "prijatelj",
        "prijatelja",
        "prijatelju",
        "prijatelji"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Dok sam ___ knjigu, zazvonio je telefon.",
      "options": [
        "čitao",
        "pročitao",
        "čitati",
        "pročitati"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Zakasnio sam na posao ___ je autobus kasnio.",
      "options": [
        "ali",
        "jer",
        "ili",
        "nego"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Moramo ___ odluku do sutra.",
      "options": [
        "uzeti",
        "dati",
        "praviti",
        "donijeti"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Bio je veoma ___ kada je čuo lošu vijest.",
      "options": [
        "gladan",
        "umoran",
        "tužan",
        "žedan"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Da sam na tvom mjestu, ja ___ to uradio drugačije.",
      "options": [
        "bih",
        "bi",
        "bismo",
        "biste"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Radujem se našem ljetnom ___.",
      "options": [
        "putovanje",
        "putovanja",
        "putovanju",
        "putovanjem"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Njegov govor je bio veoma ___ i mnogi su zaplakali.",
      "options": [
        "dosadan",
        "dirljiv",
        "glasan",
        "kratak"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Inženjeri su uspjeli ___ ovaj složeni problem.",
      "options": [
        "otvoriti",
        "izgubiti",
        "platiti",
        "riješiti"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "On nije lijen, naprotiv, vrlo je ___.",
      "options": [
        "umoran",
        "vrijedan",
        "bogat",
        "mlad"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Čim ___ pismo, javit ću ti se.",
      "options": [
        "primim",
        "primam",
        "budem primao",
        "primao"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Čovjek s ___ sam razgovarao je ljekar.",
      "options": [
        "koji",
        "kojeg",
        "kojim",
        "kome"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Ne sjećam se njegovog ___.",
      "options": [
        "ime",
        "imena",
        "imenu",
        "imenom"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Njegovi argumenti bili su ___ i teško ih je bilo opovrgnuti.",
      "options": [
        "sumnjivi",
        "dosadni",
        "glasni",
        "uvjerljivi"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Duboko u sebi, ___ je sumnju da nešto nije u redu.",
      "options": [
        "gajio",
        "držao",
        "nosio",
        "vodio"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Ona ga pogleda i tiho ___: 'Hvala.'",
      "options": [
        "reče",
        "rekla",
        "kaže",
        "govori"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Niko od djevojaka nije ___ šta da kaže.",
      "options": [
        "znala",
        "znale",
        "znao",
        "znali"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Nakon duge rasprave, konačno smo ___ na zelenu granu.",
      "options": [
        "došli",
        "izašli",
        "pali",
        "stali"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Njegov ___ osmijeh otkrivao je da nešto krije.",
      "options": [
        "iskren",
        "širok",
        "podmukao",
        "umoran"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Vijest je ___ cijelom zemljom.",
      "options": [
        "pala",
        "otišla",
        "stigla",
        "odjeknula"
      ],
      "answer": 3
    }
  ],
  "bg": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Аз ___ студент.",
      "options": [
        "съм",
        "си",
        "е",
        "сме"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Имам нова ___.",
      "options": [
        "стол",
        "кола",
        "молив",
        "телефон"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Книгата е ___ масата.",
      "options": [
        "в",
        "с",
        "на",
        "от"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Сутрин пия ___ с мляко.",
      "options": [
        "хляб",
        "сирене",
        "масло",
        "кафе"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Когато се срещаме сутрин, казваме „Добро ___“.",
      "options": [
        "утро",
        "вечер",
        "нощ",
        "ден"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Утре ___ отида на работа.",
      "options": [
        "бях",
        "ще",
        "съм",
        "сме"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Вчера ___ на кино.",
      "options": [
        "отидох",
        "отивам",
        "ще отида",
        "отиди"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Този филм е ___ интересен от другия.",
      "options": [
        "най-",
        "много",
        "твърде",
        "по-"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Когато съм болен, отивам на ___.",
      "options": [
        "готвач",
        "учител",
        "лекар",
        "шофьор"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Облечи си палтото, навън е ___.",
      "options": [
        "горещо",
        "студено",
        "слънчево",
        "светло"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Той ___ даде книгата.",
      "options": [
        "аз",
        "мен",
        "ми",
        "мене"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Всяка сутрин ___ кафе.",
      "options": [
        "изпия",
        "изпих",
        "пих",
        "пия"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Исках да дойда на срещата, ___ нямах време.",
      "options": [
        "но",
        "защото",
        "или",
        "затова"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Той взе важно ___ да напусне работата си.",
      "options": [
        "мнение",
        "решение",
        "желание",
        "значение"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Той е много ___ човек и винаги помага на другите.",
      "options": [
        "мързелив",
        "егоистичен",
        "отзивчив",
        "груб"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Ако имах повече време, ___ да ти помогна.",
      "options": [
        "ще",
        "бях",
        "съм",
        "щях"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Имало едно време един стар цар, който ___ три дъщери.",
      "options": [
        "имал",
        "има",
        "ще има",
        "имай"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Тя се справи ___ всички трудности.",
      "options": [
        "на",
        "с",
        "за",
        "от"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Решихме да ___ срещата за следващата седмица, защото шефът отсъстваше.",
      "options": [
        "отменим",
        "проведем",
        "започнем",
        "отложим"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Неговите аргументи бяха толкова ___, че никой не можа да възрази.",
      "options": [
        "съмнителни",
        "безсмислени",
        "убедителни",
        "скучни"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Решението му дойде като гръм от ___ небе.",
      "options": [
        "ясно",
        "синьо",
        "чисто",
        "светло"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Той ___ обещанието си и всички му се разсърдиха.",
      "options": [
        "счупи",
        "наруши",
        "развали",
        "прекъсна"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Цяла сутрин ___ писмото, но така и не го завърших.",
      "options": [
        "пиша",
        "напиша",
        "писах",
        "написах"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "На Мария ___ казах истината.",
      "options": [
        "я",
        "му",
        "ги",
        "ѝ"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Думите му бяха толкова ___, че всички се почувстваха обидени.",
      "options": [
        "язвителни",
        "ласкави",
        "насърчителни",
        "любезни"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "С тези обещания политиците само ___ прах в очите на хората.",
      "options": [
        "слагат",
        "хвърлят",
        "духат",
        "насипват"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Журналистът се славеше със своята ___ и никога не се страхуваше да каже истината на властта.",
      "options": [
        "угодничество",
        "малодушие",
        "безкомпромисност",
        "безразличие"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Парите са у мен; ще ___ дам, щом се видим.",
      "options": [
        "ги ти",
        "ти го",
        "те ги",
        "ти ги"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Моля те, не ___ вратата, ще събудиш бебето!",
      "options": [
        "затвори",
        "затваряй",
        "затвориш",
        "затварял"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Това, което каза, наля масло в ___.",
      "options": [
        "огъня",
        "водата",
        "кашата",
        "гнездото"
      ],
      "answer": 0
    }
  ],
  "sl": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Otroci se ___ na vrtu.",
      "options": [
        "igram",
        "igraš",
        "igra",
        "igrajo"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Brat in sestra ___ doma.",
      "options": [
        "je",
        "sta",
        "smo",
        "so"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Na nogah nosim ___.",
      "options": [
        "kapo",
        "rokavice",
        "očala",
        "čevlje"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Zjutraj pijem ___ ali čaj.",
      "options": [
        "kavo",
        "kruh",
        "sir",
        "sol"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Pozimi pogosto sneži in je zelo ___.",
      "options": [
        "toplo",
        "vroče",
        "mrzlo",
        "suho"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Včeraj sem ___ v gledališče.",
      "options": [
        "grem",
        "šel",
        "bom šel",
        "hodim"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Midva ___ jutri potovala na morje.",
      "options": [
        "bom",
        "bova",
        "bomo",
        "boš"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Moj brat je ___ kot jaz.",
      "options": [
        "visoko",
        "visok",
        "najvišji",
        "višji"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "V trgovini sem kupil kruh in ___.",
      "options": [
        "kamen",
        "oblak",
        "mleko",
        "veter"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Ves dan nisem jedel, zato sem zelo ___.",
      "options": [
        "žejen",
        "lačen",
        "utrujen",
        "vesel"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Sprehajam se z dvema ___ po parku.",
      "options": [
        "psi",
        "psa",
        "psoma",
        "psov"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Tiho, prosim, ravno zdaj ___ pismo.",
      "options": [
        "pišem",
        "napišem",
        "bom napisal",
        "sem napisal"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Ostal sem doma, ___ je zunaj močno deževalo.",
      "options": [
        "ker",
        "ampak",
        "ali",
        "kot"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Ta knjiga me zelo ___, rad bi jo prebral do konca.",
      "options": [
        "dolgočasi",
        "moti",
        "zanima",
        "jezi"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Ker je bila cesta spolzka, je voznik vozil zelo ___.",
      "options": [
        "hitro",
        "glasno",
        "pogosto",
        "previdno"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Že od otroštva se boji ___.",
      "options": [
        "tema",
        "temo",
        "teme",
        "temi"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Na tvojem mestu ___ ravnal drugače.",
      "options": [
        "bi",
        "bom",
        "sem",
        "naj"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Ta most je bil ___ pred sto leti.",
      "options": [
        "zgradil",
        "zgrajen",
        "graditi",
        "zgrajena"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Njegova razlaga je bila tako ___, da ni nihče ničesar razumel.",
      "options": [
        "jasna",
        "nejasna",
        "kratka",
        "zanimiva"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Po dolgem premisleku se je ___ za nakup stanovanja.",
      "options": [
        "spomnil",
        "zmotil",
        "odločil",
        "zahvalil"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "To je tisti kolega, o ___ sem ti veliko pripovedoval.",
      "options": [
        "kateri",
        "katerega",
        "katerem",
        "katerim"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Ko je sedel k mizi, je začel ___ časopis.",
      "options": [
        "prebrati",
        "prebral",
        "bere",
        "brati"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Kljub ___ se je odpravil na pot.",
      "options": [
        "bolezen",
        "bolezni",
        "boleznijo",
        "boleznih"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Ta matematični problem je trd ___, nikakor ga ne morem rešiti.",
      "options": [
        "oreh",
        "kruh",
        "kamen",
        "les"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Tako je ___, da ne porabi niti centa več, kot je nujno.",
      "options": [
        "skop",
        "radodaren",
        "len",
        "prijazen"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Utrujen sem, grem ___.",
      "options": [
        "spati",
        "spat",
        "spal",
        "spim"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Vsak učenec je prinesel ___ zvezek.",
      "options": [
        "njegov",
        "moj",
        "naš",
        "svoj"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Njegovo nenehno pritoževanje mi že dolgo gre na ___.",
      "options": [
        "živce",
        "glavo",
        "ušesa",
        "jezik"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Da bi se izognil škandalu, je politik v izjavi ___ resnico.",
      "options": [
        "povedal",
        "zapisal",
        "prebral",
        "prikrojil"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Po slovesu od prijateljev je bil ves ___ in zamišljen.",
      "options": [
        "vesel",
        "navdušen",
        "otožen",
        "ponosen"
      ],
      "answer": 2
    }
  ],
  "lv": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Mēs ___ mājās.",
      "options": [
        "esmu",
        "esi",
        "ir",
        "esam"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Tēvs ___ avīzi.",
      "options": [
        "lasu",
        "lasi",
        "lasa",
        "lasām"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Es mīlu savu ___.",
      "options": [
        "māti",
        "māte",
        "mātes",
        "mātei"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Šī soma nav liela, tā ir ___.",
      "options": [
        "gara",
        "maza",
        "jauna",
        "laba"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "No rīta es dzeru ___.",
      "options": [
        "maizi",
        "krēslu",
        "grāmatu",
        "kafiju"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Vakar es ___ uz veikalu.",
      "options": [
        "eju",
        "gāju",
        "iešu",
        "ietu"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Mana māsa ir ___ nekā es.",
      "options": [
        "gara",
        "garāks",
        "garāka",
        "visgarākā"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Kad līst lietus, es ņemu ___.",
      "options": [
        "lietussargu",
        "cepuri",
        "cimdus",
        "sauli"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Es ___ matus ar šampūnu.",
      "options": [
        "dzeru",
        "mazgāju",
        "klausos",
        "rakstu"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Mēs pērkam maizi ___.",
      "options": [
        "skolā",
        "slimnīcā",
        "veikalā",
        "bibliotēkā"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Es dzeru kafiju bez ___.",
      "options": [
        "cukurs",
        "cukuru",
        "cukura",
        "cukuram"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Es iedevu grāmatu savam ___.",
      "options": [
        "draugs",
        "draugu",
        "drauga",
        "draugam"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Viņš katru rītu ___ agri.",
      "options": [
        "ceļas",
        "ceļos",
        "celies",
        "ceļamies"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Viņš runā gan angliski, ___ vāciski.",
      "options": [
        "gan",
        "jo",
        "bet",
        "vai"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Viņa ___ lēmumu pēc ilgām pārdomām.",
      "options": [
        "paņēma",
        "pieņēma",
        "saņēma",
        "izņēma"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Vakar man ___ jāstrādā līdz vēlai naktij.",
      "options": [
        "ir",
        "bija",
        "būs",
        "būtu"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Ja man būtu vairāk naudas, es ___ uz jūru.",
      "options": [
        "braucu",
        "braukšu",
        "brauktu",
        "brauc"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Viņa runāja ļoti ___, un visi viņai noticēja.",
      "options": [
        "klusi",
        "ātri",
        "skaļi",
        "pārliecinoši"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Šī problēma ___ nopietnu uzmanību.",
      "options": [
        "jautā",
        "vaicā",
        "prasa",
        "saka"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Pēc ilgas slimības viņš beidzot ___ veselību.",
      "options": [
        "atguva",
        "pazaudēja",
        "aizmirsa",
        "sajuta"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Cilvēks, ___ tu vakar satiki, ir mans kaimiņš.",
      "options": [
        "kurš",
        "kuru",
        "kura",
        "kuram"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Ja es ___ zinājis, es būtu palīdzējis.",
      "options": [
        "esmu",
        "biju",
        "būtu",
        "būšu"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Visi ___ dokumenti jau ir parakstīti.",
      "options": [
        "sagatavots",
        "sagatavoti",
        "sagatavota",
        "sagatavotie"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Viņa ___ klusumu, kad ienāca priekšnieks.",
      "options": [
        "pārtrauca",
        "salauza",
        "saplēsa",
        "nojauca"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Pēc maratona skrējēji bija tik ___, ka tikko spēja pakustēties.",
      "options": [
        "atpūtušies",
        "pārguruši",
        "priecīgi",
        "izsalkuši"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Viņš atzina ___ kļūdu un atvainojās.",
      "options": [
        "viņa",
        "sava",
        "savai",
        "savu"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "___ vairāk es par to domāju, jo mazāk es saprotu.",
      "options": [
        "Jo",
        "Tik",
        "Cik",
        "Vēl"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Viņš solīja zelta ___.",
      "options": [
        "kalnus",
        "gabalus",
        "monētas",
        "laukus"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Viņas ___ smaids liecināja, ka viņa nav patiesi laimīga.",
      "options": [
        "sirsnīgais",
        "mākslotais",
        "platais",
        "draudzīgais"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Pēc ilgām debatēm deputāti beidzot panāca ___.",
      "options": [
        "sastrīdēšanos",
        "apjukumu",
        "vienprātību",
        "vienaldzību"
      ],
      "answer": 2
    }
  ],
  "lt": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Aš ___ mokytojas.",
      "options": [
        "yra",
        "esi",
        "esu",
        "esame"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Mes ___ lietuviškai.",
      "options": [
        "kalbu",
        "kalbi",
        "kalba",
        "kalbame"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Aš matau ___.",
      "options": [
        "katė",
        "katę",
        "katės",
        "katei"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Mano sesuo ir mano ___ yra namie.",
      "options": [
        "brolis",
        "obuolys",
        "batas",
        "sūris"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Dangus yra ___.",
      "options": [
        "saldus",
        "greitas",
        "mėlynas",
        "senas"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Vakar mes ___ kine.",
      "options": [
        "buvome",
        "esame",
        "būsime",
        "būname"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Rytoj aš ___ į miestą.",
      "options": [
        "važiuoju",
        "važiavau",
        "važiuoti",
        "važiuosiu"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Žiemą lauke yra labai ___.",
      "options": [
        "karšta",
        "šalta",
        "saldu",
        "sunku"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Gydytojas dirba ___.",
      "options": [
        "mokykloje",
        "parduotuvėje",
        "ligoninėje",
        "restorane"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Kai lyja, aš pasiimu ___.",
      "options": [
        "skėtį",
        "žurnalą",
        "knygą",
        "raktą"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Atsiprašau, dabar aš neturiu ___.",
      "options": [
        "laikas",
        "laiką",
        "laikui",
        "laiko"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Kiekvieną rytą jis ___ septintą valandą.",
      "options": [
        "kelia",
        "keliasi",
        "kelti",
        "keliuosi"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Jis rašo laišką ___.",
      "options": [
        "pieštukas",
        "pieštuką",
        "pieštuku",
        "pieštuko"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Jis labai pavargo, ___ nuėjo miegoti anksti.",
      "options": [
        "todėl",
        "nors",
        "kol",
        "tačiau"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Norėdamas pagerinti sveikatą, jis pradėjo reguliariai ___.",
      "options": [
        "rūkyti",
        "vėluoti",
        "ginčytis",
        "sportuoti"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Jei turėčiau daugiau pinigų, ___ po visą pasaulį.",
      "options": [
        "keliausiu",
        "keliaučiau",
        "keliauju",
        "keliavau"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Visi vaikai bijo ___.",
      "options": [
        "tamsa",
        "tamsą",
        "tamsos",
        "tamsoje"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Po ilgų derybų šalys pagaliau pasiekė ___.",
      "options": [
        "susitarimą",
        "ginčą",
        "klaidą",
        "tylą"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Jo argumentai buvo tokie ___, kad visi su juo sutiko.",
      "options": [
        "nuobodūs",
        "klaidingi",
        "juokingi",
        "įtikinami"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Ji visada laikosi duoto ___.",
      "options": [
        "kelio",
        "žodžio",
        "namo",
        "rankos"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "___ namo, jis sutiko seną draugą.",
      "options": [
        "Eidamas",
        "Eiti",
        "Ėjo",
        "Eina"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Knyga, ___ pernai, tapo labai populiari.",
      "options": [
        "parašytas",
        "parašius",
        "parašyta",
        "parašė"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "___ daugiau jis dirbo, tuo labiau pavargo.",
      "options": [
        "Kaip",
        "Kuo",
        "Koks",
        "Kai"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Nepaisant sunkumų, jis ___ siekė savo tikslo.",
      "options": [
        "atsainiai",
        "abejingai",
        "nerūpestingai",
        "atkakliai"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Po nesėkmės jis nenuleido ___ ir bandė dar kartą.",
      "options": [
        "galvos",
        "akių",
        "rankų",
        "kojų"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "___ profesoriaus, egzaminas bus sunkus.",
      "options": [
        "Anot",
        "Apie",
        "Per",
        "Prieš"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Vaikystėje kiekvieną vasarą mes ___ pas senelius.",
      "options": [
        "važiavau",
        "važiuodavome",
        "važiuojame",
        "važiuosime"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Tas darbas jam buvo ne prie ___, ir jis greitai pasidavė.",
      "options": [
        "rankos",
        "kojos",
        "akies",
        "širdies"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Po žemės drebėjimo miestas virto ___.",
      "options": [
        "pelenais",
        "dulkėmis",
        "griuvėsiais",
        "akmenimis"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Jo elgesys buvo toks ___, kad net priešai juo žavėjosi.",
      "options": [
        "taurus",
        "gobšus",
        "klastingas",
        "bailus"
      ],
      "answer": 0
    }
  ],
  "fi": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Minä ___ suomea.",
      "options": [
        "puhut",
        "puhun",
        "puhuu",
        "puhutte"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Minulla on kaksi ___.",
      "options": [
        "koira",
        "koiran",
        "koiraa",
        "koirat"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Talvella on usein ___.",
      "options": [
        "kylmä",
        "kuuma",
        "nopea",
        "iloinen"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Koira on ___.",
      "options": [
        "kasvi",
        "ruoka",
        "väri",
        "eläin"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Kissa nukkuu ___ alla.",
      "options": [
        "sänky",
        "sängyn",
        "sängyssä",
        "sängyllä"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Eilen minä ___ kaupassa.",
      "options": [
        "olin",
        "olen",
        "olit",
        "oli"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Otan maitoa ___.",
      "options": [
        "jääkaapissa",
        "jääkaapista",
        "jääkaappiin",
        "jääkaapilla"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Juna on ___ kuin bussi.",
      "options": [
        "nopea",
        "nopeasti",
        "nopeampi",
        "nopein"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Menen nukkumaan, koska olen ___.",
      "options": [
        "nälkäinen",
        "iloinen",
        "janoinen",
        "väsynyt"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Kaupassa maksetaan ___ tai kortilla.",
      "options": [
        "vedellä",
        "kynällä",
        "käteisellä",
        "autolla"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "En nähnyt ___ koko päivänä.",
      "options": [
        "hänet",
        "häntä",
        "hän",
        "hänen"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Jään kotiin, ___ olen sairas.",
      "options": [
        "koska",
        "mutta",
        "tai",
        "vaikka"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Minun täytyy ___ päätös ennen huomista.",
      "options": [
        "ottaa",
        "antaa",
        "tehdä",
        "saada"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Hän on hyvin ___; hän auttaa aina muita.",
      "options": [
        "itsekäs",
        "laiska",
        "ujo",
        "avulias"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Sinun kannattaa ___ liput etukäteen.",
      "options": [
        "unohtaa",
        "myydä",
        "varata",
        "hukata"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Hän ei pidä ___.",
      "options": [
        "kahvia",
        "kahvin",
        "kahvista",
        "kahvi"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Nykyään Suomessa ___ yhä enemmän teetä.",
      "options": [
        "juotiin",
        "juovat",
        "juon",
        "juodaan"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Opettajan ___ kirja oli mielenkiintoinen.",
      "options": [
        "kirjoittanut",
        "kirjoittama",
        "kirjoitettu",
        "kirjoittava"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Aurinko katosi, ja taivas ___.",
      "options": [
        "pilvistyi",
        "kirkastui",
        "paistoi",
        "suli"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Hän ___ lakia ajamalla ylinopeutta.",
      "options": [
        "rikkoi",
        "noudatti",
        "sääti",
        "luki"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Luin ___ eilen illalla, mutta en ehtinyt loppuun.",
      "options": [
        "kirjan",
        "kirjaa",
        "kirja",
        "kirjoja"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Hän opiskeli ___ ja työskentelee nyt sairaalassa.",
      "options": [
        "lääkäri",
        "lääkärinä",
        "lääkäriksi",
        "lääkäriä"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Hän valehteli ja veti minua ___.",
      "options": [
        "nenästä",
        "kädestä",
        "jalasta",
        "hiuksista"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Hänen perustelunsa olivat ___, joten kukaan ei voinut väittää vastaan.",
      "options": [
        "vetiset",
        "heikot",
        "epäselvät",
        "vedenpitävät"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Jännitys ___, kun saimme hyviä uutisia.",
      "options": [
        "kiristyi",
        "kasvoi",
        "jäätyi",
        "laukesi"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Vaikeuksista huolimatta hän ei heittänyt ___ kaivoon.",
      "options": [
        "pyyhettä",
        "kirvestä",
        "hanskoja",
        "avaimia"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Hänen ___ käytöksensä loukkasi monia juhlavieraita.",
      "options": [
        "tahditon",
        "tahdikas",
        "kohtelias",
        "hillitty"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Poliitikko ___ totuutta vältelläkseen vastuuta.",
      "options": [
        "paljasti",
        "korosti",
        "vääristeli",
        "kertoi"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Hän saapui juhliin ___.",
      "options": [
        "vaimolla",
        "vaimolle",
        "vaimossa",
        "vaimoineen"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Hän ei pitänyt elokuvasta, enkä ___ pitänyt.",
      "options": [
        "minäkin",
        "minäkään",
        "minulla",
        "minussa"
      ],
      "answer": 1
    }
  ],
  "hu": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Én ___ magyar.",
      "options": [
        "vagyok",
        "vagy",
        "van",
        "vannak"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Apám és ___ a szüleim.",
      "options": [
        "lányom",
        "anyám",
        "nővérem",
        "nagynéném"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Kinyitom ___ ablakot, mert meleg van.",
      "options": [
        "a",
        "egy",
        "az",
        "ez"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Nagyon szomjas vagyok, kérek egy pohár ___.",
      "options": [
        "kenyeret",
        "sajtot",
        "könyvet",
        "vizet"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "A gyerek egy kis ___ rajzol.",
      "options": [
        "kutya",
        "kutyát",
        "kutyában",
        "kutyák"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Tavaly nyáron a tengernél ___.",
      "options": [
        "vagyok",
        "leszek",
        "lennék",
        "voltam"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Ez az én új ___.",
      "options": [
        "házam",
        "házad",
        "háza",
        "házunk"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Esik az eső, ne felejtsd otthon az ___!",
      "options": [
        "napszemüveget",
        "törölközőt",
        "esernyőt",
        "fürdőruhát"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "A kosárban két ___ van.",
      "options": [
        "almák",
        "alma",
        "almát",
        "almái"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "A teszt nagyon ___ volt, mindenki hibátlanul megoldotta.",
      "options": [
        "nehéz",
        "drága",
        "könnyű",
        "unalmas"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Én minden reggel ___ az újságot.",
      "options": [
        "olvasok",
        "olvasom",
        "olvasod",
        "olvassa"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "A levelet ___ írtam alá.",
      "options": [
        "tollban",
        "tollért",
        "tollval",
        "tollal"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Beteg voltam, ___ nem mentem dolgozni.",
      "options": [
        "ezért",
        "viszont",
        "pedig",
        "hogy"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "A film annyira ___ volt, hogy a végén mindenki sírt.",
      "options": [
        "unalmas",
        "hangos",
        "megható",
        "vidám"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Ne aggódj, ez csak egy enyhe ___, holnapra meggyógyulsz.",
      "options": [
        "ünnep",
        "ajándék",
        "utazás",
        "megfázás"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Mielőtt elmész, ne felejtsd el ___ a számítógépet!",
      "options": [
        "bekapcsolni",
        "kikapcsolni",
        "felkapcsolni",
        "átkapcsolni"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Ha több időm ___, többet utaznék.",
      "options": [
        "van",
        "lesz",
        "lenne",
        "volt"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Nagyon büszke vagyok ___, hogy ilyen sokat fejlődtél.",
      "options": [
        "neked",
        "veled",
        "tőled",
        "rád"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "A politikus ___ válaszolt, így senki sem értette a valódi álláspontját.",
      "options": [
        "kitérően",
        "őszintén",
        "világosan",
        "részletesen"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "A gyár csődbe ment, ezért több száz dolgozót ___.",
      "options": [
        "felvettek",
        "elbocsátottak",
        "kineveztek",
        "előléptettek"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Bizonyítékok hiányában a bíróság ___ a vádlottat.",
      "options": [
        "elítélte",
        "letartóztatta",
        "felmentette",
        "kihallgatta"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Nem magam vágom a hajamat, hanem a fodrásszal ___.",
      "options": [
        "vágatom",
        "vágom",
        "vágják",
        "levágom"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "A régi kastély ___ állapotban volt: a tető beomlott, a falak megrepedtek.",
      "options": [
        "kifogástalan",
        "ragyogó",
        "újszerű",
        "siralmas"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "A nagy hidegben a tó vize ___ fagyott.",
      "options": [
        "jégvé",
        "jéggé",
        "jégben",
        "jéggel"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "A tanár ___ hunyt a kisebb fegyelmezetlenségek felett.",
      "options": [
        "fület",
        "fejet",
        "szemet",
        "kezet"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "A kritikus ___ megjegyzései mélyen megbántották a fiatal írót.",
      "options": [
        "hízelgő",
        "semleges",
        "elismerő",
        "epés"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Szívesen ___ még egy szelet tortát, ha nem lennék tele.",
      "options": [
        "ennék",
        "enném",
        "ennének",
        "eszem"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "A vészhelyzetben is megőrizte a ___, és higgadtan irányította a mentést.",
      "options": [
        "emlékét",
        "hidegvérét",
        "egészségét",
        "kíváncsiságát"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Holnap biztosan ___ téged, amint lesz egy kis időm.",
      "options": [
        "felhívom",
        "felhívlek",
        "felhívlak",
        "felhívtalak"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Az új rendelet gyakorlatilag ___ betűvé vált, mert senki sem tartja be.",
      "options": [
        "holt",
        "halott",
        "halálos",
        "élettelen"
      ],
      "answer": 0
    }
  ],
  "et": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Ma ___ õpilane.",
      "options": [
        "olen",
        "oled",
        "on",
        "olema"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Sina ___ eesti keelt.",
      "options": [
        "õpin",
        "õpid",
        "õpib",
        "õppida"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Mul on kaks ___.",
      "options": [
        "raamat",
        "raamatu",
        "raamatut",
        "raamatud"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Ma joon ___.",
      "options": [
        "leiba",
        "autot",
        "raamatut",
        "vett"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Ema ja isa on minu ___.",
      "options": [
        "vanemad",
        "lapsed",
        "sõbrad",
        "õpetajad"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Eile ma ___ kinos.",
      "options": [
        "olen",
        "olin",
        "olid",
        "oli"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Lapsed lähevad ___.",
      "options": [
        "koolis",
        "koolist",
        "kooli",
        "koolile"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Minu auto on ___ kui sinu oma.",
      "options": [
        "kiiresti",
        "kiire",
        "kõige kiirem",
        "kiirem"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Täna on ilus ilm, ___ paistab.",
      "options": [
        "päike",
        "vihm",
        "lumi",
        "tuul"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Ma ostan poest ___, et teha võileiba.",
      "options": [
        "piima",
        "leiba",
        "vett",
        "õli"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Ma lugesin ___ läbi.",
      "options": [
        "raamat",
        "raamatut",
        "raamatu",
        "raamatud"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Ma ei tule, ___ mul ei ole aega.",
      "options": [
        "sest",
        "aga",
        "ega",
        "kuid"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Ta on väga ___ inimene, aitab alati teisi.",
      "options": [
        "laisk",
        "kade",
        "kurb",
        "abivalmis"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Pärast pikka tööpäeva tahan ma ainult magada, olen nii ___.",
      "options": [
        "näljane",
        "väsinud",
        "janune",
        "rõõmus"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Ma ___ sulle nõu: ära tee seda.",
      "options": [
        "annan",
        "teen",
        "võtan",
        "panen"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Linnud hakkavad varahommikul ___.",
      "options": [
        "laulda",
        "lauldes",
        "laulma",
        "laulnud"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Ma tahan ___ koju.",
      "options": [
        "minema",
        "minnes",
        "läinud",
        "minna"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "See on hästi ___ raamat.",
      "options": [
        "kirjutatud",
        "kirjutanud",
        "kirjutades",
        "kirjutama"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Tema selgitus oli väga ___, ma ei saanud midagi aru.",
      "options": [
        "selge",
        "segane",
        "lihtne",
        "huvitav"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Ta ütleb alati otse välja, mida mõtleb, ta on tõesti ___.",
      "options": [
        "tagasihoidlik",
        "ettevaatlik",
        "otsekohene",
        "kannatlik"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Ta õppis viis aastat ja sai lõpuks ___.",
      "options": [
        "arst",
        "arsti",
        "arstina",
        "arstiks"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Lapsed on praegu õues ___.",
      "options": [
        "mänginud",
        "mängimas",
        "mängima",
        "mängides"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Ta on oma alal tõeline ___.",
      "options": [
        "asjatundja",
        "algaja",
        "pealtvaataja",
        "möödakäija"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Tema seisukoht oli nii ___, et keegi ei julgenud vastu vaielda.",
      "options": [
        "kahtlane",
        "ebamäärane",
        "veenev",
        "vastuoluline"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Pärast pikka arutelu saavutati lõpuks ___.",
      "options": [
        "tüli",
        "segadus",
        "vaikus",
        "kokkulepe"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Ta lahkus sõnagi ___.",
      "options": [
        "ütlemata",
        "ütlemas",
        "öeldes",
        "ütlema"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Ta saabus peole kahe ___.",
      "options": [
        "sõpradega",
        "sõbraga",
        "sõbra",
        "sõpru"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Tema käitumine oli täiesti ___, keegi ei osanud seda oodata.",
      "options": [
        "etteaimatav",
        "tavapärane",
        "ootuspärane",
        "ettearvamatu"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Ta võttis end ___ ja hakkas tegutsema.",
      "options": [
        "lahti",
        "üles",
        "kokku",
        "maha"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "See on äärmiselt ___ teema, sellest ei räägita avalikult.",
      "options": [
        "igapäevane",
        "delikaatne",
        "meeldiv",
        "lõbus"
      ],
      "answer": 1
    }
  ],
  "el": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Αυτή είναι ___ μητέρα μου.",
      "options": [
        "ο",
        "η",
        "το",
        "την"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Εγώ ___ από την Ελλάδα.",
      "options": [
        "είσαι",
        "είναι",
        "είμαι",
        "είμαστε"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Πηγαίνω ___ σχολείο κάθε μέρα.",
      "options": [
        "στο",
        "στη",
        "στον",
        "στις"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Η εβδομάδα έχει επτά ___.",
      "options": [
        "μήνες",
        "ώρες",
        "χρόνια",
        "μέρες"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Διψάω και πίνω ___.",
      "options": [
        "νερό",
        "ψωμί",
        "κρέας",
        "τυρί"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Χθες ___ στο σινεμά με τους φίλους μου.",
      "options": [
        "πηγαίνω",
        "θα πάω",
        "πήγα",
        "πάω"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Αύριο ___ τους φίλους μου.",
      "options": [
        "είδα",
        "θα δω",
        "βλέπω",
        "έβλεπα"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Η Άννα είναι ___ από την αδελφή της.",
      "options": [
        "ψηλή",
        "ψηλά",
        "ψηλές",
        "ψηλότερη"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Τον χειμώνα χιονίζει και κάνει πολύ ___.",
      "options": [
        "κρύο",
        "ζέστη",
        "ήλιο",
        "φως"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Έκανα κράτηση σε ένα ___ για το βραδινό φαγητό.",
      "options": [
        "νοσοκομείο",
        "εστιατόριο",
        "σχολείο",
        "γραφείο"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Θέλω να ___ στην Ελλάδα το καλοκαίρι.",
      "options": [
        "πάω",
        "πας",
        "πάει",
        "πάμε"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Το αυτοκίνητο ___ πατέρα μου είναι κόκκινο.",
      "options": [
        "τον",
        "ο",
        "του",
        "το"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Πού είναι το κλειδί; Δεν ___ βρίσκω.",
      "options": [
        "τον",
        "την",
        "τα",
        "το"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Δεν πήγα στη δουλειά ___ ήμουν άρρωστος.",
      "options": [
        "επειδή",
        "αλλά",
        "όμως",
        "ενώ"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Κάθε πρωί ___ ντους πριν τη δουλειά.",
      "options": [
        "παίρνω",
        "κάνω",
        "βγάζω",
        "πιάνω"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Το σπίτι ___ πέρυσι από έναν γνωστό αρχιτέκτονα.",
      "options": [
        "έχτισε",
        "χτίζει",
        "χτίστηκε",
        "χτίζεται"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Μόλις ___ στο σπίτι, θα σου τηλεφωνήσω.",
      "options": [
        "φτάσω",
        "φτάνω",
        "έφτασα",
        "θα φτάσω"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Όλοι θύμωσαν γιατί η συμπεριφορά του ήταν εντελώς ___.",
      "options": [
        "ευχάριστη",
        "φυσιολογική",
        "συνηθισμένη",
        "απαράδεκτη"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Μετά από πολλή σκέψη, ___ να αλλάξω δουλειά.",
      "options": [
        "νόμισα",
        "αποφάσισα",
        "κατάλαβα",
        "ήξερα"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Το φάρμακο πρέπει να φυλάσσεται σε ___ μέρος.",
      "options": [
        "ζεστό",
        "φωτεινό",
        "δροσερό",
        "υγρό"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Όταν ήμασταν παιδιά, κάθε καλοκαίρι ___ στο ίδιο νησί.",
      "options": [
        "πήγαμε",
        "πηγαίνουμε",
        "θα πάμε",
        "πηγαίναμε"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Αν είχα χρόνο, ___ μαζί σου στο ταξίδι.",
      "options": [
        "θα έρθω",
        "θα ερχόμουν",
        "ήρθα",
        "έρχομαι"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Η εταιρεία αναγκάστηκε να ___ μέτρα για να μειώσει τα έξοδα.",
      "options": [
        "λάβει",
        "βρει",
        "κάνει",
        "δώσει"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Δεν πρέπει να βγάζεις ___ συμπεράσματα χωρίς να εξετάσεις τα γεγονότα.",
      "options": [
        "αργά",
        "σωστά",
        "βιαστικά",
        "βαριά"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Ο ομιλητής ήταν τόσο ___ που όλοι τον άκουγαν με προσοχή.",
      "options": [
        "σιωπηλός",
        "ευφραδής",
        "αδιάφορος",
        "κουρασμένος"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Όταν άκουσε τα δυσάρεστα νέα, έμεινε ___.",
      "options": [
        "άναυδος",
        "ευχαριστημένος",
        "ήρεμος",
        "αδιάφορος"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Η κατάσταση ήταν δύσκολη, ___ καταφέραμε να τα βγάλουμε πέρα.",
      "options": [
        "επομένως",
        "δηλαδή",
        "συνεπώς",
        "εντούτοις"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Κάνε ___ νομίζεις σωστό.",
      "options": [
        "ότι",
        "ό,τι",
        "που",
        "το οποίο"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Φοβάμαι ότι μέχρι να φτάσουμε, η ταινία θα ___ ήδη αρχίσει.",
      "options": [
        "έχουν",
        "έχω",
        "έχει",
        "είναι"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Παρά τις δυσκολίες, παρέμεινε ___ στις αρχές του.",
      "options": [
        "ακλόνητος",
        "αναποφάσιστος",
        "αδιάφορος",
        "ευμετάβλητος"
      ],
      "answer": 0
    }
  ],
  "vi": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Một ___ mèo đang ngủ trên ghế.",
      "options": [
        "cái",
        "con",
        "quyển",
        "cây"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Ngày mai tôi ___ đi Hà Nội thăm bạn.",
      "options": [
        "đã",
        "đang",
        "sẽ",
        "vừa"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Tôi ăn chay nên tôi ___ ăn thịt.",
      "options": [
        "không",
        "rất",
        "đã",
        "sẽ"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Buổi sáng tôi thường uống một cốc ___.",
      "options": [
        "bàn",
        "bút",
        "ghế",
        "cà phê"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Con voi rất ___, còn con chuột thì rất nhỏ.",
      "options": [
        "nhỏ",
        "đẹp",
        "chậm",
        "to"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Trong lớp tôi, Nam là người học giỏi ___.",
      "options": [
        "hơn",
        "rất",
        "bằng",
        "nhất"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Nhà tôi nằm ở ___ bưu điện và ngân hàng.",
      "options": [
        "giữa",
        "trên",
        "dưới",
        "trong"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Trời đang mưa to, bạn nhớ mang theo cái ___ nhé.",
      "options": [
        "bút",
        "sách",
        "ô",
        "đèn"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Tôi bị ốm nặng nên phải đến ___ để khám bệnh.",
      "options": [
        "bệnh viện",
        "chợ",
        "trường học",
        "công viên"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Mỗi buổi sáng, tôi ___ răng rồi mới ăn sáng.",
      "options": [
        "nấu",
        "đánh",
        "mua",
        "đếm"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Nghe thấy tiếng động lạ, anh ấy vội chạy ___ khỏi nhà.",
      "options": [
        "vào",
        "lên",
        "ra",
        "xuống"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Tôi rất muốn đi chơi, ___ trời mưa to nên tôi đành ở nhà.",
      "options": [
        "nhưng",
        "và",
        "nếu",
        "hoặc"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Nhờ chăm chỉ học hành, Lan ___ điểm cao trong kỳ thi vừa rồi.",
      "options": [
        "bị",
        "bằng",
        "cho",
        "được"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Cô ấy nói tiếng Anh vô cùng ___, gần như người bản xứ.",
      "options": [
        "to",
        "lưu loát",
        "nhanh",
        "nhiều"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Trời trở lạnh rồi, con nhớ ___ thêm một chiếc áo khoác cho ấm.",
      "options": [
        "đội",
        "đi",
        "đeo",
        "mặc"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Bạn phải cố gắng hết sức thì ___ mong đạt được kết quả tốt.",
      "options": [
        "đã",
        "mới",
        "vẫn",
        "liền"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Càng lớn tuổi, người ta ___ hiểu rõ giá trị của thời gian và sức khỏe.",
      "options": [
        "rất",
        "đã",
        "càng",
        "vừa"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Cuộc họp buộc phải ___ lại đến tuần sau vì giám đốc đi công tác.",
      "options": [
        "hoãn",
        "hủy",
        "mở",
        "bắt đầu"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Trước những lời chỉ trích gay gắt, anh ấy vẫn giữ thái độ ___, không hề tức giận.",
      "options": [
        "hốt hoảng",
        "nóng nảy",
        "bực bội",
        "điềm tĩnh"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Để hoàn thành dự án này, chúng ta buộc phải ___ rất nhiều thời gian và công sức.",
      "options": [
        "bỏ ra",
        "kiếm",
        "tiết kiệm",
        "thu"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Tôi chỉ nói đùa cho vui ___, anh đừng để bụng làm gì.",
      "options": [
        "mãi",
        "thôi",
        "luôn",
        "nữa"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "___ khó khăn đến mấy, anh ấy cũng quyết không bao giờ bỏ cuộc.",
      "options": [
        "Vì",
        "Nếu",
        "Dù",
        "Khi"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "___ tôi đã đến kịp giờ, nếu như chiếc xe không bị hỏng giữa đường.",
      "options": [
        "Bởi vì",
        "Cho nên",
        "Tuy nhiên",
        "Lẽ ra"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Chính phủ vừa ban hành một loạt ___ mới nhằm hỗ trợ các doanh nghiệp vừa và nhỏ.",
      "options": [
        "phong cảnh",
        "thực phẩm",
        "chính sách",
        "trang phục"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Lời giải thích của anh ta hoàn toàn không có sức ___, nên chẳng ai tin cả.",
      "options": [
        "thuyết phục",
        "tưởng tượng",
        "nghỉ ngơi",
        "tiêu thụ"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Dù sao ___ nữa, chúng ta cũng nên dành cho anh ấy một lời cảm ơn.",
      "options": [
        "đi",
        "rồi",
        "mà",
        "thì"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "___ ra anh ta mới chính là người đứng sau toàn bộ kế hoạch này.",
      "options": [
        "Bởi",
        "Tuy",
        "Giá",
        "Hóa"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Ông bà ta thường sống theo lối ăn chắc ___ bền, không bao giờ phung phí.",
      "options": [
        "ngủ",
        "đi",
        "mặc",
        "ngồi"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Sau trận lũ lịch sử, cả vùng quê rơi vào cảnh ___, nhà cửa tan hoang, ruộng vườn xơ xác.",
      "options": [
        "trù phú",
        "tiêu điều",
        "nhộn nhịp",
        "phồn vinh"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Những lời động viên của thầy đã ___ vào lòng mỗi học trò một niềm tin mãnh liệt vào tương lai.",
      "options": [
        "nấu",
        "gieo",
        "mua",
        "đếm"
      ],
      "answer": 1
    }
  ],
  "id": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Buku itu ada ___ atas meja.",
      "options": [
        "ke",
        "dari",
        "di",
        "pada"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Ayah saya ___ di sebuah bank setiap hari.",
      "options": [
        "pekerjaan",
        "bekerja",
        "mengerjakan",
        "kerja"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Saya minum ___ ketika merasa haus.",
      "options": [
        "air",
        "nasi",
        "roti",
        "buku"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Lawan kata dari 'besar' adalah ___.",
      "options": [
        "tinggi",
        "berat",
        "panjang",
        "kecil"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Ibu dan ayah adalah ___ kita.",
      "options": [
        "anak",
        "orang tua",
        "tetangga",
        "tamu"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Tunggu sebentar, ayah ___ mandi dan akan segera keluar.",
      "options": [
        "sedang",
        "sudah",
        "akan",
        "belum"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Mereka adalah ___ yang baik; semuanya saling membantu.",
      "options": [
        "berteman",
        "pertemanan",
        "teman-teman",
        "menemani"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Gunung itu jauh lebih ___ daripada bukit di belakang rumah.",
      "options": [
        "meninggi",
        "tertinggi",
        "ketinggian",
        "tinggi"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Ibu membeli sayur-mayur segar di ___ setiap pagi.",
      "options": [
        "bandara",
        "apotek",
        "pasar",
        "kantor"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Penjahit itu memotong kain dengan ___.",
      "options": [
        "sendok",
        "gunting",
        "sapu",
        "ember"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Gelas itu ___ dari meja ketika saya tidak sengaja menyenggolnya.",
      "options": [
        "menjatuhkan",
        "jatuhkan",
        "terjatuh",
        "dijatuhkan"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Dia belajar dengan giat ___ dapat lulus ujian dengan nilai baik.",
      "options": [
        "tetapi",
        "agar",
        "karena",
        "seolah-olah"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Tim ahli sedang ___ penyebab jatuhnya pesawat itu.",
      "options": [
        "merayakan",
        "melukis",
        "menanam",
        "menyelidiki"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Setelah lulus kuliah, ia ___ pekerjaan di beberapa perusahaan besar.",
      "options": [
        "melamar",
        "membuang",
        "menghapus",
        "menumpahkan"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Karena harganya sangat ___, banyak orang berebut membeli barang itu.",
      "options": [
        "mahal",
        "murah",
        "jauh",
        "berat"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "___ penduduk di kota itu sangat tinggi, mencapai ribuan jiwa per kilometer persegi.",
      "options": [
        "Padat",
        "Memadati",
        "Berpadat",
        "Kepadatan"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Laporan keuangan itu ___ oleh seorang akuntan profesional kemarin.",
      "options": [
        "diperiksa",
        "memeriksa",
        "pemeriksa",
        "periksa"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Keberhasilan proyek ini sangat bergantung ___ kerja sama seluruh anggota tim.",
      "options": [
        "dengan",
        "untuk",
        "pada",
        "akan"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Pidato yang berapi-api itu berhasil ___ semangat juang para pejuang.",
      "options": [
        "memadamkan",
        "membangkitkan",
        "menurunkan",
        "menghapuskan"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Bukti yang diajukan jaksa begitu ___ sehingga terdakwa tidak mampu membantahnya.",
      "options": [
        "meragukan",
        "menyedihkan",
        "meyakinkan",
        "membingungkan"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Pemerintah berupaya ___ jurang kesenjangan antara kaum kaya dan miskin.",
      "options": [
        "menyempit",
        "sempit",
        "kesempitan",
        "mempersempit"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "___ tinggi suatu pohon, semakin kencang pula angin yang menerpanya.",
      "options": [
        "Sangat",
        "Semakin",
        "Terlalu",
        "Paling"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Setelah berunding berhari-hari, kedua belah pihak akhirnya mencapai ___.",
      "options": [
        "kesepakatan",
        "kesedihan",
        "kebiasaan",
        "kelemahan"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Perbuatan curang semacam itu sungguh ___ dan pantas mendapat hukuman.",
      "options": [
        "terpuji",
        "terkenal",
        "terbuka",
        "tercela"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Sebagai pemimpin, ia harus ___ tanggung jawab yang besar atas setiap keputusannya.",
      "options": [
        "memikul",
        "menenteng",
        "menggendong",
        "memeluk"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Baik pihak penggugat ___ pihak tergugat sepakat untuk menempuh jalur damai.",
      "options": [
        "ataupun",
        "walaupun",
        "maupun",
        "sedangkan"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "___ dengan meningkatnya angka pengangguran, pemerintah meluncurkan program pelatihan kerja.",
      "options": [
        "Sehubungan",
        "Sebaliknya",
        "Sementara",
        "Seandainya"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Penemuan internet telah ___ cara manusia berkomunikasi secara drastis.",
      "options": [
        "merubah",
        "mengubah",
        "merobah",
        "mengrubah"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Aku yakin ada udang di balik ___ dari sikap baiknya yang tiba-tiba itu.",
      "options": [
        "batu",
        "air",
        "daun",
        "semak"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Pemandangan matahari terbenam di ufuk barat begitu ___ hingga membuat semua pengunjung terpana.",
      "options": [
        "mengerikan",
        "membosankan",
        "menjijikkan",
        "memesona"
      ],
      "answer": 3
    }
  ],
  "ms": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "___ awak tinggal sekarang?",
      "options": [
        "Bila",
        "Berapa",
        "Di mana",
        "Mengapa"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Adik saya suka ___ di taman setiap petang.",
      "options": [
        "bermain",
        "permainan",
        "mainan",
        "memainkan"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Itu ___ kucing saya; kucing saya berwarna hitam.",
      "options": [
        "tidak",
        "bukan",
        "belum",
        "jangan"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Saya suka minum ___ panas pada waktu pagi.",
      "options": [
        "kereta",
        "baju",
        "pintu",
        "kopi"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Burung itu boleh ___ tinggi di udara.",
      "options": [
        "berenang",
        "terbang",
        "berjalan",
        "tidur"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Mereka ___ makan tadi, jadi mereka tidak lapar lagi.",
      "options": [
        "sedang",
        "sudah",
        "akan",
        "belum"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Abang saya lebih tinggi ___ saya.",
      "options": [
        "dengan",
        "kepada",
        "untuk",
        "daripada"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "___ itu sedang bermain bola di padang sekolah.",
      "options": [
        "Kanak-kanak",
        "Buku-buku",
        "Kereta-kereta",
        "Pokok-pokok"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Saya menggunakan ___ untuk memotong kertas itu.",
      "options": [
        "sudu",
        "cawan",
        "gunting",
        "garpu"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Selepas berlari sejauh sepuluh kilometer, dia berasa sangat ___ dan mahu berehat.",
      "options": [
        "gembira",
        "sejuk",
        "pandai",
        "letih"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Ibu ___ surat itu kepada nenek semalam.",
      "options": [
        "menghantar",
        "hantaran",
        "penghantar",
        "berhantar"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Dia ___ di atas sofa kerana terlalu letih selepas bekerja.",
      "options": [
        "menidurkan",
        "tertidur",
        "ditidurkan",
        "peniduran"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Saya tidak dapat hadir ke mesyuarat itu ___ saya demam.",
      "options": [
        "tetapi",
        "supaya",
        "kerana",
        "walaupun"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Pihak polis sedang ___ punca kemalangan jalan raya itu.",
      "options": [
        "menyiasat",
        "menyiarkan",
        "menyaksikan",
        "menyanyikan"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Harga barang di kedai itu sangat ___, jadi ramai pelanggan membeli-belah di sana.",
      "options": [
        "mahal",
        "berat",
        "panjang",
        "murah"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "___ teknologi maklumat telah mengubah cara manusia bekerja.",
      "options": [
        "Berkembang",
        "Mengembang",
        "Perkembangan",
        "Dikembangkan"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Surat rasmi itu ___ oleh setiausaha sebelum dihantar kepada pengarah.",
      "options": [
        "menaip",
        "menaipkan",
        "ditaip",
        "penaip"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Cadangan yang bernas itu ___ oleh majoriti ahli, lalu diluluskan.",
      "options": [
        "ditolak",
        "dibantah",
        "diabaikan",
        "disokong"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Pemandangan dari puncak gunung itu sungguh ___ sehingga semua pelancong terpegun.",
      "options": [
        "menakjubkan",
        "membosankan",
        "menyedihkan",
        "menjengkelkan"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Selepas menerima ancaman, pihak berkuasa ___ kawalan keselamatan di lapangan terbang.",
      "options": [
        "memperdaya",
        "memperketat",
        "memperindah",
        "memperlahan"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Pihak sekolah sentiasa berusaha ___ pelajar tentang kepentingan menjaga kebersihan.",
      "options": [
        "menyedarkan",
        "menyedari",
        "kesedaran",
        "penyedaran"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Kedua-dua buah syarikat itu bersetuju untuk ___ dalam projek pembinaan tersebut.",
      "options": [
        "mengerjakan",
        "pekerjaan",
        "dikerjakan",
        "bekerjasama"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "___ hujan turun dengan lebat, majlis perasmian itu tetap diteruskan.",
      "options": [
        "Sekiranya",
        "Memandangkan",
        "Sungguhpun",
        "Sehingga"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Ucapan menteri itu berjaya ___ semangat para hadirin di dewan itu.",
      "options": [
        "membangunkan",
        "membangkitkan",
        "membongkar",
        "membantah"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Saintis itu berjaya ___ teori lama itu dengan bukti baharu yang lebih kukuh.",
      "options": [
        "menyangkal",
        "menyangka",
        "menyangkut",
        "menyangga"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Dia sentiasa berjimat cermat kerana berpegang pada peribahasa 'sediakan payung ___ hujan'.",
      "options": [
        "selepas",
        "ketika",
        "tanpa",
        "sebelum"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Mereka sentiasa saling membantu, bak kata pepatah, 'bagai aur dengan ___'.",
      "options": [
        "sungai",
        "tebing",
        "bukit",
        "ladang"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Wajahnya kelihatan ___ tatkala mendengar berita pemergian sahabat karibnya itu.",
      "options": [
        "ceria",
        "berseri-seri",
        "jernih",
        "muram"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Daun-daun kering ___ ditiup angin petang yang lembut.",
      "options": [
        "menggugurkan",
        "digugurkan",
        "berguguran",
        "pengguguran"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "___ tupai melompat, akhirnya jatuh ke tanah jua.",
      "options": [
        "Sepandai-pandai",
        "Berpandai-pandai",
        "Memandai-mandai",
        "Kepandaian"
      ],
      "answer": 0
    }
  ],
  "af": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Ek ___ nou 'n student.",
      "options": [
        "is",
        "sal",
        "wil",
        "moet"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Ek drink elke oggend 'n koppie ___.",
      "options": [
        "stoel",
        "koffie",
        "skoen",
        "boom"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Die boek lê ___ die tafel.",
      "options": [
        "en",
        "van",
        "op",
        "met"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Sit asseblief op die ___.",
      "options": [
        "water",
        "brood",
        "lied",
        "stoel"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Ek het twee ___ in my tas.",
      "options": [
        "boeke",
        "boek",
        "boeks",
        "booke"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Gister ___ ek 'n interessante boek gelees.",
      "options": [
        "is",
        "het",
        "was",
        "sal"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Ek drink nie koffie ___.",
      "options": [
        "nooit",
        "geen",
        "nie",
        "niks"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "My broer is ___ as ek.",
      "options": [
        "groot",
        "grootste",
        "te groot",
        "groter"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Ek was my hande met seep en ___.",
      "options": [
        "water",
        "melk",
        "sand",
        "vuur"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Sy ___ elke dag werk toe met die bus.",
      "options": [
        "eet",
        "slaap",
        "lees",
        "ry"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Ek weet dat sy ___.",
      "options": [
        "môre kom",
        "kom môre",
        "kom sy môre",
        "môre sy kom"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Hy het hard gewerk, ___ hy het nie geslaag nie.",
      "options": [
        "omdat",
        "maar",
        "sodat",
        "want"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Hy moes die woord in die woordeboek ___ omdat hy dit nie geken het nie.",
      "options": [
        "opstaan",
        "aflaai",
        "opsoek",
        "uitvee"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Na die lang reis was almal baie ___ en wou net slaap.",
      "options": [
        "vinnig",
        "ryk",
        "wakker",
        "moeg"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Die fliek was so ___ dat ek aan die slaap geraak het.",
      "options": [
        "vervelig",
        "spannend",
        "snaaks",
        "duur"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Die verslag ___ tans deur die komitee hersien.",
      "options": [
        "is",
        "het",
        "word",
        "was"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Jy ___ nie te kom nie as jy moeg is.",
      "options": [
        "hoef",
        "moet",
        "mag",
        "kan"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Of ons gaan stap, hang ___ die weer af.",
      "options": [
        "op",
        "aan",
        "van",
        "oor"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Die ou brug is ___ en mag nie meer gebruik word nie.",
      "options": [
        "splinternuut",
        "deursigtig",
        "smaaklik",
        "bouvallig"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Die regering probeer die ekonomie ___ deur belasting te verlaag.",
      "options": [
        "vertraag",
        "verbied",
        "ontken",
        "stimuleer"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Die mes ___ sy die brood gesny het, is skerp.",
      "options": [
        "wat",
        "waarmee",
        "waaraan",
        "waarvan"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "As ek geweet het, ___ ek jou gehelp het.",
      "options": [
        "het",
        "sal",
        "sou",
        "was"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Hy het die ___ uit die mou gelaat toe hy van die verrassing vertel het.",
      "options": [
        "aap",
        "kat",
        "hond",
        "muis"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Die ___ tussen die twee weergawes was so subtiel dat min mense dit opgemerk het.",
      "options": [
        "ooreenkoms",
        "vriendskap",
        "afstand",
        "diskrepansie"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Sy het 'n ___ besluit geneem en haar werk bedank om die wêreld te reis.",
      "options": [
        "growwe",
        "ingrypende",
        "sagte",
        "nat"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Sy het my met ope ___ ontvang.",
      "options": [
        "hande",
        "arms",
        "deure",
        "oë"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Die diktator se bewind was berug vir sy ___ onderdrukking van enige teëstand.",
      "options": [
        "vriendelike",
        "liefdevolle",
        "meedoënlose",
        "speelse"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Hy het besluit om nie aan die wedstryd ___ nie.",
      "options": [
        "deelneem te",
        "deel te neem",
        "te deelneem",
        "deel neem te"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Hy kon ___ lees nóg skryf.",
      "options": [
        "nóg",
        "of",
        "en",
        "nie"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Hy het die ___ op die kop geslaan met sy akkurate ontleding.",
      "options": [
        "hamer",
        "klip",
        "bal",
        "spyker"
      ],
      "answer": 3
    }
  ],
  "gl": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "O meu pai ___ médico no hospital da vila.",
      "options": [
        "son",
        "é",
        "es",
        "somos"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Eu ___ moita auga todos os días.",
      "options": [
        "bebo",
        "bebes",
        "bebe",
        "beben"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "___ casas da miña rúa son moi grandes.",
      "options": [
        "O",
        "A",
        "Os",
        "As"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Pola mañá tomo o ___ con café e pan.",
      "options": [
        "xantar",
        "cea",
        "almorzo",
        "mantel"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Para abrir a porta necesito a ___.",
      "options": [
        "mesa",
        "chave",
        "fiestra",
        "cadeira"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Onte ___ ao cine cos meus amigos.",
      "options": [
        "vou",
        "fun",
        "irei",
        "iría"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Despois de traballar todo o día, ela está ___ cansada.",
      "options": [
        "moi",
        "moito",
        "moita",
        "moitas"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Cando chove collo o ___ para non mollarme.",
      "options": [
        "abrigo",
        "sombreiro",
        "paraugas",
        "luvas"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Merquei o pan fresco na ___ da esquina.",
      "options": [
        "carnizaría",
        "libraría",
        "farmacia",
        "panadaría"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Para escribir unha carta necesito papel e un ___.",
      "options": [
        "garfo",
        "peite",
        "bolígrafo",
        "martelo"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Quero que ti ___ á festa mañá pola noite.",
      "options": [
        "veñas",
        "vés",
        "virás",
        "viñas"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Ao ___ nós á casa, xa era moi tarde.",
      "options": [
        "chegar",
        "chegamos",
        "chegarmos",
        "chegáramos"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Onte non ___ vin na clase, onde estabas?",
      "options": [
        "che",
        "te",
        "ti",
        "lle"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Desde que marchou, ___ moito de menos a miña amiga.",
      "options": [
        "teño",
        "fago",
        "poño",
        "boto"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "O médico receitoume un ___ para calmar a tose.",
      "options": [
        "vendaxe",
        "esparadrapo",
        "xarope",
        "termómetro"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Se ___ máis tempo libre, viaxaría por todo o mundo.",
      "options": [
        "teño",
        "tivese",
        "teña",
        "terei"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Despois de comer, demos un paseo ___ parque do barrio.",
      "options": [
        "polo",
        "por o",
        "pol-o",
        "porlo"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "O ceo encheuse de nubes escuras e comezou a ___.",
      "options": [
        "agromar",
        "abeirar",
        "chuviscar",
        "marmurar"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "É unha persoa moi ___: nunca gasta diñeiro en cousas innecesarias.",
      "options": [
        "faladora",
        "derrochadora",
        "preguiceira",
        "aforradora"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "A decisión final ___ de ti, eu non podo opinar.",
      "options": [
        "conta",
        "trata",
        "depende",
        "consiste"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Aínda non comprendo ben o ___ da súa decisión tan repentina.",
      "options": [
        "por que",
        "porque",
        "por qué",
        "porqué"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Non pretendía ofenderte, ___ axudarte a mellorar.",
      "options": [
        "se non",
        "senón",
        "sinón",
        "se nón"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "O director insistiu ___ que todos asistísemos á reunión.",
      "options": [
        "a",
        "en",
        "de",
        "por"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Despois da terrible noticia, na sala reinou un silencio ___.",
      "options": [
        "ledo",
        "mol",
        "sepulcral",
        "lanzal"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "A praza estaba ___ de xente que esperaba o concerto.",
      "options": [
        "ateigada",
        "murcha",
        "oca",
        "ergueita"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Os clientes querían os seus informes, pero aínda non ___ enviei.",
      "options": [
        "llos",
        "llelos",
        "los",
        "cho"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "É unha escritora ___ obra foi premiada en numerosas ocasións.",
      "options": [
        "cuxo",
        "cuio",
        "cuxas",
        "cuxa"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Falaba sempre con ___, ese xeito irónico e indirecto tan típico do país.",
      "options": [
        "fartura",
        "morriña",
        "retranca",
        "saudade"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Aquel reloxo de luxo custoulle ___; gastou todos os seus aforros.",
      "options": [
        "un ollo da cara",
        "as mans á cabeza",
        "o santo ao ceo",
        "a man no lume"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "É un home ___: nunca dá o brazo a torcer nin admite que se equivoca.",
      "options": [
        "dadivoso",
        "teimudo",
        "esvelto",
        "mol"
      ],
      "answer": 1
    }
  ],
  "kk": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Кітап ___ тұр.",
      "options": [
        "үстелге",
        "үстелде",
        "үстелден",
        "үстелдің"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Мен шөлдегенде ___ ішемін.",
      "options": [
        "су",
        "нан",
        "кітап",
        "үй"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Біздің сыныпта ___ көп.",
      "options": [
        "оқушытар",
        "оқушыдар",
        "оқушылар",
        "оқушылер"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Бұл менің ___.",
      "options": [
        "кітабың",
        "кітабым",
        "кітабы",
        "кітабымыз"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Қыста ауа райы ___.",
      "options": [
        "суық",
        "жылы",
        "ыстық",
        "үлкен"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Кеше біз киноға ___.",
      "options": [
        "бардым",
        "барамыз",
        "барды",
        "бардық"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Мен ертең ___ барамын.",
      "options": [
        "дәрігерден",
        "дәрігерге",
        "дәрігерде",
        "дәрігердің"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Құс аспанда ___.",
      "options": [
        "жүзеді",
        "жүгіреді",
        "ұшады",
        "еңбектейді"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Хат жазу үшін бізге ___ керек.",
      "options": [
        "қасық",
        "пышақ",
        "орындық",
        "қалам"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Мен кешке қатты шаршадым, сондықтан ерте ___.",
      "options": [
        "ұйықтадым",
        "ояндым",
        "тұрдым",
        "жуындым"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Менің кеше ___ кітабым өте қызық.",
      "options": [
        "оқыды",
        "оқыған",
        "оқитын",
        "оқып"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Мен кеше көшеде ___ кездестім.",
      "options": [
        "досымды",
        "досыма",
        "досыммен",
        "досымнан"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Жаңбыр жауып тұр, ___ біз үйде қалдық.",
      "options": [
        "бірақ",
        "егер",
        "немесе",
        "сондықтан"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Дәрігер науқасты мұқият ___.",
      "options": [
        "тексерді",
        "сатты",
        "ұмытты",
        "екті"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Бұл тапсырма өте ___, оны шешу қиын болды.",
      "options": [
        "оңай",
        "жеңіл",
        "күрделі",
        "қысқа"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Сайқымазақ балаларды ___.",
      "options": [
        "күлді",
        "күліп",
        "күледі",
        "күлдірді"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Бұл көпір өткен ғасырда ___.",
      "options": [
        "салынды",
        "салды",
        "салады",
        "салып"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Жоба сәтсіз аяқталды, себебі қаржы ___.",
      "options": [
        "жетті",
        "көбейді",
        "жетіспеді",
        "молайды"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Оның мінезі өте ___, ешкіммен ұрыспайды.",
      "options": [
        "ашушаң",
        "байсалды",
        "ұрысқақ",
        "қатыгез"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Ол көптеген қиындықтарды ___, мақсатына жетті.",
      "options": [
        "жеңіліп",
        "қашып",
        "ұмытып",
        "жеңіп"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Қария жас кезінде палуан ___ деседі.",
      "options": [
        "болды",
        "болыпты",
        "болады",
        "болса"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Қанша ___ да, үлгере алмадым.",
      "options": [
        "тырыссам",
        "тырысып",
        "тырысқан",
        "тырысар"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Мен сенің ___ сенемін.",
      "options": [
        "айтқаныңды",
        "айтқаныңнан",
        "айтқаныңа",
        "айтқаныңмен"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Ол бұл іске бар ___ салды.",
      "options": [
        "сөзін",
        "қолын",
        "көзін",
        "күшін"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Оның дәлелдері ___ еді, ешкім қарсы шыға алмады.",
      "options": [
        "бос",
        "негізсіз",
        "жалған",
        "дәйекті"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Біз қалаға көшіп ___ бес жыл болды.",
      "options": [
        "келген",
        "келгелі",
        "келгенде",
        "келсе"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Ол бәрін ___ сөйледі.",
      "options": [
        "білгендей",
        "білген",
        "білсе",
        "білгелі"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Ол қорыққанынан ___ ұшты.",
      "options": [
        "көзі",
        "қолы",
        "зәресі",
        "үні"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Ол сыпайы түрде басын ___.",
      "options": [
        "иді",
        "бұрды",
        "көтерді",
        "шайқады"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Ол сараңдығымен емес, ___ танылды.",
      "options": [
        "қатыгездігімен",
        "жомарттығымен",
        "ашкөздігімен",
        "қаталдығымен"
      ],
      "answer": 1
    }
  ],
  "uz": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Men maktab___ boraman.",
      "options": [
        "da",
        "ga",
        "dan",
        "ning"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Bu mening kitob___.",
      "options": [
        "im",
        "ing",
        "i",
        "imiz"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Biz har kuni suv icha___.",
      "options": [
        "man",
        "san",
        "miz",
        "di"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Men ___ bilan yozaman.",
      "options": [
        "stol",
        "deraza",
        "kitob",
        "qalam"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Bu suv issiq emas, juda ___.",
      "options": [
        "baland",
        "sovuq",
        "uzun",
        "ogʻir"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Kecha men kinoga ___.",
      "options": [
        "boraman",
        "boryapman",
        "bordim",
        "boradi"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Dars___ keyin uyga ketdik.",
      "options": [
        "ni",
        "ga",
        "da",
        "dan"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Bu yoʻl uzun emas, juda ___.",
      "options": [
        "keng",
        "tor",
        "qisqa",
        "tekis"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Bemorlarni ___ davolaydi.",
      "options": [
        "shifokor",
        "oshpaz",
        "haydovchi",
        "bogʻbon"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Eshikni ochish uchun ___ kerak.",
      "options": [
        "qoshiq",
        "daftar",
        "soyabon",
        "kalit"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Men kecha sotib ___ kitob juda qiziq.",
      "options": [
        "oldim",
        "olgan",
        "olaman",
        "olib"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Bola televizor___ diqqat bilan qaradi.",
      "options": [
        "ga",
        "ni",
        "da",
        "dan"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Kuchli yomgʻir yogʻdi, ___ biz uyda qoldik.",
      "options": [
        "lekin",
        "chunki",
        "yoki",
        "shuning uchun"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Bir tildagi matnni boshqa tilga oʻgirish ___ deyiladi.",
      "options": [
        "savol",
        "xabar",
        "tarjima",
        "suhbat"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Imtihon oson emas, aksincha juda ___ boʻldi.",
      "options": [
        "arzon",
        "qiyin",
        "shirin",
        "oson"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Bu maktab oʻtgan yili ___.",
      "options": [
        "qurildi",
        "qurdi",
        "quradi",
        "qurgan"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Men ishda har kuni kompyuter___ foydalanaman.",
      "options": [
        "ni",
        "ga",
        "dan",
        "da"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Bu masala juda ___, uni hal qilish oson emas.",
      "options": [
        "oddiy",
        "arzon",
        "mazali",
        "murakkab"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Rahbar bu masala boʻyicha muhim ___ qabul qildi.",
      "options": [
        "yomgʻir",
        "qaror",
        "osmon",
        "daraxt"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Uning fikri menikiga ___ edi, shuning uchun biz bahslashdik.",
      "options": [
        "oʻxshash",
        "yaqin",
        "zid",
        "teng"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Juda charchagan ___, u ishini oxiriga yetkazdi.",
      "options": [
        "boʻlgani uchun",
        "boʻlsa",
        "boʻlgach",
        "boʻlsa-da"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "U hech kimga hech narsa ___ ketib qoldi.",
      "options": [
        "aytib",
        "aytmasdan",
        "aytgan",
        "aytsa"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Bu ajoyib manzaradan hammaning ogʻzi ___ qoldi.",
      "options": [
        "ochiq",
        "yopiq",
        "katta",
        "kichik"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Uning dalillari juda ___ boʻlgani uchun, hech kim unga qarshi chiqa olmadi.",
      "options": [
        "asossiz",
        "foydasiz",
        "tasodifiy",
        "asosli"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "U oʻz xatosini ___ oldi va uzr soʻradi.",
      "options": [
        "qoʻl",
        "bosh",
        "tan",
        "koʻz"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Yolgʻon ___ koʻra, jim turgan afzal.",
      "options": [
        "gapirib",
        "gapirgandan",
        "gapirsa",
        "gapirgani"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "U na choy, ___ qahva ichdi; xullas, hech narsadan tatib koʻrmadi.",
      "options": [
        "na",
        "ham",
        "yoki",
        "balki"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "U oʻzining qiziq hazillari bilan hammani ___.",
      "options": [
        "kuldi",
        "kulindi",
        "kuldirdi",
        "kulishdi"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "U voqeani ___ ignasigacha gapirib berdi.",
      "options": [
        "boshidan",
        "oxiridan",
        "yuragidan",
        "ipidan"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "U pulni behuda sarflamaydi, biroq xasis ham emas, u shunchaki ___.",
      "options": [
        "tejamkor",
        "isrofgar",
        "badavlat",
        "qarzdor"
      ],
      "answer": 0
    }
  ],
  "tl": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "___ ang pangalan mo?",
      "options": [
        "Ano",
        "Saan",
        "Kailan",
        "Bakit"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Tumakbo ___ aso sa parke.",
      "options": [
        "ng",
        "sa",
        "ang",
        "kay"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Tuwing umaga, ___ ako ng almusal.",
      "options": [
        "magluto",
        "nagluluto",
        "magluluto",
        "nagluto"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Ang kabaligtaran ng salitang 'malaki' ay ___.",
      "options": [
        "mahaba",
        "mainit",
        "mabigat",
        "maliit"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Isinusuot natin ang ___ sa ating mga paa.",
      "options": [
        "sombrero",
        "kamiseta",
        "sapatos",
        "salamin"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Si Maria ay ___ matangkad kaysa kay Juan.",
      "options": [
        "napaka",
        "mas",
        "pinaka",
        "sobra"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Kahapon, ___ kami ng pelikula sa sinehan.",
      "options": [
        "manood",
        "nanonood",
        "nanood",
        "manonood"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Ginagamit natin ang ___ upang malaman ang oras.",
      "options": [
        "martilyo",
        "payong",
        "kutsara",
        "relo"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Araw-araw, ___ ako ng tubig sa mga halaman sa hardin.",
      "options": [
        "nagdidilig",
        "naglalaba",
        "nagwawalis",
        "nagluluto"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Sa susunod na pagkakataon, maglagay ka ng mas kaunting ___ upang hindi maalat ang ulam.",
      "options": [
        "asukal",
        "asin",
        "paminta",
        "suka"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "___ ni Ana ang makapal na libro kagabi.",
      "options": [
        "Bumasa",
        "Nagbasa",
        "Binasa",
        "Babasahin"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Siya ay isang ___ mag-aaral sa aming paaralan.",
      "options": [
        "masipag",
        "masipag na",
        "masipag ng",
        "masipag ay"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Hindi siya pumasok sa trabaho ___ siya ay maysakit.",
      "options": [
        "ngunit",
        "kaya",
        "bagaman",
        "dahil"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Pagkatapos maglakad ng maraming oras, ___ na ang aking mga binti.",
      "options": [
        "pagod",
        "masaya",
        "malinis",
        "bago"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Mahilig siyang ___ ng mga lumang barya at itago ang mga ito sa isang album.",
      "options": [
        "magtapon",
        "magbenta",
        "manghiram",
        "mangolekta"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "___ ng nanay ang batang lalaki ng mapait na gamot.",
      "options": [
        "Uminom",
        "Ininom",
        "Pinainom",
        "Nag-inom"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Tapos ___ ba ang proyekto mo o kailangan pa ng dagdag na oras?",
      "options": [
        "pa",
        "na",
        "nang",
        "din"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Ang kanyang ___ na pananalita ang nakahikayat sa mga tagapakinig na bumoto.",
      "options": [
        "mabagal",
        "magulo",
        "paliko-liko",
        "matatas"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Napakarami niyang ___ sa buhay, ngunit nagtagumpay pa rin siyang makapagtapos ng pag-aaral.",
      "options": [
        "pagsubok",
        "tagumpay",
        "kaligayahan",
        "kayamanan"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Tungkulin nating lahat na ___ ang kalikasan para sa susunod na henerasyon.",
      "options": [
        "sayangin",
        "pangalagaan",
        "dumihan",
        "kalimutan"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "___ ng mapagmahal na ama ang kanyang anak ng bagong bisikleta.",
      "options": [
        "Bumili",
        "Binili",
        "Ibinili",
        "Bumibili"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Buong-pusong nakilahok ang aming paaralan ___ malaking paligsahan sa pagsayaw.",
      "options": [
        "ng",
        "ang",
        "ay",
        "sa"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Lubos kong ikinalulungkot ___ pag-alis mo nang hindi man lang nagpaalam.",
      "options": [
        "ang",
        "ng",
        "sa",
        "na"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Puno ng ___ ang kanyang mga pahayag, kaya't mahirap matukoy kung ano talaga ang ibig niyang sabihin.",
      "options": [
        "kalinawan",
        "kalabuan",
        "katotohanan",
        "katiyakan"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Matapos ang mahabang pagtatalo, sa wakas ay nagkaroon ng ___ ang dalawang panig.",
      "options": [
        "kaguluhan",
        "alitan",
        "kasunduan",
        "hidwaan"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Aba, ikaw ___ ang nagwagi sa paligsahan kahapon!",
      "options": [
        "kasi",
        "muna",
        "sana",
        "pala"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Bago siya umalis patungong trabaho, ___ niya ng sapat na pagkain ang kanyang alagang aso.",
      "options": [
        "iniwan",
        "iniwanan",
        "umalis",
        "nag-iwan"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Ayaw niyang sumunod sa payo ninuman; talagang ___ ang ulo ng batang iyon.",
      "options": [
        "mabigat",
        "manipis",
        "matigas",
        "mataas"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Lagi siyang nagbibigay sa mga nangangailangan; tunay ngang ___ ang palad niya.",
      "options": [
        "Bukas",
        "Sarado",
        "Butas",
        "Basa"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Bukod-tanging mahusay ang makata sa paggamit ng ___ upang bigyang-buhay ang kanyang mga tula.",
      "options": [
        "kasangkapan",
        "kasunduan",
        "talinghaga",
        "kagamitan"
      ],
      "answer": 2
    }
  ],
  "mn": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Би одоо гэр___ байна.",
      "options": [
        "гэрт",
        "гэрээс",
        "гэрийг",
        "гэрийн"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Өглөө би ___ уудаг.",
      "options": [
        "ном",
        "цай",
        "машин",
        "хаалга"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Энэ бол багш___ ном.",
      "options": [
        "багшид",
        "багшаар",
        "багшийн",
        "багшаас"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Тэнгэр ___ өнгөтэй.",
      "options": [
        "халуун",
        "том",
        "хурдан",
        "цэнхэр"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Шөнө тэнгэрт олон ___ байдаг.",
      "options": [
        "од",
        "ширээ",
        "харандаа",
        "цонх"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Өчигдөр би шинэ гутал ___.",
      "options": [
        "авна",
        "авсан",
        "авдаг",
        "авах"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Өвлийн улиралд цас их ___.",
      "options": [
        "уудаг",
        "иддэг",
        "ордог",
        "уншдаг"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Энэ зам тэр зам___ урт.",
      "options": [
        "замтай",
        "замын",
        "замд",
        "замаас"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Хүн өлсвөл хоол ___ хэрэгтэй.",
      "options": [
        "идэх",
        "унтах",
        "уйлах",
        "наадах"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Би энэ ном___ уншиж байна.",
      "options": [
        "номоос",
        "номыг",
        "номд",
        "номтой"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Тэр өглөө эрт бос___ ажилдаа явдаг.",
      "options": [
        "босно",
        "боссон",
        "босож",
        "босъё"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Тэр маш ___ хүн, хэзээ ч худал хэлдэггүй.",
      "options": [
        "залхуу",
        "хурдан",
        "ногоон",
        "үнэнч"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Хүүхдүүд амттан___ дуртай.",
      "options": [
        "амттанд",
        "амттаныг",
        "амттанаас",
        "амттантай"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Цаг агаар хүйтэн байсан, ___ бид зугаалахаар гарсан.",
      "options": [
        "тиймээс",
        "гэхдээ",
        "учир нь",
        "эсвэл"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Маргааш ___ хүн гараа өргөнө үү.",
      "options": [
        "ирсэн",
        "ирж",
        "ирэх",
        "иржээ"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Ээж дүүгээр аяга таваг ___.",
      "options": [
        "угаасан",
        "угаана",
        "угаадаг",
        "угаалгасан"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Энэ шийдвэр маш ___ үр дагавартай байсан.",
      "options": [
        "ноцтой",
        "хөгжилтэй",
        "амттай",
        "өнгөтэй"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Хэрэв чи маргааш цаг ___ надтай уулзаарай.",
      "options": [
        "гарна",
        "гарвал",
        "гарсан",
        "гарах"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Тэр маш ___ хүн, бусдын тусламжгүйгээр бүх ажлаа өөрөө хийдэг.",
      "options": [
        "хараат",
        "залхуу",
        "бие даасан",
        "айдастай"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Энэ сүм олон зуун жилийн өмнө ___.",
      "options": [
        "барьсан",
        "барина",
        "барих",
        "баригдсан"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Өрөөний гэрэл асаалттай байв. Намайг ирэхээс өмнө энд хэн нэгэн ___.",
      "options": [
        "оржээ",
        "орно",
        "орж",
        "ороорой"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Тэр хичээлдээ ___ ханддаг, нэг ч өдөр тасалдаггүй.",
      "options": [
        "хайнга",
        "нухацтай",
        "хойрго",
        "дур зоргоор"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Энэ хүнд асуудлыг ___ бид маш их хүчин чармайлт гаргасан.",
      "options": [
        "шийдсэн тул",
        "шийдсэн ч",
        "шийдэхийн тулд",
        "шийдсэний дараа"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Сэтгүүлч асуултаараа сайдыг ___ гэж оролдсон ч тэр тайван хэвээр үлдэв.",
      "options": [
        "тайвшруулах",
        "магтах",
        "баярлуулах",
        "өдөөх"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Би гэртээ ___ аадар бороо асгарч эхлэв.",
      "options": [
        "хүрмэгц",
        "хүрсэн",
        "хүрвэл",
        "хүрнэ"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Тэр ганц охиноо ___ мэт хайрладаг.",
      "options": [
        "голын чулуу",
        "нүдний цөцгий",
        "модны навч",
        "талын салхи"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Эрдэмтэн олон жил судалгаа хийсний эцэст шинэ ___ дэвшүүлэв.",
      "options": [
        "мэдрэмж",
        "дадал",
        "онол",
        "хүсэл"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Түүний бүдүүлэг зан авирыг би үнэхээр ___.",
      "options": [
        "биширсэн",
        "хүндэлсэн",
        "магтсан",
        "жигшсэн"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Асуудлыг үндсээр нь шийдэхийн оронд тэд зөвхөн ___ арга хэмжээ авав.",
      "options": [
        "түр зуурын",
        "байнгын",
        "баялаг",
        "үндсэн"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Дорж андуурч ангийнхаа найзын дэвтрийг аваад, ___ гэртээ мартжээ.",
      "options": [
        "дэвтрийг нь",
        "дэвтрээ",
        "дэвтэр",
        "дэвтрээс"
      ],
      "answer": 1
    }
  ],
  "ka": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "ის ___ ექიმი.",
      "options": [
        "ვარ",
        "არის",
        "ხარ",
        "არიან"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "მე ქართულს ___.",
      "options": [
        "ვსწავლობ",
        "სწავლობს",
        "სწავლობ",
        "სწავლობენ"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "დილით ვსვამ ___.",
      "options": [
        "მთას",
        "თვალს",
        "ყავას",
        "ფეხს"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "ჩემი ___ მასწავლებელია.",
      "options": [
        "პური",
        "წყალი",
        "მაგიდა",
        "და"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "წიგნი ___ დევს.",
      "options": [
        "მაგიდა",
        "მაგიდის",
        "მაგიდას",
        "მაგიდაზე"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "გუშინ ___ ვაშლი შეჭამა.",
      "options": [
        "ბავშვი",
        "ბავშვმა",
        "ბავშვს",
        "ბავშვის"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "ხვალ მე კინოში ___.",
      "options": [
        "მივდივარ",
        "წავედი",
        "წავალ",
        "წახვალ"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "მე გასაღებით ___ ვაღებ.",
      "options": [
        "კარს",
        "მზეს",
        "ჰაერს",
        "წვიმას"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "ეს ჩანთა მძიმეა, ის კი ___.",
      "options": [
        "მძიმე",
        "დიდი",
        "ლამაზი",
        "მსუბუქი"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "საათი გვიჩვენებს ___.",
      "options": [
        "პურს",
        "დროს",
        "წყალს",
        "ფეხს"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "ეს ___ მანქანაა.",
      "options": [
        "ძმა",
        "ძმამ",
        "ძმის",
        "ძმას"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "ვერ წამოვედი, ___ წვიმდა.",
      "options": [
        "რადგან",
        "მაგრამ",
        "თუ",
        "ან"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "დედა ბავშვს კაბას ___.",
      "options": [
        "კერავს",
        "უკერავს",
        "ვკერავ",
        "იკერავს"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "ავტობუსმა ___ და გვიან მივედით.",
      "options": [
        "გაიყიდა",
        "გაფრინდა",
        "გაიზარდა",
        "დააგვიანა"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "მას უცხო ენების კარგი ___ აქვს.",
      "options": [
        "ცოდნა",
        "წყალი",
        "ფანჯარა",
        "მადლობა"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "ბავშვს ძალიან ___ ტკბილეული.",
      "options": [
        "მიყვარს",
        "უყვარს",
        "გიყვარს",
        "გვიყვარს"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "დედამ ბავშვს ფაფა ___.",
      "options": [
        "შეჭამა",
        "ჭამა",
        "აჭამა",
        "ისადილა"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "მისი გადაწყვეტილება ძალიან ___ აღმოჩნდა.",
      "options": [
        "სველი",
        "ხმაურიანი",
        "მწვანე",
        "გონივრული"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "მის სიტყვებში ღრმა ___ იგრძნობოდა.",
      "options": [
        "სევდა",
        "მაგიდა",
        "ფანჯარა",
        "ყავა"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "ეს ამბავი სრულიად ___ იყო.",
      "options": [
        "თბილი",
        "გამოგონილი",
        "ცივი",
        "მაღალი"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "ეტყობა, ღამით ___, რადგან გზა სველია.",
      "options": [
        "უწვიმია",
        "წვიმდა",
        "წვიმს",
        "იწვიმებს"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "მე მას კარგი საჩუქარი ___.",
      "options": [
        "ვიპოვე",
        "ვუპოვე",
        "იპოვა",
        "ვპოულობ"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "შენ რომ მთხოვე, აუცილებლად ___.",
      "options": [
        "დავეხმარე",
        "გეხმარები",
        "დაგეხმარებოდი",
        "დაგეხმარე"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "ღარიბებს ეხმარებოდა და ცნობილი იყო თავისი ___.",
      "options": [
        "სიმკაცრით",
        "სიზარმაცით",
        "სიმორცხვით",
        "გულუხვობით"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "მან პირობა ___ და ყველამ ნდობა დაკარგა.",
      "options": [
        "ააგო",
        "დალია",
        "გატეხა",
        "ჩაიცვა"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "როგორც ჩანს, სტუმრებს უკვე ___ სადილი.",
      "options": [
        "შეჭამეს",
        "შეუჭამიათ",
        "ჭამენ",
        "შეჭამდნენ"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "უცბად შენი სახელი ___.",
      "options": [
        "დამავიწყდა",
        "დავივიწყე",
        "დაგავიწყდა",
        "დამივიწყნია"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "ის არამარტო ჭკვიანი, არამედ ჭეშმარიტად ___ ადამიანია.",
      "options": [
        "ეშმაკი",
        "ცბიერი",
        "ბრძენი",
        "მზაკვარი"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "ომის შემდეგ ქვეყანა დაანგრიეს და ხალხი ___ დარჩა.",
      "options": [
        "მდიდრად",
        "მხიარულად",
        "ჯანმრთელად",
        "უსახლკაროდ"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "ხანგრძლივი ლოდინის შემდეგ მას ბოლოს მოთმინება ___.",
      "options": [
        "გაუხარდა",
        "გაუმართლა",
        "გაუტყდა",
        "გაუთენდა"
      ],
      "answer": 2
    }
  ],
  "sq": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Unë ___ nga Shqipëria.",
      "options": [
        "je",
        "është",
        "jam",
        "jeni"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Ne ___ shqip në shkollë.",
      "options": [
        "flet",
        "flasim",
        "flisni",
        "flasin"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Ku është ___? Në çantë.",
      "options": [
        "librin",
        "libër",
        "libri",
        "libra"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Për të shkruar përdorim një ___.",
      "options": [
        "laps",
        "lugë",
        "çelës",
        "këpucë"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Në mëngjes pi një filxhan ___.",
      "options": [
        "dru",
        "letër",
        "bukë",
        "kafe"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Dje unë ___ në kinema.",
      "options": [
        "shkoi",
        "shkova",
        "shkuan",
        "shkoj"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Vëllai im është më i gjatë ___ unë.",
      "options": [
        "se",
        "nga",
        "me",
        "dhe"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Kur bie shi, marr një ___ me vete.",
      "options": [
        "furçë",
        "jastëk",
        "lugë",
        "çadër"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Ky ushtrim nuk është i vështirë, përkundrazi është shumë i ___.",
      "options": [
        "shtrenjtë",
        "lehtë",
        "gjatë",
        "ri"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Për të shkuar në punë çdo mëngjes, unë marr ___.",
      "options": [
        "autobusin",
        "detin",
        "yllin",
        "borën"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Kjo është makina ___ vëllait tim.",
      "options": [
        "i",
        "e",
        "të",
        "së"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "___ thashë nënës që do të vij vonë.",
      "options": [
        "E",
        "Të",
        "I",
        "Më"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Nuk erdha në festë ___ isha i sëmurë.",
      "options": [
        "megjithëse",
        "nëse",
        "derisa",
        "sepse"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Më fal, bëra një ___.",
      "options": [
        "gabim",
        "pushim",
        "dush",
        "gjumë"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Ajo ka shumë ___ në punë; gjithmonë i arrin qëllimet e saj.",
      "options": [
        "dështim",
        "pengesë",
        "sukses",
        "vonesë"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Dua që ti ___ më herët nesër.",
      "options": [
        "të vish",
        "të vij",
        "vjen",
        "të vini"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Suksesi i tij varet ___ shumë faktorë.",
      "options": [
        "nga",
        "me",
        "për",
        "në"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Mjeku i dha pacientit një ___ të fortë kundër dhimbjeve.",
      "options": [
        "sëmundje",
        "ilaç",
        "ëndërr",
        "lëndim"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Pavarësisht vështirësive, ai nuk e humbi ___.",
      "options": [
        "urinë",
        "etjen",
        "gjumin",
        "shpresën"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Filmi ishte jashtëzakonisht ___; të gjithë qanë në fund.",
      "options": [
        "zbavitës",
        "mërzitës",
        "prekës",
        "argëtues"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Kur arrita në stacion, treni tashmë ___ prej gjysmë ore.",
      "options": [
        "kishte ikur",
        "iku",
        "ikte",
        "ka ikur"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Dera ___ hap papritur nga era e fortë.",
      "options": [
        "e",
        "i",
        "të",
        "u"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Ajo është një nga shkrimtaret më ___ njohura të vendit.",
      "options": [
        "i",
        "e",
        "së",
        "të"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Pas skandalit, reputacioni i tij u ___ përfundimisht.",
      "options": [
        "forcua",
        "njollos",
        "rrit",
        "ndërtua"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Negociatat dështuan sepse asnjëra palë nuk donte të bënte ___.",
      "options": [
        "pushim",
        "gabim",
        "kompromis",
        "shaka"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "___ të mbërritur në shtëpi, ai ra menjëherë në gjumë.",
      "options": [
        "Pa",
        "Me",
        "Për",
        "Nga"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Librin që kërkove, ___ solla ty në mëngjes.",
      "options": [
        "ia",
        "ma",
        "ta",
        "e"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Pas humbjes së rëndë, ai u ndje i ___ dhe pa shpresë.",
      "options": [
        "dëshpëruar",
        "kënaqur",
        "gëzuar",
        "ngazëllyer"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Talenti i saj i jashtëzakonshëm ___ menjëherë në sy.",
      "options": [
        "hyri",
        "doli",
        "ra",
        "iku"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Politikani u përpoq të ___ përgjegjësinë, duke fajësuar të tjerët.",
      "options": [
        "pranonte",
        "mbante",
        "merrte",
        "shmangte"
      ],
      "answer": 3
    }
  ],
  "sw": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Asha ___ Kiswahili shuleni kila siku.",
      "options": [
        "wanasoma",
        "ninasoma",
        "anasoma",
        "unasoma"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Kila asubuhi ninakunywa ___.",
      "options": [
        "kiti",
        "chai",
        "mlango",
        "barabara"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Kiti hiki ni ___ sana.",
      "options": [
        "mkubwa",
        "kubwa",
        "wakubwa",
        "kikubwa"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Mama na baba ni ___ wangu.",
      "options": [
        "wazazi",
        "marafiki",
        "majirani",
        "wanafunzi"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Gari ___ ni jeupe.",
      "options": [
        "huyu",
        "hili",
        "hii",
        "hiki"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Jana mimi ___ sokoni kununua matunda.",
      "options": [
        "ninaenda",
        "nitaenda",
        "alienda",
        "nilienda"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Nina njaa sana, kwa hiyo nataka ___.",
      "options": [
        "usingizi",
        "maji",
        "chakula",
        "kazi"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Nyumba ___ ni kubwa na nzuri.",
      "options": [
        "wangu",
        "yangu",
        "changu",
        "langu"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Kinyume cha neno 'kubwa' ni '___'.",
      "options": [
        "dogo",
        "refu",
        "zito",
        "pana"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Ninavaa ___ miguuni ninapotembea nje.",
      "options": [
        "kofia",
        "miwani",
        "viatu",
        "saa"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Mtoto alilia sana, kisha mama ___ haraka.",
      "options": [
        "akamnyamazisha",
        "akawanyamazisha",
        "akaninyamazisha",
        "akakunyamazisha"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Sikufika kazini kwa wakati ___ gari langu liliharibika njiani.",
      "options": [
        "ingawa",
        "kwa sababu",
        "ili",
        "kabla"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Mtu ___ alikuja jana ni mwalimu wangu wa zamani.",
      "options": [
        "ambaye",
        "ambao",
        "ambacho",
        "ambayo"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Tafadhali ___ mlango, kuna upepo baridi unaingia.",
      "options": [
        "fungua",
        "vunja",
        "funga",
        "piga"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Nilipoteza funguo zangu jana, lakini leo ___ tena.",
      "options": [
        "nimeipata",
        "nimevipata",
        "nimeupata",
        "nimezipata"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Mwanasayansi alifanya ___ kadhaa maabarani ili kuthibitisha nadharia yake.",
      "options": [
        "majaribio",
        "maelezo",
        "mazungumzo",
        "matangazo"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Serikali imechukua ___ kali za kupambana na rushwa.",
      "options": [
        "habari",
        "hutuba",
        "heshima",
        "hatua"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Kama ningekuwa na pesa za kutosha, ___ gari jipya.",
      "options": [
        "nitanunua",
        "nilinunua",
        "ningenunua",
        "ninanunua"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Kila mzazi anapaswa ___ watoto wake kwa upendo na subira.",
      "options": [
        "kulewa",
        "kulea",
        "kulia",
        "kuua"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Nyumba ile kubwa ___ na fundi maarufu mwaka jana.",
      "options": [
        "alijenga",
        "ilijenga",
        "zilijengwa",
        "ilijengwa"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Joto kali la jua ___ barafu yote iliyokuwa mezani ndani ya dakika chache.",
      "options": [
        "liliyeyuka",
        "liliyeyushwa",
        "liliyeyusha",
        "iliyeyusha"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Baada ya kufiwa na mama yake mpendwa, alibaki katika hali ya ___ kwa miezi mingi.",
      "options": [
        "majonzi",
        "furaha",
        "matumaini",
        "kicheko"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Tafadhali ___ mlango, mikono yangu imeshika mizigo mizito.",
      "options": [
        "nifunge",
        "nifungulie",
        "nifungue",
        "unifungulia"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Licha ya kushinda tuzo nyingi, bado ni mtu ___; hajivuni hata kidogo.",
      "options": [
        "mwenye kiburi",
        "mvivu",
        "mkarimu",
        "mnyenyekevu"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Nimemngoja rafiki yangu kwa saa mbili, lakini bado ___ kufika.",
      "options": [
        "hajafika",
        "hakufika",
        "hatafika",
        "hafiki"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Methali isemayo 'Haba na haba ___ kibaba' hutufundisha kuhusu uvumilivu.",
      "options": [
        "hujaza",
        "humwaga",
        "huvunja",
        "hukausha"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Kama ungalisoma kwa bidii mwaka jana, ___ mtihani ule mgumu.",
      "options": [
        "ungefaulu",
        "ungalifaulu",
        "utafaulu",
        "ulifaulu"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Katika hotuba rasmi, ni vyema kutumia neno '___' badala ya 'kufa' kwa heshima.",
      "options": [
        "kuangamia",
        "kuchinjwa",
        "kufariki",
        "kutoweka"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Mgeni ___ chakula kitamu na mwenyeji wake mkarimu.",
      "options": [
        "alipika",
        "alipikwa",
        "walipika",
        "alipikiwa"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Waziri huyo alishutumiwa kwa ___ baada ya kuchukua fedha za umma kwa manufaa yake binafsi.",
      "options": [
        "uaminifu",
        "ukarimu",
        "ubadhirifu",
        "bidii"
      ],
      "answer": 2
    }
  ],
  "zu": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Abantwana ___ esikoleni njalo.",
      "options": [
        "uya",
        "baya",
        "liya",
        "siya"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Mina ___ incwadi.",
      "options": [
        "ngifunda",
        "ufunda",
        "bafunda",
        "sifunda"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Inja ___ endlini.",
      "options": [
        "zilala",
        "ilala",
        "balala",
        "ulala"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "___, unjani?",
      "options": [
        "Imoto",
        "Ngiyabonga",
        "Sawubona",
        "Ukudla"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Ngiphuza ___ uma ngomile.",
      "options": [
        "isinkwa",
        "incwadi",
        "ihhashi",
        "amanzi"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Kusasa ___ edolobheni.",
      "options": [
        "ngaya",
        "uzoya",
        "ngizoya",
        "baya"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Igama ___ nguThemba.",
      "options": [
        "yami",
        "lami",
        "sami",
        "wami"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "___ ngiya emsebenzini ekuseni.",
      "options": [
        "Namhlanje",
        "Ubusuku",
        "Indlu",
        "Umfula"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Ubaba ___ imoto yakhe.",
      "options": [
        "udla",
        "ufunda",
        "ulala",
        "ushayela"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Ngigqoka ___ ezinyaweni.",
      "options": [
        "isigqoko",
        "amehlo",
        "izicathulo",
        "izandla"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Umfana uyagula, ngakho umama ___.",
      "options": [
        "uyamsiza",
        "uyabasiza",
        "uyazisiza",
        "uyalisiza"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Umuntu ___ esikoleni ulapha.",
      "options": [
        "efundisa",
        "ofundisa",
        "afundisa",
        "sifundisa"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "___ lina kusasa, ngizohlala ekhaya.",
      "options": [
        "Ngoba",
        "Kodwa",
        "Futhi",
        "Uma"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Ngiyaxolisa, ___ ukuvala umnyango.",
      "options": [
        "ngijabulile",
        "ngiqedile",
        "ngikhohliwe",
        "ngikhumbulile"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Umbuzo wakho udinga ___ elungile.",
      "options": [
        "impendulo",
        "imoto",
        "induku",
        "intaba"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Le ncwadi ___ ngumfundisi.",
      "options": [
        "wabhalwa",
        "labhalwa",
        "yabhalwa",
        "zabhalwa"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Umama ___ abantwana ukudla.",
      "options": [
        "upheka",
        "uphekela",
        "uphekwa",
        "uphekiwe"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Ngifunda kanzima ukuze ___ esivivinyweni.",
      "options": [
        "ngiphumelela",
        "ngizophumelela",
        "ngiphumelelile",
        "ngiphumelele"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Ukusebenza kanzima kuletha ___ omuhle.",
      "options": [
        "umfula",
        "umsindo",
        "umphumela",
        "umkhumbi"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Uthisha ___ abafundi ukuba bafunde kanzima.",
      "options": [
        "udlala",
        "ushayela",
        "ugeza",
        "ukhuthaza"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Sekuhwalele, kodwa abantwana ___ phandle.",
      "options": [
        "badlalile",
        "basadlala",
        "bazodlala",
        "abasadlali"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Ngisamlinda ubaba, kodwa ___ ekhaya.",
      "options": [
        "akabuyanga",
        "ubuyile",
        "uyabuya",
        "akakabuyi"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Enkulumweni yakhe, umongameli ___ ukubaluleka kwemfundo.",
      "options": [
        "ugcizelele",
        "udlale",
        "ugijime",
        "ulale"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Ibhodi ___ isinqumo sokuvala inkampani.",
      "options": [
        "ligijime",
        "lilale",
        "lidle",
        "lithathe"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Naphezu kwemizamo yakhe, ___ ukuphumelela.",
      "options": [
        "uphumulile",
        "ujabulile",
        "wehlulekile",
        "uculile"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Indlela ibuzwa ___.",
      "options": [
        "kubantwana",
        "kwabaphambili",
        "ezinyangeni",
        "emakhaya"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Bonke abafundi kufanele ___ iqhaza emdlalweni.",
      "options": [
        "babambe",
        "badle",
        "bacule",
        "bagijime"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Ufundisa ___, abafundi bayamthanda.",
      "options": [
        "ngosizi",
        "ngentukuthelo",
        "ngokwesaba",
        "ngentshisekelo"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Ubuhle ___ lizwe abuchazeki.",
      "options": [
        "yaleli",
        "saleli",
        "baleli",
        "laleli"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Umuntu ___ akazi lutho.",
      "options": [
        "ongafundi",
        "ofundayo",
        "angafundi",
        "ongafundanga"
      ],
      "answer": 0
    }
  ],
  "be": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Кожны дзень я ___ на працу.",
      "options": [
        "хаджу",
        "ходзіш",
        "ходзіць",
        "ходзяць"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Мая ___ сястра вучыцца ў школе.",
      "options": [
        "малодшы",
        "малодшая",
        "малодшае",
        "малодшыя"
      ],
      "answer": 1
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Цяпер я чытаю адну цікавую ___ .",
      "options": [
        "кніга",
        "кнігі",
        "кнігу",
        "кнізе"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Птушкі ___ высока ў небе.",
      "options": [
        "плаваюць",
        "поўзаюць",
        "растуць",
        "лятаюць"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Калі на вуліцы холадна, я апранаю ___ .",
      "options": [
        "марожанае",
        "куртку",
        "газету",
        "парасон"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Учора ён ___ цікавы артыкул у газеце.",
      "options": [
        "прачытаў",
        "прачытала",
        "прачыталі",
        "прачытае"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "На жаль, у мяне зусім няма ___ .",
      "options": [
        "час",
        "часе",
        "часам",
        "часу"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Улетку звычайна горача, а ўзімку, наадварот, ___ .",
      "options": [
        "весела",
        "холадна",
        "цёмна",
        "смачна"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Каб купіць свежы хлеб, трэба схадзіць у ___ .",
      "options": [
        "школу",
        "бібліятэку",
        "краму",
        "бальніцу"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Кожны вечар мы ___ тэлевізар разам.",
      "options": [
        "слухаем",
        "чытаем",
        "пішам",
        "глядзім"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Пасля ўніверсітэта мая сястра пачала працаваць ___ .",
      "options": [
        "настаўніца",
        "настаўніцу",
        "настаўніцы",
        "настаўніцай"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Звычайна я ___ газету за сняданкам.",
      "options": [
        "чытаю",
        "прачытаю",
        "прачытаў",
        "прачытаўшы"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "На дзень нараджэння я падарыў ___ прыгожыя кветкі.",
      "options": [
        "сяброўка",
        "сяброўку",
        "сяброўцы",
        "сяброўкай"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Мы не пайшлі на шпацыр, ___ на вуліцы ішоў моцны дождж.",
      "options": [
        "таму што",
        "каб",
        "хоць",
        "нягледзячы"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Камісія павінна ___ важнае рашэнне да канца тыдня.",
      "options": [
        "зрабіць",
        "прыняць",
        "узяць",
        "даць"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Дзеці весела смяяліся ___ , які паказваў розныя фокусы.",
      "options": [
        "над клоўнам",
        "на клоўна",
        "з клоўна",
        "клоўну"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Калі б у мяне быў вольны час, я абавязкова ___ табе.",
      "options": [
        "дапамагу",
        "дапамагаю",
        "дапамагаў",
        "дапамог бы"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "З усіх сіл ён ___ сваё абурэнне, каб не пакрыўдзіць сяброў.",
      "options": [
        "стрымаў",
        "павялічыў",
        "запісаў",
        "намаляваў"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Менавіта яго ___ да дробязяў зрабіла вынік бездакорным.",
      "options": [
        "надзея",
        "увага",
        "згода",
        "зайздрасць"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Гэта быў надзвычай ___ довад, які прымусіў усіх змяніць пазіцыю.",
      "options": [
        "сумніўны",
        "нудны",
        "памылковы",
        "пераканаўчы"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "На паліцы стаялі тры старыя ___ .",
      "options": [
        "кніга",
        "кнігі",
        "кніг",
        "кнігах"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "___ усе дакументы, кіраўнік спакойна пайшоў дадому.",
      "options": [
        "Падпісваючы",
        "Падпісаўшы",
        "Падпісаць",
        "Падпісаў"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "___ больш ён даведваўся пра тэму, тым цікавей яму было.",
      "options": [
        "Чым",
        "Як",
        "Што",
        "Колькі"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Гэтая падзея ___ вырашальную ролю ў гісторыі краіны.",
      "options": [
        "згуляла",
        "зрабіла",
        "адыграла",
        "правяла"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Яго довады былі настолькі ___ , што ніхто не адважыўся пярэчыць.",
      "options": [
        "сумніўныя",
        "павярхоўныя",
        "супярэчлівыя",
        "неабвержныя"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Вольных месцаў засталося як ___ наплакаў.",
      "options": [
        "кот",
        "сабака",
        "певень",
        "заяц"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Будзь асцярожны з ім: ён майстар ___ людзей за нос.",
      "options": [
        "цягаць",
        "трымаць",
        "насіць",
        "вадзіць"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Яго ___ заўвагі балюча зачапілі ўсіх прысутных.",
      "options": [
        "пахвальныя",
        "захопленыя",
        "з'едлівыя",
        "удзячныя"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "З моманту нашай апошняй сустрэчы прайшло ўжо паўтара ___ .",
      "options": [
        "год",
        "года",
        "гады",
        "гадоў"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "За ўвесь дзень ён не прамовіў ні адзінага ___ .",
      "options": [
        "слоў",
        "словы",
        "слова",
        "словам"
      ],
      "answer": 2
    }
  ],
  "ky": [
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Балдар ___ окушат.",
      "options": [
        "мектепке",
        "мектептен",
        "мектепте",
        "мектепти"
      ],
      "answer": 2
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Бул менин ___.",
      "options": [
        "үйүм",
        "үй",
        "үйү",
        "үйүң"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "grammar",
      "text": "Мен күн сайын мектепке ___.",
      "options": [
        "барат",
        "барасың",
        "барабыз",
        "барам"
      ],
      "answer": 3
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Эртең менен мен ___ ичем.",
      "options": [
        "суу",
        "нан",
        "эт",
        "эшик"
      ],
      "answer": 0
    },
    {
      "level": "A1",
      "skill": "vocab",
      "text": "Бул алма чоң эмес, ___.",
      "options": [
        "ысык",
        "чоң",
        "кичине",
        "кызыл"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Кечээ биз кинотеатрга ___.",
      "options": [
        "барабыз",
        "бардык",
        "барасыңар",
        "барышты"
      ],
      "answer": 1
    },
    {
      "level": "A2",
      "skill": "grammar",
      "text": "Бул китеп тигил ___ кызыктуу.",
      "options": [
        "китептен",
        "китепке",
        "китепте",
        "китептин"
      ],
      "answer": 0
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Бүгүн шейшемби, демек ___ дүйшөмбү эле.",
      "options": [
        "эртең",
        "азыр",
        "быйыл",
        "кечээ"
      ],
      "answer": 3
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Бул дүкөндө баасы ___, мен сатып ала албайм.",
      "options": [
        "арзан",
        "жеңил",
        "кымбат",
        "бат"
      ],
      "answer": 2
    },
    {
      "level": "A2",
      "skill": "vocab",
      "text": "Кыш мезгилинде аба ырайы абдан ___.",
      "options": [
        "суук",
        "ысык",
        "бийик",
        "жакын"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Эртең менен туруп, бетин ___, мектепке жөнөдү.",
      "options": [
        "жууйт",
        "жууп",
        "жууган",
        "жууса"
      ],
      "answer": 1
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Биз ___ кийин үйгө кайттык.",
      "options": [
        "сабакта",
        "сабакка",
        "сабактан",
        "сабактын"
      ],
      "answer": 2
    },
    {
      "level": "B1",
      "skill": "grammar",
      "text": "Эгер эртең аба ырайы жакшы ___, сейилге чыгабыз.",
      "options": [
        "болсо",
        "болот",
        "болду",
        "болгон"
      ],
      "answer": 0
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Ал бул маселени чечүү үчүн жакшы ___ берди.",
      "options": [
        "тамак",
        "терезе",
        "сүрөт",
        "кеңеш"
      ],
      "answer": 3
    },
    {
      "level": "B1",
      "skill": "vocab",
      "text": "Мен бул ишти бүтүрүүгө ___ кылам.",
      "options": [
        "убакыт",
        "аракет",
        "сурак",
        "кабар"
      ],
      "answer": 1
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Мугалим окуучуларга жаңы ырды ___.",
      "options": [
        "үйрөндү",
        "үйрөнөт",
        "үйрөнгөн",
        "үйрөттү"
      ],
      "answer": 3
    },
    {
      "level": "B2",
      "skill": "grammar",
      "text": "Бул көпүрө өткөн жылы ___.",
      "options": [
        "курду",
        "курат",
        "курулду",
        "куруптур"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Дарыгер бейтаптын абалы ___ экенин айтты.",
      "options": [
        "олуттуу",
        "таттуу",
        "жашыл",
        "бийик"
      ],
      "answer": 0
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Көп жылдык ___ анын ишинде жардам берди.",
      "options": [
        "терезе",
        "коңшу",
        "тажрыйба",
        "базар"
      ],
      "answer": 2
    },
    {
      "level": "B2",
      "skill": "vocab",
      "text": "Ал кыйынчылыктарга карабастан, максатына ___.",
      "options": [
        "кетти",
        "жетти",
        "өттү",
        "айтты"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Көрсө, коноктор аллакачан кетип ___.",
      "options": [
        "калды",
        "калат",
        "калмак",
        "калыптыр"
      ],
      "answer": 3
    },
    {
      "level": "C1",
      "skill": "grammar",
      "text": "Сабагыңды ___, сыртка чыкпайсың.",
      "options": [
        "бүтүргөндө",
        "бүтүрмөйүнчө",
        "бүтүрсө",
        "бүтүрөт"
      ],
      "answer": 1
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Ал абдан ___ адам, айтканынан кайтпайт.",
      "options": [
        "кайдыгер",
        "момун",
        "өжөр",
        "сараң"
      ],
      "answer": 2
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Ал ар бир ишти ___ түрдө аткарат, эч качан шашпайт.",
      "options": [
        "кылдат",
        "шамдагай",
        "кайдыгер",
        "орой"
      ],
      "answer": 0
    },
    {
      "level": "C1",
      "skill": "vocab",
      "text": "Бул чечим коомчулукта кызуу ___ жаратты.",
      "options": [
        "тынчтык",
        "уйку",
        "соода",
        "талкуу"
      ],
      "answer": 3
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Жети өлчөп, бир ___.",
      "options": [
        "кес",
        "ал",
        "сал",
        "бер"
      ],
      "answer": 0
    },
    {
      "level": "C2",
      "skill": "vocab",
      "text": "Көз коркок, ___ баатыр.",
      "options": [
        "баш",
        "кол",
        "тил",
        "бут"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Мен аны ___ сайын, мүнөзүн жакшыраак түшүндүм.",
      "options": [
        "көрүп",
        "көргөн",
        "көрсө",
        "көрө"
      ],
      "answer": 1
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Терезе ачык турат, балким бирөө бөлмөгө кирген ___.",
      "options": [
        "эле",
        "экен",
        "чыгар",
        "болот"
      ],
      "answer": 2
    },
    {
      "level": "C2",
      "skill": "grammar",
      "text": "Мынчалык суук күндө сыртка чыккым ___.",
      "options": [
        "келбейм",
        "келишпейт",
        "келбейли",
        "келбейт"
      ],
      "answer": 3
    }
  ]
};
