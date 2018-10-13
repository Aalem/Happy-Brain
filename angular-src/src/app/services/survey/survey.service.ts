import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
    url: String;

    constructor(private http: HttpClient, private config: ConfigService) {
        this.url = this.config.getUrl();
    }

    registerSurvey(Survey) {
        const headers = new HttpHeaders(('Content-Type:application/json'));
        return this.http.post(this.url + '/survey/register', Survey, {headers: headers});
    }

}
