const getAllData =()=>{
    fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    .then(res=> res.json())
    .then(data=> console.log(data.data.tools))
}




getAllData()