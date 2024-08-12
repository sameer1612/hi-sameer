import './home.scss';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="mx-auto flex h-[90vh] flex-col items-center justify-center">
        <div className="relative flex flex-col items-center justify-center gap-1 p-4">
          <h1 className="title-1 text-primary">I am Sameer</h1>
          <h3 className="title-2 text-secondary">Not yet another engineer !</h3>
          <Image
            className="shuriken absolute -right-4 -top-4 lg:-right-8"
            src="/images/ninja.png"
            alt="shuriken"
            width={50}
            height={50}
          ></Image>
        </div>
        <p className="font-kalam mt-8 w-[90%] text-center text-2xl font-medium text-dark-teal lg:mt-16 lg:w-[50%]">
          Meet Sameer, the groovy web ninja who transforms ideas into pixel-perfect realities, leaving a trail of
          awe-inspiring web experiences!
        </p>
      </div>
    </main>
  );
}
