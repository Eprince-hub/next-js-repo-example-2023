import Image from 'next/image';
import Link from 'next/link';
import { getAnimals } from '../../database/animals';

export const metadata = {
  title: 'Animals page',
  description: 'My Favorite animals',
};

export default function AnimalsPage() {
  const animals = getAnimals();
  return (
    <div>
      My Animals page
      {animals.map((animal) => {
        return (
          <div key={`animal-div-${animal.id}`}>
            <Link href={`/animals/${animal.id}`}>{animal.firstName}</Link>
            <br />
            <Image
              src={`/images/${animal.firstName}.png`}
              alt={animal.firstName}
              width={100}
              height={100}
            />
          </div>
        );
      })}
    </div>
  );
}
