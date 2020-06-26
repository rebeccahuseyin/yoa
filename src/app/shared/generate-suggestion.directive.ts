import { Directive, EventEmitter, Input, Output } from '@angular/core'

@Directive({
  selector: '[appGenerateSuggestion]'
})
export class GenerateSuggestion {
  @Output() suggestionGenerated = new EventEmitter<string>()

  suggestion = ''
  randomCategory
  videos = {
    Calm: ['Ba0fweKUwIc', 'Nw2oBIrQGLo', 'Enz98dDXQfY'],
    Energize: ['sOthumY3GHE', 'A4ViwsLKoSY', 'qy_oIKf1ByM'],
    Focus: ['Nnd5Slo02us', '3Elmwad8XDI', 'MQZbuqDp67U'],
    Unwind: ['UxWWfyE3fLc', '-l-viVXMqhs', 'DWCyYhczU6M']
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
