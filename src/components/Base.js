import Api from './Api';

class Base {
  async buildUserBox() {
    const api = new Api();
    const user = await (
      api.getUser('glauberm')
        .then((result) => {
          return result;
        })
    );

    let userBox = document.createElement('section');

    userBox.innerHTML = (
      '<h1>' + user.login + '</h1>' +
      '<p>' + user.followers + '</p>'
    );

    document.getElementById('root').appendChild(userBox);

    return;
  }

  render() {
    return this.buildUserBox();
  }
}

export default Base;
