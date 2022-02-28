class Sorter2 {
    // collection: number[];

    // constructor(collection: number[]) {
    //     this.collection = collection;
    // }

    // альтернативный код
    constructor(public collection: number[] | string) {
    }

    sort(): void {
      const { length } = this.collection;
      for (let i = 0; i < length; i++) {
          for (let j = 0; j < length - i - 1; j++) {

            if (this.collection instanceof Array) {
                if (this.collection[j] > this.collection[j + 1]) {
                      const leftHand = this.collection[j];
                      this.collection[j] = this.collection[j + 1];
                      this.collection[j + 1] = leftHand;
                }
            }

            if (typeof this.collection === 'string') {
            }


          }
      }
    } 
}

const sorter2 = new Sorter2([55,6,1,3]);

sorter2.sort();

// почему этот код не оч хороший? Мы делаем охрану типов, но что если мы заходим ещё сделать для других типов, нам всё время нужно будет добавлять через оператор или. И ещё плодить охраны типов