<<<<<<< HEAD
const selector = document.getElementById('status')

function hideAll() {
    const possibleValues = ['appliedFor', 'accepted', 'completed'];
    for (let i = 0; i < 3; i++) {
        document.getElementById(possibleValues[i]).hidden = true;
    };
}

hideAll()
// Set selector value to match initial section being shown
selector.value = 'accepted';
document.getElementById('accepted').hidden = false;

=======
const selector = document.getElementById('status');
>>>>>>> 4fca2fa09f3d02a422f6f2c6398a0870636db4df
selector.addEventListener('change', (event) => {
    const possibleValues = new Array('appliedFor', 'accepted', 'completed');
    let index = possibleValues.findIndex(x => x === selector.value);
    $('.carousel').carousel(index);
});

$('.carousel').carousel('pause');
