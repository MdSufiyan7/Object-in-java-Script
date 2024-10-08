// script.js
function predictCareer() {
    const skills = document.getElementById('skills').value.toLowerCase();
    const interests = document.getElementById('interests').value.toLowerCase();
    const performance = parseInt(document.getElementById('performance').value);

    let career = '';

    // Simple rule-based logic for career prediction
    if (skills.includes('programming') || interests.includes('technology')) {
        if (performance >= 80) {
            career = 'Data Scientist';
        } else if (performance >= 60) {
            career = 'Software Developer';
        } else {
            career = 'Technical Support Specialist';
        }
    } else if (skills.includes('design') || interests.includes('art')) {
        if (performance >= 80) {
            career = 'Graphic Designer';
        } else if (performance >= 60) {
            career = 'UI/UX Designer';
        } else {
            career = 'Visual Artist';
        }
    } else {
        career = 'Career not found. Please consult with a career advisor.';
    }

    document.getElementById('result').innerText = `Recommended Career: ${career}`;
}
