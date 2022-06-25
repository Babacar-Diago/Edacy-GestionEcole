import { Injectable } from '@angular/core';
import {Classe} from "../models/classe";
import {Eleve} from "../models/eleve";

@Injectable({
  providedIn: 'root'
})
export class PartageDeDoneesService {

  constructor() { }

  classes: Classe[] = [
    {id:1, nom:'Second-A', niveau:'Second', serie:'S1'},
    {id:2, nom:'Première-A', niveau:'Première', serie:'S1'},
    {id:3, nom:'Terminal-A', niveau:'Terminal', serie:'S1'}
  ]

  eleves: Eleve[] = [
    {id:1, nom:"FAYE", prenom:"Abdoulaye", classe: {
        id:1, nom:'Second-A', niveau:'Second', serie:'S1'
      }
    },
    {id:2, nom:"DIOP", prenom:"Babacar", classe: {
        id:1, nom:'Second-A', niveau:'Second', serie:'S1'
      }
    },
    {id:3, nom:"NDIAYE", prenom:"Astou", classe: {
        id:1, nom:'Second-A', niveau:'Second', serie:'S1'
      }
    }
  ]
}
