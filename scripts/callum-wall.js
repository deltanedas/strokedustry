const callum = extendContent(Wall, "callum-wall", {
	draw(tile) {
		Draw.rect(this.region, tile.drawx(), tile.drawy(), 64 * Draw.scl, 64 * Draw.scl);
	}
});