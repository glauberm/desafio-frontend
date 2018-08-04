import Api from './Api';

const api = new Api();
const userInput = document.getElementById('user');
const reposEl = document.getElementById('repos');
const followersEl = document.getElementById('followers');
const followingEl = document.getElementById('following');
const reposTbody = document.getElementById('repos-tbody');

class User {
  render() {
    return this.buildUserBox();
  }

  removeReposRows() {


    return;
  }

  buildUserBox() {
    return userInput.addEventListener('input', async function () {
      const userValue = userInput.value;
      const user = await (
        api.getUser(userValue)
          .then((result) => {
            return result;
          })
      );
      const repos = await (
        api.getRepos(userValue)
          .then((result) => {
            return result;
          })
      );

      function fillUserFields() {
        reposEl.innerText = user.public_repos;
        followersEl.innerText = user.followers;
        followingEl.innerText = user.following;

        return;
      }

      function removeReposRows() {
        while (reposTbody.firstChild) {
          reposTbody.removeChild(reposTbody.firstChild);
        }

        return;
      }

      function fillReposRows() {
        removeReposRows(reposTbody);
        let html = '';
        Object.keys(repos).map((key) => {
          html += '<tr class="repos__table-row">';
          html += '<td class="repos__table-cell">';
          html += '<a class="repos__table-link" href="' + repos[key].html_url + '" target="__blank">';
          html += repos[key].full_name;
          html += '</a></td></tr>';
        });
        reposTbody.innerHTML = html;

        return;
      }

      fillUserFields();
      removeReposRows();
      fillReposRows();
    });
  }
}

export default User;
