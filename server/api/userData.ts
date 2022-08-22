class Users {
    userName: string | undefined;
    birthDate: string | undefined;
    age: number | undefined;
    email: String | undefined;
    password: String | undefined;
    valid: boolean | undefined;

    constructor(){  
    }
}

export let arrayOfUsers: Users[] = [
    {userName: "Bob", birthDate: "11/04/1999", age: 20, email: "email1@gmail.com", password: "111", valid: true},
    {userName: "John", birthDate: "1/05/1996", age: 22, email: "email2@gmail.com", password: "222", valid: true},
    {userName: "Dez", birthDate: "15/06/1998", age: 26, email: "email3@gmail.com", password: "333", valid: true}
]