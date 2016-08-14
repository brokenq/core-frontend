import {Injectable} from "@angular/core";
import {PROJECT_MOCK_DATA} from "../../../mock/project/project-mock-data";

@Injectable()
export class ProjectService {
    getProjects() {
        return Promise.resolve(PROJECT_MOCK_DATA);
    }

    getProject(id: number) {
        return this.getProjects().then(projects => projects.find(project => project.id === id));
    }
}