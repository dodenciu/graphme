import {User} from './user.model';

export interface Proposal {
  team: User[];
  otherTeam: User[];
  votes: number;
}
