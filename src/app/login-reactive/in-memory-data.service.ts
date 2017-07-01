import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        let users = [
            {id: 1, userName: "anick", password: "anick123"},
            {id: 2, userName: "admin", password: "123%%"}
        ];
        return {users};
    }
}