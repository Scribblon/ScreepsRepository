var helperCreeps = {
    
    getCreepsByRole: function(roleCreep) {
        var found = [];
        for(creep in Game.creeps) {
            if (Game.creeps[creep].memory.role == roleCreep) {
                found.push(creep)
            }
        }
        return found;
    }
    
};

module.exports = helperCreeps;