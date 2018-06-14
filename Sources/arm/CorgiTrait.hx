package arm;
import iron.object.Object;
import iron.system.Input;
import iron.Scene;
import armory.trait.physics.RigidBody;

class CorgiTrait extends iron.Trait{
    public function new(){
        super();
        notifyOnUpdate(update);
    }

    function update(){
        if(Input.getKeyboard().down("space")){}else{
            if(Scene.active.getMesh("Corgi").transform.loc.z > 0){
                Scene.active.getMesh("Corgi").transform.translate(0,0,-0.2);
            }
        }
    }
}
