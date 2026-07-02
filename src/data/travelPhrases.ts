// Essential travel phrases per language, grouped by category, with a rough pronunciation hint.
// Source: workflow generation + independent verification pass. Real data only.

export interface TravelPhrase {
  category: string;
  phrase: string;
  english: string;
  pron: string;
}

export const travelPhrases: Record<string, TravelPhrase[]> = {
  "af": [
    {
      "category": "Greetings",
      "phrase": "Hallo",
      "english": "Hello",
      "pron": "HAH-loh"
    },
    {
      "category": "Greetings",
      "phrase": "Goeiemôre",
      "english": "Good morning",
      "pron": "KHOO-yuh-moh-ruh"
    },
    {
      "category": "Greetings",
      "phrase": "Goeienaand",
      "english": "Good evening",
      "pron": "KHOO-yuh-nahnt"
    },
    {
      "category": "Greetings",
      "phrase": "Totsiens",
      "english": "Goodbye",
      "pron": "tot-SEENS"
    },
    {
      "category": "Greetings",
      "phrase": "Hoe gaan dit?",
      "english": "How are you?",
      "pron": "hoo KHAHN dit"
    },
    {
      "category": "Basics",
      "phrase": "Ja",
      "english": "Yes",
      "pron": "YAH"
    },
    {
      "category": "Basics",
      "phrase": "Nee",
      "english": "No",
      "pron": "NEE-uh"
    },
    {
      "category": "Basics",
      "phrase": "Asseblief",
      "english": "Please",
      "pron": "ah-suh-BLEEF"
    },
    {
      "category": "Basics",
      "phrase": "Dankie",
      "english": "Thank you",
      "pron": "DAHN-kee"
    },
    {
      "category": "Basics",
      "phrase": "Ek verstaan nie",
      "english": "I don't understand",
      "pron": "ek fer-STAHN nee"
    },
    {
      "category": "Getting around",
      "phrase": "Waar is die toilet?",
      "english": "Where is the toilet?",
      "pron": "vahr is dee toy-LET"
    },
    {
      "category": "Getting around",
      "phrase": "Hoe ver is dit?",
      "english": "How far is it?",
      "pron": "hoo FER is dit"
    },
    {
      "category": "Getting around",
      "phrase": "Links",
      "english": "Left",
      "pron": "LINKS"
    },
    {
      "category": "Getting around",
      "phrase": "Regs",
      "english": "Right",
      "pron": "REKHS"
    },
    {
      "category": "Getting around",
      "phrase": "Ek is verlore",
      "english": "I am lost",
      "pron": "ek is fer-LOH-ruh"
    },
    {
      "category": "Eating out",
      "phrase": "Die spyskaart, asseblief",
      "english": "The menu, please",
      "pron": "dee SPAYS-kahrt, ah-suh-BLEEF"
    },
    {
      "category": "Eating out",
      "phrase": "Ek wil graag bestel",
      "english": "I would like to order",
      "pron": "ek vil KHRAHKH buh-STEL"
    },
    {
      "category": "Eating out",
      "phrase": "Die rekening, asseblief",
      "english": "The bill, please",
      "pron": "dee REE-kuh-ning, ah-suh-BLEEF"
    },
    {
      "category": "Eating out",
      "phrase": "Dit is heerlik",
      "english": "It's delicious",
      "pron": "dit is HEER-lik"
    },
    {
      "category": "Eating out",
      "phrase": "Ek is honger",
      "english": "I am hungry",
      "pron": "ek is HONG-uhr"
    },
    {
      "category": "Shopping",
      "phrase": "Hoeveel kos dit?",
      "english": "How much does it cost?",
      "pron": "hoo-FEE-uhl kos dit"
    },
    {
      "category": "Shopping",
      "phrase": "Dit is te duur",
      "english": "It's too expensive",
      "pron": "dit is tuh DEWR"
    },
    {
      "category": "Shopping",
      "phrase": "Kan ek dit aanpas?",
      "english": "Can I try it on?",
      "pron": "kahn ek dit AHN-pas"
    },
    {
      "category": "Shopping",
      "phrase": "Aanvaar u kredietkaarte?",
      "english": "Do you accept credit cards?",
      "pron": "ahn-FAHR ew kruh-DEET-kahr-tuh"
    },
    {
      "category": "Shopping",
      "phrase": "Ek neem dit",
      "english": "I'll take it",
      "pron": "ek NEE-uhm dit"
    },
    {
      "category": "Emergencies",
      "phrase": "Help!",
      "english": "Help!",
      "pron": "HELP"
    },
    {
      "category": "Emergencies",
      "phrase": "Bel 'n dokter!",
      "english": "Call a doctor!",
      "pron": "BEL uh DOK-tuhr"
    },
    {
      "category": "Emergencies",
      "phrase": "Ek is siek",
      "english": "I am sick",
      "pron": "ek is SEEK"
    },
    {
      "category": "Emergencies",
      "phrase": "Waar is die hospitaal?",
      "english": "Where is the hospital?",
      "pron": "vahr is dee hos-pee-TAHL"
    },
    {
      "category": "Emergencies",
      "phrase": "Bel die polisie!",
      "english": "Call the police!",
      "pron": "BEL dee poh-LEE-see"
    }
  ],
  "az": [
    {
      "category": "Greetings",
      "phrase": "Salam",
      "english": "Hello",
      "pron": "sa-LAHM"
    },
    {
      "category": "Greetings",
      "phrase": "Sabahınız xeyir",
      "english": "Good morning",
      "pron": "sa-ba-huh-NUHZ khey-EER"
    },
    {
      "category": "Greetings",
      "phrase": "Axşamınız xeyir",
      "english": "Good evening",
      "pron": "akh-sha-muh-NUHZ khey-EER"
    },
    {
      "category": "Greetings",
      "phrase": "Necəsiniz?",
      "english": "How are you?",
      "pron": "neh-jeh-see-NEEZ"
    },
    {
      "category": "Greetings",
      "phrase": "Sağ olun",
      "english": "Goodbye",
      "pron": "sah oh-LOON"
    },
    {
      "category": "Basics",
      "phrase": "Zəhmət olmasa",
      "english": "Please",
      "pron": "zeh-MET OL-ma-sa"
    },
    {
      "category": "Basics",
      "phrase": "Təşəkkür edirəm",
      "english": "Thank you",
      "pron": "teh-shek-KEWR eh-dee-REM"
    },
    {
      "category": "Basics",
      "phrase": "Bəli / Xeyr",
      "english": "Yes / No",
      "pron": "beh-LEE / kheyr"
    },
    {
      "category": "Basics",
      "phrase": "Bağışlayın",
      "english": "Excuse me",
      "pron": "bah-uhsh-lah-YUHN"
    },
    {
      "category": "Basics",
      "phrase": "Siz İngiliscə danışırsınızmı?",
      "english": "Do you speak English?",
      "pron": "seez een-gee-lees-JEH dah-nuh-shuhr-suh-NUHZ-muh"
    },
    {
      "category": "Getting around",
      "phrase": "... haradadır?",
      "english": "Where is...?",
      "pron": "ha-ra-da-DUHR"
    },
    {
      "category": "Getting around",
      "phrase": "Tualet haradadır?",
      "english": "Where is the toilet?",
      "pron": "too-ah-LET ha-ra-da-DUHR"
    },
    {
      "category": "Getting around",
      "phrase": "Bilet neçəyədir?",
      "english": "How much is the ticket?",
      "pron": "bee-LET neh-cheh-yeh-DEER"
    },
    {
      "category": "Getting around",
      "phrase": "Mən ... getmək istəyirəm",
      "english": "I want to go to...",
      "pron": "mehn get-MEHK ees-teh-yee-REHM"
    },
    {
      "category": "Getting around",
      "phrase": "Burada dayanın, zəhmət olmasa",
      "english": "Stop here, please",
      "pron": "boo-rah-DAH dah-yah-NUHN zeh-MET OL-ma-sa"
    },
    {
      "category": "Eating out",
      "phrase": "İki nəfərlik masa, zəhmət olmasa",
      "english": "A table for two, please",
      "pron": "ee-KEE neh-fehr-LEEK mah-SAH zeh-MET OL-ma-sa"
    },
    {
      "category": "Eating out",
      "phrase": "Menyu, zəhmət olmasa",
      "english": "The menu, please",
      "pron": "men-YOO zeh-MET OL-ma-sa"
    },
    {
      "category": "Eating out",
      "phrase": "Hesab, zəhmət olmasa",
      "english": "The bill, please",
      "pron": "heh-SAHB zeh-MET OL-ma-sa"
    },
    {
      "category": "Eating out",
      "phrase": "Su",
      "english": "Water",
      "pron": "soo"
    },
    {
      "category": "Eating out",
      "phrase": "Sizin sağlığınıza!",
      "english": "Cheers!",
      "pron": "see-ZEEN sah-luh-nuh-ZAH"
    },
    {
      "category": "Shopping",
      "phrase": "Bu nə qədərdir?",
      "english": "How much is it?",
      "pron": "boo neh geh-dehr-DEER"
    },
    {
      "category": "Shopping",
      "phrase": "Çox bahalıdır",
      "english": "It's too expensive",
      "pron": "chokh bah-hah-luh-DUHR"
    },
    {
      "category": "Shopping",
      "phrase": "Kredit kartı qəbul edirsinizmi?",
      "english": "Do you accept cards?",
      "pron": "kreh-DEET kahr-TUH geh-BOOL eh-deer-see-NEEZ-mee"
    },
    {
      "category": "Shopping",
      "phrase": "Sadəcə baxıram",
      "english": "I'm just looking",
      "pron": "sah-deh-JEH bah-khuh-RAHM"
    },
    {
      "category": "Shopping",
      "phrase": "Mən bunu alıram",
      "english": "I'll take this",
      "pron": "mehn boo-noo ah-luh-RAHM"
    },
    {
      "category": "Emergencies",
      "phrase": "Kömək edin!",
      "english": "Help!",
      "pron": "kur-MEK eh-DEEN"
    },
    {
      "category": "Emergencies",
      "phrase": "Polis çağırın!",
      "english": "Call the police",
      "pron": "poh-LEES chah-uh-RUHN"
    },
    {
      "category": "Emergencies",
      "phrase": "Mənə həkim lazımdır",
      "english": "I need a doctor",
      "pron": "meh-NEH heh-KEEM lah-zuhm-DUHR"
    },
    {
      "category": "Emergencies",
      "phrase": "Mən azmışam",
      "english": "I'm lost",
      "pron": "mehn ahz-muh-SHAHM"
    },
    {
      "category": "Emergencies",
      "phrase": "Təcili yardım çağırın",
      "english": "Call an ambulance",
      "pron": "teh-jee-LEE yahr-DUHM chah-uh-RUHN"
    }
  ],
  "be": [
    {
      "category": "Greetings",
      "phrase": "Прывітанне",
      "english": "Hello",
      "pron": "pry-vee-TAHN-nye"
    },
    {
      "category": "Greetings",
      "phrase": "Добры дзень",
      "english": "Good day",
      "pron": "DOH-bry dzyen'"
    },
    {
      "category": "Greetings",
      "phrase": "Добрай раніцы",
      "english": "Good morning",
      "pron": "DOH-brai RAH-nee-tsy"
    },
    {
      "category": "Greetings",
      "phrase": "Добры вечар",
      "english": "Good evening",
      "pron": "DOH-bry VYEH-char"
    },
    {
      "category": "Greetings",
      "phrase": "Да пабачэння",
      "english": "Goodbye",
      "pron": "dah pah-bah-CHEN-nya"
    },
    {
      "category": "Basics",
      "phrase": "Так",
      "english": "Yes",
      "pron": "tahk"
    },
    {
      "category": "Basics",
      "phrase": "Не",
      "english": "No",
      "pron": "nyeh"
    },
    {
      "category": "Basics",
      "phrase": "Калі ласка",
      "english": "Please",
      "pron": "kah-LEE LAHS-kah"
    },
    {
      "category": "Basics",
      "phrase": "Дзякуй",
      "english": "Thank you",
      "pron": "DZYAH-kooy"
    },
    {
      "category": "Basics",
      "phrase": "Прабачце",
      "english": "Excuse me",
      "pron": "prah-BAHCH-tsye"
    },
    {
      "category": "Getting around",
      "phrase": "Дзе туалет?",
      "english": "Where is the toilet?",
      "pron": "dzyeh too-ah-LYET"
    },
    {
      "category": "Getting around",
      "phrase": "Павярнуць налева",
      "english": "Turn left",
      "pron": "pah-vyahr-NOOTS' nah-LYEH-vah"
    },
    {
      "category": "Getting around",
      "phrase": "Павярнуць направа",
      "english": "Turn right",
      "pron": "pah-vyahr-NOOTS' nah-PRAH-vah"
    },
    {
      "category": "Getting around",
      "phrase": "Аэрапорт",
      "english": "Airport",
      "pron": "ah-eh-rah-PORT"
    },
    {
      "category": "Getting around",
      "phrase": "Білет",
      "english": "Ticket",
      "pron": "bee-LYET"
    },
    {
      "category": "Eating out",
      "phrase": "Стол для двух чалавек, калі ласка",
      "english": "A table for two, please",
      "pron": "stol dlya dvookh chah-lah-VYEK, kah-LEE LAHS-kah"
    },
    {
      "category": "Eating out",
      "phrase": "Меню, калі ласка",
      "english": "Menu, please",
      "pron": "meh-NYOO, kah-LEE LAHS-kah"
    },
    {
      "category": "Eating out",
      "phrase": "Было вельмі смачна",
      "english": "It was delicious",
      "pron": "by-LOH VYEL'-mee SMAHCH-nah"
    },
    {
      "category": "Eating out",
      "phrase": "Вада",
      "english": "Water",
      "pron": "vah-DAH"
    },
    {
      "category": "Shopping",
      "phrase": "Колькі гэта каштуе?",
      "english": "How much does this cost?",
      "pron": "KOHL'-kee HEH-tah kahsh-TOO-ye"
    },
    {
      "category": "Shopping",
      "phrase": "Гэта занадта дорага",
      "english": "That's too expensive",
      "pron": "HEH-tah zah-NAHD-tah DOH-rah-hah"
    },
    {
      "category": "Shopping",
      "phrase": "Танны",
      "english": "Cheap",
      "pron": "TAHN-ny"
    },
    {
      "category": "Shopping",
      "phrase": "Вы прымаеце крэдытныя карты?",
      "english": "Do you accept credit cards?",
      "pron": "vy pry-MAH-ye-tsye kreh-DYT-ny-yah KAR-ty"
    },
    {
      "category": "Shopping",
      "phrase": "Я хачу купіць гэта",
      "english": "I want to buy this",
      "pron": "yah khah-CHOO koo-PEETS' HEH-tah"
    },
    {
      "category": "Emergencies",
      "phrase": "Дапамажыце!",
      "english": "Help!",
      "pron": "dah-pah-mah-ZHY-tsye"
    },
    {
      "category": "Emergencies",
      "phrase": "Выклікайце міліцыю!",
      "english": "Call the police!",
      "pron": "vy-klee-KAI-tsye mee-LEE-tsy-yoo"
    },
    {
      "category": "Emergencies",
      "phrase": "Выклікайце хуткую дапамогу!",
      "english": "Call an ambulance!",
      "pron": "vy-klee-KAI-tsye KHOOT-koo-yoo dah-pah-MOH-hoo"
    },
    {
      "category": "Emergencies",
      "phrase": "Мне патрэбны доктар",
      "english": "I need a doctor",
      "pron": "mnye pah-TREB-ny DOHK-tar"
    },
    {
      "category": "Emergencies",
      "phrase": "Пажар!",
      "english": "Fire!",
      "pron": "pah-ZHAR"
    }
  ],
  "bg": [
    {
      "category": "Greetings",
      "phrase": "Здравейте",
      "english": "Hello",
      "pron": "zdra-VEY-teh"
    },
    {
      "category": "Greetings",
      "phrase": "Добро утро",
      "english": "Good morning",
      "pron": "do-BRO OO-tro"
    },
    {
      "category": "Greetings",
      "phrase": "Добър ден",
      "english": "Good afternoon",
      "pron": "DO-bar den"
    },
    {
      "category": "Greetings",
      "phrase": "Добър вечер",
      "english": "Good evening",
      "pron": "DO-bar VEH-cher"
    },
    {
      "category": "Greetings",
      "phrase": "Довиждане",
      "english": "Goodbye",
      "pron": "do-VEEZH-da-neh"
    },
    {
      "category": "Basics",
      "phrase": "Да",
      "english": "Yes",
      "pron": "da"
    },
    {
      "category": "Basics",
      "phrase": "Не",
      "english": "No",
      "pron": "neh"
    },
    {
      "category": "Basics",
      "phrase": "Моля",
      "english": "Please",
      "pron": "MOH-lya"
    },
    {
      "category": "Basics",
      "phrase": "Благодаря",
      "english": "Thank you",
      "pron": "bla-go-da-RYA"
    },
    {
      "category": "Basics",
      "phrase": "Извинете",
      "english": "Excuse me",
      "pron": "iz-vi-NEH-teh"
    },
    {
      "category": "Getting around",
      "phrase": "Къде е гарата?",
      "english": "Where is the train station?",
      "pron": "ka-DEH eh GA-ra-ta"
    },
    {
      "category": "Getting around",
      "phrase": "Колко струва билетът?",
      "english": "How much does the ticket cost?",
      "pron": "KOL-ko STROO-va bi-LEH-tat"
    },
    {
      "category": "Getting around",
      "phrase": "Автобусна спирка",
      "english": "Bus stop",
      "pron": "av-to-BOOS-na SPEER-ka"
    },
    {
      "category": "Getting around",
      "phrase": "Как да стигна до центъра?",
      "english": "How do I get to the center?",
      "pron": "kak da STEEG-na do TSEN-ta-ra"
    },
    {
      "category": "Eating out",
      "phrase": "Маса за двама, моля",
      "english": "A table for two, please",
      "pron": "MA-sa za DVA-ma, MOH-lya"
    },
    {
      "category": "Eating out",
      "phrase": "Менюто, моля",
      "english": "The menu, please",
      "pron": "meh-NYOO-to, MOH-lya"
    },
    {
      "category": "Eating out",
      "phrase": "Сметката, моля",
      "english": "The bill, please",
      "pron": "SMEHT-ka-ta, MOH-lya"
    },
    {
      "category": "Eating out",
      "phrase": "Вкусно е",
      "english": "It's delicious",
      "pron": "VKOOS-no eh"
    },
    {
      "category": "Eating out",
      "phrase": "Вода",
      "english": "Water",
      "pron": "vo-DA"
    },
    {
      "category": "Shopping",
      "phrase": "Колко струва това?",
      "english": "How much is this?",
      "pron": "KOL-ko STROO-va to-VA"
    },
    {
      "category": "Shopping",
      "phrase": "Може ли по-евтино?",
      "english": "Can it be cheaper?",
      "pron": "MO-zheh li po-EV-ti-no"
    },
    {
      "category": "Shopping",
      "phrase": "Приемате ли карти?",
      "english": "Do you accept cards?",
      "pron": "pri-EH-ma-teh li KAR-ti"
    },
    {
      "category": "Shopping",
      "phrase": "Само гледам, благодаря",
      "english": "Just looking, thank you",
      "pron": "SA-mo GLEH-dam, bla-go-da-RYA"
    },
    {
      "category": "Shopping",
      "phrase": "Искам да купя това",
      "english": "I want to buy this",
      "pron": "EES-kam da KOO-pya to-VA"
    },
    {
      "category": "Emergencies",
      "phrase": "Помощ!",
      "english": "Help!",
      "pron": "PO-mosht"
    },
    {
      "category": "Emergencies",
      "phrase": "Извикайте линейка!",
      "english": "Call an ambulance!",
      "pron": "iz-VEE-kai-teh li-NEY-ka"
    },
    {
      "category": "Emergencies",
      "phrase": "Загубих се",
      "english": "I'm lost",
      "pron": "za-GOO-bih seh"
    },
    {
      "category": "Emergencies",
      "phrase": "Къде е болницата?",
      "english": "Where is the hospital?",
      "pron": "ka-DEH eh BOL-ni-tsa-ta"
    },
    {
      "category": "Emergencies",
      "phrase": "Полиция",
      "english": "Police",
      "pron": "po-LEE-tsi-ya"
    }
  ],
  "bs": [
    {
      "category": "Greetings",
      "phrase": "Dobar dan",
      "english": "Good day",
      "pron": "DOH-bar dahn"
    },
    {
      "category": "Greetings",
      "phrase": "Dobro jutro",
      "english": "Good morning",
      "pron": "DOH-broh YOO-troh"
    },
    {
      "category": "Greetings",
      "phrase": "Dobro veče",
      "english": "Good evening",
      "pron": "DOH-broh VEH-cheh"
    },
    {
      "category": "Greetings",
      "phrase": "Zdravo",
      "english": "Hi",
      "pron": "ZDRAH-voh"
    },
    {
      "category": "Greetings",
      "phrase": "Doviđenja",
      "english": "Goodbye",
      "pron": "doh-vee-JEH-nyah"
    },
    {
      "category": "Basics",
      "phrase": "Da",
      "english": "Yes",
      "pron": "dah"
    },
    {
      "category": "Basics",
      "phrase": "Ne",
      "english": "No",
      "pron": "neh"
    },
    {
      "category": "Basics",
      "phrase": "Molim",
      "english": "Please",
      "pron": "MOH-leem"
    },
    {
      "category": "Basics",
      "phrase": "Hvala",
      "english": "Thank you",
      "pron": "HVAH-lah"
    },
    {
      "category": "Basics",
      "phrase": "Izvinite",
      "english": "Excuse me",
      "pron": "eez-VEE-nee-teh"
    },
    {
      "category": "Getting around",
      "phrase": "Gdje je toalet?",
      "english": "Where is the restroom?",
      "pron": "g-DYEH yeh TOH-ah-let"
    },
    {
      "category": "Getting around",
      "phrase": "Koliko je daleko?",
      "english": "How far is it?",
      "pron": "KOH-lee-koh yeh DAH-leh-koh"
    },
    {
      "category": "Getting around",
      "phrase": "Treba mi taksi.",
      "english": "I need a taxi.",
      "pron": "TREH-bah mee TAHK-see"
    },
    {
      "category": "Getting around",
      "phrase": "Gdje je autobuska stanica?",
      "english": "Where is the bus station?",
      "pron": "g-DYEH yeh ow-toh-BOOS-kah STAH-nee-tsah"
    },
    {
      "category": "Getting around",
      "phrase": "U koliko sati polazi voz?",
      "english": "What time does the train leave?",
      "pron": "oo KOH-lee-koh SAH-tee POH-lah-zee vohz"
    },
    {
      "category": "Eating out",
      "phrase": "Molim jelovnik.",
      "english": "The menu, please.",
      "pron": "MOH-leem YEH-lohv-neek"
    },
    {
      "category": "Eating out",
      "phrase": "Šta biste preporučili?",
      "english": "What would you recommend?",
      "pron": "shtah BEE-steh preh-poh-ROO-chee-lee"
    },
    {
      "category": "Eating out",
      "phrase": "Račun, molim.",
      "english": "The bill, please.",
      "pron": "RAH-choon MOH-leem"
    },
    {
      "category": "Eating out",
      "phrase": "Ne jedem meso.",
      "english": "I don't eat meat.",
      "pron": "neh YEH-dem MEH-soh"
    },
    {
      "category": "Eating out",
      "phrase": "Živjeli!",
      "english": "Cheers!",
      "pron": "ZHEEV-yeh-lee"
    },
    {
      "category": "Shopping",
      "phrase": "Koliko ovo košta?",
      "english": "How much does this cost?",
      "pron": "KOH-lee-koh OH-voh KOSH-tah"
    },
    {
      "category": "Shopping",
      "phrase": "Samo gledam, hvala.",
      "english": "I'm just looking, thank you.",
      "pron": "SAH-moh GLEH-dahm HVAH-lah"
    },
    {
      "category": "Shopping",
      "phrase": "Mogu li platiti karticom?",
      "english": "Can I pay by card?",
      "pron": "MOH-goo lee PLAH-tee-tee KAR-tee-tsohm"
    },
    {
      "category": "Shopping",
      "phrase": "To je preskupo.",
      "english": "That's too expensive.",
      "pron": "toh yeh preh-SKOO-poh"
    },
    {
      "category": "Shopping",
      "phrase": "Gdje je pijaca?",
      "english": "Where is the market?",
      "pron": "g-DYEH yeh PEE-yah-tsah"
    },
    {
      "category": "Emergencies",
      "phrase": "Upomoć!",
      "english": "Help!",
      "pron": "oo-POH-moch"
    },
    {
      "category": "Emergencies",
      "phrase": "Pozovite hitnu pomoć!",
      "english": "Call an ambulance!",
      "pron": "poh-ZOH-vee-teh HEET-noo POH-moch"
    },
    {
      "category": "Emergencies",
      "phrase": "Treba mi ljekar.",
      "english": "I need a doctor.",
      "pron": "TREH-bah mee LYEH-kar"
    },
    {
      "category": "Emergencies",
      "phrase": "Pozovite policiju!",
      "english": "Call the police!",
      "pron": "poh-ZOH-vee-teh poh-LEE-tsee-yoo"
    },
    {
      "category": "Emergencies",
      "phrase": "Gdje je najbliža bolnica?",
      "english": "Where is the nearest hospital?",
      "pron": "g-DYEH yeh nigh-BLEE-zhah BOHL-nee-tsah"
    }
  ],
  "ca": [
    {
      "category": "Greetings",
      "phrase": "Bon dia",
      "english": "Good morning",
      "pron": "BON DEE-uh"
    },
    {
      "category": "Greetings",
      "phrase": "Bona tarda",
      "english": "Good afternoon",
      "pron": "BO-nuh TAR-duh"
    },
    {
      "category": "Greetings",
      "phrase": "Com estàs?",
      "english": "How are you?",
      "pron": "KOM es-TAS"
    },
    {
      "category": "Greetings",
      "phrase": "Molt de gust",
      "english": "Nice to meet you",
      "pron": "MOLT duh GOOST"
    },
    {
      "category": "Greetings",
      "phrase": "Adéu",
      "english": "Goodbye",
      "pron": "uh-DEH-oo"
    },
    {
      "category": "Basics",
      "phrase": "Si us plau",
      "english": "Please",
      "pron": "see oos PLOW"
    },
    {
      "category": "Basics",
      "phrase": "Gràcies",
      "english": "Thank you",
      "pron": "GRA-see-uhs"
    },
    {
      "category": "Basics",
      "phrase": "De res",
      "english": "You're welcome",
      "pron": "duh RES"
    },
    {
      "category": "Basics",
      "phrase": "Perdoni",
      "english": "Excuse me",
      "pron": "per-DOH-nee"
    },
    {
      "category": "Basics",
      "phrase": "No ho entenc",
      "english": "I don't understand",
      "pron": "NO oo en-TENG"
    },
    {
      "category": "Getting around",
      "phrase": "On és l'estació de tren?",
      "english": "Where is the train station?",
      "pron": "ON ES les-tuh-see-OH duh TREN"
    },
    {
      "category": "Getting around",
      "phrase": "Quant costa un bitllet?",
      "english": "How much does a ticket cost?",
      "pron": "KWAN KOS-tuh oon bit-LYET"
    },
    {
      "category": "Getting around",
      "phrase": "Estic perdut",
      "english": "I am lost",
      "pron": "es-TEEK per-DOOT"
    },
    {
      "category": "Getting around",
      "phrase": "On és la parada de bus?",
      "english": "Where is the bus stop?",
      "pron": "ON ES luh puh-RA-duh duh BOOS"
    },
    {
      "category": "Getting around",
      "phrase": "És lluny?",
      "english": "Is it far?",
      "pron": "ES LYOONY"
    },
    {
      "category": "Eating out",
      "phrase": "Una taula per a dos, si us plau",
      "english": "A table for two, please",
      "pron": "OO-nuh TOW-luh puh-ruh DOS, see oos PLOW"
    },
    {
      "category": "Eating out",
      "phrase": "La carta, si us plau",
      "english": "The menu, please",
      "pron": "luh KAR-tuh, see oos PLOW"
    },
    {
      "category": "Eating out",
      "phrase": "Voldria un cafè",
      "english": "I would like a coffee",
      "pron": "vol-DREE-uh oon kuh-FEH"
    },
    {
      "category": "Eating out",
      "phrase": "El compte, si us plau",
      "english": "The bill, please",
      "pron": "el KOM-tuh, see oos PLOW"
    },
    {
      "category": "Eating out",
      "phrase": "Està molt bo",
      "english": "It's very good",
      "pron": "es-TA MOLT BO"
    },
    {
      "category": "Shopping",
      "phrase": "Quant costa això?",
      "english": "How much does this cost?",
      "pron": "KWAN KOS-tuh uh-SHO"
    },
    {
      "category": "Shopping",
      "phrase": "Puc pagar amb targeta?",
      "english": "Can I pay by card?",
      "pron": "POOK puh-GAR am tar-ZHEH-tuh"
    },
    {
      "category": "Shopping",
      "phrase": "Només estic mirant, gràcies",
      "english": "I'm just looking, thanks",
      "pron": "noo-MES es-TEEK mee-RAN, GRA-see-uhs"
    },
    {
      "category": "Shopping",
      "phrase": "És massa car",
      "english": "It's too expensive",
      "pron": "ES MA-suh KAR"
    },
    {
      "category": "Shopping",
      "phrase": "On és el mercat?",
      "english": "Where is the market?",
      "pron": "ON ES el mer-KAT"
    },
    {
      "category": "Emergencies",
      "phrase": "Ajuda!",
      "english": "Help!",
      "pron": "uh-ZHOO-duh"
    },
    {
      "category": "Emergencies",
      "phrase": "Truqui a la policia!",
      "english": "Call the police!",
      "pron": "TROO-kee uh luh poo-lee-SEE-uh"
    },
    {
      "category": "Emergencies",
      "phrase": "Necessito un metge",
      "english": "I need a doctor",
      "pron": "nuh-suh-SEE-too oon MEJ-uh"
    },
    {
      "category": "Emergencies",
      "phrase": "On és l'hospital?",
      "english": "Where is the hospital?",
      "pron": "ON ES los-pee-TAL"
    },
    {
      "category": "Emergencies",
      "phrase": "Truqui a una ambulància!",
      "english": "Call an ambulance!",
      "pron": "TROO-kee uh OO-nuh am-boo-LAN-see-uh"
    }
  ],
  "cs": [
    {
      "category": "Greetings",
      "phrase": "Dobrý den",
      "english": "Hello",
      "pron": "DOB-ree DEN"
    },
    {
      "category": "Greetings",
      "phrase": "Ahoj",
      "english": "Hi / Bye (informal)",
      "pron": "AH-hoy"
    },
    {
      "category": "Greetings",
      "phrase": "Dobré ráno",
      "english": "Good morning",
      "pron": "DOB-reh RAH-noh"
    },
    {
      "category": "Greetings",
      "phrase": "Na shledanou",
      "english": "Goodbye",
      "pron": "nah SKHLEH-dah-noh"
    },
    {
      "category": "Greetings",
      "phrase": "Dobrý večer",
      "english": "Good evening",
      "pron": "DOB-ree VEH-cher"
    },
    {
      "category": "Basics",
      "phrase": "Ano",
      "english": "Yes",
      "pron": "AH-no"
    },
    {
      "category": "Basics",
      "phrase": "Ne",
      "english": "No",
      "pron": "NEH"
    },
    {
      "category": "Basics",
      "phrase": "Prosím",
      "english": "Please / You're welcome",
      "pron": "PROH-seem"
    },
    {
      "category": "Basics",
      "phrase": "Děkuji",
      "english": "Thank you",
      "pron": "DYEH-koo-yih"
    },
    {
      "category": "Basics",
      "phrase": "Promiňte",
      "english": "Excuse me / Sorry",
      "pron": "PROH-min-yteh"
    },
    {
      "category": "Getting around",
      "phrase": "Kde je nádraží?",
      "english": "Where is the train station?",
      "pron": "GDEH yeh NAH-drah-zhee"
    },
    {
      "category": "Getting around",
      "phrase": "Kde je autobusová zastávka?",
      "english": "Where is the bus stop?",
      "pron": "GDEH yeh OW-toh-boo-soh-vah ZAH-stahf-kah"
    },
    {
      "category": "Getting around",
      "phrase": "Jednu jízdenku do Prahy, prosím.",
      "english": "One ticket to Prague, please.",
      "pron": "YED-noo YEEZ-den-koo doh PRAH-hih, PROH-seem"
    },
    {
      "category": "Getting around",
      "phrase": "Jak se dostanu do centra?",
      "english": "How do I get to the city center?",
      "pron": "YAHK seh DOH-stah-noo doh TSEN-trah"
    },
    {
      "category": "Getting around",
      "phrase": "Kde je toaleta?",
      "english": "Where is the restroom?",
      "pron": "GDEH yeh TOH-ah-leh-tah"
    },
    {
      "category": "Eating out",
      "phrase": "Stůl pro dva, prosím.",
      "english": "A table for two, please.",
      "pron": "STOOL proh DVAH, PROH-seem"
    },
    {
      "category": "Eating out",
      "phrase": "Jídelní lístek, prosím.",
      "english": "The menu, please.",
      "pron": "YEE-del-nee LEES-tek, PROH-seem"
    },
    {
      "category": "Eating out",
      "phrase": "Dám si toto.",
      "english": "I'll have this.",
      "pron": "DAHM sih TOH-toh"
    },
    {
      "category": "Eating out",
      "phrase": "Účet, prosím.",
      "english": "The check, please.",
      "pron": "OO-chet, PROH-seem"
    },
    {
      "category": "Eating out",
      "phrase": "Dobrou chuť!",
      "english": "Enjoy your meal!",
      "pron": "DOH-broh KHOOTCH"
    },
    {
      "category": "Shopping",
      "phrase": "Kolik to stojí?",
      "english": "How much does this cost?",
      "pron": "KOH-lik toh STOH-yee"
    },
    {
      "category": "Shopping",
      "phrase": "Můžu platit kartou?",
      "english": "Can I pay by card?",
      "pron": "MOO-zhoo PLAH-tit KAR-toh"
    },
    {
      "category": "Shopping",
      "phrase": "Je to příliš drahé.",
      "english": "That's too expensive.",
      "pron": "yeh toh PRZHEE-lish DRAH-heh"
    },
    {
      "category": "Shopping",
      "phrase": "Vezmu si tohle, prosím.",
      "english": "I'll take this, please.",
      "pron": "VEZ-moo sih TOH-hleh, PROH-seem"
    },
    {
      "category": "Shopping",
      "phrase": "Jenom se dívám, děkuji.",
      "english": "I'm just looking, thank you.",
      "pron": "YEH-nom seh DYEE-vahm, DYEH-koo-yih"
    },
    {
      "category": "Emergencies",
      "phrase": "Pomoc!",
      "english": "Help!",
      "pron": "POH-mots"
    },
    {
      "category": "Emergencies",
      "phrase": "Zavolejte policii!",
      "english": "Call the police!",
      "pron": "ZAH-voh-lay-teh POH-lih-tsee"
    },
    {
      "category": "Emergencies",
      "phrase": "Potřebuji lékaře.",
      "english": "I need a doctor.",
      "pron": "POH-trzheh-boo-yih LEH-kah-rzheh"
    },
    {
      "category": "Emergencies",
      "phrase": "Zavolejte sanitku!",
      "english": "Call an ambulance!",
      "pron": "ZAH-voh-lay-teh SAH-nit-koo"
    },
    {
      "category": "Emergencies",
      "phrase": "Kde je nemocnice?",
      "english": "Where is the hospital?",
      "pron": "GDEH yeh NEH-mots-nih-tseh"
    }
  ],
  "da": [
    {
      "category": "Greetings",
      "phrase": "Hej",
      "english": "Hello",
      "pron": "HYE"
    },
    {
      "category": "Greetings",
      "phrase": "Godmorgen",
      "english": "Good morning",
      "pron": "goh-MORN"
    },
    {
      "category": "Greetings",
      "phrase": "Godaften",
      "english": "Good evening",
      "pron": "go-DAHF-ten"
    },
    {
      "category": "Greetings",
      "phrase": "Farvel",
      "english": "Goodbye",
      "pron": "fah-VEL"
    },
    {
      "category": "Greetings",
      "phrase": "Hvordan går det?",
      "english": "How are you?",
      "pron": "vor-DAN gor di"
    },
    {
      "category": "Basics",
      "phrase": "Vær venlig",
      "english": "Please",
      "pron": "vair VEN-lee"
    },
    {
      "category": "Basics",
      "phrase": "Tak",
      "english": "Thank you",
      "pron": "tahk"
    },
    {
      "category": "Basics",
      "phrase": "Ja / Nej",
      "english": "Yes / No",
      "pron": "yah / nye"
    },
    {
      "category": "Basics",
      "phrase": "Undskyld",
      "english": "Excuse me",
      "pron": "ON-skewl"
    },
    {
      "category": "Basics",
      "phrase": "Jeg forstår ikke",
      "english": "I don't understand",
      "pron": "yai for-STOR ig-uh"
    },
    {
      "category": "Getting around",
      "phrase": "Hvor er togstationen?",
      "english": "Where is the train station?",
      "pron": "vor air TOH-stah-shoh-nen"
    },
    {
      "category": "Getting around",
      "phrase": "Hvor er toilettet?",
      "english": "Where is the toilet?",
      "pron": "vor air toa-LET-et"
    },
    {
      "category": "Getting around",
      "phrase": "Jeg skal til lufthavnen",
      "english": "I need to get to the airport",
      "pron": "yai skal til LOOFT-how-nen"
    },
    {
      "category": "Getting around",
      "phrase": "Hvad koster en billet?",
      "english": "How much does a ticket cost?",
      "pron": "va KOS-ter en bee-LET"
    },
    {
      "category": "Getting around",
      "phrase": "Kører denne bus til centrum?",
      "english": "Does this bus go downtown?",
      "pron": "KUR-uh DEN-eh boos til SEN-trom"
    },
    {
      "category": "Eating out",
      "phrase": "Et bord til to, tak",
      "english": "A table for two, please",
      "pron": "et bor til toh, tahk"
    },
    {
      "category": "Eating out",
      "phrase": "Kan jeg få menukortet?",
      "english": "Can I have the menu?",
      "pron": "kan yai foh meh-noo-KOR-tet"
    },
    {
      "category": "Eating out",
      "phrase": "Regningen, tak",
      "english": "The bill, please",
      "pron": "RYE-ning-en, tahk"
    },
    {
      "category": "Eating out",
      "phrase": "Det var lækkert",
      "english": "That was delicious",
      "pron": "deh var LEK-ert"
    },
    {
      "category": "Eating out",
      "phrase": "Jeg er vegetar",
      "english": "I am vegetarian",
      "pron": "yai air veh-geh-TAR"
    },
    {
      "category": "Shopping",
      "phrase": "Hvor meget koster det?",
      "english": "How much does it cost?",
      "pron": "vor MY-et KOS-ter deh"
    },
    {
      "category": "Shopping",
      "phrase": "Kan jeg betale med kort?",
      "english": "Can I pay by card?",
      "pron": "kan yai beh-TAH-leh meth kort"
    },
    {
      "category": "Shopping",
      "phrase": "Jeg kigger bare",
      "english": "I'm just looking",
      "pron": "yai KEE-ger BAH-reh"
    },
    {
      "category": "Shopping",
      "phrase": "Det er for dyrt",
      "english": "That's too expensive",
      "pron": "deh air for DEWRT"
    },
    {
      "category": "Shopping",
      "phrase": "Må jeg få en kvittering?",
      "english": "May I have a receipt?",
      "pron": "moh yai foh en kvi-TEH-ring"
    },
    {
      "category": "Emergencies",
      "phrase": "Hjælp!",
      "english": "Help!",
      "pron": "YELP"
    },
    {
      "category": "Emergencies",
      "phrase": "Ring til politiet!",
      "english": "Call the police!",
      "pron": "ring til poh-lee-TEE-eth"
    },
    {
      "category": "Emergencies",
      "phrase": "Jeg har brug for en læge",
      "english": "I need a doctor",
      "pron": "yai ha broo for en LAI-eh"
    },
    {
      "category": "Emergencies",
      "phrase": "Ring efter en ambulance!",
      "english": "Call an ambulance!",
      "pron": "ring EF-ter en am-boo-LAHNG-seh"
    },
    {
      "category": "Emergencies",
      "phrase": "Hvor er det nærmeste hospital?",
      "english": "Where is the nearest hospital?",
      "pron": "vor air deh NAIR-mes-teh hos-pi-TAL"
    }
  ],
  "el": [
    {
      "category": "Greetings",
      "phrase": "Γεια σου",
      "english": "Hello",
      "pron": "YAH soo"
    },
    {
      "category": "Greetings",
      "phrase": "Καλημέρα",
      "english": "Good morning",
      "pron": "kah-lee-MEH-rah"
    },
    {
      "category": "Greetings",
      "phrase": "Καλησπέρα",
      "english": "Good evening",
      "pron": "kah-lee-SPEH-rah"
    },
    {
      "category": "Greetings",
      "phrase": "Καληνύχτα",
      "english": "Good night",
      "pron": "kah-lee-NEEKH-tah"
    },
    {
      "category": "Greetings",
      "phrase": "Αντίο",
      "english": "Goodbye",
      "pron": "an-DEE-oh"
    },
    {
      "category": "Basics",
      "phrase": "Παρακαλώ",
      "english": "Please",
      "pron": "pah-rah-kah-LOH"
    },
    {
      "category": "Basics",
      "phrase": "Ευχαριστώ",
      "english": "Thank you",
      "pron": "ef-khah-ree-STOH"
    },
    {
      "category": "Basics",
      "phrase": "Ναι / Όχι",
      "english": "Yes / No",
      "pron": "neh / OH-khee"
    },
    {
      "category": "Basics",
      "phrase": "Συγγνώμη",
      "english": "Sorry / Excuse me",
      "pron": "seegh-NOH-mee"
    },
    {
      "category": "Basics",
      "phrase": "Μιλάτε αγγλικά;",
      "english": "Do you speak English?",
      "pron": "mee-LAH-teh ang-glee-KAH"
    },
    {
      "category": "Getting around",
      "phrase": "Πού είναι η τουαλέτα;",
      "english": "Where is the toilet?",
      "pron": "poo EE-neh ee too-ah-LEH-tah"
    },
    {
      "category": "Getting around",
      "phrase": "Πώς πάω στο κέντρο;",
      "english": "How do I get to the center?",
      "pron": "pos PAH-oh sto KEN-droh"
    },
    {
      "category": "Getting around",
      "phrase": "Ένα εισιτήριο, παρακαλώ.",
      "english": "One ticket, please.",
      "pron": "EH-nah ee-see-TEE-ree-oh, pah-rah-kah-LOH"
    },
    {
      "category": "Getting around",
      "phrase": "Πού είναι η στάση του λεωφορείου;",
      "english": "Where is the bus stop?",
      "pron": "poo EE-neh ee STAH-see too leh-oh-foh-REE-oo"
    },
    {
      "category": "Getting around",
      "phrase": "Είναι μακριά;",
      "english": "Is it far?",
      "pron": "EE-neh mah-kree-AH"
    },
    {
      "category": "Eating out",
      "phrase": "Ένα τραπέζι για δύο, παρακαλώ.",
      "english": "A table for two, please.",
      "pron": "EH-nah trah-PEH-zee yah DHEE-oh, pah-rah-kah-LOH"
    },
    {
      "category": "Eating out",
      "phrase": "Τον κατάλογο, παρακαλώ.",
      "english": "The menu, please.",
      "pron": "ton kah-TAH-loh-goh, pah-rah-kah-LOH"
    },
    {
      "category": "Eating out",
      "phrase": "Τον λογαριασμό, παρακαλώ.",
      "english": "The bill, please.",
      "pron": "ton loh-ghah-ree-az-MOH, pah-rah-kah-LOH"
    },
    {
      "category": "Eating out",
      "phrase": "Καλή όρεξη!",
      "english": "Enjoy your meal!",
      "pron": "kah-LEE OH-rek-see"
    },
    {
      "category": "Eating out",
      "phrase": "Είμαι χορτοφάγος.",
      "english": "I am a vegetarian.",
      "pron": "EE-meh khor-toh-FAH-ghos"
    },
    {
      "category": "Shopping",
      "phrase": "Πόσο κάνει;",
      "english": "How much is it?",
      "pron": "POH-soh KAH-nee"
    },
    {
      "category": "Shopping",
      "phrase": "Μπορώ να το δοκιμάσω;",
      "english": "Can I try it on?",
      "pron": "boh-ROH nah toh dhoh-kee-MAH-soh"
    },
    {
      "category": "Shopping",
      "phrase": "Δέχεστε πιστωτικές κάρτες;",
      "english": "Do you accept credit cards?",
      "pron": "DHEH-kheh-steh pee-stoh-tee-KES KAR-tes"
    },
    {
      "category": "Shopping",
      "phrase": "Μόνο κοιτάζω.",
      "english": "I'm just looking.",
      "pron": "MOH-noh kee-TAH-zoh"
    },
    {
      "category": "Shopping",
      "phrase": "Είναι πολύ ακριβό.",
      "english": "It's too expensive.",
      "pron": "EE-neh poh-LEE ah-kree-VOH"
    },
    {
      "category": "Emergencies",
      "phrase": "Βοήθεια!",
      "english": "Help!",
      "pron": "voh-EE-thee-ah"
    },
    {
      "category": "Emergencies",
      "phrase": "Καλέστε ένα ασθενοφόρο!",
      "english": "Call an ambulance!",
      "pron": "kah-LES-teh EH-nah as-theh-noh-FOH-roh"
    },
    {
      "category": "Emergencies",
      "phrase": "Χρειάζομαι γιατρό.",
      "english": "I need a doctor.",
      "pron": "khree-AH-zoh-meh yaht-ROH"
    },
    {
      "category": "Emergencies",
      "phrase": "Πού είναι το νοσοκομείο;",
      "english": "Where is the hospital?",
      "pron": "poo EE-neh toh noh-soh-koh-MEE-oh"
    },
    {
      "category": "Emergencies",
      "phrase": "Καλέστε την αστυνομία!",
      "english": "Call the police!",
      "pron": "kah-LES-teh teen ah-stee-noh-MEE-ah"
    }
  ],
  "et": [
    {
      "category": "Greetings",
      "phrase": "Tere!",
      "english": "Hello!",
      "pron": "TEH-reh"
    },
    {
      "category": "Greetings",
      "phrase": "Tere hommikust!",
      "english": "Good morning!",
      "pron": "TEH-reh HOM-mee-kust"
    },
    {
      "category": "Greetings",
      "phrase": "Tere õhtust!",
      "english": "Good evening!",
      "pron": "TEH-reh UH-tust"
    },
    {
      "category": "Greetings",
      "phrase": "Nägemist!",
      "english": "Goodbye!",
      "pron": "NAH-geh-mist"
    },
    {
      "category": "Greetings",
      "phrase": "Kuidas läheb?",
      "english": "How are you?",
      "pron": "KUY-dahs LAH-heb"
    },
    {
      "category": "Basics",
      "phrase": "Jah",
      "english": "Yes",
      "pron": "YAH"
    },
    {
      "category": "Basics",
      "phrase": "Ei",
      "english": "No",
      "pron": "AY"
    },
    {
      "category": "Basics",
      "phrase": "Palun",
      "english": "Please",
      "pron": "PAH-loon"
    },
    {
      "category": "Basics",
      "phrase": "Aitäh",
      "english": "Thank you",
      "pron": "EYE-tah"
    },
    {
      "category": "Basics",
      "phrase": "Vabandust",
      "english": "Excuse me, sorry",
      "pron": "VAH-bahn-doost"
    },
    {
      "category": "Getting around",
      "phrase": "Kus on lähim bussipeatus?",
      "english": "Where is the nearest bus stop?",
      "pron": "KOOS ohn LAH-him BOO-see-peh-ah-tus"
    },
    {
      "category": "Getting around",
      "phrase": "Kus on raudteejaam?",
      "english": "Where is the train station?",
      "pron": "KOOS ohn ROWD-tay-yahm"
    },
    {
      "category": "Getting around",
      "phrase": "Kus ma saan takso võtta?",
      "english": "Where can I get a taxi?",
      "pron": "KOOS mah SAHN TAHK-so VUHT-tah"
    },
    {
      "category": "Getting around",
      "phrase": "Ma olen eksinud.",
      "english": "I am lost.",
      "pron": "mah OH-len EK-see-noot"
    },
    {
      "category": "Getting around",
      "phrase": "Kui kaugel see on?",
      "english": "How far is it?",
      "pron": "KUI KOW-gel seh ohn"
    },
    {
      "category": "Eating out",
      "phrase": "Laud kahele, palun.",
      "english": "A table for two, please.",
      "pron": "LOWD KAH-heh-leh, PAH-loon"
    },
    {
      "category": "Eating out",
      "phrase": "Menüü, palun.",
      "english": "The menu, please.",
      "pron": "MEH-new, PAH-loon"
    },
    {
      "category": "Eating out",
      "phrase": "Arve, palun.",
      "english": "The bill, please.",
      "pron": "AHR-veh, PAH-loon"
    },
    {
      "category": "Eating out",
      "phrase": "See on maitsev!",
      "english": "It's delicious!",
      "pron": "seh ohn MAIT-sev"
    },
    {
      "category": "Eating out",
      "phrase": "Ma olen taimetoitlane.",
      "english": "I am a vegetarian.",
      "pron": "mah OH-len TIE-meh-toyt-lah-neh"
    },
    {
      "category": "Shopping",
      "phrase": "Kui palju see maksab?",
      "english": "How much does this cost?",
      "pron": "KUI PAHL-yoo seh MAHK-sahb"
    },
    {
      "category": "Shopping",
      "phrase": "Kas te võtate kaarti?",
      "english": "Do you accept cards?",
      "pron": "kahs teh VUH-tah-teh KAAR-tee"
    },
    {
      "category": "Shopping",
      "phrase": "See on liiga kallis.",
      "english": "This is too expensive.",
      "pron": "seh ohn LEE-gah KAHL-lis"
    },
    {
      "category": "Shopping",
      "phrase": "Ma tahaksin seda osta.",
      "english": "I would like to buy this.",
      "pron": "mah TAH-hahk-sin SEH-dah OHS-tah"
    },
    {
      "category": "Shopping",
      "phrase": "Kus on kassa?",
      "english": "Where is the checkout?",
      "pron": "KOOS ohn KAHS-sah"
    },
    {
      "category": "Emergencies",
      "phrase": "Appi!",
      "english": "Help!",
      "pron": "AHP-pee"
    },
    {
      "category": "Emergencies",
      "phrase": "Kutsuge kiirabi!",
      "english": "Call an ambulance!",
      "pron": "KOOT-soo-geh KEE-rah-bee"
    },
    {
      "category": "Emergencies",
      "phrase": "Kutsuge politsei!",
      "english": "Call the police!",
      "pron": "KOOT-soo-geh POH-lee-tsay"
    },
    {
      "category": "Emergencies",
      "phrase": "Ma vajan arsti.",
      "english": "I need a doctor.",
      "pron": "mah VAH-yahn AHRS-tee"
    },
    {
      "category": "Emergencies",
      "phrase": "Kus on lähim haigla?",
      "english": "Where is the nearest hospital?",
      "pron": "KOOS ohn LAH-him HIGH-glah"
    }
  ],
  "eu": [
    {
      "category": "Greetings",
      "phrase": "Kaixo",
      "english": "Hello",
      "pron": "KAI-sho"
    },
    {
      "category": "Greetings",
      "phrase": "Egun on",
      "english": "Good morning",
      "pron": "EH-goon OHN"
    },
    {
      "category": "Greetings",
      "phrase": "Gabon",
      "english": "Good evening",
      "pron": "GAH-bohn"
    },
    {
      "category": "Greetings",
      "phrase": "Agur",
      "english": "Goodbye",
      "pron": "ah-GOOR"
    },
    {
      "category": "Greetings",
      "phrase": "Zer moduz?",
      "english": "How are you?",
      "pron": "SAIR MOH-doos"
    },
    {
      "category": "Basics",
      "phrase": "Mesedez",
      "english": "Please",
      "pron": "meh-seh-DES"
    },
    {
      "category": "Basics",
      "phrase": "Eskerrik asko",
      "english": "Thank you",
      "pron": "es-KEH-rik AHS-koh"
    },
    {
      "category": "Basics",
      "phrase": "Bai / Ez",
      "english": "Yes / No",
      "pron": "bye / ess"
    },
    {
      "category": "Basics",
      "phrase": "Barkatu",
      "english": "Excuse me",
      "pron": "bar-KAH-too"
    },
    {
      "category": "Basics",
      "phrase": "Ingelesez hitz egiten al duzu?",
      "english": "Do you speak English?",
      "pron": "IN-gheh-leh-sez its eh-GHEE-ten ahl DOO-soo"
    },
    {
      "category": "Getting around",
      "phrase": "Non dago...?",
      "english": "Where is...?",
      "pron": "nohn DAH-goh"
    },
    {
      "category": "Getting around",
      "phrase": "Non dago komuna?",
      "english": "Where is the toilet?",
      "pron": "nohn DAH-goh koh-MOO-nah"
    },
    {
      "category": "Getting around",
      "phrase": "Zenbat da txartela?",
      "english": "How much is the ticket?",
      "pron": "SEN-baht dah CHAR-teh-lah"
    },
    {
      "category": "Getting around",
      "phrase": "...ra joan nahi dut",
      "english": "I want to go to...",
      "pron": "rah YOH-ahn NAH-ee doot"
    },
    {
      "category": "Getting around",
      "phrase": "Gelditu hemen, mesedez",
      "english": "Stop here, please",
      "pron": "GHEL-dee-too EH-men meh-seh-DES"
    },
    {
      "category": "Eating out",
      "phrase": "Mahai bat, bi pertsonentzat, mesedez",
      "english": "A table for two, please",
      "pron": "mah-EYE baht, bee per-TSOH-nen-tsaht, meh-seh-DES"
    },
    {
      "category": "Eating out",
      "phrase": "Menua, mesedez",
      "english": "The menu, please",
      "pron": "meh-NOO-ah, meh-seh-DES"
    },
    {
      "category": "Eating out",
      "phrase": "Kontua, mesedez",
      "english": "The bill, please",
      "pron": "kohn-TOO-ah, meh-seh-DES"
    },
    {
      "category": "Eating out",
      "phrase": "Ura",
      "english": "Water",
      "pron": "OO-rah"
    },
    {
      "category": "Eating out",
      "phrase": "Topa!",
      "english": "Cheers!",
      "pron": "TOH-pah"
    },
    {
      "category": "Shopping",
      "phrase": "Zenbat da?",
      "english": "How much is it?",
      "pron": "SEN-baht dah"
    },
    {
      "category": "Shopping",
      "phrase": "Hau garestiegia da",
      "english": "It's too expensive",
      "pron": "OW gah-RES-tee-eh-GHEE-ah dah"
    },
    {
      "category": "Shopping",
      "phrase": "Txartelik onartzen al duzu?",
      "english": "Do you accept cards?",
      "pron": "CHAR-teh-leek oh-NAR-tsen ahl DOO-soo"
    },
    {
      "category": "Shopping",
      "phrase": "Hau nahi dut, mesedez",
      "english": "I'd like this one",
      "pron": "OW NAH-ee doot, meh-seh-DES"
    },
    {
      "category": "Shopping",
      "phrase": "Begiratzen ari naiz bakarrik",
      "english": "I'm just looking",
      "pron": "beh-ghee-rah-TSEN AH-ree NICE bah-KAR-reek"
    },
    {
      "category": "Emergencies",
      "phrase": "Lagundu!",
      "english": "Help!",
      "pron": "lah-GOON-doo"
    },
    {
      "category": "Emergencies",
      "phrase": "Deitu poliziari",
      "english": "Call the police",
      "pron": "DAY-too poh-LEE-see-ah-ree"
    },
    {
      "category": "Emergencies",
      "phrase": "Mediku bat behar dut",
      "english": "I need a doctor",
      "pron": "MEH-dee-koo baht BEH-ar doot"
    },
    {
      "category": "Emergencies",
      "phrase": "Galdurik nago",
      "english": "I'm lost",
      "pron": "GAHL-doo-reek NAH-goh"
    },
    {
      "category": "Emergencies",
      "phrase": "Deitu anbulantziari",
      "english": "Call an ambulance",
      "pron": "DAY-too ahn-boo-LAHN-tsee-ah-ree"
    }
  ],
  "fi": [
    {
      "category": "Greetings",
      "phrase": "Hei",
      "english": "Hello",
      "pron": "HAY"
    },
    {
      "category": "Greetings",
      "phrase": "Hyvää huomenta",
      "english": "Good morning",
      "pron": "HEW-vaa HWOH-men-ta"
    },
    {
      "category": "Greetings",
      "phrase": "Hyvää päivää",
      "english": "Good day",
      "pron": "HEW-vaa PYE-vaa"
    },
    {
      "category": "Greetings",
      "phrase": "Hyvää iltaa",
      "english": "Good evening",
      "pron": "HEW-vaa IL-taa"
    },
    {
      "category": "Greetings",
      "phrase": "Näkemiin",
      "english": "Goodbye",
      "pron": "NA-keh-meen"
    },
    {
      "category": "Basics",
      "phrase": "Kiitos",
      "english": "Thank you",
      "pron": "KEE-tos"
    },
    {
      "category": "Basics",
      "phrase": "Ole hyvä",
      "english": "You're welcome",
      "pron": "OH-leh HEW-va"
    },
    {
      "category": "Basics",
      "phrase": "Kyllä",
      "english": "Yes",
      "pron": "KEWL-la"
    },
    {
      "category": "Basics",
      "phrase": "Ei",
      "english": "No",
      "pron": "AY"
    },
    {
      "category": "Basics",
      "phrase": "Anteeksi",
      "english": "Excuse me (sorry)",
      "pron": "AHN-tayk-si"
    },
    {
      "category": "Getting around",
      "phrase": "Missä on lähin rautatieasema?",
      "english": "Where is the nearest train station?",
      "pron": "MIS-sa on LA-hin ROW-tah-tyeh-ah-seh-mah"
    },
    {
      "category": "Getting around",
      "phrase": "Kuinka pääsen keskustaan?",
      "english": "How do I get to the city center?",
      "pron": "KWIN-ka PAA-sen KES-koos-taan"
    },
    {
      "category": "Getting around",
      "phrase": "Onko tämä oikea bussi lentokentälle?",
      "english": "Is this the right bus to the airport?",
      "pron": "ON-koh TA-ma OY-keh-ah BOOS-si LEN-toh-ken-tal-leh"
    },
    {
      "category": "Getting around",
      "phrase": "Voitteko auttaa minua?",
      "english": "Could you help me?",
      "pron": "VOYT-teh-koh OWT-taa MIN-oo-ah"
    },
    {
      "category": "Getting around",
      "phrase": "Yksi lippu Helsinkiin, kiitos",
      "english": "One ticket to Helsinki, please",
      "pron": "EWK-si LIP-poo HEL-sin-keen, KEE-tos"
    },
    {
      "category": "Eating out",
      "phrase": "Pöytä kahdelle, kiitos",
      "english": "A table for two, please",
      "pron": "PUY-ta KAH-del-leh, KEE-tos"
    },
    {
      "category": "Eating out",
      "phrase": "Ruokalista, kiitos",
      "english": "The menu, please",
      "pron": "RWOH-kah-lis-ta, KEE-tos"
    },
    {
      "category": "Eating out",
      "phrase": "Saisinko laskun?",
      "english": "Could I have the bill?",
      "pron": "SIGH-sin-koh LAHS-kun"
    },
    {
      "category": "Eating out",
      "phrase": "Hyvää ruokahalua",
      "english": "Enjoy your meal",
      "pron": "HEW-vaa RWOH-kah-hah-loo-ah"
    },
    {
      "category": "Eating out",
      "phrase": "Vettä, kiitos",
      "english": "Water, please",
      "pron": "VET-ta, KEE-tos"
    },
    {
      "category": "Shopping",
      "phrase": "Paljonko tämä maksaa?",
      "english": "How much does this cost?",
      "pron": "PAHL-yon-koh TA-ma MAHK-saa"
    },
    {
      "category": "Shopping",
      "phrase": "Voinko maksaa kortilla?",
      "english": "Can I pay by card?",
      "pron": "VOYN-koh MAHK-saa KOR-til-lah"
    },
    {
      "category": "Shopping",
      "phrase": "Voinko sovittaa tätä?",
      "english": "Can I try this on?",
      "pron": "VOYN-koh SOH-vit-taa TA-ta"
    },
    {
      "category": "Shopping",
      "phrase": "Saanko kuitin?",
      "english": "Can I have a receipt?",
      "pron": "SAAN-koh KWEE-tin"
    },
    {
      "category": "Shopping",
      "phrase": "Vain katselen, kiitos",
      "english": "I'm just looking, thank you",
      "pron": "VINE KAHT-seh-len, KEE-tos"
    },
    {
      "category": "Emergencies",
      "phrase": "Apua!",
      "english": "Help!",
      "pron": "AH-poo-ah"
    },
    {
      "category": "Emergencies",
      "phrase": "Soittakaa poliisille!",
      "english": "Call the police!",
      "pron": "SOYT-tah-kaa POH-lee-sil-leh"
    },
    {
      "category": "Emergencies",
      "phrase": "Tarvitsen lääkäriä",
      "english": "I need a doctor",
      "pron": "TAHR-vit-sen LAA-ka-ri-a"
    },
    {
      "category": "Emergencies",
      "phrase": "Missä on lähin sairaala?",
      "english": "Where is the nearest hospital?",
      "pron": "MIS-sa on LA-hin SIGH-raa-lah"
    },
    {
      "category": "Emergencies",
      "phrase": "Soittakaa hätänumeroon!",
      "english": "Call the emergency number!",
      "pron": "SOYT-tah-kaa HA-ta-noo-meh-roon"
    }
  ],
  "gl": [
    {
      "category": "Greetings",
      "phrase": "Ola",
      "english": "Hello",
      "pron": "OH-lah"
    },
    {
      "category": "Greetings",
      "phrase": "Bo día",
      "english": "Good morning",
      "pron": "BOH DEE-ah"
    },
    {
      "category": "Greetings",
      "phrase": "Boa tarde",
      "english": "Good afternoon",
      "pron": "BOH-ah TAR-deh"
    },
    {
      "category": "Greetings",
      "phrase": "Boa noite",
      "english": "Good evening",
      "pron": "BOH-ah NOY-teh"
    },
    {
      "category": "Greetings",
      "phrase": "Adeus",
      "english": "Goodbye",
      "pron": "ah-DEH-oos"
    },
    {
      "category": "Basics",
      "phrase": "Por favor",
      "english": "Please",
      "pron": "por fah-BOR"
    },
    {
      "category": "Basics",
      "phrase": "Grazas",
      "english": "Thank you",
      "pron": "GRAH-thahs"
    },
    {
      "category": "Basics",
      "phrase": "Si",
      "english": "Yes",
      "pron": "SEE"
    },
    {
      "category": "Basics",
      "phrase": "Non",
      "english": "No",
      "pron": "NOHN"
    },
    {
      "category": "Basics",
      "phrase": "Perdón",
      "english": "Excuse me",
      "pron": "per-DOHN"
    },
    {
      "category": "Getting around",
      "phrase": "Onde está a estación?",
      "english": "Where is the station?",
      "pron": "OHN-deh es-TAH ah es-tah-THYOHN"
    },
    {
      "category": "Getting around",
      "phrase": "Canto custa o billete?",
      "english": "How much is the ticket?",
      "pron": "KAHN-toh KOOS-tah oh bee-LYEH-teh"
    },
    {
      "category": "Getting around",
      "phrase": "Necesito un taxi",
      "english": "I need a taxi",
      "pron": "neh-theh-SEE-toh oon TAHK-see"
    },
    {
      "category": "Getting around",
      "phrase": "A que hora sae o autobús?",
      "english": "What time does the bus leave?",
      "pron": "ah KEH OH-rah SAH-eh oh ow-toh-BOOS"
    },
    {
      "category": "Getting around",
      "phrase": "Estou perdido",
      "english": "I am lost",
      "pron": "es-TOH per-DEE-doh"
    },
    {
      "category": "Eating out",
      "phrase": "Unha mesa para dous, por favor",
      "english": "A table for two, please",
      "pron": "OONG-ah MEH-sah PAH-rah DOHS, por fah-BOR"
    },
    {
      "category": "Eating out",
      "phrase": "A carta, por favor",
      "english": "The menu, please",
      "pron": "ah KAR-tah, por fah-BOR"
    },
    {
      "category": "Eating out",
      "phrase": "Que me recomenda?",
      "english": "What do you recommend?",
      "pron": "KEH meh reh-koh-MEHN-dah"
    },
    {
      "category": "Eating out",
      "phrase": "A conta, por favor",
      "english": "The bill, please",
      "pron": "ah KOHN-tah, por fah-BOR"
    },
    {
      "category": "Eating out",
      "phrase": "Estaba delicioso",
      "english": "It was delicious",
      "pron": "es-TAH-bah deh-lee-THYOH-soh"
    },
    {
      "category": "Shopping",
      "phrase": "Canto custa isto?",
      "english": "How much is this?",
      "pron": "KAHN-toh KOOS-tah EES-toh"
    },
    {
      "category": "Shopping",
      "phrase": "Só estou mirando, grazas",
      "english": "I'm just looking, thank you",
      "pron": "SOH es-TOH mee-RAHN-doh, GRAH-thahs"
    },
    {
      "category": "Shopping",
      "phrase": "Podo probalo?",
      "english": "Can I try it on?",
      "pron": "POH-doh proh-BAH-loh"
    },
    {
      "category": "Shopping",
      "phrase": "É demasiado caro",
      "english": "It's too expensive",
      "pron": "EH deh-mah-SYAH-doh KAH-roh"
    },
    {
      "category": "Shopping",
      "phrase": "Acepta tarxetas de crédito?",
      "english": "Do you accept credit cards?",
      "pron": "ah-THEHP-tah tar-SHEH-tahs deh KREH-dee-toh"
    },
    {
      "category": "Emergencies",
      "phrase": "Axuda!",
      "english": "Help!",
      "pron": "ah-SHOO-dah"
    },
    {
      "category": "Emergencies",
      "phrase": "Chame un médico!",
      "english": "Call a doctor!",
      "pron": "CHAH-meh oon MEH-dee-koh"
    },
    {
      "category": "Emergencies",
      "phrase": "Onde está o hospital?",
      "english": "Where is the hospital?",
      "pron": "OHN-deh es-TAH oh os-pee-TAHL"
    },
    {
      "category": "Emergencies",
      "phrase": "Chame a policía!",
      "english": "Call the police!",
      "pron": "CHAH-meh ah poh-lee-THEE-ah"
    },
    {
      "category": "Emergencies",
      "phrase": "Perdín o meu pasaporte",
      "english": "I lost my passport",
      "pron": "per-DEEN oh MEH-oo pah-sah-POR-teh"
    }
  ],
  "hr": [
    {
      "category": "Greetings",
      "phrase": "Bok",
      "english": "Hello",
      "pron": "bok"
    },
    {
      "category": "Greetings",
      "phrase": "Dobro jutro",
      "english": "Good morning",
      "pron": "DOH-broh YOO-troh"
    },
    {
      "category": "Greetings",
      "phrase": "Dobra večer",
      "english": "Good evening",
      "pron": "DOH-brah VEH-cher"
    },
    {
      "category": "Greetings",
      "phrase": "Laku noć",
      "english": "Good night",
      "pron": "LAH-koo nohch"
    },
    {
      "category": "Greetings",
      "phrase": "Doviđenja",
      "english": "Goodbye",
      "pron": "doh-vee-JEH-nya"
    },
    {
      "category": "Basics",
      "phrase": "Molim",
      "english": "Please",
      "pron": "MOH-leem"
    },
    {
      "category": "Basics",
      "phrase": "Hvala",
      "english": "Thank you",
      "pron": "HVAH-lah"
    },
    {
      "category": "Basics",
      "phrase": "Da / Ne",
      "english": "Yes / No",
      "pron": "da / neh"
    },
    {
      "category": "Basics",
      "phrase": "Oprostite",
      "english": "Excuse me",
      "pron": "oh-PROHS-tee-teh"
    },
    {
      "category": "Basics",
      "phrase": "Govorite li engleski?",
      "english": "Do you speak English?",
      "pron": "goh-VOH-ree-teh lee eng-LES-kee"
    },
    {
      "category": "Getting around",
      "phrase": "Gdje je...?",
      "english": "Where is...?",
      "pron": "gdyeh yeh"
    },
    {
      "category": "Getting around",
      "phrase": "Gdje je WC?",
      "english": "Where is the toilet?",
      "pron": "gdyeh yeh VEH-tseh"
    },
    {
      "category": "Getting around",
      "phrase": "Koliko košta karta?",
      "english": "How much is the ticket?",
      "pron": "KOH-lee-koh KOSH-tah KAR-tah"
    },
    {
      "category": "Getting around",
      "phrase": "Želim ići u...",
      "english": "I want to go to...",
      "pron": "ZHEH-leem EE-chee oo"
    },
    {
      "category": "Getting around",
      "phrase": "Stanite ovdje, molim",
      "english": "Stop here, please",
      "pron": "STAH-nee-teh OHV-dyeh MOH-leem"
    },
    {
      "category": "Eating out",
      "phrase": "Stol za dvoje, molim",
      "english": "A table for two, please",
      "pron": "stohl zah DVOH-yeh MOH-leem"
    },
    {
      "category": "Eating out",
      "phrase": "Jelovnik, molim",
      "english": "The menu, please",
      "pron": "YEH-lohv-neek MOH-leem"
    },
    {
      "category": "Eating out",
      "phrase": "Račun, molim",
      "english": "The bill, please",
      "pron": "RAH-choon MOH-leem"
    },
    {
      "category": "Eating out",
      "phrase": "Voda",
      "english": "Water",
      "pron": "VOH-dah"
    },
    {
      "category": "Eating out",
      "phrase": "Živjeli!",
      "english": "Cheers!",
      "pron": "ZHEEV-yeh-lee"
    },
    {
      "category": "Shopping",
      "phrase": "Koliko to košta?",
      "english": "How much is it?",
      "pron": "KOH-lee-koh toh KOSH-tah"
    },
    {
      "category": "Shopping",
      "phrase": "To je preskupo",
      "english": "It's too expensive",
      "pron": "toh yeh preh-SKOO-poh"
    },
    {
      "category": "Shopping",
      "phrase": "Primate li kartice?",
      "english": "Do you accept cards?",
      "pron": "PREE-mah-teh lee KAR-tee-tseh"
    },
    {
      "category": "Shopping",
      "phrase": "Samo gledam",
      "english": "I'm just looking",
      "pron": "SAH-moh GLEH-dahm"
    },
    {
      "category": "Shopping",
      "phrase": "Uzet ću ovo",
      "english": "I'll take this",
      "pron": "OO-zet choo OH-voh"
    },
    {
      "category": "Emergencies",
      "phrase": "Upomoć!",
      "english": "Help!",
      "pron": "OO-poh-mohch"
    },
    {
      "category": "Emergencies",
      "phrase": "Pozovite policiju",
      "english": "Call the police",
      "pron": "poh-ZOH-vee-teh poh-LEE-tsee-yoo"
    },
    {
      "category": "Emergencies",
      "phrase": "Trebam liječnika",
      "english": "I need a doctor",
      "pron": "TREH-bahm LEE-yech-nee-kah"
    },
    {
      "category": "Emergencies",
      "phrase": "Izgubio sam se",
      "english": "I'm lost",
      "pron": "eez-GOO-bee-oh sahm seh"
    },
    {
      "category": "Emergencies",
      "phrase": "Pozovite hitnu pomoć",
      "english": "Call an ambulance",
      "pron": "poh-ZOH-vee-teh HEET-noo POH-mohch"
    }
  ],
  "hu": [
    {
      "category": "Greetings",
      "phrase": "Szia",
      "english": "Hello",
      "pron": "SEE-yah"
    },
    {
      "category": "Greetings",
      "phrase": "Jó reggelt",
      "english": "Good morning",
      "pron": "yoh REG-gelt"
    },
    {
      "category": "Greetings",
      "phrase": "Jó estét",
      "english": "Good evening",
      "pron": "yoh ESH-tayt"
    },
    {
      "category": "Greetings",
      "phrase": "Jó éjszakát",
      "english": "Good night",
      "pron": "yoh AY-sah-kaht"
    },
    {
      "category": "Greetings",
      "phrase": "Viszlát",
      "english": "Goodbye",
      "pron": "VEES-laht"
    },
    {
      "category": "Basics",
      "phrase": "Kérem",
      "english": "Please",
      "pron": "KAY-rem"
    },
    {
      "category": "Basics",
      "phrase": "Köszönöm",
      "english": "Thank you",
      "pron": "KUR-sur-nurm"
    },
    {
      "category": "Basics",
      "phrase": "Igen / Nem",
      "english": "Yes / No",
      "pron": "ee-gen / nem"
    },
    {
      "category": "Basics",
      "phrase": "Elnézést",
      "english": "Excuse me",
      "pron": "EL-nay-zaysht"
    },
    {
      "category": "Basics",
      "phrase": "Beszél angolul?",
      "english": "Do you speak English?",
      "pron": "BEH-sayl AHN-goh-lool"
    },
    {
      "category": "Getting around",
      "phrase": "Hol van...?",
      "english": "Where is...?",
      "pron": "hol vahn"
    },
    {
      "category": "Getting around",
      "phrase": "Hol van a mosdó?",
      "english": "Where is the toilet?",
      "pron": "hol vahn ah MOSH-doh"
    },
    {
      "category": "Getting around",
      "phrase": "Mennyibe kerül a jegy?",
      "english": "How much is the ticket?",
      "pron": "MEN-nyee-beh KEH-rewl ah yedge"
    },
    {
      "category": "Getting around",
      "phrase": "Ide szeretnék menni",
      "english": "I want to go here",
      "pron": "EE-deh SEH-ret-nayk MEN-nee"
    },
    {
      "category": "Getting around",
      "phrase": "Álljon meg itt, kérem",
      "english": "Stop here, please",
      "pron": "AHL-yohn meg it KAY-rem"
    },
    {
      "category": "Eating out",
      "phrase": "Egy asztalt két főre, kérem",
      "english": "A table for two, please",
      "pron": "edge AHS-tahlt kayt FUR-reh KAY-rem"
    },
    {
      "category": "Eating out",
      "phrase": "Az étlapot, kérem",
      "english": "The menu, please",
      "pron": "ahz AYT-lah-poht KAY-rem"
    },
    {
      "category": "Eating out",
      "phrase": "A számlát, kérem",
      "english": "The bill, please",
      "pron": "ah SAHM-laht KAY-rem"
    },
    {
      "category": "Eating out",
      "phrase": "Víz",
      "english": "Water",
      "pron": "veez"
    },
    {
      "category": "Eating out",
      "phrase": "Egészségedre!",
      "english": "Cheers!",
      "pron": "EH-gays-shay-ged-reh"
    },
    {
      "category": "Shopping",
      "phrase": "Mennyibe kerül?",
      "english": "How much is it?",
      "pron": "MEN-nyee-beh KEH-rewl"
    },
    {
      "category": "Shopping",
      "phrase": "Ez túl drága",
      "english": "It's too expensive",
      "pron": "ez tool DRAH-gah"
    },
    {
      "category": "Shopping",
      "phrase": "Elfogadnak bankkártyát?",
      "english": "Do you accept cards?",
      "pron": "EL-foh-gahd-nahk BAHNK-kahr-tyaht"
    },
    {
      "category": "Shopping",
      "phrase": "Csak nézelődöm",
      "english": "I'm just looking",
      "pron": "chahk NAY-zeh-lur-durm"
    },
    {
      "category": "Shopping",
      "phrase": "Ezt kérem",
      "english": "I'll take this",
      "pron": "ezt KAY-rem"
    },
    {
      "category": "Emergencies",
      "phrase": "Segítség!",
      "english": "Help!",
      "pron": "SHEH-geet-shayg"
    },
    {
      "category": "Emergencies",
      "phrase": "Hívja a rendőrséget",
      "english": "Call the police",
      "pron": "HEEV-yah ah REN-dur-shay-get"
    },
    {
      "category": "Emergencies",
      "phrase": "Orvosra van szükségem",
      "english": "I need a doctor",
      "pron": "OHR-vohsh-rah vahn SEWK-shay-gem"
    },
    {
      "category": "Emergencies",
      "phrase": "Eltévedtem",
      "english": "I'm lost",
      "pron": "EL-tay-ved-tem"
    },
    {
      "category": "Emergencies",
      "phrase": "Hívjon mentőt",
      "english": "Call an ambulance",
      "pron": "HEEV-yohn MEN-turt"
    }
  ],
  "hy": [
    {
      "category": "Greetings",
      "phrase": "Բարև ձեզ",
      "english": "Hello",
      "pron": "bah-REV dzez"
    },
    {
      "category": "Greetings",
      "phrase": "Բարի լույս",
      "english": "Good morning",
      "pron": "bah-REE looys"
    },
    {
      "category": "Greetings",
      "phrase": "Բարի երեկո",
      "english": "Good evening",
      "pron": "bah-REE yeh-reh-KOH"
    },
    {
      "category": "Greetings",
      "phrase": "Ցտեսություն",
      "english": "Goodbye",
      "pron": "tseh-teh-soo-TYOON"
    },
    {
      "category": "Greetings",
      "phrase": "Ինչպե՞ս եք",
      "english": "How are you?",
      "pron": "inch-PESS yek"
    },
    {
      "category": "Basics",
      "phrase": "Այո",
      "english": "Yes",
      "pron": "ah-YOH"
    },
    {
      "category": "Basics",
      "phrase": "Ոչ",
      "english": "No",
      "pron": "VOCH"
    },
    {
      "category": "Basics",
      "phrase": "Խնդրեմ",
      "english": "Please",
      "pron": "khen-TREM"
    },
    {
      "category": "Basics",
      "phrase": "Շնորհակալություն",
      "english": "Thank you",
      "pron": "shnor-hah-kah-loo-TYOON"
    },
    {
      "category": "Basics",
      "phrase": "Ես չեմ հասկանում",
      "english": "I don't understand",
      "pron": "yes chem hahs-kah-NOOM"
    },
    {
      "category": "Getting around",
      "phrase": "Որտե՞ղ է",
      "english": "Where is...?",
      "pron": "vor-TEGH eh"
    },
    {
      "category": "Getting around",
      "phrase": "Ինչքա՞ն արժե տոմսը",
      "english": "How much is a ticket?",
      "pron": "inch-KAHN ar-ZHEH TOHM-suh"
    },
    {
      "category": "Getting around",
      "phrase": "Օդանավակայան",
      "english": "Airport",
      "pron": "oh-dah-nah-vah-kah-YAHN"
    },
    {
      "category": "Getting around",
      "phrase": "Ինձ տաքսի է հարկավոր",
      "english": "I need a taxi",
      "pron": "indz tahk-SEE eh har-kah-VOR"
    },
    {
      "category": "Getting around",
      "phrase": "Ուղիղ առաջ",
      "english": "Straight ahead",
      "pron": "oo-GHEEGH ar-RAHJ"
    },
    {
      "category": "Eating out",
      "phrase": "Սեղան երկու հոգու համար, խնդրում եմ",
      "english": "A table for two, please",
      "pron": "seh-GHAHN yer-KOO hoh-GOO hah-MAR, khen-DROOM yem"
    },
    {
      "category": "Eating out",
      "phrase": "Մենյուն, խնդրում եմ",
      "english": "The menu, please",
      "pron": "men-YOON, khen-DROOM yem"
    },
    {
      "category": "Eating out",
      "phrase": "Հաշիվը, խնդրում եմ",
      "english": "The bill, please",
      "pron": "hah-SHEE-vuh, khen-DROOM yem"
    },
    {
      "category": "Eating out",
      "phrase": "Ջուր",
      "english": "Water",
      "pron": "JOOR"
    },
    {
      "category": "Eating out",
      "phrase": "Շատ համեղ էր",
      "english": "It was delicious",
      "pron": "shaht hah-MEGH er"
    },
    {
      "category": "Shopping",
      "phrase": "Սա ինչքա՞ն արժե",
      "english": "How much does this cost?",
      "pron": "sah inch-KAHN ar-ZHEH"
    },
    {
      "category": "Shopping",
      "phrase": "Շատ թանկ է",
      "english": "Too expensive",
      "pron": "shaht tahnk eh"
    },
    {
      "category": "Shopping",
      "phrase": "Կարո՞ղ եմ քարտով վճարել",
      "english": "Can I pay by card?",
      "pron": "kah-ROGH yem kar-TOV vchah-REL"
    },
    {
      "category": "Shopping",
      "phrase": "Ես պարզապես նայում եմ",
      "english": "I'm just looking",
      "pron": "yes par-zah-PESS nah-YOOM yem"
    },
    {
      "category": "Shopping",
      "phrase": "Զեղչ",
      "english": "Discount",
      "pron": "ZEGHCH"
    },
    {
      "category": "Emergencies",
      "phrase": "Օգնեցե՜ք",
      "english": "Help!",
      "pron": "og-neh-TSEK"
    },
    {
      "category": "Emergencies",
      "phrase": "Կանչեք ոստիկանություն",
      "english": "Call the police",
      "pron": "kahn-CHEK vos-tee-kah-noo-TYOON"
    },
    {
      "category": "Emergencies",
      "phrase": "Ինձ բժիշկ է հարկավոր",
      "english": "I need a doctor",
      "pron": "indz buh-ZHEESHK eh har-kah-VOR"
    },
    {
      "category": "Emergencies",
      "phrase": "Զանգահարեք շտապ օգնություն",
      "english": "Call an ambulance",
      "pron": "zahn-gah-hah-REK shtahp og-noo-TYOON"
    },
    {
      "category": "Emergencies",
      "phrase": "Ես մոլորվել եմ",
      "english": "I am lost",
      "pron": "yes moh-lor-VEL yem"
    }
  ],
  "id": [
    {
      "category": "Greetings",
      "phrase": "Halo",
      "english": "Hello",
      "pron": "HAH-loh"
    },
    {
      "category": "Greetings",
      "phrase": "Selamat pagi",
      "english": "Good morning",
      "pron": "seh-LAH-mat PAH-gee"
    },
    {
      "category": "Greetings",
      "phrase": "Selamat malam",
      "english": "Good evening",
      "pron": "seh-LAH-mat MAH-lam"
    },
    {
      "category": "Greetings",
      "phrase": "Apa kabar?",
      "english": "How are you?",
      "pron": "AH-pah KAH-bar"
    },
    {
      "category": "Greetings",
      "phrase": "Selamat tinggal",
      "english": "Goodbye",
      "pron": "seh-LAH-mat TING-gal"
    },
    {
      "category": "Basics",
      "phrase": "Ya",
      "english": "Yes",
      "pron": "yah"
    },
    {
      "category": "Basics",
      "phrase": "Tidak",
      "english": "No",
      "pron": "TEE-dahk"
    },
    {
      "category": "Basics",
      "phrase": "Tolong",
      "english": "Please",
      "pron": "TOH-long"
    },
    {
      "category": "Basics",
      "phrase": "Terima kasih",
      "english": "Thank you",
      "pron": "teh-REE-mah KAH-see"
    },
    {
      "category": "Basics",
      "phrase": "Maaf",
      "english": "Sorry (excuse me)",
      "pron": "MAH-ahf"
    },
    {
      "category": "Getting around",
      "phrase": "Di mana...?",
      "english": "Where is...?",
      "pron": "dee MAH-nah"
    },
    {
      "category": "Getting around",
      "phrase": "Berapa jauh?",
      "english": "How far is it?",
      "pron": "beh-RAH-pah JAH-ooh"
    },
    {
      "category": "Getting around",
      "phrase": "Saya mau ke...",
      "english": "I want to go to...",
      "pron": "SAH-yah MAH-oo keh"
    },
    {
      "category": "Getting around",
      "phrase": "Belok kiri",
      "english": "Turn left",
      "pron": "BEH-lohk KEE-ree"
    },
    {
      "category": "Getting around",
      "phrase": "Belok kanan",
      "english": "Turn right",
      "pron": "BEH-lohk KAH-nahn"
    },
    {
      "category": "Eating out",
      "phrase": "Saya lapar",
      "english": "I'm hungry",
      "pron": "SAH-yah LAH-par"
    },
    {
      "category": "Eating out",
      "phrase": "Minta menu",
      "english": "May I have the menu",
      "pron": "MEEN-tah MEH-noo"
    },
    {
      "category": "Eating out",
      "phrase": "Saya mau pesan ini",
      "english": "I'd like to order this",
      "pron": "SAH-yah MAH-oo PEH-sahn EE-nee"
    },
    {
      "category": "Eating out",
      "phrase": "Enak sekali!",
      "english": "Very delicious!",
      "pron": "EH-nak seh-KAH-lee"
    },
    {
      "category": "Eating out",
      "phrase": "Minta bon",
      "english": "The check, please",
      "pron": "MEEN-tah bohn"
    },
    {
      "category": "Shopping",
      "phrase": "Berapa harganya?",
      "english": "How much does it cost?",
      "pron": "beh-RAH-pah har-GAH-nyah"
    },
    {
      "category": "Shopping",
      "phrase": "Mahal",
      "english": "Expensive",
      "pron": "MAH-hal"
    },
    {
      "category": "Shopping",
      "phrase": "Bisa kurang?",
      "english": "Can you lower the price?",
      "pron": "BEE-sah KOO-rahng"
    },
    {
      "category": "Shopping",
      "phrase": "Saya mau beli ini",
      "english": "I want to buy this",
      "pron": "SAH-yah MAH-oo BEH-lee EE-nee"
    },
    {
      "category": "Shopping",
      "phrase": "Ada warna lain?",
      "english": "Do you have another color?",
      "pron": "AH-dah WAR-nah LAH-in"
    },
    {
      "category": "Emergencies",
      "phrase": "Tolong!",
      "english": "Help!",
      "pron": "TOH-long"
    },
    {
      "category": "Emergencies",
      "phrase": "Saya butuh dokter",
      "english": "I need a doctor",
      "pron": "SAH-yah BOO-too DOHK-ter"
    },
    {
      "category": "Emergencies",
      "phrase": "Panggil polisi",
      "english": "Call the police",
      "pron": "PAHNG-gil poh-LEE-see"
    },
    {
      "category": "Emergencies",
      "phrase": "Saya tersesat",
      "english": "I am lost",
      "pron": "SAH-yah ter-SEH-saht"
    },
    {
      "category": "Emergencies",
      "phrase": "Di mana rumah sakit?",
      "english": "Where is the hospital?",
      "pron": "dee MAH-nah ROO-mah SAH-kit"
    }
  ],
  "is": [
    {
      "category": "Greetings",
      "phrase": "Halló",
      "english": "Hello",
      "pron": "hah-LOH"
    },
    {
      "category": "Greetings",
      "phrase": "Góðan daginn",
      "english": "Good day",
      "pron": "GOH-thahn DAH-yin"
    },
    {
      "category": "Greetings",
      "phrase": "Góða kvöldið",
      "english": "Good evening",
      "pron": "GOH-thah KVURL-tith"
    },
    {
      "category": "Greetings",
      "phrase": "Bless",
      "english": "Goodbye",
      "pron": "BLESS"
    },
    {
      "category": "Greetings",
      "phrase": "Hvernig hefur þú það?",
      "english": "How are you?",
      "pron": "KVER-nikh HEH-vur thoo thah"
    },
    {
      "category": "Basics",
      "phrase": "Já",
      "english": "Yes",
      "pron": "YOW"
    },
    {
      "category": "Basics",
      "phrase": "Nei",
      "english": "No",
      "pron": "NAY"
    },
    {
      "category": "Basics",
      "phrase": "Takk",
      "english": "Thank you",
      "pron": "TAHK"
    },
    {
      "category": "Basics",
      "phrase": "Gjörðu svo vel",
      "english": "Please (here you go / you're welcome)",
      "pron": "GYUR-thu svo vel"
    },
    {
      "category": "Basics",
      "phrase": "Afsakið",
      "english": "Excuse me",
      "pron": "AHF-sah-kith"
    },
    {
      "category": "Getting around",
      "phrase": "Hvar er næsta salerni?",
      "english": "Where is the nearest toilet?",
      "pron": "kvar er NAI-stah SAH-ler-ni"
    },
    {
      "category": "Getting around",
      "phrase": "Hversu langt er þangað?",
      "english": "How far is it?",
      "pron": "KVER-su lowngt er THOWNG-ath"
    },
    {
      "category": "Getting around",
      "phrase": "Talar þú ensku?",
      "english": "Do you speak English?",
      "pron": "TAH-lar thoo EN-sku"
    },
    {
      "category": "Getting around",
      "phrase": "Ég þarf leigubíl",
      "english": "I need a taxi",
      "pron": "yeh tharf LAY-gu-beel"
    },
    {
      "category": "Eating out",
      "phrase": "Borð fyrir tvo, takk",
      "english": "A table for two, please",
      "pron": "borth FIH-rir tvoh tahk"
    },
    {
      "category": "Eating out",
      "phrase": "Get ég fengið matseðilinn?",
      "english": "Can I have the menu?",
      "pron": "get yeh FENG-ith MAHT-seth-i-lin"
    },
    {
      "category": "Eating out",
      "phrase": "Ég ætla að fá þetta",
      "english": "I'll have this",
      "pron": "yeh AIT-lah ath fow THET-tah"
    },
    {
      "category": "Eating out",
      "phrase": "Vatn, takk",
      "english": "Water, please",
      "pron": "vahtn tahk"
    },
    {
      "category": "Eating out",
      "phrase": "Reikninginn, takk",
      "english": "The bill, please",
      "pron": "RAYK-ning-in tahk"
    },
    {
      "category": "Shopping",
      "phrase": "Hvað kostar þetta?",
      "english": "How much does this cost?",
      "pron": "kvath KOS-tar THET-tah"
    },
    {
      "category": "Shopping",
      "phrase": "Get ég borgað með korti?",
      "english": "Can I pay by card?",
      "pron": "get yeh BOR-gath meth KOR-ti"
    },
    {
      "category": "Shopping",
      "phrase": "Þetta er of dýrt",
      "english": "That's too expensive",
      "pron": "THET-tah er of DIRT"
    },
    {
      "category": "Shopping",
      "phrase": "Má ég fá kvittun?",
      "english": "Can I have a receipt?",
      "pron": "mow yeh fow KVIT-tun"
    },
    {
      "category": "Shopping",
      "phrase": "Ég er bara að skoða",
      "english": "I'm just looking",
      "pron": "yeh er BAH-rah ath SKO-thah"
    },
    {
      "category": "Emergencies",
      "phrase": "Hjálp!",
      "english": "Help!",
      "pron": "HYOWLP"
    },
    {
      "category": "Emergencies",
      "phrase": "Hringdu í lögregluna",
      "english": "Call the police",
      "pron": "HRING-du ee LUR-greg-lu-nah"
    },
    {
      "category": "Emergencies",
      "phrase": "Ég þarf lækni",
      "english": "I need a doctor",
      "pron": "yeh tharf LAIK-ni"
    },
    {
      "category": "Emergencies",
      "phrase": "Hvar er sjúkrahúsið?",
      "english": "Where is the hospital?",
      "pron": "kvar er SHOO-krah-HOO-sith"
    },
    {
      "category": "Emergencies",
      "phrase": "Ég er týndur",
      "english": "I am lost",
      "pron": "yeh er TIN-dur"
    }
  ],
  "ka": [
    {
      "category": "Greetings",
      "phrase": "გამარჯობა",
      "english": "Hello",
      "pron": "GAH-mar-joh-bah"
    },
    {
      "category": "Greetings",
      "phrase": "დილა მშვიდობისა",
      "english": "Good morning",
      "pron": "DEE-lah MSHVEE-doh-bee-sah"
    },
    {
      "category": "Greetings",
      "phrase": "საღამო მშვიდობისა",
      "english": "Good evening",
      "pron": "SAH-ghah-moh MSHVEE-doh-bee-sah"
    },
    {
      "category": "Greetings",
      "phrase": "ნახვამდის",
      "english": "Goodbye",
      "pron": "NAHKH-vahm-dees"
    },
    {
      "category": "Greetings",
      "phrase": "როგორ ხართ?",
      "english": "How are you?",
      "pron": "ROH-gor khart"
    },
    {
      "category": "Basics",
      "phrase": "გმადლობთ",
      "english": "Thank you",
      "pron": "GMAHD-lobt"
    },
    {
      "category": "Basics",
      "phrase": "თუ შეიძლება",
      "english": "Please",
      "pron": "TOO shay-EEDZ-leh-bah"
    },
    {
      "category": "Basics",
      "phrase": "კი / არა",
      "english": "Yes / No",
      "pron": "KEE / AH-rah"
    },
    {
      "category": "Basics",
      "phrase": "უკაცრავად",
      "english": "Excuse me",
      "pron": "OO-kats-rah-vahd"
    },
    {
      "category": "Basics",
      "phrase": "ვერ გავიგე",
      "english": "I don't understand",
      "pron": "VER gah-VEE-geh"
    },
    {
      "category": "Getting around",
      "phrase": "სად არის...?",
      "english": "Where is...?",
      "pron": "SAHD AH-rees"
    },
    {
      "category": "Getting around",
      "phrase": "სად არის ავტობუსის გაჩერება?",
      "english": "Where is the bus stop?",
      "pron": "SAHD AH-rees ahv-TOH-boo-sees gah-CHEH-reh-bah"
    },
    {
      "category": "Getting around",
      "phrase": "სად შემიძლია ტაქსი ავიღო?",
      "english": "Where can I get a taxi?",
      "pron": "SAHD sheh-MEEDZ-lee-ah TAHK-see ah-VEE-gho"
    },
    {
      "category": "Getting around",
      "phrase": "რა ღირს ბილეთი?",
      "english": "How much is the ticket?",
      "pron": "RAH gheers bee-LEH-tee"
    },
    {
      "category": "Getting around",
      "phrase": "მარცხნივ / მარჯვნივ",
      "english": "Left / Right",
      "pron": "MARTS-khneev / MARJ-vneev"
    },
    {
      "category": "Eating out",
      "phrase": "მაგიდა ორისთვის, თუ შეიძლება",
      "english": "A table for two, please",
      "pron": "mah-GEE-dah oh-REES-tvees too shay-EEDZ-leh-bah"
    },
    {
      "category": "Eating out",
      "phrase": "მენიუ, თუ შეიძლება",
      "english": "The menu, please",
      "pron": "meh-NEE-oo too shay-EEDZ-leh-bah"
    },
    {
      "category": "Eating out",
      "phrase": "ანგარიში, თუ შეიძლება",
      "english": "The bill, please",
      "pron": "ahn-gah-REE-shee too shay-EEDZ-leh-bah"
    },
    {
      "category": "Eating out",
      "phrase": "წყალი",
      "english": "Water",
      "pron": "TSKAH-lee"
    },
    {
      "category": "Shopping",
      "phrase": "რა ღირს?",
      "english": "How much does this cost?",
      "pron": "rah GHEERS"
    },
    {
      "category": "Shopping",
      "phrase": "ეს ძალიან ძვირია",
      "english": "It's too expensive",
      "pron": "ES dzah-lee-AHN DZVEE-ree-ah"
    },
    {
      "category": "Shopping",
      "phrase": "იაფი",
      "english": "Cheap",
      "pron": "ee-AH-fee"
    },
    {
      "category": "Shopping",
      "phrase": "შემიძლია ბარათით გადახდა?",
      "english": "Can I pay by card?",
      "pron": "sheh-MEEDZ-lee-ah bah-RAH-teet gah-DAKH-dah"
    },
    {
      "category": "Shopping",
      "phrase": "უბრალოდ ვათვალიერებ",
      "english": "I'm just looking",
      "pron": "oo-BRAH-lod vaht-vah-lee-EH-reb"
    },
    {
      "category": "Emergencies",
      "phrase": "მიშველეთ!",
      "english": "Help!",
      "pron": "mee-shveh-LET"
    },
    {
      "category": "Emergencies",
      "phrase": "პოლიცია გამოიძახეთ!",
      "english": "Call the police!",
      "pron": "poh-LEE-tsee-ah gah-moh-EE-dzah-khet"
    },
    {
      "category": "Emergencies",
      "phrase": "სასწრაფო გამოიძახეთ!",
      "english": "Call an ambulance!",
      "pron": "sahs-TSRAH-poh gah-moh-EE-dzah-khet"
    },
    {
      "category": "Emergencies",
      "phrase": "ექიმი მჭირდება",
      "english": "I need a doctor",
      "pron": "eh-KEE-mee MCHEER-deh-bah"
    },
    {
      "category": "Emergencies",
      "phrase": "დავიკარგე",
      "english": "I'm lost",
      "pron": "dah-vee-KAHR-geh"
    }
  ],
  "kk": [
    {
      "category": "Greetings",
      "phrase": "Сәлеметсіз бе?",
      "english": "Hello",
      "pron": "sa-le-met-SIZ beh"
    },
    {
      "category": "Greetings",
      "phrase": "Қайырлы таң!",
      "english": "Good morning",
      "pron": "kai-yr-LUH tang"
    },
    {
      "category": "Greetings",
      "phrase": "Қайырлы кеш!",
      "english": "Good evening",
      "pron": "kai-yr-LUH kesh"
    },
    {
      "category": "Greetings",
      "phrase": "Сау болыңыз!",
      "english": "Goodbye",
      "pron": "sow bo-luh-NGUZ"
    },
    {
      "category": "Greetings",
      "phrase": "Қалайсыз?",
      "english": "How are you?",
      "pron": "ka-lai-SUZ"
    },
    {
      "category": "Basics",
      "phrase": "Иә / Жоқ",
      "english": "Yes / No",
      "pron": "i-YA / zhok"
    },
    {
      "category": "Basics",
      "phrase": "Өтінемін",
      "english": "Please",
      "pron": "ur-ti-ne-MIN"
    },
    {
      "category": "Basics",
      "phrase": "Рахмет",
      "english": "Thank you",
      "pron": "rakh-MET"
    },
    {
      "category": "Basics",
      "phrase": "Кешіріңіз",
      "english": "Excuse me / Sorry",
      "pron": "ke-shi-ri-NGIZ"
    },
    {
      "category": "Basics",
      "phrase": "Ағылшынша сөйлейсіз бе?",
      "english": "Do you speak English?",
      "pron": "a-ghul-shun-SHA soi-lay-SIZ beh"
    },
    {
      "category": "Getting around",
      "phrase": "Қонақ үй қайда?",
      "english": "Where is the hotel?",
      "pron": "ko-nak-UY KAI-da"
    },
    {
      "category": "Getting around",
      "phrase": "Дәретхана қайда?",
      "english": "Where is the toilet?",
      "pron": "da-ret-kha-NA KAI-da"
    },
    {
      "category": "Getting around",
      "phrase": "Билет қанша тұрады?",
      "english": "How much is the ticket?",
      "pron": "bee-LET kan-SHA too-ra-DUH"
    },
    {
      "category": "Getting around",
      "phrase": "Мен әуежайға барғым келеді",
      "english": "I want to go to the airport",
      "pron": "men a-we-zhai-GHA bar-GHUM ke-le-DI"
    },
    {
      "category": "Getting around",
      "phrase": "Мұнда тоқтаңыз",
      "english": "Stop here, please",
      "pron": "MOON-da tok-ta-NGUZ"
    },
    {
      "category": "Eating out",
      "phrase": "Екі адамға үстел, өтінемін",
      "english": "A table for two, please",
      "pron": "e-KI a-dam-GHA us-TEL ur-ti-ne-MIN"
    },
    {
      "category": "Eating out",
      "phrase": "Мәзір, өтінемін",
      "english": "The menu, please",
      "pron": "ma-ZIR ur-ti-ne-MIN"
    },
    {
      "category": "Eating out",
      "phrase": "Шот, өтінемін",
      "english": "The bill, please",
      "pron": "shot ur-ti-ne-MIN"
    },
    {
      "category": "Eating out",
      "phrase": "Су",
      "english": "Water",
      "pron": "soo"
    },
    {
      "category": "Eating out",
      "phrase": "Денсаулыққа!",
      "english": "Cheers!",
      "pron": "den-sow-luh-KA"
    },
    {
      "category": "Shopping",
      "phrase": "Бұл қанша тұрады?",
      "english": "How much is it?",
      "pron": "bool kan-SHA too-ra-DUH"
    },
    {
      "category": "Shopping",
      "phrase": "Бұл тым қымбат",
      "english": "It's too expensive",
      "pron": "bool tuhm kuhm-BAT"
    },
    {
      "category": "Shopping",
      "phrase": "Карта қабылдайсыз ба?",
      "english": "Do you accept cards?",
      "pron": "kar-TA ka-buhl-dai-SUZ ba"
    },
    {
      "category": "Shopping",
      "phrase": "Мен жай ғана қарап жүрмін",
      "english": "I'm just looking",
      "pron": "men zhai gha-NA ka-RAP zhur-MIN"
    },
    {
      "category": "Shopping",
      "phrase": "Мен мұны аламын",
      "english": "I'll take this one",
      "pron": "men moo-NUH a-la-MUN"
    },
    {
      "category": "Emergencies",
      "phrase": "Көмектесіңіз!",
      "english": "Help!",
      "pron": "ku-mek-te-si-NGIZ"
    },
    {
      "category": "Emergencies",
      "phrase": "Полицияны шақырыңыз!",
      "english": "Call the police",
      "pron": "po-li-tsi-ya-NUH sha-ku-ru-NGUZ"
    },
    {
      "category": "Emergencies",
      "phrase": "Маған дәрігер керек",
      "english": "I need a doctor",
      "pron": "ma-GHAN da-ri-GER ke-REK"
    },
    {
      "category": "Emergencies",
      "phrase": "Мен адасып қалдым",
      "english": "I'm lost",
      "pron": "men a-da-SUP kal-DUM"
    },
    {
      "category": "Emergencies",
      "phrase": "Жедел жәрдем шақырыңыз!",
      "english": "Call an ambulance",
      "pron": "zhe-DEL zhar-DEM sha-ku-ru-NGUZ"
    }
  ],
  "ky": [
    {
      "category": "Greetings",
      "phrase": "Салам!",
      "english": "Hello!",
      "pron": "sa-LAM"
    },
    {
      "category": "Greetings",
      "phrase": "Саламатсызбы?",
      "english": "Hello (formal)",
      "pron": "sa-la-mat-SYZ-by"
    },
    {
      "category": "Greetings",
      "phrase": "Кош келиңиз!",
      "english": "Welcome!",
      "pron": "kosh ke-li-NGIZ"
    },
    {
      "category": "Greetings",
      "phrase": "Кош болуңуз!",
      "english": "Goodbye! (formal)",
      "pron": "kosh bo-lu-NGUZ"
    },
    {
      "category": "Greetings",
      "phrase": "Кандайсыз?",
      "english": "How are you? (formal)",
      "pron": "kan-dai-SYZ"
    },
    {
      "category": "Basics",
      "phrase": "Ооба",
      "english": "Yes",
      "pron": "O-ba"
    },
    {
      "category": "Basics",
      "phrase": "Жок",
      "english": "No",
      "pron": "ZHOK"
    },
    {
      "category": "Basics",
      "phrase": "Рахмат",
      "english": "Thank you",
      "pron": "rah-MAT"
    },
    {
      "category": "Basics",
      "phrase": "Сураныч",
      "english": "Please",
      "pron": "su-ra-NYCH"
    },
    {
      "category": "Basics",
      "phrase": "Кечиресиз",
      "english": "Excuse me, sorry",
      "pron": "ke-chi-re-SIZ"
    },
    {
      "category": "Getting around",
      "phrase": "Даараткана кайда?",
      "english": "Where is the toilet?",
      "pron": "daa-rat-ka-NA kai-DA"
    },
    {
      "category": "Getting around",
      "phrase": "Автобус аялдамасы кайда?",
      "english": "Where is the bus stop?",
      "pron": "av-to-BUS a-yal-da-ma-SY kai-DA"
    },
    {
      "category": "Getting around",
      "phrase": "Такси керек.",
      "english": "I need a taxi.",
      "pron": "tak-SI ke-REK"
    },
    {
      "category": "Getting around",
      "phrase": "Мен аэропортко баргым келет.",
      "english": "I want to go to the airport.",
      "pron": "men a-e-ro-port-KO bar-GYM ke-LET"
    },
    {
      "category": "Getting around",
      "phrase": "Токтотуңуз, сураныч!",
      "english": "Stop here, please!",
      "pron": "tok-to-tu-NGUZ, su-ra-NYCH"
    },
    {
      "category": "Eating out",
      "phrase": "Менюну көрсөтө аласызбы?",
      "english": "Can you show me the menu?",
      "pron": "me-nyu-NU kör-sö-TÖ a-la-SYZ-by"
    },
    {
      "category": "Eating out",
      "phrase": "Суу, сураныч.",
      "english": "Water, please.",
      "pron": "SOO, su-ra-NYCH"
    },
    {
      "category": "Eating out",
      "phrase": "Даамдуу экен!",
      "english": "It's delicious!",
      "pron": "daam-DUU e-KEN"
    },
    {
      "category": "Eating out",
      "phrase": "Мен жаңгакка аллергиям бар.",
      "english": "I'm allergic to nuts.",
      "pron": "men zhang-gak-KA al-ler-gi-YAM BAR"
    },
    {
      "category": "Eating out",
      "phrase": "Эсеп бериңиз.",
      "english": "The bill, please.",
      "pron": "e-SEP be-ri-NGIZ"
    },
    {
      "category": "Shopping",
      "phrase": "Бул канча турат?",
      "english": "How much does this cost?",
      "pron": "bul kan-CHA tu-RAT"
    },
    {
      "category": "Shopping",
      "phrase": "Бааны төмөндөтө аласызбы?",
      "english": "Can you lower the price?",
      "pron": "baa-NY tö-mön-dö-TÖ a-la-SYZ-by"
    },
    {
      "category": "Shopping",
      "phrase": "Мен кредиттик карта менен төлөй аламбы?",
      "english": "Can I pay by credit card?",
      "pron": "men kre-DIT-tik kar-TA me-NEN tö-LÖY a-LAM-by"
    },
    {
      "category": "Shopping",
      "phrase": "Мен муну аламын.",
      "english": "I'll take this.",
      "pron": "men mu-NU a-la-MYN"
    },
    {
      "category": "Shopping",
      "phrase": "Башка түстөр барбы?",
      "english": "Do you have other colors?",
      "pron": "bash-KA tüs-TÖR BAR-by"
    },
    {
      "category": "Emergencies",
      "phrase": "Жардамга!",
      "english": "Help!",
      "pron": "zhar-dam-GA"
    },
    {
      "category": "Emergencies",
      "phrase": "Мен адашып калдым.",
      "english": "I'm lost.",
      "pron": "men a-da-SHYP kal-DYM"
    },
    {
      "category": "Emergencies",
      "phrase": "Мага доктур керек.",
      "english": "I need a doctor.",
      "pron": "ma-GA dok-TUR ke-REK"
    },
    {
      "category": "Emergencies",
      "phrase": "Тез жардам чакырыңыз!",
      "english": "Call an ambulance!",
      "pron": "tez zhar-DAM cha-ky-ry-NGYZ"
    },
    {
      "category": "Emergencies",
      "phrase": "Полицияны чакырыңыз!",
      "english": "Call the police!",
      "pron": "po-li-tsi-ya-NY cha-ky-ry-NGYZ"
    }
  ],
  "lt": [
    {
      "category": "Greetings",
      "phrase": "Labas",
      "english": "Hello",
      "pron": "LAH-bas"
    },
    {
      "category": "Greetings",
      "phrase": "Laba diena",
      "english": "Good day",
      "pron": "LAH-ba dyeh-NA"
    },
    {
      "category": "Greetings",
      "phrase": "Labas rytas",
      "english": "Good morning",
      "pron": "LAH-bas REE-tas"
    },
    {
      "category": "Greetings",
      "phrase": "Labas vakaras",
      "english": "Good evening",
      "pron": "LAH-bas VAH-ka-ras"
    },
    {
      "category": "Greetings",
      "phrase": "Viso gero",
      "english": "Goodbye",
      "pron": "VEE-so GEH-ro"
    },
    {
      "category": "Basics",
      "phrase": "Taip / Ne",
      "english": "Yes / No",
      "pron": "type / neh"
    },
    {
      "category": "Basics",
      "phrase": "Prašau",
      "english": "Please",
      "pron": "pra-SHOW"
    },
    {
      "category": "Basics",
      "phrase": "Ačiū",
      "english": "Thank you",
      "pron": "AH-choo"
    },
    {
      "category": "Basics",
      "phrase": "Atsiprašau",
      "english": "Excuse me",
      "pron": "aht-see-pra-SHOW"
    },
    {
      "category": "Basics",
      "phrase": "Ar kalbate angliškai?",
      "english": "Do you speak English?",
      "pron": "ar KAL-ba-te ANG-lish-kai"
    },
    {
      "category": "Getting around",
      "phrase": "Kur yra...?",
      "english": "Where is...?",
      "pron": "koor EE-ra"
    },
    {
      "category": "Getting around",
      "phrase": "Kur yra tualetas?",
      "english": "Where is the toilet?",
      "pron": "koor EE-ra twah-LEH-tas"
    },
    {
      "category": "Getting around",
      "phrase": "Kiek kainuoja bilietas?",
      "english": "How much is the ticket?",
      "pron": "kyek KAI-nwoh-ya bee-LYEH-tas"
    },
    {
      "category": "Getting around",
      "phrase": "Noriu vykti į...",
      "english": "I want to go to...",
      "pron": "NOH-ryoo VEEK-tee ee"
    },
    {
      "category": "Getting around",
      "phrase": "Sustokite čia, prašau",
      "english": "Stop here, please",
      "pron": "soo-STOH-kee-te chya pra-SHOW"
    },
    {
      "category": "Eating out",
      "phrase": "Stalą dviem, prašau",
      "english": "A table for two, please",
      "pron": "STAH-la dvyem pra-SHOW"
    },
    {
      "category": "Eating out",
      "phrase": "Valgiaraštį, prašau",
      "english": "The menu, please",
      "pron": "val-gya-RASH-tee pra-SHOW"
    },
    {
      "category": "Eating out",
      "phrase": "Sąskaitą, prašau",
      "english": "The bill, please",
      "pron": "sas-KAI-ta pra-SHOW"
    },
    {
      "category": "Eating out",
      "phrase": "Vanduo",
      "english": "Water",
      "pron": "van-DWO"
    },
    {
      "category": "Eating out",
      "phrase": "Į sveikatą!",
      "english": "Cheers!",
      "pron": "ee svay-KA-ta"
    },
    {
      "category": "Shopping",
      "phrase": "Kiek tai kainuoja?",
      "english": "How much is it?",
      "pron": "kyek tie KAI-nwoh-ya"
    },
    {
      "category": "Shopping",
      "phrase": "Tai per brangu",
      "english": "It's too expensive",
      "pron": "tie per BRAN-goo"
    },
    {
      "category": "Shopping",
      "phrase": "Ar priimate korteles?",
      "english": "Do you accept cards?",
      "pron": "ar pree-EE-ma-te kor-TEH-les"
    },
    {
      "category": "Shopping",
      "phrase": "Aš tik žiūriu",
      "english": "I'm just looking",
      "pron": "ash tik ZHOO-ryoo"
    },
    {
      "category": "Shopping",
      "phrase": "Imu šitą",
      "english": "I'll take this one",
      "pron": "EE-moo SHEE-ta"
    },
    {
      "category": "Emergencies",
      "phrase": "Gelbėkite!",
      "english": "Help!",
      "pron": "GEL-bay-kee-te"
    },
    {
      "category": "Emergencies",
      "phrase": "Iškvieskite policiją",
      "english": "Call the police",
      "pron": "eesh-KVYES-kee-te po-lee-TSEE-ya"
    },
    {
      "category": "Emergencies",
      "phrase": "Man reikia gydytojo",
      "english": "I need a doctor",
      "pron": "man RAY-kya gee-dee-TOH-yo"
    },
    {
      "category": "Emergencies",
      "phrase": "Aš pasiklydau",
      "english": "I'm lost",
      "pron": "ash pah-see-KLEE-dow"
    },
    {
      "category": "Emergencies",
      "phrase": "Iškvieskite greitąją pagalbą",
      "english": "Call an ambulance",
      "pron": "eesh-KVYES-kee-te GRAY-ta-ya pah-GAL-ba"
    }
  ],
  "lv": [
    {
      "category": "Greetings",
      "phrase": "Sveiki!",
      "english": "Hello",
      "pron": "SVAY-kee"
    },
    {
      "category": "Greetings",
      "phrase": "Labrīt!",
      "english": "Good morning",
      "pron": "LAHB-reet"
    },
    {
      "category": "Greetings",
      "phrase": "Labvakar!",
      "english": "Good evening",
      "pron": "LAHB-vah-kahr"
    },
    {
      "category": "Greetings",
      "phrase": "Kā jums klājas?",
      "english": "How are you? (formal)",
      "pron": "KAA yums KLAA-yahs"
    },
    {
      "category": "Greetings",
      "phrase": "Uz redzēšanos!",
      "english": "Goodbye",
      "pron": "uz REH-dzeh-shah-nohs"
    },
    {
      "category": "Basics",
      "phrase": "Lūdzu",
      "english": "Please",
      "pron": "LOO-dzoo"
    },
    {
      "category": "Basics",
      "phrase": "Paldies",
      "english": "Thank you",
      "pron": "PAHL-dee-ess"
    },
    {
      "category": "Basics",
      "phrase": "Jā",
      "english": "Yes",
      "pron": "YAA"
    },
    {
      "category": "Basics",
      "phrase": "Nē",
      "english": "No",
      "pron": "NEH"
    },
    {
      "category": "Basics",
      "phrase": "Atvainojiet",
      "english": "Excuse me / Sorry",
      "pron": "AHT-vye-noh-yeht"
    },
    {
      "category": "Getting around",
      "phrase": "Kur ir tualete?",
      "english": "Where is the toilet?",
      "pron": "KOOR eer TOO-ah-leh-teh"
    },
    {
      "category": "Getting around",
      "phrase": "Kur ir stacija?",
      "english": "Where is the station?",
      "pron": "KOOR eer STAH-tsee-yah"
    },
    {
      "category": "Getting around",
      "phrase": "Cik tālu ir lidosta?",
      "english": "How far is the airport?",
      "pron": "TSIK TAA-loo eer LEE-dohs-tah"
    },
    {
      "category": "Getting around",
      "phrase": "Pa labi",
      "english": "To the right",
      "pron": "pah LAH-bee"
    },
    {
      "category": "Getting around",
      "phrase": "Taisni",
      "english": "Straight ahead",
      "pron": "TICE-nee"
    },
    {
      "category": "Eating out",
      "phrase": "Ēdienkarti, lūdzu",
      "english": "The menu, please",
      "pron": "EH-dee-en-kar-tee, LOO-dzoo"
    },
    {
      "category": "Eating out",
      "phrase": "Es vēlētos pasūtīt...",
      "english": "I would like to order...",
      "pron": "es VEH-leh-tohs pah-SOO-teet"
    },
    {
      "category": "Eating out",
      "phrase": "Ūdeni, lūdzu",
      "english": "Water, please",
      "pron": "OO-deh-nee, LOO-dzoo"
    },
    {
      "category": "Eating out",
      "phrase": "Rēķinu, lūdzu",
      "english": "The bill, please",
      "pron": "REH-kyi-noo, LOO-dzoo"
    },
    {
      "category": "Eating out",
      "phrase": "Labu apetīti!",
      "english": "Enjoy your meal!",
      "pron": "LAH-boo AH-peh-tee-tee"
    },
    {
      "category": "Shopping",
      "phrase": "Cik tas maksā?",
      "english": "How much does it cost?",
      "pron": "TSIK tahs MAHK-saa"
    },
    {
      "category": "Shopping",
      "phrase": "Vai jums ir...?",
      "english": "Do you have...?",
      "pron": "vai yums EER"
    },
    {
      "category": "Shopping",
      "phrase": "Tas ir pārāk dārgi",
      "english": "That's too expensive",
      "pron": "tahs eer PAA-raak DAAR-gee"
    },
    {
      "category": "Shopping",
      "phrase": "Es tikai skatos",
      "english": "I'm just looking",
      "pron": "es TEE-kai SKAH-tohs"
    },
    {
      "category": "Shopping",
      "phrase": "Vai varu maksāt ar karti?",
      "english": "Can I pay by card?",
      "pron": "vai VAH-roo MAHK-saat ar KAHR-tee"
    },
    {
      "category": "Emergencies",
      "phrase": "Palīgā!",
      "english": "Help!",
      "pron": "PAH-lee-gaa"
    },
    {
      "category": "Emergencies",
      "phrase": "Izsauciet ātro palīdzību!",
      "english": "Call an ambulance!",
      "pron": "IZ-sow-tsee-et AA-troh PAH-lee-dzee-boo"
    },
    {
      "category": "Emergencies",
      "phrase": "Izsauciet policiju!",
      "english": "Call the police!",
      "pron": "IZ-sow-tsee-et POH-lee-tsee-yoo"
    },
    {
      "category": "Emergencies",
      "phrase": "Man vajag ārstu",
      "english": "I need a doctor",
      "pron": "man VAH-yahg AAR-stoo"
    },
    {
      "category": "Emergencies",
      "phrase": "Es esmu apmaldījies / apmaldījusies",
      "english": "I am lost (male/female)",
      "pron": "es EHS-moo AHP-mahl-dee-yes / AHP-mahl-dee-yoo-syes"
    }
  ],
  "mk": [
    {
      "category": "Greetings",
      "phrase": "Здраво!",
      "english": "Hello",
      "pron": "ZDRAH-voh"
    },
    {
      "category": "Greetings",
      "phrase": "Добро утро",
      "english": "Good morning",
      "pron": "DOH-broh OO-troh"
    },
    {
      "category": "Greetings",
      "phrase": "Добар ден",
      "english": "Good afternoon",
      "pron": "DOH-bar DEN"
    },
    {
      "category": "Greetings",
      "phrase": "Добра вечер",
      "english": "Good evening",
      "pron": "DOH-brah VEH-chehr"
    },
    {
      "category": "Greetings",
      "phrase": "Довидување!",
      "english": "Goodbye",
      "pron": "doh-vee-DOO-vah-nyeh"
    },
    {
      "category": "Basics",
      "phrase": "Да",
      "english": "Yes",
      "pron": "dah"
    },
    {
      "category": "Basics",
      "phrase": "Не",
      "english": "No",
      "pron": "neh"
    },
    {
      "category": "Basics",
      "phrase": "Ве молам!",
      "english": "Please",
      "pron": "veh MOH-lahm"
    },
    {
      "category": "Basics",
      "phrase": "Благодарам",
      "english": "Thank you",
      "pron": "blah-GOH-dah-rahm"
    },
    {
      "category": "Basics",
      "phrase": "Извинете",
      "english": "Excuse me",
      "pron": "eez-VEE-neh-teh"
    },
    {
      "category": "Getting around",
      "phrase": "Каде е...?",
      "english": "Where is...?",
      "pron": "KAH-deh eh"
    },
    {
      "category": "Getting around",
      "phrase": "Такси",
      "english": "Taxi",
      "pron": "TAHK-see"
    },
    {
      "category": "Getting around",
      "phrase": "Автобус",
      "english": "Bus",
      "pron": "ahv-TOH-boos"
    },
    {
      "category": "Getting around",
      "phrase": "Лево",
      "english": "Left",
      "pron": "LEH-voh"
    },
    {
      "category": "Getting around",
      "phrase": "Десно",
      "english": "Right",
      "pron": "DEHS-noh"
    },
    {
      "category": "Eating out",
      "phrase": "Менито, ве молам",
      "english": "The menu, please",
      "pron": "meh-NEE-toh, veh MOH-lahm"
    },
    {
      "category": "Eating out",
      "phrase": "Сметката, ве молам",
      "english": "The bill, please",
      "pron": "SMEHT-kah-tah, veh MOH-lahm"
    },
    {
      "category": "Eating out",
      "phrase": "Вода",
      "english": "Water",
      "pron": "VOH-dah"
    },
    {
      "category": "Eating out",
      "phrase": "Вкусно!",
      "english": "Delicious!",
      "pron": "VKOOS-noh"
    },
    {
      "category": "Eating out",
      "phrase": "Не јадам месо",
      "english": "I don't eat meat",
      "pron": "neh YAH-dahm MEH-soh"
    },
    {
      "category": "Shopping",
      "phrase": "Колку чини ова?",
      "english": "How much is this?",
      "pron": "KOL-koo CHEE-nee OH-vah"
    },
    {
      "category": "Shopping",
      "phrase": "Скапо",
      "english": "Expensive",
      "pron": "SKAH-poh"
    },
    {
      "category": "Shopping",
      "phrase": "Евтино",
      "english": "Cheap",
      "pron": "ehv-TEE-noh"
    },
    {
      "category": "Shopping",
      "phrase": "Само гледам",
      "english": "I'm just looking",
      "pron": "SAH-moh GLEH-dahm"
    },
    {
      "category": "Shopping",
      "phrase": "Прифаќате картички?",
      "english": "Do you accept cards?",
      "pron": "pree-FAH-kya-teh KAR-teech-kee"
    },
    {
      "category": "Emergencies",
      "phrase": "Помош!",
      "english": "Help!",
      "pron": "POH-mosh"
    },
    {
      "category": "Emergencies",
      "phrase": "Ми треба лекар",
      "english": "I need a doctor",
      "pron": "mee TREH-bah LEH-kahr"
    },
    {
      "category": "Emergencies",
      "phrase": "Викнете полиција!",
      "english": "Call the police!",
      "pron": "VEEK-neh-teh poh-LEE-tsyah"
    },
    {
      "category": "Emergencies",
      "phrase": "Се загубив",
      "english": "I am lost",
      "pron": "seh zah-GOO-beef"
    },
    {
      "category": "Emergencies",
      "phrase": "Пожар!",
      "english": "Fire!",
      "pron": "POH-zhahr"
    }
  ],
  "mn": [
    {
      "category": "Greetings",
      "phrase": "Сайн байна уу?",
      "english": "Hello",
      "pron": "sain BAI-na uu"
    },
    {
      "category": "Greetings",
      "phrase": "Сайн уу?",
      "english": "Hi",
      "pron": "sain uu"
    },
    {
      "category": "Greetings",
      "phrase": "Баяртай",
      "english": "Goodbye",
      "pron": "BA-yar-tai"
    },
    {
      "category": "Greetings",
      "phrase": "Өглөөний мэнд",
      "english": "Good morning",
      "pron": "ög-LÖÖ-nii mend"
    },
    {
      "category": "Greetings",
      "phrase": "Оройн мэнд",
      "english": "Good evening",
      "pron": "o-ROYN mend"
    },
    {
      "category": "Basics",
      "phrase": "Баярлалаа",
      "english": "Thank you",
      "pron": "ba-yar-la-LAA"
    },
    {
      "category": "Basics",
      "phrase": "Тийм",
      "english": "Yes",
      "pron": "tiim"
    },
    {
      "category": "Basics",
      "phrase": "Үгүй",
      "english": "No",
      "pron": "Ü-güi"
    },
    {
      "category": "Basics",
      "phrase": "Уучлаарай",
      "english": "Excuse me",
      "pron": "UUCH-laa-rai"
    },
    {
      "category": "Basics",
      "phrase": "Би ойлгохгүй байна",
      "english": "I don't understand",
      "pron": "bi OIL-gokh-güi BAI-na"
    },
    {
      "category": "Getting around",
      "phrase": "Нисэх онгоцны буудал хаана байдаг вэ?",
      "english": "Where is the airport?",
      "pron": "NI-sekh ON-gots-ny BUU-dal KHAA-na BAI-dag ve"
    },
    {
      "category": "Getting around",
      "phrase": "Такси дуудаж өгнө үү?",
      "english": "Could you call a taxi, please?",
      "pron": "TAK-si DUU-daj ÖG-nö üü"
    },
    {
      "category": "Getting around",
      "phrase": "Зүүн тийшээ эргэ",
      "english": "Turn left",
      "pron": "züün TII-shee ER-ge"
    },
    {
      "category": "Getting around",
      "phrase": "Баруун тийшээ эргэ",
      "english": "Turn right",
      "pron": "ba-RUUN TII-shee ER-ge"
    },
    {
      "category": "Getting around",
      "phrase": "Чигээрээ",
      "english": "Straight ahead",
      "pron": "chi-GEE-ree"
    },
    {
      "category": "Eating out",
      "phrase": "Цэс өгнө үү?",
      "english": "Could I have the menu, please?",
      "pron": "tses ÖG-nö üü"
    },
    {
      "category": "Eating out",
      "phrase": "Нэхэмжлэх өгнө үү?",
      "english": "Could I have the bill, please?",
      "pron": "NE-khemj-lekh ÖG-nö üü"
    },
    {
      "category": "Eating out",
      "phrase": "Ус өгнө үү?",
      "english": "Could I have some water, please?",
      "pron": "us ÖG-nö üü"
    },
    {
      "category": "Eating out",
      "phrase": "Маш амттай байна",
      "english": "It's very delicious",
      "pron": "mash AM-tai BAI-na"
    },
    {
      "category": "Eating out",
      "phrase": "Би мах иддэггүй",
      "english": "I don't eat meat",
      "pron": "bi makh ID-deg-güi"
    },
    {
      "category": "Shopping",
      "phrase": "Энэ ямар үнэтэй вэ?",
      "english": "How much does this cost?",
      "pron": "E-ne YA-mar Ü-ne-tei ve"
    },
    {
      "category": "Shopping",
      "phrase": "Хямдруулж болох уу?",
      "english": "Can you make it cheaper?",
      "pron": "kham-DRUULJ BO-lokh uu"
    },
    {
      "category": "Shopping",
      "phrase": "Би зөвхөн хараад байна",
      "english": "I'm just looking",
      "pron": "bi ZÖV-khön kha-RAAD BAI-na"
    },
    {
      "category": "Shopping",
      "phrase": "Картаар төлж болох уу?",
      "english": "Can I pay by card?",
      "pron": "kar-TAAR tölj BO-lokh uu"
    },
    {
      "category": "Shopping",
      "phrase": "Би үүнийг авъя",
      "english": "I'll take this",
      "pron": "bi ÜÜ-niig AV-ya"
    },
    {
      "category": "Emergencies",
      "phrase": "Туслаарай!",
      "english": "Help!",
      "pron": "tus-LAA-rai"
    },
    {
      "category": "Emergencies",
      "phrase": "Цагдаа дуудаарай!",
      "english": "Call the police!",
      "pron": "tsag-DAA DUU-daa-rai"
    },
    {
      "category": "Emergencies",
      "phrase": "Надад эмч хэрэгтэй",
      "english": "I need a doctor",
      "pron": "NA-dad emch KHE-reg-tei"
    },
    {
      "category": "Emergencies",
      "phrase": "Осол гарлаа",
      "english": "There's been an accident",
      "pron": "O-sol gar-LAA"
    },
    {
      "category": "Emergencies",
      "phrase": "Эмнэлэг хаана байдаг вэ?",
      "english": "Where is the hospital?",
      "pron": "EM-ne-leg KHAA-na BAI-dag ve"
    }
  ],
  "ms": [
    {
      "category": "Greetings",
      "phrase": "Selamat pagi",
      "english": "Good morning",
      "pron": "suh-LAH-mat PAH-gee"
    },
    {
      "category": "Greetings",
      "phrase": "Selamat petang",
      "english": "Good evening",
      "pron": "suh-LAH-mat puh-TAHNG"
    },
    {
      "category": "Greetings",
      "phrase": "Apa khabar?",
      "english": "How are you?",
      "pron": "AH-pah KHAH-bar"
    },
    {
      "category": "Greetings",
      "phrase": "Selamat tinggal",
      "english": "Goodbye",
      "pron": "suh-LAH-mat TING-gal"
    },
    {
      "category": "Greetings",
      "phrase": "Jumpa lagi",
      "english": "See you again",
      "pron": "JOOM-pah LAH-gee"
    },
    {
      "category": "Basics",
      "phrase": "Ya",
      "english": "Yes",
      "pron": "YAH"
    },
    {
      "category": "Basics",
      "phrase": "Tidak",
      "english": "No",
      "pron": "TEE-dak"
    },
    {
      "category": "Basics",
      "phrase": "Terima kasih",
      "english": "Thank you",
      "pron": "tuh-REE-mah KAH-sih"
    },
    {
      "category": "Basics",
      "phrase": "Maaf",
      "english": "Sorry / Excuse me",
      "pron": "MAH-ahf"
    },
    {
      "category": "Basics",
      "phrase": "Saya tidak faham",
      "english": "I don't understand",
      "pron": "SAH-yah TEE-dak FAH-hahm"
    },
    {
      "category": "Getting around",
      "phrase": "Di mana tandas?",
      "english": "Where is the toilet?",
      "pron": "dee MAH-nah TAHN-dahs"
    },
    {
      "category": "Getting around",
      "phrase": "Di mana stesen bas?",
      "english": "Where is the bus station?",
      "pron": "dee MAH-nah STEH-sehn BAHS"
    },
    {
      "category": "Getting around",
      "phrase": "Belok kiri",
      "english": "Turn left",
      "pron": "BEH-lok KEE-ree"
    },
    {
      "category": "Getting around",
      "phrase": "Belok kanan",
      "english": "Turn right",
      "pron": "BEH-lok KAH-nahn"
    },
    {
      "category": "Getting around",
      "phrase": "Saya sesat",
      "english": "I am lost",
      "pron": "SAH-yah suh-SAHT"
    },
    {
      "category": "Eating out",
      "phrase": "Boleh saya lihat menu?",
      "english": "Can I see the menu?",
      "pron": "BOH-leh SAH-yah LEE-haht MEH-noo"
    },
    {
      "category": "Eating out",
      "phrase": "Saya nak pesan ini",
      "english": "I would like to order this",
      "pron": "SAH-yah NAHK puh-SAHN EE-nee"
    },
    {
      "category": "Eating out",
      "phrase": "Boleh saya minta bil?",
      "english": "Could I have the bill, please?",
      "pron": "BOH-leh SAH-yah MEEN-tah BEEL"
    },
    {
      "category": "Eating out",
      "phrase": "Sedap!",
      "english": "Delicious!",
      "pron": "suh-DAHP"
    },
    {
      "category": "Eating out",
      "phrase": "Saya seorang vegetarian",
      "english": "I am a vegetarian",
      "pron": "SAH-yah suh-OH-rahng veh-geh-TAH-ree-an"
    },
    {
      "category": "Shopping",
      "phrase": "Berapa harga ini?",
      "english": "How much is this?",
      "pron": "buh-RAH-pah HAR-gah EE-nee"
    },
    {
      "category": "Shopping",
      "phrase": "Mahal sangat",
      "english": "Too expensive",
      "pron": "MAH-hal SAH-ngat"
    },
    {
      "category": "Shopping",
      "phrase": "Boleh kurang sikit?",
      "english": "Can it be cheaper?",
      "pron": "BOH-leh KOO-rahng SEE-kit"
    },
    {
      "category": "Shopping",
      "phrase": "Saya nak beli ini",
      "english": "I want to buy this",
      "pron": "SAH-yah NAHK buh-LEE EE-nee"
    },
    {
      "category": "Shopping",
      "phrase": "Boleh saya cuba?",
      "english": "Can I try it on?",
      "pron": "BOH-leh SAH-yah CHOO-bah"
    },
    {
      "category": "Emergencies",
      "phrase": "Tolong!",
      "english": "Help!",
      "pron": "TOH-long"
    },
    {
      "category": "Emergencies",
      "phrase": "Panggil polis!",
      "english": "Call the police!",
      "pron": "PAHNG-gil POH-lees"
    },
    {
      "category": "Emergencies",
      "phrase": "Saya perlukan doktor",
      "english": "I need a doctor",
      "pron": "SAH-yah puhr-LOO-kahn DOK-tor"
    },
    {
      "category": "Emergencies",
      "phrase": "Panggil ambulans!",
      "english": "Call an ambulance!",
      "pron": "PAHNG-gil ahm-BOO-lahns"
    },
    {
      "category": "Emergencies",
      "phrase": "Di mana hospital?",
      "english": "Where is the hospital?",
      "pron": "dee MAH-nah hos-PEE-tal"
    }
  ],
  "nl": [
    {
      "category": "Greetings",
      "phrase": "Hallo",
      "english": "Hello",
      "pron": "HAH-loh"
    },
    {
      "category": "Greetings",
      "phrase": "Goedemorgen",
      "english": "Good morning",
      "pron": "khoo-duh-MOR-khun"
    },
    {
      "category": "Greetings",
      "phrase": "Goedemiddag",
      "english": "Good afternoon",
      "pron": "khoo-duh-MIH-dakh"
    },
    {
      "category": "Greetings",
      "phrase": "Goedenavond",
      "english": "Good evening",
      "pron": "khoo-dun-AH-vont"
    },
    {
      "category": "Greetings",
      "phrase": "Tot ziens",
      "english": "Goodbye",
      "pron": "tot zeens"
    },
    {
      "category": "Basics",
      "phrase": "Alstublieft",
      "english": "Please",
      "pron": "ahl-stew-BLEEFT"
    },
    {
      "category": "Basics",
      "phrase": "Dank u wel",
      "english": "Thank you",
      "pron": "dahnk ew vel"
    },
    {
      "category": "Basics",
      "phrase": "Ja / Nee",
      "english": "Yes / No",
      "pron": "yah / nay"
    },
    {
      "category": "Basics",
      "phrase": "Pardon",
      "english": "Excuse me",
      "pron": "par-DON"
    },
    {
      "category": "Basics",
      "phrase": "Spreekt u Engels?",
      "english": "Do you speak English?",
      "pron": "spraykt ew ENG-uls"
    },
    {
      "category": "Getting around",
      "phrase": "Waar is...?",
      "english": "Where is...?",
      "pron": "vahr is"
    },
    {
      "category": "Getting around",
      "phrase": "Waar is het toilet?",
      "english": "Where is the toilet?",
      "pron": "vahr is huht twah-LET"
    },
    {
      "category": "Getting around",
      "phrase": "Hoeveel kost het kaartje?",
      "english": "How much is the ticket?",
      "pron": "hoo-VAYL kost huht KAR-chuh"
    },
    {
      "category": "Getting around",
      "phrase": "Ik wil graag naar...",
      "english": "I want to go to...",
      "pron": "ik vil khrahkh nahr"
    },
    {
      "category": "Getting around",
      "phrase": "Stop hier, alstublieft",
      "english": "Stop here, please",
      "pron": "stop heer, ahl-stew-BLEEFT"
    },
    {
      "category": "Eating out",
      "phrase": "Een tafel voor twee, alstublieft",
      "english": "A table for two, please",
      "pron": "un TAH-ful vor tvay, ahl-stew-BLEEFT"
    },
    {
      "category": "Eating out",
      "phrase": "De menukaart, alstublieft",
      "english": "The menu, please",
      "pron": "duh muh-NEW-kahrt, ahl-stew-BLEEFT"
    },
    {
      "category": "Eating out",
      "phrase": "De rekening, alstublieft",
      "english": "The bill, please",
      "pron": "duh RAY-kuh-ning, ahl-stew-BLEEFT"
    },
    {
      "category": "Eating out",
      "phrase": "Water",
      "english": "Water",
      "pron": "VAH-tur"
    },
    {
      "category": "Eating out",
      "phrase": "Proost!",
      "english": "Cheers!",
      "pron": "prohst"
    },
    {
      "category": "Shopping",
      "phrase": "Hoeveel kost het?",
      "english": "How much is it?",
      "pron": "hoo-VAYL kost huht"
    },
    {
      "category": "Shopping",
      "phrase": "Het is te duur",
      "english": "It's too expensive",
      "pron": "huht is tuh dewr"
    },
    {
      "category": "Shopping",
      "phrase": "Accepteert u kaarten?",
      "english": "Do you accept cards?",
      "pron": "ak-sep-TAYRT ew KAR-tun"
    },
    {
      "category": "Shopping",
      "phrase": "Ik kijk alleen maar",
      "english": "I'm just looking",
      "pron": "ik kaik ah-LAYN mahr"
    },
    {
      "category": "Shopping",
      "phrase": "Mag ik dit passen?",
      "english": "Can I try this on?",
      "pron": "mahkh ik dit PAH-sun"
    },
    {
      "category": "Emergencies",
      "phrase": "Help!",
      "english": "Help!",
      "pron": "help"
    },
    {
      "category": "Emergencies",
      "phrase": "Bel de politie",
      "english": "Call the police",
      "pron": "bel duh poh-LEE-tsee"
    },
    {
      "category": "Emergencies",
      "phrase": "Ik heb een dokter nodig",
      "english": "I need a doctor",
      "pron": "ik hep un DOK-tur NOH-dukh"
    },
    {
      "category": "Emergencies",
      "phrase": "Ik ben verdwaald",
      "english": "I'm lost",
      "pron": "ik ben vur-DVAHLT"
    },
    {
      "category": "Emergencies",
      "phrase": "Bel een ambulance",
      "english": "Call an ambulance",
      "pron": "bel un ahm-bew-LAHN-suh"
    }
  ],
  "no": [
    {
      "category": "Greetings",
      "phrase": "Hei",
      "english": "Hello",
      "pron": "HAY"
    },
    {
      "category": "Greetings",
      "phrase": "God morgen",
      "english": "Good morning",
      "pron": "goo MORN"
    },
    {
      "category": "Greetings",
      "phrase": "God kveld",
      "english": "Good evening",
      "pron": "goo KVELL"
    },
    {
      "category": "Greetings",
      "phrase": "Ha det",
      "english": "Goodbye",
      "pron": "ha DAY"
    },
    {
      "category": "Greetings",
      "phrase": "Hvordan har du det?",
      "english": "How are you?",
      "pron": "VOR-dan har doo DAY"
    },
    {
      "category": "Basics",
      "phrase": "Ja",
      "english": "Yes",
      "pron": "YAH"
    },
    {
      "category": "Basics",
      "phrase": "Nei",
      "english": "No",
      "pron": "NAY"
    },
    {
      "category": "Basics",
      "phrase": "Takk",
      "english": "Thank you",
      "pron": "TAHK"
    },
    {
      "category": "Basics",
      "phrase": "Vær så snill",
      "english": "Please",
      "pron": "VAIR sho SNIL"
    },
    {
      "category": "Basics",
      "phrase": "Unnskyld",
      "english": "Excuse me, sorry",
      "pron": "OON-shool"
    },
    {
      "category": "Getting around",
      "phrase": "Hvor er togstasjonen?",
      "english": "Where is the train station?",
      "pron": "voor air TOHG-stah-shoo-nen"
    },
    {
      "category": "Getting around",
      "phrase": "Hvor mye koster billetten?",
      "english": "How much does the ticket cost?",
      "pron": "voor MEW-eh KOS-ter bi-LET-en"
    },
    {
      "category": "Getting around",
      "phrase": "Går denne bussen til sentrum?",
      "english": "Does this bus go to the city center?",
      "pron": "gorr DEN-neh BUS-sen til SEN-trum"
    },
    {
      "category": "Getting around",
      "phrase": "Jeg vil gjerne bestille en drosje.",
      "english": "I would like to order a taxi.",
      "pron": "yai vil YAIR-neh beh-STIL-eh en DROSH-eh"
    },
    {
      "category": "Getting around",
      "phrase": "Er det langt herfra?",
      "english": "Is it far from here?",
      "pron": "air DAY lahngt HAIR-frah"
    },
    {
      "category": "Eating out",
      "phrase": "Et bord til to, takk.",
      "english": "A table for two, please.",
      "pron": "et BOOR til TOO, tahk"
    },
    {
      "category": "Eating out",
      "phrase": "Kan jeg få menyen, takk?",
      "english": "Can I have the menu, please?",
      "pron": "kan yai faw meh-NEW-en, tahk"
    },
    {
      "category": "Eating out",
      "phrase": "Jeg vil gjerne bestille.",
      "english": "I would like to order.",
      "pron": "yai vil YAIR-neh beh-STIL-eh"
    },
    {
      "category": "Eating out",
      "phrase": "Regningen, takk.",
      "english": "The bill, please.",
      "pron": "RAI-ning-en, tahk"
    },
    {
      "category": "Eating out",
      "phrase": "Det smakte veldig godt.",
      "english": "That tasted very good.",
      "pron": "day SMAHK-teh VEL-dee GOT"
    },
    {
      "category": "Shopping",
      "phrase": "Hvor mye koster dette?",
      "english": "How much does this cost?",
      "pron": "voor MEW-eh KOS-ter DET-teh"
    },
    {
      "category": "Shopping",
      "phrase": "Kan jeg prøve denne?",
      "english": "Can I try this on?",
      "pron": "kan yai PRUR-veh DEN-neh"
    },
    {
      "category": "Shopping",
      "phrase": "Tar dere kort?",
      "english": "Do you accept cards?",
      "pron": "tar DEH-reh KORT"
    },
    {
      "category": "Shopping",
      "phrase": "Jeg bare ser.",
      "english": "I'm just looking.",
      "pron": "yai BAH-reh SAIR"
    },
    {
      "category": "Shopping",
      "phrase": "Har dere denne i en annen størrelse?",
      "english": "Do you have this in another size?",
      "pron": "har DEH-reh DEN-neh ee en AHN-nen STUR-rel-seh"
    },
    {
      "category": "Emergencies",
      "phrase": "Hjelp!",
      "english": "Help!",
      "pron": "YELP"
    },
    {
      "category": "Emergencies",
      "phrase": "Ring politiet!",
      "english": "Call the police!",
      "pron": "ring poo-lee-TEE-eh"
    },
    {
      "category": "Emergencies",
      "phrase": "Jeg trenger en lege.",
      "english": "I need a doctor.",
      "pron": "yai TRENG-er en LAY-geh"
    },
    {
      "category": "Emergencies",
      "phrase": "Ring en ambulanse!",
      "english": "Call an ambulance!",
      "pron": "ring en am-boo-LAHNG-seh"
    },
    {
      "category": "Emergencies",
      "phrase": "Jeg har gått meg bort.",
      "english": "I am lost.",
      "pron": "yai har GOT my BORT"
    }
  ],
  "pl": [
    {
      "category": "Greetings",
      "phrase": "Dzień dobry",
      "english": "Good morning / Hello",
      "pron": "jen DOH-brih"
    },
    {
      "category": "Greetings",
      "phrase": "Dobry wieczór",
      "english": "Good evening",
      "pron": "DOH-brih VYEH-choor"
    },
    {
      "category": "Greetings",
      "phrase": "Cześć",
      "english": "Hi / Bye (informal)",
      "pron": "cheshch"
    },
    {
      "category": "Greetings",
      "phrase": "Do widzenia",
      "english": "Goodbye",
      "pron": "doh vee-DZEH-nyah"
    },
    {
      "category": "Greetings",
      "phrase": "Dobranoc",
      "english": "Good night",
      "pron": "doh-BRAH-nots"
    },
    {
      "category": "Basics",
      "phrase": "Tak",
      "english": "Yes",
      "pron": "tahk"
    },
    {
      "category": "Basics",
      "phrase": "Nie",
      "english": "No",
      "pron": "nyeh"
    },
    {
      "category": "Basics",
      "phrase": "Proszę",
      "english": "Please",
      "pron": "PROH-sheh"
    },
    {
      "category": "Basics",
      "phrase": "Dziękuję",
      "english": "Thank you",
      "pron": "jen-KOO-yeh"
    },
    {
      "category": "Basics",
      "phrase": "Przepraszam",
      "english": "Excuse me / Sorry",
      "pron": "psheh-PRAH-shahm"
    },
    {
      "category": "Getting around",
      "phrase": "Gdzie jest toaleta?",
      "english": "Where is the bathroom?",
      "pron": "gjeh yest toh-ah-LEH-tah"
    },
    {
      "category": "Getting around",
      "phrase": "Jak dojechać do centrum?",
      "english": "How do I get to the center?",
      "pron": "yahk doh-YEH-hahch doh TSEN-troom"
    },
    {
      "category": "Getting around",
      "phrase": "Lotnisko",
      "english": "Airport",
      "pron": "lot-NEES-koh"
    },
    {
      "category": "Getting around",
      "phrase": "Bilet",
      "english": "Ticket",
      "pron": "BEE-let"
    },
    {
      "category": "Getting around",
      "phrase": "Czy to daleko?",
      "english": "Is it far?",
      "pron": "chih toh dah-LEH-koh"
    },
    {
      "category": "Eating out",
      "phrase": "Poproszę menu",
      "english": "Menu, please",
      "pron": "poh-PROH-sheh MEH-noo"
    },
    {
      "category": "Eating out",
      "phrase": "Smacznego",
      "english": "Enjoy your meal",
      "pron": "smach-NEH-goh"
    },
    {
      "category": "Eating out",
      "phrase": "Na zdrowie",
      "english": "Cheers",
      "pron": "nah ZDROH-vyeh"
    },
    {
      "category": "Eating out",
      "phrase": "Poproszę rachunek",
      "english": "The bill, please",
      "pron": "poh-PROH-sheh rah-HOO-nek"
    },
    {
      "category": "Eating out",
      "phrase": "Czy macie dania wegetariańskie?",
      "english": "Do you have vegetarian dishes?",
      "pron": "chih MAH-cheh DAH-nyah veh-geh-tah-RYAHN-skyeh"
    },
    {
      "category": "Shopping",
      "phrase": "Ile to kosztuje?",
      "english": "How much does this cost?",
      "pron": "EE-leh toh kosh-TOO-yeh"
    },
    {
      "category": "Shopping",
      "phrase": "Czy mogę to przymierzyć?",
      "english": "Can I try this on?",
      "pron": "chih MOH-geh toh pshih-MYEH-zhihch"
    },
    {
      "category": "Shopping",
      "phrase": "To jest za drogie",
      "english": "This is too expensive",
      "pron": "toh yest zah DROH-gyeh"
    },
    {
      "category": "Shopping",
      "phrase": "Czy mogę zapłacić kartą?",
      "english": "Can I pay by card?",
      "pron": "chih MOH-geh zah-PWAH-cheech KAHR-tawn"
    },
    {
      "category": "Shopping",
      "phrase": "Tylko patrzę",
      "english": "I'm just looking",
      "pron": "TIHL-koh PAH-tsheh"
    },
    {
      "category": "Emergencies",
      "phrase": "Pomocy!",
      "english": "Help!",
      "pron": "poh-MOH-tsih"
    },
    {
      "category": "Emergencies",
      "phrase": "Zadzwoń po karetkę!",
      "english": "Call an ambulance!",
      "pron": "ZAHD-zvohn poh kah-REHT-keh"
    },
    {
      "category": "Emergencies",
      "phrase": "Zadzwoń po policję!",
      "english": "Call the police!",
      "pron": "ZAHD-zvohn poh poh-LEE-tsyeh"
    },
    {
      "category": "Emergencies",
      "phrase": "Potrzebuję pomocy",
      "english": "I need help",
      "pron": "poh-tsheh-BOO-yeh poh-MOH-tsih"
    },
    {
      "category": "Emergencies",
      "phrase": "Gdzie jest najbliższy szpital?",
      "english": "Where is the nearest hospital?",
      "pron": "gjeh yest nai-BLEEZH-shih SHPEE-tahl"
    }
  ],
  "ro": [
    {
      "category": "Greetings",
      "phrase": "Bună ziua",
      "english": "Hello",
      "pron": "BOO-nuh ZEE-wah"
    },
    {
      "category": "Greetings",
      "phrase": "Bună dimineața",
      "english": "Good morning",
      "pron": "dee-mee-NYAH-tsa"
    },
    {
      "category": "Greetings",
      "phrase": "Bună seara",
      "english": "Good evening",
      "pron": "BOO-nuh SYAH-rah"
    },
    {
      "category": "Greetings",
      "phrase": "La revedere",
      "english": "Goodbye",
      "pron": "lah reh-veh-DEH-reh"
    },
    {
      "category": "Greetings",
      "phrase": "Ce mai faceți?",
      "english": "How are you?",
      "pron": "cheh my FAH-chets"
    },
    {
      "category": "Basics",
      "phrase": "Da / Nu",
      "english": "Yes / No",
      "pron": "dah / noo"
    },
    {
      "category": "Basics",
      "phrase": "Vă rog",
      "english": "Please",
      "pron": "vuh ROHG"
    },
    {
      "category": "Basics",
      "phrase": "Mulțumesc",
      "english": "Thank you",
      "pron": "mool-tsoo-MESK"
    },
    {
      "category": "Basics",
      "phrase": "Cu plăcere",
      "english": "You're welcome",
      "pron": "koo pluh-CHEH-reh"
    },
    {
      "category": "Basics",
      "phrase": "Scuzați-mă",
      "english": "Excuse me",
      "pron": "skoo-ZAH-tsee-muh"
    },
    {
      "category": "Getting around",
      "phrase": "Unde este...?",
      "english": "Where is...?",
      "pron": "OON-deh YES-teh"
    },
    {
      "category": "Getting around",
      "phrase": "Unde este toaleta?",
      "english": "Where is the toilet?",
      "pron": "OON-deh YES-teh toh-ah-LEH-tah"
    },
    {
      "category": "Getting around",
      "phrase": "Cât costă biletul?",
      "english": "How much is the ticket?",
      "pron": "kuht KOS-tuh bee-LEH-tool"
    },
    {
      "category": "Getting around",
      "phrase": "Vreau să merg la...",
      "english": "I want to go to...",
      "pron": "VRYOW suh MEHRG lah"
    },
    {
      "category": "Getting around",
      "phrase": "Opriți aici, vă rog",
      "english": "Stop here, please",
      "pron": "oh-PREETS ah-EECH, vuh ROHG"
    },
    {
      "category": "Eating out",
      "phrase": "O masă pentru doi, vă rog",
      "english": "A table for two, please",
      "pron": "oh MAH-suh PEN-troo doy, vuh ROHG"
    },
    {
      "category": "Eating out",
      "phrase": "Meniul, vă rog",
      "english": "The menu, please",
      "pron": "meh-NEE-ool, vuh ROHG"
    },
    {
      "category": "Eating out",
      "phrase": "Nota de plată, vă rog",
      "english": "The bill, please",
      "pron": "NOH-tah deh PLAH-tuh, vuh ROHG"
    },
    {
      "category": "Eating out",
      "phrase": "Apă",
      "english": "Water",
      "pron": "AH-puh"
    },
    {
      "category": "Eating out",
      "phrase": "Noroc!",
      "english": "Cheers!",
      "pron": "noh-ROHK"
    },
    {
      "category": "Shopping",
      "phrase": "Cât costă asta?",
      "english": "How much is it?",
      "pron": "kuht KOS-tuh AH-stah"
    },
    {
      "category": "Shopping",
      "phrase": "Este prea scump",
      "english": "It's too expensive",
      "pron": "YES-teh PRYAH SKOOMP"
    },
    {
      "category": "Shopping",
      "phrase": "Acceptați cardul?",
      "english": "Do you accept cards?",
      "pron": "ahk-chep-TAHTS KAR-dool"
    },
    {
      "category": "Shopping",
      "phrase": "Doar mă uit, mulțumesc",
      "english": "I'm just looking",
      "pron": "dwar muh oo-EET, mool-tsoo-MESK"
    },
    {
      "category": "Shopping",
      "phrase": "Pot să încerc asta?",
      "english": "Can I try this on?",
      "pron": "poht suh uhn-CHERK AH-stah"
    },
    {
      "category": "Emergencies",
      "phrase": "Ajutor!",
      "english": "Help!",
      "pron": "ah-zhoo-TOR"
    },
    {
      "category": "Emergencies",
      "phrase": "Chemați poliția!",
      "english": "Call the police",
      "pron": "keh-MAHTS poh-LEE-tsee-ah"
    },
    {
      "category": "Emergencies",
      "phrase": "Am nevoie de un doctor",
      "english": "I need a doctor",
      "pron": "ahm neh-VOY-eh deh oon DOK-tor"
    },
    {
      "category": "Emergencies",
      "phrase": "M-am rătăcit",
      "english": "I'm lost",
      "pron": "mahm ruh-tuh-CHEET"
    },
    {
      "category": "Emergencies",
      "phrase": "Chemați o ambulanță!",
      "english": "Call an ambulance",
      "pron": "keh-MAHTS oh am-boo-LAHN-tsuh"
    }
  ],
  "sk": [
    {
      "category": "Greetings",
      "phrase": "Dobrý deň",
      "english": "Hello (formal greeting)",
      "pron": "DOH-bree DEN"
    },
    {
      "category": "Greetings",
      "phrase": "Ahoj",
      "english": "Hi / Bye (informal)",
      "pron": "AH-hoy"
    },
    {
      "category": "Greetings",
      "phrase": "Dobré ráno",
      "english": "Good morning",
      "pron": "DOH-breh RAH-no"
    },
    {
      "category": "Greetings",
      "phrase": "Dobrý večer",
      "english": "Good evening",
      "pron": "DOH-bree VEH-cher"
    },
    {
      "category": "Greetings",
      "phrase": "Dovidenia",
      "english": "Goodbye",
      "pron": "DOH-vee-deh-nyah"
    },
    {
      "category": "Basics",
      "phrase": "Áno",
      "english": "Yes",
      "pron": "AH-no"
    },
    {
      "category": "Basics",
      "phrase": "Nie",
      "english": "No",
      "pron": "NYEH"
    },
    {
      "category": "Basics",
      "phrase": "Prosím",
      "english": "Please / You're welcome",
      "pron": "PROH-seem"
    },
    {
      "category": "Basics",
      "phrase": "Ďakujem",
      "english": "Thank you",
      "pron": "DYAH-koo-yem"
    },
    {
      "category": "Basics",
      "phrase": "Prepáčte",
      "english": "Excuse me / Sorry",
      "pron": "PREH-pahch-teh"
    },
    {
      "category": "Getting around",
      "phrase": "Kde je stanica?",
      "english": "Where is the station?",
      "pron": "KDEH yeh STAH-nyee-tsah"
    },
    {
      "category": "Getting around",
      "phrase": "Ako sa dostanem do centra?",
      "english": "How do I get to the center?",
      "pron": "AH-koh sah DOH-stah-nem doh TSEN-trah"
    },
    {
      "category": "Getting around",
      "phrase": "Jeden lístok, prosím",
      "english": "One ticket, please",
      "pron": "YEH-den LEES-tok, PROH-seem"
    },
    {
      "category": "Getting around",
      "phrase": "Je to ďaleko?",
      "english": "Is it far?",
      "pron": "yeh toh DYAH-leh-koh"
    },
    {
      "category": "Getting around",
      "phrase": "Zastavte tu, prosím",
      "english": "Stop here, please",
      "pron": "ZAH-stahv-teh too, PROH-seem"
    },
    {
      "category": "Eating out",
      "phrase": "Stôl pre dvoch, prosím",
      "english": "A table for two, please",
      "pron": "STOOL preh DVOKH, PROH-seem"
    },
    {
      "category": "Eating out",
      "phrase": "Jedálny lístok, prosím",
      "english": "The menu, please",
      "pron": "YEH-dahl-nee LEES-tok, PROH-seem"
    },
    {
      "category": "Eating out",
      "phrase": "Dobrú chuť!",
      "english": "Enjoy your meal!",
      "pron": "DOH-broo khoot'"
    },
    {
      "category": "Eating out",
      "phrase": "Účet, prosím",
      "english": "The bill, please",
      "pron": "OO-chet, PROH-seem"
    },
    {
      "category": "Eating out",
      "phrase": "Bolo to výborné",
      "english": "It was delicious",
      "pron": "BOH-loh toh VEE-bor-neh"
    },
    {
      "category": "Shopping",
      "phrase": "Koľko to stojí?",
      "english": "How much does it cost?",
      "pron": "KOHL'-koh toh STOH-yee"
    },
    {
      "category": "Shopping",
      "phrase": "Môžem si to vyskúšať?",
      "english": "Can I try it on?",
      "pron": "MOH-zhem see toh VIH-skoo-shaht'"
    },
    {
      "category": "Shopping",
      "phrase": "Je to príliš drahé",
      "english": "It's too expensive",
      "pron": "yeh toh PREE-leesh DRAH-heh"
    },
    {
      "category": "Shopping",
      "phrase": "Beriete kreditné karty?",
      "english": "Do you accept credit cards?",
      "pron": "BEH-ryeh-teh KREH-deet-neh KAR-tih"
    },
    {
      "category": "Shopping",
      "phrase": "Len sa pozerám",
      "english": "I'm just looking",
      "pron": "LEN sah POH-zeh-rahm"
    },
    {
      "category": "Emergencies",
      "phrase": "Pomoc!",
      "english": "Help!",
      "pron": "POH-mots"
    },
    {
      "category": "Emergencies",
      "phrase": "Zavolajte políciu",
      "english": "Call the police",
      "pron": "ZAH-voh-lai-teh POH-lee-tsyoo"
    },
    {
      "category": "Emergencies",
      "phrase": "Potrebujem lekára",
      "english": "I need a doctor",
      "pron": "POH-treh-boo-yem LEH-kah-rah"
    },
    {
      "category": "Emergencies",
      "phrase": "Zavolajte sanitku",
      "english": "Call an ambulance",
      "pron": "ZAH-voh-lai-teh SAH-neet-koo"
    },
    {
      "category": "Emergencies",
      "phrase": "Kde je nemocnica?",
      "english": "Where is the hospital?",
      "pron": "KDEH yeh NEH-mots-nee-tsah"
    }
  ],
  "sl": [
    {
      "category": "Greetings",
      "phrase": "Dober dan",
      "english": "Good day (hello, formal)",
      "pron": "DOH-ber dahn"
    },
    {
      "category": "Greetings",
      "phrase": "Zdravo",
      "english": "Hi (informal)",
      "pron": "ZDRAH-voh"
    },
    {
      "category": "Greetings",
      "phrase": "Dobro jutro",
      "english": "Good morning",
      "pron": "DOH-broh YOO-troh"
    },
    {
      "category": "Greetings",
      "phrase": "Lahko noč",
      "english": "Good night",
      "pron": "LAH-koh nohch"
    },
    {
      "category": "Greetings",
      "phrase": "Nasvidenje",
      "english": "Goodbye",
      "pron": "nah-svee-DEHN-yeh"
    },
    {
      "category": "Basics",
      "phrase": "Prosim",
      "english": "Please",
      "pron": "PROH-seem"
    },
    {
      "category": "Basics",
      "phrase": "Hvala",
      "english": "Thank you",
      "pron": "HVAH-lah"
    },
    {
      "category": "Basics",
      "phrase": "Da",
      "english": "Yes",
      "pron": "dah"
    },
    {
      "category": "Basics",
      "phrase": "Ne",
      "english": "No",
      "pron": "neh"
    },
    {
      "category": "Basics",
      "phrase": "Oprostite",
      "english": "Excuse me (sorry)",
      "pron": "oh-proh-STEE-teh"
    },
    {
      "category": "Getting around",
      "phrase": "Kje je najbližja postaja?",
      "english": "Where is the nearest station?",
      "pron": "kyeh yeh nai-BLEEZH-yah poh-STAH-yah"
    },
    {
      "category": "Getting around",
      "phrase": "Kako pridem do centra mesta?",
      "english": "How do I get to the city center?",
      "pron": "kah-KOH PREE-dem doh TSEN-trah MEHS-tah"
    },
    {
      "category": "Getting around",
      "phrase": "Koliko stane vozovnica?",
      "english": "How much does a ticket cost?",
      "pron": "KOH-lee-koh STAH-neh voh-ZOHV-nee-tsah"
    },
    {
      "category": "Getting around",
      "phrase": "Avtobusna postaja",
      "english": "Bus station",
      "pron": "ahv-toh-BOOS-nah poh-STAH-yah"
    },
    {
      "category": "Getting around",
      "phrase": "Izgubljen sem.",
      "english": "I am lost.",
      "pron": "eez-GOOB-lyen sem"
    },
    {
      "category": "Eating out",
      "phrase": "Mizo za dva, prosim.",
      "english": "A table for two, please.",
      "pron": "MEE-zoh zah dvah, PROH-seem"
    },
    {
      "category": "Eating out",
      "phrase": "Jedilni list, prosim.",
      "english": "The menu, please.",
      "pron": "yeh-DEEL-nee leest, PROH-seem"
    },
    {
      "category": "Eating out",
      "phrase": "Kaj priporočate?",
      "english": "What do you recommend?",
      "pron": "kai pree-poh-ROH-chah-teh"
    },
    {
      "category": "Eating out",
      "phrase": "Račun, prosim.",
      "english": "The bill, please.",
      "pron": "rah-CHOON, PROH-seem"
    },
    {
      "category": "Eating out",
      "phrase": "Dober tek!",
      "english": "Enjoy your meal!",
      "pron": "DOH-ber tehk"
    },
    {
      "category": "Shopping",
      "phrase": "Koliko stane to?",
      "english": "How much does this cost?",
      "pron": "KOH-lee-koh STAH-neh toh"
    },
    {
      "category": "Shopping",
      "phrase": "Ali sprejemate kartice?",
      "english": "Do you accept cards?",
      "pron": "AH-lee spreh-YEH-mah-teh KAR-tee-tseh"
    },
    {
      "category": "Shopping",
      "phrase": "Samo gledam, hvala.",
      "english": "I'm just looking, thanks.",
      "pron": "SAH-moh GLEH-dahm, HVAH-lah"
    },
    {
      "category": "Shopping",
      "phrase": "Ali imate to v drugi velikosti?",
      "english": "Do you have this in another size?",
      "pron": "AH-lee EE-mah-teh toh v DROO-gee veh-lee-KOH-stee"
    },
    {
      "category": "Shopping",
      "phrase": "Kje je blagajna?",
      "english": "Where is the checkout?",
      "pron": "kyeh yeh blah-GAI-nah"
    },
    {
      "category": "Emergencies",
      "phrase": "Na pomoč!",
      "english": "Help!",
      "pron": "nah poh-MOHCH"
    },
    {
      "category": "Emergencies",
      "phrase": "Pokličite policijo!",
      "english": "Call the police!",
      "pron": "poh-KLEE-chee-teh poh-lee-TSEE-yoh"
    },
    {
      "category": "Emergencies",
      "phrase": "Potrebujem zdravnika.",
      "english": "I need a doctor.",
      "pron": "poh-treh-BOO-yem zdrahv-NEE-kah"
    },
    {
      "category": "Emergencies",
      "phrase": "Pokličite rešilca!",
      "english": "Call an ambulance!",
      "pron": "poh-KLEE-chee-teh reh-SHEEL-tsah"
    },
    {
      "category": "Emergencies",
      "phrase": "Kje je bolnišnica?",
      "english": "Where is the hospital?",
      "pron": "kyeh yeh bohl-NEESH-nee-tsah"
    }
  ],
  "sq": [
    {
      "category": "Greetings",
      "phrase": "Tungjatjeta",
      "english": "Hello",
      "pron": "toon-gyaht-YEH-tah"
    },
    {
      "category": "Greetings",
      "phrase": "Mirëmëngjes",
      "english": "Good morning",
      "pron": "mee-ruh-MEN-gyes"
    },
    {
      "category": "Greetings",
      "phrase": "Mirëdita",
      "english": "Good afternoon",
      "pron": "mee-ruh-DEE-tah"
    },
    {
      "category": "Greetings",
      "phrase": "Mirëmbrëma",
      "english": "Good evening",
      "pron": "mee-ruhm-BREH-mah"
    },
    {
      "category": "Greetings",
      "phrase": "Mirupafshim",
      "english": "Goodbye",
      "pron": "mee-roo-PAHF-shim"
    },
    {
      "category": "Basics",
      "phrase": "Po",
      "english": "Yes",
      "pron": "poh"
    },
    {
      "category": "Basics",
      "phrase": "Jo",
      "english": "No",
      "pron": "yoh"
    },
    {
      "category": "Basics",
      "phrase": "Ju lutem",
      "english": "Please",
      "pron": "yoo LOO-tem"
    },
    {
      "category": "Basics",
      "phrase": "Faleminderit",
      "english": "Thank you",
      "pron": "fah-leh-meen-DEH-reet"
    },
    {
      "category": "Basics",
      "phrase": "Më falni",
      "english": "Excuse me",
      "pron": "muh FAHL-nee"
    },
    {
      "category": "Getting around",
      "phrase": "Ku është...?",
      "english": "Where is...?",
      "pron": "koo ESH-tuh"
    },
    {
      "category": "Getting around",
      "phrase": "Dua të shkoj në...",
      "english": "I want to go to...",
      "pron": "DOO-ah tuh shkoy nuh"
    },
    {
      "category": "Getting around",
      "phrase": "Sa kushton bileta?",
      "english": "How much is the ticket?",
      "pron": "sah KOOSH-ton bee-LEH-tah"
    },
    {
      "category": "Getting around",
      "phrase": "Ku është stacioni i trenit?",
      "english": "Where is the train station?",
      "pron": "koo ESH-tuh stah-TSYOH-nee ee TREH-neet"
    },
    {
      "category": "Getting around",
      "phrase": "A mund të më ndihmoni?",
      "english": "Can you help me?",
      "pron": "ah moond tuh muh ndih-MOH-nee"
    },
    {
      "category": "Eating out",
      "phrase": "Një tavolinë për dy, ju lutem",
      "english": "A table for two, please",
      "pron": "nyuh tah-voh-LEE-nuh puhr dew, yoo LOO-tem"
    },
    {
      "category": "Eating out",
      "phrase": "Menynë, ju lutem",
      "english": "The menu, please",
      "pron": "meh-NEW-nuh, yoo LOO-tem"
    },
    {
      "category": "Eating out",
      "phrase": "Çfarë rekomandoni?",
      "english": "What do you recommend?",
      "pron": "CHFAH-ruh reh-koh-mahn-DOH-nee"
    },
    {
      "category": "Eating out",
      "phrase": "Faturën, ju lutem",
      "english": "The bill, please",
      "pron": "fah-TOO-ruhn, yoo LOO-tem"
    },
    {
      "category": "Eating out",
      "phrase": "Ishte shumë e shijshme",
      "english": "It was very delicious",
      "pron": "ISH-teh SHOO-muh eh SHEEJ-shmeh"
    },
    {
      "category": "Shopping",
      "phrase": "Sa kushton kjo?",
      "english": "How much is this?",
      "pron": "sah KOOSH-ton kyoh"
    },
    {
      "category": "Shopping",
      "phrase": "A pranoni karta krediti?",
      "english": "Do you accept credit cards?",
      "pron": "ah prah-NOH-nee KAR-tah kreh-DEE-tee"
    },
    {
      "category": "Shopping",
      "phrase": "Kjo është shumë e shtrenjtë",
      "english": "This is too expensive",
      "pron": "kyoh ESH-tuh SHOO-muh eh SHTRENY-tuh"
    },
    {
      "category": "Shopping",
      "phrase": "Vetëm po shikoj, faleminderit",
      "english": "Just looking, thank you",
      "pron": "VEH-tuhm poh SHEE-koy, fah-leh-meen-DEH-reet"
    },
    {
      "category": "Shopping",
      "phrase": "A e keni në një madhësi tjetër?",
      "english": "Do you have it in another size?",
      "pron": "ah eh KEH-nee nuh nyuh mah-THUH-see TYEH-tuhr"
    },
    {
      "category": "Emergencies",
      "phrase": "Ndihmë!",
      "english": "Help!",
      "pron": "NDEEH-muh"
    },
    {
      "category": "Emergencies",
      "phrase": "Thirrni policinë!",
      "english": "Call the police!",
      "pron": "THIRR-nee poh-lee-TSEE-nuh"
    },
    {
      "category": "Emergencies",
      "phrase": "Më duhet një mjek",
      "english": "I need a doctor",
      "pron": "muh DOO-het nyuh myek"
    },
    {
      "category": "Emergencies",
      "phrase": "Ku është spitali?",
      "english": "Where is the hospital?",
      "pron": "koo ESH-tuh spee-TAH-lee"
    },
    {
      "category": "Emergencies",
      "phrase": "Kam humbur pasaportën time",
      "english": "I have lost my passport",
      "pron": "kahm HOOM-boor pah-sah-POR-tuhn TEE-meh"
    }
  ],
  "sr": [
    {
      "category": "Greetings",
      "phrase": "Zdravo",
      "english": "Hello",
      "pron": "ZDRA-vo"
    },
    {
      "category": "Greetings",
      "phrase": "Dobro jutro",
      "english": "Good morning",
      "pron": "DOH-broh YOO-troh"
    },
    {
      "category": "Greetings",
      "phrase": "Dobar dan",
      "english": "Good day",
      "pron": "DOH-bar DAHN"
    },
    {
      "category": "Greetings",
      "phrase": "Doviđenja",
      "english": "Goodbye",
      "pron": "doh-VEE-jen-yah"
    },
    {
      "category": "Greetings",
      "phrase": "Laku noć",
      "english": "Good night",
      "pron": "LAH-koo NOCH"
    },
    {
      "category": "Basics",
      "phrase": "Da",
      "english": "Yes",
      "pron": "DAH"
    },
    {
      "category": "Basics",
      "phrase": "Ne",
      "english": "No",
      "pron": "NEH"
    },
    {
      "category": "Basics",
      "phrase": "Hvala",
      "english": "Thank you",
      "pron": "HVAH-lah"
    },
    {
      "category": "Basics",
      "phrase": "Molim",
      "english": "Please",
      "pron": "MOH-leem"
    },
    {
      "category": "Basics",
      "phrase": "Izvinite",
      "english": "Excuse me",
      "pron": "eez-VEE-nee-teh"
    },
    {
      "category": "Getting around",
      "phrase": "Gde je...?",
      "english": "Where is...?",
      "pron": "GDEH yeh"
    },
    {
      "category": "Getting around",
      "phrase": "Koliko košta karta?",
      "english": "How much is the ticket?",
      "pron": "KOH-lee-koh KOSH-tah KAR-tah"
    },
    {
      "category": "Getting around",
      "phrase": "Levo",
      "english": "Left",
      "pron": "LEH-voh"
    },
    {
      "category": "Getting around",
      "phrase": "Desno",
      "english": "Right",
      "pron": "DES-noh"
    },
    {
      "category": "Getting around",
      "phrase": "Pravo",
      "english": "Straight ahead",
      "pron": "PRAH-voh"
    },
    {
      "category": "Eating out",
      "phrase": "Jelovnik, molim.",
      "english": "The menu, please.",
      "pron": "YEH-lohv-neek, MOH-leem"
    },
    {
      "category": "Eating out",
      "phrase": "Šta biste preporučili?",
      "english": "What would you recommend?",
      "pron": "SHTAH bee-steh preh-poh-ROO-chee-lee"
    },
    {
      "category": "Eating out",
      "phrase": "Živeli!",
      "english": "Cheers!",
      "pron": "ZHEE-veh-lee"
    },
    {
      "category": "Eating out",
      "phrase": "Prijatno!",
      "english": "Enjoy your meal!",
      "pron": "PREE-yaht-noh"
    },
    {
      "category": "Eating out",
      "phrase": "Račun, molim.",
      "english": "The bill, please.",
      "pron": "RAH-choon, MOH-leem"
    },
    {
      "category": "Shopping",
      "phrase": "Samo gledam, hvala.",
      "english": "I'm just looking, thanks.",
      "pron": "SAH-moh GLEH-dahm, HVAH-lah"
    },
    {
      "category": "Shopping",
      "phrase": "Koliko košta ovo?",
      "english": "How much is this?",
      "pron": "KOH-lee-koh KOSH-tah OH-voh"
    },
    {
      "category": "Shopping",
      "phrase": "Mogu li da probam ovo?",
      "english": "Can I try this on?",
      "pron": "MOH-goo lee dah PROH-bahm OH-voh"
    },
    {
      "category": "Shopping",
      "phrase": "Imate li popust?",
      "english": "Do you have a discount?",
      "pron": "EE-mah-teh lee POH-poost"
    },
    {
      "category": "Shopping",
      "phrase": "Da li prihvatate kartice?",
      "english": "Do you accept cards?",
      "pron": "dah lee pree-HVAH-tah-teh KAR-tee-tseh"
    },
    {
      "category": "Emergencies",
      "phrase": "Upomoć!",
      "english": "Help!",
      "pron": "oo-POH-moch"
    },
    {
      "category": "Emergencies",
      "phrase": "Pozovite hitnu pomoć!",
      "english": "Call an ambulance!",
      "pron": "poh-ZOH-vee-teh HEET-noo POH-moch"
    },
    {
      "category": "Emergencies",
      "phrase": "Pozovite policiju!",
      "english": "Call the police!",
      "pron": "poh-ZOH-vee-teh poh-LEE-tsee-yoo"
    },
    {
      "category": "Emergencies",
      "phrase": "Izgubio/la sam se.",
      "english": "I am lost.",
      "pron": "eez-GOO-bee-oh/lah sahm seh"
    },
    {
      "category": "Emergencies",
      "phrase": "Treba mi lekar.",
      "english": "I need a doctor.",
      "pron": "TREH-bah mee LEH-kar"
    }
  ],
  "sv": [
    {
      "category": "Greetings",
      "phrase": "Hej",
      "english": "Hello",
      "pron": "HAY"
    },
    {
      "category": "Greetings",
      "phrase": "God morgon",
      "english": "Good morning",
      "pron": "goo MOR-ron"
    },
    {
      "category": "Greetings",
      "phrase": "God kväll",
      "english": "Good evening",
      "pron": "goo KVELL"
    },
    {
      "category": "Greetings",
      "phrase": "Hej då",
      "english": "Goodbye",
      "pron": "HAY doh"
    },
    {
      "category": "Greetings",
      "phrase": "Trevligt att träffas",
      "english": "Nice to meet you",
      "pron": "TREV-lit at TREF-fas"
    },
    {
      "category": "Basics",
      "phrase": "Ja",
      "english": "Yes",
      "pron": "YAH"
    },
    {
      "category": "Basics",
      "phrase": "Nej",
      "english": "No",
      "pron": "NAY"
    },
    {
      "category": "Basics",
      "phrase": "Tack",
      "english": "Thank you",
      "pron": "TAHK"
    },
    {
      "category": "Basics",
      "phrase": "Ursäkta mig",
      "english": "Excuse me",
      "pron": "oor-SHEK-tah may"
    },
    {
      "category": "Basics",
      "phrase": "Förlåt",
      "english": "Sorry",
      "pron": "fur-LOHT"
    },
    {
      "category": "Getting around",
      "phrase": "Var är toaletten?",
      "english": "Where is the toilet?",
      "pron": "VAHR air too-ah-LET-en"
    },
    {
      "category": "Getting around",
      "phrase": "Hur kommer jag till centrum?",
      "english": "How do I get to the city center?",
      "pron": "HOOR KOM-mer yah till SEN-trum"
    },
    {
      "category": "Getting around",
      "phrase": "Var ligger tågstationen?",
      "english": "Where is the train station?",
      "pron": "VAHR LIG-ger TOHG-stah-shoo-nen"
    },
    {
      "category": "Getting around",
      "phrase": "Hur mycket kostar en biljett?",
      "english": "How much does a ticket cost?",
      "pron": "HOOR MEW-ket KOS-tar en bil-YET"
    },
    {
      "category": "Getting around",
      "phrase": "Går den här bussen till flygplatsen?",
      "english": "Does this bus go to the airport?",
      "pron": "GOHR den HAIR BUS-sen till FLEWG-plat-sen"
    },
    {
      "category": "Eating out",
      "phrase": "Ett bord för två, tack",
      "english": "A table for two, please",
      "pron": "et BOORD fur TVOH, TAHK"
    },
    {
      "category": "Eating out",
      "phrase": "Kan jag få menyn?",
      "english": "Can I have the menu?",
      "pron": "kan yah FOH meh-NEWN"
    },
    {
      "category": "Eating out",
      "phrase": "Notan, tack",
      "english": "The bill, please",
      "pron": "NOO-tan, TAHK"
    },
    {
      "category": "Eating out",
      "phrase": "Vad rekommenderar du?",
      "english": "What do you recommend?",
      "pron": "VAHD reh-koh-men-DEH-rar doo"
    },
    {
      "category": "Eating out",
      "phrase": "Skål!",
      "english": "Cheers!",
      "pron": "SKOHL"
    },
    {
      "category": "Shopping",
      "phrase": "Hur mycket kostar det?",
      "english": "How much does it cost?",
      "pron": "HOOR MEW-ket KOS-tar day"
    },
    {
      "category": "Shopping",
      "phrase": "Kan jag betala med kort?",
      "english": "Can I pay by card?",
      "pron": "kan yah beh-TAH-lah meh KORT"
    },
    {
      "category": "Shopping",
      "phrase": "Jag tittar bara",
      "english": "I'm just looking",
      "pron": "yah TIT-tar BAH-rah"
    },
    {
      "category": "Shopping",
      "phrase": "Har ni det i en annan storlek?",
      "english": "Do you have it in another size?",
      "pron": "HAHR nee day ee en AH-nan STOOR-lehk"
    },
    {
      "category": "Shopping",
      "phrase": "Var ligger närmaste affär?",
      "english": "Where's the nearest store?",
      "pron": "VAHR LIG-ger NAIR-mas-teh ah-FAIR"
    },
    {
      "category": "Emergencies",
      "phrase": "Hjälp!",
      "english": "Help!",
      "pron": "YELP"
    },
    {
      "category": "Emergencies",
      "phrase": "Ring polisen!",
      "english": "Call the police!",
      "pron": "RING poo-LEE-sen"
    },
    {
      "category": "Emergencies",
      "phrase": "Jag behöver en läkare",
      "english": "I need a doctor",
      "pron": "yah beh-HUR-ver en LEH-kah-reh"
    },
    {
      "category": "Emergencies",
      "phrase": "Var är närmaste sjukhus?",
      "english": "Where is the nearest hospital?",
      "pron": "VAHR air NAIR-mas-teh SHOOK-hoos"
    },
    {
      "category": "Emergencies",
      "phrase": "Jag är vilse",
      "english": "I am lost",
      "pron": "yah air VIL-seh"
    }
  ],
  "sw": [
    {
      "category": "Greetings",
      "phrase": "Jambo",
      "english": "Hello",
      "pron": "JAHM-boh"
    },
    {
      "category": "Greetings",
      "phrase": "Habari za asubuhi?",
      "english": "Good morning",
      "pron": "hah-BAH-ree zah ah-soo-BOO-hee"
    },
    {
      "category": "Greetings",
      "phrase": "Karibu",
      "english": "Welcome",
      "pron": "kah-REE-boo"
    },
    {
      "category": "Greetings",
      "phrase": "Asante sana",
      "english": "Thank you very much",
      "pron": "ah-SAHN-teh SAH-nah"
    },
    {
      "category": "Greetings",
      "phrase": "Kwaheri",
      "english": "Goodbye",
      "pron": "kwah-HEH-ree"
    },
    {
      "category": "Basics",
      "phrase": "Ndiyo",
      "english": "Yes",
      "pron": "NDEE-yoh"
    },
    {
      "category": "Basics",
      "phrase": "Hapana",
      "english": "No",
      "pron": "hah-PAH-nah"
    },
    {
      "category": "Basics",
      "phrase": "Tafadhali",
      "english": "Please",
      "pron": "tah-fah-THAH-lee"
    },
    {
      "category": "Basics",
      "phrase": "Samahani",
      "english": "Excuse me / Sorry",
      "pron": "sah-mah-HAH-nee"
    },
    {
      "category": "Basics",
      "phrase": "Sielewi",
      "english": "I don't understand",
      "pron": "see-eh-LEH-wee"
    },
    {
      "category": "Getting around",
      "phrase": "Kituo cha basi kiko wapi?",
      "english": "Where is the bus station?",
      "pron": "kee-TOO-oh chah BAH-see KEE-koh WAH-pee"
    },
    {
      "category": "Getting around",
      "phrase": "Nataka kwenda uwanja wa ndege",
      "english": "I want to go to the airport",
      "pron": "nah-TAH-kah KWEN-dah oo-WAHN-jah wah NDEH-geh"
    },
    {
      "category": "Getting around",
      "phrase": "Choo kiko wapi?",
      "english": "Where is the toilet?",
      "pron": "CHOH KEE-koh WAH-pee"
    },
    {
      "category": "Getting around",
      "phrase": "Ni mbali kiasi gani?",
      "english": "How far is it?",
      "pron": "nee MBAH-lee kee-AH-see GAH-nee"
    },
    {
      "category": "Getting around",
      "phrase": "Simama hapa, tafadhali",
      "english": "Stop here, please",
      "pron": "see-MAH-mah HAH-pah, tah-fah-THAH-lee"
    },
    {
      "category": "Eating out",
      "phrase": "Nina njaa",
      "english": "I am hungry",
      "pron": "NEE-nah NJAH"
    },
    {
      "category": "Eating out",
      "phrase": "Naomba menyu",
      "english": "May I have the menu, please",
      "pron": "nah-OHM-bah MEH-nyoo"
    },
    {
      "category": "Eating out",
      "phrase": "Chakula hiki ni kitamu",
      "english": "This food is delicious",
      "pron": "chah-KOO-lah HEE-kee nee kee-TAH-moo"
    },
    {
      "category": "Eating out",
      "phrase": "Naomba bili",
      "english": "The bill, please",
      "pron": "nah-OHM-bah BEE-lee"
    },
    {
      "category": "Eating out",
      "phrase": "Maji baridi, tafadhali",
      "english": "Cold water, please",
      "pron": "MAH-jee bah-REE-dee, tah-fah-THAH-lee"
    },
    {
      "category": "Shopping",
      "phrase": "Bei gani?",
      "english": "How much is it?",
      "pron": "BAY GAH-nee"
    },
    {
      "category": "Shopping",
      "phrase": "Ni ghali sana",
      "english": "It's too expensive",
      "pron": "nee GHAH-lee SAH-nah"
    },
    {
      "category": "Shopping",
      "phrase": "Punguza bei kidogo",
      "english": "Please lower the price a little",
      "pron": "poon-GOO-zah BAY kee-DOH-goh"
    },
    {
      "category": "Shopping",
      "phrase": "Nataka kununua hii",
      "english": "I want to buy this",
      "pron": "nah-TAH-kah koo-noo-NOO-ah HEE"
    },
    {
      "category": "Shopping",
      "phrase": "Naangalia tu",
      "english": "I'm just looking",
      "pron": "nah-ahn-gah-LEE-ah too"
    },
    {
      "category": "Emergencies",
      "phrase": "Nisaidie!",
      "english": "Help me!",
      "pron": "nee-sah-ee-DEE-eh"
    },
    {
      "category": "Emergencies",
      "phrase": "Piga simu polisi!",
      "english": "Call the police!",
      "pron": "PEE-gah SEE-moo poh-LEE-see"
    },
    {
      "category": "Emergencies",
      "phrase": "Nahitaji daktari",
      "english": "I need a doctor",
      "pron": "nah-hee-TAH-jee dahk-TAH-ree"
    },
    {
      "category": "Emergencies",
      "phrase": "Hospitali iko wapi?",
      "english": "Where is the hospital?",
      "pron": "hoh-spee-TAH-lee EE-koh WAH-pee"
    },
    {
      "category": "Emergencies",
      "phrase": "Nimepotea",
      "english": "I am lost",
      "pron": "nee-meh-poh-TEH-ah"
    }
  ],
  "tl": [
    {
      "category": "Greetings",
      "phrase": "Kumusta",
      "english": "Hello",
      "pron": "koo-MOOS-tah"
    },
    {
      "category": "Greetings",
      "phrase": "Magandang umaga po",
      "english": "Good morning",
      "pron": "mah-gahn-DAHNG oo-MAH-gah poh"
    },
    {
      "category": "Greetings",
      "phrase": "Magandang hapon po",
      "english": "Good afternoon",
      "pron": "mah-gahn-DAHNG HAH-pohn poh"
    },
    {
      "category": "Greetings",
      "phrase": "Magandang gabi po",
      "english": "Good evening",
      "pron": "mah-gahn-DAHNG gah-BEE poh"
    },
    {
      "category": "Greetings",
      "phrase": "Paalam",
      "english": "Goodbye",
      "pron": "pah-AH-lahm"
    },
    {
      "category": "Basics",
      "phrase": "Pakiusap po",
      "english": "Please",
      "pron": "pah-kee-OO-sahp poh"
    },
    {
      "category": "Basics",
      "phrase": "Salamat po",
      "english": "Thank you",
      "pron": "sah-LAH-maht poh"
    },
    {
      "category": "Basics",
      "phrase": "Walang anuman",
      "english": "You're welcome",
      "pron": "WAH-lahng ah-NOO-mahn"
    },
    {
      "category": "Basics",
      "phrase": "Oo / Hindi",
      "english": "Yes / No",
      "pron": "oh-oh / hin-DEE"
    },
    {
      "category": "Basics",
      "phrase": "Paumanhin po",
      "english": "Excuse me",
      "pron": "pah-oo-MAHN-heen poh"
    },
    {
      "category": "Getting around",
      "phrase": "Nasaan po ang...?",
      "english": "Where is...?",
      "pron": "nah-SAH-ahn poh ahng"
    },
    {
      "category": "Getting around",
      "phrase": "Nasaan po ang banyo?",
      "english": "Where is the toilet?",
      "pron": "nah-SAH-ahn poh ahng BAHN-yoh"
    },
    {
      "category": "Getting around",
      "phrase": "Magkano ang tiket?",
      "english": "How much is the ticket?",
      "pron": "mahg-KAH-noh ahng TEE-keht"
    },
    {
      "category": "Getting around",
      "phrase": "Gusto kong pumunta sa...",
      "english": "I want to go to...",
      "pron": "GOOS-toh kong poo-MOON-tah sah"
    },
    {
      "category": "Getting around",
      "phrase": "Para po dito",
      "english": "Stop here, please",
      "pron": "PAH-rah poh DEE-toh"
    },
    {
      "category": "Eating out",
      "phrase": "Mesa po para sa dalawa",
      "english": "A table for two, please",
      "pron": "MEH-sah poh PAH-rah sah dah-lah-WAH"
    },
    {
      "category": "Eating out",
      "phrase": "Pahingi po ng menu",
      "english": "The menu, please",
      "pron": "pah-HEE-ngee poh nahng MEH-noo"
    },
    {
      "category": "Eating out",
      "phrase": "Pahingi po ng bill",
      "english": "The bill, please",
      "pron": "pah-HEE-ngee poh nahng bihl"
    },
    {
      "category": "Eating out",
      "phrase": "Tubig",
      "english": "Water",
      "pron": "TOO-big"
    },
    {
      "category": "Eating out",
      "phrase": "Tagay!",
      "english": "Cheers!",
      "pron": "tah-GUY"
    },
    {
      "category": "Shopping",
      "phrase": "Magkano po ito?",
      "english": "How much is it?",
      "pron": "mahg-KAH-noh poh EE-toh"
    },
    {
      "category": "Shopping",
      "phrase": "Ang mahal naman!",
      "english": "It's too expensive!",
      "pron": "ahng mah-HAHL nah-MAHN"
    },
    {
      "category": "Shopping",
      "phrase": "Tumatanggap po ba kayo ng credit card?",
      "english": "Do you accept cards?",
      "pron": "too-mah-tahng-GAHP poh bah kah-YOH nahng KREH-dit kahrd"
    },
    {
      "category": "Shopping",
      "phrase": "Tumitingin lang po ako",
      "english": "I'm just looking",
      "pron": "too-mee-tee-NGEEN lahng poh AH-koh"
    },
    {
      "category": "Shopping",
      "phrase": "Pabili po",
      "english": "I'd like to buy this",
      "pron": "pah-bee-LEE poh"
    },
    {
      "category": "Emergencies",
      "phrase": "Tulong!",
      "english": "Help!",
      "pron": "TOO-long"
    },
    {
      "category": "Emergencies",
      "phrase": "Tumawag ng pulis!",
      "english": "Call the police!",
      "pron": "too-mah-WAHG nahng POO-lees"
    },
    {
      "category": "Emergencies",
      "phrase": "Kailangan ko ng doktor",
      "english": "I need a doctor",
      "pron": "kah-ee-LAH-ngahn koh nahng DOK-tor"
    },
    {
      "category": "Emergencies",
      "phrase": "Nawawala ako",
      "english": "I'm lost",
      "pron": "nah-wah-WAH-lah AH-koh"
    },
    {
      "category": "Emergencies",
      "phrase": "Tumawag ng ambulansya!",
      "english": "Call an ambulance!",
      "pron": "too-mah-WAHG nahng ahm-boo-LAHN-shah"
    }
  ],
  "tr": [
    {
      "category": "Greetings",
      "phrase": "Merhaba",
      "english": "Hello",
      "pron": "MER-ha-ba"
    },
    {
      "category": "Greetings",
      "phrase": "Günaydın",
      "english": "Good morning",
      "pron": "gew-nai-DUHN"
    },
    {
      "category": "Greetings",
      "phrase": "İyi akşamlar",
      "english": "Good evening",
      "pron": "ee-YEE ak-sham-LAR"
    },
    {
      "category": "Greetings",
      "phrase": "İyi geceler",
      "english": "Good night",
      "pron": "ee-YEE geh-jeh-LER"
    },
    {
      "category": "Greetings",
      "phrase": "Nasılsınız?",
      "english": "How are you? (formal)",
      "pron": "NA-suhl-suh-nuhz"
    },
    {
      "category": "Basics",
      "phrase": "Evet",
      "english": "Yes",
      "pron": "EH-vet"
    },
    {
      "category": "Basics",
      "phrase": "Hayır",
      "english": "No",
      "pron": "ha-YUHR"
    },
    {
      "category": "Basics",
      "phrase": "Lütfen",
      "english": "Please",
      "pron": "LEWT-fen"
    },
    {
      "category": "Basics",
      "phrase": "Teşekkür ederim",
      "english": "Thank you",
      "pron": "teh-shek-KEWR eh-deh-rim"
    },
    {
      "category": "Basics",
      "phrase": "Affedersiniz",
      "english": "Excuse me",
      "pron": "af-feh-DER-see-niz"
    },
    {
      "category": "Getting around",
      "phrase": "Havaalanı nerede?",
      "english": "Where is the airport?",
      "pron": "ha-va-ah-la-NUH NEH-reh-deh"
    },
    {
      "category": "Getting around",
      "phrase": "Bir bilet istiyorum",
      "english": "I would like a ticket",
      "pron": "beer bee-LET ees-tee-YO-room"
    },
    {
      "category": "Getting around",
      "phrase": "Otobüs durağı nerede?",
      "english": "Where is the bus stop?",
      "pron": "o-to-BEWS doo-rah-UH NEH-reh-deh"
    },
    {
      "category": "Getting around",
      "phrase": "Sağa dönün",
      "english": "Turn right",
      "pron": "sah-AH dur-NEWN"
    },
    {
      "category": "Getting around",
      "phrase": "Ne kadar uzakta?",
      "english": "How far is it?",
      "pron": "NEH ka-dar oo-zahk-TAH"
    },
    {
      "category": "Eating out",
      "phrase": "Menü lütfen",
      "english": "Menu, please",
      "pron": "meh-NEW LEWT-fen"
    },
    {
      "category": "Eating out",
      "phrase": "Hesap lütfen",
      "english": "The bill, please",
      "pron": "heh-SAP LEWT-fen"
    },
    {
      "category": "Eating out",
      "phrase": "Bu çok lezzetli",
      "english": "This is very delicious",
      "pron": "boo chok lez-ZET-lee"
    },
    {
      "category": "Eating out",
      "phrase": "Su alabilir miyim?",
      "english": "Can I have some water?",
      "pron": "soo ah-la-bee-LEER mee-yim"
    },
    {
      "category": "Eating out",
      "phrase": "Vejetaryen yemekleriniz var mı?",
      "english": "Do you have vegetarian dishes?",
      "pron": "veh-zheh-tar-YEN yeh-mek-leh-ree-NEEZ var muh"
    },
    {
      "category": "Shopping",
      "phrase": "Ne kadar?",
      "english": "How much is it?",
      "pron": "NEH ka-DAR"
    },
    {
      "category": "Shopping",
      "phrase": "Çok pahalı",
      "english": "Very expensive",
      "pron": "chok pa-ha-LUH"
    },
    {
      "category": "Shopping",
      "phrase": "İndirim var mı?",
      "english": "Is there a discount?",
      "pron": "een-dee-REEM var muh"
    },
    {
      "category": "Shopping",
      "phrase": "Sadece bakıyorum",
      "english": "I'm just looking",
      "pron": "sa-deh-JEH ba-kuh-YO-room"
    },
    {
      "category": "Shopping",
      "phrase": "Kredi kartı geçerli mi?",
      "english": "Is credit card accepted?",
      "pron": "kreh-DEE kar-tuh geh-CHER-lee mee"
    },
    {
      "category": "Emergencies",
      "phrase": "İmdat!",
      "english": "Help!",
      "pron": "im-DAHT"
    },
    {
      "category": "Emergencies",
      "phrase": "Yardım edin!",
      "english": "Help me!",
      "pron": "yar-DUHM eh-DEEN"
    },
    {
      "category": "Emergencies",
      "phrase": "Doktor çağırın!",
      "english": "Call a doctor!",
      "pron": "dok-TOR chah-uh-RUHN"
    },
    {
      "category": "Emergencies",
      "phrase": "Polis çağırın!",
      "english": "Call the police!",
      "pron": "po-LEES chah-uh-RUHN"
    },
    {
      "category": "Emergencies",
      "phrase": "Hastaneye gitmem lazım",
      "english": "I need to go to the hospital",
      "pron": "has-ta-neh-YEH geet-MEM la-ZUHM"
    }
  ],
  "uk": [
    {
      "category": "Greetings",
      "phrase": "Добрий день",
      "english": "Hello",
      "pron": "DOH-bry den'"
    },
    {
      "category": "Greetings",
      "phrase": "Доброго ранку",
      "english": "Good morning",
      "pron": "DOH-bro-ho RAHN-koo"
    },
    {
      "category": "Greetings",
      "phrase": "Добрий вечір",
      "english": "Good evening",
      "pron": "DOH-bry VEH-cheer"
    },
    {
      "category": "Greetings",
      "phrase": "Привіт",
      "english": "Hi",
      "pron": "pry-VEET"
    },
    {
      "category": "Greetings",
      "phrase": "До побачення",
      "english": "Goodbye",
      "pron": "doh po-BA-chen-nya"
    },
    {
      "category": "Basics",
      "phrase": "Будь ласка",
      "english": "Please",
      "pron": "bood' LAHS-ka"
    },
    {
      "category": "Basics",
      "phrase": "Дякую",
      "english": "Thank you",
      "pron": "DYA-koo-yoo"
    },
    {
      "category": "Basics",
      "phrase": "Так / Ні",
      "english": "Yes / No",
      "pron": "tak / nee"
    },
    {
      "category": "Basics",
      "phrase": "Вибачте",
      "english": "Excuse me",
      "pron": "VY-bach-teh"
    },
    {
      "category": "Basics",
      "phrase": "Ви розмовляєте англійською?",
      "english": "Do you speak English?",
      "pron": "vy roz-mov-LYA-ye-teh an-HLEEY-sko-yoo"
    },
    {
      "category": "Getting around",
      "phrase": "Де знаходиться...?",
      "english": "Where is...?",
      "pron": "deh zna-KHOH-dyt-sya"
    },
    {
      "category": "Getting around",
      "phrase": "Де туалет?",
      "english": "Where is the toilet?",
      "pron": "deh too-a-LET"
    },
    {
      "category": "Getting around",
      "phrase": "Скільки коштує квиток?",
      "english": "How much is the ticket?",
      "pron": "SKEEL-ky KOSH-too-ye kvy-TOK"
    },
    {
      "category": "Getting around",
      "phrase": "Я хочу поїхати до...",
      "english": "I want to go to...",
      "pron": "ya KHO-choo po-YEE-kha-ty do"
    },
    {
      "category": "Getting around",
      "phrase": "Зупиніть тут, будь ласка",
      "english": "Stop here, please",
      "pron": "zoo-py-NEET' toot, bood' LAHS-ka"
    },
    {
      "category": "Eating out",
      "phrase": "Столик на двох, будь ласка",
      "english": "A table for two, please",
      "pron": "STOH-lyk na dvokh, bood' LAHS-ka"
    },
    {
      "category": "Eating out",
      "phrase": "Меню, будь ласка",
      "english": "The menu, please",
      "pron": "meh-NYOO, bood' LAHS-ka"
    },
    {
      "category": "Eating out",
      "phrase": "Рахунок, будь ласка",
      "english": "The bill, please",
      "pron": "ra-KHOO-nok, bood' LAHS-ka"
    },
    {
      "category": "Eating out",
      "phrase": "Вода",
      "english": "Water",
      "pron": "vo-DAH"
    },
    {
      "category": "Eating out",
      "phrase": "Будьмо!",
      "english": "Cheers!",
      "pron": "BOOD'-mo"
    },
    {
      "category": "Shopping",
      "phrase": "Скільки це коштує?",
      "english": "How much is it?",
      "pron": "SKEEL-ky tseh KOSH-too-ye"
    },
    {
      "category": "Shopping",
      "phrase": "Це занадто дорого",
      "english": "It's too expensive",
      "pron": "tseh za-NAHD-to DOH-ro-ho"
    },
    {
      "category": "Shopping",
      "phrase": "Ви приймаєте картки?",
      "english": "Do you accept cards?",
      "pron": "vy pryy-MA-ye-teh KART-ky"
    },
    {
      "category": "Shopping",
      "phrase": "Я просто дивлюся",
      "english": "I'm just looking",
      "pron": "ya PROS-to dyv-LYOO-sya"
    },
    {
      "category": "Shopping",
      "phrase": "Можна це приміряти?",
      "english": "Can I try it on?",
      "pron": "MOZH-na tseh pry-MEE-rya-ty"
    },
    {
      "category": "Emergencies",
      "phrase": "Допоможіть!",
      "english": "Help!",
      "pron": "do-po-mo-ZHEET'"
    },
    {
      "category": "Emergencies",
      "phrase": "Викличте поліцію",
      "english": "Call the police",
      "pron": "VYK-lych-teh po-LEE-tsee-yoo"
    },
    {
      "category": "Emergencies",
      "phrase": "Мені потрібен лікар",
      "english": "I need a doctor",
      "pron": "meh-NEE po-TREE-ben LEE-kar"
    },
    {
      "category": "Emergencies",
      "phrase": "Я загубився / загубилася",
      "english": "I'm lost",
      "pron": "ya za-hoo-BYV-sya / za-hoo-BY-la-sya"
    },
    {
      "category": "Emergencies",
      "phrase": "Викличте швидку допомогу",
      "english": "Call an ambulance",
      "pron": "VYK-lych-teh shvyd-KOO do-po-MOH-hoo"
    }
  ],
  "uz": [
    {
      "category": "Greetings",
      "phrase": "Salom",
      "english": "Hello",
      "pron": "sah-LOHM"
    },
    {
      "category": "Greetings",
      "phrase": "Assalomu alaykum",
      "english": "Peace be upon you",
      "pron": "ah-sah-LOH-moo ah-LAY-koom"
    },
    {
      "category": "Greetings",
      "phrase": "Xayrli tong",
      "english": "Good morning",
      "pron": "khayr-LEE tong"
    },
    {
      "category": "Greetings",
      "phrase": "Xayrli kech",
      "english": "Good evening",
      "pron": "khayr-LEE kech"
    },
    {
      "category": "Greetings",
      "phrase": "Xayr",
      "english": "Goodbye",
      "pron": "khayr"
    },
    {
      "category": "Basics",
      "phrase": "Ha / Yo'q",
      "english": "Yes / No",
      "pron": "hah / yohk"
    },
    {
      "category": "Basics",
      "phrase": "Iltimos",
      "english": "Please",
      "pron": "eel-tee-MOHS"
    },
    {
      "category": "Basics",
      "phrase": "Rahmat",
      "english": "Thank you",
      "pron": "rah-MAHT"
    },
    {
      "category": "Basics",
      "phrase": "Kechirasiz",
      "english": "Excuse me",
      "pron": "keh-chee-rah-SEEZ"
    },
    {
      "category": "Basics",
      "phrase": "Tushunmadim",
      "english": "I don't understand",
      "pron": "too-SHOON-mah-deem"
    },
    {
      "category": "Getting around",
      "phrase": "Mehmonxona qayerda?",
      "english": "Where is the hotel?",
      "pron": "meh-mon-khoh-NAH kah-yer-DAH"
    },
    {
      "category": "Getting around",
      "phrase": "Hojatxona qayerda?",
      "english": "Where is the toilet?",
      "pron": "ho-jaht-khoh-NAH kah-yer-DAH"
    },
    {
      "category": "Getting around",
      "phrase": "Bilet qancha turadi?",
      "english": "How much is the ticket?",
      "pron": "bee-LET kahn-CHAH too-rah-DEE"
    },
    {
      "category": "Getting around",
      "phrase": "Menga taksi kerak",
      "english": "I need a taxi",
      "pron": "men-GAH tak-SEE keh-RAHK"
    },
    {
      "category": "Getting around",
      "phrase": "To'g'riga boring",
      "english": "Go straight ahead",
      "pron": "taw-ghree-GAH boh-REENG"
    },
    {
      "category": "Eating out",
      "phrase": "Ikki kishilik stol, iltimos",
      "english": "A table for two, please",
      "pron": "ik-KEE kee-shee-LEEK stohl eel-tee-MOHS"
    },
    {
      "category": "Eating out",
      "phrase": "Menyuni bering",
      "english": "The menu, please",
      "pron": "meh-nyoo-NEE beh-RING"
    },
    {
      "category": "Eating out",
      "phrase": "Hisobni bering",
      "english": "The bill, please",
      "pron": "hee-sob-NEE beh-RING"
    },
    {
      "category": "Eating out",
      "phrase": "Suv",
      "english": "Water",
      "pron": "soov"
    },
    {
      "category": "Shopping",
      "phrase": "Bu qancha turadi?",
      "english": "How much is it?",
      "pron": "boo kahn-CHAH too-rah-DEE"
    },
    {
      "category": "Shopping",
      "phrase": "Bu juda qimmat",
      "english": "It's too expensive",
      "pron": "boo joo-DAH keem-MAHT"
    },
    {
      "category": "Shopping",
      "phrase": "Kartani qabul qilasizmi?",
      "english": "Do you accept cards?",
      "pron": "kahr-tah-NEE kah-BOOL kee-lah-SEEZ-mee"
    },
    {
      "category": "Shopping",
      "phrase": "Men shunchaki ko'rayapman",
      "english": "I'm just looking",
      "pron": "men shoon-chah-KEE kaw-rah-yahp-MAHN"
    },
    {
      "category": "Shopping",
      "phrase": "Chegirma bormi?",
      "english": "Is there a discount?",
      "pron": "cheh-geer-MAH BOHR-mee"
    },
    {
      "category": "Emergencies",
      "phrase": "Yordam bering!",
      "english": "Help!",
      "pron": "yor-DAHM beh-RING"
    },
    {
      "category": "Emergencies",
      "phrase": "Politsiyani chaqiring!",
      "english": "Call the police",
      "pron": "poh-lee-tsee-yah-NEE chah-kee-RING"
    },
    {
      "category": "Emergencies",
      "phrase": "Menga shifokor kerak",
      "english": "I need a doctor",
      "pron": "men-GAH shee-foh-KOR keh-RAHK"
    },
    {
      "category": "Emergencies",
      "phrase": "Men adashib qoldim",
      "english": "I'm lost",
      "pron": "men ah-dah-SHEEB kohl-DEEM"
    },
    {
      "category": "Emergencies",
      "phrase": "Tez yordam chaqiring!",
      "english": "Call an ambulance",
      "pron": "tez yor-DAHM chah-kee-RING"
    }
  ],
  "vi": [
    {
      "category": "Greetings",
      "phrase": "Xin chào",
      "english": "Hello",
      "pron": "sin CHOW"
    },
    {
      "category": "Greetings",
      "phrase": "Chào buổi sáng",
      "english": "Good morning",
      "pron": "chow boo-ee SAHNG"
    },
    {
      "category": "Greetings",
      "phrase": "Chào buổi tối",
      "english": "Good evening",
      "pron": "chow boo-ee TOY"
    },
    {
      "category": "Greetings",
      "phrase": "Tạm biệt",
      "english": "Goodbye",
      "pron": "tahm BYET"
    },
    {
      "category": "Greetings",
      "phrase": "Bạn khỏe không?",
      "english": "How are you?",
      "pron": "bahn KHWEH khohng"
    },
    {
      "category": "Basics",
      "phrase": "Có",
      "english": "Yes",
      "pron": "GAW"
    },
    {
      "category": "Basics",
      "phrase": "Không",
      "english": "No",
      "pron": "KHOHNG"
    },
    {
      "category": "Basics",
      "phrase": "Làm ơn",
      "english": "Please",
      "pron": "lahm UHN"
    },
    {
      "category": "Basics",
      "phrase": "Cảm ơn",
      "english": "Thank you",
      "pron": "GAHM uhn"
    },
    {
      "category": "Basics",
      "phrase": "Xin lỗi",
      "english": "Sorry",
      "pron": "sin LOY"
    },
    {
      "category": "Getting around",
      "phrase": "Sân bay ở đâu?",
      "english": "Where is the airport?",
      "pron": "suhn BYE uh doh"
    },
    {
      "category": "Getting around",
      "phrase": "Trạm xe buýt ở đâu?",
      "english": "Where is the bus stop?",
      "pron": "chahm seh BWEET uh doh"
    },
    {
      "category": "Getting around",
      "phrase": "Rẽ trái",
      "english": "Turn left",
      "pron": "zeh CHAI"
    },
    {
      "category": "Getting around",
      "phrase": "Rẽ phải",
      "english": "Turn right",
      "pron": "zeh FAI"
    },
    {
      "category": "Getting around",
      "phrase": "Đi thẳng",
      "english": "Go straight",
      "pron": "dee TANG"
    },
    {
      "category": "Eating out",
      "phrase": "Thực đơn",
      "english": "Menu",
      "pron": "tuhk DUHN"
    },
    {
      "category": "Eating out",
      "phrase": "Tôi muốn gọi món này",
      "english": "I would like to order this",
      "pron": "toy moo-uhn goy mon NYE"
    },
    {
      "category": "Eating out",
      "phrase": "Ngon quá!",
      "english": "Delicious!",
      "pron": "NGON gwah"
    },
    {
      "category": "Eating out",
      "phrase": "Tính tiền",
      "english": "Check, please",
      "pron": "TEEN tee-en"
    },
    {
      "category": "Eating out",
      "phrase": "Tôi ăn chay",
      "english": "I am vegetarian",
      "pron": "toy an CHAI"
    },
    {
      "category": "Shopping",
      "phrase": "Cái này giá bao nhiêu?",
      "english": "How much is this?",
      "pron": "gai nye zah bow NYEW"
    },
    {
      "category": "Shopping",
      "phrase": "Đắt quá",
      "english": "Too expensive",
      "pron": "DAT gwah"
    },
    {
      "category": "Shopping",
      "phrase": "Có thể giảm giá không?",
      "english": "Can you lower the price?",
      "pron": "gaw teh ZAHM zah khohng"
    },
    {
      "category": "Shopping",
      "phrase": "Tôi muốn mua cái này",
      "english": "I want to buy this",
      "pron": "toy moo-uhn MOO-a gai nye"
    },
    {
      "category": "Shopping",
      "phrase": "Có thể trả bằng thẻ không?",
      "english": "Can I pay by card?",
      "pron": "gaw teh chah bang TEH khohng"
    },
    {
      "category": "Emergencies",
      "phrase": "Cứu tôi với!",
      "english": "Help me!",
      "pron": "KOO toy voy"
    },
    {
      "category": "Emergencies",
      "phrase": "Gọi cảnh sát!",
      "english": "Call the police!",
      "pron": "goy gahn SAHT"
    },
    {
      "category": "Emergencies",
      "phrase": "Tôi cần bác sĩ",
      "english": "I need a doctor",
      "pron": "toy guhn bahk SEE"
    },
    {
      "category": "Emergencies",
      "phrase": "Bệnh viện ở đâu?",
      "english": "Where is the hospital?",
      "pron": "beng VEE-en uh doh"
    },
    {
      "category": "Emergencies",
      "phrase": "Tôi bị mất hộ chiếu",
      "english": "I lost my passport",
      "pron": "toy bee muht ho CHEE-oh"
    }
  ],
  "zu": [
    {
      "category": "Greetings",
      "phrase": "Sawubona",
      "english": "Hello (to one person)",
      "pron": "sah-woo-BOH-nah"
    },
    {
      "category": "Greetings",
      "phrase": "Sanibonani",
      "english": "Hello (to more than one person)",
      "pron": "sah-nee-boh-NAH-nee"
    },
    {
      "category": "Greetings",
      "phrase": "Unjani?",
      "english": "How are you?",
      "pron": "oon-JAH-nee"
    },
    {
      "category": "Greetings",
      "phrase": "Ngiyaphila",
      "english": "I am fine",
      "pron": "ngee-yah-PEE-lah"
    },
    {
      "category": "Greetings",
      "phrase": "Hamba kahle",
      "english": "Goodbye",
      "pron": "HAHM-bah KAH-shleh"
    },
    {
      "category": "Basics",
      "phrase": "Yebo",
      "english": "Yes",
      "pron": "YEH-boh"
    },
    {
      "category": "Basics",
      "phrase": "Cha",
      "english": "No",
      "pron": "CHAH"
    },
    {
      "category": "Basics",
      "phrase": "Ngicela",
      "english": "Please",
      "pron": "ngee-SEH-lah"
    },
    {
      "category": "Basics",
      "phrase": "Ngiyabonga",
      "english": "Thank you",
      "pron": "ngee-yah-BOHN-gah"
    },
    {
      "category": "Basics",
      "phrase": "Uxolo",
      "english": "Sorry, excuse me",
      "pron": "oo-SHOH-loh"
    },
    {
      "category": "Getting around",
      "phrase": "Ngidukile",
      "english": "I am lost",
      "pron": "ngee-doo-KEE-leh"
    },
    {
      "category": "Getting around",
      "phrase": "Kwesokudla",
      "english": "To the right",
      "pron": "kweh-soh-KOO-dlah"
    },
    {
      "category": "Getting around",
      "phrase": "Kwesobunxele",
      "english": "To the left",
      "pron": "kweh-soh-boo-NXEH-leh"
    },
    {
      "category": "Getting around",
      "phrase": "Itekisi",
      "english": "Taxi",
      "pron": "ee-teh-KEE-see"
    },
    {
      "category": "Getting around",
      "phrase": "Isikhumulo sezindiza",
      "english": "Airport",
      "pron": "ee-see-koo-MOO-loh seh-zeen-DEE-zah"
    },
    {
      "category": "Eating out",
      "phrase": "Ngilambile",
      "english": "I am hungry",
      "pron": "ngee-lahm-BEE-leh"
    },
    {
      "category": "Eating out",
      "phrase": "Ngicela imenyu",
      "english": "The menu, please",
      "pron": "ngee-SEH-lah ee-MEH-nyoo"
    },
    {
      "category": "Eating out",
      "phrase": "Ngicela amanzi",
      "english": "Water, please",
      "pron": "ngee-SEH-lah ah-MAHN-zee"
    },
    {
      "category": "Eating out",
      "phrase": "Kumnandi!",
      "english": "Delicious!",
      "pron": "koom-NAHN-dee"
    },
    {
      "category": "Eating out",
      "phrase": "Ngicela ibhili",
      "english": "The bill, please",
      "pron": "ngee-SEH-lah ee-BEE-lee"
    },
    {
      "category": "Shopping",
      "phrase": "Malini?",
      "english": "How much (is it)?",
      "pron": "mah-LEE-nee"
    },
    {
      "category": "Shopping",
      "phrase": "Kubiza kakhulu",
      "english": "It's expensive",
      "pron": "koo-BEE-zah kah-KOO-loo"
    },
    {
      "category": "Shopping",
      "phrase": "Ngiyabuka nje",
      "english": "I'm just looking",
      "pron": "ngee-yah-BOO-kah njeh"
    },
    {
      "category": "Shopping",
      "phrase": "Ngicela lokhu",
      "english": "This one, please",
      "pron": "ngee-SEH-lah LOH-koo"
    },
    {
      "category": "Emergencies",
      "phrase": "Ngisize!",
      "english": "Help me!",
      "pron": "ngee-SEE-zeh"
    },
    {
      "category": "Emergencies",
      "phrase": "Ngiyagula",
      "english": "I am sick",
      "pron": "ngee-yah-GOO-lah"
    },
    {
      "category": "Emergencies",
      "phrase": "Ngizobiza amaphoyisa!",
      "english": "I will call the police!",
      "pron": "ngee-zoh-BEE-zah ah-mah-poh-YEE-sah"
    },
    {
      "category": "Emergencies",
      "phrase": "Ngidinga udokotela",
      "english": "I need a doctor",
      "pron": "ngee-DEE-ngah oo-doh-koh-TEH-lah"
    },
    {
      "category": "Emergencies",
      "phrase": "Ngicela i-ambulense",
      "english": "Ambulance, please",
      "pron": "ngee-SEH-lah ee-ahm-boo-LEHN-seh"
    }
  ],
  "en": [
    {
      "category": "Greetings",
      "phrase": "Hello",
      "english": "Hello",
      "pron": "heh-LOH"
    },
    {
      "category": "Greetings",
      "phrase": "Good morning",
      "english": "Good morning",
      "pron": "good MOR-ning"
    },
    {
      "category": "Greetings",
      "phrase": "Good evening",
      "english": "Good evening",
      "pron": "good EEV-ning"
    },
    {
      "category": "Greetings",
      "phrase": "Goodbye",
      "english": "Goodbye",
      "pron": "good-BYE"
    },
    {
      "category": "Basics",
      "phrase": "Please",
      "english": "Please",
      "pron": "pleez"
    },
    {
      "category": "Basics",
      "phrase": "Thank you",
      "english": "Thank you",
      "pron": "thank yoo"
    },
    {
      "category": "Basics",
      "phrase": "You're welcome",
      "english": "You're welcome",
      "pron": "yor WEL-kum"
    },
    {
      "category": "Basics",
      "phrase": "Yes / No",
      "english": "Yes / No",
      "pron": "yes / noh"
    },
    {
      "category": "Basics",
      "phrase": "Excuse me",
      "english": "Excuse me",
      "pron": "ik-SKYOOZ mee"
    },
    {
      "category": "Basics",
      "phrase": "Do you speak English?",
      "english": "Do you speak English?",
      "pron": "doo yoo speek ING-glish"
    },
    {
      "category": "Basics",
      "phrase": "I don't understand",
      "english": "I don't understand",
      "pron": "eye dohnt un-der-STAND"
    },
    {
      "category": "Getting around",
      "phrase": "Where is...?",
      "english": "Where is...?",
      "pron": "wair iz"
    },
    {
      "category": "Getting around",
      "phrase": "Where is the toilet?",
      "english": "Where is the toilet?",
      "pron": "wair iz thuh TOY-let"
    },
    {
      "category": "Getting around",
      "phrase": "How much is the ticket?",
      "english": "How much is the ticket?",
      "pron": "how much iz thuh TIK-it"
    },
    {
      "category": "Getting around",
      "phrase": "I want to go to...",
      "english": "I want to go to...",
      "pron": "eye wont too goh too"
    },
    {
      "category": "Getting around",
      "phrase": "Stop here, please",
      "english": "Stop here, please",
      "pron": "stop heer pleez"
    },
    {
      "category": "Eating out",
      "phrase": "A table for two, please",
      "english": "A table for two, please",
      "pron": "uh TAY-bul for too pleez"
    },
    {
      "category": "Eating out",
      "phrase": "The menu, please",
      "english": "The menu, please",
      "pron": "thuh MEN-yoo pleez"
    },
    {
      "category": "Eating out",
      "phrase": "The bill, please",
      "english": "The bill, please",
      "pron": "thuh bil pleez"
    },
    {
      "category": "Eating out",
      "phrase": "Water",
      "english": "Water",
      "pron": "WAW-ter"
    },
    {
      "category": "Eating out",
      "phrase": "Cheers!",
      "english": "Cheers!",
      "pron": "cheerz"
    },
    {
      "category": "Shopping",
      "phrase": "How much is it?",
      "english": "How much is it?",
      "pron": "how much iz it"
    },
    {
      "category": "Shopping",
      "phrase": "It's too expensive",
      "english": "It's too expensive",
      "pron": "its too ik-SPEN-siv"
    },
    {
      "category": "Shopping",
      "phrase": "Do you accept cards?",
      "english": "Do you accept cards?",
      "pron": "doo yoo ak-SEPT kardz"
    },
    {
      "category": "Shopping",
      "phrase": "I'm just looking",
      "english": "I'm just looking",
      "pron": "eyem just LOOK-ing"
    },
    {
      "category": "Emergencies",
      "phrase": "Help!",
      "english": "Help!",
      "pron": "help"
    },
    {
      "category": "Emergencies",
      "phrase": "Call the police",
      "english": "Call the police",
      "pron": "kawl thuh puh-LEES"
    },
    {
      "category": "Emergencies",
      "phrase": "I need a doctor",
      "english": "I need a doctor",
      "pron": "eye need uh DOK-ter"
    },
    {
      "category": "Emergencies",
      "phrase": "I'm lost",
      "english": "I'm lost",
      "pron": "eyem lost"
    },
    {
      "category": "Emergencies",
      "phrase": "Call an ambulance",
      "english": "Call an ambulance",
      "pron": "kawl an AM-byoo-luns"
    }
  ],
  "es": [
    {
      "category": "Greetings",
      "phrase": "Hola",
      "english": "Hello",
      "pron": "OH-la"
    },
    {
      "category": "Greetings",
      "phrase": "Buenos días",
      "english": "Good morning",
      "pron": "BWEH-nos DEE-as"
    },
    {
      "category": "Greetings",
      "phrase": "Buenas noches",
      "english": "Good evening",
      "pron": "BWEH-nas NOH-ches"
    },
    {
      "category": "Greetings",
      "phrase": "Adiós",
      "english": "Goodbye",
      "pron": "ah-DYOHS"
    },
    {
      "category": "Basics",
      "phrase": "Por favor",
      "english": "Please",
      "pron": "por fah-VOR"
    },
    {
      "category": "Basics",
      "phrase": "Gracias",
      "english": "Thank you",
      "pron": "GRAH-syas"
    },
    {
      "category": "Basics",
      "phrase": "De nada",
      "english": "You're welcome",
      "pron": "deh NAH-da"
    },
    {
      "category": "Basics",
      "phrase": "Sí / No",
      "english": "Yes / No",
      "pron": "see / noh"
    },
    {
      "category": "Basics",
      "phrase": "Perdón",
      "english": "Excuse me",
      "pron": "per-DOHN"
    },
    {
      "category": "Basics",
      "phrase": "¿Habla inglés?",
      "english": "Do you speak English?",
      "pron": "AH-bla een-GLEHS"
    },
    {
      "category": "Basics",
      "phrase": "No entiendo",
      "english": "I don't understand",
      "pron": "noh en-TYEN-doh"
    },
    {
      "category": "Getting around",
      "phrase": "¿Dónde está...?",
      "english": "Where is...?",
      "pron": "DOHN-deh es-TAH"
    },
    {
      "category": "Getting around",
      "phrase": "¿Dónde está el baño?",
      "english": "Where is the toilet?",
      "pron": "DOHN-deh es-TAH el BAH-nyo"
    },
    {
      "category": "Getting around",
      "phrase": "¿Cuánto cuesta el billete?",
      "english": "How much is the ticket?",
      "pron": "KWAN-toh KWES-tah el bee-YEH-teh"
    },
    {
      "category": "Getting around",
      "phrase": "Quiero ir a...",
      "english": "I want to go to...",
      "pron": "KYEH-roh eer ah"
    },
    {
      "category": "Getting around",
      "phrase": "Pare aquí, por favor",
      "english": "Stop here, please",
      "pron": "PAH-reh ah-KEE por fah-VOR"
    },
    {
      "category": "Eating out",
      "phrase": "Una mesa para dos, por favor",
      "english": "A table for two, please",
      "pron": "OO-na MEH-sa PAH-ra dohs"
    },
    {
      "category": "Eating out",
      "phrase": "La carta, por favor",
      "english": "The menu, please",
      "pron": "la KAR-ta por fah-VOR"
    },
    {
      "category": "Eating out",
      "phrase": "La cuenta, por favor",
      "english": "The bill, please",
      "pron": "la KWEN-ta por fah-VOR"
    },
    {
      "category": "Eating out",
      "phrase": "Agua",
      "english": "Water",
      "pron": "AH-gwa"
    },
    {
      "category": "Eating out",
      "phrase": "¡Salud!",
      "english": "Cheers!",
      "pron": "sah-LOOD"
    },
    {
      "category": "Shopping",
      "phrase": "¿Cuánto cuesta?",
      "english": "How much is it?",
      "pron": "KWAN-toh KWES-tah"
    },
    {
      "category": "Shopping",
      "phrase": "Es demasiado caro",
      "english": "It's too expensive",
      "pron": "es deh-mah-SYAH-doh KAH-roh"
    },
    {
      "category": "Shopping",
      "phrase": "¿Aceptan tarjeta?",
      "english": "Do you accept cards?",
      "pron": "ah-SEP-tan tar-HEH-ta"
    },
    {
      "category": "Shopping",
      "phrase": "Solo estoy mirando",
      "english": "I'm just looking",
      "pron": "SOH-lo es-TOY mee-RAN-doh"
    },
    {
      "category": "Emergencies",
      "phrase": "¡Ayuda!",
      "english": "Help!",
      "pron": "ah-YOO-da"
    },
    {
      "category": "Emergencies",
      "phrase": "Llame a la policía",
      "english": "Call the police",
      "pron": "YAH-meh a la po-lee-SEE-a"
    },
    {
      "category": "Emergencies",
      "phrase": "Necesito un médico",
      "english": "I need a doctor",
      "pron": "neh-seh-SEE-toh oon MEH-dee-koh"
    },
    {
      "category": "Emergencies",
      "phrase": "Estoy perdido",
      "english": "I'm lost",
      "pron": "es-TOY per-DEE-doh"
    },
    {
      "category": "Emergencies",
      "phrase": "Llame a una ambulancia",
      "english": "Call an ambulance",
      "pron": "YAH-meh a OO-na am-boo-LAN-sya"
    }
  ],
  "fr": [
    {
      "category": "Greetings",
      "phrase": "Salut",
      "english": "Hi",
      "pron": "sah-LOO"
    },
    {
      "category": "Greetings",
      "phrase": "Bonjour",
      "english": "Good morning",
      "pron": "bohn-ZHOOR"
    },
    {
      "category": "Greetings",
      "phrase": "Bonsoir",
      "english": "Good evening",
      "pron": "bohn-SWAHR"
    },
    {
      "category": "Greetings",
      "phrase": "Au revoir",
      "english": "Goodbye",
      "pron": "oh ruh-VWAHR"
    },
    {
      "category": "Basics",
      "phrase": "S'il vous plaît",
      "english": "Please",
      "pron": "seel voo PLEH"
    },
    {
      "category": "Basics",
      "phrase": "Merci",
      "english": "Thank you",
      "pron": "mair-SEE"
    },
    {
      "category": "Basics",
      "phrase": "De rien",
      "english": "You're welcome",
      "pron": "duh RYEN"
    },
    {
      "category": "Basics",
      "phrase": "Oui / Non",
      "english": "Yes / No",
      "pron": "wee / nohn"
    },
    {
      "category": "Basics",
      "phrase": "Excusez-moi",
      "english": "Excuse me",
      "pron": "eks-kew-zay-MWAH"
    },
    {
      "category": "Basics",
      "phrase": "Parlez-vous anglais ?",
      "english": "Do you speak English?",
      "pron": "par-lay voo ahn-GLEH"
    },
    {
      "category": "Basics",
      "phrase": "Je ne comprends pas",
      "english": "I don't understand",
      "pron": "zhuh nuh kohn-PRAHN pah"
    },
    {
      "category": "Getting around",
      "phrase": "Où est... ?",
      "english": "Where is...?",
      "pron": "oo eh"
    },
    {
      "category": "Getting around",
      "phrase": "Où sont les toilettes ?",
      "english": "Where is the toilet?",
      "pron": "oo sohn lay twah-LET"
    },
    {
      "category": "Getting around",
      "phrase": "Combien coûte le billet ?",
      "english": "How much is the ticket?",
      "pron": "kohm-BYEN koot luh bee-YEH"
    },
    {
      "category": "Getting around",
      "phrase": "Je voudrais aller à...",
      "english": "I want to go to...",
      "pron": "zhuh voo-DREH ah-lay ah"
    },
    {
      "category": "Getting around",
      "phrase": "Arrêtez ici, s'il vous plaît",
      "english": "Stop here, please",
      "pron": "ah-reh-TAY ee-SEE seel voo PLEH"
    },
    {
      "category": "Eating out",
      "phrase": "Une table pour deux, s'il vous plaît",
      "english": "A table for two, please",
      "pron": "ewn TAH-bluh poor DUH"
    },
    {
      "category": "Eating out",
      "phrase": "Le menu, s'il vous plaît",
      "english": "The menu, please",
      "pron": "luh muh-NEW seel voo PLEH"
    },
    {
      "category": "Eating out",
      "phrase": "L'addition, s'il vous plaît",
      "english": "The bill, please",
      "pron": "lah-dee-SYOHN seel voo PLEH"
    },
    {
      "category": "Eating out",
      "phrase": "De l'eau",
      "english": "Water",
      "pron": "duh LOH"
    },
    {
      "category": "Eating out",
      "phrase": "Santé !",
      "english": "Cheers!",
      "pron": "sahn-TAY"
    },
    {
      "category": "Shopping",
      "phrase": "Combien ça coûte ?",
      "english": "How much is it?",
      "pron": "kohm-BYEN sah KOOT"
    },
    {
      "category": "Shopping",
      "phrase": "C'est trop cher",
      "english": "It's too expensive",
      "pron": "say troh SHAIR"
    },
    {
      "category": "Shopping",
      "phrase": "Acceptez-vous les cartes ?",
      "english": "Do you accept cards?",
      "pron": "ak-sep-tay VOO lay KART"
    },
    {
      "category": "Shopping",
      "phrase": "Je regarde seulement",
      "english": "I'm just looking",
      "pron": "zhuh ruh-GARD suhl-MAHN"
    },
    {
      "category": "Emergencies",
      "phrase": "Au secours !",
      "english": "Help!",
      "pron": "oh suh-KOOR"
    },
    {
      "category": "Emergencies",
      "phrase": "Appelez la police",
      "english": "Call the police",
      "pron": "ah-play la po-LEES"
    },
    {
      "category": "Emergencies",
      "phrase": "J'ai besoin d'un médecin",
      "english": "I need a doctor",
      "pron": "zhay buh-ZWEN duhn mayd-SEN"
    },
    {
      "category": "Emergencies",
      "phrase": "Je suis perdu",
      "english": "I'm lost",
      "pron": "zhuh swee pair-DEW"
    },
    {
      "category": "Emergencies",
      "phrase": "Appelez une ambulance",
      "english": "Call an ambulance",
      "pron": "ah-play ewn ahm-bew-LAHNS"
    }
  ],
  "de": [
    {
      "category": "Greetings",
      "phrase": "Hallo",
      "english": "Hello",
      "pron": "HAH-loh"
    },
    {
      "category": "Greetings",
      "phrase": "Guten Morgen",
      "english": "Good morning",
      "pron": "GOO-ten MOR-gen"
    },
    {
      "category": "Greetings",
      "phrase": "Guten Abend",
      "english": "Good evening",
      "pron": "GOO-ten AH-bent"
    },
    {
      "category": "Greetings",
      "phrase": "Auf Wiedersehen",
      "english": "Goodbye",
      "pron": "owf VEE-der-zayn"
    },
    {
      "category": "Basics",
      "phrase": "Bitte",
      "english": "Please",
      "pron": "BIT-uh"
    },
    {
      "category": "Basics",
      "phrase": "Danke",
      "english": "Thank you",
      "pron": "DAHN-kuh"
    },
    {
      "category": "Basics",
      "phrase": "Gern geschehen",
      "english": "You're welcome",
      "pron": "gairn guh-SHAY-en"
    },
    {
      "category": "Basics",
      "phrase": "Ja / Nein",
      "english": "Yes / No",
      "pron": "yah / nine"
    },
    {
      "category": "Basics",
      "phrase": "Entschuldigung",
      "english": "Excuse me",
      "pron": "ent-SHOOL-dee-goong"
    },
    {
      "category": "Basics",
      "phrase": "Sprechen Sie Englisch?",
      "english": "Do you speak English?",
      "pron": "SHPREH-khen zee ENG-lish"
    },
    {
      "category": "Basics",
      "phrase": "Ich verstehe nicht",
      "english": "I don't understand",
      "pron": "ikh fair-SHTAY-uh nikht"
    },
    {
      "category": "Getting around",
      "phrase": "Wo ist...?",
      "english": "Where is...?",
      "pron": "voh ist"
    },
    {
      "category": "Getting around",
      "phrase": "Wo ist die Toilette?",
      "english": "Where is the toilet?",
      "pron": "voh ist dee twah-LET-uh"
    },
    {
      "category": "Getting around",
      "phrase": "Was kostet die Fahrkarte?",
      "english": "How much is the ticket?",
      "pron": "vas KOS-tet dee FAR-kar-tuh"
    },
    {
      "category": "Getting around",
      "phrase": "Ich möchte nach...",
      "english": "I want to go to...",
      "pron": "ikh MERKH-tuh nakh"
    },
    {
      "category": "Getting around",
      "phrase": "Halten Sie hier, bitte",
      "english": "Stop here, please",
      "pron": "HAL-ten zee heer BIT-uh"
    },
    {
      "category": "Eating out",
      "phrase": "Einen Tisch für zwei, bitte",
      "english": "A table for two, please",
      "pron": "EYE-nen tish fewr tsvai BIT-uh"
    },
    {
      "category": "Eating out",
      "phrase": "Die Speisekarte, bitte",
      "english": "The menu, please",
      "pron": "dee SHPY-zuh-kar-tuh BIT-uh"
    },
    {
      "category": "Eating out",
      "phrase": "Die Rechnung, bitte",
      "english": "The bill, please",
      "pron": "dee REKH-noong BIT-uh"
    },
    {
      "category": "Eating out",
      "phrase": "Wasser",
      "english": "Water",
      "pron": "VAS-ser"
    },
    {
      "category": "Eating out",
      "phrase": "Prost!",
      "english": "Cheers!",
      "pron": "prohst"
    },
    {
      "category": "Shopping",
      "phrase": "Wie viel kostet das?",
      "english": "How much is it?",
      "pron": "vee feel KOS-tet das"
    },
    {
      "category": "Shopping",
      "phrase": "Das ist zu teuer",
      "english": "It's too expensive",
      "pron": "das ist tsoo TOY-er"
    },
    {
      "category": "Shopping",
      "phrase": "Nehmen Sie Karten?",
      "english": "Do you accept cards?",
      "pron": "NAY-men zee KAR-ten"
    },
    {
      "category": "Shopping",
      "phrase": "Ich schaue nur",
      "english": "I'm just looking",
      "pron": "ikh SHOW-uh noor"
    },
    {
      "category": "Emergencies",
      "phrase": "Hilfe!",
      "english": "Help!",
      "pron": "HIL-fuh"
    },
    {
      "category": "Emergencies",
      "phrase": "Rufen Sie die Polizei",
      "english": "Call the police",
      "pron": "ROO-fen zee dee po-lee-TSY"
    },
    {
      "category": "Emergencies",
      "phrase": "Ich brauche einen Arzt",
      "english": "I need a doctor",
      "pron": "ikh BROW-khuh EYE-nen artst"
    },
    {
      "category": "Emergencies",
      "phrase": "Ich habe mich verlaufen",
      "english": "I'm lost",
      "pron": "ikh HAH-buh mikh fair-LOW-fen"
    },
    {
      "category": "Emergencies",
      "phrase": "Rufen Sie einen Krankenwagen",
      "english": "Call an ambulance",
      "pron": "ROO-fen zee EYE-nen KRAHN-ken-vah-gen"
    }
  ],
  "it": [
    {
      "category": "Greetings",
      "phrase": "Ciao",
      "english": "Hello",
      "pron": "chow"
    },
    {
      "category": "Greetings",
      "phrase": "Buongiorno",
      "english": "Good morning",
      "pron": "bwon-JOR-no"
    },
    {
      "category": "Greetings",
      "phrase": "Buonasera",
      "english": "Good evening",
      "pron": "bwoh-na-SEH-ra"
    },
    {
      "category": "Greetings",
      "phrase": "Arrivederci",
      "english": "Goodbye",
      "pron": "ar-ree-veh-DAIR-chee"
    },
    {
      "category": "Basics",
      "phrase": "Per favore",
      "english": "Please",
      "pron": "pair fah-VOH-reh"
    },
    {
      "category": "Basics",
      "phrase": "Grazie",
      "english": "Thank you",
      "pron": "GRAH-tsee-eh"
    },
    {
      "category": "Basics",
      "phrase": "Prego",
      "english": "You're welcome",
      "pron": "PREH-goh"
    },
    {
      "category": "Basics",
      "phrase": "Sì / No",
      "english": "Yes / No",
      "pron": "see / noh"
    },
    {
      "category": "Basics",
      "phrase": "Mi scusi",
      "english": "Excuse me",
      "pron": "mee SKOO-zee"
    },
    {
      "category": "Basics",
      "phrase": "Parla inglese?",
      "english": "Do you speak English?",
      "pron": "PAR-la een-GLEH-zeh"
    },
    {
      "category": "Basics",
      "phrase": "Non capisco",
      "english": "I don't understand",
      "pron": "non ka-PEES-koh"
    },
    {
      "category": "Getting around",
      "phrase": "Dov'è...?",
      "english": "Where is...?",
      "pron": "doh-VEH"
    },
    {
      "category": "Getting around",
      "phrase": "Dov'è il bagno?",
      "english": "Where is the toilet?",
      "pron": "doh-VEH eel BAH-nyoh"
    },
    {
      "category": "Getting around",
      "phrase": "Quanto costa il biglietto?",
      "english": "How much is the ticket?",
      "pron": "KWAN-toh KOS-ta eel bee-LYET-toh"
    },
    {
      "category": "Getting around",
      "phrase": "Vorrei andare a...",
      "english": "I want to go to...",
      "pron": "vor-RAY an-DAH-reh ah"
    },
    {
      "category": "Getting around",
      "phrase": "Si fermi qui, per favore",
      "english": "Stop here, please",
      "pron": "see FAIR-mee kwee pair fah-VOH-reh"
    },
    {
      "category": "Eating out",
      "phrase": "Un tavolo per due, per favore",
      "english": "A table for two, please",
      "pron": "oon TAH-voh-loh pair DOO-eh"
    },
    {
      "category": "Eating out",
      "phrase": "Il menù, per favore",
      "english": "The menu, please",
      "pron": "eel meh-NOO pair fah-VOH-reh"
    },
    {
      "category": "Eating out",
      "phrase": "Il conto, per favore",
      "english": "The bill, please",
      "pron": "eel KON-toh pair fah-VOH-reh"
    },
    {
      "category": "Eating out",
      "phrase": "Acqua",
      "english": "Water",
      "pron": "AH-kwa"
    },
    {
      "category": "Eating out",
      "phrase": "Salute!",
      "english": "Cheers!",
      "pron": "sah-LOO-teh"
    },
    {
      "category": "Shopping",
      "phrase": "Quanto costa?",
      "english": "How much is it?",
      "pron": "KWAN-toh KOS-ta"
    },
    {
      "category": "Shopping",
      "phrase": "È troppo caro",
      "english": "It's too expensive",
      "pron": "eh TROP-poh KAH-roh"
    },
    {
      "category": "Shopping",
      "phrase": "Accettate carte?",
      "english": "Do you accept cards?",
      "pron": "ah-chet-TAH-teh KAR-teh"
    },
    {
      "category": "Shopping",
      "phrase": "Sto solo guardando",
      "english": "I'm just looking",
      "pron": "stoh SOH-loh gwar-DAN-doh"
    },
    {
      "category": "Emergencies",
      "phrase": "Aiuto!",
      "english": "Help!",
      "pron": "ah-YOO-toh"
    },
    {
      "category": "Emergencies",
      "phrase": "Chiami la polizia",
      "english": "Call the police",
      "pron": "KYAH-mee la po-lee-TSEE-a"
    },
    {
      "category": "Emergencies",
      "phrase": "Ho bisogno di un medico",
      "english": "I need a doctor",
      "pron": "oh bee-ZOH-nyoh dee oon MEH-dee-koh"
    },
    {
      "category": "Emergencies",
      "phrase": "Mi sono perso",
      "english": "I'm lost",
      "pron": "mee SOH-noh PAIR-soh"
    },
    {
      "category": "Emergencies",
      "phrase": "Chiami un'ambulanza",
      "english": "Call an ambulance",
      "pron": "KYAH-mee oon am-boo-LAN-tsa"
    }
  ],
  "pt": [
    {
      "category": "Greetings",
      "phrase": "Olá",
      "english": "Hello",
      "pron": "oh-LAH"
    },
    {
      "category": "Greetings",
      "phrase": "Bom dia",
      "english": "Good morning",
      "pron": "bohn DEE-ah"
    },
    {
      "category": "Greetings",
      "phrase": "Boa noite",
      "english": "Good evening",
      "pron": "BOH-ah NOY-teh"
    },
    {
      "category": "Greetings",
      "phrase": "Adeus",
      "english": "Goodbye",
      "pron": "ah-DEH-oosh"
    },
    {
      "category": "Basics",
      "phrase": "Por favor",
      "english": "Please",
      "pron": "poor fah-VOR"
    },
    {
      "category": "Basics",
      "phrase": "Obrigado",
      "english": "Thank you",
      "pron": "oh-bree-GAH-doo"
    },
    {
      "category": "Basics",
      "phrase": "De nada",
      "english": "You're welcome",
      "pron": "deh NAH-dah"
    },
    {
      "category": "Basics",
      "phrase": "Sim / Não",
      "english": "Yes / No",
      "pron": "seeng / nowng"
    },
    {
      "category": "Basics",
      "phrase": "Desculpe",
      "english": "Excuse me",
      "pron": "desh-KOOL-peh"
    },
    {
      "category": "Basics",
      "phrase": "Fala inglês?",
      "english": "Do you speak English?",
      "pron": "FAH-lah een-GLESH"
    },
    {
      "category": "Basics",
      "phrase": "Não entendo",
      "english": "I don't understand",
      "pron": "nowng en-TEN-doo"
    },
    {
      "category": "Getting around",
      "phrase": "Onde fica...?",
      "english": "Where is...?",
      "pron": "OHN-deh FEE-kah"
    },
    {
      "category": "Getting around",
      "phrase": "Onde é a casa de banho?",
      "english": "Where is the toilet?",
      "pron": "OHN-deh eh ah KAH-zah deh BAH-nyoo"
    },
    {
      "category": "Getting around",
      "phrase": "Quanto custa o bilhete?",
      "english": "How much is the ticket?",
      "pron": "KWAN-too KOOSH-tah oo bee-LYEH-teh"
    },
    {
      "category": "Getting around",
      "phrase": "Quero ir para...",
      "english": "I want to go to...",
      "pron": "KEH-roo eer PAH-rah"
    },
    {
      "category": "Getting around",
      "phrase": "Pare aqui, por favor",
      "english": "Stop here, please",
      "pron": "PAH-reh ah-KEE poor fah-VOR"
    },
    {
      "category": "Eating out",
      "phrase": "Uma mesa para dois, por favor",
      "english": "A table for two, please",
      "pron": "OO-mah MEH-zah PAH-rah doysh"
    },
    {
      "category": "Eating out",
      "phrase": "O menu, por favor",
      "english": "The menu, please",
      "pron": "oo meh-NOO poor fah-VOR"
    },
    {
      "category": "Eating out",
      "phrase": "A conta, por favor",
      "english": "The bill, please",
      "pron": "ah KOHN-tah poor fah-VOR"
    },
    {
      "category": "Eating out",
      "phrase": "Água",
      "english": "Water",
      "pron": "AH-gwah"
    },
    {
      "category": "Eating out",
      "phrase": "Saúde!",
      "english": "Cheers!",
      "pron": "sah-OO-deh"
    },
    {
      "category": "Shopping",
      "phrase": "Quanto custa?",
      "english": "How much is it?",
      "pron": "KWAN-too KOOSH-tah"
    },
    {
      "category": "Shopping",
      "phrase": "É demasiado caro",
      "english": "It's too expensive",
      "pron": "eh deh-mah-zee-AH-doo KAH-roo"
    },
    {
      "category": "Shopping",
      "phrase": "Aceitam cartão?",
      "english": "Do you accept cards?",
      "pron": "ah-SAY-tow kar-TOWNG"
    },
    {
      "category": "Shopping",
      "phrase": "Estou só a ver",
      "english": "I'm just looking",
      "pron": "shtoh soh ah VEHR"
    },
    {
      "category": "Emergencies",
      "phrase": "Socorro!",
      "english": "Help!",
      "pron": "soo-KOH-roo"
    },
    {
      "category": "Emergencies",
      "phrase": "Chame a polícia",
      "english": "Call the police",
      "pron": "SHAH-meh ah poo-LEE-syah"
    },
    {
      "category": "Emergencies",
      "phrase": "Preciso de um médico",
      "english": "I need a doctor",
      "pron": "preh-SEE-zoo deh oong MEH-dee-koo"
    },
    {
      "category": "Emergencies",
      "phrase": "Estou perdido",
      "english": "I'm lost",
      "pron": "shtoh per-DEE-doo"
    },
    {
      "category": "Emergencies",
      "phrase": "Chame uma ambulância",
      "english": "Call an ambulance",
      "pron": "SHAH-meh OO-mah am-boo-LAN-syah"
    }
  ],
  "ru": [
    {
      "category": "Greetings",
      "phrase": "Здравствуйте",
      "english": "Hello",
      "pron": "ZDRAST-vooy-tyeh"
    },
    {
      "category": "Greetings",
      "phrase": "Доброе утро",
      "english": "Good morning",
      "pron": "DOH-bro-yeh OO-tra"
    },
    {
      "category": "Greetings",
      "phrase": "Добрый вечер",
      "english": "Good evening",
      "pron": "DOH-bry VYEH-cher"
    },
    {
      "category": "Greetings",
      "phrase": "До свидания",
      "english": "Goodbye",
      "pron": "da svee-DAH-nya"
    },
    {
      "category": "Basics",
      "phrase": "Пожалуйста",
      "english": "Please",
      "pron": "pah-ZHAH-loo-sta"
    },
    {
      "category": "Basics",
      "phrase": "Спасибо",
      "english": "Thank you",
      "pron": "spah-SEE-bah"
    },
    {
      "category": "Basics",
      "phrase": "Не за что",
      "english": "You're welcome",
      "pron": "NYEH-za-shta"
    },
    {
      "category": "Basics",
      "phrase": "Да / Нет",
      "english": "Yes / No",
      "pron": "da / nyet"
    },
    {
      "category": "Basics",
      "phrase": "Извините",
      "english": "Excuse me",
      "pron": "eez-vee-NEE-tyeh"
    },
    {
      "category": "Basics",
      "phrase": "Вы говорите по-английски?",
      "english": "Do you speak English?",
      "pron": "vy ga-va-REE-tyeh pa-an-GLEE-skee"
    },
    {
      "category": "Basics",
      "phrase": "Я не понимаю",
      "english": "I don't understand",
      "pron": "ya nyeh pa-nee-MAH-yoo"
    },
    {
      "category": "Getting around",
      "phrase": "Где находится...?",
      "english": "Where is...?",
      "pron": "gdyeh na-KHO-dee-tsa"
    },
    {
      "category": "Getting around",
      "phrase": "Где туалет?",
      "english": "Where is the toilet?",
      "pron": "gdyeh too-ah-LYET"
    },
    {
      "category": "Getting around",
      "phrase": "Сколько стоит билет?",
      "english": "How much is the ticket?",
      "pron": "SKOL-ka STOH-eet bee-LYET"
    },
    {
      "category": "Getting around",
      "phrase": "Я хочу поехать в...",
      "english": "I want to go to...",
      "pron": "ya kha-CHOO pa-YEH-khat v"
    },
    {
      "category": "Getting around",
      "phrase": "Остановите здесь, пожалуйста",
      "english": "Stop here, please",
      "pron": "as-ta-na-VEE-tyeh zdyes pah-ZHAH-loo-sta"
    },
    {
      "category": "Eating out",
      "phrase": "Столик на двоих, пожалуйста",
      "english": "A table for two, please",
      "pron": "STOH-leek na dva-EEKH pah-ZHAH-loo-sta"
    },
    {
      "category": "Eating out",
      "phrase": "Меню, пожалуйста",
      "english": "The menu, please",
      "pron": "meh-NYOO pah-ZHAH-loo-sta"
    },
    {
      "category": "Eating out",
      "phrase": "Счёт, пожалуйста",
      "english": "The bill, please",
      "pron": "shchot pah-ZHAH-loo-sta"
    },
    {
      "category": "Eating out",
      "phrase": "Вода",
      "english": "Water",
      "pron": "va-DAH"
    },
    {
      "category": "Eating out",
      "phrase": "За здоровье!",
      "english": "Cheers!",
      "pron": "za zda-ROH-vyeh"
    },
    {
      "category": "Shopping",
      "phrase": "Сколько это стоит?",
      "english": "How much is it?",
      "pron": "SKOL-ka EH-ta STOH-eet"
    },
    {
      "category": "Shopping",
      "phrase": "Это слишком дорого",
      "english": "It's too expensive",
      "pron": "EH-ta SLEESH-kam DOH-ra-ga"
    },
    {
      "category": "Shopping",
      "phrase": "Вы принимаете карты?",
      "english": "Do you accept cards?",
      "pron": "vy pree-nee-MAH-yeh-tyeh KAR-ty"
    },
    {
      "category": "Shopping",
      "phrase": "Я просто смотрю",
      "english": "I'm just looking",
      "pron": "ya PROS-ta smat-RYOO"
    },
    {
      "category": "Emergencies",
      "phrase": "Помогите!",
      "english": "Help!",
      "pron": "pa-ma-GEE-tyeh"
    },
    {
      "category": "Emergencies",
      "phrase": "Вызовите полицию",
      "english": "Call the police",
      "pron": "VY-za-vee-tyeh pa-LEE-tsee-yoo"
    },
    {
      "category": "Emergencies",
      "phrase": "Мне нужен врач",
      "english": "I need a doctor",
      "pron": "mnyeh NOO-zhen vrach"
    },
    {
      "category": "Emergencies",
      "phrase": "Я заблудился",
      "english": "I'm lost",
      "pron": "ya za-bloo-DEEL-sya"
    },
    {
      "category": "Emergencies",
      "phrase": "Вызовите скорую",
      "english": "Call an ambulance",
      "pron": "VY-za-vee-tyeh SKOH-roo-yoo"
    }
  ]
};

export const TRAVEL_LANGS: string[] = Object.keys(travelPhrases);
