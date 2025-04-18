import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';

// Importar los datos de caracteres
import { hiraganaData, katakanaData } from '../data/characters';

const downloadAudio = async (text: string, outputPath: string): Promise<boolean> => {
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=ja&client=tw-ob`;
  
  return new Promise((resolve, reject) => {
    https.get(url, (response: https.IncomingMessage) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download audio for ${text}: ${response.statusCode}`));
        return;
      }

      const file = fs.createWriteStream(outputPath);
      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${outputPath}`);
        resolve(true);
      });
    }).on('error', (err: Error) => {
      reject(err);
    });
  });
};

const downloadAllAudio = async (): Promise<void> => {
  // Descargar audio para hiragana
  for (const char of hiraganaData) {
    const outputPath = path.join('public', char.audioUrl);
    await downloadAudio(char.romaji, outputPath);
    // Esperar 1 segundo entre descargas para no sobrecargar la API
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  // Descargar audio para katakana
  for (const char of katakanaData) {
    const outputPath = path.join('public', char.audioUrl);
    await downloadAudio(char.romaji, outputPath);
    // Esperar 1 segundo entre descargas para no sobrecargar la API
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
};

downloadAllAudio().catch(console.error); 