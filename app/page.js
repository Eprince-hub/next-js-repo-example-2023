import Image from 'next/image';
import cat from '../public/images/cute-cat.jpeg';
import GenerateButton from './GenerateButton';

export default function HomePage() {
  return (
    <main>
      <div>
        <h1>Hello UpLeveled!</h1>
        <GenerateButton />

        <br />
        {/* This is not optimized please don't use it */}
        <img src="/images/cute-cat.jpeg" alt="Beautiful cat" />

        {/* This is a way to do it with next/image its ok */}
        <Image
          src="/images/cute-cat.jpeg"
          alt="Beautiful cat"
          width={400}
          height={400}
        />

        {/* This is an alternative way to do it with next/image its ok */}
        <Image src={cat} alt="Beautiful cat" />
      </div>
    </main>
  );
}
