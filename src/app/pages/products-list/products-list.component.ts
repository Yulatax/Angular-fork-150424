import {Component} from '@angular/core';
import {Product} from '../../shared/products/product.interface';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
    readonly productsMock: Product[] = productsMock;

    onAddProductToCart(product: Product): void {
        // eslint-disable-next-line no-console
        console.log('This product was add to cart: ', product.name);
    }
}
