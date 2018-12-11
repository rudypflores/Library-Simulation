/*
* JavaScript Library Simulator
* @Author Rudy L. Pichola-Flores
* Monday December 10, 2018
*/

//Main Parent Class
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
  	return this._title;
  }

  get isCheckedOut() {
  	return this._isCheckedOut;
  }

  set isCheckedOut(newIsCheckedOut) {
  	this._isCheckedOut = newIsCheckedOut;
  }

  get ratings() {
  	return this._ratings;
  }

  toggleCheckOutStatus() {
  	this._isCheckedOut === false ? this._isCheckedOut = true : this._isCheckedOut = false;
  }

  getAverageRating() {
  	let average = Math.round((this.ratings.reduce((acc, cur) => acc + cur))/this.ratings.length);
  	return average;
  }

  addRating(rating) {
    this.ratings.push(rating);
  }
}

//Child Classes of Media
class Book extends Media {
  constructor(author, title, pages) {
  	super(title); //adds title, rating, and checkedOut status
    this._author = author;
    this._pages = pages;
  }

  get author() {
  	return this._author;
  }

  get pages() {
  	return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
  	super(title);
  	this._director = director;
  	this._runTime = runTime;
  }

  get director() {
  	return this._director;
  }

  get runTime() {
  	return this._runTime;
  }
}

//Test Cases

//Book Instance
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(`Book name: ${historyOfEverything.title}\nItem checked out: ${historyOfEverything.isCheckedOut}`);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(`The average ratings of this book is: ${historyOfEverything.getAverageRating()}\n`);

//Movie Instance
const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(`Movie title: ${speed.title}\nItem checked out: ${speed.isCheckedOut}`);
speed.addRating(1);
speed.addRating(2);
speed.addRating(5);
console.log(`The average ratings of this movie is: ${speed.getAverageRating()}`);
