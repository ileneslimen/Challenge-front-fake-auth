import { WATCHED } from "../types/MoviesTypes";

const initialstate = {
  movies: [
    {
      id: 0,
      title: "peaky blinders",
      posterUrl: "//pbs.twimg.com/media/ETAoYTMXgAA01qD.jpg",
      rate: 4,
      description:
        "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
      trailer: "https://www.youtube.com/embed/oVzVdvGIC7U",
      watched: false,
    },
    {
      id: 1,
      title: "Game of thrones",
      posterUrl:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2015%2F11%2Fjs20-20tease.jpeg",
      rate: 4.7,
      description:
        "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
      trailer: "https://www.youtube.com/embed/gcTkNV5Vg1E",
      watched: false,
    },
    {
      id: 2,
      title: "The good doctor",
      posterUrl: "https://pbs.twimg.com/media/EbNkkiTXsAc2o3Y.jpg",
      rate: 4.2,
      description:
        "Shaun Murphy, a young surgeon with autism and Savant syndrome, is recruited into the surgical unit of a prestigious hospital.",
      trailer: "https://www.youtube.com/embed/msJggy8xtmI",
      watched: false,
    },
    {
      id: 3,
      title: "Breaking bad",
      posterUrl:
        "https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      rate: 4.5,
      description:
        "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
      trailer: "https://www.youtube.com/embed/lrcqbavlbyQ",
      watched: false,
    },
    {
      id: 4,
      title: "Prison Break",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/5/54/Prison-break-season-4-dvd.jpg",
      rate: 4.2,
      description:
        "Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside.",
      trailer: "https://www.youtube.com/embed/AL9zLctDJaU",
      watched: false,
    },
    {
      id: 5,
      title: "Gangs of London",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BOGJlZTE0MTQtZDdmMS00YWViLThlMDktYzk1N2RhMjY0NGEyXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
      rate: 4.1,
      description:
        "Tells the story of London being torn apart by the turbulent power struggles of its international gangs and the sudden power vacuum that's created when the head of London's most powerful crime family is assassinated.",
      trailer: "https://www.youtube.com/embed/4CJ5p4XisHs",
      watched: false,
    },
  ],
};

const MovieReducer = (state = initialstate, action) => {
  switch (action.type) {
    case WATCHED:
      return {
        ...state,
        movies: state.movies.map((el) =>
          el.id == action.payload ? { ...el, watched: true } : el
        ),
      };
    default:
      return state;
  }
};

export default MovieReducer;
