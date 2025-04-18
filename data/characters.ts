export interface Character {
  character: string;
  reading: string;
  romaji: string;
  audioUrl: string;
  type: 'hiragana' | 'katakana';
}

export const hiraganaData: Character[] = [
  // Vocales
  { character: 'あ', reading: 'a', romaji: 'a', audioUrl: '/sounds/hiragana/a.mp3', type: 'hiragana' },
  { character: 'い', reading: 'i', romaji: 'i', audioUrl: '/sounds/hiragana/i.mp3', type: 'hiragana' },
  { character: 'う', reading: 'u', romaji: 'u', audioUrl: '/sounds/hiragana/u.mp3', type: 'hiragana' },
  { character: 'え', reading: 'e', romaji: 'e', audioUrl: '/sounds/hiragana/e.mp3', type: 'hiragana' },
  { character: 'お', reading: 'o', romaji: 'o', audioUrl: '/sounds/hiragana/o.mp3', type: 'hiragana' },
  
  // K
  { character: 'か', reading: 'ka', romaji: 'ka', audioUrl: '/sounds/hiragana/ka.mp3', type: 'hiragana' },
  { character: 'き', reading: 'ki', romaji: 'ki', audioUrl: '/sounds/hiragana/ki.mp3', type: 'hiragana' },
  { character: 'く', reading: 'ku', romaji: 'ku', audioUrl: '/sounds/hiragana/ku.mp3', type: 'hiragana' },
  { character: 'け', reading: 'ke', romaji: 'ke', audioUrl: '/sounds/hiragana/ke.mp3', type: 'hiragana' },
  { character: 'こ', reading: 'ko', romaji: 'ko', audioUrl: '/sounds/hiragana/ko.mp3', type: 'hiragana' },
  { character: 'が', reading: 'ga', romaji: 'ga', audioUrl: '/sounds/hiragana/ga.mp3', type: 'hiragana' },
  { character: 'ぎ', reading: 'gi', romaji: 'gi', audioUrl: '/sounds/hiragana/gi.mp3', type: 'hiragana' },
  { character: 'ぐ', reading: 'gu', romaji: 'gu', audioUrl: '/sounds/hiragana/gu.mp3', type: 'hiragana' },
  { character: 'げ', reading: 'ge', romaji: 'ge', audioUrl: '/sounds/hiragana/ge.mp3', type: 'hiragana' },
  { character: 'ご', reading: 'go', romaji: 'go', audioUrl: '/sounds/hiragana/go.mp3', type: 'hiragana' },
  
  // S
  { character: 'さ', reading: 'sa', romaji: 'sa', audioUrl: '/sounds/hiragana/sa.mp3', type: 'hiragana' },
  { character: 'し', reading: 'shi', romaji: 'shi', audioUrl: '/sounds/hiragana/shi.mp3', type: 'hiragana' },
  { character: 'す', reading: 'su', romaji: 'su', audioUrl: '/sounds/hiragana/su.mp3', type: 'hiragana' },
  { character: 'せ', reading: 'se', romaji: 'se', audioUrl: '/sounds/hiragana/se.mp3', type: 'hiragana' },
  { character: 'そ', reading: 'so', romaji: 'so', audioUrl: '/sounds/hiragana/so.mp3', type: 'hiragana' },
  { character: 'ざ', reading: 'za', romaji: 'za', audioUrl: '/sounds/hiragana/za.mp3', type: 'hiragana' },
  { character: 'じ', reading: 'ji', romaji: 'ji', audioUrl: '/sounds/hiragana/ji.mp3', type: 'hiragana' },
  { character: 'ず', reading: 'zu', romaji: 'zu', audioUrl: '/sounds/hiragana/zu.mp3', type: 'hiragana' },
  { character: 'ぜ', reading: 'ze', romaji: 'ze', audioUrl: '/sounds/hiragana/ze.mp3', type: 'hiragana' },
  { character: 'ぞ', reading: 'zo', romaji: 'zo', audioUrl: '/sounds/hiragana/zo.mp3', type: 'hiragana' },
  
  // T
  { character: 'た', reading: 'ta', romaji: 'ta', audioUrl: '/sounds/hiragana/ta.mp3', type: 'hiragana' },
  { character: 'ち', reading: 'chi', romaji: 'chi', audioUrl: '/sounds/hiragana/chi.mp3', type: 'hiragana' },
  { character: 'つ', reading: 'tsu', romaji: 'tsu', audioUrl: '/sounds/hiragana/tsu.mp3', type: 'hiragana' },
  { character: 'て', reading: 'te', romaji: 'te', audioUrl: '/sounds/hiragana/te.mp3', type: 'hiragana' },
  { character: 'と', reading: 'to', romaji: 'to', audioUrl: '/sounds/hiragana/to.mp3', type: 'hiragana' },
  { character: 'だ', reading: 'da', romaji: 'da', audioUrl: '/sounds/hiragana/da.mp3', type: 'hiragana' },
  { character: 'ぢ', reading: 'ji', romaji: 'ji', audioUrl: '/sounds/hiragana/ji.mp3', type: 'hiragana' },
  { character: 'づ', reading: 'zu', romaji: 'zu', audioUrl: '/sounds/hiragana/zu.mp3', type: 'hiragana' },
  { character: 'で', reading: 'de', romaji: 'de', audioUrl: '/sounds/hiragana/de.mp3', type: 'hiragana' },
  { character: 'ど', reading: 'do', romaji: 'do', audioUrl: '/sounds/hiragana/do.mp3', type: 'hiragana' },
  
  // N
  { character: 'な', reading: 'na', romaji: 'na', audioUrl: '/sounds/hiragana/na.mp3', type: 'hiragana' },
  { character: 'に', reading: 'ni', romaji: 'ni', audioUrl: '/sounds/hiragana/ni.mp3', type: 'hiragana' },
  { character: 'ぬ', reading: 'nu', romaji: 'nu', audioUrl: '/sounds/hiragana/nu.mp3', type: 'hiragana' },
  { character: 'ね', reading: 'ne', romaji: 'ne', audioUrl: '/sounds/hiragana/ne.mp3', type: 'hiragana' },
  { character: 'の', reading: 'no', romaji: 'no', audioUrl: '/sounds/hiragana/no.mp3', type: 'hiragana' },
  
  // H
  { character: 'は', reading: 'ha', romaji: 'ha', audioUrl: '/sounds/hiragana/ha.mp3', type: 'hiragana' },
  { character: 'ひ', reading: 'hi', romaji: 'hi', audioUrl: '/sounds/hiragana/hi.mp3', type: 'hiragana' },
  { character: 'ふ', reading: 'fu', romaji: 'fu', audioUrl: '/sounds/hiragana/fu.mp3', type: 'hiragana' },
  { character: 'へ', reading: 'he', romaji: 'he', audioUrl: '/sounds/hiragana/he.mp3', type: 'hiragana' },
  { character: 'ほ', reading: 'ho', romaji: 'ho', audioUrl: '/sounds/hiragana/ho.mp3', type: 'hiragana' },
  { character: 'ば', reading: 'ba', romaji: 'ba', audioUrl: '/sounds/hiragana/ba.mp3', type: 'hiragana' },
  { character: 'び', reading: 'bi', romaji: 'bi', audioUrl: '/sounds/hiragana/bi.mp3', type: 'hiragana' },
  { character: 'ぶ', reading: 'bu', romaji: 'bu', audioUrl: '/sounds/hiragana/bu.mp3', type: 'hiragana' },
  { character: 'べ', reading: 'be', romaji: 'be', audioUrl: '/sounds/hiragana/be.mp3', type: 'hiragana' },
  { character: 'ぼ', reading: 'bo', romaji: 'bo', audioUrl: '/sounds/hiragana/bo.mp3', type: 'hiragana' },
  { character: 'ぱ', reading: 'pa', romaji: 'pa', audioUrl: '/sounds/hiragana/pa.mp3', type: 'hiragana' },
  { character: 'ぴ', reading: 'pi', romaji: 'pi', audioUrl: '/sounds/hiragana/pi.mp3', type: 'hiragana' },
  { character: 'ぷ', reading: 'pu', romaji: 'pu', audioUrl: '/sounds/hiragana/pu.mp3', type: 'hiragana' },
  { character: 'ぺ', reading: 'pe', romaji: 'pe', audioUrl: '/sounds/hiragana/pe.mp3', type: 'hiragana' },
  { character: 'ぽ', reading: 'po', romaji: 'po', audioUrl: '/sounds/hiragana/po.mp3', type: 'hiragana' },
  
  // M
  { character: 'ま', reading: 'ma', romaji: 'ma', audioUrl: '/sounds/hiragana/ma.mp3', type: 'hiragana' },
  { character: 'み', reading: 'mi', romaji: 'mi', audioUrl: '/sounds/hiragana/mi.mp3', type: 'hiragana' },
  { character: 'む', reading: 'mu', romaji: 'mu', audioUrl: '/sounds/hiragana/mu.mp3', type: 'hiragana' },
  { character: 'め', reading: 'me', romaji: 'me', audioUrl: '/sounds/hiragana/me.mp3', type: 'hiragana' },
  { character: 'も', reading: 'mo', romaji: 'mo', audioUrl: '/sounds/hiragana/mo.mp3', type: 'hiragana' },
  
  // Y
  { character: 'や', reading: 'ya', romaji: 'ya', audioUrl: '/sounds/hiragana/ya.mp3', type: 'hiragana' },
  { character: 'ゆ', reading: 'yu', romaji: 'yu', audioUrl: '/sounds/hiragana/yu.mp3', type: 'hiragana' },
  { character: 'よ', reading: 'yo', romaji: 'yo', audioUrl: '/sounds/hiragana/yo.mp3', type: 'hiragana' },
  
  // R
  { character: 'ら', reading: 'ra', romaji: 'ra', audioUrl: '/sounds/hiragana/ra.mp3', type: 'hiragana' },
  { character: 'り', reading: 'ri', romaji: 'ri', audioUrl: '/sounds/hiragana/ri.mp3', type: 'hiragana' },
  { character: 'る', reading: 'ru', romaji: 'ru', audioUrl: '/sounds/hiragana/ru.mp3', type: 'hiragana' },
  { character: 'れ', reading: 're', romaji: 're', audioUrl: '/sounds/hiragana/re.mp3', type: 'hiragana' },
  { character: 'ろ', reading: 'ro', romaji: 'ro', audioUrl: '/sounds/hiragana/ro.mp3', type: 'hiragana' },
  
  // W
  { character: 'わ', reading: 'wa', romaji: 'wa', audioUrl: '/sounds/hiragana/wa.mp3', type: 'hiragana' },
  { character: 'を', reading: 'wo', romaji: 'wo', audioUrl: '/sounds/hiragana/wo.mp3', type: 'hiragana' },
  
  // N
  { character: 'ん', reading: 'n', romaji: 'n', audioUrl: '/sounds/hiragana/n.mp3', type: 'hiragana' },
];

export const katakanaData: Character[] = [
  // Vocales
  { character: 'ア', reading: 'a', romaji: 'a', audioUrl: '/sounds/katakana/a.mp3', type: 'katakana' },
  { character: 'イ', reading: 'i', romaji: 'i', audioUrl: '/sounds/katakana/i.mp3', type: 'katakana' },
  { character: 'ウ', reading: 'u', romaji: 'u', audioUrl: '/sounds/katakana/u.mp3', type: 'katakana' },
  { character: 'エ', reading: 'e', romaji: 'e', audioUrl: '/sounds/katakana/e.mp3', type: 'katakana' },
  { character: 'オ', reading: 'o', romaji: 'o', audioUrl: '/sounds/katakana/o.mp3', type: 'katakana' },
  
  // K
  { character: 'カ', reading: 'ka', romaji: 'ka', audioUrl: '/sounds/katakana/ka.mp3', type: 'katakana' },
  { character: 'キ', reading: 'ki', romaji: 'ki', audioUrl: '/sounds/katakana/ki.mp3', type: 'katakana' },
  { character: 'ク', reading: 'ku', romaji: 'ku', audioUrl: '/sounds/katakana/ku.mp3', type: 'katakana' },
  { character: 'ケ', reading: 'ke', romaji: 'ke', audioUrl: '/sounds/katakana/ke.mp3', type: 'katakana' },
  { character: 'コ', reading: 'ko', romaji: 'ko', audioUrl: '/sounds/katakana/ko.mp3', type: 'katakana' },
  { character: 'ガ', reading: 'ga', romaji: 'ga', audioUrl: '/sounds/katakana/ga.mp3', type: 'katakana' },
  { character: 'ギ', reading: 'gi', romaji: 'gi', audioUrl: '/sounds/katakana/gi.mp3', type: 'katakana' },
  { character: 'グ', reading: 'gu', romaji: 'gu', audioUrl: '/sounds/katakana/gu.mp3', type: 'katakana' },
  { character: 'ゲ', reading: 'ge', romaji: 'ge', audioUrl: '/sounds/katakana/ge.mp3', type: 'katakana' },
  { character: 'ゴ', reading: 'go', romaji: 'go', audioUrl: '/sounds/katakana/go.mp3', type: 'katakana' },
  
  // S
  { character: 'サ', reading: 'sa', romaji: 'sa', audioUrl: '/sounds/katakana/sa.mp3', type: 'katakana' },
  { character: 'シ', reading: 'shi', romaji: 'shi', audioUrl: '/sounds/katakana/shi.mp3', type: 'katakana' },
  { character: 'ス', reading: 'su', romaji: 'su', audioUrl: '/sounds/katakana/su.mp3', type: 'katakana' },
  { character: 'セ', reading: 'se', romaji: 'se', audioUrl: '/sounds/katakana/se.mp3', type: 'katakana' },
  { character: 'ソ', reading: 'so', romaji: 'so', audioUrl: '/sounds/katakana/so.mp3', type: 'katakana' },
  { character: 'ザ', reading: 'za', romaji: 'za', audioUrl: '/sounds/katakana/za.mp3', type: 'katakana' },
  { character: 'ジ', reading: 'ji', romaji: 'ji', audioUrl: '/sounds/katakana/ji.mp3', type: 'katakana' },
  { character: 'ズ', reading: 'zu', romaji: 'zu', audioUrl: '/sounds/katakana/zu.mp3', type: 'katakana' },
  { character: 'ゼ', reading: 'ze', romaji: 'ze', audioUrl: '/sounds/katakana/ze.mp3', type: 'katakana' },
  { character: 'ゾ', reading: 'zo', romaji: 'zo', audioUrl: '/sounds/katakana/zo.mp3', type: 'katakana' },
  
  // T
  { character: 'タ', reading: 'ta', romaji: 'ta', audioUrl: '/sounds/katakana/ta.mp3', type: 'katakana' },
  { character: 'チ', reading: 'chi', romaji: 'chi', audioUrl: '/sounds/katakana/chi.mp3', type: 'katakana' },
  { character: 'ツ', reading: 'tsu', romaji: 'tsu', audioUrl: '/sounds/katakana/tsu.mp3', type: 'katakana' },
  { character: 'テ', reading: 'te', romaji: 'te', audioUrl: '/sounds/katakana/te.mp3', type: 'katakana' },
  { character: 'ト', reading: 'to', romaji: 'to', audioUrl: '/sounds/katakana/to.mp3', type: 'katakana' },
  { character: 'ダ', reading: 'da', romaji: 'da', audioUrl: '/sounds/katakana/da.mp3', type: 'katakana' },
  { character: 'ヂ', reading: 'ji', romaji: 'ji', audioUrl: '/sounds/katakana/ji.mp3', type: 'katakana' },
  { character: 'ヅ', reading: 'zu', romaji: 'zu', audioUrl: '/sounds/katakana/zu.mp3', type: 'katakana' },
  { character: 'デ', reading: 'de', romaji: 'de', audioUrl: '/sounds/katakana/de.mp3', type: 'katakana' },
  { character: 'ド', reading: 'do', romaji: 'do', audioUrl: '/sounds/katakana/do.mp3', type: 'katakana' },
  
  // N
  { character: 'ナ', reading: 'na', romaji: 'na', audioUrl: '/sounds/katakana/na.mp3', type: 'katakana' },
  { character: 'ニ', reading: 'ni', romaji: 'ni', audioUrl: '/sounds/katakana/ni.mp3', type: 'katakana' },
  { character: 'ヌ', reading: 'nu', romaji: 'nu', audioUrl: '/sounds/katakana/nu.mp3', type: 'katakana' },
  { character: 'ネ', reading: 'ne', romaji: 'ne', audioUrl: '/sounds/katakana/ne.mp3', type: 'katakana' },
  { character: 'ノ', reading: 'no', romaji: 'no', audioUrl: '/sounds/katakana/no.mp3', type: 'katakana' },
  
  // H
  { character: 'ハ', reading: 'ha', romaji: 'ha', audioUrl: '/sounds/katakana/ha.mp3', type: 'katakana' },
  { character: 'ヒ', reading: 'hi', romaji: 'hi', audioUrl: '/sounds/katakana/hi.mp3', type: 'katakana' },
  { character: 'フ', reading: 'fu', romaji: 'fu', audioUrl: '/sounds/katakana/fu.mp3', type: 'katakana' },
  { character: 'ヘ', reading: 'he', romaji: 'he', audioUrl: '/sounds/katakana/he.mp3', type: 'katakana' },
  { character: 'ホ', reading: 'ho', romaji: 'ho', audioUrl: '/sounds/katakana/ho.mp3', type: 'katakana' },
  { character: 'バ', reading: 'ba', romaji: 'ba', audioUrl: '/sounds/katakana/ba.mp3', type: 'katakana' },
  { character: 'ビ', reading: 'bi', romaji: 'bi', audioUrl: '/sounds/katakana/bi.mp3', type: 'katakana' },
  { character: 'ブ', reading: 'bu', romaji: 'bu', audioUrl: '/sounds/katakana/bu.mp3', type: 'katakana' },
  { character: 'ベ', reading: 'be', romaji: 'be', audioUrl: '/sounds/katakana/be.mp3', type: 'katakana' },
  { character: 'ボ', reading: 'bo', romaji: 'bo', audioUrl: '/sounds/katakana/bo.mp3', type: 'katakana' },
  { character: 'パ', reading: 'pa', romaji: 'pa', audioUrl: '/sounds/katakana/pa.mp3', type: 'katakana' },
  { character: 'ピ', reading: 'pi', romaji: 'pi', audioUrl: '/sounds/katakana/pi.mp3', type: 'katakana' },
  { character: 'プ', reading: 'pu', romaji: 'pu', audioUrl: '/sounds/katakana/pu.mp3', type: 'katakana' },
  { character: 'ペ', reading: 'pe', romaji: 'pe', audioUrl: '/sounds/katakana/pe.mp3', type: 'katakana' },
  { character: 'ポ', reading: 'po', romaji: 'po', audioUrl: '/sounds/katakana/po.mp3', type: 'katakana' },
  
  // M
  { character: 'マ', reading: 'ma', romaji: 'ma', audioUrl: '/sounds/katakana/ma.mp3', type: 'katakana' },
  { character: 'ミ', reading: 'mi', romaji: 'mi', audioUrl: '/sounds/katakana/mi.mp3', type: 'katakana' },
  { character: 'ム', reading: 'mu', romaji: 'mu', audioUrl: '/sounds/katakana/mu.mp3', type: 'katakana' },
  { character: 'メ', reading: 'me', romaji: 'me', audioUrl: '/sounds/katakana/me.mp3', type: 'katakana' },
  { character: 'モ', reading: 'mo', romaji: 'mo', audioUrl: '/sounds/katakana/mo.mp3', type: 'katakana' },
  
  // Y
  { character: 'ヤ', reading: 'ya', romaji: 'ya', audioUrl: '/sounds/katakana/ya.mp3', type: 'katakana' },
  { character: 'ユ', reading: 'yu', romaji: 'yu', audioUrl: '/sounds/katakana/yu.mp3', type: 'katakana' },
  { character: 'ヨ', reading: 'yo', romaji: 'yo', audioUrl: '/sounds/katakana/yo.mp3', type: 'katakana' },
  
  // R
  { character: 'ラ', reading: 'ra', romaji: 'ra', audioUrl: '/sounds/katakana/ra.mp3', type: 'katakana' },
  { character: 'リ', reading: 'ri', romaji: 'ri', audioUrl: '/sounds/katakana/ri.mp3', type: 'katakana' },
  { character: 'ル', reading: 'ru', romaji: 'ru', audioUrl: '/sounds/katakana/ru.mp3', type: 'katakana' },
  { character: 'レ', reading: 're', romaji: 're', audioUrl: '/sounds/katakana/re.mp3', type: 'katakana' },
  { character: 'ロ', reading: 'ro', romaji: 'ro', audioUrl: '/sounds/katakana/ro.mp3', type: 'katakana' },
  
  // W
  { character: 'ワ', reading: 'wa', romaji: 'wa', audioUrl: '/sounds/katakana/wa.mp3', type: 'katakana' },
  { character: 'ヲ', reading: 'wo', romaji: 'wo', audioUrl: '/sounds/katakana/wo.mp3', type: 'katakana' },
  
  // N
  { character: 'ン', reading: 'n', romaji: 'n', audioUrl: '/sounds/katakana/n.mp3', type: 'katakana' },
]; 