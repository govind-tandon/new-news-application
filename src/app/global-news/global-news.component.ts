import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-global-news',
  templateUrl: './global-news.component.html',
  styleUrl: './global-news.component.css'
})
export class GlobalNewsComponent implements OnInit{
  
  globalNews:any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      // console.log("User id is :",this.route.snapshot.paramMap.get('id'));
      this.route.paramMap.subscribe(params => {
        this.globalNews = params.get('id');
        console.log("GlobalNews id is :", this.globalNews);
      });
  }
}
