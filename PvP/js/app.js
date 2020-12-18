document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1

    for (var i = 0, len = squares.length; i < len; i++)

    (function(index){
        //ajouter un onclick à chaque case dans la grille
        squares[i].onclick = function(){
            //si le carré en dessous du notre a un classename taken, alors on peut cliquer dessus et ajouter notre jeton.
            if(squares[index + 7].classList.contains('taken')) {
                if (currentPlayer === 1) {
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-one')
                    //changement de joueur
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer 
                }   else if (currentPlayer === 2) {
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-two')
                    //changement de joueur
                    currentPlayer = 1
                    displayCurrentPlayer.innerHTML = currentPlayer 
                }
                //si le carré en dessous du notre n'a pas un classname taken, cela devra dire qu'on ne peut pas placer notre jeton.
            }   else alert('Impossible de jouer dans le vide !')
        }
    })(i)

//Vérification : gagnant ou perdant
function checkBoard() {
     //constante qui montre toutes les solutions gagnantes
     const winningArrays = [
        [0, 1, 2, 3], [41, 40, 39, 38], [7, 8, 9, 10], [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], [21, 22, 23, 24],[20, 19, 18, 17], [28, 29, 30, 31], [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], [0, 7, 14, 21], [41, 34, 27, 20],[1, 8, 15, 22], [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25],[37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], [41, 33, 25, 17],[7, 15, 23, 31], [34, 26, 18, 10], [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], [6, 12, 18, 24], [28, 22, 16, 10],[13, 19, 25, 31], [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22],[2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], [11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9], [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], [26, 25, 24, 23], [29, 30, 31, 2], [33, 32, 31, 30], [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34]
     ]
     //On prend les quatres valeurs de chaque "winningArray" et on les mets dans des cases 
     for(let y = 0; y < winningArrays.length; y++) {
        const square1 = squares[winningArrays[y][0]]
        const square2 = squares[winningArrays[y][1]]
        const square3 = squares[winningArrays[y][2]]
        const square4 = squares[winningArrays[y][3]]

        //on vérifie dans ces arrays si si elles on la classe player-one (si ce sont des jetons posés par le joueur 1)
        if(square1.classList.contains('player-one') &&
        square2.classList.contains('player-one') &&
        square3.classList.contains('player-one') &&
        square4.classList.contains('player-one')) {
            // Si oui on veut dire que le joueur 1 gagne (forcément lol)
            result.innerHTML = 'Le joueur 1 gagne !'
        }
        //même chose pour le joueur 2 
        else if(square1.classList.contains('player-two') &&
        square2.classList.contains('player-two') &&
        square3.classList.contains('player-two') &&
        square4.classList.contains('player-two')) {
            // Si oui on veut dire que le joueur 2 gagne (encore plus obvious la quand même, suis un minimum...)
            result.innerHTML = 'Le joueur 2 gagne !'
        } 
     }
 }



// eventListener qui passe cette fonction à chaque fois que quelqu'un joue
squares.forEach(square => square.addEventListener('click', checkBoard))













})