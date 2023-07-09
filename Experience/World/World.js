import { EventEmitter } from "events";
import Experience from "../Experience.js";
import * as THREE from "three";
import Environment from "./Environment.js";

export default class World extends EventEmitter {
	constructor() {
		super();
		this.experience = new Experience();
		this.sizes = this.experience.sizes;
		this.scene = this.experience.scene;
		this.canvas = this.experience.canvas;
		this.camera = this.experience.camera;
		this.resources = this.experience.resources;

		this.resources.on("ready", () => {
			this.environment = new Environment();
		});
	}
}
