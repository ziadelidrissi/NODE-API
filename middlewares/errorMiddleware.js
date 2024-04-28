const errorMiddleware = (err, req, res, next) => {
    // if NODE_ENV === 'development' stack: err.stack else stack: null 
    const status = res.status ? res.status : 500;
    res.json({message: err.message, stack: process.env.NODE_ENV === 'development' ? err.stack: null}).status(status)
}

export { errorMiddleware };