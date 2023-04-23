import {Contractor} from './contractor';
import * as ko from 'knockout';

export class IndexModel {
    get contractors(): Contractor[] { return this._contractors; }
    errMsg :ko.Observable<string>

    constructor(private _contractors :Contractor[]) {
        this.errMsg = ko.observable<string>('');
    }
}