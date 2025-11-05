import { createAction, props } from "@ngrx/store";
import { Product } from "./product.model";

export const loadProduct = createAction(
    '[Products API] Load Products'
);

export const loadProductSuccess = createAction(
    '[Products API] Load Products Success',
    props<{products : Product[]}>()
);

export const loadProductFailure = createAction(
    '[Products API] Load Products Failure',
    props<{error : any}>()
)