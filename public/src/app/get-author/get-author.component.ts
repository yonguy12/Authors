import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-author',
  templateUrl: './get-author.component.html',
  styleUrls: ['./get-author.component.css']
})
export class GetAuthorComponent implements OnInit {
  Author: any = {name: "", quote: ""}
  id: any;
  

  constructor(private _AuthorService: AuthorService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAuthor()
  }

  getAuthor() {
    this.route.params.subscribe(params => {
      this.id = params
      console.log(this.id);
    })
    this._AuthorService.getAuthor(this.id).subscribe(data=> {
      console.log("this is data in get author", data);
      this.Author = data
      this.Author = this.Author[0]
    })
  }
}
