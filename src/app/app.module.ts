import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { YouTubePlayerModule } from '@angular/youtube-player'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { SelectCategory } from './select-category/select-category.component'
import { VideoSuggestion } from './video-suggestion/video-suggestion.component'
import { GradientBackground } from './shared/gradient-background.directive'
import { GenerateSuggestion } from './shared/generate-suggestion.directive'

@NgModule({
  declarations: [
    AppComponent,
    GradientBackground,
    SelectCategory,
    VideoSuggestion,
    GenerateSuggestion
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
