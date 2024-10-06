// @input int speed = 50  // Speed of the bee movement in units per second
// @input int maxTurns = 5  // Number of times the bee should move forward and reset before stopping
// @input SceneObject cameraObject
// Get reference to the bee's SceneObject and its Transform component
var beeSceneObject = script.getSceneObject();
var transform = beeSceneObject.getTransform();

var cameraObject = script.cameraObject

// Store the initial position of the bee
var initialPosition = transform.getLocalPosition();

// Counter to track the number of turns completed
var turnCounter = 0;

beeSceneObject.getComponent('Physics.BodyComponent').onCollisionEnter(function (eventArgs) {
   beeSceneObject.enabled = false; 
});

//script..onCollisionEnter

// Create an UpdateEvent to handle frame-by-frame movement
var event = script.createEvent("UpdateEvent");
var speed = 20;
var camera_Count = 0;
event.bind(function (eventData) {
    // Check if the bee has completed the maximum number of turns
    if (turnCounter >= script.maxTurns) {
        //print("Bee has completed " + script.maxTurns + " turns. Stopping movement.");
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
        beeSceneObject.enabled = true;
        
        // Increment the turn counter since the bee has completed a turn
        turnCounter += 1;
        speed += 10;
    }    
    
});

//##working code for first bee