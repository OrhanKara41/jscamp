//---------******---------------******-----------
//map fonksiyonu. map yapmamış olsak sonradan yeni bir eleman ekleyebiliyoruz nesne olduğu için. map bu işe yarıyor.
let cart = [
    {id:1,productName:"Telefon",quantity:3,unitPrice:4000},
    {id:2,productName:"Bardak",quantity:2,unitPrice:30},
    {id:3,productName:"Kalem",quantity:1,unitPrice:20},
    {id:4,productName:"Şarj Cihazı",quantity:2,unitPrice:100},
    {id:5,productName:"Kitap",quantity:3,unitPrice:30},
    {id:6,productName:"Pot",quantity:5,unitPrice:150}
]

cart.map(product=>console.log(product.productName)) //Bu şekilde içerisinde gezip isimlerini yazdırıyoruz. product o anlık takma isim
//
cart.map(product=>{
    console.log(product.productName+" : "+product.unitPrice * product.quantity)
})

//
console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName+" : "+product.unitPrice * product.quantity+"</li>")
})
console.log("<ul>")


//---------******---------------******-----------
//filter fonksiyonu aramalarda veya filtrelemelerde kullanılır.

let quantityOver2 =  cart.filter(product=>product.quantity>2) //array gibi geziyor şarta uyanları yeni bir array olan quantityOver2 a tıyor.
console.log(quantityOver2)

//--------------********--------------************
//reduce fonksiyonu. Örnek olarak sepetteki toplamı almak için.
//iki tane parametre veriyoruz. Son verdiğimiz 0 ise ilk başlangıç değeri
let total = cart.reduce((acc,product)=>acc+product.unitPrice * product.quantity,0)
console.log(total)


