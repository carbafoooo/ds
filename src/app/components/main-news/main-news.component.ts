import { Component, OnInit, Input, TemplateRef, ElementRef, ViewChild } from '@angular/core';
import { MainNews } from 'src/app/Model/main-news.model';
import { MainNewsService } from './main-news.service';
import * as $ from 'jquery'
@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.css']
})
export class MainNewsComponent implements OnInit {
  
  Items: MainNews[];
  @ViewChild("currentItem",{static: false}) currentItem: ElementRef<HTMLElement>;
  @ViewChild("nextItem" , {static : false }) next: ElementRef<HTMLElement>;

  constructor(private mainNewsService: MainNewsService) { }

  ngOnInit () {
    this.Items = this.mainNewsService.getAllNews();
  }

  onChangeItem (el: HTMLElement) {
    const currentElement = this.currentItem.nativeElement
    
    let current = $(currentElement).data('slide');
    let next = $(currentElement).next("div").data('slide')
    setInterval(() => {
      if (current === next) {
         current = 0 , next = 1;
      } else {
        $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
        $('.flex--active').addClass('animate--end');
        setTimeout(function () {
          $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
          $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
        }, 800);
      }
      current++;
      next++;
    console.log(current, next);
      
    }, 5000);

  }

}


