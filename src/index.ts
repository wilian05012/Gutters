import './index.scss';
const brand2 = require('./assets/brand2.png');

import * as ko from 'knockout';
import { Contractor } from './contractor';
import { IndexModel } from './index-model';
const data :Contractor[] = require('./data.json');
const model :IndexModel = new IndexModel(data);

document.addEventListener('DOMContentLoaded', () => {
    
    ko.applyBindings(model);

    Array.from(document.getElementsByClassName('card')).forEach((cardElem :HTMLDivElement) => {    
        cardElem.addEventListener('click', (evt : MouseEvent) => {
            const card :HTMLDivElement = evt.target as HTMLDivElement;
            if(card.dataset.website) {
                window.open(card.dataset.website, '_blank');
                model.errMsg(null);
            } else {
                model.errMsg('No website for this contractor.');
            }
        });
    });
    
    document.querySelector('.snack-bar .btn-dismiss').addEventListener('click', (evt :MouseEvent) => {
        model.errMsg(null);
    });
});
