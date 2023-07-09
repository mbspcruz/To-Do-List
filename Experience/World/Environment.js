import Experience from "../Experience";
import * as THREE from "three";

export default class Environment {
	constructor() {
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.resources = this.experience.resources;

		this.setSunlight();
	}

	setSunlight() {
		this.sunLight = new THREE.DirectionalLight("#ffffff", 3);
		this.sunLight.position.set(0, 10, 10);
		this.scene.add(this.sunLight);

		this.ambientLight = new THREE.AmbientLight("#ffffff", 1);
		this.scene.add(this.ambientLight);
	}
	resize() {}
	update() {}
}
