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
    // create a js li
    const list = document.createElement('li');
    const span = document.createElement('span');

    // add input value to the list
    const taskToAdd = document.getElementById('taskToAdd').value;
    const task = document.createTextNode(taskToAdd);
    span.appendChild(task)
    list.appendChild(span);

    // create a button to remove the task
    const done = document.createElement('button');
    done.className = 'btn btn-danger';
    done.setAttribute('onclick', "this.parentNode.style.display='none'");
    const doneCross = document.createTextNode('x');
    done.appendChild(doneCross)
    list.appendChild(done);

    // send it in the HTML
    document.getElementById('list').appendChild(list);
};













