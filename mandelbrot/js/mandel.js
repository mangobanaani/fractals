function checkSet(x,y){
    var real = x;
    var imaginary = y;
    var refactors = 100;
    for(var i=0;i<refactors;i++) {
        var tempReal = real * real - imaginary * imaginary + x;
        var tempImaginary = 2 * real * imaginary + y;
        real = tempReal;
        imaginary = tempImaginary;

        if (real * imaginary > 2)
            return (i/refactors*100);
    }
    return 0;   // Return zero if in set
}

function init(){
    window.addEventListener('resize', resizeCanvas, false);
}

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function render() {
    this.init();
    this.resizeCanvas();

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var zoom = 600;
    var panX = 0;
    var panY = 0;
    for (var x = 0; x < canvas.width; x++) {
        for (var y = 0; y < canvas.height; y++) {
            var checkSet = this.checkSet(x/zoom-panX, y/zoom-panY);
            if(checkSet == 0) {
                ctx.fillStyle = '#000';
                ctx.fillRect(x,y, 1,1);
            } else {
                ctx.fillStyle = 'hsl(0,100%,'+checkSet+'%)';
                ctx.fillRect(x,y, 1,1);
            }
        }
    }
}
