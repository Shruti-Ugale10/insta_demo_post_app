const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
//for uploading user image
const multer = require("multer");
//for creating random id we use uuid(universal unique identifier) pakage
const{ v4: uuidv4 } = require("uuid");
//for accessing PATCH & DELETE REQUEST
const methodOverride = require("method-override");


   
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname, "public")));

// Multer configuration
// -------------------------

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, "public/uploads");
    },

    filename: function (req, file, cb) {
        const uniqueName = Date.now() + "-" + file.originalname;
        cb(null, uniqueName);
    }

});

const upload = multer({ storage: storage });



let posts =[
 {
        id: uuidv4(),
        username: "shruti",
        image: "/images/ganpatibappa.jpeg",
        caption: "Beautifusl day ❤️",
        likes: 10
    },
    {
        id: uuidv4(),
        username: "rahul",
        image: "/images/nature.jpg",
        caption: "Enjoying nature 🌸",
        likes: 20
    }
];

//1st route main page , shows all posts
app.get("/posts", (req, res)=>{
     res.render("index.ejs",{posts});
});

//2nd route create new post which contain 2 routes 
//1. to serve the form [Get (/posts/new)]

app.get("/posts/new", (req,res)=>{
     res.render("newpost.ejs")
})

//2.to add new post ( Post [/posts])

app.post("/posts", upload.single("image"),(req,res)=>{

        console.log(req.body);
        console.log(req.file);

        let { username, caption } = req.body;

        let newPost = {
            id: uuidv4(),
            username: username,
            image: "/uploads/" + req.file.filename,
            caption: caption,
            likes: 0
        };

        posts.push(newPost);

        res.redirect("/posts");
        res.send("Post request working");
});

//3.route (View Post) 

app.get("/posts/:id", (req,res)=>{
        let{id} = req.params;
        let post = posts.find((p) => p.id === id);
        res.render("viewpost.ejs",{post});
        
});


//4. update route (PATCH) TO UPDATE SPECIFIC POST

app.patch("/posts/:id",(req, res)=>{
    let{id} = req.params;
    let newCaption = req.body.caption;
    let post = posts.find((p) => p.id === id);
    post.caption = newCaption;
    console.log(post);
    res .redirect("/posts");
});


//5.route [Edit route] get[/posts/:id/edit]

app.get("/posts/:id/edit", (req, res)=>{
    let{id} = req.params;
    post = posts.find((p) => p.id === id);
    res.render("edit.ejs",{post});
});

//6. Destroy Route, to delete specific post

app.delete("/posts/:id",(req,res)=>{
    let{id} = req.params;
    posts = posts.filter((p) => p.id !== id);
    res.redirect("/posts");
});

//listening to port 8080
app.listen(port , ()=>{
   console.log("server listening to the port ",port);
});



