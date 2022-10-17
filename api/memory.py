import psutil
class memory():
	def memory(self):
		di = []
		l = psutil.virtual_memory()
		di.append({"type" : "virtual_memory", "total" : l[0], "used" : l[1], "free" : l[2], "percent" : l[3], "sin" : l[4], "sout" : l[5]})
		l = psutil.swap_memory()
		di.append({"type" : "swap_memory", "total" : l[0], "used" : l[1], "free" : l[2], "percent" : l[3], "sin" : l[4], "sout" : l[5]})
		return di
# a = memory()
# print(a.vm())
