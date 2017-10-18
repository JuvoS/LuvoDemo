define(function (require, exports, module) {
    var $ = require('jquery');
    var $dialog = require('dialog');
    var seaCommon = require('common');
    var commonEvent = require('page/common/commonEvent');
    require('common/jquery.json');
    require('common/city-picker.data');
    require('common/city-picker');

    var _analysisMain = require('jsTemplate/analysis/analysisMain');



    var commonJson = null;
    var classIds = [];
    var memberType;

    function changeClass(){
        $("#class_list_20,#class_list_10").css("display", "none");
        $("#class_loading1,#class_loading2").css("display", "");
        var location = $("#city-picker1").val();
        var startYear = $("#class_start").html();
        var endYear = $("#class_end").html();
        $.post("/analysis/ajaxClassSearch/", {'location':location,'startYear':startYear,'endYear':endYear}, function(res){
            eval('data='+res+';');
            var i=0;
            var class_list_10 = "", class_list_20 = "";
            for(i in data){
                var list_str = '<tr><td class="td-mark">'+(parseInt(i, 10)+1)+'</td><td><a href="/help/classDetail/?classId='+data[i]['classId']+'">第'+data[i]['classId']+'类</a></td><td>'+data[i]['tmNum']+'</td></tr>';
                if(i < 23){
                    class_list_10 += list_str;
                }else{
                    class_list_20 += list_str;
                }
            }
            $("#class_list_10").html(class_list_10);
            $("#class_list_20").html(class_list_20);
            $("#class_loading1,#class_loading2").css("display", "none");
            $("#class_list_20,#class_list_10").css("display", "");
        });
    }

    function startSetHtml(json) {
        var $body = $('#body');
        commonJson = json;
        $body.html(_analysisMain({
            'login' : json.login,
            'navUrl' : json.navUrl,
            'keys' : json.keys,
            'classIds' :  json.userinfo.classIds,
            'swch' : {'k' : 0, 'name' : '近似查询'},
            'isIndex' : false,
            'data' : json.common
        })).removeClass('f-dhid');
        changePro(1, 1);
        changeClass();
        $(".map-rank table tbody tr:even td").css("background","#f8f8f8;");
        $(".table tbody tr:even td").css("background","#f8f8f8;");
        setTimeout(function () {
            $body.addClass('activeAnimate');
        }, 100);
        initDiYuFenBu(json);
        initShiJianQuShi(json);

        memberType = json.common.memberType;
        classIds = json.userinfo.classIds.split(',');
    }

    // 地域分布
    function initDiYuFenBu(json){
        var _list = json.common.diyu.locationData;
        var _max = json.common.diyu.max;
        var _start_year = json.common.start_year;
        var _end_year = json.common.end_year;
        var chart = echarts.init(document.getElementById('mapchina'));
        
        var rank = 0;
        var locationTotal = 0;
        var arrayJson = [];
        for( var i in _list ){
            rank++;
            locationTotal += _list[i]['applyNum'];
            arrayJson.push({
                'name'  : _list[i]['area'],
                'day'   : _start_year + '-' + _end_year,
                'type'  : '全类',
                'rank'  : rank + '/' + json.common.locationCount,
                'value' : _list[i]['applyNum']
            });
        }

        chart.setOption({
            tooltip : {
                trigger: 'item',
                formatter: function (params, ticket, callback) {
                    var data = params.data;
                    var res = '<font size="3">' + data.name + '</font><br/>';
                    res += '年份：' + data.day + '<br/>';
                    res += '商标类别：' + data.type + '<br/>';
                    res += '全国排名：' + data.rank + '<br/>';
                    res += '申请量：' + data.value + '<br/>';
                    return res;
                }
            },
            legend: {
                orient: 'vertical',
                x:'left',
                data:['省份']
            },            
            dataRange: {
                min: 0,
                max: _max,
                x: 'left',
                y: 'bottom',
                text:['高','低'],
                calculable : true
            },
            series : [{
                    name: '省份',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    itemStyle:{
                        normal:{label:{show:true}},
                        emphasis:{label:{show:true}}
                    },
                    data: arrayJson
            }]
        });
        $('#loc_total').html(locationTotal+'件');
    }

    // 时间趋势
    function initShiJianQuShi(json) {
        var _yearArr = json.common.shijian.yearArr;
        var _yearData = json.common.shijian.yearData;
        var _yearDataArray = [];
        
        var chart = echarts.init(document.getElementById('timebox'), 'macarons');
        for( var i in _yearData ){
            _yearDataArray.push({
                'day'   : i,
                'type'  : '全类',
                'value' : _yearData[i],
                'area'  : '全国'
            });
        }
        chart.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer:{
                    type : 'shadow'
                },
                formatter: function (params, ticket, callback) {
                    var data = params[0].data;
                    var res = '地区：' + data.area + '<br/>';
                    res += '年份：' + data.day + '<br/>';
                    res += '类别：' + data.type + '<br/>';
                    res += '申请量：' + data.value + '<br/>';
                    return res;
                }
            },
            xAxis: [{
                type: 'category',
                data: _yearArr,
                axisTick : {
                    show:false
                }
            }],
            yAxis : [{
                type : 'value',
                name : '申请量',
                nameTextStyle:{
                    color:'#000',
                    align: 'right',
                    fontSize: '14px'
                }
            }],
            series:[{
                name: '时间趋势',
                type:'bar',
                itemStyle : { normal: {label : {show: true}}},
                barMaxWidth : '30',
                data: _yearDataArray
            }]
        });
    }

    function changePro(page, page_jump){
        $("#pro_list").css("display", "none");
        if(page_jump == 0){
            $("#pro_pages").css("display", "none");
        }
        $("#pro_no_data").css("display", "none");
        $("#pro_loading").css("display", "");
        var class_str = $("#pro_class").html();
        var location = $("#city-picker2").val() == '全国' ? '' : $("#city-picker2").val();
        var startYear = $("#pro_start").html();
        var endYear = $("#pro_end").html();
        $.post("/analysis/ajaxProSearch/", {'location':location,'class_str':class_str,'startYear':startYear,'endYear':endYear,'page':page}, function(res){
            eval('res='+res+';');
            var total = res['total'];
            var data = res['rows'];
            var total_pages = Math.ceil(total/10);
            if(data.length == 0){
                $("#pro_loading").css("display", "none");
                $("#pro_no_data").css("display", "");
            }else{
                var i=0;
                var pro_list = "";
                var pages_list = "";
                var limitStart = (parseInt(page, 10)-1)*10;
                for(i in data){
					data[i]['proposerName'] = decodeURIComponent(data[i]['proposerName']);
					data[i]['proposerAddress'] = decodeURIComponent(data[i]['proposerAddress']);
                    pro_list += '<tr><td class="td-mark">'+(parseInt(i, 10)+limitStart+1)+'</td><td><a target="_blank" href="/analysis/details/?proposerId='+data[i]['proposerId']+'&proposerName='+encodeURI(data[i]['proposerName'])+'" class="txt-overflow" target="_blank">'+data[i]['proposerName']+'</a></td><td><span class="txt-overflow">'+data[i]['proposerAddress']+'</span></td><td class="td-center">'+data[i]['accordNum']+'</td><td class="td-center">'+data[i]['totalNum']+'</td><td class="td-center">'+Math.round(data[i]['accordNum']/data[i]['totalNum']*100)+'%</td></tr>';
                }
                if(page > 1){
                    pages_list = '<label class="mj-hco"><a href="javascript:void(0);" class="jAnalyPage" data-page="'+(parseInt(page, 10)-1)+'">上一页</a></label>';
                }else{
                    pages_list = '<label class="mj-hco"><a href="javascript:void(0);">上一页</a></label>';
                }
                var class_on = '';
                for(i=1;i<=total_pages;i++){
                    if(i == page){
                        class_on = 'class="on jAnalyPage"';
                    }else{
                        class_on = 'class="jAnalyPage"';
                    }
                    pages_list += '<a href="javascript:void(0);" '+class_on+' data-page="'+i+'">'+i+'</a>';
                }
                if(page < total_pages){
                    pages_list += '<label class="mj-hco"><a href="javascript:void(0);" class="jAnalyPage" data-page="'+(parseInt(page, 10)+1)+'">下一页</a></label>';
                }else{
                    pages_list += '<label class="mj-hco"><a href="javascript:void(0);">下一页</a></label>';
                }
                pages_list += '<span>共'+total_pages+'页 到第</span><select name="nump" id="nump" class="jAnalyPageChange">';
                for(i=1;i<=total_pages;i++){
                    if(i == page){
                        pages_list += '<option value="'+i+'" selected="selected">'+i+'</option>';
                    }else{
                        pages_list += '<option value="'+i+'">'+i+'</option>';
                    }
                }
                pages_list += '</select>';
                $("#pro_list").html(pro_list);
                $("#pro_pages").html(pages_list);
                $("#pro_loading").css("display", "none");
                $("#pro_list").css("display", "");
                $("#pro_pages").css("display", "");
            }
        });
    }

    function changeLoc(dom){
        $("#loc_top10").css("display", "none");
        $("#loc_loading").css("display", "");
        var class_str = $("#loc_class").html();
        var startYear = $("#loc_start").html();
        var endYear = $("#loc_end").html();
        $.post("/analysis/ajaxLocSearch/", {'class_str':class_str,'startYear':startYear,'endYear':endYear}, function(res){
            eval('data='+res+';');
            var series_data = [];
            var i=0,k=0;
            var j=0,sum=0;
            var loc_top10_str = "";
            var max = Math.ceil(data[0]['applyNum']/10000)*10000;
            class_str = class_str ? class_str.replace(/(^\s*)|(\s*$)/g, "").replace(/\s+/g, ',') : '全类';
            var class_arr = class_str.split(",");
            if(class_arr.length > 10){
                class_str = "";
                for(k in class_arr){
                    class_str += class_arr[k];
                    if(k < 9){
                        class_str += ",";
                    }
                    if(k >= 9){
                        break;
                    }
                }
                class_str += "...";
            }
            for(i in data){
                j = parseInt(i,10)+1;
                var loc = data[i]['area'];
                var line = {};
                var date_str = "";
                if(j <= 10){
                    loc_top10_str += '<tr><td><b>'+j+'</b></td><td>'+loc+'</td><td class="t-right">'+data[i]['applyNum']+'</td></tr>';
                }
                sum += data[i]['applyNum'];
                endYear = endYear ? endYear : new Date().getFullYear();
                startYear = startYear ? startYear : endYear - 10;
                date_str += startYear;
                date_str += "-";
                date_str += endYear;
                line.name = loc;
                line.day = date_str;
                line.type = class_str;
                line.rank = j+"/"+data.length;
                line.value = data[i]['applyNum'];
                series_data.push(line);
            }
            $("#loc_total").html(sum+"件");
            $("#loc_top10").html(loc_top10_str);
            $("#loc_loading").css("display", "none");
            $("#loc_top10").css("display", "");
            var chart = echarts.init(document.getElementById('mapchina'));
            chart.setOption({
                tooltip : {
                    trigger: 'item',
                    formatter: function (params, ticket, callback) {
                        var data = params.data;
                        var res = '<font size="3">' + data.name + '</font><br/>';
                        res += '年份：' + data.day + '<br/>';
                        res += '商标类别：' + data.type + '<br/>';
                        res += '全国排名：' + data.rank + '<br/>';
                        res += '申请量：' + data.value + '<br/>';
                        return res;
                    }
                },
                legend: {
                    orient: 'vertical',
                    x:'left',
                    data:['省份']
                },
                dataRange: {
                    min: 0,
                    max: max,
                    x: 'left',
                    y: 'bottom',
                    text:['高','低'],           // 文本，默认为数值文本
                    calculable : true
                },
                series : [
                    {
                        name: '省份',
                        type: 'map',
                        mapType: 'china',
                        roam: false,
                        itemStyle:{
                            normal:{label:{show:true}},
                            emphasis:{label:{show:true}}
                        },
                        data: series_data
                    }
                ]
            });
        });
    }

    function changeYear(){
        var _yearClassDom = $('#year_class').next().find('li.active');
        var class_str = 0;
        var _classArray = [];
        var location = $("#city-picker3").val();
        var startYear = $("#year_start").html();
        var endYear = $("#year_end").html();
        _yearClassDom.each(function () {
            _classArray.push( $(this).attr('data-key') );
        });
        class_str = _classArray.join(' ');
        $.post("/analysis/ajaxYearSearch/", {'location':location,'class_str':_classArray.join(' '),'startYear':startYear,'endYear':endYear}, function(res){
            eval('data='+res+';');
            var series_data = [];
            var year_data = [];
            var i="";
            var year_text = "";
            class_str = class_str ? class_str.replace(/(^\s*)|(\s*$)/g, "").replace(/\s+/g, ',') : '全类';
            var class_arr = class_str.split(",");
            if(class_arr.length > 10){
                class_str = "";
                for(var k in class_arr){
                    class_str += class_arr[k];
                    if(k < 9){
                        class_str += " ";
                    }
                    if(k >= 9){
                        break;
                    }
                }
                class_str += "...";
            }
            for(i in data){
                var line = {};
                var date_str = "";
                year_data.push(i);
                line.day = i;
                line.type = class_str;
                line.value = data[i];
                line.area = location ? location : "全国";
                series_data.push(line);
            }
            year_text += startYear ? startYear : "0000";
            year_text += "-";
            year_text += endYear ? endYear : new Date().getFullYear();
            year_text += "年 ";
            if(location){
                year_text += location;
            }
            if(class_str && class_str != '全类'){
                year_text += "第"+class_str+"类";
            }
            year_text += "商标申请趋势表";
            $("#year_text").html(year_text);
            $("#year_class").html(class_str);
            var chart = echarts.init(document.getElementById('timebox'), 'macarons');
            chart.setOption({
                tooltip: {
                    trigger: 'axis',
                    axisPointer:{
                        type : 'shadow'
                    },
                    formatter: function (params, ticket, callback) {
                        var data = params[0].data;
                        var res = '地区：' + data.area + '<br/>';
                        res += '年份：' + data.day + '<br/>';
                        res += '类别：' + data.type + '<br/>';
                        res += '申请量：' + data.value + '<br/>';
                        return res;
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick : {
                            show:false
                        },
                        data: year_data
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        name : '申请量',
                        nameTextStyle:{
                            color:'#000',
                            align: 'right',
                            fontSize: '14px'
                        }
                    }
                ],
                series: [
                    {
                        name: '时间趋势',
                        type:'bar',
                        itemStyle : { normal: {label : {show: true}}},
                        barMaxWidth : '30',
                        data: series_data
                    }
                ]
            });
        });
    }

    function changeClass(){

        $("#class_list_20,#class_list_10").css("display", "none");
        $("#class_loading1,#class_loading2").css("display", "");
        var location = $("#city-picker1").val();
        var startYear = $("#class_start").html();
        var endYear = $("#class_end").html();
        $.post("/analysis/ajaxClassSearch/", {'location':location,'startYear':startYear,'endYear':endYear}, function(res){
            eval('data='+res+';');
            var i=0;
            var class_list_10 = "", class_list_20 = "";
            for(i in data){
                var list_str = '<tr data-id="'+data[i]['classId']+'"><td>'+(parseInt(i, 10)+1)+'</td><td><a href="/help/classDetail/?classId='+data[i]['classId']+'" class="td-mark">第'+data[i]['classId']+'类</a></td><td>'+data[i]['tmNum']+'</td></tr>';
                if(i < 23){
                    class_list_10 += list_str;
                }else{
                    class_list_20 += list_str;
                }
            }
            $("#class_list_10").html(class_list_10);
            $("#class_list_20").html(class_list_20);
            if(memberType == 2) {
                if (classIds.length != 0) {
                    for(var i in classIds){
                        $('#class_list_10 tr').each(function (e) {
                            var _num1 = $(this).attr('data-id');
                            if(_num1 == classIds[i]){
                                $(this).find('.td-mark').css('color', '#2EC7C9');
                            }
                        })
                        $('#class_list_20 tr').each(function (e) {
                            var _num1 = $(this).attr('data-id');
                            if(_num1 == classIds[i]){
                                $(this).find('.td-mark').css('color', '#2EC7C9');
                            }
                        })
                    }
                }
            }
            $("#class_loading1,#class_loading2").css("display", "none");
            $("#class_list_20,#class_list_10").css("display", "");
        });
    }

    function startJqueryBind() {
        var isIE = function(ver){
            var b = document.createElement('b')
            b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
            return b.getElementsByTagName('i').length === 1
        }
        if(isIE(6) || isIE(7) || isIE(8)){
            $('.ietips').show();
        }

        var _prevDom = null;
        var _prevDomVal = '';

        var _selectList = null;
        var _txtDate = null;
        var _cityPickerDropdown = null;

        var _jShowAllLi = null;
        var _jYearDate = null;
        var _cityPickerSpan = null;

        $(window).scroll(function () {
            if ($(document).scrollTop() > 180) {
                $('.nav-menu').show();
            } else {
                $('.nav-menu').hide();
            }
        }).scroll(function () {
            var top = $(document).scrollTop();
            var menu = $(".nav-menu");
            var items = $("body").find(".item");
            var curId = "";
            items.each(function () {
                var m = $(this);
                var itemsTop = m.offset().top;
                if (top > itemsTop - 45) {
                    curId = "#" + m.attr("id");
                } else {
                    return false;
                }
            });
            var curLink = menu.find(".active");
            if (curId && curLink.attr("name") != curId) {
                curLink.removeClass("active");
                menu.find("[name=" + curId + "]").addClass("active");
            }
        });
        $(".nav-menu ul li").each(function (e) {
            $(this).click(function () {
                var i = e + 1;
                var id = $(this).find('a').attr('name');
                var height = $(id).offset().top;
                $("html,body").animate({scrollTop: height}, 100);
                $(".nav-menu ul li a").removeClass("active");
                $(".nav-menu ul li").eq(e).children("a").addClass("active");
            });
        });

        function hiddenAll() {
            if( _selectList == null ){
                _selectList = $('.select-list');
                _txtDate = $('.jYearDate ul');
                _cityPickerDropdown = $('.city-picker-dropdown');
                _cityPickerSpan = $('.city-picker-span');

                _jShowAllLi = $('.jShowAllLi');
                _jYearDate = $('.jYearDate');
            }
            _selectList.css('display', 'none');
            _txtDate.css('display', 'none');
            _cityPickerDropdown.css('display', 'none');

            _jShowAllLi.removeClass('active');
            _jYearDate.removeClass('active');
            _cityPickerSpan.removeClass('active focus open');
        }
        
        function ajaxSendFun() {
            var _id = _prevDom.attr('id');

            if( _id == 'city-picker2' ){
                // 申请人排名
                changePro(1, 1);
            }else if( _id == 'city-picker3' ){
                changeYear();
            }else if( _id == 'city-picker1' ){
                changeClass();
            }
            _prevDom = null;
        }
        
        $('body').click(function (event) {
            hiddenAll();
            if( _prevDom != null ){
                // ajaxSendFun();
            }
        }).on('click', '.jShowAllLi, .city-picker-span', function () {
            // 类别
            var _this = $(this);
            var _hasClass = _this.hasClass('city-picker-span');
            var _hasActive = _this.hasClass('active');
            var _hidden = _this.next().is(':hidden');
            var _findLi = _this.next().find('li');

            var classIds = [];
            classIds = _this.text().split(',');
            var _liList = _this.next('.select-list').find("li");
            if( classIds.length != 0){
                $.each(classIds, function (k ,v) {
                    _liList.eq((v-1)).addClass('active');
                });
            }
            hiddenAll();
            if( _hasClass && !_hasActive ){
                _cityPickerSpan.addClass('active focus open');
                _prevDom = _this.prev();
                _this.addClass('active').next().css('display', 'block');
            }else if( !_hasClass && !_hasActive ){
                _this.addClass('active').next().css('display', 'block');
            }else if( _hasClass && _hasActive ){
                _this.removeClass('active focus open').next().css('display', 'none');
            }
            _findLi.removeClass('temporary');
            _findLi.filter('.active').addClass('check');
            _findLi.filter('.check').addClass('active');
            return false;
        }).on('click', '.jDiyu, .city-picker-dropdown', function () {
            // 类别
            return false;
        }).on('click', '.jDiyu li', function () {
            // 类别选择
            var _this = $(this);
            var _key = _this.attr('data-key');
            var _has = _this.hasClass('active');
            var _has1 = _this.hasClass('temporary');
            if( _has ){
                _this.removeClass('active temporary');
            }else{
                _this.addClass('active temporary');
            }
            return false;
        }).on('click', '.btn-choise-no', function () {

            $(this).parent().parent().parent().css('display', 'none');
        }).on('click', '.jYearDate', function () {
            // 年份
            var _this = $(this);
            var _ul = _this.find('ul');
            var _hasClass = _this.hasClass('active');
            hiddenAll();
            if( !_hasClass ){
                _this.addClass('active');
                _ul.css('display', 'block');
            }
            return false;
        }).on('click', '.jYearDate li', function () {
            // 选择年份
            var _this = $(this);
            var _txt = _this.html();
            var _type = _this.parent().attr('type');
            _this.parent().css('display', 'none').prev().html(_txt).parent().removeClass('active');
            if( _type == 'Pro' ){
                changePro(1, 1);
            }else if( _type == 'Loc' ){
                changeLoc();
            }else if( _type == 'Year' ){
                changeYear();
            }else if( _type == 'Class' ){
                changeClass();
            }
            return false;
        }).on('click', '.jAnalyPage', function () {
            // 分页
            var _this = $(this);
            var _pageNum = _this.attr('data-page');
            changePro(_pageNum, 1);
        }).on('change', '.jAnalyPageChange', function () {
            // 分页select
            var _this = $(this);
            var _pageNum = _this.val();
            changePro(_pageNum, 1);
        }).on('click', '.btn-choise-no', function () {
            // 分类 取消按钮
            var _this = $(this);
            var _box = _this.parent().parent().parent();
            var _btn = _box.prev();
            var _array = [];
            _this.parent().prev().children('.active').each(function () {
                var _self = $(this);
                var _has = _self.hasClass('temporary');
                var _id = _self.attr('data-key');
                if( !_has ){
                    _array.push(_id);
                }else{
                    _self.removeClass('active temporary');
                }
            });
            _box.css('display', 'none');
            _btn.removeClass('active').html(_array.length ? _array.join(',') : '全类');
        }).on('click', '.city-close', function () {
            // 城市关闭
            hiddenAll();
            $('.city-picker-dropdown').hide();
            $('.city-picker-span').removeClass('active focus open');
            ajaxSendFun();

        }).on('click', '.btn-choise-yes', function () {
            // 全类选择
            var _this = $(this);
            var _type = _this.attr('data-type');
            // var _checkDom = _this.parent().prev().children('.active');
            var _checkDom = _this.parent().prev().children();
            var _checkArray = [];
            if( _checkDom.length ){
                _checkDom.each(function () {
                    var _self = $(this);
                    var _id = _self.attr('data-key');
                    var _active = _self.hasClass('active');
                    var _has = _self.hasClass('check');
                    if( _active ){
                        _checkArray.push(_id);
                    }
                    _self.removeClass('check');
                });
            }
            $('#'+_type+'_class').html( _checkArray.length ? _checkArray.join(',') : '全类' );
            _this.parent().parent().parent().css('display', 'none').prev().removeClass('active');
            switch (_type){
                case 'pro':
                        changePro(1, 1);
                    break;
                case 'loc':
                        changeLoc();
                    break;
                case 'Year':
                    changeYear();
                    break;
            }
        })


        if(memberType == 2){
            $('.jShowAllLi').click();
            $('.btn-choise-yes').each(function () {
                $(this).click();
            })
        }
    }

    module.exports = {
        initTable : function (json) {
            startSetHtml(json);
        },
        initBind : function () {
            startJqueryBind();
            commonEvent.bind();
        }
    }
});