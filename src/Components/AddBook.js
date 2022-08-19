export default function AddBookForm() {
  return (
    <footer>
      <h2>Add a Book-</h2>
      <form className="inputForm">
        <div className="inputFields">
          <input
            type="text"
            placeholder="Author"
            className="userInput Author"
          />
          <input
            type="text"
            placeholder="Title"
            className="userInput Title"
          />
        </div>
        <button type="submit" className="addBookButton">
          Add Book
        </button>
      </form>
    </footer>
  );
}
