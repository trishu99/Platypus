import os, signal, multiprocessing, pyudev, sys, time
class Devices():
	def getAllDevices(self):
		con = pyudev.Context()
		l = list()
		for x in con.list_devices():
			l.append(str(x).split("'")[1])
		return l;

	def loop(self):
		pid = os.getpid()		
		f = open("pid", 'w')
		f.write(str(pid))
		f.close()
		f = open("pendrives.txt", 'w')		
		context = pyudev.Context()
		monitor = pyudev.Monitor.from_netlink(context)
		monitor.filter_by(subsystem='usb')
		for device in iter(monitor.poll, None):
		    if device.action == 'add':
		    	f.write(str(device).split("'")[1])
		    	f.write('\n')
		    	f.close()
		    	f = open("pendrives.txt", 'a')
		    
	def pendrives(self):
		p1 = multiprocessing.Process(target=self.loop) 
		p1.start()
		time.sleep(3)
		f = open("pendrives.txt", 'r')
		l = f.readlines()
		f.close()
		f = open("pid", "r")
		os.kill(int(f.read()), signal.SIGTERM)
		f.close()
		return l

	def searchInfinite(self):
		while(1):
			self.pendrives()
			print("H")
# a = Devices()
# print(a.searchInfinite())