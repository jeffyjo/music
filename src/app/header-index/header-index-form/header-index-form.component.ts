import { async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseService } from './../../services/firebase.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header-index-form',
  templateUrl: './header-index-form.component.html',
  styleUrls: ['./header-index-form.component.scss']
})
export class HeaderIndexFormComponent {
  form = true

  constructor(private firebaseService: FirebaseService,
              private router : Router
  ) { }

  // Response to get access to user-objebt
  login(form : NgForm){
    console.log(form)
    let value = form.value
    
    if (form.valid) {
      let user = this.firebaseService.login(value.email, value.password)
      user.then(response => {
        console.log(response)
        if (response.uid) {
          this.router.navigate(["/homepage"])
        }
      }).catch( (error) => {
        console.log(error)
        this.form = false
      })
    }
  }
  
  signUp() {
    console.log("sign up")
  }

}
