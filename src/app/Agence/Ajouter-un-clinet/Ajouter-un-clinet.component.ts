import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd/message';
import {Client} from '../../Core/Models/client.model';
import {ClientService} from '../../Core/Services/client.service';
import {Compte} from '../../Core/Models/compte.model';

@Component({
  selector: 'app-ma-relation-banque',
  templateUrl: './Ajouter-un-clinet.component.html',
  styleUrls: ['./Ajouter-un-clinet.component.css']
})
export class AjouterUnClinetComponent implements OnInit {
  validateForm!: FormGroup;
  ComteForm!: FormGroup;
  clientNew:Client={compts:[]}


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
      devise: [null, [Validators.required]],
      solde: [null, [Validators.required]],
      typeCompte: [null, [Validators.required]],

    });
  }

  submitForm(): void {


    if (this.validateForm?.invalid) return


      this.clientNew.firstName=this.validateForm.controls.firstName.value,
      this.clientNew.lastName=this.validateForm.controls.lastName.value,
      this.clientNew.phone=this.validateForm.controls.phone.value,
      this.clientNew.address=this.validateForm.controls.address.value,
      this.clientNew.email=this.validateForm.controls.email.value


    this.clientService.saveClient(this.clientNew).subscribe(data=>{
      this.validateForm.reset();
      this.clientNew={compts:[]}
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


  addCompte() {

    this.clientNew.compts.push({ devise: this.validateForm.controls.devise.value,
      solde: this.validateForm.controls.solde.value,typeCompte:this.validateForm.controls.typeCompte.value})
  }

  deletetCompte(i: number) {
    this.clientNew.compts.splice(i,1)
  }
}
