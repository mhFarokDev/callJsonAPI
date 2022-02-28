let showDevs = document.querySelector('.showDevs');
let showSingDevs = document.querySelector('.showSingDevs');
fetch('https://my-json-server.typicode.com/mhfarokdev/json-server/devs').then(data=> data.json()).then(dvData=>{

let allDevData = '';
    dvData.map(coreData =>{
        allDevData += `
        <div class="col-md-3 mb-4 "  data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showdetail(${coreData.id})">
        <div class="card pointRow" style="auto">
            <img class="card-img-top" src="${coreData.photo}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${coreData.name}</h5>
              <p class="card-text">${coreData.details}</p>
            </div>
              <a class="card-link btn btn-primary">Show Details</a>
            </div>
          </div>
        `
    })
    showDevs.innerHTML = allDevData;
})


function showdetail(id){
    fetch('https://my-json-server.typicode.com/mhfarokdev/json-server/devs/'+id).then(data=> data.json()).then(dvSingData=>{

        shoModel = `
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${dvSingData.name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-md-6">
                <img class="card-img" src="${dvSingData.photo}" alt="">
            </div>
    
            <div class="col-md-6">
              <h4>${dvSingData.name}</h4>
              <p class="text-muted">Age : ${dvSingData.age}</p>
              <p class="text-muted">Skill : ${dvSingData.skill}</p>
              <p class="text-muted">Location : ${dvSingData.location}</p>
             
            </div>
            <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur, voluptatum provident et quas asperiores! Quae, quasi mollitia deserunt quaerat voluptatibus facilis.</p>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
      </div>
        `

        showSingDevs.innerHTML = shoModel;


    })
    
}
