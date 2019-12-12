import { Client } from '../client-creation/client';

export class Contract {
    contractNumber: number;
    paymentStartDate: string;
    paymentEndDate: string;
    purchaseAmount: number;
    closureDate: string;
    loanTotalCost: number;
    loanRate: number;
    loanDuration: number;
    vehicleCategory: string;
    client: Client;

    constructor() {}
    
}