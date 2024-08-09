import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-local-news',
  templateUrl: './local-news.component.html',
  styleUrl: './local-news.component.css'
})
export class LocalNewsComponent implements OnInit{
  localNews:any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      // console.log("User id is :",this.route.snapshot.paramMap.get('id'));
      this.route.paramMap.subscribe(params => {
        this.localNews = params.get('id');
        console.log("LocalNews id is :", this.localNews);
      });
  }
}
