import AnswerModel from "../../models/answer";
import QuestionModel from "../../models/question";

const questions: QuestionModel[] = [
  new QuestionModel(306, 'Qual bicho transmite a Doença de Chagas?', [
      AnswerModel.wrong('Abelha'),
      AnswerModel.wrong('Barata'),
      AnswerModel.wrong('Pulga'),
      AnswerModel.right('Barbeiro'),
  ]),
  new QuestionModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
      AnswerModel.wrong('Caju'),
      AnswerModel.wrong('Côco'),
      AnswerModel.wrong('Chuchu'),
      AnswerModel.right('Abóbora'),
  ]),
  new QuestionModel(203, 'Qual é o coletivo de cães?', [
      AnswerModel.wrong('Manada'),
      AnswerModel.wrong('Alcateia'),
      AnswerModel.wrong('Rebanho'),
      AnswerModel.right('Matilha'),
  ]),
  new QuestionModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
      AnswerModel.wrong('Equilátero'),
      AnswerModel.wrong('Isóceles'),
      AnswerModel.wrong('Trapézio'),
      AnswerModel.right('Escaleno'),
  ]),
  new QuestionModel(205, 'Quem compôs o Hino da Independência?', [
      AnswerModel.wrong('Castro Alves'),
      AnswerModel.wrong('Manuel Bandeira'),
      AnswerModel.wrong('Carlos Gomes'),
      AnswerModel.right('Dom Pedro I'),
  ]),
  new QuestionModel(206, 'Qual é o antônimo de "malograr"?', [
      AnswerModel.wrong('Perder'),
      AnswerModel.wrong('Fracassar'),
      AnswerModel.wrong('Desprezar'),
      AnswerModel.right('Conseguir'),
  ]),
  new QuestionModel(207, 'Em que país nasceu Carmen Miranda?', [
      AnswerModel.wrong('Argentina'),
      AnswerModel.wrong('Espanha'),
      AnswerModel.wrong('Brasil'),
      AnswerModel.right('Portugal'),
  ]),
  new QuestionModel(208, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
      AnswerModel.wrong('Costa e Silva'),
      AnswerModel.wrong('Emílio Médici'),
      AnswerModel.wrong('Ernesto Geisel'),
      AnswerModel.right('João Figueiredo'),
  ]),
  new QuestionModel(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
      AnswerModel.wrong('Ás'),
      AnswerModel.wrong('Nove'),
      AnswerModel.wrong('Rei'),
      AnswerModel.right('Valete'),
  ]),
  new QuestionModel(210, 'O adjetivo "venoso" está relacionado a:', [
      AnswerModel.wrong('Vela'),
      AnswerModel.wrong('Vento'),
      AnswerModel.wrong('Vênia'),
      AnswerModel.right('Veia'),
  ]),
  new QuestionModel(211, 'Que nome se dá à purificação por meio da água?', [
      AnswerModel.wrong('Abrupção'),
      AnswerModel.wrong('Abolição'),
      AnswerModel.wrong('Abnegação'),
      AnswerModel.right('Ablução'),
  ]),
  new QuestionModel(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
      AnswerModel.wrong('Monte Branco'),
      AnswerModel.wrong('Monte Fuji'),
      AnswerModel.wrong('Monte Carlo'),
      AnswerModel.right('Monte Everest'),
  ]),
  new QuestionModel(213, 'Em que parte do corpo se encontra a epiglote?', [
      AnswerModel.wrong('Estômago'),
      AnswerModel.wrong('Pâncreas'),
      AnswerModel.wrong('Rim'),
      AnswerModel.right('Pescoço'),
  ]),
  new QuestionModel(214, 'A compensação por perda é chamada de...', [
      AnswerModel.wrong('Déficit'),
      AnswerModel.wrong('Indexação'),
      AnswerModel.wrong('Indébito'),
      AnswerModel.right('Indenização'),
  ]),
  new QuestionModel(215, 'Que personagem do folclore brasileiro tem uma perna só?', [
      AnswerModel.wrong('Cuca'),
      AnswerModel.wrong('Curupira'),
      AnswerModel.wrong('Boitatá'),
      AnswerModel.right('Saci-pererê'),
  ]),
  new QuestionModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
      AnswerModel.wrong('Marechal Deodoro'),
      AnswerModel.wrong('Barão de Mauá'),
      AnswerModel.wrong('Marquês de Pombal'),
      AnswerModel.right('Duque de Caxias'),
  ]),
]

export default questions
