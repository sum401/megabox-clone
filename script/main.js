$(function(){
   
   $('.ad-close').click(function(){
      $(".ad").hide();
   });




   
   $(".favorite").click(function(){
      $("#modal").show();
  });

  $("#close_x").click(function(){
      $("#modal").hide();
  });
  $("#close_ok").click(function(){
      $("#modal").hide();
  });




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









   
   });























// $(function(){
//     $(".ad-close").click(function(){
//         $(".ad").hide();
//     });

// $(".favorite").click(function(){
//    $(".ad").hide();
// });

// $(".favorite").click(function(){
//    $("#modal").show();
// });

// $("#close_x").click(function(){
//    $("#modal").hide();
// });

// $("#close_ok").click(function(){
//    $("#modal").hide();
// });


// // function movieExplorer({
// //    $("input[type=image]").click(function(){
// //       if(!$("input[type=text]").val()){
// //          alert("영화명을 입력하셔야 합니다");
// //       }
// //    });
// // });
// function mouseScroll(){

// $("#mouse").animate(){
//        botton:-25;

// },"swing",function(){

//    $("#mouse").animate({
//       botton:-5;

//    });

// })

// }









  
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
//  "descript":"너의 이름은.. ......"},

//     ]