// your code here
document.getElementById('button').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;

    // Construct the new URL with query parameters
    let newUrl = 'https://localhost:8080/';
    if (name || year) {
        newUrl += '?';
        if (name) {
            newUrl += `name=${encodeURIComponent(name)}`;
        }
        if (year) {
            if (name) newUrl += '&'; // Add '&' if name is also present
            newUrl += `year=${encodeURIComponent(year)}`;
        }
    }

    // Update the h3 element with the new URL
    document.getElementById('url').innerText = newUrl;
});