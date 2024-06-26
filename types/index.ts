export type Choice = {
  text: string
  type: string
}

export type Question = {
  title: string
  choices: Choice[]
}

export type HandleChoiceChange = (
  index: number,
  field: keyof Choice,
  value: string
) => void
