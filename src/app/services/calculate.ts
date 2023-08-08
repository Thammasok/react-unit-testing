export class CalculateService {
  sum(numberOne: number, numberTwo: number): number {
    return numberOne + numberTwo;
  }

  twoRetrun() {
    return {
      msg: 'ok',
    };
  }
}
