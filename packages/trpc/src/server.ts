// Imports
// ========================================================
import app from "./app";

// Constants
// ========================================================
const PORT = process.env.PORT || 5001;

// Server
// ========================================================
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));