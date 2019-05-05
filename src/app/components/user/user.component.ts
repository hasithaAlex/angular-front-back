import { Component, OnInit } from '@angular/core';
import { User } from "../../models/User";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls:['./user.component.css']
})

export class UserComponent implements OnInit{
    
    users: User[];
    showExtended: boolean = true;
    loaded: boolean = false;

    constructor(){
        
    }
    
    ngOnInit(): void {
        setTimeout(()=>{
            this.users = [
                {
                    firstName : 'Haitha',
                    lastName : 'Madusanka',
                    age: 28,
                    address: {
                        city: 'Matara',
                        street: '37/B Rahula road.'
                    }
                },{
                    firstName : 'Haitha K',
                    lastName : 'Madusanka',
                    age: 28,
                    address: {
                        city: 'Gall',
                        street: '37/B Rahula road.'
                    }
                },{
                    firstName : 'Haitha M',
                    lastName : 'Madusanka',
                    age: 28,
                    address: {
                        city: 'Colombo',
                        street: '37/B Rahula road.'
                    }
                },
            ]
            this.loaded = true;

            this.addUser({
                firstName : 'Kavindu',
                lastName : 'Sudara',
                
            });
        },2000);

        

    }

    addUser(user: User){
        this.users.push(user);
    }
}