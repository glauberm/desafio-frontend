import User from './User';

const userInput = document.getElementById('user');
const defaultUser = 'glauberm';

class Base {
  render() {
    const user = new User();
    user.render();
    this.fillUserInput();
  }

  fillUserInput() {
    document.addEventListener('DOMContentLoaded', function () {
      userInput.setAttribute('value', defaultUser);
      userInput.dispatchEvent(new Event('input'));
    });
  }
}

export default Base;
