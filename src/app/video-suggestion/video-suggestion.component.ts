import { Component, Input } from '@angular/core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-video-suggestion',
  templateUrl: './video-suggestion.component.html',
  styleUrls: ['./video-suggestion.component.scss']
})
export class VideoSuggestion {
  @Input('chosenCategory') category: string
  faArrowLeft = faArrowLeft
  suggestion = ''

  onSuggestionGenerated(generated: any) {
    this.suggestion = generated
  }
}
