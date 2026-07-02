// Common idioms per language with a literal gloss, real meaning and an example sentence.
// Source: workflow generation + independent verification pass. Real data only.

export interface Idiom {
  idiom: string;
  literal: string;
  meaning: string;
  example: string;
}

export const idioms: Record<string, Idiom[]> = {
  "af": [
    {
      "idiom": "die aap uit die mou laat",
      "literal": "to let the monkey out of the sleeve",
      "meaning": "to reveal a secret, to spill the beans",
      "example": "Na maande van stilte het hy die aap uit die mou gelaat."
    },
    {
      "idiom": "'n appeltjie met iemand te skil hê",
      "literal": "to have a little apple to peel with someone",
      "meaning": "to have a bone to pick with someone",
      "example": "Ek het nog 'n appeltjie met jou te skil oor wat gister gebeur het."
    },
    {
      "idiom": "boontjie kry sy loontjie",
      "literal": "the little bean gets its little wage",
      "meaning": "to get one's just deserts, to reap what you sow",
      "example": "Moenie bekommerd wees nie, boontjie sal sy loontjie kry."
    },
    {
      "idiom": "in die steek laat",
      "literal": "to leave in the stitch",
      "meaning": "to abandon someone, to leave someone in the lurch",
      "example": "'n Ware vriend sal jou nooit in die steek laat nie."
    },
    {
      "idiom": "'n uiltjie knip",
      "literal": "to clip a little owl",
      "meaning": "to take a nap",
      "example": "Na ete gaan ek gou 'n uiltjie knip voor ons verder ry."
    },
    {
      "idiom": "die oortjies van die seekoei",
      "literal": "the little ears of the hippo",
      "meaning": "just the tip of the iceberg, a small visible part of a much bigger problem",
      "example": "Die skade wat ons tot nou toe gesien het, is net die oortjies van die seekoei."
    },
    {
      "idiom": "op iemand afklim",
      "literal": "to climb down on someone",
      "meaning": "to scold someone, to give someone a piece of one's mind",
      "example": "Die onderwyser het op die kinders afgeklim omdat hulle laat was."
    },
    {
      "idiom": "van A tot Z",
      "literal": "from A to Z",
      "meaning": "from beginning to end, in complete detail",
      "example": "Sy het die hele storie van A tot Z verduidelik."
    },
    {
      "idiom": "die koeël is deur die kerk",
      "literal": "the bullet is through the church",
      "meaning": "the decision has been made and is final, there is no turning back",
      "example": "Ons het lank gedebatteer, maar die koeël is nou deur die kerk."
    },
    {
      "idiom": "met die deur in die huis val",
      "literal": "to fall through the door into the house",
      "meaning": "to get straight to the point, to blurt something out without preamble",
      "example": "Hy val graag met die deur in die huis, sonder enige inleiding."
    },
    {
      "idiom": "die spyker op die kop slaan",
      "literal": "to hit the nail on the head",
      "meaning": "to be exactly right, to describe something precisely",
      "example": "Met daardie opmerking het jy regtig die spyker op die kop geslaan."
    },
    {
      "idiom": "iemand om die bos lei",
      "literal": "to lead someone around the forest",
      "meaning": "to deceive or mislead someone",
      "example": "Moenie dink jy kan my om die bos lei nie, want ek ken die waarheid."
    },
    {
      "idiom": "die beste beentjie voorsit",
      "literal": "to put your best little leg forward",
      "meaning": "to put your best foot forward, to make the best possible impression",
      "example": "By die onderhoud het sy regtig haar beste beentjie voorgesit."
    }
  ],
  "az": [
    {
      "idiom": "Ürəyi düşmək",
      "literal": "for one's heart to fall",
      "meaning": "to become suddenly frightened or startled",
      "example": "Qəfil səs eşidəndə ürəyi düşdü."
    },
    {
      "idiom": "Gözü su içməmək",
      "literal": "for one's eye not to drink water",
      "meaning": "to doubt that something will succeed, not to trust it",
      "example": "Onun bu işi vaxtında bitirəcəyinə gözüm su içmir."
    },
    {
      "idiom": "Qanını qaraltmaq",
      "literal": "to blacken someone's blood",
      "meaning": "to upset or torment someone deeply",
      "example": "Oğlunun tənbəlliyi anasının qanını qaraldıb."
    },
    {
      "idiom": "Əl çəkmək",
      "literal": "to pull one's hand away",
      "meaning": "to leave someone or something alone, to give up on it",
      "example": "Zəhmət olmasa, məndən əl çək."
    },
    {
      "idiom": "Ağzından qaçırtmaq",
      "literal": "to let something escape from one's mouth",
      "meaning": "to blurt out a secret without meaning to",
      "example": "Sirri istəmədən ağzımdan qaçırtdım."
    },
    {
      "idiom": "Başını qatmaq",
      "literal": "to mix someone's head",
      "meaning": "to keep oneself or someone else occupied, often to pass the time or forget worries",
      "example": "Uşağın başını qatmaq üçün ona rəngli karandaşlar verdi."
    },
    {
      "idiom": "Canını dişinə tutmaq",
      "literal": "to hold one's soul between one's teeth",
      "meaning": "to force oneself to do something reluctantly, gritting one's teeth through it",
      "example": "İşdən zəhləsi getsə də, canını dişinə tutub axıra qədər çalışdı."
    },
    {
      "idiom": "Əlindən gəlmək",
      "literal": "to come from one's hand",
      "meaning": "to be capable and skilled at doing something",
      "example": "Onun əlindən hər iş gəlir, buna görə hamı ondan kömək istəyir."
    },
    {
      "idiom": "Ürəyini boşaltmaq",
      "literal": "to empty one's heart",
      "meaning": "to unburden oneself by telling someone one's troubles",
      "example": "Bacısına dərdini danışıb ürəyini boşaltdı."
    },
    {
      "idiom": "Ürəyi yanmaq",
      "literal": "for one's heart to burn",
      "meaning": "to feel deep pity or compassion",
      "example": "Ac uşaqları görəndə ürəyim yandı."
    },
    {
      "idiom": "Burnunu yuxarı tutmaq",
      "literal": "to hold one's nose upward",
      "meaning": "to become arrogant or haughty",
      "example": "Vəzifə alandan sonra burnunu yuxarı tutmağa başladı."
    },
    {
      "idiom": "Göz önünə gətirmək",
      "literal": "to bring something before the eye",
      "meaning": "to picture something in one's mind, to recall or imagine it vividly",
      "example": "Onun uşaqlıq illərini göz önünə gətirdi."
    },
    {
      "idiom": "Əldən düşmək",
      "literal": "to fall from the hand",
      "meaning": "to become exhausted, to be worn out",
      "example": "Bütün günü işləyəndən sonra tamam əldən düşmüşdü."
    },
    {
      "idiom": "Canını sıxmaq",
      "literal": "to squeeze someone's soul",
      "meaning": "to bore, bother, or trouble someone",
      "example": "Uzun gözləmə canımı sıxdı."
    }
  ],
  "be": [
    {
      "idiom": "душа пайшла ў пяткі",
      "literal": "the soul went into the heels",
      "meaning": "to become extremely frightened, scared stiff",
      "example": "Пачуўшы гэты крык, я адчуў, як душа пайшла ў пяткі."
    },
    {
      "idiom": "як снег на галаву",
      "literal": "like snow onto the head",
      "meaning": "completely unexpectedly, out of the blue",
      "example": "Госці прыехалі як снег на галаву, і мы не паспелі нічога прыгатаваць."
    },
    {
      "idiom": "ні з таго ні з сяго",
      "literal": "neither from that, nor from this",
      "meaning": "suddenly, for no apparent reason, out of nowhere",
      "example": "Ні з таго ні з сяго ён устаў і выйшаў з пакоя."
    },
    {
      "idiom": "кот наплакаў",
      "literal": "a cat cried",
      "meaning": "very little, next to nothing",
      "example": "Грошай засталося кот наплакаў."
    },
    {
      "idiom": "вадзіць за нос",
      "literal": "to lead by the nose",
      "meaning": "to deceive someone, to string someone along",
      "example": "Ён ужо два месяцы водзіць мяне за нос, абяцаючы вярнуць доўг."
    },
    {
      "idiom": "жыць як кот з сабакам",
      "literal": "to live like a cat with a dog",
      "meaning": "to constantly quarrel, to be at each other's throats",
      "example": "Яны жывуць як кот з сабакам, увесь час сварацца."
    },
    {
      "idiom": "стары верабей",
      "literal": "an old sparrow",
      "meaning": "a shrewd, experienced person who cannot easily be fooled",
      "example": "Яго не так проста ашукаць, ён стары верабей."
    },
    {
      "idiom": "сёмая вада на кісялі",
      "literal": "the seventh water on the kissel",
      "meaning": "a very distant, barely related relative",
      "example": "Ён мне нейкі далёкі родзіч, сёмая вада на кісялі."
    },
    {
      "idiom": "чытаць паміж радкоў",
      "literal": "to read between the lines",
      "meaning": "to infer a meaning that is not directly stated",
      "example": "Трэба ўмець чытаць паміж радкоў, каб зразумець, што ён меў на ўвазе."
    },
    {
      "idiom": "важная птушка",
      "literal": "an important bird",
      "meaning": "a very important person, a big shot, a VIP",
      "example": "Ён паводзіць сябе так, быццам ён важная птушка."
    },
    {
      "idiom": "лезці на ражон",
      "literal": "to climb onto the spike",
      "meaning": "to knowingly court danger or trouble, take a needless risk",
      "example": "Не лезь на ражон, лепш пачакай спакойна."
    },
    {
      "idiom": "рабіць з мухі слана",
      "literal": "to make an elephant out of a fly",
      "meaning": "to blow something out of proportion, to exaggerate wildly",
      "example": "Не трэба рабіць з мухі слана, гэта звычайная драбніца."
    },
    {
      "idiom": "іграць другую скрыпку",
      "literal": "to play the second violin",
      "meaning": "to play a subordinate, secondary role",
      "example": "У гэтай кампаніі ён заўсёды іграе другую скрыпку."
    },
    {
      "idiom": "быць сямі пядзяў у лбе",
      "literal": "to be of seven spans in the forehead",
      "meaning": "to be exceptionally intelligent, a genius",
      "example": "Не трэба быць сямі пядзяў у лбе, каб зразумець такую простую рэч."
    }
  ],
  "bg": [
    {
      "idiom": "Хвърлям прах в очите",
      "literal": "I throw dust in the eyes",
      "meaning": "to deceive or dazzle someone, creating a false impression of one's abilities or wealth",
      "example": "Той хвърля прах в очите на клиентите, но всъщност няма опит."
    },
    {
      "idiom": "Удрям на камък",
      "literal": "I hit against a stone",
      "meaning": "to meet firm refusal or failure, to hit a dead end",
      "example": "Опитах се да го убедя да си промени решението, но ударих на камък."
    },
    {
      "idiom": "Плюя си на петите",
      "literal": "I spit on my own heels",
      "meaning": "to run away as fast as possible, to take to one's heels",
      "example": "Щом видя полицията, крадецът си плю на петите."
    },
    {
      "idiom": "Търся под дърво и камък",
      "literal": "I search under tree and stone",
      "meaning": "to search everywhere thoroughly, to leave no stone unturned",
      "example": "Търсих под дърво и камък, докато не намерих точния подарък за нея."
    },
    {
      "idiom": "Правя от мухата слон",
      "literal": "I make an elephant out of the fly",
      "meaning": "to blow a small problem out of proportion, to make a mountain out of a molehill",
      "example": "Не се притеснявай толкова, не прави от мухата слон."
    },
    {
      "idiom": "Като две капки вода",
      "literal": "like two drops of water",
      "meaning": "to look exactly alike, to be the spitting image of someone",
      "example": "Момичето прилича на майка си като две капки вода."
    },
    {
      "idiom": "Хващам бика за рогата",
      "literal": "I grab the bull by the horns",
      "meaning": "to tackle a difficult problem directly and decisively",
      "example": "Стига сме отлагали, хайде да хванем бика за рогата."
    },
    {
      "idiom": "Стоя като на тръни",
      "literal": "I stand as if on thorns",
      "meaning": "to be very anxious or nervous, to be on pins and needles",
      "example": "Стоях като на тръни, докато чаках резултатите от изпита."
    },
    {
      "idiom": "Пет пари не давам",
      "literal": "I don't give five coins",
      "meaning": "to not care at all about something",
      "example": "Той пет пари не дава за чуждото мнение."
    },
    {
      "idiom": "Гледам през пръсти",
      "literal": "I look through my fingers",
      "meaning": "to deliberately overlook something, to turn a blind eye",
      "example": "Шефът гледа през пръсти на закъсненията му."
    },
    {
      "idiom": "Обирам си крушите",
      "literal": "I gather up my own pears",
      "meaning": "to leave in a hurry, to pack up and clear off",
      "example": "Стана късно, хайде да си обираме крушите."
    },
    {
      "idiom": "Прехапвам си езика",
      "literal": "I bite my own tongue",
      "meaning": "to stop oneself from saying something one would regret",
      "example": "Прехапах си езика, за да не избухна пред всички."
    },
    {
      "idiom": "Хващам се на въдицата",
      "literal": "I get caught on the fishing hook",
      "meaning": "to fall for a trick or scam",
      "example": "Хванах се на въдицата на измамниците и загубих парите си."
    },
    {
      "idiom": "Режа клона, на който седя",
      "literal": "I cut the branch on which I sit",
      "meaning": "to act against one's own interests, to undermine one's own position",
      "example": "Като лъже началника си, той реже клона, на който седи."
    },
    {
      "idiom": "Влизам в положението",
      "literal": "I enter into the position",
      "meaning": "to put oneself in someone's shoes, to understand and sympathize with their situation",
      "example": "Опитай се да влезеш в моето положение, преди да ме съдиш."
    }
  ],
  "bs": [
    {
      "idiom": "Baciti koplje u trnje",
      "literal": "to throw the spear into the thorns",
      "meaning": "to give up, to abandon an effort or fight",
      "example": "Nemoj baciti koplje u trnje nakon prvog neuspjeha."
    },
    {
      "idiom": "Praviti se Englez",
      "literal": "to play the Englishman",
      "meaning": "to pretend not to notice or understand something, to feign ignorance",
      "example": "Ne pravi se Englez, dobro znaš o čemu pričam."
    },
    {
      "idiom": "Praviti od muhe slona",
      "literal": "to make an elephant out of a fly",
      "meaning": "to exaggerate a small problem, to make a mountain out of a molehill",
      "example": "Smiri se, praviš od muhe slona."
    },
    {
      "idiom": "Vući nekoga za nos",
      "literal": "to pull someone by the nose",
      "meaning": "to deceive or string someone along",
      "example": "Dosta je bilo, vuče me za nos već mjesecima."
    },
    {
      "idiom": "Gledati kroz prste",
      "literal": "to look through the fingers",
      "meaning": "to deliberately overlook something, to turn a blind eye",
      "example": "Nastavnik mu gleda kroz prste jer mu je otac direktor."
    },
    {
      "idiom": "Sjediti na dvije stolice",
      "literal": "to sit on two chairs",
      "meaning": "to try to please or benefit from two opposing sides at once",
      "example": "Ne možeš vječno sjediti na dvije stolice, moraš izabrati stranu."
    },
    {
      "idiom": "Kao grom iz vedra neba",
      "literal": "like thunder from a clear sky",
      "meaning": "completely unexpected, out of the blue",
      "example": "Njegova ostavka došla je kao grom iz vedra neba."
    },
    {
      "idiom": "Biti mokra kokoš",
      "literal": "to be a wet hen",
      "meaning": "to be timid, meek, or spineless",
      "example": "Prestani biti mokra kokoš i reci mu istinu u lice."
    },
    {
      "idiom": "Imati pik na nekoga",
      "literal": "to have a pique on someone",
      "meaning": "to hold a grudge against someone",
      "example": "Otkad sam ga pobijedio na turniru, ima pik na mene."
    },
    {
      "idiom": "Fali mu daska u glavi",
      "literal": "a plank is missing in his head",
      "meaning": "he is a bit crazy, not quite right in the head",
      "example": "Skočio je u rijeku po ovoj hladnoći, sigurno mu fali daska u glavi."
    },
    {
      "idiom": "Kad na vrbi rodi grožđe",
      "literal": "when grapes grow on the willow",
      "meaning": "never, when pigs fly",
      "example": "Vratit će mi dug kad na vrbi rodi grožđe."
    },
    {
      "idiom": "Baciti oko na nešto",
      "literal": "to throw an eye on something",
      "meaning": "to take a fancy to something, to have one's eye on it",
      "example": "Bacila sam oko na onu crvenu haljinu u izlogu."
    },
    {
      "idiom": "Držati jezik za zubima",
      "literal": "to hold the tongue behind the teeth",
      "meaning": "to keep quiet, to hold one's tongue",
      "example": "Bolje drži jezik za zubima dok se sve ne razjasni."
    },
    {
      "idiom": "Preko glave mi je",
      "literal": "it is over my head",
      "meaning": "to be fed up with something, to have had enough",
      "example": "Preko glave mi je njegovih vječnih žalbi."
    },
    {
      "idiom": "Ubiti dvije muhe jednim udarcem",
      "literal": "to kill two flies with one blow",
      "meaning": "to accomplish two goals with a single action, kill two birds with one stone",
      "example": "Ako svratim u banku na putu do posla, ubit ću dvije muhe jednim udarcem."
    }
  ],
  "ca": [
    {
      "idiom": "estar a la lluna",
      "literal": "to be on the moon",
      "meaning": "to be daydreaming, absent minded",
      "example": "Perdona, no t'he sentit, estava a la lluna."
    },
    {
      "idiom": "ploure a bots i barrals",
      "literal": "to rain wineskins and barrels",
      "meaning": "to rain very heavily, pour down",
      "example": "No surtim ara, que plou a bots i barrals."
    },
    {
      "idiom": "tenir la paella pel mànec",
      "literal": "to hold the frying pan by the handle",
      "meaning": "to be in control of a situation",
      "example": "En aquesta negociació, som nosaltres qui tenim la paella pel mànec."
    },
    {
      "idiom": "no tenir pèls a la llengua",
      "literal": "to have no hairs on the tongue",
      "meaning": "to speak bluntly, not mince one's words",
      "example": "La meva àvia no té pèls a la llengua i sempre diu el que pensa."
    },
    {
      "idiom": "fer campana",
      "literal": "to make bell",
      "meaning": "to skip school, play truant",
      "example": "Els meus companys van fer campana per anar al cinema."
    },
    {
      "idiom": "fer safareig",
      "literal": "to do the wash house",
      "meaning": "to gossip",
      "example": "Les veïnes es passen el matí fent safareig al replà."
    },
    {
      "idiom": "tenir mala llet",
      "literal": "to have bad milk",
      "meaning": "to be in a foul mood, be bad tempered",
      "example": "No li diguis res ara, que té mala llet."
    },
    {
      "idiom": "fer-se l'orni",
      "literal": "to make oneself the fool",
      "meaning": "to play dumb, pretend not to notice or understand",
      "example": "No et facis l'orni, saps perfectament què ha passat."
    },
    {
      "idiom": "anar-se'n en orris",
      "literal": "to go off into ruins",
      "meaning": "to fall through, come to nothing (of plans)",
      "example": "Amb la pluja, l'excursió se'n va anar en orris."
    },
    {
      "idiom": "tocar el dos",
      "literal": "to touch the two",
      "meaning": "to leave, scram, clear off",
      "example": "Va, toca el dos abans que arribi el professor."
    },
    {
      "idiom": "posar fil a l'agulla",
      "literal": "to put thread to the needle",
      "meaning": "to get down to business, start working on something in earnest",
      "example": "Prou de reunions, ja toca posar fil a l'agulla."
    },
    {
      "idiom": "costar un ull de la cara",
      "literal": "to cost an eye from the face",
      "meaning": "to be very expensive, cost a fortune",
      "example": "Aquell viatge ens va costar un ull de la cara."
    },
    {
      "idiom": "quedar-se de pedra",
      "literal": "to remain as stone",
      "meaning": "to be stunned, left speechless",
      "example": "Em vaig quedar de pedra quan vaig veure la factura."
    },
    {
      "idiom": "passar-s'ho pipa",
      "literal": "to pass it pipe",
      "meaning": "to have a great time, have a blast",
      "example": "A la festa d'ahir ens ho vam passar pipa."
    },
    {
      "idiom": "buscar tres peus al gat",
      "literal": "to look for three feet on the cat",
      "meaning": "to overcomplicate things, look for problems that aren't there",
      "example": "No busquis tres peus al gat, la resposta és molt senzilla."
    }
  ],
  "cs": [
    {
      "idiom": "mít máslo na hlavě",
      "literal": "to have butter on one's head",
      "meaning": "to be guilty of something oneself, to have a guilty conscience",
      "example": "Neměl by mě kritizovat, sám má máslo na hlavě."
    },
    {
      "idiom": "házet flintu do žita",
      "literal": "to throw the shotgun into the rye",
      "meaning": "to give up too easily, to throw in the towel prematurely",
      "example": "Neházej flintu do žita, ještě to můžeš dokázat."
    },
    {
      "idiom": "chodit kolem horké kaše",
      "literal": "to walk around hot porridge",
      "meaning": "to beat around the bush, to avoid getting to the point",
      "example": "Řekni mi to rovnou, nechoď kolem horké kaše."
    },
    {
      "idiom": "tahat někoho za nos",
      "literal": "to pull someone by the nose",
      "meaning": "to deceive or fool someone, to lead someone on",
      "example": "Nevěř mu, jen tě tahá za nos."
    },
    {
      "idiom": "dělat z komára velblouda",
      "literal": "to make a camel out of a mosquito",
      "meaning": "to make a mountain out of a molehill, to exaggerate a small problem",
      "example": "Nedělej z komára velblouda, není to tak zlé."
    },
    {
      "idiom": "být pro někoho španělská vesnice",
      "literal": "to be a Spanish village for someone",
      "meaning": "to be completely incomprehensible to someone, it's all Greek to me",
      "example": "Kvantová fyzika je pro mě španělská vesnice."
    },
    {
      "idiom": "mít hluboko do kapsy",
      "literal": "to have deep into the pocket",
      "meaning": "to be short of money, to be broke",
      "example": "Na konci měsíce mám vždycky hluboko do kapsy."
    },
    {
      "idiom": "spadl mu kámen ze srdce",
      "literal": "a stone fell from his heart",
      "meaning": "to feel a great sense of relief, a weight off one's mind",
      "example": "Když jsme se dozvěděli výsledky testů, spadl mi kámen ze srdce."
    },
    {
      "idiom": "lámat si hlavu",
      "literal": "to break one's head",
      "meaning": "to rack one's brains over something",
      "example": "S tou křížovkou jsem si lámal hlavu celý večer."
    },
    {
      "idiom": "vzít nohy na ramena",
      "literal": "to take one's legs onto one's shoulders",
      "meaning": "to run away quickly, to flee",
      "example": "Jakmile uviděl policii, vzal nohy na ramena."
    },
    {
      "idiom": "házet někomu klacky pod nohy",
      "literal": "to throw sticks under someone's feet",
      "meaning": "to put obstacles in someone's way",
      "example": "Místo pomoci mi jen házel klacky pod nohy."
    },
    {
      "idiom": "koukat jako tele na nová vrata",
      "literal": "to stare like a calf at a new gate",
      "meaning": "to look utterly baffled or dumbfounded",
      "example": "Když jsem mu to vysvětlil, koukal jako tele na nová vrata."
    },
    {
      "idiom": "mít o kolečko míň",
      "literal": "to have one wheel fewer",
      "meaning": "to be a bit crazy, not quite right in the head",
      "example": "Podle mě má ten chlap o kolečko míň."
    },
    {
      "idiom": "natáhnout bačkory",
      "literal": "to stretch out one's slippers",
      "meaning": "to die, to kick the bucket (informal, humorous)",
      "example": "Starý soused minulý týden natáhl bačkory."
    },
    {
      "idiom": "být za vodou",
      "literal": "to be beyond the water",
      "meaning": "to be financially secure, to have no more money worries",
      "example": "Po prodeji firmy je konečně za vodou."
    }
  ],
  "da": [
    {
      "idiom": "Der er ugler i mosen",
      "literal": "There are owls in the bog",
      "meaning": "Something is suspicious, fishy, or not as it seems",
      "example": "Jeg tror, der er ugler i mosen med det tilbud."
    },
    {
      "idiom": "at tage benene på nakken",
      "literal": "to take the legs on the neck",
      "meaning": "to run away or flee in a great hurry, take to one's heels",
      "example": "Da alarmen gik, tog tyven benene på nakken."
    },
    {
      "idiom": "at have en høne at plukke med nogen",
      "literal": "to have a hen to pluck with someone",
      "meaning": "to have a bone to pick with someone",
      "example": "Jeg har en høne at plukke med dig."
    },
    {
      "idiom": "at gå som katten om den varme grød",
      "literal": "to walk like the cat around the hot porridge",
      "meaning": "to beat around the bush, avoid getting to the point",
      "example": "Hold op med at gå som katten om den varme grød, og sig det ligeud."
    },
    {
      "idiom": "at slå to fluer med ét smæk",
      "literal": "to hit two flies with one smack",
      "meaning": "to kill two birds with one stone",
      "example": "Ved at cykle på arbejde slår jeg to fluer med ét smæk."
    },
    {
      "idiom": "at stå på bar bund",
      "literal": "to stand on bare ground",
      "meaning": "to have nothing to go on, be clueless, or start completely from scratch",
      "example": "Politiet stod på bar bund i sagen om det forsvundne maleri."
    },
    {
      "idiom": "at koste kassen",
      "literal": "to cost the till",
      "meaning": "to cost a fortune, be very expensive",
      "example": "Den nye lejlighed kostede kassen."
    },
    {
      "idiom": "at gå i hundene",
      "literal": "to go into the dogs",
      "meaning": "to go to ruin, deteriorate badly, go downhill",
      "example": "Byens gamle fabrik er gået helt i hundene."
    },
    {
      "idiom": "at have is i maven",
      "literal": "to have ice in the stomach",
      "meaning": "to stay cool and composed under pressure",
      "example": "Målmanden havde is i maven og reddede straffesparket."
    },
    {
      "idiom": "at gøre en myg til en elefant",
      "literal": "to make a mosquito into an elephant",
      "meaning": "to make a mountain out of a molehill, exaggerate a small problem",
      "example": "Slap af, du gør en myg til en elefant."
    },
    {
      "idiom": "at have en skrue løs",
      "literal": "to have a screw loose",
      "meaning": "to be a bit crazy, not quite right in the head",
      "example": "Han griner altid ad de mærkeligste ting, han må have en skrue løs."
    },
    {
      "idiom": "at tage bladet fra munden",
      "literal": "to take the leaf from the mouth",
      "meaning": "to speak frankly, not mince words, say what one really thinks",
      "example": "Chefen tog bladet fra munden og fortalte os sandheden."
    },
    {
      "idiom": "Der er ingen ko på isen",
      "literal": "There is no cow on the ice",
      "meaning": "there's no danger, nothing to worry about",
      "example": "Bare rolig, der er ingen ko på isen endnu."
    },
    {
      "idiom": "at gå over åen efter vand",
      "literal": "to go across the stream for water",
      "meaning": "to do something the needlessly hard way, make things more complicated than necessary",
      "example": "Du behøver ikke gå over åen efter vand, svaret står jo lige her."
    },
    {
      "idiom": "at gå i baglås",
      "literal": "to go into back lock",
      "meaning": "to freeze up completely or get stuck (mind goes blank, or a mechanism jams)",
      "example": "Jeg gik helt i baglås, da jeg skulle holde talen."
    }
  ],
  "el": [
    {
      "idiom": "Κάνω την πάπια",
      "literal": "I play the duck",
      "meaning": "to pretend not to understand or know something, feigning ignorance to dodge responsibility",
      "example": "Μην κάνεις την πάπια, ξέρεις πολύ καλά τι έγινε."
    },
    {
      "idiom": "Βρέχει καρεκλοπόδαρα",
      "literal": "It rains chair legs",
      "meaning": "it's raining very heavily, pouring rain",
      "example": "Μην βγεις έξω, βρέχει καρεκλοπόδαρα."
    },
    {
      "idiom": "Μου πήρες τα λόγια από το στόμα",
      "literal": "You took the words from my mouth",
      "meaning": "you said exactly what I was about to say",
      "example": "Μου πήρες τα λόγια από το στόμα, ακριβώς αυτό σκεφτόμουν κι εγώ."
    },
    {
      "idiom": "Πέφτω από τα σύννεφα",
      "literal": "I fall from the clouds",
      "meaning": "to be taken completely by surprise, utterly astonished",
      "example": "Όταν άκουσα τα νέα, έπεσα από τα σύννεφα."
    },
    {
      "idiom": "Χάνω τα αυγά και τα πασχάλια",
      "literal": "I lose the eggs and the Easters",
      "meaning": "to become totally confused and flustered, at a complete loss over what to do",
      "example": "Με τόσες αλλαγές στο πρόγραμμα, έχασα τα αυγά και τα πασχάλια."
    },
    {
      "idiom": "Ο κόμπος έφτασε στο χτένι",
      "literal": "The knot reached the comb",
      "meaning": "patience has run out, the situation has reached breaking point",
      "example": "Μετά από τόσα ψέματα, ο κόμπος έφτασε στο χτένι."
    },
    {
      "idiom": "Δεν βλέπω την ώρα",
      "literal": "I don't see the hour",
      "meaning": "I can't wait for something, I'm eagerly looking forward to it",
      "example": "Δεν βλέπω την ώρα να έρθουν οι διακοπές."
    },
    {
      "idiom": "Μου κόπηκαν τα γόνατα",
      "literal": "My knees got cut",
      "meaning": "I was so shocked or frightened that my legs went weak",
      "example": "Όταν είδα το αποτέλεσμα των εξετάσεων, μου κόπηκαν τα γόνατα."
    },
    {
      "idiom": "Πιάνω τον ταύρο από τα κέρατα",
      "literal": "I catch the bull by the horns",
      "meaning": "to tackle a difficult problem directly and decisively",
      "example": "Κάποια στιγμή πρέπει να πιάσουμε τον ταύρο από τα κέρατα."
    },
    {
      "idiom": "Βάζω νερό στο κρασί μου",
      "literal": "I put water in my wine",
      "meaning": "to moderate my demands, back down and compromise",
      "example": "Μετά τη συζήτηση, έβαλε λίγο νερό στο κρασί του."
    },
    {
      "idiom": "Μου ανεβαίνει το αίμα στο κεφάλι",
      "literal": "The blood rises to my head",
      "meaning": "I get furious, I lose my temper",
      "example": "Όταν μου μιλάει έτσι, μου ανεβαίνει το αίμα στο κεφάλι."
    },
    {
      "idiom": "Δίνω τόπο στην οργή",
      "literal": "I give room to the wrath",
      "meaning": "to step back and let anger pass rather than react in the heat of the moment",
      "example": "Καλύτερα να δώσουμε τόπο στην οργή παρά να τσακωθούμε άσχημα."
    },
    {
      "idiom": "Κάθομαι σε αναμμένα κάρβουνα",
      "literal": "I sit on lit coals",
      "meaning": "to be very anxious and on edge while waiting for something",
      "example": "Όλη την ώρα της εξέτασης καθόταν σε αναμμένα κάρβουνα."
    },
    {
      "idiom": "Κάνω τα στραβά μάτια",
      "literal": "I make crooked eyes",
      "meaning": "to turn a blind eye, to deliberately ignore something wrong",
      "example": "Ο διευθυντής έκανε τα στραβά μάτια στις καθυστερήσεις του."
    }
  ],
  "et": [
    {
      "idiom": "Kuidas käsi käib?",
      "literal": "How does the hand go?",
      "meaning": "How are you doing (a common everyday greeting)",
      "example": "Kuidas käsi käib, vana sõber?"
    },
    {
      "idiom": "nagu kaks tilka vett",
      "literal": "like two drops of water",
      "meaning": "to look exactly alike, like two peas in a pod",
      "example": "Õed on nagu kaks tilka vett, keegi ei oska neid eristada."
    },
    {
      "idiom": "süda vajus saapasäärde",
      "literal": "the heart sank into the boot",
      "meaning": "to become very frightened, one's heart sank",
      "example": "Kui buss järsku pidurdas, vajus mul süda saapasäärde."
    },
    {
      "idiom": "karuteene tegema",
      "literal": "to do a bear's service",
      "meaning": "to do someone a disservice while trying to help them",
      "example": "Tahtsin last aidata, aga tegin talle hoopis karuteene."
    },
    {
      "idiom": "kivi kapsaaeda viskama",
      "literal": "to throw a stone into the cabbage garden",
      "meaning": "to make a veiled critical remark aimed at someone",
      "example": "See märkus koosolekul oli selge kivi minu kapsaaeda."
    },
    {
      "idiom": "nagu õlitatult",
      "literal": "as if oiled",
      "meaning": "very smoothly, like a well-oiled machine",
      "example": "Uue juhi käe all hakkas kõik nagu õlitatult jooksma."
    },
    {
      "idiom": "ninapidi vedama",
      "literal": "to lead by the nose",
      "meaning": "to deceive or manipulate someone completely",
      "example": "Ta vedas oma ülemust mitu kuud ninapidi, enne kui tõde välja tuli."
    },
    {
      "idiom": "pead murdma",
      "literal": "to break one's head",
      "meaning": "to rack one's brain over a problem",
      "example": "Murdsin terve õhtu pead, kuidas seda ülesannet lahendada."
    },
    {
      "idiom": "käed rüpes istuma",
      "literal": "to sit with hands in the lap",
      "meaning": "to remain idle and do nothing when action is needed",
      "example": "Kõik teised koristasid, tema aga istus käed rüpes."
    },
    {
      "idiom": "silma peal hoidma",
      "literal": "to hold an eye on",
      "meaning": "to keep watch over someone or something, to supervise closely",
      "example": "Palun hoia mu kotil korraks silma peal."
    },
    {
      "idiom": "torm veeklaasis",
      "literal": "a storm in a glass of water",
      "meaning": "a big fuss over something trivial",
      "example": "Meedia tegi sellest suure loo, aga tegelikult oli see torm veeklaasis."
    },
    {
      "idiom": "põrsast kotis ostma",
      "literal": "to buy a piglet in a bag",
      "meaning": "to buy something sight unseen, a pig in a poke",
      "example": "Ostsin selle sülearvuti netist ilma nägemata ja sain aru, et ostsin põrsa kotis."
    },
    {
      "idiom": "pika ninaga jääma",
      "literal": "to be left with a long nose",
      "meaning": "to end up disappointed, cheated, or empty-handed",
      "example": "Piletid said otsa enne meie järge, nii et jäime pika ninaga."
    },
    {
      "idiom": "vihma käest räästa alla",
      "literal": "from the rain to under the eaves",
      "meaning": "to go from a bad situation into an even worse one",
      "example": "Vahetasin töökohta, aga läksin hoopis vihma käest räästa alla."
    },
    {
      "idiom": "tuli takus",
      "literal": "fire in the tow (flax fiber)",
      "meaning": "to be in a great hurry",
      "example": "Ma ei saa praegu rääkida, mul on tuli takus."
    }
  ],
  "eu": [
    {
      "idiom": "adarra jo",
      "literal": "to hit the horn",
      "meaning": "to tease someone, to pull someone's leg",
      "example": "Adarra jotzen ari zara, ezta?"
    },
    {
      "idiom": "hanka sartu",
      "literal": "to put a leg in",
      "meaning": "to make a blunder, to mess up, to put one's foot in it",
      "example": "Barkamena eskatu behar diot, ondo hanka sartu dut."
    },
    {
      "idiom": "hankaz gora egon",
      "literal": "to be with legs upward",
      "meaning": "to be upside down, in total disarray, in chaos",
      "example": "Festaren ondoren, etxea hankaz gora zegoen."
    },
    {
      "idiom": "sudurra sartu",
      "literal": "to put the nose in",
      "meaning": "to meddle, to poke one's nose into other people's business",
      "example": "Ez sartu sudurra besteren kontuetan."
    },
    {
      "idiom": "ahoa bete hortz gelditu",
      "literal": "to remain with mouth full of teeth",
      "meaning": "to be left speechless, dumbfounded",
      "example": "Berri hura entzutean, ahoa bete hortz gelditu zen."
    },
    {
      "idiom": "musutruk",
      "literal": "in exchange for a kiss",
      "meaning": "for free, without paying anything",
      "example": "Sarrerak musutruk lortu genituen kontzerturako."
    },
    {
      "idiom": "bertan behera utzi",
      "literal": "to leave down right there",
      "meaning": "to cancel, to call off a plan",
      "example": "Euriagatik, bilera bertan behera utzi zuten."
    },
    {
      "idiom": "odol hotzean",
      "literal": "in cold blood",
      "meaning": "coolly and deliberately, without emotion",
      "example": "Mehatxuen aurrean, odol hotzean erantzun zuen."
    },
    {
      "idiom": "begi onez ikusi",
      "literal": "to see with a good eye",
      "meaning": "to view favorably, to approve of",
      "example": "Ez zuten begi onez ikusi nire erabakia."
    },
    {
      "idiom": "hitzetik hortzera",
      "literal": "from word to tooth",
      "meaning": "instantly, right away, without hesitation",
      "example": "Galdetu bezain laster, hitzetik hortzera erantzun zuen."
    },
    {
      "idiom": "hitza jan",
      "literal": "to eat the word",
      "meaning": "to break a promise, to go back on one's word",
      "example": "Etorriko zela agindu zuen, baina hitza jan zuen."
    },
    {
      "idiom": "burua berotu",
      "literal": "to heat up the head",
      "meaning": "to worry a lot, to get worked up over something",
      "example": "Ez ibili burua berotzen kontu horrekin, konponduko da eta."
    },
    {
      "idiom": "izerdi patsetan egon",
      "literal": "to be soaked in sweat",
      "meaning": "to be drenched in sweat, sweating profusely",
      "example": "Korrika egin ondoren, izerdi patsetan zegoen."
    },
    {
      "idiom": "adarrak jarri",
      "literal": "to put horns on someone",
      "meaning": "to be unfaithful to, to cheat on one's partner",
      "example": "Bere bikotekideak adarrak jarri zizkion, eta harremana hautsi egin zuten."
    },
    {
      "idiom": "lepoa egin",
      "literal": "to do the neck",
      "meaning": "to bet, to be utterly certain of something",
      "example": "Lepoa egingo nuke bihar euria egingo duela."
    }
  ],
  "fi": [
    {
      "idiom": "olla pihalla",
      "literal": "to be in the yard",
      "meaning": "to be clueless, to have no idea what is going on",
      "example": "En ymmärtänyt kokouksessa mitään, olin täysin pihalla."
    },
    {
      "idiom": "mennä metsään",
      "literal": "to go into the forest",
      "meaning": "to go wrong, to fail, to miss the mark",
      "example": "Koko suunnitelma meni pahasti metsään."
    },
    {
      "idiom": "vetää herneen nenäänsä",
      "literal": "to pull a pea into one's own nose",
      "meaning": "to get offended, to sulk over something trivial",
      "example": "Hän veti heti herneen nenäänsä pienestäkin huomautuksesta."
    },
    {
      "idiom": "olla kuin kala kuivalla maalla",
      "literal": "to be like a fish on dry land",
      "meaning": "to be completely out of one's element",
      "example": "Isossa kaupungissa maalaispoika oli kuin kala kuivalla maalla."
    },
    {
      "idiom": "heittää kapuloita rattaisiin",
      "literal": "to throw sticks into the wheels",
      "meaning": "to deliberately obstruct or sabotage something",
      "example": "Kilpailija yritti heittää kapuloita rattaisiimme viime hetkellä."
    },
    {
      "idiom": "ottaa itseään niskasta kiinni",
      "literal": "to take oneself by the neck",
      "meaning": "to pull oneself together, to get a grip",
      "example": "Nyt on korkea aika ottaa itseään niskasta kiinni ja alkaa opiskella."
    },
    {
      "idiom": "ei ole kaikki muumit laaksossa",
      "literal": "not all the Moomins are in the valley",
      "meaning": "to not be quite right in the head, to be a bit crazy",
      "example": "Hänellä ei taida olla kaikki muumit laaksossa."
    },
    {
      "idiom": "selvä pyy",
      "literal": "clear grouse",
      "meaning": "understood, sure thing, no problem (casual agreement)",
      "example": "Voisitko hakea leivät kaupasta? Selvä pyy."
    },
    {
      "idiom": "mennä pupu pöksyyn",
      "literal": "the rabbit goes into the pants",
      "meaning": "to get scared, to become frightened",
      "example": "Pimeässä metsässä pojalta meni pupu pöksyyn."
    },
    {
      "idiom": "heittää lusikka nurkkaan",
      "literal": "to throw the spoon into the corner",
      "meaning": "to die (colloquial, like to kick the bucket)",
      "example": "Vanha koiramme heitti lusikan nurkkaan viime syksynä."
    },
    {
      "idiom": "nostaa kissa pöydälle",
      "literal": "to lift the cat onto the table",
      "meaning": "to bring up an uncomfortable topic openly, to address the elephant in the room",
      "example": "Kokouksessa joku vihdoin nosti kissan pöydälle ja kysyi irtisanomisista."
    },
    {
      "idiom": "olla puun ja kuoren välissä",
      "literal": "to be between the tree and the bark",
      "meaning": "to be caught between two opposing sides, stuck between a rock and a hard place",
      "example": "Esimies oli puun ja kuoren välissä johdon ja henkilöstön ristiriidassa."
    },
    {
      "idiom": "mennä kuin Strömsössä",
      "literal": "to go like in Strömsö",
      "meaning": "to go perfectly smoothly, without a hitch",
      "example": "Kesämökin remontti meni kuin Strömsössä."
    },
    {
      "idiom": "puhua palturia",
      "literal": "to speak nonsense",
      "meaning": "to talk nonsense, to say things that make no sense",
      "example": "Poliitikko puhui pelkkää palturia koko haastattelun ajan."
    },
    {
      "idiom": "lyödä kaksi kärpästä yhdellä iskulla",
      "literal": "to hit two flies with one blow",
      "meaning": "to kill two birds with one stone",
      "example": "Pyörällä töihin mennessä lyöt kaksi kärpästä yhdellä iskulla."
    }
  ],
  "gl": [
    {
      "idiom": "estar nas nubes",
      "literal": "to be in the clouds",
      "meaning": "to be distracted or daydreaming, not paying attention",
      "example": "Non me escoitaches nada, estabas nas nubes."
    },
    {
      "idiom": "non ter pelos na lingua",
      "literal": "to not have hairs on the tongue",
      "meaning": "to speak bluntly and frankly, without holding back",
      "example": "A miña avoa non ten pelos na lingua e dille todo á cara."
    },
    {
      "idiom": "custar un ollo da cara",
      "literal": "to cost an eye from the face",
      "meaning": "to be extremely expensive",
      "example": "Ese piso en Vigo cústalle un ollo da cara ao meu curmán."
    },
    {
      "idiom": "matar dous paxaros dun tiro",
      "literal": "to kill two birds with one shot",
      "meaning": "to achieve two things with a single action",
      "example": "Se imos á tenda de camiño ao traballo, matamos dous paxaros dun tiro."
    },
    {
      "idiom": "poñer o carro diante dos bois",
      "literal": "to put the cart in front of the oxen",
      "meaning": "to do things in the wrong order, act before the right moment",
      "example": "Non poñas o carro diante dos bois, primeiro busca traballo e despois muda de piso."
    },
    {
      "idiom": "tomar o pelo",
      "literal": "to take the hair",
      "meaning": "to mock or tease someone, pull their leg",
      "example": "Non me tomes o pelo, sei que non foi así."
    },
    {
      "idiom": "botar unha man",
      "literal": "to throw a hand",
      "meaning": "to help someone out, lend a hand",
      "example": "Podes botarme unha man con estas caixas?"
    },
    {
      "idiom": "estar coma peixe na auga",
      "literal": "to be like a fish in the water",
      "meaning": "to feel completely comfortable and at ease",
      "example": "Desde que chegou a Galicia, está coma peixe na auga."
    },
    {
      "idiom": "meter a pata",
      "literal": "to put in the paw",
      "meaning": "to make a blunder or mistake",
      "example": "Metín a pata cando lle preguntei pola súa ex."
    },
    {
      "idiom": "falar polos cóbados",
      "literal": "to talk through the elbows",
      "meaning": "to talk a great deal, be very talkative",
      "example": "O meu curmán fala polos cóbados, non hai quen o pare."
    },
    {
      "idiom": "coller o touro polos cornos",
      "literal": "to grab the bull by the horns",
      "meaning": "to confront a difficult situation directly and decisively",
      "example": "Xa vai sendo hora de coller o touro polos cornos e falar co xefe."
    },
    {
      "idiom": "estar coa auga ao pescozo",
      "literal": "to be with the water at the neck",
      "meaning": "to be in a very difficult or precarious situation",
      "example": "Con tantas facturas, estamos coa auga ao pescozo este mes."
    },
    {
      "idiom": "facer as beiras",
      "literal": "to make the edges",
      "meaning": "to court or flirt with someone romantically",
      "example": "Leva semanas facéndolle as beiras a esa rapaza da oficina."
    },
    {
      "idiom": "botar leña ao lume",
      "literal": "to throw firewood on the fire",
      "meaning": "to make a tense situation or conflict worse",
      "example": "Non lle botes máis leña ao lume, xa está bastante enfadada."
    },
    {
      "idiom": "poñerse as botas",
      "literal": "to put on the boots",
      "meaning": "to eat a great deal, or take full advantage of something",
      "example": "No aniversario puxémonos as botas coa empanada."
    }
  ],
  "hr": [
    {
      "idiom": "Dići ruke od nečega",
      "literal": "to raise one's hands from something",
      "meaning": "to give up on something, stop trying",
      "example": "Nakon nekoliko neuspjelih pokušaja, digao je ruke od tog projekta."
    },
    {
      "idiom": "Biti na konju",
      "literal": "to be on the horse",
      "meaning": "to be in a favorable position, doing very well",
      "example": "Otkad je otvorio vlastitu tvrtku, on je na konju."
    },
    {
      "idiom": "Držati fige",
      "literal": "to hold figs",
      "meaning": "to keep one's fingers crossed for good luck",
      "example": "Držim ti fige za sutrašnji razgovor za posao."
    },
    {
      "idiom": "Vući nekoga za nos",
      "literal": "to pull someone by the nose",
      "meaning": "to deceive or fool someone",
      "example": "Prestani me vući za nos i reci mi istinu."
    },
    {
      "idiom": "Biti na sedmom nebu",
      "literal": "to be in the seventh heaven",
      "meaning": "to be extremely happy, overjoyed",
      "example": "Kad je vidjela rezultate ispita, bila je na sedmom nebu."
    },
    {
      "idiom": "Ubiti dvije muhe jednim udarcem",
      "literal": "to kill two flies with one blow",
      "meaning": "to accomplish two things with a single action",
      "example": "Ako putujemo preko Beča, ubit ćemo dvije muhe jednim udarcem."
    },
    {
      "idiom": "Piti kao smuk",
      "literal": "to drink like a grass snake",
      "meaning": "to drink alcohol heavily, drink like a fish",
      "example": "Na svakom rođendanu pije kao smuk."
    },
    {
      "idiom": "Biti pod papučom",
      "literal": "to be under the slipper",
      "meaning": "to be dominated by one's spouse, henpecked",
      "example": "Otkad se oženio, potpuno je pod papučom."
    },
    {
      "idiom": "Praviti od muhe slona",
      "literal": "to make an elephant out of a fly",
      "meaning": "to exaggerate a small problem, make a mountain out of a molehill",
      "example": "Smiri se, ne moraš praviti od muhe slona."
    },
    {
      "idiom": "Kupiti mačka u vreći",
      "literal": "to buy a cat in a sack",
      "meaning": "to buy something without inspecting it first, buy a pig in a poke",
      "example": "Uvijek pregledaj stan prije nego što ga unajmiš, da ne kupiš mačka u vreći."
    },
    {
      "idiom": "Ni pet ni šest",
      "literal": "neither five nor six",
      "meaning": "without any hesitation, right away",
      "example": "Ni pet ni šest, samo je ustao i otišao bez riječi."
    },
    {
      "idiom": "Praviti se Englez",
      "literal": "to pretend to be an Englishman",
      "meaning": "to feign ignorance, pretend not to notice or understand something inconvenient",
      "example": "Znam da si dobio moju poruku, ne pravi se Englez."
    },
    {
      "idiom": "Nemati dlake na jeziku",
      "literal": "to have no hair on the tongue",
      "meaning": "to speak bluntly and honestly, not mince words",
      "example": "Kolegica nema dlake na jeziku kad iznosi svoje mišljenje."
    },
    {
      "idiom": "Sjediti na dvije stolice",
      "literal": "to sit on two chairs",
      "meaning": "to try to support or please two opposing sides at once",
      "example": "U ovoj svađi ne možeš sjediti na dvije stolice."
    },
    {
      "idiom": "Pao mu je kamen sa srca",
      "literal": "a stone fell from his heart",
      "meaning": "he felt a great sense of relief, a weight lifted off his mind",
      "example": "Kad je čuo da je sin sletio sigurno, pao mu je kamen sa srca."
    }
  ],
  "hu": [
    {
      "idiom": "Kutyából nem lesz szalonna",
      "literal": "No bacon comes from a dog",
      "meaning": "a person's basic nature or character cannot be changed",
      "example": "Hiába próbálod nevelni, kutyából nem lesz szalonna."
    },
    {
      "idiom": "Nem esik messze az alma a fájától",
      "literal": "The apple does not fall far from its tree",
      "meaning": "children tend to resemble their parents in character (like father, like son)",
      "example": "Ugyanolyan makacs, mint az apja, nem esik messze az alma a fájától."
    },
    {
      "idiom": "Se füle, se farka",
      "literal": "It has neither ear nor tail",
      "meaning": "something makes no sense at all, has no rhyme or reason",
      "example": "Ennek a történetnek se füle, se farka."
    },
    {
      "idiom": "Egy fecske nem csinál nyarat",
      "literal": "One swallow does not make a summer",
      "meaning": "a single good instance does not prove a lasting trend",
      "example": "Igaz, hogy egyszer sikerült, de egy fecske nem csinál nyarat."
    },
    {
      "idiom": "Éhes, mint a farkas",
      "literal": "Hungry as the wolf",
      "meaning": "extremely hungry",
      "example": "Egész nap nem ettem semmit, éhes vagyok, mint a farkas."
    },
    {
      "idiom": "Bottal ütheti a nyomát",
      "literal": "One can hit its tracks with a stick",
      "meaning": "someone or something is long gone and can no longer be found or recovered",
      "example": "Mire kiértünk az utcára, a tolvajnak már bottal üthettük a nyomát."
    },
    {
      "idiom": "Leesik a tantusz",
      "literal": "The token falls",
      "meaning": "someone suddenly understands something that had not clicked before, the penny drops",
      "example": "Végül leesett nála a tantusz, és megértette a viccet."
    },
    {
      "idiom": "Ne fesd az ördögöt a falra",
      "literal": "Don't paint the devil on the wall",
      "meaning": "don't jinx it by mentioning a bad outcome, don't tempt fate",
      "example": "Ne fesd az ördögöt a falra, még minden jóra fordulhat!"
    },
    {
      "idiom": "Sok víz lefolyt azóta a Dunán",
      "literal": "Much water has flowed down the Danube since then",
      "meaning": "a great deal of time has passed and much has changed since then",
      "example": "Húsz éve nem jártam itt, azóta sok víz lefolyt a Dunán."
    },
    {
      "idiom": "Kutyaszorítóban van",
      "literal": "He is in a dog squeeze",
      "meaning": "to be in a tight spot with no easy way out, a desperate situation",
      "example": "A határidő miatt most igazi kutyaszorítóban vagyok."
    },
    {
      "idiom": "Borsot tör az orra alá",
      "literal": "He grinds pepper under someone's nose",
      "meaning": "to deliberately annoy, irritate, or make trouble for someone",
      "example": "A szomszéd folyton borsot tör az orrunk alá."
    },
    {
      "idiom": "Szegény, mint a templom egere",
      "literal": "Poor as the church's mouse",
      "meaning": "extremely poor, destitute",
      "example": "Az egyetem alatt szegény voltam, mint a templom egere."
    },
    {
      "idiom": "Ajtóstul ront be a házba",
      "literal": "He bursts into the house together with the door",
      "meaning": "to blurt out unpleasant news or a request abruptly, with no preamble or tact",
      "example": "Ahelyett, hogy finoman közölte volna, ajtóstul rontott be a házba, és kimondta az igazságot."
    },
    {
      "idiom": "Két legyet üt egy csapásra",
      "literal": "He hits two flies with one stroke",
      "meaning": "to accomplish two things with a single action, kill two birds with one stone",
      "example": "Ha most elintézzük ezt is, két legyet ütünk egy csapásra."
    },
    {
      "idiom": "Addig nyújtózkodj, ameddig a takaród ér",
      "literal": "Stretch yourself only as far as your blanket reaches",
      "meaning": "live within your means, do not spend or want more than your circumstances allow",
      "example": "Addig nyújtózkodj, ameddig a takaród ér, ne vegyél fel újabb hitelt!"
    }
  ],
  "hy": [
    {
      "idiom": "գլխի ընկնել",
      "literal": "to fall into the head",
      "meaning": "to suddenly understand or realize something",
      "example": "Մի քանի րոպե անց նոր գլխի ընկա, թե ինչ էր ուզում ասել։"
    },
    {
      "idiom": "գլուխը կորցնել",
      "literal": "to lose one's head",
      "meaning": "to panic, to lose one's composure",
      "example": "Վտանգի պահին նա գլուխը չկորցրեց ու անմիջապես օգնություն կանչեց։"
    },
    {
      "idiom": "փորը մեջքին կպչել",
      "literal": "the belly to stick to the back",
      "meaning": "to be extremely hungry",
      "example": "Առավոտից ոչինչ չեմ կերել, փորս մեջքիս կպել է։"
    },
    {
      "idiom": "աչքի լույսի պես պահել",
      "literal": "to keep like the light of the eye",
      "meaning": "to cherish something very dearly",
      "example": "Տատիկս այդ նամակները աչքի լույսի պես էր պահում։"
    },
    {
      "idiom": "քիթը կախել",
      "literal": "to hang one's nose",
      "meaning": "to sulk, to look gloomy or upset",
      "example": "Ինչու՞ ես քիթդ կախել, ի՞նչ է պատահել։"
    },
    {
      "idiom": "ականջները սրել",
      "literal": "to sharpen one's ears",
      "meaning": "to listen very attentively",
      "example": "Երեխաները ականջները սրած՝ լսում էին տատիկի հեքիաթը։"
    },
    {
      "idiom": "աչքից ընկնել",
      "literal": "to fall from someone's eye",
      "meaning": "to lose someone's respect or esteem",
      "example": "Իր սուտի պատճառով նա ընկերների աչքից ընկավ։"
    },
    {
      "idiom": "ականջը զնգալ",
      "literal": "the ear to ring",
      "meaning": "to have the feeling someone is talking about you (ears burning)",
      "example": "Մենք անընդհատ քո մասին ենք խոսում, երևի դրա համար ականջդ է զնգում։"
    },
    {
      "idiom": "ձեռքից գալ",
      "literal": "to come from one's hand",
      "meaning": "to be within one's power or ability to do",
      "example": "Ինչ որ իմ ձեռքից գա, կանեմ քեզ համար։"
    },
    {
      "idiom": "ձեռքը բաց լինել",
      "literal": "for one's hand to be open",
      "meaning": "to be generous",
      "example": "Պապս միշտ ձեռքը բաց է եղել կարիքավորների հանդեպ։"
    },
    {
      "idiom": "ականջին օղ անել",
      "literal": "to put a ring on one's ear",
      "meaning": "to take something firmly to heart, to remember it for good",
      "example": "Մորս խոսքերը ականջիս օղ արեցի ու երբեք չմոռացա։"
    },
    {
      "idiom": "քամուն տալ",
      "literal": "to give to the wind",
      "meaning": "to waste or squander something",
      "example": "Նա ամբողջ ժառանգությունը մի քանի տարում քամուն տվեց։"
    },
    {
      "idiom": "քթի տակ ծիծաղել",
      "literal": "to laugh under one's nose",
      "meaning": "to laugh quietly to oneself, to snicker",
      "example": "Նա ոչինչ չասաց, միայն քթի տակ ծիծաղեց։"
    },
    {
      "idiom": "աչքերը կպչել",
      "literal": "the eyes to stick together",
      "meaning": "to be so sleepy one can barely keep one's eyes open",
      "example": "Այնքան հոգնած եմ, որ աչքերս կպչում են։"
    },
    {
      "idiom": "սիրտը լցվել",
      "literal": "the heart to fill up",
      "meaning": "to be deeply moved or overcome with strong emotion",
      "example": "Երգը լսելիս սիրտս լցվեց հուզմունքով։"
    }
  ],
  "id": [
    {
      "idiom": "panjang tangan",
      "literal": "long hand",
      "meaning": "a thief, someone prone to stealing",
      "example": "Hati-hati dengan dia, katanya dia panjang tangan."
    },
    {
      "idiom": "kepala dingin",
      "literal": "cold head",
      "meaning": "calm and composed",
      "example": "Kita harus menghadapi masalah ini dengan kepala dingin."
    },
    {
      "idiom": "buah bibir",
      "literal": "fruit of the lips",
      "meaning": "the talk of the town, a topic everyone gossips about",
      "example": "Skandal artis itu jadi buah bibir di mana-mana."
    },
    {
      "idiom": "naik daun",
      "literal": "rise leaf",
      "meaning": "to become popular, a rising star",
      "example": "Sejak filmnya sukses, aktor itu semakin naik daun."
    },
    {
      "idiom": "besar kepala",
      "literal": "big head",
      "meaning": "arrogant, conceited",
      "example": "Jangan besar kepala dulu, ini baru kemenangan pertama."
    },
    {
      "idiom": "cuci tangan",
      "literal": "to wash hands",
      "meaning": "to wash one's hands of something, avoid responsibility",
      "example": "Setelah proyek gagal, dia malah cuci tangan."
    },
    {
      "idiom": "gulung tikar",
      "literal": "to roll up the mat",
      "meaning": "to go bankrupt, go out of business",
      "example": "Banyak restoran gulung tikar selama pandemi."
    },
    {
      "idiom": "kutu buku",
      "literal": "book louse",
      "meaning": "a bookworm",
      "example": "Sejak kecil, dia memang kutu buku."
    },
    {
      "idiom": "tangan kanan",
      "literal": "right hand",
      "meaning": "a trusted right hand man or close assistant",
      "example": "Pak Budi adalah tangan kanan direktur di perusahaan ini."
    },
    {
      "idiom": "banting tulang",
      "literal": "to slam bones",
      "meaning": "to work extremely hard, work oneself to the bone",
      "example": "Ayahku banting tulang siang malam demi menyekolahkan kami."
    },
    {
      "idiom": "mulut manis",
      "literal": "sweet mouth",
      "meaning": "flattery, sweet talk",
      "example": "Jangan mudah percaya pada mulut manis penjual itu."
    },
    {
      "idiom": "meja hijau",
      "literal": "green table",
      "meaning": "a court of law, legal proceedings",
      "example": "Sengketa tanah itu akhirnya diselesaikan di meja hijau."
    },
    {
      "idiom": "otak udang",
      "literal": "shrimp brain",
      "meaning": "stupid, foolish",
      "example": "Kamu ini otak udang, disuruh belok kiri malah belok kanan."
    },
    {
      "idiom": "tebal muka",
      "literal": "thick face",
      "meaning": "shameless, brazen",
      "example": "Dasar tebal muka, sudah salah masih saja membantah."
    },
    {
      "idiom": "cari muka",
      "literal": "to look for face",
      "meaning": "to curry favor, suck up to someone",
      "example": "Dia selalu cari muka di depan atasannya."
    }
  ],
  "is": [
    {
      "idiom": "að bera í bakkafullan lækinn",
      "literal": "to carry (something) into an already full stream",
      "meaning": "to do or say something superfluous or redundant, to add to what's already plentiful (like carrying coals to Newcastle)",
      "example": "Ég veit að þetta er að bera í bakkafullan lækinn, en ég verð samt að minna ykkur á fundinn."
    },
    {
      "idiom": "að koma af fjöllum",
      "literal": "to come from the mountains",
      "meaning": "to be completely clueless or caught off guard, out of the loop",
      "example": "Þegar ég spurði hann um málið kom hann alveg af fjöllum."
    },
    {
      "idiom": "að gera úlfalda úr mýflugu",
      "literal": "to make a camel out of a gnat",
      "meaning": "to make a mountain out of a molehill, blow something small out of proportion",
      "example": "Slappaðu af, þú ert bara að gera úlfalda úr mýflugu."
    },
    {
      "idiom": "að kaupa köttinn í sekknum",
      "literal": "to buy the cat in the sack",
      "meaning": "to buy or accept something without checking it first, be sold a pig in a poke",
      "example": "Skoðaðu bílinn vel áður en þú kaupir hann, annars gætir þú keypt köttinn í sekknum."
    },
    {
      "idiom": "að hafa vaðið fyrir neðan sig",
      "literal": "to have the ford below oneself",
      "meaning": "to take precautions, play it safe (better safe than sorry)",
      "example": "Hann tók afrit af skjölunum til að hafa vaðið fyrir neðan sig."
    },
    {
      "idiom": "að leggja árar í bát",
      "literal": "to lay the oars in the boat",
      "meaning": "to give up, stop trying",
      "example": "Þrátt fyrir mótlætið ætlar hún ekki að leggja árar í bát."
    },
    {
      "idiom": "að fara úr öskunni í eldinn",
      "literal": "to go from the ashes into the fire",
      "meaning": "to go from bad to worse, out of the frying pan into the fire",
      "example": "Hann fór úr öskunni í eldinn þegar hann skipti um vinnu."
    },
    {
      "idiom": "að hafa mörg járn í eldinum",
      "literal": "to have many irons in the fire",
      "meaning": "to have many projects or things going on at once",
      "example": "Hún er alltaf með mörg járn í eldinum þessa dagana."
    },
    {
      "idiom": "að taka pokann sinn",
      "literal": "to take one's bag",
      "meaning": "to be forced out of a job, get fired or have to resign",
      "example": "Forstjórinn þurfti að taka pokann sinn eftir hneykslið."
    },
    {
      "idiom": "að slá tvær flugur í einu höggi",
      "literal": "to hit two flies in one blow",
      "meaning": "to kill two birds with one stone",
      "example": "Með því að hjóla í vinnuna slæ ég tvær flugur í einu höggi."
    },
    {
      "idiom": "að skjóta einhverjum ref fyrir rass",
      "literal": "to shoot someone a fox past the backside",
      "meaning": "to outwit or outsmart someone, get the better of them",
      "example": "Hann skaut keppinautum sínum ref fyrir rass og náði samningnum."
    },
    {
      "idiom": "að rífa kjaft",
      "literal": "to tear jaw",
      "meaning": "to talk back, sass, mouth off (especially to someone in authority)",
      "example": "Ekki rífa kjaft við mömmu þína!"
    },
    {
      "idiom": "að draga dilk á eftir sér",
      "literal": "to drag a lamb behind oneself",
      "meaning": "for an action or matter to have serious negative consequences",
      "example": "Þetta mál á eftir að draga dilk á eftir sér."
    }
  ],
  "ka": [
    {
      "idiom": "ყვავი ჩხიკვის მამიდაა",
      "literal": "the crow is the jackdaw's aunt",
      "meaning": "said of two people or things that are only very distantly, almost meaninglessly related",
      "example": "ის ჩემი ნათესავია, მაგრამ ისეთი შორეული, ყვავი ჩხიკვის მამიდააო."
    },
    {
      "idiom": "მეცამეტე გოჭი",
      "literal": "the thirteenth piglet",
      "meaning": "an uninvited person who barges into a situation nobody asked them to join, a meddler",
      "example": "ყველგან თავს იჩენს, როგორც მეცამეტე გოჭი."
    },
    {
      "idiom": "შვიდი პარასკევი აქვს დღეში",
      "literal": "he has seven Fridays in a day",
      "meaning": "describes an indecisive, fickle person who keeps changing their mind",
      "example": "მას შვიდი პარასკევი აქვს დღეში, დღეს ერთს გეტყვის, ხვალ მეორეს."
    },
    {
      "idiom": "ჩაილურის წყალი დალია",
      "literal": "it drank the water of Chailuri",
      "meaning": "something is gone for good, vanished without a trace, lost forever",
      "example": "ფული, რომელიც მას ვასესხე, ჩაილურის წყალი დალია."
    },
    {
      "idiom": "სად ყოფილა ძაღლის თავი დამარხული",
      "literal": "so that is where the dog's head was buried",
      "meaning": "that turns out to be the real cause or crux of the matter",
      "example": "აი, სად ყოფილა ძაღლის თავი დამარხული, ჩვენი მეზობელი ყოფილა დამნაშავე."
    },
    {
      "idiom": "ორ ცეცხლს შუა ჩავარდნა",
      "literal": "to fall in between two fires",
      "meaning": "to be caught in a difficult dilemma between two equally bad options",
      "example": "ორივე მეგობრის დახმარება არ შემიძლია, ორ ცეცხლს შუა ჩავარდნილი ვარ."
    },
    {
      "idiom": "არც მწვადი დაწვა, არც შამფური",
      "literal": "neither did the mtsvadi burn, nor the skewer",
      "meaning": "to handle a delicate situation so skillfully that nobody on either side gets hurt or offended",
      "example": "ისე მოაგვარა დავა, არც მწვადი დაწვა, არც შამფური."
    },
    {
      "idiom": "ცეცხლზე ზეთის დასხმა",
      "literal": "pouring oil onto the fire",
      "meaning": "to make an already tense or bad situation even worse",
      "example": "მისი სიტყვები უბრალოდ ცეცხლზე ზეთის დასხმა იყო."
    },
    {
      "idiom": "გულზე ლოდი აწვა",
      "literal": "a boulder weighs on the heart",
      "meaning": "to feel weighed down by worry or grief, to have a heavy heart",
      "example": "ეს ამბავი რომ გავიგე, გულზე ლოდი მაწვება."
    },
    {
      "idiom": "კუდი ყავარზე აქვს გადებული",
      "literal": "he has his tail laid over the roof shingle",
      "meaning": "to be vain and full of self importance, proud as a peacock",
      "example": "პატარა წარმატებას მიაღწია და უკვე კუდი ყავარზე აქვს გადებული."
    },
    {
      "idiom": "თავზარი დაეცა",
      "literal": "a shock fell upon him",
      "meaning": "to be stunned or horrified by sudden news",
      "example": "ეს ამბავი რომ გაიგო, თავზარი დაეცა."
    },
    {
      "idiom": "შენს პირს შაქარი",
      "literal": "sugar to your mouth",
      "meaning": "said in reply to good news or a hopeful wish, meaning may it come true",
      "example": "ხვალ ალბათ ამინდი გამოსწორდება, შენს პირს შაქარი."
    },
    {
      "idiom": "ბედნიერ ვარსკვლავზეა დაბადებული",
      "literal": "he is born on a lucky star",
      "meaning": "to be an especially fortunate, lucky person",
      "example": "ის ყოველთვის იგებს ლატარიაში, ალბათ ბედნიერ ვარსკვლავზეა დაბადებული."
    },
    {
      "idiom": "გრძელი ენა აქვს",
      "literal": "he has a long tongue",
      "meaning": "talks too much and cannot keep a secret, gossips",
      "example": "მას არაფერი უნდა გაანდო, გრძელი ენა აქვს."
    },
    {
      "idiom": "დაბალი ღობეა",
      "literal": "he is a low fence",
      "meaning": "a weak, defenseless person whom everyone takes advantage of or picks on",
      "example": "კლასში ყველა მასზე ხუმრობს, დაბალი ღობე გახდა."
    }
  ],
  "kk": [
    {
      "idiom": "Жұмған аузын ашпау",
      "literal": "not to open one's closed mouth",
      "meaning": "to stay completely silent, not utter a single word",
      "example": "Ол бүкіл жиналыс бойы жұмған аузын ашпады."
    },
    {
      "idiom": "Қой аузынан шөп алмас",
      "literal": "won't take grass from a sheep's mouth",
      "meaning": "an extremely meek, gentle, harmless person (would not hurt a fly)",
      "example": "Асан қой аузынан шөп алмас момын жігіт."
    },
    {
      "idiom": "Көзді ашып-жұмғанша",
      "literal": "before opening and closing the eye",
      "meaning": "in the blink of an eye, instantly",
      "example": "Балалар көзді ашып-жұмғанша үйден шығып кетті."
    },
    {
      "idiom": "Жүрегі алып ұшты",
      "literal": "his heart took flight",
      "meaning": "to be struck with sudden fright or anxiety, one's heart leaps",
      "example": "Түнде телефон шырылдағанда жүрегім алып ұшты."
    },
    {
      "idiom": "Ит арқасы қиянда",
      "literal": "the dog's back is in a distant place",
      "meaning": "very far away, a long way off",
      "example": "Ата-анам тұратын ауыл қаладан ит арқасы қиянда жатыр."
    },
    {
      "idiom": "Бетінен оты шықты",
      "literal": "fire came out of his face",
      "meaning": "to be extremely embarrassed, to blush deeply with shame",
      "example": "Қателескенін білгенде бетінен оты шықты."
    },
    {
      "idiom": "Қолы қолына жұқпады",
      "literal": "his hand didn't stick to his hand",
      "meaning": "to be extremely busy, rushed off one's feet",
      "example": "Той қарсаңында анамның қолы қолына жұқпай кетті."
    },
    {
      "idiom": "Ағаштан түйін түйген",
      "literal": "one who tied a knot out of wood",
      "meaning": "a highly skilled, resourceful craftsman who can do the seemingly impossible",
      "example": "Атам ағаштан түйін түйген шебер еді."
    },
    {
      "idiom": "Аузы дуалы",
      "literal": "his mouth is blessed",
      "meaning": "a person, usually a respected elder, whose spoken words or blessings come true",
      "example": "Аузы дуалы қария батасын берді."
    },
    {
      "idiom": "Мұрнын шүйіру",
      "literal": "to wrinkle one's nose",
      "meaning": "to turn up one's nose at something, to show disdain",
      "example": "Ол ұсынысымызға мұрнын шүйірді."
    },
    {
      "idiom": "Қырық пышақ болды",
      "literal": "became forty knives",
      "meaning": "to fall into fierce enmity, to become bitter enemies",
      "example": "Ағайынды екеуі мұра үшін қырық пышақ болды."
    },
    {
      "idiom": "Көз бояу",
      "literal": "to paint the eye",
      "meaning": "deception, eyewash, putting up a false front",
      "example": "Бұл жиналыс көз бояудан басқа ешнәрсе емес."
    },
    {
      "idiom": "Ит пен мысықтай",
      "literal": "like a dog and a cat",
      "meaning": "to constantly quarrel, to fight like cat and dog",
      "example": "Көршілер ит пен мысықтай өмір сүреді."
    }
  ],
  "ky": [
    {
      "idiom": "Кара кылды как жарган",
      "literal": "splits a black hair right down the middle",
      "meaning": "to be scrupulously fair and impartial",
      "example": "Судьябыз кара кылды как жарган адам."
    },
    {
      "idiom": "Ачып көздү жумганча",
      "literal": "by the time you open and shut your eye",
      "meaning": "in the blink of an eye, instantly",
      "example": "Ачып көздү жумганча, ал бөлмөдөн чыгып кетти."
    },
    {
      "idiom": "Суу жүрөк",
      "literal": "water heart",
      "meaning": "a coward, a faint hearted person",
      "example": "Ал арстанды көрөрү менен качып кетти, суу жүрөк экен."
    },
    {
      "idiom": "Ташка тамга баскандай",
      "literal": "as if a seal were stamped onto a stone",
      "meaning": "precisely, exactly right, spot on",
      "example": "Устат жумушту ташка тамга баскандай так аткарды."
    },
    {
      "idiom": "Колу ачык",
      "literal": "his hand is open",
      "meaning": "generous, open handed",
      "example": "Атабыз колу ачык, дайыма кедейлерге жардам берет."
    },
    {
      "idiom": "Боору таш",
      "literal": "his liver is stone",
      "meaning": "merciless, hard hearted",
      "example": "Ал өтө боору таш, жалынганга да ырайым кылбайт."
    },
    {
      "idiom": "Жүрөгү түшүү",
      "literal": "his heart falls",
      "meaning": "to become terrified, to have one's heart drop with fright",
      "example": "Капысынан жарылган добушту угуп, анын жүрөгү түштү."
    },
    {
      "idiom": "Жанындай көрүү",
      "literal": "to see someone as dear as one's own soul",
      "meaning": "to cherish someone very dearly",
      "example": "Чоң энем небересин жанындай көрөт."
    },
    {
      "idiom": "Ит өлгөн жер",
      "literal": "the place where a dog died",
      "meaning": "an extremely remote, out of the way place",
      "example": "Ал айыл ит өлгөн жерде жайгашкан."
    },
    {
      "idiom": "Кой терисин жамынган",
      "literal": "wrapped in a sheep's hide",
      "meaning": "a wolf in sheep's clothing, someone hiding hostility behind a friendly face",
      "example": "Жылмайып жүргөнү менен, ал кой терисин жамынган душман экен."
    },
    {
      "idiom": "Кой оозунан чөп албаган",
      "literal": "wouldn't take grass from a sheep's mouth",
      "meaning": "extremely meek and gentle, wouldn't hurt a fly",
      "example": "Ал өтө жоош, кой оозунан чөп албаган бала."
    },
    {
      "idiom": "Карга карганын көзүн чокубайт",
      "literal": "a crow doesn't peck out a crow's eye",
      "meaning": "people of the same kind protect each other and won't turn against their own",
      "example": "Чиновниктер бирин-бири коргойт, карга карганын көзүн чокубайт да."
    },
    {
      "idiom": "Мойнуна алуу",
      "literal": "to take onto one's own neck",
      "meaning": "to admit, confess, or take responsibility for something",
      "example": "Ал өз катасын мойнуна алды."
    },
    {
      "idiom": "Садага кетейин",
      "literal": "let me go as a sacrifice for you",
      "meaning": "a term of endearment, my dear or sweetheart, especially said to children",
      "example": "Садага кетейин, ыйлаба эми."
    }
  ],
  "lt": [
    {
      "idiom": "pilti iš tuščio į kiaurą",
      "literal": "to pour from empty into leaky",
      "meaning": "to talk or argue about the same thing over and over without getting anywhere, to go in circles",
      "example": "Nustokime pilti iš tuščio į kiaurą ir pagaliau priimkime sprendimą."
    },
    {
      "idiom": "kirsti šaką, ant kurios sėdi",
      "literal": "to cut the branch on which one sits",
      "meaning": "to act against one's own interests, to undermine oneself",
      "example": "Meluodamas viršininkui, jis kerta šaką, ant kurios sėdi."
    },
    {
      "idiom": "leisti pinigus pro pirštus",
      "literal": "to let money through the fingers",
      "meaning": "to spend money carelessly, to squander it",
      "example": "Jis uždirba daug, bet visus pinigus leidžia pro pirštus."
    },
    {
      "idiom": "kaip ant delno",
      "literal": "like on the palm",
      "meaning": "plainly visible, obvious, crystal clear",
      "example": "Nuo bokšto miestas matėsi kaip ant delno."
    },
    {
      "idiom": "kišti nosį į svetimus reikalus",
      "literal": "to stick the nose into others' affairs",
      "meaning": "to meddle in other people's business",
      "example": "Nemandagu kišti nosį į svetimus reikalus."
    },
    {
      "idiom": "laikyti liežuvį už dantų",
      "literal": "to hold the tongue behind the teeth",
      "meaning": "to keep quiet, to hold one's tongue, not to reveal a secret",
      "example": "Apie tai geriau laikyk liežuvį už dantų."
    },
    {
      "idiom": "vėjas galvoje",
      "literal": "wind in the head",
      "meaning": "to be flighty, frivolous, scatterbrained",
      "example": "Jam dar vėjas galvoje, apie ateitį visai negalvoja."
    },
    {
      "idiom": "iš piršto laužti",
      "literal": "to break something out of a finger",
      "meaning": "to make something up, to fabricate a story",
      "example": "Ta istorija visiškai iš piršto laužta, niekas taip nebuvo."
    },
    {
      "idiom": "žadėti auksinius kalnus",
      "literal": "to promise golden mountains",
      "meaning": "to make extravagant, unrealistic promises",
      "example": "Prieš rinkimus politikai visada žada auksinius kalnus."
    },
    {
      "idiom": "kaip du vandens lašai",
      "literal": "like two drops of water",
      "meaning": "to be exactly alike, identical",
      "example": "Dvynukai panašūs kaip du vandens lašai."
    },
    {
      "idiom": "žiūrėti pro pirštus",
      "literal": "to look through the fingers",
      "meaning": "to turn a blind eye, to deliberately overlook something",
      "example": "Mokytoja kartais žiūri pro pirštus į smulkius pažeidimus."
    },
    {
      "idiom": "pūsti miglą į akis",
      "literal": "to blow fog into the eyes",
      "meaning": "to deceive or mislead someone",
      "example": "Nebandyk man pūsti miglos į akis, aš žinau tiesą."
    },
    {
      "idiom": "kaip žuvis vandenyje",
      "literal": "like a fish in water",
      "meaning": "to feel completely at ease, in one's element",
      "example": "Scenoje jis jaučiasi kaip žuvis vandenyje."
    }
  ],
  "lv": [
    {
      "idiom": "likt aiz auss",
      "literal": "to put behind the ear",
      "meaning": "to take careful note of something and remember it well",
      "example": "Ieliec šo padomu labi aiz auss!"
    },
    {
      "idiom": "runāt caur puķēm",
      "literal": "to talk through flowers",
      "meaning": "to speak indirectly or evasively instead of saying something plainly",
      "example": "Nerunā caur puķēm, saki taisni, ko domā!"
    },
    {
      "idiom": "sēdēt kā uz adatām",
      "literal": "to sit as if on needles",
      "meaning": "to be very anxious, restless, or impatient (on pins and needles)",
      "example": "Pirms eksāmena rezultātiem viņa sēdēja kā uz adatām."
    },
    {
      "idiom": "mest naudu vējā",
      "literal": "to throw money to the wind",
      "meaning": "to waste or squander money",
      "example": "Pērkot lietas, kas nav vajadzīgas, tu vienkārši met naudu vējā."
    },
    {
      "idiom": "augt kā sēnes pēc lietus",
      "literal": "to grow like mushrooms after rain",
      "meaning": "to appear or multiply very quickly and in great numbers",
      "example": "Pēdējā laikā pilsētā kafejnīcas aug kā sēnes pēc lietus."
    },
    {
      "idiom": "sist dūri galdā",
      "literal": "to strike a fist on the table",
      "meaning": "to assert oneself forcefully or demand something with authority",
      "example": "Beidzot viņš sita dūri galdā un pateica, ko domā."
    },
    {
      "idiom": "būt uz nažiem",
      "literal": "to be on knives",
      "meaning": "to be in a state of open hostility or conflict with someone",
      "example": "Kopš tā strīda brāļi ir uz nažiem."
    },
    {
      "idiom": "akmens novēlās no sirds",
      "literal": "a stone rolled off the heart",
      "meaning": "to feel a huge sense of relief after a worry ends",
      "example": "Kad uzzināju, ka visi ir sveiki, man kā akmens novēlās no sirds."
    },
    {
      "idiom": "kā sniegs uz galvas",
      "literal": "like snow on the head",
      "meaning": "happening completely suddenly, out of the blue",
      "example": "Viņa ciemos atbrauca kā sniegs uz galvas, nemaz nepiezvanot."
    },
    {
      "idiom": "pa galvu pa kaklu",
      "literal": "by the head, by the neck",
      "meaning": "very hastily and carelessly, headlong",
      "example": "Viņš pa galvu pa kaklu izskrēja no mājas, aizmirsdams atslēgas."
    },
    {
      "idiom": "strādāt kā zirgs",
      "literal": "to work like a horse",
      "meaning": "to work extremely hard",
      "example": "Visu vasaru viņš strādāja kā zirgs, lai savāktu naudu studijām."
    },
    {
      "idiom": "sirds kā uz delnas",
      "literal": "heart as if on the palm",
      "meaning": "to be an open, sincere, straightforward person",
      "example": "Viņai sirds kā uz delnas, viņa nekad neko neslēpj."
    },
    {
      "idiom": "griezt zobus",
      "literal": "to grind one's teeth",
      "meaning": "to be furious at someone and secretly want revenge",
      "example": "Kaimiņš joprojām griež zobus par pagājušā gada strīdu."
    },
    {
      "idiom": "nejust zemi zem kājām",
      "literal": "to not feel the ground under one's feet",
      "meaning": "to be so happy or excited that one feels like walking on air",
      "example": "Pēc labās ziņas viņa nejuta zemi zem kājām."
    },
    {
      "idiom": "aiz deviņiem kalniem",
      "literal": "beyond nine hills",
      "meaning": "very far away",
      "example": "Mans draugs tagad dzīvo aiz deviņiem kalniem, Austrālijā."
    }
  ],
  "mk": [
    {
      "idiom": "фаќа магла",
      "literal": "to catch fog",
      "meaning": "to flee or vanish suddenly, especially to dodge a duty or trouble",
      "example": "Штом требаше да ја плати сметката, тој фати магла."
    },
    {
      "idiom": "гледа низ прсти",
      "literal": "to look through fingers",
      "meaning": "to turn a blind eye, to deliberately overlook something",
      "example": "Таткото им гледа низ прсти на децата за нивните мали лаги."
    },
    {
      "idiom": "влече за нос",
      "literal": "to pull by the nose",
      "meaning": "to lead someone on, to deceive them",
      "example": "Веќе месеци ме влече за нос со празни ветувања."
    },
    {
      "idiom": "тера мајтап",
      "literal": "to drive a joke",
      "meaning": "to joke or kid around with someone, tease them (sometimes while trying to fool them a bit)",
      "example": "Не се лути, само терам мајтап со тебе."
    },
    {
      "idiom": "фаќа сеир",
      "literal": "to catch a spectacle",
      "meaning": "to gloat, to enjoy watching someone else's misfortune",
      "example": "Кога избувна караницата, соседите излегоа само да фаќаат сеир."
    },
    {
      "idiom": "бере гајле",
      "literal": "to gather worry",
      "meaning": "to worry, to fret over something",
      "example": "Не бери гајле, работите ќе се средат."
    },
    {
      "idiom": "ја открива Америка",
      "literal": "to discover America",
      "meaning": "to announce something obvious as if it were a big discovery",
      "example": "Штотуку ми кажа дека зимата е студена, како да ја откри Америка."
    },
    {
      "idiom": "тепа време",
      "literal": "to beat time",
      "meaning": "to kill time",
      "example": "Го чекав автобусот и тепав време на телефонот."
    },
    {
      "idiom": "фаќа око",
      "literal": "to catch the eye",
      "meaning": "to be eye-catching, visually appealing",
      "example": "Овој фустан навистина фаќа око."
    },
    {
      "idiom": "игла во стог сено",
      "literal": "needle in a stack of hay",
      "meaning": "something practically impossible to find",
      "example": "Да го најдеш вистинскиот клуч во таа фиока е како да бараш игла во стог сено."
    },
    {
      "idiom": "виси на конец",
      "literal": "to hang on a thread",
      "meaning": "to be in a precarious, highly risky situation",
      "example": "По операцијата, неговиот живот висеше на конец."
    },
    {
      "idiom": "коски и кожа",
      "literal": "bones and skin",
      "meaning": "to be extremely thin, skin and bones",
      "example": "По болеста остана само коски и кожа."
    },
    {
      "idiom": "ни лук јал, ни лук мирисал",
      "literal": "neither ate garlic nor smelled garlic",
      "meaning": "to have had absolutely nothing to do with something",
      "example": "Кога го прашаа за парите, тој рече дека ни лук јал, ни лук мирисал."
    },
    {
      "idiom": "нашол кој да збори",
      "literal": "found who to talk",
      "meaning": "look who's talking, said to someone who criticizes others for a fault they share themselves",
      "example": "Ти ми велиш дека доцнам? Нашол кој да збори!"
    }
  ],
  "mn": [
    {
      "idiom": "нэг сумаар хоёр туулай буудах",
      "literal": "to shoot two hares with one arrow",
      "meaning": "to kill two birds with one stone, to achieve two goals with a single action",
      "example": "Тэр хотод ажлын хэрэгтэй очоод, замдаа найзтайгаа ч уулзаж, нэг сумаар хоёр туулай буудлаа."
    },
    {
      "idiom": "ам алдах",
      "literal": "to let the mouth slip",
      "meaning": "to blurt something out, to let a secret slip by accident",
      "example": "Нууцыг хэлэхгүй гэж амласан ч тэр амаа алдаж, бүгдийг ярьчихсан."
    },
    {
      "idiom": "нүүр улайх",
      "literal": "the face reddens",
      "meaning": "to feel ashamed or embarrassed",
      "example": "Тэр багшийн асуултад хариулж чадаагүйдээ нүүр улайв."
    },
    {
      "idiom": "хөл газар хүрэхгүй байх",
      "literal": "for the feet not to touch the ground",
      "meaning": "to be overjoyed, walking on air",
      "example": "Шалгалтандаа тэнцсэн мэдээ сонсоод тэр хөл нь газар хүрэхгүй байв."
    },
    {
      "idiom": "гар сунгах",
      "literal": "to extend a hand",
      "meaning": "to lend a hand, to help one another",
      "example": "Хүнд байдалд орсон найздаа гараа сунгаж туслав."
    },
    {
      "idiom": "гар татах",
      "literal": "to pull back the hand",
      "meaning": "to be stingy, to withhold help or support",
      "example": "Мөнгө хэрэгтэй үед ах нь гараа татчихдаг."
    },
    {
      "idiom": "сэтгэл нийлэх",
      "literal": "for the hearts to merge",
      "meaning": "to click with someone, to be compatible, to be of one mind",
      "example": "Тэд хоёр анх танилцсан цагаасаа сэтгэл нийлж, дотны найз болсон."
    },
    {
      "idiom": "нүд бүлтийх",
      "literal": "the eyes bulge",
      "meaning": "to be utterly astonished, wide eyed with shock",
      "example": "Үнийг сонсоод түүний нүд бүлтийв."
    },
    {
      "idiom": "чихэнд хүрэх",
      "literal": "to reach the ear",
      "meaning": "for news or a rumor to reach someone's attention",
      "example": "Тэдний хоорондын маргаан удалгүй бага даргын чихэнд хүрчээ."
    },
    {
      "idiom": "гартаа атгах",
      "literal": "to grip in one's own hand",
      "meaning": "to keep firm personal control or authority over something",
      "example": "Компанийн бүх шийдвэрийг тэрээр гартаа атгадаг."
    },
    {
      "idiom": "гар хоосон байх",
      "literal": "to have an empty hand",
      "meaning": "to be poor, or to come away with nothing",
      "example": "Ажлаас халагдаад тэр гар хоосон гэртээ харив."
    },
    {
      "idiom": "нүд булаах",
      "literal": "to seize the eyes",
      "meaning": "to be visually striking, to catch everyone's attention",
      "example": "Дэлгүүрийн цонхон дахь шинэ хувцас хүн бүрийн нүдийг булаав."
    }
  ],
  "ms": [
    {
      "idiom": "makan angin",
      "literal": "to eat wind",
      "meaning": "to go out for fresh air, take a relaxing walk or a short trip/vacation",
      "example": "Setiap petang Ahad, kami suka makan angin di tepi pantai."
    },
    {
      "idiom": "buah tangan",
      "literal": "fruit of the hand",
      "meaning": "a souvenir or small gift brought back from a trip",
      "example": "Jangan lupa bawa buah tangan untuk emak apabila kamu pulang dari Langkawi."
    },
    {
      "idiom": "kaki ayam",
      "literal": "chicken foot",
      "meaning": "barefoot",
      "example": "Anak-anak kampung itu berlari kaki ayam di padang selepas hujan turun."
    },
    {
      "idiom": "makan hati",
      "literal": "to eat liver",
      "meaning": "to feel deeply hurt, resentful or heartbroken because of someone's words or actions",
      "example": "Dia makan hati apabila dikritik di hadapan semua rakan sekerja."
    },
    {
      "idiom": "panjang tangan",
      "literal": "long hand",
      "meaning": "light fingered, prone to stealing",
      "example": "Kedai itu memasang kamera keselamatan kerana ada pekerja yang panjang tangan."
    },
    {
      "idiom": "buah mulut",
      "literal": "fruit of the mouth",
      "meaning": "the talk of the town, the subject everyone is gossiping about",
      "example": "Kisah perceraian pasangan artis itu menjadi buah mulut orang ramai minggu ini."
    },
    {
      "idiom": "makan garam",
      "literal": "to eat salt",
      "meaning": "to have a great deal of life experience",
      "example": "Dengarlah nasihatnya, dia sudah lama makan garam dalam perniagaan ini."
    },
    {
      "idiom": "cari makan",
      "literal": "to look for food",
      "meaning": "to earn a living",
      "example": "Ramai penduduk kampung merantau ke bandar untuk cari makan."
    },
    {
      "idiom": "tebal muka",
      "literal": "thick face",
      "meaning": "shameless, thick skinned",
      "example": "Memang tebal muka lelaki itu, sudah ditegur berkali-kali masih buat perangai sama."
    },
    {
      "idiom": "kepala angin",
      "literal": "wind head",
      "meaning": "fickle, moody, having an unpredictable temperament",
      "example": "Susah nak agak perangainya, memang kepala angin orangnya, kejap baik kejap marah."
    },
    {
      "idiom": "naik angin",
      "literal": "wind rises",
      "meaning": "to get angry",
      "example": "Ayah terus naik angin apabila melihat bilik anak-anak yang berselerak itu."
    },
    {
      "idiom": "kepala batu",
      "literal": "stone head",
      "meaning": "stubborn, hardheaded",
      "example": "Memang kepala batu anak itu, sudah dinasihati berkali-kali masih degil."
    },
    {
      "idiom": "mata duitan",
      "literal": "money eyes",
      "meaning": "materialistic, obsessed with money",
      "example": "Jangan berkahwin dengan lelaki yang mata duitan, nanti kau sendiri yang menderita."
    },
    {
      "idiom": "otak udang",
      "literal": "shrimp brain",
      "meaning": "stupid, foolish",
      "example": "Jangan kata orang otak udang hanya kerana dia buat satu kesilapan kecil."
    },
    {
      "idiom": "cuci mata",
      "literal": "to wash the eyes",
      "meaning": "to feast one's eyes on something pleasant, such as nice scenery or attractive people; to window shop",
      "example": "Kami pergi ke pusat membeli-belah hujung minggu ini sekadar untuk cuci mata."
    }
  ],
  "nl": [
    {
      "idiom": "de kat uit de boom kijken",
      "literal": "to watch the cat out of the tree",
      "meaning": "to wait and see how things develop before acting",
      "example": "Laten we de kat uit de boom kijken voordat we een beslissing nemen."
    },
    {
      "idiom": "iets in de gaten houden",
      "literal": "to hold something in the holes",
      "meaning": "to keep a close eye on something",
      "example": "De politie houdt het pand al weken in de gaten."
    },
    {
      "idiom": "de handdoek in de ring gooien",
      "literal": "to throw the towel into the ring",
      "meaning": "to give up, to admit defeat",
      "example": "Na drie mislukte pogingen gooide hij de handdoek in de ring."
    },
    {
      "idiom": "een appeltje met iemand te schillen hebben",
      "literal": "to have a little apple to peel with someone",
      "meaning": "to have a bone to pick with someone",
      "example": "Ik heb nog een appeltje met jou te schillen."
    },
    {
      "idiom": "de druppel die de emmer doet overlopen",
      "literal": "the drop that makes the bucket overflow",
      "meaning": "the last straw, the final small thing that makes a situation unbearable",
      "example": "Zijn late aankomst was de druppel die de emmer deed overlopen."
    },
    {
      "idiom": "met de deur in huis vallen",
      "literal": "to fall into the house through the door",
      "meaning": "to get straight to the point without preamble",
      "example": "Sorry dat ik meteen met de deur in huis val, maar we moeten praten."
    },
    {
      "idiom": "de kop indrukken",
      "literal": "to press the head in",
      "meaning": "to nip something in the bud",
      "example": "We moeten dit probleem meteen de kop indrukken."
    },
    {
      "idiom": "boter op zijn hoofd hebben",
      "literal": "to have butter on one's head",
      "meaning": "to be guilty of the very thing one criticizes in others",
      "example": "Hij bekritiseert anderen, maar heeft zelf boter op zijn hoofd."
    },
    {
      "idiom": "van een mug een olifant maken",
      "literal": "to make an elephant from a mosquito",
      "meaning": "to make a mountain out of a molehill",
      "example": "Doe niet zo dramatisch, je maakt van een mug een olifant."
    },
    {
      "idiom": "de knoop doorhakken",
      "literal": "to cut through the knot",
      "meaning": "to make a final decision after doubt or discussion",
      "example": "Na lang twijfelen hakte ze eindelijk de knoop door."
    },
    {
      "idiom": "iets onder de knie hebben",
      "literal": "to have something under the knee",
      "meaning": "to have mastered something",
      "example": "Na veel oefenen heeft ze het Nederlands onder de knie."
    },
    {
      "idiom": "de moed zinkt iemand in de schoenen",
      "literal": "the courage sinks into someone's shoes",
      "meaning": "to lose heart, to become discouraged or afraid",
      "example": "Toen hij de resultaten zag, zonk de moed hem in de schoenen."
    },
    {
      "idiom": "iets uit zijn duim zuigen",
      "literal": "to suck something out of one's thumb",
      "meaning": "to make something up, to invent a story",
      "example": "Die smoes heeft hij duidelijk uit zijn duim gezogen."
    },
    {
      "idiom": "de spijker op zijn kop slaan",
      "literal": "to strike the nail on its head",
      "meaning": "to be exactly right, to say precisely what is correct",
      "example": "Met die opmerking sloeg ze de spijker op zijn kop."
    },
    {
      "idiom": "door de mand vallen",
      "literal": "to fall through the basket",
      "meaning": "to be exposed as a fraud, to get caught doing something wrong",
      "example": "Hij loog over zijn diploma, maar viel al snel door de mand."
    }
  ],
  "no": [
    {
      "idiom": "ha bein i nesa",
      "literal": "to have bone in the nose",
      "meaning": "to have backbone, to be tough and determined",
      "example": "Hun har bein i nesa og gir seg aldri."
    },
    {
      "idiom": "ta beina på nakken",
      "literal": "to take the legs on the neck",
      "meaning": "to run away as fast as possible, to flee in a hurry",
      "example": "Da hunden begynte å bjeffe, tok han beina på nakken."
    },
    {
      "idiom": "være på bærtur",
      "literal": "to be on a berry trip",
      "meaning": "to be completely mistaken or talking nonsense",
      "example": "Nei, nå tror jeg du er på bærtur."
    },
    {
      "idiom": "slå to fluer i en smekk",
      "literal": "to hit two flies in one smack",
      "meaning": "to kill two birds with one stone",
      "example": "Ved å sykle til jobben slår jeg to fluer i en smekk."
    },
    {
      "idiom": "gå som katta rundt den varme grøten",
      "literal": "to walk like the cat around the hot porridge",
      "meaning": "to beat around the bush instead of getting to the point",
      "example": "Bare si det rett ut, ikke gå som katta rundt den varme grøten."
    },
    {
      "idiom": "ha is i magen",
      "literal": "to have ice in the stomach",
      "meaning": "to stay calm and composed under pressure",
      "example": "Han hadde is i magen og scoret på straffesparket."
    },
    {
      "idiom": "kaste blår i øynene på noen",
      "literal": "to throw flax tow in someone's eyes",
      "meaning": "to deceive or mislead someone, to pull the wool over their eyes",
      "example": "Politikeren prøvde å kaste blår i øynene på velgerne."
    },
    {
      "idiom": "ha en finger med i spillet",
      "literal": "to have a finger along in the game",
      "meaning": "to be secretly involved in or influencing something",
      "example": "Jeg tror han har en finger med i spillet."
    },
    {
      "idiom": "snakke rett fra leveren",
      "literal": "to speak straight from the liver",
      "meaning": "to speak frankly and bluntly, to say exactly what one thinks",
      "example": "Sjefen snakker alltid rett fra leveren."
    },
    {
      "idiom": "ta seg vann over hodet",
      "literal": "to take water over one's head",
      "meaning": "to take on more than one can handle, to bite off more than one can chew",
      "example": "Jeg tror jeg har tatt meg vann over hodet med dette prosjektet."
    },
    {
      "idiom": "gå i baklås",
      "literal": "to go into back lock",
      "meaning": "to get stuck or jam up, to freeze mentally so the mind goes blank",
      "example": "Jeg gikk helt i baklås under eksamen."
    },
    {
      "idiom": "være ute og sykle",
      "literal": "to be out cycling",
      "meaning": "to be mistaken or completely on the wrong track",
      "example": "Nå tror jeg du er ute og sykler."
    },
    {
      "idiom": "koke bort i kålen",
      "literal": "to boil away in the cabbage",
      "meaning": "for a plan or idea to fizzle out and come to nothing",
      "example": "Hele planen kokte bort i kålen."
    },
    {
      "idiom": "ha rent mel i posen",
      "literal": "to have clean flour in the bag",
      "meaning": "to have honest intentions, nothing to hide",
      "example": "Du kan stole på ham, han har rent mel i posen."
    },
    {
      "idiom": "svelge noen kameler",
      "literal": "to swallow some camels",
      "meaning": "to reluctantly accept things one dislikes for the sake of a compromise",
      "example": "I forhandlingene måtte vi svelge noen kameler."
    }
  ],
  "pl": [
    {
      "idiom": "bułka z masłem",
      "literal": "a roll with butter",
      "meaning": "something very easy, a piece of cake",
      "example": "Ten egzamin to była bułka z masłem."
    },
    {
      "idiom": "rzucać grochem o ścianę",
      "literal": "to throw peas at a wall",
      "meaning": "to talk to someone with no effect, like talking to a brick wall",
      "example": "Tłumaczenie mu czegokolwiek to jak rzucanie grochem o ścianę."
    },
    {
      "idiom": "mieć muchy w nosie",
      "literal": "to have flies in the nose",
      "meaning": "to be in a touchy, irritable mood",
      "example": "Nie wiem, co się stało, ale ona ma dziś muchy w nosie."
    },
    {
      "idiom": "nie w kij dmuchał",
      "literal": "not blown into a stick",
      "meaning": "nothing to sneeze at, quite impressive or substantial",
      "example": "Zarabia dwadzieścia tysięcy miesięcznie, to nie w kij dmuchał."
    },
    {
      "idiom": "wystawić kogoś do wiatru",
      "literal": "to put someone out into the wind",
      "meaning": "to stand someone up, to leave them hanging",
      "example": "Umówiliśmy się na kawę, ale wystawiła mnie do wiatru."
    },
    {
      "idiom": "trafić w sedno",
      "literal": "to hit the core",
      "meaning": "to hit the nail on the head",
      "example": "Twoja uwaga trafiła w sedno problemu."
    },
    {
      "idiom": "mieć węża w kieszeni",
      "literal": "to have a snake in one's pocket",
      "meaning": "to be stingy, a cheapskate",
      "example": "On nigdy nie stawia drinków, ma węża w kieszeni."
    },
    {
      "idiom": "mieć czegoś po dziurki w nosie",
      "literal": "to have something up to the little holes in the nose",
      "meaning": "to be fed up with something",
      "example": "Mam już tego wszystkiego po dziurki w nosie."
    },
    {
      "idiom": "dzielić skórę na niedźwiedziu",
      "literal": "to divide the skin on the bear",
      "meaning": "to count one's chickens before they hatch",
      "example": "Nie dziel skóry na niedźwiedziu, jeszcze nie wygraliśmy."
    },
    {
      "idiom": "co ma piernik do wiatraka",
      "literal": "what does gingerbread have to do with a windmill",
      "meaning": "what does one thing have to do with the other, a total non sequitur",
      "example": "Mówiliśmy o pracy, a on nagle zaczął o polityce, co ma piernik do wiatraka?"
    },
    {
      "idiom": "szukać dziury w całym",
      "literal": "to look for a hole in the whole",
      "meaning": "to nitpick, to find fault where there is none",
      "example": "Zawsze musisz szukać dziury w całym, nawet gdy wszystko jest w porządku."
    },
    {
      "idiom": "mydlić komuś oczy",
      "literal": "to soap someone's eyes",
      "meaning": "to pull the wool over someone's eyes, to deceive them",
      "example": "Przestań mi mydlić oczy i powiedz prawdę."
    },
    {
      "idiom": "robić z igły widły",
      "literal": "to make a pitchfork out of a needle",
      "meaning": "to make a mountain out of a molehill",
      "example": "Uspokój się, robisz z igły widły."
    },
    {
      "idiom": "obiecywać gruszki na wierzbie",
      "literal": "to promise pears on a willow",
      "meaning": "to make empty, impossible promises",
      "example": "Politycy znowu obiecują gruszki na wierzbie."
    },
    {
      "idiom": "nie mój cyrk, nie moje małpy",
      "literal": "not my circus, not my monkeys",
      "meaning": "not my problem, not my responsibility",
      "example": "Nie mój cyrk, nie moje małpy, niech oni to rozwiążą."
    }
  ],
  "ro": [
    {
      "idiom": "a freca menta",
      "literal": "to rub the mint",
      "meaning": "to loaf around, waste time being lazy",
      "example": "Nu freca menta toată ziua, ai treabă de făcut!"
    },
    {
      "idiom": "a tăia frunză la câini",
      "literal": "to cut leaf for the dogs",
      "meaning": "to have no real occupation, to idle away one's time",
      "example": "De dimineață taie frunză la câini în loc să învețe."
    },
    {
      "idiom": "a face din țânțar armăsar",
      "literal": "to make a stallion out of a mosquito",
      "meaning": "to make a mountain out of a molehill, to exaggerate",
      "example": "Nu e nimic grav, nu mai face din țânțar armăsar."
    },
    {
      "idiom": "a bate câmpii",
      "literal": "to beat the fields",
      "meaning": "to talk nonsense, to ramble off topic",
      "example": "Ai obosit? Bați câmpii de zece minute."
    },
    {
      "idiom": "a-și băga nasul unde nu-i fierbe oala",
      "literal": "to stick one's nose where one's pot isn't boiling",
      "meaning": "to meddle in matters that don't concern you",
      "example": "Nu-ți mai băga nasul unde nu-ți fierbe oala!"
    },
    {
      "idiom": "a fi cu musca pe căciulă",
      "literal": "to be with the fly on one's fur cap",
      "meaning": "to have a guilty conscience, to be the one at fault",
      "example": "S-a supărat imediat, sigur e cu musca pe căciulă."
    },
    {
      "idiom": "a pune paie pe foc",
      "literal": "to put straw on the fire",
      "meaning": "to make a bad situation worse, to add fuel to the fire",
      "example": "Nu mai pune paie pe foc, oricum sunt destul de supărați."
    },
    {
      "idiom": "a-i sări cuiva muștarul",
      "literal": "the mustard to jump on someone",
      "meaning": "to lose one's temper, to blow up",
      "example": "I-a sărit muștarul când a văzut mizeria din bucătărie."
    },
    {
      "idiom": "a da din colț în colț",
      "literal": "to hit from corner to corner",
      "meaning": "to scramble to get out of a tight spot, to barely get by",
      "example": "De când a rămas fără serviciu, dă din colț în colț."
    },
    {
      "idiom": "a se da de ceasul morții",
      "literal": "to give oneself to the hour of death",
      "meaning": "to make desperate efforts, to worry oneself sick",
      "example": "M-am dat de ceasul morții ca să ajung la timp la aeroport."
    },
    {
      "idiom": "a fi cu capul în nori",
      "literal": "to be with one's head in the clouds",
      "meaning": "to be daydreaming, absent-minded",
      "example": "Ești cu capul în nori, nu ai auzit nimic din ce am spus."
    },
    {
      "idiom": "a face pe niznaiul",
      "literal": "to act the 'I don't know'",
      "meaning": "to play dumb, to pretend not to know",
      "example": "Nu face pe niznaiul, știu că tu ai luat cheile."
    },
    {
      "idiom": "a bate apa în piuă",
      "literal": "to pound water in a mortar",
      "meaning": "to talk pointlessly, going around in circles without result",
      "example": "Degeaba mai discutăm, batem apa în piuă."
    },
    {
      "idiom": "a-și da arama pe față",
      "literal": "to show one's copper",
      "meaning": "to reveal one's true character (usually a bad one)",
      "example": "Până la urmă și-a dat arama pe față."
    },
    {
      "idiom": "a-i pica cuiva fisa",
      "literal": "the token to drop for someone",
      "meaning": "to finally understand, for the penny to drop",
      "example": "Abia acum mi-a picat fisa despre ce vorbeai."
    }
  ],
  "sk": [
    {
      "idiom": "mať maslo na hlave",
      "literal": "to have butter on the head",
      "meaning": "to have a guilty conscience, to be at fault or have something to hide",
      "example": "Prečo sa tak bráni? Asi má maslo na hlave."
    },
    {
      "idiom": "hodiť flintu do žita",
      "literal": "to throw the rifle into the rye",
      "meaning": "to give up too easily, to abandon an effort prematurely",
      "example": "Nehádž flintu do žita, ešte to môžeš dokázať."
    },
    {
      "idiom": "lámať si hlavu",
      "literal": "to break one's own head",
      "meaning": "to rack one's brains over a problem",
      "example": "Nelám si hlavu nad tým, veď to nie je až také dôležité."
    },
    {
      "idiom": "mať toho veľa na krku",
      "literal": "to have a lot of it on one's neck",
      "meaning": "to have many responsibilities or obligations to deal with",
      "example": "Momentálne mám toho veľa na krku, sotva stíham dýchať."
    },
    {
      "idiom": "vodiť niekoho za nos",
      "literal": "to lead someone by the nose",
      "meaning": "to deceive or dupe someone",
      "example": "Už mesiac ma vodí za nos, sľuby nikdy nesplní."
    },
    {
      "idiom": "držať niekomu palce",
      "literal": "to hold thumbs for someone",
      "meaning": "to keep one's fingers crossed for someone, to wish them luck",
      "example": "Budem ti držať palce na skúške."
    },
    {
      "idiom": "byť v siedmom nebi",
      "literal": "to be in the seventh heaven",
      "meaning": "to be extremely happy",
      "example": "Keď mu ponúkli tú prácu, bol v siedmom nebi."
    },
    {
      "idiom": "chytiť sa za nos",
      "literal": "to catch oneself by the nose",
      "meaning": "to realize and admit one's own fault, often instead of blaming others",
      "example": "Namiesto obviňovania druhých by sa mal každý chytiť za nos."
    },
    {
      "idiom": "chodiť okolo horúcej kaše",
      "literal": "to walk around hot porridge",
      "meaning": "to beat around the bush, to avoid getting to the point",
      "example": "Prestaň chodiť okolo horúcej kaše a povedz mi, čo sa stalo."
    },
    {
      "idiom": "ísť s kožou na trh",
      "literal": "to go to market with one's skin",
      "meaning": "to put oneself on the line, to take personal responsibility and risk exposure",
      "example": "Ak chceš presadiť svoj názor, musíš ísť s kožou na trh."
    },
    {
      "idiom": "mať niečoho plné zuby",
      "literal": "to have full teeth of something",
      "meaning": "to be fed up with something",
      "example": "Mám plné zuby jeho výhovoriek."
    },
    {
      "idiom": "mať srdce na dlani",
      "literal": "to have a heart on one's palm",
      "meaning": "to be sincere, kind, and generous",
      "example": "Tá žena má srdce na dlani, vždy nám pomôže."
    },
    {
      "idiom": "ako blesk z jasného neba",
      "literal": "like lightning from a clear sky",
      "meaning": "a bolt from the blue, something completely unexpected",
      "example": "Správa o jeho odchode prišla ako blesk z jasného neba."
    },
    {
      "idiom": "hádzať niekomu polená pod nohy",
      "literal": "to throw logs under someone's feet",
      "meaning": "to deliberately put obstacles in someone's way",
      "example": "Namiesto pomoci mi iba hádzal polená pod nohy."
    },
    {
      "idiom": "mať niečo za lubom",
      "literal": "to have something behind the bark",
      "meaning": "to be secretly planning or scheming something",
      "example": "Ten úsmev sa mi nepáči, určite má niečo za lubom."
    }
  ],
  "sl": [
    {
      "idiom": "vreči puško v koruzo",
      "literal": "to throw the rifle into the corn",
      "meaning": "to give up, to abandon an effort",
      "example": "Po tretjem neuspešnem poskusu je vrgel puško v koruzo."
    },
    {
      "idiom": "imeti maslo na glavi",
      "literal": "to have butter on one's head",
      "meaning": "to have a guilty conscience, to not be innocent",
      "example": "Očitno ima maslo na glavi, ker se izogiba vprašanjem."
    },
    {
      "idiom": "držati pesti za koga",
      "literal": "to hold fists for someone",
      "meaning": "to keep one's fingers crossed for someone, to root for someone",
      "example": "Jutri imaš izpit, zato bomo držali pesti zate."
    },
    {
      "idiom": "mačji kašelj",
      "literal": "cat's cough",
      "meaning": "a trivial matter, nothing to worry about (often used negated: no small feat)",
      "example": "Selitev v novo stanovanje ni bila mačji kašelj."
    },
    {
      "idiom": "biti na konju",
      "literal": "to be on a horse",
      "meaning": "to be doing great, to be thriving or successful",
      "example": "Odkar je odprl svoje podjetje, je res na konju."
    },
    {
      "idiom": "biti brez glave in repa",
      "literal": "to be without head and tail",
      "meaning": "to make no sense, to be incoherent",
      "example": "Njegova razlaga je bila brez glave in repa."
    },
    {
      "idiom": "metati komu polena pod noge",
      "literal": "to throw logs under someone's feet",
      "meaning": "to sabotage someone, to put obstacles in someone's way",
      "example": "Namesto da bi mi pomagal, mi je metal polena pod noge."
    },
    {
      "idiom": "pasti v vodo",
      "literal": "to fall into the water",
      "meaning": "for plans to fall through, to come to nothing",
      "example": "Zaradi dežja so vsi naši načrti za piknik padli v vodo."
    },
    {
      "idiom": "iti komu na živce",
      "literal": "to go to someone's nerves",
      "meaning": "to get on someone's nerves, to annoy someone",
      "example": "Njegovo večno pritoževanje mi gre res na živce."
    },
    {
      "idiom": "izgubiti glavo",
      "literal": "to lose one's head",
      "meaning": "to lose composure, to panic",
      "example": "Ko je izvedela za nesrečo, je za trenutek izgubila glavo."
    },
    {
      "idiom": "nositi srce na dlani",
      "literal": "to carry one's heart on one's palm",
      "meaning": "to wear one's heart on one's sleeve, to be openly emotional and honest about one's feelings",
      "example": "Vedno nosi srce na dlani in ne skriva svojih čustev."
    },
    {
      "idiom": "delati iz muhe slona",
      "literal": "to make an elephant out of a fly",
      "meaning": "to make a mountain out of a molehill, to exaggerate a minor problem",
      "example": "Nehaj delati iz muhe slona, saj ni tako hudo."
    },
    {
      "idiom": "ubiti dve muhi na en mah",
      "literal": "to kill two flies in one blow",
      "meaning": "to kill two birds with one stone",
      "example": "Z eno potjo na pošto in v trgovino sem ubila dve muhi na en mah."
    },
    {
      "idiom": "delati se Francoza",
      "literal": "to make oneself a Frenchman",
      "meaning": "to pretend not to understand or notice something, to play dumb, to feign ignorance",
      "example": "Ko sem ga vprašala, kdo je razbil vazo, se je delal Francoza."
    }
  ],
  "sq": [
    {
      "idiom": "e bën rrush e kumbulla",
      "literal": "to make it grapes and plums",
      "meaning": "to squander a fortune or money recklessly",
      "example": "Trashëgiminë e babait e bëri rrush e kumbulla brenda dy vjetësh."
    },
    {
      "idiom": "e ka si bukë e djathë",
      "literal": "to have it like bread and cheese",
      "meaning": "to find something very easy, a piece of cake",
      "example": "Ai e ka si bukë e djathë të zgjidhë çdo problem të matematikës."
    },
    {
      "idiom": "ka një dërrasë mangët",
      "literal": "to have one plank missing",
      "meaning": "to be a bit crazy, not all there",
      "example": "Mos e merr seriozisht, ai ka një dërrasë mangët."
    },
    {
      "idiom": "nuk bëhet gjaku ujë",
      "literal": "blood does not become water",
      "meaning": "blood is thicker than water, family ties cannot be broken",
      "example": "Edhe pse u zunë, gjaku nuk bëhet ujë, janë vëllezër."
    },
    {
      "idiom": "e humbi mendjen",
      "literal": "to lose the mind",
      "meaning": "to lose one's mind, go crazy or become overwhelmed with emotion",
      "example": "Kur mori lajmin e mirë, e humbi mendjen nga gëzimi."
    },
    {
      "idiom": "i fluturoi mendja",
      "literal": "the mind flew away from him",
      "meaning": "to have one's mind wander off, get distracted or daydream",
      "example": "Në mes të mësimit i fluturoi mendja diku tjetër."
    },
    {
      "idiom": "larg sysh, larg zemrës",
      "literal": "far from eyes, far from heart",
      "meaning": "out of sight, out of mind",
      "example": "Që kur u largua, s'e kujton njeri, larg sysh, larg zemrës."
    },
    {
      "idiom": "i vjen për dore",
      "literal": "it comes to the hand for him",
      "meaning": "to have a knack for something, to do it skillfully with ease",
      "example": "Asaj punët e kuzhinës i vijnë shumë për dore."
    },
    {
      "idiom": "ka kapur qiellin me dorë",
      "literal": "to have caught the sky with one's hand",
      "meaning": "to think one has achieved the impossible, to be full of oneself (said ironically)",
      "example": "Fitoi një lojë dhe tani mendon se ka kapur qiellin me dorë."
    },
    {
      "idiom": "qoftë larg",
      "literal": "may it be far",
      "meaning": "heaven forbid, touch wood (said to ward off misfortune)",
      "example": "Qoftë larg, po sikur të na ndodhë diçka e keqe rrugës?"
    },
    {
      "idiom": "i hedh hi syve",
      "literal": "to throw ash in someone's eyes",
      "meaning": "to deceive someone, pull the wool over their eyes",
      "example": "Mos u përpiq të më hedhësh hi syve, e di të vërtetën."
    },
    {
      "idiom": "doli në shesh",
      "literal": "it came out into the square",
      "meaning": "the truth came to light, it came out into the open",
      "example": "Pas shumë vitesh heshtje, e vërteta doli në shesh."
    },
    {
      "idiom": "e bën qimen tra",
      "literal": "to turn a hair into a beam",
      "meaning": "to make a mountain out of a molehill, to exaggerate",
      "example": "Mos e bëj qimen tra, s'ka ndodhur asgjë e tmerrshme."
    },
    {
      "idiom": "bie në sy",
      "literal": "to fall into the eye",
      "meaning": "to stand out, catch the eye, be noticeable",
      "example": "Talenti i tij bie në sy që në fillim."
    }
  ],
  "sr": [
    {
      "idiom": "Vući nekoga za nos",
      "literal": "to pull someone by the nose",
      "meaning": "to deceive or fool someone, lead them on",
      "example": "Prestani da me vučeš za nos i reci mi istinu."
    },
    {
      "idiom": "Pao mi je kamen sa srca",
      "literal": "a stone fell off my heart",
      "meaning": "to feel a great sense of relief",
      "example": "Kada sam čuo rezultate, pao mi je kamen sa srca."
    },
    {
      "idiom": "Praviti se Englez",
      "literal": "to make oneself an Englishman",
      "meaning": "to feign ignorance, pretend not to notice or understand something",
      "example": "Ne pravi se Englez, dobro znaš o čemu pričam."
    },
    {
      "idiom": "Ubiti dve muve jednim udarcem",
      "literal": "to kill two flies with one blow",
      "meaning": "to accomplish two things with a single action, kill two birds with one stone",
      "example": "Ako svratimo do prodavnice na putu, ubićemo dve muve jednim udarcem."
    },
    {
      "idiom": "Faliti mu daska u glavi",
      "literal": "a plank is missing in his head",
      "meaning": "to be crazy, not right in the head",
      "example": "Ponaša se tako čudno, mora da mu fali daska u glavi."
    },
    {
      "idiom": "Loviti u mutnom",
      "literal": "to fish in the murky water",
      "meaning": "to take advantage of a confused or unclear situation for personal gain",
      "example": "Dok su svi bili zbunjeni, on je lovio u mutnom."
    },
    {
      "idiom": "Sedeti na dve stolice",
      "literal": "to sit on two chairs",
      "meaning": "to try to please or support two opposing sides at once",
      "example": "Ne možeš sedeti na dve stolice, moraš izabrati stranu."
    },
    {
      "idiom": "Biti na sedmom nebu",
      "literal": "to be on the seventh heaven",
      "meaning": "to be extremely happy",
      "example": "Otkad se venčala, ona je na sedmom nebu."
    },
    {
      "idiom": "Praviti od muve slona",
      "literal": "to make an elephant from a fly",
      "meaning": "to exaggerate a minor problem, make a mountain out of a molehill",
      "example": "Smiri se, ne pravi od muve slona."
    },
    {
      "idiom": "Imati putera na glavi",
      "literal": "to have butter on one's head",
      "meaning": "to be guilty of something, have a guilty conscience",
      "example": "On najviše priča, a baš on ima putera na glavi."
    },
    {
      "idiom": "Kad na vrbi rodi grožđe",
      "literal": "when grapes grow on the willow",
      "meaning": "never, an event that will never happen",
      "example": "Vratiće on taj dug kad na vrbi rodi grožđe."
    },
    {
      "idiom": "Baš me briga",
      "literal": "it really worries me",
      "meaning": "I don't care at all, couldn't care less",
      "example": "Baš me briga šta drugi misle o meni."
    },
    {
      "idiom": "Preko glave mi je",
      "literal": "it is over my head",
      "meaning": "to be fed up with something, have had enough",
      "example": "Preko glave mi je svih ovih problema."
    },
    {
      "idiom": "Kao grom iz vedra neba",
      "literal": "like thunder from a clear sky",
      "meaning": "completely unexpected, out of the blue",
      "example": "Njegova ostavka je došla kao grom iz vedra neba."
    },
    {
      "idiom": "Nemati dlake na jeziku",
      "literal": "to have no hair on the tongue",
      "meaning": "to speak bluntly and frankly, not mince words",
      "example": "On nema dlake na jeziku, uvek kaže sve otvoreno."
    }
  ],
  "sv": [
    {
      "idiom": "Ha en skruv lös",
      "literal": "to have a screw loose",
      "meaning": "to be a bit crazy or eccentric",
      "example": "Hon har verkligen en skruv lös ibland."
    },
    {
      "idiom": "Det är ingen ko på isen",
      "literal": "there is no cow on the ice",
      "meaning": "there's no rush or danger, no need to worry",
      "example": "Ta det lugnt, det är ingen ko på isen."
    },
    {
      "idiom": "Glida in på en räkmacka",
      "literal": "to slide in on a shrimp sandwich",
      "meaning": "to get something easily, without effort, handed to you",
      "example": "Han har inte direkt glidit in på en räkmacka, han har jobbat hårt för allt."
    },
    {
      "idiom": "Slå två flugor i en smäll",
      "literal": "to hit two flies in one bang",
      "meaning": "to kill two birds with one stone",
      "example": "Om vi handlar mat på vägen hem slår vi två flugor i en smäll."
    },
    {
      "idiom": "Ana ugglor i mossen",
      "literal": "to suspect owls in the bog",
      "meaning": "to suspect that something is wrong, to smell a rat",
      "example": "Jag anar ugglor i mossen, han brukar inte vara så tyst."
    },
    {
      "idiom": "Kasta pärlor åt svin",
      "literal": "to throw pearls to swine",
      "meaning": "to waste something valuable on someone who won't appreciate it",
      "example": "Att bjuda honom på ett fint vin är som att kasta pärlor åt svin."
    },
    {
      "idiom": "Ta tjuren vid hornen",
      "literal": "to take the bull by the horns",
      "meaning": "to tackle a difficult problem directly and decisively",
      "example": "Det är dags att ta tjuren vid hornen och prata med chefen."
    },
    {
      "idiom": "Det är hugget som stucket",
      "literal": "it is chopped as stabbed",
      "meaning": "it makes no difference either way, six of one half a dozen of the other",
      "example": "Vi kan åka nu eller imorgon, det är hugget som stucket."
    },
    {
      "idiom": "Ha is i magen",
      "literal": "to have ice in the stomach",
      "meaning": "to stay calm and patient under pressure",
      "example": "Målvakten hade is i magen och räddade straffen."
    },
    {
      "idiom": "Gå som katten kring het gröt",
      "literal": "to walk like the cat around hot porridge",
      "meaning": "to beat around the bush, avoid getting to the point",
      "example": "Sluta gå som katten kring het gröt och säg vad du tycker."
    },
    {
      "idiom": "Trampa i klaveret",
      "literal": "to step on the accordion",
      "meaning": "to blunder, to say something tactless",
      "example": "Han trampade i klaveret när han frågade om hennes ålder."
    },
    {
      "idiom": "Vara ute och cykla",
      "literal": "to be out cycling",
      "meaning": "to be completely mistaken, on the wrong track",
      "example": "Om du tror att jag ljög är du helt ute och cyklar."
    },
    {
      "idiom": "Här ligger en hund begraven",
      "literal": "here lies a dog buried",
      "meaning": "there's something suspicious going on, more than meets the eye",
      "example": "Varför säger ingen sanningen? Här ligger en hund begraven."
    },
    {
      "idiom": "Ha rent mjöl i påsen",
      "literal": "to have clean flour in the bag",
      "meaning": "to have honest intentions, nothing to hide",
      "example": "Företaget hävdar att de har rent mjöl i påsen."
    },
    {
      "idiom": "Ha en räv bakom örat",
      "literal": "to have a fox behind the ear",
      "meaning": "to be sly or cunning, have a hidden agenda",
      "example": "Akta dig för honom, han har en räv bakom örat."
    }
  ],
  "sw": [
    {
      "idiom": "kupiga chenga",
      "literal": "to hit a dodge",
      "meaning": "to dodge or evade (a question, an issue, a responsibility)",
      "example": "Waziri alipiga chenga swali la mwandishi."
    },
    {
      "idiom": "kula rushwa",
      "literal": "to eat a bribe",
      "meaning": "to take bribes, to be corrupt",
      "example": "Afisa yule alifukuzwa kazi kwa kula rushwa."
    },
    {
      "idiom": "kula njama",
      "literal": "to eat a plot",
      "meaning": "to conspire, to scheme together",
      "example": "Walikuwa wanakula njama za kumwondoa mkurugenzi."
    },
    {
      "idiom": "kufa moyo",
      "literal": "to die heart",
      "meaning": "to lose heart, to become discouraged",
      "example": "Usife moyo, mtihani mwingine utakuja."
    },
    {
      "idiom": "kutia moyo",
      "literal": "to put heart",
      "meaning": "to encourage, to hearten someone",
      "example": "Mama alimtia moyo binti yake kabla ya mashindano."
    },
    {
      "idiom": "kuwa na mkono mrefu",
      "literal": "to have a long hand",
      "meaning": "to be light fingered, to be a thief",
      "example": "Mfanyakazi mmoja ofisini ana mkono mrefu, vitu vinapotea kila mara."
    },
    {
      "idiom": "kula chumvi nyingi",
      "literal": "to eat much salt",
      "meaning": "to be very experienced, to have seen much of life",
      "example": "Babu yangu amekula chumvi nyingi, ushauri wake ni wa thamani."
    },
    {
      "idiom": "kuwa na roho ngumu",
      "literal": "to have a hard soul",
      "meaning": "to be hard hearted, stingy, merciless",
      "example": "Tajiri yule ana roho ngumu, hasaidii hata jamaa zake."
    },
    {
      "idiom": "kuwa na jicho baya",
      "literal": "to have a bad eye",
      "meaning": "to be envious, covetous",
      "example": "Usimwonyeshe mafanikio yako, ana jicho baya."
    },
    {
      "idiom": "kupiga soga",
      "literal": "to hit chat",
      "meaning": "to chat casually, to shoot the breeze",
      "example": "Tulikaa dukani tukipiga soga hadi usiku."
    },
    {
      "idiom": "kukata tamaa",
      "literal": "to cut hope",
      "meaning": "to give up, to lose hope",
      "example": "Ijapokuwa alishindwa mara tatu, hakukata tamaa."
    },
    {
      "idiom": "kutupa jicho",
      "literal": "to throw an eye",
      "meaning": "to take a quick glance or look at something",
      "example": "Tafadhali tupa jicho kwenye barua hii kabla sijaituma."
    },
    {
      "idiom": "kuwa macho",
      "literal": "to be eyes",
      "meaning": "to be alert, vigilant, watchful",
      "example": "Kuwa macho usiku huu, kuna taarifa za wezi katika eneo hili."
    }
  ],
  "tl": [
    {
      "idiom": "utang na loob",
      "literal": "debt of the inside",
      "meaning": "a deep moral obligation to repay a kindness or favor received, a debt of gratitude",
      "example": "Malaki ang utang na loob ko sa kanya dahil tinulungan niya ako noong nahihirapan ako."
    },
    {
      "idiom": "balat-sibuyas",
      "literal": "onion skin",
      "meaning": "thin-skinned, easily hurt or offended by jokes or criticism",
      "example": "Huwag kang maging balat-sibuyas, biro lang ang sinabi niya."
    },
    {
      "idiom": "isang kahig, isang tuka",
      "literal": "one scratch, one peck",
      "meaning": "living hand to mouth, earning just enough to get by day to day",
      "example": "Isang kahig, isang tuka lang ang buhay namin pero masaya kami."
    },
    {
      "idiom": "kapit sa patalim",
      "literal": "clinging to the blade",
      "meaning": "resorting to a risky, desperate measure as a last resort",
      "example": "Kapit sa patalim na lang kami para mapaaral ang mga anak namin."
    },
    {
      "idiom": "nagbibilang ng poste",
      "literal": "counting the posts",
      "meaning": "jobless and idle, wandering around with nothing to do",
      "example": "Anim na buwan na siyang nagbibilang ng poste mula nang matanggal sa trabaho."
    },
    {
      "idiom": "bukas ang palad",
      "literal": "the palm is open",
      "meaning": "generous, open-handed",
      "example": "Bukas ang palad niya, lagi siyang tumutulong sa mga nangangailangan."
    },
    {
      "idiom": "makapal ang mukha",
      "literal": "the face is thick",
      "meaning": "shameless, unashamed",
      "example": "Makapal talaga ang mukha niya para humingi na naman ng pera."
    },
    {
      "idiom": "mahaba ang dila",
      "literal": "the tongue is long",
      "meaning": "a gossip, someone who talks too much or can't keep a secret",
      "example": "Ingat ka sa kanya, mahaba ang dila niya."
    },
    {
      "idiom": "malaki ang bunganga",
      "literal": "the mouth is big",
      "meaning": "boastful, all talk with little action",
      "example": "Malaki lang ang bunganga niya pero wala namang nagagawa."
    },
    {
      "idiom": "namamangka sa dalawang ilog",
      "literal": "paddling a boat in two rivers",
      "meaning": "having two romantic partners at the same time, two-timing",
      "example": "Nalaman niyang namamangka pala sa dalawang ilog ang nobyo niya."
    },
    {
      "idiom": "butas ang bulsa",
      "literal": "the pocket has a hole",
      "meaning": "spending money too quickly and unable to save, broke",
      "example": "Butas talaga ang bulsa ko, kararating ko lang galing sa bakasyon."
    },
    {
      "idiom": "nasa dulo ng dila",
      "literal": "it's at the tip of the tongue",
      "meaning": "something one is struggling to remember or say, on the tip of one's tongue",
      "example": "Alam ko ang pangalan niya, nasa dulo na ng dila ko."
    },
    {
      "idiom": "puno't dulo",
      "literal": "trunk and tip",
      "meaning": "the whole story from beginning to end, all the details",
      "example": "Sabihin mo sa akin ang buong puno't dulo ng pangyayari."
    },
    {
      "idiom": "magsunog ng kilay",
      "literal": "to burn the eyebrows",
      "meaning": "to study hard, especially late at night, to burn the midnight oil",
      "example": "Nagsusunog ng kilay si Maria araw-araw para makapasa sa pagsusulit."
    }
  ],
  "tr": [
    {
      "idiom": "Ağzından baklayı çıkarmak",
      "literal": "to take the fava bean out of one's mouth",
      "meaning": "to finally reveal a secret, to spill the beans",
      "example": "Sonunda ağzından baklayı çıkardı ve gerçeği anlattı."
    },
    {
      "idiom": "Kulak asmamak",
      "literal": "to not hang an ear",
      "meaning": "to pay no attention, to ignore advice or warnings",
      "example": "Annesinin uyarılarına hiç kulak asmadı."
    },
    {
      "idiom": "Kafayı yemek",
      "literal": "to eat one's head",
      "meaning": "to go crazy, to lose one's mind",
      "example": "Bu gürültüyle kafayı yiyeceğim."
    },
    {
      "idiom": "Çam devirmek",
      "literal": "to fell a pine tree",
      "meaning": "to make a big blunder, to say or do something embarrassingly wrong",
      "example": "Toplantıda büyük bir çam devirdi."
    },
    {
      "idiom": "Burnu büyümek",
      "literal": "one's nose to grow",
      "meaning": "to become conceited or arrogant after some success",
      "example": "Ödülü kazanınca burnu büyüdü."
    },
    {
      "idiom": "Göz boyamak",
      "literal": "to paint the eye",
      "meaning": "to deceive with appearances, to create a false impression",
      "example": "Bu proje sadece göz boyamaktan ibaret."
    },
    {
      "idiom": "Eli kulağında",
      "literal": "its hand is at its ear",
      "meaning": "something is imminent, about to happen any moment",
      "example": "Sınav sonuçları eli kulağında."
    },
    {
      "idiom": "İçi içine sığmamak",
      "literal": "one's inside doesn't fit inside oneself",
      "meaning": "to be so happy or excited that one can't contain oneself",
      "example": "Kabul mektubunu görünce içi içine sığmadı."
    },
    {
      "idiom": "Ağız birliği etmek",
      "literal": "to make a union of mouths",
      "meaning": "to agree beforehand to tell the same story, to collude",
      "example": "Öğrenciler öğretmene karşı ağız birliği ettiler."
    },
    {
      "idiom": "Bal gibi bilmek",
      "literal": "to know like honey",
      "meaning": "to know something perfectly well, despite pretending otherwise",
      "example": "Nerede olduğunu bal gibi biliyorsun."
    },
    {
      "idiom": "Suya sabuna dokunmamak",
      "literal": "to not touch water or soap",
      "meaning": "to stay neutral, to avoid taking sides or causing controversy",
      "example": "Siyasi tartışmalarda hep suya sabuna dokunmaz."
    },
    {
      "idiom": "Tuzu kuru olmak",
      "literal": "to have dry salt",
      "meaning": "to be financially secure and free of the worries others have",
      "example": "Emekli maaşı iyi olduğu için onun tuzu kuru."
    },
    {
      "idiom": "Kulağı çınlamak",
      "literal": "one's ear to ring",
      "meaning": "to have your ears burning because someone is talking about you",
      "example": "Senden bahsediyorduk, kulağın çınlasın."
    },
    {
      "idiom": "Bindiği dalı kesmek",
      "literal": "to cut the branch one is sitting on",
      "meaning": "to act against one's own interest, to destroy what supports you",
      "example": "Patronunu herkesin önünde eleştirerek bindiği dalı kesti."
    },
    {
      "idiom": "Armut piş ağzıma düş",
      "literal": "pear, cook yourself and fall into my mouth",
      "meaning": "to expect good things to come without any effort",
      "example": "Hiç çalışmadan armut piş ağzıma düş bekliyor."
    }
  ],
  "uk": [
    {
      "idiom": "бити байдики",
      "literal": "to beat baidyky (small wooden pegs)",
      "meaning": "to loaf around, be idle, do nothing productive",
      "example": "Замість того, щоб готуватися до іспиту, він цілий день бив байдики."
    },
    {
      "idiom": "замилювати очі",
      "literal": "to soap up the eyes",
      "meaning": "to deceive someone, pull the wool over their eyes",
      "example": "Політики часто замилюють очі виборцям гучними обіцянками."
    },
    {
      "idiom": "тримати язик за зубами",
      "literal": "to hold the tongue behind the teeth",
      "meaning": "to keep quiet, not reveal a secret",
      "example": "Про нашу розмову тримай язик за зубами, добре?"
    },
    {
      "idiom": "собаку з'їв",
      "literal": "(he) ate a dog (on this matter)",
      "meaning": "to be very experienced or skilled at something",
      "example": "У ремонті машин він собаку з'їв, звертайся тільки до нього."
    },
    {
      "idiom": "ловити ґав",
      "literal": "to catch crows",
      "meaning": "to be inattentive, daydream and miss something",
      "example": "Переходячи дорогу, не лови ґав, дивись по сторонах."
    },
    {
      "idiom": "як сніг на голову",
      "literal": "like snow on the head",
      "meaning": "something sudden and unexpected, out of the blue",
      "example": "Новина про звільнення впала як сніг на голову."
    },
    {
      "idiom": "робити з мухи слона",
      "literal": "to make an elephant out of a fly",
      "meaning": "to exaggerate, make a big deal out of something trivial",
      "example": "Заспокойся, не треба робити з мухи слона."
    },
    {
      "idiom": "передати куті меду",
      "literal": "to add too much honey to the kutia",
      "meaning": "to overdo something, go too far, exaggerate",
      "example": "З компліментами він явно передав куті меду."
    },
    {
      "idiom": "товкти воду в ступі",
      "literal": "to pound water in a mortar",
      "meaning": "to waste time doing pointless, repetitive work",
      "example": "На цих зборах ми вже другу годину товчемо воду в ступі."
    },
    {
      "idiom": "ні риба ні м'ясо",
      "literal": "neither fish nor meat",
      "meaning": "mediocre, indecisive, neither one thing nor the other",
      "example": "Його відповідь була ні риба ні м'ясо, ніхто нічого не зрозумів."
    },
    {
      "idiom": "грошей кури не клюють",
      "literal": "chickens don't peck at the money",
      "meaning": "to have an enormous amount of money",
      "example": "Кажуть, у нього грошей кури не клюють."
    },
    {
      "idiom": "сьома вода на киселі",
      "literal": "seventh water on kissel (jelly)",
      "meaning": "a very distant, barely related relative",
      "example": "Той чоловік мені сьома вода на киселі, я його майже не знаю."
    },
    {
      "idiom": "як Пилип з конопель",
      "literal": "like Pylyp out of the hemp",
      "meaning": "to say or do something suddenly, abruptly, and out of place",
      "example": "Він вискочив зі своїм запитанням, як Пилип з конопель."
    },
    {
      "idiom": "накивати п'ятами",
      "literal": "to wave with one's heels",
      "meaning": "to run away quickly, flee",
      "example": "Побачивши поліцію, злодій накивав п'ятами."
    },
    {
      "idiom": "ведмежа послуга",
      "literal": "a bear's favor",
      "meaning": "a favor that backfires and causes harm instead of helping",
      "example": "Твоя порада виявилась ведмежою послугою."
    }
  ],
  "uz": [
    {
      "idiom": "Boshi qotmoq",
      "literal": "his/her head gets stuck",
      "meaning": "to be unable to work something out despite thinking hard about it, to become confused or puzzled",
      "example": "Bu qiyin masalani yechayotganda boshim qotib qoldi."
    },
    {
      "idiom": "Ogʻzi qulogʻida boʻlmoq",
      "literal": "his/her mouth is at his/her ear",
      "meaning": "to be overjoyed, grinning from ear to ear",
      "example": "Sovgʻani ochib koʻrgan bolaning ogʻzi qulogʻida boʻldi."
    },
    {
      "idiom": "Koʻzi toʻrt boʻlmoq",
      "literal": "his/her eyes become four",
      "meaning": "to wait for someone or something with great eagerness and impatience",
      "example": "Mehmonlarni kuta-kuta koʻzimiz toʻrt boʻldi."
    },
    {
      "idiom": "Til topishmoq",
      "literal": "to find a tongue with one another",
      "meaning": "to reach mutual understanding and get along well with someone",
      "example": "Yangi qoʻshnimiz bilan tezda til topishib oldik."
    },
    {
      "idiom": "Qoʻli kalta",
      "literal": "his/her hand is short",
      "meaning": "to have limited means, to lack the money or resources for something",
      "example": "Hozircha yangi mashina olishga qoʻlim kalta."
    },
    {
      "idiom": "Uyni boshiga koʻtarmoq",
      "literal": "to lift the house onto its head",
      "meaning": "to make a huge commotion, to turn a place upside down with noise",
      "example": "Bolalar oʻynab, uyni boshiga koʻtarishdi."
    },
    {
      "idiom": "Yengil tortmoq",
      "literal": "to draw toward lightness",
      "meaning": "to feel relieved, as if a weight has been lifted off one's mind",
      "example": "Imtihondan oʻtganimni bilib, birdan yengil tortdim."
    },
    {
      "idiom": "Burnini koʻtarmoq",
      "literal": "to lift one's nose",
      "meaning": "to become arrogant or conceited, to put on airs",
      "example": "Amakivachcham chet elga ishga ketgach, burnini koʻtarib qoldi."
    },
    {
      "idiom": "Koʻz yummoq",
      "literal": "to close the eyes",
      "meaning": "to turn a blind eye, to knowingly overlook something",
      "example": "Ustoz oʻquvchining kechikishiga koʻz yumdi."
    },
    {
      "idiom": "Suvdan quruq chiqmoq",
      "literal": "to come out of the water dry",
      "meaning": "to get off scot-free, to escape blame or punishment unscathed",
      "example": "Tergovda ayblanuvchi yana suvdan quruq chiqdi."
    },
    {
      "idiom": "Bir yostiqqa bosh qoʻymoq",
      "literal": "to put heads on one pillow",
      "meaning": "to get married, to become husband and wife",
      "example": "Ular besh yillik muhabbatdan soʻng bir yostiqqa bosh qoʻyishdi."
    },
    {
      "idiom": "Jonini olmoq",
      "literal": "to take someone's soul",
      "meaning": "to wear someone down severely, to torment them relentlessly",
      "example": "Bu mudom takrorlanadigan savollaring jonimni oldi."
    },
    {
      "idiom": "Tomdan tarasha tushganday",
      "literal": "as if a wood chip fell from the roof",
      "meaning": "completely out of the blue, unexpectedly",
      "example": "U tomdan tarasha tushganday, birdan koʻchib ketishini aytdi."
    },
    {
      "idiom": "Koʻngli toʻq",
      "literal": "his/her heart is full",
      "meaning": "to feel reassured and at ease, free of worry",
      "example": "Farzandlari yonida ekanidan onaning koʻngli toʻq edi."
    }
  ],
  "vi": [
    {
      "idiom": "Nước đổ lá khoai",
      "literal": "water poured onto a taro leaf",
      "meaning": "advice or effort that has no effect at all, like water off a duck's back",
      "example": "Tôi khuyên mãi mà nó vẫn không nghe, đúng là nước đổ lá khoai."
    },
    {
      "idiom": "Được voi đòi tiên",
      "literal": "getting the elephant, demanding the fairy",
      "meaning": "never satisfied with what one already has, always wanting more (give an inch, take a mile)",
      "example": "Cho nó ở nhờ một tuần giờ nó còn đòi ở luôn, đúng là được voi đòi tiên."
    },
    {
      "idiom": "Chó cắn áo rách",
      "literal": "a dog bites the torn shirt",
      "meaning": "bad luck keeps piling on someone who is already poor or unfortunate",
      "example": "Nhà đã nghèo lại còn bị mất trộm, đúng là chó cắn áo rách."
    },
    {
      "idiom": "Một công đôi việc",
      "literal": "one effort, two tasks",
      "meaning": "to accomplish two things with a single action, kill two birds with one stone",
      "example": "Tiện thể đi làm về ghé chợ luôn, một công đôi việc."
    },
    {
      "idiom": "Nước đến chân mới nhảy",
      "literal": "the water reaches the feet before one jumps",
      "meaning": "to leave things until the very last minute instead of preparing ahead",
      "example": "Lúc nào nó cũng nước đến chân mới nhảy, chẳng chịu chuẩn bị trước."
    },
    {
      "idiom": "Đi guốc trong bụng",
      "literal": "to walk around in clogs inside someone's belly",
      "meaning": "to know exactly what someone is thinking, to read someone like a book",
      "example": "Bạn thân lâu năm nên tôi đi guốc trong bụng nó."
    },
    {
      "idiom": "Ăn cháo đá bát",
      "literal": "to eat the porridge, then kick the bowl",
      "meaning": "to be ungrateful toward someone who helped you, to bite the hand that feeds you",
      "example": "Nó được giúp đỡ bao nhiêu mà giờ quay lưng, đúng là ăn cháo đá bát."
    },
    {
      "idiom": "Cá lớn nuốt cá bé",
      "literal": "big fish swallow small fish",
      "meaning": "the strong prey on the weak, only the fittest survive",
      "example": "Trong kinh doanh, cá lớn nuốt cá bé là chuyện bình thường."
    },
    {
      "idiom": "Gần mực thì đen, gần đèn thì sáng",
      "literal": "near ink you turn black, near a lamp you turn bright",
      "meaning": "a person's character is shaped by the company they keep",
      "example": "Cha mẹ hay nhắc con chọn bạn mà chơi vì gần mực thì đen, gần đèn thì sáng."
    },
    {
      "idiom": "Thùng rỗng kêu to",
      "literal": "an empty barrel makes the loudest noise",
      "meaning": "people with the least knowledge or substance often talk the loudest",
      "example": "Nó có biết gì đâu mà lúc nào cũng nói to, đúng là thùng rỗng kêu to."
    },
    {
      "idiom": "Mất bò mới lo làm chuồng",
      "literal": "only after losing the ox does one worry about building the pen",
      "meaning": "to fix a problem only after the damage is already done, shutting the barn door after the horse has bolted",
      "example": "Đến khi bị trộm mất xe rồi mới chịu mua khóa, đúng là mất bò mới lo làm chuồng."
    },
    {
      "idiom": "Con sâu làm rầu nồi canh",
      "literal": "one worm spoils the whole pot of soup",
      "meaning": "one bad person or detail ruins the reputation of the whole group",
      "example": "Chỉ vì một nhân viên làm ẩu mà cả phòng bị đánh giá kém, đúng là con sâu làm rầu nồi canh."
    },
    {
      "idiom": "Đâm bị thóc, chọc bị gạo",
      "literal": "stab the paddy sack, poke the rice sack",
      "meaning": "to deliberately stir up trouble and sow discord between people",
      "example": "Đừng nghe lời nó, chuyên đâm bị thóc chọc bị gạo để hai người cãi nhau."
    },
    {
      "idiom": "Ếch ngồi đáy giếng",
      "literal": "a frog sitting at the bottom of a well",
      "meaning": "someone with a narrow, sheltered view of the world who thinks they know everything",
      "example": "Chưa ra khỏi làng mà đã tưởng mình giỏi nhất thiên hạ, đúng là ếch ngồi đáy giếng."
    },
    {
      "idiom": "Treo đầu dê, bán thịt chó",
      "literal": "hang up a goat's head, sell dog meat",
      "meaning": "false advertising, presenting something as one thing while actually selling something inferior",
      "example": "Quảng cáo thì hoành tráng mà hàng nhận được lại kém chất lượng, đúng là treo đầu dê bán thịt chó."
    }
  ],
  "zu": [
    {
      "idiom": "Ukucela empunzini",
      "literal": "to beg from the duiker",
      "meaning": "to run for one's life, to flee in a hurry",
      "example": "Wacela empunzini emva kokubona ibhubesi."
    },
    {
      "idiom": "Wathint' abafazi, wathint' imbokodo",
      "literal": "you have struck the women, you have struck a grindstone",
      "meaning": "do not underestimate or mistreat women, they are as tough as rock",
      "example": "Abesifazane bathi, \"Wathint' abafazi, wathint' imbokodo!\" uma bekhankasela amalungelo abo."
    },
    {
      "idiom": "Ukudla imbuya ngothi",
      "literal": "to eat wild greens with a stick",
      "meaning": "to be very poor",
      "example": "Umdlali webhola odumile useqala ukudla imbuya ngothi ngemuva kokushiya iqembu lakhe elikhulu."
    },
    {
      "idiom": "Ukuzalelwa esithebeni",
      "literal": "to be born on the serving tray",
      "meaning": "to be born into wealth and never want for anything",
      "example": "Wazalelwa esithebeni, akakaze aswele lutho empilweni yakhe."
    },
    {
      "idiom": "Ukufihla induku emqubeni",
      "literal": "to hide a stick in the manure heap",
      "meaning": "to conceal a plan or surprise until the right moment",
      "example": "UZinhle ubefihle induku emqubeni, wafika nesipho esimangazayo."
    },
    {
      "idiom": "Ukubamba iqhude",
      "literal": "to catch the rooster",
      "meaning": "to wake up very early in the morning",
      "example": "Kufanele sibambe iqhude uma sifuna ukufika ngesikhathi emsebenzini."
    },
    {
      "idiom": "Ukudla umunyu",
      "literal": "to eat grief",
      "meaning": "to suffer, to go through great hardship",
      "example": "Selokhu waxoshwa emsebenzini, usedla umunyu."
    },
    {
      "idiom": "Ukuthunga intebe",
      "literal": "to sew an arum lily",
      "meaning": "to attempt something that is bound to fail",
      "example": "Ukuzama ukumshintsha kunjengokuthunga intebe."
    },
    {
      "idiom": "Uthinte ubhece esafinya",
      "literal": "you touched the wild melon while it was still unripe",
      "meaning": "to be extremely poor, destitute",
      "example": "Kusukela washona uyise, usuthinte ubhece esafinya."
    },
    {
      "idiom": "Ukushiya induku ebandla",
      "literal": "to leave one's stick behind in the assembly",
      "meaning": "to leave behind a good legacy or example",
      "example": "Ugogo washiya induku ebandla ngokukhulisa izingane eziningi ezaphumelela empilweni."
    },
    {
      "idiom": "Ukuthezela entanjeni",
      "literal": "to gather firewood tied on a rope",
      "meaning": "to do only as much as your strength or means allow",
      "example": "Wena thezela entanjeni, ungazenzeli izinto ezingaphezu kwamandla akho."
    },
    {
      "idiom": "Ukushaya ngemfe iphindiwe",
      "literal": "to strike with a doubled sugarcane stalk",
      "meaning": "to punish or deal with someone very harshly",
      "example": "Uthisha wamshaya ngemfe iphindiwe ngenxa yokungalaleli kwakhe."
    },
    {
      "idiom": "Ukukhamela ikhambi ekhanda",
      "literal": "to squeeze medicine onto someone's head",
      "meaning": "to teach someone a lesson they will never forget",
      "example": "Umqeqeshi wabakhamela ikhambi ekhanda ngemva kokulahlekelwa umdlalo ngamahloni."
    },
    {
      "idiom": "Ukukhihla esikaNandi",
      "literal": "to wail as at Nandi's mourning",
      "meaning": "to cry uncontrollably, in dramatic and hysterical fashion",
      "example": "Uma efika emngcwabeni, wakhihla esikaNandi phambi kwabo bonke abantu."
    }
  ],
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
