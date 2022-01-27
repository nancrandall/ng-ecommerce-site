import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  imageWidth: number = 100;
  bookAuthor : string = "Tom Jones";
  bookDescription : string = 'Book of historical fiction';
  bookImageUrl: string = 'app/assets/images/656.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
