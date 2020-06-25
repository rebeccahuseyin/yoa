import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss']
})
export class SelectCategory {
  @Output() categoryChosen = new EventEmitter<string>()

  categories = [
    {
      name: 'Calm',
      image: 'assets/images/yoga-le-minh-phuong.jpg',
      description: 'Photo by Le Minh Phuong on Unsplash'
    },
    {
      name: 'Energize',
      image: 'assets/images/yoga-luna-active-fitness.jpg',
      description: 'Photo by LUNA ACTIVE FITNESS on Unsplash'
    },
    {
      name: 'Focus',
      image: 'assets/images/yoga-damir-spanik.jpg',
      description: 'Photo by Damir Spanik on Unsplash'
    },
    {
      name: 'Unwind',
      image: 'assets/images/yoga-nathalie-lv.jpg',
      description: 'Photo by Nathalie LV on Unsplash'
    },
    {
      name: 'Any',
      image: 'assets/images/yoga-janfillem.jpg',
      description: 'Photo by JanFillem on Unsplash'
    }
  ]

  chosenCategory = ''

  onSelectCategory(category) {
    this.chosenCategory = category
    this.categoryChosen.emit(this.chosenCategory)
  }
}
