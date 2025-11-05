import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, isDevMode } from '@angular/core';
import { ActionReducer, provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import * as fromCart from './cart/cart.reducer'
import * as fromProducts from './products/product.reducer'
import {localStorageSync} from 'ngrx-store-localstorage'
import { ProductEffects } from './products/product.effects';
import { provideHttpClient } from '@angular/common/http';

const keysToSync = [fromCart.cartFeatureKey]

function syncLocalStorageReducer(reducer : ActionReducer<any>) {
  return localStorageSync({
    keys: keysToSync,
    rehydrate: true,
    storage: window.localStorage,
    removeOnUndefined: true
  })(reducer)
}

const metaReducers = [syncLocalStorageReducer]

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideStore({}, {metaReducers}),
    provideState(fromProducts.productFeatureKey, fromProducts.productReducer),
    provideState(fromCart.cartFeatureKey, fromCart.cartReducer),
    provideEffects([ProductEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideHttpClient()
]
};
