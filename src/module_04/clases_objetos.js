class Book {
  constructor(titulo, autor, anio, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.genero = genero;
  }

  getAuthor(){
    return this.autor
  }

  getGender(){
    return this.genero
  }

  bookInfo() {
    return `${this.titulo} es un libro de ${this.genero} 
        escrito por ${this.autor} en el año ${this.anio}`;
  }
}

let books = [];

while (books.length < 2) {
    
  let titulo = prompt("Introduzca el titulo del libro");
  let autor = prompt("Introduzca el autor del libro");
  let anio = prompt("Indroduzca el año del libro");
  let genero = prompt("Intoduzca el género del libro").toLowerCase();

  if (
    titulo != "" &&
    autor != "" &&
    !isNaN(anio) &&
    anio.length == 4 &&
    (genero == "aventura" || genero == "terror" || genero == "fantasia")
  ) 
  {
    books.push(new Book(titulo, autor, anio, genero));
  }
}

const showAllBooks = () => {
  console.log(books);
  
}

const showAuthors = () =>{
  let autor = []

  for (const book of books){
    autor.push(book.getAuthor());

  }
  console.log(autor.sort());
  
}

const showGender = () => {
  const genero = prompt('Introduzca el genero a buscar')

  for (const book of books) {
    if (book.getGender() == genero) {
      console.log(book.bookInfo());
    }
  }
}

//showAllBooks();
//showAuthors();
showGender();
