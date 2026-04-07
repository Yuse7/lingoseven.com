export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  enabled: boolean;
}

export const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '\u{1F1EC}\u{1F1E7}', enabled: true },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '\u{1F1E9}\u{1F1EA}', enabled: true },
  { code: 'fr', name: 'French', nativeName: 'Fran\u00e7ais', flag: '\u{1F1EB}\u{1F1F7}', enabled: true },
  { code: 'es', name: 'Spanish', nativeName: 'Espa\u00f1ol', flag: '\u{1F1EA}\u{1F1F8}', enabled: true },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '\u{1F1EE}\u{1F1F9}', enabled: true },
  { code: 'pt', name: 'Portuguese', nativeName: 'Portugu\u00eas', flag: '\u{1F1F5}\u{1F1F9}', enabled: true },
  { code: 'ru', name: 'Russian', nativeName: '\u0420\u0443\u0441\u0441\u043a\u0438\u0439', flag: '\u{1F1F7}\u{1F1FA}', enabled: true },
  { code: 'sr', name: 'Serbian', nativeName: '\u0421\u0440\u043f\u0441\u043a\u0438', flag: '\u{1F1F7}\u{1F1F8}', enabled: true },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '\u{1F1F3}\u{1F1F1}', enabled: true },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska', flag: '\u{1F1F8}\u{1F1EA}', enabled: true },
  { code: 'no', name: 'Norwegian', nativeName: 'Norsk', flag: '\u{1F1F3}\u{1F1F4}', enabled: true },
  { code: 'da', name: 'Danish', nativeName: 'Dansk', flag: '\u{1F1E9}\u{1F1F0}', enabled: true },
  { code: 'ro', name: 'Romanian', nativeName: 'Rom\u00e2n\u0103', flag: '\u{1F1F7}\u{1F1F4}', enabled: true },
  { code: 'uk', name: 'Ukrainian', nativeName: '\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430', flag: '\u{1F1FA}\u{1F1E6}', enabled: true },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '\u{1F1F5}\u{1F1F1}', enabled: true },
  { code: 'cs', name: 'Czech', nativeName: '\u010ce\u0161tina', flag: '\u{1F1E8}\u{1F1FF}', enabled: true },
  { code: 'sk', name: 'Slovak', nativeName: 'Sloven\u010dina', flag: '\u{1F1F8}\u{1F1F0}', enabled: true },
  { code: 'hr', name: 'Croatian', nativeName: 'Hrvatski', flag: '\u{1F1ED}\u{1F1F7}', enabled: true },
  { code: 'bs', name: 'Bosnian', nativeName: 'Bosanski', flag: '\u{1F1E7}\u{1F1E6}', enabled: true },
  { code: 'bg', name: 'Bulgarian', nativeName: '\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438', flag: '\u{1F1E7}\u{1F1EC}', enabled: true },
  { code: 'mk', name: 'Macedonian', nativeName: '\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438', flag: '\u{1F1F2}\u{1F1F0}', enabled: true },
  { code: 'sl', name: 'Slovenian', nativeName: 'Sloven\u0161\u010dina', flag: '\u{1F1F8}\u{1F1EE}', enabled: true },
  { code: 'lv', name: 'Latvian', nativeName: 'Latvie\u0161u', flag: '\u{1F1F1}\u{1F1FB}', enabled: true },
  { code: 'lt', name: 'Lithuanian', nativeName: 'Lietuvi\u0173', flag: '\u{1F1F1}\u{1F1F9}', enabled: true },
  { code: 'fi', name: 'Finnish', nativeName: 'Suomi', flag: '\u{1F1EB}\u{1F1EE}', enabled: true },
  { code: 'hu', name: 'Hungarian', nativeName: 'Magyar', flag: '\u{1F1ED}\u{1F1FA}', enabled: true },
  { code: 'et', name: 'Estonian', nativeName: 'Eesti', flag: '\u{1F1EA}\u{1F1EA}', enabled: true },
  { code: 'tr', name: 'Turkish', nativeName: 'T\u00fcrk\u00e7e', flag: '\u{1F1F9}\u{1F1F7}', enabled: true },
  { code: 'az', name: 'Azerbaijani', nativeName: 'Az\u0259rbaycan', flag: '\u{1F1E6}\u{1F1FF}', enabled: true },
  { code: 'el', name: 'Greek', nativeName: '\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac', flag: '\u{1F1EC}\u{1F1F7}', enabled: true },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Ti\u1ebfng Vi\u1ec7t', flag: '\u{1F1FB}\u{1F1F3}', enabled: true },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '\u{1F1EE}\u{1F1E9}', enabled: true },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu', flag: '\u{1F1F2}\u{1F1FE}', enabled: true },
  { code: 'is', name: 'Icelandic', nativeName: '\u00cdslenska', flag: '\u{1F1EE}\u{1F1F8}', enabled: true },
  { code: 'af', name: 'Afrikaans', nativeName: 'Afrikaans', flag: '\u{1F1FF}\u{1F1E6}', enabled: true },
  { code: 'ca', name: 'Catalan', nativeName: 'Catal\u00e0', flag: '\u{1F3F4}\u{E0065}\u{E0073}\u{E0063}\u{E0074}\u{E007F}', enabled: true },
  { code: 'gl', name: 'Galician', nativeName: 'Galego', flag: '\u{1F1EA}\u{1F1F8}', enabled: true },
  { code: 'kk', name: 'Kazakh', nativeName: '\u049a\u0430\u0437\u0430\u049b\u0448\u0430', flag: '\u{1F1F0}\u{1F1FF}', enabled: true },
  { code: 'uz', name: 'Uzbek', nativeName: "O'zbek", flag: '\u{1F1FA}\u{1F1FF}', enabled: true },
  { code: 'tl', name: 'Filipino', nativeName: 'Filipino', flag: '\u{1F1F5}\u{1F1ED}', enabled: true },
  { code: 'mn', name: 'Mongolian', nativeName: '\u041c\u043e\u043d\u0433\u043e\u043b', flag: '\u{1F1F2}\u{1F1F3}', enabled: true },
  { code: 'ka', name: 'Georgian', nativeName: '\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8', flag: '\u{1F1EC}\u{1F1EA}', enabled: true },
  { code: 'hy', name: 'Armenian', nativeName: '\u0540\u0561\u0575\u0565\u0580\u0565\u0576', flag: '\u{1F1E6}\u{1F1F2}', enabled: true },
  { code: 'sq', name: 'Albanian', nativeName: 'Shqip', flag: '\u{1F1E6}\u{1F1F1}', enabled: true },
  { code: 'eu', name: 'Basque', nativeName: 'Euskara', flag: '\u{1F3F4}', enabled: true },
  { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili', flag: '\u{1F1F0}\u{1F1EA}', enabled: true },
  { code: 'zu', name: 'Zulu', nativeName: 'isiZulu', flag: '\u{1F1FF}\u{1F1E6}', enabled: true },
  { code: 'be', name: 'Belarusian', nativeName: '\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f', flag: '\u{1F1E7}\u{1F1FE}', enabled: true },
  { code: 'ky', name: 'Kyrgyz', nativeName: '\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430', flag: '\u{1F1F0}\u{1F1EC}', enabled: true },
];

export function getLanguageByCode(code: string): Language | undefined {
  return languages.find((lang) => lang.code === code);
}

export function getAllLanguages(): Language[] {
  return languages;
}

export function getEnabledLanguages(): Language[] {
  return languages.filter((lang) => lang.enabled);
}

// Languages without TTS audio (empty azureVoice in mobile config).
// Used to hide the Audio section on learn pages where audio is unavailable.
export const LANGUAGES_WITHOUT_AUDIO = new Set<string>(['be', 'ky', 'ug']);

export function hasAudio(code: string): boolean {
  return !LANGUAGES_WITHOUT_AUDIO.has(code);
}
