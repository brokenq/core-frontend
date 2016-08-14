import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {UserList} from "./user-list";
import {UserView} from "./user-view";
import {UserEdit} from "./user-edit";
import {UserService} from "../../service/user-service";
import {USER_ROUTES} from "./user-route";
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        USER_ROUTES
    ],
    declarations: [
        UserList,
        UserView,
        UserEdit
    ],
    providers: [
        UserService
    ]
})

export class UserModule {

}