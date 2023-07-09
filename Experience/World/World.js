import { EventEmitter } from "events";
import Experience from "../Experience.js";
import Environment from "./Environment.js";
import Computer from "./Computer.js";

export default class World extends EventEmitter {
	constructor() {
		super();
		this.experience = new Experience();
		this.sizes = this.experience.sizes;
		this.scene = this.experience.scene;
		this.canvas = this.experience.canvas;
		this.camera = this.experience.camera;
		this.resources = this.experience.resources;

		console.log(this.experience);

		this.resources.on("ready", () => {
			this.environment = new Environment();
			this.computer = new Computer();
		});
	}
}
