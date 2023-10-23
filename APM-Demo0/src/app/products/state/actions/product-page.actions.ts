import { createAction, props } from "@ngrx/store";
import { Product } from "../../product";

export const toggleProductCode = createAction(
    '[Product] Toggle Product Code'
);

export const setCurrentProduct = createAction(
    '[Product] Set Current Product',
    props<{ currentProductId: number}>()
);

export const clearCurrentProduct = createAction(
    '[Product] Clear Current Product'
);

export const initiliazeCurrentProduct = createAction(
    '[Product] Initiliaze Current Product'
);

// Actions for loading products
export const loadProducts = createAction(
    '[Product] Load'
);

// Actions for updating a product
export const updateProduct = createAction(
    '[Product] Update Product',
    props<{ product: Product }>()
);

// Actions for creating a product
export const createProduct = createAction(
    '[Product] Create Product',
    props<{ product: Product }>()
);

// Actions for deleting a product
export const deleteProduct = createAction(
    '[Product] Delete Product',
    props<{ productId: number }>()
);



