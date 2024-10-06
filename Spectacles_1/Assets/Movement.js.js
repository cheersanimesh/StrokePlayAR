//@input int speed = 330;

var boxSceneObject = script.getSceneObject();
var transform = script.getTransform();

// Move this box forward every frame with a speed of x units per second
var event = script.createEvent("UpdateEvent");
event.bind(function (eventData)
{
    var pos = transform.getLocalPosition();
    pos.z += eventData.getDeltaTime() * script.speed;
    transform.setLocalPosition(pos);
    
    // Destroy box if it goes behind user
    if (transform.getLocalPosition().z > 500) {
        boxSceneObject.destroy();
    }
});