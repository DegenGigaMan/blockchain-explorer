import { Blockchain, Transaction } from "../blockchain";
import EC from 'elliptic';

const blockchainInstance = new Blockchain();
blockchainInstance.difficulty = 1;

const walletKeys = [];
const ec = new EC.ec('secp256k1');
const key = ec.genKeyPair();
walletKeys.push({
  keyObj: key,
  publicKey: key.getPublic('hex'),
  privateKey: key.getPrivate('hex'),
});

const txn1 = new Transaction(walletKeys[0].publicKey, 'John', 10);
txn1.signTransaction(key);
blockchainInstance.addTransaction(txn1);

const txn2 = new Transaction(walletKeys[0].publicKey, 'John', 35);
txn2.signTransaction(key);
blockchainInstance.addTransaction(txn2);

const txn3 = new Transaction(walletKeys[0].publicKey, 'Steve', 15);
txn3.signTransaction(key);
blockchainInstance.addTransaction(txn3);

blockchainInstance.minePendingTransactions('my-wallet-address');

export const getBlockchain = () => {
  console.log(blockchainInstance);
  return blockchainInstance.chain;
};

export const setDifficulty = (difficulty) => {
  blockchainInstance.difficulty = difficulty;
}

export const setRewards = (reward) => {
  blockchainInstance.miningReward = reward;
}

export const addTransaction = (toAddress, amount) => {
  const trans = new Transaction(walletKeys[0].publicKey, toAddress, amount);
  trans.signTransaction(key);
  blockchainInstance.addTransaction(trans);
  return true;
}

export const getPendingTransactions = () => {
  return blockchainInstance.pendingTransactions;
}

export const mineTransactions = () => {
  blockchainInstance.minePendingTransactions('my-wallet-address');
  return;
}

export const getAddressBalance = (address) => {
  return blockchainInstance.getAddressBalance(address);
}