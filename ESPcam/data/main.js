
    //create fabric.polygon(s) for each refrence spot and link to a variable

    console.log('hi');
    var emptyImageCanva = document.createElement("img");
    emptyImageCanva.width = 1429;
    emptyImageCanva.height = 2000;
    emptyImageCanva.src = './EmptyLot.jpg';

    //var canvas = document.getElementById("canvasView");

    var canvas = new fabric.Canvas('c');
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = '#DDD';
    ctx.fillRect(100, 50, 1000, 550);


   let a1CurrentImg = "";
   let a2CurrentImg = "";
   let a3CurrentImg = "";
   let a4CurrentImg = "";
   let a5CurrentImg = "";
   let a6CurrentImg = "";



   var a1 = {
      id:'A1',
      status:'available',
      emptyImg: ''
   };

   var a2 = {
      id:"A2",
      status:"available",
      emptyImg: ''
   };
   var a3 = {
      id:"A3",
      status:"available",
      emptyImg: ''
   };
   var a4 = {
      id:"A4",
      status:"available",
      emptyImg: ''
   };
   var a5 = {
      id:"A5",
      status:"available",
      emptyImg: ''
   };
   
   var a6 = {
      id:"A6",
      status:"available",
      emptyImg: ''
   };


   var lot = [a1,a2,a3,a4,a5,a6];




   var a1canvas = new fabric.Canvas('a1empty');
   var a2canvas = new fabric.Canvas('a2empty');
   var a3canvas = new fabric.Canvas('a3empty');
   var a4canvas = new fabric.Canvas('a4empty');
   var a5canvas = new fabric.Canvas('a5empty');
   var a6canvas = new fabric.Canvas('a6empty');

   var clipPath1 = new fabric.Rect({ width: 513, height:627, top: 80, left: 175, absolutePositioned: true });//A1
   var clipPath2 = new fabric.Rect({ width: 513, height:627, top: 80, left: 715, absolutePositioned: true });//A2
   var clipPath3 = new fabric.Rect({ width: 513, height:627, top: 80, left: 1275, absolutePositioned: true });//A3
   var clipPath4 = new fabric.Rect({ width: 513, height:627, top: 730, left: 175, absolutePositioned: true });//A4
   var clipPath5 = new fabric.Rect({ width: 513, height:627, top: 730, left: 715, absolutePositioned: true });//A5
   var clipPath6 = new fabric.Rect({ width: 513, height:627, top: 730, left: 1275, absolutePositioned: true });//A6


   fabric.Image.fromURL('./EmptyLot.jpg', function(img) {
      img.clipPath = clipPath1;
      img.scaleToWidth(513);
      a1.emptyImg = img;
      //canvas.add(img);
   });

   fabric.Image.fromURL('./EmptyLot.jpg', function(img) {
      img.clipPath = clipPath2;
      img.scaleToWidth(513);
      a2.emptyImg = img;
      //canvas.add(img);
   });
   
   fabric.Image.fromURL('./EmptyLot.jpg', function(img) {
      img.clipPath = clipPath3;
      img.scaleToWidth(513);
      a3.emptyImg = img;
      //canvas.add(img);
   });

   fabric.Image.fromURL('./EmptyLot.jpg', function(img) {
      img.clipPath = clipPath4;
      img.scaleToWidth(513);
      a4.emptyImg = img;
      //canvas.add(img);
   });

   fabric.Image.fromURL('./EmptyLot.jpg', function(img) {
      img.clipPath = clipPath5;
      img.scaleToWidth(513);
      a5.emptyImg = img;
      //canvas.add(img);
   });

   fabric.Image.fromURL('./EmptyLot.jpg', function(img) {
      img.clipPath = clipPath6;
      img.scaleToWidth(513);
      a6.emptyImg = img;
      //canvas.add(img);
   });






    function clipCurrent(pic){
   var currentImgTakenResize = new fabric.Image.filters.Resize(1.25);
   currentImgTaken.filters.push(currentImgTakenResize);
   //currentImgTaken.applyFilters(canvas.renderAll.bind(canvas));

   var a1canvas = new fabric.Canvas('a1');
   var a2canvas = new fabric.Canvas('a2');
   var a3canvas = new fabric.Canvas('a3');
   var a4canvas = new fabric.Canvas('a4');
   var a5canvas = new fabric.Canvas('a5');
   var a6canvas = new fabric.Canvas('a6');

   var clipPath1 = new fabric.Rect({ width: 513, height:627, top: 80, left: 175, absolutePositioned: true });//A1
   var clipPath2 = new fabric.Rect({ width: 513, height:627, top: 80, left: 715, absolutePositioned: true });//A2
   var clipPath3 = new fabric.Rect({ width: 513, height:627, top: 80, left: 1275, absolutePositioned: true });//A3
   var clipPath4 = new fabric.Rect({ width: 513, height:627, top: 730, left: 175, absolutePositioned: true });//A4
   var clipPath5 = new fabric.Rect({ width: 513, height:627, top: 730, left: 715, absolutePositioned: true });//A5
   var clipPath6 = new fabric.Rect({ width: 513, height:627, top: 730, left: 1275, absolutePositioned: true });//A6


   fabric.Image.fromURL(pic, function(img) {
      img.clipPath = clipPath1;
      img.scaleToWidth(513);
      a1CurrentImg = img;
      //canvas.add(img);
   });

   fabric.Image.fromURL(pic, function(img) {
      img.clipPath = clipPath2;
      img.scaleToWidth(513);
      a2CurrentImg = img;
      //canvas.add(img);
   });
   
   fabric.Image.fromURL(pic, function(img) {
      img.clipPath = clipPath3;
      img.scaleToWidth(513);
      a3CurrentImg = img;
      //canvas.add(img);
   });

   fabric.Image.fromURL(pic, function(img) {
      img.clipPath = clipPath4;
      img.scaleToWidth(513);
      a4CurrentImg = img;
      //canvas.add(img);
   });

   fabric.Image.fromURL(pic, function(img) {
      img.clipPath = clipPath5;
      img.scaleToWidth(513);
      a5CurrentImg = img;
      //canvas.add(img);
   });

   fabric.Image.fromURL(pic, function(img) {
      img.clipPath = clipPath6;
      img.scaleToWidth(513);
      a6CurrentImg = img;
      //canvas.add(img);
   });

   
    }

   



    function findSpot(){
      
        var canvasMain = new fabric.Canvas('canvasMain',{
           width: '2000',
           height: '1429'
        });

        capturePhoto();
       
        var currentImg = document.createElement("img");
        currentImg.src = "./FILE_PHOTO.jpg";

        clipCurrent(currentImg);

        for (let i = 0; i < lot.length; i++) {
           let x = i+1;
           var currentRef = window['a'+x+'currentImg'];

           var currentCode = getBase64Image(currentRef);
           var emptyCode = getBase64Image(lot[i].emptyImg);

           if (currentCode == emptyCode){
              lot[i].status == "available";
              currentRef.set('fill','green')
              currentRef.set('opacity','0.5')
              canvasMain.add(currentRef);

           }
           else{
            lot[i].status == "occupied";
            currentRef.set('fill','red')
            currentRef.set('opacity','0.5')
            canvasMain.add(currentRef);
           }
       }
        
    }

    function capturePhoto() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "/capture", true);
    xhr.send();
  }



