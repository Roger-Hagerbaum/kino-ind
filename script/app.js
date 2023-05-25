import express from "express";
import { engine } from "express-handlebars";
import { marked } from "marked"; 
import { loadMovie ,loadMovies } from "./movies.js";

const app = express();

app.get("/", async(req,res) => {
    const movies = await loadMovies();
    res.render("./partials/index", { movies });
});
app.get("/movies/:movieId", async(req, res) => {
 const movie = await loadMovie(req.params.movieId);
 if(movie) {
        res.render("./partials/movie",{ movie });
    }
});
app.engine("handlebars", engine({
    helpers: {
        markdown: md => marked(md),
    },
}));

app.set("view engine", "handlebars");
app.set("views","./view");

app.use("/static", express.static("./static"));

export default app;