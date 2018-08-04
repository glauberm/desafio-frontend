import User from './User';

const userInput = document.getElementById('user');
const defaultUser = 'glauberm';

class Base {
  render() {
    this.fillUserInput();
    const user = new User();
    user.render();
  }

  fillUserInput() {
    document.addEventListener('DOMContentLoaded', function () {
      userInput.setAttribute('value', defaultUser);
      userInput.dispatchEvent(new Event('input'));
    });
  }
}

export default Base;
