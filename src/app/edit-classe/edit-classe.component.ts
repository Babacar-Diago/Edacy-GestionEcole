import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Classe} from "../models/classe";
import {PartageDeDoneesService} from "../services/partage-de-donees.service";
import {Eleve} from "../models/eleve";

@Component({
  selector: 'app-edit-classe',
  templateUrl: './edit-classe.component.html',
  styleUrls: ['./edit-classe.component.scss']
})
export class EditClasseComponent implements OnInit {

  classes: Classe[] = this.partage_de_donnee_service.classes

  constructor(public dialogRef: MatDialogRef<EditClasseComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Classe,
              private partage_de_donnee_service:PartageDeDoneesService) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editClasse(classe: Classe) {
    let idData = this.data.id
    for (let i = 0; i <= this.classes.length; i++) {
      if (i+1 == idData) {
        this.classes[i] = JSON.parse(JSON.stringify(classe));
      }
    }
    this.dialogRef.close();
  }

}
