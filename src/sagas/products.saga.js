import {call,put, takeEvery } from 'redux-saga/effects'
import productService from '../services/products.service';
import { FETCH_PRODUCTS } from '../types/product.types';
import { setProducts } from './../actions/products.actions';

function* fetchProducts(){
    try{
        const products = yield call(productService.getAllProducts);

        // dispatching to setProducts
        yield put(setProducts(products));

    }catch(err){
        console.log(err);
    }
}

// generator function (watching for fetch product dispatch action )
// takeEvery will create new task when this action is dispatched

export function* waitForFetchProducts(){
    yield takeEvery (FETCH_PRODUCTS,fetchProducts)
}