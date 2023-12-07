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
    return `
        <div class="col l-2-4 m-4 c-6">
            <div onclick="showDetailProduct('${product.name}', '${product.color}', '${product.size}', '${product.price}', '${product.imgs}', '${product.property}', '${product.propertyPromotion}')" class="product-item">
                <img class="product-img" src="${product.imgs[0]}" alt="">
                <img src="${product.imgs[1]}" alt="" class="product-img-hover">
                <div class="product-name">${product.name}</div>
                <div class="product-main-price">
                    <div class="product-prices">${product.price}đ</div>
                </div>
                <a href="https://www.instagram.com/ryanflorida.clo/" class="js-btn-buy btn-buy">BUY NOW!</a>
            </div>
        </div>
    `
})
productAll.forEach(function(boxProducts) {
    boxProducts.innerHTML = showAllProduct.join('')
})
// show top product
var showTopProduct = topProduct.map(function(product) {
    return `
        <div class="col l-2-4 m-4 c-6">
            <div onclick="showDetailProduct('${product.name}', '${product.color}', '${product.size}', '${product.price}', '${product.imgs}', '${product.property}', '${product.propertyPromotion}')" class="product-item">
                <img class="product-img" src="${product.imgs[0]}" alt="">
                <img src="${product.imgs[1]}" alt="" class="product-img-hover">
                <div class="product-name">${product.name}</div>
                <div class="product-main-price">
                    <div class="product-prices">${product.price}đ</div>
                </div>
                <a href="https://www.instagram.com/ryanflorida.clo/" class="js-btn-buy btn-buy">BUY NOW!</a>
            </div>
        </div>
    `
})
productTop.innerHTML = showTopProduct.join('')
// show bottom product
var showBottomProduct = bottomProduct.map(function(product) {
    return `
        <div class="col l-2-4 m-4 c-6">
            <div onclick="showDetailProduct('${product.name}', '${product.color}', '${product.size}', '${product.price}', '${product.imgs}', '${product.property}', '${product.propertyPromotion}')" class="product-item">
                <img class="product-img" src="${product.imgs[0]}" alt="">
                <img src="${product.imgs[1]}" alt="" class="product-img-hover">
                <div class="product-name">${product.name}</div>
                <div class="product-main-price">
                    <div class="product-prices">${product.price}đ</div>
                </div>
                <a href="https://www.instagram.com/ryanflorida.clo/" class="js-btn-buy btn-buy">BUY NOW!</a>
            </div>
        </div>
    `
})
productBottom.innerHTML = showBottomProduct.join('')
// show outerwear product
var showOuterwearProduct = outerwearProduct.map(function(product) {
    return `
        <div class="col l-2-4 m-4 c-6">
            <div onclick="showDetailProduct('${product.name}', '${product.color}', '${product.size}', '${product.price}', '${product.imgs}', '${product.property}', '${product.propertyPromotion}')" class="product-item">
                <img class="product-img" src="${product.imgs[0]}" alt="">
                <img src="${product.imgs[1]}" alt="" class="product-img-hover">
                <div class="product-name">${product.name}</div>
                <div class="product-main-price">
                    <div class="product-prices">${product.price}đ</div>
                </div>
                <a href="https://www.instagram.com/ryanflorida.clo/" class="js-btn-buy btn-buy">BUY NOW!</a>
            </div>
        </div>
    `
})
productOuterwear.innerHTML = showOuterwearProduct.join('')
// show foot product
var showFootProduct = footProduct.map(function(product) {
    return `
        <div class="col l-2-4 m-4 c-6">
            <div onclick="showDetailProduct('${product.name}', '${product.color}', '${product.size}', '${product.price}', '${product.imgs}', '${product.property}', '${product.propertyPromotion}')" class="product-item">
                <img class="product-img" src="${product.imgs[0]}" alt="">
                <img src="${product.imgs[1]}" alt="" class="product-img-hover">
                <div class="product-name">${product.name}</div>
                <div class="product-main-price">
                    <div class="product-prices">${product.price}đ</div>
                </div>
                <a href="https://www.instagram.com/ryanflorida.clo/" class="js-btn-buy btn-buy">BUY NOW!</a>
            </div>
        </div>
    `
})
if(showFootProduct.join('') !== "") {
    productFoot.innerHTML = showFootProduct.join('')
}
// show hat product
var showHatProduct = hatProduct.map(function(product) {
    return `
        <div class="col l-2-4 m-4 c-6">
            <div onclick="showDetailProduct('${product.name}', '${product.color}', '${product.size}', '${product.price}', '${product.imgs}', '${product.property}', '${product.propertyPromotion}')" class="product-item">
                <img class="product-img" src="${product.imgs[0]}" alt="">
                <img src="${product.imgs[1]}" alt="" class="product-img-hover">
                <div class="product-name">${product.name}</div>
                <div class="product-main-price">
                    <div class="product-prices">${product.price}đ</div>
                </div>
                <a href="https://www.instagram.com/ryanflorida.clo/" class="js-btn-buy btn-buy">BUY NOW!</a>
            </div>
        </div>
    `
})
if(showHatProduct.join('') !== "") {
    productHat.innerHTML = showHatProduct.join('')
}
// show bag product
var showBagProduct = bagProduct.map(function(product) {
    return `
        <div class="col l-2-4 m-4 c-6">
            <div onclick="showDetailProduct('${product.name}', '${product.color}', '${product.size}', '${product.price}', '${product.imgs}', '${product.property}', '${product.propertyPromotion}')" class="product-item">
                <img class="product-img" src="${product.imgs[0]}" alt="">
                <img src="${product.imgs[1]}" alt="" class="product-img-hover">
                <div class="product-name">${product.name}</div>
                <div class="product-main-price">
                    <div class="product-prices">${product.price}đ</div>
                </div>
                <a href="https://www.instagram.com/ryanflorida.clo/" class="js-btn-buy btn-buy">BUY NOW!</a>
            </div>
        </div>
    `
})
if(showBagProduct.join('') !== "") {
    productBag.innerHTML = showBagProduct.join('')
}
// show sale product
var showSaleProduct = saleProduct.map(function(product) {
    return `
        <div class="col l-2-4 m-4 c-6">
            <div onclick="showDetailProduct('${product.name}', '${product.color}', '${product.size}', '${product.price}', '${product.imgs}', '${product.property}', '${product.propertyPromotion}')" class="product-item">
                <img class="product-img" src="${product.imgs[0]}" alt="">
                <img src="${product.imgs[1]}" alt="" class="product-img-hover">
                <div class="product-name">${product.name}</div>
                <div class="product-main-price">
                    <div class="product-percent-price">-${product.propertyPromotion[0]}%</div>
                    <div class="product-prices">${product.price}đ</div>
                    <div class="product-cancel-price">${product.propertyPromotion[1]}đ</div>
                </div>
                <a href="https://www.instagram.com/ryanflorida.clo/" class="js-btn-buy btn-buy">BUY NOW!</a>
            </div>
        </div>
    `
})
productSale.innerHTML = showSaleProduct.join('')


// show detail
const mainDetail = $('.js-main-detail');
const containerDetail = document.createElement('div');

function showDetailProduct(...info) {
    const [ name, colors, sizes, price, imgs, property, promotionValues ] = info
    const color = colors.split(',')
    const size = sizes.split(',')
    const allImg = imgs.split(',')
    const promotionValue = promotionValues.split(',')

    const htmlImg = allImg.map((imgChild) => {
        return `
        <img src="${imgChild}" alt="">
        `
    })
    const htmlKnot = allImg.map((knot) => {
        return `
            <li class="item-img"></li>
        `
    })
    const htmlColor = color.map((colorChild) => {
        return `
            <div class="product-detail-color-item" title="${colorChild}" style="background-color: ${colorChild}"></div>
        `
    })
    const htmlSize = size.map((sizeChild) => {
        return `
            <div class="product-detail-size-item">${sizeChild}</div>
        `
    })
    
    if(mainDetail) {
        containerDetail.classList.add('container-detail', 'row');
        if(property === 'sale') {
            containerDetail.innerHTML = `
                <i onclick="detailBack()" class="product-detail-back fa-solid fa-arrow-left"></i>
                <div class="col l-6 l-o-1 m-8 m-o-2 c-12 product-detail-imgs">
                    <div class="carousel-detail">
                        <div class="slider-detail">${htmlImg.join('')}</div>
                        <div class="controls-detail">
                            <span class="arrow left"><i class="fa-solid fa-angle-left"></i></span>
                            <span class="arrow right"><i class="fa-solid fa-angle-right"></i></span>
                        </div>
                        <ul class='list-img'>${htmlKnot.join('')}</ul>
                    </div>
                </div>
                <div class="col l-4 l-o-1 m-10 m-o-1 c-10 c-o-1 product-detail-info">
                    <div class="product-detail-name">${name}</div>
                    <div class="product-detail-main-price">
                        <div class="product-detail-percent">-${promotionValue[0]}%</div>
                        <div class="product-detail-price">${price}đ</div>
                        <div class="product-detail-cancel">${promotionValue[1]}đ</div>
                    </div>
                    <div class="product-detail-color">${htmlColor.join('')}</div>
                    <div class="product-detail-size">${htmlSize.join('')}</div>
                    <a href="https://www.instagram.com/ryanflorida.clo/" class="btn-buy-detail">BUY NOW!</a>
                </div>
            `
        } else {
            containerDetail.innerHTML = `
                <i onclick="detailBack()" class="product-detail-back fa-solid fa-arrow-left"></i>
                <div class="col l-6 l-o-1 m-8 m-o-2 c-12 product-detail-imgs">
                    <div class="carousel-detail">
                        <div class="slider-detail">${htmlImg.join('')}</div>
                        <div class="controls-detail">
                            <span class="arrow left"><i class="fa-solid fa-angle-left"></i></span>
                            <span class="arrow right"><i class="fa-solid fa-angle-right"></i></span>
                        </div>
                        <ul class='list-img'>${htmlKnot.join('')}</ul>
                    </div>
                </div>
                <div class="col l-4 l-o-1 m-10 m-o-1 c-10 c-o-1 product-detail-info">
                    <div class="product-detail-name">${name}</div>
                    <div class="product-detail-main-price">
                        <div class="product-detail-price">${price}</div>
                    </div>
                    <div class="product-detail-color">${htmlColor.join('')}</div>
                    <div class="product-detail-size">${htmlSize.join('')}</div>
                    <a href="https://www.instagram.com/ryanflorida.clo/" class="btn-buy-detail">BUY NOW!</a>
                </div>
            `
        }
        mainDetail.appendChild(containerDetail)
    }
    handleSlide(allImg)
    mainDetail.classList.add('open');
}
function detailBack() {
    mainDetail.classList.remove('open');
    mainDetail.removeChild(containerDetail)
}
// modifier detail

function handleSlide(listImg) {
    const slider = document.querySelector('.slider-detail');
    const leftArrow = document.querySelector('.controls-detail .left');
    const rightArrow = document.querySelector('.controls-detail .right');
    const changeSections = document.querySelectorAll('.item-img');


    lengthListImg = listImg.length;
    var sectionIndex = 0,
        number = -100 / lengthListImg,
        calcu,
        fullPercent = 100;
    lengthIndexListImg = lengthListImg - 1;
    calcuWidth = fullPercent * lengthListImg;
    slider.style.width = `${calcuWidth}%`

    function handleChangeSection() {
        calcu = sectionIndex * number;
        slider.style.transform = `translate(${calcu}%)`;
        if(document.querySelector('.item-img.selected')) {
            document.querySelector('.item-img.selected').classList.remove('selected');
        }
    }
    rightArrow.addEventListener('click', () => {
        sectionIndex = (sectionIndex < lengthIndexListImg) ? sectionIndex + 1 : lengthIndexListImg;
        handleChangeSection()
        changeSections[sectionIndex].classList.add('selected');
    })
    leftArrow.addEventListener('click', () => {
        sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
        handleChangeSection()
        changeSections[sectionIndex].classList.add('selected');
    })
    changeSections.forEach((changeSection, index) => {
        changeSection.onclick = () => {
            sectionIndex = index;
            handleChangeSection()
            changeSection.classList.add('selected');
        }
    }) 
    
}