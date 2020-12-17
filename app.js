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
})