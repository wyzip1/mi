var li_index = 0;
var stopHide;
var data_menu = {
    lb_menu: {
        phone: [{
            name: "小米10 至尊纪念版",
            imgUrl: "./mi-img/lb_menu/phone/1.webp"
        }, {
            name: "小米10 Pro",
            imgUrl: "./mi-img/lb_menu/phone/2.webp"
        }, {
            name: "小米10",
            imgUrl: "./mi-img/lb_menu/phone/3.webp"
        }, {
            name: "小米10青春版",
            imgUrl: "./mi-img/lb_menu/phone/4.webp"
        }, {
            name: "腾讯黑鲨游戏手机",
            imgUrl: "./mi-img/lb_menu/phone/5.webp"
        }, {
            name: "小米云服务",
            imgUrl: "./mi-img/lb_menu/phone/6.webp"
        }, {
            name: "Redmi K30 至尊纪念版",
            imgUrl: "./mi-img/lb_menu/phone/7.webp"
        }, {
            name: "Redmi K30 Pro 变焦版",
            imgUrl: "./mi-img/lb_menu/phone/8.webp"
        }, {
            name: "Redmi K30 Pro",
            imgUrl: "./mi-img/lb_menu/phone/9.webp"
        }, {
            name: "Redmi K30 5G",
            imgUrl: "./mi-img/lb_menu/phone/10.webp"
        }, {
            name: "Redmi K30 4G",
            imgUrl: "./mi-img/lb_menu/phone/11.webp"
        }, {
            name: "手机上门维修",
            imgUrl: "./mi-img/lb_menu/phone/12.png"
        }, {
            name: "Redmi 10X Pro",
            imgUrl: "./mi-img/lb_menu/phone/13.jpg"
        }, {
            name: "Redmi 10X 5G",
            imgUrl: "./mi-img/lb_menu/phone/14.jpg"
        }, {
            name: "Redmi 10X 4G",
            imgUrl: "./mi-img/lb_menu/phone/15.webp"
        }, {
            name: "Redmi Note 8Pro",
            imgUrl: "./mi-img/lb_menu/phone/16.webp"
        }, {
            name: "Redmi Note 8",
            imgUrl: "./mi-img/lb_menu/phone/17.webp"
        }, {
            name: "中国电信",
            imgUrl: "./mi-img/lb_menu/phone/18.webp"
        }, {
            name: "Redmi 9",
            imgUrl: "./mi-img/lb_menu/phone/19.webp"
        }, {
            name: "Redmi 9A",
            imgUrl: "./mi-img/lb_menu/phone/20.webp"
        }, {
            name: "Redmi 8",
            imgUrl: "./mi-img/lb_menu/phone/21.webp"
        }, {
            name: "Redmi 8A",
            imgUrl: "./mi-img/lb_menu/phone/22.webp"
        }, {
            name: "Redmi 7A",
            imgUrl: "./mi-img/lb_menu/phone/23.webp"
        }],
        tv: [{
            name: "小米透明电视",
            imgUrl: "./mi-img/lb_menu/tv/1.webp"
        }, {
            name: "小米电视5 Pro 55英寸",
            imgUrl: "./mi-img/lb_menu/tv/2.webp"
        }, {
            name: "小米电视5 65英寸",
            imgUrl: "./mi-img/lb_menu/tv/3.webp"
        }, {
            name: "Redmi 智能电视 A系列",
            imgUrl: "./mi-img/lb_menu/tv/4.webp"
        }, {
            name: "量子点电视",
            imgUrl: "./mi-img/lb_menu/tv/5.webp"
        }, {
            name: "Redmi 智能电视 X系列",
            imgUrl: "./mi-img/lb_menu/tv/6.webp"
        }, {
            name: "小米电视大师 82英寸",
            imgUrl: "./mi-img/lb_menu/tv/7.webp"
        }, {
            name: "小米电视5 Pro 65英寸",
            imgUrl: "./mi-img/lb_menu/tv/8.webp"
        }, {
            name: "小米电视5 55英寸",
            imgUrl: "./mi-img/lb_menu/tv/9.jpg"
        }, {
            name: "小米全面屏电视E43K",
            imgUrl: "./mi-img/lb_menu/tv/10.jpg"
        }, {
            name: "全面屏金属电视",
            imgUrl: "./mi-img/lb_menu/tv/11.webp"
        }, {
            name: "小米盒子",
            imgUrl: "./mi-img/lb_menu/tv/12.webp"
        }, {
            name: "大师电视 65英寸 OLED",
            imgUrl: "./mi-img/lb_menu/tv/13.jpg"
        }, {
            name: "小米电视5 Pro 75英寸",
            imgUrl: "./mi-img/lb_menu/tv/14.webp"
        }, {
            name: "小米电视4A 60英寸",
            imgUrl: "./mi-img/lb_menu/tv/15.webp"
        }, {
            name: "Redmi 智能电视 X55",
            imgUrl: "./mi-img/lb_menu/tv/16.webp"
        }, {
            name: "小米全面屏电视",
            imgUrl: "./mi-img/lb_menu/tv/17.webp"
        }, {
            name: "电视音响",
            imgUrl: "./mi-img/lb_menu/tv/18.webp"
        }, {
            name: "Redmi 智能电视 MAX 98",
            imgUrl: "./mi-img/lb_menu/tv/19.webp"
        }, {
            name: "小米电视5 75英寸",
            imgUrl: "./mi-img/lb_menu/tv/20.webp"
        }, {
            name: "小米电视4A 70英寸",
            imgUrl: "./mi-img/lb_menu/tv/21.webp"
        }, {
            name: "小米电视4S 75英寸",
            imgUrl: "./mi-img/lb_menu/tv/22.webp"
        }, {
            name: "小米壁画电视",
            imgUrl: "./mi-img/lb_menu/tv/23.webp"
        }, {
            name: "激光投影电视",
            imgUrl: "./mi-img/lb_menu/tv/24.webp"
        }, ],
        note: [{
            name: "Redmi G 游戏本",
            imgUrl: "./mi-img/lb_menu/note/1.webp"
        }, {
            name: "RedmiBook Ari 13",
            imgUrl: "./mi-img/lb_menu/note/2.png"
        }, {
            name: "RedmiBook 16",
            imgUrl: "./mi-img/lb_menu/note/3.webp"
        }, {
            name: "RedmiBook 14",
            imgUrl: "./mi-img/lb_menu/note/4.webp"
        }, {
            name: "小米笔记本Pro 15.6",
            imgUrl: "./mi-img/lb_menu/note/5.webp"
        }, {
            name: "RedmiBook 13",
            imgUrl: "./mi-img/lb_menu/note/6.webp"
        }, {
            name: "小米笔记本 Ari 13.3",
            imgUrl: "./mi-img/lb_menu/note/7.jpg"
        }, {
            name: "小米笔记本 Ari 12.5",
            imgUrl: "./mi-img/lb_menu/note/8.webp"
        }, {
            name: "小米游戏本",
            imgUrl: "./mi-img/lb_menu/note/9.webp"
        }, {
            name: "小米显示器34英寸",
            imgUrl: "./mi-img/lb_menu/note/10.png"
        }, {
            name: "小米显示器27英寸",
            imgUrl: "./mi-img/lb_menu/note/11.webp"
        }, {
            name: "Redmi显示器23.8英寸",
            imgUrl: "./mi-img/lb_menu/note/12.webp"
        }, {
            name: "键鼠套装",
            imgUrl: "./mi-img/lb_menu/note/13.webp"
        }, {
            name: "鼠标",
            imgUrl: "./mi-img/lb_menu/note/14.webp"
        }, {
            name: "转接器",
            imgUrl: "./mi-img/lb_menu/note/15.jpg"
        }],
        goods: [{
            name: "冰箱",
            imgUrl: "./mi-img/lb_menu/goods/1.jpg"
        }, {
            name: "立式空调",
            imgUrl: "./mi-img/lb_menu/goods/2.jpg"
        }, {
            name: "壁挂空调",
            imgUrl: "./mi-img/lb_menu/goods/3.png"
        }, {
            name: "滚筒洗衣机",
            imgUrl: "./mi-img/lb_menu/goods/4.jpg"
        }, {
            name: "Redmi全自动波轮洗衣机",
            imgUrl: "./mi-img/lb_menu/goods/5.jpg"
        }, {
            name: "净水器",
            imgUrl: "./mi-img/lb_menu/goods/6.jpg"
        }, {
            name: "微波炉",
            imgUrl: "./mi-img/lb_menu/goods/7.jpg"
        }, {
            name: "电烤箱",
            imgUrl: "./mi-img/lb_menu/goods/8.png"
        }, {
            name: "扫地机器人",
            imgUrl: "./mi-img/lb_menu/goods/9.jpg"
        }, {
            name: "吸尘器",
            imgUrl: "./mi-img/lb_menu/goods/10.png"
        }, {
            name: "空气净化器",
            imgUrl: "./mi-img/lb_menu/goods/11.jpg"
        }, {
            name: "电饭煲",
            imgUrl: "./mi-img/lb_menu/goods/12.png"
        }, {
            name: "电磁炉",
            imgUrl: "./mi-img/lb_menu/goods/13.jpg"
        }, {
            name: "电水壶",
            imgUrl: "./mi-img/lb_menu/goods/14.webp"
        }, {
            name: "滤水壶",
            imgUrl: "./mi-img/lb_menu/goods/15.jpg"
        }, {
            name: "落地风扇",
            imgUrl: "./mi-img/lb_menu/goods/16.jpg"
        }, {
            name: "投影仪",
            imgUrl: "./mi-img/lb_menu/goods/17.jpg"
        }, {
            name: "灯具",
            imgUrl: "./mi-img/lb_menu/goods/18.png"
        }, {
            name: "插线板",
            imgUrl: "./mi-img/lb_menu/goods/19.jpg"
        }, {
            name: "新风机",
            imgUrl: "./mi-img/lb_menu/goods/20.jpg"
        }, {
            name: "电暖炉",
            imgUrl: "./mi-img/lb_menu/goods/21.jpg"
        }, {
            name: "电压力锅",
            imgUrl: "./mi-img/lb_menu/goods/22.jpg"
        }, {
            name: "料理机",
            imgUrl: "./mi-img/lb_menu/goods/23.webp"
        }, {
            name: "电煮壶",
            imgUrl: "./mi-img/lb_menu/goods/24.webp"
        }, ],
        clothes: [{
            name: "手环5NFC",
            imgUrl: "./mi-img/lb_menu/clothes/1.webp"
        }, {
            name: "手环5",
            imgUrl: "./mi-img/lb_menu/clothes/2.webp"
        }, {
            name: "小米手表",
            imgUrl: "./mi-img/lb_menu/clothes/3.png"
        }, {
            name: "手环手表",
            imgUrl: "./mi-img/lb_menu/clothes/4.jpg"
        }, {
            name: "VR",
            imgUrl: "./mi-img/lb_menu/clothes/5.jpg"
        }, {
            name: "平衡车",
            imgUrl: "./mi-img/lb_menu/clothes/6.webp"
        }, {
            name: "自行车",
            imgUrl: "./mi-img/lb_menu/clothes/7.webp"
        }, {
            name: "滑板车",
            imgUrl: "./mi-img/lb_menu/clothes/8.jpg"
        }, {
            name: "车载充电器",
            imgUrl: "./mi-img/lb_menu/clothes/9.jpg"
        }, {
            name: "平衡车配件",
            imgUrl: "./mi-img/lb_menu/clothes/10.webp"
        }, {
            name: "智能后视镜",
            imgUrl: "./mi-img/lb_menu/clothes/11.jpg"
        }, {
            name: "智能记录仪",
            imgUrl: "./mi-img/lb_menu/clothes/12.jpg"
        }, {
            name: "无线车充",
            imgUrl: "./mi-img/lb_menu/clothes/13.jpg"
        }, {
            name: "充气宝",
            imgUrl: "./mi-img/lb_menu/clothes/14.webp"
        }, {
            name: "石英表",
            imgUrl: "./mi-img/lb_menu/clothes/15.jpg"
        }],
        router: [{
            name: "打印机",
            imgUrl: "./mi-img/lb_menu/router/1.jpg"
        }, {
            name: "喷墨打印机",
            imgUrl: "./mi-img/lb_menu/router/2.jpg"
        }, {
            name: "喷墨打印机墨水",
            imgUrl: "./mi-img/lb_menu/router/3.jpg"
        }, {
            name: "小米路由器",
            imgUrl: "./mi-img/lb_menu/router/4.webp"
        }, {
            name: "智能家庭",
            imgUrl: "./mi-img/lb_menu/router/5.jpg"
        }, {
            name: "对讲机",
            imgUrl: "./mi-img/lb_menu/router/6.webp"
        }, {
            name: "摄像头",
            imgUrl: "./mi-img/lb_menu/router/7.webp"
        }, {
            name: "照相机",
            imgUrl: "./mi-img/lb_menu/router/8.jpg"
        }, {
            name: "智能门锁",
            imgUrl: "./mi-img/lb_menu/router/9.webp"
        }, {
            name: "视频门铃",
            imgUrl: "./mi-img/lb_menu/router/10.webp"
        }, {
            name: "小爱老师",
            imgUrl: "./mi-img/lb_menu/router/11.jpg"
        }, {
            name: "Redmi路由器",
            imgUrl: "./mi-img/lb_menu/router/12.png"
        }, {
            name: "小爱音响",
            imgUrl: "./mi-img/lb_menu/router/13.webp"
        }, {
            name: "云服务空间年卡",
            imgUrl: "./mi-img/lb_menu/router/14.webp"
        }, {
            name: "云服务空间月卡",
            imgUrl: "./mi-img/lb_menu/router/15.jpg"
        }],
        source: [{
            name: "移动电源",
            imgUrl: "./mi-img/lb_menu/source/1.jpg"
        }, {
            name: "数据线",
            imgUrl: "./mi-img/lb_menu/source/2.webp"
        }, {
            name: "车充",
            imgUrl: "./mi-img/lb_menu/source/3.jpg"
        }, {
            name: "充电器",
            imgUrl: "./mi-img/lb_menu/source/4.jpg"
        }, {
            name: "电池",
            imgUrl: "./mi-img/lb_menu/source/5.jpg"
        }, {
            name: "自拍杆",
            imgUrl: "./mi-img/lb_menu/source/6.jpg"
        }, {
            name: "手机壳",
            imgUrl: "./mi-img/lb_menu/source/7.jpg"
        }, {
            name: "手机贴膜",
            imgUrl: "./mi-img/lb_menu/source/8.jpg"
        }, {
            name: "无线充电器",
            imgUrl: "./mi-img/lb_menu/source/9.webp"
        }, {
            name: "平板配件",
            imgUrl: "./mi-img/lb_menu/source/10.webp"
        }, {
            name: "黑鲨配件",
            imgUrl: "./mi-img/lb_menu/source/11.jpg"
        }, {
            name: "其他配件",
            imgUrl: "./mi-img/lb_menu/source/12.jpg"
        }],
        children: [{
            name: "洗手机",
            imgUrl: "./mi-img/lb_menu/children/1.jpg"
        }, {
            name: "修剪器",
            imgUrl: "./mi-img/lb_menu/children/2.jpg"
        }, {
            name: "剃须刀",
            imgUrl: "./mi-img/lb_menu/children/3.jpg"
        }, {
            name: "牙刷",
            imgUrl: "./mi-img/lb_menu/children/4.jpg"
        }, {
            name: "吹风机",
            imgUrl: "./mi-img/lb_menu/children/5.png"
        }, {
            name: "体重秤",
            imgUrl: "./mi-img/lb_menu/children/6.webp"
        }, {
            name: "体脂秤",
            imgUrl: "./mi-img/lb_menu/children/7.jpg"
        }, {
            name: "早教启智",
            imgUrl: "./mi-img/lb_menu/children/8.webp"
        }, {
            name: "遥控电动",
            imgUrl: "./mi-img/lb_menu/children/9.jpg"
        }, {
            name: "益智积木",
            imgUrl: "./mi-img/lb_menu/children/10.jpg"
        }, {
            name: "儿童手表",
            imgUrl: "./mi-img/lb_menu/children/11.jpg"
        }, {
            name: "儿童滑板车",
            imgUrl: "./mi-img/lb_menu/children/12.jpg"
        }, {
            name: "婴儿推车",
            imgUrl: "./mi-img/lb_menu/children/13.jpg"
        }, {
            name: "儿童书包",
            imgUrl: "./mi-img/lb_menu/children/14.jpg"
        }, {
            name: "婴儿理发器",
            imgUrl: "./mi-img/lb_menu/children/15.jpg"
        }, {
            name: "健身车",
            imgUrl: "./mi-img/lb_menu/children/16.jpg"
        }, {
            name: "起步机",
            imgUrl: "./mi-img/lb_menu/children/17.jpg"
        }, {
            name: "点读笔",
            imgUrl: "./mi-img/lb_menu/children/18.jpg"
        }],
        headset: [{
            name: "小爱音响 Art",
            imgUrl: "./mi-img/lb_menu/headset/1.webp"
        }, {
            name: "小爱触屏音响Pro 8",
            imgUrl: "./mi-img/lb_menu/headset/2.webp"
        }, {
            name: "Redmi小米触屏音响 8",
            imgUrl: "./mi-img/lb_menu/headset/3.jpg"
        }, {
            name: "音箱 Pro",
            imgUrl: "./mi-img/lb_menu/headset/4.webp"
        }, {
            name: "小米小爱音箱",
            imgUrl: "./mi-img/lb_menu/headset/5.webp"
        }, {
            name: "小米小爱音箱 Play",
            imgUrl: "./mi-img/lb_menu/headset/6.jpg"
        }, {
            name: "小米小爱触屏音箱",
            imgUrl: "./mi-img/lb_menu/headset/7.webp"
        }, {
            name: "Redmi音箱",
            imgUrl: "./mi-img/lb_menu/headset/8.jpg"
        }, {
            name: "线控耳机",
            imgUrl: "./mi-img/lb_menu/headset/9.jpg"
        }, {
            name: "蓝牙耳机",
            imgUrl: "./mi-img/lb_menu/headset/10.webp"
        }, {
            name: "头戴耳机",
            imgUrl: "./mi-img/lb_menu/headset/11.jpg"
        }, {
            name: "品牌耳机",
            imgUrl: "./mi-img/lb_menu/headset/12.webp"
        }, {
            name: "蓝牙音箱",
            imgUrl: "./mi-img/lb_menu/headset/13.jpg"
        }, {
            name: "小米AI音箱",
            imgUrl: "./mi-img/lb_menu/headset/14.jpg"
        }, {
            name: "小米小爱音箱HD",
            imgUrl: "./mi-img/lb_menu/headset/15.webp"
        }, {
            name: "k歌耳机",
            imgUrl: "./mi-img/lb_menu/headset/16.jpg"
        }],
        case: [{
            name: "小背包",
            imgUrl: "./mi-img/lb_menu/case/1.jpg"
        }, {
            name: "双肩包",
            imgUrl: "./mi-img/lb_menu/case/2.webp"
        }, {
            name: "胸包",
            imgUrl: "./mi-img/lb_menu/case/3.jpg"
        }, {
            name: "旅行箱",
            imgUrl: "./mi-img/lb_menu/case/4.jpg"
        }, {
            name: "运动鞋",
            imgUrl: "./mi-img/lb_menu/case/5.webp"
        }, {
            name: "眼镜",
            imgUrl: "./mi-img/lb_menu/case/6.png"
        }, {
            name: "床垫",
            imgUrl: "./mi-img/lb_menu/case/7.jpg"
        }, {
            name: "枕头",
            imgUrl: "./mi-img/lb_menu/case/8.webp"
        }, {
            name: "饰品",
            imgUrl: "./mi-img/lb_menu/case/9.webp"
        }, {
            name: "螺丝刀",
            imgUrl: "./mi-img/lb_menu/case/10.webp"
        }, {
            name: "保温杯",
            imgUrl: "./mi-img/lb_menu/case/11.jpg"
        }, {
            name: "驱蚊器",
            imgUrl: "./mi-img/lb_menu/case/12.jpg"
        }, {
            name: "毛巾/浴巾",
            imgUrl: "./mi-img/lb_menu/case/13.jpg"
        }, {
            name: "米兔",
            imgUrl: "./mi-img/lb_menu/case/14.jpg"
        }, {
            name: "笔",
            imgUrl: "./mi-img/lb_menu/case/15.jpg"
        }]
    },
    head_menu: [
        [{
            name: "小米至尊10纪念版",
            imgUrl: "./mi-img/head-menu/xm-phone/1.webp",
            price: 5999
        }, {
            name: "小米10 Pro",
            imgUrl: "./mi-img/head-menu/xm-phone/2.webp",
            price: 4999
        }, {
            name: "小米10",
            imgUrl: "./mi-img/head-menu/xm-phone/3.webp",
            price: 3799
        }, {
            name: "小米10 青春版 5G",
            imgUrl: "./mi-img/head-menu/xm-phone/4.webp",
            price: 1899
        }, {
            name: "小米MIX Alpha",
            imgUrl: "./mi-img/head-menu/xm-phone/5.webp",
            price: 19999
        }],
        [{
            name: "Redmi K30 至尊纪念版",
            imgUrl: "./mi-img/head-menu/hm/1.webp",
            price: 1999
        }, {
            name: "Redmi K30 Pro 系列",
            imgUrl: "./mi-img/head-menu/hm/2.webp",
            price: 2999
        }, {
            name: "Redmi K30 系列",
            imgUrl: "./mi-img/head-menu/hm/3.png",
            price: 1399
        }, {
            name: "Redmi 10X",
            imgUrl: "./mi-img/head-menu/hm/4.jpg",
            price: 999
        }, {
            name: "Redmi Note 8",
            imgUrl: "./mi-img/head-menu/hm/5.png",
            price: 899
        }, {
            name: "Redmi 9",
            imgUrl: "./mi-img/head-menu/hm/6.webp",
            price: 799
        }],
        [{
            name: "小米电视大师 82英寸至尊纪念版",
            imgUrl: "./mi-img/head-menu/tv/1.webp",
            price: 49999
        }, {
            name: "小米电视大师 82英寸",
            imgUrl: "./mi-img/head-menu/tv/2.webp",
            price: 9999
        }, {
            name: "小米透明电视",
            imgUrl: "./mi-img/head-menu/tv/3.webp",
            price: 49999
        }, {
            name: "小米电视大师 65英寸OLED",
            imgUrl: "./mi-img/head-menu/tv/4.webp",
            price: 12999
        }, {
            name: "Redmi 智能电视 MAX 98",
            imgUrl: "./mi-img/head-menu/tv/5.webp",
            price: 19999
        }, {
            name: "小米电视4A 60存",
            imgUrl: "./mi-img/head-menu/tv/6.webp",
            price: 2399
        }],
        [{
            name: "Redmi G 游戏本",
            imgUrl: "./mi-img/head-menu/note/1.webp",
            price: ""
        }, {
            name: "RedmiBook 16",
            imgUrl: "./mi-img/head-menu/note/2.webp",
            price: 4499
        }, {
            name: "RedmiBook 14II",
            imgUrl: "./mi-img/head-menu/note/3.png",
            price: 3999
        }, {
            name: "Pro 15.6 2020款",
            imgUrl: "./mi-img/head-menu/note/4.webp",
            price: 5799
        }, {
            name: "RedmiBook Air 13",
            imgUrl: "./mi-img/head-menu/note/5.webp",
            price: 4699
        }, {
            name: "显示器",
            imgUrl: "./mi-img/head-menu/note/6.webp",
            price: 2199
        }],
        [{
            name: "米家互联网空调C1（一级能效）",
            imgUrl: "./mi-img/head-menu/goods/1.webp",
            price: 2099
        }, {
            name: "米家互联网空调（一级能效）",
            imgUrl: "./mi-img/head-menu/goods/2.webp",
            price: 2099
        }, {
            name: "Redmi全自动波轮洗衣机1A",
            imgUrl: "./mi-img/head-menu/goods/3.png",
            price: 849
        }, {
            name: "米家互联网洗烘一体机10kg",
            imgUrl: "./mi-img/head-menu/goods/4.jpg",
            price: 1999
        }, {
            name: "米家风冷对开门冰箱 483L",
            imgUrl: "./mi-img/head-menu/goods/5.png",
            price: 2299
        }, {
            name: "米家两门冰箱 160L",
            imgUrl: "./mi-img/head-menu/goods/6.webp",
            price: 899
        }],
        [{
            name: "Redmi路由器 AX6",
            imgUrl: "./mi-img/head-menu/router/1.webp",
            price: 399
        }, {
            name: "Redmi路由器 AX5",
            imgUrl: "./mi-img/head-menu/router/2.webp",
            price: 249
        }, {
            name: "小米路由器 AX1800",
            imgUrl: "./mi-img/head-menu/router/3.webp",
            price: 329
        }, {
            name: "小米AIoT路由器AX3600",
            imgUrl: "./mi-img/head-menu/router/4.webp",
            price: 599
        }, {
            name: "Redmi路由器AC2100",
            imgUrl: "./mi-img/head-menu/router/5.webp",
            price: 169
        }, {
            name: "小米路由器AC2100",
            imgUrl: "./mi-img/head-menu/router/6.webp",
            price: 229
        }],
        [{
            name: "小米米家智能摄像机云台版",
            imgUrl: "./mi-img/head-menu/Intelligent/1.webp",
            price: 189
        }, {
            name: "小米小爱老师",
            imgUrl: "./mi-img/head-menu/Intelligent/2.jpg",
            price: 499
        }, {
            name: "小米全自动智能门锁",
            imgUrl: "./mi-img/head-menu/Intelligent/3.webp",
            price: 1799
        }, {
            name: "Redmi小爱触屏音箱 8",
            imgUrl: "./mi-img/head-menu/Intelligent/4.webp",
            price: 349
        }, {
            name: "小米小爱触屏音箱",
            imgUrl: "./mi-img/head-menu/Intelligent/5.jpg",
            price: 199
        }, {
            name: "Redmi小爱音箱 Play",
            imgUrl: "./mi-img/head-menu/Intelligent/6.jpg",
            price: 79
        }]
    ],
    sg: [{
        "imgUrl": "./mi-img/sg/1.webp",
        "title": "小米户外蓝牙音箱 黑色",
        "desc": "无线随行，声声动听",
        "price": {
            "now": "169",
            "del": "199元"
        }
    }, {
        "imgUrl": "./mi-img/sg/2.webp",
        "title": "贝医生儿童声波电动牙刷（智能故事版） 蓝色",
        "desc": "会讲故事的电动牙刷",
        "price": {
            "now": "249",
            "del": "299元"
        }
    }, {
        "imgUrl": "./mi-img/sg/3.webp",
        "title": "90分框体旅行箱 20英寸 粉色",
        "desc": "轻轻一推，畅行世界",
        "price": {
            "now": "399",
            "del": "599元"
        }
    }, {
        "imgUrl": "./mi-img/sg/4.webp",
        "title": "小米真无线蓝牙耳机 Air 2 白色",
        "desc": "智能真无线，轻松舒适戴",
        "price": {
            "now": "299",
            "del": "399元"
        }
    }, {
        "imgUrl": "./mi-img/sg/5.webp",
        "title": "米家空气净化器Pro",
        "desc": "大空间，快循环",
        "price": {
            "now": "1299",
            "del": "1499元"
        }
    }, {
        "imgUrl": "./mi-img/sg/6.webp",
        "title": "RedmiBook 13 锐龙版 R5 16G 512G SSD 集显 月光银",
        "desc": "全面屏高性能轻薄本",
        "price": {
            "now": "3599",
            "del": "3999元"
        }
    }, {
        "imgUrl": "./mi-img/sg/7.webp",
        "title": "定频 | 米家互联网空调 1.5匹",
        "desc": "出众静音，快速制冷热",
        "price": {
            "now": "1799",
            "del": "1899元"
        }
    }, {
        "imgUrl": "./mi-img/sg/8.webp",
        "title": "小米手表 标准版 典雅黑",
        "desc": "能打电话、能下载APP，才是真正的智能手表",
        "price": {
            "now": "1199",
            "del": "1299元"
        }
    }, {
        "imgUrl": "./mi-img/sg/9.webp",
        "title": "14 Ⅱ R5 8G 512G 银色",
        "desc": "全面屏高性能轻薄本",
        "price": {
            "now": "3299",
            "del": "3799元"
        }
    }, {
        "imgUrl": "./mi-img/sg/10.webp",
        "title": "小米显示器 23.8英寸 黑",
        "desc": "薄机身，高画质",
        "price": {
            "now": "679",
            "del": "699元"
        }
    }, {
        "imgUrl": "./mi-img/sg/11.webp",
        "title": "变频 | 米家互联网空调 1.5匹",
        "desc": "变频节能，高效制冷热",
        "price": {
            "now": "2099",
            "del": "2699元"
        }
    }, {
        "imgUrl": "./mi-img/sg/12.webp",
        "title": "RedmiBook Air 13 I5/16G/512G/2.5K100%sRGB 灰色",
        "desc": "轻盈便携 | 轻松办公",
        "price": {
            "now": "4999",
            "del": "5199元"
        }
    }, {
        "imgUrl": "./mi-img/sg/13.webp",
        "title": "米家扫地机器人",
        "desc": "智商高，扫得干净扫得快",
        "price": {
            "now": "1399",
            "del": "1699元"
        }
    }, {
        "imgUrl": "./mi-img/sg/14.webp",
        "title": "RedmiBook 13 i5 8G 512G SSD MX250 2G 银",
        "desc": "让高性能全面展现",
        "price": {
            "now": "3999",
            "del": "4799元"
        }
    }, {
        "imgUrl": "./mi-img/sg/15.webp",
        "title": "米兔儿童滑板车 蓝",
        "desc": "安全好玩的酷玩具",
        "price": {
            "now": "209",
            "del": "249元"
        }
    }, {
        "imgUrl": "./mi-img/sg/16.webp",
        "title": "小米移动电源3 10000mAh USB-C双向快充版 黑色",
        "desc": "双向18W快充 / 输入输出双接口 / 可上飞机，安全贴心",
        "price": {
            "now": "99",
            "del": "129元"
        }
    }, {
        "imgUrl": "./mi-img/sg/17.webp",
        "title": "RedmiBook 14 I5/8G/512G SSD/MX250 银色",
        "desc": "十代酷睿更强劲",
        "price": {
            "now": "3999",
            "del": "4499元"
        }
    }, {
        "imgUrl": "./mi-img/sg/18.webp",
        "title": "贝医生声波电动牙刷 S7 大理石白色",
        "desc": "洁齿更智能，刷牙更轻松",
        "price": {
            "now": "349",
            "del": "399元"
        }
    }, {
        "imgUrl": "./mi-img/sg/19.webp",
        "title": "自清洁 | 米家互联网空调 1.5匹",
        "desc": "变频，高效制冷热，自清洁",
        "price": {
            "now": "1899",
            "del": "2399元"
        }
    }, {
        "imgUrl": "./mi-img/sg/20.webp",
        "title": "小米笔记本Air 12.5\" 2019款 8代M3 4G 128G 金色",
        "desc": "像杂志一样随身携带",
        "price": {
            "now": "3299",
            "del": "3599元"
        }
    }, {
        "imgUrl": "./mi-img/sg/21.webp",
        "title": "米家扫拖机器人 黑色",
        "desc": "扫得干净，拖得彻底",
        "price": {
            "now": "1799",
            "del": "1999元"
        }
    }, {
        "imgUrl": "./mi-img/sg/22.webp",
        "title": "米家踢脚线电暖器E 白色",
        "desc": "制暖身材小，抵御寒冬功劳大",
        "price": {
            "now": "459",
            "del": "499元"
        }
    }, {
        "imgUrl": "./mi-img/sg/23.webp",
        "title": "小米笔记本Air 12.5\" 2019款 8代M3 4G 256G 金色",
        "desc": "像杂志一样随身携带",
        "price": {
            "now": "3599",
            "del": "3999元"
        }
    }, {
        "imgUrl": "./mi-img/sg/24.webp",
        "title": "高品质多功能头戴耳机",
        "desc": "我的私人KTV",
        "price": {
            "now": "169",
            "del": "249元"
        }
    }, {
        "imgUrl": "./mi-img/sg/25.webp",
        "title": "焕醒鼻毛修剪器HN1",
        "desc": "舒适修剪 赶走尴尬",
        "price": {
            "now": "55",
            "del": "65元"
        }
    }, {
        "imgUrl": "./mi-img/sg/26.webp",
        "title": "小米笔记本15.6\" 2019款 四核i5 8G 512G MX110 深空灰",
        "desc": "全面均衡的国民轻薄本",
        "price": {
            "now": "3799",
            "del": "4299元"
        }
    }, {
        "imgUrl": "./mi-img/sg/27.webp",
        "title": "PINZTEA木柄陶瓷泡茶杯 茶水分离 380mL",
        "desc": "尊贵高级黑/实木防烫柄/轻松清洗/精致礼盒装",
        "price": {
            "now": "85",
            "del": "99元"
        }
    }, {
        "imgUrl": "./mi-img/sg/28.webp",
        "title": "inFace黑头仪",
        "desc": "吸净黑头 高效不伤肤",
        "price": {
            "now": "109",
            "del": "149元"
        }
    }, {
        "imgUrl": "./mi-img/sg/29.webp",
        "title": "RedmiBook 16 i7 16G 512G MX350 灰色",
        "desc": "便携大屏，全“芯”超越",
        "price": {
            "now": "5299",
            "del": "5699元"
        }
    }, {
        "imgUrl": "./mi-img/sg/30.webp",
        "title": "bebird智能可视采耳棒M9 Pro",
        "desc": "智能可视采耳棒M9 Pro",
        "price": {
            "now": "249",
            "del": "289元"
        }
    }, {
        "imgUrl": "./mi-img/sg/31.webp",
        "title": "脊安适 颈部按摩器 护颈仪G2",
        "desc": "恒温热敷 米家APP操控 3大按摩手法",
        "price": {
            "now": "299",
            "del": "399元"
        }
    }, {
        "imgUrl": "./mi-img/sg/32.webp",
        "title": "小米游戏本 i5-9300H 8G 512GB GTX1660Ti 144Hz 深灰",
        "desc": "性能怪兽再升级",
        "price": {
            "now": "5999",
            "del": "7499元"
        }
    }, {
        "imgUrl": "./mi-img/sg/33.webp",
        "title": "左点小艾2Max智能艾灸盒",
        "desc": "海泉推荐；国潮养生；AI智能黑科技",
        "price": {
            "now": "289",
            "del": "369元"
        }
    }],
    shopping: {
        phone: [{
            "imgUrl": "./mi-img/shopping/phone/1.webp",
            "title": "小米10 至尊版",
            "desc": "120X 变焦/120W秒充/120Hz屏幕",
            "price": "5299"
        }, {
            "imgUrl": "./mi-img/shopping/phone/2.webp",
            "title": "Redmi K30 至尊版",
            "desc": "120Hz弹出全面屏，天玑1000+旗舰处理器",
            "price": "1999"
        }, {
            "imgUrl": "./mi-img/shopping/phone/3.webp",
            "title": "腾讯黑鲨3S",
            "desc": "骁龙865处理器，120Hz刷新率",
            "price": "3799"
        }, {
            "imgUrl": "./mi-img/shopping/phone/4.webp",
            "title": "Redmi 9A",
            "desc": "5000mAh长循环大电量，6.53 超大护眼屏幕",
            "price": "3999"
        }, {
            "imgUrl": "./mi-img/shopping/phone/5.webp",
            "title": "小米10 青春版 5G",
            "desc": "50倍潜望式变焦 / 轻薄5G手机",
            "price": "599"
        }, {
            "imgUrl": "./mi-img/shopping/phone/6.webp",
            "title": "小米10",
            "desc": "骁龙865/1亿像素相机",
            "price": "1899"
        }, {
            "imgUrl": "./mi-img/shopping/phone/7.webp",
            "title": "Redmi K30 Pro",
            "desc": "双模5G，骁龙865，弹出全面屏",
            "price": "2099"
        }, {
            "imgUrl": "./mi-img/shopping/phone/8.webp",
            "title": "Redmi K30 Pro 变焦版",
            "desc": "双模5G，骁龙865，弹出全面屏",
            "price": "3799"
        }],
        goods: [
            [{
                "imgUrl": "./mi-img/shopping/goods/1.webp",
                "title": "Redmi 红米电视 70英寸",
                "desc": "70英寸震撼巨屏，4K画质，细腻如真",
                "price": "3249"
            }, {

                "imgUrl": "./mi-img/shopping/goods/2.webp",
                "title": "小米全面屏电视E32C",
                "desc": "全面屏设计，人工智能系统",
                "price": "3799"
            }, {

                "imgUrl": "./mi-img/shopping/goods/3.webp",
                "title": "小米全面屏电视E55A",
                "desc": "全面屏设计，人工智能语音",
                "price": "899"
            }, {

                "imgUrl": "./mi-img/shopping/goods/4.jpg",
                "title": "米家空调",
                "desc": "出众静音，快速制冷热",
                "price": "2299"
            }, {

                "imgUrl": "./mi-img/shopping/goods/5.webp",
                "title": "米家互联网洗烘一体机 Pro 10kg",
                "desc": "智能洗烘，省心省力",
                "price": "1499"
            }, {

                "imgUrl": "./mi-img/shopping/goods/6.webp",
                "title": "Redmi全自动波轮洗衣机1A 8kg",
                "desc": "一键操作，父母都爱用",
                "price": "1799"
            }, {

                "imgUrl": "./mi-img/shopping/goods/7.webp",
                "title": "15.6\" 四核i7 16G 独显 512G",
                "desc": "全面均衡的国民轻薄本",
                "price": "3299"
            }, {

                "imgUrl": "./mi-img/shopping/goods/8.webp",
                "title": "Air 13.3\" 2019款",
                "desc": "",
                "price": "849"
            }],
            [{
                "imgUrl": "./mi-img/shopping/goods/9.webp",
                "title": "小米电视4C 32英寸",
                "desc": "高清液晶屏，人工智能系统",
                "price": "899"
            }, {
                "imgUrl": "./mi-img/shopping/goods/10.webp",
                "title": "全面屏电视 55英寸E55X",
                "desc": "潮流全面屏设计",
                "price": "2299"
            }, {
                "imgUrl": "./mi-img/shopping/goods/11.webp",
                "title": "小米电视4A 70英寸",
                "desc": "大屏更享受",
                "price": "3499"
            }, {
                "imgUrl": "./mi-img/shopping/goods/12.webp",
                "title": "小米电视4C 43英寸",
                "desc": "FHD全高清屏，钢琴烤漆",
                "price": "3999"
            }, {
                "imgUrl": "./mi-img/shopping/goods/13.jpg",
                "title": "小米电视4S 75英寸",
                "desc": "4K HDR，人工智能语音",
                "price": "1399"
            }, {
                "imgUrl": "./mi-img/shopping/goods/14.webp",
                "title": "小米全面屏电视65英寸 E65C",
                "desc": "震撼大屏，时尚全面屏",
                "price": "4499"
            }, {
                "imgUrl": "./mi-img/shopping/goods/15.webp",
                "title": "小米全面屏电视E32C",
                "desc": "全面屏设计，人工智能系统",
                "price": "5999"
            }, {
                "imgUrl": "./mi-img/shopping/goods/16.webp",
                "title": "小米壁画电视 65英寸",
                "desc": "",
                "price": "2799"
            }]
        ],
        intelligent: [
            [{
                "imgUrl": "./mi-img/shopping/Intelligent/1.webp",
                "title": "小米「小爱老师」",
                "desc": "英语提分利器",
                "price": "499"
            }, {
                "imgUrl": "./mi-img/shopping/Intelligent/2.webp",
                "title": "小米智能门锁 E",
                "desc": "告别钥匙，畅享便捷生活",
                "price": "起"
            }, {
                "imgUrl": "./mi-img/shopping/Intelligent/3.webp",
                "title": "小米小爱音箱 Play",
                "desc": "听音乐、语音遥控家电",
                "price": "999"
            }, {
                "imgUrl": "./mi-img/shopping/Intelligent/4.webp",
                "title": "小爱音箱万能遥控版",
                "desc": "传统家电秒变智能",
                "price": "99"
            }, {
                "imgUrl": "./mi-img/shopping/Intelligent/5.webp",
                "title": "米家电饭煲4L",
                "desc": "890W 立体加热",
                "price": "169"
            }, {
                "imgUrl": "./mi-img/shopping/Intelligent/6.webp",
                "title": "米家智能窗帘",
                "desc": "窗帘开合随心控",
                "price": "149"
            }, {
                "imgUrl": "./mi-img/shopping/Intelligent/7.webp",
                "title": "小米体脂秤2",
                "desc": "轻松掌握身体脂肪率",
                "price": "199"
            }, {
                "imgUrl": "./mi-img/shopping/Intelligent/8.jpg",
                "title": "九号平衡车",
                "desc": "",
                "price": "299"
            }],
            [{
                "imgUrl": "./mi-img/shopping/Intelligent/9.webp",
                "title": "米家智能门锁 标准锁体 碳素黑",
                "desc": "一体化活体指纹识别，多种开锁方式",
                "price": "1299"
            }, {
                "imgUrl": "./mi-img/shopping/Intelligent/10.webp",
                "title": "米家智能门锁 标准锁体 磨砂金",
                "desc": "全新磨砂金配色，精湛工艺升级",
                "price": "1499"
            }, {
                "imgUrl": "./mi-img/shopping/Intelligent/11.webp",
                "title": "米家智能门锁 推拉式 通用版",
                "desc": "一步推拉，高端智能门锁",
                "price": "1699"
            }, {
                "imgUrl": "./mi-img/shopping/Intelligent/12.webp",
                "title": "米家智能门锁 青春版",
                "desc": "隐形指纹识别设计 简单一步快进家门",
                "price": "999"
            }, {
                "imgUrl": "./mi-img/shopping/Intelligent/13.webp",
                "title": "米家智能门锁 霸王锁体 碳素黑",
                "desc": "一体化活体指纹识别，多种开锁方式",
                "price": "1599"
            }, {
                "imgUrl": "./mi-img/shopping/Intelligent/14.webp",
                "title": "米家智能门锁 霸王锁体 磨砂金",
                "desc": "适配霸王锁体，多种开锁方式",
                "price": "1799"
            }, {
                "imgUrl": "./mi-img/shopping/Intelligent/15.jpg",
                "title": "小米米家小白智能摄像机增强版",
                "desc": "智能看护， AI你所爱",
                "price": "399"
            }, {
                "imgUrl": "./mi-img/shopping/Intelligent/16.jpg",
                "title": "小米米家智能摄像机云台版",
                "desc": "",
                "price": "179"
            }],
            [{
                "imgUrl": "./mi-img/shopping/Intelligent/17.jpg",
                "title": "米兔折叠婴儿推车",
                "desc": "出发去向往的地方",
                "price": "649"
            }, {
                "imgUrl": "./mi-img/shopping/Intelligent/18.png",
                "title": "九号平衡车 Plus",
                "desc": "一个形影不离的新伙伴",
                "price": "699"
            }, {
                "imgUrl": "./mi-img/shopping/Intelligent/19.webp",
                "title": "米家充气宝",
                "desc": "便携电动打气筒",
                "price": "3499"
            }, {
                "imgUrl": "./mi-img/shopping/Intelligent/20.webp",
                "title": "小米小背包",
                "desc": "城市休闲，简约设计",
                "price": "199"
            }, {
                "imgUrl": "./mi-img/shopping/Intelligent/21.webp",
                "title": "小米旅行箱 青春款",
                "desc": "环保材料，轻便重量",
                "price": "24.9"
            }, {
                "imgUrl": "./mi-img/shopping/Intelligent/22.webp",
                "title": "骑记电动助力自行车 新国标版 黑色",
                "desc": "更多助力选择，更多城市风景",
                "price": "起"
            }, {
                "imgUrl": "./mi-img/shopping/Intelligent/23.webp",
                "title": "小米米家对讲机2",
                "desc": "",
                "price": "199"
            }]
        ],
        dp: [
            [{
                "imgUrl": "./mi-img/shopping/dp/1.webp",
                "title": "小米真无线蓝牙耳机Air 2 Pro",
                "desc": "主动降噪/持久续航/无线充",
                "price": "699"
            }, {
                "imgUrl": "./mi-img/shopping/dp/2.webp",
                "title": "小米真无线蓝牙耳机 Air 2",
                "desc": "智能真无线，轻松舒适戴",
                "price": "299"
            }, {
                "imgUrl": "./mi-img/shopping/dp/3.webp",
                "title": "高速无线充套装",
                "desc": "快速无线闪充，Qi充电标准",
                "price": "399"
            }, {
                "imgUrl": "./mi-img/shopping/dp/4.webp",
                "title": "Redmi充电宝 10000mAh 标准版 白色",
                "desc": "10000mAh大电量",
                "price": "149"
            }, {
                "imgUrl": "./mi-img/shopping/dp/5.webp",
                "title": "Redmi充电宝 20000mAh 快充版",
                "desc": "大容量， 可上飞机",
                "price": "59"
            }, {
                "imgUrl": "./mi-img/shopping/dp/6.jpg",
                "title": "小米插线板 5孔位",
                "desc": "多重安全保护",
                "price": "99"
            }, {
                "imgUrl": "./mi-img/shopping/dp/7.jpg",
                "title": "小米蓝牙耳机AirDots青春版",
                "desc": "雅致简约，收纳充电盒",
                "price": "39"
            }, {
                "imgUrl": "./mi-img/shopping/dp/8.jpg",
                "title": "小米小爱蓝牙音箱 随身版",
                "desc": "",
                "price": "169"
            }],
            [{
                "imgUrl": "./mi-img/shopping/dp/9.webp",
                "title": "小米真无线蓝牙耳机Air 2 Pro",
                "desc": "主动降噪/持久续航/无线充",
                "price": "699"
            }, {
                "imgUrl": "./mi-img/shopping/dp/10.webp",
                "title": "小米真无线蓝牙耳机Air 2s",
                "desc": "全面升级，智慧真无线",
                "price": "399"
            }, {
                "imgUrl": "./mi-img/shopping/dp/11.webp",
                "title": "小米真无线蓝牙耳机 Air 2",
                "desc": "智能真无线，轻松舒适戴",
                "price": "299"
            }, {
                "imgUrl": "./mi-img/shopping/dp/12.webp",
                "title": "小米降噪项圈蓝牙耳机",
                "desc": "无线降噪，静无止境",
                "price": "399"
            }, {
                "imgUrl": "./mi-img/shopping/dp/13.jpg",
                "title": "小米蓝牙耳机AirDots青春版",
                "desc": "雅致简约，收纳充电盒",
                "price": "399"
            }, {
                "imgUrl": "./mi-img/shopping/dp/14.webp",
                "title": "小米小爱音箱 Pro",
                "desc": "语音遥控5000+品牌主流家电",
                "price": "499"
            }, {
                "imgUrl": "./mi-img/shopping/dp/15.webp",
                "title": "小米运动蓝牙耳机青春版",
                "desc": "音随你动",
                "price": "169"
            }, {
                "imgUrl": "./mi-img/shopping/dp/16.jpg",
                "title": "小米蓝牙项圈耳机",
                "desc": "",
                "price": "199"
            }]
        ],
        pj: [
            [{
                "imgUrl": "./mi-img/shopping/pj/1.webp",
                "title": "小米USB充电器30W快充版（1A1C）",
                "desc": "多一种接口，多一种选择",
                "price": "59"
            }, {
                "imgUrl": "./mi-img/shopping/pj/2.webp",
                "title": "高速无线充套装",
                "desc": "快速无线闪充，Qi充电标准",
                "price": "149"
            }, {
                "imgUrl": "./mi-img/shopping/pj/3.webp",
                "title": "小米无线充电宝青春版10000mAh",
                "desc": "能量满满，无线有线都能充",
                "price": "129"
            }, {
                "imgUrl": "./mi-img/shopping/pj/4.jpg",
                "title": "米家LED随身灯",
                "desc": "小巧轻便 5级亮度调节",
                "price": "19.9"
            }, {
                "imgUrl": "./mi-img/shopping/pj/5.webp",
                "title": "小米GaN充电器 Type-C 65W",
                "desc": "氮化镓黑科技 65W MAX 大功率快充",
                "price": "149"
            }, {
                "imgUrl": "./mi-img/shopping/pj/6.jpg",
                "title": "移动电源高配版（10000mAh）",
                "desc": "轻薄设计，轻松出行",
                "price": "129"
            }, {
                "imgUrl": "./mi-img/shopping/pj/7.jpg",
                "title": "小米二合一数据线100cm",
                "desc": "支持快充，安全保护",
                "price": "149"
            }, {
                "imgUrl": "./mi-img/shopping/pj/8.webp",
                "title": "小米真无线蓝牙耳机 Air 2",
                "desc": "",
                "price": "24.9"
            }],
            [{
                "imgUrl": "./mi-img/shopping/pj/9.webp",
                "title": "小米Type-C充电器65W 疾速闪充版",
                "desc": "疾速闪充",
                "price": "99"
            }, {
                "imgUrl": "./mi-img/shopping/pj/10.webp",
                "title": "小米GaN充电器 Type-C 65W",
                "desc": "氮化镓黑科技 65W MAX 大功率快充",
                "price": "149"
            }, {
                "imgUrl": "./mi-img/shopping/pj/11.webp",
                "title": "小米立式风冷无线充 30W",
                "desc": "解锁充电新姿势",
                "price": "199"
            }, {
                "imgUrl": "./mi-img/shopping/pj/12.webp",
                "title": "小米立式无线充电器 通用快充20W",
                "desc": "横竖可充，迅速感应边充边玩",
                "price": "99"
            }, {
                "imgUrl": "./mi-img/shopping/pj/13.webp",
                "title": "小米无线充电器（通用快充）",
                "desc": "铝合金外观，金属质感好",
                "price": "69"
            }, {
                "imgUrl": "./mi-img/shopping/pj/14.webp",
                "title": "米家智能插座蓝牙网关版",
                "desc": "让传统家电变智能",
                "price": "79"
            }, {
                "imgUrl": "./mi-img/shopping/pj/15.jpg",
                "title": "米家插线板6位基础版（含3口USB 2A快充）",
                "desc": "小巧设计，便捷不占地儿",
                "price": "79"
            }, {
                "imgUrl": "./mi-img/shopping/pj/16.jpg",
                "title": "小米插线板（含3口USB 2A快充）",
                "desc": "",
                "price": "49"
            }]
        ],
        zb: [
            [{
                "imgUrl": "./mi-img/shopping/zb/1.webp",
                "title": "米家飞行员太阳镜 Pro",
                "desc": "尼龙偏光，轻巧佩戴",
                "price": "199"
            }, {
                "imgUrl": "./mi-img/shopping/zb/2.webp",
                "title": "小米巨能写中性笔10支装",
                "desc": "一支顶4支，超长顺滑书写",
                "price": "9.99"
            }, {
                "imgUrl": "./mi-img/shopping/zb/3.webp",
                "title": "米家迷你保温杯",
                "desc": "可以随身携带的温度",
                "price": "49"
            }, {
                "imgUrl": "./mi-img/shopping/zb/4.jpg",
                "title": "贝医生巴氏牙刷 四色装",
                "desc": "进口刷毛，好品质",
                "price": "39.9"
            }, {
                "imgUrl": "./mi-img/shopping/zb/5.webp",
                "title": "米家运动鞋4",
                "desc": "轻盈若絮,弹若脱兔",
                "price": "179"
            }, {
                "imgUrl": "./mi-img/shopping/zb/6.webp",
                "title": "米家指甲刀五件套",
                "desc": "轻巧多用，优雅随行",
                "price": "199"
            }, {
                "imgUrl": "./mi-img/shopping/zb/7.webp",
                "title": "8H乳胶床垫2",
                "desc": "软硬双面可睡",
                "price": "39.9"
            }, {
                "imgUrl": "./mi-img/shopping/zb/8.webp",
                "title": "MIJOY 唱片机车载香薰",
                "desc": "",
                "price": "599"
            }],
            [{
                "imgUrl": "./mi-img/shopping/zb/9.webp",
                "title": "九号卡丁车Pro兰博基尼汽车定制版",
                "desc": "九号卡丁车Pro兰博基尼汽车定制版",
                "price": "9999"
            }, {
                "imgUrl": "./mi-img/shopping/zb/10.webp",
                "title": "90分框体旅行箱",
                "desc": "专利轻量合金中框，轻盈坚固",
                "price": "399"
            }, {
                "imgUrl": "./mi-img/shopping/zb/11.webp",
                "title": "小米商旅多功能双肩包 2",
                "desc": "商务旅行多场景，切换无压力",
                "price": "起"
            }, {
                "imgUrl": "./mi-img/shopping/zb/12.webp",
                "title": "米家飞行员太阳镜 Pro",
                "desc": "尼龙偏光，轻巧佩戴",
                "price": "599"
            }, {
                "imgUrl": "./mi-img/shopping/zb/13.jpg",
                "title": "最生活毛巾•青春系列",
                "desc": "3秒吸水，杀菌无刺激",
                "price": "199"
            }, {
                "imgUrl": "./mi-img/shopping/zb/14.jpg",
                "title": "九号平衡车",
                "desc": "年轻人的酷玩具",
                "price": "199"
            }, {
                "imgUrl": "./mi-img/shopping/zb/15.webp",
                "title": "小米米家电动滑板车Pro",
                "desc": "性能提升，动力更强劲",
                "price": "19.9"
            }, {
                "imgUrl": "./mi-img/shopping/zb/16.webp",
                "title": "米家经典方框太阳镜",
                "desc": "",
                "price": "1999"
            }]
        ]
    },
    video: [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11c70c96529b6e6938567ec1aa0910e0.mp4",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cdabcaa763392c86b944eaf4e68d6a3.mp4",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eadb8ddc86f1791154442a928b042e2f.mp4"
    ]
}