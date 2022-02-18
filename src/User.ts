import { fakerUserName, fakerLatitude, fakerLongitude } from './faker/faker';

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = fakerUserName();
        this.location = {
            lat: fakerLatitude(),
            lng: fakerLongitude()
        }
    }
}
