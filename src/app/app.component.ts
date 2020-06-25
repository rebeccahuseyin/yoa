import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  category = ''

  onCategoryChosen(chosenCategory: string) {
    this.category = chosenCategory
  }
}
