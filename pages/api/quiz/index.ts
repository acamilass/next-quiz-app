import { shuffle } from "../../../functions/arrays"
import questions from "../questions"

export default (req, res) => {
  const questionsId = questions.map(question => question.id)
  res.status(200).json(shuffle(questionsId))
}
