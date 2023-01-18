const showDice = () => {
    const n = Math.floor(Math.random() * 6) + 1
    const s1 = document.querySelector("#s1")

    s1.innerHTML = `<img src="./images/${n}.png" />`
    console.log(n)
}