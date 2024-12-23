const validApiKey = 'SOLAR_8f4a15df61e4b882c6f479fa6223e29ayq72123o30aArh';

// Middleware to check API key
const verifyApiKey = (req, res, next) => {
    const apiKey = req.headers['api-key'];
    
    if (!apiKey || apiKey !== validApiKey) {
        return res.status(401).json({
            success: false,
            message: 'Invalid API key'
        });
    }
    
    next();
};
