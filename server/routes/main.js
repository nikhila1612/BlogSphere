const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const Contact = require('../models/Contact'); 

/**
 * GET /
 * HOME
*/
router.get('', async (req, res) => {
  try {
    const locals = {
      title: "BlogSphere",
      description: "Simple Blog created with NodeJs, Express & MongoDb."
    }

    let perPage = 5;
    let page = req.query.page || 1;

    const data = await Post.aggregate([ { $sort: { createdAt: -1 } } ])
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exec();

    // Count is deprecated - please use countDocuments
    // const count = await Post.count();
    const count = await Post.countDocuments({});
    const nextPage = parseInt(page) + 1;
    const hasNextPage = nextPage <= Math.ceil(count / perPage);

    res.render('index', { 
      locals,
      data,
      current: page,
      nextPage: hasNextPage ? nextPage : null
    });

  } catch (error) {
    console.log(error);
  }

});

// router.get('', async (req, res) => {
//   const locals = {
//     title: "NodeJs Blog",
//     description: "Simple Blog created with NodeJs, Express & MongoDb."
//   }

//   try {
//     const data = await Post.find();
//     res.render('index', { locals, data });
//   } catch (error) {
//     console.log(error);
//   }

// });


/**
 * GET /
 * Post :id
*/
router.get('/post/:id', async (req, res) => {
  try {
    let slug = req.params.id;

    const data = await Post.findById({ _id: slug });

    const locals = {
      title: data.title,
      description: "Simple Blog created with NodeJs, Express & MongoDb.",
    }

    res.render('post', { 
      locals,
      data
    });
  } catch (error) {
    console.log(error);
  }

});


/**
 * POST /
 * Post - searchTerm
*/
router.post('/search', async (req, res) => {
  try {
    const locals = {
      title: "Seach",
      description: "Simple Blog created with NodeJs, Express & MongoDb."
    }

    let searchTerm = req.body.searchTerm;
    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "")

    const data = await Post.find({
      $or: [
        { title: { $regex: new RegExp(searchNoSpecialChar, 'i') }},
        { body: { $regex: new RegExp(searchNoSpecialChar, 'i') }}
      ]
    });

    res.render("search", {
      data,
      locals
    });

  } catch (error) {
    console.log(error);
  }

});


/**
 * GET /
 * About
*/
router.get('/about', (req, res) => {
  const locals={
    title: "About",
    description: "Simple Blog created with Nodejs, Express & MOngoDb."
}
  res.render('about');
});

router.get('/contact',(req,res)=>{
  const locals={
    title: "Contact",
    description: "Simple Blog created with Nodejs, Express & MOngoDb."
}
  res.render("contact",{
      currentRoute:`/contact`
  });
})

router.post('/submit-contact',async (req, res) => {
  try{
      const { name, email, message } = req.body;
      // Create a new contact instance
      await Contact.create({ name, email, message });
  
      res.render("contact");
  }catch(error){
      console.error('Error sending message:', error);
      res.status(500).send("Error sending message. Avoid using the same mail id or Use another mail id to send message");
      console.log(error);
  }   
 
});



module.exports = router;
