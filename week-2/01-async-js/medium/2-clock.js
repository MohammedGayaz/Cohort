const format_12 ={
    hour : '2-digit',
    minute : '2-digit',
    second : '2-digit',
    hour12 : true
}
const format_24 ={
    hour : '2-digit',
    minute : '2-digit',
    second : '2-digit',
    hour12 : false
}

function time(date) {
    console.log(new Intl.DateTimeFormat('en-US', format_12).format(date))
    console.log(new Intl.DateTimeFormat('en-US', format_24).format(date))
}

function clock(){
    setInterval(()=>{
        time(new Date)
    }, 1000)
}

clock()
