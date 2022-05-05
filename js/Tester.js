const html_codeSection=document.querySelector("#code_section")
const html_resultSection=document.querySelector(".result-content")

const html_buttonTestCode=document.querySelector("#button_test")
const html_buttonNewCode=document.querySelector("#button_new_code")
const html_buttonReset=document.querySelector("#button_reset")

let Tester={
    html_code:null,
    init: function(){
        this.html_code=html_codeSection.firstElementChild.cloneNode(true);
    },

    newCode:function(){
        html_codeSection.appendChild(Tester.html_code.cloneNode(true));
    },

    reset:function(){
        html_codeSection.innerHTML="";
        Tester.newCode();
    },

    test:function(){
        let html_codeList=html_codeSection.querySelectorAll(".code");
        let testCodeList=[];
        for(let i=0, l=html_codeList.length; i<l; i++){
            let codeName=html_codeList[i].querySelector(".code-name").value;
            let codeContent=html_codeList[i].querySelector(".code-content").value;
            testCodeList.push(new TestCode(i, codeName, codeContent));
        }
        testCodeList.sort(function(a,b){return a.testTime-b.testTime})
        html_resultSection.innerText="";
        for(let i=0, l=html_codeList.length; i<l; i++)html_resultSection.innerText+=testCodeList[i].getResertMessage();
    },

    deleteCode:function(html_deleteButton){
        let html_code=html_deleteButton.parentElement.parentElement;
        html_code.remove();

    }
}

Tester.init();

/*
[test case 1]
let array=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let sum=0;
for(let i=0; i<array.length; i++){};

[test case 2]
let array=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let sum=0;
for(let i=0, l=array.length; i<l; i++){};
*/

/*
let array=[];
for(let i=0; i<1000; i++){
    array.push(1);
}

let array=[];
for(let i=0; i<1000; i++){
    array[i]=1;
}
*/
