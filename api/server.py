from flask import Flask, request, make_response, jsonify, send_file, send_from_directory, safe_join, abort
import shell, listAll, moveFiles, systemData, networkData, devices, process, sensor, disk, memory, startp
import Static_malware_detection.malware as malware
from flask_cors import CORS
import shutil
import os
import signal

app = Flask(__name__) 
CORS(app)

def handler_stop_signals(signum, frame):
	os.system('killall -9 acpi_listen')
	os.kill(os.getpid(), 9)
	#print('sigterm is send')

signal.signal(signal.SIGINT, handler_stop_signals)


"""                Platy Console            """

###################             CPU
cpu = systemData.CPU()

# get logical cores
@app.route('/logicalCores', methods=['GET'])
def logicalCoresFun(): 
    return jsonify(cpu.logicalCores())

# get Physical cores
@app.route('/physicalCores', methods=['GET'])
def PhysicalCoresFun(): 
    return jsonify(cpu.physicalCores())

# get CPU times
@app.route('/cpuTimes', methods=['GET'])
def cpuTimesFun(): 
    return jsonify(cpu.cpuTimes())

# get CPU times percent
@app.route('/cpuTimesPercent', methods=['GET'])
def cpuTimesPercentFun(): 
    return jsonify(cpu.cpuTimesPercent())

# get CPU utilization percentage
@app.route('/cpuPercent', methods=['GET'])
def cpuPercentFun(): 
    return jsonify(cpu.cpuPercent())


###################             NETWORK
net = networkData.networkData()

@app.route('/addressFamilies', methods = ['GET'])
def addressFamiliesFun():
    return jsonify(net.addressFamilies())

@app.route('/allNICs', methods = ['GET'])
def allNICsFun():
    return jsonify(net.allNICs())

@app.route('/interfaces', methods = ['GET'])
def interfacesFun():
    return jsonify(net.interfaces())

@app.route('/gateways', methods = ['GET'])
def gatewaysFun():
    return jsonify(net.gateways())

# get CPU utilization percentage
@app.route('/addressForAllInterfaces', methods=['GET'])
def addressForAllInterfacesFun(): 
    return jsonify(net.addressForAllInterfaces())


###################             PROCESS
p = process.process()
@app.route('/allProcesses', methods = ['GET'])
def allProcessesFun():
    return jsonify(p.allProcesses())

@app.route('/getListOfProcessSortedByMemory', methods = ['GET'])
def getListOfProcessSortedByMemoryFun():
    return jsonify(p.getListOfProcessSortedByMemory())


###################             DISK
dk = disk.disk()
@app.route('/partitions', methods = ['GET'])
def partitionsFun():
    return jsonify(dk.partitions())

@app.route('/disk_usage', methods = ['POST'])
def disk_usageFun():
    return jsonify(dk.disk_usage(request.json['device']))

@app.route('/DiskIOCounters', methods = ['GET'])
def DiskIOCountersFun():
    return jsonify(dk.DiskIOCounters())


###################             MEMORY
m = memory.memory()
@app.route('/memory', methods = ['GET'])
def memoryFun():
    return jsonify(m.memory())


"""					Platy Run 				"""
# output of a shell command
@app.route('/shell', methods=['POST'])
def shellFun(): 
	return jsonify(shell.runCommand(request.json['command']))

# list all files given a path
@app.route('/listAll', methods=['POST'])
def listAllFun(): 
	return jsonify(listAll.directoryContents(request.json['path']))

@app.route('/startprocess', methods=['POST'])
def StartProcessFun():
	return jsonify(startp.startprocess(request.json['programname']))

@app.route('/startprocessaftermins', methods=['POST'])
def StartProcessAfterMinsFun():
	return jsonify(startp.startprocessaftermins(request.json['atime']  , request.json['programname']))

@app.route('/startprocessattime', methods=['POST'])
def StartProcessAtTimeFun():
	return jsonify(startp.startprocessattime(request.json['attime']  , request.json['programname']))


@app.route('/terminateprocess', methods=['POST'])
def terminateprocessFun():
	return jsonify(startp.terminateprocess(request.json['processname'], request.json['pid']))

@app.route('/sendsignal', methods=['POST'])
def SendSignalFun():
	return jsonify(startp.sendsignal(request.json['processname'], request.json['pid'], request.json['signal']))

@app.route('/checkprocess', methods=['POST'])
def CheckProcessFun():
	return jsonify(startp.checkprocess(request.json['processname']))

@app.route('/shutdownnow', methods=['POST'])
def ShutdownNowFun():
	return jsonify(startp.shutdownnow())

@app.route('/shutdownaftermin', methods=['POST'])
def ShutdownAfterMinFun():
	return jsonify(startp.shutdownaftermin(request.json['mins']))

@app.route('/shutdownattime', methods=['POST'])
def ShutdownAtTimeFun():
	return jsonify(startp.shutdownattime(request.json['gtime']))

@app.route('/cancelshutdown', methods=['POST'])
def ShutdownCancelFun():
	return jsonify(startp.shutdowncancel())

@app.route('/restartsystem', methods=['POST'])
def RestartSystemFun():
	return jsonify(startp.restartsystem())

@app.route('/rebootsystem', methods=['POST'])
def RebootSystemFun():
	return jsonify(startp.rebootsystem())

@app.route('/suspendsystem', methods=['POST'])
def SuspendSystemFun():
	return jsonify(startp.suspendsystem())

@app.route('/hibernatesystem', methods=['POST'])
def HibernateSystemFun():
	return jsonify(startp.hibernatesystem())

@app.route('/screenlocksystem', methods=['POST'])
def ScreenlockSystemFun():
	return jsonify(startp.screenlocksystem())

@app.route('/logoutsystem', methods=['POST'])
def LogoutSystemFun():
	return jsonify(startp.logoutsystem())





"""                 Platy Real             """
d = devices.Devices()
d.acpi()
# get a all devices
@app.route('/getAllDevices', methods=['GET'])
def getAllDevicesFun(): 
    return jsonify(d.getAllDevices())

@app.route('/pendrives', methods=['GET'])
def pendrivesFun(): 
    return jsonify(d.pendrives())


@app.route('/readfile', methods=['GET'])
def acpiFun():
    print('from server acpi')
    print(d.readfile())
    return jsonify(d.readfile())


"""					Platy Detect				"""
md = malware.Malware()

@app.route('/malwaredetection', methods=['GET'])
def malwareFun():
    print('from server malware')
    print(md.malwaredetection())
    return jsonify(md.malwaredetection())




"""					Platy Share				"""
# get a file
@app.route('/getFile', methods=['POST'])
def getFileFun(): 
    try:
        l = request.json['path'].split('/')
        pat = ''
        for x in range(0, len(l) - 1):
            pat = pat + l[x] + '/'
        print(pat + l[len(l) - 1])
        return send_from_directory(pat, filename = l[len(l) - 1], as_attachment=True)
    except FileNotFoundError:
        abort(404)

# put a file
@app.route('/putFile', methods = ['POST'])  
def putFileFun():  
    try:
        f = request.files['file']
        f.save(f.filename)
        shutil.move(f.filename, "ReceivedFiles/" + f.filename)
        return jsonify({'message' : 'File uploaded succesfully'})
    except:
        abort(404)

# move a file to desired location
@app.route('/moveFiles', methods = ['POST'])  
def moveFilesFun():  
    try:
    	moveFiles.movefiles(request.json['source'], request.json['destination'])
    	return jsonify({"message" : "Success"})  
    except:
    	abort(404)
"""									"""



if __name__ == '__main__': 
	#os.system('./file.sh')
	app.run(debug = True) 
