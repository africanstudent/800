// script.js
import { database, ref, set } from './firebase.js';

document.querySelectorAll('.iphone-model').forEach(button => {
    button.addEventListener('click', () => {
        const model = button.getAttribute('data-model');
        displayPrices(model);
    });
});

function displayPrices(model) {
    const basePrices = {
        audio: 20000,
        network: 35000,
        battery: 100000,
        screen: 150000,
        water: 200000
    };

    const modelMultiplier = {
        '11': 0,
        '11-Pro': 1,
        '11-Pro-Max': 2,
        '12': 3,
        '12-Mini': 4,
        '12-Pro': 5,
        '12-Pro-Max': 6,
        '13': 7,
        '13-Mini': 8,
        '13-Pro': 9,
        '13-Pro-Max': 10,
        '14': 11,
        '14-Mini': 12,
        '14-Pro': 13,
        '14-Pro-Max': 14,
        '15': 15,
        '15-Plus': 16,
        '15-Pro': 17,
        '15-Pro-Max': 18
    };

    const multiplier = modelMultiplier[model];

    document.getElementById('audio-price').textContent = `Ugx.${basePrices.audio + (multiplier * 5500)}`;
    document.getElementById('network-price').textContent = `Ugx.${basePrices.network + (multiplier * 5000)}`;
    document.getElementById('battery-price').textContent = `Ugx.${basePrices.battery + (multiplier * 9950)}`;
    document.getElementById('screen-price').textContent = `Ugx.${basePrices.screen + (multiplier * 45500)}`;
    document.getElementById('water-price').textContent = `Ugx.${basePrices.water + (multiplier * 50000)}`;
}

function submitComplexIssue() {
    const issue = document.getElementById('complex-issue').value;
    if(issue) {
        // Save the complex issue to Firebase
        const issueRef = ref(database, 'complex_issues/' + Date.now());
        set(issueRef, {
            issue: issue,
            timestamp: Date.now()
        }).then(() => {
            console.log('Complex Issue Submitted: ', issue);
            alert('Your complex issue has been submitted.');
        }).catch((error) => {
            console.error('Error submitting complex issue: ', error);
        });
    } else {
        alert('Please specify the complex issue.');
    }
}
