// Essential travel phrases per language, grouped by category, with a rough pronunciation hint.
// Source: workflow generation + independent verification pass. Real data only.

export interface TravelPhrase {
  category: string;
  phrase: string;
  english: string;
  pron: string;
}

export const travelPhrases: Record<string, TravelPhrase[]> = {
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
