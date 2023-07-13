const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const getGallaryListEl = document.querySelector(".gallery");
getGallaryListEl.classList.add("img-list");
console.log(getGallaryListEl);

// const imageAddEl = imagesArray => {
//   return imagesArray.map(element => {
//     const itemCreateEl = document.createElement("li");
//     itemCreateEl.classList.add("img-item");
//     const imgCreateEl = document.createElement("img");
//     imgCreateEl.src = element.url;
//     imgCreateEl.alt = element.alt;
//     itemCreateEl.append(imgCreateEl);
    
//     return itemCreateEl;
//   })
// }

// getGallaryListEl.append(...imageAddEl(images));

const imageAddEl = imagesArray => {
  return imagesArray.map(({url, alt}) => {
    return `<li class="img-item"><img src="${url}" alt="${alt}" width="360"/></li>`;
  }).join("");
};

getGallaryListEl.insertAdjacentHTML('afterbegin', imageAddEl(images));