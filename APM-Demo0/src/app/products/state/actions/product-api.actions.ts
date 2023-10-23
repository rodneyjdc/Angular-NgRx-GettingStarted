import { createAction, props } from "@ngrx/store";
import { Product } from "../../product";

export const loadProductsSuccess = createAction(
    '[Product] Load success',
    props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
    '[Product] Load failed',
    props<{ error: string }>()
);

export const updateProductSuccess = createAction(
    '[Product] Update Product success',
    props<{ product: Product }>()
);

export const updateProductFailure = createAction(
    '[Product] Update Product failed',
    props<{ error: string }>()
);

export const createProductSuccess = createAction(
    '[Product] Create Product success',
    props<{ product: Product }>()
);

export const createProductFailure = createAction(
    '[Product] Create Product failed',
    props<{ error: string }>()
);

export const deleteProductSuccess = createAction(
    '[Product] Delete Product success',
    props<{ productId: number }>()
);

export const deleteProductFailure = createAction(
    '[Product] Delete Product failed',
    props<{ error: string }>()
);