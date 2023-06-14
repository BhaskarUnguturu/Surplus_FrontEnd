import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.products = [
      { id: 1, name: "Women's Black Top", images: ["assets/images/products/e1.jpeg", "assets/images/products/d2.jpg"], oldPrice: 20, newPrice: 14, discount: 10 },
      { id: 1, name: "Women's Black Top", images: ["assets/images/products/d2.jpg", "assets/images/products/e1.jpeg"], oldPrice: 20, newPrice: 14, discount: 10 },
      { id: 1, name: "Women's Black Top", images: ["assets/images/products/h3.jpg", "assets/images/products/h3.jpg"], oldPrice: 20, newPrice: 14, discount: 10 },
      { id: 1, name: "Women's Black Top", images: ["assets/images/products/f3.jpg", "assets/images/products/h1.jpg"], oldPrice: 20, newPrice: 14, discount: 10 },
      { id: 1, name: "Women's Black Top", images: ["assets/images/products/h1.jpg", "assets/images/products/i1.jpg"], oldPrice: 20, newPrice: 14, discount: 10 },
      { id: 1, name: "Women's Black Top", images: ["assets/images/products/i1.jpg", "assets/images/products/h2.jpg"], oldPrice: 20, newPrice: 14, discount: 10 },
      { id: 1, name: "Women's Black Top", images: ["assets/images/products/h2.jpg", "assets/images/products/d1.jpeg"], oldPrice: 20, newPrice: 14, discount: 10 },
      { id: 1, name: "Women's Black Top", images: ["assets/images/products/d1.jpeg", "assets/images/products/i2.jpg"], oldPrice: 20, newPrice: 14, discount: 10 },
      { id: 1, name: "Women's Black Top", images: ["assets/images/products/i2.jpg", "assets/images/products/h2.jpg"], oldPrice: 20, newPrice: 14, discount: 10 },
      { id: 1, name: "Women's Black Top", images: ["assets/images/products/h2.jpg", "assets/images/products/e2.jpg"], oldPrice: 20, newPrice: 14, discount: 10 },
      { id: 1, name: "Women's Black Top", images: ["assets/images/products/e2.jpg", "assets/images/products/p2.jpg"], oldPrice: 20, newPrice: 14, discount: 10 },
      { id: 1, name: "Women's Black Top", images: ["assets/images/products/g1.png", "assets/images/products/e1.jpeg"], oldPrice: 20, newPrice: 14, discount: 10 }
    ]
  }

}
