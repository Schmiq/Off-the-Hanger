<!DOCTYPE html>
<html>
<body>


// <script>
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




 <script>


function random_imglink(){
var myimages=new Array()
//specify random images below. You can have as many as you wish
myimages[1]="Fashion1.jpg"
myimages[2]="fashion3.jpg"
myimages[3]="fashion4.jpg"
myimages[4]="fashion5.jpg"
myimages[5]="jag.jpg"
myimages[6]="beach.jpg"

var pic=Math.floor(Math.random()*myimages.length)
if (pic==0)
pic=1
document.write('<img src="'+myimages[pic]+'" border=0>')
}
random_imglink()
//-->

var pic = {
    // firstName:"John",
    // lastName: "Doe",
    pic: function () {
        return random_imglink();
    }
}
myimage.pic();
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

                <a class="nav-link js-scroll-trigger" href="">GENERATE</a>

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
