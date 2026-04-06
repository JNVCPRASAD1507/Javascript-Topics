
let name = prompt("Enter u r Name : ")
let age = Number(prompt("Enter u r age : "))
let salary = Number(prompt("Enter u r Annual salary : "))
let monthlySal = salary/12;
let loanAmount = Number(prompt("Enter u r Loan Amt : "))

console.log("Name : ", name)
console.log("Age : " + age);
console.log("salary : ", salary)
console.log("Loan : " + loanAmount);

// Eligibility

if (eligibility=(age >= 25 && age <=60 && monthlySal >= 30000)){
    console.log( "Eligible 👉" )
}else{
   console.log("Not Eligible ❌");
}

// console.log( (age >= 25 && age <=60 && monthlySal >= 30000) ? "eligible" : "not eligible")


// EMI 

let EMI = loanAmount/2;
console.log("EMI :",EMI)

// Loan Category
let loanCategory;
if(loanCategory=loanAmount> 500000){
    console.log("High Loan")
}else if(loanCategory=loanAmount>200000){
    console.log("Medium Loan")
}else{
    console.log("Low Loan")
}

//Risk Level Ternary operator

console.log( (risklevel = (salary > 50000) ? "Low Risk " : "High Risk" ))

// Customer type using switch case

let customerType;

switch(true){
    case (customerType=EMI>40000):
        console.log("Premium Customer")
        break;
    case (customerType=EMI>20000):
        console.log("Standard Customer")
        break;
    default:
        console.log(" Basic Customer")
}

// String Templates

console.log(
`Name : ${name} 
Age :  ${age} 
monthly salary : ${monthlySal}
loan Amount : ${loanAmount}
eligibility status : ${eligibility}
emi : ${EMI}
loan Category : ${loanCategory}
Risk level : ${risklevel}
customer Type : ${customerType}

    `)

// Name : Prasad K 
// Age :  25 
// monthly salary : 8333333.333333333
// loan Amount : 400000
// eligibility status : true
// emi : 200000
// loan Category : true
// Risk level : Low Risk 
// customer Type : true
