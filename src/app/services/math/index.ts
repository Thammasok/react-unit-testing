import { add } from './add.func'

export const addAndMinus = (numberOne: number, numberTwo: number) => {
  const result = add(numberOne, numberTwo)

  return result - numberOne
}
