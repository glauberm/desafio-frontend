import Api from './Api';

const api = new Api();
const userInput = document.getElementById('user');

class Base {
  buildUserBox() {
    return userInput.addEventListener('input', async function () {
      const userValue = userInput.value;
      const user = await (
        api.getUser(userValue)
          .then((result) => {
            return result;
          })
      );

      console.log(user);
      return;
    });
  }

  render() {
    return this.buildUserBox();
  }
}

export default Base;
