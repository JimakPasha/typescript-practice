import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numberCollection = new NumberCollection([55,6,-10,1,3]);
numberCollection.sort();
console.log(numberCollection.data);

const stringCollection = new CharactersCollection('qWeRtyuiOPAsdfGhJkLzXCvbNM');
stringCollection.sort();
console.log(stringCollection.data);

const linkedList = new LinkedList();
linkedList.add(-11);
linkedList.add(-3);
linkedList.add(100);
linkedList.add(1123);
linkedList.add(7);
linkedList.sort();
linkedList.print();
