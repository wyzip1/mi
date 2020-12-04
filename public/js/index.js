// var data_menu;
// var stopHide;
// async function init_to_fetch() {
//     let response = await fetch('http://39.103.129.58/getdatas');
//     let datas = await response.json();
//     data_menu = datas[0].data_menu;
//     init_page(data_menu);
// }

// 初始化页面模块的所有方法集合
function init_page(data) {
    init_swiper_1();
    init_sg();
    init_shopping('.phone .content .right_items', data.shopping.phone, true);
    init_shopping('.jd .content .right_items', data.shopping.goods, false, "jd");
    init_shopping('.zn .content .right_items', data.shopping.intelligent, false, "zn");
    init_shopping('.dp .content .right_items', data.shopping.dp, false, "dp");
    init_shopping('.pj .content .right_items', data.shopping.pj, false, "pj");
    init_shopping('.zb .content .right_items', data.shopping.zb, false, "zb");
    init_swiper_2();
    init_cookie_data();
    $('.header-under .showlist').hover(showDT_and_data, hideDT);
    $('.dt').hover(showDT, hideDT);
    remember_li_bgColor();
    footer_last_img_tab();
    descTime();
    show_hide_scrollBtn();
    play_video();
    shopping_type_change();
    window.addEventListener('scroll', show_hide_scrollBtn);
}

// 使用swiper插件初始化大轮播图
function init_swiper_1() {
    var mySwiper1 = new Swiper('#lb-1', {
        loop: true,
        effect: 'fade',
        // 如果需要分页器
        pagination: {
            el: '#lb-1 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#lb-1 .swiper-button-next',
            prevEl: '#lb-1 .swiper-button-prev',
        },
        autoplay: true,
    })

}

// 使用swiper插件初始化闪购的切换部分
function init_swiper_2() {
    var mySwiper2 = new Swiper('#lb-2', {
        navigation: {
            nextEl: '.xmsg .right',
            prevEl: '.xmsg .left',
            disabledClass: 'my-button-disabled',
        },
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 14,
        autoplay: true,

    })
}

// 根据传入的类型替换大轮播图模块左侧菜单的二级菜单数据
function menu_enter(type) {
    let data = data_menu.lb_menu[type];
    let count = 0;
    let html = "<ul>";
    for (let i of data) {
        if (count > 5) {
            count = 0;
            html += "</ul><ul>";
        }
        html += `<li><img src="${i.imgUrl}" />${i.name}</li>`;
        count++;
    }
    html += "</ul>"
    $('#lb_details').html(html);
}

// 显示轮播图上方菜单的二级菜单方法
function showDT() {
    clearTimeout(stopHide);
    $('.dt').show();
    $('.dt').height(229);
}

// 替换轮播图上方菜单的二级菜单中的数据
function showDT_and_data() {
    if (stopHide) clearTimeout(stopHide);
    let arr = Array.from($('.header-under .showlist'));
    let index = arr.indexOf(this);
    let html = "";
    for (let i of data_menu.head_menu[index]) {
        html += `<div class="list_item">
            <img src="${i.imgUrl}"/>
            <p class="font-normal m-0 mt-3">${i.name}</p>
            <span class="font-normal orange">${i.price}</span>
        </div>`;
    }
    $('.dt_list').html(html);
    $('.dt').show();
    $('.dt').height(229);
}

// 隐藏轮播图上方菜单的二级菜单
function hideDT() {
    $('.dt').height(0);
    stopHide = setTimeout(() => {
        $('.dt').hide();
    }, 300);
}

// 初始化闪购模块
function init_sg() {
    let html = "";
    let color = ["border-top-orange", "border-top-green", "border-top-blue", "border-top-red", "border-top-light_green"];
    let index = 0;
    for (let i of data_menu.sg) {
        if (index > 4) {
            index = 0;
        }
        html += `<div class="swiper-slide border-top ${color[index]}">
            <div class="ct">
                <img src="${i.imgUrl}">
                <div class="text txt_overflow_hid">
                    <span class="font-normal">${i.title}</span>
                    <span class="desc">${i.desc}</span>
                    <span class="font-normal">
                        <span class="orange">${i.price.now}元</span>
                        <del class="dz">${i.price.del}</del>
                    </span>
                </div>
            </div>
        </div>`;
        index++;
    }

    $('#lb-2 .swiper-wrapper').html(html);
}

// 根据数据类型初始化指定节点的购物模块
function init_shopping(element, data, c, type) {
    let html = "";
    if (!c) {
        for (let x in data) {
            if (x == 0) {
                html += `<div class="tab-pane fade show active absolute_top_left" id="${type}_${x}">`;
            } else {
                html += `<div class="tab-pane fade absolute_top_left" id="${type}_${x}">`;
            }
            for (let i in data[x]) {
                if (i == data[x].length - 1) {
                    if (data[x].length < 8) {
                        html += `<div class="item font-normal">
                                    <img src="${data[x][i].imgUrl}">
                                    <div class="txt txt_overflow_hid">
                                        <span>${data[x][i].title}</span>
                                        <span class="desc">${data[x][i].desc}</span>
                                        <span class="orange">${data[x][i].price}元起</span>
                                    </div>
                                </div>`;
                        html += `<div class="item font-normal lastItem">
                                    <div class="more">
                                        <span>
                                            浏览更多 <br>
                                            <small class="font-normal">热门</small>
                                        </span>
                                        <i class="fa fa-arrow-circle-o-right big_i orange" aria-hidden="true"></i>
                                    </div>
                                </div>`;
                        break;
                    }
                    html += `<div class="item font-normal lastItem">
                                <div class="lastTop">
                                    <div>
                                        <span>${data[x][i].title}</span>
                                        <p class="orange">${data[x][i].price}元</p>
                                    </div>
                                    <img src="${data[x][i].imgUrl}" width="80" height="80" />
                                </div>
                                <div class="more">
                                    <span>
                                        浏览更多 <br>
                                        <small class="font-normal">热门</small>
                                    </span>
                                    <i class="fa fa-arrow-circle-o-right big_i orange" aria-hidden="true"></i>
                                </div>
                            </div>`;
                    break;
                }
                html += `<div class="item font-normal">
                    <img src="${data[x][i].imgUrl}">
                    <div class="txt txt_overflow_hid">
                        <span>${data[x][i].title}</span>
                        <span class="desc">${data[x][i].desc}</span>
                        <span class="orange">${data[x][i].price}元起</span>
                    </div>
                </div>`;
            }
            html += "</div>"
        }
    } else {
        $(element).addClass('p');
        for (let i in data) {
            html += `<div class="item font-normal">
                <img src="${data[i].imgUrl}">
                <div class="txt txt_overflow_hid">
                    <span>${data[i].title}</span>
                    <span class="desc">${data[i].desc}</span>
                    <span class="orange">${data[i].price}元起</span>
                </div>
            </div>`;
        }
    }
    $(element).html(html);
}

// 回到顶部方法
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// 轮播图左侧菜单移入二级菜单时留存当时主菜单的样式
function remember_li_bgColor() {
    $('.lb .menus li').hover(function () {
        let arr = Array.from($('.lb .menus li'));
        li_index = arr.indexOf(this);
        $(this).addClass('bg-orange');
    }, function () {
        $('.lb .menus li').removeClass('bg-orange');
    });

    $('#lb_details').hover(function () {
        $('.lb .menus li').eq(li_index).addClass('bg-orange');
    }, function () {
        $('.lb .menus li').eq(li_index).removeClass('bg-orange');
    });
}

// 底部信息栏的图片更换
function footer_last_img_tab() {
    let z_index = 0;
    setInterval(() => {
        if (z_index % 2 == 0) {
            $('#last-1').css('z-index', 2);
            $('#last-2').css('z-index', 1);
        } else {
            $('#last-1').css('z-index', 1);
            $('#last-2').css('z-index', 2);
        }
        z_index++;
    }, 3000);
}

// 显示回到顶部按钮
function show_hide_scrollBtn() {
    let height = this.window.scrollY
    if (height > 500) {
        $('.scrollTop').show();
    } else {
        $('.scrollTop').hide();
    }
}

// 秒杀闪购倒计时
function descTime() {
    let endArr = [10, 14, 21];
    let start_time = new Date().getHours();
    let end_time;
    for (let i of endArr) {
        if (start_time < i) {
            end_time = i;
            break;
        }
    }
    refershTime();
    $('#start_time').text(`${start_time}: 00 场`);
    // 定时刷新
    setInterval(refershTime, 1000);
    // 每秒刷新事件方法
    function refershTime() {
        let nowDate = new Date();
        let endStr = `${nowDate.getFullYear()}-${nowDate.getMonth()+1}-${nowDate.getDate()} ${end_time}:00:00`;
        let endDate = new Date(endStr);
        let nowtime = nowDate.getTime();
        let endtime = endDate.getTime();
        let descHour = parseInt(((endtime - nowtime) / 1000 / 60 / 60) % 24);
        let descMinute = parseInt(((endtime - nowtime) / 1000 / 60) % 60);
        let descSecond = parseInt(((endtime - nowtime) / 1000) % 60);
        descHour = descHour > 10 ? descHour : "0" + descHour;
        descMinute = descMinute >= 10 ? descMinute : "0" + descMinute;
        descSecond = descSecond >= 10 ? descSecond : "0" + descSecond;
        $('#timer span').eq(0).text(descHour);
        $('#timer span').eq(1).text(descMinute);
        $('#timer span').eq(2).text(descSecond);
    }
}

// 播放视频方法
function play_video() {
    $('.av_item .img').click(function () {
        let index = $(this).index('.av_item .img');
        $('.play-video').css('display', 'flex');
        $('.play-video .video').removeClass('fadeInOut');
        $('.play-video .video').addClass('fadeInUp');

        $('.play-video video').attr('src', data_menu.video[index]);
    });
    $('.play-video .video .close').click(function () {
        $('.play-video .video').removeClass('fadeInUp');
        $('.play-video .video').addClass('fadeInOut');
        setTimeout(() => {
            $('.play-video').hide();
            $('.play-video video').removeAttr('src');
        }, 300);
    });
}
// 切换所有购物模块的类别
// ps：原切换方法使用的是bootstrap的导航，需要点击切换，所以使用移入时触发点击事件来还原官网切换方式
function shopping_type_change() {
    $('.public .control a').mouseenter(function () {
        $(this).click();
    });
}
// 用来存储cookie中的数据
var car_data;
$('.shopCar .goods_data .goods_items').on('click', '.close', delShopping);

// 根据cookie中的数据初始化主页的购物车数据
function init_cookie_data() {
    let html = "";
    let count_num = 0;
    let count_money = 0;
    let cookie = cookie_get('car')
    if (cookie) {
        car_data = cookie;
        if (car_data.length == 0) {
            $('.goods_data').hide();
            $('.goods_none').show();
        } else {
            $('.goods_data').show();
            $('.goods_none').hide();
            for (let i of car_data) {
                count_num += i.count;
                count_money += i.price * i.count;
                html += `<div class="goods_item">
                        <img src="${i.imgUrl}">
                        <a href="#">${i.title}</a>
                        <span>${i.price}元 × ${i.count}</span>
                        <a href="javascript:void(0);" class="close">&times;</a>
                    </div>`;
            }
        }
    } else {
        $('.goods_data').hide();
        $('.goods_none').show();
    }
    $('.goods_data .goods_items').html(html);
    $('#countNum').text(`（${count_num}）`);
    $('#count_num').text(count_num);
    $('#count_money').text(count_money.toFixed(2));
}

// 删除数据中的当前商品，并重置cookie的数据
function delShopping() {
    let index = $(this).index('.shopCar .goods_data .goods_items .close');
    car_data.splice(index, 1);
    cookie_set('car', car_data);
    init_cookie_data();
}