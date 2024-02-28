function getMainDiv(){  
    const mainDiv = document.createElement('div');
    mainDiv.id='container';
    mainDiv.style.borderRadius = '30px';
    document.body.appendChild(mainDiv);
    a.addEventListener('click',()=>{
        let aWidth = '16px';
        getChildDivs(mainDiv,aWidth);

    });
    b.addEventListener('click',()=>{
        let bWidth = '32px';
        getChildDivs(mainDiv,bWidth);

    });
}

getMainDiv();

function getChildDivs(mainDiv,total){

    
    const childrens=[];
    
    for(let i =0 ; i<155;i++){
        var childDiv = document.createElement('div');
        if(total === '16px') childDiv.setAttribute('style','width: total; border: 2px solid black');
        else childDiv.setAttribute('style','total');
        childDiv.textContent=' . ';
        
        childDiv.setAttribute('class','childSquares');
        mainDiv.appendChild(childDiv);
        
        childrens.unshift(childDiv);

        
        
    }
    const children = mainDiv.getElementsByClassName('childSquares');
    colorTheDivs(childrens);
    console.log(childrens)
}
function colorTheDivs(children){
    console.log(children);
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
    // for(const child of children){

    
    //     child.addEventListener('mouseover',()=>{
    //         if(child.style['background-color']==='white'){
    //             child.style['background-color']='black';
    //         }
    //         else{
    //             child.style['background-color']='white';
    //         }       
    //     });
    // }

}
console.log(MouseEvent);
