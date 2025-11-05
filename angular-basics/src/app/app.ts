import { provideHttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GetNamesService } from './get-names-service';

@Component({
  selector:'app-root',
  templateUrl:'./app.html',
  styleUrl:'./app.css',
  standalone:true,
  imports:[ReactiveFormsModule],
  providers:[GetNamesService]

})


export class AppComponent implements OnInit {
constructor(private fb: FormBuilder) {}
  loginForm!: FormGroup;
  getData = inject(GetNamesService)
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(6)],
    });
    
  }
}
