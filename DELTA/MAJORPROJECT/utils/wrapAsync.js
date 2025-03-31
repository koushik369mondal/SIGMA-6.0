module.exports = (fn) => {
    return (req, res, nest) => {
        fn(req, res, next).catch(next);
    }
}