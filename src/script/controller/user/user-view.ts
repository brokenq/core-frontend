import {Component} from "@angular/core";
import {Subscription} from "rxjs/Rx";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user-service";
@Component({
    selector: 'user.view',
    template: require('./../../../view/index/user/view.jade')
})

export class UserView {
    private sub: Subscription;
    user = {};
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: UserService
    ) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.service.getUser(id).then(user => this.user = user);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}