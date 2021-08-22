import questions from "../questions";

export default function handler(req, res) {
  const id = +req.query.id

  const question = questions.filter(question => question.id === id)

  if (question.length === 1) {
    res.status(200).json(question[0].shuffleAnswers().toObject())
  } else {
    res.status(204).send()
  }
}