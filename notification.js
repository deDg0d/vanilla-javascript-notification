function showNotification(){
  const notification = new Notification('new message from from website',{
  body:"hey , wanna check your account",
  icon:'https://i.pinimg.com/originals/20/79/03/2079033abc8314be554f9d24f562a199.jpg'

  })
notification.onclick=(e)=>{
  window.location.href="https://google.com"
}
}
console.log(Notification.permission)
if(Notification.permission==='granted'){
  showNotification()
}else if(Notification.permission!=="denied"){
  Notification.requestPermission().then(permission=>{
    if(permission ==='granted'){

    showNotification()
    }
  })
}