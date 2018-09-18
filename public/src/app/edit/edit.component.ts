import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  updateAuthor: any;
  id: any;

  constructor(private _AuthorService: AuthorService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.updateAuthor = { name: "", quote: "" };
    this.getAuthor()

  }

  editAuthor() {
    this._AuthorService.editAuthor(this.updateAuthor._id, this.updateAuthor).subscribe(data => {
      console.log(data);
    })
    this.router.navigate(['/authors'])
  }

  getAuthor() {
    this.route.params.subscribe(params => {
      this.id = params
      console.log(this.id);
    })
    this._AuthorService.getAuthor(this.id).subscribe(data=> {
      console.log("this is data in get author", data);
      this.updateAuthor = data
      this.updateAuthor = this.updateAuthor[0]
    })
  }
}
