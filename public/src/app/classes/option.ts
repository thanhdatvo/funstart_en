import { Headers } from '@angular/http';
export class Option {
    constructor(
         public url?: string,
        public body?: Object,
        public headers?: Headers,
        public queryArgs?:Array<string>
    ){}
}