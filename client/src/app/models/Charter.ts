import { Member } from './Member';

export interface Charter {
  GroupId: number;
  GroupName: string;
  OrganizationName: string;
  SponsorName: string;
  SponsorPhone: string;
  SponsorEmail: string;
  MaxGroupSize: number;
  Members: Array<Member>
}
