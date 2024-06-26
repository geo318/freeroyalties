'use client'

import QuestionModal from '@/components/QuestionModal'
import { Button } from '@/components/ui'
import { useQuestionForm } from '@/hooks'

const HomePage: React.FC = () => {
  const {
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
  } = useQuestionForm()

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center pt-10'>
      <Button
        onClick={() => setIsModalOpen(true)}
        className='dark:bg-gray-700 dark:text-white'
      >
        Add Question
      </Button>
      <QuestionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        setTitle={setTitle}
        choices={choices}
        handleChoiceChange={handleChoiceChange}
        onAddQuestion={handleAddQuestion}
        onSave={handleSave}
        isSaveEnabled={isSaveEnabled}
      />
      <pre className='mt-8 dark:text-white'>
        {JSON.stringify(questions, null, 2)}
      </pre>
    </div>
  )
}

export default HomePage
