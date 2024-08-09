import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{

  HomeId:any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      // console.log("User id is :",this.route.snapshot.paramMap.get('id'));
      this.route.paramMap.subscribe(params => {
        this.HomeId = params.get('id');
        console.log("Home id is :", this.HomeId);
      });
  }
}
