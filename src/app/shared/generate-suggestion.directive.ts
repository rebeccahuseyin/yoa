import { Directive, EventEmitter, Input, Output } from '@angular/core'

@Directive({
  selector: '[appGenerateSuggestion]'
})
export class GenerateSuggestion {
  @Output() suggestionGenerated = new EventEmitter<string>()

  suggestion = ''
  randomCategory
  videos = {
    Calm: [
      'https://www.youtube.com/watch?v=Ba0fweKUwIc',
      'https://www.youtube.com/watch?v=Nw2oBIrQGLo',
      'https://www.youtube.com/watch?v=Enz98dDXQfY'
    ],
    Energize: [
      'https://www.youtube.com/watch?v=sOthumY3GHE',
      'https://www.youtube.com/watch?v=A4ViwsLKoSY',
      'https://www.youtube.com/watch?v=qy_oIKf1ByM'
    ],
    Focus: [
      'https://www.youtube.com/watch?v=Nnd5Slo02us',
      'https://www.youtube.com/watch?v=3Elmwad8XDI',
      'https://www.youtube.com/watch?v=MQZbuqDp67U'
    ],
    Unwind: [
      'https://www.youtube.com/watch?v=UxWWfyE3fLc',
      'https://www.youtube.com/watch?v=-l-viVXMqhs',
      'https://www.youtube.com/watch?v=DWCyYhczU6M'
    ]
  }

  @Input('appGenerateSuggestion') set chosenCategory(chosenCategory: string) {
    if (chosenCategory === 'Any') {
      this.randomCategory = this.generateRandomCategory(this.videos)
      this.suggestion = this.generateRandEl(this.randomCategory)
    } else {
      this.suggestion = this.generateRandItem(chosenCategory)
    }
    this.suggestionGenerated.emit(this.suggestion)
  }

  generateRandEl(arr: Array<string>) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  generateRandomCategory(obj: Object) {
    const keys = Object.keys(obj)
    return obj[keys[(keys.length * Math.random()) << 0]]
  }

  generateRandItem(category: String) {
    const videoArr = this.videos[`${category}`]
    return this.generateRandEl(videoArr)
  }
}
