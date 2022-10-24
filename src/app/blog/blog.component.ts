import { Component, OnInit } from '@angular/core';

export interface Article {
  canonical_url: string;
  cover_image: string;
  title: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  articles: Article[];

  constructor() {
    this.articles = [];
  }

  ngOnInit(): void {
    fetch('https://dev.to/api/articles/latest?username=sameer1612')
      .then((res) => res.json())
      .then((data) => {
        this.articles = data.map((article: any) => {
          return {
            canonical_url: article.canonical_url,
            cover_image: article.cover_image,
            title: article.title,
          } as Article;
        });
      });
  }
}
