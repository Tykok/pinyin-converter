import { getByPinyin } from 'mdbg'
import { useState } from 'react'
import './App.css'
import { TextInput } from './components/TextInput/TextInput'
import { TranslateDetail } from './components/TranslateDetails/TranslateDetails'

function App() {
  const [textToTranslate, setTextToTranslate] = useState<string>('wo3')
  return (
    <>
      <TextInput callback={(text: string) => setTextToTranslate(text)} defaultValue={null} typeOfInput={undefined} />
      <br />
      <TranslateDetail objectOfTranslate={getByPinyin(textToTranslate)} />
    </>
  )
}

export default App
