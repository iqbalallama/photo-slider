// text animation start
const type = new Typed('.text',{
    strings: ['Memories', 'Day'],
    typeSpeed: 100,
    backSpeed: 120,
    loop: true,
})
// text animation end
// album part start

// imagetag
const image = document.getElementById('images');
// photos collection
const photos = ['images/299575249_2110903625757545_977256294951969626_n.jpg','images/156434499_1717686351745943_6582751685117564479_n.jpg','images/315980457_2185094161671824_8951782015680925400_n.jpg','images/361919925_2367244543456784_4623813984524590944_n.jpg','images/293437196_2082252348622673_4170416445454790727_n.jpg','images/26910386_855164064664847_4510238125818863787_o.jpg','images/13576851_583072815207308_2047978267709521216_o.jpg','images/348480498_633835778639506_6069032821305835783_n.jpg','images/242142996_1862100543971189_7648431446799655923_n.jpg','images/279144916_2026621810852394_7821223497566955109_n.jpg','images/13730977_586713664843223_8508758668630385269_o.jpg','images/170880431_1746135278901050_6606145584375387326_n.jpg','images/274344405_1974140029433906_6959415082121273575_n.jpg','images/317973460_2204457453068828_3362966320735333811_n.jpg','images/12768122_532026096978647_8217377211216432946_o.jpg','images/70764243_1258024297712153_1316482109870702592_n.jpg','images/35487961_929078257273427_7935787278700380160_n.jpg','images/315208934_2179292458918661_2696323612932540751_n.jpg','images/106734072_1516007668580480_3361349369593930557_n.jpg',];
let count = 0;
// next indicator start
document.getElementById('next').addEventListener('click',function(){
    count++;
    if(count >= photos.length){
        count = 0;
        image.src = photos[count];
    }
    else{
        image.src = photos[count];
    }
})
// next indicator end
// previous indicator start
document.getElementById('previous').addEventListener('click',function(){
    count--;
    if(count < 0){
        count = photos.length - 1;
        image.src = photos[count];
    }
    else{
        image.src = photos[count];
    }
})
// previous indicator end
// album part end