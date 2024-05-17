class RecoverySystem:
    def __init__(self):
        self.disaster = {}
    def add_situation(self, location, situation):
        if location not in self.disaster:
            self.disaster[location] = []
        self.disaster[location].append(situation)
    def get_situation(self, location):
        return self.disaster.get(location, [])

dis = RecoverySystem()
dis.add_situation("Kisumu", "Flood")
dis.add_situation("Kitale", "Earthquake")
print(dis.get_situation("Kisumu"))  
print(dis.get_situation("Kitale"))  