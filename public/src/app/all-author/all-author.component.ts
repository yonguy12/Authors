import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-all-author',
  templateUrl: './all-author.component.html',
  styleUrls: ['./all-author.component.css']
})
export class AllAuthorComponent implements OnInit {
  authors: any

  constructor(private _AuthorService: AuthorService) { }

  ngOnInit() {
    this.allAuthors();
  }

  allAuthors() {
    this._AuthorService.allAuthors().subscribe(data => {
      this.authors = data;
      console.log("this is all authors", this.authors)
    })
  }
  deleteAuthor(id) {
    this._AuthorService.deleteAuthor(id).subscribe(data => {
      console.log(data)
    })
    this.allAuthors();
  }

}
