package arm;
import iron.object.Object;
import iron.system.Input;
import iron.Scene;
import armory.trait.physics.RigidBody;

class CorgiTrait extends iron.Trait{
    public function new(){
        super();
        // We want to get notified every frame
        notifyOnUpdate(update);
    }

    function update(){
        // f key was pressed
        if (Input.getKeyboard().started("f")){
            // Spawn Box object
            Scene.active.spawnObject("Corgi", null, boxSpawned);
        }
    }
}
