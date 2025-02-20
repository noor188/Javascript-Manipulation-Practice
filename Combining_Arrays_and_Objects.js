// Ticket 5: Combining Arrays and Objects

// 1. Create an array of objects representing projects with properties:
let project = [
    {
        projectName : "Caregiver",
        deadline    : "3-10-2025",
        status      : "Analysis phase"
    },
    {
        projectName : "Gym trakcer",
        deadline    : "3-15-2025",
        status      : "front end phase"
    }

];

// 2. Create a new array that contains only the names of the projects.
let projects = [
    { 
        projectName: 'Project A', 
        deadline: '2024-02-01', 
        status: 'in progress' 
    },
    { 
        projectName: 'Project B', 
        deadline: '2024-01-15', 
        status: 'not started' 
    },
    { 
        projectName: 'Project C', 
        deadline: '2024-03-01', 
        status: 'in progress' 
    }
];

let project_name = projects.map(project => project.projectName)
console.log("Array with only project names", project_name);

// 3. Filter the array to only include projects that are 'in progress'.

let projects3 = [
    { projectName: 'Project A', deadline: '2024-02-01', status: 'in progress' },
    { projectName: 'Project B', deadline: '2024-01-15', status: 'not started' },
    { projectName: 'Project C', deadline: '2024-03-01', status: 'in progress' }
];

let inProgress = projects3.filter(project=>project.status=='in progress');
console.log("Array with in progress projects: ", inProgress)

// 4. Sort the projects by their deadline in ascending order.
projects3.sort((a, b) => new Date (a.deadline) - new Date(b.deadline));
console.log("Sorted array by deadline in ascending order", projects3);
