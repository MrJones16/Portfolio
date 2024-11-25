var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var imageData = ctx.getImageData(0, 0, canvas.getAttribute('width'), canvas.getAttribute('height'));
var pixels = imageData.data;
var noise = new WorleyNoise({ numPoints: 25 });
var img = noise.renderImage(imageData.width, { normalize: true });

for (var y = 0; y < imageData.height; ++y) {
    for (var x = 0; x < imageData.width; ++x) {
        var base = (y * imageData.width + x) * 4;
        pixels[base] = img[y * imageData.width + x] * 255;
        pixels[base + 1] = img[y * imageData.width + x] * 255;
        pixels[base + 2] = img[y * imageData.width + x] * 255;
        pixels[base + 3] = 255;
    }
}

ctx.putImageData(imageData, 0, 0);