import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, delay, Observable, throwError } from "rxjs";
import { Product } from "./product.model";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    private http = inject(HttpClient)

    private productsUrl = 'http://localhost:3000/products'

    getProducts() : Observable<Product[]>{

        return this.http.get<Product[]>(this.productsUrl).pipe(
            delay(1000),
            catchError(error => {
                return throwError(() => new Error('Failed to load products'))
            })
        )
    }
}