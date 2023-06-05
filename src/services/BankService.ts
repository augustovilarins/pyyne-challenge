import Bank2AccountSource from "../integration/bank2/Bank2Source";
import Bank1AccountSource from "../integration/bank1/Bank1AccountSource";
import Bank1AccountSourceAdapter from "../adapters/Bank1AccountSource";
import Bank2AccountSourceAdapter from "../adapters/Bank2AccountSource";
import { BankAccountBalance, BankAccountSource, BankAccountTransaction } from "../adapters/BankAccountSource";

type BankAccount = {
  id: number;
  bankName: string;
};

type BankTransactions = Array<{bankName:string,transactions:BankAccountTransaction[]}>

type BankAccountSources = {
  [bankName: string]: BankAccountSource;
}

export default class BankService {
  private banks: BankAccountSources;

  constructor() {
    this.banks = {
      Bank1: new Bank1AccountSourceAdapter(new Bank1AccountSource()),
      Bank2: new Bank2AccountSourceAdapter(new Bank2AccountSource()),
    };
  }

  getBalances(accounts: BankAccount[]) {
    return accounts.map(({ bankName, id }) => this.banks[bankName].getBalance(id));
  }

  getTransactions(accounts: BankAccount[], fromDate: Date, toDate: Date) {
    return accounts.reduce((result: BankTransactions, { bankName, id }) => {
      const transactions = this.banks[bankName].getTransactions(id, fromDate, toDate);
      result.push({ bankName, transactions });
      return result;
    }, []);
  }
}
