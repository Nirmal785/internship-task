const button = document.getElementById('colorButton');
        const colors = ['#4CAF50', '#FF5733', '#33A8FF', '#FFC300', '#9B59B6']; 
        let currentIndex = 0;

        button.addEventListener('click', function() {
            
            button.style.backgroundColor = colors[currentIndex];
            
            currentIndex = (currentIndex + 1) % colors.length; 
        });