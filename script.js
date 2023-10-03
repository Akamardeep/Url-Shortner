// Function to shorten a long URL
function shortenURL() {
    const longURL = document.getElementById("urlInput").value;
    const shortURL = generateRandomString(6); // Generate a short random string (you can use any method here)

    // Store the mapping in local storage
    localStorage.setItem(shortURL, longURL);

    document.getElementById("shortURL").textContent = "Short URL: " + shortURL;
}

// Function to expand a short URL
function expandURL() {
    const shortURL = document.getElementById("shortURLInput").value;

    // Retrieve the original long URL from local storage
    const longURL = localStorage.getItem(shortURL);

    if (longURL) {
        document.getElementById("expandedURL").textContent = "Expanded URL: " + longURL;
    } else {
        document.getElementById("expandedURL").textContent = "Short URL not found";
    }
}

// Function to generate a random string (for short URLs)
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
