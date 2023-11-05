if ('beforeinstallprompt' in window) {
    // The "beforeinstallprompt" event is available in Chrome when the app can be installed.
    
    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();  // Prevent the default browser install prompt.
        deferredPrompt = e;

        // Show the "Install App" button to the user.
        document.getElementById('installButton').style.display = 'block';

        // Handle the "Install App" button click.
        document.getElementById('installButton').addEventListener('click', () => {
            // Show the browser's install prompt.
            deferredPrompt.prompt();

            // Wait for the user's choice and handle it.
            deferredPrompt.userChoice
                .then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the install prompt.');
                    } else {
                        console.log('User dismissed the install prompt.');
                    }
                    // Reset the deferredPrompt to null, as it can only be used once.
                    deferredPrompt = null;
                });

            // Hide the "Install App" button.
            document.getElementById('installButton').style.display = 'none';
        });
    });
}
