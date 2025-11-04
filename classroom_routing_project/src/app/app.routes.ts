import { Routes } from '@angular/router';
import { AccountComp } from './account-comp/account-comp';
import { HomeComp } from './home-comp/home-comp';

export const routes: Routes = [
    {path : '', component : HomeComp},
    {path : 'accounts', component : AccountComp}
];
