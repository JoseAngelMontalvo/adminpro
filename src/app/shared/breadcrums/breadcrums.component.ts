import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: [],
})
export class BreadcrumsComponent implements OnInit {
  titulo: string;
  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {
    this.getDataRoute().subscribe((data) => {
      this.titulo = data.titulo;
      this.title.setTitle(this.titulo);
      const metaTag: MetaDefinition = {
        name: 'description',
        content: data.description,
      };
      this.meta.updateTag(metaTag);
    });
  }

  ngOnInit(): void {}
  getDataRoute() {
    return this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => {
        return event.snapshot.data;
      })
    );
  }
}
