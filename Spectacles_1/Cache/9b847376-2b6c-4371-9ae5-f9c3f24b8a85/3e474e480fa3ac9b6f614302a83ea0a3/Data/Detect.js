// @input Physics.BodyComponent[] colliders
// @input Component.Text myText
// @input Component.Score scoreText

var cameraCollisionTime = null;
var wristCollisionTime = null;

script.colliders[0].onCollisionEnter.add(handleCameraCollision);
script.colliders[1].onCollisionEnter.add(handleWristCollision);
script.colliders[2].onCollisionEnter.add(handleWristCollision);
var score = 0;
function handleCameraCollision(eventArgs) {
    print("Camera collided with bee");
    script.myText.enabled = true;
    score -= 1;
    script.scoreText.text = score.toString();
    script.myText.text = "Failed!";
    cameraCollisionTime = new Date();
    var updateEvent = script.createEvent("UpdateEvent");
updateEvent.bind(function(eventData) {
    countDownT();
});
}

function handleWristCollision(eventArgs) {
    print("Wrist Collided with bee");
    script.myText.enabled = true;
    score += 1;
    script.scoreText.text = score.toString();
    script.myText.text = "Good job!";
    wristCollisionTime = new Date();
    var updateEvent = script.createEvent("UpdateEvent");
updateEvent.bind(function(eventData) {
    countDownT();
});
}

function countDownT() {
    var current_time = new Date();
    
    if (cameraCollisionTime) {
        var ms_diff = current_time - cameraCollisionTime;
        handleCountdown(ms_diff, "cameraCollision");
    }
    
    if (wristCollisionTime) {
        var ms_diff = current_time - wristCollisionTime;
        handleCountdown(ms_diff, "wristCollision");
    }
}

function handleCountdown(ms_diff, collisionType) {
    if (ms_diff / 1000 >= 3) {
        script.myText.text = "Keep going";
    }
    if (ms_diff / 1000 >= 5) {
        if (collisionType === "cameraCollision") {
            cameraCollisionTime = null;
        } else {
            wristCollisionTime = null;
        }
        script.myText.text = "";
        script.myText.enabled = false;
    }
}