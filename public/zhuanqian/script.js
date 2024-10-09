// 颜色库
const colorLibrary = ['#ff007f', '#ff8000', '#00ff80', '#00aaff', '#ffff00', '#ff00ff', '#00ffff', '#0000ff', 
                      '#e91e63', '#ff5722', '#4caf50', '#2196f3', '#ffc107', '#9c27b0', '#00bcd4', '#3f51b5',
                      '#c2185b', '#fb8c00', '#7cb342', '#0277bd', '#fdd835', '#8e24aa', '#00acc1', '#1565c0',
                      '#d32f2f', '#f57c00', '#388e3c', '#0288d1', '#fbc02d', '#ab47bc', '#00acc1', '#1976d2',
                      '#e6007f', '#ff6f00', '#00e676', '#0091ea', '#ffeb3b', '#e91e63', '#00bcd4', '#2196f3'];

// 随机选择4个颜色
function getRandomColors() {
    let colors = [];
    while (colors.length < 4) {
        const randomColor = colorLibrary[Math.floor(Math.random() * colorLibrary.length)];
        if (!colors.includes(randomColor)) {
            colors.push(randomColor);
        }
    }
    return colors;
}

// 应用随机颜色的渐变背景
function applyRandomGradientToClass(className) {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach(element => {
        const colors = getRandomColors();
        const gradient = `linear-gradient(45deg, ${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]})`;
        element.style.backgroundImage = gradient;
    });
}

// 页面加载时调用
window.onload = function() {
    applyRandomGradientToClass('ox1');
    applyRandomGradientToClass('ox2');
    applyRandomGradientToClass('ox3');
    applyRandomGradientToClass('ox4');
    applyRandomGradientToClass('oxx1');
    applyRandomGradientToClass('oxx2');
};

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
}, false);

document.addEventListener('keydown', function(e) {
  if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
    e.preventDefault();
  }
});

