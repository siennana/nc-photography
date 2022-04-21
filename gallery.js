class GalleryImageLink extends HTMLElement {
  constructor() {
    super();
    this.source = this.getAttribute('src');
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .img-container {
          display: inline-block;
          width: 100%;
          margin: 0 0 1rem 0;
        }
        .img-container img {
          display: block;
          width: 100%;
        }
      </style>

      <div class="img-container">
        <a href="#">
          <img src="`+ this.source +`"/>
        </a>
      </div>
    `;
  }
}

customElements.define('gallery-image-link', GalleryImageLink);

var images = "./assets/images/";

const imageArr = [
  "https://images-pw.pixieset.com/elementfield/640112631/ClosetByAlexus-438-24748f36.jpg",
  "https://images-pw.pixieset.com/elementfield/640112631/ClosetByAlexus-314-6f1cc357.jpg",
  "https://images-pw.pixieset.com/elementfield/640112631/ClosetByAlexus-488-44a0ef68.jpg",
  "https://images-pw.pixieset.com/elementfield/640112631/MikaAntEngagement-69-1d987084.jpg",
  "https://images-pw.pixieset.com/elementfield/640112631/crspybcnedites-23-2cd008e2.jpg",
  "https://images-pw.pixieset.com/elementfield/640112631/LaurenBusiness-18-bf8cba8a.jpg",
  "https://images-pw.pixieset.com/elementfield/640112631/ClosetByAlexus-318-76ea196a.jpg",
  "https://images-pw.pixieset.com/elementfield/640112631/ClosetByAlexus-506-2d9a2404.jpg",
  "https://images-pw.pixieset.com/elementfield/640112631/JillGradPhotos-138-9d9f7609.jpg",
  "https://images-pw.pixieset.com/elementfield/640112631/crspybcnedites-29-2c3c4b01.jpg"
]

imageArr.forEach(e => {
  var image = '<gallery-image-link src='+ e +'></gallery-image-link>';
  $(`#gallery-container`).append(image);
});