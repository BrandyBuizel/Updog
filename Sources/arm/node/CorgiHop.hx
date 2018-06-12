package arm.node;

@:keep class CorgiHop extends armory.logicnode.LogicTree {

	public function new() { super(); notifyOnAdd(add); }

	override public function add() {
		var _RotateObject = new armory.logicnode.RotateObjectNode(this);
		var _ScaleObject = new armory.logicnode.ScaleObjectNode(this);
		var _OnUpdate = new armory.logicnode.OnUpdateNode(this);
		_OnUpdate.addOutputs([_ScaleObject]);
		_ScaleObject.addInput(_OnUpdate, 0);
		_ScaleObject.addInput(new armory.logicnode.ObjectNode(this, "Corgi"), 0);
		_ScaleObject.addInput(new armory.logicnode.VectorNode(this, 0.0, 0.0010000000474974513, 0.0), 0);
		_ScaleObject.addOutputs([_RotateObject]);
		_RotateObject.addInput(_ScaleObject, 0);
		_RotateObject.addInput(new armory.logicnode.ObjectNode(this, "Corgi"), 0);
		_RotateObject.addInput(new armory.logicnode.VectorNode(this, 0.0, 0.0010000000474974513, 0.0), 0);
		_RotateObject.addOutputs([new armory.logicnode.NullNode(this)]);
	}
}
