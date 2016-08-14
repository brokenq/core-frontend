import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../../service/project-service";
import {Subscription} from "rxjs/Rx";
@Component({
    selector: 'project.view',
    template: require('./../../../view/index/project/view.jade')
})

export class ProjectView {
    private sub: Subscription;
    project = {};

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ProjectService
    ) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params =>{
            let id = +params['id'];
            this.service.getProject(id).then(project => this.project = project)
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}