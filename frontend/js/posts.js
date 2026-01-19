const API = 'http://localhost:3000';
const token = localStorage.getItem('token');

if (!token) window.location.href = 'login.html';

const postsDiv = document.getElementById('posts');

async function loadPosts() {
  const res = await fetch(`${API}/posts`);
  const data = await res.json();

  postsDiv.innerHTML = '';

  data.posts.forEach(p => {
    const div = document.createElement('div');
    div.className = 'post';

 div.innerHTML = `
  <h3>${p.title}</h3>
  <p>${p.description}</p>
  <span class="author">Posted by ${p.author}</span>
  <button onclick="deletePost(${p.id})">Delete</button>
`;


    postsDiv.appendChild(div);
  });
}

loadPosts();

document.getElementById('createPostBtn').onclick = async () => {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;

  await fetch(`${API}/posts/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ title, description })
  });

  loadPosts();
};

async function deletePost(id) {
  await fetch(`${API}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  loadPosts();
}

document.getElementById('logoutBtn').onclick = () => {
  localStorage.removeItem('token');
  window.location.href = 'login.html';
};
