import {Proposal} from './proposal.model';

export enum Role {
  admin, player
}

export interface User {
  id: string;
  name: string;
  role: Role;
  avatar: string;
  events: Event[];
  proposals: Proposal[];
}
