import {Routes, RouterModule} from "@angular/router";
import {UserList} from "./user-list";
import {UserView} from "./user-view";
import {UserEdit} from "./user-edit";
import {User} from "./user";
import {WebpackAsyncRoute} from "@angularclass/webpack-toolkit/dist/index";
const _USER_ROUTES: Routes = [
    {
        path: 'user',
        component: User,
        children: [
            {
                path: '',
                component: 'UserList',
                canActivate: [WebpackAsyncRoute]
            }, {
                path: ':id',
                component: 'UserView',
                canActivate: [WebpackAsyncRoute]
            }, {
                path: ':id/edit',
                component: 'UserEdit',
                canActivate: [WebpackAsyncRoute]
            }
        ]
    }
];

export const USER_ROUTES = RouterModule.forChild(_USER_ROUTES);