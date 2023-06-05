export default class Bank1Transaction {
    static TYPE_CREDIT: number = 1;
    static TYPE_DEBIT: number = 2;
  
    private amount: number;
    private type: number;
    private text: string;
  
    constructor(amount: number, type: number, text: string) {
      this.amount = amount;
      this.type = type;
      this.text = text;
    }
  
    getAmount(): number {
      return this.amount;
    }
  
    getType(): number {
      return this.type;
    }
  
    getText(): string {
      return this.text;
    }
  }
