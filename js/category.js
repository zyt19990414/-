// 头部部分

var header_1 = document.getElementsByClassName('header_1');
header_1[1].style.color = '#FE5341';


// 页面加载渲染数据

window.onload = function () {
    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP')

    ajax.open('get', 'http://127.0.0.1:3000/play/new');
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

        for (var j = 0; j < date[i].length; j++) {
            console.log(date[i][j]);
            str += `
                     <li>
                <a href="">
                <img src="${date[i][j].img}"> 
                </a>
                <div class="e1">
                    <p class="e1_1">
                        ${date[i][j].text}
                    </p>
                    <div class="e2">
                        <span class="e2_1">${date[i][j].price}</span>
                        <div class="e2_2">
                            <span class="e2_2_1">${date[i][j].like}</span>
                            <span class="e2_3_1">${date[i][j].words}</span>
                        </div>
                    </div>
                </div>
                     </li>
                    `
            var e = document.getElementsByClassName('e')[0];
            e.innerHTML = str;
        }
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
