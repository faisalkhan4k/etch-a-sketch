function getMainDiv(){  
    const mainDiv = document.createElement('div');
    mainDiv.id='container';
    document.body.appendChild(mainDiv);
    getChildDivs(mainDiv);
}

getMainDiv();

function getChildDivs(mainDiv){
    const children=[];
    total = 0;
    // if(numberOfSquares === 0 || numberOfSquares === undefined || numberOfSquares === null || numberOfSquares === NaN){
    //     let messageZero = document.createElement('p');
    //     messageZero.textContent='No Squares';
    //     mainDiv.appendChild(messageZero);
    // }
    
    while(total < 500){
        var childDiv = document.createElement('div');
        childDiv.textContent=' . ';
        total+=10+10;//area of a square is l * b 10 * 10 = 100 , area of original 500 * 500 = 250000
        console.log(total);
        childDiv.setAttribute('class','childSquares');
        mainDiv.appendChild(childDiv);
        
        children.unshift(childDiv);
        
    }
        
    

    
    colorTheDivs(mainDiv,childDiv,children);
    
}


function colorTheDivs(mainDiv,childDiv,children){
    //try out querySelectorAll() on the child divs and add the event listener for onmouseover
    children.forEach(child => {
        child.addEventListener('mouseover',()=>{
            if(child.style['background-color']==='white'){
                let randomValue = Math.floor(Math.random()*10);
                if(randomValue < 3){
                    child.style.backgroundColor = 'red';
                }
                else if(randomValue > 3 && randomValue < 7) child.style.backgroundColor = 'limegreen';
                else child.style.backgroundColor = ' blue';
            }
            else{
                child.style['background-color']='white';
            }                  
        })
        
    });
    // for(const child in children){

    
    //     mainDiv.addEventListener('mouseover',()=>{
    //         if(child.style['background-color']==='white'){
    //             child.style['background-color']='black';
    //         }
    //         else{
    //             child.style['background-color']='white';
    //         }       
    //     })
    // }

}






console.log(MouseEvent);
