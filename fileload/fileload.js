/*
    3d 모델 추가
*/

/**
 * 임의로 blob를 넣으니 에러가 나서 확인중
 * 에러메시지 내용 => {name: "RuntimeError", message: "Failed to load model: blob:null/fe82c22a-e4a5-487b…d992a2c5\nUnexpected token C in JSON at position 0",
 * 
 * 1) blob객체를 바로 넣으려니까 에러가 난다... 
 * 2) objectURL는 잘 만들어지는데, $('[type=file]')[0].files[0] 와 어떤 다른 점이 있는지 파악해야 성공할 듯 ?

*  3) createGltf 를 사용해보자 -> 성공했다 !! 로컬에서는 CORS 에러가 뜨기 때문에, 서버에서만 가능하다.
 */


// fileload => input file로 파일 선택 후 3D모델추가할 때 사용
function fileload(){
   var tmppath = window.URL.createObjectURL($('[type=file]')[0].files[0]);
    // console.log("🚀 ~ file: fileload.js ~ line 25 ~ fileload ~ tmppath", tmppath)

    var point = new vw.CoordZ(128.6859692,35.8380748, 1);
    var options = { scale: 6, minimumPixelSize: 10 };
    var id = "test1";
    var modelz = new vw.geom.ModelZ(id, tmppath, point, options );

    modelz.create();

    /* 
        1) 이 모델에 대한 정보를 팝업창에 집어 넣는 것이므로 필요에 따라 사용하면 된다.
        2) 이벤트 처리 함수이며, 파라미터로 클릭시 window 픽셀, ecef좌표, cartographic좌표(실제경위도), 객체정보를 인수로 받는다.
    */
    /* var eventHandler = function(windowPosition, ecefPosition, cartographic, featureInfo) {      
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
    modelz.addEventListener(eventHandler); */
}

// 버튼만 클릭해서 바로 3D모델 추가할 때 사용
function createGltf() {
    var url = "../3dmodel/high-truck.gltf";
    var id = "test5";
    var point = new vw.CoordZ( 128.6859692,35.8380748, 1 );
    // 1. 줌레벨에 관계없이 일정한 크기를 가짐.
    var options = { scale: 100000, minimumPixelSize: 1};
    // 2. 줌레벨이 아래로 갈수록 일정이상에서는 크기가 커짐.
    //var options = { scale: 400, minimumPixelSize: 50 };
    var modelz2 = new vw.geom.ModelZ(id);
    modelz2.setUrl(url);
    modelz2.setCoordz(point);
    modelz2.setOptions(options);
    modelz2.create();
}