import { Routes } from '@angular/router';
import { HomeComp } from './home-comp/home-comp';
import { ProductComp } from './product-comp/product-comp';
import { AboutComp } from './about-comp/about-comp';

export const routes: Routes = [
    {path : '', component : HomeComp},
    {path : 'products', component : ProductComp},
    {path : 'about', component : AboutComp}
];
