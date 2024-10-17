const textDiv = document.getElementById('textDiv');
const textHolder = document.getElementById('textHolder');
const messages = [
    { className: 'text-bs-yellow', text: 'IMAGINATION' },
    { className: 'text-bs-purple', text: 'CREATIVITY' },
    { className: 'text-bs-pink', text: 'CURIOSITY' },
    { className: 'text-bs-teal', text: 'OUTREACH' }
];

let index = 0;

setInterval(() => {
    // Start fade out
    textDiv.classList.add('fade-out');

    // Wait for the fade-out transition to complete
    setTimeout(() => {
        // Change class and text
        textDiv.className = 'z-0 '+messages[index].className + ' p-3'; // Preserve padding  d-flex column align-items-center justify-content-center
        textHolder.textContent = messages[index].text;

        // Start fade in
        textDiv.classList.remove('fade-out');

        // Update index for the next message
        index = (index + 1) % messages.length; // Loop back to the start
    }, 500); // Match this with the fade-out duration
}, 3000); // Change every 3 seconds



function hideSections(ele) {
    if (ele.checked){
        var val = ele.value
        if (val === 'Camera'){
            var camera = document.getElementById('camera-models')
            camera.style.display = 'block';
        }
        if (val === 'Microphone'){
            var mic = document.getElementById('mic-models');
            mic.style.display = 'block';
        }
        if (val === 'Lens'){
            var lens = document.getElementById('lens-models');
            lens.style.display = 'block';
        }
        if (val === 'Tripod'){
            var Tripod = document.getElementById('tripod-models');
            Tripod.style.display = 'block';
        }
        if (val === 'Porta Led Lights'){
            var light = document.getElementById('light-models');
            light.style.display = 'block';
        }
    } else{
        var val = ele.value
        if (val === 'Camera'){
            var camera = document.getElementById('camera-models')
            camera.style.display = 'none';
        }
        if (val === 'Microphone'){
            var mic = document.getElementById('mic-models');
            mic.style.display = 'none';
        }
        if (val === 'Lens'){
            var lens = document.getElementById('lens-models');
            lens.style.display = 'none';
        }
        if (val === 'Tripod'){
            var Tripod = document.getElementById('tripod-models');
            Tripod.style.display = 'none';
        }
        if (val === 'Porta Led Lights'){
            var light = document.getElementById('light-models');
            light.style.display = 'none';
        }
    }
}

function attachEvents () {
    var equipmentCheckBox = document.querySelectorAll('.equipment_selections');
    console.log(equipmentCheckBox)
    equipmentCheckBox.forEach((input) => {
        input.addEventListener('change',(event) => {
            console.log(event)
            hideSections(event.target);
        })
    })
}
function dateValidate () {
    const fromDateInput = document.getElementById('fromDate');
    const toDateInput = document.getElementById('toDate');

    const today = new Date().toISOString().split('T')[0];
    fromDateInput.min = today;
    fromDateInput.addEventListener('change', function () {
        // Set the min attribute of the to date input to the selected from date
        toDateInput.min = fromDateInput.value;
    });

    toDateInput.addEventListener('change', function () {
        // Ensure the to date cannot be less than the from date
        if (toDateInput.value < fromDateInput.value) {
            alert('To date cannot be earlier than From date.');
            toDateInput.value = '';
        }
    });
}
document.addEventListener("DOMContentLoaded", function(){
    attachEvents();
    dateValidate();
})