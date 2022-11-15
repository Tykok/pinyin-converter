type PropsTextInput = {
  defaultValue: string | null
  typeOfInput: unknown
  callback: (text: string) => void
}

export const TextInput = ({ defaultValue, typeOfInput, callback }: PropsTextInput) => {
  return (
    <>
      <input type="string" onChange={(event) => callback(event.target.value)} value={defaultValue || ''} />
    </>
  )
}
