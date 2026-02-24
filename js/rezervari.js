document.addEventListener('DOMContentLoaded', () => {
    
    const state = {
        experience: null,
        guests: 2,
        date: null,
        time: null,
        vibe: 'Intimate & Quiet',
        extras: []
    };

    const sumExp = document.getElementById('sum-exp');
    const sumGuests = document.getElementById('sum-guests');
    const sumDate = document.getElementById('sum-date');
    const sumTime = document.getElementById('sum-time');
    const sumVibe = document.getElementById('sum-vibe');
    const sumExtras = document.getElementById('sum-extras');
    const dynImg = document.getElementById('vb-dynamic-img');
    
    const reqName = document.getElementById('req-name');
    const reqEmail = document.getElementById('req-email');
    const reqPhone = document.getElementById('req-phone');
    const submitBtn = document.getElementById('final-submit');

    function validateForm() {
        const isNameValid = reqName.value.trim().length > 2;
        const isEmailValid = reqEmail.value.trim().includes('@');
        const isPhoneValid = reqPhone.value.trim().length >= 6; 

        if (state.experience && state.date && state.time && isNameValid && isEmailValid && isPhoneValid) {
            submitBtn.classList.remove('disabled');
        } else {
            submitBtn.classList.add('disabled');
        }
    }

    reqName.addEventListener('input', validateForm);
    reqEmail.addEventListener('input', validateForm);
    reqPhone.addEventListener('input', validateForm);

    const steps = document.querySelectorAll('.vb-step');
    
    function openStep(index) {
        steps.forEach((step, i) => {
            const content = step.querySelector('.vb-step-content');
            if (i === index) {
                step.classList.add('active');
                gsap.to(content, { height: 'auto', opacity: 1, duration: 0.6, ease: "power3.inOut" });
            } else {
                step.classList.remove('active');
                gsap.to(content, { height: 0, opacity: 0, duration: 0.4, ease: "power3.inOut" });
            }
        });
        
        if(index > 0) {
            let offsetVal = window.innerWidth > 992 ? 100 : 120;
            gsap.to(window, {scrollTo: { y: steps[index], offsetY: offsetVal }, duration: 1, ease: "power3.inOut"});
        }
    }

    gsap.set('.vb-step.active .vb-step-content', {height: 'auto', opacity: 1});

    document.querySelectorAll('.vb-step-header').forEach((header, index) => {
        header.addEventListener('click', () => {
            openStep(index);
        });
    });

    document.querySelectorAll('.vb-next-btn').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            openStep(index + 1);
        });
    });

    const expCards = document.querySelectorAll('.vb-exp-card');
    expCards.forEach(card => {
        card.addEventListener('click', () => {
            expCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            
            state.experience = card.querySelector('h4').innerText;
            sumExp.innerText = state.experience;
            validateForm();
            
            if(window.innerWidth > 992) {
                const newImg = card.dataset.img;
                gsap.to(dynImg, { opacity: 0, duration: 0.3, onComplete: () => {
                    dynImg.src = newImg;
                    gsap.to(dynImg, { opacity: 1, duration: 0.5 });
                }});
            } else {
                dynImg.src = card.dataset.img;
            }
        });
    });
    
    const guestCards = document.querySelectorAll('.vb-guest-card');
    guestCards.forEach(card => {
        card.addEventListener('click', () => {
            guestCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            
            state.guests = parseInt(card.dataset.guests);
            sumGuests.innerText = state.guests === 1 ? '1 Guest' : `${state.guests} Guests`;
            validateForm();
        });
    });

    const calGrid = document.getElementById('vb-calendar-grid');
    const calMonthYear = document.getElementById('cal-month-year');
    let currentDate = new Date();

    function renderCalendar() {
        calGrid.innerHTML = '';
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        
        const firstDay = new Date(year, month, 1).getDay(); 
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        calMonthYear.innerText = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

        for (let i = 0; i < firstDay; i++) {
            let emptyCell = document.createElement('div');
            calGrid.appendChild(emptyCell);
        }

        const today = new Date();
        today.setHours(0,0,0,0);

        for (let day = 1; day <= daysInMonth; day++) {
            let cellDate = new Date(year, month, day);
            let cell = document.createElement('div');
            cell.classList.add('vb-cal-cell');
            cell.innerText = day;

            if (cellDate < today) {
                cell.classList.add('disabled');
            } else {
                if (Math.random() < 0.1) cell.classList.add('disabled');
                
                cell.addEventListener('click', () => {
                    if(cell.classList.contains('disabled')) return;
                    document.querySelectorAll('.vb-cal-cell').forEach(c => c.classList.remove('selected'));
                    cell.classList.add('selected');
                    
                    state.date = cellDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                    sumDate.innerText = state.date;
                    validateForm();
                    generateTimes(); 
                });
            }
            calGrid.appendChild(cell);
        }
    }
    renderCalendar();

    document.getElementById('cal-prev').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });
    document.getElementById('cal-next').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    const timeSlotsContainer = document.getElementById('vb-time-slots');
    const times = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];

    function generateTimes() {
        timeSlotsContainer.innerHTML = '';
        times.forEach(time => {
            let btn = document.createElement('button');
            btn.classList.add('vb-time-btn');
            btn.innerText = time;
            
            if (Math.random() < 0.3) btn.classList.add('disabled');

            btn.addEventListener('click', () => {
                if(btn.classList.contains('disabled')) return;
                document.querySelectorAll('.vb-time-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                state.time = time;
                sumTime.innerText = time;
                validateForm();
            });
            timeSlotsContainer.appendChild(btn);
        });
    }
    generateTimes();

    document.querySelectorAll('input[name="vibe"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            state.vibe = e.target.value;
            sumVibe.innerText = state.vibe;
        });
    });
    sumVibe.innerText = state.vibe;

    const extraCheckboxes = document.querySelectorAll('.extra-check');
    extraCheckboxes.forEach(chk => {
        chk.addEventListener('change', () => {
            state.extras = Array.from(extraCheckboxes)
                                .filter(c => c.checked)
                                .map(c => c.value);
            
            sumExtras.innerText = state.extras.length > 0 ? state.extras.join(', ') : 'None';
        });
    });

    const magneticWrap = document.getElementById('submit-magnetic');

    if(window.innerWidth > 992) {
        magneticWrap.addEventListener('mousemove', (e) => {
            if(submitBtn.classList.contains('disabled')) return;
            
            const rect = magneticWrap.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(submitBtn, {
                x: x * 0.4,
                y: y * 0.4,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        magneticWrap.addEventListener('mouseleave', () => {
            gsap.to(submitBtn, {
                x: 0,
                y: 0,
                duration: 0.7,
                ease: "elastic.out(1, 0.3)"
            });
        });
    }

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if(submitBtn.classList.contains('disabled')) return;
        
        const btnText = submitBtn.querySelector('.btn-text');
        btnText.innerText = "Processing...";
        
        setTimeout(() => {
            btnText.innerText = "Request Secured";
            submitBtn.style.background = "#fff";
            submitBtn.style.color = "#000";
            console.log("FINAL BOOKING PAYLOAD:", state);
        }, 1500);
    });

    validateForm();
});