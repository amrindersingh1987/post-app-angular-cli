import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent, AccountComponent } from './custom-directives/index';
import { Session } from './session/index';
import { AlertService, AuthenticationService, UserService , AccountService} from './services/index';
import { PostsComponent } from './posts/index';
import { LoginComponent } from './login/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        AccountComponent,
        PostsComponent,
        LoginComponent
    ],
    providers: [
        Session,
        AlertService,
        AccountService,
        AuthenticationService,
        UserService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
