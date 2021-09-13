import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { Charter } from '../models/Charter';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private getAllGroupsUrl: string = 'http://localhost:8082/api/groups';
  private getGroupByIdUrl: string = 'http://localhost:8082/api/groups/';
  private getGroupsByOrgUrl: string = 'http://localhost:8082/api/groups/byorganization/';
  private addGroupUrl: string = 'http://localhost:8082/api/groups';
  private editGroupUrl: string = 'http://localhost:8082/api/groups';
  private deleteGroupByIdUrl: string = 'http://localhost:8082/api/groups/'
  jsonContentTypeHeaders = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  };

  selectedGroup = new BehaviorSubject<Charter>(null);
  filterOrg = new BehaviorSubject<string>('');

  constructor(private readonly http: HttpClient) { }

  getAllCharters<Charter>(): Observable<Charter[]> {
    return this.http.get<Charter[]>(this.getAllGroupsUrl);
  }

  getChartersByOrg<Charter>(orgId: string): Observable<Charter[]> {
    return this.http.get<Charter[]>(this.getGroupsByOrgUrl + orgId);
  }

  getCharterById<Charter>(groupId: number): Observable<Charter> {
    return this.http.get<Charter>(this.getGroupByIdUrl + groupId);
  }

  addCharter<Charter>(charter: Charter): Observable<Charter> {
    return this.http.post<Charter>(this.addGroupUrl, charter, this.jsonContentTypeHeaders);
  }

  deleteCharterById<Charter>(id: number): Observable<Charter> {
    return this.http.delete<Charter>(this.deleteGroupByIdUrl + id);
  }

  updateSelectedGroup(group: Charter) {
    this.selectedGroup.next(group);
  }
}