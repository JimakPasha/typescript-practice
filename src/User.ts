import { fakerUserName, fakerLatitude, fakerLongitude } from './faker/faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    color: string = 'black';

    constructor() {
        this.name = fakerUserName();
        this.location = {
            lat: fakerLatitude(),
            lng: fakerLongitude()
        }
    }

    markerContent(): string {
        return `
        <div>
            <h1>User Name: ${this.name}</h1>
        </div>`;
    }
}
