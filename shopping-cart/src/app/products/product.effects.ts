import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from './product.service';
import * as ProductActions from './product.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class ProductEffects {
    private actions$ = inject(Actions);
    private productService = inject(ProductService);

    loadProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.loadProduct),
            exhaustMap(() =>
                this.productService.getProducts().pipe(
                    map((products) => {
                        console.log(products)
                        return ProductActions.loadProductSuccess({ products });
                    }),
                    catchError(error => {
                        return of(ProductActions.loadProductFailure({error}))
                    })
                )
            )
        )
    );
}
