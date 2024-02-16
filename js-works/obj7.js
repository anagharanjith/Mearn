accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts    - length
console.log(`total number of accounts: ${accounts.length}`);

//2. print account number whose ac_type is savings    - filter()
console.log(`account with ac_type is savings: ${accounts.filter(item=>item.ac_type=='savings').map
(item=>item.acno)}`);

//3.print the balance of accnount number 1000     - find()
console.log(`account 1000 , balance is:  ${accounts.find(item=>item.acno==1000).balance}`);

//4. print all gpay transactions         - map()
console.log("all gpay transactions");
console.log(accounts.map(item=>item.transaction).flat(Infinity).filter(item=>item.mode=="gpay"));

//5. print all transaction whose amount > 5000
console.log("all transaction whose amount > 5000");
console.log(accounts.map(item=>item.transaction).flat(Infinity).filter(item=>item.amount>"5000"));

//6. print credit transaction of account 1002
console.log("print credit transaction of account 1002");
creditTrans = accounts.map(item=>item.transaction).flat(Infinity).filter(item=>item.to==1002);
console.log(creditTrans);
creditAmount= creditTrans.map(item=>item.amount).reduce((amt1,amt2)=>amt1+amt2)
// find total credit amount to 1002
console.log(`find total credit amount to 1002 ${creditTrans.map(item=>item.amount).reduce((amt1,amt2)=>amt1+amt2)}`);

//7. print debit transaction of account 1002
console.log("print debit transaction of account 1002");
debitTrans= accounts.find(item=>item.acno == 1002).transaction
console.log(debitTrans);

// print total debit amount of 1002
debitAmmount= debitTrans.map(item=>item.amount).reduce((amt1,amt2)=>amt1+amt2)
console.log(`total debit amount of 1002:${debitAmmount}`);

// print current balance of 1002
console.log(` current balance of 1002: ${accounts.find(item=>item.acno === 1002).balance+creditAmount}`);

//8. print transaction history of 1002
transactionHistory= [...creditTrans,...debitTrans]
console.log(" print transaction history of 1002");
console.log(transactionHistory);

//9. print highest balance account details
highest= accounts.reduce((acc1,acc2)=>acc1.balance>acc2.balance?acc1:acc2)
console.log(`account${highest.accno}, has a highest balance of ${highest.balance}`);