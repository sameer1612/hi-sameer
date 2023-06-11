import './home.scss';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="hero text-center">
        <div className="title-wrapper">
          <h1 className="title-1 text-primary mt-5">Hi. I am Sameer.</h1>
          <h3 className="title-2 text-primary mt-2">Not yet another engineer !</h3>
          <Image src="/images/ninja.png" alt="shuriken" width={75} height={75} className="shuriken"></Image>
        </div>
        <p className="subtitle">
          Meet Sameer, the groovy web ninja who transforms ideas into pixel-perfect realities, leaving a trail of
          awe-inspiring web experiences!
        </p>
      </div>
    </main>
  );
}
