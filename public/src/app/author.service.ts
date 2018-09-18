import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private _http: HttpClient) { }

  allAuthors() {
    console.log("served all authors")
    return this._http.get('/api/authors');
  }

  createAuthor(data) {
    console.log("service to create author")
    return this._http.post('/api/authors', data)
  }
  deleteAuthor(id) {
    return this._http.delete('/api/authors/' + id)
  }
  editAuthor(id, updateAuthor) {
    return this._http.patch('/api/authors/' + id, updateAuthor)
  }
  getAuthor(id) {
    console.log("I am at getAuthor")
    console.log("this is id in get author", id.id)
    return this._http.get('/api/authors/' + id.id)
  }
}
