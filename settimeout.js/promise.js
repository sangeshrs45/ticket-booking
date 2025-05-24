let promise1 = new Promise((resolve,reject) =>{
    let booking = true ;
    if (booking) {
        resolve();
    } else{
        reject();
    }
    
})
promise1.then(()=>{console.log('done')}).catch(()=>{console.log(' not done')}) 