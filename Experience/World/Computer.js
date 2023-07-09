import Experience from "../Experience";

export default class Computer {
	constructor() {
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.resources = this.experience.resources;
		this.time = this.experience.time;
		this.computer = this.resources.items.macbook;
		this.actualComputer = this.computer.scene;

		console.log(this.actualComputer);
	}
}
