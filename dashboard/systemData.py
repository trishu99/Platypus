import psutil
import re


# mimic the whole psutil module
class CPU:

	# No of logical cores
	def logicalCores(self):
		return psutil.cpu_count()

	# No of physical cores
	def physicalCores(self):
		return psutil.cpu_count(logical = False)

	# Time spent by CPU in different modes
	def cpuTimes(self):
		a = str(psutil.cpu_times())
		#print(a)
		a = re.findall('\d+\.\d+', a)
		return {'user' : a[0], 'nice' : a[1], 'system' : a[2], 'idle' : a[3], 'iowait' : a[4], 
		'irq' : a[5], 'softirq' : a[6], 'steat' : a[7], 'guest' : a[8], 'guest_nice' : a[9]}
	
	# cpu utilization in percentage 
	def cpuPercent(self):
		return psutil.cpu_percent(interval = 1)


	def cpuTimesPercent(self):
		return psutil.cpu_times_percent(interval = 1)


# a = CPU()
# print(a.cpuTimesPercent())
# print(a.cpuTimes())
# print(a.cpuPercent())
# print(a.logicalCores())
# print(a.physicalCores())
