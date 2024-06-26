import React from 'react'
import { Dialog, Button, Input, DialogContent } from '@/components/ui'
import ChoiceInput from './ChoiceInput'
import { Choice, HandleChoiceChange } from '@/types'

type QuestionModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  setTitle: (title: string) => void
  choices: Choice[]
  handleChoiceChange: HandleChoiceChange
  onAddQuestion: () => void
  onSave: () => void
  isSaveEnabled: boolean
}

const QuestionModal: React.FC<QuestionModalProps> = ({
  isOpen,
  onClose,
  title,
  setTitle,
  choices,
  handleChoiceChange,
  onAddQuestion,
  onSave,
  isSaveEnabled,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='dark:bg-gray-900 dark:text-white'>
        <div className='p-6'>
          <h2 className='text-xl font-semibold mb-4'>Add Question</h2>
          <Input
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='mb-4 dark:bg-gray-800 dark:text-white'
          />
          <Button
            onClick={onAddQuestion}
            className='mb-4 dark:bg-gray-700 dark:text-white mr-2'
          >
            Add Question
          </Button>
          {choices.map((choice, index) => (
            <ChoiceInput
              key={index}
              index={index}
              choice={choice}
              handleChoiceChange={handleChoiceChange}
            />
          ))}
          {isSaveEnabled && title && (
            <Button
              onClick={onSave}
              className='mt dark:bg-gray-700 dark:text-white'
            >
              Save
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default QuestionModal
