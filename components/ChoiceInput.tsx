import React from 'react'
import {
  Input,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui'
import { Choice, HandleChoiceChange } from '../types'

type ChoiceInputProps = {
  index: number
  choice: Choice
  handleChoiceChange: HandleChoiceChange
}

const ChoiceInput: React.FC<ChoiceInputProps> = ({
  index,
  choice,
  handleChoiceChange,
}) => {
  return (
    <div className='flex space-x-4 mb-4'>
      <Input
        placeholder='Choice Text'
        value={choice.text}
        onChange={(e) => handleChoiceChange(index, 'text', e.target.value)}
        className='dark:bg-gray-800 dark:text-white'
      />
      <Select
        value={choice.type}
        onValueChange={(value) => handleChoiceChange(index, 'type', value)}
      >
        <SelectTrigger className='dark:bg-gray-800 dark:text-white'>
          <SelectValue placeholder='Select type' />
        </SelectTrigger>
        <SelectContent className='dark:bg-gray-800 dark:text-white'>
          <SelectItem value='dollar'>Dollar</SelectItem>
          <SelectItem value='number'>Number</SelectItem>
          <SelectItem value='string'>String</SelectItem>
          <SelectItem value='boolean'>Boolean</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default ChoiceInput
