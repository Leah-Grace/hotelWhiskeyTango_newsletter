function getArchive() {
var ccArchive = document.getElementById("archiveList").innerHTML;
    //console.log(`show archive ${ccArchive}`);

var ul = document.getElementsByTagName("ul");
for (var i = 0; i < ul.length; i++) {
    var item = ul[i].getElementsByTagName("li").innerHTML;
    console.log(item);
    console.log(ul.length);
}



}