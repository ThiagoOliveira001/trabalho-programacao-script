function home(req, res) {
    console.log('dwd')
    res.render('pages/index');
}

module.exports = {
    home,
};