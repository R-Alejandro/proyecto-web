//you can add new features for 404 page
const page404 = (req, res) => {
    res.status(404).json({"message": "404 page not found, try again or contact a monkey"});
};

export default page404;