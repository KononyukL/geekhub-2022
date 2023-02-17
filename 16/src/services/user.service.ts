import {User} from "../common/type-and-interfaces";

export class UserService {
   private db: User[] = [];
   private idCounter: number = 1;
    async addUser(login: string, password: string, isAdmin: boolean = false): Promise<User> {
       const user: User = {
           id: this.idCounter,
           login,
           password,
           isAdmin
       }

       this.db.push(user);

        this.idCounter++;

        console.log(`Our database = ${JSON.stringify(this.db)}`);

        return user
    }

    async getUser(login: string, password: string): Promise<User | string> {
        const user = this.db.find((user) => user.login === login && user.password === password)

        console.log(`Our database = ${JSON.stringify(this.db)}`);

        return user || 'Not user'
    }
}

export const userService = new UserService()