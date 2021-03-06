import Api from './Api';

const api = new Api();
const userInput = document.getElementById('user');
const userImg = document.getElementById('user-img');
const userLink = document.getElementById('user-link');
const userReposLink = document.getElementById('user-repos-link');
const userStarredLink = document.getElementById('user-starred-link');
const reposDd = document.getElementById('repos');
const followersDd = document.getElementById('followers');
const followingDd = document.getElementById('following');
const reposTbody = document.getElementById('repos-tbody');

class User {
  render() {
    return this.buildUserBox();
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
        userImg.setAttribute('src', user.avatar_url);
        userLink.setAttribute('href', user.html_url);
        reposDd.innerText = user.public_repos;
        followersDd.innerText = user.followers;
        followingDd.innerText = user.following;
        userReposLink.setAttribute('href', user.html_url + '?tab=repositories');
        userStarredLink.setAttribute('href', user.html_url + '?tab=stars');

        return;
      }

      function fillReposRows() {
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
      fillReposRows();
    });
  }
}

export default User;
