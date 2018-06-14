package arm.node;

@:keep class CorgiHop extends armory.logicnode.LogicTree {

	public function new() { super(); notifyOnAdd(add); }

	override public function add() {
		var _TranslateObject = new armory.logicnode.TranslateObjectNode(this);
		var _OnKeyboard = new armory.logicnode.OnKeyboardNode(this);
		_OnKeyboard.property0 = "Down";
		_OnKeyboard.property1 = "space";
		var _RotateObject_003 = new armory.logicnode.RotateObjectNode(this);
		_RotateObject_003.addInput(_OnKeyboard, 0);
		_RotateObject_003.addInput(new armory.logicnode.ObjectNode(this, "Corgi"), 0);
		_RotateObject_003.addInput(new armory.logicnode.VectorNode(this, 0.0, 0.009999999776482582, 0.0), 0);
		_RotateObject_003.addOutputs([new armory.logicnode.NullNode(this)]);
		_OnKeyboard.addOutputs([_RotateObject_003, _TranslateObject]);
		_TranslateObject.addInput(_OnKeyboard, 0);
		_TranslateObject.addInput(new armory.logicnode.ObjectNode(this, "Corgi"), 0);
		_TranslateObject.addInput(new armory.logicnode.VectorNode(this, 0.0, 0.0, 0.15000000596046448), 0);
		_TranslateObject.addOutputs([new armory.logicnode.NullNode(this)]);
		var _RotateObject = new armory.logicnode.RotateObjectNode(this);
		var _OnUpdate = new armory.logicnode.OnUpdateNode(this);
		_OnUpdate.addOutputs([_RotateObject]);
		_RotateObject.addInput(_OnUpdate, 0);
		_RotateObject.addInput(new armory.logicnode.ObjectNode(this, "Corgi"), 0);
		_RotateObject.addInput(new armory.logicnode.VectorNode(this, 0.0, 0.009999999776482582, 0.0), 0);
		_RotateObject.addOutputs([new armory.logicnode.NullNode(this)]);
	}
}
