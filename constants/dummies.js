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
  new Expression("come", "actions", "Ven", "ven.png", "Ven sound"),
  new Expression("go", "actions", "Anda", "anda.png", "Anda sound"),

  new Expression("hello", "greetings", "Hola", "hello.png", "Hola sound"),
  new Expression("bye", "greetings", "Chau", "bye.png", "Chau sound"),

  //Food
  new Expression("water", "food", "Agua", "water.png", "Agua sound"),
  new Expression("soup", "food", "Sopa", "soup.png", "Sopa sound"),

  //Family
  new Expression("dad", "family", 'Papá', "papa.png", "Papá sound"),
  new Expression("mom", "family", 'Mamá', "mama.png", "Mamá sound"),
  new Expression("sister", "family", 'Hermana', "hermana.png", "Hermana sound"),
  new Expression("brother", "family", 'Hermano', "hermano.png", "Hermano sound"),
  new Expression("grandpa", "family", 'Abuelo', "abuelo.png", "Abuelo sound"),
  new Expression("grandma", "family", 'Abuela', "abuela.png", "Abuela sound"),
  new Expression("uncle", "family", 'Tío', "tio.png", "Tío sound"),
  new Expression("aunt", "family", 'Tía', "tia.png", "Tía sound"),
  new Expression("primo", "family", 'Primo', "primo.png", "Primo sound"),
  new Expression("prima", "family", 'Prima', "prima.png", "Prima sound"),
]
