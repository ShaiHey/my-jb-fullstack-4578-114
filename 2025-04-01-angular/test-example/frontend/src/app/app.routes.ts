import { Routes } from '@angular/router';
import { ListComponent } from './components/furnitures/list/list.component';
import { NewComponent } from './components/furnitures/new/new.component';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: ListComponent,
    },
    {
        path: "new",
        component: NewComponent
    },
    {
        path: "**",
        component: NotFoundComponent
    }
];