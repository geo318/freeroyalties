import { useState } from 'react'
import { Choice, Question } from '../types'

export const useQuestionForm = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true)
  const [title, setTitle] = useState<string>('')
  const [choices, setChoices] = useState<Choice[]>([])
  const [questions, setQuestions] = useState<Question[]>([])

  const handleChoiceChange = (
    index: number,
    field: keyof Choice,
    value: string
  ) => {
    const updatedChoices = [...choices]
    updatedChoices[index][field] = value
    setChoices(updatedChoices)
  }

  const isSaveEnabled =
    title !== '' &&
    choices.length === 2 &&
    choices.every((choice) => choice.text !== '' && choice.type !== '')

  const handleAddQuestion = () => {
    if (title) {
      setChoices([
        { text: '', type: '' },
        { text: '', type: '' },
      ])
    }
  }

  const handleSave = () => {
    const question = { title, choices }
    setQuestions([...questions, question])
    setTitle('')
    setChoices([])
  }

  return {
    title,
    setTitle,
    choices,
    handleChoiceChange,
    handleAddQuestion,
    handleSave,
    isSaveEnabled,
    questions,
    isModalOpen,
    setIsModalOpen,
  }
}
