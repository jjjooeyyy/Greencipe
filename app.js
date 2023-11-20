const express = require('express');
const path = require('path'); // Added 'path' module

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Static Files
app.use(express.static('public'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Templating Engine
app.set('layout', 'layouts/main'); // Adjusted path to the layout file
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/',(req,res)=> {
    const locals = {
        title: "Greencipe",
        description: "Recipe Page",
        file: "index"
    }
  res.render('../views/index.ejs',locals);
})

app.get('/about',(req,res)=> {
    const locals = {
        title: "About Us",
        description: "Recipe Page",
        file: "about"
    }
  res.render('../views/about.ejs',locals);
})

app.get('/recipe',(req,res)=> {
    const locals = {
        title: "Recipes",
        description: "Recipe Page",
        file: "recipe_page"
    }
  res.render('../views/recipe.ejs',locals);
})

app.get('/savoury',(req,res)=> {
    const locals = {
        title: "Main Courses",
        description: "Recipe Page",
        file: "savoury_catagory"
    }
  res.render('../views/savoury.ejs',locals);
})

app.get('/sweet',(req,res)=> {
    const locals = {
        title: "Sweet Recipes",
        description: "Recipe Page",
        file: "sweet_catagory"
    }
  res.render('../views/sweet.ejs',locals);
})

app.get('/side',(req,res)=> {
    const locals = {
        title: "Side dishes",
        description: "Recipe Page",
        file: "side_category"
    }
  res.render('../views/side.ejs',locals);
})

app.get('/share',(req,res)=> {
    const locals = {
        title: "Share With Us",
        description: "Recipe Page",
        file: "share_with_us"
    }
  res.render('../views/share.ejs',locals);
})

app.get('/subscribe',(req,res)=> {
    const locals = {
        title: "Subscribe Us",
        description: "Recipe Page",
        file: "Subscribe"
    }
  res.render('../views/subscribe.ejs',locals);
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });