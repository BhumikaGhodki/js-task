var arr = [
    { name: 'Aarav Sharma', time: 'Today, 8:15 AM',
     dp: 'https://images.unsplash.com/photo-1576800774081-68c65e87becc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGN1dGUlMjBtYW58ZW58MHx8MHx8fDA%3D',
     story:'https://images.unsplash.com/photo-1734954771310-4aba96f1e36c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D' },
   

    { name: 'Isha Patel', time: 'Today, 9:45 AM', 
     dp: 'https://images.unsplash.com/photo-1634149134165-6d679d80a800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZlbWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww',
     story:'https://images.unsplash.com/photo-1727911195025-0a9efc456987?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1M3xobWVudlFoVW14TXx8ZW58MHx8fHx8' },
    

     { name: 'Kabir Verma', time: 'Today, 10:30 AM',
    dp: 'https://plus.unsplash.com/premium_photo-1672239496412-ab605befa53f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D' , 
    story:'https://images.unsplash.com/photo-1734621629797-a7bc8a84de46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D'},

    
    { name: 'Neha Singh', time: 'Today, 11:15 AM',
     dp: 'https://images.unsplash.com/photo-1677677159237-a36fcffe4516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D', 
     story:'https://images.unsplash.com/photo-1734386011664-a17cc4ef6755?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D' },

    
     { name: 'Rohan Mehta', time: 'Today, 12:00 PM', 
    dp: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGd1eXxlbnwwfHwwfHx8MA%3D%3D',
    story:'https://images.unsplash.com/photo-1723926991442-80310b191af8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D' },


    { name: 'Ananya Iyer', time: 'Today, 1:45 PM',
     dp: 'https://plus.unsplash.com/premium_photo-1675034796201-35c8f064ba29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhZHl8ZW58MHx8MHx8fDA%3D',
     story:'https://images.unsplash.com/photo-1731963916206-91935cb3afa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5NXxobWVudlFoVW14TXx8ZW58MHx8fHx8' },

  ];
  var sum = ''

  arr.forEach(function(elem,idx){
   
    sum = sum + `<div class="status" id = ${idx}>
                <img src="${elem.dp}" alt="">
                <div>
                    <h4>${elem.name}</h4>
                    <h6>${elem.time}</h6>
                </div>
                </div>`
    
  })
   var allStatus = document.querySelector('#allStatus')
   var full =  document.querySelector('#full')
   allStatus.innerHTML = sum

   allStatus.addEventListener('click',function(dets){
    var gold = arr [dets.target.id]

    full.style.display = 'block'
    full.style.backgroundImage = `url(${gold.story})`

    setTimeout(function(){
        full.style.display = 'none'
    },3000)
   })
  
