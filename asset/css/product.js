var products = [
    {
        name: "LITHE BOXY HOODIE",
        color: ['yellow'],
        size: ['S', 'L'],
        price: "650.000",
        img: "./asset/img/allproduct/product/LITHEBOXYHOODIE.webp",
        imgHover: "./asset/img/allproduct/product-example/img-hover.gif",
        commonProperty: 'all',
        property: 'top',
    },
    {
        name: "LITHE BOXY HOODIE",
        color: ['red'],
        size: ['S', 'M'],
        price: "350.000",
        img: "./asset/img/allproduct/product/LITHEBOXYHOODIE.webp",
        imgHover: "./asset/img/allproduct/product-example/img-hover.gif",
        commonProperty: 'all',
        property: 'top',
    },
    {
        name: "LITHE BOXY HOODIE",
        color: ['blue'],
        size: ['M', 'L'],
        price: "450.000",
        img: "./asset/img/allproduct/product/LITHEBOXYHOODIE.webp",
        imgHover: "./asset/img/allproduct/product-example/img-hover.gif",
        commonProperty: 'all',
        property: 'bottom',
    },
    {
        name: "LITHE BOXY HOODIE",
        color: ['violet'],
        size: ['S', 'M', 'L'],
        price: "850.000",
        img: "./asset/img/allproduct/product/LITHEBOXYHOODIE.webp",
        imgHover: "./asset/img/allproduct/product-example/img-hover.gif",
        commonProperty: 'all',
        property: 'bottom',
    },
    {
        name: "LITHE BOXY HOODIE",
        color: ['green'],
        size: ['S', 'L'],
        price: "950.000",
        img: "./asset/img/allproduct/product/LITHEBOXYHOODIE.webp",
        imgHover: "./asset/img/allproduct/product-example/img-hover.gif",
        commonProperty: 'all',
        property: 'outerwear',
    },
    {
        name: "LITHE BOXY HOODIE",
        color: [ 'purple'],
        size: ['S', 'M', 'L'],
        price: "150.000",
        img: "./asset/img/allproduct/product/LITHEBOXYHOODIE.webp",
        imgHover: "./asset/img/allproduct/product-example/img-hover.gif",
        commonProperty: 'all',
        property: 'outerwear',
    },
    {
        name: "LITHE BOXY HOODIE",
        color: ['brown'],
        size: ['M', 'L'],
        price: "250.000",
        img: "./asset/img/allproduct/product/LITHEBOXYHOODIE.webp",
        imgHover: "./asset/img/allproduct/product-example/img-hover.gif",
        commonProperty: 'all',
        property: 'sale',
        percentPromotion: '40',
        cancelPrice: '1.000.000',
    },
    {
        name: "LITHE BOXY HOODIE",
        color: [ 'gray', 'black'],
        size: ['S', 'M'],
        price: "750.000",
        img: "./asset/img/allproduct/product/LITHEBOXYHOODIE.webp",
        imgHover: "./asset/img/allproduct/product-example/img-hover.gif",
        commonProperty: 'all',
        property: 'sale',
        percentPromotion: '40',
        cancelPrice: '1.000.000',
    },
]
var allProduct = products.filter(function(product) {
    return product.commonProperty === 'all'
})
var topProduct = products.filter(function(product) {
    return product.property === 'top'
})
var bottomProduct = products.filter(function(product) {
    return product.property === 'bottom'
})
var outerwearProduct = products.filter(function(product) {
    return product.property === 'outerwear'
})
var footProduct = products.filter(function(product) {
    return product.property === 'foot'
})
var hatProduct = products.filter(function(product) {
    return product.property === 'hat'
})
var bagProduct = products.filter(function(product) {
    return product.property === 'bag'
})
var saleProduct = products.filter(function(product) {
    return product.property === 'sale'
})
var productAll = $$(".js-product-all") 
var productTop = $(".js-product-top") 
var productBottom = $(".js-product-bottom")
var productOuterwear = $(".js-product-outerwear") 
var productFoot = $(".js-product-foot")
var productHat = $(".js-product-hat") 
var productBag = $(".js-product-bag") 
var productSale = $(".js-product-sale")


// show all product
var showAllProduct = allProduct.map(function(product) {
    var productColor = product.color.map(function(color) {
        return `
            <div class="product-item-color" style="background-color: ${color}"></div>
        `
    })
    var productSize = product.size.map(function(size) {
        return `
            <div class="product-item-size">${size}</div>
        `
    })
    return `
        <div class="col l-2-4 m-4 c-6">
            <div class="product-item">
                <img class="product-img" src="${product.img}" alt="">
                <img src="${product.imgHover}" alt="" class="product-img-hover">
                <div class="product-name">${product.name}</div>
                <div class="product-list-color">${productColor.join('')}</div>
                <div class="product-list-size">${productSize.join('')}</div>
                <div class="product-main-price">
                    <div class="product-prices">${product.price}đ</div>
                </div>
                <div class="js-btn-buy btn-buy">BUY NOW!</div>
            </div>
        </div>
    `
})
productAll.forEach(function(boxProducts) {
    boxProducts.innerHTML = showAllProduct.join('')
})
// show top product
var showTopProduct = topProduct.map(function(product) {
    var productColor = product.color.map(function(color) {
        return `
            <div class="product-item-color" style="background-color: ${color}"></div>
        `
    })
    var productSize = product.size.map(function(size) {
        return `
            <div class="product-item-size">${size}</div>
        `
    })
    return `
        <div class="col l-2-4 m-4 c-6">
            <div class="product-item">
                <img class="product-img" src="${product.img}" alt="">
                <img src="${product.imgHover}" alt="" class="product-img-hover">
                <div class="product-name">${product.name}</div>
                <div class="product-list-color">${productColor.join('')}</div>
                <div class="product-list-size">${productSize.join('')}</div>
                <div class="product-main-price">
                    <div class="product-prices">${product.price}đ</div>
                </div>
                <div class="js-btn-buy btn-buy">BUY NOW!</div>
            </div>
        </div>
    `
})
productTop.innerHTML = showTopProduct.join('')
// show bottom product
var showBottomProduct = bottomProduct.map(function(product) {
    var productColor = product.color.map(function(color) {
        return `
            <div class="product-item-color" style="background-color: ${color}"></div>
        `
    })
    var productSize = product.size.map(function(size) {
        return `
            <div class="product-item-size">${size}</div>
        `
    })
    return `
        <div class="col l-2-4 m-4 c-6">
            <div class="product-item">
                <img class="product-img" src="${product.img}" alt="">
                <img src="${product.imgHover}" alt="" class="product-img-hover">
                <div class="product-name">${product.name}</div>
                <div class="product-list-color">${productColor.join('')}</div>
                <div class="product-list-size">${productSize.join('')}</div>
                <div class="product-main-price">
                    <div class="product-prices">${product.price}đ</div>
                </div>
                <div class="js-btn-buy btn-buy">BUY NOW!</div>
            </div>
        </div>
    `
})
productBottom.innerHTML = showBottomProduct.join('')
// show outerwear product
var showOuterwearProduct = outerwearProduct.map(function(product) {
    var productColor = product.color.map(function(color) {
        return `
            <div class="product-item-color" style="background-color: ${color}"></div>
        `
    })
    var productSize = product.size.map(function(size) {
        return `
            <div class="product-item-size">${size}</div>
        `
    })
    return `
        <div class="col l-2-4 m-4 c-6">
            <div class="product-item">
                <img class="product-img" src="${product.img}" alt="">
                <img src="${product.imgHover}" alt="" class="product-img-hover">
                <div class="product-name">${product.name}</div>
                <div class="product-list-color">${productColor.join('')}</div>
                <div class="product-list-size">${productSize.join('')}</div>
                <div class="product-main-price">
                    <div class="product-prices">${product.price}đ</div>
                </div>
                <div class="js-btn-buy btn-buy">BUY NOW!</div>
            </div>
        </div>
    `
})
productOuterwear.innerHTML = showOuterwearProduct.join('')
// show foot product
var showFootProduct = footProduct.map(function(product) {
    var productColor = product.color.map(function(color) {
        return `
            <div class="product-item-color" style="background-color: ${color}"></div>
        `
    })
    var productSize = product.size.map(function(size) {
        return `
            <div class="product-item-size">${size}</div>
        `
    })
    return `
        <div class="col l-2-4 m-4 c-6">
            <div class="product-item">
                <img class="product-img" src="${product.img}" alt="">
                <img src="${product.imgHover}" alt="" class="product-img-hover">
                <div class="product-name">${product.name}</div>
                <div class="product-list-color">${productColor.join('')}</div>
                <div class="product-list-size">${productSize.join('')}</div>
                <div class="product-main-price">
                    <div class="product-prices">${product.price}đ</div>
                </div>
                <div class="js-btn-buy btn-buy">BUY NOW!</div>
            </div>
        </div>
    `
})
if(showFootProduct.join('') !== "") {
    productFoot.innerHTML = showFootProduct.join('')
}
// show hat product
var showHatProduct = hatProduct.map(function(product) {
    var productColor = product.color.map(function(color) {
        return `
            <div class="product-item-color" style="background-color: ${color}"></div>
        `
    })
    var productSize = product.size.map(function(size) {
        return `
            <div class="product-item-size">${size}</div>
        `
    })
    return `
        <div class="col l-2-4 m-4 c-6">
            <div class="product-item">
                <img class="product-img" src="${product.img}" alt="">
                <img src="${product.imgHover}" alt="" class="product-img-hover">
                <div class="product-name">${product.name}</div>
                <div class="product-list-color">${productColor.join('')}</div>
                <div class="product-list-size">${productSize.join('')}</div>
                <div class="product-main-price">
                    <div class="product-prices">${product.price}đ</div>
                </div>
                <div class="js-btn-buy btn-buy">BUY NOW!</div>
            </div>
        </div>
    `
})
if(showHatProduct.join('') !== "") {
    productHat.innerHTML = showHatProduct.join('')
}
// show bag product
var showBagProduct = bagProduct.map(function(product) {
    var productColor = product.color.map(function(color) {
        return `
            <div class="product-item-color" style="background-color: ${color}"></div>
        `
    })
    var productSize = product.size.map(function(size) {
        return `
            <div class="product-item-size">${size}</div>
        `
    })
    return `
        <div class="col l-2-4 m-4 c-6">
            <div class="product-item">
                <img class="product-img" src="${product.img}" alt="">
                <img src="${product.imgHover}" alt="" class="product-img-hover">
                <div class="product-name">${product.name}</div>
                <div class="product-list-color">${productColor.join('')}</div>
                <div class="product-list-size">${productSize.join('')}</div>
                <div class="product-main-price">
                    <div class="product-prices">${product.price}đ</div>
                </div>
                <div class="js-btn-buy btn-buy">BUY NOW!</div>
            </div>
        </div>
    `
})
if(showBagProduct.join('') !== "") {
    productBag.innerHTML = showBagProduct.join('')
}
// show sale product
var showSaleProduct = saleProduct.map(function(product) {
    var productColor = product.color.map(function(color) {
        return `
            <div class="product-item-color" style="background-color: ${color}"></div>
        `
    })
    var productSize = product.size.map(function(size) {
        return `
            <div class="product-item-size">${size}</div>
        `
    })
    return `
        <div class="col l-2-4 m-4 c-6">
            <div class="product-item">
                <img class="product-img" src="${product.img}" alt="">
                <img src="${product.imgHover}" alt="" class="product-img-hover">
                <div class="product-name">${product.name}</div>
                <div class="product-list-color">${productColor.join('')}</div>
                <div class="product-list-size">${productSize.join('')}</div>
                <div class="product-main-price">
                    <div class="product-percent-price">${product.percentPromotion}%</div>
                    <div class="product-prices">${product.price}đ</div>
                    <div class="product-cancel-price">${product.cancelPrice}đ</div>
                </div>
                <div class="js-btn-buy btn-buy">BUY NOW!</div>
            </div>
        </div>
    `
})
productSale.innerHTML = showSaleProduct.join('')
