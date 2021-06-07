import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd/message';
import {Client} from '../../Core/Models/client.model';
import {ClientService} from '../../Core/Services/client.service';

@Component({
  selector: 'app-ma-relation-banque',
  templateUrl: './Ajouter-un-clinet.component.html',
  styleUrls: ['./Ajouter-un-clinet.component.css']
})
export class AjouterUnClinetComponent implements OnInit {
  validateForm!: FormGroup;


  constructor(private fb: FormBuilder, private message: NzMessageService,private clientService:ClientService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      address: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      checkEmail: [null, [Validators.required, this.confirmationValidator]],
    });
  }

  submitForm(): void {

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm?.invalid) return

    let client:Client = {
      firstName:this.validateForm.controls.firstName.value,
      lastName:this.validateForm.controls.lastName.value,
      phone:this.validateForm.controls.phone.value,
      address:this.validateForm.controls.address.value,
      email:this.validateForm.controls.email.value
    }

    this.clientService.saveClient(client).subscribe(data=>{
      alert("succsess")
    })

  }


  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {required: true};
    } else if (control.value !== this.validateForm.controls.email.value) {
      return {confirm: true, error: true};
    }
    return {};
  };


  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }


}
