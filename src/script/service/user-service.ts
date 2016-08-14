import {Injectable} from "@angular/core";
import {USER_MOCK_DATA} from "../../../mock/project/user-mock-data";

@Injectable()
export class UserService {
    getUsers() {
        return Promise.resolve(USER_MOCK_DATA);
    }

    getUser(id: number) {
        return this.getUsers().then(users => users.find(user => user.id === id));
    }
}