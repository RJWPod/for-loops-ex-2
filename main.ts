// What is the product of 1x2x3x4x=
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 3; index++) {
        Product = Product * (index + 1)
    }
    basic.showNumber(Product)
})
let Product = 0
Product = 1
basic.forever(function () {
	
})
