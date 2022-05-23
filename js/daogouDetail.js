// 头部部分

var header_1 = document.getElementsByClassName('header_1');
header_1[2].style.color = '#FE5341';


// 页面加载渲染数据

window.onload = function () {
    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP')

    ajax.open('get', 'http://127.0.0.1:3000/guid/new');
    ajax.send();

    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                var date = JSON.parse(ajax.responseText)
                // console.log(date);
                show(date)
            }
        }
    }
}

function show(date) {
    // console.log(date);
    var str = '';
    for (var i = 0; i < date.length; i++) {
        // console.log(date[i]);
        str += `
            <li>
                    <a href="">
                 <img src="${date[i].img}"">
                    <p class="b2">
                    ${date[i].text}
                    </p>

                        <p class="b3">
                        <p class="b3_2">
                        <span class="b3_3">${date[i].like}</span>

                        <span class="b3_4">${date[i].words}</span>
                    </p>
                        </p>
                    </a>
                    </li>
                    `
        var e = document.getElementsByClassName('e')[0];
        e.innerHTML = str;
    }
}

// 点击加载更多部分
var e3 = document.getElementsByClassName('e3')[0];
// console.log(e3);
var e3_2 = document.getElementsByClassName('e3_2')[0]
// console.log(e3_2);
e3.onclick = function () {
    e3.style.display = 'none';
    e3_2.style.display = 'block'
}


// 最新、最热下划线

var h = document.getElementsByClassName('h')[0].children;
console.log(h);
h[1].style['border-bottom'] = '2px solid rgb(238, 10, 10)';
h[1].style.color = 'rgb(238, 10, 10)';