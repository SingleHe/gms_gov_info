/* 
 * noty.js
 * showNoty(4, 5, "要显示的信息", 1000, false, false);
 * 参数介绍 
 * 第一个参数是提示状态(提示=>1,成功=>2,错误=>3,警告=>4,信息=>5)，
 * 第二个参数是位置，根据屏幕分为9块(从左到右可以传递数字也可以为字母)
 * 第三个参数是要显示的文本，
 * 第四个参数是要显示的时间(毫秒)
 * 第五个参数是是否遮罩效果(true/false)
 * 第六个参数是是否显示对话框(true/false)有返回函数Confirm()这个里面执行你想要继续执行的操作;
 * 
 */
function Confirm() {
    showNoty("success", "center", '您选择了"是"', 1000, true);
}
function showNoty(status, location, text, time, modal, confirm) {

    if (status === "提示" || status === 1) {
        status = "alert";
    } else if (status === "成功" || status === 2) {
        status = "success";
    } else if (status === "错误" || status === 3) {
        status = "error";
    } else if (status === "警告" || status === 4) {
        status = "warning";
    } else if (status === "信息" || status === 5) {
        status = "information";
    }

    if (location === 1) {
        location = "topLeft";
    } else if (location === 2) {
        location = "topCenter";
    } else if (location === 3) {
        location = "topRight";
    } else if (location === 4) {
        location = "centerLeft";
    } else if (location === 5) {
        location = "center";
    } else if (location === 6) {
        location = "centerRight";
    } else if (location === 7) {
        location = "bottomLeft";
    } else if (location === 8) {
        location = "bottomCenter";
    } else if (location === 9) {
        location = "bottomRight";
    }

    if (status === undefined || status === "") {
        status = "warning";
    }

    if (location === undefined || location === "") {
        location = "center";
    }

    if (text === undefined || text === "") {
        text = "noty.js";
    }

    if (time === undefined || time === "") {
        time = 3000;
    }
    if (modal === undefined || modal === "") {
        modal = false;
    }

    if (confirm === undefined || confirm === "") {
        confirm = false;
    }

    if (confirm === true) {
        var buttons = [
            {addClass: 'btn btn-primary', text: '是', onClick: function($noty) {
                    $noty.close();
                    Confirm();
                }
            },
            {addClass: 'btn btn-danger', text: '否', onClick: function($noty) {
                    $noty.close();
                }
            }
        ];
    } else {
        var buttons = false;
    }

    var n = noty({
        text: text,
        type: status,
        modal: modal,
        layout: location,
        timeout: time,
        buttons: buttons
    });
}

//验证邮箱是否正确
function is_Email(email) {
    if (email.search(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i) == -1) {
        return false;
    } else {
        return true;
    }
}
//验证手机号码
function is_Phone(phone) {
    if (phone.search(/^0?1[3|4|5|8][0-9]\d{8}$/) === -1) {
        return false;
    } else {
        return true;
    }
}

//验证固话格式
function is_FPhone(phone) {
    if (phone.search(/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/) === -1) {
        return false;
    } else {
        return true;
    }
}