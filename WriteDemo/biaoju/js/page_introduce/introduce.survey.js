define(function (require, exports, module) {
    var $ = require('jquery');
    var $dialog = require('dialog');
    var seaCommon = require('common');
    var commonEvent = require('page/common/commonEvent');
    require('common/jquery.json');


    var _indexMainTemp = require('jsTemplate/introduce/introduceSurvey');

    
    var commonJson = null;
    
    function startSetHtml(json) {
        var $body = $('#body');
        commonJson = json;
        $body.html(_indexMainTemp({
            'login' : json.login,
            'navUrl' : json.navUrl,
            'keys' : json.keys,
            'data' : json.common
        })).removeClass('f-dhid');
        setTimeout(function () {
            $body.addClass('activeAnimate');
            setTimeout(function () {
                $("#body").hide('100');
                $('.htmleaf-container').show();
            }, 4000);
        }, 100);
    }

    function startJqueryBind(json) {
        
    }

    module.exports = {
        initTable : function (json) {
            startSetHtml(json);
        },
        initBind : function (dataJson) {
            startJqueryBind();
            commonEvent.bind(dataJson);
        }
    }
});