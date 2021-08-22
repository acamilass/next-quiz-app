import questions from "../questions";

export default function handler(req, res) {
  res.status(200).json(questions[0].toObject())
}