const baseUrl = 'https://api.github.com';

class Api {
  async getRequest(url) {
    try {
      const response = await fetch(url);
      if (response.ok === true) {
        return await response.json();
      } else {
        return;
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  getUser(user) {
    const url = baseUrl + '/users/' + user;
    return this.getRequest(url);
  }

  getRepos(user) {
    const url = baseUrl + '/users/' + user + '/repos?per_page=5&sort=updated';
    return this.getRequest(url);
  }
}

export default Api;
