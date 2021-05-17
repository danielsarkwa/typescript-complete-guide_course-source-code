// this application uses inheritance
import { NumbersCollection } from './numbersCollection';
import { CharactersCollection } from './charactersCollections';
import { LinkedList } from './linkedList';

const numbersCollection = new NumbersCollection([1, -5, 64, 32, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(7);
linkedList.sort();
linkedList.print();
