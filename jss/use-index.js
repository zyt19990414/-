function jiazai(){
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://localhost:3000/data/use.json');
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                data = ajax_.responseText;
                dataList = JSON.parse(data);
                // 3.调用展示数据的方法
                show()
            } else {
                console.log('加载错误');
            }
        }
    }
}
var index=0;
var parent=``;
function show(){
    var bigdiv=document.getElementsByClassName('content-bigdiv')[0];
    var xxx=document.getElementsByClassName('xxx')[0];
    var xiala1= document.getElementsByClassName('xiala')[0];
    var body=document.getElementsByTagName('body')[0];
    var parent=``;
    for(var i=0;i<dataList[index].length;i++){
        parent+=`
        <div class="content-smdiv">
            <a class="ddiv" href="">
                <img src="${dataList[index][i].img}" alt="">
                <p class="name">${dataList[index][i].text}</p>
                <p class="sl">
                    <span>2032</span>
                    <span>20台</span>
                </p>
                <p class="sq">
                    <span>1392</span>申请
                </p>
                <p class="bgsl1">查看试用名单</p>
            </a>
            <div class="sf">
                首发
            </div>
        </div>`;

    }
   bigdiv.innerHTML+=parent;
   index+=1;
   bigdiv.style.height=bigdiv.offsetHeight+554+'px';
   bigdiv.scrollTop+=554+'px';
   if(index>=4){
       xxx.innerHTML="没有更多了~";
       xiala1.className='xiala1';
       xxx.onclick=null;
   }
 
    
}