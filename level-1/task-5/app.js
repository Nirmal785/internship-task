const greetButton = document.getElementById('greetButton');

    greetButton.addEventListener('click', function() {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();
        let greetingMessage;

        if (currentHour < 12) {
            greetingMessage = "Good Morning! 🌞";
        } else if (currentHour < 18) {
            greetingMessage = "Good Afternoon! 🌤";
        } else {
            greetingMessage = "Good Evening! 🌙";
        }

        alert(greetingMessage);
    });
