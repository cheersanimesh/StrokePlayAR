// @input SceneObject[] objects
//@input int maxTurns = 3;

//var boxSceneObject = script.getSceneObject();
//var transform = script.getTransform();
var turnCounter = 0;
var speed = 20;

var initialPosition0 = null;
var initialPosition1 = null;
var initialPosition2 = null;

//script.objects.forEach((object, index)=> {
var transform0 = script.objects[0].getTransform();
var body0 = script.objects[0].getComponent('Physics.BodyComponent');

var transform1 = script.objects[1].getTransform();
var body1 = script.objects[1].getComponent('Physics.BodyComponent');

var transform2 = script.objects[2].getTransform();
var body2 = script.objects[2].getComponent('Physics.BodyComponent');
//    var transform = object.getTransform();
//var body = object.getComponent('Physics.BodyComponent')
body0.onCollisionEnter.add(function (e) {
    print('Collision happened to bee at index: 0')
    var collision = e.collision;
    
    transform0.setLocalPosition(initialPosition0);

});

body1.onCollisionEnter.add(function (e) {
    print('Collision happened to bee at index: 1')
    var collision = e.collision;
    
    transform1.setLocalPosition(initialPosition1);

});

body2.onCollisionEnter.add(function (e) {
    print('Collision happened to bee at index: 2')
    var collision = e.collision;
    
    transform2.setLocalPosition(initialPosition2);

});

// Move this box forward every frame with a speed of x units per second
var event = script.createEvent("UpdateEvent");
event.bind(function (eventData)
{
    if (!initialPosition0) {
        initialPosition0 = transform0.getLocalPosition();
    }
    
    var pos0 = transform0.getLocalPosition();
    
    if (turnCounter >= script.maxTurns) {
        return;  // Stop updating the movement
    }

    // Get the current position of the bee
    var pos0 = transform0.getLocalPosition();
    // Move the bee forward along the Z-axis based on the speed and deltaTime
    pos0.z += eventData.getDeltaTime() * speed0;

    // Set the new position back to the transform component
    transform0.setLocalPosition(pos0);

    // Check if the bee moves beyond a certain threshold (e.g., Z position > 500)
    if (pos0.z > 40) {
        // Reset the bee's position back to the initial position
        transform0.setLocalPosition(initialPosition0);
        
        // Increment the turn counter since the bee has completed a turn
        turnCounter += 1;
        speed0 += 10;
    }
});

//pos.z += eventData.getDeltaTime() * script.speed;
//    transform.setLocalPosition(pos);
//    
//    // Destroy box if it goes behind user
//    if (transform.getLocalPosition().z > 500) {
//        boxSceneObject.destroy();
//    }