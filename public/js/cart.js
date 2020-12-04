// 对小数点后过长的数据进行格式化
Vue.filter('toFixed', function (value) {
    let arr = value.toString().split('.');
    if (arr.length >= 2) {
        if (arr[1].length > 2) {
            return value.toFixed(1);
        } else return value;
    } else return value;
})

var app = new Vue({
    el: "#app",
    data: {
        init_id: 1,
        car: [],
        count: 0,
        check_num: 0,
        count_money: 0,
        recommend: [],
        type: ["phone", "goods", "dp", "pj", "zb", "intelligent"],
        del_tip: false,
        tip: {
            isShow: false,
            i: true,
            txt1: "修改数量不能小于0",
            txt2: "商品添加购物车数量大于购买上限"
        },
        tip2: false,
        checkAll: true,
        del_index: undefined,
        adding: []
    },
    mounted() {
        // 获取cookie数据，有则执行数据更新
        let cookie = cookie_get('car');
        if (cookie) {
            this.car = cookie;
            if (this.car.length > 0) {
                this.updateCheckNum();
                this.updateShoppingNum();
                this.changeState();
                this.init_id = this.car[this.car.length - 1].id + 1;
            }
        };
        this.init();
        this.footer_last_img_tab();
    },
    methods: {
        init() {
            this.init_car(data_menu.shopping);
        },
        // 在获取的数居中随机获取不相同的商品存入 car 数组
        init_car(data) {
            let shopping = data;
            for (let i = 0; i < 15; i++) {
                let plNum = (Math.random() * 1000).toFixed(1);
                let type_index = Math.floor(Math.random() * this.type.length);
                if (this.type[type_index] == "phone") {
                    let index = Math.floor(Math.random() * shopping[this.type[type_index]].length);
                    if (this.recommend.includes(shopping[this.type[type_index]][index])) {
                        i -= 1;
                        continue;
                    }
                    shopping[this.type[type_index]][index].pl = plNum;
                    this.recommend.push(shopping[this.type[type_index]][index]);
                } else {
                    let index = Math.floor(Math.random() * shopping[this.type[type_index]][0].length);
                    if (this.recommend.includes(shopping[this.type[type_index]][0][index])) {
                        i -= 1;
                        continue;
                    }
                    shopping[this.type[type_index]][0][index].pl = plNum;
                    this.recommend.push(shopping[this.type[type_index]][0][index]);
                }

            }
        },
        // 添加数据进入购物车
        add_car(obj, v) {
            let isAdd = true;
            // 阻隔数据添加过快，每一秒可添加一组相同数据 - 作用是配合动画
            if (!this.adding.includes(v)) {
                this.adding.push(v);
                let o = true;
                for (let i in this.car) {
                    if (this.car[i].title == obj.title) {
                        o = false;
                        if (this.car[i].max > 0) {
                            this.car[i].max--;
                            this.car[i].count += 1;
                            let newObj = this.car[i];
                            Vue.set(this.car, i, newObj);
                        } else {
                            isAdd = false;
                            this.tip.i = false;
                            this.show_tip();
                        }
                        break;
                    }
                }
                if (o) {
                    obj.count = 1;
                    obj.id = this.init_id;
                    obj.checked = true;
                    obj.max = Math.floor(Math.random() * 20);
                    this.init_id++;
                    this.car.unshift(obj);
                }
                if (isAdd) {
                    this.updateShoppingNum();
                    this.updateCheckNum();
                    this.$nextTick(() => {
                        this.$refs.r_items[v].children[0].classList.remove('show_success_tip');
                        this.$refs.r_items[v].children[0].classList.add('show_success_tip');
                    })
                }
                setTimeout(() => {
                    this.$refs.r_items[v].children[0].classList.remove('show_success_tip');
                    this.adding.splice(this.adding.indexOf(v), 1);
                }, 1000);
            }
        },
        // 底部栏图片切换
        footer_last_img_tab() {
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
        },
        // 显示删除提示弹框
        show_del_tip(index) {
            this.del_tip = true;
            this.del_index = index;
            this.$nextTick(() => {
                $('.del_tip .win').addClass('fadeIn');
                $('.del_tip .win').removeClass('fadeOut');
            });
        },
        // 关闭删除提示弹框
        close_del_tip() {
            $('.del_tip .win').addClass('fadeOut');
            $('.del_tip .win').removeClass('fadeIn');
            setTimeout(() => {
                this.del_tip = false;
                this.del_index = undefined;
            }, 300);
        },
        // 删除商品
        del() {
            this.car.splice(this.del_index, 1);
            this.del_tip = false;
            this.del_index = undefined;
            this.changeState();
            this.updateShoppingNum();
        },
        // 商品数量增加
        addNum(i, v) {
            if (i.max > 0) {
                i.count++;
                i.max--;
                Vue.set(this.car, v, i);
                this.updateShoppingNum();
                this.updateCheckNum();
            } else {
                this.tip.i = false;
                this.show_tip();
            }
        },
        // 商品数量减少
        reduceNum(i, v) {
            if (i.count <= 1) {
                this.tip.i = true;
                this.show_tip();
            } else {
                i.count--;
                i.max++;
                Vue.set(this.car, v, i);
            }
            this.updateShoppingNum();
            this.updateCheckNum();
        },
        // 打开提示弹框
        show_tip() {
            this.tip.isShow = true;
            this.$nextTick(() => {
                $('.tips .win').addClass('fadeIn');
                $('.tips .win').removeClass('fadeOut')
            })
        },
        // 关闭提示弹框
        close_tip() {
            $('.tips .win').addClass('fadeOut');
            $('.tips .win').removeClass('fadeIn')
            setTimeout(() => {
                this.tip.isShow = false;
            }, 300);
        },
        // 改变全选复选框按钮方法
        checkAllStateChange() {
            for (let i of this.car) {
                i.checked = this.checkAll
            }
            this.updateCheckNum();
        },
        // 改变单个复选框按钮方法
        changeState() {
            this.updateCheckNum();
            this.checkAll = true;
            for (let i of this.car) {
                if (!i.checked) {
                    this.checkAll = false;
                    break;
                }
            }
        },
        // 更新选择商品的总价格
        update_count_money() {
            this.count_money = 0;
            for (let i of this.car) {
                if (i.checked) {
                    this.count_money += i.price * i.count;
                }
            }
            cookie_set('car', this.car);
        },
        // 更新选择商品数量
        updateCheckNum() {
            this.check_num = 0;
            for (let x of this.car) {
                if (x.checked) {
                    this.check_num += x.count;
                }
            }
            this.update_count_money();
        },
        // 更新购物车商品
        updateShoppingNum() {
            this.count = 0;
            for (let i of this.car) {
                this.count += i.count;
            }
            cookie_set('car', this.car);
        }
    }
});