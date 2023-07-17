import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm!: FormGroup; 

  constructor(private readonly fb: FormBuilder, private router: Router) {
  }

  onSubmit() {

    this.router.navigate(['/Account/MyAccount']);
  }

  ngOnInit(): void {

    this.registerForm = this.initForm();
  }

  initForm(): FormGroup {

    return this.fb.group({

      // El primer campo es el valor por defecto, pero lo dejaremos vacio
      // El segundo campo son las validaciones, puede ser uno o un array de ellos
      user : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(7)]],
      confirm_password : ['', [Validators.required, Validators.minLength(7), this.validatePassword.bind(this)]],
      terms: ['', Validators.required]
    })
  }

  validatePassword(control: AbstractControl): ValidationErrors | null {

    const password = control.root.get('password')?.value; // Usamos el root.get para ir al formGroup al que pertenece y obtener el valor de 'password'
    const confirmPassword = control.value; // No usamos el root ya que estamos usando esta funcion de validacion especificamente en el formControl "Confirm_Password"

    if(password !== confirmPassword) {
      return {confirmPasswordError: true};
    }
    return null;
  }
}
