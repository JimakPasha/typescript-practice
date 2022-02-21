import { fakerCompanyName, fakerCatchPhrase, fakerLatitude, fakerLongitude } from './faker/faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable{
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    color: string = 'white';

    constructor() {
        this.companyName = fakerCompanyName();
        this.catchPhrase = fakerCatchPhrase();
        this.location = {
            lat: fakerLatitude(),
            lng: fakerLongitude()
        }
    }

    markerContent(): string {
        return `
        <div>
            <h1>Company Name: ${this.companyName}</h1>, 
            <h3>Company CatchPhrase: ${this.catchPhrase}</h3>
        </div>
            `;
    }
}
