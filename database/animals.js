import 'server-only';

const animals = [
  {
    id: 1,
    firstName: 'lucia',
    type: 'Bear',
    accessory: 'Pen',
  },
  {
    id: 2,
    firstName: 'markus',
    type: 'Tiger',
    accessory: 'Comb',
  },
  {
    id: 3,
    firstName: 'varbad',
    type: 'Lion',
    accessory: 'House',
  },
  {
    id: 4,
    firstName: 'kalaba',
    type: 'Dog',
    accessory: 'Car',
  },
];

export function getAnimals() {
  return animals;
}

export function getAnimalById(id) {
  return animals.find((animal) => animal.id === id);
}
