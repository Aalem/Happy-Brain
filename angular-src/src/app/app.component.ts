import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./services/auth.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor(public router: Router,
                public authService: AuthService) {

    }
    name = 'Angular 4';
    private _opened: boolean = true;

    private _toggleSidebar() {
        this._opened = !this._opened;
    }
}
