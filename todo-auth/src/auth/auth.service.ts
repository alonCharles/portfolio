import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, map, Observable, switchMap, throwError } from "rxjs";
import { User } from "./auth.model";
import { v4 as uuidv4 } from "uuid";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private http = inject(HttpClient)
    private usersUrl = 'http://localhost:3000/users'

    register(credentials : {name: string, email: string, password: string}) : Observable<User> {
        const newUser : User = {
            id : uuidv4(),
            name: credentials.name,
            email : credentials.email
        }
        const userToSave = {...newUser, password: credentials.password}

        return this.http.get<User[]>(`${this.usersUrl}?email=${credentials.email.toLowerCase()}`).pipe(
            switchMap(existingUsers => {
                if(existingUsers.length > 0) {
                    return throwError(() => new Error('email already exists'))
                }
                return this.http.post<User>(this.usersUrl, userToSave).pipe(
                    map(() => newUser)
                )
            }),
            catchError(this.handleError)
        )
    }
}