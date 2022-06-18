import { Component, OnInit } from '@angular/core';
import { Product } from './product/interface'

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
	products!: Product[];

	constructor() { }

	ngOnInit(): void {
	}

}