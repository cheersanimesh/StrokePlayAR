// @input SceneObject[] objects
//@input int maxTurns = 3;

//var boxSceneObject = script.getSceneObject();
//var transform = script.getTransform();
var turnCounter = 0;
var speed = 20;

var initialPosition = null;

var body = script.objects[0].getComponent('Physics.BodyComponent')
body.onCollisionEnter.add(function (e) {
    print('Collision happened to bee!')
    var collision = e.collision;
    var transform = script.objects[0].getTransform();
    var pos = transform.getLocalPosition();
    pos.z = -300;
});

// Move this box forward every frame with a speed of x units per second
var event = script.createEvent("UpdateEvent");
event.bind(function (eventData)
{
    var transform = script.objects[0].getTransform();
    if (!initialPosition) {
         initialPosition = transform.getLocalPosition();
    }
    
    var pos = transform.getLocalPosition();
    
    if (turnCounter >= script.maxTurns) {
        return;  // Stop updating the movement
    }

    // Get the current position of the bee
    var pos = transform.getLocalPosition();
    // Move the bee forward along the Z-axis based on the speed and deltaTime
    pos.z += eventData.getDeltaTime() * speed;

    // Set the new position back to the transform component
    transform.setLocalPosition(pos);

    // Check if the bee moves beyond a certain threshold (e.g., Z position > 500)
    if (pos.z > 40) {
        // Reset the bee's position back to the initial position
        transform.setLocalPosition(initialPosition);
        
        // Increment the turn counter since the bee has completed a turn
        turnCounter += 1;
        speed += 10;
    }
});

//pos.z += eventData.getDeltaTime() * script.speed;
//    transform.setLocalPosition(pos);
//    
//    // Destroy box if it goes behind user
//    if (transform.getLocalPosition().z > 500) {
//        boxSceneObject.destroy();
//    }