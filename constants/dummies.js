import ExpressionType from "../models/ExpressionType";
import Expression from "../models/Expression";

export const EXPRESSION_TYPES = [
  new ExpressionType("greetings","Saludos", "hello.png"),
  new ExpressionType("food", "Comida", "food.png"),
  new ExpressionType("wants", "Quiero", "want.png")
]

export const EXPRESSIONS = [
  new Expression("hello", "greetings", "Hola", "hello.png", "Hola sound"),
  new Expression("bye", "greetings", "Chau", "bye.png", "Chau sound"),
  new Expression("water", "food", "Agua", "water.png", "Agua sound"),
  new Expression("soup", "food", "Sopa", "soup.png", "Sopa sound"),
]
