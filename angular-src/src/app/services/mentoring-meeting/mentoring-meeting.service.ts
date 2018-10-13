import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {ConfigService} from '../config.service';

@Injectable({
    providedIn: 'root'
})
export class MentoringMeetingService {
    url: String;

    constructor(private http: HttpClient, private config: ConfigService) {
        this.url = this.config.getUrl();
    }

    registerMentoringMeeting(MentoringMeeting) {
        const headers = new HttpHeaders(('Content-Type:application/json'));
        return this.http.post(this.url + '/mentoring-meeting/register', MentoringMeeting, {headers: headers});
    }

    countMentoringMeetingById(id) {
        return this.http.get(this.url + '/mentoring-meeting/getMentoringMeetingCount/' + id);
    }
}
