import { Entity, System, ECS, Component } from "./minimal-ecs";

class Position extends Component {
	constructor(public x:number, public y: number) {
		super();
	}
}
class Locator extends System {
	componentsRequired = new Set<Function>([Position]);
	update(entities: Set<Entity>): void { }
}
let ecs = new ECS();
let locator = new Locator();
let entity = ecs.addEntity();
let position = new Position(5,5)
ecs.addComponent(entity,position);
let comps = ecs.getComponents(entity);
let p = comps.get(Position);

ecs.removeComponent(entity,Position);
