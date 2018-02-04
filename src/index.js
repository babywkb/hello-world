import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const render = () => (ReactDOM.render(<App/>, document.getElementById('root')));

class Book {
  constractor(id, title) {
    this.id = id;
    this.title = title;
  }
  static createWhiteBook() {
    return new Book('', '');
  }
  static create(id,title) {
    return new Book(id, title);
  }
}

class BookList {
  constructor(list) {
    this.list = list;
  }
  static empty() {
    return new BookList([]);
  }
  add(book) {
    return new BookList([
      book, ...this.list
    ]);
  }
}

let booklist = BookList.empty();


console.log(booklist)

const getTitle = event => {
  axios.get('/api/books').then(response => (
    response.data.map(book => {
        booklist = booklist.add(book)
    })
  ))
  render();
};

const TitleGetButton = () => (<button onClick={getTitle}>
  タイトルを取得する
</button>);

const App = () => (<div>
  <h1>Hello, world!</h1>
  <ul>
    {booklist.list.map(book => (
    <li key={book.id}>
      <label>
        <span>
          {book.title}
        </span>
      </label>
    </li>)
  )}
    <TitleGetButton/>
  </ul>
</div>);

render();
