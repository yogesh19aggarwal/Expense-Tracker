function notfoundHandler(req, res) {
    const data = {
        status: false,
        url: req.originalUrl,
        message: "resource not found"
    }
    return res.status(404).json(data);
}

module.exports = notfoundHandler;