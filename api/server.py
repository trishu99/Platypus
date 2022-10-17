from flask import Flask, request, make_response, jsonify, send_file, send_from_directory, safe_join, abort
import shell, listAll, moveFiles, systemData, networkData, devices, process, sensor, disk, memory
from flask_cors import CORS
import shutil
import multiprocessing, time

app = Flask(__name__) 
CORS(app)

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

# change directory
@app.route('/changedir', methods=['POST'])
def changedirFun(): 
    return jsonify(shell.changedir(request.json['command']))

# get current working directory
@app.route('/CWD', methods=['GET'])
def CWDFun(): 
    return jsonify(shell.CWD())

# list all files given a path
@app.route('/listAll', methods=['POST'])
def listAllFun(): 
	return jsonify(listAll.directoryContents(request.json['path']))


"""                 Platy Real             """
d = devices.Devices()
# get a all devices
@app.route('/getAllDevices', methods=['GET'])
def getAllDevicesFun(): 
    return jsonify(d.getAllDevices())

@app.route('/pendrives', methods=['GET'])
def pendrivesFun(): 
    return jsonify(d.pendrives())



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
    app.run(debug = True) 
    
        