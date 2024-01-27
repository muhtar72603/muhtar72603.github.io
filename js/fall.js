var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 定义樱花的参数
var particles = [];
var particleCount = 100;

// 生成樱花粒子
function createParticles() {
  for (var i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 4 + 1,
      color: 'rgba(255, 183, 197, 0.7)',
      speed: Math.random() * 2 + 0.5
    });
  }
}

// 绘制樱花
function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < particles.length; i++) {
    var particle = particles[i];

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = particle.color;
    ctx.fill();

    // 更新樱花位置
    particle.y += particle.speed;

    // 重新生成樱花
    if (particle.y > canvas.height) {
      particle.y = 0 - particle.radius;
      particle.x = Math.random() * canvas.width;
    }
  }
}

// 初始化
function init() {
  createParticles();
  animate();
}

// 动画循环
function animate() {
  drawParticles();
  requestAnimationFrame(animate);
}

// 窗口大小改变时重新初始化
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particles = [];
  createParticles();
});

// 启动动画
init();