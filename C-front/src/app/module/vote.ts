import { User } from './user';
import { Categorie } from './categorie';

export class Vote {

  id: number;
  date: Date;
  user: User;
  categorie: Categorie;
}
