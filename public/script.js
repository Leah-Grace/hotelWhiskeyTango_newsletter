console.log("Script Running");
var archive = [
  {
    Date: "2016-09-22",
    Title: "Does RI Have the Healthcare Workforce We Need?",
    URL: "https://conta.cc/2Kx2RzB"
  }
];
//console.log(archive);

function getArchive() {
  for (var i = 0; i < archive.length; i++) {
    document.getElementById("archiveList").innerHTML += archive[i].Date;
    var date = document.createElement("a").setAttribute("href", archive[i].URL);
    let parent = document.getElementById("archiveList");
    parent.appendChild(
      document.createElement("a").setAttribute("href", archive[i].URL)
    );

    date.innerHTML = archive.Date;

    // let parent = document.getElementById("archiveList");
    // let date = document.createElement("a").setAttribute("href", archive[i].URL);

    // let child = document
    //   .createElement("a")
    //   .setAttribute("href", archive[i].URL);
    // parent.appendChild(child);
    // child.innerHTML = archive[i].Title + "<br>";
    // date.innerHTML = archive[i].Date;
  }
}
/*
archive.forEach(a => {
  let parent = document.getElementById("archiveList");
  let date = document.createElement("a").setAttribute("href", a.URL);
  date.innerHTML = a.Date;
  let child = document.createElement("a").setAttribute("href", a.URL);
  child.innerHTML = a.Title + "<br>";
  parent.appendChild(date);
});

// var ccArchive = document.getElementById("archiveList").innerHTML;
//     //console.log(`show archive ${ccArchive}`);

// var ul = document.getElementsByTagName("ul");
// for (var i = 0; i < ul.length; i++) {
//     var item = ul[i].getElementsByTagName("li").innerHTML;
//     console.log(item);
//     console.log(ul.length);

*/
