function checkForSpam(message) {
  message = message.toLowerCase();
  let spamWord_0 = 'spam';
  let spamWord_1 = 'sale';
  let hasSpam = message.includes(spamWord_0) || message.includes(spamWord_1);
  return hasSpam;
}

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
