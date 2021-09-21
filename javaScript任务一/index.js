// 通过二维数组中省会的编码找到对应城市的编码

(function () {
    var provinceNode=document.getElementById('province'),
        cityNode=document.getElementById('city'),
        countyNode=document.getElementById('county');

    //省会的获取
    var provinceStr='';
    for(var i=0;i<province.length;i++){
        provinceStr +='<option value='+province[i].item_code+'>'+province[i].item_name+'</option>';
    }
    provinceNode.innerHTML=provinceStr;

    //城市的获取
    var cityArr=[],j=0;
    for(var i=0;i<city.length;i++){
        if(city[i].item_code-provinceNode.value>=100&&city[i].item_code-provinceNode.value<10000){
            cityArr[j++]=city[i];
        }
    }
    var cityStr='';
    for(var k=0;k<cityArr.length;k++){
        cityStr +='<option value='+cityArr[k].item_code+'>'+cityArr[k].item_name+'</option>';
    }
    cityNode.innerHTML=cityStr;

    //县/区的获取
    var countyArr=[],s=0;
    for(var i=0;i<county.length;i++){
        if(county[i].item_code-cityNode.value>=1&&county[i].item_code-cityNode.value<100){
            countyArr[s++]=county[i];
        }
    }
    var countyStr='';
    for(var i=0;i<countyArr.length;i++){
        countyStr +='<option>'+countyArr[i].item_name+'</option>';
    }
    countyNode.innerHTML=countyStr;



    provinceNode.onchange=function (){  //改变省会，市改变
        //城市的获取
        var cityArr=[],j=0;
        for(var i=0;i<city.length;i++){
            if(city[i].item_code-provinceNode.value>=100&&city[i].item_code-provinceNode.value<10000){
                cityArr[j++]=city[i];
            }
        }
        var cityStr='';
        for(var k=0;k<cityArr.length;k++){
            cityStr +='<option value='+cityArr[k].item_code+'>'+cityArr[k].item_name+'</option>';
        }
        cityNode.innerHTML=cityStr;

        //县/区的获取
        var countyArr=[],s=0;
        for(var i=0;i<county.length;i++){
             if(county[i].item_code-cityNode.value>=1&&county[i].item_code-cityNode.value<100){
                 countyArr[s++]=county[i];
             }
        }
        var countyStr='';
        for(var i=0;i<countyArr.length;i++){
            countyStr +='<option>'+countyArr[i].item_name+'</option>';
        }
        countyNode.innerHTML=countyStr;
    }


    cityNode.onchange=function (){  //改变市，县/区改变
        var countyArr=[],s=0;
        for(var i=0;i<county.length;i++){
            if(county[i].item_code-cityNode.value>=1&&county[i].item_code-cityNode.value<100){
                countyArr[s++]=county[i];
            }
        }
        var countyStr='';
        for(var i=0;i<countyArr.length;i++){
            countyStr +='<option>'+countyArr[i].item_name+'</option>';
        }
        countyNode.innerHTML=countyStr;
    }
})()