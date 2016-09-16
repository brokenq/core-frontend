import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ProjectService} from "../../service/project-service";
import {PROJECT_ROUTES} from "./project-route";
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        // RouterModule.forChild([
        //     {path: '', component: ProjectList}
        //     // {path: ':id', component: ProjectView},
        // ])
        PROJECT_ROUTES
    ],
    declarations: [
        // ProjectList,
        // ProjectView
    ],
    providers: [
        ProjectService
    ]
})

export class ProjectModule {

}