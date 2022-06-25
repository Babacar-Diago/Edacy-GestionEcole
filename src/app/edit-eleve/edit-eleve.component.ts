import {Component, Inject, OnInit} from '@angular/core';
import {Classe} from "../models/classe";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PartageDeDoneesService} from "../services/partage-de-donees.service";
import {Eleve} from "../models/eleve";

@Component({
  selector: 'app-edit-eleve',
  templateUrl: './edit-eleve.component.html',
  styleUrls: ['./edit-eleve.component.scss']
})
export class EditEleveComponent implements OnInit {

  eleves: Eleve[] = this.partage_de_donnee_service.eleves

  constructor(public dialogRef: MatDialogRef<EditEleveComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Eleve,
              private partage_de_donnee_service:PartageDeDoneesService) { }

  classes: Classe[] = this.partage_de_donnee_service.classes
  // @ts-ignore
  classeFK: Classe;

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editEleve(eleve: Eleve) {
    let idData = this.data.id
    for (let i = 0; i <= this.eleves.length; i++) {
      if (i+1 == idData) {
        eleve.classe=this.classeFK;
        this.eleves[i] = JSON.parse(JSON.stringify(eleve));
      }
    }
    this.dialogRef.close();
  }

  getClasse(classe:Classe){
    this.classeFK = JSON.parse(JSON.stringify(classe));
    console.log(this.classeFK);
  }
}
