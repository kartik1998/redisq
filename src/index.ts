import prompt from 'prompt-sync';
import User from './user/user';

const scan = prompt();

let testCases = Number(scan());

while (testCases-- > 0) {
  const A = scan()
    .split(' ')
    .map((num) => parseInt(num));
  const user = new User('ken', A[0]);
  console.log(user);
}
