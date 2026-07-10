import express from "express";

//create a router
const router = express.Router()


//HTTP methods GET, POST, PUT, DELETE

//create the endpoint route
router.get("/", (req,res) => {
    res.json({message: "get method"})
});

router.post("/", (req,res) => {
    res.json({message: "post method"})
});

export default router;