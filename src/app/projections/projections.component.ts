import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Projection } from '../models/projection.model';
import { Movie } from '../models/movie.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CartService } from '../../Services/cart.service';
import { MovieService } from '../../Services/movie.service';

@Component({
  selector: 'app-projections',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    DatePipe,
    MatDialogModule
  ],
  templateUrl: './projections.component.html',
  styleUrl: './projections.component.css'
})
export class ProjectionsComponent implements OnInit {
  selectedDate: Date = new Date();
  filteredProjections: Projection[] = [];
  cart: Projection[] = [];
  movies: Movie[] = [];
  
  constructor(private cartService: CartService, private movieService: MovieService ) {}

 
  
  ngOnInitMovies() {
    this.movies = this.movieService.getMovies();
  }

  private projections = [
    {
      id: 1,
      movieId: 1,
      startingAt: new Date('2025-01-27T18:00:00'),
      price: 800
    },
    {
      id: 2,
      movieId: 2,
      startingAt: new Date('2025-01-27T20:30:00'),
      price: 750
    },
    {
      id: 3,
      movieId: 3,
      startingAt: new Date('2025-01-28T17:00:00'),
      price: 900
    },
    {
      id: 4,
      movieId: 4,
      startingAt: new Date('2025-01-28T19:30:00'),
      price: 800
    },
    {
      id: 5,
      movieId: 5,
      startingAt: new Date('2025-01-29T18:00:00'),
      price: 850
    },
    {
      id: 6,
      movieId: 6,
      startingAt: new Date('2025-01-27T18:30:00'),
      price: 850
    },
    {
      id: 7,
      movieId: 2,
      startingAt: new Date('2025-01-24T18:30:00'),
      price: 850
    },
    {
      id: 8,
      movieId: 4,
      startingAt: new Date('2025-01-28T18:30:00'),
      price: 850
    },{
      id: 9,
      movieId: 8,
      startingAt: new Date('2025-01-28T18:30:00'),
      price: 850
    },
    {
      id: 10,
      movieId: 2,
      startingAt: new Date('2025-01-25T18:30:00'),
      price: 590
    }
  ];

  ngOnInit() {
    this.movies = this.movieService.getMovies();
    this.filterProjections(this.selectedDate);
  }

  onDateSelected(event: any) {
    this.filterProjections(event.value);
  }

  private filterProjections(date: Date) {
    this.filteredProjections = this.projections
      .filter(proj => {
        const projDate = new Date(proj.startingAt);
        return projDate.toDateString() === date.toDateString();
      })
      .map(projection => {
        const movie = this.movies.find(m => m.id === projection.movieId)!;
        return {
          id: projection.id,
          price: projection.price,
          startingAt: projection.startingAt,
          Movie: movie
        };
      });
  }
  
  addToCart(projection: Projection) {
    this.cartService.addToCart(projection);
  }
}
