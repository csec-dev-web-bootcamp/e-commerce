export function httpExceptionHandler(err, req, res, next) {
    let message;
    let details;
    try {
      details = JSON.parse(err.message);
      message = details?.message;
      
    } catch (error) {
      message = err.message;
    }
    console.error({message});
    res.status(err.statusCode).json({
      error: true,
      statusCode: err.statusCode,
      message: message,
      details: details,
      timestamp: new Date().toISOString(),
      path: req.url,
    });
  }
  