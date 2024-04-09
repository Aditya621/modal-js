const modal = document.querySelectorAll('.modal');
const showmodal = document.querySelector('.open-modal');
const closemodal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

modal.forEach((item) => {
  item.addEventListener('click', () => {
    showmodal.classList.remove('hidden');
    overlay?.classList.remove('hidden');
  });
});

// Simple Approch

// for (let i = 0; i < modal.length; i++) {
//   modal[i].addEventListener('click', () => {
//     showmodal?.classList.remove('hidden');
//   });
// }

overlay.addEventListener('click', () => {
  showmodal.classList.add('hidden');
  overlay.classList.add('hidden');
});

closemodal?.addEventListener('click', () => {
  showmodal?.classList.add('hidden');
  overlay.classList.add('hidden');
});
