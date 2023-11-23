document.addEventListener("DOMContentLoaded", function () {
  // Получаем все заголовки h2
  const headings = document.querySelectorAll('h2');

  // Добавляем обработчик события для каждого заголовка
  headings.forEach((heading) => {
    heading.addEventListener('click', function () {
      // Получаем следующий за заголовком блок
      const nextBlock = heading.nextElementSibling;

      // Переключаем видимость блока
      if (nextBlock.style.display === 'none' || nextBlock.style.display === '') {
        nextBlock.style.display = 'block';
      } else {
        nextBlock.style.display = 'none';
      }
    });
  });
});