export const defoultPriceMinMax=[0,10000];
export const category = [
    {
        id: 1,
        name: "Women"
    },
    {
        id: 2,
        name: "Men"
    },
    {
        id: 3,
        name: "Footwear"
    },
    {
        id: 4,
        name: "Bags And Backpacks"
    },
    {
        id: 5,
        name: "Accessories"
    }
];

export const colorList = [
    {
        id: 1,
        title: "Black"
    },
    {
        id: 2,
        title: "Blue"
    },
    {
        id: 3,
        title: "Red"
    },
    {
        id: 4,
        title: "White"
    },
    {
        id: 5,
        title: "Gray"
    }
];

export const sortList = [
    {
        id: 1,
        name: 'Default sorting'
    },
    {
        id: 2,
        name: 'Sort by popularity'
    },
    {
        id: 3,
        name: 'Sort by average rating'
    },
    {
        id: 4,
        name: 'Sort by newness'
    },
    {
        id: 5,
        name: 'Sort by price: low to high'
    },
    {
        id: 6,
        name: 'Sort by price: high to low'
    }
];
export function ThisCatItem({id,type}){
    if(type==='length'){
        return productBlock.filter(res=>res.category_id===id).length
    }else if(id==='all'){
        return productBlock
    }
    return productBlock.filter(res=>res.category_id===id)

}
export function ThisColorItem({id}){
    console.log(id)
        return productBlock.filter(res=>res.color_id===id).length


}
export function AllItem(){
  return productBlock.length
}

export const productBlock = [
    {
        id: 1,
        category_id: 1,
        color_id: 4,
        title: "TRY ME HOODIE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/2f0/4680071136417_mn_mod..jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 2,
        category_id: 1,
        color_id: 1,
        title: "TRY ME HOODIE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/7c4/4680071136486_mn_mod..jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 3,
        category_id: 1,
        color_id: 5,
        title: "TRY ME HOODIE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/ea9/4680071177731_mn_mod..jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 4,
        category_id: 1,
        color_id: 4,
        title: "TRY ME HOODIE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/9de/4680071128771_mn_mod..jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 5,
        category_id: 1,
        color_id: 2,
        title: "TRY ME HOODIE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/776/4680071171654_mn_mod..jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 6,
        category_id: 1,
        color_id: 3,
        title: "TRY ME HOODIE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/686/4680488359393_mn.jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 7,
        category_id: 1,
        color_id: 2,
        title: "TRY ME HOODIE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/3fd/4680488205140_mn.jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 8,
        category_id: 1,
        color_id: 1,
        title: "TRY ME HOODIE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/b65/4680488204860_mn.jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 9,
        category_id: 1,
        color_id: 5,
        title: "TRY ME HOODIE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/aa5/4680488204792_mn.jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 10,
        category_id: 2,
        color_id: 4,
        title: "FULL ZIP HOODIE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/f5c/4680071131429_mn_mod..jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 11,
        category_id: 2,
        color_id: 1,
        title: "FULL ZIP HOODIE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/204/4680071131450_mn_mod..jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 12,
        category_id: 2,
        color_id: 3,
        title: "FULL ZIP HOODIE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/a95/4680071130606_mn_mod..jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 13,
        category_id: 2,
        color_id: 2,
        title: "FULL ZIP HOODIE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/b0c/4680071130668_mn_mod..jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 14,
        category_id: 2,
        color_id: 5,
        title: "FULL ZIP HOODIE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/131/4680071180052_mn_mod..jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 15,
        category_id: 2,
        color_id: 2,
        title: "FULL ZIP HOODIE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/47d/4680071125282_mn_mod..jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 16,
        category_id: 2,
        color_id: 1,
        title: "FULL ZIP HOODIE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/204/4680071131450_mn_mod..jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 17,
        category_id: 2,
        color_id: 3,
        title: "FULL ZIP HOODIE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/d52/4680488928315_mn_mod..jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 18,
        category_id: 2,
        color_id: 5,
        title: "FULL ZIP HOODIE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/be7/4680488916589_mn.jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 19,
        category_id: 5,
        color_id: 1,
        title: "CORE BASICS BEANIE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/402/8B043004M_47603_2900N_mn_as..jpg/resize/650x900/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 20,
        category_id: 5,
        color_id: 1,
        title: "CORE BASICS BEANIE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/d84/8L021001M_51054_2900N_mn_as..jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 21,
        category_id: 5,
        color_id: 2,
        title: "CORE BASICS BEANIE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/e81/8L021001M_51054_7900M_mn_as..jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 22,
        category_id: 5,
        color_id: 5,
        title: "CORE BASICS BEANIE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/709/8B043004M_47603_2300M_mn_as..jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 23,
        category_id: 5,
        color_id: 2,
        title: "CORE BASICS BEANIE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/df3/8B043004M_47603_7900N_mn_as..jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 24,
        category_id: 5,
        color_id: 5,
        title: "GARDEN BUCKET HAT",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/7d6/47602073_18941_2300M_mn_as..jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 25,
        category_id: 5,
        color_id: 4,
        title: "GARDEN BUCKET HAT",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/6de/47602071_47284_1200N_mn.jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 26,
        category_id: 5,
        color_id: 5,
        title: "GARDEN BUCKET HAT",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/be0/47404021_50756_2300M_mn_as..jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 27,
        category_id: 5,
        color_id: 4,
        title: "GARDEN BUCKET HAT",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/591/47602083_51117_1200M_mn_as..jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 28,
        category_id: 5,
        color_id: 1,
        title: "GARDEN BUCKET HAT",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://f97o6kd8uk.a.trbcdn.net/upload_webp/iblock/324/47602073_18941_2900N_mn_as..jpg/resize/533x3000/?_cvc=bdaca22",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 29,
        category_id: 3,
        color_id: 3,
        title: "AUTHENTIC SHOE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://www.famousfootwear.com/blob/product-images/20000/38/35/1/38351_pair_feed1000.jpg",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 30,
        category_id: 3,
        color_id: 1,
        title: "AUTHENTIC SHOE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://www.famousfootwear.com/blob/product-images/20000/72/92/0/72920_pair_feed1000.jpg",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 31,
        category_id: 3,
        color_id: 2,
        title: "AUTHENTIC SHOE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://www.famousfootwear.com/blob/product-images/20000/32/59/9/32599_pair_feed1000.jpg",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 32,
        category_id: 3,
        color_id: 4,
        title: "AUTHENTIC SHOE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://www.famousfootwear.com/blob/product-images/20000/72/88/8/72888_pair_feed1000.jpg",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 33,
        category_id: 3,
        color_id: 5,
        title: "AUTHENTIC SHOE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://www.famousfootwear.com/blob/product-images/20000/96/07/7/96077_pair_feed1000.jpg",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 34,
        category_id: 3,
        color_id: 3,
        title: "STACKFORM SHOE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://www.famousfootwear.com/blob/product-images/20000/94/61/1/94611_pair_feed1000.jpg",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 35,
        category_id: 3,
        color_id: 4,
        title: "STACKFORM SHOE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://www.famousfootwear.com/blob/product-images/20000/94/26/7/94267_pair_feed1000.jpg",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 36,
        category_id: 3,
        color_id: 1,
        title: "STACKFORM SHOE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://www.famousfootwear.com/blob/product-images/20000/76/83/5/76835_pair_feed1000.jpg",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 37,
        category_id: 3,
        color_id: 5,
        title: "STACKFORM SHOE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://www.famousfootwear.com/blob/product-images/20000/50/32/7/50327_pair_feed1000.jpg",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 38,
        category_id: 3,
        color_id: 2,
        title: "STACKFORM SHOE",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://www.famousfootwear.com/blob/product-images/20000/94/30/7/94307_pair_feed1000.jpg",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 39,
        category_id: 4,
        color_id: 1,
        title: "OLD SKOOL BACKPACK",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://images.vans.com/is/image/Vans/VN0A5E2S_BLK_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 40,
        category_id: 4,
        color_id: 5,
        title: "OLD SKOOL BACKPACK",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://images.vans.com/is/image/Vans/VN0A5E2S_KH7_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 41,
        category_id: 4,
        color_id: 2,
        title: "OLD SKOOL BACKPACK",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://images.vans.com/is/image/Vans/VN0A5I13_BR4_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 42,
        category_id: 4,
        color_id: 4,
        title: "OLD SKOOL BACKPACK",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://images.vans.com/is/image/Vans/VN0A3Z7W_56M_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 43,
        category_id: 4,
        color_id: 4,
        title: "PERGS TOTE BAG",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://images.vans.com/is/image/Vans/VN0A7PQE_3KS_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 44,
        category_id: 4,
        color_id: 1,
        title: "PERGS TOTE BAG",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://images.vans.com/is/image/Vans/VN0A7YTF_Y28_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 45,
        category_id: 4,
        color_id: 2,
        title: "PERGS TOTE BAG",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://images.vans.com/is/image/Vans/VN0A7YT3_BR4_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    },
    {
        id: 46,
        category_id: 4,
        color_id: 4,
        title: "PERGS TOTE BAG",
        price: parseInt(Math.random() * defoultPriceMinMax[1])+"$",
        images: "https://images.vans.com/is/image/Vans/VN000A9U_CDN_HERO?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0",
        about_products: "There are many variations of passages of Lorem Ipsum available, \n but the majority have suffered alteration in some form, by injected \n humour, or randomised words which don't look even slightly \n believable."
    }
];

