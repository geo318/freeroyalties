# FreeRoyalties Technical Interview

This project is a Next.js application that meets the following requirements using React, TailwindCSS, and shadcn components, with a focus on utilizing generative AI tools for development.

## Task Requirements

- Create a Next.js app with TypeScript and TailwindCSS.
- Use `shadcn/ui` for components and dark mode styles.
- Implement a page with a modal that starts open.
- The modal includes:
  - A text field for the title.
  - A button to add a question.
  - Two empty "choices" that appear when the button is clicked.
  - Each choice has a text field and a select field for type (dollar, number, string, boolean).
  - A "Save" button that is enabled only when both the title and choices are filled.
- Save the question title and choices as JSON in the page state when "Save" is clicked.
- Dark mode should be enforced by default.
- Ensure all state is managed in the page component.
- Refactor logic using a custom hook for better readability.

## Implementation

1. **Set Up Project**
   - Created a Next.js app with TypeScript and TailwindCSS.
   - Configured TailwindCSS for dark mode.
   - Installed shadcn components (`button`, `input`, `select`, `modal`).

2. **Component Structure**
   - `ChoiceInput.tsx`: Component for individual choice input fields.
   - `QuestionModal.tsx`: Modal component containing the title input, add question button, choice inputs, and save button.
   - `index.tsx`: Main page component managing state and rendering the modal.

3. **Custom Hook**
   - `useQuestionForm.ts`: Custom hook to manage form state and logic, enhancing readability and separation of concerns.

4. **Dark Mode Enforcement**
   - Configured dark mode in TailwindCSS.
   - Applied dark mode classes to all relevant components.
   - Ensured dark mode is enforced by default in `_document.tsx`.

5. **State Management**
   - Managed all state in the `index.tsx` page component.
   - Ensured the "Save" button is enabled only when the title and all choice fields are filled.

## Files Created/Modified

- `pages/_document.tsx`: Enforces dark mode by default.
- `components/ChoiceInput.tsx`: Component for choice input fields.
- `components/QuestionModal.tsx`: Modal component.
- `hooks/useQuestionForm.ts`: Custom hook for managing question form state.
- `pages/index.tsx`: Main page component.

## Usage

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

## Summary

This project demonstrates the use of Next.js, TailwindCSS, and shadcn components to build a dynamic form within a modal, utilizing a custom hook for state management and ensuring dark mode by default.
