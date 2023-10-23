import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { ProductPageActions, ProductApiActions } from './actions';
import { ProductService } from "../product.service";
import { catchError, concatMap, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class ProductEffects {
    constructor(private actions$: Actions, 
        private productService: ProductService){}

    loadProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductPageActions.loadProducts),
            mergeMap( action => 
                this.productService.getProducts().pipe(
                    map(products => ProductApiActions.loadProductsSuccess({ products: products})),
                    catchError(err => of(ProductApiActions.loadProductsFailure({ error: err})))
                ))
        );
    });

    updateProduct$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductPageActions.updateProduct),
            concatMap(action => 
                this.productService.updateProduct(action.product).pipe(
                    map(product => ProductApiActions.updateProductSuccess({ product: product })),
                    catchError(err => of(ProductApiActions.updateProductFailure({ error: err })))
            ))
        );
    });

    createProduct$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductPageActions.createProduct),
            concatMap(action => 
                this.productService.createProduct(action.product).pipe(
                    map(product => ProductApiActions.createProductSuccess({ product: product })),
                    catchError(err => of(ProductApiActions.createProductFailure({ error: err })))
                )
            )
        );
    });

    deleteProduct$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductPageActions.deleteProduct),
            concatMap(action =>
                this.productService.deleteProduct(action.productId).pipe(
                    map(() => ProductApiActions.deleteProductSuccess({ productId: action.productId })),
                    catchError(err => of(ProductApiActions.deleteProductFailure({ error: err })))
                )
            )
        );
    });
}