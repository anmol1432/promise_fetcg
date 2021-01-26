// promises and fetch topic 🍏

const jokes = document.querySelector('#joke');
const Button = document.querySelector('.btn');
const generatejokes = async () => {
    // const setheader = {
    //     headers: {
    //         Accept: "apllication/json",
    //     }
    // }
    // Promises concept🍎✔️
    // fetch('https://icanhazdadjoke.com', setheader)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         // jokes.innerHTML = data.joke;
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })


    // await concept with try and catch🍎
    try {
        const setheader = {
            headers: {Accept: "application/json"}
        }
        const res = await fetch('https://icanhazdadjoke.com', setheader)
        const data = await res.json();
        jokes.innerHTML = data.joke;
    }catch (error) { console.log("the error " + error); }
};


// Fire event with joke Button
Button.addEventListener('click', generatejokes);
generatejokes();