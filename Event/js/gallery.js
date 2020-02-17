/*Name this external file gallery.js*/

function upDate(previewPic) {
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
    

    //capture the URL of previewPic(image that was hovered)
    let image = "url(" + previewPic.src + ")";

    //capture the caption of previewPic
    let caption = previewPic.alt;

    let target = document.getElementById("image");

    //assign the captured values
    target.style.backgroundImage = image;
    target.innerHTML = caption;
}

function unDo() {
    /* In this function you should 
   1) Update the url for the background image of the div with the id = "image" 
   back to the orginal-image.  You can use the css code to see what that original URL was
   
   2) Change the text  of the div with the id = "image" 
   back to the original text.  You can use the html code to see what that original text was
   */


       let image = "url()";

       let caption =  "Hover over an image below to display here.";
   
       let target = document.getElementById("image");
   
       //assign the values
       target.style.backgroundImage = image;
       target.innerHTML = caption;

}