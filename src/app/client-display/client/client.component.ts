import { Component, OnInit } from '@angular/core';
import { ClientSearchService } from 'src/app/services/client-search.service';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/client-creation/client';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  client$: Observable<Client>;

  constructor(
    private clientSearchService: ClientSearchService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.client$ = this.activatedRoute.params.pipe(
      map(params => params.id),
      switchMap(id => this.clientSearchService.getClientById(id))
    );
  }
}
