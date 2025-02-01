import express from "express"
import bodyParser from "body-parser";

const app = express()
const port = 3000;

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }));

let blog = {
    heading: "Jnana marg:",
    description: `The jñāna yoga is a spiritual practice that pursues knowledge with questions such as "who am I, what am I" among others. The practitioner studies usually with the aid of a guru, meditates, reflects, and reaches liberating insights on the nature of one's own Self (Atman, soul) and its relationship to the metaphysical concept called Brahman in Hinduism.`
};


// app.post('/submit', (req, res) => {

//     if (req.body["submit-edit"]) {

//         const head = req.body["head"]
//         const descrip = req.body["textarea-name"]

//         res.render("index.ejs", {
//             head: rephead,
//             descrip: repdes,
//         })
//     }
// })

// app.post('/submit-edit', (req, res) => {
//     if (req.body["submit-edit"]) {
//         const head = req.body["head"];
//         const descrip = req.body["textarea-name"];

        

//         // Pass the variables as rephead and repdes to the EJS template
//         res.render("index.ejs", {
//             rephead: head,
//             repdes: descrip,
//         });
//     }
// });


// app.get('/', (req, res) => {
//     res.render("index.ejs");
// });

app.get('/', (req, res) => {
    res.render('index.ejs', { blog });
});




app.get('/Blogs', (req, res) => {
    res.render("Blogs.ejs");
});



app.get('/home', (req, res) => {

    res.render("index.ejs")
})

app.get('/contact', (req, res) => {

    res.render("contact.ejs")
})

app.get('/about', (req, res) => {

    res.render("About.ejs")
})

// app.get('/edit', (req, res) => {

//     res.render("edit.ejs")
// })

app.get('/edit', (req, res) => {
    res.render('edit.ejs', { blog });
});

app.post('/submit', (req, res) => {

    const fullname = req.body["fullname"]
    const mobile = req.body["mobile"]
    const email = req.body["email"]
    const password = req.body["passwrod"]
    console.log(fullname)
    console.log(mobile)
    console.log(email)
    console.log(password)
})

app.post('/submit-edit', (req, res) => {
    // Update the blog object with the new data
    blog.heading = req.body.rephead;
    blog.description = req.body['textarea-name'];
    res.redirect('/'); // Redirect back to the homepage
});

app.listen(port, () => {

    console.log(`Listening on port ${port}`)
})