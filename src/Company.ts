import { fakerCompanyName, fakerCatchPhrase, fakerLatitude, fakerLongitude } from './faker/faker';

export class Company {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.companyName = fakerCompanyName();
        this.catchPhrase = fakerCatchPhrase();
        this.location = {
            lat: fakerLatitude(),
            lng: fakerLongitude()
        }
    }
}
