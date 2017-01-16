import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptionsArgs, Response, RequestMethod, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Option } from '../classes/option'

import 'rxjs/Rx';

@Injectable()
export class RestService {
    static BASE_URL: string = 'http://localhost:8235/';
    private loggedUserSource = new Subject<string>();
    loggedUser$ = this.loggedUserSource.asObservable();
    constructor(private http: Http) {}
    // calling request
    request(option: Option, callback) {
        // set partial url to full url
        option.url = `${RestService.BASE_URL}${option.url}`;
        // stringify body from json to string
        option.body = JSON.stringify(option.body);
        // add default header if there are no header
        if (!option.headers) option.headers = new Headers({ 'Content-Type': 'application/json' });
        // add params to query params
        if (option.queryArgs) {
            option.url = `${option.url}?${option.queryArgs.join('&')}`;
        }
        // create request object
        let reqOptions = new RequestOptions(option);
        var req = new Request(reqOptions);
        // send request
        this.http.request(req)
            .subscribe(
            res => callback(res.json()),
            error => console.error('Error: ' + error),
            () => console.log('Request completed!')
            )
    }
    post(options, callback) {
        options.method = RequestMethod.Post;
        this.request(options, callback);
    }
    get(dataName: string, params?: Array<string>): Observable<any[]> {
        let url: string = `${RestService.BASE_URL}${dataName}`;
        if (params) {
            url = `${url}?${params.join('&')}`;
        }

        let headers = new Headers({ 'Authorization': 'Bearer CRv1o8FaogFa2SYU4F6Z9DzytqL1l4My' });
        let options: RequestOptionsArgs = { headers: headers };
        console.log("URL " + url);
        return this.http.request(url, options).map((res: Response) => res.json()).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getGames(paramsObj?: any) {
        let paramsList: string[] = [];
        if (paramsObj) {
            paramsList = [];
            Object.keys(paramsObj).forEach(function (param) {
                paramsList.push(`${param}=${paramsObj[param]}`)
            });
        }
        return this.get('games', paramsList);
    }

    getGame(id: string): Observable<any[]> {
        return this.get(`games/${id}`);
    }
    getUser(username: string): Observable<any[]> {
        return this.get(`users/${username}`);
    }
}

export var REST_PROVIDER: Array<any> = [
    { provide: RestService, useClass: RestService }
]