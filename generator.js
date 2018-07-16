<!DOCTYPE html>
<html>
<body>


 <script>
// function myFunction() {
//    document.getElementById("demo").innerHTML = "Paragraph changed.";
// }
// shirts['Fashion1.jpg',
// 'fashion3',
// 'fashion4',
// 'fashion5'
//
// ];
//
//
// function randomImg(){
//     var randomNumber = Math.floor(Math.random() * 12) + 1;
//     var imgName = "img_" + randomNumber + ".jpg";
//     document.getElementById("greenbox").src= "YOUR_IMG_PATH" + "/" + imgName ;
//  }




 <script language="JavaScript">
<!--

/*
Random Image Script- By JavaScript Kit (http://www.javascriptkit.com)
Over 400+ free JavaScripts here!
Keep this notice intact please
*/

function random_imglink(){
var myimages=new Array()
//specify random images below. You can have as many as you wish
myimages[1]="Fashion1.jpg"
myimages[2]="fashion3.jpg"
myimages[3]="fashion4.jpg"
myimages[4]="fashion5.jpg"
myimages[5]="jag.jpg"
myimages[6]="pup.jpg"

var ry=Math.floor(Math.random()*myimages.length)
if (ry==0)
ry=1
document.write('<img src="'+myimages[ry]+'" border=0>')
}
random_imglink()
//-->
</script>

// <p align="center">This free script provided by<br />
// <a href="http://javascriptkit.com">JavaScript
// Kit</a></p>

</script>

</body>



        <div class="collapse navbar-collapse" id="navbarResponsive">

          <ul class="navbar-nav ml-auto">

            <li class="nav-item">

              <a class="nav-link js-scroll-trigger" href="myaccount.html">My Account</a>

            </li>

            <li class="nav-item">

              <a class="nav-link js-scroll-trigger" href="quiz.html">Quiz</a>

            </li>

            <li class="nav-item">

              <a class="nav-link js-scroll-trigger" href="help.html">Help</a>
              </li>

              <li class="nav-item">

                <a class="nav-link js-scroll-trigger" href="generator.js">GENERATE</a>

            </li>
          </ul>
          <div class="collapse navbar-collapse" id="navbarResponsive">

            <ul class="navbar-nav ml-auto">
              <li class="nav-item">

                <a class="nav-link js-scroll-trigger" style="align:left" href="index2.html">HOME</a>

              </li>
            </ul>
          </div>

        </div>

        </div>

        </nav>

          <br>










</html>
