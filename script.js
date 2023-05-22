let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
const submit = document.querySelector("#submitButton");
const crista = document.querySelector("#crista");
const vale = document.querySelector("#vale");
const comprimento = document.querySelector("#comprimento");

submit.addEventListener("click", () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawWave(parseInt(crista.value), parseInt(vale.value), parseInt(comprimento.value));
});

function rotateBezCur(ctx, posx, posy, crista, vale, comprimento) {
	ctx.beginPath();
	ctx.strokeStyle = "#FF3311";
	ctx.moveTo(25 + posx, 292 + posy);
	ctx.bezierCurveTo(25 + posx, 238 + posy - crista, 82 + posx + comprimento, 240 + posy - crista, 83 + posx + comprimento, 292 + posy);
	ctx.bezierCurveTo(83 + posx + comprimento, 343 + posy + vale, 138 + posx + comprimento*2, 345 + posy + vale, 140 + posx + comprimento*2, 292 + posy);
	ctx.stroke();
}

function drawWave(crista=0, vale=0, comprimento=0) {
	const numDeOndas = 100;
	for (let i = 0; i < numDeOndas; i++) {
			rotateBezCur(ctx, (i*115)+(comprimento*(i*2))-25, -240, crista, vale, comprimento);
	}
}
