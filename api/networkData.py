import psutil as ps
import re
import os
import netifaces as net #used for gathering network information

# mimic the whole psutil module
class networkData():	

	# list of interface identifiers
	def allNICs(self):
		return os.listdir('/sys/class/net/')

	# get address of a particular interface
	def addressForInterface(self, interface):
		try:
			return net.ifaddresses(interface)
		except:
			return {"message" : "No such interface"}

	#get addresses for all interfaces
	def addressForAllInterfaces(self):
		allnets = net.interfaces()
		d = dict()
		for x in allnets:
			d[x] = self.addressForInterface(x)
		p = d
		l = list(p)
		l1 = list()
		
		di = list()
		for x in l:
			lis = []
			# di.append({"interface" : x, "address" : lis})
			s = str()
			for y in p[x]:
				for z in p[x][y]:
					q = str(z)
					q = q.strip('{')
					q = q.strip('}')
					q = q.replace("'", "")
					s = str(y) + " " + q
					lis.append(s)
			# print(s)
			di.append({"interface" : x, "address" : lis})
		for x in di:
			print(x)
		return di

	#get all interfaces
	def interfaces(self):
		allnets = net.interfaces()
		d = dict()
		for x in allnets:
			d[x] = self.addressForInterface(x)
		p = d
		l = list(p)
		return l


	# get all gateways
	def gateways(self):
		a = net.gateways()

		l = list()
		for x in a['default']:
			lis = []
			for y in a[x][0]:
				lis.append(y)
			l.append({'addressFamily' : x , 'ip' : lis[0], 'name' : lis[1]})
		return l

	#Address families numbers
	def addressFamilies(self):
		return {"AF_APPLETALK" : "5",
	    "AF_ASH" : "18",
	    "AF_ATMPVC" : "8",
	    "AF_ATMSVC" : "20",
	    "AF_AX25" : "3",
	    "AF_BLUETOOTH" : "31",
	    "AF_BRIDGE" : "7",
	    "AF_DECnet" : "12",
	    "AF_ECONET" : "19",
	    "AF_FILE" : "1",
	    "AF_INET" : "2",
	    "AF_INET6" : "10",
	    "AF_IPX" : "4",
	    "AF_IRDA" : "23",
	    "AF_ISDN" : "34",
	    "AF_KEY" : "15",
	    "AF_LINK" : "17",
	    "AF_NETBEUI" : "13",
	    "AF_NETLINK" : "16",
	    "AF_NETROM" : "6",
	    "AF_PACKET" : "17",
	    "AF_PPPOX" : "24",
	    "AF_ROSE" : "11",
	    "AF_ROUTE" : "16",
	    "AF_SECURITY" : "14",
	    "AF_SNA" : "22",
	    "AF_UNIX" : "1",
	    "AF_UNSPEC" : "0",
	    "AF_WANPIPE" : "25",
	    "AF_X25" : "9"}
	    