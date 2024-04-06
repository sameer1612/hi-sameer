'use client';

import Link from 'next/link';
import './blog.scss';
import { useEffect, useState } from 'react';

interface Article {
  canonical_url: string;
  cover_image: string;
  title: string;
}

async function fetchArticles(): Promise<Article[]> {
  const res = await fetch('https://dev.to/api/articles/latest?username=sameer1612');
  const json_res = await res.json();

  return json_res.map((article: any) => {
    return {
      canonical_url: article.canonical_url,
      cover_image: article.cover_image,
      title: article.title
    } as Article;
  });
}

export default function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles().then(articles => setArticles(articles));
  }, []);

  return (
    <main className="blog-container">
      <div className="text-center">
        <h1 className="title-1 text-primary my-5">Blog</h1>
        <div className="row container-fluid mx-auto my-5">{articles.map(article => ArticleCard(article))}</div>
      </div>
    </main>
  );
}

function ArticleCard(article: Readonly<Article>) {
  return (
    <div key={article.canonical_url} className="col-lg-4 col-md-6 col-sm-12 my-2">
      <div className="card rounded blog-card">
        <Link href={article.canonical_url} className="card-link" target="blank">
          <img className="card-img rounded-0" src={article.cover_image} alt={article.title}></img>
          <div className="card-body">
            <p className="card-title">{article.title}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
