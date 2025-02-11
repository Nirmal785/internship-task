const calculateButton = document.getElementById('calculateButton');
        const resultDiv = document.getElementById('result');

        calculateButton.addEventListener('click', function() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);

            if (isNaN(num1) || isNaN(num2)) {
                resultDiv.textContent = "Please enter valid numbers!";
                resultDiv.style.color = "red";
            } else {
                const sum = num1 + num2;
                resultDiv.textContent = `Result: ${sum}`;
                resultDiv.style.color = "green";
            }
        });
