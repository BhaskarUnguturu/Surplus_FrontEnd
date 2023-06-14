import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'subCategory', 'action'];
  dataSource: any;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = [
      { position: 1, name: 'Hydrogen', price: 600, category: 'H' },
      { position: 2, name: 'Helium', price: 500, category: 'He' },
      { position: 3, name: 'Lithium', price: 400, category: 'Li' },
      { position: 4, name: 'Beryllium', price: 922, category: 'Be' },
      { position: 5, name: 'Boron', price: 811, category: 'B' },
      { position: 6, name: 'Carbon', price: 2107, category: 'C' },
      { position: 7, name: 'Nitrogen', price: 1467, category: 'N' },
      { position: 8, name: 'Oxygen', price: 9994, category: 'O' },
      { position: 9, name: 'Fluorine', price: 9984, category: 'F' },
      { position: 10, name: 'Neon', price: 1797, category: 'Ne' },
    ];
  }

}
