const photos = [
    'Gallery6-111238.jpg',
    'Gallery3-WA0024.jpg',
    'Gallery3-WA0034.jpg',
    'Gallery3-WA0043.jpg',
    'Gallery3-WA0049.jpg',
    'Gallery3-WA0044 (2).jpg',
    'Gallery3-WA0044 (3).jpg',
    'Gallery3-WA0050.jpg',
    'Gallery3-WA0044 (6).jpg',
    'Gallery1-WA001.jpg',
    'Gallery1-WA0006.jpg',
    'Gallery1-WA0007.jpg',
    'Gallery1-WA0007 (2).jpg',
    'Gallery1-WA0009.jpg',
    'Gallery1-WA0010.jpg',
    'Gallery1-WA0012.jpg',
    'Gallery1-WA0014.jpg',
    'Gallery1-WA0020.jpg',
    'Gallery1-WA0024.jpg',
    'Gallery1-WA0027.jpg',
    'Gallery1-WA0029.jpg',
    'Gallery1-WA0069.jpg',
    'Gallery1-WA0070.jpg',
    'Gallery1-WA0071.jpg',
    'Gallery2-WA0064.jpg',
    'Gallery2-WA0005.jpg',
    'Gallery2-WA0007.jpg',
    'Gallery2-WA0009.jpg',
    'Gallery2-WA0016.jpg',
    'Gallery2-WA0066.jpg',
    'Gallery2-WA0067.jpg',
    'Gallery5-WA0008.jpg',
    'Gallery5-WA0011.jpg',
    'Gallery5-WA0054.jpg',
    'Gallery4-WA0008.jpg',
    'Gallery4-WA0013.jpg',
    'Gallery4-WA0022.jpg',
    'Gallery4-WA0025.jpg',
    'Gallery4-WA0026.jpg',
    'Gallery4-WA0028.jpg',
    'Gallery4-WA0031.jpg',
    'Gallery4-WA0031 (2).jpg',
    'Gallery4-WA0032.jpg',
    'Gallery4-WA0033.jpg',
    'Gallery4-WA0034.jpg',
    'Gallery4-WA0034 (2).jpg',
    'Gallery4-WA0035.jpg',
    'Gallery4-WA0039.jpg',
    'Gallery4-WA0040.jpg',
    'Gallery4-WA0041.jpg',
    'Gallery4-WA0043 (2).jpg',
    'Gallery4-WA0043.jpg',
    'Gallery4-WA0046.jpg',
    'Gallery4-WA0049.jpg',
    'Gallery4-WA0052.jpg',
    'Gallery4-WA0064.jpg',
    'Gallery4-WA0067.jpg',
    'Gallery4-WA0070.jpg',
    'Gallery4-WA0073.jpg',
    'Gallery4-WA0055.jpg',
    'Gallery4-WA0008.jpg',
    'Gallery4-WA0079.jpg'
];

const photoGalleryContainer = document.querySelector('.photo-gallery-container');

let photoCardHTML = ''

photos.forEach(photo =>{
    const html = `
    <div class="photo-card swiper-slide">
    <img src="IMAGES/${photo}" alt="">
    </div>
    `

    photoCardHTML += html;
})

photoGalleryContainer.innerHTML = photoCardHTML;