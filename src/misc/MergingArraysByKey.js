const transactions = [
  { date: '2023-04-01', amount: 5, tId: 1 },
  { date: '2023-04-01', amount: 4, tId: 2 },
  { date: '2023-04-05', amount: 8, tId: 3 },
];

const mergedTransactions = [];
for (let i = 0; i < transactions.length; i++) {
  const sameDateTransaction = mergedTransactions.find(
    (log) => log.date === transactions[i].date
  );
  if (sameDateTransaction) {
    sameDateTransaction.amount += transactions[i].amount;
  } else {
    mergedTransactions.push(transactions[i]);
  }
}

console.log('Original transactions: ');
console.log(transactions);
console.log();
console.log('Merged transactions: ');
console.log(mergedTransactions);
