import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LogoContainerComponent } from './logo-container/logo-container.component';
import { JobCardComponent } from './job-card/job-card.component';
import { SkillsCarousellComponent } from './skills-carousell/skills-carousell.component';
import { SkillsHeaderComponent } from './skills-header/skills-header.component';
import { BouncingBallsComponent } from './bouncing-balls/bouncing-balls.component';
import { PersonalitComponent } from './personalit/personalit.component';
import { ProjectsComponent } from './projects/projects.component';
import { ChallengeComponent } from './challenge/challenge.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LogoContainerComponent,
    JobCardComponent,
    SkillsCarousellComponent,
    SkillsHeaderComponent,
    BouncingBallsComponent,
    PersonalitComponent,
    ProjectsComponent,
    ChallengeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
