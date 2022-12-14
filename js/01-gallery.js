import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
    </div>`
  )
  .join("");
gallery.innerHTML = markup;

gallery.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const lightboxModal = basicLightbox.create(
    `<img width="1280" height="720" src="${evt.target.dataset.source}">`
  );
  lightboxModal.show();
  if (!basicLightbox.visible()) {
    return;
  } else {
    document.addEventListener(
      "keyup",
      (evt) => {
        if (evt.code === "Escape") {
          lightboxModal.close();
          //   console.log(evt);
        }
      },
      { once: true }
    );
  }
}

// function onEscape() {
//   document.addEventListener(
//     "keyup",
//     (evt) => {
//       if (evt.code === "Escape") {
//         basicLightbox.close();
//         console.log(evt.code);
//       }
//     },
//     { once: true }
//   );
// }
