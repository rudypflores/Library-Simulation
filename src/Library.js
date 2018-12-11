/*
* JavaScript Library Simulator
* @Author Rudy L. Pichola-Flores
* Monday December 10, 2018
*/

//Main Parent Class
class Media {
  
}

//Child Classes of Media
class Book {
  constructor(author, title, pages) {
    this._author = author;
    this._title = title;
    this._pages = pages;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get author() {
  	return this._author;
  }

  get title() {
  	return this._title;
  }

  get pages() {
  	return this._pages;
  }

  get isCheckedOut() {
  	return this._isCheckedOut;
  }

  get ratings() {
  	return this._ratings;
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