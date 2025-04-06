const scenarioElement = document.getElementById('scenario');
const choicesElement = document.getElementById('choices');
const restartButton = document.getElementById('restart-btn');

const scenarios = [
    {
        prompt: "You arrive on a mysterious island with unknown creatures. What will you investigate first?",
        choices: ["The forest", "The cave", "The beach"],
        consequence: [
            "The forest is lush and full of strange noises. You find interesting plants!",
            "The cave is dark, and you find mysterious ancient symbols carved on the wall.",
            "The beach reveals shipwreck remnants and a mysterious message in a bottle."
        ]
    },
    {
        prompt: "You encounter a puzzle that blocks your path. Which skill will you use?",
        choices: ["Math skills", "Creative thinking", "Teamwork"],
        consequence: [
            "Your math skills help you decipher a numerical puzzle. Great job!",
            "Your creativity lets you invent a unique solution to the puzzle!",
            "Working together, you and your friends overcome the puzzle easily!"
        ]
    },
    {
        prompt: "A challenge approaches! How will you respond?",
        choices: ["Face it bravely", "Plan carefully", "Ask for help"],
        consequence: [
            "Your bravery inspires others, and you conquer the challenge!",
            "Your careful planning makes the task much simpler.",
            "With teamwork, the challenge feels effortless!"
        ]
    }
];

let currentScenario = 0;

function loadScenario(index) {
    scenarioElement.textContent = scenarios[index].prompt;
    choicesElement.innerHTML = '';

    scenarios[index].choices.forEach((choice, idx) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.className = 'btn btn-primary btn-choice';
        button.onclick = () => showConsequence(index, idx);
        choicesElement.appendChild(button);
    });
}

function showConsequence(scenarioIndex, choiceIndex) {
    scenarioElement.textContent = scenarios[scenarioIndex].consequence[choiceIndex];
    choicesElement.innerHTML = '';

    if (scenarioIndex < scenarios.length - 1) {
        const nextButton = document.createElement('button');
        nextButton.textContent = "Next Scenario";
        nextButton.className = 'btn btn-success mt-3';
        nextButton.onclick = () => loadScenario(++currentScenario);
        choicesElement.appendChild(nextButton);
    } else {
        scenarioElement.textContent += " 🎉 You've completed the adventure!";
        restartButton.style.display = 'inline-block';
    }
}

restartButton.onclick = () => {
    currentScenario = 0;
    restartButton.style.display = 'none';
    loadScenario(currentScenario);
};

// Start the game
loadScenario(currentScenario);
