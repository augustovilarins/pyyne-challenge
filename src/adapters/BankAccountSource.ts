interface BankAccountSource {
  getBalance(accountId: number): BankAccountBalance;
  getTransactions(
    accountId: number,
    fromDate: Date,
    toDate: Date
  ): BankAccountTransaction[];
}

interface BankAccountBalance {
  balance: number;
  currency: string;
}

interface BankAccountTransaction {
  amount: number;
  type: string;
  text: string;
}

export { BankAccountSource, BankAccountBalance, BankAccountTransaction };