function processInformation() {
    // will ask for user's name
    let name = prompt("Enter your Name:");
    // will ask for user's b'day
    let bday = prompt("Enter your Birthday (e.g., MM/DD/YYYY):");

    if (name && bday) {
        // the string is split into an array, the reverse will arrange the strings in order and then joined back into string and this will display our reversed name.
        let reversedName = name.split('').reverse().join('');
        document.getElementById('reversed-name').textContent = `Reversed Name: ${reversedName}`;

        // this will loop into each character of the name and counts the consonants and vowels
            let vowelsCount = 0;
            let consonantsCount = 0;
            const vowels = 'aeiouAEIOU';
            for (let char of name) {
                if (vowels.includes(char)) {
                    vowelsCount++;
                } else if (char.match(/[a-zA-Z]/)) {
                    consonantsCount++;
                }
            }
            document.getElementById('vowel-count').textContent = `Vowel Total: ${vowelsCount}`;
            document.getElementById('consonant-count').textContent = `Consonant Total: ${consonantsCount}`;

        // it computes to find the difference between the current date and the user's b-day
        let today = new Date();
        let birthDate = new Date(bday);
        let ageYears = today.getFullYear() - birthDate.getFullYear();
        let ageMonths = today.getMonth() - birthDate.getMonth();

        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        document.getElementById('age').textContent = `Age: ${ageYears} years and ${ageMonths} months old.`;
    } else {
        document.getElementById('result').textContent = "Please provide your name and birthday.";
    }
}

window.onload = processInformation;
