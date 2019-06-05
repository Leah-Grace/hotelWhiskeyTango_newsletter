console.log("Script Running");
var archive = [
  {
    Date: "2019-03-01",
    Title: "Healthcare Workforce Transformation Update (March 2019)",
    URL: "https://conta.cc/2Ejat3J"
  },
  {
    Date: "2019-02-06",
    Title: 'Upcoming URI Webinar: "Finding Joy in Practice"',
    URL: "https://conta.cc/2DdZHeu"
  },
  {
    Date: "2018-09-24",
    Title: "Healthcare Workforce Transformation Newsletter (September, 2018)",
    URL: "https://conta.cc/2CXx3PV"
  },
  {
    Date: "2018-04-19",
    Title: "Healthcare Workforce Transformation Newsletter (April, 2018)",
    URL: "https://conta.cc/2Knmjyt"
  },
  {
    Date: "2017-10-13",
    Title: "Healthcare Workforce Transformation Newsletter (October, 2017)",
    URL: "https://conta.cc/2KpYyWK"
  },
  {
    Date: "2017-06-20",
    Title: "Over 200 Attend Healthcare Workforce Summit",
    URL: "https://conta.cc/2Kpva2G"
  },
  {
    Date: "2017-05-16",
    Title: "Read the Completed Healthcare Workforce Transformation Report",
    URL: "https://conta.cc/2KpoilU"
  },
  {
    Date: "2017-03-15",
    Title: "Healthcare Workforce Transformation Priorities and Updates",
    URL: "https://conta.cc/2I6r64I"
  },
  {
    Date: "2016-12-01",
    Title: "Healthcare Workforce Transformation Committee Meeting",
    URL: "https://conta.cc/2Kpclgb"
  },
  {
    Date: "2016-11-29",
    Title: "Healthcare Workforce Discussion: Oral Health",
    URL: "https://conta.cc/2KotsyI"
  },
  {
    Date: "2016-11-18",
    Title: "Healthcare Workforce Discussion: Chronic Disease",
    URL: "https://conta.cc/2KnpC8V"
  },
  {
    Date: "2016-11-10",
    Title:
      "Healthcare Workforce Discussion: Health IT and Community & Home-Based Care",
    URL: "https://conta.cc/2KpFQ1a"
  },
  {
    Date: "2016-11-04",
    Title: "Healthcare Workforce Discussion: Social Determinants of Health",
    URL: "https://conta.cc/2Kp4PBM"
  },
  {
    Date: "2016-10-28",
    Title:
      "Healthcare Workforce Discussion: Primary Care and Behavioral Health",
    URL: "https://conta.cc/2Ku2Axj"
  },
  {
    Date: "2016-10-13",
    Title: "Healthcare Workforce Transformation - Next steps",
    URL: "https://conta.cc/2KlzVKJ"
  },
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
