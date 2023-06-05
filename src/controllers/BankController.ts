import {
  BankAccountBalance,
  BankAccountTransaction,
} from "../adapters/BankAccountSource";
import BankService from "../services/BankService";

type GetBalancesResponse = BankAccountBalance[];

type GetTransactionsResponse = Array<{
  bankName: string;
  transactions: BankAccountTransaction[];
}>;

type BankAccount = {
  id: number;
  bankName: string;
};

export type GetAccountBalanceRequest = {
  accounts: BankAccount[];
};

export type GetTransactionsRequest = {
  accounts: BankAccount[];
  fromDate: Date;
  toDate: Date;
};

export default class BankController {
  private bankService: BankService;

  constructor() {
    this.bankService = new BankService();
  }

  getBalances({ accounts }: GetAccountBalanceRequest): GetBalancesResponse {
    return this.bankService.getBalances(accounts);
  }

  getTransactions({
    accounts,
    fromDate,
    toDate,
  }: GetTransactionsRequest): GetTransactionsResponse {
    return this.bankService.getTransactions(accounts, fromDate, toDate);
  }
}