import {User} from './user.model';
import {Proposal} from './proposal.model';

export enum EventType {
  footbal, other
}

export interface Event {
  id: string;
  type: EventType;
  name: string;
  date: Date;
  users: User[];
  proposals: Proposal[];
}
