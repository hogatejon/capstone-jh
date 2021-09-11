import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-charter',
  templateUrl: './charter.component.html',
  styleUrls: ['./charter.component.scss']
})
export class CharterComponent implements OnInit, OnDestroy {

  ngDestroyed$: Subject<boolean> = new Subject();
  orgType: string;

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscribeToRouteParams();
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
  }

  private subscribeToRouteParams() {
    this.route.params.pipe(takeUntil(this.ngDestroyed$)).subscribe((params: Params) => {
      if (params) {
        this.orgType = params.orgType;
      }
    });
  }

}
