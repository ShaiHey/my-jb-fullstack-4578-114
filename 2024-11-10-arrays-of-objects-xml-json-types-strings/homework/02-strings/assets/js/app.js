const image = prompt("Please enter image file name:");

const message = image.endsWith(".jpg") || image.endsWith(".jpeg") || image.endsWith(".png") || image.endsWith(".gif") || image.endsWith(".tiff") || image.endsWith(".bmp") || image.endsWith(".webp") ? "Your file is image" : "This is not image";

document.write(message);