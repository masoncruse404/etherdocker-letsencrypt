var globalid;
$(document)
    .on('contextmenu', '.file-content', function(e) {
        //remove style from previous selected
        resetQA();
        resetFile();
        e.preventDefault();
        var i = this.id
        globalid = i;
        if(document.getElementById("rmenufolder")){
            document.getElementById("rmenufolder").className = "hide";
        }
        var fileid  = i.substring(i.indexOf("-") + 1);
        var fid = '#file-infof' + fileid;
        var filefooterid = '#filefooter' + fileid;
        resetFile();
        $(fid).css('background', '#e8f0fe');
        $(filefooterid).css('color', '#1967d2');
        //if file is selected do not view on right click
        

        var renameurl = "/renametrash/";
        var full = url + i;
        renameurl = renameurl + i;
 
        var movetourl = "/moveto/" + i;
        document.getElementById("rmenu").className = "show";
        document.getElementById("rmenu").style.top = mouseY(event) + 'px';
        document.getElementById("rmenu").style.left = mouseX(event) + 'px';



       if(isInViewport(document.getElementById("rmenu"))){
        }else{
          var element = document.getElementById("rmenu");
          var rect = element.getBoundingClientRect();
        if (rect.top < 0) {
        // Top is out of viewport
        }

        if (rect.left < 0) {
        // Left side is out of viewoprt
        }

        if (rect.bottom > (window.innerHeight || document.documentElement.clientHeight)) {
        // Bottom is out of viewport    
          var topVal = parseInt(element.style.top, 10);
          element.style.top = (topVal - 300) + "px";
        }

        if (rect.right > (window.innerWidth || document.documentElement.clientWidth)) {
        // Right side is out of viewport
          var topVal = parseInt(element.style.left, 10);
          element.style.left = (topVal - 300) + "px";
        }
         
        }
        document.getElementById("starred").onclick = function(){
            document.getElementById("addtostar").href = '/star/'+i;
        }

        document.getElementById("renamecontext").onclick = function(){
            $('#rename-popup').css('display','block');
            $('#popup-title').text('Rename');
            $(".cover").fadeTo(500, 0.5);
            $('#renameinput').focus();
            renameurl = renameurl + '/'
            $("#renameform").attr('action',renameurl)
        }
    
        document.getElementById("sharecontext").onclick = function(){
            $('#rename-popup').css('display','block');
            $('#popup-title').text('Share With');
            $(".cover").fadeTo(500, 0.5);
            $('#renameinput').focus();
            renameurl =  "/share/"+ i + '/';
            $("#renameform").attr('action',renameurl)
             

        }


        document.getElementById("download").onclick = function(){
            document.getElementById("download").href = "/download/" + i;
        }

        document.getElementById("downloadfolder").onclick = function(){
            document.getElementById("downloadfolder").href = "/downloadfolder/" + i;
        }

        document.getElementById("trash").onclick = function(){
            document.getElementById("addtotrash").href = '/trash/'+i;
        }


        document.getElementById("moved").onclick = function(){
            $("#movetopopupwrap").css("display","flex");
            $("#movetoform").attr('action',movetourl)


        }

        document.getElementById("removetrashfolder").onclick = function(){
            document.getElementById("removetrashfolderlink").href = '/removetrashfolder/' + globalid;
 }

 document.getElementById("removetrash").onclick = function(){
            document.getElementById("removetrashlink").href = '/removetrash/' + globalid;
 }
        document.getElementById("makeacopy").onclick = function(){
            document.getElementById("makeacopy").href = '/copyfiletrash/'+i;
        }


      window.event.returnValue = false;
});



$(document).bind("click", function(event) {
  document.getElementById("rmenu").className = "hide";
  document.getElementById("rmenufolder").className = "hide";
});



function mouseX(evt) {
  if (evt.pageX) {
    return evt.pageX;
  } else if (evt.clientX) {
    return evt.clientX + (document.documentElement.scrollLeft ?
      document.documentElement.scrollLeft :
      document.body.scrollLeft);
  } else {
    return null;
  }
}

function mouseY(evt) {
  if (evt.pageY) {
    return evt.pageY;
  } else if (evt.clientY) {
    return evt.clientY + (document.documentElement.scrollTop ?
      document.documentElement.scrollTop :
      document.body.scrollTop);
  } else {
    return null;
  }
}

function isInViewport(element){
var myElement = element
var bounding = myElement.getBoundingClientRect();

if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {

    return 1
} else {

    return 0
}
}


$(document)
    .on('contextmenu', '.foldercontainer', function(e) {
        e.preventDefault();
        var i = this.id
        globalid = i;
        document.getElementById("rmenu").className = "hide";
      
      
        var renameurl = "/renamefolder/" + i;
        var movetofolderurl = "/movefolderto/" + i;

   
      document.getElementById("rmenufolder").style.top = mouseY(event) + 'px';
      document.getElementById("rmenufolder").style.left = mouseX(event) + 'px';
        document.getElementById("rmenufolder").className = "show";
        if(isInViewport(document.getElementById("rmenufolder"))){
        }else{
          var element = document.getElementById("rmenufolder");
          var rect = element.getBoundingClientRect();
        if (rect.top < 0) {
        // Top is out of viewport
        }

        if (rect.left < 0) {
        // Left side is out of viewoprt
        }

        if (rect.bottom > (window.innerHeight || document.documentElement.clientHeight)) {
        // Bottom is out of viewport    
          var topVal = parseInt(element.style.top, 10);
          element.style.top = (topVal - 150) + "px";
        }

        if (rect.right > (window.innerWidth || document.documentElement.clientWidth)) {
        // Right side is out of viewport
          var topVal = parseInt(element.style.top, 10);
          element.style.left = (topVal + 150) + "px";
        }
         
        }
        document.getElementById("removetrashfolder").onclick = function(){
            document.getElementById("removetrashfolderlink").href = '/removetrashfolder/'+i;
        }


        document.getElementById("downloadfolder").onclick = function(){
            document.getElementById("downloadfolder").href = "/downloadfolder/" + i;
        }

        document.getElementById("trashfolder").onclick = function(){
            document.getElementById("addtotrashfolder").href = "/trashfolder/" + i;
        }
         
        document.getElementById("copyfolder").onclick = function(){
            document.getElementById("copyfolder").href = '/copytrashfolder/'+i;
        }

        document.getElementById("renamefoldercontext").onclick = function(){
            $('#renamefolder-popup').css('display','block');
            $('#popup-title').text('Rename');
            $(".cover").fadeTo(500, 0.5);
            $('#renamefolderinput').focus();
            renameurl = renameurl + '/'
            $("#renamefolderform").attr('action','/renamefoldertrash/'+i+'/')
        }

         document.getElementById("sharefolder").onclick = function(){
            $('#rename-popup').css('display','block');
            $('#popup-title').text('Share With');
            $(".cover").fadeTo(500, 0.5);
            $('#renameinput').focus();
            renameurl =  "/sharefolder/"+ i + '/';
            $("#renameform").attr('action',renameurl)

          }



        document.getElementById("movetofolder").onclick = function(){
            $("#movetopopupwrap").css("display","flex");
            $("#movetoform").attr('action',movetofolderurl)


        }

      window.event.returnValue = false;
});


// this is from another SO post...
$(document).bind("click", function(event) {
  document.getElementById("rmenu").className = "hide";
  document.getElementById("rmenufolder").className = "hide";
});



function mouseX(evt) {
  if (evt.pageX) {
    return evt.pageX;
  } else if (evt.clientX) {
    return evt.clientX + (document.documentElement.scrollLeft ?
      document.documentElement.scrollLeft :
      document.body.scrollLeft);
  } else {
    return null;
  }
}

function mouseY(evt) {
  if (evt.pageY) {
    return evt.pageY;
  } else if (evt.clientY) {
    return evt.clientY + (document.documentElement.scrollTop ?
      document.documentElement.scrollTop :
      document.body.scrollTop);
  } else {
    return null;
  }
}

