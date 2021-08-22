export default class AnswerModel {
  #value: string
  #isRight: boolean
  #seen: boolean

  constructor(value: string, isRight: boolean, seen = false) {
    this.#value = value
    this.#isRight = isRight
    this.#seen = seen
  }

  get value() {
    return this.#value
  }

  get isRight() {
    return this.#isRight
  }

  get seen() {
    return this.#seen
  }
}