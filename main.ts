controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 3 3 . . . . . . . . . . . 
        . . . 3 . 3 3 3 3 . . . . . . . 
        . . . 3 . 3 3 3 . 3 3 . . . . . 
        . . 3 . . 3 . . 3 . 3 . . . . . 
        . . 3 . . 3 . 3 . 3 3 3 . . . . 
        . 3 3 . . 3 3 3 3 3 3 . . . . . 
        . . . 3 3 . . 3 3 3 3 . . . . . 
        . . . . . 3 3 . . . . 3 . . . . 
        . . . . . . . 3 3 . . 3 . . . . 
        . . . . . . . . . 3 3 3 3 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
})
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
