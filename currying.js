const add1 = a => b => c => a+b+c

console.log(add1(1)(2)(7))

// через toString
const add2 = x => {
	let cur = x;
	const f = y => {
		cur += y
		return f
	}
	f.toString = () => cur;
	return f
}

console.log(add2(1)(2)(7)(4) == 14) // true

// через agruments
const add3 = x => {
	let cur = x;
	return function f(y) {
		if(!arguments.length){
			return cur
		}
		cur += y;
		return f;
	}
}

console.log(add3(1)(2)(7)(4)())

// через объект
const add4 = x => {
	let cur = x;
	return function f(y) {
		cur += y;
		f.result = cur;
		return f;
	}
}

console.log(add4(1)(2)(7)(4).result)

// через прототип
function converter (factor, symbol, input){
  return input * factor + symbol;
}
Function.prototype.curry = function(){
  var args = Array.from(arguments);
  var self = this;
  return function(){
    return self.apply(null, args.concat(Array.from(arguments)))
  }
}
var milesToKm = converter.curry(1.62, 'km');
console.log(milesToKm(3));