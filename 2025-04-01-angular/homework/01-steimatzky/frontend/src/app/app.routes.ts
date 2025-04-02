import { Routes } from '@angular/router';
import { ListComponent } from './components/books/list/list.component';
import { NewComponent } from './components/books/new/new.component';
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