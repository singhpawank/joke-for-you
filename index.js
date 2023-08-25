import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;
const API_URL = "https://v2.jokeapi.dev/joke/";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {

    res.render("index.ejs", { content: "" });
});

app.get("/submit", (req, res)=>{
    res.render("index.ejs", {content: ""});
});


app.post('/submit', async (req, res) => {
    console.log(req.body);
    const categories = ["Programming", "Dark", "Pun", "Spooky", "Christmas", "Miscellaneous"];
    let categoriesReq = "Any";
    if (req.body.category.length < 6) {
        categoriesReq = categories[req.body.category[0]];
        for (let i = 1; i < req.body.category.length; i++) {
            categoriesReq = categoriesReq + "," + categories[req.body.category[i]];
        }
    }

    const blacklistFlags = ["nsfw", "religious", "political", "racist", "sexist", "explicit"];
    let blacklists = "";
    if (req.body.blacklist) {
        blacklists = "?blacklistFlags=" + blacklistFlags[req.body.blacklist[0]];
        for (let i = 1; i < req.body.blacklist.length; i++) {
            blacklists = blacklists + "," + blacklistFlags[req.body.blacklist[i]];
        }
    }


    const url = API_URL + categoriesReq + blacklists;
    console.log(url);


    try {
        const response = await axios.get(url);
        console.log(response.data);
        res.render("index.ejs", { content: response.data });
    } catch (error) {
        if (error.response) {
            res.render("index.ejs", { error: error.response.data });
            console.log(error.response.status);
            console.log(error.response.data);
        } else if (error.request) {
            res.render("index.ejs", { error: "Apologies, Something went wrong!" });
            console.log(error.toJSON());
        } else {
            res.render("index.ejs", { error: error.message });
            console.log(error.message);
        }
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}...`);
});