import { Injectable } from '@angular/core';
import { MainNews } from 'src/app/Model/main-news.model';

@Injectable({
  providedIn: 'root'
})
export class MainNewsService {
  private id: number = Math.floor(Math.random() * 100);
  private imgUrl = "https://i.picsum.photos/id/" + this.id + "/600/400.jpg"
  private allNews: MainNews[] = [
    { id: 1, title: "News 1", desc: "some description", bgText: "Image Text", img: this.imgUrl },
    { id: 2, title: "News 2", desc: "some description 2", bgText: "Image Text 2", img: this.imgUrl },
    { id: 3, title: "News 3", desc: "some description 3", bgText: "Image Text 3", img: this.imgUrl },
    { id: 4, title: "News 3", desc: "some description 4", bgText: "Image Text 3", img: this.imgUrl },
    { id: 5, title: "News 3", desc: "some description 5", bgText: "Image Text 3", img: this.imgUrl },
  
  ]
  
  constructor() { }

  getAllNews () {
    return this.allNews
  }

  getNewsWithId (id: number) {
    return this.allNews[id];
  }

}
