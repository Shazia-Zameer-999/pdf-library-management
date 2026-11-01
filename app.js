

// document.getElementById('fetch_btn').addEventListener('click',function(){
//     console.log('Button clicked');
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => {
//         if (!response.ok){
//             throw new Error('Network response was not ok');≤
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//         data.title = data.title ?? 'No title';
//         data.userId = data.userId ?? 'No user ID';
//         const library=document.getElementById('library');
//         library.innerHTML= data.title + '<br>' + data.userId + '<br>' + data.body;
//         console.log(data.title);
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });


// })

document.getElementById('fetch_btn').addEventListener('click',function(){
    console.log("button clicked");
    fetch('http://127.0.0.1:5000/library')
    .then(response =>{
        if (!response.ok){
            throw new Error('request failed');

        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const library=document.getElementById('library');
        library.innerHTML= data.title + '<br>' + data.userId + '<br>' + data.body;
        console.log(data.title);    
    })
    .catch(error =>{
        console.error('Error fetching data:', error);
    })

})