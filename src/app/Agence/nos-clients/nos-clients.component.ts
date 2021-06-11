import {Component, OnInit, TemplateRef} from '@angular/core';
import {Client} from '../../Core/Models/client.model';
import {ClientService} from '../../Core/Services/client.service';
import {Observable, of} from 'rxjs';
import {AppDataState, DataStateEnum} from '../../../state/client.state';
import {catchError, map, startWith} from 'rxjs/operators';
import {NzModalService} from 'ng-zorro-antd/modal';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-contactez-nous',
  templateUrl: './nos-clients.component.html',
  styleUrls: ['./nos-clients.component.css']
})
export class NosClientsComponent implements OnInit {
  clients$: Observable<AppDataState<Client[]>> | null=null;
  DataStateEnum=DataStateEnum
  ClientForm!: FormGroup;
  CompteForm!: FormGroup;
  clientUpdate: Client = {compts: []}

  constructor(private clientService:ClientService,private modal: NzModalService,private fb: FormBuilder) { }

  ngOnInit(): void {

    this.OnGetAllClients()
  }


  OnGetAllClients(){
    this.clients$=this.clientService.getAllClients().pipe(
      map(data=>{
        return ({dataState:DataStateEnum.LOADED,data:data})}),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.Error,errorMessage:err.message}))
    )
  }

  displayAlert() {
    alert("Prof approved")

  }


  disableClient(client:Client) {
    this.clientService.desactivateClient(client).subscribe(data=>{
      client.isActive=data.isActive
    })
  }

  deleteClient(client:Client){
    this.clientService.deleteClient(client).subscribe(data=>{
      this.OnGetAllClients()
    })
  }

  updateClient(){
    this.clientUpdate.firstName=this.ClientForm.controls.firstName.value
    this.clientUpdate.lastName=this.ClientForm.controls.lastName.value
    this.clientUpdate.phone=this.ClientForm.controls.phone.value
    this.clientUpdate.address=this.ClientForm.controls.address.value
    this.clientUpdate.email=this.ClientForm.controls.email.value
    this.clientService.updateClient(this.clientUpdate).subscribe(data=>{
      this.clientUpdate=data
    })


  }

  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  createTplModal( tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>,client:Client): void {
    console.log(client)
    this.clientUpdate=client
    this.ClientForm=this.fb.group({
      firstName: [this.clientUpdate.firstName, [Validators.required]],
      lastName: [this.clientUpdate.lastName, [Validators.required]],
      phone: [this.clientUpdate.phone, [Validators.required]],
      address: [this.clientUpdate.address, [Validators.required]],
      email: [this.clientUpdate.email, [Validators.email,Validators.required]],
    })

    this.modal.create({

      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzWidth:500,

      nzClosable: false,
      nzComponentParams: {
        value: 'Template Context'
      },
      nzOnOk: () => console.log('Click ok')
    });
  }

  createCompteModal( CompteContent: TemplateRef<{}>, CompteFooter: TemplateRef<{}>,client:Client): void {
    console.log(client)

    this.CompteForm=this.fb.group({
      devise: [null, [Validators.required]],
      solde: [null, [Validators.required]],
      typeCompte: [null, [Validators.required]],
    })

    this.modal.create({

      nzContent: CompteContent,
      nzFooter: CompteFooter,
      nzMaskClosable: false,
      nzWidth:500,

      nzClosable: false,
      nzComponentParams: {
        value: 'Template Context'
      },
      nzOnOk: () => console.log('Click ok')
    });
  }
}
