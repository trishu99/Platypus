import psutil
class disk():
	def partitions(self):
		l = psutil.disk_partitions()
		di = []
		for x in l:
			di.append({"device" : x[0], "mountpoint" : x[1],"fstype" : x[2],"opts" : x[3]})
		return di
	def disk_usage(self, p):
		l = psutil.disk_usage(p)
		di = []
		print(l)
		di.append({"total" : l[0], "free" : l[1], "used" : l[2], "percent" : l[3]})
		return di

	def DiskIOCounters(self):
		l = psutil.disk_io_counters(perdisk=False)
		di = []
		di.append({"read_count" : l[0], "write_count" : l[1], "read_bytes" : l[2], "write_bytes" : l[3],
		"read_time" : l[4], "write_time" : l[5], "read_merged_count" : l[6], "write_merged_count" : l[7], "busy_time" : l[8] })
		return di


# a = disk()
# l = a.DiskIOCounters()
# print(l)
# print(l[0], l[1], l[2], l[3])


# for x in l:
# 	print(x)
# print(a.disk_partitions())