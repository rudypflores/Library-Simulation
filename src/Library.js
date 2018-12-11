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
  	let reducer = (accumulator, currentValue) => {accumulator + currentValue};
  	let average = (this._ratings.reduce(reducer))/this._ratings.length;
  	return average;
  }
}

//Child Classes of Media
class Book {
  constructor(author, pages) {
    this._author = author;
    this._pages = pages;
  }

  get author() {
  	return this._author;
  }

  get pages() {
  	return this._pages;
  }

  getAverageRating() {
    
  }

  toggleCheckOutStatus() {

  }

  addRating() {

  }
}

class Movie {

}

class CD {

}