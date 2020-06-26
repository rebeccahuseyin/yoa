import { Component, Input, OnInit } from '@angular/core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-video-suggestion',
  templateUrl: './video-suggestion.component.html',
  styleUrls: ['./video-suggestion.component.scss']
})
export class VideoSuggestion implements OnInit {
  @Input('chosenCategory') category: string
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
}
