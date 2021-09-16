import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Member } from '../../models/Member';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  groupBaseUrl: string = `http://localhost:8082/api/groups`

  constructor(private readonly http: HttpClient) { }

  deleteMemberFromGroup(groupId: string, memberId: string): Observable<Member> {
    return this.http.delete<Member>(`${this.groupBaseUrl}/${groupId}/members/${memberId}`);
  }

  addMemberToGroup(groupId: string, member: Member): Observable<Member> {
    return this.http.post<Member>(`${this.groupBaseUrl}/${groupId}/members`, member);
  }

  editMemberInGroup(groupId: string, member: Member): Observable<Member> {
    return this.http.put<Member>(`${this.groupBaseUrl}/${groupId}/members`, member)
  }

}
