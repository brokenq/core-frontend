import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {ProjectService} from "../../service/project-service";
@Component({
    selector: 'project.list',
    template: require('./../../../view/index/project/list.jade')
})

export class ProjectList {
    projects: any[] = [];

    constructor(
        private router: Router,
        private service: ProjectService
    ) {

    }

    ngOnInit() {
        this.service.getProjects().then(projects => this.projects = projects);
    }

    onSelect(project: any) {
        this.router.navigate(['/project', project.id])
    }

}
