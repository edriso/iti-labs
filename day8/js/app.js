
async function getUsers() {
    let url = 'https://reqres.in/api/users/1';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();
    let html = '';
    for (var user in users)
  {
        let htmlSegment = `<div class="user">
                            <img src="${users[user]}" >
                            <h2>${users[user]} ${users[user]}</h2>
                            <div class="email"><a href="email:${users[user]}">${users[user] }</a></div>
                        </div>`;

        html += htmlSegment;
    };

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();
