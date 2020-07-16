function die_roll(dice_num) {
    random_num = Math.floor(Math.random() * 6 + 1)
    image_path = "./images/dice" + random_num + ".png"
    document.querySelector(dice_num).setAttribute("src", image_path)
    return random_num
}

let dice_1 = die_roll('.dice-1')
let dice_2 = die_roll('.dice-2')

if (dice_1 > dice_2) {
    document.querySelector('h1').textContent = '🚩 Player1 Wins'
}
else if (dice_1 < dice_2) {
    document.querySelector('h1').textContent = 'Player2 Wins 🚩'
}
else {
    document.querySelector('h1').textContent = "It's a tie"
}