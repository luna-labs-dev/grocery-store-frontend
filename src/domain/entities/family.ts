import { Entity } from '../core';

export interface User extends Entity {
  displayName: string;
  email: string;
}

export interface Family extends Entity {
  name: string;
  description?: string;
  owner: User;
  inviteCode: string;
  members?: User[];
  createdAt: Date;
  createdBy: string;
}

export interface CreateFamilyParams extends Pick<Family, 'name' | 'description'> {}

export interface JoinFamilyParams extends Pick<Family, 'inviteCode'> {}
