// 이 예제는 마우스 이벤트를 이용해 클릭한 건물 오브젝트의 정보를 보여줍니다.
setTimeout(
    function() {
        map.onClick.addEventListener(buildingInfoEvent);
    },
200);
var buildingInfoEvent = function(windowPosition, ecefPosition, cartographic, featureInfo, event) {              
    if (featureInfo) {
        var mapElement = featureInfo.element;
        console.log("🚀 ~ file: event.js ~ line 10 ~ buildingInfoEvent ~ mapElement", mapElement)
        var attributes = featureInfo.attributes;
        console.log("🚀 ~ file: event.js ~ line 12 ~ buildingInfoEvent ~ attributes", attributes)

        if (attributes && mapElement) {
            mapElement.highlightFeatureByKey(attributes);   
                buildingId.value = attributes.MODEL_NAME;
                buildingType.value = mapElement.elementType;
                buildingLayerName.value = mapElement.id;
        }   
    }  
};

function $id(id){
    return document.getElementById(id);
}

// ---------- mouseEvent js --------------
//팝업 올리기 구현
function openBookmarkPopup(){
    var name = "iframe_popup";
    var infopop = document.getElementById(name);
    if (infopop == null) {
    infopop = document.createElement("iframe"); 
    infopop.src = "";           
    infopop.style.display = "none";
    infopop.frameBorder = "0";
    infopop.scrolling = "no";
    
    document.getElementById("vmap").appendChild(infopop);           
    infopop.setAttribute("id", name);
    infopop.setAttribute("name", name);
    infopop.frameBorder = "0";
    infopop.scrolling = "no";
    infopop.style.position = "absolute";
    infopop.style.overflow = "hidden";
    infopop.style["background-color"]= "white";
    infopop.style.margin = "auto";
    }

    infopop.style.width = "250px";
    infopop.style.height ="120px";              
    infopop.style.left = "5px";
    infopop.style.top = "5px";
    infopop.style.zIndex = 2000; //Z index의 경우 2000이상 설정해야 함
    infopop.setAttribute("src","https://map.vworld.kr/images/v4map/map/logo.png");
                
    infopop.style.display = "inline-block"; 
}