import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    // url = 'http://localhost:3000';

    url = '';

    constructor() {
    }

    getUrl() {
        return this.url;
    }
}
