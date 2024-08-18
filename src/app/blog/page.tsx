'use client';

import Link from 'next/link';
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
      title: article.title,
    } as Article;
  });
}

export default function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles().then(articles => setArticles(articles));
  }, []);

  return (
    <main className="mx-auto p-4 md:w-5/6 lg:w-4/5 xl:w-3/4">
      <div className="text-center">
        <h1 className="title-1 mb-8 text-primary">Blog</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {articles.map(article => ArticleCard(article))}
        </div>
      </div>
    </main>
  );
}

function ArticleCard(article: Readonly<Article>) {
  return (
    <div key={article.canonical_url} className="card overflow-hidden rounded">
      <Link href={article.canonical_url} target="blank">
        <img className="rounded-t" src={article.cover_image} alt={article.title}></img>
        <p className="flex min-h-16 items-center justify-center bg-primary bg-opacity-25 p-2">{article.title}</p>
      </Link>
    </div>
  );
}
