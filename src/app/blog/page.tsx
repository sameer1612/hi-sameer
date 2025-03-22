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
        <div className="columns-1 gap-2 space-y-4 md:columns-2 md:space-y-2 xl:columns-3">
          {articles.map(article => ArticleCard(article))}
        </div>
      </div>
    </main>
  );
}

function ArticleCard(article: Readonly<Article>) {
  return (
    <Link
      href={article.canonical_url}
      target="blank"
      key={article.canonical_url}
      className="block w-full break-inside-avoid overflow-hidden rounded-md bg-secondary bg-opacity-5"
    >
      <img
        src={article.cover_image}
        alt={article.title}
        onError={e => {
          e.currentTarget.src =
            'https://images.pexels.com/photos/34587/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
        }}
      ></img>
      <p className="w-xs flex items-center justify-start bg-primary bg-opacity-10 p-2 text-sm text-gray-700">
        {article.title}
      </p>
    </Link>
  );
}
