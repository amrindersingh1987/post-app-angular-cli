import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/index';
import { LoginComponent } from './login/index';
import { Session } from './session/index';

const appRoutes: Routes = [
    { path: 'posts', component: PostsComponent, canActivate: [Session] },
    { path: 'login', component: LoginComponent },

    { path: 'logout', component: LoginComponent },

    // otherwise redirect to posts
    { path: '**', redirectTo: 'posts' }
];

export const routing = RouterModule.forRoot(appRoutes);
