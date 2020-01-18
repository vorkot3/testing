//Davids shit :p



/*
HTML DOM object events:

click
hover
mouseenter
mouseleave
mouseup
mousedown

*/
 var objectsJSON = {
    "background":{
        "active":false
    },
    "bril":{
        "active": false,
        "img1":"img/glass.png",
        "img2":"img/glassglow.png",
        "img3": "img/bureau.png",
        "img4": "img/glassesclickglow.png",
      
    },
    "computer":{
        "active": false,
        "img1":"img/computer.png",
        "img2":"img/computerglow.png",
        "img3": "img/bureau.png",
        "img4": "img/computerclickglow.png",
       
    },
     "foto":{
        "active": false,
        "img1":"img/fotorechterbord.png",
        "img2":"img/fotorechterbordglow.png",
        "img3": "img/bureau.png",
        "img4": "img/bordclickglow.png",
      
    },
     "bakje":{
        "active": false,
        "img1":"img/bakje.png",
        "img2":"img/bakjeglow.png",
      
    },
     "folder":{
        "active": false,
        "img1":"img/folder.png",
        "img2":"img/folderglow.png",
      
    },
     
     "bord":{
        "active": false,
        "img1":"img/bord.png",
        "img2":"img/bordglow.png",
      
    }
}

function initHoverListeners(){
  console.log(objectsJSON);
    $('.hover').hover(function(){
        var itemindex = $(this).attr("data-object");
        console.log(itemindex);
        $("#"+itemindex+"Foto").attr('src', objectsJSON[itemindex].img2);
    },   
    function() {
        var itemindex = $(this).attr("data-object");
        $("#"+itemindex+"Foto").attr('src', objectsJSON[itemindex].img1);
    });
}


initHoverListeners();


function initClickListeners(){
    $('.hover').click(function(){
    var itemindex = $(this).attr("data-object");
    
       //doe class erbij met $(this) 
        $("#backgroundImage").addClass("back");
        //switch de image net als in initHover
     $("#backgroundImage").attr('src', objectsJSON[itemindex].img4);
    });
    
    $('.back').click(function(){
    var itemindex = $(this).attr("data-object");

        //haal class weg met $(this)
       $("#backgroundImage").removeClass("back");
        
        //switch image weer net als in initHover
        $("#backgroundImage").attr('src', objectsJSON[itemindex].img3);
    });
}

initClickListeners();




//---------------------------MODALS-----------------------------------//

//add modal
$(".folder .hover, .bakje .hover, .yellowButton, .bord .hover").click(function(e) {
    
    $('body').append('<div class="modal"> <div class="modal-window"> <span class="close-modal">  &#129120; </span>  <div class="modal-content"> </div> </div> </div>');
    
    
    $.ajax({
            url: $(this).attr('href'),
            success: function(data){
                console.log(data);
                $('.modal-content').append(data);
            }
        })


    e.preventDefault(); 
});


//close modal

 $('body').on('click', '.close-modal', function() {
        $('.modal').remove();       
    })




//--------------------------------PC----------------------------------------//
/*
function switchImagePC() {
$(".computerHover").hover(function() {
   $("#computerFoto").attr('src', 'img/computerglow.png')
      },
      function() {
    $("#computerFoto").attr('src', 'img/computer.png');
      });
}

// attach the hover events when page loads
switchImagePC();


$(".computerHover").on("click", function(e) {
    $(this).off("mouseenter mouseleave");
      $("#backgroundImage").attr('src', 'img/computerclickglow.png');
      $("#buttonPCHint, #buttonPCInfo").css("display", "inline");
    
    //zet andere fotos terug naar niet-geklikte staat
    $("#brilFoto").attr('src', 'img/glass.png');
    $("#bordFoto").attr('src', 'img/bord.png');
    $("#bordRechtsFoto").attr('src', 'img/fotorechterbord.png');
    
    e.preventDefault();
});



// reattach hover handlers and set image back to default
$(".reset").on("click", function(e) {
switchImagePC();
  $("#backgroundImage").attr('src', 'img/bureau.png');
  $("#computerFoto").attr('src', 'img/computer.png');
    
    switchImageBril();
  $("#brilFoto").attr('src', 'img/glass.png');
    
    switchImageBord();
  $("#bordFoto").attr('src', 'img/bord.png');
    
    switchImageRechtsBord();
  $("#bordRechtsFoto").attr('src', 'img/fotorechterbord.png');
    
  $("#buttonBrilHint, #buttonBrilInfo, #buttonPCHint, #buttonPCInfo, #buttonBordInfo, #buttonBordHint").css("display", "none");
    
     e.preventDefault();
  
});


//-------------------------------------BRIL----------------------------------------//


function switchImageBril() {
$(".brilHover").hover(function() {
    $("#brilFoto").attr('src', 'img/glassglow.png');
      },
      function() {
    $("#brilFoto").attr('src', 'img/glass.png');
      });
}

// attach the hover events when page loads
switchImageBril();


$(".brilHover").on("click", function(e) {
    $(this).off("mouseenter mouseleave");
      $("#backgroundImage").attr('src', 'img/glassesclickglow.png');
      $("#buttonBrilHint, #buttonBrilInfo").css("display", "inline");
    
    //zet andere fotos terug naar niet-geklikte staat
    $("#computerFoto").attr('src', 'img/computer.png');
    $("#bordFoto").attr('src', 'img/bord.png');
     $("#bordRechtsFoto").attr('src', 'img/fotorechterbord.png');
    
     e.preventDefault();
});



         
//-------------------------------------BORD----------------------------------------//

function switchImageBord() {
$(".bordHover").hover(function() {
    $("#bordFoto").attr('src', 'img/bordglow.png');
      },
      function() {
    $("#bordFoto").attr('src', 'img/bord.png');
      });
}

// attach the hover events when page loads
switchImageBord();



//-------------------------------------RECHTS BORD FOTOS----------------------------------------//

function switchImageRechtsBord() {
$(".bordRechtsHover").hover(function() {
    $("#bordRechtsFoto").attr('src', 'img/fotorechterbordglow.png');
      },
      function() {
    $("#bordRechtsFoto").attr('src', 'img/fotorechterbord.png');
      });
}

// attach the hover events when page loads
switchImageRechtsBord();


$(".bordRechtsHover").on("click", function(e) {
    $(this).off("mouseenter mouseleave");
    
      $("#backgroundImage").attr('src', 'img/bordclickglow.png');
    
      $("#buttonRechtsBordHint, #buttonRechtsBordInfo").css("display", "inline");
    
    //zet andere fotos terug naar niet-geklikte staat
    $("#brilFoto").attr('src', 'img/glass.png');
    $("#computerFoto").attr('src', 'img/computer.png');
    $("#bordFoto").attr('src', 'img/bord.png');
    
     e.preventDefault();
       
});



//-------------------------------------FOLDER----------------------------------------//


function switchImageFolder() {
$(".folderHover").hover(function() {
    $("#folderFoto").attr('src', 'img/folderglow.png');
      },
      function() {
    $("#folderFoto").attr('src', 'img/folder.png');
      });
}

// attach the hover events when page loads
switchImageFolder();



//-------------------------------------BAKJE----------------------------------------//


function switchImageBakje() {
$(".bakjeHover").hover(function() {
    $("#bakjeFoto").attr('src', 'img/bakjeglow2.png');
      },
      function() {
    $("#bakjeFoto").attr('src', 'img/bakje.png');
      });
}

// attach the hover events when page loads
switchImageBakje();

*/


//--------------------------------WAVE SURFER----------------------------------------//

//maakt wave aan. ID waarna verwijst, kleur, alle audio in 1 golf.
var wavesurfer = WaveSurfer.create({
    container: '.waveform',
    waveColor: "white",
    fillParent: true,
    progressColor: "lightblue",
    backend: 'MediaElement',
    
});


//fatsoenlijke waveform bij resizen
$(window).on('resize', function(){
    
    var currentProgress = wavesurfer.getCurrentTime() / wavesurfer.getDuration();
             
    wavesurfer.empty();
    wavesurfer.drawBuffer();
    wavesurfer.seekTo(currentProgress);
});






//----------------------------AUDIO STARTSCHERM----------------------------------//

$("#startchermPlay").click(function(event){
    event.preventDefault();
    wavesurfer.play();
    
    wavesurfer.on('finish', function() {
         window.location = 'pagina2.html';
    });
    
});


$("#startschermPause").click(function(event){
    event.preventDefault();
    wavesurfer.pause();
});

wavesurfer.load('audio/song.mp3');




//--------------------------BRIL AUDIO-----------------------------------//

$("body").on('click', '#hintBril1Play', function(event){
    
    var wavesurfer = WaveSurfer.create({
        container: '#bril1Wave',
        backend: 'MediaElement', 
    });
    
    event.preventDefault();
    wavesurfer.load('audio/song.mp3');
    wavesurfer.play();
});

$("body").on('click', '#hintBril2Play', function(event){
    
    var wavesurfer = WaveSurfer.create({
        container: '#lol',
        backend: 'MediaElement', 
    });
    
    event.preventDefault();
    wavesurfer.load('audio/song.mp3');
    wavesurfer.play();
});

$("#hintBril3Play").click(function(event){
    event.preventDefault();
    wavesurfer.load('audio/song.mp3');
    wavesurfer.play();
});


//buttons

//$(".computerHover, .brilHover").click(function(event){
//    event.preventDefault();
//    wavesurfer.load('audio/song.mp3');
//    wavesurfer.play();
//    
//});








