console.log('Person 1:shows ticket')
console.log('Person 2:shows ticket')

const preMovie=async ()=>{
    const promiseWifeBrigsTics=new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('Ticket'),1000)
    })
    const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`))
    const addButter=new Promise((resolve,reject)=>resolve(`Butter`))
    const getColdDrinks=new Promise((resolve,reject)=>resolve(`coldDrink`))


    let ticket=await promiseWifeBrigsTics;

    let[popcorn,Butter,coldDrink]=await Promise.all([getPopcorn,addButter,getColdDrinks])
    
    console.log(`${popcorn},${Butter},${coldDrink}`)
   
    return ticket;
   
   
}
preMovie().then((m)=>console.log(`person3:shows${m}`));

console.log('Person 4:shows ticket')
console.log('Person 5:shows ticket')

const createPost=async(post)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt:new Date().getTime()});
           const error=false;
           if(!error){
            resolve();
           }else{
            reject('Error:something Went wrong');
           }
          },0);
    });

}

const deletePost=async()=>{
    return setInterval(()=>{
         posts.pop();
       },2000);  

     }