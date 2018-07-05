package arm.node;

@:keep class CorgiHop extends armory.logicnode.LogicTree {

	public function new() { super(); notifyOnAdd(add); }

	override public function add() {
		var _TranslateObject = new armory.logicnode.TranslateObjectNode(this);
		var _OnKeyboard = new armory.logicnode.OnKeyboardNode(this);
		_OnKeyboard.property0 = "Down";
		_OnKeyboard.property1 = "space";
		var _TranslateObject_001 = new armory.logicnode.TranslateObjectNode(this);
		_TranslateObject_001.addInput(_OnKeyboard, 0);
		_TranslateObject_001.addInput(new armory.logicnode.ObjectNode(this, "Camera"), 0);
		_TranslateObject_001.addInput(new armory.logicnode.VectorNode(this, 0.0, 0.0, 0.11999999731779099), 0);
		_TranslateObject_001.addOutputs([new armory.logicnode.NullNode(this)]);
		_OnKeyboard.addOutputs([_TranslateObject, _TranslateObject_001]);
		_TranslateObject.addInput(_OnKeyboard, 0);
		_TranslateObject.addInput(new armory.logicnode.ObjectNode(this, "Corgi"), 0);
		_TranslateObject.addInput(new armory.logicnode.VectorNode(this, 0.0, 0.0, 0.20999999344348907), 0);
		_TranslateObject.addOutputs([new armory.logicnode.NullNode(this)]);
		var _RotateObject_003 = new armory.logicnode.RotateObjectNode(this);
		var _OnUpdate = new armory.logicnode.OnUpdateNode(this);
		_OnUpdate.addOutputs([_RotateObject_003]);
		_RotateObject_003.addInput(_OnUpdate, 0);
		_RotateObject_003.addInput(new armory.logicnode.ObjectNode(this, "Corgi"), 0);
		_RotateObject_003.addInput(new armory.logicnode.VectorNode(this, 0.0, 0.009999999776482582, 0.0), 0);
		_RotateObject_003.addOutputs([new armory.logicnode.NullNode(this)]);
		var _RotateObject_004 = new armory.logicnode.RotateObjectNode(this);
		_RotateObject_004.addInput(new armory.logicnode.NullNode(this), 0);
		_RotateObject_004.addInput(new armory.logicnode.ObjectNode(this, "Corgi"), 0);
		_RotateObject_004.addInput(new armory.logicnode.VectorNode(this, 0.0, 0.009999999776482582, 0.0), 0);
		_RotateObject_004.addOutputs([new armory.logicnode.NullNode(this)]);
	}
}
