const allowedOrigins = [
    "http://localhost:5173",
    "https://invest-iq-backend.vercel.app",
    "https://invest-iqs.vercel.app/"
];

const corsOptions = {
    origin: function (origin, callback) {
        console.log("Incoming request origin:", origin); // Log origin

        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.error("Blocked by CORS:", origin); // Log blocked origins
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    optionsSuccessStatus: 200
};

module.exports = { corsOptions };
