enum TRANSACTION_TYPES {
  DEBIT = 'DEBIT',
  CREDIT = 'CREDIT',
}

export class Bank2AccountTransaction {
  static TRANSACTION_TYPES = TRANSACTION_TYPES;

  private amount: number;
  private type: TRANSACTION_TYPES;
  private text: string;

  constructor(amount: number, type: TRANSACTION_TYPES, text: string) {
    this.amount = amount;
    this.type = type;
    this.text = text;
  }

  getAmount(): number {
    return this.amount;
  }

  getType(): TRANSACTION_TYPES {
    return this.type;
  }

  getText(): string {
    return this.text;
  }
}


