import { shuffle } from "../functions/arrays"
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

  answerWith(index: number): QuestionModel {
    const isRight = this.#answers[index]?.isRight

    const answers = this.#answers.map((answer, i) => {
      const selected = index === i
      return (selected || answer.isRight) ? answer.reveal() : answer
    })

    return new QuestionModel(this.#id, this.#question, answers, isRight)
  }

  shuffleAnswers(): QuestionModel {
    let shuffledAnswers = shuffle(this.#answers)
    return new QuestionModel(this.#id, this.#question, shuffledAnswers, this.#isRight)
  }

  toObject() {
    return {
      id: this.#id,
      question: this.#question,
      answers: this.#answers.map(ans => ans.toObject()),
      isAnswered: this.isAnswered,
      isRight: this.#isRight
    }
  }
}