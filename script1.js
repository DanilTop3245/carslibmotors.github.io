const cars = [
  {
    id: 1,
    model: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://luxservis.com.ua/image/cache/catalog/autogallery/hondacivic-600x400.jpg",
  },
  {
    id: 2,
    model: "Audi",
    type: "Q7",
    price: 19000,
    img: "https://luxservis.com.ua/image/cache/catalog/autogallery/audiq7new-600x400.png",
  },
  {
    id: 3,
    model: "BMW",
    type: "X7",
    price: 33000,
    img: "https://cdn.wheel-size.com/automobile/body/bmw-x7-2018-2022-1677125794.9426107.jpg",
  },
  {
    id: 4,
    model: "Ford",
    type: "Escape",
    price: 18000,
    img: "https://images.dealer.com/ddc/vehicles/2024/Ford/Escape/SUV/still/front-left/front-left-640-en_US.jpg",
  },
  {
    id: 5,
    model: "Mercedes",
    type: "GLA",
    price: 25000,
    img: "https://www.2dvornika.com.ua/public/images/cars/mbgla2.jpg",
  },
  {
    id: 6,
    model: "Toyota",
    type: "Camry",
    price: 17000,
    img: "https://avatars.mds.yandex.net/get-autoru-vos/4392607/20c5222c8e6962fd03bbdd528bf939dc/1200x900",
  },
  {
    id: 7,
    model: "Tesla",
    type: "Model S",
    price: 80000,
    img: "https://www.electrive.net/media/2023/09/tesla-model-s-allradantrieb-2023-01-min-1400x700.jpg",
  },
  {
    id: 8,
    model: "Lexus",
    type: "RX 350",
    price: 45000,
    img: "https://www.sberleasing.ru/upload/resize_cache/webp/sbl.ilsa/808/12sj23r2vn4x6nxe4s10fbt6n4ndl3da/8cb911943c7955aac5c24df5aa24d2c8.webp",
  },
  {
    id: 9,
    model: "Chevrolet",
    type: "Tahoe",
    price: 60000,
    img: "https://infoshina.com.ua/media/stepbystep_search/thumbs/0oPGswXVf9YVpB8pOeQofGG05d94pmTypylL5qjW.900x600.jpg?v=fe1efc91f7791e00e05c72c56a9bb887",
  },
  {
    id: 10,
    model: "Porsche",
    type: "Macan",
    price: 57000,
    img: "https://png.klev.club/uploads/posts/2024-04/png-klev-club-kunm-p-porsh-png-31.png",
  },
  {
    id: 11,
    model: "Nissan",
    type: "Altima",
    price: 15000,
    img: "https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_middle_east/vehicles/altima/MY24/grades/NEW-ALTIMA-Sport%2BOPT.jpg",
  },
  {
    id: 12,
    model: "Volkswagen",
    type: "Tiguan",
    price: 21000,
    img: "https://cf-cdn-v6.volkswagen.at/media/Content_Model_Equipment_Lightbox_Child_MediaBig_Image_Component/64322-978063_lightbox-671212-mediaBig-child/dh-1143-00fe24/26e4467b/1727083566/new-tiguan-elegance.jpg",
  },
  {
    id: 13,
    model: "Mazda",
    type: "CX-5",
    price: 28000,
    img: "https://acdata.autoconsole.com.au/img-others/6611.webp",
  },
  {
    id: 14,
    model: "Jeep",
    type: "Grand Cherokee",
    price: 50000,
    img: "https://www.jeep.hu/content/dam/jeep/cherokee/new-cherokee/567x396.png",
  },
];


const elements = {
  form: document.querySelector(".js-form"),
  container: document.querySelector(".js-list"),
};

elements.container.insertAdjacentHTML("afterbegin", createMarkup(cars));
elements.form.addEventListener('submit', handlerSearch)




function createMarkup(arr) {
  return arr
    .map(
      ({ id, model, type, price, img }) => `
        <li class="car-card" data-car-id="${id}">
            <img src="${img}" alt="${model}" class="car-image">
            <h2 class="car-title">${model}</h2>
            <h3 class="car-type">${type}</h3>
            <span class="car-price">${price} $</span>
        </li>`
    )
    .join("");
}

function handlerSearch(evt) {
  evt.preventDefault();
  const { query, options } = evt.currentTarget.elements;
  const queryValue = query.value.toLowerCase();
  const key = options.value;
  const result = cars.filter((car) =>
    car[key].toLowerCase().includes(queryValue)
  );
  elements.container.innerHTML = createMarkup(result)
  evt.currentTarget.reset()

}