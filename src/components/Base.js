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

    let headingOne = document.createElement('h1');
    headingOne.innerText = user.login;
    document.getElementById('root').appendChild(headingOne);

    return headingOne;
  }

  render() {
    return this.buildUserBox();
  }
}

export default Base;
