import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../types/Movie';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private router: Router, private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }

  handleNewMovie() {
    this.router.navigate(['/movies', 'new']);
  }
}
