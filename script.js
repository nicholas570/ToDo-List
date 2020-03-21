// Random greetings functions

const greetingsArray = ["what's up today?", "Did you sleep well?", "Damn! it's early to work",
    "I missed you", "Have a lovely day"
];

const getRandomGreetings = (array) => {
    let randomIndex = Math.floor((Math.random() * array.length));
    return randomIndex;
};

document.getElementById('greetings').innerHTML = greetingsArray[getRandomGreetings(greetingsArray)];

// Date

const hour = new Date().getHours();
const minute = new Date().getMinutes();
const time = `${hour}:${minute}`;
document.getElementById('time').innerHTML = time;


// Add a task to the list


const appendToTheList = () => {
    const list = document.createElement('li');
    const taskToAdd = document.getElementById('taskToAdd').value;
    const task = document.createTextNode(taskToAdd);
    list.appendChild(task);
    document.getElementById('list').appendChild(list);
};



