import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TvshowsService } from './services/tvshows.service';

@Component({
  selector: 'app-tvshows',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tvshows.component.html',
  styleUrl: './tvshows.component.css',
})
export class TVShowsComponent implements OnInit {
  tvshows: any;
  pageCount: any;

  constructor(private tvshowsService: TvshowsService) {}

  ngOnInit(): void {
    this.tvshowsService.getTVShows().subscribe((data: any) => {
      this.tvshows = data.results;
      this.pageCount = Array(data.total_pages)
        .fill(1)
        .map((x, i) => i);
    });
  }

  onPage(page: number) {
    this.tvshowsService.getTVShowsPage(page).subscribe((data: any) => {
      this.tvshows = data.results;
      this.pageCount = Array(data.total_pages)
        .fill(1)
        .map((x, i) => i);
    });
  }
}
