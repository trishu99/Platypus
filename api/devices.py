import pyudev
import os
class Devices():
	def getAllDevices(self):
		con = pyudev.Context()
		l = list()
		for x in con.list_devices():
			l.append(str(x).split("'")[1])
		return l;
	def pendrives(self):
		context = pyudev.Context()
		monitor = pyudev.Monitor.from_netlink(context)
		monitor.filter_by(subsystem='usb')
		l = list()
		i = 0
		for device in iter(monitor.poll, None):
		    if(i == 10):
		    	break
		    i = i + 1
		    if device.action == 'add':
		    	l.append(str(device).split("'")[1])
		    	break

		return l
	
	def readfile(self):
		print('from acpi')
		with open("info.txt", 'r') as file_in:
			lines = []
			for line in file_in:
				lines.append(line)
		print(lines)
		return lines
	
	def acpi(self):
		os.system('acpi_listen | ./predate.sh > info.txt &')
		

# d = Devices()
# print(d.pendrives())
# print(help(pyudev.Monitor.filter_by))	
