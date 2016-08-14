import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../../service/user-service";
@Component({
    selector: 'user.list',
    template: require('./../../../view/index/user/list.jade')
})

export class UserList {
    users: any[] = [];

    constructor(
        private router: Router,
        private service: UserService
    ) {

    }

    ngOnInit() {
        this.service.getUsers().then(users => this.users = users);
    }

    onSelect(user: any) {
        this.router.navigate(['/user', user.id]);
    }
}