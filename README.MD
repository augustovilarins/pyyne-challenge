# README

This project is a software solution for retrieving bank account balances and transactions from multiple banks. It provides a `BankController` class that serves as the entry point for accessing bank account data. The controller interacts with various integration modules, each responsible for fetching data from a specific bank.

## Architecture

The project follows a layered architecture with the following components:

- `controller`: Contains the `BankController` class that handles incoming requests and delegates them to the appropriate service.
- `integration`: Contains modules for integrating with different banks.
- `services`: Contains the `BankService` class that acts as a bridge between the controller and the integration modules.
- `adapters`: Contains adapter classes that adapt the data returned by the integration modules to a common format.

## How to Run the Project

To run the project, follow these steps:

1. Ensure that you have Node.js and npm (Node Package Manager) installed on your system.
2. Clone the repository to your local machine.
3. Install the project dependencies by running the following command in the project root directory:

   npm install

4. Once the dependencies are installed, you can run the project using the following command:

   npm start


## How to Run the Test Suite

The project includes a test suite to ensure the correctness of the implemented functionalities. To run the test suite, follow these steps:

1. Ensure that you have completed the steps mentioned in the "How to Run the Project" section.
2. Run the following command in the project root directory:

   npm test


The test suite will execute and display the test results in the console.

## Usage

To use the `BankController` and retrieve bank account balances and transactions, follow these steps:

1. Import the necessary classes and types in your code:
   ```typescript
   import BankController, { GetAccountBalanceRequest, GetTransactionsRequest } from './src/controllers/BankController';
   ```

2. Create an instance of the `BankController`:
   ```typescript
   const bankController = new BankController();
   ```

3. Retrieve account balances by calling the `getBalances` method and passing a `GetAccountBalanceRequest` object:
   ```typescript
   const request: GetAccountBalanceRequest = {
     accounts: [
       { id: 1, bankName: 'Bank1' },
       { id: 2, bankName: 'Bank2' },
     ],
   };

   const balances = bankController.getBalances(request);
   ```

4. Retrieve account transactions by calling the `getTransactions` method and passing a `GetTransactionsRequest` object

## Additional comments

During the implementation of this project, a few challenges were encountered. One challenge was handling the integration with multiple banks, each with its own data structure and API. This required creating adapter classes to normalize the data and ensure consistency across different banks. Another challenge was designing the architecture in a way that allows for easy scalability and addition of new bank integrations in the future.

While the current solution provides a solid foundation for retrieving bank account balances and transactions, there is always room for improvement. For example, the error handling and logging could be enhanced to provide better visibility into any potential issues.

If given the opportunity, I would be more than willing to collaborate and further improve the solution together. 
