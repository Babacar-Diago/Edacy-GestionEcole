import {Component, Inject, OnInit} from '@angular/core';
import {Classe} from "../models/classe";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {PartageDeDoneesService} from "../services/partage-de-donees.service";
import {Eleve} from "../models/eleve";
import {EditEleveComponent} from "../edit-eleve/edit-eleve.component";

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.scss']
})
export class ElevesComponent implements OnInit {

  eleves: Eleve[] = this.partage_de_donnee_service.eleves

  constructor(private dialog: MatDialog, private partage_de_donnee_service:PartageDeDoneesService) { }

  ngOnInit(): void {}

  openDialogAddEleve() {
    this.dialog.open(NewEleve, {
      data : this.eleves,
      width:'400px'
    });;
  }

  deleteEleve(eleveId: number) {
    const taskIndex = this.eleves.findIndex((eleve) => eleve.id === eleveId);
    this.eleves.splice(taskIndex, 1);
  }

  openDialog(eleve: Eleve) {
    this.dialog.open(EditEleveComponent, {
      data: JSON.parse(JSON.stringify(eleve)),
      width:'400px'
    });
  }


}

@Component({
  selector: 'app-classes',
  templateUrl: './newEleveDialog.html',
  styleUrls: ['./eleves.component.scss']
})

export class NewEleve {

  constructor(public dialogRef: MatDialogRef<NewEleve>,
              @Inject(MAT_DIALOG_DATA) public data: Eleve[],
              private partage_de_donnee_service:PartageDeDoneesService) {}

  classes: Classe[] = this.partage_de_donnee_service.classes
  // @ts-ignore
  classeFK: Classe;

  onNoClick(): void {
    this.dialogRef.close();
  }

  addNewEleve(eleve:Eleve) {
    let id:number
    const lastIndex = this.data.length - 1;
    if(lastIndex<0) id=1;
    else id = this.data[lastIndex].id + 1;
    eleve.id=id;
    eleve.classe=this.classeFK;
    this.data.push(eleve);

    this.dialogRef.close();
  }

  getClasse(classe:Classe){
    this.classeFK = JSON.parse(JSON.stringify(classe));
    console.log(this.classeFK);
  }

}

