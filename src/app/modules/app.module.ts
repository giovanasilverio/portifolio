import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './portifolio/components/header/header.component';
import { HomeComponent } from './portifolio/pages/home/home.component';
import { KnowledgeComponent } from './portifolio/components/knowledge/knowledge.component';
import { ExperiencesComponent } from './portifolio/components/experiences/experiences.component';
import { ProjectsComponent } from './portifolio/components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    KnowledgeComponent,
    ExperiencesComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
