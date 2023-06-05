import BankController, {
  GetTransactionsRequest,
} from "../controllers/BankController";

const bankController = new BankController();

export function printTransactions(data: GetTransactionsRequest) {
  bankController.getTransactions(data).forEach(({ bankName, transactions }) => {
    console.log(`Transactions for ${bankName}:`);
    transactions.forEach((transaction) => {
      console.log(
        `- Transaction: Amount: ${transaction.amount} | Type: ${transaction.type} | Text: ${transaction.text}`
      );
    });
  });
}

export default function printBalance() {
    console.log(bankController.getBalances)
}
