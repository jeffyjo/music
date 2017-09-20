import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { 
    Http, 
    Response, 
    JsonpModule, 
    Headers, 
    HttpModule, 
    RequestOptions, 
    RequestOptionsArgs 
  } from '@angular/http';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { firebaseConfig } from '../app.module';

@Injectable()
export class FirebaseService {
    user: Observable<firebase.User>
    gearList: FirebaseListObservable<any>
    eventsList: FirebaseListObservable<any>
    userObject : string
    //msgVal: string = ''
    
    constructor(public afAuth: AngularFireAuth, 
                public af: AngularFireDatabase,
                private http: Http) {
        this.user = this.afAuth.authState;
        // this.gearList = this.af.list('gear')
        this.gearList = af.list('gear', { 
            query : {
                limitToLast: 10,
                orderByKey: true
            } })
    }

    /* User login */
    async login (email : string, pass : string) {
        let acceptedUser

        // Anonymous signIn
        // this.afAuth.auth.signInAnonymously()

        // Real User
        // return this.afAuth.auth.signInWithEmailAndPassword(email, pass)
        //     .then(async value => {
        //         console.log(value)
        //         await firebase.auth().onAuthStateChanged( (user) => {
        //                 if (user) {
        //                     console.log(user)
        //                     acceptedUser = user
        //                     // return acceptedUser
        //                 } else {
        //                     console.log("logged out")
        //                     // return null
        //                 }
        //             });
        //     }).catch( error => {
        //         console.log(error) 
        //         // return null
        //     })
        
        await firebase.auth().onAuthStateChanged( (user) => {
            if (user) {
                console.log(user)
                acceptedUser = user
            } else {
                console.log("logged out")
            }
        });
        
        this.userObject = acceptedUser
        return acceptedUser

    }

    /* User Logout */
    logout() {
        this.afAuth.auth.signOut()
    }

    /* HTTP REQUESTS */

    //Get All
    getAllGear(){
        console.log(this.gearList)
        return this.gearList

        // forEach(res => console.log(res))
            // .map( (res) => console.log(res) )

        
    }




    //Get One

    //Update
    postGear(){

    }

    //Delete
    

    //Get all events
    getAllEvents(){
        return this.eventsList
    }

}