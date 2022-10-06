class movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
var movie1 = new movie("Vikram", "Raj Kamal", "4.5");
console.log(movie1.title, movie1.studio, (movie1.rating = "5"));

class movie2 {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
var movie02 = new movie2("PS1", "Lyca", "5");
console.log(movie02.title, movie02.studio, movie02.rating);

class Movie3 {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
