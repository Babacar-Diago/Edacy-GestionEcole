import {Classe} from "./classe";

export interface Eleve {
  id: number,
  nom: string,
  prenom: string,
  classe: Classe
}
