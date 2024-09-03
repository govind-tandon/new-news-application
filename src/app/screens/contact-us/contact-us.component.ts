import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit{

  contactUsId:any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      // console.log("User id is :",this.route.snapshot.paramMap.get('id'));
      this.route.paramMap.subscribe(params => {
        this.contactUsId = params.get('id');
        console.log("ContactUs id is :", this.contactUsId);
      });
  }
}
