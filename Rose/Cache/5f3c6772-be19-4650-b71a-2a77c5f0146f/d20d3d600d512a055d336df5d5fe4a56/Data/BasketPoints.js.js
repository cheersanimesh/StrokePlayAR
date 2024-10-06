// @input Physics.BodyComponent[] colliders  // Array of colliders for roses
// @input Physics.BodyComponent basketCollider  // Collider for the basket
// @input Component.Text myText

// Variable to track score
var score = 0;
print(basketCollider)
//basketCollider.onCollisionEnter.add(function (eventArgs) {
//    myText.text = "Score: " + score;
//    print("SCore: "+ score)
//});

// Check if necessary inputs are assigned
//if (!script.colliders || !script.basketCollider || script.colliders.length === 0) {
//    print("Error: Please assign all the necessary colliders and the basket collider component.");
//    return;
//}
//
//// Register collision events only for valid (non-null) roses
//for (var i = 0; i < script.colliders.length; i++) {
//    // Check if the collider is defined and not null before registering events
//    if (script.colliders[i]) {
//        script.colliders[i].onCollisionEnter.add(handleRoseCollision);
//    } else {
//        print("Warning: Collider at index " + i + " is null or undefined.");
//    }
//}
//
//// Function to handle collisions between roses and the basket
//function handleRoseCollision(eventArgs) {
//    // Check if the collision is with the basket
//    if (eventArgs.otherObject === script.basketCollider.getSceneObject()) {
//        // Increase score only when a rose collides with the basket
//        score += 1;
//        print("Rose collided with basket. Score: " + score);
//    } else {
//        // Ignore collisions with other objects
//        print("Collision detected, but it's not with the basket.");
//    }
//}
