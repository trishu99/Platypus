import psutil

listofp = list()

for proc in psutil.process_iter():
	pinfo = proc.as_dict(attrs=['pid', 'name', 'cpu_percent', 'memory_percent', 'memory_info', 'create_time', 'cpu_times'])
	listofp.append(pinfo)

for i in listofp:
	print(i)
