import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls:['./user.component.css']
})

export class UserComponent{
    firstName: string = 'hasitha';
    lastName = 'Madusanka';
    age = 28;
    address = {
        street: '37/B Rahula road,',
        city: 'Matara.' ,
    }

    constructor(){
        console.log('Hello '+ this.firstName);
        this.sayHello();
    }     

    sayHello(){            //this is ES6 (string concatenation)     
        console.log(`Hello ${this.firstName}!! How are you!`);
    }

    showAge(){
        return this.age;
    }
}