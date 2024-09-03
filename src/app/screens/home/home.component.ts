import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent{

  handleError($event: ErrorEvent) {
    // throw new Error('Method not implemented.');
    }
      newsArticles: any[] = [];
    
      // News API, from line 16 to 29 :-
      // constructor(private newsService: NewsService) {}
    
      // ngOnInit(): void {
      //   this.newsService.getTopHeadlines().subscribe(
      //     (data) => {
      //       this.newsArticles = data.articles; // Store the fetched articles
      //       console.log(this.newsArticles); // Check the image URLs here
      //     },
      //     (error) => {
      //       console.error('Error fetching news', error);
      //     }
      //   );
      // }
    
    //   <!-- Add this method to your component -->
    // handleError(event: any) {
    //   event.target.src = 'assets/images/placeholder.png'; // Fallback image
    // }

 
}
