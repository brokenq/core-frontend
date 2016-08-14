import {Routes, RouterModule} from "@angular/router";
import {UserList} from "./user-list";
import {UserView} from "./user-view";
import {UserEdit} from "./user-edit";
import {User} from "./user";
const _USER_ROUTES: Routes = [
    {
        path: 'user',
        component: User,
        children: [
            {
                path: '',
                component: UserList
            }, {
                path: ':id',
                component: UserView
            }, {
                path: ':id/edit',
                component: UserEdit
            }
        ]
    }
];

export const USER_ROUTES = RouterModule.forChild(_USER_ROUTES);