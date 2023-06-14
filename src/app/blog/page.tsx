import Link from 'next/link';
import './blog.scss';

interface Article {
  canonical_url: string;
  cover_image: string;
  title: string;
}

async function fetchArticles(): Promise<Article[]> {
  return [
    {
      canonical_url: 'https://sameer-kumar-1612.medium.com/jetbrains-fleet-a-vs-code-killer-f662f45f6478',
      cover_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--OhGPfIQR--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/23wah7gruqz1qvl8ntvm.png',
      title: 'JetBrains Fleet — A VS Code killer?'
    },
    {
      canonical_url: 'https://sameer-kumar-1612.medium.com/5-software-that-makes-a-pro-productive-fb33f6f45c22',
      cover_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--ib3757aR--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lz0wx9l2lbzast2v6mmc.png',
      title: '5 must have softwares for pros like you.'
    },
    {
      canonical_url:
        'https://betterprogramming.pub/when-to-use-useimperativehandle-and-forwardrefs-in-react-18-89cce42b3309',
      cover_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--5SROQkhI--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uhpn7ma5c0we3z5xtb66.png',
      title: 'React 18: When to use “useImperativeHandle” and “forwardRefs”'
    },
    {
      canonical_url:
        'https://betterprogramming.pub/react-v18-demystifying-useref-forwardref-and-useimperativehandle-feec2fc5b2f6',
      cover_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--nhOjRJWx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/myf7nq09halg0ek9rnaq.png',
      title: 'React v18: useRef — What, When and Why?'
    },
    {
      canonical_url: 'https://sameer-kumar-1612.medium.com/the-boy-scout-rule-de11f5b2c6a',
      cover_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--bnTdtTt8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m9qphkueofucjae10u29.jpg',
      title: 'The Boy Scout Rule 💡👩‍💻'
    },
    {
      canonical_url: 'https://sameer-kumar-1612.medium.com/react-v18-why-useeffect-suddenly-go-crazy-db1b42eb2730',
      cover_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--lfE8JZhD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8sdaimzvk2ulii4hj104.png',
      title: 'React v18: Why useEffect suddenly go crazy?'
    },
    {
      canonical_url: 'https://sameer-kumar-1612.medium.com/console-log-and-his-ninja-pals-4fc0863ad5f4',
      cover_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--Jz9RL6QO--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dds8t64c2dts3halstg8.png',
      title: 'Console.log and his Ninja Pals 🥷'
    },
    {
      canonical_url: 'https://sameer-kumar-1612.medium.com/react-v18-usetransition-hook-why-f5d8880dc64d',
      cover_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--jDGXV2RO--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gja0bme9has1kookmmnm.png',
      title: 'React v18: useTransition hook — Why???'
    },
    {
      canonical_url: 'https://dev.to/sameer1612/pyscript-javascripts-cousin-df3',
      cover_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--R7XGH1Cc--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8ce6xqh1zva2419l0ru4.png',
      title: "PyScript - JavaScript's sweet cousin."
    },
    {
      canonical_url: 'https://medium.com/p/ee5eeeb3fa50',
      cover_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--U2u4wBT---/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2yvezp44vbmzatcoa51h.png',
      title: 'Testim - Automation testing on Steroids'
    },
    {
      canonical_url: 'https://dev.to/sameer1612/technical-consultant-vs-software-engineer-which-career-is-for-you-1iph',
      cover_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s---9wpeqSh--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dqxwjlw4ud1jjz6rsrgl.png',
      title: 'Technical Consultant vs Software Engineer. Which career is for you?'
    },
    {
      canonical_url: 'https://dev.to/sameer1612/how-do-motivation-and-procrastination-work-30jl',
      cover_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--ZATCz_bW--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c9qfs2i38j19ms1tzx65.jpg',
      title: 'How do motivation and procrastination work?'
    },
    {
      canonical_url:
        'https://dev.to/sameer1612/why-does-competitive-programming-love-data-structures-and-algorithms-kkh',
      cover_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--eAFU_FbV--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l7i0lyhyc16bygcs1c0i.png',
      title: 'Why does Competitive Programming love Data Structures and Algorithms?'
    },
    {
      canonical_url: 'https://dev.to/sameer1612/01-product-of-array-except-self-20ak',
      cover_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--wmIxt8bw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n1clqqx45hxm8mnzp4b7.png',
      title: '01. Product of Array Except Self'
    },
    {
      canonical_url: 'https://dev.to/sameer1612/thinking-in-react-3m73',
      cover_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--cbt1HIic--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/68vzlmqwocmy03ljk94m.png',
      title: 'Thinking in React'
    },
    {
      canonical_url: 'https://dev.to/sameer1612/enum-on-rails-a-shallow-dive-e4m',
      cover_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--vZoga8Nr--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8rdemrtfi0ybdh0mdmf3.jpeg',
      title: 'Enum on Rails — A shallow dive 💎'
    },
    {
      canonical_url: 'https://railsfactory.com/shopify-using-ror-to-built-multi-billion-dollar-ecommerce-business',
      cover_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--ZRebpxYl--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wgd9c7o855ya889lpwgi.jpeg',
      title: 'Why is Shopify using "Ruby on Rails" to build its $3 billion dollar e-commerce business?'
    },
    {
      canonical_url: 'https://dev.to/sameer1612/3-css-frameworks-for-you-4noe',
      cover_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--9yVKgL_W--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/toj9733eqfoyzua9iqwc.png',
      title: '🔝 3 CSS frameworks for you.'
    },
    {
      canonical_url: 'https://dev.to/sameer1612/top-5-extensions-for-your-vs-code-him',
      cover_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--UM1tfmHG--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/03aatqyk2thidpslcvgr.png',
      title: 'Top 5 Extensions for your VS Code 🏅'
    },
    {
      canonical_url: 'https://dev.to/sameer1612/cron-jobs-master-worker-strategy-55d2',
      cover_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--1BJf08ur--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/37gf4ftz7ib5u5k0yv21.png',
      title: 'Cron Jobs — Master Worker Strategy 🧮'
    },
    {
      canonical_url: 'https://dev.to/sameer1612/service-objects-at-your-service-3532',
      cover_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--EjIoid3B--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f15g1zpzzsna9udzernk.png',
      title: 'SERVICE OBJECTS — At your service…'
    },
    {
      canonical_url: 'https://dev.to/sameer1612/coding-styles-imperative-declarative-and-dsl-emb',
      cover_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--AnnOlbfZ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/53kmx5590tmk2pixg8k3.jpg',
      title: 'Coding Styles: Imperative, Declarative and DSL🤯'
    },
    {
      canonical_url: 'https://dev.to/sameer1612/datatable-on-rails-176f',
      cover_image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--UJKhBYcK--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x6knmfpxwld3z18zqb2e.png',
      title: 'DATATABLE ON RAILS'
    }
  ];

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

export default async function Blog() {
  const articles = await fetchArticles();

  return (
    <main>
      <div className="text-center">
        <h1 className="title-1 text-primary my-5">Blog</h1>
        <div className="row container-fluid mx-auto my-5">{articles.map(article => ArticleCard(article))}</div>
      </div>
    </main>
  );
}

function ArticleCard(article: Article) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 my-2">
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
