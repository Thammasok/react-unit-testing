import { add } from "./sum.function"

export const addAndMinus = (numberOne: number, numberTwo: number) => {
  const result = add(numberOne, numberTwo)

  return result - numberOne
}
