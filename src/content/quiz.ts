import quiz from "@/assets/quiz.json"

export default quiz as readonly {
  question: string
  choices: { label: string; value: string | number }[]
  answer: number
}[]
