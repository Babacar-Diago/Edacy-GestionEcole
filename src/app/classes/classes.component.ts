import {Component, Inject, Input, OnInit} from '@angular/core';
import { Classe } from '../models/classe';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {EditClasseComponent} from "../edit-classe/edit-classe.component";
import {PartageDeDoneesService} from "../services/partage-de-donees.service";


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  classes: Classe[] = this.partage_de_donnee_service.classes

  constructor(private dialog: MatDialog, private partage_de_donnee_service:PartageDeDoneesService) { }

  ngOnInit(): void {}

  addClasse() {
    this.dialog.open(NewClasse, {
      data : this.classes,
      width:'400px'
    });;
  }

  deleteClasse(classeId: number) {
    const taskIndex = this.classes.findIndex((classe) => classe.id === classeId);
    this.classes.splice(taskIndex, 1);
  }

  openDialog(classe: Classe) {
      this.dialog.open(EditClasseComponent, {
        data: JSON.parse(JSON.stringify(classe)),
        width:'400px'
      });
  }


}

@Component({
  selector: 'app-classes',
  templateUrl: './newClasseDialog.html',
  styleUrls: ['./classes.component.scss']
})

export class NewClasse {

  constructor(public dialogRef: MatDialogRef<NewClasse>,
    @Inject(MAT_DIALOG_DATA) public data: Classe[]) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addNewClasse(classe:Classe) {
    let id:number
    const lastIndex = this.data.length - 1;
    if(lastIndex<0) id=1;
    else id = this.data[lastIndex].id + 1;
    classe.id=id;
    this.data.push(classe);

    this.dialogRef.close();
  }

}
