

// // 1. Your API key from TMDB
// const API_KEY = "f0ae7fcf0cab94716df182ec9c503b31"; // your TMDb API key// replace with your actual key
// // Your API key from TMDB


// const movieId = 497582; // Enola Holmes

// async function setBackground() {
//     try {
//         const res = await fetch(
//           `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
//         );

//         const data = await res.json();

//         const backdrop = data.backdrop_path;

//         document.body.style.backgroundImage =
//           `url('https://image.tmdb.org/t/p/original${backdrop}')`;
//         document.body.style.backgroundSize = 'cover';
//         document.body.style.backgroundPosition = 'center';
//         document.body.style.backgroundRepeat = 'no-repeat';

//         const infoDiv = document.createElement('div');
//         infoDiv.innerHTML = `
//           <h1 style="color:white;font-size:3rem;">${data.title}</h1>
//           <p style="color:white;max-width:600px;">${data.overview}</p>
//         `;
//         infoDiv.style.position = 'absolute';
//         infoDiv.style.top = '20%';
//         infoDiv.style.left = '5%';

//         document.body.appendChild(infoDiv);

//     } catch (err) {
//         console.error(err);
//     }
// }

// setBackground();








































