export interface Character {
  character: string;
  reading: string;
  romaji: string;
  audioUrl?: string;
}

export const hiraganaData: Character[] = [
  // Vocales
  { character: 'あ', reading: 'a', romaji: 'a' },
  { character: 'い', reading: 'i', romaji: 'i' },
  { character: 'う', reading: 'u', romaji: 'u' },
  { character: 'え', reading: 'e', romaji: 'e' },
  { character: 'お', reading: 'o', romaji: 'o' },
  
  // K
  { character: 'か', reading: 'ka', romaji: 'ka' },
  { character: 'き', reading: 'ki', romaji: 'ki' },
  { character: 'く', reading: 'ku', romaji: 'ku' },
  { character: 'け', reading: 'ke', romaji: 'ke' },
  { character: 'こ', reading: 'ko', romaji: 'ko' },
  
  // S
  { character: 'さ', reading: 'sa', romaji: 'sa' },
  { character: 'し', reading: 'shi', romaji: 'shi' },
  { character: 'す', reading: 'su', romaji: 'su' },
  { character: 'せ', reading: 'se', romaji: 'se' },
  { character: 'そ', reading: 'so', romaji: 'so' },
  
  // T
  { character: 'た', reading: 'ta', romaji: 'ta' },
  { character: 'ち', reading: 'chi', romaji: 'chi' },
  { character: 'つ', reading: 'tsu', romaji: 'tsu' },
  { character: 'て', reading: 'te', romaji: 'te' },
  { character: 'と', reading: 'to', romaji: 'to' },
  
  // N
  { character: 'な', reading: 'na', romaji: 'na' },
  { character: 'に', reading: 'ni', romaji: 'ni' },
  { character: 'ぬ', reading: 'nu', romaji: 'nu' },
  { character: 'ね', reading: 'ne', romaji: 'ne' },
  { character: 'の', reading: 'no', romaji: 'no' },
  
  // H
  { character: 'は', reading: 'ha', romaji: 'ha' },
  { character: 'ひ', reading: 'hi', romaji: 'hi' },
  { character: 'ふ', reading: 'fu', romaji: 'fu' },
  { character: 'へ', reading: 'he', romaji: 'he' },
  { character: 'ほ', reading: 'ho', romaji: 'ho' },
  
  // M
  { character: 'ま', reading: 'ma', romaji: 'ma' },
  { character: 'み', reading: 'mi', romaji: 'mi' },
  { character: 'む', reading: 'mu', romaji: 'mu' },
  { character: 'め', reading: 'me', romaji: 'me' },
  { character: 'も', reading: 'mo', romaji: 'mo' },
  
  // Y
  { character: 'や', reading: 'ya', romaji: 'ya' },
  { character: 'ゆ', reading: 'yu', romaji: 'yu' },
  { character: 'よ', reading: 'yo', romaji: 'yo' },
  
  // R
  { character: 'ら', reading: 'ra', romaji: 'ra' },
  { character: 'り', reading: 'ri', romaji: 'ri' },
  { character: 'る', reading: 'ru', romaji: 'ru' },
  { character: 'れ', reading: 're', romaji: 're' },
  { character: 'ろ', reading: 'ro', romaji: 'ro' },
  
  // W
  { character: 'わ', reading: 'wa', romaji: 'wa' },
  { character: 'を', reading: 'wo', romaji: 'wo' },
  
  // N
  { character: 'ん', reading: 'n', romaji: 'n' },
];

export const katakanaData: Character[] = [
  // Vocales
  { character: 'ア', reading: 'a', romaji: 'a' },
  { character: 'イ', reading: 'i', romaji: 'i' },
  { character: 'ウ', reading: 'u', romaji: 'u' },
  { character: 'エ', reading: 'e', romaji: 'e' },
  { character: 'オ', reading: 'o', romaji: 'o' },
  
  // K
  { character: 'カ', reading: 'ka', romaji: 'ka' },
  { character: 'キ', reading: 'ki', romaji: 'ki' },
  { character: 'ク', reading: 'ku', romaji: 'ku' },
  { character: 'ケ', reading: 'ke', romaji: 'ke' },
  { character: 'コ', reading: 'ko', romaji: 'ko' },
  
  // S
  { character: 'サ', reading: 'sa', romaji: 'sa' },
  { character: 'シ', reading: 'shi', romaji: 'shi' },
  { character: 'ス', reading: 'su', romaji: 'su' },
  { character: 'セ', reading: 'se', romaji: 'se' },
  { character: 'ソ', reading: 'so', romaji: 'so' },
  
  // T
  { character: 'タ', reading: 'ta', romaji: 'ta' },
  { character: 'チ', reading: 'chi', romaji: 'chi' },
  { character: 'ツ', reading: 'tsu', romaji: 'tsu' },
  { character: 'テ', reading: 'te', romaji: 'te' },
  { character: 'ト', reading: 'to', romaji: 'to' },
  
  // N
  { character: 'ナ', reading: 'na', romaji: 'na' },
  { character: 'ニ', reading: 'ni', romaji: 'ni' },
  { character: 'ヌ', reading: 'nu', romaji: 'nu' },
  { character: 'ネ', reading: 'ne', romaji: 'ne' },
  { character: 'ノ', reading: 'no', romaji: 'no' },
  
  // H
  { character: 'ハ', reading: 'ha', romaji: 'ha' },
  { character: 'ヒ', reading: 'hi', romaji: 'hi' },
  { character: 'フ', reading: 'fu', romaji: 'fu' },
  { character: 'ヘ', reading: 'he', romaji: 'he' },
  { character: 'ホ', reading: 'ho', romaji: 'ho' },
  
  // M
  { character: 'マ', reading: 'ma', romaji: 'ma' },
  { character: 'ミ', reading: 'mi', romaji: 'mi' },
  { character: 'ム', reading: 'mu', romaji: 'mu' },
  { character: 'メ', reading: 'me', romaji: 'me' },
  { character: 'モ', reading: 'mo', romaji: 'mo' },
  
  // Y
  { character: 'ヤ', reading: 'ya', romaji: 'ya' },
  { character: 'ユ', reading: 'yu', romaji: 'yu' },
  { character: 'ヨ', reading: 'yo', romaji: 'yo' },
  
  // R
  { character: 'ラ', reading: 'ra', romaji: 'ra' },
  { character: 'リ', reading: 'ri', romaji: 'ri' },
  { character: 'ル', reading: 'ru', romaji: 'ru' },
  { character: 'レ', reading: 're', romaji: 're' },
  { character: 'ロ', reading: 'ro', romaji: 'ro' },
  
  // W
  { character: 'ワ', reading: 'wa', romaji: 'wa' },
  { character: 'ヲ', reading: 'wo', romaji: 'wo' },
  
  // N
  { character: 'ン', reading: 'n', romaji: 'n' },
]; 