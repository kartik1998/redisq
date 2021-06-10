import User from '../src/user/user';
import { expect } from 'chai';

describe('User test suite', () => {
  it('should have proper name', () => {
    const user = new User('kartik', 22);
    expect(user.getName()).to.equal('kartik');
  });
});
