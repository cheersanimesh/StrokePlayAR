// @input SceneObject[] objects
//@input int speed = 330;

//var boxSceneObject = script.getSceneObject();
//var transform = script.getTransform();
var turnCounter = 0;
var speed = 20;

//var initialPosition = transform.getLocalPosition();

// Move this box forward every frame with a speed of x units per second
var event = script.createEvent("UpdateEvent");
event.bind(function (eventData)
{
    var transform = script.objects[0].getTransform();
    var pos = transform.getLocalPosition();
    
    if (turnCounter >= script.maxTurns) {
        //print("Bee has completed " + script.maxTurns + " turns. Stopping movement.");
        return;  // Stop updating the movement
    }

    // Get the current position of the bee
    var pos = transform.getLocalPosition();
    print(pos);

    // Move the bee forward along the Z-axis based on the speed and deltaTime
    pos.z += eventData.getDeltaTime() * speed;

    // Set the new position back to the transform component
    transform.setLocalPosition(pos);

    // Check if the bee moves beyond a certain threshold (e.g., Z position > 500)
    if (pos.z > 40) {
        // Reset the bee's position back to the initial position
        transform.setLocalPosition(initialPosition);
        beeSceneObject.enabled = true;
        
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