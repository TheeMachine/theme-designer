import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({selector: 'app-explore-container', templateUrl: './explore-container.component.html', styleUrls: ['./explore-container.component.scss']})
export class ExploreContainerComponent implements OnInit {
    @Input()name : string;

    constructor(private fb : FormBuilder) {
        Object.keys(this.form.value).forEach(elm => {
           this.form.get(elm).setValue(getComputedStyle(document.documentElement).getPropertyValue('--ion-color-' + elm).trim());
        });
        
    }

    form = this.fb.group({
        primary: [],
        danger: [],
        success: [],
        warning: [],
        secondary: [],
        light: []
    });


    ngOnInit() {}

    save() {
        Object.keys(this.form.value).forEach(elm => {
            document.documentElement.style.setProperty('--ion-color-' + elm, this.form.get(elm).value);
        });
    }

}
