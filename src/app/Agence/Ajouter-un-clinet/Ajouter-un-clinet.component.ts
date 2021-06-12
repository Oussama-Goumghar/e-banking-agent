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
  ComteForm!: FormGroup;
  clientNew: Client = {accounts: []}


  constructor(private fb: FormBuilder, private message: NzMessageService, private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      address: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      cin: [null, [Validators.required]],
      checkEmail: [null, [Validators.required, this.confirmationValidator]],
    });
    this.ComteForm = this.fb.group({
        devise: [null, [Validators.required]],
        solde: [null, [Validators.required]],
        typeCompte: [null, [Validators.required]],
      }
    )
  }

  submitForm(): void {

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm?.invalid) {
      return
    }
    this.clientNew.firstname = this.validateForm.controls.firstName.value
    this.clientNew.lastname = this.validateForm.controls.lastName.value
    this.clientNew.tele = this.validateForm.controls.phone.value
    this.clientNew.adress = this.validateForm.controls.address.value
    this.clientNew.email = this.validateForm.controls.email.value
    this.clientNew.cin=this.validateForm.controls.cin.value
    this.clientNew.password=this.validateForm.controls.cin.value




    this.clientService.saveClient(this.clientNew).subscribe(data => {
      this.validateForm.reset();
      this.clientNew = {accounts: []}
      alert('succsess')
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

    for (const i in this.ComteForm.controls) {
      this.ComteForm.controls[i].markAsDirty();
      this.ComteForm.controls[i].updateValueAndValidity();
    }
    if (this.ComteForm?.invalid) {
      return
    }
    this.clientNew.accounts.push({
      currency: this.ComteForm.controls.devise.value,
      balance: this.ComteForm.controls.solde.value, type: this.ComteForm.controls.typeCompte.value
    })
    this.ComteForm.reset()
  }

  deletetCompte(i: number) {
    this.clientNew.accounts.splice(i, 1)
  }
}
