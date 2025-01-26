import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MovieService } from '../../Services/movie.service';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  value: string = '';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movies = this.movieService.getMovies();
    this.filteredMovies = this.movies;
  }

  filterMoviesByName(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    const name = input.value;
    this.filteredMovies = this.movies.filter(movie =>
        movie.name.toLowerCase().startsWith(name.toLowerCase())
    );
  }

  @Output() filterValue = new EventEmitter<string>();
  
  emitFilter(value: string): void {
    this.filterValue.emit(value);
  }
}
