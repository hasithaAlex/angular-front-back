import { Component } from '@angular/core';
import { User } from "../../models/User";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls:['./user.component.css']
})

export class UserComponent{
    user: User;

    constructor(){
        this.user = {
            firstName : 'Haitha',
            lastName : 'Madusanka',
            age: 28,
            address: {
                city: 'Matara',
                street: '37/B Rahula road.'
            }
        }
    }     

}