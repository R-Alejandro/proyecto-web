
const checkSession = (req, res, next) => {
    if(!req.user){
        console.log('No session');
        res.status(302).redirect('http://localhost:3000/signIn');
    } else {
        next();
    }
};

export default checkSession;