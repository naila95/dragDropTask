fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((response) => {
    let arrCard = response.map((item) => {
      return `
        <div class="card col-sm-3 mb-3">
        <img src="${item.url}" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">${item.id}</h5>
          <p class="card-text">
            ${item.title}
          </p>
        </div>
      </div>
        `;
    });

    let html = arrCard.join(" ");
    document.querySelector(".row").innerHTML = html;
  });
