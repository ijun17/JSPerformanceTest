const TEST_COUNT=1000;

class TestCode{
    id=0;
    codeName="";
    codeContent="";
    codeFunction=function(){};
    testTime=100000000; //if -1 -> error
    errorMessage="";
    
    constructor(id, codeName, codeContent){
        this.id=id;
        this.codeName=codeName;
        this.codeContent=codeContent;
        this.test();
    }

    test(){
        try{
            let codeFunction=new Function(this.codeContent);
            codeFunction();
            this.codeFunction=codeFunction;
        }catch(e){
            this.errorMessage=e;
            this.testTime=-1;
            return;
        }
        for(let i=0; i<TEST_COUNT; i++){
            let t0=performance.now();
            for(let i=0; i<TEST_COUNT; i++)this.codeFunction();
            let t1=performance.now();
            if(this.testTime>t1-t0)this.testTime=t1-t0;
        }
    }

    getResertMessage(){
        if(this.testTime===-1)return `[${this.id}]${this.codeName} : ${this.errorMessage}\n`;
        else return `[${this.id}] ${this.codeName}: ${this.testTime}\n`;
    }
}   