// иногда нужно для того, чтобы более явно указать на источник ошибки(это не обязательно). Это может быть, если всё разбросано по разным файликам, и если мы добавляем где-то поле, то можем не видеть где источник ошибки и куда его нужно ещё добавить (implements позволит нам увидеть источник ошибки)

// т.е. мы пишем implements, когда хотим, чтобы в классе были все поля и методы от которого имплементируется класс


interface IUser {
    location: {
        lat: number;
        lng: number;
    };
}

export class User implements IUser{
    name: string;
    surName: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = 'Jack';
        this.surName = 'Broun';
        this.location = {
            lat: 123,
            lng: 123
        }
    }
}

// т.е. в юзере обязательно должны быть поля location (lat и lng)