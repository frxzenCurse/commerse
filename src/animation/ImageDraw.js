
export class ImageDraw {
  constructor(selector) {
    this.canvas = document.getElementById(selector)
    this.ctx = this.canvas.getContext('2d')
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }

  draw(image, x, y, rect) {
    const scaleRate = 1.5
    const width = rect.width * scaleRate
    const height = rect.height * scaleRate
    
    this.clear()
    this.ctx.drawImage(image, x - (width / 2), y - (height / 2), width, height)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}

export function mouseHandler(selector, imgSelector) {
  const canvas = new ImageDraw(selector);

  window.addEventListener('mousemove', (event) => {
    const target = event.target;
    const rect = target.getBoundingClientRect();

    if (target.classList.contains(imgSelector)) {
      canvas.draw(target, event.clientX, event.clientY, rect);
    } else {
      canvas.clear();
    }
  });
}