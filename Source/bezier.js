// GLOBAL VARIABLES
const NUM_CONNECTION = 4;
var curvePoints = [];
var wireFrame = []
var normals = [];

var modelViewMatrix = [];
var projectionMatrix = [];
var normalMatrix, normalMatrixLoc;

var mode = true;
var smoothness = 100;
var curveIndex = 0;
var frameIndex = 0;
var theta = [1, 1, 0];

var program;

//=================================================================================================================
// calculateCubicBezier
//  formula:  B(t) = p3*(1-t)^3 + p2*t*3(1-t)^2 + p1*t^2 *3(1-t) + p0*t^3.
//=================================================================================================================
calculateCubicBezier = function(t) {
    var point =  new Array(NUM_CONNECTION);
    point[0] = t*t*t;
    point[1] = 3*(1-t)*(t*t);
    point[2] = 3*((1-t)*(1-t))*t;
    point[3] = (1-t)*(1-t)*(1-t);
    return point;
}


//=================================================================================================================
// computeBezierPoints
//    calculates the bezier points. Well since there are gonna be sooooo many points, the program will render a 
//    curvature. 
//
//    If you look at the global variables, the smoothness is set as 100 by default. With 100, the program is able 
//    to render a perfect curvature indeed. You may want to change to something else to try out for fun.
//=================================================================================================================
computeBezierPoints = function(){
    // sampleSize means how many points lie between two control points. It determines how well-curved the bezier curve looks.
    var sampleSize = 1.0/smoothness;

    // first the program creates patches using the given vertices and indices.
    patch = new Array(numPatches);
    for(var i=0; i<numPatches; i++) 
        patch[i] = new Array(16);

    for(var i=0; i < numPatches; i++){
        for(j=0; j < 16; j++) {
            patch[i][j] = vec4([vertices[indices[i][j]][0],
            vertices[indices[i][j]][2], 
            vertices[indices[i][j]][1], 1.0]);
        }
    }

    for ( var n = 0; n < numPatches; n++ ) {
        var bezierPoints = new Array( smoothness + 1);
        for(var j = 0; j < smoothness + 1; j++) 
            bezierPoints[j] = new Array( smoothness+ 1 );

        // Here I perform brute force using by using u and v.
        for(var i=0; i < smoothness + 1; i++){ 
            for(var j=0; j < smoothness + 1; j++) { 
                bezierPoints[i][j] = vec4(0,0,0,1);
                var u = i*sampleSize;
                var v = j*sampleSize;
                var t = new Array(NUM_CONNECTION);
                for(var k = 0; k < NUM_CONNECTION; k++) 
                    t[k]=new Array(NUM_CONNECTION);

                // Every 4 line will be connected using cubic bezier formula. 
                for(var k = 0; k < NUM_CONNECTION; k++ ){
                    for(var l = 0; l < NUM_CONNECTION; l++) 
                    t[k][l] = calculateCubicBezier(u)[k]*calculateCubicBezier(v)[l];
                }
                    
                for(var k = 0; k < NUM_CONNECTION; k++) {
                    for(var l = 0; l < NUM_CONNECTION; l++) {
                        connecting_line = scale(t[k][l], vec4(patch[n][NUM_CONNECTION * k + l]));  
                        bezierPoints[i][j] = add(bezierPoints[i][j], connecting_line);
                        bezierPoints[i][j][3] = 1;
                    }
                }
            }   
        }


    // As you see, there are smoothness=100 points inbetween 2 control points. This renders near-perfect curvature.
    // Here, I calculate the normals in order to fill the patches using shaders later in index.html file
    // Drawing quads using 2 triangles.
    // Bezier patch          
    for(var i=0; i < smoothness; i++) 
        for(var j =0; j<smoothness; j++) {
            var t1 = subtract(bezierPoints[i+1][j], bezierPoints[i][j]);
            var t2 = subtract(bezierPoints[i+1][j+1], bezierPoints[i][j]);
            var N = cross(t1, t2);
            N = normalize(N);
            N[3] =  0;
            curvePoints.push(bezierPoints[i][j]);
            normals.push(N);
            curvePoints.push(bezierPoints[i+1][j]);
            normals.push(N);
            curvePoints.push(bezierPoints[i+1][j+1]);
            normals.push(N);
            curvePoints.push(bezierPoints[i][j]);
            normals.push(N);
            curvePoints.push(bezierPoints[i+1][j+1]);
            normals.push(N);
            curvePoints.push(bezierPoints[i][j+1]);
            normals.push(N);
            curveIndex+= 6;
        }
    }
}


//============================================================================================================
// computeControlPoints
//   calcualtes the control points only do render the wireframe.
//============================================================================================================
computeControlPoints = function(){
    defaultFrame = 1;
    frame = new Array(numPatches);
    for(var i=0; i<numPatches; i++) 
        frame[i] = new Array(16);

    for(var i=0; i< numPatches; i++){
        for(j=0; j<16; j++) {
            frame[i][j] = vec4([vertices[indices[i][j]][0],
            vertices[indices[i][j]][2], 
            vertices[indices[i][j]][1], 1.0]);
        }
    }

    for ( var n = 0; n < numPatches; n++ ) {
        var controlPoints = new Array(defaultFrame+1);

        for(var j = 0; j<= defaultFrame; j++) 
            controlPoints[j] = new Array(defaultFrame+1);

        for(var i=0; i<=defaultFrame; i++) for(var j=0; j<= defaultFrame; j++) { 
            controlPoints[i][j] = vec4(0,0,0,1);
            var u = i;
            var v = j;
            var t = new Array(NUM_CONNECTION); // 4 points
            for(var k = 0; k < NUM_CONNECTION; k++) 
                t[k]=new Array(NUM_CONNECTION); // another 4 points

            for(var k = 0; k < NUM_CONNECTION; k++){
                for(var l = 0; l < NUM_CONNECTION; l++) 
                    t[k][l] = calculateCubicBezier(u)[k]*calculateCubicBezier(v)[l]; // 
            }
                
            for(var k = 0; k < NUM_CONNECTION; k++) {
                for(var l = 0; l < NUM_CONNECTION; l++) {
                    connecting_line = scale(t[k][l], vec4(frame[n][NUM_CONNECTION * k + l]));             
                    controlPoints[i][j] = add(controlPoints[i][j], connecting_line);
                    controlPoints[i][j][3] = 1;
                }
            }
        }


    // Just drawing the wireframe using the controlpoints. Normals aren't necessary.      
    for(var i=0; i < defaultFrame; i++) 
        for(var j =0; j<defaultFrame; j++) {
            wireFrame.push(controlPoints[i][j]);
            wireFrame.push(controlPoints[i+1][j]);
            wireFrame.push(controlPoints[i+1][j+1]);
            wireFrame.push(controlPoints[i][j]);
            wireFrame.push(controlPoints[i+1][j+1]);
            wireFrame.push(controlPoints[i][j+1]);
            frameIndex+= 6;
        }
    }
}

//=================================================================================================================
// onload = function init()
//  on loading, set up the webGL to render tea sets.
//=================================================================================================================
onload = function init()  {
    //Set up the canvas
    canvas = document.getElementById( "gl-canvas" );
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) 
      alert( "WebGL is not available on your computer." );
    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 0, 0, 0, 1.0 );
    gl.enable(gl.DEPTH_TEST);

    computeBezierPoints();
    computeControlPoints();

    program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program ); 

    //==============================================================================================
    // Wireframe
    //   if user clicks on "Reveal Wireframe" button, then it will show the wireframe connected by
    //   the control points.
    //==============================================================================================
    document.getElementById("Wireframe").onclick = function(){
        // Typical OpenGL initialisation
        mode = false;
        var vBufferId = gl.createBuffer();
        gl.bindBuffer( gl.ARRAY_BUFFER, vBufferId );
        gl.bufferData( gl.ARRAY_BUFFER, flatten(wireFrame), gl.STATIC_DRAW );
        var vPosition = gl.getAttribLocation( program, "vPos" );
        gl.vertexAttribPointer( vPosition, 4, gl.FLOAT, false, 0, 0 );
        gl.enableVertexAttribArray( vPosition );
        projectionMatrix = ortho(-3, 3, -3, 3, -150, 150);
        gl.uniformMatrix4fv( gl.getUniformLocation(program, "projectionMatrix"), false, flatten(projectionMatrix));
    };
    

    //==============================================================================================
    // Bezier Curvature
    //   if user clicks on "Bezier Curvature" button, then it will show the object whose bezier curves
    //   have been calcuated.
    //==============================================================================================
    document.getElementById("Default").onclick = function(){
        // Typical OpenGL initialisation
        mode = true;
        var vBuffer = gl.createBuffer();
        gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer );
        gl.bufferData( gl.ARRAY_BUFFER, flatten(curvePoints), gl.STATIC_DRAW );
        var vPosition = gl.getAttribLocation( program, "vPos" );
        gl.vertexAttribPointer( vPosition, 4, gl.FLOAT, false, 0, 0 );
        gl.enableVertexAttribArray( vPosition );
        var nBuffer = gl.createBuffer();
        gl.bindBuffer( gl.ARRAY_BUFFER, nBuffer );
        gl.bufferData( gl.ARRAY_BUFFER, flatten(normals), gl.STATIC_DRAW );
        var vNormal = gl.getAttribLocation( program, "vNormal" );
        gl.vertexAttribPointer( vNormal, 4, gl.FLOAT, false, 0, 0 );
        gl.enableVertexAttribArray( vNormal );
        projectionMatrix = ortho(-3, 3, -3, 3, -150, 150);
        gl.uniformMatrix4fv( gl.getUniformLocation(program, "projectionMatrix"), false, flatten(projectionMatrix));
        
        // Add Phong Illumination and Lighting for better ooking
        var lightPos = vec4(-10.0, -10.0, 10.0, 0.0 );
        var lightDiffuse = vec4(1.0, 1.0, 1.0, 1.0); lightAmbient = vec4(0.2, 0.2, 0.2, 0.2); lightSpecular = vec4(1.0, 1.0, 1.0, 1.0);
        var matAmbient = vec4(1.0, 1.0, 1.0, 1.0); matDiffuse = vec4(0.0, 0.8, 1.0, 1.0); matSpecualr = vec4(1.0, 1.0, 1.0, 1.0); matShininess = 125.0;
        var diffPr = mult(lightDiffuse, matDiffuse); ambPr = mult(lightAmbient, matAmbient); specPr = mult(lightSpecular, matSpecualr);
 
        gl.uniform4fv( gl.getUniformLocation(program, "specPr"), flatten(specPr));	
        gl.uniform4fv( gl.getUniformLocation(program, "lightPos"), flatten(lightPos));
        gl.uniform4fv( gl.getUniformLocation(program, "ambPr"), flatten(ambPr));
        gl.uniform4fv( gl.getUniformLocation(program, "diffPr"),  flatten(diffPr) );
        gl.uniform1f( gl.getUniformLocation(program, "shininess"), matShininess );
        normalMatrixLoc = gl.getUniformLocation( program, "normalMatrix" );
    };
    render();
}

var render = function(){
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // added an animation. The object will rotate both in x and y axis simultaneously.
    theta[0] += 0.5;        
    modelViewMatrix = mat4();
    modelViewMatrix = mult(modelViewMatrix, rotate(theta[0], [1, 0, 0]));  
    modelViewMatrix = mult(modelViewMatrix, rotate(theta[0], [0, 1, 0]));  

    // If user clicked on "Bezier Curvatre" button, it renders filled patches with calculated normals.
    if( mode == true ){
        gl.uniformMatrix4fv( gl.getUniformLocation(program, "modelViewMatrix"), false, flatten(modelViewMatrix) );
        normalMatrix = [
            vec3(modelViewMatrix[0][0], modelViewMatrix[0][1], modelViewMatrix[0][2]),
            vec3(modelViewMatrix[1][0], modelViewMatrix[1][1], modelViewMatrix[1][2]),
            vec3(modelViewMatrix[2][0], modelViewMatrix[2][1], modelViewMatrix[2][2])
        ];
        gl.uniformMatrix3fv(normalMatrixLoc, false, flatten(normalMatrix) );          
        gl.drawArrays( gl.TRIANGLES, 0, curveIndex);
    }
    // if user clicked "Reveal wireframe" button, it renders the wireframe only. Normals aren't necessary n his case.
    else{
        gl.uniformMatrix4fv( gl.getUniformLocation(program, "modelViewMatrix"), false, flatten(modelViewMatrix) );         
        for(var i=0; i < frameIndex; i+=3) gl.drawArrays( gl.LINE_LOOP, i, 3 );
    }
    requestAnimFrame(render);
}