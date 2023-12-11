let cnt = 1;

function timer(){
    console.log(cnt)
    cnt += 1;
    setTimeout(timer, 1000)
}

timer()