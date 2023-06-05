import Bank2AccountSource from "../integration/bank2/Bank2Source";
import { BankAccountBalance, BankAccountSource, BankAccountTransaction } from "./BankAccountSource";

export default class Bank2AccountSourceAdapter implements BankAccountSource {
  private bank2AccountSource: Bank2AccountSource;

  constructor(bank2AccountSource: Bank2AccountSource) {
    this.bank2AccountSource = bank2AccountSource;
  }

  getBalance(accountId: number): BankAccountBalance {
    const bank2Balance = this.bank2AccountSource.getBalance(accountId);
    return {
      balance: bank2Balance.getBalance(),
      currency: bank2Balance.getCurrency(),
    };
  }

  getTransactions(
    accountId: number,
    fromDate: Date,
    toDate: Date
  ): BankAccountTransaction[] {
    const bank2Transactions = this.bank2AccountSource.getTransactions(
      accountId,
      fromDate,
      toDate
    );
    return bank2Transactions.map((transaction) => ({
      amount: transaction.getAmount(),
      type: transaction.getType().toLowerCase(),
      text: transaction.getText(),
    }));
  }
}