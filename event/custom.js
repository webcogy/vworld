/* 
function getMapCoods(map){
    map.onClick.addEventListener(function(e){
        console.log(e) // 지도상의 고정좌표가 아니고 동적좌표다....;;
    });
}
 */


var idx=1;
var setPosition = []; // 클릭한 위치 좌표 저장

// 클릭한 위치 좌표가져오기
function getMapCoods(map){
    setTimeout(function(){
        map.onClick.addEventListener(MapCoordsXy);  
        map.onMouseMove.addEventListener(MapCoordsMouseMoveEvent);
    },200);
}

// x,y 좌표를 뽑아오는 것이 목적인 함수
function MapCoordsXy( windowposition, ecefposition, cartographic, featureInfo ){
    try{
        var x = vw.Util.toDegrees(cartographic.longitude);
        var y = vw.Util.toDegrees(cartographic.latitude);

        setPosition[idx-1] = {
            name:'클릭한 위치' + idx,
            x:x,
            y:y,
        };

        setXy(x,y); 
        setMarker(x,y,'클릭한 위치' + idx);
        setMarkerlist(setPosition);
        
    }catch(e){
        console.log(e)
    }

    return idx++;
}

// 지도 위에서 클릭한 좌표리스트
function setMarkerlist(arr){
    var add_html='';
    for(var i=0; i<arr.length; i++){
        add_html += '<a class="link_marker" href="javascript:markerMoveTo('+arr[i].x + ','+arr[i].y+',1000)" value="'+arr[i].name+'">'+arr[i].name+'</a>';
    }
    $('#markerList').empty().append(add_html);
    add_html='';
}

// DB에서 가져온 좌표리스트
function setMarkerlistDB(arr){
    var add_html='';
    for(var i=0; i<arr.length; i++){
        add_html += '<a class="link_marker" href="javascript:markerMoveTo('+arr[i].x + ','+arr[i].y+',1000)" value="'+arr[i].name+'">'+arr[i].name+'</a>';
    }
    
    setTimeout(function(){
        for(var i=0; i<arr.length; i++){
            setMarker(arr[i].x, arr[i].y, arr[i].name);
        }
    }, 2000);
    
    $('#markerListDB').empty().append(add_html);
    add_html='';
}


// x,y좌표 마우스 움직일때마다 실시간 읽기
function MapCoordsMouseMoveEvent( windowposition, ecefposition, cartographic, featureInfo ){
    try{
        var x = vw.Util.toDegrees(cartographic.longitude);
        var y = vw.Util.toDegrees(cartographic.latitude);
        setXy(x,y);
    }catch(e){
        console.log(e)
    }
}

// 마커 클릭시 좌표로 이동
function markerMoveTo(x,y,z){
    var movePo = new vw.CoordZ(x,y,z);
    var mPosi = new vw.CameraPosition(movePo, new vw.Direction(0,-80,0));
    map.moveTo(mPosi);     

    setXy(x,y);
}

// 화면에 좌표값 셋팅
function setXy(x,y){
    $('#x').text(x);
    $('#y').text(y);
}