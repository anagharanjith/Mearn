class Bank {
    accountDetails = {
        1000: { acno: 1000, username: "userone", password: "userone", balance: 50000 },
        1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
        1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
        1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
    }
    //validate account number function
    validateAccount(acno) {
        return this.accountDetails.hasOwnProperty(acno)
    }
    //authenticate account(acno,password)
    authenticateAccount(acno, pswd) {
        if (this.validateAccount(acno)) {
            if (this.accountDetails[acno].password == pswd) {
                console.log("Authentication suceesful");
            }
            else {
                console.log("Authentication Failed!! incorrect password..");
            }

        } else {
            console.log("Authentication Failed!! incorrect password..");
        }
    }
    //balance enquiry function
    balanceEnquiry(acno, balance) {
        this.validateAccount(acno) ? console.log(`Balance of account ${acno} is ${this.accountDetails[acno].balance}`)
            : console.log("incorrect account number.....");
    }
    //function for fund transfer
    fundTransfer(fromAcno, toAcno, amount) {
        if(this.validateAccount(fromAcno)){
            if(this.validateAccount(toAcno)){
                if(this.accountDetails[fromAcno].balance>amount){
                    console.log(`Before Transaction : Debit Account ${fromAcno} balance is ${this.accountDetails[fromAcno]
                        .balance} and credit account ${toAcno} balance is ${this.accountDetails[toAcno].balance}`);
                    this.accountDetails[fromAcno].balance -= amount
                    this.accountDetails[toAcno].balance += amount
                    console.log("transaction completed suceesfully");
                    console.log(`after Transaction : Debit Account ${fromAcno} balance is ${this.accountDetails[fromAcno]
                        .balance} and credit account ${toAcno} balance is ${this.accountDetails[toAcno].balance}`);
                }
                else{
                    console.log("transaction failed.. insuffiecnt balance");  
                }
            }
            else{
                console.log("transaction failed.. invalid credit account number");
            }
        }
        else{
            console.log("transaction failed .....invalid debit account number"); 

        }
    }
}



const acc_holder = new Bank()
console.log(acc_holder.validateAccount(1000) ? "valid account" : "invalid account");
acc_holder.authenticateAccount(1000, "userone")
acc_holder.balanceEnquiry(1000)
acc_holder.fundTransfer(1000, 1002, 5000)