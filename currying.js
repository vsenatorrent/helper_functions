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