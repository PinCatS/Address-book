"use strict";

function print_triangle(count, symbol) {
	var out = symbol;
	for (var i = 0; i < count; ++i) {
		console.log(out);
		out += symbol;
	}
}

function print_chess_board(count, symbol) {
	var symbols = [ [' ', symbol], [symbol, ' '] ];
	var out = '';
	for (var i = 0; i < count; ++i) {
		for (var j = 0; j < count; ++j) {
			out += symbols[ i % 2 ][ j % 2 ];
		}
		out += '\n';
	}
	console.log(out);
}

print_triangle(7, '#');
print_chess_board(8, '#');