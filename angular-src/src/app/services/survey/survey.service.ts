import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

    constructor(private http: HttpClient) {
    }

    registerSurvey(Survey) {
        const headers = new HttpHeaders(('Content-Type:application/json'));
        return this.http.post('http://localhost:3000/survey/register', Survey, {headers: headers});
    }

}
