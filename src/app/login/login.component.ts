import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
	standalone: true,
	imports: [
		MatButtonModule,
		CommonModule,
		ReactiveFormsModule
	],
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	public form: FormGroup;
	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			username: this.fb.control<string>("", [Validators.required]),
			roomCode: this.fb.control<string>("", [Validators.required]),
		});
		this.form.valueChanges.subscribe(() => console.log(this.form.invalid));
	}
}
