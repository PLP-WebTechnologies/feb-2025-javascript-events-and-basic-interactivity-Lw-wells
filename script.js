

function changeImage(img) {
    document.getElementById('mainImage').src = img.src;
  }
  
  function openTab(id) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.getElementById(id).style.display = 'block';
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('clickBtn').addEventListener('click', () => {
      alert('Button clicked!');
    });
  
    const hoverBox = document.getElementById('hoverBox');
    hoverBox.addEventListener('mouseover', () => hoverBox.style.backgroundColor = 'lightblue');
    hoverBox.addEventListener('mouseout', () => hoverBox.style.backgroundColor = '');
  
    document.getElementById('keyInput').addEventListener('keypress', (e) => {
      console.log(`Key pressed: ${e.key}`);
    });
  
    document.getElementById('secretBtn').addEventListener('dblclick', () => {
      alert('Secret double-click activated! 🕵️‍♂️');
    });
  
    const colorBtn = document.getElementById('colorBtn');
    colorBtn.addEventListener('click', () => {
      colorBtn.style.backgroundColor = colorBtn.style.backgroundColor === 'crimson' ? 'green' : 'crimson';
    });
  
    const password = document.getElementById('password');
    const feedback = document.getElementById('feedback');
    password.addEventListener('input', () => {
      feedback.textContent = password.value.length < 8 ? 'Password must be at least 8 characters' : '✅';
      feedback.style.color = password.value.length < 8 ? 'red' : 'green';
    });
  
    document.getElementById('myForm').addEventListener('submit', (e) => {
      const email = document.getElementById('email').value;
      const passwordValue = password.value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!emailRegex.test(email) || passwordValue.length < 8) {
        e.preventDefault();
        alert('Please enter a valid email and password with at least 8 characters.');
      }
    });
  });
  