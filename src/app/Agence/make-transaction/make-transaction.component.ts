import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../../Core/Services/client.service';
import {CompteService} from '../../Core/Services/compte.service';
import {NzModalRef, NzModalService} from 'ng-zorro-antd/modal';
import {ActivatedRoute} from '@angular/router';
import {Client} from '../../Core/Models/client.model';
import {Observable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import {AppDataState, DataStateEnum} from '../../../state/client.state';
import {Benificiaire} from '../../Core/Models/benifisiaire.model';
import {TansactionService} from '../../Core/Services/tansaction.service';
import {Transaction} from '../../Core/Models/Transaction.model';
import {BenifisiairService} from '../../Core/Services/benifisiair.service';

@Component({
  selector: 'app-make-transaction',
  templateUrl: './make-transaction.component.html',
  styleUrls: ['./make-transaction.component.css']
})
export class MakeTransactionComponent implements OnInit {
  validateForm!: FormGroup;
  clientNow$: Observable<AppDataState<Client>> | null = null;
  validateFormben!: FormGroup;
  client: Client = {}
  id: string
  transaction:Transaction
  benificiaire:Benificiaire

  tplModalButtonLoading = false;
  disabled = false;


  constructor(private clientService: ClientService, private compteService: CompteService, private modal: NzModalService, private fb: FormBuilder, private _Activatedroute: ActivatedRoute, private transactionService: TansactionService,private benificiaireService:BenifisiairService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      Comptes: [null, [Validators.required]],
      Beneficiaire: [null, [Validators.required]],
      montant: [null, [Validators.required]],
      motif: [null, [Validators.required]],
    });
    this.validateFormben = this.fb.group({
      tele: [null, [Validators.required]],
      accountNum: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      firstname: [null, [Validators.required]],


    });
    this.id = this._Activatedroute.snapshot.paramMap.get('id');

    this.clientNow$ = this.clientService.getClientById(this.id).pipe(
      map(data => {
        return ({dataState: DataStateEnum.LOADED, data: data})
      }),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.Error, errorMessage: err.message}))
    )
  }

  submitForm(value: any) {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm?.invalid) {
      return
    }
    this.transaction={
      benificiare:value.Beneficiaire,
      discription:value.motif,
      amounts:value.montant,
      type:"VIREMENT",
      typeTransaction:"debit",
      compte:value.Comptes,
      name:"VIREMENT de montant "+value.montant+"  "+"vers"+value.Beneficiaire.firstname,
    }
    this.transactionService.SaveTransaction(this.transaction).subscribe(
      data=>{
        alert("sacceed")
        this.validateForm.reset()
      }
    )
  }


  createTplModal( tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.modal.create({

      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzWidth: 500,

      nzClosable: false,
      nzComponentParams: {
        value: 'Template Context'
      },
      nzOnOk: () => console.log('Click ok')
    });


  }

  destroyTplModal(modelRef: NzModalRef): void {
    this.tplModalButtonLoading = true;
    setTimeout(() => {
      this.tplModalButtonLoading = false;
      modelRef.destroy();
    }, 1000);
  }

  addnewB(data: any) {
    for (const i in this.validateFormben.controls) {
      this.validateFormben.controls[i].markAsDirty();
      this.validateFormben.controls[i].updateValueAndValidity();
    }
    if (this.validateFormben?.invalid) {
      return
    }

    this.benificiaire={
      compteNumber:data.accountNum,
      tele:data.tele,
      email:data.email,
      lastName:data.lastName,
      firstName:data.firstname
    }
    this.benificiaireService.SaveBenificiaire(this.benificiaire).subscribe(
      data=>{
        alert("sacceed")
        this.validateFormben.reset()
      }
    )
  }

  OnGetBeneficiair() {

  }

  OnGetBeneficiair1() {

  }


  OnGetAccount() {

  }

  onSeveBenificier(beneficiaire: Benificiaire) {

  }

  onDeleteBenificier(benf: Benificiaire) {

  }

  onSaveTransaction(transaction: Benificiaire) {

  }

}
