'use strict'

const BOMB = '💣'
const FLAG = '🚩'

var gBoard

var isShown

function init() {
    console.log('hello pacman')

    gBoard = buildBoard()
    setMinesNegsCount()

    printMat(gBoard, '.board')

}



function buildBoard() {
    const size = 4
    const board = []

    for (var i = 0; i < size; i++) {
        board.push([]) // board[i] = []

        for (var j = 0; j < size; j++) {
            board[i].push([])

            if (i === 1 && j === 1)
                board[i][j] = BOMB
        }

    }
    console.table(board);
    return board
}


function cellClicked() {
    var rec
    if (isShown) {
        isShown = rec
    }
    return rec
}

function setMinesNegsCount() {
    var empty = 0
    var full = 0





}