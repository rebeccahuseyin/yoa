import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-video-suggestion',
  templateUrl: './video-suggestion.component.html',
  styleUrls: ['./video-suggestion.component.scss']
})
export class VideoSuggestion implements OnInit {
  @Input('chosenCategory') category: string
  @Output() categoryCleared = new EventEmitter<MouseEvent>()

  faArrowLeft = faArrowLeft
  suggestion = ''

  ngOnInit() {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    document.body.appendChild(tag)
  }

  onSuggestionGenerated(generated: any) {
    this.suggestion = generated
  }

  onGoBack(event: MouseEvent) {
    this.categoryCleared.emit(event)
  }
}
