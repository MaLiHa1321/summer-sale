let sum = 0;
function handleDiv(element) {
    const cardBody = element.querySelector('.card-body');
    if (cardBody) {
       
        const boxInfo = cardBody.querySelector('.card-title');
        const itemaName = document.getElementById('selectedItem');
        const p = document.createElement('p');
        p.innerText = boxInfo.innerText;
        const count = itemaName.childElementCount;
        p.classList.add('my-4');

        p.innerHTML = `${count +1}. ${p.innerText}`;
        itemaName.appendChild(p);

        const itemPrice = cardBody.querySelector('#price');
        const  ElementPrice = itemPrice.innerText.split(" ")[0];
        sum =  parseFloat(sum) + parseFloat(ElementPrice);


        document.getElementById('total').innerText = sum.toFixed(2);
    

        make(sum); 
        discountApply(sum);
    
       
    }
}





