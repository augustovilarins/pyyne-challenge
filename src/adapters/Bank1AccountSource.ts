import Bank1AccountSource from "../integration/bank1/Bank1AccountSource";
import Bank1Transaction from "../integration/bank1/Bank1Transaction";
import { BankAccountBalance, BankAccountSource, BankAccountTransaction } from "./BankAccountSource";

export default class Bank1AccountSourceAdapter implements BankAccountSource {
  private bank1AccountSource: Bank1AccountSource;

  constructor(bank1AccountSource: Bank1AccountSource) {
    this.bank1AccountSource = bank1AccountSource;
  }

  getBalance(accountId: number): BankAccountBalance {
    const balance = this.bank1AccountSource.getAccountBalance(accountId);
    const currency = this.bank1AccountSource.getAccountCurrency(accountId);
    return { balance, currency };
  }

  getTransactions(
    accountId: number,
    fromDate: Date,
    toDate: Date
  ): BankAccountTransaction[] {
    const bank1Transactions = this.bank1AccountSource.getTransactions(
      accountId,
      fromDate,
      toDate
    );
    return bank1Transactions.map((transaction) => ({
      amount: transaction.getAmount(),
      type:
        transaction.getType() === Bank1Transaction.TYPE_CREDIT
          ? "credit"
          : "debit",
      text: transaction.getText(),
    }));
  }
}