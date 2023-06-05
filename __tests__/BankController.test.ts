import BankController, { GetAccountBalanceRequest, GetTransactionsRequest } from '../src/controllers/BankController';

describe("BankController", () => {
  const bankController = new BankController();

  describe("getBalances", () => {
    const request: GetAccountBalanceRequest = {
      accounts: [
        { id: 1, bankName: "Bank1" },
        { id: 2, bankName: "Bank2" },
      ],
    };

    it("returns an array of balances", () => {
      const balances = bankController.getBalances(request);
      expect(balances).toEqual(expect.any(Array));
      expect(balances.length).toBe(request.accounts.length);
      expect(balances[0]).toEqual({ balance: 215.5, currency: "USD" });
      expect(balances[1]).toEqual({ balance: 512.5, currency: "USD" });
    });
  });

  describe("getTransactions", () => {
    const request: GetTransactionsRequest = {
      accounts: [
        { id: 1, bankName: "Bank1" },
        { id: 2, bankName: "Bank2" },
      ],
      fromDate: new Date("2021-01-01"),
      toDate: new Date("2021-01-31"),
    };

    it("returns an array of bank transactions", () => {
      const transactions = bankController.getTransactions(request);
      expect(transactions).toEqual(expect.any(Array));
      expect(transactions.length).toBe(request.accounts.length);

      transactions.forEach((transaction) => {
        expect(transaction.bankName).toEqual(expect.any(String));
        expect(transaction.transactions).toEqual(expect.any(Array));
        expect(transaction.transactions.length).toBeGreaterThan(0);

        transaction.transactions.forEach((t) => {
          expect(t).toHaveProperty("amount");
          expect(t).toHaveProperty("type");
          expect(t).toHaveProperty("text");
        });
      });
    });
  });
});
