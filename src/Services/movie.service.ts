import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  private movies = [
    {
      id: 1,
      name: "Star Wars: Episode IV",
      description: "Epska naučno-fantastična saga",
      duration: 121,
      genre: ["Sci-Fi", "Avantura"], 
      actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
      createdAt: "1977-05-25",
      producer: "George Lucas",
      imageUrl: "https://m.media-amazon.com/images/I/81P3lDJbjCL.jpg" // URL za sliku filma
    },
    {
      id: 2,
      name: "Sonic 3",
      description: "Nova avantura najpoznatijeg plavog ježa",
      duration: 110,
      genre: ["Animation", "Adventure"], 
      actors: ["Jim Carrey", "Ben Schwartz"],
      createdAt: "2024-12-20",
      producer: "Jeff Fowler",
      imageUrl: "https://amc-theatres-res.cloudinary.com/image/upload/c_limit,w_272/f_auto/q_auto/v1731947327/amc-cdn/production/2/movies/70700/70707/PosterDynamic/168174.jpg" // URL za sliku filma
    },
    {
      id: 3,
      name: "Gladiator 2",
      description: "Najveći romanik u dve epizode",
      duration: 121,
      genre: ["Action", "Adventure"],
      actors: ["Russell Crowe", "Joaquin Phoenix"],
      createdAt: "2024-12-20",
      producer: "Ridley Scott",
      imageUrl: "https://s3proxygw.cineplexx.at/cms-live/asset/SRB/movies/Gladiator%202/posterImage.jpg" // URL za sliku filma
    },
    {
      id: 4,
      name: "Mufasa",
      description: "Priča o mladom lavu koji postaje kralj",
      duration: 130,
      genre: ["Animation", "Drama"],
      actors: ["Aaron Pierre", "Kelvin Harrison Jr."],
      createdAt: "2024-12-20",
      producer: "Barry Jenkins",
      imageUrl: "https://amc-theatres-res.cloudinary.com/image/upload/c_limit,w_272/f_auto/q_auto/v1731340893/amc-cdn/production/2/movies/67500/67470/PosterDynamic/168048.jpg" // URL za sliku filma
    },
    {
      id: 5,
      name: "Moana 2",
      description: "Novo putovanje hrabre Moane",
      duration: 115,
      genre: ["Animation", "Adventure"],
      actors: ["Auli'i Cravalho", "Dwayne Johnson"],
      createdAt: "2024-11-27",
      producer: "Disney Animation",
      imageUrl: "https://amc-theatres-res.cloudinary.com/image/upload/c_limit,w_272/f_auto/q_auto/v1730126297/amc-cdn/production/2/movies/72500/72475/PosterDynamic/167791.jpg" // URL za sliku filma
    },
    {
      id: 6,
      name: "Better Man",
      description: "Biografski film o Robbiju Williamsu",
      duration: 125,
      genre: ["Biography", "Drama"],
      actors: ["Jonno Davies"],
      createdAt: "2024-09-15",
      producer: "Michael Gracey",
      imageUrl: "https://amc-theatres-res.cloudinary.com/image/upload/c_limit,w_272/f_auto/q_auto/v1733978962/amc-cdn/production/2/movies/76300/76327/PosterDynamic/168437.jpg" // URL za sliku filma
    },
    {
      id: 7,
      name: "Flight Risk",
      description: "Napeti triler u avionu",
      duration: 105,
      genre: ["Thriller"],
      actors: ["Mark Wahlberg", "Connie Britton"],
      createdAt: "2024-08-10",
      producer: "Jaume Collet-Serra",
      imageUrl: "https://amc-theatres-res.cloudinary.com/image/upload/c_limit,w_272/f_auto/q_auto/v1734126292/amc-cdn/production/2/movies/77100/77126/PosterDynamic/168473.jpg" // URL za sliku filma
    },
    {
      id: 8,
      name: "Captain America: Brave New World",
      description: "Nova avantura Kapetana Amerike",
      duration: 135,
      genre: ["Action", "Adventure"],
      actors: ["Anthony Mackie", "Harrison Ford"],
      createdAt: "2024-07-26",
      producer: "Julius Onah",
      imageUrl: "http://rakovica.cinegrand-mcf.rs/Media/Default/_Profiles/278ed83d/f60058a2/Kapetan%20Amerika%20poster%20(360X528).jpg?v=638677069090299945" // URL za sliku filma
    },
    {
      id: 9,
      name: "A Complete Unknown",
      description: "Film o Bobu Dylanu koji istražuje njegovu kompleksnu ličnost kroz različite interpretacije.",
      duration: 135,
      genre: ["Biography", "Drama", "Music"],
      actors: ["Timothée Chalamet"],
      createdAt: "2024-11-21",
      producer: "Todd Haynes",
      imageUrl: "https://amc-theatres-res.cloudinary.com/image/upload/c_limit,w_272/f_auto/q_auto/v1733764107/amc-cdn/production/2/movies/77800/77798/PosterDynamic/168377.jpg" // URL za sliku filma
    }
  ];

  getMovies(): any[] {
    return this.movies;
  }
}
