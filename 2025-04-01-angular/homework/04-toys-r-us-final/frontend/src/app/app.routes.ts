import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';
import { ListComponent } from './components/games/list/list.component';
import { NewComponent } from './components/games/new/new.component';

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