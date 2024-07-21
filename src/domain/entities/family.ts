import { Entity } from '../core';

export interface User extends Entity {
  displayName: string;
  email: string;
}

export interface Family extends Entity {
  name: string;
  owner: User;
  inviteCode: string;
  members?: User[];
  createdAt: Date;
  createdBy: User;
}

export interface CreateFamilyParams {
  name: string;
}
