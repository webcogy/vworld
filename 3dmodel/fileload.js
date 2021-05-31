//3d 모델 추가
function fileload(){
    var tmppath = window.URL.createObjectURL($('[type=file]')[0].files[0]);
    var point = new vw.CoordZ(128.6859692,35.8380748, 1);
    var options = { scale: 6, minimumPixelSize: 10 };
    //var options = { minimumPixelSize: 200 };
    var id = "test1";

    var modelz = new vw.geom.ModelZ(id, tmppath, point, options );
    modelz.create();
    // 이벤트 처리 함수이며, 파라미터로 클릭시 window 픽셀, ecef좌표, cartographic좌표(실제경위도), 객체정보를 인수로 받는다.
    var eventHandler = function(windowPosition, ecefPosition, cartographic, featureInfo) {      
        if ( featureInfo != null ) {
            // featureInfo 와 Point객체와는 다름.
            // Point 객체를 가져올 경우 featureInfo.groupId로 가져옴.(그룹별 아이디라기 보다는 개별아이디.)
            var id = featureInfo.groupId;
            var pointObj = map.getObjectById( id );
            // 텍스트문구(HTML)
            var html = '차량 운행 테스트';
            // 제목 title
            var title = "차량";
            // 식별아이디, 탑재컨테이너, 제목, html, 레이어가로길이, 레이어세로길이, 클릭 이벤트X, 클릭 이벤트Y
            pop = new vw.Popup("pop01", "vmap", title, html, 450, 300, windowPosition.x, windowPosition.y);
            pop.create();
        }
    }
    modelz.addEventListener(eventHandler);
}
