const header = document.querySelector('h1');
header.addEventListener('mouseover', () => {
  header.style.color = 'red';
});
header.addEventListener('mouseout', () => {
  header.style.color = 'black';
});
