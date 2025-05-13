
        // 1. Event Handling
        const actionBtn = document.getElementById('actionBtn');
        const eventFeedback = document.getElementById('eventFeedback');
        const keypressInput = document.getElementById('keypressInput');
        const keypressFeedback = document.getElementById('keypressFeedback');
        
        // Button click
        actionBtn.addEventListener('click', () => {
            eventFeedback.textContent = "Button clicked!";
            actionBtn.textContent = "Clicked!";
            setTimeout(() => {
                actionBtn.textContent = "Click Me!";
            }, 1000);
        });
        
        // Double-click secret action
        actionBtn.addEventListener('dblclick', () => {
            actionBtn.classList.toggle('secret');
            eventFeedback.textContent = "Secret mode activated!";
        });
        
        // Long press detection
        let pressTimer;
        actionBtn.addEventListener('mousedown', () => {
            pressTimer = setTimeout(() => {
                eventFeedback.textContent = "Long press detected!";
                actionBtn.style.transform = "scale(1.1)";
            }, 1000);
        });
        
        actionBtn.addEventListener('mouseup', () => {
            clearTimeout(pressTimer);
        });
        
        actionBtn.addEventListener('mouseleave', () => {
            clearTimeout(pressTimer);
        });
        
        // Keypress detection
        keypressInput.addEventListener('keyup', (e) => {
            keypressFeedback.textContent = `You pressed: ${e.key}`;
            setTimeout(() => {
                keypressFeedback.textContent = '';
            }, 2000);
        });
        
       
        
        // 2. Interactive Elements - Accordion
        document.querySelectorAll('.accordion-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                const content = btn.nextElementSibling;
                content.classList.toggle('active');
            });
        });
        
        // 2. Interactive Elements - Image Gallery
        document.querySelectorAll('.gallery img').forEach(img => {
            img.addEventListener('click', () => {
                img.classList.toggle('shake');
                setTimeout(() => {
                    img.classList.remove('shake');
                }, 500);
            });
        });
        
        // 3. Form Validation
        const form = document.getElementById('validationForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        const formSuccess = document.getElementById('formSuccess');
        
        // Real-time validation
        nameInput.addEventListener('input', validateName);
        emailInput.addEventListener('input', validateEmail);
        passwordInput.addEventListener('input', validatePassword);
        
        function validateName() {
            if (nameInput.value.trim() === '') {
                nameError.style.display = 'block';
                nameInput.classList.add('shake');
                setTimeout(() => nameInput.classList.remove('shake'), 500);
                return false;
            } else {
                nameError.style.display = 'none';
                return true;
            }
        }
        
        function validateEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailError.style.display = 'block';
                emailInput.classList.add('shake');
                setTimeout(() => emailInput.classList.remove('shake'), 500);
                return false;
            } else {
                emailError.style.display = 'none';
                return true;
            }
        }
        
        function validatePassword() {
            if (passwordInput.value.length < 8) {
                passwordError.style.display = 'block';
                passwordInput.classList.add('shake');
                setTimeout(() => passwordInput.classList.remove('shake'), 500);
                return false;
            } else {
                passwordError.style.display = 'none';
                return true;
            }
        }
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isPasswordValid = validatePassword();
            
            if (isNameValid && isEmailValid && isPasswordValid) {
                formSuccess.style.display = 'block';
                setTimeout(() => {
                    formSuccess.style.display = 'none';
                    form.reset();
                }, 3000);
            }
        });