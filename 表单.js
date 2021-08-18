var user = document.getElementById("user");
        var f_pass = document.getElementById("f_pass");
        var s_pass = document.getElementById("s_pass");
        var allSpan = document.getElementsByTagName("span");
        var one_s = allSpan[0];
        var two_s = allSpan[1];
        var three_s = allSpan[2];
        var four_s = allSpan[3];
        var flag = true;

        user.onfocus = function () {
            one_s.style.display = "block";
            one_s.innerHTML = '<i class="word">长度4到16位（字母、数字、下划线、减号皆可）</i>';
        }

        user.onblur = function () {
            var reg = /^[\w\-]{4,16}$/;

            if (user.value == "") {
                one_s.innerHTML = '<i class="fal">不能以空白形式提交</i>';
                return 0;
            }

            else if (!reg.test(user.value)) {
                one_s.innerHTML = '<i class="fal">长度不在4—16位，或者存在非法字符</i>';
                return 0;
            }

            else {
                one_s.innerHTML = '<i class="tru">用户名符合规定！</i>';
                return 0;
            }
        }


        f_pass.onfocus = function () {
            two_s.style.display = "block";
            two_s.innerHTML = '<i class="word">长度8位 第一位必须是1 二到三位为0-5任意数 四到六位为6-9任意数八位九位为a到d之间的字母（大小写皆允许）</i>';
        }

        f_pass.onblur = function () {
            var reg = /^1[0-5]{2}[6-9]{3}[a-d]{2}$/;

            if (f_pass.value == "") {
                two_s.innerHTML = '<i class="fal">不能以空白形式提交</i>';
            }

            else if (!reg.test(f_pass.value)) {
                two_s.innerHTML = '<i class="fal">填写错误！</i>';
                flag = false;
            }

            else {
                two_s.innerHTML = '<i class="tru">密码符合规定！</i>';
            }
        }

        s_pass.onfocus = function () {
            three_s.style.display = "block";
            three_s.innerHTML = '<i class="word">和上一步输入的密码需要一致</i>';
        }

        s_pass.onblur = function () {
            if (s_pass.value == "") {
                three_s.innerHTML = '<i class="fal">不能以空白形式提交</i>';
            }
            else if (f_pass.value != s_pass.value || flag == false) {
                three_s.innerHTML = '<i class="fal">两次密码不一致或者密码非法！</i>';
            }
            else {
                three_s.innerHTML = '<i class="tru">两次密码填写一致！</i>';
            }
        }
        phoneNum.onfocus = function () {
            four_s.style.display = "block";
            four_s.innerHTML = '<i class="word">长度11位 第一位为1 第二位为3-9任意数字 第三位以后任意数字9位</i>';
        }

        phoneNum.onblur = function () {
            var reg = /^1[3-9]\d{9}$/;

            if (phoneNum.value == "") {
                four_s.innerHTML = '<i class="fal">不能以空白形式提交</i>';
                return 0;
            }
            else if (!reg.test(phoneNum.value)) {
                four_s.innerHTML = '<i class="fal">填写错误</i>';
                return 0;
            }
            else {
                four_s.innerHTML = '<i class="tru">填写正确！</i>';
                return 0;
            }
        }

        function buttonClick() {
            one_s.innerHTML = "";
            two_s.innerHTML = "";
            three_s.innerHTML = "";
            four_s.innerHTML = "";
        }