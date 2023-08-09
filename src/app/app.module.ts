import {NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TabViewModule} from "primeng/tabview";
import {CharactersComponent} from './characters/characters.component';
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import {FormsModule} from "@angular/forms";
import {PaginatorModule} from "primeng/paginator";
import {CardModule} from "primeng/card";
import {MarvelService} from "./service/marvel.service";
import {HttpClientModule} from "@angular/common/http";
import {ScrollTopModule} from "primeng/scrolltop";
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import {DynamicDialogModule} from "primeng/dynamicdialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { TabInformationComponent } from './tabs/tab-information/tab-information.component';
import {ButtonModule} from "primeng/button";
import { TabComicComponent } from './tabs/tab-comic/tab-comic.component';
import {TableModule} from "primeng/table";
import { TabSerieComponent } from './tabs/tab-serie/tab-serie.component';
import { TabStoryComponent } from './tabs/tab-story/tab-story.component';
import { TabEventComponent } from './tabs/tab-event/tab-event.component';
import { CharacterItemComponent } from './character-item/character-item.component';
import {AuditService} from "./service/audit.service";
import { AuditComponent } from './audit/audit.component';

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
    AuditComponent
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
    TableModule
  ],
  providers: [MarvelService, AuditService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
