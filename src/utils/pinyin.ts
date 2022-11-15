/**
 * All documentation are available on https://pinyin.js.org/en-US/
 */
import pinyin from 'pinyin'

export const translateToPinyin = (character: string): string[][] => {
  return pinyin(character)
}
