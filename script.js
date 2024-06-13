// 获取图片容器和当前显示的图片元素
const imageContainer = document.getElementById('image-container');
const images = imageContainer.getElementsByTagName('img');

let currentImageIndex = 0; // 记录当前显示的图片索引

// 函数：切换到下一张图片
function switchImage() {
    // 隐藏当前显示的图片
    images[currentImageIndex].style.display = 'none';
    // 更新索引，如果到达最后一张则回到第一张
    currentImageIndex = (currentImageIndex + 1) % images.length;
    // 显示下一张图片
    images[currentImageIndex].style.display = 'block';
}

// 为图片容器添加点击事件监听器
imageContainer.addEventListener('click', switchImage);