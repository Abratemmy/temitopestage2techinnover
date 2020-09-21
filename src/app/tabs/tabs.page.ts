import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  color: string = "danger"

  constructor() {}
  selectTab2(){
    this.color = "secondary"
  }

}
