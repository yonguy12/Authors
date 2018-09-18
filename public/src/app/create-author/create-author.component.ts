import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {
  newAuthor: any;
  id: any;

  constructor(private _AuthorService: AuthorService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.newAuthor = { name: "", quote: "" };
  }

  createAuthor() {
    console.log(this.newAuthor)
    this._AuthorService.createAuthor(this.newAuthor).subscribe(data => {
      console.log(data);
    })
    this.newAuthor = { name: "", quote: "" };
    this.router.navigate(['/authors'])
  }
}
