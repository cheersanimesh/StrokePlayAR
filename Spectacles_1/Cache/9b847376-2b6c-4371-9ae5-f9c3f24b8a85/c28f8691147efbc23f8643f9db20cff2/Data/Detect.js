// @input Physics.BodyComponent[] colliders
//@input Component.Text myText

var failed_time = null;

script.colliders[0].onCollisionEnter.add(function(eventArgs) {
    var collision = eventArgs.collision;
    print("Collided")
//    print("CollisionEnter(" "): contacts=" + collision.contactCount + " ---> " + collision.collider.getSceneObject().name);
    script.myText.enabled = true
    script.myText.text = "Failed!";
    
    failed_time = new Date();
    var event = script.createEvent("UpdateEventTextTimeout");
    event.bind(function(eventData) {
        print("failed_time: " + failed_time);
        countDownT();
    });

});

function countDownT() {
    if (failed_time) {
        print("Failed time detected")
        var current_time = new Date();
        var ms_diff = current_time - failed_time;
        if (ms_diff / 1000 >= 5) {
            failed_time = null;
            script.myText.text = "Keep going";
        }
    }
}
