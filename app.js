let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");
let newbtn=document.querySelector("#new-btn");
let turnO=true;
let count=0;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame=()=>{
    turnO=true;
    enable();
    msgcontainer.classList.add("hide");
}

const disable=()=>{
    for(let box of boxes)
        {
            box.disabled=true;
           
          

        }


}
const enable=()=>{
    for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";

            
        }


}
const drawmatch=()=>{
    msg.innerText="Draw Game!";
    msgcontainer.classList.remove("hide");
    disable();




}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>
        {
           
            if(turnO)
                {
                    box.innerText="O";
                    box.style.color="green";
                    turnO=false;

                }
                else{
                    box.innerText="X";
                    box.style.color="violet";
                    turnO=true;
                }
                box.disabled=true;
                count++;
               
                let win=checkwinner();
                if(count==9 && !win)
                    {
                        drawmatch();
                    }

        })
       
    })

    const showWinner=(winner)=>{
        msg.innerText=`Congratulations the winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disable();

    }

    const checkwinner=()=>{
        for (let pattern of winpatterns)
            {
                let pos1=boxes[pattern[0]].innerText;
                let pos2=boxes[pattern[1]].innerText;
                let pos3=boxes[pattern[2]].innerText;

                if(pos1!="" && pos2!="" && pos3!="")
                    {
                        if(pos1===pos2 && pos2===pos3)
                            {
                                
                                showWinner(pos1);
                                return true;

                            }
                    }
                



            }
 

    }

    newbtn.addEventListener("click",resetgame);
    resetbtn.addEventListener("click",resetgame);
