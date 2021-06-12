import {Component, OnInit, TemplateRef} from '@angular/core';
import {Client} from '../../Core/Models/client.model';
import {ClientService} from '../../Core/Services/client.service';
import {Observable, of} from 'rxjs';
import {AppDataState, DataStateEnum} from '../../../state/client.state';
import {catchError, map, startWith} from 'rxjs/operators';
import {NzModalService} from 'ng-zorro-antd/modal';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Compte} from '../../Core/Models/compte.model';
import {CompteService} from '../../Core/Services/compte.service';


@Component({
  selector: 'app-contactez-nous',
  templateUrl: './nos-clients.component.html',
  styleUrls: ['./nos-clients.component.css']
})
export class NosClientsComponent implements OnInit {
  clients$: Observable<AppDataState<Client[]>> | null = null;
  clientOringins: Observable<AppDataState<Client[]>> | null = null;
  DataStateEnum = DataStateEnum
  ClientForm!: FormGroup;
  CompteForm!: FormGroup;
  clientUpdate: Client = {accounts: []}
  compteAdd: Compte = {}

  searchValue = '';
  visible = false;

  constructor(private clientService: ClientService, private compteService:CompteService,private modal: NzModalService, private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.OnGetAllClients()
  }


  OnGetAllClients() {
    this.clients$ = this.clientService.getAllClients().pipe(
      map(data => {
        return ({dataState: DataStateEnum.LOADED, data: data})
      }),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.Error, errorMessage: err.message}))
    )

    console.log(this.clients$);

    this.clientOringins = this.clientService.getAllClients().pipe(
      map(data => {
        return ({dataState: DataStateEnum.LOADED, data: data})
      }),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.Error, errorMessage: err.message}))
    )
  }

  displayAlert() {
    alert('Prof approved')
  }


  disableClient(client: Client) {
    this.clientService.desactivateClient(client).subscribe(data => {
      this.OnGetAllClients()
    })
  }

  deleteClient(client: Client) {
    this.clientService.deleteClient(client).subscribe(data => {
      this.OnGetAllClients()
    })
  }

  updateClient() {
    this.clientUpdate.firstname = this.ClientForm.controls.firstName.value
    this.clientUpdate.lastname = this.ClientForm.controls.lastName.value
    this.clientUpdate.cin = this.ClientForm.controls.cin.value
    this.clientUpdate.adress = this.ClientForm.controls.address.value
    this.clientUpdate.email = this.ClientForm.controls.email.value
    this.clientService.updateClient(this.clientUpdate).subscribe(data => {
      this.clientUpdate = data
    })
  }

  AddCompte() {
    for (const i in this.CompteForm.controls) {
      this.CompteForm.controls[i].markAsDirty();
      this.CompteForm.controls[i].updateValueAndValidity();
    }
    this.compteAdd.balance = this.CompteForm.controls.solde.value
    this.compteAdd.type = this.CompteForm.controls.typeCompte.value
    this.compteAdd.currency = this.CompteForm.controls.devise.value
    this.compteAdd.client=this.clientUpdate

    this.compteService.SaveCompte(this.compteAdd).subscribe(()=>{
      this.OnGetAllClients()
    });

    this.clientService.updateClient(this.clientUpdate).subscribe(data => {
      this.OnGetAllClients()
    })
  }

  deleteCompte(compte: Compte) {
    this.compteService.deleteClient(compte).subscribe()
  }

  expandSet = new Set<number>();

  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  createTplModal(tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>, client: Client): void {

    this.clientUpdate = client
    this.ClientForm = this.fb.group({
      firstName: [this.clientUpdate.firstname, [Validators.required]],
      lastName: [this.clientUpdate.lastname, [Validators.required]],
      cin: [this.clientUpdate.cin, [Validators.required]],
      address: [this.clientUpdate.adress, [Validators.required]],
      email: [this.clientUpdate.email, [Validators.email, Validators.required]],
    })

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


  createCompteModal(CompteContent: TemplateRef<{}>, CompteFooter: TemplateRef<{}>, client: Client): void {
    this.clientUpdate = client

    this.CompteForm = this.fb.group({
      devise: [null, [Validators.required]],
      solde: [0, [Validators.required]],
      typeCompte: [null, [Validators.required]],
    })

    this.modal.create({

      nzContent: CompteContent,
      nzFooter: CompteFooter,
      nzMaskClosable: false,
      nzWidth: 500,

      nzClosable: false,
      nzComponentParams: {
        value: 'Template Context'
      },
      nzOnOk: () => console.log('Click ok')
    });
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;

  }
}
