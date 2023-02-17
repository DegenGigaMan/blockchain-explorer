# Blockchain Explorer Frontend

React application that allows you to interact with a blockchain. You can see the blocks on chain, see transaction within them and even create new transactions and mine blocks. 

Built on top of a simple Blockchain implementation in Javascript (/src/blockchain.js).

## Live demo
**[Check it out here.](https://blockchain-explorer-nine.vercel.app/)** You can create transactions, mine blocks and explore your own blockchain.

## Getting Started
Get a copy of the Blockchain Explorer front-end running on your local machine (for playing around, testing or development).

```
git clone https://github.com/DegenGigaMan/blockchain-explorer.git
```

Install the dependencies:
```
cd blockchain-explorer
npm install
```

Run the application:
```
npm start
```

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

## Screens

**Homepage:** Seeing blocks on the chain & exploring transactions in each block.

**Creating new transactions:** You can create new transactions to any wallet for any amount (no validation). New transactions will be added to the "pending transactions", ready to be included in the next block.

**Pending transactions:** List of all pending transactions. These will be included in the next block when the mining process starts.

**Wallet details:** You can click on any wallet address and see an overview of that wallet: its current balance and all transaction to/from that wallet.



*This is for educational purposes only. Use it to learn how blockchains operate.*