
// apply btn disable

function discountApply(total){
    const getApply = document.getElementById('applyBtn');
    const dicountPrice = document.getElementById('discount');
    const granSum = document.getElementById('grandTotal');
    const couponInput = document.getElementById('input-filed');
   
    if(total > 200){
        getApply.disabled = false;
        getApply.style.backgroundColor = "#E527B2";
        getApply.addEventListener('click', function(){
            const couponValue = couponInput.value;
            if(couponValue === 'SELL200'){
                const discount = parseFloat((0.2) * total);
            dicountPrice.innerText = discount.toFixed(2);
            const totalPrice = parseFloat(total - discount);
             granSum.innerText = totalPrice;



            couponInput.value = "";
    
            }
            else{
                alert("invalid Cupon Code");
                return;
            }
        })
       
      

    }
    else {
        getApply.style.backgroundColor = "gray";
    }
}





function make(total) {
    const makebtn = document.getElementById('makeBtn');
    
    makebtn.addEventListener('click', function() {
        if (total >= 0) {
            
            document.getElementById('my_modal_1').showModal();
        }
    });

    const modalClose = document.getElementById('modalClose');
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            location.reload();
        });
    }

    if (total > 0) {
        makebtn.disabled = false;
       
        makebtn.style.backgroundColor = "#E527B2";
    }
     else {
      
        makebtn.style.backgroundColor = "gray";
    }
}









