"use strict"

var MAX_FIELDS_NUM = 8;

var white_figures = [
	"images/ladya_white.png",
	"images/slon_white.png",
	"images/cony_white.png",
	"images/ferz_white.png",
	"images/korol_white.png",
	"images/cony_white.png",
	"images/slon_white.png",
	"images/ladya_white.png",
	"images/peshka_white.png",
	"images/peshka_white.png",
	"images/peshka_white.png",
	"images/peshka_white.png",
	"images/peshka_white.png",
	"images/peshka_white.png",
	"images/peshka_white.png",
	"images/peshka_white.png"
];

var black_figures = [
	"images/ladya_black.png",
	"images/slon_black.png",
	"images/cony_black.png",
	"images/korol_black.png", 
	"images/ferz_black.png",
	"images/cony_black.png",
	"images/slon_black.png",
	"images/ladya_black.png",
	"images/peshka_black.png",
	"images/peshka_black.png",
	"images/peshka_black.png",
	"images/peshka_black.png",
	"images/peshka_black.png",
	"images/peshka_black.png",
	"images/peshka_black.png",
	"images/peshka_black.png"
];

function generateTopLabels() {
	var top_labels = [];
	var alphas = [ 'A', 'B', 'C', 'D', 'F', 'G', 'H', 'I'];
	
	for (var i = 0; i < MAX_FIELDS_NUM; ++i) {
		var label_li = document.createElement('li');
		label_li.className = 'alphas';
		label_li.innerHTML = alphas[i];
		top_labels.push(label_li);
	}

	return top_labels;
}

function generateChessBoard() {
	var chess_board = [];

	for (var i = 0; i < MAX_FIELDS_NUM; ++i) {
		
		var label_li = document.createElement('li');
		label_li.className = 'digits';
		label_li.innerHTML = i;
		chess_board.push(label_li);

		for (var j = 0; j < MAX_FIELDS_NUM; ++j) {
			var li = document.createElement('li');
			li.className = (i % 2 == j % 2) ? 'field white' : 'field black';
			chess_board.push(li);
		}

		var label_li = document.createElement('li');
		label_li.className = 'digits';
		label_li.innerHTML = i;
		chess_board.push(label_li);

		var div = document.createElement('div');
		div.className = 'clear';
		chess_board.push(div);
	}

	return chess_board;
}

function drawChessBoard() {
	var labels = generateTopLabels();
	var chess_board = generateChessBoard();

	/* Adding to DOM */
	/* Adding top labels A, B, C, ...*/
	var ul = document.createElement('ul');
	ul.id = 'top_labels';
	chessboard.appendChild(ul);

	/* Adding fields itself and side labels */
	ul = document.createElement('ul');
	ul.id = 'fields';
	chessboard.appendChild(ul);

	for (var i = 0; i < labels.length; ++i)
		top_labels.appendChild(labels[i]);

	for (var i = 0; i < chess_board.length; ++i)
		fields.appendChild(chess_board[i]);

	/* Add white figures */
	var figureContainers = document.getElementsByClassName("field");
	console.log(figureContainers);

	for (var i = 0; i < MAX_FIELDS_NUM * 2; ++i){
		var img = document.createElement('img');
		img.setAttribute('src', black_figures[i])
		figureContainers[i].appendChild(img);
	}

	/* Adding black figures */
	for (var i = 0; i < MAX_FIELDS_NUM * 2; ++i){
		var img = document.createElement('img');
		img.setAttribute('src', white_figures[i]);
		figureContainers[figureContainers.length - 1 - i].appendChild(img);
	}
}

drawChessBoard();