document.addEventListener('DOMContentLoaded', function() {
    function startAcceleratedTimer(totalSimulatedMinutes, totalRealMinutes) {
        const totalSimulatedSeconds = totalSimulatedMinutes * 60;
        const totalRealSeconds = totalRealMinutes * 60;
        const accelerationFactor = totalSimulatedSeconds / totalRealSeconds; // This will be 15 for 3 minutes
        let simulatedSeconds = 0;
        const timerElement = document.getElementById('timer');

        function updateTimer() {
            if (simulatedSeconds > totalSimulatedSeconds) {
                clearInterval(timerInterval);
                return;
            }

            const minutes = Math.floor(simulatedSeconds / 60);
            const seconds = Math.floor(simulatedSeconds % 60);
            timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            simulatedSeconds += accelerationFactor;
        }

        const timerInterval = setInterval(updateTimer, 1000);
    }

    // Add event listener to the button
    const startButton = document.getElementById('start');
    startButton.addEventListener('click', function() {
        startAcceleratedTimer(90, 1);
    });
});
