// Verb conjugation tables for major languages: common verbs with their key tenses, all persons.
// Source: workflow generation + independent verification pass. Real data only.

export interface ConjForm {
  person: string;
  form: string;
}
export interface ConjTense {
  name: string;
  forms: ConjForm[];
}
export interface Verb {
  verb: string;
  english: string;
  note?: string;
  tenses: ConjTense[];
}

export const conjugations: Record<string, Verb[]> = {
  "es": [
    {
      "verb": "hablar",
      "english": "to speak",
      "note": "regular -ar",
      "tenses": [
        {
          "name": "Present",
          "forms": [
            {
              "person": "yo",
              "form": "hablo"
            },
            {
              "person": "tú",
              "form": "hablas"
            },
            {
              "person": "él/ella/usted",
              "form": "habla"
            },
            {
              "person": "nosotros",
              "form": "hablamos"
            },
            {
              "person": "vosotros",
              "form": "habláis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "hablan"
            }
          ]
        },
        {
          "name": "Preterite",
          "forms": [
            {
              "person": "yo",
              "form": "hablé"
            },
            {
              "person": "tú",
              "form": "hablaste"
            },
            {
              "person": "él/ella/usted",
              "form": "habló"
            },
            {
              "person": "nosotros",
              "form": "hablamos"
            },
            {
              "person": "vosotros",
              "form": "hablasteis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "hablaron"
            }
          ]
        },
        {
          "name": "Future",
          "forms": [
            {
              "person": "yo",
              "form": "hablaré"
            },
            {
              "person": "tú",
              "form": "hablarás"
            },
            {
              "person": "él/ella/usted",
              "form": "hablará"
            },
            {
              "person": "nosotros",
              "form": "hablaremos"
            },
            {
              "person": "vosotros",
              "form": "hablaréis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "hablarán"
            }
          ]
        }
      ]
    },
    {
      "verb": "comer",
      "english": "to eat",
      "note": "regular -er",
      "tenses": [
        {
          "name": "Present",
          "forms": [
            {
              "person": "yo",
              "form": "como"
            },
            {
              "person": "tú",
              "form": "comes"
            },
            {
              "person": "él/ella/usted",
              "form": "come"
            },
            {
              "person": "nosotros",
              "form": "comemos"
            },
            {
              "person": "vosotros",
              "form": "coméis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "comen"
            }
          ]
        },
        {
          "name": "Preterite",
          "forms": [
            {
              "person": "yo",
              "form": "comí"
            },
            {
              "person": "tú",
              "form": "comiste"
            },
            {
              "person": "él/ella/usted",
              "form": "comió"
            },
            {
              "person": "nosotros",
              "form": "comimos"
            },
            {
              "person": "vosotros",
              "form": "comisteis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "comieron"
            }
          ]
        },
        {
          "name": "Future",
          "forms": [
            {
              "person": "yo",
              "form": "comeré"
            },
            {
              "person": "tú",
              "form": "comerás"
            },
            {
              "person": "él/ella/usted",
              "form": "comerá"
            },
            {
              "person": "nosotros",
              "form": "comeremos"
            },
            {
              "person": "vosotros",
              "form": "comeréis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "comerán"
            }
          ]
        }
      ]
    },
    {
      "verb": "vivir",
      "english": "to live",
      "note": "regular -ir",
      "tenses": [
        {
          "name": "Present",
          "forms": [
            {
              "person": "yo",
              "form": "vivo"
            },
            {
              "person": "tú",
              "form": "vives"
            },
            {
              "person": "él/ella/usted",
              "form": "vive"
            },
            {
              "person": "nosotros",
              "form": "vivimos"
            },
            {
              "person": "vosotros",
              "form": "vivís"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "viven"
            }
          ]
        },
        {
          "name": "Preterite",
          "forms": [
            {
              "person": "yo",
              "form": "viví"
            },
            {
              "person": "tú",
              "form": "viviste"
            },
            {
              "person": "él/ella/usted",
              "form": "vivió"
            },
            {
              "person": "nosotros",
              "form": "vivimos"
            },
            {
              "person": "vosotros",
              "form": "vivisteis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "vivieron"
            }
          ]
        },
        {
          "name": "Future",
          "forms": [
            {
              "person": "yo",
              "form": "viviré"
            },
            {
              "person": "tú",
              "form": "vivirás"
            },
            {
              "person": "él/ella/usted",
              "form": "vivirá"
            },
            {
              "person": "nosotros",
              "form": "viviremos"
            },
            {
              "person": "vosotros",
              "form": "viviréis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "vivirán"
            }
          ]
        }
      ]
    },
    {
      "verb": "ser",
      "english": "to be",
      "note": "irregular (permanent)",
      "tenses": [
        {
          "name": "Present",
          "forms": [
            {
              "person": "yo",
              "form": "soy"
            },
            {
              "person": "tú",
              "form": "eres"
            },
            {
              "person": "él/ella/usted",
              "form": "es"
            },
            {
              "person": "nosotros",
              "form": "somos"
            },
            {
              "person": "vosotros",
              "form": "sois"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "son"
            }
          ]
        },
        {
          "name": "Preterite",
          "forms": [
            {
              "person": "yo",
              "form": "fui"
            },
            {
              "person": "tú",
              "form": "fuiste"
            },
            {
              "person": "él/ella/usted",
              "form": "fue"
            },
            {
              "person": "nosotros",
              "form": "fuimos"
            },
            {
              "person": "vosotros",
              "form": "fuisteis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "fueron"
            }
          ]
        },
        {
          "name": "Future",
          "forms": [
            {
              "person": "yo",
              "form": "seré"
            },
            {
              "person": "tú",
              "form": "serás"
            },
            {
              "person": "él/ella/usted",
              "form": "será"
            },
            {
              "person": "nosotros",
              "form": "seremos"
            },
            {
              "person": "vosotros",
              "form": "seréis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "serán"
            }
          ]
        }
      ]
    },
    {
      "verb": "estar",
      "english": "to be",
      "note": "irregular (state/location)",
      "tenses": [
        {
          "name": "Present",
          "forms": [
            {
              "person": "yo",
              "form": "estoy"
            },
            {
              "person": "tú",
              "form": "estás"
            },
            {
              "person": "él/ella/usted",
              "form": "está"
            },
            {
              "person": "nosotros",
              "form": "estamos"
            },
            {
              "person": "vosotros",
              "form": "estáis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "están"
            }
          ]
        },
        {
          "name": "Preterite",
          "forms": [
            {
              "person": "yo",
              "form": "estuve"
            },
            {
              "person": "tú",
              "form": "estuviste"
            },
            {
              "person": "él/ella/usted",
              "form": "estuvo"
            },
            {
              "person": "nosotros",
              "form": "estuvimos"
            },
            {
              "person": "vosotros",
              "form": "estuvisteis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "estuvieron"
            }
          ]
        },
        {
          "name": "Future",
          "forms": [
            {
              "person": "yo",
              "form": "estaré"
            },
            {
              "person": "tú",
              "form": "estarás"
            },
            {
              "person": "él/ella/usted",
              "form": "estará"
            },
            {
              "person": "nosotros",
              "form": "estaremos"
            },
            {
              "person": "vosotros",
              "form": "estaréis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "estarán"
            }
          ]
        }
      ]
    },
    {
      "verb": "tener",
      "english": "to have",
      "note": "irregular",
      "tenses": [
        {
          "name": "Present",
          "forms": [
            {
              "person": "yo",
              "form": "tengo"
            },
            {
              "person": "tú",
              "form": "tienes"
            },
            {
              "person": "él/ella/usted",
              "form": "tiene"
            },
            {
              "person": "nosotros",
              "form": "tenemos"
            },
            {
              "person": "vosotros",
              "form": "tenéis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "tienen"
            }
          ]
        },
        {
          "name": "Preterite",
          "forms": [
            {
              "person": "yo",
              "form": "tuve"
            },
            {
              "person": "tú",
              "form": "tuviste"
            },
            {
              "person": "él/ella/usted",
              "form": "tuvo"
            },
            {
              "person": "nosotros",
              "form": "tuvimos"
            },
            {
              "person": "vosotros",
              "form": "tuvisteis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "tuvieron"
            }
          ]
        },
        {
          "name": "Future",
          "forms": [
            {
              "person": "yo",
              "form": "tendré"
            },
            {
              "person": "tú",
              "form": "tendrás"
            },
            {
              "person": "él/ella/usted",
              "form": "tendrá"
            },
            {
              "person": "nosotros",
              "form": "tendremos"
            },
            {
              "person": "vosotros",
              "form": "tendréis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "tendrán"
            }
          ]
        }
      ]
    },
    {
      "verb": "hacer",
      "english": "to do, to make",
      "note": "irregular",
      "tenses": [
        {
          "name": "Present",
          "forms": [
            {
              "person": "yo",
              "form": "hago"
            },
            {
              "person": "tú",
              "form": "haces"
            },
            {
              "person": "él/ella/usted",
              "form": "hace"
            },
            {
              "person": "nosotros",
              "form": "hacemos"
            },
            {
              "person": "vosotros",
              "form": "hacéis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "hacen"
            }
          ]
        },
        {
          "name": "Preterite",
          "forms": [
            {
              "person": "yo",
              "form": "hice"
            },
            {
              "person": "tú",
              "form": "hiciste"
            },
            {
              "person": "él/ella/usted",
              "form": "hizo"
            },
            {
              "person": "nosotros",
              "form": "hicimos"
            },
            {
              "person": "vosotros",
              "form": "hicisteis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "hicieron"
            }
          ]
        },
        {
          "name": "Future",
          "forms": [
            {
              "person": "yo",
              "form": "haré"
            },
            {
              "person": "tú",
              "form": "harás"
            },
            {
              "person": "él/ella/usted",
              "form": "hará"
            },
            {
              "person": "nosotros",
              "form": "haremos"
            },
            {
              "person": "vosotros",
              "form": "haréis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "harán"
            }
          ]
        }
      ]
    },
    {
      "verb": "ir",
      "english": "to go",
      "note": "irregular",
      "tenses": [
        {
          "name": "Present",
          "forms": [
            {
              "person": "yo",
              "form": "voy"
            },
            {
              "person": "tú",
              "form": "vas"
            },
            {
              "person": "él/ella/usted",
              "form": "va"
            },
            {
              "person": "nosotros",
              "form": "vamos"
            },
            {
              "person": "vosotros",
              "form": "vais"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "van"
            }
          ]
        },
        {
          "name": "Preterite",
          "forms": [
            {
              "person": "yo",
              "form": "fui"
            },
            {
              "person": "tú",
              "form": "fuiste"
            },
            {
              "person": "él/ella/usted",
              "form": "fue"
            },
            {
              "person": "nosotros",
              "form": "fuimos"
            },
            {
              "person": "vosotros",
              "form": "fuisteis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "fueron"
            }
          ]
        },
        {
          "name": "Future",
          "forms": [
            {
              "person": "yo",
              "form": "iré"
            },
            {
              "person": "tú",
              "form": "irás"
            },
            {
              "person": "él/ella/usted",
              "form": "irá"
            },
            {
              "person": "nosotros",
              "form": "iremos"
            },
            {
              "person": "vosotros",
              "form": "iréis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "irán"
            }
          ]
        }
      ]
    },
    {
      "verb": "poder",
      "english": "to be able, can",
      "note": "irregular (stem-changing)",
      "tenses": [
        {
          "name": "Present",
          "forms": [
            {
              "person": "yo",
              "form": "puedo"
            },
            {
              "person": "tú",
              "form": "puedes"
            },
            {
              "person": "él/ella/usted",
              "form": "puede"
            },
            {
              "person": "nosotros",
              "form": "podemos"
            },
            {
              "person": "vosotros",
              "form": "podéis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "pueden"
            }
          ]
        },
        {
          "name": "Preterite",
          "forms": [
            {
              "person": "yo",
              "form": "pude"
            },
            {
              "person": "tú",
              "form": "pudiste"
            },
            {
              "person": "él/ella/usted",
              "form": "pudo"
            },
            {
              "person": "nosotros",
              "form": "pudimos"
            },
            {
              "person": "vosotros",
              "form": "pudisteis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "pudieron"
            }
          ]
        },
        {
          "name": "Future",
          "forms": [
            {
              "person": "yo",
              "form": "podré"
            },
            {
              "person": "tú",
              "form": "podrás"
            },
            {
              "person": "él/ella/usted",
              "form": "podrá"
            },
            {
              "person": "nosotros",
              "form": "podremos"
            },
            {
              "person": "vosotros",
              "form": "podréis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "podrán"
            }
          ]
        }
      ]
    },
    {
      "verb": "querer",
      "english": "to want",
      "note": "irregular (stem-changing)",
      "tenses": [
        {
          "name": "Present",
          "forms": [
            {
              "person": "yo",
              "form": "quiero"
            },
            {
              "person": "tú",
              "form": "quieres"
            },
            {
              "person": "él/ella/usted",
              "form": "quiere"
            },
            {
              "person": "nosotros",
              "form": "queremos"
            },
            {
              "person": "vosotros",
              "form": "queréis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "quieren"
            }
          ]
        },
        {
          "name": "Preterite",
          "forms": [
            {
              "person": "yo",
              "form": "quise"
            },
            {
              "person": "tú",
              "form": "quisiste"
            },
            {
              "person": "él/ella/usted",
              "form": "quiso"
            },
            {
              "person": "nosotros",
              "form": "quisimos"
            },
            {
              "person": "vosotros",
              "form": "quisisteis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "quisieron"
            }
          ]
        },
        {
          "name": "Future",
          "forms": [
            {
              "person": "yo",
              "form": "querré"
            },
            {
              "person": "tú",
              "form": "querrás"
            },
            {
              "person": "él/ella/usted",
              "form": "querrá"
            },
            {
              "person": "nosotros",
              "form": "querremos"
            },
            {
              "person": "vosotros",
              "form": "querréis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "querrán"
            }
          ]
        }
      ]
    },
    {
      "verb": "decir",
      "english": "to say, to tell",
      "note": "irregular",
      "tenses": [
        {
          "name": "Present",
          "forms": [
            {
              "person": "yo",
              "form": "digo"
            },
            {
              "person": "tú",
              "form": "dices"
            },
            {
              "person": "él/ella/usted",
              "form": "dice"
            },
            {
              "person": "nosotros",
              "form": "decimos"
            },
            {
              "person": "vosotros",
              "form": "decís"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "dicen"
            }
          ]
        },
        {
          "name": "Preterite",
          "forms": [
            {
              "person": "yo",
              "form": "dije"
            },
            {
              "person": "tú",
              "form": "dijiste"
            },
            {
              "person": "él/ella/usted",
              "form": "dijo"
            },
            {
              "person": "nosotros",
              "form": "dijimos"
            },
            {
              "person": "vosotros",
              "form": "dijisteis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "dijeron"
            }
          ]
        },
        {
          "name": "Future",
          "forms": [
            {
              "person": "yo",
              "form": "diré"
            },
            {
              "person": "tú",
              "form": "dirás"
            },
            {
              "person": "él/ella/usted",
              "form": "dirá"
            },
            {
              "person": "nosotros",
              "form": "diremos"
            },
            {
              "person": "vosotros",
              "form": "diréis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "dirán"
            }
          ]
        }
      ]
    },
    {
      "verb": "ver",
      "english": "to see",
      "note": "irregular",
      "tenses": [
        {
          "name": "Present",
          "forms": [
            {
              "person": "yo",
              "form": "veo"
            },
            {
              "person": "tú",
              "form": "ves"
            },
            {
              "person": "él/ella/usted",
              "form": "ve"
            },
            {
              "person": "nosotros",
              "form": "vemos"
            },
            {
              "person": "vosotros",
              "form": "veis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "ven"
            }
          ]
        },
        {
          "name": "Preterite",
          "forms": [
            {
              "person": "yo",
              "form": "vi"
            },
            {
              "person": "tú",
              "form": "viste"
            },
            {
              "person": "él/ella/usted",
              "form": "vio"
            },
            {
              "person": "nosotros",
              "form": "vimos"
            },
            {
              "person": "vosotros",
              "form": "visteis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "vieron"
            }
          ]
        },
        {
          "name": "Future",
          "forms": [
            {
              "person": "yo",
              "form": "veré"
            },
            {
              "person": "tú",
              "form": "verás"
            },
            {
              "person": "él/ella/usted",
              "form": "verá"
            },
            {
              "person": "nosotros",
              "form": "veremos"
            },
            {
              "person": "vosotros",
              "form": "veréis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "verán"
            }
          ]
        }
      ]
    },
    {
      "verb": "dar",
      "english": "to give",
      "note": "irregular",
      "tenses": [
        {
          "name": "Present",
          "forms": [
            {
              "person": "yo",
              "form": "doy"
            },
            {
              "person": "tú",
              "form": "das"
            },
            {
              "person": "él/ella/usted",
              "form": "da"
            },
            {
              "person": "nosotros",
              "form": "damos"
            },
            {
              "person": "vosotros",
              "form": "dais"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "dan"
            }
          ]
        },
        {
          "name": "Preterite",
          "forms": [
            {
              "person": "yo",
              "form": "di"
            },
            {
              "person": "tú",
              "form": "diste"
            },
            {
              "person": "él/ella/usted",
              "form": "dio"
            },
            {
              "person": "nosotros",
              "form": "dimos"
            },
            {
              "person": "vosotros",
              "form": "disteis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "dieron"
            }
          ]
        },
        {
          "name": "Future",
          "forms": [
            {
              "person": "yo",
              "form": "daré"
            },
            {
              "person": "tú",
              "form": "darás"
            },
            {
              "person": "él/ella/usted",
              "form": "dará"
            },
            {
              "person": "nosotros",
              "form": "daremos"
            },
            {
              "person": "vosotros",
              "form": "daréis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "darán"
            }
          ]
        }
      ]
    },
    {
      "verb": "saber",
      "english": "to know",
      "note": "irregular",
      "tenses": [
        {
          "name": "Present",
          "forms": [
            {
              "person": "yo",
              "form": "sé"
            },
            {
              "person": "tú",
              "form": "sabes"
            },
            {
              "person": "él/ella/usted",
              "form": "sabe"
            },
            {
              "person": "nosotros",
              "form": "sabemos"
            },
            {
              "person": "vosotros",
              "form": "sabéis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "saben"
            }
          ]
        },
        {
          "name": "Preterite",
          "forms": [
            {
              "person": "yo",
              "form": "supe"
            },
            {
              "person": "tú",
              "form": "supiste"
            },
            {
              "person": "él/ella/usted",
              "form": "supo"
            },
            {
              "person": "nosotros",
              "form": "supimos"
            },
            {
              "person": "vosotros",
              "form": "supisteis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "supieron"
            }
          ]
        },
        {
          "name": "Future",
          "forms": [
            {
              "person": "yo",
              "form": "sabré"
            },
            {
              "person": "tú",
              "form": "sabrás"
            },
            {
              "person": "él/ella/usted",
              "form": "sabrá"
            },
            {
              "person": "nosotros",
              "form": "sabremos"
            },
            {
              "person": "vosotros",
              "form": "sabréis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "sabrán"
            }
          ]
        }
      ]
    },
    {
      "verb": "poner",
      "english": "to put",
      "note": "irregular",
      "tenses": [
        {
          "name": "Present",
          "forms": [
            {
              "person": "yo",
              "form": "pongo"
            },
            {
              "person": "tú",
              "form": "pones"
            },
            {
              "person": "él/ella/usted",
              "form": "pone"
            },
            {
              "person": "nosotros",
              "form": "ponemos"
            },
            {
              "person": "vosotros",
              "form": "ponéis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "ponen"
            }
          ]
        },
        {
          "name": "Preterite",
          "forms": [
            {
              "person": "yo",
              "form": "puse"
            },
            {
              "person": "tú",
              "form": "pusiste"
            },
            {
              "person": "él/ella/usted",
              "form": "puso"
            },
            {
              "person": "nosotros",
              "form": "pusimos"
            },
            {
              "person": "vosotros",
              "form": "pusisteis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "pusieron"
            }
          ]
        },
        {
          "name": "Future",
          "forms": [
            {
              "person": "yo",
              "form": "pondré"
            },
            {
              "person": "tú",
              "form": "pondrás"
            },
            {
              "person": "él/ella/usted",
              "form": "pondrá"
            },
            {
              "person": "nosotros",
              "form": "pondremos"
            },
            {
              "person": "vosotros",
              "form": "pondréis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "pondrán"
            }
          ]
        }
      ]
    },
    {
      "verb": "venir",
      "english": "to come",
      "note": "irregular",
      "tenses": [
        {
          "name": "Present",
          "forms": [
            {
              "person": "yo",
              "form": "vengo"
            },
            {
              "person": "tú",
              "form": "vienes"
            },
            {
              "person": "él/ella/usted",
              "form": "viene"
            },
            {
              "person": "nosotros",
              "form": "venimos"
            },
            {
              "person": "vosotros",
              "form": "venís"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "vienen"
            }
          ]
        },
        {
          "name": "Preterite",
          "forms": [
            {
              "person": "yo",
              "form": "vine"
            },
            {
              "person": "tú",
              "form": "viniste"
            },
            {
              "person": "él/ella/usted",
              "form": "vino"
            },
            {
              "person": "nosotros",
              "form": "vinimos"
            },
            {
              "person": "vosotros",
              "form": "vinisteis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "vinieron"
            }
          ]
        },
        {
          "name": "Future",
          "forms": [
            {
              "person": "yo",
              "form": "vendré"
            },
            {
              "person": "tú",
              "form": "vendrás"
            },
            {
              "person": "él/ella/usted",
              "form": "vendrá"
            },
            {
              "person": "nosotros",
              "form": "vendremos"
            },
            {
              "person": "vosotros",
              "form": "vendréis"
            },
            {
              "person": "ellos/ellas/ustedes",
              "form": "vendrán"
            }
          ]
        }
      ]
    }
  ],
  "fr": [
    {
      "verb": "parler",
      "english": "to speak",
      "note": "regular -er",
      "tenses": [
        {
          "name": "Présent",
          "forms": [
            {
              "person": "je",
              "form": "parle"
            },
            {
              "person": "tu",
              "form": "parles"
            },
            {
              "person": "il/elle",
              "form": "parle"
            },
            {
              "person": "nous",
              "form": "parlons"
            },
            {
              "person": "vous",
              "form": "parlez"
            },
            {
              "person": "ils/elles",
              "form": "parlent"
            }
          ]
        },
        {
          "name": "Passé composé",
          "forms": [
            {
              "person": "je",
              "form": "ai parlé"
            },
            {
              "person": "tu",
              "form": "as parlé"
            },
            {
              "person": "il/elle",
              "form": "a parlé"
            },
            {
              "person": "nous",
              "form": "avons parlé"
            },
            {
              "person": "vous",
              "form": "avez parlé"
            },
            {
              "person": "ils/elles",
              "form": "ont parlé"
            }
          ]
        },
        {
          "name": "Futur simple",
          "forms": [
            {
              "person": "je",
              "form": "parlerai"
            },
            {
              "person": "tu",
              "form": "parleras"
            },
            {
              "person": "il/elle",
              "form": "parlera"
            },
            {
              "person": "nous",
              "form": "parlerons"
            },
            {
              "person": "vous",
              "form": "parlerez"
            },
            {
              "person": "ils/elles",
              "form": "parleront"
            }
          ]
        }
      ]
    },
    {
      "verb": "finir",
      "english": "to finish",
      "note": "regular -ir",
      "tenses": [
        {
          "name": "Présent",
          "forms": [
            {
              "person": "je",
              "form": "finis"
            },
            {
              "person": "tu",
              "form": "finis"
            },
            {
              "person": "il/elle",
              "form": "finit"
            },
            {
              "person": "nous",
              "form": "finissons"
            },
            {
              "person": "vous",
              "form": "finissez"
            },
            {
              "person": "ils/elles",
              "form": "finissent"
            }
          ]
        },
        {
          "name": "Passé composé",
          "forms": [
            {
              "person": "je",
              "form": "ai fini"
            },
            {
              "person": "tu",
              "form": "as fini"
            },
            {
              "person": "il/elle",
              "form": "a fini"
            },
            {
              "person": "nous",
              "form": "avons fini"
            },
            {
              "person": "vous",
              "form": "avez fini"
            },
            {
              "person": "ils/elles",
              "form": "ont fini"
            }
          ]
        },
        {
          "name": "Futur simple",
          "forms": [
            {
              "person": "je",
              "form": "finirai"
            },
            {
              "person": "tu",
              "form": "finiras"
            },
            {
              "person": "il/elle",
              "form": "finira"
            },
            {
              "person": "nous",
              "form": "finirons"
            },
            {
              "person": "vous",
              "form": "finirez"
            },
            {
              "person": "ils/elles",
              "form": "finiront"
            }
          ]
        }
      ]
    },
    {
      "verb": "vendre",
      "english": "to sell",
      "note": "regular -re",
      "tenses": [
        {
          "name": "Présent",
          "forms": [
            {
              "person": "je",
              "form": "vends"
            },
            {
              "person": "tu",
              "form": "vends"
            },
            {
              "person": "il/elle",
              "form": "vend"
            },
            {
              "person": "nous",
              "form": "vendons"
            },
            {
              "person": "vous",
              "form": "vendez"
            },
            {
              "person": "ils/elles",
              "form": "vendent"
            }
          ]
        },
        {
          "name": "Passé composé",
          "forms": [
            {
              "person": "je",
              "form": "ai vendu"
            },
            {
              "person": "tu",
              "form": "as vendu"
            },
            {
              "person": "il/elle",
              "form": "a vendu"
            },
            {
              "person": "nous",
              "form": "avons vendu"
            },
            {
              "person": "vous",
              "form": "avez vendu"
            },
            {
              "person": "ils/elles",
              "form": "ont vendu"
            }
          ]
        },
        {
          "name": "Futur simple",
          "forms": [
            {
              "person": "je",
              "form": "vendrai"
            },
            {
              "person": "tu",
              "form": "vendras"
            },
            {
              "person": "il/elle",
              "form": "vendra"
            },
            {
              "person": "nous",
              "form": "vendrons"
            },
            {
              "person": "vous",
              "form": "vendrez"
            },
            {
              "person": "ils/elles",
              "form": "vendront"
            }
          ]
        }
      ]
    },
    {
      "verb": "être",
      "english": "to be",
      "note": "irregular",
      "tenses": [
        {
          "name": "Présent",
          "forms": [
            {
              "person": "je",
              "form": "suis"
            },
            {
              "person": "tu",
              "form": "es"
            },
            {
              "person": "il/elle",
              "form": "est"
            },
            {
              "person": "nous",
              "form": "sommes"
            },
            {
              "person": "vous",
              "form": "êtes"
            },
            {
              "person": "ils/elles",
              "form": "sont"
            }
          ]
        },
        {
          "name": "Passé composé",
          "forms": [
            {
              "person": "je",
              "form": "ai été"
            },
            {
              "person": "tu",
              "form": "as été"
            },
            {
              "person": "il/elle",
              "form": "a été"
            },
            {
              "person": "nous",
              "form": "avons été"
            },
            {
              "person": "vous",
              "form": "avez été"
            },
            {
              "person": "ils/elles",
              "form": "ont été"
            }
          ]
        },
        {
          "name": "Futur simple",
          "forms": [
            {
              "person": "je",
              "form": "serai"
            },
            {
              "person": "tu",
              "form": "seras"
            },
            {
              "person": "il/elle",
              "form": "sera"
            },
            {
              "person": "nous",
              "form": "serons"
            },
            {
              "person": "vous",
              "form": "serez"
            },
            {
              "person": "ils/elles",
              "form": "seront"
            }
          ]
        }
      ]
    },
    {
      "verb": "avoir",
      "english": "to have",
      "note": "irregular",
      "tenses": [
        {
          "name": "Présent",
          "forms": [
            {
              "person": "je",
              "form": "ai"
            },
            {
              "person": "tu",
              "form": "as"
            },
            {
              "person": "il/elle",
              "form": "a"
            },
            {
              "person": "nous",
              "form": "avons"
            },
            {
              "person": "vous",
              "form": "avez"
            },
            {
              "person": "ils/elles",
              "form": "ont"
            }
          ]
        },
        {
          "name": "Passé composé",
          "forms": [
            {
              "person": "je",
              "form": "ai eu"
            },
            {
              "person": "tu",
              "form": "as eu"
            },
            {
              "person": "il/elle",
              "form": "a eu"
            },
            {
              "person": "nous",
              "form": "avons eu"
            },
            {
              "person": "vous",
              "form": "avez eu"
            },
            {
              "person": "ils/elles",
              "form": "ont eu"
            }
          ]
        },
        {
          "name": "Futur simple",
          "forms": [
            {
              "person": "je",
              "form": "aurai"
            },
            {
              "person": "tu",
              "form": "auras"
            },
            {
              "person": "il/elle",
              "form": "aura"
            },
            {
              "person": "nous",
              "form": "aurons"
            },
            {
              "person": "vous",
              "form": "aurez"
            },
            {
              "person": "ils/elles",
              "form": "auront"
            }
          ]
        }
      ]
    },
    {
      "verb": "aller",
      "english": "to go",
      "note": "irregular; être auxiliary (participle agrees, masc. shown)",
      "tenses": [
        {
          "name": "Présent",
          "forms": [
            {
              "person": "je",
              "form": "vais"
            },
            {
              "person": "tu",
              "form": "vas"
            },
            {
              "person": "il/elle",
              "form": "va"
            },
            {
              "person": "nous",
              "form": "allons"
            },
            {
              "person": "vous",
              "form": "allez"
            },
            {
              "person": "ils/elles",
              "form": "vont"
            }
          ]
        },
        {
          "name": "Passé composé",
          "forms": [
            {
              "person": "je",
              "form": "suis allé"
            },
            {
              "person": "tu",
              "form": "es allé"
            },
            {
              "person": "il/elle",
              "form": "est allé"
            },
            {
              "person": "nous",
              "form": "sommes allés"
            },
            {
              "person": "vous",
              "form": "êtes allés"
            },
            {
              "person": "ils/elles",
              "form": "sont allés"
            }
          ]
        },
        {
          "name": "Futur simple",
          "forms": [
            {
              "person": "je",
              "form": "irai"
            },
            {
              "person": "tu",
              "form": "iras"
            },
            {
              "person": "il/elle",
              "form": "ira"
            },
            {
              "person": "nous",
              "form": "irons"
            },
            {
              "person": "vous",
              "form": "irez"
            },
            {
              "person": "ils/elles",
              "form": "iront"
            }
          ]
        }
      ]
    },
    {
      "verb": "faire",
      "english": "to do, to make",
      "note": "irregular",
      "tenses": [
        {
          "name": "Présent",
          "forms": [
            {
              "person": "je",
              "form": "fais"
            },
            {
              "person": "tu",
              "form": "fais"
            },
            {
              "person": "il/elle",
              "form": "fait"
            },
            {
              "person": "nous",
              "form": "faisons"
            },
            {
              "person": "vous",
              "form": "faites"
            },
            {
              "person": "ils/elles",
              "form": "font"
            }
          ]
        },
        {
          "name": "Passé composé",
          "forms": [
            {
              "person": "je",
              "form": "ai fait"
            },
            {
              "person": "tu",
              "form": "as fait"
            },
            {
              "person": "il/elle",
              "form": "a fait"
            },
            {
              "person": "nous",
              "form": "avons fait"
            },
            {
              "person": "vous",
              "form": "avez fait"
            },
            {
              "person": "ils/elles",
              "form": "ont fait"
            }
          ]
        },
        {
          "name": "Futur simple",
          "forms": [
            {
              "person": "je",
              "form": "ferai"
            },
            {
              "person": "tu",
              "form": "feras"
            },
            {
              "person": "il/elle",
              "form": "fera"
            },
            {
              "person": "nous",
              "form": "ferons"
            },
            {
              "person": "vous",
              "form": "ferez"
            },
            {
              "person": "ils/elles",
              "form": "feront"
            }
          ]
        }
      ]
    },
    {
      "verb": "dire",
      "english": "to say",
      "note": "irregular",
      "tenses": [
        {
          "name": "Présent",
          "forms": [
            {
              "person": "je",
              "form": "dis"
            },
            {
              "person": "tu",
              "form": "dis"
            },
            {
              "person": "il/elle",
              "form": "dit"
            },
            {
              "person": "nous",
              "form": "disons"
            },
            {
              "person": "vous",
              "form": "dites"
            },
            {
              "person": "ils/elles",
              "form": "disent"
            }
          ]
        },
        {
          "name": "Passé composé",
          "forms": [
            {
              "person": "je",
              "form": "ai dit"
            },
            {
              "person": "tu",
              "form": "as dit"
            },
            {
              "person": "il/elle",
              "form": "a dit"
            },
            {
              "person": "nous",
              "form": "avons dit"
            },
            {
              "person": "vous",
              "form": "avez dit"
            },
            {
              "person": "ils/elles",
              "form": "ont dit"
            }
          ]
        },
        {
          "name": "Futur simple",
          "forms": [
            {
              "person": "je",
              "form": "dirai"
            },
            {
              "person": "tu",
              "form": "diras"
            },
            {
              "person": "il/elle",
              "form": "dira"
            },
            {
              "person": "nous",
              "form": "dirons"
            },
            {
              "person": "vous",
              "form": "direz"
            },
            {
              "person": "ils/elles",
              "form": "diront"
            }
          ]
        }
      ]
    },
    {
      "verb": "pouvoir",
      "english": "to be able, can",
      "note": "irregular",
      "tenses": [
        {
          "name": "Présent",
          "forms": [
            {
              "person": "je",
              "form": "peux"
            },
            {
              "person": "tu",
              "form": "peux"
            },
            {
              "person": "il/elle",
              "form": "peut"
            },
            {
              "person": "nous",
              "form": "pouvons"
            },
            {
              "person": "vous",
              "form": "pouvez"
            },
            {
              "person": "ils/elles",
              "form": "peuvent"
            }
          ]
        },
        {
          "name": "Passé composé",
          "forms": [
            {
              "person": "je",
              "form": "ai pu"
            },
            {
              "person": "tu",
              "form": "as pu"
            },
            {
              "person": "il/elle",
              "form": "a pu"
            },
            {
              "person": "nous",
              "form": "avons pu"
            },
            {
              "person": "vous",
              "form": "avez pu"
            },
            {
              "person": "ils/elles",
              "form": "ont pu"
            }
          ]
        },
        {
          "name": "Futur simple",
          "forms": [
            {
              "person": "je",
              "form": "pourrai"
            },
            {
              "person": "tu",
              "form": "pourras"
            },
            {
              "person": "il/elle",
              "form": "pourra"
            },
            {
              "person": "nous",
              "form": "pourrons"
            },
            {
              "person": "vous",
              "form": "pourrez"
            },
            {
              "person": "ils/elles",
              "form": "pourront"
            }
          ]
        }
      ]
    },
    {
      "verb": "vouloir",
      "english": "to want",
      "note": "irregular",
      "tenses": [
        {
          "name": "Présent",
          "forms": [
            {
              "person": "je",
              "form": "veux"
            },
            {
              "person": "tu",
              "form": "veux"
            },
            {
              "person": "il/elle",
              "form": "veut"
            },
            {
              "person": "nous",
              "form": "voulons"
            },
            {
              "person": "vous",
              "form": "voulez"
            },
            {
              "person": "ils/elles",
              "form": "veulent"
            }
          ]
        },
        {
          "name": "Passé composé",
          "forms": [
            {
              "person": "je",
              "form": "ai voulu"
            },
            {
              "person": "tu",
              "form": "as voulu"
            },
            {
              "person": "il/elle",
              "form": "a voulu"
            },
            {
              "person": "nous",
              "form": "avons voulu"
            },
            {
              "person": "vous",
              "form": "avez voulu"
            },
            {
              "person": "ils/elles",
              "form": "ont voulu"
            }
          ]
        },
        {
          "name": "Futur simple",
          "forms": [
            {
              "person": "je",
              "form": "voudrai"
            },
            {
              "person": "tu",
              "form": "voudras"
            },
            {
              "person": "il/elle",
              "form": "voudra"
            },
            {
              "person": "nous",
              "form": "voudrons"
            },
            {
              "person": "vous",
              "form": "voudrez"
            },
            {
              "person": "ils/elles",
              "form": "voudront"
            }
          ]
        }
      ]
    },
    {
      "verb": "voir",
      "english": "to see",
      "note": "irregular",
      "tenses": [
        {
          "name": "Présent",
          "forms": [
            {
              "person": "je",
              "form": "vois"
            },
            {
              "person": "tu",
              "form": "vois"
            },
            {
              "person": "il/elle",
              "form": "voit"
            },
            {
              "person": "nous",
              "form": "voyons"
            },
            {
              "person": "vous",
              "form": "voyez"
            },
            {
              "person": "ils/elles",
              "form": "voient"
            }
          ]
        },
        {
          "name": "Passé composé",
          "forms": [
            {
              "person": "je",
              "form": "ai vu"
            },
            {
              "person": "tu",
              "form": "as vu"
            },
            {
              "person": "il/elle",
              "form": "a vu"
            },
            {
              "person": "nous",
              "form": "avons vu"
            },
            {
              "person": "vous",
              "form": "avez vu"
            },
            {
              "person": "ils/elles",
              "form": "ont vu"
            }
          ]
        },
        {
          "name": "Futur simple",
          "forms": [
            {
              "person": "je",
              "form": "verrai"
            },
            {
              "person": "tu",
              "form": "verras"
            },
            {
              "person": "il/elle",
              "form": "verra"
            },
            {
              "person": "nous",
              "form": "verrons"
            },
            {
              "person": "vous",
              "form": "verrez"
            },
            {
              "person": "ils/elles",
              "form": "verront"
            }
          ]
        }
      ]
    },
    {
      "verb": "venir",
      "english": "to come",
      "note": "irregular; être auxiliary (participle agrees, masc. shown)",
      "tenses": [
        {
          "name": "Présent",
          "forms": [
            {
              "person": "je",
              "form": "viens"
            },
            {
              "person": "tu",
              "form": "viens"
            },
            {
              "person": "il/elle",
              "form": "vient"
            },
            {
              "person": "nous",
              "form": "venons"
            },
            {
              "person": "vous",
              "form": "venez"
            },
            {
              "person": "ils/elles",
              "form": "viennent"
            }
          ]
        },
        {
          "name": "Passé composé",
          "forms": [
            {
              "person": "je",
              "form": "suis venu"
            },
            {
              "person": "tu",
              "form": "es venu"
            },
            {
              "person": "il/elle",
              "form": "est venu"
            },
            {
              "person": "nous",
              "form": "sommes venus"
            },
            {
              "person": "vous",
              "form": "êtes venus"
            },
            {
              "person": "ils/elles",
              "form": "sont venus"
            }
          ]
        },
        {
          "name": "Futur simple",
          "forms": [
            {
              "person": "je",
              "form": "viendrai"
            },
            {
              "person": "tu",
              "form": "viendras"
            },
            {
              "person": "il/elle",
              "form": "viendra"
            },
            {
              "person": "nous",
              "form": "viendrons"
            },
            {
              "person": "vous",
              "form": "viendrez"
            },
            {
              "person": "ils/elles",
              "form": "viendront"
            }
          ]
        }
      ]
    },
    {
      "verb": "prendre",
      "english": "to take",
      "note": "irregular",
      "tenses": [
        {
          "name": "Présent",
          "forms": [
            {
              "person": "je",
              "form": "prends"
            },
            {
              "person": "tu",
              "form": "prends"
            },
            {
              "person": "il/elle",
              "form": "prend"
            },
            {
              "person": "nous",
              "form": "prenons"
            },
            {
              "person": "vous",
              "form": "prenez"
            },
            {
              "person": "ils/elles",
              "form": "prennent"
            }
          ]
        },
        {
          "name": "Passé composé",
          "forms": [
            {
              "person": "je",
              "form": "ai pris"
            },
            {
              "person": "tu",
              "form": "as pris"
            },
            {
              "person": "il/elle",
              "form": "a pris"
            },
            {
              "person": "nous",
              "form": "avons pris"
            },
            {
              "person": "vous",
              "form": "avez pris"
            },
            {
              "person": "ils/elles",
              "form": "ont pris"
            }
          ]
        },
        {
          "name": "Futur simple",
          "forms": [
            {
              "person": "je",
              "form": "prendrai"
            },
            {
              "person": "tu",
              "form": "prendras"
            },
            {
              "person": "il/elle",
              "form": "prendra"
            },
            {
              "person": "nous",
              "form": "prendrons"
            },
            {
              "person": "vous",
              "form": "prendrez"
            },
            {
              "person": "ils/elles",
              "form": "prendront"
            }
          ]
        }
      ]
    },
    {
      "verb": "savoir",
      "english": "to know",
      "note": "irregular",
      "tenses": [
        {
          "name": "Présent",
          "forms": [
            {
              "person": "je",
              "form": "sais"
            },
            {
              "person": "tu",
              "form": "sais"
            },
            {
              "person": "il/elle",
              "form": "sait"
            },
            {
              "person": "nous",
              "form": "savons"
            },
            {
              "person": "vous",
              "form": "savez"
            },
            {
              "person": "ils/elles",
              "form": "savent"
            }
          ]
        },
        {
          "name": "Passé composé",
          "forms": [
            {
              "person": "je",
              "form": "ai su"
            },
            {
              "person": "tu",
              "form": "as su"
            },
            {
              "person": "il/elle",
              "form": "a su"
            },
            {
              "person": "nous",
              "form": "avons su"
            },
            {
              "person": "vous",
              "form": "avez su"
            },
            {
              "person": "ils/elles",
              "form": "ont su"
            }
          ]
        },
        {
          "name": "Futur simple",
          "forms": [
            {
              "person": "je",
              "form": "saurai"
            },
            {
              "person": "tu",
              "form": "sauras"
            },
            {
              "person": "il/elle",
              "form": "saura"
            },
            {
              "person": "nous",
              "form": "saurons"
            },
            {
              "person": "vous",
              "form": "saurez"
            },
            {
              "person": "ils/elles",
              "form": "sauront"
            }
          ]
        }
      ]
    },
    {
      "verb": "devoir",
      "english": "to have to, must",
      "note": "irregular",
      "tenses": [
        {
          "name": "Présent",
          "forms": [
            {
              "person": "je",
              "form": "dois"
            },
            {
              "person": "tu",
              "form": "dois"
            },
            {
              "person": "il/elle",
              "form": "doit"
            },
            {
              "person": "nous",
              "form": "devons"
            },
            {
              "person": "vous",
              "form": "devez"
            },
            {
              "person": "ils/elles",
              "form": "doivent"
            }
          ]
        },
        {
          "name": "Passé composé",
          "forms": [
            {
              "person": "je",
              "form": "ai dû"
            },
            {
              "person": "tu",
              "form": "as dû"
            },
            {
              "person": "il/elle",
              "form": "a dû"
            },
            {
              "person": "nous",
              "form": "avons dû"
            },
            {
              "person": "vous",
              "form": "avez dû"
            },
            {
              "person": "ils/elles",
              "form": "ont dû"
            }
          ]
        },
        {
          "name": "Futur simple",
          "forms": [
            {
              "person": "je",
              "form": "devrai"
            },
            {
              "person": "tu",
              "form": "devras"
            },
            {
              "person": "il/elle",
              "form": "devra"
            },
            {
              "person": "nous",
              "form": "devrons"
            },
            {
              "person": "vous",
              "form": "devrez"
            },
            {
              "person": "ils/elles",
              "form": "devront"
            }
          ]
        }
      ]
    },
    {
      "verb": "mettre",
      "english": "to put",
      "note": "irregular",
      "tenses": [
        {
          "name": "Présent",
          "forms": [
            {
              "person": "je",
              "form": "mets"
            },
            {
              "person": "tu",
              "form": "mets"
            },
            {
              "person": "il/elle",
              "form": "met"
            },
            {
              "person": "nous",
              "form": "mettons"
            },
            {
              "person": "vous",
              "form": "mettez"
            },
            {
              "person": "ils/elles",
              "form": "mettent"
            }
          ]
        },
        {
          "name": "Passé composé",
          "forms": [
            {
              "person": "je",
              "form": "ai mis"
            },
            {
              "person": "tu",
              "form": "as mis"
            },
            {
              "person": "il/elle",
              "form": "a mis"
            },
            {
              "person": "nous",
              "form": "avons mis"
            },
            {
              "person": "vous",
              "form": "avez mis"
            },
            {
              "person": "ils/elles",
              "form": "ont mis"
            }
          ]
        },
        {
          "name": "Futur simple",
          "forms": [
            {
              "person": "je",
              "form": "mettrai"
            },
            {
              "person": "tu",
              "form": "mettras"
            },
            {
              "person": "il/elle",
              "form": "mettra"
            },
            {
              "person": "nous",
              "form": "mettrons"
            },
            {
              "person": "vous",
              "form": "mettrez"
            },
            {
              "person": "ils/elles",
              "form": "mettront"
            }
          ]
        }
      ]
    }
  ],
  "de": [
    {
      "verb": "machen",
      "english": "to do, to make",
      "note": "regular (weak)",
      "tenses": [
        {
          "name": "Präsens",
          "forms": [
            {
              "person": "ich",
              "form": "mache"
            },
            {
              "person": "du",
              "form": "machst"
            },
            {
              "person": "er/sie/es",
              "form": "macht"
            },
            {
              "person": "wir",
              "form": "machen"
            },
            {
              "person": "ihr",
              "form": "macht"
            },
            {
              "person": "sie/Sie",
              "form": "machen"
            }
          ]
        },
        {
          "name": "Präteritum",
          "forms": [
            {
              "person": "ich",
              "form": "machte"
            },
            {
              "person": "du",
              "form": "machtest"
            },
            {
              "person": "er/sie/es",
              "form": "machte"
            },
            {
              "person": "wir",
              "form": "machten"
            },
            {
              "person": "ihr",
              "form": "machtet"
            },
            {
              "person": "sie/Sie",
              "form": "machten"
            }
          ]
        },
        {
          "name": "Futur I",
          "forms": [
            {
              "person": "ich",
              "form": "werde machen"
            },
            {
              "person": "du",
              "form": "wirst machen"
            },
            {
              "person": "er/sie/es",
              "form": "wird machen"
            },
            {
              "person": "wir",
              "form": "werden machen"
            },
            {
              "person": "ihr",
              "form": "werdet machen"
            },
            {
              "person": "sie/Sie",
              "form": "werden machen"
            }
          ]
        }
      ]
    },
    {
      "verb": "sagen",
      "english": "to say",
      "note": "regular (weak)",
      "tenses": [
        {
          "name": "Präsens",
          "forms": [
            {
              "person": "ich",
              "form": "sage"
            },
            {
              "person": "du",
              "form": "sagst"
            },
            {
              "person": "er/sie/es",
              "form": "sagt"
            },
            {
              "person": "wir",
              "form": "sagen"
            },
            {
              "person": "ihr",
              "form": "sagt"
            },
            {
              "person": "sie/Sie",
              "form": "sagen"
            }
          ]
        },
        {
          "name": "Präteritum",
          "forms": [
            {
              "person": "ich",
              "form": "sagte"
            },
            {
              "person": "du",
              "form": "sagtest"
            },
            {
              "person": "er/sie/es",
              "form": "sagte"
            },
            {
              "person": "wir",
              "form": "sagten"
            },
            {
              "person": "ihr",
              "form": "sagtet"
            },
            {
              "person": "sie/Sie",
              "form": "sagten"
            }
          ]
        },
        {
          "name": "Futur I",
          "forms": [
            {
              "person": "ich",
              "form": "werde sagen"
            },
            {
              "person": "du",
              "form": "wirst sagen"
            },
            {
              "person": "er/sie/es",
              "form": "wird sagen"
            },
            {
              "person": "wir",
              "form": "werden sagen"
            },
            {
              "person": "ihr",
              "form": "werdet sagen"
            },
            {
              "person": "sie/Sie",
              "form": "werden sagen"
            }
          ]
        }
      ]
    },
    {
      "verb": "spielen",
      "english": "to play",
      "note": "regular (weak)",
      "tenses": [
        {
          "name": "Präsens",
          "forms": [
            {
              "person": "ich",
              "form": "spiele"
            },
            {
              "person": "du",
              "form": "spielst"
            },
            {
              "person": "er/sie/es",
              "form": "spielt"
            },
            {
              "person": "wir",
              "form": "spielen"
            },
            {
              "person": "ihr",
              "form": "spielt"
            },
            {
              "person": "sie/Sie",
              "form": "spielen"
            }
          ]
        },
        {
          "name": "Präteritum",
          "forms": [
            {
              "person": "ich",
              "form": "spielte"
            },
            {
              "person": "du",
              "form": "spieltest"
            },
            {
              "person": "er/sie/es",
              "form": "spielte"
            },
            {
              "person": "wir",
              "form": "spielten"
            },
            {
              "person": "ihr",
              "form": "spieltet"
            },
            {
              "person": "sie/Sie",
              "form": "spielten"
            }
          ]
        },
        {
          "name": "Futur I",
          "forms": [
            {
              "person": "ich",
              "form": "werde spielen"
            },
            {
              "person": "du",
              "form": "wirst spielen"
            },
            {
              "person": "er/sie/es",
              "form": "wird spielen"
            },
            {
              "person": "wir",
              "form": "werden spielen"
            },
            {
              "person": "ihr",
              "form": "werdet spielen"
            },
            {
              "person": "sie/Sie",
              "form": "werden spielen"
            }
          ]
        }
      ]
    },
    {
      "verb": "sein",
      "english": "to be",
      "note": "irregular (strong)",
      "tenses": [
        {
          "name": "Präsens",
          "forms": [
            {
              "person": "ich",
              "form": "bin"
            },
            {
              "person": "du",
              "form": "bist"
            },
            {
              "person": "er/sie/es",
              "form": "ist"
            },
            {
              "person": "wir",
              "form": "sind"
            },
            {
              "person": "ihr",
              "form": "seid"
            },
            {
              "person": "sie/Sie",
              "form": "sind"
            }
          ]
        },
        {
          "name": "Präteritum",
          "forms": [
            {
              "person": "ich",
              "form": "war"
            },
            {
              "person": "du",
              "form": "warst"
            },
            {
              "person": "er/sie/es",
              "form": "war"
            },
            {
              "person": "wir",
              "form": "waren"
            },
            {
              "person": "ihr",
              "form": "wart"
            },
            {
              "person": "sie/Sie",
              "form": "waren"
            }
          ]
        },
        {
          "name": "Futur I",
          "forms": [
            {
              "person": "ich",
              "form": "werde sein"
            },
            {
              "person": "du",
              "form": "wirst sein"
            },
            {
              "person": "er/sie/es",
              "form": "wird sein"
            },
            {
              "person": "wir",
              "form": "werden sein"
            },
            {
              "person": "ihr",
              "form": "werdet sein"
            },
            {
              "person": "sie/Sie",
              "form": "werden sein"
            }
          ]
        }
      ]
    },
    {
      "verb": "haben",
      "english": "to have",
      "note": "irregular",
      "tenses": [
        {
          "name": "Präsens",
          "forms": [
            {
              "person": "ich",
              "form": "habe"
            },
            {
              "person": "du",
              "form": "hast"
            },
            {
              "person": "er/sie/es",
              "form": "hat"
            },
            {
              "person": "wir",
              "form": "haben"
            },
            {
              "person": "ihr",
              "form": "habt"
            },
            {
              "person": "sie/Sie",
              "form": "haben"
            }
          ]
        },
        {
          "name": "Präteritum",
          "forms": [
            {
              "person": "ich",
              "form": "hatte"
            },
            {
              "person": "du",
              "form": "hattest"
            },
            {
              "person": "er/sie/es",
              "form": "hatte"
            },
            {
              "person": "wir",
              "form": "hatten"
            },
            {
              "person": "ihr",
              "form": "hattet"
            },
            {
              "person": "sie/Sie",
              "form": "hatten"
            }
          ]
        },
        {
          "name": "Futur I",
          "forms": [
            {
              "person": "ich",
              "form": "werde haben"
            },
            {
              "person": "du",
              "form": "wirst haben"
            },
            {
              "person": "er/sie/es",
              "form": "wird haben"
            },
            {
              "person": "wir",
              "form": "werden haben"
            },
            {
              "person": "ihr",
              "form": "werdet haben"
            },
            {
              "person": "sie/Sie",
              "form": "werden haben"
            }
          ]
        }
      ]
    },
    {
      "verb": "werden",
      "english": "to become",
      "note": "irregular",
      "tenses": [
        {
          "name": "Präsens",
          "forms": [
            {
              "person": "ich",
              "form": "werde"
            },
            {
              "person": "du",
              "form": "wirst"
            },
            {
              "person": "er/sie/es",
              "form": "wird"
            },
            {
              "person": "wir",
              "form": "werden"
            },
            {
              "person": "ihr",
              "form": "werdet"
            },
            {
              "person": "sie/Sie",
              "form": "werden"
            }
          ]
        },
        {
          "name": "Präteritum",
          "forms": [
            {
              "person": "ich",
              "form": "wurde"
            },
            {
              "person": "du",
              "form": "wurdest"
            },
            {
              "person": "er/sie/es",
              "form": "wurde"
            },
            {
              "person": "wir",
              "form": "wurden"
            },
            {
              "person": "ihr",
              "form": "wurdet"
            },
            {
              "person": "sie/Sie",
              "form": "wurden"
            }
          ]
        },
        {
          "name": "Futur I",
          "forms": [
            {
              "person": "ich",
              "form": "werde werden"
            },
            {
              "person": "du",
              "form": "wirst werden"
            },
            {
              "person": "er/sie/es",
              "form": "wird werden"
            },
            {
              "person": "wir",
              "form": "werden werden"
            },
            {
              "person": "ihr",
              "form": "werdet werden"
            },
            {
              "person": "sie/Sie",
              "form": "werden werden"
            }
          ]
        }
      ]
    },
    {
      "verb": "gehen",
      "english": "to go",
      "note": "irregular (strong)",
      "tenses": [
        {
          "name": "Präsens",
          "forms": [
            {
              "person": "ich",
              "form": "gehe"
            },
            {
              "person": "du",
              "form": "gehst"
            },
            {
              "person": "er/sie/es",
              "form": "geht"
            },
            {
              "person": "wir",
              "form": "gehen"
            },
            {
              "person": "ihr",
              "form": "geht"
            },
            {
              "person": "sie/Sie",
              "form": "gehen"
            }
          ]
        },
        {
          "name": "Präteritum",
          "forms": [
            {
              "person": "ich",
              "form": "ging"
            },
            {
              "person": "du",
              "form": "gingst"
            },
            {
              "person": "er/sie/es",
              "form": "ging"
            },
            {
              "person": "wir",
              "form": "gingen"
            },
            {
              "person": "ihr",
              "form": "gingt"
            },
            {
              "person": "sie/Sie",
              "form": "gingen"
            }
          ]
        },
        {
          "name": "Futur I",
          "forms": [
            {
              "person": "ich",
              "form": "werde gehen"
            },
            {
              "person": "du",
              "form": "wirst gehen"
            },
            {
              "person": "er/sie/es",
              "form": "wird gehen"
            },
            {
              "person": "wir",
              "form": "werden gehen"
            },
            {
              "person": "ihr",
              "form": "werdet gehen"
            },
            {
              "person": "sie/Sie",
              "form": "werden gehen"
            }
          ]
        }
      ]
    },
    {
      "verb": "kommen",
      "english": "to come",
      "note": "irregular (strong)",
      "tenses": [
        {
          "name": "Präsens",
          "forms": [
            {
              "person": "ich",
              "form": "komme"
            },
            {
              "person": "du",
              "form": "kommst"
            },
            {
              "person": "er/sie/es",
              "form": "kommt"
            },
            {
              "person": "wir",
              "form": "kommen"
            },
            {
              "person": "ihr",
              "form": "kommt"
            },
            {
              "person": "sie/Sie",
              "form": "kommen"
            }
          ]
        },
        {
          "name": "Präteritum",
          "forms": [
            {
              "person": "ich",
              "form": "kam"
            },
            {
              "person": "du",
              "form": "kamst"
            },
            {
              "person": "er/sie/es",
              "form": "kam"
            },
            {
              "person": "wir",
              "form": "kamen"
            },
            {
              "person": "ihr",
              "form": "kamt"
            },
            {
              "person": "sie/Sie",
              "form": "kamen"
            }
          ]
        },
        {
          "name": "Futur I",
          "forms": [
            {
              "person": "ich",
              "form": "werde kommen"
            },
            {
              "person": "du",
              "form": "wirst kommen"
            },
            {
              "person": "er/sie/es",
              "form": "wird kommen"
            },
            {
              "person": "wir",
              "form": "werden kommen"
            },
            {
              "person": "ihr",
              "form": "werdet kommen"
            },
            {
              "person": "sie/Sie",
              "form": "werden kommen"
            }
          ]
        }
      ]
    },
    {
      "verb": "sehen",
      "english": "to see",
      "note": "irregular (strong, e>ie)",
      "tenses": [
        {
          "name": "Präsens",
          "forms": [
            {
              "person": "ich",
              "form": "sehe"
            },
            {
              "person": "du",
              "form": "siehst"
            },
            {
              "person": "er/sie/es",
              "form": "sieht"
            },
            {
              "person": "wir",
              "form": "sehen"
            },
            {
              "person": "ihr",
              "form": "seht"
            },
            {
              "person": "sie/Sie",
              "form": "sehen"
            }
          ]
        },
        {
          "name": "Präteritum",
          "forms": [
            {
              "person": "ich",
              "form": "sah"
            },
            {
              "person": "du",
              "form": "sahst"
            },
            {
              "person": "er/sie/es",
              "form": "sah"
            },
            {
              "person": "wir",
              "form": "sahen"
            },
            {
              "person": "ihr",
              "form": "saht"
            },
            {
              "person": "sie/Sie",
              "form": "sahen"
            }
          ]
        },
        {
          "name": "Futur I",
          "forms": [
            {
              "person": "ich",
              "form": "werde sehen"
            },
            {
              "person": "du",
              "form": "wirst sehen"
            },
            {
              "person": "er/sie/es",
              "form": "wird sehen"
            },
            {
              "person": "wir",
              "form": "werden sehen"
            },
            {
              "person": "ihr",
              "form": "werdet sehen"
            },
            {
              "person": "sie/Sie",
              "form": "werden sehen"
            }
          ]
        }
      ]
    },
    {
      "verb": "geben",
      "english": "to give",
      "note": "irregular (strong, e>i)",
      "tenses": [
        {
          "name": "Präsens",
          "forms": [
            {
              "person": "ich",
              "form": "gebe"
            },
            {
              "person": "du",
              "form": "gibst"
            },
            {
              "person": "er/sie/es",
              "form": "gibt"
            },
            {
              "person": "wir",
              "form": "geben"
            },
            {
              "person": "ihr",
              "form": "gebt"
            },
            {
              "person": "sie/Sie",
              "form": "geben"
            }
          ]
        },
        {
          "name": "Präteritum",
          "forms": [
            {
              "person": "ich",
              "form": "gab"
            },
            {
              "person": "du",
              "form": "gabst"
            },
            {
              "person": "er/sie/es",
              "form": "gab"
            },
            {
              "person": "wir",
              "form": "gaben"
            },
            {
              "person": "ihr",
              "form": "gabt"
            },
            {
              "person": "sie/Sie",
              "form": "gaben"
            }
          ]
        },
        {
          "name": "Futur I",
          "forms": [
            {
              "person": "ich",
              "form": "werde geben"
            },
            {
              "person": "du",
              "form": "wirst geben"
            },
            {
              "person": "er/sie/es",
              "form": "wird geben"
            },
            {
              "person": "wir",
              "form": "werden geben"
            },
            {
              "person": "ihr",
              "form": "werdet geben"
            },
            {
              "person": "sie/Sie",
              "form": "werden geben"
            }
          ]
        }
      ]
    },
    {
      "verb": "finden",
      "english": "to find",
      "note": "irregular (strong)",
      "tenses": [
        {
          "name": "Präsens",
          "forms": [
            {
              "person": "ich",
              "form": "finde"
            },
            {
              "person": "du",
              "form": "findest"
            },
            {
              "person": "er/sie/es",
              "form": "findet"
            },
            {
              "person": "wir",
              "form": "finden"
            },
            {
              "person": "ihr",
              "form": "findet"
            },
            {
              "person": "sie/Sie",
              "form": "finden"
            }
          ]
        },
        {
          "name": "Präteritum",
          "forms": [
            {
              "person": "ich",
              "form": "fand"
            },
            {
              "person": "du",
              "form": "fandest"
            },
            {
              "person": "er/sie/es",
              "form": "fand"
            },
            {
              "person": "wir",
              "form": "fanden"
            },
            {
              "person": "ihr",
              "form": "fandet"
            },
            {
              "person": "sie/Sie",
              "form": "fanden"
            }
          ]
        },
        {
          "name": "Futur I",
          "forms": [
            {
              "person": "ich",
              "form": "werde finden"
            },
            {
              "person": "du",
              "form": "wirst finden"
            },
            {
              "person": "er/sie/es",
              "form": "wird finden"
            },
            {
              "person": "wir",
              "form": "werden finden"
            },
            {
              "person": "ihr",
              "form": "werdet finden"
            },
            {
              "person": "sie/Sie",
              "form": "werden finden"
            }
          ]
        }
      ]
    },
    {
      "verb": "nehmen",
      "english": "to take",
      "note": "irregular (strong)",
      "tenses": [
        {
          "name": "Präsens",
          "forms": [
            {
              "person": "ich",
              "form": "nehme"
            },
            {
              "person": "du",
              "form": "nimmst"
            },
            {
              "person": "er/sie/es",
              "form": "nimmt"
            },
            {
              "person": "wir",
              "form": "nehmen"
            },
            {
              "person": "ihr",
              "form": "nehmt"
            },
            {
              "person": "sie/Sie",
              "form": "nehmen"
            }
          ]
        },
        {
          "name": "Präteritum",
          "forms": [
            {
              "person": "ich",
              "form": "nahm"
            },
            {
              "person": "du",
              "form": "nahmst"
            },
            {
              "person": "er/sie/es",
              "form": "nahm"
            },
            {
              "person": "wir",
              "form": "nahmen"
            },
            {
              "person": "ihr",
              "form": "nahmt"
            },
            {
              "person": "sie/Sie",
              "form": "nahmen"
            }
          ]
        },
        {
          "name": "Futur I",
          "forms": [
            {
              "person": "ich",
              "form": "werde nehmen"
            },
            {
              "person": "du",
              "form": "wirst nehmen"
            },
            {
              "person": "er/sie/es",
              "form": "wird nehmen"
            },
            {
              "person": "wir",
              "form": "werden nehmen"
            },
            {
              "person": "ihr",
              "form": "werdet nehmen"
            },
            {
              "person": "sie/Sie",
              "form": "werden nehmen"
            }
          ]
        }
      ]
    },
    {
      "verb": "wissen",
      "english": "to know",
      "note": "irregular (mixed)",
      "tenses": [
        {
          "name": "Präsens",
          "forms": [
            {
              "person": "ich",
              "form": "weiß"
            },
            {
              "person": "du",
              "form": "weißt"
            },
            {
              "person": "er/sie/es",
              "form": "weiß"
            },
            {
              "person": "wir",
              "form": "wissen"
            },
            {
              "person": "ihr",
              "form": "wisst"
            },
            {
              "person": "sie/Sie",
              "form": "wissen"
            }
          ]
        },
        {
          "name": "Präteritum",
          "forms": [
            {
              "person": "ich",
              "form": "wusste"
            },
            {
              "person": "du",
              "form": "wusstest"
            },
            {
              "person": "er/sie/es",
              "form": "wusste"
            },
            {
              "person": "wir",
              "form": "wussten"
            },
            {
              "person": "ihr",
              "form": "wusstet"
            },
            {
              "person": "sie/Sie",
              "form": "wussten"
            }
          ]
        },
        {
          "name": "Futur I",
          "forms": [
            {
              "person": "ich",
              "form": "werde wissen"
            },
            {
              "person": "du",
              "form": "wirst wissen"
            },
            {
              "person": "er/sie/es",
              "form": "wird wissen"
            },
            {
              "person": "wir",
              "form": "werden wissen"
            },
            {
              "person": "ihr",
              "form": "werdet wissen"
            },
            {
              "person": "sie/Sie",
              "form": "werden wissen"
            }
          ]
        }
      ]
    },
    {
      "verb": "sprechen",
      "english": "to speak",
      "note": "irregular (strong, e>i)",
      "tenses": [
        {
          "name": "Präsens",
          "forms": [
            {
              "person": "ich",
              "form": "spreche"
            },
            {
              "person": "du",
              "form": "sprichst"
            },
            {
              "person": "er/sie/es",
              "form": "spricht"
            },
            {
              "person": "wir",
              "form": "sprechen"
            },
            {
              "person": "ihr",
              "form": "sprecht"
            },
            {
              "person": "sie/Sie",
              "form": "sprechen"
            }
          ]
        },
        {
          "name": "Präteritum",
          "forms": [
            {
              "person": "ich",
              "form": "sprach"
            },
            {
              "person": "du",
              "form": "sprachst"
            },
            {
              "person": "er/sie/es",
              "form": "sprach"
            },
            {
              "person": "wir",
              "form": "sprachen"
            },
            {
              "person": "ihr",
              "form": "spracht"
            },
            {
              "person": "sie/Sie",
              "form": "sprachen"
            }
          ]
        },
        {
          "name": "Futur I",
          "forms": [
            {
              "person": "ich",
              "form": "werde sprechen"
            },
            {
              "person": "du",
              "form": "wirst sprechen"
            },
            {
              "person": "er/sie/es",
              "form": "wird sprechen"
            },
            {
              "person": "wir",
              "form": "werden sprechen"
            },
            {
              "person": "ihr",
              "form": "werdet sprechen"
            },
            {
              "person": "sie/Sie",
              "form": "werden sprechen"
            }
          ]
        }
      ]
    },
    {
      "verb": "fahren",
      "english": "to drive, to go",
      "note": "irregular (strong, a>ä)",
      "tenses": [
        {
          "name": "Präsens",
          "forms": [
            {
              "person": "ich",
              "form": "fahre"
            },
            {
              "person": "du",
              "form": "fährst"
            },
            {
              "person": "er/sie/es",
              "form": "fährt"
            },
            {
              "person": "wir",
              "form": "fahren"
            },
            {
              "person": "ihr",
              "form": "fahrt"
            },
            {
              "person": "sie/Sie",
              "form": "fahren"
            }
          ]
        },
        {
          "name": "Präteritum",
          "forms": [
            {
              "person": "ich",
              "form": "fuhr"
            },
            {
              "person": "du",
              "form": "fuhrst"
            },
            {
              "person": "er/sie/es",
              "form": "fuhr"
            },
            {
              "person": "wir",
              "form": "fuhren"
            },
            {
              "person": "ihr",
              "form": "fuhrt"
            },
            {
              "person": "sie/Sie",
              "form": "fuhren"
            }
          ]
        },
        {
          "name": "Futur I",
          "forms": [
            {
              "person": "ich",
              "form": "werde fahren"
            },
            {
              "person": "du",
              "form": "wirst fahren"
            },
            {
              "person": "er/sie/es",
              "form": "wird fahren"
            },
            {
              "person": "wir",
              "form": "werden fahren"
            },
            {
              "person": "ihr",
              "form": "werdet fahren"
            },
            {
              "person": "sie/Sie",
              "form": "werden fahren"
            }
          ]
        }
      ]
    },
    {
      "verb": "essen",
      "english": "to eat",
      "note": "irregular (strong, e>i)",
      "tenses": [
        {
          "name": "Präsens",
          "forms": [
            {
              "person": "ich",
              "form": "esse"
            },
            {
              "person": "du",
              "form": "isst"
            },
            {
              "person": "er/sie/es",
              "form": "isst"
            },
            {
              "person": "wir",
              "form": "essen"
            },
            {
              "person": "ihr",
              "form": "esst"
            },
            {
              "person": "sie/Sie",
              "form": "essen"
            }
          ]
        },
        {
          "name": "Präteritum",
          "forms": [
            {
              "person": "ich",
              "form": "aß"
            },
            {
              "person": "du",
              "form": "aßest"
            },
            {
              "person": "er/sie/es",
              "form": "aß"
            },
            {
              "person": "wir",
              "form": "aßen"
            },
            {
              "person": "ihr",
              "form": "aßt"
            },
            {
              "person": "sie/Sie",
              "form": "aßen"
            }
          ]
        },
        {
          "name": "Futur I",
          "forms": [
            {
              "person": "ich",
              "form": "werde essen"
            },
            {
              "person": "du",
              "form": "wirst essen"
            },
            {
              "person": "er/sie/es",
              "form": "wird essen"
            },
            {
              "person": "wir",
              "form": "werden essen"
            },
            {
              "person": "ihr",
              "form": "werdet essen"
            },
            {
              "person": "sie/Sie",
              "form": "werden essen"
            }
          ]
        }
      ]
    }
  ],
  "it": [
    {
      "verb": "parlare",
      "english": "to speak",
      "note": "regular -are",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "io",
              "form": "parlo"
            },
            {
              "person": "tu",
              "form": "parli"
            },
            {
              "person": "lui/lei",
              "form": "parla"
            },
            {
              "person": "noi",
              "form": "parliamo"
            },
            {
              "person": "voi",
              "form": "parlate"
            },
            {
              "person": "loro",
              "form": "parlano"
            }
          ]
        },
        {
          "name": "Passato prossimo",
          "forms": [
            {
              "person": "io",
              "form": "ho parlato"
            },
            {
              "person": "tu",
              "form": "hai parlato"
            },
            {
              "person": "lui/lei",
              "form": "ha parlato"
            },
            {
              "person": "noi",
              "form": "abbiamo parlato"
            },
            {
              "person": "voi",
              "form": "avete parlato"
            },
            {
              "person": "loro",
              "form": "hanno parlato"
            }
          ]
        },
        {
          "name": "Futuro semplice",
          "forms": [
            {
              "person": "io",
              "form": "parlerò"
            },
            {
              "person": "tu",
              "form": "parlerai"
            },
            {
              "person": "lui/lei",
              "form": "parlerà"
            },
            {
              "person": "noi",
              "form": "parleremo"
            },
            {
              "person": "voi",
              "form": "parlerete"
            },
            {
              "person": "loro",
              "form": "parleranno"
            }
          ]
        }
      ]
    },
    {
      "verb": "credere",
      "english": "to believe",
      "note": "regular -ere",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "io",
              "form": "credo"
            },
            {
              "person": "tu",
              "form": "credi"
            },
            {
              "person": "lui/lei",
              "form": "crede"
            },
            {
              "person": "noi",
              "form": "crediamo"
            },
            {
              "person": "voi",
              "form": "credete"
            },
            {
              "person": "loro",
              "form": "credono"
            }
          ]
        },
        {
          "name": "Passato prossimo",
          "forms": [
            {
              "person": "io",
              "form": "ho creduto"
            },
            {
              "person": "tu",
              "form": "hai creduto"
            },
            {
              "person": "lui/lei",
              "form": "ha creduto"
            },
            {
              "person": "noi",
              "form": "abbiamo creduto"
            },
            {
              "person": "voi",
              "form": "avete creduto"
            },
            {
              "person": "loro",
              "form": "hanno creduto"
            }
          ]
        },
        {
          "name": "Futuro semplice",
          "forms": [
            {
              "person": "io",
              "form": "crederò"
            },
            {
              "person": "tu",
              "form": "crederai"
            },
            {
              "person": "lui/lei",
              "form": "crederà"
            },
            {
              "person": "noi",
              "form": "crederemo"
            },
            {
              "person": "voi",
              "form": "crederete"
            },
            {
              "person": "loro",
              "form": "crederanno"
            }
          ]
        }
      ]
    },
    {
      "verb": "dormire",
      "english": "to sleep",
      "note": "regular -ire",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "io",
              "form": "dormo"
            },
            {
              "person": "tu",
              "form": "dormi"
            },
            {
              "person": "lui/lei",
              "form": "dorme"
            },
            {
              "person": "noi",
              "form": "dormiamo"
            },
            {
              "person": "voi",
              "form": "dormite"
            },
            {
              "person": "loro",
              "form": "dormono"
            }
          ]
        },
        {
          "name": "Passato prossimo",
          "forms": [
            {
              "person": "io",
              "form": "ho dormito"
            },
            {
              "person": "tu",
              "form": "hai dormito"
            },
            {
              "person": "lui/lei",
              "form": "ha dormito"
            },
            {
              "person": "noi",
              "form": "abbiamo dormito"
            },
            {
              "person": "voi",
              "form": "avete dormito"
            },
            {
              "person": "loro",
              "form": "hanno dormito"
            }
          ]
        },
        {
          "name": "Futuro semplice",
          "forms": [
            {
              "person": "io",
              "form": "dormirò"
            },
            {
              "person": "tu",
              "form": "dormirai"
            },
            {
              "person": "lui/lei",
              "form": "dormirà"
            },
            {
              "person": "noi",
              "form": "dormiremo"
            },
            {
              "person": "voi",
              "form": "dormirete"
            },
            {
              "person": "loro",
              "form": "dormiranno"
            }
          ]
        }
      ]
    },
    {
      "verb": "finire",
      "english": "to finish",
      "note": "regular -ire (-isc-)",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "io",
              "form": "finisco"
            },
            {
              "person": "tu",
              "form": "finisci"
            },
            {
              "person": "lui/lei",
              "form": "finisce"
            },
            {
              "person": "noi",
              "form": "finiamo"
            },
            {
              "person": "voi",
              "form": "finite"
            },
            {
              "person": "loro",
              "form": "finiscono"
            }
          ]
        },
        {
          "name": "Passato prossimo",
          "forms": [
            {
              "person": "io",
              "form": "ho finito"
            },
            {
              "person": "tu",
              "form": "hai finito"
            },
            {
              "person": "lui/lei",
              "form": "ha finito"
            },
            {
              "person": "noi",
              "form": "abbiamo finito"
            },
            {
              "person": "voi",
              "form": "avete finito"
            },
            {
              "person": "loro",
              "form": "hanno finito"
            }
          ]
        },
        {
          "name": "Futuro semplice",
          "forms": [
            {
              "person": "io",
              "form": "finirò"
            },
            {
              "person": "tu",
              "form": "finirai"
            },
            {
              "person": "lui/lei",
              "form": "finirà"
            },
            {
              "person": "noi",
              "form": "finiremo"
            },
            {
              "person": "voi",
              "form": "finirete"
            },
            {
              "person": "loro",
              "form": "finiranno"
            }
          ]
        }
      ]
    },
    {
      "verb": "essere",
      "english": "to be",
      "note": "irregular; essere auxiliary (participle agrees, masc. shown)",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "io",
              "form": "sono"
            },
            {
              "person": "tu",
              "form": "sei"
            },
            {
              "person": "lui/lei",
              "form": "è"
            },
            {
              "person": "noi",
              "form": "siamo"
            },
            {
              "person": "voi",
              "form": "siete"
            },
            {
              "person": "loro",
              "form": "sono"
            }
          ]
        },
        {
          "name": "Passato prossimo",
          "forms": [
            {
              "person": "io",
              "form": "sono stato"
            },
            {
              "person": "tu",
              "form": "sei stato"
            },
            {
              "person": "lui/lei",
              "form": "è stato"
            },
            {
              "person": "noi",
              "form": "siamo stati"
            },
            {
              "person": "voi",
              "form": "siete stati"
            },
            {
              "person": "loro",
              "form": "sono stati"
            }
          ]
        },
        {
          "name": "Futuro semplice",
          "forms": [
            {
              "person": "io",
              "form": "sarò"
            },
            {
              "person": "tu",
              "form": "sarai"
            },
            {
              "person": "lui/lei",
              "form": "sarà"
            },
            {
              "person": "noi",
              "form": "saremo"
            },
            {
              "person": "voi",
              "form": "sarete"
            },
            {
              "person": "loro",
              "form": "saranno"
            }
          ]
        }
      ]
    },
    {
      "verb": "avere",
      "english": "to have",
      "note": "irregular",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "io",
              "form": "ho"
            },
            {
              "person": "tu",
              "form": "hai"
            },
            {
              "person": "lui/lei",
              "form": "ha"
            },
            {
              "person": "noi",
              "form": "abbiamo"
            },
            {
              "person": "voi",
              "form": "avete"
            },
            {
              "person": "loro",
              "form": "hanno"
            }
          ]
        },
        {
          "name": "Passato prossimo",
          "forms": [
            {
              "person": "io",
              "form": "ho avuto"
            },
            {
              "person": "tu",
              "form": "hai avuto"
            },
            {
              "person": "lui/lei",
              "form": "ha avuto"
            },
            {
              "person": "noi",
              "form": "abbiamo avuto"
            },
            {
              "person": "voi",
              "form": "avete avuto"
            },
            {
              "person": "loro",
              "form": "hanno avuto"
            }
          ]
        },
        {
          "name": "Futuro semplice",
          "forms": [
            {
              "person": "io",
              "form": "avrò"
            },
            {
              "person": "tu",
              "form": "avrai"
            },
            {
              "person": "lui/lei",
              "form": "avrà"
            },
            {
              "person": "noi",
              "form": "avremo"
            },
            {
              "person": "voi",
              "form": "avrete"
            },
            {
              "person": "loro",
              "form": "avranno"
            }
          ]
        }
      ]
    },
    {
      "verb": "fare",
      "english": "to do, to make",
      "note": "irregular",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "io",
              "form": "faccio"
            },
            {
              "person": "tu",
              "form": "fai"
            },
            {
              "person": "lui/lei",
              "form": "fa"
            },
            {
              "person": "noi",
              "form": "facciamo"
            },
            {
              "person": "voi",
              "form": "fate"
            },
            {
              "person": "loro",
              "form": "fanno"
            }
          ]
        },
        {
          "name": "Passato prossimo",
          "forms": [
            {
              "person": "io",
              "form": "ho fatto"
            },
            {
              "person": "tu",
              "form": "hai fatto"
            },
            {
              "person": "lui/lei",
              "form": "ha fatto"
            },
            {
              "person": "noi",
              "form": "abbiamo fatto"
            },
            {
              "person": "voi",
              "form": "avete fatto"
            },
            {
              "person": "loro",
              "form": "hanno fatto"
            }
          ]
        },
        {
          "name": "Futuro semplice",
          "forms": [
            {
              "person": "io",
              "form": "farò"
            },
            {
              "person": "tu",
              "form": "farai"
            },
            {
              "person": "lui/lei",
              "form": "farà"
            },
            {
              "person": "noi",
              "form": "faremo"
            },
            {
              "person": "voi",
              "form": "farete"
            },
            {
              "person": "loro",
              "form": "faranno"
            }
          ]
        }
      ]
    },
    {
      "verb": "andare",
      "english": "to go",
      "note": "irregular; essere auxiliary (participle agrees, masc. shown)",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "io",
              "form": "vado"
            },
            {
              "person": "tu",
              "form": "vai"
            },
            {
              "person": "lui/lei",
              "form": "va"
            },
            {
              "person": "noi",
              "form": "andiamo"
            },
            {
              "person": "voi",
              "form": "andate"
            },
            {
              "person": "loro",
              "form": "vanno"
            }
          ]
        },
        {
          "name": "Passato prossimo",
          "forms": [
            {
              "person": "io",
              "form": "sono andato"
            },
            {
              "person": "tu",
              "form": "sei andato"
            },
            {
              "person": "lui/lei",
              "form": "è andato"
            },
            {
              "person": "noi",
              "form": "siamo andati"
            },
            {
              "person": "voi",
              "form": "siete andati"
            },
            {
              "person": "loro",
              "form": "sono andati"
            }
          ]
        },
        {
          "name": "Futuro semplice",
          "forms": [
            {
              "person": "io",
              "form": "andrò"
            },
            {
              "person": "tu",
              "form": "andrai"
            },
            {
              "person": "lui/lei",
              "form": "andrà"
            },
            {
              "person": "noi",
              "form": "andremo"
            },
            {
              "person": "voi",
              "form": "andrete"
            },
            {
              "person": "loro",
              "form": "andranno"
            }
          ]
        }
      ]
    },
    {
      "verb": "venire",
      "english": "to come",
      "note": "irregular; essere auxiliary (participle agrees, masc. shown)",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "io",
              "form": "vengo"
            },
            {
              "person": "tu",
              "form": "vieni"
            },
            {
              "person": "lui/lei",
              "form": "viene"
            },
            {
              "person": "noi",
              "form": "veniamo"
            },
            {
              "person": "voi",
              "form": "venite"
            },
            {
              "person": "loro",
              "form": "vengono"
            }
          ]
        },
        {
          "name": "Passato prossimo",
          "forms": [
            {
              "person": "io",
              "form": "sono venuto"
            },
            {
              "person": "tu",
              "form": "sei venuto"
            },
            {
              "person": "lui/lei",
              "form": "è venuto"
            },
            {
              "person": "noi",
              "form": "siamo venuti"
            },
            {
              "person": "voi",
              "form": "siete venuti"
            },
            {
              "person": "loro",
              "form": "sono venuti"
            }
          ]
        },
        {
          "name": "Futuro semplice",
          "forms": [
            {
              "person": "io",
              "form": "verrò"
            },
            {
              "person": "tu",
              "form": "verrai"
            },
            {
              "person": "lui/lei",
              "form": "verrà"
            },
            {
              "person": "noi",
              "form": "verremo"
            },
            {
              "person": "voi",
              "form": "verrete"
            },
            {
              "person": "loro",
              "form": "verranno"
            }
          ]
        }
      ]
    },
    {
      "verb": "potere",
      "english": "to be able, can",
      "note": "irregular",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "io",
              "form": "posso"
            },
            {
              "person": "tu",
              "form": "puoi"
            },
            {
              "person": "lui/lei",
              "form": "può"
            },
            {
              "person": "noi",
              "form": "possiamo"
            },
            {
              "person": "voi",
              "form": "potete"
            },
            {
              "person": "loro",
              "form": "possono"
            }
          ]
        },
        {
          "name": "Passato prossimo",
          "forms": [
            {
              "person": "io",
              "form": "ho potuto"
            },
            {
              "person": "tu",
              "form": "hai potuto"
            },
            {
              "person": "lui/lei",
              "form": "ha potuto"
            },
            {
              "person": "noi",
              "form": "abbiamo potuto"
            },
            {
              "person": "voi",
              "form": "avete potuto"
            },
            {
              "person": "loro",
              "form": "hanno potuto"
            }
          ]
        },
        {
          "name": "Futuro semplice",
          "forms": [
            {
              "person": "io",
              "form": "potrò"
            },
            {
              "person": "tu",
              "form": "potrai"
            },
            {
              "person": "lui/lei",
              "form": "potrà"
            },
            {
              "person": "noi",
              "form": "potremo"
            },
            {
              "person": "voi",
              "form": "potrete"
            },
            {
              "person": "loro",
              "form": "potranno"
            }
          ]
        }
      ]
    },
    {
      "verb": "volere",
      "english": "to want",
      "note": "irregular",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "io",
              "form": "voglio"
            },
            {
              "person": "tu",
              "form": "vuoi"
            },
            {
              "person": "lui/lei",
              "form": "vuole"
            },
            {
              "person": "noi",
              "form": "vogliamo"
            },
            {
              "person": "voi",
              "form": "volete"
            },
            {
              "person": "loro",
              "form": "vogliono"
            }
          ]
        },
        {
          "name": "Passato prossimo",
          "forms": [
            {
              "person": "io",
              "form": "ho voluto"
            },
            {
              "person": "tu",
              "form": "hai voluto"
            },
            {
              "person": "lui/lei",
              "form": "ha voluto"
            },
            {
              "person": "noi",
              "form": "abbiamo voluto"
            },
            {
              "person": "voi",
              "form": "avete voluto"
            },
            {
              "person": "loro",
              "form": "hanno voluto"
            }
          ]
        },
        {
          "name": "Futuro semplice",
          "forms": [
            {
              "person": "io",
              "form": "vorrò"
            },
            {
              "person": "tu",
              "form": "vorrai"
            },
            {
              "person": "lui/lei",
              "form": "vorrà"
            },
            {
              "person": "noi",
              "form": "vorremo"
            },
            {
              "person": "voi",
              "form": "vorrete"
            },
            {
              "person": "loro",
              "form": "vorranno"
            }
          ]
        }
      ]
    },
    {
      "verb": "dovere",
      "english": "to have to, must",
      "note": "irregular",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "io",
              "form": "devo"
            },
            {
              "person": "tu",
              "form": "devi"
            },
            {
              "person": "lui/lei",
              "form": "deve"
            },
            {
              "person": "noi",
              "form": "dobbiamo"
            },
            {
              "person": "voi",
              "form": "dovete"
            },
            {
              "person": "loro",
              "form": "devono"
            }
          ]
        },
        {
          "name": "Passato prossimo",
          "forms": [
            {
              "person": "io",
              "form": "ho dovuto"
            },
            {
              "person": "tu",
              "form": "hai dovuto"
            },
            {
              "person": "lui/lei",
              "form": "ha dovuto"
            },
            {
              "person": "noi",
              "form": "abbiamo dovuto"
            },
            {
              "person": "voi",
              "form": "avete dovuto"
            },
            {
              "person": "loro",
              "form": "hanno dovuto"
            }
          ]
        },
        {
          "name": "Futuro semplice",
          "forms": [
            {
              "person": "io",
              "form": "dovrò"
            },
            {
              "person": "tu",
              "form": "dovrai"
            },
            {
              "person": "lui/lei",
              "form": "dovrà"
            },
            {
              "person": "noi",
              "form": "dovremo"
            },
            {
              "person": "voi",
              "form": "dovrete"
            },
            {
              "person": "loro",
              "form": "dovranno"
            }
          ]
        }
      ]
    },
    {
      "verb": "dire",
      "english": "to say",
      "note": "irregular",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "io",
              "form": "dico"
            },
            {
              "person": "tu",
              "form": "dici"
            },
            {
              "person": "lui/lei",
              "form": "dice"
            },
            {
              "person": "noi",
              "form": "diciamo"
            },
            {
              "person": "voi",
              "form": "dite"
            },
            {
              "person": "loro",
              "form": "dicono"
            }
          ]
        },
        {
          "name": "Passato prossimo",
          "forms": [
            {
              "person": "io",
              "form": "ho detto"
            },
            {
              "person": "tu",
              "form": "hai detto"
            },
            {
              "person": "lui/lei",
              "form": "ha detto"
            },
            {
              "person": "noi",
              "form": "abbiamo detto"
            },
            {
              "person": "voi",
              "form": "avete detto"
            },
            {
              "person": "loro",
              "form": "hanno detto"
            }
          ]
        },
        {
          "name": "Futuro semplice",
          "forms": [
            {
              "person": "io",
              "form": "dirò"
            },
            {
              "person": "tu",
              "form": "dirai"
            },
            {
              "person": "lui/lei",
              "form": "dirà"
            },
            {
              "person": "noi",
              "form": "diremo"
            },
            {
              "person": "voi",
              "form": "direte"
            },
            {
              "person": "loro",
              "form": "diranno"
            }
          ]
        }
      ]
    },
    {
      "verb": "stare",
      "english": "to stay, to be",
      "note": "irregular; essere auxiliary (participle agrees, masc. shown)",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "io",
              "form": "sto"
            },
            {
              "person": "tu",
              "form": "stai"
            },
            {
              "person": "lui/lei",
              "form": "sta"
            },
            {
              "person": "noi",
              "form": "stiamo"
            },
            {
              "person": "voi",
              "form": "state"
            },
            {
              "person": "loro",
              "form": "stanno"
            }
          ]
        },
        {
          "name": "Passato prossimo",
          "forms": [
            {
              "person": "io",
              "form": "sono stato"
            },
            {
              "person": "tu",
              "form": "sei stato"
            },
            {
              "person": "lui/lei",
              "form": "è stato"
            },
            {
              "person": "noi",
              "form": "siamo stati"
            },
            {
              "person": "voi",
              "form": "siete stati"
            },
            {
              "person": "loro",
              "form": "sono stati"
            }
          ]
        },
        {
          "name": "Futuro semplice",
          "forms": [
            {
              "person": "io",
              "form": "starò"
            },
            {
              "person": "tu",
              "form": "starai"
            },
            {
              "person": "lui/lei",
              "form": "starà"
            },
            {
              "person": "noi",
              "form": "staremo"
            },
            {
              "person": "voi",
              "form": "starete"
            },
            {
              "person": "loro",
              "form": "staranno"
            }
          ]
        }
      ]
    },
    {
      "verb": "sapere",
      "english": "to know",
      "note": "irregular",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "io",
              "form": "so"
            },
            {
              "person": "tu",
              "form": "sai"
            },
            {
              "person": "lui/lei",
              "form": "sa"
            },
            {
              "person": "noi",
              "form": "sappiamo"
            },
            {
              "person": "voi",
              "form": "sapete"
            },
            {
              "person": "loro",
              "form": "sanno"
            }
          ]
        },
        {
          "name": "Passato prossimo",
          "forms": [
            {
              "person": "io",
              "form": "ho saputo"
            },
            {
              "person": "tu",
              "form": "hai saputo"
            },
            {
              "person": "lui/lei",
              "form": "ha saputo"
            },
            {
              "person": "noi",
              "form": "abbiamo saputo"
            },
            {
              "person": "voi",
              "form": "avete saputo"
            },
            {
              "person": "loro",
              "form": "hanno saputo"
            }
          ]
        },
        {
          "name": "Futuro semplice",
          "forms": [
            {
              "person": "io",
              "form": "saprò"
            },
            {
              "person": "tu",
              "form": "saprai"
            },
            {
              "person": "lui/lei",
              "form": "saprà"
            },
            {
              "person": "noi",
              "form": "sapremo"
            },
            {
              "person": "voi",
              "form": "saprete"
            },
            {
              "person": "loro",
              "form": "sapranno"
            }
          ]
        }
      ]
    },
    {
      "verb": "vedere",
      "english": "to see",
      "note": "irregular",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "io",
              "form": "vedo"
            },
            {
              "person": "tu",
              "form": "vedi"
            },
            {
              "person": "lui/lei",
              "form": "vede"
            },
            {
              "person": "noi",
              "form": "vediamo"
            },
            {
              "person": "voi",
              "form": "vedete"
            },
            {
              "person": "loro",
              "form": "vedono"
            }
          ]
        },
        {
          "name": "Passato prossimo",
          "forms": [
            {
              "person": "io",
              "form": "ho visto"
            },
            {
              "person": "tu",
              "form": "hai visto"
            },
            {
              "person": "lui/lei",
              "form": "ha visto"
            },
            {
              "person": "noi",
              "form": "abbiamo visto"
            },
            {
              "person": "voi",
              "form": "avete visto"
            },
            {
              "person": "loro",
              "form": "hanno visto"
            }
          ]
        },
        {
          "name": "Futuro semplice",
          "forms": [
            {
              "person": "io",
              "form": "vedrò"
            },
            {
              "person": "tu",
              "form": "vedrai"
            },
            {
              "person": "lui/lei",
              "form": "vedrà"
            },
            {
              "person": "noi",
              "form": "vedremo"
            },
            {
              "person": "voi",
              "form": "vedrete"
            },
            {
              "person": "loro",
              "form": "vedranno"
            }
          ]
        }
      ]
    }
  ],
  "pt": [
    {
      "verb": "falar",
      "english": "to speak",
      "note": "regular -ar",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "eu",
              "form": "falo"
            },
            {
              "person": "tu",
              "form": "falas"
            },
            {
              "person": "ele/ela",
              "form": "fala"
            },
            {
              "person": "nós",
              "form": "falamos"
            },
            {
              "person": "vós",
              "form": "falais"
            },
            {
              "person": "eles/elas",
              "form": "falam"
            }
          ]
        },
        {
          "name": "Pretérito perfeito",
          "forms": [
            {
              "person": "eu",
              "form": "falei"
            },
            {
              "person": "tu",
              "form": "falaste"
            },
            {
              "person": "ele/ela",
              "form": "falou"
            },
            {
              "person": "nós",
              "form": "falamos"
            },
            {
              "person": "vós",
              "form": "falastes"
            },
            {
              "person": "eles/elas",
              "form": "falaram"
            }
          ]
        },
        {
          "name": "Futuro",
          "forms": [
            {
              "person": "eu",
              "form": "falarei"
            },
            {
              "person": "tu",
              "form": "falarás"
            },
            {
              "person": "ele/ela",
              "form": "falará"
            },
            {
              "person": "nós",
              "form": "falaremos"
            },
            {
              "person": "vós",
              "form": "falareis"
            },
            {
              "person": "eles/elas",
              "form": "falarão"
            }
          ]
        }
      ]
    },
    {
      "verb": "comer",
      "english": "to eat",
      "note": "regular -er",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "eu",
              "form": "como"
            },
            {
              "person": "tu",
              "form": "comes"
            },
            {
              "person": "ele/ela",
              "form": "come"
            },
            {
              "person": "nós",
              "form": "comemos"
            },
            {
              "person": "vós",
              "form": "comeis"
            },
            {
              "person": "eles/elas",
              "form": "comem"
            }
          ]
        },
        {
          "name": "Pretérito perfeito",
          "forms": [
            {
              "person": "eu",
              "form": "comi"
            },
            {
              "person": "tu",
              "form": "comeste"
            },
            {
              "person": "ele/ela",
              "form": "comeu"
            },
            {
              "person": "nós",
              "form": "comemos"
            },
            {
              "person": "vós",
              "form": "comestes"
            },
            {
              "person": "eles/elas",
              "form": "comeram"
            }
          ]
        },
        {
          "name": "Futuro",
          "forms": [
            {
              "person": "eu",
              "form": "comerei"
            },
            {
              "person": "tu",
              "form": "comerás"
            },
            {
              "person": "ele/ela",
              "form": "comerá"
            },
            {
              "person": "nós",
              "form": "comeremos"
            },
            {
              "person": "vós",
              "form": "comereis"
            },
            {
              "person": "eles/elas",
              "form": "comerão"
            }
          ]
        }
      ]
    },
    {
      "verb": "partir",
      "english": "to leave",
      "note": "regular -ir",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "eu",
              "form": "parto"
            },
            {
              "person": "tu",
              "form": "partes"
            },
            {
              "person": "ele/ela",
              "form": "parte"
            },
            {
              "person": "nós",
              "form": "partimos"
            },
            {
              "person": "vós",
              "form": "partis"
            },
            {
              "person": "eles/elas",
              "form": "partem"
            }
          ]
        },
        {
          "name": "Pretérito perfeito",
          "forms": [
            {
              "person": "eu",
              "form": "parti"
            },
            {
              "person": "tu",
              "form": "partiste"
            },
            {
              "person": "ele/ela",
              "form": "partiu"
            },
            {
              "person": "nós",
              "form": "partimos"
            },
            {
              "person": "vós",
              "form": "partistes"
            },
            {
              "person": "eles/elas",
              "form": "partiram"
            }
          ]
        },
        {
          "name": "Futuro",
          "forms": [
            {
              "person": "eu",
              "form": "partirei"
            },
            {
              "person": "tu",
              "form": "partirás"
            },
            {
              "person": "ele/ela",
              "form": "partirá"
            },
            {
              "person": "nós",
              "form": "partiremos"
            },
            {
              "person": "vós",
              "form": "partireis"
            },
            {
              "person": "eles/elas",
              "form": "partirão"
            }
          ]
        }
      ]
    },
    {
      "verb": "ser",
      "english": "to be",
      "note": "irregular (permanent)",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "eu",
              "form": "sou"
            },
            {
              "person": "tu",
              "form": "és"
            },
            {
              "person": "ele/ela",
              "form": "é"
            },
            {
              "person": "nós",
              "form": "somos"
            },
            {
              "person": "vós",
              "form": "sois"
            },
            {
              "person": "eles/elas",
              "form": "são"
            }
          ]
        },
        {
          "name": "Pretérito perfeito",
          "forms": [
            {
              "person": "eu",
              "form": "fui"
            },
            {
              "person": "tu",
              "form": "foste"
            },
            {
              "person": "ele/ela",
              "form": "foi"
            },
            {
              "person": "nós",
              "form": "fomos"
            },
            {
              "person": "vós",
              "form": "fostes"
            },
            {
              "person": "eles/elas",
              "form": "foram"
            }
          ]
        },
        {
          "name": "Futuro",
          "forms": [
            {
              "person": "eu",
              "form": "serei"
            },
            {
              "person": "tu",
              "form": "serás"
            },
            {
              "person": "ele/ela",
              "form": "será"
            },
            {
              "person": "nós",
              "form": "seremos"
            },
            {
              "person": "vós",
              "form": "sereis"
            },
            {
              "person": "eles/elas",
              "form": "serão"
            }
          ]
        }
      ]
    },
    {
      "verb": "estar",
      "english": "to be",
      "note": "irregular (state/location)",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "eu",
              "form": "estou"
            },
            {
              "person": "tu",
              "form": "estás"
            },
            {
              "person": "ele/ela",
              "form": "está"
            },
            {
              "person": "nós",
              "form": "estamos"
            },
            {
              "person": "vós",
              "form": "estais"
            },
            {
              "person": "eles/elas",
              "form": "estão"
            }
          ]
        },
        {
          "name": "Pretérito perfeito",
          "forms": [
            {
              "person": "eu",
              "form": "estive"
            },
            {
              "person": "tu",
              "form": "estiveste"
            },
            {
              "person": "ele/ela",
              "form": "esteve"
            },
            {
              "person": "nós",
              "form": "estivemos"
            },
            {
              "person": "vós",
              "form": "estivestes"
            },
            {
              "person": "eles/elas",
              "form": "estiveram"
            }
          ]
        },
        {
          "name": "Futuro",
          "forms": [
            {
              "person": "eu",
              "form": "estarei"
            },
            {
              "person": "tu",
              "form": "estarás"
            },
            {
              "person": "ele/ela",
              "form": "estará"
            },
            {
              "person": "nós",
              "form": "estaremos"
            },
            {
              "person": "vós",
              "form": "estareis"
            },
            {
              "person": "eles/elas",
              "form": "estarão"
            }
          ]
        }
      ]
    },
    {
      "verb": "ter",
      "english": "to have",
      "note": "irregular",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "eu",
              "form": "tenho"
            },
            {
              "person": "tu",
              "form": "tens"
            },
            {
              "person": "ele/ela",
              "form": "tem"
            },
            {
              "person": "nós",
              "form": "temos"
            },
            {
              "person": "vós",
              "form": "tendes"
            },
            {
              "person": "eles/elas",
              "form": "têm"
            }
          ]
        },
        {
          "name": "Pretérito perfeito",
          "forms": [
            {
              "person": "eu",
              "form": "tive"
            },
            {
              "person": "tu",
              "form": "tiveste"
            },
            {
              "person": "ele/ela",
              "form": "teve"
            },
            {
              "person": "nós",
              "form": "tivemos"
            },
            {
              "person": "vós",
              "form": "tivestes"
            },
            {
              "person": "eles/elas",
              "form": "tiveram"
            }
          ]
        },
        {
          "name": "Futuro",
          "forms": [
            {
              "person": "eu",
              "form": "terei"
            },
            {
              "person": "tu",
              "form": "terás"
            },
            {
              "person": "ele/ela",
              "form": "terá"
            },
            {
              "person": "nós",
              "form": "teremos"
            },
            {
              "person": "vós",
              "form": "tereis"
            },
            {
              "person": "eles/elas",
              "form": "terão"
            }
          ]
        }
      ]
    },
    {
      "verb": "fazer",
      "english": "to do, to make",
      "note": "irregular",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "eu",
              "form": "faço"
            },
            {
              "person": "tu",
              "form": "fazes"
            },
            {
              "person": "ele/ela",
              "form": "faz"
            },
            {
              "person": "nós",
              "form": "fazemos"
            },
            {
              "person": "vós",
              "form": "fazeis"
            },
            {
              "person": "eles/elas",
              "form": "fazem"
            }
          ]
        },
        {
          "name": "Pretérito perfeito",
          "forms": [
            {
              "person": "eu",
              "form": "fiz"
            },
            {
              "person": "tu",
              "form": "fizeste"
            },
            {
              "person": "ele/ela",
              "form": "fez"
            },
            {
              "person": "nós",
              "form": "fizemos"
            },
            {
              "person": "vós",
              "form": "fizestes"
            },
            {
              "person": "eles/elas",
              "form": "fizeram"
            }
          ]
        },
        {
          "name": "Futuro",
          "forms": [
            {
              "person": "eu",
              "form": "farei"
            },
            {
              "person": "tu",
              "form": "farás"
            },
            {
              "person": "ele/ela",
              "form": "fará"
            },
            {
              "person": "nós",
              "form": "faremos"
            },
            {
              "person": "vós",
              "form": "fareis"
            },
            {
              "person": "eles/elas",
              "form": "farão"
            }
          ]
        }
      ]
    },
    {
      "verb": "ir",
      "english": "to go",
      "note": "irregular",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "eu",
              "form": "vou"
            },
            {
              "person": "tu",
              "form": "vais"
            },
            {
              "person": "ele/ela",
              "form": "vai"
            },
            {
              "person": "nós",
              "form": "vamos"
            },
            {
              "person": "vós",
              "form": "ides"
            },
            {
              "person": "eles/elas",
              "form": "vão"
            }
          ]
        },
        {
          "name": "Pretérito perfeito",
          "forms": [
            {
              "person": "eu",
              "form": "fui"
            },
            {
              "person": "tu",
              "form": "foste"
            },
            {
              "person": "ele/ela",
              "form": "foi"
            },
            {
              "person": "nós",
              "form": "fomos"
            },
            {
              "person": "vós",
              "form": "fostes"
            },
            {
              "person": "eles/elas",
              "form": "foram"
            }
          ]
        },
        {
          "name": "Futuro",
          "forms": [
            {
              "person": "eu",
              "form": "irei"
            },
            {
              "person": "tu",
              "form": "irás"
            },
            {
              "person": "ele/ela",
              "form": "irá"
            },
            {
              "person": "nós",
              "form": "iremos"
            },
            {
              "person": "vós",
              "form": "ireis"
            },
            {
              "person": "eles/elas",
              "form": "irão"
            }
          ]
        }
      ]
    },
    {
      "verb": "poder",
      "english": "to be able, can",
      "note": "irregular",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "eu",
              "form": "posso"
            },
            {
              "person": "tu",
              "form": "podes"
            },
            {
              "person": "ele/ela",
              "form": "pode"
            },
            {
              "person": "nós",
              "form": "podemos"
            },
            {
              "person": "vós",
              "form": "podeis"
            },
            {
              "person": "eles/elas",
              "form": "podem"
            }
          ]
        },
        {
          "name": "Pretérito perfeito",
          "forms": [
            {
              "person": "eu",
              "form": "pude"
            },
            {
              "person": "tu",
              "form": "pudeste"
            },
            {
              "person": "ele/ela",
              "form": "pôde"
            },
            {
              "person": "nós",
              "form": "pudemos"
            },
            {
              "person": "vós",
              "form": "pudestes"
            },
            {
              "person": "eles/elas",
              "form": "puderam"
            }
          ]
        },
        {
          "name": "Futuro",
          "forms": [
            {
              "person": "eu",
              "form": "poderei"
            },
            {
              "person": "tu",
              "form": "poderás"
            },
            {
              "person": "ele/ela",
              "form": "poderá"
            },
            {
              "person": "nós",
              "form": "poderemos"
            },
            {
              "person": "vós",
              "form": "podereis"
            },
            {
              "person": "eles/elas",
              "form": "poderão"
            }
          ]
        }
      ]
    },
    {
      "verb": "querer",
      "english": "to want",
      "note": "irregular",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "eu",
              "form": "quero"
            },
            {
              "person": "tu",
              "form": "queres"
            },
            {
              "person": "ele/ela",
              "form": "quer"
            },
            {
              "person": "nós",
              "form": "queremos"
            },
            {
              "person": "vós",
              "form": "quereis"
            },
            {
              "person": "eles/elas",
              "form": "querem"
            }
          ]
        },
        {
          "name": "Pretérito perfeito",
          "forms": [
            {
              "person": "eu",
              "form": "quis"
            },
            {
              "person": "tu",
              "form": "quiseste"
            },
            {
              "person": "ele/ela",
              "form": "quis"
            },
            {
              "person": "nós",
              "form": "quisemos"
            },
            {
              "person": "vós",
              "form": "quisestes"
            },
            {
              "person": "eles/elas",
              "form": "quiseram"
            }
          ]
        },
        {
          "name": "Futuro",
          "forms": [
            {
              "person": "eu",
              "form": "quererei"
            },
            {
              "person": "tu",
              "form": "quererás"
            },
            {
              "person": "ele/ela",
              "form": "quererá"
            },
            {
              "person": "nós",
              "form": "quereremos"
            },
            {
              "person": "vós",
              "form": "querereis"
            },
            {
              "person": "eles/elas",
              "form": "quererão"
            }
          ]
        }
      ]
    },
    {
      "verb": "dizer",
      "english": "to say",
      "note": "irregular",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "eu",
              "form": "digo"
            },
            {
              "person": "tu",
              "form": "dizes"
            },
            {
              "person": "ele/ela",
              "form": "diz"
            },
            {
              "person": "nós",
              "form": "dizemos"
            },
            {
              "person": "vós",
              "form": "dizeis"
            },
            {
              "person": "eles/elas",
              "form": "dizem"
            }
          ]
        },
        {
          "name": "Pretérito perfeito",
          "forms": [
            {
              "person": "eu",
              "form": "disse"
            },
            {
              "person": "tu",
              "form": "disseste"
            },
            {
              "person": "ele/ela",
              "form": "disse"
            },
            {
              "person": "nós",
              "form": "dissemos"
            },
            {
              "person": "vós",
              "form": "dissestes"
            },
            {
              "person": "eles/elas",
              "form": "disseram"
            }
          ]
        },
        {
          "name": "Futuro",
          "forms": [
            {
              "person": "eu",
              "form": "direi"
            },
            {
              "person": "tu",
              "form": "dirás"
            },
            {
              "person": "ele/ela",
              "form": "dirá"
            },
            {
              "person": "nós",
              "form": "diremos"
            },
            {
              "person": "vós",
              "form": "direis"
            },
            {
              "person": "eles/elas",
              "form": "dirão"
            }
          ]
        }
      ]
    },
    {
      "verb": "ver",
      "english": "to see",
      "note": "irregular",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "eu",
              "form": "vejo"
            },
            {
              "person": "tu",
              "form": "vês"
            },
            {
              "person": "ele/ela",
              "form": "vê"
            },
            {
              "person": "nós",
              "form": "vemos"
            },
            {
              "person": "vós",
              "form": "vedes"
            },
            {
              "person": "eles/elas",
              "form": "veem"
            }
          ]
        },
        {
          "name": "Pretérito perfeito",
          "forms": [
            {
              "person": "eu",
              "form": "vi"
            },
            {
              "person": "tu",
              "form": "viste"
            },
            {
              "person": "ele/ela",
              "form": "viu"
            },
            {
              "person": "nós",
              "form": "vimos"
            },
            {
              "person": "vós",
              "form": "vistes"
            },
            {
              "person": "eles/elas",
              "form": "viram"
            }
          ]
        },
        {
          "name": "Futuro",
          "forms": [
            {
              "person": "eu",
              "form": "verei"
            },
            {
              "person": "tu",
              "form": "verás"
            },
            {
              "person": "ele/ela",
              "form": "verá"
            },
            {
              "person": "nós",
              "form": "veremos"
            },
            {
              "person": "vós",
              "form": "vereis"
            },
            {
              "person": "eles/elas",
              "form": "verão"
            }
          ]
        }
      ]
    },
    {
      "verb": "dar",
      "english": "to give",
      "note": "irregular",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "eu",
              "form": "dou"
            },
            {
              "person": "tu",
              "form": "dás"
            },
            {
              "person": "ele/ela",
              "form": "dá"
            },
            {
              "person": "nós",
              "form": "damos"
            },
            {
              "person": "vós",
              "form": "dais"
            },
            {
              "person": "eles/elas",
              "form": "dão"
            }
          ]
        },
        {
          "name": "Pretérito perfeito",
          "forms": [
            {
              "person": "eu",
              "form": "dei"
            },
            {
              "person": "tu",
              "form": "deste"
            },
            {
              "person": "ele/ela",
              "form": "deu"
            },
            {
              "person": "nós",
              "form": "demos"
            },
            {
              "person": "vós",
              "form": "destes"
            },
            {
              "person": "eles/elas",
              "form": "deram"
            }
          ]
        },
        {
          "name": "Futuro",
          "forms": [
            {
              "person": "eu",
              "form": "darei"
            },
            {
              "person": "tu",
              "form": "darás"
            },
            {
              "person": "ele/ela",
              "form": "dará"
            },
            {
              "person": "nós",
              "form": "daremos"
            },
            {
              "person": "vós",
              "form": "dareis"
            },
            {
              "person": "eles/elas",
              "form": "darão"
            }
          ]
        }
      ]
    },
    {
      "verb": "saber",
      "english": "to know",
      "note": "irregular",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "eu",
              "form": "sei"
            },
            {
              "person": "tu",
              "form": "sabes"
            },
            {
              "person": "ele/ela",
              "form": "sabe"
            },
            {
              "person": "nós",
              "form": "sabemos"
            },
            {
              "person": "vós",
              "form": "sabeis"
            },
            {
              "person": "eles/elas",
              "form": "sabem"
            }
          ]
        },
        {
          "name": "Pretérito perfeito",
          "forms": [
            {
              "person": "eu",
              "form": "soube"
            },
            {
              "person": "tu",
              "form": "soubeste"
            },
            {
              "person": "ele/ela",
              "form": "soube"
            },
            {
              "person": "nós",
              "form": "soubemos"
            },
            {
              "person": "vós",
              "form": "soubestes"
            },
            {
              "person": "eles/elas",
              "form": "souberam"
            }
          ]
        },
        {
          "name": "Futuro",
          "forms": [
            {
              "person": "eu",
              "form": "saberei"
            },
            {
              "person": "tu",
              "form": "saberás"
            },
            {
              "person": "ele/ela",
              "form": "saberá"
            },
            {
              "person": "nós",
              "form": "saberemos"
            },
            {
              "person": "vós",
              "form": "sabereis"
            },
            {
              "person": "eles/elas",
              "form": "saberão"
            }
          ]
        }
      ]
    },
    {
      "verb": "vir",
      "english": "to come",
      "note": "irregular",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "eu",
              "form": "venho"
            },
            {
              "person": "tu",
              "form": "vens"
            },
            {
              "person": "ele/ela",
              "form": "vem"
            },
            {
              "person": "nós",
              "form": "vimos"
            },
            {
              "person": "vós",
              "form": "vindes"
            },
            {
              "person": "eles/elas",
              "form": "vêm"
            }
          ]
        },
        {
          "name": "Pretérito perfeito",
          "forms": [
            {
              "person": "eu",
              "form": "vim"
            },
            {
              "person": "tu",
              "form": "vieste"
            },
            {
              "person": "ele/ela",
              "form": "veio"
            },
            {
              "person": "nós",
              "form": "viemos"
            },
            {
              "person": "vós",
              "form": "viestes"
            },
            {
              "person": "eles/elas",
              "form": "vieram"
            }
          ]
        },
        {
          "name": "Futuro",
          "forms": [
            {
              "person": "eu",
              "form": "virei"
            },
            {
              "person": "tu",
              "form": "virás"
            },
            {
              "person": "ele/ela",
              "form": "virá"
            },
            {
              "person": "nós",
              "form": "viremos"
            },
            {
              "person": "vós",
              "form": "vireis"
            },
            {
              "person": "eles/elas",
              "form": "virão"
            }
          ]
        }
      ]
    },
    {
      "verb": "pôr",
      "english": "to put",
      "note": "irregular",
      "tenses": [
        {
          "name": "Presente",
          "forms": [
            {
              "person": "eu",
              "form": "ponho"
            },
            {
              "person": "tu",
              "form": "pões"
            },
            {
              "person": "ele/ela",
              "form": "põe"
            },
            {
              "person": "nós",
              "form": "pomos"
            },
            {
              "person": "vós",
              "form": "pondes"
            },
            {
              "person": "eles/elas",
              "form": "põem"
            }
          ]
        },
        {
          "name": "Pretérito perfeito",
          "forms": [
            {
              "person": "eu",
              "form": "pus"
            },
            {
              "person": "tu",
              "form": "puseste"
            },
            {
              "person": "ele/ela",
              "form": "pôs"
            },
            {
              "person": "nós",
              "form": "pusemos"
            },
            {
              "person": "vós",
              "form": "pusestes"
            },
            {
              "person": "eles/elas",
              "form": "puseram"
            }
          ]
        },
        {
          "name": "Futuro",
          "forms": [
            {
              "person": "eu",
              "form": "porei"
            },
            {
              "person": "tu",
              "form": "porás"
            },
            {
              "person": "ele/ela",
              "form": "porá"
            },
            {
              "person": "nós",
              "form": "poremos"
            },
            {
              "person": "vós",
              "form": "poreis"
            },
            {
              "person": "eles/elas",
              "form": "porão"
            }
          ]
        }
      ]
    }
  ],
  "ru": [
    {
      "verb": "читать",
      "english": "to read",
      "note": "imperfective",
      "tenses": [
        {
          "name": "Настоящее (Present)",
          "forms": [
            {
              "person": "я",
              "form": "читаю"
            },
            {
              "person": "ты",
              "form": "читаешь"
            },
            {
              "person": "он/она/оно",
              "form": "читает"
            },
            {
              "person": "мы",
              "form": "читаем"
            },
            {
              "person": "вы",
              "form": "читаете"
            },
            {
              "person": "они",
              "form": "читают"
            }
          ]
        },
        {
          "name": "Прошедшее (Past)",
          "forms": [
            {
              "person": "он",
              "form": "читал"
            },
            {
              "person": "она",
              "form": "читала"
            },
            {
              "person": "оно",
              "form": "читало"
            },
            {
              "person": "они",
              "form": "читали"
            }
          ]
        },
        {
          "name": "Будущее (Future)",
          "forms": [
            {
              "person": "я",
              "form": "буду читать"
            },
            {
              "person": "ты",
              "form": "будешь читать"
            },
            {
              "person": "он/она/оно",
              "form": "будет читать"
            },
            {
              "person": "мы",
              "form": "будем читать"
            },
            {
              "person": "вы",
              "form": "будете читать"
            },
            {
              "person": "они",
              "form": "будут читать"
            }
          ]
        }
      ]
    },
    {
      "verb": "писать",
      "english": "to write",
      "note": "imperfective (с>ш stem)",
      "tenses": [
        {
          "name": "Настоящее (Present)",
          "forms": [
            {
              "person": "я",
              "form": "пишу"
            },
            {
              "person": "ты",
              "form": "пишешь"
            },
            {
              "person": "он/она/оно",
              "form": "пишет"
            },
            {
              "person": "мы",
              "form": "пишем"
            },
            {
              "person": "вы",
              "form": "пишете"
            },
            {
              "person": "они",
              "form": "пишут"
            }
          ]
        },
        {
          "name": "Прошедшее (Past)",
          "forms": [
            {
              "person": "он",
              "form": "писал"
            },
            {
              "person": "она",
              "form": "писала"
            },
            {
              "person": "оно",
              "form": "писало"
            },
            {
              "person": "они",
              "form": "писали"
            }
          ]
        },
        {
          "name": "Будущее (Future)",
          "forms": [
            {
              "person": "я",
              "form": "буду писать"
            },
            {
              "person": "ты",
              "form": "будешь писать"
            },
            {
              "person": "он/она/оно",
              "form": "будет писать"
            },
            {
              "person": "мы",
              "form": "будем писать"
            },
            {
              "person": "вы",
              "form": "будете писать"
            },
            {
              "person": "они",
              "form": "будут писать"
            }
          ]
        }
      ]
    },
    {
      "verb": "говорить",
      "english": "to speak",
      "note": "imperfective (2nd conj.)",
      "tenses": [
        {
          "name": "Настоящее (Present)",
          "forms": [
            {
              "person": "я",
              "form": "говорю"
            },
            {
              "person": "ты",
              "form": "говоришь"
            },
            {
              "person": "он/она/оно",
              "form": "говорит"
            },
            {
              "person": "мы",
              "form": "говорим"
            },
            {
              "person": "вы",
              "form": "говорите"
            },
            {
              "person": "они",
              "form": "говорят"
            }
          ]
        },
        {
          "name": "Прошедшее (Past)",
          "forms": [
            {
              "person": "он",
              "form": "говорил"
            },
            {
              "person": "она",
              "form": "говорила"
            },
            {
              "person": "оно",
              "form": "говорило"
            },
            {
              "person": "они",
              "form": "говорили"
            }
          ]
        },
        {
          "name": "Будущее (Future)",
          "forms": [
            {
              "person": "я",
              "form": "буду говорить"
            },
            {
              "person": "ты",
              "form": "будешь говорить"
            },
            {
              "person": "он/она/оно",
              "form": "будет говорить"
            },
            {
              "person": "мы",
              "form": "будем говорить"
            },
            {
              "person": "вы",
              "form": "будете говорить"
            },
            {
              "person": "они",
              "form": "будут говорить"
            }
          ]
        }
      ]
    },
    {
      "verb": "делать",
      "english": "to do, to make",
      "note": "imperfective",
      "tenses": [
        {
          "name": "Настоящее (Present)",
          "forms": [
            {
              "person": "я",
              "form": "делаю"
            },
            {
              "person": "ты",
              "form": "делаешь"
            },
            {
              "person": "он/она/оно",
              "form": "делает"
            },
            {
              "person": "мы",
              "form": "делаем"
            },
            {
              "person": "вы",
              "form": "делаете"
            },
            {
              "person": "они",
              "form": "делают"
            }
          ]
        },
        {
          "name": "Прошедшее (Past)",
          "forms": [
            {
              "person": "он",
              "form": "делал"
            },
            {
              "person": "она",
              "form": "делала"
            },
            {
              "person": "оно",
              "form": "делало"
            },
            {
              "person": "они",
              "form": "делали"
            }
          ]
        },
        {
          "name": "Будущее (Future)",
          "forms": [
            {
              "person": "я",
              "form": "буду делать"
            },
            {
              "person": "ты",
              "form": "будешь делать"
            },
            {
              "person": "он/она/оно",
              "form": "будет делать"
            },
            {
              "person": "мы",
              "form": "будем делать"
            },
            {
              "person": "вы",
              "form": "будете делать"
            },
            {
              "person": "они",
              "form": "будут делать"
            }
          ]
        }
      ]
    },
    {
      "verb": "знать",
      "english": "to know",
      "note": "imperfective",
      "tenses": [
        {
          "name": "Настоящее (Present)",
          "forms": [
            {
              "person": "я",
              "form": "знаю"
            },
            {
              "person": "ты",
              "form": "знаешь"
            },
            {
              "person": "он/она/оно",
              "form": "знает"
            },
            {
              "person": "мы",
              "form": "знаем"
            },
            {
              "person": "вы",
              "form": "знаете"
            },
            {
              "person": "они",
              "form": "знают"
            }
          ]
        },
        {
          "name": "Прошедшее (Past)",
          "forms": [
            {
              "person": "он",
              "form": "знал"
            },
            {
              "person": "она",
              "form": "знала"
            },
            {
              "person": "оно",
              "form": "знало"
            },
            {
              "person": "они",
              "form": "знали"
            }
          ]
        },
        {
          "name": "Будущее (Future)",
          "forms": [
            {
              "person": "я",
              "form": "буду знать"
            },
            {
              "person": "ты",
              "form": "будешь знать"
            },
            {
              "person": "он/она/оно",
              "form": "будет знать"
            },
            {
              "person": "мы",
              "form": "будем знать"
            },
            {
              "person": "вы",
              "form": "будете знать"
            },
            {
              "person": "они",
              "form": "будут знать"
            }
          ]
        }
      ]
    },
    {
      "verb": "жить",
      "english": "to live",
      "note": "imperfective (жив- stem)",
      "tenses": [
        {
          "name": "Настоящее (Present)",
          "forms": [
            {
              "person": "я",
              "form": "живу"
            },
            {
              "person": "ты",
              "form": "живёшь"
            },
            {
              "person": "он/она/оно",
              "form": "живёт"
            },
            {
              "person": "мы",
              "form": "живём"
            },
            {
              "person": "вы",
              "form": "живёте"
            },
            {
              "person": "они",
              "form": "живут"
            }
          ]
        },
        {
          "name": "Прошедшее (Past)",
          "forms": [
            {
              "person": "он",
              "form": "жил"
            },
            {
              "person": "она",
              "form": "жила"
            },
            {
              "person": "оно",
              "form": "жило"
            },
            {
              "person": "они",
              "form": "жили"
            }
          ]
        },
        {
          "name": "Будущее (Future)",
          "forms": [
            {
              "person": "я",
              "form": "буду жить"
            },
            {
              "person": "ты",
              "form": "будешь жить"
            },
            {
              "person": "он/она/оно",
              "form": "будет жить"
            },
            {
              "person": "мы",
              "form": "будем жить"
            },
            {
              "person": "вы",
              "form": "будете жить"
            },
            {
              "person": "они",
              "form": "будут жить"
            }
          ]
        }
      ]
    },
    {
      "verb": "идти",
      "english": "to go (on foot)",
      "note": "imperfective; suppletive past",
      "tenses": [
        {
          "name": "Настоящее (Present)",
          "forms": [
            {
              "person": "я",
              "form": "иду"
            },
            {
              "person": "ты",
              "form": "идёшь"
            },
            {
              "person": "он/она/оно",
              "form": "идёт"
            },
            {
              "person": "мы",
              "form": "идём"
            },
            {
              "person": "вы",
              "form": "идёте"
            },
            {
              "person": "они",
              "form": "идут"
            }
          ]
        },
        {
          "name": "Прошедшее (Past)",
          "forms": [
            {
              "person": "он",
              "form": "шёл"
            },
            {
              "person": "она",
              "form": "шла"
            },
            {
              "person": "оно",
              "form": "шло"
            },
            {
              "person": "они",
              "form": "шли"
            }
          ]
        },
        {
          "name": "Будущее (Future)",
          "forms": [
            {
              "person": "я",
              "form": "буду идти"
            },
            {
              "person": "ты",
              "form": "будешь идти"
            },
            {
              "person": "он/она/оно",
              "form": "будет идти"
            },
            {
              "person": "мы",
              "form": "будем идти"
            },
            {
              "person": "вы",
              "form": "будете идти"
            },
            {
              "person": "они",
              "form": "будут идти"
            }
          ]
        }
      ]
    },
    {
      "verb": "быть",
      "english": "to be",
      "note": "special: no present in modern Russian (есть invariant); simple future",
      "tenses": [
        {
          "name": "Настоящее (Present)",
          "forms": [
            {
              "person": "я",
              "form": "есть"
            },
            {
              "person": "ты",
              "form": "есть"
            },
            {
              "person": "он/она/оно",
              "form": "есть"
            },
            {
              "person": "мы",
              "form": "есть"
            },
            {
              "person": "вы",
              "form": "есть"
            },
            {
              "person": "они",
              "form": "есть"
            }
          ]
        },
        {
          "name": "Прошедшее (Past)",
          "forms": [
            {
              "person": "он",
              "form": "был"
            },
            {
              "person": "она",
              "form": "была"
            },
            {
              "person": "оно",
              "form": "было"
            },
            {
              "person": "они",
              "form": "были"
            }
          ]
        },
        {
          "name": "Будущее (Future)",
          "forms": [
            {
              "person": "я",
              "form": "буду"
            },
            {
              "person": "ты",
              "form": "будешь"
            },
            {
              "person": "он/она/оно",
              "form": "будет"
            },
            {
              "person": "мы",
              "form": "будем"
            },
            {
              "person": "вы",
              "form": "будете"
            },
            {
              "person": "они",
              "form": "будут"
            }
          ]
        }
      ]
    },
    {
      "verb": "хотеть",
      "english": "to want",
      "note": "irregular (mixed conjugation)",
      "tenses": [
        {
          "name": "Настоящее (Present)",
          "forms": [
            {
              "person": "я",
              "form": "хочу"
            },
            {
              "person": "ты",
              "form": "хочешь"
            },
            {
              "person": "он/она/оно",
              "form": "хочет"
            },
            {
              "person": "мы",
              "form": "хотим"
            },
            {
              "person": "вы",
              "form": "хотите"
            },
            {
              "person": "они",
              "form": "хотят"
            }
          ]
        },
        {
          "name": "Прошедшее (Past)",
          "forms": [
            {
              "person": "он",
              "form": "хотел"
            },
            {
              "person": "она",
              "form": "хотела"
            },
            {
              "person": "оно",
              "form": "хотело"
            },
            {
              "person": "они",
              "form": "хотели"
            }
          ]
        },
        {
          "name": "Будущее (Future)",
          "forms": [
            {
              "person": "я",
              "form": "буду хотеть"
            },
            {
              "person": "ты",
              "form": "будешь хотеть"
            },
            {
              "person": "он/она/оно",
              "form": "будет хотеть"
            },
            {
              "person": "мы",
              "form": "будем хотеть"
            },
            {
              "person": "вы",
              "form": "будете хотеть"
            },
            {
              "person": "они",
              "form": "будут хотеть"
            }
          ]
        }
      ]
    },
    {
      "verb": "мочь",
      "english": "to be able, can",
      "note": "irregular (г>ж stem)",
      "tenses": [
        {
          "name": "Настоящее (Present)",
          "forms": [
            {
              "person": "я",
              "form": "могу"
            },
            {
              "person": "ты",
              "form": "можешь"
            },
            {
              "person": "он/она/оно",
              "form": "может"
            },
            {
              "person": "мы",
              "form": "можем"
            },
            {
              "person": "вы",
              "form": "можете"
            },
            {
              "person": "они",
              "form": "могут"
            }
          ]
        },
        {
          "name": "Прошедшее (Past)",
          "forms": [
            {
              "person": "он",
              "form": "мог"
            },
            {
              "person": "она",
              "form": "могла"
            },
            {
              "person": "оно",
              "form": "могло"
            },
            {
              "person": "они",
              "form": "могли"
            }
          ]
        },
        {
          "name": "Будущее (Future)",
          "forms": [
            {
              "person": "я",
              "form": "буду мочь"
            },
            {
              "person": "ты",
              "form": "будешь мочь"
            },
            {
              "person": "он/она/оно",
              "form": "будет мочь"
            },
            {
              "person": "мы",
              "form": "будем мочь"
            },
            {
              "person": "вы",
              "form": "будете мочь"
            },
            {
              "person": "они",
              "form": "будут мочь"
            }
          ]
        }
      ]
    },
    {
      "verb": "видеть",
      "english": "to see",
      "note": "imperfective (2nd conj., д>ж in 1sg)",
      "tenses": [
        {
          "name": "Настоящее (Present)",
          "forms": [
            {
              "person": "я",
              "form": "вижу"
            },
            {
              "person": "ты",
              "form": "видишь"
            },
            {
              "person": "он/она/оно",
              "form": "видит"
            },
            {
              "person": "мы",
              "form": "видим"
            },
            {
              "person": "вы",
              "form": "видите"
            },
            {
              "person": "они",
              "form": "видят"
            }
          ]
        },
        {
          "name": "Прошедшее (Past)",
          "forms": [
            {
              "person": "он",
              "form": "видел"
            },
            {
              "person": "она",
              "form": "видела"
            },
            {
              "person": "оно",
              "form": "видело"
            },
            {
              "person": "они",
              "form": "видели"
            }
          ]
        },
        {
          "name": "Будущее (Future)",
          "forms": [
            {
              "person": "я",
              "form": "буду видеть"
            },
            {
              "person": "ты",
              "form": "будешь видеть"
            },
            {
              "person": "он/она/оно",
              "form": "будет видеть"
            },
            {
              "person": "мы",
              "form": "будем видеть"
            },
            {
              "person": "вы",
              "form": "будете видеть"
            },
            {
              "person": "они",
              "form": "будут видеть"
            }
          ]
        }
      ]
    },
    {
      "verb": "любить",
      "english": "to love",
      "note": "imperfective (2nd conj., epenthetic л in 1sg)",
      "tenses": [
        {
          "name": "Настоящее (Present)",
          "forms": [
            {
              "person": "я",
              "form": "люблю"
            },
            {
              "person": "ты",
              "form": "любишь"
            },
            {
              "person": "он/она/оно",
              "form": "любит"
            },
            {
              "person": "мы",
              "form": "любим"
            },
            {
              "person": "вы",
              "form": "любите"
            },
            {
              "person": "они",
              "form": "любят"
            }
          ]
        },
        {
          "name": "Прошедшее (Past)",
          "forms": [
            {
              "person": "он",
              "form": "любил"
            },
            {
              "person": "она",
              "form": "любила"
            },
            {
              "person": "оно",
              "form": "любило"
            },
            {
              "person": "они",
              "form": "любили"
            }
          ]
        },
        {
          "name": "Будущее (Future)",
          "forms": [
            {
              "person": "я",
              "form": "буду любить"
            },
            {
              "person": "ты",
              "form": "будешь любить"
            },
            {
              "person": "он/она/оно",
              "form": "будет любить"
            },
            {
              "person": "мы",
              "form": "будем любить"
            },
            {
              "person": "вы",
              "form": "будете любить"
            },
            {
              "person": "они",
              "form": "будут любить"
            }
          ]
        }
      ]
    },
    {
      "verb": "работать",
      "english": "to work",
      "note": "imperfective",
      "tenses": [
        {
          "name": "Настоящее (Present)",
          "forms": [
            {
              "person": "я",
              "form": "работаю"
            },
            {
              "person": "ты",
              "form": "работаешь"
            },
            {
              "person": "он/она/оно",
              "form": "работает"
            },
            {
              "person": "мы",
              "form": "работаем"
            },
            {
              "person": "вы",
              "form": "работаете"
            },
            {
              "person": "они",
              "form": "работают"
            }
          ]
        },
        {
          "name": "Прошедшее (Past)",
          "forms": [
            {
              "person": "он",
              "form": "работал"
            },
            {
              "person": "она",
              "form": "работала"
            },
            {
              "person": "оно",
              "form": "работало"
            },
            {
              "person": "они",
              "form": "работали"
            }
          ]
        },
        {
          "name": "Будущее (Future)",
          "forms": [
            {
              "person": "я",
              "form": "буду работать"
            },
            {
              "person": "ты",
              "form": "будешь работать"
            },
            {
              "person": "он/она/оно",
              "form": "будет работать"
            },
            {
              "person": "мы",
              "form": "будем работать"
            },
            {
              "person": "вы",
              "form": "будете работать"
            },
            {
              "person": "они",
              "form": "будут работать"
            }
          ]
        }
      ]
    },
    {
      "verb": "понимать",
      "english": "to understand",
      "note": "imperfective",
      "tenses": [
        {
          "name": "Настоящее (Present)",
          "forms": [
            {
              "person": "я",
              "form": "понимаю"
            },
            {
              "person": "ты",
              "form": "понимаешь"
            },
            {
              "person": "он/она/оно",
              "form": "понимает"
            },
            {
              "person": "мы",
              "form": "понимаем"
            },
            {
              "person": "вы",
              "form": "понимаете"
            },
            {
              "person": "они",
              "form": "понимают"
            }
          ]
        },
        {
          "name": "Прошедшее (Past)",
          "forms": [
            {
              "person": "он",
              "form": "понимал"
            },
            {
              "person": "она",
              "form": "понимала"
            },
            {
              "person": "оно",
              "form": "понимало"
            },
            {
              "person": "они",
              "form": "понимали"
            }
          ]
        },
        {
          "name": "Будущее (Future)",
          "forms": [
            {
              "person": "я",
              "form": "буду понимать"
            },
            {
              "person": "ты",
              "form": "будешь понимать"
            },
            {
              "person": "он/она/оно",
              "form": "будет понимать"
            },
            {
              "person": "мы",
              "form": "будем понимать"
            },
            {
              "person": "вы",
              "form": "будете понимать"
            },
            {
              "person": "они",
              "form": "будут понимать"
            }
          ]
        }
      ]
    },
    {
      "verb": "думать",
      "english": "to think",
      "note": "imperfective",
      "tenses": [
        {
          "name": "Настоящее (Present)",
          "forms": [
            {
              "person": "я",
              "form": "думаю"
            },
            {
              "person": "ты",
              "form": "думаешь"
            },
            {
              "person": "он/она/оно",
              "form": "думает"
            },
            {
              "person": "мы",
              "form": "думаем"
            },
            {
              "person": "вы",
              "form": "думаете"
            },
            {
              "person": "они",
              "form": "думают"
            }
          ]
        },
        {
          "name": "Прошедшее (Past)",
          "forms": [
            {
              "person": "он",
              "form": "думал"
            },
            {
              "person": "она",
              "form": "думала"
            },
            {
              "person": "оно",
              "form": "думало"
            },
            {
              "person": "они",
              "form": "думали"
            }
          ]
        },
        {
          "name": "Будущее (Future)",
          "forms": [
            {
              "person": "я",
              "form": "буду думать"
            },
            {
              "person": "ты",
              "form": "будешь думать"
            },
            {
              "person": "он/она/оно",
              "form": "будет думать"
            },
            {
              "person": "мы",
              "form": "будем думать"
            },
            {
              "person": "вы",
              "form": "будете думать"
            },
            {
              "person": "они",
              "form": "будут думать"
            }
          ]
        }
      ]
    },
    {
      "verb": "давать",
      "english": "to give",
      "note": "imperfective (да- present stem)",
      "tenses": [
        {
          "name": "Настоящее (Present)",
          "forms": [
            {
              "person": "я",
              "form": "даю"
            },
            {
              "person": "ты",
              "form": "даёшь"
            },
            {
              "person": "он/она/оно",
              "form": "даёт"
            },
            {
              "person": "мы",
              "form": "даём"
            },
            {
              "person": "вы",
              "form": "даёте"
            },
            {
              "person": "они",
              "form": "дают"
            }
          ]
        },
        {
          "name": "Прошедшее (Past)",
          "forms": [
            {
              "person": "он",
              "form": "давал"
            },
            {
              "person": "она",
              "form": "давала"
            },
            {
              "person": "оно",
              "form": "давало"
            },
            {
              "person": "они",
              "form": "давали"
            }
          ]
        },
        {
          "name": "Будущее (Future)",
          "forms": [
            {
              "person": "я",
              "form": "буду давать"
            },
            {
              "person": "ты",
              "form": "будешь давать"
            },
            {
              "person": "он/она/оно",
              "form": "будет давать"
            },
            {
              "person": "мы",
              "form": "будем давать"
            },
            {
              "person": "вы",
              "form": "будете давать"
            },
            {
              "person": "они",
              "form": "будут давать"
            }
          ]
        }
      ]
    }
  ]
};

export const CONJ_LANGS: string[] = Object.keys(conjugations);
