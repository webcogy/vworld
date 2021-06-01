// 높이 측정
function measureHeight() {
    if( map != null ) {
        // static 메서드만 있음. start(), stop().
        vw.MeasureHeight.start();
        
        // 우클릭시 종료 이벤트 설정
        var evtMeasureRightHandler = function(event) {
            vw.MeasureHeight.stop();
            }      
        vw.EventProcess.add( vw.MapController.RIGHTUPDNCLICK, map.onMouseRightDown, evtMeasureRightHandler);
    }
}

// 거리 측정
function measureLine() {
    if ( map != null ) {
        // static 메서드만 있음. start(), stop().
    vw.MeasureLine.start();
    
    // 우클릭시 종료 이벤트 설정
    var evtMeasureRightHandler = function(event) {
        vw.MeasureLine.stop();
        }
    
        vw.EventProcess.add( vw.MapController.RIGHTUPDNCLICK, map.onMouseRightDown, evtMeasureRightHandler);
    }
}

// 면적 측정
function measureArea() {
    if ( map != null ) {
        // static 메서드만 있음. start(), stop().
        vw.MeasureArea.start();
        
    // 우클릭시 종료 이벤트 설정
    var evtMeasureRightHandler = function(event) {
        vw.MeasureArea.stop();
        }
    
        vw.EventProcess.add( vw.MapController.RIGHTUPDNCLICK, map.onMouseRightDown, evtMeasureRightHandler);  
    }
}

// 측정 지우기.
function erase() {
    console.log("erase()~~");
    map.clear();
}

// 버튼 이벤트로 종료.
function stop() {
    console.log("stop()~~");
    vw.MeasureHeight.stop();
    vw.MeasureLine.stop();
    vw.MeasureArea.stop();
}

// 좌표로 이동
function vwmoveTo(x,y,z){
    var movePo = new vw.CoordZ(x,y,z);
    var mPosi = new vw.CameraPosition(movePo, new vw.Direction(0,-80,0));
    map.moveTo(mPosi);     

    setMarker(x,y, '나노아이티');
}

// 마커 셋팅
function setMarker(x, y, name) {
    var point1Coord = new vw.Coord(x, y);
    var pt = new vw.geom.Point( point1Coord );

    pt.setImage("http://map.vworld.kr/images/op02/map_point.png");
    pt.setName(name);
    pt.setFont( "고딕" );
    pt.setFontSize( 20 );
    pt.setDistanceFromTerrain(10);
    pt.create();
}