const baseUrl = 'https://api.github.com';

class Api {
  async getRequest(url) {
    try {
      const response = await fetch(url);
      return await response.json();
    }
    catch (error) {
      console.log('Erro!' + error);
    }
  }

  getUser(user) {
    const url = baseUrl + '/users/' + user;

    return this.getRequest(url);
  }
}

export default Api;
