import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TabViewModule} from "primeng/tabview";
import {CharactersComponent} from './characters/characters.component';
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";
import {DataViewModule} from 'primeng/dataview';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PaginatorModule} from "primeng/paginator";
import {CardModule} from "primeng/card";
import {MarvelService} from "./service/marvel.service";
import {HttpClientModule} from "@angular/common/http";
import {ScrollTopModule} from "primeng/scrolltop";
import {CharacterDetailComponent} from './character-detail/character-detail.component';
import {DynamicDialogModule} from "primeng/dynamicdialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TabInformationComponent} from './tabs/tab-information/tab-information.component';
import {ButtonModule} from "primeng/button";
import {TabComicComponent} from './tabs/tab-comic/tab-comic.component';
import {TableModule} from "primeng/table";
import {TabSerieComponent} from './tabs/tab-serie/tab-serie.component';
import {TabStoryComponent} from './tabs/tab-story/tab-story.component';
import {TabEventComponent} from './tabs/tab-event/tab-event.component';
import {CharacterItemComponent} from './character-item/character-item.component';
import {AuditService} from "./service/audit.service";
import {AuditComponent} from './audit/audit.component';
import {LoginComponent} from './login/login.component';
import {PasswordModule} from "primeng/password";
import {ToastModule} from "primeng/toast";
import {InputTextModule} from "primeng/inputtext";
import {AuthenticationService} from "./service/authentication.service";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";
import {AuthGuard} from "./guard/auth-guard";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterDetailComponent,
    TabInformationComponent,
    TabComicComponent,
    TabSerieComponent,
    TabStoryComponent,
    TabEventComponent,
    CharacterItemComponent,
    AuditComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    RatingModule,
    TagModule,
    DataViewModule,
    FormsModule,
    PaginatorModule,
    CardModule,
    HttpClientModule,
    ScrollTopModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    PasswordModule,
    ReactiveFormsModule,
    ToastModule,
    InputTextModule,
    AppRoutingModule
  ],
  providers: [MarvelService, AuditService, AuthenticationService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    AuthGuard
  ],
  bootstrap: [HomeComponent]
})
export class AppModule {
}
