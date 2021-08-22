export default class AnswerModel {
  #value: string
  #isRight: boolean
  #seen: boolean

  constructor(value: string, isRight: boolean, seen = false) {
    this.#value = value
    this.#isRight = isRight
    this.#seen = seen
  }

  static right(value: string) {
    return new AnswerModel(value, true)
  }

  static wrong(value: string) {
    return new AnswerModel(value, true)
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

  reveal() {
    return new AnswerModel(this.#value, this.#isRight, true)
  }

  toObject() {
    return {
      value: this.#value,
      isRight: this.#isRight,
      seen: this.#seen
    }
  }
}