

class Governor{
    static goodLeader = true;
    
    static goodManager = true;  
    
    static goodNavigator = true;
    
        
    static signDecree(){
        console.log(`signing decree`);
    }
    static givePressConference(){
        console.log(`Giving an intresting press conference.`);
    }
}

Governor.signDecree();
Governor.givePressConference();
console.log(Governor.goodLeader);
console.log(Governor.goodManager);
console.log(Governor.goodNavigator);

//Inheritance

class Person{
    constructor(){
        this.Hands = true;
        this.Legs = true;
        this.name = true;
    }
    eat(){
        console.log(`Eating...`);
    }
    dance(){
        console.log(`Dancing...`);
    }
    cry(){
        console.log(`Crying...`);
    }
}

class PostalWorker extends Person{
    recieveMail(){
        console.log(`recieving mail.`);
    }
    deliverMail(){
        console.log(`Delevering mail.`);
    }
}


class Chef extends Person{
    cook(){
        console.log(`Cooking rice.`);
    }
    sliceSpice(){
        console.log(`Slicing spices`);
    }
}

const worker1 = new PostalWorker();
worker1.eat();
worker1.dance();
worker1.cry();
worker1.recieveMail();
worker1.deliverMail();

const worker2 = new PostalWorker();
worker2.eat();
worker2.dance();
worker2.cry();
worker2.recieveMail();
worker2.deliverMail();

const chef1 = new Chef();
chef1.eat();
chef1.dance();
chef1.cry();
chef1.cook();
chef1.sliceSpice();

const chef2 = new Chef();
chef2.eat();
chef2.dance();
chef2.cry();
chef2.cook();
chef2.sliceSpice();

class BankAccount{
    constructor(){
        this.ownerName = "John";
        this.balance =  10000;
        this.acctNum = 1234567;
    }
    deposit(amount){
        this.balance+=amount;
    }
    withdraw(amount){
        if(amount < this.balance){
            this.balance-=amount;
        }else{
            console.log(`${amount} is more than your balance: ${this.balance}`);
        }
        
    }
}

class CheckingAccount extends BankAccount{
    constructor(){
        super();
        this.overdraftEnabled = false;
    }
    withdraw(amount){
        if(this.overdraftEnabled && amount > this.balance){
            this.balance-=amount;
            console.log(`You withdrew $${amount}`);
        }else if(amount <= this.balance){
            this.balance-=amount;
            console.log(`You withdrew $${amount}`);
        }else{
            console.log(`Not eligible for overdraft so cannot withdraw more than your acount balance.`);
        }
    }

    
}

class SavingsAccount extends BankAccount{
    constructor(){
        super();
    }
    withdraw(){
        console.log(`Withdrawal denied from Account: ${this.acctNum} holding $${this.balance}.`);
    }
}
// UNCOMMENT THE CODE BELLOW TO SEE HOW IT WORKS.


const account = new BankAccount();
account.deposit(10000);
account.withdraw(4000);
console.log(account);


const checkAccount = new CheckingAccount();
checkAccount.withdraw(3000)
console.log(checkAccount);

const sAccount = new SavingsAccount('cle',7887,6667);
sAccount.withdraw();