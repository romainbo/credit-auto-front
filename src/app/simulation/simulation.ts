export class Simulation {
  purchaseAmount: number;
  loanAmount: number;
  vehicleCategory: string;
  loanDuration: number;
  loanRate: number;
  loanTotalCost: number;
  monthlyPayment: number;

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
