// Calculate age based on birth date and current date

const ageElement = document.getElementById('age');

const birthDate = new Date(2002, 2, 20); // 2002, march, 20
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();

const hasHadBirthday =
  today.getMonth() > birthDate.getMonth() ||
  (today.getMonth() === birthDate.getMonth() &&
   today.getDate() >= birthDate.getDate());

if (!hasHadBirthday) {
  age--;
}

ageElement.textContent = age;

// Disable right-click context menu on all images to prevent saving or copying them

document.querySelectorAll("img").forEach(img => {
  img.addEventListener("contextmenu", e => e.preventDefault());
});