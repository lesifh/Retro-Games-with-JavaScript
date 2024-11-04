class Player {
	constructor(game) {
		this.game = game;
		this.width = 100;
		this.height = 100;
		// 使得玩家在游戏区域底部中间
		this.x = this.game.width * 0.5 - this.width * 0.5;
		this.y = this.game.height - this.height;
		// 玩家移动的速度 每次移动5像素
		this.speed = 5;
	}
	draw(context) {
		// 描绘出玩家对象的矩形
		context.fillRect(this.x, this.y, this.width, this.height);
	}
	update() {
		// 移动位置
		this.x += this.speed;
	}
}

//projectile  炮弹 抛射体
class Projectile {

}

class Enemy {

}

// 游戏代码的主要逻辑
class Game {
	constructor(canvas) {
		this.canvas = canvas;
		this.width = this.canvas.width;
		this.height = this.canvas.height;
		this.player = new Player(this);
	}
	render(context) {
		this.player.draw(context);
		this.player.update();
	}
}
// load 事件在整个页面及所有依赖资源如样式表和图片都已完成加载时触发
window.addEventListener('load', function () {
	const canvas = document.getElementById('canvas1');
	// 创建内置的2d画布API实例
	const ctx = canvas.getContext('2d');
	// 不使用css设置画布大小，因为那样只会设置元素大小，确保画布不会扭曲
	// canvas画布默认大小是300*150，当在CSS设置画布大小比如300*300时，实际上是将原有的画布（300*150）进行了拉伸，会导致图片变形
	canvas.width = 600;
	canvas.height = 800;
	// 将元素大小和绘图表面大小设置为相同的值

	const game = new Game(canvas);
	// 渲染玩家对象

	function animate() {
		// 清空指定区域内的指定像素元素
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		game.render(ctx);
		window.requestAnimationFrame(animate);
	}
	animate();
})

