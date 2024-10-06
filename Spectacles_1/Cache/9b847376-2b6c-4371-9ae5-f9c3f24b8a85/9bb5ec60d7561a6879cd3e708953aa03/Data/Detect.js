// @input Physics.BodyComponent[] colliders
// @input Component.Text myText

var failed_time = null;

script.colliders[0].onCollisionEnter.add(function(eventArgs) {
    var collision = eventArgs.collision;
    print("Camera collided with bee");
    script.myText.enabled = true
    script.myText.text = "Failed!";
    
    failed_time = new Date();
    var event = script.createEvent("UpdateEvent");
    event.bind(function(eventData) {
        print("failed_time: " + failed_time);
        countDownT();
    });

});

script.colliders[1].onCollisionEnter.add(function(eventArgs) {
    var wristCollision = eventArgs.collision;
    print("Wrist Collided with bee");
    script.myText.enabled = true
    script.myText.text = "Good job!";
    
    var event = script.createEvent("UpdateEvent");
    event.bind(function(eventData) {
        print("failed_time: " + failed_time);
        countDownT();
    });
})

function countDownT() {
    if (failed_time) {
        print("Failed time detected")
        var current_time = new Date();
        var ms_diff = current_time - failed_time;
        if (ms_diff / 1000 >= 3) {
            script.myText.text = "Keep going";
        }
        if (ms_diff / 1000 >= 5) {
            failed_time = null;
            script.myText.text = "";
            script.myText.enabled = false;
        }
    }
}
