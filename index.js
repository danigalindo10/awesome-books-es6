import Store from './modules/store';
import awesomeBooks from './modules/awesome-books';
import Book from './modules/book';
// import { DateTime } from './node_modules/luxon/src/luxon.js';

// SET CURRENT TIME
// document.getElementById('date').innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

// Event: Display Books
document.addEventListener('DOMContentLoaded', awesomeBooks.displayBooks);

// Event: Add a Book
document.querySelector('#new-book').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#new-title').value;
  const author = document.querySelector('#new-author').value;

  // Instatiate book
  const book = new Book(title, author);

  // Add Book to UI
  awesomeBooks.addBookToList(book);

  // Store.addBook(book);
  Store.addBook(book);

  // clear fields
  awesomeBooks.clearField();
});

// Event: Remove a Book
document.querySelector('#all-books').addEventListener('click', (e) => {
  awesomeBooks.deleteBook(e.target);

  Store.removeBook(e.target.previousElementSibling.textContent);
});

// Date and Time
const d = new Date();
document.getElementById('date').innerHTML = d;

// Activate and desactivate sections

const allBooksSection = document.getElementById('book-library');
const addNewBookSection = document.getElementById('add-new-book');
const contactSection = document.getElementById('contact-section');
const listLink = document.getElementById('list-link');
const addLink = document.getElementById('add-link');
const contactLink = document.getElementById('contact-link');

listLink.addEventListener('click', () => {
  allBooksSection.classList.remove('hide');
  addNewBookSection.classList.add('hide');
  contactSection.classList.add('hide');
});

// addLink
addLink.addEventListener('click', () => {
  allBooksSection.classList.add('hide');
  addNewBookSection.classList.remove('hide');
  contactSection.classList.add('hide');
});

// contactLink
contactLink.addEventListener('click', () => {
  allBooksSection.classList.add('hide');
  addNewBookSection.classList.add('hide');
  contactSection.classList.remove('hide');
});
