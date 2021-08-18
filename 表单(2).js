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
            one_s.innerHTML = '<i class="word">长度7位，以“#”开头，后6位为0-9，a-f</i>';
        }

        user.onblur = function () {
            var reg = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

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
            two_s.innerHTML = '<i class="word">长度不限 以http:/https:/不含两者开头，开头为www,结尾为com</i>';
        }

        f_pass.onblur = function () {
            var reg = /^([hH][tT]{2}[pP]:\/\/||[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;

            if (f_pass.value == "") {
                two_s.innerHTML = '<i class="fal">不能以空白形式提交</i>';
            }

            else if (!reg.test(f_pass.value)) {
                two_s.innerHTML = '<i class="fal">填写错误！</i>';
                flag = false;
            }

            else {
                two_s.innerHTML = '<i class="tru">输入正确，是url！</i>';
            }
        }

        s_pass.onfocus = function () {
            three_s.style.display = "block";
            three_s.innerHTML = '<i class="word">请输入汉字</i>';
        }

        s_pass.onblur = function () {
            var reg = /[\u4E00-\u9FA5]/;

            if (s_pass.value == "") {
                three_s.innerHTML = '<i class="fal">不能以空白形式提交</i>';
                return 0;
            }
            else if (!reg.test(s_pass.value)) {
                three_s.innerHTML = '<i class="fal">不含有汉字</i>';
                return 0;
            }
            else {
                three_s.innerHTML = '<i class="tru">含有汉字！</i>';
                return 0;
            }
        }
       

        function buttonClick() {
            one_s.innerHTML = "";
            two_s.innerHTML = "";
            three_s.innerHTML = "";
            four_s.innerHTML = "";
        }