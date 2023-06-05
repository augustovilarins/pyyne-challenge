export default class Bank2AccountBalance {
  private balance: number;
  private currency: string;

  constructor(balance: number, currency: string) {
    this.balance = balance;
    this.currency = currency;
  }

  getBalance(): number {
    return this.balance;
  }

  getCurrency(): string {
    return this.currency;
  }
}