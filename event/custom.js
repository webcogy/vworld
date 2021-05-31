/* 
function getMapCoods(map){
    map.onClick.addEventListener(function(e){
        console.log(e) // 지도상의 고정좌표가 아니고 동적좌표다....;;
    });
}
 */


var idx=1;

// 클릭한 위치 좌표가져오기
function getMapCoods(map){
    map.onClick.addEventListener(MapCoodsEvent);  
    map.onMouseMove.addEventListener(MapCoodsMouseMoveEvent);
}

function MapCoodsEvent( windowposition, ecefposition, cartographic, featureInfo ){
    var x = vw.Util.toDegrees(cartographic.longitude);
    var y = vw.Util.toDegrees(cartographic.latitude);

    setUI_xy(x,y);
    
    // 화면에 마커 셋팅
    setMarker(x,y,'클릭한 위치' + idx);

    // 클릭한 마커 배열에 담기
    setPosition[idx-1] = {
        x:x,
        y:y,
        name:'클릭한 위치' + idx
    };

    // 마커 리스트 뿌림
    var add_html='';
    for(var i=0; i<setPosition.length; i++){
        add_html += '<a class="link_marker" href="javascript:markerMoveTo('+setPosition[i].x + ','+setPosition[i].y+',1000)" value="'+setPosition[i].name+'">'+setPosition[i].name+'</a>';
    }
    $('#markerList').empty().append(add_html);
    add_html='';
    return idx++;
}

// x,y좌표 마우스 움직일때마다 실시간 읽기
function MapCoodsMouseMoveEvent( windowposition, ecefposition, cartographic, featureInfo ){
    var x = vw.Util.toDegrees(cartographic.longitude);
    var y = vw.Util.toDegrees(cartographic.latitude);

    // 화면에 좌표값 셋팅
    setUI_xy(x,y);
}

// 마커 클릭시 좌표로 이동
function markerMoveTo(x,y,z){
    var movePo = new vw.CoordZ(x,y,z);
    var mPosi = new vw.CameraPosition(movePo, new vw.Direction(0,-80,0));
    map.moveTo(mPosi);     

    setUI_xy(x,y);
}

// 화면에 좌표값 셋팅
function setUI_xy(x,y){
    $('#x').text(x);
    $('#y').text(y);
}