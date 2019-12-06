export class Simulation {
  purchaseAmount: number;
  loanAmount: number;
  vehicleCategory: string;
  loanDuration: number;

  constructor(
    purchaseAmount: number,
    loanAmount: number,
    vehicleCategory: string,
    loanDuration: number
  ) {
    this.purchaseAmount = purchaseAmount;
    this.loanAmount = loanAmount;
    this.vehicleCategory = vehicleCategory;
    this.loanDuration = loanDuration;
  }
}
