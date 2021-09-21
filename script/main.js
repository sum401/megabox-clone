$(function(){
    ad();
    modal();
    movieExplorer();
    setInterval(mouseScroll, 1500);
    // randomBanner();
    // 캠페인 랜던 작동법



});


// function  randomBanner(){
//     let ranNum = Math.ceil(Math.random()*3);
  

//     $("#campaign>li:first").html("<img src=\"images/campaign"+ranNum +".jpg\" alt=\"배너\">");

// }
   // 캠페인 랜던 작동법









function mouseScroll(){
    $("#mouse").animate({
        bottom: "-35"
    },"swing",function(){
        $("#mouse").animate({
            bottom: "-5"
        });
    })
}
function movieExplorer(){
    $("input[type=image]").click(function(){        
     
        var keyword = $("input[type=text]").val();
        if(!keyword) {
            alert("영화명을 입력하셔야 합니다");
        } else {
            console.log(keyword);
  
            location.href="https://www.megabox.co.kr/movie?searchText="+keyword;
        }
    });
}
function modal() {    

    $(".favorite").click(function(){
        $("#modal").show();
    });

    $("#close_x").click(function(){
        $("#modal").hide();
    });
    $("#close_ok").click(function(){
        $("#modal").hide();
    });
}
function ad(){
    $(".ad-close").click(function(){
        $(".ad").hide();
    });
}












// $(function(){
   
//    $('.ad-close').click(function(){
//       $(".ad").hide();
//    });




//    $(".favorite").click(function(){
//        $("#modal").show();

//    });
//    $("#close_x").click(function(){
//     $("#modal").hide();

//     });
//     $("#close_ok").click(function(){
//     $("#modal").hide();

//     });

//     function movieExplorer(){
//         $("input[type=image]").click(function(){
//             var keyword = $("input[type=text]").val();
//             if(!keyword){
//                 alert("영화명을 입력하셔야 합니다");
//             } else{
//                 console.log(keyword);
//                 location.href="https://www.megabox.co.kr/movie?searchText="+keyword;


//             }
                  
//         });
//     }
//     // setInterval(function() { ... }, 지연시간);

//     function mouseScroll(){
//         // setInterval( mouseScroll(){},1500);
//         setInterval(function(){mouseScroll

       

   
//         $("#mouse").animate({
//             botton:"-20"
//         } ,"swing",function(){
//             $("#mouse").animate({
//                 bottom:0
//             });

            
//         } )
//     },1500);

//     }






// });









  
// });

// let box_office = [

//  {   "rank" : 1,
//     "title":"너의 이름은",
//     "supply":"Japan",
//     "year":2020,
//    "poster":"your-name.jpg",
//     "descript":"너의 이름은.. ......"},
    
//  {   "rank" : 2,
//  "title":"너의 이름은",
//  "supply":"Japan",
//  "year":2020,
// "poster":"your-name.jpg",
//  "descript":"너의 이름은.. ......"},
 
//  {   "rank" : 3,
//     "title":"너의 이름은",
//     "supply":"Japan",
//     "year":2020,
//    "poster":"your-name.jpg",
//     "descript":"너의 이름은.. ......"},
    
//  {   "rank" : 4,
//  "title":"너의 이름은",
//  "supply":"Japan",
//  "year":2020,
// "poster":"your-name.jpg",
//  "descript":"너의 이름은.. ......"},]

