import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from '../config.service';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    Message: any;
    url: String;

    constructor(private http: HttpClient,
                private config: ConfigService) {
        this.url = this.config.getUrl();
    }

    sendNotification(Message) {
        const headers = new HttpHeaders(('Content-Type:application/json'));
        return this.http.post(this.url + '/message/register', Message, {headers: headers});
    }

    getMessages() {
        return this.http.get(this.url + '/message/getAll');
    }

    getNotificationsByUserId(id) {
        return this.http.get(this.url + '/message/getNotificationsByUserId/'+id);
    }

    countNotificationsByUserId(id) {
        return this.http.get(this.url + '/message/countNotificationsByUserId/'+id);
    }

    deleteNotification(id) {
        return new Promise((resolve, reject) => {
            this.http.delete(this.url + '/message/' + id)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    editMessage(id, data) {
        return new Promise((resolve, reject) => {
            this.http.put(this.url + '/message/' + id, data)
                .map(res => res)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getMessage(id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.url + '/message/' + id)
                .map(res => res)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}
