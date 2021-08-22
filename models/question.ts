import AnswerModel from "./answer"

export default class QuestionModel {
  #id: number
  #question: string
  #answers: AnswerModel[]
  #isRight: boolean

  constructor(id: number, question: string, answers: AnswerModel[], isRight = false) {
    this.#id = id
    this.#question = question
    this.#answers = answers
    this.#isRight = isRight
  }

  get id() {
    return this.#id
  }

  get question() {
    return this.#question
  }

  get answers() {
    return this.#answers
  }

  get isRight() {
    return this.#isRight
  }

  get isAnswered() {
    for (let answer of this.#answers) {
      if (answer.seen) return true
    }
    return false
  }
}