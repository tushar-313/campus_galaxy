const API = 'http://localhost:3000';
const token = localStorage.getItem('token');

// TYPEWRITER EFFECT
const text = "Campus Galaxy";
let index = 0;
const speed = 120;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

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

// 🌌 CUSTOM CURSOR LOGIC
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

let mouseX = 0, mouseY = 0;
let outlineX = 0, outlineY = 0;

// Mouse move
document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  dot.style.left = `${mouseX}px`;
  dot.style.top = `${mouseY}px`;
});

// Smooth trailing effect
function animateCursor() {
  outlineX += (mouseX - outlineX) * 0.15;
  outlineY += (mouseY - outlineY) * 0.15;

  outline.style.left = `${outlineX}px`;
  outline.style.top = `${outlineY}px`;

  requestAnimationFrame(animateCursor);
}

animateCursor();

// Hover effect on interactive elements
const hoverTargets = ['button', 'a', 'input', 'textarea'];

hoverTargets.forEach(tag => {
  document.querySelectorAll(tag).forEach(el => {
    el.addEventListener('mouseenter', () => {
      outline.style.transform = 'translate(-50%, -50%) scale(1.6)';

    });
    el.addEventListener('mouseleave', () => {
      outline.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });
});
