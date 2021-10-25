
const checkSession = (req, res, next) => {
    if(!req.body.email){
        console.log('No session');
        res.status(302).redirect('http://localhost:3000/signIn');
    } else {
        next();
    }
};

export default checkSession;