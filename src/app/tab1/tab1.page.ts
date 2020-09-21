import { Component } from '@angular/core';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  "packages":any=[
    {
        "id":"1",
        "packageImage":("/assets/packageimage.PNG"),
        "packageprice":"3, 480",
        "packagesubtitle":"HR Remote Manager",
        "packagesubtitle2":"Basic, Bronze, Foundation"    
    },
    {
        "id":"2",
        "packageImage":("/assets/packageimage.PNG"),
        "packageprice":"3, 480",
        "packagesubtitle":"HR Remote Manager",
        "packagesubtitle2":"Basic, Bronze, Foundation"    
    },
    {
        "id":"3",
        "packageImage":("/assets/packageimage.PNG"),
        "packageprice":"3, 480",
        "packagesubtitle":"HR Remote Manager",
        "packagesubtitle2":"Basic, Bronze, Foundation"    
    },
    {
      "id":"4",
      "packageImage":("/assets/packageimage.PNG"),
      "packageprice":"3, 480",
      "packagesubtitle":"HR Remote Manager",
      "packagesubtitle2":"Basic, Bronze, Foundation"    
  }
]
news = [
  {
    id:1,
    expanded:true,
    title:"lorem ipsum dolor sit consequers adipisicing elit",
    date:'20 0ct 2019 ',
    image: ("/assets/news.PNG")
  },
  {
    id:2,
    title:"lorem ipsum dolor sit consequers adipisicing elit",
    date:'20 0ct 2019',
    image: ("/assets/news.PNG")
  }
  ,{
    id:3,
    title:"lorem ipsum dolor sit consequers adipisicing elit",
    date:'20 0ct 2019',
    image: ("/assets/news.PNG")
  },{
    id: 4,
    title:"lorem ipsum dolor sit consequers adipisicing elit",
    date:'20 0ct2019 ',
    image: ("/assets/news.PNG")
  }

]

sliderConfig = {
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: 1.25,
  pager: "style",
  arrows: true,
  infinite: true
}

  constructor() {}
  functionClick(){
    console.log('welcome')
  }

}
