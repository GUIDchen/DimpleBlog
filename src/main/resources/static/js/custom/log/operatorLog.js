/**
 * 登陆日志JS
 */
$(function () {
    initTable();
});

$(".osType").click(function () {
    $("#browserType").val("");
    console.log($(this).attr("osType"));
    var osType = $(this).attr("osType");
    $("#osType").val(osType);
    $.table.search();
});

$(".browserType").click(function () {
    $("#osType").val("");
    console.log($(this).attr("browserType"));
    var browserType = $(this).attr("browserType");
    $("#browserType").val(browserType);
    $.table.search();
});

function initTable() {

    var option = {
            url: "/log/operateLog.json",
            deleteUrl: "/log/operateLog/{id}",
            cleanUrl: "/log/operateLog",
            detailUrl: "/log/operateLog/{id}",
            sortName: "createTime",
            sortOrder: "desc",
            modalName: "操作日志",
            search: false,
            uniqueId: "operateId",//唯一标识
            showExport: false,
            columns: [{
                checkbox: true
            }, {
                field: 'title',
                title: '操作模块',
                align: 'center',
            }, {
                field: 'operateType',
                title: '操作类型',
                align: 'center',
                formatter: function (value, row, index) {
                    var actions = [];
                    if (value == 1) {
                        actions.push("<span class='badge badge-danger" + "'>" +"新增"+ "</span>");
                    }
                    return actions.join('');
                }
            }, {
                field: 'loginLocation',
                title: '操作人员',
                align: 'center',
            }, {
                field: 'operateIp',
                title: '主机',
                align: 'center',
            }, {
                field: 'operateLocation',
                title: '操作地点',
                align: 'center',
            }, {
                field: 'operateStatus',
                title: '操作状态',
                align: 'center',
                formatter: function (value, row, index) {
                    if (value == true) {
                        return '<span class="badge badge-info">成功</span>';
                    } else if (value == false) {
                        return '<span class="badge badge-danger">失败</span>';
                    }
                }
            }, {
                field: 'operateTime',
                title: '操作时间',
                align: 'center',
                formatter: function (value, row, index) {
                    return $.common.dateFormat(value);
                }
            }, {
                field: 'loginTime',
                title: '操作',
                align: 'center',
                formatter: function (value, row, index) {
                    var actions = [];
                    actions.push('<a class="btn btn-warning btn-xs ' + '" href="#" onclick="$.operate.detail(\'' + row.operateId + '\')"><i class="fa fa-search"></i>详细</a>');
                    return actions.join('');
                }
            }
            ],
        }
    ;
    $.table.init(option);
}