import{Component} from '@angular/core';

@Component({
    selector: 'app-my',
    templateUrl: './my.component.html'
})
export class MyComponent{
    value = "";
    able = true;

    changeValue(){
        this.value = "";
        this.able = true;
    }

    output(event: Event){
        this.value = (<HTMLInputElement>event.target).value;
        this.able = false;
    }
}