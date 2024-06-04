const legoCreatorSeries = {
    seriesName: "Lego Creator",
    totalSets: 5,
    sets: [
      {
        setNumber: 31021,
        name: "Furry Creatures",
        pieces: 285,
        releaseYear: 2014,
        themes: ["Model", "Creature"],
        price: 24.99,
        ratings: {
          average: 4.5,
          reviews: 250
        }
      },
      {
        setNumber: 31022,
        name: "Turbo Quad",
        pieces: 186,
        releaseYear: 2014,
        themes: ["Model", "Riding Cycle"],
        price: 19.99,
        ratings: {
          average: 4.2,
          reviews: 180
        }
      },
      {
        setNumber: 31023,
        name: "Yellow Racers",
        pieces: 328,
        releaseYear: 2014,
        themes: ["Model", "Airport"],
        price: 29.99,
        ratings: {
          average: 4.7,
          reviews: 220
        }
      },
      {
        setNumber: 31024,
        name: "Roaring Power",
        pieces: 374,
        releaseYear: 2014,
        themes: ["Model", "Traffic"],
        price: 34.99,
        ratings: {
          average: 4.6,
          reviews: 210
        }
      },
      {
        setNumber: 31025,
        name: "Mountain Hut",
        pieces: 546,
        releaseYear: 2014,
        themes: ["Model", "Building"],
        price: 49.99,
        ratings: {
          average: 4.8,
          reviews: 300
        }
      }
    ],    
    totalPieces() {
        let total = 0;
        for (let i = 0; i < this.sets.length; i++) {
          total += this.sets[i].pieces;
        }
        return total;
      }    
  };  
  
  console.log("Total Pieces: " + legoCreatorSeries.totalPieces());   