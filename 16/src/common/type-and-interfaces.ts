 export interface User  {
    id: number;
    login: string;
    password: string;
    isAdmin: boolean
}
 export interface Post  {
    id: number;
    userId: number;
    topic: string;
    text: string
 }