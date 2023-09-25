import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAnimalById } from '../../../database/animals';

export function generateMetadata({ params }) {
  const singleAnimal = getAnimalById(Number(params.animalId));

  return {
    title: singleAnimal ? singleAnimal.firstName : '',
  };
}

export default function SingleAnimalPage(props) {
  const singleAnimal = getAnimalById(Number(props.params.animalId));

  if (!singleAnimal) {
    return notFound();
  }

  return (
    <div>
      <h1>{singleAnimal.firstName}</h1>
      <Image
        src={`/images/${singleAnimal.firstName}.png`}
        width={200}
        height={200}
        alt={singleAnimal.firstName}
      />
      this is a {singleAnimal.type} carrying {singleAnimal.accessory}
    </div>
  );
}
