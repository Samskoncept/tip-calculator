calculateTip=()=>{
       let total_bill = document.getElementById("totalBill").value;
       let rate_service = document.getElementById("rateService").value;
       let num_people = document.getElementById("numPeople").value;
       tip_amount = Math.round((total_bill*rate_service)/num_people);

       if(total_bill===""){
        alert("Enter your total bill")
       } else if (num_people===""){
        alert("Enter number of people")
       }else {
        document.getElementById("tipAmount").textContent = "Tip Amount: " + "$" + tip_amount + " Per Person";
       }
       
    }