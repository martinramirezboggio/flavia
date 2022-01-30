import ExpressionType from "../models/ExpressionType";
import Expression from "../models/Expression";

export const EXPRESSION_TYPES = [
  new ExpressionType("actions", "acciones", "accion.png"),
  new ExpressionType("greetings","Saludos", "hello.png"),
  new ExpressionType("food", "Comida", "food.png"),
  new ExpressionType("wants", "Quiero", "want.png"),
  new ExpressionType("family", "Familia", "family.png"),
]

export const EXPRESSIONS = [
  //Acciones
  new Expression("come", "actions", "Ven", "ven.png", "ven"),
  new Expression("go", "actions", "Anda", "anda.png", "anda"),
  new Expression("walk", "actions", "Pasear", "pasear.png", "pasear"),

  new Expression("hello", "greetings", "Hola", "hello.png", "hola"), 
  new Expression("bye", "greetings", "Chau", "bye.png", "chau"),

  //Food
  new Expression("water", "food", "Agua", "water.png", "agua"),
  new Expression("soup", "food", "Sopa", "soup.png", "sopa"),

  //Family
  new Expression("dad", "family", 'Papá', "papa.png", "papa"),
  new Expression("mom", "family", 'Mamá', "mama.png", "mama"),
  new Expression("sister", "family", 'Hermana', "hermana.png", "hermana"),
  new Expression("brother", "family", 'Hermano', "hermano.png", "Hermano"),
  new Expression("grandpa", "family", 'Abuelo', "abuelo.png", "abuelo"),
  new Expression("grandma", "family", 'Abuela', "abuela.png", "abuela"),
  new Expression("uncle", "family", 'Tío', "tio.png", "tio"),
  new Expression("aunt", "family", 'Tía', "tia.png", "tia"),
  new Expression("primo", "family", 'Primo', "primo.png", "primo"),
  new Expression("prima", "family", 'Prima', "prima.png", "prima"),
  new Expression("friend", "family", 'amigo', "amigo.png", "amigo"),
]
