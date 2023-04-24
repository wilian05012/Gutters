import {Contractor} from './contractor';
import * as ko from 'knockout';

export class IndexModel {
    contractors: ko.PureComputed<Contractor[]>;
    errMsg :ko.Observable<string>;
    filter: ko.Observable<string>;

    constructor(_contractors :Contractor[]) {
        this.errMsg = ko.observable<string>('');
        this.filter = ko.observable<string>('');
        this.contractors = ko.pureComputed(() => _contractors.filter(c => c.name.toLowerCase().includes(this.filter().toLocaleLowerCase())));
    }
}