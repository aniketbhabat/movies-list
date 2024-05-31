import React from "react";
import MovieList from "./components/MovieList";
import "./index.css";

const movies = [
  {
    title: "Inception",
    subtitle: "Your mind is the scene of the crime.",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology...",
    image:
      "https://irs.www.warnerbros.com/hero-banner-v2-tablet-jpeg/movies/media/browser/inception_banner.jpg",
    rating: 8.8,
  },
  {
    title: "Interstellar",
    subtitle: "Mankind was born on Earth. It was never meant to die here.",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival...",
    image:
      "https://img.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2024/4/16/interstellar.jpg.transform/845x440/image.jpg",
    rating: 8.6,
  },
  {
    title: "Fight Club",
    subtitle: "Mischief. Mayhem. Soap.",
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more...",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4324/1654324-h-6af8db1539c6",
    rating: 8.8,
  },
  {
    title: "The Dark Knight",
    subtitle: "Why So Serious?",
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham...",
    image:
      "https://wallpaper.forfun.com/fetch/f5/f5237542bc702988a9d5aa4d85e18ee4.jpeg",
    rating: 9.0,
  },
  {
    title: "Forrest Gump",
    subtitle:
      "Life is like a box of chocolates...you never know what you're gonna get.",
    description:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75...",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/28ad5a615d61071e9d1aebbf684c89fcc3a8c5b3528d8ba778bb13198764d840.jpg",
    rating: 8.8,
  },
  // Add more movie objects as needed
];

const App = () => {
  return (
    <div className="App">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl text-center">Movie Cards</h1>
      </header>
      <main className="p-4">
        <MovieList movies={movies} />
      </main>
    </div>
  );
};

export default App;