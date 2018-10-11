import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root'
})
export class MentoringMeetingService {

    constructor(private http: HttpClient) {
    }

    registerMentoringMeeting(MentoringMeeting) {
        const headers = new HttpHeaders(('Content-Type:application/json'));
        return this.http.post('/mentoring-meeting/register', MentoringMeeting, {headers: headers});
    }

    countMentoringMeetingById(id) {
        return this.http.get('/mentoring-meeting/getMentoringMeetingCount/' + id);
    }
}
