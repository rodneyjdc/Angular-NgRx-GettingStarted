import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  pageTitle = 'Products';

  @Input() products: Product[];
  @Input() selectedProduct: Product;
  @Input() displayCode: boolean;
  @Input() errorMessage: string;

  @Output() displayCodeChanged = new EventEmitter();
  @Output() initiliazeNewProduct = new EventEmitter();
  @Output() productWasSelected = new EventEmitter();

  newProduct(): void {
    this.initiliazeNewProduct.emit();
  }

  checkChanged(): void {
    this.displayCodeChanged.emit();
  }

  productSelected(product: Product): void {
    this.productWasSelected.emit(product);
  }

}
