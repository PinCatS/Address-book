"use strict";

function print_triangle(count, symbol) {
	var out = symbol;
	for (var i = 0; i < count; ++i) {
		console.log(out);
		out += symbol;
	}
}

function chess_board() {
	var symbols = [ [' ', '#'], ['#', ' '] ];
	var out = '';
	for (var i = 0; i < 8; ++i) {
		for (var j = 0; j < 8; ++j) {
			out += symbols[ i % 2 ][ j % 2 ];
		}
		out += '\n';
	}
	return out;
}

print_triangle(7, '#');
console.log( chess_board() );