const loader = document.getElementById("loader");
const booksContent = document.getElementById("books-content");

async function loadBooks() {
  loader.classList.remove("hidden");

  try {
    // симуляція затримки (можеш видалити в реальному запиті)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Справжній запит (замінити на твій бекенд або мок)
    const response = await fetch("https://api.example.com/books");
    const data = await response.json();

    booksContent.innerHTML = data
      .map(
        (book) =>
          `<div class="book-card">
         <h3>${book.title}</h3>
         <p>${book.author}</p>
       </div>`
      )
      .join("");
  } catch (err) {
    booksContent.innerHTML = "Помилка при завантаженні книжок.";
  } finally {
    loader.classList.add("hidden");
  }
}
