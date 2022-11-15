type PropsOfTranslateDetails = {
  objectOfTranslate: object
}

export const TranslateDetail = ({ objectOfTranslate }: PropsOfTranslateDetails) => {
  console.log(objectOfTranslate)
  return <>{objectOfTranslate}</>
}
