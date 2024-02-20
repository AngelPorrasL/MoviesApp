import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { TVShowsComponent } from './tvshows/tvshows.component';

export const routes: Routes = [
    {path: 'movies', component: MoviesComponent},
    {path: 'tvshows', component: TVShowsComponent},
    {path: '', redirectTo: '/tvshows', pathMatch: 'full'}
];
