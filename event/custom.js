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
        var z = vw.Util.toDegrees(cartographic.height);

        setPosition[idx-1] = {
            name:'클릭한 위치' + idx,
            x:x,
            y:y,
            z:z,
        };

        setXy(x,y,z); 
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
        var z = vw.Util.toDegrees(cartographic.height);
        
        setXy(x,y,z);
    }catch(e){
        console.log(e)
    }
}

// 마커 클릭시 좌표로 이동
function markerMoveTo(x,y,z){
    var movePo = new vw.CoordZ(x,y,z);
    var mPosi = new vw.CameraPosition(movePo, new vw.Direction(0,-80,0));
    map.moveTo(mPosi);     

    setXy(x,y,z);
}

// 화면에 좌표값 셋팅
function setXy(x,y,z){
    $('#x').text(x);
    $('#y').text(y);
    $('#z').text(z);
}

// 좌표따라 지도에 라인그리기 테스트
function coordsPoint(x1,y1, x2,y2){
    var outlineColor = document.getElementById("OutlineColor").value;
    var fillColor = document.getElementById("FillColor").value;
    var point1Coord = new vw.Coord(x1, y1);
    var point2Coord = new vw.Coord(x2, y2);
    
    var ar = new Array();
    ar.push(point1Coord);
    ar.push(point2Coord);
    
    var coordCol = new vw.Collection(ar);
    var linestring = new vw.geom.LineString(coordCol);
    
    linestring.setFillColor( fillColor );
    linestring.setWidth(10);
    
    linestring.create();
    
    var coord_start = new vw.Coord(x1,y1);
    var coord_end = new vw.Coord(x2,y2);
    
    var line = new vw.geom.Line(coord_start, coord_end);
    
    line.setFillColor( fillColor );
    line.setWidth(10);
    
    line.create();
    
    var lineZ = new vw.geom.LineZ(coord_start, coord_end);
    /*
    lineZ.setFillColor( vw.Color.BLUE );
    lineZ.setWidth(10);
    lineZ.setDistanceFromTerrain(100);
    
    lineZ.create(); 
    */
}
var actionPath;
function driveCustom(x0,y0,z0, x1,y1,z1, x2,y2,z2){
    if(actionPath != null) return;
    /* 
    var pointsSize = new vw.Size(1000, 1000);
    pointsSize.fromCoord = new vw.CoordZ(x0,y0,z0); 
    */
    // pointsSize.fromCoord = new vw.CoordZ(x1,y1,z1);
    // console.log(pointsSize)

    var pointsArr = [
        {
            x:x0,
            y:y0,
            z:z0
        },
        {
            x:x1,
            y:y1,
            z:z1
        },
        {
            x:x2,
            y:y2,
            z:z2
        }
    ];

    /*
        21/06/08 공간정보산업진흥원 답변 : 
            actionPath.Path의 "주어진 경로대로 경로이동"은 아직 개발되지 않았다. 
            ※ 추가로 API문서에 있더라도 작업이 안되어 있을 수도 있기 때문에, 코드샘플에 있는 기능이 아니면 전부 안된다고 봐도 무방할듯하다.
    */

    actionPath = new vw.cameraAction.Path();
    actionPath.directionType='LOOK_FORWARD';
    actionPath.loops=1;
    actionPath.points=pointsArr;
    actionPath.speed=1000;
    actionPath.turnAround=false;
    // console.log("🚀 ~ file: custom.js ~ line 169 ~ driveCustom ~ actionPath", actionPath)
    
    // actionPath.start();

    // console.log("🚀 ~ file: custom.js ~ line 142 ~ driveCustom ~ vw.cameraAction.Path", actionPath)
}
