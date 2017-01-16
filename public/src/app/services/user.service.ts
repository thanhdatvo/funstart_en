import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import { RestService } from './rest.service';

@Injectable()
export class UserService {
    private loggedUserSource = new Subject<string>();
    private rest: RestService;
    public loggedUser$ = this.loggedUserSource.asObservable();

    constructor(private http: Http) {
        this.rest = new RestService(http);
    }
    signUp(registerInfo) {
        let loggedUserSource = this.loggedUserSource;
        this.rest.post(
            {
                body: registerInfo,
                url: `auth/signup`
            },
            function (userInfo) {
                loggedUserSource.next(userInfo);
            });
    }
}

export var USER_PROVIDER: Array<any> = [
    { provide: UserService, useClass: UserService }
]