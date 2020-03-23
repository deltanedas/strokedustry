// maek loook lik habe stro

const mod = Vars.mods.locateMod("strokedustry");

const oldName = "strokedustry";
mod.meta.displayName = "";
const color = new Color();
for (var i = 0; i < oldName.length; i++) {
	print(oldName[i]);
	mod.meta.displayName += "[#" + color.rand() + "]" + oldName[i];
}