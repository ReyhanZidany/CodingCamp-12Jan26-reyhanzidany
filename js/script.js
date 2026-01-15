const userNameInput = prompt("Enter your name:", "Guest");
const userNameDisplay = document.getElementById("userName");

if (userNameInput && userNameInput.trim() !== "") {
  userNameDisplay.innerText = userNameInput;
} else {
  userNameDisplay.innerText = "Guest";
}

const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const birthday = document.getElementById("birthday").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("messageText").value;

  if (!name || !birthday || !gender || !email || !phone || !message) {
    alert("Please fill in all fields!");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address!");
    return;
  }

  const resultBox = document.getElementById("result");
  const resultContent = document.getElementById("resultContent");

  resultContent.innerHTML = `
    <p><b>Name:</b> ${name}</p>
    <p><b>Date of Birth:</b> ${birthday}</p>
    <p><b>Gender:</b> ${gender}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Message:</b> ${message}</p>
    <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
  `;

  resultBox.classList.remove("hidden");

  resultBox.scrollIntoView({ behavior: 'smooth' });
});

