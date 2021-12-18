let cards = []
let currentPosition = 0  // position can be only: 0 to (SIZE - 1)
let SIZE = 4 // cards[0] cards[1] cards[2] cards[3] => poistion: 0 to (SIZE - 1) 


function init ()
{
    for (let index = 0; index < SIZE; index++) 
    {
        cards[index] = index + 1
    }
}

function prev ()
{
    if(currentPosition > 0)
    {
        currentPosition--
    }
    else
    {
        currentPosition = SIZE - 1
    }
}

function next ()
{
    if(currentPosition < SIZE - 1)
    {
        currentPosition++
    }
    else
    {
        currentPosition = 0
    }
}

