class DisasterSystem {
    constructor() {
        this.disaster = {};
    }
    addSituation(location, situation) {
        if (!this.disaster[location]) {
            this.disaster[location] = [];
        }
        this.disaster[location].push(situation);
    }

    getSituation(location) {
        return this.disaster[location];
    }
}

const disas = new DisasterSystem();
disas.addSituation("Nairobi", "Fire");
disas.addSituation("Saboti", "Floods");
console.log(disas.getSituation("Nairobi")); 
console.log(disas.getSituation("Saboti")); 