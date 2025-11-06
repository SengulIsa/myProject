import { Routes } from '@angular/router';
import { HomeComp } from './home-comp/home-comp';
import { ProductComp } from './product-comp/product-comp';
import { AboutComp } from './about-comp/about-comp';
// import { AccountComp } from './account-comp/account-comp';
import { ErrorComp } from './error-comp/error-comp';


export const routes: Routes = [
    {path : '', component : HomeComp},
    {path : 'products', component : ProductComp},
    {path : 'products/:product', component : ProductComp},
    {path : 'about', component : AboutComp},
    {path : 'error', component : ErrorComp},
];
