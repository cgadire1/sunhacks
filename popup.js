document.getElementById('spotify-import').addEventListener('click', function () {
    importMusic('Spotify');
});

document.getElementById('ytmusic-import').addEventListener('click', function () {
    importMusic('YouTube Music');
});

function importMusic(service) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentTab = tabs[0];

        // Check if user is on Spotify or YouTube Music
        if ((service === 'Spotify' && currentTab.url.includes('spotify.com')) ||
            (service === 'YouTube Music' && currentTab.url.includes('music.youtube.com'))) {
            
            // Extract the media URL
            let mediaUrl = currentTab.url;
            
            // Now we would send this media link to Adobe Express (for now, we'll just display it)
            document.getElementById('status').innerText = `${service} link imported: ${mediaUrl}`;

            // Logic to send media to Adobe Express can go here
            // (You'll need Adobe Express API or a workaround)

        } else {
            document.getElementById('status').innerText = `Please open a ${service} tab.`;
        }
    });
}
