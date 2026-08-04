// Common idioms per language, ranked most-common-first, with literal gloss, meaning,
// closest English idiom, translated example, usage note, and theme tags.
// Source: workflow generation + independent verification pass (expanded 2026-08). Real data only.

export interface Idiom {
  idiom: string;
  literal: string;
  meaning: string;
  equivalent?: string;
  example: string;
  exampleEn?: string;
  note?: string;
  tags: string[];
}

export interface IdiomLangMeta {
  idiomTerm: string;
  proverbTerm: string;
  termNote: string;
}

export const idioms: Record<string, Idiom[]> = {
  "af": [
    {
      "idiom": "in die steek laat",
      "literal": "to leave in the stitch",
      "meaning": "to abandon someone who is counting on you",
      "equivalent": "leave someone in the lurch",
      "example": "'n Ware vriend sal jou nooit in die steek laat nie.",
      "exampleEn": "A true friend will never let you down.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "die spyker op die kop slaan",
      "literal": "to hit the nail on the head",
      "meaning": "to say exactly the right thing about something",
      "equivalent": "hit the nail on the head",
      "example": "Met daardie opmerking het jy regtig die spyker op die kop geslaan.",
      "exampleEn": "With that remark you really hit the nail on the head.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "die aap uit die mou laat",
      "literal": "to let the monkey out of the sleeve",
      "meaning": "to reveal a secret or a hidden plan",
      "equivalent": "let the cat out of the bag",
      "example": "Na maande van stilte het hy die aap uit die mou gelaat.",
      "exampleEn": "After months of silence he let the secret out.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "die hoenders in wees",
      "literal": "to be in among the chickens",
      "meaning": "to be very angry or annoyed",
      "equivalent": "be hopping mad",
      "example": "Pa was die hoenders in toe hy die stukkende ruit sien.",
      "exampleEn": "Dad was furious when he saw the broken window.",
      "note": "Informal spoken Afrikaans, but not rude.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "die koeël is deur die kerk",
      "literal": "the bullet is through the church",
      "meaning": "the decision is final and there is no turning back",
      "equivalent": "the die is cast",
      "example": "Ons het lank gedebatteer, maar die koeël is nou deur die kerk.",
      "exampleEn": "We debated for a long time, but the decision has now been made.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "die pot mis sit",
      "literal": "to set the pot down in the wrong place",
      "meaning": "to be completely mistaken about something",
      "equivalent": "be wide of the mark",
      "example": "Jy sit die pot heeltemal mis as jy dink ek is kwaad vir jou.",
      "exampleEn": "You are completely wrong if you think I am angry with you.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "iemand om die bos lei",
      "literal": "to lead someone around the forest",
      "meaning": "to deceive or mislead someone",
      "equivalent": "lead someone up the garden path",
      "example": "Moenie dink jy kan my om die bos lei nie, want ek ken die waarheid.",
      "exampleEn": "Do not think you can fool me, because I know the truth.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "in jou noppies wees",
      "literal": "to be in your little tufts",
      "meaning": "to be delighted about something",
      "equivalent": "be over the moon",
      "example": "Sy was in haar noppies oor die nuus van haar bevordering.",
      "exampleEn": "She was over the moon about the news of her promotion.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "die bul by die horings pak",
      "literal": "to grab the bull by the horns",
      "meaning": "to face a difficult problem directly instead of avoiding it",
      "equivalent": "take the bull by the horns",
      "example": "Dit help nie om te wag nie, ons moet die bul by die horings pak.",
      "exampleEn": "Waiting does not help, we have to take the bull by the horns.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "die poppe gaan dans",
      "literal": "the dolls are going to dance",
      "meaning": "trouble or a big row is about to start",
      "equivalent": "the fur is going to fly",
      "example": "As Ma uitvind wie die koek geëet het, dan gaan die poppe dans.",
      "exampleEn": "If Mom finds out who ate the cake, the fur is going to fly.",
      "note": "Often said half jokingly, as a warning that a row is coming.",
      "tags": [
        "trouble"
      ]
    },
    {
      "idiom": "'n appeltjie met iemand te skil hê",
      "literal": "to have a little apple to peel with someone",
      "meaning": "to have a complaint you still want to raise with someone",
      "equivalent": "have a bone to pick with someone",
      "example": "Ek het nog 'n appeltjie met jou te skil oor wat gister gebeur het.",
      "exampleEn": "I still have a bone to pick with you about what happened yesterday.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "die kat uit die boom kyk",
      "literal": "to look the cat out of the tree",
      "meaning": "to hold back and watch how things develop before acting",
      "equivalent": "see which way the wind blows",
      "example": "Hy het eers die kat uit die boom gekyk voordat hy sy geld belê het.",
      "exampleEn": "He waited to see how things would go before he invested his money.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "die tou opgooi",
      "literal": "to throw the rope up",
      "meaning": "to give up on something you have been struggling with",
      "equivalent": "throw in the towel",
      "example": "Na drie mislukte pogings wou hy die tou opgooi.",
      "exampleEn": "After three failed attempts he wanted to throw in the towel.",
      "tags": [
        "work"
      ]
    },
    {
      "idiom": "met 'n mond vol tande staan",
      "literal": "to stand with a mouth full of teeth",
      "meaning": "to be unable to say anything, usually from surprise or embarrassment",
      "equivalent": "be tongue-tied",
      "example": "Toe hulle my die vraag vra, het ek met 'n mond vol tande gestaan.",
      "exampleEn": "When they asked me the question, I did not know what to say.",
      "tags": [
        "talk",
        "emotions"
      ]
    },
    {
      "idiom": "boontjie kry sy loontjie",
      "literal": "the little bean gets its little wage",
      "meaning": "someone eventually gets the punishment they deserve",
      "equivalent": "what goes around comes around",
      "example": "Moenie bekommerd wees nie, boontjie sal sy loontjie kry.",
      "exampleEn": "Do not worry, he will get what is coming to him.",
      "note": "Often said with a touch of satisfaction when someone unpleasant is finally caught out.",
      "tags": [
        "trouble",
        "luck"
      ]
    },
    {
      "idiom": "iemand 'n rat voor die oë draai",
      "literal": "to spin a wheel in front of someone's eyes",
      "meaning": "to trick someone by making a false picture look true",
      "equivalent": "pull the wool over someone's eyes",
      "example": "Die verkoopsman het ons met daardie kontrak 'n rat voor die oë gedraai.",
      "exampleEn": "The salesman pulled the wool over our eyes with that contract.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "van A tot Z",
      "literal": "from A to Z",
      "meaning": "from beginning to end, in complete detail",
      "equivalent": "from A to Z",
      "example": "Sy het die hele storie van A tot Z verduidelik.",
      "exampleEn": "She explained the whole story from beginning to end.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "geld soos bossies hê",
      "literal": "to have money like little bushes",
      "meaning": "to be very rich",
      "equivalent": "be rolling in money",
      "example": "Hulle bure het geld soos bossies, maar hulle spog nooit nie.",
      "exampleEn": "Their neighbours are rolling in money, but they never show off.",
      "note": "Informal and slightly jokey, more at home in conversation than in writing.",
      "tags": [
        "money"
      ]
    },
    {
      "idiom": "die beste beentjie voorsit",
      "literal": "to put your best little leg forward",
      "meaning": "to make the best possible impression",
      "equivalent": "put your best foot forward",
      "example": "By die onderhoud het sy regtig haar beste beentjie voorgesit.",
      "exampleEn": "At the interview she really put her best foot forward.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "met die deur in die huis val",
      "literal": "to fall through the door into the house",
      "meaning": "to say the thing straight out with no lead-in",
      "equivalent": "cut to the chase",
      "example": "Hy val graag met die deur in die huis, sonder enige inleiding.",
      "exampleEn": "He likes to come straight out with it, without any introduction.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "op iemand afklim",
      "literal": "to climb down on someone",
      "meaning": "to scold someone sharply",
      "equivalent": "come down on someone like a ton of bricks",
      "example": "Die onderwyser het op die kinders afgeklim omdat hulle laat was.",
      "exampleEn": "The teacher came down hard on the children because they were late.",
      "note": "Informal and quite blunt, so it fits a real telling off, not a gentle correction.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "kop in een mus wees",
      "literal": "to be head in one cap",
      "meaning": "to be so close to someone that you always take the same side",
      "equivalent": "be thick as thieves",
      "example": "Daardie twee is kop in een mus, hulle stem altyd oor alles saam.",
      "exampleEn": "Those two are thick as thieves, they always agree about everything.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "die oortjies van die seekoei",
      "literal": "the little ears of the hippo",
      "meaning": "the first small sign of a much bigger problem",
      "equivalent": "the tip of the iceberg",
      "example": "Die skade wat ons tot nou toe gesien het, is net die oortjies van die seekoei.",
      "exampleEn": "The damage we have seen so far is only the tip of the iceberg.",
      "note": "The picture is a hippo with only its ears above the water, and it almost always introduces bad news.",
      "tags": [
        "trouble"
      ]
    },
    {
      "idiom": "'n uiltjie knip",
      "literal": "to clip a little owl",
      "meaning": "to take a short nap",
      "equivalent": "catch forty winks",
      "example": "Na ete gaan ek gou 'n uiltjie knip voor ons verder ry.",
      "exampleEn": "After the meal I am going to take a quick nap before we drive on.",
      "note": "Gentle and slightly old-fashioned in tone, most often about an afternoon nap.",
      "tags": [
        "everyday",
        "time"
      ]
    },
    {
      "idiom": "'n bok skiet",
      "literal": "to shoot a buck",
      "meaning": "to make an obvious blunder",
      "example": "Ek het 'n groot bok geskiet deur die verkeerde datum op die uitnodiging te skryf.",
      "exampleEn": "I made a real blunder by writing the wrong date on the invitation.",
      "note": "Informal spoken Afrikaans, used about an embarrassing slip rather than a serious failure.",
      "tags": [
        "trouble",
        "work"
      ]
    }
  ],
  "az": [
    {
      "idiom": "Əl çəkmək",
      "literal": "to pull one's hand away",
      "meaning": "to leave someone alone and stop pestering them, or to give something up",
      "equivalent": "lay off someone",
      "example": "Zəhmət olmasa, məndən əl çək.",
      "exampleEn": "Please leave me alone.",
      "tags": [
        "everyday",
        "trouble"
      ]
    },
    {
      "idiom": "Əlindən gəlmək",
      "literal": "to come from one's hand",
      "meaning": "to be capable of doing something, to be good at it",
      "equivalent": "turn one's hand to something",
      "example": "Onun əlindən hər iş gəlir, buna görə hamı ondan kömək istəyir.",
      "exampleEn": "He can turn his hand to anything, so everyone asks him for help.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "Əldən düşmək",
      "literal": "to fall from the hand",
      "meaning": "to become completely exhausted",
      "equivalent": "be dead on one's feet",
      "example": "Bütün günü işləyəndən sonra tamam əldən düşmüşdü.",
      "exampleEn": "After working all day he was dead on his feet.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "Canını sıxmaq",
      "literal": "to squeeze someone's soul",
      "meaning": "to bore or annoy someone",
      "equivalent": "get on someone's nerves",
      "example": "Uzun gözləmə canımı sıxdı.",
      "exampleEn": "The long wait got on my nerves.",
      "note": "The related form canı sıxılmaq means to be bored or feeling low yourself.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "Baş çəkmək",
      "literal": "to pull a head",
      "meaning": "to call on someone briefly to see how they are",
      "equivalent": "look in on someone",
      "example": "Həftə sonu nənəmə baş çəkdim.",
      "exampleEn": "I looked in on my grandmother over the weekend.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "Ürəyi yanmaq",
      "literal": "for one's heart to burn",
      "meaning": "to feel deep pity or compassion for someone",
      "equivalent": "one's heart goes out to someone",
      "example": "Ac uşaqları görəndə ürəyim yandı.",
      "exampleEn": "When I saw the hungry children, my heart went out to them.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Ürəyini boşaltmaq",
      "literal": "to empty one's heart",
      "meaning": "to unburden oneself by telling someone one's troubles",
      "equivalent": "get something off one's chest",
      "example": "Bacısına dərdini danışıb ürəyini boşaltdı.",
      "exampleEn": "She told her sister her troubles and got it all off her chest.",
      "tags": [
        "emotions",
        "talk"
      ]
    },
    {
      "idiom": "Cana doymaq",
      "literal": "to be sated to the soul",
      "meaning": "to reach the limit of one's patience with something",
      "equivalent": "have had it up to here",
      "example": "Bu səs-küydən cana doymuşam.",
      "exampleEn": "I have had it up to here with this noise.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "Ürəyi düşmək",
      "literal": "for one's heart to fall",
      "meaning": "to be suddenly frightened or startled",
      "equivalent": "jump out of one's skin",
      "example": "Qəfil səs eşidəndə ürəyi düşdü.",
      "exampleEn": "When she heard the sudden noise, she jumped out of her skin.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Göz yummaq",
      "literal": "to close one's eyes",
      "meaning": "to ignore a fault or a wrongdoing on purpose",
      "equivalent": "turn a blind eye",
      "example": "Müdir onun gecikməsinə göz yumdu.",
      "exampleEn": "The manager turned a blind eye to his lateness.",
      "note": "With həyata added, həyata göz yummaq is a gentle way of saying that someone has died.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "Başını qatmaq",
      "literal": "to mix someone's head",
      "meaning": "to distract someone by keeping them occupied with something else",
      "example": "Uşağın başını qatmaq üçün ona rəngli karandaşlar verdi.",
      "exampleEn": "She gave the child colored pencils to keep him busy.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "Ağzından qaçırmaq",
      "literal": "to let something escape from one's mouth",
      "meaning": "to blurt out a secret by accident",
      "equivalent": "let something slip",
      "example": "Sirri istəmədən ağzımdan qaçırdım.",
      "exampleEn": "I let the secret slip without meaning to.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "Qanını qaraltmaq",
      "literal": "to blacken someone's blood",
      "meaning": "to spoil someone's mood, to upset or exasperate them",
      "example": "Oğlunun tənbəlliyi anasının qanını qaraldıb.",
      "exampleEn": "Her son's laziness has worn her down.",
      "note": "The form qanı qaralmaq describes feeling gloomy yourself, without anyone to blame.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "Cin atına minmək",
      "literal": "to mount the demon's horse",
      "meaning": "to suddenly become furious",
      "equivalent": "fly off the handle",
      "example": "Xəbəri eşidən kimi cin atına mindi.",
      "exampleEn": "The moment he heard the news, he flew off the handle.",
      "note": "Colorful and colloquial, natural in speech but not in formal writing.",
      "tags": [
        "emotions",
        "character"
      ]
    },
    {
      "idiom": "Baş sındırmaq",
      "literal": "to break one's head",
      "meaning": "to think very hard about a difficult problem",
      "equivalent": "rack one's brains",
      "example": "Bu məsələnin üstündə iki saat baş sındırdım.",
      "exampleEn": "I racked my brains over this problem for two hours.",
      "tags": [
        "work"
      ]
    },
    {
      "idiom": "Bir göz qırpımında",
      "literal": "in one blink of an eye",
      "meaning": "extremely quickly, in an instant",
      "equivalent": "in the blink of an eye",
      "example": "Tort bir göz qırpımında yox oldu.",
      "exampleEn": "The cake vanished in the blink of an eye.",
      "tags": [
        "time"
      ]
    },
    {
      "idiom": "Əl tutmaq",
      "literal": "to hold a hand",
      "meaning": "to help someone out, often with money",
      "equivalent": "lend a hand",
      "example": "Çətin günündə qonşular ona əl tutdular.",
      "exampleEn": "The neighbors lent him a hand when times were hard.",
      "note": "In its literal sense the same phrase simply means to shake hands.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "Göz önünə gətirmək",
      "literal": "to bring something before the eye",
      "meaning": "to picture something vividly, to imagine or recall it",
      "equivalent": "call something to mind",
      "example": "Onun uşaqlıq illərini göz önünə gətirdi.",
      "exampleEn": "She called his childhood years to mind.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "Qulaqardına vurmaq",
      "literal": "to strike behind the ear",
      "meaning": "to ignore what someone says on purpose",
      "equivalent": "turn a deaf ear",
      "example": "Nə qədər desəm də, xəbərdarlığımı qulaqardına vurdu.",
      "exampleEn": "However much I said, he turned a deaf ear to my warning.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "Dəridən-qabıqdan çıxmaq",
      "literal": "to come out of one's skin and rind",
      "meaning": "to make every possible effort at something",
      "equivalent": "bend over backwards",
      "example": "Qonaqları razı salmaq üçün dəridən-qabıqdan çıxdı.",
      "exampleEn": "She bent over backwards to please the guests.",
      "tags": [
        "work"
      ]
    },
    {
      "idiom": "Könlünü almaq",
      "literal": "to take someone's heart",
      "meaning": "to soothe someone you have upset and win them round again",
      "equivalent": "make it up to someone",
      "example": "Küsmüşdü, çiçək alıb könlünü aldım.",
      "exampleEn": "She was sulking, so I bought flowers and made it up to her.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "Burnunu yuxarı tutmaq",
      "literal": "to hold one's nose upward",
      "meaning": "to be arrogant, to act superior to everyone else",
      "equivalent": "put on airs",
      "example": "Vəzifə alandan sonra burnunu yuxarı tutmağa başladı.",
      "exampleEn": "After he got the post, he started putting on airs.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "Canını dişinə tutmaq",
      "literal": "to hold one's soul between one's teeth",
      "meaning": "to push through something unpleasant by sheer will",
      "equivalent": "grit one's teeth",
      "example": "İşdən zəhləsi getsə də, canını dişinə tutub axıra qədər çalışdı.",
      "exampleEn": "Although he hated the job, he gritted his teeth and worked to the end.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "Gözü su içməmək",
      "literal": "for one's eye not to drink water",
      "meaning": "to doubt something, to have no faith that it will work out",
      "example": "Onun bu işi vaxtında bitirəcəyinə gözüm su içmir.",
      "exampleEn": "I have no faith that he will finish this job on time.",
      "note": "Almost always used in the negative, with a possessive ending that names the doubter: gözüm su içmir, gözü su içmir.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "Dabanına tüpürmək",
      "literal": "to spit on one's heel",
      "meaning": "to run off as fast as one can",
      "equivalent": "take to one's heels",
      "example": "İti görən kimi dabanına tüpürüb qaçdı.",
      "exampleEn": "The moment he saw the dog, he took to his heels.",
      "note": "Colloquial and usually jokey, fine among friends but out of place in writing.",
      "tags": [
        "trouble",
        "everyday"
      ]
    }
  ],
  "be": [
    {
      "idiom": "як снег на галаву",
      "literal": "like snow onto the head",
      "meaning": "completely unexpectedly, with no warning at all",
      "equivalent": "out of the blue",
      "example": "Госці прыехалі як снег на галаву, і мы не паспелі нічога прыгатаваць.",
      "exampleEn": "The guests turned up out of the blue, and we had no time to cook anything.",
      "tags": [
        "everyday",
        "trouble"
      ]
    },
    {
      "idiom": "ні з таго ні з сяго",
      "literal": "neither from that, nor from this",
      "meaning": "suddenly and for no apparent reason",
      "equivalent": "without rhyme or reason",
      "example": "Ні з таго ні з сяго ён устаў і выйшаў з пакоя.",
      "exampleEn": "Without rhyme or reason he got up and walked out of the room.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "кот наплакаў",
      "literal": "a cat cried",
      "meaning": "an extremely small amount of something",
      "example": "Грошай засталося кот наплакаў.",
      "exampleEn": "There is hardly any money left.",
      "note": "Often with як in front: як кот наплакаў. The tone is light and slightly joking.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "трымаць язык за зубамі",
      "literal": "to hold the tongue behind the teeth",
      "meaning": "to stay silent and not give something away",
      "equivalent": "hold one's tongue",
      "example": "Я табе раскажу, але трымай язык за зубамі.",
      "exampleEn": "I will tell you, but keep it to yourself.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "ліць як з вядра",
      "literal": "to pour like from a bucket",
      "meaning": "to rain very heavily",
      "equivalent": "rain cats and dogs",
      "example": "Сёння на вуліцу лепш не выходзіць, лье як з вядра.",
      "exampleEn": "Better not go outside today, it is raining cats and dogs.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "як дзве кроплі вады",
      "literal": "like two drops of water",
      "meaning": "looking exactly alike",
      "equivalent": "like two peas in a pod",
      "example": "Брат з сястрой падобныя як дзве кроплі вады.",
      "exampleEn": "The brother and sister are like two peas in a pod.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "душа пайшла ў пяткі",
      "literal": "the soul went into the heels",
      "meaning": "to get badly frightened all at once",
      "equivalent": "one's heart sank into one's boots",
      "example": "Пачуўшы гэты крык, я адчуў, як душа пайшла ў пяткі.",
      "exampleEn": "When I heard that scream, my heart sank into my boots.",
      "note": "Dictionaries list the word order душа ў пяткі пайшла, and both orders are heard in speech.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "вадзіць за нос",
      "literal": "to lead by the nose",
      "meaning": "to deceive someone over a long time with promises that never come true",
      "equivalent": "string someone along",
      "example": "Ён ужо два месяцы водзіць мяне за нос, абяцаючы вярнуць доўг.",
      "exampleEn": "He has been stringing me along for two months, promising to pay the debt back.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "рабіць з мухі слана",
      "literal": "to make an elephant out of a fly",
      "meaning": "to greatly exaggerate something small",
      "equivalent": "make a mountain out of a molehill",
      "example": "Не трэба рабіць з мухі слана, гэта звычайная драбніца.",
      "exampleEn": "There is no need to make a mountain out of a molehill, it is just a small thing.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "ні свет ні зара",
      "literal": "neither light nor dawn",
      "meaning": "extremely early in the morning",
      "equivalent": "at the crack of dawn",
      "example": "Ён устаў ні свет ні зара і паехаў на вакзал.",
      "exampleEn": "He got up at the crack of dawn and went to the station.",
      "tags": [
        "time",
        "everyday"
      ]
    },
    {
      "idiom": "жыць як кот з сабакам",
      "literal": "to live like a cat with a dog",
      "meaning": "to quarrel constantly with someone you live or work beside",
      "equivalent": "fight like cat and dog",
      "example": "Яны жывуць як кот з сабакам, увесь час сварацца.",
      "exampleEn": "They fight like cat and dog, they argue all the time.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "вешаць нос",
      "literal": "to hang one's nose",
      "meaning": "to lose heart and look downcast",
      "equivalent": "be down in the dumps",
      "example": "Не вешай нос, усё яшчэ наладзіцца.",
      "exampleEn": "Do not lose heart, everything will still work out.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "залатыя рукі",
      "literal": "golden hands",
      "meaning": "great skill at making or fixing things by hand",
      "example": "У майго дзеда залатыя рукі, ён можа адрамантаваць усё.",
      "exampleEn": "My grandfather is brilliant with his hands, he can repair anything.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "ні пуху ні пер’я",
      "literal": "neither down nor feathers",
      "meaning": "good luck, said to someone facing an exam or another hard test",
      "equivalent": "break a leg",
      "example": "Заўтра ў цябе экзамен? Ні пуху ні пер’я!",
      "exampleEn": "You have an exam tomorrow? Break a leg!",
      "note": "The expected reply is \"Да чорта!\" (to the devil), because thanking someone for the wish is thought to jinx it.",
      "tags": [
        "luck",
        "talk"
      ]
    },
    {
      "idiom": "чытаць паміж радкоў",
      "literal": "to read between the lines",
      "meaning": "to work out what someone means without them saying it directly",
      "equivalent": "read between the lines",
      "example": "Трэба ўмець чытаць паміж радкоў, каб зразумець, што ён меў на ўвазе.",
      "exampleEn": "You have to be able to read between the lines to understand what he meant.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "браць быка за рогі",
      "literal": "to take the bull by the horns",
      "meaning": "to tackle a hard matter directly instead of circling around it",
      "equivalent": "take the bull by the horns",
      "example": "Досыць размоў, бяром быка за рогі і пачынаем працаваць.",
      "exampleEn": "Enough talking, let us take the bull by the horns and get to work.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "выйсці сухім з вады",
      "literal": "to come out of the water dry",
      "meaning": "to escape blame or punishment although you were in the wrong",
      "equivalent": "get off scot-free",
      "example": "Ён заўсёды выходзіць сухім з вады, што б ні здарылася.",
      "exampleEn": "He always gets off scot-free, whatever happens.",
      "tags": [
        "trouble",
        "luck"
      ]
    },
    {
      "idiom": "важная птушка",
      "literal": "an important bird",
      "meaning": "a person with a lot of rank or influence",
      "equivalent": "a big shot",
      "example": "Ён паводзіць сябе так, быццам ён важная птушка.",
      "exampleEn": "He behaves as if he were a big shot.",
      "note": "Almost always ironic, so it stings if you use it to someone's face.",
      "tags": [
        "character",
        "work"
      ]
    },
    {
      "idiom": "стары верабей",
      "literal": "an old sparrow",
      "meaning": "an experienced person who is not easy to fool",
      "equivalent": "an old hand",
      "example": "Яго не так проста ашукаць, ён стары верабей.",
      "exampleEn": "He is not that easy to trick, he is an old hand.",
      "note": "The variant стрэляны верабей (a sparrow that has been shot at) is just as common.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "сёмая вада на кісялі",
      "literal": "the seventh water on the kissel",
      "meaning": "a relative so distant that the connection barely counts",
      "example": "Ён мне нейкі далёкі родзіч, сёмая вада на кісялі.",
      "exampleEn": "He is some distant relative of mine, barely family at all.",
      "note": "Кісель is a thin starchy fruit drink, and the picture is of water poured over the leftovers again and again. You will also hear дзясятая вада на кісялі.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "лезці на ражон",
      "literal": "to climb onto the spike",
      "meaning": "to walk straight into danger when there is no need to",
      "equivalent": "ask for trouble",
      "example": "Не лезь на ражон, лепш пачакай спакойна.",
      "exampleEn": "Do not go asking for trouble, better to wait quietly.",
      "note": "Ражон is a sharpened stake or roasting spit, so the picture is of walking onto the point.",
      "tags": [
        "trouble",
        "character"
      ]
    },
    {
      "idiom": "сем пядзяў у лбе",
      "literal": "seven spans in the forehead",
      "meaning": "exceptionally clever",
      "equivalent": "be a rocket scientist",
      "example": "Не трэба быць сямі пядзяў у лбе, каб зразумець такую простую рэч.",
      "exampleEn": "You do not have to be a rocket scientist to understand such a simple thing.",
      "note": "Пядзя is an old hand span measure. The phrase turns up most often in the negative, as in the example.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "іграць другую скрыпку",
      "literal": "to play the second violin",
      "meaning": "to hold a secondary role next to someone more prominent",
      "equivalent": "play second fiddle",
      "example": "У гэтай кампаніі ён заўсёды іграе другую скрыпку.",
      "exampleEn": "In that company he always plays second fiddle.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "біць бібікі",
      "literal": "to beat the bibiki",
      "meaning": "to loaf about doing nothing useful",
      "equivalent": "twiddle one's thumbs",
      "example": "Ён цэлы дзень б’е бібікі замест таго, каб вучыцца.",
      "exampleEn": "He twiddles his thumbs all day instead of studying.",
      "note": "Informal and mildly scolding, fine among friends but out of place at work.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "гады ў рады",
      "literal": "years in rows",
      "meaning": "very rarely, with long gaps in between",
      "equivalent": "once in a blue moon",
      "example": "Мы бачымся гады ў рады, бо жывём у розных гарадах.",
      "exampleEn": "We see each other once in a blue moon, because we live in different cities.",
      "tags": [
        "time"
      ]
    },
    {
      "idiom": "спаць як пшаніцу прадаўшы",
      "literal": "to sleep as if having sold the wheat",
      "meaning": "to sleep deeply and without a care in the world",
      "equivalent": "sleep like a log",
      "example": "Ён так стаміўся, што спаў як пшаніцу прадаўшы.",
      "exampleEn": "He was so tired that he slept like a log.",
      "note": "A homely village image of a farmer resting easy once the harvest is sold. Colloquial and warm rather than formal.",
      "tags": [
        "everyday"
      ]
    }
  ],
  "bg": [
    {
      "idiom": "Като две капки вода",
      "literal": "like two drops of water",
      "meaning": "used of two people who look exactly alike",
      "equivalent": "like two peas in a pod",
      "example": "Момичето прилича на майка си като две капки вода.",
      "exampleEn": "The girl is the spitting image of her mother.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "Дойде ми до гуша",
      "literal": "it came up to my throat",
      "meaning": "to be completely fed up with something",
      "equivalent": "to have had it up to here",
      "example": "Дойде ми до гуша от постоянните извинения.",
      "exampleEn": "I have had it up to here with the constant excuses.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "Изкарвам си акъла",
      "literal": "I drive out my own wits",
      "meaning": "to get a terrible fright",
      "equivalent": "to be scared out of one's wits",
      "example": "Изкарах си акъла, когато телефонът звънна посред нощ.",
      "exampleEn": "I was scared out of my wits when the phone rang in the middle of the night.",
      "note": "Without the reflexive си, изкарвам акъла на някого means you frightened someone else.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Правя от мухата слон",
      "literal": "I make an elephant out of the fly",
      "meaning": "to blow a small problem out of all proportion",
      "equivalent": "to make a mountain out of a molehill",
      "example": "Не се притеснявай толкова, не прави от мухата слон.",
      "exampleEn": "Do not worry so much, you are making a mountain out of a molehill.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "Пет пари не давам",
      "literal": "I do not give five coins",
      "meaning": "to not care in the slightest about something",
      "equivalent": "to not give a damn",
      "example": "Той пет пари не дава за чуждото мнение.",
      "exampleEn": "He does not give a damn what other people think.",
      "tags": [
        "emotions",
        "character"
      ]
    },
    {
      "idiom": "Влизам в положението",
      "literal": "I enter into the situation",
      "meaning": "to understand and sympathize with the difficult situation someone is in",
      "equivalent": "to put yourself in someone's shoes",
      "example": "Опитай се да влезеш в моето положение, преди да ме съдиш.",
      "exampleEn": "Try to put yourself in my shoes before you judge me.",
      "note": "Very often used as a plea, влез ми в положението, when asking someone to cut you some slack.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "Удрям на камък",
      "literal": "I hit against a stone",
      "meaning": "to run into a flat refusal or a dead end",
      "equivalent": "to hit a brick wall",
      "example": "Опитах се да го убедя да си промени решението, но ударих на камък.",
      "exampleEn": "I tried to talk him into changing his decision, but I hit a brick wall.",
      "tags": [
        "trouble",
        "work"
      ]
    },
    {
      "idiom": "Хващам бика за рогата",
      "literal": "I grab the bull by the horns",
      "meaning": "to tackle a hard matter head on instead of putting it off",
      "equivalent": "to take the bull by the horns",
      "example": "Стига сме отлагали, хайде да хванем бика за рогата.",
      "exampleEn": "Enough putting it off, let us take the bull by the horns.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "На седмото небе съм",
      "literal": "I am on the seventh heaven",
      "meaning": "to be overjoyed about something",
      "equivalent": "to be on cloud nine",
      "example": "След като я приеха в университета, тя е на седмото небе.",
      "exampleEn": "Since she got into university, she has been on cloud nine.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Гледам през пръсти",
      "literal": "I look through my fingers",
      "meaning": "to knowingly ignore something wrong instead of acting on it",
      "equivalent": "to turn a blind eye",
      "example": "Шефът гледа през пръсти на закъсненията му.",
      "exampleEn": "The boss turns a blind eye to his lateness.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "Върви като по мед и масло",
      "literal": "it goes as if on honey and butter",
      "meaning": "to go smoothly, without a single snag",
      "equivalent": "to go like clockwork",
      "example": "Ремонтът върви като по мед и масло, ще приключим до петък.",
      "exampleEn": "The renovation is going like clockwork, we will be done by Friday.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "Плюя си на петите",
      "literal": "I spit on my own heels",
      "meaning": "to run away as fast as one possibly can",
      "equivalent": "to take to one's heels",
      "example": "Щом видя полицията, крадецът си плю на петите.",
      "exampleEn": "As soon as he saw the police, the thief took to his heels.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "Между чука и наковалнята",
      "literal": "between the hammer and the anvil",
      "meaning": "caught between two options that are both bad",
      "equivalent": "between a rock and a hard place",
      "example": "Между чука и наковалнята съм, защото и двете страни искат различно нещо.",
      "exampleEn": "I am between a rock and a hard place, because each side wants something different.",
      "tags": [
        "trouble"
      ]
    },
    {
      "idiom": "Отварям си очите на четири",
      "literal": "I open my eyes to four",
      "meaning": "to be extra careful and watchful",
      "equivalent": "to keep one's eyes peeled",
      "example": "Отваряй си очите на четири, като подписваш договора.",
      "exampleEn": "Keep your eyes peeled when you sign the contract.",
      "note": "Usually said as advice in the imperative, отваряй си очите на четири.",
      "tags": [
        "everyday",
        "trouble"
      ]
    },
    {
      "idiom": "Хвърлям прах в очите",
      "literal": "I throw dust in the eyes",
      "meaning": "to fool people with a false show of skill or wealth",
      "equivalent": "to pull the wool over someone's eyes",
      "example": "Той хвърля прах в очите на клиентите, но всъщност няма опит.",
      "exampleEn": "He pulls the wool over his clients' eyes, but he actually has no experience.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "Хващам се на въдицата",
      "literal": "I get caught on the fishing hook",
      "meaning": "to fall for a trick or a scam",
      "equivalent": "to take the bait",
      "example": "Хванах се на въдицата на измамниците и загубих парите си.",
      "exampleEn": "I took the scammers' bait and lost my money.",
      "tags": [
        "trouble",
        "money"
      ]
    },
    {
      "idiom": "Търся под дърво и камък",
      "literal": "I search under tree and stone",
      "meaning": "to look for something absolutely everywhere",
      "equivalent": "to leave no stone unturned",
      "example": "Търсих под дърво и камък, докато не намерих точния подарък за нея.",
      "exampleEn": "I left no stone unturned until I found exactly the right present for her.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "Стоя като на тръни",
      "literal": "I stand as if on thorns",
      "meaning": "to be tense and anxious while waiting for something",
      "equivalent": "to be on pins and needles",
      "example": "Стоях като на тръни, докато чаках резултатите от изпита.",
      "exampleEn": "I was on pins and needles while I waited for the exam results.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Обирам си крушите",
      "literal": "I gather up my own pears",
      "meaning": "to clear out and leave quickly",
      "equivalent": "to hit the road",
      "example": "Стана късно, хайде да си обираме крушите.",
      "exampleEn": "It is getting late, let us hit the road.",
      "note": "In the imperative, обирай си крушите is a rude way to tell someone to get lost.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "В кърпа вързано",
      "literal": "tied up in a cloth",
      "meaning": "completely certain, as good as done already",
      "equivalent": "in the bag",
      "example": "Не се тревожи, сделката е в кърпа вързана.",
      "exampleEn": "Do not worry, the deal is in the bag.",
      "note": "The participle agrees with the noun, so you will also hear в кърпа вързана and в кърпа вързан.",
      "tags": [
        "luck",
        "work"
      ]
    },
    {
      "idiom": "Опъвам каиша",
      "literal": "I pull the strap",
      "meaning": "to do hard, exhausting and usually thankless work",
      "equivalent": "to slog one's guts out",
      "example": "Двайсет години опъва каиша в завода.",
      "exampleEn": "He has been slogging his guts out at the factory for twenty years.",
      "note": "Colloquial, and it carries a note of complaint about badly paid work.",
      "tags": [
        "work",
        "money"
      ]
    },
    {
      "idiom": "Хлътвам по някого",
      "literal": "I sink in for someone",
      "meaning": "to fall in love with someone, usually fast and hard",
      "equivalent": "to fall head over heels for someone",
      "example": "Хлътна по нея още от първата среща.",
      "exampleEn": "He fell head over heels for her from the very first date.",
      "note": "Informal and playful, fine with friends but out of place in formal writing.",
      "tags": [
        "love",
        "emotions"
      ]
    },
    {
      "idiom": "Прехапвам си езика",
      "literal": "I bite my own tongue",
      "meaning": "to stop yourself just in time from saying something you would regret",
      "equivalent": "to bite one's tongue",
      "example": "Прехапах си езика, за да не избухна пред всички.",
      "exampleEn": "I bit my tongue so I would not lose my temper in front of everyone.",
      "tags": [
        "talk",
        "emotions"
      ]
    },
    {
      "idiom": "На куково лято",
      "literal": "on cuckoo's summer",
      "meaning": "at a time that will never come",
      "equivalent": "when pigs fly",
      "example": "Ще ми върне парите на куково лято.",
      "exampleEn": "He will pay me back when pigs fly.",
      "note": "Folksy and sarcastic; на върба в сряда says the same thing.",
      "tags": [
        "time",
        "everyday"
      ]
    },
    {
      "idiom": "Режа клона, на който седя",
      "literal": "I cut the branch on which I sit",
      "meaning": "to act in a way that ruins your own position",
      "equivalent": "to shoot oneself in the foot",
      "example": "Като лъже началника си, той реже клона, на който седи.",
      "exampleEn": "By lying to his boss, he is shooting himself in the foot.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "Дърпам дявола за опашката",
      "literal": "I pull the devil by the tail",
      "meaning": "to provoke trouble and put yourself at risk for no good reason",
      "equivalent": "to play with fire",
      "example": "Не дърпай дявола за опашката, кажи истината още сега.",
      "exampleEn": "Do not play with fire, tell the truth right now.",
      "tags": [
        "trouble",
        "luck"
      ]
    }
  ],
  "bs": [
    {
      "idiom": "Kao grom iz vedra neba",
      "literal": "like thunder from a clear sky",
      "meaning": "completely unexpected, with no warning at all",
      "equivalent": "out of the blue",
      "example": "Njegova ostavka došla je kao grom iz vedra neba.",
      "exampleEn": "His resignation came out of the blue.",
      "tags": [
        "everyday",
        "emotions"
      ]
    },
    {
      "idiom": "Praviti od muhe slona",
      "literal": "to make an elephant out of a fly",
      "meaning": "to exaggerate a small problem until it seems enormous",
      "equivalent": "make a mountain out of a molehill",
      "example": "Smiri se, praviš od muhe slona.",
      "exampleEn": "Calm down, you are making a mountain out of a molehill.",
      "tags": [
        "character",
        "talk"
      ]
    },
    {
      "idiom": "Preko glave mi je",
      "literal": "it is over my head",
      "meaning": "to be completely fed up with something after putting up with far too much of it",
      "equivalent": "to have had it up to here",
      "example": "Preko glave mi je njegovih vječnih žalbi.",
      "exampleEn": "I have had it up to here with his endless complaining.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "Držati jezik za zubima",
      "literal": "to hold the tongue behind the teeth",
      "meaning": "to stay quiet and not say what you know",
      "equivalent": "to hold one's tongue",
      "example": "Bolje drži jezik za zubima dok se sve ne razjasni.",
      "exampleEn": "You had better hold your tongue until everything is cleared up.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "Praviti se Englez",
      "literal": "to play the Englishman",
      "meaning": "to pretend you did not notice or understand something",
      "equivalent": "to play dumb",
      "example": "Ne pravi se Englez, dobro znaš o čemu pričam.",
      "exampleEn": "Do not play dumb, you know exactly what I am talking about.",
      "note": "Informal and teasing; the reference to the English is not meant as an insult.",
      "tags": [
        "character",
        "talk"
      ]
    },
    {
      "idiom": "Bez dlake na jeziku",
      "literal": "without a hair on the tongue",
      "meaning": "speaking bluntly and openly, without softening anything",
      "equivalent": "to not mince words",
      "example": "Direktorica je govorila bez dlake na jeziku i svima rekla šta misli.",
      "exampleEn": "The director did not mince words and told everyone what she thought.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "Vući nekoga za nos",
      "literal": "to pull someone by the nose",
      "meaning": "to deceive someone and keep them waiting with empty promises",
      "equivalent": "to string someone along",
      "example": "Dosta je bilo, vuče me za nos već mjesecima.",
      "exampleEn": "That is enough, he has been stringing me along for months.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "Spavati kao top",
      "literal": "to sleep like a cannon",
      "meaning": "to sleep very deeply, so that nothing wakes you",
      "equivalent": "to sleep like a log",
      "example": "Bio sam toliko umoran da sam spavao kao top do podne.",
      "exampleEn": "I was so tired that I slept like a log until noon.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "Nije šija nego vrat",
      "literal": "it is not the nape but the neck",
      "meaning": "the two things being compared are the same, only called differently",
      "equivalent": "six of one, half a dozen of the other",
      "example": "Kažeš da nije laž nego prešućivanje, nije šija nego vrat.",
      "exampleEn": "You say it is not a lie but just leaving things unsaid, that is six of one and half a dozen of the other.",
      "note": "Šija and vrat are near synonyms for the same part of the body, which is the point of the phrase.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "Gledati kroz prste",
      "literal": "to look through the fingers",
      "meaning": "to knowingly let someone's faults or mistakes pass",
      "equivalent": "to turn a blind eye",
      "example": "Nastavnik mu gleda kroz prste jer mu je otac direktor.",
      "exampleEn": "The teacher turns a blind eye to him because his father is the principal.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "Pao mi je kamen sa srca",
      "literal": "a stone fell from my heart",
      "meaning": "to feel sudden relief once a worry is gone",
      "equivalent": "a weight off my shoulders",
      "example": "Kad su rekli da je operacija prošla dobro, pao mi je kamen sa srca.",
      "exampleEn": "When they said the surgery had gone well, it was a weight off my shoulders.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Ubiti dvije muhe jednim udarcem",
      "literal": "to kill two flies with one blow",
      "meaning": "to achieve two things with a single action",
      "equivalent": "to kill two birds with one stone",
      "example": "Ako svratim u banku na putu do posla, ubit ću dvije muhe jednim udarcem.",
      "exampleEn": "If I stop by the bank on the way to work, I will kill two birds with one stone.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "Imati pik na nekoga",
      "literal": "to have a pique on someone",
      "meaning": "to single someone out and treat them unfairly out of resentment",
      "equivalent": "to have it in for someone",
      "example": "Otkad sam ga pobijedio na turniru, ima pik na mene.",
      "exampleEn": "Ever since I beat him at the tournament, he has had it in for me.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "Baciti oko na nešto",
      "literal": "to throw an eye on something",
      "meaning": "to start wanting something you have spotted",
      "equivalent": "to have one's eye on something",
      "example": "Bacila sam oko na onu crvenu haljinu u izlogu.",
      "exampleEn": "I have got my eye on that red dress in the shop window.",
      "note": "Used about people too, where it means you find someone attractive.",
      "tags": [
        "everyday",
        "love"
      ]
    },
    {
      "idiom": "Kad na vrbi rodi grožđe",
      "literal": "when grapes grow on the willow",
      "meaning": "never, at a moment that will never come",
      "equivalent": "when pigs fly",
      "example": "Vratit će mi dug kad na vrbi rodi grožđe.",
      "exampleEn": "He will pay me back when pigs fly.",
      "tags": [
        "time",
        "everyday"
      ]
    },
    {
      "idiom": "Držati fige",
      "literal": "to hold figs",
      "meaning": "to wish someone luck with something",
      "equivalent": "to keep one's fingers crossed",
      "example": "Držim ti fige za sutrašnji ispit.",
      "exampleEn": "I am keeping my fingers crossed for your exam tomorrow.",
      "note": "The matching gesture is a fist with the thumb pushed between the index and middle fingers, not crossed fingers.",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "Fali mu daska u glavi",
      "literal": "a plank is missing in his head",
      "meaning": "he acts in a strange or reckless way, as if not quite sane",
      "equivalent": "to have a screw loose",
      "example": "Skočio je u rijeku po ovoj hladnoći, sigurno mu fali daska u glavi.",
      "exampleEn": "He jumped into the river in this cold, he must have a screw loose.",
      "note": "Informal and insulting, fine among friends but not in polite company.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "Trčati pred rudu",
      "literal": "to run in front of the wagon shaft",
      "meaning": "to act or draw conclusions too early, before the right moment",
      "equivalent": "to jump the gun",
      "example": "Ne trči pred rudu, ugovor još nije potpisan.",
      "exampleEn": "Do not jump the gun, the contract has not been signed yet.",
      "tags": [
        "work",
        "time"
      ]
    },
    {
      "idiom": "Ostaviti nekoga na cjedilu",
      "literal": "to leave someone on the strainer",
      "meaning": "to abandon someone at the very moment they need help",
      "equivalent": "to leave someone in the lurch",
      "example": "Obećao je pomoći sa selidbom, a onda nas je ostavio na cjedilu.",
      "exampleEn": "He promised to help with the move and then left us in the lurch.",
      "tags": [
        "trouble",
        "character"
      ]
    },
    {
      "idiom": "Bacati novac kroz prozor",
      "literal": "to throw money through the window",
      "meaning": "to spend money on things that give nothing back",
      "equivalent": "to throw money down the drain",
      "example": "Ne kupuj to, samo bacaš novac kroz prozor.",
      "exampleEn": "Do not buy that, you are just throwing money down the drain.",
      "tags": [
        "money"
      ]
    },
    {
      "idiom": "Sjediti na dvije stolice",
      "literal": "to sit on two chairs",
      "meaning": "to stay on good terms with two opposing sides at once",
      "equivalent": "to play both sides",
      "example": "Ne možeš vječno sjediti na dvije stolice, moraš izabrati stranu.",
      "exampleEn": "You cannot play both sides forever, you have to pick one.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "Gdje je Bog rekao laku noć",
      "literal": "where God said good night",
      "meaning": "in a very remote place, far from everything",
      "equivalent": "in the middle of nowhere",
      "example": "Njihova vikendica je tamo gdje je Bog rekao laku noć, dva sata vožnje od grada.",
      "exampleEn": "Their cottage is in the middle of nowhere, a two hour drive from the city.",
      "note": "You will also hear the same phrase with vrag (devil) in place of Bog.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "Dobiti korpu",
      "literal": "to get a basket",
      "meaning": "to be turned down by someone you asked out",
      "equivalent": "to get shot down",
      "example": "Pozvao ju je na kahvu i dobio korpu.",
      "exampleEn": "He asked her out for coffee and got shot down.",
      "note": "Informal and a bit jokey, used mostly about romantic rejection.",
      "tags": [
        "love"
      ]
    },
    {
      "idiom": "Živjeti kao bubreg u loju",
      "literal": "to live like a kidney in fat",
      "meaning": "to live very comfortably and without a care",
      "equivalent": "to live in the lap of luxury",
      "example": "Otkad je dobio taj posao, živi kao bubreg u loju.",
      "exampleEn": "Ever since he got that job, he has been living in the lap of luxury.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "Baciti koplje u trnje",
      "literal": "to throw the spear into the thorns",
      "meaning": "to give up on something and stop trying",
      "equivalent": "to throw in the towel",
      "example": "Nemoj baciti koplje u trnje nakon prvog neuspjeha.",
      "exampleEn": "Do not throw in the towel after the first failure.",
      "note": "A little literary, more common in writing and speeches than in casual chat.",
      "tags": [
        "trouble",
        "work"
      ]
    },
    {
      "idiom": "Biti mokra kokoš",
      "literal": "to be a wet hen",
      "meaning": "to be meek and spineless, unable to stand up for yourself",
      "example": "Ne budi mokra kokoš, reci mu istinu u lice.",
      "exampleEn": "Do not be such a pushover, tell him the truth to his face.",
      "note": "Mildly mocking, usually said to someone you know well.",
      "tags": [
        "character"
      ]
    }
  ],
  "ca": [
    {
      "idiom": "déu-n'hi-do",
      "literal": "may God give him some of it",
      "meaning": "wow, that is quite a lot or quite something",
      "example": "Déu-n'hi-do la cua que hi havia per entrar!",
      "exampleEn": "Wow, that was quite a queue to get in!",
      "note": "A very Catalan all purpose exclamation of surprise or admiration. The current spelling uses hyphens, but you will often see the older form Déu n'hi do.",
      "tags": [
        "everyday",
        "emotions"
      ]
    },
    {
      "idiom": "costar un ull de la cara",
      "literal": "to cost an eye from the face",
      "meaning": "to be extremely expensive",
      "equivalent": "cost an arm and a leg",
      "example": "Aquell viatge ens va costar un ull de la cara.",
      "exampleEn": "That trip cost us an arm and a leg.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "tenir mala llet",
      "literal": "to have bad milk",
      "meaning": "to be in a foul mood or to have a nasty temper",
      "example": "No li diguis res ara, que té mala llet.",
      "exampleEn": "Don't say anything to him right now, he's in a foul mood.",
      "note": "Informal and a bit crude; it can describe a passing mood or a permanently nasty character.",
      "tags": [
        "emotions",
        "character"
      ]
    },
    {
      "idiom": "estar a la lluna",
      "literal": "to be on the moon",
      "meaning": "to be daydreaming and not paying attention",
      "equivalent": "have one's head in the clouds",
      "example": "Perdona, no t'he sentit, estava a la lluna.",
      "exampleEn": "Sorry, I didn't hear you, I was miles away.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "ploure a bots i barrals",
      "literal": "to rain wineskins and barrels",
      "meaning": "to rain extremely hard",
      "equivalent": "rain cats and dogs",
      "example": "No surtim ara, que plou a bots i barrals.",
      "exampleEn": "Let's not go out now, it's raining cats and dogs.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "anar de bòlit",
      "literal": "to go like a bòlit",
      "meaning": "to be so busy that you rush from one thing to the next",
      "equivalent": "be run off one's feet",
      "example": "Aquesta setmana vaig de bòlit amb la mudança.",
      "exampleEn": "This week I'm run off my feet with the move.",
      "note": "A bòlit is the short stick sent flying in an old street game, hence the image of being knocked about in all directions.",
      "tags": [
        "work",
        "time"
      ]
    },
    {
      "idiom": "quedar-se de pedra",
      "literal": "to remain of stone",
      "meaning": "to be stunned and left speechless",
      "example": "Em vaig quedar de pedra quan vaig veure la factura.",
      "exampleEn": "I was stunned when I saw the bill.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "no tenir pèls a la llengua",
      "literal": "to have no hairs on the tongue",
      "meaning": "to say exactly what you think, however blunt it sounds",
      "equivalent": "not mince one's words",
      "example": "La meva àvia no té pèls a la llengua i sempre diu el que pensa.",
      "exampleEn": "My grandmother doesn't mince her words and always says what she thinks.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "fer campana",
      "literal": "to make bell",
      "meaning": "to skip school without permission",
      "equivalent": "play hooky",
      "example": "Els meus companys van fer campana per anar al cinema.",
      "exampleEn": "My classmates skipped school to go to the cinema.",
      "note": "It refers to skipping school, not to missing work.",
      "tags": [
        "everyday",
        "trouble"
      ]
    },
    {
      "idiom": "tocar ferro",
      "literal": "to touch iron",
      "meaning": "to ward off bad luck after mentioning something you hope will not happen",
      "equivalent": "knock on wood",
      "example": "Fins ara no hem tingut cap problema amb el cotxe, toquem ferro.",
      "exampleEn": "So far we haven't had any trouble with the car, touch wood.",
      "note": "Catalans touch iron rather than wood, so people reach for a key or a metal chair leg.",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "fer l'orni",
      "literal": "to play the orni",
      "meaning": "to pretend not to notice or understand something",
      "equivalent": "play dumb",
      "example": "No facis l'orni, saps perfectament què ha passat.",
      "exampleEn": "Don't play dumb, you know perfectly well what happened.",
      "note": "The word orni exists only in this expression, and you will also hear the variant fer-se l'orni.",
      "tags": [
        "character",
        "talk"
      ]
    },
    {
      "idiom": "passar-s'ho pipa",
      "literal": "to pass it pipe",
      "meaning": "to have a great time",
      "equivalent": "have a blast",
      "example": "A la festa d'ahir ens ho vam passar pipa.",
      "exampleEn": "We had a blast at yesterday's party.",
      "note": "Very informal and mostly spoken; passar-s'ho bomba is used the same way.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "estar tocat del bolet",
      "literal": "to be touched by the mushroom",
      "meaning": "to be a bit crazy or to behave oddly",
      "equivalent": "have a screw loose",
      "example": "Vol creuar els Pirineus a peu al gener, està tocat del bolet.",
      "exampleEn": "He wants to cross the Pyrenees on foot in January, he's got a screw loose.",
      "note": "Informal, and usually said as a joke between friends.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "posar fil a l'agulla",
      "literal": "to put thread to the needle",
      "meaning": "to start working on something in earnest",
      "equivalent": "get down to business",
      "example": "Prou de reunions, ja toca posar fil a l'agulla.",
      "exampleEn": "Enough meetings, it's time to get down to business.",
      "tags": [
        "work"
      ]
    },
    {
      "idiom": "fer safareig",
      "literal": "to do the wash house",
      "meaning": "to gossip about other people",
      "example": "Les veïnes es passen el matí fent safareig al replà.",
      "exampleEn": "The neighbours spend the morning gossiping on the landing.",
      "note": "The image is the old public wash house, where neighbours did the laundry and swapped news.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "tenir la paella pel mànec",
      "literal": "to hold the frying pan by the handle",
      "meaning": "to be the one in control of a situation",
      "equivalent": "hold all the cards",
      "example": "En aquesta negociació, som nosaltres qui tenim la paella pel mànec.",
      "exampleEn": "In this negotiation, we're the ones holding all the cards.",
      "tags": [
        "work"
      ]
    },
    {
      "idiom": "tocar el dos",
      "literal": "to touch the two",
      "meaning": "to leave in a hurry, to get out of a place",
      "equivalent": "make oneself scarce",
      "example": "Va, toca el dos abans que arribi el professor.",
      "exampleEn": "Come on, make yourself scarce before the teacher gets here.",
      "tags": [
        "everyday",
        "trouble"
      ]
    },
    {
      "idiom": "fer-ne un gra massa",
      "literal": "to make one grain too many of it",
      "meaning": "to overdo something or take it too far",
      "equivalent": "go overboard",
      "example": "Amb la broma sobre el seu pare n'has fet un gra massa.",
      "exampleEn": "You went overboard with that joke about his father.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "s'ha acabat el bròquil",
      "literal": "the broccoli has run out",
      "meaning": "that is the end of it, there is nothing more to discuss",
      "equivalent": "end of story",
      "example": "A les deu tothom al llit i s'ha acabat el bròquil.",
      "exampleEn": "Everyone in bed at ten, end of story.",
      "note": "Typical of a parent or a boss closing an argument. It goes back to a cheap Barcelona eating house that closed at the end of the nineteenth century.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "buscar tres peus al gat",
      "literal": "to look for three feet on the cat",
      "meaning": "to overcomplicate things or look for problems that are not there",
      "example": "No busquis tres peus al gat, la resposta és molt senzilla.",
      "exampleEn": "Don't overcomplicate it, the answer is very simple.",
      "tags": [
        "trouble",
        "character"
      ]
    },
    {
      "idiom": "tenir la mosca darrere l'orella",
      "literal": "to have the fly behind the ear",
      "meaning": "to be on guard because you suspect something is wrong",
      "equivalent": "smell a rat",
      "example": "Des que va canviar d'horari, tinc la mosca darrere l'orella.",
      "exampleEn": "Ever since she changed her hours, I've had my suspicions.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "clar i català",
      "literal": "clear and Catalan",
      "meaning": "plainly and directly, without dressing it up",
      "equivalent": "in plain English",
      "example": "Digues-m'ho clar i català: vols venir o no?",
      "exampleEn": "Tell me in plain English: do you want to come or not?",
      "note": "Catalan speakers name their own language here the way English speakers say in plain English.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "n'hi ha per llogar-hi cadires",
      "literal": "there is enough there to rent out chairs",
      "meaning": "the situation is so outrageous or unbelievable that it deserves an audience",
      "equivalent": "you couldn't make it up",
      "example": "Ha arribat tard i encara es queixa: n'hi ha per llogar-hi cadires.",
      "exampleEn": "He turned up late and still complains, you couldn't make it up.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "fer el préssec",
      "literal": "to make the peach",
      "meaning": "to end up looking ridiculous in front of others",
      "equivalent": "make a fool of oneself",
      "example": "Es va equivocar de dia i va fer el préssec davant de tothom.",
      "exampleEn": "He got the day wrong and made a fool of himself in front of everyone.",
      "tags": [
        "trouble",
        "character"
      ]
    },
    {
      "idiom": "anar-se'n en orris",
      "literal": "to go off into ruin",
      "meaning": "to fall through and come to nothing",
      "equivalent": "go up in smoke",
      "example": "Amb la pluja, l'excursió se'n va anar en orris.",
      "exampleEn": "With the rain, the hike went up in smoke.",
      "tags": [
        "trouble",
        "luck"
      ]
    },
    {
      "idiom": "estirar més el braç que la màniga",
      "literal": "to stretch the arm further than the sleeve",
      "meaning": "to spend more money than you can afford",
      "equivalent": "live beyond one's means",
      "example": "Han comprat un pis caríssim; han estirat més el braç que la màniga.",
      "exampleEn": "They bought a very expensive flat, they're living beyond their means.",
      "tags": [
        "money"
      ]
    }
  ],
  "cs": [
    {
      "idiom": "držet někomu palce",
      "literal": "to hold one's thumbs for someone",
      "meaning": "to wish someone luck before something important",
      "equivalent": "to keep one's fingers crossed",
      "example": "Zítra mám pohovor, tak mi drž palce.",
      "exampleEn": "I have a job interview tomorrow, so keep your fingers crossed for me.",
      "note": "Czechs squeeze their thumbs inside a fist instead of crossing fingers, and people really do make the gesture.",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "mít kliku",
      "literal": "to have a door handle",
      "meaning": "to be lucky, to get away with something by chance",
      "equivalent": "to luck out",
      "example": "Měl jsi kliku, že tam ten policista zrovna nebyl.",
      "exampleEn": "You were lucky that the policeman happened not to be there.",
      "note": "Informal but heard everywhere; klika here goes back to German Glück (luck), not to the door handle.",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "lámat si hlavu",
      "literal": "to break one's head",
      "meaning": "to think hard about something puzzling",
      "equivalent": "to rack one's brains",
      "example": "S tou křížovkou jsem si lámal hlavu celý večer.",
      "exampleEn": "I racked my brains over that crossword all evening.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "mít něčeho plné zuby",
      "literal": "to have full teeth of something",
      "meaning": "to be completely fed up with something",
      "equivalent": "to be fed up to the back teeth",
      "example": "Mám těch věčných výmluv plné zuby.",
      "exampleEn": "I am fed up with those endless excuses.",
      "note": "Informal and blunt, fine with friends but too strong for a formal meeting.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "držet jazyk za zuby",
      "literal": "to hold one's tongue behind one's teeth",
      "meaning": "to keep quiet and not give something away",
      "equivalent": "to hold one's tongue",
      "example": "O tom překvapení drž jazyk za zuby.",
      "exampleEn": "Keep quiet about that surprise.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "házet flintu do žita",
      "literal": "to throw the shotgun into the rye",
      "meaning": "to give up too soon when things get hard",
      "equivalent": "to throw in the towel",
      "example": "Neházej flintu do žita, ještě to můžeš dokázat.",
      "exampleEn": "Don't give up yet, you can still pull it off.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "mít hluboko do kapsy",
      "literal": "to have deep into the pocket",
      "meaning": "to be short of money",
      "equivalent": "to be strapped for cash",
      "example": "Na konci měsíce mám vždycky hluboko do kapsy.",
      "exampleEn": "At the end of the month I am always short of money.",
      "tags": [
        "money"
      ]
    },
    {
      "idiom": "spadl mu kámen ze srdce",
      "literal": "a stone fell from his heart",
      "meaning": "to feel huge relief once a worry is over",
      "equivalent": "a weight off one's mind",
      "example": "Když jsme se dozvěděli výsledky testů, spadl mi kámen ze srdce.",
      "exampleEn": "When we got the test results, it was a huge weight off my mind.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "tahat někoho za nos",
      "literal": "to pull someone by the nose",
      "meaning": "to mislead someone, to keep someone believing something untrue",
      "equivalent": "to string someone along",
      "example": "Nevěř mu, jen tě tahá za nos.",
      "exampleEn": "Don't believe him, he is just stringing you along.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "dělat z komára velblouda",
      "literal": "to make a camel out of a mosquito",
      "meaning": "to blow a small problem out of proportion",
      "equivalent": "to make a mountain out of a molehill",
      "example": "Nedělej z komára velblouda, není to tak zlé.",
      "exampleEn": "Don't blow it out of proportion, it is not that bad.",
      "tags": [
        "character",
        "emotions"
      ]
    },
    {
      "idiom": "chodit kolem horké kaše",
      "literal": "to walk around hot porridge",
      "meaning": "to avoid saying the thing that actually matters",
      "equivalent": "to beat around the bush",
      "example": "Řekni mi to rovnou, nechoď kolem horké kaše.",
      "exampleEn": "Just tell me straight, stop beating around the bush.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "mít máslo na hlavě",
      "literal": "to have butter on one's head",
      "meaning": "to be far from innocent yourself, which leaves you in no position to criticize others",
      "example": "Neměl by mě kritizovat, sám má máslo na hlavě.",
      "exampleEn": "He shouldn't criticize me when he is no better himself.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "být za vodou",
      "literal": "to be beyond the water",
      "meaning": "to be financially secure with the hard part behind you",
      "equivalent": "to be sitting pretty",
      "example": "Po prodeji firmy je konečně za vodou.",
      "exampleEn": "After selling the company he is finally sitting pretty.",
      "tags": [
        "money",
        "luck"
      ]
    },
    {
      "idiom": "mít dlouhé vedení",
      "literal": "to have long wiring",
      "meaning": "to be slow to understand things",
      "equivalent": "to be slow on the uptake",
      "example": "Promiň, mám dlouhé vedení, můžeš to zopakovat?",
      "exampleEn": "Sorry, I am slow on the uptake, could you say that again?",
      "note": "Mildly teasing, safe about yourself but a little insulting about someone else.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "házet někomu klacky pod nohy",
      "literal": "to throw sticks under someone's feet",
      "meaning": "to deliberately make things difficult for someone",
      "equivalent": "to put a spoke in someone's wheel",
      "example": "Místo aby mi pomohl, házel mi klacky pod nohy.",
      "exampleEn": "Instead of helping me, he kept putting obstacles in my way.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "nemá to hlavu ani patu",
      "literal": "it has neither head nor heel",
      "meaning": "it makes no sense at all, it hangs together badly",
      "equivalent": "there is neither rhyme nor reason to it",
      "example": "Ta jeho výmluva nemá hlavu ani patu.",
      "exampleEn": "That excuse of his makes no sense at all.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "trefit hřebíček na hlavičku",
      "literal": "to hit the little nail on its little head",
      "meaning": "to say exactly the right thing, to name the heart of the matter",
      "equivalent": "to hit the nail on the head",
      "example": "Tím posledním komentářem jsi trefil hřebíček na hlavičku.",
      "exampleEn": "With that last comment you hit the nail on the head.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "být pro někoho španělská vesnice",
      "literal": "to be a Spanish village for someone",
      "meaning": "to be completely incomprehensible to someone",
      "equivalent": "it's all Greek to me",
      "example": "Kvantová fyzika je pro mě španělská vesnice.",
      "exampleEn": "Quantum physics is all Greek to me.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "vzít nohy na ramena",
      "literal": "to take one's legs onto one's shoulders",
      "meaning": "to run away as fast as possible",
      "equivalent": "to take to one's heels",
      "example": "Jakmile uviděl policii, vzal nohy na ramena.",
      "exampleEn": "As soon as he saw the police, he took to his heels.",
      "tags": [
        "trouble"
      ]
    },
    {
      "idiom": "mít o kolečko míň",
      "literal": "to have one little wheel fewer",
      "meaning": "to be a bit crazy, to not think quite straight",
      "equivalent": "to have a screw loose",
      "example": "Podle mě má ten chlap o kolečko míň.",
      "exampleEn": "If you ask me, that guy has a screw loose.",
      "note": "Rude to someone's face, so it is normally used behind their back or as a joke among friends.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "koukat jako tele na nová vrata",
      "literal": "to stare like a calf at a new gate",
      "meaning": "to look completely baffled and blank",
      "example": "Když jsem mu to vysvětlil, koukal jako tele na nová vrata.",
      "exampleEn": "When I explained it to him, he just stared at me blankly.",
      "tags": [
        "everyday",
        "emotions"
      ]
    },
    {
      "idiom": "být v rejži",
      "literal": "to be in the rice",
      "meaning": "to be in trouble with no easy way out",
      "equivalent": "to be in a jam",
      "example": "Když nám vypadl server, byli jsme v rejži.",
      "exampleEn": "When our server went down, we were in real trouble.",
      "note": "Colloquial; rejže is a dialect form of rýže (rice).",
      "tags": [
        "trouble"
      ]
    },
    {
      "idiom": "nechat někoho na holičkách",
      "literal": "to leave someone on the unripe fruit",
      "meaning": "to abandon someone who was counting on you",
      "equivalent": "to leave someone in the lurch",
      "example": "Slíbil, že přijede, a pak nás nechal na holičkách.",
      "exampleEn": "He promised to come and then left us in the lurch.",
      "note": "Holičky is an old word for small unripe fruit that fails to grow; outside this phrase almost nobody uses it.",
      "tags": [
        "trouble",
        "character"
      ]
    },
    {
      "idiom": "jednou za uherský rok",
      "literal": "once in a Hungarian year",
      "meaning": "very rarely, almost never",
      "equivalent": "once in a blue moon",
      "example": "Do kina se dostanu jednou za uherský rok.",
      "exampleEn": "I get to the cinema once in a blue moon.",
      "tags": [
        "time"
      ]
    },
    {
      "idiom": "natáhnout bačkory",
      "literal": "to stretch out one's slippers",
      "meaning": "to die",
      "equivalent": "to kick the bucket",
      "example": "Starý soused minulý týden natáhl bačkory.",
      "exampleEn": "The old neighbour kicked the bucket last week.",
      "note": "Jokey and disrespectful, so avoid it around people who are grieving.",
      "tags": [
        "everyday"
      ]
    }
  ],
  "da": [
    {
      "idiom": "at koste kassen",
      "literal": "to cost the till",
      "meaning": "to be very expensive",
      "equivalent": "cost an arm and a leg",
      "example": "Den nye lejlighed kostede kassen.",
      "exampleEn": "The new flat cost an arm and a leg.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "at have is i maven",
      "literal": "to have ice in the stomach",
      "meaning": "to stay calm and composed under pressure",
      "equivalent": "keep a cool head",
      "example": "Målmanden havde is i maven og reddede straffesparket.",
      "exampleEn": "The goalkeeper kept a cool head and saved the penalty.",
      "tags": [
        "character",
        "emotions"
      ]
    },
    {
      "idiom": "at slå to fluer med ét smæk",
      "literal": "to hit two flies with one smack",
      "meaning": "to solve two problems with a single action",
      "equivalent": "kill two birds with one stone",
      "example": "Ved at cykle på arbejde slår jeg to fluer med ét smæk.",
      "exampleEn": "By cycling to work I kill two birds with one stone.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "Der er ugler i mosen",
      "literal": "There are owls in the bog",
      "meaning": "something suspicious is going on, things are not as they seem",
      "equivalent": "something smells fishy",
      "example": "Jeg tror, der er ugler i mosen med det tilbud.",
      "exampleEn": "I think there is something fishy about that offer.",
      "note": "The owls were originally wolves: \"ugler\" renders a Jutland dialect form of \"ulve\".",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "at klappe hesten",
      "literal": "to pat the horse",
      "meaning": "to calm down and stop rushing into something",
      "equivalent": "hold your horses",
      "example": "Klap lige hesten, vi har ikke engang set tilbuddet endnu.",
      "exampleEn": "Hold your horses, we have not even seen the offer yet.",
      "note": "Nearly always used as a friendly command, usually \"klap lige hesten\".",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "at få blod på tanden",
      "literal": "to get blood on the tooth",
      "meaning": "to become eager and driven to carry on after a first success",
      "equivalent": "get the bit between your teeth",
      "example": "Efter den første sejr fik holdet for alvor blod på tanden.",
      "exampleEn": "After the first win the team really got the bit between their teeth.",
      "tags": [
        "character",
        "work"
      ]
    },
    {
      "idiom": "at have ben i næsen",
      "literal": "to have bones in the nose",
      "meaning": "to be firm and able to stand your ground",
      "equivalent": "have backbone",
      "example": "Hun har ben i næsen og lader sig ikke presse af nogen.",
      "exampleEn": "She has real backbone and does not let anyone push her around.",
      "tags": [
        "character",
        "work"
      ]
    },
    {
      "idiom": "at træde i spinaten",
      "literal": "to step in the spinach",
      "meaning": "to make an embarrassing blunder, to say or do the wrong thing",
      "equivalent": "put your foot in it",
      "example": "Jeg trådte grundigt i spinaten, da jeg spurgte, hvornår hun skulle føde.",
      "exampleEn": "I really put my foot in it when I asked when she was due.",
      "note": "Informal and usually good humoured, not a harsh accusation.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "at gå som katten om den varme grød",
      "literal": "to walk like the cat around the hot porridge",
      "meaning": "to circle around a difficult subject instead of getting to the point",
      "equivalent": "beat around the bush",
      "example": "Hold op med at gå som katten om den varme grød, og sig det ligeud.",
      "exampleEn": "Stop beating around the bush and just say it straight.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "at have en skrue løs",
      "literal": "to have a screw loose",
      "meaning": "to be a bit crazy or to behave oddly",
      "equivalent": "have a screw loose",
      "example": "Han griner altid ad de mærkeligste ting, han må have en skrue løs.",
      "exampleEn": "He always laughs at the strangest things, he must have a screw loose.",
      "note": "Informal. Light hearted about someone's quirks, but genuinely insulting if you mean it seriously.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "at tage benene på nakken",
      "literal": "to take the legs on the neck",
      "meaning": "to run away as fast as you can",
      "equivalent": "take to your heels",
      "example": "Da alarmen gik, tog tyven benene på nakken.",
      "exampleEn": "When the alarm went off, the thief took to his heels.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "at gøre en myg til en elefant",
      "literal": "to make a mosquito into an elephant",
      "meaning": "to exaggerate a small problem into a huge one",
      "equivalent": "make a mountain out of a molehill",
      "example": "Slap nu af, du gør en myg til en elefant.",
      "exampleEn": "Calm down, you are making a mountain out of a molehill.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "at gå i baglås",
      "literal": "to go into back lock",
      "meaning": "to seize up completely, whether that is a mind going blank or a mechanism jamming",
      "example": "Jeg gik helt i baglås, da jeg skulle holde talen.",
      "exampleEn": "My mind went completely blank when I had to give the speech.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "at love guld og grønne skove",
      "literal": "to promise gold and green forests",
      "meaning": "to make grand promises that will never be kept",
      "equivalent": "promise the moon",
      "example": "Politikerne lover guld og grønne skove før hvert valg.",
      "exampleEn": "The politicians promise the moon before every election.",
      "tags": [
        "talk",
        "money"
      ]
    },
    {
      "idiom": "at spise brød til",
      "literal": "to eat bread with it",
      "meaning": "to calm down and stop overreacting",
      "equivalent": "simmer down",
      "example": "Spis nu lige brød til, det er ikke så alvorligt.",
      "exampleEn": "Simmer down a bit, it is not that serious.",
      "note": "Almost always used as a command, usually \"spis lige brød til\".",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "at have en høne at plukke med nogen",
      "literal": "to have a hen to pluck with someone",
      "meaning": "to have a complaint to settle with someone",
      "equivalent": "have a bone to pick with someone",
      "example": "Jeg har en høne at plukke med dig.",
      "exampleEn": "I have a bone to pick with you.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "at hoppe på limpinden",
      "literal": "to jump onto the lime twig",
      "meaning": "to be taken in by a trick or a false claim",
      "equivalent": "take the bait",
      "example": "Han hoppede på limpinden og betalte for den falske billet.",
      "exampleEn": "He took the bait and paid for the fake ticket.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "at gå i hundene",
      "literal": "to go into the dogs",
      "meaning": "to fall apart or decline badly",
      "equivalent": "go to the dogs",
      "example": "Byens gamle fabrik er gået helt i hundene.",
      "exampleEn": "The town's old factory has completely gone to the dogs.",
      "tags": [
        "trouble",
        "work"
      ]
    },
    {
      "idiom": "at tage bladet fra munden",
      "literal": "to take the leaf from the mouth",
      "meaning": "to speak openly and say what you really think",
      "equivalent": "not mince words",
      "example": "Chefen tog bladet fra munden og fortalte os sandheden.",
      "exampleEn": "The boss did not mince words and told us the truth.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "Der er ingen ko på isen",
      "literal": "There is no cow on the ice",
      "meaning": "there is no danger, nothing to worry about yet",
      "example": "Bare rolig, der er ingen ko på isen endnu.",
      "exampleEn": "Relax, there is nothing to worry about yet.",
      "note": "The full form adds \"så længe rumpen er i land\" (as long as its backside is on shore).",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "at have det som blommen i et æg",
      "literal": "to have it like the yolk in an egg",
      "meaning": "to be perfectly comfortable and well looked after",
      "equivalent": "live in clover",
      "example": "Efter flytningen har de det som blommen i et æg.",
      "exampleEn": "Since the move they have been living in clover.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "at gå agurk",
      "literal": "to go cucumber",
      "meaning": "to lose control and go completely wild or furious",
      "equivalent": "go bananas",
      "example": "Han gik helt agurk, da han så regningen.",
      "exampleEn": "He went completely bananas when he saw the bill.",
      "note": "Very informal and jokey, fine among friends but out of place in formal writing.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "at stå på bar bund",
      "literal": "to stand on bare ground",
      "meaning": "to lack any knowledge or starting point in a matter",
      "equivalent": "have nothing to go on",
      "example": "Politiet stod på bar bund i sagen om det forsvundne maleri.",
      "exampleEn": "The police had nothing to go on in the case of the missing painting.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "at gå over åen efter vand",
      "literal": "to go across the stream for water",
      "meaning": "to take a needlessly difficult route to something you could get easily",
      "example": "Du behøver ikke gå over åen efter vand, svaret står jo lige her.",
      "exampleEn": "You do not need to do it the hard way, the answer is right here.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "at tisse i bukserne for at holde varmen",
      "literal": "to pee in your trousers to keep warm",
      "meaning": "to use a quick fix that helps right now but makes things worse later",
      "example": "At låne penge til afdragene er at tisse i bukserne for at holde varmen.",
      "exampleEn": "Borrowing money to cover the instalments is like peeing your pants to stay warm.",
      "note": "The image is a bit crude, but the phrase is standard even in news and politics.",
      "tags": [
        "money",
        "trouble"
      ]
    }
  ],
  "el": [
    {
      "idiom": "Δεν βλέπω την ώρα",
      "literal": "I don't see the hour",
      "meaning": "to look forward to something impatiently",
      "equivalent": "can't wait",
      "example": "Δεν βλέπω την ώρα να έρθουν οι διακοπές.",
      "exampleEn": "I can't wait for the holidays to come.",
      "tags": [
        "time",
        "emotions"
      ]
    },
    {
      "idiom": "Τα κάνω θάλασσα",
      "literal": "I make them sea",
      "meaning": "to mess something up completely",
      "equivalent": "make a mess of it",
      "example": "Ήθελα να βοηθήσω, αλλά τα έκανα θάλασσα.",
      "exampleEn": "I wanted to help, but I made a complete mess of it.",
      "tags": [
        "trouble",
        "work"
      ]
    },
    {
      "idiom": "Κάνω την πάπια",
      "literal": "I do the duck",
      "meaning": "to pretend not to know or understand something in order to dodge responsibility",
      "equivalent": "play dumb",
      "example": "Μην κάνεις την πάπια, ξέρεις πολύ καλά τι έγινε.",
      "exampleEn": "Don't play dumb, you know perfectly well what happened.",
      "tags": [
        "character",
        "talk"
      ]
    },
    {
      "idiom": "Δεν βγάζω άκρη",
      "literal": "I don't pull out an end",
      "meaning": "to be unable to make sense of something",
      "equivalent": "can't make head or tail of it",
      "example": "Διάβασα τις οδηγίες τρεις φορές και δεν βγάζω άκρη.",
      "exampleEn": "I have read the instructions three times and I still can't make head or tail of them.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "Μου πήρες τα λόγια από το στόμα",
      "literal": "You took the words from my mouth",
      "meaning": "you said exactly what I was about to say",
      "equivalent": "you took the words right out of my mouth",
      "example": "Μου πήρες τα λόγια από το στόμα, ακριβώς αυτό σκεφτόμουν κι εγώ.",
      "exampleEn": "You took the words right out of my mouth, that is exactly what I was thinking too.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "Πέφτω από τα σύννεφα",
      "literal": "I fall from the clouds",
      "meaning": "to be taken completely by surprise by news you never expected",
      "equivalent": "you could have knocked me down with a feather",
      "example": "Όταν άκουσα τα νέα, έπεσα από τα σύννεφα.",
      "exampleEn": "When I heard the news, you could have knocked me down with a feather.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Σιγά τα λάχανα",
      "literal": "Slowly the cabbages",
      "meaning": "said to brush something off as not impressive or not important",
      "equivalent": "big deal",
      "example": "Σιγά τα λάχανα, κι εγώ μπορώ να το κάνω αυτό.",
      "exampleEn": "Big deal, I can do that too.",
      "note": "Informal and sarcastic: it plays down what the other person just said, so keep it for friends.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "Κάνω τα στραβά μάτια",
      "literal": "I make the crooked eyes",
      "meaning": "to ignore something wrong on purpose",
      "equivalent": "turn a blind eye",
      "example": "Ο διευθυντής έκανε τα στραβά μάτια στις καθυστερήσεις του.",
      "exampleEn": "The manager turned a blind eye to his lateness.",
      "tags": [
        "character",
        "work"
      ]
    },
    {
      "idiom": "Μου έβγαλε την πίστη",
      "literal": "He pulled the faith out of me",
      "meaning": "someone wore me out completely with hassle or demands",
      "equivalent": "put me through the wringer",
      "example": "Μου έβγαλε την πίστη μέχρι να τελειώσουμε τη μετακόμιση.",
      "exampleEn": "He put me through the wringer until we finished the move.",
      "note": "Very informal and a bit irreverent because of the religious word, fine with friends but not at work.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "Βρέχει καρεκλοπόδαρα",
      "literal": "It is raining chair legs",
      "meaning": "it is raining extremely hard",
      "equivalent": "raining cats and dogs",
      "example": "Μην βγεις έξω, βρέχει καρεκλοπόδαρα.",
      "exampleEn": "Don't go out, it's raining cats and dogs.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "Έγινε της Κορέας",
      "literal": "It became Korea's",
      "meaning": "total uproar and chaos broke out",
      "equivalent": "all hell broke loose",
      "example": "Μόλις ανακοίνωσαν το αποτέλεσμα, έγινε της Κορέας.",
      "exampleEn": "As soon as they announced the result, all hell broke loose.",
      "note": "Very informal. It is usually traced back to the Korean War, where Greek troops served.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "Πιάνω τον ταύρο από τα κέρατα",
      "literal": "I catch the bull by the horns",
      "meaning": "to face a hard problem head on instead of putting it off",
      "equivalent": "take the bull by the horns",
      "example": "Κάποια στιγμή πρέπει να πιάσουμε τον ταύρο από τα κέρατα.",
      "exampleEn": "At some point we have to take the bull by the horns.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "Χάνω τα αυγά και τα πασχάλια",
      "literal": "I lose the eggs and the Easter tables",
      "meaning": "to get so confused that you lose track of what to do",
      "equivalent": "not know whether you are coming or going",
      "example": "Με τόσες αλλαγές στο πρόγραμμα, έχασα τα αυγά και τα πασχάλια.",
      "exampleEn": "With so many changes to the schedule, I did not know whether I was coming or going.",
      "note": "Τα πασχάλια are the church tables used to work out the date of Easter, so the phrase pictures losing both the eggs and the calendar.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "Μου ανεβαίνει το αίμα στο κεφάλι",
      "literal": "The blood rises to my head",
      "meaning": "to get furious in an instant",
      "equivalent": "see red",
      "example": "Όταν μου μιλάει έτσι, μου ανεβαίνει το αίμα στο κεφάλι.",
      "exampleEn": "When he talks to me like that, I see red.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Τρώω πόρτα",
      "literal": "I eat door",
      "meaning": "to be refused entry somewhere",
      "equivalent": "have the door slammed in your face",
      "example": "Πήγαμε στο κλαμπ, αλλά φάγαμε πόρτα.",
      "exampleEn": "We went to the club, but we got turned away at the door.",
      "note": "Colloquial, most often about bouncers refusing to let you into a club or bar.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "Στο πι και φι",
      "literal": "In the pi and phi",
      "meaning": "in a very short time, almost instantly",
      "equivalent": "in a jiffy",
      "example": "Ετοίμασε το φαγητό στο πι και φι.",
      "exampleEn": "She got the food ready in a jiffy.",
      "tags": [
        "time"
      ]
    },
    {
      "idiom": "Μου μπαίνουν ψύλλοι στ' αυτιά",
      "literal": "Fleas get into my ears",
      "meaning": "to start suspecting that something is going on",
      "example": "Όταν άλλαξε ξαφνικά θέμα, μου μπήκαν ψύλλοι στ' αυτιά.",
      "exampleEn": "When he suddenly changed the subject, I started to get suspicious.",
      "note": "The English phrase that looks similar, a flea in your ear, means a sharp telling off, so it is a false friend.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "Κάθομαι σε αναμμένα κάρβουνα",
      "literal": "I sit on lit coals",
      "meaning": "to be very anxious and restless while waiting for something",
      "equivalent": "be on tenterhooks",
      "example": "Όλη την ώρα της εξέτασης καθόταν σε αναμμένα κάρβουνα.",
      "exampleEn": "She was on tenterhooks the whole time the exam lasted.",
      "tags": [
        "emotions",
        "time"
      ]
    },
    {
      "idiom": "Μου κόπηκαν τα γόνατα",
      "literal": "My knees were cut",
      "meaning": "to go weak from shock or fear",
      "equivalent": "my legs turned to jelly",
      "example": "Όταν είδα το αποτέλεσμα των εξετάσεων, μου κόπηκαν τα γόνατα.",
      "exampleEn": "When I saw the test results, my legs turned to jelly.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Ο κόμπος έφτασε στο χτένι",
      "literal": "The knot reached the comb",
      "meaning": "the situation has reached the point where something has to give",
      "equivalent": "matters have come to a head",
      "example": "Μετά από τόσα ψέματα, ο κόμπος έφτασε στο χτένι.",
      "exampleEn": "After so many lies, matters have come to a head.",
      "tags": [
        "trouble",
        "time"
      ]
    },
    {
      "idiom": "Βάζω νερό στο κρασί μου",
      "literal": "I put water in my wine",
      "meaning": "to soften my demands and compromise",
      "equivalent": "meet someone halfway",
      "example": "Μετά τη συζήτηση, έβαλε λίγο νερό στο κρασί του.",
      "exampleEn": "After the discussion, he softened his position a little.",
      "tags": [
        "character",
        "talk"
      ]
    },
    {
      "idiom": "Μου στοίχισε ο κούκος αηδόνι",
      "literal": "The cuckoo cost me a nightingale",
      "meaning": "something turned out far more expensive than it was worth",
      "equivalent": "cost an arm and a leg",
      "example": "Επισκεύασα το αυτοκίνητο, αλλά μου στοίχισε ο κούκος αηδόνι.",
      "exampleEn": "I got the car repaired, but it cost me an arm and a leg.",
      "note": "You will also hear it with κόστισε in place of στοίχισε, with no change in meaning.",
      "tags": [
        "money"
      ]
    },
    {
      "idiom": "Ρίχνω στάχτη στα μάτια",
      "literal": "I throw ash in the eyes",
      "meaning": "to mislead people by creating a false impression",
      "equivalent": "pull the wool over someone's eyes",
      "example": "Με τα μεγάλα λόγια προσπαθεί να μας ρίξει στάχτη στα μάτια.",
      "exampleEn": "With all his big talk he is trying to pull the wool over our eyes.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "Μένω στα κρύα του λουτρού",
      "literal": "I stay in the cold parts of the bathhouse",
      "meaning": "to end up with nothing after counting on something",
      "equivalent": "be left out in the cold",
      "example": "Μας υποσχέθηκαν δουλειά και τελικά μείναμε στα κρύα του λουτρού.",
      "exampleEn": "They promised us a job and in the end we were left out in the cold.",
      "tags": [
        "luck",
        "trouble"
      ]
    },
    {
      "idiom": "Δίνω τόπο στην οργή",
      "literal": "I give place to the anger",
      "meaning": "to hold back and let a quarrel cool down instead of hitting back",
      "example": "Καλύτερα να δώσουμε τόπο στην οργή παρά να τσακωθούμε άσχημα.",
      "exampleEn": "It is better to let things cool down than to have an ugly fight.",
      "note": "Slightly formal and bookish, it comes from a New Testament phrase and you hear it more from older speakers.",
      "tags": [
        "emotions",
        "character"
      ]
    }
  ],
  "et": [
    {
      "idiom": "Kuidas käsi käib?",
      "literal": "How does the hand go?",
      "meaning": "how are you doing, used as an everyday greeting",
      "equivalent": "how's it going?",
      "example": "Tere, Mart! Kuidas käsi käib?",
      "exampleEn": "Hi, Mart! How's it going?",
      "note": "Casual greeting between people who already know each other, not for formal settings.",
      "tags": [
        "everyday",
        "talk"
      ]
    },
    {
      "idiom": "nagu kaks tilka vett",
      "literal": "like two drops of water",
      "meaning": "looking exactly alike",
      "equivalent": "like two peas in a pod",
      "example": "Õed on nagu kaks tilka vett, keegi ei oska neid eristada.",
      "exampleEn": "The sisters are like two peas in a pod, nobody can tell them apart.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "üle noatera",
      "literal": "over the knife's edge",
      "meaning": "barely, by the narrowest possible margin",
      "equivalent": "by the skin of one's teeth",
      "example": "Sooritasin eksami üle noatera, täpselt miinimumpunktidega.",
      "exampleEn": "I passed the exam by the skin of my teeth, with exactly the minimum points.",
      "tags": [
        "luck",
        "trouble"
      ]
    },
    {
      "idiom": "silma peal hoidma",
      "literal": "to hold an eye on",
      "meaning": "to keep watch over someone or something",
      "equivalent": "to keep an eye on",
      "example": "Palun hoia mu kotil korraks silma peal.",
      "exampleEn": "Please keep an eye on my bag for a moment.",
      "tags": [
        "everyday",
        "work"
      ]
    },
    {
      "idiom": "kops läheb üle maksa",
      "literal": "the lung goes over the liver",
      "meaning": "to lose one's temper, to get furious",
      "equivalent": "to blow a fuse",
      "example": "Kui ta jälle hilines, läks mul kops üle maksa.",
      "exampleEn": "When he turned up late again, I blew a fuse.",
      "note": "Informal, at home in speech but out of place in formal writing.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "pead murdma",
      "literal": "to break one's head",
      "meaning": "to think hard about a difficult problem",
      "equivalent": "to rack one's brain",
      "example": "Murdsin terve õhtu pead, kuidas seda ülesannet lahendada.",
      "exampleEn": "I racked my brain all evening over how to solve that problem.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "sajab nagu oavarrest",
      "literal": "it rains as from a bean stalk",
      "meaning": "it is pouring with rain",
      "equivalent": "to rain cats and dogs",
      "example": "Võta vihmavari kaasa, väljas sajab nagu oavarrest.",
      "exampleEn": "Take an umbrella, it's raining cats and dogs outside.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "ots otsaga kokku tulema",
      "literal": "for end to come together with end",
      "meaning": "to have just enough money to cover what you need",
      "equivalent": "to make ends meet",
      "example": "Sellise palgaga on raske ots otsaga kokku tulla.",
      "exampleEn": "It's hard to make ends meet on a salary like that.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "nagu välk selgest taevast",
      "literal": "like lightning from a clear sky",
      "meaning": "completely sudden and unexpected",
      "equivalent": "out of the blue",
      "example": "Tema lahkumisavaldus tuli nagu välk selgest taevast.",
      "exampleEn": "His resignation came out of the blue.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "ridade vahelt lugema",
      "literal": "to read from between the rows",
      "meaning": "to work out what someone means without them saying it directly",
      "equivalent": "to read between the lines",
      "example": "Kirjas seda otse ei öeldud, aga ridade vahelt lugedes oli kõik selge.",
      "exampleEn": "The letter didn't say it directly, but reading between the lines everything was clear.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "nagu õlitatult",
      "literal": "as if oiled",
      "meaning": "very smoothly and without a hitch",
      "equivalent": "like a well-oiled machine",
      "example": "Uue juhi käe all hakkas kõik nagu õlitatult sujuma.",
      "exampleEn": "Under the new manager everything started running like a well-oiled machine.",
      "tags": [
        "work"
      ]
    },
    {
      "idiom": "ninapidi vedama",
      "literal": "to drag by the nose",
      "meaning": "to deceive someone, usually over a long stretch of time",
      "equivalent": "to string someone along",
      "example": "Ta vedas oma ülemust mitu kuud ninapidi, enne kui tõde välja tuli.",
      "exampleEn": "He strung his boss along for months before the truth came out.",
      "tags": [
        "trouble",
        "character"
      ]
    },
    {
      "idiom": "pika ninaga jääma",
      "literal": "to be left with a long nose",
      "meaning": "to end up empty-handed and disappointed",
      "example": "Piletid said otsa enne meie järge, nii et jäime pika ninaga.",
      "exampleEn": "The tickets ran out before our turn, so we ended up empty-handed.",
      "tags": [
        "luck",
        "emotions"
      ]
    },
    {
      "idiom": "sääsest elevanti tegema",
      "literal": "to make an elephant out of a mosquito",
      "meaning": "to blow something small far out of proportion",
      "equivalent": "to make a mountain out of a molehill",
      "example": "Ära tee sääsest elevanti, see oli ainult üks kriimustus.",
      "exampleEn": "Don't make a mountain out of a molehill, it was only a scratch.",
      "note": "The variant kärbsest elevanti tegema (out of a fly) is just as correct.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "läbi lillede",
      "literal": "through the flowers",
      "meaning": "hinting at something politely instead of saying it straight out",
      "equivalent": "to beat around the bush",
      "example": "Ta andis läbi lillede mõista, et tal on raha vaja.",
      "exampleEn": "He hinted delicately that he needed money.",
      "note": "Usually about softening criticism or bad news, so it can sound tactful rather than evasive.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "torm veeklaasis",
      "literal": "a storm in a glass of water",
      "meaning": "a big fuss about something trivial",
      "equivalent": "a storm in a teacup",
      "example": "Meedia tegi sellest suure loo, aga tegelikult oli see torm veeklaasis.",
      "exampleEn": "The media made a big story out of it, but really it was a storm in a teacup.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "hambad ristis",
      "literal": "with teeth crossed",
      "meaning": "pushing on through something hard without giving up",
      "equivalent": "to grit one's teeth",
      "example": "Hambad ristis saime töö õigeks ajaks valmis.",
      "exampleEn": "We gritted our teeth and got the work done on time.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "karuteene tegema",
      "literal": "to do a bear's service",
      "meaning": "to harm someone while trying to help them",
      "example": "Tahtsin last aidata, aga tegin talle hoopis karuteene.",
      "exampleEn": "I wanted to help the child, but I did more harm than good.",
      "note": "From the fable of the bear that killed its friend while swatting a fly off his face.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "nahast välja pugema",
      "literal": "to crawl out of one's skin",
      "meaning": "to go all out to get something, with almost embarrassing eagerness",
      "equivalent": "to bend over backwards",
      "example": "Ta pugeb nahast välja, et ametikõrgendust saada.",
      "exampleEn": "He is bending over backwards to get a promotion.",
      "note": "Mildly disapproving, it suggests the effort is overeager and a bit servile.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "süda vajub saapasäärde",
      "literal": "the heart sinks into the boot shaft",
      "meaning": "to be suddenly gripped by fear or dread",
      "equivalent": "one's heart sinks",
      "example": "Kui buss järsku pidurdas, vajus mul süda saapasäärde.",
      "exampleEn": "When the bus braked suddenly, my heart sank.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "käed rüpes istuma",
      "literal": "to sit with hands in the lap",
      "meaning": "to stay idle while something clearly needs doing",
      "equivalent": "to sit on one's hands",
      "example": "Kõik teised koristasid, tema aga istus käed rüpes.",
      "exampleEn": "Everyone else was cleaning up, but he just sat on his hands.",
      "note": "Mildly critical, it implies the person ought to be pitching in.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "põrsast kotis ostma",
      "literal": "to buy a piglet in a sack",
      "meaning": "to buy something without checking it first",
      "equivalent": "to buy a pig in a poke",
      "example": "Tellisin selle sülearvuti netist seda nägemata ja ostsin sisuliselt põrsa kotis.",
      "exampleEn": "I ordered that laptop online without seeing it, so I basically bought a pig in a poke.",
      "tags": [
        "money",
        "trouble"
      ]
    },
    {
      "idiom": "tuli takus",
      "literal": "fire in the tow (flax fibre)",
      "meaning": "being in a great hurry",
      "example": "Ma ei saa praegu rääkida, mul on tuli takus.",
      "exampleEn": "I can't talk right now, I'm in a huge rush.",
      "note": "Takk is flax fibre that catches fire in an instant, an image from old farm life.",
      "tags": [
        "time",
        "everyday"
      ]
    },
    {
      "idiom": "kivi kapsaaeda viskama",
      "literal": "to throw a stone into the cabbage garden",
      "meaning": "to aim a veiled dig at someone",
      "equivalent": "to take a dig at someone",
      "example": "See märkus koosolekul oli selge kivi minu kapsaaeda.",
      "exampleEn": "That remark at the meeting was clearly a dig at me.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "vihma käest räästa alla",
      "literal": "from the rain to under the eaves",
      "meaning": "to move out of a bad situation into a worse one",
      "equivalent": "out of the frying pan into the fire",
      "example": "Vahetasin töökohta, aga sattusin vihma käest räästa alla.",
      "exampleEn": "I changed jobs, but I went out of the frying pan into the fire.",
      "tags": [
        "trouble",
        "work"
      ]
    }
  ],
  "eu": [
    {
      "idiom": "hanka sartu",
      "literal": "to put a leg in",
      "meaning": "to slip up, to say or do the wrong thing",
      "equivalent": "put your foot in it",
      "example": "Barkamena eskatu behar diot, ondo hanka sartu dut.",
      "exampleEn": "I have to apologize to him, I really messed up.",
      "note": "Colloquial, and mainly used on the southern (Spanish) side of the Basque Country.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "adarra jo",
      "literal": "to play the horn",
      "meaning": "to tease someone, to make fun of someone with something untrue",
      "equivalent": "pull someone's leg",
      "example": "Adarra jotzen ari zara, ezta?",
      "exampleEn": "You are pulling my leg, aren't you?",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "bertan behera utzi",
      "literal": "to leave right there below",
      "meaning": "to call something off, to drop a plan or event",
      "equivalent": "call off",
      "example": "Euria zela eta, kontzertua bertan behera utzi zuten.",
      "exampleEn": "Because of the rain, they called off the concert.",
      "note": "Standard in news reports about cancelled events, matches and strikes.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "buruz ikasi",
      "literal": "to learn by head",
      "meaning": "to memorize something word for word",
      "equivalent": "learn by heart",
      "example": "Poema osoa buruz ikasi behar dugu biharko.",
      "exampleEn": "We have to learn the whole poem by heart for tomorrow.",
      "note": "Once you know it, you say buruz jakin.",
      "tags": [
        "everyday",
        "work"
      ]
    },
    {
      "idiom": "burutik egon",
      "literal": "to be from the head",
      "meaning": "to be crazy, to act in a completely irrational way",
      "equivalent": "be out of your mind",
      "example": "Neguan itsasoan bainatzen da? Burutik dago!",
      "exampleEn": "He swims in the sea in winter? He is out of his mind!",
      "note": "Informal; you will also hear burutik eginda egon and burutik jota egon.",
      "tags": [
        "character",
        "emotions"
      ]
    },
    {
      "idiom": "hankaz gora egon",
      "literal": "to be with legs upward",
      "meaning": "to be in complete disorder or chaos",
      "equivalent": "be turned upside down",
      "example": "Festaren ondoren, etxea hankaz gora zegoen.",
      "exampleEn": "After the party, the house was turned upside down.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "sudurra sartu",
      "literal": "to put the nose in",
      "meaning": "to meddle in matters that are none of your business",
      "equivalent": "poke your nose in",
      "example": "Ez sartu sudurra besteren kontuetan.",
      "exampleEn": "Don't poke your nose into other people's business.",
      "tags": [
        "character",
        "talk"
      ]
    },
    {
      "idiom": "bost axola izan",
      "literal": "to matter five",
      "meaning": "not to care in the slightest about something",
      "equivalent": "couldn't care less",
      "example": "Bost axola zait besteek zer esaten duten.",
      "exampleEn": "I couldn't care less what other people say.",
      "tags": [
        "emotions",
        "character"
      ]
    },
    {
      "idiom": "musutruk",
      "literal": "in exchange for a kiss",
      "meaning": "for free, without any payment",
      "example": "Kontzerturako sarrerak musutruk lortu genituen.",
      "exampleEn": "We got the concert tickets for free.",
      "note": "Also written musu-truk.",
      "tags": [
        "money",
        "work"
      ]
    },
    {
      "idiom": "loak hartu",
      "literal": "sleep took (someone)",
      "meaning": "to fall asleep, to be overcome by sleep",
      "equivalent": "nod off",
      "example": "Sofan eserita zegoela, loak hartu zuen.",
      "exampleEn": "While he was sitting on the sofa, he fell asleep.",
      "note": "Sleep is the subject and the sleeper the object, so loak hartu ninduen means sleep took me.",
      "tags": [
        "everyday",
        "time"
      ]
    },
    {
      "idiom": "kosta ahala kosta",
      "literal": "cost however it may cost",
      "meaning": "whatever it takes, regardless of the difficulty",
      "equivalent": "at all costs",
      "example": "Kosta ahala kosta, lana ostiralerako amaitu behar dugu.",
      "exampleEn": "Whatever it takes, we have to finish the work by Friday.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "hitza jan",
      "literal": "to eat the word",
      "meaning": "to break a promise you made",
      "equivalent": "go back on your word",
      "example": "Etorriko zela agindu zuen, baina hitza jan zuen.",
      "exampleEn": "He promised he would come, but he went back on his word.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "gorriak ikusi",
      "literal": "to see red ones",
      "meaning": "to go through a very hard time",
      "equivalent": "go through hell",
      "example": "Gorriak ikusi genituen azterketa garaian.",
      "exampleEn": "We went through hell during exam season.",
      "note": "Also heard as gorriak igaro.",
      "tags": [
        "trouble",
        "emotions"
      ]
    },
    {
      "idiom": "pikutara bidali",
      "literal": "to send to the fig tree",
      "meaning": "to drop something in annoyance, to dismiss someone rudely",
      "equivalent": "send someone packing",
      "example": "Nazkatuta zegoen eta dena pikutara bidali zuen.",
      "exampleEn": "He was fed up and dropped the whole thing.",
      "note": "Informal, and Zoaz pikutara! is a rude way of telling someone to get lost.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "goseak amorratzen egon",
      "literal": "to be raging with hunger",
      "meaning": "to be extremely hungry",
      "equivalent": "could eat a horse",
      "example": "Goseak amorratzen nago, noiz afalduko dugu?",
      "exampleEn": "I am starving, when are we having dinner?",
      "note": "Goseak hiltzen egon and goseak akabatzen egon are just as common.",
      "tags": [
        "everyday",
        "emotions"
      ]
    },
    {
      "idiom": "burua berotu",
      "literal": "to heat up the head",
      "meaning": "to worry excessively about something, to keep stewing over it",
      "equivalent": "get worked up",
      "example": "Ez ibili burua berotzen kontu horrekin, konponduko da eta.",
      "exampleEn": "Don't get worked up over that business, it will sort itself out.",
      "note": "With a dative (norbaiti burua berotu) it shifts to filling someone else's head with ideas.",
      "tags": [
        "emotions",
        "character"
      ]
    },
    {
      "idiom": "ziria sartu",
      "literal": "to put the peg in",
      "meaning": "to deceive someone, to fool them with a made-up story",
      "equivalent": "pull a fast one",
      "example": "Ziria sartu digute prezioarekin.",
      "exampleEn": "They pulled a fast one on us with the price.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "kontuak atera",
      "literal": "to take the accounts out",
      "meaning": "to add up the figures, or to work out for yourself what something means",
      "equivalent": "do the math",
      "example": "Hiru urte daramatza horrela, atera kontuak.",
      "exampleEn": "He has been like that for three years, so do the math.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "ahoa bete hortz gelditu",
      "literal": "to remain with mouth full of teeth",
      "meaning": "to be left speechless with surprise or disappointment",
      "equivalent": "be lost for words",
      "example": "Berri hura entzutean, ahoa bete hortz gelditu zen.",
      "exampleEn": "When she heard that news, she was left completely speechless.",
      "note": "The transitive form, ahoa bete hortz utzi, means to leave someone speechless.",
      "tags": [
        "emotions",
        "talk"
      ]
    },
    {
      "idiom": "begi onez ikusi",
      "literal": "to see with a good eye",
      "meaning": "to approve of something, to look kindly on it",
      "example": "Ez zuten begi onez ikusi nire erabakia.",
      "exampleEn": "They did not look kindly on my decision.",
      "note": "The opposite is begi txarrez ikusi.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "lepoa egin",
      "literal": "to do the neck",
      "meaning": "to bet on something because you are completely sure of it",
      "equivalent": "bet your life on it",
      "example": "Lepoa egingo nuke bihar euria egingo duela.",
      "exampleEn": "I would bet my life it will rain tomorrow.",
      "note": "Lepoa jokatu and lepoa ipini work the same way.",
      "tags": [
        "luck",
        "talk"
      ]
    },
    {
      "idiom": "odol hotzean",
      "literal": "in cold blood",
      "meaning": "calmly and deliberately, without letting emotion show",
      "equivalent": "in cold blood",
      "example": "Mehatxuen aurrean, odol hotzean erantzun zuen.",
      "exampleEn": "Faced with the threats, he answered coolly.",
      "note": "Often used simply for staying calm under pressure, without the sinister overtone the English phrase usually carries.",
      "tags": [
        "emotions",
        "character"
      ]
    },
    {
      "idiom": "izerdi patsetan egon",
      "literal": "to be in a mash of sweat",
      "meaning": "to be soaked in sweat",
      "example": "Korrika egin ondoren, izerdi patsetan zegoen.",
      "exampleEn": "After running, he was drenched in sweat.",
      "note": "Pats is the pulp left after pressing grapes or apples, hence the drenched image.",
      "tags": [
        "everyday",
        "work"
      ]
    },
    {
      "idiom": "hitzetik hortzera",
      "literal": "from the word to the tooth",
      "meaning": "instantly, without a moment of hesitation",
      "equivalent": "on the spot",
      "example": "Galdetu bezain laster, hitzetik hortzera erantzun zuen.",
      "exampleEn": "The moment he was asked, he answered on the spot.",
      "note": "It has a second sense too, at every turn or over and over, so the context decides.",
      "tags": [
        "time",
        "talk"
      ]
    },
    {
      "idiom": "adarrak jarri",
      "literal": "to put horns on someone",
      "meaning": "to be unfaithful to a partner",
      "equivalent": "two-time someone",
      "example": "Bere bikotekideak adarrak jarri zizkion, eta harremana hautsi zuten.",
      "exampleEn": "His partner cheated on him, and they broke up.",
      "note": "Informal and gossipy; adarrak ipini is an equally common variant.",
      "tags": [
        "love",
        "trouble"
      ]
    }
  ],
  "fi": [
    {
      "idiom": "mennä metsään",
      "literal": "to go into the forest",
      "meaning": "to go wrong, to fail, to miss the mark",
      "equivalent": "go south",
      "example": "Koko suunnitelma meni pahasti metsään.",
      "exampleEn": "The whole plan went badly wrong.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "olla pihalla",
      "literal": "to be in the yard",
      "meaning": "to be clueless, to have no idea what is going on",
      "equivalent": "be all at sea",
      "example": "En ymmärtänyt kokouksessa mitään, olin täysin pihalla.",
      "exampleEn": "I did not understand a thing in the meeting, I was completely lost.",
      "note": "Informal and very common in speech, often strengthened to pihalla kuin lumiukko (out in the yard like a snowman).",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "vetää herneen nenäänsä",
      "literal": "to pull a pea into one's nose",
      "meaning": "to get offended and sulk over something trivial",
      "equivalent": "get one's nose out of joint",
      "example": "Hän veti heti herneen nenäänsä pienestäkin huomautuksesta.",
      "exampleEn": "He took offence right away at even the smallest remark.",
      "tags": [
        "emotions",
        "character"
      ]
    },
    {
      "idiom": "heittää hanskat tiskiin",
      "literal": "to throw the gloves onto the counter",
      "meaning": "to give up and quit something",
      "equivalent": "throw in the towel",
      "example": "Hän heitti hanskat tiskiin kesken projektin.",
      "exampleEn": "He gave up halfway through the project.",
      "note": "Also heard as lyödä hanskat tiskiin.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "nostaa kissa pöydälle",
      "literal": "to lift the cat onto the table",
      "meaning": "to bring up an uncomfortable topic openly",
      "equivalent": "address the elephant in the room",
      "example": "Kokouksessa joku vihdoin nosti kissan pöydälle ja kysyi irtisanomisista.",
      "exampleEn": "At the meeting someone finally brought up the awkward subject and asked about the layoffs.",
      "tags": [
        "talk",
        "work"
      ]
    },
    {
      "idiom": "mennä sukset ristiin",
      "literal": "for the skis to go crosswise",
      "meaning": "to fall out with someone, to end up in a dispute",
      "equivalent": "have a falling out",
      "example": "Meillä meni naapurin kanssa sukset ristiin tontin rajasta.",
      "exampleEn": "The neighbour and I had a falling out over the property line.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "olla puun ja kuoren välissä",
      "literal": "to be between the tree and the bark",
      "meaning": "to be caught between two opposing sides with no good option",
      "equivalent": "between a rock and a hard place",
      "example": "Esimies oli puun ja kuoren välissä johdon ja henkilöstön ristiriidassa.",
      "exampleEn": "The manager was caught in the middle of the conflict between management and staff.",
      "tags": [
        "trouble",
        "work"
      ]
    },
    {
      "idiom": "pitää jäitä hatussa",
      "literal": "to keep ice in one's hat",
      "meaning": "to stay calm and not rush into anything",
      "equivalent": "keep a cool head",
      "example": "Pidetään jäitä hatussa, tulokset varmistuvat vasta huomenna.",
      "exampleEn": "Let us keep a cool head, the results will not be confirmed until tomorrow.",
      "tags": [
        "emotions",
        "character"
      ]
    },
    {
      "idiom": "onni onnettomuudessa",
      "literal": "luck in the misfortune",
      "meaning": "the lucky side of an otherwise bad situation",
      "equivalent": "a silver lining",
      "example": "Auto hajosi, mutta onni onnettomuudessa se tapahtui kotipihassa.",
      "exampleEn": "The car broke down, but the silver lining was that it happened in our own yard.",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "mennä puurot ja vellit sekaisin",
      "literal": "for the porridges and the gruels to get mixed up",
      "meaning": "to confuse two separate things with each other",
      "equivalent": "get one's wires crossed",
      "example": "Nyt sinulla menivät puurot ja vellit sekaisin, kyse oli eri sopimuksesta.",
      "exampleEn": "You have got your wires crossed now, this was about a different contract.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "osua naulan kantaan",
      "literal": "to hit the head of the nail",
      "meaning": "to say exactly the right thing",
      "equivalent": "hit the nail on the head",
      "example": "Osuit naulan kantaan, juuri siitä tässä on kyse.",
      "exampleEn": "You hit the nail on the head, that is exactly what this is about.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "olla monta rautaa tulessa",
      "literal": "to have many irons in the fire",
      "meaning": "to have several projects going on at the same time",
      "equivalent": "have many irons in the fire",
      "example": "Hänellä on aina monta rautaa tulessa.",
      "exampleEn": "She always has several things on the go at once.",
      "tags": [
        "work",
        "time"
      ]
    },
    {
      "idiom": "maksaa maltaita",
      "literal": "to cost malts",
      "meaning": "to be very expensive",
      "equivalent": "cost an arm and a leg",
      "example": "Keskustan vuokra-asunnot maksavat maltaita.",
      "exampleEn": "Rental flats in the city centre cost a fortune.",
      "tags": [
        "money"
      ]
    },
    {
      "idiom": "selvä pyy",
      "literal": "clear hazel grouse",
      "meaning": "understood, will do, no problem",
      "example": "Voisitko hakea leivät kaupasta? Selvä pyy.",
      "exampleEn": "Could you get the bread from the shop? Sure thing.",
      "note": "A casual spoken reply between friends or close colleagues, not for formal situations.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "vetää hatusta",
      "literal": "to pull out of the hat",
      "meaning": "to make up a number or an answer on the spot with no real basis",
      "equivalent": "pull out of thin air",
      "example": "Nämä luvut on vedetty hatusta, mitään laskelmia ei ole tehty.",
      "exampleEn": "These figures were pulled out of thin air, no calculations were done at all.",
      "tags": [
        "talk",
        "work"
      ]
    },
    {
      "idiom": "ottaa itseään niskasta kiinni",
      "literal": "to take oneself by the scruff of the neck",
      "meaning": "to pull oneself together and finally get going",
      "equivalent": "pull oneself together",
      "example": "Nyt on korkea aika ottaa itseään niskasta kiinni ja alkaa opiskella.",
      "exampleEn": "It is high time to get a grip and start studying.",
      "tags": [
        "character",
        "work"
      ]
    },
    {
      "idiom": "mennä kuin Strömsössä",
      "literal": "to go like in Strömsö",
      "meaning": "to go perfectly smoothly, without a hitch",
      "equivalent": "go off without a hitch",
      "example": "Kesämökin remontti meni kuin Strömsössä.",
      "exampleEn": "The renovation of the summer cottage went off without a hitch.",
      "note": "Strömsö is a long-running Finnish lifestyle TV show, and the phrase is often used ironically when things clearly did not go smoothly.",
      "tags": [
        "everyday",
        "work"
      ]
    },
    {
      "idiom": "olla kuin kala kuivalla maalla",
      "literal": "to be like a fish on dry land",
      "meaning": "to be completely out of one's element",
      "equivalent": "like a fish out of water",
      "example": "Isossa kaupungissa maalaispoika oli kuin kala kuivalla maalla.",
      "exampleEn": "In the big city the country boy was like a fish out of water.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "lyödä kaksi kärpästä yhdellä iskulla",
      "literal": "to hit two flies with one blow",
      "meaning": "to get two things done with a single effort",
      "equivalent": "kill two birds with one stone",
      "example": "Pyörällä töihin mennessä lyöt kaksi kärpästä yhdellä iskulla.",
      "exampleEn": "By cycling to work you kill two birds with one stone.",
      "tags": [
        "work",
        "time"
      ]
    },
    {
      "idiom": "olla jotain hampaankolossa",
      "literal": "to have something in the hollow of one's tooth",
      "meaning": "to harbour an old grudge against someone",
      "equivalent": "have a bone to pick with someone",
      "example": "Hänellä on jotain hampaankolossa minua vastaan vanhan riidan takia.",
      "exampleEn": "He still holds a grudge against me over an old quarrel.",
      "tags": [
        "emotions",
        "character"
      ]
    },
    {
      "idiom": "ei ole kaikki muumit laaksossa",
      "literal": "not all the Moomins are in the valley",
      "meaning": "to not be quite right in the head, to be a bit crazy",
      "equivalent": "not playing with a full deck",
      "example": "Hänellä ei taida olla kaikki muumit laaksossa.",
      "exampleEn": "I do not think he is quite right in the head.",
      "note": "A joke built on the Moomin books, so it sounds rude if you say it about someone seriously.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "olla korviaan myöten rakastunut",
      "literal": "to be in love up to one's ears",
      "meaning": "to be deeply and completely in love",
      "equivalent": "head over heels in love",
      "example": "Hän on korviaan myöten rakastunut uuteen naapuriinsa.",
      "exampleEn": "She is head over heels in love with her new neighbour.",
      "tags": [
        "love",
        "emotions"
      ]
    },
    {
      "idiom": "mennä pupu pöksyyn",
      "literal": "for the bunny to go into one's pants",
      "meaning": "to get scared and lose one's nerve",
      "equivalent": "get cold feet",
      "example": "Pimeässä metsässä pojalta meni pupu pöksyyn.",
      "exampleEn": "In the dark forest the boy lost his nerve.",
      "note": "Playful and informal, used with children but also jokingly between adults.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "heittää kapuloita rattaisiin",
      "literal": "to throw sticks into the wheels",
      "meaning": "to deliberately obstruct or sabotage something",
      "equivalent": "throw a spanner in the works",
      "example": "Kilpailija yritti heittää kapuloita rattaisiimme viime hetkellä.",
      "exampleEn": "A competitor tried to throw a spanner in the works at the last moment.",
      "tags": [
        "trouble",
        "work"
      ]
    },
    {
      "idiom": "heittää lusikka nurkkaan",
      "literal": "to throw the spoon into the corner",
      "meaning": "to die",
      "equivalent": "kick the bucket",
      "example": "Vanha koiramme heitti lusikan nurkkaan viime syksynä.",
      "exampleEn": "Our old dog kicked the bucket last autumn.",
      "note": "Blunt and jokey, so avoid it when talking seriously about someone's death.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "puhua palturia",
      "literal": "to speak humbug",
      "meaning": "to talk nonsense, to say things with no truth in them",
      "equivalent": "talk through one's hat",
      "example": "Poliitikko puhui pelkkää palturia koko haastattelun ajan.",
      "exampleEn": "The politician talked nothing but nonsense through the whole interview.",
      "note": "Colloquial. The noun palturi (nonsense) is nowadays heard almost only in this phrase.",
      "tags": [
        "talk"
      ]
    }
  ],
  "gl": [
    {
      "idiom": "botar unha man",
      "literal": "to throw a hand",
      "meaning": "to help someone out",
      "equivalent": "lend a hand",
      "example": "Podes botarme unha man con estas caixas?",
      "exampleEn": "Can you give me a hand with these boxes?",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "malo será",
      "literal": "bad it will be",
      "meaning": "things will probably work out, we will manage somehow",
      "example": "Perdemos o tren, pero malo será que non atopemos outro xeito de chegar.",
      "exampleEn": "We missed the train, but we are bound to find another way to get there.",
      "note": "A hallmark of Galician speech: calm, stubborn optimism after a setback, said with a shrug.",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "tomar o pelo",
      "literal": "to take the hair",
      "meaning": "to mock or tease someone",
      "equivalent": "pull someone's leg",
      "example": "Non me tomes o pelo, sei que non foi así.",
      "exampleEn": "Don't pull my leg, I know that is not how it happened.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "estar nas nubes",
      "literal": "to be in the clouds",
      "meaning": "to be distracted or daydreaming, not paying attention",
      "equivalent": "have your head in the clouds",
      "example": "Non me escoitaches nada, estabas nas nubes.",
      "exampleEn": "You did not hear a word I said, you had your head in the clouds.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "meter a pata",
      "literal": "to put the paw in",
      "meaning": "to make a blunder, to say or do the wrong thing",
      "equivalent": "put your foot in it",
      "example": "Metín a pata cando lle preguntei pola súa ex.",
      "exampleEn": "I put my foot in it when I asked him about his ex.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "custar un ollo da cara",
      "literal": "to cost an eye from the face",
      "meaning": "to be extremely expensive",
      "equivalent": "cost an arm and a leg",
      "example": "Ese piso en Vigo cústalle un ollo da cara ao meu curmán.",
      "exampleEn": "That flat in Vigo costs my cousin an arm and a leg.",
      "tags": [
        "money"
      ]
    },
    {
      "idiom": "non ter pelos na lingua",
      "literal": "to not have hairs on the tongue",
      "meaning": "to speak bluntly and frankly, without holding back",
      "equivalent": "not mince your words",
      "example": "A miña avoa non ten pelos na lingua e dille todo á cara.",
      "exampleEn": "My grandmother does not mince her words and says everything to your face.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "falar polos cóbados",
      "literal": "to talk through the elbows",
      "meaning": "to talk a great deal, to be very talkative",
      "equivalent": "talk the hind legs off a donkey",
      "example": "O meu curmán fala polos cóbados, non hai quen o pare.",
      "exampleEn": "My cousin talks non-stop, there is no stopping him.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "facer a vista gorda",
      "literal": "to make the sight fat",
      "meaning": "to pretend not to notice something wrong",
      "equivalent": "turn a blind eye",
      "example": "O profesor fixo a vista gorda cando chegamos tarde.",
      "exampleEn": "The teacher turned a blind eye when we arrived late.",
      "tags": [
        "everyday",
        "trouble"
      ]
    },
    {
      "idiom": "matar dous paxaros dun tiro",
      "literal": "to kill two birds with one shot",
      "meaning": "to achieve two things with a single action",
      "equivalent": "kill two birds with one stone",
      "example": "Se imos á tenda de camiño ao traballo, matamos dous paxaros dun tiro.",
      "exampleEn": "If we stop at the shop on the way to work, we kill two birds with one stone.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "estar coa auga ao pescozo",
      "literal": "to be with the water at the neck",
      "meaning": "to be in serious difficulty, often with money",
      "equivalent": "be up to your neck in it",
      "example": "Con tantas facturas, estamos coa auga ao pescozo este mes.",
      "exampleEn": "With so many bills, we are up to our necks in it this month.",
      "tags": [
        "trouble",
        "money"
      ]
    },
    {
      "idiom": "botar leña ao lume",
      "literal": "to throw firewood on the fire",
      "meaning": "to make a tense situation or conflict worse",
      "equivalent": "add fuel to the fire",
      "example": "Non lle botes máis leña ao lume, xa está bastante enfadada.",
      "exampleEn": "Do not add any more fuel to the fire, she is angry enough already.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "ter morriña",
      "literal": "to have morriña",
      "meaning": "to ache with longing for home, for your land and the people in it",
      "example": "Leva dous anos en Suíza e ten morriña da súa aldea.",
      "exampleEn": "He has been in Switzerland for two years and he misses his village badly.",
      "note": "Morriña is a cultural keyword tied to Galicia's long history of emigration, heavier and more physical than plain homesickness.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "coller o touro polos cornos",
      "literal": "to grab the bull by the horns",
      "meaning": "to confront a difficult situation directly and decisively",
      "equivalent": "take the bull by the horns",
      "example": "Xa vai sendo hora de coller o touro polos cornos e falar co xefe.",
      "exampleEn": "It is about time to take the bull by the horns and talk to the boss.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "estar coma peixe na auga",
      "literal": "to be like a fish in the water",
      "meaning": "to feel completely comfortable and at ease",
      "equivalent": "be in your element",
      "example": "Desde que chegou a Galicia, está coma peixe na auga.",
      "exampleEn": "Since he arrived in Galicia, he has been completely in his element.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "poñerse as botas",
      "literal": "to put on the boots",
      "meaning": "to eat a huge amount, or to do very well out of something",
      "equivalent": "pig out",
      "example": "No aniversario puxémonos as botas coa empanada.",
      "exampleEn": "At the birthday party we stuffed ourselves with empanada.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "a fume de carozo",
      "literal": "at smoke of corn cob",
      "meaning": "in a great hurry, at top speed",
      "equivalent": "like greased lightning",
      "example": "Saíu da casa a fume de carozo porque chegaba tarde.",
      "exampleEn": "He left the house at top speed because he was running late.",
      "note": "Distinctly Galician, from the smoke of a maize cob, which flares up and vanishes at once.",
      "tags": [
        "time",
        "everyday"
      ]
    },
    {
      "idiom": "ir de troula",
      "literal": "to go of revelry",
      "meaning": "to go out partying with no plan to come home early",
      "equivalent": "paint the town red",
      "example": "O sábado imos de troula ata as tantas.",
      "exampleEn": "On Saturday we are going out partying until the small hours.",
      "note": "Informal and cheerful, used among friends rather than in formal writing.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "caer da burra",
      "literal": "to fall off the donkey",
      "meaning": "to finally realise you were wrong about something you had insisted on",
      "equivalent": "the penny drops",
      "example": "Tardou meses en caer da burra e recoñecer que se equivocara.",
      "exampleEn": "It took him months for the penny to drop and admit he had been wrong.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "ser coma un allo",
      "literal": "to be like a garlic",
      "meaning": "to be very quick-witted and sharp",
      "equivalent": "be as sharp as a tack",
      "example": "Esa nena é coma un allo, aprende todo á primeira.",
      "exampleEn": "That girl is as sharp as a tack, she learns everything the first time.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "tarde piaches",
      "literal": "late you chirped",
      "meaning": "you made up your mind too late, the chance is gone",
      "equivalent": "you snooze, you lose",
      "example": "Agora queres vir? Tarde piaches, xa vendemos as entradas.",
      "exampleEn": "Now you want to come? You snooze, you lose, we have already sold the tickets.",
      "note": "Said with the dry teasing Galicians call retranca, so it stings a little.",
      "tags": [
        "time",
        "talk"
      ]
    },
    {
      "idiom": "non ter onde caer morto",
      "literal": "to not have where to fall dead",
      "meaning": "to be completely broke, to own nothing at all",
      "equivalent": "not have a penny to your name",
      "example": "Presume moito de coche, pero non ten onde caer morto.",
      "exampleEn": "He brags about his car, but he does not have a penny to his name.",
      "tags": [
        "money"
      ]
    },
    {
      "idiom": "facer as beiras",
      "literal": "to make the edges",
      "meaning": "to court someone, to try to win their affection",
      "equivalent": "make a play for someone",
      "example": "Leva semanas facéndolle as beiras a esa rapaza da oficina.",
      "exampleEn": "He has spent weeks making a play for that girl at the office.",
      "tags": [
        "love"
      ]
    },
    {
      "idiom": "poñer o carro diante dos bois",
      "literal": "to put the cart in front of the oxen",
      "meaning": "to do things in the wrong order, to rush ahead of the right moment",
      "equivalent": "put the cart before the horse",
      "example": "Non poñas o carro diante dos bois, primeiro busca traballo e despois muda de piso.",
      "exampleEn": "Do not put the cart before the horse, first find a job and then move flat.",
      "tags": [
        "work",
        "time"
      ]
    }
  ],
  "hr": [
    {
      "idiom": "Ići nekome na živce",
      "literal": "to go on someone's nerves",
      "meaning": "to irritate or annoy someone",
      "equivalent": "get on someone's nerves",
      "example": "Susjedova mi glazba već cijeli dan ide na živce.",
      "exampleEn": "The neighbour's music has been getting on my nerves all day.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "Ne pada mi na pamet",
      "literal": "it does not fall on my mind",
      "meaning": "I have no intention of doing that",
      "equivalent": "I wouldn't dream of it",
      "example": "Da mu opet posudim novac? Ne pada mi na pamet.",
      "exampleEn": "Lend him money again? I wouldn't dream of it.",
      "note": "The same words can also be meant literally (the idea never occurred to me), so context decides which sense is in play.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "Dići ruke od nečega",
      "literal": "to raise one's hands from something",
      "meaning": "to give up on something and stop trying",
      "equivalent": "throw in the towel",
      "example": "Nakon nekoliko neuspjelih pokušaja, digao je ruke od tog projekta.",
      "exampleEn": "After a few failed attempts, he gave up on that project.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "Pun mi je kufer",
      "literal": "my suitcase is full",
      "meaning": "to have run out of patience with something and be unable to take any more",
      "equivalent": "have had it up to here",
      "example": "Pun mi je kufer čekanja u redovima.",
      "exampleEn": "I have had it up to here with waiting in queues.",
      "note": "Very informal slang built on the German word for suitcase, fine among friends but out of place in formal speech.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "Spavati kao top",
      "literal": "to sleep like a cannon",
      "meaning": "to sleep very deeply",
      "equivalent": "sleep like a log",
      "example": "Bio sam toliko umoran da sam spavao kao top.",
      "exampleEn": "I was so tired that I slept like a log.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "Držati fige",
      "literal": "to hold figs",
      "meaning": "to wish someone luck",
      "equivalent": "keep one's fingers crossed",
      "example": "Držim ti fige za sutrašnji razgovor za posao.",
      "exampleEn": "I am keeping my fingers crossed for your job interview tomorrow.",
      "note": "The matching gesture is a fist with the thumb pushed between the index and middle fingers, not crossed fingers.",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "Praviti od muhe slona",
      "literal": "to make an elephant out of a fly",
      "meaning": "to exaggerate a small problem into a huge one",
      "equivalent": "make a mountain out of a molehill",
      "example": "Smiri se, ne moraš praviti od muhe slona.",
      "exampleEn": "Calm down, there is no need to make a mountain out of a molehill.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "Vući nekoga za nos",
      "literal": "to pull someone by the nose",
      "meaning": "to deceive someone and keep them waiting with false promises",
      "equivalent": "string someone along",
      "example": "Prestani me vući za nos i reci mi istinu.",
      "exampleEn": "Stop stringing me along and tell me the truth.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "Biti na sedmom nebu",
      "literal": "to be in the seventh heaven",
      "meaning": "to be extremely happy",
      "equivalent": "be on cloud nine",
      "example": "Kad je vidjela rezultate ispita, bila je na sedmom nebu.",
      "exampleEn": "When she saw her exam results, she was on cloud nine.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Pao mu je kamen sa srca",
      "literal": "a stone fell from his heart",
      "meaning": "to feel a huge sense of relief after worrying",
      "equivalent": "a weight off one's shoulders",
      "example": "Kad je čuo da je sin sigurno sletio, pao mu je kamen sa srca.",
      "exampleEn": "When he heard that his son had landed safely, it was a weight off his shoulders.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Nemati dlake na jeziku",
      "literal": "to have no hair on the tongue",
      "meaning": "to speak bluntly and say exactly what one thinks",
      "equivalent": "not mince words",
      "example": "Kolegica nema dlake na jeziku kad iznosi svoje mišljenje.",
      "exampleEn": "My colleague does not mince words when she gives her opinion.",
      "tags": [
        "character",
        "talk"
      ]
    },
    {
      "idiom": "Ubiti dvije muhe jednim udarcem",
      "literal": "to kill two flies with one blow",
      "meaning": "to achieve two things with a single action",
      "equivalent": "kill two birds with one stone",
      "example": "Ako putujemo preko Beča, ubit ćemo dvije muhe jednim udarcem.",
      "exampleEn": "If we travel via Vienna, we will kill two birds with one stone.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "Bacati novac kroz prozor",
      "literal": "to throw money through the window",
      "meaning": "to waste money on things that bring nothing back",
      "equivalent": "throw money down the drain",
      "example": "Kupovati treći mobitel ove godine znači bacati novac kroz prozor.",
      "exampleEn": "Buying a third phone this year is throwing money down the drain.",
      "tags": [
        "money"
      ]
    },
    {
      "idiom": "Kad na vrbi rodi grožđe",
      "literal": "when grapes grow on a willow",
      "meaning": "never, at a moment that will never arrive",
      "equivalent": "when pigs fly",
      "example": "Vratit će mi dug kad na vrbi rodi grožđe.",
      "exampleEn": "He will pay me back when pigs fly.",
      "tags": [
        "time",
        "talk"
      ]
    },
    {
      "idiom": "Gledati kroz prste",
      "literal": "to look through the fingers",
      "meaning": "to deliberately overlook someone's mistakes instead of punishing them",
      "equivalent": "turn a blind eye",
      "example": "Profesor mu gleda kroz prste jer dobro igra nogomet.",
      "exampleEn": "The teacher turns a blind eye to him because he is good at football.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "Biti na konju",
      "literal": "to be on the horse",
      "meaning": "to be in a strong position with everything going well",
      "equivalent": "be sitting pretty",
      "example": "Otkad je otvorio vlastitu tvrtku, on je na konju.",
      "exampleEn": "Since he opened his own company, he has been sitting pretty.",
      "tags": [
        "luck",
        "work"
      ]
    },
    {
      "idiom": "Kupiti mačka u vreći",
      "literal": "to buy a cat in a sack",
      "meaning": "to buy something without checking it first",
      "equivalent": "buy a pig in a poke",
      "example": "Uvijek pregledaj stan prije nego što ga unajmiš, da ne kupiš mačka u vreći.",
      "exampleEn": "Always inspect a flat before you rent it, so you do not buy a pig in a poke.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "Stati nekome na žulj",
      "literal": "to step on someone's blister",
      "meaning": "to hurt or offend someone by bringing up exactly what bothers them",
      "equivalent": "touch a nerve",
      "example": "Stao si mu na žulj tom šalom o njegovoj plaći.",
      "exampleEn": "You touched a nerve with that joke about his salary.",
      "tags": [
        "emotions",
        "talk"
      ]
    },
    {
      "idiom": "Prodavati maglu",
      "literal": "to sell fog",
      "meaning": "to talk in empty words and make promises with nothing behind them",
      "equivalent": "blow smoke",
      "example": "Taj trgovac samo prodaje maglu, nemoj mu vjerovati.",
      "exampleEn": "That salesman is just blowing smoke, do not believe him.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "Praviti se Englez",
      "literal": "to pretend to be an Englishman",
      "meaning": "to act as if one has not noticed or understood something inconvenient",
      "equivalent": "play dumb",
      "example": "Znam da si dobio moju poruku, ne pravi se Englez.",
      "exampleEn": "I know you got my message, do not play dumb.",
      "note": "No dig at English people is intended, the picture is simply a foreigner who does not follow what is going on.",
      "tags": [
        "character",
        "talk"
      ]
    },
    {
      "idiom": "Biti pod papučom",
      "literal": "to be under the slipper",
      "meaning": "to be completely controlled by one's wife or partner",
      "equivalent": "be henpecked",
      "example": "Otkad se oženio, potpuno je pod papučom.",
      "exampleEn": "Since he got married, he has been completely henpecked.",
      "note": "Almost always said about a husband and always teasing, so save it for friends.",
      "tags": [
        "love",
        "character"
      ]
    },
    {
      "idiom": "Ni pet ni šest",
      "literal": "neither five nor six",
      "meaning": "without any hesitation, straight away",
      "equivalent": "without a second thought",
      "example": "Ni pet ni šest, samo je ustao i otišao bez riječi.",
      "exampleEn": "Without a second thought, he simply got up and left without a word.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "Sjediti na dvije stolice",
      "literal": "to sit on two chairs",
      "meaning": "to try to keep two opposing sides happy at the same time",
      "equivalent": "have a foot in both camps",
      "example": "U ovoj svađi ne možeš sjediti na dvije stolice.",
      "exampleEn": "In this argument you cannot have a foot in both camps.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "Piti kao smuk",
      "literal": "to drink like a snake",
      "meaning": "to drink a lot of alcohol",
      "equivalent": "drink like a fish",
      "example": "Na svakom rođendanu pije kao smuk.",
      "exampleEn": "He drinks like a fish at every birthday party.",
      "note": "A smuk is a large non-venomous snake. The phrase is a blunt judgement about someone, not something you would say to their face.",
      "tags": [
        "everyday",
        "character"
      ]
    },
    {
      "idiom": "Trbuhom za kruhom",
      "literal": "with the belly after bread",
      "meaning": "to leave home and move somewhere else in search of work",
      "example": "Mnogi mladi odlaze u inozemstvo trbuhom za kruhom.",
      "exampleEn": "Many young people go abroad in search of work.",
      "note": "The phrase carries the weight of Croatia's long history of economic emigration, so it sounds heavier than plain job hunting.",
      "tags": [
        "work",
        "money"
      ]
    }
  ],
  "hu": [
    {
      "idiom": "Nem esik messze az alma a fájától",
      "literal": "The apple does not fall far from its tree",
      "meaning": "children take after their parents in character",
      "equivalent": "the apple doesn't fall far from the tree",
      "example": "Ugyanolyan makacs, mint az apja, nem esik messze az alma a fájától.",
      "exampleEn": "He is just as stubborn as his father, the apple does not fall far from the tree.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "Két legyet üt egy csapásra",
      "literal": "He hits two flies with one stroke",
      "meaning": "to get two things done with a single action",
      "equivalent": "kill two birds with one stone",
      "example": "Ha most elintézzük ezt is, két legyet ütünk egy csapásra.",
      "exampleEn": "If we sort this out now as well, we kill two birds with one stone.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "Se füle, se farka",
      "literal": "It has neither ear nor tail",
      "meaning": "something makes no sense at all and has no clear point",
      "equivalent": "can't make head nor tail of it",
      "example": "Ennek a történetnek se füle, se farka.",
      "exampleEn": "This story makes no sense at all.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "Töri a fejét",
      "literal": "He breaks his head",
      "meaning": "to think hard about something, trying to work it out",
      "equivalent": "rack your brains",
      "example": "Egész délután a megoldáson törte a fejét.",
      "exampleEn": "He spent the whole afternoon racking his brains over the solution.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "Nem az én asztalom",
      "literal": "It is not my table",
      "meaning": "it is not my responsibility or my area of expertise",
      "equivalent": "not my department",
      "example": "Ezzel a kérdéssel a könyveléshez fordulj, ez nem az én asztalom.",
      "exampleEn": "Take that question to accounting, it is not my department.",
      "note": "Very common in offices as a polite way of passing a request on to somebody else.",
      "tags": [
        "work",
        "talk"
      ]
    },
    {
      "idiom": "Kutyából nem lesz szalonna",
      "literal": "Bacon will not come from a dog",
      "meaning": "a person's basic nature cannot be changed",
      "equivalent": "a leopard can't change its spots",
      "example": "Hiába próbálod nevelni, kutyából nem lesz szalonna.",
      "exampleEn": "No matter how you try to bring him up, a leopard cannot change its spots.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "Éhes, mint a farkas",
      "literal": "Hungry as the wolf",
      "meaning": "extremely hungry",
      "equivalent": "hungry as a horse",
      "example": "Egész nap nem ettem semmit, éhes vagyok, mint a farkas.",
      "exampleEn": "I have not eaten anything all day, I am as hungry as a wolf.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "Tele van a hócipője",
      "literal": "His snow boot is full",
      "meaning": "to be completely fed up with something",
      "equivalent": "fed up to the back teeth",
      "example": "Tele van a hócipőm ezzel a sok túlórával.",
      "exampleEn": "I am fed up to the back teeth with all this overtime.",
      "note": "Informal, fine with friends but too casual for a work email.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "Szegény, mint a templom egere",
      "literal": "Poor as the church mouse",
      "meaning": "having almost no money at all",
      "equivalent": "poor as a church mouse",
      "example": "Az egyetem alatt szegény voltam, mint a templom egere.",
      "exampleEn": "During my university years I was as poor as a church mouse.",
      "tags": [
        "money"
      ]
    },
    {
      "idiom": "Ne fesd az ördögöt a falra",
      "literal": "Do not paint the devil on the wall",
      "meaning": "do not talk about a bad outcome, you may bring it on",
      "equivalent": "don't tempt fate",
      "example": "Ne fesd az ördögöt a falra, még minden jóra fordulhat!",
      "exampleEn": "Do not tempt fate, everything can still turn out fine.",
      "tags": [
        "luck",
        "talk"
      ]
    },
    {
      "idiom": "Addig üsd a vasat, amíg meleg",
      "literal": "Strike the iron while it is warm",
      "meaning": "act now, while the moment is right",
      "equivalent": "strike while the iron is hot",
      "example": "Most figyelnek rád, addig üsd a vasat, amíg meleg.",
      "exampleEn": "They are paying attention to you now, so strike while the iron is hot.",
      "tags": [
        "time",
        "work"
      ]
    },
    {
      "idiom": "Nagy fába vágja a fejszéjét",
      "literal": "He sinks his axe into a big tree",
      "meaning": "to take on a hard job that may turn out to be beyond one's strength",
      "equivalent": "bite off more than you can chew",
      "example": "Nagy fába vágta a fejszéjét, amikor egyedül állt neki felújítani a házat.",
      "exampleEn": "He took on a huge job when he started renovating the house on his own.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "Több is veszett Mohácsnál",
      "literal": "More was lost at Mohács",
      "meaning": "there is no reason to despair, far worse losses have been survived",
      "equivalent": "it's not the end of the world",
      "example": "Elrontottad a vizsgát? Sebaj, több is veszett Mohácsnál.",
      "exampleEn": "You messed up the exam? Never mind, worse things have happened.",
      "note": "Mohács is the 1526 battle Hungary lost to the Ottomans, so the comfort comes with a wry historical shrug.",
      "tags": [
        "trouble",
        "emotions"
      ]
    },
    {
      "idiom": "Ajándék lónak ne nézd a fogát",
      "literal": "Do not look at the teeth of a gift horse",
      "meaning": "do not find fault with something you got for free",
      "equivalent": "don't look a gift horse in the mouth",
      "example": "Régi a bicikli, de ingyen kaptad, ajándék lónak ne nézd a fogát.",
      "exampleEn": "The bike is old, but you got it for free, so do not look a gift horse in the mouth.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "Leesik a tantusz",
      "literal": "The token drops",
      "meaning": "to finally grasp something that had not made sense before",
      "equivalent": "the penny drops",
      "example": "Sokáig magyaráztam, mire végre leesett nála a tantusz.",
      "exampleEn": "I explained it for ages before the penny finally dropped for him.",
      "note": "A tantusz was the coin-like token used in old public phone boxes, so younger speakers use the phrase without knowing the object.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "Egy fecske nem csinál nyarat",
      "literal": "One swallow does not make a summer",
      "meaning": "one good sign is not enough to prove a trend",
      "equivalent": "one swallow doesn't make a summer",
      "example": "Igaz, hogy egyszer sikerült, de egy fecske nem csinál nyarat.",
      "exampleEn": "True, it worked once, but one swallow does not make a summer.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "Beadja a kulcsot",
      "literal": "He hands in the key",
      "meaning": "to die",
      "equivalent": "kick the bucket",
      "example": "A vén kandúr tizennyolc évesen adta be a kulcsot.",
      "exampleEn": "The old tomcat kicked the bucket at the age of eighteen.",
      "note": "Flippant and informal, so avoid it when speaking to people close to the person who died.",
      "tags": [
        "everyday",
        "trouble"
      ]
    },
    {
      "idiom": "Jobb ma egy veréb, mint holnap egy túzok",
      "literal": "A sparrow today is better than a bustard tomorrow",
      "meaning": "a small sure thing beats a bigger uncertain one",
      "equivalent": "a bird in the hand is worth two in the bush",
      "example": "Fogadd el az ajánlatot, jobb ma egy veréb, mint holnap egy túzok.",
      "exampleEn": "Accept the offer, a bird in the hand is worth two in the bush.",
      "tags": [
        "money",
        "luck"
      ]
    },
    {
      "idiom": "Kutyaszorítóban van",
      "literal": "He is in a dog squeeze",
      "meaning": "to be stuck in a tight situation with no good way out",
      "equivalent": "between a rock and a hard place",
      "example": "A határidő miatt most igazi kutyaszorítóban vagyok.",
      "exampleEn": "Because of the deadline I am really between a rock and a hard place right now.",
      "tags": [
        "trouble"
      ]
    },
    {
      "idiom": "Borsot tör az orra alá",
      "literal": "He grinds pepper under someone's nose",
      "meaning": "to annoy someone on purpose or make life hard for them",
      "example": "A szomszéd folyton borsot tör az orrunk alá.",
      "exampleEn": "The neighbour keeps making life difficult for us on purpose.",
      "tags": [
        "trouble",
        "character"
      ]
    },
    {
      "idiom": "Sok víz lefolyt azóta a Dunán",
      "literal": "Much water has flowed down the Danube since then",
      "meaning": "a lot of time has passed and much has changed",
      "equivalent": "a lot of water under the bridge",
      "example": "Húsz éve nem jártam itt, azóta sok víz lefolyt a Dunán.",
      "exampleEn": "I have not been here for twenty years, a lot of water has flowed under the bridge since then.",
      "tags": [
        "time"
      ]
    },
    {
      "idiom": "Addig nyújtózkodj, ameddig a takaród ér",
      "literal": "Stretch only as far as your blanket reaches",
      "meaning": "live within your means and do not want more than you can afford",
      "equivalent": "cut your coat according to your cloth",
      "example": "Addig nyújtózkodj, ameddig a takaród ér, ne vegyél fel újabb hitelt!",
      "exampleEn": "Live within your means, do not take out another loan.",
      "tags": [
        "money"
      ]
    },
    {
      "idiom": "Kosarat ad",
      "literal": "He gives a basket",
      "meaning": "to turn down someone who asks you out or proposes",
      "example": "Meghívta randira, de a lány kosarat adott neki.",
      "exampleEn": "He asked her out on a date, but she turned him down.",
      "note": "The other side of it is kosarat kap, said of the person who gets rejected.",
      "tags": [
        "love",
        "talk"
      ]
    },
    {
      "idiom": "Bottal ütheti a nyomát",
      "literal": "He can beat its track with a stick",
      "meaning": "someone or something is gone for good and cannot be found",
      "example": "Mire kiértünk az utcára, a tolvajnak már bottal üthettük a nyomát.",
      "exampleEn": "By the time we got out onto the street, the thief was long gone.",
      "tags": [
        "trouble"
      ]
    },
    {
      "idiom": "Ajtóstul ront be a házba",
      "literal": "He bursts into the house door and all",
      "meaning": "to come out with unwelcome news or a request bluntly, with no lead-up",
      "example": "Ahelyett, hogy finoman közölte volna, ajtóstul rontott be a házba, és kimondta az igazságot.",
      "exampleEn": "Instead of breaking it gently, he came straight out with it and told the truth.",
      "tags": [
        "talk",
        "character"
      ]
    }
  ],
  "hy": [
    {
      "idiom": "գլխի ընկնել",
      "literal": "to fall into the head",
      "meaning": "to suddenly understand or realize something",
      "equivalent": "to catch on",
      "example": "Մի քանի րոպե անց նոր գլխի ընկա, թե ինչ էր ուզում ասել։",
      "exampleEn": "It was only a few minutes later that I caught on to what he meant.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "ձեռք առնել",
      "literal": "to take in hand",
      "meaning": "to make fun of someone, to tease",
      "equivalent": "to pull someone's leg",
      "example": "Լուրջ եմ ասում, քեզ ձեռք չեմ առնում։",
      "exampleEn": "I mean it, I am not pulling your leg.",
      "note": "The same two words also mean to take something up or set about it, so the context decides which sense you get.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "ցավդ տանեմ",
      "literal": "let me carry your pain",
      "meaning": "an affectionate way of addressing someone, roughly my dear",
      "example": "Ցավդ տանեմ, մի քիչ էլ կեր, դեռ ոչինչ չես կերել։",
      "exampleEn": "My dear, eat a little more, you have hardly eaten anything.",
      "note": "It comes from offering to take another person's pain onto yourself; older relatives use it constantly, and it also softens a request.",
      "tags": [
        "love",
        "everyday"
      ]
    },
    {
      "idiom": "գլուխ գովել",
      "literal": "to praise one's head",
      "meaning": "to brag about oneself",
      "equivalent": "to blow one's own trumpet",
      "example": "Նա շատ է սիրում գլուխ գովել, բայց գործի ժամանակ ոչինչ չի անում։",
      "exampleEn": "He loves to blow his own trumpet, but when there is work to do he does nothing.",
      "tags": [
        "character",
        "talk"
      ]
    },
    {
      "idiom": "քիթը կախել",
      "literal": "to hang one's nose",
      "meaning": "to sulk, to look gloomy or upset",
      "equivalent": "to be down in the dumps",
      "example": "Ինչո՞ւ ես քիթդ կախել, ի՞նչ է պատահել։",
      "exampleEn": "Why the long face, what happened?",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "աչքով տալ",
      "literal": "to give with the eye",
      "meaning": "to bring someone bad luck by admiring or envying them too openly",
      "equivalent": "to give someone the evil eye",
      "example": "Երեխային այդքան մի գովիր, աչքով կտաս։",
      "exampleEn": "Do not praise the child so much, you will give him the evil eye.",
      "note": "The evil eye is taken half seriously in Armenia; blue eye charms hang in cars and homes, and the phrase comes up in ordinary conversation.",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "հոգին հանել",
      "literal": "to take out someone's soul",
      "meaning": "to wear someone out with constant nagging or demands",
      "equivalent": "to drive someone up the wall",
      "example": "Այս երեխաները հարցերով հոգիս հանեցին։",
      "exampleEn": "These children drove me up the wall with their questions.",
      "note": "Very informal and fairly strong, so keep it for family and close friends.",
      "tags": [
        "trouble",
        "emotions"
      ]
    },
    {
      "idiom": "ձեռքից գալ",
      "literal": "to come from someone's hand",
      "meaning": "to be within one's power or skill to do",
      "example": "Ինչ որ իմ ձեռքից գա, կանեմ քեզ համար։",
      "exampleEn": "Whatever is in my power, I will do it for you.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "գլուխը կորցնել",
      "literal": "to lose one's head",
      "meaning": "to panic and lose one's composure",
      "equivalent": "to lose one's head",
      "example": "Վտանգի պահին նա գլուխը չկորցրեց ու անմիջապես օգնություն կանչեց։",
      "exampleEn": "At the moment of danger he did not lose his head and called for help right away.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "խելքը գլուխը հավաքել",
      "literal": "to gather one's mind into one's head",
      "meaning": "to come to one's senses and start acting sensibly",
      "equivalent": "to pull oneself together",
      "example": "Ժամանակն է, որ խելքդ գլուխդ հավաքես ու լուրջ գործ գտնես։",
      "exampleEn": "It is time you pulled yourself together and found a serious job.",
      "note": "Said to someone younger or close to you; from a stranger it lands as a scolding.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "սիրտը լցվել",
      "literal": "the heart to fill up",
      "meaning": "to be overcome with emotion, often close to tears",
      "equivalent": "to get choked up",
      "example": "Երգը լսելիս սիրտս լցվեց։",
      "exampleEn": "I got choked up while listening to the song.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "փորը մեջքին կպչել",
      "literal": "the belly to stick to the back",
      "meaning": "to be extremely hungry",
      "equivalent": "to be so hungry one could eat a horse",
      "example": "Առավոտից ոչինչ չեմ կերել, փորս մեջքիս կպել է։",
      "exampleEn": "I have not eaten since morning, I could eat a horse.",
      "note": "Colloquial and a bit blunt, natural at home but not at a formal table.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "աչքի լույսի պես պահել",
      "literal": "to keep like the light of the eye",
      "meaning": "to look after something with the greatest possible care",
      "equivalent": "to guard something like the apple of one's eye",
      "example": "Տատիկս այդ նամակները աչքի լույսի պես էր պահում։",
      "exampleEn": "My grandmother guarded those letters like the apple of her eye.",
      "tags": [
        "love",
        "everyday"
      ]
    },
    {
      "idiom": "քիթը խոթել",
      "literal": "to shove one's nose in",
      "meaning": "to meddle in things that are none of one's business",
      "equivalent": "to stick one's nose in",
      "example": "Ամեն տեղ քիթդ մի խոթիր, դա քո գործը չէ։",
      "exampleEn": "Do not stick your nose in everywhere, it is none of your business.",
      "note": "Blunt; said to someone's face it is a real reproach, not light teasing.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "ականջին օղ անել",
      "literal": "to make it an earring for one's ear",
      "meaning": "to take advice to heart and remember it for good",
      "example": "Մորս խոսքերը ականջիս օղ արեցի ու երբեք չմոռացա։",
      "exampleEn": "I took my mother's words to heart and never forgot them.",
      "note": "The image is an earring, a reminder you carry on you, and it usually comes up when older people give advice.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "սիրտը տեղը գալ",
      "literal": "the heart to come back to its place",
      "meaning": "to calm down and feel at ease again after worrying",
      "equivalent": "to breathe a sigh of relief",
      "example": "Երբ զանգեց ու ասաց, որ ամեն ինչ լավ է, սիրտս տեղը եկավ։",
      "exampleEn": "When he called and said everything was fine, I breathed a sigh of relief.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "աչքից ընկնել",
      "literal": "to fall from someone's eye",
      "meaning": "to lose someone's respect or good opinion",
      "equivalent": "to fall out of favor",
      "example": "Իր ստի պատճառով նա ընկերների աչքից ընկավ։",
      "exampleEn": "Because of his lie he fell out of favor with his friends.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "ջուրն ընկնել",
      "literal": "to fall into the water",
      "meaning": "for a plan or an effort to come to nothing",
      "equivalent": "to fall through",
      "example": "Անձրևի պատճառով մեր բոլոր ծրագրերը ջուրն ընկան։",
      "exampleEn": "Because of the rain all our plans fell through.",
      "tags": [
        "trouble",
        "work"
      ]
    },
    {
      "idiom": "լեզու գտնել",
      "literal": "to find a language",
      "meaning": "to reach an understanding with someone and get along",
      "equivalent": "to find common ground",
      "example": "Նոր գործընկերներիս հետ արագ լեզու գտա։",
      "exampleEn": "I quickly found common ground with my new colleagues.",
      "tags": [
        "talk",
        "work"
      ]
    },
    {
      "idiom": "ականջները սրել",
      "literal": "to sharpen one's ears",
      "meaning": "to start listening very attentively",
      "equivalent": "to prick up one's ears",
      "example": "Երեխաները ականջները սրած՝ լսում էին տատիկի հեքիաթը։",
      "exampleEn": "The children pricked up their ears and listened to their grandmother's tale.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "քթի տակ ծիծաղել",
      "literal": "to laugh under one's nose",
      "meaning": "to laugh quietly to oneself at someone or something",
      "equivalent": "to laugh up one's sleeve",
      "example": "Նա ոչինչ չասաց, միայն քթի տակ ծիծաղեց։",
      "exampleEn": "He said nothing, he just laughed up his sleeve.",
      "tags": [
        "emotions",
        "talk"
      ]
    },
    {
      "idiom": "ականջը զնգալ",
      "literal": "for one's ear to ring",
      "meaning": "to sense that other people are talking about you",
      "equivalent": "one's ears are burning",
      "example": "Մենք անընդհատ քո մասին ենք խոսում, երևի դրա համար ականջդ է զնգում։",
      "exampleEn": "We keep talking about you, that is probably why your ears are burning.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "ձեռքը բաց լինել",
      "literal": "for one's hand to be open",
      "meaning": "to be generous with money and help",
      "equivalent": "to be open-handed",
      "example": "Պապս միշտ ձեռքը բաց է եղել կարիքավորների հանդեպ։",
      "exampleEn": "My grandfather was always open-handed towards people in need.",
      "tags": [
        "character",
        "money"
      ]
    },
    {
      "idiom": "աչքերը կպչել",
      "literal": "for the eyes to stick together",
      "meaning": "to be so sleepy one can barely stay awake",
      "example": "Այնքան հոգնած եմ, որ աչքերս կպչում են։",
      "exampleEn": "I am so tired that my eyes are closing.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "քամուն տալ",
      "literal": "to give to the wind",
      "meaning": "to waste money or resources on nothing",
      "equivalent": "to throw money down the drain",
      "example": "Նա ամբողջ ժառանգությունը մի քանի տարում քամուն տվեց։",
      "exampleEn": "He threw the whole inheritance down the drain in a few years.",
      "tags": [
        "money",
        "trouble"
      ]
    }
  ],
  "id": [
    {
      "idiom": "kambing hitam",
      "literal": "black goat",
      "meaning": "the person blamed for other people's mistakes",
      "equivalent": "scapegoat",
      "example": "Jangan jadikan saya kambing hitam atas kesalahan tim.",
      "exampleEn": "Do not make me the scapegoat for the team's mistake.",
      "tags": [
        "trouble",
        "character"
      ]
    },
    {
      "idiom": "keras kepala",
      "literal": "hard head",
      "meaning": "stubborn, refusing to listen to anyone",
      "equivalent": "hard-headed",
      "example": "Adiknya keras kepala, dinasihati berkali-kali tetap tidak mau dengar.",
      "exampleEn": "His younger brother is stubborn, he has been told many times and still will not listen.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "naik daun",
      "literal": "rise leaf",
      "meaning": "becoming popular and successful",
      "equivalent": "a rising star",
      "example": "Sejak filmnya sukses, aktor itu semakin naik daun.",
      "exampleEn": "Since his film was a hit, that actor has become more and more popular.",
      "tags": [
        "work"
      ]
    },
    {
      "idiom": "kutu buku",
      "literal": "book louse",
      "meaning": "someone who is always reading",
      "equivalent": "bookworm",
      "example": "Sejak kecil, dia memang kutu buku.",
      "exampleEn": "She has been a bookworm since she was little.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "tangan kanan",
      "literal": "right hand",
      "meaning": "a person's most trusted helper",
      "equivalent": "right-hand man",
      "example": "Pak Budi adalah tangan kanan direktur di perusahaan ini.",
      "exampleEn": "Mr. Budi is the director's right-hand man at this company.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "besar kepala",
      "literal": "big head",
      "meaning": "arrogant, full of yourself after some success",
      "equivalent": "big-headed",
      "example": "Jangan besar kepala dulu, ini baru kemenangan pertama.",
      "exampleEn": "Do not get big-headed yet, this is only our first win.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "kepala dingin",
      "literal": "cold head",
      "meaning": "calm and clear thinking in a tense situation",
      "equivalent": "a cool head",
      "example": "Kita harus menghadapi masalah ini dengan kepala dingin.",
      "exampleEn": "We have to face this problem with a cool head.",
      "tags": [
        "character",
        "emotions"
      ]
    },
    {
      "idiom": "cuci tangan",
      "literal": "to wash hands",
      "meaning": "to refuse any responsibility for something you were part of",
      "equivalent": "wash your hands of it",
      "example": "Setelah proyek gagal, dia malah cuci tangan.",
      "exampleEn": "After the project failed, he just washed his hands of it.",
      "note": "The same two words also mean washing your hands literally, so context decides.",
      "tags": [
        "trouble",
        "work"
      ]
    },
    {
      "idiom": "banting tulang",
      "literal": "to slam bones",
      "meaning": "to work extremely hard, usually to support a family",
      "equivalent": "work your fingers to the bone",
      "example": "Ayahku banting tulang siang malam demi menyekolahkan kami.",
      "exampleEn": "My father worked himself to the bone day and night to keep us in school.",
      "tags": [
        "work",
        "money"
      ]
    },
    {
      "idiom": "gulung tikar",
      "literal": "to roll up the mat",
      "meaning": "to go out of business",
      "equivalent": "go under",
      "example": "Banyak restoran gulung tikar selama pandemi.",
      "exampleEn": "Many restaurants went under during the pandemic.",
      "tags": [
        "money",
        "work"
      ]
    },
    {
      "idiom": "buah tangan",
      "literal": "fruit of the hand",
      "meaning": "a small gift or souvenir brought back from a trip",
      "example": "Aku bawa buah tangan dari Bandung untuk kalian.",
      "exampleEn": "I brought you all a little something from Bandung.",
      "note": "In casual speech people say oleh-oleh, while buah tangan sounds more polite.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "cari muka",
      "literal": "to look for face",
      "meaning": "to act nice to a superior only to win their approval",
      "equivalent": "suck up",
      "example": "Dia selalu cari muka di depan atasannya.",
      "exampleEn": "He is always sucking up to his boss.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "mata duitan",
      "literal": "money eyed",
      "meaning": "caring about nothing but money",
      "example": "Katanya dia mata duitan, cuma mau dekat dengan orang kaya.",
      "exampleEn": "They say she is only after money, she just wants to be around rich people.",
      "note": "Always an accusation, never a neutral description, so it stings.",
      "tags": [
        "money",
        "character"
      ]
    },
    {
      "idiom": "angkat tangan",
      "literal": "to raise the hand",
      "meaning": "to give up because something is beyond you",
      "equivalent": "throw in the towel",
      "example": "Soal matematika ini susah sekali, aku angkat tangan.",
      "exampleEn": "This math problem is far too hard, I give up.",
      "note": "It also means raising your hand literally, so the meaning depends on context.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "gigit jari",
      "literal": "to bite the finger",
      "meaning": "to end up with nothing after expecting something",
      "equivalent": "be left empty-handed",
      "example": "Tiketnya habis dalam lima menit, jadi kami cuma gigit jari.",
      "exampleEn": "The tickets sold out in five minutes, so we were left empty-handed.",
      "tags": [
        "emotions",
        "luck"
      ]
    },
    {
      "idiom": "anak emas",
      "literal": "gold child",
      "meaning": "the clear favorite of a teacher, boss or parent, the one who gets special treatment",
      "example": "Dia anak emas manajer, jadi selalu dapat proyek bagus.",
      "exampleEn": "He is the manager's favorite, so he always gets the good projects.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "buah bibir",
      "literal": "fruit of the lips",
      "meaning": "the person or thing everyone is talking about",
      "equivalent": "the talk of the town",
      "example": "Skandal artis itu jadi buah bibir di mana-mana.",
      "exampleEn": "That celebrity scandal became the talk of the town.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "bermuka dua",
      "literal": "to have two faces",
      "meaning": "friendly to your face and against you behind your back",
      "equivalent": "two-faced",
      "example": "Hati-hati dengan dia, orangnya bermuka dua.",
      "exampleEn": "Be careful with him, he is two-faced.",
      "tags": [
        "character",
        "talk"
      ]
    },
    {
      "idiom": "bertepuk sebelah tangan",
      "literal": "to clap with one hand",
      "meaning": "loving someone who does not love you back",
      "equivalent": "unrequited love",
      "example": "Cintanya bertepuk sebelah tangan karena gadis itu sudah punya pacar.",
      "exampleEn": "His love went unreturned because that girl already had a boyfriend.",
      "tags": [
        "love",
        "emotions"
      ]
    },
    {
      "idiom": "panjang tangan",
      "literal": "long hand",
      "meaning": "in the habit of stealing",
      "equivalent": "sticky fingers",
      "example": "Hati-hati dengan dia, katanya dia panjang tangan.",
      "exampleEn": "Be careful with him, they say he has sticky fingers.",
      "note": "It accuses someone of stealing, so it is not thrown around lightly.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "otak udang",
      "literal": "shrimp brain",
      "meaning": "very slow to understand things",
      "equivalent": "birdbrain",
      "example": "Kamu ini otak udang, disuruh belok kiri malah belok kanan.",
      "exampleEn": "You are such a birdbrain, you were told to turn left and you turned right.",
      "note": "Rude, used only between close friends or in anger.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "gali lubang tutup lubang",
      "literal": "dig a hole, cover a hole",
      "meaning": "taking on a new debt to pay off an old one",
      "equivalent": "rob Peter to pay Paul",
      "example": "Kalau terus gali lubang tutup lubang, utangmu tidak akan pernah lunas.",
      "exampleEn": "If you keep borrowing to cover old debts, you will never pay them off.",
      "tags": [
        "money",
        "trouble"
      ]
    },
    {
      "idiom": "mulut manis",
      "literal": "sweet mouth",
      "meaning": "smooth, pleasant talk used to win someone over",
      "equivalent": "sweet talk",
      "example": "Jangan mudah percaya pada mulut manis penjual itu.",
      "exampleEn": "Do not be so quick to believe that seller's sweet talk.",
      "note": "The verb form bermulut manis is just as common.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "tebal muka",
      "literal": "thick face",
      "meaning": "having no sense of shame",
      "example": "Dasar tebal muka, sudah salah masih saja membantah.",
      "exampleEn": "What a shameless person, he is in the wrong and still argues back.",
      "note": "Not the English thick-skinned, which means able to take criticism. The variant muka tebal is just as common.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "meja hijau",
      "literal": "green table",
      "meaning": "a court of law",
      "example": "Sengketa tanah itu akhirnya diselesaikan di meja hijau.",
      "exampleEn": "That land dispute was finally settled in court.",
      "note": "Mostly newspaper language, everyday speech uses pengadilan. The verb dimejahijaukan means taken to court.",
      "tags": [
        "trouble"
      ]
    }
  ],
  "is": [
    {
      "idiom": "Þetta reddast",
      "literal": "this sorts itself out",
      "meaning": "things will work out fine in the end, so there is no point worrying",
      "example": "Ekki hafa áhyggjur af þessu, þetta reddast alltaf einhvern veginn.",
      "exampleEn": "Do not worry about it, it always works out somehow.",
      "note": "The best known Icelandic saying, treated in Iceland as a national attitude to problems rather than just a phrase.",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "að koma af fjöllum",
      "literal": "to come from the mountains",
      "meaning": "to have no idea what is going on, to know nothing about the matter",
      "equivalent": "be out of the loop",
      "example": "Þegar ég spurði hann um málið kom hann alveg af fjöllum.",
      "exampleEn": "When I asked him about the matter, he had no idea what I was talking about.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "að vera skotinn í einhverjum",
      "literal": "to be shot into someone",
      "meaning": "to be attracted to someone and unable to stop thinking about them",
      "equivalent": "have a crush on someone",
      "example": "Ég held að hann sé skotinn í þér.",
      "exampleEn": "I think he has a crush on you.",
      "note": "Casual everyday speech, used for a light infatuation rather than deep love.",
      "tags": [
        "love",
        "emotions"
      ]
    },
    {
      "idiom": "að rífa kjaft",
      "literal": "to tear jaw",
      "meaning": "to answer back rudely, especially to someone in charge",
      "equivalent": "mouth off",
      "example": "Ekki rífa kjaft við mömmu þína!",
      "exampleEn": "Do not talk back to your mother!",
      "note": "Informal and disapproving, most often said to children or about someone being cheeky.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "að vera úti á þekju",
      "literal": "to be out on the roof",
      "meaning": "to be not paying attention or completely off the point",
      "equivalent": "be miles away",
      "example": "Fyrirgefðu, ég var alveg úti á þekju og heyrði ekki spurninguna.",
      "exampleEn": "Sorry, I was miles away and did not hear the question.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "að slá tvær flugur í einu höggi",
      "literal": "to hit two flies in one blow",
      "meaning": "to solve two problems with a single action",
      "equivalent": "kill two birds with one stone",
      "example": "Með því að hjóla í vinnuna slæ ég tvær flugur í einu höggi.",
      "exampleEn": "By cycling to work I kill two birds with one stone.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "að gera úlfalda úr mýflugu",
      "literal": "to make a camel out of a gnat",
      "meaning": "to treat something tiny as if it were huge",
      "equivalent": "make a mountain out of a molehill",
      "example": "Slappaðu af, þú ert bara að gera úlfalda úr mýflugu.",
      "exampleEn": "Relax, you are just making a mountain out of a molehill.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "að ganga af göflunum",
      "literal": "to go off the gables",
      "meaning": "to lose control completely and go wild",
      "equivalent": "go berserk",
      "example": "Hann gekk af göflunum þegar hann sá reikninginn.",
      "exampleEn": "He went berserk when he saw the bill.",
      "note": "Works both for rage and for a crowd going wild with excitement, so the context decides.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "að taka pokann sinn",
      "literal": "to take one's bag",
      "meaning": "to have to leave a job, pushed out or resigning under pressure",
      "equivalent": "pack one's bags",
      "example": "Forstjórinn þurfti að taka pokann sinn eftir hneykslið.",
      "exampleEn": "The CEO had to pack his bags after the scandal.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "að hafa mörg járn í eldinum",
      "literal": "to have many irons in the fire",
      "meaning": "to have several projects running at the same time",
      "equivalent": "have many irons in the fire",
      "example": "Hún hefur alltaf mörg járn í eldinum.",
      "exampleEn": "She always has a lot of irons in the fire.",
      "tags": [
        "work",
        "time"
      ]
    },
    {
      "idiom": "að vera í essinu sínu",
      "literal": "to be in one's ess",
      "meaning": "to be doing what one is best at and clearly enjoying it",
      "equivalent": "be in one's element",
      "example": "Hann er algjörlega í essinu sínu þegar hann eldar fyrir gesti.",
      "exampleEn": "He is completely in his element when he cooks for guests.",
      "note": "Ess has no meaning of its own in Icelandic. It came in through Danish and goes back to Latin esse, state or condition.",
      "tags": [
        "character",
        "work"
      ]
    },
    {
      "idiom": "að leggja árar í bát",
      "literal": "to lay the oars in the boat",
      "meaning": "to give up and stop trying",
      "equivalent": "throw in the towel",
      "example": "Þrátt fyrir mótlætið ætlar hún ekki að leggja árar í bát.",
      "exampleEn": "Despite the setbacks she is not going to throw in the towel.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "að fara úr öskunni í eldinn",
      "literal": "to go from the ashes into the fire",
      "meaning": "to escape a bad situation and land in a worse one",
      "equivalent": "out of the frying pan into the fire",
      "example": "Hann fór úr öskunni í eldinn þegar hann skipti um vinnu.",
      "exampleEn": "He went out of the frying pan into the fire when he changed jobs.",
      "tags": [
        "trouble",
        "luck"
      ]
    },
    {
      "idiom": "að hafa vaðið fyrir neðan sig",
      "literal": "to have the ford below oneself",
      "meaning": "to take precautions in advance so nothing can go wrong",
      "equivalent": "play it safe",
      "example": "Hann tók afrit af skjölunum til að hafa vaðið fyrir neðan sig.",
      "exampleEn": "He made copies of the documents to be on the safe side.",
      "note": "The picture comes from fording Icelandic rivers, where you keep a crossing point downstream in case the current takes you.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "að vera á nálum",
      "literal": "to be on needles",
      "meaning": "to be tense and anxious while waiting for something",
      "equivalent": "be on pins and needles",
      "example": "Ég var á nálum þar til úrslitin voru tilkynnt.",
      "exampleEn": "I was on pins and needles until the results were announced.",
      "tags": [
        "emotions",
        "time"
      ]
    },
    {
      "idiom": "að kaupa köttinn í sekknum",
      "literal": "to buy the cat in the sack",
      "meaning": "to buy something without checking it and end up with a bad deal",
      "equivalent": "buy a pig in a poke",
      "example": "Skoðaðu bílinn vel áður en þú kaupir hann, annars kaupirðu köttinn í sekknum.",
      "exampleEn": "Look the car over properly before you buy it, or you will be buying a pig in a poke.",
      "tags": [
        "money",
        "trouble"
      ]
    },
    {
      "idiom": "að taka af skarið",
      "literal": "to take off the burnt wick",
      "meaning": "to take the initiative and make the move that gets things going",
      "example": "Einhver verður að taka af skarið og hringja í hana.",
      "exampleEn": "Someone has to take the first step and call her.",
      "note": "Skar is the charred tip of a candle wick, which had to be trimmed off to get a brighter flame.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "að fara á kostum",
      "literal": "to go on one's merits",
      "meaning": "to perform brilliantly, well above the usual level",
      "example": "Leikkonan fór á kostum í aðalhlutverkinu.",
      "exampleEn": "The actress was brilliant in the leading role.",
      "note": "Most often heard in sports commentary and in reviews of performances.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "að bíta á jaxlinn",
      "literal": "to bite on the molar",
      "meaning": "to push through something painful without complaining",
      "equivalent": "grit one's teeth",
      "example": "Hún beit á jaxlinn og kláraði hlaupið þrátt fyrir meiðslin.",
      "exampleEn": "She gritted her teeth and finished the race despite the injury.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "að leggja höfuðið í bleyti",
      "literal": "to lay the head in soak",
      "meaning": "to think hard about a problem",
      "equivalent": "put on one's thinking cap",
      "example": "Við þurfum að leggja höfuðið í bleyti og finna betri lausn.",
      "exampleEn": "We need to put our thinking caps on and find a better solution.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "að draga dilk á eftir sér",
      "literal": "to drag a lamb behind oneself",
      "meaning": "for a matter to bring serious consequences later on",
      "example": "Þetta mál á eftir að draga dilk á eftir sér.",
      "exampleEn": "This matter is going to have serious consequences.",
      "note": "Common in news and formal discussion, much less so in casual chat.",
      "tags": [
        "trouble"
      ]
    },
    {
      "idiom": "Þar stendur hnífurinn í kúnni",
      "literal": "there the knife stands in the cow",
      "meaning": "that is exactly the point where everything is stuck",
      "equivalent": "that is the sticking point",
      "example": "Fjármögnunin er ekki tryggð og þar stendur hnífurinn í kúnni.",
      "exampleEn": "The funding is not secured, and that is the sticking point.",
      "note": "Used as a clause of its own rather than slotted into another sentence.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "að hafa í sig og á",
      "literal": "to have in oneself and on oneself",
      "meaning": "to earn just enough for food and clothes, to get by",
      "equivalent": "make ends meet",
      "example": "Launin duga varla til að hafa í sig og á.",
      "exampleEn": "The wages are barely enough to make ends meet.",
      "note": "Also heard with eiga instead of hafa: að eiga í sig og á.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "að skjóta einhverjum ref fyrir rass",
      "literal": "to shoot a fox past someone's backside",
      "meaning": "to outsmart someone and get the better of them",
      "equivalent": "outfox someone",
      "example": "Hann skaut keppinautunum ref fyrir rass og náði samningnum.",
      "exampleEn": "He outfoxed his competitors and landed the contract.",
      "tags": [
        "character",
        "work"
      ]
    },
    {
      "idiom": "að bera í bakkafullan lækinn",
      "literal": "to carry into the brimful brook",
      "meaning": "to add more of something there is already plenty of",
      "equivalent": "carry coals to Newcastle",
      "example": "Ég veit að þetta er að bera í bakkafullan lækinn, en ég ætla samt að minna á fundinn.",
      "exampleEn": "I know this is carrying coals to Newcastle, but I still want to remind everyone about the meeting.",
      "note": "More at home in writing and formal speech than in casual conversation.",
      "tags": [
        "talk",
        "everyday"
      ]
    }
  ],
  "ka": [
    {
      "idiom": "შენი ჭირიმე",
      "literal": "your trouble be upon me",
      "meaning": "a warm form of address used to soften a request or show affection for the person you are speaking to",
      "example": "შენი ჭირიმე, ერთი წუთით დამელოდე.",
      "exampleEn": "Be a dear and wait for me one minute.",
      "note": "Warm and informal, used with friends, family and children; გენაცვალე works the same way.",
      "tags": [
        "everyday",
        "talk"
      ]
    },
    {
      "idiom": "თვალის დახამხამებაში",
      "literal": "in the blinking of an eye",
      "meaning": "extremely fast, in an instant",
      "equivalent": "in the blink of an eye",
      "example": "ტორტი თვალის დახამხამებაში გაქრა.",
      "exampleEn": "The cake vanished in the blink of an eye.",
      "tags": [
        "time",
        "everyday"
      ]
    },
    {
      "idiom": "ხელი ჩაიქნია",
      "literal": "he waved his hand down",
      "meaning": "to give up on someone or something and stop trying",
      "example": "დიდხანს ვცდილობდი მის დარწმუნებას, მაგრამ ბოლოს ხელი ჩავიქნიე.",
      "exampleEn": "I tried to convince him for a long time, but in the end I gave up.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "თავზარი დაეცა",
      "literal": "terror fell upon him",
      "meaning": "to be struck with shock or dread by something sudden",
      "equivalent": "to be thunderstruck",
      "example": "ეს ამბავი რომ გაიგო, თავზარი დაეცა.",
      "exampleEn": "When he heard the news, he was thunderstruck.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "გულზე მომეშვა",
      "literal": "it eased on my heart",
      "meaning": "to feel relief after worrying about something",
      "equivalent": "a weight off one's mind",
      "example": "როცა დამირეკა და გამაგებინა, რომ ყველაფერი კარგად იყო, გულზე მომეშვა.",
      "exampleEn": "When he called and let me know everything was fine, it was a weight off my mind.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "ცხელ გულზე",
      "literal": "on a hot heart",
      "meaning": "while still worked up, without stopping to think things through",
      "equivalent": "in the heat of the moment",
      "example": "ცხელ გულზე ნუ მიიღებ გადაწყვეტილებას, ხვალ დაფიქრდი.",
      "exampleEn": "Do not make the decision in the heat of the moment, think it over tomorrow.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "გრძელი ენა აქვს",
      "literal": "he has a long tongue",
      "meaning": "talks far too much and says things that were better left unsaid",
      "equivalent": "to have a big mouth",
      "example": "მას არაფერი უნდა გაანდო, გრძელი ენა აქვს.",
      "exampleEn": "You should not confide anything in him, he has a big mouth.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "ორ ცეცხლს შუა ჩავარდნა",
      "literal": "to fall in between two fires",
      "meaning": "to be squeezed from both sides at once, with no good way out",
      "equivalent": "between a rock and a hard place",
      "example": "ორივე მეგობრის დახმარება არ შემიძლია, ორ ცეცხლს შუა ჩავარდნილი ვარ.",
      "exampleEn": "I cannot help both friends, I am caught between a rock and a hard place.",
      "note": "You will also hear ორ ცეცხლს შუა არის and ორ ცეცხლს შუა იწვის.",
      "tags": [
        "trouble"
      ]
    },
    {
      "idiom": "შენს პირს შაქარი",
      "literal": "sugar to your mouth",
      "meaning": "said in reply to good news or a hopeful guess, wishing that it comes true",
      "equivalent": "from your lips to God's ears",
      "example": "ხვალ ალბათ ამინდი გამოსწორდება, შენს პირს შაქარი.",
      "exampleEn": "The weather will probably get better tomorrow. From your lips to God's ears.",
      "tags": [
        "talk",
        "luck"
      ]
    },
    {
      "idiom": "გულზე ლოდი აწევს",
      "literal": "a boulder lies on the heart",
      "meaning": "to be weighed down by worry or grief",
      "equivalent": "to have a heavy heart",
      "example": "ამ ამბის გაგების შემდეგ გულზე ლოდი მაწევს.",
      "exampleEn": "Ever since I heard the news, my heart has been heavy.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "სულს ღაფავს",
      "literal": "he is gasping out his soul",
      "meaning": "to be at death's door; of a thing, to be barely holding on",
      "equivalent": "on its last legs",
      "example": "ჩემი ძველი მანქანა უკვე სულს ღაფავს.",
      "exampleEn": "My old car is already on its last legs.",
      "note": "Used literally of a dying person, so it lands hard when said about people.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "დაბალი ღობეა",
      "literal": "he is a low fence",
      "meaning": "a person everyone finds easy to push around or make fun of",
      "equivalent": "a pushover",
      "example": "კლასში ყველა მასზე ხუმრობს, დაბალი ღობე გახდა.",
      "exampleEn": "Everyone in the class makes fun of him, he has become a pushover.",
      "note": "The picture is a fence so low that anyone can step over it.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "თითიდან გამოწოვილი",
      "literal": "sucked out of a finger",
      "meaning": "made up, with nothing real behind it",
      "equivalent": "made up out of whole cloth",
      "example": "ეს ბრალდება თითიდან გამოწოვილია.",
      "exampleEn": "This accusation is made up out of whole cloth.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "ცეცხლზე ნავთის დასხმა",
      "literal": "pouring kerosene onto the fire",
      "meaning": "to make an already tense situation even worse",
      "equivalent": "to add fuel to the fire",
      "example": "მისი სიტყვები უბრალოდ ცეცხლზე ნავთის დასხმა იყო.",
      "exampleEn": "His words just added fuel to the fire.",
      "note": "ცეცხლზე ზეთის დასხმა (pouring oil on the fire) is also heard, but ნავთი is the wording the dictionaries record.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "სად ყოფილა ძაღლის თავი დამარხული",
      "literal": "so that is where the dog's head was buried",
      "meaning": "that turns out to be the hidden reason behind the whole trouble",
      "example": "აი, სად ყოფილა ძაღლის თავი დამარხული, ჩვენი მეზობელი ყოფილა დამნაშავე.",
      "exampleEn": "So that is where the real reason lay, it turns out our neighbour was to blame.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "ფეხს ითრევს",
      "literal": "he drags his foot",
      "meaning": "to be slow and unwilling about something and keep putting it off",
      "equivalent": "to drag one's feet",
      "example": "მთელი თვეა ფეხს ითრევენ და ანგარიში ჯერ არ დაუწერიათ.",
      "exampleEn": "They have been dragging their feet for a whole month and still have not written the report.",
      "tags": [
        "work"
      ]
    },
    {
      "idiom": "კუდი ყავარზე აქვს გადებული",
      "literal": "he has his tail laid over the roof shingle",
      "meaning": "to be conceited and full of self importance",
      "equivalent": "to be too big for one's boots",
      "example": "პატარა წარმატებას მიაღწია და უკვე კუდი ყავარზე აქვს გადებული.",
      "exampleEn": "He had one small success and is already too big for his boots.",
      "note": "ყავარი is the split wooden shingle of a village roof, so the picture is rural and openly mocking.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "კვირაში შვიდი პარასკევი აქვს",
      "literal": "he has seven Fridays in a week",
      "meaning": "keeps changing his mind and never sticks to a decision",
      "equivalent": "to blow hot and cold",
      "example": "მას კვირაში შვიდი პარასკევი აქვს, დღეს ერთს გეტყვის, ხვალ მეორეს.",
      "exampleEn": "He blows hot and cold, today he tells you one thing and tomorrow another.",
      "note": "დღეში შვიდი პარასკევი აქვს (seven Fridays in a day) is the same phrase with the exaggeration turned up.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "მეცამეტე გოჭი",
      "literal": "the thirteenth piglet",
      "meaning": "someone who pushes into a matter nobody asked them to join",
      "example": "ყველგან თავს იჩენს, როგორც მეცამეტე გოჭი.",
      "exampleEn": "He turns up everywhere, like the thirteenth piglet.",
      "note": "Colloquial and openly mocking.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "ჩიტმა ამბავი მომიტანა",
      "literal": "a bird brought me the news",
      "meaning": "said playfully when you have found out about someone's mischief but will not say who told you",
      "equivalent": "a little bird told me",
      "example": "ჩიტმა ამბავი მომიტანა, გუშინ გაკვეთილი რომ გააცდინე.",
      "exampleEn": "A little bird told me you skipped your lesson yesterday.",
      "note": "Usually said to a child who has just been found out.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "ბედნიერ ვარსკვლავზეა დაბადებული",
      "literal": "he was born on a lucky star",
      "meaning": "to be an unusually fortunate person",
      "equivalent": "born under a lucky star",
      "example": "ის ყოველთვის იგებს ლატარიაში, ალბათ ბედნიერ ვარსკვლავზეა დაბადებული.",
      "exampleEn": "He always wins the lottery, he must have been born under a lucky star.",
      "note": "Dictionaries mark it as a little old fashioned, but it is still understood everywhere.",
      "tags": [
        "luck",
        "character"
      ]
    },
    {
      "idiom": "ყვავი ჩხიკვის მამიდაა",
      "literal": "the crow is the jay's aunt",
      "meaning": "said of someone who is a relative in name only, with no real family tie",
      "example": "ის ჩემი ნათესავია, მაგრამ ისეთი შორეული, ყვავი ჩხიკვის მამიდააო.",
      "exampleEn": "He is a relative of mine, but such a distant one that it hardly counts.",
      "note": "Often quoted in full as the proverb ყვავი ჩხიკვის მამიდაო, გაფრინდა და წავიდაო.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "არც მწვადი დაიწვება, არც შამფური",
      "literal": "neither will the mtsvadi burn, nor the skewer",
      "meaning": "to settle a delicate matter so that nothing is spoiled and nobody is offended",
      "example": "საქმე ისე უნდა მოვაგვაროთ, რომ არც მწვადი დაიწვას და არც შამფური.",
      "exampleEn": "We have to handle it so that neither the meat nor the skewer gets burnt.",
      "note": "მწვადი is Georgian meat grilled on a skewer, the centrepiece of any feast, which is why the image lands.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "ჩაილურის წყალი დალია",
      "literal": "it drank the water of Chailuri",
      "meaning": "it came to nothing and was forgotten, gone for good",
      "equivalent": "to go down the drain",
      "example": "ფული, რომელიც მას ვასესხე, ჩაილურის წყალი დალია.",
      "exampleEn": "The money I lent him went straight down the drain.",
      "note": "Chailuri is an old place name in Kakheti, so the phrase sounds bookish and a bit old fashioned.",
      "tags": [
        "money",
        "trouble"
      ]
    }
  ],
  "kk": [
    {
      "idiom": "Көзді ашып-жұмғанша",
      "literal": "before opening and closing the eye",
      "meaning": "instantly, in a moment",
      "equivalent": "in the blink of an eye",
      "example": "Балалар көзді ашып-жұмғанша үйден шығып кетті.",
      "exampleEn": "The children were out of the house in the blink of an eye.",
      "tags": [
        "time",
        "everyday"
      ]
    },
    {
      "idiom": "Тіл табысу",
      "literal": "to find a language with each other",
      "meaning": "to reach an understanding with someone, to get along",
      "equivalent": "to find common ground",
      "example": "Жаңа көршілерімізбен бірден тіл табысып кеттік.",
      "exampleEn": "We found common ground with our new neighbours right away.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "Көз бояу",
      "literal": "to paint the eye",
      "meaning": "deception, putting up a false front to hide the real state of things",
      "equivalent": "to pull the wool over someone's eyes",
      "example": "Бұл жиналыс көз бояудан басқа ешнәрсе емес.",
      "exampleEn": "This meeting is nothing but window dressing.",
      "note": "Common in news and political commentary, where it is the usual term for a deceptive show.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "Тайға таңба басқандай",
      "literal": "like a brand stamped on a colt",
      "meaning": "completely clear and obvious to everyone",
      "equivalent": "as plain as day",
      "example": "Оның кінәлі екені тайға таңба басқандай.",
      "exampleEn": "It is as plain as day that he is guilty.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "Көз қырын салу",
      "literal": "to cast the corner of one's eye",
      "meaning": "to watch over someone or something, to give attention to it now and then",
      "equivalent": "to keep an eye on",
      "example": "Мен дүкенге барып қайтқанша, балаларға көз қырыңды сала жүр.",
      "exampleEn": "Keep an eye on the children while I go to the shop and back.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "Жүрегі алып ұшты",
      "literal": "his heart took flight",
      "meaning": "to be gripped by strong feeling, with one's heart pounding",
      "equivalent": "one's heart skipped a beat",
      "example": "Түнде телефон шырылдағанда жүрегім алып ұшты.",
      "exampleEn": "When the phone rang in the night my heart skipped a beat.",
      "note": "Works for fright and for joyful excitement alike, so the context decides which one is meant.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Төбесі көкке жетті",
      "literal": "the crown of his head reached the sky",
      "meaning": "to be overjoyed at good news or an achievement, to feel on top of the world",
      "equivalent": "to be on cloud nine",
      "example": "Ұлым емтиханды үздік тапсырып, төбесі көкке жетті.",
      "exampleEn": "My son passed the exam with top marks and was on cloud nine.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Қолы қолына жұқпады",
      "literal": "his hand didn't stick to his hand",
      "meaning": "to work fast and without a break, to have one's hands completely full",
      "equivalent": "to be rushed off one's feet",
      "example": "Той қарсаңында анамның қолы қолына жұқпай кетті.",
      "exampleEn": "In the run-up to the wedding my mother was rushed off her feet.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "Атүсті қарау",
      "literal": "to look at from horseback",
      "meaning": "to deal with something superficially, without proper attention",
      "example": "Тапсырмаға атүсті қарамай, мұқият орында.",
      "exampleEn": "Do not treat the task superficially, do it carefully.",
      "note": "Атүсті is spelled as one word and also stands alone as an adverb meaning hastily or on the surface.",
      "tags": [
        "work"
      ]
    },
    {
      "idiom": "Ит арқасы қиянда",
      "literal": "the dog's back is in a distant place",
      "meaning": "very far away, hard to get to",
      "equivalent": "in the middle of nowhere",
      "example": "Ата-анам тұратын ауыл қаладан ит арқасы қиянда жатыр.",
      "exampleEn": "The village where my parents live is out in the middle of nowhere, far from the city.",
      "note": "Informal in tone and a little dismissive about the place, so it suits conversation better than official writing.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "Бетінен оты шықты",
      "literal": "fire came out of his face",
      "meaning": "to be deeply embarrassed, to burn with shame",
      "example": "Қателескенін білгенде бетінен оты шықты.",
      "exampleEn": "When he realised he had made a mistake he burned with shame.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Мұрнын шүйіру",
      "literal": "to wrinkle one's nose",
      "meaning": "to treat something as beneath one, to show disdain",
      "equivalent": "to turn up one's nose",
      "example": "Ол ұсынысымызға мұрнын шүйірді.",
      "exampleEn": "He turned up his nose at our offer.",
      "tags": [
        "character",
        "emotions"
      ]
    },
    {
      "idiom": "Жұмған аузын ашпау",
      "literal": "not to open one's closed mouth",
      "meaning": "to stay completely silent, to say nothing at all",
      "example": "Ол бүкіл жиналыс бойы жұмған аузын ашпады.",
      "exampleEn": "He did not say a single word during the whole meeting.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "Қой аузынан шөп алмас",
      "literal": "won't take grass from a sheep's mouth",
      "meaning": "extremely meek, gentle and harmless",
      "equivalent": "wouldn't hurt a fly",
      "example": "Асан қой аузынан шөп алмас момын жігіт.",
      "exampleEn": "Asan is such a gentle young man that he would not hurt a fly.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "Ит пен мысықтай",
      "literal": "like a dog and a cat",
      "meaning": "constantly quarrelling with each other",
      "equivalent": "to fight like cat and dog",
      "example": "Көршілер ит пен мысықтай өмір сүреді.",
      "exampleEn": "The neighbours fight like cat and dog.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "Жерден жеті қоян тапқандай",
      "literal": "as if he had found seven hares on the ground",
      "meaning": "wild with delight, unable to contain one's joy",
      "example": "Әкесі ойыншық сатып әперген соң, бала жерден жеті қоян тапқандай қуанып қалды.",
      "exampleEn": "After his father bought him the toy, the boy was beside himself with joy.",
      "note": "Usually completed by a verb of rejoicing such as қуану, which follows the phrase.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Жүрек жұтқан",
      "literal": "one who has swallowed a heart",
      "meaning": "fearless and daring, afraid of nothing",
      "equivalent": "to have nerves of steel",
      "example": "Тек жүрек жұтқан адам ғана мұндай шешім қабылдайды.",
      "exampleEn": "Only a person with nerves of steel makes a decision like that.",
      "note": "Normally placed before the noun it describes, as in жүрек жұтқан жігіт.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "Аузымен орақ ору",
      "literal": "to reap with one's mouth",
      "meaning": "to boast and promise a lot while doing nothing",
      "equivalent": "to be all talk and no action",
      "example": "Ол аузымен орақ орады, ал іске келгенде ештеңе тындырмайды.",
      "exampleEn": "He is all talk, but when it comes to doing the work he gets nothing done.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "Тісін қайрау",
      "literal": "to sharpen one's teeth",
      "meaning": "to hold a grudge against someone and wait for a chance to get even",
      "equivalent": "to have it in for someone",
      "example": "Бастық сол оқиғадан кейін маған тісін қайрап жүр.",
      "exampleEn": "The boss has had it in for me ever since that incident.",
      "tags": [
        "trouble",
        "emotions"
      ]
    },
    {
      "idiom": "Қолы ашық",
      "literal": "his hand is open",
      "meaning": "generous, ready to give and to host others",
      "equivalent": "open-handed",
      "example": "Атам қолы ашық жан еді, келген қонақты құр жібермейтін.",
      "exampleEn": "My grandfather was an open-handed man, he never let a guest leave empty-handed.",
      "tags": [
        "money",
        "character"
      ]
    },
    {
      "idiom": "Ит терісін басына қаптау",
      "literal": "to pull a dog's hide over someone's head",
      "meaning": "to scold someone furiously, throwing their fault in their face",
      "equivalent": "to give someone hell",
      "example": "Кешігіп келгені үшін бастығы оның ит терісін басына қаптады.",
      "exampleEn": "His boss gave him hell for turning up late.",
      "note": "Harsh and informal, it describes a real dressing-down, so it is used about people rather than to their face.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "Екі аяғын бір етікке тығу",
      "literal": "to stuff both legs into one boot",
      "meaning": "to press someone hard and leave them no room to move",
      "equivalent": "to put the screws on someone",
      "example": "Мерзім жақындаған сайын бастық екі аяғымызды бір етікке тығып жатыр.",
      "exampleEn": "As the deadline gets closer the boss is putting the screws on us.",
      "tags": [
        "trouble",
        "work"
      ]
    },
    {
      "idiom": "Аузы дуалы",
      "literal": "his mouth is blessed",
      "meaning": "said of a respected person whose words and blessings are believed to come true",
      "example": "Аузы дуалы қария батасын берді.",
      "exampleEn": "The elder whose words carry weight gave his blessing.",
      "note": "Tied to the custom of asking an elder for a bata (blessing), so it marks real social authority and is high praise.",
      "tags": [
        "character",
        "talk"
      ]
    },
    {
      "idiom": "Қырық пышақ болды",
      "literal": "became forty knives",
      "meaning": "to fall out badly and become bitter enemies",
      "equivalent": "to be at daggers drawn",
      "example": "Ағайынды екеуі мұра үшін қырық пышақ болды.",
      "exampleEn": "The two brothers ended up at daggers drawn over the inheritance.",
      "tags": [
        "trouble"
      ]
    },
    {
      "idiom": "Ағаштан түйін түйген",
      "literal": "one who tied a knot out of wood",
      "meaning": "a highly skilled craftsman who can do what looks impossible",
      "example": "Атам ағаштан түйін түйген шебер еді.",
      "exampleEn": "My grandfather was a craftsman who could work wonders with his hands.",
      "note": "Elevated praise, used mostly about traditional craftsmen rather than in everyday chat.",
      "tags": [
        "work",
        "character"
      ]
    }
  ],
  "ky": [
    {
      "idiom": "Ачып көздү жумганча",
      "literal": "by the time you open and shut your eye",
      "meaning": "instantly, in a single moment",
      "equivalent": "in the blink of an eye",
      "example": "Ачып көздү жумганча, ал бөлмөдөн чыгып кетти.",
      "exampleEn": "In the blink of an eye, he was out of the room.",
      "tags": [
        "time",
        "everyday"
      ]
    },
    {
      "idiom": "Колу ачык",
      "literal": "his hand is open",
      "meaning": "generous, free with money and help",
      "equivalent": "open-handed",
      "example": "Атабыз колу ачык, дайыма кедейлерге жардам берет.",
      "exampleEn": "Our father is generous, he always helps people in need.",
      "tags": [
        "character",
        "money"
      ]
    },
    {
      "idiom": "Ак көңүл",
      "literal": "white heart",
      "meaning": "kind and sincere, without bad intentions",
      "equivalent": "a heart of gold",
      "example": "Кошунабыз ак көңүл, ар дайым жардамга даяр.",
      "exampleEn": "Our neighbour has a heart of gold, always ready to help.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "Ичи тар",
      "literal": "his inside is narrow",
      "meaning": "envious and petty, unable to be glad for others",
      "example": "Ичи тар киши башканын ийгилигине кубана албайт.",
      "exampleEn": "An envious person cannot be happy about someone else's success.",
      "tags": [
        "character",
        "emotions"
      ]
    },
    {
      "idiom": "Жини келүү",
      "literal": "his jinn comes",
      "meaning": "to get angry or irritated at someone",
      "example": "Кечигип келгениме жетекчинин жини келди.",
      "exampleEn": "The manager got angry because I came in late.",
      "note": "Жин is an evil spirit in folk belief, so the anger is pictured as a spirit taking hold of the person.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Мойнуна алуу",
      "literal": "to take onto one's own neck",
      "meaning": "to admit or confess something, to take responsibility",
      "equivalent": "to own up",
      "example": "Ал өз катасын мойнуна алды.",
      "exampleEn": "He owned up to his mistake.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "Көз жумуу",
      "literal": "to close one's eyes",
      "meaning": "to die",
      "equivalent": "to pass away",
      "example": "Чоң атам өткөн жылы көз жумду.",
      "exampleEn": "My grandfather passed away last year.",
      "note": "A respectful euphemism, the normal way to speak about a death in polite or written Kyrgyz.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "Тил табышуу",
      "literal": "to find a tongue with each other",
      "meaning": "to reach mutual understanding, to get along",
      "equivalent": "to find common ground",
      "example": "Экөө акыры тил табышып, чогуу иштеп калышты.",
      "exampleEn": "The two of them finally found common ground and started working together.",
      "tags": [
        "talk",
        "work"
      ]
    },
    {
      "idiom": "Күн көрүү",
      "literal": "to see the day",
      "meaning": "to make a living, to support oneself",
      "equivalent": "to get by",
      "example": "Ал кичинекей дүкөн ачып, ошону менен күн көрөт.",
      "exampleEn": "He opened a small shop and makes his living from it.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "Төбөсү көккө жетүү",
      "literal": "the top of his head reaches the sky",
      "meaning": "to be overjoyed or bursting with pride about something",
      "equivalent": "over the moon",
      "example": "Экзаменден өткөнүн укканда, төбөсү көккө жетти.",
      "exampleEn": "When he heard he had passed the exam, he was over the moon.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Жүрөгү түшүү",
      "literal": "his heart falls",
      "meaning": "to be suddenly badly frightened",
      "equivalent": "to jump out of one's skin",
      "example": "Капысынан жарылган добушту угуп, анын жүрөгү түштү.",
      "exampleEn": "He nearly jumped out of his skin when he heard the sudden bang.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Суу жүрөк",
      "literal": "water heart",
      "meaning": "a coward, someone who loses nerve easily",
      "equivalent": "chicken-hearted",
      "example": "Ал арстанды көрөрү менен качып кетти, суу жүрөк экен.",
      "exampleEn": "He ran off the moment he saw the lion, what a coward.",
      "tags": [
        "character",
        "emotions"
      ]
    },
    {
      "idiom": "Кой оозунан чөп албаган",
      "literal": "wouldn't take grass from a sheep's mouth",
      "meaning": "extremely meek, quiet and harmless",
      "equivalent": "wouldn't hurt a fly",
      "example": "Ал өтө жоош, кой оозунан чөп албаган бала.",
      "exampleEn": "He is very gentle, a boy who wouldn't hurt a fly.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "Боору таш",
      "literal": "his liver is stone",
      "meaning": "merciless, showing no pity",
      "equivalent": "to have a heart of stone",
      "example": "Ал өтө боору таш, жалынганга да ырайым кылбайт.",
      "exampleEn": "He has a heart of stone, he shows no mercy even when people beg him.",
      "note": "In Kyrgyz the liver, not the heart, is the seat of compassion.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "Эки көзү төрт болуу",
      "literal": "his two eyes become four",
      "meaning": "to long for someone or something, to wait impatiently",
      "equivalent": "to wait with bated breath",
      "example": "Апам мени эки көзү төрт болуп күтүп отуруптур.",
      "exampleEn": "It turned out my mother had been sitting there waiting impatiently for me.",
      "tags": [
        "emotions",
        "time"
      ]
    },
    {
      "idiom": "Жанындай көрүү",
      "literal": "to see someone as dear as one's own soul",
      "meaning": "to cherish someone very dearly",
      "equivalent": "to think the world of someone",
      "example": "Чоң энем небересин жанындай көрөт.",
      "exampleEn": "My grandmother thinks the world of her grandson.",
      "tags": [
        "love",
        "emotions"
      ]
    },
    {
      "idiom": "Садага кетейин",
      "literal": "let me go as a sacrifice for you",
      "meaning": "a warm term of endearment, roughly my dear or sweetheart",
      "example": "Садага кетейин, ыйлаба эми.",
      "exampleEn": "My dear, please stop crying.",
      "note": "Deeply affectionate and culturally loaded, said mostly to children and close family, often by older women.",
      "tags": [
        "love",
        "talk"
      ]
    },
    {
      "idiom": "Бир жакадан баш, бир жеңден кол чыгаруу",
      "literal": "to put heads through one collar and hands through one sleeve",
      "meaning": "to act in complete unity, as one body",
      "equivalent": "to pull together",
      "example": "Кыйын учурда эл бир жакадан баш, бир жеңден кол чыгарышы керек.",
      "exampleEn": "In hard times the people have to pull together as one.",
      "tags": [
        "work"
      ]
    },
    {
      "idiom": "Кара кылды как жарган",
      "literal": "splits a black hair right down the middle",
      "meaning": "scrupulously fair and impartial",
      "example": "Судьябыз кара кылды как жарган адам.",
      "exampleEn": "Our judge is a scrupulously fair man.",
      "note": "It is praise, so do not read it like the English \"to split hairs\", which means to quibble.",
      "tags": [
        "character",
        "work"
      ]
    },
    {
      "idiom": "Кой терисин жамынган",
      "literal": "wrapped in a sheep's hide",
      "meaning": "someone who hides bad intentions behind a friendly face",
      "equivalent": "a wolf in sheep's clothing",
      "example": "Жылмайып жүргөнү менен, ал кой терисин жамынган душман экен.",
      "exampleEn": "For all his smiling, he turned out to be an enemy in sheep's clothing.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "Карга карганын көзүн чукубайт",
      "literal": "a crow does not gouge out another crow's eye",
      "meaning": "people of the same kind protect each other and won't turn against their own",
      "equivalent": "dog does not eat dog",
      "example": "Чиновниктер бирин-бири коргойт, карга карганын көзүн чукубайт да.",
      "exampleEn": "Officials cover for each other, a crow does not gouge out another crow's eye.",
      "note": "This is a макал (full proverb) rather than a short phrase, and it usually carries a bitter dig at corruption.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "Ташка тамга баскандай",
      "literal": "as if a seal were stamped onto a stone",
      "meaning": "clearly and exactly, leaving nothing vague",
      "equivalent": "to a T",
      "example": "Уста жумушту ташка тамга баскандай так аткарды.",
      "exampleEn": "The craftsman did the job to a T.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "Бел чечпей иштөө",
      "literal": "to work without undoing one's belt",
      "meaning": "to work without rest, day and night",
      "equivalent": "to work around the clock",
      "example": "Дыйкандар түшүм маалында бел чечпей иштешет.",
      "exampleEn": "Farmers work around the clock during the harvest.",
      "tags": [
        "work",
        "time"
      ]
    },
    {
      "idiom": "Ит өлгөн жер",
      "literal": "the place where a dog died",
      "meaning": "an extremely remote, out of the way place",
      "equivalent": "the middle of nowhere",
      "example": "Ал айыл ит өлгөн жерде жайгашкан.",
      "exampleEn": "That village is in the middle of nowhere.",
      "note": "Informal and slightly dismissive, fine among friends but not in polite conversation about someone's home.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "Оозунан ак ит кирип, кара ит чыгуу",
      "literal": "a white dog goes into his mouth and a black dog comes out",
      "meaning": "to pour out foul language, to curse and swear furiously",
      "equivalent": "to swear like a trooper",
      "example": "Урушуп жатып, оозунан ак ит кирип, кара ит чыкты.",
      "exampleEn": "In the middle of the argument he was swearing his head off.",
      "note": "Harsh and vivid, said about other people's foul language rather than one's own.",
      "tags": [
        "talk",
        "trouble"
      ]
    }
  ],
  "lt": [
    {
      "idiom": "sukti galvą",
      "literal": "to twist the head",
      "meaning": "to think hard about a problem, to puzzle over something",
      "equivalent": "rack one's brains",
      "example": "Visą vakarą sukau galvą, kaip išspręsti šią užduotį.",
      "exampleEn": "I spent the whole evening racking my brains over how to solve this task.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "nuleisti rankas",
      "literal": "to lower the hands",
      "meaning": "to give up and stop trying after losing heart",
      "equivalent": "throw in the towel",
      "example": "Nenuleisk rankų, dar turi laiko viską ištaisyti.",
      "exampleEn": "Don't give up, you still have time to put everything right.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "kaip du vandens lašai",
      "literal": "like two drops of water",
      "meaning": "exactly alike, indistinguishable from each other",
      "equivalent": "like two peas in a pod",
      "example": "Dvynukai panašūs kaip du vandens lašai.",
      "exampleEn": "The twins are like two peas in a pod.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "laikyti liežuvį už dantų",
      "literal": "to hold the tongue behind the teeth",
      "meaning": "to keep quiet and not give a secret away",
      "equivalent": "hold one's tongue",
      "example": "Apie tai geriau laikyk liežuvį už dantų.",
      "exampleEn": "You had better hold your tongue about that.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "kaip žuvis vandenyje",
      "literal": "like a fish in water",
      "meaning": "completely at ease, doing what one is good at",
      "equivalent": "in one's element",
      "example": "Scenoje jis jaučiasi kaip žuvis vandenyje.",
      "exampleEn": "On stage he feels completely in his element.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "žiūrėti pro pirštus",
      "literal": "to look through the fingers",
      "meaning": "to ignore something on purpose, to let it slide",
      "equivalent": "turn a blind eye",
      "example": "Mokytoja kartais žiūri pro pirštus į smulkius pažeidimus.",
      "exampleEn": "The teacher sometimes turns a blind eye to minor rule-breaking.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "vėjas galvoje",
      "literal": "wind in the head",
      "meaning": "frivolous and scatterbrained, not thinking about anything serious",
      "example": "Jam dar vėjas galvoje, apie ateitį visai negalvoja.",
      "exampleEn": "He is still scatterbrained, he doesn't think about the future at all.",
      "note": "Usually said about young people, often with more affection than real criticism.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "laikyti kumščius",
      "literal": "to hold fists",
      "meaning": "to wish someone luck before something important",
      "equivalent": "keep one's fingers crossed",
      "example": "Rytoj tavo egzaminas, laikysiu už tave kumščius.",
      "exampleEn": "Your exam is tomorrow, I'll keep my fingers crossed for you.",
      "note": "Lithuanians squeeze their fists instead of crossing their fingers, so the gesture differs from the English one.",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "šaukštai po pietų",
      "literal": "spoons after lunch",
      "meaning": "too late to be of any use now",
      "equivalent": "too little, too late",
      "example": "Dabar atsiprašinėti jau šaukštai po pietų.",
      "exampleEn": "Apologizing now is too little, too late.",
      "tags": [
        "time",
        "trouble"
      ]
    },
    {
      "idiom": "kišti nosį į svetimus reikalus",
      "literal": "to stick the nose into other people's affairs",
      "meaning": "to meddle in things that are none of one's business",
      "equivalent": "poke one's nose into someone's business",
      "example": "Nemandagu kišti nosį į svetimus reikalus.",
      "exampleEn": "It's rude to poke your nose into other people's business.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "kaip ant delno",
      "literal": "like on the palm",
      "meaning": "in full view, perfectly clear or visible",
      "equivalent": "plain as day",
      "example": "Nuo bokšto miestas matėsi kaip ant delno.",
      "exampleEn": "From the tower the city lay in full view.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "iš piršto laužti",
      "literal": "to break something out of a finger",
      "meaning": "to make something up with no basis in fact",
      "equivalent": "pull something out of thin air",
      "example": "Ta istorija visiškai iš piršto laužta, nieko panašaus nebuvo.",
      "exampleEn": "That story is completely made up, nothing of the sort happened.",
      "note": "Most often heard in the passive form iš piršto laužtas, said of a story or an accusation.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "nertis iš kailio",
      "literal": "to slip out of one's own hide",
      "meaning": "to try as hard as one possibly can",
      "equivalent": "bend over backwards",
      "example": "Jis neriasi iš kailio, kad viršininkas jį pastebėtų.",
      "exampleEn": "He is bending over backwards to get his boss to notice him.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "sukasi ant liežuvio galo",
      "literal": "it is spinning on the tip of the tongue",
      "meaning": "almost remembered but not quite coming out",
      "equivalent": "on the tip of one's tongue",
      "example": "Jo pavardė man sukasi ant liežuvio galo, bet niekaip neprisimenu.",
      "exampleEn": "His surname is on the tip of my tongue, but I just can't remember it.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "pūsti miglą į akis",
      "literal": "to blow fog into the eyes",
      "meaning": "to mislead someone and cover up the truth",
      "equivalent": "pull the wool over someone's eyes",
      "example": "Nebandyk man pūsti miglos į akis, aš žinau tiesą.",
      "exampleEn": "Don't try to pull the wool over my eyes, I know the truth.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "sudurti galą su galu",
      "literal": "to join one end with the other end",
      "meaning": "to have just enough money to cover the basics",
      "equivalent": "make ends meet",
      "example": "Su tokia alga sunku sudurti galą su galu.",
      "exampleEn": "It's hard to make ends meet on a salary like that.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "kaip perkūnas iš giedro dangaus",
      "literal": "like thunder from a clear sky",
      "meaning": "completely unexpected, with no warning at all",
      "equivalent": "out of the blue",
      "example": "Ta žinia mus užklupo kaip perkūnas iš giedro dangaus.",
      "exampleEn": "The news hit us out of the blue.",
      "tags": [
        "trouble",
        "emotions"
      ]
    },
    {
      "idiom": "vienas kaip pirštas",
      "literal": "alone like a finger",
      "meaning": "completely alone, with no family or friends around",
      "example": "Po persikraustymo jis liko vienas kaip pirštas.",
      "exampleEn": "After the move he was left completely on his own.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "pinigai slysta pro pirštus",
      "literal": "money slides through the fingers",
      "meaning": "money disappears fast, however much of it comes in",
      "equivalent": "money slips through one's fingers",
      "example": "Jis uždirba daug, bet pinigai slysta pro pirštus.",
      "exampleEn": "He earns a lot, but the money just slips through his fingers.",
      "tags": [
        "money"
      ]
    },
    {
      "idiom": "žadėti aukso kalnus",
      "literal": "to promise mountains of gold",
      "meaning": "to promise far more than one can actually deliver",
      "equivalent": "promise the moon",
      "example": "Prieš rinkimus politikai visada žada aukso kalnus.",
      "exampleEn": "Before elections politicians always promise the moon.",
      "tags": [
        "talk",
        "money"
      ]
    },
    {
      "idiom": "kišti pagalius į ratus",
      "literal": "to stick sticks into the wheels",
      "meaning": "to obstruct something on purpose",
      "equivalent": "put a spoke in someone's wheel",
      "example": "Kolega nuolat kiša pagalius į ratus, todėl projektas stringa.",
      "exampleEn": "A colleague keeps getting in the way, so the project is stalling.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "kirsti šaką, ant kurios sėdi",
      "literal": "to cut the branch one is sitting on",
      "meaning": "to damage one's own position through one's own actions",
      "equivalent": "shoot oneself in the foot",
      "example": "Meluodamas viršininkui, jis kerta šaką, ant kurios sėdi.",
      "exampleEn": "By lying to his boss he is shooting himself in the foot.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "pilti iš tuščio į kiaurą",
      "literal": "to pour from an empty vessel into a leaky one",
      "meaning": "to keep discussing the same thing without getting anywhere",
      "equivalent": "go round in circles",
      "example": "Nustokime pilti iš tuščio į kiaurą ir pagaliau priimkime sprendimą.",
      "exampleEn": "Let's stop going round in circles and finally make a decision.",
      "tags": [
        "talk",
        "work"
      ]
    },
    {
      "idiom": "ne mano kiaulės, ne mano pupos",
      "literal": "not my pigs, not my beans",
      "meaning": "it is none of my concern and I am not getting involved",
      "equivalent": "not my circus, not my monkeys",
      "example": "Tegul patys aiškinasi, ne mano kiaulės, ne mano pupos.",
      "exampleEn": "Let them sort it out themselves, not my circus, not my monkeys.",
      "note": "Folksy and rather blunt, so it sounds callous if the matter is actually serious.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "gyventi kaip inkstas taukuose",
      "literal": "to live like a kidney in fat",
      "meaning": "to live very comfortably and without worries",
      "equivalent": "live in clover",
      "example": "Persikėlęs pas tetą, jis gyvena kaip inkstas taukuose.",
      "exampleEn": "Since he moved in with his aunt, he has been living in clover.",
      "note": "The picture is of a kidney sitting in its layer of fat; the variant vartosi kaip inkstas taukuose is just as common.",
      "tags": [
        "money",
        "everyday"
      ]
    }
  ],
  "lv": [
    {
      "idiom": "turēt īkšķus",
      "literal": "to hold thumbs",
      "meaning": "to wish someone luck and hope things go well for them",
      "equivalent": "keep one's fingers crossed",
      "example": "Rīt man ir eksāmens, turi īkšķus par mani!",
      "exampleEn": "I have an exam tomorrow, keep your fingers crossed for me!",
      "note": "Latvians hold their thumbs inside a fist instead of crossing their fingers, so the gesture is different from the English one.",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "lauzīt galvu",
      "literal": "to break one's head",
      "meaning": "to think long and hard about a difficult problem",
      "equivalent": "rack one's brains",
      "example": "Visu vakaru lauzīju galvu, kā atrisināt šo uzdevumu.",
      "exampleEn": "I racked my brains all evening over how to solve this problem.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "likt aiz auss",
      "literal": "to put behind the ear",
      "meaning": "to take careful note of something and keep it in mind",
      "example": "Ieliec šo padomu labi aiz auss!",
      "exampleEn": "Take good note of this advice and keep it in mind!",
      "tags": [
        "everyday",
        "talk"
      ]
    },
    {
      "idiom": "zelta rokas",
      "literal": "golden hands",
      "meaning": "great skill at making and fixing things by hand",
      "example": "Mūsu kaimiņam ir zelta rokas, viņš salabo jebko.",
      "exampleEn": "Our neighbour has a real gift with his hands, he can fix anything.",
      "tags": [
        "character",
        "work"
      ]
    },
    {
      "idiom": "pa galvu pa kaklu",
      "literal": "by the head, by the neck",
      "meaning": "in a wild hurry, without stopping to think",
      "example": "Viņš pa galvu pa kaklu izskrēja no mājas un aizmirsa atslēgas.",
      "exampleEn": "He rushed out of the house in a mad hurry and forgot his keys.",
      "note": "Colloquial, at home in everyday speech but out of place in formal writing.",
      "tags": [
        "time",
        "everyday"
      ]
    },
    {
      "idiom": "lāča pakalpojums",
      "literal": "a bear's favour",
      "meaning": "help that is well meant but only makes things worse",
      "example": "Ar savu iejaukšanos viņš izdarīja lāča pakalpojumu.",
      "exampleEn": "By stepping in he did more harm than good.",
      "note": "The image comes from a fable in which a bear kills his sleeping friend while trying to swat a fly off his face.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "runāt caur puķēm",
      "literal": "to talk through flowers",
      "meaning": "to speak vaguely and indirectly instead of saying something plainly",
      "equivalent": "beat around the bush",
      "example": "Nerunā caur puķēm, saki taisni, ko domā!",
      "exampleEn": "Do not beat around the bush, say plainly what you think!",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "pirkt kaķi maisā",
      "literal": "to buy a cat in a sack",
      "meaning": "to buy or agree to something without checking what you are actually getting",
      "equivalent": "buy a pig in a poke",
      "example": "Pirkt auto bez apskates nozīmē pirkt kaķi maisā.",
      "exampleEn": "Buying a car without inspecting it means buying a pig in a poke.",
      "tags": [
        "money",
        "trouble"
      ]
    },
    {
      "idiom": "strādāt kā zirgs",
      "literal": "to work like a horse",
      "meaning": "to work extremely hard for a long stretch",
      "equivalent": "work like a horse",
      "example": "Visu vasaru viņš strādāja kā zirgs, lai sakrātu naudu studijām.",
      "exampleEn": "He worked like a horse all summer to save up money for his studies.",
      "tags": [
        "work"
      ]
    },
    {
      "idiom": "vazāt aiz deguna",
      "literal": "to drag someone by the nose",
      "meaning": "to deceive someone and keep them waiting for something that never comes",
      "equivalent": "string someone along",
      "example": "Viņi mani vazāja aiz deguna veselu mēnesi un tā arī nesamaksāja.",
      "exampleEn": "They strung me along for a whole month and never paid.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "sist dūri galdā",
      "literal": "to strike a fist on the table",
      "meaning": "to assert yourself forcefully and state a demand with authority",
      "equivalent": "put one's foot down",
      "example": "Beidzot viņš sita dūri galdā un pateica, ko domā.",
      "exampleEn": "He finally put his foot down and said what he thought.",
      "tags": [
        "character",
        "talk"
      ]
    },
    {
      "idiom": "palaist gar ausīm",
      "literal": "to let past one's ears",
      "meaning": "to ignore what someone says on purpose",
      "equivalent": "turn a deaf ear",
      "example": "Viņš visus brīdinājumus palaida gar ausīm.",
      "exampleEn": "He turned a deaf ear to all the warnings.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "sēdēt kā uz adatām",
      "literal": "to sit as if on needles",
      "meaning": "to be very anxious, restless, or impatient",
      "equivalent": "be on pins and needles",
      "example": "Pirms eksāmena rezultātiem viņa sēdēja kā uz adatām.",
      "exampleEn": "She was on pins and needles before the exam results.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "augt kā sēnes pēc lietus",
      "literal": "to grow like mushrooms after rain",
      "meaning": "to appear and multiply very fast and in large numbers",
      "equivalent": "spring up like mushrooms",
      "example": "Pēdējā laikā pilsētā kafejnīcas aug kā sēnes pēc lietus.",
      "exampleEn": "Lately cafes have been springing up like mushrooms all over the city.",
      "tags": [
        "everyday",
        "time"
      ]
    },
    {
      "idiom": "celt degunu gaisā",
      "literal": "to lift one's nose into the air",
      "meaning": "to act arrogantly and treat other people as beneath you",
      "equivalent": "put on airs",
      "example": "Kopš viņš dabūja paaugstinājumu, viņš ceļ degunu gaisā.",
      "exampleEn": "Ever since he got his promotion he has been putting on airs.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "mest naudu vējā",
      "literal": "to throw money to the wind",
      "meaning": "to waste money on things that are not worth it",
      "equivalent": "throw money down the drain",
      "example": "Pērkot lietas, kas nav vajadzīgas, tu vienkārši met naudu vējā.",
      "exampleEn": "When you buy things you do not need, you are just throwing money down the drain.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "akmens novēlās no sirds",
      "literal": "a stone rolled off the heart",
      "meaning": "to feel huge relief once a worry is over",
      "equivalent": "a weight off one's mind",
      "example": "Kad uzzināju, ka visi ir sveiki, man kā akmens novēlās no sirds.",
      "exampleEn": "When I found out everyone was safe, it was a weight off my mind.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "iet kā pa sviestu",
      "literal": "to go as if through butter",
      "meaning": "to go very smoothly, with no snags at all",
      "equivalent": "go like clockwork",
      "example": "Pēc pāris mēģinājumiem darbs gāja kā pa sviestu.",
      "exampleEn": "After a couple of tries the work went like clockwork.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "pūst pīlītes",
      "literal": "to blow little ducks",
      "meaning": "to make things up and pass them off as true",
      "equivalent": "spin a yarn",
      "example": "Neklausies viņā, viņš atkal pūš pīlītes.",
      "exampleEn": "Do not listen to him, he is spinning yarns again.",
      "note": "Informal and a bit mocking, fine among friends but not in serious conversation.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "būt uz nažiem",
      "literal": "to be on knives",
      "meaning": "to be in open hostility with someone",
      "equivalent": "be at daggers drawn",
      "example": "Kopš tā strīda brāļi ir uz nažiem.",
      "exampleEn": "Ever since that argument the brothers have been at daggers drawn.",
      "tags": [
        "trouble",
        "character"
      ]
    },
    {
      "idiom": "griezt zobus",
      "literal": "to grind one's teeth",
      "meaning": "to be furious at someone and want to take revenge",
      "equivalent": "bear a grudge",
      "example": "Kaimiņš joprojām griež zobus par pagājušā gada strīdu.",
      "exampleEn": "The neighbour still bears a grudge over last year's argument.",
      "note": "The same words also describe grinding your teeth in your sleep, which is in fact the more frequent sense, so the context decides.",
      "tags": [
        "emotions",
        "character"
      ]
    },
    {
      "idiom": "kā sniegs uz galvas",
      "literal": "like snow on the head",
      "meaning": "happening completely suddenly, with no warning",
      "equivalent": "out of the blue",
      "example": "Viņa ciemos atbrauca kā sniegs uz galvas, nemaz nepiezvanot.",
      "exampleEn": "She turned up for a visit out of the blue, without even calling.",
      "tags": [
        "everyday",
        "time"
      ]
    },
    {
      "idiom": "sirds kā uz delnas",
      "literal": "heart as if on the palm",
      "meaning": "being completely open and sincere with people",
      "equivalent": "wear one's heart on one's sleeve",
      "example": "Viņai sirds kā uz delnas, viņa nekad neko neslēpj.",
      "exampleEn": "She wears her heart on her sleeve, she never hides anything.",
      "note": "Also heard as ar sirdi uz delnas and in the fuller form izlikt sirdi uz delnas, meaning to open up completely to someone.",
      "tags": [
        "character",
        "emotions"
      ]
    }
  ],
  "mk": [
    {
      "idiom": "фаќа магла",
      "literal": "to catch fog",
      "meaning": "to flee or vanish suddenly, especially to dodge a duty or trouble",
      "equivalent": "make oneself scarce",
      "example": "Штом требаше да ја плати сметката, тој фати магла.",
      "exampleEn": "The moment he had to pay the bill, he made himself scarce.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "бере гајле",
      "literal": "to gather worry",
      "meaning": "to worry, to fret over something",
      "example": "Не бери гајле, работите ќе се средат.",
      "exampleEn": "Don't worry, things will sort themselves out.",
      "note": "Гајле is a Turkish loanword, and the negative form не бери гајле is by far the most common use.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "прави од мува слон",
      "literal": "to make an elephant out of a fly",
      "meaning": "to exaggerate something small into something huge",
      "equivalent": "make a mountain out of a molehill",
      "example": "Само доцнев десет минути, не прави од мува слон.",
      "exampleEn": "I was only ten minutes late, don't make a mountain out of a molehill.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "му дојде преку глава",
      "literal": "it came to him over the head",
      "meaning": "to have reached the limit of what one can put up with",
      "equivalent": "have had it up to here",
      "example": "Ми дојде преку глава од нивните вечни оправдувања.",
      "exampleEn": "I have had it up to here with their endless excuses.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "влече за нос",
      "literal": "to pull by the nose",
      "meaning": "to keep someone hoping while deceiving them",
      "equivalent": "string someone along",
      "example": "Веќе месеци ме влече за нос со празни ветувања.",
      "exampleEn": "He has been stringing me along with empty promises for months.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "гледа низ прсти",
      "literal": "to look through fingers",
      "meaning": "to deliberately overlook someone's faults",
      "equivalent": "turn a blind eye",
      "example": "Таткото им гледа низ прсти на децата за нивните мали лаги.",
      "exampleEn": "The father turns a blind eye to his children's little lies.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "тера мајтап",
      "literal": "to drive a joke",
      "meaning": "to joke around with someone, to tease them",
      "equivalent": "pull someone's leg",
      "example": "Не се лути, само терам мајтап со тебе.",
      "exampleEn": "Don't get upset, I'm just pulling your leg.",
      "note": "Мајтап is a Turkish loanword, very informal, fine among friends but out of place in writing.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "како гром од ведро небо",
      "literal": "like thunder from a clear sky",
      "meaning": "completely unexpected, with no warning at all",
      "equivalent": "a bolt from the blue",
      "example": "Веста за неговото заминување дојде како гром од ведро небо.",
      "exampleEn": "The news of his departure came like a bolt from the blue.",
      "tags": [
        "everyday",
        "trouble"
      ]
    },
    {
      "idiom": "виси на конец",
      "literal": "to hang on a thread",
      "meaning": "to be in a precarious situation that could collapse at any moment",
      "equivalent": "hang by a thread",
      "example": "По операцијата, неговиот живот висеше на конец.",
      "exampleEn": "After the surgery, his life hung by a thread.",
      "tags": [
        "trouble"
      ]
    },
    {
      "idiom": "тепа време",
      "literal": "to beat time",
      "meaning": "to pass idle time with nothing useful to do",
      "equivalent": "kill time",
      "example": "Го чекав автобусот и тепав време на телефонот.",
      "exampleEn": "I was waiting for the bus and killing time on my phone.",
      "tags": [
        "time",
        "everyday"
      ]
    },
    {
      "idiom": "фаќа око",
      "literal": "to catch the eye",
      "meaning": "to stand out and draw attention",
      "equivalent": "catch the eye",
      "example": "Овој фустан навистина фаќа око.",
      "exampleEn": "This dress really catches the eye.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "си ги мие рацете",
      "literal": "to wash one's hands",
      "meaning": "to refuse any further responsibility for something",
      "equivalent": "wash one's hands of something",
      "example": "Кога проектот пропадна, тој си ги изми рацете и нè остави сами.",
      "exampleEn": "When the project fell apart, he washed his hands of it and left us on our own.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "ја открива Америка",
      "literal": "to discover America",
      "meaning": "to announce something obvious as if it were a big discovery",
      "example": "Штотуку ми кажа дека зимата е студена, како да ја откри Америка.",
      "exampleEn": "He just told me that winter is cold, as if he had discovered America.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "фаќа сеир",
      "literal": "to catch a spectacle",
      "meaning": "to stand by and enjoy the show while someone else is in trouble",
      "example": "Кога избувна караницата, соседите излегоа само да фаќаат сеир.",
      "exampleEn": "When the argument broke out, the neighbours came out just to enjoy the show.",
      "note": "Сеир is a Turkish loanword, and the phrase has a gossipy, mocking ring to it.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "му падна камен од срце",
      "literal": "a stone fell off his heart",
      "meaning": "to feel sudden relief once a worry is over",
      "equivalent": "a weight off one's shoulders",
      "example": "Кога слушнав дека стигнала безбедно, ми падна камен од срце.",
      "exampleEn": "When I heard she had arrived safely, it was a weight off my shoulders.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "ни лук јал, ни лук мирисал",
      "literal": "neither ate garlic nor smelled garlic",
      "meaning": "to have had absolutely nothing to do with something",
      "example": "Кога го прашаа за парите, тој рече дека ни лук јал, ни лук мирисал.",
      "exampleEn": "When they asked him about the money, he said he had nothing at all to do with it.",
      "note": "The verb forms are old reported-past forms, so the phrase stays fixed and never changes shape.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "капка во морето",
      "literal": "a drop in the sea",
      "meaning": "an amount far too small to make any difference",
      "equivalent": "a drop in the ocean",
      "example": "Тие пари се само капка во морето за толкав долг.",
      "exampleEn": "That money is just a drop in the ocean against a debt that size.",
      "tags": [
        "money"
      ]
    },
    {
      "idiom": "игла во стог сено",
      "literal": "needle in a stack of hay",
      "meaning": "something practically impossible to find",
      "equivalent": "a needle in a haystack",
      "example": "Да го најдеш вистинскиот клуч во таа фиока е како да бараш игла во стог сено.",
      "exampleEn": "Finding the right key in that drawer is like looking for a needle in a haystack.",
      "tags": [
        "everyday",
        "trouble"
      ]
    },
    {
      "idiom": "живее како бубрег во лој",
      "literal": "to live like a kidney in fat",
      "meaning": "to live in complete comfort, with everything one needs",
      "equivalent": "live in clover",
      "example": "Откако се пресели кај вујко си, живее како бубрег во лој.",
      "exampleEn": "Since he moved in with his uncle, he has been living in clover.",
      "note": "Usually said with a hint of envy about someone who has it easy.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "коски и кожа",
      "literal": "bones and skin",
      "meaning": "extremely thin, wasted away",
      "equivalent": "skin and bone",
      "example": "По болеста остана само коски и кожа.",
      "exampleEn": "After the illness he was nothing but skin and bone.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "се врти како мачка околу врела каша",
      "literal": "to circle like a cat around hot porridge",
      "meaning": "to circle around a topic without getting to the point",
      "equivalent": "beat around the bush",
      "example": "Кажи ми директно, не врти како мачка околу врела каша.",
      "exampleEn": "Just tell me straight, stop beating around the bush.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "нашол кој да збори",
      "literal": "found who to talk",
      "meaning": "said to someone who criticises a fault they have themselves",
      "equivalent": "look who's talking",
      "example": "Ти ми велиш дека доцнам? Нашол кој да збори!",
      "exampleEn": "You're telling me I'm late? Look who's talking!",
      "note": "Sharp and confrontational, so it belongs in an argument rather than in polite conversation.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "фрла прашина во очи",
      "literal": "to throw dust into the eyes",
      "meaning": "to create a false impression so people miss the real situation",
      "equivalent": "pull the wool over someone's eyes",
      "example": "Со тие бројки само им фрлаат прашина во очите на гласачите.",
      "exampleEn": "With those figures they are just pulling the wool over the voters' eyes.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "му падна секирата во мед",
      "literal": "his axe fell into honey",
      "meaning": "to land an unexpected stroke of good fortune",
      "equivalent": "hit the jackpot",
      "example": "Со таа работа му падна секирата во мед.",
      "exampleEn": "With that job he really hit the jackpot.",
      "note": "The image comes from old honey hunters whose axe would break into a hollow full of wild honey.",
      "tags": [
        "luck",
        "work"
      ]
    }
  ],
  "mn": [
    {
      "idiom": "толгой эргэх",
      "literal": "the head spins",
      "meaning": "to feel dizzy, or to be confused and overwhelmed",
      "equivalent": "one's head is spinning",
      "example": "Хийх ажил хэт олон болохоор толгой эргээд байна.",
      "exampleEn": "There is so much work to do that my head is spinning.",
      "note": "It also has the plain physical sense of dizziness, so context decides which reading applies.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "нүүр улайх",
      "literal": "the face reddens",
      "meaning": "to feel ashamed or embarrassed",
      "example": "Тэр багшийн асуултад хариулж чадаагүйдээ нүүр улайв.",
      "exampleEn": "He went red with embarrassment because he could not answer the teacher's question.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "ам алдах",
      "literal": "to let the mouth slip",
      "meaning": "to blurt something out, to give away a secret by accident",
      "equivalent": "to let something slip",
      "example": "Нууцыг хэлэхгүй гэж амласан ч тэр амаа алдаж, бүгдийг ярьчихсан.",
      "exampleEn": "He promised not to tell the secret, but he let it slip and told everyone.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "нүд булаах",
      "literal": "to seize the eyes",
      "meaning": "to be visually striking, to draw everyone's attention",
      "equivalent": "to catch the eye",
      "example": "Дэлгүүрийн цонхон дахь шинэ хувцас хүн бүрийн нүдийг булаав.",
      "exampleEn": "The new clothes in the shop window caught everyone's eye.",
      "note": "The adjective form нүд булаам (eye-catching) is even more common, especially in advertising.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "гар сунгах",
      "literal": "to extend a hand",
      "meaning": "to help someone out, to offer support",
      "equivalent": "to lend a hand",
      "example": "Хүнд байдалд орсон найздаа гараа сунгаж туслав.",
      "exampleEn": "She lent a hand to a friend who was in a difficult spot.",
      "tags": [
        "everyday",
        "character"
      ]
    },
    {
      "idiom": "нүд ирмэхийн зуур",
      "literal": "in the span of one blink of the eyes",
      "meaning": "in an instant, extremely quickly",
      "equivalent": "in the blink of an eye",
      "example": "Зун нүд ирмэхийн зуур өнгөрчихлөө.",
      "exampleEn": "The summer went by in the blink of an eye.",
      "tags": [
        "time"
      ]
    },
    {
      "idiom": "сэтгэл нийлэх",
      "literal": "for the hearts to merge",
      "meaning": "to get on easily with someone, to be of one mind",
      "equivalent": "to hit it off",
      "example": "Тэд хоёр анх танилцсан цагаасаа сэтгэл нийлж, дотны найз болсон.",
      "exampleEn": "The two of them hit it off from the day they first met and became close friends.",
      "tags": [
        "character",
        "love"
      ]
    },
    {
      "idiom": "хийморь сэргэх",
      "literal": "the wind horse revives",
      "meaning": "for a person's luck and spirits to pick up",
      "example": "Шинэ ажилд орсноос хойш түүний хийморь сэргэлээ.",
      "exampleEn": "Since he started the new job, his luck has picked up.",
      "note": "Хийморь (wind horse) is a Buddhist and shamanic idea of personal fortune and vitality, so the phrase carries real cultural weight.",
      "tags": [
        "luck",
        "emotions"
      ]
    },
    {
      "idiom": "гар татах",
      "literal": "to pull back the hand",
      "meaning": "to be stingy, to hold back help or money",
      "equivalent": "to be tight-fisted",
      "example": "Мөнгө хэрэгтэй үед ах нь гараа татчихдаг.",
      "exampleEn": "Whenever money is needed, his older brother holds back.",
      "tags": [
        "money",
        "character"
      ]
    },
    {
      "idiom": "нэг сумаар хоёр туулай буудах",
      "literal": "to shoot two hares with one arrow",
      "meaning": "to achieve two goals with a single action",
      "equivalent": "to kill two birds with one stone",
      "example": "Тэр хотод ажлын хэргээр очоод, замдаа найзтайгаа ч уулзаж, нэг сумаар хоёр туулай буудлаа.",
      "exampleEn": "He went to the city on business and met a friend on the way, killing two birds with one stone.",
      "tags": [
        "work"
      ]
    },
    {
      "idiom": "толгой гашилгах",
      "literal": "to sour the head",
      "meaning": "to worry at a problem, to think something over and over",
      "equivalent": "to rack one's brains",
      "example": "Ийм өчүүхэн юман дээр толгойгоо гашилгаад яах юм бэ.",
      "exampleEn": "Why rack your brains over such a small thing?",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "ханцуй шамлах",
      "literal": "to turn up the sleeves",
      "meaning": "to set about a job with energy",
      "equivalent": "to roll up one's sleeves",
      "example": "Бүгдээрээ ханцуйгаа шамлаад цэвэрлэгээнд оролцлоо.",
      "exampleEn": "We all rolled up our sleeves and joined the cleanup.",
      "tags": [
        "work"
      ]
    },
    {
      "idiom": "гар хоосон байх",
      "literal": "to have an empty hand",
      "meaning": "to be broke, or to come away with nothing",
      "equivalent": "empty-handed",
      "example": "Ажлаас халагдаад тэр гар хоосон гэртээ харив.",
      "exampleEn": "After losing his job he went home empty-handed.",
      "tags": [
        "money",
        "trouble"
      ]
    },
    {
      "idiom": "чихэнд хүрэх",
      "literal": "to reach the ear",
      "meaning": "for news or a rumor to get through to someone",
      "equivalent": "to reach someone's ears",
      "example": "Тэдний хоорондын маргаан удалгүй даргын чихэнд хүрчээ.",
      "exampleEn": "Their argument soon reached the boss's ears.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "хөл газар хүрэхгүй байх",
      "literal": "for the feet not to touch the ground",
      "meaning": "to be overjoyed",
      "equivalent": "to walk on air",
      "example": "Шалгалтандаа тэнцсэн мэдээ сонсоод тэр хөл нь газар хүрэхгүй байв.",
      "exampleEn": "When she heard she had passed the exam, she was walking on air.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "зүрх алдах",
      "literal": "to lose the heart",
      "meaning": "to be startled, to get a sudden fright",
      "equivalent": "to jump out of one's skin",
      "example": "Гэнэт хашгирахад нь би зүрхээ алдав.",
      "exampleEn": "He shouted all of a sudden and I nearly jumped out of my skin.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "нүүр өгөх",
      "literal": "to give face",
      "meaning": "to indulge someone, to let them get away with too much",
      "example": "Хүүхдэдээ хэт нүүр өгвөл дараа нь хэцүү болно.",
      "exampleEn": "If you indulge your child too much, it gets hard later on.",
      "note": "It also has a neutral sense of being warm and welcoming towards someone, so the spoiling reading comes from the context.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "гартаа атгах",
      "literal": "to grip in one's own hand",
      "meaning": "to keep firm personal control over something",
      "equivalent": "to hold the reins",
      "example": "Компанийн бүх шийдвэрийг тэрээр гартаа атгадаг.",
      "exampleEn": "He keeps every decision in the company in his own hands.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "нойр хулжих",
      "literal": "sleep bolts away",
      "meaning": "to be unable to sleep, to lie awake",
      "example": "Маргаашийн ярилцлагыг бодсоор нойр минь хулжлаа.",
      "exampleEn": "I kept thinking about tomorrow's interview and sleep would not come.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "ам ангайх",
      "literal": "the mouth gapes open",
      "meaning": "to be dumbfounded, to stare in amazement",
      "equivalent": "one's jaw drops",
      "example": "Түүнийг дуулахад бүгд ам ангайн сууж байлаа.",
      "exampleEn": "When she sang, everyone sat there with their mouths open.",
      "note": "It also has a plain sense of simply opening your mouth to speak, so the amazement reading depends on context.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "нүд бүлтийх",
      "literal": "the eyes bulge",
      "meaning": "to be utterly astonished, wide eyed with shock",
      "equivalent": "one's eyes pop out",
      "example": "Үнийг сонсоод түүний нүд бүлтийв.",
      "exampleEn": "When he heard the price, his eyes nearly popped out.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "ам таглах",
      "literal": "to plug the mouth",
      "meaning": "to leave someone with nothing to say, to silence them",
      "example": "Түүний асуулт бүгдийн амыг таглав.",
      "exampleEn": "His question left everyone with nothing to say.",
      "note": "Forceful: it says the other side was shut up rather than answered, and it is often used about silencing critics.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "зүрх шимшрэх",
      "literal": "the heart smarts",
      "meaning": "to be pained by pity or grief",
      "equivalent": "one's heart aches",
      "example": "Гудамжинд тэнэж яваа нохдыг хараад зүрх шимшрэв.",
      "exampleEn": "Seeing the stray dogs on the street made my heart ache.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "нүд хужирлах",
      "literal": "to salt the eyes",
      "meaning": "to enjoy the sight of something, to look one's fill",
      "equivalent": "to feast one's eyes",
      "example": "Үзэсгэлэнгээр орж нүдээ хужирлалаа.",
      "exampleEn": "I went round the exhibition and feasted my eyes.",
      "note": "Хужир is the salty earth that livestock lick, so the image is of the eyes being given a treat.",
      "tags": [
        "everyday",
        "emotions"
      ]
    }
  ],
  "ms": [
    {
      "idiom": "makan angin",
      "literal": "to eat wind",
      "meaning": "to go out for fresh air or take a short trip for pleasure",
      "example": "Setiap petang Ahad, kami suka makan angin di tepi pantai.",
      "exampleEn": "Every Sunday afternoon we like to go out for a stroll by the beach.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "cari makan",
      "literal": "to look for food",
      "meaning": "to earn a living",
      "equivalent": "to put food on the table",
      "example": "Ramai penduduk kampung merantau ke bandar untuk cari makan.",
      "exampleEn": "Many villagers leave for the city to earn a living.",
      "tags": [
        "money",
        "work"
      ]
    },
    {
      "idiom": "naik angin",
      "literal": "the wind rises",
      "meaning": "to lose one's temper",
      "equivalent": "to blow one's top",
      "example": "Ayah terus naik angin apabila melihat bilik anak-anak yang berselerak itu.",
      "exampleEn": "Dad blew his top the moment he saw the children's messy room.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "buah hati",
      "literal": "fruit of the liver",
      "meaning": "someone dearly loved, a sweetheart or a treasured child",
      "equivalent": "the apple of one's eye",
      "example": "Cucu sulung itu memang buah hati nenek.",
      "exampleEn": "That eldest grandchild really is grandma's darling.",
      "tags": [
        "love",
        "emotions"
      ]
    },
    {
      "idiom": "buah tangan",
      "literal": "fruit of the hand",
      "meaning": "a small gift or souvenir brought back from a trip",
      "example": "Jangan lupa bawa buah tangan untuk emak apabila kamu pulang dari Langkawi.",
      "exampleEn": "Do not forget to bring a souvenir for mum when you come back from Langkawi.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "kepala batu",
      "literal": "stone head",
      "meaning": "stubborn, refusing to listen to advice",
      "equivalent": "pig-headed",
      "example": "Memang kepala batu anak itu, sudah dinasihati berkali-kali masih degil.",
      "exampleEn": "That child really is pig-headed, he has been given advice again and again and is still stubborn.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "campur tangan",
      "literal": "to mix hands",
      "meaning": "to interfere in something, especially in other people's affairs",
      "example": "Jangan campur tangan dalam urusan rumah tangga orang lain.",
      "exampleEn": "Do not interfere in other people's family affairs.",
      "note": "Also used neutrally in news and official language, as in campur tangan kerajaan, government intervention.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "cuci mata",
      "literal": "to wash the eyes",
      "meaning": "to enjoy looking at something pleasant, such as scenery, shop windows or good-looking people",
      "equivalent": "to feast one's eyes",
      "example": "Kami pergi ke pusat membeli-belah hujung minggu ini sekadar untuk cuci mata.",
      "exampleEn": "We went to the shopping mall this weekend just to window shop.",
      "note": "Playful and informal, and when it means looking at attractive people it sounds cheeky, so keep it among friends.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "makan hati",
      "literal": "to eat the liver",
      "meaning": "to feel deeply hurt or resentful because of what someone said or did",
      "example": "Dia makan hati apabila dikritik di hadapan semua rakan sekerja.",
      "exampleEn": "She was deeply hurt when she was criticised in front of all her colleagues.",
      "note": "In Malay the liver (hati), not the heart, is the seat of feeling, which is why so many idioms are built on it.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "kaki ayam",
      "literal": "chicken foot",
      "meaning": "barefoot",
      "example": "Anak-anak kampung itu berlari kaki ayam di padang selepas hujan turun.",
      "exampleEn": "The village children ran barefoot on the field after the rain.",
      "note": "Watch the context, because on a menu kaki ayam simply means chicken feet.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "besar kepala",
      "literal": "big head",
      "meaning": "arrogant and conceited, especially after a bit of success",
      "equivalent": "big-headed",
      "example": "Baru menang satu pertandingan, dia sudah besar kepala.",
      "exampleEn": "He has won just one competition and he is already big-headed.",
      "note": "Dictionaries give a second sense, stubborn and unwilling to listen, so let the context decide.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "cakap besar",
      "literal": "to speak big",
      "meaning": "to boast, to promise far more than you can deliver",
      "equivalent": "to talk big",
      "example": "Jangan cakap besar kalau kerja pun belum siap.",
      "exampleEn": "Do not talk big when the work is not even finished.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "tebal muka",
      "literal": "thick face",
      "meaning": "shameless, untroubled by criticism or embarrassment",
      "equivalent": "thick-skinned",
      "example": "Memang tebal muka lelaki itu, sudah ditegur berkali-kali masih buat perangai yang sama.",
      "exampleEn": "That man really is shameless, he has been told off many times and still behaves the same way.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "kecil hati",
      "literal": "small liver",
      "meaning": "to feel hurt or slighted by what someone did",
      "equivalent": "to take something to heart",
      "example": "Dia kecil hati kerana tidak dijemput ke majlis itu.",
      "exampleEn": "She felt slighted because she was not invited to the event.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "otak udang",
      "literal": "shrimp brain",
      "meaning": "slow-witted, unable to think things through",
      "equivalent": "bird-brained",
      "example": "Jangan kata orang otak udang hanya kerana dia buat satu kesilapan kecil.",
      "exampleEn": "Do not call someone bird-brained just because he made one small mistake.",
      "note": "A real insult, fine as a joke between close friends but rude to anyone else.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "mata duitan",
      "literal": "money eyes",
      "meaning": "money-minded, valuing people and things only by what they are worth",
      "example": "Jangan berkahwin dengan lelaki yang mata duitan, nanti kau sendiri yang menderita.",
      "exampleEn": "Do not marry a man who cares only about money, or you will be the one who suffers.",
      "tags": [
        "money",
        "character"
      ]
    },
    {
      "idiom": "banting tulang",
      "literal": "to slam down one's bones",
      "meaning": "to work extremely hard, usually to support a family",
      "equivalent": "to work one's fingers to the bone",
      "example": "Ayah banting tulang siang malam untuk menyekolahkan kami.",
      "exampleEn": "Dad worked his fingers to the bone day and night to put us through school.",
      "note": "In careful writing it takes the prefix, membanting tulang.",
      "tags": [
        "work",
        "money"
      ]
    },
    {
      "idiom": "jaga tepi kain orang",
      "literal": "to guard the edge of other people's sarong",
      "meaning": "to pry into other people's private affairs",
      "equivalent": "to poke one's nose into other people's business",
      "example": "Sudahlah, jangan jaga tepi kain orang.",
      "exampleEn": "That is enough, do not poke your nose into other people's business.",
      "note": "Almost always used as a telling off, with jangan (do not) in front of it.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "buah mulut",
      "literal": "fruit of the mouth",
      "meaning": "the thing everyone is gossiping about",
      "equivalent": "the talk of the town",
      "example": "Kisah perceraian pasangan artis itu menjadi buah mulut orang ramai minggu ini.",
      "exampleEn": "The story of that celebrity couple's divorce is the talk of the town this week.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "ada udang di sebalik batu",
      "literal": "there is a shrimp behind the rock",
      "meaning": "there is a hidden motive behind someone's kindness or words",
      "equivalent": "to smell a rat",
      "example": "Tiba-tiba dia baik sangat dengan kita, mesti ada udang di sebalik batu.",
      "exampleEn": "He is suddenly being so nice to us, there must be a hidden motive.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "kepala angin",
      "literal": "wind head",
      "meaning": "moody and unpredictable, switching mood without warning",
      "example": "Susah nak agak perangainya, memang kepala angin orangnya, kejap baik kejap marah.",
      "exampleEn": "His temper is hard to predict, he really is a moody sort, friendly one minute and angry the next.",
      "tags": [
        "character",
        "emotions"
      ]
    },
    {
      "idiom": "gulung tikar",
      "literal": "to roll up the mat",
      "meaning": "to go out of business",
      "equivalent": "to go bust",
      "example": "Kedai runcit itu terpaksa gulung tikar selepas dua tahun beroperasi.",
      "exampleEn": "That grocery shop had to close down after two years in business.",
      "tags": [
        "money",
        "work"
      ]
    },
    {
      "idiom": "panjang tangan",
      "literal": "long hand",
      "meaning": "in the habit of stealing",
      "equivalent": "light-fingered",
      "example": "Kedai itu memasang kamera keselamatan kerana ada pekerja yang panjang tangan.",
      "exampleEn": "The shop installed security cameras because one of the workers was light-fingered.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "makan garam",
      "literal": "to eat salt",
      "meaning": "to have a great deal of life experience",
      "equivalent": "to have been around the block",
      "example": "Dengarlah nasihatnya, dia sudah lama makan garam dalam perniagaan ini.",
      "exampleEn": "Listen to his advice, he has plenty of experience in this business.",
      "note": "Often expanded to sudah banyak makan garam, and said of someone older than you.",
      "tags": [
        "time",
        "character"
      ]
    },
    {
      "idiom": "kaki botol",
      "literal": "bottle foot",
      "meaning": "a heavy drinker",
      "example": "Jiran sebelah rumah itu terkenal sebagai kaki botol.",
      "exampleEn": "The neighbour next door is known as a heavy drinker.",
      "note": "Kaki plus a noun labels a habitual doer (kaki judi is a gambler), and the label is always disapproving.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "hangat-hangat tahi ayam",
      "literal": "warm, warm chicken droppings",
      "meaning": "keen at the start and then quickly losing interest",
      "equivalent": "a flash in the pan",
      "example": "Azamnya untuk bersenam setiap hari hangat-hangat tahi ayam sahaja.",
      "exampleEn": "His resolve to exercise every day was just a flash in the pan.",
      "note": "The image is crude, but the phrase is completely ordinary and taught in schools.",
      "tags": [
        "character",
        "time"
      ]
    }
  ],
  "nl": [
    {
      "idiom": "iets in de gaten houden",
      "literal": "to hold something in the holes",
      "meaning": "to watch something closely",
      "equivalent": "keep an eye on something",
      "example": "De politie houdt het pand al weken in de gaten.",
      "exampleEn": "The police have been keeping an eye on the building for weeks.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "de knoop doorhakken",
      "literal": "to cut through the knot",
      "meaning": "to make the final decision after a lot of doubt",
      "example": "Na lang twijfelen hakte ze eindelijk de knoop door.",
      "exampleEn": "After a lot of hesitation she finally made the decision.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "iets onder de knie hebben",
      "literal": "to have something under the knee",
      "meaning": "to have mastered something",
      "equivalent": "get the hang of something",
      "example": "Na veel oefenen heeft ze het Nederlands onder de knie.",
      "exampleEn": "After a lot of practice she has got the hang of Dutch.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "de handen uit de mouwen steken",
      "literal": "to stick the hands out of the sleeves",
      "meaning": "to get down to work and put in real effort",
      "equivalent": "roll up your sleeves",
      "example": "Genoeg vergaderd, tijd om de handen uit de mouwen te steken.",
      "exampleEn": "Enough meetings, time to roll up our sleeves.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "ergens geen kaas van gegeten hebben",
      "literal": "to have eaten no cheese of something",
      "meaning": "to know nothing about a subject",
      "equivalent": "not know the first thing about something",
      "example": "Vraag mij niets over auto's, daar heb ik geen kaas van gegeten.",
      "exampleEn": "Do not ask me anything about cars, I know nothing about them.",
      "note": "Informal and always negative, used with ergens or daar to say someone lacks any expertise.",
      "tags": [
        "character",
        "work"
      ]
    },
    {
      "idiom": "de spijker op de kop slaan",
      "literal": "to strike the nail on the head",
      "meaning": "to be exactly right about something",
      "equivalent": "hit the nail on the head",
      "example": "Met die opmerking sloeg ze de spijker op de kop.",
      "exampleEn": "With that remark she hit the nail on the head.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "de kat uit de boom kijken",
      "literal": "to watch the cat out of the tree",
      "meaning": "to wait and see how things develop before acting",
      "equivalent": "play a waiting game",
      "example": "Laten we de kat uit de boom kijken voordat we een beslissing nemen.",
      "exampleEn": "Let us wait and see how things develop before we make a decision.",
      "tags": [
        "character",
        "time"
      ]
    },
    {
      "idiom": "met de deur in huis vallen",
      "literal": "to fall with the door into the house",
      "meaning": "to get straight to the point without any preamble",
      "equivalent": "cut to the chase",
      "example": "Sorry dat ik meteen met de deur in huis val, maar we moeten praten.",
      "exampleEn": "Sorry for getting straight to the point, but we need to talk.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "de druppel die de emmer doet overlopen",
      "literal": "the drop that makes the bucket overflow",
      "meaning": "the small final thing that makes a situation unbearable",
      "equivalent": "the last straw",
      "example": "Zijn late aankomst was de druppel die de emmer deed overlopen.",
      "exampleEn": "His late arrival was the last straw.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "de handdoek in de ring gooien",
      "literal": "to throw the towel into the ring",
      "meaning": "to give up and admit defeat",
      "equivalent": "throw in the towel",
      "example": "Na drie mislukte pogingen gooide hij de handdoek in de ring.",
      "exampleEn": "After three failed attempts he threw in the towel.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "de aap komt uit de mouw",
      "literal": "the monkey comes out of the sleeve",
      "meaning": "the hidden truth or the real motive finally comes out",
      "equivalent": "the cat is out of the bag",
      "example": "Toen hij om geld vroeg, kwam de aap uit de mouw.",
      "exampleEn": "When he asked for money, his real motive came out.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "van een mug een olifant maken",
      "literal": "to make an elephant out of a mosquito",
      "meaning": "to treat a tiny problem as if it were enormous",
      "equivalent": "make a mountain out of a molehill",
      "example": "Doe niet zo dramatisch, je maakt van een mug een olifant.",
      "exampleEn": "Do not be so dramatic, you are making a mountain out of a molehill.",
      "tags": [
        "emotions",
        "talk"
      ]
    },
    {
      "idiom": "door de mand vallen",
      "literal": "to fall through the basket",
      "meaning": "to be exposed after pretending or lying",
      "example": "Hij loog over zijn diploma, maar viel al snel door de mand.",
      "exampleEn": "He lied about his degree, but he was soon found out.",
      "tags": [
        "trouble",
        "character"
      ]
    },
    {
      "idiom": "een appeltje met iemand te schillen hebben",
      "literal": "to have a little apple to peel with someone",
      "meaning": "to have an unresolved grievance to settle with someone",
      "equivalent": "have a bone to pick with someone",
      "example": "Ik heb nog een appeltje met jou te schillen.",
      "exampleEn": "I still have a bone to pick with you.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "iets uit zijn duim zuigen",
      "literal": "to suck something out of one's thumb",
      "meaning": "to make something up and present it as fact",
      "equivalent": "pull something out of thin air",
      "example": "Die smoes heeft hij duidelijk uit zijn duim gezogen.",
      "exampleEn": "He clearly made that excuse up.",
      "note": "Informal, and it implies deliberate invention rather than an honest guess.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "de eindjes aan elkaar knopen",
      "literal": "to knot the little ends to each other",
      "meaning": "to have just enough money to cover the basics",
      "equivalent": "make ends meet",
      "example": "Met deze huurprijs kan ze de eindjes nauwelijks aan elkaar knopen.",
      "exampleEn": "With this rent she can barely make ends meet.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "iemand een hart onder de riem steken",
      "literal": "to stick a heart under someone's belt",
      "meaning": "to encourage someone who is having a hard time",
      "example": "Ze belde haar vriendin om haar een hart onder de riem te steken.",
      "exampleEn": "She called her friend to give her some encouragement.",
      "tags": [
        "emotions",
        "talk"
      ]
    },
    {
      "idiom": "iets op de lange baan schuiven",
      "literal": "to push something onto the long track",
      "meaning": "to keep postponing something instead of dealing with it",
      "equivalent": "put something on the back burner",
      "example": "De gemeente schuift de verbouwing weer op de lange baan.",
      "exampleEn": "The council is putting the renovation on the back burner again.",
      "tags": [
        "time",
        "work"
      ]
    },
    {
      "idiom": "in de wolken zijn",
      "literal": "to be in the clouds",
      "meaning": "to be extremely happy about something",
      "equivalent": "be over the moon",
      "example": "Ze was in de wolken met haar nieuwe baan.",
      "exampleEn": "She was over the moon about her new job.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "een oogje op iemand hebben",
      "literal": "to have a little eye on someone",
      "meaning": "to be romantically interested in someone",
      "equivalent": "have a crush on someone",
      "example": "Volgens mij heeft hij al maanden een oogje op haar.",
      "exampleEn": "I think he has had a crush on her for months.",
      "note": "Light and informal, used about crushes rather than serious relationships.",
      "tags": [
        "love"
      ]
    },
    {
      "idiom": "boter op zijn hoofd hebben",
      "literal": "to have butter on one's head",
      "meaning": "to be guilty of the very thing you criticize in others",
      "equivalent": "the pot calling the kettle black",
      "example": "Hij bekritiseert anderen, maar heeft zelf boter op zijn hoofd.",
      "exampleEn": "He criticizes others, but he is guilty of the same thing himself.",
      "note": "Short for the saying wie boter op zijn hoofd heeft, moet uit de zon blijven, and a staple of Dutch political commentary.",
      "tags": [
        "character",
        "talk"
      ]
    },
    {
      "idiom": "met de gebakken peren zitten",
      "literal": "to sit with the baked pears",
      "meaning": "to be stuck with the mess that someone else caused",
      "equivalent": "be left holding the bag",
      "example": "Hij vertrok halverwege het project en wij zaten met de gebakken peren.",
      "exampleEn": "He left halfway through the project and we were left holding the bag.",
      "note": "Implies the mess was created by someone else and dumped on you.",
      "tags": [
        "trouble",
        "work"
      ]
    },
    {
      "idiom": "de dans ontspringen",
      "literal": "to escape the dance",
      "meaning": "to escape trouble that hit everyone else",
      "equivalent": "dodge a bullet",
      "example": "Onze afdeling ontsprong de dans bij de reorganisatie.",
      "exampleEn": "Our department escaped the reorganisation unscathed.",
      "tags": [
        "luck",
        "trouble"
      ]
    },
    {
      "idiom": "een rib uit je lijf zijn",
      "literal": "to be a rib out of your body",
      "meaning": "to be painfully expensive",
      "equivalent": "cost an arm and a leg",
      "example": "Die nieuwe wasmachine was een rib uit mijn lijf.",
      "exampleEn": "That new washing machine cost me an arm and a leg.",
      "note": "Reserved for painfully large expenses, not for everyday prices.",
      "tags": [
        "money"
      ]
    },
    {
      "idiom": "de moed zinkt iemand in de schoenen",
      "literal": "the courage sinks into someone's shoes",
      "meaning": "to lose heart and become discouraged",
      "equivalent": "one's heart sinks",
      "example": "Toen hij de resultaten zag, zonk de moed hem in de schoenen.",
      "exampleEn": "When he saw the results, his heart sank.",
      "note": "Also heard with zakt instead of zinkt, and the pronoun changes with the person (hem, haar, mij).",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "iets de kop indrukken",
      "literal": "to press the head of something in",
      "meaning": "to stop something before it can spread",
      "equivalent": "nip something in the bud",
      "example": "Het bedrijf wilde de geruchten meteen de kop indrukken.",
      "exampleEn": "The company wanted to quash the rumours right away.",
      "note": "Mostly used about rumours and speculation, and common in news writing.",
      "tags": [
        "trouble",
        "talk"
      ]
    }
  ],
  "no": [
    {
      "idiom": "ha is i magen",
      "literal": "to have ice in the stomach",
      "meaning": "to stay calm and composed under pressure",
      "equivalent": "keep a cool head",
      "example": "Han hadde is i magen og scoret på straffesparket.",
      "exampleEn": "He kept a cool head and scored the penalty.",
      "tags": [
        "character",
        "emotions"
      ]
    },
    {
      "idiom": "slå to fluer i en smekk",
      "literal": "to hit two flies in one smack",
      "meaning": "to solve two problems with a single action",
      "equivalent": "kill two birds with one stone",
      "example": "Ved å sykle til jobben slår jeg to fluer i en smekk.",
      "exampleEn": "By cycling to work I kill two birds with one stone.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "holde tunga rett i munnen",
      "literal": "to keep the tongue straight in the mouth",
      "meaning": "to concentrate hard so you do not make a mistake",
      "example": "Her må du holde tunga rett i munnen, ellers blir regnestykket feil.",
      "exampleEn": "You have to concentrate hard here, or the calculation will come out wrong.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "være ute og sykle",
      "literal": "to be out cycling",
      "meaning": "to be completely on the wrong track about something",
      "equivalent": "bark up the wrong tree",
      "example": "Nå tror jeg du er ute og sykler.",
      "exampleEn": "I think you are barking up the wrong tree now.",
      "note": "Informal and a little teasing, so it is common between friends and colleagues rather than in formal settings.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "være på bærtur",
      "literal": "to be on a berry trip",
      "meaning": "to be completely mistaken or talking nonsense",
      "equivalent": "be way off the mark",
      "example": "Nei, nå tror jeg du er på bærtur.",
      "exampleEn": "No, I think you are way off the mark now.",
      "note": "Informal and dismissive. It is fine among friends or in a heated debate, but not with a boss or a customer.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "ta seg vann over hodet",
      "literal": "to take water over one's head",
      "meaning": "to take on more than you can handle",
      "equivalent": "bite off more than you can chew",
      "example": "Jeg tror jeg har tatt meg vann over hodet med dette prosjektet.",
      "exampleEn": "I think I have bitten off more than I can chew with this project.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "stikke fingeren i jorda",
      "literal": "to stick the finger in the ground",
      "meaning": "to face the facts and act on how things really are",
      "equivalent": "come down to earth",
      "example": "Nå får du stikke fingeren i jorda og innse at vi ikke har råd.",
      "exampleEn": "Now you need to come down to earth and accept that we cannot afford it.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "ha bein i nesa",
      "literal": "to have bone in the nose",
      "meaning": "to be tough and determined, to stand up for yourself",
      "equivalent": "have backbone",
      "example": "Hun har bein i nesa og gir seg aldri.",
      "exampleEn": "She has backbone and never gives up.",
      "note": "Also written \"ha ben i nesen\" in more conservative bokmål.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "bite i det sure eplet",
      "literal": "to bite into the sour apple",
      "meaning": "to accept something unpleasant because there is no way around it",
      "equivalent": "bite the bullet",
      "example": "Vi må bare bite i det sure eplet og betale regningen.",
      "exampleEn": "We just have to bite the bullet and pay the bill.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "gå i baklås",
      "literal": "to go into back lock",
      "meaning": "to jam up and stop working, said of a machine, a negotiation or a person's mind",
      "equivalent": "freeze up",
      "example": "Jeg gikk helt i baklås under eksamen.",
      "exampleEn": "I completely froze up during the exam.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "legge seg flat",
      "literal": "to lay oneself flat",
      "meaning": "to admit a mistake fully and apologise without excuses",
      "equivalent": "eat humble pie",
      "example": "Direktøren la seg flat og beklaget hele saken.",
      "exampleEn": "The director owned up completely and apologised for the whole affair.",
      "note": "The standard wording in Norwegian news when a politician or a company apologises in public.",
      "tags": [
        "work",
        "talk"
      ]
    },
    {
      "idiom": "snakke rett fra leveren",
      "literal": "to speak straight from the liver",
      "meaning": "to say exactly what you think, bluntly and without polishing it",
      "equivalent": "not mince words",
      "example": "Sjefen snakker alltid rett fra leveren.",
      "exampleEn": "The boss never minces words.",
      "note": "Often heard in the colloquial form \"rett fra levra\".",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "ha en finger med i spillet",
      "literal": "to have a finger along in the game",
      "meaning": "to be quietly involved in something or influencing it from the side",
      "equivalent": "have a hand in it",
      "example": "Jeg tror han har en finger med i spillet.",
      "exampleEn": "I think he has a hand in it.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "gå som katta rundt den varme grøten",
      "literal": "to walk like the cat around the hot porridge",
      "meaning": "to avoid saying the thing that actually matters",
      "equivalent": "beat around the bush",
      "example": "Bare si det rett ut, ikke gå som katta rundt den varme grøten.",
      "exampleEn": "Just say it straight out, do not beat around the bush.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "svelge en kamel",
      "literal": "to swallow a camel",
      "meaning": "to accept something you are against in order to get something else",
      "example": "I forhandlingene måtte vi svelge noen kameler.",
      "exampleEn": "In the negotiations we had to accept a few things we really disliked.",
      "note": "A staple of Norwegian political reporting, above all about coalition deals.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "skjære alle over én kam",
      "literal": "to cut everyone over one comb",
      "meaning": "to treat very different people or cases as if they were all the same",
      "equivalent": "paint everyone with the same brush",
      "example": "Du kan ikke skjære alle ungdommer over én kam.",
      "exampleEn": "You cannot paint all young people with the same brush.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "ha en høne å plukke med noen",
      "literal": "to have a hen to pluck with someone",
      "meaning": "to have a complaint you want to settle with someone",
      "equivalent": "have a bone to pick with someone",
      "example": "Jeg har en høne å plukke med deg.",
      "exampleEn": "I have a bone to pick with you.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "ta beina på nakken",
      "literal": "to take the legs on the neck",
      "meaning": "to run off as fast as you can",
      "equivalent": "take to your heels",
      "example": "Da hunden begynte å bjeffe, tok han beina på nakken.",
      "exampleEn": "When the dog started barking, he took to his heels.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "gå fem på",
      "literal": "to go five on",
      "meaning": "to be taken in by a trick or a false claim",
      "equivalent": "fall for it hook, line and sinker",
      "example": "Annonsen så ekte ut, og jeg gikk fem på.",
      "exampleEn": "The ad looked genuine, and I fell for it hook, line and sinker.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "det er ugler i mosen",
      "literal": "there are owls in the moss",
      "meaning": "something suspicious is going on",
      "equivalent": "something fishy is going on",
      "example": "Prisen er altfor lav, her er det ugler i mosen.",
      "exampleEn": "The price is far too low, something fishy is going on here.",
      "note": "The phrase came in from Danish, where mose means bog, so the owls were originally sitting in a marsh, not in moss.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "være midt i smørøyet",
      "literal": "to be in the middle of the butter eye",
      "meaning": "to be in the best possible spot or situation",
      "equivalent": "be in the sweet spot",
      "example": "Leiligheten ligger midt i smørøyet, rett ved torget.",
      "exampleEn": "The flat is right in the sweet spot, just by the market square.",
      "note": "A smørøye is the pat of butter melting in the middle of a bowl of porridge, so the image is the best part of the dish.",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "ha rent mel i posen",
      "literal": "to have clean flour in the bag",
      "meaning": "to have honest intentions and nothing to hide",
      "equivalent": "be above board",
      "example": "Du kan stole på ham, han har rent mel i posen.",
      "exampleEn": "You can trust him, he is completely above board.",
      "note": "Most often heard in the negative, \"ikke ha rent mel i posen\", about someone shady.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "koke bort i kålen",
      "literal": "to boil away in the cabbage",
      "meaning": "for a plan or an idea to disappear into talk and come to nothing",
      "equivalent": "fizzle out",
      "example": "Hele planen kokte bort i kålen.",
      "exampleEn": "The whole plan fizzled out.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "ta en spansk en",
      "literal": "to take a Spanish one",
      "meaning": "to solve something the quick, unorthodox way, bending the rules a little",
      "equivalent": "cut corners",
      "example": "Vi tok en spansk en og hoppet over papirarbeidet.",
      "exampleEn": "We cut corners and skipped the paperwork.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "kaste blår i øynene på noen",
      "literal": "to throw flax tow in someone's eyes",
      "meaning": "to deceive someone by giving a false impression",
      "equivalent": "pull the wool over someone's eyes",
      "example": "Politikeren prøvde å kaste blår i øynene på velgerne.",
      "exampleEn": "The politician tried to pull the wool over the voters' eyes.",
      "note": "The word blår (flax tow) survives only in this phrase, which turns up mostly in political and newspaper writing.",
      "tags": [
        "talk",
        "trouble"
      ]
    }
  ],
  "pl": [
    {
      "idiom": "trzymać kciuki",
      "literal": "to hold thumbs",
      "meaning": "to wish someone luck before something important",
      "equivalent": "to keep one's fingers crossed",
      "example": "Trzymaj za mnie kciuki, jutro mam egzamin.",
      "exampleEn": "Keep your fingers crossed for me, I have an exam tomorrow.",
      "note": "Poles squeeze their thumbs inside a fist instead of crossing fingers, and people really do make the gesture.",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "bułka z masłem",
      "literal": "a roll with butter",
      "meaning": "something very easy to do",
      "equivalent": "a piece of cake",
      "example": "Ten egzamin to była bułka z masłem.",
      "exampleEn": "That exam was a piece of cake.",
      "tags": [
        "everyday",
        "work"
      ]
    },
    {
      "idiom": "mieć czegoś po dziurki w nosie",
      "literal": "to have something up to the little holes in the nose",
      "meaning": "to have had far more than enough of something",
      "equivalent": "to be fed up to the back teeth",
      "example": "Mam już tego wszystkiego po dziurki w nosie.",
      "exampleEn": "I am completely fed up with all of this.",
      "note": "Informal and blunt, fine with friends but too strong for a formal meeting.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "leje jak z cebra",
      "literal": "it pours as from a tub",
      "meaning": "it is raining extremely heavily",
      "equivalent": "to rain cats and dogs",
      "example": "Nie wychodź teraz, leje jak z cebra.",
      "exampleEn": "Don't go out now, it is pouring down.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "iść jak po maśle",
      "literal": "to go like on butter",
      "meaning": "to go smoothly, without any obstacles",
      "equivalent": "to go like clockwork",
      "example": "Rozmowa o pracę poszła jak po maśle.",
      "exampleEn": "The job interview went like clockwork.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "trafić w sedno",
      "literal": "to hit the core",
      "meaning": "to say exactly the right thing, to name the essence of an issue",
      "equivalent": "to hit the nail on the head",
      "example": "Twoja uwaga trafiła w sedno problemu.",
      "exampleEn": "Your remark hit the nail on the head.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "zakochać się po uszy",
      "literal": "to fall in love up to the ears",
      "meaning": "to fall completely and helplessly in love",
      "equivalent": "to fall head over heels",
      "example": "Zakochał się w niej po uszy już na pierwszej randce.",
      "exampleEn": "He fell head over heels for her on the very first date.",
      "tags": [
        "love",
        "emotions"
      ]
    },
    {
      "idiom": "robić z igły widły",
      "literal": "to make a pitchfork out of a needle",
      "meaning": "to blow a small problem out of all proportion",
      "equivalent": "to make a mountain out of a molehill",
      "example": "Uspokój się, robisz z igły widły.",
      "exampleEn": "Calm down, you are making a mountain out of a molehill.",
      "tags": [
        "emotions",
        "character"
      ]
    },
    {
      "idiom": "szukać dziury w całym",
      "literal": "to look for a hole in something whole",
      "meaning": "to look for faults where there are none",
      "equivalent": "to pick holes in everything",
      "example": "Zawsze musisz szukać dziury w całym, nawet gdy wszystko jest w porządku.",
      "exampleEn": "You always have to pick holes in everything, even when it is all fine.",
      "tags": [
        "character",
        "talk"
      ]
    },
    {
      "idiom": "łamać sobie głowę",
      "literal": "to break one's own head",
      "meaning": "to think hard about something puzzling",
      "equivalent": "to rack one's brains",
      "example": "Łamię sobie głowę nad tym zadaniem od godziny.",
      "exampleEn": "I have been racking my brains over this problem for an hour.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "mieć muchy w nosie",
      "literal": "to have flies in the nose",
      "meaning": "to be sulky and irritable for no clear reason",
      "equivalent": "to be in a huff",
      "example": "Nie wiem, co się stało, ale ona ma dziś muchy w nosie.",
      "exampleEn": "I have no idea what happened, but she is in a huff today.",
      "tags": [
        "emotions",
        "character"
      ]
    },
    {
      "idiom": "wystawić kogoś do wiatru",
      "literal": "to put someone out into the wind",
      "meaning": "to let someone down by not turning up or not keeping a promise",
      "equivalent": "to stand someone up",
      "example": "Umówiliśmy się na kawę, ale wystawiła mnie do wiatru.",
      "exampleEn": "We arranged to meet for coffee, but she stood me up.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "tani jak barszcz",
      "literal": "cheap as borscht",
      "meaning": "very cheap indeed",
      "equivalent": "dirt cheap",
      "example": "Kupiłam te buty na wyprzedaży, były tanie jak barszcz.",
      "exampleEn": "I bought these shoes in the sale, they were dirt cheap.",
      "note": "Barszcz, the beetroot soup, used to be the cheapest thing on any Polish table, hence the comparison.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "mieć węża w kieszeni",
      "literal": "to have a snake in one's pocket",
      "meaning": "to hate spending money, to be stingy",
      "equivalent": "to be tight-fisted",
      "example": "On nigdy nie stawia drinków, ma węża w kieszeni.",
      "exampleEn": "He never buys a round, he is tight-fisted.",
      "tags": [
        "money",
        "character"
      ]
    },
    {
      "idiom": "co ma piernik do wiatraka",
      "literal": "what does gingerbread have to do with a windmill",
      "meaning": "the two things being mentioned have nothing to do with each other",
      "equivalent": "what has that got to do with the price of fish",
      "example": "Mówiliśmy o pracy, a on nagle zaczął o polityce, co ma piernik do wiatraka?",
      "exampleEn": "We were talking about work and he suddenly switched to politics, what has that got to do with the price of fish?",
      "note": "Almost always used as a rhetorical question, in a slightly exasperated tone.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "musztarda po obiedzie",
      "literal": "mustard after dinner",
      "meaning": "help or news that arrives when it is no longer any use",
      "equivalent": "too little, too late",
      "example": "Teraz przepraszasz? Musztarda po obiedzie.",
      "exampleEn": "You are apologising now? Too little, too late.",
      "tags": [
        "time",
        "everyday"
      ]
    },
    {
      "idiom": "z deszczu pod rynnę",
      "literal": "from the rain under the gutter",
      "meaning": "out of a bad situation and straight into a worse one",
      "equivalent": "out of the frying pan into the fire",
      "example": "Zmienił pracę i trafił z deszczu pod rynnę.",
      "exampleEn": "He changed jobs and went out of the frying pan into the fire.",
      "tags": [
        "trouble",
        "work"
      ]
    },
    {
      "idiom": "rzucać grochem o ścianę",
      "literal": "to throw peas at a wall",
      "meaning": "to say something to someone with no effect whatsoever",
      "equivalent": "to talk to a brick wall",
      "example": "Tłumaczenie mu czegokolwiek to jak rzucanie grochem o ścianę.",
      "exampleEn": "Explaining anything to him is like talking to a brick wall.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "dzielić skórę na niedźwiedziu",
      "literal": "to divide the skin on the bear",
      "meaning": "to plan how to use something you have not got yet",
      "equivalent": "to count one's chickens before they hatch",
      "example": "Nie dziel skóry na niedźwiedziu, jeszcze nie wygraliśmy.",
      "exampleEn": "Don't count your chickens before they hatch, we have not won yet.",
      "tags": [
        "character",
        "luck"
      ]
    },
    {
      "idiom": "wiercić komuś dziurę w brzuchu",
      "literal": "to drill a hole in someone's belly",
      "meaning": "to pester someone about the same thing over and over",
      "example": "Dzieci wiercą mi dziurę w brzuchu, żebyśmy pojechali nad morze.",
      "exampleEn": "The kids keep pestering me to go to the seaside.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "mydlić komuś oczy",
      "literal": "to soap someone's eyes",
      "meaning": "to mislead someone with nice-sounding talk",
      "equivalent": "to pull the wool over someone's eyes",
      "example": "Przestań mi mydlić oczy i powiedz prawdę.",
      "exampleEn": "Stop pulling the wool over my eyes and tell me the truth.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "robić dobrą minę do złej gry",
      "literal": "to make a good face to a bad game",
      "meaning": "to hide disappointment and act as if everything is fine",
      "equivalent": "to put on a brave face",
      "example": "Przegrał konkurs, ale robił dobrą minę do złej gry.",
      "exampleEn": "He lost the competition, but he put on a brave face.",
      "tags": [
        "emotions",
        "character"
      ]
    },
    {
      "idiom": "nie mój cyrk, nie moje małpy",
      "literal": "not my circus, not my monkeys",
      "meaning": "this is not my problem and not my responsibility",
      "example": "Nie mój cyrk, nie moje małpy, niech oni to rozwiążą.",
      "exampleEn": "Not my circus, not my monkeys, let them sort it out.",
      "note": "Casual and slightly dismissive; the English version is usually credited to this Polish saying, so it may look familiar.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "obiecywać gruszki na wierzbie",
      "literal": "to promise pears on a willow",
      "meaning": "to make promises that cannot possibly be kept",
      "equivalent": "to promise the moon",
      "example": "Politycy znowu obiecują gruszki na wierzbie.",
      "exampleEn": "The politicians are promising the moon again.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "nie w kij dmuchał",
      "literal": "not blown into a stick",
      "meaning": "quite impressive, not to be taken lightly",
      "equivalent": "nothing to sneeze at",
      "example": "Zarabia dwadzieścia tysięcy miesięcznie, to nie w kij dmuchał.",
      "exampleEn": "He earns twenty thousand a month, which is nothing to sneeze at.",
      "note": "Colloquial and a little old school, common in speech but out of place in writing.",
      "tags": [
        "everyday"
      ]
    }
  ],
  "ro": [
    {
      "idiom": "a fi cu capul în nori",
      "literal": "to be with one's head in the clouds",
      "meaning": "to be daydreaming and not paying attention",
      "equivalent": "have one's head in the clouds",
      "example": "Ești cu capul în nori, nu ai auzit nimic din ce am spus.",
      "exampleEn": "You have your head in the clouds, you did not hear a word of what I said.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "a-și băga nasul unde nu-i fierbe oala",
      "literal": "to stick one's nose where one's pot is not boiling",
      "meaning": "to meddle in matters that do not concern you",
      "equivalent": "poke one's nose into someone else's business",
      "example": "Nu-ți mai băga nasul unde nu-ți fierbe oala!",
      "exampleEn": "Stop poking your nose into things that are none of your business!",
      "note": "Blunt when said to someone's face, closer to a telling off than a gentle hint.",
      "tags": [
        "character",
        "talk"
      ]
    },
    {
      "idiom": "a face din țânțar armăsar",
      "literal": "to make a stallion out of a mosquito",
      "meaning": "to exaggerate something small into something huge",
      "equivalent": "make a mountain out of a molehill",
      "example": "Nu e nimic grav, nu mai face din țânțar armăsar.",
      "exampleEn": "It is nothing serious, stop making a mountain out of a molehill.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "a bate câmpii",
      "literal": "to beat the fields",
      "meaning": "to talk nonsense and wander off the subject",
      "equivalent": "go off on a tangent",
      "example": "Ai obosit? Bați câmpii de zece minute.",
      "exampleEn": "Are you tired? You have been rambling for ten minutes.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "a-i sări cuiva muștarul",
      "literal": "for the mustard to jump on someone",
      "meaning": "to suddenly lose one's temper",
      "equivalent": "blow one's top",
      "example": "I-a sărit muștarul când a văzut mizeria din bucătărie.",
      "exampleEn": "He blew his top when he saw the mess in the kitchen.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "a scoate pe cineva din pepeni",
      "literal": "to take someone out of the melons",
      "meaning": "to exasperate someone, to make them lose all patience",
      "equivalent": "drive someone up the wall",
      "example": "Zgomotul de la șantier mă scoate din pepeni.",
      "exampleEn": "The noise from the building site drives me up the wall.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "a trage pe sfoară",
      "literal": "to pull on the string",
      "meaning": "to cheat or trick someone, especially in a deal or a reckoning",
      "equivalent": "pull a fast one on someone",
      "example": "Ne-a tras pe sfoară cu contractul ăla.",
      "exampleEn": "He pulled a fast one on us with that contract.",
      "tags": [
        "money",
        "trouble"
      ]
    },
    {
      "idiom": "a rămâne mască",
      "literal": "to remain a mask",
      "meaning": "to be completely stunned, speechless with surprise",
      "equivalent": "be gobsmacked",
      "example": "Când mi-a spus cât a plătit pe mașină, am rămas mască.",
      "exampleEn": "When he told me how much he paid for the car, I was gobsmacked.",
      "note": "Slang, fine with friends but out of place in formal speech or writing.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "a fi cu ochii în patru",
      "literal": "to be with one's eyes in four",
      "meaning": "to stay alert and watch out carefully",
      "equivalent": "keep one's eyes peeled",
      "example": "Fii cu ochii în patru, sunt hoți de buzunare în zonă.",
      "exampleEn": "Keep your eyes peeled, there are pickpockets around here.",
      "tags": [
        "everyday",
        "trouble"
      ]
    },
    {
      "idiom": "a-i pica cuiva fisa",
      "literal": "for the token to drop for someone",
      "meaning": "to finally understand something",
      "equivalent": "for the penny to drop",
      "example": "Abia acum mi-a picat fisa despre ce vorbeai.",
      "exampleEn": "Only now has the penny dropped for me about what you meant.",
      "note": "A fisă is the metal token used in old public payphones, an object younger Romanians have never seen.",
      "tags": [
        "everyday",
        "talk"
      ]
    },
    {
      "idiom": "a freca menta",
      "literal": "to rub the mint",
      "meaning": "to laze around wasting time instead of working",
      "equivalent": "goof off",
      "example": "Nu freca menta toată ziua, ai treabă de făcut!",
      "exampleEn": "Do not goof off all day, you have work to do!",
      "note": "Dismissive when aimed at someone, so it belongs among friends rather than at work.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "a-și lua inima în dinți",
      "literal": "to take one's heart in one's teeth",
      "meaning": "to gather one's courage and finally do something difficult",
      "equivalent": "pluck up the courage",
      "example": "Și-a luat inima în dinți și a cerut o mărire de salariu.",
      "exampleEn": "He plucked up the courage and asked for a pay rise.",
      "tags": [
        "character",
        "emotions"
      ]
    },
    {
      "idiom": "a pune paie pe foc",
      "literal": "to put straw on the fire",
      "meaning": "to make a tense situation even worse",
      "equivalent": "add fuel to the fire",
      "example": "Nu mai pune paie pe foc, oricum sunt destul de supărați.",
      "exampleEn": "Stop adding fuel to the fire, they are upset enough as it is.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "a fi cu musca pe căciulă",
      "literal": "to be with the fly on one's fur cap",
      "meaning": "to be the guilty one and to know it",
      "example": "S-a supărat imediat, sigur e cu musca pe căciulă.",
      "exampleEn": "He got upset straight away, he is clearly the one who did it.",
      "note": "A căciulă is the traditional sheepskin winter hat. The image comes from a folk tale in which a thief gives himself away by swatting at a fly nobody else can see.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "a se da de ceasul morții",
      "literal": "to throw oneself about at the hour of death",
      "meaning": "to fret and struggle desperately to get something done",
      "equivalent": "move heaven and earth",
      "example": "M-am dat de ceasul morții ca să ajung la timp la aeroport.",
      "exampleEn": "I moved heaven and earth to get to the airport on time.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "a pune bețe în roate",
      "literal": "to put sticks in the wheels",
      "meaning": "to deliberately obstruct someone's plans",
      "equivalent": "put a spoke in someone's wheel",
      "example": "În loc să ne ajute, ne pune bețe în roate la fiecare pas.",
      "exampleEn": "Instead of helping us, he puts a spoke in our wheel at every turn.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "a-și da arama pe față",
      "literal": "to show one's copper",
      "meaning": "to let one's true and less flattering character show at last",
      "equivalent": "show one's true colours",
      "example": "Până la urmă și-a dat arama pe față.",
      "exampleEn": "In the end he showed his true colours.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "a bate apa în piuă",
      "literal": "to pound water in a mortar",
      "meaning": "to keep talking or working without getting anywhere",
      "equivalent": "go round in circles",
      "example": "Degeaba mai discutăm, batem apa în piuă.",
      "exampleEn": "There is no point discussing it further, we are just going round in circles.",
      "tags": [
        "talk",
        "work"
      ]
    },
    {
      "idiom": "a tăia frunză la câini",
      "literal": "to cut leaves for the dogs",
      "meaning": "to have no real occupation and do nothing useful",
      "equivalent": "twiddle one's thumbs",
      "example": "De dimineață taie frunză la câini în loc să învețe.",
      "exampleEn": "He has been twiddling his thumbs since morning instead of studying.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "la Paștele cailor",
      "literal": "at the horses' Easter",
      "meaning": "at a time that will never come",
      "equivalent": "when pigs fly",
      "example": "O să-mi dea banii înapoi la Paștele cailor.",
      "exampleEn": "He will give me my money back when pigs fly.",
      "tags": [
        "time",
        "everyday"
      ]
    },
    {
      "idiom": "a o lua la sănătoasa",
      "literal": "to take it towards the healthy one",
      "meaning": "to run off quickly to get out of trouble",
      "equivalent": "take to one's heels",
      "example": "Când a auzit sirena, hoțul a luat-o la sănătoasa.",
      "exampleEn": "When he heard the siren, the thief took to his heels.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "a călca pe bec",
      "literal": "to step on the light bulb",
      "meaning": "to break a rule and land yourself in trouble",
      "equivalent": "step out of line",
      "example": "Dacă mai calci pe bec o dată, îți pierzi permisul.",
      "exampleEn": "If you step out of line one more time, you will lose your licence.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "a da din colț în colț",
      "literal": "to hit from corner to corner",
      "meaning": "to dodge and improvise your way out of a tight spot",
      "example": "De când a rămas fără serviciu, dă din colț în colț.",
      "exampleEn": "Ever since he lost his job, he has been scrambling to get by.",
      "tags": [
        "trouble"
      ]
    },
    {
      "idiom": "a fi mână spartă",
      "literal": "to be a broken hand",
      "meaning": "to spend money carelessly and never hold on to any",
      "equivalent": "money burns a hole in one's pocket",
      "example": "Nu-i cere lui să țină banii, e mână spartă.",
      "exampleEn": "Do not ask him to look after the money, it burns a hole in his pocket.",
      "tags": [
        "money",
        "character"
      ]
    },
    {
      "idiom": "a-i cădea cuiva cu tronc",
      "literal": "to fall on someone with a thud",
      "meaning": "to become suddenly and strongly attractive to someone",
      "equivalent": "fall for someone",
      "example": "Mi-a căzut cu tronc de la prima întâlnire.",
      "exampleEn": "I fell for him from the very first date.",
      "note": "Also heard as a-i pica cu tronc, and sometimes with la inimă added at the end.",
      "tags": [
        "love",
        "emotions"
      ]
    },
    {
      "idiom": "a face pe niznaiul",
      "literal": "to act the 'I do not know'",
      "meaning": "to pretend to know nothing about something",
      "equivalent": "play dumb",
      "example": "Nu face pe niznaiul, știu că tu ai luat cheile.",
      "exampleEn": "Do not play dumb, I know you took the keys.",
      "note": "Niznai comes from Russian ne znaiu, I do not know. The phrase is colloquial and a bit old fashioned, heard more from older speakers.",
      "tags": [
        "character",
        "talk"
      ]
    }
  ],
  "sk": [
    {
      "idiom": "liezť niekomu na nervy",
      "literal": "to crawl on someone's nerves",
      "meaning": "to irritate someone, to annoy them repeatedly",
      "equivalent": "get on someone's nerves",
      "example": "Ten jeho smiech mi už lezie na nervy.",
      "exampleEn": "That laugh of his is really getting on my nerves.",
      "note": "Informal but not rude, and extremely common in everyday speech.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "mať plné ruky práce",
      "literal": "to have full hands of work",
      "meaning": "to be very busy with more tasks than you can comfortably manage",
      "equivalent": "have one's hands full",
      "example": "Pred sviatkami máme v obchode plné ruky práce.",
      "exampleEn": "Before the holidays we have our hands full at the shop.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "držať niekomu palce",
      "literal": "to hold thumbs for someone",
      "meaning": "to wish someone luck and hope things turn out well for them",
      "equivalent": "keep one's fingers crossed",
      "example": "Budem ti držať palce na skúške.",
      "exampleEn": "I'll be keeping my fingers crossed for you at the exam.",
      "note": "Slovaks squeeze the thumb inside a fist instead of crossing fingers, and often show the gesture while saying this.",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "lámať si hlavu",
      "literal": "to break one's own head",
      "meaning": "to think hard about a problem, often without getting anywhere",
      "equivalent": "rack one's brains",
      "example": "Nelám si hlavu nad tým, veď to nie je až také dôležité.",
      "exampleEn": "Don't rack your brains over it, it's really not that important.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "mať niečoho plné zuby",
      "literal": "to have full teeth of something",
      "meaning": "to have had far more than enough of something",
      "equivalent": "be fed up to the back teeth",
      "example": "Mám plné zuby jeho výhovoriek.",
      "exampleEn": "I've had it up to here with his excuses.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "držať jazyk za zubami",
      "literal": "to hold the tongue behind the teeth",
      "meaning": "to stay quiet and not give away what you know",
      "equivalent": "hold one's tongue",
      "example": "Povedz mi to, sľubujem, že budem držať jazyk za zubami.",
      "exampleEn": "Tell me, I promise I'll keep it to myself.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "byť v siedmom nebi",
      "literal": "to be in the seventh heaven",
      "meaning": "to be extremely happy",
      "equivalent": "be in seventh heaven",
      "example": "Keď mu ponúkli tú prácu, bol v siedmom nebi.",
      "exampleEn": "When they offered him the job, he was in seventh heaven.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "spať ako zabitý",
      "literal": "to sleep like one killed",
      "meaning": "to sleep very deeply, without waking up",
      "equivalent": "sleep like a log",
      "example": "Po tom výlete som spal ako zabitý.",
      "exampleEn": "After that trip I slept like a log.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "mať toho veľa na krku",
      "literal": "to have a lot of it on one's neck",
      "meaning": "to have many responsibilities or obligations to deal with",
      "equivalent": "have a lot on one's plate",
      "example": "Momentálne mám toho veľa na krku, sotva stíham dýchať.",
      "exampleEn": "I have a lot on my plate at the moment, I barely have time to breathe.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "spadol mi kameň zo srdca",
      "literal": "a stone fell from my heart",
      "meaning": "a worry suddenly lifted and you felt great relief",
      "equivalent": "a weight off one's mind",
      "example": "Keď zavolala, že dorazila v poriadku, spadol mi kameň zo srdca.",
      "exampleEn": "When she called to say she had arrived safely, it was a weight off my mind.",
      "note": "Almost always used in the past tense, with the relieved person in the dative (spadol mi, spadol jej); padol mi kameň zo srdca is an equally common variant.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "vodiť niekoho za nos",
      "literal": "to lead someone by the nose",
      "meaning": "to keep deceiving someone over time while they still believe you",
      "equivalent": "string someone along",
      "example": "Už mesiac ma vodí za nos, sľuby nikdy nesplní.",
      "exampleEn": "He's been stringing me along for a month, he never keeps his promises.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "mať maslo na hlave",
      "literal": "to have butter on the head",
      "meaning": "to be guilty of something yourself while acting innocent",
      "example": "Prečo sa tak bráni? Asi má maslo na hlave.",
      "exampleEn": "Why is he defending himself so hard? He's probably got something to hide.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "ako blesk z jasného neba",
      "literal": "like lightning from a clear sky",
      "meaning": "completely unexpected, with no warning at all",
      "equivalent": "a bolt from the blue",
      "example": "Správa o jeho odchode prišla ako blesk z jasného neba.",
      "exampleEn": "The news of his departure came like a bolt from the blue.",
      "tags": [
        "everyday",
        "trouble"
      ]
    },
    {
      "idiom": "hodiť flintu do žita",
      "literal": "to throw the rifle into the rye",
      "meaning": "to give up too early and stop trying",
      "equivalent": "throw in the towel",
      "example": "Nehádž flintu do žita, ešte to môžeš dokázať.",
      "exampleEn": "Don't give up yet, you can still pull it off.",
      "note": "Most often heard in the negative, as encouragement not to quit.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "chodiť okolo horúcej kaše",
      "literal": "to walk around hot porridge",
      "meaning": "to avoid saying the important thing directly",
      "equivalent": "beat around the bush",
      "example": "Prestaň chodiť okolo horúcej kaše a povedz mi, čo sa stalo.",
      "exampleEn": "Stop beating around the bush and tell me what happened.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "robiť z komára somára",
      "literal": "to make a donkey out of a mosquito",
      "meaning": "to turn a small matter into a big one",
      "equivalent": "make a mountain out of a molehill",
      "example": "Nerob z komára somára, veď je to len škrabanec.",
      "exampleEn": "Don't make a mountain out of a molehill, it's just a scratch.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "mať niečo za lubom",
      "literal": "to have something behind the bark",
      "meaning": "to be secretly planning something, usually not something good",
      "equivalent": "be up to something",
      "example": "Ten úsmev sa mi nepáči, určite má niečo za lubom.",
      "exampleEn": "I don't like that smile, he's definitely up to something.",
      "note": "Lub is a strip of bark or thin bent wood used for sieve rims and baskets, so the image is of something kept out of sight behind it.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "sľubovať modré z neba",
      "literal": "to promise the blue from the sky",
      "meaning": "to promise wonderful things you have no intention of delivering",
      "equivalent": "promise the moon",
      "example": "Pred voľbami nám sľubovali modré z neba.",
      "exampleEn": "Before the elections they promised us the moon.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "mať niečo v malíčku",
      "literal": "to have something in one's little finger",
      "meaning": "to know a subject so well that you handle it without effort",
      "equivalent": "know something like the back of one's hand",
      "example": "Nové pravidlá má v malíčku, spýtaj sa jeho.",
      "exampleEn": "He knows the new rules inside out, ask him.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "byť za vodou",
      "literal": "to be beyond the water",
      "meaning": "to be in the clear, with the hard part behind you",
      "equivalent": "be out of the woods",
      "example": "Keď podpíšu tú zmluvu, budú za vodou.",
      "exampleEn": "Once they sign that contract, they'll be out of the woods.",
      "note": "Colloquial, and usually about money or a job finally being secure.",
      "tags": [
        "money",
        "luck"
      ]
    },
    {
      "idiom": "mať srdce na dlani",
      "literal": "to have a heart on one's palm",
      "meaning": "to be sincere, warm and generous towards others",
      "equivalent": "have a heart of gold",
      "example": "Tá žena má srdce na dlani, vždy nám pomôže.",
      "exampleEn": "That woman has a heart of gold, she always helps us.",
      "tags": [
        "character",
        "emotions"
      ]
    },
    {
      "idiom": "hádzať niekomu polená pod nohy",
      "literal": "to throw logs under someone's feet",
      "meaning": "to deliberately put obstacles in someone's way",
      "equivalent": "put a spoke in someone's wheel",
      "example": "Namiesto pomoci mi iba hádzal polená pod nohy.",
      "exampleEn": "Instead of helping me, he just kept putting obstacles in my way.",
      "tags": [
        "trouble",
        "work"
      ]
    },
    {
      "idiom": "vziať nohy na plecia",
      "literal": "to take one's legs onto one's shoulders",
      "meaning": "to run away quickly",
      "equivalent": "take to one's heels",
      "example": "Keď uvideli policajta, vzali nohy na plecia.",
      "exampleEn": "When they saw the police officer, they took to their heels.",
      "note": "Informal and slightly humorous.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "chytiť sa za nos",
      "literal": "to catch oneself by the nose",
      "meaning": "to admit your own fault instead of blaming other people",
      "example": "Namiesto obviňovania druhých by sa mal každý chytiť za nos.",
      "exampleEn": "Instead of blaming others, everyone should take a good look at themselves.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "ísť s kožou na trh",
      "literal": "to go to market with one's skin",
      "meaning": "to take a personal risk by openly showing where you stand",
      "equivalent": "stick one's neck out",
      "example": "Ak chceš presadiť svoj názor, musíš ísť s kožou na trh.",
      "exampleEn": "If you want your view to prevail, you have to stick your neck out.",
      "tags": [
        "character",
        "trouble"
      ]
    }
  ],
  "sl": [
    {
      "idiom": "iti komu na živce",
      "literal": "to go on someone's nerves",
      "meaning": "to irritate or annoy someone",
      "equivalent": "get on someone's nerves",
      "example": "Njegovo večno pritoževanje mi gre res na živce.",
      "exampleEn": "His constant complaining really gets on my nerves.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "držati pesti za koga",
      "literal": "to hold fists for someone",
      "meaning": "to wish someone luck and silently root for them",
      "equivalent": "keep one's fingers crossed",
      "example": "Jutri imaš izpit, zato bomo držali pesti zate.",
      "exampleEn": "You have an exam tomorrow, so we will keep our fingers crossed for you.",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "iti kot po maslu",
      "literal": "to go as if over butter",
      "meaning": "to go smoothly, with nothing getting in the way",
      "equivalent": "go like clockwork",
      "example": "Predstavitev je šla kot po maslu.",
      "exampleEn": "The presentation went like clockwork.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "na vrat na nos",
      "literal": "on neck on nose",
      "meaning": "in a great hurry, without thinking it through",
      "example": "Odšla sta na vrat na nos, brez pozdrava.",
      "exampleEn": "The two of them left in a mad rush, without saying goodbye.",
      "tags": [
        "time",
        "everyday"
      ]
    },
    {
      "idiom": "mačji kašelj",
      "literal": "a cat's cough",
      "meaning": "something trivial and easy to handle",
      "equivalent": "a walk in the park",
      "example": "Selitev v novo stanovanje ni bila mačji kašelj.",
      "exampleEn": "Moving into the new flat was no walk in the park.",
      "note": "Usually appears in the negative (ni mačji kašelj) to stress that something was hard.",
      "tags": [
        "everyday",
        "work"
      ]
    },
    {
      "idiom": "delati iz muhe slona",
      "literal": "to make an elephant out of a fly",
      "meaning": "to blow a small problem far out of proportion",
      "equivalent": "make a mountain out of a molehill",
      "example": "Nehaj delati iz muhe slona, saj ni tako hudo.",
      "exampleEn": "Stop making a mountain out of a molehill, it is not that bad.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "vreči puško v koruzo",
      "literal": "to throw the rifle into the corn",
      "meaning": "to give up and stop trying",
      "equivalent": "throw in the towel",
      "example": "Po tretjem neuspešnem poskusu je vrgel puško v koruzo.",
      "exampleEn": "After the third failed attempt he threw in the towel.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "pasti v vodo",
      "literal": "to fall into the water",
      "meaning": "for a plan or an event to come to nothing",
      "equivalent": "fall through",
      "example": "Zaradi dežja so vsi naši načrti za piknik padli v vodo.",
      "exampleEn": "Because of the rain all our picnic plans fell through.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "držati jezik za zobmi",
      "literal": "to hold the tongue behind the teeth",
      "meaning": "to stay quiet and keep something to oneself",
      "equivalent": "hold one's tongue",
      "example": "Če hočeš obdržati službo, drži jezik za zobmi.",
      "exampleEn": "If you want to keep your job, hold your tongue.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "imeti maslo na glavi",
      "literal": "to have butter on one's head",
      "meaning": "to be guilty of something and have a reason to feel uneasy about it",
      "example": "Očitno ima maslo na glavi, ker se izogiba vprašanjem.",
      "exampleEn": "He clearly has something to answer for, since he keeps dodging the questions.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "ubiti dve muhi na en mah",
      "literal": "to kill two flies with one swing",
      "meaning": "to settle two things with a single action",
      "equivalent": "kill two birds with one stone",
      "example": "Z eno potjo na pošto in v trgovino sem ubila dve muhi na en mah.",
      "exampleEn": "With one trip to the post office and the shop I killed two birds with one stone.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "izgubiti glavo",
      "literal": "to lose one's head",
      "meaning": "to panic and stop thinking clearly",
      "equivalent": "lose one's head",
      "example": "Ko je izvedela za nesrečo, je za trenutek izgubila glavo.",
      "exampleEn": "When she heard about the accident, she lost her head for a moment.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "vleči koga za nos",
      "literal": "to pull someone by the nose",
      "meaning": "to deceive someone and keep them believing something untrue",
      "equivalent": "string someone along",
      "example": "Cel mesec me je vlekel za nos, da mi bo vrnil denar.",
      "exampleEn": "For a whole month he strung me along about paying me back.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "biti na konju",
      "literal": "to be on a horse",
      "meaning": "to have made it, to be doing well now that the hard part is over",
      "equivalent": "be sitting pretty",
      "example": "Odkar je odprl svoje podjetje, je res na konju.",
      "exampleEn": "Ever since he opened his own company, he has been sitting pretty.",
      "tags": [
        "work",
        "money"
      ]
    },
    {
      "idiom": "iti rakom žvižgat",
      "literal": "to go whistle to the crayfish",
      "meaning": "to be ruined or lost for good",
      "equivalent": "go down the drain",
      "example": "Če ne dobimo posojila, gre ves projekt rakom žvižgat.",
      "exampleEn": "If we do not get the loan, the whole project goes down the drain.",
      "note": "Informal and slightly jokey, at home in speech rather than in formal writing.",
      "tags": [
        "trouble",
        "money"
      ]
    },
    {
      "idiom": "metati komu polena pod noge",
      "literal": "to throw logs under someone's feet",
      "meaning": "to obstruct someone on purpose",
      "equivalent": "put a spoke in someone's wheel",
      "example": "Namesto da bi mi pomagal, mi je metal polena pod noge.",
      "exampleEn": "Instead of helping me, he kept putting obstacles in my way.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "biti pod copato",
      "literal": "to be under the slipper",
      "meaning": "to be run by one's wife",
      "equivalent": "be under the thumb",
      "example": "Vsi se mu smejijo, da je pod copato.",
      "exampleEn": "Everyone teases him for being under the thumb.",
      "note": "Said mockingly about a husband, so it can sting if he is in the room.",
      "tags": [
        "love",
        "character"
      ]
    },
    {
      "idiom": "ne imeti dlake na jeziku",
      "literal": "to have no hair on one's tongue",
      "meaning": "to say exactly what one thinks without softening it",
      "equivalent": "not mince words",
      "example": "Nova direktorica nima dlake na jeziku.",
      "exampleEn": "The new director does not mince her words.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "pustiti koga na cedilu",
      "literal": "to leave someone on the strainer",
      "meaning": "to abandon someone who was counting on you",
      "equivalent": "leave someone in the lurch",
      "example": "Obljubil je pomoč, potem pa nas je pustil na cedilu.",
      "exampleEn": "He promised to help and then left us in the lurch.",
      "tags": [
        "trouble",
        "character"
      ]
    },
    {
      "idiom": "priti na zeleno vejo",
      "literal": "to come onto a green branch",
      "meaning": "to recover financially and start doing well",
      "equivalent": "get on one's feet",
      "example": "S to plačo nikoli ne bomo prišli na zeleno vejo.",
      "exampleEn": "On this salary we will never get on our feet.",
      "note": "Often used in the negative, about someone who never gets ahead.",
      "tags": [
        "money",
        "work"
      ]
    },
    {
      "idiom": "kupiti mačka v žaklju",
      "literal": "to buy a cat in a sack",
      "meaning": "to buy something sight unseen, without checking what you are getting",
      "equivalent": "buy a pig in a poke",
      "example": "Rabljenega avta ne kupuj po sliki, da ne kupiš mačka v žaklju.",
      "exampleEn": "Do not buy a used car from a photo, or you will end up buying a pig in a poke.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "biti brez glave in repa",
      "literal": "to be without head and tail",
      "meaning": "to be muddled and impossible to follow",
      "equivalent": "have neither rhyme nor reason",
      "example": "Njegova razlaga je bila brez glave in repa.",
      "exampleEn": "His explanation had neither rhyme nor reason.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "delati se Francoza",
      "literal": "to make oneself a Frenchman",
      "meaning": "to pretend not to know or notice something",
      "equivalent": "play dumb",
      "example": "Ko sem ga vprašala, kdo je razbil vazo, se je delal Francoza.",
      "exampleEn": "When I asked him who broke the vase, he played dumb.",
      "note": "Informal and disapproving; Croatian and Serbian use the same phrase.",
      "tags": [
        "character",
        "talk"
      ]
    },
    {
      "idiom": "gledati kot tele v nova vrata",
      "literal": "to stare like a calf at a new gate",
      "meaning": "to stare blankly, without understanding a thing",
      "equivalent": "look like a deer in the headlights",
      "example": "Ko so ga vprašali o proračunu, je gledal kot tele v nova vrata.",
      "exampleEn": "When they asked him about the budget, he looked like a deer in the headlights.",
      "note": "Mocking, so it is safer said about someone than to their face.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "nositi srce na dlani",
      "literal": "to carry one's heart on one's palm",
      "meaning": "to be open about one's feelings and hide nothing",
      "equivalent": "wear one's heart on one's sleeve",
      "example": "Vedno nosi srce na dlani in ne skriva svojih čustev.",
      "exampleEn": "She always wears her heart on her sleeve and hides nothing she feels.",
      "tags": [
        "emotions",
        "character"
      ]
    }
  ],
  "sq": [
    {
      "idiom": "s'prish punë",
      "literal": "it does not spoil work",
      "meaning": "it does not matter, it causes no problem",
      "equivalent": "no big deal",
      "example": "S'prish punë, e bëjmë nesër.",
      "exampleEn": "No big deal, we will do it tomorrow.",
      "tags": [
        "everyday",
        "talk"
      ]
    },
    {
      "idiom": "bie në sy",
      "literal": "to fall into the eye",
      "meaning": "to stand out and be noticed straight away",
      "equivalent": "catch the eye",
      "example": "Talenti i tij bie në sy që në fillim.",
      "exampleEn": "His talent catches the eye right from the start.",
      "tags": [
        "everyday",
        "character"
      ]
    },
    {
      "idiom": "qoftë larg",
      "literal": "may it be far",
      "meaning": "said to keep misfortune away when something bad is mentioned",
      "equivalent": "God forbid",
      "example": "Qoftë larg, po sikur të na ndodhë diçka e keqe rrugës?",
      "exampleEn": "God forbid, but what if something bad happens to us on the way?",
      "note": "Albanians add it almost automatically whenever illness, accidents or death come up in conversation.",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "nuk e çan kokën",
      "literal": "he does not split his head",
      "meaning": "not to worry or bother about something at all",
      "equivalent": "not lose any sleep over it",
      "example": "Ai nuk e çan kokën fare për notat.",
      "exampleEn": "He does not lose any sleep over his grades.",
      "tags": [
        "everyday",
        "character"
      ]
    },
    {
      "idiom": "më ka marrë malli",
      "literal": "longing has taken me",
      "meaning": "to miss someone or something badly",
      "example": "Më ka marrë malli për ty dhe për shtëpinë.",
      "exampleEn": "I miss you and I miss home.",
      "tags": [
        "love",
        "emotions"
      ]
    },
    {
      "idiom": "të lumtë dora",
      "literal": "may your hand be blessed",
      "meaning": "well done, said to praise something a person made or cooked",
      "example": "Byreku ishte shumë i shijshëm, të lumtë dora!",
      "exampleEn": "The byrek was delicious, well done!",
      "note": "Warm everyday praise for handiwork or food, and the shorter të lumtë works as a general well done.",
      "tags": [
        "talk",
        "work"
      ]
    },
    {
      "idiom": "i vjen për dore",
      "literal": "it comes to the hand for him",
      "meaning": "to be naturally good at something and do it with ease",
      "equivalent": "have a knack for something",
      "example": "Asaj punët e kuzhinës i vijnë shumë për dore.",
      "exampleEn": "She has a real knack for cooking.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "gjaku nuk bëhet ujë",
      "literal": "blood does not become water",
      "meaning": "family ties hold whatever happens",
      "equivalent": "blood is thicker than water",
      "example": "Edhe pse u zunë, gjaku nuk bëhet ujë, janë vëllezër.",
      "exampleEn": "Even though they fell out, blood is thicker than water, they are brothers.",
      "tags": [
        "character",
        "emotions"
      ]
    },
    {
      "idiom": "sa hap e mbyll sytë",
      "literal": "as long as it takes to open and close the eyes",
      "meaning": "in a very short moment",
      "equivalent": "in the blink of an eye",
      "example": "Pushimet kaluan sa hap e mbyll sytë.",
      "exampleEn": "The holidays went by in the blink of an eye.",
      "tags": [
        "time",
        "everyday"
      ]
    },
    {
      "idiom": "ia mbathi",
      "literal": "he put his shoes on",
      "meaning": "to run away fast, usually to escape trouble",
      "equivalent": "take to one's heels",
      "example": "Sapo pa policinë, ia mbathi.",
      "exampleEn": "As soon as he saw the police, he took to his heels.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "e humbi mendjen",
      "literal": "he lost the mind",
      "meaning": "to be so taken with someone or something that you can no longer think straight",
      "equivalent": "lose one's head over someone",
      "example": "E humbi mendjen pas asaj vajze.",
      "exampleEn": "He completely lost his head over that girl.",
      "tags": [
        "love",
        "emotions"
      ]
    },
    {
      "idiom": "s'ma ha mendja",
      "literal": "my mind does not eat it for me",
      "meaning": "I doubt it, I do not think that will happen",
      "example": "S'ma ha mendja se do të vijë sot.",
      "exampleEn": "I doubt he will come today.",
      "note": "The affirmative ma ha mendja se... is just as common and means I reckon or I have a feeling that.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "doli në shesh",
      "literal": "it came out into the square",
      "meaning": "something hidden became publicly known",
      "equivalent": "come to light",
      "example": "Pas shumë vitesh heshtje, e vërteta doli në shesh.",
      "exampleEn": "After many years of silence, the truth came to light.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "e bën qimen tra",
      "literal": "to turn a hair into a beam",
      "meaning": "to blow a small thing out of all proportion",
      "equivalent": "make a mountain out of a molehill",
      "example": "Mos e bëj qimen tra, s'ka ndodhur asgjë e tmerrshme.",
      "exampleEn": "Do not make a mountain out of a molehill, nothing terrible has happened.",
      "tags": [
        "talk",
        "emotions"
      ]
    },
    {
      "idiom": "i hedh hi syve",
      "literal": "to throw ash in someone's eyes",
      "meaning": "to mislead someone by covering up the truth",
      "equivalent": "pull the wool over someone's eyes",
      "example": "Mos u përpiq të më hedhësh hi syve, e di të vërtetën.",
      "exampleEn": "Do not try to pull the wool over my eyes, I know the truth.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "e la në baltë",
      "literal": "he left him in the mud",
      "meaning": "to abandon someone at the worst possible moment",
      "equivalent": "leave someone in the lurch",
      "example": "Kur pati nevojë për ndihmë, shokët e lanë në baltë.",
      "exampleEn": "When he needed help, his friends left him in the lurch.",
      "tags": [
        "trouble",
        "character"
      ]
    },
    {
      "idiom": "i doli boja",
      "literal": "the paint came off him",
      "meaning": "someone's real and worse nature became visible",
      "equivalent": "show one's true colours",
      "example": "Pas gjithë atyre premtimeve, më në fund i doli boja.",
      "exampleEn": "After all those promises, he finally showed his true colours.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "larg sysh, larg zemrës",
      "literal": "far from eyes, far from the heart",
      "meaning": "people you stop seeing are soon forgotten",
      "equivalent": "out of sight, out of mind",
      "example": "Që kur u largua, s'e kujton njeri, larg sysh, larg zemrës.",
      "exampleEn": "Since he left, nobody remembers him, out of sight, out of mind.",
      "note": "A proverb rather than a phrase you slot into a sentence, and it comes up often about relatives who have emigrated.",
      "tags": [
        "love",
        "emotions"
      ]
    },
    {
      "idiom": "ka një dërrasë mangët",
      "literal": "to have one plank missing",
      "meaning": "to be a bit crazy, not quite right in the head",
      "equivalent": "have a screw loose",
      "example": "Mos e merr seriozisht, ai ka një dërrasë mangët.",
      "exampleEn": "Do not take him seriously, he has a screw loose.",
      "note": "Informal and mocking, fine among friends but rude to the person's face.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "ka kapur qiellin me dorë",
      "literal": "to have caught the sky with one's hand",
      "meaning": "to think you have pulled off something extraordinary and to get big headed about it",
      "equivalent": "get too big for one's boots",
      "example": "Fitoi një lojë dhe tani mendon se ka kapur qiellin me dorë.",
      "exampleEn": "He won one game and now he is far too big for his boots.",
      "note": "Said with mockery, about a small success that has gone to someone's head.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "i fluturoi mendja",
      "literal": "the mind flew away from him",
      "meaning": "one's thoughts drift off and attention is lost",
      "equivalent": "be miles away",
      "example": "Në mes të mësimit i fluturoi mendja diku tjetër.",
      "exampleEn": "In the middle of the lesson he was miles away.",
      "tags": [
        "everyday",
        "emotions"
      ]
    },
    {
      "idiom": "shpëtoi për një qime",
      "literal": "he escaped by one hair",
      "meaning": "to avoid something bad by the narrowest margin",
      "equivalent": "by the skin of one's teeth",
      "example": "Aksidenti ishte i rëndë, por ai shpëtoi për një qime.",
      "exampleEn": "The crash was serious, but he escaped by the skin of his teeth.",
      "tags": [
        "luck",
        "trouble"
      ]
    },
    {
      "idiom": "doli faqebardhë",
      "literal": "he came out white faced",
      "meaning": "to come through a test with honour and bring no shame on the family",
      "example": "Djali u përgatit mirë dhe doli faqebardhë në provim.",
      "exampleEn": "The boy prepared well and came out of the exam with his head held high.",
      "note": "Honour and shame are read on the face in Albanian, so the opposite, faqezi, means disgraced.",
      "tags": [
        "character",
        "work"
      ]
    },
    {
      "idiom": "e bën rrush e kumbulla",
      "literal": "to make it grapes and plums",
      "meaning": "to squander money or property recklessly",
      "equivalent": "spend money like water",
      "example": "Trashëgiminë e babait e bëri rrush e kumbulla brenda dy vjetësh.",
      "exampleEn": "He squandered his father's inheritance within two years.",
      "tags": [
        "money",
        "trouble"
      ]
    },
    {
      "idiom": "e ka si bukë e djathë",
      "literal": "to have it like bread and cheese",
      "meaning": "to find something very easy and routine",
      "equivalent": "a piece of cake",
      "example": "Ai e ka si bukë e djathë të zgjidhë çdo problem të matematikës.",
      "exampleEn": "Solving any maths problem is a piece of cake for him.",
      "tags": [
        "work",
        "everyday"
      ]
    }
  ],
  "sr": [
    {
      "idiom": "Baš me briga",
      "literal": "it really worries me",
      "meaning": "I do not care about it at all",
      "equivalent": "couldn't care less",
      "example": "Baš me briga šta drugi misle o meni.",
      "exampleEn": "I couldn't care less what other people think of me.",
      "note": "The words literally say the opposite of what is meant, and the tone is dismissive, so it can sound rude to the person you are talking to.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "Ići nekome na živce",
      "literal": "to go on someone's nerves",
      "meaning": "to irritate someone over and over",
      "equivalent": "get on someone's nerves",
      "example": "Komšijin pas mi već ceo dan ide na živce.",
      "exampleEn": "The neighbour's dog has been getting on my nerves all day.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "Preko glave mi je",
      "literal": "it is over my head",
      "meaning": "to have had enough of something and be unable to take any more of it",
      "equivalent": "have had it up to here",
      "example": "Preko glave mi je svakodnevnih gužvi u gradu.",
      "exampleEn": "I have had it up to here with the daily traffic jams in town.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "Praviti se Englez",
      "literal": "to make oneself an Englishman",
      "meaning": "to act as if one has not noticed or understood something inconvenient",
      "equivalent": "play dumb",
      "example": "Znam da si video poruku, nemoj da se praviš Englez.",
      "exampleEn": "I know you saw the message, do not play dumb.",
      "note": "No dig at English people is meant, the picture is simply a foreigner who does not follow what is going on.",
      "tags": [
        "character",
        "talk"
      ]
    },
    {
      "idiom": "Kao grom iz vedra neba",
      "literal": "like thunder from a clear sky",
      "meaning": "completely unexpected and sudden",
      "equivalent": "out of the blue",
      "example": "Njegova ostavka je došla kao grom iz vedra neba.",
      "exampleEn": "His resignation came out of the blue.",
      "tags": [
        "trouble",
        "time"
      ]
    },
    {
      "idiom": "Praviti od muve slona",
      "literal": "to make an elephant out of a fly",
      "meaning": "to exaggerate a small problem into a huge one",
      "equivalent": "make a mountain out of a molehill",
      "example": "Smiri se, ne pravi od muve slona.",
      "exampleEn": "Calm down, do not make a mountain out of a molehill.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "Biti na sedmom nebu",
      "literal": "to be on the seventh heaven",
      "meaning": "to be extremely happy",
      "equivalent": "be on cloud nine",
      "example": "Kad je dobila posao, bila je na sedmom nebu.",
      "exampleEn": "When she got the job, she was on cloud nine.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Pao mi je kamen sa srca",
      "literal": "a stone fell off my heart",
      "meaning": "to feel a huge relief after worrying",
      "equivalent": "a weight off one's shoulders",
      "example": "Kad sam čuo da su svi dobro, pao mi je kamen sa srca.",
      "exampleEn": "When I heard that everyone was fine, it was a weight off my shoulders.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Vući nekoga za nos",
      "literal": "to pull someone by the nose",
      "meaning": "to deceive someone and keep them waiting with empty promises",
      "equivalent": "string someone along",
      "example": "Prestani da me vučeš za nos i reci mi istinu.",
      "exampleEn": "Stop stringing me along and tell me the truth.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "Nemati dlake na jeziku",
      "literal": "to have no hair on the tongue",
      "meaning": "to speak bluntly and say exactly what one thinks",
      "equivalent": "not mince words",
      "example": "Moja baba nema dlake na jeziku, sve kaže u lice.",
      "exampleEn": "My grandmother does not mince words, she says everything to your face.",
      "tags": [
        "character",
        "talk"
      ]
    },
    {
      "idiom": "Držati fige",
      "literal": "to hold figs",
      "meaning": "to wish someone good luck",
      "equivalent": "keep one's fingers crossed",
      "example": "Držim ti fige za sutrašnji ispit.",
      "exampleEn": "I am keeping my fingers crossed for your exam tomorrow.",
      "note": "The matching gesture is a fist with the thumb pushed between the index and middle fingers, not crossed fingers.",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "Držati jezik za zubima",
      "literal": "to hold the tongue behind the teeth",
      "meaning": "to keep quiet and say nothing about something",
      "equivalent": "hold one's tongue",
      "example": "Bolje drži jezik za zubima dok se šef ne smiri.",
      "exampleEn": "You had better hold your tongue until the boss calms down.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "Ubiti dve muve jednim udarcem",
      "literal": "to kill two flies with one blow",
      "meaning": "to achieve two things with a single action",
      "equivalent": "kill two birds with one stone",
      "example": "Ako usput svratim u poštu, ubiću dve muve jednim udarcem.",
      "exampleEn": "If I stop by the post office on the way, I will kill two birds with one stone.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "Tražiti dlaku u jajetu",
      "literal": "to look for a hair in the egg",
      "meaning": "to look for faults in something that is basically fine",
      "equivalent": "split hairs",
      "example": "Sve je uradio kako treba, a ti opet tražiš dlaku u jajetu.",
      "exampleEn": "He did everything properly, and you are still splitting hairs.",
      "tags": [
        "character",
        "talk"
      ]
    },
    {
      "idiom": "Kad na vrbi rodi grožđe",
      "literal": "when grapes grow on a willow",
      "meaning": "never, at a moment that will never come",
      "equivalent": "when pigs fly",
      "example": "Vratiće mi taj dug kad na vrbi rodi grožđe.",
      "exampleEn": "He will pay me back that debt when pigs fly.",
      "tags": [
        "time",
        "talk"
      ]
    },
    {
      "idiom": "Bacati pare kroz prozor",
      "literal": "to throw money through the window",
      "meaning": "to waste money on things that give nothing back",
      "equivalent": "throw money down the drain",
      "example": "Kupovati treći telefon ove godine znači bacati pare kroz prozor.",
      "exampleEn": "Buying a third phone this year means throwing money down the drain.",
      "note": "Pare is the everyday word for money in Serbia, the more neutral version of the phrase uses novac.",
      "tags": [
        "money"
      ]
    },
    {
      "idiom": "Fali mu daska u glavi",
      "literal": "a plank is missing in his head",
      "meaning": "to be a bit crazy or to behave very oddly",
      "equivalent": "have a screw loose",
      "example": "Ponaša se toliko čudno da mu sigurno fali daska u glavi.",
      "exampleEn": "He behaves so strangely that he must have a screw loose.",
      "note": "This is a blunt judgement about someone's sanity, fine as a joke among friends but not to their face.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "Gledati kroz prste",
      "literal": "to look through the fingers",
      "meaning": "to overlook someone's mistakes on purpose and go easy on them",
      "equivalent": "turn a blind eye",
      "example": "Profesor mu gleda kroz prste jer je najbolji igrač u školi.",
      "exampleEn": "The teacher turns a blind eye to him because he is the best player in the school.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "Kap koja je prelila čašu",
      "literal": "the drop that made the glass overflow",
      "meaning": "the small thing that finally makes someone lose patience",
      "equivalent": "the last straw",
      "example": "Njegovo kašnjenje na venčanje bilo je kap koja je prelila čašu.",
      "exampleEn": "Him being late for the wedding was the last straw.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "Ostaviti nekoga na cedilu",
      "literal": "to leave someone on the strainer",
      "meaning": "to abandon someone exactly when they need help",
      "equivalent": "leave someone in the lurch",
      "example": "Obećao je da će pomoći, a onda nas je ostavio na cedilu.",
      "exampleEn": "He promised to help and then left us in the lurch.",
      "tags": [
        "trouble",
        "character"
      ]
    },
    {
      "idiom": "Biti pod papučom",
      "literal": "to be under the slipper",
      "meaning": "to be completely controlled by one's wife or partner",
      "equivalent": "be henpecked",
      "example": "Otkad se oženio, potpuno je pod papučom.",
      "exampleEn": "Since he got married, he has been completely henpecked.",
      "note": "It is almost always said about a husband and always as a tease, so save it for close company.",
      "tags": [
        "love",
        "character"
      ]
    },
    {
      "idiom": "Kupiti mačku u džaku",
      "literal": "to buy a cat in a sack",
      "meaning": "to buy something without checking what it is first",
      "equivalent": "buy a pig in a poke",
      "example": "Pogledaj auto pre nego što ga platiš, da ne kupiš mačku u džaku.",
      "exampleEn": "Look the car over before you pay for it, so you do not buy a pig in a poke.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "Sedeti na dve stolice",
      "literal": "to sit on two chairs",
      "meaning": "to try to keep two opposing sides happy at the same time",
      "equivalent": "have a foot in both camps",
      "example": "U ovoj svađi ne možeš da sediš na dve stolice.",
      "exampleEn": "In this quarrel you cannot have a foot in both camps.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "Loviti u mutnom",
      "literal": "to fish in murky water",
      "meaning": "to profit from a confused situation that nobody can see clearly",
      "equivalent": "fish in troubled waters",
      "example": "Dok su se svi svađali, on je mirno lovio u mutnom.",
      "exampleEn": "While everyone was arguing, he was quietly fishing in troubled waters.",
      "tags": [
        "money",
        "trouble"
      ]
    },
    {
      "idiom": "Imati putera na glavi",
      "literal": "to have butter on one's head",
      "meaning": "to have something to hide and so be in no position to accuse anyone else",
      "example": "On najglasnije priča o poštenju, a i sam ima putera na glavi.",
      "exampleEn": "He talks the loudest about honesty, and he has plenty to hide himself.",
      "note": "The phrase came into Serbian from German, and it is heard less often than the other expressions here.",
      "tags": [
        "character",
        "trouble"
      ]
    }
  ],
  "sv": [
    {
      "idiom": "Hålla tummarna",
      "literal": "to hold the thumbs",
      "meaning": "to wish someone luck, to hope something goes well",
      "equivalent": "keep your fingers crossed",
      "example": "Jag håller tummarna för dig på provet imorgon.",
      "exampleEn": "I'm keeping my fingers crossed for you for the test tomorrow.",
      "note": "Swedes squeeze the thumb inside a closed fist rather than crossing two fingers.",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "Ta det med en nypa salt",
      "literal": "to take it with a pinch of salt",
      "meaning": "to not believe something fully, to treat it with some doubt",
      "equivalent": "take it with a grain of salt",
      "example": "Ta hans historier med en nypa salt, han överdriver gärna.",
      "exampleEn": "Take his stories with a grain of salt, he does like to exaggerate.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "Slå två flugor i en smäll",
      "literal": "to hit two flies in one swat",
      "meaning": "to solve two things with a single action",
      "equivalent": "kill two birds with one stone",
      "example": "Om vi handlar mat på vägen hem slår vi två flugor i en smäll.",
      "exampleEn": "If we buy groceries on the way home, we kill two birds with one stone.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "Gå åt skogen",
      "literal": "to go towards the forest",
      "meaning": "to go badly wrong, to end in failure",
      "equivalent": "to go south",
      "example": "Hela projektet gick åt skogen efter att chefen slutade.",
      "exampleEn": "The whole project went south after the boss quit.",
      "note": "Informal. The related \"Dra åt skogen!\", aimed at a person, means \"get lost\" and is rude.",
      "tags": [
        "trouble",
        "work"
      ]
    },
    {
      "idiom": "Ha is i magen",
      "literal": "to have ice in the stomach",
      "meaning": "to stay calm and patient under pressure",
      "equivalent": "to keep your cool",
      "example": "Målvakten hade is i magen och räddade straffen.",
      "exampleEn": "The goalkeeper kept his cool and saved the penalty.",
      "tags": [
        "character",
        "emotions"
      ]
    },
    {
      "idiom": "Det är ingen ko på isen",
      "literal": "there is no cow on the ice",
      "meaning": "there is no rush and nothing to worry about",
      "example": "Ta det lugnt, det är ingen ko på isen.",
      "exampleEn": "Take it easy, there's no rush.",
      "note": "The longer version adds \"så länge rumpan är i land\" (as long as the backside is on shore), which people often quote for fun.",
      "tags": [
        "trouble",
        "time"
      ]
    },
    {
      "idiom": "Ingen fara på taket",
      "literal": "no danger on the roof",
      "meaning": "there is no problem, everything is fine",
      "equivalent": "no worries",
      "example": "Ingen fara på taket, vi hinner ändå.",
      "exampleEn": "No worries, we'll still make it in time.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "Gå som katten kring het gröt",
      "literal": "to walk like the cat around hot porridge",
      "meaning": "to avoid saying what you really mean",
      "equivalent": "beat around the bush",
      "example": "Sluta gå som katten kring het gröt och säg vad du tycker.",
      "exampleEn": "Stop beating around the bush and say what you think.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "Ta tjuren vid hornen",
      "literal": "to take the bull by the horns",
      "meaning": "to deal with a difficult problem head on",
      "equivalent": "take the bull by the horns",
      "example": "Det är dags att ta tjuren vid hornen och prata med chefen.",
      "exampleEn": "It's time to take the bull by the horns and talk to the boss.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "Bita i det sura äpplet",
      "literal": "to bite into the sour apple",
      "meaning": "to accept something unpleasant that cannot be avoided",
      "equivalent": "bite the bullet",
      "example": "Jag får bita i det sura äpplet och betala böterna.",
      "exampleEn": "I'll have to bite the bullet and pay the fine.",
      "tags": [
        "trouble",
        "character"
      ]
    },
    {
      "idiom": "Ha en skruv lös",
      "literal": "to have a screw loose",
      "meaning": "to be a bit crazy or eccentric",
      "equivalent": "have a screw loose",
      "example": "Hon har verkligen en skruv lös ibland.",
      "exampleEn": "She really has a screw loose sometimes.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "Vara ute och cykla",
      "literal": "to be out cycling",
      "meaning": "to be completely mistaken about something",
      "equivalent": "to be barking up the wrong tree",
      "example": "Om du tror att jag ljög är du helt ute och cyklar.",
      "exampleEn": "If you think I lied, you're completely off the mark.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "Glida in på en räkmacka",
      "literal": "to slide in on a shrimp sandwich",
      "meaning": "to get somewhere easily, without having to work for it",
      "equivalent": "to have it handed to you on a silver platter",
      "example": "Han har inte glidit in på någon räkmacka, han har jobbat hårt för allt.",
      "exampleEn": "He hasn't had anything handed to him on a silver platter, he has worked hard for everything.",
      "note": "Usually said in the negative, to insist that someone earned what they have.",
      "tags": [
        "work",
        "luck"
      ]
    },
    {
      "idiom": "Trampa i klaveret",
      "literal": "to step on the piano",
      "meaning": "to say something tactless and embarrassing",
      "equivalent": "put your foot in your mouth",
      "example": "Han trampade i klaveret när han frågade om hennes ålder.",
      "exampleEn": "He put his foot in his mouth when he asked about her age.",
      "note": "Klaver is an old collective word for keyboard instruments, so the picture is someone stomping on the keys.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "Lägga näsan i blöt",
      "literal": "to put the nose in soak",
      "meaning": "to interfere in something that is none of your business",
      "equivalent": "to stick your nose in",
      "example": "Han måste alltid lägga näsan i blöt i andras affärer.",
      "exampleEn": "He always has to stick his nose into other people's business.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "Dra sitt strå till stacken",
      "literal": "to pull one's straw to the anthill",
      "meaning": "to contribute your share to a shared effort",
      "equivalent": "to do your bit",
      "example": "Alla i gruppen måste dra sitt strå till stacken.",
      "exampleEn": "Everyone in the group has to do their bit.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "Här ligger en hund begraven",
      "literal": "here lies a dog buried",
      "meaning": "something suspicious is going on, there is more to this than it seems",
      "equivalent": "there's something fishy going on",
      "example": "Varför säger ingen sanningen? Här ligger en hund begraven.",
      "exampleEn": "Why is nobody telling the truth? There's something fishy going on here.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "Ana ugglor i mossen",
      "literal": "to sense owls in the bog",
      "meaning": "to suspect that something is not right",
      "equivalent": "to smell a rat",
      "example": "Jag anar ugglor i mossen, han brukar inte vara så tyst.",
      "exampleEn": "I smell a rat, he isn't usually this quiet.",
      "tags": [
        "trouble"
      ]
    },
    {
      "idiom": "Det är hugget som stucket",
      "literal": "it is chopped as stabbed",
      "meaning": "it makes no real difference which option you pick",
      "equivalent": "six of one, half a dozen of the other",
      "example": "Vi kan åka nu eller imorgon, det är hugget som stucket.",
      "exampleEn": "We can leave now or tomorrow, it's six of one and half a dozen of the other.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "Ha rent mjöl i påsen",
      "literal": "to have clean flour in the bag",
      "meaning": "to be honest and have nothing to hide",
      "equivalent": "to have clean hands",
      "example": "Företaget hävdar att de har rent mjöl i påsen.",
      "exampleEn": "The company claims it has nothing to hide.",
      "tags": [
        "character",
        "work"
      ]
    },
    {
      "idiom": "Ha tummen mitt i handen",
      "literal": "to have the thumb in the middle of the hand",
      "meaning": "to be clumsy with your hands, bad at practical work",
      "equivalent": "to be all thumbs",
      "example": "Be inte mig fixa lampan, jag har tummen mitt i handen.",
      "exampleEn": "Don't ask me to fix the lamp, I'm all thumbs.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "Ha en räv bakom örat",
      "literal": "to have a fox behind the ear",
      "meaning": "to be sly and to have a hidden plan",
      "equivalent": "to be a sly fox",
      "example": "Akta dig för honom, han har en räv bakom örat.",
      "exampleEn": "Watch out for him, he's a sly fox.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "Kasta pärlor åt svin",
      "literal": "to throw pearls to swine",
      "meaning": "to give something valuable to someone who cannot appreciate it",
      "equivalent": "cast pearls before swine",
      "example": "Att bjuda honom på ett fint vin är som att kasta pärlor åt svin.",
      "exampleEn": "Serving him a fine wine is like casting pearls before swine.",
      "note": "It comes from the Bible, so it sounds a little literary.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "Skita i det blå skåpet",
      "literal": "to shit in the blue cupboard",
      "meaning": "to go far too far, to blunder badly",
      "example": "Nu har du verkligen skitit i det blå skåpet.",
      "exampleEn": "Now you've really gone way too far.",
      "note": "Crude language, fine among close friends but not at work. The 1981 film Göta kanal made it a household phrase.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "Sätta sin sista potatis",
      "literal": "to plant one's last potato",
      "meaning": "to do something you will not get away with, to be finished",
      "equivalent": "your goose is cooked",
      "example": "Om du sprider ryktet vidare har du satt din sista potatis.",
      "exampleEn": "If you spread that rumor any further, your goose is cooked.",
      "note": "Informal and usually said half jokingly.",
      "tags": [
        "trouble",
        "talk"
      ]
    }
  ],
  "sw": [
    {
      "idiom": "kukata tamaa",
      "literal": "to cut hope",
      "meaning": "to give up, to lose hope",
      "equivalent": "to throw in the towel",
      "example": "Ijapokuwa alishindwa mara tatu, hakukata tamaa.",
      "exampleEn": "Even though he failed three times, he did not give up.",
      "tags": [
        "emotions",
        "character"
      ]
    },
    {
      "idiom": "kutia moyo",
      "literal": "to put heart",
      "meaning": "to encourage someone, to lift their spirits",
      "example": "Mama alimtia moyo binti yake kabla ya mashindano.",
      "exampleEn": "The mother encouraged her daughter before the competition.",
      "tags": [
        "emotions",
        "character"
      ]
    },
    {
      "idiom": "kuwa macho",
      "literal": "to be eyes",
      "meaning": "to be alert, vigilant, watchful",
      "equivalent": "to keep your eyes peeled",
      "example": "Kuwa macho usiku huu, kuna taarifa za wezi katika eneo hili.",
      "exampleEn": "Be alert tonight, there are reports of thieves in this area.",
      "tags": [
        "everyday",
        "trouble"
      ]
    },
    {
      "idiom": "kupiga soga",
      "literal": "to hit chat",
      "meaning": "to chat casually about nothing in particular",
      "equivalent": "to shoot the breeze",
      "example": "Tulikaa dukani tukipiga soga hadi usiku.",
      "exampleEn": "We sat at the shop chatting until nightfall.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "kuvunja moyo",
      "literal": "to break heart",
      "meaning": "to discourage someone, to drain their motivation",
      "example": "Maneno yake yalinivunja moyo nikaacha kuomba kazi.",
      "exampleEn": "His words discouraged me and I stopped applying for jobs.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "kufa moyo",
      "literal": "to die heart",
      "meaning": "to become discouraged, to give up inside",
      "equivalent": "to lose heart",
      "example": "Usife moyo, mtihani mwingine utakuja.",
      "exampleEn": "Do not lose heart, another exam will come.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "kula rushwa",
      "literal": "to eat a bribe",
      "meaning": "to take bribes, to be corrupt",
      "equivalent": "to be on the take",
      "example": "Afisa yule alifukuzwa kazi kwa kula rushwa.",
      "exampleEn": "That officer was fired for taking bribes.",
      "note": "It describes the person receiving the bribe, while the one paying it is a mtoa rushwa.",
      "tags": [
        "money",
        "trouble"
      ]
    },
    {
      "idiom": "kutupa jicho",
      "literal": "to throw an eye",
      "meaning": "to take a quick look at something",
      "equivalent": "to cast an eye over",
      "example": "Tafadhali tupa jicho kwenye barua hii kabla sijaituma.",
      "exampleEn": "Please take a quick look at this letter before I send it.",
      "tags": [
        "everyday",
        "work"
      ]
    },
    {
      "idiom": "kutia chumvi",
      "literal": "to add salt",
      "meaning": "to exaggerate when telling something",
      "equivalent": "to lay it on thick",
      "example": "Anapenda kutia chumvi anaposimulia habari.",
      "exampleEn": "He likes to exaggerate when he tells a story.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "kupiga moyo konde",
      "literal": "to hit the heart with a fist",
      "meaning": "to gather your courage and face something hard",
      "equivalent": "to steel yourself",
      "example": "Nilipiga moyo konde nikamwambia ukweli.",
      "exampleEn": "I gathered my courage and told him the truth.",
      "tags": [
        "character",
        "emotions"
      ]
    },
    {
      "idiom": "kufumba na kufumbua",
      "literal": "to close and to open the eyes",
      "meaning": "in a very short moment, almost instantly",
      "equivalent": "in the blink of an eye",
      "example": "Kwa kufumba na kufumbua, mwaka mmoja umepita.",
      "exampleEn": "In the blink of an eye, a whole year has gone by.",
      "tags": [
        "time",
        "everyday"
      ]
    },
    {
      "idiom": "kupiga chenga",
      "literal": "to hit a dodge",
      "meaning": "to dodge or evade a question, an issue or a person",
      "example": "Waziri alipiga chenga swali la mwandishi.",
      "exampleEn": "The minister dodged the reporter's question.",
      "note": "It comes from football, where a chenga is a dribble past a defender.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "kula njama",
      "literal": "to eat a plot",
      "meaning": "to conspire, to scheme together against someone",
      "equivalent": "to hatch a plot",
      "example": "Walikuwa wanakula njama za kumwondoa mkurugenzi.",
      "exampleEn": "They were plotting to remove the director.",
      "tags": [
        "trouble",
        "work"
      ]
    },
    {
      "idiom": "kuvuta subira",
      "literal": "to pull patience",
      "meaning": "to wait patiently, to keep holding on",
      "equivalent": "to hang in there",
      "example": "Vuta subira, majibu yatatoka wiki ijayo.",
      "exampleEn": "Be patient, the results will come out next week.",
      "tags": [
        "time",
        "character"
      ]
    },
    {
      "idiom": "kula chumvi nyingi",
      "literal": "to eat much salt",
      "meaning": "to have lived long and seen a lot of life",
      "equivalent": "to have been around the block",
      "example": "Babu yangu amekula chumvi nyingi, ushauri wake ni wa thamani.",
      "exampleEn": "My grandfather has seen a lot of life, his advice is valuable.",
      "tags": [
        "time",
        "character"
      ]
    },
    {
      "idiom": "kuwa na roho ngumu",
      "literal": "to have a hard soul",
      "meaning": "to be hard hearted or unwilling to give",
      "equivalent": "to have a heart of stone",
      "example": "Tajiri yule ana roho ngumu, hasaidii hata jamaa zake.",
      "exampleEn": "That rich man has a heart of stone, he does not even help his own relatives.",
      "tags": [
        "character",
        "money"
      ]
    },
    {
      "idiom": "kuumiza kichwa",
      "literal": "to hurt the head",
      "meaning": "to worry or think hard over a problem",
      "equivalent": "to rack your brain",
      "example": "Usiumize kichwa juu ya jambo hilo, tutalitatua kesho.",
      "exampleEn": "Do not trouble yourself over that matter, we will sort it out tomorrow.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "kuwa na mkono mrefu",
      "literal": "to have a long hand",
      "meaning": "to be in the habit of stealing",
      "equivalent": "to have sticky fingers",
      "example": "Mfanyakazi mmoja ofisini ana mkono mrefu, vitu vinapotea kila mara.",
      "exampleEn": "One worker in the office has sticky fingers, things go missing all the time.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "kutia fora",
      "literal": "to put a win",
      "meaning": "to stand out, to do better than everyone else",
      "equivalent": "to steal the show",
      "example": "Timu yetu ilitia fora katika mashindano ya mwaka huu.",
      "exampleEn": "Our team stood out at this year's competition.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "kuvunja mbavu",
      "literal": "to break ribs",
      "meaning": "to make people laugh very hard",
      "equivalent": "to have someone in stitches",
      "example": "Mchekeshaji yule alivunja mbavu za watu jana usiku.",
      "exampleEn": "That comedian had everyone in stitches last night.",
      "tags": [
        "emotions",
        "talk"
      ]
    },
    {
      "idiom": "kupiga danadana",
      "literal": "to hit to and fro",
      "meaning": "to stall, to keep putting someone off with delays",
      "equivalent": "to give someone the runaround",
      "example": "Ofisi ile ilinipiga danadana kwa miezi miwili bila kunipa jibu.",
      "exampleEn": "That office gave me the runaround for two months without giving me an answer.",
      "note": "Most often heard in the passive, kupigwa danadana, about offices and officials that keep people waiting.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "kufyata mkia",
      "literal": "to tuck the tail",
      "meaning": "to back down out of fear, to retreat from a confrontation",
      "equivalent": "to turn tail",
      "example": "Alipoona polisi wanakuja, alifyata mkia akaondoka.",
      "exampleEn": "When he saw the police coming, he turned tail and left.",
      "note": "Mocking in tone, so it is not something you say politely to the person's face.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "kuwa na jicho baya",
      "literal": "to have a bad eye",
      "meaning": "to be envious of what other people have",
      "example": "Usimwonyeshe mafanikio yako, ana jicho baya.",
      "exampleEn": "Do not show him your success, he is the envious type.",
      "note": "It carries the old belief that an envious look can bring harm, so it is a heavy thing to say about someone.",
      "tags": [
        "character",
        "emotions"
      ]
    },
    {
      "idiom": "kula bata",
      "literal": "to eat duck",
      "meaning": "to enjoy yourself and have a very good time",
      "equivalent": "to live it up",
      "example": "Baada ya kulipwa mshahara, walikwenda mjini kula bata.",
      "exampleEn": "After they were paid, they went into town to live it up.",
      "note": "Informal slang, so it is out of place in formal writing.",
      "tags": [
        "money",
        "everyday"
      ]
    }
  ],
  "tl": [
    {
      "idiom": "bahala na",
      "literal": "it is up to fate now",
      "meaning": "whatever happens, happens, said when going ahead without knowing the outcome",
      "equivalent": "come what may",
      "example": "Bahala na, susubukan ko na lang kahit hindi pa ako handa.",
      "exampleEn": "Come what may, I will just try even though I am not ready yet.",
      "note": "Bahala means burden or responsibility, and speakers often connect it with Bathala (God). It mixes trust with fatalism, so it can sound either brave or careless.",
      "tags": [
        "everyday",
        "luck"
      ]
    },
    {
      "idiom": "matigas ang ulo",
      "literal": "the head is hard",
      "meaning": "stubborn, refusing to listen to advice",
      "equivalent": "hard-headed",
      "example": "Matigas ang ulo ng anak ko, ayaw makinig kahit kanino.",
      "exampleEn": "My son is stubborn, he will not listen to anyone.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "utang na loob",
      "literal": "debt of the inside",
      "meaning": "a deep moral obligation to repay a kindness or favor received",
      "equivalent": "a debt of gratitude",
      "example": "Malaki ang utang na loob ko sa kanya dahil tinulungan niya ako noong nahihirapan ako.",
      "exampleEn": "I owe him a great debt of gratitude because he helped me when I was struggling.",
      "note": "This is a core social value in the Philippines, and the obligation it names can last for years.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "mainit ang ulo",
      "literal": "the head is hot",
      "meaning": "in a bad temper, quick to get angry",
      "equivalent": "hot-headed",
      "example": "Huwag mo muna siyang kausapin, mainit pa ang ulo niya.",
      "exampleEn": "Do not talk to him yet, he is still in a bad temper.",
      "tags": [
        "emotions",
        "character"
      ]
    },
    {
      "idiom": "makapal ang mukha",
      "literal": "the face is thick",
      "meaning": "shameless, with no sense of embarrassment",
      "equivalent": "to have some nerve",
      "example": "Makapal talaga ang mukha niya para humingi na naman ng pera.",
      "exampleEn": "He really has some nerve asking for money again.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "mababaw ang luha",
      "literal": "the tears are shallow",
      "meaning": "crying very easily over small things",
      "equivalent": "to cry at the drop of a hat",
      "example": "Mababaw ang luha ko, umiiyak ako kahit sa mga patalastas.",
      "exampleEn": "I cry very easily, even at commercials.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "balat-sibuyas",
      "literal": "onion skin",
      "meaning": "easily hurt or offended by jokes or criticism",
      "equivalent": "thin-skinned",
      "example": "Huwag kang maging balat-sibuyas, biro lang ang sinabi niya.",
      "exampleEn": "Do not be so thin-skinned, what he said was only a joke.",
      "tags": [
        "character",
        "emotions"
      ]
    },
    {
      "idiom": "isang kahig, isang tuka",
      "literal": "one scratch, one peck",
      "meaning": "earning only enough for each day, with nothing left to save",
      "equivalent": "living hand to mouth",
      "example": "Isang kahig, isang tuka lang ang buhay namin pero masaya kami.",
      "exampleEn": "We live hand to mouth, but we are happy.",
      "note": "The picture is a chicken that has to scratch the ground for every peck of food it gets.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "ningas kugon",
      "literal": "a blaze of cogon grass",
      "meaning": "great enthusiasm at the start that dies out just as quickly",
      "equivalent": "a flash in the pan",
      "example": "Ningas kugon lang ang bagong diyeta niya, tatlong araw lang tumagal.",
      "exampleEn": "His new diet was a flash in the pan, it only lasted three days.",
      "note": "Dried cogon grass catches fire fast and burns out just as fast. Filipinos often apply the phrase to themselves as a national habit, so it usually reads as self-criticism.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "magsunog ng kilay",
      "literal": "to burn the eyebrows",
      "meaning": "to study very hard, especially late into the night",
      "equivalent": "to burn the midnight oil",
      "example": "Nagsusunog ng kilay si Maria gabi-gabi para makapasa sa pagsusulit.",
      "exampleEn": "Maria burns the midnight oil every night so she can pass the exam.",
      "tags": [
        "work",
        "time"
      ]
    },
    {
      "idiom": "pusong mamon",
      "literal": "sponge cake heart",
      "meaning": "softhearted, easily moved to pity",
      "equivalent": "to be a softie",
      "example": "Pusong mamon si Tatay, hindi niya kayang magalit nang matagal.",
      "exampleEn": "Dad is a softie, he cannot stay angry for long.",
      "note": "Mamon is a light Filipino sponge cake, which is where the image of softness comes from.",
      "tags": [
        "character",
        "emotions"
      ]
    },
    {
      "idiom": "mahaba ang dila",
      "literal": "the tongue is long",
      "meaning": "gossipy, unable to keep anything to oneself",
      "equivalent": "to have a big mouth",
      "example": "Ingat ka sa kanya, mahaba ang dila niya.",
      "exampleEn": "Be careful with her, she has a big mouth.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "nagbubuhat ng sariling bangko",
      "literal": "lifting one's own bench",
      "meaning": "praising oneself, bragging about one's own achievements",
      "equivalent": "to toot one's own horn",
      "example": "Nagbubuhat na naman siya ng sariling bangko sa harap ng mga bisita.",
      "exampleEn": "He is tooting his own horn again in front of the guests.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "sirang plaka",
      "literal": "broken record",
      "meaning": "someone who keeps repeating the same thing over and over",
      "equivalent": "a broken record",
      "example": "Parang sirang plaka si Nanay, paulit-ulit ang sermon niya.",
      "exampleEn": "Mom is like a broken record, she repeats the same lecture over and over.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "namamangka sa dalawang ilog",
      "literal": "paddling a boat in two rivers",
      "meaning": "keeping two romantic partners at the same time",
      "equivalent": "two-timing",
      "example": "Nalaman niyang namamangka pala sa dalawang ilog ang nobyo niya.",
      "exampleEn": "She found out that her boyfriend was two-timing her.",
      "note": "It is also said of politicians who back two parties at once.",
      "tags": [
        "love",
        "trouble"
      ]
    },
    {
      "idiom": "butas ang bulsa",
      "literal": "the pocket has a hole",
      "meaning": "broke, with no money left after spending it all",
      "equivalent": "strapped for cash",
      "example": "Butas talaga ang bulsa ko, kararating ko lang galing sa bakasyon.",
      "exampleEn": "I am really strapped for cash, I just got back from a vacation.",
      "tags": [
        "money"
      ]
    },
    {
      "idiom": "bulaklak ng dila",
      "literal": "flower of the tongue",
      "meaning": "flattering or exaggerated words with little sincerity behind them",
      "equivalent": "sweet talk",
      "example": "Huwag kang maniwala sa bulaklak ng dila niya.",
      "exampleEn": "Do not believe his sweet talk.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "bukas ang palad",
      "literal": "the palm is open",
      "meaning": "generous, always ready to give and to help",
      "equivalent": "open-handed",
      "example": "Bukas ang palad niya, lagi siyang tumutulong sa mga nangangailangan.",
      "exampleEn": "He is open-handed, he always helps those in need.",
      "tags": [
        "character",
        "money"
      ]
    },
    {
      "idiom": "kapit sa patalim",
      "literal": "clinging to the blade",
      "meaning": "taking a dangerous, desperate step because there is no other way out",
      "example": "Kapit sa patalim na lang kami para mapaaral ang mga anak namin.",
      "exampleEn": "We had no choice but to take that risk so we could keep our children in school.",
      "note": "It comes from the saying Ang taong nagigipit, sa patalim kumakapit (a person in dire straits will grab even a blade), and it usually points to poverty or work taken out of sheer need.",
      "tags": [
        "trouble",
        "money"
      ]
    },
    {
      "idiom": "may gatas pa sa labi",
      "literal": "still has milk on the lips",
      "meaning": "still young and inexperienced",
      "equivalent": "still wet behind the ears",
      "example": "May gatas pa sa labi niyan, huwag mo munang bigyan ng ganyang trabaho.",
      "exampleEn": "He is still wet behind the ears, do not give him that kind of job yet.",
      "note": "It sounds dismissive, so people say it about someone rather than to their face.",
      "tags": [
        "character",
        "time"
      ]
    },
    {
      "idiom": "ilaw ng tahanan",
      "literal": "light of the home",
      "meaning": "the mother of the family, seen as the one who keeps the household together",
      "example": "Si Nanay ang ilaw ng tahanan namin.",
      "exampleEn": "Mom is the light of our home.",
      "note": "Its counterpart is haligi ng tahanan (pillar of the home), meaning the father, and both turn up in speeches and school lessons.",
      "tags": [
        "everyday",
        "love"
      ]
    },
    {
      "idiom": "halang ang bituka",
      "literal": "the intestines lie crosswise",
      "meaning": "ruthless, capable of doing anything cruel",
      "equivalent": "to stop at nothing",
      "example": "Halang ang bituka ng mga taong iyon, kaya nilang manakit para sa pera.",
      "exampleEn": "Those people stop at nothing, they are capable of hurting someone for money.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "malaki ang bunganga",
      "literal": "the mouth is big",
      "meaning": "loud and boastful, with little to show for it",
      "equivalent": "all talk and no action",
      "example": "Malaki lang ang bunganga niya pero wala namang nagagawa.",
      "exampleEn": "He is all talk and no action, he never gets anything done.",
      "note": "Bunganga is a coarse word for mouth, normally used for animals, so this lands as an insult.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "puno't dulo",
      "literal": "beginning and end",
      "meaning": "the whole story of something, from what caused it to how it turned out",
      "equivalent": "the ins and outs",
      "example": "Sabihin mo sa akin ang buong puno't dulo ng pangyayari.",
      "exampleEn": "Tell me the ins and outs of what happened.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "nasa dulo ng dila",
      "literal": "it is at the tip of the tongue",
      "meaning": "almost remembered but not quite coming out",
      "equivalent": "on the tip of one's tongue",
      "example": "Alam ko ang pangalan niya, nasa dulo na ng dila ko.",
      "exampleEn": "I know his name, it is on the tip of my tongue.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "nagbibilang ng poste",
      "literal": "counting the posts",
      "meaning": "out of work and idling around with nothing to do",
      "example": "Anim na buwan na siyang nagbibilang ng poste mula nang matanggal sa trabaho.",
      "exampleEn": "He has been jobless and idle for six months since he was let go.",
      "note": "The picture is someone walking the streets with nothing to do, so it sounds slightly mocking.",
      "tags": [
        "work",
        "trouble"
      ]
    }
  ],
  "tr": [
    {
      "idiom": "Göz atmak",
      "literal": "to throw an eye",
      "meaning": "to take a quick look at something",
      "equivalent": "cast an eye over something",
      "example": "Şu rapora bir göz atar mısın?",
      "exampleEn": "Could you take a quick look at this report?",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "Göz kulak olmak",
      "literal": "to be eye and ear",
      "meaning": "to look after someone or something for a while",
      "equivalent": "keep an eye on",
      "example": "Ben yokken çocuklara göz kulak ol.",
      "exampleEn": "Keep an eye on the kids while I'm away.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "Kafayı yemek",
      "literal": "to eat one's head",
      "meaning": "to lose one's mind, to snap under stress",
      "equivalent": "go nuts",
      "example": "Bu gürültüyle kafayı yiyeceğim.",
      "exampleEn": "I'm going to lose my mind with this noise.",
      "note": "Very informal, fine with friends but out of place in formal speech.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "Dört gözle beklemek",
      "literal": "to wait with four eyes",
      "meaning": "to look forward to something impatiently",
      "equivalent": "wait with bated breath",
      "example": "Tatili dört gözle bekliyorum.",
      "exampleEn": "I can't wait for the holiday.",
      "tags": [
        "emotions",
        "time"
      ]
    },
    {
      "idiom": "Kulak asmamak",
      "literal": "to not hang an ear",
      "meaning": "to pay no attention to advice or warnings",
      "equivalent": "turn a deaf ear",
      "example": "Annesinin uyarılarına hiç kulak asmadı.",
      "exampleEn": "He paid no attention at all to his mother's warnings.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "Ayvayı yemek",
      "literal": "to eat the quince",
      "meaning": "to end up in serious trouble",
      "equivalent": "be toast",
      "example": "Sınava çalışmadım, ayvayı yedim.",
      "exampleEn": "I didn't study for the exam, I'm done for.",
      "note": "Slangy and informal, used between friends rather than at work.",
      "tags": [
        "trouble"
      ]
    },
    {
      "idiom": "Ateş pahası",
      "literal": "the price of fire",
      "meaning": "extremely expensive",
      "equivalent": "cost an arm and a leg",
      "example": "Bu aralar kiralar ateş pahası.",
      "exampleEn": "Rents are sky high these days.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "Burnu büyümek",
      "literal": "one's nose to grow",
      "meaning": "to become conceited or arrogant after some success",
      "equivalent": "get a big head",
      "example": "Ödülü kazanınca burnu büyüdü.",
      "exampleEn": "He got full of himself after winning the award.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "Canına tak etmek",
      "literal": "to knock on one's soul",
      "meaning": "to have reached the end of one's patience",
      "equivalent": "have had it up to here",
      "example": "Bu trafik canıma tak etti.",
      "exampleEn": "I've had it up to here with this traffic.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "Ağzından baklayı çıkarmak",
      "literal": "to take the fava bean out of one's mouth",
      "meaning": "to finally let out a secret one has been holding back",
      "equivalent": "spill the beans",
      "example": "Sonunda ağzından baklayı çıkardı ve gerçeği anlattı.",
      "exampleEn": "He finally let it out and told the truth.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "Eli kulağında",
      "literal": "its hand is at its ear",
      "meaning": "about to happen at any moment",
      "equivalent": "just around the corner",
      "example": "Sınav sonuçları eli kulağında.",
      "exampleEn": "The exam results are just around the corner.",
      "tags": [
        "time"
      ]
    },
    {
      "idiom": "Kolları sıvamak",
      "literal": "to roll up one's sleeves",
      "meaning": "to get down to work with energy",
      "equivalent": "roll up one's sleeves",
      "example": "Taşınmak için herkes kolları sıvadı.",
      "exampleEn": "Everyone rolled up their sleeves to get the move done.",
      "tags": [
        "work"
      ]
    },
    {
      "idiom": "Havadan sudan konuşmak",
      "literal": "to talk of air and water",
      "meaning": "to chat about unimportant everyday things",
      "equivalent": "shoot the breeze",
      "example": "Kahve içip havadan sudan konuştuk.",
      "exampleEn": "We had coffee and chatted about nothing in particular.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "Göz boyamak",
      "literal": "to paint the eye",
      "meaning": "to deceive people with a good-looking surface",
      "equivalent": "pull the wool over someone's eyes",
      "example": "Bu proje sadece göz boyamaktan ibaret.",
      "exampleEn": "This project is nothing but window dressing.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "Bal gibi bilmek",
      "literal": "to know like honey",
      "meaning": "to know something perfectly well, with no room for doubt",
      "example": "Nerede olduğunu bal gibi biliyorsun.",
      "exampleEn": "You know perfectly well where it is.",
      "note": "Bal gibi works with other verbs too (bal gibi anladın) and always adds the sense 'perfectly well'.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "Kulağın çınlasın",
      "literal": "may your ear ring",
      "meaning": "said when you are talking about someone who is not there, or telling them afterwards",
      "equivalent": "one's ears are burning",
      "example": "Senden bahsediyorduk, kulağın çınlasın.",
      "exampleEn": "We were just talking about you, your ears must have been burning.",
      "note": "Turkish folk belief says your ears ring when people talk about you. Said warmly, and this wish form is the one you hear most.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "Ağzı kulaklarına varmak",
      "literal": "one's mouth to reach one's ears",
      "meaning": "to beam with joy",
      "equivalent": "grin from ear to ear",
      "example": "Haberi duyunca ağzı kulaklarına vardı.",
      "exampleEn": "When she heard the news she was grinning from ear to ear.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Çam devirmek",
      "literal": "to fell a pine tree",
      "meaning": "to say something tactless that embarrasses everyone",
      "equivalent": "put one's foot in one's mouth",
      "example": "Toplantıda büyük bir çam devirdi.",
      "exampleEn": "He really put his foot in his mouth at the meeting.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "İçi içine sığmamak",
      "literal": "one's inside doesn't fit inside oneself",
      "meaning": "to be too excited or happy to sit still",
      "equivalent": "be beside oneself with excitement",
      "example": "Kabul mektubunu görünce içi içine sığmadı.",
      "exampleEn": "When she saw the acceptance letter she could hardly contain herself.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Bindiği dalı kesmek",
      "literal": "to cut the branch one is sitting on",
      "meaning": "to act against one's own interest and ruin what supports you",
      "equivalent": "shoot oneself in the foot",
      "example": "Patronunu herkesin önünde eleştirerek bindiği dalı kesti.",
      "exampleEn": "By criticizing his boss in front of everyone he shot himself in the foot.",
      "tags": [
        "trouble",
        "work"
      ]
    },
    {
      "idiom": "Suya sabuna dokunmamak",
      "literal": "to not touch water or soap",
      "meaning": "to stay out of anything controversial and take no side",
      "equivalent": "sit on the fence",
      "example": "Siyasi tartışmalarda hep suya sabuna dokunmaz.",
      "exampleEn": "In political arguments he always sits on the fence.",
      "tags": [
        "character",
        "talk"
      ]
    },
    {
      "idiom": "Tuzu kuru olmak",
      "literal": "to have dry salt",
      "meaning": "to be financially secure and free of the worries others have",
      "equivalent": "be sitting pretty",
      "example": "Emekli maaşı iyi olduğu için onun tuzu kuru.",
      "exampleEn": "His pension is good, so he is sitting pretty.",
      "note": "Usually said with a touch of resentment about someone who does not share the common struggle.",
      "tags": [
        "money"
      ]
    },
    {
      "idiom": "Ağız birliği etmek",
      "literal": "to make a union of mouths",
      "meaning": "to agree in advance to tell the same story",
      "equivalent": "get one's stories straight",
      "example": "Öğrenciler öğretmene karşı ağız birliği ettiler.",
      "exampleEn": "The students got their stories straight before facing the teacher.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "Turnayı gözünden vurmak",
      "literal": "to shoot the crane in the eye",
      "meaning": "to land an unexpected big gain or opportunity in one go",
      "equivalent": "hit the jackpot",
      "example": "Bu işe girerek turnayı gözünden vurdu.",
      "exampleEn": "By landing this job he hit the jackpot.",
      "tags": [
        "luck",
        "work"
      ]
    },
    {
      "idiom": "Gönlünü kaptırmak",
      "literal": "to let one's heart be snatched",
      "meaning": "to fall in love with someone",
      "equivalent": "lose one's heart to someone",
      "example": "Komşunun kızına gönlünü kaptırmış.",
      "exampleEn": "Apparently he has lost his heart to the neighbor's daughter.",
      "note": "A soft, romantic way to say it, warmer than the plain âşık olmak.",
      "tags": [
        "love",
        "emotions"
      ]
    },
    {
      "idiom": "Armut piş ağzıma düş",
      "literal": "pear, ripen and fall into my mouth",
      "meaning": "expecting good things to arrive without any effort",
      "equivalent": "want everything handed to you on a plate",
      "example": "Hiç çalışmadan armut piş ağzıma düş bekliyor.",
      "exampleEn": "He does no work at all and expects everything to be handed to him on a plate.",
      "note": "A fixed phrase used mockingly about someone lazy, never conjugated.",
      "tags": [
        "character",
        "work"
      ]
    }
  ],
  "uk": [
    {
      "idiom": "тримати язик за зубами",
      "literal": "to hold the tongue behind the teeth",
      "meaning": "to keep quiet, not reveal a secret",
      "equivalent": "to hold one's tongue",
      "example": "Про нашу розмову тримай язик за зубами, добре?",
      "exampleEn": "Keep quiet about our conversation, all right?",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "як сніг на голову",
      "literal": "like snow on the head",
      "meaning": "completely sudden and unexpected",
      "equivalent": "out of the blue",
      "example": "Новина про звільнення впала як сніг на голову.",
      "exampleEn": "The news about the layoffs came out of the blue.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "водити за ніс",
      "literal": "to lead by the nose",
      "meaning": "to deceive someone over a long time with promises that lead nowhere",
      "equivalent": "to string someone along",
      "example": "Він уже пів року водить нас за ніс із тим ремонтом.",
      "exampleEn": "He has been stringing us along about that renovation for half a year.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "робити з мухи слона",
      "literal": "to make an elephant out of a fly",
      "meaning": "to exaggerate something trivial into a big problem",
      "equivalent": "to make a mountain out of a molehill",
      "example": "Заспокойся, не треба робити з мухи слона.",
      "exampleEn": "Calm down, there is no need to make a mountain out of a molehill.",
      "tags": [
        "emotions",
        "character"
      ]
    },
    {
      "idiom": "на сьомому небі",
      "literal": "on the seventh heaven",
      "meaning": "overjoyed, delighted beyond words",
      "equivalent": "on cloud nine",
      "example": "Коли її взяли на роботу, вона була на сьомому небі.",
      "exampleEn": "When she got the job, she was on cloud nine.",
      "note": "Often extended to на сьомому небі від щастя, literally on the seventh heaven from happiness.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "як кіт наплакав",
      "literal": "as much as a cat has cried",
      "meaning": "a very small amount of something",
      "equivalent": "next to nothing",
      "example": "Грошей до зарплати лишилося як кіт наплакав.",
      "exampleEn": "There is next to nothing left until payday.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "як дві краплі води",
      "literal": "like two drops of water",
      "meaning": "looking exactly alike",
      "equivalent": "like two peas in a pod",
      "example": "Брати схожі як дві краплі води.",
      "exampleEn": "The brothers look like two peas in a pod.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "золоті руки",
      "literal": "golden hands",
      "meaning": "great skill at making or fixing things by hand",
      "example": "У нашого сусіда золоті руки, він полагодить будь-що.",
      "exampleEn": "Our neighbour is brilliant with his hands, he can fix anything.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "ні пуху ні пера",
      "literal": "neither down nor feather",
      "meaning": "said to wish someone luck before an exam or another hard test",
      "equivalent": "break a leg",
      "example": "Завтра іспит? Ні пуху ні пера!",
      "exampleEn": "Exam tomorrow? Break a leg!",
      "note": "The set reply is До біса (to the devil), and answering дякую is believed to jinx it.",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "собаку з'їв",
      "literal": "(he) has eaten a dog on it",
      "meaning": "to be very experienced and skilled at something",
      "equivalent": "to know something inside out",
      "example": "У ремонті машин він собаку з'їв, звертайся тільки до нього.",
      "exampleEn": "He knows car repairs inside out, go to him and no one else.",
      "note": "Colloquial. The verb agrees with the subject, so собаку з'їла, собаку з'їли.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "бити байдики",
      "literal": "to beat baidyky (small blocks of wood)",
      "meaning": "to idle, to do nothing useful",
      "equivalent": "to twiddle one's thumbs",
      "example": "Замість того, щоб готуватися до іспиту, він цілий день бив байдики.",
      "exampleEn": "Instead of preparing for the exam, he twiddled his thumbs all day.",
      "note": "Байдики were blocks split from a log for carving spoons, the easiest job in the workshop.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "ловити ґав",
      "literal": "to catch crows",
      "meaning": "to be inattentive and miss what is going on",
      "example": "Переходячи дорогу, не лови ґав, дивись на всі боки.",
      "exampleEn": "When you cross the road, do not let your attention wander, look both ways.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "накивати п'ятами",
      "literal": "to wave with one's heels",
      "meaning": "to run away fast, usually from trouble",
      "equivalent": "to take to one's heels",
      "example": "Побачивши поліцію, злодій накивав п'ятами.",
      "exampleEn": "When he saw the police, the thief took to his heels.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "ні риба ні м'ясо",
      "literal": "neither fish nor meat",
      "meaning": "bland and indecisive, neither one thing nor the other",
      "equivalent": "neither fish nor fowl",
      "example": "Його відповідь була ні риба ні м'ясо, ніхто нічого не зрозумів.",
      "exampleEn": "His answer was neither fish nor fowl, nobody understood a thing.",
      "tags": [
        "character",
        "talk"
      ]
    },
    {
      "idiom": "грошей кури не клюють",
      "literal": "the chickens do not peck at the money",
      "meaning": "to have an enormous amount of money",
      "equivalent": "to be rolling in money",
      "example": "Кажуть, у нього грошей кури не клюють.",
      "exampleEn": "They say he is rolling in money.",
      "tags": [
        "money"
      ]
    },
    {
      "idiom": "замилювати очі",
      "literal": "to soap up someone's eyes",
      "meaning": "to mislead people with a pretty picture",
      "equivalent": "to pull the wool over someone's eyes",
      "example": "Політики часто замилюють очі виборцям гучними обіцянками.",
      "exampleEn": "Politicians often pull the wool over voters' eyes with loud promises.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "заварити кашу",
      "literal": "to brew the porridge",
      "meaning": "to start a messy business that someone will have to sort out",
      "equivalent": "to open a can of worms",
      "example": "Заварив кашу, тепер сам її і розхльобуй.",
      "exampleEn": "You made this mess, now clean it up yourself.",
      "note": "Usually paired with розхльобувати кашу, literally to spoon the porridge back up, meaning to deal with the mess.",
      "tags": [
        "trouble",
        "work"
      ]
    },
    {
      "idiom": "жити як сир у маслі",
      "literal": "to live like cheese in butter",
      "meaning": "to live in comfort and plenty",
      "equivalent": "to live in clover",
      "example": "Вони переїхали до міста і тепер живуть як сир у маслі.",
      "exampleEn": "They moved to the city and now they are living in clover.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "брати бика за роги",
      "literal": "to take the bull by the horns",
      "meaning": "to tackle a hard matter head on instead of putting it off",
      "equivalent": "to take the bull by the horns",
      "example": "Досить зволікати, берімо бика за роги.",
      "exampleEn": "Enough dithering, let's take the bull by the horns.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "товкти воду в ступі",
      "literal": "to pound water in a mortar",
      "meaning": "to waste time on pointless, repetitive effort",
      "equivalent": "to go round in circles",
      "example": "На цих зборах ми вже другу годину товчемо воду в ступі.",
      "exampleEn": "We have been going round in circles at this meeting for two hours now.",
      "tags": [
        "work",
        "time"
      ]
    },
    {
      "idiom": "збити з пантелику",
      "literal": "to knock someone off the pantelyk",
      "meaning": "to confuse someone completely",
      "equivalent": "to throw someone off",
      "example": "Своїм питанням ти зовсім збив мене з пантелику.",
      "exampleEn": "Your question threw me off completely.",
      "note": "Пантелик has no meaning of its own outside this phrase.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "ведмежа послуга",
      "literal": "a bear's favour",
      "meaning": "help that ends up causing harm instead",
      "example": "Твоя порада виявилася ведмежою послугою.",
      "exampleEn": "Your advice did more harm than good.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "сьома вода на киселі",
      "literal": "the seventh water on kysil (a thin fruit jelly)",
      "meaning": "a very distant, barely related relative",
      "example": "Той чоловік мені сьома вода на киселі, я його майже не знаю.",
      "exampleEn": "That man is a very distant relative of mine, I hardly know him.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "як з гуски вода",
      "literal": "like water off a goose",
      "meaning": "criticism or trouble leaves someone completely unbothered",
      "equivalent": "like water off a duck's back",
      "example": "Йому хоч що кажи, а з нього як з гуски вода.",
      "exampleEn": "You can say anything to him, it is like water off a duck's back.",
      "tags": [
        "character",
        "emotions"
      ]
    },
    {
      "idiom": "передати куті меду",
      "literal": "to put too much honey in the kutia",
      "meaning": "to overdo something and spoil the effect",
      "equivalent": "to go overboard",
      "example": "З компліментами він явно передав куті меду.",
      "exampleEn": "He clearly went overboard with the compliments.",
      "note": "Кутя is the sweet wheat and poppy seed dish served at the Christmas Eve supper.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "як Пилип з конопель",
      "literal": "like Pylyp out of the hemp field",
      "meaning": "blurting something out abruptly and at the wrong moment",
      "example": "Він вискочив зі своїм запитанням, як Пилип з конопель.",
      "exampleEn": "He barged in with his question at completely the wrong moment.",
      "note": "Folksy and usually teasing, and it almost always goes with the verb вискочити (to jump out).",
      "tags": [
        "talk",
        "character"
      ]
    }
  ],
  "uz": [
    {
      "idiom": "Til topishmoq",
      "literal": "to find a tongue with each other",
      "meaning": "to reach mutual understanding and get along well with someone",
      "equivalent": "find common ground",
      "example": "Yangi qoʻshnimiz bilan tezda til topishib oldik.",
      "exampleEn": "We quickly found common ground with our new neighbour.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "Boshi qotmoq",
      "literal": "his/her head hardens",
      "meaning": "to be unable to work something out despite thinking hard about it, to become confused or puzzled",
      "equivalent": "be stumped",
      "example": "Bu qiyin masalani yechayotganda boshim qotib qoldi.",
      "exampleEn": "I was completely stumped while I was trying to solve this hard problem.",
      "tags": [
        "everyday",
        "trouble"
      ]
    },
    {
      "idiom": "Koʻz ochib yumguncha",
      "literal": "until one opens and closes an eye",
      "meaning": "in a moment, extremely quickly",
      "equivalent": "in the blink of an eye",
      "example": "Bayram koʻz ochib yumguncha oʻtib ketdi.",
      "exampleEn": "The holiday went by in the blink of an eye.",
      "tags": [
        "time",
        "everyday"
      ]
    },
    {
      "idiom": "Ogʻzi qulogʻida boʻlmoq",
      "literal": "his/her mouth is at his/her ear",
      "meaning": "to be overjoyed and unable to stop smiling",
      "equivalent": "grin from ear to ear",
      "example": "Sovgʻani ochib koʻrgan bolaning ogʻzi qulogʻida boʻldi.",
      "exampleEn": "The boy was grinning from ear to ear when he opened the present.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Qoʻl kelmoq",
      "literal": "to come to the hand",
      "meaning": "to turn out to be useful at just the right moment",
      "equivalent": "come in handy",
      "example": "Sen bergan pul juda qoʻl keldi.",
      "exampleEn": "The money you gave me came in really handy.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "Koʻz-quloq boʻlmoq",
      "literal": "to be an eye and an ear",
      "meaning": "to look after someone or something and keep watch over them",
      "equivalent": "keep an eye on",
      "example": "Men qaytguncha bolalarga koʻz-quloq boʻlib turing.",
      "exampleEn": "Keep an eye on the children until I get back.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "Bosh ogʻritmoq",
      "literal": "to make the head ache",
      "meaning": "to bother someone with something troublesome, or to trouble yourself over it",
      "equivalent": "give someone a headache",
      "example": "Arzimagan gap bilan boshimni ogʻritma.",
      "exampleEn": "Do not give me a headache over such a trivial thing.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "Koʻzi toʻrt boʻlmoq",
      "literal": "his/her eyes become four",
      "meaning": "to wait for someone or something with great eagerness and impatience",
      "example": "Mehmonlarni kuta-kuta koʻzimiz toʻrt boʻldi.",
      "exampleEn": "We waited and waited for the guests until we could hardly bear it.",
      "tags": [
        "emotions",
        "time"
      ]
    },
    {
      "idiom": "Boshi osmonga yetmoq",
      "literal": "his/her head reaches the sky",
      "meaning": "to be extremely happy about a piece of good news",
      "equivalent": "be over the moon",
      "example": "Universitetga kirganini eshitib, boshi osmonga yetdi.",
      "exampleEn": "When he heard that he had got into university, he was over the moon.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Qoʻli kalta",
      "literal": "his/her hand is short",
      "meaning": "to lack the means for something, most often the money",
      "equivalent": "be hard up",
      "example": "Hozircha yangi mashina olishga qoʻlim kalta.",
      "exampleEn": "For now I am too hard up to buy a new car.",
      "tags": [
        "money"
      ]
    },
    {
      "idiom": "Yengil tortmoq",
      "literal": "to draw toward lightness",
      "meaning": "to feel relieved once worry or strain lifts",
      "equivalent": "feel a weight off one's shoulders",
      "example": "Imtihondan oʻtganimni bilib, birdan yengil tortdim.",
      "exampleEn": "When I found out that I had passed the exam, I suddenly felt a weight off my shoulders.",
      "note": "The same verb is used about health, where it means that a sick person is starting to feel better.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Koʻz yummoq",
      "literal": "to close the eyes",
      "meaning": "to overlook a fault or a wrongdoing on purpose",
      "equivalent": "turn a blind eye",
      "example": "Ustoz oʻquvchining kechikishiga koʻz yumdi.",
      "exampleEn": "The teacher turned a blind eye to the pupil being late.",
      "note": "The same phrase is also a gentle way of saying that someone has died, so the context decides the sense.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "Ogʻzidan gullamoq",
      "literal": "to flower out of one's mouth",
      "meaning": "to let a secret slip by accident",
      "equivalent": "spill the beans",
      "example": "Ukam syurpriz haqida ogʻzidan gullab qoʻydi.",
      "exampleEn": "My little brother spilled the beans about the surprise.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "Bir yostiqqa bosh qoʻymoq",
      "literal": "to lay heads on one pillow",
      "meaning": "to marry someone and share a life with them",
      "equivalent": "tie the knot",
      "example": "Ular besh yillik muhabbatdan soʻng bir yostiqqa bosh qoʻyishdi.",
      "exampleEn": "After five years of love, they tied the knot.",
      "note": "Standard at weddings, where guests wish the couple a long life sharing one pillow.",
      "tags": [
        "love"
      ]
    },
    {
      "idiom": "Uyni boshiga koʻtarmoq",
      "literal": "to lift the house onto its head",
      "meaning": "to make a huge noise and commotion in a place",
      "equivalent": "raise the roof",
      "example": "Bolalar oʻynab, uyni boshiga koʻtarishdi.",
      "exampleEn": "The children were playing and raised the roof.",
      "tags": [
        "everyday",
        "trouble"
      ]
    },
    {
      "idiom": "Burnini koʻtarmoq",
      "literal": "to lift one's nose",
      "meaning": "to become arrogant and look down on other people",
      "equivalent": "put on airs",
      "example": "Amakivachcham chet elga ishga ketgach, burnini koʻtarib qoldi.",
      "exampleEn": "After my cousin went abroad for work, he started putting on airs.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "Quloqqa ilmaslik",
      "literal": "not to hook it onto one's ear",
      "meaning": "to pay no attention at all to what someone says",
      "equivalent": "turn a deaf ear",
      "example": "Ogohlantirganimni quloqqa ilmadi.",
      "exampleEn": "He turned a deaf ear to my warning.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "Dimogʻi chogʻ",
      "literal": "his/her nose is cheerful",
      "meaning": "to be in a good mood, cheerful and lively",
      "equivalent": "be in high spirits",
      "example": "Bugun ustozning dimogʻi chogʻ, darsda hazil qilib turdi.",
      "exampleEn": "The teacher is in high spirits today and he kept joking during the lesson.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Koʻngli toʻq",
      "literal": "his/her heart is full",
      "meaning": "to feel calm and free of worry about how something will turn out",
      "equivalent": "rest easy",
      "example": "Farzandlari yonida ekanidan onaning koʻngli toʻq edi.",
      "exampleEn": "The mother could rest easy because her children were beside her.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Ichi qora",
      "literal": "his/her inside is black",
      "meaning": "malicious and envious, unable to bear other people's happiness",
      "example": "Ichi qora odamdan yaxshilik kutma.",
      "exampleEn": "Do not expect any good from a spiteful person.",
      "note": "This is a harsh judgement of a person, not a light remark.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "Suvdan quruq chiqmoq",
      "literal": "to come out of the water dry",
      "meaning": "to escape blame or punishment although one is guilty",
      "equivalent": "get off scot-free",
      "example": "Tergovda ayblanuvchi yana suvdan quruq chiqdi.",
      "exampleEn": "The accused got off scot-free in the investigation once again.",
      "tags": [
        "trouble",
        "luck"
      ]
    },
    {
      "idiom": "Tomdan tarasha tushganday",
      "literal": "as if a wood chip fell from the roof",
      "meaning": "completely unexpectedly, with no warning at all",
      "equivalent": "out of the blue",
      "example": "U tomdan tarasha tushganday, birdan koʻchib ketishini aytdi.",
      "exampleEn": "Out of the blue he announced that he was moving away.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "Ilonning yogʻini yalagan",
      "literal": "has licked the snake's fat",
      "meaning": "extremely cunning and impossible to outsmart",
      "equivalent": "a sly old fox",
      "example": "Bu savdogar ilonning yogʻini yalagan, uni aldab boʻlmaydi.",
      "exampleEn": "This trader is a sly old fox and there is no fooling him.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "Tuyaning dumi yerga tekkanda",
      "literal": "when the camel's tail touches the ground",
      "meaning": "never, at a time that will never come",
      "equivalent": "when pigs fly",
      "example": "U qarzini tuyaning dumi yerga tekkanda qaytaradi.",
      "exampleEn": "He will pay his debt back when pigs fly.",
      "note": "Always said jokingly or sarcastically, never in a serious statement.",
      "tags": [
        "time"
      ]
    }
  ],
  "vi": [
    {
      "idiom": "Nước đến chân mới nhảy",
      "literal": "the water reaches the feet before one jumps",
      "meaning": "to leave things until the very last minute instead of preparing ahead",
      "example": "Lúc nào nó cũng nước đến chân mới nhảy, chẳng chịu chuẩn bị trước.",
      "exampleEn": "He always waits until the very last second, he never prepares in advance.",
      "tags": [
        "time",
        "work"
      ]
    },
    {
      "idiom": "Ăn cháo đá bát",
      "literal": "to eat the porridge, then kick the bowl",
      "meaning": "to be ungrateful toward someone who helped you",
      "equivalent": "to bite the hand that feeds you",
      "example": "Nó được giúp đỡ bao nhiêu mà giờ quay lưng, đúng là ăn cháo đá bát.",
      "exampleEn": "After all the help he was given, now he turns his back, he really bites the hand that feeds him.",
      "note": "A harsh accusation, saved for real betrayal rather than small slights.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "Mất bò mới lo làm chuồng",
      "literal": "only after losing the ox does one worry about building the pen",
      "meaning": "to take precautions only after the damage is already done",
      "equivalent": "to shut the stable door after the horse has bolted",
      "example": "Đến khi bị trộm mất xe rồi mới chịu mua khóa, đúng là mất bò mới lo làm chuồng.",
      "exampleEn": "Only after his motorbike was stolen did he finally buy a lock, shutting the stable door after the horse has bolted.",
      "tags": [
        "time",
        "trouble"
      ]
    },
    {
      "idiom": "Được voi đòi tiên",
      "literal": "getting the elephant, demanding the fairy",
      "meaning": "never satisfied with what one already has, always demanding more",
      "equivalent": "give an inch and take a mile",
      "example": "Cho nó ở nhờ một tuần giờ nó còn đòi ở luôn, đúng là được voi đòi tiên.",
      "exampleEn": "We let him stay for a week and now he wants to move in for good, give him an inch and he takes a mile.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "Giận cá chém thớt",
      "literal": "angry at the fish, chop the cutting board",
      "meaning": "to vent anger on someone who had nothing to do with the problem",
      "example": "Bị sếp mắng thì đừng về nhà giận cá chém thớt với vợ con.",
      "exampleEn": "If your boss scolds you, don't go home and take it out on your wife and kids.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "Xa mặt cách lòng",
      "literal": "far from the face, distant from the heart",
      "meaning": "feelings fade when two people stop seeing each other",
      "equivalent": "out of sight, out of mind",
      "example": "Yêu xa được vài tháng thì chia tay, đúng là xa mặt cách lòng.",
      "exampleEn": "They dated long distance for a few months and then broke up, out of sight really is out of mind.",
      "tags": [
        "love",
        "emotions"
      ]
    },
    {
      "idiom": "Một công đôi việc",
      "literal": "one effort, two tasks",
      "meaning": "to get two things done with a single action",
      "equivalent": "to kill two birds with one stone",
      "example": "Tiện thể đi làm về ghé chợ luôn, một công đôi việc.",
      "exampleEn": "I stop by the market on my way home from work, killing two birds with one stone.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "Chuyện bé xé ra to",
      "literal": "a small matter torn open into a big one",
      "meaning": "to blow a trivial problem far out of proportion",
      "equivalent": "to make a mountain out of a molehill",
      "example": "Có mỗi cái cốc vỡ mà cãi nhau cả buổi, chuyện bé xé ra to.",
      "exampleEn": "It was just a broken cup and they argued all afternoon, making a mountain out of a molehill.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "Ếch ngồi đáy giếng",
      "literal": "a frog sitting at the bottom of a well",
      "meaning": "someone with a narrow, sheltered view of the world who thinks they know everything",
      "example": "Chưa ra khỏi làng mà đã tưởng mình giỏi nhất thiên hạ, đúng là ếch ngồi đáy giếng.",
      "exampleEn": "He has never left his village but thinks he is the cleverest person alive, a frog at the bottom of a well.",
      "note": "The fable behind it is taught at school, and calling someone this to their face is insulting.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "Thùng rỗng kêu to",
      "literal": "an empty barrel makes the loudest noise",
      "meaning": "people with the least knowledge or substance often talk the loudest",
      "equivalent": "empty vessels make the most noise",
      "example": "Nó có biết gì đâu mà lúc nào cũng nói to, đúng là thùng rỗng kêu to.",
      "exampleEn": "He knows nothing yet always talks the loudest, empty vessels make the most noise.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "Tiền nào của nấy",
      "literal": "whatever the money, such the goods",
      "meaning": "quality matches the price you paid",
      "equivalent": "you get what you pay for",
      "example": "Mua hàng rẻ nên dùng một tháng đã hỏng, tiền nào của nấy thôi.",
      "exampleEn": "I bought the cheap one and it broke after a month, you get what you pay for.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "Đứng núi này trông núi nọ",
      "literal": "standing on this mountain, looking at that mountain",
      "meaning": "to be discontented with what you have and keep eyeing something else",
      "equivalent": "the grass is always greener on the other side",
      "example": "Có việc ổn định rồi mà vẫn đứng núi này trông núi nọ.",
      "exampleEn": "He already has a steady job but still keeps thinking the grass is greener somewhere else.",
      "note": "Used about serious things such as a job or a partner, not about small everyday wants.",
      "tags": [
        "character",
        "work"
      ]
    },
    {
      "idiom": "Con sâu làm rầu nồi canh",
      "literal": "one worm spoils the whole pot of soup",
      "meaning": "one bad person or detail ruins the reputation of the whole group",
      "equivalent": "one bad apple spoils the barrel",
      "example": "Chỉ vì một nhân viên làm ẩu mà cả phòng bị đánh giá kém, đúng là con sâu làm rầu nồi canh.",
      "exampleEn": "One careless employee got the whole department a bad review, one bad apple spoils the barrel.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "Gần mực thì đen, gần đèn thì sáng",
      "literal": "near ink you turn black, near a lamp you turn bright",
      "meaning": "a person is shaped for better or worse by the company they keep",
      "example": "Cha mẹ hay nhắc con chọn bạn mà chơi vì gần mực thì đen, gần đèn thì sáng.",
      "exampleEn": "Parents often tell their children to choose their friends carefully, because you become like the people around you.",
      "note": "A full proverb (tục ngữ), quoted by parents and teachers rather than dropped into casual chat.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "Có công mài sắt, có ngày nên kim",
      "literal": "with the effort of grinding iron, one day it becomes a needle",
      "meaning": "patient, steady effort eventually produces results",
      "equivalent": "little strokes fell great oaks",
      "example": "Cứ học đều mỗi ngày đi, có công mài sắt có ngày nên kim.",
      "exampleEn": "Just study a bit every day, steady effort will pay off in the end.",
      "note": "A proverb taught in primary school, used to encourage someone rather than to describe them.",
      "tags": [
        "work",
        "time"
      ]
    },
    {
      "idiom": "Đi guốc trong bụng",
      "literal": "to walk around in clogs inside someone's belly",
      "meaning": "to know exactly what someone is thinking or planning",
      "equivalent": "to read someone like a book",
      "example": "Bạn thân lâu năm nên tôi đi guốc trong bụng nó.",
      "exampleEn": "We have been close friends for years, so I can read him like a book.",
      "tags": [
        "character",
        "talk"
      ]
    },
    {
      "idiom": "Ăn miếng trả miếng",
      "literal": "eat a bite, give a bite back",
      "meaning": "to pay back an attack with an equal one",
      "equivalent": "tit for tat",
      "example": "Hai bên cứ ăn miếng trả miếng nên chuyện càng ngày càng căng.",
      "exampleEn": "The two sides kept trading blow for blow, so things got more and more tense.",
      "tags": [
        "trouble",
        "character"
      ]
    },
    {
      "idiom": "Vắt chanh bỏ vỏ",
      "literal": "to squeeze the lime and throw away the rind",
      "meaning": "to use someone for as long as they are useful and then discard them",
      "example": "Công ty đó dùng người xong rồi sa thải, đúng kiểu vắt chanh bỏ vỏ.",
      "exampleEn": "That company works people hard and then lays them off, using them up and throwing them away.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "Cá lớn nuốt cá bé",
      "literal": "big fish swallow small fish",
      "meaning": "the strong prey on the weak and the weak have no protection",
      "equivalent": "big fish eat little fish",
      "example": "Trong kinh doanh, cá lớn nuốt cá bé là chuyện bình thường.",
      "exampleEn": "In business, big fish eating little fish is perfectly normal.",
      "tags": [
        "money",
        "work"
      ]
    },
    {
      "idiom": "Nhập gia tùy tục",
      "literal": "enter the house, follow its customs",
      "meaning": "to adapt to the habits of the place you are in",
      "equivalent": "when in Rome, do as the Romans do",
      "example": "Sang nhà người ta chơi thì nhập gia tùy tục, đừng làm theo ý mình.",
      "exampleEn": "When you visit someone's home, do as they do, don't just follow your own habits.",
      "note": "The wording is Sino-Vietnamese, so it sounds slightly bookish and is common in advice and writing.",
      "tags": [
        "everyday",
        "character"
      ]
    },
    {
      "idiom": "Nước đổ lá khoai",
      "literal": "water poured onto a taro leaf",
      "meaning": "advice or effort that has no effect at all",
      "equivalent": "like water off a duck's back",
      "example": "Tôi khuyên mãi mà nó vẫn không nghe, đúng là nước đổ lá khoai.",
      "exampleEn": "I keep giving him advice and he still doesn't listen, it is like water off a duck's back.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "Treo đầu dê, bán thịt chó",
      "literal": "hang up a goat's head, sell dog meat",
      "meaning": "to advertise one thing and deliver something cheaper or worse",
      "equivalent": "bait and switch",
      "example": "Quảng cáo thì hoành tráng mà hàng nhận được lại kém chất lượng, đúng là treo đầu dê bán thịt chó.",
      "exampleEn": "The advertising was impressive but the goods that arrived were poor quality, a classic bait and switch.",
      "tags": [
        "money",
        "talk"
      ]
    },
    {
      "idiom": "Buôn dưa lê",
      "literal": "to trade in melons",
      "meaning": "to sit around chatting and gossiping for a long time",
      "equivalent": "to chew the fat",
      "example": "Hai bà hàng xóm ngồi buôn dưa lê cả buổi chiều.",
      "exampleEn": "The two neighbours sat chatting and gossiping the whole afternoon.",
      "note": "Very informal and teasing, common in the North, and best kept out of formal situations.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "Chó cắn áo rách",
      "literal": "a dog bites the torn shirt",
      "meaning": "bad luck keeps piling on someone who is already poor or unfortunate",
      "equivalent": "when it rains, it pours",
      "example": "Nhà đã nghèo lại còn bị mất trộm, đúng là chó cắn áo rách.",
      "exampleEn": "The family was already poor and then got robbed, when it rains it pours.",
      "note": "Said with sympathy about someone's run of misfortune, not to mock them.",
      "tags": [
        "luck",
        "trouble"
      ]
    },
    {
      "idiom": "Đâm bị thóc, chọc bị gạo",
      "literal": "stab the paddy sack, poke the rice sack",
      "meaning": "to stir up trouble and set people against each other",
      "equivalent": "to stir the pot",
      "example": "Đừng nghe lời nó, nó chuyên đâm bị thóc chọc bị gạo cho hai bên cãi nhau.",
      "exampleEn": "Don't listen to him, he is always stirring the pot to get the two sides fighting.",
      "note": "The rice imagery is old fashioned, though the phrase is still understood everywhere.",
      "tags": [
        "talk",
        "trouble"
      ]
    }
  ],
  "zu": [
    {
      "idiom": "Umuntu ngumuntu ngabantu",
      "literal": "a person is a person through people",
      "meaning": "you are fully human only through other people and your ties to them",
      "example": "Ungakhohlwa ukuthi umuntu ngumuntu ngabantu, sisizana sonke lapha ekhaya.",
      "exampleEn": "Do not forget that a person is a person through other people, we all help one another here at home.",
      "note": "This is the line behind the idea of ubuntu. Zulu speakers treat it as an isaga, shared cultural ground rather than a casual turn of phrase.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "Wathint' abafazi, wathint' imbokodo",
      "literal": "you have struck the women, you have struck the grinding stone",
      "meaning": "do not underestimate or mistreat women, they are as tough as rock",
      "example": "Abesifazane bathi, \"Wathint' abafazi, wathint' imbokodo!\" uma bekhankasela amalungelo abo.",
      "exampleEn": "The women chant, \"You have struck the women, you have struck a rock!\" when they campaign for their rights.",
      "note": "The line comes from the 1956 women's march on Pretoria and is heard everywhere during Women's Month in August.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "Izandla ziyagezana",
      "literal": "the hands wash each other",
      "meaning": "people should help one another, a favour deserves a favour in return",
      "equivalent": "one hand washes the other",
      "example": "Ngikusizile ngesikhathi udinga imali, khumbula ukuthi izandla ziyagezana.",
      "exampleEn": "I helped you when you needed money, remember that one hand washes the other.",
      "tags": [
        "everyday",
        "character"
      ]
    },
    {
      "idiom": "Ukuthwala kanzima",
      "literal": "to carry heavily",
      "meaning": "to be going through a hard time, most often financially",
      "example": "Umndeni wakwaNdlovu uthwele kanzima selokhu ubaba elahlekelwe umsebenzi.",
      "exampleEn": "The Ndlovu family has been struggling ever since the father lost his job.",
      "tags": [
        "trouble",
        "money"
      ]
    },
    {
      "idiom": "Ukushaya indiva",
      "literal": "to strike it aside",
      "meaning": "to ignore someone or something on purpose",
      "equivalent": "turn a blind eye",
      "example": "Ngimthumele imiyalezo emithathu kodwa uyishaye indiva yonke.",
      "exampleEn": "I sent him three messages but he ignored all of them.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "Ukudla imbuya ngothi",
      "literal": "to eat wild greens with a stick",
      "meaning": "to be poverty stricken, to have next to nothing to eat",
      "equivalent": "live from hand to mouth",
      "example": "Umdlali webhola odumile useqala ukudla imbuya ngothi ngemuva kokushiya iqembu lakhe elikhulu.",
      "exampleEn": "The famous footballer is starting to live from hand to mouth after leaving his big club.",
      "tags": [
        "money",
        "trouble"
      ]
    },
    {
      "idiom": "Ukucela empunzini",
      "literal": "to beg from the duiker",
      "meaning": "to run for one's life, to flee in a hurry",
      "equivalent": "take to one's heels",
      "example": "Wacela empunzini emva kokubona ibhubesi.",
      "exampleEn": "He took to his heels after seeing the lion.",
      "note": "The duiker was the fastest animal Zulu speakers knew, so anyone running hard is said to borrow its speed.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "Ukudla izambane likapondo",
      "literal": "to eat a pound's potato",
      "meaning": "to live very comfortably on plenty of money",
      "equivalent": "live in the lap of luxury",
      "example": "Selokhu ethole umsebenzi omusha, udla izambane likapondo.",
      "exampleEn": "Ever since he got that new job, he has been living in the lap of luxury.",
      "tags": [
        "money"
      ]
    },
    {
      "idiom": "Ukuphosa itshe esivivaneni",
      "literal": "to throw a stone onto the cairn",
      "meaning": "to make your own contribution to a shared effort",
      "equivalent": "do your bit",
      "example": "Ngifuna ukuphosa itshe esivivaneni ekwakhiweni kwesikole sendawo.",
      "exampleEn": "I want to do my bit towards building the local school.",
      "note": "An isivivane is a roadside pile of stones that travellers add to for good luck, so the phrase carries a sense of joining something bigger than yourself.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "Ukuhlaba umkhosi",
      "literal": "to strike up the alarm call",
      "meaning": "to raise the alarm, to alert people to danger or wrongdoing",
      "equivalent": "sound the alarm",
      "example": "Umakhelwane wahlaba umkhosi lapho ebona amasela engena endlini yethu.",
      "exampleEn": "The neighbour raised the alarm when he saw thieves getting into our house.",
      "tags": [
        "trouble",
        "talk"
      ]
    },
    {
      "idiom": "Ukubamba iqhude",
      "literal": "to catch the rooster",
      "meaning": "to get up very early in the morning",
      "equivalent": "be up with the lark",
      "example": "Kufanele sibambe iqhude uma sifuna ukufika ngesikhathi emsebenzini.",
      "exampleEn": "We have to be up with the lark if we want to get to work on time.",
      "tags": [
        "time",
        "work"
      ]
    },
    {
      "idiom": "Ukudla umunyu",
      "literal": "to eat bitterness",
      "meaning": "to suffer, to go through great hardship",
      "example": "Selokhu waxoshwa emsebenzini, usedla umunyu.",
      "exampleEn": "Ever since he was dismissed from work, he has been going through real hardship.",
      "tags": [
        "trouble",
        "emotions"
      ]
    },
    {
      "idiom": "Ukufihla induku emqubeni",
      "literal": "to hide the stick in the manure heap",
      "meaning": "to keep your real plan or your surprise hidden until the right moment",
      "equivalent": "keep your cards close to your chest",
      "example": "UZinhle ubefihle induku emqubeni, wafika nesipho esimangazayo.",
      "exampleEn": "Zinhle had kept her cards close to her chest, and she turned up with a surprise gift.",
      "tags": [
        "character",
        "talk"
      ]
    },
    {
      "idiom": "Ukushiya induku ebandla",
      "literal": "to leave one's stick behind in the assembly",
      "meaning": "to leave something lasting behind you, whether children who carry your name or a good example",
      "equivalent": "leave your mark",
      "example": "Ugogo washiya induku ebandla ngokukhulisa izingane eziningi ezaphumelela empilweni.",
      "exampleEn": "Grandmother left her mark by raising many children who went on to succeed in life.",
      "note": "The picture is a man leaving his stick at the men's assembly (ibandla), so the phrase usually praises a whole life's work and is often heard at funerals.",
      "tags": [
        "character",
        "work"
      ]
    },
    {
      "idiom": "Ukuzalelwa esithebeni",
      "literal": "to be born onto the eating mat",
      "meaning": "to be born into a well off family and never want for anything",
      "equivalent": "born with a silver spoon in your mouth",
      "example": "Wazalelwa esithebeni, akakaze aswele lutho empilweni yakhe.",
      "exampleEn": "He was born with a silver spoon in his mouth, he has never gone without anything in his life.",
      "tags": [
        "money",
        "luck"
      ]
    },
    {
      "idiom": "Ukukhihla esikaNandi",
      "literal": "to weep Nandi's lament",
      "meaning": "to cry uncontrollably, in a dramatic and hysterical way",
      "equivalent": "cry your eyes out",
      "example": "Uma efika emngcwabeni, wakhihla esikaNandi phambi kwabo bonke abantu.",
      "exampleEn": "When she got to the funeral, she cried her eyes out in front of everyone.",
      "note": "Nandi was King Shaka's mother, and the enormous mourning ordered after her death is the picture behind the phrase.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "Ukuba nenhliziyo emhlophe",
      "literal": "to have a white heart",
      "meaning": "to be kind hearted and free of any malice",
      "equivalent": "have a heart of gold",
      "example": "UMaMkhize unenhliziyo emhlophe, usiza noma ubani ofika emnyango wakhe.",
      "exampleEn": "MaMkhize has a heart of gold, she helps anyone who comes to her door.",
      "note": "White stands for purity and good intent in Zulu imagery here, and has nothing to do with race.",
      "tags": [
        "character",
        "emotions"
      ]
    },
    {
      "idiom": "Ukuluma indlebe",
      "literal": "to bite the ear",
      "meaning": "to tell someone something in confidence, to tip them off quietly",
      "equivalent": "have a word in someone's ear",
      "example": "Ngizomluma indlebe ngaphambi kokuba athathe isinqumo esibi.",
      "exampleEn": "I will have a quiet word in his ear before he makes a bad decision.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "Ukuthunga intebe",
      "literal": "to sew an arum lily",
      "meaning": "to attempt something that can never succeed",
      "equivalent": "flog a dead horse",
      "example": "Ukuzama ukumshintsha kunjengokuthunga intebe.",
      "exampleEn": "Trying to change him is like flogging a dead horse.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "Ukushaya ngemfe iphindiwe",
      "literal": "to hit someone with a doubled sweet reed",
      "meaning": "to fool someone, to string them along with things that are not true",
      "equivalent": "pull the wool over someone's eyes",
      "example": "Basishaye ngemfe iphindiwe ngezethembiso zemisebenzi ezingekho.",
      "exampleEn": "They pulled the wool over our eyes with promises of jobs that did not exist.",
      "note": "Imfe is sweet reed. A doubled, springy stalk looks like a real beating but does no harm, which is where the sense of being taken in comes from.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "Ukuthezela entanjeni",
      "literal": "to gather firewood to fit the carrying rope",
      "meaning": "to keep within your own strength or means",
      "equivalent": "cut your coat according to your cloth",
      "example": "Wena thezela entanjeni, ungazenzeli izinto ezingaphezu kwamandla akho.",
      "exampleEn": "Cut your coat according to your cloth, do not take on things that are beyond your means.",
      "note": "The picture is of gathering only as much firewood as your carrying rope can bind.",
      "tags": [
        "money",
        "work"
      ]
    },
    {
      "idiom": "Uthinte ubhece esafinya",
      "literal": "you have touched the wild melon while it was still unripe",
      "meaning": "to be completely destitute, to have nothing left at all",
      "example": "Kusukela washona uyise, usuthinte ubhece esafinya.",
      "exampleEn": "Since his father died, he has been left with absolutely nothing.",
      "note": "You will meet this more in writing and in older speech than in daily conversation.",
      "tags": [
        "money",
        "trouble"
      ]
    },
    {
      "idiom": "Ukukhamela ikhambi ekhanda",
      "literal": "to squeeze herbal medicine onto someone's head",
      "meaning": "to deal with someone harshly and teach them a lesson they will never forget",
      "example": "Umqeqeshi wabakhamela ikhambi ekhanda ngemva kokulahlekelwa umdlalo ngamahloni.",
      "exampleEn": "The coach came down hard on them after that embarrassing defeat.",
      "note": "This belongs to older, more formal speech, so learners will read it more often than hear it.",
      "tags": [
        "trouble",
        "character"
      ]
    }
  ],
  "en": [
    {
      "idiom": "piece of cake",
      "literal": "piece of cake",
      "meaning": "something very easy",
      "example": "The exam was a piece of cake.",
      "tags": [
        "everyday",
        "work"
      ]
    },
    {
      "idiom": "break the ice",
      "literal": "break the ice",
      "meaning": "to ease tension at the start of a social situation",
      "example": "He told a joke to break the ice at the meeting.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "be on the same page",
      "literal": "be on the same page",
      "meaning": "to share the same understanding of a situation",
      "example": "Let's have a quick call so we're all on the same page before the launch.",
      "tags": [
        "work",
        "talk"
      ]
    },
    {
      "idiom": "cost an arm and a leg",
      "literal": "cost an arm and a leg",
      "meaning": "to be very expensive",
      "example": "That new phone costs an arm and a leg.",
      "tags": [
        "money"
      ]
    },
    {
      "idiom": "the last straw",
      "literal": "the last straw",
      "meaning": "the final problem that makes a situation unbearable",
      "example": "His rude comment was the last straw.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "hit the nail on the head",
      "literal": "hit the nail on the head",
      "meaning": "to describe something exactly right",
      "example": "You hit the nail on the head with that answer.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "call it a day",
      "literal": "call it a day",
      "meaning": "to stop working for the day",
      "example": "It's almost seven, let's call it a day.",
      "tags": [
        "work",
        "time"
      ]
    },
    {
      "idiom": "spill the beans",
      "literal": "spill the beans",
      "meaning": "to reveal a secret",
      "example": "Come on, spill the beans, what did she say?",
      "note": "Informal, so it fits everyday chat rather than formal writing.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "under the weather",
      "literal": "under the weather",
      "meaning": "feeling slightly ill",
      "example": "She's a bit under the weather today, so she stayed home.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "cut corners",
      "literal": "cut corners",
      "meaning": "to skip proper steps to save time or money",
      "example": "Don't cut corners when it comes to safety.",
      "tags": [
        "work",
        "money"
      ]
    },
    {
      "idiom": "bite the bullet",
      "literal": "bite the bullet",
      "meaning": "to force yourself to do something unpleasant",
      "example": "I decided to bite the bullet and finally go to the dentist.",
      "tags": [
        "character",
        "trouble"
      ]
    },
    {
      "idiom": "beat around the bush",
      "literal": "beat around the bush",
      "meaning": "to avoid saying what you really mean",
      "example": "Stop beating around the bush and tell me what you want.",
      "note": "British English also uses the form beat about the bush.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "once in a blue moon",
      "literal": "once in a blue moon",
      "meaning": "very rarely",
      "example": "We only see each other once in a blue moon.",
      "tags": [
        "time"
      ]
    },
    {
      "idiom": "the ball is in your court",
      "literal": "the ball is in your court",
      "meaning": "it is your turn to decide or act",
      "example": "I've done all I can, now the ball is in your court.",
      "tags": [
        "work",
        "talk"
      ]
    },
    {
      "idiom": "let the cat out of the bag",
      "literal": "let the cat out of the bag",
      "meaning": "to reveal a secret by accident",
      "example": "He let the cat out of the bag about the surprise party.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "the elephant in the room",
      "literal": "the elephant in the room",
      "meaning": "an obvious problem that everyone avoids mentioning",
      "example": "Nobody wanted to bring up the elephant in the room, the missing money.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "make ends meet",
      "literal": "make ends meet",
      "meaning": "to have just enough money to cover your basic costs",
      "example": "With rent this high, they can barely make ends meet.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "get cold feet",
      "literal": "get cold feet",
      "meaning": "to lose your nerve about something you had planned",
      "example": "He got cold feet the night before the wedding.",
      "tags": [
        "emotions",
        "love"
      ]
    },
    {
      "idiom": "throw someone under the bus",
      "literal": "throw someone under the bus",
      "meaning": "to betray someone in order to protect yourself",
      "example": "She threw her own team under the bus to save herself.",
      "note": "Informal but serious, it accuses someone of genuine betrayal.",
      "tags": [
        "trouble",
        "work"
      ]
    },
    {
      "idiom": "hit the sack",
      "literal": "hit the sack",
      "meaning": "to go to bed",
      "example": "I'm exhausted, I'm going to hit the sack.",
      "note": "Very informal and mostly spoken; keep it out of formal writing.",
      "tags": [
        "everyday",
        "time"
      ]
    },
    {
      "idiom": "a blessing in disguise",
      "literal": "a blessing in disguise",
      "meaning": "something that seems bad at first but turns out well",
      "example": "Losing that job turned out to be a blessing in disguise.",
      "tags": [
        "luck"
      ]
    },
    {
      "idiom": "break a leg",
      "literal": "break a leg",
      "meaning": "good luck, said to someone before a performance",
      "example": "Break a leg tonight, I know you'll be great.",
      "note": "It comes from theatre superstition: wishing good luck directly is thought to bring bad luck.",
      "tags": [
        "luck",
        "talk"
      ]
    },
    {
      "idiom": "on cloud nine",
      "literal": "on cloud nine",
      "meaning": "extremely happy",
      "example": "She was on cloud nine after getting the job.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "burn the midnight oil",
      "literal": "burn the midnight oil",
      "meaning": "to work late into the night",
      "example": "She burned the midnight oil to finish the report.",
      "tags": [
        "work",
        "time"
      ]
    },
    {
      "idiom": "kick the bucket",
      "literal": "kick the bucket",
      "meaning": "to die",
      "example": "I want to see Rome before I kick the bucket.",
      "note": "Jokey and blunt, so avoid it about a death that matters to the people listening.",
      "tags": [
        "everyday"
      ]
    }
  ],
  "es": [
    {
      "idiom": "echar una mano",
      "literal": "to throw a hand",
      "meaning": "to help someone out",
      "equivalent": "lend a hand",
      "example": "¿Me echas una mano con las maletas?",
      "exampleEn": "Can you give me a hand with the suitcases?",
      "tags": [
        "everyday",
        "work"
      ]
    },
    {
      "idiom": "tomar el pelo",
      "literal": "to take the hair",
      "meaning": "to tease someone by telling them something untrue",
      "equivalent": "pull someone's leg",
      "example": "¿Me estás tomando el pelo?",
      "exampleEn": "Are you pulling my leg?",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "meter la pata",
      "literal": "to put the paw in",
      "meaning": "to make an embarrassing mistake",
      "equivalent": "put your foot in it",
      "example": "Metí la pata al olvidar su cumpleaños.",
      "exampleEn": "I put my foot in it by forgetting her birthday.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "estar en las nubes",
      "literal": "to be in the clouds",
      "meaning": "to be distracted and not paying attention",
      "equivalent": "have your head in the clouds",
      "example": "No me escuchas, siempre estás en las nubes.",
      "exampleEn": "You don't listen to me, you're always daydreaming.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "ir al grano",
      "literal": "to go to the grain",
      "meaning": "to deal with the essential part of a matter without preamble",
      "equivalent": "get to the point",
      "example": "Déjate de rodeos y ve al grano.",
      "exampleEn": "Stop going round in circles and get to the point.",
      "tags": [
        "talk",
        "work"
      ]
    },
    {
      "idiom": "no pegar ojo",
      "literal": "to not stick an eye",
      "meaning": "to not manage to sleep at all",
      "equivalent": "not sleep a wink",
      "example": "Con el ruido de la fiesta no pegué ojo en toda la noche.",
      "exampleEn": "With the noise from the party I didn't sleep a wink all night.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "estar hasta las narices",
      "literal": "to be up to the nostrils",
      "meaning": "to be completely fed up with something or someone",
      "equivalent": "be fed up to the back teeth",
      "example": "Estoy hasta las narices de sus excusas.",
      "exampleEn": "I'm fed up to the back teeth with his excuses.",
      "note": "Informal but not offensive; the same pattern has much cruder versions, so this is the safe one to use.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "costar un ojo de la cara",
      "literal": "to cost an eye of the face",
      "meaning": "to be very expensive",
      "equivalent": "cost an arm and a leg",
      "example": "El coche nuevo me costó un ojo de la cara.",
      "exampleEn": "The new car cost me an arm and a leg.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "ponerse las pilas",
      "literal": "to put in one's batteries",
      "meaning": "to start making a real effort",
      "equivalent": "get your act together",
      "example": "Tienes que ponerte las pilas si quieres aprobar.",
      "exampleEn": "You need to get your act together if you want to pass.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "estar hecho polvo",
      "literal": "to be made dust",
      "meaning": "to be completely exhausted or emotionally drained",
      "equivalent": "be wiped out",
      "example": "Después del trabajo estoy hecho polvo.",
      "exampleEn": "After work I'm completely wiped out.",
      "note": "The adjective agrees with the speaker, so a woman says estoy hecha polvo.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "llover a cántaros",
      "literal": "to rain in pitchers",
      "meaning": "to rain very heavily",
      "equivalent": "rain cats and dogs",
      "example": "No salgas ahora, está lloviendo a cántaros.",
      "exampleEn": "Don't go out now, it's raining cats and dogs.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "por si las moscas",
      "literal": "in case of the flies",
      "meaning": "just in case, as a precaution",
      "example": "Llévate el paraguas, por si las moscas.",
      "exampleEn": "Take the umbrella with you, just in case.",
      "note": "Chatty and informal; in writing or formal speech use plain por si acaso.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "por los pelos",
      "literal": "by the hairs",
      "meaning": "only just, with almost no margin to spare",
      "equivalent": "by the skin of your teeth",
      "example": "Aprobé el examen por los pelos.",
      "exampleEn": "I passed the exam by the skin of my teeth.",
      "tags": [
        "luck"
      ]
    },
    {
      "idiom": "dar en el clavo",
      "literal": "to hit on the nail",
      "meaning": "to be exactly right about something",
      "equivalent": "hit the nail on the head",
      "example": "Diste en el clavo con esa idea.",
      "exampleEn": "You hit the nail on the head with that idea.",
      "tags": [
        "talk",
        "work"
      ]
    },
    {
      "idiom": "tirar la toalla",
      "literal": "to throw the towel",
      "meaning": "to give up on something",
      "equivalent": "throw in the towel",
      "example": "No tires la toalla, ya casi lo consigues.",
      "exampleEn": "Don't throw in the towel, you're nearly there.",
      "tags": [
        "work",
        "emotions"
      ]
    },
    {
      "idiom": "ser pan comido",
      "literal": "to be eaten bread",
      "meaning": "to be very easy",
      "equivalent": "be a piece of cake",
      "example": "El examen fue pan comido.",
      "exampleEn": "The exam was a piece of cake.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "matar dos pájaros de un tiro",
      "literal": "to kill two birds with one shot",
      "meaning": "to solve two problems with a single action",
      "equivalent": "kill two birds with one stone",
      "example": "Si voy en bici al trabajo mato dos pájaros de un tiro: ahorro y hago ejercicio.",
      "exampleEn": "If I cycle to work I kill two birds with one stone: I save money and I get some exercise.",
      "tags": [
        "work",
        "time"
      ]
    },
    {
      "idiom": "hablar por los codos",
      "literal": "to talk through the elbows",
      "meaning": "to talk far too much",
      "equivalent": "talk someone's ear off",
      "example": "Mi vecina habla por los codos.",
      "exampleEn": "My neighbour talks your ear off.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "no tener pelos en la lengua",
      "literal": "to not have hairs on the tongue",
      "meaning": "to say exactly what you think, without softening it",
      "equivalent": "not mince your words",
      "example": "Ella no tiene pelos en la lengua y dice lo que piensa.",
      "exampleEn": "She doesn't mince her words and says what she thinks.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "hacer la vista gorda",
      "literal": "to make the fat look",
      "meaning": "to pretend not to notice something wrong",
      "equivalent": "turn a blind eye",
      "example": "El profesor hizo la vista gorda con los que llegaron tarde.",
      "exampleEn": "The teacher turned a blind eye to those who arrived late.",
      "tags": [
        "trouble",
        "work"
      ]
    },
    {
      "idiom": "estar como una cabra",
      "literal": "to be like a goat",
      "meaning": "to be completely crazy",
      "equivalent": "be off your rocker",
      "example": "Ese chico está como una cabra.",
      "exampleEn": "That guy is off his rocker.",
      "note": "Informal and usually affectionate rather than insulting, and heard mostly in Spain.",
      "tags": [
        "character",
        "emotions"
      ]
    },
    {
      "idiom": "quedarse de piedra",
      "literal": "to be left of stone",
      "meaning": "to be left stunned by something you hear or see",
      "example": "Me quedé de piedra al oír la noticia.",
      "exampleEn": "I was stunned when I heard the news.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "ser uña y carne",
      "literal": "to be fingernail and flesh",
      "meaning": "to be inseparable, said of very close friends",
      "equivalent": "be joined at the hip",
      "example": "Esos dos son uña y carne desde el colegio.",
      "exampleEn": "Those two have been joined at the hip since school.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "irse por las ramas",
      "literal": "to go off along the branches",
      "meaning": "to wander off the subject instead of answering",
      "equivalent": "beat about the bush",
      "example": "No te vayas por las ramas y dime qué pasó.",
      "exampleEn": "Stop beating about the bush and tell me what happened.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "la media naranja",
      "literal": "the half orange",
      "meaning": "the person who is a perfect match as a partner",
      "equivalent": "your other half",
      "example": "Después de tantos años, por fin encontró a su media naranja.",
      "exampleEn": "After all those years, he finally found his other half.",
      "note": "Warm and a little playful, used about a partner or spouse, sometimes half jokingly.",
      "tags": [
        "love"
      ]
    },
    {
      "idiom": "buscarle tres pies al gato",
      "literal": "to look for three feet on the cat",
      "meaning": "to make something needlessly complicated, or to look for problems that are not there",
      "example": "No le busques tres pies al gato, es muy sencillo.",
      "exampleEn": "Don't overcomplicate it, it's very simple.",
      "note": "You will also hear the older variant buscarle cinco pies al gato with the same meaning.",
      "tags": [
        "character",
        "trouble"
      ]
    }
  ],
  "fr": [
    {
      "idiom": "en avoir marre",
      "literal": "to have enough of it",
      "meaning": "to be sick of something you have put up with for too long",
      "equivalent": "be fed up with something",
      "example": "J'en ai marre de faire la vaisselle tous les soirs.",
      "exampleEn": "I'm fed up with doing the dishes every evening.",
      "note": "Informal, fine with friends and family but too casual for formal writing.",
      "tags": [
        "emotions",
        "everyday"
      ]
    },
    {
      "idiom": "avoir la flemme",
      "literal": "to have the laziness",
      "meaning": "to not feel like doing something because it takes too much effort",
      "equivalent": "can't be bothered",
      "example": "J'ai la flemme de sortir ce soir.",
      "exampleEn": "I can't be bothered to go out tonight.",
      "note": "Very informal, and one of the most common phrases in everyday spoken French.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "donner un coup de main",
      "literal": "to give a stroke of the hand",
      "meaning": "to help someone with a task",
      "equivalent": "give someone a hand",
      "example": "Tu peux me donner un coup de main pour le déménagement ?",
      "exampleEn": "Can you give me a hand with the move?",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "coûter les yeux de la tête",
      "literal": "to cost the eyes of the head",
      "meaning": "to be extremely expensive",
      "equivalent": "cost an arm and a leg",
      "example": "Cette montre coûte les yeux de la tête.",
      "exampleEn": "That watch costs an arm and a leg.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "faire la tête",
      "literal": "to make the head",
      "meaning": "to sulk and go quiet to show that you are upset",
      "example": "Il fait la tête depuis que je lui ai dit non.",
      "exampleEn": "He's been sulking since I told him no.",
      "tags": [
        "emotions",
        "character"
      ]
    },
    {
      "idiom": "tomber dans les pommes",
      "literal": "to fall in the apples",
      "meaning": "to faint",
      "equivalent": "pass out",
      "example": "Elle est tombée dans les pommes en voyant le sang.",
      "exampleEn": "She passed out at the sight of blood.",
      "note": "Everyday spoken French; in a medical context people say s'évanouir instead.",
      "tags": [
        "everyday",
        "trouble"
      ]
    },
    {
      "idiom": "avoir du pain sur la planche",
      "literal": "to have bread on the board",
      "meaning": "to have a lot of work waiting to be done",
      "equivalent": "have one's work cut out",
      "example": "Avec ce nouveau projet, on a du pain sur la planche.",
      "exampleEn": "With this new project, we've got our work cut out for us.",
      "tags": [
        "work",
        "time"
      ]
    },
    {
      "idiom": "faire la grasse matinée",
      "literal": "to do the fat morning",
      "meaning": "to stay in bed late in the morning",
      "equivalent": "sleep in",
      "example": "Le dimanche, j'aime faire la grasse matinée.",
      "exampleEn": "On Sundays I like to sleep in.",
      "tags": [
        "time",
        "everyday"
      ]
    },
    {
      "idiom": "poser un lapin",
      "literal": "to put down a rabbit",
      "meaning": "to fail to show up for an arranged meeting, leaving the other person waiting",
      "equivalent": "stand someone up",
      "example": "Il m'a posé un lapin hier soir.",
      "exampleEn": "He stood me up last night.",
      "note": "Used for any missed appointment, not only for dates.",
      "tags": [
        "love",
        "everyday"
      ]
    },
    {
      "idiom": "tomber à l'eau",
      "literal": "to fall in the water",
      "meaning": "to come to nothing, said about plans or projects",
      "equivalent": "fall through",
      "example": "Notre projet de vacances est tombé à l'eau.",
      "exampleEn": "Our holiday plans fell through.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "il pleut des cordes",
      "literal": "it is raining ropes",
      "meaning": "it is raining very heavily",
      "equivalent": "it's raining cats and dogs",
      "example": "Prends un parapluie, il pleut des cordes.",
      "exampleEn": "Take an umbrella, it's pouring down.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "avoir le coup de foudre",
      "literal": "to have the lightning strike",
      "meaning": "to fall in love with someone the moment you see them",
      "equivalent": "love at first sight",
      "example": "Ils ont eu le coup de foudre au premier regard.",
      "exampleEn": "They fell in love at first sight.",
      "tags": [
        "love",
        "emotions"
      ]
    },
    {
      "idiom": "être dans la lune",
      "literal": "to be in the moon",
      "meaning": "to be lost in your own thoughts instead of paying attention",
      "equivalent": "have one's head in the clouds",
      "example": "Tu n'écoutes pas, tu es encore dans la lune.",
      "exampleEn": "You're not listening, your head is in the clouds again.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "avoir un chat dans la gorge",
      "literal": "to have a cat in the throat",
      "meaning": "to be briefly hoarse and unable to speak clearly",
      "equivalent": "have a frog in one's throat",
      "example": "Excuse-moi, j'ai un chat dans la gorge.",
      "exampleEn": "Sorry, I've got a frog in my throat.",
      "tags": [
        "everyday",
        "talk"
      ]
    },
    {
      "idiom": "être à côté de la plaque",
      "literal": "to be beside the plate",
      "meaning": "to be completely wrong or to miss the point",
      "equivalent": "be wide of the mark",
      "example": "Ta réponse est complètement à côté de la plaque.",
      "exampleEn": "Your answer is completely wide of the mark.",
      "note": "Informal; it can also describe someone who is not following what is going on around them.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "casser les pieds",
      "literal": "to break someone's feet",
      "meaning": "to annoy or pester someone",
      "equivalent": "get on someone's nerves",
      "example": "Arrête de me casser les pieds avec tes questions.",
      "exampleEn": "Stop pestering me with your questions.",
      "note": "Informal but not rude; it stands in for a much cruder phrase with the same meaning.",
      "tags": [
        "trouble",
        "emotions"
      ]
    },
    {
      "idiom": "faire le pont",
      "literal": "to make the bridge",
      "meaning": "to take the working day between a public holiday and the weekend off",
      "example": "Jeudi est férié, on fait le pont vendredi.",
      "exampleEn": "Thursday is a public holiday, so we're taking Friday off as well.",
      "note": "A French workplace habit tied to the many May public holidays, so the phrase comes up every spring.",
      "tags": [
        "time",
        "work"
      ]
    },
    {
      "idiom": "joindre les deux bouts",
      "literal": "to join the two ends",
      "meaning": "to have just enough money to get to the end of the month",
      "equivalent": "make ends meet",
      "example": "Avec ce salaire, elle a du mal à joindre les deux bouts.",
      "exampleEn": "On that salary she struggles to make ends meet.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "en faire tout un fromage",
      "literal": "to make a whole cheese out of it",
      "meaning": "to treat something minor as a huge problem",
      "equivalent": "make a mountain out of a molehill",
      "example": "Ce n'est pas grave, n'en fais pas tout un fromage.",
      "exampleEn": "It's not a big deal, don't make a mountain out of a molehill.",
      "tags": [
        "talk",
        "emotions"
      ]
    },
    {
      "idiom": "avoir d'autres chats à fouetter",
      "literal": "to have other cats to whip",
      "meaning": "to have more important things to deal with",
      "equivalent": "have bigger fish to fry",
      "example": "Je n'ai pas le temps, j'ai d'autres chats à fouetter.",
      "exampleEn": "I don't have time, I've got bigger fish to fry.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "avoir le cafard",
      "literal": "to have the cockroach",
      "meaning": "to feel low and gloomy for a while",
      "equivalent": "have the blues",
      "example": "Depuis qu'il est parti, elle a le cafard.",
      "exampleEn": "She's had the blues ever since he left.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "mettre son grain de sel",
      "literal": "to put in one's grain of salt",
      "meaning": "to add an opinion that nobody asked for",
      "equivalent": "put in one's two cents",
      "example": "Il faut toujours qu'il mette son grain de sel.",
      "exampleEn": "He always has to put in his two cents.",
      "note": "Almost always said with irritation, unlike the neutral English version.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "donner sa langue au chat",
      "literal": "to give one's tongue to the cat",
      "meaning": "to give up trying to guess the answer",
      "example": "Je ne trouve pas la réponse, je donne ma langue au chat.",
      "exampleEn": "I can't work out the answer, I give up.",
      "note": "Said about riddles and guessing games, not about abandoning a real task.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "mettre la charrue avant les bœufs",
      "literal": "to put the plough before the oxen",
      "meaning": "to do things in the wrong order, starting with what should come last",
      "equivalent": "put the cart before the horse",
      "example": "Ne mets pas la charrue avant les bœufs, finis d'abord tes études.",
      "exampleEn": "Don't put the cart before the horse, finish your studies first.",
      "tags": [
        "work",
        "time"
      ]
    },
    {
      "idiom": "appeler un chat un chat",
      "literal": "to call a cat a cat",
      "meaning": "to say things plainly, without softening them",
      "equivalent": "call a spade a spade",
      "example": "Soyons honnêtes, appelons un chat un chat.",
      "exampleEn": "Let's be honest and call a spade a spade.",
      "tags": [
        "talk",
        "character"
      ]
    }
  ],
  "de": [
    {
      "idiom": "die Daumen drücken",
      "literal": "to press the thumbs",
      "meaning": "to wish someone luck",
      "equivalent": "keep one's fingers crossed",
      "example": "Ich drücke dir für die Prüfung die Daumen.",
      "exampleEn": "I'm keeping my fingers crossed for you for the exam.",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "die Nase voll haben",
      "literal": "to have the nose full",
      "meaning": "to be fed up with something",
      "equivalent": "be sick and tired of something",
      "example": "Ich habe die Nase voll von diesem Chaos.",
      "exampleEn": "I'm sick and tired of this chaos.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "keinen Bock haben",
      "literal": "to have no billy goat",
      "meaning": "to not feel like doing something",
      "equivalent": "can't be bothered",
      "example": "Ich habe heute keinen Bock auf Hausaufgaben.",
      "exampleEn": "I can't be bothered with homework today.",
      "note": "Very informal slang, fine among friends but out of place at work or with strangers.",
      "tags": [
        "everyday",
        "emotions"
      ]
    },
    {
      "idiom": "das ist mir Wurst",
      "literal": "that is sausage to me",
      "meaning": "it makes no difference to me",
      "equivalent": "it's all the same to me",
      "example": "Ob wir heute oder morgen gehen, das ist mir Wurst.",
      "exampleEn": "Whether we go today or tomorrow, it's all the same to me.",
      "note": "Casual and a bit dismissive; southern Germany and Austria say Wurscht.",
      "tags": [
        "everyday",
        "emotions"
      ]
    },
    {
      "idiom": "Schwein haben",
      "literal": "to have pig",
      "meaning": "to be lucky, usually after a narrow escape",
      "equivalent": "luck out",
      "example": "Da hast du aber Schwein gehabt!",
      "exampleEn": "You really lucked out there!",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "nur Bahnhof verstehen",
      "literal": "to understand only train station",
      "meaning": "to not understand anything at all",
      "equivalent": "it's all Greek to me",
      "example": "Bei diesem Vortrag habe ich nur Bahnhof verstanden.",
      "exampleEn": "That lecture was all Greek to me.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "den Nagel auf den Kopf treffen",
      "literal": "to hit the nail on the head",
      "meaning": "to say exactly the right thing",
      "equivalent": "hit the nail on the head",
      "example": "Mit deiner Analyse hast du den Nagel auf den Kopf getroffen.",
      "exampleEn": "Your analysis hit the nail on the head.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "jemanden auf die Palme bringen",
      "literal": "to bring someone up the palm tree",
      "meaning": "to make someone very angry",
      "equivalent": "drive someone up the wall",
      "example": "Mit seiner Unpünktlichkeit bringt er mich echt auf die Palme.",
      "exampleEn": "His lateness really drives me up the wall.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "unter vier Augen",
      "literal": "under four eyes",
      "meaning": "in private, with nobody else present",
      "example": "Können wir das bitte unter vier Augen besprechen?",
      "exampleEn": "Could we please discuss this in private?",
      "tags": [
        "talk",
        "work"
      ]
    },
    {
      "idiom": "auf dem Holzweg sein",
      "literal": "to be on the wooden path",
      "meaning": "to be mistaken, to follow a wrong assumption",
      "equivalent": "bark up the wrong tree",
      "example": "Wenn du das denkst, bist du auf dem Holzweg.",
      "exampleEn": "If that's what you think, you're barking up the wrong tree.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "die Katze im Sack kaufen",
      "literal": "to buy the cat in the sack",
      "meaning": "to buy something without checking it first",
      "equivalent": "buy a pig in a poke",
      "example": "Probier es erst aus, kauf nicht die Katze im Sack.",
      "exampleEn": "Try it out first, don't buy a pig in a poke.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "die Kirche im Dorf lassen",
      "literal": "to leave the church in the village",
      "meaning": "to keep things in proportion and not overreact",
      "example": "Jetzt lass mal die Kirche im Dorf, so schlimm war es nicht.",
      "exampleEn": "Let's not get carried away, it wasn't that bad.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "Tomaten auf den Augen haben",
      "literal": "to have tomatoes on one's eyes",
      "meaning": "to fail to see something obvious",
      "example": "Hast du Tomaten auf den Augen? Der Schlüssel liegt direkt vor dir.",
      "exampleEn": "Are you blind? The key is right in front of you.",
      "note": "Mildly mocking, so save it for friends and family.",
      "tags": [
        "everyday",
        "character"
      ]
    },
    {
      "idiom": "am Ball bleiben",
      "literal": "to stay on the ball",
      "meaning": "to stick with something and not give up",
      "example": "Bleib am Ball, dann klappt das mit dem Deutsch.",
      "exampleEn": "Keep at it and your German will come along.",
      "note": "It means sticking with something, not the English sense of being alert and quick.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "ins Fettnäpfchen treten",
      "literal": "to step into the little grease bowl",
      "meaning": "to say the wrong thing and cause offence",
      "equivalent": "put one's foot in one's mouth",
      "example": "Mit dieser Bemerkung bin ich ganz schön ins Fettnäpfchen getreten.",
      "exampleEn": "I really put my foot in my mouth with that remark.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "aus einer Mücke einen Elefanten machen",
      "literal": "to make an elephant out of a mosquito",
      "meaning": "to blow something small out of proportion",
      "equivalent": "make a mountain out of a molehill",
      "example": "Reg dich nicht auf, du machst aus einer Mücke einen Elefanten.",
      "exampleEn": "Don't get worked up, you're making a mountain out of a molehill.",
      "tags": [
        "talk",
        "emotions"
      ]
    },
    {
      "idiom": "Hals- und Beinbruch",
      "literal": "neck and leg break",
      "meaning": "good luck before a performance or a hard task",
      "equivalent": "break a leg",
      "example": "Morgen ist dein großer Auftritt, Hals- und Beinbruch!",
      "exampleEn": "Your big performance is tomorrow, break a leg!",
      "note": "It probably comes from the Yiddish blessing hatslokhe un brokhe (success and blessing), not from wishing injury.",
      "tags": [
        "luck",
        "talk"
      ]
    },
    {
      "idiom": "jemandem einen Korb geben",
      "literal": "to give someone a basket",
      "meaning": "to turn someone down, usually a romantic advance but also an offer",
      "equivalent": "give someone the brush-off",
      "example": "Er hat sie gefragt, aber sie hat ihm einen Korb gegeben.",
      "exampleEn": "He asked her out, but she gave him the brush-off.",
      "tags": [
        "love",
        "talk"
      ]
    },
    {
      "idiom": "in den sauren Apfel beißen",
      "literal": "to bite into the sour apple",
      "meaning": "to accept something unpleasant because there is no way around it",
      "equivalent": "bite the bullet",
      "example": "Ich muss wohl in den sauren Apfel beißen und noch mal von vorn anfangen.",
      "exampleEn": "I suppose I have to bite the bullet and start over.",
      "tags": [
        "trouble",
        "work"
      ]
    },
    {
      "idiom": "Schmetterlinge im Bauch haben",
      "literal": "to have butterflies in the belly",
      "meaning": "to feel the flutter of being newly in love",
      "equivalent": "have butterflies in one's stomach",
      "example": "Seit dem ersten Date habe ich Schmetterlinge im Bauch.",
      "exampleEn": "I've had butterflies in my stomach since the first date.",
      "note": "In German it points at being in love, while the English phrase is more often about nerves.",
      "tags": [
        "love",
        "emotions"
      ]
    },
    {
      "idiom": "über den Tellerrand schauen",
      "literal": "to look over the rim of the plate",
      "meaning": "to look beyond your own narrow perspective",
      "equivalent": "think outside the box",
      "example": "Für diesen Job muss man über den Tellerrand schauen.",
      "exampleEn": "This job takes someone who can think outside the box.",
      "note": "It is about broadening your horizon and taking an interest beyond your own field, so it is a little narrower than the English phrase.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "Geld zum Fenster hinauswerfen",
      "literal": "to throw money out of the window",
      "meaning": "to waste money on something pointless",
      "equivalent": "throw money down the drain",
      "example": "Noch eine Reparatur wäre Geld zum Fenster hinausgeworfen.",
      "exampleEn": "Another repair would be throwing money down the drain.",
      "tags": [
        "money"
      ]
    },
    {
      "idiom": "die Beine in die Hand nehmen",
      "literal": "to take the legs in the hand",
      "meaning": "to hurry, to run as fast as possible",
      "example": "Wir müssen die Beine in die Hand nehmen, sonst verpassen wir den Zug.",
      "exampleEn": "We need to get a move on or we'll miss the train.",
      "tags": [
        "time",
        "everyday"
      ]
    },
    {
      "idiom": "ins Gras beißen",
      "literal": "to bite into the grass",
      "meaning": "to die",
      "equivalent": "bite the dust",
      "example": "Im Film muss der Bösewicht am Ende ins Gras beißen.",
      "exampleEn": "In the film the villain has to bite the dust in the end.",
      "note": "Blunt and jokey, so never use it about a real death.",
      "tags": [
        "trouble"
      ]
    },
    {
      "idiom": "die Flinte ins Korn werfen",
      "literal": "to throw the rifle into the grain",
      "meaning": "to give up when things get hard",
      "equivalent": "throw in the towel",
      "example": "Gib nicht auf, wirf jetzt nicht die Flinte ins Korn.",
      "exampleEn": "Don't give up, don't throw in the towel now.",
      "note": "Still current but slightly bookish; das Handtuch werfen is the more everyday version.",
      "tags": [
        "work",
        "trouble"
      ]
    }
  ],
  "it": [
    {
      "idiom": "in bocca al lupo",
      "literal": "in the mouth of the wolf",
      "meaning": "good luck with what you are about to face",
      "equivalent": "break a leg",
      "example": "Domani hai l'esame? In bocca al lupo!",
      "exampleEn": "You have your exam tomorrow? Good luck!",
      "note": "The expected reply is crepi il lupo (or just crepi), and Italians use it for exams, interviews and appointments, not only for performances.",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "non vedere l'ora",
      "literal": "not to see the hour",
      "meaning": "to be really looking forward to something",
      "equivalent": "can't wait",
      "example": "Non vedo l'ora di partire per le vacanze.",
      "exampleEn": "I can't wait to leave on holiday.",
      "tags": [
        "emotions",
        "time"
      ]
    },
    {
      "idiom": "prendere in giro",
      "literal": "to take around",
      "meaning": "to tease someone or make fun of them",
      "equivalent": "pull someone's leg",
      "example": "Non arrabbiarti, ti stavo solo prendendo in giro.",
      "exampleEn": "Don't get angry, I was only pulling your leg.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "costare un occhio della testa",
      "literal": "to cost an eye of the head",
      "meaning": "to be extremely expensive",
      "equivalent": "cost an arm and a leg",
      "example": "Quella borsa costa un occhio della testa.",
      "exampleEn": "That bag costs an arm and a leg.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "essere al verde",
      "literal": "to be at the green",
      "meaning": "to have no money left",
      "equivalent": "be broke",
      "example": "Non posso uscire stasera, sono al verde.",
      "exampleEn": "I can't go out tonight, I'm broke.",
      "tags": [
        "money"
      ]
    },
    {
      "idiom": "avere la testa tra le nuvole",
      "literal": "to have the head among the clouds",
      "meaning": "to be distracted and lost in your own thoughts",
      "equivalent": "have your head in the clouds",
      "example": "Oggi hai la testa tra le nuvole, è successo qualcosa?",
      "exampleEn": "You've got your head in the clouds today, has something happened?",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "essere in gamba",
      "literal": "to be in leg",
      "meaning": "to be capable and reliable at what you do",
      "equivalent": "be on the ball",
      "example": "Il nostro medico è davvero in gamba.",
      "exampleEn": "Our doctor really knows his job.",
      "note": "Also used as a warm goodbye in the form stammi in gamba, meaning take care of yourself.",
      "tags": [
        "character",
        "work"
      ]
    },
    {
      "idiom": "acqua in bocca",
      "literal": "water in the mouth",
      "meaning": "keep this to yourself and tell nobody",
      "equivalent": "mum's the word",
      "example": "Ti dico un segreto, ma acqua in bocca!",
      "exampleEn": "I'll tell you a secret, but mum's the word!",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "cadere dalle nuvole",
      "literal": "to fall from the clouds",
      "meaning": "to be completely taken by surprise by a piece of news",
      "example": "Quando mi hanno detto del divorzio sono caduta dalle nuvole.",
      "exampleEn": "When they told me about the divorce I was completely taken aback.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "toccare ferro",
      "literal": "to touch iron",
      "meaning": "to do a small superstitious gesture to keep bad luck away",
      "equivalent": "knock on wood",
      "example": "Finora è andato tutto bene, tocchiamo ferro.",
      "exampleEn": "Everything has gone well so far, knock on wood.",
      "note": "Italians touch iron rather than wood, and they often actually reach for something metal while saying it.",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "prendere due piccioni con una fava",
      "literal": "to catch two pigeons with one broad bean",
      "meaning": "to get two results from a single action",
      "equivalent": "kill two birds with one stone",
      "example": "Vado in centro e ne approfitto per fare la spesa, così prendo due piccioni con una fava.",
      "exampleEn": "I'm going into town and doing the shopping while I'm there, so I kill two birds with one stone.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "avere un diavolo per capello",
      "literal": "to have a devil for each hair",
      "meaning": "to be furious and impossible to approach",
      "equivalent": "be hopping mad",
      "example": "Non parlarle adesso, ha un diavolo per capello.",
      "exampleEn": "Don't talk to her right now, she's absolutely furious.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "tagliare la corda",
      "literal": "to cut the rope",
      "meaning": "to slip away quickly to avoid a situation",
      "equivalent": "make yourself scarce",
      "example": "Appena ha visto il capo, ha tagliato la corda.",
      "exampleEn": "As soon as he saw the boss, he slipped away.",
      "tags": [
        "trouble",
        "everyday"
      ]
    },
    {
      "idiom": "avere una cotta per qualcuno",
      "literal": "to have a cooked one for someone",
      "meaning": "to be infatuated with someone",
      "equivalent": "have a crush on someone",
      "example": "Si vede che ha una cotta per la sua compagna di banco.",
      "exampleEn": "You can tell he has a crush on the girl he sits next to.",
      "note": "Informal, and about early infatuation rather than a settled relationship.",
      "tags": [
        "love",
        "emotions"
      ]
    },
    {
      "idiom": "non avere peli sulla lingua",
      "literal": "not to have hairs on the tongue",
      "meaning": "to say exactly what you think without softening it",
      "equivalent": "not mince words",
      "example": "Mia nonna non ha peli sulla lingua, ti dice tutto in faccia.",
      "exampleEn": "My grandmother doesn't mince words, she tells you everything to your face.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "avere le mani in pasta",
      "literal": "to have the hands in the dough",
      "meaning": "to be closely involved in something and have influence over it",
      "equivalent": "have a finger in the pie",
      "example": "In quel settore ha le mani in pasta da anni.",
      "exampleEn": "He has had a finger in that pie for years.",
      "note": "Depending on context it can be neutral praise for someone well connected or a hint at shady involvement.",
      "tags": [
        "work",
        "money"
      ]
    },
    {
      "idiom": "avere un chiodo fisso",
      "literal": "to have a fixed nail",
      "meaning": "to be stuck on one idea and think about nothing else",
      "example": "Da mesi ha un chiodo fisso: comprare casa.",
      "exampleEn": "For months he has had one thing on his mind, buying a house.",
      "tags": [
        "emotions",
        "character"
      ]
    },
    {
      "idiom": "mettere il carro davanti ai buoi",
      "literal": "to put the cart in front of the oxen",
      "meaning": "to do things in the wrong order, starting from the end",
      "equivalent": "put the cart before the horse",
      "example": "Prima troviamo i soldi, poi pensiamo alla ristrutturazione, non mettiamo il carro davanti ai buoi.",
      "exampleEn": "First we find the money, then we think about the renovation, let's not put the cart before the horse.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "fare il passo più lungo della gamba",
      "literal": "to take a step longer than the leg",
      "meaning": "to take on more than you can actually handle",
      "equivalent": "bite off more than you can chew",
      "example": "Con quel mutuo ha fatto il passo più lungo della gamba.",
      "exampleEn": "With that mortgage he bit off more than he could chew.",
      "tags": [
        "money",
        "trouble"
      ]
    },
    {
      "idiom": "vuotare il sacco",
      "literal": "to empty the sack",
      "meaning": "to finally tell everything you were keeping quiet about",
      "equivalent": "spill the beans",
      "example": "Dai, vuota il sacco: cosa è successo ieri sera?",
      "exampleEn": "Come on, spill the beans, what happened last night?",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "piove sul bagnato",
      "literal": "it rains on the wet ground",
      "meaning": "more of the same keeps happening to someone who already has plenty of it",
      "equivalent": "when it rains, it pours",
      "example": "Ha vinto di nuovo alla lotteria: piove sul bagnato.",
      "exampleEn": "He won the lottery again, when it rains it pours.",
      "note": "Italians use it for runs of good luck as readily as for bad ones, while the English version is usually about trouble.",
      "tags": [
        "luck"
      ]
    },
    {
      "idiom": "essere una schiappa",
      "literal": "to be a wood chip",
      "meaning": "to be hopeless at something",
      "example": "A tennis sono una schiappa, non prendo mai la palla.",
      "exampleEn": "I'm hopeless at tennis, I never hit the ball.",
      "note": "Informal and light, typical of sport and school talk.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "avere la botte piena e la moglie ubriaca",
      "literal": "to have the barrel full and the wife drunk",
      "meaning": "to want two good things that cannot go together",
      "equivalent": "have your cake and eat it too",
      "example": "Vuoi lo stipendio pieno e il venerdì libero? Non puoi avere la botte piena e la moglie ubriaca.",
      "exampleEn": "You want a full salary and Fridays off? You can't have your cake and eat it too.",
      "note": "Nearly always used in the negative, and often with volere: vuoi la botte piena e la moglie ubriaca.",
      "tags": [
        "character",
        "everyday"
      ]
    },
    {
      "idiom": "non tutte le ciambelle riescono col buco",
      "literal": "not all doughnuts come out with a hole",
      "meaning": "not everything turns out the way you planned",
      "equivalent": "you can't win them all",
      "example": "Il dolce è bruciato, pazienza, non tutte le ciambelle riescono col buco.",
      "exampleEn": "The cake burnt, never mind, you can't win them all.",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "fare orecchie da mercante",
      "literal": "to make merchant's ears",
      "meaning": "to pretend not to hear a request you would rather ignore",
      "equivalent": "turn a deaf ear",
      "example": "Gli ho chiesto di abbassare la musica, ma ha fatto orecchie da mercante.",
      "exampleEn": "I asked him to turn the music down, but he turned a deaf ear.",
      "tags": [
        "talk",
        "character"
      ]
    }
  ],
  "pt": [
    {
      "idiom": "ficar de olho",
      "literal": "to stay with an eye",
      "meaning": "to watch something closely and keep track of it",
      "equivalent": "keep an eye on",
      "example": "Fica de olho nas crianças, por favor.",
      "exampleEn": "Keep an eye on the kids, please.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "custar os olhos da cara",
      "literal": "to cost the eyes of the face",
      "meaning": "to be very expensive",
      "equivalent": "cost an arm and a leg",
      "example": "Esse celular custa os olhos da cara.",
      "exampleEn": "That phone costs an arm and a leg.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "dar um jeitinho",
      "literal": "to give a little way",
      "meaning": "to find an informal workaround so that something gets done",
      "example": "Relaxa, a gente dá um jeitinho de te colocar na lista.",
      "exampleEn": "Relax, we'll find a way to get you on the list.",
      "note": "Very Brazilian; the noun jeitinho names a whole national habit of bending the rules to solve a problem, so it can sound charming or shady depending on context.",
      "tags": [
        "everyday",
        "trouble"
      ]
    },
    {
      "idiom": "engolir sapos",
      "literal": "to swallow frogs",
      "meaning": "to put up with unpleasant things without complaining",
      "equivalent": "grin and bear it",
      "example": "No trabalho, às vezes é preciso engolir sapos.",
      "exampleEn": "At work you sometimes have to grin and bear it.",
      "tags": [
        "work",
        "emotions"
      ]
    },
    {
      "idiom": "ficar com a pulga atrás da orelha",
      "literal": "to be left with a flea behind the ear",
      "meaning": "to grow suspicious that something is not right",
      "equivalent": "smell a rat",
      "example": "Ele mudou de assunto na hora e eu fiquei com a pulga atrás da orelha.",
      "exampleEn": "He changed the subject right away and I smelled a rat.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "pagar o pato",
      "literal": "to pay for the duck",
      "meaning": "to take the blame or bear the cost for someone else's mistake",
      "equivalent": "take the rap",
      "example": "No final, quem pagou o pato fui eu.",
      "exampleEn": "In the end, I was the one who took the rap.",
      "tags": [
        "trouble",
        "work"
      ]
    },
    {
      "idiom": "cair a ficha",
      "literal": "for the token to drop",
      "meaning": "to finally understand something, for it to sink in",
      "equivalent": "the penny drops",
      "example": "Só depois de uma semana caiu a ficha de que ele estava falando sério.",
      "exampleEn": "Only after a week did it sink in that he was being serious.",
      "note": "The image is a token dropping into an old payphone, and the phrase is heard far more in Brazil than in Portugal.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "quebrar um galho",
      "literal": "to break a branch",
      "meaning": "to help someone out, or to patch together a temporary solution",
      "example": "Você pode quebrar um galho e me emprestar dez reais?",
      "exampleEn": "Could you help me out and lend me ten reais?",
      "note": "Informal and Brazilian, and a solution described as a quebra-galho is understood to be a stopgap that will not last.",
      "tags": [
        "everyday",
        "work"
      ]
    },
    {
      "idiom": "puxar o saco",
      "literal": "to pull the sack",
      "meaning": "to flatter someone in charge in order to get something out of it",
      "equivalent": "suck up to someone",
      "example": "Ele vive puxando o saco do chefe.",
      "exampleEn": "He's always sucking up to the boss.",
      "note": "Brazilian, informal and slightly crude in its literal image; in Portugal the same idea is dar graxa a alguém.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "fazer vista grossa",
      "literal": "to make a thick view",
      "meaning": "to ignore something wrong on purpose",
      "equivalent": "turn a blind eye",
      "example": "O fiscal fez vista grossa e ninguém foi multado.",
      "exampleEn": "The inspector turned a blind eye and nobody was fined.",
      "tags": [
        "trouble",
        "work"
      ]
    },
    {
      "idiom": "dar o braço a torcer",
      "literal": "to give one's arm to be twisted",
      "meaning": "to admit you were wrong and give in",
      "equivalent": "back down",
      "example": "Ele sabe que errou, mas não dá o braço a torcer.",
      "exampleEn": "He knows he was wrong, but he won't back down.",
      "note": "Usually met in the negative, não dar o braço a torcer, about someone who refuses to admit a mistake.",
      "tags": [
        "character",
        "talk"
      ]
    },
    {
      "idiom": "não ter papas na língua",
      "literal": "to not have pap on the tongue",
      "meaning": "to say exactly what you think, without softening it",
      "equivalent": "not mince words",
      "example": "Ela não tem papas na língua, fala o que pensa.",
      "exampleEn": "She doesn't mince words, she says what she thinks.",
      "tags": [
        "talk",
        "character"
      ]
    },
    {
      "idiom": "fazer tempestade em copo d'água",
      "literal": "to make a storm in a glass of water",
      "meaning": "to blow a small problem out of proportion",
      "equivalent": "make a mountain out of a molehill",
      "example": "Calma, você está fazendo tempestade em copo d'água.",
      "exampleEn": "Calm down, you're making a mountain out of a molehill.",
      "note": "In Portugal the wording is usually fazer uma tempestade num copo de água.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "tirar o cavalinho da chuva",
      "literal": "to take the little horse out of the rain",
      "meaning": "to drop an expectation because it is not going to happen",
      "equivalent": "don't hold your breath",
      "example": "Se você acha que vou ajudar, pode tirar o cavalinho da chuva.",
      "exampleEn": "If you think I'm going to help, don't hold your breath.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "matar dois coelhos com uma cajadada só",
      "literal": "to kill two rabbits with a single blow of the staff",
      "meaning": "to settle two things with a single action",
      "equivalent": "kill two birds with one stone",
      "example": "Passo no banco na volta do trabalho e mato dois coelhos com uma cajadada só.",
      "exampleEn": "I'll stop by the bank on my way home from work and kill two birds with one stone.",
      "note": "In Portugal the usual wording is matar dois coelhos de uma cajadada só.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "pisar em ovos",
      "literal": "to step on eggs",
      "meaning": "to handle something very carefully so as not to upset anyone",
      "equivalent": "walk on eggshells",
      "example": "Com esse assunto delicado, é melhor pisar em ovos.",
      "exampleEn": "With such a delicate subject, it's better to walk on eggshells.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "estar por um fio",
      "literal": "to be by a thread",
      "meaning": "to be on the verge of failing or ending",
      "equivalent": "hang by a thread",
      "example": "O acordo está por um fio depois da última reunião.",
      "exampleEn": "The deal is hanging by a thread after the last meeting.",
      "tags": [
        "trouble",
        "work"
      ]
    },
    {
      "idiom": "dar com a língua nos dentes",
      "literal": "to hit one's teeth with the tongue",
      "meaning": "to let a secret slip",
      "equivalent": "spill the beans",
      "example": "Não conte a ele, ele sempre dá com a língua nos dentes.",
      "exampleEn": "Don't tell him, he always spills the beans.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "não ter pé nem cabeça",
      "literal": "to have neither foot nor head",
      "meaning": "to make no sense at all",
      "equivalent": "have neither rhyme nor reason",
      "example": "Essa história não tem pé nem cabeça.",
      "exampleEn": "That story makes no sense at all.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "encher linguiça",
      "literal": "to stuff sausage",
      "meaning": "to fill space with pointless words or busywork",
      "example": "Para de encher linguiça e vai direto ao ponto.",
      "exampleEn": "Stop padding it out and get straight to the point.",
      "note": "Informal and Brazilian, said of long speeches, essays and meetings; the Portugal version is encher chouriços.",
      "tags": [
        "talk",
        "work"
      ]
    },
    {
      "idiom": "chover a cântaros",
      "literal": "to rain in pitchers",
      "meaning": "to rain very heavily",
      "equivalent": "rain cats and dogs",
      "example": "Leva o guarda-chuva, está chovendo a cântaros.",
      "exampleEn": "Take an umbrella, it's raining cats and dogs.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "descascar um abacaxi",
      "literal": "to peel a pineapple",
      "meaning": "to sort out a messy problem, often one someone else left behind",
      "example": "Sobrou para mim descascar esse abacaxi.",
      "exampleEn": "I was the one left to sort out this mess.",
      "note": "Brazilian, and on its own abacaxi (pineapple) already means a thorny problem.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "meter os pés pelas mãos",
      "literal": "to put one's feet through one's hands",
      "meaning": "to get muddled and bungle what you are doing",
      "equivalent": "make a hash of it",
      "example": "Fiquei nervoso e meti os pés pelas mãos na entrevista.",
      "exampleEn": "I got nervous and made a hash of the interview.",
      "tags": [
        "trouble",
        "work"
      ]
    },
    {
      "idiom": "fazer das tripas coração",
      "literal": "to make a heart out of one's guts",
      "meaning": "to summon all your strength and push through something very hard",
      "equivalent": "grit one's teeth",
      "example": "Fiz das tripas coração e terminei o trabalho a tempo.",
      "exampleEn": "I gritted my teeth and finished the work on time.",
      "tags": [
        "emotions",
        "work"
      ]
    },
    {
      "idiom": "ficar a ver navios",
      "literal": "to be left watching ships",
      "meaning": "to end up with nothing after expecting something",
      "equivalent": "be left high and dry",
      "example": "Esperava o aumento, mas fiquei a ver navios.",
      "exampleEn": "I was expecting the raise, but I was left high and dry.",
      "note": "Above all a Portugal expression; Brazilians understand it but usually say ficar na mão instead.",
      "tags": [
        "trouble",
        "emotions"
      ]
    }
  ],
  "ru": [
    {
      "idiom": "брать себя в руки",
      "literal": "to take oneself into one's hands",
      "meaning": "to regain control of one's emotions",
      "equivalent": "pull oneself together",
      "example": "Возьми себя в руки и успокойся.",
      "exampleEn": "Pull yourself together and calm down.",
      "tags": [
        "emotions",
        "character"
      ]
    },
    {
      "idiom": "ломать голову",
      "literal": "to break one's head",
      "meaning": "to think hard about a difficult problem",
      "equivalent": "rack one's brains",
      "example": "Я весь вечер ломаю голову над этой задачей.",
      "exampleEn": "I have been racking my brains over this problem all evening.",
      "tags": [
        "work",
        "trouble"
      ]
    },
    {
      "idiom": "как две капли воды",
      "literal": "like two drops of water",
      "meaning": "exactly alike in appearance",
      "equivalent": "as alike as two peas in a pod",
      "example": "Сёстры похожи как две капли воды.",
      "exampleEn": "The sisters look exactly alike.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "лить как из ведра",
      "literal": "to pour as if from a bucket",
      "meaning": "to rain very heavily",
      "equivalent": "rain cats and dogs",
      "example": "Возьми зонт, дождь льёт как из ведра.",
      "exampleEn": "Take an umbrella, the rain is pouring down.",
      "tags": [
        "everyday"
      ]
    },
    {
      "idiom": "делать из мухи слона",
      "literal": "to make an elephant out of a fly",
      "meaning": "to treat a tiny problem as a huge one",
      "equivalent": "make a mountain out of a molehill",
      "example": "Не преувеличивай, ты делаешь из мухи слона.",
      "exampleEn": "Do not exaggerate, you are making a mountain out of a molehill.",
      "tags": [
        "emotions",
        "trouble"
      ]
    },
    {
      "idiom": "ни пуха ни пера",
      "literal": "neither fluff nor feather",
      "meaning": "good luck, said before an exam or another hard test",
      "equivalent": "break a leg",
      "example": "Завтра экзамен? Ни пуха ни пера!",
      "exampleEn": "You have an exam tomorrow? Good luck!",
      "note": "The expected reply is «К чёрту!» (to the devil), never «спасибо», because thanking is thought to jinx it.",
      "tags": [
        "luck",
        "everyday"
      ]
    },
    {
      "idiom": "как снег на голову",
      "literal": "like snow onto the head",
      "meaning": "completely unexpectedly, with no warning",
      "equivalent": "out of the blue",
      "example": "Гости свалились как снег на голову.",
      "exampleEn": "The guests turned up completely out of the blue.",
      "tags": [
        "trouble",
        "time"
      ]
    },
    {
      "idiom": "не в своей тарелке",
      "literal": "not in one's own plate",
      "meaning": "uneasy, out of place in a situation",
      "equivalent": "out of one's element",
      "example": "На той вечеринке я чувствовал себя не в своей тарелке.",
      "exampleEn": "At that party I felt out of place.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "вешать лапшу на уши",
      "literal": "to hang noodles on someone's ears",
      "meaning": "to feed someone lies with a straight face",
      "equivalent": "pull the wool over someone's eyes",
      "example": "Не вешай мне лапшу на уши, я знаю правду.",
      "exampleEn": "Do not feed me lies, I know the truth.",
      "note": "Colloquial and blunt, so it sounds like an accusation when said to someone's face.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "держать язык за зубами",
      "literal": "to keep one's tongue behind one's teeth",
      "meaning": "to stay quiet and not give away a secret",
      "equivalent": "keep one's mouth shut",
      "example": "Умей держать язык за зубами.",
      "exampleEn": "Learn to keep your mouth shut.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "на седьмом небе от счастья",
      "literal": "on the seventh heaven from happiness",
      "meaning": "extremely happy",
      "equivalent": "on cloud nine",
      "example": "Она получила работу и была на седьмом небе от счастья.",
      "exampleEn": "She got the job and was on cloud nine.",
      "tags": [
        "emotions"
      ]
    },
    {
      "idiom": "водить за нос",
      "literal": "to lead by the nose",
      "meaning": "to deceive someone over a long time while keeping them hopeful",
      "equivalent": "string someone along",
      "example": "Он давно водит тебя за нос.",
      "exampleEn": "He has been stringing you along for a long time.",
      "tags": [
        "talk",
        "trouble"
      ]
    },
    {
      "idiom": "кот наплакал",
      "literal": "the cat cried that much",
      "meaning": "very little, almost none at all",
      "example": "Денег осталось кот наплакал.",
      "exampleEn": "There is hardly any money left.",
      "tags": [
        "money",
        "everyday"
      ]
    },
    {
      "idiom": "убить двух зайцев",
      "literal": "to kill two hares",
      "meaning": "to achieve two goals with one action",
      "equivalent": "kill two birds with one stone",
      "example": "Так мы убьём двух зайцев сразу.",
      "exampleEn": "That way we will kill two birds with one stone.",
      "tags": [
        "work",
        "everyday"
      ]
    },
    {
      "idiom": "витать в облаках",
      "literal": "to hover in the clouds",
      "meaning": "to daydream instead of facing reality",
      "equivalent": "have one's head in the clouds",
      "example": "Хватит витать в облаках, вернись к делу.",
      "exampleEn": "Stop daydreaming, get back to work.",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "сидеть на шее",
      "literal": "to sit on someone's neck",
      "meaning": "to live at someone else's expense",
      "equivalent": "sponge off someone",
      "example": "Ему тридцать, а он всё сидит на шее у родителей.",
      "exampleEn": "He is thirty and still living off his parents.",
      "note": "Informal and openly disapproving, so it works as a reproach rather than a neutral description.",
      "tags": [
        "money",
        "character"
      ]
    },
    {
      "idiom": "белая ворона",
      "literal": "a white crow",
      "meaning": "a person who stands out sharply from everyone around",
      "equivalent": "the odd one out",
      "example": "В новом классе он чувствовал себя белой вороной.",
      "exampleEn": "In his new class he felt like the odd one out.",
      "note": "Usually neutral or sympathetic, without the blame carried by the English \"black sheep\".",
      "tags": [
        "character"
      ]
    },
    {
      "idiom": "спустя рукава",
      "literal": "with the sleeves let down",
      "meaning": "carelessly, without real effort",
      "example": "Он работает спустя рукава.",
      "exampleEn": "He does his work carelessly.",
      "tags": [
        "work",
        "character"
      ]
    },
    {
      "idiom": "зарубить на носу",
      "literal": "to notch it on one's nose",
      "meaning": "to remember something once and for all",
      "example": "Заруби себе на носу: больше так не делай.",
      "exampleEn": "Get this into your head once and for all: never do that again.",
      "note": "Said as a stern warning, usually to someone younger or junior. The нос here is an old tally stick people carried for notches, not the nose.",
      "tags": [
        "talk",
        "everyday"
      ]
    },
    {
      "idiom": "как об стенку горох",
      "literal": "like peas against a wall",
      "meaning": "having no effect at all on the person you are talking to",
      "equivalent": "like talking to a brick wall",
      "example": "Я ему сто раз говорил, а всё как об стенку горох.",
      "exampleEn": "I have told him a hundred times, but it is like talking to a brick wall.",
      "tags": [
        "talk"
      ]
    },
    {
      "idiom": "ни свет ни заря",
      "literal": "neither light nor dawn",
      "meaning": "very early in the morning, before sunrise",
      "equivalent": "at the crack of dawn",
      "example": "Мы выехали ни свет ни заря.",
      "exampleEn": "We set off at the crack of dawn.",
      "tags": [
        "time",
        "everyday"
      ]
    },
    {
      "idiom": "тянуть кота за хвост",
      "literal": "to pull the cat by the tail",
      "meaning": "to drag something out instead of getting to the point",
      "equivalent": "drag one's feet",
      "example": "Не тяни кота за хвост, говори прямо.",
      "exampleEn": "Stop dragging it out, say it straight.",
      "note": "Informal and impatient, normally said to someone you know well.",
      "tags": [
        "time",
        "talk"
      ]
    },
    {
      "idiom": "когда рак на горе свистнет",
      "literal": "when the crayfish whistles on the mountain",
      "meaning": "never, at no point ever",
      "equivalent": "when pigs fly",
      "example": "Он вернёт долг, когда рак на горе свистнет.",
      "exampleEn": "He will pay the debt back when pigs fly.",
      "note": "Jokey and informal, used to mock a promise nobody believes.",
      "tags": [
        "time"
      ]
    },
    {
      "idiom": "остаться с носом",
      "literal": "to be left with the nose",
      "meaning": "to end up with nothing after counting on a gain",
      "equivalent": "be left empty-handed",
      "example": "Он всех обманул, а сам остался с носом.",
      "exampleEn": "He tricked everyone and ended up with nothing himself.",
      "tags": [
        "luck",
        "trouble"
      ]
    },
    {
      "idiom": "бить баклуши",
      "literal": "to beat wooden blocks",
      "meaning": "to idle away time doing nothing useful",
      "equivalent": "goof off",
      "example": "Хватит бить баклуши, пора работать.",
      "exampleEn": "Stop goofing off, it is time to work.",
      "note": "Colloquial and mildly scolding, most often aimed at children or students.",
      "tags": [
        "work",
        "character"
      ]
    }
  ]
};

// What each language calls an idiom and a proverb, for FAQ and GEO copy.
export const idiomMeta: Record<string, IdiomLangMeta> = {
  "af": {
    "idiomTerm": "idioom",
    "proverbTerm": "spreekwoord",
    "termNote": "An idioom (also called an uitdrukking) is a fixed figurative phrase that you fit into your own sentence, while a spreekwoord is a complete sentence that states a general truth or lesson and is quoted unchanged."
  },
  "az": {
    "idiomTerm": "frazeoloji birləşmə",
    "proverbTerm": "atalar sözü",
    "termNote": "A frazeoloji birləşmə is a fixed figurative phrase used inside a sentence, while an atalar sözü (literally \"fathers' word\") is a complete proverb that stands on its own as folk wisdom."
  },
  "be": {
    "idiomTerm": "фразеалагізм",
    "proverbTerm": "прыказка",
    "termNote": "A фразеалагізм is a fixed figurative phrase that works inside a sentence like a single word, while a прыказка is a complete sentence carrying a lesson, and a shorter figurative saying that is not a full sentence is called a прымаўка."
  },
  "bg": {
    "idiomTerm": "идиом",
    "proverbTerm": "пословица",
    "termNote": "A пословица is a complete proverb sentence that states a lesson, a поговорка is a shorter figurative saying without the moral, and an идиом (called фразеологизъм in school grammar) is a fixed phrase you build a sentence around."
  },
  "bs": {
    "idiomTerm": "frazem",
    "proverbTerm": "poslovica",
    "termNote": "A frazem is a fixed figurative phrase that slots into a sentence like a single word, while a poslovica is a complete sentence that states a piece of folk wisdom."
  },
  "ca": {
    "idiomTerm": "frase feta",
    "proverbTerm": "refrany",
    "termNote": "A frase feta is a fixed expression that works as a piece of a sentence, while a refrany is a complete saying that passes on folk wisdom or advice. You will also hear refranys called dites."
  },
  "cs": {
    "idiomTerm": "rčení",
    "proverbTerm": "přísloví",
    "termNote": "Czechs call a fixed figurative phrase a rčení (linguists prefer frazém or idiom), while a přísloví is a complete sentence that states a piece of folk wisdom."
  },
  "da": {
    "idiomTerm": "talemåde",
    "proverbTerm": "ordsprog",
    "termNote": "A talemåde is a fixed figurative phrase you fit into your own sentence, while an ordsprog is a complete stand-alone sentence carrying a piece of folk wisdom."
  },
  "el": {
    "idiomTerm": "ιδιωματισμός",
    "proverbTerm": "παροιμία",
    "termNote": "Greek calls a fixed expression whose meaning is not literal an ιδιωματισμός (also ιδιωματική έκφραση), while a παροιμία is a complete traditional saying that states a piece of folk wisdom."
  },
  "et": {
    "idiomTerm": "kõnekäänd",
    "proverbTerm": "vanasõna",
    "termNote": "A kõnekäänd is a figurative expression that bends to fit the sentence around it (dictionaries also call it a fraseologism), while a vanasõna is a proverb, a fixed complete sentence carrying folk wisdom."
  },
  "eu": {
    "idiomTerm": "esamolde",
    "proverbTerm": "atsotitz",
    "termNote": "An esamolde (also esapide) is an everyday fixed expression whose meaning is not literal, while an atsotitz (commonly called esaera zaharra) is a full proverb that passes on traditional advice."
  },
  "fi": {
    "idiomTerm": "sanonta",
    "proverbTerm": "sananlasku",
    "termNote": "Finnish speakers call a fixed figurative expression a sanonta (the linguistic term is idiomi), while a sananlasku is a proverb, a full sentence that passes on a piece of folk wisdom."
  },
  "gl": {
    "idiomTerm": "frase feita",
    "proverbTerm": "refrán",
    "termNote": "A frase feita is an everyday fixed expression that slots into a sentence, while a refrán is a complete traditional proverb, often rhymed and usually about weather, farming or country wisdom."
  },
  "hr": {
    "idiomTerm": "frazem",
    "proverbTerm": "poslovica",
    "termNote": "A frazem is a fixed expression whose meaning cannot be worked out from the individual words, while a poslovica is a complete sentence that passes on a piece of folk wisdom."
  },
  "hu": {
    "idiomTerm": "szólás",
    "proverbTerm": "közmondás",
    "termNote": "A szólás is a fixed figurative phrase that you fit into a sentence of your own, while a közmondás is a complete sentence that states a piece of folk wisdom."
  },
  "hy": {
    "idiomTerm": "դարձվածք",
    "proverbTerm": "առած",
    "termNote": "Armenians call a fixed figurative phrase a դարձվածք, while an առած is a whole saying that states a piece of folk wisdom, usually listed alongside ասացվածք (a common saying)."
  },
  "id": {
    "idiomTerm": "ungkapan",
    "proverbTerm": "peribahasa",
    "termNote": "An ungkapan (also called idiom) is a short fixed phrase whose meaning cannot be worked out from the separate words, while a peribahasa is a longer traditional saying that carries advice or a moral."
  },
  "is": {
    "idiomTerm": "orðatiltæki",
    "proverbTerm": "málsháttur",
    "termNote": "An orðatiltæki (also called orðtak) is a fixed figurative phrase that you bend into your own sentence, while a málsháttur is a complete sentence stating a general truth."
  },
  "ka": {
    "idiomTerm": "იდიომა",
    "proverbTerm": "ანდაზა",
    "termNote": "An ანდაზა is a complete proverb sentence that carries a lesson, while an იდიომა (also called ფრაზეოლოგიზმი or მყარი შესიტყვება in Georgian grammar) is a fixed figurative phrase you build your own sentence around."
  },
  "kk": {
    "idiomTerm": "тұрақты тіркес",
    "proverbTerm": "мақал",
    "termNote": "A тұрақты тіркес (fixed phrase, also called фразеологизм) is a figurative expression used inside a sentence, while a мақал is a complete proverb that states a moral, and the related мәтел is a shorter saying that leaves the conclusion unspoken."
  },
  "ky": {
    "idiomTerm": "фразеологизм",
    "proverbTerm": "макал",
    "termNote": "A фразеологизм (also called туруктуу сөз айкашы, a fixed word combination) is a short figurative phrase that behaves like a single word, while a макал is a full proverb that states a lesson and a лакап is a shorter folk saying."
  },
  "lt": {
    "idiomTerm": "frazeologizmas",
    "proverbTerm": "patarlė",
    "termNote": "A frazeologizmas is a fixed figurative phrase that sits inside a sentence, while a patarlė is a complete sentence that states a piece of folk wisdom."
  },
  "lv": {
    "idiomTerm": "frazeoloģisms",
    "proverbTerm": "sakāmvārds",
    "termNote": "A frazeoloģisms (also called an idioma) is a fixed phrase whose meaning does not follow from its separate words, a sakāmvārds is a complete sentence that states a piece of folk wisdom, and a shorter figurative saying with no lesson attached is called a paruna."
  },
  "mk": {
    "idiomTerm": "фразеологизам",
    "proverbTerm": "поговорка",
    "termNote": "A фразеологизам (also called идиом) is a fixed figurative phrase used inside a sentence, while a поговорка is a complete folk saying that states a lesson on its own."
  },
  "mn": {
    "idiomTerm": "хэлц үг",
    "proverbTerm": "зүйр цэцэн үг",
    "termNote": "A хэлц үг (also called өвөрмөц хэлц) is a fixed figurative phrase that has to sit inside a sentence, while a зүйр цэцэн үг is a complete folk saying that states a piece of wisdom on its own."
  },
  "ms": {
    "idiomTerm": "simpulan bahasa",
    "proverbTerm": "peribahasa",
    "termNote": "Malay calls a short fixed figurative phrase a simpulan bahasa, usually just two words. Peribahasa is the umbrella term for traditional sayings and also covers the longer forms such as pepatah, bidalan and perumpamaan."
  },
  "nl": {
    "idiomTerm": "uitdrukking",
    "proverbTerm": "spreekwoord",
    "termNote": "An uitdrukking (also called a gezegde) is a fixed figurative phrase you fit into your own sentence, while a spreekwoord is a complete stand-alone sentence carrying a piece of folk wisdom."
  },
  "no": {
    "idiomTerm": "talemåte",
    "proverbTerm": "ordtak",
    "termNote": "A talemåte is a fixed figurative phrase you slot into your own sentence, while an ordtak is a complete saying that stands on its own and states a piece of folk wisdom."
  },
  "pl": {
    "idiomTerm": "związek frazeologiczny",
    "proverbTerm": "przysłowie",
    "termNote": "In Polish a fixed figurative phrase is a związek frazeologiczny (in everyday speech people just say powiedzenie), while a przysłowie is a complete sentence that states a piece of folk wisdom."
  },
  "ro": {
    "idiomTerm": "expresie idiomatică",
    "proverbTerm": "proverb",
    "termNote": "An expresie idiomatică is a fixed phrase whose meaning cannot be worked out from its words, while a proverb is a complete sentence that passes on folk wisdom (a shorter, more casual saying is called a zicală)."
  },
  "sk": {
    "idiomTerm": "frazeologizmus",
    "proverbTerm": "príslovie",
    "termNote": "A frazeologizmus is a fixed figurative phrase that you build into a sentence, while a príslovie is a complete saying that states a piece of folk wisdom on its own."
  },
  "sl": {
    "idiomTerm": "frazem",
    "proverbTerm": "pregovor",
    "termNote": "A frazem is a fixed multi-word expression whose meaning cannot be worked out from the individual words, while a pregovor is a complete sentence that states a piece of folk wisdom."
  },
  "sq": {
    "idiomTerm": "shprehje frazeologjike",
    "proverbTerm": "fjalë e urtë",
    "termNote": "A shprehje frazeologjike (also called an idiomë) is a fixed phrase whose meaning cannot be worked out from its separate words, while a fjalë e urtë is a complete sentence that passes on folk wisdom."
  },
  "sr": {
    "idiomTerm": "frazeologizam",
    "proverbTerm": "poslovica",
    "termNote": "A frazeologizam (in everyday speech people often just say izraz) is a fixed phrase whose meaning cannot be worked out from its separate words, while a poslovica is a complete sentence that passes on a piece of folk wisdom."
  },
  "sv": {
    "idiomTerm": "talesätt",
    "proverbTerm": "ordspråk",
    "termNote": "Swedes say talesätt (or uttryck) for a fixed figurative phrase that you slot into a sentence, with idiom as the technical linguistic term, while an ordspråk is a proverb, a complete standalone sentence carrying a piece of folk wisdom."
  },
  "sw": {
    "idiomTerm": "nahau",
    "proverbTerm": "methali",
    "termNote": "A nahau is a fixed expression whose meaning is not the sum of its words, while a methali is a complete proverb that states a piece of wisdom or advice."
  },
  "tl": {
    "idiomTerm": "sawikain",
    "proverbTerm": "salawikain",
    "termNote": "A sawikain (also called idyoma) is a fixed expression whose meaning cannot be guessed from the separate words, while a salawikain is a traditional saying that carries advice or a moral lesson."
  },
  "tr": {
    "idiomTerm": "deyim",
    "proverbTerm": "atasözü",
    "termNote": "A deyim is a fixed figurative phrase that you build into a sentence, while an atasözü is a complete traditional saying that states a piece of folk wisdom on its own."
  },
  "uk": {
    "idiomTerm": "фразеологізм",
    "proverbTerm": "прислів'я",
    "termNote": "In Ukrainian a fixed figurative phrase is a фразеологізм (in everyday speech people also say сталий вислів), while a прислів'я is a complete sentence carrying folk wisdom, and its shorter, unfinished cousin is a приказка."
  },
  "uz": {
    "idiomTerm": "ibora",
    "proverbTerm": "maqol",
    "termNote": "An ibora is a fixed expression whose meaning cannot be worked out from its separate words, while a maqol is a complete proverb that states a piece of folk wisdom."
  },
  "vi": {
    "idiomTerm": "thành ngữ",
    "proverbTerm": "tục ngữ",
    "termNote": "In Vietnamese a thành ngữ is a fixed figurative phrase that slots into a sentence like a single word, while a tục ngữ is a complete sentence that states a piece of folk wisdom or advice."
  },
  "zu": {
    "idiomTerm": "isisho",
    "proverbTerm": "isaga",
    "termNote": "A fixed figurative phrase is an isisho (plural izisho), and it bends with tense and number like any other verb phrase. An isaga (plural izaga) is a full proverb that carries traditional wisdom in a sentence that does not change. Zulu speakers keep the two labels apart even though both turn up in the same conversation."
  },
  "en": {
    "idiomTerm": "idiom",
    "proverbTerm": "proverb",
    "termNote": "An idiom is a fixed figurative phrase that you fit into a sentence of your own, while a proverb is a complete sentence that states a piece of traditional wisdom."
  },
  "es": {
    "idiomTerm": "modismo",
    "proverbTerm": "refrán",
    "termNote": "A modismo (also called a frase hecha) is a fixed expression that slots into a sentence, while a refrán is a complete saying, often rhymed, that passes on traditional advice."
  },
  "fr": {
    "idiomTerm": "expression idiomatique",
    "proverbTerm": "proverbe",
    "termNote": "Une expression idiomatique (often shortened to expression) is a figurative phrase you fit into your own sentence, while a proverbe is a complete sentence that states a piece of traditional wisdom."
  },
  "de": {
    "idiomTerm": "Redewendung",
    "proverbTerm": "Sprichwort",
    "termNote": "A Redewendung is a fixed figurative phrase that you build into your own sentence, while a Sprichwort is a complete sentence that states a piece of folk wisdom."
  },
  "it": {
    "idiomTerm": "modo di dire",
    "proverbTerm": "proverbio",
    "termNote": "A modo di dire (also called an espressione idiomatica) is a fixed figurative phrase you fit into your own sentence, while a proverbio is a complete saying that states a piece of folk wisdom."
  },
  "pt": {
    "idiomTerm": "expressão idiomática",
    "proverbTerm": "provérbio",
    "termNote": "An expressão idiomática is a fixed phrase whose meaning cannot be worked out from its words and that slots into a sentence, while a provérbio (also called a ditado popular) is a complete saying that states a piece of folk wisdom."
  },
  "ru": {
    "idiomTerm": "идиома",
    "proverbTerm": "пословица",
    "termNote": "Russians call a fixed expression an идиома (in school grammar more often фразеологизм), while a пословица is a complete sentence carrying folk wisdom, such as advice or a moral."
  }
};

export const IDIOM_LANGS: string[] = Object.keys(idioms);
