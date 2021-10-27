import giveMeAJoke from "give-me-a-joke";

const renderJoke = () => {
    giveMeAJoke.getRandomDadJoke(function(joke) {
        document.querySelector("blockquote").innerText = joke;
    });
}

renderJoke();

document.querySelector("button").addEventListener("click", renderJoke);